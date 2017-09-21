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
            ;[eckersdorf.warehouse.db]
            ;[eckersdorf.warehouse.events]
            ;[eckersdorf.warehouse.subs]
            ;[eckersdorf.categories.db]
            ;[eckersdorf.categories.events]
            ;[eckersdorf.categories.subs]
            ;[eckersdorf.basket.db]
            ;[eckersdorf.basket.events]
            ;[eckersdorf.basket.subs]
            [eckersdorf.login.db]
            [eckersdorf.login.events]
            [eckersdorf.login.subs]
            ;[eckersdorf.registration.db]
            ;[eckersdorf.registration.events]
            ;[eckersdorf.registration.subs]
            ;[eckersdorf.user.db]
            ;[eckersdorf.user.events]
            ;[eckersdorf.user.subs]
            ;[eckersdorf.users.db]
            ;[eckersdorf.users.events]
            ;[eckersdorf.users.subs]
            ;[eckersdorf.panel.events]
            ;[eckersdorf.panel.subs]

            [re-frame.router :as router]
            [re-frame.registrar :refer [get-handler clear-handlers register-handler]]
            [re-frame.loggers :refer [console]]
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
      (console :error "re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:" value))
    (doseq [event value] (router/dispatch-sync event))))