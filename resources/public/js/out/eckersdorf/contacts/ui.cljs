(ns eckersdorf.contacts.ui
  (:require [cljs.spec.alpha :as s]
            [reagent.core :as r]
            [reagent.ratom :refer [reaction]]
            [re-frame.core :as rf]
            [antizer.reagent :as ant]
            [cuerdas.core :as str]
            [eckersdorf.flex :as flex]
            [eckersdorf.utils :refer [add-ns simplify-string]]
            [clojure.set :as set]
            [cljsjs.moment.locale.pl]
            [cljs-time.coerce :as tc]))


(defn contact-dialog []
  (let [show-dialog? (rf/subscribe [:contacts/show-dialog?])
        contact-form (rf/subscribe [:contacts/contact-form])
        valid-contact (r/atom nil)]
    (fn []
      [ant/modal {:visible (not (nil? @show-dialog?))
                  :title   (if (#{:modify} @show-dialog?) "edytuj kontakt" "dodaj kontakt")
                  :footer  (r/as-element [:div
                                          [ant/button {:on-click #(rf/dispatch [:contacts/hide-dialog])}
                                           "anuluj"]
                                          [ant/button {:type     (if (s/valid? :contact/contact @contact-form)
                                                                   :primary :danger)
                                                       :on-click (fn []
                                                                   (if (s/valid? :contact/contact @contact-form)
                                                                     (if (#{:modify} @show-dialog?)
                                                                       (rf/dispatch [:contacts/ajax.modify-contact])
                                                                       (rf/dispatch [:contacts/ajax.create-contact]))
                                                                     (ant/message-warning "wprowadzono błędne dane")))}
                                           (if (#{:modify} @show-dialog?) "modyfikuj" "dodaj")]])}
       [:div
        (let [{:keys [contact/first-name contact/last-name]} @contact-form]
          [ant/row {:gutter 8}
           [ant/col {:span 12}
            [ant/form-item {:validate-status (when (and (not (nil? first-name))
                                                        (not (s/valid? :contact/first-name first-name)))
                                               :error)
                            :help            (cond
                                               (and (not (nil? first-name))
                                                    (not (s/valid? :contact/first-name first-name)))
                                               "pole nie może być puste")}
             [ant/input {:placeholder "imię"
                         :value       first-name
                         :on-change   (fn [e]
                                        (let [val (-> e .-target .-value str/lower)
                                              contact (assoc @contact-form :contact/first-name val)]
                                          (rf/dispatch [:contacts/set-contact-form contact])))}]]]
           [ant/col {:span 12}
            [ant/form-item {:validate-status (when (and (not (nil? last-name))
                                                        (not (s/valid? :contact/last-name last-name)))
                                               :error)
                            :help            (cond
                                               (and (not (nil? last-name))
                                                    (not (s/valid? :contact/last-name last-name)))
                                               "pole nie może być puste")}
             [ant/input {:placeholder "nazwisko"
                         :value       last-name
                         :on-change   (fn [e]
                                        (let [val (-> e .-target .-value str/lower)
                                              contact (assoc @contact-form :contact/last-name val)]
                                          (rf/dispatch [:contacts/set-contact-form contact])))}]]]])
        [ant/row {:gutter 8}
         [ant/col {:span 12}
          (let [{:keys [contact/email-address]} @contact-form]
            [ant/form-item {:validate-status (when (and (not (nil? email-address))
                                                        (not (s/valid? :contact/email-address email-address)))
                                               :error)
                            :help            (when (and (not (nil? email-address))
                                                        (not (s/valid? :workplace/email-address email-address)))
                                               "błędny adres email")}
             [ant/input {:placeholder "e-mail"
                         :value       email-address
                         :on-change   (fn [e]
                                        (let [val (-> e .-target .-value not-empty)
                                              contact (assoc @contact-form :contact/email-address
                                                                           (if-not (str/empty-or-nil? val) val ""))]
                                          (rf/dispatch [:contacts/set-contact-form contact])))}]])]
         [ant/col {:span 12}
          (let [{:keys [contact/phone-number]} @contact-form]
            [ant/form-item {:wrapper-col     {:span 24}
                            :validate-status (when (not (s/valid? :contact/phone-number phone-number))
                                               :error)
                            :help            (when (and (not (nil? phone-number))
                                                        (not (s/valid? :contact/phone-number phone-number)))
                                               "błędny numer telefonu")}
             [ant/input {:placeholder  "numer telefonu"
                         :value        phone-number
                         :addon-before "+48"
                         :on-change    (fn [e]
                                         (let [val (-> e .-target .-value not-empty)
                                               contact (assoc @contact-form :contact/phone-number val)]
                                           (rf/dispatch [:contacts/set-contact-form contact])))
                         :style        {:display :inline}}]])]]
        [ant/row {:gutter 8}
         [ant/col {:span 12}
          (let [{:keys [contact/company]} @contact-form]
            [ant/form-item {:validate-status (when (and (not (nil? company))
                                                        (not (s/valid? :contact/company company)))
                                               :error)
                            :help            (when (and (not (nil? company))
                                                        (not (s/valid? :contact/company company)))
                                               "błędna nazwa firmy")}
             [ant/input {:placeholder "firma"
                         :value       company
                         :on-change   (fn [e]
                                        (let [val (-> e .-target .-value not-empty)
                                              contact (assoc @contact-form :contact/company
                                                                           (if-not (str/empty-or-nil? val) val ""))]
                                          (rf/dispatch [:contacts/set-contact-form contact])))}]])]
         [ant/col {:span 12}
          (let [{:keys [contact/title]} @contact-form]
            [ant/form-item {:wrapper-col     {:span 24}
                            :validate-status (when (not (s/valid? :contact/title title))
                                               :error)
                            :help            (when (not (s/valid? :contact/title title))
                                               "błędna nazwa stanowiska")}
             [ant/input {:placeholder "stanowisko"
                         :value       title
                         :on-change   (fn [e]
                                        (let [val (-> e .-target .-value not-empty)
                                              contact (assoc @contact-form :contact/title val)]
                                          (rf/dispatch [:contacts/set-contact-form contact])))
                         :style       {:display :inline}}]])]]
        [ant/row
         [ant/col {:span 24}
          (let [{:keys [contact/description]} @contact-form]
            [ant/form-item {:wrapper-col     {:span 24}
                            :validate-status (when (not (s/valid? :contact/description description))
                                               :error)
                            :help            (when (not (s/valid? :contact/description description))
                                               "niepoprawny komentarz")}
             [ant/input-text-area {:placeholder "opis/komentarz"
                                   :value       description
                                   :on-change   (fn [e]
                                                  (let [val (-> e .-target .-value not-empty)
                                                        contact (assoc @contact-form :contact/description val)]
                                                    (rf/dispatch [:contacts/set-contact-form contact])))
                                   :style       {:display :inline}}]])]]
        ]])))

(defn contacts-list []
  (let [contacts-list (rf/subscribe [:contacts/filtered])]
    (fn []
      [ant/table {:columns    [{:title     "imię"
                                :dataIndex :contact/first-name
                                :key       :contact/first-name
                                :sorter    (fn [a b]
                                             (compare (aget a "first-name") (aget b "first-name")))}
                               {:title     "nazwisko"
                                :dataIndex :contact/last-name
                                :key       :contact/last-name
                                :sorter    (fn [a b]
                                             (compare (aget a "last-name") (aget b "last-name")))}
                               {:title     "e-mail"
                                :dataIndex :contact/email-address
                                :key       :contact/email-address
                                :sorter    (fn [a b]
                                             (compare (aget a "email-address") (aget b "email-address")))}
                               {:title     "telefon"
                                :dataIndex :contact/phone-number
                                :key       :contact/phone-number}
                               {:title     "firma"
                                :dataIndex :contact/company
                                :key       :contact/company}
                               {:title     "stanowisko"
                                :dataIndex :contact/title
                                :key       :contact/title}
                               {:title  "akcje"
                                :render (fn [_ record _]
                                          (let [object-id (aget record "object-id")
                                                contact (-> record
                                                            (js->clj :keywordize-keys true)
                                                            (dissoc :id)
                                                            (add-ns :contact)
                                                            (set/rename-keys {:contact/object-id :mongo/object-id}))]
                                            (r/as-element
                                              [ant/button-group
                                               [ant/button {:icon     :delete
                                                            :type     :danger
                                                            :on-click (fn []
                                                                        (rf/dispatch [:contacts/ajax.delete-contact object-id]))}]
                                               [ant/button {:icon     :edit
                                                            :on-click (fn []
                                                                        (rf/dispatch [:contacts/modify-contact-dialog contact]))}]])))}]
                  :dataSource (map-indexed (fn [i m] (assoc m :id i)) @contacts-list)
                  :row-key    "id"
                  :pagination {:page-size 5}}])))


(defn search-bar []
  (let [search-form (rf/subscribe [:contacts/temp-search-form])]
    [flex/hbox
     [flex/box {:size            1
                :justify-content :center}
      [ant/form-item {:style {:width "40%"}}
       [ant/input {:placeholder "wpisz imię, nazwisko, telefon, firmę albo funkcję by wyszukać"
                   :value       @search-form
                   :on-change   (fn [e]
                                  (let [val (-> e .-target .-value not-empty)]
                                    (rf/dispatch [:contacts/debounce-search val])))
                   :style       {:width "100%"}}]]]]))


(defn contacts-view []
  (fn []
    [flex/vbox
     [contact-dialog]
     [search-bar]
     [contacts-list]
     [flex/hbox {:justify-content :center}
      [ant/button {:type     :primary
                   :on-click #(rf/dispatch [:contacts/create-contact-dialog])}
       "dodaj"]]]))
