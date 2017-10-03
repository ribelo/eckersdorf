(ns eckersdorf.user.subs
  (:require [re-frame.core :as rf]))


(rf/reg-sub
  :user/object-id
  (fn [db _]
    (:user/object-id db)))


(rf/reg-sub
  :user/first-name
  (fn [db _]
    (:user/first-name db)))


(rf/reg-sub
  :user/last-name
  (fn [db _]
    (:user/last-name db)))


(rf/reg-sub
  :user/email-address
  (fn [db _]
    (:user/email-address db)))


(rf/reg-sub
  :user/token
  (fn [db _]
    (:user/token db)))


(rf/reg-sub
  :user/roles
  (fn [db _]
    (:user/roles db)))


(rf/reg-sub
  :user/permissions
  (fn [db _]
    (:user/permissions db)))


(rf/reg-sub
  :user/admin?
  (fn [db _]
    (-> (:user/roles db)
        (set)
        (contains? "admin"))))


(rf/reg-sub
  :user/moderator?
  (fn [db _]
    (-> (:user/roles db)
        (set)
        (contains? "moderator"))))


(rf/reg-sub
  :user/admin-or-moderator?
  :<- [:user/admin?]
  :<- [:user/moderator?]
  (fn [[admin? moderator?] _]
    (or admin? moderator?)))


(rf/reg-sub
  :user/personal-data
  (fn [db _]
    (select-keys db [:user/first-name
                     :user/last-name
                     :user/email-address
                     :user/phone-number])))


(rf/reg-sub
  :user/logged-in?
  :<- [:user/token]
  (fn [token]
    (some? token)))


(rf/reg-sub
  :user/last-login
  (fn [db _]
    (:user/last-login db)))
