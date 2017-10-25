(ns eckersdorf.work-schedule.utils
  (:require [cljs-time.core :as dt]
            [cljs-time.coerce :as dtc]
            [cljs-time.periodic :as dtp]))


(fn generate-works [work start end]
  (mapv #(assoc work :work-schedule/datetime (dtc/to-string %))
        (dtp/periodic-seq start end (dt/hours 1))))