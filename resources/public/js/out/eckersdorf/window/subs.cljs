(ns eckersdorf.window.subs
  (:require [re-frame.core :as rf]))


(rf/reg-sub
  :window/height
  (fn [db _]
    (:window/height db)))


(rf/reg-sub
  :window/width
  (fn [db _]
    (:window/width db)))


(rf/reg-sub
  :window/breakpoint
  (fn [db _]
    (:window/breakpoint db)))


(rf/reg-sub
  :window/xsmall?
  :<- [:window/breakpoint]
  (fn [breakpoint]
    (= :xs breakpoint)))


(rf/reg-sub
  :window/small?
  :<- [:window/breakpoint]
  (fn [breakpoint]
    (= :sm breakpoint)))


(rf/reg-sub
  :window/medium?
  :<- [:window/breakpoint]
  (fn [breakpoint]
    (= :md breakpoint)))


(rf/reg-sub
  :window/large?
  :<- [:window/breakpoint]
  (fn [breakpoint]
    (= :lg breakpoint)))


(rf/reg-sub
  :window/xlarge?
  :<- [:window/breakpoint]
  (fn [breakpoint]
    (= :xl breakpoint)))


(rf/reg-sub
  :window/gt?
  :<- [:window/breakpoint]
  (fn [breakpoint [_ size]]
    (let [order [:xs :sm :md :lg :xl]]
      (> (.indexOf order breakpoint) (.indexOf order size)))))


(rf/reg-sub
  :window/ge?
  :<- [:window/breakpoint]
  (fn [breakpoint [_ size]]
    (let [order [:xs :sm :md :lg :xl]]
      (>= (.indexOf order breakpoint) (.indexOf order size)))))


(rf/reg-sub
  :window/lt?
  :<- [:window/breakpoint]
  (fn [breakpoint [_ size]]
    (let [order [:xs :sm :md :lg :xl]]
      (> (.indexOf order breakpoint) (.indexOf order size)))))


(rf/reg-sub
  :window/le?
  :<- [:window/breakpoint]
  (fn [breakpoint [_ size]]
    (let [order [:xs :sm :md :lg :xl]]
      (> (.indexOf order breakpoint) (.indexOf order size)))))


(rf/reg-sub
  :layout/columns
  (fn [db _]
    (:layout/columns db)))


(rf/reg-sub
  :layout/gutter
  (fn [db _]
    (:layout/gutter db)))