(ns eckersdorf.db.events
  (:require [re-frame.core :as rf]
            [eckersdorf.db.core :as db]
            [eckersdorf.window.db :refer [window-state]]
            [eckersdorf.view.db :refer [view-state]]
            ;[eckersdorf.basket.db :refer [basket-state]]
            [eckersdorf.error.db :refer [error-state]]
            [eckersdorf.user.db :refer [user-state]]
            [eckersdorf.user.login.db :refer [login-state]]
            ;[eckersdorf.users.db :refer [users-state]]
            [eckersdorf.process.db :refer [process-state]]
            ;[eckersdorf.registration.db :refer [registration-state]]
            ;[eckersdorf.warehouse.db :refer [warehouse-state]]
            ;[eckersdorf.categories.db :refer [categories-state]]
            ;[eckersdorf.panel.db :refer [panel-state]]
            ))


(rf/reg-event-db
  :db/initialize-db
  (fn [_ _]
    (let [db (merge db/default-db
                    window-state
                    view-state
                    ;basket-state
                    error-state
                    login-state
                    user-state
                    ;users-state
                    process-state
                    ;registration-state
                    ;warehouse-state
                    ;categories-state
                    ;panel-state
                    )]
      (if-let [storage (db/load-local-storage)]
        (merge db storage)
        db))))


(rf/reg-event-db
  :db/merge-db
  (fn [db [_ state]]
    (merge db state)))