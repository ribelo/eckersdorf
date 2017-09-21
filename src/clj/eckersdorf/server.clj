(ns eckersdorf.server
  (:require [clojure.spec.alpha :as s]
            [com.stuartsierra.component :as component]
            [yada.yada :as yada]
            [bidi.vhosts :refer [vhosts-model]]
            [taoensso.timbre :as timbre]
            [cuerdas.core :as str]
            [eckersdorf.routes.core :refer [new-routes]]))


(defrecord WebServer [config mongo]
  component/Lifecycle
  (start [component]
    (let [port (:webserver/port config)
          routes (new-routes mongo)
          vhosts (vhosts-model [{:scheme :http :host (str (:webserver/host config) ":" port)}
                                routes])
          listener (yada/listener vhosts {:port port})]
      (timbre/info (str/format "Started web-serwer on port %s" (:port listener)))
      (assoc component :listener listener)))
  (stop [component]
    (when-let [close (get-in component [:listener :close])]
      (timbre/info (str/format "Stoped web-serwer on port %s" (get-in component [:listener :port])))
      (close))
    (assoc component :listener nil)))


(defn new-web-server []
  (component/using
    (map->WebServer {})
    [:config :mongo]))

