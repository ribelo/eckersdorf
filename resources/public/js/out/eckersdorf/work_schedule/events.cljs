(ns eckersdorf.work-schedule.events
  (:require [re-frame.core :as rf]
            [cljs-time.core :as dt]
            [cljs-time.periodic :as dtp]
            [taoensso.encore :as ec :refer [path]]
            [ajax.core :as ajax]
            [eckersdorf.db.core :refer [->local-storage]]
            [cljs-time.coerce :as dtc]))




(rf/reg-event-db
  :work-schedule/show-dialog
  (fn [db [_ type]]
    (assoc db :work-schedule/show-dialog? type)))


(rf/reg-event-db
  :work-schedule/hide-dialog
  (fn [db [_ type]]
    (assoc db :work-schedule/show-dialog? type)))


(rf/reg-event-db
  :work-schedule/set-workplace
  [->local-storage]
  (fn [db [_ workplace-id]]
    (assoc db :work-schedule/selected-workplace-id workplace-id)))


(rf/reg-event-db
  :work-schedule/set-date
  [->local-storage]
  (fn [db [_ date]]
    (let [days (dtp/periodic-seq (dt/first-day-of-the-month date)
                                 (dt/plus (dt/last-day-of-the-month date) (dt/days 1))
                                 (dt/days 1))]
      (assoc db :work-schedule/main-date date
                :work-schedule/days days))))



(rf/reg-event-db
  :work-schedule/schedule-work
  (fn [db [_ work]]
    (let [schedule (:work-schedule/schedule db)]
      (assoc db :work-schedule/schedule (distinct (conj schedule work))))))


(rf/reg-event-db
  :work-schedule/remove-work
  (fn [db [_ {:keys [work-schedule/worker-id
                     work-schedule/workplace-id
                     work-schedule/datetime]}]]
    (let [schedule (:work-schedule/schedule db)]
      (assoc db :work-schedule/schedule
                (->> schedule
                     (remove (fn [work]
                               (and (= worker-id (:work-schedule/worker-id work))
                                    (= workplace-id (:work-schedule/workplace-id work))
                                    (= datetime (:work-schedule/datetime work)))))
                     (distinct)
                     (into []))))))


(rf/reg-event-fx
  :work-schedule/update-work
  (fn [db [_ work]]
    {:dispatch-n [[:work-schedule/remove-work work]
                  [:work-schedule/schedule-work work]]}))


(rf/reg-event-fx
  :work-schedule/clear-day
  (fn [db [_ {:keys [work-schedule/worker-id
                     work-schedule/workplace-id
                     work-schedule/datetime] :as work}]]
    (let [datetime (dtc/from-string datetime)
          zero-time (dt/minus datetime (dt/hours (dt/hour datetime)))
          works (mapv (fn [datetime]
                        [:work-schedule/remove-work (assoc work :work-schedule/datetime
                                                                (dtc/to-string datetime))])
                      (dtp/periodic-seq (dt/plus zero-time (dt/hours 6))
                                        (dt/plus zero-time (dt/hours 21))
                                        (dt/hours 1)))]
      {:dispatch-n works})))


(rf/reg-event-fx
  :work-schedule/set-vacation
  (fn [db [_ {:keys [work-schedule/worker-id
                     work-schedule/workplace-id
                     work-schedule/datetime] :as work}]]
    (let [datetime (dtc/from-string datetime)
          zero-time (dt/minus datetime (dt/hours (dt/hour datetime)))
          works (mapv (fn [datetime]
                        [:work-schedule/update-work (assoc work
                                                      :work-schedule/datetime (dtc/to-string datetime)
                                                      :work-schedule/work-type "vacation")])
                      (dtp/periodic-seq (dt/plus zero-time (dt/hours 6))
                                        (dt/plus zero-time (dt/hours 21))
                                        (dt/hours 1)))]
      {:dispatch-n works})))


