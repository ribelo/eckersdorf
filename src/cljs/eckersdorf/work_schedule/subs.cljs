(ns eckersdorf.work-schedule.subs
  (:require [reagent.ratom :refer [reaction]]
            [re-frame.core :as rf]
            [cljs-time.core :as dt]
            [cljs-time.coerce :as dtc]
            [cljs-time.format :as dtf]
            [cljs-time.periodic :as dtp]
            [cljs-time.predicates :as dtpred]
            [eckersdorf.work-schedule.utils :as utils]
            [eckersdorf.workers.utils :as workers.utils]))


(rf/reg-sub
  :work-schedule/show-dialog?
  (fn [db _]
    (:work-schedule/show-dialog? db)))


(rf/reg-sub
  :work-schedule/print?
  (fn [db _]
    (:work-schedule/print? db)))

(rf/reg-sub
  :work-schedule/main-date
  (fn [db _]
    (:work-schedule/main-date db)))


(rf/reg-sub
  :work-schedule/selected-workplace-id
  (fn [db _]
    (:work-schedule/selected-workplace-id db)))


(rf/reg-sub
  :work-schedule/short-date
  :<- [:work-schedule/main-date]
  (fn [date]
    (dtf/unparse (dtf/formatter "yyyy-MM") date)))


(rf/reg-sub
  :work-schedule/long-date
  :<- [:work-schedule/main-date]
  (fn [date]
    (dtf/unparse (dtf/formatter "yyyy-MM-dd") date)))


(rf/reg-sub
  :work-schedule/days
  (fn [db _]
    (:work-schedule/days db)))


(rf/reg-sub
  :work-schedule/schedule
  (fn [db _]
    (:work-schedule/schedule db)))


(rf/reg-sub-raw
  :work-schedule/get
  (fn [db [_ {:keys [work-schedule/worker-id
                     work-schedule/workplace-id
                     work-schedule/datetime]}]]
    (let [schedule (reaction (:work-schedule/schedule @db))
          by-id (reaction (->> @schedule
                               (filter (fn [m] (and (= worker-id (:work-schedule/worker-id m))
                                                    (= workplace-id (:work-schedule/workplace-id m)))))))]
      (reaction (->> @by-id (filter (fn [m] (dt/equal? datetime (:work-schedule/datetime m)))) (first))))))



(rf/reg-sub-raw
  :work-schedule/is-holiday?
  (fn [db [_ {:keys [work-schedule/worker-id
                     work-schedule/workplace-id
                     work-schedule/datetime]}]]
    (let [schedule (reaction (:work-schedule/schedule @db))
          by-id (reaction (->> @schedule
                               (filter (fn [m] (= workplace-id (:work-schedule/workplace-id m))))))]
      (reaction (->> @by-id
                     (filter (fn [m] (dt/equal? (dt/plus (dt/minus datetime (dt/hours (dt/hour datetime))) (dt/hours 6))
                                                (:work-schedule/datetime m))))
                     (first)
                     :work-schedule/work-type
                     (= "holiday"))))))


(rf/reg-sub-raw
  :work-schedule/is-vacation?
  (fn [db [_ {:keys [work-schedule/worker-id
                     work-schedule/workplace-id
                     work-schedule/datetime]}]]
    (let [schedule (reaction (:work-schedule/schedule @db))
          by-id (reaction (->> @schedule
                               (filter (fn [m] (and (= workplace-id (:work-schedule/workplace-id m))
                                                    (= worker-id (:work-schedule/worker-id m)))))))]
      (reaction (->> @by-id
                     (filter (fn [m] (dt/equal? (dt/plus (dt/minus datetime (dt/hours (dt/hour datetime))) (dt/hours 6))
                                                (:work-schedule/datetime m))))
                     (first)
                     :work-schedule/work-type
                     (= "vacation"))))))


(rf/reg-sub
  :work-schedule/hours-worked-in-month
  (fn [db [_ {:keys [work-schedule/worker-id]}]]
    (or (get-in db [:work-schedule/stats worker-id :hours-worked-in-month]) 0)))


(rf/reg-sub
  :work-schedule/days-worked-in-month
  (fn [db [_ {:keys [work-schedule/worker-id]}]]
    (or (get-in db [:work-schedule/stats worker-id :days-worked-in-month]) 0)))


(rf/reg-sub
  :work-schedule/saturdays-worked-in-month
  (fn [db [_ {:keys [work-schedule/worker-id]}]]
    (or (get-in db [:work-schedule/stats worker-id :saturdays-worked-in-month]) 0)))


(rf/reg-sub
  :work-schedule/sundays-worked-in-month
  (fn [db [_ {:keys [work-schedule/worker-id]}]]
    (or (get-in db [:work-schedule/stats worker-id :sundays-worked-in-month]) 0)))


(rf/reg-sub
  :work-schedule/first-changes-worked-in-month
  (fn [db [_ {:keys [work-schedule/worker-id]}]]
    (or (get-in db [:work-schedule/stats worker-id :first-changes-worked-in-month]) 0)))


(rf/reg-sub
  :work-schedule/second-changes-worked-in-month
  (fn [db [_ {:keys [work-schedule/worker-id]}]]
    (or (get-in db [:work-schedule/stats worker-id :second-changes-worked-in-month]) 0)))


(rf/reg-sub
  :work-schedule/edited?
  (fn [db _]
    (:work-schedule/edited? db)))


(rf/reg-sub-raw
  :work-schedule/print-data-source
  (fn [db _]
    (let [datetime (reaction (:work-schedule/main-date @db))
          workplace-id (reaction (:work-schedule/selected-workplace-id @db))
          all-workers (reaction (:workers/list @db))
          workers (reaction (workers.utils/workers-by-id @all-workers workplace-id))
          begin-time (dt/first-day-of-the-month datetime)
          end-time (dt/plus (dt/last-day-of-the-month begin-time) (dt/days 1))]
      (reaction
        (doall
          (for [date (dtp/periodic-seq begin-time end-time (dt/days 1))
                worker workers
                :let [{:keys [mongo/object-id]} worker
                      [begin end type] (utils/worker-working-hours db object-id (dt/day date))]]
            {:work/datetime   date
             :work/worker-id  object-id
             :work/begin-hour begin
             :work/end-hour   end
             :work/work-type  type}))))))


;(rf/reg-sub
;  :work-schedule/get
;  (fn [db [_ [date {:keys [worker/id]} hour]]]
;    (get-in db [:work-schedule/schedule (str date) id hour])))
;
;
;(rf/reg-sub
;  :work-schedule/count-work-days
;  (fn [db _]
;    (->> (:work-schedule/days db)
;         (remove #(#{6 7} (dt/day-of-week %)))
;         (count))))


;(rf/reg-sub
;  :work-schedule/worker-day-schedule
;  (fn [db [_ [day worker]]]
;    (worker-day-schedule worker day db)))


;(rf/reg-sub
;  :work-schedule/count-work-hours
;  :<- [:work-schedule/count-work-days]
;  (fn [days]
;    (* days 8)))
;
;
;(rf/reg-sub
;  :work-schedule/count-worker-work-hours
;  (fn [db [_ worker]]
;    (let [date (:work-schedule/main-date db)]
;      (count-worker-hours worker date db))))
;
;
;(rf/reg-sub
;  :work-schedule/print?
;  (fn [db _]
;    (:view/print? db)))