(ns eckersdorf.workplaces.events
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc]
            [taoensso.timbre :as timbre]
            [taoensso.encore :refer [path]]))


(rf/reg-event-fx
  :workplaces/request-list
  (fn [{db :db}]
    {:http-xhrio {:method          :get
                  :uri             "/api/1.0/workplaces"
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:workplaces/request-list-success]
                  :on-failure      [:workplaces/request-list-failure]}
     :dispatch-n [[:process/set {:event :workplaces/request-list
                                 :desc  "requesting workplaces list"}]]}))


(rf/reg-event-fx
  :workplaces/request-list-success
  (fn [{db :db} [_ response]]
    {:db       (assoc db :workplaces/list response)
     :dispatch [:process/clear]
     :message  {:content  "poprawnie pobrano listę obiektów"
                :type     :success
                :duration 3}}))


(rf/reg-event-fx
  :workplaces/request-list-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch-n [[:error/set {:event :workplaces/request-list
                               :desc  response}]
                  [:process/clear]]
     :message    {:content  (str "błąd przy pobieraniu listy obiektów: " status-text)
                  :type     :error
                  :duration 3}}))

(rf/reg-event-fx
  :workplaces/request-create
  (fn [{db :db} _]
    (let [workplace (:workplaces/workplace-form db)]
      {:http-xhrio {:method          :post
                    :uri             (path "/api/1.0/workplaces")
                    :params          workplace
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:workplaces/request-create-success]
                    :on-failure      [:workplaces/request-create-failure]}})))

(rf/reg-event-fx
  :workplaces/request-create-success
  (fn [{db :db} [_ response]]
    (timbre/info response)
    {:db         (merge db response)
     :dispatch-n [[:workplaces/request-list]
                  [:workplaces/hide-dialog]]
     :message    {:content  "poprawnie dodane obiekt"
                  :type     :success
                  :duration 3}}))


(rf/reg-event-fx
  :workplaces/request-create-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch [:error/set {:event :workplaces/request-update
                            :desc  response}]
     :message  {:content  (str "błąd przy dodawaniu obiektu: " status-text)
                :type     :error
                :duration 3}}))


(rf/reg-event-fx
  :workplaces/request-delete
  (fn [{db :db} [_ id]]
    {:http-xhrio {:method          :delete
                  :uri             (path "/api/1.0/workplaces" id)
                  :format          (ajax/text-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:workplaces/request-delete-success]
                  :on-failure      [:workplaces/request-delete-failure]}}))


(rf/reg-event-fx
  :workplaces/request-delete-success
  (fn [{db :db} [_ response]]
    (timbre/info response)
    {:db         (merge db response)
     :dispatch-n [[:workplaces/request-list]]
     :message    {:content  "poprawnie usunięto obiekt"
                  :type     :success
                  :duration 3}}))


(rf/reg-event-fx
  :workplaces/request-delete-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch [:error/set {:event :workplaces/request-update
                            :desc  response}]
     :message  {:content  (str "błąd przy usuwaniu obiektu: " status-text)
                :type     :error
                :duration 3}}))


(rf/reg-event-fx
  :workplaces/request-update
  (fn [{db :db} _]
    (let [id (get-in db [:workplaces/workplace-form :mongo/object-id])
          workplace (-> db :workplaces/workplace-form (dissoc :mongo/object-id))]
      (println :workplaces/request-update id workplace)
      {:http-xhrio {:method          :put
                    :uri             (path "/api/1.0/workplaces" id)
                    :params          workplace
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:workplaces/request-update-success]
                    :on-failure      [:workplaces/request-update-failure]}}
      )))


(rf/reg-event-fx
  :workplaces/request-update-success
  (fn [{db :db} [_ response]]
    (timbre/info response)
    {:db         (merge db response)
     :dispatch-n [[:workplaces/request-list]
                  [:workplaces/hide-dialog]]
     :message    {:content  "poprawnie usunięto obiekt"
                  :type     :success
                  :duration 3}}))


(rf/reg-event-fx
  :workplaces/request-update-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch [:error/set {:event :workplaces/request-update
                            :desc  response}]
     :message  {:content  (str "błąd przy usuwaniu obiektu: " status-text)
                :type     :error
                :duration 3}}))


(rf/reg-event-db
  :workplaces/set-workplace-form
  (fn [db [_ workplace]]
    (assoc db :workplaces/workplace-form workplace)))


(rf/reg-event-fx
  :workplaces/create-workplace-dialog
  (fn [_ _]
    (let [empty-workplace {:workplace/name          nil
                           :workplace/type          "dc"
                           :workplace/email-address nil
                           :workplace/address       {:address/street-name   nil
                                                     :address/street-number nil
                                                     :address/house-number  nil
                                                     :address/zip-code      nil
                                                     :address/city          nil}}]
      {:dispatch-n [[:workplaces/set-workplace-form empty-workplace]
                    [:workplaces/show-dialog :create]]})))


(rf/reg-event-fx
  :workplaces/modify-workplace-dialog
  (fn [_ [_ workplace]]
    (println workplace)
    {:dispatch-n [[:workplaces/set-workplace-form workplace]
                  [:workplaces/show-dialog :modify]]}))


(rf/reg-event-db
  :workplaces/show-dialog
  (fn [db [_ type]]
    (assoc db :workplaces/show-dialog? type)))


(rf/reg-event-db
  :workplaces/hide-dialog
  (fn [db [_ type]]
    (assoc db :workplaces/show-dialog? type)))
