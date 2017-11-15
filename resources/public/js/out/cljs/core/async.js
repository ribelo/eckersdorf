// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46814 = arguments.length;
switch (G__46814) {
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
if(typeof cljs.core.async.t_cljs$core$async46815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46815 = (function (f,blockable,meta46816){
this.f = f;
this.blockable = blockable;
this.meta46816 = meta46816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46817,meta46816__$1){
var self__ = this;
var _46817__$1 = this;
return (new cljs.core.async.t_cljs$core$async46815(self__.f,self__.blockable,meta46816__$1));
});

cljs.core.async.t_cljs$core$async46815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46817){
var self__ = this;
var _46817__$1 = this;
return self__.meta46816;
});

cljs.core.async.t_cljs$core$async46815.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46816","meta46816",1498546757,null)], null);
});

cljs.core.async.t_cljs$core$async46815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46815";

cljs.core.async.t_cljs$core$async46815.cljs$lang$ctorPrWriter = (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async46815");
});

cljs.core.async.__GT_t_cljs$core$async46815 = (function cljs$core$async$__GT_t_cljs$core$async46815(f__$1,blockable__$1,meta46816){
return (new cljs.core.async.t_cljs$core$async46815(f__$1,blockable__$1,meta46816));
});

}

return (new cljs.core.async.t_cljs$core$async46815(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46821 = arguments.length;
switch (G__46821) {
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
var G__46824 = arguments.length;
switch (G__46824) {
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
var G__46827 = arguments.length;
switch (G__46827) {
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
var val_46829 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46829);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46829,ret){
return (function (){
return fn1.call(null,val_46829);
});})(val_46829,ret))
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
var G__46831 = arguments.length;
switch (G__46831) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__31568__auto___46833 = n;
var x_46834 = (0);
while(true){
if((x_46834 < n__31568__auto___46833)){
(a[x_46834] = (0));

var G__46835 = (x_46834 + (1));
x_46834 = G__46835;
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

var G__46836 = (i + (1));
i = G__46836;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46837 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46837 = (function (flag,meta46838){
this.flag = flag;
this.meta46838 = meta46838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46839,meta46838__$1){
var self__ = this;
var _46839__$1 = this;
return (new cljs.core.async.t_cljs$core$async46837(self__.flag,meta46838__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46839){
var self__ = this;
var _46839__$1 = this;
return self__.meta46838;
});})(flag))
;

cljs.core.async.t_cljs$core$async46837.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46837.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46837.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46838","meta46838",-1554617637,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46837.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46837";

cljs.core.async.t_cljs$core$async46837.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async46837");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46837 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46837(flag__$1,meta46838){
return (new cljs.core.async.t_cljs$core$async46837(flag__$1,meta46838));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46837(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46840 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46840 = (function (flag,cb,meta46841){
this.flag = flag;
this.cb = cb;
this.meta46841 = meta46841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46842,meta46841__$1){
var self__ = this;
var _46842__$1 = this;
return (new cljs.core.async.t_cljs$core$async46840(self__.flag,self__.cb,meta46841__$1));
});

cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46842){
var self__ = this;
var _46842__$1 = this;
return self__.meta46841;
});

cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46841","meta46841",1297125594,null)], null);
});

cljs.core.async.t_cljs$core$async46840.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46840.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46840";

cljs.core.async.t_cljs$core$async46840.cljs$lang$ctorPrWriter = (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async46840");
});

cljs.core.async.__GT_t_cljs$core$async46840 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46840(flag__$1,cb__$1,meta46841){
return (new cljs.core.async.t_cljs$core$async46840(flag__$1,cb__$1,meta46841));
});

}

