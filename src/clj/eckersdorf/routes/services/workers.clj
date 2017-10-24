(ns eckersdorf.routes.services.workers
  (:require [clojure.spec.alpha :as s]
            [clojure.core.async :refer [go]]
            [schema.core :as schema]
            [yada.yada :as yada]
            [monger.collection :as mc]
            [eckersdorf.db.workers :as eckersdorf.db.workers]
            [taoensso.timbre :as timbre]
            [taoensso.encore :as encore :refer [assoc-some]]
            [manifold.deferred :as d]
            [cuerdas.core :as str]
            [hiccup.core :as hiccup]
            [yada.jwt :as jwt]
            [eckersdorf.db.workers :as db.workers]
            [eckersdorf.utils :refer [add-ns]]))


(defn workers-routes [db]
  ["/workers"
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
                           {:data (db.workers/workers-list db opts)}))}
            :post
            {:produces   #{"application/json" "text/plain"}
             :consumes   #{"application/json" "application/x-www-form-urlencoded"}
             :parameters {:body {schema/Any schema/Any}}
             :response   (fn [ctx]
                           (let [worker (-> (get-in ctx [:parameters :body])
                                            (add-ns :worker))]
                             (if-let [response (db.workers/create-worker db worker)]
                               {:data (db.workers/workers-list db)}
                               (assoc (:response ctx) :status 404))))}}})]
    [["/" :id] (yada/resource
                 {:methods
                  {:put
                   {:produces   #{"application/json" "text/plain"}
                    :consumes   #{"application/json" "application/x-www-form-urlencoded"}
                    :parameters {:path {:id schema/Str}
                                 :body {schema/Any schema/Any}}
                    :response   (fn [ctx]
                                  (let [object-id (get-in ctx [:parameters :path :id])
                                        worker (-> (get-in ctx [:parameters :body])
                                                   (add-ns :worker)
                                                   (update :worker/address add-ns :address))]
                                    (println (s/explain :worker/worker worker))
                                    (if-let [response (db.workers/update-worker-by-id
                                                        db object-id worker)]
                                      {:data (db.workers/workers-list db)}
                                      (assoc (:response ctx) :status 404))))}
                   :delete
                   {:produces   #{"application/json" "text/plain"}
                    :consumes   #{"application/json" "application/x-www-form-urlencoded"}
                    :parameters {:path {:id schema/Str}}
                    :response   (fn [ctx]
                                  (let [id (get-in ctx [:parameters :path :id])]
                                    (db.workers/remove-worker-by-id db id)
                                    {:data (db.workers/workers-list db)}))}}})]
    ]])
