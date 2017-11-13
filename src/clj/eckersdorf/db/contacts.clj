(ns eckersdorf.db.contacts
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


(defn create-contacts-collection [db]
  (when-not (mc/exists? db "contacts")
    (mc/create db "contacts" {})
    (mc/create-index db "contacts" {:contact/email-address 1} {:unique true})
    (mc/create-index db "contacts" {:contact/last-name 1})))


(defn drop-contacts-collection [db]
  (mc/drop db "contacts"))


(defn reset-contacts-collection [db]
  (drop-contacts-collection db)
  (create-contacts-collection db))



(defmulti find-contact-by-id (fn [_ id] (type id)))

(defmethod find-contact-by-id ObjectId [db ^ObjectId id]
  {:pre  [(s/valid? :mongo/object-id id)]
   :post [(s/valid? (s/nilable :contact/contact) %)]}
  (mc/find-map-by-id db "contacts" id))

(defmethod find-contact-by-id String [db ^String id]
  (find-contact-by-id db (ObjectId. id)))


(defn find-contact-by-email-address [db email-address]
  {:pre  [(s/valid? :contact/email-address email-address)]
   :post [(s/valid? (s/nilable :contact/contact) %)]}
  (mc/find-one-as-map db "contacts" {:contact/email-address email-address}))


(defn contact-exists? [db email-address]
  {:pre  [(s/valid? :contact/email-address email-address)]
   :post [(s/valid? boolean? %)]}
  (some? (mc/find-one-as-map db "contacts" {:contact/email-address email-address} [:contact/email-address])))


(defn find-contacts
  ([db opts]
   {:post [(s/valid? (s/* :contact/contact) %)]}
   (mc/find-maps db "contacts" opts))
  ([db]
   (find-contacts db {})))


(defn create-contact [db contact]
  {:pre  [(s/valid? :contact/contact contact)]
   :post [(s/valid? :contact/contact %)]}
  (clojure.set/rename-keys
    (mc/insert-and-return db "contacts" contact)
    {:_id :mongo/object-id}))


(defmulti remove-contact-by-id (fn [_ id] (type id)))

(defmethod remove-contact-by-id ObjectId [db ^ObjectId id]
  {:pre [(s/valid? :mongo/object-id id)]}
  (mr/acknowledged? (mc/remove-by-id db "contacts" id)))

(defmethod remove-contact-by-id String [db ^String id]
  (remove-contact-by-id db (ObjectId. id)))


(defn remove-contact-by-email [db email-address]
  {:pre [(s/valid? :contact/email-address email-address)]}
  (mr/acknowledged? (mc/remove db "contacts" {:contact/email-address email-address})))


(defn remove-contact [db contact]
  {:pre  [(s/valid? :contact/contact contact)]
   :post [(s/valid? boolean? %)]}
  (mr/acknowledged? (mc/remove db "contacts" contact)))


(defmulti update-contact-by-id (fn [_ id _] (type id)))

(defmethod update-contact-by-id ObjectId [db ^ObjectId id contact]
  {:pre  [(s/valid? :contact/contact contact)]
   :post [(s/valid? :contact/contact %)]}
  (when (mr/acknowledged? (mc/update-by-id db "contacts" id {"$set" contact}))
    (find-contact-by-id db id)))

(defmethod update-contact-by-id String [db ^String id contact]
  (update-contact-by-id db (ObjectId. id) contact))
