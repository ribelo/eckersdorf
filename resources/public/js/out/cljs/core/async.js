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
var G__46982 = arguments.length;
switch (G__46982) {
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
if(typeof cljs.core.async.t_cljs$core$async46983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46983 = (function (f,blockable,meta46984){
this.f = f;
this.blockable = blockable;
this.meta46984 = meta46984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46985,meta46984__$1){
var self__ = this;
var _46985__$1 = this;
return (new cljs.core.async.t_cljs$core$async46983(self__.f,self__.blockable,meta46984__$1));
});

cljs.core.async.t_cljs$core$async46983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46985){
var self__ = this;
var _46985__$1 = this;
return self__.meta46984;
});

cljs.core.async.t_cljs$core$async46983.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46983.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46984","meta46984",-470677275,null)], null);
});

cljs.core.async.t_cljs$core$async46983.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46983";

cljs.core.async.t_cljs$core$async46983.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async46983");
});

cljs.core.async.__GT_t_cljs$core$async46983 = (function cljs$core$async$__GT_t_cljs$core$async46983(f__$1,blockable__$1,meta46984){
return (new cljs.core.async.t_cljs$core$async46983(f__$1,blockable__$1,meta46984));
});

}

return (new cljs.core.async.t_cljs$core$async46983(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46989 = arguments.length;
switch (G__46989) {
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
var G__46992 = arguments.length;
switch (G__46992) {
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
var G__46995 = arguments.length;
switch (G__46995) {
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
var val_46997 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46997);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46997,ret){
return (function (){
return fn1.call(null,val_46997);
});})(val_46997,ret))
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
var G__46999 = arguments.length;
switch (G__46999) {
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
var n__31292__auto___47001 = n;
var x_47002 = (0);
while(true){
if((x_47002 < n__31292__auto___47001)){
(a[x_47002] = (0));

var G__47003 = (x_47002 + (1));
x_47002 = G__47003;
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

var G__47004 = (i + (1));
i = G__47004;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47005 = (function (flag,meta47006){
this.flag = flag;
this.meta47006 = meta47006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47007,meta47006__$1){
var self__ = this;
var _47007__$1 = this;
return (new cljs.core.async.t_cljs$core$async47005(self__.flag,meta47006__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47007){
var self__ = this;
var _47007__$1 = this;
return self__.meta47006;
});})(flag))
;

cljs.core.async.t_cljs$core$async47005.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47005.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47005.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47006","meta47006",1301297905,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47005";

cljs.core.async.t_cljs$core$async47005.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async47005");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47005 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47005(flag__$1,meta47006){
return (new cljs.core.async.t_cljs$core$async47005(flag__$1,meta47006));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47005(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47008 = (function (flag,cb,meta47009){
this.flag = flag;
this.cb = cb;
this.meta47009 = meta47009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47010,meta47009__$1){
var self__ = this;
var _47010__$1 = this;
return (new cljs.core.async.t_cljs$core$async47008(self__.flag,self__.cb,meta47009__$1));
});

cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47010){
var self__ = this;
var _47010__$1 = this;
return self__.meta47009;
});

cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47008.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47009","meta47009",895875147,null)], null);
});

cljs.core.async.t_cljs$core$async47008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47008";

cljs.core.async.t_cljs$core$async47008.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async47008");
});

cljs.core.async.__GT_t_cljs$core$async47008 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47008(flag__$1,cb__$1,meta47009){
return (new cljs.core.async.t_cljs$core$async47008(flag__$1,cb__$1,meta47009));
});

}

