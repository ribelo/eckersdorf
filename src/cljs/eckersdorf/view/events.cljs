(ns eckersdorf.view.events
  (:require [re-frame.core :as rf]
            [goog.dom :as dom]
            [bardo.transition :as transition]
            [bardo.interpolate :as interpolate]
            [cljs.core.async :refer [<! >!]])
  (:require-macros [cljs.core.async.macros :refer [go-loop go]]))


(rf/reg-event-db
  :view/set-active-panel
  (fn [db [_ panel]]
    (assoc db :view/active-panel panel)))


(rf/reg-event-db
  :view/update-scroll-top
  (fn [db _]
    (let [last-position (get db :view/scroll-top)
          current-position (aget (.querySelector js/document "#main-view") "scrollTop")]
      (assoc db :view/scroll-top current-position
                :view/scrolling-down? (> current-position last-position)
                :view/scrolling=up? (< current-position last-position)))))


(rf/reg-event-fx
  :view/go-to-top
  (fn [_ _]
    (let [curr-scroll (aget (.querySelector js/document "#main-view") "scrollTop")
          intrpl-ch (transition/transition curr-scroll 0 {:duration 1000})]
      (go-loop []
               (when-let [val (<! intrpl-ch)]
                 (aset (.querySelector js/document "#main-view") "scrollTop" val)
                 (recur))))
    nil))



(rf/reg-event-db
  :view/sider-toggle
  (fn [db _]
    (update db :view/sider-collapsed? not)))


;(rf/reg-event-fx
;  :view/search-filed-change
;  (fn [{db :db} [_ text]]
;    (println :view/search-filed-change text)
;    {:db (assoc-in db [:view :app-bar :search-field] text)}))


;(rf/reg-event-fx
;  :view/tmp-search-filed-change
;  (fn [{db :db} [_ text]]
;    (println :view/search-filed-change text)
;    {:db (assoc-in db [:view :app-bar :tmp-search-field] text)}))


;(rf/reg-event-fx
;  :view/search-filed-request
;  (fn [{db :db} [_ text]]
;    (println :search-filed-request text)
;    {:dispatch [:products/request text]}))
