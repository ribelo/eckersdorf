(ns eckersdorf.process.events
  (:require [re-frame.core :as rf]
            [taoensso.timbre :as timbre]
            [taoensso.encore :refer [assoc-some]]
            [eckersdorf.process.db :refer [process-state]]))


(rf/reg-event-db
  :process/initialize-state
  (fn [db _]
    (merge db process-state)))


(rf/reg-event-db
  :process/set
  (fn [db [_ {:keys [event name desc] :as process}]]
    (timbre/debug process)
    (assoc-some db :process/event event
                   :process/name name
                   :process/description desc)))


(rf/reg-event-db
  :process/clear
  (fn [db _]
    (assoc db :process/event nil
              :process/name nil
              :process/description nil)))



