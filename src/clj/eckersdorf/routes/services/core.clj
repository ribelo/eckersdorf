(ns eckersdorf.routes.services.core
  (:require [clojure.spec.alpha :as s]
            [clojure.core.async :refer [go]]
            [schema.core :as schema]
            [yada.yada :as yada]
            [monger.collection :as mc]
            [eckersdorf.db.users :as db.users]
            [eckersdorf.routes.services.users :as services.users]
            [eckersdorf.db.workers :as db.workers]
            [eckersdorf.routes.services.workers :as services.workers]
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
      (services.workers/workers-routes db)]]]])
