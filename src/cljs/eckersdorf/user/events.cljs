(ns eckersdorf.user.events
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc]
            [taoensso.timbre :as timbre]
            [taoensso.encore :refer [path]]
            [eckersdorf.db.core :refer [->local-storage]]))


(rf/reg-event-db
  :user/logout
  [->local-storage]
  (fn [db _]
    (assoc db :user/object-id nil
              :user/first-name nil
              :user/last-name nil
              :user/email-address nil
              :user/phone-number nil
              :user/addresses nil
              :user/roles nil
              :user/token nil)))

(rf/reg-event-db
  :user/set-first-name
  [->local-storage]
  (fn [db [_ first-name]]
    (assoc db :user/first-name first-name)))


(rf/reg-event-db
  :user/set-last-name
  [->local-storage]
  (fn [db [_ last-name]]
    (assoc db :user/set-last-name last-name)))


(rf/reg-event-db
  :user/set-email-address
  [->local-storage]
  (fn [db [_ email-address]]
    (assoc db :user/set-email-address email-address)))


(rf/reg-event-db
  :user/set-phone-number
  [->local-storage]
  (fn [db [_ phone-number]]
    (assoc db :user/set-phone-number phone-number)))


(rf/reg-event-db
  :user/refresh-last-login
  [->local-storage]
  (fn [db _]
    (assoc db :user/last-login (t/now))))


(rf/reg-event-fx
  :user/request-update
  (fn [{db :db} _]
    (let [user-id (:user/object-id db)
          user {:email-address (:user/email-address db)
                :phone-number  (:user/phone-number db)
                :first-name    (:user/first-name db)
                :last-name     (:user/last-name db)
                :token         (:user/token db)}]
      {:http-xhrio {:method          :put
                    :uri             (path "/api/1.0/users/" user-id "update")
                    :params          user
                    :format          (ajax/url-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:user/request-update-success]
                    :on-failure      [:user/request-update-failure]}})))


(rf/reg-event-fx
  :user/request-update-success
  [->local-storage]
  (fn [{db :db} [_ response]]
    (timbre/info response)
    {:db (merge db response)}))


(rf/reg-event-fx
  :user/request-update-failure
  (fn [{db :db} [_ response]]
    {:dispatch [:error/set {:event :user/request-update
                            :desc  response}]}))