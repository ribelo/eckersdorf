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
            [eckersdorf.db.workplaces :as db.workplaces]
            [eckersdorf.utils :refer [add-ns]]))


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
                                                   (assoc r k {"$regex"   v
                                                               "$options" "i"})) {}))]
                           (db.workplaces/workplaces-list db opts)))}
            :post
            {:produces   #{"application/json" "text/plain"}
             :consumes   #{"application/json" "application/x-www-form-urlencoded"}
             :parameters {:body {:name          schema/Str
                                 :email-address schema/Str
                                 :type          schema/Str
                                 :address       {schema/Keyword schema/Str}}}
             :response   (fn [ctx]
                           (let [address (add-ns (get-in ctx [:parameters :body :address]) :address)
                                 workplace (-> (get-in ctx [:parameters :body])
                                               (add-ns :workplace)
                                               (update :workplace/address add-ns :address))]
                             (if-let [response (db.workplaces/create-workplace db workplace)]
                               {:data response}
                               (assoc (:response ctx) :status 404))))}}})]
    [["/" :id] (yada/resource
                 {:methods
                  {:put
                   {:produces   #{"application/json" "text/plain"}
                    :consumes   #{"application/json" "application/x-www-form-urlencoded"}
                    :parameters {:path {:id schema/Str}
                                 :body {:name          schema/Str
                                        :email-address schema/Str
                                        :type          schema/Str
                                        :address       {schema/Keyword schema/Str}}}
                    :response   (fn [ctx]
                                  (let [object-id (get-in ctx [:parameters :path :id])
                                        address (add-ns (get-in ctx [:parameters :body :address]) :address)
                                        workplace (-> (get-in ctx [:parameters :body])
                                                      (add-ns :workplace)
                                                      (update :workplace/address add-ns :address))]
                                    (if-let [response (db.workplaces/update-workplace-by-id
                                                        db object-id workplace)]
                                      {:data response}
                                      (assoc (:response ctx) :status 404))))}
                   :delete
                   {:produces   #{"application/json" "text/plain"}
                    :consumes   #{"application/json" "application/x-www-form-urlencoded"}
                    :parameters {:path {:id schema/Str}}
                    :response   (fn [ctx]
                                  (let [id (get-in ctx [:parameters :path :id])]
                                    (db.workplaces/remove-workplace-by-id db id)
                                    {:response ""}))}}})]
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
