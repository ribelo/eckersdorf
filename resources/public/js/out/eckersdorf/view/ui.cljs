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
            [eckersdorf.user.login.ui :as login.ui]))



(defn sider []
  (let []
    (fn []
      )))

(clj->js @(rf/subscribe [:workplaces/list]))

(defn workplaces-list []
  (let [workplaces-list (rf/subscribe [:workplaces/list])]
    (fn []
      [ant/table {:columns    [{:title     "nazwa"
                                :dataIndex :workplace/name
                                :key       :workplace/name}
                               {:title     "typ"
                                :dataIndex :workplace/type
                                :key       :workplace/type}
                               {:title     "e-mail"
                                :dataIndex :workplace/email-address
                                :key       :workplace/email-address}
                               {:title     "ulica"
                                :dataIndex "address.street-name"
                                :key       "address.street-name"}
                               {:title     "numer ulicy"
                                :dataIndex "address.street-number"
                                :key       "address.street-number"}
                               {:title     "numer budynku"
                                :dataIndex "address.house-number"
                                :key       "address.house-number"
                                :render #(or % "brak")}
                               {:title     "kod pocztowy"
                                :dataIndex "address.zip-code"
                                :key       "address.zip-code"}
                               {:title     "miejscowość"
                                :dataIndex "address.city"
                                :key       "address.city"}]
                  :dataSource @workplaces-list}])))


(defn page []
  (let [logged? (or (atom true) (rf/subscribe [:user/logged-in?]))
        sider-collapsed? (rf/subscribe [:view/sider-collapsed?])
        personal-data (rf/subscribe [:user/personal-data])]
    (fn []
      (if-not @logged?
        [login.ui/login-page]
        [ant/layout {:style {:min-height "100vh"}}
         [ant/layout-sider {:collapsible true
                            :collapsed   @sider-collapsed?
                            :on-collapse (fn []
                                           (rf/dispatch [:view/sider-toggle]))
                            :style       {:min-height :inherit}}
          [ant/menu {:theme :dark
                     :mode  :inline}
           [ant/menu-item {:key 0}
            [ant/icon {:type :meh-o}]
            [:span (str
                     (str/title (:user/first-name @personal-data)) " "
                     (str/title (:user/last-name @personal-data)))]]
           [:br]
           [ant/menu-item {:key 1}
            [ant/icon {:type :shopping-cart}]
            [:span "Sklepy"]]
           [ant/menu-item {:key 2}
            [ant/icon {:type :usergroup-add}]
            [:span "Pracownicy"]]
           [ant/menu-item {:key 3}
            [ant/icon {:type :calendar}]
            [:span "Harmonogram Pracy"]]]]
         [ant/layout {:style {:padding "24px 24px"}}
          [ant/layout-content
           [workplaces-list]]]])
      )))