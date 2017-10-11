(ns eckersdorf.view.ui
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :as rf]
            [antizer.reagent :as ant]
            [goog.string :as string]
            [cuerdas.core :as str]
            [eckersdorf.routes.core :as router]
            [eckersdorf.flex :as flex]
            [eckersdorf.user.login.ui :as login.ui]
            [eckersdorf.util :as util]))


;(clj->js @(rf/subscribe [:workplaces/list]))
(rf/dispatch [:workplaces/request-list])
(str/split "a@" "@")

(defn workplace-dialog [modify?]
  (let [show-dialog? (rf/subscribe [:workplaces/show-dialog?])
        workplace (r/atom @(rf/subscribe [:workplaces/workplace-form]))
        email-addon (reaction (str "@" (or (second (str/split (:workplace/email-address @workplace) "@"))
                                           "teas.com.pl")))]
    (fn []
      [ant/modal {:visible     @show-dialog?
                  :title       (if modify? "edytuj sklep" "dodaj sklep")
                  :cancel-text "anuluj"
                  :on-cancel   #(rf/dispatch [:workplaces/toggle-dialog])
                  :ok-text     "dodaj"
                  :on-ok       (fn []
                                 (rf/dispatch [:workplaces/set-workplace-form @workplace])
                                 (rf/dispatch [:workplaces/request-create]))}
       [flex/vbox
        [ant/form {:layout :horizontal}
         [ant/form-item
          [flex/hbox
           [flex/box {:size  2
                      :style {:display :block}}
            [ant/form-item
             [ant/input {:placeholder   "nazwa"
                         :default-value (:workplace/name @workplace)
                         :on-change     (fn [e]
                                          (let [val (-> e .-target .-value)]
                                            (swap! workplace assoc :workplace/name val)))}]]]
           [flex/gap {:size "12px"}]
           [flex/box {:size  2
                      :style {:display :block}}
            [ant/form-item
             [ant/input {:placeholder   "e-mail"
                         :default-value (:workplace/email-address @workplace)
                         :addon-after   @email-addon
                         :on-change     (fn [e]
                                          (println (str val @email-addon))
                                          (let [val (-> e .-target .-value)]
                                            (swap! workplace assoc :workplace/email-address
                                                   (str val @email-addon))))}]]]
           [flex/gap {:size "12px"}]
           [flex/box {:size  1
                      :style {:display :block}}
            [ant/form-item
             [ant/select {:default-value (or (:workplace/type @workplace) "dc")
                          :on-change     (fn [val]
                                           (swap! workplace assoc :workplace/type val))}
              [ant/select-option {:value "dc"} "delikatesy"]
              [ant/select-option {:value "shop"} "niezrzeszony"]]]]]]
         [ant/form-item
          [flex/hbox
           [flex/box {:size  3
                      :style {:display :block}}
            [ant/form-item
             [ant/input {:placeholder   "ulica"
                         :default-value (get-in @workplace [:workplace/address :address/street-name])
                         :on-change     (fn [e]
                                          (let [val (-> e .-target .-value)]
                                            (swap! workplace assoc-in
                                                   [:workplace/address :address/street-name]
                                                   val)))}]]]
           [flex/gap {:size "12px"}]
           [flex/box {:size  1
                      :style {:display :block}}
            [ant/form-item
             [ant/input {:placeholder   "numer ulicy"
                         :default-value (get-in @workplace [:workplace/address :address/street-number])
                         :on-change     (fn [e]
                                          (let [val (-> e .-target .-value)]
                                            (swap! workplace assoc-in
                                                   [:workplace/address :address/street-number]
                                                   val)))}]]]
           [flex/gap {:size "12px"}]
           [flex/box {:size  1
                      :style {:display :block}}
            [ant/form-item
             [ant/input {:placeholder   "budynku"
                         :default-value (get-in @workplace [:workplace/address :address/house-number])
                         :on-change     (fn [e]
                                          (let [val (-> e .-target .-value)]
                                            (swap! workplace assoc-in
                                                   [:workplace/address :address/house-number]
                                                   val)))}]]]]]
         [ant/form-item
          [flex/hbox
           [flex/box {:size  1
                      :style {:display :block}}
            [ant/form-item
             [ant/input {:placeholder   "kod pocztowy"
                         :default-value (get-in @workplace [:workplace/address :address/zip-code])
                         :on-change     (fn [e]
                                          (let [val (-> e .-target .-value)]
                                            (swap! workplace assoc-in
                                                   [:workplace/address :address/zip-code]
                                                   val)))}]]]
           [flex/gap {:size "12px"}]
           [flex/box {:size  3
                      :style {:display :block}}
            [ant/form-item
             [ant/input {:placeholder   "miejscowość"
                         :default-value (get-in @workplace [:workplace/address :address/city])
                         :on-change     (fn [e]
                                          (let [val (-> e .-target .-value)]
                                            (swap! workplace assoc-in
                                                   [:workplace/address :address/city]
                                                   val)))}]]]]]]]
       ])))

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
                                :render    #(or % "brak")}
                               {:title     "kod pocztowy"
                                :dataIndex "address.zip-code"
                                :key       "address.zip-code"}
                               {:title     "miejscowość"
                                :dataIndex "address.city"
                                :key       "address.city"}
                               {:title  "akcje"
                                :render (fn [_ record _]
                                          (let [email-address (aget record "email-address")]
                                            (r/as-element
                                              [ant/button-group
                                               [ant/button {:icon     :delete
                                                            :type     :danger
                                                            :on-click (fn []
                                                                        (println "try to delete" email-address))}]
                                               [ant/button {:icon     :edit
                                                            :on-click (fn []
                                                                        (println "try to edit" email-address))}]])))}]
                  :dataSource (map-indexed (fn [i m] (assoc m :id i)) @workplaces-list)
                  :row-key    "id"
                  :pagination false}])))


(defn workplaces-view []
  (fn []
    [flex/vbox
     [workplace-dialog]
     [workplaces-list]
     [flex/hbox {:justify-content :center}
      [ant/button {:type     :primary
                   :on-click #(rf/dispatch [:workplaces/create-workplace-dialog])}
       "dodaj"]]]))


(defn page []
  (let [logged? (rf/subscribe [:user/logged-in?])
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
           [workplaces-view]]]])
      )))