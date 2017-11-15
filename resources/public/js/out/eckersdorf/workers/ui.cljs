(ns eckersdorf.workers.ui
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


(defn worker-dialog [modify?]
  (let [show-dialog? (rf/subscribe [:workers/show-dialog?])
        workplaces-list (rf/subscribe [:workplaces/list])
        worker-form (rf/subscribe [:workers/worker-form])
        email-addon "@teas.com.pl"
        valid-worker (r/atom nil)]
    (fn []
      [ant/modal {:visible (not (nil? @show-dialog?))
                  :title   (if (#{:modify} @show-dialog?) "edytuj pracownika" "dodaj pracownika")
                  :footer  (r/as-element [:div
                                          [ant/button {:on-click #(rf/dispatch [:workers/hide-dialog])}
                                           "anuluj"]
                                          [ant/button {:type     (if (s/valid? :worker/worker @worker-form)
                                                                   :primary :danger)
                                                       :on-click (fn []
                                                                   (if (s/valid? :worker/worker @worker-form)
                                                                     (if (#{:modify} @show-dialog?)
                                                                       (rf/dispatch [:workers/request-update])
                                                                       (rf/dispatch [:workers/request-create]))
                                                                     (ant/message-warning "wprowadzono błędne dane")))}
                                           (if (#{:modify} @show-dialog?) "modyfikuj" "dodaj")]])}
       [:div
        (let [{:keys [worker/first-name worker/last-name]} @worker-form]
          [ant/row {:gutter 8}
           [ant/col {:span 12}
            [ant/form-item {:validate-status (when (and (not (nil? first-name))
                                                        (not (s/valid? :worker/first-name first-name)))
                                               :error)
                            :help            (cond
                                               (and (not (nil? first-name))
                                                    (not (s/valid? :worker/first-name first-name)))
                                               "pole nie może być puste")}
             [ant/input {:placeholder "imię"
                         :value       first-name
                         :on-change   (fn [e]
                                        (let [val (-> e .-target .-value str/lower)
                                              email-address (simplify-string (str (first val) "." last-name email-addon))
                                              worker (assoc @worker-form
                                                       :worker/first-name val
                                                       :worker/email-address email-address)]
                                          (rf/dispatch [:workers/set-worker-form worker])))}]]]
           [ant/col {:span 12}
            [ant/form-item {:validate-status (when (and (not (nil? last-name))
                                                        (not (s/valid? :worker/last-name last-name)))
                                               :error)
                            :help            (cond
                                               (and (not (nil? last-name))
                                                    (not (s/valid? :worker/last-name last-name)))
                                               "pole nie może być puste")}
             [ant/input {:placeholder "nazwisko"
                         :value       last-name
                         :on-change   (fn [e]
                                        (let [val (-> e .-target .-value str/lower)
                                              email-address (str/lower (simplify-string (str (first first-name) "." val email-addon)))
                                              worker (assoc @worker-form
                                                       :worker/last-name val
                                                       :worker/email-address email-address)]
                                          (rf/dispatch [:workers/set-worker-form worker])))}]]]])
        [ant/row {:gutter 8}
         [ant/col {:span 12}
          (let [{:keys [worker/email-address]} @worker-form
                email-address (first (str/split email-address "@"))]
            [ant/form-item {:validate-status (when (and (not (nil? email-address))
                                                        (not (s/valid? :worker/email-address
                                                                       (str email-address email-addon))))
                                               :error)
                            :help            (cond
                                               (str/empty? email-address)
                                               "pole nie może być puste"
                                               (and (not (nil? email-address))
                                                    (not (s/valid? :workplace/email-address
                                                                   (str email-address email-addon))))
                                               "błędny adres email")}
             [ant/input {:placeholder "e-mail"
                         :value       email-address
                         :addon-after email-addon
                         :on-change   (fn [e]
                                        (let [val (-> e .-target .-value)
                                              worker (assoc @worker-form :worker/email-address
                                                                         (if-not (str/empty-or-nil? val)
                                                                           (str val email-addon)
                                                                           ""))]
                                          (rf/dispatch [:workers/set-worker-form worker])))}]])]
         [ant/col {:span 12}
          (let [{:keys [worker/phone-number]} @worker-form]
            [ant/form-item {:wrapper-col     {:span 24}
                            :validate-status (when (not (s/valid? :worker/phone-number phone-number))
                                               :error)
                            :help            (cond
                                               (not (s/valid? :worker/phone-number phone-number))
                                               "błędny numer telefonu")}
             [ant/input {:placeholder  "numer telefonu"
                         :value        phone-number
                         :addon-before "+48"
                         :on-change    (fn [e]
                                         (let [val (-> e .-target .-value)
                                               worker (assoc @worker-form :worker/phone-number val)]
                                           (rf/dispatch [:workers/set-worker-form worker])))
                         :style        {:display :inline}}]])]]
        [ant/row {:gutter 8}
         ;[ant/col {:span 12}
         ; (let [{:keys [worker/birth-date]} @worker-form]
         ;   [ant/form-item {:validate-status (when (and (not (nil? birth-date))
         ;                                               (not (s/valid? :worker/birth-date birth-date)))
         ;                                      :error)
         ;                   :help            (cond
         ;                                      (str/empty? birth-date)
         ;                                      "pole nie może być puste"
         ;                                      (and (not (nil? birth-date))
         ;                                           (not (s/valid? :worker/birth-date birth-date)))
         ;                                      "błędna data")}
         ;    [ant/date-picker {:value         (when birth-date (js/moment
         ;                                                        (tc/to-string birth-date)))
         ;                      :default-value (js/moment)
         ;                      :on-change     (fn [date]
         ;                                       (let [worker (assoc @worker-form :worker/birth-date
         ;                                                                        (-> date
         ;                                                                            (.toISOString)
         ;                                                                            (tc/from-string)))]
         ;                                         (rf/dispatch [:workers/set-worker-form worker])))}]])]
         [ant/col {:span 12}
          (let [{:keys [worker/working-hours]} @worker-form]
            [ant/form {:layout :horizontal}
             [ant/form-item {:label           "ilość godzin pracy"
                             :label-col       {:span 12}
                             :wrapper-col     {:span 12}
                             :validate-status (when (and (not (nil? working-hours))
                                                         (not (s/valid? :worker/working-hours working-hours)))
                                                :error)
                             :help            (cond
                                                (str/empty? working-hours)
                                                "pole nie może być puste"
                                                (and (not (nil? working-hours))
                                                     (not (s/valid? :worker/working-hours working-hours)))
                                                "błędna liczba")
                             :style           {:text-align :left}}
              [ant/input-number {:value     working-hours
                                 :min       0
                                 :max       12
                                 :size      "200px"
                                 :on-change (fn [val]
                                              (let [worker (assoc @worker-form :worker/working-hours val)]
                                                (rf/dispatch [:workers/set-worker-form worker])))
                                 :style     {:width "100%"}}]]])]
         [ant/col {:span 12}
          (let [{object-id :worker/workplace} @worker-form
                workplace (rf/subscribe [:workplace/get-by-id object-id])]
            [ant/form-item
             [ant/select {:value     (or (:mongo/object-id @workplace) "brak")
                          :on-change (fn [val]
                                       (let [worker (assoc @worker-form :worker/workplace val)]
                                         (rf/dispatch [:workers/set-worker-form worker])))
                          :style     {:width "100%"}}
              (doall
                (for [w (into [{:mongo/object-id nil :workplace/name "brak"}] @workplaces-list)
                      :let [{:keys [mongo/object-id workplace/name]} w]]
                  ^{:key [object-id]}
                  [ant/select-option {:value object-id} name]))]])]
         ]]])))

(defn workers-list []
  (let [workers-list (rf/subscribe [:workers/list])
        workplaces-list (rf/subscribe [:workplaces/list])]
    (fn []
      [ant/table {:columns    [{:title     "imię"
                                :dataIndex :worker/first-name
                                :key       :worker/first-name
                                :sorter    (fn [a b]
                                             (compare (aget a "first-name") (aget b "first-name")))
                                :width     150}
                               {:title     "nazwisko"
                                :dataIndex :worker/last-name
                                :key       :worker/last-name
                                :sorter    (fn [a b]
                                             (compare (aget a "last-name") (aget b "last-name")))
                                :width     250}
                               {:title     "e-mail"
                                :dataIndex :worker/email-address
                                :key       :worker/email-address
                                :width     250}
                               {:title     "miejsce pracy"
                                :dataIndex :worker/workplace
                                :key       :worker/workplace
                                :render    (fn [id _ _]
                                             (let [{:keys [workplace/name]} @(rf/subscribe [:workplace/get-by-id id])]
                                               name))
                                :sorter    (fn [a b]
                                             (let [first-id (aget a "workplace")
                                                   second-id (aget b "workplace")
                                                   first-workplace @(rf/subscribe [:workplace/get-by-id first-id])
                                                   second-workplace @(rf/subscribe [:workplace/get-by-id second-id])]
                                               (compare (:workplace/name first-workplace)
                                                        (:workplace/name second-workplace))))
                                :filters   (doall
                                             (for [{:keys [workplace/name mongo/object-id]} @workplaces-list]
                                               ^{:key object-id}
                                               {:text  name
                                                :value object-id}))
                                :onFilter  (fn [v record]
                                             (= v (aget record "workplace")))}
                               {:title     "wielkość etatu w h"
                                :dataIndex :worker/working-hours
                                :key       :worker/working-hours
                                :width     150}
                               {:title  "akcje"
                                :render (fn [_ record _]
                                          (let [object-id (aget record "object-id")
                                                worker (-> record
                                                           (js->clj :keywordize-keys true)
                                                           (dissoc :id)
                                                           (add-ns :worker)
                                                           (set/rename-keys {:worker/object-id :mongo/object-id})
                                                           (update :worker/address add-ns :address))]
                                            (r/as-element
                                              [ant/button-group
                                               [ant/button {:icon     :delete
                                                            :type     :danger
                                                            :on-click (fn []
                                                                        (rf/dispatch [:workers/request-delete object-id]))}]
                                               [ant/button {:icon     :edit
                                                            :on-click (fn []
                                                                        (rf/dispatch [:workers/modify-worker-dialog worker]))}]])))
                                :width  150}]
                  :dataSource (map-indexed (fn [i m] (assoc m :id i)) @workers-list)
                  :row-key    "id"
                  :pagination false
                  :scroll     {:y "calc(100vh - 48px - 28px - 50px"}
                  }])))


(defn workers-view []
  (fn []
    [flex/vbox
     [worker-dialog]
     [workers-list]
     [flex/hbox {:justify-content :center}
      [ant/button {:type     :primary
                   :on-click #(rf/dispatch [:workers/create-worker-dialog])}
       "dodaj"]]]))