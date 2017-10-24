(ns eckersdorf.utils)

(defn add-ns [m ns]
  (when m
    (reduce (fn [ret [k v]]
              (assoc ret (keyword (name ns) (name k)) v))
            {} m)))

(defn simplify-string [s]
  (let [replacement-list (partition 2 (interleave "ąćęłńóśźż" "acelnoszz"))]
    (reduce (fn [ret x] (apply clojure.string/replace ret x)) s replacement-list)))