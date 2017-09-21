(ns eckersdorf.core
  (:require [com.stuartsierra.component :as component]
            [yada.yada :as yada]
            [taoensso.timbre :as timbre]
            [eckersdorf.system :as system]
            [eckersdorf.config]))

(defn -main
  [& args]
  (component/start (system/new-system))
  @(promise))
