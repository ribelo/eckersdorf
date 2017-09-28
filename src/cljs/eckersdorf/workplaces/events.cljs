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
    {:db (assoc db :workplaces/list response)
     :dispatch [:process/clear]}))


(rf/reg-event-fx
  :workplaces/request-list-failure
  (fn [{db :db} [_ response]]
    {:dispatch-n [[:error/set {:event :workplaces/request-list
                               :desc  response}]
                  [:process/clear]]}))


(rf/reg-event-fx
  :workplaces/request-update
  (fn [{db :db} _]
    (let [workplaces-id (:workplaces/object-id db)
          workplaces {:email-address (:workplaces/email-address db)
                :phone-number  (:workplaces/phone-number db)
                :first-name    (:workplaces/first-name db)
                :last-name     (:workplaces/last-name db)
                :token         (:workplaces/token db)}]
      {:http-xhrio {:method          :put
                    :uri             (path "/api/1.0/workplacess/" workplaces-id "update")
                    :params          workplaces
                    :format          (ajax/url-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:workplaces/request-update-success]
                    :on-failure      [:workplaces/request-update-failure]}})))


(rf/reg-event-fx
  :workplaces/request-update-success
  (fn [{db :db} [_ response]]
    (timbre/info response)
    {:db (merge db response)}))


(rf/reg-event-fx
  :workplaces/request-update-failure
  (fn [{db :db} [_ response]]
    {:dispatch [:error/set {:event :workplaces/request-update
                            :desc  response}]}))