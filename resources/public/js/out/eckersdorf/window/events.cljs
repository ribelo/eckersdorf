(ns eckersdorf.window.events
  (:require [re-frame.core :as rf]))


(rf/reg-event-db
  :window/update-height
  (fn [db _]
    (let [height (.-innerHeight js/window)]
      (assoc db :window/height height))))


(rf/reg-event-db
  :window/update-width
  (fn [db _]
    (let [width (.-innerWidth js/window)]
      (assoc db :window/width width))))


(rf/reg-event-db
  :window/update-breakpoint
  (fn [{width :window/width :as db} _]
    (let [breakpoint (cond
                       (< width 600) :xs
                       (and (>= width 600) (< width 960)) :sm
                       (and (>= width 960) (< width 1200)) :md
                       (and (>= width 1200) (< width 1920)) :lg
                       (>= width 1920) :xl)]
      (assoc db :window/breakpoint breakpoint))))


(rf/reg-event-db
  :layout/update-columns
  (fn [{width :window/width :as db} _]
    (let [columns (cond
                    (< width 600) 4
                    (and (>= width 600) (< width 720)) 8
                    (>= width 720) 12)]
      (assoc db :layout/columns columns))))


(rf/reg-event-db
  :layout/update-gutter
  (fn [{width :window/width :as db} _]
    (let [gutter (cond
                   (< width 600) 16
                   (>= width 600) 24)]
      (assoc db :layout/gutter gutter))))


(rf/reg-event-fx
  :window/update-size
  (fn [db _]
    {:dispatch-n [[:window/update-height]
                  [:window/update-width]
                  [:window/update-breakpoint]
                  [:layout/update-columns]
                  [:layout/update-gutter]

                  ]}))


(rf/reg-event-fx
  :window/run-resize-listener!
  (fn [_ _]
    (let [resize-state (atom nil)]
      (.addEventListener js/window "resize"
                         (fn []
                           (js/clearTimeout @resize-state)
                           (let [timeout (js/setTimeout #(rf/dispatch [:window/update-size]) 500)]
                             (reset! resize-state timeout)))))
    nil))
