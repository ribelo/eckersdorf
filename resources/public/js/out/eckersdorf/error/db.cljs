(ns eckersdorf.error.db
  (:require [re-frame.core :as rf]))


(def error-state
  {:error/event       nil
   :error/name        nil
   :error/description nil})
