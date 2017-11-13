(ns eckersdorf.events
  (:require [re-frame.core :as rf]
            [taoensso.encore :as encore]
            [eckersdorf.csv.core :as csv]))


(rf/reg-event-fx
  :change-url
  (fn [_ [_ & elems]]
    (let [path (apply encore/path (into ["#/"] elems))]
      (aset js/window "location" path))))