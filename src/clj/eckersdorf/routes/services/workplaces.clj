(ns eckersdorf.routes.services.workplaces
  (:require [clojure.spec.alpha :as s]
            [clojure.core.async :refer [go]]
            [schema.core :as schema]
            [yada.yada :as yada]
            [monger.collection :as mc]
            [eckersdorf.db.workplaces :as eckersdorf.db.workplaces]
            [taoensso.timbre :as timbre]
            [taoensso.encore :as encore :refer [assoc-some]]
            [manifold.deferred :as d]
            [cuerdas.core :as str]
            [hiccup.core :as hiccup]
            [yada.jwt :as jwt]
            [eckersdorf.db.workplaces :as db.workplaces]))


(defn workplaces-routes [db]
  ["/workplaces"
   [
    ["" (yada/resource
          {:methods
           {:get
            {:produces #{"application/json" "text/plain"}
             :response (fn [ctx]
                         (let [opts (->> (get-in ctx [:parameters :query])
                                         (reduce (fn [r [k v]]
                                                   (assoc r k {"$regex" v
                                                               "$options" "i"})) {}))]
                           (db.workplaces/workplaces-list db opts)))}}})]
    ;["/add" (yada/resource
    ;          {:methods
    ;           {:post
    ;            {:produces   #{"application/json" "text/plain"}
    ;             :consumes   "application/x-www-form-urlencoded"
    ;             :parameters {:body {:email-address schema/Str
    ;                                 :password      schema/Str
    ;                                 :first-name    schema/Str
    ;                                 :last-name     schema/Str}}
    ;             :response   (fn [ctx]
    ;                           (let [{:keys [email-address password first-name
    ;                                         last-name]} (get-in ctx [:parameters :body])]
    ;                             (if-not (db.users/find-user-by-email-address db email-address)
    ;                               (let [user (db.users/create-user db {:user/first-name    first-name
    ;                                                                    :user/last-name     last-name
    ;                                                                    :user/password      password
    ;                                                                    :user/email-address email-address})]
    ;                                 ;(postman/send-activation-email user)
    ;                                 (dissoc user :user/password))
    ;                               (assoc (:response ctx) :status 500 :body {:error "user exists"}))))}}})]
    ]])