(rf/reg-event-fx
  :work-schedule/set-holiday
  (fn [db [_ workplace-id workers datetime]]
    (let [datetime (dtc/from-string datetime)
          zero-time (dt/minus datetime (dt/hours (dt/hour datetime)))
          works (doall (for [{:keys [mongo/object-id
                                     worker/first-name
                                     worker/last-name
                                     worker/working-hours]} workers
                             datetime (dtp/periodic-seq (dt/plus zero-time (dt/hours 6))
                                                        (dt/plus zero-time (dt/hours 21))
                                                        (dt/hours 1))]
                         [:work-schedule/update-work {:work-schedule/workplace-id workplace-id
                                                      :work-schedule/worker-id    object-id
                                                      :work-schedule/datetime     (dtc/to-string datetime)
                                                      :work-schedule/work-type    "holiday"}]))]
      {:dispatch-n works})))


(rf/reg-event-fx
  :work-schedule/remove-holiday
  (fn [db [_ workplace-id workers datetime]]
    (let [datetime (dtc/from-string datetime)
          zero-time (dt/minus datetime (dt/hours (dt/hour datetime)))
          works (doall (for [{:keys [mongo/object-id
                                     worker/first-name
                                     worker/last-name
                                     worker/working-hours]} workers
                             datetime (dtp/periodic-seq (dt/plus zero-time (dt/hours 6))
                                                        (dt/plus zero-time (dt/hours 21))
                                                        (dt/hours 1))]
                         [:work-schedule/remove-work {:work-schedule/workplace-id workplace-id
                                                      :work-schedule/worker-id    object-id
                                                      :work-schedule/datetime     (dtc/to-string datetime)}]))]
      {:dispatch-n works})))


(rf/reg-event-db
  :work-schedule/clear
  (fn [db _]
    (assoc db :work-schedule/schedule [])))


(rf/reg-event-fx
  :work-schedule/request-work-schedule
  (fn [{db :db} [_ works]]
    (println :work-schedule/request-work-schedule works)
    {:http-xhrio {:method          :post
                  :uri             (path "/api/1.0/work-schedule")
                  :params          works
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:work-schedule/request-work-schedule-success]
                  :on-failure      [:work-schedule/request-work-schedule-failure]}}))

(rf/reg-event-fx
  :work-schedule/request-work-schedule-success
  (fn [{db :db} [_ {:keys [data]}]]
    {:db       (assoc db :workers/list data)
     :dispatch [:workers/hide-dialog]
     :message  {:content  "poprawnie dodano pracownika"
                :type     :success
                :duration 3}}))


(rf/reg-event-fx
  :work-schedule/request-work-schedule-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch [:error/set {:event :workers/request-update
                            :desc  response}]
     :message  {:content  (str "błąd przy dodawaniu pracownika: " status-text)
                :type     :error
                :duration 3}}))


;(rf/reg-event-db
;  :work-schedule/set-holiday
;  [->local-storage]
;  (fn [db [_ [date {:keys [worker/id]}]]]
;    (reduce (fn [db hour]
;              (assoc-in db [:work-schedule/schedule (str date) id hour] :holiday))
;            db
;            (range 6 21))))
;
;
;(rf/reg-event-db
;  :work-schedule/remove
;  [->local-storage]
;  (fn [db [_ [date {:keys [worker/id]} hour]]]
;    (ec/dissoc-in db [:work-schedule/schedule (str date) id] hour)))
;
;
;(rf/reg-event-db
;  :work-schedule/clear
;  [->local-storage]
;  (fn [db [_ [date {:keys [worker/id]}]]]
;    (reduce (fn [db hour]
;              (ec/dissoc-in db [:work-schedule/schedule (str date) id] hour))
;            db
;            (range 6 21))))
;
;
;(rf/reg-event-db
;  :work-schedule/toggle-print
;  (fn [db _]
;    (update db :view/print? not)))


;(rf/reg-event-fx
;  :work-schedule/electron-print
;  (fn [{db :db} _]
;    (electron/print! {:printBackground true})))


;(rf/reg-event-fx
;  :work-schedule/print-schedule
;  (fn [{db :db} _]
;    {:dispatch-n     [[:work-schedule/toggle-print]
;                      ^:flush-dom [:work-schedule/electron-print]]
;     :dispatch-later [{:ms 1000 :dispatch [:work-schedule/toggle-print]}]}))


