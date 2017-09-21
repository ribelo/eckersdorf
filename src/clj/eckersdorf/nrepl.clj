(ns eckersdorf.nrepl
  (:require [clojure.tools.nrepl.server :as nrepl]
            [com.stuartsierra.component :as component]
            [taoensso.timbre :as timbre]
            [cuerdas.core :as str]))


(defrecord nReplServer [config]
  component/Lifecycle
  (start [component]
    (let [nrepl-port (:nrepl/port config)]
      (timbre/info (str/format "Started nrepl-serwer on port %s" nrepl-port))
      (assoc component :nrepl (nrepl/start-server :port nrepl-port))))
  (stop [component]
    (assoc component :nrepl (nrepl/stop-server (:nrepl component)))))


(defn new-nrepl-server []
  (component/using
    (map->nReplServer {})
    [:config]))

