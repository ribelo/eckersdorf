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


;(def swipeable (r/adapt-react-class (aget js/window "deps" "Swipeable")))
;(def lazyload (r/adapt-react-class (aget js/window "deps" "LazyLoad" "default")))

;(def transition (r/adapt-react-class (aget js/ReactTransitionGroup "Transition")))
;(def transition-group (r/adapt-react-class (aget js/ReactTransitionGroup "TransitionGroup")))
;(def css-transition (r/adapt-react-class (aget js/ReactTransitionGroup "CSSTransition")))