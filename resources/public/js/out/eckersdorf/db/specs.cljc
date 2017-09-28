(ns eckersdorf.db.specs
  #?(:clj
     (:require [clojure.spec.alpha :as s]
               [clj-time.core :as t]
               [cuerdas.core :as str]))
  #?(:cljs
     (:require [cljs.spec.alpha :as s]
       [cljs-time.core :as t]
       [cuerdas.core :as str]))
  #?(:clj
     (:import (org.joda.time DateTime)
              (org.bson.types ObjectId)))
  #?(:cljs
     (:import (goog.date DateTime))))

#?(:clj  (s/def :mongo/object-id (s/or :object-id #(instance? ObjectId %) :string (s/and string? #(= 24 (count %)))))
   :cljs (s/def :mongo/object-id (s/and string? #(= 24 (count %)))))

(s/def :email-address/email-address (s/and string? #(re-find #"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)" %)))
(s/def :datetime/datetime #(instance? DateTime %))
(s/def :string/not-empty (s/and string? seq))
(s/def :string/empty (s/and string? empty?))
(s/def :string/number (s/and :string/not-empty str/numeric?))


(s/def :user/id :mongo/object-id)
(s/def :user/first-name :string/not-empty)
(s/def :user/last-name :string/not-empty)
(s/def :user/email-address :email-address/email-address)

(s/def :user/roles (s/coll-of #{"admin" "ceo" "owner" "manager" "hr" "worker"}))
(s/def :user/password :string/not-empty)
(s/def :user/expire-at (s/nilable :datetime/datetime))
(s/def :user/token string?)

(s/def :user/base (s/keys :req [:user/email-address]
                          :opt [:user/first-name :user/last-name :user/roles :user/expire-at :user/token]))
(s/def :user/full (s/keys :req [:user/first-name :user/last-name :user/email-address]
                          :opt [:user/roles :user/expire-at :user/token :mongo/object-id]))
(s/def :user/admin :user/base)
(s/def :user/user :user/full)
(s/def :user/with-password (s/merge :user/base (s/keys :req [:user/password])))


(s/def :address/street-name :string/not-empty)
(s/def :address/street-number :string/not-empty)
(s/def :address/house-number (s/nilable string?))
(s/def :address/zip-code (s/and string? #(re-find #"[0-9]{2}-[0-9]{3}" %)))
(s/def :address/city :string/not-empty)
(s/def :address/address (s/keys :req [:address/street-name :address/street-number
                                      :address/house-number :address/zip-code
                                      :address/city]))

(s/def :workplace/id :mongo/object-id)
(s/def :workplace/name :string/not-empty)
(s/def :workplace/type (s/nilable #{"shop" "dc" "wholesale"}))
(s/def :workplace/email-address :email-address/email-address)
(s/def :workplace/address :address/address)
(s/def :workplace/workplace (s/keys :req [:workplace/name
                                          :workplace/address
                                          :workplace/type]
                                    :opt [:workplace/id]))


(s/def :worker/id :mongo/object-id)
(s/def :worker/first-name :string/not-empty)
(s/def :worker/last-name :string/not-empty)
(s/def :worker/email-address :email-address/email-address)
(s/def :worker/phone-number (s/nilable (s/and string? #(re-find #"^[0-9]{9}$" %))))
(s/def :worker/workplace (s/nilable :workplace/workplace))
(s/def :worker/address (s/nilable :address/address))
(s/def :worker/worker (s/keys :req [:worker/first-name :worker/last-name
                                    :worker/email-address :worker/phone-number
                                    :worker/workplace :worker/address]))


(s/def :timetable/workplace :workplace/id)
(s/def :timetable/datetime :datetime/datetime)
(s/def :timetable/worker :worker/id)
