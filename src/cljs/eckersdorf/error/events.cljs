(ns eckersdorf.error.events
  (:require [re-frame.core :as rf]
            [taoensso.timbre :as timbre]
            [taoensso.encore :refer [assoc-some]]
            [eckersdorf.error.db :refer [error-state]]))


(rf/reg-event-db
  :error/inistialize-state
  (fn [db _]
    (merge db
           error-state)))


(rf/reg-event-db
  :error/set
  (fn [db [_ {:keys [event name desc] :as error}]]
    (timbre/error error)
    (assoc-some db :error/event event
                   :error/name name
                   :error/description desc)))


(rf/reg-event-db
  :error/clear
  (fn [db _]
    (assoc db :error/event nil
              :error/name nil
              :error/description nil)))



