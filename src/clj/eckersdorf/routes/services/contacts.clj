(ns eckersdorf.routes.services.contacts
  (:require [clojure.spec.alpha :as s]
            [clojure.core.async :refer [go]]
            [schema.core :as schema]
            [yada.yada :as yada]
            [monger.collection :as mc]
            [taoensso.timbre :as timbre]
            [taoensso.encore :as encore :refer [assoc-some]]
            [manifold.deferred :as d]
            [cuerdas.core :as str]
            [hiccup.core :as hiccup]
            [yada.jwt :as jwt]
            [eckersdorf.db.contacts :as db.contacts]
            [eckersdorf.utils :refer [add-ns]]))


(defn contacts-routes [db]
  ["/contacts"
   [
    [""
     (yada/resource
       {:methods
        {:get
         {:produces #{"application/json" "text/plain"}
          :response (fn [ctx]
                      (let [opts (->> (get-in ctx [:parameters :query])
                                      (reduce (fn [r [k v]]
                                                (assoc r k {"$regex"   v
                                                            "$options" "i"})) {}))]
                        {:data (db.contacts/find-contacts db opts)}))}
         :post
         {:produces   #{"application/json" "text/plain"}
          :consumes   #{"application/json" "application/x-www-form-urlencoded"}
          :parameters {:body {schema/Any schema/Any}}
          :response   (fn [ctx]
                        (let [contact (-> (get-in ctx [:parameters :body])
                                          (add-ns :contact))]
                          (if-let [response (db.contacts/create-contact db contact)]
                            {:data (db.contacts/find-contacts db)}
                            (assoc (:response ctx) :status 404))))}}})]
    [["/" :id]
     (yada/resource
       {:methods
        {:put
         {:produces   #{"application/json" "text/plain"}
          :consumes   #{"application/json" "application/x-www-form-urlencoded"}
          :parameters {:path {:id schema/Str}
                       :body {schema/Any schema/Any}}
          :response   (fn [ctx]
                        (let [object-id (get-in ctx [:parameters :path :id])
                              contact (-> (get-in ctx [:parameters :body])
                                          (add-ns :contact))]
                          (if-let [response (db.contacts/update-contact-by-id db object-id contact)]
                            {:data (db.contacts/find-contacts db)}
                            (assoc (:response ctx) :status 404))))}
         :delete
         {:produces   #{"application/json" "text/plain"}
          :consumes   #{"application/json" "application/x-www-form-urlencoded"}
          :parameters {:path {:id schema/Str}}
          :response   (fn [ctx]
                        (let [id (get-in ctx [:parameters :path :id])]
                          (db.contacts/remove-contact-by-id db id)
                          {:data (db.contacts/find-contacts db)}))}}})]
    ]])
