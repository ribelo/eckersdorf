(ns eckersdorf.process.subs
  (:require [re-frame.core :as rf]))


(rf/reg-sub
  :process/event
  (fn [db]
    (:process/event db)))


(rf/reg-sub
  :process/name
  (fn [db]
    (:process/name db)))


(rf/reg-sub
  :process/description
  (fn [db]
    (:process/description db)))