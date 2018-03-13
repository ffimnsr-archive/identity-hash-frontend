(defproject alchemy "0.1.0-SNAPSHOT"
  :description "Identity Hash frontend app"
  :url "https://identity-hash.online"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0-alpha17" :scope "provided"]
                 [org.clojure/clojurescript "1.9.562" :scope "provided"]
                 [org.clojure/core.async "0.3.443" :exclusions [org.clojure/tools.reader]]
                 [reagent "0.6.2"]
                 [reagent-utils "0.2.1"]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.2.0" :exclusions [org.clojure/tools.reader]]]

  :plugins [[lein-figwheel "0.5.10"]
            [lein-cljsbuild "1.1.6" :exclusions [[org.clojure/clojure]]]]

  :min-lein-version "2.5.0"

  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]
   [:cljsbuild :builds :release :compiler :output-dir]
   [:cljsbuild :builds :release :compiler :output-to]]

  :resource-paths ["public"]

  :figwheel {:http-server-root "."
             :nrepl-port 7002
             :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]
             :repl false
             :css-dirs ["public/css"]}

  :cljsbuild {:builds {:app
                       {:source-paths ["src" "env/dev/cljs"]
                        :compiler
                        {:main "alchemy.dev"
                         :output-to "public/js/app.js"
                         :output-dir "public/js/out"
                         :asset-path "js/out"
                         :source-map true
                         :source-map-timestamp true
                         :optimizations :none
                         :pretty-print  true}
                        :figwheel
                        {:open-urls ["http://localhost:3449/index.html"]}}
                       :release
                       {:source-paths ["src" "env/prod/cljs"]
                        :compiler
                        {:main "alchemy.prod"
                         :externs ["externs/typedef.js"]
                         :output-to "public/js/app.js"
                         :output-dir "public/js/rel"
                         :asset-path "js/rel"
                         :optimizations :advanced
                         :pretty-print false}}}}

  :aliases {"release" ["do" "clean" ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.9"]
                                  [org.clojure/tools.nrepl "0.2.12"]
                                  [com.cemerick/piggieback "0.2.2-SNAPSHOT"]]}})
