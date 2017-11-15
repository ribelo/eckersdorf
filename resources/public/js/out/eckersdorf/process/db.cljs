(ns eckersdorf.process.db
  (:require [re-frame.core :as rf]))


(def process-state
  {:process/event       nil
   :process/name        nil
   :process/description nil})
