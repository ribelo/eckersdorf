(ns eckersdorf.routes.services.core
  (:require [clojure.spec.alpha :as s]
            [clojure.core.async :refer [go]]
            [schema.core :as schema]
            [yada.yada :as yada]
            [monger.collection :as mc]
            [eckersdorf.routes.services.users :as services.users]
            [eckersdorf.routes.services.workers :as services.workers]
            [eckersdorf.routes.services.workplaces :as services.workplaces]
            [taoensso.timbre :as timbre]
            [taoensso.encore :as encore :refer [assoc-some]]
            [manifold.deferred :as d]
            [cuerdas.core :as str]
            [hiccup.core :as hiccup]
            [yada.jwt :as jwt]
            ))


(defn services-routes [db]
  ["/api"
   [
    ["/1.0"
     [
      (services.users/users-routes db)
      (services.workplaces/workplaces-routes db)
      (services.workers/workers-routes db)]]]])
