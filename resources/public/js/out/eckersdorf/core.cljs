(ns eckersdorf.core
  (:require [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [bidi.bidi :as bidi]
            [bidi.router :as br]
            [taoensso.timbre :as timbre]
            [ajax.core :refer [GET POST]]
            [pushy.core :as pushy]
            [eckersdorf.view.ui :as view]
            [eckersdorf.routes.core :as routes]
            [eckersdorf.init])
  (:import goog.History))



(defn mount-components []
  (timbre/info "components mounted!")
  (rf/clear-subscription-cache!)
  (r/render [#'view/page] (.getElementById js/document "app")))


(defn init! []
  ;(routes/init)
  (rf/dispatch-sync [:db/initialize-db])
  (rf/dispatch-sync [:db/load-storage])
  (rf/dispatch [:window/run-resize-listener!])
  (rf/dispatch [:window/update-size])
  (rf/dispatch [:workplaces/request-list])
  (rf/dispatch [:workers/request-list])
  (mount-components))

