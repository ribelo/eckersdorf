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
            [eckersdorf.db.workers :as db.workers]
            [eckersdorf.db.workplaces :as db.workplaces]
            [eckersdorf.db.work-schedule :as db.work-schedule]
            [cuerdas.core :as str]
            [clojure.spec.alpha :as s]
            [buddy.sign.jwt :as jwt]
            [buddy.hashers :as hashers]
            [clj-time.core :as t]
            [progrock.core :as pr]
            [clojure.zip :as zip]
            [progrock.core :as pr]
            [clojure.set :as set]
            [clj-time.core :as dt]
            [clj-time.coerce :as dtc])
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

(users/create-admin tmp-db {:user/first-name    "rafał"
                            :user/last-name     "krzyważnia"
                            :user/password      "K9aafCv."
                            :user/email-address "r.krzywaznia@teas.com.pl"})

(users/correct-user-password? tmp-db "r.krzywaznia@teas.com.pl" "K9aafCv.")


(db.workers/create-worker tmp-db {:worker/first-name    "anna"
                                  :worker/last-name     "szlęzak"
                                  :worker/email-address "a.szlezak@teas.com.pl"
                                  :worker/phone-number  nil
                                  :worker/workplace     nil
                                  :worker/address       nil
                                  })

(db.workers/workers-list tmp-db)
(db.workers/reset-workers-collection tmp-db)


(timetable/create-timetable-collection tmp-db)
(timetable/reset-timetable-collection tmp-db)

(db.workplaces/create-workplaces-collection tmp-db)

(db.workplaces/create-workplace tmp-db
                                {:workplace/name          "wilków kopernika"
                                 :workplace/type          "dc"
                                 :workplace/email-address "s-1@teas.com.pl"
                                 :workplace/address       {:address/street-name   "kopernika"
                                                           :address/street-number "1"
                                                           :address/house-number  nil
                                                           :address/zip-code      "59-516"
                                                           :address/city          "wilków"}})


(first (db.workplaces/workplaces-list tmp-db))
(first (db.workers/workers-list tmp-db))
(db.work-schedule/schedule-work tmp-db
                                {:work-schedule/workplace-id "59cd4fc48466bc2056615d66"
                                 :work-schedule/worker-id    "59ed11e7fe1b232a5593a5a4"
                                 :work-schedule/datetime     (dt/now)
                                 :work-schedule/work-type    "seller"})

(mc/find-maps tmp-db "work-schedule")
(db.work-schedule/reset-work-schedule-collection tmp-db)

(db.work-schedule/remove-month tmp-db {:work-schedule/workplace-id (ObjectId. "59cd4fc48466bc2056615d66")
                                       :work-schedule/datetime})

(db.work-schedule/month-query tmp-db
                              {:work-schedule/workplace-id "59cd4fc48466bc2056615d66"
                               :work-schedule/datetime     (dt/date-time 2017 9)})

(mc/indexes-on tmp-db "work-schedule")
(mc/drop tmp-db "work-schedule")
(mc/insert tmp-db "work-schedule"
           {
            ;:mongo/object-id            (ObjectId. "59f5dd198466bc769ed36a85"),
            ;:work-schedule/workplace-id (ObjectId. "59cd4fc48466bc2056615d66"),
            :work-schedule/datetime     (dtc/from-string "2017-09-01T12:00:00.000+02:00"),
            :work-schedule/work-type    "seller"})