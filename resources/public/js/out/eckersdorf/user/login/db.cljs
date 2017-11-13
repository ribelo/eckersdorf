(ns eckersdorf.user.login.db
  (:require [re-frame.core :as rf]))


(def login-state
  {:login/remember?         true
   :login/dialog-opened?    false
   :login/email-address     ""
   :login/error             nil
   :login/password          ""
   :login/invalid-password? nil})
