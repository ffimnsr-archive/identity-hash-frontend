(ns alchemy.components.terms
  (:require [reagent.core :as reagent]
            [alchemy.partials :as partials]))

(defn terms-of-use []
  [:section
   [:h1.ui.header "Terms of Use"]
   [:div.ui.divider]
   [:div.ui.justified.container
    "PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES AND OBLIGATIONS. THESE INCLUDE VARIOUS LIMITATIONS AND EXCLUSIONS, A CLAUSE THAT GOVERNS THE JURISDICTION AND VENUE OF DISPUTES, AND OBLIGATIONS TO COMPLY WITH APPLICABLE LAWS AND REGULATIONS."]
   [:div.ui.divider]
   [:div.ui.justified.container
    "The following Terms of Use govern the access, viewing or use by you (hereinafter referred to as the 'User' or 'You') of Identity Hash's application services (hereinafter referred to as the 'Application' or 'Site') and Application Program Interface (hereinafter referred to as the 'API') and all its related features and functionalities (hereinafter referred to as the 'Service'). The Application and API are owned and operated by Identity Hash, LLC., a company with its registered office at Calle Estacion, Makati City, Philippines (hereinafter referred to as the 'Company')."[:br][:br]
    "By accepting the terms herein, or by accessing, viewing or using the Application, you agree to be bound by these Terms of Use and they constitute your binding legal obligations towards the Company. These Terms of Use may be modified at any time by the Company by posting the changes on the website and you agree that it shall be your responsibility to ascertain the changes to the Terms of Use by visiting the Terms of Use from time to time. Any modified terms shall be applicable to your use of the Application without need for any further consent. If you do not agree to the Terms of Use, you should not access, view or use the Application."]
   [:div.ui.basic.segment
    [:h4.ui.grey.header "1. Key Terms"]
    [:div [:b "Privacy policy"] " shall mean the " [:a {:href "/#/privacy"} "Privacy Policy"] "."]
    [:div [:b "User"] " or " [:b "You"] " shall include any individual who is registered as a User in accordance with these Terms of Use."]
    [:div [:b "User Information"] " shall mean any information provided by the User via the Application including but not limited to name, date of birth, identity proof, telephone number, email address, physical address, employment documents and other similar details."]
    [:div [:b "Terms of Use"] " shall mean the terms of use contained herein."]
    [:h4.ui.grey.header "2. API and Services Access"]
    [:div
     "Business partners may access their data via API. Any use of the API, including use of the API through a third-party product that accesses the Service, is bound by the terms of this agreement plus the following specific terms:"
     [:ul
      [:li "You expressly understand and agree that the Company shall not be liable for any damages or losses resulting from your use of the API or third-party products that access data via the API."]
      [:li "Abuse or excessively frequent requests to the Service via the API may result in the temporary or permanent suspension of your account's access to the API. The Company, in its sole discretion, will determine abuse or excessive usage of the API. The Company will make a reasonable attempt via email to warn the account owner prior to suspension."]]]
    [:h4.ui.grey.header "3. Application Access and User Registration"]
    [:div.ui.justified.container
     "You agree and understand that this application and the contents are intended for people who are of the age of 18 years or above. You hereby represent that you are 18 years of age or above and competent to contract or that you are represented by a parent or your legal guardian. You understand that this Application is intended for individual personal use only."[:br][:br]
     "To the extent that you are required to provide information in order to use the Application, you understand and undertake that you will provide accurate information including User Information as part of the sign up and application process."[:br][:br]
     "To the extent that you have provided information to use the Application, you represent that you have all rights required to provide the information that you have provided to the Application, including the User Information and represent that it is true and accurate."[:br][:br]
     "All User Information will be used and processed in accordance with these Terms of Use and the Privacy Policy. You acknowledge and agree that you have been provided with unrestricted access to the Privacy Policy and that it is your responsibility to read and understand the Privacy Policy. In the event you disagree with anything set forth in the Privacy Policy, it is your responsibility to bring it to the Company's notice using the notification mechanism set out in the Privacy Policy."[:br][:br]
     "You hereby grant the Company has the right to use the User Information for the furtherance of this Terms of Use and to store it and use it in a manner (either singularly or as an aggregate with information provided by other users on the Application) that improves features and functionalities of the Application or for undertaking any other analytics in relation to such information."[:br][:br]
     "You will be solely responsible for your acts on the Application including those conducted under the username assigned to you."[:br]
     "You understand and agree that the Company may, in its sole discretion, terminate your access to the Application without notice and you waive any right to claim access to the Application or any other claim that you may have. Any data of your usage may be retained or deleted at the Company's sole discretion."]
    [:h4.ui.grey.header "4. Prohibited Use"]
    [:div
     "In relation to the use and access of the Application its content and features, you agree and undertake not to:"
     [:ul
      [:li "re-sell the usage or services of the Application;"]
      [:li "upload, transmit or publish any information on behalf of a third party, including any User Information of any person other than you;"]
      [:li "impersonate another person;"]
      [:li "upload, transmit, email or publish any information or material which is harmful, threatening, abusive, libelous, obscene, derogatory (in any form), defamatory or libelous, discriminatory;"]
      [:li "racially or ethnically objectionable or contains pornography or encourages money laundering or gambling;"]
      [:li "violate the privacy of any person;"]
      [:li "upload, transmit, email or publish any information or material which is harmful to minors;"]
      [:li "upload, transmit, email or publish any information or material which threatens the unity, integrity, defence, security or sovereignty of the country in which you are resident or accessing the Application from, friendly relations with foreign countries, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation;"]
      [:li "upload, transmit or publish any viruses or other malware, to corrupt, interrupt, limit, destroy or otherwise impact the Application, the Company's computer systems, or the computer systems of other Users or third party systems;"]
      [:li "upload transmit or publish anything which you do not have the rights to or any material which infringes the intellectual property rights (in whatever form) of any third party;"]
      [:li "use the Application in any manner which is not permitted under these Terms of Use or in any manner which is illegal or unethical"]
      [:li "access the Application in any unauthorized manner, including by hacking or using log in credentials of any other User or using bots"]
      [:li "use the Application for any unauthorized marketing purposes or for sending any unsolicited materials or advertisements"]
      [:li "use the Application for any purpose that is prohibited under applicable law, including the prohibitions set forth in the Information Technology (Intermediary Guidelines) Rules, 2011."]]]
    [:h4.ui.grey.header "5. Intellectual Property"]
    [:div
     "You agree and understand that:"
     [:ul
      [:li "the contents of the Application including but not limited to the information, logos, designs, databases, arrangement of databases, user interfaces, response formats, software, audio, pictures, logos, icons, are the sole property of the Company or its licensors. All intellectual property in and to the Application and its contents and functionalities shall vest solely with the Company or its licensors."]
      [:li "save for the limited right to access and use the Application in accordance with the Terms of Use, on a non-exclusive and non-transferable basis, there are no other rights being granted to you in the Application or any of the contents and functionalities."]
      [:li "to the extent required, you grant to the Company a non-exclusive, royalty free, worldwide, transferrable, sub-licensable right to host, display, demonstrate, publicly perform, use, reproduce, format, and distribute any content, posts, emails, uploads, materials, trademarks, trade names and any of Your intellectual property which You have provided to the Company or on the Application."]
      [:li "any content uploaded by you may be displayed and reproduced by the Company in any manner it deems fit."]
      [:li "you have no right to make any copies of the whole or part of this Application or any of the content therein."]
      [:li "you have no rights to remove, modify (including removing any copyright notices or proprietary markings) any part of the Application save for any User Information that belongs to you."]
      [:li "you have no right to use any search mechanisms other than that provided on the Application and you will not use any web-crawler or any data harvesting tools to harvest data of any sort from the Application."]]]
    [:h4.ui.grey.header "6. Disclaimers"]
    [:div
     "The Company provides no guarantee for validity and accurateness of any information published on the Application. Further, you understand and agree that it is at your own discretion and based on your judgment that you use the Application."[:br]
     "The Company does not represent in any manner that:"
     [:ul
      [:li "the information, data or contents of the Application are accurate"]
      [:li "the Application will be available at all times and will operate error free or that there will be uninterrupted access and service"]
      [:li "the integrity of the information on the Application or information you upload will be maintained"]
      [:li "the Application or any content is free from viruses or other malware."]
      [:li "you agree and understand that the contents and services on the Application are available on an 'as is' basis."]
      [:li "you expressly release the Company and its director, officers and representatives from any cost, damage, liability or other consequence of any Use of the Application by You or the actions of the Users of the Application."]
      [:li "subject to applicable laws, the Company hereby disclaims all warranties, whether express or implied, in relation to the Application, its contents and functionalities, including but not limited to warranties of merchantability or fitness for a particular purpose. Where applicable laws do not permit the disclaimer of warranties to the extent detailed above, the said warranties are disclaimed to the maximum limit permitted by applicable law."]]
     "The Company reserves the right to remove any content posted on the Application and assumes no liability that may arise to you or any third party for such conduct of the Company."[:br][:br]
     "The Application may contain links to third party applications. The Company shall not be responsible in any manner for the contents of these third party applications and if you should choose to use the link to view the third party applications, you choose to do so at your own risk. The Company does not endorse the contents nor in any manner represent the accuracy or correctness of information on such third party applications."]
    [:h4.ui.grey.header "7. Usage fee"]
    [:div
     "Certain fee shall be charged for the use of the Application per se."]
    [:h4.ui.grey.header "8. Indemnity"]
    [:div
     "You agree to indemnify and hold harmless the Company, its directors, shareholders, officers, employees and agents, against any claims, losses, damages or costs arising from (i) your use of the Application and its contents, (ii) your breach of these Terms of Use or (iii) any acts or omission of yours in relation to the Application and its use thereof, including but not limited to postings."]
    [:h4.ui.grey.header "9. Limitation of Liability"]
    [:div
     "In no event shall the Company be liable for any loss of profits (anticipated or real), loss of business, loss of reputation, loss of data, loss of goodwill, any business interruption or any direct, indirect, special, incidental, consequential, punitive, tort or other damages, however caused, whether or not it has been advised of the possibility of such damages."]
    [:h4.ui.grey.header "10. Complaints"]
    [:div.ui.justified.container
     "The Company takes matters related to intellectual property rights and privacy very seriously. Should you have any complaints regarding the Application, including but not limited to abuse and misuse of the Application, copyright infringement and the like, or any issues related to data privacy please report the same to " [:b "support@identity-hash.online"]]
    [:h4.ui.grey.header "11. General"]
    [:div.ui.justified.container
     [:b "Termination"] ": The Company reserves the rights to terminate your access to the Application at any time, in its sole discretion. If the Company determines that you have breached these Terms of Use, the Company shall be entitled to terminate your use and access of the Application with immediate effect. You acknowledge the Company's rights and waive any claim that you may have arising from such termination. Notwithstanding the termination of your access, all provisions which by their nature are intended to survive, shall survive termination and continue to be applicable."[:br][:br]
     [:b "Force Majeure"] ": In no event shall the Company be liable for any acts beyond its control or for any acts of God."[:br][:br]
     [:b "Access"] ": This Application is intended for viewing in the geographies of Philippines initially and later on in all the geographies of Southeast Asia. The Company does not make any claim that the Application and its contents may be lawfully viewed or accessed in the jurisdiction you are viewing it in. You are solely responsible for complying with laws applicable to you."[:br][:br]
     [:b "Waiver"] ": No waiver of any provision of these Terms of Use shall be binding unless executed and notified by the Company in writing to you.  No waiver of any of the provisions of these Terms of Use shall be deemed or shall constitute a waiver of any other provision and no waiver shall constitute a continuing waiver. You hereby waive any present or future claims you have against the Company arising from the your use of the Application or any other users' conduct."[:br][:br]
     [:b "Entire Agreement"] ": These Terms of Use, the Privacy Policy and any other agreements you execute with the Company as relevant, shall constitute the entire agreement between you and the Company for the use of the Application. Any modification to these Terms of Use shall only be binding if posted on the Application by the Company."[:br][:br]
     [:b "Severability"] ": If any provision of these Terms of Use is determined to be invalid or unenforceable, it will not affect the validity or enforceability of the other provisions of these Terms of Use, which shall remain in full force and effect."[:br][:br]
     [:b "Governing Law"] ": These Terms of Use are governed by the laws of Philippines. You irrevocably consent to the exclusive jurisdiction and venue of the competent courts located in Philippines for all disputes arising out of or relating to these Terms of Use."]]
   [:div.ui.divider]
   [:div "Last updated: February 7, 2017"]])

(defn view-render []
  [:div.alchemy.root
   [partials/header-partial-view]
   [:main.alchemy.content
    [:div#terms.ui.container
     [terms-of-use]]]
   [partials/footer-partial-view]])

(defn view []
  (reagent/create-class
    {:reagent-render view-render}))
