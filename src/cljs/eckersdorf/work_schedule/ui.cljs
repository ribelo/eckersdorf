(ns eckersdorf.work-schedule.ui
  (:require [cljs.spec.alpha :as s]
            [reagent.core :as r]
            [reagent.ratom :refer [reaction]]
            [re-frame.core :as rf]
            [antizer.reagent :as ant]
            [cuerdas.core :as str]
            [eckersdorf.flex :as flex]
            [eckersdorf.utils :refer [add-ns simplify-string]]
            [eckersdorf.work-schedule.utils :refer []]
            [clojure.set :as set]
            [cljsjs.moment.locale.pl]
            [cljs-time.core :as dt]
            [cljs-time.coerce :as dtc]
            [cljs-time.format :as dtf]
            [cljs-time.periodic :as dtp]))


(def short-weekdays
  {1 "PN"
   2 "WT"
   3 "ŚR"
   4 "CZ"
   5 "PT"
   6 "SO"
   7 "ND"})


(def long-weekdays
  {1 "Poniedziałek"
   2 "Wtorek"
   3 "Środa"
   4 "Czwartek"
   5 "Piątek"
   6 "Sobota"
   7 "Niedziela"})


(def long-months
  {1  "styczeń"
   2  "luty"
   3  "marzec"
   4  "kwiecień"
   5  "maj"
   6  "czerwiec"
   7  "lipiec"
   8  "sierpień"
   9  "wrzesień"
   10 "październik"
   11 "listopad"
   12 "grudzień"})


(defn select-workplace []
  (let [workplaces-list (rf/subscribe [:workplaces/list])
        workplace (rf/subscribe [:work-schedule/selected-workplace-id])]
    (fn []
      [ant/form-item
       [ant/select {:value     (or @workplace "brak")
                    :on-change (fn [val]
                                 (rf/dispatch [:work-schedule/set-workplace val]))
                    :style     {:width "200px"}}
        (doall
          (for [w (into [{:mongo/object-id nil :workplace/name "brak"}] @workplaces-list)
                :let [{:keys [mongo/object-id workplace/name]} w]]
            ^{:key [object-id]}
            [ant/select-option {:value object-id} name]))]])))


(defn select-month []
  (let [main-date (rf/subscribe [:work-schedule/main-date])]
    (fn []
      [ant/form-item
       [ant/date-picker-month-picker {:value     (-> @main-date (dtc/to-string) js/moment)
                                      :on-change (fn [date]
                                                   (rf/dispatch [:work-schedule/set-date
                                                                 (-> date (.toISOString) (dtc/from-string))]))}]])))


