(ns eckersdorf.db.core
  (:require [cognitect.transit :as t]
            [re-frame.core :as rf]))


(def ^:private ks
  [:basket/products
   :warehouse/last-watched])


(defn save-local-storage [db]
  (let [w (t/writer :json)]
    (.setItem js/localStorage "pintu" (t/write w (select-keys db ks)))))


(def ->local-storage (rf/after save-local-storage))


(defn load-local-storage []
  (let [r (t/reader :json)]
    (some->> (.getItem js/localStorage "pintu")
             (t/read r))))


(defn clear-local-storage []
  (.setItem js/localStorage "pintu" {}))


(def default-db
  {:view/active-panel :store/products})
