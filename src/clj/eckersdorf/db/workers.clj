(ns eckersdorf.db.workers
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


(defn create-workers-collection [db]
  (when-not (mc/exists? db "workers")
    (mc/create db "workers" {})
    (mc/create-index db "workers" {:worker/email-address 1} {:unique true})
    (mc/create-index db "workers" {:worker/last-name 1})))


(defn drop-workers-collection [db]
  (mc/remove db "workers"))


(defn reset-workers-collection [db]
  (drop-workers-collection db)
  (create-workers-collection db))



(defmulti find-worker-by-id (fn [_ id] (type id)))

(defmethod find-worker-by-id ObjectId [db ^ObjectId id]
  {:pre  [(s/valid? :mongo/object-id id)]
   :post [(s/valid? (s/nilable :worker/worker) %)]}
  (mc/find-map-by-id db "workers" id))

(defmethod find-worker-by-id String [db ^String id]
  (find-worker-by-id db (ObjectId. id)))


(defn find-worker-by-email-address [db email-address]
  {:pre  [(s/valid? :worker/email-address email-address)]
   :post [(s/valid? (s/nilable :worker/worker) %)]}
  (mc/find-one-as-map db "workers" {:worker/email-address email-address}))


(defn worker-exists? [db email-address]
  {:pre  [(s/valid? :worker/email-address email-address)]
   :post [(s/valid? boolean? %)]}
  (some? (mc/find-one-as-map db "workers" {:worker/email-address email-address} [:worker/email-address])))


(defn workers-list
  ([db opts]
   {:post [(s/valid? (s/* :worker/worker) %)]}
   (mc/find-maps db "workers" opts))
  ([db]
   (workers-list db {})))


(defn create-worker [db worker]
  {:pre  [(s/valid? :worker/worker worker)]
   :post [(s/valid? :worker/worker %)]}
  (clojure.set/rename-keys
    (mc/insert-and-return db "workers" worker)
    {:_id :mongo/object-id}))


(defn remove-worker-by-email [db email-address]
  {:pre [(s/valid? :worker/email-address email-address)]}
  (mr/acknowledged? (mc/remove db "workers" {:worker/email-address email-address})))


(defn remove-worker [db worker]
  {:pre  [(s/valid? :worker/worker worker)]
   :post [(s/valid? boolean? %)]}
  (mr/acknowledged? (mc/remove db "workers" worker)))


(defmulti update-worker-by-id (fn [_ id _] (type id)))

(defmethod update-worker-by-id ObjectId [db ^ObjectId id worker]
  {:pre  [(s/valid? :worker/worker worker)]
   :post [(s/valid? :worker/worker %)]}
  (when (mr/acknowledged? (mc/update-by-id db "workers" id {"$set" worker}))
    (find-worker-by-id db id)))

(defmethod update-worker-by-id String [db ^String id worker]
  (update-worker-by-id db (ObjectId. id) worker))
