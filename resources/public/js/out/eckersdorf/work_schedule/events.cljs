(ns eckersdorf.work-schedule.events
  (:require [re-frame.core :as rf]
            [cljs-time.core :as dt]
            [cljs-time.coerce :as dtc]
            [cljs-time.periodic :as dtp]
            [cljs-time.predicates :as dtpred]
            [taoensso.encore :as ec :refer [path]]
            [ajax.core :as ajax]
            [eckersdorf.db.core :refer [->local-storage]]
            [eckersdorf.work-schedule.utils :as utils]
            [eckersdorf.workers.utils :as workers.utils]))




(rf/reg-event-db
  :work-schedule/show-dialog
  (fn [db [_ type]]
    (assoc db :work-schedule/show-dialog? type)))


(rf/reg-event-db
  :work-schedule/hide-dialog
  (fn [db [_ type]]
    (assoc db :work-schedule/show-dialog? type)))


(rf/reg-event-db
  :work-schedule/toggle-print
  (fn [db _]
    (update db :work-schedule/print? not)))


(rf/reg-event-fx
  :work-schedule/set-workplace
  (fn [{db :db} [_ workplace-id]]
    {:db       (assoc db :work-schedule/selected-workplace-id workplace-id)
     :dispatch [:work-schedule/ajax.get-work-schedule]}))


(rf/reg-event-fx
  :work-schedule/set-date
  (fn [{db :db} [_ datetime]]
    (let [days (dtp/periodic-seq (dt/first-day-of-the-month datetime)
                                 (dt/plus (dt/last-day-of-the-month datetime) (dt/days 1))
                                 (dt/days 1))]
      {:db         (assoc db :work-schedule/main-date datetime
                             :work-schedule/days days)
       :dispatch-n [[:work-schedule/calculate-all-working-days-in-month]
                    [:work-schedule/ajax.get-work-schedule]]})))


(rf/reg-event-db
  :work-schedule/set-edited
  (fn [db _]
    (assoc db :work-schedule/edited? true)))


(rf/reg-event-db
  :work-schedule/unset-edited
  (fn [db _]
    (assoc db :work-schedule/edited? false)))


