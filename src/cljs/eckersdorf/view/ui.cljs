(ns eckersdorf.view.ui
  (:require [cljs.spec.alpha :as s]
            [reagent.core :as r]
            [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :as rf]
            [antizer.reagent :as ant]
            [goog.string :as string]
            [cuerdas.core :as str]
            [eckersdorf.routes.core :as router]
            [eckersdorf.flex :as flex]
            [eckersdorf.user.login.ui :as login.ui]
            [eckersdorf.workplaces.ui :as workplaces.ui]
            [eckersdorf.workers.ui :as workers.ui]))


(defn page []
  (let [panel (rf/subscribe [:view/active-panel])
        logged? (rf/subscribe [:user/logged-in?])
        sider-collapsed? (rf/subscribe [:view/sider-collapsed?])
        personal-data (rf/subscribe [:user/personal-data])]
    (fn []
      (if-not @logged?
        [login.ui/login-page]
        [ant/locale-provider {:locale (ant/locales "pl_PL")}
         [ant/layout {:style {:min-height "100vh"}}
          [ant/layout-sider {:collapsible true
                             :collapsed   @sider-collapsed?
                             :on-collapse (fn []
                                            (rf/dispatch [:view/sider-toggle]))
                             :style       {:min-height :inherit}}
           [ant/menu {:theme         :dark
                      :mode          :inline
                      :on-click      (fn [e] (rf/dispatch [:view/set-active-panel (keyword (.-key e))]))
                      :selected-keys [(name @panel)]}
            [ant/menu-item {:key :user}
             [ant/icon {:type :meh-o}]
             [:span (str
                      (str/title (:user/first-name @personal-data)) " "
                      (str/title (:user/last-name @personal-data)))]]
            [ant/menu-item {:key :workplaces}
             [ant/icon {:type :shopping-cart}]
             [:span "Sklepy"]]
            [ant/menu-item {:key :workers}
             [ant/icon {:type :usergroup-add}]
             [:span "Pracownicy"]]
            [ant/menu-item {:key 3}
             [ant/icon {:type :calendar}]
             [:span "Harmonogram Pracy"]]]]
          [ant/layout {:style {:padding "24px 24px"}}
           [ant/layout-content
            (case @panel
              :user [:div "pusto jeszcze"]
              :workplaces [workplaces.ui/workplaces-view]
              :workers [workers.ui/workers-view])]]]])
      )))