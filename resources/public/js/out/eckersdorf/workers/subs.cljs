(ns eckersdorf.workers.subs
  (:require [re-frame.core :as rf]))


(rf/reg-sub
  :workers/list
  (fn [db _]
    (sort-by :worker/last-name (:workers/list db))))


(rf/reg-sub
  :workers/by-workplace-id
  :<- [:workers/list]
  (fn [workers [_ workplace-id]]
    (->> workers
         (filter #(= workplace-id (:worker/workplace %))))))


(rf/reg-sub
  :workers/by-id
  :<- [:workers/list]
  (fn [workers [_ worker-id]]
    (->> workers
         (filter #(= worker-id (:mongo/object-id %)))
         (first))))


(rf/reg-sub
  :workers/show-dialog?
  (fn [db _]
    (:workers/show-dialog? db)))


(rf/reg-sub
  :workers/worker-form
  (fn [db _]
    (:workers/worker-form db)))