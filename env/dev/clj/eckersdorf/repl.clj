(ns eckersdorf.repl
  (:require [clojure.spec.alpha :as s]
            [clojure.java.io :as io]
            [com.stuartsierra.component :as component]
            [aero.core :as aero]
            [taoensso.encore :as encore]
            [taoensso.timbre :as timbre]
            [monger.collection :as mc]
            [eckersdorf.server :as server]
            [eckersdorf.db.core :as db]
            [eckersdorf.routes.core :as routes]
            [eckersdorf.system :as system]
            [eckersdorf.db.users :as users]
            [cuerdas.core :as str]
            [clojure.spec.alpha :as s]
            [buddy.sign.jwt :as jwt]
            [buddy.hashers :as hashers]
            [clj-time.core :as t]
            [progrock.core :as pr]
            [clojure.zip :as zip]
            [progrock.core :as pr])
  (:import (org.bson.types ObjectId)))

(timbre/merge-config! {:level :info})

(def repl-system nil)
(def tmp-db nil)


(defn init-system []
  (alter-var-root #'repl-system (constantly (system/new-system))))


(defn start-system []
  (alter-var-root #'repl-system component/start-system)
  (alter-var-root #'tmp-db (fn [_] (:db (:mongo repl-system)))))


(defn stop-system []
  (alter-var-root #'repl-system
                  (fn [s] (when s (component/stop-system s)))))


(defn go-system []
  (init-system)
  (start-system))


(defn reset-system []
  (stop-system)
  (init-system)
  (start-system))
(go-system)
(reset-system)
(stop-system)

(users/users-list tmp-db)

(s/explain :user/admin {:user/first-name "rafał"
                        :user/last-name  "krzyważnia"
                        :user/password   "K9aafCv."})

(users/create-admin tmp-db {:user/first-name "rafał"
                            :user/last-name "krzyważnia"
                            :user/password "K9aafCv."
                            :user/email-address "r.krzywaznia@teas.com.pl"})

(users/correct-user-password? tmp-db "r.krzywaznia@teas.com.pl" "K9aafCv.")