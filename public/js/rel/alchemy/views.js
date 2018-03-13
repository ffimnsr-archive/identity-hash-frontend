// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('alchemy.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('alchemy.partials');
goog.require('alchemy.components.home');
goog.require('alchemy.components.privacy');
goog.require('alchemy.components.terms');
alchemy.views.home_page = (function alchemy$views$home_page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alchemy.components.home.view], null);
});
alchemy.views.privacy_page = (function alchemy$views$privacy_page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alchemy.components.privacy.view], null);
});
alchemy.views.terms_page = (function alchemy$views$terms_page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alchemy.components.terms.view], null);
});
alchemy.views.not_found_page = (function alchemy$views$not_found_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$alchemy$root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alchemy.partials.header_partial_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main$alchemy$content], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alchemy.partials.footer_partial_view], null)], null);
});
