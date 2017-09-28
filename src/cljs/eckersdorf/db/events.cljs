(ns eckersdorf.db.events
  (:require [re-frame.core :as rf]
            [eckersdorf.db.core :as db]
            [eckersdorf.window.db :refer [window-state]]
            [eckersdorf.view.db :refer [view-state]]
            [eckersdorf.error.db :refer [error-state]]
            [eckersdorf.user.db :refer [user-state]]
            [eckersdorf.user.login.db :refer [login-state]]
            [eckersdorf.process.db :refer [process-state]]
            [eckersdorf.workplaces.db :refer [workplaces-state]]
            ))


(rf/reg-event-db
  :db/initialize-db
  (fn [_ _]
    (let [db (merge db/default-db
                    window-state
                    view-state
                    error-state
                    login-state
                    user-state
                    process-state
                    workplaces-state
                    )]
      (if-let [storage (db/load-local-storage)]
        (merge db storage)
        db))))


(rf/reg-event-db
  :db/merge-db
  (fn [db [_ state]]
    (merge db state)))