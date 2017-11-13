(ns eckersdorf.repl
  (:require [clojure.spec.alpha :as s]
            [clojure.java.io :as io]
            [com.stuartsierra.component :as component]
            [clojure.data.csv :as csv]
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
(s/explain :user/base (second (users/users-list tmp-db)))
(users/remove-user-by-email tmp-db "j.jabczuga@teas.com.pl")
(mc/remove-by-id tmp-db "users" (ObjectId. "59f6da37fe1b230996326d07"))

(users/create-user tmp-db {:user/first-name    "jolanta"
                           :user/last-name     "pazur"
                           :user/password      "Teas.Firma95!"
                           :user/email-address "j.pazur@teas.com.pl"
                           :user/roles         ["hr"]})

(users/correct-user-password? tmp-db "r.krzywaznia@teas.com.pl" "K9aafCv.")


(db.workers/create-worker tmp-db {:worker/first-name    "anna"
                                  :worker/last-name     "szlęzak"
                                  :worker/email-address "a.szlezak@teas.com.pl"
                                  :worker/phone-number  nil
                                  :worker/workplace     nil
                                  :worker/address       nil
                                  })

;(db.workers/workers-list tmp-db)
;(db.workers/reset-workers-collection tmp-db)
(s/explain :workplace/object-id "sex")

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
(first (db.workers/find-workers tmp-db))
(db.work-schedule/schedule-work tmp-db
                                {:work-schedule/workplace-id "59cd4fc48466bc2056615d66"
                                 :work-schedule/worker-id    "59ed11e7fe1b232a5593a5a4"
                                 :work-schedule/datetime     (dt/now)
                                 :work-schedule/work-type    "seller"})

(mc/find-maps tmp-db "work-schedule")
(db.work-schedule/reset-work-schedule-collection tmp-db)

(db.work-schedule/remove-month tmp-db {:work-schedule/workplace-id (ObjectId. "59dea213fe1b232ebfb50d07")
                                       :work-schedule/datetime     (dt/date-time 2017 1)})

(db.work-schedule/month-query tmp-db
                              {:work-schedule/workplace-id "59dea213fe1b232ebfb50d07"
                               :work-schedule/datetime     (dt/date-time 2017 11)})

(count (mc/find-maps tmp-db "work-schedule" {:work-schedule/datetime {"$gte" (dt/date-time 2017 11 30 0)
                                                                      "$lte" (dt/date-time 2017 11 30 23)}}))

(db.workplaces/workplaces-list tmp-db)

(eckersdorf.db.contacts/create-contact tmp-db
                                       {:contact/first-name    "stanisław"
                                        :contact/last-name     "krzyważnia"
                                        :contact/phone-number  "508343454"
                                        :contact/email-address "s.krzywaznia@teas.com.pl"
                                        :contact/company       "teas"
                                        :contact/title         "właściciel"
                                        :contact/description   nil})

(eckersdorf.db.contacts/find-contacts tmp-db)

(s/explain :contact/contact {:contact/first-name    "stanisław"
                             :contact/last-name     "krzyważnia"
                             :contact/phone-number  "508343450"
                             :contact/email-address "s.krzywaznia@teas.com.pl"
                             :contact/company       "teas"
                             :contact/title         "właściciel"})

(let [data (csv/read-csv (io/reader "/home/huxley/Downloads/contacts.csv" :encoding "windows-1250"), / "")]
  (->> (map zipmap
            (->> (first data)
                 (map (comp keyword str/kebab))
                 (repeat))
            (rest data))
       (map #(select-keys % [:mobile-phone :first-name :last-name :title :company :e-mail-address]))
       (map (fn [m] (-> m
                        (update :mobile-phone #(if-not (empty? %) (str/replace % #"\+48|\s" "") nil))
                        (update :first-name #(if-not (empty? %) (str/lower %) nil))
                        (update :last-name #(if-not (empty? %) (str/lower %) nil))
                        (update :title #(if-not (empty? %) (str/lower %) nil))
                        (update :company #(if-not (empty? %) (str/lower %) nil))
                        (update :e-mail-address #(if-not (empty? %) (str/lower %) nil))
                        (assoc :contact/description nil))))
       (map (fn [m] (clojure.set/rename-keys m
                                             {:mobile-phone   :contact/phone-number
                                              :first-name     :contact/first-name
                                              :last-name      :contact/last-name
                                              :e-mail-address :contact/email-address
                                              :company        :contact/company
                                              :title          :contact/title})))
       (mapv (fn [contact]
               (println (s/explain :contact/contact contact))
               (eckersdorf.db.contacts/create-contact tmp-db contact)))))