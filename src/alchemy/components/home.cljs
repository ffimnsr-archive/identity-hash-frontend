(ns alchemy.components.home
  (:require [reagent.core :as reagent]
            [alchemy.partials :as partials]))

(defn section-home []
  [:div#home
   [:div#particles-js]
   [:div.ui.container
    [:div.wow.fadeInDown
     [:h1.ui.header.wow.fadeInDown "Identity Hash"
      [:div.sub.header
       "Seamless identity verification and payment solutions." [:br]
       "An identity for each individual + an e-wallet for the masses."]]]
    [:div.wow.fadeInUp [:a.ui.inverted.large.basic.button {:data-scroll "" :href "/#get-identity"} "Get the app now"]]]])

(defn section-about []
  [:div#about
   [:div.ui.container
    [:div.ui.grid
     [:div.two.column.row
      [:div.column.wow.fadeInLeft
       [:img.ui.centered.image {:alt "about" :src "/images/import/about.png"}]]
      [:div.column.wow.fadeInRight
       [:h2.ui.header "Platform for the Billions"]
       [:p "Identity Hash is a platform where users from different walks of life get an equal identity. An identity that will give them a chance, a voice to be heard, be known, and be secured. We're connecting different channels like government, private institutions and some international consensus to simplify and automate the process of identity verification. By doing this we give voice to people that are not being listed, to be known and have an identity and for those under bank to have secure way of connecting to the future."]]]
     [:div.three.column.row
      [:div.column.wow.fadeInLeft
       [:h2.ui.header "For Developers"]
       [:p "A platform for developers made by developers. Developers can connect to the APIs to create their own platform that rely in secure identity verification platform. We love developers and open-source."]]
      [:div.column.wow.fadeInUp
       [:h2.ui.header "For Businesses"]
       [:p " This is the right platform for identity verification and payment solution as we will help you scale up and keep your perimeter secure. Transaction privacy and automation will keep your services fast and secure."]]
      [:div.column.wow.fadeInRight
       [:h2.ui.header "For Everyone"]
       [:p "It is built for everyone in regards of race, color, nationality, gender, and personal views. All data will be keep in a semi-decentralized cloud servers and will be kept in watch 24/7.  We value your privacy."]]]
     [:div.one.column.row
      [:div.column]]]]])

(defn section-features []
  [:section
   [:div#feature1
    [:div.ui.container
     [:div.ui.two.column.grid
      [:div.column.wow.fadeInLeft
       [:h2.ui.header "Ease Identity Verification"]
       [:p "User are given multiple options to verify their identity, one of it is through KYC (Know Your Customer) process."]]
      [:div.column.wow.fadeInRight
       [:img.ui.centered.image {:alt "feature_1" :src "/images/import/feature_1.png"}]]]]]
   [:div#feature2
    [:div.ui.container
     [:div.ui.two.column.grid
      [:div.column.wow.fadeInLeft
       [:img.ui.centered.image {:alt "feature_2" :src "/images/import/feature_2.png"}]]
      [:div.column.wow.fadeInRight
       [:h2.ui.header "Immutable Transactions"]
       [:p "All transactions are stored on a decentralized immutable transaction ledger."]]]]]
   [:div#feature3
    [:div.ui.container
     [:div.ui.two.column.grid
      [:div.column.wow.fadeInLeft
       [:h2.ui.header "Scale Up"]
       [:p "From small medium enterprise to large corporate retail establishments, can now receive payments and issue digital receipts without the need for cash registers."]]
      [:div.column.wow.fadeInRight
       [:img.ui.centered.image {:alt "feature_3" :src "/images/import/feature_3.png"}]]]]]
   [:div#feature4
    [:div.ui.container
     [:div.ui.two.column.grid
      [:div.column.wow.fadeInLeft
       [:img.ui.centered.image {:alt "feature_4" :src "/images/import/feature_4.png"}]]
      [:div.column.wow.fadeInRight
       [:h2.ui.header "Seamless Money Transfer"]
       [:p "Sending and receiving money can now be done with a tap of your phone."]]]]]
   [:div#feature5
    [:div.ui.container
     [:div.ui.two.column.grid
      [:div.column.wow.fadeInLeft
       [:h2.ui.header "Track Spendings"]
       [:p "Analyze and track your expenditure based on your transaction logs."]]
      [:div.column.wow.fadeInRight
       [:img.ui.centered.image {:alt "feature_5" :src "/images/import/feature_5.png"}]]]]]])

(defn section-enterprise []
  [:div#enterprise
   [:div.ui.container
    [:div.ui.grid.wow.fadeInUp
     [:div.row
      [:div.column [:h2.ui.header "We're Enterprise Ready!"]]]
     [:div.two.column.row
      [:div.column
       [:img.ui.centered.image {:alt "automation" :src "/images/import/automation.png"}]
       [:h2.ui.header "Automate & Streamline"]
       [:p "Automate batch processing of transactions with a push of a button. Also, create reports base on generated analytics and streamline the long process of identity verification that may take several days to just minutes."]]
      [:div.column
       [:img.ui.centered.image {:alt "data_driven" :src "/images/import/data_driven.png"}]
       [:h2.ui.header "Data Driven APIs"]
       [:p "Connect to our APIs and create your own platform that rely in a secure identity verification platform. All transactions that will be created will be kept in a secure place for auditing and generating reports. We will assure the data you get is validated and secured."]]]
     [:div.three.column.row
      [:div.column]
      [:div.column
       [:a.ui.inverted.fluid.massive.basic.button {:data-scroll "" :href "https://calendly.com/identity-hash/product-demo"}
        [:i.calendar.icon]
        "Book a Demo"]]
      [:div.column]]]]])

(defn section-topup []
  [:div#topup
   [:div.ui.container.wow.fadeInUp
    [:img.ui.centered.image {:alt "topup" :src "/images/import/topup.png"}]]])

(defn section-consumers []
  [:div#consumers
   [:div.ui.container
    [:div.ui.three.column.grid
     [:div.three.column.row
      [:div.column.wow.fadeInLeft
       [:section
        [:img.ui.centered.image {:alt "consumers_1" :src "/images/import/consumers_1.png"}]
        [:h2.ui.header "Put The Power In Your Hands"]
        [:p "Automate and track every transaction within the reach of your hands. Consumers can schedule payment transaction and create a freeze account that will limit transactions per day."]]]
      [:div.column.wow.fadeInUp
       [:img.ui.centered.image {:alt "iphone_mockup" :src "/images/import/iphone_mockup.png"}]]
      [:div.column.wow.fadeInRight
       [:section
        [:img.ui.centered.image {:alt "consumers_2" :src "/images/import/consumers_2.png"}]
        [:h2.ui.header "First Class Customer Support"]
        [:p "We dedicate first class support on all our consumers. We value each customers privacy and security. All feedback and issue will be track and be valued."]]]]]]
   [section-topup]])

(defn section-get-identity []
  [:div#get-identity
   [:div.ui.container
    [:div.ui.two.column.grid
     [:div.column.wow.fadeInUp
      [:h2.ui.header "Get Identity"]
      [:p "Identity Hash is now available on both Google Play and App Store."]
      [:nav.ui.horizontal.list
       [:a.item [:img.ui.image {:alt "google_play_badge" :src "/images/google_play_badge.png"}]]
       [:a.item [:img.ui.image {:alt "app_store_badge" :src "/images/app_store_badge.png"}]]]]
     [:div.column.wow.fadeInRight
      [:img.ui.centered.image {:alt "get-identity" :src "/images/import/get-identity.png"}]]]]])

(defn section-meet-sophia []
  [:div#meet-sophia
   [:div.ui.container
    [:div.ui.two.column.grid
     [:div.column.wow.fadeInLeft
      [:h2.ui.header "Meet Sophia"]
      [:p "Use our integrated system to check your wallet balance using your favorite messaging app. Now, you can do transaction inside Facebook Messenger app."]
      [:ul
       [:li "Use Messenger Codes to verify a persons identity"]
       [:li "Verify other persons identity"]
       [:li "Check your wallet balance"]
       [:li "Contact our support help desk"]
       [:li "Submit feedback"]]
      [:a.ui.violet.large.basic.button {:href "https://m.me/identity.hash"} "Start using Messenger now"]]
     [:div.column.wow.fadeInRight
      [:img.ui.centered.image {:alt "messenger_mock" :src "/images/messenger_mock.gif"}]]]]])

(defn section-investors []
  [:div#investors
   [:div.ui.container.wow.fadeInUp
    [:h2.ui.header "Partners & Investors"]
    [:div.ui.container
     [:a.swap {:href "/"}
      [:img.ui.centered.large.image {:alt "logo-ovh-gray" :src "/images/logo-ovh-avec-gray.png"}]
      [:img.ui.centered.large.image {:alt "logo-ovh-colored" :src "/images/logo-ovh-avec-colored.png"}]]]]])

(defn view-did-mount []
  (.load js/particlesJS "particles-js" "/others/pjs-config.json")
  (.init (js/WOW.)))

(defn view-render []
  [:div.alchemy.root
   [partials/header-partial-view]
   [:main.alchemy.content
    [section-home]
    [section-about]
    [section-features]
    [section-enterprise]
    [section-consumers]
    [section-get-identity]
    [section-meet-sophia]
    [section-investors]]
   [partials/footer-partial-view]])

(defn view []
  (reagent/create-class
    {:component-did-mount view-did-mount
     :reagent-render view-render}))
