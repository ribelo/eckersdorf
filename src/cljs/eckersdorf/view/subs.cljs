(ns eckersdorf.view.subs
  (:require [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :as rf]))


(rf/reg-sub
  :view/active-panel
  (fn [db _]
    (:view/active-panel db)))


(rf/reg-sub
  :view/scroll-top
  (fn [db _]
    (:view/scroll-top db)))


(rf/reg-sub
  :view/scrolling-down?
  (fn [db _]
    (:view/scrolling-down? db)))


(rf/reg-sub
  :view/scrolling-up?
  (fn [db _]
    (:view/scrolling-up? db)))


(rf/reg-sub
  :view/sider-collapsed?
  (fn [db _]
    (:view/sider-collapsed? db)))