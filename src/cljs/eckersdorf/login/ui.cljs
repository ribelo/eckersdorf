(ns eckersdorf.login.ui
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :as rf]
            [cuerdas.core :as str]
            [antizer.reagent :as ant]
            [eckersdorf.util :as util]
            [eckersdorf.flex :as flex]))


;(defn login-dialog []
;  (let [dialog-opened? (rf/subscribe [:login/dialog-opened?])
;        email-address (rf/subscribe [:login/email-address])
;        password (rf/subscribe [:login/password])
;        valid-email? (r/atom true)
;        invalid-password? (rf/subscribe [:login/invalid-password?])
;        show-password? (r/atom false)
;        disabled-login-button? (reaction (or (empty? @email-address)
;                                             (empty? @password)))
;        title (r/as-element [:div                           ; material-ui bug
;                             [flex/hbox {:justify-content :center}
;                              [:span "Zaloguj się do pintu.pl"]]])
;        collapse (r/atom true)]
;    (fn []
;      [ui/dialog {:title                title
;                  :open                 @dialog-opened?
;                  :on-request-close     #(rf/dispatch [:login/toggle-dialog])
;                  :reposition-on-update false
;                  :style                {:padding-top "100px"}
;                  :content-style        {:width     "30vw"
;                                         :min-width 300}}
;       [flex/vbox {:justify-content :center
;                   :gap             "16px"
;                   :style           {:padding "0px 16px"}}
;        [flex/hbox {:justify-content :center
;                    :align-items     :center}
;         [flex/box {:size "10%"}
;          [ic/action-account-box {:color (color :grey500)}]]
;         [flex/box {:size "90%"}
;          [ui/text-field {:hint-text   "adres e-mail"
;                          :value       @email-address
;                          :error-text  (when-not @valid-email? "błędny adres e-mail")
;                          :type        :email
;                          :full-width  true
;                          :on-change   (fn [_ v]
;                                         (when (seq v) (reset! valid-email? (util/valid-email-address? v)))
;                                         (rf/dispatch [:login/set-email-address! v]))
;                          :error-style {:display :table}}]]]
;        [flex/hbox {:justify-content :center
;                    :align-items     :center}
;         [flex/box {:size         "10%"
;                    :on-click (fn [_] (swap! show-password? not))
;                    :style        {:cursor :pointer}}
;          (if-not @show-password?
;            [ic/action-lock {:color (if-not @invalid-password?
;                                      (color :grey500)
;                                      (color :red500))}]
;            [ic/action-lock-open {:color (if-not @invalid-password?
;                                           (color :grey500)
;                                           (color :red500))}])]
;         [flex/box {:size "90%"}
;          [ui/text-field {:hint-text  "hasło"
;                          :error-text (when @invalid-password?
;                                        "błędne hasło")
;                          :type       (if-not @show-password? :password :text)
;                          :full-width true
;                          :on-change  (fn [_ v] (rf/dispatch [:login/set-password! v]))}]]]
;        [flex/hbox {:justify-content :center}
;         [flex/box
;          [:span {:style        {:cursor :pointer}
;                  :on-click (fn [] (println "lksajdlkjal") (swap! collapse not))}
;           "zapomniałem hasła :("]]]
;        [flex/gap {:size "16px"}]
;        [flex/hbox {:justify-content :center}
;         [flex/gap {:size "1"}]
;         [flex/box {:size "10"}
;          [ui/raised-button {:full-width   true
;                             :label        "zaloguj"
;                             :primary      true
;                             :disabled     @disabled-login-button?
;                             :on-click #(rf/dispatch [:login/request-login])}]]
;         [flex/gap {:size "1"}]]
;        [flex/hbox {:justify-content :center
;                    :style           {:flex-flow "row wrap"}}
;         [flex/box
;          [:span "Nie masz jeszcze konta?"]]
;         [flex/gap {:size "5px"}]
;         [flex/box
;          [:a {:style        {:color  (color :green500)
;                              :cursor :pointer}
;               :on-click (fn []
;                               (rf/dispatch [:login/toggle-dialog])
;                               (js/setTimeout #(rf/dispatch [:registration/toggle-dialog]) 450))}
;           "Zarejestruj się!"]]]]])))


;(defn login-state []
;  (let [logged-in? (rf/subscribe [:user/logged-in?])
;        first-name (rf/subscribe [:user/first-name])
;        last-name (rf/subscribe [:user/last-name])]
;    (fn []
;      (if-not @logged-in?
;        [ui/flat-button {:icon         (ic/action-account-box {:color       (color :grey50)
;                                                               :hover-color (color :cyan100)})
;                         :label        "zaloguj"
;                         :hover-color  (color :green600)
;                         :style        {:color (color :grey50)}
;                         :ripple-color (color :greenA200)
;                         :on-click #(rf/dispatch [:login/toggle-dialog])}]
;        [ui/flat-button {:icon         (ic/action-account-box {:color       (color :grey50)
;                                                               :hover-color (color :cyan100)})
;                         :label        (str @first-name " " @last-name)
;                         :hover-color  (color :green600)
;                         :style        {:color (color :grey50)}
;                         :ripple-color (color :greenA200)
;                         :on-click (fn [e]
;                                         (rf/dispatch [:user/set-popover-anchor (.-currentTarget e)])
;                                         (rf/dispatch [:user/toggle-popover]))}]))))


(defn login-form []
  (ant/create-form
    (let [invalid-password? (rf/subscribe [:login/invalid-password?])]
      (fn []
        (let [form (ant/get-form)]
          [ant/form
           [ant/form-item {:label "email"}
            (ant/decorate-field form "email"
              {:rules [{:required :true
                        :message  "wprowadź adres email"}]}
              [ant/input {:on-change (fn [e] (rf/dispatch [:login/set-email-address! (-> e .-target .-value)]))}])]
           [ant/form-item {:label           "hasło"
                           :validate-status (when (true? @invalid-password?) :error)
                           :help            (when (true? @invalid-password?) "blędne hasło")}
            (ant/decorate-field form "blabla" {:rules [{:required :true
                                                        :message  "wprowadź hasło"}]}
              [ant/input {:type      :password
                          :on-change (fn [e] (rf/dispatch [:login/set-password! (-> e .-target .-value)]))}])]
           [flex/hbox {:justify-content :center}
            [ant/form-item
             [ant/button {:on-click #(rf/dispatch [:login/request-login])}
              "zaloguj"]]]])))))

(defn login-form1 []
  (ant/create-form
    (fn []
      (let [form (ant/get-form)
            input (r/as-element (ant/decorate-field form "email" {:rules [{:required :true
                                                                           :message  "wprowadź adres email"}]}
                                  [ant/input]))]
        ((:setFieldsValue form) {"email" "sex"})
        [ant/form {:inline true}
         [ant/form-item {:label "email"}
          [input]]]))
    :options {:onValuesChange (fn [a b] (println b))
              :setFieldsValue (fn [] {"email" "sex"})}))



(defn login-page []
  (let [email-address (rf/subscribe [:login/email-address])
        password (rf/subscribe [:login/password])
        valid-email? (r/atom true)
        invalid-password? (rf/subscribe [:login/invalid-password?])
        show-password? (r/atom false)
        disabled-login-button? (reaction (or (empty? @email-address)
                                             (empty? @password)))]
    (fn []
      [ant/layout
       [ant/layout-content
        [flex/hbox {:justify-content :center
                    :align-items     :center
                    :style           {:min-height "100vh"}}
         (login-form)]]])))