(rf/reg-event-db
  :work-schedule/calculate-all-working-days-in-month
  (fn [db _]
    (let [datetime (:work-schedule/main-date db)
          begin-time (dt/first-day-of-the-month datetime)
          end-time (dt/plus (dt/last-day-of-the-month begin-time) (dt/days 1))
          works (first (vals (:work-schedule/schedule db)))
          working-days (->> (dtp/periodic-seq begin-time end-time (dt/days 1))
                            (filter #(dtpred/weekday? %))
                            (count))
          holidays (->> works
                        (filter (fn [work]
                                  (= "holiday" (:work-schedule/work-type work))))
                        (map #(dt/day (:work-schedule/datetime %)))
                        (distinct)
                        (count))]
      (assoc-in db [:work-schedule/stats :all-working-days] (- working-days holidays)))))



(rf/reg-event-db
  :work-schedule/calculate-hours-worked-in-month
  (fn [db [_ {:keys [work-schedule/worker-id]}]]
    (let [calculate-fn (fn [db worker-id]
                         (->> (get-in db [:work-schedule/schedule worker-id])
                              (filter #(#{"seller" "butcher"} (:work-schedule/work-type %)))
                              (count)))]
      (if worker-id
        (assoc-in db [:work-schedule/stats worker-id :hours-worked-in-month] (calculate-fn db worker-id))
        (let [workers (workers.utils/workers-by-id (:workers/list db) (:work-schedule/selected-workplace-id db))]
          (reduce (fn [db {:keys [mongo/object-id]}]
                    (assoc-in db [:work-schedule/stats object-id :hours-worked-in-month] (calculate-fn db object-id)))
                  db workers))))))


(rf/reg-event-db
  :work-schedule/calculate-days-worked-in-month
  (fn [db [_ {:keys [work-schedule/worker-id]}]]
    (let [calculate-fn (fn [db worker-id]
                         (->> (get-in db [:work-schedule/schedule worker-id])
                              (filter #(#{"seller" "butcher"} (:work-schedule/work-type %)))
                              (map (fn [{:keys [work-schedule/datetime]}] (dt/day datetime)))
                              (count)))]
      (if worker-id
        (assoc-in db [:work-schedule/stats worker-id :days-worked-in-month] (calculate-fn db worker-id))
        (let [workers (workers.utils/workers-by-id (:workers/list db) (:work-schedule/selected-workplace-id db))]
          (reduce (fn [db {:keys [mongo/object-id]}]
                    (assoc-in db [:work-schedule/stats object-id :days-worked-in-month] (calculate-fn db object-id)))
                  db workers))))))


(rf/reg-event-db
  :work-schedule/calculate-saturdays-worked-in-month
  (fn [db [_ {:keys [work-schedule/worker-id]}]]
    (let [calculate-fn (fn [db worker-id]
                         (->> (get-in db [:work-schedule/schedule worker-id])
                              (filter #(and (#{"seller" "butcher"} (:work-schedule/work-type %))
                                            (dtpred/saturday? (:work-schedule/datetime %))))
                              (map (fn [{:keys [work-schedule/datetime]}] (dt/day datetime)))
                              (distinct)
                              (count)))]
      (if worker-id
        (assoc-in db [:work-schedule/stats worker-id :saturdays-worked-in-month] (calculate-fn db worker-id))
        (let [workers (workers.utils/workers-by-id (:workers/list db) (:work-schedule/selected-workplace-id db))]
          (reduce (fn [db {:keys [mongo/object-id]}]
                    (assoc-in db [:work-schedule/stats object-id :saturdays-worked-in-month] (calculate-fn db object-id)))
                  db workers))))))


(rf/reg-event-db
  :work-schedule/calculate-sundays-worked-in-month
  (fn [db [_ {:keys [work-schedule/worker-id]}]]
    (let [calculate-fn (fn [db worker-id]
                         (->> (get-in db [:work-schedule/schedule worker-id])
                              (filter #(and (#{"seller" "butcher"} (:work-schedule/work-type %))
                                            (dtpred/sunday? (:work-schedule/datetime %))))
                              (map (fn [{:keys [work-schedule/datetime]}] (dt/day datetime)))
                              (distinct)
                              (count)))]
      (if worker-id
        (assoc-in db [:work-schedule/stats worker-id :sundays-worked-in-month] (calculate-fn db worker-id))
        (let [workers (workers.utils/workers-by-id (:workers/list db) (:work-schedule/selected-workplace-id db))]
          (reduce (fn [db {:keys [mongo/object-id]}]
                    (assoc-in db [:work-schedule/stats object-id :sundays-worked-in-month] (calculate-fn db object-id)))
                  db workers))))))


(rf/reg-event-db
  :work-schedule/calculate-first-changes-worked-in-month
  (fn [db [_ {:keys [work-schedule/worker-id]}]]
    (let [calculate-fn (fn [db worker-id]
                         (->> (get-in db [:work-schedule/schedule worker-id])
                              (filter #(and (#{"seller" "butcher"} (:work-schedule/work-type %))
                                            (= 6 (dt/hour (:work-schedule/datetime %)))))
                              (map (fn [{:keys [work-schedule/datetime]}]
                                     (dt/day datetime)))
                              (distinct)
                              (count)))]
      (if worker-id
        (assoc-in db [:work-schedule/stats worker-id :first-changes-worked-in-month] (calculate-fn db worker-id))
        (let [workers (workers.utils/workers-by-id (:workers/list db) (:work-schedule/selected-workplace-id db))]
          (reduce (fn [db {:keys [mongo/object-id]}]
                    (assoc-in db [:work-schedule/stats object-id :first-changes-worked-in-month] (calculate-fn db object-id)))
                  db workers))))))


(rf/reg-event-db
  :work-schedule/calculate-second-changes-worked-in-month
  (fn [db [_ {:keys [work-schedule/worker-id]}]]
    (let [calculate-fn (fn [db worker-id]
                         (->> (get-in db [:work-schedule/schedule worker-id])
                              (filter #(and (#{"seller" "butcher"} (:work-schedule/work-type %))
                                            (= 20 (dt/hour (:work-schedule/datetime %)))))
                              (map (fn [{:keys [work-schedule/datetime]}] (dt/day datetime)))
                              (distinct)
                              (count)))]
      (if worker-id
        (assoc-in db [:work-schedule/stats worker-id :second-changes-worked-in-month] (calculate-fn db worker-id))
        (let [workers (workers.utils/workers-by-id (:workers/list db) (:work-schedule/selected-workplace-id db))]
          (reduce (fn [db {:keys [mongo/object-id]}]
                    (assoc-in db [:work-schedule/stats object-id :second-changes-worked-in-month] (calculate-fn db object-id)))
                  db workers))))))


