(ns eckersdorf.db.core
  (:require [cognitect.transit :as t]
            [re-frame.core :as rf])
  (:import [goog.date UtcDateTime]))



(def transit-readers
  {:handlers
   {"m" (t/read-handler (fn [s] (UtcDateTime.fromTimestamp s)))}})


(def transit-writers
  {:handlers
   {UtcDateTime (t/write-handler
                  (constantly "m")
                  (fn [v] (.getTime v))
                  (fn [v] (str (.getTime v))))}})


(defn ->json [db]
  (let [w (t/writer :json transit-writers)]
    (t/write w db)))


(defn save-local-storage [db]
  (.setItem js/localStorage "eckersdorf"
            (-> db
                (select-keys [:view/active-panel
                              :view/sider-collapsed?
                              :user/last-login
                              :user/object-id
                              :user/first-name
                              :user/last-name
                              :user/email-address
                              :user/roles
                              :user/token
                              :user/permissions])
                (->json))))


(def ->local-storage (rf/after save-local-storage))

(defn load-local-storage []
  (let [r (t/reader :json transit-readers)]
    (some->> (.getItem js/localStorage "eckersdorf")
             (t/read r))))


(defn clear-local-storage []
  (save-local-storage {}))


(def default-db
  {})
