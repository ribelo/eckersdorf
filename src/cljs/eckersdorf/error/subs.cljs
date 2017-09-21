(ns eckersdorf.error.subs
  (:require [re-frame.core :as rf]))


(rf/reg-sub
  :error/event
  (fn [db]
    (get db :error/event)))


(rf/reg-sub
  :error/name
  (fn [db]
    (get db :error/name)))


(rf/reg-sub
  :error/description
  (fn [db]
    (get db :error/description)))