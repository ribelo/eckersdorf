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
    (mc/create-index db "work-schedule" {:work-schedule/workplace-id 1} {:unique true})
    (mc/create-index db "work-schedule" {:work-schedule/datetime 1})
    (mc/create-index db "work-schedule" {:work-schedule/worker-id 1})))


(defn drop-work-schedule-collection [db]
  (mc/remove db "work-schedule"))


(defn reset-work-schedule-collection [db]
  (drop-work-schedule-collection db)
  (create-work-schedule-collection db))


(defmulti month-query
  (fn [db {:keys [work-schedule/workplace-id
                  work-schedule/worker-id
                  work-schedule/datetime]}]
    [(class workplace-id) (class worker-id) (class datetime)]))

(defmethod month-query [ObjectId ObjectId DateTime]
  [db {:keys [work-schedule/workplace-id
              work-schedule/worker-id
              work-schedule/datetime] :as doc}]
  (let [begin-datetime (dt/first-day-of-the-month datetime)
        end-datetime (dt/last-day-of-the-month datetime)]
    (mc/find-maps db "work-schedule" (assoc doc :work-schedule/datetime
                                                {"$gt" begin-datetime
                                                 "$le" end-datetime}))))


(defmulti schedule-work
  (fn [db {:keys [work-schedule/workplace-id
                  work-schedule/worker-id
                  work-schedule/datetime]}]
    [(class workplace-id) (class worker-id) (class datetime)]))

(defmethod schedule-work [ObjectId ObjectId DateTime]
  [db {:keys [work-schedule/workplace-id
              work-schedule/worker-id
              work-schedule/datetime
              work-schedule/work-type] :as m}]
  (mr/acknowledged? (mc/save db "work-schedule" m)))


(defmethod schedule-work [String ObjectId DateTime]
  [db {:keys [work-schedule/workplace-id
              work-schedule/worker-id
              work-schedule/datetime
              work-schedule/work-type] :as m}]
  (mr/acknowledged? (mc/save db "work-schedule"
                             (-> m (clojure.core/update :work-schedule/workplace-id #(ObjectId. ^String %))))))

(defmethod schedule-work [ObjectId String DateTime]
  [db {:keys [work-schedule/workplace-id
              work-schedule/worker-id
              work-schedule/datetime
              work-schedule/work-type] :as m}]
  (mr/acknowledged? (mc/save db "work-schedule"
                             (-> m (clojure.core/update :work-schedule/worker-id #(ObjectId. ^String %))))))

(defmethod schedule-work [String String DateTime]
  [db {:keys [work-schedule/workplace-id
              work-schedule/worker-id
              work-schedule/datetime
              work-schedule/work-type] :as m}]
  (mr/acknowledged? (mc/save db "work-schedule"
                             (-> m
                                 (clojure.core/update :work-schedule/workplace-id #(ObjectId. ^String %))
                                 (clojure.core/update :work-schedule/worker-id #(ObjectId. ^String %))))))