return (new cljs.core.async.t_cljs$core$async47008(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__47011_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47011_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47012_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47012_SHARP_,port], null));
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
var G__47013 = (i + (1));
i = G__47013;
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
var len__31526__auto___47019 = arguments.length;
var i__31527__auto___47020 = (0);
while(true){
if((i__31527__auto___47020 < len__31526__auto___47019)){
args__31533__auto__.push((arguments[i__31527__auto___47020]));

var G__47021 = (i__31527__auto___47020 + (1));
i__31527__auto___47020 = G__47021;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47016){
var map__47017 = p__47016;
var map__47017__$1 = ((((!((map__47017 == null)))?((((map__47017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47017):map__47017);
var opts = map__47017__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47014){
var G__47015 = cljs.core.first.call(null,seq47014);
var seq47014__$1 = cljs.core.next.call(null,seq47014);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47015,seq47014__$1);
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
var G__47023 = arguments.length;
switch (G__47023) {
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
var c__46922__auto___47069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___47069){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___47069){
return (function (state_47047){
var state_val_47048 = (state_47047[(1)]);
if((state_val_47048 === (7))){
var inst_47043 = (state_47047[(2)]);
var state_47047__$1 = state_47047;
var statearr_47049_47070 = state_47047__$1;
(statearr_47049_47070[(2)] = inst_47043);

(statearr_47049_47070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47048 === (1))){
var state_47047__$1 = state_47047;
var statearr_47050_47071 = state_47047__$1;
(statearr_47050_47071[(2)] = null);

(statearr_47050_47071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47048 === (4))){
var inst_47026 = (state_47047[(7)]);
var inst_47026__$1 = (state_47047[(2)]);
var inst_47027 = (inst_47026__$1 == null);
var state_47047__$1 = (function (){var statearr_47051 = state_47047;
(statearr_47051[(7)] = inst_47026__$1);

return statearr_47051;
})();
if(cljs.core.truth_(inst_47027)){
var statearr_47052_47072 = state_47047__$1;
(statearr_47052_47072[(1)] = (5));

} else {
var statearr_47053_47073 = state_47047__$1;
(statearr_47053_47073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47048 === (13))){
var state_47047__$1 = state_47047;
var statearr_47054_47074 = state_47047__$1;
(statearr_47054_47074[(2)] = null);

(statearr_47054_47074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47048 === (6))){
var inst_47026 = (state_47047[(7)]);
var state_47047__$1 = state_47047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47047__$1,(11),to,inst_47026);
} else {
if((state_val_47048 === (3))){
var inst_47045 = (state_47047[(2)]);
var state_47047__$1 = state_47047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47047__$1,inst_47045);
} else {
if((state_val_47048 === (12))){
var state_47047__$1 = state_47047;
var statearr_47055_47075 = state_47047__$1;
(statearr_47055_47075[(2)] = null);

(statearr_47055_47075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47048 === (2))){
var state_47047__$1 = state_47047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47047__$1,(4),from);
} else {
if((state_val_47048 === (11))){
var inst_47036 = (state_47047[(2)]);
var state_47047__$1 = state_47047;
if(cljs.core.truth_(inst_47036)){
var statearr_47056_47076 = state_47047__$1;
(statearr_47056_47076[(1)] = (12));

} else {
var statearr_47057_47077 = state_47047__$1;
(statearr_47057_47077[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47048 === (9))){
var state_47047__$1 = state_47047;
var statearr_47058_47078 = state_47047__$1;
(statearr_47058_47078[(2)] = null);

(statearr_47058_47078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47048 === (5))){
var state_47047__$1 = state_47047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47059_47079 = state_47047__$1;
(statearr_47059_47079[(1)] = (8));

} else {
var statearr_47060_47080 = state_47047__$1;
(statearr_47060_47080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47048 === (14))){
var inst_47041 = (state_47047[(2)]);
var state_47047__$1 = state_47047;
var statearr_47061_47081 = state_47047__$1;
(statearr_47061_47081[(2)] = inst_47041);

(statearr_47061_47081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47048 === (10))){
var inst_47033 = (state_47047[(2)]);
var state_47047__$1 = state_47047;
var statearr_47062_47082 = state_47047__$1;
(statearr_47062_47082[(2)] = inst_47033);

(statearr_47062_47082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47048 === (8))){
var inst_47030 = cljs.core.async.close_BANG_.call(null,to);
var state_47047__$1 = state_47047;
var statearr_47063_47083 = state_47047__$1;
(statearr_47063_47083[(2)] = inst_47030);

(statearr_47063_47083[(1)] = (10));


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
});})(c__46922__auto___47069))
;
return ((function (switch__46832__auto__,c__46922__auto___47069){
return (function() {
var cljs$core$async$state_machine__46833__auto__ = null;
var cljs$core$async$state_machine__46833__auto____0 = (function (){
var statearr_47064 = [null,null,null,null,null,null,null,null];
(statearr_47064[(0)] = cljs$core$async$state_machine__46833__auto__);

(statearr_47064[(1)] = (1));

return statearr_47064;
});
var cljs$core$async$state_machine__46833__auto____1 = (function (state_47047){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_47047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e47065){if((e47065 instanceof Object)){
var ex__46836__auto__ = e47065;
var statearr_47066_47084 = state_47047;
(statearr_47066_47084[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47085 = state_47047;
state_47047 = G__47085;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$state_machine__46833__auto__ = function(state_47047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46833__auto____1.call(this,state_47047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46833__auto____0;
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46833__auto____1;
return cljs$core$async$state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___47069))
})();
var state__46924__auto__ = (function (){var statearr_47067 = f__46923__auto__.call(null);
(statearr_47067[(6)] = c__46922__auto___47069);

return statearr_47067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___47069))
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
return (function (p__47086){
var vec__47087 = p__47086;
var v = cljs.core.nth.call(null,vec__47087,(0),null);
var p = cljs.core.nth.call(null,vec__47087,(1),null);
var job = vec__47087;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__46922__auto___47258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___47258,res,vec__47087,v,p,job,jobs,results){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___47258,res,vec__47087,v,p,job,jobs,results){
return (function (state_47094){
var state_val_47095 = (state_47094[(1)]);
if((state_val_47095 === (1))){
var state_47094__$1 = state_47094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47094__$1,(2),res,v);
} else {
if((state_val_47095 === (2))){
var inst_47091 = (state_47094[(2)]);
var inst_47092 = cljs.core.async.close_BANG_.call(null,res);
var state_47094__$1 = (function (){var statearr_47096 = state_47094;
(statearr_47096[(7)] = inst_47091);

return statearr_47096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47094__$1,inst_47092);
} else {
return null;
}
}
});})(c__46922__auto___47258,res,vec__47087,v,p,job,jobs,results))
;
return ((function (switch__46832__auto__,c__46922__auto___47258,res,vec__47087,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0 = (function (){
var statearr_47097 = [null,null,null,null,null,null,null,null];
(statearr_47097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__);

(statearr_47097[(1)] = (1));

return statearr_47097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1 = (function (state_47094){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_47094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e47098){if((e47098 instanceof Object)){
var ex__46836__auto__ = e47098;
var statearr_47099_47259 = state_47094;
(statearr_47099_47259[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47260 = state_47094;
state_47094 = G__47260;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__ = function(state_47094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1.call(this,state_47094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___47258,res,vec__47087,v,p,job,jobs,results))
})();
var state__46924__auto__ = (function (){var statearr_47100 = f__46923__auto__.call(null);
(statearr_47100[(6)] = c__46922__auto___47258);

return statearr_47100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___47258,res,vec__47087,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47101){
var vec__47102 = p__47101;
var v = cljs.core.nth.call(null,vec__47102,(0),null);
var p = cljs.core.nth.call(null,vec__47102,(1),null);
var job = vec__47102;
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
var n__31292__auto___47261 = n;
var __47262 = (0);
while(true){
if((__47262 < n__31292__auto___47261)){
var G__47105_47263 = type;
var G__47105_47264__$1 = (((G__47105_47263 instanceof cljs.core.Keyword))?G__47105_47263.fqn:null);
switch (G__47105_47264__$1) {
case "compute":
var c__46922__auto___47266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47262,c__46922__auto___47266,G__47105_47263,G__47105_47264__$1,n__31292__auto___47261,jobs,results,process,async){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (__47262,c__46922__auto___47266,G__47105_47263,G__47105_47264__$1,n__31292__auto___47261,jobs,results,process,async){
return (function (state_47118){
var state_val_47119 = (state_47118[(1)]);
if((state_val_47119 === (1))){
var state_47118__$1 = state_47118;
var statearr_47120_47267 = state_47118__$1;
(statearr_47120_47267[(2)] = null);

(statearr_47120_47267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47119 === (2))){
var state_47118__$1 = state_47118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47118__$1,(4),jobs);
} else {
if((state_val_47119 === (3))){
var inst_47116 = (state_47118[(2)]);
var state_47118__$1 = state_47118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47118__$1,inst_47116);
} else {
if((state_val_47119 === (4))){
var inst_47108 = (state_47118[(2)]);
var inst_47109 = process.call(null,inst_47108);
var state_47118__$1 = state_47118;
if(cljs.core.truth_(inst_47109)){
var statearr_47121_47268 = state_47118__$1;
(statearr_47121_47268[(1)] = (5));

} else {
var statearr_47122_47269 = state_47118__$1;
(statearr_47122_47269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47119 === (5))){
var state_47118__$1 = state_47118;
var statearr_47123_47270 = state_47118__$1;
(statearr_47123_47270[(2)] = null);

(statearr_47123_47270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47119 === (6))){
var state_47118__$1 = state_47118;
var statearr_47124_47271 = state_47118__$1;
(statearr_47124_47271[(2)] = null);

(statearr_47124_47271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47119 === (7))){
var inst_47114 = (state_47118[(2)]);
var state_47118__$1 = state_47118;
var statearr_47125_47272 = state_47118__$1;
(statearr_47125_47272[(2)] = inst_47114);

(statearr_47125_47272[(1)] = (3));


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
});})(__47262,c__46922__auto___47266,G__47105_47263,G__47105_47264__$1,n__31292__auto___47261,jobs,results,process,async))
;
return ((function (__47262,switch__46832__auto__,c__46922__auto___47266,G__47105_47263,G__47105_47264__$1,n__31292__auto___47261,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0 = (function (){
var statearr_47126 = [null,null,null,null,null,null,null];
(statearr_47126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__);

(statearr_47126[(1)] = (1));

return statearr_47126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1 = (function (state_47118){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_47118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e47127){if((e47127 instanceof Object)){
var ex__46836__auto__ = e47127;
var statearr_47128_47273 = state_47118;
(statearr_47128_47273[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47274 = state_47118;
state_47118 = G__47274;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__ = function(state_47118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1.call(this,state_47118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__;
})()
;})(__47262,switch__46832__auto__,c__46922__auto___47266,G__47105_47263,G__47105_47264__$1,n__31292__auto___47261,jobs,results,process,async))
})();
var state__46924__auto__ = (function (){var statearr_47129 = f__46923__auto__.call(null);
(statearr_47129[(6)] = c__46922__auto___47266);

return statearr_47129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(__47262,c__46922__auto___47266,G__47105_47263,G__47105_47264__$1,n__31292__auto___47261,jobs,results,process,async))
);


break;
case "async":
var c__46922__auto___47275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47262,c__46922__auto___47275,G__47105_47263,G__47105_47264__$1,n__31292__auto___47261,jobs,results,process,async){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (__47262,c__46922__auto___47275,G__47105_47263,G__47105_47264__$1,n__31292__auto___47261,jobs,results,process,async){
return (function (state_47142){
var state_val_47143 = (state_47142[(1)]);
if((state_val_47143 === (1))){
var state_47142__$1 = state_47142;
var statearr_47144_47276 = state_47142__$1;
(statearr_47144_47276[(2)] = null);

(statearr_47144_47276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (2))){
var state_47142__$1 = state_47142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47142__$1,(4),jobs);
} else {
if((state_val_47143 === (3))){
var inst_47140 = (state_47142[(2)]);
var state_47142__$1 = state_47142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47142__$1,inst_47140);
} else {
if((state_val_47143 === (4))){
var inst_47132 = (state_47142[(2)]);
var inst_47133 = async.call(null,inst_47132);
var state_47142__$1 = state_47142;
if(cljs.core.truth_(inst_47133)){
var statearr_47145_47277 = state_47142__$1;
(statearr_47145_47277[(1)] = (5));

} else {
var statearr_47146_47278 = state_47142__$1;
(statearr_47146_47278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (5))){
var state_47142__$1 = state_47142;
var statearr_47147_47279 = state_47142__$1;
(statearr_47147_47279[(2)] = null);

(statearr_47147_47279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (6))){
var state_47142__$1 = state_47142;
var statearr_47148_47280 = state_47142__$1;
(statearr_47148_47280[(2)] = null);

(statearr_47148_47280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (7))){
var inst_47138 = (state_47142[(2)]);
var state_47142__$1 = state_47142;
var statearr_47149_47281 = state_47142__$1;
(statearr_47149_47281[(2)] = inst_47138);

(statearr_47149_47281[(1)] = (3));


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
});})(__47262,c__46922__auto___47275,G__47105_47263,G__47105_47264__$1,n__31292__auto___47261,jobs,results,process,async))
;
return ((function (__47262,switch__46832__auto__,c__46922__auto___47275,G__47105_47263,G__47105_47264__$1,n__31292__auto___47261,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0 = (function (){
var statearr_47150 = [null,null,null,null,null,null,null];
(statearr_47150[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__);

(statearr_47150[(1)] = (1));

return statearr_47150;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1 = (function (state_47142){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_47142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e47151){if((e47151 instanceof Object)){
var ex__46836__auto__ = e47151;
var statearr_47152_47282 = state_47142;
(statearr_47152_47282[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47283 = state_47142;
state_47142 = G__47283;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__ = function(state_47142){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1.call(this,state_47142);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__;
})()
;})(__47262,switch__46832__auto__,c__46922__auto___47275,G__47105_47263,G__47105_47264__$1,n__31292__auto___47261,jobs,results,process,async))
})();
var state__46924__auto__ = (function (){var statearr_47153 = f__46923__auto__.call(null);
(statearr_47153[(6)] = c__46922__auto___47275);

return statearr_47153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(__47262,c__46922__auto___47275,G__47105_47263,G__47105_47264__$1,n__31292__auto___47261,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47105_47264__$1)].join('')));

}

var G__47284 = (__47262 + (1));
__47262 = G__47284;
continue;
} else {
}
break;
}

var c__46922__auto___47285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___47285,jobs,results,process,async){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___47285,jobs,results,process,async){
return (function (state_47175){
var state_val_47176 = (state_47175[(1)]);
if((state_val_47176 === (1))){
var state_47175__$1 = state_47175;
var statearr_47177_47286 = state_47175__$1;
(statearr_47177_47286[(2)] = null);

(statearr_47177_47286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (2))){
var state_47175__$1 = state_47175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47175__$1,(4),from);
} else {
if((state_val_47176 === (3))){
var inst_47173 = (state_47175[(2)]);
var state_47175__$1 = state_47175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47175__$1,inst_47173);
} else {
if((state_val_47176 === (4))){
var inst_47156 = (state_47175[(7)]);
var inst_47156__$1 = (state_47175[(2)]);
var inst_47157 = (inst_47156__$1 == null);
var state_47175__$1 = (function (){var statearr_47178 = state_47175;
(statearr_47178[(7)] = inst_47156__$1);

return statearr_47178;
})();
if(cljs.core.truth_(inst_47157)){
var statearr_47179_47287 = state_47175__$1;
(statearr_47179_47287[(1)] = (5));

} else {
var statearr_47180_47288 = state_47175__$1;
(statearr_47180_47288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (5))){
var inst_47159 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47175__$1 = state_47175;
var statearr_47181_47289 = state_47175__$1;
(statearr_47181_47289[(2)] = inst_47159);

(statearr_47181_47289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (6))){
var inst_47156 = (state_47175[(7)]);
var inst_47161 = (state_47175[(8)]);
var inst_47161__$1 = cljs.core.async.chan.call(null,(1));
var inst_47162 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47163 = [inst_47156,inst_47161__$1];
var inst_47164 = (new cljs.core.PersistentVector(null,2,(5),inst_47162,inst_47163,null));
var state_47175__$1 = (function (){var statearr_47182 = state_47175;
(statearr_47182[(8)] = inst_47161__$1);

return statearr_47182;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47175__$1,(8),jobs,inst_47164);
} else {
if((state_val_47176 === (7))){
var inst_47171 = (state_47175[(2)]);
var state_47175__$1 = state_47175;
var statearr_47183_47290 = state_47175__$1;
(statearr_47183_47290[(2)] = inst_47171);

(statearr_47183_47290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (8))){
var inst_47161 = (state_47175[(8)]);
var inst_47166 = (state_47175[(2)]);
var state_47175__$1 = (function (){var statearr_47184 = state_47175;
(statearr_47184[(9)] = inst_47166);

return statearr_47184;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47175__$1,(9),results,inst_47161);
} else {
if((state_val_47176 === (9))){
var inst_47168 = (state_47175[(2)]);
var state_47175__$1 = (function (){var statearr_47185 = state_47175;
(statearr_47185[(10)] = inst_47168);

return statearr_47185;
})();
var statearr_47186_47291 = state_47175__$1;
(statearr_47186_47291[(2)] = null);

(statearr_47186_47291[(1)] = (2));


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
});})(c__46922__auto___47285,jobs,results,process,async))
;
return ((function (switch__46832__auto__,c__46922__auto___47285,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0 = (function (){
var statearr_47187 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47187[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__);

(statearr_47187[(1)] = (1));

return statearr_47187;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1 = (function (state_47175){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_47175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e47188){if((e47188 instanceof Object)){
var ex__46836__auto__ = e47188;
var statearr_47189_47292 = state_47175;
(statearr_47189_47292[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47293 = state_47175;
state_47175 = G__47293;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__ = function(state_47175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1.call(this,state_47175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___47285,jobs,results,process,async))
})();
var state__46924__auto__ = (function (){var statearr_47190 = f__46923__auto__.call(null);
(statearr_47190[(6)] = c__46922__auto___47285);

return statearr_47190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___47285,jobs,results,process,async))
);


var c__46922__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto__,jobs,results,process,async){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto__,jobs,results,process,async){
return (function (state_47228){
var state_val_47229 = (state_47228[(1)]);
if((state_val_47229 === (7))){
var inst_47224 = (state_47228[(2)]);
var state_47228__$1 = state_47228;
var statearr_47230_47294 = state_47228__$1;
(statearr_47230_47294[(2)] = inst_47224);

(statearr_47230_47294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (20))){
var state_47228__$1 = state_47228;
var statearr_47231_47295 = state_47228__$1;
(statearr_47231_47295[(2)] = null);

(statearr_47231_47295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (1))){
var state_47228__$1 = state_47228;
var statearr_47232_47296 = state_47228__$1;
(statearr_47232_47296[(2)] = null);

(statearr_47232_47296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (4))){
var inst_47193 = (state_47228[(7)]);
var inst_47193__$1 = (state_47228[(2)]);
var inst_47194 = (inst_47193__$1 == null);
var state_47228__$1 = (function (){var statearr_47233 = state_47228;
(statearr_47233[(7)] = inst_47193__$1);

return statearr_47233;
})();
if(cljs.core.truth_(inst_47194)){
var statearr_47234_47297 = state_47228__$1;
(statearr_47234_47297[(1)] = (5));

} else {
var statearr_47235_47298 = state_47228__$1;
(statearr_47235_47298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (15))){
var inst_47206 = (state_47228[(8)]);
var state_47228__$1 = state_47228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47228__$1,(18),to,inst_47206);
} else {
if((state_val_47229 === (21))){
var inst_47219 = (state_47228[(2)]);
var state_47228__$1 = state_47228;
var statearr_47236_47299 = state_47228__$1;
(statearr_47236_47299[(2)] = inst_47219);

(statearr_47236_47299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (13))){
var inst_47221 = (state_47228[(2)]);
var state_47228__$1 = (function (){var statearr_47237 = state_47228;
(statearr_47237[(9)] = inst_47221);

return statearr_47237;
})();
var statearr_47238_47300 = state_47228__$1;
(statearr_47238_47300[(2)] = null);

(statearr_47238_47300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (6))){
var inst_47193 = (state_47228[(7)]);
var state_47228__$1 = state_47228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47228__$1,(11),inst_47193);
} else {
if((state_val_47229 === (17))){
var inst_47214 = (state_47228[(2)]);
var state_47228__$1 = state_47228;
if(cljs.core.truth_(inst_47214)){
var statearr_47239_47301 = state_47228__$1;
(statearr_47239_47301[(1)] = (19));

} else {
var statearr_47240_47302 = state_47228__$1;
(statearr_47240_47302[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (3))){
var inst_47226 = (state_47228[(2)]);
var state_47228__$1 = state_47228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47228__$1,inst_47226);
} else {
if((state_val_47229 === (12))){
var inst_47203 = (state_47228[(10)]);
var state_47228__$1 = state_47228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47228__$1,(14),inst_47203);
} else {
if((state_val_47229 === (2))){
var state_47228__$1 = state_47228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47228__$1,(4),results);
} else {
if((state_val_47229 === (19))){
var state_47228__$1 = state_47228;
var statearr_47241_47303 = state_47228__$1;
(statearr_47241_47303[(2)] = null);

(statearr_47241_47303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (11))){
var inst_47203 = (state_47228[(2)]);
var state_47228__$1 = (function (){var statearr_47242 = state_47228;
(statearr_47242[(10)] = inst_47203);

return statearr_47242;
})();
var statearr_47243_47304 = state_47228__$1;
(statearr_47243_47304[(2)] = null);

(statearr_47243_47304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (9))){
var state_47228__$1 = state_47228;
var statearr_47244_47305 = state_47228__$1;
(statearr_47244_47305[(2)] = null);

(statearr_47244_47305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (5))){
var state_47228__$1 = state_47228;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47245_47306 = state_47228__$1;
(statearr_47245_47306[(1)] = (8));

} else {
var statearr_47246_47307 = state_47228__$1;
(statearr_47246_47307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (14))){
var inst_47208 = (state_47228[(11)]);
var inst_47206 = (state_47228[(8)]);
var inst_47206__$1 = (state_47228[(2)]);
var inst_47207 = (inst_47206__$1 == null);
var inst_47208__$1 = cljs.core.not.call(null,inst_47207);
var state_47228__$1 = (function (){var statearr_47247 = state_47228;
(statearr_47247[(11)] = inst_47208__$1);

(statearr_47247[(8)] = inst_47206__$1);

return statearr_47247;
})();
if(inst_47208__$1){
var statearr_47248_47308 = state_47228__$1;
(statearr_47248_47308[(1)] = (15));

} else {
var statearr_47249_47309 = state_47228__$1;
(statearr_47249_47309[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (16))){
var inst_47208 = (state_47228[(11)]);
var state_47228__$1 = state_47228;
var statearr_47250_47310 = state_47228__$1;
(statearr_47250_47310[(2)] = inst_47208);

(statearr_47250_47310[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (10))){
var inst_47200 = (state_47228[(2)]);
var state_47228__$1 = state_47228;
var statearr_47251_47311 = state_47228__$1;
(statearr_47251_47311[(2)] = inst_47200);

(statearr_47251_47311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (18))){
var inst_47211 = (state_47228[(2)]);
var state_47228__$1 = state_47228;
var statearr_47252_47312 = state_47228__$1;
(statearr_47252_47312[(2)] = inst_47211);

(statearr_47252_47312[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (8))){
var inst_47197 = cljs.core.async.close_BANG_.call(null,to);
var state_47228__$1 = state_47228;
var statearr_47253_47313 = state_47228__$1;
(statearr_47253_47313[(2)] = inst_47197);

(statearr_47253_47313[(1)] = (10));


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
});})(c__46922__auto__,jobs,results,process,async))
;
return ((function (switch__46832__auto__,c__46922__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0 = (function (){
var statearr_47254 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__);

(statearr_47254[(1)] = (1));

return statearr_47254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1 = (function (state_47228){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_47228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e47255){if((e47255 instanceof Object)){
var ex__46836__auto__ = e47255;
var statearr_47256_47314 = state_47228;
(statearr_47256_47314[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47315 = state_47228;
state_47228 = G__47315;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__ = function(state_47228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1.call(this,state_47228);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46833__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto__,jobs,results,process,async))
})();
var state__46924__auto__ = (function (){var statearr_47257 = f__46923__auto__.call(null);
(statearr_47257[(6)] = c__46922__auto__);

return statearr_47257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto__,jobs,results,process,async))
);

return c__46922__auto__;
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
var G__47317 = arguments.length;
switch (G__47317) {
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
var G__47320 = arguments.length;
switch (G__47320) {
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
var G__47323 = arguments.length;
switch (G__47323) {
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
var c__46922__auto___47372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___47372,tc,fc){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___47372,tc,fc){
return (function (state_47349){
var state_val_47350 = (state_47349[(1)]);
if((state_val_47350 === (7))){
var inst_47345 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
var statearr_47351_47373 = state_47349__$1;
(statearr_47351_47373[(2)] = inst_47345);

(statearr_47351_47373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (1))){
var state_47349__$1 = state_47349;
var statearr_47352_47374 = state_47349__$1;
(statearr_47352_47374[(2)] = null);

(statearr_47352_47374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (4))){
var inst_47326 = (state_47349[(7)]);
var inst_47326__$1 = (state_47349[(2)]);
var inst_47327 = (inst_47326__$1 == null);
var state_47349__$1 = (function (){var statearr_47353 = state_47349;
(statearr_47353[(7)] = inst_47326__$1);

return statearr_47353;
})();
if(cljs.core.truth_(inst_47327)){
var statearr_47354_47375 = state_47349__$1;
(statearr_47354_47375[(1)] = (5));

} else {
var statearr_47355_47376 = state_47349__$1;
(statearr_47355_47376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (13))){
var state_47349__$1 = state_47349;
var statearr_47356_47377 = state_47349__$1;
(statearr_47356_47377[(2)] = null);

(statearr_47356_47377[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (6))){
var inst_47326 = (state_47349[(7)]);
var inst_47332 = p.call(null,inst_47326);
var state_47349__$1 = state_47349;
if(cljs.core.truth_(inst_47332)){
var statearr_47357_47378 = state_47349__$1;
(statearr_47357_47378[(1)] = (9));

} else {
var statearr_47358_47379 = state_47349__$1;
(statearr_47358_47379[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (3))){
var inst_47347 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47349__$1,inst_47347);
} else {
if((state_val_47350 === (12))){
var state_47349__$1 = state_47349;
var statearr_47359_47380 = state_47349__$1;
(statearr_47359_47380[(2)] = null);

(statearr_47359_47380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (2))){
var state_47349__$1 = state_47349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47349__$1,(4),ch);
} else {
if((state_val_47350 === (11))){
var inst_47326 = (state_47349[(7)]);
var inst_47336 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47349__$1,(8),inst_47336,inst_47326);
} else {
if((state_val_47350 === (9))){
var state_47349__$1 = state_47349;
var statearr_47360_47381 = state_47349__$1;
(statearr_47360_47381[(2)] = tc);

(statearr_47360_47381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (5))){
var inst_47329 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47330 = cljs.core.async.close_BANG_.call(null,fc);
var state_47349__$1 = (function (){var statearr_47361 = state_47349;
(statearr_47361[(8)] = inst_47329);

return statearr_47361;
})();
var statearr_47362_47382 = state_47349__$1;
(statearr_47362_47382[(2)] = inst_47330);

(statearr_47362_47382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (14))){
var inst_47343 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
var statearr_47363_47383 = state_47349__$1;
(statearr_47363_47383[(2)] = inst_47343);

(statearr_47363_47383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (10))){
var state_47349__$1 = state_47349;
var statearr_47364_47384 = state_47349__$1;
(statearr_47364_47384[(2)] = fc);

(statearr_47364_47384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (8))){
var inst_47338 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
if(cljs.core.truth_(inst_47338)){
var statearr_47365_47385 = state_47349__$1;
(statearr_47365_47385[(1)] = (12));

} else {
var statearr_47366_47386 = state_47349__$1;
(statearr_47366_47386[(1)] = (13));

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
});})(c__46922__auto___47372,tc,fc))
;
return ((function (switch__46832__auto__,c__46922__auto___47372,tc,fc){
return (function() {
var cljs$core$async$state_machine__46833__auto__ = null;
var cljs$core$async$state_machine__46833__auto____0 = (function (){
var statearr_47367 = [null,null,null,null,null,null,null,null,null];
(statearr_47367[(0)] = cljs$core$async$state_machine__46833__auto__);

(statearr_47367[(1)] = (1));

return statearr_47367;
});
var cljs$core$async$state_machine__46833__auto____1 = (function (state_47349){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_47349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e47368){if((e47368 instanceof Object)){
var ex__46836__auto__ = e47368;
var statearr_47369_47387 = state_47349;
(statearr_47369_47387[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47388 = state_47349;
state_47349 = G__47388;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$state_machine__46833__auto__ = function(state_47349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46833__auto____1.call(this,state_47349);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46833__auto____0;
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46833__auto____1;
return cljs$core$async$state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___47372,tc,fc))
})();
var state__46924__auto__ = (function (){var statearr_47370 = f__46923__auto__.call(null);
(statearr_47370[(6)] = c__46922__auto___47372);

return statearr_47370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___47372,tc,fc))
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
var c__46922__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto__){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto__){
return (function (state_47409){
var state_val_47410 = (state_47409[(1)]);
if((state_val_47410 === (7))){
var inst_47405 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
var statearr_47411_47429 = state_47409__$1;
(statearr_47411_47429[(2)] = inst_47405);

(statearr_47411_47429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (1))){
var inst_47389 = init;
var state_47409__$1 = (function (){var statearr_47412 = state_47409;
(statearr_47412[(7)] = inst_47389);

return statearr_47412;
})();
var statearr_47413_47430 = state_47409__$1;
(statearr_47413_47430[(2)] = null);

(statearr_47413_47430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (4))){
var inst_47392 = (state_47409[(8)]);
var inst_47392__$1 = (state_47409[(2)]);
var inst_47393 = (inst_47392__$1 == null);
var state_47409__$1 = (function (){var statearr_47414 = state_47409;
(statearr_47414[(8)] = inst_47392__$1);

return statearr_47414;
})();
if(cljs.core.truth_(inst_47393)){
var statearr_47415_47431 = state_47409__$1;
(statearr_47415_47431[(1)] = (5));

} else {
var statearr_47416_47432 = state_47409__$1;
(statearr_47416_47432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (6))){
var inst_47392 = (state_47409[(8)]);
var inst_47389 = (state_47409[(7)]);
var inst_47396 = (state_47409[(9)]);
var inst_47396__$1 = f.call(null,inst_47389,inst_47392);
var inst_47397 = cljs.core.reduced_QMARK_.call(null,inst_47396__$1);
var state_47409__$1 = (function (){var statearr_47417 = state_47409;
(statearr_47417[(9)] = inst_47396__$1);

return statearr_47417;
})();
if(inst_47397){
var statearr_47418_47433 = state_47409__$1;
(statearr_47418_47433[(1)] = (8));

} else {
var statearr_47419_47434 = state_47409__$1;
(statearr_47419_47434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (3))){
var inst_47407 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47409__$1,inst_47407);
} else {
if((state_val_47410 === (2))){
var state_47409__$1 = state_47409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47409__$1,(4),ch);
} else {
if((state_val_47410 === (9))){
var inst_47396 = (state_47409[(9)]);
var inst_47389 = inst_47396;
var state_47409__$1 = (function (){var statearr_47420 = state_47409;
(statearr_47420[(7)] = inst_47389);

return statearr_47420;
})();
var statearr_47421_47435 = state_47409__$1;
(statearr_47421_47435[(2)] = null);

(statearr_47421_47435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (5))){
var inst_47389 = (state_47409[(7)]);
var state_47409__$1 = state_47409;
var statearr_47422_47436 = state_47409__$1;
(statearr_47422_47436[(2)] = inst_47389);

(statearr_47422_47436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (10))){
var inst_47403 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
var statearr_47423_47437 = state_47409__$1;
(statearr_47423_47437[(2)] = inst_47403);

(statearr_47423_47437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (8))){
var inst_47396 = (state_47409[(9)]);
var inst_47399 = cljs.core.deref.call(null,inst_47396);
var state_47409__$1 = state_47409;
var statearr_47424_47438 = state_47409__$1;
(statearr_47424_47438[(2)] = inst_47399);

(statearr_47424_47438[(1)] = (10));


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
});})(c__46922__auto__))
;
return ((function (switch__46832__auto__,c__46922__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46833__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46833__auto____0 = (function (){
var statearr_47425 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47425[(0)] = cljs$core$async$reduce_$_state_machine__46833__auto__);

(statearr_47425[(1)] = (1));

return statearr_47425;
});
var cljs$core$async$reduce_$_state_machine__46833__auto____1 = (function (state_47409){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_47409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e47426){if((e47426 instanceof Object)){
var ex__46836__auto__ = e47426;
var statearr_47427_47439 = state_47409;
(statearr_47427_47439[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47440 = state_47409;
state_47409 = G__47440;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46833__auto__ = function(state_47409){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46833__auto____1.call(this,state_47409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46833__auto____0;
cljs$core$async$reduce_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46833__auto____1;
return cljs$core$async$reduce_$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto__))
})();
var state__46924__auto__ = (function (){var statearr_47428 = f__46923__auto__.call(null);
(statearr_47428[(6)] = c__46922__auto__);

return statearr_47428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto__))
);

return c__46922__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__46922__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto__,f__$1){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto__,f__$1){
return (function (state_47446){
var state_val_47447 = (state_47446[(1)]);
if((state_val_47447 === (1))){
var inst_47441 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47446__$1 = state_47446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47446__$1,(2),inst_47441);
} else {
if((state_val_47447 === (2))){
var inst_47443 = (state_47446[(2)]);
var inst_47444 = f__$1.call(null,inst_47443);
var state_47446__$1 = state_47446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47446__$1,inst_47444);
} else {
return null;
}
}
});})(c__46922__auto__,f__$1))
;
return ((function (switch__46832__auto__,c__46922__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__46833__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46833__auto____0 = (function (){
var statearr_47448 = [null,null,null,null,null,null,null];
(statearr_47448[(0)] = cljs$core$async$transduce_$_state_machine__46833__auto__);

(statearr_47448[(1)] = (1));

return statearr_47448;
});
var cljs$core$async$transduce_$_state_machine__46833__auto____1 = (function (state_47446){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_47446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e47449){if((e47449 instanceof Object)){
var ex__46836__auto__ = e47449;
var statearr_47450_47452 = state_47446;
(statearr_47450_47452[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47453 = state_47446;
state_47446 = G__47453;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46833__auto__ = function(state_47446){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46833__auto____1.call(this,state_47446);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46833__auto____0;
cljs$core$async$transduce_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46833__auto____1;
return cljs$core$async$transduce_$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto__,f__$1))
})();
var state__46924__auto__ = (function (){var statearr_47451 = f__46923__auto__.call(null);
(statearr_47451[(6)] = c__46922__auto__);

return statearr_47451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto__,f__$1))
);

return c__46922__auto__;
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
var G__47455 = arguments.length;
switch (G__47455) {
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
var c__46922__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto__){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto__){
return (function (state_47480){
var state_val_47481 = (state_47480[(1)]);
if((state_val_47481 === (7))){
var inst_47462 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
var statearr_47482_47503 = state_47480__$1;
(statearr_47482_47503[(2)] = inst_47462);

(statearr_47482_47503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (1))){
var inst_47456 = cljs.core.seq.call(null,coll);
var inst_47457 = inst_47456;
var state_47480__$1 = (function (){var statearr_47483 = state_47480;
(statearr_47483[(7)] = inst_47457);

return statearr_47483;
})();
var statearr_47484_47504 = state_47480__$1;
(statearr_47484_47504[(2)] = null);

(statearr_47484_47504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (4))){
var inst_47457 = (state_47480[(7)]);
var inst_47460 = cljs.core.first.call(null,inst_47457);
var state_47480__$1 = state_47480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47480__$1,(7),ch,inst_47460);
} else {
if((state_val_47481 === (13))){
var inst_47474 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
var statearr_47485_47505 = state_47480__$1;
(statearr_47485_47505[(2)] = inst_47474);

(statearr_47485_47505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (6))){
var inst_47465 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
if(cljs.core.truth_(inst_47465)){
var statearr_47486_47506 = state_47480__$1;
(statearr_47486_47506[(1)] = (8));

} else {
var statearr_47487_47507 = state_47480__$1;
(statearr_47487_47507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (3))){
var inst_47478 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47480__$1,inst_47478);
} else {
if((state_val_47481 === (12))){
var state_47480__$1 = state_47480;
var statearr_47488_47508 = state_47480__$1;
(statearr_47488_47508[(2)] = null);

(statearr_47488_47508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (2))){
var inst_47457 = (state_47480[(7)]);
var state_47480__$1 = state_47480;
if(cljs.core.truth_(inst_47457)){
var statearr_47489_47509 = state_47480__$1;
(statearr_47489_47509[(1)] = (4));

} else {
var statearr_47490_47510 = state_47480__$1;
(statearr_47490_47510[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (11))){
var inst_47471 = cljs.core.async.close_BANG_.call(null,ch);
var state_47480__$1 = state_47480;
var statearr_47491_47511 = state_47480__$1;
(statearr_47491_47511[(2)] = inst_47471);

(statearr_47491_47511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (9))){
var state_47480__$1 = state_47480;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47492_47512 = state_47480__$1;
(statearr_47492_47512[(1)] = (11));

} else {
var statearr_47493_47513 = state_47480__$1;
(statearr_47493_47513[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (5))){
var inst_47457 = (state_47480[(7)]);
var state_47480__$1 = state_47480;
var statearr_47494_47514 = state_47480__$1;
(statearr_47494_47514[(2)] = inst_47457);

(statearr_47494_47514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (10))){
var inst_47476 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
var statearr_47495_47515 = state_47480__$1;
(statearr_47495_47515[(2)] = inst_47476);

(statearr_47495_47515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (8))){
var inst_47457 = (state_47480[(7)]);
var inst_47467 = cljs.core.next.call(null,inst_47457);
var inst_47457__$1 = inst_47467;
var state_47480__$1 = (function (){var statearr_47496 = state_47480;
(statearr_47496[(7)] = inst_47457__$1);

return statearr_47496;
})();
var statearr_47497_47516 = state_47480__$1;
(statearr_47497_47516[(2)] = null);

(statearr_47497_47516[(1)] = (2));


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
});})(c__46922__auto__))
;
return ((function (switch__46832__auto__,c__46922__auto__){
return (function() {
var cljs$core$async$state_machine__46833__auto__ = null;
var cljs$core$async$state_machine__46833__auto____0 = (function (){
var statearr_47498 = [null,null,null,null,null,null,null,null];
(statearr_47498[(0)] = cljs$core$async$state_machine__46833__auto__);

(statearr_47498[(1)] = (1));

return statearr_47498;
});
var cljs$core$async$state_machine__46833__auto____1 = (function (state_47480){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_47480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e47499){if((e47499 instanceof Object)){
var ex__46836__auto__ = e47499;
var statearr_47500_47517 = state_47480;
(statearr_47500_47517[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47518 = state_47480;
state_47480 = G__47518;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$state_machine__46833__auto__ = function(state_47480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46833__auto____1.call(this,state_47480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46833__auto____0;
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46833__auto____1;
return cljs$core$async$state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto__))
})();
var state__46924__auto__ = (function (){var statearr_47501 = f__46923__auto__.call(null);
(statearr_47501[(6)] = c__46922__auto__);

return statearr_47501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto__))
);

return c__46922__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async47519 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47519 = (function (ch,cs,meta47520){
this.ch = ch;
this.cs = cs;
this.meta47520 = meta47520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47521,meta47520__$1){
var self__ = this;
var _47521__$1 = this;
return (new cljs.core.async.t_cljs$core$async47519(self__.ch,self__.cs,meta47520__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47521){
var self__ = this;
var _47521__$1 = this;
return self__.meta47520;
});})(cs))
;

cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47519.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47520","meta47520",-572164692,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47519.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47519";

cljs.core.async.t_cljs$core$async47519.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async47519");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47519 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47519(ch__$1,cs__$1,meta47520){
return (new cljs.core.async.t_cljs$core$async47519(ch__$1,cs__$1,meta47520));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47519(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46922__auto___47741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___47741,cs,m,dchan,dctr,done){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___47741,cs,m,dchan,dctr,done){
return (function (state_47656){
var state_val_47657 = (state_47656[(1)]);
if((state_val_47657 === (7))){
var inst_47652 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47658_47742 = state_47656__$1;
(statearr_47658_47742[(2)] = inst_47652);

(statearr_47658_47742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (20))){
var inst_47555 = (state_47656[(7)]);
var inst_47567 = cljs.core.first.call(null,inst_47555);
var inst_47568 = cljs.core.nth.call(null,inst_47567,(0),null);
var inst_47569 = cljs.core.nth.call(null,inst_47567,(1),null);
var state_47656__$1 = (function (){var statearr_47659 = state_47656;
(statearr_47659[(8)] = inst_47568);

return statearr_47659;
})();
if(cljs.core.truth_(inst_47569)){
var statearr_47660_47743 = state_47656__$1;
(statearr_47660_47743[(1)] = (22));

} else {
var statearr_47661_47744 = state_47656__$1;
(statearr_47661_47744[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (27))){
var inst_47604 = (state_47656[(9)]);
var inst_47597 = (state_47656[(10)]);
var inst_47524 = (state_47656[(11)]);
var inst_47599 = (state_47656[(12)]);
var inst_47604__$1 = cljs.core._nth.call(null,inst_47597,inst_47599);
var inst_47605 = cljs.core.async.put_BANG_.call(null,inst_47604__$1,inst_47524,done);
var state_47656__$1 = (function (){var statearr_47662 = state_47656;
(statearr_47662[(9)] = inst_47604__$1);

return statearr_47662;
})();
if(cljs.core.truth_(inst_47605)){
var statearr_47663_47745 = state_47656__$1;
(statearr_47663_47745[(1)] = (30));

} else {
var statearr_47664_47746 = state_47656__$1;
(statearr_47664_47746[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (1))){
var state_47656__$1 = state_47656;
var statearr_47665_47747 = state_47656__$1;
(statearr_47665_47747[(2)] = null);

(statearr_47665_47747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (24))){
var inst_47555 = (state_47656[(7)]);
var inst_47574 = (state_47656[(2)]);
var inst_47575 = cljs.core.next.call(null,inst_47555);
var inst_47533 = inst_47575;
var inst_47534 = null;
var inst_47535 = (0);
var inst_47536 = (0);
var state_47656__$1 = (function (){var statearr_47666 = state_47656;
(statearr_47666[(13)] = inst_47535);

(statearr_47666[(14)] = inst_47536);

(statearr_47666[(15)] = inst_47533);

(statearr_47666[(16)] = inst_47574);

(statearr_47666[(17)] = inst_47534);

return statearr_47666;
})();
var statearr_47667_47748 = state_47656__$1;
(statearr_47667_47748[(2)] = null);

(statearr_47667_47748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (39))){
var state_47656__$1 = state_47656;
var statearr_47671_47749 = state_47656__$1;
(statearr_47671_47749[(2)] = null);

(statearr_47671_47749[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (4))){
var inst_47524 = (state_47656[(11)]);
var inst_47524__$1 = (state_47656[(2)]);
var inst_47525 = (inst_47524__$1 == null);
var state_47656__$1 = (function (){var statearr_47672 = state_47656;
(statearr_47672[(11)] = inst_47524__$1);

return statearr_47672;
})();
if(cljs.core.truth_(inst_47525)){
var statearr_47673_47750 = state_47656__$1;
(statearr_47673_47750[(1)] = (5));

} else {
var statearr_47674_47751 = state_47656__$1;
(statearr_47674_47751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (15))){
var inst_47535 = (state_47656[(13)]);
var inst_47536 = (state_47656[(14)]);
var inst_47533 = (state_47656[(15)]);
var inst_47534 = (state_47656[(17)]);
var inst_47551 = (state_47656[(2)]);
var inst_47552 = (inst_47536 + (1));
var tmp47668 = inst_47535;
var tmp47669 = inst_47533;
var tmp47670 = inst_47534;
var inst_47533__$1 = tmp47669;
var inst_47534__$1 = tmp47670;
var inst_47535__$1 = tmp47668;
var inst_47536__$1 = inst_47552;
var state_47656__$1 = (function (){var statearr_47675 = state_47656;
(statearr_47675[(13)] = inst_47535__$1);

(statearr_47675[(14)] = inst_47536__$1);

(statearr_47675[(15)] = inst_47533__$1);

(statearr_47675[(18)] = inst_47551);

(statearr_47675[(17)] = inst_47534__$1);

return statearr_47675;
})();
var statearr_47676_47752 = state_47656__$1;
(statearr_47676_47752[(2)] = null);

(statearr_47676_47752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (21))){
var inst_47578 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47680_47753 = state_47656__$1;
(statearr_47680_47753[(2)] = inst_47578);

(statearr_47680_47753[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (31))){
var inst_47604 = (state_47656[(9)]);
var inst_47608 = done.call(null,null);
var inst_47609 = cljs.core.async.untap_STAR_.call(null,m,inst_47604);
var state_47656__$1 = (function (){var statearr_47681 = state_47656;
(statearr_47681[(19)] = inst_47608);

return statearr_47681;
})();
var statearr_47682_47754 = state_47656__$1;
(statearr_47682_47754[(2)] = inst_47609);

(statearr_47682_47754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (32))){
var inst_47598 = (state_47656[(20)]);
var inst_47597 = (state_47656[(10)]);
var inst_47596 = (state_47656[(21)]);
var inst_47599 = (state_47656[(12)]);
var inst_47611 = (state_47656[(2)]);
var inst_47612 = (inst_47599 + (1));
var tmp47677 = inst_47598;
var tmp47678 = inst_47597;
var tmp47679 = inst_47596;
var inst_47596__$1 = tmp47679;
var inst_47597__$1 = tmp47678;
var inst_47598__$1 = tmp47677;
var inst_47599__$1 = inst_47612;
var state_47656__$1 = (function (){var statearr_47683 = state_47656;
(statearr_47683[(20)] = inst_47598__$1);

(statearr_47683[(10)] = inst_47597__$1);

(statearr_47683[(22)] = inst_47611);

(statearr_47683[(21)] = inst_47596__$1);

(statearr_47683[(12)] = inst_47599__$1);

return statearr_47683;
})();
var statearr_47684_47755 = state_47656__$1;
(statearr_47684_47755[(2)] = null);

(statearr_47684_47755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (40))){
var inst_47624 = (state_47656[(23)]);
var inst_47628 = done.call(null,null);
var inst_47629 = cljs.core.async.untap_STAR_.call(null,m,inst_47624);
var state_47656__$1 = (function (){var statearr_47685 = state_47656;
(statearr_47685[(24)] = inst_47628);

return statearr_47685;
})();
var statearr_47686_47756 = state_47656__$1;
(statearr_47686_47756[(2)] = inst_47629);

(statearr_47686_47756[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (33))){
var inst_47615 = (state_47656[(25)]);
var inst_47617 = cljs.core.chunked_seq_QMARK_.call(null,inst_47615);
var state_47656__$1 = state_47656;
if(inst_47617){
var statearr_47687_47757 = state_47656__$1;
(statearr_47687_47757[(1)] = (36));

} else {
var statearr_47688_47758 = state_47656__$1;
(statearr_47688_47758[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (13))){
var inst_47545 = (state_47656[(26)]);
var inst_47548 = cljs.core.async.close_BANG_.call(null,inst_47545);
var state_47656__$1 = state_47656;
var statearr_47689_47759 = state_47656__$1;
(statearr_47689_47759[(2)] = inst_47548);

(statearr_47689_47759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (22))){
var inst_47568 = (state_47656[(8)]);
var inst_47571 = cljs.core.async.close_BANG_.call(null,inst_47568);
var state_47656__$1 = state_47656;
var statearr_47690_47760 = state_47656__$1;
(statearr_47690_47760[(2)] = inst_47571);

(statearr_47690_47760[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (36))){
var inst_47615 = (state_47656[(25)]);
var inst_47619 = cljs.core.chunk_first.call(null,inst_47615);
var inst_47620 = cljs.core.chunk_rest.call(null,inst_47615);
var inst_47621 = cljs.core.count.call(null,inst_47619);
var inst_47596 = inst_47620;
var inst_47597 = inst_47619;
var inst_47598 = inst_47621;
var inst_47599 = (0);
var state_47656__$1 = (function (){var statearr_47691 = state_47656;
(statearr_47691[(20)] = inst_47598);

(statearr_47691[(10)] = inst_47597);

(statearr_47691[(21)] = inst_47596);

(statearr_47691[(12)] = inst_47599);

return statearr_47691;
})();
var statearr_47692_47761 = state_47656__$1;
(statearr_47692_47761[(2)] = null);

(statearr_47692_47761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (41))){
var inst_47615 = (state_47656[(25)]);
var inst_47631 = (state_47656[(2)]);
var inst_47632 = cljs.core.next.call(null,inst_47615);
var inst_47596 = inst_47632;
var inst_47597 = null;
var inst_47598 = (0);
var inst_47599 = (0);
var state_47656__$1 = (function (){var statearr_47693 = state_47656;
(statearr_47693[(20)] = inst_47598);

(statearr_47693[(10)] = inst_47597);

(statearr_47693[(27)] = inst_47631);

(statearr_47693[(21)] = inst_47596);

(statearr_47693[(12)] = inst_47599);

return statearr_47693;
})();
var statearr_47694_47762 = state_47656__$1;
(statearr_47694_47762[(2)] = null);

(statearr_47694_47762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (43))){
var state_47656__$1 = state_47656;
var statearr_47695_47763 = state_47656__$1;
(statearr_47695_47763[(2)] = null);

(statearr_47695_47763[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (29))){
var inst_47640 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47696_47764 = state_47656__$1;
(statearr_47696_47764[(2)] = inst_47640);

(statearr_47696_47764[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (44))){
var inst_47649 = (state_47656[(2)]);
var state_47656__$1 = (function (){var statearr_47697 = state_47656;
(statearr_47697[(28)] = inst_47649);

return statearr_47697;
})();
var statearr_47698_47765 = state_47656__$1;
(statearr_47698_47765[(2)] = null);

(statearr_47698_47765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (6))){
var inst_47588 = (state_47656[(29)]);
var inst_47587 = cljs.core.deref.call(null,cs);
var inst_47588__$1 = cljs.core.keys.call(null,inst_47587);
var inst_47589 = cljs.core.count.call(null,inst_47588__$1);
var inst_47590 = cljs.core.reset_BANG_.call(null,dctr,inst_47589);
var inst_47595 = cljs.core.seq.call(null,inst_47588__$1);
var inst_47596 = inst_47595;
var inst_47597 = null;
var inst_47598 = (0);
var inst_47599 = (0);
var state_47656__$1 = (function (){var statearr_47699 = state_47656;
(statearr_47699[(20)] = inst_47598);

(statearr_47699[(10)] = inst_47597);

(statearr_47699[(29)] = inst_47588__$1);

(statearr_47699[(21)] = inst_47596);

(statearr_47699[(30)] = inst_47590);

(statearr_47699[(12)] = inst_47599);

return statearr_47699;
})();
var statearr_47700_47766 = state_47656__$1;
(statearr_47700_47766[(2)] = null);

(statearr_47700_47766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (28))){
var inst_47596 = (state_47656[(21)]);
var inst_47615 = (state_47656[(25)]);
var inst_47615__$1 = cljs.core.seq.call(null,inst_47596);
var state_47656__$1 = (function (){var statearr_47701 = state_47656;
(statearr_47701[(25)] = inst_47615__$1);

return statearr_47701;
})();
if(inst_47615__$1){
var statearr_47702_47767 = state_47656__$1;
(statearr_47702_47767[(1)] = (33));

} else {
var statearr_47703_47768 = state_47656__$1;
(statearr_47703_47768[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (25))){
var inst_47598 = (state_47656[(20)]);
var inst_47599 = (state_47656[(12)]);
var inst_47601 = (inst_47599 < inst_47598);
var inst_47602 = inst_47601;
var state_47656__$1 = state_47656;
if(cljs.core.truth_(inst_47602)){
var statearr_47704_47769 = state_47656__$1;
(statearr_47704_47769[(1)] = (27));

} else {
var statearr_47705_47770 = state_47656__$1;
(statearr_47705_47770[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (34))){
var state_47656__$1 = state_47656;
var statearr_47706_47771 = state_47656__$1;
(statearr_47706_47771[(2)] = null);

(statearr_47706_47771[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (17))){
var state_47656__$1 = state_47656;
var statearr_47707_47772 = state_47656__$1;
(statearr_47707_47772[(2)] = null);

(statearr_47707_47772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (3))){
var inst_47654 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47656__$1,inst_47654);
} else {
if((state_val_47657 === (12))){
var inst_47583 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47708_47773 = state_47656__$1;
(statearr_47708_47773[(2)] = inst_47583);

(statearr_47708_47773[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (2))){
var state_47656__$1 = state_47656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47656__$1,(4),ch);
} else {
if((state_val_47657 === (23))){
var state_47656__$1 = state_47656;
var statearr_47709_47774 = state_47656__$1;
(statearr_47709_47774[(2)] = null);

(statearr_47709_47774[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (35))){
var inst_47638 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47710_47775 = state_47656__$1;
(statearr_47710_47775[(2)] = inst_47638);

(statearr_47710_47775[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (19))){
var inst_47555 = (state_47656[(7)]);
var inst_47559 = cljs.core.chunk_first.call(null,inst_47555);
var inst_47560 = cljs.core.chunk_rest.call(null,inst_47555);
var inst_47561 = cljs.core.count.call(null,inst_47559);
var inst_47533 = inst_47560;
var inst_47534 = inst_47559;
var inst_47535 = inst_47561;
var inst_47536 = (0);
var state_47656__$1 = (function (){var statearr_47711 = state_47656;
(statearr_47711[(13)] = inst_47535);

(statearr_47711[(14)] = inst_47536);

(statearr_47711[(15)] = inst_47533);

(statearr_47711[(17)] = inst_47534);

return statearr_47711;
})();
var statearr_47712_47776 = state_47656__$1;
(statearr_47712_47776[(2)] = null);

(statearr_47712_47776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (11))){
var inst_47555 = (state_47656[(7)]);
var inst_47533 = (state_47656[(15)]);
var inst_47555__$1 = cljs.core.seq.call(null,inst_47533);
var state_47656__$1 = (function (){var statearr_47713 = state_47656;
(statearr_47713[(7)] = inst_47555__$1);

return statearr_47713;
})();
if(inst_47555__$1){
var statearr_47714_47777 = state_47656__$1;
(statearr_47714_47777[(1)] = (16));

} else {
var statearr_47715_47778 = state_47656__$1;
(statearr_47715_47778[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (9))){
var inst_47585 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47716_47779 = state_47656__$1;
(statearr_47716_47779[(2)] = inst_47585);

(statearr_47716_47779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (5))){
var inst_47531 = cljs.core.deref.call(null,cs);
var inst_47532 = cljs.core.seq.call(null,inst_47531);
var inst_47533 = inst_47532;
var inst_47534 = null;
var inst_47535 = (0);
var inst_47536 = (0);
var state_47656__$1 = (function (){var statearr_47717 = state_47656;
(statearr_47717[(13)] = inst_47535);

(statearr_47717[(14)] = inst_47536);

(statearr_47717[(15)] = inst_47533);

(statearr_47717[(17)] = inst_47534);

return statearr_47717;
})();
var statearr_47718_47780 = state_47656__$1;
(statearr_47718_47780[(2)] = null);

(statearr_47718_47780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (14))){
var state_47656__$1 = state_47656;
var statearr_47719_47781 = state_47656__$1;
(statearr_47719_47781[(2)] = null);

(statearr_47719_47781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (45))){
var inst_47646 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47720_47782 = state_47656__$1;
(statearr_47720_47782[(2)] = inst_47646);

(statearr_47720_47782[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (26))){
var inst_47588 = (state_47656[(29)]);
var inst_47642 = (state_47656[(2)]);
var inst_47643 = cljs.core.seq.call(null,inst_47588);
var state_47656__$1 = (function (){var statearr_47721 = state_47656;
(statearr_47721[(31)] = inst_47642);

return statearr_47721;
})();
if(inst_47643){
var statearr_47722_47783 = state_47656__$1;
(statearr_47722_47783[(1)] = (42));

} else {
var statearr_47723_47784 = state_47656__$1;
(statearr_47723_47784[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (16))){
var inst_47555 = (state_47656[(7)]);
var inst_47557 = cljs.core.chunked_seq_QMARK_.call(null,inst_47555);
var state_47656__$1 = state_47656;
if(inst_47557){
var statearr_47724_47785 = state_47656__$1;
(statearr_47724_47785[(1)] = (19));

} else {
var statearr_47725_47786 = state_47656__$1;
(statearr_47725_47786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (38))){
var inst_47635 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47726_47787 = state_47656__$1;
(statearr_47726_47787[(2)] = inst_47635);

(statearr_47726_47787[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (30))){
var state_47656__$1 = state_47656;
var statearr_47727_47788 = state_47656__$1;
(statearr_47727_47788[(2)] = null);

(statearr_47727_47788[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (10))){
var inst_47536 = (state_47656[(14)]);
var inst_47534 = (state_47656[(17)]);
var inst_47544 = cljs.core._nth.call(null,inst_47534,inst_47536);
var inst_47545 = cljs.core.nth.call(null,inst_47544,(0),null);
var inst_47546 = cljs.core.nth.call(null,inst_47544,(1),null);
var state_47656__$1 = (function (){var statearr_47728 = state_47656;
(statearr_47728[(26)] = inst_47545);

return statearr_47728;
})();
if(cljs.core.truth_(inst_47546)){
var statearr_47729_47789 = state_47656__$1;
(statearr_47729_47789[(1)] = (13));

} else {
var statearr_47730_47790 = state_47656__$1;
(statearr_47730_47790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (18))){
var inst_47581 = (state_47656[(2)]);
var state_47656__$1 = state_47656;
var statearr_47731_47791 = state_47656__$1;
(statearr_47731_47791[(2)] = inst_47581);

(statearr_47731_47791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (42))){
var state_47656__$1 = state_47656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47656__$1,(45),dchan);
} else {
if((state_val_47657 === (37))){
var inst_47624 = (state_47656[(23)]);
var inst_47524 = (state_47656[(11)]);
var inst_47615 = (state_47656[(25)]);
var inst_47624__$1 = cljs.core.first.call(null,inst_47615);
var inst_47625 = cljs.core.async.put_BANG_.call(null,inst_47624__$1,inst_47524,done);
var state_47656__$1 = (function (){var statearr_47732 = state_47656;
(statearr_47732[(23)] = inst_47624__$1);

return statearr_47732;
})();
if(cljs.core.truth_(inst_47625)){
var statearr_47733_47792 = state_47656__$1;
(statearr_47733_47792[(1)] = (39));

} else {
var statearr_47734_47793 = state_47656__$1;
(statearr_47734_47793[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47657 === (8))){
var inst_47535 = (state_47656[(13)]);
var inst_47536 = (state_47656[(14)]);
var inst_47538 = (inst_47536 < inst_47535);
var inst_47539 = inst_47538;
var state_47656__$1 = state_47656;
if(cljs.core.truth_(inst_47539)){
var statearr_47735_47794 = state_47656__$1;
(statearr_47735_47794[(1)] = (10));

} else {
var statearr_47736_47795 = state_47656__$1;
(statearr_47736_47795[(1)] = (11));

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
});})(c__46922__auto___47741,cs,m,dchan,dctr,done))
;
return ((function (switch__46832__auto__,c__46922__auto___47741,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46833__auto__ = null;
var cljs$core$async$mult_$_state_machine__46833__auto____0 = (function (){
var statearr_47737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47737[(0)] = cljs$core$async$mult_$_state_machine__46833__auto__);

(statearr_47737[(1)] = (1));

return statearr_47737;
});
var cljs$core$async$mult_$_state_machine__46833__auto____1 = (function (state_47656){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_47656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e47738){if((e47738 instanceof Object)){
var ex__46836__auto__ = e47738;
var statearr_47739_47796 = state_47656;
(statearr_47739_47796[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47797 = state_47656;
state_47656 = G__47797;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46833__auto__ = function(state_47656){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46833__auto____1.call(this,state_47656);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46833__auto____0;
cljs$core$async$mult_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46833__auto____1;
return cljs$core$async$mult_$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___47741,cs,m,dchan,dctr,done))
})();
var state__46924__auto__ = (function (){var statearr_47740 = f__46923__auto__.call(null);
(statearr_47740[(6)] = c__46922__auto___47741);

return statearr_47740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___47741,cs,m,dchan,dctr,done))
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
var G__47799 = arguments.length;
switch (G__47799) {
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
var len__31526__auto___47811 = arguments.length;
var i__31527__auto___47812 = (0);
while(true){
if((i__31527__auto___47812 < len__31526__auto___47811)){
args__31533__auto__.push((arguments[i__31527__auto___47812]));

var G__47813 = (i__31527__auto___47812 + (1));
i__31527__auto___47812 = G__47813;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((3) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31534__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47805){
var map__47806 = p__47805;
var map__47806__$1 = ((((!((map__47806 == null)))?((((map__47806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47806):map__47806);
var opts = map__47806__$1;
var statearr_47808_47814 = state;
(statearr_47808_47814[(1)] = cont_block);


var temp__5290__auto__ = cljs.core.async.do_alts.call(null,((function (map__47806,map__47806__$1,opts){
return (function (val){
var statearr_47809_47815 = state;
(statearr_47809_47815[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47806,map__47806__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5290__auto__)){
var cb = temp__5290__auto__;
var statearr_47810_47816 = state;
(statearr_47810_47816[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47801){
var G__47802 = cljs.core.first.call(null,seq47801);
var seq47801__$1 = cljs.core.next.call(null,seq47801);
var G__47803 = cljs.core.first.call(null,seq47801__$1);
var seq47801__$2 = cljs.core.next.call(null,seq47801__$1);
var G__47804 = cljs.core.first.call(null,seq47801__$2);
var seq47801__$3 = cljs.core.next.call(null,seq47801__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47802,G__47803,G__47804,seq47801__$3);
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
if(typeof cljs.core.async.t_cljs$core$async47817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47817 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta47818){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta47818 = meta47818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47819,meta47818__$1){
var self__ = this;
var _47819__$1 = this;
return (new cljs.core.async.t_cljs$core$async47817(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta47818__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47819){
var self__ = this;
var _47819__$1 = this;
return self__.meta47818;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47817.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47817.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47817.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47817.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47817.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47817.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47817.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async47817.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta47818","meta47818",-1715365696,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47817";

cljs.core.async.t_cljs$core$async47817.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async47817");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47817 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47817(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47818){
return (new cljs.core.async.t_cljs$core$async47817(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47818));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47817(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46922__auto___47981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___47981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___47981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47921){
var state_val_47922 = (state_47921[(1)]);
if((state_val_47922 === (7))){
var inst_47836 = (state_47921[(2)]);
var state_47921__$1 = state_47921;
var statearr_47923_47982 = state_47921__$1;
(statearr_47923_47982[(2)] = inst_47836);

(statearr_47923_47982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (20))){
var inst_47848 = (state_47921[(7)]);
var state_47921__$1 = state_47921;
var statearr_47924_47983 = state_47921__$1;
(statearr_47924_47983[(2)] = inst_47848);

(statearr_47924_47983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (27))){
var state_47921__$1 = state_47921;
var statearr_47925_47984 = state_47921__$1;
(statearr_47925_47984[(2)] = null);

(statearr_47925_47984[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (1))){
var inst_47823 = (state_47921[(8)]);
var inst_47823__$1 = calc_state.call(null);
var inst_47825 = (inst_47823__$1 == null);
var inst_47826 = cljs.core.not.call(null,inst_47825);
var state_47921__$1 = (function (){var statearr_47926 = state_47921;
(statearr_47926[(8)] = inst_47823__$1);

return statearr_47926;
})();
if(inst_47826){
var statearr_47927_47985 = state_47921__$1;
(statearr_47927_47985[(1)] = (2));

} else {
var statearr_47928_47986 = state_47921__$1;
(statearr_47928_47986[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (24))){
var inst_47881 = (state_47921[(9)]);
var inst_47872 = (state_47921[(10)]);
var inst_47895 = (state_47921[(11)]);
var inst_47895__$1 = inst_47872.call(null,inst_47881);
var state_47921__$1 = (function (){var statearr_47929 = state_47921;
(statearr_47929[(11)] = inst_47895__$1);

return statearr_47929;
})();
if(cljs.core.truth_(inst_47895__$1)){
var statearr_47930_47987 = state_47921__$1;
(statearr_47930_47987[(1)] = (29));

} else {
var statearr_47931_47988 = state_47921__$1;
(statearr_47931_47988[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (4))){
var inst_47839 = (state_47921[(2)]);
var state_47921__$1 = state_47921;
if(cljs.core.truth_(inst_47839)){
var statearr_47932_47989 = state_47921__$1;
(statearr_47932_47989[(1)] = (8));

} else {
var statearr_47933_47990 = state_47921__$1;
(statearr_47933_47990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (15))){
var inst_47866 = (state_47921[(2)]);
var state_47921__$1 = state_47921;
if(cljs.core.truth_(inst_47866)){
var statearr_47934_47991 = state_47921__$1;
(statearr_47934_47991[(1)] = (19));

} else {
var statearr_47935_47992 = state_47921__$1;
(statearr_47935_47992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (21))){
var inst_47871 = (state_47921[(12)]);
var inst_47871__$1 = (state_47921[(2)]);
var inst_47872 = cljs.core.get.call(null,inst_47871__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47873 = cljs.core.get.call(null,inst_47871__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47874 = cljs.core.get.call(null,inst_47871__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47921__$1 = (function (){var statearr_47936 = state_47921;
(statearr_47936[(13)] = inst_47873);

(statearr_47936[(12)] = inst_47871__$1);

(statearr_47936[(10)] = inst_47872);

return statearr_47936;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47921__$1,(22),inst_47874);
} else {
if((state_val_47922 === (31))){
var inst_47903 = (state_47921[(2)]);
var state_47921__$1 = state_47921;
if(cljs.core.truth_(inst_47903)){
var statearr_47937_47993 = state_47921__$1;
(statearr_47937_47993[(1)] = (32));

} else {
var statearr_47938_47994 = state_47921__$1;
(statearr_47938_47994[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (32))){
var inst_47880 = (state_47921[(14)]);
var state_47921__$1 = state_47921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47921__$1,(35),out,inst_47880);
} else {
if((state_val_47922 === (33))){
var inst_47871 = (state_47921[(12)]);
var inst_47848 = inst_47871;
var state_47921__$1 = (function (){var statearr_47939 = state_47921;
(statearr_47939[(7)] = inst_47848);

return statearr_47939;
})();
var statearr_47940_47995 = state_47921__$1;
(statearr_47940_47995[(2)] = null);

(statearr_47940_47995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (13))){
var inst_47848 = (state_47921[(7)]);
var inst_47855 = inst_47848.cljs$lang$protocol_mask$partition0$;
var inst_47856 = (inst_47855 & (64));
var inst_47857 = inst_47848.cljs$core$ISeq$;
var inst_47858 = (cljs.core.PROTOCOL_SENTINEL === inst_47857);
var inst_47859 = (inst_47856) || (inst_47858);
var state_47921__$1 = state_47921;
if(cljs.core.truth_(inst_47859)){
var statearr_47941_47996 = state_47921__$1;
(statearr_47941_47996[(1)] = (16));

} else {
var statearr_47942_47997 = state_47921__$1;
(statearr_47942_47997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (22))){
var inst_47881 = (state_47921[(9)]);
var inst_47880 = (state_47921[(14)]);
var inst_47879 = (state_47921[(2)]);
var inst_47880__$1 = cljs.core.nth.call(null,inst_47879,(0),null);
var inst_47881__$1 = cljs.core.nth.call(null,inst_47879,(1),null);
var inst_47882 = (inst_47880__$1 == null);
var inst_47883 = cljs.core._EQ_.call(null,inst_47881__$1,change);
var inst_47884 = (inst_47882) || (inst_47883);
var state_47921__$1 = (function (){var statearr_47943 = state_47921;
(statearr_47943[(9)] = inst_47881__$1);

(statearr_47943[(14)] = inst_47880__$1);

return statearr_47943;
})();
if(cljs.core.truth_(inst_47884)){
var statearr_47944_47998 = state_47921__$1;
(statearr_47944_47998[(1)] = (23));

} else {
var statearr_47945_47999 = state_47921__$1;
(statearr_47945_47999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (36))){
var inst_47871 = (state_47921[(12)]);
var inst_47848 = inst_47871;
var state_47921__$1 = (function (){var statearr_47946 = state_47921;
(statearr_47946[(7)] = inst_47848);

return statearr_47946;
})();
var statearr_47947_48000 = state_47921__$1;
(statearr_47947_48000[(2)] = null);

(statearr_47947_48000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (29))){
var inst_47895 = (state_47921[(11)]);
var state_47921__$1 = state_47921;
var statearr_47948_48001 = state_47921__$1;
(statearr_47948_48001[(2)] = inst_47895);

(statearr_47948_48001[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (6))){
var state_47921__$1 = state_47921;
var statearr_47949_48002 = state_47921__$1;
(statearr_47949_48002[(2)] = false);

(statearr_47949_48002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (28))){
var inst_47891 = (state_47921[(2)]);
var inst_47892 = calc_state.call(null);
var inst_47848 = inst_47892;
var state_47921__$1 = (function (){var statearr_47950 = state_47921;
(statearr_47950[(15)] = inst_47891);

(statearr_47950[(7)] = inst_47848);

return statearr_47950;
})();
var statearr_47951_48003 = state_47921__$1;
(statearr_47951_48003[(2)] = null);

(statearr_47951_48003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (25))){
var inst_47917 = (state_47921[(2)]);
var state_47921__$1 = state_47921;
var statearr_47952_48004 = state_47921__$1;
(statearr_47952_48004[(2)] = inst_47917);

(statearr_47952_48004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (34))){
var inst_47915 = (state_47921[(2)]);
var state_47921__$1 = state_47921;
var statearr_47953_48005 = state_47921__$1;
(statearr_47953_48005[(2)] = inst_47915);

(statearr_47953_48005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (17))){
var state_47921__$1 = state_47921;
var statearr_47954_48006 = state_47921__$1;
(statearr_47954_48006[(2)] = false);

(statearr_47954_48006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (3))){
var state_47921__$1 = state_47921;
var statearr_47955_48007 = state_47921__$1;
(statearr_47955_48007[(2)] = false);

(statearr_47955_48007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (12))){
var inst_47919 = (state_47921[(2)]);
var state_47921__$1 = state_47921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47921__$1,inst_47919);
} else {
if((state_val_47922 === (2))){
var inst_47823 = (state_47921[(8)]);
var inst_47828 = inst_47823.cljs$lang$protocol_mask$partition0$;
var inst_47829 = (inst_47828 & (64));
var inst_47830 = inst_47823.cljs$core$ISeq$;
var inst_47831 = (cljs.core.PROTOCOL_SENTINEL === inst_47830);
var inst_47832 = (inst_47829) || (inst_47831);
var state_47921__$1 = state_47921;
if(cljs.core.truth_(inst_47832)){
var statearr_47956_48008 = state_47921__$1;
(statearr_47956_48008[(1)] = (5));

} else {
var statearr_47957_48009 = state_47921__$1;
(statearr_47957_48009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (23))){
var inst_47880 = (state_47921[(14)]);
var inst_47886 = (inst_47880 == null);
var state_47921__$1 = state_47921;
if(cljs.core.truth_(inst_47886)){
var statearr_47958_48010 = state_47921__$1;
(statearr_47958_48010[(1)] = (26));

} else {
var statearr_47959_48011 = state_47921__$1;
(statearr_47959_48011[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (35))){
var inst_47906 = (state_47921[(2)]);
var state_47921__$1 = state_47921;
if(cljs.core.truth_(inst_47906)){
var statearr_47960_48012 = state_47921__$1;
(statearr_47960_48012[(1)] = (36));

} else {
var statearr_47961_48013 = state_47921__$1;
(statearr_47961_48013[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (19))){
var inst_47848 = (state_47921[(7)]);
var inst_47868 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47848);
var state_47921__$1 = state_47921;
var statearr_47962_48014 = state_47921__$1;
(statearr_47962_48014[(2)] = inst_47868);

(statearr_47962_48014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (11))){
var inst_47848 = (state_47921[(7)]);
var inst_47852 = (inst_47848 == null);
var inst_47853 = cljs.core.not.call(null,inst_47852);
var state_47921__$1 = state_47921;
if(inst_47853){
var statearr_47963_48015 = state_47921__$1;
(statearr_47963_48015[(1)] = (13));

} else {
var statearr_47964_48016 = state_47921__$1;
(statearr_47964_48016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (9))){
var inst_47823 = (state_47921[(8)]);
var state_47921__$1 = state_47921;
var statearr_47965_48017 = state_47921__$1;
(statearr_47965_48017[(2)] = inst_47823);

(statearr_47965_48017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (5))){
var state_47921__$1 = state_47921;
var statearr_47966_48018 = state_47921__$1;
(statearr_47966_48018[(2)] = true);

(statearr_47966_48018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (14))){
var state_47921__$1 = state_47921;
var statearr_47967_48019 = state_47921__$1;
(statearr_47967_48019[(2)] = false);

(statearr_47967_48019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (26))){
var inst_47881 = (state_47921[(9)]);
var inst_47888 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47881);
var state_47921__$1 = state_47921;
var statearr_47968_48020 = state_47921__$1;
(statearr_47968_48020[(2)] = inst_47888);

(statearr_47968_48020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (16))){
var state_47921__$1 = state_47921;
var statearr_47969_48021 = state_47921__$1;
(statearr_47969_48021[(2)] = true);

(statearr_47969_48021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (38))){
var inst_47911 = (state_47921[(2)]);
var state_47921__$1 = state_47921;
var statearr_47970_48022 = state_47921__$1;
(statearr_47970_48022[(2)] = inst_47911);

(statearr_47970_48022[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (30))){
var inst_47881 = (state_47921[(9)]);
var inst_47873 = (state_47921[(13)]);
var inst_47872 = (state_47921[(10)]);
var inst_47898 = cljs.core.empty_QMARK_.call(null,inst_47872);
var inst_47899 = inst_47873.call(null,inst_47881);
var inst_47900 = cljs.core.not.call(null,inst_47899);
var inst_47901 = (inst_47898) && (inst_47900);
var state_47921__$1 = state_47921;
var statearr_47971_48023 = state_47921__$1;
(statearr_47971_48023[(2)] = inst_47901);

(statearr_47971_48023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (10))){
var inst_47823 = (state_47921[(8)]);
var inst_47844 = (state_47921[(2)]);
var inst_47845 = cljs.core.get.call(null,inst_47844,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47846 = cljs.core.get.call(null,inst_47844,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47847 = cljs.core.get.call(null,inst_47844,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47848 = inst_47823;
var state_47921__$1 = (function (){var statearr_47972 = state_47921;
(statearr_47972[(16)] = inst_47845);

(statearr_47972[(17)] = inst_47847);

(statearr_47972[(18)] = inst_47846);

(statearr_47972[(7)] = inst_47848);

return statearr_47972;
})();
var statearr_47973_48024 = state_47921__$1;
(statearr_47973_48024[(2)] = null);

(statearr_47973_48024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (18))){
var inst_47863 = (state_47921[(2)]);
var state_47921__$1 = state_47921;
var statearr_47974_48025 = state_47921__$1;
(statearr_47974_48025[(2)] = inst_47863);

(statearr_47974_48025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (37))){
var state_47921__$1 = state_47921;
var statearr_47975_48026 = state_47921__$1;
(statearr_47975_48026[(2)] = null);

(statearr_47975_48026[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47922 === (8))){
var inst_47823 = (state_47921[(8)]);
var inst_47841 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47823);
var state_47921__$1 = state_47921;
var statearr_47976_48027 = state_47921__$1;
(statearr_47976_48027[(2)] = inst_47841);

(statearr_47976_48027[(1)] = (10));


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
});})(c__46922__auto___47981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46832__auto__,c__46922__auto___47981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46833__auto__ = null;
var cljs$core$async$mix_$_state_machine__46833__auto____0 = (function (){
var statearr_47977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47977[(0)] = cljs$core$async$mix_$_state_machine__46833__auto__);

(statearr_47977[(1)] = (1));

return statearr_47977;
});
var cljs$core$async$mix_$_state_machine__46833__auto____1 = (function (state_47921){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_47921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e47978){if((e47978 instanceof Object)){
var ex__46836__auto__ = e47978;
var statearr_47979_48028 = state_47921;
(statearr_47979_48028[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48029 = state_47921;
state_47921 = G__48029;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46833__auto__ = function(state_47921){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46833__auto____1.call(this,state_47921);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46833__auto____0;
cljs$core$async$mix_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46833__auto____1;
return cljs$core$async$mix_$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___47981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46924__auto__ = (function (){var statearr_47980 = f__46923__auto__.call(null);
(statearr_47980[(6)] = c__46922__auto___47981);

return statearr_47980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___47981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__48031 = arguments.length;
switch (G__48031) {
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
var G__48035 = arguments.length;
switch (G__48035) {
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
return (function (p1__48033_SHARP_){
if(cljs.core.truth_(p1__48033_SHARP_.call(null,topic))){
return p1__48033_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48033_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30249__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48036 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48037){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48037 = meta48037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48038,meta48037__$1){
var self__ = this;
var _48038__$1 = this;
return (new cljs.core.async.t_cljs$core$async48036(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48037__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48038){
var self__ = this;
var _48038__$1 = this;
return self__.meta48037;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48036.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48037","meta48037",-1961503867,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48036";

cljs.core.async.t_cljs$core$async48036.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async48036");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48036 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48036(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48037){
return (new cljs.core.async.t_cljs$core$async48036(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48037));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48036(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46922__auto___48156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___48156,mults,ensure_mult,p){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___48156,mults,ensure_mult,p){
return (function (state_48110){
var state_val_48111 = (state_48110[(1)]);
if((state_val_48111 === (7))){
var inst_48106 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48112_48157 = state_48110__$1;
(statearr_48112_48157[(2)] = inst_48106);

(statearr_48112_48157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (20))){
var state_48110__$1 = state_48110;
var statearr_48113_48158 = state_48110__$1;
(statearr_48113_48158[(2)] = null);

(statearr_48113_48158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (1))){
var state_48110__$1 = state_48110;
var statearr_48114_48159 = state_48110__$1;
(statearr_48114_48159[(2)] = null);

(statearr_48114_48159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (24))){
var inst_48089 = (state_48110[(7)]);
var inst_48098 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48089);
var state_48110__$1 = state_48110;
var statearr_48115_48160 = state_48110__$1;
(statearr_48115_48160[(2)] = inst_48098);

(statearr_48115_48160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (4))){
var inst_48041 = (state_48110[(8)]);
var inst_48041__$1 = (state_48110[(2)]);
var inst_48042 = (inst_48041__$1 == null);
var state_48110__$1 = (function (){var statearr_48116 = state_48110;
(statearr_48116[(8)] = inst_48041__$1);

return statearr_48116;
})();
if(cljs.core.truth_(inst_48042)){
var statearr_48117_48161 = state_48110__$1;
(statearr_48117_48161[(1)] = (5));

} else {
var statearr_48118_48162 = state_48110__$1;
(statearr_48118_48162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (15))){
var inst_48083 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48119_48163 = state_48110__$1;
(statearr_48119_48163[(2)] = inst_48083);

(statearr_48119_48163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (21))){
var inst_48103 = (state_48110[(2)]);
var state_48110__$1 = (function (){var statearr_48120 = state_48110;
(statearr_48120[(9)] = inst_48103);

return statearr_48120;
})();
var statearr_48121_48164 = state_48110__$1;
(statearr_48121_48164[(2)] = null);

(statearr_48121_48164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (13))){
var inst_48065 = (state_48110[(10)]);
var inst_48067 = cljs.core.chunked_seq_QMARK_.call(null,inst_48065);
var state_48110__$1 = state_48110;
if(inst_48067){
var statearr_48122_48165 = state_48110__$1;
(statearr_48122_48165[(1)] = (16));

} else {
var statearr_48123_48166 = state_48110__$1;
(statearr_48123_48166[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (22))){
var inst_48095 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
if(cljs.core.truth_(inst_48095)){
var statearr_48124_48167 = state_48110__$1;
(statearr_48124_48167[(1)] = (23));

} else {
var statearr_48125_48168 = state_48110__$1;
(statearr_48125_48168[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (6))){
var inst_48041 = (state_48110[(8)]);
var inst_48089 = (state_48110[(7)]);
var inst_48091 = (state_48110[(11)]);
var inst_48089__$1 = topic_fn.call(null,inst_48041);
var inst_48090 = cljs.core.deref.call(null,mults);
var inst_48091__$1 = cljs.core.get.call(null,inst_48090,inst_48089__$1);
var state_48110__$1 = (function (){var statearr_48126 = state_48110;
(statearr_48126[(7)] = inst_48089__$1);

(statearr_48126[(11)] = inst_48091__$1);

return statearr_48126;
})();
if(cljs.core.truth_(inst_48091__$1)){
var statearr_48127_48169 = state_48110__$1;
(statearr_48127_48169[(1)] = (19));

} else {
var statearr_48128_48170 = state_48110__$1;
(statearr_48128_48170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (25))){
var inst_48100 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48129_48171 = state_48110__$1;
(statearr_48129_48171[(2)] = inst_48100);

(statearr_48129_48171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (17))){
var inst_48065 = (state_48110[(10)]);
var inst_48074 = cljs.core.first.call(null,inst_48065);
var inst_48075 = cljs.core.async.muxch_STAR_.call(null,inst_48074);
var inst_48076 = cljs.core.async.close_BANG_.call(null,inst_48075);
var inst_48077 = cljs.core.next.call(null,inst_48065);
var inst_48051 = inst_48077;
var inst_48052 = null;
var inst_48053 = (0);
var inst_48054 = (0);
var state_48110__$1 = (function (){var statearr_48130 = state_48110;
(statearr_48130[(12)] = inst_48051);

(statearr_48130[(13)] = inst_48054);

(statearr_48130[(14)] = inst_48052);

(statearr_48130[(15)] = inst_48076);

(statearr_48130[(16)] = inst_48053);

return statearr_48130;
})();
var statearr_48131_48172 = state_48110__$1;
(statearr_48131_48172[(2)] = null);

(statearr_48131_48172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (3))){
var inst_48108 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48110__$1,inst_48108);
} else {
if((state_val_48111 === (12))){
var inst_48085 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48132_48173 = state_48110__$1;
(statearr_48132_48173[(2)] = inst_48085);

(statearr_48132_48173[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (2))){
var state_48110__$1 = state_48110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48110__$1,(4),ch);
} else {
if((state_val_48111 === (23))){
var state_48110__$1 = state_48110;
var statearr_48133_48174 = state_48110__$1;
(statearr_48133_48174[(2)] = null);

(statearr_48133_48174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (19))){
var inst_48041 = (state_48110[(8)]);
var inst_48091 = (state_48110[(11)]);
var inst_48093 = cljs.core.async.muxch_STAR_.call(null,inst_48091);
var state_48110__$1 = state_48110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48110__$1,(22),inst_48093,inst_48041);
} else {
if((state_val_48111 === (11))){
var inst_48051 = (state_48110[(12)]);
var inst_48065 = (state_48110[(10)]);
var inst_48065__$1 = cljs.core.seq.call(null,inst_48051);
var state_48110__$1 = (function (){var statearr_48134 = state_48110;
(statearr_48134[(10)] = inst_48065__$1);

return statearr_48134;
})();
if(inst_48065__$1){
var statearr_48135_48175 = state_48110__$1;
(statearr_48135_48175[(1)] = (13));

} else {
var statearr_48136_48176 = state_48110__$1;
(statearr_48136_48176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (9))){
var inst_48087 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48137_48177 = state_48110__$1;
(statearr_48137_48177[(2)] = inst_48087);

(statearr_48137_48177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (5))){
var inst_48048 = cljs.core.deref.call(null,mults);
var inst_48049 = cljs.core.vals.call(null,inst_48048);
var inst_48050 = cljs.core.seq.call(null,inst_48049);
var inst_48051 = inst_48050;
var inst_48052 = null;
var inst_48053 = (0);
var inst_48054 = (0);
var state_48110__$1 = (function (){var statearr_48138 = state_48110;
(statearr_48138[(12)] = inst_48051);

(statearr_48138[(13)] = inst_48054);

(statearr_48138[(14)] = inst_48052);

(statearr_48138[(16)] = inst_48053);

return statearr_48138;
})();
var statearr_48139_48178 = state_48110__$1;
(statearr_48139_48178[(2)] = null);

(statearr_48139_48178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (14))){
var state_48110__$1 = state_48110;
var statearr_48143_48179 = state_48110__$1;
(statearr_48143_48179[(2)] = null);

(statearr_48143_48179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (16))){
var inst_48065 = (state_48110[(10)]);
var inst_48069 = cljs.core.chunk_first.call(null,inst_48065);
var inst_48070 = cljs.core.chunk_rest.call(null,inst_48065);
var inst_48071 = cljs.core.count.call(null,inst_48069);
var inst_48051 = inst_48070;
var inst_48052 = inst_48069;
var inst_48053 = inst_48071;
var inst_48054 = (0);
var state_48110__$1 = (function (){var statearr_48144 = state_48110;
(statearr_48144[(12)] = inst_48051);

(statearr_48144[(13)] = inst_48054);

(statearr_48144[(14)] = inst_48052);

(statearr_48144[(16)] = inst_48053);

return statearr_48144;
})();
var statearr_48145_48180 = state_48110__$1;
(statearr_48145_48180[(2)] = null);

(statearr_48145_48180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (10))){
var inst_48051 = (state_48110[(12)]);
var inst_48054 = (state_48110[(13)]);
var inst_48052 = (state_48110[(14)]);
var inst_48053 = (state_48110[(16)]);
var inst_48059 = cljs.core._nth.call(null,inst_48052,inst_48054);
var inst_48060 = cljs.core.async.muxch_STAR_.call(null,inst_48059);
var inst_48061 = cljs.core.async.close_BANG_.call(null,inst_48060);
var inst_48062 = (inst_48054 + (1));
var tmp48140 = inst_48051;
var tmp48141 = inst_48052;
var tmp48142 = inst_48053;
var inst_48051__$1 = tmp48140;
var inst_48052__$1 = tmp48141;
var inst_48053__$1 = tmp48142;
var inst_48054__$1 = inst_48062;
var state_48110__$1 = (function (){var statearr_48146 = state_48110;
(statearr_48146[(12)] = inst_48051__$1);

(statearr_48146[(13)] = inst_48054__$1);

(statearr_48146[(14)] = inst_48052__$1);

(statearr_48146[(17)] = inst_48061);

(statearr_48146[(16)] = inst_48053__$1);

return statearr_48146;
})();
var statearr_48147_48181 = state_48110__$1;
(statearr_48147_48181[(2)] = null);

(statearr_48147_48181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (18))){
var inst_48080 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48148_48182 = state_48110__$1;
(statearr_48148_48182[(2)] = inst_48080);

(statearr_48148_48182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (8))){
var inst_48054 = (state_48110[(13)]);
var inst_48053 = (state_48110[(16)]);
var inst_48056 = (inst_48054 < inst_48053);
var inst_48057 = inst_48056;
var state_48110__$1 = state_48110;
if(cljs.core.truth_(inst_48057)){
var statearr_48149_48183 = state_48110__$1;
(statearr_48149_48183[(1)] = (10));

} else {
var statearr_48150_48184 = state_48110__$1;
(statearr_48150_48184[(1)] = (11));

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
});})(c__46922__auto___48156,mults,ensure_mult,p))
;
return ((function (switch__46832__auto__,c__46922__auto___48156,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46833__auto__ = null;
var cljs$core$async$state_machine__46833__auto____0 = (function (){
var statearr_48151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48151[(0)] = cljs$core$async$state_machine__46833__auto__);

(statearr_48151[(1)] = (1));

return statearr_48151;
});
var cljs$core$async$state_machine__46833__auto____1 = (function (state_48110){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_48110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e48152){if((e48152 instanceof Object)){
var ex__46836__auto__ = e48152;
var statearr_48153_48185 = state_48110;
(statearr_48153_48185[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48186 = state_48110;
state_48110 = G__48186;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$state_machine__46833__auto__ = function(state_48110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46833__auto____1.call(this,state_48110);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46833__auto____0;
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46833__auto____1;
return cljs$core$async$state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___48156,mults,ensure_mult,p))
})();
var state__46924__auto__ = (function (){var statearr_48154 = f__46923__auto__.call(null);
(statearr_48154[(6)] = c__46922__auto___48156);

return statearr_48154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___48156,mults,ensure_mult,p))
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
var G__48188 = arguments.length;
switch (G__48188) {
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
var G__48191 = arguments.length;
switch (G__48191) {
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
var G__48194 = arguments.length;
switch (G__48194) {
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
var c__46922__auto___48261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___48261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___48261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48233){
var state_val_48234 = (state_48233[(1)]);
if((state_val_48234 === (7))){
var state_48233__$1 = state_48233;
var statearr_48235_48262 = state_48233__$1;
(statearr_48235_48262[(2)] = null);

(statearr_48235_48262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (1))){
var state_48233__$1 = state_48233;
var statearr_48236_48263 = state_48233__$1;
(statearr_48236_48263[(2)] = null);

(statearr_48236_48263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (4))){
var inst_48197 = (state_48233[(7)]);
var inst_48199 = (inst_48197 < cnt);
var state_48233__$1 = state_48233;
if(cljs.core.truth_(inst_48199)){
var statearr_48237_48264 = state_48233__$1;
(statearr_48237_48264[(1)] = (6));

} else {
var statearr_48238_48265 = state_48233__$1;
(statearr_48238_48265[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (15))){
var inst_48229 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48239_48266 = state_48233__$1;
(statearr_48239_48266[(2)] = inst_48229);

(statearr_48239_48266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (13))){
var inst_48222 = cljs.core.async.close_BANG_.call(null,out);
var state_48233__$1 = state_48233;
var statearr_48240_48267 = state_48233__$1;
(statearr_48240_48267[(2)] = inst_48222);

(statearr_48240_48267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (6))){
var state_48233__$1 = state_48233;
var statearr_48241_48268 = state_48233__$1;
(statearr_48241_48268[(2)] = null);

(statearr_48241_48268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (3))){
var inst_48231 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48233__$1,inst_48231);
} else {
if((state_val_48234 === (12))){
var inst_48219 = (state_48233[(8)]);
var inst_48219__$1 = (state_48233[(2)]);
var inst_48220 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48219__$1);
var state_48233__$1 = (function (){var statearr_48242 = state_48233;
(statearr_48242[(8)] = inst_48219__$1);

return statearr_48242;
})();
if(cljs.core.truth_(inst_48220)){
var statearr_48243_48269 = state_48233__$1;
(statearr_48243_48269[(1)] = (13));

} else {
var statearr_48244_48270 = state_48233__$1;
(statearr_48244_48270[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (2))){
var inst_48196 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48197 = (0);
var state_48233__$1 = (function (){var statearr_48245 = state_48233;
(statearr_48245[(7)] = inst_48197);

(statearr_48245[(9)] = inst_48196);

return statearr_48245;
})();
var statearr_48246_48271 = state_48233__$1;
(statearr_48246_48271[(2)] = null);

(statearr_48246_48271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (11))){
var inst_48197 = (state_48233[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48233,(10),Object,null,(9));
var inst_48206 = chs__$1.call(null,inst_48197);
var inst_48207 = done.call(null,inst_48197);
var inst_48208 = cljs.core.async.take_BANG_.call(null,inst_48206,inst_48207);
var state_48233__$1 = state_48233;
var statearr_48247_48272 = state_48233__$1;
(statearr_48247_48272[(2)] = inst_48208);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48233__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (9))){
var inst_48197 = (state_48233[(7)]);
var inst_48210 = (state_48233[(2)]);
var inst_48211 = (inst_48197 + (1));
var inst_48197__$1 = inst_48211;
var state_48233__$1 = (function (){var statearr_48248 = state_48233;
(statearr_48248[(10)] = inst_48210);

(statearr_48248[(7)] = inst_48197__$1);

return statearr_48248;
})();
var statearr_48249_48273 = state_48233__$1;
(statearr_48249_48273[(2)] = null);

(statearr_48249_48273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (5))){
var inst_48217 = (state_48233[(2)]);
var state_48233__$1 = (function (){var statearr_48250 = state_48233;
(statearr_48250[(11)] = inst_48217);

return statearr_48250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48233__$1,(12),dchan);
} else {
if((state_val_48234 === (14))){
var inst_48219 = (state_48233[(8)]);
var inst_48224 = cljs.core.apply.call(null,f,inst_48219);
var state_48233__$1 = state_48233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48233__$1,(16),out,inst_48224);
} else {
if((state_val_48234 === (16))){
var inst_48226 = (state_48233[(2)]);
var state_48233__$1 = (function (){var statearr_48251 = state_48233;
(statearr_48251[(12)] = inst_48226);

return statearr_48251;
})();
var statearr_48252_48274 = state_48233__$1;
(statearr_48252_48274[(2)] = null);

(statearr_48252_48274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (10))){
var inst_48201 = (state_48233[(2)]);
var inst_48202 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48233__$1 = (function (){var statearr_48253 = state_48233;
(statearr_48253[(13)] = inst_48201);

return statearr_48253;
})();
var statearr_48254_48275 = state_48233__$1;
(statearr_48254_48275[(2)] = inst_48202);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48233__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (8))){
var inst_48215 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48255_48276 = state_48233__$1;
(statearr_48255_48276[(2)] = inst_48215);

(statearr_48255_48276[(1)] = (5));


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
});})(c__46922__auto___48261,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46832__auto__,c__46922__auto___48261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46833__auto__ = null;
var cljs$core$async$state_machine__46833__auto____0 = (function (){
var statearr_48256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48256[(0)] = cljs$core$async$state_machine__46833__auto__);

(statearr_48256[(1)] = (1));

return statearr_48256;
});
var cljs$core$async$state_machine__46833__auto____1 = (function (state_48233){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_48233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e48257){if((e48257 instanceof Object)){
var ex__46836__auto__ = e48257;
var statearr_48258_48277 = state_48233;
(statearr_48258_48277[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48278 = state_48233;
state_48233 = G__48278;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$state_machine__46833__auto__ = function(state_48233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46833__auto____1.call(this,state_48233);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46833__auto____0;
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46833__auto____1;
return cljs$core$async$state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___48261,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46924__auto__ = (function (){var statearr_48259 = f__46923__auto__.call(null);
(statearr_48259[(6)] = c__46922__auto___48261);

return statearr_48259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___48261,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__48281 = arguments.length;
switch (G__48281) {
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
var c__46922__auto___48335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___48335,out){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___48335,out){
return (function (state_48313){
var state_val_48314 = (state_48313[(1)]);
if((state_val_48314 === (7))){
var inst_48292 = (state_48313[(7)]);
var inst_48293 = (state_48313[(8)]);
var inst_48292__$1 = (state_48313[(2)]);
var inst_48293__$1 = cljs.core.nth.call(null,inst_48292__$1,(0),null);
var inst_48294 = cljs.core.nth.call(null,inst_48292__$1,(1),null);
var inst_48295 = (inst_48293__$1 == null);
var state_48313__$1 = (function (){var statearr_48315 = state_48313;
(statearr_48315[(9)] = inst_48294);

(statearr_48315[(7)] = inst_48292__$1);

(statearr_48315[(8)] = inst_48293__$1);

return statearr_48315;
})();
if(cljs.core.truth_(inst_48295)){
var statearr_48316_48336 = state_48313__$1;
(statearr_48316_48336[(1)] = (8));

} else {
var statearr_48317_48337 = state_48313__$1;
(statearr_48317_48337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (1))){
var inst_48282 = cljs.core.vec.call(null,chs);
var inst_48283 = inst_48282;
var state_48313__$1 = (function (){var statearr_48318 = state_48313;
(statearr_48318[(10)] = inst_48283);

return statearr_48318;
})();
var statearr_48319_48338 = state_48313__$1;
(statearr_48319_48338[(2)] = null);

(statearr_48319_48338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (4))){
var inst_48283 = (state_48313[(10)]);
var state_48313__$1 = state_48313;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48313__$1,(7),inst_48283);
} else {
if((state_val_48314 === (6))){
var inst_48309 = (state_48313[(2)]);
var state_48313__$1 = state_48313;
var statearr_48320_48339 = state_48313__$1;
(statearr_48320_48339[(2)] = inst_48309);

(statearr_48320_48339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (3))){
var inst_48311 = (state_48313[(2)]);
var state_48313__$1 = state_48313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48313__$1,inst_48311);
} else {
if((state_val_48314 === (2))){
var inst_48283 = (state_48313[(10)]);
var inst_48285 = cljs.core.count.call(null,inst_48283);
var inst_48286 = (inst_48285 > (0));
var state_48313__$1 = state_48313;
if(cljs.core.truth_(inst_48286)){
var statearr_48322_48340 = state_48313__$1;
(statearr_48322_48340[(1)] = (4));

} else {
var statearr_48323_48341 = state_48313__$1;
(statearr_48323_48341[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (11))){
var inst_48283 = (state_48313[(10)]);
var inst_48302 = (state_48313[(2)]);
var tmp48321 = inst_48283;
var inst_48283__$1 = tmp48321;
var state_48313__$1 = (function (){var statearr_48324 = state_48313;
(statearr_48324[(11)] = inst_48302);

(statearr_48324[(10)] = inst_48283__$1);

return statearr_48324;
})();
var statearr_48325_48342 = state_48313__$1;
(statearr_48325_48342[(2)] = null);

(statearr_48325_48342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (9))){
var inst_48293 = (state_48313[(8)]);
var state_48313__$1 = state_48313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48313__$1,(11),out,inst_48293);
} else {
if((state_val_48314 === (5))){
var inst_48307 = cljs.core.async.close_BANG_.call(null,out);
var state_48313__$1 = state_48313;
var statearr_48326_48343 = state_48313__$1;
(statearr_48326_48343[(2)] = inst_48307);

(statearr_48326_48343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (10))){
var inst_48305 = (state_48313[(2)]);
var state_48313__$1 = state_48313;
var statearr_48327_48344 = state_48313__$1;
(statearr_48327_48344[(2)] = inst_48305);

(statearr_48327_48344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (8))){
var inst_48283 = (state_48313[(10)]);
var inst_48294 = (state_48313[(9)]);
var inst_48292 = (state_48313[(7)]);
var inst_48293 = (state_48313[(8)]);
var inst_48297 = (function (){var cs = inst_48283;
var vec__48288 = inst_48292;
var v = inst_48293;
var c = inst_48294;
return ((function (cs,vec__48288,v,c,inst_48283,inst_48294,inst_48292,inst_48293,state_val_48314,c__46922__auto___48335,out){
return (function (p1__48279_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48279_SHARP_);
});
;})(cs,vec__48288,v,c,inst_48283,inst_48294,inst_48292,inst_48293,state_val_48314,c__46922__auto___48335,out))
})();
var inst_48298 = cljs.core.filterv.call(null,inst_48297,inst_48283);
var inst_48283__$1 = inst_48298;
var state_48313__$1 = (function (){var statearr_48328 = state_48313;
(statearr_48328[(10)] = inst_48283__$1);

return statearr_48328;
})();
var statearr_48329_48345 = state_48313__$1;
(statearr_48329_48345[(2)] = null);

(statearr_48329_48345[(1)] = (2));


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
});})(c__46922__auto___48335,out))
;
return ((function (switch__46832__auto__,c__46922__auto___48335,out){
return (function() {
var cljs$core$async$state_machine__46833__auto__ = null;
var cljs$core$async$state_machine__46833__auto____0 = (function (){
var statearr_48330 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48330[(0)] = cljs$core$async$state_machine__46833__auto__);

(statearr_48330[(1)] = (1));

return statearr_48330;
});
var cljs$core$async$state_machine__46833__auto____1 = (function (state_48313){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_48313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e48331){if((e48331 instanceof Object)){
var ex__46836__auto__ = e48331;
var statearr_48332_48346 = state_48313;
(statearr_48332_48346[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48347 = state_48313;
state_48313 = G__48347;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$state_machine__46833__auto__ = function(state_48313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46833__auto____1.call(this,state_48313);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46833__auto____0;
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46833__auto____1;
return cljs$core$async$state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___48335,out))
})();
var state__46924__auto__ = (function (){var statearr_48333 = f__46923__auto__.call(null);
(statearr_48333[(6)] = c__46922__auto___48335);

return statearr_48333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___48335,out))
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
var G__48349 = arguments.length;
switch (G__48349) {
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
var c__46922__auto___48394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___48394,out){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___48394,out){
return (function (state_48373){
var state_val_48374 = (state_48373[(1)]);
if((state_val_48374 === (7))){
var inst_48355 = (state_48373[(7)]);
var inst_48355__$1 = (state_48373[(2)]);
var inst_48356 = (inst_48355__$1 == null);
var inst_48357 = cljs.core.not.call(null,inst_48356);
var state_48373__$1 = (function (){var statearr_48375 = state_48373;
(statearr_48375[(7)] = inst_48355__$1);

return statearr_48375;
})();
if(inst_48357){
var statearr_48376_48395 = state_48373__$1;
(statearr_48376_48395[(1)] = (8));

} else {
var statearr_48377_48396 = state_48373__$1;
(statearr_48377_48396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48374 === (1))){
var inst_48350 = (0);
var state_48373__$1 = (function (){var statearr_48378 = state_48373;
(statearr_48378[(8)] = inst_48350);

return statearr_48378;
})();
var statearr_48379_48397 = state_48373__$1;
(statearr_48379_48397[(2)] = null);

(statearr_48379_48397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48374 === (4))){
var state_48373__$1 = state_48373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48373__$1,(7),ch);
} else {
if((state_val_48374 === (6))){
var inst_48368 = (state_48373[(2)]);
var state_48373__$1 = state_48373;
var statearr_48380_48398 = state_48373__$1;
(statearr_48380_48398[(2)] = inst_48368);

(statearr_48380_48398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48374 === (3))){
var inst_48370 = (state_48373[(2)]);
var inst_48371 = cljs.core.async.close_BANG_.call(null,out);
var state_48373__$1 = (function (){var statearr_48381 = state_48373;
(statearr_48381[(9)] = inst_48370);

return statearr_48381;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48373__$1,inst_48371);
} else {
if((state_val_48374 === (2))){
var inst_48350 = (state_48373[(8)]);
var inst_48352 = (inst_48350 < n);
var state_48373__$1 = state_48373;
if(cljs.core.truth_(inst_48352)){
var statearr_48382_48399 = state_48373__$1;
(statearr_48382_48399[(1)] = (4));

} else {
var statearr_48383_48400 = state_48373__$1;
(statearr_48383_48400[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48374 === (11))){
var inst_48350 = (state_48373[(8)]);
var inst_48360 = (state_48373[(2)]);
var inst_48361 = (inst_48350 + (1));
var inst_48350__$1 = inst_48361;
var state_48373__$1 = (function (){var statearr_48384 = state_48373;
(statearr_48384[(10)] = inst_48360);

(statearr_48384[(8)] = inst_48350__$1);

return statearr_48384;
})();
var statearr_48385_48401 = state_48373__$1;
(statearr_48385_48401[(2)] = null);

(statearr_48385_48401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48374 === (9))){
var state_48373__$1 = state_48373;
var statearr_48386_48402 = state_48373__$1;
(statearr_48386_48402[(2)] = null);

(statearr_48386_48402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48374 === (5))){
var state_48373__$1 = state_48373;
var statearr_48387_48403 = state_48373__$1;
(statearr_48387_48403[(2)] = null);

(statearr_48387_48403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48374 === (10))){
var inst_48365 = (state_48373[(2)]);
var state_48373__$1 = state_48373;
var statearr_48388_48404 = state_48373__$1;
(statearr_48388_48404[(2)] = inst_48365);

(statearr_48388_48404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48374 === (8))){
var inst_48355 = (state_48373[(7)]);
var state_48373__$1 = state_48373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48373__$1,(11),out,inst_48355);
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
});})(c__46922__auto___48394,out))
;
return ((function (switch__46832__auto__,c__46922__auto___48394,out){
return (function() {
var cljs$core$async$state_machine__46833__auto__ = null;
var cljs$core$async$state_machine__46833__auto____0 = (function (){
var statearr_48389 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48389[(0)] = cljs$core$async$state_machine__46833__auto__);

(statearr_48389[(1)] = (1));

return statearr_48389;
});
var cljs$core$async$state_machine__46833__auto____1 = (function (state_48373){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_48373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e48390){if((e48390 instanceof Object)){
var ex__46836__auto__ = e48390;
var statearr_48391_48405 = state_48373;
(statearr_48391_48405[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48406 = state_48373;
state_48373 = G__48406;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$state_machine__46833__auto__ = function(state_48373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46833__auto____1.call(this,state_48373);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46833__auto____0;
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46833__auto____1;
return cljs$core$async$state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___48394,out))
})();
var state__46924__auto__ = (function (){var statearr_48392 = f__46923__auto__.call(null);
(statearr_48392[(6)] = c__46922__auto___48394);

return statearr_48392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___48394,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48408 = (function (f,ch,meta48409){
this.f = f;
this.ch = ch;
this.meta48409 = meta48409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48410,meta48409__$1){
var self__ = this;
var _48410__$1 = this;
return (new cljs.core.async.t_cljs$core$async48408(self__.f,self__.ch,meta48409__$1));
});

cljs.core.async.t_cljs$core$async48408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48410){
var self__ = this;
var _48410__$1 = this;
return self__.meta48409;
});

cljs.core.async.t_cljs$core$async48408.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48408.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48408.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48408.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48408.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48411 = (function (f,ch,meta48409,_,fn1,meta48412){
this.f = f;
this.ch = ch;
this.meta48409 = meta48409;
this._ = _;
this.fn1 = fn1;
this.meta48412 = meta48412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48413,meta48412__$1){
var self__ = this;
var _48413__$1 = this;
return (new cljs.core.async.t_cljs$core$async48411(self__.f,self__.ch,self__.meta48409,self__._,self__.fn1,meta48412__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48413){
var self__ = this;
var _48413__$1 = this;
return self__.meta48412;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48407_SHARP_){
return f1.call(null,(((p1__48407_SHARP_ == null))?null:self__.f.call(null,p1__48407_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48411.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48409","meta48409",-1429766497,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48408","cljs.core.async/t_cljs$core$async48408",1716181804,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48412","meta48412",1033995458,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48411";

cljs.core.async.t_cljs$core$async48411.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async48411");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48411 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48411(f__$1,ch__$1,meta48409__$1,___$2,fn1__$1,meta48412){
return (new cljs.core.async.t_cljs$core$async48411(f__$1,ch__$1,meta48409__$1,___$2,fn1__$1,meta48412));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48411(self__.f,self__.ch,self__.meta48409,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async48408.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48408.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48409","meta48409",-1429766497,null)], null);
});

cljs.core.async.t_cljs$core$async48408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48408";

cljs.core.async.t_cljs$core$async48408.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async48408");
});

cljs.core.async.__GT_t_cljs$core$async48408 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48408(f__$1,ch__$1,meta48409){
return (new cljs.core.async.t_cljs$core$async48408(f__$1,ch__$1,meta48409));
});

}

return (new cljs.core.async.t_cljs$core$async48408(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48414 = (function (f,ch,meta48415){
this.f = f;
this.ch = ch;
this.meta48415 = meta48415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48416,meta48415__$1){
var self__ = this;
var _48416__$1 = this;
return (new cljs.core.async.t_cljs$core$async48414(self__.f,self__.ch,meta48415__$1));
});

cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48416){
var self__ = this;
var _48416__$1 = this;
return self__.meta48415;
});

cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48415","meta48415",1651873013,null)], null);
});

cljs.core.async.t_cljs$core$async48414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48414";

cljs.core.async.t_cljs$core$async48414.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async48414");
});

cljs.core.async.__GT_t_cljs$core$async48414 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48414(f__$1,ch__$1,meta48415){
return (new cljs.core.async.t_cljs$core$async48414(f__$1,ch__$1,meta48415));
});

}

return (new cljs.core.async.t_cljs$core$async48414(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48417 = (function (p,ch,meta48418){
this.p = p;
this.ch = ch;
this.meta48418 = meta48418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48419,meta48418__$1){
var self__ = this;
var _48419__$1 = this;
return (new cljs.core.async.t_cljs$core$async48417(self__.p,self__.ch,meta48418__$1));
});

cljs.core.async.t_cljs$core$async48417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48419){
var self__ = this;
var _48419__$1 = this;
return self__.meta48418;
});

cljs.core.async.t_cljs$core$async48417.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48417.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48417.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48417.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48418","meta48418",1322167135,null)], null);
});

cljs.core.async.t_cljs$core$async48417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48417";

cljs.core.async.t_cljs$core$async48417.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async48417");
});

cljs.core.async.__GT_t_cljs$core$async48417 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48417(p__$1,ch__$1,meta48418){
return (new cljs.core.async.t_cljs$core$async48417(p__$1,ch__$1,meta48418));
});

}

return (new cljs.core.async.t_cljs$core$async48417(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48421 = arguments.length;
switch (G__48421) {
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
var c__46922__auto___48461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___48461,out){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___48461,out){
return (function (state_48442){
var state_val_48443 = (state_48442[(1)]);
if((state_val_48443 === (7))){
var inst_48438 = (state_48442[(2)]);
var state_48442__$1 = state_48442;
var statearr_48444_48462 = state_48442__$1;
(statearr_48444_48462[(2)] = inst_48438);

(statearr_48444_48462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (1))){
var state_48442__$1 = state_48442;
var statearr_48445_48463 = state_48442__$1;
(statearr_48445_48463[(2)] = null);

(statearr_48445_48463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (4))){
var inst_48424 = (state_48442[(7)]);
var inst_48424__$1 = (state_48442[(2)]);
var inst_48425 = (inst_48424__$1 == null);
var state_48442__$1 = (function (){var statearr_48446 = state_48442;
(statearr_48446[(7)] = inst_48424__$1);

return statearr_48446;
})();
if(cljs.core.truth_(inst_48425)){
var statearr_48447_48464 = state_48442__$1;
(statearr_48447_48464[(1)] = (5));

} else {
var statearr_48448_48465 = state_48442__$1;
(statearr_48448_48465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (6))){
var inst_48424 = (state_48442[(7)]);
var inst_48429 = p.call(null,inst_48424);
var state_48442__$1 = state_48442;
if(cljs.core.truth_(inst_48429)){
var statearr_48449_48466 = state_48442__$1;
(statearr_48449_48466[(1)] = (8));

} else {
var statearr_48450_48467 = state_48442__$1;
(statearr_48450_48467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (3))){
var inst_48440 = (state_48442[(2)]);
var state_48442__$1 = state_48442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48442__$1,inst_48440);
} else {
if((state_val_48443 === (2))){
var state_48442__$1 = state_48442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48442__$1,(4),ch);
} else {
if((state_val_48443 === (11))){
var inst_48432 = (state_48442[(2)]);
var state_48442__$1 = state_48442;
var statearr_48451_48468 = state_48442__$1;
(statearr_48451_48468[(2)] = inst_48432);

(statearr_48451_48468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (9))){
var state_48442__$1 = state_48442;
var statearr_48452_48469 = state_48442__$1;
(statearr_48452_48469[(2)] = null);

(statearr_48452_48469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (5))){
var inst_48427 = cljs.core.async.close_BANG_.call(null,out);
var state_48442__$1 = state_48442;
var statearr_48453_48470 = state_48442__$1;
(statearr_48453_48470[(2)] = inst_48427);

(statearr_48453_48470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (10))){
var inst_48435 = (state_48442[(2)]);
var state_48442__$1 = (function (){var statearr_48454 = state_48442;
(statearr_48454[(8)] = inst_48435);

return statearr_48454;
})();
var statearr_48455_48471 = state_48442__$1;
(statearr_48455_48471[(2)] = null);

(statearr_48455_48471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (8))){
var inst_48424 = (state_48442[(7)]);
var state_48442__$1 = state_48442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48442__$1,(11),out,inst_48424);
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
});})(c__46922__auto___48461,out))
;
return ((function (switch__46832__auto__,c__46922__auto___48461,out){
return (function() {
var cljs$core$async$state_machine__46833__auto__ = null;
var cljs$core$async$state_machine__46833__auto____0 = (function (){
var statearr_48456 = [null,null,null,null,null,null,null,null,null];
(statearr_48456[(0)] = cljs$core$async$state_machine__46833__auto__);

(statearr_48456[(1)] = (1));

return statearr_48456;
});
var cljs$core$async$state_machine__46833__auto____1 = (function (state_48442){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_48442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e48457){if((e48457 instanceof Object)){
var ex__46836__auto__ = e48457;
var statearr_48458_48472 = state_48442;
(statearr_48458_48472[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48473 = state_48442;
state_48442 = G__48473;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$state_machine__46833__auto__ = function(state_48442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46833__auto____1.call(this,state_48442);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46833__auto____0;
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46833__auto____1;
return cljs$core$async$state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___48461,out))
})();
var state__46924__auto__ = (function (){var statearr_48459 = f__46923__auto__.call(null);
(statearr_48459[(6)] = c__46922__auto___48461);

return statearr_48459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___48461,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48475 = arguments.length;
switch (G__48475) {
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
var c__46922__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto__){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto__){
return (function (state_48538){
var state_val_48539 = (state_48538[(1)]);
if((state_val_48539 === (7))){
var inst_48534 = (state_48538[(2)]);
var state_48538__$1 = state_48538;
var statearr_48540_48578 = state_48538__$1;
(statearr_48540_48578[(2)] = inst_48534);

(statearr_48540_48578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (20))){
var inst_48504 = (state_48538[(7)]);
var inst_48515 = (state_48538[(2)]);
var inst_48516 = cljs.core.next.call(null,inst_48504);
var inst_48490 = inst_48516;
var inst_48491 = null;
var inst_48492 = (0);
var inst_48493 = (0);
var state_48538__$1 = (function (){var statearr_48541 = state_48538;
(statearr_48541[(8)] = inst_48492);

(statearr_48541[(9)] = inst_48491);

(statearr_48541[(10)] = inst_48515);

(statearr_48541[(11)] = inst_48493);

(statearr_48541[(12)] = inst_48490);

return statearr_48541;
})();
var statearr_48542_48579 = state_48538__$1;
(statearr_48542_48579[(2)] = null);

(statearr_48542_48579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (1))){
var state_48538__$1 = state_48538;
var statearr_48543_48580 = state_48538__$1;
(statearr_48543_48580[(2)] = null);

(statearr_48543_48580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (4))){
var inst_48479 = (state_48538[(13)]);
var inst_48479__$1 = (state_48538[(2)]);
var inst_48480 = (inst_48479__$1 == null);
var state_48538__$1 = (function (){var statearr_48544 = state_48538;
(statearr_48544[(13)] = inst_48479__$1);

return statearr_48544;
})();
if(cljs.core.truth_(inst_48480)){
var statearr_48545_48581 = state_48538__$1;
(statearr_48545_48581[(1)] = (5));

} else {
var statearr_48546_48582 = state_48538__$1;
(statearr_48546_48582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (15))){
var state_48538__$1 = state_48538;
var statearr_48550_48583 = state_48538__$1;
(statearr_48550_48583[(2)] = null);

(statearr_48550_48583[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (21))){
var state_48538__$1 = state_48538;
var statearr_48551_48584 = state_48538__$1;
(statearr_48551_48584[(2)] = null);

(statearr_48551_48584[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (13))){
var inst_48492 = (state_48538[(8)]);
var inst_48491 = (state_48538[(9)]);
var inst_48493 = (state_48538[(11)]);
var inst_48490 = (state_48538[(12)]);
var inst_48500 = (state_48538[(2)]);
var inst_48501 = (inst_48493 + (1));
var tmp48547 = inst_48492;
var tmp48548 = inst_48491;
var tmp48549 = inst_48490;
var inst_48490__$1 = tmp48549;
var inst_48491__$1 = tmp48548;
var inst_48492__$1 = tmp48547;
var inst_48493__$1 = inst_48501;
var state_48538__$1 = (function (){var statearr_48552 = state_48538;
(statearr_48552[(8)] = inst_48492__$1);

(statearr_48552[(9)] = inst_48491__$1);

(statearr_48552[(11)] = inst_48493__$1);

(statearr_48552[(12)] = inst_48490__$1);

(statearr_48552[(14)] = inst_48500);

return statearr_48552;
})();
var statearr_48553_48585 = state_48538__$1;
(statearr_48553_48585[(2)] = null);

(statearr_48553_48585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (22))){
var state_48538__$1 = state_48538;
var statearr_48554_48586 = state_48538__$1;
(statearr_48554_48586[(2)] = null);

(statearr_48554_48586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (6))){
var inst_48479 = (state_48538[(13)]);
var inst_48488 = f.call(null,inst_48479);
var inst_48489 = cljs.core.seq.call(null,inst_48488);
var inst_48490 = inst_48489;
var inst_48491 = null;
var inst_48492 = (0);
var inst_48493 = (0);
var state_48538__$1 = (function (){var statearr_48555 = state_48538;
(statearr_48555[(8)] = inst_48492);

(statearr_48555[(9)] = inst_48491);

(statearr_48555[(11)] = inst_48493);

(statearr_48555[(12)] = inst_48490);

return statearr_48555;
})();
var statearr_48556_48587 = state_48538__$1;
(statearr_48556_48587[(2)] = null);

(statearr_48556_48587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (17))){
var inst_48504 = (state_48538[(7)]);
var inst_48508 = cljs.core.chunk_first.call(null,inst_48504);
var inst_48509 = cljs.core.chunk_rest.call(null,inst_48504);
var inst_48510 = cljs.core.count.call(null,inst_48508);
var inst_48490 = inst_48509;
var inst_48491 = inst_48508;
var inst_48492 = inst_48510;
var inst_48493 = (0);
var state_48538__$1 = (function (){var statearr_48557 = state_48538;
(statearr_48557[(8)] = inst_48492);

(statearr_48557[(9)] = inst_48491);

(statearr_48557[(11)] = inst_48493);

(statearr_48557[(12)] = inst_48490);

return statearr_48557;
})();
var statearr_48558_48588 = state_48538__$1;
(statearr_48558_48588[(2)] = null);

(statearr_48558_48588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (3))){
var inst_48536 = (state_48538[(2)]);
var state_48538__$1 = state_48538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48538__$1,inst_48536);
} else {
if((state_val_48539 === (12))){
var inst_48524 = (state_48538[(2)]);
var state_48538__$1 = state_48538;
var statearr_48559_48589 = state_48538__$1;
(statearr_48559_48589[(2)] = inst_48524);

(statearr_48559_48589[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (2))){
var state_48538__$1 = state_48538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48538__$1,(4),in$);
} else {
if((state_val_48539 === (23))){
var inst_48532 = (state_48538[(2)]);
var state_48538__$1 = state_48538;
var statearr_48560_48590 = state_48538__$1;
(statearr_48560_48590[(2)] = inst_48532);

(statearr_48560_48590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (19))){
var inst_48519 = (state_48538[(2)]);
var state_48538__$1 = state_48538;
var statearr_48561_48591 = state_48538__$1;
(statearr_48561_48591[(2)] = inst_48519);

(statearr_48561_48591[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (11))){
var inst_48490 = (state_48538[(12)]);
var inst_48504 = (state_48538[(7)]);
var inst_48504__$1 = cljs.core.seq.call(null,inst_48490);
var state_48538__$1 = (function (){var statearr_48562 = state_48538;
(statearr_48562[(7)] = inst_48504__$1);

return statearr_48562;
})();
if(inst_48504__$1){
var statearr_48563_48592 = state_48538__$1;
(statearr_48563_48592[(1)] = (14));

} else {
var statearr_48564_48593 = state_48538__$1;
(statearr_48564_48593[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (9))){
var inst_48526 = (state_48538[(2)]);
var inst_48527 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48538__$1 = (function (){var statearr_48565 = state_48538;
(statearr_48565[(15)] = inst_48526);

return statearr_48565;
})();
if(cljs.core.truth_(inst_48527)){
var statearr_48566_48594 = state_48538__$1;
(statearr_48566_48594[(1)] = (21));

} else {
var statearr_48567_48595 = state_48538__$1;
(statearr_48567_48595[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (5))){
var inst_48482 = cljs.core.async.close_BANG_.call(null,out);
var state_48538__$1 = state_48538;
var statearr_48568_48596 = state_48538__$1;
(statearr_48568_48596[(2)] = inst_48482);

(statearr_48568_48596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (14))){
var inst_48504 = (state_48538[(7)]);
var inst_48506 = cljs.core.chunked_seq_QMARK_.call(null,inst_48504);
var state_48538__$1 = state_48538;
if(inst_48506){
var statearr_48569_48597 = state_48538__$1;
(statearr_48569_48597[(1)] = (17));

} else {
var statearr_48570_48598 = state_48538__$1;
(statearr_48570_48598[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (16))){
var inst_48522 = (state_48538[(2)]);
var state_48538__$1 = state_48538;
var statearr_48571_48599 = state_48538__$1;
(statearr_48571_48599[(2)] = inst_48522);

(statearr_48571_48599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (10))){
var inst_48491 = (state_48538[(9)]);
var inst_48493 = (state_48538[(11)]);
var inst_48498 = cljs.core._nth.call(null,inst_48491,inst_48493);
var state_48538__$1 = state_48538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48538__$1,(13),out,inst_48498);
} else {
if((state_val_48539 === (18))){
var inst_48504 = (state_48538[(7)]);
var inst_48513 = cljs.core.first.call(null,inst_48504);
var state_48538__$1 = state_48538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48538__$1,(20),out,inst_48513);
} else {
if((state_val_48539 === (8))){
var inst_48492 = (state_48538[(8)]);
var inst_48493 = (state_48538[(11)]);
var inst_48495 = (inst_48493 < inst_48492);
var inst_48496 = inst_48495;
var state_48538__$1 = state_48538;
if(cljs.core.truth_(inst_48496)){
var statearr_48572_48600 = state_48538__$1;
(statearr_48572_48600[(1)] = (10));

} else {
var statearr_48573_48601 = state_48538__$1;
(statearr_48573_48601[(1)] = (11));

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
});})(c__46922__auto__))
;
return ((function (switch__46832__auto__,c__46922__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46833__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46833__auto____0 = (function (){
var statearr_48574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48574[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46833__auto__);

(statearr_48574[(1)] = (1));

return statearr_48574;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46833__auto____1 = (function (state_48538){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_48538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e48575){if((e48575 instanceof Object)){
var ex__46836__auto__ = e48575;
var statearr_48576_48602 = state_48538;
(statearr_48576_48602[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48603 = state_48538;
state_48538 = G__48603;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46833__auto__ = function(state_48538){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46833__auto____1.call(this,state_48538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46833__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46833__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto__))
})();
var state__46924__auto__ = (function (){var statearr_48577 = f__46923__auto__.call(null);
(statearr_48577[(6)] = c__46922__auto__);

return statearr_48577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto__))
);

return c__46922__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48605 = arguments.length;
switch (G__48605) {
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
var G__48608 = arguments.length;
switch (G__48608) {
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
var G__48611 = arguments.length;
switch (G__48611) {
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
var c__46922__auto___48658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___48658,out){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___48658,out){
return (function (state_48635){
var state_val_48636 = (state_48635[(1)]);
if((state_val_48636 === (7))){
var inst_48630 = (state_48635[(2)]);
var state_48635__$1 = state_48635;
var statearr_48637_48659 = state_48635__$1;
(statearr_48637_48659[(2)] = inst_48630);

(statearr_48637_48659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48636 === (1))){
var inst_48612 = null;
var state_48635__$1 = (function (){var statearr_48638 = state_48635;
(statearr_48638[(7)] = inst_48612);

return statearr_48638;
})();
var statearr_48639_48660 = state_48635__$1;
(statearr_48639_48660[(2)] = null);

(statearr_48639_48660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48636 === (4))){
var inst_48615 = (state_48635[(8)]);
var inst_48615__$1 = (state_48635[(2)]);
var inst_48616 = (inst_48615__$1 == null);
var inst_48617 = cljs.core.not.call(null,inst_48616);
var state_48635__$1 = (function (){var statearr_48640 = state_48635;
(statearr_48640[(8)] = inst_48615__$1);

return statearr_48640;
})();
if(inst_48617){
var statearr_48641_48661 = state_48635__$1;
(statearr_48641_48661[(1)] = (5));

} else {
var statearr_48642_48662 = state_48635__$1;
(statearr_48642_48662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48636 === (6))){
var state_48635__$1 = state_48635;
var statearr_48643_48663 = state_48635__$1;
(statearr_48643_48663[(2)] = null);

(statearr_48643_48663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48636 === (3))){
var inst_48632 = (state_48635[(2)]);
var inst_48633 = cljs.core.async.close_BANG_.call(null,out);
var state_48635__$1 = (function (){var statearr_48644 = state_48635;
(statearr_48644[(9)] = inst_48632);

return statearr_48644;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48635__$1,inst_48633);
} else {
if((state_val_48636 === (2))){
var state_48635__$1 = state_48635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48635__$1,(4),ch);
} else {
if((state_val_48636 === (11))){
var inst_48615 = (state_48635[(8)]);
var inst_48624 = (state_48635[(2)]);
var inst_48612 = inst_48615;
var state_48635__$1 = (function (){var statearr_48645 = state_48635;
(statearr_48645[(10)] = inst_48624);

(statearr_48645[(7)] = inst_48612);

return statearr_48645;
})();
var statearr_48646_48664 = state_48635__$1;
(statearr_48646_48664[(2)] = null);

(statearr_48646_48664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48636 === (9))){
var inst_48615 = (state_48635[(8)]);
var state_48635__$1 = state_48635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48635__$1,(11),out,inst_48615);
} else {
if((state_val_48636 === (5))){
var inst_48615 = (state_48635[(8)]);
var inst_48612 = (state_48635[(7)]);
var inst_48619 = cljs.core._EQ_.call(null,inst_48615,inst_48612);
var state_48635__$1 = state_48635;
if(inst_48619){
var statearr_48648_48665 = state_48635__$1;
(statearr_48648_48665[(1)] = (8));

} else {
var statearr_48649_48666 = state_48635__$1;
(statearr_48649_48666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48636 === (10))){
var inst_48627 = (state_48635[(2)]);
var state_48635__$1 = state_48635;
var statearr_48650_48667 = state_48635__$1;
(statearr_48650_48667[(2)] = inst_48627);

(statearr_48650_48667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48636 === (8))){
var inst_48612 = (state_48635[(7)]);
var tmp48647 = inst_48612;
var inst_48612__$1 = tmp48647;
var state_48635__$1 = (function (){var statearr_48651 = state_48635;
(statearr_48651[(7)] = inst_48612__$1);

return statearr_48651;
})();
var statearr_48652_48668 = state_48635__$1;
(statearr_48652_48668[(2)] = null);

(statearr_48652_48668[(1)] = (2));


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
});})(c__46922__auto___48658,out))
;
return ((function (switch__46832__auto__,c__46922__auto___48658,out){
return (function() {
var cljs$core$async$state_machine__46833__auto__ = null;
var cljs$core$async$state_machine__46833__auto____0 = (function (){
var statearr_48653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48653[(0)] = cljs$core$async$state_machine__46833__auto__);

(statearr_48653[(1)] = (1));

return statearr_48653;
});
var cljs$core$async$state_machine__46833__auto____1 = (function (state_48635){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_48635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e48654){if((e48654 instanceof Object)){
var ex__46836__auto__ = e48654;
var statearr_48655_48669 = state_48635;
(statearr_48655_48669[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48670 = state_48635;
state_48635 = G__48670;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$state_machine__46833__auto__ = function(state_48635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46833__auto____1.call(this,state_48635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46833__auto____0;
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46833__auto____1;
return cljs$core$async$state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___48658,out))
})();
var state__46924__auto__ = (function (){var statearr_48656 = f__46923__auto__.call(null);
(statearr_48656[(6)] = c__46922__auto___48658);

return statearr_48656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___48658,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48672 = arguments.length;
switch (G__48672) {
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
var c__46922__auto___48738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___48738,out){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___48738,out){
return (function (state_48710){
var state_val_48711 = (state_48710[(1)]);
if((state_val_48711 === (7))){
var inst_48706 = (state_48710[(2)]);
var state_48710__$1 = state_48710;
var statearr_48712_48739 = state_48710__$1;
(statearr_48712_48739[(2)] = inst_48706);

(statearr_48712_48739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (1))){
var inst_48673 = (new Array(n));
var inst_48674 = inst_48673;
var inst_48675 = (0);
var state_48710__$1 = (function (){var statearr_48713 = state_48710;
(statearr_48713[(7)] = inst_48674);

(statearr_48713[(8)] = inst_48675);

return statearr_48713;
})();
var statearr_48714_48740 = state_48710__$1;
(statearr_48714_48740[(2)] = null);

(statearr_48714_48740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (4))){
var inst_48678 = (state_48710[(9)]);
var inst_48678__$1 = (state_48710[(2)]);
var inst_48679 = (inst_48678__$1 == null);
var inst_48680 = cljs.core.not.call(null,inst_48679);
var state_48710__$1 = (function (){var statearr_48715 = state_48710;
(statearr_48715[(9)] = inst_48678__$1);

return statearr_48715;
})();
if(inst_48680){
var statearr_48716_48741 = state_48710__$1;
(statearr_48716_48741[(1)] = (5));

} else {
var statearr_48717_48742 = state_48710__$1;
(statearr_48717_48742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (15))){
var inst_48700 = (state_48710[(2)]);
var state_48710__$1 = state_48710;
var statearr_48718_48743 = state_48710__$1;
(statearr_48718_48743[(2)] = inst_48700);

(statearr_48718_48743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (13))){
var state_48710__$1 = state_48710;
var statearr_48719_48744 = state_48710__$1;
(statearr_48719_48744[(2)] = null);

(statearr_48719_48744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (6))){
var inst_48675 = (state_48710[(8)]);
var inst_48696 = (inst_48675 > (0));
var state_48710__$1 = state_48710;
if(cljs.core.truth_(inst_48696)){
var statearr_48720_48745 = state_48710__$1;
(statearr_48720_48745[(1)] = (12));

} else {
var statearr_48721_48746 = state_48710__$1;
(statearr_48721_48746[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (3))){
var inst_48708 = (state_48710[(2)]);
var state_48710__$1 = state_48710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48710__$1,inst_48708);
} else {
if((state_val_48711 === (12))){
var inst_48674 = (state_48710[(7)]);
var inst_48698 = cljs.core.vec.call(null,inst_48674);
var state_48710__$1 = state_48710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48710__$1,(15),out,inst_48698);
} else {
if((state_val_48711 === (2))){
var state_48710__$1 = state_48710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48710__$1,(4),ch);
} else {
if((state_val_48711 === (11))){
var inst_48690 = (state_48710[(2)]);
var inst_48691 = (new Array(n));
var inst_48674 = inst_48691;
var inst_48675 = (0);
var state_48710__$1 = (function (){var statearr_48722 = state_48710;
(statearr_48722[(7)] = inst_48674);

(statearr_48722[(10)] = inst_48690);

(statearr_48722[(8)] = inst_48675);

return statearr_48722;
})();
var statearr_48723_48747 = state_48710__$1;
(statearr_48723_48747[(2)] = null);

(statearr_48723_48747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (9))){
var inst_48674 = (state_48710[(7)]);
var inst_48688 = cljs.core.vec.call(null,inst_48674);
var state_48710__$1 = state_48710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48710__$1,(11),out,inst_48688);
} else {
if((state_val_48711 === (5))){
var inst_48683 = (state_48710[(11)]);
var inst_48674 = (state_48710[(7)]);
var inst_48678 = (state_48710[(9)]);
var inst_48675 = (state_48710[(8)]);
var inst_48682 = (inst_48674[inst_48675] = inst_48678);
var inst_48683__$1 = (inst_48675 + (1));
var inst_48684 = (inst_48683__$1 < n);
var state_48710__$1 = (function (){var statearr_48724 = state_48710;
(statearr_48724[(11)] = inst_48683__$1);

(statearr_48724[(12)] = inst_48682);

return statearr_48724;
})();
if(cljs.core.truth_(inst_48684)){
var statearr_48725_48748 = state_48710__$1;
(statearr_48725_48748[(1)] = (8));

} else {
var statearr_48726_48749 = state_48710__$1;
(statearr_48726_48749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (14))){
var inst_48703 = (state_48710[(2)]);
var inst_48704 = cljs.core.async.close_BANG_.call(null,out);
var state_48710__$1 = (function (){var statearr_48728 = state_48710;
(statearr_48728[(13)] = inst_48703);

return statearr_48728;
})();
var statearr_48729_48750 = state_48710__$1;
(statearr_48729_48750[(2)] = inst_48704);

(statearr_48729_48750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (10))){
var inst_48694 = (state_48710[(2)]);
var state_48710__$1 = state_48710;
var statearr_48730_48751 = state_48710__$1;
(statearr_48730_48751[(2)] = inst_48694);

(statearr_48730_48751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (8))){
var inst_48683 = (state_48710[(11)]);
var inst_48674 = (state_48710[(7)]);
var tmp48727 = inst_48674;
var inst_48674__$1 = tmp48727;
var inst_48675 = inst_48683;
var state_48710__$1 = (function (){var statearr_48731 = state_48710;
(statearr_48731[(7)] = inst_48674__$1);

(statearr_48731[(8)] = inst_48675);

return statearr_48731;
})();
var statearr_48732_48752 = state_48710__$1;
(statearr_48732_48752[(2)] = null);

(statearr_48732_48752[(1)] = (2));


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
});})(c__46922__auto___48738,out))
;
return ((function (switch__46832__auto__,c__46922__auto___48738,out){
return (function() {
var cljs$core$async$state_machine__46833__auto__ = null;
var cljs$core$async$state_machine__46833__auto____0 = (function (){
var statearr_48733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48733[(0)] = cljs$core$async$state_machine__46833__auto__);

(statearr_48733[(1)] = (1));

return statearr_48733;
});
var cljs$core$async$state_machine__46833__auto____1 = (function (state_48710){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_48710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e48734){if((e48734 instanceof Object)){
var ex__46836__auto__ = e48734;
var statearr_48735_48753 = state_48710;
(statearr_48735_48753[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48754 = state_48710;
state_48710 = G__48754;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$state_machine__46833__auto__ = function(state_48710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46833__auto____1.call(this,state_48710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46833__auto____0;
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46833__auto____1;
return cljs$core$async$state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___48738,out))
})();
var state__46924__auto__ = (function (){var statearr_48736 = f__46923__auto__.call(null);
(statearr_48736[(6)] = c__46922__auto___48738);

return statearr_48736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___48738,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48756 = arguments.length;
switch (G__48756) {
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
var c__46922__auto___48826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___48826,out){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___48826,out){
return (function (state_48798){
var state_val_48799 = (state_48798[(1)]);
if((state_val_48799 === (7))){
var inst_48794 = (state_48798[(2)]);
var state_48798__$1 = state_48798;
var statearr_48800_48827 = state_48798__$1;
(statearr_48800_48827[(2)] = inst_48794);

(statearr_48800_48827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (1))){
var inst_48757 = [];
var inst_48758 = inst_48757;
var inst_48759 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48798__$1 = (function (){var statearr_48801 = state_48798;
(statearr_48801[(7)] = inst_48758);

(statearr_48801[(8)] = inst_48759);

return statearr_48801;
})();
var statearr_48802_48828 = state_48798__$1;
(statearr_48802_48828[(2)] = null);

(statearr_48802_48828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (4))){
var inst_48762 = (state_48798[(9)]);
var inst_48762__$1 = (state_48798[(2)]);
var inst_48763 = (inst_48762__$1 == null);
var inst_48764 = cljs.core.not.call(null,inst_48763);
var state_48798__$1 = (function (){var statearr_48803 = state_48798;
(statearr_48803[(9)] = inst_48762__$1);

return statearr_48803;
})();
if(inst_48764){
var statearr_48804_48829 = state_48798__$1;
(statearr_48804_48829[(1)] = (5));

} else {
var statearr_48805_48830 = state_48798__$1;
(statearr_48805_48830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (15))){
var inst_48788 = (state_48798[(2)]);
var state_48798__$1 = state_48798;
var statearr_48806_48831 = state_48798__$1;
(statearr_48806_48831[(2)] = inst_48788);

(statearr_48806_48831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (13))){
var state_48798__$1 = state_48798;
var statearr_48807_48832 = state_48798__$1;
(statearr_48807_48832[(2)] = null);

(statearr_48807_48832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (6))){
var inst_48758 = (state_48798[(7)]);
var inst_48783 = inst_48758.length;
var inst_48784 = (inst_48783 > (0));
var state_48798__$1 = state_48798;
if(cljs.core.truth_(inst_48784)){
var statearr_48808_48833 = state_48798__$1;
(statearr_48808_48833[(1)] = (12));

} else {
var statearr_48809_48834 = state_48798__$1;
(statearr_48809_48834[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (3))){
var inst_48796 = (state_48798[(2)]);
var state_48798__$1 = state_48798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48798__$1,inst_48796);
} else {
if((state_val_48799 === (12))){
var inst_48758 = (state_48798[(7)]);
var inst_48786 = cljs.core.vec.call(null,inst_48758);
var state_48798__$1 = state_48798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48798__$1,(15),out,inst_48786);
} else {
if((state_val_48799 === (2))){
var state_48798__$1 = state_48798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48798__$1,(4),ch);
} else {
if((state_val_48799 === (11))){
var inst_48766 = (state_48798[(10)]);
var inst_48762 = (state_48798[(9)]);
var inst_48776 = (state_48798[(2)]);
var inst_48777 = [];
var inst_48778 = inst_48777.push(inst_48762);
var inst_48758 = inst_48777;
var inst_48759 = inst_48766;
var state_48798__$1 = (function (){var statearr_48810 = state_48798;
(statearr_48810[(7)] = inst_48758);

(statearr_48810[(8)] = inst_48759);

(statearr_48810[(11)] = inst_48778);

(statearr_48810[(12)] = inst_48776);

return statearr_48810;
})();
var statearr_48811_48835 = state_48798__$1;
(statearr_48811_48835[(2)] = null);

(statearr_48811_48835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (9))){
var inst_48758 = (state_48798[(7)]);
var inst_48774 = cljs.core.vec.call(null,inst_48758);
var state_48798__$1 = state_48798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48798__$1,(11),out,inst_48774);
} else {
if((state_val_48799 === (5))){
var inst_48759 = (state_48798[(8)]);
var inst_48766 = (state_48798[(10)]);
var inst_48762 = (state_48798[(9)]);
var inst_48766__$1 = f.call(null,inst_48762);
var inst_48767 = cljs.core._EQ_.call(null,inst_48766__$1,inst_48759);
var inst_48768 = cljs.core.keyword_identical_QMARK_.call(null,inst_48759,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48769 = (inst_48767) || (inst_48768);
var state_48798__$1 = (function (){var statearr_48812 = state_48798;
(statearr_48812[(10)] = inst_48766__$1);

return statearr_48812;
})();
if(cljs.core.truth_(inst_48769)){
var statearr_48813_48836 = state_48798__$1;
(statearr_48813_48836[(1)] = (8));

} else {
var statearr_48814_48837 = state_48798__$1;
(statearr_48814_48837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (14))){
var inst_48791 = (state_48798[(2)]);
var inst_48792 = cljs.core.async.close_BANG_.call(null,out);
var state_48798__$1 = (function (){var statearr_48816 = state_48798;
(statearr_48816[(13)] = inst_48791);

return statearr_48816;
})();
var statearr_48817_48838 = state_48798__$1;
(statearr_48817_48838[(2)] = inst_48792);

(statearr_48817_48838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (10))){
var inst_48781 = (state_48798[(2)]);
var state_48798__$1 = state_48798;
var statearr_48818_48839 = state_48798__$1;
(statearr_48818_48839[(2)] = inst_48781);

(statearr_48818_48839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (8))){
var inst_48758 = (state_48798[(7)]);
var inst_48766 = (state_48798[(10)]);
var inst_48762 = (state_48798[(9)]);
var inst_48771 = inst_48758.push(inst_48762);
var tmp48815 = inst_48758;
var inst_48758__$1 = tmp48815;
var inst_48759 = inst_48766;
var state_48798__$1 = (function (){var statearr_48819 = state_48798;
(statearr_48819[(7)] = inst_48758__$1);

(statearr_48819[(8)] = inst_48759);

(statearr_48819[(14)] = inst_48771);

return statearr_48819;
})();
var statearr_48820_48840 = state_48798__$1;
(statearr_48820_48840[(2)] = null);

(statearr_48820_48840[(1)] = (2));


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
});})(c__46922__auto___48826,out))
;
return ((function (switch__46832__auto__,c__46922__auto___48826,out){
return (function() {
var cljs$core$async$state_machine__46833__auto__ = null;
var cljs$core$async$state_machine__46833__auto____0 = (function (){
var statearr_48821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48821[(0)] = cljs$core$async$state_machine__46833__auto__);

(statearr_48821[(1)] = (1));

return statearr_48821;
});
var cljs$core$async$state_machine__46833__auto____1 = (function (state_48798){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_48798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e48822){if((e48822 instanceof Object)){
var ex__46836__auto__ = e48822;
var statearr_48823_48841 = state_48798;
(statearr_48823_48841[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48842 = state_48798;
state_48798 = G__48842;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
cljs$core$async$state_machine__46833__auto__ = function(state_48798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46833__auto____1.call(this,state_48798);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46833__auto____0;
cljs$core$async$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46833__auto____1;
return cljs$core$async$state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___48826,out))
})();
var state__46924__auto__ = (function (){var statearr_48824 = f__46923__auto__.call(null);
(statearr_48824[(6)] = c__46922__auto___48826);

return statearr_48824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___48826,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1508862162357
