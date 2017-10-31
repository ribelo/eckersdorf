(ns eckersdorf.init
  (:require [taoensso.timbre :as timbre]
            [day8.re-frame.http-fx]
            [eckersdorf.db.specs]
            [eckersdorf.events]
            [eckersdorf.routes.events]
            [eckersdorf.db.events]
            [eckersdorf.window.db]
            [eckersdorf.window.subs]
            [eckersdorf.window.events]
            [eckersdorf.process.db]
            [eckersdorf.process.events]
            [eckersdorf.process.subs]
            [eckersdorf.error.db]
            [eckersdorf.error.events]
            [eckersdorf.error.subs]
            [eckersdorf.view.events]
            [eckersdorf.view.subs]
            [eckersdorf.user.db]
            [eckersdorf.user.events]
            [eckersdorf.user.subs]
            [eckersdorf.user.login.db]
            [eckersdorf.user.login.events]
            [eckersdorf.user.login.subs]
            [eckersdorf.workplaces.db]
            [eckersdorf.workplaces.events]
            [eckersdorf.workplaces.subs]
            [eckersdorf.workers.db]
            [eckersdorf.workers.events]
            [eckersdorf.workers.subs]
            [eckersdorf.work-schedule.db]
            [eckersdorf.work-schedule.events]
            [eckersdorf.work-schedule.subs]


            [re-frame.router :as router]
            [re-frame.registrar :refer [get-handler clear-handlers register-handler]]
            [re-frame.loggers :refer [console]]
            [antizer.reagent :as ant]
            [eckersdorf.routes.core :as routes]
            ))

(timbre/merge-config! {:level :debug})


(register-handler :fx
                  :dispatch-sync
                  (fn [value]
                    (if-not (vector? value)
                      (console :error "re-frame: ignoring bad :dispatch value. Expected a vector, but got:" value)
                      (router/dispatch-sync value))))


(register-handler :fx
                  :dispatch-sync-n
                  (fn [value]
                    (if-not (sequential? value)
                      (console :error "re-frame: ignoring bad :dispatch-n value. Expected a collection but got:" value))
                    (doseq [event value] (router/dispatch-sync event))))


(register-handler :fx
                  :message
                  (fn [{:keys [content type duration] :as m}]
                    (if-not (map? m)
                      (console :error "re-frame: ignoring bad :dispatch-n value. Expected a map, but got:" m)
                      (case type
                        :info (ant/message-info content (or duration 3.5))
                        :success (ant/message-success content (or duration 3.5))
                        :warning (ant/message-warning content (or duration 3.5))
                        :error (ant/message-error content (or duration 3.5))
                        :loading (ant/message-loading content (or duration 3.5))))))