(defn work-cell [{:keys [work-schedule/worker-id
                         work-schedule/workplace-id
                         work-schedule/datetime] :as m}]
  (let [work (rf/subscribe [:work-schedule/get m])
        worker (rf/subscribe [:workers/by-id worker-id])
        seller-background "repeating-linear-gradient(
                           -45deg,
                           #49a9ee,
                           #49a9ee 4px,
                           #add8f7 4px,
                           #add8f7 8px)"
        butcher-background "repeating-linear-gradient(
                            -45deg,
                            #f46e65,
                            #f46e65 4px,
                            #fabeb9 4px,
                            #fabeb9 8px)"
        vacation-background "repeating-linear-gradient(
                             -45deg,
                             #ffce3d,
                             #ffce3d 4px,
                             #ffe9a7 4px,
                             #ffe9a7 8px)"
        holiday-background "repeating-linear-gradient(
                             -45deg,
                             #f7629e,
                             #f7629e 4px,
                             #fcb8d3 4px,
                             #fcb8d3 8px)"]
    (fn [m]
      (let [work-type (:work-schedule/work-type @work)
            working-hours (:worker/working-hours @worker)]
        [flex/box {:size            1
                   :on-click        (fn []
                                      (case work-type
                                        nil (rf/dispatch [:work-schedule/schedule-work (assoc m :work-schedule/work-type "seller")])
                                        "seller" (rf/dispatch [:work-schedule/update-work (assoc m :work-schedule/work-type "butcher")])
                                        "butcher" (rf/dispatch [:work-schedule/remove-work m])
                                        "vacation" (do (rf/dispatch [:work-schedule/clear-day m])
                                                       (js/setTimeout #(rf/dispatch [:work-schedule/schedule-work (assoc m :work-schedule/work-type "seller")])))
                                        "holiday" nil))
                   :on-double-click (fn []
                                      (let [datetime (dtc/from-string datetime)
                                            end-datetime (dt/plus datetime (dt/hours (min working-hours
                                                                                          (- 21 (dt/hour datetime)))))]
                                        (case work-type
                                          nil (let [works (map #(assoc m :work-schedule/datetime (dtc/to-string %)) (dtp/periodic-seq datetime end-datetime (dt/hours 1)))]
                                                (rf/dispatch [:work-schedule/remove-multiple-work works]))
                                          "seller" (let [works (map #(assoc m :work-schedule/datetime (dtc/to-string %)
                                                                              :work-schedule/work-type "seller") (dtp/periodic-seq datetime end-datetime (dt/hours 1)))]
                                                     (rf/dispatch [:work-schedule/update-multiple-work works]))
                                          "butcher" (let [works (map #(assoc m :work-schedule/datetime (dtc/to-string %)
                                                                               :work-schedule/work-type "butcher") (dtp/periodic-seq datetime end-datetime (dt/hours 1)))]
                                                      (rf/dispatch [:work-schedule/update-multiple-work works]))
                                          "holiday" nil)))
                   :style           {:border     "1px solid #d9d9d9"
                                     :background (case work-type
                                                   nil nil
                                                   "seller" seller-background
                                                   "butcher" butcher-background
                                                   "vacation" vacation-background
                                                   "holiday" holiday-background)}}
         nil]))))



(defn worked-hours [work]
  (let [worked-hours (rf/subscribe [:work-schedule/hours-worked-in-month work])]
    (fn [work]
      [:div @worked-hours])))


(defn work-schedule-view []
  (let [main-date (rf/subscribe [:work-schedule/main-date])
        days (rf/subscribe [:work-schedule/days])
        workplace-id (rf/subscribe [:work-schedule/selected-workplace-id])
        workers (reaction @(rf/subscribe [:workers/by-workplace-id @workplace-id]))]
    (fn []
      [flex/vbox {:height "100%"}
       [flex/hbox {:justify-content :center}
        [select-workplace]
        [select-month]]
       [flex/hbox {:height "100%"}
        [flex/vbox {:size   "10 0 0"
                    :height "100%"
                    :style  {:overflow-y :scroll}}
         (doall (for [date @days
                      :let [weekday (dt/day-of-week date)
                            weekday-name (get long-weekdays weekday)]]
                  ^{:key (str date)}
                  [flex/vbox
                   [flex/hbox {:gap         "4px"
                               :align-items :center}
                    [:h3 (str (dtf/unparse (dtf/formatter "yyyy-MM-dd") date) " " weekday-name)]
                    [ant/icon {:type     :dingding
                               :on-click (fn []
                                           (let [holiday? (rf/subscribe [:work-schedule/is-holiday? {:work-schedule/workplace-id @workplace-id
                                                                                                     :work-schedule/datetime     (dtc/to-string date)}])]
                                             (if-not @holiday?
                                               (rf/dispatch [:work-schedule/set-holiday @workplace-id @workers (dtc/to-string date)])
                                               (rf/dispatch [:work-schedule/remove-holiday @workplace-id @workers (dtc/to-string date)]))))
                               :style    {:cursor :pointer}}]]
                   [flex/hbox
                    [flex/box {:size  3
                               :style {:border "1px solid #d9d9d9"}}
                     nil]
                    (doall (for [hour (range 6 21)]
                             ^{:key hour}
                             [flex/box {:size  1
                                        :style {:border     "1px solid #d9d9d9"
                                                :text-align :center}}
                              (str hour ":00")]))]
                   (doall (for [{:keys [mongo/object-id
                                        worker/first-name
                                        worker/last-name
                                        worker/working-hours]} @workers]
                            ^{:key object-id}
                            [flex/hbox
                             [flex/hbox {:size  3
                                         :style {:border "1px solid #d9d9d9"}}
                              [flex/hbox {:size            1
                                          :justify-content :space-between
                                          :align-content   :center}
                               [:div (str first-name " " last-name)]
                               [flex/hbox {:gap "4px"}
                                [ant/icon {:type     :tag
                                           :on-click (fn []
                                                       (let [holiday? (rf/subscribe [:work-schedule/is-holiday? {:work-schedule/workplace-id @workplace-id
                                                                                                                 :work-schedule/datetime     (dtc/to-string date)}])]
                                                         (when-not @holiday?
                                                           (rf/dispatch [:work-schedule/set-vacation
                                                                         {:work-schedule/workplace-id @workplace-id
                                                                          :work-schedule/worker-id    object-id
                                                                          :work-schedule/datetime     (dtc/to-string date)}]))))
                                           :style    {:cursor :pointer}}]
                                [ant/icon {:type     :delete
                                           :style    {:cursor :pointer}
                                           :on-click (fn []
                                                       (let [holiday? (rf/subscribe [:work-schedule/is-holiday? {:work-schedule/workplace-id @workplace-id
                                                                                                                 :work-schedule/datetime     (dtc/to-string date)}])]
                                                         (when-not @holiday?
                                                           (rf/dispatch [:work-schedule/clear-day
                                                                         {:work-schedule/workplace-id @workplace-id
                                                                          :work-schedule/worker-id    object-id
                                                                          :work-schedule/datetime     (dtc/to-string date)}]))))}]]]]
                             (doall (for [hour (range 6 21)
                                          :let [datetime (dtc/to-string (dt/plus date (dt/hours hour)))]]
                                      ^{:key hour}
                                      [work-cell {:work-schedule/workplace-id @workplace-id
                                                  :work-schedule/worker-id    object-id
                                                  :work-schedule/datetime     datetime}]))]))
                   [:br]]))]
        [flex/vbox {:size "3 0 auto"}
         (doall (for [{:keys [mongo/object-id
                              worker/first-name
                              worker/last-name
                              worker/working-hours]} @workers]
                  ^{:key object-id}
                  [flex/hbox {:justify-content :space-between
                              :align-content   :center}
                   [:div (str first-name " " last-name)]
                   [worked-hours {:work-schedule/worker-id object-id
                                  :work-schedule/workplace-id @workplace-id
                                  :work-schedule/datetime @main-date}]]))]]])))