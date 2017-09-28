(ns eckersdorf.login.ui
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :as rf]
            [cuerdas.core :as str]
            [antizer.reagent :as ant]
            [eckersdorf.util :as util]
            [eckersdorf.flex :as flex]))


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