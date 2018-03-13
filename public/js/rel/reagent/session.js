// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__9188__auto__ = [];
var len__9181__auto___14986 = arguments.length;
var i__9182__auto___14987 = (0);
while(true){
if((i__9182__auto___14987 < len__9181__auto___14986)){
args__9188__auto__.push((arguments[i__9182__auto___14987]));

var G__14988 = (i__9182__auto___14987 + (1));
i__9182__auto___14987 = G__14988;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((1) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9189__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14982){
var vec__14983 = p__14982;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14983,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a)) == null))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a));
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq14980){
var G__14981 = cljs.core.first(seq14980);
var seq14980__$1 = cljs.core.next(seq14980);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__14981,seq14980__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__9188__auto__ = [];
var len__9181__auto___14997 = arguments.length;
var i__9182__auto___14998 = (0);
while(true){
if((i__9182__auto___14998 < len__9181__auto___14997)){
args__9188__auto__.push((arguments[i__9182__auto___14998]));

var G__14999 = (i__9182__auto___14998 + (1));
i__9182__auto___14998 = G__14999;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((1) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9189__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14991){
var vec__14992 = p__14991;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14992,(0),null);
var or__7960__auto__ = (function (){var G__14996 = reagent.session.cursor(ks);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14996) : cljs.core.deref.call(null,G__14996));
})();
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq14989){
var G__14990 = cljs.core.first(seq14989);
var seq14989__$1 = cljs.core.next(seq14989);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__14990,seq14989__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___15002 = arguments.length;
var i__9182__auto___15003 = (0);
while(true){
if((i__9182__auto___15003 < len__9181__auto___15002)){
args__9188__auto__.push((arguments[i__9182__auto___15003]));

var G__15004 = (i__9182__auto___15003 + (1));
i__9182__auto___15003 = G__15004;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((1) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9189__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq15000){
var G__15001 = cljs.core.first(seq15000);
var seq15000__$1 = cljs.core.next(seq15000);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15001,seq15000__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__15007 = reagent.session.state;
var G__15008 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15007,G__15008) : cljs.core.reset_BANG_.call(null,G__15007,G__15008));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___15015 = arguments.length;
var i__9182__auto___15016 = (0);
while(true){
if((i__9182__auto___15016 < len__9181__auto___15015)){
args__9188__auto__.push((arguments[i__9182__auto___15016]));

var G__15017 = (i__9182__auto___15016 + (1));
i__9182__auto___15016 = G__15017;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((1) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9189__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__15011){
var vec__15012 = p__15011;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15012,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq15009){
var G__15010 = cljs.core.first(seq15009);
var seq15009__$1 = cljs.core.next(seq15009);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15010,seq15009__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___15024 = arguments.length;
var i__9182__auto___15025 = (0);
while(true){
if((i__9182__auto___15025 < len__9181__auto___15024)){
args__9188__auto__.push((arguments[i__9182__auto___15025]));

var G__15026 = (i__9182__auto___15025 + (1));
i__9182__auto___15025 = G__15026;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((1) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9189__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__15020){
var vec__15021 = p__15020;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15021,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.array_seq([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq15018){
var G__15019 = cljs.core.first(seq15018);
var seq15018__$1 = cljs.core.next(seq15018);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15019,seq15018__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___15031 = arguments.length;
var i__9182__auto___15032 = (0);
while(true){
if((i__9182__auto___15032 < len__9181__auto___15031)){
args__9188__auto__.push((arguments[i__9182__auto___15032]));

var G__15033 = (i__9182__auto___15032 + (1));
i__9182__auto___15032 = G__15033;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((2) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9189__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__15027_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__15027_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq15028){
var G__15029 = cljs.core.first(seq15028);
var seq15028__$1 = cljs.core.next(seq15028);
var G__15030 = cljs.core.first(seq15028__$1);
var seq15028__$2 = cljs.core.next(seq15028__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15029,G__15030,seq15028__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___15038 = arguments.length;
var i__9182__auto___15039 = (0);
while(true){
if((i__9182__auto___15039 < len__9181__auto___15038)){
args__9188__auto__.push((arguments[i__9182__auto___15039]));

var G__15040 = (i__9182__auto___15039 + (1));
i__9182__auto___15039 = G__15040;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((2) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9189__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__15034_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__15034_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq15035){
var G__15036 = cljs.core.first(seq15035);
var seq15035__$1 = cljs.core.next(seq15035);
var G__15037 = cljs.core.first(seq15035__$1);
var seq15035__$2 = cljs.core.next(seq15035__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15036,G__15037,seq15035__$2);
});

