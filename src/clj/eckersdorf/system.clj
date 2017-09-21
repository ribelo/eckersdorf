(ns eckersdorf.system
  (:require [com.stuartsierra.component :as component]
            [eckersdorf.config :as config]
            [eckersdorf.server :as server]
            [eckersdorf.nrepl :as nrepl]
            [eckersdorf.db.core :as db]))


(defn new-system []
  (component/system-map
    :config (config/new-config)
    :server (server/new-web-server)
    :nrepl (nrepl/new-nrepl-server)
    :mongo (db/new-mongo)))
