(ns eckersdorf.layout
  (:require [hiccup.core :refer :all]
            [hiccup.page :as page]
            [hiccup.element :refer [javascript-tag]]))

(defn base-head []
  [:head
   [:meta {:http-equiv "Content-Type"
           :content    "text/html; charset=UTF-8"}]
   [:meta {:name    "viewport"
           :content "width=device-width, initial-scale=1"}]
   [:title "eckersdorf"]])


(defn base-body []
  [:body
   {:style "margin: 0px;
            width: 100%;
            height: 100%;

            "}
   [:div {:id    "app"
          :style "width: 100%;
                      height: 100%;

                      "}
    "Loading App..."]
   ;(page/include-css "css/eckersdorf.css")
   (page/include-css "https://cdnjs.cloudflare.com/ajax/libs/antd/2.12.3/antd.min.css")
   (page/include-css "/assets/font-awesome/css/font-awesome.min.css")
   (page/include-js "/js/boundle.js")
   (page/include-js "/js/app.js")
   ])
(base-body)

(defn base-layout []
  (page/html5 {:lang  "pl"
               :style "width: 100%;
                       height: 100%;
                       overflow-x: hidden;
                       overflow-y: hidden;"}
              (base-head)
              (base-body)))

(defn home-page []
  (base-layout))

