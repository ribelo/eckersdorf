(ns eckersdorf.workers.subs
  (:require [re-frame.core :as rf]
            [eckersdorf.workers.utils :as utils]))


(rf/reg-sub
  :workers/list
  (fn [db _]
    (sort-by :worker/last-name (:workers/list db))))


(rf/reg-sub
  :workers/by-workplace-id
  :<- [:workers/list]
  (fn [workers [_ workplace-id]]
    (utils/workers-by-id workers workplace-id)))


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