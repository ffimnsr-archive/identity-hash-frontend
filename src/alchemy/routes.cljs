(ns alchemy.routes
    (:require [reagent.core :as reagent]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [alchemy.views :as views]))

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'views/home-page))
(secretary/defroute "/privacy" []
  (session/put! :current-page #'views/privacy-page))
(secretary/defroute "/terms" []
  (session/put! :current-page #'views/terms-page))

(defn current-page []
  [:div [(session/get :current-page)]])

