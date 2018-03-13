(ns alchemy.components.privacy
  (:require [reagent.core :as reagent]
            [alchemy.partials :as partials]))

(defn policy-summary []
  [:div.ui.basic.segment
   [:h2.ui.center.aligned.header "POLICY SUMMARY"]
   [:div.ui.section.divider]
   [:h3.ui.header "Personal Data collected for the following purposes and using the following services:"]
   [:div.ui.stackable.two.column.grid
    [:div.column>h4.ui.header
     [:i.user.icon]
     [:div.content
      "Access to third party accounts"
      [:div.sub.header
       [:h5.ui.grey.header "Facebook account access"]
       "Permissions: About Me, Access Friend Lists, Birthday, Email and Publish App Activity"]]]
    [:div.column>h4.ui.header
     [:i.line.chart.icon]
     [:div.content
      "Analytics"
      [:div.sub.header
       [:h5.ui.grey.header "Analytics collected directly"]
       "Personal Data: Cookies and Usage Data"]]]
    [:div.column>h4.ui.header
     [:i.mail.icon]
     [:div.content
      "Contacting the user"
      [:div.sub.header
       [:h5.ui.grey.header "Contact form"]
       "Personal Data: city, country, email address, first name and last name"]]]
    [:div.column>h4.ui.header
     [:i.map.icon]
     [:div.content
      "Location-based interactions"
      [:div.sub.header
       [:h5.ui.grey.header "Geolocation"]
       "Personal Data: geographic position"]]]]])

