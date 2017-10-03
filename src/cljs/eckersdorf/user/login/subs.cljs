(ns eckersdorf.user.login.subs
  (:require [re-frame.core :as rf]))


(rf/reg-sub
  :login/email-address
  (fn [db _]
    (:login/email-address db)))


(rf/reg-sub
  :login/password
  (fn [db _]
    (:login/password db)))


(rf/reg-sub
  :login/remember?
  (fn [db _]
    (:login/remember? db)))


(rf/reg-sub
  :login/invalid-password?
  (fn [db _]
    (:login/invalid-password? db)))


(rf/reg-sub
  :login/error
  (fn [db _]
    (:login/error db)))
