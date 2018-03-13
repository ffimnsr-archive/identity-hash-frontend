(ns alchemy.views
  (:require [reagent.core :as reagent]
            [alchemy.partials :as partials]
            [alchemy.components.home :as home]
            [alchemy.components.privacy :as privacy]
            [alchemy.components.terms :as terms]))

;; -------------------------
;; Views

(defn home-page [] [home/view])
(defn privacy-page [] [privacy/view])
(defn terms-page [] [terms/view])
(defn not-found-page []
  [:div.alchemy.root
   [partials/header-partial-view]
   [:main.alchemy.content]
   [partials/footer-partial-view]])

