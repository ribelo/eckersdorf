(ns eckersdorf.view.events
  (:require [re-frame.core :as rf]
            [goog.dom :as dom]
            ;[bardo.transition :as transition]
            ;[bardo.interpolate :as interpolate]
            [cljs.core.async :refer [<! >!]])
  (:require-macros [cljs.core.async.macros :refer [go-loop go]]))


(rf/reg-event-db
  :view/set-active-panel
  (fn [db [_ panel]]
    (assoc db :view/active-panel panel)))


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
