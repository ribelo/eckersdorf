(ns eckersdorf.workers.subs
  (:require [re-frame.core :as rf]))


(rf/reg-sub
  :workers/list
  (fn [db _]
    (:workers/list db)))


(rf/reg-sub
  :workers/show-dialog?
  (fn [db _]
    (:workers/show-dialog? db)))


(rf/reg-sub
  :workers/worker-form
  (fn [db _]
    (:workers/worker-form db)))

(rf/subscribe [:workers/worker-form])
(last @(rf/subscribe [:workers/list]))
(cljs.spec.alpha/explain :worker/worker (last @(rf/subscribe [:workers/list])))