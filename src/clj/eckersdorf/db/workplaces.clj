(ns eckersdorf.db.workplaces
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


(defn create-workplaces-collection [db]
  (when-not (mc/exists? db "workplaces")
    (mc/create db "workplaces" {})
    (mc/create-index db "workplaces" {:workplace/email-address 1} {:unique true})
    (mc/create-index db "workplaces" {:workplace/name 1} {:unique true})))


(defn drop-workplaces-collection [db]
  (mc/remove db "workplaces"))


(defn reset-workplaces-collection [db]
  (drop-workplaces-collection db)
  (create-workplaces-collection db))



(defmulti find-workplace-by-id (fn [_ id] (type id)))

(defmethod find-workplace-by-id ObjectId [db ^ObjectId id]
  {:pre  [(s/valid? :mongo/object-id id)]
   :post [(s/valid? (s/nilable :workplace/workplace) %)]}
  (mc/find-map-by-id db "workplaces" id))

(defmethod find-workplace-by-id String [db ^String id]
  (find-workplace-by-id db (ObjectId. id)))


(defn find-workplace-by-email-address [db email-address]
  {:pre  [(s/valid? :workplace/email-address email-address)]
   :post [(s/valid? (s/nilable :workplace/workplace) %)]}
  (mc/find-one-as-map db "workplaces" {:workplace/email-address email-address}))


(defn workplace-exists? [db email-address]
  {:pre  [(s/valid? :workplace/email-address email-address)]
   :post [(s/valid? boolean? %)]}
  (some? (mc/find-one-as-map db "workplaces" {:workplace/email-address email-address} [:workplace/email-address])))


(defn workplaces-list
  ([db opts]
   {:post [(s/valid? (s/* :workplace/workplace) %)]}
   (mc/find-maps db "workplaces" opts))
  ([db]
   (workplaces-list db {})))


(defn create-workplace [db workplace]
  {:pre  [(s/valid? :workplace/workplace workplace)]
   :post [(s/valid? :workplace/workplace %)]}
  (clojure.set/rename-keys
    (mc/insert-and-return db "workplaces" workplace)
    {:_id :mongo/object-id}))


(defn remove-workplace-by-email [db email-address]
  {:pre [(s/valid? :workplace/email-address email-address)]}
  (mr/acknowledged? (mc/remove db "workplaces" {:workplace/email-address email-address})))


(defn remove-workplace [db workplace]
  {:pre  [(s/valid? :workplace/workplace workplace)]
   :post [(s/valid? boolean? %)]}
  (mr/acknowledged? (mc/remove db "workplaces" workplace)))


(defmulti update-workplace-by-id (fn [_ id _] (type id)))

(defmethod update-workplace-by-id ObjectId [db ^ObjectId id workplace]
  {:pre  [(s/valid? :workplace/workplace workplace)]
   :post [(s/valid? :workplace/workplace %)]}
  (when (mr/acknowledged? (mc/update-by-id db "workplaces" id {"$set" workplace}))
    (find-workplace-by-id db id)))

(defmethod update-workplace-by-id String [db ^String id workplace]
  (update-workplace-by-id db (ObjectId. id) workplace))

