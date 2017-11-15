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
            [eckersdorf.contacts.ui :as contacts.ui]
            [eckersdorf.workplaces.ui :as workplaces.ui]
            [eckersdorf.workers.ui :as workers.ui]
            [eckersdorf.work-schedule.ui :as work-schedule.ui]))


(defn page []
  (let [panel (rf/subscribe [:view/active-panel])
        logged? (rf/subscribe [:user/logged-in?])
        sider-collapsed? (rf/subscribe [:view/sider-collapsed?])
        personal-data (rf/subscribe [:user/personal-data])
        scroll-content? (rf/subscribe [:view/scroll-content?])]
    (fn []
      (if-not @logged?
        [login.ui/login-page]
        [ant/locale-provider {:locale (ant/locales "pl_PL")}
         [ant/layout
          [ant/layout-sider {:class       "no-print"
                             :collapsible true
                             :collapsed   @sider-collapsed?
                             :on-collapse (fn []
                                            (rf/dispatch [:view/toggle-sider]))
                             :style       {:height "100vh"}}
           [flex/vbox {:size            1
                       :height          "calc(100vh - 48px)"
                       :justify-content :space-between}
            [ant/menu {:theme         :dark
                       :mode          :inline
                       :on-click      (fn [e] (rf/dispatch [:view/set-active-panel (keyword (.-key e))]))
                       :selected-keys [(name @panel)]}
             [ant/menu-item {:key :user}
              [ant/icon {:type :meh-o}]
              [:span (str (str/title (:user/first-name @personal-data)) " "
                          (str/title (:user/last-name @personal-data)))]]
             [ant/menu-item {:key :organization}
              [ant/icon {:type :fork}]
              [:span "struktura"]]
             [ant/menu-item {:key :contacts}
              [ant/icon {:type :book}]
              [:span "kontakty"]]
             [ant/menu-item {:key :workplaces}
              [ant/icon {:type :shopping-cart}]
              [:span "sklepy"]]
             [ant/menu-item {:key :workers}
              [ant/icon {:type :usergroup-add}]
              [:span "pracownicy"]]
             [ant/menu-item {:key :work-schedule}
              [ant/icon {:type :calendar}]
              [:span "harmonogram pracy"]]]
            [ant/menu {:theme    :dark
                       :mode     :inline
                       :on-click (fn [_] (rf/dispatch [:user/logout]))}
             [ant/menu-item {:key :logout}
              [ant/icon {:type :poweroff}]
              [:span "wyloguj"]]]]]
          [ant/layout {:style {:padding "24px 24px 0px"
                               :height  "100%"}}
           [ant/layout-content {:style {:height   "calc(100vh - 48px)"
                                        :overflow :auto}}
            (case @panel
              :user [:div "pusto jeszcze"]
              :organization [:div#org-chart "organizacja"]
              :contacts [contacts.ui/contacts-view]
              :workplaces [workplaces.ui/workplaces-view]
              :workers [workers.ui/workers-view]
              :work-schedule [work-schedule.ui/work-schedule-view])]]]]))))