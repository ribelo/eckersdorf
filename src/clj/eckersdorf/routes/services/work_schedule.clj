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
            :get
            {:produces #{"application/json"}
             ;:parameters {:query {schema/Any schema/Any}}
             :response (fn [ctx]
                         (let [datetime (get-in ctx [:parameters :query "datetime"])
                               work (-> (get-in ctx [:parameters :query])
                                        (update "datetime" dtc/from-string)
                                        (add-ns :work-schedule))]
                           {:data (db.work-schedule/month-query db work)}))}
            :post
            {:produces   #{"application/json"}
             :consumes   #{"application/json"}
             :parameters {:body [{schema/Any schema/Any}]}
             :response   (fn [ctx]
                           (let [works (-> (get-in ctx [:parameters :body])
                                           (->> (map (fn [m]
                                                       (-> m (update :datetime #(-> % :date (dtc/from-string)))
                                                           (add-ns :work-schedule))))))]
                             (db.work-schedule/save-month db works)
                             {:data (db.work-schedule/month-query db (first works))}))}
            :delete
            {:produces   #{"application/json"}
             :consumes   #{"application/json"}
             :parameters {:body {schema/Any schema/Any}}
             :response   (fn [ctx]
                           (let [work (-> (get-in ctx [:parameters :body])
                                          (update :datetime dtc/from-string)
                                          (add-ns :work-schedule))]
                             (println work (get-in ctx [:parameters :body]))
                             (db.work-schedule/remove-month db work)
                             {:data []}))}}})]
    ]])
