(ns eckersdorf.nrepl
  (:require [clojure.tools.nrepl.server :as nrepl]
            [com.stuartsierra.component :as component]
            [taoensso.timbre :as timbre]
            [cuerdas.core :as str]))


(defrecord nReplServer [config]
  component/Lifecycle
  (start [component]
    (let [nrepl-port (:nrepl/port config)]
      (when nrepl-port (timbre/info (str/format "Started nrepl-serwer on port %s" nrepl-port)))
      (assoc component :nrepl (when nrepl-port (nrepl/start-server :port nrepl-port)))))
  (stop [component]
    (let [nrepl (:nrepl component)]
      (assoc component :nrepl (when nrepl (nrepl/stop-server nrepl))))))


(defn new-nrepl-server []
  (component/using
    (map->nReplServer {})
    [:config]))

