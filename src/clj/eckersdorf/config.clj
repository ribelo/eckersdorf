(ns eckersdorf.config
  (:require [clojure.java.io :as io]
            [com.stuartsierra.component :as component]
            [aero.core :as aero]))


(defrecord Config []
  component/Lifecycle
  (start [component]
    (merge component (aero/read-config (io/resource "config.edn"))))
  (stop [component]
    {}))


(defn new-config []
  (component/using
    (map->Config {})
    []))



