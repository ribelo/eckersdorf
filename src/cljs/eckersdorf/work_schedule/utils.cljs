(ns eckersdorf.work-schedule.utils
  (:require [cljs-time.core :as dt]
            [cljs-time.coerce :as dtc]
            [cljs-time.periodic :as dtp]))



(defn remove-work [db {:keys [work-schedule/worker-id
                              work-schedule/datetime]}]
  (let [works (get-in db [:work-schedule/schedule worker-id])]
    (assoc-in db [:work-schedule/schedule worker-id]
              (->> works
                   (remove (fn [work]
                             (dt/equal? datetime (:work-schedule/datetime work))))))))


(defn remove-multiple-work [db new-works]
  (let [worker-id (-> new-works (first) :work-schedule/worker-id)
        works (get-in db [:work-schedule/schedule worker-id])]
    (assoc-in db [:work-schedule/schedule worker-id]
              (->> works
                   (remove (fn [work]
                             (some (fn [{:keys [work-schedule/datetime]}]
                                     (dt/equal? datetime (:work-schedule/datetime work)))
                                   new-works)))))))


(defn worker-working-hours [works day]
  (->> works
       (filter #(= day (dt/day (:work-schedule/datetime %))))
       (remove #(or (empty? %) (nil? %)))
       (sort-by :work-schedule/datetime
                (fn [d1 d2] (dt/before? d1 d2)))
       ((juxt #(-> % first :work-schedule/datetime ((fn [datetime] (when datetime (dt/hour datetime)))))
              #(-> % last :work-schedule/datetime ((fn [datetime] (when datetime (inc (dt/hour datetime))))))
              #(-> % first :work-schedule/work-type)
              #(-> % first :work-schedule/datetime ((fn [datetime] (when datetime (dt/day-of-week datetime)))))))))