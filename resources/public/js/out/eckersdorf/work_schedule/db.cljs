(ns eckersdorf.work-schedule.db
  (:require [cljs-time.core :as dt]
            [cljs-time.periodic :as dtp]))


(def work-schedule-state
  {:work-schedule/selected-workplace-id nil
   :work-schedule/main-date             (dt/first-day-of-the-month (dt/now))
   :work-schedule/days                  (let [now (dt/now)]
                                          (dtp/periodic-seq (dt/first-day-of-the-month now)
                                                            (dt/plus (dt/last-day-of-the-month now) (dt/days 1))
                                                            (dt/days 1)))
   :work-schedule/show-dialog           false
   :work-schedule/schedule              {}
   :work-schedule/stats                 {}
   :work-schedule/edited?               false
   :work-schedule/print?                false})