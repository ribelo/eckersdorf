(ns eckersdorf.routes.core
  (:require [yada.yada :as yada]
            [yada.resources.classpath-resource :refer [new-classpath-resource]]
            [eckersdorf.layout :as layout]
            [eckersdorf.routes.services :as services]
            [schema.core :as schema]))


(defn new-routes [{:keys [db]}]
  [""
   [
    ["/" (yada/resource
           {:id       :pintu/main-page
            :produces #{"text/html"}
            :methods  {:get {:response (layout/home-page)}}})]
    (services/service-routes db)
    ["" (new-classpath-resource "public")]

    ]])