(rf/reg-event-fx
  :work-schedule/schedule-work
  (fn [{db :db} [_ {:keys [work-schedule/worker-id] :as work}]]
    (let [works (get-in db [:work-schedule/schedule worker-id])]
      {:db         (assoc-in db [:work-schedule/schedule worker-id] (conj works work))
       :dispatch-n [[:work-schedule/calculate-hours-worked-in-month work]
                    [:work-schedule/calculate-days-worked-in-month work]
                    [:work-schedule/calculate-saturdays-worked-in-month work]
                    [:work-schedule/calculate-sundays-worked-in-month work]
                    [:work-schedule/calculate-first-changes-worked-in-month work]
                    [:work-schedule/calculate-second-changes-worked-in-month work]
                    [:work-schedule/set-edited]]})))


(rf/reg-event-fx
  :work-schedule/schedule-multiple-work
  (fn [{db :db} [_ new-works]]
    (let [worker-id (-> new-works (first) :work-schedule/worker-id)
          works (get-in db [:work-schedule/schedule worker-id])]
      {:db         (assoc-in db [:work-schedule/schedule worker-id] (into works new-works))
       :dispatch-n [[:work-schedule/calculate-hours-worked-in-month (first works)]
                    [:work-schedule/calculate-days-worked-in-month (first works)]
                    [:work-schedule/calculate-saturdays-worked-in-month (first works)]
                    [:work-schedule/calculate-sundays-worked-in-month (first works)]
                    [:work-schedule/calculate-first-changes-worked-in-month (first works)]
                    [:work-schedule/calculate-second-changes-worked-in-month (first works)]
                    [:work-schedule/set-edited]]})))


(rf/reg-event-fx
  :work-schedule/remove-work
  (fn [{db :db} [_ {:keys [work-schedule/worker-id
                           work-schedule/workplace-id
                           work-schedule/datetime] :as work}]]
    {:db         (utils/remove-work db work)
     :dispatch-n [[:work-schedule/calculate-hours-worked-in-month work]
                  [:work-schedule/calculate-days-worked-in-month work]
                  [:work-schedule/calculate-saturdays-worked-in-month work]
                  [:work-schedule/calculate-sundays-worked-in-month work]
                  [:work-schedule/calculate-first-changes-worked-in-month work]
                  [:work-schedule/calculate-second-changes-worked-in-month work]
                  [:work-schedule/set-edited]]}))


(rf/reg-event-fx
  :work-schedule/remove-multiple-work
  (fn [{db :db} [_ works]]
    {:db         (utils/remove-multiple-work db works)
     :dispatch-n [[:work-schedule/calculate-hours-worked-in-month (first works)]
                  [:work-schedule/calculate-days-worked-in-month (first works)]
                  [:work-schedule/calculate-saturdays-worked-in-month (first works)]
                  [:work-schedule/calculate-sundays-worked-in-month (first works)]
                  [:work-schedule/calculate-first-changes-worked-in-month (first works)]
                  [:work-schedule/calculate-second-changes-worked-in-month (first works)]
                  [:work-schedule/set-edited]]}))


