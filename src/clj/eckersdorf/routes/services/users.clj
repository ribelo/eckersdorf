(ns eckersdorf.routes.services.users
  (:require [clojure.spec.alpha :as s]
            [clojure.core.async :refer [go]]
            [schema.core :as schema]
            [yada.yada :as yada]
            [monger.collection :as mc]
            [eckersdorf.db.users :as users]
            [taoensso.timbre :as timbre]
            [taoensso.encore :as encore :refer [assoc-some]]
            [manifold.deferred :as d]
            [cuerdas.core :as str]
            [hiccup.core :as hiccup]
            [yada.jwt :as jwt]))

(defn users-routes [db]
  ["/users"
   [
    ["/users-list" (yada/resource
                     {:methods
                      {:post
                       {:produces   #{"application/json" "text/plain"}
                        :consumes   "application/x-www-form-urlencoded"
                        :parameters {:body {:user/object-id String
                                            :user/token     String}}
                        :response   (fn [ctx]
                                      (let [user-id (get-in ctx [:parameters :body :user/object-id])
                                            token (get-in ctx [:parameters :body :user/token])]
                                        (if (and (seq user-id) (seq token)
                                                 (users/valid-user-token? db user-id token)
                                                 (users/user-admin? db user-id))
                                          (let [result (d/deferred)]
                                            (d/success! result (users/users-list db))
                                            (or result (assoc (:response ctx) :status 500)))
                                          (assoc (:response ctx) :status 401))))}}})]
    ["/email-address-exists" (yada/resource
                               {:methods
                                {:post
                                 {:produces   #{"application/json"}
                                  :consumes   "application/x-www-form-urlencoded"
                                  :parameters {:body {:email-address schema/Str}}
                                  :response   (fn [ctx]
                                                (let [{:keys [email-address]} (get-in ctx [:parameters :body])]
                                                  (if-let [user (users/find-user-by-email-address db email-address)]
                                                    (select-keys user [:user/email-address :user/roles])
                                                    (assoc (:response ctx) :status 404 :body {:error "user not exists!", :email-address email-address}))))}}})]
    ;["/phone-number-exists" (yada/resource
    ;                          {:methods
    ;                           {:post
    ;                            {:produces   #{"application/json"}
    ;                             :consumes   "application/x-www-form-urlencoded"
    ;                             :parameters {:body {:phone-number schema/Str}}
    ;                             :response   (fn [ctx]
    ;                                           (let [{:keys [phone-number]} (get-in ctx [:parameters :body])]
    ;                                             (if-let [user (users/find-user-by-phone-number db phone-number)]
    ;                                               (select-keys user [:user/phone-number :user/roles])
    ;                                               (assoc (:response ctx) :status 404 :body {:phone-number phone-number, :error "user not exists!"}))))}}})]
    ["/login" (yada/resource
                {:methods
                 {:post
                  {:produces   #{"application/json" "text/plain"}
                   :consumes   "application/x-www-form-urlencoded"
                   :parameters {:body {:email-address schema/Str
                                       :password      schema/Str}}
                   :response   (fn [ctx]
                                 (let [{:keys [email-address password]} (get-in ctx [:parameters :body])]
                                   (if (users/correct-user-password? db email-address password)
                                     (let [user (users/find-user-by-email-address db email-address)
                                           token (users/user-token-by-email db email-address)] ;TODO
                                       (assoc (:response ctx) :body (assoc user :user/token token)))
                                     (assoc (:response ctx) :status 401))))}}})] ;TODO
    ["/register" (yada/resource
                   {:methods
                    {:post
                     {:produces   #{"application/json" "text/plain"}
                      :consumes   "application/x-www-form-urlencoded"
                      :parameters {:body {:email-address schema/Str
                                          :password      schema/Str
                                          :first-name    schema/Str
                                          :last-name     schema/Str}}
                      :response   (fn [ctx]
                                    (let [{:keys [email-address password first-name
                                                  last-name]} (get-in ctx [:parameters :body])]
                                      (if-not (users/find-user-by-email-address db email-address)
                                        (let [user (users/create-user db {:user/first-name    first-name
                                                                          :user/last-name     last-name
                                                                          :user/password      password
                                                                          :user/email-address email-address})]
                                          ;(postman/send-activation-email user)
                                          (dissoc user :user/password))
                                        (assoc (:response ctx) :status 500 :body {:error "user exists"}))))}}})]
    [["/activate/" :id] (yada/resource
                          {:methods
                           {:get
                            {:produces   #{"text/plain"}
                             :parameters {:path {:id schema/Str}}
                             :response   (fn [ctx]
                                           (let [{:keys [id]} (get-in ctx [:parameters :path])]
                                             (let [activation (users/activate-user-by-id db id)]
                                               (case activation
                                                 false (assoc (:response ctx) :status 401)
                                                 true (yada/redirect :eckersdorf.main-page)
                                                 nil (assoc (:response ctx) :status 404)))))}}})] ;TODO
    ;[["/" :id "/add-address"] (yada/resource
    ;                            {:methods
    ;                             {:put
    ;                              {:produces   #{"application/json" "text/plain"}
    ;                               :consumes   "application/x-www-form-urlencoded"
    ;                               :parameters {:path {:id schema/Str}
    ;                                            :body {:short-name    schema/Str
    ;                                                   :street-name   schema/Str
    ;                                                   :street-number schema/Str
    ;                                                   :house-number  schema/Str
    ;                                                   :city          schema/Str
    ;                                                   :zip-code      schema/Str
    ;                                                   :token         schema/Str}}
    ;                               :response   (fn [ctx]
    ;                                             (let [{:keys [id]} (get-in ctx [:parameters :path])
    ;                                                   address (-> (get-in ctx [:parameters :body])
    ;                                                               (dissoc :token)
    ;                                                               (->> (encore/map-keys #(keyword "address" (name %)))))
    ;                                                   token (get-in ctx [:parameters :body :token])]
    ;                                               (if (users/valid-user-token? db id token)
    ;                                                 (let [addresses (users/add-user-address db id address)]
    ;                                                   (or addresses (assoc (:response ctx) :status 500)))
    ;                                                 (assoc (:response ctx) :status 401))))}}})]
    ;[["/" :id "/remove-address"] (yada/resource
    ;                               {:methods
    ;                                {:put
    ;                                 {:produces   #{"application/json" "text/plain"}
    ;                                  :consumes   "application/x-www-form-urlencoded"
    ;                                  :parameters {:path {:id schema/Str}
    ;                                               :body {:short-name schema/Str
    ;                                                      :token      schema/Str}}
    ;                                  :response   (fn [ctx]
    ;                                                (let [{:keys [id]} (get-in ctx [:parameters :path])
    ;                                                      address-name (get-in ctx [:parameters :body :short-name])
    ;                                                      token (get-in ctx [:parameters :body :token])]
    ;                                                  (if (users/valid-user-token? db id token)
    ;                                                    (let [addresses (users/remove-user-address db id address-name)]
    ;                                                      (or addresses (assoc (:response ctx) :status 500)))
    ;                                                    (assoc (:response ctx) :status 401))))}}})]
    ;[["/" :id "/addresses"] (yada/resource
    ;                          {:methods
    ;                           {:get
    ;                            {:produces   #{"application/json" "text/plain"}
    ;                             :parameters {:path {:id schema/Str}
    ;                                          :body {:token schema/Str}}
    ;                             :response   (fn [ctx]
    ;                                           (let [{:keys [id]} (get-in ctx [:parameters :path])
    ;                                                 token (get-in ctx [:parameters :body :token])]
    ;                                             (if (users/valid-user-token? db id token)
    ;                                               (let [user (users/find-user-by-id db id)
    ;                                                     addresses (:user/addresses user)]
    ;                                                 addresses)
    ;                                               (assoc (:response ctx) :status 401))))}}})]
    [["/" :id "/update"] (yada/resource
                           {:methods
                            {:put
                             {:consumes   "application/x-www-form-urlencoded"
                              :produces   #{"application/json" "text/plain"}
                              :parameters {:path {:id schema/Str}
                                           :body {:first-name    schema/Str
                                                  :last-name     schema/Str
                                                  :email-address schema/Str
                                                  :token         schema/Str}}
                              :response   (fn [ctx]
                                            (let [{:keys [id]} (get-in ctx [:parameters :path])
                                                  token (get-in ctx [:parameters :body :token])
                                                  user (-> (get-in ctx [:parameters :body])
                                                           (dissoc :token)
                                                           (->> (encore/map-keys #(keyword "user" (name %)))))]
                                              (if (users/valid-user-token? db id token)
                                                (if-let [user (users/update-user db id user)]
                                                  user
                                                  (assoc (:response ctx) :status 500))
                                                (assoc (:response ctx) :status 401))))}}})]]])
