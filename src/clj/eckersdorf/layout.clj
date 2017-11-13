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
   (page/include-css "/css/eckersdorf.css")
   (page/include-css "https://cdnjs.cloudflare.com/ajax/libs/antd/2.12.3/antd.min.css")
   (page/include-js "https://code.jquery.com/jquery-3.2.1.min.js")
   (page/include-css "/assets/font-awesome/css/font-awesome.min.css")
   (page/include-js "/js/app.js")

   (page/include-css "/css/jquery.orgchart.min.css")
   (page/include-js "/js/jquery.orgchart.min.js")
   ;(page/include-js "$(function() {\n    var datascource = {\n      'name': 'Lao Lao',\n      'title': 'general manager',\n      'children': [\n        { 'name': 'Bo Miao', 'title': 'department manager' },\n        { 'name': 'Su Miao', 'title': 'department manager',\n          'children': [\n            { 'name': 'Tie Hua', 'title': 'senior engineer' },\n            { 'name': 'Hei Hei', 'title': 'senior engineer',\n              'children': [\n                { 'name': 'Pang Pang', 'title': 'engineer' },\n                { 'name': 'Xiang Xiang', 'title': 'UE engineer' }\n              ]\n            }\n          ]\n        },\n        { 'name': 'Yu Jie', 'title': 'department manager' },\n        { 'name': 'Yu Li', 'title': 'department manager' },\n        { 'name': 'Hong Miao', 'title': 'department manager' },\n        { 'name': 'Yu Wei', 'title': 'department manager' },\n        { 'name': 'Chun Miao', 'title': 'department manager' },\n        { 'name': 'Yu Tie', 'title': 'department manager' }\n      ]\n    };\n    $('#chart-container').orgchart({\n      'data' : datascource,\n      'depth': 2,\n      'nodeContent': 'title'\n    });\n  });")
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