(rf/reg-event-fx
  :work-schedule/update-work
  (fn [{db :db} [_ work]]
    {:dispatch-n [[:work-schedule/remove-work work]
                  [:work-schedule/schedule-work work]]}))


(rf/reg-event-fx
  :work-schedule/update-multiple-work
  (fn [{db :db} [_ works]]
    {:dispatch-n [[:work-schedule/remove-multiple-work works]
                  [:work-schedule/schedule-multiple-work works]]}))


(rf/reg-event-fx
  :work-schedule/clear-day
  (fn [{db :db} [_ {:keys [work-schedule/worker-id
                           work-schedule/workplace-id
                           work-schedule/datetime] :as work}]]
    (let [zero-time (dt/minus datetime (dt/hours (dt/hour datetime)))
          works (mapv (fn [datetime]
                        (assoc work :work-schedule/datetime datetime))
                      (dtp/periodic-seq (dt/plus zero-time (dt/hours 6))
                                        (dt/plus zero-time (dt/hours 21))
                                        (dt/hours 1)))]
      {:db         (utils/remove-multiple-work db works)
       :dispatch-n [[:work-schedule/calculate-hours-worked-in-month work]
                    [:work-schedule/calculate-days-worked-in-month work]
                    [:work-schedule/calculate-saturdays-worked-in-month work]
                    [:work-schedule/calculate-sundays-worked-in-month work]
                    [:work-schedule/calculate-first-changes-worked-in-month work]
                    [:work-schedule/calculate-second-changes-worked-in-month work]
                    [:work-schedule/set-edited]]})))


(rf/reg-event-fx
  :work-schedule/set-vacation
  (fn [{db :db} [_ {:keys [work-schedule/worker-id
                           work-schedule/workplace-id
                           work-schedule/datetime] :as work}]]
    (let [zero-time (dt/minus datetime (dt/hours (dt/hour datetime)))
          new-works (mapv (fn [datetime]
                            (assoc work :work-schedule/datetime datetime
                                        :work-schedule/work-type "vacation"))
                          (dtp/periodic-seq (dt/plus zero-time (dt/hours 6))
                                            (dt/plus zero-time (dt/hours 21))
                                            (dt/hours 1)))]
      {:db         (-> db
                       (utils/remove-multiple-work new-works)
                       (update-in [:work-schedule/schedule worker-id] (fn [works] (into works new-works))))
       :dispatch-n [[:work-schedule/calculate-hours-worked-in-month work]
                    [:work-schedule/calculate-days-worked-in-month work]
                    [:work-schedule/calculate-saturdays-worked-in-month work]
                    [:work-schedule/calculate-sundays-worked-in-month work]
                    [:work-schedule/calculate-first-changes-worked-in-month work]
                    [:work-schedule/calculate-second-changes-worked-in-month work]
                    [:work-schedule/set-edited]]})))


(rf/reg-event-fx
  :work-schedule/set-break
  (fn [{db :db} [_ {:keys [work-schedule/worker-id
                           work-schedule/workplace-id
                           work-schedule/datetime] :as work}]]
    (let [zero-time (dt/minus datetime (dt/hours (dt/hour datetime)))
          new-works (mapv (fn [datetime]
                            (assoc work :work-schedule/datetime datetime
                                        :work-schedule/work-type "break"))
                          (dtp/periodic-seq (dt/plus zero-time (dt/hours 6))
                                            (dt/plus zero-time (dt/hours 21))
                                            (dt/hours 1)))]
      {:db         (-> db
                       (utils/remove-multiple-work new-works)
                       (update-in [:work-schedule/schedule worker-id] (fn [works] (into works new-works))))
       :dispatch-n [[:work-schedule/calculate-hours-worked-in-month work]
                    [:work-schedule/calculate-days-worked-in-month work]
                    [:work-schedule/calculate-saturdays-worked-in-month work]
                    [:work-schedule/calculate-sundays-worked-in-month work]
                    [:work-schedule/calculate-first-changes-worked-in-month work]
                    [:work-schedule/calculate-second-changes-worked-in-month work]
                    [:work-schedule/set-edited]]})))


