(ns alchemy.partials)

;; -------------------------
;; Partials

(defn header-partial-view []
  (let [logo {:alt "Identity Hash" :src "/images/full-identity.png"}
        home {:href "/"}
        headline {:data-scroll "" :href "#home"}
        about {:data-scroll "" :href "#about"}
        enterprise {:data-scroll "" :href "#enterprise"}
        consumers {:data-scroll "" :href "#consumers"}
        get-identity {:data-scroll "" :href "#get-identity"}]
    [:header.alchemy.header
     [:nav.ui.borderless.large.top.fixed.menu {:data-scroll-header ""}
      [:section.ui.container
       [:a.header.item home [:img.logo logo]]
       [:div.right.menu
        [:a.item headline "HOME"]
        [:a.item about "ABOUT"]
        [:a.item enterprise "ENTERPRISE"]
        [:a.item consumers "CONSUMERS"]
        [:a.item get-identity "GET IDENTITY"]]]]]))

(defn footer-partial-view []
  (let [about {:href "/about"}
        blog {:href "https://medium.com/identity-hash"}
        contact-us {:href "https://goo.gl/forms/e8G4XEIvAC7aw6mj2"}
        terms {:href "/terms"}
        privacy {:href "/privacy"}
        facebook {:href "https://facebook.com/identity.hash"}
        linkedin {:href "https://www.linkedin.com/company/identity-hash"}
        medium {:href "https://medium.com/identity-hash"}]
  [:footer.alchemy.footer
   [:section.ui.container
    [:section.ui.container.basic.segment
     [:section.ui.stackable.divided.equal.height.grid
      [:section.three.wide.column
       [:h4.ui.header "Identity Hash"]
       [:nav.ui.link.list
        [:a.item blog "Blog"]
        [:a.item contact-us "Contact us"]]]
       [:section.three.wide.column
        [:h4.ui.header "Digital Identity"]
        [:nav.ui.link.list
         [:a.item "Trust & Safety"]
         [:a.item "Web of Trust"]
         [:a.item "Referrals"]]]
       [:section.three.wide.column
        [:h4.ui.header "Electronic Wallet"]
        [:nav.ui.link.list
         [:a.item "Sending Payments"]
         [:a.item "Send and Receive Money"]
         [:a.item "Gather Rewards"]
         [:a.item "Get Discounts"]
         [:a.item "Responsible Payment"]]]
      [:section.seven.wide.column
       [:h4.ui.header "Identity Hash"]
       [:div.ui.link.list
        [:div.item "Seamless identity verification and payment solutions"]
        [:br]
        [:div.item "Calle Estacion, Brgy. Pio del Pilar, Makati City"]
        [:div.item "Phone: +63 960-3159"]
        [:div.item "Email: hello@identity-hash.online"]]]]]
    [:div.ui.divider]
    [:section.ui.basic.container.segment
     [:div.ui.horizontal.list
      [:div.copyright.item "© 2017 Identity Hash, LLC. All rights reserved and images from Icons8."]]
     [:nav.ui.right.floated.horizontal.link.list
      [:a.item terms "Terms & Conditions"]
      [:a.item privacy "Privacy"]
      [:a.item facebook [:i.facebook.f.icon]]
      [:a.item linkedin [:i.linkedin.icon]]
      [:a.item medium [:i.medium.icon]]]]]]))

