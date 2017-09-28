(ns eckersdorf.user.login.events
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc]))


(rf/reg-event-db
  :login/set-email-address!
  (fn [db [_ email]]
    (assoc db :login/email-address email)))


(rf/reg-event-db
  :login/set-password!
  (fn [db [_ password]]
    (assoc db :login/password password)))


(rf/reg-event-db
  :login/set-invalid-password!
  (fn [db [_ status]]
    (assoc db :login/invalid-password? status)))


(rf/reg-event-fx
  :login/request-login
  (fn [{db :db} _]
    (println {:email-address (:login/email-address db)
              :password      (:login/password db)})
    {:http-xhrio {:method          :post
                  :uri             "/api/1.0/users/login"
                  :params          {:email-address (:login/email-address db)
                                    :password      (:login/password db)}
                  :format          (ajax/url-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:login/request-login-success]
                  :on-failure      [:login/request-login-failure]}}))


(rf/reg-event-fx
  :login/request-login-success
  (fn [{db :db} [_ response]]
    (println (-> response
                 (update :user/expire-at tc/from-string)
                 (clojure.set/rename-keys {:mongo/object-id :user/object-id})))
    {:db         (merge db (-> response (update :user/expire-at tc/from-string) (clojure.set/rename-keys {:mongo/object-id :user/object-id})))
     :dispatch-n [[:process/set {:event :login/request-login}]
                  [:login/set-invalid-password! false]
                  [:login/toggle-dialog]]}))


(rf/reg-event-fx
  :login/request-login-failure
  (fn [{db :db} [_ {:keys [status] :as response}]]
    (case status
      401 {:dispatch [:login/set-invalid-password! true]}
      {:dispatch-n [:error/set {:event :login/request-login}]})))