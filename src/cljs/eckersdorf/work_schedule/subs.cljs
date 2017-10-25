(ns eckersdorf.work-schedule.subs
  (:require [reagent.ratom :refer [reaction]]
            [re-frame.core :as rf]
            [cljs-time.core :as dt]
            [cljs-time.coerce :as dtc]
            [cljs-time.format :as dtf]))


(rf/reg-sub
  :work-schedule/show-dialog?
  (fn [db _]
    (:work-schedule/show-dialog? db)))

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


;(rf/reg-sub
;  :work-schedule/get
;  :<- [:work-schedule/schedule]
;  (fn [schedule [_ {:keys [work-schedule/worker-id
;                           work-schedule/workplace-id
;                           work-schedule/datetime]}]]
;    (->> schedule
;         (filter (fn [m]
;                   (and (= worker-id (:work-schedule/worker-id m))
;                        (= workplace-id (:work-schedule/workplace-id m))
;                        (= datetime (:work-schedule/datetime m)))))
;         (first))))


(rf/reg-sub
  :work-schedule/get
  :<- [:work-schedule/schedule]
  (fn [schedule [_ {:keys [work-schedule/worker-id
                           work-schedule/workplace-id
                           work-schedule/datetime]}]]
    (->> schedule
         (filter (fn [m]
                   (and (= worker-id (:work-schedule/worker-id m))
                        (= workplace-id (:work-schedule/workplace-id m))
                        (= datetime (:work-schedule/datetime m)))))
         (first))))


(rf/reg-sub
  :work-schedule/is-holiday?
  :<- [:work-schedule/schedule]
  (fn [schedule [_ {:keys [work-schedule/workplace-id
                           work-schedule/datetime]}]]
    (let [datetime (dtc/from-string datetime)
          zero-time (dt/minus datetime (dt/hours (dt/hour datetime)))]
      (->> schedule
           (filter (fn [m]
                     (and (= workplace-id (:work-schedule/workplace-id m))
                          (= (dtc/to-string (dt/plus zero-time (dt/hours 12)))
                             (:work-schedule/datetime m)))))
           (first)
           :work-schedule/work-type
           (= "holiday")))))


(rf/reg-sub
  :work-schedule/is-vacation?
  :<- [:work-schedule/schedule]
  (fn [schedule [_ {:keys [work-schedule/workplace-id
                           work-schedule/worker-id
                           work-schedule/datetime]}]]
    (let [datetime (dtc/from-string datetime)
          zero-time (dt/minus datetime (dt/hours (dt/hour datetime)))]
      (->> schedule
           (filter (fn [m]
                     (and (= worker-id (:work-schedule/worker-id m))
                          (= workplace-id (:work-schedule/workplace-id m))
                          (= (dtc/to-string (dt/plus zero-time (dt/hours 12)))
                             (:work-schedule/datetime m)))))
           (first)
           :work-schedule/work-type
           (= "vacation")))))


@(rf/subscribe [:workplaces/list])
(rf/clear-subscription-cache!)
@(rf/subscribe [:work-schedule/schedule])
(rf/subscribe [:work-schedule/is-holiday?
               {:work-schedule/workplace-id "59cd4fc48466bc2056615d66"
                :work-schedule/datetime     (dtc/to-string (dt/date-time 2017 10 1 10))}])


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