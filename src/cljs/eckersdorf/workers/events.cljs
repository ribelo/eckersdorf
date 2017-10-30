(ns eckersdorf.workers.events
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc]
            [taoensso.timbre :as timbre]
            [taoensso.encore :refer [path]]
            [eckersdorf.workers.db :refer [empty-worker]]))


(rf/reg-event-fx
  :workers/request-list
  (fn [{db :db}]
    {:http-xhrio {:method          :get
                  :uri             "/api/1.0/workers"
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:workers/request-list-success]
                  :on-failure      [:workers/request-list-failure]}
     :dispatch-n [[:process/set {:event :workers/request-list
                                 :desc  "requesting workers list"}]]}))


(rf/reg-event-fx
  :workers/request-list-success
  (fn [{db :db} [_ {:keys [data]}]]
    {:db       (assoc db :workers/list data)
     :dispatch [:process/clear]
     :message  {:content  "poprawnie pobrano listę pracowników"
                :type     :success
                :duration 3}}))


(rf/reg-event-fx
  :workers/request-list-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch-n [[:error/set {:event :workers/request-list
                               :desc  response}]
                  [:process/clear]]
     :message    {:content  (str "błąd przy pobieraniu listy pracowników: " status-text)
                  :type     :error
                  :duration 3}}))

(rf/reg-event-fx
  :workers/request-create
  (fn [{db :db} _]
    (let [worker (:workers/worker-form db)]
      {:http-xhrio {:method          :post
                    :uri             (path "/api/1.0/workers")
                    :params          worker
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:workers/request-create-success]
                    :on-failure      [:workers/request-create-failure]}})))

(rf/reg-event-fx
  :workers/request-create-success
  (fn [{db :db} [_ {:keys [data]}]]
    {:db       (assoc db :workers/list data)
     :dispatch [:workers/hide-dialog]
     :message  {:content  "poprawnie dodano pracownika"
                :type     :success
                :duration 3}}))


(rf/reg-event-fx
  :workers/request-create-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch [:error/set {:event :workers/request-update
                            :desc  response}]
     :message  {:content  (str "błąd przy dodawaniu pracownika: " status-text)
                :type     :error
                :duration 3}}))


(rf/reg-event-fx
  :workers/request-delete
  (fn [{db :db} [_ id]]
    {:http-xhrio {:method          :delete
                  :uri             (path "/api/1.0/workers" id)
                  :format          (ajax/text-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:workers/request-delete-success]
                  :on-failure      [:workers/request-delete-failure]}}))


(rf/reg-event-fx
  :workers/request-delete-success
  (fn [{db :db} [_ {:keys [data]}]]
    {:db      (assoc db :workers/list data)
     :message {:content  "poprawnie usunięto pracowinka"
               :type     :success
               :duration 3}}))


(rf/reg-event-fx
  :workers/request-delete-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch [:error/set {:event :workers/request-update
                            :desc  response}]
     :message  {:content  (str "błąd przy usuwaniu pracownika: " status-text)
                :type     :error
                :duration 3}}))


(rf/reg-event-fx
  :workers/request-update
  (fn [{db :db} _]
    (let [id (get-in db [:workers/worker-form :mongo/object-id])
          worker (-> db :workers/worker-form (dissoc :mongo/object-id))]
      {:http-xhrio {:method          :put
                    :uri             (path "/api/1.0/workers" id)
                    :params          worker
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:workers/request-update-success]
                    :on-failure      [:workers/request-update-failure]}}
      )))


(rf/reg-event-fx
  :workers/request-update-success
  (fn [{db :db} [_ {:keys [data]}]]
    {:db       (assoc db :workers/list data)
     :dispatch [:workers/hide-dialog]
     :message  {:content  "poprawnie uaktualniono pracownika"
                :type     :success
                :duration 3}}))


(rf/reg-event-fx
  :workers/request-update-failure
  (fn [{db :db} [_ {:keys [status-text] :as response}]]
    {:dispatch [:error/set {:event :workers/request-update
                            :desc  response}]
     :message  {:content  (str "błąd przy uaktualnianiu pracownika: " status-text)
                :type     :error
                :duration 3}}))


(rf/reg-event-db
  :workers/set-worker-form
  (fn [db [_ worker]]
    (assoc db :workers/worker-form worker)))


(rf/reg-event-fx
  :workers/create-worker-dialog
  (fn [_ _]
    {:dispatch-n [[:workers/set-worker-form empty-worker]
                  [:workers/show-dialog? :create]]}))


(rf/reg-event-fx
  :workers/modify-worker-dialog
  (fn [_ [_ worker]]
    {:dispatch-n [[:workers/set-worker-form worker]
                  [:workers/show-dialog? :modify]]}))


(rf/reg-event-db
  :workers/show-dialog?
  (fn [db [_ type]]
    (assoc db :workers/show-dialog? type)))


(rf/reg-event-db
  :workers/hide-dialog
  (fn [db _]
    (assoc db :workers/show-dialog? nil)))
