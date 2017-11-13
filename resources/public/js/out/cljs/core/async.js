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
var G__46811 = arguments.length;
switch (G__46811) {
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
if(typeof cljs.core.async.t_cljs$core$async46812 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46812 = (function (f,blockable,meta46813){
this.f = f;
this.blockable = blockable;
this.meta46813 = meta46813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46814,meta46813__$1){
var self__ = this;
var _46814__$1 = this;
return (new cljs.core.async.t_cljs$core$async46812(self__.f,self__.blockable,meta46813__$1));
});

cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46814){
var self__ = this;
var _46814__$1 = this;
return self__.meta46813;
});

cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46813","meta46813",-1788035536,null)], null);
});

cljs.core.async.t_cljs$core$async46812.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46812";

cljs.core.async.t_cljs$core$async46812.cljs$lang$ctorPrWriter = (function (this__31193__auto__,writer__31194__auto__,opt__31195__auto__){
return cljs.core._write.call(null,writer__31194__auto__,"cljs.core.async/t_cljs$core$async46812");
});

cljs.core.async.__GT_t_cljs$core$async46812 = (function cljs$core$async$__GT_t_cljs$core$async46812(f__$1,blockable__$1,meta46813){
return (new cljs.core.async.t_cljs$core$async46812(f__$1,blockable__$1,meta46813));
});

}

return (new cljs.core.async.t_cljs$core$async46812(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46818 = arguments.length;
switch (G__46818) {
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
var G__46821 = arguments.length;
switch (G__46821) {
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
var G__46824 = arguments.length;
switch (G__46824) {
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
var val_46826 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46826);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46826,ret){
return (function (){
return fn1.call(null,val_46826);
});})(val_46826,ret))
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
var G__46828 = arguments.length;
switch (G__46828) {
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
var n__31567__auto___46830 = n;
var x_46831 = (0);
while(true){
if((x_46831 < n__31567__auto___46830)){
(a[x_46831] = (0));

var G__46832 = (x_46831 + (1));
x_46831 = G__46832;
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

var G__46833 = (i + (1));
i = G__46833;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46834 = (function (flag,meta46835){
this.flag = flag;
this.meta46835 = meta46835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46836,meta46835__$1){
var self__ = this;
var _46836__$1 = this;
return (new cljs.core.async.t_cljs$core$async46834(self__.flag,meta46835__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46834.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46836){
var self__ = this;
var _46836__$1 = this;
return self__.meta46835;
});})(flag))
;

cljs.core.async.t_cljs$core$async46834.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46834.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46834.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46835","meta46835",202485006,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46834";

cljs.core.async.t_cljs$core$async46834.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31193__auto__,writer__31194__auto__,opt__31195__auto__){
return cljs.core._write.call(null,writer__31194__auto__,"cljs.core.async/t_cljs$core$async46834");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46834 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46834(flag__$1,meta46835){
return (new cljs.core.async.t_cljs$core$async46834(flag__$1,meta46835));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46834(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46837 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46837 = (function (flag,cb,meta46838){
this.flag = flag;
this.cb = cb;
this.meta46838 = meta46838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46839,meta46838__$1){
var self__ = this;
var _46839__$1 = this;
return (new cljs.core.async.t_cljs$core$async46837(self__.flag,self__.cb,meta46838__$1));
});

cljs.core.async.t_cljs$core$async46837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46839){
var self__ = this;
var _46839__$1 = this;
return self__.meta46838;
});

cljs.core.async.t_cljs$core$async46837.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46837.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46838","meta46838",-1554617637,null)], null);
});

cljs.core.async.t_cljs$core$async46837.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46837";

cljs.core.async.t_cljs$core$async46837.cljs$lang$ctorPrWriter = (function (this__31193__auto__,writer__31194__auto__,opt__31195__auto__){
return cljs.core._write.call(null,writer__31194__auto__,"cljs.core.async/t_cljs$core$async46837");
});

cljs.core.async.__GT_t_cljs$core$async46837 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46837(flag__$1,cb__$1,meta46838){
return (new cljs.core.async.t_cljs$core$async46837(flag__$1,cb__$1,meta46838));
});

}