(rf/reg-event-fx
  :work-schedule/set-holiday
  (fn [{db :db} [_ workplace-id workers datetime]]
    (let [zero-time (dt/minus datetime (dt/hours (dt/hour datetime)))
          works (reduce (fn [m {:keys [mongo/object-id]}]
                          (assoc m object-id
                                   (mapv (fn [datetime]
                                           {:work-schedule/workplace-id workplace-id
                                            :work-schedule/worker-id    object-id
                                            :work-schedule/datetime     datetime
                                            :work-schedule/work-type    "holiday"})
                                         (dtp/periodic-seq (dt/plus zero-time (dt/hours 6))
                                                           (dt/plus zero-time (dt/hours 21))
                                                           (dt/hours 1)))))
                        {} workers)]
      {:db         (as-> db $
                         (reduce (fn [r w]
                                   (utils/remove-multiple-work r w))
                                 $ (vals works))
                         (reduce (fn [r w]
                                   (let [worker-id (-> w (first) :work-schedule/worker-id)]
                                     (update-in r [:work-schedule/schedule worker-id] (fn [works] (into works w)))))
                                 $ (vals works)))
       :dispatch-n [[:work-schedule/calculate-all-working-days-in-month]
                    [:work-schedule/calculate-hours-worked-in-month]
                    [:work-schedule/calculate-days-worked-in-month]
                    [:work-schedule/calculate-saturdays-worked-in-month]
                    [:work-schedule/calculate-sundays-worked-in-month]
                    [:work-schedule/calculate-first-changes-worked-in-month]
                    [:work-schedule/calculate-second-changes-worked-in-month]
                    [:work-schedule/set-edited]]})))


(rf/reg-event-fx
  :work-schedule/remove-holiday
  (fn [{db :db} [_ workplace-id workers datetime]]
    (let [zero-time (dt/minus datetime (dt/hours (dt/hour datetime)))
          works (reduce (fn [m {:keys [mongo/object-id]}]
                          (assoc m object-id
                                   (mapv (fn [datetime]
                                           {:work-schedule/workplace-id workplace-id
                                            :work-schedule/worker-id    object-id
                                            :work-schedule/datetime     datetime})
                                         (dtp/periodic-seq (dt/plus zero-time (dt/hours 6))
                                                           (dt/plus zero-time (dt/hours 21))
                                                           (dt/hours 1)))))
                        {} workers)]
      {:db         (as-> db $
                         (reduce (fn [r w]
                                   (utils/remove-multiple-work r w))
                                 $ (vals works)))
       :dispatch-n [[:work-schedule/calculate-all-working-days-in-month]
                    [:work-schedule/calculate-hours-worked-in-month]
                    [:work-schedule/calculate-days-worked-in-month]
                    [:work-schedule/calculate-saturdays-worked-in-month]
                    [:work-schedule/calculate-sundays-worked-in-month]
                    [:work-schedule/calculate-first-changes-worked-in-month]
                    [:work-schedule/calculate-second-changes-worked-in-month]
                    [:work-schedule/set-edited]]})))


(rf/reg-event-db
  :work-schedule/clear
  (fn [db _]
    (assoc db :work-schedule/schedule [])))


(rf/reg-event-fx
  :work-schedule/ajax.get-work-schedule
  (fn [{db :db} _]
    (let [workplace-id (:work-schedule/selected-workplace-id db)
          datetime (:work-schedule/main-date db)]
      {:http-xhrio {:method          :get
                    :uri             (path "/api/1.0/work-schedule")
                    :params          {:work-schedule/workplace-id workplace-id
                                      :work-schedule/datetime     (dtc/to-string datetime)}
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:work-schedule/ajax.get-work-schedule-success]
                    :on-failure      [:work-schedule/ajax.get-work-schedule-failure]}})))


