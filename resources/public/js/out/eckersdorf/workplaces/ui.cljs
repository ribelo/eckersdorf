(ns eckersdorf.workplaces.ui
  (:require [cljs.spec.alpha :as s]
            [reagent.core :as r]
            [reagent.ratom :refer [reaction]]
            [re-frame.core :as rf]
            [antizer.reagent :as ant]
            [cuerdas.core :as str]
            [eckersdorf.flex :as flex]
            [eckersdorf.utils :refer [add-ns]]
            [clojure.set :as set]))


(defn workplace-dialog [modify?]
  (let [show-dialog? (rf/subscribe [:workplaces/show-dialog?])
        workplace-form (rf/subscribe [:workplaces/workplace-form])
        email-addon (reaction (str "@" (or (second (str/split (:workplace/email-address @workplace-form) "@"))
                                           "teas.com.pl")))
        valid-workplace (r/atom nil)]
    (fn []
      [ant/modal {:visible (not (nil? @show-dialog?))
                  :title   (if (#{:modify} @show-dialog?) "edytuj sklep" "dodaj sklep")
                  :footer  (r/as-element [:div
                                          [ant/button {:on-click #(rf/dispatch [:workplaces/hide-dialog])}
                                           "anuluj"]
                                          [ant/button {:type     (if (s/valid? :workplace/workplace @workplace-form)
                                                                   :primary :danger)
                                                       :on-click (fn []
                                                                   (if (s/valid? :workplace/workplace @workplace-form)
                                                                     (if (#{:modify} @show-dialog?)
                                                                       (rf/dispatch [:workplaces/request-update])
                                                                       (rf/dispatch [:workplaces/request-create]))
                                                                     (do
                                                                       (println (s/explain :workplace/workplace @workplace-form))
                                                                       (ant/message-warning "wprowadzono błędne dane"))))}
                                           (if (#{:modify} @show-dialog?) "modyfikuj" "dodaj")]])}
       [flex/vbox
        [ant/form {:layout :horizontal}
         [ant/form-item
          [flex/hbox
           [flex/box {:size  2
                      :style {:display    :block
                              :min-height "32px"}}
            (let [{:keys [workplace/name]} @workplace-form]
              [ant/form-item {:validate-status (when (and (not (nil? name))
                                                          (not (s/valid? :workplace/name name)))
                                                 :error)
                              :help            (cond
                                                 (and (not (nil? name))
                                                      (not (s/valid? :workplace/name name)))
                                                 "pole nie może być puste")}
               [ant/input {:placeholder "nazwa"
                           :value       name
                           :on-change   (fn [e]
                                          (let [val (-> e .-target .-value)
                                                workplace (assoc @workplace-form :workplace/name val)]
                                            (rf/dispatch [:workplaces/set-workplace-form workplace])))}]])]
           [flex/gap {:size "12px"}]
           [flex/box {:size  2
                      :style {:display    :block
                              :min-height "32px"}}
            (let [{:keys [workplace/email-address]} @workplace-form
                  email-address (first (str/split email-address "@"))]
              [ant/form-item {:validate-status (when (and (not (nil? email-address))
                                                          (not (s/valid? :workplace/email-address
                                                                         (str email-address @email-addon))))
                                                 :error)
                              :help            (cond
                                                 (str/empty? email-address)
                                                 "pole nie może być puste"
                                                 (and (not (nil? email-address))
                                                      (not (s/valid? :workplace/email-address
                                                                     (str email-address @email-addon))))
                                                 "błędny adres email")}
               [ant/input {:placeholder "e-mail"
                           :value       email-address
                           :addon-after @email-addon
                           :on-change   (fn [e]
                                          (let [val (-> e .-target .-value)
                                                workplace (assoc @workplace-form :workplace/email-address
                                                                                 (if-not (str/empty-or-nil? val)
                                                                                   (str val @email-addon)
                                                                                   ""))]
                                            (rf/dispatch [:workplaces/set-workplace-form workplace])))}]])]
           [flex/gap {:size "12px"}]
           [flex/box {:size  1
                      :style {:display    :block
                              :min-height "32px"}}
            [ant/form-item
             [ant/select {:value     (or (:workplace/type @workplace-form) "dc")
                          :on-change (fn [val]
                                       (let [workplace (assoc @workplace-form :workplace/type val)]
                                         (rf/dispatch [:workplaces/set-workplace-form workplace])))}
              [ant/select-option {:value "dc"} "delikatesy"]
              [ant/select-option {:value "shop"} "niezrzeszony"]]]]]]
         [ant/form-item
          [flex/hbox
           [flex/box {:size  3
                      :style {:display    :block
                              :min-height "32px"}}
            (let [{{:keys [address/street-name]} :workplace/address} @workplace-form]
              [ant/form-item {:validate-status (when (and (not (nil? street-name))
                                                          (not (s/valid? :address/street-name street-name)))
                                                 :error)
                              :help            (cond
                                                 (str/empty? street-name)
                                                 "pole nie może być puste"
                                                 (and (not (nil? street-name))
                                                      (not (s/valid? :address/street-name street-name)))
                                                 "błędna nazwa ulicy")}
               [ant/input {:placeholder "ulica"
                           :value       street-name
                           :on-change   (fn [e]
                                          (let [val (-> e .-target .-value)
                                                workplace (assoc-in @workplace-form
                                                                    [:workplace/address :address/street-name]
                                                                    val)]
                                            (rf/dispatch [:workplaces/set-workplace-form workplace])))}]])]
           [flex/gap {:size "12px"}]
           [flex/box {:size  1
                      :style {:display    :block
                              :min-height "32px"}}
            (let [{{:keys [address/street-number]} :workplace/address} @workplace-form]
              [ant/form-item {:validate-status (when
                                                 (and (not (nil? street-number))
                                                      (not (s/valid? :address/street-number street-number)))
                                                 :error)
                              :help            (cond
                                                 (str/empty? street-number)
                                                 "pole nie może być puste"
                                                 (and (not (nil? street-number))
                                                      (not (s/valid? :address/street-number street-number)))
                                                 "błędny numer ulicy")}
               [ant/input {:placeholder "numer ulicy"
                           :value       street-number
                           :on-change   (fn [e]
                                          (let [val (-> e .-target .-value)
                                                workplace (assoc-in @workplace-form
                                                                    [:workplace/address :address/street-number]
                                                                    val)]
                                            (rf/dispatch [:workplaces/set-workplace-form workplace])))}]])]
           [flex/gap {:size "12px"}]
           [flex/box {:size  1
                      :style {:display    :block
                              :min-height "32px"}}
            (let [{{:keys [address/house-number]} :workplace/address} @workplace-form]
              [ant/form-item {:validate-status (when (and (not (nil? house-number))
                                                          (not (s/valid? :address/house-number house-number)))
                                                 :error)
                              :help            (cond
                                                 (and (not (nil? house-number))
                                                      (not (s/valid? :address/house-number house-number)))
                                                 "błędny numer budynku")}
               [ant/input {:placeholder "budynku"
                           :value       house-number
                           :on-change   (fn [e]
                                          (let [val (-> e .-target .-value)
                                                workplace (assoc-in @workplace-form [:workplace/address :address/house-number] val)]
                                            (rf/dispatch [:workplaces/set-workplace-form workplace])))}]])]]]
         [ant/form-item
          [flex/hbox
           [flex/box {:size  1
                      :style {:display    :block
                              :min-height "32px"}}
            (let [{{:keys [address/zip-code]} :workplace/address} @workplace-form]
              [ant/form-item {:validate-status (when (and (not (nil? zip-code))
                                                          (not (s/valid? :address/zip-code zip-code)))
                                                 :error)
                              :help            (cond
                                                 (str/empty? zip-code)
                                                 "pole nie może być puste"
                                                 (and (not (nil? zip-code))
                                                      (not (s/valid? :address/zip-code zip-code)))
                                                 "błędny kod pocztowy")}
               [ant/input {:placeholder "kod pocztowy"
                           :value       zip-code
                           :on-change   (fn [e]
                                          (let [val (-> e .-target .-value)
                                                workplace (assoc-in @workplace-form [:workplace/address :address/zip-code] val)]
                                            (rf/dispatch [:workplaces/set-workplace-form workplace])))}]])]
           [flex/gap {:size "12px"}]
           [flex/box {:size  3
                      :style {:display    :block
                              :min-height "32px"}}
            (let [{{:keys [address/city]} :workplace/address} @workplace-form]
              [ant/form-item {:validate-status (when (and (not (nil? city))
                                                          (not (s/valid? :address/city city)))
                                                 :error)
                              :help            (cond
                                                 (str/empty? city)
                                                 "pole nie może być puste"
                                                 (and (not (nil? city))
                                                      (not (s/valid? :address/city city)))
                                                 "błędna nazwa miejscowości")}
               [ant/input {:placeholder "miejscowość"
                           :value       city
                           :on-change   (fn [e]
                                          (let [val (-> e .-target .-value)
                                                workplace (assoc-in @workplace-form [:workplace/address :address/city] val)]
                                            (rf/dispatch [:workplaces/set-workplace-form workplace])))}]])]]]]]])))


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
                                          (let [object-id (aget record "object-id")
                                                workplace (-> record
                                                              (js->clj :keywordize-keys true)
                                                              (dissoc :id)
                                                              (add-ns :workplace)
                                                              (set/rename-keys {:workplace/object-id :mongo/object-id})
                                                              (update :workplace/address add-ns :address))]
                                            (r/as-element
                                              [ant/button-group
                                               [ant/button {:icon     :delete
                                                            :type     :danger
                                                            :on-click (fn []
                                                                        (rf/dispatch [:workplaces/request-delete object-id]))}]
                                               [ant/button {:icon     :edit
                                                            :on-click (fn []
                                                                        (rf/dispatch [:workplaces/modify-workplace-dialog workplace]))}]])))}]
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