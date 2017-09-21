(ns eckersdorf.db.core
  (:require [com.stuartsierra.component :as component]
            [monger.core :as mg]
            [monger.collection :as mc]
            [monger.conversion :refer [ConvertToDBObject ConvertFromDBObject from-db-object
                                       FieldSelector]]
            [monger.json]
            [monger.joda-time]
            [taoensso.timbre :as timbre]
            [taoensso.encore :as encore]
            [cuerdas.core :as str]
            [eckersdorf.db.specs])
  (:import [clojure.lang PersistentArrayMap Keyword]
           (com.mongodb DBObject)))


(extend-protocol ConvertToDBObject
  Keyword
  (to-db-object [^Keyword input] (if (= :mongo/object-id input) "_id" (str (.-sym input)))))

(extend-protocol ConvertFromDBObject
  DBObject
  (from-db-object [^DBObject input keywordize]
    (reduce (if keywordize
              (fn [m ^String k]
                (assoc m (if (= "_id" k) :mongo/object-id (keyword k)) (from-db-object (.get input k) true)))
              (fn [m ^String k]
                (assoc m (if (= "_id" k) "mongo/object-id" k) (from-db-object (.get input k) false))))
            {} (.keySet input))))


(defrecord Mongo [config]
  component/Lifecycle
  (start [component]
    (let [{:keys [db conn]} (mg/connect-via-uri (:mongo/uri config ))]
      (assoc component :db db
                       :conn conn)))
  (stop [component]
    (let [conn (:conn component)]
      (mg/disconnect conn)
      (assoc component :db nil
                       :conn nil))))


(defn new-mongo []
  (component/using
    (map->Mongo {})
    [:config]))
