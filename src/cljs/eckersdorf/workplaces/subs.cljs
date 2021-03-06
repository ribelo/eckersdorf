(ns eckersdorf.workplaces.subs
  (:require [re-frame.core :as rf]))


(rf/reg-sub
  :workplaces/list
  (fn [db _]
    (:workplaces/list db)))


(rf/reg-sub
  :workplaces/show-dialog?
  (fn [db _]
    (:workplaces/show-dialog? db)))


(rf/reg-sub
  :workplaces/workplace-form
  (fn [db _]
    (:workplaces/workplace-form db)))


(rf/reg-sub
  :workplace/get-by-id
  :<- [:workplaces/list]
  (fn [workplaces [_ id]]
    (->> workplaces
         (filter #(= id (:mongo/object-id %)))
         (first))))

(rf/reg-sub
  :workplace/get-by-email
  :<- [:workplaces/list]
  (fn [workplaces [_ x]]
    (->> workplaces
         (filter #(= x (:workplace/email-address %)))
         (first))))