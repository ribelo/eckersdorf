(ns eckersdorf.db.users
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


(defn create-users-collection [db]
  (when-not (mc/exists? db "users")
    (mc/create db "users" {})
    (mc/create-index db "users" {:user/email-address 1} {:unique true})
    (mc/create-index db "users" {:product/second-name 1})
    (mc/create-index db "users" {:user/expire-at 1} {:expireAfterSeconds 0})))


(defn drop-users-collection [db]
  (mc/remove db "users"))


(defn reset-users-collection [db]
  (drop-users-collection db)
  (create-users-collection db))


(defmulti find-user-by-id (fn [_ id] (type id)))

(defmethod find-user-by-id ObjectId [db ^ObjectId id]
  {:pre  [(s/valid? :mongo/object-id id)]
   :post [(s/valid? (s/or :nil? nil? :customer :user/user :admin :user/admin) %)]}
  (mc/find-map-by-id db "users" id {:user/password 0}))

(defmethod find-user-by-id String [db ^String id]
  (find-user-by-id db (ObjectId. id)))


(defn find-user-by-email-address [db email-address]
  {:pre  [(s/valid? :user/email-address email-address)]
   :post [(s/valid? (s/or :nil? nil? :customer :user/user :admin :user/admin) %)]}
  (mc/find-one-as-map db "users" {:user/email-address email-address} {:user/password 0}))


(defn user-exists? [db email-address]
  {:pre  [(s/valid? :user/email-address email-address)]
   :post [(s/valid? boolean? %)]}
  (some? (mc/find-one-as-map db "users" {:user/email-address email-address} [:user/email-address])))


(defn users-list [db]
  {:post [(s/valid? (s/* :user/base) %)]}
  (mc/find-maps db "users" {} {:user/password 0}))


(defn create-user [db user]
  {:pre  [(s/valid? :user/with-password user)]
   :post [(s/valid? :user/full %)]}
  (clojure.set/rename-keys
    (mc/insert-and-return db "users"
                          (-> user
                              (clojure.core/update :user/password hashers/derive)
                              (assoc :user/roles #{"user"}
                                     :user/expire-at (t/plus (t/now) (t/hours 24)))))
    {:_id :mongo/object-id}))


(defn create-admin [db user]
  {:pre  [(s/valid? (s/merge :user/admin (s/keys :req [:user/password])) user)]
   :post [(s/valid? :user/admin %)]}
  (clojure.set/rename-keys
    (mc/insert-and-return db "users" (-> user
                                         (clojure.core/update :user/password hashers/derive)
                                         (assoc :user/roles #{"admin"}
                                                :user/expire-at nil)))
    {:_id :mongo/object-id}))


(defn activate-user-by-email [db email-address]
  {:pre  [(s/valid? :user/email-address email-address)]
   :post [(s/valid? (s/or :nil nil? :bool boolean?) %)]}    ;TODO
  (when (user-exists? db email-address)
    (mr/acknowledged? (mc/update db "users" {:user/email-address email-address} {"$set" {:user/expire-at nil}}))))


(defmulti activate-user-by-id (fn [_ id] (type id)))

(defmethod activate-user-by-id ObjectId [db ^ObjectId id]
  {:pre  [(s/valid? :mongo/object-id id)]
   :post [(s/valid? (s/or :nil nil? :bool boolean?) %)]}    ;TODO
  (when-let [user (mc/find-map-by-id db "users" id)]
    (if (:user/expire-at user)
      (mr/acknowledged? (mc/update-by-id db "users" id {"$set" {:user/expire-at nil}}))
      false)))

(defmethod activate-user-by-id String [db ^String id]
  (activate-user-by-id db (ObjectId. id)))



(defn activation-token [db email-address]
  {:pre  [(s/valid? :user/email-address email-address)]
   :post [(s/valid? (s/or :nil nil? :token string?) %)]}
  (when-let [user (mc/find-one-as-map db "users" {:user/email-address email-address} [:user/email-address :user/expire-at])]
    (if (:user/expire-at user)
      (-> user :mongo/object-id (str)))))


(defn remove-user-by-email [db email-address]
  {:pre [(s/valid? :user/email-address email-address)]}
  (mr/acknowledged? (mc/remove db "users" {:user/email-address email-address})))


(defn remove-user [db user]
  {:pre  [(s/valid? (s/or :nil? nil :customer :user/user :admin :user/admin) user)]
   :post [(s/valid? boolean? %)]}
  (mr/acknowledged? (mc/remove db "users" user)))


(defn correct-user-password? [db email-address password]
  {:pre  [(s/valid? :user/email-address email-address)
          (s/valid? :user/password password)]
   :post [(s/valid? (s/or :nil nil? :exists boolean?) %)]}
  (when-let [user (mc/find-one-as-map db "users" {:user/email-address email-address} [:user/password])]
    (hashers/check password (:user/password user))))


(defn user-token-by-email [db email-address]
  {:pre  [(s/valid? :user/email-address email-address)]
   :post [(s/valid? (s/or :nil nil? :jwt string?) %)]}
  (when-let [user (mc/find-one-as-map db "users" {:user/email-address email-address} [:user/email-address :user/roles])]
    (jwt/sign user "VeryHardPasswordForMyApplication")))


(defmulti user-token (fn [_ id] (type id)))

(defmethod user-token ObjectId [db ^ObjectId id]
  {:pre  [(s/valid? :mongo/object-id id)]
   :post [(s/valid? (s/or :nil nil? :jwt string?) %)]}
  (when-let [user (mc/find-map-by-id db "users" id [:user/email-address :user/roles])]
    (jwt/sign user "VeryHardPasswordForMyApplication")))


(defmethod user-token String [db ^String id]
  (user-token db (ObjectId. id)))


(defn valid-user-token? [db id token]
  {:pre  [(s/valid? :mongo/object-id id)
          (s/valid? :user/token token)]
   :post [(s/valid? (s/or :nil nil? :bool boolean?) %)]}
  (= (user-token db id) token))


(defmulti user-admin? (fn [_ id] (type id)))

(defmethod user-admin? ObjectId [db ^ObjectId id]
  {:pre  [(s/valid? :mongo/object-id id)]
   :post [(s/valid? boolean? %)]}
  (let [{:keys [user/roles]} (find-user-by-id db id)]
    (contains? (set roles) "admin")))

(defmethod user-admin? String [db ^String id]
  (user-admin? db (ObjectId. id)))


(defmulti update-user (fn [_ id _] (type id)))

(defmethod update-user ObjectId [db ^ObjectId id user]
  {:pre  [(s/valid? :user/user user)]
   :post [(s/valid? :user/user %)]}
  (when (mr/acknowledged? (mc/update-by-id db "users" id {"$set" user}))
    (find-user-by-id db id)))

(defmethod update-user String [db ^String id user]
  (update-user db (ObjectId. id) user))