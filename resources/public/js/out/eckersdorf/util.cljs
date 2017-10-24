(ns eckersdorf.util
  (:require [reagent.core :as r]
            [cuerdas.core :as str]
            [eckersdorf.flex :as flex]
            [antizer.reagent :as ant]))

(defn add-ns [m ns]
  (reduce (fn [ret [k v]]
            (assoc ret (keyword (name ns) (name k)) v))
          {} m))


;(def swipeable (r/adapt-react-class (aget js/window "deps" "Swipeable")))
;(def lazyload (r/adapt-react-class (aget js/window "deps" "LazyLoad" "default")))

;(def transition (r/adapt-react-class (aget js/ReactTransitionGroup "Transition")))
;(def transition-group (r/adapt-react-class (aget js/ReactTransitionGroup "TransitionGroup")))
;(def css-transition (r/adapt-react-class (aget js/ReactTransitionGroup "CSSTransition")))

(defn ant-form-item [form name children])