return (new cljs.core.async.t_cljs$core$async46840(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46843_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46843_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46844_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46844_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30522__auto__ = wport;
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46845 = (i + (1));
i = G__46845;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30522__auto__ = ret;
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30510__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30510__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30510__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__31809__auto__ = [];
var len__31802__auto___46851 = arguments.length;
var i__31803__auto___46852 = (0);
while(true){
if((i__31803__auto___46852 < len__31802__auto___46851)){
args__31809__auto__.push((arguments[i__31803__auto___46852]));

var G__46853 = (i__31803__auto___46852 + (1));
i__31803__auto___46852 = G__46853;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((1) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31810__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46848){
var map__46849 = p__46848;
var map__46849__$1 = ((((!((map__46849 == null)))?((((map__46849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46849):map__46849);
var opts = map__46849__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46846){
var G__46847 = cljs.core.first.call(null,seq46846);
var seq46846__$1 = cljs.core.next.call(null,seq46846);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46847,seq46846__$1);
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
var G__46855 = arguments.length;
switch (G__46855) {
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
var c__46754__auto___46901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___46901){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___46901){
return (function (state_46879){
var state_val_46880 = (state_46879[(1)]);
if((state_val_46880 === (7))){
var inst_46875 = (state_46879[(2)]);
var state_46879__$1 = state_46879;
var statearr_46881_46902 = state_46879__$1;
(statearr_46881_46902[(2)] = inst_46875);

(statearr_46881_46902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46880 === (1))){
var state_46879__$1 = state_46879;
var statearr_46882_46903 = state_46879__$1;
(statearr_46882_46903[(2)] = null);

(statearr_46882_46903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46880 === (4))){
var inst_46858 = (state_46879[(7)]);
var inst_46858__$1 = (state_46879[(2)]);
var inst_46859 = (inst_46858__$1 == null);
var state_46879__$1 = (function (){var statearr_46883 = state_46879;
(statearr_46883[(7)] = inst_46858__$1);

return statearr_46883;
})();
if(cljs.core.truth_(inst_46859)){
var statearr_46884_46904 = state_46879__$1;
(statearr_46884_46904[(1)] = (5));

} else {
var statearr_46885_46905 = state_46879__$1;
(statearr_46885_46905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46880 === (13))){
var state_46879__$1 = state_46879;
var statearr_46886_46906 = state_46879__$1;
(statearr_46886_46906[(2)] = null);

(statearr_46886_46906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46880 === (6))){
var inst_46858 = (state_46879[(7)]);
var state_46879__$1 = state_46879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46879__$1,(11),to,inst_46858);
} else {
if((state_val_46880 === (3))){
var inst_46877 = (state_46879[(2)]);
var state_46879__$1 = state_46879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46879__$1,inst_46877);
} else {
if((state_val_46880 === (12))){
var state_46879__$1 = state_46879;
var statearr_46887_46907 = state_46879__$1;
(statearr_46887_46907[(2)] = null);

(statearr_46887_46907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46880 === (2))){
var state_46879__$1 = state_46879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46879__$1,(4),from);
} else {
if((state_val_46880 === (11))){
var inst_46868 = (state_46879[(2)]);
var state_46879__$1 = state_46879;
if(cljs.core.truth_(inst_46868)){
var statearr_46888_46908 = state_46879__$1;
(statearr_46888_46908[(1)] = (12));

} else {
var statearr_46889_46909 = state_46879__$1;
(statearr_46889_46909[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46880 === (9))){
var state_46879__$1 = state_46879;
var statearr_46890_46910 = state_46879__$1;
(statearr_46890_46910[(2)] = null);

(statearr_46890_46910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46880 === (5))){
var state_46879__$1 = state_46879;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46891_46911 = state_46879__$1;
(statearr_46891_46911[(1)] = (8));

} else {
var statearr_46892_46912 = state_46879__$1;
(statearr_46892_46912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46880 === (14))){
var inst_46873 = (state_46879[(2)]);
var state_46879__$1 = state_46879;
var statearr_46893_46913 = state_46879__$1;
(statearr_46893_46913[(2)] = inst_46873);

(statearr_46893_46913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46880 === (10))){
var inst_46865 = (state_46879[(2)]);
var state_46879__$1 = state_46879;
var statearr_46894_46914 = state_46879__$1;
(statearr_46894_46914[(2)] = inst_46865);

(statearr_46894_46914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46880 === (8))){
var inst_46862 = cljs.core.async.close_BANG_.call(null,to);
var state_46879__$1 = state_46879;
var statearr_46895_46915 = state_46879__$1;
(statearr_46895_46915[(2)] = inst_46862);

(statearr_46895_46915[(1)] = (10));


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
});})(c__46754__auto___46901))
;
return ((function (switch__46664__auto__,c__46754__auto___46901){
return (function() {
var cljs$core$async$state_machine__46665__auto__ = null;
var cljs$core$async$state_machine__46665__auto____0 = (function (){
var statearr_46896 = [null,null,null,null,null,null,null,null];
(statearr_46896[(0)] = cljs$core$async$state_machine__46665__auto__);

(statearr_46896[(1)] = (1));

return statearr_46896;
});
var cljs$core$async$state_machine__46665__auto____1 = (function (state_46879){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_46879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e46897){if((e46897 instanceof Object)){
var ex__46668__auto__ = e46897;
var statearr_46898_46916 = state_46879;
(statearr_46898_46916[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46917 = state_46879;
state_46879 = G__46917;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$state_machine__46665__auto__ = function(state_46879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46665__auto____1.call(this,state_46879);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46665__auto____0;
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46665__auto____1;
return cljs$core$async$state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___46901))
})();
var state__46756__auto__ = (function (){var statearr_46899 = f__46755__auto__.call(null);
(statearr_46899[(6)] = c__46754__auto___46901);

return statearr_46899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___46901))
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
return (function (p__46918){
var vec__46919 = p__46918;
var v = cljs.core.nth.call(null,vec__46919,(0),null);
var p = cljs.core.nth.call(null,vec__46919,(1),null);
var job = vec__46919;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__46754__auto___47090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___47090,res,vec__46919,v,p,job,jobs,results){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___47090,res,vec__46919,v,p,job,jobs,results){
return (function (state_46926){
var state_val_46927 = (state_46926[(1)]);
if((state_val_46927 === (1))){
var state_46926__$1 = state_46926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46926__$1,(2),res,v);
} else {
if((state_val_46927 === (2))){
var inst_46923 = (state_46926[(2)]);
var inst_46924 = cljs.core.async.close_BANG_.call(null,res);
var state_46926__$1 = (function (){var statearr_46928 = state_46926;
(statearr_46928[(7)] = inst_46923);

return statearr_46928;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46926__$1,inst_46924);
} else {
return null;
}
}
});})(c__46754__auto___47090,res,vec__46919,v,p,job,jobs,results))
;
return ((function (switch__46664__auto__,c__46754__auto___47090,res,vec__46919,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0 = (function (){
var statearr_46929 = [null,null,null,null,null,null,null,null];
(statearr_46929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__);

(statearr_46929[(1)] = (1));

return statearr_46929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1 = (function (state_46926){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_46926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e46930){if((e46930 instanceof Object)){
var ex__46668__auto__ = e46930;
var statearr_46931_47091 = state_46926;
(statearr_46931_47091[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47092 = state_46926;
state_46926 = G__47092;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__ = function(state_46926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1.call(this,state_46926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___47090,res,vec__46919,v,p,job,jobs,results))
})();
var state__46756__auto__ = (function (){var statearr_46932 = f__46755__auto__.call(null);
(statearr_46932[(6)] = c__46754__auto___47090);

return statearr_46932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___47090,res,vec__46919,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46933){
var vec__46934 = p__46933;
var v = cljs.core.nth.call(null,vec__46934,(0),null);
var p = cljs.core.nth.call(null,vec__46934,(1),null);
var job = vec__46934;
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
var n__31568__auto___47093 = n;
var __47094 = (0);
while(true){
if((__47094 < n__31568__auto___47093)){
var G__46937_47095 = type;
var G__46937_47096__$1 = (((G__46937_47095 instanceof cljs.core.Keyword))?G__46937_47095.fqn:null);
switch (G__46937_47096__$1) {
case "compute":
var c__46754__auto___47098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47094,c__46754__auto___47098,G__46937_47095,G__46937_47096__$1,n__31568__auto___47093,jobs,results,process,async){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (__47094,c__46754__auto___47098,G__46937_47095,G__46937_47096__$1,n__31568__auto___47093,jobs,results,process,async){
return (function (state_46950){
var state_val_46951 = (state_46950[(1)]);
if((state_val_46951 === (1))){
var state_46950__$1 = state_46950;
var statearr_46952_47099 = state_46950__$1;
(statearr_46952_47099[(2)] = null);

(statearr_46952_47099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46951 === (2))){
var state_46950__$1 = state_46950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46950__$1,(4),jobs);
} else {
if((state_val_46951 === (3))){
var inst_46948 = (state_46950[(2)]);
var state_46950__$1 = state_46950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46950__$1,inst_46948);
} else {
if((state_val_46951 === (4))){
var inst_46940 = (state_46950[(2)]);
var inst_46941 = process.call(null,inst_46940);
var state_46950__$1 = state_46950;
if(cljs.core.truth_(inst_46941)){
var statearr_46953_47100 = state_46950__$1;
(statearr_46953_47100[(1)] = (5));

} else {
var statearr_46954_47101 = state_46950__$1;
(statearr_46954_47101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46951 === (5))){
var state_46950__$1 = state_46950;
var statearr_46955_47102 = state_46950__$1;
(statearr_46955_47102[(2)] = null);

(statearr_46955_47102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46951 === (6))){
var state_46950__$1 = state_46950;
var statearr_46956_47103 = state_46950__$1;
(statearr_46956_47103[(2)] = null);

(statearr_46956_47103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46951 === (7))){
var inst_46946 = (state_46950[(2)]);
var state_46950__$1 = state_46950;
var statearr_46957_47104 = state_46950__$1;
(statearr_46957_47104[(2)] = inst_46946);

(statearr_46957_47104[(1)] = (3));


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
});})(__47094,c__46754__auto___47098,G__46937_47095,G__46937_47096__$1,n__31568__auto___47093,jobs,results,process,async))
;
return ((function (__47094,switch__46664__auto__,c__46754__auto___47098,G__46937_47095,G__46937_47096__$1,n__31568__auto___47093,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0 = (function (){
var statearr_46958 = [null,null,null,null,null,null,null];
(statearr_46958[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__);

(statearr_46958[(1)] = (1));

return statearr_46958;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1 = (function (state_46950){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_46950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e46959){if((e46959 instanceof Object)){
var ex__46668__auto__ = e46959;
var statearr_46960_47105 = state_46950;
(statearr_46960_47105[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47106 = state_46950;
state_46950 = G__47106;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__ = function(state_46950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1.call(this,state_46950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__;
})()
;})(__47094,switch__46664__auto__,c__46754__auto___47098,G__46937_47095,G__46937_47096__$1,n__31568__auto___47093,jobs,results,process,async))
})();
var state__46756__auto__ = (function (){var statearr_46961 = f__46755__auto__.call(null);
(statearr_46961[(6)] = c__46754__auto___47098);

return statearr_46961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(__47094,c__46754__auto___47098,G__46937_47095,G__46937_47096__$1,n__31568__auto___47093,jobs,results,process,async))
);


break;
case "async":
var c__46754__auto___47107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47094,c__46754__auto___47107,G__46937_47095,G__46937_47096__$1,n__31568__auto___47093,jobs,results,process,async){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (__47094,c__46754__auto___47107,G__46937_47095,G__46937_47096__$1,n__31568__auto___47093,jobs,results,process,async){
return (function (state_46974){
var state_val_46975 = (state_46974[(1)]);
if((state_val_46975 === (1))){
var state_46974__$1 = state_46974;
var statearr_46976_47108 = state_46974__$1;
(statearr_46976_47108[(2)] = null);

(statearr_46976_47108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46975 === (2))){
var state_46974__$1 = state_46974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46974__$1,(4),jobs);
} else {
if((state_val_46975 === (3))){
var inst_46972 = (state_46974[(2)]);
var state_46974__$1 = state_46974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46974__$1,inst_46972);
} else {
if((state_val_46975 === (4))){
var inst_46964 = (state_46974[(2)]);
var inst_46965 = async.call(null,inst_46964);
var state_46974__$1 = state_46974;
if(cljs.core.truth_(inst_46965)){
var statearr_46977_47109 = state_46974__$1;
(statearr_46977_47109[(1)] = (5));

} else {
var statearr_46978_47110 = state_46974__$1;
(statearr_46978_47110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46975 === (5))){
var state_46974__$1 = state_46974;
var statearr_46979_47111 = state_46974__$1;
(statearr_46979_47111[(2)] = null);

(statearr_46979_47111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46975 === (6))){
var state_46974__$1 = state_46974;
var statearr_46980_47112 = state_46974__$1;
(statearr_46980_47112[(2)] = null);

(statearr_46980_47112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46975 === (7))){
var inst_46970 = (state_46974[(2)]);
var state_46974__$1 = state_46974;
var statearr_46981_47113 = state_46974__$1;
(statearr_46981_47113[(2)] = inst_46970);

(statearr_46981_47113[(1)] = (3));


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
});})(__47094,c__46754__auto___47107,G__46937_47095,G__46937_47096__$1,n__31568__auto___47093,jobs,results,process,async))
;
return ((function (__47094,switch__46664__auto__,c__46754__auto___47107,G__46937_47095,G__46937_47096__$1,n__31568__auto___47093,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0 = (function (){
var statearr_46982 = [null,null,null,null,null,null,null];
(statearr_46982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__);

(statearr_46982[(1)] = (1));

return statearr_46982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1 = (function (state_46974){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_46974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e46983){if((e46983 instanceof Object)){
var ex__46668__auto__ = e46983;
var statearr_46984_47114 = state_46974;
(statearr_46984_47114[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47115 = state_46974;
state_46974 = G__47115;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__ = function(state_46974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1.call(this,state_46974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__;
})()
;})(__47094,switch__46664__auto__,c__46754__auto___47107,G__46937_47095,G__46937_47096__$1,n__31568__auto___47093,jobs,results,process,async))
})();
var state__46756__auto__ = (function (){var statearr_46985 = f__46755__auto__.call(null);
(statearr_46985[(6)] = c__46754__auto___47107);

return statearr_46985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(__47094,c__46754__auto___47107,G__46937_47095,G__46937_47096__$1,n__31568__auto___47093,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46937_47096__$1)].join('')));

}

var G__47116 = (__47094 + (1));
__47094 = G__47116;
continue;
} else {
}
break;
}

var c__46754__auto___47117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___47117,jobs,results,process,async){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___47117,jobs,results,process,async){
return (function (state_47007){
var state_val_47008 = (state_47007[(1)]);
if((state_val_47008 === (1))){
var state_47007__$1 = state_47007;
var statearr_47009_47118 = state_47007__$1;
(statearr_47009_47118[(2)] = null);

(statearr_47009_47118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (2))){
var state_47007__$1 = state_47007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47007__$1,(4),from);
} else {
if((state_val_47008 === (3))){
var inst_47005 = (state_47007[(2)]);
var state_47007__$1 = state_47007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47007__$1,inst_47005);
} else {
if((state_val_47008 === (4))){
var inst_46988 = (state_47007[(7)]);
var inst_46988__$1 = (state_47007[(2)]);
var inst_46989 = (inst_46988__$1 == null);
var state_47007__$1 = (function (){var statearr_47010 = state_47007;
(statearr_47010[(7)] = inst_46988__$1);

return statearr_47010;
})();
if(cljs.core.truth_(inst_46989)){
var statearr_47011_47119 = state_47007__$1;
(statearr_47011_47119[(1)] = (5));

} else {
var statearr_47012_47120 = state_47007__$1;
(statearr_47012_47120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (5))){
var inst_46991 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47007__$1 = state_47007;
var statearr_47013_47121 = state_47007__$1;
(statearr_47013_47121[(2)] = inst_46991);

(statearr_47013_47121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (6))){
var inst_46993 = (state_47007[(8)]);
var inst_46988 = (state_47007[(7)]);
var inst_46993__$1 = cljs.core.async.chan.call(null,(1));
var inst_46994 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46995 = [inst_46988,inst_46993__$1];
var inst_46996 = (new cljs.core.PersistentVector(null,2,(5),inst_46994,inst_46995,null));
var state_47007__$1 = (function (){var statearr_47014 = state_47007;
(statearr_47014[(8)] = inst_46993__$1);

return statearr_47014;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47007__$1,(8),jobs,inst_46996);
} else {
if((state_val_47008 === (7))){
var inst_47003 = (state_47007[(2)]);
var state_47007__$1 = state_47007;
var statearr_47015_47122 = state_47007__$1;
(statearr_47015_47122[(2)] = inst_47003);

(statearr_47015_47122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (8))){
var inst_46993 = (state_47007[(8)]);
var inst_46998 = (state_47007[(2)]);
var state_47007__$1 = (function (){var statearr_47016 = state_47007;
(statearr_47016[(9)] = inst_46998);

return statearr_47016;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47007__$1,(9),results,inst_46993);
} else {
if((state_val_47008 === (9))){
var inst_47000 = (state_47007[(2)]);
var state_47007__$1 = (function (){var statearr_47017 = state_47007;
(statearr_47017[(10)] = inst_47000);

return statearr_47017;
})();
var statearr_47018_47123 = state_47007__$1;
(statearr_47018_47123[(2)] = null);

(statearr_47018_47123[(1)] = (2));


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
});})(c__46754__auto___47117,jobs,results,process,async))
;
return ((function (switch__46664__auto__,c__46754__auto___47117,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0 = (function (){
var statearr_47019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__);

(statearr_47019[(1)] = (1));

return statearr_47019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1 = (function (state_47007){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_47007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e47020){if((e47020 instanceof Object)){
var ex__46668__auto__ = e47020;
var statearr_47021_47124 = state_47007;
(statearr_47021_47124[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47125 = state_47007;
state_47007 = G__47125;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__ = function(state_47007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1.call(this,state_47007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___47117,jobs,results,process,async))
})();
var state__46756__auto__ = (function (){var statearr_47022 = f__46755__auto__.call(null);
(statearr_47022[(6)] = c__46754__auto___47117);

return statearr_47022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___47117,jobs,results,process,async))
);


var c__46754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto__,jobs,results,process,async){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto__,jobs,results,process,async){
return (function (state_47060){
var state_val_47061 = (state_47060[(1)]);
if((state_val_47061 === (7))){
var inst_47056 = (state_47060[(2)]);
var state_47060__$1 = state_47060;
var statearr_47062_47126 = state_47060__$1;
(statearr_47062_47126[(2)] = inst_47056);

(statearr_47062_47126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (20))){
var state_47060__$1 = state_47060;
var statearr_47063_47127 = state_47060__$1;
(statearr_47063_47127[(2)] = null);

(statearr_47063_47127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (1))){
var state_47060__$1 = state_47060;
var statearr_47064_47128 = state_47060__$1;
(statearr_47064_47128[(2)] = null);

(statearr_47064_47128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (4))){
var inst_47025 = (state_47060[(7)]);
var inst_47025__$1 = (state_47060[(2)]);
var inst_47026 = (inst_47025__$1 == null);
var state_47060__$1 = (function (){var statearr_47065 = state_47060;
(statearr_47065[(7)] = inst_47025__$1);

return statearr_47065;
})();
if(cljs.core.truth_(inst_47026)){
var statearr_47066_47129 = state_47060__$1;
(statearr_47066_47129[(1)] = (5));

} else {
var statearr_47067_47130 = state_47060__$1;
(statearr_47067_47130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (15))){
var inst_47038 = (state_47060[(8)]);
var state_47060__$1 = state_47060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47060__$1,(18),to,inst_47038);
} else {
if((state_val_47061 === (21))){
var inst_47051 = (state_47060[(2)]);
var state_47060__$1 = state_47060;
var statearr_47068_47131 = state_47060__$1;
(statearr_47068_47131[(2)] = inst_47051);

(statearr_47068_47131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (13))){
var inst_47053 = (state_47060[(2)]);
var state_47060__$1 = (function (){var statearr_47069 = state_47060;
(statearr_47069[(9)] = inst_47053);

return statearr_47069;
})();
var statearr_47070_47132 = state_47060__$1;
(statearr_47070_47132[(2)] = null);

(statearr_47070_47132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (6))){
var inst_47025 = (state_47060[(7)]);
var state_47060__$1 = state_47060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47060__$1,(11),inst_47025);
} else {
if((state_val_47061 === (17))){
var inst_47046 = (state_47060[(2)]);
var state_47060__$1 = state_47060;
if(cljs.core.truth_(inst_47046)){
var statearr_47071_47133 = state_47060__$1;
(statearr_47071_47133[(1)] = (19));

} else {
var statearr_47072_47134 = state_47060__$1;
(statearr_47072_47134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (3))){
var inst_47058 = (state_47060[(2)]);
var state_47060__$1 = state_47060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47060__$1,inst_47058);
} else {
if((state_val_47061 === (12))){
var inst_47035 = (state_47060[(10)]);
var state_47060__$1 = state_47060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47060__$1,(14),inst_47035);
} else {
if((state_val_47061 === (2))){
var state_47060__$1 = state_47060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47060__$1,(4),results);
} else {
if((state_val_47061 === (19))){
var state_47060__$1 = state_47060;
var statearr_47073_47135 = state_47060__$1;
(statearr_47073_47135[(2)] = null);

(statearr_47073_47135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (11))){
var inst_47035 = (state_47060[(2)]);
var state_47060__$1 = (function (){var statearr_47074 = state_47060;
(statearr_47074[(10)] = inst_47035);

return statearr_47074;
})();
var statearr_47075_47136 = state_47060__$1;
(statearr_47075_47136[(2)] = null);

(statearr_47075_47136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (9))){
var state_47060__$1 = state_47060;
var statearr_47076_47137 = state_47060__$1;
(statearr_47076_47137[(2)] = null);

(statearr_47076_47137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (5))){
var state_47060__$1 = state_47060;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47077_47138 = state_47060__$1;
(statearr_47077_47138[(1)] = (8));

} else {
var statearr_47078_47139 = state_47060__$1;
(statearr_47078_47139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (14))){
var inst_47038 = (state_47060[(8)]);
var inst_47040 = (state_47060[(11)]);
var inst_47038__$1 = (state_47060[(2)]);
var inst_47039 = (inst_47038__$1 == null);
var inst_47040__$1 = cljs.core.not.call(null,inst_47039);
var state_47060__$1 = (function (){var statearr_47079 = state_47060;
(statearr_47079[(8)] = inst_47038__$1);

(statearr_47079[(11)] = inst_47040__$1);

return statearr_47079;
})();
if(inst_47040__$1){
var statearr_47080_47140 = state_47060__$1;
(statearr_47080_47140[(1)] = (15));

} else {
var statearr_47081_47141 = state_47060__$1;
(statearr_47081_47141[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (16))){
var inst_47040 = (state_47060[(11)]);
var state_47060__$1 = state_47060;
var statearr_47082_47142 = state_47060__$1;
(statearr_47082_47142[(2)] = inst_47040);

(statearr_47082_47142[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (10))){
var inst_47032 = (state_47060[(2)]);
var state_47060__$1 = state_47060;
var statearr_47083_47143 = state_47060__$1;
(statearr_47083_47143[(2)] = inst_47032);

(statearr_47083_47143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (18))){
var inst_47043 = (state_47060[(2)]);
var state_47060__$1 = state_47060;
var statearr_47084_47144 = state_47060__$1;
(statearr_47084_47144[(2)] = inst_47043);

(statearr_47084_47144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (8))){
var inst_47029 = cljs.core.async.close_BANG_.call(null,to);
var state_47060__$1 = state_47060;
var statearr_47085_47145 = state_47060__$1;
(statearr_47085_47145[(2)] = inst_47029);

(statearr_47085_47145[(1)] = (10));


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
});})(c__46754__auto__,jobs,results,process,async))
;
return ((function (switch__46664__auto__,c__46754__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0 = (function (){
var statearr_47086 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__);

(statearr_47086[(1)] = (1));

return statearr_47086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1 = (function (state_47060){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_47060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e47087){if((e47087 instanceof Object)){
var ex__46668__auto__ = e47087;
var statearr_47088_47146 = state_47060;
(statearr_47088_47146[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47147 = state_47060;
state_47060 = G__47147;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__ = function(state_47060){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1.call(this,state_47060);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46665__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto__,jobs,results,process,async))
})();
var state__46756__auto__ = (function (){var statearr_47089 = f__46755__auto__.call(null);
(statearr_47089[(6)] = c__46754__auto__);

return statearr_47089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto__,jobs,results,process,async))
);

return c__46754__auto__;
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
var G__47149 = arguments.length;
switch (G__47149) {
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
var G__47152 = arguments.length;
switch (G__47152) {
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
var G__47155 = arguments.length;
switch (G__47155) {
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
var c__46754__auto___47204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___47204,tc,fc){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___47204,tc,fc){
return (function (state_47181){
var state_val_47182 = (state_47181[(1)]);
if((state_val_47182 === (7))){
var inst_47177 = (state_47181[(2)]);
var state_47181__$1 = state_47181;
var statearr_47183_47205 = state_47181__$1;
(statearr_47183_47205[(2)] = inst_47177);

(statearr_47183_47205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47182 === (1))){
var state_47181__$1 = state_47181;
var statearr_47184_47206 = state_47181__$1;
(statearr_47184_47206[(2)] = null);

(statearr_47184_47206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47182 === (4))){
var inst_47158 = (state_47181[(7)]);
var inst_47158__$1 = (state_47181[(2)]);
var inst_47159 = (inst_47158__$1 == null);
var state_47181__$1 = (function (){var statearr_47185 = state_47181;
(statearr_47185[(7)] = inst_47158__$1);

return statearr_47185;
})();
if(cljs.core.truth_(inst_47159)){
var statearr_47186_47207 = state_47181__$1;
(statearr_47186_47207[(1)] = (5));

} else {
var statearr_47187_47208 = state_47181__$1;
(statearr_47187_47208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47182 === (13))){
var state_47181__$1 = state_47181;
var statearr_47188_47209 = state_47181__$1;
(statearr_47188_47209[(2)] = null);

(statearr_47188_47209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47182 === (6))){
var inst_47158 = (state_47181[(7)]);
var inst_47164 = p.call(null,inst_47158);
var state_47181__$1 = state_47181;
if(cljs.core.truth_(inst_47164)){
var statearr_47189_47210 = state_47181__$1;
(statearr_47189_47210[(1)] = (9));

} else {
var statearr_47190_47211 = state_47181__$1;
(statearr_47190_47211[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47182 === (3))){
var inst_47179 = (state_47181[(2)]);
var state_47181__$1 = state_47181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47181__$1,inst_47179);
} else {
if((state_val_47182 === (12))){
var state_47181__$1 = state_47181;
var statearr_47191_47212 = state_47181__$1;
(statearr_47191_47212[(2)] = null);

(statearr_47191_47212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47182 === (2))){
var state_47181__$1 = state_47181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47181__$1,(4),ch);
} else {
if((state_val_47182 === (11))){
var inst_47158 = (state_47181[(7)]);
var inst_47168 = (state_47181[(2)]);
var state_47181__$1 = state_47181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47181__$1,(8),inst_47168,inst_47158);
} else {
if((state_val_47182 === (9))){
var state_47181__$1 = state_47181;
var statearr_47192_47213 = state_47181__$1;
(statearr_47192_47213[(2)] = tc);

(statearr_47192_47213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47182 === (5))){
var inst_47161 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47162 = cljs.core.async.close_BANG_.call(null,fc);
var state_47181__$1 = (function (){var statearr_47193 = state_47181;
(statearr_47193[(8)] = inst_47161);

return statearr_47193;
})();
var statearr_47194_47214 = state_47181__$1;
(statearr_47194_47214[(2)] = inst_47162);

(statearr_47194_47214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47182 === (14))){
var inst_47175 = (state_47181[(2)]);
var state_47181__$1 = state_47181;
var statearr_47195_47215 = state_47181__$1;
(statearr_47195_47215[(2)] = inst_47175);

(statearr_47195_47215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47182 === (10))){
var state_47181__$1 = state_47181;
var statearr_47196_47216 = state_47181__$1;
(statearr_47196_47216[(2)] = fc);

(statearr_47196_47216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47182 === (8))){
var inst_47170 = (state_47181[(2)]);
var state_47181__$1 = state_47181;
if(cljs.core.truth_(inst_47170)){
var statearr_47197_47217 = state_47181__$1;
(statearr_47197_47217[(1)] = (12));

} else {
var statearr_47198_47218 = state_47181__$1;
(statearr_47198_47218[(1)] = (13));

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
});})(c__46754__auto___47204,tc,fc))
;
return ((function (switch__46664__auto__,c__46754__auto___47204,tc,fc){
return (function() {
var cljs$core$async$state_machine__46665__auto__ = null;
var cljs$core$async$state_machine__46665__auto____0 = (function (){
var statearr_47199 = [null,null,null,null,null,null,null,null,null];
(statearr_47199[(0)] = cljs$core$async$state_machine__46665__auto__);

(statearr_47199[(1)] = (1));

return statearr_47199;
});
var cljs$core$async$state_machine__46665__auto____1 = (function (state_47181){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_47181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e47200){if((e47200 instanceof Object)){
var ex__46668__auto__ = e47200;
var statearr_47201_47219 = state_47181;
(statearr_47201_47219[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47220 = state_47181;
state_47181 = G__47220;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$state_machine__46665__auto__ = function(state_47181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46665__auto____1.call(this,state_47181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46665__auto____0;
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46665__auto____1;
return cljs$core$async$state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___47204,tc,fc))
})();
var state__46756__auto__ = (function (){var statearr_47202 = f__46755__auto__.call(null);
(statearr_47202[(6)] = c__46754__auto___47204);

return statearr_47202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___47204,tc,fc))
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
var c__46754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto__){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto__){
return (function (state_47241){
var state_val_47242 = (state_47241[(1)]);
if((state_val_47242 === (7))){
var inst_47237 = (state_47241[(2)]);
var state_47241__$1 = state_47241;
var statearr_47243_47261 = state_47241__$1;
(statearr_47243_47261[(2)] = inst_47237);

(statearr_47243_47261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47242 === (1))){
var inst_47221 = init;
var state_47241__$1 = (function (){var statearr_47244 = state_47241;
(statearr_47244[(7)] = inst_47221);

return statearr_47244;
})();
var statearr_47245_47262 = state_47241__$1;
(statearr_47245_47262[(2)] = null);

(statearr_47245_47262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47242 === (4))){
var inst_47224 = (state_47241[(8)]);
var inst_47224__$1 = (state_47241[(2)]);
var inst_47225 = (inst_47224__$1 == null);
var state_47241__$1 = (function (){var statearr_47246 = state_47241;
(statearr_47246[(8)] = inst_47224__$1);

return statearr_47246;
})();
if(cljs.core.truth_(inst_47225)){
var statearr_47247_47263 = state_47241__$1;
(statearr_47247_47263[(1)] = (5));

} else {
var statearr_47248_47264 = state_47241__$1;
(statearr_47248_47264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47242 === (6))){
var inst_47228 = (state_47241[(9)]);
var inst_47221 = (state_47241[(7)]);
var inst_47224 = (state_47241[(8)]);
var inst_47228__$1 = f.call(null,inst_47221,inst_47224);
var inst_47229 = cljs.core.reduced_QMARK_.call(null,inst_47228__$1);
var state_47241__$1 = (function (){var statearr_47249 = state_47241;
(statearr_47249[(9)] = inst_47228__$1);

return statearr_47249;
})();
if(inst_47229){
var statearr_47250_47265 = state_47241__$1;
(statearr_47250_47265[(1)] = (8));

} else {
var statearr_47251_47266 = state_47241__$1;
(statearr_47251_47266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47242 === (3))){
var inst_47239 = (state_47241[(2)]);
var state_47241__$1 = state_47241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47241__$1,inst_47239);
} else {
if((state_val_47242 === (2))){
var state_47241__$1 = state_47241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47241__$1,(4),ch);
} else {
if((state_val_47242 === (9))){
var inst_47228 = (state_47241[(9)]);
var inst_47221 = inst_47228;
var state_47241__$1 = (function (){var statearr_47252 = state_47241;
(statearr_47252[(7)] = inst_47221);

return statearr_47252;
})();
var statearr_47253_47267 = state_47241__$1;
(statearr_47253_47267[(2)] = null);

(statearr_47253_47267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47242 === (5))){
var inst_47221 = (state_47241[(7)]);
var state_47241__$1 = state_47241;
var statearr_47254_47268 = state_47241__$1;
(statearr_47254_47268[(2)] = inst_47221);

(statearr_47254_47268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47242 === (10))){
var inst_47235 = (state_47241[(2)]);
var state_47241__$1 = state_47241;
var statearr_47255_47269 = state_47241__$1;
(statearr_47255_47269[(2)] = inst_47235);

(statearr_47255_47269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47242 === (8))){
var inst_47228 = (state_47241[(9)]);
var inst_47231 = cljs.core.deref.call(null,inst_47228);
var state_47241__$1 = state_47241;
var statearr_47256_47270 = state_47241__$1;
(statearr_47256_47270[(2)] = inst_47231);

(statearr_47256_47270[(1)] = (10));


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
});})(c__46754__auto__))
;
return ((function (switch__46664__auto__,c__46754__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46665__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46665__auto____0 = (function (){
var statearr_47257 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47257[(0)] = cljs$core$async$reduce_$_state_machine__46665__auto__);

(statearr_47257[(1)] = (1));

return statearr_47257;
});
var cljs$core$async$reduce_$_state_machine__46665__auto____1 = (function (state_47241){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_47241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e47258){if((e47258 instanceof Object)){
var ex__46668__auto__ = e47258;
var statearr_47259_47271 = state_47241;
(statearr_47259_47271[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47272 = state_47241;
state_47241 = G__47272;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46665__auto__ = function(state_47241){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46665__auto____1.call(this,state_47241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46665__auto____0;
cljs$core$async$reduce_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46665__auto____1;
return cljs$core$async$reduce_$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto__))
})();
var state__46756__auto__ = (function (){var statearr_47260 = f__46755__auto__.call(null);
(statearr_47260[(6)] = c__46754__auto__);

return statearr_47260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto__))
);

return c__46754__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__46754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto__,f__$1){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto__,f__$1){
return (function (state_47278){
var state_val_47279 = (state_47278[(1)]);
if((state_val_47279 === (1))){
var inst_47273 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47278__$1 = state_47278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47278__$1,(2),inst_47273);
} else {
if((state_val_47279 === (2))){
var inst_47275 = (state_47278[(2)]);
var inst_47276 = f__$1.call(null,inst_47275);
var state_47278__$1 = state_47278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47278__$1,inst_47276);
} else {
return null;
}
}
});})(c__46754__auto__,f__$1))
;
return ((function (switch__46664__auto__,c__46754__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__46665__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46665__auto____0 = (function (){
var statearr_47280 = [null,null,null,null,null,null,null];
(statearr_47280[(0)] = cljs$core$async$transduce_$_state_machine__46665__auto__);

(statearr_47280[(1)] = (1));

return statearr_47280;
});
var cljs$core$async$transduce_$_state_machine__46665__auto____1 = (function (state_47278){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_47278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e47281){if((e47281 instanceof Object)){
var ex__46668__auto__ = e47281;
var statearr_47282_47284 = state_47278;
(statearr_47282_47284[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47285 = state_47278;
state_47278 = G__47285;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46665__auto__ = function(state_47278){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46665__auto____1.call(this,state_47278);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46665__auto____0;
cljs$core$async$transduce_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46665__auto____1;
return cljs$core$async$transduce_$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto__,f__$1))
})();
var state__46756__auto__ = (function (){var statearr_47283 = f__46755__auto__.call(null);
(statearr_47283[(6)] = c__46754__auto__);

return statearr_47283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto__,f__$1))
);

return c__46754__auto__;
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
var G__47287 = arguments.length;
switch (G__47287) {
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
var c__46754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto__){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto__){
return (function (state_47312){
var state_val_47313 = (state_47312[(1)]);
if((state_val_47313 === (7))){
var inst_47294 = (state_47312[(2)]);
var state_47312__$1 = state_47312;
var statearr_47314_47335 = state_47312__$1;
(statearr_47314_47335[(2)] = inst_47294);

(statearr_47314_47335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (1))){
var inst_47288 = cljs.core.seq.call(null,coll);
var inst_47289 = inst_47288;
var state_47312__$1 = (function (){var statearr_47315 = state_47312;
(statearr_47315[(7)] = inst_47289);

return statearr_47315;
})();
var statearr_47316_47336 = state_47312__$1;
(statearr_47316_47336[(2)] = null);

(statearr_47316_47336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (4))){
var inst_47289 = (state_47312[(7)]);
var inst_47292 = cljs.core.first.call(null,inst_47289);
var state_47312__$1 = state_47312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47312__$1,(7),ch,inst_47292);
} else {
if((state_val_47313 === (13))){
var inst_47306 = (state_47312[(2)]);
var state_47312__$1 = state_47312;
var statearr_47317_47337 = state_47312__$1;
(statearr_47317_47337[(2)] = inst_47306);

(statearr_47317_47337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (6))){
var inst_47297 = (state_47312[(2)]);
var state_47312__$1 = state_47312;
if(cljs.core.truth_(inst_47297)){
var statearr_47318_47338 = state_47312__$1;
(statearr_47318_47338[(1)] = (8));

} else {
var statearr_47319_47339 = state_47312__$1;
(statearr_47319_47339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (3))){
var inst_47310 = (state_47312[(2)]);
var state_47312__$1 = state_47312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47312__$1,inst_47310);
} else {
if((state_val_47313 === (12))){
var state_47312__$1 = state_47312;
var statearr_47320_47340 = state_47312__$1;
(statearr_47320_47340[(2)] = null);

(statearr_47320_47340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (2))){
var inst_47289 = (state_47312[(7)]);
var state_47312__$1 = state_47312;
if(cljs.core.truth_(inst_47289)){
var statearr_47321_47341 = state_47312__$1;
(statearr_47321_47341[(1)] = (4));

} else {
var statearr_47322_47342 = state_47312__$1;
(statearr_47322_47342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (11))){
var inst_47303 = cljs.core.async.close_BANG_.call(null,ch);
var state_47312__$1 = state_47312;
var statearr_47323_47343 = state_47312__$1;
(statearr_47323_47343[(2)] = inst_47303);

(statearr_47323_47343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (9))){
var state_47312__$1 = state_47312;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47324_47344 = state_47312__$1;
(statearr_47324_47344[(1)] = (11));

} else {
var statearr_47325_47345 = state_47312__$1;
(statearr_47325_47345[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (5))){
var inst_47289 = (state_47312[(7)]);
var state_47312__$1 = state_47312;
var statearr_47326_47346 = state_47312__$1;
(statearr_47326_47346[(2)] = inst_47289);

(statearr_47326_47346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (10))){
var inst_47308 = (state_47312[(2)]);
var state_47312__$1 = state_47312;
var statearr_47327_47347 = state_47312__$1;
(statearr_47327_47347[(2)] = inst_47308);

(statearr_47327_47347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (8))){
var inst_47289 = (state_47312[(7)]);
var inst_47299 = cljs.core.next.call(null,inst_47289);
var inst_47289__$1 = inst_47299;
var state_47312__$1 = (function (){var statearr_47328 = state_47312;
(statearr_47328[(7)] = inst_47289__$1);

return statearr_47328;
})();
var statearr_47329_47348 = state_47312__$1;
(statearr_47329_47348[(2)] = null);

(statearr_47329_47348[(1)] = (2));


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
});})(c__46754__auto__))
;
return ((function (switch__46664__auto__,c__46754__auto__){
return (function() {
var cljs$core$async$state_machine__46665__auto__ = null;
var cljs$core$async$state_machine__46665__auto____0 = (function (){
var statearr_47330 = [null,null,null,null,null,null,null,null];
(statearr_47330[(0)] = cljs$core$async$state_machine__46665__auto__);

(statearr_47330[(1)] = (1));

return statearr_47330;
});
var cljs$core$async$state_machine__46665__auto____1 = (function (state_47312){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_47312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e47331){if((e47331 instanceof Object)){
var ex__46668__auto__ = e47331;
var statearr_47332_47349 = state_47312;
(statearr_47332_47349[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47350 = state_47312;
state_47312 = G__47350;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$state_machine__46665__auto__ = function(state_47312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46665__auto____1.call(this,state_47312);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46665__auto____0;
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46665__auto____1;
return cljs$core$async$state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto__))
})();
var state__46756__auto__ = (function (){var statearr_47333 = f__46755__auto__.call(null);
(statearr_47333[(6)] = c__46754__auto__);

return statearr_47333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto__))
);

return c__46754__auto__;
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
var x__31256__auto__ = (((_ == null))?null:_);
var m__31257__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,_);
} else {
var m__31257__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,_);
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
var x__31256__auto__ = (((m == null))?null:m);
var m__31257__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31257__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__31256__auto__ = (((m == null))?null:m);
var m__31257__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,m,ch);
} else {
var m__31257__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,m,ch);
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
var x__31256__auto__ = (((m == null))?null:m);
var m__31257__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,m);
} else {
var m__31257__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async47351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47351 = (function (ch,cs,meta47352){
this.ch = ch;
this.cs = cs;
this.meta47352 = meta47352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47353,meta47352__$1){
var self__ = this;
var _47353__$1 = this;
return (new cljs.core.async.t_cljs$core$async47351(self__.ch,self__.cs,meta47352__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47353){
var self__ = this;
var _47353__$1 = this;
return self__.meta47352;
});})(cs))
;

cljs.core.async.t_cljs$core$async47351.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47351.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47351.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47351.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47351.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47351.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47352","meta47352",885390546,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47351.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47351";

cljs.core.async.t_cljs$core$async47351.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async47351");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47351 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47351(ch__$1,cs__$1,meta47352){
return (new cljs.core.async.t_cljs$core$async47351(ch__$1,cs__$1,meta47352));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47351(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46754__auto___47573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___47573,cs,m,dchan,dctr,done){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___47573,cs,m,dchan,dctr,done){
return (function (state_47488){
var state_val_47489 = (state_47488[(1)]);
if((state_val_47489 === (7))){
var inst_47484 = (state_47488[(2)]);
var state_47488__$1 = state_47488;
var statearr_47490_47574 = state_47488__$1;
(statearr_47490_47574[(2)] = inst_47484);

(statearr_47490_47574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (20))){
var inst_47387 = (state_47488[(7)]);
var inst_47399 = cljs.core.first.call(null,inst_47387);
var inst_47400 = cljs.core.nth.call(null,inst_47399,(0),null);
var inst_47401 = cljs.core.nth.call(null,inst_47399,(1),null);
var state_47488__$1 = (function (){var statearr_47491 = state_47488;
(statearr_47491[(8)] = inst_47400);

return statearr_47491;
})();
if(cljs.core.truth_(inst_47401)){
var statearr_47492_47575 = state_47488__$1;
(statearr_47492_47575[(1)] = (22));

} else {
var statearr_47493_47576 = state_47488__$1;
(statearr_47493_47576[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (27))){
var inst_47436 = (state_47488[(9)]);
var inst_47356 = (state_47488[(10)]);
var inst_47429 = (state_47488[(11)]);
var inst_47431 = (state_47488[(12)]);
var inst_47436__$1 = cljs.core._nth.call(null,inst_47429,inst_47431);
var inst_47437 = cljs.core.async.put_BANG_.call(null,inst_47436__$1,inst_47356,done);
var state_47488__$1 = (function (){var statearr_47494 = state_47488;
(statearr_47494[(9)] = inst_47436__$1);

return statearr_47494;
})();
if(cljs.core.truth_(inst_47437)){
var statearr_47495_47577 = state_47488__$1;
(statearr_47495_47577[(1)] = (30));

} else {
var statearr_47496_47578 = state_47488__$1;
(statearr_47496_47578[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (1))){
var state_47488__$1 = state_47488;
var statearr_47497_47579 = state_47488__$1;
(statearr_47497_47579[(2)] = null);

(statearr_47497_47579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (24))){
var inst_47387 = (state_47488[(7)]);
var inst_47406 = (state_47488[(2)]);
var inst_47407 = cljs.core.next.call(null,inst_47387);
var inst_47365 = inst_47407;
var inst_47366 = null;
var inst_47367 = (0);
var inst_47368 = (0);
var state_47488__$1 = (function (){var statearr_47498 = state_47488;
(statearr_47498[(13)] = inst_47365);

(statearr_47498[(14)] = inst_47368);

(statearr_47498[(15)] = inst_47367);

(statearr_47498[(16)] = inst_47366);

(statearr_47498[(17)] = inst_47406);

return statearr_47498;
})();
var statearr_47499_47580 = state_47488__$1;
(statearr_47499_47580[(2)] = null);

(statearr_47499_47580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (39))){
var state_47488__$1 = state_47488;
var statearr_47503_47581 = state_47488__$1;
(statearr_47503_47581[(2)] = null);

(statearr_47503_47581[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (4))){
var inst_47356 = (state_47488[(10)]);
var inst_47356__$1 = (state_47488[(2)]);
var inst_47357 = (inst_47356__$1 == null);
var state_47488__$1 = (function (){var statearr_47504 = state_47488;
(statearr_47504[(10)] = inst_47356__$1);

return statearr_47504;
})();
if(cljs.core.truth_(inst_47357)){
var statearr_47505_47582 = state_47488__$1;
(statearr_47505_47582[(1)] = (5));

} else {
var statearr_47506_47583 = state_47488__$1;
(statearr_47506_47583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (15))){
var inst_47365 = (state_47488[(13)]);
var inst_47368 = (state_47488[(14)]);
var inst_47367 = (state_47488[(15)]);
var inst_47366 = (state_47488[(16)]);
var inst_47383 = (state_47488[(2)]);
var inst_47384 = (inst_47368 + (1));
var tmp47500 = inst_47365;
var tmp47501 = inst_47367;
var tmp47502 = inst_47366;
var inst_47365__$1 = tmp47500;
var inst_47366__$1 = tmp47502;
var inst_47367__$1 = tmp47501;
var inst_47368__$1 = inst_47384;
var state_47488__$1 = (function (){var statearr_47507 = state_47488;
(statearr_47507[(13)] = inst_47365__$1);

(statearr_47507[(14)] = inst_47368__$1);

(statearr_47507[(18)] = inst_47383);

(statearr_47507[(15)] = inst_47367__$1);

(statearr_47507[(16)] = inst_47366__$1);

return statearr_47507;
})();
var statearr_47508_47584 = state_47488__$1;
(statearr_47508_47584[(2)] = null);

(statearr_47508_47584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (21))){
var inst_47410 = (state_47488[(2)]);
var state_47488__$1 = state_47488;
var statearr_47512_47585 = state_47488__$1;
(statearr_47512_47585[(2)] = inst_47410);

(statearr_47512_47585[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (31))){
var inst_47436 = (state_47488[(9)]);
var inst_47440 = done.call(null,null);
var inst_47441 = cljs.core.async.untap_STAR_.call(null,m,inst_47436);
var state_47488__$1 = (function (){var statearr_47513 = state_47488;
(statearr_47513[(19)] = inst_47440);

return statearr_47513;
})();
var statearr_47514_47586 = state_47488__$1;
(statearr_47514_47586[(2)] = inst_47441);

(statearr_47514_47586[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (32))){
var inst_47428 = (state_47488[(20)]);
var inst_47430 = (state_47488[(21)]);
var inst_47429 = (state_47488[(11)]);
var inst_47431 = (state_47488[(12)]);
var inst_47443 = (state_47488[(2)]);
var inst_47444 = (inst_47431 + (1));
var tmp47509 = inst_47428;
var tmp47510 = inst_47430;
var tmp47511 = inst_47429;
var inst_47428__$1 = tmp47509;
var inst_47429__$1 = tmp47511;
var inst_47430__$1 = tmp47510;
var inst_47431__$1 = inst_47444;
var state_47488__$1 = (function (){var statearr_47515 = state_47488;
(statearr_47515[(20)] = inst_47428__$1);

(statearr_47515[(22)] = inst_47443);

(statearr_47515[(21)] = inst_47430__$1);

(statearr_47515[(11)] = inst_47429__$1);

(statearr_47515[(12)] = inst_47431__$1);

return statearr_47515;
})();
var statearr_47516_47587 = state_47488__$1;
(statearr_47516_47587[(2)] = null);

(statearr_47516_47587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (40))){
var inst_47456 = (state_47488[(23)]);
var inst_47460 = done.call(null,null);
var inst_47461 = cljs.core.async.untap_STAR_.call(null,m,inst_47456);
var state_47488__$1 = (function (){var statearr_47517 = state_47488;
(statearr_47517[(24)] = inst_47460);

return statearr_47517;
})();
var statearr_47518_47588 = state_47488__$1;
(statearr_47518_47588[(2)] = inst_47461);

(statearr_47518_47588[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (33))){
var inst_47447 = (state_47488[(25)]);
var inst_47449 = cljs.core.chunked_seq_QMARK_.call(null,inst_47447);
var state_47488__$1 = state_47488;
if(inst_47449){
var statearr_47519_47589 = state_47488__$1;
(statearr_47519_47589[(1)] = (36));

} else {
var statearr_47520_47590 = state_47488__$1;
(statearr_47520_47590[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (13))){
var inst_47377 = (state_47488[(26)]);
var inst_47380 = cljs.core.async.close_BANG_.call(null,inst_47377);
var state_47488__$1 = state_47488;
var statearr_47521_47591 = state_47488__$1;
(statearr_47521_47591[(2)] = inst_47380);

(statearr_47521_47591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (22))){
var inst_47400 = (state_47488[(8)]);
var inst_47403 = cljs.core.async.close_BANG_.call(null,inst_47400);
var state_47488__$1 = state_47488;
var statearr_47522_47592 = state_47488__$1;
(statearr_47522_47592[(2)] = inst_47403);

(statearr_47522_47592[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (36))){
var inst_47447 = (state_47488[(25)]);
var inst_47451 = cljs.core.chunk_first.call(null,inst_47447);
var inst_47452 = cljs.core.chunk_rest.call(null,inst_47447);
var inst_47453 = cljs.core.count.call(null,inst_47451);
var inst_47428 = inst_47452;
var inst_47429 = inst_47451;
var inst_47430 = inst_47453;
var inst_47431 = (0);
var state_47488__$1 = (function (){var statearr_47523 = state_47488;
(statearr_47523[(20)] = inst_47428);

(statearr_47523[(21)] = inst_47430);

(statearr_47523[(11)] = inst_47429);

(statearr_47523[(12)] = inst_47431);

return statearr_47523;
})();
var statearr_47524_47593 = state_47488__$1;
(statearr_47524_47593[(2)] = null);

(statearr_47524_47593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (41))){
var inst_47447 = (state_47488[(25)]);
var inst_47463 = (state_47488[(2)]);
var inst_47464 = cljs.core.next.call(null,inst_47447);
var inst_47428 = inst_47464;
var inst_47429 = null;
var inst_47430 = (0);
var inst_47431 = (0);
var state_47488__$1 = (function (){var statearr_47525 = state_47488;
(statearr_47525[(20)] = inst_47428);

(statearr_47525[(27)] = inst_47463);

(statearr_47525[(21)] = inst_47430);

(statearr_47525[(11)] = inst_47429);

(statearr_47525[(12)] = inst_47431);

return statearr_47525;
})();
var statearr_47526_47594 = state_47488__$1;
(statearr_47526_47594[(2)] = null);

(statearr_47526_47594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (43))){
var state_47488__$1 = state_47488;
var statearr_47527_47595 = state_47488__$1;
(statearr_47527_47595[(2)] = null);

(statearr_47527_47595[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (29))){
var inst_47472 = (state_47488[(2)]);
var state_47488__$1 = state_47488;
var statearr_47528_47596 = state_47488__$1;
(statearr_47528_47596[(2)] = inst_47472);

(statearr_47528_47596[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (44))){
var inst_47481 = (state_47488[(2)]);
var state_47488__$1 = (function (){var statearr_47529 = state_47488;
(statearr_47529[(28)] = inst_47481);

return statearr_47529;
})();
var statearr_47530_47597 = state_47488__$1;
(statearr_47530_47597[(2)] = null);

(statearr_47530_47597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (6))){
var inst_47420 = (state_47488[(29)]);
var inst_47419 = cljs.core.deref.call(null,cs);
var inst_47420__$1 = cljs.core.keys.call(null,inst_47419);
var inst_47421 = cljs.core.count.call(null,inst_47420__$1);
var inst_47422 = cljs.core.reset_BANG_.call(null,dctr,inst_47421);
var inst_47427 = cljs.core.seq.call(null,inst_47420__$1);
var inst_47428 = inst_47427;
var inst_47429 = null;
var inst_47430 = (0);
var inst_47431 = (0);
var state_47488__$1 = (function (){var statearr_47531 = state_47488;
(statearr_47531[(20)] = inst_47428);

(statearr_47531[(29)] = inst_47420__$1);

(statearr_47531[(21)] = inst_47430);

(statearr_47531[(30)] = inst_47422);

(statearr_47531[(11)] = inst_47429);

(statearr_47531[(12)] = inst_47431);

return statearr_47531;
})();
var statearr_47532_47598 = state_47488__$1;
(statearr_47532_47598[(2)] = null);

(statearr_47532_47598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (28))){
var inst_47428 = (state_47488[(20)]);
var inst_47447 = (state_47488[(25)]);
var inst_47447__$1 = cljs.core.seq.call(null,inst_47428);
var state_47488__$1 = (function (){var statearr_47533 = state_47488;
(statearr_47533[(25)] = inst_47447__$1);

return statearr_47533;
})();
if(inst_47447__$1){
var statearr_47534_47599 = state_47488__$1;
(statearr_47534_47599[(1)] = (33));

} else {
var statearr_47535_47600 = state_47488__$1;
(statearr_47535_47600[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (25))){
var inst_47430 = (state_47488[(21)]);
var inst_47431 = (state_47488[(12)]);
var inst_47433 = (inst_47431 < inst_47430);
var inst_47434 = inst_47433;
var state_47488__$1 = state_47488;
if(cljs.core.truth_(inst_47434)){
var statearr_47536_47601 = state_47488__$1;
(statearr_47536_47601[(1)] = (27));

} else {
var statearr_47537_47602 = state_47488__$1;
(statearr_47537_47602[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (34))){
var state_47488__$1 = state_47488;
var statearr_47538_47603 = state_47488__$1;
(statearr_47538_47603[(2)] = null);

(statearr_47538_47603[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (17))){
var state_47488__$1 = state_47488;
var statearr_47539_47604 = state_47488__$1;
(statearr_47539_47604[(2)] = null);

(statearr_47539_47604[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (3))){
var inst_47486 = (state_47488[(2)]);
var state_47488__$1 = state_47488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47488__$1,inst_47486);
} else {
if((state_val_47489 === (12))){
var inst_47415 = (state_47488[(2)]);
var state_47488__$1 = state_47488;
var statearr_47540_47605 = state_47488__$1;
(statearr_47540_47605[(2)] = inst_47415);

(statearr_47540_47605[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (2))){
var state_47488__$1 = state_47488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47488__$1,(4),ch);
} else {
if((state_val_47489 === (23))){
var state_47488__$1 = state_47488;
var statearr_47541_47606 = state_47488__$1;
(statearr_47541_47606[(2)] = null);

(statearr_47541_47606[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (35))){
var inst_47470 = (state_47488[(2)]);
var state_47488__$1 = state_47488;
var statearr_47542_47607 = state_47488__$1;
(statearr_47542_47607[(2)] = inst_47470);

(statearr_47542_47607[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (19))){
var inst_47387 = (state_47488[(7)]);
var inst_47391 = cljs.core.chunk_first.call(null,inst_47387);
var inst_47392 = cljs.core.chunk_rest.call(null,inst_47387);
var inst_47393 = cljs.core.count.call(null,inst_47391);
var inst_47365 = inst_47392;
var inst_47366 = inst_47391;
var inst_47367 = inst_47393;
var inst_47368 = (0);
var state_47488__$1 = (function (){var statearr_47543 = state_47488;
(statearr_47543[(13)] = inst_47365);

(statearr_47543[(14)] = inst_47368);

(statearr_47543[(15)] = inst_47367);

(statearr_47543[(16)] = inst_47366);

return statearr_47543;
})();
var statearr_47544_47608 = state_47488__$1;
(statearr_47544_47608[(2)] = null);

(statearr_47544_47608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (11))){
var inst_47365 = (state_47488[(13)]);
var inst_47387 = (state_47488[(7)]);
var inst_47387__$1 = cljs.core.seq.call(null,inst_47365);
var state_47488__$1 = (function (){var statearr_47545 = state_47488;
(statearr_47545[(7)] = inst_47387__$1);

return statearr_47545;
})();
if(inst_47387__$1){
var statearr_47546_47609 = state_47488__$1;
(statearr_47546_47609[(1)] = (16));

} else {
var statearr_47547_47610 = state_47488__$1;
(statearr_47547_47610[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (9))){
var inst_47417 = (state_47488[(2)]);
var state_47488__$1 = state_47488;
var statearr_47548_47611 = state_47488__$1;
(statearr_47548_47611[(2)] = inst_47417);

(statearr_47548_47611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (5))){
var inst_47363 = cljs.core.deref.call(null,cs);
var inst_47364 = cljs.core.seq.call(null,inst_47363);
var inst_47365 = inst_47364;
var inst_47366 = null;
var inst_47367 = (0);
var inst_47368 = (0);
var state_47488__$1 = (function (){var statearr_47549 = state_47488;
(statearr_47549[(13)] = inst_47365);

(statearr_47549[(14)] = inst_47368);

(statearr_47549[(15)] = inst_47367);

(statearr_47549[(16)] = inst_47366);

return statearr_47549;
})();
var statearr_47550_47612 = state_47488__$1;
(statearr_47550_47612[(2)] = null);

(statearr_47550_47612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (14))){
var state_47488__$1 = state_47488;
var statearr_47551_47613 = state_47488__$1;
(statearr_47551_47613[(2)] = null);

(statearr_47551_47613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (45))){
var inst_47478 = (state_47488[(2)]);
var state_47488__$1 = state_47488;
var statearr_47552_47614 = state_47488__$1;
(statearr_47552_47614[(2)] = inst_47478);

(statearr_47552_47614[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (26))){
var inst_47420 = (state_47488[(29)]);
var inst_47474 = (state_47488[(2)]);
var inst_47475 = cljs.core.seq.call(null,inst_47420);
var state_47488__$1 = (function (){var statearr_47553 = state_47488;
(statearr_47553[(31)] = inst_47474);

return statearr_47553;
})();
if(inst_47475){
var statearr_47554_47615 = state_47488__$1;
(statearr_47554_47615[(1)] = (42));

} else {
var statearr_47555_47616 = state_47488__$1;
(statearr_47555_47616[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (16))){
var inst_47387 = (state_47488[(7)]);
var inst_47389 = cljs.core.chunked_seq_QMARK_.call(null,inst_47387);
var state_47488__$1 = state_47488;
if(inst_47389){
var statearr_47556_47617 = state_47488__$1;
(statearr_47556_47617[(1)] = (19));

} else {
var statearr_47557_47618 = state_47488__$1;
(statearr_47557_47618[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (38))){
var inst_47467 = (state_47488[(2)]);
var state_47488__$1 = state_47488;
var statearr_47558_47619 = state_47488__$1;
(statearr_47558_47619[(2)] = inst_47467);

(statearr_47558_47619[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (30))){
var state_47488__$1 = state_47488;
var statearr_47559_47620 = state_47488__$1;
(statearr_47559_47620[(2)] = null);

(statearr_47559_47620[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (10))){
var inst_47368 = (state_47488[(14)]);
var inst_47366 = (state_47488[(16)]);
var inst_47376 = cljs.core._nth.call(null,inst_47366,inst_47368);
var inst_47377 = cljs.core.nth.call(null,inst_47376,(0),null);
var inst_47378 = cljs.core.nth.call(null,inst_47376,(1),null);
var state_47488__$1 = (function (){var statearr_47560 = state_47488;
(statearr_47560[(26)] = inst_47377);

return statearr_47560;
})();
if(cljs.core.truth_(inst_47378)){
var statearr_47561_47621 = state_47488__$1;
(statearr_47561_47621[(1)] = (13));

} else {
var statearr_47562_47622 = state_47488__$1;
(statearr_47562_47622[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (18))){
var inst_47413 = (state_47488[(2)]);
var state_47488__$1 = state_47488;
var statearr_47563_47623 = state_47488__$1;
(statearr_47563_47623[(2)] = inst_47413);

(statearr_47563_47623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (42))){
var state_47488__$1 = state_47488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47488__$1,(45),dchan);
} else {
if((state_val_47489 === (37))){
var inst_47456 = (state_47488[(23)]);
var inst_47356 = (state_47488[(10)]);
var inst_47447 = (state_47488[(25)]);
var inst_47456__$1 = cljs.core.first.call(null,inst_47447);
var inst_47457 = cljs.core.async.put_BANG_.call(null,inst_47456__$1,inst_47356,done);
var state_47488__$1 = (function (){var statearr_47564 = state_47488;
(statearr_47564[(23)] = inst_47456__$1);

return statearr_47564;
})();
if(cljs.core.truth_(inst_47457)){
var statearr_47565_47624 = state_47488__$1;
(statearr_47565_47624[(1)] = (39));

} else {
var statearr_47566_47625 = state_47488__$1;
(statearr_47566_47625[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47489 === (8))){
var inst_47368 = (state_47488[(14)]);
var inst_47367 = (state_47488[(15)]);
var inst_47370 = (inst_47368 < inst_47367);
var inst_47371 = inst_47370;
var state_47488__$1 = state_47488;
if(cljs.core.truth_(inst_47371)){
var statearr_47567_47626 = state_47488__$1;
(statearr_47567_47626[(1)] = (10));

} else {
var statearr_47568_47627 = state_47488__$1;
(statearr_47568_47627[(1)] = (11));

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
});})(c__46754__auto___47573,cs,m,dchan,dctr,done))
;
return ((function (switch__46664__auto__,c__46754__auto___47573,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46665__auto__ = null;
var cljs$core$async$mult_$_state_machine__46665__auto____0 = (function (){
var statearr_47569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47569[(0)] = cljs$core$async$mult_$_state_machine__46665__auto__);

(statearr_47569[(1)] = (1));

return statearr_47569;
});
var cljs$core$async$mult_$_state_machine__46665__auto____1 = (function (state_47488){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_47488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e47570){if((e47570 instanceof Object)){
var ex__46668__auto__ = e47570;
var statearr_47571_47628 = state_47488;
(statearr_47571_47628[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47629 = state_47488;
state_47488 = G__47629;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46665__auto__ = function(state_47488){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46665__auto____1.call(this,state_47488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46665__auto____0;
cljs$core$async$mult_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46665__auto____1;
return cljs$core$async$mult_$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___47573,cs,m,dchan,dctr,done))
})();
var state__46756__auto__ = (function (){var statearr_47572 = f__46755__auto__.call(null);
(statearr_47572[(6)] = c__46754__auto___47573);

return statearr_47572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___47573,cs,m,dchan,dctr,done))
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
var G__47631 = arguments.length;
switch (G__47631) {
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
var x__31256__auto__ = (((m == null))?null:m);
var m__31257__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,m,ch);
} else {
var m__31257__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,m,ch);
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
var x__31256__auto__ = (((m == null))?null:m);
var m__31257__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,m,ch);
} else {
var m__31257__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,m,ch);
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
var x__31256__auto__ = (((m == null))?null:m);
var m__31257__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,m);
} else {
var m__31257__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,m);
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
var x__31256__auto__ = (((m == null))?null:m);
var m__31257__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,m,state_map);
} else {
var m__31257__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,m,state_map);
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
var x__31256__auto__ = (((m == null))?null:m);
var m__31257__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,m,mode);
} else {
var m__31257__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31809__auto__ = [];
var len__31802__auto___47643 = arguments.length;
var i__31803__auto___47644 = (0);
while(true){
if((i__31803__auto___47644 < len__31802__auto___47643)){
args__31809__auto__.push((arguments[i__31803__auto___47644]));

var G__47645 = (i__31803__auto___47644 + (1));
i__31803__auto___47644 = G__47645;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((3) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31810__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47637){
var map__47638 = p__47637;
var map__47638__$1 = ((((!((map__47638 == null)))?((((map__47638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47638):map__47638);
var opts = map__47638__$1;
var statearr_47640_47646 = state;
(statearr_47640_47646[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__47638,map__47638__$1,opts){
return (function (val){
var statearr_47641_47647 = state;
(statearr_47641_47647[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47638,map__47638__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_47642_47648 = state;
(statearr_47642_47648[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47633){
var G__47634 = cljs.core.first.call(null,seq47633);
var seq47633__$1 = cljs.core.next.call(null,seq47633);
var G__47635 = cljs.core.first.call(null,seq47633__$1);
var seq47633__$2 = cljs.core.next.call(null,seq47633__$1);
var G__47636 = cljs.core.first.call(null,seq47633__$2);
var seq47633__$3 = cljs.core.next.call(null,seq47633__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47634,G__47635,G__47636,seq47633__$3);
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
if(typeof cljs.core.async.t_cljs$core$async47649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47649 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta47650){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta47650 = meta47650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47651,meta47650__$1){
var self__ = this;
var _47651__$1 = this;
return (new cljs.core.async.t_cljs$core$async47649(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta47650__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47651){
var self__ = this;
var _47651__$1 = this;
return self__.meta47650;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47649.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47649.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47649.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47649.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47649.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47649.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47649.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async47649.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta47650","meta47650",-927592166,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47649";

cljs.core.async.t_cljs$core$async47649.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async47649");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47649 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47649(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47650){
return (new cljs.core.async.t_cljs$core$async47649(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47650));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47649(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46754__auto___47813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___47813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___47813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47753){
var state_val_47754 = (state_47753[(1)]);
if((state_val_47754 === (7))){
var inst_47668 = (state_47753[(2)]);
var state_47753__$1 = state_47753;
var statearr_47755_47814 = state_47753__$1;
(statearr_47755_47814[(2)] = inst_47668);

(statearr_47755_47814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (20))){
var inst_47680 = (state_47753[(7)]);
var state_47753__$1 = state_47753;
var statearr_47756_47815 = state_47753__$1;
(statearr_47756_47815[(2)] = inst_47680);

(statearr_47756_47815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (27))){
var state_47753__$1 = state_47753;
var statearr_47757_47816 = state_47753__$1;
(statearr_47757_47816[(2)] = null);

(statearr_47757_47816[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (1))){
var inst_47655 = (state_47753[(8)]);
var inst_47655__$1 = calc_state.call(null);
var inst_47657 = (inst_47655__$1 == null);
var inst_47658 = cljs.core.not.call(null,inst_47657);
var state_47753__$1 = (function (){var statearr_47758 = state_47753;
(statearr_47758[(8)] = inst_47655__$1);

return statearr_47758;
})();
if(inst_47658){
var statearr_47759_47817 = state_47753__$1;
(statearr_47759_47817[(1)] = (2));

} else {
var statearr_47760_47818 = state_47753__$1;
(statearr_47760_47818[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (24))){
var inst_47727 = (state_47753[(9)]);
var inst_47713 = (state_47753[(10)]);
var inst_47704 = (state_47753[(11)]);
var inst_47727__$1 = inst_47704.call(null,inst_47713);
var state_47753__$1 = (function (){var statearr_47761 = state_47753;
(statearr_47761[(9)] = inst_47727__$1);

return statearr_47761;
})();
if(cljs.core.truth_(inst_47727__$1)){
var statearr_47762_47819 = state_47753__$1;
(statearr_47762_47819[(1)] = (29));

} else {
var statearr_47763_47820 = state_47753__$1;
(statearr_47763_47820[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (4))){
var inst_47671 = (state_47753[(2)]);
var state_47753__$1 = state_47753;
if(cljs.core.truth_(inst_47671)){
var statearr_47764_47821 = state_47753__$1;
(statearr_47764_47821[(1)] = (8));

} else {
var statearr_47765_47822 = state_47753__$1;
(statearr_47765_47822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (15))){
var inst_47698 = (state_47753[(2)]);
var state_47753__$1 = state_47753;
if(cljs.core.truth_(inst_47698)){
var statearr_47766_47823 = state_47753__$1;
(statearr_47766_47823[(1)] = (19));

} else {
var statearr_47767_47824 = state_47753__$1;
(statearr_47767_47824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (21))){
var inst_47703 = (state_47753[(12)]);
var inst_47703__$1 = (state_47753[(2)]);
var inst_47704 = cljs.core.get.call(null,inst_47703__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47705 = cljs.core.get.call(null,inst_47703__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47706 = cljs.core.get.call(null,inst_47703__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47753__$1 = (function (){var statearr_47768 = state_47753;
(statearr_47768[(12)] = inst_47703__$1);

(statearr_47768[(11)] = inst_47704);

(statearr_47768[(13)] = inst_47705);

return statearr_47768;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47753__$1,(22),inst_47706);
} else {
if((state_val_47754 === (31))){
var inst_47735 = (state_47753[(2)]);
var state_47753__$1 = state_47753;
if(cljs.core.truth_(inst_47735)){
var statearr_47769_47825 = state_47753__$1;
(statearr_47769_47825[(1)] = (32));

} else {
var statearr_47770_47826 = state_47753__$1;
(statearr_47770_47826[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (32))){
var inst_47712 = (state_47753[(14)]);
var state_47753__$1 = state_47753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47753__$1,(35),out,inst_47712);
} else {
if((state_val_47754 === (33))){
var inst_47703 = (state_47753[(12)]);
var inst_47680 = inst_47703;
var state_47753__$1 = (function (){var statearr_47771 = state_47753;
(statearr_47771[(7)] = inst_47680);

return statearr_47771;
})();
var statearr_47772_47827 = state_47753__$1;
(statearr_47772_47827[(2)] = null);

(statearr_47772_47827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (13))){
var inst_47680 = (state_47753[(7)]);
var inst_47687 = inst_47680.cljs$lang$protocol_mask$partition0$;
var inst_47688 = (inst_47687 & (64));
var inst_47689 = inst_47680.cljs$core$ISeq$;
var inst_47690 = (cljs.core.PROTOCOL_SENTINEL === inst_47689);
var inst_47691 = (inst_47688) || (inst_47690);
var state_47753__$1 = state_47753;
if(cljs.core.truth_(inst_47691)){
var statearr_47773_47828 = state_47753__$1;
(statearr_47773_47828[(1)] = (16));

} else {
var statearr_47774_47829 = state_47753__$1;
(statearr_47774_47829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (22))){
var inst_47712 = (state_47753[(14)]);
var inst_47713 = (state_47753[(10)]);
var inst_47711 = (state_47753[(2)]);
var inst_47712__$1 = cljs.core.nth.call(null,inst_47711,(0),null);
var inst_47713__$1 = cljs.core.nth.call(null,inst_47711,(1),null);
var inst_47714 = (inst_47712__$1 == null);
var inst_47715 = cljs.core._EQ_.call(null,inst_47713__$1,change);
var inst_47716 = (inst_47714) || (inst_47715);
var state_47753__$1 = (function (){var statearr_47775 = state_47753;
(statearr_47775[(14)] = inst_47712__$1);

(statearr_47775[(10)] = inst_47713__$1);

return statearr_47775;
})();
if(cljs.core.truth_(inst_47716)){
var statearr_47776_47830 = state_47753__$1;
(statearr_47776_47830[(1)] = (23));

} else {
var statearr_47777_47831 = state_47753__$1;
(statearr_47777_47831[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (36))){
var inst_47703 = (state_47753[(12)]);
var inst_47680 = inst_47703;
var state_47753__$1 = (function (){var statearr_47778 = state_47753;
(statearr_47778[(7)] = inst_47680);

return statearr_47778;
})();
var statearr_47779_47832 = state_47753__$1;
(statearr_47779_47832[(2)] = null);

(statearr_47779_47832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (29))){
var inst_47727 = (state_47753[(9)]);
var state_47753__$1 = state_47753;
var statearr_47780_47833 = state_47753__$1;
(statearr_47780_47833[(2)] = inst_47727);

(statearr_47780_47833[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (6))){
var state_47753__$1 = state_47753;
var statearr_47781_47834 = state_47753__$1;
(statearr_47781_47834[(2)] = false);

(statearr_47781_47834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (28))){
var inst_47723 = (state_47753[(2)]);
var inst_47724 = calc_state.call(null);
var inst_47680 = inst_47724;
var state_47753__$1 = (function (){var statearr_47782 = state_47753;
(statearr_47782[(15)] = inst_47723);

(statearr_47782[(7)] = inst_47680);

return statearr_47782;
})();
var statearr_47783_47835 = state_47753__$1;
(statearr_47783_47835[(2)] = null);

(statearr_47783_47835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (25))){
var inst_47749 = (state_47753[(2)]);
var state_47753__$1 = state_47753;
var statearr_47784_47836 = state_47753__$1;
(statearr_47784_47836[(2)] = inst_47749);

(statearr_47784_47836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (34))){
var inst_47747 = (state_47753[(2)]);
var state_47753__$1 = state_47753;
var statearr_47785_47837 = state_47753__$1;
(statearr_47785_47837[(2)] = inst_47747);

(statearr_47785_47837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (17))){
var state_47753__$1 = state_47753;
var statearr_47786_47838 = state_47753__$1;
(statearr_47786_47838[(2)] = false);

(statearr_47786_47838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (3))){
var state_47753__$1 = state_47753;
var statearr_47787_47839 = state_47753__$1;
(statearr_47787_47839[(2)] = false);

(statearr_47787_47839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (12))){
var inst_47751 = (state_47753[(2)]);
var state_47753__$1 = state_47753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47753__$1,inst_47751);
} else {
if((state_val_47754 === (2))){
var inst_47655 = (state_47753[(8)]);
var inst_47660 = inst_47655.cljs$lang$protocol_mask$partition0$;
var inst_47661 = (inst_47660 & (64));
var inst_47662 = inst_47655.cljs$core$ISeq$;
var inst_47663 = (cljs.core.PROTOCOL_SENTINEL === inst_47662);
var inst_47664 = (inst_47661) || (inst_47663);
var state_47753__$1 = state_47753;
if(cljs.core.truth_(inst_47664)){
var statearr_47788_47840 = state_47753__$1;
(statearr_47788_47840[(1)] = (5));

} else {
var statearr_47789_47841 = state_47753__$1;
(statearr_47789_47841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (23))){
var inst_47712 = (state_47753[(14)]);
var inst_47718 = (inst_47712 == null);
var state_47753__$1 = state_47753;
if(cljs.core.truth_(inst_47718)){
var statearr_47790_47842 = state_47753__$1;
(statearr_47790_47842[(1)] = (26));

} else {
var statearr_47791_47843 = state_47753__$1;
(statearr_47791_47843[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (35))){
var inst_47738 = (state_47753[(2)]);
var state_47753__$1 = state_47753;
if(cljs.core.truth_(inst_47738)){
var statearr_47792_47844 = state_47753__$1;
(statearr_47792_47844[(1)] = (36));

} else {
var statearr_47793_47845 = state_47753__$1;
(statearr_47793_47845[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (19))){
var inst_47680 = (state_47753[(7)]);
var inst_47700 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47680);
var state_47753__$1 = state_47753;
var statearr_47794_47846 = state_47753__$1;
(statearr_47794_47846[(2)] = inst_47700);

(statearr_47794_47846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (11))){
var inst_47680 = (state_47753[(7)]);
var inst_47684 = (inst_47680 == null);
var inst_47685 = cljs.core.not.call(null,inst_47684);
var state_47753__$1 = state_47753;
if(inst_47685){
var statearr_47795_47847 = state_47753__$1;
(statearr_47795_47847[(1)] = (13));

} else {
var statearr_47796_47848 = state_47753__$1;
(statearr_47796_47848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (9))){
var inst_47655 = (state_47753[(8)]);
var state_47753__$1 = state_47753;
var statearr_47797_47849 = state_47753__$1;
(statearr_47797_47849[(2)] = inst_47655);

(statearr_47797_47849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (5))){
var state_47753__$1 = state_47753;
var statearr_47798_47850 = state_47753__$1;
(statearr_47798_47850[(2)] = true);

(statearr_47798_47850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (14))){
var state_47753__$1 = state_47753;
var statearr_47799_47851 = state_47753__$1;
(statearr_47799_47851[(2)] = false);

(statearr_47799_47851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (26))){
var inst_47713 = (state_47753[(10)]);
var inst_47720 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47713);
var state_47753__$1 = state_47753;
var statearr_47800_47852 = state_47753__$1;
(statearr_47800_47852[(2)] = inst_47720);

(statearr_47800_47852[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (16))){
var state_47753__$1 = state_47753;
var statearr_47801_47853 = state_47753__$1;
(statearr_47801_47853[(2)] = true);

(statearr_47801_47853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (38))){
var inst_47743 = (state_47753[(2)]);
var state_47753__$1 = state_47753;
var statearr_47802_47854 = state_47753__$1;
(statearr_47802_47854[(2)] = inst_47743);

(statearr_47802_47854[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (30))){
var inst_47713 = (state_47753[(10)]);
var inst_47704 = (state_47753[(11)]);
var inst_47705 = (state_47753[(13)]);
var inst_47730 = cljs.core.empty_QMARK_.call(null,inst_47704);
var inst_47731 = inst_47705.call(null,inst_47713);
var inst_47732 = cljs.core.not.call(null,inst_47731);
var inst_47733 = (inst_47730) && (inst_47732);
var state_47753__$1 = state_47753;
var statearr_47803_47855 = state_47753__$1;
(statearr_47803_47855[(2)] = inst_47733);

(statearr_47803_47855[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (10))){
var inst_47655 = (state_47753[(8)]);
var inst_47676 = (state_47753[(2)]);
var inst_47677 = cljs.core.get.call(null,inst_47676,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47678 = cljs.core.get.call(null,inst_47676,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47679 = cljs.core.get.call(null,inst_47676,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47680 = inst_47655;
var state_47753__$1 = (function (){var statearr_47804 = state_47753;
(statearr_47804[(16)] = inst_47679);

(statearr_47804[(17)] = inst_47678);

(statearr_47804[(7)] = inst_47680);

(statearr_47804[(18)] = inst_47677);

return statearr_47804;
})();
var statearr_47805_47856 = state_47753__$1;
(statearr_47805_47856[(2)] = null);

(statearr_47805_47856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (18))){
var inst_47695 = (state_47753[(2)]);
var state_47753__$1 = state_47753;
var statearr_47806_47857 = state_47753__$1;
(statearr_47806_47857[(2)] = inst_47695);

(statearr_47806_47857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (37))){
var state_47753__$1 = state_47753;
var statearr_47807_47858 = state_47753__$1;
(statearr_47807_47858[(2)] = null);

(statearr_47807_47858[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (8))){
var inst_47655 = (state_47753[(8)]);
var inst_47673 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47655);
var state_47753__$1 = state_47753;
var statearr_47808_47859 = state_47753__$1;
(statearr_47808_47859[(2)] = inst_47673);

(statearr_47808_47859[(1)] = (10));


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
});})(c__46754__auto___47813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46664__auto__,c__46754__auto___47813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46665__auto__ = null;
var cljs$core$async$mix_$_state_machine__46665__auto____0 = (function (){
var statearr_47809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47809[(0)] = cljs$core$async$mix_$_state_machine__46665__auto__);

(statearr_47809[(1)] = (1));

return statearr_47809;
});
var cljs$core$async$mix_$_state_machine__46665__auto____1 = (function (state_47753){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_47753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e47810){if((e47810 instanceof Object)){
var ex__46668__auto__ = e47810;
var statearr_47811_47860 = state_47753;
(statearr_47811_47860[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47861 = state_47753;
state_47753 = G__47861;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46665__auto__ = function(state_47753){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46665__auto____1.call(this,state_47753);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46665__auto____0;
cljs$core$async$mix_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46665__auto____1;
return cljs$core$async$mix_$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___47813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46756__auto__ = (function (){var statearr_47812 = f__46755__auto__.call(null);
(statearr_47812[(6)] = c__46754__auto___47813);

return statearr_47812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___47813,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__31256__auto__ = (((p == null))?null:p);
var m__31257__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31257__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__31256__auto__ = (((p == null))?null:p);
var m__31257__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,p,v,ch);
} else {
var m__31257__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47863 = arguments.length;
switch (G__47863) {
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
var x__31256__auto__ = (((p == null))?null:p);
var m__31257__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,p);
} else {
var m__31257__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,p);
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
var x__31256__auto__ = (((p == null))?null:p);
var m__31257__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,p,v);
} else {
var m__31257__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,p,v);
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
var G__47867 = arguments.length;
switch (G__47867) {
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
var or__30522__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30522__auto__,mults){
return (function (p1__47865_SHARP_){
if(cljs.core.truth_(p1__47865_SHARP_.call(null,topic))){
return p1__47865_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__47865_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30522__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async47868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47868 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47869){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47869 = meta47869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47870,meta47869__$1){
var self__ = this;
var _47870__$1 = this;
return (new cljs.core.async.t_cljs$core$async47868(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47869__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47870){
var self__ = this;
var _47870__$1 = this;
return self__.meta47869;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47869","meta47869",53026590,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47868";

cljs.core.async.t_cljs$core$async47868.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async47868");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async47868 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47869){
return (new cljs.core.async.t_cljs$core$async47868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47869));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47868(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46754__auto___47988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___47988,mults,ensure_mult,p){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___47988,mults,ensure_mult,p){
return (function (state_47942){
var state_val_47943 = (state_47942[(1)]);
if((state_val_47943 === (7))){
var inst_47938 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47944_47989 = state_47942__$1;
(statearr_47944_47989[(2)] = inst_47938);

(statearr_47944_47989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (20))){
var state_47942__$1 = state_47942;
var statearr_47945_47990 = state_47942__$1;
(statearr_47945_47990[(2)] = null);

(statearr_47945_47990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (1))){
var state_47942__$1 = state_47942;
var statearr_47946_47991 = state_47942__$1;
(statearr_47946_47991[(2)] = null);

(statearr_47946_47991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (24))){
var inst_47921 = (state_47942[(7)]);
var inst_47930 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_47921);
var state_47942__$1 = state_47942;
var statearr_47947_47992 = state_47942__$1;
(statearr_47947_47992[(2)] = inst_47930);

(statearr_47947_47992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (4))){
var inst_47873 = (state_47942[(8)]);
var inst_47873__$1 = (state_47942[(2)]);
var inst_47874 = (inst_47873__$1 == null);
var state_47942__$1 = (function (){var statearr_47948 = state_47942;
(statearr_47948[(8)] = inst_47873__$1);

return statearr_47948;
})();
if(cljs.core.truth_(inst_47874)){
var statearr_47949_47993 = state_47942__$1;
(statearr_47949_47993[(1)] = (5));

} else {
var statearr_47950_47994 = state_47942__$1;
(statearr_47950_47994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (15))){
var inst_47915 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47951_47995 = state_47942__$1;
(statearr_47951_47995[(2)] = inst_47915);

(statearr_47951_47995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (21))){
var inst_47935 = (state_47942[(2)]);
var state_47942__$1 = (function (){var statearr_47952 = state_47942;
(statearr_47952[(9)] = inst_47935);

return statearr_47952;
})();
var statearr_47953_47996 = state_47942__$1;
(statearr_47953_47996[(2)] = null);

(statearr_47953_47996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (13))){
var inst_47897 = (state_47942[(10)]);
var inst_47899 = cljs.core.chunked_seq_QMARK_.call(null,inst_47897);
var state_47942__$1 = state_47942;
if(inst_47899){
var statearr_47954_47997 = state_47942__$1;
(statearr_47954_47997[(1)] = (16));

} else {
var statearr_47955_47998 = state_47942__$1;
(statearr_47955_47998[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (22))){
var inst_47927 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
if(cljs.core.truth_(inst_47927)){
var statearr_47956_47999 = state_47942__$1;
(statearr_47956_47999[(1)] = (23));

} else {
var statearr_47957_48000 = state_47942__$1;
(statearr_47957_48000[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (6))){
var inst_47873 = (state_47942[(8)]);
var inst_47923 = (state_47942[(11)]);
var inst_47921 = (state_47942[(7)]);
var inst_47921__$1 = topic_fn.call(null,inst_47873);
var inst_47922 = cljs.core.deref.call(null,mults);
var inst_47923__$1 = cljs.core.get.call(null,inst_47922,inst_47921__$1);
var state_47942__$1 = (function (){var statearr_47958 = state_47942;
(statearr_47958[(11)] = inst_47923__$1);

(statearr_47958[(7)] = inst_47921__$1);

return statearr_47958;
})();
if(cljs.core.truth_(inst_47923__$1)){
var statearr_47959_48001 = state_47942__$1;
(statearr_47959_48001[(1)] = (19));

} else {
var statearr_47960_48002 = state_47942__$1;
(statearr_47960_48002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (25))){
var inst_47932 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47961_48003 = state_47942__$1;
(statearr_47961_48003[(2)] = inst_47932);

(statearr_47961_48003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (17))){
var inst_47897 = (state_47942[(10)]);
var inst_47906 = cljs.core.first.call(null,inst_47897);
var inst_47907 = cljs.core.async.muxch_STAR_.call(null,inst_47906);
var inst_47908 = cljs.core.async.close_BANG_.call(null,inst_47907);
var inst_47909 = cljs.core.next.call(null,inst_47897);
var inst_47883 = inst_47909;
var inst_47884 = null;
var inst_47885 = (0);
var inst_47886 = (0);
var state_47942__$1 = (function (){var statearr_47962 = state_47942;
(statearr_47962[(12)] = inst_47885);

(statearr_47962[(13)] = inst_47908);

(statearr_47962[(14)] = inst_47886);

(statearr_47962[(15)] = inst_47883);

(statearr_47962[(16)] = inst_47884);

return statearr_47962;
})();
var statearr_47963_48004 = state_47942__$1;
(statearr_47963_48004[(2)] = null);

(statearr_47963_48004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (3))){
var inst_47940 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47942__$1,inst_47940);
} else {
if((state_val_47943 === (12))){
var inst_47917 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47964_48005 = state_47942__$1;
(statearr_47964_48005[(2)] = inst_47917);

(statearr_47964_48005[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (2))){
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47942__$1,(4),ch);
} else {
if((state_val_47943 === (23))){
var state_47942__$1 = state_47942;
var statearr_47965_48006 = state_47942__$1;
(statearr_47965_48006[(2)] = null);

(statearr_47965_48006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (19))){
var inst_47873 = (state_47942[(8)]);
var inst_47923 = (state_47942[(11)]);
var inst_47925 = cljs.core.async.muxch_STAR_.call(null,inst_47923);
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47942__$1,(22),inst_47925,inst_47873);
} else {
if((state_val_47943 === (11))){
var inst_47883 = (state_47942[(15)]);
var inst_47897 = (state_47942[(10)]);
var inst_47897__$1 = cljs.core.seq.call(null,inst_47883);
var state_47942__$1 = (function (){var statearr_47966 = state_47942;
(statearr_47966[(10)] = inst_47897__$1);

return statearr_47966;
})();
if(inst_47897__$1){
var statearr_47967_48007 = state_47942__$1;
(statearr_47967_48007[(1)] = (13));

} else {
var statearr_47968_48008 = state_47942__$1;
(statearr_47968_48008[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (9))){
var inst_47919 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47969_48009 = state_47942__$1;
(statearr_47969_48009[(2)] = inst_47919);

(statearr_47969_48009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (5))){
var inst_47880 = cljs.core.deref.call(null,mults);
var inst_47881 = cljs.core.vals.call(null,inst_47880);
var inst_47882 = cljs.core.seq.call(null,inst_47881);
var inst_47883 = inst_47882;
var inst_47884 = null;
var inst_47885 = (0);
var inst_47886 = (0);
var state_47942__$1 = (function (){var statearr_47970 = state_47942;
(statearr_47970[(12)] = inst_47885);

(statearr_47970[(14)] = inst_47886);

(statearr_47970[(15)] = inst_47883);

(statearr_47970[(16)] = inst_47884);

return statearr_47970;
})();
var statearr_47971_48010 = state_47942__$1;
(statearr_47971_48010[(2)] = null);

(statearr_47971_48010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (14))){
var state_47942__$1 = state_47942;
var statearr_47975_48011 = state_47942__$1;
(statearr_47975_48011[(2)] = null);

(statearr_47975_48011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (16))){
var inst_47897 = (state_47942[(10)]);
var inst_47901 = cljs.core.chunk_first.call(null,inst_47897);
var inst_47902 = cljs.core.chunk_rest.call(null,inst_47897);
var inst_47903 = cljs.core.count.call(null,inst_47901);
var inst_47883 = inst_47902;
var inst_47884 = inst_47901;
var inst_47885 = inst_47903;
var inst_47886 = (0);
var state_47942__$1 = (function (){var statearr_47976 = state_47942;
(statearr_47976[(12)] = inst_47885);

(statearr_47976[(14)] = inst_47886);

(statearr_47976[(15)] = inst_47883);

(statearr_47976[(16)] = inst_47884);

return statearr_47976;
})();
var statearr_47977_48012 = state_47942__$1;
(statearr_47977_48012[(2)] = null);

(statearr_47977_48012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (10))){
var inst_47885 = (state_47942[(12)]);
var inst_47886 = (state_47942[(14)]);
var inst_47883 = (state_47942[(15)]);
var inst_47884 = (state_47942[(16)]);
var inst_47891 = cljs.core._nth.call(null,inst_47884,inst_47886);
var inst_47892 = cljs.core.async.muxch_STAR_.call(null,inst_47891);
var inst_47893 = cljs.core.async.close_BANG_.call(null,inst_47892);
var inst_47894 = (inst_47886 + (1));
var tmp47972 = inst_47885;
var tmp47973 = inst_47883;
var tmp47974 = inst_47884;
var inst_47883__$1 = tmp47973;
var inst_47884__$1 = tmp47974;
var inst_47885__$1 = tmp47972;
var inst_47886__$1 = inst_47894;
var state_47942__$1 = (function (){var statearr_47978 = state_47942;
(statearr_47978[(12)] = inst_47885__$1);

(statearr_47978[(14)] = inst_47886__$1);

(statearr_47978[(15)] = inst_47883__$1);

(statearr_47978[(17)] = inst_47893);

(statearr_47978[(16)] = inst_47884__$1);

return statearr_47978;
})();
var statearr_47979_48013 = state_47942__$1;
(statearr_47979_48013[(2)] = null);

(statearr_47979_48013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (18))){
var inst_47912 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47980_48014 = state_47942__$1;
(statearr_47980_48014[(2)] = inst_47912);

(statearr_47980_48014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (8))){
var inst_47885 = (state_47942[(12)]);
var inst_47886 = (state_47942[(14)]);
var inst_47888 = (inst_47886 < inst_47885);
var inst_47889 = inst_47888;
var state_47942__$1 = state_47942;
if(cljs.core.truth_(inst_47889)){
var statearr_47981_48015 = state_47942__$1;
(statearr_47981_48015[(1)] = (10));

} else {
var statearr_47982_48016 = state_47942__$1;
(statearr_47982_48016[(1)] = (11));

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
});})(c__46754__auto___47988,mults,ensure_mult,p))
;
return ((function (switch__46664__auto__,c__46754__auto___47988,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46665__auto__ = null;
var cljs$core$async$state_machine__46665__auto____0 = (function (){
var statearr_47983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47983[(0)] = cljs$core$async$state_machine__46665__auto__);

(statearr_47983[(1)] = (1));

return statearr_47983;
});
var cljs$core$async$state_machine__46665__auto____1 = (function (state_47942){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_47942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e47984){if((e47984 instanceof Object)){
var ex__46668__auto__ = e47984;
var statearr_47985_48017 = state_47942;
(statearr_47985_48017[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48018 = state_47942;
state_47942 = G__48018;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$state_machine__46665__auto__ = function(state_47942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46665__auto____1.call(this,state_47942);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46665__auto____0;
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46665__auto____1;
return cljs$core$async$state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___47988,mults,ensure_mult,p))
})();
var state__46756__auto__ = (function (){var statearr_47986 = f__46755__auto__.call(null);
(statearr_47986[(6)] = c__46754__auto___47988);

return statearr_47986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___47988,mults,ensure_mult,p))
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
var G__48020 = arguments.length;
switch (G__48020) {
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
var G__48023 = arguments.length;
switch (G__48023) {
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
var G__48026 = arguments.length;
switch (G__48026) {
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
var c__46754__auto___48093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___48093,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___48093,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48065){
var state_val_48066 = (state_48065[(1)]);
if((state_val_48066 === (7))){
var state_48065__$1 = state_48065;
var statearr_48067_48094 = state_48065__$1;
(statearr_48067_48094[(2)] = null);

(statearr_48067_48094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (1))){
var state_48065__$1 = state_48065;
var statearr_48068_48095 = state_48065__$1;
(statearr_48068_48095[(2)] = null);

(statearr_48068_48095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (4))){
var inst_48029 = (state_48065[(7)]);
var inst_48031 = (inst_48029 < cnt);
var state_48065__$1 = state_48065;
if(cljs.core.truth_(inst_48031)){
var statearr_48069_48096 = state_48065__$1;
(statearr_48069_48096[(1)] = (6));

} else {
var statearr_48070_48097 = state_48065__$1;
(statearr_48070_48097[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (15))){
var inst_48061 = (state_48065[(2)]);
var state_48065__$1 = state_48065;
var statearr_48071_48098 = state_48065__$1;
(statearr_48071_48098[(2)] = inst_48061);

(statearr_48071_48098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (13))){
var inst_48054 = cljs.core.async.close_BANG_.call(null,out);
var state_48065__$1 = state_48065;
var statearr_48072_48099 = state_48065__$1;
(statearr_48072_48099[(2)] = inst_48054);

(statearr_48072_48099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (6))){
var state_48065__$1 = state_48065;
var statearr_48073_48100 = state_48065__$1;
(statearr_48073_48100[(2)] = null);

(statearr_48073_48100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (3))){
var inst_48063 = (state_48065[(2)]);
var state_48065__$1 = state_48065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48065__$1,inst_48063);
} else {
if((state_val_48066 === (12))){
var inst_48051 = (state_48065[(8)]);
var inst_48051__$1 = (state_48065[(2)]);
var inst_48052 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48051__$1);
var state_48065__$1 = (function (){var statearr_48074 = state_48065;
(statearr_48074[(8)] = inst_48051__$1);

return statearr_48074;
})();
if(cljs.core.truth_(inst_48052)){
var statearr_48075_48101 = state_48065__$1;
(statearr_48075_48101[(1)] = (13));

} else {
var statearr_48076_48102 = state_48065__$1;
(statearr_48076_48102[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (2))){
var inst_48028 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48029 = (0);
var state_48065__$1 = (function (){var statearr_48077 = state_48065;
(statearr_48077[(7)] = inst_48029);

(statearr_48077[(9)] = inst_48028);

return statearr_48077;
})();
var statearr_48078_48103 = state_48065__$1;
(statearr_48078_48103[(2)] = null);

(statearr_48078_48103[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (11))){
var inst_48029 = (state_48065[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48065,(10),Object,null,(9));
var inst_48038 = chs__$1.call(null,inst_48029);
var inst_48039 = done.call(null,inst_48029);
var inst_48040 = cljs.core.async.take_BANG_.call(null,inst_48038,inst_48039);
var state_48065__$1 = state_48065;
var statearr_48079_48104 = state_48065__$1;
(statearr_48079_48104[(2)] = inst_48040);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48065__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (9))){
var inst_48029 = (state_48065[(7)]);
var inst_48042 = (state_48065[(2)]);
var inst_48043 = (inst_48029 + (1));
var inst_48029__$1 = inst_48043;
var state_48065__$1 = (function (){var statearr_48080 = state_48065;
(statearr_48080[(10)] = inst_48042);

(statearr_48080[(7)] = inst_48029__$1);

return statearr_48080;
})();
var statearr_48081_48105 = state_48065__$1;
(statearr_48081_48105[(2)] = null);

(statearr_48081_48105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (5))){
var inst_48049 = (state_48065[(2)]);
var state_48065__$1 = (function (){var statearr_48082 = state_48065;
(statearr_48082[(11)] = inst_48049);

return statearr_48082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48065__$1,(12),dchan);
} else {
if((state_val_48066 === (14))){
var inst_48051 = (state_48065[(8)]);
var inst_48056 = cljs.core.apply.call(null,f,inst_48051);
var state_48065__$1 = state_48065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48065__$1,(16),out,inst_48056);
} else {
if((state_val_48066 === (16))){
var inst_48058 = (state_48065[(2)]);
var state_48065__$1 = (function (){var statearr_48083 = state_48065;
(statearr_48083[(12)] = inst_48058);

return statearr_48083;
})();
var statearr_48084_48106 = state_48065__$1;
(statearr_48084_48106[(2)] = null);

(statearr_48084_48106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (10))){
var inst_48033 = (state_48065[(2)]);
var inst_48034 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48065__$1 = (function (){var statearr_48085 = state_48065;
(statearr_48085[(13)] = inst_48033);

return statearr_48085;
})();
var statearr_48086_48107 = state_48065__$1;
(statearr_48086_48107[(2)] = inst_48034);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48065__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (8))){
var inst_48047 = (state_48065[(2)]);
var state_48065__$1 = state_48065;
var statearr_48087_48108 = state_48065__$1;
(statearr_48087_48108[(2)] = inst_48047);

(statearr_48087_48108[(1)] = (5));


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
});})(c__46754__auto___48093,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46664__auto__,c__46754__auto___48093,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46665__auto__ = null;
var cljs$core$async$state_machine__46665__auto____0 = (function (){
var statearr_48088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48088[(0)] = cljs$core$async$state_machine__46665__auto__);

(statearr_48088[(1)] = (1));

return statearr_48088;
});
var cljs$core$async$state_machine__46665__auto____1 = (function (state_48065){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_48065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e48089){if((e48089 instanceof Object)){
var ex__46668__auto__ = e48089;
var statearr_48090_48109 = state_48065;
(statearr_48090_48109[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48110 = state_48065;
state_48065 = G__48110;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$state_machine__46665__auto__ = function(state_48065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46665__auto____1.call(this,state_48065);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46665__auto____0;
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46665__auto____1;
return cljs$core$async$state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___48093,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46756__auto__ = (function (){var statearr_48091 = f__46755__auto__.call(null);
(statearr_48091[(6)] = c__46754__auto___48093);

return statearr_48091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___48093,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__48113 = arguments.length;
switch (G__48113) {
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
var c__46754__auto___48167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___48167,out){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___48167,out){
return (function (state_48145){
var state_val_48146 = (state_48145[(1)]);
if((state_val_48146 === (7))){
var inst_48124 = (state_48145[(7)]);
var inst_48125 = (state_48145[(8)]);
var inst_48124__$1 = (state_48145[(2)]);
var inst_48125__$1 = cljs.core.nth.call(null,inst_48124__$1,(0),null);
var inst_48126 = cljs.core.nth.call(null,inst_48124__$1,(1),null);
var inst_48127 = (inst_48125__$1 == null);
var state_48145__$1 = (function (){var statearr_48147 = state_48145;
(statearr_48147[(7)] = inst_48124__$1);

(statearr_48147[(8)] = inst_48125__$1);

(statearr_48147[(9)] = inst_48126);

return statearr_48147;
})();
if(cljs.core.truth_(inst_48127)){
var statearr_48148_48168 = state_48145__$1;
(statearr_48148_48168[(1)] = (8));

} else {
var statearr_48149_48169 = state_48145__$1;
(statearr_48149_48169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48146 === (1))){
var inst_48114 = cljs.core.vec.call(null,chs);
var inst_48115 = inst_48114;
var state_48145__$1 = (function (){var statearr_48150 = state_48145;
(statearr_48150[(10)] = inst_48115);

return statearr_48150;
})();
var statearr_48151_48170 = state_48145__$1;
(statearr_48151_48170[(2)] = null);

(statearr_48151_48170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48146 === (4))){
var inst_48115 = (state_48145[(10)]);
var state_48145__$1 = state_48145;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48145__$1,(7),inst_48115);
} else {
if((state_val_48146 === (6))){
var inst_48141 = (state_48145[(2)]);
var state_48145__$1 = state_48145;
var statearr_48152_48171 = state_48145__$1;
(statearr_48152_48171[(2)] = inst_48141);

(statearr_48152_48171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48146 === (3))){
var inst_48143 = (state_48145[(2)]);
var state_48145__$1 = state_48145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48145__$1,inst_48143);
} else {
if((state_val_48146 === (2))){
var inst_48115 = (state_48145[(10)]);
var inst_48117 = cljs.core.count.call(null,inst_48115);
var inst_48118 = (inst_48117 > (0));
var state_48145__$1 = state_48145;
if(cljs.core.truth_(inst_48118)){
var statearr_48154_48172 = state_48145__$1;
(statearr_48154_48172[(1)] = (4));

} else {
var statearr_48155_48173 = state_48145__$1;
(statearr_48155_48173[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48146 === (11))){
var inst_48115 = (state_48145[(10)]);
var inst_48134 = (state_48145[(2)]);
var tmp48153 = inst_48115;
var inst_48115__$1 = tmp48153;
var state_48145__$1 = (function (){var statearr_48156 = state_48145;
(statearr_48156[(10)] = inst_48115__$1);

(statearr_48156[(11)] = inst_48134);

return statearr_48156;
})();
var statearr_48157_48174 = state_48145__$1;
(statearr_48157_48174[(2)] = null);

(statearr_48157_48174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48146 === (9))){
var inst_48125 = (state_48145[(8)]);
var state_48145__$1 = state_48145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48145__$1,(11),out,inst_48125);
} else {
if((state_val_48146 === (5))){
var inst_48139 = cljs.core.async.close_BANG_.call(null,out);
var state_48145__$1 = state_48145;
var statearr_48158_48175 = state_48145__$1;
(statearr_48158_48175[(2)] = inst_48139);

(statearr_48158_48175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48146 === (10))){
var inst_48137 = (state_48145[(2)]);
var state_48145__$1 = state_48145;
var statearr_48159_48176 = state_48145__$1;
(statearr_48159_48176[(2)] = inst_48137);

(statearr_48159_48176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48146 === (8))){
var inst_48115 = (state_48145[(10)]);
var inst_48124 = (state_48145[(7)]);
var inst_48125 = (state_48145[(8)]);
var inst_48126 = (state_48145[(9)]);
var inst_48129 = (function (){var cs = inst_48115;
var vec__48120 = inst_48124;
var v = inst_48125;
var c = inst_48126;
return ((function (cs,vec__48120,v,c,inst_48115,inst_48124,inst_48125,inst_48126,state_val_48146,c__46754__auto___48167,out){
return (function (p1__48111_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48111_SHARP_);
});
;})(cs,vec__48120,v,c,inst_48115,inst_48124,inst_48125,inst_48126,state_val_48146,c__46754__auto___48167,out))
})();
var inst_48130 = cljs.core.filterv.call(null,inst_48129,inst_48115);
var inst_48115__$1 = inst_48130;
var state_48145__$1 = (function (){var statearr_48160 = state_48145;
(statearr_48160[(10)] = inst_48115__$1);

return statearr_48160;
})();
var statearr_48161_48177 = state_48145__$1;
(statearr_48161_48177[(2)] = null);

(statearr_48161_48177[(1)] = (2));


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
});})(c__46754__auto___48167,out))
;
return ((function (switch__46664__auto__,c__46754__auto___48167,out){
return (function() {
var cljs$core$async$state_machine__46665__auto__ = null;
var cljs$core$async$state_machine__46665__auto____0 = (function (){
var statearr_48162 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48162[(0)] = cljs$core$async$state_machine__46665__auto__);

(statearr_48162[(1)] = (1));

return statearr_48162;
});
var cljs$core$async$state_machine__46665__auto____1 = (function (state_48145){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_48145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e48163){if((e48163 instanceof Object)){
var ex__46668__auto__ = e48163;
var statearr_48164_48178 = state_48145;
(statearr_48164_48178[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48179 = state_48145;
state_48145 = G__48179;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$state_machine__46665__auto__ = function(state_48145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46665__auto____1.call(this,state_48145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46665__auto____0;
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46665__auto____1;
return cljs$core$async$state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___48167,out))
})();
var state__46756__auto__ = (function (){var statearr_48165 = f__46755__auto__.call(null);
(statearr_48165[(6)] = c__46754__auto___48167);

return statearr_48165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___48167,out))
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
var G__48181 = arguments.length;
switch (G__48181) {
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
var c__46754__auto___48226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___48226,out){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___48226,out){
return (function (state_48205){
var state_val_48206 = (state_48205[(1)]);
if((state_val_48206 === (7))){
var inst_48187 = (state_48205[(7)]);
var inst_48187__$1 = (state_48205[(2)]);
var inst_48188 = (inst_48187__$1 == null);
var inst_48189 = cljs.core.not.call(null,inst_48188);
var state_48205__$1 = (function (){var statearr_48207 = state_48205;
(statearr_48207[(7)] = inst_48187__$1);

return statearr_48207;
})();
if(inst_48189){
var statearr_48208_48227 = state_48205__$1;
(statearr_48208_48227[(1)] = (8));

} else {
var statearr_48209_48228 = state_48205__$1;
(statearr_48209_48228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48206 === (1))){
var inst_48182 = (0);
var state_48205__$1 = (function (){var statearr_48210 = state_48205;
(statearr_48210[(8)] = inst_48182);

return statearr_48210;
})();
var statearr_48211_48229 = state_48205__$1;
(statearr_48211_48229[(2)] = null);

(statearr_48211_48229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48206 === (4))){
var state_48205__$1 = state_48205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48205__$1,(7),ch);
} else {
if((state_val_48206 === (6))){
var inst_48200 = (state_48205[(2)]);
var state_48205__$1 = state_48205;
var statearr_48212_48230 = state_48205__$1;
(statearr_48212_48230[(2)] = inst_48200);

(statearr_48212_48230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48206 === (3))){
var inst_48202 = (state_48205[(2)]);
var inst_48203 = cljs.core.async.close_BANG_.call(null,out);
var state_48205__$1 = (function (){var statearr_48213 = state_48205;
(statearr_48213[(9)] = inst_48202);

return statearr_48213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48205__$1,inst_48203);
} else {
if((state_val_48206 === (2))){
var inst_48182 = (state_48205[(8)]);
var inst_48184 = (inst_48182 < n);
var state_48205__$1 = state_48205;
if(cljs.core.truth_(inst_48184)){
var statearr_48214_48231 = state_48205__$1;
(statearr_48214_48231[(1)] = (4));

} else {
var statearr_48215_48232 = state_48205__$1;
(statearr_48215_48232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48206 === (11))){
var inst_48182 = (state_48205[(8)]);
var inst_48192 = (state_48205[(2)]);
var inst_48193 = (inst_48182 + (1));
var inst_48182__$1 = inst_48193;
var state_48205__$1 = (function (){var statearr_48216 = state_48205;
(statearr_48216[(8)] = inst_48182__$1);

(statearr_48216[(10)] = inst_48192);

return statearr_48216;
})();
var statearr_48217_48233 = state_48205__$1;
(statearr_48217_48233[(2)] = null);

(statearr_48217_48233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48206 === (9))){
var state_48205__$1 = state_48205;
var statearr_48218_48234 = state_48205__$1;
(statearr_48218_48234[(2)] = null);

(statearr_48218_48234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48206 === (5))){
var state_48205__$1 = state_48205;
var statearr_48219_48235 = state_48205__$1;
(statearr_48219_48235[(2)] = null);

(statearr_48219_48235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48206 === (10))){
var inst_48197 = (state_48205[(2)]);
var state_48205__$1 = state_48205;
var statearr_48220_48236 = state_48205__$1;
(statearr_48220_48236[(2)] = inst_48197);

(statearr_48220_48236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48206 === (8))){
var inst_48187 = (state_48205[(7)]);
var state_48205__$1 = state_48205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48205__$1,(11),out,inst_48187);
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
});})(c__46754__auto___48226,out))
;
return ((function (switch__46664__auto__,c__46754__auto___48226,out){
return (function() {
var cljs$core$async$state_machine__46665__auto__ = null;
var cljs$core$async$state_machine__46665__auto____0 = (function (){
var statearr_48221 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48221[(0)] = cljs$core$async$state_machine__46665__auto__);

(statearr_48221[(1)] = (1));

return statearr_48221;
});
var cljs$core$async$state_machine__46665__auto____1 = (function (state_48205){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_48205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e48222){if((e48222 instanceof Object)){
var ex__46668__auto__ = e48222;
var statearr_48223_48237 = state_48205;
(statearr_48223_48237[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48238 = state_48205;
state_48205 = G__48238;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$state_machine__46665__auto__ = function(state_48205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46665__auto____1.call(this,state_48205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46665__auto____0;
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46665__auto____1;
return cljs$core$async$state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___48226,out))
})();
var state__46756__auto__ = (function (){var statearr_48224 = f__46755__auto__.call(null);
(statearr_48224[(6)] = c__46754__auto___48226);

return statearr_48224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___48226,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48240 = (function (f,ch,meta48241){
this.f = f;
this.ch = ch;
this.meta48241 = meta48241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48242,meta48241__$1){
var self__ = this;
var _48242__$1 = this;
return (new cljs.core.async.t_cljs$core$async48240(self__.f,self__.ch,meta48241__$1));
});

cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48242){
var self__ = this;
var _48242__$1 = this;
return self__.meta48241;
});

cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48243 = (function (f,ch,meta48241,_,fn1,meta48244){
this.f = f;
this.ch = ch;
this.meta48241 = meta48241;
this._ = _;
this.fn1 = fn1;
this.meta48244 = meta48244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48245,meta48244__$1){
var self__ = this;
var _48245__$1 = this;
return (new cljs.core.async.t_cljs$core$async48243(self__.f,self__.ch,self__.meta48241,self__._,self__.fn1,meta48244__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48245){
var self__ = this;
var _48245__$1 = this;
return self__.meta48244;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48239_SHARP_){
return f1.call(null,(((p1__48239_SHARP_ == null))?null:self__.f.call(null,p1__48239_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48243.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48241","meta48241",-1606320756,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48240","cljs.core.async/t_cljs$core$async48240",-846331234,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48244","meta48244",-1003157998,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48243";

cljs.core.async.t_cljs$core$async48243.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async48243");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48243 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48243(f__$1,ch__$1,meta48241__$1,___$2,fn1__$1,meta48244){
return (new cljs.core.async.t_cljs$core$async48243(f__$1,ch__$1,meta48241__$1,___$2,fn1__$1,meta48244));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48243(self__.f,self__.ch,self__.meta48241,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30510__auto__ = ret;
if(cljs.core.truth_(and__30510__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30510__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48241","meta48241",-1606320756,null)], null);
});

cljs.core.async.t_cljs$core$async48240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48240";

cljs.core.async.t_cljs$core$async48240.cljs$lang$ctorPrWriter = (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async48240");
});

cljs.core.async.__GT_t_cljs$core$async48240 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48240(f__$1,ch__$1,meta48241){
return (new cljs.core.async.t_cljs$core$async48240(f__$1,ch__$1,meta48241));
});

}

return (new cljs.core.async.t_cljs$core$async48240(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48246 = (function (f,ch,meta48247){
this.f = f;
this.ch = ch;
this.meta48247 = meta48247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48248,meta48247__$1){
var self__ = this;
var _48248__$1 = this;
return (new cljs.core.async.t_cljs$core$async48246(self__.f,self__.ch,meta48247__$1));
});

cljs.core.async.t_cljs$core$async48246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48248){
var self__ = this;
var _48248__$1 = this;
return self__.meta48247;
});

cljs.core.async.t_cljs$core$async48246.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48246.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48246.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48246.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48246.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48246.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48247","meta48247",1589602168,null)], null);
});

cljs.core.async.t_cljs$core$async48246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48246";

cljs.core.async.t_cljs$core$async48246.cljs$lang$ctorPrWriter = (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async48246");
});

cljs.core.async.__GT_t_cljs$core$async48246 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48246(f__$1,ch__$1,meta48247){
return (new cljs.core.async.t_cljs$core$async48246(f__$1,ch__$1,meta48247));
});

}

return (new cljs.core.async.t_cljs$core$async48246(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48249 = (function (p,ch,meta48250){
this.p = p;
this.ch = ch;
this.meta48250 = meta48250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48251,meta48250__$1){
var self__ = this;
var _48251__$1 = this;
return (new cljs.core.async.t_cljs$core$async48249(self__.p,self__.ch,meta48250__$1));
});

cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48251){
var self__ = this;
var _48251__$1 = this;
return self__.meta48250;
});

cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48250","meta48250",1909282552,null)], null);
});

cljs.core.async.t_cljs$core$async48249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48249";

cljs.core.async.t_cljs$core$async48249.cljs$lang$ctorPrWriter = (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async48249");
});

cljs.core.async.__GT_t_cljs$core$async48249 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48249(p__$1,ch__$1,meta48250){
return (new cljs.core.async.t_cljs$core$async48249(p__$1,ch__$1,meta48250));
});

}

return (new cljs.core.async.t_cljs$core$async48249(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48253 = arguments.length;
switch (G__48253) {
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
var c__46754__auto___48293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___48293,out){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___48293,out){
return (function (state_48274){
var state_val_48275 = (state_48274[(1)]);
if((state_val_48275 === (7))){
var inst_48270 = (state_48274[(2)]);
var state_48274__$1 = state_48274;
var statearr_48276_48294 = state_48274__$1;
(statearr_48276_48294[(2)] = inst_48270);

(statearr_48276_48294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (1))){
var state_48274__$1 = state_48274;
var statearr_48277_48295 = state_48274__$1;
(statearr_48277_48295[(2)] = null);

(statearr_48277_48295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (4))){
var inst_48256 = (state_48274[(7)]);
var inst_48256__$1 = (state_48274[(2)]);
var inst_48257 = (inst_48256__$1 == null);
var state_48274__$1 = (function (){var statearr_48278 = state_48274;
(statearr_48278[(7)] = inst_48256__$1);

return statearr_48278;
})();
if(cljs.core.truth_(inst_48257)){
var statearr_48279_48296 = state_48274__$1;
(statearr_48279_48296[(1)] = (5));

} else {
var statearr_48280_48297 = state_48274__$1;
(statearr_48280_48297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (6))){
var inst_48256 = (state_48274[(7)]);
var inst_48261 = p.call(null,inst_48256);
var state_48274__$1 = state_48274;
if(cljs.core.truth_(inst_48261)){
var statearr_48281_48298 = state_48274__$1;
(statearr_48281_48298[(1)] = (8));

} else {
var statearr_48282_48299 = state_48274__$1;
(statearr_48282_48299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (3))){
var inst_48272 = (state_48274[(2)]);
var state_48274__$1 = state_48274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48274__$1,inst_48272);
} else {
if((state_val_48275 === (2))){
var state_48274__$1 = state_48274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48274__$1,(4),ch);
} else {
if((state_val_48275 === (11))){
var inst_48264 = (state_48274[(2)]);
var state_48274__$1 = state_48274;
var statearr_48283_48300 = state_48274__$1;
(statearr_48283_48300[(2)] = inst_48264);

(statearr_48283_48300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (9))){
var state_48274__$1 = state_48274;
var statearr_48284_48301 = state_48274__$1;
(statearr_48284_48301[(2)] = null);

(statearr_48284_48301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (5))){
var inst_48259 = cljs.core.async.close_BANG_.call(null,out);
var state_48274__$1 = state_48274;
var statearr_48285_48302 = state_48274__$1;
(statearr_48285_48302[(2)] = inst_48259);

(statearr_48285_48302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (10))){
var inst_48267 = (state_48274[(2)]);
var state_48274__$1 = (function (){var statearr_48286 = state_48274;
(statearr_48286[(8)] = inst_48267);

return statearr_48286;
})();
var statearr_48287_48303 = state_48274__$1;
(statearr_48287_48303[(2)] = null);

(statearr_48287_48303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (8))){
var inst_48256 = (state_48274[(7)]);
var state_48274__$1 = state_48274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48274__$1,(11),out,inst_48256);
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
});})(c__46754__auto___48293,out))
;
return ((function (switch__46664__auto__,c__46754__auto___48293,out){
return (function() {
var cljs$core$async$state_machine__46665__auto__ = null;
var cljs$core$async$state_machine__46665__auto____0 = (function (){
var statearr_48288 = [null,null,null,null,null,null,null,null,null];
(statearr_48288[(0)] = cljs$core$async$state_machine__46665__auto__);

(statearr_48288[(1)] = (1));

return statearr_48288;
});
var cljs$core$async$state_machine__46665__auto____1 = (function (state_48274){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_48274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e48289){if((e48289 instanceof Object)){
var ex__46668__auto__ = e48289;
var statearr_48290_48304 = state_48274;
(statearr_48290_48304[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48305 = state_48274;
state_48274 = G__48305;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$state_machine__46665__auto__ = function(state_48274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46665__auto____1.call(this,state_48274);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46665__auto____0;
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46665__auto____1;
return cljs$core$async$state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___48293,out))
})();
var state__46756__auto__ = (function (){var statearr_48291 = f__46755__auto__.call(null);
(statearr_48291[(6)] = c__46754__auto___48293);

return statearr_48291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___48293,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48307 = arguments.length;
switch (G__48307) {
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
var c__46754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto__){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto__){
return (function (state_48370){
var state_val_48371 = (state_48370[(1)]);
if((state_val_48371 === (7))){
var inst_48366 = (state_48370[(2)]);
var state_48370__$1 = state_48370;
var statearr_48372_48410 = state_48370__$1;
(statearr_48372_48410[(2)] = inst_48366);

(statearr_48372_48410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (20))){
var inst_48336 = (state_48370[(7)]);
var inst_48347 = (state_48370[(2)]);
var inst_48348 = cljs.core.next.call(null,inst_48336);
var inst_48322 = inst_48348;
var inst_48323 = null;
var inst_48324 = (0);
var inst_48325 = (0);
var state_48370__$1 = (function (){var statearr_48373 = state_48370;
(statearr_48373[(8)] = inst_48324);

(statearr_48373[(9)] = inst_48325);

(statearr_48373[(10)] = inst_48323);

(statearr_48373[(11)] = inst_48347);

(statearr_48373[(12)] = inst_48322);

return statearr_48373;
})();
var statearr_48374_48411 = state_48370__$1;
(statearr_48374_48411[(2)] = null);

(statearr_48374_48411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (1))){
var state_48370__$1 = state_48370;
var statearr_48375_48412 = state_48370__$1;
(statearr_48375_48412[(2)] = null);

(statearr_48375_48412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (4))){
var inst_48311 = (state_48370[(13)]);
var inst_48311__$1 = (state_48370[(2)]);
var inst_48312 = (inst_48311__$1 == null);
var state_48370__$1 = (function (){var statearr_48376 = state_48370;
(statearr_48376[(13)] = inst_48311__$1);

return statearr_48376;
})();
if(cljs.core.truth_(inst_48312)){
var statearr_48377_48413 = state_48370__$1;
(statearr_48377_48413[(1)] = (5));

} else {
var statearr_48378_48414 = state_48370__$1;
(statearr_48378_48414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (15))){
var state_48370__$1 = state_48370;
var statearr_48382_48415 = state_48370__$1;
(statearr_48382_48415[(2)] = null);

(statearr_48382_48415[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (21))){
var state_48370__$1 = state_48370;
var statearr_48383_48416 = state_48370__$1;
(statearr_48383_48416[(2)] = null);

(statearr_48383_48416[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (13))){
var inst_48324 = (state_48370[(8)]);
var inst_48325 = (state_48370[(9)]);
var inst_48323 = (state_48370[(10)]);
var inst_48322 = (state_48370[(12)]);
var inst_48332 = (state_48370[(2)]);
var inst_48333 = (inst_48325 + (1));
var tmp48379 = inst_48324;
var tmp48380 = inst_48323;
var tmp48381 = inst_48322;
var inst_48322__$1 = tmp48381;
var inst_48323__$1 = tmp48380;
var inst_48324__$1 = tmp48379;
var inst_48325__$1 = inst_48333;
var state_48370__$1 = (function (){var statearr_48384 = state_48370;
(statearr_48384[(8)] = inst_48324__$1);

(statearr_48384[(14)] = inst_48332);

(statearr_48384[(9)] = inst_48325__$1);

(statearr_48384[(10)] = inst_48323__$1);

(statearr_48384[(12)] = inst_48322__$1);

return statearr_48384;
})();
var statearr_48385_48417 = state_48370__$1;
(statearr_48385_48417[(2)] = null);

(statearr_48385_48417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (22))){
var state_48370__$1 = state_48370;
var statearr_48386_48418 = state_48370__$1;
(statearr_48386_48418[(2)] = null);

(statearr_48386_48418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (6))){
var inst_48311 = (state_48370[(13)]);
var inst_48320 = f.call(null,inst_48311);
var inst_48321 = cljs.core.seq.call(null,inst_48320);
var inst_48322 = inst_48321;
var inst_48323 = null;
var inst_48324 = (0);
var inst_48325 = (0);
var state_48370__$1 = (function (){var statearr_48387 = state_48370;
(statearr_48387[(8)] = inst_48324);

(statearr_48387[(9)] = inst_48325);

(statearr_48387[(10)] = inst_48323);

(statearr_48387[(12)] = inst_48322);

return statearr_48387;
})();
var statearr_48388_48419 = state_48370__$1;
(statearr_48388_48419[(2)] = null);

(statearr_48388_48419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (17))){
var inst_48336 = (state_48370[(7)]);
var inst_48340 = cljs.core.chunk_first.call(null,inst_48336);
var inst_48341 = cljs.core.chunk_rest.call(null,inst_48336);
var inst_48342 = cljs.core.count.call(null,inst_48340);
var inst_48322 = inst_48341;
var inst_48323 = inst_48340;
var inst_48324 = inst_48342;
var inst_48325 = (0);
var state_48370__$1 = (function (){var statearr_48389 = state_48370;
(statearr_48389[(8)] = inst_48324);

(statearr_48389[(9)] = inst_48325);

(statearr_48389[(10)] = inst_48323);

(statearr_48389[(12)] = inst_48322);

return statearr_48389;
})();
var statearr_48390_48420 = state_48370__$1;
(statearr_48390_48420[(2)] = null);

(statearr_48390_48420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (3))){
var inst_48368 = (state_48370[(2)]);
var state_48370__$1 = state_48370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48370__$1,inst_48368);
} else {
if((state_val_48371 === (12))){
var inst_48356 = (state_48370[(2)]);
var state_48370__$1 = state_48370;
var statearr_48391_48421 = state_48370__$1;
(statearr_48391_48421[(2)] = inst_48356);

(statearr_48391_48421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (2))){
var state_48370__$1 = state_48370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48370__$1,(4),in$);
} else {
if((state_val_48371 === (23))){
var inst_48364 = (state_48370[(2)]);
var state_48370__$1 = state_48370;
var statearr_48392_48422 = state_48370__$1;
(statearr_48392_48422[(2)] = inst_48364);

(statearr_48392_48422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (19))){
var inst_48351 = (state_48370[(2)]);
var state_48370__$1 = state_48370;
var statearr_48393_48423 = state_48370__$1;
(statearr_48393_48423[(2)] = inst_48351);

(statearr_48393_48423[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (11))){
var inst_48322 = (state_48370[(12)]);
var inst_48336 = (state_48370[(7)]);
var inst_48336__$1 = cljs.core.seq.call(null,inst_48322);
var state_48370__$1 = (function (){var statearr_48394 = state_48370;
(statearr_48394[(7)] = inst_48336__$1);

return statearr_48394;
})();
if(inst_48336__$1){
var statearr_48395_48424 = state_48370__$1;
(statearr_48395_48424[(1)] = (14));

} else {
var statearr_48396_48425 = state_48370__$1;
(statearr_48396_48425[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (9))){
var inst_48358 = (state_48370[(2)]);
var inst_48359 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48370__$1 = (function (){var statearr_48397 = state_48370;
(statearr_48397[(15)] = inst_48358);

return statearr_48397;
})();
if(cljs.core.truth_(inst_48359)){
var statearr_48398_48426 = state_48370__$1;
(statearr_48398_48426[(1)] = (21));

} else {
var statearr_48399_48427 = state_48370__$1;
(statearr_48399_48427[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (5))){
var inst_48314 = cljs.core.async.close_BANG_.call(null,out);
var state_48370__$1 = state_48370;
var statearr_48400_48428 = state_48370__$1;
(statearr_48400_48428[(2)] = inst_48314);

(statearr_48400_48428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (14))){
var inst_48336 = (state_48370[(7)]);
var inst_48338 = cljs.core.chunked_seq_QMARK_.call(null,inst_48336);
var state_48370__$1 = state_48370;
if(inst_48338){
var statearr_48401_48429 = state_48370__$1;
(statearr_48401_48429[(1)] = (17));

} else {
var statearr_48402_48430 = state_48370__$1;
(statearr_48402_48430[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (16))){
var inst_48354 = (state_48370[(2)]);
var state_48370__$1 = state_48370;
var statearr_48403_48431 = state_48370__$1;
(statearr_48403_48431[(2)] = inst_48354);

(statearr_48403_48431[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48371 === (10))){
var inst_48325 = (state_48370[(9)]);
var inst_48323 = (state_48370[(10)]);
var inst_48330 = cljs.core._nth.call(null,inst_48323,inst_48325);
var state_48370__$1 = state_48370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48370__$1,(13),out,inst_48330);
} else {
if((state_val_48371 === (18))){
var inst_48336 = (state_48370[(7)]);
var inst_48345 = cljs.core.first.call(null,inst_48336);
var state_48370__$1 = state_48370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48370__$1,(20),out,inst_48345);
} else {
if((state_val_48371 === (8))){
var inst_48324 = (state_48370[(8)]);
var inst_48325 = (state_48370[(9)]);
var inst_48327 = (inst_48325 < inst_48324);
var inst_48328 = inst_48327;
var state_48370__$1 = state_48370;
if(cljs.core.truth_(inst_48328)){
var statearr_48404_48432 = state_48370__$1;
(statearr_48404_48432[(1)] = (10));

} else {
var statearr_48405_48433 = state_48370__$1;
(statearr_48405_48433[(1)] = (11));

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
});})(c__46754__auto__))
;
return ((function (switch__46664__auto__,c__46754__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46665__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46665__auto____0 = (function (){
var statearr_48406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48406[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46665__auto__);

(statearr_48406[(1)] = (1));

return statearr_48406;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46665__auto____1 = (function (state_48370){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_48370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e48407){if((e48407 instanceof Object)){
var ex__46668__auto__ = e48407;
var statearr_48408_48434 = state_48370;
(statearr_48408_48434[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48435 = state_48370;
state_48370 = G__48435;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46665__auto__ = function(state_48370){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46665__auto____1.call(this,state_48370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46665__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46665__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto__))
})();
var state__46756__auto__ = (function (){var statearr_48409 = f__46755__auto__.call(null);
(statearr_48409[(6)] = c__46754__auto__);

return statearr_48409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto__))
);

return c__46754__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48437 = arguments.length;
switch (G__48437) {
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
var G__48440 = arguments.length;
switch (G__48440) {
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
var G__48443 = arguments.length;
switch (G__48443) {
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
var c__46754__auto___48490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___48490,out){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___48490,out){
return (function (state_48467){
var state_val_48468 = (state_48467[(1)]);
if((state_val_48468 === (7))){
var inst_48462 = (state_48467[(2)]);
var state_48467__$1 = state_48467;
var statearr_48469_48491 = state_48467__$1;
(statearr_48469_48491[(2)] = inst_48462);

(statearr_48469_48491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (1))){
var inst_48444 = null;
var state_48467__$1 = (function (){var statearr_48470 = state_48467;
(statearr_48470[(7)] = inst_48444);

return statearr_48470;
})();
var statearr_48471_48492 = state_48467__$1;
(statearr_48471_48492[(2)] = null);

(statearr_48471_48492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (4))){
var inst_48447 = (state_48467[(8)]);
var inst_48447__$1 = (state_48467[(2)]);
var inst_48448 = (inst_48447__$1 == null);
var inst_48449 = cljs.core.not.call(null,inst_48448);
var state_48467__$1 = (function (){var statearr_48472 = state_48467;
(statearr_48472[(8)] = inst_48447__$1);

return statearr_48472;
})();
if(inst_48449){
var statearr_48473_48493 = state_48467__$1;
(statearr_48473_48493[(1)] = (5));

} else {
var statearr_48474_48494 = state_48467__$1;
(statearr_48474_48494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (6))){
var state_48467__$1 = state_48467;
var statearr_48475_48495 = state_48467__$1;
(statearr_48475_48495[(2)] = null);

(statearr_48475_48495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (3))){
var inst_48464 = (state_48467[(2)]);
var inst_48465 = cljs.core.async.close_BANG_.call(null,out);
var state_48467__$1 = (function (){var statearr_48476 = state_48467;
(statearr_48476[(9)] = inst_48464);

return statearr_48476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48467__$1,inst_48465);
} else {
if((state_val_48468 === (2))){
var state_48467__$1 = state_48467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48467__$1,(4),ch);
} else {
if((state_val_48468 === (11))){
var inst_48447 = (state_48467[(8)]);
var inst_48456 = (state_48467[(2)]);
var inst_48444 = inst_48447;
var state_48467__$1 = (function (){var statearr_48477 = state_48467;
(statearr_48477[(7)] = inst_48444);

(statearr_48477[(10)] = inst_48456);

return statearr_48477;
})();
var statearr_48478_48496 = state_48467__$1;
(statearr_48478_48496[(2)] = null);

(statearr_48478_48496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (9))){
var inst_48447 = (state_48467[(8)]);
var state_48467__$1 = state_48467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48467__$1,(11),out,inst_48447);
} else {
if((state_val_48468 === (5))){
var inst_48444 = (state_48467[(7)]);
var inst_48447 = (state_48467[(8)]);
var inst_48451 = cljs.core._EQ_.call(null,inst_48447,inst_48444);
var state_48467__$1 = state_48467;
if(inst_48451){
var statearr_48480_48497 = state_48467__$1;
(statearr_48480_48497[(1)] = (8));

} else {
var statearr_48481_48498 = state_48467__$1;
(statearr_48481_48498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (10))){
var inst_48459 = (state_48467[(2)]);
var state_48467__$1 = state_48467;
var statearr_48482_48499 = state_48467__$1;
(statearr_48482_48499[(2)] = inst_48459);

(statearr_48482_48499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (8))){
var inst_48444 = (state_48467[(7)]);
var tmp48479 = inst_48444;
var inst_48444__$1 = tmp48479;
var state_48467__$1 = (function (){var statearr_48483 = state_48467;
(statearr_48483[(7)] = inst_48444__$1);

return statearr_48483;
})();
var statearr_48484_48500 = state_48467__$1;
(statearr_48484_48500[(2)] = null);

(statearr_48484_48500[(1)] = (2));


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
});})(c__46754__auto___48490,out))
;
return ((function (switch__46664__auto__,c__46754__auto___48490,out){
return (function() {
var cljs$core$async$state_machine__46665__auto__ = null;
var cljs$core$async$state_machine__46665__auto____0 = (function (){
var statearr_48485 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48485[(0)] = cljs$core$async$state_machine__46665__auto__);

(statearr_48485[(1)] = (1));

return statearr_48485;
});
var cljs$core$async$state_machine__46665__auto____1 = (function (state_48467){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_48467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e48486){if((e48486 instanceof Object)){
var ex__46668__auto__ = e48486;
var statearr_48487_48501 = state_48467;
(statearr_48487_48501[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48502 = state_48467;
state_48467 = G__48502;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$state_machine__46665__auto__ = function(state_48467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46665__auto____1.call(this,state_48467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46665__auto____0;
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46665__auto____1;
return cljs$core$async$state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___48490,out))
})();
var state__46756__auto__ = (function (){var statearr_48488 = f__46755__auto__.call(null);
(statearr_48488[(6)] = c__46754__auto___48490);

return statearr_48488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___48490,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48504 = arguments.length;
switch (G__48504) {
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
var c__46754__auto___48570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___48570,out){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___48570,out){
return (function (state_48542){
var state_val_48543 = (state_48542[(1)]);
if((state_val_48543 === (7))){
var inst_48538 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
var statearr_48544_48571 = state_48542__$1;
(statearr_48544_48571[(2)] = inst_48538);

(statearr_48544_48571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (1))){
var inst_48505 = (new Array(n));
var inst_48506 = inst_48505;
var inst_48507 = (0);
var state_48542__$1 = (function (){var statearr_48545 = state_48542;
(statearr_48545[(7)] = inst_48507);

(statearr_48545[(8)] = inst_48506);

return statearr_48545;
})();
var statearr_48546_48572 = state_48542__$1;
(statearr_48546_48572[(2)] = null);

(statearr_48546_48572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (4))){
var inst_48510 = (state_48542[(9)]);
var inst_48510__$1 = (state_48542[(2)]);
var inst_48511 = (inst_48510__$1 == null);
var inst_48512 = cljs.core.not.call(null,inst_48511);
var state_48542__$1 = (function (){var statearr_48547 = state_48542;
(statearr_48547[(9)] = inst_48510__$1);

return statearr_48547;
})();
if(inst_48512){
var statearr_48548_48573 = state_48542__$1;
(statearr_48548_48573[(1)] = (5));

} else {
var statearr_48549_48574 = state_48542__$1;
(statearr_48549_48574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (15))){
var inst_48532 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
var statearr_48550_48575 = state_48542__$1;
(statearr_48550_48575[(2)] = inst_48532);

(statearr_48550_48575[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (13))){
var state_48542__$1 = state_48542;
var statearr_48551_48576 = state_48542__$1;
(statearr_48551_48576[(2)] = null);

(statearr_48551_48576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (6))){
var inst_48507 = (state_48542[(7)]);
var inst_48528 = (inst_48507 > (0));
var state_48542__$1 = state_48542;
if(cljs.core.truth_(inst_48528)){
var statearr_48552_48577 = state_48542__$1;
(statearr_48552_48577[(1)] = (12));

} else {
var statearr_48553_48578 = state_48542__$1;
(statearr_48553_48578[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (3))){
var inst_48540 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48542__$1,inst_48540);
} else {
if((state_val_48543 === (12))){
var inst_48506 = (state_48542[(8)]);
var inst_48530 = cljs.core.vec.call(null,inst_48506);
var state_48542__$1 = state_48542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48542__$1,(15),out,inst_48530);
} else {
if((state_val_48543 === (2))){
var state_48542__$1 = state_48542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48542__$1,(4),ch);
} else {
if((state_val_48543 === (11))){
var inst_48522 = (state_48542[(2)]);
var inst_48523 = (new Array(n));
var inst_48506 = inst_48523;
var inst_48507 = (0);
var state_48542__$1 = (function (){var statearr_48554 = state_48542;
(statearr_48554[(7)] = inst_48507);

(statearr_48554[(10)] = inst_48522);

(statearr_48554[(8)] = inst_48506);

return statearr_48554;
})();
var statearr_48555_48579 = state_48542__$1;
(statearr_48555_48579[(2)] = null);

(statearr_48555_48579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (9))){
var inst_48506 = (state_48542[(8)]);
var inst_48520 = cljs.core.vec.call(null,inst_48506);
var state_48542__$1 = state_48542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48542__$1,(11),out,inst_48520);
} else {
if((state_val_48543 === (5))){
var inst_48507 = (state_48542[(7)]);
var inst_48510 = (state_48542[(9)]);
var inst_48506 = (state_48542[(8)]);
var inst_48515 = (state_48542[(11)]);
var inst_48514 = (inst_48506[inst_48507] = inst_48510);
var inst_48515__$1 = (inst_48507 + (1));
var inst_48516 = (inst_48515__$1 < n);
var state_48542__$1 = (function (){var statearr_48556 = state_48542;
(statearr_48556[(12)] = inst_48514);

(statearr_48556[(11)] = inst_48515__$1);

return statearr_48556;
})();
if(cljs.core.truth_(inst_48516)){
var statearr_48557_48580 = state_48542__$1;
(statearr_48557_48580[(1)] = (8));

} else {
var statearr_48558_48581 = state_48542__$1;
(statearr_48558_48581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (14))){
var inst_48535 = (state_48542[(2)]);
var inst_48536 = cljs.core.async.close_BANG_.call(null,out);
var state_48542__$1 = (function (){var statearr_48560 = state_48542;
(statearr_48560[(13)] = inst_48535);

return statearr_48560;
})();
var statearr_48561_48582 = state_48542__$1;
(statearr_48561_48582[(2)] = inst_48536);

(statearr_48561_48582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (10))){
var inst_48526 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
var statearr_48562_48583 = state_48542__$1;
(statearr_48562_48583[(2)] = inst_48526);

(statearr_48562_48583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (8))){
var inst_48506 = (state_48542[(8)]);
var inst_48515 = (state_48542[(11)]);
var tmp48559 = inst_48506;
var inst_48506__$1 = tmp48559;
var inst_48507 = inst_48515;
var state_48542__$1 = (function (){var statearr_48563 = state_48542;
(statearr_48563[(7)] = inst_48507);

(statearr_48563[(8)] = inst_48506__$1);

return statearr_48563;
})();
var statearr_48564_48584 = state_48542__$1;
(statearr_48564_48584[(2)] = null);

(statearr_48564_48584[(1)] = (2));


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
});})(c__46754__auto___48570,out))
;
return ((function (switch__46664__auto__,c__46754__auto___48570,out){
return (function() {
var cljs$core$async$state_machine__46665__auto__ = null;
var cljs$core$async$state_machine__46665__auto____0 = (function (){
var statearr_48565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48565[(0)] = cljs$core$async$state_machine__46665__auto__);

(statearr_48565[(1)] = (1));

return statearr_48565;
});
var cljs$core$async$state_machine__46665__auto____1 = (function (state_48542){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_48542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e48566){if((e48566 instanceof Object)){
var ex__46668__auto__ = e48566;
var statearr_48567_48585 = state_48542;
(statearr_48567_48585[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48586 = state_48542;
state_48542 = G__48586;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$state_machine__46665__auto__ = function(state_48542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46665__auto____1.call(this,state_48542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46665__auto____0;
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46665__auto____1;
return cljs$core$async$state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___48570,out))
})();
var state__46756__auto__ = (function (){var statearr_48568 = f__46755__auto__.call(null);
(statearr_48568[(6)] = c__46754__auto___48570);

return statearr_48568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___48570,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48588 = arguments.length;
switch (G__48588) {
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
var c__46754__auto___48658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___48658,out){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___48658,out){
return (function (state_48630){
var state_val_48631 = (state_48630[(1)]);
if((state_val_48631 === (7))){
var inst_48626 = (state_48630[(2)]);
var state_48630__$1 = state_48630;
var statearr_48632_48659 = state_48630__$1;
(statearr_48632_48659[(2)] = inst_48626);

(statearr_48632_48659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (1))){
var inst_48589 = [];
var inst_48590 = inst_48589;
var inst_48591 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48630__$1 = (function (){var statearr_48633 = state_48630;
(statearr_48633[(7)] = inst_48591);

(statearr_48633[(8)] = inst_48590);

return statearr_48633;
})();
var statearr_48634_48660 = state_48630__$1;
(statearr_48634_48660[(2)] = null);

(statearr_48634_48660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (4))){
var inst_48594 = (state_48630[(9)]);
var inst_48594__$1 = (state_48630[(2)]);
var inst_48595 = (inst_48594__$1 == null);
var inst_48596 = cljs.core.not.call(null,inst_48595);
var state_48630__$1 = (function (){var statearr_48635 = state_48630;
(statearr_48635[(9)] = inst_48594__$1);

return statearr_48635;
})();
if(inst_48596){
var statearr_48636_48661 = state_48630__$1;
(statearr_48636_48661[(1)] = (5));

} else {
var statearr_48637_48662 = state_48630__$1;
(statearr_48637_48662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (15))){
var inst_48620 = (state_48630[(2)]);
var state_48630__$1 = state_48630;
var statearr_48638_48663 = state_48630__$1;
(statearr_48638_48663[(2)] = inst_48620);

(statearr_48638_48663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (13))){
var state_48630__$1 = state_48630;
var statearr_48639_48664 = state_48630__$1;
(statearr_48639_48664[(2)] = null);

(statearr_48639_48664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (6))){
var inst_48590 = (state_48630[(8)]);
var inst_48615 = inst_48590.length;
var inst_48616 = (inst_48615 > (0));
var state_48630__$1 = state_48630;
if(cljs.core.truth_(inst_48616)){
var statearr_48640_48665 = state_48630__$1;
(statearr_48640_48665[(1)] = (12));

} else {
var statearr_48641_48666 = state_48630__$1;
(statearr_48641_48666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (3))){
var inst_48628 = (state_48630[(2)]);
var state_48630__$1 = state_48630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48630__$1,inst_48628);
} else {
if((state_val_48631 === (12))){
var inst_48590 = (state_48630[(8)]);
var inst_48618 = cljs.core.vec.call(null,inst_48590);
var state_48630__$1 = state_48630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48630__$1,(15),out,inst_48618);
} else {
if((state_val_48631 === (2))){
var state_48630__$1 = state_48630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48630__$1,(4),ch);
} else {
if((state_val_48631 === (11))){
var inst_48594 = (state_48630[(9)]);
var inst_48598 = (state_48630[(10)]);
var inst_48608 = (state_48630[(2)]);
var inst_48609 = [];
var inst_48610 = inst_48609.push(inst_48594);
var inst_48590 = inst_48609;
var inst_48591 = inst_48598;
var state_48630__$1 = (function (){var statearr_48642 = state_48630;
(statearr_48642[(11)] = inst_48610);

(statearr_48642[(7)] = inst_48591);

(statearr_48642[(12)] = inst_48608);

(statearr_48642[(8)] = inst_48590);

return statearr_48642;
})();
var statearr_48643_48667 = state_48630__$1;
(statearr_48643_48667[(2)] = null);

(statearr_48643_48667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (9))){
var inst_48590 = (state_48630[(8)]);
var inst_48606 = cljs.core.vec.call(null,inst_48590);
var state_48630__$1 = state_48630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48630__$1,(11),out,inst_48606);
} else {
if((state_val_48631 === (5))){
var inst_48591 = (state_48630[(7)]);
var inst_48594 = (state_48630[(9)]);
var inst_48598 = (state_48630[(10)]);
var inst_48598__$1 = f.call(null,inst_48594);
var inst_48599 = cljs.core._EQ_.call(null,inst_48598__$1,inst_48591);
var inst_48600 = cljs.core.keyword_identical_QMARK_.call(null,inst_48591,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48601 = (inst_48599) || (inst_48600);
var state_48630__$1 = (function (){var statearr_48644 = state_48630;
(statearr_48644[(10)] = inst_48598__$1);

return statearr_48644;
})();
if(cljs.core.truth_(inst_48601)){
var statearr_48645_48668 = state_48630__$1;
(statearr_48645_48668[(1)] = (8));

} else {
var statearr_48646_48669 = state_48630__$1;
(statearr_48646_48669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (14))){
var inst_48623 = (state_48630[(2)]);
var inst_48624 = cljs.core.async.close_BANG_.call(null,out);
var state_48630__$1 = (function (){var statearr_48648 = state_48630;
(statearr_48648[(13)] = inst_48623);

return statearr_48648;
})();
var statearr_48649_48670 = state_48630__$1;
(statearr_48649_48670[(2)] = inst_48624);

(statearr_48649_48670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (10))){
var inst_48613 = (state_48630[(2)]);
var state_48630__$1 = state_48630;
var statearr_48650_48671 = state_48630__$1;
(statearr_48650_48671[(2)] = inst_48613);

(statearr_48650_48671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48631 === (8))){
var inst_48594 = (state_48630[(9)]);
var inst_48598 = (state_48630[(10)]);
var inst_48590 = (state_48630[(8)]);
var inst_48603 = inst_48590.push(inst_48594);
var tmp48647 = inst_48590;
var inst_48590__$1 = tmp48647;
var inst_48591 = inst_48598;
var state_48630__$1 = (function (){var statearr_48651 = state_48630;
(statearr_48651[(7)] = inst_48591);

(statearr_48651[(8)] = inst_48590__$1);

(statearr_48651[(14)] = inst_48603);

return statearr_48651;
})();
var statearr_48652_48672 = state_48630__$1;
(statearr_48652_48672[(2)] = null);

(statearr_48652_48672[(1)] = (2));


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
});})(c__46754__auto___48658,out))
;
return ((function (switch__46664__auto__,c__46754__auto___48658,out){
return (function() {
var cljs$core$async$state_machine__46665__auto__ = null;
var cljs$core$async$state_machine__46665__auto____0 = (function (){
var statearr_48653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48653[(0)] = cljs$core$async$state_machine__46665__auto__);

(statearr_48653[(1)] = (1));

return statearr_48653;
});
var cljs$core$async$state_machine__46665__auto____1 = (function (state_48630){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_48630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e48654){if((e48654 instanceof Object)){
var ex__46668__auto__ = e48654;
var statearr_48655_48673 = state_48630;
(statearr_48655_48673[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48674 = state_48630;
state_48630 = G__48674;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
cljs$core$async$state_machine__46665__auto__ = function(state_48630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46665__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46665__auto____1.call(this,state_48630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46665__auto____0;
cljs$core$async$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46665__auto____1;
return cljs$core$async$state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___48658,out))
})();
var state__46756__auto__ = (function (){var statearr_48656 = f__46755__auto__.call(null);
(statearr_48656[(6)] = c__46754__auto___48658);

return statearr_48656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___48658,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510703505526