(rf/reg-event-fx
  :work-schedule/ajax.get-work-schedule-success
  (fn [{db :db} [_ {:keys [data]}]]
    {:db         (assoc db :work-schedule/schedule
                           (reduce (fn [r [k v]]
                                     (assoc r (name k)
                                              (map (fn [m] (update m :work-schedule/datetime dtc/from-string)) v)))
                                   {} data))
     :dispatch-n [[:work-schedule/calculate-all-working-days-in-month]
                  [:work-schedule/calculate-hours-worked-in-month]
                  [:work-schedule/calculate-days-worked-in-month]
                  [:work-schedule/calculate-saturdays-worked-in-month]
                  [:work-schedule/calculate-sundays-worked-in-month]
                  [:work-schedule/calculate-first-changes-worked-in-month]
                  [:work-schedule/calculate-second-changes-worked-in-month]]
     :message    {:content  "poprawnie pobrano harmonogram pracy"
                  :type     :success
                  :duration 1.5}}))


(rf/reg-event-fx
  :work-schedule/ajax.get-work-schedule-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch [:error/set {:event :work-schedule/ajax.get-work-schedule
                            :desc  response}]
     :message  {:content  (str "błąd przy pobieraniu harmonogramu pracy: " status-text)
                :type     :error
                :duration 1.5}}))


(rf/reg-event-fx
  :work-schedule/ajax.post-work-schedule
  (fn [{db :db} _]
    (let [works (-> db :work-schedule/schedule (vals) (flatten))]
      {:http-xhrio {:method          :post
                    :uri             (path "/api/1.0/work-schedule")
                    :params          works
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:work-schedule/ajax.post-work-schedule-success]
                    :on-failure      [:work-schedule/ajax.post-work-schedule-failure]}})))



(rf/reg-event-fx
  :work-schedule/ajax.post-work-schedule-success
  (fn [{db :db} [_ {:keys [data]}]]
    {:db       (assoc db :work-schedule/schedule
                         (reduce (fn [r [k v]]
                                   (assoc r (name k)
                                            (map (fn [m] (update m :work-schedule/datetime dtc/from-string)) v)))
                                 {} data))
     :dispatch [:work-schedule/unset-edited]
     :message  {:content  "poprawnie zapisano harmonogram pracy"
                :type     :success
                :duration 1.5}}))


(rf/reg-event-fx
  :work-schedule/ajax.post-work-schedule-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch [:error/set {:event :work-schedule/ajax.post-work-schedule
                            :desc  response}]
     :message  {:content  (str "błąd przy zapisywaniu harmonogram pracy: " status-text)
                :type     :error
                :duration 1.5}}))


(rf/reg-event-fx
  :work-schedule/ajax.delete-work-schedule
  (fn [{db :db} _]
    (let [workplace-id (:work-schedule/selected-workplace-id db)
          datetime (:work-schedule/main-date db)]
      {:http-xhrio {:method          :delete
                    :uri             (path "/api/1.0/work-schedule")
                    :params          {:work-schedule/workplace-id workplace-id
                                      :work-schedule/datetime     (dtc/to-string datetime)}
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:work-schedule/ajax.delete-work-schedule-success]
                    :on-failure      [:work-schedule/ajax.delete-work-schedule-failure]}})))

(rf/reg-event-fx
  :work-schedule/ajax.delete-work-schedule-success
  (fn [{db :db} [_ {:keys [data]}]]
    {:db       (assoc db :work-schedule/schedule data)
     :dispatch [:work-schedule/unset-edited]
     :message  {:content  "poprawnie usunięto harmonogram pracy"
                :type     :success
                :duration 1.5}}))


(rf/reg-event-fx
  :work-schedule/ajax.delete-work-schedule-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch [:error/set {:event :work-schedule/ajax.delete-work-schedule
                            :desc  response}]
     :message  {:content  (str "błąd przy usuwaniu harmonogramu pracy: " status-text)
                :type     :error
                :duration 1.5}}))


(rf/reg-event-fx
  :work-schedule/sync
  (fn [{db :db} _]
    (let [works (-> db :work-schedule/schedule (vals) (flatten))]
      {:dispatch (if-not (empty? works)
                   [:work-schedule/ajax.post-work-schedule]
                   [:work-schedule/ajax.delete-work-schedule])})))


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


