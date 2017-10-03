// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46893 = arguments.length;
switch (G__46893) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async46894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46894 = (function (f,blockable,meta46895){
this.f = f;
this.blockable = blockable;
this.meta46895 = meta46895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46896,meta46895__$1){
var self__ = this;
var _46896__$1 = this;
return (new cljs.core.async.t_cljs$core$async46894(self__.f,self__.blockable,meta46895__$1));
});

cljs.core.async.t_cljs$core$async46894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46896){
var self__ = this;
var _46896__$1 = this;
return self__.meta46895;
});

cljs.core.async.t_cljs$core$async46894.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46894.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46895","meta46895",1513720679,null)], null);
});

cljs.core.async.t_cljs$core$async46894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46894";

cljs.core.async.t_cljs$core$async46894.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async46894");
});

cljs.core.async.__GT_t_cljs$core$async46894 = (function cljs$core$async$__GT_t_cljs$core$async46894(f__$1,blockable__$1,meta46895){
return (new cljs.core.async.t_cljs$core$async46894(f__$1,blockable__$1,meta46895));
});

}

return (new cljs.core.async.t_cljs$core$async46894(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__46900 = arguments.length;
switch (G__46900) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__46903 = arguments.length;
switch (G__46903) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__46906 = arguments.length;
switch (G__46906) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_46908 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46908);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46908,ret){
return (function (){
return fn1.call(null,val_46908);
});})(val_46908,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__46910 = arguments.length;
switch (G__46910) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5288__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5288__auto__)){
var ret = temp__5288__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5288__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5288__auto__)){
var retb = temp__5288__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5288__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5288__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31292__auto___46912 = n;
var x_46913 = (0);
while(true){
if((x_46913 < n__31292__auto___46912)){
(a[x_46913] = (0));

var G__46914 = (x_46913 + (1));
x_46913 = G__46914;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__46915 = (i + (1));
i = G__46915;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46916 = (function (flag,meta46917){
this.flag = flag;
this.meta46917 = meta46917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46918,meta46917__$1){
var self__ = this;
var _46918__$1 = this;
return (new cljs.core.async.t_cljs$core$async46916(self__.flag,meta46917__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46918){
var self__ = this;
var _46918__$1 = this;
return self__.meta46917;
});})(flag))
;

cljs.core.async.t_cljs$core$async46916.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46916.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46916.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46917","meta46917",-2047339536,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46916";

cljs.core.async.t_cljs$core$async46916.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async46916");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46916 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46916(flag__$1,meta46917){
return (new cljs.core.async.t_cljs$core$async46916(flag__$1,meta46917));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46916(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46919 = (function (flag,cb,meta46920){
this.flag = flag;
this.cb = cb;
this.meta46920 = meta46920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46921,meta46920__$1){
var self__ = this;
var _46921__$1 = this;
return (new cljs.core.async.t_cljs$core$async46919(self__.flag,self__.cb,meta46920__$1));
});

cljs.core.async.t_cljs$core$async46919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46921){
var self__ = this;
var _46921__$1 = this;
return self__.meta46920;
});

cljs.core.async.t_cljs$core$async46919.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46919.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46919.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46919.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46920","meta46920",-794853178,null)], null);
});

cljs.core.async.t_cljs$core$async46919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46919";

cljs.core.async.t_cljs$core$async46919.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async46919");
});

cljs.core.async.__GT_t_cljs$core$async46919 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46919(flag__$1,cb__$1,meta46920){
return (new cljs.core.async.t_cljs$core$async46919(flag__$1,cb__$1,meta46920));
});

}

