(ns eckersdorf.routes.events
  (:require [re-frame.core :as rf]
            [cuerdas.core :as str]))


;(rf/reg-event-fx
;  :routes/set-active-panel
;  (fn [{db :db} [_ {:keys [panel]}]]
;    (println :routes/set-active-panel panel)
;    {:db         (assoc db :view/active-panel (if (seq panel) (keyword panel) :warehouse))
;     :dispatch-n [[:warehouse/deselect-product-group]
;                  [:warehouse/deselect-product]
;                  [:warehouse/reset-breadcrumbs]
;                  [:warehouse/reset-search-field]]}))
;
;
;(rf/reg-event-fx
;  :routes/category
;  (fn [{db :db} [_ {:keys [slug]}]]
;    (let [categories (str/split slug ">")]
;      {:dispatch-n [[:warehouse/select-category categories]]})))
;
;
;(rf/reg-event-fx
;  :routes/product
;  (fn [{db :db} [_ {:keys [slug]}]]
;    {:dispatch-n [[:warehouse/reset-search-field]
;                  [:warehouse/select-product slug]]}))
;
;
;(rf/reg-event-fx
;  :routes/search
;  (fn [{db :db} [_ {:keys [text]}]]
;    (.log js/console text)
;    {:dispatch-n [[:warehouse/deselect-product]
;                  [:warehouse/search-products text]]}))
