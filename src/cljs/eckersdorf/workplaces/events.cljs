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
     :dispatch [:process/clear]}))


(rf/reg-event-fx
  :workplaces/request-list-failure
  (fn [{db :db} [_ response]]
    {:dispatch-n [[:error/set {:event :workplaces/request-list
                               :desc  response}]
                  [:process/clear]]}))

(rf/subscribe [:workplaces/workplace-form])
(rf/reg-event-fx
  :workplaces/request-add
  (fn [{db :db} _]
    (let [workplace (:workplaces/workplace-form db)]
      (println workplace)
      {:http-xhrio {:method          :post
                    :uri             (path "/api/1.0/workplaces")
                    :params          {:sex "a"}
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:workplaces/request-update-success]
                    :on-failure      [:workplaces/request-update-failure]}})))
(rf/dispatch [:workplaces/request-add])

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


(rf/reg-event-db
  :workplaces/set-workplace-form
  (fn [db [_ workplace]]
    (assoc db :workplaces/workplace-form workplace)))