(ns eckersdorf.view.ui
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :as rf]
            [antizer.reagent :as ant]
            [goog.string :as string]
            [cuerdas.core :as str]
            [eckersdorf.routes.core :as router]
            [eckersdorf.util :refer [css-transition]]
            [eckersdorf.flex :as flex]
            [eckersdorf.login.ui :as login.ui]))



(defn sider []
  (let [sider-collapsed? (rf/subscribe [:view/sider-collapsed?])]
    (fn []
      [ant/layout-sider {:collapsible true
                         :collapsed   @sider-collapsed?
                         :on-collapse (fn []
                                        (rf/dispatch [:view/sider-toggle]))
                         :style       {:min-height :inherit}}
       [ant/menu {:theme :dark
                  :mode  :inline}
        [ant/menu-item {:key 1}
         [ant/icon {:type :calendar}]
         [:span "Harmonogram Pracy"]]]])))



(defn page []
  (let []
    (fn []
      ;[ant/layout {:style {:min-height "100vh"}}
      ; [sider]
      ; [ant/layout
      ;  [ant/layout-content
      ;   ]]]
      [login.ui/login-page]
      )))