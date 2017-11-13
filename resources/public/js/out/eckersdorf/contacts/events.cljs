(ns eckersdorf.contacts.events
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [cljs-time.core :as dt]
            [cljs-time.coerce :as dtc]
            [taoensso.timbre :as timbre]
            [taoensso.encore :refer [path]]
            [eckersdorf.contacts.db :refer [empty-contact]]))


(rf/reg-event-fx
  :contacts/ajax.get-contacts
  (fn [{db :db}]
    {:http-xhrio {:method          :get
                  :uri             "/api/1.0/contacts"
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:contacts/ajax.get-contacts-success]
                  :on-failure      [:contacts/ajax.get-contacts-failure]}
     :dispatch-n [[:process/set {:event :contacts/ajax.get-contacts
                                 :desc  "requesting contacts list"}]]}))


(rf/reg-event-fx
  :contacts/ajax.get-contacts-success
  (fn [{db :db} [_ {:keys [data]}]]
    {:db       (assoc db :contacts/list data)
     :dispatch [:process/clear]
     :message  {:content  "poprawnie pobrano listę kontaktów"
                :type     :success
                :duration 3}}))


(rf/reg-event-fx
  :contacts/ajax.get-contacts-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch-n [[:error/set {:event :contacts/ajax.get-contacts
                               :desc  response}]
                  [:process/clear]]
     :message    {:content  (str "błąd przy pobieraniu listy kontaktów: " status-text)
                  :type     :error
                  :duration 3}}))

(rf/reg-event-fx
  :contacts/ajax.create-contact
  (fn [{db :db} _]
    (let [contact (:contacts/contact-form db)]
      {:http-xhrio {:method          :post
                    :uri             (path "/api/1.0/contacts")
                    :params          contact
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:contacts/ajax.create-contact-success]
                    :on-failure      [:contacts/ajax.create-contact-failure]}})))

(rf/reg-event-fx
  :contacts/ajax.create-contact-success
  (fn [{db :db} [_ {:keys [data]}]]
    {:db       (assoc db :contacts/list data)
     :dispatch [:contacts/hide-dialog]
     :message  {:content  "poprawnie dodano kontaktu"
                :type     :success
                :duration 3}}))


(rf/reg-event-fx
  :contacts/ajax.create-contact-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch [:error/set {:event :contacts/ajax.modify-contact
                            :desc  response}]
     :message  {:content  (str "błąd przy dodawaniu kontaktu: " status-text)
                :type     :error
                :duration 3}}))


(rf/reg-event-fx
  :contacts/ajax.delete-contact
  (fn [{db :db} [_ id]]
    {:http-xhrio {:method          :delete
                  :uri             (path "/api/1.0/contacts" id)
                  :format          (ajax/text-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:contacts/ajax.delete-contact-success]
                  :on-failure      [:contacts/ajax.delete-contact-failure]}}))


(rf/reg-event-fx
  :contacts/ajax.delete-contact-success
  (fn [{db :db} [_ {:keys [data]}]]
    {:db      (assoc db :contacts/list data)
     :message {:content  "poprawnie usunięto kontaktu"
               :type     :success
               :duration 3}}))


(rf/reg-event-fx
  :contacts/ajax.delete-contact-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch [:error/set {:event :contacts/ajax.modify-contact
                            :desc  response}]
     :message  {:content  (str "błąd przy usuwaniu kontaktu: " status-text)
                :type     :error
                :duration 3}}))


(rf/reg-event-fx
  :contacts/ajax.modify-contact
  (fn [{db :db} _]
    (let [id (get-in db [:contacts/contact-form :mongo/object-id])
          contact (-> db :contacts/contact-form (dissoc :mongo/object-id))]
      {:http-xhrio {:method          :put
                    :uri             (path "/api/1.0/contacts" id)
                    :params          contact
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:contacts/ajax.modify-contact-success]
                    :on-failure      [:contacts/ajax.modify-contact-failure]}}
      )))


(rf/reg-event-fx
  :contacts/ajax.modify-contact-success
  (fn [{db :db} [_ {:keys [data]}]]
    {:db       (assoc db :contacts/list data)
     :dispatch [:contacts/hide-dialog]
     :message  {:content  "poprawnie uaktualniono kontaktu"
                :type     :success
                :duration 3}}))


(rf/reg-event-fx
  :contacts/ajax.modify-contact-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch [:error/set {:event :contacts/ajax.modify-contact
                            :desc  response}]
     :message  {:content  (str "błąd przy uaktualnianiu kontaktu: " status-text)
                :type     :error
                :duration 3}}))


(rf/reg-event-db
  :contacts/set-contact-form
  (fn [db [_ contact]]
    (assoc db :contacts/contact-form contact)))


(rf/reg-event-fx
  :contacts/create-contact-dialog
  (fn [_ _]
    {:dispatch-n [[:contacts/set-contact-form empty-contact]
                  [:contacts/show-dialog? :create]]}))


(rf/reg-event-fx
  :contacts/modify-contact-dialog
  (fn [_ [_ contact]]
    {:dispatch-n [[:contacts/set-contact-form contact]
                  [:contacts/show-dialog? :modify]]}))


(rf/reg-event-db
  :contacts/show-dialog?
  (fn [db [_ type]]
    (assoc db :contacts/show-dialog? type)))


(rf/reg-event-db
  :contacts/hide-dialog
  (fn [db _]
    (assoc db :contacts/show-dialog? nil)))


(rf/reg-event-db
  :concatcs/set-search-form
  (fn [db [_ val]]
    (assoc db :contacts/search-form val)))


(rf/reg-event-db
  :concatcs/set-temp-search-form
  (fn [db [_ val]]
    (assoc db :contacts/temp-search-form val)))


(rf/reg-event-db
  :contacts/store-debounce-search
  (fn [db [_ {:keys [value timestamp] :as m}]]
    (assoc db :contacts/debounce-search m)))


(rf/reg-event-fx
  :contacts/dispatch-debounce-search
  (fn [{db :db} [_ {:keys [value timestamp] :as m}]]
    (let [{stored-timestamp :timestamp} (get db :contacts/debounce-search)]
      (if (= stored-timestamp timestamp)
        {:db       (assoc db :contacts/debounce-search nil)
         :dispatch [:concatcs/set-search-form value]}))))


(rf/reg-event-fx
  :contacts/debounce-search
  (fn [{db :db} [_ value]]
    (let [timestamp (.getTime (js/Date.))]
      {:dispatch-n     [[:contacts/store-debounce-search {:value     value
                                                          :timestamp timestamp}]
                        [:concatcs/set-temp-search-form value]]
       :dispatch-later [{:ms 500 :dispatch [:contacts/dispatch-debounce-search {:value     value
                                                                                :timestamp timestamp}]}]})))

