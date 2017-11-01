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


(defn reload-button []
  (fn []
    [ant/tooltip {:title "wczytaj harmonogram"}
     [ant/button {:icon     :cloud-download-o
                  :on-click #(rf/dispatch [:work-schedule/ajax.get-work-schedule])}]]))


(defn sync-button []
  (let [edited? (rf/subscribe [:work-schedule/edited?])]
    (fn []
      [ant/tooltip {:title "zapisz harmonogram"}
       [ant/button {:type     (when @edited? :primary)
                    :icon     :cloud-upload-o
                    :on-click #(rf/dispatch [:work-schedule/sync])}]])))


(defn print-button []
  (let [print? (rf/subscribe [:work-schedule/print?])]
    (fn []
      [ant/tooltip {:title (if-not @print? "drukuj harmonogram" "edytuj harmonogram")}
       [ant/button {:type     (when @print? :primary)
                    :icon     (if-not @print? :printer :calendar)
                    :on-click #(rf/dispatch [:work-schedule/toggle-print])}]])))


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
                                      (let [end-datetime (dt/plus datetime (dt/hours (min working-hours
                                                                                          (- 21 (dt/hour datetime)))))]
                                        (case work-type
                                          nil (let [works (map #(assoc m :work-schedule/datetime %) (dtp/periodic-seq datetime end-datetime (dt/hours 1)))]
                                                (rf/dispatch [:work-schedule/remove-multiple-work works]))
                                          "seller" (let [works (map #(assoc m :work-schedule/datetime %
                                                                              :work-schedule/work-type "seller") (dtp/periodic-seq datetime end-datetime (dt/hours 1)))]
                                                     (rf/dispatch [:work-schedule/update-multiple-work works]))
                                          "butcher" (let [works (map #(assoc m :work-schedule/datetime %
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


(defn worked-days [work]
  (let [worked-days (rf/subscribe [:work-schedule/days-worked-in-month work])]
    (fn [work]
      [:div @worked-days])))


(defn worked-first-changes [work]
  (let [x (rf/subscribe [:work-schedule/first-changes-worked-in-month work])]
    (fn [work]
      [:div @x])))


(defn worked-second-changes [work]
  (let [x (rf/subscribe [:work-schedule/second-changes-worked-in-month work])]
    (fn [work]
      [:div @x])))


(defn worked-saturdays [work]
  (let [x (rf/subscribe [:work-schedule/saturdays-worked-in-month work])]
    (fn [work]
      [:div @x])))


(defn worked-sundays [work]
  (let [x (rf/subscribe [:work-schedule/sundays-worked-in-month work])]
    (fn [work]
      [:div @x])))


(defn work-schedule-print []
  (let [main-date (rf/subscribe [:work-schedule/main-date])
        days (rf/subscribe [:work-schedule/days])
        workplace-id (rf/subscribe [:work-schedule/selected-workplace-id])
        workplace (reaction @(rf/subscribe [:workplace/get-by-id @workplace-id]))
        workers (reaction @(rf/subscribe [:workers/by-workplace-id @workplace-id]))]
    (r/create-class
      {:display-name
       "work-schedule-print"
       :component-did-mount
       #(.print js/window)
       :reagent-render
       (fn []
         [:div {:class "avoid-break"}
          [flex/hbox {:class           "no-print"
                      :justify-content :center}
           [select-workplace]
           [select-month]
           [ant/button-group
            [reload-button]
            [sync-button]
            [print-button]]]
          [flex/hbox {:justify-content :center}
           [flex/vbox
            [:div (str "grafik na " (get long-months (dt/month @main-date)) " " (dt/year @main-date)
                       " dla " (:workplace/name @workplace))]]]
          ;[ant/table {:columns    (mapv (fn [worker]
          ;                                {:title (:worker/last-name worker)
          ;                                 :date-index (:mongo/object-id worker)
          ;                                 :key (:mongo/object-id worker)})
          ;                              @workers)
          ;                        [{:title     "imię"
          ;                          :dataIndex :worker/first-name
          ;                          :key       :worker/first-name
          ;                          :sorter    (fn [a b]
          ;                                       (compare (aget a "first-name") (aget b "first-name")))}
          ;                         {:title     "nazwisko"
          ;                          :dataIndex :worker/last-name
          ;                          :key       :worker/last-name
          ;                          :sorter    (fn [a b]
          ;                                       (compare (aget a "last-name") (aget b "last-name")))}
          ;                         {:title     "e-mail"
          ;                          :dataIndex :worker/email-address
          ;                          :key       :worker/email-address}
          ;                         {:title     "miejsce pracy"
          ;                          :dataIndex :worker/workplace
          ;                          :key       :worker/workplace
          ;                          :render    (fn [id _ _]
          ;                                       (let [{:keys [workplace/name]} @(rf/subscribe [:workplace/get-by-id id])]
          ;                                         name))
          ;                          :sorter    (fn [a b]
          ;                                       (let [first-id (aget a "workplace")
          ;                                             second-id (aget b "workplace")
          ;                                             first-workplace @(rf/subscribe [:workplace/get-by-id first-id])
          ;                                             second-workplace @(rf/subscribe [:workplace/get-by-id second-id])]
          ;                                         (compare (:workplace/name first-workplace)
          ;                                                  (:workplace/name second-workplace))))
          ;                          :filters   (doall
          ;                                       (for [{:keys [workplace/name mongo/object-id]} @workplaces-list]
          ;                                         ^{:key object-id}
          ;                                         {:text  name
          ;                                          :value object-id}))
          ;                          :onFilter  (fn [v record]
          ;                                       (= v (aget record "workplace")))}
          ;                         {:title     "wielkość etatu w h"
          ;                          :dataIndex :worker/working-hours
          ;                          :key       :worker/working-hours}
          ;                         {:title  "akcje"
          ;                          :render (fn [_ record _]
          ;                                    (let [object-id (aget record "object-id")
          ;                                          worker (-> record
          ;                                                     (js->clj :keywordize-keys true)
          ;                                                     (dissoc :id)
          ;                                                     (add-ns :worker)
          ;                                                     (set/rename-keys {:worker/object-id :mongo/object-id})
          ;                                                     (update :worker/address add-ns :address))]
          ;                                      (r/as-element
          ;                                        [ant/button-group
          ;                                         [ant/button {:icon     :delete
          ;                                                      :type     :danger
          ;                                                      :on-click (fn []
          ;                                                                  (rf/dispatch [:workers/request-delete object-id]))}]
          ;                                         [ant/button {:icon     :edit
          ;                                                      :on-click (fn []
          ;                                                                  (rf/dispatch [:workers/modify-worker-dialog worker]))}]])))}]
          ;            :dataSource (map-indexed (fn [i m] (assoc m :id i)) @workers-list)
          ;            :row-key    "id"
          ;            :pagination {:page-size 5}}]
          ])})))


(defn work-schedule-app []
  (let [main-date (rf/subscribe [:work-schedule/main-date])
        days (rf/subscribe [:work-schedule/days])
        workplace-id (rf/subscribe [:work-schedule/selected-workplace-id])
        workers (reaction @(rf/subscribe [:workers/by-workplace-id @workplace-id]))]
    (fn []
      [flex/vbox {:height "100%"}
       [flex/hbox {:class           "no-print"
                   :justify-content :center}
        [select-workplace]
        [select-month]
        [ant/button-group
         [reload-button]
         [sync-button]
         [print-button]]]
       (if-not @workplace-id
         [flex/hbox {:size            1
                     :justify-content :center
                     :align-items     :center}
          [:h1 "proszę wybrać sklep"]]
         [flex/hbox {:height "100%"}
          [flex/vbox {:size   "14 0 0"
                      :height "100%"
                      :style  {
                               ;:overflow-y    :scroll
                               :padding-right "24px"}}
           (doall (for [date @days
                        :let [weekday (dt/day-of-week date)
                              weekday-name (get long-weekdays weekday)]]
                    ^{:key (str date)}
                    [flex/vbox
                     [flex/hbox
                      [flex/hbox {:size            4
                                  :justify-content :space-between
                                  :align-items     :center
                                  :style           {:margin-right "1px"}}
                       [:h4 (str (dtf/unparse (dtf/formatter "yyyy-MM-dd") date) " " weekday-name)]
                       [ant/tooltip {:title             "święto"
                                     :placement         :right
                                     :mouse-enter-delay 0.25}
                        [ant/icon {:type     :dingding
                                   :on-click (fn []
                                               (let [holiday? (rf/subscribe [:work-schedule/is-holiday? {:work-schedule/workplace-id @workplace-id
                                                                                                         :work-schedule/datetime     date}])]
                                                 (if-not @holiday?
                                                   (rf/dispatch [:work-schedule/set-holiday @workplace-id @workers date])
                                                   (rf/dispatch [:work-schedule/remove-holiday @workplace-id @workers date]))))
                                   :style    {:cursor  :pointer
                                              :padding "0px 4px"}}]]]
                      (doall (for [hour (range 6 21)]
                               ^{:key hour}
                               [flex/box {:size            1
                                          :justify-content :center
                                          :style           {:border     "1px solid #d9d9d9"
                                                            :text-align :center}}
                                (str hour ":00")]))]
                     (doall (for [{:keys [mongo/object-id
                                          worker/first-name
                                          worker/last-name
                                          worker/working-hours]} @workers]
                              ^{:key object-id}
                              [flex/hbox
                               [flex/hbox {:size  4
                                           :style {:border "1px solid #d9d9d9"}}
                                [flex/hbox {:size            1
                                            :justify-content :space-between
                                            :align-items     :center}
                                 [:div (str first-name " " last-name)]
                                 [flex/hbox
                                  [ant/tooltip {:title             "wyślij na urlop"
                                                :placement         :left
                                                :mouse-enter-delay 0.25}
                                   [ant/icon {:type     :tag
                                              :on-click (fn []

                                                          (let [holiday? (rf/subscribe [:work-schedule/is-holiday? {:work-schedule/workplace-id @workplace-id
                                                                                                                    :work-schedule/datetime     date}])
                                                                vacation? (rf/subscribe [:work-schedule/is-vacation? {:work-schedule/workplace-id @workplace-id
                                                                                                                      :work-schedule/worker-id    object-id
                                                                                                                      :work-schedule/datetime     date}])]
                                                            (when-not @holiday?
                                                              (if-not @vacation?
                                                                (rf/dispatch [:work-schedule/set-vacation
                                                                              {:work-schedule/workplace-id @workplace-id
                                                                               :work-schedule/worker-id    object-id
                                                                               :work-schedule/datetime     date}])
                                                                (rf/dispatch [:work-schedule/clear-day
                                                                              {:work-schedule/workplace-id @workplace-id
                                                                               :work-schedule/worker-id    object-id
                                                                               :work-schedule/datetime     date}])))))
                                              :style    {:cursor        :pointer
                                                         :padding-right "4px"}}]]
                                  [ant/tooltip {:title             "wyczyść dzień"
                                                :placement         :right
                                                :mouse-enter-delay 0.25}
                                   [ant/icon {:type     :delete
                                              :on-click (fn []
                                                          (let [holiday? (rf/subscribe [:work-schedule/is-holiday? {:work-schedule/workplace-id @workplace-id
                                                                                                                    :work-schedule/datetime     date}])]
                                                            (when-not @holiday?
                                                              (rf/dispatch [:work-schedule/clear-day
                                                                            {:work-schedule/workplace-id @workplace-id
                                                                             :work-schedule/worker-id    object-id
                                                                             :work-schedule/datetime     date}]))))
                                              :style    {:cursor        :pointer
                                                         :padding-right "4px"}}]]]]]
                               (doall (for [hour (range 6 21)
                                            :let [datetime (dt/plus date (dt/hours hour))]]
                                        ^{:key hour}
                                        [work-cell {:work-schedule/workplace-id @workplace-id
                                                    :work-schedule/worker-id    object-id
                                                    :work-schedule/datetime     datetime}]))]))
                     [:br]]))]
          [flex/vbox {:class "no-print"
                      :size  "3 0 auto"
                      :style {:padding "0px 12px"}}
           [flex/hbox {:justify-content :space-between
                       :align-items     :center}
            [flex/box {:size 3} "osoba"]
            [flex/box {:size 1}
             [ant/tooltip {:title "liczba godzin"} [:div {:style {:cursor :pointer}} "g"]]]
            [flex/box {:size 1}
             [ant/tooltip {:title "liczba pierwszych zmian"} [:div {:style {:cursor :pointer}} "p"]]]
            [flex/box {:size 1}
             [ant/tooltip {:title "liczba drugich zmian"} [:div {:style {:cursor :pointer}} "d"]]]
            [flex/box {:size 1}
             [ant/tooltip {:title "liczba sobót"} [:div {:style {:cursor :pointer}} "s"]]]
            [flex/box {:size 1}
             [ant/tooltip {:title "liczba niedziel"} [:div {:style {:cursor :pointer}} "n"]]]]
           (doall (for [{:keys [mongo/object-id
                                worker/first-name
                                worker/last-name
                                worker/working-hours]} @workers]
                    ^{:key object-id}
                    [flex/hbox {:justify-content :space-between
                                :align-items     :center}
                     [flex/box {:size 3}
                      (str (first first-name) ". " last-name)]
                     [flex/box {:size 1}
                      [worked-hours {:work-schedule/worker-id    object-id
                                     :work-schedule/workplace-id @workplace-id
                                     :work-schedule/datetime     @main-date}]]
                     [flex/box {:size 1}
                      [worked-first-changes {:work-schedule/worker-id    object-id
                                             :work-schedule/workplace-id @workplace-id
                                             :work-schedule/datetime     @main-date}]]
                     [flex/box {:size 1}
                      [worked-second-changes {:work-schedule/worker-id    object-id
                                              :work-schedule/workplace-id @workplace-id
                                              :work-schedule/datetime     @main-date}]]
                     [flex/box {:size 1}
                      [worked-saturdays {:work-schedule/worker-id    object-id
                                         :work-schedule/workplace-id @workplace-id
                                         :work-schedule/datetime     @main-date}]]
                     [flex/box {:size 1}
                      [worked-sundays {:work-schedule/worker-id    object-id
                                       :work-schedule/workplace-id @workplace-id
                                       :work-schedule/datetime     @main-date}]]]))]])])))


(defn work-schedule-view []
  (let [print? (rf/subscribe [:work-schedule/print?])]
    (fn []
      (if-not @print?
        [work-schedule-app]
        [work-schedule-print]))))