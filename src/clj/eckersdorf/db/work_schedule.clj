(ns eckersdorf.db.work-schedule
  (:refer-clojure :exclude [update])
  (:require [clojure.spec.alpha :as s]
            [taoensso.timbre :as timbre]
            [taoensso.encore :as encore]
            [clj-time.core :as dt]
            [monger.core :as mg]
            [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.query :as mq]
            [monger.result :as mr]
            [monger.internal.pagination :refer [offset-for]]
            [cheshire.core :as json]
            [cuerdas.core :as str]
            [buddy.hashers :as hashers]
            [buddy.sign.jwt :as jwt])
  (:import (org.bson.types ObjectId)
           (org.joda.time DateTime)))



(defn create-work-schedule-collection [db]
  (when-not (mc/exists? db "work-schedule")
    (mc/create db "work-schedule" {})
    ;(mc/create-index db "work-schedule" {:work-schedule/workplace-id 1})
    ;(mc/create-index db "work-schedule" {:work-schedule/datetime 1})
    ;(mc/create-index db "work-schedule" {:work-schedule/worker-id 1})
    ))


(defn drop-work-schedule-collection [db]
  (mc/drop db "work-schedule"))


(defn reset-work-schedule-collection [db]
  (drop-work-schedule-collection db)
  (create-work-schedule-collection db))


(defmulti month-query
  (fn [db {:keys [work-schedule/workplace-id
                  work-schedule/datetime]}]
    [(class workplace-id) (class datetime)]))

(defmethod month-query [ObjectId DateTime]
  [db {:keys [work-schedule/workplace-id
              work-schedule/datetime] :as doc}]
  (let [begin-datetime (-> datetime (dt/with-time-at-start-of-day) (dt/first-day-of-the-month))
        end-datetime (-> datetime (dt/with-time-at-start-of-day) (dt/last-day-of-the-month))]
    (mc/find-maps db "work-schedule" {:work-schedule/workplace-id workplace-id
                                      :work-schedule/datetime     {"$gte" begin-datetime
                                                                   "$lte" end-datetime}})))

(defmethod month-query [String DateTime]
  [db {:keys [work-schedule/workplace-id
              work-schedule/datetime] :as doc}]
  (month-query db (clojure.core/update doc :work-schedule/workplace-id #(ObjectId. ^String %))))


(defmulti remove-month
  (fn [db {:keys [work-schedule/workplace-id
                  work-schedule/datetime]}]
    [(class workplace-id) (class datetime)]))

(defmethod remove-month [ObjectId DateTime]
  [db {:keys [work-schedule/workplace-id
              work-schedule/datetime] :as m}]
  (let [begin-datetime (-> datetime (dt/with-time-at-start-of-day) (dt/first-day-of-the-month))
        end-datetime (-> datetime (dt/with-time-at-start-of-day) (dt/last-day-of-the-month))]
    (mc/remove db "work-schedule" {:work-schedule/workplace-id workplace-id
                                   :work-schedule/datetime     {"$gte" begin-datetime
                                                                "$lte" end-datetime}})))

(defmethod remove-month [String DateTime]
  [db {:keys [work-schedule/workplace-id
              work-schedule/datetime] :as m}]
  (remove-month db (clojure.core/update m :work-schedule/workplace-id #(ObjectId. ^String %))))


(defmulti save-month
  (fn [db works]
    (let [{:keys [work-schedule/workplace-id
                  work-schedule/datetime]} (first works)]
      [(class workplace-id) (class datetime)])))

(defmethod save-month [ObjectId DateTime]
  [db works]
  (let [{:keys [work-schedule/workplace-id
                work-schedule/datetime] :as m} (first works)]
    (remove-month db m)
    (mc/insert-batch db "work-schedule" works)))

(defmethod save-month [String DateTime]
  [db works]
  (save-month db (mapv (fn [work] (clojure.core/update work
                                    :work-schedule/workplace-id #(ObjectId. ^String %)))
                       works)))