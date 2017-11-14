(ns eckersdorf.repl
  (:require [cljs.spec.alpha :as s]
            [re-frame.core :as rf]
            [re-frame.db :refer [app-db]]
            cljsjs.jquery))

;(defn create-person
;  ([name title]
;   {:name  name
;    :title title})
;  ([name title children]
;   {:name  name
;    :title title
;    :children children}))
;
;(def datasource (create-person "Rafał krzyważnia" "Prezes"
;                               [(create-person "Elżbieta Żurańska" "Prokurent")]))
;
;(->
;  (js/$ "#org-chart")
;  (.orgchart (clj->js {:data datasource
;                       :depth 2
;                       :nodeContent :title})))
;
;(clj->js {:data         datasource
;          :depth        2
;          :node-content :title})

