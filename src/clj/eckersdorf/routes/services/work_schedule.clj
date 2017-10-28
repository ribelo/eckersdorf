(ns eckersdorf.routes.services.work-schedule
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
            [clj-time.core :as dt]
            [clj-time.coerce :as dtc]
            [eckersdorf.db.work-schedule :as db.work-schedule]
            [eckersdorf.utils :refer [add-ns]]))


(defn schedule-routes [db]
  ["/work-schedule"
   [
    ["" (yada/resource
          {:methods
           {
            ;:get
            ;{:produces #{"application/json" "text/plain"}
            ; :response (fn [ctx]
            ;             (let [opts (->> (get-in ctx [:parameters :query])
            ;                             (reduce (fn [r [k v]]
            ;                                       (assoc r k {"$regex"   v
            ;                                                   "$options" "i"})) {}))]
            ;               {:data (db.workers/workers-list db opts)}))}
            :post
            {:produces   #{"application/json"}
             :consumes   #{"application/json"}
             :parameters {:body [{schema/Any schema/Any}]}
             :response   (fn [ctx]
                           (let [works (-> (get-in ctx [:parameters :body])
                                           (->> (map (fn [m]
                                                       (-> m (update :datetime #(-> % :date (dtc/from-string)))
                                                           (add-ns :work-schedule))))))]
                             (doseq [work works]
                               (db.work-schedule/schedule-work db work))
                             ;(if-let [response (db.work-schedule/schedule-work db work)]
                             ;  {:data response}
                             ;  (assoc (:response ctx) :status 404))
                             ))}}})]
    ]])
