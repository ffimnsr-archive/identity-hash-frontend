// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args17134 = [];
var len__9181__auto___17140 = arguments.length;
var i__9182__auto___17141 = (0);
while(true){
if((i__9182__auto___17141 < len__9181__auto___17140)){
args17134.push((arguments[i__9182__auto___17141]));

var G__17142 = (i__9182__auto___17141 + (1));
i__9182__auto___17141 = G__17142;
continue;
} else {
}
break;
}

var G__17136 = args17134.length;
switch (G__17136) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17134.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17137 = (function (f,blockable,meta17138){
this.f = f;
this.blockable = blockable;
this.meta17138 = meta17138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17139,meta17138__$1){
var self__ = this;
var _17139__$1 = this;
return (new cljs.core.async.t_cljs$core$async17137(self__.f,self__.blockable,meta17138__$1));
});

cljs.core.async.t_cljs$core$async17137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17139){
var self__ = this;
var _17139__$1 = this;
return self__.meta17138;
});

cljs.core.async.t_cljs$core$async17137.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17138], null);
});

cljs.core.async.t_cljs$core$async17137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17137";

cljs.core.async.t_cljs$core$async17137.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async17137");
});

cljs.core.async.__GT_t_cljs$core$async17137 = (function cljs$core$async$__GT_t_cljs$core$async17137(f__$1,blockable__$1,meta17138){
return (new cljs.core.async.t_cljs$core$async17137(f__$1,blockable__$1,meta17138));
});

}

return (new cljs.core.async.t_cljs$core$async17137(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args17146 = [];
var len__9181__auto___17149 = arguments.length;
var i__9182__auto___17150 = (0);
while(true){
if((i__9182__auto___17150 < len__9181__auto___17149)){
args17146.push((arguments[i__9182__auto___17150]));

var G__17151 = (i__9182__auto___17150 + (1));
i__9182__auto___17150 = G__17151;
continue;
} else {
}
break;
}

var G__17148 = args17146.length;
switch (G__17148) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17146.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args17153 = [];
var len__9181__auto___17156 = arguments.length;
var i__9182__auto___17157 = (0);
while(true){
if((i__9182__auto___17157 < len__9181__auto___17156)){
args17153.push((arguments[i__9182__auto___17157]));

var G__17158 = (i__9182__auto___17157 + (1));
i__9182__auto___17157 = G__17158;
continue;
} else {
}
break;
}

var G__17155 = args17153.length;
switch (G__17155) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17153.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args17160 = [];
var len__9181__auto___17163 = arguments.length;
var i__9182__auto___17164 = (0);
while(true){
if((i__9182__auto___17164 < len__9181__auto___17163)){
args17160.push((arguments[i__9182__auto___17164]));

var G__17165 = (i__9182__auto___17164 + (1));
i__9182__auto___17164 = G__17165;
continue;
} else {
}
break;
}

var G__17162 = args17160.length;
switch (G__17162) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17160.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17167 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17167) : fn1.call(null,val_17167));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17167,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17167) : fn1.call(null,val_17167));
});})(val_17167,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args17168 = [];
var len__9181__auto___17171 = arguments.length;
var i__9182__auto___17172 = (0);
while(true){
if((i__9182__auto___17172 < len__9181__auto___17171)){
args17168.push((arguments[i__9182__auto___17172]));

var G__17173 = (i__9182__auto___17172 + (1));
i__9182__auto___17172 = G__17173;
continue;
} else {
}
break;
}

var G__17170 = args17168.length;
switch (G__17170) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17168.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5276__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8981__auto___17175 = n;
var x_17176 = (0);
while(true){
if((x_17176 < n__8981__auto___17175)){
(a[x_17176] = (0));

var G__17177 = (x_17176 + (1));
x_17176 = G__17177;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__17178 = (i + (1));
i = G__17178;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async17182 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17182 = (function (flag,meta17183){
this.flag = flag;
this.meta17183 = meta17183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17184,meta17183__$1){
var self__ = this;
var _17184__$1 = this;
return (new cljs.core.async.t_cljs$core$async17182(self__.flag,meta17183__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17184){
var self__ = this;
var _17184__$1 = this;
return self__.meta17183;
});})(flag))
;

cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17182.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17183], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17182.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17182";

cljs.core.async.t_cljs$core$async17182.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async17182");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17182 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17182(flag__$1,meta17183){
return (new cljs.core.async.t_cljs$core$async17182(flag__$1,meta17183));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17182(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17188 = (function (flag,cb,meta17189){
this.flag = flag;
this.cb = cb;
this.meta17189 = meta17189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17190,meta17189__$1){
var self__ = this;
var _17190__$1 = this;
return (new cljs.core.async.t_cljs$core$async17188(self__.flag,self__.cb,meta17189__$1));
});

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17190){
var self__ = this;
var _17190__$1 = this;
return self__.meta17189;
});

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17189], null);
});

cljs.core.async.t_cljs$core$async17188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17188";

cljs.core.async.t_cljs$core$async17188.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async17188");
});

cljs.core.async.__GT_t_cljs$core$async17188 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17188(flag__$1,cb__$1,meta17189){
return (new cljs.core.async.t_cljs$core$async17188(flag__$1,cb__$1,meta17189));
});

}

