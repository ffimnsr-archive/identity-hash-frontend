// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('alchemy.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('alchemy.views');
var action__15052__auto___15253 = (function (params__15053__auto__){
if(cljs.core.map_QMARK_(params__15053__auto__)){
var map__15248 = params__15053__auto__;
var map__15248__$1 = ((((!((map__15248 == null)))?((((map__15248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15248):map__15248);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return alchemy.views.home_page;},cljs.core.cst$sym$alchemy$views_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$alchemy$views,cljs.core.cst$sym$home_DASH_page,"/home/vagrant/repos/0-identity-hash/client/src/alchemy/src/alchemy/views.cljs",16,1,11,11,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(alchemy.views.home_page)?alchemy.views.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__15053__auto__)){
var vec__15250 = params__15053__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return alchemy.views.home_page;},cljs.core.cst$sym$alchemy$views_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$alchemy$views,cljs.core.cst$sym$home_DASH_page,"/home/vagrant/repos/0-identity-hash/client/src/alchemy/src/alchemy/views.cljs",16,1,11,11,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(alchemy.views.home_page)?alchemy.views.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__15052__auto___15253);

var action__15052__auto___15259 = (function (params__15053__auto__){
if(cljs.core.map_QMARK_(params__15053__auto__)){
var map__15254 = params__15053__auto__;
var map__15254__$1 = ((((!((map__15254 == null)))?((((map__15254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15254):map__15254);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return alchemy.views.privacy_page;},cljs.core.cst$sym$alchemy$views_SLASH_privacy_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$alchemy$views,cljs.core.cst$sym$privacy_DASH_page,"/home/vagrant/repos/0-identity-hash/client/src/alchemy/src/alchemy/views.cljs",19,1,12,12,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(alchemy.views.privacy_page)?alchemy.views.privacy_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__15053__auto__)){
var vec__15256 = params__15053__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return alchemy.views.privacy_page;},cljs.core.cst$sym$alchemy$views_SLASH_privacy_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$alchemy$views,cljs.core.cst$sym$privacy_DASH_page,"/home/vagrant/repos/0-identity-hash/client/src/alchemy/src/alchemy/views.cljs",19,1,12,12,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(alchemy.views.privacy_page)?alchemy.views.privacy_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/privacy",action__15052__auto___15259);

var action__15052__auto___15265 = (function (params__15053__auto__){
if(cljs.core.map_QMARK_(params__15053__auto__)){
var map__15260 = params__15053__auto__;
var map__15260__$1 = ((((!((map__15260 == null)))?((((map__15260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15260):map__15260);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return alchemy.views.terms_page;},cljs.core.cst$sym$alchemy$views_SLASH_terms_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$alchemy$views,cljs.core.cst$sym$terms_DASH_page,"/home/vagrant/repos/0-identity-hash/client/src/alchemy/src/alchemy/views.cljs",17,1,13,13,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(alchemy.views.terms_page)?alchemy.views.terms_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__15053__auto__)){
var vec__15262 = params__15053__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return alchemy.views.terms_page;},cljs.core.cst$sym$alchemy$views_SLASH_terms_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$alchemy$views,cljs.core.cst$sym$terms_DASH_page,"/home/vagrant/repos/0-identity-hash/client/src/alchemy/src/alchemy/views.cljs",17,1,13,13,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(alchemy.views.terms_page)?alchemy.views.terms_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/terms",action__15052__auto___15265);

alchemy.routes.current_page = (function alchemy$routes$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get(cljs.core.cst$kw$current_DASH_page)], null)], null);
});
