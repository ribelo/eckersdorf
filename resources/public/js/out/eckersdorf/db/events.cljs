(ns eckersdorf.db.events
  (:require [re-frame.core :as rf]
            [cljs-time.core :as t]
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
      (let [storage (db/load-local-storage)
            last-login (:user/last-login storage)]
        (if (and last-login (t/before? (t/now) (t/plus last-login (t/months 1))))
          (merge db storage)
          db)))))


(rf/reg-event-db
  :db/merge-db
  (fn [db [_ state]]
    (merge db state)))