return (new cljs.core.async.t_cljs$core$async17188(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17191_SHARP_){
var G__17195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17191_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17195) : fret.call(null,G__17195));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17192_SHARP_){
var G__17196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17192_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17196) : fret.call(null,G__17196));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__7960__auto__ = wport;
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17197 = (i + (1));
i = G__17197;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7960__auto__ = ret;
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5278__auto__ = (function (){var and__7948__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7948__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7948__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___17203 = arguments.length;
var i__9182__auto___17204 = (0);
while(true){
if((i__9182__auto___17204 < len__9181__auto___17203)){
args__9188__auto__.push((arguments[i__9182__auto___17204]));

var G__17205 = (i__9182__auto___17204 + (1));
i__9182__auto___17204 = G__17205;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((1) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9189__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17200){
var map__17201 = p__17200;
var map__17201__$1 = ((((!((map__17201 == null)))?((((map__17201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17201):map__17201);
var opts = map__17201__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17198){
var G__17199 = cljs.core.first(seq17198);
var seq17198__$1 = cljs.core.next(seq17198);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17199,seq17198__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17206 = [];
var len__9181__auto___17256 = arguments.length;
var i__9182__auto___17257 = (0);
while(true){
if((i__9182__auto___17257 < len__9181__auto___17256)){
args17206.push((arguments[i__9182__auto___17257]));

var G__17258 = (i__9182__auto___17257 + (1));
i__9182__auto___17257 = G__17258;
continue;
} else {
}
break;
}

var G__17208 = args17206.length;
switch (G__17208) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17206.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17075__auto___17260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___17260){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___17260){
return (function (state_17232){
var state_val_17233 = (state_17232[(1)]);
if((state_val_17233 === (7))){
var inst_17228 = (state_17232[(2)]);
var state_17232__$1 = state_17232;
var statearr_17234_17261 = state_17232__$1;
(statearr_17234_17261[(2)] = inst_17228);

(statearr_17234_17261[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (1))){
var state_17232__$1 = state_17232;
var statearr_17235_17262 = state_17232__$1;
(statearr_17235_17262[(2)] = null);

(statearr_17235_17262[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (4))){
var inst_17211 = (state_17232[(7)]);
var inst_17211__$1 = (state_17232[(2)]);
var inst_17212 = (inst_17211__$1 == null);
var state_17232__$1 = (function (){var statearr_17236 = state_17232;
(statearr_17236[(7)] = inst_17211__$1);

return statearr_17236;
})();
if(cljs.core.truth_(inst_17212)){
var statearr_17237_17263 = state_17232__$1;
(statearr_17237_17263[(1)] = (5));

} else {
var statearr_17238_17264 = state_17232__$1;
(statearr_17238_17264[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (13))){
var state_17232__$1 = state_17232;
var statearr_17239_17265 = state_17232__$1;
(statearr_17239_17265[(2)] = null);

(statearr_17239_17265[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (6))){
var inst_17211 = (state_17232[(7)]);
var state_17232__$1 = state_17232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17232__$1,(11),to,inst_17211);
} else {
if((state_val_17233 === (3))){
var inst_17230 = (state_17232[(2)]);
var state_17232__$1 = state_17232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17232__$1,inst_17230);
} else {
if((state_val_17233 === (12))){
var state_17232__$1 = state_17232;
var statearr_17240_17266 = state_17232__$1;
(statearr_17240_17266[(2)] = null);

(statearr_17240_17266[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (2))){
var state_17232__$1 = state_17232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17232__$1,(4),from);
} else {
if((state_val_17233 === (11))){
var inst_17221 = (state_17232[(2)]);
var state_17232__$1 = state_17232;
if(cljs.core.truth_(inst_17221)){
var statearr_17241_17267 = state_17232__$1;
(statearr_17241_17267[(1)] = (12));

} else {
var statearr_17242_17268 = state_17232__$1;
(statearr_17242_17268[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (9))){
var state_17232__$1 = state_17232;
var statearr_17243_17269 = state_17232__$1;
(statearr_17243_17269[(2)] = null);

(statearr_17243_17269[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (5))){
var state_17232__$1 = state_17232;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17244_17270 = state_17232__$1;
(statearr_17244_17270[(1)] = (8));

} else {
var statearr_17245_17271 = state_17232__$1;
(statearr_17245_17271[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (14))){
var inst_17226 = (state_17232[(2)]);
var state_17232__$1 = state_17232;
var statearr_17246_17272 = state_17232__$1;
(statearr_17246_17272[(2)] = inst_17226);

(statearr_17246_17272[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (10))){
var inst_17218 = (state_17232[(2)]);
var state_17232__$1 = state_17232;
var statearr_17247_17273 = state_17232__$1;
(statearr_17247_17273[(2)] = inst_17218);

(statearr_17247_17273[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (8))){
var inst_17215 = cljs.core.async.close_BANG_(to);
var state_17232__$1 = state_17232;
var statearr_17248_17274 = state_17232__$1;
(statearr_17248_17274[(2)] = inst_17215);

(statearr_17248_17274[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto___17260))
;
return ((function (switch__16949__auto__,c__17075__auto___17260){
return (function() {
var cljs$core$async$state_machine__16950__auto__ = null;
var cljs$core$async$state_machine__16950__auto____0 = (function (){
var statearr_17252 = [null,null,null,null,null,null,null,null];
(statearr_17252[(0)] = cljs$core$async$state_machine__16950__auto__);

(statearr_17252[(1)] = (1));

return statearr_17252;
});
var cljs$core$async$state_machine__16950__auto____1 = (function (state_17232){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_17232);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e17253){if((e17253 instanceof Object)){
var ex__16953__auto__ = e17253;
var statearr_17254_17275 = state_17232;
(statearr_17254_17275[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17232);

return cljs.core.cst$kw$recur;
} else {
throw e17253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__17276 = state_17232;
state_17232 = G__17276;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$state_machine__16950__auto__ = function(state_17232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16950__auto____1.call(this,state_17232);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16950__auto____0;
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16950__auto____1;
return cljs$core$async$state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___17260))
})();
var state__17077__auto__ = (function (){var statearr_17255 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_17255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___17260);

return statearr_17255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___17260))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__17464){
var vec__17465 = p__17464;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17465,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17465,(1),null);
var job = vec__17465;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17075__auto___17651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___17651,res,vec__17465,v,p,job,jobs,results){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___17651,res,vec__17465,v,p,job,jobs,results){
return (function (state_17472){
var state_val_17473 = (state_17472[(1)]);
if((state_val_17473 === (1))){
var state_17472__$1 = state_17472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17472__$1,(2),res,v);
} else {
if((state_val_17473 === (2))){
var inst_17469 = (state_17472[(2)]);
var inst_17470 = cljs.core.async.close_BANG_(res);
var state_17472__$1 = (function (){var statearr_17474 = state_17472;
(statearr_17474[(7)] = inst_17469);

return statearr_17474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17472__$1,inst_17470);
} else {
return null;
}
}
});})(c__17075__auto___17651,res,vec__17465,v,p,job,jobs,results))
;
return ((function (switch__16949__auto__,c__17075__auto___17651,res,vec__17465,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0 = (function (){
var statearr_17478 = [null,null,null,null,null,null,null,null];
(statearr_17478[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__);

(statearr_17478[(1)] = (1));

return statearr_17478;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1 = (function (state_17472){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_17472);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e17479){if((e17479 instanceof Object)){
var ex__16953__auto__ = e17479;
var statearr_17480_17652 = state_17472;
(statearr_17480_17652[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17472);

return cljs.core.cst$kw$recur;
} else {
throw e17479;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__17653 = state_17472;
state_17472 = G__17653;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__ = function(state_17472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1.call(this,state_17472);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___17651,res,vec__17465,v,p,job,jobs,results))
})();
var state__17077__auto__ = (function (){var statearr_17481 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_17481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___17651);

return statearr_17481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___17651,res,vec__17465,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17482){
var vec__17483 = p__17482;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17483,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17483,(1),null);
var job = vec__17483;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8981__auto___17654 = n;
var __17655 = (0);
while(true){
if((__17655 < n__8981__auto___17654)){
var G__17486_17656 = type;
var G__17486_17657__$1 = (((G__17486_17656 instanceof cljs.core.Keyword))?G__17486_17656.fqn:null);
switch (G__17486_17657__$1) {
case "compute":
var c__17075__auto___17659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17655,c__17075__auto___17659,G__17486_17656,G__17486_17657__$1,n__8981__auto___17654,jobs,results,process,async){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (__17655,c__17075__auto___17659,G__17486_17656,G__17486_17657__$1,n__8981__auto___17654,jobs,results,process,async){
return (function (state_17499){
var state_val_17500 = (state_17499[(1)]);
if((state_val_17500 === (1))){
var state_17499__$1 = state_17499;
var statearr_17501_17660 = state_17499__$1;
(statearr_17501_17660[(2)] = null);

(statearr_17501_17660[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17500 === (2))){
var state_17499__$1 = state_17499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17499__$1,(4),jobs);
} else {
if((state_val_17500 === (3))){
var inst_17497 = (state_17499[(2)]);
var state_17499__$1 = state_17499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17499__$1,inst_17497);
} else {
if((state_val_17500 === (4))){
var inst_17489 = (state_17499[(2)]);
var inst_17490 = process(inst_17489);
var state_17499__$1 = state_17499;
if(cljs.core.truth_(inst_17490)){
var statearr_17502_17661 = state_17499__$1;
(statearr_17502_17661[(1)] = (5));

} else {
var statearr_17503_17662 = state_17499__$1;
(statearr_17503_17662[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17500 === (5))){
var state_17499__$1 = state_17499;
var statearr_17504_17663 = state_17499__$1;
(statearr_17504_17663[(2)] = null);

(statearr_17504_17663[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17500 === (6))){
var state_17499__$1 = state_17499;
var statearr_17505_17664 = state_17499__$1;
(statearr_17505_17664[(2)] = null);

(statearr_17505_17664[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17500 === (7))){
var inst_17495 = (state_17499[(2)]);
var state_17499__$1 = state_17499;
var statearr_17506_17665 = state_17499__$1;
(statearr_17506_17665[(2)] = inst_17495);

(statearr_17506_17665[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__17655,c__17075__auto___17659,G__17486_17656,G__17486_17657__$1,n__8981__auto___17654,jobs,results,process,async))
;
return ((function (__17655,switch__16949__auto__,c__17075__auto___17659,G__17486_17656,G__17486_17657__$1,n__8981__auto___17654,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0 = (function (){
var statearr_17510 = [null,null,null,null,null,null,null];
(statearr_17510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__);

(statearr_17510[(1)] = (1));

return statearr_17510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1 = (function (state_17499){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_17499);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e17511){if((e17511 instanceof Object)){
var ex__16953__auto__ = e17511;
var statearr_17512_17666 = state_17499;
(statearr_17512_17666[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17499);

return cljs.core.cst$kw$recur;
} else {
throw e17511;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__17667 = state_17499;
state_17499 = G__17667;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__ = function(state_17499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1.call(this,state_17499);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__;
})()
;})(__17655,switch__16949__auto__,c__17075__auto___17659,G__17486_17656,G__17486_17657__$1,n__8981__auto___17654,jobs,results,process,async))
})();
var state__17077__auto__ = (function (){var statearr_17513 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_17513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___17659);

return statearr_17513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(__17655,c__17075__auto___17659,G__17486_17656,G__17486_17657__$1,n__8981__auto___17654,jobs,results,process,async))
);


break;
case "async":
var c__17075__auto___17668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17655,c__17075__auto___17668,G__17486_17656,G__17486_17657__$1,n__8981__auto___17654,jobs,results,process,async){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (__17655,c__17075__auto___17668,G__17486_17656,G__17486_17657__$1,n__8981__auto___17654,jobs,results,process,async){
return (function (state_17526){
var state_val_17527 = (state_17526[(1)]);
if((state_val_17527 === (1))){
var state_17526__$1 = state_17526;
var statearr_17528_17669 = state_17526__$1;
(statearr_17528_17669[(2)] = null);

(statearr_17528_17669[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17527 === (2))){
var state_17526__$1 = state_17526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17526__$1,(4),jobs);
} else {
if((state_val_17527 === (3))){
var inst_17524 = (state_17526[(2)]);
var state_17526__$1 = state_17526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17526__$1,inst_17524);
} else {
if((state_val_17527 === (4))){
var inst_17516 = (state_17526[(2)]);
var inst_17517 = async(inst_17516);
var state_17526__$1 = state_17526;
if(cljs.core.truth_(inst_17517)){
var statearr_17529_17670 = state_17526__$1;
(statearr_17529_17670[(1)] = (5));

} else {
var statearr_17530_17671 = state_17526__$1;
(statearr_17530_17671[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17527 === (5))){
var state_17526__$1 = state_17526;
var statearr_17531_17672 = state_17526__$1;
(statearr_17531_17672[(2)] = null);

(statearr_17531_17672[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17527 === (6))){
var state_17526__$1 = state_17526;
var statearr_17532_17673 = state_17526__$1;
(statearr_17532_17673[(2)] = null);

(statearr_17532_17673[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17527 === (7))){
var inst_17522 = (state_17526[(2)]);
var state_17526__$1 = state_17526;
var statearr_17533_17674 = state_17526__$1;
(statearr_17533_17674[(2)] = inst_17522);

(statearr_17533_17674[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__17655,c__17075__auto___17668,G__17486_17656,G__17486_17657__$1,n__8981__auto___17654,jobs,results,process,async))
;
return ((function (__17655,switch__16949__auto__,c__17075__auto___17668,G__17486_17656,G__17486_17657__$1,n__8981__auto___17654,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0 = (function (){
var statearr_17537 = [null,null,null,null,null,null,null];
(statearr_17537[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__);

(statearr_17537[(1)] = (1));

return statearr_17537;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1 = (function (state_17526){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_17526);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e17538){if((e17538 instanceof Object)){
var ex__16953__auto__ = e17538;
var statearr_17539_17675 = state_17526;
(statearr_17539_17675[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17526);

return cljs.core.cst$kw$recur;
} else {
throw e17538;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__17676 = state_17526;
state_17526 = G__17676;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__ = function(state_17526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1.call(this,state_17526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__;
})()
;})(__17655,switch__16949__auto__,c__17075__auto___17668,G__17486_17656,G__17486_17657__$1,n__8981__auto___17654,jobs,results,process,async))
})();
var state__17077__auto__ = (function (){var statearr_17540 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_17540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___17668);

return statearr_17540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(__17655,c__17075__auto___17668,G__17486_17656,G__17486_17657__$1,n__8981__auto___17654,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17486_17657__$1)].join('')));

}

var G__17677 = (__17655 + (1));
__17655 = G__17677;
continue;
} else {
}
break;
}

var c__17075__auto___17678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___17678,jobs,results,process,async){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___17678,jobs,results,process,async){
return (function (state_17562){
var state_val_17563 = (state_17562[(1)]);
if((state_val_17563 === (1))){
var state_17562__$1 = state_17562;
var statearr_17564_17679 = state_17562__$1;
(statearr_17564_17679[(2)] = null);

(statearr_17564_17679[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (2))){
var state_17562__$1 = state_17562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17562__$1,(4),from);
} else {
if((state_val_17563 === (3))){
var inst_17560 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17562__$1,inst_17560);
} else {
if((state_val_17563 === (4))){
var inst_17543 = (state_17562[(7)]);
var inst_17543__$1 = (state_17562[(2)]);
var inst_17544 = (inst_17543__$1 == null);
var state_17562__$1 = (function (){var statearr_17565 = state_17562;
(statearr_17565[(7)] = inst_17543__$1);

return statearr_17565;
})();
if(cljs.core.truth_(inst_17544)){
var statearr_17566_17680 = state_17562__$1;
(statearr_17566_17680[(1)] = (5));

} else {
var statearr_17567_17681 = state_17562__$1;
(statearr_17567_17681[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (5))){
var inst_17546 = cljs.core.async.close_BANG_(jobs);
var state_17562__$1 = state_17562;
var statearr_17568_17682 = state_17562__$1;
(statearr_17568_17682[(2)] = inst_17546);

(statearr_17568_17682[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (6))){
var inst_17543 = (state_17562[(7)]);
var inst_17548 = (state_17562[(8)]);
var inst_17548__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17549 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17550 = [inst_17543,inst_17548__$1];
var inst_17551 = (new cljs.core.PersistentVector(null,2,(5),inst_17549,inst_17550,null));
var state_17562__$1 = (function (){var statearr_17569 = state_17562;
(statearr_17569[(8)] = inst_17548__$1);

return statearr_17569;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17562__$1,(8),jobs,inst_17551);
} else {
if((state_val_17563 === (7))){
var inst_17558 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17570_17683 = state_17562__$1;
(statearr_17570_17683[(2)] = inst_17558);

(statearr_17570_17683[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (8))){
var inst_17548 = (state_17562[(8)]);
var inst_17553 = (state_17562[(2)]);
var state_17562__$1 = (function (){var statearr_17571 = state_17562;
(statearr_17571[(9)] = inst_17553);

return statearr_17571;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17562__$1,(9),results,inst_17548);
} else {
if((state_val_17563 === (9))){
var inst_17555 = (state_17562[(2)]);
var state_17562__$1 = (function (){var statearr_17572 = state_17562;
(statearr_17572[(10)] = inst_17555);

return statearr_17572;
})();
var statearr_17573_17684 = state_17562__$1;
(statearr_17573_17684[(2)] = null);

(statearr_17573_17684[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__17075__auto___17678,jobs,results,process,async))
;
return ((function (switch__16949__auto__,c__17075__auto___17678,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0 = (function (){
var statearr_17577 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17577[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__);

(statearr_17577[(1)] = (1));

return statearr_17577;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1 = (function (state_17562){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_17562);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e17578){if((e17578 instanceof Object)){
var ex__16953__auto__ = e17578;
var statearr_17579_17685 = state_17562;
(statearr_17579_17685[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17562);

return cljs.core.cst$kw$recur;
} else {
throw e17578;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__17686 = state_17562;
state_17562 = G__17686;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__ = function(state_17562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1.call(this,state_17562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___17678,jobs,results,process,async))
})();
var state__17077__auto__ = (function (){var statearr_17580 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_17580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___17678);

return statearr_17580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___17678,jobs,results,process,async))
);


var c__17075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto__,jobs,results,process,async){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto__,jobs,results,process,async){
return (function (state_17618){
var state_val_17619 = (state_17618[(1)]);
if((state_val_17619 === (7))){
var inst_17614 = (state_17618[(2)]);
var state_17618__$1 = state_17618;
var statearr_17620_17687 = state_17618__$1;
(statearr_17620_17687[(2)] = inst_17614);

(statearr_17620_17687[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (20))){
var state_17618__$1 = state_17618;
var statearr_17621_17688 = state_17618__$1;
(statearr_17621_17688[(2)] = null);

(statearr_17621_17688[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (1))){
var state_17618__$1 = state_17618;
var statearr_17622_17689 = state_17618__$1;
(statearr_17622_17689[(2)] = null);

(statearr_17622_17689[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (4))){
var inst_17583 = (state_17618[(7)]);
var inst_17583__$1 = (state_17618[(2)]);
var inst_17584 = (inst_17583__$1 == null);
var state_17618__$1 = (function (){var statearr_17623 = state_17618;
(statearr_17623[(7)] = inst_17583__$1);

return statearr_17623;
})();
if(cljs.core.truth_(inst_17584)){
var statearr_17624_17690 = state_17618__$1;
(statearr_17624_17690[(1)] = (5));

} else {
var statearr_17625_17691 = state_17618__$1;
(statearr_17625_17691[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (15))){
var inst_17596 = (state_17618[(8)]);
var state_17618__$1 = state_17618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17618__$1,(18),to,inst_17596);
} else {
if((state_val_17619 === (21))){
var inst_17609 = (state_17618[(2)]);
var state_17618__$1 = state_17618;
var statearr_17626_17692 = state_17618__$1;
(statearr_17626_17692[(2)] = inst_17609);

(statearr_17626_17692[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (13))){
var inst_17611 = (state_17618[(2)]);
var state_17618__$1 = (function (){var statearr_17627 = state_17618;
(statearr_17627[(9)] = inst_17611);

return statearr_17627;
})();
var statearr_17628_17693 = state_17618__$1;
(statearr_17628_17693[(2)] = null);

(statearr_17628_17693[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (6))){
var inst_17583 = (state_17618[(7)]);
var state_17618__$1 = state_17618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17618__$1,(11),inst_17583);
} else {
if((state_val_17619 === (17))){
var inst_17604 = (state_17618[(2)]);
var state_17618__$1 = state_17618;
if(cljs.core.truth_(inst_17604)){
var statearr_17629_17694 = state_17618__$1;
(statearr_17629_17694[(1)] = (19));

} else {
var statearr_17630_17695 = state_17618__$1;
(statearr_17630_17695[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (3))){
var inst_17616 = (state_17618[(2)]);
var state_17618__$1 = state_17618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17618__$1,inst_17616);
} else {
if((state_val_17619 === (12))){
var inst_17593 = (state_17618[(10)]);
var state_17618__$1 = state_17618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17618__$1,(14),inst_17593);
} else {
if((state_val_17619 === (2))){
var state_17618__$1 = state_17618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17618__$1,(4),results);
} else {
if((state_val_17619 === (19))){
var state_17618__$1 = state_17618;
var statearr_17631_17696 = state_17618__$1;
(statearr_17631_17696[(2)] = null);

(statearr_17631_17696[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (11))){
var inst_17593 = (state_17618[(2)]);
var state_17618__$1 = (function (){var statearr_17632 = state_17618;
(statearr_17632[(10)] = inst_17593);

return statearr_17632;
})();
var statearr_17633_17697 = state_17618__$1;
(statearr_17633_17697[(2)] = null);

(statearr_17633_17697[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (9))){
var state_17618__$1 = state_17618;
var statearr_17634_17698 = state_17618__$1;
(statearr_17634_17698[(2)] = null);

(statearr_17634_17698[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (5))){
var state_17618__$1 = state_17618;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17635_17699 = state_17618__$1;
(statearr_17635_17699[(1)] = (8));

} else {
var statearr_17636_17700 = state_17618__$1;
(statearr_17636_17700[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (14))){
var inst_17596 = (state_17618[(8)]);
var inst_17598 = (state_17618[(11)]);
var inst_17596__$1 = (state_17618[(2)]);
var inst_17597 = (inst_17596__$1 == null);
var inst_17598__$1 = cljs.core.not(inst_17597);
var state_17618__$1 = (function (){var statearr_17637 = state_17618;
(statearr_17637[(8)] = inst_17596__$1);

(statearr_17637[(11)] = inst_17598__$1);

return statearr_17637;
})();
if(inst_17598__$1){
var statearr_17638_17701 = state_17618__$1;
(statearr_17638_17701[(1)] = (15));

} else {
var statearr_17639_17702 = state_17618__$1;
(statearr_17639_17702[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (16))){
var inst_17598 = (state_17618[(11)]);
var state_17618__$1 = state_17618;
var statearr_17640_17703 = state_17618__$1;
(statearr_17640_17703[(2)] = inst_17598);

(statearr_17640_17703[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (10))){
var inst_17590 = (state_17618[(2)]);
var state_17618__$1 = state_17618;
var statearr_17641_17704 = state_17618__$1;
(statearr_17641_17704[(2)] = inst_17590);

(statearr_17641_17704[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (18))){
var inst_17601 = (state_17618[(2)]);
var state_17618__$1 = state_17618;
var statearr_17642_17705 = state_17618__$1;
(statearr_17642_17705[(2)] = inst_17601);

(statearr_17642_17705[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17619 === (8))){
var inst_17587 = cljs.core.async.close_BANG_(to);
var state_17618__$1 = state_17618;
var statearr_17643_17706 = state_17618__$1;
(statearr_17643_17706[(2)] = inst_17587);

(statearr_17643_17706[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto__,jobs,results,process,async))
;
return ((function (switch__16949__auto__,c__17075__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0 = (function (){
var statearr_17647 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__);

(statearr_17647[(1)] = (1));

return statearr_17647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1 = (function (state_17618){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_17618);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e17648){if((e17648 instanceof Object)){
var ex__16953__auto__ = e17648;
var statearr_17649_17707 = state_17618;
(statearr_17649_17707[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17618);

return cljs.core.cst$kw$recur;
} else {
throw e17648;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__17708 = state_17618;
state_17618 = G__17708;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__ = function(state_17618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1.call(this,state_17618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto__,jobs,results,process,async))
})();
var state__17077__auto__ = (function (){var statearr_17650 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_17650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto__);

return statearr_17650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto__,jobs,results,process,async))
);

return c__17075__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args17709 = [];
var len__9181__auto___17712 = arguments.length;
var i__9182__auto___17713 = (0);
while(true){
if((i__9182__auto___17713 < len__9181__auto___17712)){
args17709.push((arguments[i__9182__auto___17713]));

var G__17714 = (i__9182__auto___17713 + (1));
i__9182__auto___17713 = G__17714;
continue;
} else {
}
break;
}

var G__17711 = args17709.length;
switch (G__17711) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17709.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args17716 = [];
var len__9181__auto___17719 = arguments.length;
var i__9182__auto___17720 = (0);
while(true){
if((i__9182__auto___17720 < len__9181__auto___17719)){
args17716.push((arguments[i__9182__auto___17720]));

var G__17721 = (i__9182__auto___17720 + (1));
i__9182__auto___17720 = G__17721;
continue;
} else {
}
break;
}

var G__17718 = args17716.length;
switch (G__17718) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17716.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args17723 = [];
var len__9181__auto___17776 = arguments.length;
var i__9182__auto___17777 = (0);
while(true){
if((i__9182__auto___17777 < len__9181__auto___17776)){
args17723.push((arguments[i__9182__auto___17777]));

var G__17778 = (i__9182__auto___17777 + (1));
i__9182__auto___17777 = G__17778;
continue;
} else {
}
break;
}

var G__17725 = args17723.length;
switch (G__17725) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17723.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17075__auto___17780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___17780,tc,fc){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___17780,tc,fc){
return (function (state_17751){
var state_val_17752 = (state_17751[(1)]);
if((state_val_17752 === (7))){
var inst_17747 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17753_17781 = state_17751__$1;
(statearr_17753_17781[(2)] = inst_17747);

(statearr_17753_17781[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17752 === (1))){
var state_17751__$1 = state_17751;
var statearr_17754_17782 = state_17751__$1;
(statearr_17754_17782[(2)] = null);

(statearr_17754_17782[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17752 === (4))){
var inst_17728 = (state_17751[(7)]);
var inst_17728__$1 = (state_17751[(2)]);
var inst_17729 = (inst_17728__$1 == null);
var state_17751__$1 = (function (){var statearr_17755 = state_17751;
(statearr_17755[(7)] = inst_17728__$1);

return statearr_17755;
})();
if(cljs.core.truth_(inst_17729)){
var statearr_17756_17783 = state_17751__$1;
(statearr_17756_17783[(1)] = (5));

} else {
var statearr_17757_17784 = state_17751__$1;
(statearr_17757_17784[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17752 === (13))){
var state_17751__$1 = state_17751;
var statearr_17758_17785 = state_17751__$1;
(statearr_17758_17785[(2)] = null);

(statearr_17758_17785[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17752 === (6))){
var inst_17728 = (state_17751[(7)]);
var inst_17734 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17728) : p.call(null,inst_17728));
var state_17751__$1 = state_17751;
if(cljs.core.truth_(inst_17734)){
var statearr_17759_17786 = state_17751__$1;
(statearr_17759_17786[(1)] = (9));

} else {
var statearr_17760_17787 = state_17751__$1;
(statearr_17760_17787[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17752 === (3))){
var inst_17749 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17751__$1,inst_17749);
} else {
if((state_val_17752 === (12))){
var state_17751__$1 = state_17751;
var statearr_17761_17788 = state_17751__$1;
(statearr_17761_17788[(2)] = null);

(statearr_17761_17788[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17752 === (2))){
var state_17751__$1 = state_17751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17751__$1,(4),ch);
} else {
if((state_val_17752 === (11))){
var inst_17728 = (state_17751[(7)]);
var inst_17738 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17751__$1,(8),inst_17738,inst_17728);
} else {
if((state_val_17752 === (9))){
var state_17751__$1 = state_17751;
var statearr_17762_17789 = state_17751__$1;
(statearr_17762_17789[(2)] = tc);

(statearr_17762_17789[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17752 === (5))){
var inst_17731 = cljs.core.async.close_BANG_(tc);
var inst_17732 = cljs.core.async.close_BANG_(fc);
var state_17751__$1 = (function (){var statearr_17763 = state_17751;
(statearr_17763[(8)] = inst_17731);

return statearr_17763;
})();
var statearr_17764_17790 = state_17751__$1;
(statearr_17764_17790[(2)] = inst_17732);

(statearr_17764_17790[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17752 === (14))){
var inst_17745 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17765_17791 = state_17751__$1;
(statearr_17765_17791[(2)] = inst_17745);

(statearr_17765_17791[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17752 === (10))){
var state_17751__$1 = state_17751;
var statearr_17766_17792 = state_17751__$1;
(statearr_17766_17792[(2)] = fc);

(statearr_17766_17792[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17752 === (8))){
var inst_17740 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
if(cljs.core.truth_(inst_17740)){
var statearr_17767_17793 = state_17751__$1;
(statearr_17767_17793[(1)] = (12));

} else {
var statearr_17768_17794 = state_17751__$1;
(statearr_17768_17794[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto___17780,tc,fc))
;
return ((function (switch__16949__auto__,c__17075__auto___17780,tc,fc){
return (function() {
var cljs$core$async$state_machine__16950__auto__ = null;
var cljs$core$async$state_machine__16950__auto____0 = (function (){
var statearr_17772 = [null,null,null,null,null,null,null,null,null];
(statearr_17772[(0)] = cljs$core$async$state_machine__16950__auto__);

(statearr_17772[(1)] = (1));

return statearr_17772;
});
var cljs$core$async$state_machine__16950__auto____1 = (function (state_17751){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_17751);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e17773){if((e17773 instanceof Object)){
var ex__16953__auto__ = e17773;
var statearr_17774_17795 = state_17751;
(statearr_17774_17795[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17751);

return cljs.core.cst$kw$recur;
} else {
throw e17773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__17796 = state_17751;
state_17751 = G__17796;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$state_machine__16950__auto__ = function(state_17751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16950__auto____1.call(this,state_17751);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16950__auto____0;
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16950__auto____1;
return cljs$core$async$state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___17780,tc,fc))
})();
var state__17077__auto__ = (function (){var statearr_17775 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_17775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___17780);

return statearr_17775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___17780,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto__){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto__){
return (function (state_17860){
var state_val_17861 = (state_17860[(1)]);
if((state_val_17861 === (7))){
var inst_17856 = (state_17860[(2)]);
var state_17860__$1 = state_17860;
var statearr_17862_17883 = state_17860__$1;
(statearr_17862_17883[(2)] = inst_17856);

(statearr_17862_17883[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17861 === (1))){
var inst_17840 = init;
var state_17860__$1 = (function (){var statearr_17863 = state_17860;
(statearr_17863[(7)] = inst_17840);

return statearr_17863;
})();
var statearr_17864_17884 = state_17860__$1;
(statearr_17864_17884[(2)] = null);

(statearr_17864_17884[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17861 === (4))){
var inst_17843 = (state_17860[(8)]);
var inst_17843__$1 = (state_17860[(2)]);
var inst_17844 = (inst_17843__$1 == null);
var state_17860__$1 = (function (){var statearr_17865 = state_17860;
(statearr_17865[(8)] = inst_17843__$1);

return statearr_17865;
})();
if(cljs.core.truth_(inst_17844)){
var statearr_17866_17885 = state_17860__$1;
(statearr_17866_17885[(1)] = (5));

} else {
var statearr_17867_17886 = state_17860__$1;
(statearr_17867_17886[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17861 === (6))){
var inst_17847 = (state_17860[(9)]);
var inst_17840 = (state_17860[(7)]);
var inst_17843 = (state_17860[(8)]);
var inst_17847__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17840,inst_17843) : f.call(null,inst_17840,inst_17843));
var inst_17848 = cljs.core.reduced_QMARK_(inst_17847__$1);
var state_17860__$1 = (function (){var statearr_17868 = state_17860;
(statearr_17868[(9)] = inst_17847__$1);

return statearr_17868;
})();
if(inst_17848){
var statearr_17869_17887 = state_17860__$1;
(statearr_17869_17887[(1)] = (8));

} else {
var statearr_17870_17888 = state_17860__$1;
(statearr_17870_17888[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17861 === (3))){
var inst_17858 = (state_17860[(2)]);
var state_17860__$1 = state_17860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17860__$1,inst_17858);
} else {
if((state_val_17861 === (2))){
var state_17860__$1 = state_17860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17860__$1,(4),ch);
} else {
if((state_val_17861 === (9))){
var inst_17847 = (state_17860[(9)]);
var inst_17840 = inst_17847;
var state_17860__$1 = (function (){var statearr_17871 = state_17860;
(statearr_17871[(7)] = inst_17840);

return statearr_17871;
})();
var statearr_17872_17889 = state_17860__$1;
(statearr_17872_17889[(2)] = null);

(statearr_17872_17889[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17861 === (5))){
var inst_17840 = (state_17860[(7)]);
var state_17860__$1 = state_17860;
var statearr_17873_17890 = state_17860__$1;
(statearr_17873_17890[(2)] = inst_17840);

(statearr_17873_17890[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17861 === (10))){
var inst_17854 = (state_17860[(2)]);
var state_17860__$1 = state_17860;
var statearr_17874_17891 = state_17860__$1;
(statearr_17874_17891[(2)] = inst_17854);

(statearr_17874_17891[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17861 === (8))){
var inst_17847 = (state_17860[(9)]);
var inst_17850 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_17847) : cljs.core.deref.call(null,inst_17847));
var state_17860__$1 = state_17860;
var statearr_17875_17892 = state_17860__$1;
(statearr_17875_17892[(2)] = inst_17850);

(statearr_17875_17892[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto__))
;
return ((function (switch__16949__auto__,c__17075__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16950__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16950__auto____0 = (function (){
var statearr_17879 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17879[(0)] = cljs$core$async$reduce_$_state_machine__16950__auto__);

(statearr_17879[(1)] = (1));

return statearr_17879;
});
var cljs$core$async$reduce_$_state_machine__16950__auto____1 = (function (state_17860){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_17860);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e17880){if((e17880 instanceof Object)){
var ex__16953__auto__ = e17880;
var statearr_17881_17893 = state_17860;
(statearr_17881_17893[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17860);

return cljs.core.cst$kw$recur;
} else {
throw e17880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__17894 = state_17860;
state_17860 = G__17894;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16950__auto__ = function(state_17860){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16950__auto____1.call(this,state_17860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16950__auto____0;
cljs$core$async$reduce_$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16950__auto____1;
return cljs$core$async$reduce_$_state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto__))
})();
var state__17077__auto__ = (function (){var statearr_17882 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_17882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto__);

return statearr_17882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto__))
);

return c__17075__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto__,f__$1){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto__,f__$1){
return (function (state_17914){
var state_val_17915 = (state_17914[(1)]);
if((state_val_17915 === (1))){
var inst_17909 = cljs.core.async.reduce(f__$1,init,ch);
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17914__$1,(2),inst_17909);
} else {
if((state_val_17915 === (2))){
var inst_17911 = (state_17914[(2)]);
var inst_17912 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17911) : f__$1.call(null,inst_17911));
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17914__$1,inst_17912);
} else {
return null;
}
}
});})(c__17075__auto__,f__$1))
;
return ((function (switch__16949__auto__,c__17075__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16950__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16950__auto____0 = (function (){
var statearr_17919 = [null,null,null,null,null,null,null];
(statearr_17919[(0)] = cljs$core$async$transduce_$_state_machine__16950__auto__);

(statearr_17919[(1)] = (1));

return statearr_17919;
});
var cljs$core$async$transduce_$_state_machine__16950__auto____1 = (function (state_17914){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_17914);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e17920){if((e17920 instanceof Object)){
var ex__16953__auto__ = e17920;
var statearr_17921_17923 = state_17914;
(statearr_17921_17923[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17914);

return cljs.core.cst$kw$recur;
} else {
throw e17920;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__17924 = state_17914;
state_17914 = G__17924;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16950__auto__ = function(state_17914){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16950__auto____1.call(this,state_17914);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16950__auto____0;
cljs$core$async$transduce_$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16950__auto____1;
return cljs$core$async$transduce_$_state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto__,f__$1))
})();
var state__17077__auto__ = (function (){var statearr_17922 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_17922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto__);

return statearr_17922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto__,f__$1))
);

return c__17075__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args17925 = [];
var len__9181__auto___17977 = arguments.length;
var i__9182__auto___17978 = (0);
while(true){
if((i__9182__auto___17978 < len__9181__auto___17977)){
args17925.push((arguments[i__9182__auto___17978]));

var G__17979 = (i__9182__auto___17978 + (1));
i__9182__auto___17978 = G__17979;
continue;
} else {
}
break;
}

var G__17927 = args17925.length;
switch (G__17927) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17925.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto__){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto__){
return (function (state_17952){
var state_val_17953 = (state_17952[(1)]);
if((state_val_17953 === (7))){
var inst_17934 = (state_17952[(2)]);
var state_17952__$1 = state_17952;
var statearr_17954_17981 = state_17952__$1;
(statearr_17954_17981[(2)] = inst_17934);

(statearr_17954_17981[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17953 === (1))){
var inst_17928 = cljs.core.seq(coll);
var inst_17929 = inst_17928;
var state_17952__$1 = (function (){var statearr_17955 = state_17952;
(statearr_17955[(7)] = inst_17929);

return statearr_17955;
})();
var statearr_17956_17982 = state_17952__$1;
(statearr_17956_17982[(2)] = null);

(statearr_17956_17982[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17953 === (4))){
var inst_17929 = (state_17952[(7)]);
var inst_17932 = cljs.core.first(inst_17929);
var state_17952__$1 = state_17952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17952__$1,(7),ch,inst_17932);
} else {
if((state_val_17953 === (13))){
var inst_17946 = (state_17952[(2)]);
var state_17952__$1 = state_17952;
var statearr_17957_17983 = state_17952__$1;
(statearr_17957_17983[(2)] = inst_17946);

(statearr_17957_17983[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17953 === (6))){
var inst_17937 = (state_17952[(2)]);
var state_17952__$1 = state_17952;
if(cljs.core.truth_(inst_17937)){
var statearr_17958_17984 = state_17952__$1;
(statearr_17958_17984[(1)] = (8));

} else {
var statearr_17959_17985 = state_17952__$1;
(statearr_17959_17985[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17953 === (3))){
var inst_17950 = (state_17952[(2)]);
var state_17952__$1 = state_17952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17952__$1,inst_17950);
} else {
if((state_val_17953 === (12))){
var state_17952__$1 = state_17952;
var statearr_17960_17986 = state_17952__$1;
(statearr_17960_17986[(2)] = null);

(statearr_17960_17986[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17953 === (2))){
var inst_17929 = (state_17952[(7)]);
var state_17952__$1 = state_17952;
if(cljs.core.truth_(inst_17929)){
var statearr_17961_17987 = state_17952__$1;
(statearr_17961_17987[(1)] = (4));

} else {
var statearr_17962_17988 = state_17952__$1;
(statearr_17962_17988[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17953 === (11))){
var inst_17943 = cljs.core.async.close_BANG_(ch);
var state_17952__$1 = state_17952;
var statearr_17963_17989 = state_17952__$1;
(statearr_17963_17989[(2)] = inst_17943);

(statearr_17963_17989[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17953 === (9))){
var state_17952__$1 = state_17952;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17964_17990 = state_17952__$1;
(statearr_17964_17990[(1)] = (11));

} else {
var statearr_17965_17991 = state_17952__$1;
(statearr_17965_17991[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17953 === (5))){
var inst_17929 = (state_17952[(7)]);
var state_17952__$1 = state_17952;
var statearr_17966_17992 = state_17952__$1;
(statearr_17966_17992[(2)] = inst_17929);

(statearr_17966_17992[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17953 === (10))){
var inst_17948 = (state_17952[(2)]);
var state_17952__$1 = state_17952;
var statearr_17967_17993 = state_17952__$1;
(statearr_17967_17993[(2)] = inst_17948);

(statearr_17967_17993[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17953 === (8))){
var inst_17929 = (state_17952[(7)]);
var inst_17939 = cljs.core.next(inst_17929);
var inst_17929__$1 = inst_17939;
var state_17952__$1 = (function (){var statearr_17968 = state_17952;
(statearr_17968[(7)] = inst_17929__$1);

return statearr_17968;
})();
var statearr_17969_17994 = state_17952__$1;
(statearr_17969_17994[(2)] = null);

(statearr_17969_17994[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto__))
;
return ((function (switch__16949__auto__,c__17075__auto__){
return (function() {
var cljs$core$async$state_machine__16950__auto__ = null;
var cljs$core$async$state_machine__16950__auto____0 = (function (){
var statearr_17973 = [null,null,null,null,null,null,null,null];
(statearr_17973[(0)] = cljs$core$async$state_machine__16950__auto__);

(statearr_17973[(1)] = (1));

return statearr_17973;
});
var cljs$core$async$state_machine__16950__auto____1 = (function (state_17952){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_17952);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e17974){if((e17974 instanceof Object)){
var ex__16953__auto__ = e17974;
var statearr_17975_17995 = state_17952;
(statearr_17975_17995[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17952);

return cljs.core.cst$kw$recur;
} else {
throw e17974;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__17996 = state_17952;
state_17952 = G__17996;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$state_machine__16950__auto__ = function(state_17952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16950__auto____1.call(this,state_17952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16950__auto____0;
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16950__auto____1;
return cljs$core$async$state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto__))
})();
var state__17077__auto__ = (function (){var statearr_17976 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_17976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto__);

return statearr_17976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto__))
);

return c__17075__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8678__auto__ = (((_ == null))?null:_);
var m__8679__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8679__auto__.call(null,_));
} else {
var m__8679__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8679__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8679__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8679__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8679__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8679__auto__.call(null,m,ch));
} else {
var m__8679__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8679__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8679__auto__.call(null,m));
} else {
var m__8679__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8679__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__18225 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18225) : cljs.core.atom.call(null,G__18225));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18226 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18226 = (function (ch,cs,meta18227){
this.ch = ch;
this.cs = cs;
this.meta18227 = meta18227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18228,meta18227__$1){
var self__ = this;
var _18228__$1 = this;
return (new cljs.core.async.t_cljs$core$async18226(self__.ch,self__.cs,meta18227__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18228){
var self__ = this;
var _18228__$1 = this;
return self__.meta18227;
});})(cs))
;

cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18229_18453 = self__.cs;
var G__18230_18454 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18229_18453,G__18230_18454) : cljs.core.reset_BANG_.call(null,G__18229_18453,G__18230_18454));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18226.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18227], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18226.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18226";

cljs.core.async.t_cljs$core$async18226.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async18226");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18226 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18226(ch__$1,cs__$1,meta18227){
return (new cljs.core.async.t_cljs$core$async18226(ch__$1,cs__$1,meta18227));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18226(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__17075__auto___18455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___18455,cs,m,dchan,dctr,done){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___18455,cs,m,dchan,dctr,done){
return (function (state_18365){
var state_val_18366 = (state_18365[(1)]);
if((state_val_18366 === (7))){
var inst_18361 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18367_18456 = state_18365__$1;
(statearr_18367_18456[(2)] = inst_18361);

(statearr_18367_18456[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (20))){
var inst_18264 = (state_18365[(7)]);
var inst_18276 = cljs.core.first(inst_18264);
var inst_18277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18276,(0),null);
var inst_18278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18276,(1),null);
var state_18365__$1 = (function (){var statearr_18368 = state_18365;
(statearr_18368[(8)] = inst_18277);

return statearr_18368;
})();
if(cljs.core.truth_(inst_18278)){
var statearr_18369_18457 = state_18365__$1;
(statearr_18369_18457[(1)] = (22));

} else {
var statearr_18370_18458 = state_18365__$1;
(statearr_18370_18458[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (27))){
var inst_18306 = (state_18365[(9)]);
var inst_18308 = (state_18365[(10)]);
var inst_18233 = (state_18365[(11)]);
var inst_18313 = (state_18365[(12)]);
var inst_18313__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18306,inst_18308);
var inst_18314 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18313__$1,inst_18233,done);
var state_18365__$1 = (function (){var statearr_18371 = state_18365;
(statearr_18371[(12)] = inst_18313__$1);

return statearr_18371;
})();
if(cljs.core.truth_(inst_18314)){
var statearr_18372_18459 = state_18365__$1;
(statearr_18372_18459[(1)] = (30));

} else {
var statearr_18373_18460 = state_18365__$1;
(statearr_18373_18460[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (1))){
var state_18365__$1 = state_18365;
var statearr_18374_18461 = state_18365__$1;
(statearr_18374_18461[(2)] = null);

(statearr_18374_18461[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (24))){
var inst_18264 = (state_18365[(7)]);
var inst_18283 = (state_18365[(2)]);
var inst_18284 = cljs.core.next(inst_18264);
var inst_18242 = inst_18284;
var inst_18243 = null;
var inst_18244 = (0);
var inst_18245 = (0);
var state_18365__$1 = (function (){var statearr_18375 = state_18365;
(statearr_18375[(13)] = inst_18283);

(statearr_18375[(14)] = inst_18243);

(statearr_18375[(15)] = inst_18242);

(statearr_18375[(16)] = inst_18244);

(statearr_18375[(17)] = inst_18245);

return statearr_18375;
})();
var statearr_18376_18462 = state_18365__$1;
(statearr_18376_18462[(2)] = null);

(statearr_18376_18462[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (39))){
var state_18365__$1 = state_18365;
var statearr_18380_18463 = state_18365__$1;
(statearr_18380_18463[(2)] = null);

(statearr_18380_18463[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (4))){
var inst_18233 = (state_18365[(11)]);
var inst_18233__$1 = (state_18365[(2)]);
var inst_18234 = (inst_18233__$1 == null);
var state_18365__$1 = (function (){var statearr_18381 = state_18365;
(statearr_18381[(11)] = inst_18233__$1);

return statearr_18381;
})();
if(cljs.core.truth_(inst_18234)){
var statearr_18382_18464 = state_18365__$1;
(statearr_18382_18464[(1)] = (5));

} else {
var statearr_18383_18465 = state_18365__$1;
(statearr_18383_18465[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (15))){
var inst_18243 = (state_18365[(14)]);
var inst_18242 = (state_18365[(15)]);
var inst_18244 = (state_18365[(16)]);
var inst_18245 = (state_18365[(17)]);
var inst_18260 = (state_18365[(2)]);
var inst_18261 = (inst_18245 + (1));
var tmp18377 = inst_18243;
var tmp18378 = inst_18242;
var tmp18379 = inst_18244;
var inst_18242__$1 = tmp18378;
var inst_18243__$1 = tmp18377;
var inst_18244__$1 = tmp18379;
var inst_18245__$1 = inst_18261;
var state_18365__$1 = (function (){var statearr_18384 = state_18365;
(statearr_18384[(14)] = inst_18243__$1);

(statearr_18384[(15)] = inst_18242__$1);

(statearr_18384[(18)] = inst_18260);

(statearr_18384[(16)] = inst_18244__$1);

(statearr_18384[(17)] = inst_18245__$1);

return statearr_18384;
})();
var statearr_18385_18466 = state_18365__$1;
(statearr_18385_18466[(2)] = null);

(statearr_18385_18466[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (21))){
var inst_18287 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18389_18467 = state_18365__$1;
(statearr_18389_18467[(2)] = inst_18287);

(statearr_18389_18467[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (31))){
var inst_18313 = (state_18365[(12)]);
var inst_18317 = done(null);
var inst_18318 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18313);
var state_18365__$1 = (function (){var statearr_18390 = state_18365;
(statearr_18390[(19)] = inst_18317);

return statearr_18390;
})();
var statearr_18391_18468 = state_18365__$1;
(statearr_18391_18468[(2)] = inst_18318);

(statearr_18391_18468[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (32))){
var inst_18306 = (state_18365[(9)]);
var inst_18305 = (state_18365[(20)]);
var inst_18308 = (state_18365[(10)]);
var inst_18307 = (state_18365[(21)]);
var inst_18320 = (state_18365[(2)]);
var inst_18321 = (inst_18308 + (1));
var tmp18386 = inst_18306;
var tmp18387 = inst_18305;
var tmp18388 = inst_18307;
var inst_18305__$1 = tmp18387;
var inst_18306__$1 = tmp18386;
var inst_18307__$1 = tmp18388;
var inst_18308__$1 = inst_18321;
var state_18365__$1 = (function (){var statearr_18392 = state_18365;
(statearr_18392[(9)] = inst_18306__$1);

(statearr_18392[(20)] = inst_18305__$1);

(statearr_18392[(10)] = inst_18308__$1);

(statearr_18392[(22)] = inst_18320);

(statearr_18392[(21)] = inst_18307__$1);

return statearr_18392;
})();
var statearr_18393_18469 = state_18365__$1;
(statearr_18393_18469[(2)] = null);

(statearr_18393_18469[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (40))){
var inst_18333 = (state_18365[(23)]);
var inst_18337 = done(null);
var inst_18338 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18333);
var state_18365__$1 = (function (){var statearr_18394 = state_18365;
(statearr_18394[(24)] = inst_18337);

return statearr_18394;
})();
var statearr_18395_18470 = state_18365__$1;
(statearr_18395_18470[(2)] = inst_18338);

(statearr_18395_18470[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (33))){
var inst_18324 = (state_18365[(25)]);
var inst_18326 = cljs.core.chunked_seq_QMARK_(inst_18324);
var state_18365__$1 = state_18365;
if(inst_18326){
var statearr_18396_18471 = state_18365__$1;
(statearr_18396_18471[(1)] = (36));

} else {
var statearr_18397_18472 = state_18365__$1;
(statearr_18397_18472[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (13))){
var inst_18254 = (state_18365[(26)]);
var inst_18257 = cljs.core.async.close_BANG_(inst_18254);
var state_18365__$1 = state_18365;
var statearr_18398_18473 = state_18365__$1;
(statearr_18398_18473[(2)] = inst_18257);

(statearr_18398_18473[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (22))){
var inst_18277 = (state_18365[(8)]);
var inst_18280 = cljs.core.async.close_BANG_(inst_18277);
var state_18365__$1 = state_18365;
var statearr_18399_18474 = state_18365__$1;
(statearr_18399_18474[(2)] = inst_18280);

(statearr_18399_18474[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (36))){
var inst_18324 = (state_18365[(25)]);
var inst_18328 = cljs.core.chunk_first(inst_18324);
var inst_18329 = cljs.core.chunk_rest(inst_18324);
var inst_18330 = cljs.core.count(inst_18328);
var inst_18305 = inst_18329;
var inst_18306 = inst_18328;
var inst_18307 = inst_18330;
var inst_18308 = (0);
var state_18365__$1 = (function (){var statearr_18400 = state_18365;
(statearr_18400[(9)] = inst_18306);

(statearr_18400[(20)] = inst_18305);

(statearr_18400[(10)] = inst_18308);

(statearr_18400[(21)] = inst_18307);

return statearr_18400;
})();
var statearr_18401_18475 = state_18365__$1;
(statearr_18401_18475[(2)] = null);

(statearr_18401_18475[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (41))){
var inst_18324 = (state_18365[(25)]);
var inst_18340 = (state_18365[(2)]);
var inst_18341 = cljs.core.next(inst_18324);
var inst_18305 = inst_18341;
var inst_18306 = null;
var inst_18307 = (0);
var inst_18308 = (0);
var state_18365__$1 = (function (){var statearr_18402 = state_18365;
(statearr_18402[(9)] = inst_18306);

(statearr_18402[(20)] = inst_18305);

(statearr_18402[(10)] = inst_18308);

(statearr_18402[(27)] = inst_18340);

(statearr_18402[(21)] = inst_18307);

return statearr_18402;
})();
var statearr_18403_18476 = state_18365__$1;
(statearr_18403_18476[(2)] = null);

(statearr_18403_18476[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (43))){
var state_18365__$1 = state_18365;
var statearr_18404_18477 = state_18365__$1;
(statearr_18404_18477[(2)] = null);

(statearr_18404_18477[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (29))){
var inst_18349 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18405_18478 = state_18365__$1;
(statearr_18405_18478[(2)] = inst_18349);

(statearr_18405_18478[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (44))){
var inst_18358 = (state_18365[(2)]);
var state_18365__$1 = (function (){var statearr_18406 = state_18365;
(statearr_18406[(28)] = inst_18358);

return statearr_18406;
})();
var statearr_18407_18479 = state_18365__$1;
(statearr_18407_18479[(2)] = null);

(statearr_18407_18479[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (6))){
var inst_18297 = (state_18365[(29)]);
var inst_18296 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_18297__$1 = cljs.core.keys(inst_18296);
var inst_18298 = cljs.core.count(inst_18297__$1);
var inst_18299 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_18298) : cljs.core.reset_BANG_.call(null,dctr,inst_18298));
var inst_18304 = cljs.core.seq(inst_18297__$1);
var inst_18305 = inst_18304;
var inst_18306 = null;
var inst_18307 = (0);
var inst_18308 = (0);
var state_18365__$1 = (function (){var statearr_18408 = state_18365;
(statearr_18408[(9)] = inst_18306);

(statearr_18408[(20)] = inst_18305);

(statearr_18408[(10)] = inst_18308);

(statearr_18408[(30)] = inst_18299);

(statearr_18408[(29)] = inst_18297__$1);

(statearr_18408[(21)] = inst_18307);

return statearr_18408;
})();
var statearr_18409_18480 = state_18365__$1;
(statearr_18409_18480[(2)] = null);

(statearr_18409_18480[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (28))){
var inst_18305 = (state_18365[(20)]);
var inst_18324 = (state_18365[(25)]);
var inst_18324__$1 = cljs.core.seq(inst_18305);
var state_18365__$1 = (function (){var statearr_18410 = state_18365;
(statearr_18410[(25)] = inst_18324__$1);

return statearr_18410;
})();
if(inst_18324__$1){
var statearr_18411_18481 = state_18365__$1;
(statearr_18411_18481[(1)] = (33));

} else {
var statearr_18412_18482 = state_18365__$1;
(statearr_18412_18482[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (25))){
var inst_18308 = (state_18365[(10)]);
var inst_18307 = (state_18365[(21)]);
var inst_18310 = (inst_18308 < inst_18307);
var inst_18311 = inst_18310;
var state_18365__$1 = state_18365;
if(cljs.core.truth_(inst_18311)){
var statearr_18413_18483 = state_18365__$1;
(statearr_18413_18483[(1)] = (27));

} else {
var statearr_18414_18484 = state_18365__$1;
(statearr_18414_18484[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (34))){
var state_18365__$1 = state_18365;
var statearr_18415_18485 = state_18365__$1;
(statearr_18415_18485[(2)] = null);

(statearr_18415_18485[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (17))){
var state_18365__$1 = state_18365;
var statearr_18416_18486 = state_18365__$1;
(statearr_18416_18486[(2)] = null);

(statearr_18416_18486[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (3))){
var inst_18363 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18365__$1,inst_18363);
} else {
if((state_val_18366 === (12))){
var inst_18292 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18417_18487 = state_18365__$1;
(statearr_18417_18487[(2)] = inst_18292);

(statearr_18417_18487[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (2))){
var state_18365__$1 = state_18365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18365__$1,(4),ch);
} else {
if((state_val_18366 === (23))){
var state_18365__$1 = state_18365;
var statearr_18418_18488 = state_18365__$1;
(statearr_18418_18488[(2)] = null);

(statearr_18418_18488[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (35))){
var inst_18347 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18419_18489 = state_18365__$1;
(statearr_18419_18489[(2)] = inst_18347);

(statearr_18419_18489[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (19))){
var inst_18264 = (state_18365[(7)]);
var inst_18268 = cljs.core.chunk_first(inst_18264);
var inst_18269 = cljs.core.chunk_rest(inst_18264);
var inst_18270 = cljs.core.count(inst_18268);
var inst_18242 = inst_18269;
var inst_18243 = inst_18268;
var inst_18244 = inst_18270;
var inst_18245 = (0);
var state_18365__$1 = (function (){var statearr_18420 = state_18365;
(statearr_18420[(14)] = inst_18243);

(statearr_18420[(15)] = inst_18242);

(statearr_18420[(16)] = inst_18244);

(statearr_18420[(17)] = inst_18245);

return statearr_18420;
})();
var statearr_18421_18490 = state_18365__$1;
(statearr_18421_18490[(2)] = null);

(statearr_18421_18490[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (11))){
var inst_18264 = (state_18365[(7)]);
var inst_18242 = (state_18365[(15)]);
var inst_18264__$1 = cljs.core.seq(inst_18242);
var state_18365__$1 = (function (){var statearr_18422 = state_18365;
(statearr_18422[(7)] = inst_18264__$1);

return statearr_18422;
})();
if(inst_18264__$1){
var statearr_18423_18491 = state_18365__$1;
(statearr_18423_18491[(1)] = (16));

} else {
var statearr_18424_18492 = state_18365__$1;
(statearr_18424_18492[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (9))){
var inst_18294 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18425_18493 = state_18365__$1;
(statearr_18425_18493[(2)] = inst_18294);

(statearr_18425_18493[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (5))){
var inst_18240 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_18241 = cljs.core.seq(inst_18240);
var inst_18242 = inst_18241;
var inst_18243 = null;
var inst_18244 = (0);
var inst_18245 = (0);
var state_18365__$1 = (function (){var statearr_18426 = state_18365;
(statearr_18426[(14)] = inst_18243);

(statearr_18426[(15)] = inst_18242);

(statearr_18426[(16)] = inst_18244);

(statearr_18426[(17)] = inst_18245);

return statearr_18426;
})();
var statearr_18427_18494 = state_18365__$1;
(statearr_18427_18494[(2)] = null);

(statearr_18427_18494[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (14))){
var state_18365__$1 = state_18365;
var statearr_18428_18495 = state_18365__$1;
(statearr_18428_18495[(2)] = null);

(statearr_18428_18495[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (45))){
var inst_18355 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18429_18496 = state_18365__$1;
(statearr_18429_18496[(2)] = inst_18355);

(statearr_18429_18496[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (26))){
var inst_18297 = (state_18365[(29)]);
var inst_18351 = (state_18365[(2)]);
var inst_18352 = cljs.core.seq(inst_18297);
var state_18365__$1 = (function (){var statearr_18430 = state_18365;
(statearr_18430[(31)] = inst_18351);

return statearr_18430;
})();
if(inst_18352){
var statearr_18431_18497 = state_18365__$1;
(statearr_18431_18497[(1)] = (42));

} else {
var statearr_18432_18498 = state_18365__$1;
(statearr_18432_18498[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (16))){
var inst_18264 = (state_18365[(7)]);
var inst_18266 = cljs.core.chunked_seq_QMARK_(inst_18264);
var state_18365__$1 = state_18365;
if(inst_18266){
var statearr_18433_18499 = state_18365__$1;
(statearr_18433_18499[(1)] = (19));

} else {
var statearr_18434_18500 = state_18365__$1;
(statearr_18434_18500[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (38))){
var inst_18344 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18435_18501 = state_18365__$1;
(statearr_18435_18501[(2)] = inst_18344);

(statearr_18435_18501[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (30))){
var state_18365__$1 = state_18365;
var statearr_18436_18502 = state_18365__$1;
(statearr_18436_18502[(2)] = null);

(statearr_18436_18502[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (10))){
var inst_18243 = (state_18365[(14)]);
var inst_18245 = (state_18365[(17)]);
var inst_18253 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18243,inst_18245);
var inst_18254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18253,(0),null);
var inst_18255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18253,(1),null);
var state_18365__$1 = (function (){var statearr_18437 = state_18365;
(statearr_18437[(26)] = inst_18254);

return statearr_18437;
})();
if(cljs.core.truth_(inst_18255)){
var statearr_18438_18503 = state_18365__$1;
(statearr_18438_18503[(1)] = (13));

} else {
var statearr_18439_18504 = state_18365__$1;
(statearr_18439_18504[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (18))){
var inst_18290 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18440_18505 = state_18365__$1;
(statearr_18440_18505[(2)] = inst_18290);

(statearr_18440_18505[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (42))){
var state_18365__$1 = state_18365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18365__$1,(45),dchan);
} else {
if((state_val_18366 === (37))){
var inst_18324 = (state_18365[(25)]);
var inst_18333 = (state_18365[(23)]);
var inst_18233 = (state_18365[(11)]);
var inst_18333__$1 = cljs.core.first(inst_18324);
var inst_18334 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18333__$1,inst_18233,done);
var state_18365__$1 = (function (){var statearr_18441 = state_18365;
(statearr_18441[(23)] = inst_18333__$1);

return statearr_18441;
})();
if(cljs.core.truth_(inst_18334)){
var statearr_18442_18506 = state_18365__$1;
(statearr_18442_18506[(1)] = (39));

} else {
var statearr_18443_18507 = state_18365__$1;
(statearr_18443_18507[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (8))){
var inst_18244 = (state_18365[(16)]);
var inst_18245 = (state_18365[(17)]);
var inst_18247 = (inst_18245 < inst_18244);
var inst_18248 = inst_18247;
var state_18365__$1 = state_18365;
if(cljs.core.truth_(inst_18248)){
var statearr_18444_18508 = state_18365__$1;
(statearr_18444_18508[(1)] = (10));

} else {
var statearr_18445_18509 = state_18365__$1;
(statearr_18445_18509[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto___18455,cs,m,dchan,dctr,done))
;
return ((function (switch__16949__auto__,c__17075__auto___18455,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16950__auto__ = null;
var cljs$core$async$mult_$_state_machine__16950__auto____0 = (function (){
var statearr_18449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18449[(0)] = cljs$core$async$mult_$_state_machine__16950__auto__);

(statearr_18449[(1)] = (1));

return statearr_18449;
});
var cljs$core$async$mult_$_state_machine__16950__auto____1 = (function (state_18365){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_18365);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e18450){if((e18450 instanceof Object)){
var ex__16953__auto__ = e18450;
var statearr_18451_18510 = state_18365;
(statearr_18451_18510[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18365);

return cljs.core.cst$kw$recur;
} else {
throw e18450;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__18511 = state_18365;
state_18365 = G__18511;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16950__auto__ = function(state_18365){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16950__auto____1.call(this,state_18365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16950__auto____0;
cljs$core$async$mult_$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16950__auto____1;
return cljs$core$async$mult_$_state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___18455,cs,m,dchan,dctr,done))
})();
var state__17077__auto__ = (function (){var statearr_18452 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_18452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___18455);

return statearr_18452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___18455,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args18512 = [];
var len__9181__auto___18515 = arguments.length;
var i__9182__auto___18516 = (0);
while(true){
if((i__9182__auto___18516 < len__9181__auto___18515)){
args18512.push((arguments[i__9182__auto___18516]));

var G__18517 = (i__9182__auto___18516 + (1));
i__9182__auto___18516 = G__18517;
continue;
} else {
}
break;
}

var G__18514 = args18512.length;
switch (G__18514) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18512.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8679__auto__.call(null,m,ch));
} else {
var m__8679__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8679__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8679__auto__.call(null,m,ch));
} else {
var m__8679__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8679__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8679__auto__.call(null,m));
} else {
var m__8679__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8679__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8679__auto__.call(null,m,state_map));
} else {
var m__8679__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8679__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8679__auto__.call(null,m,mode));
} else {
var m__8679__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8679__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___18529 = arguments.length;
var i__9182__auto___18530 = (0);
while(true){
if((i__9182__auto___18530 < len__9181__auto___18529)){
args__9188__auto__.push((arguments[i__9182__auto___18530]));

var G__18531 = (i__9182__auto___18530 + (1));
i__9182__auto___18530 = G__18531;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((3) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9189__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18523){
var map__18524 = p__18523;
var map__18524__$1 = ((((!((map__18524 == null)))?((((map__18524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18524):map__18524);
var opts = map__18524__$1;
var statearr_18526_18532 = state;
(statearr_18526_18532[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts(((function (map__18524,map__18524__$1,opts){
return (function (val){
var statearr_18527_18533 = state;
(statearr_18527_18533[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18524,map__18524__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_18528_18534 = state;
(statearr_18528_18534[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18519){
var G__18520 = cljs.core.first(seq18519);
var seq18519__$1 = cljs.core.next(seq18519);
var G__18521 = cljs.core.first(seq18519__$1);
var seq18519__$2 = cljs.core.next(seq18519__$1);
var G__18522 = cljs.core.first(seq18519__$2);
var seq18519__$3 = cljs.core.next(seq18519__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18520,G__18521,G__18522,seq18519__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__18706 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18706) : cljs.core.atom.call(null,G__18706));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__18707 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18707) : cljs.core.atom.call(null,G__18707));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18708 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18709){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18709 = meta18709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18710,meta18709__$1){
var self__ = this;
var _18710__$1 = this;
return (new cljs.core.async.t_cljs$core$async18708(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18709__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18710){
var self__ = this;
var _18710__$1 = this;
return self__.meta18709;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18708.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18708.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18708.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18708.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18708.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18711_18877 = self__.cs;
var G__18712_18878 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18711_18877,G__18712_18878) : cljs.core.reset_BANG_.call(null,G__18711_18877,G__18712_18878));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18708.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18708.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18708.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18709], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18708";

cljs.core.async.t_cljs$core$async18708.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async18708");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18708 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18708(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18709){
return (new cljs.core.async.t_cljs$core$async18708(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18709));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18708(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17075__auto___18879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___18879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___18879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18814){
var state_val_18815 = (state_18814[(1)]);
if((state_val_18815 === (7))){
var inst_18729 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18816_18880 = state_18814__$1;
(statearr_18816_18880[(2)] = inst_18729);

(statearr_18816_18880[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (20))){
var inst_18741 = (state_18814[(7)]);
var state_18814__$1 = state_18814;
var statearr_18817_18881 = state_18814__$1;
(statearr_18817_18881[(2)] = inst_18741);

(statearr_18817_18881[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (27))){
var state_18814__$1 = state_18814;
var statearr_18818_18882 = state_18814__$1;
(statearr_18818_18882[(2)] = null);

(statearr_18818_18882[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (1))){
var inst_18716 = (state_18814[(8)]);
var inst_18716__$1 = calc_state();
var inst_18718 = (inst_18716__$1 == null);
var inst_18719 = cljs.core.not(inst_18718);
var state_18814__$1 = (function (){var statearr_18819 = state_18814;
(statearr_18819[(8)] = inst_18716__$1);

return statearr_18819;
})();
if(inst_18719){
var statearr_18820_18883 = state_18814__$1;
(statearr_18820_18883[(1)] = (2));

} else {
var statearr_18821_18884 = state_18814__$1;
(statearr_18821_18884[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (24))){
var inst_18774 = (state_18814[(9)]);
var inst_18788 = (state_18814[(10)]);
var inst_18765 = (state_18814[(11)]);
var inst_18788__$1 = (inst_18765.cljs$core$IFn$_invoke$arity$1 ? inst_18765.cljs$core$IFn$_invoke$arity$1(inst_18774) : inst_18765.call(null,inst_18774));
var state_18814__$1 = (function (){var statearr_18822 = state_18814;
(statearr_18822[(10)] = inst_18788__$1);

return statearr_18822;
})();
if(cljs.core.truth_(inst_18788__$1)){
var statearr_18823_18885 = state_18814__$1;
(statearr_18823_18885[(1)] = (29));

} else {
var statearr_18824_18886 = state_18814__$1;
(statearr_18824_18886[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (4))){
var inst_18732 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
if(cljs.core.truth_(inst_18732)){
var statearr_18825_18887 = state_18814__$1;
(statearr_18825_18887[(1)] = (8));

} else {
var statearr_18826_18888 = state_18814__$1;
(statearr_18826_18888[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (15))){
var inst_18759 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
if(cljs.core.truth_(inst_18759)){
var statearr_18827_18889 = state_18814__$1;
(statearr_18827_18889[(1)] = (19));

} else {
var statearr_18828_18890 = state_18814__$1;
(statearr_18828_18890[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (21))){
var inst_18764 = (state_18814[(12)]);
var inst_18764__$1 = (state_18814[(2)]);
var inst_18765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18764__$1,cljs.core.cst$kw$solos);
var inst_18766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18764__$1,cljs.core.cst$kw$mutes);
var inst_18767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18764__$1,cljs.core.cst$kw$reads);
var state_18814__$1 = (function (){var statearr_18829 = state_18814;
(statearr_18829[(12)] = inst_18764__$1);

(statearr_18829[(11)] = inst_18765);

(statearr_18829[(13)] = inst_18766);

return statearr_18829;
})();
return cljs.core.async.ioc_alts_BANG_(state_18814__$1,(22),inst_18767);
} else {
if((state_val_18815 === (31))){
var inst_18796 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
if(cljs.core.truth_(inst_18796)){
var statearr_18830_18891 = state_18814__$1;
(statearr_18830_18891[(1)] = (32));

} else {
var statearr_18831_18892 = state_18814__$1;
(statearr_18831_18892[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (32))){
var inst_18773 = (state_18814[(14)]);
var state_18814__$1 = state_18814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18814__$1,(35),out,inst_18773);
} else {
if((state_val_18815 === (33))){
var inst_18764 = (state_18814[(12)]);
var inst_18741 = inst_18764;
var state_18814__$1 = (function (){var statearr_18832 = state_18814;
(statearr_18832[(7)] = inst_18741);

return statearr_18832;
})();
var statearr_18833_18893 = state_18814__$1;
(statearr_18833_18893[(2)] = null);

(statearr_18833_18893[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (13))){
var inst_18741 = (state_18814[(7)]);
var inst_18748 = inst_18741.cljs$lang$protocol_mask$partition0$;
var inst_18749 = (inst_18748 & (64));
var inst_18750 = inst_18741.cljs$core$ISeq$;
var inst_18751 = (cljs.core.PROTOCOL_SENTINEL === inst_18750);
var inst_18752 = (inst_18749) || (inst_18751);
var state_18814__$1 = state_18814;
if(cljs.core.truth_(inst_18752)){
var statearr_18834_18894 = state_18814__$1;
(statearr_18834_18894[(1)] = (16));

} else {
var statearr_18835_18895 = state_18814__$1;
(statearr_18835_18895[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (22))){
var inst_18774 = (state_18814[(9)]);
var inst_18773 = (state_18814[(14)]);
var inst_18772 = (state_18814[(2)]);
var inst_18773__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18772,(0),null);
var inst_18774__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18772,(1),null);
var inst_18775 = (inst_18773__$1 == null);
var inst_18776 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18774__$1,change);
var inst_18777 = (inst_18775) || (inst_18776);
var state_18814__$1 = (function (){var statearr_18836 = state_18814;
(statearr_18836[(9)] = inst_18774__$1);

(statearr_18836[(14)] = inst_18773__$1);

return statearr_18836;
})();
if(cljs.core.truth_(inst_18777)){
var statearr_18837_18896 = state_18814__$1;
(statearr_18837_18896[(1)] = (23));

} else {
var statearr_18838_18897 = state_18814__$1;
(statearr_18838_18897[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (36))){
var inst_18764 = (state_18814[(12)]);
var inst_18741 = inst_18764;
var state_18814__$1 = (function (){var statearr_18839 = state_18814;
(statearr_18839[(7)] = inst_18741);

return statearr_18839;
})();
var statearr_18840_18898 = state_18814__$1;
(statearr_18840_18898[(2)] = null);

(statearr_18840_18898[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (29))){
var inst_18788 = (state_18814[(10)]);
var state_18814__$1 = state_18814;
var statearr_18841_18899 = state_18814__$1;
(statearr_18841_18899[(2)] = inst_18788);

(statearr_18841_18899[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (6))){
var state_18814__$1 = state_18814;
var statearr_18842_18900 = state_18814__$1;
(statearr_18842_18900[(2)] = false);

(statearr_18842_18900[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (28))){
var inst_18784 = (state_18814[(2)]);
var inst_18785 = calc_state();
var inst_18741 = inst_18785;
var state_18814__$1 = (function (){var statearr_18843 = state_18814;
(statearr_18843[(7)] = inst_18741);

(statearr_18843[(15)] = inst_18784);

return statearr_18843;
})();
var statearr_18844_18901 = state_18814__$1;
(statearr_18844_18901[(2)] = null);

(statearr_18844_18901[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (25))){
var inst_18810 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18845_18902 = state_18814__$1;
(statearr_18845_18902[(2)] = inst_18810);

(statearr_18845_18902[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (34))){
var inst_18808 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18846_18903 = state_18814__$1;
(statearr_18846_18903[(2)] = inst_18808);

(statearr_18846_18903[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (17))){
var state_18814__$1 = state_18814;
var statearr_18847_18904 = state_18814__$1;
(statearr_18847_18904[(2)] = false);

(statearr_18847_18904[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (3))){
var state_18814__$1 = state_18814;
var statearr_18848_18905 = state_18814__$1;
(statearr_18848_18905[(2)] = false);

(statearr_18848_18905[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (12))){
var inst_18812 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18814__$1,inst_18812);
} else {
if((state_val_18815 === (2))){
var inst_18716 = (state_18814[(8)]);
var inst_18721 = inst_18716.cljs$lang$protocol_mask$partition0$;
var inst_18722 = (inst_18721 & (64));
var inst_18723 = inst_18716.cljs$core$ISeq$;
var inst_18724 = (cljs.core.PROTOCOL_SENTINEL === inst_18723);
var inst_18725 = (inst_18722) || (inst_18724);
var state_18814__$1 = state_18814;
if(cljs.core.truth_(inst_18725)){
var statearr_18849_18906 = state_18814__$1;
(statearr_18849_18906[(1)] = (5));

} else {
var statearr_18850_18907 = state_18814__$1;
(statearr_18850_18907[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (23))){
var inst_18773 = (state_18814[(14)]);
var inst_18779 = (inst_18773 == null);
var state_18814__$1 = state_18814;
if(cljs.core.truth_(inst_18779)){
var statearr_18851_18908 = state_18814__$1;
(statearr_18851_18908[(1)] = (26));

} else {
var statearr_18852_18909 = state_18814__$1;
(statearr_18852_18909[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (35))){
var inst_18799 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
if(cljs.core.truth_(inst_18799)){
var statearr_18853_18910 = state_18814__$1;
(statearr_18853_18910[(1)] = (36));

} else {
var statearr_18854_18911 = state_18814__$1;
(statearr_18854_18911[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (19))){
var inst_18741 = (state_18814[(7)]);
var inst_18761 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18741);
var state_18814__$1 = state_18814;
var statearr_18855_18912 = state_18814__$1;
(statearr_18855_18912[(2)] = inst_18761);

(statearr_18855_18912[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (11))){
var inst_18741 = (state_18814[(7)]);
var inst_18745 = (inst_18741 == null);
var inst_18746 = cljs.core.not(inst_18745);
var state_18814__$1 = state_18814;
if(inst_18746){
var statearr_18856_18913 = state_18814__$1;
(statearr_18856_18913[(1)] = (13));

} else {
var statearr_18857_18914 = state_18814__$1;
(statearr_18857_18914[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (9))){
var inst_18716 = (state_18814[(8)]);
var state_18814__$1 = state_18814;
var statearr_18858_18915 = state_18814__$1;
(statearr_18858_18915[(2)] = inst_18716);

(statearr_18858_18915[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (5))){
var state_18814__$1 = state_18814;
var statearr_18859_18916 = state_18814__$1;
(statearr_18859_18916[(2)] = true);

(statearr_18859_18916[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (14))){
var state_18814__$1 = state_18814;
var statearr_18860_18917 = state_18814__$1;
(statearr_18860_18917[(2)] = false);

(statearr_18860_18917[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (26))){
var inst_18774 = (state_18814[(9)]);
var inst_18781 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18774);
var state_18814__$1 = state_18814;
var statearr_18861_18918 = state_18814__$1;
(statearr_18861_18918[(2)] = inst_18781);

(statearr_18861_18918[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (16))){
var state_18814__$1 = state_18814;
var statearr_18862_18919 = state_18814__$1;
(statearr_18862_18919[(2)] = true);

(statearr_18862_18919[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (38))){
var inst_18804 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18863_18920 = state_18814__$1;
(statearr_18863_18920[(2)] = inst_18804);

(statearr_18863_18920[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (30))){
var inst_18774 = (state_18814[(9)]);
var inst_18765 = (state_18814[(11)]);
var inst_18766 = (state_18814[(13)]);
var inst_18791 = cljs.core.empty_QMARK_(inst_18765);
var inst_18792 = (inst_18766.cljs$core$IFn$_invoke$arity$1 ? inst_18766.cljs$core$IFn$_invoke$arity$1(inst_18774) : inst_18766.call(null,inst_18774));
var inst_18793 = cljs.core.not(inst_18792);
var inst_18794 = (inst_18791) && (inst_18793);
var state_18814__$1 = state_18814;
var statearr_18864_18921 = state_18814__$1;
(statearr_18864_18921[(2)] = inst_18794);

(statearr_18864_18921[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (10))){
var inst_18716 = (state_18814[(8)]);
var inst_18737 = (state_18814[(2)]);
var inst_18738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18737,cljs.core.cst$kw$solos);
var inst_18739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18737,cljs.core.cst$kw$mutes);
var inst_18740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18737,cljs.core.cst$kw$reads);
var inst_18741 = inst_18716;
var state_18814__$1 = (function (){var statearr_18865 = state_18814;
(statearr_18865[(16)] = inst_18739);

(statearr_18865[(17)] = inst_18738);

(statearr_18865[(7)] = inst_18741);

(statearr_18865[(18)] = inst_18740);

return statearr_18865;
})();
var statearr_18866_18922 = state_18814__$1;
(statearr_18866_18922[(2)] = null);

(statearr_18866_18922[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (18))){
var inst_18756 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18867_18923 = state_18814__$1;
(statearr_18867_18923[(2)] = inst_18756);

(statearr_18867_18923[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (37))){
var state_18814__$1 = state_18814;
var statearr_18868_18924 = state_18814__$1;
(statearr_18868_18924[(2)] = null);

(statearr_18868_18924[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18815 === (8))){
var inst_18716 = (state_18814[(8)]);
var inst_18734 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18716);
var state_18814__$1 = state_18814;
var statearr_18869_18925 = state_18814__$1;
(statearr_18869_18925[(2)] = inst_18734);

(statearr_18869_18925[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto___18879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16949__auto__,c__17075__auto___18879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16950__auto__ = null;
var cljs$core$async$mix_$_state_machine__16950__auto____0 = (function (){
var statearr_18873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18873[(0)] = cljs$core$async$mix_$_state_machine__16950__auto__);

(statearr_18873[(1)] = (1));

return statearr_18873;
});
var cljs$core$async$mix_$_state_machine__16950__auto____1 = (function (state_18814){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_18814);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e18874){if((e18874 instanceof Object)){
var ex__16953__auto__ = e18874;
var statearr_18875_18926 = state_18814;
(statearr_18875_18926[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18814);

return cljs.core.cst$kw$recur;
} else {
throw e18874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__18927 = state_18814;
state_18814 = G__18927;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16950__auto__ = function(state_18814){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16950__auto____1.call(this,state_18814);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16950__auto____0;
cljs$core$async$mix_$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16950__auto____1;
return cljs$core$async$mix_$_state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___18879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17077__auto__ = (function (){var statearr_18876 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_18876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___18879);

return statearr_18876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___18879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8678__auto__ = (((p == null))?null:p);
var m__8679__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8679__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8679__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8679__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8678__auto__ = (((p == null))?null:p);
var m__8679__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8679__auto__.call(null,p,v,ch));
} else {
var m__8679__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8679__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args18928 = [];
var len__9181__auto___18931 = arguments.length;
var i__9182__auto___18932 = (0);
while(true){
if((i__9182__auto___18932 < len__9181__auto___18931)){
args18928.push((arguments[i__9182__auto___18932]));

var G__18933 = (i__9182__auto___18932 + (1));
i__9182__auto___18932 = G__18933;
continue;
} else {
}
break;
}

var G__18930 = args18928.length;
switch (G__18930) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18928.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8678__auto__ = (((p == null))?null:p);
var m__8679__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8679__auto__.call(null,p));
} else {
var m__8679__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8679__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8678__auto__ = (((p == null))?null:p);
var m__8679__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8679__auto__.call(null,p,v));
} else {
var m__8679__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8679__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args18936 = [];
var len__9181__auto___19064 = arguments.length;
var i__9182__auto___19065 = (0);
while(true){
if((i__9182__auto___19065 < len__9181__auto___19064)){
args18936.push((arguments[i__9182__auto___19065]));

var G__19066 = (i__9182__auto___19065 + (1));
i__9182__auto___19065 = G__19066;
continue;
} else {
}
break;
}

var G__18938 = args18936.length;
switch (G__18938) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18936.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__18939 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18939) : cljs.core.atom.call(null,G__18939));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7960__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7960__auto__,mults){
return (function (p1__18935_SHARP_){
if(cljs.core.truth_((p1__18935_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18935_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18935_SHARP_.call(null,topic)))){
return p1__18935_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18935_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7960__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18940 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18940 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18941){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18941 = meta18941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18942,meta18941__$1){
var self__ = this;
var _18942__$1 = this;
return (new cljs.core.async.t_cljs$core$async18940(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18941__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18942){
var self__ = this;
var _18942__$1 = this;
return self__.meta18941;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18943 = self__.mults;
var G__18944 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18943,G__18944) : cljs.core.reset_BANG_.call(null,G__18943,G__18944));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18940.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18941], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18940.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18940";

cljs.core.async.t_cljs$core$async18940.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async18940");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18940 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18940(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18941){
return (new cljs.core.async.t_cljs$core$async18940(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18941));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18940(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17075__auto___19068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___19068,mults,ensure_mult,p){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___19068,mults,ensure_mult,p){
return (function (state_19016){
var state_val_19017 = (state_19016[(1)]);
if((state_val_19017 === (7))){
var inst_19012 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19018_19069 = state_19016__$1;
(statearr_19018_19069[(2)] = inst_19012);

(statearr_19018_19069[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (20))){
var state_19016__$1 = state_19016;
var statearr_19019_19070 = state_19016__$1;
(statearr_19019_19070[(2)] = null);

(statearr_19019_19070[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (1))){
var state_19016__$1 = state_19016;
var statearr_19020_19071 = state_19016__$1;
(statearr_19020_19071[(2)] = null);

(statearr_19020_19071[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (24))){
var inst_18995 = (state_19016[(7)]);
var inst_19004 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18995);
var state_19016__$1 = state_19016;
var statearr_19021_19072 = state_19016__$1;
(statearr_19021_19072[(2)] = inst_19004);

(statearr_19021_19072[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (4))){
var inst_18947 = (state_19016[(8)]);
var inst_18947__$1 = (state_19016[(2)]);
var inst_18948 = (inst_18947__$1 == null);
var state_19016__$1 = (function (){var statearr_19022 = state_19016;
(statearr_19022[(8)] = inst_18947__$1);

return statearr_19022;
})();
if(cljs.core.truth_(inst_18948)){
var statearr_19023_19073 = state_19016__$1;
(statearr_19023_19073[(1)] = (5));

} else {
var statearr_19024_19074 = state_19016__$1;
(statearr_19024_19074[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (15))){
var inst_18989 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19025_19075 = state_19016__$1;
(statearr_19025_19075[(2)] = inst_18989);

(statearr_19025_19075[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (21))){
var inst_19009 = (state_19016[(2)]);
var state_19016__$1 = (function (){var statearr_19026 = state_19016;
(statearr_19026[(9)] = inst_19009);

return statearr_19026;
})();
var statearr_19027_19076 = state_19016__$1;
(statearr_19027_19076[(2)] = null);

(statearr_19027_19076[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (13))){
var inst_18971 = (state_19016[(10)]);
var inst_18973 = cljs.core.chunked_seq_QMARK_(inst_18971);
var state_19016__$1 = state_19016;
if(inst_18973){
var statearr_19028_19077 = state_19016__$1;
(statearr_19028_19077[(1)] = (16));

} else {
var statearr_19029_19078 = state_19016__$1;
(statearr_19029_19078[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (22))){
var inst_19001 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
if(cljs.core.truth_(inst_19001)){
var statearr_19030_19079 = state_19016__$1;
(statearr_19030_19079[(1)] = (23));

} else {
var statearr_19031_19080 = state_19016__$1;
(statearr_19031_19080[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (6))){
var inst_18995 = (state_19016[(7)]);
var inst_18947 = (state_19016[(8)]);
var inst_18997 = (state_19016[(11)]);
var inst_18995__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18947) : topic_fn.call(null,inst_18947));
var inst_18996 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18997__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18996,inst_18995__$1);
var state_19016__$1 = (function (){var statearr_19032 = state_19016;
(statearr_19032[(7)] = inst_18995__$1);

(statearr_19032[(11)] = inst_18997__$1);

return statearr_19032;
})();
if(cljs.core.truth_(inst_18997__$1)){
var statearr_19033_19081 = state_19016__$1;
(statearr_19033_19081[(1)] = (19));

} else {
var statearr_19034_19082 = state_19016__$1;
(statearr_19034_19082[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (25))){
var inst_19006 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19035_19083 = state_19016__$1;
(statearr_19035_19083[(2)] = inst_19006);

(statearr_19035_19083[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (17))){
var inst_18971 = (state_19016[(10)]);
var inst_18980 = cljs.core.first(inst_18971);
var inst_18981 = cljs.core.async.muxch_STAR_(inst_18980);
var inst_18982 = cljs.core.async.close_BANG_(inst_18981);
var inst_18983 = cljs.core.next(inst_18971);
var inst_18957 = inst_18983;
var inst_18958 = null;
var inst_18959 = (0);
var inst_18960 = (0);
var state_19016__$1 = (function (){var statearr_19036 = state_19016;
(statearr_19036[(12)] = inst_18958);

(statearr_19036[(13)] = inst_18957);

(statearr_19036[(14)] = inst_18959);

(statearr_19036[(15)] = inst_18960);

(statearr_19036[(16)] = inst_18982);

return statearr_19036;
})();
var statearr_19037_19084 = state_19016__$1;
(statearr_19037_19084[(2)] = null);

(statearr_19037_19084[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (3))){
var inst_19014 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19016__$1,inst_19014);
} else {
if((state_val_19017 === (12))){
var inst_18991 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19038_19085 = state_19016__$1;
(statearr_19038_19085[(2)] = inst_18991);

(statearr_19038_19085[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (2))){
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19016__$1,(4),ch);
} else {
if((state_val_19017 === (23))){
var state_19016__$1 = state_19016;
var statearr_19039_19086 = state_19016__$1;
(statearr_19039_19086[(2)] = null);

(statearr_19039_19086[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (19))){
var inst_18947 = (state_19016[(8)]);
var inst_18997 = (state_19016[(11)]);
var inst_18999 = cljs.core.async.muxch_STAR_(inst_18997);
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19016__$1,(22),inst_18999,inst_18947);
} else {
if((state_val_19017 === (11))){
var inst_18957 = (state_19016[(13)]);
var inst_18971 = (state_19016[(10)]);
var inst_18971__$1 = cljs.core.seq(inst_18957);
var state_19016__$1 = (function (){var statearr_19040 = state_19016;
(statearr_19040[(10)] = inst_18971__$1);

return statearr_19040;
})();
if(inst_18971__$1){
var statearr_19041_19087 = state_19016__$1;
(statearr_19041_19087[(1)] = (13));

} else {
var statearr_19042_19088 = state_19016__$1;
(statearr_19042_19088[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (9))){
var inst_18993 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19043_19089 = state_19016__$1;
(statearr_19043_19089[(2)] = inst_18993);

(statearr_19043_19089[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (5))){
var inst_18954 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18955 = cljs.core.vals(inst_18954);
var inst_18956 = cljs.core.seq(inst_18955);
var inst_18957 = inst_18956;
var inst_18958 = null;
var inst_18959 = (0);
var inst_18960 = (0);
var state_19016__$1 = (function (){var statearr_19044 = state_19016;
(statearr_19044[(12)] = inst_18958);

(statearr_19044[(13)] = inst_18957);

(statearr_19044[(14)] = inst_18959);

(statearr_19044[(15)] = inst_18960);

return statearr_19044;
})();
var statearr_19045_19090 = state_19016__$1;
(statearr_19045_19090[(2)] = null);

(statearr_19045_19090[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (14))){
var state_19016__$1 = state_19016;
var statearr_19049_19091 = state_19016__$1;
(statearr_19049_19091[(2)] = null);

(statearr_19049_19091[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (16))){
var inst_18971 = (state_19016[(10)]);
var inst_18975 = cljs.core.chunk_first(inst_18971);
var inst_18976 = cljs.core.chunk_rest(inst_18971);
var inst_18977 = cljs.core.count(inst_18975);
var inst_18957 = inst_18976;
var inst_18958 = inst_18975;
var inst_18959 = inst_18977;
var inst_18960 = (0);
var state_19016__$1 = (function (){var statearr_19050 = state_19016;
(statearr_19050[(12)] = inst_18958);

(statearr_19050[(13)] = inst_18957);

(statearr_19050[(14)] = inst_18959);

(statearr_19050[(15)] = inst_18960);

return statearr_19050;
})();
var statearr_19051_19092 = state_19016__$1;
(statearr_19051_19092[(2)] = null);

(statearr_19051_19092[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (10))){
var inst_18958 = (state_19016[(12)]);
var inst_18957 = (state_19016[(13)]);
var inst_18959 = (state_19016[(14)]);
var inst_18960 = (state_19016[(15)]);
var inst_18965 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18958,inst_18960);
var inst_18966 = cljs.core.async.muxch_STAR_(inst_18965);
var inst_18967 = cljs.core.async.close_BANG_(inst_18966);
var inst_18968 = (inst_18960 + (1));
var tmp19046 = inst_18958;
var tmp19047 = inst_18957;
var tmp19048 = inst_18959;
var inst_18957__$1 = tmp19047;
var inst_18958__$1 = tmp19046;
var inst_18959__$1 = tmp19048;
var inst_18960__$1 = inst_18968;
var state_19016__$1 = (function (){var statearr_19052 = state_19016;
(statearr_19052[(12)] = inst_18958__$1);

(statearr_19052[(13)] = inst_18957__$1);

(statearr_19052[(14)] = inst_18959__$1);

(statearr_19052[(15)] = inst_18960__$1);

(statearr_19052[(17)] = inst_18967);

return statearr_19052;
})();
var statearr_19053_19093 = state_19016__$1;
(statearr_19053_19093[(2)] = null);

(statearr_19053_19093[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (18))){
var inst_18986 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19054_19094 = state_19016__$1;
(statearr_19054_19094[(2)] = inst_18986);

(statearr_19054_19094[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (8))){
var inst_18959 = (state_19016[(14)]);
var inst_18960 = (state_19016[(15)]);
var inst_18962 = (inst_18960 < inst_18959);
var inst_18963 = inst_18962;
var state_19016__$1 = state_19016;
if(cljs.core.truth_(inst_18963)){
var statearr_19055_19095 = state_19016__$1;
(statearr_19055_19095[(1)] = (10));

} else {
var statearr_19056_19096 = state_19016__$1;
(statearr_19056_19096[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto___19068,mults,ensure_mult,p))
;
return ((function (switch__16949__auto__,c__17075__auto___19068,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16950__auto__ = null;
var cljs$core$async$state_machine__16950__auto____0 = (function (){
var statearr_19060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19060[(0)] = cljs$core$async$state_machine__16950__auto__);

(statearr_19060[(1)] = (1));

return statearr_19060;
});
var cljs$core$async$state_machine__16950__auto____1 = (function (state_19016){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_19016);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e19061){if((e19061 instanceof Object)){
var ex__16953__auto__ = e19061;
var statearr_19062_19097 = state_19016;
(statearr_19062_19097[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19016);

return cljs.core.cst$kw$recur;
} else {
throw e19061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__19098 = state_19016;
state_19016 = G__19098;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$state_machine__16950__auto__ = function(state_19016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16950__auto____1.call(this,state_19016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16950__auto____0;
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16950__auto____1;
return cljs$core$async$state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___19068,mults,ensure_mult,p))
})();
var state__17077__auto__ = (function (){var statearr_19063 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_19063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___19068);

return statearr_19063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___19068,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args19099 = [];
var len__9181__auto___19102 = arguments.length;
var i__9182__auto___19103 = (0);
while(true){
if((i__9182__auto___19103 < len__9181__auto___19102)){
args19099.push((arguments[i__9182__auto___19103]));

var G__19104 = (i__9182__auto___19103 + (1));
i__9182__auto___19103 = G__19104;
continue;
} else {
}
break;
}

var G__19101 = args19099.length;
switch (G__19101) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19099.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args19106 = [];
var len__9181__auto___19109 = arguments.length;
var i__9182__auto___19110 = (0);
while(true){
if((i__9182__auto___19110 < len__9181__auto___19109)){
args19106.push((arguments[i__9182__auto___19110]));

var G__19111 = (i__9182__auto___19110 + (1));
i__9182__auto___19110 = G__19111;
continue;
} else {
}
break;
}

var G__19108 = args19106.length;
switch (G__19108) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19106.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args19113 = [];
var len__9181__auto___19184 = arguments.length;
var i__9182__auto___19185 = (0);
while(true){
if((i__9182__auto___19185 < len__9181__auto___19184)){
args19113.push((arguments[i__9182__auto___19185]));

var G__19186 = (i__9182__auto___19185 + (1));
i__9182__auto___19185 = G__19186;
continue;
} else {
}
break;
}

var G__19115 = args19113.length;
switch (G__19115) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19113.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__17075__auto___19188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___19188,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___19188,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19154){
var state_val_19155 = (state_19154[(1)]);
if((state_val_19155 === (7))){
var state_19154__$1 = state_19154;
var statearr_19156_19189 = state_19154__$1;
(statearr_19156_19189[(2)] = null);

(statearr_19156_19189[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (1))){
var state_19154__$1 = state_19154;
var statearr_19157_19190 = state_19154__$1;
(statearr_19157_19190[(2)] = null);

(statearr_19157_19190[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (4))){
var inst_19118 = (state_19154[(7)]);
var inst_19120 = (inst_19118 < cnt);
var state_19154__$1 = state_19154;
if(cljs.core.truth_(inst_19120)){
var statearr_19158_19191 = state_19154__$1;
(statearr_19158_19191[(1)] = (6));

} else {
var statearr_19159_19192 = state_19154__$1;
(statearr_19159_19192[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (15))){
var inst_19150 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
var statearr_19160_19193 = state_19154__$1;
(statearr_19160_19193[(2)] = inst_19150);

(statearr_19160_19193[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (13))){
var inst_19143 = cljs.core.async.close_BANG_(out);
var state_19154__$1 = state_19154;
var statearr_19161_19194 = state_19154__$1;
(statearr_19161_19194[(2)] = inst_19143);

(statearr_19161_19194[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (6))){
var state_19154__$1 = state_19154;
var statearr_19162_19195 = state_19154__$1;
(statearr_19162_19195[(2)] = null);

(statearr_19162_19195[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (3))){
var inst_19152 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19154__$1,inst_19152);
} else {
if((state_val_19155 === (12))){
var inst_19140 = (state_19154[(8)]);
var inst_19140__$1 = (state_19154[(2)]);
var inst_19141 = cljs.core.some(cljs.core.nil_QMARK_,inst_19140__$1);
var state_19154__$1 = (function (){var statearr_19163 = state_19154;
(statearr_19163[(8)] = inst_19140__$1);

return statearr_19163;
})();
if(cljs.core.truth_(inst_19141)){
var statearr_19164_19196 = state_19154__$1;
(statearr_19164_19196[(1)] = (13));

} else {
var statearr_19165_19197 = state_19154__$1;
(statearr_19165_19197[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (2))){
var inst_19117 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_19118 = (0);
var state_19154__$1 = (function (){var statearr_19166 = state_19154;
(statearr_19166[(7)] = inst_19118);

(statearr_19166[(9)] = inst_19117);

return statearr_19166;
})();
var statearr_19167_19198 = state_19154__$1;
(statearr_19167_19198[(2)] = null);

(statearr_19167_19198[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (11))){
var inst_19118 = (state_19154[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19154,(10),Object,null,(9));
var inst_19127 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19118) : chs__$1.call(null,inst_19118));
var inst_19128 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19118) : done.call(null,inst_19118));
var inst_19129 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19127,inst_19128);
var state_19154__$1 = state_19154;
var statearr_19168_19199 = state_19154__$1;
(statearr_19168_19199[(2)] = inst_19129);


cljs.core.async.impl.ioc_helpers.process_exception(state_19154__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (9))){
var inst_19118 = (state_19154[(7)]);
var inst_19131 = (state_19154[(2)]);
var inst_19132 = (inst_19118 + (1));
var inst_19118__$1 = inst_19132;
var state_19154__$1 = (function (){var statearr_19169 = state_19154;
(statearr_19169[(7)] = inst_19118__$1);

(statearr_19169[(10)] = inst_19131);

return statearr_19169;
})();
var statearr_19170_19200 = state_19154__$1;
(statearr_19170_19200[(2)] = null);

(statearr_19170_19200[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (5))){
var inst_19138 = (state_19154[(2)]);
var state_19154__$1 = (function (){var statearr_19171 = state_19154;
(statearr_19171[(11)] = inst_19138);

return statearr_19171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19154__$1,(12),dchan);
} else {
if((state_val_19155 === (14))){
var inst_19140 = (state_19154[(8)]);
var inst_19145 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19140);
var state_19154__$1 = state_19154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19154__$1,(16),out,inst_19145);
} else {
if((state_val_19155 === (16))){
var inst_19147 = (state_19154[(2)]);
var state_19154__$1 = (function (){var statearr_19172 = state_19154;
(statearr_19172[(12)] = inst_19147);

return statearr_19172;
})();
var statearr_19173_19201 = state_19154__$1;
(statearr_19173_19201[(2)] = null);

(statearr_19173_19201[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (10))){
var inst_19122 = (state_19154[(2)]);
var inst_19123 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19154__$1 = (function (){var statearr_19174 = state_19154;
(statearr_19174[(13)] = inst_19122);

return statearr_19174;
})();
var statearr_19175_19202 = state_19154__$1;
(statearr_19175_19202[(2)] = inst_19123);


cljs.core.async.impl.ioc_helpers.process_exception(state_19154__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (8))){
var inst_19136 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
var statearr_19176_19203 = state_19154__$1;
(statearr_19176_19203[(2)] = inst_19136);

(statearr_19176_19203[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto___19188,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16949__auto__,c__17075__auto___19188,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16950__auto__ = null;
var cljs$core$async$state_machine__16950__auto____0 = (function (){
var statearr_19180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19180[(0)] = cljs$core$async$state_machine__16950__auto__);

(statearr_19180[(1)] = (1));

return statearr_19180;
});
var cljs$core$async$state_machine__16950__auto____1 = (function (state_19154){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_19154);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e19181){if((e19181 instanceof Object)){
var ex__16953__auto__ = e19181;
var statearr_19182_19204 = state_19154;
(statearr_19182_19204[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19154);

return cljs.core.cst$kw$recur;
} else {
throw e19181;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__19205 = state_19154;
state_19154 = G__19205;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$state_machine__16950__auto__ = function(state_19154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16950__auto____1.call(this,state_19154);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16950__auto____0;
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16950__auto____1;
return cljs$core$async$state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___19188,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17077__auto__ = (function (){var statearr_19183 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_19183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___19188);

return statearr_19183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___19188,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args19207 = [];
var len__9181__auto___19265 = arguments.length;
var i__9182__auto___19266 = (0);
while(true){
if((i__9182__auto___19266 < len__9181__auto___19265)){
args19207.push((arguments[i__9182__auto___19266]));

var G__19267 = (i__9182__auto___19266 + (1));
i__9182__auto___19266 = G__19267;
continue;
} else {
}
break;
}

var G__19209 = args19207.length;
switch (G__19209) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19207.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17075__auto___19269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___19269,out){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___19269,out){
return (function (state_19241){
var state_val_19242 = (state_19241[(1)]);
if((state_val_19242 === (7))){
var inst_19221 = (state_19241[(7)]);
var inst_19220 = (state_19241[(8)]);
var inst_19220__$1 = (state_19241[(2)]);
var inst_19221__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19220__$1,(0),null);
var inst_19222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19220__$1,(1),null);
var inst_19223 = (inst_19221__$1 == null);
var state_19241__$1 = (function (){var statearr_19243 = state_19241;
(statearr_19243[(7)] = inst_19221__$1);

(statearr_19243[(9)] = inst_19222);

(statearr_19243[(8)] = inst_19220__$1);

return statearr_19243;
})();
if(cljs.core.truth_(inst_19223)){
var statearr_19244_19270 = state_19241__$1;
(statearr_19244_19270[(1)] = (8));

} else {
var statearr_19245_19271 = state_19241__$1;
(statearr_19245_19271[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (1))){
var inst_19210 = cljs.core.vec(chs);
var inst_19211 = inst_19210;
var state_19241__$1 = (function (){var statearr_19246 = state_19241;
(statearr_19246[(10)] = inst_19211);

return statearr_19246;
})();
var statearr_19247_19272 = state_19241__$1;
(statearr_19247_19272[(2)] = null);

(statearr_19247_19272[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (4))){
var inst_19211 = (state_19241[(10)]);
var state_19241__$1 = state_19241;
return cljs.core.async.ioc_alts_BANG_(state_19241__$1,(7),inst_19211);
} else {
if((state_val_19242 === (6))){
var inst_19237 = (state_19241[(2)]);
var state_19241__$1 = state_19241;
var statearr_19248_19273 = state_19241__$1;
(statearr_19248_19273[(2)] = inst_19237);

(statearr_19248_19273[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (3))){
var inst_19239 = (state_19241[(2)]);
var state_19241__$1 = state_19241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19241__$1,inst_19239);
} else {
if((state_val_19242 === (2))){
var inst_19211 = (state_19241[(10)]);
var inst_19213 = cljs.core.count(inst_19211);
var inst_19214 = (inst_19213 > (0));
var state_19241__$1 = state_19241;
if(cljs.core.truth_(inst_19214)){
var statearr_19250_19274 = state_19241__$1;
(statearr_19250_19274[(1)] = (4));

} else {
var statearr_19251_19275 = state_19241__$1;
(statearr_19251_19275[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (11))){
var inst_19211 = (state_19241[(10)]);
var inst_19230 = (state_19241[(2)]);
var tmp19249 = inst_19211;
var inst_19211__$1 = tmp19249;
var state_19241__$1 = (function (){var statearr_19252 = state_19241;
(statearr_19252[(11)] = inst_19230);

(statearr_19252[(10)] = inst_19211__$1);

return statearr_19252;
})();
var statearr_19253_19276 = state_19241__$1;
(statearr_19253_19276[(2)] = null);

(statearr_19253_19276[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (9))){
var inst_19221 = (state_19241[(7)]);
var state_19241__$1 = state_19241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19241__$1,(11),out,inst_19221);
} else {
if((state_val_19242 === (5))){
var inst_19235 = cljs.core.async.close_BANG_(out);
var state_19241__$1 = state_19241;
var statearr_19254_19277 = state_19241__$1;
(statearr_19254_19277[(2)] = inst_19235);

(statearr_19254_19277[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (10))){
var inst_19233 = (state_19241[(2)]);
var state_19241__$1 = state_19241;
var statearr_19255_19278 = state_19241__$1;
(statearr_19255_19278[(2)] = inst_19233);

(statearr_19255_19278[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (8))){
var inst_19221 = (state_19241[(7)]);
var inst_19211 = (state_19241[(10)]);
var inst_19222 = (state_19241[(9)]);
var inst_19220 = (state_19241[(8)]);
var inst_19225 = (function (){var cs = inst_19211;
var vec__19216 = inst_19220;
var v = inst_19221;
var c = inst_19222;
return ((function (cs,vec__19216,v,c,inst_19221,inst_19211,inst_19222,inst_19220,state_val_19242,c__17075__auto___19269,out){
return (function (p1__19206_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19206_SHARP_);
});
;})(cs,vec__19216,v,c,inst_19221,inst_19211,inst_19222,inst_19220,state_val_19242,c__17075__auto___19269,out))
})();
var inst_19226 = cljs.core.filterv(inst_19225,inst_19211);
var inst_19211__$1 = inst_19226;
var state_19241__$1 = (function (){var statearr_19256 = state_19241;
(statearr_19256[(10)] = inst_19211__$1);

return statearr_19256;
})();
var statearr_19257_19279 = state_19241__$1;
(statearr_19257_19279[(2)] = null);

(statearr_19257_19279[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto___19269,out))
;
return ((function (switch__16949__auto__,c__17075__auto___19269,out){
return (function() {
var cljs$core$async$state_machine__16950__auto__ = null;
var cljs$core$async$state_machine__16950__auto____0 = (function (){
var statearr_19261 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19261[(0)] = cljs$core$async$state_machine__16950__auto__);

(statearr_19261[(1)] = (1));

return statearr_19261;
});
var cljs$core$async$state_machine__16950__auto____1 = (function (state_19241){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_19241);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e19262){if((e19262 instanceof Object)){
var ex__16953__auto__ = e19262;
var statearr_19263_19280 = state_19241;
(statearr_19263_19280[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19241);

return cljs.core.cst$kw$recur;
} else {
throw e19262;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__19281 = state_19241;
state_19241 = G__19281;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$state_machine__16950__auto__ = function(state_19241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16950__auto____1.call(this,state_19241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16950__auto____0;
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16950__auto____1;
return cljs$core$async$state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___19269,out))
})();
var state__17077__auto__ = (function (){var statearr_19264 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_19264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___19269);

return statearr_19264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___19269,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args19282 = [];
var len__9181__auto___19331 = arguments.length;
var i__9182__auto___19332 = (0);
while(true){
if((i__9182__auto___19332 < len__9181__auto___19331)){
args19282.push((arguments[i__9182__auto___19332]));

var G__19333 = (i__9182__auto___19332 + (1));
i__9182__auto___19332 = G__19333;
continue;
} else {
}
break;
}

var G__19284 = args19282.length;
switch (G__19284) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19282.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17075__auto___19335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___19335,out){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___19335,out){
return (function (state_19308){
var state_val_19309 = (state_19308[(1)]);
if((state_val_19309 === (7))){
var inst_19290 = (state_19308[(7)]);
var inst_19290__$1 = (state_19308[(2)]);
var inst_19291 = (inst_19290__$1 == null);
var inst_19292 = cljs.core.not(inst_19291);
var state_19308__$1 = (function (){var statearr_19310 = state_19308;
(statearr_19310[(7)] = inst_19290__$1);

return statearr_19310;
})();
if(inst_19292){
var statearr_19311_19336 = state_19308__$1;
(statearr_19311_19336[(1)] = (8));

} else {
var statearr_19312_19337 = state_19308__$1;
(statearr_19312_19337[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19309 === (1))){
var inst_19285 = (0);
var state_19308__$1 = (function (){var statearr_19313 = state_19308;
(statearr_19313[(8)] = inst_19285);

return statearr_19313;
})();
var statearr_19314_19338 = state_19308__$1;
(statearr_19314_19338[(2)] = null);

(statearr_19314_19338[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19309 === (4))){
var state_19308__$1 = state_19308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19308__$1,(7),ch);
} else {
if((state_val_19309 === (6))){
var inst_19303 = (state_19308[(2)]);
var state_19308__$1 = state_19308;
var statearr_19315_19339 = state_19308__$1;
(statearr_19315_19339[(2)] = inst_19303);

(statearr_19315_19339[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19309 === (3))){
var inst_19305 = (state_19308[(2)]);
var inst_19306 = cljs.core.async.close_BANG_(out);
var state_19308__$1 = (function (){var statearr_19316 = state_19308;
(statearr_19316[(9)] = inst_19305);

return statearr_19316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19308__$1,inst_19306);
} else {
if((state_val_19309 === (2))){
var inst_19285 = (state_19308[(8)]);
var inst_19287 = (inst_19285 < n);
var state_19308__$1 = state_19308;
if(cljs.core.truth_(inst_19287)){
var statearr_19317_19340 = state_19308__$1;
(statearr_19317_19340[(1)] = (4));

} else {
var statearr_19318_19341 = state_19308__$1;
(statearr_19318_19341[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19309 === (11))){
var inst_19285 = (state_19308[(8)]);
var inst_19295 = (state_19308[(2)]);
var inst_19296 = (inst_19285 + (1));
var inst_19285__$1 = inst_19296;
var state_19308__$1 = (function (){var statearr_19319 = state_19308;
(statearr_19319[(10)] = inst_19295);

(statearr_19319[(8)] = inst_19285__$1);

return statearr_19319;
})();
var statearr_19320_19342 = state_19308__$1;
(statearr_19320_19342[(2)] = null);

(statearr_19320_19342[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19309 === (9))){
var state_19308__$1 = state_19308;
var statearr_19321_19343 = state_19308__$1;
(statearr_19321_19343[(2)] = null);

(statearr_19321_19343[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19309 === (5))){
var state_19308__$1 = state_19308;
var statearr_19322_19344 = state_19308__$1;
(statearr_19322_19344[(2)] = null);

(statearr_19322_19344[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19309 === (10))){
var inst_19300 = (state_19308[(2)]);
var state_19308__$1 = state_19308;
var statearr_19323_19345 = state_19308__$1;
(statearr_19323_19345[(2)] = inst_19300);

(statearr_19323_19345[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19309 === (8))){
var inst_19290 = (state_19308[(7)]);
var state_19308__$1 = state_19308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19308__$1,(11),out,inst_19290);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto___19335,out))
;
return ((function (switch__16949__auto__,c__17075__auto___19335,out){
return (function() {
var cljs$core$async$state_machine__16950__auto__ = null;
var cljs$core$async$state_machine__16950__auto____0 = (function (){
var statearr_19327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19327[(0)] = cljs$core$async$state_machine__16950__auto__);

(statearr_19327[(1)] = (1));

return statearr_19327;
});
var cljs$core$async$state_machine__16950__auto____1 = (function (state_19308){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_19308);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e19328){if((e19328 instanceof Object)){
var ex__16953__auto__ = e19328;
var statearr_19329_19346 = state_19308;
(statearr_19329_19346[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19308);

return cljs.core.cst$kw$recur;
} else {
throw e19328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__19347 = state_19308;
state_19308 = G__19347;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$state_machine__16950__auto__ = function(state_19308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16950__auto____1.call(this,state_19308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16950__auto____0;
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16950__auto____1;
return cljs$core$async$state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___19335,out))
})();
var state__17077__auto__ = (function (){var statearr_19330 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_19330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___19335);

return statearr_19330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___19335,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19357 = (function (f,ch,meta19358){
this.f = f;
this.ch = ch;
this.meta19358 = meta19358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19359,meta19358__$1){
var self__ = this;
var _19359__$1 = this;
return (new cljs.core.async.t_cljs$core$async19357(self__.f,self__.ch,meta19358__$1));
});

cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19359){
var self__ = this;
var _19359__$1 = this;
return self__.meta19358;
});

cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19360 = (function (f,ch,meta19358,_,fn1,meta19361){
this.f = f;
this.ch = ch;
this.meta19358 = meta19358;
this._ = _;
this.fn1 = fn1;
this.meta19361 = meta19361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19362,meta19361__$1){
var self__ = this;
var _19362__$1 = this;
return (new cljs.core.async.t_cljs$core$async19360(self__.f,self__.ch,self__.meta19358,self__._,self__.fn1,meta19361__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19362){
var self__ = this;
var _19362__$1 = this;
return self__.meta19361;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19360.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19360.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19348_SHARP_){
var G__19363 = (((p1__19348_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19348_SHARP_) : self__.f.call(null,p1__19348_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19363) : f1.call(null,G__19363));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19360.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19358,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19357], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19361], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19360";

cljs.core.async.t_cljs$core$async19360.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async19360");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19360 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19360(f__$1,ch__$1,meta19358__$1,___$2,fn1__$1,meta19361){
return (new cljs.core.async.t_cljs$core$async19360(f__$1,ch__$1,meta19358__$1,___$2,fn1__$1,meta19361));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19360(self__.f,self__.ch,self__.meta19358,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7948__auto__ = ret;
if(cljs.core.truth_(and__7948__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7948__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19364 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19364) : self__.f.call(null,G__19364));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19358], null);
});

cljs.core.async.t_cljs$core$async19357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19357";

cljs.core.async.t_cljs$core$async19357.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async19357");
});

cljs.core.async.__GT_t_cljs$core$async19357 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19357(f__$1,ch__$1,meta19358){
return (new cljs.core.async.t_cljs$core$async19357(f__$1,ch__$1,meta19358));
});

}

return (new cljs.core.async.t_cljs$core$async19357(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19368 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19368 = (function (f,ch,meta19369){
this.f = f;
this.ch = ch;
this.meta19369 = meta19369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19370,meta19369__$1){
var self__ = this;
var _19370__$1 = this;
return (new cljs.core.async.t_cljs$core$async19368(self__.f,self__.ch,meta19369__$1));
});

cljs.core.async.t_cljs$core$async19368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19370){
var self__ = this;
var _19370__$1 = this;
return self__.meta19369;
});

cljs.core.async.t_cljs$core$async19368.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19368.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19368.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19368.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19368.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19368.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19369], null);
});

cljs.core.async.t_cljs$core$async19368.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19368";

cljs.core.async.t_cljs$core$async19368.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async19368");
});

cljs.core.async.__GT_t_cljs$core$async19368 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19368(f__$1,ch__$1,meta19369){
return (new cljs.core.async.t_cljs$core$async19368(f__$1,ch__$1,meta19369));
});

}

return (new cljs.core.async.t_cljs$core$async19368(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19374 = (function (p,ch,meta19375){
this.p = p;
this.ch = ch;
this.meta19375 = meta19375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19376,meta19375__$1){
var self__ = this;
var _19376__$1 = this;
return (new cljs.core.async.t_cljs$core$async19374(self__.p,self__.ch,meta19375__$1));
});

cljs.core.async.t_cljs$core$async19374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19376){
var self__ = this;
var _19376__$1 = this;
return self__.meta19375;
});

cljs.core.async.t_cljs$core$async19374.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19374.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19374.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19374.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19374.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19374.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19374.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19375], null);
});

cljs.core.async.t_cljs$core$async19374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19374";

cljs.core.async.t_cljs$core$async19374.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async19374");
});

cljs.core.async.__GT_t_cljs$core$async19374 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19374(p__$1,ch__$1,meta19375){
return (new cljs.core.async.t_cljs$core$async19374(p__$1,ch__$1,meta19375));
});

}

return (new cljs.core.async.t_cljs$core$async19374(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args19377 = [];
var len__9181__auto___19421 = arguments.length;
var i__9182__auto___19422 = (0);
while(true){
if((i__9182__auto___19422 < len__9181__auto___19421)){
args19377.push((arguments[i__9182__auto___19422]));

var G__19423 = (i__9182__auto___19422 + (1));
i__9182__auto___19422 = G__19423;
continue;
} else {
}
break;
}

var G__19379 = args19377.length;
switch (G__19379) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19377.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17075__auto___19425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___19425,out){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___19425,out){
return (function (state_19400){
var state_val_19401 = (state_19400[(1)]);
if((state_val_19401 === (7))){
var inst_19396 = (state_19400[(2)]);
var state_19400__$1 = state_19400;
var statearr_19402_19426 = state_19400__$1;
(statearr_19402_19426[(2)] = inst_19396);

(statearr_19402_19426[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19401 === (1))){
var state_19400__$1 = state_19400;
var statearr_19403_19427 = state_19400__$1;
(statearr_19403_19427[(2)] = null);

(statearr_19403_19427[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19401 === (4))){
var inst_19382 = (state_19400[(7)]);
var inst_19382__$1 = (state_19400[(2)]);
var inst_19383 = (inst_19382__$1 == null);
var state_19400__$1 = (function (){var statearr_19404 = state_19400;
(statearr_19404[(7)] = inst_19382__$1);

return statearr_19404;
})();
if(cljs.core.truth_(inst_19383)){
var statearr_19405_19428 = state_19400__$1;
(statearr_19405_19428[(1)] = (5));

} else {
var statearr_19406_19429 = state_19400__$1;
(statearr_19406_19429[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19401 === (6))){
var inst_19382 = (state_19400[(7)]);
var inst_19387 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19382) : p.call(null,inst_19382));
var state_19400__$1 = state_19400;
if(cljs.core.truth_(inst_19387)){
var statearr_19407_19430 = state_19400__$1;
(statearr_19407_19430[(1)] = (8));

} else {
var statearr_19408_19431 = state_19400__$1;
(statearr_19408_19431[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19401 === (3))){
var inst_19398 = (state_19400[(2)]);
var state_19400__$1 = state_19400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19400__$1,inst_19398);
} else {
if((state_val_19401 === (2))){
var state_19400__$1 = state_19400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19400__$1,(4),ch);
} else {
if((state_val_19401 === (11))){
var inst_19390 = (state_19400[(2)]);
var state_19400__$1 = state_19400;
var statearr_19409_19432 = state_19400__$1;
(statearr_19409_19432[(2)] = inst_19390);

(statearr_19409_19432[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19401 === (9))){
var state_19400__$1 = state_19400;
var statearr_19410_19433 = state_19400__$1;
(statearr_19410_19433[(2)] = null);

(statearr_19410_19433[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19401 === (5))){
var inst_19385 = cljs.core.async.close_BANG_(out);
var state_19400__$1 = state_19400;
var statearr_19411_19434 = state_19400__$1;
(statearr_19411_19434[(2)] = inst_19385);

(statearr_19411_19434[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19401 === (10))){
var inst_19393 = (state_19400[(2)]);
var state_19400__$1 = (function (){var statearr_19412 = state_19400;
(statearr_19412[(8)] = inst_19393);

return statearr_19412;
})();
var statearr_19413_19435 = state_19400__$1;
(statearr_19413_19435[(2)] = null);

(statearr_19413_19435[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19401 === (8))){
var inst_19382 = (state_19400[(7)]);
var state_19400__$1 = state_19400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19400__$1,(11),out,inst_19382);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto___19425,out))
;
return ((function (switch__16949__auto__,c__17075__auto___19425,out){
return (function() {
var cljs$core$async$state_machine__16950__auto__ = null;
var cljs$core$async$state_machine__16950__auto____0 = (function (){
var statearr_19417 = [null,null,null,null,null,null,null,null,null];
(statearr_19417[(0)] = cljs$core$async$state_machine__16950__auto__);

(statearr_19417[(1)] = (1));

return statearr_19417;
});
var cljs$core$async$state_machine__16950__auto____1 = (function (state_19400){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_19400);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e19418){if((e19418 instanceof Object)){
var ex__16953__auto__ = e19418;
var statearr_19419_19436 = state_19400;
(statearr_19419_19436[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19400);

return cljs.core.cst$kw$recur;
} else {
throw e19418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__19437 = state_19400;
state_19400 = G__19437;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$state_machine__16950__auto__ = function(state_19400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16950__auto____1.call(this,state_19400);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16950__auto____0;
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16950__auto____1;
return cljs$core$async$state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___19425,out))
})();
var state__17077__auto__ = (function (){var statearr_19420 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_19420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___19425);

return statearr_19420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___19425,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19438 = [];
var len__9181__auto___19441 = arguments.length;
var i__9182__auto___19442 = (0);
while(true){
if((i__9182__auto___19442 < len__9181__auto___19441)){
args19438.push((arguments[i__9182__auto___19442]));

var G__19443 = (i__9182__auto___19442 + (1));
i__9182__auto___19442 = G__19443;
continue;
} else {
}
break;
}

var G__19440 = args19438.length;
switch (G__19440) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19438.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto__){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto__){
return (function (state_19610){
var state_val_19611 = (state_19610[(1)]);
if((state_val_19611 === (7))){
var inst_19606 = (state_19610[(2)]);
var state_19610__$1 = state_19610;
var statearr_19612_19653 = state_19610__$1;
(statearr_19612_19653[(2)] = inst_19606);

(statearr_19612_19653[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (20))){
var inst_19576 = (state_19610[(7)]);
var inst_19587 = (state_19610[(2)]);
var inst_19588 = cljs.core.next(inst_19576);
var inst_19562 = inst_19588;
var inst_19563 = null;
var inst_19564 = (0);
var inst_19565 = (0);
var state_19610__$1 = (function (){var statearr_19613 = state_19610;
(statearr_19613[(8)] = inst_19565);

(statearr_19613[(9)] = inst_19564);

(statearr_19613[(10)] = inst_19563);

(statearr_19613[(11)] = inst_19587);

(statearr_19613[(12)] = inst_19562);

return statearr_19613;
})();
var statearr_19614_19654 = state_19610__$1;
(statearr_19614_19654[(2)] = null);

(statearr_19614_19654[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (1))){
var state_19610__$1 = state_19610;
var statearr_19615_19655 = state_19610__$1;
(statearr_19615_19655[(2)] = null);

(statearr_19615_19655[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (4))){
var inst_19551 = (state_19610[(13)]);
var inst_19551__$1 = (state_19610[(2)]);
var inst_19552 = (inst_19551__$1 == null);
var state_19610__$1 = (function (){var statearr_19616 = state_19610;
(statearr_19616[(13)] = inst_19551__$1);

return statearr_19616;
})();
if(cljs.core.truth_(inst_19552)){
var statearr_19617_19656 = state_19610__$1;
(statearr_19617_19656[(1)] = (5));

} else {
var statearr_19618_19657 = state_19610__$1;
(statearr_19618_19657[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (15))){
var state_19610__$1 = state_19610;
var statearr_19622_19658 = state_19610__$1;
(statearr_19622_19658[(2)] = null);

(statearr_19622_19658[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (21))){
var state_19610__$1 = state_19610;
var statearr_19623_19659 = state_19610__$1;
(statearr_19623_19659[(2)] = null);

(statearr_19623_19659[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (13))){
var inst_19565 = (state_19610[(8)]);
var inst_19564 = (state_19610[(9)]);
var inst_19563 = (state_19610[(10)]);
var inst_19562 = (state_19610[(12)]);
var inst_19572 = (state_19610[(2)]);
var inst_19573 = (inst_19565 + (1));
var tmp19619 = inst_19564;
var tmp19620 = inst_19563;
var tmp19621 = inst_19562;
var inst_19562__$1 = tmp19621;
var inst_19563__$1 = tmp19620;
var inst_19564__$1 = tmp19619;
var inst_19565__$1 = inst_19573;
var state_19610__$1 = (function (){var statearr_19624 = state_19610;
(statearr_19624[(8)] = inst_19565__$1);

(statearr_19624[(9)] = inst_19564__$1);

(statearr_19624[(10)] = inst_19563__$1);

(statearr_19624[(14)] = inst_19572);

(statearr_19624[(12)] = inst_19562__$1);

return statearr_19624;
})();
var statearr_19625_19660 = state_19610__$1;
(statearr_19625_19660[(2)] = null);

(statearr_19625_19660[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (22))){
var state_19610__$1 = state_19610;
var statearr_19626_19661 = state_19610__$1;
(statearr_19626_19661[(2)] = null);

(statearr_19626_19661[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (6))){
var inst_19551 = (state_19610[(13)]);
var inst_19560 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19551) : f.call(null,inst_19551));
var inst_19561 = cljs.core.seq(inst_19560);
var inst_19562 = inst_19561;
var inst_19563 = null;
var inst_19564 = (0);
var inst_19565 = (0);
var state_19610__$1 = (function (){var statearr_19627 = state_19610;
(statearr_19627[(8)] = inst_19565);

(statearr_19627[(9)] = inst_19564);

(statearr_19627[(10)] = inst_19563);

(statearr_19627[(12)] = inst_19562);

return statearr_19627;
})();
var statearr_19628_19662 = state_19610__$1;
(statearr_19628_19662[(2)] = null);

(statearr_19628_19662[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (17))){
var inst_19576 = (state_19610[(7)]);
var inst_19580 = cljs.core.chunk_first(inst_19576);
var inst_19581 = cljs.core.chunk_rest(inst_19576);
var inst_19582 = cljs.core.count(inst_19580);
var inst_19562 = inst_19581;
var inst_19563 = inst_19580;
var inst_19564 = inst_19582;
var inst_19565 = (0);
var state_19610__$1 = (function (){var statearr_19629 = state_19610;
(statearr_19629[(8)] = inst_19565);

(statearr_19629[(9)] = inst_19564);

(statearr_19629[(10)] = inst_19563);

(statearr_19629[(12)] = inst_19562);

return statearr_19629;
})();
var statearr_19630_19663 = state_19610__$1;
(statearr_19630_19663[(2)] = null);

(statearr_19630_19663[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (3))){
var inst_19608 = (state_19610[(2)]);
var state_19610__$1 = state_19610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19610__$1,inst_19608);
} else {
if((state_val_19611 === (12))){
var inst_19596 = (state_19610[(2)]);
var state_19610__$1 = state_19610;
var statearr_19631_19664 = state_19610__$1;
(statearr_19631_19664[(2)] = inst_19596);

(statearr_19631_19664[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (2))){
var state_19610__$1 = state_19610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19610__$1,(4),in$);
} else {
if((state_val_19611 === (23))){
var inst_19604 = (state_19610[(2)]);
var state_19610__$1 = state_19610;
var statearr_19632_19665 = state_19610__$1;
(statearr_19632_19665[(2)] = inst_19604);

(statearr_19632_19665[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (19))){
var inst_19591 = (state_19610[(2)]);
var state_19610__$1 = state_19610;
var statearr_19633_19666 = state_19610__$1;
(statearr_19633_19666[(2)] = inst_19591);

(statearr_19633_19666[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (11))){
var inst_19562 = (state_19610[(12)]);
var inst_19576 = (state_19610[(7)]);
var inst_19576__$1 = cljs.core.seq(inst_19562);
var state_19610__$1 = (function (){var statearr_19634 = state_19610;
(statearr_19634[(7)] = inst_19576__$1);

return statearr_19634;
})();
if(inst_19576__$1){
var statearr_19635_19667 = state_19610__$1;
(statearr_19635_19667[(1)] = (14));

} else {
var statearr_19636_19668 = state_19610__$1;
(statearr_19636_19668[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (9))){
var inst_19598 = (state_19610[(2)]);
var inst_19599 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19610__$1 = (function (){var statearr_19637 = state_19610;
(statearr_19637[(15)] = inst_19598);

return statearr_19637;
})();
if(cljs.core.truth_(inst_19599)){
var statearr_19638_19669 = state_19610__$1;
(statearr_19638_19669[(1)] = (21));

} else {
var statearr_19639_19670 = state_19610__$1;
(statearr_19639_19670[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (5))){
var inst_19554 = cljs.core.async.close_BANG_(out);
var state_19610__$1 = state_19610;
var statearr_19640_19671 = state_19610__$1;
(statearr_19640_19671[(2)] = inst_19554);

(statearr_19640_19671[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (14))){
var inst_19576 = (state_19610[(7)]);
var inst_19578 = cljs.core.chunked_seq_QMARK_(inst_19576);
var state_19610__$1 = state_19610;
if(inst_19578){
var statearr_19641_19672 = state_19610__$1;
(statearr_19641_19672[(1)] = (17));

} else {
var statearr_19642_19673 = state_19610__$1;
(statearr_19642_19673[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (16))){
var inst_19594 = (state_19610[(2)]);
var state_19610__$1 = state_19610;
var statearr_19643_19674 = state_19610__$1;
(statearr_19643_19674[(2)] = inst_19594);

(statearr_19643_19674[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19611 === (10))){
var inst_19565 = (state_19610[(8)]);
var inst_19563 = (state_19610[(10)]);
var inst_19570 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19563,inst_19565);
var state_19610__$1 = state_19610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19610__$1,(13),out,inst_19570);
} else {
if((state_val_19611 === (18))){
var inst_19576 = (state_19610[(7)]);
var inst_19585 = cljs.core.first(inst_19576);
var state_19610__$1 = state_19610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19610__$1,(20),out,inst_19585);
} else {
if((state_val_19611 === (8))){
var inst_19565 = (state_19610[(8)]);
var inst_19564 = (state_19610[(9)]);
var inst_19567 = (inst_19565 < inst_19564);
var inst_19568 = inst_19567;
var state_19610__$1 = state_19610;
if(cljs.core.truth_(inst_19568)){
var statearr_19644_19675 = state_19610__$1;
(statearr_19644_19675[(1)] = (10));

} else {
var statearr_19645_19676 = state_19610__$1;
(statearr_19645_19676[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto__))
;
return ((function (switch__16949__auto__,c__17075__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16950__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16950__auto____0 = (function (){
var statearr_19649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19649[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16950__auto__);

(statearr_19649[(1)] = (1));

return statearr_19649;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16950__auto____1 = (function (state_19610){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_19610);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e19650){if((e19650 instanceof Object)){
var ex__16953__auto__ = e19650;
var statearr_19651_19677 = state_19610;
(statearr_19651_19677[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19610);

return cljs.core.cst$kw$recur;
} else {
throw e19650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__19678 = state_19610;
state_19610 = G__19678;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16950__auto__ = function(state_19610){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16950__auto____1.call(this,state_19610);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16950__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16950__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto__))
})();
var state__17077__auto__ = (function (){var statearr_19652 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_19652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto__);

return statearr_19652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto__))
);

return c__17075__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19679 = [];
var len__9181__auto___19682 = arguments.length;
var i__9182__auto___19683 = (0);
while(true){
if((i__9182__auto___19683 < len__9181__auto___19682)){
args19679.push((arguments[i__9182__auto___19683]));

var G__19684 = (i__9182__auto___19683 + (1));
i__9182__auto___19683 = G__19684;
continue;
} else {
}
break;
}

var G__19681 = args19679.length;
switch (G__19681) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19679.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args19686 = [];
var len__9181__auto___19689 = arguments.length;
var i__9182__auto___19690 = (0);
while(true){
if((i__9182__auto___19690 < len__9181__auto___19689)){
args19686.push((arguments[i__9182__auto___19690]));

var G__19691 = (i__9182__auto___19690 + (1));
i__9182__auto___19690 = G__19691;
continue;
} else {
}
break;
}

var G__19688 = args19686.length;
switch (G__19688) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19686.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args19693 = [];
var len__9181__auto___19744 = arguments.length;
var i__9182__auto___19745 = (0);
while(true){
if((i__9182__auto___19745 < len__9181__auto___19744)){
args19693.push((arguments[i__9182__auto___19745]));

var G__19746 = (i__9182__auto___19745 + (1));
i__9182__auto___19745 = G__19746;
continue;
} else {
}
break;
}

var G__19695 = args19693.length;
switch (G__19695) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19693.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17075__auto___19748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___19748,out){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___19748,out){
return (function (state_19719){
var state_val_19720 = (state_19719[(1)]);
if((state_val_19720 === (7))){
var inst_19714 = (state_19719[(2)]);
var state_19719__$1 = state_19719;
var statearr_19721_19749 = state_19719__$1;
(statearr_19721_19749[(2)] = inst_19714);

(statearr_19721_19749[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19720 === (1))){
var inst_19696 = null;
var state_19719__$1 = (function (){var statearr_19722 = state_19719;
(statearr_19722[(7)] = inst_19696);

return statearr_19722;
})();
var statearr_19723_19750 = state_19719__$1;
(statearr_19723_19750[(2)] = null);

(statearr_19723_19750[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19720 === (4))){
var inst_19699 = (state_19719[(8)]);
var inst_19699__$1 = (state_19719[(2)]);
var inst_19700 = (inst_19699__$1 == null);
var inst_19701 = cljs.core.not(inst_19700);
var state_19719__$1 = (function (){var statearr_19724 = state_19719;
(statearr_19724[(8)] = inst_19699__$1);

return statearr_19724;
})();
if(inst_19701){
var statearr_19725_19751 = state_19719__$1;
(statearr_19725_19751[(1)] = (5));

} else {
var statearr_19726_19752 = state_19719__$1;
(statearr_19726_19752[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19720 === (6))){
var state_19719__$1 = state_19719;
var statearr_19727_19753 = state_19719__$1;
(statearr_19727_19753[(2)] = null);

(statearr_19727_19753[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19720 === (3))){
var inst_19716 = (state_19719[(2)]);
var inst_19717 = cljs.core.async.close_BANG_(out);
var state_19719__$1 = (function (){var statearr_19728 = state_19719;
(statearr_19728[(9)] = inst_19716);

return statearr_19728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19719__$1,inst_19717);
} else {
if((state_val_19720 === (2))){
var state_19719__$1 = state_19719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19719__$1,(4),ch);
} else {
if((state_val_19720 === (11))){
var inst_19699 = (state_19719[(8)]);
var inst_19708 = (state_19719[(2)]);
var inst_19696 = inst_19699;
var state_19719__$1 = (function (){var statearr_19729 = state_19719;
(statearr_19729[(7)] = inst_19696);

(statearr_19729[(10)] = inst_19708);

return statearr_19729;
})();
var statearr_19730_19754 = state_19719__$1;
(statearr_19730_19754[(2)] = null);

(statearr_19730_19754[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19720 === (9))){
var inst_19699 = (state_19719[(8)]);
var state_19719__$1 = state_19719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19719__$1,(11),out,inst_19699);
} else {
if((state_val_19720 === (5))){
var inst_19699 = (state_19719[(8)]);
var inst_19696 = (state_19719[(7)]);
var inst_19703 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19699,inst_19696);
var state_19719__$1 = state_19719;
if(inst_19703){
var statearr_19732_19755 = state_19719__$1;
(statearr_19732_19755[(1)] = (8));

} else {
var statearr_19733_19756 = state_19719__$1;
(statearr_19733_19756[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19720 === (10))){
var inst_19711 = (state_19719[(2)]);
var state_19719__$1 = state_19719;
var statearr_19734_19757 = state_19719__$1;
(statearr_19734_19757[(2)] = inst_19711);

(statearr_19734_19757[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19720 === (8))){
var inst_19696 = (state_19719[(7)]);
var tmp19731 = inst_19696;
var inst_19696__$1 = tmp19731;
var state_19719__$1 = (function (){var statearr_19735 = state_19719;
(statearr_19735[(7)] = inst_19696__$1);

return statearr_19735;
})();
var statearr_19736_19758 = state_19719__$1;
(statearr_19736_19758[(2)] = null);

(statearr_19736_19758[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto___19748,out))
;
return ((function (switch__16949__auto__,c__17075__auto___19748,out){
return (function() {
var cljs$core$async$state_machine__16950__auto__ = null;
var cljs$core$async$state_machine__16950__auto____0 = (function (){
var statearr_19740 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19740[(0)] = cljs$core$async$state_machine__16950__auto__);

(statearr_19740[(1)] = (1));

return statearr_19740;
});
var cljs$core$async$state_machine__16950__auto____1 = (function (state_19719){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_19719);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e19741){if((e19741 instanceof Object)){
var ex__16953__auto__ = e19741;
var statearr_19742_19759 = state_19719;
(statearr_19742_19759[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19719);

return cljs.core.cst$kw$recur;
} else {
throw e19741;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__19760 = state_19719;
state_19719 = G__19760;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$state_machine__16950__auto__ = function(state_19719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16950__auto____1.call(this,state_19719);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16950__auto____0;
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16950__auto____1;
return cljs$core$async$state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___19748,out))
})();
var state__17077__auto__ = (function (){var statearr_19743 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_19743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___19748);

return statearr_19743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___19748,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19761 = [];
var len__9181__auto___19831 = arguments.length;
var i__9182__auto___19832 = (0);
while(true){
if((i__9182__auto___19832 < len__9181__auto___19831)){
args19761.push((arguments[i__9182__auto___19832]));

var G__19833 = (i__9182__auto___19832 + (1));
i__9182__auto___19832 = G__19833;
continue;
} else {
}
break;
}

var G__19763 = args19761.length;
switch (G__19763) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19761.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17075__auto___19835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___19835,out){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___19835,out){
return (function (state_19801){
var state_val_19802 = (state_19801[(1)]);
if((state_val_19802 === (7))){
var inst_19797 = (state_19801[(2)]);
var state_19801__$1 = state_19801;
var statearr_19803_19836 = state_19801__$1;
(statearr_19803_19836[(2)] = inst_19797);

(statearr_19803_19836[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (1))){
var inst_19764 = (new Array(n));
var inst_19765 = inst_19764;
var inst_19766 = (0);
var state_19801__$1 = (function (){var statearr_19804 = state_19801;
(statearr_19804[(7)] = inst_19766);

(statearr_19804[(8)] = inst_19765);

return statearr_19804;
})();
var statearr_19805_19837 = state_19801__$1;
(statearr_19805_19837[(2)] = null);

(statearr_19805_19837[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (4))){
var inst_19769 = (state_19801[(9)]);
var inst_19769__$1 = (state_19801[(2)]);
var inst_19770 = (inst_19769__$1 == null);
var inst_19771 = cljs.core.not(inst_19770);
var state_19801__$1 = (function (){var statearr_19806 = state_19801;
(statearr_19806[(9)] = inst_19769__$1);

return statearr_19806;
})();
if(inst_19771){
var statearr_19807_19838 = state_19801__$1;
(statearr_19807_19838[(1)] = (5));

} else {
var statearr_19808_19839 = state_19801__$1;
(statearr_19808_19839[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (15))){
var inst_19791 = (state_19801[(2)]);
var state_19801__$1 = state_19801;
var statearr_19809_19840 = state_19801__$1;
(statearr_19809_19840[(2)] = inst_19791);

(statearr_19809_19840[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (13))){
var state_19801__$1 = state_19801;
var statearr_19810_19841 = state_19801__$1;
(statearr_19810_19841[(2)] = null);

(statearr_19810_19841[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (6))){
var inst_19766 = (state_19801[(7)]);
var inst_19787 = (inst_19766 > (0));
var state_19801__$1 = state_19801;
if(cljs.core.truth_(inst_19787)){
var statearr_19811_19842 = state_19801__$1;
(statearr_19811_19842[(1)] = (12));

} else {
var statearr_19812_19843 = state_19801__$1;
(statearr_19812_19843[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (3))){
var inst_19799 = (state_19801[(2)]);
var state_19801__$1 = state_19801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19801__$1,inst_19799);
} else {
if((state_val_19802 === (12))){
var inst_19765 = (state_19801[(8)]);
var inst_19789 = cljs.core.vec(inst_19765);
var state_19801__$1 = state_19801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19801__$1,(15),out,inst_19789);
} else {
if((state_val_19802 === (2))){
var state_19801__$1 = state_19801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19801__$1,(4),ch);
} else {
if((state_val_19802 === (11))){
var inst_19781 = (state_19801[(2)]);
var inst_19782 = (new Array(n));
var inst_19765 = inst_19782;
var inst_19766 = (0);
var state_19801__$1 = (function (){var statearr_19813 = state_19801;
(statearr_19813[(7)] = inst_19766);

(statearr_19813[(8)] = inst_19765);

(statearr_19813[(10)] = inst_19781);

return statearr_19813;
})();
var statearr_19814_19844 = state_19801__$1;
(statearr_19814_19844[(2)] = null);

(statearr_19814_19844[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (9))){
var inst_19765 = (state_19801[(8)]);
var inst_19779 = cljs.core.vec(inst_19765);
var state_19801__$1 = state_19801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19801__$1,(11),out,inst_19779);
} else {
if((state_val_19802 === (5))){
var inst_19766 = (state_19801[(7)]);
var inst_19765 = (state_19801[(8)]);
var inst_19774 = (state_19801[(11)]);
var inst_19769 = (state_19801[(9)]);
var inst_19773 = (inst_19765[inst_19766] = inst_19769);
var inst_19774__$1 = (inst_19766 + (1));
var inst_19775 = (inst_19774__$1 < n);
var state_19801__$1 = (function (){var statearr_19815 = state_19801;
(statearr_19815[(12)] = inst_19773);

(statearr_19815[(11)] = inst_19774__$1);

return statearr_19815;
})();
if(cljs.core.truth_(inst_19775)){
var statearr_19816_19845 = state_19801__$1;
(statearr_19816_19845[(1)] = (8));

} else {
var statearr_19817_19846 = state_19801__$1;
(statearr_19817_19846[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (14))){
var inst_19794 = (state_19801[(2)]);
var inst_19795 = cljs.core.async.close_BANG_(out);
var state_19801__$1 = (function (){var statearr_19819 = state_19801;
(statearr_19819[(13)] = inst_19794);

return statearr_19819;
})();
var statearr_19820_19847 = state_19801__$1;
(statearr_19820_19847[(2)] = inst_19795);

(statearr_19820_19847[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (10))){
var inst_19785 = (state_19801[(2)]);
var state_19801__$1 = state_19801;
var statearr_19821_19848 = state_19801__$1;
(statearr_19821_19848[(2)] = inst_19785);

(statearr_19821_19848[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (8))){
var inst_19765 = (state_19801[(8)]);
var inst_19774 = (state_19801[(11)]);
var tmp19818 = inst_19765;
var inst_19765__$1 = tmp19818;
var inst_19766 = inst_19774;
var state_19801__$1 = (function (){var statearr_19822 = state_19801;
(statearr_19822[(7)] = inst_19766);

(statearr_19822[(8)] = inst_19765__$1);

return statearr_19822;
})();
var statearr_19823_19849 = state_19801__$1;
(statearr_19823_19849[(2)] = null);

(statearr_19823_19849[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto___19835,out))
;
return ((function (switch__16949__auto__,c__17075__auto___19835,out){
return (function() {
var cljs$core$async$state_machine__16950__auto__ = null;
var cljs$core$async$state_machine__16950__auto____0 = (function (){
var statearr_19827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19827[(0)] = cljs$core$async$state_machine__16950__auto__);

(statearr_19827[(1)] = (1));

return statearr_19827;
});
var cljs$core$async$state_machine__16950__auto____1 = (function (state_19801){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_19801);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e19828){if((e19828 instanceof Object)){
var ex__16953__auto__ = e19828;
var statearr_19829_19850 = state_19801;
(statearr_19829_19850[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19801);

return cljs.core.cst$kw$recur;
} else {
throw e19828;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__19851 = state_19801;
state_19801 = G__19851;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$state_machine__16950__auto__ = function(state_19801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16950__auto____1.call(this,state_19801);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16950__auto____0;
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16950__auto____1;
return cljs$core$async$state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___19835,out))
})();
var state__17077__auto__ = (function (){var statearr_19830 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_19830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___19835);

return statearr_19830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___19835,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args19852 = [];
var len__9181__auto___19926 = arguments.length;
var i__9182__auto___19927 = (0);
while(true){
if((i__9182__auto___19927 < len__9181__auto___19926)){
args19852.push((arguments[i__9182__auto___19927]));

var G__19928 = (i__9182__auto___19927 + (1));
i__9182__auto___19927 = G__19928;
continue;
} else {
}
break;
}

var G__19854 = args19852.length;
switch (G__19854) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19852.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17075__auto___19930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto___19930,out){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto___19930,out){
return (function (state_19896){
var state_val_19897 = (state_19896[(1)]);
if((state_val_19897 === (7))){
var inst_19892 = (state_19896[(2)]);
var state_19896__$1 = state_19896;
var statearr_19898_19931 = state_19896__$1;
(statearr_19898_19931[(2)] = inst_19892);

(statearr_19898_19931[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19897 === (1))){
var inst_19855 = [];
var inst_19856 = inst_19855;
var inst_19857 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19896__$1 = (function (){var statearr_19899 = state_19896;
(statearr_19899[(7)] = inst_19857);

(statearr_19899[(8)] = inst_19856);

return statearr_19899;
})();
var statearr_19900_19932 = state_19896__$1;
(statearr_19900_19932[(2)] = null);

(statearr_19900_19932[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19897 === (4))){
var inst_19860 = (state_19896[(9)]);
var inst_19860__$1 = (state_19896[(2)]);
var inst_19861 = (inst_19860__$1 == null);
var inst_19862 = cljs.core.not(inst_19861);
var state_19896__$1 = (function (){var statearr_19901 = state_19896;
(statearr_19901[(9)] = inst_19860__$1);

return statearr_19901;
})();
if(inst_19862){
var statearr_19902_19933 = state_19896__$1;
(statearr_19902_19933[(1)] = (5));

} else {
var statearr_19903_19934 = state_19896__$1;
(statearr_19903_19934[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19897 === (15))){
var inst_19886 = (state_19896[(2)]);
var state_19896__$1 = state_19896;
var statearr_19904_19935 = state_19896__$1;
(statearr_19904_19935[(2)] = inst_19886);

(statearr_19904_19935[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19897 === (13))){
var state_19896__$1 = state_19896;
var statearr_19905_19936 = state_19896__$1;
(statearr_19905_19936[(2)] = null);

(statearr_19905_19936[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19897 === (6))){
var inst_19856 = (state_19896[(8)]);
var inst_19881 = inst_19856.length;
var inst_19882 = (inst_19881 > (0));
var state_19896__$1 = state_19896;
if(cljs.core.truth_(inst_19882)){
var statearr_19906_19937 = state_19896__$1;
(statearr_19906_19937[(1)] = (12));

} else {
var statearr_19907_19938 = state_19896__$1;
(statearr_19907_19938[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19897 === (3))){
var inst_19894 = (state_19896[(2)]);
var state_19896__$1 = state_19896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19896__$1,inst_19894);
} else {
if((state_val_19897 === (12))){
var inst_19856 = (state_19896[(8)]);
var inst_19884 = cljs.core.vec(inst_19856);
var state_19896__$1 = state_19896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19896__$1,(15),out,inst_19884);
} else {
if((state_val_19897 === (2))){
var state_19896__$1 = state_19896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19896__$1,(4),ch);
} else {
if((state_val_19897 === (11))){
var inst_19860 = (state_19896[(9)]);
var inst_19864 = (state_19896[(10)]);
var inst_19874 = (state_19896[(2)]);
var inst_19875 = [];
var inst_19876 = inst_19875.push(inst_19860);
var inst_19856 = inst_19875;
var inst_19857 = inst_19864;
var state_19896__$1 = (function (){var statearr_19908 = state_19896;
(statearr_19908[(7)] = inst_19857);

(statearr_19908[(11)] = inst_19876);

(statearr_19908[(8)] = inst_19856);

(statearr_19908[(12)] = inst_19874);

return statearr_19908;
})();
var statearr_19909_19939 = state_19896__$1;
(statearr_19909_19939[(2)] = null);

(statearr_19909_19939[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19897 === (9))){
var inst_19856 = (state_19896[(8)]);
var inst_19872 = cljs.core.vec(inst_19856);
var state_19896__$1 = state_19896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19896__$1,(11),out,inst_19872);
} else {
if((state_val_19897 === (5))){
var inst_19860 = (state_19896[(9)]);
var inst_19857 = (state_19896[(7)]);
var inst_19864 = (state_19896[(10)]);
var inst_19864__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19860) : f.call(null,inst_19860));
var inst_19865 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19864__$1,inst_19857);
var inst_19866 = cljs.core.keyword_identical_QMARK_(inst_19857,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19867 = (inst_19865) || (inst_19866);
var state_19896__$1 = (function (){var statearr_19910 = state_19896;
(statearr_19910[(10)] = inst_19864__$1);

return statearr_19910;
})();
if(cljs.core.truth_(inst_19867)){
var statearr_19911_19940 = state_19896__$1;
(statearr_19911_19940[(1)] = (8));

} else {
var statearr_19912_19941 = state_19896__$1;
(statearr_19912_19941[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19897 === (14))){
var inst_19889 = (state_19896[(2)]);
var inst_19890 = cljs.core.async.close_BANG_(out);
var state_19896__$1 = (function (){var statearr_19914 = state_19896;
(statearr_19914[(13)] = inst_19889);

return statearr_19914;
})();
var statearr_19915_19942 = state_19896__$1;
(statearr_19915_19942[(2)] = inst_19890);

(statearr_19915_19942[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19897 === (10))){
var inst_19879 = (state_19896[(2)]);
var state_19896__$1 = state_19896;
var statearr_19916_19943 = state_19896__$1;
(statearr_19916_19943[(2)] = inst_19879);

(statearr_19916_19943[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19897 === (8))){
var inst_19860 = (state_19896[(9)]);
var inst_19856 = (state_19896[(8)]);
var inst_19864 = (state_19896[(10)]);
var inst_19869 = inst_19856.push(inst_19860);
var tmp19913 = inst_19856;
var inst_19856__$1 = tmp19913;
var inst_19857 = inst_19864;
var state_19896__$1 = (function (){var statearr_19917 = state_19896;
(statearr_19917[(7)] = inst_19857);

(statearr_19917[(14)] = inst_19869);

(statearr_19917[(8)] = inst_19856__$1);

return statearr_19917;
})();
var statearr_19918_19944 = state_19896__$1;
(statearr_19918_19944[(2)] = null);

(statearr_19918_19944[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17075__auto___19930,out))
;
return ((function (switch__16949__auto__,c__17075__auto___19930,out){
return (function() {
var cljs$core$async$state_machine__16950__auto__ = null;
var cljs$core$async$state_machine__16950__auto____0 = (function (){
var statearr_19922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19922[(0)] = cljs$core$async$state_machine__16950__auto__);

(statearr_19922[(1)] = (1));

return statearr_19922;
});
var cljs$core$async$state_machine__16950__auto____1 = (function (state_19896){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_19896);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e19923){if((e19923 instanceof Object)){
var ex__16953__auto__ = e19923;
var statearr_19924_19945 = state_19896;
(statearr_19924_19945[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19896);

return cljs.core.cst$kw$recur;
} else {
throw e19923;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__19946 = state_19896;
state_19896 = G__19946;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
cljs$core$async$state_machine__16950__auto__ = function(state_19896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16950__auto____1.call(this,state_19896);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16950__auto____0;
cljs$core$async$state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16950__auto____1;
return cljs$core$async$state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto___19930,out))
})();
var state__17077__auto__ = (function (){var statearr_19925 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_19925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto___19930);

return statearr_19925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto___19930,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

