(ns eckersdorf.view.events
  (:require [re-frame.core :as rf]
            [goog.dom :as dom]
            [eckersdorf.db.core :refer [->local-storage]]))


(rf/reg-event-db
  :view/set-active-panel
  [->local-storage]
  (fn [db [_ panel]]
    (assoc db :view/active-panel panel)))


(rf/reg-event-db
  :view/toggle-sider
  (fn [db _]
    (update db :view/sider-collapsed? not)))


(rf/reg-event-db
  :view/toggle-scroll-content
  (fn [db _]
    (update db :view/scroll-content? not)))


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