(defn policy-full []
  [:div.ui.basic.segment
   [:h2.ui.center.aligned.header "FULL POLICY"]
   [:div.ui.section.divider]
   [:h3.ui.header "Data Controller and Owner"]
   [:div.ui.basic.segment
    [:h4.ui.header "Types of Data collected"]
    [:div.ui.justified.container
     "Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Cookies, Usage Data, first name, last name, country, email address, city and geographic position."[:br][:br]
     "Other Personal Data collected may be described in other sections of this privacy policy or by dedicated explanation text contextually with the Data collection."[:br]
     "The Personal Data may be freely provided by the User, or collected automatically when using this Application."[:br][:br]
     "Any use of Cookies - or of other tracking tools - by this Application or by the owners of third party services used by this Application, unless stated otherwise, serves to identify Users and remember their preferences, for the sole purpose of providing the service required by the User."[:br][:br]
     "Failure to provide certain Personal Data may make it impossible for this Application to provide its services."[:br][:br]
     "Users are responsible for any Personal Data of third parties obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner."]]
   [:div.ui.section.divider]
   [:div.ui.basic.segment
    [:h4.ui.header "Mode and place of processing the Data"]
    [:div.ui.basic.segment
     [:h5.ui.grey.header "Methods of processing"]
     [:div.ui.justified.container
      "The Data Controller processes the Data of Users in a proper manner and shall take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data."[:br][:br]
      "The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Data Controller, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of the site (administration, sales, marketing, legal, system administration) or external parties (such as third party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Data Controller at any time."]
     [:h5.ui.grey.header "Place"]
     [:div.ui.justified.container
      "The Data is processed at the Data Controller's operating offices and in any other places where the parties involved with the processing are located. For further information, please contact the Data Controller."]
     [:h5.ui.grey.header "Retention time"]
     [:div.ui.justified.container
      "The Data is kept for the time necessary to provide the service requested by the User, or stated by the purposes outlined in this document, and the User can always request that the Data Controller suspend or remove the data."]]]
   [:div.ui.section.divider]
   [:div.ui.basic.segment
    [:h4.ui.header "The use of the collected Data"]
    [:div.ui.justified.container
     "The Data concerning the User is collected to allow the Owner to provide its services, as well as for the following purposes: Access to third party accounts, Analytics, Contacting the User and Location-based interactions."[:br][:br]
     "The Personal Data used for each purpose is outlined in the specific sections of this document."]]
   [:div.ui.section.divider]
   [:div.ui.basic.segment
    [:h4.ui.header "Facebook permissions asked by this Application"]
    [:div.ui.justified.container
     "This Application may ask for some Facebook permissions allowing it to perform actions with the User's Facebook account and to retrieve information, including Personal Data, from it. For more information about the following permissions, refer to the Facebook permissions documentation and to the Facebook privacy policy."[:br]
     "The permissions asked are the following:"]
    [:div.ui.basic.segment
     [:h5.ui.grey.header "Basic information"]
     [:div.ui.justified.container
      "By default, this includes certain User’s Data such as id, name, picture, gender, and their locale. Certain connections of the User, such as the Friends, are also available. If the User has made more of their Data public, more information will be available."]
     [:h5.ui.grey.header "About Me"]
     [:div.ui.justified.container
      "Provides access to the 'About Me' section of the profile."]
     [:h5.ui.grey.header "Access Friend Lists"]
     [:div.ui.justified.container
      "Provides access to any friend lists the User created."]
     [:h5.ui.grey.header "Birthday"]
     [:div.ui.justified.container
      "Provides access to the birthday."]
     [:h5.ui.grey.header "Email"]
     [:div.ui.justified.container
      "Provides access to the User's primary email address."]
     [:h5.ui.grey.header "Publish App Activity"]
     [:div.ui.justified.container
      "Allows the app to publish to the Open Graph using Built-in Actions, Achievements, Scores, or Custom Actions. The app can also publish other activity which is detailed in the Facebook's Publishing Permissions document."]]]
   [:div.ui.section.divider]
   [:div.ui.basic.segment
    [:h4.ui.header "Additional information about Data collection and processing"]
    [:div.ui.basic.segment
     [:h5.ui.grey.header "Legal action"]
     [:div.ui.justified.container
      "The User's Personal Data may be used for legal purposes by the Data Controller, in Court or in the stages leading to possible legal action arising from improper use of this Application or the related services."[:br]
      "The User declares to be aware that the Data Controller may be required to reveal personal data upon request of public authorities."]
     [:h5.ui.grey.header "Additional information about User's Personal Data"]
     [:div.ui.justified.container
      "In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular services or the collection and processing of Personal Data upon request."]
     [:h5.ui.grey.header "System logs and maintenance"]
     [:div.ui.justified.container
      "For operation and maintenance purposes, this Application and any third party services may collect files that record interaction with this Application (System logs) or use for this purpose other Personal Data (such as IP Address)."]
     [:h5.ui.grey.header "Information not contained in this policy"]
     [:div.ui.justified.container
      "More details concerning the collection or processing of Personal Data may be requested from the Data Controller at any time. Please see the contact information at the beginning of this document."]
     [:h5.ui.grey.header "The rights of Users"]
     [:div.ui.justified.container
      "Users have the right, at any time, to know whether their Personal Data has been stored and can consult the Data Controller to learn about their contents and origin, to verify their accuracy or to ask for them to be supplemented, cancelled, updated or corrected, or for their transformation into anonymous format or to block any data held in violation of the law, as well as to oppose their treatment for any and all legitimate reasons. Requests should be sent to the Data Controller at the contact information set out above."[:br]
      "This Application does not support “Do Not Track” requests."[:br]
      "To determine whether any of the third party services it uses honor the “Do Not Track” requests, please read their privacy policies."]
     [:h5.ui.grey.header "Changes to this privacy policy"]
     [:div.ui.justified.container
      "The Data Controller reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. If a User objects to any of the changes to the Policy, the User must cease using this Application and can request that the Data Controller remove the Personal Data. Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data Controller has about Users."]]]
   [:div.ui.section.divider]
   [:div.ui.basic.segment
    [:h4.ui.header "Contact us"]
    "If there are any questions regarding this privacy policy, you may contact us using the information below. Series of May 5, 2017."]])

(defn view-render []
  [:div.alchemy.root
   [partials/header-partial-view]
   [:main.alchemy.content
    [:div#privacy.ui.container
     [:h1.ui.header "Privacy Policy"]
     [:div.ui.divider]
     [policy-summary]
     [:div.ui.divider]
     [policy-full]
     [:div.ui.divider]]]
   [partials/footer-partial-view]])

(defn view []
  (reagent/create-class
    {:reagent-render view-render}))
