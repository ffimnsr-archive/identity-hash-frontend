// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__14325__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14326__i = 0, G__14326__a = new Array(arguments.length -  0);
while (G__14326__i < G__14326__a.length) {G__14326__a[G__14326__i] = arguments[G__14326__i + 0]; ++G__14326__i;}
  args = new cljs.core.IndexedSeq(G__14326__a,0,null);
} 
return G__14325__delegate.call(this,args);};
G__14325.cljs$lang$maxFixedArity = 0;
G__14325.cljs$lang$applyTo = (function (arglist__14327){
var args = cljs.core.seq(arglist__14327);
return G__14325__delegate(args);
});
G__14325.cljs$core$IFn$_invoke$arity$variadic = G__14325__delegate;
return G__14325;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__14328__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14329__i = 0, G__14329__a = new Array(arguments.length -  0);
while (G__14329__i < G__14329__a.length) {G__14329__a[G__14329__i] = arguments[G__14329__i + 0]; ++G__14329__i;}
  args = new cljs.core.IndexedSeq(G__14329__a,0,null);
} 
return G__14328__delegate.call(this,args);};
G__14328.cljs$lang$maxFixedArity = 0;
G__14328.cljs$lang$applyTo = (function (arglist__14330){
var args = cljs.core.seq(arglist__14330);
return G__14328__delegate(args);
});
G__14328.cljs$core$IFn$_invoke$arity$variadic = G__14328__delegate;
return G__14328;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
