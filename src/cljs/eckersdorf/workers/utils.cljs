(ns eckersdorf.workers.utils)

(defn workers-by-id [workers workplace-id]
  (->> workers (filter #(= workplace-id (:worker/workplace %)))))
