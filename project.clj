(defproject eckersdorf "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0-beta4"]
                 [org.clojure/spec.alpha "0.1.143"]
                 [org.clojure/tools.reader "1.1.1"]
                 [org.clojure/data.csv "0.1.4"]
                 [org.clojure/tools.nrepl "0.2.13"]
                 [com.stuartsierra/component "0.3.2"]
                 [aleph "0.4.4"]
                 [manifold "0.1.6"]
                 [yada "1.2.9" :exclusions [commons-fileupload aleph manifold clj-time buddy]]
                 [bidi "2.1.2"]
                 [aero "1.1.2"]
                 ;clojure libraries
                 [com.taoensso/encore "2.92.0"]
                 [buddy "2.0.0"]
                 [hiccup "1.0.5"]
                 [clj-time "0.14.0"]
                 [com.taoensso/timbre "4.10.0"]
                 [com.fzakaria/slf4j-timbre "0.3.7"]
                 [org.slf4j/slf4j-api "1.7.25"]
                 [cheshire "5.8.0"]
                 [com.novemberain/monger "3.1.0" :exclusions [com.google.guava/guava]]
                 [funcool/cuerdas "2.0.4"]
                 [com.draines/postal "2.0.2"]
                 [progrock "0.1.2"]
                 ;clojurescript libraries
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/core.async "0.3.443"]
                 [com.cognitect/transit-cljs "0.8.243"]
                 [cljs-ajax "0.7.3"]
                 [reagent "0.8.0-alpha2" :exclusions [cljsjs/react cljsjs/react-dom]]
                 [re-frame "0.10.2"]
                 [antizer "0.2.2"]
                 ;[cljs-react-material-ui "0.2.50"]
                 ;[cljsjs/react "15.6.1-1"]
                 ;[cljsjs/react-dom "15.6.1-1"]
                 ;[cljsjs/react-transition-group "2.2.0-0"]
                 [day8.re-frame/http-fx "0.1.4"]
                 [com.andrewmcveigh/cljs-time "0.5.1"]
                 [kibu/pushy "0.3.8"]]
  :jvm-opts ["-server"]
  :min-lein-version "2.5.0"
  :main ^:skip-aot eckersdorf.core
  :source-paths ["src/clj" "src/cljc"]
  :resource-paths ["resources" "target/cljsbuild"]
  :target-path "target/%s"
  :plugins [[lein-cljsbuild "1.1.7"]]
  :clean-targets ^{:protect false} ["resources/public/js" ".repl" "target/cljsbuild"]
  :figwheel {:http-server-root "public"
             :nrepl-port       7002
             :css-dirs         ["resources/public/css"]
             :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :profiles {:uberjar {:omit-source  true
                       :prep-tasks   ["compile" ["cljsbuild" "once" "uberjar"]]
                       :cljsbuild    {:builds [{:source-paths ["src/cljc" "src/cljs" "env/prod/cljs"]
                                                :id           "uberjar"
                                                :compiler     {:output-to        "resources/public/js/app.js"
                                                               :optimizations    :advanced
                                                               :pretty-print     false
                                                               :closure-warnings {:externs-validation :off :non-standard-jsdoc :off}
                                                               :externs          ["react/externs/react.js"]

                                                               :closure-defines  {process.env/NODE_ENV "development"}
                                                               :npm-deps {:react     "15.6.2"
                                                                          :react-dom "15.6.2"
                                                                          :orgchart "2.0.7"}}}]}
                       :aot          :all
                       :uberjar-name "eckersdorf.jar"
                       :source-paths ["env/prod/clj"]}
             :prod    {:cljsbuild    {:builds [{:source-paths ["src/cljs" "src/cljc" "env/prod/cljs"]
                                                :id           "prod"
                                                :compiler     {:output-to        "resources/public/js/app.js"
                                                               :main             eckersdorf.app
                                                               :optimizations    :advanced
                                                               :pretty-print     false
                                                               :closure-warnings {:externs-validation :off :non-standard-jsdoc :off}
                                                               :externs          ["react/externs/react.js"]

                                                               :closure-defines  {process.env/NODE_ENV "production"}
                                                               :npm-deps         {:react     "15.6.2"
                                                                                  :react-dom "15.6.2"
                                                                                  :orgchart  "2.0.7"}}}]}

                       :source-paths ["env/prod/clj" "test/clj"]}
             :dev     {:dependencies [[binaryage/devtools "0.9.7"]
                                      [figwheel-sidecar "0.5.14"]
                                      [com.cemerick/piggieback "0.2.2"]
                                      [day8.re-frame/trace "0.1.11"]]
                       :plugins      [[lein-figwheel "0.5.14" :exclusions [org.clojure/clojure]]
                                      [lein-ancient "0.6.14"]]
                       :cljsbuild    {:builds [{:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
                                                :id           "eckersdorf"
                                                :compiler     {:output-to            "resources/public/js/app.js"
                                                               :output-dir           "resources/public/js/out"
                                                               :asset-path           "js/out"
                                                               :main                 eckersdorf.app
                                                               :source-map           true
                                                               :source-map-timestamp true
                                                               :optimizations        :none
                                                               :closure-defines      {"re_frame.trace.trace_enabled_QMARK_" true}
                                                               :preloads             [devtools.preload day8.re-frame.trace.preload]
                                                               :external-config      {:devtools/config {:features-to-install :all}}
                                                               :pretty-print         true
                                                               :npm-deps             {:react     "15.6.2"
                                                                                      :react-dom "15.6.2"
                                                                                      :orgchart  "2.0.7"}}}]}

                       :source-paths ["env/dev/clj" "test/clj"]}})