return (new cljs.core.async.t_cljs$core$async46919(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46922_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46922_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46923_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46923_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30249__auto__ = wport;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46924 = (i + (1));
i = G__46924;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30249__auto__ = ret;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5290__auto__ = (function (){var and__30237__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30237__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30237__auto__;
}
})();
if(cljs.core.truth_(temp__5290__auto__)){
var got = temp__5290__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__31533__auto__ = [];
var len__31526__auto___46930 = arguments.length;
var i__31527__auto___46931 = (0);
while(true){
if((i__31527__auto___46931 < len__31526__auto___46930)){
args__31533__auto__.push((arguments[i__31527__auto___46931]));

var G__46932 = (i__31527__auto___46931 + (1));
i__31527__auto___46931 = G__46932;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46927){
var map__46928 = p__46927;
var map__46928__$1 = ((((!((map__46928 == null)))?((((map__46928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46928):map__46928);
var opts = map__46928__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46925){
var G__46926 = cljs.core.first.call(null,seq46925);
var seq46925__$1 = cljs.core.next.call(null,seq46925);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46926,seq46925__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__46934 = arguments.length;
switch (G__46934) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46833__auto___46980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___46980){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___46980){
return (function (state_46958){
var state_val_46959 = (state_46958[(1)]);
if((state_val_46959 === (7))){
var inst_46954 = (state_46958[(2)]);
var state_46958__$1 = state_46958;
var statearr_46960_46981 = state_46958__$1;
(statearr_46960_46981[(2)] = inst_46954);

(statearr_46960_46981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (1))){
var state_46958__$1 = state_46958;
var statearr_46961_46982 = state_46958__$1;
(statearr_46961_46982[(2)] = null);

(statearr_46961_46982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (4))){
var inst_46937 = (state_46958[(7)]);
var inst_46937__$1 = (state_46958[(2)]);
var inst_46938 = (inst_46937__$1 == null);
var state_46958__$1 = (function (){var statearr_46962 = state_46958;
(statearr_46962[(7)] = inst_46937__$1);

return statearr_46962;
})();
if(cljs.core.truth_(inst_46938)){
var statearr_46963_46983 = state_46958__$1;
(statearr_46963_46983[(1)] = (5));

} else {
var statearr_46964_46984 = state_46958__$1;
(statearr_46964_46984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (13))){
var state_46958__$1 = state_46958;
var statearr_46965_46985 = state_46958__$1;
(statearr_46965_46985[(2)] = null);

(statearr_46965_46985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (6))){
var inst_46937 = (state_46958[(7)]);
var state_46958__$1 = state_46958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46958__$1,(11),to,inst_46937);
} else {
if((state_val_46959 === (3))){
var inst_46956 = (state_46958[(2)]);
var state_46958__$1 = state_46958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46958__$1,inst_46956);
} else {
if((state_val_46959 === (12))){
var state_46958__$1 = state_46958;
var statearr_46966_46986 = state_46958__$1;
(statearr_46966_46986[(2)] = null);

(statearr_46966_46986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (2))){
var state_46958__$1 = state_46958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46958__$1,(4),from);
} else {
if((state_val_46959 === (11))){
var inst_46947 = (state_46958[(2)]);
var state_46958__$1 = state_46958;
if(cljs.core.truth_(inst_46947)){
var statearr_46967_46987 = state_46958__$1;
(statearr_46967_46987[(1)] = (12));

} else {
var statearr_46968_46988 = state_46958__$1;
(statearr_46968_46988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (9))){
var state_46958__$1 = state_46958;
var statearr_46969_46989 = state_46958__$1;
(statearr_46969_46989[(2)] = null);

(statearr_46969_46989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (5))){
var state_46958__$1 = state_46958;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46970_46990 = state_46958__$1;
(statearr_46970_46990[(1)] = (8));

} else {
var statearr_46971_46991 = state_46958__$1;
(statearr_46971_46991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (14))){
var inst_46952 = (state_46958[(2)]);
var state_46958__$1 = state_46958;
var statearr_46972_46992 = state_46958__$1;
(statearr_46972_46992[(2)] = inst_46952);

(statearr_46972_46992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (10))){
var inst_46944 = (state_46958[(2)]);
var state_46958__$1 = state_46958;
var statearr_46973_46993 = state_46958__$1;
(statearr_46973_46993[(2)] = inst_46944);

(statearr_46973_46993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (8))){
var inst_46941 = cljs.core.async.close_BANG_.call(null,to);
var state_46958__$1 = state_46958;
var statearr_46974_46994 = state_46958__$1;
(statearr_46974_46994[(2)] = inst_46941);

(statearr_46974_46994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto___46980))
;
return ((function (switch__46743__auto__,c__46833__auto___46980){
return (function() {
var cljs$core$async$state_machine__46744__auto__ = null;
var cljs$core$async$state_machine__46744__auto____0 = (function (){
var statearr_46975 = [null,null,null,null,null,null,null,null];
(statearr_46975[(0)] = cljs$core$async$state_machine__46744__auto__);

(statearr_46975[(1)] = (1));

return statearr_46975;
});
var cljs$core$async$state_machine__46744__auto____1 = (function (state_46958){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_46958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e46976){if((e46976 instanceof Object)){
var ex__46747__auto__ = e46976;
var statearr_46977_46995 = state_46958;
(statearr_46977_46995[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46996 = state_46958;
state_46958 = G__46996;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$state_machine__46744__auto__ = function(state_46958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46744__auto____1.call(this,state_46958);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46744__auto____0;
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46744__auto____1;
return cljs$core$async$state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___46980))
})();
var state__46835__auto__ = (function (){var statearr_46978 = f__46834__auto__.call(null);
(statearr_46978[(6)] = c__46833__auto___46980);

return statearr_46978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___46980))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__46997){
var vec__46998 = p__46997;
var v = cljs.core.nth.call(null,vec__46998,(0),null);
var p = cljs.core.nth.call(null,vec__46998,(1),null);
var job = vec__46998;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__46833__auto___47169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___47169,res,vec__46998,v,p,job,jobs,results){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___47169,res,vec__46998,v,p,job,jobs,results){
return (function (state_47005){
var state_val_47006 = (state_47005[(1)]);
if((state_val_47006 === (1))){
var state_47005__$1 = state_47005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47005__$1,(2),res,v);
} else {
if((state_val_47006 === (2))){
var inst_47002 = (state_47005[(2)]);
var inst_47003 = cljs.core.async.close_BANG_.call(null,res);
var state_47005__$1 = (function (){var statearr_47007 = state_47005;
(statearr_47007[(7)] = inst_47002);

return statearr_47007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47005__$1,inst_47003);
} else {
return null;
}
}
});})(c__46833__auto___47169,res,vec__46998,v,p,job,jobs,results))
;
return ((function (switch__46743__auto__,c__46833__auto___47169,res,vec__46998,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0 = (function (){
var statearr_47008 = [null,null,null,null,null,null,null,null];
(statearr_47008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__);

(statearr_47008[(1)] = (1));

return statearr_47008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1 = (function (state_47005){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_47005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e47009){if((e47009 instanceof Object)){
var ex__46747__auto__ = e47009;
var statearr_47010_47170 = state_47005;
(statearr_47010_47170[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47171 = state_47005;
state_47005 = G__47171;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__ = function(state_47005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1.call(this,state_47005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___47169,res,vec__46998,v,p,job,jobs,results))
})();
var state__46835__auto__ = (function (){var statearr_47011 = f__46834__auto__.call(null);
(statearr_47011[(6)] = c__46833__auto___47169);

return statearr_47011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___47169,res,vec__46998,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47012){
var vec__47013 = p__47012;
var v = cljs.core.nth.call(null,vec__47013,(0),null);
var p = cljs.core.nth.call(null,vec__47013,(1),null);
var job = vec__47013;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31292__auto___47172 = n;
var __47173 = (0);
while(true){
if((__47173 < n__31292__auto___47172)){
var G__47016_47174 = type;
var G__47016_47175__$1 = (((G__47016_47174 instanceof cljs.core.Keyword))?G__47016_47174.fqn:null);
switch (G__47016_47175__$1) {
case "compute":
var c__46833__auto___47177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47173,c__46833__auto___47177,G__47016_47174,G__47016_47175__$1,n__31292__auto___47172,jobs,results,process,async){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (__47173,c__46833__auto___47177,G__47016_47174,G__47016_47175__$1,n__31292__auto___47172,jobs,results,process,async){
return (function (state_47029){
var state_val_47030 = (state_47029[(1)]);
if((state_val_47030 === (1))){
var state_47029__$1 = state_47029;
var statearr_47031_47178 = state_47029__$1;
(statearr_47031_47178[(2)] = null);

(statearr_47031_47178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47030 === (2))){
var state_47029__$1 = state_47029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47029__$1,(4),jobs);
} else {
if((state_val_47030 === (3))){
var inst_47027 = (state_47029[(2)]);
var state_47029__$1 = state_47029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47029__$1,inst_47027);
} else {
if((state_val_47030 === (4))){
var inst_47019 = (state_47029[(2)]);
var inst_47020 = process.call(null,inst_47019);
var state_47029__$1 = state_47029;
if(cljs.core.truth_(inst_47020)){
var statearr_47032_47179 = state_47029__$1;
(statearr_47032_47179[(1)] = (5));

} else {
var statearr_47033_47180 = state_47029__$1;
(statearr_47033_47180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47030 === (5))){
var state_47029__$1 = state_47029;
var statearr_47034_47181 = state_47029__$1;
(statearr_47034_47181[(2)] = null);

(statearr_47034_47181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47030 === (6))){
var state_47029__$1 = state_47029;
var statearr_47035_47182 = state_47029__$1;
(statearr_47035_47182[(2)] = null);

(statearr_47035_47182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47030 === (7))){
var inst_47025 = (state_47029[(2)]);
var state_47029__$1 = state_47029;
var statearr_47036_47183 = state_47029__$1;
(statearr_47036_47183[(2)] = inst_47025);

(statearr_47036_47183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47173,c__46833__auto___47177,G__47016_47174,G__47016_47175__$1,n__31292__auto___47172,jobs,results,process,async))
;
return ((function (__47173,switch__46743__auto__,c__46833__auto___47177,G__47016_47174,G__47016_47175__$1,n__31292__auto___47172,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0 = (function (){
var statearr_47037 = [null,null,null,null,null,null,null];
(statearr_47037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__);

(statearr_47037[(1)] = (1));

return statearr_47037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1 = (function (state_47029){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_47029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e47038){if((e47038 instanceof Object)){
var ex__46747__auto__ = e47038;
var statearr_47039_47184 = state_47029;
(statearr_47039_47184[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47185 = state_47029;
state_47029 = G__47185;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__ = function(state_47029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1.call(this,state_47029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__;
})()
;})(__47173,switch__46743__auto__,c__46833__auto___47177,G__47016_47174,G__47016_47175__$1,n__31292__auto___47172,jobs,results,process,async))
})();
var state__46835__auto__ = (function (){var statearr_47040 = f__46834__auto__.call(null);
(statearr_47040[(6)] = c__46833__auto___47177);

return statearr_47040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(__47173,c__46833__auto___47177,G__47016_47174,G__47016_47175__$1,n__31292__auto___47172,jobs,results,process,async))
);


break;
case "async":
var c__46833__auto___47186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47173,c__46833__auto___47186,G__47016_47174,G__47016_47175__$1,n__31292__auto___47172,jobs,results,process,async){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (__47173,c__46833__auto___47186,G__47016_47174,G__47016_47175__$1,n__31292__auto___47172,jobs,results,process,async){
return (function (state_47053){
var state_val_47054 = (state_47053[(1)]);
if((state_val_47054 === (1))){
var state_47053__$1 = state_47053;
var statearr_47055_47187 = state_47053__$1;
(statearr_47055_47187[(2)] = null);

(statearr_47055_47187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47054 === (2))){
var state_47053__$1 = state_47053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47053__$1,(4),jobs);
} else {
if((state_val_47054 === (3))){
var inst_47051 = (state_47053[(2)]);
var state_47053__$1 = state_47053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47053__$1,inst_47051);
} else {
if((state_val_47054 === (4))){
var inst_47043 = (state_47053[(2)]);
var inst_47044 = async.call(null,inst_47043);
var state_47053__$1 = state_47053;
if(cljs.core.truth_(inst_47044)){
var statearr_47056_47188 = state_47053__$1;
(statearr_47056_47188[(1)] = (5));

} else {
var statearr_47057_47189 = state_47053__$1;
(statearr_47057_47189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47054 === (5))){
var state_47053__$1 = state_47053;
var statearr_47058_47190 = state_47053__$1;
(statearr_47058_47190[(2)] = null);

(statearr_47058_47190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47054 === (6))){
var state_47053__$1 = state_47053;
var statearr_47059_47191 = state_47053__$1;
(statearr_47059_47191[(2)] = null);

(statearr_47059_47191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47054 === (7))){
var inst_47049 = (state_47053[(2)]);
var state_47053__$1 = state_47053;
var statearr_47060_47192 = state_47053__$1;
(statearr_47060_47192[(2)] = inst_47049);

(statearr_47060_47192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47173,c__46833__auto___47186,G__47016_47174,G__47016_47175__$1,n__31292__auto___47172,jobs,results,process,async))
;
return ((function (__47173,switch__46743__auto__,c__46833__auto___47186,G__47016_47174,G__47016_47175__$1,n__31292__auto___47172,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0 = (function (){
var statearr_47061 = [null,null,null,null,null,null,null];
(statearr_47061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__);

(statearr_47061[(1)] = (1));

return statearr_47061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1 = (function (state_47053){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_47053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e47062){if((e47062 instanceof Object)){
var ex__46747__auto__ = e47062;
var statearr_47063_47193 = state_47053;
(statearr_47063_47193[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47194 = state_47053;
state_47053 = G__47194;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__ = function(state_47053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1.call(this,state_47053);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__;
})()
;})(__47173,switch__46743__auto__,c__46833__auto___47186,G__47016_47174,G__47016_47175__$1,n__31292__auto___47172,jobs,results,process,async))
})();
var state__46835__auto__ = (function (){var statearr_47064 = f__46834__auto__.call(null);
(statearr_47064[(6)] = c__46833__auto___47186);

return statearr_47064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(__47173,c__46833__auto___47186,G__47016_47174,G__47016_47175__$1,n__31292__auto___47172,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47016_47175__$1)].join('')));

}

var G__47195 = (__47173 + (1));
__47173 = G__47195;
continue;
} else {
}
break;
}

var c__46833__auto___47196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___47196,jobs,results,process,async){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___47196,jobs,results,process,async){
return (function (state_47086){
var state_val_47087 = (state_47086[(1)]);
if((state_val_47087 === (1))){
var state_47086__$1 = state_47086;
var statearr_47088_47197 = state_47086__$1;
(statearr_47088_47197[(2)] = null);

(statearr_47088_47197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47087 === (2))){
var state_47086__$1 = state_47086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47086__$1,(4),from);
} else {
if((state_val_47087 === (3))){
var inst_47084 = (state_47086[(2)]);
var state_47086__$1 = state_47086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47086__$1,inst_47084);
} else {
if((state_val_47087 === (4))){
var inst_47067 = (state_47086[(7)]);
var inst_47067__$1 = (state_47086[(2)]);
var inst_47068 = (inst_47067__$1 == null);
var state_47086__$1 = (function (){var statearr_47089 = state_47086;
(statearr_47089[(7)] = inst_47067__$1);

return statearr_47089;
})();
if(cljs.core.truth_(inst_47068)){
var statearr_47090_47198 = state_47086__$1;
(statearr_47090_47198[(1)] = (5));

} else {
var statearr_47091_47199 = state_47086__$1;
(statearr_47091_47199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47087 === (5))){
var inst_47070 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47086__$1 = state_47086;
var statearr_47092_47200 = state_47086__$1;
(statearr_47092_47200[(2)] = inst_47070);

(statearr_47092_47200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47087 === (6))){
var inst_47072 = (state_47086[(8)]);
var inst_47067 = (state_47086[(7)]);
var inst_47072__$1 = cljs.core.async.chan.call(null,(1));
var inst_47073 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47074 = [inst_47067,inst_47072__$1];
var inst_47075 = (new cljs.core.PersistentVector(null,2,(5),inst_47073,inst_47074,null));
var state_47086__$1 = (function (){var statearr_47093 = state_47086;
(statearr_47093[(8)] = inst_47072__$1);

return statearr_47093;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47086__$1,(8),jobs,inst_47075);
} else {
if((state_val_47087 === (7))){
var inst_47082 = (state_47086[(2)]);
var state_47086__$1 = state_47086;
var statearr_47094_47201 = state_47086__$1;
(statearr_47094_47201[(2)] = inst_47082);

(statearr_47094_47201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47087 === (8))){
var inst_47072 = (state_47086[(8)]);
var inst_47077 = (state_47086[(2)]);
var state_47086__$1 = (function (){var statearr_47095 = state_47086;
(statearr_47095[(9)] = inst_47077);

return statearr_47095;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47086__$1,(9),results,inst_47072);
} else {
if((state_val_47087 === (9))){
var inst_47079 = (state_47086[(2)]);
var state_47086__$1 = (function (){var statearr_47096 = state_47086;
(statearr_47096[(10)] = inst_47079);

return statearr_47096;
})();
var statearr_47097_47202 = state_47086__$1;
(statearr_47097_47202[(2)] = null);

(statearr_47097_47202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto___47196,jobs,results,process,async))
;
return ((function (switch__46743__auto__,c__46833__auto___47196,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0 = (function (){
var statearr_47098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__);

(statearr_47098[(1)] = (1));

return statearr_47098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1 = (function (state_47086){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_47086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e47099){if((e47099 instanceof Object)){
var ex__46747__auto__ = e47099;
var statearr_47100_47203 = state_47086;
(statearr_47100_47203[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47204 = state_47086;
state_47086 = G__47204;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__ = function(state_47086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1.call(this,state_47086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___47196,jobs,results,process,async))
})();
var state__46835__auto__ = (function (){var statearr_47101 = f__46834__auto__.call(null);
(statearr_47101[(6)] = c__46833__auto___47196);

return statearr_47101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___47196,jobs,results,process,async))
);


var c__46833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto__,jobs,results,process,async){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto__,jobs,results,process,async){
return (function (state_47139){
var state_val_47140 = (state_47139[(1)]);
if((state_val_47140 === (7))){
var inst_47135 = (state_47139[(2)]);
var state_47139__$1 = state_47139;
var statearr_47141_47205 = state_47139__$1;
(statearr_47141_47205[(2)] = inst_47135);

(statearr_47141_47205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (20))){
var state_47139__$1 = state_47139;
var statearr_47142_47206 = state_47139__$1;
(statearr_47142_47206[(2)] = null);

(statearr_47142_47206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (1))){
var state_47139__$1 = state_47139;
var statearr_47143_47207 = state_47139__$1;
(statearr_47143_47207[(2)] = null);

(statearr_47143_47207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (4))){
var inst_47104 = (state_47139[(7)]);
var inst_47104__$1 = (state_47139[(2)]);
var inst_47105 = (inst_47104__$1 == null);
var state_47139__$1 = (function (){var statearr_47144 = state_47139;
(statearr_47144[(7)] = inst_47104__$1);

return statearr_47144;
})();
if(cljs.core.truth_(inst_47105)){
var statearr_47145_47208 = state_47139__$1;
(statearr_47145_47208[(1)] = (5));

} else {
var statearr_47146_47209 = state_47139__$1;
(statearr_47146_47209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (15))){
var inst_47117 = (state_47139[(8)]);
var state_47139__$1 = state_47139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47139__$1,(18),to,inst_47117);
} else {
if((state_val_47140 === (21))){
var inst_47130 = (state_47139[(2)]);
var state_47139__$1 = state_47139;
var statearr_47147_47210 = state_47139__$1;
(statearr_47147_47210[(2)] = inst_47130);

(statearr_47147_47210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (13))){
var inst_47132 = (state_47139[(2)]);
var state_47139__$1 = (function (){var statearr_47148 = state_47139;
(statearr_47148[(9)] = inst_47132);

return statearr_47148;
})();
var statearr_47149_47211 = state_47139__$1;
(statearr_47149_47211[(2)] = null);

(statearr_47149_47211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (6))){
var inst_47104 = (state_47139[(7)]);
var state_47139__$1 = state_47139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47139__$1,(11),inst_47104);
} else {
if((state_val_47140 === (17))){
var inst_47125 = (state_47139[(2)]);
var state_47139__$1 = state_47139;
if(cljs.core.truth_(inst_47125)){
var statearr_47150_47212 = state_47139__$1;
(statearr_47150_47212[(1)] = (19));

} else {
var statearr_47151_47213 = state_47139__$1;
(statearr_47151_47213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (3))){
var inst_47137 = (state_47139[(2)]);
var state_47139__$1 = state_47139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47139__$1,inst_47137);
} else {
if((state_val_47140 === (12))){
var inst_47114 = (state_47139[(10)]);
var state_47139__$1 = state_47139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47139__$1,(14),inst_47114);
} else {
if((state_val_47140 === (2))){
var state_47139__$1 = state_47139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47139__$1,(4),results);
} else {
if((state_val_47140 === (19))){
var state_47139__$1 = state_47139;
var statearr_47152_47214 = state_47139__$1;
(statearr_47152_47214[(2)] = null);

(statearr_47152_47214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (11))){
var inst_47114 = (state_47139[(2)]);
var state_47139__$1 = (function (){var statearr_47153 = state_47139;
(statearr_47153[(10)] = inst_47114);

return statearr_47153;
})();
var statearr_47154_47215 = state_47139__$1;
(statearr_47154_47215[(2)] = null);

(statearr_47154_47215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (9))){
var state_47139__$1 = state_47139;
var statearr_47155_47216 = state_47139__$1;
(statearr_47155_47216[(2)] = null);

(statearr_47155_47216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (5))){
var state_47139__$1 = state_47139;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47156_47217 = state_47139__$1;
(statearr_47156_47217[(1)] = (8));

} else {
var statearr_47157_47218 = state_47139__$1;
(statearr_47157_47218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (14))){
var inst_47117 = (state_47139[(8)]);
var inst_47119 = (state_47139[(11)]);
var inst_47117__$1 = (state_47139[(2)]);
var inst_47118 = (inst_47117__$1 == null);
var inst_47119__$1 = cljs.core.not.call(null,inst_47118);
var state_47139__$1 = (function (){var statearr_47158 = state_47139;
(statearr_47158[(8)] = inst_47117__$1);

(statearr_47158[(11)] = inst_47119__$1);

return statearr_47158;
})();
if(inst_47119__$1){
var statearr_47159_47219 = state_47139__$1;
(statearr_47159_47219[(1)] = (15));

} else {
var statearr_47160_47220 = state_47139__$1;
(statearr_47160_47220[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (16))){
var inst_47119 = (state_47139[(11)]);
var state_47139__$1 = state_47139;
var statearr_47161_47221 = state_47139__$1;
(statearr_47161_47221[(2)] = inst_47119);

(statearr_47161_47221[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (10))){
var inst_47111 = (state_47139[(2)]);
var state_47139__$1 = state_47139;
var statearr_47162_47222 = state_47139__$1;
(statearr_47162_47222[(2)] = inst_47111);

(statearr_47162_47222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (18))){
var inst_47122 = (state_47139[(2)]);
var state_47139__$1 = state_47139;
var statearr_47163_47223 = state_47139__$1;
(statearr_47163_47223[(2)] = inst_47122);

(statearr_47163_47223[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (8))){
var inst_47108 = cljs.core.async.close_BANG_.call(null,to);
var state_47139__$1 = state_47139;
var statearr_47164_47224 = state_47139__$1;
(statearr_47164_47224[(2)] = inst_47108);

(statearr_47164_47224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto__,jobs,results,process,async))
;
return ((function (switch__46743__auto__,c__46833__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0 = (function (){
var statearr_47165 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__);

(statearr_47165[(1)] = (1));

return statearr_47165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1 = (function (state_47139){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_47139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e47166){if((e47166 instanceof Object)){
var ex__46747__auto__ = e47166;
var statearr_47167_47225 = state_47139;
(statearr_47167_47225[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47226 = state_47139;
state_47139 = G__47226;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__ = function(state_47139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1.call(this,state_47139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto__,jobs,results,process,async))
})();
var state__46835__auto__ = (function (){var statearr_47168 = f__46834__auto__.call(null);
(statearr_47168[(6)] = c__46833__auto__);

return statearr_47168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto__,jobs,results,process,async))
);

return c__46833__auto__;
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
var G__47228 = arguments.length;
switch (G__47228) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__47231 = arguments.length;
switch (G__47231) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__47234 = arguments.length;
switch (G__47234) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__46833__auto___47283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___47283,tc,fc){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___47283,tc,fc){
return (function (state_47260){
var state_val_47261 = (state_47260[(1)]);
if((state_val_47261 === (7))){
var inst_47256 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
var statearr_47262_47284 = state_47260__$1;
(statearr_47262_47284[(2)] = inst_47256);

(statearr_47262_47284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (1))){
var state_47260__$1 = state_47260;
var statearr_47263_47285 = state_47260__$1;
(statearr_47263_47285[(2)] = null);

(statearr_47263_47285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (4))){
var inst_47237 = (state_47260[(7)]);
var inst_47237__$1 = (state_47260[(2)]);
var inst_47238 = (inst_47237__$1 == null);
var state_47260__$1 = (function (){var statearr_47264 = state_47260;
(statearr_47264[(7)] = inst_47237__$1);

return statearr_47264;
})();
if(cljs.core.truth_(inst_47238)){
var statearr_47265_47286 = state_47260__$1;
(statearr_47265_47286[(1)] = (5));

} else {
var statearr_47266_47287 = state_47260__$1;
(statearr_47266_47287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (13))){
var state_47260__$1 = state_47260;
var statearr_47267_47288 = state_47260__$1;
(statearr_47267_47288[(2)] = null);

(statearr_47267_47288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (6))){
var inst_47237 = (state_47260[(7)]);
var inst_47243 = p.call(null,inst_47237);
var state_47260__$1 = state_47260;
if(cljs.core.truth_(inst_47243)){
var statearr_47268_47289 = state_47260__$1;
(statearr_47268_47289[(1)] = (9));

} else {
var statearr_47269_47290 = state_47260__$1;
(statearr_47269_47290[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (3))){
var inst_47258 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47260__$1,inst_47258);
} else {
if((state_val_47261 === (12))){
var state_47260__$1 = state_47260;
var statearr_47270_47291 = state_47260__$1;
(statearr_47270_47291[(2)] = null);

(statearr_47270_47291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (2))){
var state_47260__$1 = state_47260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47260__$1,(4),ch);
} else {
if((state_val_47261 === (11))){
var inst_47237 = (state_47260[(7)]);
var inst_47247 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47260__$1,(8),inst_47247,inst_47237);
} else {
if((state_val_47261 === (9))){
var state_47260__$1 = state_47260;
var statearr_47271_47292 = state_47260__$1;
(statearr_47271_47292[(2)] = tc);

(statearr_47271_47292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (5))){
var inst_47240 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47241 = cljs.core.async.close_BANG_.call(null,fc);
var state_47260__$1 = (function (){var statearr_47272 = state_47260;
(statearr_47272[(8)] = inst_47240);

return statearr_47272;
})();
var statearr_47273_47293 = state_47260__$1;
(statearr_47273_47293[(2)] = inst_47241);

(statearr_47273_47293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (14))){
var inst_47254 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
var statearr_47274_47294 = state_47260__$1;
(statearr_47274_47294[(2)] = inst_47254);

(statearr_47274_47294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (10))){
var state_47260__$1 = state_47260;
var statearr_47275_47295 = state_47260__$1;
(statearr_47275_47295[(2)] = fc);

(statearr_47275_47295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (8))){
var inst_47249 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
if(cljs.core.truth_(inst_47249)){
var statearr_47276_47296 = state_47260__$1;
(statearr_47276_47296[(1)] = (12));

} else {
var statearr_47277_47297 = state_47260__$1;
(statearr_47277_47297[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto___47283,tc,fc))
;
return ((function (switch__46743__auto__,c__46833__auto___47283,tc,fc){
return (function() {
var cljs$core$async$state_machine__46744__auto__ = null;
var cljs$core$async$state_machine__46744__auto____0 = (function (){
var statearr_47278 = [null,null,null,null,null,null,null,null,null];
(statearr_47278[(0)] = cljs$core$async$state_machine__46744__auto__);

(statearr_47278[(1)] = (1));

return statearr_47278;
});
var cljs$core$async$state_machine__46744__auto____1 = (function (state_47260){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_47260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e47279){if((e47279 instanceof Object)){
var ex__46747__auto__ = e47279;
var statearr_47280_47298 = state_47260;
(statearr_47280_47298[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47299 = state_47260;
state_47260 = G__47299;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$state_machine__46744__auto__ = function(state_47260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46744__auto____1.call(this,state_47260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46744__auto____0;
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46744__auto____1;
return cljs$core$async$state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___47283,tc,fc))
})();
var state__46835__auto__ = (function (){var statearr_47281 = f__46834__auto__.call(null);
(statearr_47281[(6)] = c__46833__auto___47283);

return statearr_47281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___47283,tc,fc))
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
var c__46833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto__){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto__){
return (function (state_47320){
var state_val_47321 = (state_47320[(1)]);
if((state_val_47321 === (7))){
var inst_47316 = (state_47320[(2)]);
var state_47320__$1 = state_47320;
var statearr_47322_47340 = state_47320__$1;
(statearr_47322_47340[(2)] = inst_47316);

(statearr_47322_47340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (1))){
var inst_47300 = init;
var state_47320__$1 = (function (){var statearr_47323 = state_47320;
(statearr_47323[(7)] = inst_47300);

return statearr_47323;
})();
var statearr_47324_47341 = state_47320__$1;
(statearr_47324_47341[(2)] = null);

(statearr_47324_47341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (4))){
var inst_47303 = (state_47320[(8)]);
var inst_47303__$1 = (state_47320[(2)]);
var inst_47304 = (inst_47303__$1 == null);
var state_47320__$1 = (function (){var statearr_47325 = state_47320;
(statearr_47325[(8)] = inst_47303__$1);

return statearr_47325;
})();
if(cljs.core.truth_(inst_47304)){
var statearr_47326_47342 = state_47320__$1;
(statearr_47326_47342[(1)] = (5));

} else {
var statearr_47327_47343 = state_47320__$1;
(statearr_47327_47343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (6))){
var inst_47303 = (state_47320[(8)]);
var inst_47300 = (state_47320[(7)]);
var inst_47307 = (state_47320[(9)]);
var inst_47307__$1 = f.call(null,inst_47300,inst_47303);
var inst_47308 = cljs.core.reduced_QMARK_.call(null,inst_47307__$1);
var state_47320__$1 = (function (){var statearr_47328 = state_47320;
(statearr_47328[(9)] = inst_47307__$1);

return statearr_47328;
})();
if(inst_47308){
var statearr_47329_47344 = state_47320__$1;
(statearr_47329_47344[(1)] = (8));

} else {
var statearr_47330_47345 = state_47320__$1;
(statearr_47330_47345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (3))){
var inst_47318 = (state_47320[(2)]);
var state_47320__$1 = state_47320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47320__$1,inst_47318);
} else {
if((state_val_47321 === (2))){
var state_47320__$1 = state_47320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47320__$1,(4),ch);
} else {
if((state_val_47321 === (9))){
var inst_47307 = (state_47320[(9)]);
var inst_47300 = inst_47307;
var state_47320__$1 = (function (){var statearr_47331 = state_47320;
(statearr_47331[(7)] = inst_47300);

return statearr_47331;
})();
var statearr_47332_47346 = state_47320__$1;
(statearr_47332_47346[(2)] = null);

(statearr_47332_47346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (5))){
var inst_47300 = (state_47320[(7)]);
var state_47320__$1 = state_47320;
var statearr_47333_47347 = state_47320__$1;
(statearr_47333_47347[(2)] = inst_47300);

(statearr_47333_47347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (10))){
var inst_47314 = (state_47320[(2)]);
var state_47320__$1 = state_47320;
var statearr_47334_47348 = state_47320__$1;
(statearr_47334_47348[(2)] = inst_47314);

(statearr_47334_47348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (8))){
var inst_47307 = (state_47320[(9)]);
var inst_47310 = cljs.core.deref.call(null,inst_47307);
var state_47320__$1 = state_47320;
var statearr_47335_47349 = state_47320__$1;
(statearr_47335_47349[(2)] = inst_47310);

(statearr_47335_47349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto__))
;
return ((function (switch__46743__auto__,c__46833__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46744__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46744__auto____0 = (function (){
var statearr_47336 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47336[(0)] = cljs$core$async$reduce_$_state_machine__46744__auto__);

(statearr_47336[(1)] = (1));

return statearr_47336;
});
var cljs$core$async$reduce_$_state_machine__46744__auto____1 = (function (state_47320){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_47320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e47337){if((e47337 instanceof Object)){
var ex__46747__auto__ = e47337;
var statearr_47338_47350 = state_47320;
(statearr_47338_47350[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47351 = state_47320;
state_47320 = G__47351;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46744__auto__ = function(state_47320){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46744__auto____1.call(this,state_47320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46744__auto____0;
cljs$core$async$reduce_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46744__auto____1;
return cljs$core$async$reduce_$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto__))
})();
var state__46835__auto__ = (function (){var statearr_47339 = f__46834__auto__.call(null);
(statearr_47339[(6)] = c__46833__auto__);

return statearr_47339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto__))
);

return c__46833__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__46833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto__,f__$1){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto__,f__$1){
return (function (state_47357){
var state_val_47358 = (state_47357[(1)]);
if((state_val_47358 === (1))){
var inst_47352 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47357__$1 = state_47357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47357__$1,(2),inst_47352);
} else {
if((state_val_47358 === (2))){
var inst_47354 = (state_47357[(2)]);
var inst_47355 = f__$1.call(null,inst_47354);
var state_47357__$1 = state_47357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47357__$1,inst_47355);
} else {
return null;
}
}
});})(c__46833__auto__,f__$1))
;
return ((function (switch__46743__auto__,c__46833__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__46744__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46744__auto____0 = (function (){
var statearr_47359 = [null,null,null,null,null,null,null];
(statearr_47359[(0)] = cljs$core$async$transduce_$_state_machine__46744__auto__);

(statearr_47359[(1)] = (1));

return statearr_47359;
});
var cljs$core$async$transduce_$_state_machine__46744__auto____1 = (function (state_47357){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_47357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e47360){if((e47360 instanceof Object)){
var ex__46747__auto__ = e47360;
var statearr_47361_47363 = state_47357;
(statearr_47361_47363[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47364 = state_47357;
state_47357 = G__47364;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46744__auto__ = function(state_47357){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46744__auto____1.call(this,state_47357);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46744__auto____0;
cljs$core$async$transduce_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46744__auto____1;
return cljs$core$async$transduce_$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto__,f__$1))
})();
var state__46835__auto__ = (function (){var statearr_47362 = f__46834__auto__.call(null);
(statearr_47362[(6)] = c__46833__auto__);

return statearr_47362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto__,f__$1))
);

return c__46833__auto__;
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
var G__47366 = arguments.length;
switch (G__47366) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto__){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto__){
return (function (state_47391){
var state_val_47392 = (state_47391[(1)]);
if((state_val_47392 === (7))){
var inst_47373 = (state_47391[(2)]);
var state_47391__$1 = state_47391;
var statearr_47393_47414 = state_47391__$1;
(statearr_47393_47414[(2)] = inst_47373);

(statearr_47393_47414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47392 === (1))){
var inst_47367 = cljs.core.seq.call(null,coll);
var inst_47368 = inst_47367;
var state_47391__$1 = (function (){var statearr_47394 = state_47391;
(statearr_47394[(7)] = inst_47368);

return statearr_47394;
})();
var statearr_47395_47415 = state_47391__$1;
(statearr_47395_47415[(2)] = null);

(statearr_47395_47415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47392 === (4))){
var inst_47368 = (state_47391[(7)]);
var inst_47371 = cljs.core.first.call(null,inst_47368);
var state_47391__$1 = state_47391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47391__$1,(7),ch,inst_47371);
} else {
if((state_val_47392 === (13))){
var inst_47385 = (state_47391[(2)]);
var state_47391__$1 = state_47391;
var statearr_47396_47416 = state_47391__$1;
(statearr_47396_47416[(2)] = inst_47385);

(statearr_47396_47416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47392 === (6))){
var inst_47376 = (state_47391[(2)]);
var state_47391__$1 = state_47391;
if(cljs.core.truth_(inst_47376)){
var statearr_47397_47417 = state_47391__$1;
(statearr_47397_47417[(1)] = (8));

} else {
var statearr_47398_47418 = state_47391__$1;
(statearr_47398_47418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47392 === (3))){
var inst_47389 = (state_47391[(2)]);
var state_47391__$1 = state_47391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47391__$1,inst_47389);
} else {
if((state_val_47392 === (12))){
var state_47391__$1 = state_47391;
var statearr_47399_47419 = state_47391__$1;
(statearr_47399_47419[(2)] = null);

(statearr_47399_47419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47392 === (2))){
var inst_47368 = (state_47391[(7)]);
var state_47391__$1 = state_47391;
if(cljs.core.truth_(inst_47368)){
var statearr_47400_47420 = state_47391__$1;
(statearr_47400_47420[(1)] = (4));

} else {
var statearr_47401_47421 = state_47391__$1;
(statearr_47401_47421[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47392 === (11))){
var inst_47382 = cljs.core.async.close_BANG_.call(null,ch);
var state_47391__$1 = state_47391;
var statearr_47402_47422 = state_47391__$1;
(statearr_47402_47422[(2)] = inst_47382);

(statearr_47402_47422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47392 === (9))){
var state_47391__$1 = state_47391;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47403_47423 = state_47391__$1;
(statearr_47403_47423[(1)] = (11));

} else {
var statearr_47404_47424 = state_47391__$1;
(statearr_47404_47424[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47392 === (5))){
var inst_47368 = (state_47391[(7)]);
var state_47391__$1 = state_47391;
var statearr_47405_47425 = state_47391__$1;
(statearr_47405_47425[(2)] = inst_47368);

(statearr_47405_47425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47392 === (10))){
var inst_47387 = (state_47391[(2)]);
var state_47391__$1 = state_47391;
var statearr_47406_47426 = state_47391__$1;
(statearr_47406_47426[(2)] = inst_47387);

(statearr_47406_47426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47392 === (8))){
var inst_47368 = (state_47391[(7)]);
var inst_47378 = cljs.core.next.call(null,inst_47368);
var inst_47368__$1 = inst_47378;
var state_47391__$1 = (function (){var statearr_47407 = state_47391;
(statearr_47407[(7)] = inst_47368__$1);

return statearr_47407;
})();
var statearr_47408_47427 = state_47391__$1;
(statearr_47408_47427[(2)] = null);

(statearr_47408_47427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto__))
;
return ((function (switch__46743__auto__,c__46833__auto__){
return (function() {
var cljs$core$async$state_machine__46744__auto__ = null;
var cljs$core$async$state_machine__46744__auto____0 = (function (){
var statearr_47409 = [null,null,null,null,null,null,null,null];
(statearr_47409[(0)] = cljs$core$async$state_machine__46744__auto__);

(statearr_47409[(1)] = (1));

return statearr_47409;
});
var cljs$core$async$state_machine__46744__auto____1 = (function (state_47391){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_47391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e47410){if((e47410 instanceof Object)){
var ex__46747__auto__ = e47410;
var statearr_47411_47428 = state_47391;
(statearr_47411_47428[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47429 = state_47391;
state_47391 = G__47429;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$state_machine__46744__auto__ = function(state_47391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46744__auto____1.call(this,state_47391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46744__auto____0;
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46744__auto____1;
return cljs$core$async$state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto__))
})();
var state__46835__auto__ = (function (){var statearr_47412 = f__46834__auto__.call(null);
(statearr_47412[(6)] = c__46833__auto__);

return statearr_47412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto__))
);

return c__46833__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__30982__auto__ = (((_ == null))?null:_);
var m__30983__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,_);
} else {
var m__30983__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__30982__auto__ = (((m == null))?null:m);
var m__30983__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30983__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30982__auto__ = (((m == null))?null:m);
var m__30983__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,m,ch);
} else {
var m__30983__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30982__auto__ = (((m == null))?null:m);
var m__30983__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,m);
} else {
var m__30983__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47430 = (function (ch,cs,meta47431){
this.ch = ch;
this.cs = cs;
this.meta47431 = meta47431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47432,meta47431__$1){
var self__ = this;
var _47432__$1 = this;
return (new cljs.core.async.t_cljs$core$async47430(self__.ch,self__.cs,meta47431__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47432){
var self__ = this;
var _47432__$1 = this;
return self__.meta47431;
});})(cs))
;

cljs.core.async.t_cljs$core$async47430.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47430.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47430.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47430.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47430.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47430.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47431","meta47431",-433227381,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47430";

cljs.core.async.t_cljs$core$async47430.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async47430");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47430 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47430(ch__$1,cs__$1,meta47431){
return (new cljs.core.async.t_cljs$core$async47430(ch__$1,cs__$1,meta47431));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47430(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__46833__auto___47652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___47652,cs,m,dchan,dctr,done){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___47652,cs,m,dchan,dctr,done){
return (function (state_47567){
var state_val_47568 = (state_47567[(1)]);
if((state_val_47568 === (7))){
var inst_47563 = (state_47567[(2)]);
var state_47567__$1 = state_47567;
var statearr_47569_47653 = state_47567__$1;
(statearr_47569_47653[(2)] = inst_47563);

(statearr_47569_47653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (20))){
var inst_47466 = (state_47567[(7)]);
var inst_47478 = cljs.core.first.call(null,inst_47466);
var inst_47479 = cljs.core.nth.call(null,inst_47478,(0),null);
var inst_47480 = cljs.core.nth.call(null,inst_47478,(1),null);
var state_47567__$1 = (function (){var statearr_47570 = state_47567;
(statearr_47570[(8)] = inst_47479);

return statearr_47570;
})();
if(cljs.core.truth_(inst_47480)){
var statearr_47571_47654 = state_47567__$1;
(statearr_47571_47654[(1)] = (22));

} else {
var statearr_47572_47655 = state_47567__$1;
(statearr_47572_47655[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (27))){
var inst_47515 = (state_47567[(9)]);
var inst_47510 = (state_47567[(10)]);
var inst_47508 = (state_47567[(11)]);
var inst_47435 = (state_47567[(12)]);
var inst_47515__$1 = cljs.core._nth.call(null,inst_47508,inst_47510);
var inst_47516 = cljs.core.async.put_BANG_.call(null,inst_47515__$1,inst_47435,done);
var state_47567__$1 = (function (){var statearr_47573 = state_47567;
(statearr_47573[(9)] = inst_47515__$1);

return statearr_47573;
})();
if(cljs.core.truth_(inst_47516)){
var statearr_47574_47656 = state_47567__$1;
(statearr_47574_47656[(1)] = (30));

} else {
var statearr_47575_47657 = state_47567__$1;
(statearr_47575_47657[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (1))){
var state_47567__$1 = state_47567;
var statearr_47576_47658 = state_47567__$1;
(statearr_47576_47658[(2)] = null);

(statearr_47576_47658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (24))){
var inst_47466 = (state_47567[(7)]);
var inst_47485 = (state_47567[(2)]);
var inst_47486 = cljs.core.next.call(null,inst_47466);
var inst_47444 = inst_47486;
var inst_47445 = null;
var inst_47446 = (0);
var inst_47447 = (0);
var state_47567__$1 = (function (){var statearr_47577 = state_47567;
(statearr_47577[(13)] = inst_47444);

(statearr_47577[(14)] = inst_47445);

(statearr_47577[(15)] = inst_47485);

(statearr_47577[(16)] = inst_47446);

(statearr_47577[(17)] = inst_47447);

return statearr_47577;
})();
var statearr_47578_47659 = state_47567__$1;
(statearr_47578_47659[(2)] = null);

(statearr_47578_47659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (39))){
var state_47567__$1 = state_47567;
var statearr_47582_47660 = state_47567__$1;
(statearr_47582_47660[(2)] = null);

(statearr_47582_47660[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (4))){
var inst_47435 = (state_47567[(12)]);
var inst_47435__$1 = (state_47567[(2)]);
var inst_47436 = (inst_47435__$1 == null);
var state_47567__$1 = (function (){var statearr_47583 = state_47567;
(statearr_47583[(12)] = inst_47435__$1);

return statearr_47583;
})();
if(cljs.core.truth_(inst_47436)){
var statearr_47584_47661 = state_47567__$1;
(statearr_47584_47661[(1)] = (5));

} else {
var statearr_47585_47662 = state_47567__$1;
(statearr_47585_47662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (15))){
var inst_47444 = (state_47567[(13)]);
var inst_47445 = (state_47567[(14)]);
var inst_47446 = (state_47567[(16)]);
var inst_47447 = (state_47567[(17)]);
var inst_47462 = (state_47567[(2)]);
var inst_47463 = (inst_47447 + (1));
var tmp47579 = inst_47444;
var tmp47580 = inst_47445;
var tmp47581 = inst_47446;
var inst_47444__$1 = tmp47579;
var inst_47445__$1 = tmp47580;
var inst_47446__$1 = tmp47581;
var inst_47447__$1 = inst_47463;
var state_47567__$1 = (function (){var statearr_47586 = state_47567;
(statearr_47586[(13)] = inst_47444__$1);

(statearr_47586[(14)] = inst_47445__$1);

(statearr_47586[(16)] = inst_47446__$1);

(statearr_47586[(18)] = inst_47462);

(statearr_47586[(17)] = inst_47447__$1);

return statearr_47586;
})();
var statearr_47587_47663 = state_47567__$1;
(statearr_47587_47663[(2)] = null);

(statearr_47587_47663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (21))){
var inst_47489 = (state_47567[(2)]);
var state_47567__$1 = state_47567;
var statearr_47591_47664 = state_47567__$1;
(statearr_47591_47664[(2)] = inst_47489);

(statearr_47591_47664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (31))){
var inst_47515 = (state_47567[(9)]);
var inst_47519 = done.call(null,null);
var inst_47520 = cljs.core.async.untap_STAR_.call(null,m,inst_47515);
var state_47567__$1 = (function (){var statearr_47592 = state_47567;
(statearr_47592[(19)] = inst_47519);

return statearr_47592;
})();
var statearr_47593_47665 = state_47567__$1;
(statearr_47593_47665[(2)] = inst_47520);

(statearr_47593_47665[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (32))){
var inst_47510 = (state_47567[(10)]);
var inst_47508 = (state_47567[(11)]);
var inst_47509 = (state_47567[(20)]);
var inst_47507 = (state_47567[(21)]);
var inst_47522 = (state_47567[(2)]);
var inst_47523 = (inst_47510 + (1));
var tmp47588 = inst_47508;
var tmp47589 = inst_47509;
var tmp47590 = inst_47507;
var inst_47507__$1 = tmp47590;
var inst_47508__$1 = tmp47588;
var inst_47509__$1 = tmp47589;
var inst_47510__$1 = inst_47523;
var state_47567__$1 = (function (){var statearr_47594 = state_47567;
(statearr_47594[(10)] = inst_47510__$1);

(statearr_47594[(11)] = inst_47508__$1);

(statearr_47594[(22)] = inst_47522);

(statearr_47594[(20)] = inst_47509__$1);

(statearr_47594[(21)] = inst_47507__$1);

return statearr_47594;
})();
var statearr_47595_47666 = state_47567__$1;
(statearr_47595_47666[(2)] = null);

(statearr_47595_47666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (40))){
var inst_47535 = (state_47567[(23)]);
var inst_47539 = done.call(null,null);
var inst_47540 = cljs.core.async.untap_STAR_.call(null,m,inst_47535);
var state_47567__$1 = (function (){var statearr_47596 = state_47567;
(statearr_47596[(24)] = inst_47539);

return statearr_47596;
})();
var statearr_47597_47667 = state_47567__$1;
(statearr_47597_47667[(2)] = inst_47540);

(statearr_47597_47667[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (33))){
var inst_47526 = (state_47567[(25)]);
var inst_47528 = cljs.core.chunked_seq_QMARK_.call(null,inst_47526);
var state_47567__$1 = state_47567;
if(inst_47528){
var statearr_47598_47668 = state_47567__$1;
(statearr_47598_47668[(1)] = (36));

} else {
var statearr_47599_47669 = state_47567__$1;
(statearr_47599_47669[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (13))){
var inst_47456 = (state_47567[(26)]);
var inst_47459 = cljs.core.async.close_BANG_.call(null,inst_47456);
var state_47567__$1 = state_47567;
var statearr_47600_47670 = state_47567__$1;
(statearr_47600_47670[(2)] = inst_47459);

(statearr_47600_47670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (22))){
var inst_47479 = (state_47567[(8)]);
var inst_47482 = cljs.core.async.close_BANG_.call(null,inst_47479);
var state_47567__$1 = state_47567;
var statearr_47601_47671 = state_47567__$1;
(statearr_47601_47671[(2)] = inst_47482);

(statearr_47601_47671[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (36))){
var inst_47526 = (state_47567[(25)]);
var inst_47530 = cljs.core.chunk_first.call(null,inst_47526);
var inst_47531 = cljs.core.chunk_rest.call(null,inst_47526);
var inst_47532 = cljs.core.count.call(null,inst_47530);
var inst_47507 = inst_47531;
var inst_47508 = inst_47530;
var inst_47509 = inst_47532;
var inst_47510 = (0);
var state_47567__$1 = (function (){var statearr_47602 = state_47567;
(statearr_47602[(10)] = inst_47510);

(statearr_47602[(11)] = inst_47508);

(statearr_47602[(20)] = inst_47509);

(statearr_47602[(21)] = inst_47507);

return statearr_47602;
})();
var statearr_47603_47672 = state_47567__$1;
(statearr_47603_47672[(2)] = null);

(statearr_47603_47672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (41))){
var inst_47526 = (state_47567[(25)]);
var inst_47542 = (state_47567[(2)]);
var inst_47543 = cljs.core.next.call(null,inst_47526);
var inst_47507 = inst_47543;
var inst_47508 = null;
var inst_47509 = (0);
var inst_47510 = (0);
var state_47567__$1 = (function (){var statearr_47604 = state_47567;
(statearr_47604[(27)] = inst_47542);

(statearr_47604[(10)] = inst_47510);

(statearr_47604[(11)] = inst_47508);

(statearr_47604[(20)] = inst_47509);

(statearr_47604[(21)] = inst_47507);

return statearr_47604;
})();
var statearr_47605_47673 = state_47567__$1;
(statearr_47605_47673[(2)] = null);

(statearr_47605_47673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (43))){
var state_47567__$1 = state_47567;
var statearr_47606_47674 = state_47567__$1;
(statearr_47606_47674[(2)] = null);

(statearr_47606_47674[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (29))){
var inst_47551 = (state_47567[(2)]);
var state_47567__$1 = state_47567;
var statearr_47607_47675 = state_47567__$1;
(statearr_47607_47675[(2)] = inst_47551);

(statearr_47607_47675[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (44))){
var inst_47560 = (state_47567[(2)]);
var state_47567__$1 = (function (){var statearr_47608 = state_47567;
(statearr_47608[(28)] = inst_47560);

return statearr_47608;
})();
var statearr_47609_47676 = state_47567__$1;
(statearr_47609_47676[(2)] = null);

(statearr_47609_47676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (6))){
var inst_47499 = (state_47567[(29)]);
var inst_47498 = cljs.core.deref.call(null,cs);
var inst_47499__$1 = cljs.core.keys.call(null,inst_47498);
var inst_47500 = cljs.core.count.call(null,inst_47499__$1);
var inst_47501 = cljs.core.reset_BANG_.call(null,dctr,inst_47500);
var inst_47506 = cljs.core.seq.call(null,inst_47499__$1);
var inst_47507 = inst_47506;
var inst_47508 = null;
var inst_47509 = (0);
var inst_47510 = (0);
var state_47567__$1 = (function (){var statearr_47610 = state_47567;
(statearr_47610[(10)] = inst_47510);

(statearr_47610[(11)] = inst_47508);

(statearr_47610[(20)] = inst_47509);

(statearr_47610[(21)] = inst_47507);

(statearr_47610[(29)] = inst_47499__$1);

(statearr_47610[(30)] = inst_47501);

return statearr_47610;
})();
var statearr_47611_47677 = state_47567__$1;
(statearr_47611_47677[(2)] = null);

(statearr_47611_47677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (28))){
var inst_47507 = (state_47567[(21)]);
var inst_47526 = (state_47567[(25)]);
var inst_47526__$1 = cljs.core.seq.call(null,inst_47507);
var state_47567__$1 = (function (){var statearr_47612 = state_47567;
(statearr_47612[(25)] = inst_47526__$1);

return statearr_47612;
})();
if(inst_47526__$1){
var statearr_47613_47678 = state_47567__$1;
(statearr_47613_47678[(1)] = (33));

} else {
var statearr_47614_47679 = state_47567__$1;
(statearr_47614_47679[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (25))){
var inst_47510 = (state_47567[(10)]);
var inst_47509 = (state_47567[(20)]);
var inst_47512 = (inst_47510 < inst_47509);
var inst_47513 = inst_47512;
var state_47567__$1 = state_47567;
if(cljs.core.truth_(inst_47513)){
var statearr_47615_47680 = state_47567__$1;
(statearr_47615_47680[(1)] = (27));

} else {
var statearr_47616_47681 = state_47567__$1;
(statearr_47616_47681[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (34))){
var state_47567__$1 = state_47567;
var statearr_47617_47682 = state_47567__$1;
(statearr_47617_47682[(2)] = null);

(statearr_47617_47682[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (17))){
var state_47567__$1 = state_47567;
var statearr_47618_47683 = state_47567__$1;
(statearr_47618_47683[(2)] = null);

(statearr_47618_47683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (3))){
var inst_47565 = (state_47567[(2)]);
var state_47567__$1 = state_47567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47567__$1,inst_47565);
} else {
if((state_val_47568 === (12))){
var inst_47494 = (state_47567[(2)]);
var state_47567__$1 = state_47567;
var statearr_47619_47684 = state_47567__$1;
(statearr_47619_47684[(2)] = inst_47494);

(statearr_47619_47684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (2))){
var state_47567__$1 = state_47567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47567__$1,(4),ch);
} else {
if((state_val_47568 === (23))){
var state_47567__$1 = state_47567;
var statearr_47620_47685 = state_47567__$1;
(statearr_47620_47685[(2)] = null);

(statearr_47620_47685[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (35))){
var inst_47549 = (state_47567[(2)]);
var state_47567__$1 = state_47567;
var statearr_47621_47686 = state_47567__$1;
(statearr_47621_47686[(2)] = inst_47549);

(statearr_47621_47686[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (19))){
var inst_47466 = (state_47567[(7)]);
var inst_47470 = cljs.core.chunk_first.call(null,inst_47466);
var inst_47471 = cljs.core.chunk_rest.call(null,inst_47466);
var inst_47472 = cljs.core.count.call(null,inst_47470);
var inst_47444 = inst_47471;
var inst_47445 = inst_47470;
var inst_47446 = inst_47472;
var inst_47447 = (0);
var state_47567__$1 = (function (){var statearr_47622 = state_47567;
(statearr_47622[(13)] = inst_47444);

(statearr_47622[(14)] = inst_47445);

(statearr_47622[(16)] = inst_47446);

(statearr_47622[(17)] = inst_47447);

return statearr_47622;
})();
var statearr_47623_47687 = state_47567__$1;
(statearr_47623_47687[(2)] = null);

(statearr_47623_47687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (11))){
var inst_47444 = (state_47567[(13)]);
var inst_47466 = (state_47567[(7)]);
var inst_47466__$1 = cljs.core.seq.call(null,inst_47444);
var state_47567__$1 = (function (){var statearr_47624 = state_47567;
(statearr_47624[(7)] = inst_47466__$1);

return statearr_47624;
})();
if(inst_47466__$1){
var statearr_47625_47688 = state_47567__$1;
(statearr_47625_47688[(1)] = (16));

} else {
var statearr_47626_47689 = state_47567__$1;
(statearr_47626_47689[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (9))){
var inst_47496 = (state_47567[(2)]);
var state_47567__$1 = state_47567;
var statearr_47627_47690 = state_47567__$1;
(statearr_47627_47690[(2)] = inst_47496);

(statearr_47627_47690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (5))){
var inst_47442 = cljs.core.deref.call(null,cs);
var inst_47443 = cljs.core.seq.call(null,inst_47442);
var inst_47444 = inst_47443;
var inst_47445 = null;
var inst_47446 = (0);
var inst_47447 = (0);
var state_47567__$1 = (function (){var statearr_47628 = state_47567;
(statearr_47628[(13)] = inst_47444);

(statearr_47628[(14)] = inst_47445);

(statearr_47628[(16)] = inst_47446);

(statearr_47628[(17)] = inst_47447);

return statearr_47628;
})();
var statearr_47629_47691 = state_47567__$1;
(statearr_47629_47691[(2)] = null);

(statearr_47629_47691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (14))){
var state_47567__$1 = state_47567;
var statearr_47630_47692 = state_47567__$1;
(statearr_47630_47692[(2)] = null);

(statearr_47630_47692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (45))){
var inst_47557 = (state_47567[(2)]);
var state_47567__$1 = state_47567;
var statearr_47631_47693 = state_47567__$1;
(statearr_47631_47693[(2)] = inst_47557);

(statearr_47631_47693[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (26))){
var inst_47499 = (state_47567[(29)]);
var inst_47553 = (state_47567[(2)]);
var inst_47554 = cljs.core.seq.call(null,inst_47499);
var state_47567__$1 = (function (){var statearr_47632 = state_47567;
(statearr_47632[(31)] = inst_47553);

return statearr_47632;
})();
if(inst_47554){
var statearr_47633_47694 = state_47567__$1;
(statearr_47633_47694[(1)] = (42));

} else {
var statearr_47634_47695 = state_47567__$1;
(statearr_47634_47695[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (16))){
var inst_47466 = (state_47567[(7)]);
var inst_47468 = cljs.core.chunked_seq_QMARK_.call(null,inst_47466);
var state_47567__$1 = state_47567;
if(inst_47468){
var statearr_47635_47696 = state_47567__$1;
(statearr_47635_47696[(1)] = (19));

} else {
var statearr_47636_47697 = state_47567__$1;
(statearr_47636_47697[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (38))){
var inst_47546 = (state_47567[(2)]);
var state_47567__$1 = state_47567;
var statearr_47637_47698 = state_47567__$1;
(statearr_47637_47698[(2)] = inst_47546);

(statearr_47637_47698[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (30))){
var state_47567__$1 = state_47567;
var statearr_47638_47699 = state_47567__$1;
(statearr_47638_47699[(2)] = null);

(statearr_47638_47699[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (10))){
var inst_47445 = (state_47567[(14)]);
var inst_47447 = (state_47567[(17)]);
var inst_47455 = cljs.core._nth.call(null,inst_47445,inst_47447);
var inst_47456 = cljs.core.nth.call(null,inst_47455,(0),null);
var inst_47457 = cljs.core.nth.call(null,inst_47455,(1),null);
var state_47567__$1 = (function (){var statearr_47639 = state_47567;
(statearr_47639[(26)] = inst_47456);

return statearr_47639;
})();
if(cljs.core.truth_(inst_47457)){
var statearr_47640_47700 = state_47567__$1;
(statearr_47640_47700[(1)] = (13));

} else {
var statearr_47641_47701 = state_47567__$1;
(statearr_47641_47701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (18))){
var inst_47492 = (state_47567[(2)]);
var state_47567__$1 = state_47567;
var statearr_47642_47702 = state_47567__$1;
(statearr_47642_47702[(2)] = inst_47492);

(statearr_47642_47702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (42))){
var state_47567__$1 = state_47567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47567__$1,(45),dchan);
} else {
if((state_val_47568 === (37))){
var inst_47535 = (state_47567[(23)]);
var inst_47435 = (state_47567[(12)]);
var inst_47526 = (state_47567[(25)]);
var inst_47535__$1 = cljs.core.first.call(null,inst_47526);
var inst_47536 = cljs.core.async.put_BANG_.call(null,inst_47535__$1,inst_47435,done);
var state_47567__$1 = (function (){var statearr_47643 = state_47567;
(statearr_47643[(23)] = inst_47535__$1);

return statearr_47643;
})();
if(cljs.core.truth_(inst_47536)){
var statearr_47644_47703 = state_47567__$1;
(statearr_47644_47703[(1)] = (39));

} else {
var statearr_47645_47704 = state_47567__$1;
(statearr_47645_47704[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (8))){
var inst_47446 = (state_47567[(16)]);
var inst_47447 = (state_47567[(17)]);
var inst_47449 = (inst_47447 < inst_47446);
var inst_47450 = inst_47449;
var state_47567__$1 = state_47567;
if(cljs.core.truth_(inst_47450)){
var statearr_47646_47705 = state_47567__$1;
(statearr_47646_47705[(1)] = (10));

} else {
var statearr_47647_47706 = state_47567__$1;
(statearr_47647_47706[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto___47652,cs,m,dchan,dctr,done))
;
return ((function (switch__46743__auto__,c__46833__auto___47652,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46744__auto__ = null;
var cljs$core$async$mult_$_state_machine__46744__auto____0 = (function (){
var statearr_47648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47648[(0)] = cljs$core$async$mult_$_state_machine__46744__auto__);

(statearr_47648[(1)] = (1));

return statearr_47648;
});
var cljs$core$async$mult_$_state_machine__46744__auto____1 = (function (state_47567){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_47567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e47649){if((e47649 instanceof Object)){
var ex__46747__auto__ = e47649;
var statearr_47650_47707 = state_47567;
(statearr_47650_47707[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47708 = state_47567;
state_47567 = G__47708;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46744__auto__ = function(state_47567){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46744__auto____1.call(this,state_47567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46744__auto____0;
cljs$core$async$mult_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46744__auto____1;
return cljs$core$async$mult_$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___47652,cs,m,dchan,dctr,done))
})();
var state__46835__auto__ = (function (){var statearr_47651 = f__46834__auto__.call(null);
(statearr_47651[(6)] = c__46833__auto___47652);

return statearr_47651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___47652,cs,m,dchan,dctr,done))
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
var G__47710 = arguments.length;
switch (G__47710) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30982__auto__ = (((m == null))?null:m);
var m__30983__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,m,ch);
} else {
var m__30983__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30982__auto__ = (((m == null))?null:m);
var m__30983__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,m,ch);
} else {
var m__30983__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30982__auto__ = (((m == null))?null:m);
var m__30983__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,m);
} else {
var m__30983__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30982__auto__ = (((m == null))?null:m);
var m__30983__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,m,state_map);
} else {
var m__30983__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30982__auto__ = (((m == null))?null:m);
var m__30983__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,m,mode);
} else {
var m__30983__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31533__auto__ = [];
var len__31526__auto___47722 = arguments.length;
var i__31527__auto___47723 = (0);
while(true){
if((i__31527__auto___47723 < len__31526__auto___47722)){
args__31533__auto__.push((arguments[i__31527__auto___47723]));

var G__47724 = (i__31527__auto___47723 + (1));
i__31527__auto___47723 = G__47724;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((3) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31534__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47716){
var map__47717 = p__47716;
var map__47717__$1 = ((((!((map__47717 == null)))?((((map__47717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47717):map__47717);
var opts = map__47717__$1;
var statearr_47719_47725 = state;
(statearr_47719_47725[(1)] = cont_block);


var temp__5290__auto__ = cljs.core.async.do_alts.call(null,((function (map__47717,map__47717__$1,opts){
return (function (val){
var statearr_47720_47726 = state;
(statearr_47720_47726[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47717,map__47717__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5290__auto__)){
var cb = temp__5290__auto__;
var statearr_47721_47727 = state;
(statearr_47721_47727[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47712){
var G__47713 = cljs.core.first.call(null,seq47712);
var seq47712__$1 = cljs.core.next.call(null,seq47712);
var G__47714 = cljs.core.first.call(null,seq47712__$1);
var seq47712__$2 = cljs.core.next.call(null,seq47712__$1);
var G__47715 = cljs.core.first.call(null,seq47712__$2);
var seq47712__$3 = cljs.core.next.call(null,seq47712__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47713,G__47714,G__47715,seq47712__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47728 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta47729){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta47729 = meta47729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47730,meta47729__$1){
var self__ = this;
var _47730__$1 = this;
return (new cljs.core.async.t_cljs$core$async47728(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta47729__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47730){
var self__ = this;
var _47730__$1 = this;
return self__.meta47729;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47728.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47728.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47728.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47728.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47728.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47728.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47728.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47728.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta47729","meta47729",1199327371,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47728";

cljs.core.async.t_cljs$core$async47728.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async47728");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47728 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47728(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47729){
return (new cljs.core.async.t_cljs$core$async47728(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47729));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47728(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46833__auto___47892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___47892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___47892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47832){
var state_val_47833 = (state_47832[(1)]);
if((state_val_47833 === (7))){
var inst_47747 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47834_47893 = state_47832__$1;
(statearr_47834_47893[(2)] = inst_47747);

(statearr_47834_47893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (20))){
var inst_47759 = (state_47832[(7)]);
var state_47832__$1 = state_47832;
var statearr_47835_47894 = state_47832__$1;
(statearr_47835_47894[(2)] = inst_47759);

(statearr_47835_47894[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (27))){
var state_47832__$1 = state_47832;
var statearr_47836_47895 = state_47832__$1;
(statearr_47836_47895[(2)] = null);

(statearr_47836_47895[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (1))){
var inst_47734 = (state_47832[(8)]);
var inst_47734__$1 = calc_state.call(null);
var inst_47736 = (inst_47734__$1 == null);
var inst_47737 = cljs.core.not.call(null,inst_47736);
var state_47832__$1 = (function (){var statearr_47837 = state_47832;
(statearr_47837[(8)] = inst_47734__$1);

return statearr_47837;
})();
if(inst_47737){
var statearr_47838_47896 = state_47832__$1;
(statearr_47838_47896[(1)] = (2));

} else {
var statearr_47839_47897 = state_47832__$1;
(statearr_47839_47897[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (24))){
var inst_47806 = (state_47832[(9)]);
var inst_47792 = (state_47832[(10)]);
var inst_47783 = (state_47832[(11)]);
var inst_47806__$1 = inst_47783.call(null,inst_47792);
var state_47832__$1 = (function (){var statearr_47840 = state_47832;
(statearr_47840[(9)] = inst_47806__$1);

return statearr_47840;
})();
if(cljs.core.truth_(inst_47806__$1)){
var statearr_47841_47898 = state_47832__$1;
(statearr_47841_47898[(1)] = (29));

} else {
var statearr_47842_47899 = state_47832__$1;
(statearr_47842_47899[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (4))){
var inst_47750 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
if(cljs.core.truth_(inst_47750)){
var statearr_47843_47900 = state_47832__$1;
(statearr_47843_47900[(1)] = (8));

} else {
var statearr_47844_47901 = state_47832__$1;
(statearr_47844_47901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (15))){
var inst_47777 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
if(cljs.core.truth_(inst_47777)){
var statearr_47845_47902 = state_47832__$1;
(statearr_47845_47902[(1)] = (19));

} else {
var statearr_47846_47903 = state_47832__$1;
(statearr_47846_47903[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (21))){
var inst_47782 = (state_47832[(12)]);
var inst_47782__$1 = (state_47832[(2)]);
var inst_47783 = cljs.core.get.call(null,inst_47782__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47784 = cljs.core.get.call(null,inst_47782__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47785 = cljs.core.get.call(null,inst_47782__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47832__$1 = (function (){var statearr_47847 = state_47832;
(statearr_47847[(11)] = inst_47783);

(statearr_47847[(12)] = inst_47782__$1);

(statearr_47847[(13)] = inst_47784);

return statearr_47847;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47832__$1,(22),inst_47785);
} else {
if((state_val_47833 === (31))){
var inst_47814 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
if(cljs.core.truth_(inst_47814)){
var statearr_47848_47904 = state_47832__$1;
(statearr_47848_47904[(1)] = (32));

} else {
var statearr_47849_47905 = state_47832__$1;
(statearr_47849_47905[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (32))){
var inst_47791 = (state_47832[(14)]);
var state_47832__$1 = state_47832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47832__$1,(35),out,inst_47791);
} else {
if((state_val_47833 === (33))){
var inst_47782 = (state_47832[(12)]);
var inst_47759 = inst_47782;
var state_47832__$1 = (function (){var statearr_47850 = state_47832;
(statearr_47850[(7)] = inst_47759);

return statearr_47850;
})();
var statearr_47851_47906 = state_47832__$1;
(statearr_47851_47906[(2)] = null);

(statearr_47851_47906[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (13))){
var inst_47759 = (state_47832[(7)]);
var inst_47766 = inst_47759.cljs$lang$protocol_mask$partition0$;
var inst_47767 = (inst_47766 & (64));
var inst_47768 = inst_47759.cljs$core$ISeq$;
var inst_47769 = (cljs.core.PROTOCOL_SENTINEL === inst_47768);
var inst_47770 = (inst_47767) || (inst_47769);
var state_47832__$1 = state_47832;
if(cljs.core.truth_(inst_47770)){
var statearr_47852_47907 = state_47832__$1;
(statearr_47852_47907[(1)] = (16));

} else {
var statearr_47853_47908 = state_47832__$1;
(statearr_47853_47908[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (22))){
var inst_47791 = (state_47832[(14)]);
var inst_47792 = (state_47832[(10)]);
var inst_47790 = (state_47832[(2)]);
var inst_47791__$1 = cljs.core.nth.call(null,inst_47790,(0),null);
var inst_47792__$1 = cljs.core.nth.call(null,inst_47790,(1),null);
var inst_47793 = (inst_47791__$1 == null);
var inst_47794 = cljs.core._EQ_.call(null,inst_47792__$1,change);
var inst_47795 = (inst_47793) || (inst_47794);
var state_47832__$1 = (function (){var statearr_47854 = state_47832;
(statearr_47854[(14)] = inst_47791__$1);

(statearr_47854[(10)] = inst_47792__$1);

return statearr_47854;
})();
if(cljs.core.truth_(inst_47795)){
var statearr_47855_47909 = state_47832__$1;
(statearr_47855_47909[(1)] = (23));

} else {
var statearr_47856_47910 = state_47832__$1;
(statearr_47856_47910[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (36))){
var inst_47782 = (state_47832[(12)]);
var inst_47759 = inst_47782;
var state_47832__$1 = (function (){var statearr_47857 = state_47832;
(statearr_47857[(7)] = inst_47759);

return statearr_47857;
})();
var statearr_47858_47911 = state_47832__$1;
(statearr_47858_47911[(2)] = null);

(statearr_47858_47911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (29))){
var inst_47806 = (state_47832[(9)]);
var state_47832__$1 = state_47832;
var statearr_47859_47912 = state_47832__$1;
(statearr_47859_47912[(2)] = inst_47806);

(statearr_47859_47912[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (6))){
var state_47832__$1 = state_47832;
var statearr_47860_47913 = state_47832__$1;
(statearr_47860_47913[(2)] = false);

(statearr_47860_47913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (28))){
var inst_47802 = (state_47832[(2)]);
var inst_47803 = calc_state.call(null);
var inst_47759 = inst_47803;
var state_47832__$1 = (function (){var statearr_47861 = state_47832;
(statearr_47861[(7)] = inst_47759);

(statearr_47861[(15)] = inst_47802);

return statearr_47861;
})();
var statearr_47862_47914 = state_47832__$1;
(statearr_47862_47914[(2)] = null);

(statearr_47862_47914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (25))){
var inst_47828 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47863_47915 = state_47832__$1;
(statearr_47863_47915[(2)] = inst_47828);

(statearr_47863_47915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (34))){
var inst_47826 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47864_47916 = state_47832__$1;
(statearr_47864_47916[(2)] = inst_47826);

(statearr_47864_47916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (17))){
var state_47832__$1 = state_47832;
var statearr_47865_47917 = state_47832__$1;
(statearr_47865_47917[(2)] = false);

(statearr_47865_47917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (3))){
var state_47832__$1 = state_47832;
var statearr_47866_47918 = state_47832__$1;
(statearr_47866_47918[(2)] = false);

(statearr_47866_47918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (12))){
var inst_47830 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47832__$1,inst_47830);
} else {
if((state_val_47833 === (2))){
var inst_47734 = (state_47832[(8)]);
var inst_47739 = inst_47734.cljs$lang$protocol_mask$partition0$;
var inst_47740 = (inst_47739 & (64));
var inst_47741 = inst_47734.cljs$core$ISeq$;
var inst_47742 = (cljs.core.PROTOCOL_SENTINEL === inst_47741);
var inst_47743 = (inst_47740) || (inst_47742);
var state_47832__$1 = state_47832;
if(cljs.core.truth_(inst_47743)){
var statearr_47867_47919 = state_47832__$1;
(statearr_47867_47919[(1)] = (5));

} else {
var statearr_47868_47920 = state_47832__$1;
(statearr_47868_47920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (23))){
var inst_47791 = (state_47832[(14)]);
var inst_47797 = (inst_47791 == null);
var state_47832__$1 = state_47832;
if(cljs.core.truth_(inst_47797)){
var statearr_47869_47921 = state_47832__$1;
(statearr_47869_47921[(1)] = (26));

} else {
var statearr_47870_47922 = state_47832__$1;
(statearr_47870_47922[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (35))){
var inst_47817 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
if(cljs.core.truth_(inst_47817)){
var statearr_47871_47923 = state_47832__$1;
(statearr_47871_47923[(1)] = (36));

} else {
var statearr_47872_47924 = state_47832__$1;
(statearr_47872_47924[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (19))){
var inst_47759 = (state_47832[(7)]);
var inst_47779 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47759);
var state_47832__$1 = state_47832;
var statearr_47873_47925 = state_47832__$1;
(statearr_47873_47925[(2)] = inst_47779);

(statearr_47873_47925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (11))){
var inst_47759 = (state_47832[(7)]);
var inst_47763 = (inst_47759 == null);
var inst_47764 = cljs.core.not.call(null,inst_47763);
var state_47832__$1 = state_47832;
if(inst_47764){
var statearr_47874_47926 = state_47832__$1;
(statearr_47874_47926[(1)] = (13));

} else {
var statearr_47875_47927 = state_47832__$1;
(statearr_47875_47927[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (9))){
var inst_47734 = (state_47832[(8)]);
var state_47832__$1 = state_47832;
var statearr_47876_47928 = state_47832__$1;
(statearr_47876_47928[(2)] = inst_47734);

(statearr_47876_47928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (5))){
var state_47832__$1 = state_47832;
var statearr_47877_47929 = state_47832__$1;
(statearr_47877_47929[(2)] = true);

(statearr_47877_47929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (14))){
var state_47832__$1 = state_47832;
var statearr_47878_47930 = state_47832__$1;
(statearr_47878_47930[(2)] = false);

(statearr_47878_47930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (26))){
var inst_47792 = (state_47832[(10)]);
var inst_47799 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47792);
var state_47832__$1 = state_47832;
var statearr_47879_47931 = state_47832__$1;
(statearr_47879_47931[(2)] = inst_47799);

(statearr_47879_47931[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (16))){
var state_47832__$1 = state_47832;
var statearr_47880_47932 = state_47832__$1;
(statearr_47880_47932[(2)] = true);

(statearr_47880_47932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (38))){
var inst_47822 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47881_47933 = state_47832__$1;
(statearr_47881_47933[(2)] = inst_47822);

(statearr_47881_47933[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (30))){
var inst_47792 = (state_47832[(10)]);
var inst_47783 = (state_47832[(11)]);
var inst_47784 = (state_47832[(13)]);
var inst_47809 = cljs.core.empty_QMARK_.call(null,inst_47783);
var inst_47810 = inst_47784.call(null,inst_47792);
var inst_47811 = cljs.core.not.call(null,inst_47810);
var inst_47812 = (inst_47809) && (inst_47811);
var state_47832__$1 = state_47832;
var statearr_47882_47934 = state_47832__$1;
(statearr_47882_47934[(2)] = inst_47812);

(statearr_47882_47934[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (10))){
var inst_47734 = (state_47832[(8)]);
var inst_47755 = (state_47832[(2)]);
var inst_47756 = cljs.core.get.call(null,inst_47755,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47757 = cljs.core.get.call(null,inst_47755,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47758 = cljs.core.get.call(null,inst_47755,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47759 = inst_47734;
var state_47832__$1 = (function (){var statearr_47883 = state_47832;
(statearr_47883[(16)] = inst_47758);

(statearr_47883[(7)] = inst_47759);

(statearr_47883[(17)] = inst_47756);

(statearr_47883[(18)] = inst_47757);

return statearr_47883;
})();
var statearr_47884_47935 = state_47832__$1;
(statearr_47884_47935[(2)] = null);

(statearr_47884_47935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (18))){
var inst_47774 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47885_47936 = state_47832__$1;
(statearr_47885_47936[(2)] = inst_47774);

(statearr_47885_47936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (37))){
var state_47832__$1 = state_47832;
var statearr_47886_47937 = state_47832__$1;
(statearr_47886_47937[(2)] = null);

(statearr_47886_47937[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (8))){
var inst_47734 = (state_47832[(8)]);
var inst_47752 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47734);
var state_47832__$1 = state_47832;
var statearr_47887_47938 = state_47832__$1;
(statearr_47887_47938[(2)] = inst_47752);

(statearr_47887_47938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto___47892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46743__auto__,c__46833__auto___47892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46744__auto__ = null;
var cljs$core$async$mix_$_state_machine__46744__auto____0 = (function (){
var statearr_47888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47888[(0)] = cljs$core$async$mix_$_state_machine__46744__auto__);

(statearr_47888[(1)] = (1));

return statearr_47888;
});
var cljs$core$async$mix_$_state_machine__46744__auto____1 = (function (state_47832){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_47832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e47889){if((e47889 instanceof Object)){
var ex__46747__auto__ = e47889;
var statearr_47890_47939 = state_47832;
(statearr_47890_47939[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47940 = state_47832;
state_47832 = G__47940;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46744__auto__ = function(state_47832){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46744__auto____1.call(this,state_47832);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46744__auto____0;
cljs$core$async$mix_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46744__auto____1;
return cljs$core$async$mix_$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___47892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46835__auto__ = (function (){var statearr_47891 = f__46834__auto__.call(null);
(statearr_47891[(6)] = c__46833__auto___47892);

return statearr_47891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___47892,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30982__auto__ = (((p == null))?null:p);
var m__30983__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30983__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30982__auto__ = (((p == null))?null:p);
var m__30983__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,p,v,ch);
} else {
var m__30983__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47942 = arguments.length;
switch (G__47942) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30982__auto__ = (((p == null))?null:p);
var m__30983__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,p);
} else {
var m__30983__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30982__auto__ = (((p == null))?null:p);
var m__30983__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,p,v);
} else {
var m__30983__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__47946 = arguments.length;
switch (G__47946) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30249__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30249__auto__,mults){
return (function (p1__47944_SHARP_){
if(cljs.core.truth_(p1__47944_SHARP_.call(null,topic))){
return p1__47944_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__47944_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30249__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async47947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47947 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47948){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47948 = meta47948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47949,meta47948__$1){
var self__ = this;
var _47949__$1 = this;
return (new cljs.core.async.t_cljs$core$async47947(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47948__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47949){
var self__ = this;
var _47949__$1 = this;
return self__.meta47948;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47947.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47947.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47947.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47947.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47947.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5290__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5290__auto__)){
var m = temp__5290__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47947.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47947.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47947.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47948","meta47948",709472443,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47947";

cljs.core.async.t_cljs$core$async47947.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async47947");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async47947 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47947(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47948){
return (new cljs.core.async.t_cljs$core$async47947(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47948));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47947(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46833__auto___48067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___48067,mults,ensure_mult,p){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___48067,mults,ensure_mult,p){
return (function (state_48021){
var state_val_48022 = (state_48021[(1)]);
if((state_val_48022 === (7))){
var inst_48017 = (state_48021[(2)]);
var state_48021__$1 = state_48021;
var statearr_48023_48068 = state_48021__$1;
(statearr_48023_48068[(2)] = inst_48017);

(statearr_48023_48068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (20))){
var state_48021__$1 = state_48021;
var statearr_48024_48069 = state_48021__$1;
(statearr_48024_48069[(2)] = null);

(statearr_48024_48069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (1))){
var state_48021__$1 = state_48021;
var statearr_48025_48070 = state_48021__$1;
(statearr_48025_48070[(2)] = null);

(statearr_48025_48070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (24))){
var inst_48000 = (state_48021[(7)]);
var inst_48009 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48000);
var state_48021__$1 = state_48021;
var statearr_48026_48071 = state_48021__$1;
(statearr_48026_48071[(2)] = inst_48009);

(statearr_48026_48071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (4))){
var inst_47952 = (state_48021[(8)]);
var inst_47952__$1 = (state_48021[(2)]);
var inst_47953 = (inst_47952__$1 == null);
var state_48021__$1 = (function (){var statearr_48027 = state_48021;
(statearr_48027[(8)] = inst_47952__$1);

return statearr_48027;
})();
if(cljs.core.truth_(inst_47953)){
var statearr_48028_48072 = state_48021__$1;
(statearr_48028_48072[(1)] = (5));

} else {
var statearr_48029_48073 = state_48021__$1;
(statearr_48029_48073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (15))){
var inst_47994 = (state_48021[(2)]);
var state_48021__$1 = state_48021;
var statearr_48030_48074 = state_48021__$1;
(statearr_48030_48074[(2)] = inst_47994);

(statearr_48030_48074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (21))){
var inst_48014 = (state_48021[(2)]);
var state_48021__$1 = (function (){var statearr_48031 = state_48021;
(statearr_48031[(9)] = inst_48014);

return statearr_48031;
})();
var statearr_48032_48075 = state_48021__$1;
(statearr_48032_48075[(2)] = null);

(statearr_48032_48075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (13))){
var inst_47976 = (state_48021[(10)]);
var inst_47978 = cljs.core.chunked_seq_QMARK_.call(null,inst_47976);
var state_48021__$1 = state_48021;
if(inst_47978){
var statearr_48033_48076 = state_48021__$1;
(statearr_48033_48076[(1)] = (16));

} else {
var statearr_48034_48077 = state_48021__$1;
(statearr_48034_48077[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (22))){
var inst_48006 = (state_48021[(2)]);
var state_48021__$1 = state_48021;
if(cljs.core.truth_(inst_48006)){
var statearr_48035_48078 = state_48021__$1;
(statearr_48035_48078[(1)] = (23));

} else {
var statearr_48036_48079 = state_48021__$1;
(statearr_48036_48079[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (6))){
var inst_47952 = (state_48021[(8)]);
var inst_48000 = (state_48021[(7)]);
var inst_48002 = (state_48021[(11)]);
var inst_48000__$1 = topic_fn.call(null,inst_47952);
var inst_48001 = cljs.core.deref.call(null,mults);
var inst_48002__$1 = cljs.core.get.call(null,inst_48001,inst_48000__$1);
var state_48021__$1 = (function (){var statearr_48037 = state_48021;
(statearr_48037[(7)] = inst_48000__$1);

(statearr_48037[(11)] = inst_48002__$1);

return statearr_48037;
})();
if(cljs.core.truth_(inst_48002__$1)){
var statearr_48038_48080 = state_48021__$1;
(statearr_48038_48080[(1)] = (19));

} else {
var statearr_48039_48081 = state_48021__$1;
(statearr_48039_48081[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (25))){
var inst_48011 = (state_48021[(2)]);
var state_48021__$1 = state_48021;
var statearr_48040_48082 = state_48021__$1;
(statearr_48040_48082[(2)] = inst_48011);

(statearr_48040_48082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (17))){
var inst_47976 = (state_48021[(10)]);
var inst_47985 = cljs.core.first.call(null,inst_47976);
var inst_47986 = cljs.core.async.muxch_STAR_.call(null,inst_47985);
var inst_47987 = cljs.core.async.close_BANG_.call(null,inst_47986);
var inst_47988 = cljs.core.next.call(null,inst_47976);
var inst_47962 = inst_47988;
var inst_47963 = null;
var inst_47964 = (0);
var inst_47965 = (0);
var state_48021__$1 = (function (){var statearr_48041 = state_48021;
(statearr_48041[(12)] = inst_47964);

(statearr_48041[(13)] = inst_47965);

(statearr_48041[(14)] = inst_47987);

(statearr_48041[(15)] = inst_47963);

(statearr_48041[(16)] = inst_47962);

return statearr_48041;
})();
var statearr_48042_48083 = state_48021__$1;
(statearr_48042_48083[(2)] = null);

(statearr_48042_48083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (3))){
var inst_48019 = (state_48021[(2)]);
var state_48021__$1 = state_48021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48021__$1,inst_48019);
} else {
if((state_val_48022 === (12))){
var inst_47996 = (state_48021[(2)]);
var state_48021__$1 = state_48021;
var statearr_48043_48084 = state_48021__$1;
(statearr_48043_48084[(2)] = inst_47996);

(statearr_48043_48084[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (2))){
var state_48021__$1 = state_48021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48021__$1,(4),ch);
} else {
if((state_val_48022 === (23))){
var state_48021__$1 = state_48021;
var statearr_48044_48085 = state_48021__$1;
(statearr_48044_48085[(2)] = null);

(statearr_48044_48085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (19))){
var inst_47952 = (state_48021[(8)]);
var inst_48002 = (state_48021[(11)]);
var inst_48004 = cljs.core.async.muxch_STAR_.call(null,inst_48002);
var state_48021__$1 = state_48021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48021__$1,(22),inst_48004,inst_47952);
} else {
if((state_val_48022 === (11))){
var inst_47976 = (state_48021[(10)]);
var inst_47962 = (state_48021[(16)]);
var inst_47976__$1 = cljs.core.seq.call(null,inst_47962);
var state_48021__$1 = (function (){var statearr_48045 = state_48021;
(statearr_48045[(10)] = inst_47976__$1);

return statearr_48045;
})();
if(inst_47976__$1){
var statearr_48046_48086 = state_48021__$1;
(statearr_48046_48086[(1)] = (13));

} else {
var statearr_48047_48087 = state_48021__$1;
(statearr_48047_48087[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (9))){
var inst_47998 = (state_48021[(2)]);
var state_48021__$1 = state_48021;
var statearr_48048_48088 = state_48021__$1;
(statearr_48048_48088[(2)] = inst_47998);

(statearr_48048_48088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (5))){
var inst_47959 = cljs.core.deref.call(null,mults);
var inst_47960 = cljs.core.vals.call(null,inst_47959);
var inst_47961 = cljs.core.seq.call(null,inst_47960);
var inst_47962 = inst_47961;
var inst_47963 = null;
var inst_47964 = (0);
var inst_47965 = (0);
var state_48021__$1 = (function (){var statearr_48049 = state_48021;
(statearr_48049[(12)] = inst_47964);

(statearr_48049[(13)] = inst_47965);

(statearr_48049[(15)] = inst_47963);

(statearr_48049[(16)] = inst_47962);

return statearr_48049;
})();
var statearr_48050_48089 = state_48021__$1;
(statearr_48050_48089[(2)] = null);

(statearr_48050_48089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (14))){
var state_48021__$1 = state_48021;
var statearr_48054_48090 = state_48021__$1;
(statearr_48054_48090[(2)] = null);

(statearr_48054_48090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (16))){
var inst_47976 = (state_48021[(10)]);
var inst_47980 = cljs.core.chunk_first.call(null,inst_47976);
var inst_47981 = cljs.core.chunk_rest.call(null,inst_47976);
var inst_47982 = cljs.core.count.call(null,inst_47980);
var inst_47962 = inst_47981;
var inst_47963 = inst_47980;
var inst_47964 = inst_47982;
var inst_47965 = (0);
var state_48021__$1 = (function (){var statearr_48055 = state_48021;
(statearr_48055[(12)] = inst_47964);

(statearr_48055[(13)] = inst_47965);

(statearr_48055[(15)] = inst_47963);

(statearr_48055[(16)] = inst_47962);

return statearr_48055;
})();
var statearr_48056_48091 = state_48021__$1;
(statearr_48056_48091[(2)] = null);

(statearr_48056_48091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (10))){
var inst_47964 = (state_48021[(12)]);
var inst_47965 = (state_48021[(13)]);
var inst_47963 = (state_48021[(15)]);
var inst_47962 = (state_48021[(16)]);
var inst_47970 = cljs.core._nth.call(null,inst_47963,inst_47965);
var inst_47971 = cljs.core.async.muxch_STAR_.call(null,inst_47970);
var inst_47972 = cljs.core.async.close_BANG_.call(null,inst_47971);
var inst_47973 = (inst_47965 + (1));
var tmp48051 = inst_47964;
var tmp48052 = inst_47963;
var tmp48053 = inst_47962;
var inst_47962__$1 = tmp48053;
var inst_47963__$1 = tmp48052;
var inst_47964__$1 = tmp48051;
var inst_47965__$1 = inst_47973;
var state_48021__$1 = (function (){var statearr_48057 = state_48021;
(statearr_48057[(12)] = inst_47964__$1);

(statearr_48057[(17)] = inst_47972);

(statearr_48057[(13)] = inst_47965__$1);

(statearr_48057[(15)] = inst_47963__$1);

(statearr_48057[(16)] = inst_47962__$1);

return statearr_48057;
})();
var statearr_48058_48092 = state_48021__$1;
(statearr_48058_48092[(2)] = null);

(statearr_48058_48092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (18))){
var inst_47991 = (state_48021[(2)]);
var state_48021__$1 = state_48021;
var statearr_48059_48093 = state_48021__$1;
(statearr_48059_48093[(2)] = inst_47991);

(statearr_48059_48093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48022 === (8))){
var inst_47964 = (state_48021[(12)]);
var inst_47965 = (state_48021[(13)]);
var inst_47967 = (inst_47965 < inst_47964);
var inst_47968 = inst_47967;
var state_48021__$1 = state_48021;
if(cljs.core.truth_(inst_47968)){
var statearr_48060_48094 = state_48021__$1;
(statearr_48060_48094[(1)] = (10));

} else {
var statearr_48061_48095 = state_48021__$1;
(statearr_48061_48095[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto___48067,mults,ensure_mult,p))
;
return ((function (switch__46743__auto__,c__46833__auto___48067,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46744__auto__ = null;
var cljs$core$async$state_machine__46744__auto____0 = (function (){
var statearr_48062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48062[(0)] = cljs$core$async$state_machine__46744__auto__);

(statearr_48062[(1)] = (1));

return statearr_48062;
});
var cljs$core$async$state_machine__46744__auto____1 = (function (state_48021){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_48021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e48063){if((e48063 instanceof Object)){
var ex__46747__auto__ = e48063;
var statearr_48064_48096 = state_48021;
(statearr_48064_48096[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48097 = state_48021;
state_48021 = G__48097;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$state_machine__46744__auto__ = function(state_48021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46744__auto____1.call(this,state_48021);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46744__auto____0;
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46744__auto____1;
return cljs$core$async$state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___48067,mults,ensure_mult,p))
})();
var state__46835__auto__ = (function (){var statearr_48065 = f__46834__auto__.call(null);
(statearr_48065[(6)] = c__46833__auto___48067);

return statearr_48065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___48067,mults,ensure_mult,p))
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
var G__48099 = arguments.length;
switch (G__48099) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48102 = arguments.length;
switch (G__48102) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__48105 = arguments.length;
switch (G__48105) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__46833__auto___48172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___48172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___48172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48144){
var state_val_48145 = (state_48144[(1)]);
if((state_val_48145 === (7))){
var state_48144__$1 = state_48144;
var statearr_48146_48173 = state_48144__$1;
(statearr_48146_48173[(2)] = null);

(statearr_48146_48173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48145 === (1))){
var state_48144__$1 = state_48144;
var statearr_48147_48174 = state_48144__$1;
(statearr_48147_48174[(2)] = null);

(statearr_48147_48174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48145 === (4))){
var inst_48108 = (state_48144[(7)]);
var inst_48110 = (inst_48108 < cnt);
var state_48144__$1 = state_48144;
if(cljs.core.truth_(inst_48110)){
var statearr_48148_48175 = state_48144__$1;
(statearr_48148_48175[(1)] = (6));

} else {
var statearr_48149_48176 = state_48144__$1;
(statearr_48149_48176[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48145 === (15))){
var inst_48140 = (state_48144[(2)]);
var state_48144__$1 = state_48144;
var statearr_48150_48177 = state_48144__$1;
(statearr_48150_48177[(2)] = inst_48140);

(statearr_48150_48177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48145 === (13))){
var inst_48133 = cljs.core.async.close_BANG_.call(null,out);
var state_48144__$1 = state_48144;
var statearr_48151_48178 = state_48144__$1;
(statearr_48151_48178[(2)] = inst_48133);

(statearr_48151_48178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48145 === (6))){
var state_48144__$1 = state_48144;
var statearr_48152_48179 = state_48144__$1;
(statearr_48152_48179[(2)] = null);

(statearr_48152_48179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48145 === (3))){
var inst_48142 = (state_48144[(2)]);
var state_48144__$1 = state_48144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48144__$1,inst_48142);
} else {
if((state_val_48145 === (12))){
var inst_48130 = (state_48144[(8)]);
var inst_48130__$1 = (state_48144[(2)]);
var inst_48131 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48130__$1);
var state_48144__$1 = (function (){var statearr_48153 = state_48144;
(statearr_48153[(8)] = inst_48130__$1);

return statearr_48153;
})();
if(cljs.core.truth_(inst_48131)){
var statearr_48154_48180 = state_48144__$1;
(statearr_48154_48180[(1)] = (13));

} else {
var statearr_48155_48181 = state_48144__$1;
(statearr_48155_48181[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48145 === (2))){
var inst_48107 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48108 = (0);
var state_48144__$1 = (function (){var statearr_48156 = state_48144;
(statearr_48156[(9)] = inst_48107);

(statearr_48156[(7)] = inst_48108);

return statearr_48156;
})();
var statearr_48157_48182 = state_48144__$1;
(statearr_48157_48182[(2)] = null);

(statearr_48157_48182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48145 === (11))){
var inst_48108 = (state_48144[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48144,(10),Object,null,(9));
var inst_48117 = chs__$1.call(null,inst_48108);
var inst_48118 = done.call(null,inst_48108);
var inst_48119 = cljs.core.async.take_BANG_.call(null,inst_48117,inst_48118);
var state_48144__$1 = state_48144;
var statearr_48158_48183 = state_48144__$1;
(statearr_48158_48183[(2)] = inst_48119);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48144__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48145 === (9))){
var inst_48108 = (state_48144[(7)]);
var inst_48121 = (state_48144[(2)]);
var inst_48122 = (inst_48108 + (1));
var inst_48108__$1 = inst_48122;
var state_48144__$1 = (function (){var statearr_48159 = state_48144;
(statearr_48159[(10)] = inst_48121);

(statearr_48159[(7)] = inst_48108__$1);

return statearr_48159;
})();
var statearr_48160_48184 = state_48144__$1;
(statearr_48160_48184[(2)] = null);

(statearr_48160_48184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48145 === (5))){
var inst_48128 = (state_48144[(2)]);
var state_48144__$1 = (function (){var statearr_48161 = state_48144;
(statearr_48161[(11)] = inst_48128);

return statearr_48161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48144__$1,(12),dchan);
} else {
if((state_val_48145 === (14))){
var inst_48130 = (state_48144[(8)]);
var inst_48135 = cljs.core.apply.call(null,f,inst_48130);
var state_48144__$1 = state_48144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48144__$1,(16),out,inst_48135);
} else {
if((state_val_48145 === (16))){
var inst_48137 = (state_48144[(2)]);
var state_48144__$1 = (function (){var statearr_48162 = state_48144;
(statearr_48162[(12)] = inst_48137);

return statearr_48162;
})();
var statearr_48163_48185 = state_48144__$1;
(statearr_48163_48185[(2)] = null);

(statearr_48163_48185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48145 === (10))){
var inst_48112 = (state_48144[(2)]);
var inst_48113 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48144__$1 = (function (){var statearr_48164 = state_48144;
(statearr_48164[(13)] = inst_48112);

return statearr_48164;
})();
var statearr_48165_48186 = state_48144__$1;
(statearr_48165_48186[(2)] = inst_48113);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48144__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48145 === (8))){
var inst_48126 = (state_48144[(2)]);
var state_48144__$1 = state_48144;
var statearr_48166_48187 = state_48144__$1;
(statearr_48166_48187[(2)] = inst_48126);

(statearr_48166_48187[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto___48172,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46743__auto__,c__46833__auto___48172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46744__auto__ = null;
var cljs$core$async$state_machine__46744__auto____0 = (function (){
var statearr_48167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48167[(0)] = cljs$core$async$state_machine__46744__auto__);

(statearr_48167[(1)] = (1));

return statearr_48167;
});
var cljs$core$async$state_machine__46744__auto____1 = (function (state_48144){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_48144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e48168){if((e48168 instanceof Object)){
var ex__46747__auto__ = e48168;
var statearr_48169_48188 = state_48144;
(statearr_48169_48188[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48189 = state_48144;
state_48144 = G__48189;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$state_machine__46744__auto__ = function(state_48144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46744__auto____1.call(this,state_48144);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46744__auto____0;
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46744__auto____1;
return cljs$core$async$state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___48172,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46835__auto__ = (function (){var statearr_48170 = f__46834__auto__.call(null);
(statearr_48170[(6)] = c__46833__auto___48172);

return statearr_48170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___48172,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__48192 = arguments.length;
switch (G__48192) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46833__auto___48246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___48246,out){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___48246,out){
return (function (state_48224){
var state_val_48225 = (state_48224[(1)]);
if((state_val_48225 === (7))){
var inst_48204 = (state_48224[(7)]);
var inst_48203 = (state_48224[(8)]);
var inst_48203__$1 = (state_48224[(2)]);
var inst_48204__$1 = cljs.core.nth.call(null,inst_48203__$1,(0),null);
var inst_48205 = cljs.core.nth.call(null,inst_48203__$1,(1),null);
var inst_48206 = (inst_48204__$1 == null);
var state_48224__$1 = (function (){var statearr_48226 = state_48224;
(statearr_48226[(7)] = inst_48204__$1);

(statearr_48226[(8)] = inst_48203__$1);

(statearr_48226[(9)] = inst_48205);

return statearr_48226;
})();
if(cljs.core.truth_(inst_48206)){
var statearr_48227_48247 = state_48224__$1;
(statearr_48227_48247[(1)] = (8));

} else {
var statearr_48228_48248 = state_48224__$1;
(statearr_48228_48248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48225 === (1))){
var inst_48193 = cljs.core.vec.call(null,chs);
var inst_48194 = inst_48193;
var state_48224__$1 = (function (){var statearr_48229 = state_48224;
(statearr_48229[(10)] = inst_48194);

return statearr_48229;
})();
var statearr_48230_48249 = state_48224__$1;
(statearr_48230_48249[(2)] = null);

(statearr_48230_48249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48225 === (4))){
var inst_48194 = (state_48224[(10)]);
var state_48224__$1 = state_48224;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48224__$1,(7),inst_48194);
} else {
if((state_val_48225 === (6))){
var inst_48220 = (state_48224[(2)]);
var state_48224__$1 = state_48224;
var statearr_48231_48250 = state_48224__$1;
(statearr_48231_48250[(2)] = inst_48220);

(statearr_48231_48250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48225 === (3))){
var inst_48222 = (state_48224[(2)]);
var state_48224__$1 = state_48224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48224__$1,inst_48222);
} else {
if((state_val_48225 === (2))){
var inst_48194 = (state_48224[(10)]);
var inst_48196 = cljs.core.count.call(null,inst_48194);
var inst_48197 = (inst_48196 > (0));
var state_48224__$1 = state_48224;
if(cljs.core.truth_(inst_48197)){
var statearr_48233_48251 = state_48224__$1;
(statearr_48233_48251[(1)] = (4));

} else {
var statearr_48234_48252 = state_48224__$1;
(statearr_48234_48252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48225 === (11))){
var inst_48194 = (state_48224[(10)]);
var inst_48213 = (state_48224[(2)]);
var tmp48232 = inst_48194;
var inst_48194__$1 = tmp48232;
var state_48224__$1 = (function (){var statearr_48235 = state_48224;
(statearr_48235[(11)] = inst_48213);

(statearr_48235[(10)] = inst_48194__$1);

return statearr_48235;
})();
var statearr_48236_48253 = state_48224__$1;
(statearr_48236_48253[(2)] = null);

(statearr_48236_48253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48225 === (9))){
var inst_48204 = (state_48224[(7)]);
var state_48224__$1 = state_48224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48224__$1,(11),out,inst_48204);
} else {
if((state_val_48225 === (5))){
var inst_48218 = cljs.core.async.close_BANG_.call(null,out);
var state_48224__$1 = state_48224;
var statearr_48237_48254 = state_48224__$1;
(statearr_48237_48254[(2)] = inst_48218);

(statearr_48237_48254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48225 === (10))){
var inst_48216 = (state_48224[(2)]);
var state_48224__$1 = state_48224;
var statearr_48238_48255 = state_48224__$1;
(statearr_48238_48255[(2)] = inst_48216);

(statearr_48238_48255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48225 === (8))){
var inst_48204 = (state_48224[(7)]);
var inst_48194 = (state_48224[(10)]);
var inst_48203 = (state_48224[(8)]);
var inst_48205 = (state_48224[(9)]);
var inst_48208 = (function (){var cs = inst_48194;
var vec__48199 = inst_48203;
var v = inst_48204;
var c = inst_48205;
return ((function (cs,vec__48199,v,c,inst_48204,inst_48194,inst_48203,inst_48205,state_val_48225,c__46833__auto___48246,out){
return (function (p1__48190_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48190_SHARP_);
});
;})(cs,vec__48199,v,c,inst_48204,inst_48194,inst_48203,inst_48205,state_val_48225,c__46833__auto___48246,out))
})();
var inst_48209 = cljs.core.filterv.call(null,inst_48208,inst_48194);
var inst_48194__$1 = inst_48209;
var state_48224__$1 = (function (){var statearr_48239 = state_48224;
(statearr_48239[(10)] = inst_48194__$1);

return statearr_48239;
})();
var statearr_48240_48256 = state_48224__$1;
(statearr_48240_48256[(2)] = null);

(statearr_48240_48256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto___48246,out))
;
return ((function (switch__46743__auto__,c__46833__auto___48246,out){
return (function() {
var cljs$core$async$state_machine__46744__auto__ = null;
var cljs$core$async$state_machine__46744__auto____0 = (function (){
var statearr_48241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48241[(0)] = cljs$core$async$state_machine__46744__auto__);

(statearr_48241[(1)] = (1));

return statearr_48241;
});
var cljs$core$async$state_machine__46744__auto____1 = (function (state_48224){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_48224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e48242){if((e48242 instanceof Object)){
var ex__46747__auto__ = e48242;
var statearr_48243_48257 = state_48224;
(statearr_48243_48257[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48258 = state_48224;
state_48224 = G__48258;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$state_machine__46744__auto__ = function(state_48224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46744__auto____1.call(this,state_48224);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46744__auto____0;
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46744__auto____1;
return cljs$core$async$state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___48246,out))
})();
var state__46835__auto__ = (function (){var statearr_48244 = f__46834__auto__.call(null);
(statearr_48244[(6)] = c__46833__auto___48246);

return statearr_48244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___48246,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48260 = arguments.length;
switch (G__48260) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46833__auto___48305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___48305,out){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___48305,out){
return (function (state_48284){
var state_val_48285 = (state_48284[(1)]);
if((state_val_48285 === (7))){
var inst_48266 = (state_48284[(7)]);
var inst_48266__$1 = (state_48284[(2)]);
var inst_48267 = (inst_48266__$1 == null);
var inst_48268 = cljs.core.not.call(null,inst_48267);
var state_48284__$1 = (function (){var statearr_48286 = state_48284;
(statearr_48286[(7)] = inst_48266__$1);

return statearr_48286;
})();
if(inst_48268){
var statearr_48287_48306 = state_48284__$1;
(statearr_48287_48306[(1)] = (8));

} else {
var statearr_48288_48307 = state_48284__$1;
(statearr_48288_48307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48285 === (1))){
var inst_48261 = (0);
var state_48284__$1 = (function (){var statearr_48289 = state_48284;
(statearr_48289[(8)] = inst_48261);

return statearr_48289;
})();
var statearr_48290_48308 = state_48284__$1;
(statearr_48290_48308[(2)] = null);

(statearr_48290_48308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48285 === (4))){
var state_48284__$1 = state_48284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48284__$1,(7),ch);
} else {
if((state_val_48285 === (6))){
var inst_48279 = (state_48284[(2)]);
var state_48284__$1 = state_48284;
var statearr_48291_48309 = state_48284__$1;
(statearr_48291_48309[(2)] = inst_48279);

(statearr_48291_48309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48285 === (3))){
var inst_48281 = (state_48284[(2)]);
var inst_48282 = cljs.core.async.close_BANG_.call(null,out);
var state_48284__$1 = (function (){var statearr_48292 = state_48284;
(statearr_48292[(9)] = inst_48281);

return statearr_48292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48284__$1,inst_48282);
} else {
if((state_val_48285 === (2))){
var inst_48261 = (state_48284[(8)]);
var inst_48263 = (inst_48261 < n);
var state_48284__$1 = state_48284;
if(cljs.core.truth_(inst_48263)){
var statearr_48293_48310 = state_48284__$1;
(statearr_48293_48310[(1)] = (4));

} else {
var statearr_48294_48311 = state_48284__$1;
(statearr_48294_48311[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48285 === (11))){
var inst_48261 = (state_48284[(8)]);
var inst_48271 = (state_48284[(2)]);
var inst_48272 = (inst_48261 + (1));
var inst_48261__$1 = inst_48272;
var state_48284__$1 = (function (){var statearr_48295 = state_48284;
(statearr_48295[(8)] = inst_48261__$1);

(statearr_48295[(10)] = inst_48271);

return statearr_48295;
})();
var statearr_48296_48312 = state_48284__$1;
(statearr_48296_48312[(2)] = null);

(statearr_48296_48312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48285 === (9))){
var state_48284__$1 = state_48284;
var statearr_48297_48313 = state_48284__$1;
(statearr_48297_48313[(2)] = null);

(statearr_48297_48313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48285 === (5))){
var state_48284__$1 = state_48284;
var statearr_48298_48314 = state_48284__$1;
(statearr_48298_48314[(2)] = null);

(statearr_48298_48314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48285 === (10))){
var inst_48276 = (state_48284[(2)]);
var state_48284__$1 = state_48284;
var statearr_48299_48315 = state_48284__$1;
(statearr_48299_48315[(2)] = inst_48276);

(statearr_48299_48315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48285 === (8))){
var inst_48266 = (state_48284[(7)]);
var state_48284__$1 = state_48284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48284__$1,(11),out,inst_48266);
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
});})(c__46833__auto___48305,out))
;
return ((function (switch__46743__auto__,c__46833__auto___48305,out){
return (function() {
var cljs$core$async$state_machine__46744__auto__ = null;
var cljs$core$async$state_machine__46744__auto____0 = (function (){
var statearr_48300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48300[(0)] = cljs$core$async$state_machine__46744__auto__);

(statearr_48300[(1)] = (1));

return statearr_48300;
});
var cljs$core$async$state_machine__46744__auto____1 = (function (state_48284){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_48284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e48301){if((e48301 instanceof Object)){
var ex__46747__auto__ = e48301;
var statearr_48302_48316 = state_48284;
(statearr_48302_48316[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48317 = state_48284;
state_48284 = G__48317;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$state_machine__46744__auto__ = function(state_48284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46744__auto____1.call(this,state_48284);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46744__auto____0;
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46744__auto____1;
return cljs$core$async$state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___48305,out))
})();
var state__46835__auto__ = (function (){var statearr_48303 = f__46834__auto__.call(null);
(statearr_48303[(6)] = c__46833__auto___48305);

return statearr_48303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___48305,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48319 = (function (f,ch,meta48320){
this.f = f;
this.ch = ch;
this.meta48320 = meta48320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48321,meta48320__$1){
var self__ = this;
var _48321__$1 = this;
return (new cljs.core.async.t_cljs$core$async48319(self__.f,self__.ch,meta48320__$1));
});

cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48321){
var self__ = this;
var _48321__$1 = this;
return self__.meta48320;
});

cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48322 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48322 = (function (f,ch,meta48320,_,fn1,meta48323){
this.f = f;
this.ch = ch;
this.meta48320 = meta48320;
this._ = _;
this.fn1 = fn1;
this.meta48323 = meta48323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48324,meta48323__$1){
var self__ = this;
var _48324__$1 = this;
return (new cljs.core.async.t_cljs$core$async48322(self__.f,self__.ch,self__.meta48320,self__._,self__.fn1,meta48323__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48324){
var self__ = this;
var _48324__$1 = this;
return self__.meta48323;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48318_SHARP_){
return f1.call(null,(((p1__48318_SHARP_ == null))?null:self__.f.call(null,p1__48318_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48322.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48320","meta48320",1075549740,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48319","cljs.core.async/t_cljs$core$async48319",562788153,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48323","meta48323",-1972337329,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48322.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48322";

cljs.core.async.t_cljs$core$async48322.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async48322");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48322 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48322(f__$1,ch__$1,meta48320__$1,___$2,fn1__$1,meta48323){
return (new cljs.core.async.t_cljs$core$async48322(f__$1,ch__$1,meta48320__$1,___$2,fn1__$1,meta48323));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48322(self__.f,self__.ch,self__.meta48320,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30237__auto__ = ret;
if(cljs.core.truth_(and__30237__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30237__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48320","meta48320",1075549740,null)], null);
});

cljs.core.async.t_cljs$core$async48319.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48319";

cljs.core.async.t_cljs$core$async48319.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async48319");
});

cljs.core.async.__GT_t_cljs$core$async48319 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48319(f__$1,ch__$1,meta48320){
return (new cljs.core.async.t_cljs$core$async48319(f__$1,ch__$1,meta48320));
});

}

return (new cljs.core.async.t_cljs$core$async48319(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48325 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48325 = (function (f,ch,meta48326){
this.f = f;
this.ch = ch;
this.meta48326 = meta48326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48327,meta48326__$1){
var self__ = this;
var _48327__$1 = this;
return (new cljs.core.async.t_cljs$core$async48325(self__.f,self__.ch,meta48326__$1));
});

cljs.core.async.t_cljs$core$async48325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48327){
var self__ = this;
var _48327__$1 = this;
return self__.meta48326;
});

cljs.core.async.t_cljs$core$async48325.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48325.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48325.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48325.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48325.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48325.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48326","meta48326",-2095878641,null)], null);
});

cljs.core.async.t_cljs$core$async48325.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48325";

cljs.core.async.t_cljs$core$async48325.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async48325");
});

cljs.core.async.__GT_t_cljs$core$async48325 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48325(f__$1,ch__$1,meta48326){
return (new cljs.core.async.t_cljs$core$async48325(f__$1,ch__$1,meta48326));
});

}

return (new cljs.core.async.t_cljs$core$async48325(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48328 = (function (p,ch,meta48329){
this.p = p;
this.ch = ch;
this.meta48329 = meta48329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48330,meta48329__$1){
var self__ = this;
var _48330__$1 = this;
return (new cljs.core.async.t_cljs$core$async48328(self__.p,self__.ch,meta48329__$1));
});

cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48330){
var self__ = this;
var _48330__$1 = this;
return self__.meta48329;
});

cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48329","meta48329",1387453926,null)], null);
});

cljs.core.async.t_cljs$core$async48328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48328";

cljs.core.async.t_cljs$core$async48328.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async48328");
});

cljs.core.async.__GT_t_cljs$core$async48328 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48328(p__$1,ch__$1,meta48329){
return (new cljs.core.async.t_cljs$core$async48328(p__$1,ch__$1,meta48329));
});

}

return (new cljs.core.async.t_cljs$core$async48328(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__48332 = arguments.length;
switch (G__48332) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46833__auto___48372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___48372,out){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___48372,out){
return (function (state_48353){
var state_val_48354 = (state_48353[(1)]);
if((state_val_48354 === (7))){
var inst_48349 = (state_48353[(2)]);
var state_48353__$1 = state_48353;
var statearr_48355_48373 = state_48353__$1;
(statearr_48355_48373[(2)] = inst_48349);

(statearr_48355_48373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (1))){
var state_48353__$1 = state_48353;
var statearr_48356_48374 = state_48353__$1;
(statearr_48356_48374[(2)] = null);

(statearr_48356_48374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (4))){
var inst_48335 = (state_48353[(7)]);
var inst_48335__$1 = (state_48353[(2)]);
var inst_48336 = (inst_48335__$1 == null);
var state_48353__$1 = (function (){var statearr_48357 = state_48353;
(statearr_48357[(7)] = inst_48335__$1);

return statearr_48357;
})();
if(cljs.core.truth_(inst_48336)){
var statearr_48358_48375 = state_48353__$1;
(statearr_48358_48375[(1)] = (5));

} else {
var statearr_48359_48376 = state_48353__$1;
(statearr_48359_48376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (6))){
var inst_48335 = (state_48353[(7)]);
var inst_48340 = p.call(null,inst_48335);
var state_48353__$1 = state_48353;
if(cljs.core.truth_(inst_48340)){
var statearr_48360_48377 = state_48353__$1;
(statearr_48360_48377[(1)] = (8));

} else {
var statearr_48361_48378 = state_48353__$1;
(statearr_48361_48378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (3))){
var inst_48351 = (state_48353[(2)]);
var state_48353__$1 = state_48353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48353__$1,inst_48351);
} else {
if((state_val_48354 === (2))){
var state_48353__$1 = state_48353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48353__$1,(4),ch);
} else {
if((state_val_48354 === (11))){
var inst_48343 = (state_48353[(2)]);
var state_48353__$1 = state_48353;
var statearr_48362_48379 = state_48353__$1;
(statearr_48362_48379[(2)] = inst_48343);

(statearr_48362_48379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (9))){
var state_48353__$1 = state_48353;
var statearr_48363_48380 = state_48353__$1;
(statearr_48363_48380[(2)] = null);

(statearr_48363_48380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (5))){
var inst_48338 = cljs.core.async.close_BANG_.call(null,out);
var state_48353__$1 = state_48353;
var statearr_48364_48381 = state_48353__$1;
(statearr_48364_48381[(2)] = inst_48338);

(statearr_48364_48381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (10))){
var inst_48346 = (state_48353[(2)]);
var state_48353__$1 = (function (){var statearr_48365 = state_48353;
(statearr_48365[(8)] = inst_48346);

return statearr_48365;
})();
var statearr_48366_48382 = state_48353__$1;
(statearr_48366_48382[(2)] = null);

(statearr_48366_48382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (8))){
var inst_48335 = (state_48353[(7)]);
var state_48353__$1 = state_48353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48353__$1,(11),out,inst_48335);
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
});})(c__46833__auto___48372,out))
;
return ((function (switch__46743__auto__,c__46833__auto___48372,out){
return (function() {
var cljs$core$async$state_machine__46744__auto__ = null;
var cljs$core$async$state_machine__46744__auto____0 = (function (){
var statearr_48367 = [null,null,null,null,null,null,null,null,null];
(statearr_48367[(0)] = cljs$core$async$state_machine__46744__auto__);

(statearr_48367[(1)] = (1));

return statearr_48367;
});
var cljs$core$async$state_machine__46744__auto____1 = (function (state_48353){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_48353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e48368){if((e48368 instanceof Object)){
var ex__46747__auto__ = e48368;
var statearr_48369_48383 = state_48353;
(statearr_48369_48383[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48384 = state_48353;
state_48353 = G__48384;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$state_machine__46744__auto__ = function(state_48353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46744__auto____1.call(this,state_48353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46744__auto____0;
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46744__auto____1;
return cljs$core$async$state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___48372,out))
})();
var state__46835__auto__ = (function (){var statearr_48370 = f__46834__auto__.call(null);
(statearr_48370[(6)] = c__46833__auto___48372);

return statearr_48370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___48372,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48386 = arguments.length;
switch (G__48386) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto__){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto__){
return (function (state_48449){
var state_val_48450 = (state_48449[(1)]);
if((state_val_48450 === (7))){
var inst_48445 = (state_48449[(2)]);
var state_48449__$1 = state_48449;
var statearr_48451_48489 = state_48449__$1;
(statearr_48451_48489[(2)] = inst_48445);

(statearr_48451_48489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (20))){
var inst_48415 = (state_48449[(7)]);
var inst_48426 = (state_48449[(2)]);
var inst_48427 = cljs.core.next.call(null,inst_48415);
var inst_48401 = inst_48427;
var inst_48402 = null;
var inst_48403 = (0);
var inst_48404 = (0);
var state_48449__$1 = (function (){var statearr_48452 = state_48449;
(statearr_48452[(8)] = inst_48403);

(statearr_48452[(9)] = inst_48401);

(statearr_48452[(10)] = inst_48404);

(statearr_48452[(11)] = inst_48402);

(statearr_48452[(12)] = inst_48426);

return statearr_48452;
})();
var statearr_48453_48490 = state_48449__$1;
(statearr_48453_48490[(2)] = null);

(statearr_48453_48490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (1))){
var state_48449__$1 = state_48449;
var statearr_48454_48491 = state_48449__$1;
(statearr_48454_48491[(2)] = null);

(statearr_48454_48491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (4))){
var inst_48390 = (state_48449[(13)]);
var inst_48390__$1 = (state_48449[(2)]);
var inst_48391 = (inst_48390__$1 == null);
var state_48449__$1 = (function (){var statearr_48455 = state_48449;
(statearr_48455[(13)] = inst_48390__$1);

return statearr_48455;
})();
if(cljs.core.truth_(inst_48391)){
var statearr_48456_48492 = state_48449__$1;
(statearr_48456_48492[(1)] = (5));

} else {
var statearr_48457_48493 = state_48449__$1;
(statearr_48457_48493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (15))){
var state_48449__$1 = state_48449;
var statearr_48461_48494 = state_48449__$1;
(statearr_48461_48494[(2)] = null);

(statearr_48461_48494[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (21))){
var state_48449__$1 = state_48449;
var statearr_48462_48495 = state_48449__$1;
(statearr_48462_48495[(2)] = null);

(statearr_48462_48495[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (13))){
var inst_48403 = (state_48449[(8)]);
var inst_48401 = (state_48449[(9)]);
var inst_48404 = (state_48449[(10)]);
var inst_48402 = (state_48449[(11)]);
var inst_48411 = (state_48449[(2)]);
var inst_48412 = (inst_48404 + (1));
var tmp48458 = inst_48403;
var tmp48459 = inst_48401;
var tmp48460 = inst_48402;
var inst_48401__$1 = tmp48459;
var inst_48402__$1 = tmp48460;
var inst_48403__$1 = tmp48458;
var inst_48404__$1 = inst_48412;
var state_48449__$1 = (function (){var statearr_48463 = state_48449;
(statearr_48463[(8)] = inst_48403__$1);

(statearr_48463[(9)] = inst_48401__$1);

(statearr_48463[(14)] = inst_48411);

(statearr_48463[(10)] = inst_48404__$1);

(statearr_48463[(11)] = inst_48402__$1);

return statearr_48463;
})();
var statearr_48464_48496 = state_48449__$1;
(statearr_48464_48496[(2)] = null);

(statearr_48464_48496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (22))){
var state_48449__$1 = state_48449;
var statearr_48465_48497 = state_48449__$1;
(statearr_48465_48497[(2)] = null);

(statearr_48465_48497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (6))){
var inst_48390 = (state_48449[(13)]);
var inst_48399 = f.call(null,inst_48390);
var inst_48400 = cljs.core.seq.call(null,inst_48399);
var inst_48401 = inst_48400;
var inst_48402 = null;
var inst_48403 = (0);
var inst_48404 = (0);
var state_48449__$1 = (function (){var statearr_48466 = state_48449;
(statearr_48466[(8)] = inst_48403);

(statearr_48466[(9)] = inst_48401);

(statearr_48466[(10)] = inst_48404);

(statearr_48466[(11)] = inst_48402);

return statearr_48466;
})();
var statearr_48467_48498 = state_48449__$1;
(statearr_48467_48498[(2)] = null);

(statearr_48467_48498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (17))){
var inst_48415 = (state_48449[(7)]);
var inst_48419 = cljs.core.chunk_first.call(null,inst_48415);
var inst_48420 = cljs.core.chunk_rest.call(null,inst_48415);
var inst_48421 = cljs.core.count.call(null,inst_48419);
var inst_48401 = inst_48420;
var inst_48402 = inst_48419;
var inst_48403 = inst_48421;
var inst_48404 = (0);
var state_48449__$1 = (function (){var statearr_48468 = state_48449;
(statearr_48468[(8)] = inst_48403);

(statearr_48468[(9)] = inst_48401);

(statearr_48468[(10)] = inst_48404);

(statearr_48468[(11)] = inst_48402);

return statearr_48468;
})();
var statearr_48469_48499 = state_48449__$1;
(statearr_48469_48499[(2)] = null);

(statearr_48469_48499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (3))){
var inst_48447 = (state_48449[(2)]);
var state_48449__$1 = state_48449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48449__$1,inst_48447);
} else {
if((state_val_48450 === (12))){
var inst_48435 = (state_48449[(2)]);
var state_48449__$1 = state_48449;
var statearr_48470_48500 = state_48449__$1;
(statearr_48470_48500[(2)] = inst_48435);

(statearr_48470_48500[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (2))){
var state_48449__$1 = state_48449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48449__$1,(4),in$);
} else {
if((state_val_48450 === (23))){
var inst_48443 = (state_48449[(2)]);
var state_48449__$1 = state_48449;
var statearr_48471_48501 = state_48449__$1;
(statearr_48471_48501[(2)] = inst_48443);

(statearr_48471_48501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (19))){
var inst_48430 = (state_48449[(2)]);
var state_48449__$1 = state_48449;
var statearr_48472_48502 = state_48449__$1;
(statearr_48472_48502[(2)] = inst_48430);

(statearr_48472_48502[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (11))){
var inst_48415 = (state_48449[(7)]);
var inst_48401 = (state_48449[(9)]);
var inst_48415__$1 = cljs.core.seq.call(null,inst_48401);
var state_48449__$1 = (function (){var statearr_48473 = state_48449;
(statearr_48473[(7)] = inst_48415__$1);

return statearr_48473;
})();
if(inst_48415__$1){
var statearr_48474_48503 = state_48449__$1;
(statearr_48474_48503[(1)] = (14));

} else {
var statearr_48475_48504 = state_48449__$1;
(statearr_48475_48504[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (9))){
var inst_48437 = (state_48449[(2)]);
var inst_48438 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48449__$1 = (function (){var statearr_48476 = state_48449;
(statearr_48476[(15)] = inst_48437);

return statearr_48476;
})();
if(cljs.core.truth_(inst_48438)){
var statearr_48477_48505 = state_48449__$1;
(statearr_48477_48505[(1)] = (21));

} else {
var statearr_48478_48506 = state_48449__$1;
(statearr_48478_48506[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (5))){
var inst_48393 = cljs.core.async.close_BANG_.call(null,out);
var state_48449__$1 = state_48449;
var statearr_48479_48507 = state_48449__$1;
(statearr_48479_48507[(2)] = inst_48393);

(statearr_48479_48507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (14))){
var inst_48415 = (state_48449[(7)]);
var inst_48417 = cljs.core.chunked_seq_QMARK_.call(null,inst_48415);
var state_48449__$1 = state_48449;
if(inst_48417){
var statearr_48480_48508 = state_48449__$1;
(statearr_48480_48508[(1)] = (17));

} else {
var statearr_48481_48509 = state_48449__$1;
(statearr_48481_48509[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (16))){
var inst_48433 = (state_48449[(2)]);
var state_48449__$1 = state_48449;
var statearr_48482_48510 = state_48449__$1;
(statearr_48482_48510[(2)] = inst_48433);

(statearr_48482_48510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48450 === (10))){
var inst_48404 = (state_48449[(10)]);
var inst_48402 = (state_48449[(11)]);
var inst_48409 = cljs.core._nth.call(null,inst_48402,inst_48404);
var state_48449__$1 = state_48449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48449__$1,(13),out,inst_48409);
} else {
if((state_val_48450 === (18))){
var inst_48415 = (state_48449[(7)]);
var inst_48424 = cljs.core.first.call(null,inst_48415);
var state_48449__$1 = state_48449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48449__$1,(20),out,inst_48424);
} else {
if((state_val_48450 === (8))){
var inst_48403 = (state_48449[(8)]);
var inst_48404 = (state_48449[(10)]);
var inst_48406 = (inst_48404 < inst_48403);
var inst_48407 = inst_48406;
var state_48449__$1 = state_48449;
if(cljs.core.truth_(inst_48407)){
var statearr_48483_48511 = state_48449__$1;
(statearr_48483_48511[(1)] = (10));

} else {
var statearr_48484_48512 = state_48449__$1;
(statearr_48484_48512[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto__))
;
return ((function (switch__46743__auto__,c__46833__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46744__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46744__auto____0 = (function (){
var statearr_48485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48485[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46744__auto__);

(statearr_48485[(1)] = (1));

return statearr_48485;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46744__auto____1 = (function (state_48449){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_48449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e48486){if((e48486 instanceof Object)){
var ex__46747__auto__ = e48486;
var statearr_48487_48513 = state_48449;
(statearr_48487_48513[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48514 = state_48449;
state_48449 = G__48514;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46744__auto__ = function(state_48449){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46744__auto____1.call(this,state_48449);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46744__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46744__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto__))
})();
var state__46835__auto__ = (function (){var statearr_48488 = f__46834__auto__.call(null);
(statearr_48488[(6)] = c__46833__auto__);

return statearr_48488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto__))
);

return c__46833__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48516 = arguments.length;
switch (G__48516) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48519 = arguments.length;
switch (G__48519) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48522 = arguments.length;
switch (G__48522) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46833__auto___48569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___48569,out){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___48569,out){
return (function (state_48546){
var state_val_48547 = (state_48546[(1)]);
if((state_val_48547 === (7))){
var inst_48541 = (state_48546[(2)]);
var state_48546__$1 = state_48546;
var statearr_48548_48570 = state_48546__$1;
(statearr_48548_48570[(2)] = inst_48541);

(statearr_48548_48570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (1))){
var inst_48523 = null;
var state_48546__$1 = (function (){var statearr_48549 = state_48546;
(statearr_48549[(7)] = inst_48523);

return statearr_48549;
})();
var statearr_48550_48571 = state_48546__$1;
(statearr_48550_48571[(2)] = null);

(statearr_48550_48571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (4))){
var inst_48526 = (state_48546[(8)]);
var inst_48526__$1 = (state_48546[(2)]);
var inst_48527 = (inst_48526__$1 == null);
var inst_48528 = cljs.core.not.call(null,inst_48527);
var state_48546__$1 = (function (){var statearr_48551 = state_48546;
(statearr_48551[(8)] = inst_48526__$1);

return statearr_48551;
})();
if(inst_48528){
var statearr_48552_48572 = state_48546__$1;
(statearr_48552_48572[(1)] = (5));

} else {
var statearr_48553_48573 = state_48546__$1;
(statearr_48553_48573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (6))){
var state_48546__$1 = state_48546;
var statearr_48554_48574 = state_48546__$1;
(statearr_48554_48574[(2)] = null);

(statearr_48554_48574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (3))){
var inst_48543 = (state_48546[(2)]);
var inst_48544 = cljs.core.async.close_BANG_.call(null,out);
var state_48546__$1 = (function (){var statearr_48555 = state_48546;
(statearr_48555[(9)] = inst_48543);

return statearr_48555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48546__$1,inst_48544);
} else {
if((state_val_48547 === (2))){
var state_48546__$1 = state_48546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48546__$1,(4),ch);
} else {
if((state_val_48547 === (11))){
var inst_48526 = (state_48546[(8)]);
var inst_48535 = (state_48546[(2)]);
var inst_48523 = inst_48526;
var state_48546__$1 = (function (){var statearr_48556 = state_48546;
(statearr_48556[(7)] = inst_48523);

(statearr_48556[(10)] = inst_48535);

return statearr_48556;
})();
var statearr_48557_48575 = state_48546__$1;
(statearr_48557_48575[(2)] = null);

(statearr_48557_48575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (9))){
var inst_48526 = (state_48546[(8)]);
var state_48546__$1 = state_48546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48546__$1,(11),out,inst_48526);
} else {
if((state_val_48547 === (5))){
var inst_48526 = (state_48546[(8)]);
var inst_48523 = (state_48546[(7)]);
var inst_48530 = cljs.core._EQ_.call(null,inst_48526,inst_48523);
var state_48546__$1 = state_48546;
if(inst_48530){
var statearr_48559_48576 = state_48546__$1;
(statearr_48559_48576[(1)] = (8));

} else {
var statearr_48560_48577 = state_48546__$1;
(statearr_48560_48577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (10))){
var inst_48538 = (state_48546[(2)]);
var state_48546__$1 = state_48546;
var statearr_48561_48578 = state_48546__$1;
(statearr_48561_48578[(2)] = inst_48538);

(statearr_48561_48578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (8))){
var inst_48523 = (state_48546[(7)]);
var tmp48558 = inst_48523;
var inst_48523__$1 = tmp48558;
var state_48546__$1 = (function (){var statearr_48562 = state_48546;
(statearr_48562[(7)] = inst_48523__$1);

return statearr_48562;
})();
var statearr_48563_48579 = state_48546__$1;
(statearr_48563_48579[(2)] = null);

(statearr_48563_48579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto___48569,out))
;
return ((function (switch__46743__auto__,c__46833__auto___48569,out){
return (function() {
var cljs$core$async$state_machine__46744__auto__ = null;
var cljs$core$async$state_machine__46744__auto____0 = (function (){
var statearr_48564 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48564[(0)] = cljs$core$async$state_machine__46744__auto__);

(statearr_48564[(1)] = (1));

return statearr_48564;
});
var cljs$core$async$state_machine__46744__auto____1 = (function (state_48546){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_48546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e48565){if((e48565 instanceof Object)){
var ex__46747__auto__ = e48565;
var statearr_48566_48580 = state_48546;
(statearr_48566_48580[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48581 = state_48546;
state_48546 = G__48581;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$state_machine__46744__auto__ = function(state_48546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46744__auto____1.call(this,state_48546);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46744__auto____0;
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46744__auto____1;
return cljs$core$async$state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___48569,out))
})();
var state__46835__auto__ = (function (){var statearr_48567 = f__46834__auto__.call(null);
(statearr_48567[(6)] = c__46833__auto___48569);

return statearr_48567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___48569,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48583 = arguments.length;
switch (G__48583) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46833__auto___48649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___48649,out){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___48649,out){
return (function (state_48621){
var state_val_48622 = (state_48621[(1)]);
if((state_val_48622 === (7))){
var inst_48617 = (state_48621[(2)]);
var state_48621__$1 = state_48621;
var statearr_48623_48650 = state_48621__$1;
(statearr_48623_48650[(2)] = inst_48617);

(statearr_48623_48650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (1))){
var inst_48584 = (new Array(n));
var inst_48585 = inst_48584;
var inst_48586 = (0);
var state_48621__$1 = (function (){var statearr_48624 = state_48621;
(statearr_48624[(7)] = inst_48586);

(statearr_48624[(8)] = inst_48585);

return statearr_48624;
})();
var statearr_48625_48651 = state_48621__$1;
(statearr_48625_48651[(2)] = null);

(statearr_48625_48651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (4))){
var inst_48589 = (state_48621[(9)]);
var inst_48589__$1 = (state_48621[(2)]);
var inst_48590 = (inst_48589__$1 == null);
var inst_48591 = cljs.core.not.call(null,inst_48590);
var state_48621__$1 = (function (){var statearr_48626 = state_48621;
(statearr_48626[(9)] = inst_48589__$1);

return statearr_48626;
})();
if(inst_48591){
var statearr_48627_48652 = state_48621__$1;
(statearr_48627_48652[(1)] = (5));

} else {
var statearr_48628_48653 = state_48621__$1;
(statearr_48628_48653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (15))){
var inst_48611 = (state_48621[(2)]);
var state_48621__$1 = state_48621;
var statearr_48629_48654 = state_48621__$1;
(statearr_48629_48654[(2)] = inst_48611);

(statearr_48629_48654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (13))){
var state_48621__$1 = state_48621;
var statearr_48630_48655 = state_48621__$1;
(statearr_48630_48655[(2)] = null);

(statearr_48630_48655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (6))){
var inst_48586 = (state_48621[(7)]);
var inst_48607 = (inst_48586 > (0));
var state_48621__$1 = state_48621;
if(cljs.core.truth_(inst_48607)){
var statearr_48631_48656 = state_48621__$1;
(statearr_48631_48656[(1)] = (12));

} else {
var statearr_48632_48657 = state_48621__$1;
(statearr_48632_48657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (3))){
var inst_48619 = (state_48621[(2)]);
var state_48621__$1 = state_48621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48621__$1,inst_48619);
} else {
if((state_val_48622 === (12))){
var inst_48585 = (state_48621[(8)]);
var inst_48609 = cljs.core.vec.call(null,inst_48585);
var state_48621__$1 = state_48621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48621__$1,(15),out,inst_48609);
} else {
if((state_val_48622 === (2))){
var state_48621__$1 = state_48621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48621__$1,(4),ch);
} else {
if((state_val_48622 === (11))){
var inst_48601 = (state_48621[(2)]);
var inst_48602 = (new Array(n));
var inst_48585 = inst_48602;
var inst_48586 = (0);
var state_48621__$1 = (function (){var statearr_48633 = state_48621;
(statearr_48633[(7)] = inst_48586);

(statearr_48633[(10)] = inst_48601);

(statearr_48633[(8)] = inst_48585);

return statearr_48633;
})();
var statearr_48634_48658 = state_48621__$1;
(statearr_48634_48658[(2)] = null);

(statearr_48634_48658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (9))){
var inst_48585 = (state_48621[(8)]);
var inst_48599 = cljs.core.vec.call(null,inst_48585);
var state_48621__$1 = state_48621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48621__$1,(11),out,inst_48599);
} else {
if((state_val_48622 === (5))){
var inst_48589 = (state_48621[(9)]);
var inst_48586 = (state_48621[(7)]);
var inst_48594 = (state_48621[(11)]);
var inst_48585 = (state_48621[(8)]);
var inst_48593 = (inst_48585[inst_48586] = inst_48589);
var inst_48594__$1 = (inst_48586 + (1));
var inst_48595 = (inst_48594__$1 < n);
var state_48621__$1 = (function (){var statearr_48635 = state_48621;
(statearr_48635[(11)] = inst_48594__$1);

(statearr_48635[(12)] = inst_48593);

return statearr_48635;
})();
if(cljs.core.truth_(inst_48595)){
var statearr_48636_48659 = state_48621__$1;
(statearr_48636_48659[(1)] = (8));

} else {
var statearr_48637_48660 = state_48621__$1;
(statearr_48637_48660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (14))){
var inst_48614 = (state_48621[(2)]);
var inst_48615 = cljs.core.async.close_BANG_.call(null,out);
var state_48621__$1 = (function (){var statearr_48639 = state_48621;
(statearr_48639[(13)] = inst_48614);

return statearr_48639;
})();
var statearr_48640_48661 = state_48621__$1;
(statearr_48640_48661[(2)] = inst_48615);

(statearr_48640_48661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (10))){
var inst_48605 = (state_48621[(2)]);
var state_48621__$1 = state_48621;
var statearr_48641_48662 = state_48621__$1;
(statearr_48641_48662[(2)] = inst_48605);

(statearr_48641_48662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (8))){
var inst_48594 = (state_48621[(11)]);
var inst_48585 = (state_48621[(8)]);
var tmp48638 = inst_48585;
var inst_48585__$1 = tmp48638;
var inst_48586 = inst_48594;
var state_48621__$1 = (function (){var statearr_48642 = state_48621;
(statearr_48642[(7)] = inst_48586);

(statearr_48642[(8)] = inst_48585__$1);

return statearr_48642;
})();
var statearr_48643_48663 = state_48621__$1;
(statearr_48643_48663[(2)] = null);

(statearr_48643_48663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto___48649,out))
;
return ((function (switch__46743__auto__,c__46833__auto___48649,out){
return (function() {
var cljs$core$async$state_machine__46744__auto__ = null;
var cljs$core$async$state_machine__46744__auto____0 = (function (){
var statearr_48644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48644[(0)] = cljs$core$async$state_machine__46744__auto__);

(statearr_48644[(1)] = (1));

return statearr_48644;
});
var cljs$core$async$state_machine__46744__auto____1 = (function (state_48621){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_48621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e48645){if((e48645 instanceof Object)){
var ex__46747__auto__ = e48645;
var statearr_48646_48664 = state_48621;
(statearr_48646_48664[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48665 = state_48621;
state_48621 = G__48665;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$state_machine__46744__auto__ = function(state_48621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46744__auto____1.call(this,state_48621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46744__auto____0;
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46744__auto____1;
return cljs$core$async$state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___48649,out))
})();
var state__46835__auto__ = (function (){var statearr_48647 = f__46834__auto__.call(null);
(statearr_48647[(6)] = c__46833__auto___48649);

return statearr_48647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___48649,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48667 = arguments.length;
switch (G__48667) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46833__auto___48737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___48737,out){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___48737,out){
return (function (state_48709){
var state_val_48710 = (state_48709[(1)]);
if((state_val_48710 === (7))){
var inst_48705 = (state_48709[(2)]);
var state_48709__$1 = state_48709;
var statearr_48711_48738 = state_48709__$1;
(statearr_48711_48738[(2)] = inst_48705);

(statearr_48711_48738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48710 === (1))){
var inst_48668 = [];
var inst_48669 = inst_48668;
var inst_48670 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48709__$1 = (function (){var statearr_48712 = state_48709;
(statearr_48712[(7)] = inst_48669);

(statearr_48712[(8)] = inst_48670);

return statearr_48712;
})();
var statearr_48713_48739 = state_48709__$1;
(statearr_48713_48739[(2)] = null);

(statearr_48713_48739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48710 === (4))){
var inst_48673 = (state_48709[(9)]);
var inst_48673__$1 = (state_48709[(2)]);
var inst_48674 = (inst_48673__$1 == null);
var inst_48675 = cljs.core.not.call(null,inst_48674);
var state_48709__$1 = (function (){var statearr_48714 = state_48709;
(statearr_48714[(9)] = inst_48673__$1);

return statearr_48714;
})();
if(inst_48675){
var statearr_48715_48740 = state_48709__$1;
(statearr_48715_48740[(1)] = (5));

} else {
var statearr_48716_48741 = state_48709__$1;
(statearr_48716_48741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48710 === (15))){
var inst_48699 = (state_48709[(2)]);
var state_48709__$1 = state_48709;
var statearr_48717_48742 = state_48709__$1;
(statearr_48717_48742[(2)] = inst_48699);

(statearr_48717_48742[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48710 === (13))){
var state_48709__$1 = state_48709;
var statearr_48718_48743 = state_48709__$1;
(statearr_48718_48743[(2)] = null);

(statearr_48718_48743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48710 === (6))){
var inst_48669 = (state_48709[(7)]);
var inst_48694 = inst_48669.length;
var inst_48695 = (inst_48694 > (0));
var state_48709__$1 = state_48709;
if(cljs.core.truth_(inst_48695)){
var statearr_48719_48744 = state_48709__$1;
(statearr_48719_48744[(1)] = (12));

} else {
var statearr_48720_48745 = state_48709__$1;
(statearr_48720_48745[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48710 === (3))){
var inst_48707 = (state_48709[(2)]);
var state_48709__$1 = state_48709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48709__$1,inst_48707);
} else {
if((state_val_48710 === (12))){
var inst_48669 = (state_48709[(7)]);
var inst_48697 = cljs.core.vec.call(null,inst_48669);
var state_48709__$1 = state_48709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48709__$1,(15),out,inst_48697);
} else {
if((state_val_48710 === (2))){
var state_48709__$1 = state_48709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48709__$1,(4),ch);
} else {
if((state_val_48710 === (11))){
var inst_48673 = (state_48709[(9)]);
var inst_48677 = (state_48709[(10)]);
var inst_48687 = (state_48709[(2)]);
var inst_48688 = [];
var inst_48689 = inst_48688.push(inst_48673);
var inst_48669 = inst_48688;
var inst_48670 = inst_48677;
var state_48709__$1 = (function (){var statearr_48721 = state_48709;
(statearr_48721[(11)] = inst_48689);

(statearr_48721[(12)] = inst_48687);

(statearr_48721[(7)] = inst_48669);

(statearr_48721[(8)] = inst_48670);

return statearr_48721;
})();
var statearr_48722_48746 = state_48709__$1;
(statearr_48722_48746[(2)] = null);

(statearr_48722_48746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48710 === (9))){
var inst_48669 = (state_48709[(7)]);
var inst_48685 = cljs.core.vec.call(null,inst_48669);
var state_48709__$1 = state_48709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48709__$1,(11),out,inst_48685);
} else {
if((state_val_48710 === (5))){
var inst_48673 = (state_48709[(9)]);
var inst_48677 = (state_48709[(10)]);
var inst_48670 = (state_48709[(8)]);
var inst_48677__$1 = f.call(null,inst_48673);
var inst_48678 = cljs.core._EQ_.call(null,inst_48677__$1,inst_48670);
var inst_48679 = cljs.core.keyword_identical_QMARK_.call(null,inst_48670,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48680 = (inst_48678) || (inst_48679);
var state_48709__$1 = (function (){var statearr_48723 = state_48709;
(statearr_48723[(10)] = inst_48677__$1);

return statearr_48723;
})();
if(cljs.core.truth_(inst_48680)){
var statearr_48724_48747 = state_48709__$1;
(statearr_48724_48747[(1)] = (8));

} else {
var statearr_48725_48748 = state_48709__$1;
(statearr_48725_48748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48710 === (14))){
var inst_48702 = (state_48709[(2)]);
var inst_48703 = cljs.core.async.close_BANG_.call(null,out);
var state_48709__$1 = (function (){var statearr_48727 = state_48709;
(statearr_48727[(13)] = inst_48702);

return statearr_48727;
})();
var statearr_48728_48749 = state_48709__$1;
(statearr_48728_48749[(2)] = inst_48703);

(statearr_48728_48749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48710 === (10))){
var inst_48692 = (state_48709[(2)]);
var state_48709__$1 = state_48709;
var statearr_48729_48750 = state_48709__$1;
(statearr_48729_48750[(2)] = inst_48692);

(statearr_48729_48750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48710 === (8))){
var inst_48673 = (state_48709[(9)]);
var inst_48669 = (state_48709[(7)]);
var inst_48677 = (state_48709[(10)]);
var inst_48682 = inst_48669.push(inst_48673);
var tmp48726 = inst_48669;
var inst_48669__$1 = tmp48726;
var inst_48670 = inst_48677;
var state_48709__$1 = (function (){var statearr_48730 = state_48709;
(statearr_48730[(14)] = inst_48682);

(statearr_48730[(7)] = inst_48669__$1);

(statearr_48730[(8)] = inst_48670);

return statearr_48730;
})();
var statearr_48731_48751 = state_48709__$1;
(statearr_48731_48751[(2)] = null);

(statearr_48731_48751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__46833__auto___48737,out))
;
return ((function (switch__46743__auto__,c__46833__auto___48737,out){
return (function() {
var cljs$core$async$state_machine__46744__auto__ = null;
var cljs$core$async$state_machine__46744__auto____0 = (function (){
var statearr_48732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48732[(0)] = cljs$core$async$state_machine__46744__auto__);

(statearr_48732[(1)] = (1));

return statearr_48732;
});
var cljs$core$async$state_machine__46744__auto____1 = (function (state_48709){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_48709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e48733){if((e48733 instanceof Object)){
var ex__46747__auto__ = e48733;
var statearr_48734_48752 = state_48709;
(statearr_48734_48752[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48753 = state_48709;
state_48709 = G__48753;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
cljs$core$async$state_machine__46744__auto__ = function(state_48709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46744__auto____1.call(this,state_48709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46744__auto____0;
cljs$core$async$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46744__auto____1;
return cljs$core$async$state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___48737,out))
})();
var state__46835__auto__ = (function (){var statearr_48735 = f__46834__auto__.call(null);
(statearr_48735[(6)] = c__46833__auto___48737);

return statearr_48735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___48737,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1506985654601
