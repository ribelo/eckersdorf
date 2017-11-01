(ns eckersdorf.work-schedule.utils
  (:require [cljs-time.core :as dt]
            [cljs-time.coerce :as dtc]
            [cljs-time.periodic :as dtp]))



(defn remove-work [db {:keys [work-schedule/worker-id
                              work-schedule/workplace-id
                              work-schedule/datetime]}]
  (let [schedule (:work-schedule/schedule db)]
    (assoc db :work-schedule/schedule
              (->> schedule
                   (remove (fn [work]
                             (and (= worker-id (:work-schedule/worker-id work))
                                  (= workplace-id (:work-schedule/workplace-id work))
                                  (dt/equal? datetime (:work-schedule/datetime work)))))
                   (distinct)
                   (into [])))))


(defn remove-multiple-work [db works]
  (let [schedule (:work-schedule/schedule db)]
    (assoc db :work-schedule/schedule
              (->> schedule
                   (remove (fn [work]
                             (some (fn [{:keys [work-schedule/worker-id
                                                work-schedule/workplace-id
                                                work-schedule/datetime]}]
                                     (and (= worker-id (:work-schedule/worker-id work))
                                          (= workplace-id (:work-schedule/workplace-id work))
                                          (dt/equal? datetime (:work-schedule/datetime work))))
                                   works)))
                   (distinct)
                   (into [])))))


(defn worker-working-hours [db worker-id day]
  (->> db
       :work-schedule/schedule
       (filter #(and (= day (dt/day (:work-schedule/datetime %)))
                     (= worker-id (:work-schedule/worker-id %))))
       (sort-by :work-schedule/datetime
                (fn [d1 d2] (dt/before? d1 d2)))
       ((juxt #(->> % first :work-schedule/datetime dt/hour)
              #(->> % last :work-schedule/datetime dt/hour)
              #(->> % first :work-schedule/work-type)))))