return (new cljs.core.async.t_cljs$core$async46837(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46840_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46840_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46841_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46841_SHARP_,port], null));
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
var G__46842 = (i + (1));
i = G__46842;
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
var args__31808__auto__ = [];
var len__31801__auto___46848 = arguments.length;
var i__31802__auto___46849 = (0);
while(true){
if((i__31802__auto___46849 < len__31801__auto___46848)){
args__31808__auto__.push((arguments[i__31802__auto___46849]));

var G__46850 = (i__31802__auto___46849 + (1));
i__31802__auto___46849 = G__46850;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46845){
var map__46846 = p__46845;
var map__46846__$1 = ((((!((map__46846 == null)))?((((map__46846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46846):map__46846);
var opts = map__46846__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46843){
var G__46844 = cljs.core.first.call(null,seq46843);
var seq46843__$1 = cljs.core.next.call(null,seq46843);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46844,seq46843__$1);
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
var G__46852 = arguments.length;
switch (G__46852) {
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
var c__46751__auto___46898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___46898){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___46898){
return (function (state_46876){
var state_val_46877 = (state_46876[(1)]);
if((state_val_46877 === (7))){
var inst_46872 = (state_46876[(2)]);
var state_46876__$1 = state_46876;
var statearr_46878_46899 = state_46876__$1;
(statearr_46878_46899[(2)] = inst_46872);

(statearr_46878_46899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46877 === (1))){
var state_46876__$1 = state_46876;
var statearr_46879_46900 = state_46876__$1;
(statearr_46879_46900[(2)] = null);

(statearr_46879_46900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46877 === (4))){
var inst_46855 = (state_46876[(7)]);
var inst_46855__$1 = (state_46876[(2)]);
var inst_46856 = (inst_46855__$1 == null);
var state_46876__$1 = (function (){var statearr_46880 = state_46876;
(statearr_46880[(7)] = inst_46855__$1);

return statearr_46880;
})();
if(cljs.core.truth_(inst_46856)){
var statearr_46881_46901 = state_46876__$1;
(statearr_46881_46901[(1)] = (5));

} else {
var statearr_46882_46902 = state_46876__$1;
(statearr_46882_46902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46877 === (13))){
var state_46876__$1 = state_46876;
var statearr_46883_46903 = state_46876__$1;
(statearr_46883_46903[(2)] = null);

(statearr_46883_46903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46877 === (6))){
var inst_46855 = (state_46876[(7)]);
var state_46876__$1 = state_46876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46876__$1,(11),to,inst_46855);
} else {
if((state_val_46877 === (3))){
var inst_46874 = (state_46876[(2)]);
var state_46876__$1 = state_46876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46876__$1,inst_46874);
} else {
if((state_val_46877 === (12))){
var state_46876__$1 = state_46876;
var statearr_46884_46904 = state_46876__$1;
(statearr_46884_46904[(2)] = null);

(statearr_46884_46904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46877 === (2))){
var state_46876__$1 = state_46876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46876__$1,(4),from);
} else {
if((state_val_46877 === (11))){
var inst_46865 = (state_46876[(2)]);
var state_46876__$1 = state_46876;
if(cljs.core.truth_(inst_46865)){
var statearr_46885_46905 = state_46876__$1;
(statearr_46885_46905[(1)] = (12));

} else {
var statearr_46886_46906 = state_46876__$1;
(statearr_46886_46906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46877 === (9))){
var state_46876__$1 = state_46876;
var statearr_46887_46907 = state_46876__$1;
(statearr_46887_46907[(2)] = null);

(statearr_46887_46907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46877 === (5))){
var state_46876__$1 = state_46876;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46888_46908 = state_46876__$1;
(statearr_46888_46908[(1)] = (8));

} else {
var statearr_46889_46909 = state_46876__$1;
(statearr_46889_46909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46877 === (14))){
var inst_46870 = (state_46876[(2)]);
var state_46876__$1 = state_46876;
var statearr_46890_46910 = state_46876__$1;
(statearr_46890_46910[(2)] = inst_46870);

(statearr_46890_46910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46877 === (10))){
var inst_46862 = (state_46876[(2)]);
var state_46876__$1 = state_46876;
var statearr_46891_46911 = state_46876__$1;
(statearr_46891_46911[(2)] = inst_46862);

(statearr_46891_46911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46877 === (8))){
var inst_46859 = cljs.core.async.close_BANG_.call(null,to);
var state_46876__$1 = state_46876;
var statearr_46892_46912 = state_46876__$1;
(statearr_46892_46912[(2)] = inst_46859);

(statearr_46892_46912[(1)] = (10));


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
});})(c__46751__auto___46898))
;
return ((function (switch__46661__auto__,c__46751__auto___46898){
return (function() {
var cljs$core$async$state_machine__46662__auto__ = null;
var cljs$core$async$state_machine__46662__auto____0 = (function (){
var statearr_46893 = [null,null,null,null,null,null,null,null];
(statearr_46893[(0)] = cljs$core$async$state_machine__46662__auto__);

(statearr_46893[(1)] = (1));

return statearr_46893;
});
var cljs$core$async$state_machine__46662__auto____1 = (function (state_46876){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_46876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e46894){if((e46894 instanceof Object)){
var ex__46665__auto__ = e46894;
var statearr_46895_46913 = state_46876;
(statearr_46895_46913[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46914 = state_46876;
state_46876 = G__46914;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$state_machine__46662__auto__ = function(state_46876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46662__auto____1.call(this,state_46876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46662__auto____0;
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46662__auto____1;
return cljs$core$async$state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___46898))
})();
var state__46753__auto__ = (function (){var statearr_46896 = f__46752__auto__.call(null);
(statearr_46896[(6)] = c__46751__auto___46898);

return statearr_46896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___46898))
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
return (function (p__46915){
var vec__46916 = p__46915;
var v = cljs.core.nth.call(null,vec__46916,(0),null);
var p = cljs.core.nth.call(null,vec__46916,(1),null);
var job = vec__46916;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__46751__auto___47087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___47087,res,vec__46916,v,p,job,jobs,results){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___47087,res,vec__46916,v,p,job,jobs,results){
return (function (state_46923){
var state_val_46924 = (state_46923[(1)]);
if((state_val_46924 === (1))){
var state_46923__$1 = state_46923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46923__$1,(2),res,v);
} else {
if((state_val_46924 === (2))){
var inst_46920 = (state_46923[(2)]);
var inst_46921 = cljs.core.async.close_BANG_.call(null,res);
var state_46923__$1 = (function (){var statearr_46925 = state_46923;
(statearr_46925[(7)] = inst_46920);

return statearr_46925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46923__$1,inst_46921);
} else {
return null;
}
}
});})(c__46751__auto___47087,res,vec__46916,v,p,job,jobs,results))
;
return ((function (switch__46661__auto__,c__46751__auto___47087,res,vec__46916,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0 = (function (){
var statearr_46926 = [null,null,null,null,null,null,null,null];
(statearr_46926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__);

(statearr_46926[(1)] = (1));

return statearr_46926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1 = (function (state_46923){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_46923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e46927){if((e46927 instanceof Object)){
var ex__46665__auto__ = e46927;
var statearr_46928_47088 = state_46923;
(statearr_46928_47088[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47089 = state_46923;
state_46923 = G__47089;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__ = function(state_46923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1.call(this,state_46923);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___47087,res,vec__46916,v,p,job,jobs,results))
})();
var state__46753__auto__ = (function (){var statearr_46929 = f__46752__auto__.call(null);
(statearr_46929[(6)] = c__46751__auto___47087);

return statearr_46929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___47087,res,vec__46916,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46930){
var vec__46931 = p__46930;
var v = cljs.core.nth.call(null,vec__46931,(0),null);
var p = cljs.core.nth.call(null,vec__46931,(1),null);
var job = vec__46931;
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
var n__31567__auto___47090 = n;
var __47091 = (0);
while(true){
if((__47091 < n__31567__auto___47090)){
var G__46934_47092 = type;
var G__46934_47093__$1 = (((G__46934_47092 instanceof cljs.core.Keyword))?G__46934_47092.fqn:null);
switch (G__46934_47093__$1) {
case "compute":
var c__46751__auto___47095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47091,c__46751__auto___47095,G__46934_47092,G__46934_47093__$1,n__31567__auto___47090,jobs,results,process,async){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (__47091,c__46751__auto___47095,G__46934_47092,G__46934_47093__$1,n__31567__auto___47090,jobs,results,process,async){
return (function (state_46947){
var state_val_46948 = (state_46947[(1)]);
if((state_val_46948 === (1))){
var state_46947__$1 = state_46947;
var statearr_46949_47096 = state_46947__$1;
(statearr_46949_47096[(2)] = null);

(statearr_46949_47096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46948 === (2))){
var state_46947__$1 = state_46947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46947__$1,(4),jobs);
} else {
if((state_val_46948 === (3))){
var inst_46945 = (state_46947[(2)]);
var state_46947__$1 = state_46947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46947__$1,inst_46945);
} else {
if((state_val_46948 === (4))){
var inst_46937 = (state_46947[(2)]);
var inst_46938 = process.call(null,inst_46937);
var state_46947__$1 = state_46947;
if(cljs.core.truth_(inst_46938)){
var statearr_46950_47097 = state_46947__$1;
(statearr_46950_47097[(1)] = (5));

} else {
var statearr_46951_47098 = state_46947__$1;
(statearr_46951_47098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46948 === (5))){
var state_46947__$1 = state_46947;
var statearr_46952_47099 = state_46947__$1;
(statearr_46952_47099[(2)] = null);

(statearr_46952_47099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46948 === (6))){
var state_46947__$1 = state_46947;
var statearr_46953_47100 = state_46947__$1;
(statearr_46953_47100[(2)] = null);

(statearr_46953_47100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46948 === (7))){
var inst_46943 = (state_46947[(2)]);
var state_46947__$1 = state_46947;
var statearr_46954_47101 = state_46947__$1;
(statearr_46954_47101[(2)] = inst_46943);

(statearr_46954_47101[(1)] = (3));


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
});})(__47091,c__46751__auto___47095,G__46934_47092,G__46934_47093__$1,n__31567__auto___47090,jobs,results,process,async))
;
return ((function (__47091,switch__46661__auto__,c__46751__auto___47095,G__46934_47092,G__46934_47093__$1,n__31567__auto___47090,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0 = (function (){
var statearr_46955 = [null,null,null,null,null,null,null];
(statearr_46955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__);

(statearr_46955[(1)] = (1));

return statearr_46955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1 = (function (state_46947){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_46947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e46956){if((e46956 instanceof Object)){
var ex__46665__auto__ = e46956;
var statearr_46957_47102 = state_46947;
(statearr_46957_47102[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47103 = state_46947;
state_46947 = G__47103;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__ = function(state_46947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1.call(this,state_46947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__;
})()
;})(__47091,switch__46661__auto__,c__46751__auto___47095,G__46934_47092,G__46934_47093__$1,n__31567__auto___47090,jobs,results,process,async))
})();
var state__46753__auto__ = (function (){var statearr_46958 = f__46752__auto__.call(null);
(statearr_46958[(6)] = c__46751__auto___47095);

return statearr_46958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(__47091,c__46751__auto___47095,G__46934_47092,G__46934_47093__$1,n__31567__auto___47090,jobs,results,process,async))
);


break;
case "async":
var c__46751__auto___47104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47091,c__46751__auto___47104,G__46934_47092,G__46934_47093__$1,n__31567__auto___47090,jobs,results,process,async){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (__47091,c__46751__auto___47104,G__46934_47092,G__46934_47093__$1,n__31567__auto___47090,jobs,results,process,async){
return (function (state_46971){
var state_val_46972 = (state_46971[(1)]);
if((state_val_46972 === (1))){
var state_46971__$1 = state_46971;
var statearr_46973_47105 = state_46971__$1;
(statearr_46973_47105[(2)] = null);

(statearr_46973_47105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46972 === (2))){
var state_46971__$1 = state_46971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46971__$1,(4),jobs);
} else {
if((state_val_46972 === (3))){
var inst_46969 = (state_46971[(2)]);
var state_46971__$1 = state_46971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46971__$1,inst_46969);
} else {
if((state_val_46972 === (4))){
var inst_46961 = (state_46971[(2)]);
var inst_46962 = async.call(null,inst_46961);
var state_46971__$1 = state_46971;
if(cljs.core.truth_(inst_46962)){
var statearr_46974_47106 = state_46971__$1;
(statearr_46974_47106[(1)] = (5));

} else {
var statearr_46975_47107 = state_46971__$1;
(statearr_46975_47107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46972 === (5))){
var state_46971__$1 = state_46971;
var statearr_46976_47108 = state_46971__$1;
(statearr_46976_47108[(2)] = null);

(statearr_46976_47108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46972 === (6))){
var state_46971__$1 = state_46971;
var statearr_46977_47109 = state_46971__$1;
(statearr_46977_47109[(2)] = null);

(statearr_46977_47109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46972 === (7))){
var inst_46967 = (state_46971[(2)]);
var state_46971__$1 = state_46971;
var statearr_46978_47110 = state_46971__$1;
(statearr_46978_47110[(2)] = inst_46967);

(statearr_46978_47110[(1)] = (3));


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
});})(__47091,c__46751__auto___47104,G__46934_47092,G__46934_47093__$1,n__31567__auto___47090,jobs,results,process,async))
;
return ((function (__47091,switch__46661__auto__,c__46751__auto___47104,G__46934_47092,G__46934_47093__$1,n__31567__auto___47090,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0 = (function (){
var statearr_46979 = [null,null,null,null,null,null,null];
(statearr_46979[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__);

(statearr_46979[(1)] = (1));

return statearr_46979;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1 = (function (state_46971){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_46971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e46980){if((e46980 instanceof Object)){
var ex__46665__auto__ = e46980;
var statearr_46981_47111 = state_46971;
(statearr_46981_47111[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47112 = state_46971;
state_46971 = G__47112;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__ = function(state_46971){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1.call(this,state_46971);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__;
})()
;})(__47091,switch__46661__auto__,c__46751__auto___47104,G__46934_47092,G__46934_47093__$1,n__31567__auto___47090,jobs,results,process,async))
})();
var state__46753__auto__ = (function (){var statearr_46982 = f__46752__auto__.call(null);
(statearr_46982[(6)] = c__46751__auto___47104);

return statearr_46982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(__47091,c__46751__auto___47104,G__46934_47092,G__46934_47093__$1,n__31567__auto___47090,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46934_47093__$1)].join('')));

}

var G__47113 = (__47091 + (1));
__47091 = G__47113;
continue;
} else {
}
break;
}

var c__46751__auto___47114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___47114,jobs,results,process,async){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___47114,jobs,results,process,async){
return (function (state_47004){
var state_val_47005 = (state_47004[(1)]);
if((state_val_47005 === (1))){
var state_47004__$1 = state_47004;
var statearr_47006_47115 = state_47004__$1;
(statearr_47006_47115[(2)] = null);

(statearr_47006_47115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47005 === (2))){
var state_47004__$1 = state_47004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47004__$1,(4),from);
} else {
if((state_val_47005 === (3))){
var inst_47002 = (state_47004[(2)]);
var state_47004__$1 = state_47004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47004__$1,inst_47002);
} else {
if((state_val_47005 === (4))){
var inst_46985 = (state_47004[(7)]);
var inst_46985__$1 = (state_47004[(2)]);
var inst_46986 = (inst_46985__$1 == null);
var state_47004__$1 = (function (){var statearr_47007 = state_47004;
(statearr_47007[(7)] = inst_46985__$1);

return statearr_47007;
})();
if(cljs.core.truth_(inst_46986)){
var statearr_47008_47116 = state_47004__$1;
(statearr_47008_47116[(1)] = (5));

} else {
var statearr_47009_47117 = state_47004__$1;
(statearr_47009_47117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47005 === (5))){
var inst_46988 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47004__$1 = state_47004;
var statearr_47010_47118 = state_47004__$1;
(statearr_47010_47118[(2)] = inst_46988);

(statearr_47010_47118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47005 === (6))){
var inst_46990 = (state_47004[(8)]);
var inst_46985 = (state_47004[(7)]);
var inst_46990__$1 = cljs.core.async.chan.call(null,(1));
var inst_46991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46992 = [inst_46985,inst_46990__$1];
var inst_46993 = (new cljs.core.PersistentVector(null,2,(5),inst_46991,inst_46992,null));
var state_47004__$1 = (function (){var statearr_47011 = state_47004;
(statearr_47011[(8)] = inst_46990__$1);

return statearr_47011;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47004__$1,(8),jobs,inst_46993);
} else {
if((state_val_47005 === (7))){
var inst_47000 = (state_47004[(2)]);
var state_47004__$1 = state_47004;
var statearr_47012_47119 = state_47004__$1;
(statearr_47012_47119[(2)] = inst_47000);

(statearr_47012_47119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47005 === (8))){
var inst_46990 = (state_47004[(8)]);
var inst_46995 = (state_47004[(2)]);
var state_47004__$1 = (function (){var statearr_47013 = state_47004;
(statearr_47013[(9)] = inst_46995);

return statearr_47013;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47004__$1,(9),results,inst_46990);
} else {
if((state_val_47005 === (9))){
var inst_46997 = (state_47004[(2)]);
var state_47004__$1 = (function (){var statearr_47014 = state_47004;
(statearr_47014[(10)] = inst_46997);

return statearr_47014;
})();
var statearr_47015_47120 = state_47004__$1;
(statearr_47015_47120[(2)] = null);

(statearr_47015_47120[(1)] = (2));


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
});})(c__46751__auto___47114,jobs,results,process,async))
;
return ((function (switch__46661__auto__,c__46751__auto___47114,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0 = (function (){
var statearr_47016 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__);

(statearr_47016[(1)] = (1));

return statearr_47016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1 = (function (state_47004){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_47004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e47017){if((e47017 instanceof Object)){
var ex__46665__auto__ = e47017;
var statearr_47018_47121 = state_47004;
(statearr_47018_47121[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47122 = state_47004;
state_47004 = G__47122;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__ = function(state_47004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1.call(this,state_47004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___47114,jobs,results,process,async))
})();
var state__46753__auto__ = (function (){var statearr_47019 = f__46752__auto__.call(null);
(statearr_47019[(6)] = c__46751__auto___47114);

return statearr_47019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___47114,jobs,results,process,async))
);


var c__46751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto__,jobs,results,process,async){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto__,jobs,results,process,async){
return (function (state_47057){
var state_val_47058 = (state_47057[(1)]);
if((state_val_47058 === (7))){
var inst_47053 = (state_47057[(2)]);
var state_47057__$1 = state_47057;
var statearr_47059_47123 = state_47057__$1;
(statearr_47059_47123[(2)] = inst_47053);

(statearr_47059_47123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (20))){
var state_47057__$1 = state_47057;
var statearr_47060_47124 = state_47057__$1;
(statearr_47060_47124[(2)] = null);

(statearr_47060_47124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (1))){
var state_47057__$1 = state_47057;
var statearr_47061_47125 = state_47057__$1;
(statearr_47061_47125[(2)] = null);

(statearr_47061_47125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (4))){
var inst_47022 = (state_47057[(7)]);
var inst_47022__$1 = (state_47057[(2)]);
var inst_47023 = (inst_47022__$1 == null);
var state_47057__$1 = (function (){var statearr_47062 = state_47057;
(statearr_47062[(7)] = inst_47022__$1);

return statearr_47062;
})();
if(cljs.core.truth_(inst_47023)){
var statearr_47063_47126 = state_47057__$1;
(statearr_47063_47126[(1)] = (5));

} else {
var statearr_47064_47127 = state_47057__$1;
(statearr_47064_47127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (15))){
var inst_47035 = (state_47057[(8)]);
var state_47057__$1 = state_47057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47057__$1,(18),to,inst_47035);
} else {
if((state_val_47058 === (21))){
var inst_47048 = (state_47057[(2)]);
var state_47057__$1 = state_47057;
var statearr_47065_47128 = state_47057__$1;
(statearr_47065_47128[(2)] = inst_47048);

(statearr_47065_47128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (13))){
var inst_47050 = (state_47057[(2)]);
var state_47057__$1 = (function (){var statearr_47066 = state_47057;
(statearr_47066[(9)] = inst_47050);

return statearr_47066;
})();
var statearr_47067_47129 = state_47057__$1;
(statearr_47067_47129[(2)] = null);

(statearr_47067_47129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (6))){
var inst_47022 = (state_47057[(7)]);
var state_47057__$1 = state_47057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47057__$1,(11),inst_47022);
} else {
if((state_val_47058 === (17))){
var inst_47043 = (state_47057[(2)]);
var state_47057__$1 = state_47057;
if(cljs.core.truth_(inst_47043)){
var statearr_47068_47130 = state_47057__$1;
(statearr_47068_47130[(1)] = (19));

} else {
var statearr_47069_47131 = state_47057__$1;
(statearr_47069_47131[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (3))){
var inst_47055 = (state_47057[(2)]);
var state_47057__$1 = state_47057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47057__$1,inst_47055);
} else {
if((state_val_47058 === (12))){
var inst_47032 = (state_47057[(10)]);
var state_47057__$1 = state_47057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47057__$1,(14),inst_47032);
} else {
if((state_val_47058 === (2))){
var state_47057__$1 = state_47057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47057__$1,(4),results);
} else {
if((state_val_47058 === (19))){
var state_47057__$1 = state_47057;
var statearr_47070_47132 = state_47057__$1;
(statearr_47070_47132[(2)] = null);

(statearr_47070_47132[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (11))){
var inst_47032 = (state_47057[(2)]);
var state_47057__$1 = (function (){var statearr_47071 = state_47057;
(statearr_47071[(10)] = inst_47032);

return statearr_47071;
})();
var statearr_47072_47133 = state_47057__$1;
(statearr_47072_47133[(2)] = null);

(statearr_47072_47133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (9))){
var state_47057__$1 = state_47057;
var statearr_47073_47134 = state_47057__$1;
(statearr_47073_47134[(2)] = null);

(statearr_47073_47134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (5))){
var state_47057__$1 = state_47057;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47074_47135 = state_47057__$1;
(statearr_47074_47135[(1)] = (8));

} else {
var statearr_47075_47136 = state_47057__$1;
(statearr_47075_47136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (14))){
var inst_47035 = (state_47057[(8)]);
var inst_47037 = (state_47057[(11)]);
var inst_47035__$1 = (state_47057[(2)]);
var inst_47036 = (inst_47035__$1 == null);
var inst_47037__$1 = cljs.core.not.call(null,inst_47036);
var state_47057__$1 = (function (){var statearr_47076 = state_47057;
(statearr_47076[(8)] = inst_47035__$1);

(statearr_47076[(11)] = inst_47037__$1);

return statearr_47076;
})();
if(inst_47037__$1){
var statearr_47077_47137 = state_47057__$1;
(statearr_47077_47137[(1)] = (15));

} else {
var statearr_47078_47138 = state_47057__$1;
(statearr_47078_47138[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (16))){
var inst_47037 = (state_47057[(11)]);
var state_47057__$1 = state_47057;
var statearr_47079_47139 = state_47057__$1;
(statearr_47079_47139[(2)] = inst_47037);

(statearr_47079_47139[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (10))){
var inst_47029 = (state_47057[(2)]);
var state_47057__$1 = state_47057;
var statearr_47080_47140 = state_47057__$1;
(statearr_47080_47140[(2)] = inst_47029);

(statearr_47080_47140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (18))){
var inst_47040 = (state_47057[(2)]);
var state_47057__$1 = state_47057;
var statearr_47081_47141 = state_47057__$1;
(statearr_47081_47141[(2)] = inst_47040);

(statearr_47081_47141[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47058 === (8))){
var inst_47026 = cljs.core.async.close_BANG_.call(null,to);
var state_47057__$1 = state_47057;
var statearr_47082_47142 = state_47057__$1;
(statearr_47082_47142[(2)] = inst_47026);

(statearr_47082_47142[(1)] = (10));


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
});})(c__46751__auto__,jobs,results,process,async))
;
return ((function (switch__46661__auto__,c__46751__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0 = (function (){
var statearr_47083 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__);

(statearr_47083[(1)] = (1));

return statearr_47083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1 = (function (state_47057){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_47057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e47084){if((e47084 instanceof Object)){
var ex__46665__auto__ = e47084;
var statearr_47085_47143 = state_47057;
(statearr_47085_47143[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47144 = state_47057;
state_47057 = G__47144;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__ = function(state_47057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1.call(this,state_47057);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46662__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto__,jobs,results,process,async))
})();
var state__46753__auto__ = (function (){var statearr_47086 = f__46752__auto__.call(null);
(statearr_47086[(6)] = c__46751__auto__);

return statearr_47086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto__,jobs,results,process,async))
);

return c__46751__auto__;
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
var G__47146 = arguments.length;
switch (G__47146) {
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
var G__47149 = arguments.length;
switch (G__47149) {
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
var G__47152 = arguments.length;
switch (G__47152) {
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
var c__46751__auto___47201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___47201,tc,fc){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___47201,tc,fc){
return (function (state_47178){
var state_val_47179 = (state_47178[(1)]);
if((state_val_47179 === (7))){
var inst_47174 = (state_47178[(2)]);
var state_47178__$1 = state_47178;
var statearr_47180_47202 = state_47178__$1;
(statearr_47180_47202[(2)] = inst_47174);

(statearr_47180_47202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (1))){
var state_47178__$1 = state_47178;
var statearr_47181_47203 = state_47178__$1;
(statearr_47181_47203[(2)] = null);

(statearr_47181_47203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (4))){
var inst_47155 = (state_47178[(7)]);
var inst_47155__$1 = (state_47178[(2)]);
var inst_47156 = (inst_47155__$1 == null);
var state_47178__$1 = (function (){var statearr_47182 = state_47178;
(statearr_47182[(7)] = inst_47155__$1);

return statearr_47182;
})();
if(cljs.core.truth_(inst_47156)){
var statearr_47183_47204 = state_47178__$1;
(statearr_47183_47204[(1)] = (5));

} else {
var statearr_47184_47205 = state_47178__$1;
(statearr_47184_47205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (13))){
var state_47178__$1 = state_47178;
var statearr_47185_47206 = state_47178__$1;
(statearr_47185_47206[(2)] = null);

(statearr_47185_47206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (6))){
var inst_47155 = (state_47178[(7)]);
var inst_47161 = p.call(null,inst_47155);
var state_47178__$1 = state_47178;
if(cljs.core.truth_(inst_47161)){
var statearr_47186_47207 = state_47178__$1;
(statearr_47186_47207[(1)] = (9));

} else {
var statearr_47187_47208 = state_47178__$1;
(statearr_47187_47208[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (3))){
var inst_47176 = (state_47178[(2)]);
var state_47178__$1 = state_47178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47178__$1,inst_47176);
} else {
if((state_val_47179 === (12))){
var state_47178__$1 = state_47178;
var statearr_47188_47209 = state_47178__$1;
(statearr_47188_47209[(2)] = null);

(statearr_47188_47209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (2))){
var state_47178__$1 = state_47178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47178__$1,(4),ch);
} else {
if((state_val_47179 === (11))){
var inst_47155 = (state_47178[(7)]);
var inst_47165 = (state_47178[(2)]);
var state_47178__$1 = state_47178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47178__$1,(8),inst_47165,inst_47155);
} else {
if((state_val_47179 === (9))){
var state_47178__$1 = state_47178;
var statearr_47189_47210 = state_47178__$1;
(statearr_47189_47210[(2)] = tc);

(statearr_47189_47210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (5))){
var inst_47158 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47159 = cljs.core.async.close_BANG_.call(null,fc);
var state_47178__$1 = (function (){var statearr_47190 = state_47178;
(statearr_47190[(8)] = inst_47158);

return statearr_47190;
})();
var statearr_47191_47211 = state_47178__$1;
(statearr_47191_47211[(2)] = inst_47159);

(statearr_47191_47211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (14))){
var inst_47172 = (state_47178[(2)]);
var state_47178__$1 = state_47178;
var statearr_47192_47212 = state_47178__$1;
(statearr_47192_47212[(2)] = inst_47172);

(statearr_47192_47212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (10))){
var state_47178__$1 = state_47178;
var statearr_47193_47213 = state_47178__$1;
(statearr_47193_47213[(2)] = fc);

(statearr_47193_47213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (8))){
var inst_47167 = (state_47178[(2)]);
var state_47178__$1 = state_47178;
if(cljs.core.truth_(inst_47167)){
var statearr_47194_47214 = state_47178__$1;
(statearr_47194_47214[(1)] = (12));

} else {
var statearr_47195_47215 = state_47178__$1;
(statearr_47195_47215[(1)] = (13));

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
});})(c__46751__auto___47201,tc,fc))
;
return ((function (switch__46661__auto__,c__46751__auto___47201,tc,fc){
return (function() {
var cljs$core$async$state_machine__46662__auto__ = null;
var cljs$core$async$state_machine__46662__auto____0 = (function (){
var statearr_47196 = [null,null,null,null,null,null,null,null,null];
(statearr_47196[(0)] = cljs$core$async$state_machine__46662__auto__);

(statearr_47196[(1)] = (1));

return statearr_47196;
});
var cljs$core$async$state_machine__46662__auto____1 = (function (state_47178){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_47178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e47197){if((e47197 instanceof Object)){
var ex__46665__auto__ = e47197;
var statearr_47198_47216 = state_47178;
(statearr_47198_47216[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47217 = state_47178;
state_47178 = G__47217;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$state_machine__46662__auto__ = function(state_47178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46662__auto____1.call(this,state_47178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46662__auto____0;
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46662__auto____1;
return cljs$core$async$state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___47201,tc,fc))
})();
var state__46753__auto__ = (function (){var statearr_47199 = f__46752__auto__.call(null);
(statearr_47199[(6)] = c__46751__auto___47201);

return statearr_47199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___47201,tc,fc))
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
var c__46751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto__){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto__){
return (function (state_47238){
var state_val_47239 = (state_47238[(1)]);
if((state_val_47239 === (7))){
var inst_47234 = (state_47238[(2)]);
var state_47238__$1 = state_47238;
var statearr_47240_47258 = state_47238__$1;
(statearr_47240_47258[(2)] = inst_47234);

(statearr_47240_47258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (1))){
var inst_47218 = init;
var state_47238__$1 = (function (){var statearr_47241 = state_47238;
(statearr_47241[(7)] = inst_47218);

return statearr_47241;
})();
var statearr_47242_47259 = state_47238__$1;
(statearr_47242_47259[(2)] = null);

(statearr_47242_47259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (4))){
var inst_47221 = (state_47238[(8)]);
var inst_47221__$1 = (state_47238[(2)]);
var inst_47222 = (inst_47221__$1 == null);
var state_47238__$1 = (function (){var statearr_47243 = state_47238;
(statearr_47243[(8)] = inst_47221__$1);

return statearr_47243;
})();
if(cljs.core.truth_(inst_47222)){
var statearr_47244_47260 = state_47238__$1;
(statearr_47244_47260[(1)] = (5));

} else {
var statearr_47245_47261 = state_47238__$1;
(statearr_47245_47261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (6))){
var inst_47218 = (state_47238[(7)]);
var inst_47221 = (state_47238[(8)]);
var inst_47225 = (state_47238[(9)]);
var inst_47225__$1 = f.call(null,inst_47218,inst_47221);
var inst_47226 = cljs.core.reduced_QMARK_.call(null,inst_47225__$1);
var state_47238__$1 = (function (){var statearr_47246 = state_47238;
(statearr_47246[(9)] = inst_47225__$1);

return statearr_47246;
})();
if(inst_47226){
var statearr_47247_47262 = state_47238__$1;
(statearr_47247_47262[(1)] = (8));

} else {
var statearr_47248_47263 = state_47238__$1;
(statearr_47248_47263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (3))){
var inst_47236 = (state_47238[(2)]);
var state_47238__$1 = state_47238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47238__$1,inst_47236);
} else {
if((state_val_47239 === (2))){
var state_47238__$1 = state_47238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47238__$1,(4),ch);
} else {
if((state_val_47239 === (9))){
var inst_47225 = (state_47238[(9)]);
var inst_47218 = inst_47225;
var state_47238__$1 = (function (){var statearr_47249 = state_47238;
(statearr_47249[(7)] = inst_47218);

return statearr_47249;
})();
var statearr_47250_47264 = state_47238__$1;
(statearr_47250_47264[(2)] = null);

(statearr_47250_47264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (5))){
var inst_47218 = (state_47238[(7)]);
var state_47238__$1 = state_47238;
var statearr_47251_47265 = state_47238__$1;
(statearr_47251_47265[(2)] = inst_47218);

(statearr_47251_47265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (10))){
var inst_47232 = (state_47238[(2)]);
var state_47238__$1 = state_47238;
var statearr_47252_47266 = state_47238__$1;
(statearr_47252_47266[(2)] = inst_47232);

(statearr_47252_47266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (8))){
var inst_47225 = (state_47238[(9)]);
var inst_47228 = cljs.core.deref.call(null,inst_47225);
var state_47238__$1 = state_47238;
var statearr_47253_47267 = state_47238__$1;
(statearr_47253_47267[(2)] = inst_47228);

(statearr_47253_47267[(1)] = (10));


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
});})(c__46751__auto__))
;
return ((function (switch__46661__auto__,c__46751__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46662__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46662__auto____0 = (function (){
var statearr_47254 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47254[(0)] = cljs$core$async$reduce_$_state_machine__46662__auto__);

(statearr_47254[(1)] = (1));

return statearr_47254;
});
var cljs$core$async$reduce_$_state_machine__46662__auto____1 = (function (state_47238){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_47238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e47255){if((e47255 instanceof Object)){
var ex__46665__auto__ = e47255;
var statearr_47256_47268 = state_47238;
(statearr_47256_47268[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47269 = state_47238;
state_47238 = G__47269;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46662__auto__ = function(state_47238){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46662__auto____1.call(this,state_47238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46662__auto____0;
cljs$core$async$reduce_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46662__auto____1;
return cljs$core$async$reduce_$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto__))
})();
var state__46753__auto__ = (function (){var statearr_47257 = f__46752__auto__.call(null);
(statearr_47257[(6)] = c__46751__auto__);

return statearr_47257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto__))
);

return c__46751__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__46751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto__,f__$1){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto__,f__$1){
return (function (state_47275){
var state_val_47276 = (state_47275[(1)]);
if((state_val_47276 === (1))){
var inst_47270 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47275__$1 = state_47275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47275__$1,(2),inst_47270);
} else {
if((state_val_47276 === (2))){
var inst_47272 = (state_47275[(2)]);
var inst_47273 = f__$1.call(null,inst_47272);
var state_47275__$1 = state_47275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47275__$1,inst_47273);
} else {
return null;
}
}
});})(c__46751__auto__,f__$1))
;
return ((function (switch__46661__auto__,c__46751__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__46662__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46662__auto____0 = (function (){
var statearr_47277 = [null,null,null,null,null,null,null];
(statearr_47277[(0)] = cljs$core$async$transduce_$_state_machine__46662__auto__);

(statearr_47277[(1)] = (1));

return statearr_47277;
});
var cljs$core$async$transduce_$_state_machine__46662__auto____1 = (function (state_47275){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_47275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e47278){if((e47278 instanceof Object)){
var ex__46665__auto__ = e47278;
var statearr_47279_47281 = state_47275;
(statearr_47279_47281[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47282 = state_47275;
state_47275 = G__47282;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46662__auto__ = function(state_47275){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46662__auto____1.call(this,state_47275);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46662__auto____0;
cljs$core$async$transduce_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46662__auto____1;
return cljs$core$async$transduce_$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto__,f__$1))
})();
var state__46753__auto__ = (function (){var statearr_47280 = f__46752__auto__.call(null);
(statearr_47280[(6)] = c__46751__auto__);

return statearr_47280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto__,f__$1))
);

return c__46751__auto__;
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
var G__47284 = arguments.length;
switch (G__47284) {
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
var c__46751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto__){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto__){
return (function (state_47309){
var state_val_47310 = (state_47309[(1)]);
if((state_val_47310 === (7))){
var inst_47291 = (state_47309[(2)]);
var state_47309__$1 = state_47309;
var statearr_47311_47332 = state_47309__$1;
(statearr_47311_47332[(2)] = inst_47291);

(statearr_47311_47332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (1))){
var inst_47285 = cljs.core.seq.call(null,coll);
var inst_47286 = inst_47285;
var state_47309__$1 = (function (){var statearr_47312 = state_47309;
(statearr_47312[(7)] = inst_47286);

return statearr_47312;
})();
var statearr_47313_47333 = state_47309__$1;
(statearr_47313_47333[(2)] = null);

(statearr_47313_47333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (4))){
var inst_47286 = (state_47309[(7)]);
var inst_47289 = cljs.core.first.call(null,inst_47286);
var state_47309__$1 = state_47309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47309__$1,(7),ch,inst_47289);
} else {
if((state_val_47310 === (13))){
var inst_47303 = (state_47309[(2)]);
var state_47309__$1 = state_47309;
var statearr_47314_47334 = state_47309__$1;
(statearr_47314_47334[(2)] = inst_47303);

(statearr_47314_47334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (6))){
var inst_47294 = (state_47309[(2)]);
var state_47309__$1 = state_47309;
if(cljs.core.truth_(inst_47294)){
var statearr_47315_47335 = state_47309__$1;
(statearr_47315_47335[(1)] = (8));

} else {
var statearr_47316_47336 = state_47309__$1;
(statearr_47316_47336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (3))){
var inst_47307 = (state_47309[(2)]);
var state_47309__$1 = state_47309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47309__$1,inst_47307);
} else {
if((state_val_47310 === (12))){
var state_47309__$1 = state_47309;
var statearr_47317_47337 = state_47309__$1;
(statearr_47317_47337[(2)] = null);

(statearr_47317_47337[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (2))){
var inst_47286 = (state_47309[(7)]);
var state_47309__$1 = state_47309;
if(cljs.core.truth_(inst_47286)){
var statearr_47318_47338 = state_47309__$1;
(statearr_47318_47338[(1)] = (4));

} else {
var statearr_47319_47339 = state_47309__$1;
(statearr_47319_47339[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (11))){
var inst_47300 = cljs.core.async.close_BANG_.call(null,ch);
var state_47309__$1 = state_47309;
var statearr_47320_47340 = state_47309__$1;
(statearr_47320_47340[(2)] = inst_47300);

(statearr_47320_47340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (9))){
var state_47309__$1 = state_47309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47321_47341 = state_47309__$1;
(statearr_47321_47341[(1)] = (11));

} else {
var statearr_47322_47342 = state_47309__$1;
(statearr_47322_47342[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (5))){
var inst_47286 = (state_47309[(7)]);
var state_47309__$1 = state_47309;
var statearr_47323_47343 = state_47309__$1;
(statearr_47323_47343[(2)] = inst_47286);

(statearr_47323_47343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (10))){
var inst_47305 = (state_47309[(2)]);
var state_47309__$1 = state_47309;
var statearr_47324_47344 = state_47309__$1;
(statearr_47324_47344[(2)] = inst_47305);

(statearr_47324_47344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (8))){
var inst_47286 = (state_47309[(7)]);
var inst_47296 = cljs.core.next.call(null,inst_47286);
var inst_47286__$1 = inst_47296;
var state_47309__$1 = (function (){var statearr_47325 = state_47309;
(statearr_47325[(7)] = inst_47286__$1);

return statearr_47325;
})();
var statearr_47326_47345 = state_47309__$1;
(statearr_47326_47345[(2)] = null);

(statearr_47326_47345[(1)] = (2));


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
});})(c__46751__auto__))
;
return ((function (switch__46661__auto__,c__46751__auto__){
return (function() {
var cljs$core$async$state_machine__46662__auto__ = null;
var cljs$core$async$state_machine__46662__auto____0 = (function (){
var statearr_47327 = [null,null,null,null,null,null,null,null];
(statearr_47327[(0)] = cljs$core$async$state_machine__46662__auto__);

(statearr_47327[(1)] = (1));

return statearr_47327;
});
var cljs$core$async$state_machine__46662__auto____1 = (function (state_47309){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_47309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e47328){if((e47328 instanceof Object)){
var ex__46665__auto__ = e47328;
var statearr_47329_47346 = state_47309;
(statearr_47329_47346[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47347 = state_47309;
state_47309 = G__47347;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$state_machine__46662__auto__ = function(state_47309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46662__auto____1.call(this,state_47309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46662__auto____0;
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46662__auto____1;
return cljs$core$async$state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto__))
})();
var state__46753__auto__ = (function (){var statearr_47330 = f__46752__auto__.call(null);
(statearr_47330[(6)] = c__46751__auto__);

return statearr_47330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto__))
);

return c__46751__auto__;
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
var x__31255__auto__ = (((_ == null))?null:_);
var m__31256__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31255__auto__)]);
if(!((m__31256__auto__ == null))){
return m__31256__auto__.call(null,_);
} else {
var m__31256__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31256__auto____$1 == null))){
return m__31256__auto____$1.call(null,_);
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
var x__31255__auto__ = (((m == null))?null:m);
var m__31256__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31255__auto__)]);
if(!((m__31256__auto__ == null))){
return m__31256__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31256__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31256__auto____$1 == null))){
return m__31256__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__31255__auto__ = (((m == null))?null:m);
var m__31256__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31255__auto__)]);
if(!((m__31256__auto__ == null))){
return m__31256__auto__.call(null,m,ch);
} else {
var m__31256__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31256__auto____$1 == null))){
return m__31256__auto____$1.call(null,m,ch);
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
var x__31255__auto__ = (((m == null))?null:m);
var m__31256__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31255__auto__)]);
if(!((m__31256__auto__ == null))){
return m__31256__auto__.call(null,m);
} else {
var m__31256__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31256__auto____$1 == null))){
return m__31256__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async47348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47348 = (function (ch,cs,meta47349){
this.ch = ch;
this.cs = cs;
this.meta47349 = meta47349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47350,meta47349__$1){
var self__ = this;
var _47350__$1 = this;
return (new cljs.core.async.t_cljs$core$async47348(self__.ch,self__.cs,meta47349__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47350){
var self__ = this;
var _47350__$1 = this;
return self__.meta47349;
});})(cs))
;

cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47348.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47349","meta47349",-2122712516,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47348";

cljs.core.async.t_cljs$core$async47348.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31193__auto__,writer__31194__auto__,opt__31195__auto__){
return cljs.core._write.call(null,writer__31194__auto__,"cljs.core.async/t_cljs$core$async47348");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47348 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47348(ch__$1,cs__$1,meta47349){
return (new cljs.core.async.t_cljs$core$async47348(ch__$1,cs__$1,meta47349));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47348(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46751__auto___47570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___47570,cs,m,dchan,dctr,done){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___47570,cs,m,dchan,dctr,done){
return (function (state_47485){
var state_val_47486 = (state_47485[(1)]);
if((state_val_47486 === (7))){
var inst_47481 = (state_47485[(2)]);
var state_47485__$1 = state_47485;
var statearr_47487_47571 = state_47485__$1;
(statearr_47487_47571[(2)] = inst_47481);

(statearr_47487_47571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (20))){
var inst_47384 = (state_47485[(7)]);
var inst_47396 = cljs.core.first.call(null,inst_47384);
var inst_47397 = cljs.core.nth.call(null,inst_47396,(0),null);
var inst_47398 = cljs.core.nth.call(null,inst_47396,(1),null);
var state_47485__$1 = (function (){var statearr_47488 = state_47485;
(statearr_47488[(8)] = inst_47397);

return statearr_47488;
})();
if(cljs.core.truth_(inst_47398)){
var statearr_47489_47572 = state_47485__$1;
(statearr_47489_47572[(1)] = (22));

} else {
var statearr_47490_47573 = state_47485__$1;
(statearr_47490_47573[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (27))){
var inst_47428 = (state_47485[(9)]);
var inst_47433 = (state_47485[(10)]);
var inst_47353 = (state_47485[(11)]);
var inst_47426 = (state_47485[(12)]);
var inst_47433__$1 = cljs.core._nth.call(null,inst_47426,inst_47428);
var inst_47434 = cljs.core.async.put_BANG_.call(null,inst_47433__$1,inst_47353,done);
var state_47485__$1 = (function (){var statearr_47491 = state_47485;
(statearr_47491[(10)] = inst_47433__$1);

return statearr_47491;
})();
if(cljs.core.truth_(inst_47434)){
var statearr_47492_47574 = state_47485__$1;
(statearr_47492_47574[(1)] = (30));

} else {
var statearr_47493_47575 = state_47485__$1;
(statearr_47493_47575[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (1))){
var state_47485__$1 = state_47485;
var statearr_47494_47576 = state_47485__$1;
(statearr_47494_47576[(2)] = null);

(statearr_47494_47576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (24))){
var inst_47384 = (state_47485[(7)]);
var inst_47403 = (state_47485[(2)]);
var inst_47404 = cljs.core.next.call(null,inst_47384);
var inst_47362 = inst_47404;
var inst_47363 = null;
var inst_47364 = (0);
var inst_47365 = (0);
var state_47485__$1 = (function (){var statearr_47495 = state_47485;
(statearr_47495[(13)] = inst_47364);

(statearr_47495[(14)] = inst_47365);

(statearr_47495[(15)] = inst_47362);

(statearr_47495[(16)] = inst_47403);

(statearr_47495[(17)] = inst_47363);

return statearr_47495;
})();
var statearr_47496_47577 = state_47485__$1;
(statearr_47496_47577[(2)] = null);

(statearr_47496_47577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (39))){
var state_47485__$1 = state_47485;
var statearr_47500_47578 = state_47485__$1;
(statearr_47500_47578[(2)] = null);

(statearr_47500_47578[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (4))){
var inst_47353 = (state_47485[(11)]);
var inst_47353__$1 = (state_47485[(2)]);
var inst_47354 = (inst_47353__$1 == null);
var state_47485__$1 = (function (){var statearr_47501 = state_47485;
(statearr_47501[(11)] = inst_47353__$1);

return statearr_47501;
})();
if(cljs.core.truth_(inst_47354)){
var statearr_47502_47579 = state_47485__$1;
(statearr_47502_47579[(1)] = (5));

} else {
var statearr_47503_47580 = state_47485__$1;
(statearr_47503_47580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (15))){
var inst_47364 = (state_47485[(13)]);
var inst_47365 = (state_47485[(14)]);
var inst_47362 = (state_47485[(15)]);
var inst_47363 = (state_47485[(17)]);
var inst_47380 = (state_47485[(2)]);
var inst_47381 = (inst_47365 + (1));
var tmp47497 = inst_47364;
var tmp47498 = inst_47362;
var tmp47499 = inst_47363;
var inst_47362__$1 = tmp47498;
var inst_47363__$1 = tmp47499;
var inst_47364__$1 = tmp47497;
var inst_47365__$1 = inst_47381;
var state_47485__$1 = (function (){var statearr_47504 = state_47485;
(statearr_47504[(13)] = inst_47364__$1);

(statearr_47504[(14)] = inst_47365__$1);

(statearr_47504[(15)] = inst_47362__$1);

(statearr_47504[(18)] = inst_47380);

(statearr_47504[(17)] = inst_47363__$1);

return statearr_47504;
})();
var statearr_47505_47581 = state_47485__$1;
(statearr_47505_47581[(2)] = null);

(statearr_47505_47581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (21))){
var inst_47407 = (state_47485[(2)]);
var state_47485__$1 = state_47485;
var statearr_47509_47582 = state_47485__$1;
(statearr_47509_47582[(2)] = inst_47407);

(statearr_47509_47582[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (31))){
var inst_47433 = (state_47485[(10)]);
var inst_47437 = done.call(null,null);
var inst_47438 = cljs.core.async.untap_STAR_.call(null,m,inst_47433);
var state_47485__$1 = (function (){var statearr_47510 = state_47485;
(statearr_47510[(19)] = inst_47437);

return statearr_47510;
})();
var statearr_47511_47583 = state_47485__$1;
(statearr_47511_47583[(2)] = inst_47438);

(statearr_47511_47583[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (32))){
var inst_47428 = (state_47485[(9)]);
var inst_47425 = (state_47485[(20)]);
var inst_47427 = (state_47485[(21)]);
var inst_47426 = (state_47485[(12)]);
var inst_47440 = (state_47485[(2)]);
var inst_47441 = (inst_47428 + (1));
var tmp47506 = inst_47425;
var tmp47507 = inst_47427;
var tmp47508 = inst_47426;
var inst_47425__$1 = tmp47506;
var inst_47426__$1 = tmp47508;
var inst_47427__$1 = tmp47507;
var inst_47428__$1 = inst_47441;
var state_47485__$1 = (function (){var statearr_47512 = state_47485;
(statearr_47512[(9)] = inst_47428__$1);

(statearr_47512[(22)] = inst_47440);

(statearr_47512[(20)] = inst_47425__$1);

(statearr_47512[(21)] = inst_47427__$1);

(statearr_47512[(12)] = inst_47426__$1);

return statearr_47512;
})();
var statearr_47513_47584 = state_47485__$1;
(statearr_47513_47584[(2)] = null);

(statearr_47513_47584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (40))){
var inst_47453 = (state_47485[(23)]);
var inst_47457 = done.call(null,null);
var inst_47458 = cljs.core.async.untap_STAR_.call(null,m,inst_47453);
var state_47485__$1 = (function (){var statearr_47514 = state_47485;
(statearr_47514[(24)] = inst_47457);

return statearr_47514;
})();
var statearr_47515_47585 = state_47485__$1;
(statearr_47515_47585[(2)] = inst_47458);

(statearr_47515_47585[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (33))){
var inst_47444 = (state_47485[(25)]);
var inst_47446 = cljs.core.chunked_seq_QMARK_.call(null,inst_47444);
var state_47485__$1 = state_47485;
if(inst_47446){
var statearr_47516_47586 = state_47485__$1;
(statearr_47516_47586[(1)] = (36));

} else {
var statearr_47517_47587 = state_47485__$1;
(statearr_47517_47587[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (13))){
var inst_47374 = (state_47485[(26)]);
var inst_47377 = cljs.core.async.close_BANG_.call(null,inst_47374);
var state_47485__$1 = state_47485;
var statearr_47518_47588 = state_47485__$1;
(statearr_47518_47588[(2)] = inst_47377);

(statearr_47518_47588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (22))){
var inst_47397 = (state_47485[(8)]);
var inst_47400 = cljs.core.async.close_BANG_.call(null,inst_47397);
var state_47485__$1 = state_47485;
var statearr_47519_47589 = state_47485__$1;
(statearr_47519_47589[(2)] = inst_47400);

(statearr_47519_47589[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (36))){
var inst_47444 = (state_47485[(25)]);
var inst_47448 = cljs.core.chunk_first.call(null,inst_47444);
var inst_47449 = cljs.core.chunk_rest.call(null,inst_47444);
var inst_47450 = cljs.core.count.call(null,inst_47448);
var inst_47425 = inst_47449;
var inst_47426 = inst_47448;
var inst_47427 = inst_47450;
var inst_47428 = (0);
var state_47485__$1 = (function (){var statearr_47520 = state_47485;
(statearr_47520[(9)] = inst_47428);

(statearr_47520[(20)] = inst_47425);

(statearr_47520[(21)] = inst_47427);

(statearr_47520[(12)] = inst_47426);

return statearr_47520;
})();
var statearr_47521_47590 = state_47485__$1;
(statearr_47521_47590[(2)] = null);

(statearr_47521_47590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (41))){
var inst_47444 = (state_47485[(25)]);
var inst_47460 = (state_47485[(2)]);
var inst_47461 = cljs.core.next.call(null,inst_47444);
var inst_47425 = inst_47461;
var inst_47426 = null;
var inst_47427 = (0);
var inst_47428 = (0);
var state_47485__$1 = (function (){var statearr_47522 = state_47485;
(statearr_47522[(9)] = inst_47428);

(statearr_47522[(20)] = inst_47425);

(statearr_47522[(27)] = inst_47460);

(statearr_47522[(21)] = inst_47427);

(statearr_47522[(12)] = inst_47426);

return statearr_47522;
})();
var statearr_47523_47591 = state_47485__$1;
(statearr_47523_47591[(2)] = null);

(statearr_47523_47591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (43))){
var state_47485__$1 = state_47485;
var statearr_47524_47592 = state_47485__$1;
(statearr_47524_47592[(2)] = null);

(statearr_47524_47592[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (29))){
var inst_47469 = (state_47485[(2)]);
var state_47485__$1 = state_47485;
var statearr_47525_47593 = state_47485__$1;
(statearr_47525_47593[(2)] = inst_47469);

(statearr_47525_47593[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (44))){
var inst_47478 = (state_47485[(2)]);
var state_47485__$1 = (function (){var statearr_47526 = state_47485;
(statearr_47526[(28)] = inst_47478);

return statearr_47526;
})();
var statearr_47527_47594 = state_47485__$1;
(statearr_47527_47594[(2)] = null);

(statearr_47527_47594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (6))){
var inst_47417 = (state_47485[(29)]);
var inst_47416 = cljs.core.deref.call(null,cs);
var inst_47417__$1 = cljs.core.keys.call(null,inst_47416);
var inst_47418 = cljs.core.count.call(null,inst_47417__$1);
var inst_47419 = cljs.core.reset_BANG_.call(null,dctr,inst_47418);
var inst_47424 = cljs.core.seq.call(null,inst_47417__$1);
var inst_47425 = inst_47424;
var inst_47426 = null;
var inst_47427 = (0);
var inst_47428 = (0);
var state_47485__$1 = (function (){var statearr_47528 = state_47485;
(statearr_47528[(9)] = inst_47428);

(statearr_47528[(20)] = inst_47425);

(statearr_47528[(29)] = inst_47417__$1);

(statearr_47528[(21)] = inst_47427);

(statearr_47528[(30)] = inst_47419);

(statearr_47528[(12)] = inst_47426);

return statearr_47528;
})();
var statearr_47529_47595 = state_47485__$1;
(statearr_47529_47595[(2)] = null);

(statearr_47529_47595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (28))){
var inst_47444 = (state_47485[(25)]);
var inst_47425 = (state_47485[(20)]);
var inst_47444__$1 = cljs.core.seq.call(null,inst_47425);
var state_47485__$1 = (function (){var statearr_47530 = state_47485;
(statearr_47530[(25)] = inst_47444__$1);

return statearr_47530;
})();
if(inst_47444__$1){
var statearr_47531_47596 = state_47485__$1;
(statearr_47531_47596[(1)] = (33));

} else {
var statearr_47532_47597 = state_47485__$1;
(statearr_47532_47597[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (25))){
var inst_47428 = (state_47485[(9)]);
var inst_47427 = (state_47485[(21)]);
var inst_47430 = (inst_47428 < inst_47427);
var inst_47431 = inst_47430;
var state_47485__$1 = state_47485;
if(cljs.core.truth_(inst_47431)){
var statearr_47533_47598 = state_47485__$1;
(statearr_47533_47598[(1)] = (27));

} else {
var statearr_47534_47599 = state_47485__$1;
(statearr_47534_47599[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (34))){
var state_47485__$1 = state_47485;
var statearr_47535_47600 = state_47485__$1;
(statearr_47535_47600[(2)] = null);

(statearr_47535_47600[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (17))){
var state_47485__$1 = state_47485;
var statearr_47536_47601 = state_47485__$1;
(statearr_47536_47601[(2)] = null);

(statearr_47536_47601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (3))){
var inst_47483 = (state_47485[(2)]);
var state_47485__$1 = state_47485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47485__$1,inst_47483);
} else {
if((state_val_47486 === (12))){
var inst_47412 = (state_47485[(2)]);
var state_47485__$1 = state_47485;
var statearr_47537_47602 = state_47485__$1;
(statearr_47537_47602[(2)] = inst_47412);

(statearr_47537_47602[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (2))){
var state_47485__$1 = state_47485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47485__$1,(4),ch);
} else {
if((state_val_47486 === (23))){
var state_47485__$1 = state_47485;
var statearr_47538_47603 = state_47485__$1;
(statearr_47538_47603[(2)] = null);

(statearr_47538_47603[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (35))){
var inst_47467 = (state_47485[(2)]);
var state_47485__$1 = state_47485;
var statearr_47539_47604 = state_47485__$1;
(statearr_47539_47604[(2)] = inst_47467);

(statearr_47539_47604[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (19))){
var inst_47384 = (state_47485[(7)]);
var inst_47388 = cljs.core.chunk_first.call(null,inst_47384);
var inst_47389 = cljs.core.chunk_rest.call(null,inst_47384);
var inst_47390 = cljs.core.count.call(null,inst_47388);
var inst_47362 = inst_47389;
var inst_47363 = inst_47388;
var inst_47364 = inst_47390;
var inst_47365 = (0);
var state_47485__$1 = (function (){var statearr_47540 = state_47485;
(statearr_47540[(13)] = inst_47364);

(statearr_47540[(14)] = inst_47365);

(statearr_47540[(15)] = inst_47362);

(statearr_47540[(17)] = inst_47363);

return statearr_47540;
})();
var statearr_47541_47605 = state_47485__$1;
(statearr_47541_47605[(2)] = null);

(statearr_47541_47605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (11))){
var inst_47384 = (state_47485[(7)]);
var inst_47362 = (state_47485[(15)]);
var inst_47384__$1 = cljs.core.seq.call(null,inst_47362);
var state_47485__$1 = (function (){var statearr_47542 = state_47485;
(statearr_47542[(7)] = inst_47384__$1);

return statearr_47542;
})();
if(inst_47384__$1){
var statearr_47543_47606 = state_47485__$1;
(statearr_47543_47606[(1)] = (16));

} else {
var statearr_47544_47607 = state_47485__$1;
(statearr_47544_47607[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (9))){
var inst_47414 = (state_47485[(2)]);
var state_47485__$1 = state_47485;
var statearr_47545_47608 = state_47485__$1;
(statearr_47545_47608[(2)] = inst_47414);

(statearr_47545_47608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (5))){
var inst_47360 = cljs.core.deref.call(null,cs);
var inst_47361 = cljs.core.seq.call(null,inst_47360);
var inst_47362 = inst_47361;
var inst_47363 = null;
var inst_47364 = (0);
var inst_47365 = (0);
var state_47485__$1 = (function (){var statearr_47546 = state_47485;
(statearr_47546[(13)] = inst_47364);

(statearr_47546[(14)] = inst_47365);

(statearr_47546[(15)] = inst_47362);

(statearr_47546[(17)] = inst_47363);

return statearr_47546;
})();
var statearr_47547_47609 = state_47485__$1;
(statearr_47547_47609[(2)] = null);

(statearr_47547_47609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (14))){
var state_47485__$1 = state_47485;
var statearr_47548_47610 = state_47485__$1;
(statearr_47548_47610[(2)] = null);

(statearr_47548_47610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (45))){
var inst_47475 = (state_47485[(2)]);
var state_47485__$1 = state_47485;
var statearr_47549_47611 = state_47485__$1;
(statearr_47549_47611[(2)] = inst_47475);

(statearr_47549_47611[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (26))){
var inst_47417 = (state_47485[(29)]);
var inst_47471 = (state_47485[(2)]);
var inst_47472 = cljs.core.seq.call(null,inst_47417);
var state_47485__$1 = (function (){var statearr_47550 = state_47485;
(statearr_47550[(31)] = inst_47471);

return statearr_47550;
})();
if(inst_47472){
var statearr_47551_47612 = state_47485__$1;
(statearr_47551_47612[(1)] = (42));

} else {
var statearr_47552_47613 = state_47485__$1;
(statearr_47552_47613[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (16))){
var inst_47384 = (state_47485[(7)]);
var inst_47386 = cljs.core.chunked_seq_QMARK_.call(null,inst_47384);
var state_47485__$1 = state_47485;
if(inst_47386){
var statearr_47553_47614 = state_47485__$1;
(statearr_47553_47614[(1)] = (19));

} else {
var statearr_47554_47615 = state_47485__$1;
(statearr_47554_47615[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (38))){
var inst_47464 = (state_47485[(2)]);
var state_47485__$1 = state_47485;
var statearr_47555_47616 = state_47485__$1;
(statearr_47555_47616[(2)] = inst_47464);

(statearr_47555_47616[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (30))){
var state_47485__$1 = state_47485;
var statearr_47556_47617 = state_47485__$1;
(statearr_47556_47617[(2)] = null);

(statearr_47556_47617[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (10))){
var inst_47365 = (state_47485[(14)]);
var inst_47363 = (state_47485[(17)]);
var inst_47373 = cljs.core._nth.call(null,inst_47363,inst_47365);
var inst_47374 = cljs.core.nth.call(null,inst_47373,(0),null);
var inst_47375 = cljs.core.nth.call(null,inst_47373,(1),null);
var state_47485__$1 = (function (){var statearr_47557 = state_47485;
(statearr_47557[(26)] = inst_47374);

return statearr_47557;
})();
if(cljs.core.truth_(inst_47375)){
var statearr_47558_47618 = state_47485__$1;
(statearr_47558_47618[(1)] = (13));

} else {
var statearr_47559_47619 = state_47485__$1;
(statearr_47559_47619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (18))){
var inst_47410 = (state_47485[(2)]);
var state_47485__$1 = state_47485;
var statearr_47560_47620 = state_47485__$1;
(statearr_47560_47620[(2)] = inst_47410);

(statearr_47560_47620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (42))){
var state_47485__$1 = state_47485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47485__$1,(45),dchan);
} else {
if((state_val_47486 === (37))){
var inst_47444 = (state_47485[(25)]);
var inst_47353 = (state_47485[(11)]);
var inst_47453 = (state_47485[(23)]);
var inst_47453__$1 = cljs.core.first.call(null,inst_47444);
var inst_47454 = cljs.core.async.put_BANG_.call(null,inst_47453__$1,inst_47353,done);
var state_47485__$1 = (function (){var statearr_47561 = state_47485;
(statearr_47561[(23)] = inst_47453__$1);

return statearr_47561;
})();
if(cljs.core.truth_(inst_47454)){
var statearr_47562_47621 = state_47485__$1;
(statearr_47562_47621[(1)] = (39));

} else {
var statearr_47563_47622 = state_47485__$1;
(statearr_47563_47622[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47486 === (8))){
var inst_47364 = (state_47485[(13)]);
var inst_47365 = (state_47485[(14)]);
var inst_47367 = (inst_47365 < inst_47364);
var inst_47368 = inst_47367;
var state_47485__$1 = state_47485;
if(cljs.core.truth_(inst_47368)){
var statearr_47564_47623 = state_47485__$1;
(statearr_47564_47623[(1)] = (10));

} else {
var statearr_47565_47624 = state_47485__$1;
(statearr_47565_47624[(1)] = (11));

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
});})(c__46751__auto___47570,cs,m,dchan,dctr,done))
;
return ((function (switch__46661__auto__,c__46751__auto___47570,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46662__auto__ = null;
var cljs$core$async$mult_$_state_machine__46662__auto____0 = (function (){
var statearr_47566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47566[(0)] = cljs$core$async$mult_$_state_machine__46662__auto__);

(statearr_47566[(1)] = (1));

return statearr_47566;
});
var cljs$core$async$mult_$_state_machine__46662__auto____1 = (function (state_47485){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_47485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e47567){if((e47567 instanceof Object)){
var ex__46665__auto__ = e47567;
var statearr_47568_47625 = state_47485;
(statearr_47568_47625[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47626 = state_47485;
state_47485 = G__47626;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46662__auto__ = function(state_47485){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46662__auto____1.call(this,state_47485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46662__auto____0;
cljs$core$async$mult_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46662__auto____1;
return cljs$core$async$mult_$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___47570,cs,m,dchan,dctr,done))
})();
var state__46753__auto__ = (function (){var statearr_47569 = f__46752__auto__.call(null);
(statearr_47569[(6)] = c__46751__auto___47570);

return statearr_47569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___47570,cs,m,dchan,dctr,done))
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
var G__47628 = arguments.length;
switch (G__47628) {
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
var x__31255__auto__ = (((m == null))?null:m);
var m__31256__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31255__auto__)]);
if(!((m__31256__auto__ == null))){
return m__31256__auto__.call(null,m,ch);
} else {
var m__31256__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31256__auto____$1 == null))){
return m__31256__auto____$1.call(null,m,ch);
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
var x__31255__auto__ = (((m == null))?null:m);
var m__31256__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31255__auto__)]);
if(!((m__31256__auto__ == null))){
return m__31256__auto__.call(null,m,ch);
} else {
var m__31256__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31256__auto____$1 == null))){
return m__31256__auto____$1.call(null,m,ch);
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
var x__31255__auto__ = (((m == null))?null:m);
var m__31256__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31255__auto__)]);
if(!((m__31256__auto__ == null))){
return m__31256__auto__.call(null,m);
} else {
var m__31256__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31256__auto____$1 == null))){
return m__31256__auto____$1.call(null,m);
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
var x__31255__auto__ = (((m == null))?null:m);
var m__31256__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31255__auto__)]);
if(!((m__31256__auto__ == null))){
return m__31256__auto__.call(null,m,state_map);
} else {
var m__31256__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31256__auto____$1 == null))){
return m__31256__auto____$1.call(null,m,state_map);
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
var x__31255__auto__ = (((m == null))?null:m);
var m__31256__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31255__auto__)]);
if(!((m__31256__auto__ == null))){
return m__31256__auto__.call(null,m,mode);
} else {
var m__31256__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31256__auto____$1 == null))){
return m__31256__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31808__auto__ = [];
var len__31801__auto___47640 = arguments.length;
var i__31802__auto___47641 = (0);
while(true){
if((i__31802__auto___47641 < len__31801__auto___47640)){
args__31808__auto__.push((arguments[i__31802__auto___47641]));

var G__47642 = (i__31802__auto___47641 + (1));
i__31802__auto___47641 = G__47642;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((3) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31809__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47634){
var map__47635 = p__47634;
var map__47635__$1 = ((((!((map__47635 == null)))?((((map__47635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47635):map__47635);
var opts = map__47635__$1;
var statearr_47637_47643 = state;
(statearr_47637_47643[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__47635,map__47635__$1,opts){
return (function (val){
var statearr_47638_47644 = state;
(statearr_47638_47644[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47635,map__47635__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_47639_47645 = state;
(statearr_47639_47645[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47630){
var G__47631 = cljs.core.first.call(null,seq47630);
var seq47630__$1 = cljs.core.next.call(null,seq47630);
var G__47632 = cljs.core.first.call(null,seq47630__$1);
var seq47630__$2 = cljs.core.next.call(null,seq47630__$1);
var G__47633 = cljs.core.first.call(null,seq47630__$2);
var seq47630__$3 = cljs.core.next.call(null,seq47630__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47631,G__47632,G__47633,seq47630__$3);
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
if(typeof cljs.core.async.t_cljs$core$async47646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47646 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta47647){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta47647 = meta47647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47648,meta47647__$1){
var self__ = this;
var _47648__$1 = this;
return (new cljs.core.async.t_cljs$core$async47646(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta47647__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47648){
var self__ = this;
var _47648__$1 = this;
return self__.meta47647;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async47646.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta47647","meta47647",-1548615789,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47646";

cljs.core.async.t_cljs$core$async47646.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31193__auto__,writer__31194__auto__,opt__31195__auto__){
return cljs.core._write.call(null,writer__31194__auto__,"cljs.core.async/t_cljs$core$async47646");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47646 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47646(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47647){
return (new cljs.core.async.t_cljs$core$async47646(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47647));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47646(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46751__auto___47810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___47810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___47810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47750){
var state_val_47751 = (state_47750[(1)]);
if((state_val_47751 === (7))){
var inst_47665 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47752_47811 = state_47750__$1;
(statearr_47752_47811[(2)] = inst_47665);

(statearr_47752_47811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (20))){
var inst_47677 = (state_47750[(7)]);
var state_47750__$1 = state_47750;
var statearr_47753_47812 = state_47750__$1;
(statearr_47753_47812[(2)] = inst_47677);

(statearr_47753_47812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (27))){
var state_47750__$1 = state_47750;
var statearr_47754_47813 = state_47750__$1;
(statearr_47754_47813[(2)] = null);

(statearr_47754_47813[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (1))){
var inst_47652 = (state_47750[(8)]);
var inst_47652__$1 = calc_state.call(null);
var inst_47654 = (inst_47652__$1 == null);
var inst_47655 = cljs.core.not.call(null,inst_47654);
var state_47750__$1 = (function (){var statearr_47755 = state_47750;
(statearr_47755[(8)] = inst_47652__$1);

return statearr_47755;
})();
if(inst_47655){
var statearr_47756_47814 = state_47750__$1;
(statearr_47756_47814[(1)] = (2));

} else {
var statearr_47757_47815 = state_47750__$1;
(statearr_47757_47815[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (24))){
var inst_47724 = (state_47750[(9)]);
var inst_47710 = (state_47750[(10)]);
var inst_47701 = (state_47750[(11)]);
var inst_47724__$1 = inst_47701.call(null,inst_47710);
var state_47750__$1 = (function (){var statearr_47758 = state_47750;
(statearr_47758[(9)] = inst_47724__$1);

return statearr_47758;
})();
if(cljs.core.truth_(inst_47724__$1)){
var statearr_47759_47816 = state_47750__$1;
(statearr_47759_47816[(1)] = (29));

} else {
var statearr_47760_47817 = state_47750__$1;
(statearr_47760_47817[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (4))){
var inst_47668 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
if(cljs.core.truth_(inst_47668)){
var statearr_47761_47818 = state_47750__$1;
(statearr_47761_47818[(1)] = (8));

} else {
var statearr_47762_47819 = state_47750__$1;
(statearr_47762_47819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (15))){
var inst_47695 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
if(cljs.core.truth_(inst_47695)){
var statearr_47763_47820 = state_47750__$1;
(statearr_47763_47820[(1)] = (19));

} else {
var statearr_47764_47821 = state_47750__$1;
(statearr_47764_47821[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (21))){
var inst_47700 = (state_47750[(12)]);
var inst_47700__$1 = (state_47750[(2)]);
var inst_47701 = cljs.core.get.call(null,inst_47700__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47702 = cljs.core.get.call(null,inst_47700__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47703 = cljs.core.get.call(null,inst_47700__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47750__$1 = (function (){var statearr_47765 = state_47750;
(statearr_47765[(12)] = inst_47700__$1);

(statearr_47765[(13)] = inst_47702);

(statearr_47765[(11)] = inst_47701);

return statearr_47765;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47750__$1,(22),inst_47703);
} else {
if((state_val_47751 === (31))){
var inst_47732 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
if(cljs.core.truth_(inst_47732)){
var statearr_47766_47822 = state_47750__$1;
(statearr_47766_47822[(1)] = (32));

} else {
var statearr_47767_47823 = state_47750__$1;
(statearr_47767_47823[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (32))){
var inst_47709 = (state_47750[(14)]);
var state_47750__$1 = state_47750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47750__$1,(35),out,inst_47709);
} else {
if((state_val_47751 === (33))){
var inst_47700 = (state_47750[(12)]);
var inst_47677 = inst_47700;
var state_47750__$1 = (function (){var statearr_47768 = state_47750;
(statearr_47768[(7)] = inst_47677);

return statearr_47768;
})();
var statearr_47769_47824 = state_47750__$1;
(statearr_47769_47824[(2)] = null);

(statearr_47769_47824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (13))){
var inst_47677 = (state_47750[(7)]);
var inst_47684 = inst_47677.cljs$lang$protocol_mask$partition0$;
var inst_47685 = (inst_47684 & (64));
var inst_47686 = inst_47677.cljs$core$ISeq$;
var inst_47687 = (cljs.core.PROTOCOL_SENTINEL === inst_47686);
var inst_47688 = (inst_47685) || (inst_47687);
var state_47750__$1 = state_47750;
if(cljs.core.truth_(inst_47688)){
var statearr_47770_47825 = state_47750__$1;
(statearr_47770_47825[(1)] = (16));

} else {
var statearr_47771_47826 = state_47750__$1;
(statearr_47771_47826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (22))){
var inst_47710 = (state_47750[(10)]);
var inst_47709 = (state_47750[(14)]);
var inst_47708 = (state_47750[(2)]);
var inst_47709__$1 = cljs.core.nth.call(null,inst_47708,(0),null);
var inst_47710__$1 = cljs.core.nth.call(null,inst_47708,(1),null);
var inst_47711 = (inst_47709__$1 == null);
var inst_47712 = cljs.core._EQ_.call(null,inst_47710__$1,change);
var inst_47713 = (inst_47711) || (inst_47712);
var state_47750__$1 = (function (){var statearr_47772 = state_47750;
(statearr_47772[(10)] = inst_47710__$1);

(statearr_47772[(14)] = inst_47709__$1);

return statearr_47772;
})();
if(cljs.core.truth_(inst_47713)){
var statearr_47773_47827 = state_47750__$1;
(statearr_47773_47827[(1)] = (23));

} else {
var statearr_47774_47828 = state_47750__$1;
(statearr_47774_47828[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (36))){
var inst_47700 = (state_47750[(12)]);
var inst_47677 = inst_47700;
var state_47750__$1 = (function (){var statearr_47775 = state_47750;
(statearr_47775[(7)] = inst_47677);

return statearr_47775;
})();
var statearr_47776_47829 = state_47750__$1;
(statearr_47776_47829[(2)] = null);

(statearr_47776_47829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (29))){
var inst_47724 = (state_47750[(9)]);
var state_47750__$1 = state_47750;
var statearr_47777_47830 = state_47750__$1;
(statearr_47777_47830[(2)] = inst_47724);

(statearr_47777_47830[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (6))){
var state_47750__$1 = state_47750;
var statearr_47778_47831 = state_47750__$1;
(statearr_47778_47831[(2)] = false);

(statearr_47778_47831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (28))){
var inst_47720 = (state_47750[(2)]);
var inst_47721 = calc_state.call(null);
var inst_47677 = inst_47721;
var state_47750__$1 = (function (){var statearr_47779 = state_47750;
(statearr_47779[(15)] = inst_47720);

(statearr_47779[(7)] = inst_47677);

return statearr_47779;
})();
var statearr_47780_47832 = state_47750__$1;
(statearr_47780_47832[(2)] = null);

(statearr_47780_47832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (25))){
var inst_47746 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47781_47833 = state_47750__$1;
(statearr_47781_47833[(2)] = inst_47746);

(statearr_47781_47833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (34))){
var inst_47744 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47782_47834 = state_47750__$1;
(statearr_47782_47834[(2)] = inst_47744);

(statearr_47782_47834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (17))){
var state_47750__$1 = state_47750;
var statearr_47783_47835 = state_47750__$1;
(statearr_47783_47835[(2)] = false);

(statearr_47783_47835[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (3))){
var state_47750__$1 = state_47750;
var statearr_47784_47836 = state_47750__$1;
(statearr_47784_47836[(2)] = false);

(statearr_47784_47836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (12))){
var inst_47748 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47750__$1,inst_47748);
} else {
if((state_val_47751 === (2))){
var inst_47652 = (state_47750[(8)]);
var inst_47657 = inst_47652.cljs$lang$protocol_mask$partition0$;
var inst_47658 = (inst_47657 & (64));
var inst_47659 = inst_47652.cljs$core$ISeq$;
var inst_47660 = (cljs.core.PROTOCOL_SENTINEL === inst_47659);
var inst_47661 = (inst_47658) || (inst_47660);
var state_47750__$1 = state_47750;
if(cljs.core.truth_(inst_47661)){
var statearr_47785_47837 = state_47750__$1;
(statearr_47785_47837[(1)] = (5));

} else {
var statearr_47786_47838 = state_47750__$1;
(statearr_47786_47838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (23))){
var inst_47709 = (state_47750[(14)]);
var inst_47715 = (inst_47709 == null);
var state_47750__$1 = state_47750;
if(cljs.core.truth_(inst_47715)){
var statearr_47787_47839 = state_47750__$1;
(statearr_47787_47839[(1)] = (26));

} else {
var statearr_47788_47840 = state_47750__$1;
(statearr_47788_47840[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (35))){
var inst_47735 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
if(cljs.core.truth_(inst_47735)){
var statearr_47789_47841 = state_47750__$1;
(statearr_47789_47841[(1)] = (36));

} else {
var statearr_47790_47842 = state_47750__$1;
(statearr_47790_47842[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (19))){
var inst_47677 = (state_47750[(7)]);
var inst_47697 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47677);
var state_47750__$1 = state_47750;
var statearr_47791_47843 = state_47750__$1;
(statearr_47791_47843[(2)] = inst_47697);

(statearr_47791_47843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (11))){
var inst_47677 = (state_47750[(7)]);
var inst_47681 = (inst_47677 == null);
var inst_47682 = cljs.core.not.call(null,inst_47681);
var state_47750__$1 = state_47750;
if(inst_47682){
var statearr_47792_47844 = state_47750__$1;
(statearr_47792_47844[(1)] = (13));

} else {
var statearr_47793_47845 = state_47750__$1;
(statearr_47793_47845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (9))){
var inst_47652 = (state_47750[(8)]);
var state_47750__$1 = state_47750;
var statearr_47794_47846 = state_47750__$1;
(statearr_47794_47846[(2)] = inst_47652);

(statearr_47794_47846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (5))){
var state_47750__$1 = state_47750;
var statearr_47795_47847 = state_47750__$1;
(statearr_47795_47847[(2)] = true);

(statearr_47795_47847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (14))){
var state_47750__$1 = state_47750;
var statearr_47796_47848 = state_47750__$1;
(statearr_47796_47848[(2)] = false);

(statearr_47796_47848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (26))){
var inst_47710 = (state_47750[(10)]);
var inst_47717 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47710);
var state_47750__$1 = state_47750;
var statearr_47797_47849 = state_47750__$1;
(statearr_47797_47849[(2)] = inst_47717);

(statearr_47797_47849[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (16))){
var state_47750__$1 = state_47750;
var statearr_47798_47850 = state_47750__$1;
(statearr_47798_47850[(2)] = true);

(statearr_47798_47850[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (38))){
var inst_47740 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47799_47851 = state_47750__$1;
(statearr_47799_47851[(2)] = inst_47740);

(statearr_47799_47851[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (30))){
var inst_47702 = (state_47750[(13)]);
var inst_47710 = (state_47750[(10)]);
var inst_47701 = (state_47750[(11)]);
var inst_47727 = cljs.core.empty_QMARK_.call(null,inst_47701);
var inst_47728 = inst_47702.call(null,inst_47710);
var inst_47729 = cljs.core.not.call(null,inst_47728);
var inst_47730 = (inst_47727) && (inst_47729);
var state_47750__$1 = state_47750;
var statearr_47800_47852 = state_47750__$1;
(statearr_47800_47852[(2)] = inst_47730);

(statearr_47800_47852[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (10))){
var inst_47652 = (state_47750[(8)]);
var inst_47673 = (state_47750[(2)]);
var inst_47674 = cljs.core.get.call(null,inst_47673,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47675 = cljs.core.get.call(null,inst_47673,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47676 = cljs.core.get.call(null,inst_47673,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47677 = inst_47652;
var state_47750__$1 = (function (){var statearr_47801 = state_47750;
(statearr_47801[(16)] = inst_47674);

(statearr_47801[(17)] = inst_47676);

(statearr_47801[(18)] = inst_47675);

(statearr_47801[(7)] = inst_47677);

return statearr_47801;
})();
var statearr_47802_47853 = state_47750__$1;
(statearr_47802_47853[(2)] = null);

(statearr_47802_47853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (18))){
var inst_47692 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47803_47854 = state_47750__$1;
(statearr_47803_47854[(2)] = inst_47692);

(statearr_47803_47854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (37))){
var state_47750__$1 = state_47750;
var statearr_47804_47855 = state_47750__$1;
(statearr_47804_47855[(2)] = null);

(statearr_47804_47855[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (8))){
var inst_47652 = (state_47750[(8)]);
var inst_47670 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47652);
var state_47750__$1 = state_47750;
var statearr_47805_47856 = state_47750__$1;
(statearr_47805_47856[(2)] = inst_47670);

(statearr_47805_47856[(1)] = (10));


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
});})(c__46751__auto___47810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46661__auto__,c__46751__auto___47810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46662__auto__ = null;
var cljs$core$async$mix_$_state_machine__46662__auto____0 = (function (){
var statearr_47806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47806[(0)] = cljs$core$async$mix_$_state_machine__46662__auto__);

(statearr_47806[(1)] = (1));

return statearr_47806;
});
var cljs$core$async$mix_$_state_machine__46662__auto____1 = (function (state_47750){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_47750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e47807){if((e47807 instanceof Object)){
var ex__46665__auto__ = e47807;
var statearr_47808_47857 = state_47750;
(statearr_47808_47857[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47858 = state_47750;
state_47750 = G__47858;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46662__auto__ = function(state_47750){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46662__auto____1.call(this,state_47750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46662__auto____0;
cljs$core$async$mix_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46662__auto____1;
return cljs$core$async$mix_$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___47810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46753__auto__ = (function (){var statearr_47809 = f__46752__auto__.call(null);
(statearr_47809[(6)] = c__46751__auto___47810);

return statearr_47809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___47810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__31255__auto__ = (((p == null))?null:p);
var m__31256__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31255__auto__)]);
if(!((m__31256__auto__ == null))){
return m__31256__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31256__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31256__auto____$1 == null))){
return m__31256__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__31255__auto__ = (((p == null))?null:p);
var m__31256__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31255__auto__)]);
if(!((m__31256__auto__ == null))){
return m__31256__auto__.call(null,p,v,ch);
} else {
var m__31256__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31256__auto____$1 == null))){
return m__31256__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47860 = arguments.length;
switch (G__47860) {
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
var x__31255__auto__ = (((p == null))?null:p);
var m__31256__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31255__auto__)]);
if(!((m__31256__auto__ == null))){
return m__31256__auto__.call(null,p);
} else {
var m__31256__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31256__auto____$1 == null))){
return m__31256__auto____$1.call(null,p);
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
var x__31255__auto__ = (((p == null))?null:p);
var m__31256__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31255__auto__)]);
if(!((m__31256__auto__ == null))){
return m__31256__auto__.call(null,p,v);
} else {
var m__31256__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31256__auto____$1 == null))){
return m__31256__auto____$1.call(null,p,v);
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
var G__47864 = arguments.length;
switch (G__47864) {
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
return (function (p1__47862_SHARP_){
if(cljs.core.truth_(p1__47862_SHARP_.call(null,topic))){
return p1__47862_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__47862_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30522__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async47865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47865 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47866){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47866 = meta47866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47867,meta47866__$1){
var self__ = this;
var _47867__$1 = this;
return (new cljs.core.async.t_cljs$core$async47865(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47866__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47867){
var self__ = this;
var _47867__$1 = this;
return self__.meta47866;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47865.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47865.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47865.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47865.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async47865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47865.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47866","meta47866",-1518098216,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47865";

cljs.core.async.t_cljs$core$async47865.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31193__auto__,writer__31194__auto__,opt__31195__auto__){
return cljs.core._write.call(null,writer__31194__auto__,"cljs.core.async/t_cljs$core$async47865");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async47865 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47865(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47866){
return (new cljs.core.async.t_cljs$core$async47865(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47866));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47865(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46751__auto___47985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___47985,mults,ensure_mult,p){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___47985,mults,ensure_mult,p){
return (function (state_47939){
var state_val_47940 = (state_47939[(1)]);
if((state_val_47940 === (7))){
var inst_47935 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
var statearr_47941_47986 = state_47939__$1;
(statearr_47941_47986[(2)] = inst_47935);

(statearr_47941_47986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (20))){
var state_47939__$1 = state_47939;
var statearr_47942_47987 = state_47939__$1;
(statearr_47942_47987[(2)] = null);

(statearr_47942_47987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (1))){
var state_47939__$1 = state_47939;
var statearr_47943_47988 = state_47939__$1;
(statearr_47943_47988[(2)] = null);

(statearr_47943_47988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (24))){
var inst_47918 = (state_47939[(7)]);
var inst_47927 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_47918);
var state_47939__$1 = state_47939;
var statearr_47944_47989 = state_47939__$1;
(statearr_47944_47989[(2)] = inst_47927);

(statearr_47944_47989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (4))){
var inst_47870 = (state_47939[(8)]);
var inst_47870__$1 = (state_47939[(2)]);
var inst_47871 = (inst_47870__$1 == null);
var state_47939__$1 = (function (){var statearr_47945 = state_47939;
(statearr_47945[(8)] = inst_47870__$1);

return statearr_47945;
})();
if(cljs.core.truth_(inst_47871)){
var statearr_47946_47990 = state_47939__$1;
(statearr_47946_47990[(1)] = (5));

} else {
var statearr_47947_47991 = state_47939__$1;
(statearr_47947_47991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (15))){
var inst_47912 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
var statearr_47948_47992 = state_47939__$1;
(statearr_47948_47992[(2)] = inst_47912);

(statearr_47948_47992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (21))){
var inst_47932 = (state_47939[(2)]);
var state_47939__$1 = (function (){var statearr_47949 = state_47939;
(statearr_47949[(9)] = inst_47932);

return statearr_47949;
})();
var statearr_47950_47993 = state_47939__$1;
(statearr_47950_47993[(2)] = null);

(statearr_47950_47993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (13))){
var inst_47894 = (state_47939[(10)]);
var inst_47896 = cljs.core.chunked_seq_QMARK_.call(null,inst_47894);
var state_47939__$1 = state_47939;
if(inst_47896){
var statearr_47951_47994 = state_47939__$1;
(statearr_47951_47994[(1)] = (16));

} else {
var statearr_47952_47995 = state_47939__$1;
(statearr_47952_47995[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (22))){
var inst_47924 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
if(cljs.core.truth_(inst_47924)){
var statearr_47953_47996 = state_47939__$1;
(statearr_47953_47996[(1)] = (23));

} else {
var statearr_47954_47997 = state_47939__$1;
(statearr_47954_47997[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (6))){
var inst_47870 = (state_47939[(8)]);
var inst_47920 = (state_47939[(11)]);
var inst_47918 = (state_47939[(7)]);
var inst_47918__$1 = topic_fn.call(null,inst_47870);
var inst_47919 = cljs.core.deref.call(null,mults);
var inst_47920__$1 = cljs.core.get.call(null,inst_47919,inst_47918__$1);
var state_47939__$1 = (function (){var statearr_47955 = state_47939;
(statearr_47955[(11)] = inst_47920__$1);

(statearr_47955[(7)] = inst_47918__$1);

return statearr_47955;
})();
if(cljs.core.truth_(inst_47920__$1)){
var statearr_47956_47998 = state_47939__$1;
(statearr_47956_47998[(1)] = (19));

} else {
var statearr_47957_47999 = state_47939__$1;
(statearr_47957_47999[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (25))){
var inst_47929 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
var statearr_47958_48000 = state_47939__$1;
(statearr_47958_48000[(2)] = inst_47929);

(statearr_47958_48000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (17))){
var inst_47894 = (state_47939[(10)]);
var inst_47903 = cljs.core.first.call(null,inst_47894);
var inst_47904 = cljs.core.async.muxch_STAR_.call(null,inst_47903);
var inst_47905 = cljs.core.async.close_BANG_.call(null,inst_47904);
var inst_47906 = cljs.core.next.call(null,inst_47894);
var inst_47880 = inst_47906;
var inst_47881 = null;
var inst_47882 = (0);
var inst_47883 = (0);
var state_47939__$1 = (function (){var statearr_47959 = state_47939;
(statearr_47959[(12)] = inst_47881);

(statearr_47959[(13)] = inst_47880);

(statearr_47959[(14)] = inst_47905);

(statearr_47959[(15)] = inst_47883);

(statearr_47959[(16)] = inst_47882);

return statearr_47959;
})();
var statearr_47960_48001 = state_47939__$1;
(statearr_47960_48001[(2)] = null);

(statearr_47960_48001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (3))){
var inst_47937 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47939__$1,inst_47937);
} else {
if((state_val_47940 === (12))){
var inst_47914 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
var statearr_47961_48002 = state_47939__$1;
(statearr_47961_48002[(2)] = inst_47914);

(statearr_47961_48002[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (2))){
var state_47939__$1 = state_47939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47939__$1,(4),ch);
} else {
if((state_val_47940 === (23))){
var state_47939__$1 = state_47939;
var statearr_47962_48003 = state_47939__$1;
(statearr_47962_48003[(2)] = null);

(statearr_47962_48003[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (19))){
var inst_47870 = (state_47939[(8)]);
var inst_47920 = (state_47939[(11)]);
var inst_47922 = cljs.core.async.muxch_STAR_.call(null,inst_47920);
var state_47939__$1 = state_47939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47939__$1,(22),inst_47922,inst_47870);
} else {
if((state_val_47940 === (11))){
var inst_47880 = (state_47939[(13)]);
var inst_47894 = (state_47939[(10)]);
var inst_47894__$1 = cljs.core.seq.call(null,inst_47880);
var state_47939__$1 = (function (){var statearr_47963 = state_47939;
(statearr_47963[(10)] = inst_47894__$1);

return statearr_47963;
})();
if(inst_47894__$1){
var statearr_47964_48004 = state_47939__$1;
(statearr_47964_48004[(1)] = (13));

} else {
var statearr_47965_48005 = state_47939__$1;
(statearr_47965_48005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (9))){
var inst_47916 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
var statearr_47966_48006 = state_47939__$1;
(statearr_47966_48006[(2)] = inst_47916);

(statearr_47966_48006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (5))){
var inst_47877 = cljs.core.deref.call(null,mults);
var inst_47878 = cljs.core.vals.call(null,inst_47877);
var inst_47879 = cljs.core.seq.call(null,inst_47878);
var inst_47880 = inst_47879;
var inst_47881 = null;
var inst_47882 = (0);
var inst_47883 = (0);
var state_47939__$1 = (function (){var statearr_47967 = state_47939;
(statearr_47967[(12)] = inst_47881);

(statearr_47967[(13)] = inst_47880);

(statearr_47967[(15)] = inst_47883);

(statearr_47967[(16)] = inst_47882);

return statearr_47967;
})();
var statearr_47968_48007 = state_47939__$1;
(statearr_47968_48007[(2)] = null);

(statearr_47968_48007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (14))){
var state_47939__$1 = state_47939;
var statearr_47972_48008 = state_47939__$1;
(statearr_47972_48008[(2)] = null);

(statearr_47972_48008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (16))){
var inst_47894 = (state_47939[(10)]);
var inst_47898 = cljs.core.chunk_first.call(null,inst_47894);
var inst_47899 = cljs.core.chunk_rest.call(null,inst_47894);
var inst_47900 = cljs.core.count.call(null,inst_47898);
var inst_47880 = inst_47899;
var inst_47881 = inst_47898;
var inst_47882 = inst_47900;
var inst_47883 = (0);
var state_47939__$1 = (function (){var statearr_47973 = state_47939;
(statearr_47973[(12)] = inst_47881);

(statearr_47973[(13)] = inst_47880);

(statearr_47973[(15)] = inst_47883);

(statearr_47973[(16)] = inst_47882);

return statearr_47973;
})();
var statearr_47974_48009 = state_47939__$1;
(statearr_47974_48009[(2)] = null);

(statearr_47974_48009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (10))){
var inst_47881 = (state_47939[(12)]);
var inst_47880 = (state_47939[(13)]);
var inst_47883 = (state_47939[(15)]);
var inst_47882 = (state_47939[(16)]);
var inst_47888 = cljs.core._nth.call(null,inst_47881,inst_47883);
var inst_47889 = cljs.core.async.muxch_STAR_.call(null,inst_47888);
var inst_47890 = cljs.core.async.close_BANG_.call(null,inst_47889);
var inst_47891 = (inst_47883 + (1));
var tmp47969 = inst_47881;
var tmp47970 = inst_47880;
var tmp47971 = inst_47882;
var inst_47880__$1 = tmp47970;
var inst_47881__$1 = tmp47969;
var inst_47882__$1 = tmp47971;
var inst_47883__$1 = inst_47891;
var state_47939__$1 = (function (){var statearr_47975 = state_47939;
(statearr_47975[(12)] = inst_47881__$1);

(statearr_47975[(13)] = inst_47880__$1);

(statearr_47975[(17)] = inst_47890);

(statearr_47975[(15)] = inst_47883__$1);

(statearr_47975[(16)] = inst_47882__$1);

return statearr_47975;
})();
var statearr_47976_48010 = state_47939__$1;
(statearr_47976_48010[(2)] = null);

(statearr_47976_48010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (18))){
var inst_47909 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
var statearr_47977_48011 = state_47939__$1;
(statearr_47977_48011[(2)] = inst_47909);

(statearr_47977_48011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (8))){
var inst_47883 = (state_47939[(15)]);
var inst_47882 = (state_47939[(16)]);
var inst_47885 = (inst_47883 < inst_47882);
var inst_47886 = inst_47885;
var state_47939__$1 = state_47939;
if(cljs.core.truth_(inst_47886)){
var statearr_47978_48012 = state_47939__$1;
(statearr_47978_48012[(1)] = (10));

} else {
var statearr_47979_48013 = state_47939__$1;
(statearr_47979_48013[(1)] = (11));

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
});})(c__46751__auto___47985,mults,ensure_mult,p))
;
return ((function (switch__46661__auto__,c__46751__auto___47985,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46662__auto__ = null;
var cljs$core$async$state_machine__46662__auto____0 = (function (){
var statearr_47980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47980[(0)] = cljs$core$async$state_machine__46662__auto__);

(statearr_47980[(1)] = (1));

return statearr_47980;
});
var cljs$core$async$state_machine__46662__auto____1 = (function (state_47939){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_47939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e47981){if((e47981 instanceof Object)){
var ex__46665__auto__ = e47981;
var statearr_47982_48014 = state_47939;
(statearr_47982_48014[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48015 = state_47939;
state_47939 = G__48015;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$state_machine__46662__auto__ = function(state_47939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46662__auto____1.call(this,state_47939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46662__auto____0;
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46662__auto____1;
return cljs$core$async$state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___47985,mults,ensure_mult,p))
})();
var state__46753__auto__ = (function (){var statearr_47983 = f__46752__auto__.call(null);
(statearr_47983[(6)] = c__46751__auto___47985);

return statearr_47983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___47985,mults,ensure_mult,p))
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
var G__48017 = arguments.length;
switch (G__48017) {
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
var G__48020 = arguments.length;
switch (G__48020) {
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
var G__48023 = arguments.length;
switch (G__48023) {
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
var c__46751__auto___48090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___48090,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___48090,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48062){
var state_val_48063 = (state_48062[(1)]);
if((state_val_48063 === (7))){
var state_48062__$1 = state_48062;
var statearr_48064_48091 = state_48062__$1;
(statearr_48064_48091[(2)] = null);

(statearr_48064_48091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (1))){
var state_48062__$1 = state_48062;
var statearr_48065_48092 = state_48062__$1;
(statearr_48065_48092[(2)] = null);

(statearr_48065_48092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (4))){
var inst_48026 = (state_48062[(7)]);
var inst_48028 = (inst_48026 < cnt);
var state_48062__$1 = state_48062;
if(cljs.core.truth_(inst_48028)){
var statearr_48066_48093 = state_48062__$1;
(statearr_48066_48093[(1)] = (6));

} else {
var statearr_48067_48094 = state_48062__$1;
(statearr_48067_48094[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (15))){
var inst_48058 = (state_48062[(2)]);
var state_48062__$1 = state_48062;
var statearr_48068_48095 = state_48062__$1;
(statearr_48068_48095[(2)] = inst_48058);

(statearr_48068_48095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (13))){
var inst_48051 = cljs.core.async.close_BANG_.call(null,out);
var state_48062__$1 = state_48062;
var statearr_48069_48096 = state_48062__$1;
(statearr_48069_48096[(2)] = inst_48051);

(statearr_48069_48096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (6))){
var state_48062__$1 = state_48062;
var statearr_48070_48097 = state_48062__$1;
(statearr_48070_48097[(2)] = null);

(statearr_48070_48097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (3))){
var inst_48060 = (state_48062[(2)]);
var state_48062__$1 = state_48062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48062__$1,inst_48060);
} else {
if((state_val_48063 === (12))){
var inst_48048 = (state_48062[(8)]);
var inst_48048__$1 = (state_48062[(2)]);
var inst_48049 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48048__$1);
var state_48062__$1 = (function (){var statearr_48071 = state_48062;
(statearr_48071[(8)] = inst_48048__$1);

return statearr_48071;
})();
if(cljs.core.truth_(inst_48049)){
var statearr_48072_48098 = state_48062__$1;
(statearr_48072_48098[(1)] = (13));

} else {
var statearr_48073_48099 = state_48062__$1;
(statearr_48073_48099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (2))){
var inst_48025 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48026 = (0);
var state_48062__$1 = (function (){var statearr_48074 = state_48062;
(statearr_48074[(9)] = inst_48025);

(statearr_48074[(7)] = inst_48026);

return statearr_48074;
})();
var statearr_48075_48100 = state_48062__$1;
(statearr_48075_48100[(2)] = null);

(statearr_48075_48100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (11))){
var inst_48026 = (state_48062[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48062,(10),Object,null,(9));
var inst_48035 = chs__$1.call(null,inst_48026);
var inst_48036 = done.call(null,inst_48026);
var inst_48037 = cljs.core.async.take_BANG_.call(null,inst_48035,inst_48036);
var state_48062__$1 = state_48062;
var statearr_48076_48101 = state_48062__$1;
(statearr_48076_48101[(2)] = inst_48037);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48062__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (9))){
var inst_48026 = (state_48062[(7)]);
var inst_48039 = (state_48062[(2)]);
var inst_48040 = (inst_48026 + (1));
var inst_48026__$1 = inst_48040;
var state_48062__$1 = (function (){var statearr_48077 = state_48062;
(statearr_48077[(10)] = inst_48039);

(statearr_48077[(7)] = inst_48026__$1);

return statearr_48077;
})();
var statearr_48078_48102 = state_48062__$1;
(statearr_48078_48102[(2)] = null);

(statearr_48078_48102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (5))){
var inst_48046 = (state_48062[(2)]);
var state_48062__$1 = (function (){var statearr_48079 = state_48062;
(statearr_48079[(11)] = inst_48046);

return statearr_48079;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48062__$1,(12),dchan);
} else {
if((state_val_48063 === (14))){
var inst_48048 = (state_48062[(8)]);
var inst_48053 = cljs.core.apply.call(null,f,inst_48048);
var state_48062__$1 = state_48062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48062__$1,(16),out,inst_48053);
} else {
if((state_val_48063 === (16))){
var inst_48055 = (state_48062[(2)]);
var state_48062__$1 = (function (){var statearr_48080 = state_48062;
(statearr_48080[(12)] = inst_48055);

return statearr_48080;
})();
var statearr_48081_48103 = state_48062__$1;
(statearr_48081_48103[(2)] = null);

(statearr_48081_48103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (10))){
var inst_48030 = (state_48062[(2)]);
var inst_48031 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48062__$1 = (function (){var statearr_48082 = state_48062;
(statearr_48082[(13)] = inst_48030);

return statearr_48082;
})();
var statearr_48083_48104 = state_48062__$1;
(statearr_48083_48104[(2)] = inst_48031);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48062__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (8))){
var inst_48044 = (state_48062[(2)]);
var state_48062__$1 = state_48062;
var statearr_48084_48105 = state_48062__$1;
(statearr_48084_48105[(2)] = inst_48044);

(statearr_48084_48105[(1)] = (5));


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
});})(c__46751__auto___48090,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46661__auto__,c__46751__auto___48090,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46662__auto__ = null;
var cljs$core$async$state_machine__46662__auto____0 = (function (){
var statearr_48085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48085[(0)] = cljs$core$async$state_machine__46662__auto__);

(statearr_48085[(1)] = (1));

return statearr_48085;
});
var cljs$core$async$state_machine__46662__auto____1 = (function (state_48062){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_48062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e48086){if((e48086 instanceof Object)){
var ex__46665__auto__ = e48086;
var statearr_48087_48106 = state_48062;
(statearr_48087_48106[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48107 = state_48062;
state_48062 = G__48107;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$state_machine__46662__auto__ = function(state_48062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46662__auto____1.call(this,state_48062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46662__auto____0;
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46662__auto____1;
return cljs$core$async$state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___48090,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46753__auto__ = (function (){var statearr_48088 = f__46752__auto__.call(null);
(statearr_48088[(6)] = c__46751__auto___48090);

return statearr_48088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___48090,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__48110 = arguments.length;
switch (G__48110) {
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
var c__46751__auto___48164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___48164,out){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___48164,out){
return (function (state_48142){
var state_val_48143 = (state_48142[(1)]);
if((state_val_48143 === (7))){
var inst_48121 = (state_48142[(7)]);
var inst_48122 = (state_48142[(8)]);
var inst_48121__$1 = (state_48142[(2)]);
var inst_48122__$1 = cljs.core.nth.call(null,inst_48121__$1,(0),null);
var inst_48123 = cljs.core.nth.call(null,inst_48121__$1,(1),null);
var inst_48124 = (inst_48122__$1 == null);
var state_48142__$1 = (function (){var statearr_48144 = state_48142;
(statearr_48144[(7)] = inst_48121__$1);

(statearr_48144[(9)] = inst_48123);

(statearr_48144[(8)] = inst_48122__$1);

return statearr_48144;
})();
if(cljs.core.truth_(inst_48124)){
var statearr_48145_48165 = state_48142__$1;
(statearr_48145_48165[(1)] = (8));

} else {
var statearr_48146_48166 = state_48142__$1;
(statearr_48146_48166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48143 === (1))){
var inst_48111 = cljs.core.vec.call(null,chs);
var inst_48112 = inst_48111;
var state_48142__$1 = (function (){var statearr_48147 = state_48142;
(statearr_48147[(10)] = inst_48112);

return statearr_48147;
})();
var statearr_48148_48167 = state_48142__$1;
(statearr_48148_48167[(2)] = null);

(statearr_48148_48167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48143 === (4))){
var inst_48112 = (state_48142[(10)]);
var state_48142__$1 = state_48142;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48142__$1,(7),inst_48112);
} else {
if((state_val_48143 === (6))){
var inst_48138 = (state_48142[(2)]);
var state_48142__$1 = state_48142;
var statearr_48149_48168 = state_48142__$1;
(statearr_48149_48168[(2)] = inst_48138);

(statearr_48149_48168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48143 === (3))){
var inst_48140 = (state_48142[(2)]);
var state_48142__$1 = state_48142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48142__$1,inst_48140);
} else {
if((state_val_48143 === (2))){
var inst_48112 = (state_48142[(10)]);
var inst_48114 = cljs.core.count.call(null,inst_48112);
var inst_48115 = (inst_48114 > (0));
var state_48142__$1 = state_48142;
if(cljs.core.truth_(inst_48115)){
var statearr_48151_48169 = state_48142__$1;
(statearr_48151_48169[(1)] = (4));

} else {
var statearr_48152_48170 = state_48142__$1;
(statearr_48152_48170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48143 === (11))){
var inst_48112 = (state_48142[(10)]);
var inst_48131 = (state_48142[(2)]);
var tmp48150 = inst_48112;
var inst_48112__$1 = tmp48150;
var state_48142__$1 = (function (){var statearr_48153 = state_48142;
(statearr_48153[(10)] = inst_48112__$1);

(statearr_48153[(11)] = inst_48131);

return statearr_48153;
})();
var statearr_48154_48171 = state_48142__$1;
(statearr_48154_48171[(2)] = null);

(statearr_48154_48171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48143 === (9))){
var inst_48122 = (state_48142[(8)]);
var state_48142__$1 = state_48142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48142__$1,(11),out,inst_48122);
} else {
if((state_val_48143 === (5))){
var inst_48136 = cljs.core.async.close_BANG_.call(null,out);
var state_48142__$1 = state_48142;
var statearr_48155_48172 = state_48142__$1;
(statearr_48155_48172[(2)] = inst_48136);

(statearr_48155_48172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48143 === (10))){
var inst_48134 = (state_48142[(2)]);
var state_48142__$1 = state_48142;
var statearr_48156_48173 = state_48142__$1;
(statearr_48156_48173[(2)] = inst_48134);

(statearr_48156_48173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48143 === (8))){
var inst_48121 = (state_48142[(7)]);
var inst_48112 = (state_48142[(10)]);
var inst_48123 = (state_48142[(9)]);
var inst_48122 = (state_48142[(8)]);
var inst_48126 = (function (){var cs = inst_48112;
var vec__48117 = inst_48121;
var v = inst_48122;
var c = inst_48123;
return ((function (cs,vec__48117,v,c,inst_48121,inst_48112,inst_48123,inst_48122,state_val_48143,c__46751__auto___48164,out){
return (function (p1__48108_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48108_SHARP_);
});
;})(cs,vec__48117,v,c,inst_48121,inst_48112,inst_48123,inst_48122,state_val_48143,c__46751__auto___48164,out))
})();
var inst_48127 = cljs.core.filterv.call(null,inst_48126,inst_48112);
var inst_48112__$1 = inst_48127;
var state_48142__$1 = (function (){var statearr_48157 = state_48142;
(statearr_48157[(10)] = inst_48112__$1);

return statearr_48157;
})();
var statearr_48158_48174 = state_48142__$1;
(statearr_48158_48174[(2)] = null);

(statearr_48158_48174[(1)] = (2));


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
});})(c__46751__auto___48164,out))
;
return ((function (switch__46661__auto__,c__46751__auto___48164,out){
return (function() {
var cljs$core$async$state_machine__46662__auto__ = null;
var cljs$core$async$state_machine__46662__auto____0 = (function (){
var statearr_48159 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48159[(0)] = cljs$core$async$state_machine__46662__auto__);

(statearr_48159[(1)] = (1));

return statearr_48159;
});
var cljs$core$async$state_machine__46662__auto____1 = (function (state_48142){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_48142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e48160){if((e48160 instanceof Object)){
var ex__46665__auto__ = e48160;
var statearr_48161_48175 = state_48142;
(statearr_48161_48175[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48176 = state_48142;
state_48142 = G__48176;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$state_machine__46662__auto__ = function(state_48142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46662__auto____1.call(this,state_48142);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46662__auto____0;
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46662__auto____1;
return cljs$core$async$state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___48164,out))
})();
var state__46753__auto__ = (function (){var statearr_48162 = f__46752__auto__.call(null);
(statearr_48162[(6)] = c__46751__auto___48164);

return statearr_48162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___48164,out))
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
var G__48178 = arguments.length;
switch (G__48178) {
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
var c__46751__auto___48223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___48223,out){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___48223,out){
return (function (state_48202){
var state_val_48203 = (state_48202[(1)]);
if((state_val_48203 === (7))){
var inst_48184 = (state_48202[(7)]);
var inst_48184__$1 = (state_48202[(2)]);
var inst_48185 = (inst_48184__$1 == null);
var inst_48186 = cljs.core.not.call(null,inst_48185);
var state_48202__$1 = (function (){var statearr_48204 = state_48202;
(statearr_48204[(7)] = inst_48184__$1);

return statearr_48204;
})();
if(inst_48186){
var statearr_48205_48224 = state_48202__$1;
(statearr_48205_48224[(1)] = (8));

} else {
var statearr_48206_48225 = state_48202__$1;
(statearr_48206_48225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (1))){
var inst_48179 = (0);
var state_48202__$1 = (function (){var statearr_48207 = state_48202;
(statearr_48207[(8)] = inst_48179);

return statearr_48207;
})();
var statearr_48208_48226 = state_48202__$1;
(statearr_48208_48226[(2)] = null);

(statearr_48208_48226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (4))){
var state_48202__$1 = state_48202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48202__$1,(7),ch);
} else {
if((state_val_48203 === (6))){
var inst_48197 = (state_48202[(2)]);
var state_48202__$1 = state_48202;
var statearr_48209_48227 = state_48202__$1;
(statearr_48209_48227[(2)] = inst_48197);

(statearr_48209_48227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (3))){
var inst_48199 = (state_48202[(2)]);
var inst_48200 = cljs.core.async.close_BANG_.call(null,out);
var state_48202__$1 = (function (){var statearr_48210 = state_48202;
(statearr_48210[(9)] = inst_48199);

return statearr_48210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48202__$1,inst_48200);
} else {
if((state_val_48203 === (2))){
var inst_48179 = (state_48202[(8)]);
var inst_48181 = (inst_48179 < n);
var state_48202__$1 = state_48202;
if(cljs.core.truth_(inst_48181)){
var statearr_48211_48228 = state_48202__$1;
(statearr_48211_48228[(1)] = (4));

} else {
var statearr_48212_48229 = state_48202__$1;
(statearr_48212_48229[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (11))){
var inst_48179 = (state_48202[(8)]);
var inst_48189 = (state_48202[(2)]);
var inst_48190 = (inst_48179 + (1));
var inst_48179__$1 = inst_48190;
var state_48202__$1 = (function (){var statearr_48213 = state_48202;
(statearr_48213[(8)] = inst_48179__$1);

(statearr_48213[(10)] = inst_48189);

return statearr_48213;
})();
var statearr_48214_48230 = state_48202__$1;
(statearr_48214_48230[(2)] = null);

(statearr_48214_48230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (9))){
var state_48202__$1 = state_48202;
var statearr_48215_48231 = state_48202__$1;
(statearr_48215_48231[(2)] = null);

(statearr_48215_48231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (5))){
var state_48202__$1 = state_48202;
var statearr_48216_48232 = state_48202__$1;
(statearr_48216_48232[(2)] = null);

(statearr_48216_48232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (10))){
var inst_48194 = (state_48202[(2)]);
var state_48202__$1 = state_48202;
var statearr_48217_48233 = state_48202__$1;
(statearr_48217_48233[(2)] = inst_48194);

(statearr_48217_48233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (8))){
var inst_48184 = (state_48202[(7)]);
var state_48202__$1 = state_48202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48202__$1,(11),out,inst_48184);
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
});})(c__46751__auto___48223,out))
;
return ((function (switch__46661__auto__,c__46751__auto___48223,out){
return (function() {
var cljs$core$async$state_machine__46662__auto__ = null;
var cljs$core$async$state_machine__46662__auto____0 = (function (){
var statearr_48218 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48218[(0)] = cljs$core$async$state_machine__46662__auto__);

(statearr_48218[(1)] = (1));

return statearr_48218;
});
var cljs$core$async$state_machine__46662__auto____1 = (function (state_48202){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_48202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e48219){if((e48219 instanceof Object)){
var ex__46665__auto__ = e48219;
var statearr_48220_48234 = state_48202;
(statearr_48220_48234[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48235 = state_48202;
state_48202 = G__48235;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$state_machine__46662__auto__ = function(state_48202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46662__auto____1.call(this,state_48202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46662__auto____0;
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46662__auto____1;
return cljs$core$async$state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___48223,out))
})();
var state__46753__auto__ = (function (){var statearr_48221 = f__46752__auto__.call(null);
(statearr_48221[(6)] = c__46751__auto___48223);

return statearr_48221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___48223,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48237 = (function (f,ch,meta48238){
this.f = f;
this.ch = ch;
this.meta48238 = meta48238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48239,meta48238__$1){
var self__ = this;
var _48239__$1 = this;
return (new cljs.core.async.t_cljs$core$async48237(self__.f,self__.ch,meta48238__$1));
});

cljs.core.async.t_cljs$core$async48237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48239){
var self__ = this;
var _48239__$1 = this;
return self__.meta48238;
});

cljs.core.async.t_cljs$core$async48237.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48237.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48237.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48240 = (function (f,ch,meta48238,_,fn1,meta48241){
this.f = f;
this.ch = ch;
this.meta48238 = meta48238;
this._ = _;
this.fn1 = fn1;
this.meta48241 = meta48241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48242,meta48241__$1){
var self__ = this;
var _48242__$1 = this;
return (new cljs.core.async.t_cljs$core$async48240(self__.f,self__.ch,self__.meta48238,self__._,self__.fn1,meta48241__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48242){
var self__ = this;
var _48242__$1 = this;
return self__.meta48241;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48236_SHARP_){
return f1.call(null,(((p1__48236_SHARP_ == null))?null:self__.f.call(null,p1__48236_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48240.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48238","meta48238",-328887019,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48237","cljs.core.async/t_cljs$core$async48237",1662638485,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48241","meta48241",-1606320756,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48240";

cljs.core.async.t_cljs$core$async48240.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31193__auto__,writer__31194__auto__,opt__31195__auto__){
return cljs.core._write.call(null,writer__31194__auto__,"cljs.core.async/t_cljs$core$async48240");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48240 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48240(f__$1,ch__$1,meta48238__$1,___$2,fn1__$1,meta48241){
return (new cljs.core.async.t_cljs$core$async48240(f__$1,ch__$1,meta48238__$1,___$2,fn1__$1,meta48241));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48240(self__.f,self__.ch,self__.meta48238,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async48237.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48238","meta48238",-328887019,null)], null);
});

cljs.core.async.t_cljs$core$async48237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48237";

cljs.core.async.t_cljs$core$async48237.cljs$lang$ctorPrWriter = (function (this__31193__auto__,writer__31194__auto__,opt__31195__auto__){
return cljs.core._write.call(null,writer__31194__auto__,"cljs.core.async/t_cljs$core$async48237");
});

cljs.core.async.__GT_t_cljs$core$async48237 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48237(f__$1,ch__$1,meta48238){
return (new cljs.core.async.t_cljs$core$async48237(f__$1,ch__$1,meta48238));
});

}

return (new cljs.core.async.t_cljs$core$async48237(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48243 = (function (f,ch,meta48244){
this.f = f;
this.ch = ch;
this.meta48244 = meta48244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48245,meta48244__$1){
var self__ = this;
var _48245__$1 = this;
return (new cljs.core.async.t_cljs$core$async48243(self__.f,self__.ch,meta48244__$1));
});

cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48245){
var self__ = this;
var _48245__$1 = this;
return self__.meta48244;
});

cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48243.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48244","meta48244",-1003157998,null)], null);
});

cljs.core.async.t_cljs$core$async48243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48243";

cljs.core.async.t_cljs$core$async48243.cljs$lang$ctorPrWriter = (function (this__31193__auto__,writer__31194__auto__,opt__31195__auto__){
return cljs.core._write.call(null,writer__31194__auto__,"cljs.core.async/t_cljs$core$async48243");
});

cljs.core.async.__GT_t_cljs$core$async48243 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48243(f__$1,ch__$1,meta48244){
return (new cljs.core.async.t_cljs$core$async48243(f__$1,ch__$1,meta48244));
});

}

return (new cljs.core.async.t_cljs$core$async48243(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async48246 = (function (p,ch,meta48247){
this.p = p;
this.ch = ch;
this.meta48247 = meta48247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48248,meta48247__$1){
var self__ = this;
var _48248__$1 = this;
return (new cljs.core.async.t_cljs$core$async48246(self__.p,self__.ch,meta48247__$1));
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

cljs.core.async.t_cljs$core$async48246.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
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
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48247","meta48247",1589602168,null)], null);
});

cljs.core.async.t_cljs$core$async48246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48246";

cljs.core.async.t_cljs$core$async48246.cljs$lang$ctorPrWriter = (function (this__31193__auto__,writer__31194__auto__,opt__31195__auto__){
return cljs.core._write.call(null,writer__31194__auto__,"cljs.core.async/t_cljs$core$async48246");
});

cljs.core.async.__GT_t_cljs$core$async48246 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48246(p__$1,ch__$1,meta48247){
return (new cljs.core.async.t_cljs$core$async48246(p__$1,ch__$1,meta48247));
});

}

return (new cljs.core.async.t_cljs$core$async48246(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48250 = arguments.length;
switch (G__48250) {
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
var c__46751__auto___48290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___48290,out){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___48290,out){
return (function (state_48271){
var state_val_48272 = (state_48271[(1)]);
if((state_val_48272 === (7))){
var inst_48267 = (state_48271[(2)]);
var state_48271__$1 = state_48271;
var statearr_48273_48291 = state_48271__$1;
(statearr_48273_48291[(2)] = inst_48267);

(statearr_48273_48291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48272 === (1))){
var state_48271__$1 = state_48271;
var statearr_48274_48292 = state_48271__$1;
(statearr_48274_48292[(2)] = null);

(statearr_48274_48292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48272 === (4))){
var inst_48253 = (state_48271[(7)]);
var inst_48253__$1 = (state_48271[(2)]);
var inst_48254 = (inst_48253__$1 == null);
var state_48271__$1 = (function (){var statearr_48275 = state_48271;
(statearr_48275[(7)] = inst_48253__$1);

return statearr_48275;
})();
if(cljs.core.truth_(inst_48254)){
var statearr_48276_48293 = state_48271__$1;
(statearr_48276_48293[(1)] = (5));

} else {
var statearr_48277_48294 = state_48271__$1;
(statearr_48277_48294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48272 === (6))){
var inst_48253 = (state_48271[(7)]);
var inst_48258 = p.call(null,inst_48253);
var state_48271__$1 = state_48271;
if(cljs.core.truth_(inst_48258)){
var statearr_48278_48295 = state_48271__$1;
(statearr_48278_48295[(1)] = (8));

} else {
var statearr_48279_48296 = state_48271__$1;
(statearr_48279_48296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48272 === (3))){
var inst_48269 = (state_48271[(2)]);
var state_48271__$1 = state_48271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48271__$1,inst_48269);
} else {
if((state_val_48272 === (2))){
var state_48271__$1 = state_48271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48271__$1,(4),ch);
} else {
if((state_val_48272 === (11))){
var inst_48261 = (state_48271[(2)]);
var state_48271__$1 = state_48271;
var statearr_48280_48297 = state_48271__$1;
(statearr_48280_48297[(2)] = inst_48261);

(statearr_48280_48297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48272 === (9))){
var state_48271__$1 = state_48271;
var statearr_48281_48298 = state_48271__$1;
(statearr_48281_48298[(2)] = null);

(statearr_48281_48298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48272 === (5))){
var inst_48256 = cljs.core.async.close_BANG_.call(null,out);
var state_48271__$1 = state_48271;
var statearr_48282_48299 = state_48271__$1;
(statearr_48282_48299[(2)] = inst_48256);

(statearr_48282_48299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48272 === (10))){
var inst_48264 = (state_48271[(2)]);
var state_48271__$1 = (function (){var statearr_48283 = state_48271;
(statearr_48283[(8)] = inst_48264);

return statearr_48283;
})();
var statearr_48284_48300 = state_48271__$1;
(statearr_48284_48300[(2)] = null);

(statearr_48284_48300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48272 === (8))){
var inst_48253 = (state_48271[(7)]);
var state_48271__$1 = state_48271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48271__$1,(11),out,inst_48253);
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
});})(c__46751__auto___48290,out))
;
return ((function (switch__46661__auto__,c__46751__auto___48290,out){
return (function() {
var cljs$core$async$state_machine__46662__auto__ = null;
var cljs$core$async$state_machine__46662__auto____0 = (function (){
var statearr_48285 = [null,null,null,null,null,null,null,null,null];
(statearr_48285[(0)] = cljs$core$async$state_machine__46662__auto__);

(statearr_48285[(1)] = (1));

return statearr_48285;
});
var cljs$core$async$state_machine__46662__auto____1 = (function (state_48271){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_48271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e48286){if((e48286 instanceof Object)){
var ex__46665__auto__ = e48286;
var statearr_48287_48301 = state_48271;
(statearr_48287_48301[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48302 = state_48271;
state_48271 = G__48302;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$state_machine__46662__auto__ = function(state_48271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46662__auto____1.call(this,state_48271);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46662__auto____0;
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46662__auto____1;
return cljs$core$async$state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___48290,out))
})();
var state__46753__auto__ = (function (){var statearr_48288 = f__46752__auto__.call(null);
(statearr_48288[(6)] = c__46751__auto___48290);

return statearr_48288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___48290,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48304 = arguments.length;
switch (G__48304) {
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
var c__46751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto__){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto__){
return (function (state_48367){
var state_val_48368 = (state_48367[(1)]);
if((state_val_48368 === (7))){
var inst_48363 = (state_48367[(2)]);
var state_48367__$1 = state_48367;
var statearr_48369_48407 = state_48367__$1;
(statearr_48369_48407[(2)] = inst_48363);

(statearr_48369_48407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (20))){
var inst_48333 = (state_48367[(7)]);
var inst_48344 = (state_48367[(2)]);
var inst_48345 = cljs.core.next.call(null,inst_48333);
var inst_48319 = inst_48345;
var inst_48320 = null;
var inst_48321 = (0);
var inst_48322 = (0);
var state_48367__$1 = (function (){var statearr_48370 = state_48367;
(statearr_48370[(8)] = inst_48344);

(statearr_48370[(9)] = inst_48321);

(statearr_48370[(10)] = inst_48322);

(statearr_48370[(11)] = inst_48320);

(statearr_48370[(12)] = inst_48319);

return statearr_48370;
})();
var statearr_48371_48408 = state_48367__$1;
(statearr_48371_48408[(2)] = null);

(statearr_48371_48408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (1))){
var state_48367__$1 = state_48367;
var statearr_48372_48409 = state_48367__$1;
(statearr_48372_48409[(2)] = null);

(statearr_48372_48409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (4))){
var inst_48308 = (state_48367[(13)]);
var inst_48308__$1 = (state_48367[(2)]);
var inst_48309 = (inst_48308__$1 == null);
var state_48367__$1 = (function (){var statearr_48373 = state_48367;
(statearr_48373[(13)] = inst_48308__$1);

return statearr_48373;
})();
if(cljs.core.truth_(inst_48309)){
var statearr_48374_48410 = state_48367__$1;
(statearr_48374_48410[(1)] = (5));

} else {
var statearr_48375_48411 = state_48367__$1;
(statearr_48375_48411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (15))){
var state_48367__$1 = state_48367;
var statearr_48379_48412 = state_48367__$1;
(statearr_48379_48412[(2)] = null);

(statearr_48379_48412[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (21))){
var state_48367__$1 = state_48367;
var statearr_48380_48413 = state_48367__$1;
(statearr_48380_48413[(2)] = null);

(statearr_48380_48413[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (13))){
var inst_48321 = (state_48367[(9)]);
var inst_48322 = (state_48367[(10)]);
var inst_48320 = (state_48367[(11)]);
var inst_48319 = (state_48367[(12)]);
var inst_48329 = (state_48367[(2)]);
var inst_48330 = (inst_48322 + (1));
var tmp48376 = inst_48321;
var tmp48377 = inst_48320;
var tmp48378 = inst_48319;
var inst_48319__$1 = tmp48378;
var inst_48320__$1 = tmp48377;
var inst_48321__$1 = tmp48376;
var inst_48322__$1 = inst_48330;
var state_48367__$1 = (function (){var statearr_48381 = state_48367;
(statearr_48381[(9)] = inst_48321__$1);

(statearr_48381[(10)] = inst_48322__$1);

(statearr_48381[(11)] = inst_48320__$1);

(statearr_48381[(12)] = inst_48319__$1);

(statearr_48381[(14)] = inst_48329);

return statearr_48381;
})();
var statearr_48382_48414 = state_48367__$1;
(statearr_48382_48414[(2)] = null);

(statearr_48382_48414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (22))){
var state_48367__$1 = state_48367;
var statearr_48383_48415 = state_48367__$1;
(statearr_48383_48415[(2)] = null);

(statearr_48383_48415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (6))){
var inst_48308 = (state_48367[(13)]);
var inst_48317 = f.call(null,inst_48308);
var inst_48318 = cljs.core.seq.call(null,inst_48317);
var inst_48319 = inst_48318;
var inst_48320 = null;
var inst_48321 = (0);
var inst_48322 = (0);
var state_48367__$1 = (function (){var statearr_48384 = state_48367;
(statearr_48384[(9)] = inst_48321);

(statearr_48384[(10)] = inst_48322);

(statearr_48384[(11)] = inst_48320);

(statearr_48384[(12)] = inst_48319);

return statearr_48384;
})();
var statearr_48385_48416 = state_48367__$1;
(statearr_48385_48416[(2)] = null);

(statearr_48385_48416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (17))){
var inst_48333 = (state_48367[(7)]);
var inst_48337 = cljs.core.chunk_first.call(null,inst_48333);
var inst_48338 = cljs.core.chunk_rest.call(null,inst_48333);
var inst_48339 = cljs.core.count.call(null,inst_48337);
var inst_48319 = inst_48338;
var inst_48320 = inst_48337;
var inst_48321 = inst_48339;
var inst_48322 = (0);
var state_48367__$1 = (function (){var statearr_48386 = state_48367;
(statearr_48386[(9)] = inst_48321);

(statearr_48386[(10)] = inst_48322);

(statearr_48386[(11)] = inst_48320);

(statearr_48386[(12)] = inst_48319);

return statearr_48386;
})();
var statearr_48387_48417 = state_48367__$1;
(statearr_48387_48417[(2)] = null);

(statearr_48387_48417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (3))){
var inst_48365 = (state_48367[(2)]);
var state_48367__$1 = state_48367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48367__$1,inst_48365);
} else {
if((state_val_48368 === (12))){
var inst_48353 = (state_48367[(2)]);
var state_48367__$1 = state_48367;
var statearr_48388_48418 = state_48367__$1;
(statearr_48388_48418[(2)] = inst_48353);

(statearr_48388_48418[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (2))){
var state_48367__$1 = state_48367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48367__$1,(4),in$);
} else {
if((state_val_48368 === (23))){
var inst_48361 = (state_48367[(2)]);
var state_48367__$1 = state_48367;
var statearr_48389_48419 = state_48367__$1;
(statearr_48389_48419[(2)] = inst_48361);

(statearr_48389_48419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (19))){
var inst_48348 = (state_48367[(2)]);
var state_48367__$1 = state_48367;
var statearr_48390_48420 = state_48367__$1;
(statearr_48390_48420[(2)] = inst_48348);

(statearr_48390_48420[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (11))){
var inst_48333 = (state_48367[(7)]);
var inst_48319 = (state_48367[(12)]);
var inst_48333__$1 = cljs.core.seq.call(null,inst_48319);
var state_48367__$1 = (function (){var statearr_48391 = state_48367;
(statearr_48391[(7)] = inst_48333__$1);

return statearr_48391;
})();
if(inst_48333__$1){
var statearr_48392_48421 = state_48367__$1;
(statearr_48392_48421[(1)] = (14));

} else {
var statearr_48393_48422 = state_48367__$1;
(statearr_48393_48422[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (9))){
var inst_48355 = (state_48367[(2)]);
var inst_48356 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48367__$1 = (function (){var statearr_48394 = state_48367;
(statearr_48394[(15)] = inst_48355);

return statearr_48394;
})();
if(cljs.core.truth_(inst_48356)){
var statearr_48395_48423 = state_48367__$1;
(statearr_48395_48423[(1)] = (21));

} else {
var statearr_48396_48424 = state_48367__$1;
(statearr_48396_48424[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (5))){
var inst_48311 = cljs.core.async.close_BANG_.call(null,out);
var state_48367__$1 = state_48367;
var statearr_48397_48425 = state_48367__$1;
(statearr_48397_48425[(2)] = inst_48311);

(statearr_48397_48425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (14))){
var inst_48333 = (state_48367[(7)]);
var inst_48335 = cljs.core.chunked_seq_QMARK_.call(null,inst_48333);
var state_48367__$1 = state_48367;
if(inst_48335){
var statearr_48398_48426 = state_48367__$1;
(statearr_48398_48426[(1)] = (17));

} else {
var statearr_48399_48427 = state_48367__$1;
(statearr_48399_48427[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (16))){
var inst_48351 = (state_48367[(2)]);
var state_48367__$1 = state_48367;
var statearr_48400_48428 = state_48367__$1;
(statearr_48400_48428[(2)] = inst_48351);

(statearr_48400_48428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (10))){
var inst_48322 = (state_48367[(10)]);
var inst_48320 = (state_48367[(11)]);
var inst_48327 = cljs.core._nth.call(null,inst_48320,inst_48322);
var state_48367__$1 = state_48367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48367__$1,(13),out,inst_48327);
} else {
if((state_val_48368 === (18))){
var inst_48333 = (state_48367[(7)]);
var inst_48342 = cljs.core.first.call(null,inst_48333);
var state_48367__$1 = state_48367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48367__$1,(20),out,inst_48342);
} else {
if((state_val_48368 === (8))){
var inst_48321 = (state_48367[(9)]);
var inst_48322 = (state_48367[(10)]);
var inst_48324 = (inst_48322 < inst_48321);
var inst_48325 = inst_48324;
var state_48367__$1 = state_48367;
if(cljs.core.truth_(inst_48325)){
var statearr_48401_48429 = state_48367__$1;
(statearr_48401_48429[(1)] = (10));

} else {
var statearr_48402_48430 = state_48367__$1;
(statearr_48402_48430[(1)] = (11));

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
});})(c__46751__auto__))
;
return ((function (switch__46661__auto__,c__46751__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46662__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46662__auto____0 = (function (){
var statearr_48403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48403[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46662__auto__);

(statearr_48403[(1)] = (1));

return statearr_48403;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46662__auto____1 = (function (state_48367){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_48367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e48404){if((e48404 instanceof Object)){
var ex__46665__auto__ = e48404;
var statearr_48405_48431 = state_48367;
(statearr_48405_48431[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48432 = state_48367;
state_48367 = G__48432;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46662__auto__ = function(state_48367){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46662__auto____1.call(this,state_48367);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46662__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46662__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto__))
})();
var state__46753__auto__ = (function (){var statearr_48406 = f__46752__auto__.call(null);
(statearr_48406[(6)] = c__46751__auto__);

return statearr_48406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto__))
);

return c__46751__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48434 = arguments.length;
switch (G__48434) {
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
var G__48437 = arguments.length;
switch (G__48437) {
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
var G__48440 = arguments.length;
switch (G__48440) {
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
var c__46751__auto___48487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___48487,out){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___48487,out){
return (function (state_48464){
var state_val_48465 = (state_48464[(1)]);
if((state_val_48465 === (7))){
var inst_48459 = (state_48464[(2)]);
var state_48464__$1 = state_48464;
var statearr_48466_48488 = state_48464__$1;
(statearr_48466_48488[(2)] = inst_48459);

(statearr_48466_48488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48465 === (1))){
var inst_48441 = null;
var state_48464__$1 = (function (){var statearr_48467 = state_48464;
(statearr_48467[(7)] = inst_48441);

return statearr_48467;
})();
var statearr_48468_48489 = state_48464__$1;
(statearr_48468_48489[(2)] = null);

(statearr_48468_48489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48465 === (4))){
var inst_48444 = (state_48464[(8)]);
var inst_48444__$1 = (state_48464[(2)]);
var inst_48445 = (inst_48444__$1 == null);
var inst_48446 = cljs.core.not.call(null,inst_48445);
var state_48464__$1 = (function (){var statearr_48469 = state_48464;
(statearr_48469[(8)] = inst_48444__$1);

return statearr_48469;
})();
if(inst_48446){
var statearr_48470_48490 = state_48464__$1;
(statearr_48470_48490[(1)] = (5));

} else {
var statearr_48471_48491 = state_48464__$1;
(statearr_48471_48491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48465 === (6))){
var state_48464__$1 = state_48464;
var statearr_48472_48492 = state_48464__$1;
(statearr_48472_48492[(2)] = null);

(statearr_48472_48492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48465 === (3))){
var inst_48461 = (state_48464[(2)]);
var inst_48462 = cljs.core.async.close_BANG_.call(null,out);
var state_48464__$1 = (function (){var statearr_48473 = state_48464;
(statearr_48473[(9)] = inst_48461);

return statearr_48473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48464__$1,inst_48462);
} else {
if((state_val_48465 === (2))){
var state_48464__$1 = state_48464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48464__$1,(4),ch);
} else {
if((state_val_48465 === (11))){
var inst_48444 = (state_48464[(8)]);
var inst_48453 = (state_48464[(2)]);
var inst_48441 = inst_48444;
var state_48464__$1 = (function (){var statearr_48474 = state_48464;
(statearr_48474[(10)] = inst_48453);

(statearr_48474[(7)] = inst_48441);

return statearr_48474;
})();
var statearr_48475_48493 = state_48464__$1;
(statearr_48475_48493[(2)] = null);

(statearr_48475_48493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48465 === (9))){
var inst_48444 = (state_48464[(8)]);
var state_48464__$1 = state_48464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48464__$1,(11),out,inst_48444);
} else {
if((state_val_48465 === (5))){
var inst_48444 = (state_48464[(8)]);
var inst_48441 = (state_48464[(7)]);
var inst_48448 = cljs.core._EQ_.call(null,inst_48444,inst_48441);
var state_48464__$1 = state_48464;
if(inst_48448){
var statearr_48477_48494 = state_48464__$1;
(statearr_48477_48494[(1)] = (8));

} else {
var statearr_48478_48495 = state_48464__$1;
(statearr_48478_48495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48465 === (10))){
var inst_48456 = (state_48464[(2)]);
var state_48464__$1 = state_48464;
var statearr_48479_48496 = state_48464__$1;
(statearr_48479_48496[(2)] = inst_48456);

(statearr_48479_48496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48465 === (8))){
var inst_48441 = (state_48464[(7)]);
var tmp48476 = inst_48441;
var inst_48441__$1 = tmp48476;
var state_48464__$1 = (function (){var statearr_48480 = state_48464;
(statearr_48480[(7)] = inst_48441__$1);

return statearr_48480;
})();
var statearr_48481_48497 = state_48464__$1;
(statearr_48481_48497[(2)] = null);

(statearr_48481_48497[(1)] = (2));


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
});})(c__46751__auto___48487,out))
;
return ((function (switch__46661__auto__,c__46751__auto___48487,out){
return (function() {
var cljs$core$async$state_machine__46662__auto__ = null;
var cljs$core$async$state_machine__46662__auto____0 = (function (){
var statearr_48482 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48482[(0)] = cljs$core$async$state_machine__46662__auto__);

(statearr_48482[(1)] = (1));

return statearr_48482;
});
var cljs$core$async$state_machine__46662__auto____1 = (function (state_48464){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_48464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e48483){if((e48483 instanceof Object)){
var ex__46665__auto__ = e48483;
var statearr_48484_48498 = state_48464;
(statearr_48484_48498[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48499 = state_48464;
state_48464 = G__48499;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$state_machine__46662__auto__ = function(state_48464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46662__auto____1.call(this,state_48464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46662__auto____0;
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46662__auto____1;
return cljs$core$async$state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___48487,out))
})();
var state__46753__auto__ = (function (){var statearr_48485 = f__46752__auto__.call(null);
(statearr_48485[(6)] = c__46751__auto___48487);

return statearr_48485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___48487,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48501 = arguments.length;
switch (G__48501) {
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
var c__46751__auto___48567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___48567,out){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___48567,out){
return (function (state_48539){
var state_val_48540 = (state_48539[(1)]);
if((state_val_48540 === (7))){
var inst_48535 = (state_48539[(2)]);
var state_48539__$1 = state_48539;
var statearr_48541_48568 = state_48539__$1;
(statearr_48541_48568[(2)] = inst_48535);

(statearr_48541_48568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48540 === (1))){
var inst_48502 = (new Array(n));
var inst_48503 = inst_48502;
var inst_48504 = (0);
var state_48539__$1 = (function (){var statearr_48542 = state_48539;
(statearr_48542[(7)] = inst_48504);

(statearr_48542[(8)] = inst_48503);

return statearr_48542;
})();
var statearr_48543_48569 = state_48539__$1;
(statearr_48543_48569[(2)] = null);

(statearr_48543_48569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48540 === (4))){
var inst_48507 = (state_48539[(9)]);
var inst_48507__$1 = (state_48539[(2)]);
var inst_48508 = (inst_48507__$1 == null);
var inst_48509 = cljs.core.not.call(null,inst_48508);
var state_48539__$1 = (function (){var statearr_48544 = state_48539;
(statearr_48544[(9)] = inst_48507__$1);

return statearr_48544;
})();
if(inst_48509){
var statearr_48545_48570 = state_48539__$1;
(statearr_48545_48570[(1)] = (5));

} else {
var statearr_48546_48571 = state_48539__$1;
(statearr_48546_48571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48540 === (15))){
var inst_48529 = (state_48539[(2)]);
var state_48539__$1 = state_48539;
var statearr_48547_48572 = state_48539__$1;
(statearr_48547_48572[(2)] = inst_48529);

(statearr_48547_48572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48540 === (13))){
var state_48539__$1 = state_48539;
var statearr_48548_48573 = state_48539__$1;
(statearr_48548_48573[(2)] = null);

(statearr_48548_48573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48540 === (6))){
var inst_48504 = (state_48539[(7)]);
var inst_48525 = (inst_48504 > (0));
var state_48539__$1 = state_48539;
if(cljs.core.truth_(inst_48525)){
var statearr_48549_48574 = state_48539__$1;
(statearr_48549_48574[(1)] = (12));

} else {
var statearr_48550_48575 = state_48539__$1;
(statearr_48550_48575[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48540 === (3))){
var inst_48537 = (state_48539[(2)]);
var state_48539__$1 = state_48539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48539__$1,inst_48537);
} else {
if((state_val_48540 === (12))){
var inst_48503 = (state_48539[(8)]);
var inst_48527 = cljs.core.vec.call(null,inst_48503);
var state_48539__$1 = state_48539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48539__$1,(15),out,inst_48527);
} else {
if((state_val_48540 === (2))){
var state_48539__$1 = state_48539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48539__$1,(4),ch);
} else {
if((state_val_48540 === (11))){
var inst_48519 = (state_48539[(2)]);
var inst_48520 = (new Array(n));
var inst_48503 = inst_48520;
var inst_48504 = (0);
var state_48539__$1 = (function (){var statearr_48551 = state_48539;
(statearr_48551[(10)] = inst_48519);

(statearr_48551[(7)] = inst_48504);

(statearr_48551[(8)] = inst_48503);

return statearr_48551;
})();
var statearr_48552_48576 = state_48539__$1;
(statearr_48552_48576[(2)] = null);

(statearr_48552_48576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48540 === (9))){
var inst_48503 = (state_48539[(8)]);
var inst_48517 = cljs.core.vec.call(null,inst_48503);
var state_48539__$1 = state_48539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48539__$1,(11),out,inst_48517);
} else {
if((state_val_48540 === (5))){
var inst_48507 = (state_48539[(9)]);
var inst_48512 = (state_48539[(11)]);
var inst_48504 = (state_48539[(7)]);
var inst_48503 = (state_48539[(8)]);
var inst_48511 = (inst_48503[inst_48504] = inst_48507);
var inst_48512__$1 = (inst_48504 + (1));
var inst_48513 = (inst_48512__$1 < n);
var state_48539__$1 = (function (){var statearr_48553 = state_48539;
(statearr_48553[(11)] = inst_48512__$1);

(statearr_48553[(12)] = inst_48511);

return statearr_48553;
})();
if(cljs.core.truth_(inst_48513)){
var statearr_48554_48577 = state_48539__$1;
(statearr_48554_48577[(1)] = (8));

} else {
var statearr_48555_48578 = state_48539__$1;
(statearr_48555_48578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48540 === (14))){
var inst_48532 = (state_48539[(2)]);
var inst_48533 = cljs.core.async.close_BANG_.call(null,out);
var state_48539__$1 = (function (){var statearr_48557 = state_48539;
(statearr_48557[(13)] = inst_48532);

return statearr_48557;
})();
var statearr_48558_48579 = state_48539__$1;
(statearr_48558_48579[(2)] = inst_48533);

(statearr_48558_48579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48540 === (10))){
var inst_48523 = (state_48539[(2)]);
var state_48539__$1 = state_48539;
var statearr_48559_48580 = state_48539__$1;
(statearr_48559_48580[(2)] = inst_48523);

(statearr_48559_48580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48540 === (8))){
var inst_48512 = (state_48539[(11)]);
var inst_48503 = (state_48539[(8)]);
var tmp48556 = inst_48503;
var inst_48503__$1 = tmp48556;
var inst_48504 = inst_48512;
var state_48539__$1 = (function (){var statearr_48560 = state_48539;
(statearr_48560[(7)] = inst_48504);

(statearr_48560[(8)] = inst_48503__$1);

return statearr_48560;
})();
var statearr_48561_48581 = state_48539__$1;
(statearr_48561_48581[(2)] = null);

(statearr_48561_48581[(1)] = (2));


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
});})(c__46751__auto___48567,out))
;
return ((function (switch__46661__auto__,c__46751__auto___48567,out){
return (function() {
var cljs$core$async$state_machine__46662__auto__ = null;
var cljs$core$async$state_machine__46662__auto____0 = (function (){
var statearr_48562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48562[(0)] = cljs$core$async$state_machine__46662__auto__);

(statearr_48562[(1)] = (1));

return statearr_48562;
});
var cljs$core$async$state_machine__46662__auto____1 = (function (state_48539){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_48539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e48563){if((e48563 instanceof Object)){
var ex__46665__auto__ = e48563;
var statearr_48564_48582 = state_48539;
(statearr_48564_48582[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48583 = state_48539;
state_48539 = G__48583;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$state_machine__46662__auto__ = function(state_48539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46662__auto____1.call(this,state_48539);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46662__auto____0;
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46662__auto____1;
return cljs$core$async$state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___48567,out))
})();
var state__46753__auto__ = (function (){var statearr_48565 = f__46752__auto__.call(null);
(statearr_48565[(6)] = c__46751__auto___48567);

return statearr_48565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___48567,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48585 = arguments.length;
switch (G__48585) {
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
var c__46751__auto___48655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___48655,out){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___48655,out){
return (function (state_48627){
var state_val_48628 = (state_48627[(1)]);
if((state_val_48628 === (7))){
var inst_48623 = (state_48627[(2)]);
var state_48627__$1 = state_48627;
var statearr_48629_48656 = state_48627__$1;
(statearr_48629_48656[(2)] = inst_48623);

(statearr_48629_48656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (1))){
var inst_48586 = [];
var inst_48587 = inst_48586;
var inst_48588 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48627__$1 = (function (){var statearr_48630 = state_48627;
(statearr_48630[(7)] = inst_48588);

(statearr_48630[(8)] = inst_48587);

return statearr_48630;
})();
var statearr_48631_48657 = state_48627__$1;
(statearr_48631_48657[(2)] = null);

(statearr_48631_48657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (4))){
var inst_48591 = (state_48627[(9)]);
var inst_48591__$1 = (state_48627[(2)]);
var inst_48592 = (inst_48591__$1 == null);
var inst_48593 = cljs.core.not.call(null,inst_48592);
var state_48627__$1 = (function (){var statearr_48632 = state_48627;
(statearr_48632[(9)] = inst_48591__$1);

return statearr_48632;
})();
if(inst_48593){
var statearr_48633_48658 = state_48627__$1;
(statearr_48633_48658[(1)] = (5));

} else {
var statearr_48634_48659 = state_48627__$1;
(statearr_48634_48659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (15))){
var inst_48617 = (state_48627[(2)]);
var state_48627__$1 = state_48627;
var statearr_48635_48660 = state_48627__$1;
(statearr_48635_48660[(2)] = inst_48617);

(statearr_48635_48660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (13))){
var state_48627__$1 = state_48627;
var statearr_48636_48661 = state_48627__$1;
(statearr_48636_48661[(2)] = null);

(statearr_48636_48661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (6))){
var inst_48587 = (state_48627[(8)]);
var inst_48612 = inst_48587.length;
var inst_48613 = (inst_48612 > (0));
var state_48627__$1 = state_48627;
if(cljs.core.truth_(inst_48613)){
var statearr_48637_48662 = state_48627__$1;
(statearr_48637_48662[(1)] = (12));

} else {
var statearr_48638_48663 = state_48627__$1;
(statearr_48638_48663[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (3))){
var inst_48625 = (state_48627[(2)]);
var state_48627__$1 = state_48627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48627__$1,inst_48625);
} else {
if((state_val_48628 === (12))){
var inst_48587 = (state_48627[(8)]);
var inst_48615 = cljs.core.vec.call(null,inst_48587);
var state_48627__$1 = state_48627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48627__$1,(15),out,inst_48615);
} else {
if((state_val_48628 === (2))){
var state_48627__$1 = state_48627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48627__$1,(4),ch);
} else {
if((state_val_48628 === (11))){
var inst_48591 = (state_48627[(9)]);
var inst_48595 = (state_48627[(10)]);
var inst_48605 = (state_48627[(2)]);
var inst_48606 = [];
var inst_48607 = inst_48606.push(inst_48591);
var inst_48587 = inst_48606;
var inst_48588 = inst_48595;
var state_48627__$1 = (function (){var statearr_48639 = state_48627;
(statearr_48639[(7)] = inst_48588);

(statearr_48639[(11)] = inst_48607);

(statearr_48639[(12)] = inst_48605);

(statearr_48639[(8)] = inst_48587);

return statearr_48639;
})();
var statearr_48640_48664 = state_48627__$1;
(statearr_48640_48664[(2)] = null);

(statearr_48640_48664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (9))){
var inst_48587 = (state_48627[(8)]);
var inst_48603 = cljs.core.vec.call(null,inst_48587);
var state_48627__$1 = state_48627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48627__$1,(11),out,inst_48603);
} else {
if((state_val_48628 === (5))){
var inst_48588 = (state_48627[(7)]);
var inst_48591 = (state_48627[(9)]);
var inst_48595 = (state_48627[(10)]);
var inst_48595__$1 = f.call(null,inst_48591);
var inst_48596 = cljs.core._EQ_.call(null,inst_48595__$1,inst_48588);
var inst_48597 = cljs.core.keyword_identical_QMARK_.call(null,inst_48588,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48598 = (inst_48596) || (inst_48597);
var state_48627__$1 = (function (){var statearr_48641 = state_48627;
(statearr_48641[(10)] = inst_48595__$1);

return statearr_48641;
})();
if(cljs.core.truth_(inst_48598)){
var statearr_48642_48665 = state_48627__$1;
(statearr_48642_48665[(1)] = (8));

} else {
var statearr_48643_48666 = state_48627__$1;
(statearr_48643_48666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (14))){
var inst_48620 = (state_48627[(2)]);
var inst_48621 = cljs.core.async.close_BANG_.call(null,out);
var state_48627__$1 = (function (){var statearr_48645 = state_48627;
(statearr_48645[(13)] = inst_48620);

return statearr_48645;
})();
var statearr_48646_48667 = state_48627__$1;
(statearr_48646_48667[(2)] = inst_48621);

(statearr_48646_48667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (10))){
var inst_48610 = (state_48627[(2)]);
var state_48627__$1 = state_48627;
var statearr_48647_48668 = state_48627__$1;
(statearr_48647_48668[(2)] = inst_48610);

(statearr_48647_48668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (8))){
var inst_48591 = (state_48627[(9)]);
var inst_48587 = (state_48627[(8)]);
var inst_48595 = (state_48627[(10)]);
var inst_48600 = inst_48587.push(inst_48591);
var tmp48644 = inst_48587;
var inst_48587__$1 = tmp48644;
var inst_48588 = inst_48595;
var state_48627__$1 = (function (){var statearr_48648 = state_48627;
(statearr_48648[(14)] = inst_48600);

(statearr_48648[(7)] = inst_48588);

(statearr_48648[(8)] = inst_48587__$1);

return statearr_48648;
})();
var statearr_48649_48669 = state_48627__$1;
(statearr_48649_48669[(2)] = null);

(statearr_48649_48669[(1)] = (2));


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
});})(c__46751__auto___48655,out))
;
return ((function (switch__46661__auto__,c__46751__auto___48655,out){
return (function() {
var cljs$core$async$state_machine__46662__auto__ = null;
var cljs$core$async$state_machine__46662__auto____0 = (function (){
var statearr_48650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48650[(0)] = cljs$core$async$state_machine__46662__auto__);

(statearr_48650[(1)] = (1));

return statearr_48650;
});
var cljs$core$async$state_machine__46662__auto____1 = (function (state_48627){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_48627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e48651){if((e48651 instanceof Object)){
var ex__46665__auto__ = e48651;
var statearr_48652_48670 = state_48627;
(statearr_48652_48670[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48671 = state_48627;
state_48627 = G__48671;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
cljs$core$async$state_machine__46662__auto__ = function(state_48627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46662__auto____1.call(this,state_48627);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46662__auto____0;
cljs$core$async$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46662__auto____1;
return cljs$core$async$state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___48655,out))
})();
var state__46753__auto__ = (function (){var statearr_48653 = f__46752__auto__.call(null);
(statearr_48653[(6)] = c__46751__auto___48655);

return statearr_48653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___48655,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510602155124
