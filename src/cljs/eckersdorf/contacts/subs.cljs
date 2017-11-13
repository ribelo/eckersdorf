(ns eckersdorf.contacts.subs
  (:require [re-frame.core :as rf]
            [eckersdorf.contacts.utils :as utils]))


(rf/reg-sub-raw
  :contacts/list
  (fn [db _]
    (rf/dispatch [:contacts/ajax.get-contacts])
    (reagent.ratom/reaction (sort-by :contact/last-name (:contacts/list @db)))))


(rf/reg-sub
  :contacts/email-address-list
  :<- [:contacts/list]
  (fn [contacts _]
    (mapv contacts :contact/email-address)))


(rf/reg-sub
  :contacts/phone-number-list
  :<- [:contacts/list]
  (fn [contacts _]
    (mapv contacts :contact/phone-number)))


(rf/reg-sub
  :contacts/company-list
  :<- [:contacts/list]
  (fn [contacts _]
    (mapv contacts :contact/company)))


(rf/reg-sub
  :contacts/title-list
  :<- [:contacts/list]
  (fn [contacts _]
    (mapv contacts :contact/title)))


(rf/reg-sub
  :contacts/first-name-list
  :<- [:contacts/list]
  (fn [contacts _]
    (mapv contacts :contact/first-name)))


(rf/reg-sub
  :contacts/second-name-list
  :<- [:contacts/list]
  (fn [contacts _]
    (mapv contacts :contact/second-name)))


(rf/reg-sub
  :contacts/filtered
  :<- [:contacts/list]
  :<- [:contacts/search-form]
  (fn [[contacts search] _]
    (if-not (empty? search)
      (->> contacts
           (filter (fn [{:keys [contact/first-name
                                contact/last-name
                                contact/phone-number
                                contact/email-address
                                contact/company
                                contact/title]}]
                     (or (when first-name
                           (re-find (re-pattern (str "(?iu)" search)) first-name))
                         (when last-name
                           (re-find (re-pattern (str "(?iu)" search)) last-name))
                         (when phone-number
                           (re-find (re-pattern (str "(?iu)" search)) phone-number))
                         (when email-address
                           (re-find (re-pattern (str "(?iu)" search)) email-address))
                         (when company
                           (re-find (re-pattern (str "(?iu)" search)) company))
                         (when title
                           (re-find (re-pattern (str "(?iu)" search)) title))))))
      contacts)))


(rf/reg-sub
  :contacts/by-id
  :<- [:contacts/list]
  (fn [contacts [_ contact-id]]
    (->> contacts
         (filter #(= contact-id (:mongo/object-id %)))
         (first))))


(rf/reg-sub
  :contacts/show-dialog?
  (fn [db _]
    (:contacts/show-dialog? db)))


(rf/reg-sub
  :contacts/contact-form
  (fn [db _]
    (:contacts/contact-form db)))


(rf/reg-sub
  :contacts/search-form
  (fn [db _]
    (:contacts/search-form db)))


(rf/reg-sub
  :contacts/temp-search-form
  (fn [db _]
    (:contacts/temp-search-form db)))

