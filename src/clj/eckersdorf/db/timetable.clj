(ns eckersdorf.db.timetable
  (:refer-clojure :exclude [update])
  (:require [clojure.spec.alpha :as s]
            [taoensso.timbre :as timbre]
            [taoensso.encore :as encore]
            [clj-time.core :as t]
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
  (:import (org.bson.types ObjectId)))


(defn create-timetable-collection [db]
  (when-not (mc/exists? db "timetable")
    (mc/create db "timetable" {})
    (mc/create-index db "timetable" {:timetable/workplace 1} {:unique true})
    (mc/create-index db "timetable" {:timetable/datetime 1})
    (mc/create-index db "timetable" {:timetable/worker 1})))


(defn drop-timetable-collection [db]
  (mc/remove db "timetable"))


(defn reset-timetable-collection [db]
  (drop-timetable-collection db)
  (create-timetable-collection db))



