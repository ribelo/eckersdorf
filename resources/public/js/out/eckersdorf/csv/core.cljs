(ns eckersdorf.csv.core
  (:require [clojure.string :as str]))

(defn- wrap-in-quotes [s]
  (str "\"" s "\""))

(defn- seperate [data separator quote?]
  (str/join separator
            (cond->> data
                     quote? (map wrap-in-quotes))))

(defn- write-data [data separator newline quote?]
  (str/join newline (map #(seperate % separator quote?) data)))

(def ^:private newlines
  {:lf "\n" :cr+lf "\r\n"})

(def ^:private newline-error-message
  (str ":newline must be one of [" (str/join "," (keys newlines)) "]"))

(defn write-csv [data & options]
  (let [{:keys [separator newline quote?] :or {separator ";" newline :lf quote? false}} options]
    (if-let [newline-char (get newlines newline)]
      (write-data data
                  separator
                  newline-char
                  quote?)
      (throw (js/Error. newline-error-message)))))
