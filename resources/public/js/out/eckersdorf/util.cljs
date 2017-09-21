(ns eckersdorf.util
  (:require [reagent.core :as r]
            [cuerdas.core :as str]
            [eckersdorf.flex :as flex]))

(defn px [num]
  (str (long num) "px"))

(defn valid-email-address? [text]
  (some? (re-find #"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)" text)))


(defn valid-phone-number? [text]
  (some? (re-find #"^(?:[0+]48)?\d{9}$" text)))


(defn valid-password [text]
  (re-find #"(?=^.{8,}$)^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" text))


(def swipeable (r/adapt-react-class (aget js/window "deps" "Swipeable")))
(def lazyload (r/adapt-react-class (aget js/window "deps" "LazyLoad" "default")))

(def transition (r/adapt-react-class (aget js/ReactTransitionGroup "Transition")))
(def transition-group (r/adapt-react-class (aget js/ReactTransitionGroup "TransitionGroup")))
(def css-transition (r/adapt-react-class (aget js/ReactTransitionGroup "CSSTransition")))


(defn pintu-shield
  ([{:keys [height inverted? mono? text] :or {text "pintu.pl"} :as opts}]
   (let [font-size (/ height 1.5)
         width (* height (count text) 0.24)
         border-radius (* height 0.2)
         hover? (r/atom false)
         [background color] (cond
                              (and (not inverted?) mono?) [(color :grey50) (color :grey900)]
                              (and inverted? (not mono?)) [(color :green500) (color :grey50)]
                              (and inverted? mono?) [(color :green500) (color :grey50)]
                              :default [(color :grey50) (color :green500)])]
     (fn []
       [ui/paper {:on-mouse-enter #(reset! hover? true)
                  :on-mouse-leave #(reset! hover? false)
                  :z-depth        (if @hover? 2 1)
                  :style          {:background-color background
                                   :max-width        (str width "px")
                                   :min-width        (str width "px")
                                   :min-height       (str height "px")
                                   :max-height       (str height "px")
                                   :border-radius    (str border-radius "px")}}
        [flex/box {:justify-content :center
                   :style           {:text-align :center}}
         [:span {:style {:font-family "Oregano"
                         :font-size   (str font-size "px")
                         :color       color
                         :cursor      :default}}
          text]]]))))