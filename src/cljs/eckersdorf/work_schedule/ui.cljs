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
  {1 "poniedziałek"
   2 "wtorek"
   3 "środa"
   4 "czwartek"
   5 "piątek"
   6 "sobota"
   7 "niedziela"})


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
                                                                 (-> date (.endOf "day") (.utc) (.toISOString) (dtc/from-string))]))}]])))


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
  (let [work (rf/subscribe [:work-schedule/get-work m])
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
                            #fcb8d3 8px)"
        break-background "repeating-linear-gradient(
                          -45deg,
                          #919191,
                          #919191 4px,
                          #d9d9d9 4px,
                          #d9d9d9 8px)"]
    (fn [m]

      (let [work-type (:work-schedule/work-type @work)
            working-hours (:worker/working-hours @worker)]
        [flex/box {:size            1
                   :on-click        (fn []
                                      (case work-type
                                        nil (rf/dispatch [:work-schedule/schedule-work (assoc m :work-schedule/work-type "seller")])
                                        "seller" (rf/dispatch [:work-schedule/update-work (assoc m :work-schedule/work-type "butcher")])
                                        "butcher" (rf/dispatch [:work-schedule/remove-work m])
                                        "break" (do (rf/dispatch [:work-schedule/clear-day m])
                                                    (js/setTimeout #(rf/dispatch [:work-schedule/schedule-work (assoc m :work-schedule/work-type "seller")])))
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
                                                   "break" break-background
                                                   "vacation" vacation-background
                                                   "holiday" holiday-background)}}
         nil]))))



(defn worked-hours [work]
  (let [working-hours (rf/subscribe [:work-schedule/all-working-hours])
        worked-hours (rf/subscribe [:work-schedule/hours-worked-in-month work])]
    (fn [work]
      [:div (- @working-hours @worked-hours)])))


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
        workers (reaction @(rf/subscribe [:workers/by-workplace-id @workplace-id]))
        width (reaction (/ 100 (inc (count @workers))))
        data-source (rf/subscribe [:work-schedule/print-data-source])]
    (r/create-class
      {:display-name
       "work-schedule-print"
       :component-did-mount
       #(.print js/window)
       :reagent-render
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

          [ant/table {:columns    (conj
                                    (map
                                      (fn [{:keys [mongo/object-id
                                                   worker/first-name
                                                   worker/last-name]}]
                                        {:title     (r/as-element
                                                      (let [text (str (first first-name) "." last-name)
                                                            height (* (count text) 6.5)]
                                                        [flex/box {:justify-content :center}
                                                         [flex/box {:style {:text-align   :center
                                                                            :writing-mode "vertical-rl"
                                                                            :height       (str height "px")}}
                                                          text]]))
                                         :width     (str @width "%")
                                         :dataIndex object-id
                                         :key       object-id
                                         :render    (fn [[begin end work-type day-of-week] _ _]
                                                      (r/as-element
                                                        [flex/box {:size            1
                                                                   :justify-content :center
                                                                   :style           {:text-align :center}}
                                                         (cond
                                                           (#{"seller" "butcher"} work-type)
                                                           [flex/vbox
                                                            [flex/box (str begin "-" end)]
                                                            [flex/box
                                                             (case work-type
                                                               "seller" "sklep"
                                                               "butcher" "lada")]]
                                                           (#{"vacation"} work-type)
                                                           [flex/box "urlop"]
                                                           (#{"holiday"} work-type)
                                                           [flex/box "święto"]
                                                           (= 7 day-of-week)
                                                           [flex/box "niedziela"]
                                                           :else
                                                           [flex/box "wolne"])]))})
                                      @workers)
                                    {:title     (r/as-element
                                                  [flex/box {:justify-content :center}
                                                   [flex/box {:style {:text-align   :center
                                                                      :writing-mode "vertical-rl"
                                                                      :height       (str 25 "px")}}
                                                    "data"]])
                                     :width     (str width "%")
                                     :dataIndex :datetime
                                     :key       :datetime
                                     :render    (fn [datetime record _]
                                                  (r/as-element
                                                    [flex/box {:size            1
                                                               :justify-content :center
                                                               :style           {:text-align :center}}
                                                     [flex/vbox
                                                      [flex/box
                                                       (dtf/unparse (:date dtf/formatters) datetime)]
                                                      [flex/box
                                                       (get long-weekdays (dt/day-of-week datetime))]]]))})
                      :dataSource (map-indexed (fn [i m] (assoc m :id i)) @data-source)
                      :row-key    "id"
                      :pagination false
                      :bordered   true}]])})))


(defn work-schedule-app []
  (let [main-date (rf/subscribe [:work-schedule/main-date])
        days (rf/subscribe [:work-schedule/days])
        workplace-id (rf/subscribe [:work-schedule/selected-workplace-id])
        workers (reaction @(rf/subscribe [:workers/by-workplace-id @workplace-id]))]
    (fn []
      [flex/vbox {:height "calc(100% - 80px)"}
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
                      :style  {:overflow-y    :scroll
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
                        [ant/icon {:type     :bell
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
                                  [ant/tooltip {:title             "dzień wolny"
                                                :placement         :right
                                                :mouse-enter-delay 0.25}
                                   [ant/icon {:type     :home
                                              :on-click (fn []
                                                          (let [holiday? (rf/subscribe [:work-schedule/is-holiday? {:work-schedule/workplace-id @workplace-id
                                                                                                                    :work-schedule/datetime     date}])
                                                                break? (rf/subscribe [:work-schedule/is-break? {:work-schedule/workplace-id @workplace-id
                                                                                                                :work-schedule/worker-id    object-id
                                                                                                                :work-schedule/datetime     date}])]
                                                            (when-not @holiday?
                                                              (if-not @break?
                                                                (rf/dispatch [:work-schedule/set-break
                                                                              {:work-schedule/workplace-id @workplace-id
                                                                               :work-schedule/worker-id    object-id
                                                                               :work-schedule/datetime     date}])
                                                                (rf/dispatch [:work-schedule/clear-day
                                                                              {:work-schedule/workplace-id @workplace-id
                                                                               :work-schedule/worker-id    object-id
                                                                               :work-schedule/datetime     date}])))))
                                              :style    {:cursor        :pointer
                                                         :padding-right "4px"}}]]
                                  [ant/tooltip {:title             "wyślij na urlop"
                                                :placement         :right
                                                :mouse-enter-delay 0.25}
                                   [ant/icon {:type     :compass
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
                                       :work-schedule/datetime     @main-date}]]]))]
          ])])))


(defn work-schedule-view []
  (let [print? (rf/subscribe [:work-schedule/print?])]
    (fn []
      (if-not @print?
        [work-schedule-app]
        [work-schedule-print]))))
