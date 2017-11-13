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
var G__46812 = arguments.length;
switch (G__46812) {
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
if(typeof cljs.core.async.t_cljs$core$async46813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46813 = (function (f,blockable,meta46814){
this.f = f;
this.blockable = blockable;
this.meta46814 = meta46814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46815,meta46814__$1){
var self__ = this;
var _46815__$1 = this;
return (new cljs.core.async.t_cljs$core$async46813(self__.f,self__.blockable,meta46814__$1));
});

cljs.core.async.t_cljs$core$async46813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46815){
var self__ = this;
var _46815__$1 = this;
return self__.meta46814;
});

cljs.core.async.t_cljs$core$async46813.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46813.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46814","meta46814",1048589037,null)], null);
});

cljs.core.async.t_cljs$core$async46813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46813";

cljs.core.async.t_cljs$core$async46813.cljs$lang$ctorPrWriter = (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async46813");
});

cljs.core.async.__GT_t_cljs$core$async46813 = (function cljs$core$async$__GT_t_cljs$core$async46813(f__$1,blockable__$1,meta46814){
return (new cljs.core.async.t_cljs$core$async46813(f__$1,blockable__$1,meta46814));
});

}

return (new cljs.core.async.t_cljs$core$async46813(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46819 = arguments.length;
switch (G__46819) {
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
var G__46822 = arguments.length;
switch (G__46822) {
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
var G__46825 = arguments.length;
switch (G__46825) {
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
var val_46827 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46827);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46827,ret){
return (function (){
return fn1.call(null,val_46827);
});})(val_46827,ret))
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
var G__46829 = arguments.length;
switch (G__46829) {
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
var n__31568__auto___46831 = n;
var x_46832 = (0);
while(true){
if((x_46832 < n__31568__auto___46831)){
(a[x_46832] = (0));

var G__46833 = (x_46832 + (1));
x_46832 = G__46833;
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

var G__46834 = (i + (1));
i = G__46834;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46835 = (function (flag,meta46836){
this.flag = flag;
this.meta46836 = meta46836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46837,meta46836__$1){
var self__ = this;
var _46837__$1 = this;
return (new cljs.core.async.t_cljs$core$async46835(self__.flag,meta46836__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46835.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46837){
var self__ = this;
var _46837__$1 = this;
return self__.meta46836;
});})(flag))
;

cljs.core.async.t_cljs$core$async46835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46835.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46836","meta46836",-1927621105,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46835";

cljs.core.async.t_cljs$core$async46835.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async46835");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46835 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46835(flag__$1,meta46836){
return (new cljs.core.async.t_cljs$core$async46835(flag__$1,meta46836));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46835(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46838 = (function (flag,cb,meta46839){
this.flag = flag;
this.cb = cb;
this.meta46839 = meta46839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46840,meta46839__$1){
var self__ = this;
var _46840__$1 = this;
return (new cljs.core.async.t_cljs$core$async46838(self__.flag,self__.cb,meta46839__$1));
});

cljs.core.async.t_cljs$core$async46838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46840){
var self__ = this;
var _46840__$1 = this;
return self__.meta46839;
});

cljs.core.async.t_cljs$core$async46838.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46839","meta46839",-152950305,null)], null);
});

cljs.core.async.t_cljs$core$async46838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46838";

cljs.core.async.t_cljs$core$async46838.cljs$lang$ctorPrWriter = (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async46838");
});

cljs.core.async.__GT_t_cljs$core$async46838 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46838(flag__$1,cb__$1,meta46839){
return (new cljs.core.async.t_cljs$core$async46838(flag__$1,cb__$1,meta46839));
});

}

return (new cljs.core.async.t_cljs$core$async46838(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46841_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46841_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46842_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46842_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30523__auto__ = wport;
if(cljs.core.truth_(or__30523__auto__)){
return or__30523__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46843 = (i + (1));
i = G__46843;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30523__auto__ = ret;
if(cljs.core.truth_(or__30523__auto__)){
return or__30523__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30511__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30511__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30511__auto__;
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
var len__31802__auto___46849 = arguments.length;
var i__31803__auto___46850 = (0);
while(true){
if((i__31803__auto___46850 < len__31802__auto___46849)){
args__31809__auto__.push((arguments[i__31803__auto___46850]));

var G__46851 = (i__31803__auto___46850 + (1));
i__31803__auto___46850 = G__46851;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((1) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31810__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46846){
var map__46847 = p__46846;
var map__46847__$1 = ((((!((map__46847 == null)))?((((map__46847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46847):map__46847);
var opts = map__46847__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46844){
var G__46845 = cljs.core.first.call(null,seq46844);
var seq46844__$1 = cljs.core.next.call(null,seq46844);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46845,seq46844__$1);
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
var G__46853 = arguments.length;
switch (G__46853) {
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
var c__46752__auto___46899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___46899){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___46899){
return (function (state_46877){
var state_val_46878 = (state_46877[(1)]);
if((state_val_46878 === (7))){
var inst_46873 = (state_46877[(2)]);
var state_46877__$1 = state_46877;
var statearr_46879_46900 = state_46877__$1;
(statearr_46879_46900[(2)] = inst_46873);

(statearr_46879_46900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (1))){
var state_46877__$1 = state_46877;
var statearr_46880_46901 = state_46877__$1;
(statearr_46880_46901[(2)] = null);

(statearr_46880_46901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (4))){
var inst_46856 = (state_46877[(7)]);
var inst_46856__$1 = (state_46877[(2)]);
var inst_46857 = (inst_46856__$1 == null);
var state_46877__$1 = (function (){var statearr_46881 = state_46877;
(statearr_46881[(7)] = inst_46856__$1);

return statearr_46881;
})();
if(cljs.core.truth_(inst_46857)){
var statearr_46882_46902 = state_46877__$1;
(statearr_46882_46902[(1)] = (5));

} else {
var statearr_46883_46903 = state_46877__$1;
(statearr_46883_46903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (13))){
var state_46877__$1 = state_46877;
var statearr_46884_46904 = state_46877__$1;
(statearr_46884_46904[(2)] = null);

(statearr_46884_46904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (6))){
var inst_46856 = (state_46877[(7)]);
var state_46877__$1 = state_46877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46877__$1,(11),to,inst_46856);
} else {
if((state_val_46878 === (3))){
var inst_46875 = (state_46877[(2)]);
var state_46877__$1 = state_46877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46877__$1,inst_46875);
} else {
if((state_val_46878 === (12))){
var state_46877__$1 = state_46877;
var statearr_46885_46905 = state_46877__$1;
(statearr_46885_46905[(2)] = null);

(statearr_46885_46905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (2))){
var state_46877__$1 = state_46877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46877__$1,(4),from);
} else {
if((state_val_46878 === (11))){
var inst_46866 = (state_46877[(2)]);
var state_46877__$1 = state_46877;
if(cljs.core.truth_(inst_46866)){
var statearr_46886_46906 = state_46877__$1;
(statearr_46886_46906[(1)] = (12));

} else {
var statearr_46887_46907 = state_46877__$1;
(statearr_46887_46907[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (9))){
var state_46877__$1 = state_46877;
var statearr_46888_46908 = state_46877__$1;
(statearr_46888_46908[(2)] = null);

(statearr_46888_46908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (5))){
var state_46877__$1 = state_46877;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46889_46909 = state_46877__$1;
(statearr_46889_46909[(1)] = (8));

} else {
var statearr_46890_46910 = state_46877__$1;
(statearr_46890_46910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (14))){
var inst_46871 = (state_46877[(2)]);
var state_46877__$1 = state_46877;
var statearr_46891_46911 = state_46877__$1;
(statearr_46891_46911[(2)] = inst_46871);

(statearr_46891_46911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (10))){
var inst_46863 = (state_46877[(2)]);
var state_46877__$1 = state_46877;
var statearr_46892_46912 = state_46877__$1;
(statearr_46892_46912[(2)] = inst_46863);

(statearr_46892_46912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (8))){
var inst_46860 = cljs.core.async.close_BANG_.call(null,to);
var state_46877__$1 = state_46877;
var statearr_46893_46913 = state_46877__$1;
(statearr_46893_46913[(2)] = inst_46860);

(statearr_46893_46913[(1)] = (10));


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
});})(c__46752__auto___46899))
;
return ((function (switch__46662__auto__,c__46752__auto___46899){
return (function() {
var cljs$core$async$state_machine__46663__auto__ = null;
var cljs$core$async$state_machine__46663__auto____0 = (function (){
var statearr_46894 = [null,null,null,null,null,null,null,null];
(statearr_46894[(0)] = cljs$core$async$state_machine__46663__auto__);

(statearr_46894[(1)] = (1));

return statearr_46894;
});
var cljs$core$async$state_machine__46663__auto____1 = (function (state_46877){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_46877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e46895){if((e46895 instanceof Object)){
var ex__46666__auto__ = e46895;
var statearr_46896_46914 = state_46877;
(statearr_46896_46914[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46915 = state_46877;
state_46877 = G__46915;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$state_machine__46663__auto__ = function(state_46877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46663__auto____1.call(this,state_46877);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46663__auto____0;
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46663__auto____1;
return cljs$core$async$state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___46899))
})();
var state__46754__auto__ = (function (){var statearr_46897 = f__46753__auto__.call(null);
(statearr_46897[(6)] = c__46752__auto___46899);

return statearr_46897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___46899))
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
return (function (p__46916){
var vec__46917 = p__46916;
var v = cljs.core.nth.call(null,vec__46917,(0),null);
var p = cljs.core.nth.call(null,vec__46917,(1),null);
var job = vec__46917;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__46752__auto___47088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___47088,res,vec__46917,v,p,job,jobs,results){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___47088,res,vec__46917,v,p,job,jobs,results){
return (function (state_46924){
var state_val_46925 = (state_46924[(1)]);
if((state_val_46925 === (1))){
var state_46924__$1 = state_46924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46924__$1,(2),res,v);
} else {
if((state_val_46925 === (2))){
var inst_46921 = (state_46924[(2)]);
var inst_46922 = cljs.core.async.close_BANG_.call(null,res);
var state_46924__$1 = (function (){var statearr_46926 = state_46924;
(statearr_46926[(7)] = inst_46921);

return statearr_46926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46924__$1,inst_46922);
} else {
return null;
}
}
});})(c__46752__auto___47088,res,vec__46917,v,p,job,jobs,results))
;
return ((function (switch__46662__auto__,c__46752__auto___47088,res,vec__46917,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0 = (function (){
var statearr_46927 = [null,null,null,null,null,null,null,null];
(statearr_46927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__);

(statearr_46927[(1)] = (1));

return statearr_46927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1 = (function (state_46924){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_46924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e46928){if((e46928 instanceof Object)){
var ex__46666__auto__ = e46928;
var statearr_46929_47089 = state_46924;
(statearr_46929_47089[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47090 = state_46924;
state_46924 = G__47090;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__ = function(state_46924){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1.call(this,state_46924);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___47088,res,vec__46917,v,p,job,jobs,results))
})();
var state__46754__auto__ = (function (){var statearr_46930 = f__46753__auto__.call(null);
(statearr_46930[(6)] = c__46752__auto___47088);

return statearr_46930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___47088,res,vec__46917,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46931){
var vec__46932 = p__46931;
var v = cljs.core.nth.call(null,vec__46932,(0),null);
var p = cljs.core.nth.call(null,vec__46932,(1),null);
var job = vec__46932;
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
var n__31568__auto___47091 = n;
var __47092 = (0);
while(true){
if((__47092 < n__31568__auto___47091)){
var G__46935_47093 = type;
var G__46935_47094__$1 = (((G__46935_47093 instanceof cljs.core.Keyword))?G__46935_47093.fqn:null);
switch (G__46935_47094__$1) {
case "compute":
var c__46752__auto___47096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47092,c__46752__auto___47096,G__46935_47093,G__46935_47094__$1,n__31568__auto___47091,jobs,results,process,async){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (__47092,c__46752__auto___47096,G__46935_47093,G__46935_47094__$1,n__31568__auto___47091,jobs,results,process,async){
return (function (state_46948){
var state_val_46949 = (state_46948[(1)]);
if((state_val_46949 === (1))){
var state_46948__$1 = state_46948;
var statearr_46950_47097 = state_46948__$1;
(statearr_46950_47097[(2)] = null);

(statearr_46950_47097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46949 === (2))){
var state_46948__$1 = state_46948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46948__$1,(4),jobs);
} else {
if((state_val_46949 === (3))){
var inst_46946 = (state_46948[(2)]);
var state_46948__$1 = state_46948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46948__$1,inst_46946);
} else {
if((state_val_46949 === (4))){
var inst_46938 = (state_46948[(2)]);
var inst_46939 = process.call(null,inst_46938);
var state_46948__$1 = state_46948;
if(cljs.core.truth_(inst_46939)){
var statearr_46951_47098 = state_46948__$1;
(statearr_46951_47098[(1)] = (5));

} else {
var statearr_46952_47099 = state_46948__$1;
(statearr_46952_47099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46949 === (5))){
var state_46948__$1 = state_46948;
var statearr_46953_47100 = state_46948__$1;
(statearr_46953_47100[(2)] = null);

(statearr_46953_47100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46949 === (6))){
var state_46948__$1 = state_46948;
var statearr_46954_47101 = state_46948__$1;
(statearr_46954_47101[(2)] = null);

(statearr_46954_47101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46949 === (7))){
var inst_46944 = (state_46948[(2)]);
var state_46948__$1 = state_46948;
var statearr_46955_47102 = state_46948__$1;
(statearr_46955_47102[(2)] = inst_46944);

(statearr_46955_47102[(1)] = (3));


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
});})(__47092,c__46752__auto___47096,G__46935_47093,G__46935_47094__$1,n__31568__auto___47091,jobs,results,process,async))
;
return ((function (__47092,switch__46662__auto__,c__46752__auto___47096,G__46935_47093,G__46935_47094__$1,n__31568__auto___47091,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0 = (function (){
var statearr_46956 = [null,null,null,null,null,null,null];
(statearr_46956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__);

(statearr_46956[(1)] = (1));

return statearr_46956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1 = (function (state_46948){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_46948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e46957){if((e46957 instanceof Object)){
var ex__46666__auto__ = e46957;
var statearr_46958_47103 = state_46948;
(statearr_46958_47103[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47104 = state_46948;
state_46948 = G__47104;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__ = function(state_46948){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1.call(this,state_46948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__;
})()
;})(__47092,switch__46662__auto__,c__46752__auto___47096,G__46935_47093,G__46935_47094__$1,n__31568__auto___47091,jobs,results,process,async))
})();
var state__46754__auto__ = (function (){var statearr_46959 = f__46753__auto__.call(null);
(statearr_46959[(6)] = c__46752__auto___47096);

return statearr_46959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(__47092,c__46752__auto___47096,G__46935_47093,G__46935_47094__$1,n__31568__auto___47091,jobs,results,process,async))
);


break;
case "async":
var c__46752__auto___47105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47092,c__46752__auto___47105,G__46935_47093,G__46935_47094__$1,n__31568__auto___47091,jobs,results,process,async){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (__47092,c__46752__auto___47105,G__46935_47093,G__46935_47094__$1,n__31568__auto___47091,jobs,results,process,async){
return (function (state_46972){
var state_val_46973 = (state_46972[(1)]);
if((state_val_46973 === (1))){
var state_46972__$1 = state_46972;
var statearr_46974_47106 = state_46972__$1;
(statearr_46974_47106[(2)] = null);

(statearr_46974_47106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46973 === (2))){
var state_46972__$1 = state_46972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46972__$1,(4),jobs);
} else {
if((state_val_46973 === (3))){
var inst_46970 = (state_46972[(2)]);
var state_46972__$1 = state_46972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46972__$1,inst_46970);
} else {
if((state_val_46973 === (4))){
var inst_46962 = (state_46972[(2)]);
var inst_46963 = async.call(null,inst_46962);
var state_46972__$1 = state_46972;
if(cljs.core.truth_(inst_46963)){
var statearr_46975_47107 = state_46972__$1;
(statearr_46975_47107[(1)] = (5));

} else {
var statearr_46976_47108 = state_46972__$1;
(statearr_46976_47108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46973 === (5))){
var state_46972__$1 = state_46972;
var statearr_46977_47109 = state_46972__$1;
(statearr_46977_47109[(2)] = null);

(statearr_46977_47109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46973 === (6))){
var state_46972__$1 = state_46972;
var statearr_46978_47110 = state_46972__$1;
(statearr_46978_47110[(2)] = null);

(statearr_46978_47110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46973 === (7))){
var inst_46968 = (state_46972[(2)]);
var state_46972__$1 = state_46972;
var statearr_46979_47111 = state_46972__$1;
(statearr_46979_47111[(2)] = inst_46968);

(statearr_46979_47111[(1)] = (3));


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
});})(__47092,c__46752__auto___47105,G__46935_47093,G__46935_47094__$1,n__31568__auto___47091,jobs,results,process,async))
;
return ((function (__47092,switch__46662__auto__,c__46752__auto___47105,G__46935_47093,G__46935_47094__$1,n__31568__auto___47091,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0 = (function (){
var statearr_46980 = [null,null,null,null,null,null,null];
(statearr_46980[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__);

(statearr_46980[(1)] = (1));

return statearr_46980;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1 = (function (state_46972){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_46972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e46981){if((e46981 instanceof Object)){
var ex__46666__auto__ = e46981;
var statearr_46982_47112 = state_46972;
(statearr_46982_47112[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47113 = state_46972;
state_46972 = G__47113;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__ = function(state_46972){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1.call(this,state_46972);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__;
})()
;})(__47092,switch__46662__auto__,c__46752__auto___47105,G__46935_47093,G__46935_47094__$1,n__31568__auto___47091,jobs,results,process,async))
})();
var state__46754__auto__ = (function (){var statearr_46983 = f__46753__auto__.call(null);
(statearr_46983[(6)] = c__46752__auto___47105);

return statearr_46983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(__47092,c__46752__auto___47105,G__46935_47093,G__46935_47094__$1,n__31568__auto___47091,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46935_47094__$1)].join('')));

}

var G__47114 = (__47092 + (1));
__47092 = G__47114;
continue;
} else {
}
break;
}

var c__46752__auto___47115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___47115,jobs,results,process,async){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___47115,jobs,results,process,async){
return (function (state_47005){
var state_val_47006 = (state_47005[(1)]);
if((state_val_47006 === (1))){
var state_47005__$1 = state_47005;
var statearr_47007_47116 = state_47005__$1;
(statearr_47007_47116[(2)] = null);

(statearr_47007_47116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (2))){
var state_47005__$1 = state_47005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47005__$1,(4),from);
} else {
if((state_val_47006 === (3))){
var inst_47003 = (state_47005[(2)]);
var state_47005__$1 = state_47005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47005__$1,inst_47003);
} else {
if((state_val_47006 === (4))){
var inst_46986 = (state_47005[(7)]);
var inst_46986__$1 = (state_47005[(2)]);
var inst_46987 = (inst_46986__$1 == null);
var state_47005__$1 = (function (){var statearr_47008 = state_47005;
(statearr_47008[(7)] = inst_46986__$1);

return statearr_47008;
})();
if(cljs.core.truth_(inst_46987)){
var statearr_47009_47117 = state_47005__$1;
(statearr_47009_47117[(1)] = (5));

} else {
var statearr_47010_47118 = state_47005__$1;
(statearr_47010_47118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (5))){
var inst_46989 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47005__$1 = state_47005;
var statearr_47011_47119 = state_47005__$1;
(statearr_47011_47119[(2)] = inst_46989);

(statearr_47011_47119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (6))){
var inst_46991 = (state_47005[(8)]);
var inst_46986 = (state_47005[(7)]);
var inst_46991__$1 = cljs.core.async.chan.call(null,(1));
var inst_46992 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46993 = [inst_46986,inst_46991__$1];
var inst_46994 = (new cljs.core.PersistentVector(null,2,(5),inst_46992,inst_46993,null));
var state_47005__$1 = (function (){var statearr_47012 = state_47005;
(statearr_47012[(8)] = inst_46991__$1);

return statearr_47012;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47005__$1,(8),jobs,inst_46994);
} else {
if((state_val_47006 === (7))){
var inst_47001 = (state_47005[(2)]);
var state_47005__$1 = state_47005;
var statearr_47013_47120 = state_47005__$1;
(statearr_47013_47120[(2)] = inst_47001);

(statearr_47013_47120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (8))){
var inst_46991 = (state_47005[(8)]);
var inst_46996 = (state_47005[(2)]);
var state_47005__$1 = (function (){var statearr_47014 = state_47005;
(statearr_47014[(9)] = inst_46996);

return statearr_47014;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47005__$1,(9),results,inst_46991);
} else {
if((state_val_47006 === (9))){
var inst_46998 = (state_47005[(2)]);
var state_47005__$1 = (function (){var statearr_47015 = state_47005;
(statearr_47015[(10)] = inst_46998);

return statearr_47015;
})();
var statearr_47016_47121 = state_47005__$1;
(statearr_47016_47121[(2)] = null);

(statearr_47016_47121[(1)] = (2));


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
});})(c__46752__auto___47115,jobs,results,process,async))
;
return ((function (switch__46662__auto__,c__46752__auto___47115,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0 = (function (){
var statearr_47017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__);

(statearr_47017[(1)] = (1));

return statearr_47017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1 = (function (state_47005){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_47005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e47018){if((e47018 instanceof Object)){
var ex__46666__auto__ = e47018;
var statearr_47019_47122 = state_47005;
(statearr_47019_47122[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47123 = state_47005;
state_47005 = G__47123;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__ = function(state_47005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1.call(this,state_47005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___47115,jobs,results,process,async))
})();
var state__46754__auto__ = (function (){var statearr_47020 = f__46753__auto__.call(null);
(statearr_47020[(6)] = c__46752__auto___47115);

return statearr_47020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___47115,jobs,results,process,async))
);


var c__46752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto__,jobs,results,process,async){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto__,jobs,results,process,async){
return (function (state_47058){
var state_val_47059 = (state_47058[(1)]);
if((state_val_47059 === (7))){
var inst_47054 = (state_47058[(2)]);
var state_47058__$1 = state_47058;
var statearr_47060_47124 = state_47058__$1;
(statearr_47060_47124[(2)] = inst_47054);

(statearr_47060_47124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (20))){
var state_47058__$1 = state_47058;
var statearr_47061_47125 = state_47058__$1;
(statearr_47061_47125[(2)] = null);

(statearr_47061_47125[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (1))){
var state_47058__$1 = state_47058;
var statearr_47062_47126 = state_47058__$1;
(statearr_47062_47126[(2)] = null);

(statearr_47062_47126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (4))){
var inst_47023 = (state_47058[(7)]);
var inst_47023__$1 = (state_47058[(2)]);
var inst_47024 = (inst_47023__$1 == null);
var state_47058__$1 = (function (){var statearr_47063 = state_47058;
(statearr_47063[(7)] = inst_47023__$1);

return statearr_47063;
})();
if(cljs.core.truth_(inst_47024)){
var statearr_47064_47127 = state_47058__$1;
(statearr_47064_47127[(1)] = (5));

} else {
var statearr_47065_47128 = state_47058__$1;
(statearr_47065_47128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (15))){
var inst_47036 = (state_47058[(8)]);
var state_47058__$1 = state_47058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47058__$1,(18),to,inst_47036);
} else {
if((state_val_47059 === (21))){
var inst_47049 = (state_47058[(2)]);
var state_47058__$1 = state_47058;
var statearr_47066_47129 = state_47058__$1;
(statearr_47066_47129[(2)] = inst_47049);

(statearr_47066_47129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (13))){
var inst_47051 = (state_47058[(2)]);
var state_47058__$1 = (function (){var statearr_47067 = state_47058;
(statearr_47067[(9)] = inst_47051);

return statearr_47067;
})();
var statearr_47068_47130 = state_47058__$1;
(statearr_47068_47130[(2)] = null);

(statearr_47068_47130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (6))){
var inst_47023 = (state_47058[(7)]);
var state_47058__$1 = state_47058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47058__$1,(11),inst_47023);
} else {
if((state_val_47059 === (17))){
var inst_47044 = (state_47058[(2)]);
var state_47058__$1 = state_47058;
if(cljs.core.truth_(inst_47044)){
var statearr_47069_47131 = state_47058__$1;
(statearr_47069_47131[(1)] = (19));

} else {
var statearr_47070_47132 = state_47058__$1;
(statearr_47070_47132[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (3))){
var inst_47056 = (state_47058[(2)]);
var state_47058__$1 = state_47058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47058__$1,inst_47056);
} else {
if((state_val_47059 === (12))){
var inst_47033 = (state_47058[(10)]);
var state_47058__$1 = state_47058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47058__$1,(14),inst_47033);
} else {
if((state_val_47059 === (2))){
var state_47058__$1 = state_47058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47058__$1,(4),results);
} else {
if((state_val_47059 === (19))){
var state_47058__$1 = state_47058;
var statearr_47071_47133 = state_47058__$1;
(statearr_47071_47133[(2)] = null);

(statearr_47071_47133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (11))){
var inst_47033 = (state_47058[(2)]);
var state_47058__$1 = (function (){var statearr_47072 = state_47058;
(statearr_47072[(10)] = inst_47033);

return statearr_47072;
})();
var statearr_47073_47134 = state_47058__$1;
(statearr_47073_47134[(2)] = null);

(statearr_47073_47134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (9))){
var state_47058__$1 = state_47058;
var statearr_47074_47135 = state_47058__$1;
(statearr_47074_47135[(2)] = null);

(statearr_47074_47135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (5))){
var state_47058__$1 = state_47058;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47075_47136 = state_47058__$1;
(statearr_47075_47136[(1)] = (8));

} else {
var statearr_47076_47137 = state_47058__$1;
(statearr_47076_47137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (14))){
var inst_47038 = (state_47058[(11)]);
var inst_47036 = (state_47058[(8)]);
var inst_47036__$1 = (state_47058[(2)]);
var inst_47037 = (inst_47036__$1 == null);
var inst_47038__$1 = cljs.core.not.call(null,inst_47037);
var state_47058__$1 = (function (){var statearr_47077 = state_47058;
(statearr_47077[(11)] = inst_47038__$1);

(statearr_47077[(8)] = inst_47036__$1);

return statearr_47077;
})();
if(inst_47038__$1){
var statearr_47078_47138 = state_47058__$1;
(statearr_47078_47138[(1)] = (15));

} else {
var statearr_47079_47139 = state_47058__$1;
(statearr_47079_47139[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (16))){
var inst_47038 = (state_47058[(11)]);
var state_47058__$1 = state_47058;
var statearr_47080_47140 = state_47058__$1;
(statearr_47080_47140[(2)] = inst_47038);

(statearr_47080_47140[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (10))){
var inst_47030 = (state_47058[(2)]);
var state_47058__$1 = state_47058;
var statearr_47081_47141 = state_47058__$1;
(statearr_47081_47141[(2)] = inst_47030);

(statearr_47081_47141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (18))){
var inst_47041 = (state_47058[(2)]);
var state_47058__$1 = state_47058;
var statearr_47082_47142 = state_47058__$1;
(statearr_47082_47142[(2)] = inst_47041);

(statearr_47082_47142[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (8))){
var inst_47027 = cljs.core.async.close_BANG_.call(null,to);
var state_47058__$1 = state_47058;
var statearr_47083_47143 = state_47058__$1;
(statearr_47083_47143[(2)] = inst_47027);

(statearr_47083_47143[(1)] = (10));


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
});})(c__46752__auto__,jobs,results,process,async))
;
return ((function (switch__46662__auto__,c__46752__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0 = (function (){
var statearr_47084 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__);

(statearr_47084[(1)] = (1));

return statearr_47084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1 = (function (state_47058){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_47058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e47085){if((e47085 instanceof Object)){
var ex__46666__auto__ = e47085;
var statearr_47086_47144 = state_47058;
(statearr_47086_47144[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47145 = state_47058;
state_47058 = G__47145;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__ = function(state_47058){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1.call(this,state_47058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto__,jobs,results,process,async))
})();
var state__46754__auto__ = (function (){var statearr_47087 = f__46753__auto__.call(null);
(statearr_47087[(6)] = c__46752__auto__);

return statearr_47087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto__,jobs,results,process,async))
);

return c__46752__auto__;
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
var G__47147 = arguments.length;
switch (G__47147) {
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
var G__47150 = arguments.length;
switch (G__47150) {
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
var G__47153 = arguments.length;
switch (G__47153) {
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
var c__46752__auto___47202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___47202,tc,fc){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___47202,tc,fc){
return (function (state_47179){
var state_val_47180 = (state_47179[(1)]);
if((state_val_47180 === (7))){
var inst_47175 = (state_47179[(2)]);
var state_47179__$1 = state_47179;
var statearr_47181_47203 = state_47179__$1;
(statearr_47181_47203[(2)] = inst_47175);

(statearr_47181_47203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47180 === (1))){
var state_47179__$1 = state_47179;
var statearr_47182_47204 = state_47179__$1;
(statearr_47182_47204[(2)] = null);

(statearr_47182_47204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47180 === (4))){
var inst_47156 = (state_47179[(7)]);
var inst_47156__$1 = (state_47179[(2)]);
var inst_47157 = (inst_47156__$1 == null);
var state_47179__$1 = (function (){var statearr_47183 = state_47179;
(statearr_47183[(7)] = inst_47156__$1);

return statearr_47183;
})();
if(cljs.core.truth_(inst_47157)){
var statearr_47184_47205 = state_47179__$1;
(statearr_47184_47205[(1)] = (5));

} else {
var statearr_47185_47206 = state_47179__$1;
(statearr_47185_47206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47180 === (13))){
var state_47179__$1 = state_47179;
var statearr_47186_47207 = state_47179__$1;
(statearr_47186_47207[(2)] = null);

(statearr_47186_47207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47180 === (6))){
var inst_47156 = (state_47179[(7)]);
var inst_47162 = p.call(null,inst_47156);
var state_47179__$1 = state_47179;
if(cljs.core.truth_(inst_47162)){
var statearr_47187_47208 = state_47179__$1;
(statearr_47187_47208[(1)] = (9));

} else {
var statearr_47188_47209 = state_47179__$1;
(statearr_47188_47209[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47180 === (3))){
var inst_47177 = (state_47179[(2)]);
var state_47179__$1 = state_47179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47179__$1,inst_47177);
} else {
if((state_val_47180 === (12))){
var state_47179__$1 = state_47179;
var statearr_47189_47210 = state_47179__$1;
(statearr_47189_47210[(2)] = null);

(statearr_47189_47210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47180 === (2))){
var state_47179__$1 = state_47179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47179__$1,(4),ch);
} else {
if((state_val_47180 === (11))){
var inst_47156 = (state_47179[(7)]);
var inst_47166 = (state_47179[(2)]);
var state_47179__$1 = state_47179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47179__$1,(8),inst_47166,inst_47156);
} else {
if((state_val_47180 === (9))){
var state_47179__$1 = state_47179;
var statearr_47190_47211 = state_47179__$1;
(statearr_47190_47211[(2)] = tc);

(statearr_47190_47211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47180 === (5))){
var inst_47159 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47160 = cljs.core.async.close_BANG_.call(null,fc);
var state_47179__$1 = (function (){var statearr_47191 = state_47179;
(statearr_47191[(8)] = inst_47159);

return statearr_47191;
})();
var statearr_47192_47212 = state_47179__$1;
(statearr_47192_47212[(2)] = inst_47160);

(statearr_47192_47212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47180 === (14))){
var inst_47173 = (state_47179[(2)]);
var state_47179__$1 = state_47179;
var statearr_47193_47213 = state_47179__$1;
(statearr_47193_47213[(2)] = inst_47173);

(statearr_47193_47213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47180 === (10))){
var state_47179__$1 = state_47179;
var statearr_47194_47214 = state_47179__$1;
(statearr_47194_47214[(2)] = fc);

(statearr_47194_47214[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47180 === (8))){
var inst_47168 = (state_47179[(2)]);
var state_47179__$1 = state_47179;
if(cljs.core.truth_(inst_47168)){
var statearr_47195_47215 = state_47179__$1;
(statearr_47195_47215[(1)] = (12));

} else {
var statearr_47196_47216 = state_47179__$1;
(statearr_47196_47216[(1)] = (13));

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
});})(c__46752__auto___47202,tc,fc))
;
return ((function (switch__46662__auto__,c__46752__auto___47202,tc,fc){
return (function() {
var cljs$core$async$state_machine__46663__auto__ = null;
var cljs$core$async$state_machine__46663__auto____0 = (function (){
var statearr_47197 = [null,null,null,null,null,null,null,null,null];
(statearr_47197[(0)] = cljs$core$async$state_machine__46663__auto__);

(statearr_47197[(1)] = (1));

return statearr_47197;
});
var cljs$core$async$state_machine__46663__auto____1 = (function (state_47179){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_47179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e47198){if((e47198 instanceof Object)){
var ex__46666__auto__ = e47198;
var statearr_47199_47217 = state_47179;
(statearr_47199_47217[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47218 = state_47179;
state_47179 = G__47218;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$state_machine__46663__auto__ = function(state_47179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46663__auto____1.call(this,state_47179);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46663__auto____0;
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46663__auto____1;
return cljs$core$async$state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___47202,tc,fc))
})();
var state__46754__auto__ = (function (){var statearr_47200 = f__46753__auto__.call(null);
(statearr_47200[(6)] = c__46752__auto___47202);

return statearr_47200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___47202,tc,fc))
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
var c__46752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto__){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto__){
return (function (state_47239){
var state_val_47240 = (state_47239[(1)]);
if((state_val_47240 === (7))){
var inst_47235 = (state_47239[(2)]);
var state_47239__$1 = state_47239;
var statearr_47241_47259 = state_47239__$1;
(statearr_47241_47259[(2)] = inst_47235);

(statearr_47241_47259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47240 === (1))){
var inst_47219 = init;
var state_47239__$1 = (function (){var statearr_47242 = state_47239;
(statearr_47242[(7)] = inst_47219);

return statearr_47242;
})();
var statearr_47243_47260 = state_47239__$1;
(statearr_47243_47260[(2)] = null);

(statearr_47243_47260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47240 === (4))){
var inst_47222 = (state_47239[(8)]);
var inst_47222__$1 = (state_47239[(2)]);
var inst_47223 = (inst_47222__$1 == null);
var state_47239__$1 = (function (){var statearr_47244 = state_47239;
(statearr_47244[(8)] = inst_47222__$1);

return statearr_47244;
})();
if(cljs.core.truth_(inst_47223)){
var statearr_47245_47261 = state_47239__$1;
(statearr_47245_47261[(1)] = (5));

} else {
var statearr_47246_47262 = state_47239__$1;
(statearr_47246_47262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47240 === (6))){
var inst_47226 = (state_47239[(9)]);
var inst_47222 = (state_47239[(8)]);
var inst_47219 = (state_47239[(7)]);
var inst_47226__$1 = f.call(null,inst_47219,inst_47222);
var inst_47227 = cljs.core.reduced_QMARK_.call(null,inst_47226__$1);
var state_47239__$1 = (function (){var statearr_47247 = state_47239;
(statearr_47247[(9)] = inst_47226__$1);

return statearr_47247;
})();
if(inst_47227){
var statearr_47248_47263 = state_47239__$1;
(statearr_47248_47263[(1)] = (8));

} else {
var statearr_47249_47264 = state_47239__$1;
(statearr_47249_47264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47240 === (3))){
var inst_47237 = (state_47239[(2)]);
var state_47239__$1 = state_47239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47239__$1,inst_47237);
} else {
if((state_val_47240 === (2))){
var state_47239__$1 = state_47239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47239__$1,(4),ch);
} else {
if((state_val_47240 === (9))){
var inst_47226 = (state_47239[(9)]);
var inst_47219 = inst_47226;
var state_47239__$1 = (function (){var statearr_47250 = state_47239;
(statearr_47250[(7)] = inst_47219);

return statearr_47250;
})();
var statearr_47251_47265 = state_47239__$1;
(statearr_47251_47265[(2)] = null);

(statearr_47251_47265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47240 === (5))){
var inst_47219 = (state_47239[(7)]);
var state_47239__$1 = state_47239;
var statearr_47252_47266 = state_47239__$1;
(statearr_47252_47266[(2)] = inst_47219);

(statearr_47252_47266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47240 === (10))){
var inst_47233 = (state_47239[(2)]);
var state_47239__$1 = state_47239;
var statearr_47253_47267 = state_47239__$1;
(statearr_47253_47267[(2)] = inst_47233);

(statearr_47253_47267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47240 === (8))){
var inst_47226 = (state_47239[(9)]);
var inst_47229 = cljs.core.deref.call(null,inst_47226);
var state_47239__$1 = state_47239;
var statearr_47254_47268 = state_47239__$1;
(statearr_47254_47268[(2)] = inst_47229);

(statearr_47254_47268[(1)] = (10));


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
});})(c__46752__auto__))
;
return ((function (switch__46662__auto__,c__46752__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46663__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46663__auto____0 = (function (){
var statearr_47255 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47255[(0)] = cljs$core$async$reduce_$_state_machine__46663__auto__);

(statearr_47255[(1)] = (1));

return statearr_47255;
});
var cljs$core$async$reduce_$_state_machine__46663__auto____1 = (function (state_47239){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_47239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e47256){if((e47256 instanceof Object)){
var ex__46666__auto__ = e47256;
var statearr_47257_47269 = state_47239;
(statearr_47257_47269[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47270 = state_47239;
state_47239 = G__47270;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46663__auto__ = function(state_47239){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46663__auto____1.call(this,state_47239);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46663__auto____0;
cljs$core$async$reduce_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46663__auto____1;
return cljs$core$async$reduce_$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto__))
})();
var state__46754__auto__ = (function (){var statearr_47258 = f__46753__auto__.call(null);
(statearr_47258[(6)] = c__46752__auto__);

return statearr_47258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto__))
);

return c__46752__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__46752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto__,f__$1){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto__,f__$1){
return (function (state_47276){
var state_val_47277 = (state_47276[(1)]);
if((state_val_47277 === (1))){
var inst_47271 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47276__$1 = state_47276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47276__$1,(2),inst_47271);
} else {
if((state_val_47277 === (2))){
var inst_47273 = (state_47276[(2)]);
var inst_47274 = f__$1.call(null,inst_47273);
var state_47276__$1 = state_47276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47276__$1,inst_47274);
} else {
return null;
}
}
});})(c__46752__auto__,f__$1))
;
return ((function (switch__46662__auto__,c__46752__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__46663__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46663__auto____0 = (function (){
var statearr_47278 = [null,null,null,null,null,null,null];
(statearr_47278[(0)] = cljs$core$async$transduce_$_state_machine__46663__auto__);

(statearr_47278[(1)] = (1));

return statearr_47278;
});
var cljs$core$async$transduce_$_state_machine__46663__auto____1 = (function (state_47276){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_47276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e47279){if((e47279 instanceof Object)){
var ex__46666__auto__ = e47279;
var statearr_47280_47282 = state_47276;
(statearr_47280_47282[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47283 = state_47276;
state_47276 = G__47283;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46663__auto__ = function(state_47276){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46663__auto____1.call(this,state_47276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46663__auto____0;
cljs$core$async$transduce_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46663__auto____1;
return cljs$core$async$transduce_$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto__,f__$1))
})();
var state__46754__auto__ = (function (){var statearr_47281 = f__46753__auto__.call(null);
(statearr_47281[(6)] = c__46752__auto__);

return statearr_47281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto__,f__$1))
);

return c__46752__auto__;
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
var G__47285 = arguments.length;
switch (G__47285) {
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
var c__46752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto__){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto__){
return (function (state_47310){
var state_val_47311 = (state_47310[(1)]);
if((state_val_47311 === (7))){
var inst_47292 = (state_47310[(2)]);
var state_47310__$1 = state_47310;
var statearr_47312_47333 = state_47310__$1;
(statearr_47312_47333[(2)] = inst_47292);

(statearr_47312_47333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (1))){
var inst_47286 = cljs.core.seq.call(null,coll);
var inst_47287 = inst_47286;
var state_47310__$1 = (function (){var statearr_47313 = state_47310;
(statearr_47313[(7)] = inst_47287);

return statearr_47313;
})();
var statearr_47314_47334 = state_47310__$1;
(statearr_47314_47334[(2)] = null);

(statearr_47314_47334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (4))){
var inst_47287 = (state_47310[(7)]);
var inst_47290 = cljs.core.first.call(null,inst_47287);
var state_47310__$1 = state_47310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47310__$1,(7),ch,inst_47290);
} else {
if((state_val_47311 === (13))){
var inst_47304 = (state_47310[(2)]);
var state_47310__$1 = state_47310;
var statearr_47315_47335 = state_47310__$1;
(statearr_47315_47335[(2)] = inst_47304);

(statearr_47315_47335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (6))){
var inst_47295 = (state_47310[(2)]);
var state_47310__$1 = state_47310;
if(cljs.core.truth_(inst_47295)){
var statearr_47316_47336 = state_47310__$1;
(statearr_47316_47336[(1)] = (8));

} else {
var statearr_47317_47337 = state_47310__$1;
(statearr_47317_47337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (3))){
var inst_47308 = (state_47310[(2)]);
var state_47310__$1 = state_47310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47310__$1,inst_47308);
} else {
if((state_val_47311 === (12))){
var state_47310__$1 = state_47310;
var statearr_47318_47338 = state_47310__$1;
(statearr_47318_47338[(2)] = null);

(statearr_47318_47338[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (2))){
var inst_47287 = (state_47310[(7)]);
var state_47310__$1 = state_47310;
if(cljs.core.truth_(inst_47287)){
var statearr_47319_47339 = state_47310__$1;
(statearr_47319_47339[(1)] = (4));

} else {
var statearr_47320_47340 = state_47310__$1;
(statearr_47320_47340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (11))){
var inst_47301 = cljs.core.async.close_BANG_.call(null,ch);
var state_47310__$1 = state_47310;
var statearr_47321_47341 = state_47310__$1;
(statearr_47321_47341[(2)] = inst_47301);

(statearr_47321_47341[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (9))){
var state_47310__$1 = state_47310;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47322_47342 = state_47310__$1;
(statearr_47322_47342[(1)] = (11));

} else {
var statearr_47323_47343 = state_47310__$1;
(statearr_47323_47343[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (5))){
var inst_47287 = (state_47310[(7)]);
var state_47310__$1 = state_47310;
var statearr_47324_47344 = state_47310__$1;
(statearr_47324_47344[(2)] = inst_47287);

(statearr_47324_47344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (10))){
var inst_47306 = (state_47310[(2)]);
var state_47310__$1 = state_47310;
var statearr_47325_47345 = state_47310__$1;
(statearr_47325_47345[(2)] = inst_47306);

(statearr_47325_47345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (8))){
var inst_47287 = (state_47310[(7)]);
var inst_47297 = cljs.core.next.call(null,inst_47287);
var inst_47287__$1 = inst_47297;
var state_47310__$1 = (function (){var statearr_47326 = state_47310;
(statearr_47326[(7)] = inst_47287__$1);

return statearr_47326;
})();
var statearr_47327_47346 = state_47310__$1;
(statearr_47327_47346[(2)] = null);

(statearr_47327_47346[(1)] = (2));


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
});})(c__46752__auto__))
;
return ((function (switch__46662__auto__,c__46752__auto__){
return (function() {
var cljs$core$async$state_machine__46663__auto__ = null;
var cljs$core$async$state_machine__46663__auto____0 = (function (){
var statearr_47328 = [null,null,null,null,null,null,null,null];
(statearr_47328[(0)] = cljs$core$async$state_machine__46663__auto__);

(statearr_47328[(1)] = (1));

return statearr_47328;
});
var cljs$core$async$state_machine__46663__auto____1 = (function (state_47310){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_47310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e47329){if((e47329 instanceof Object)){
var ex__46666__auto__ = e47329;
var statearr_47330_47347 = state_47310;
(statearr_47330_47347[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47348 = state_47310;
state_47310 = G__47348;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$state_machine__46663__auto__ = function(state_47310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46663__auto____1.call(this,state_47310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46663__auto____0;
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46663__auto____1;
return cljs$core$async$state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto__))
})();
var state__46754__auto__ = (function (){var statearr_47331 = f__46753__auto__.call(null);
(statearr_47331[(6)] = c__46752__auto__);

return statearr_47331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto__))
);

return c__46752__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async47349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47349 = (function (ch,cs,meta47350){
this.ch = ch;
this.cs = cs;
this.meta47350 = meta47350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47351,meta47350__$1){
var self__ = this;
var _47351__$1 = this;
return (new cljs.core.async.t_cljs$core$async47349(self__.ch,self__.cs,meta47350__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47351){
var self__ = this;
var _47351__$1 = this;
return self__.meta47350;
});})(cs))
;

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47349.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47350","meta47350",-1148847697,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47349";

cljs.core.async.t_cljs$core$async47349.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async47349");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47349 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47349(ch__$1,cs__$1,meta47350){
return (new cljs.core.async.t_cljs$core$async47349(ch__$1,cs__$1,meta47350));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47349(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46752__auto___47571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___47571,cs,m,dchan,dctr,done){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___47571,cs,m,dchan,dctr,done){
return (function (state_47486){
var state_val_47487 = (state_47486[(1)]);
if((state_val_47487 === (7))){
var inst_47482 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47488_47572 = state_47486__$1;
(statearr_47488_47572[(2)] = inst_47482);

(statearr_47488_47572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (20))){
var inst_47385 = (state_47486[(7)]);
var inst_47397 = cljs.core.first.call(null,inst_47385);
var inst_47398 = cljs.core.nth.call(null,inst_47397,(0),null);
var inst_47399 = cljs.core.nth.call(null,inst_47397,(1),null);
var state_47486__$1 = (function (){var statearr_47489 = state_47486;
(statearr_47489[(8)] = inst_47398);

return statearr_47489;
})();
if(cljs.core.truth_(inst_47399)){
var statearr_47490_47573 = state_47486__$1;
(statearr_47490_47573[(1)] = (22));

} else {
var statearr_47491_47574 = state_47486__$1;
(statearr_47491_47574[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (27))){
var inst_47434 = (state_47486[(9)]);
var inst_47427 = (state_47486[(10)]);
var inst_47354 = (state_47486[(11)]);
var inst_47429 = (state_47486[(12)]);
var inst_47434__$1 = cljs.core._nth.call(null,inst_47427,inst_47429);
var inst_47435 = cljs.core.async.put_BANG_.call(null,inst_47434__$1,inst_47354,done);
var state_47486__$1 = (function (){var statearr_47492 = state_47486;
(statearr_47492[(9)] = inst_47434__$1);

return statearr_47492;
})();
if(cljs.core.truth_(inst_47435)){
var statearr_47493_47575 = state_47486__$1;
(statearr_47493_47575[(1)] = (30));

} else {
var statearr_47494_47576 = state_47486__$1;
(statearr_47494_47576[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (1))){
var state_47486__$1 = state_47486;
var statearr_47495_47577 = state_47486__$1;
(statearr_47495_47577[(2)] = null);

(statearr_47495_47577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (24))){
var inst_47385 = (state_47486[(7)]);
var inst_47404 = (state_47486[(2)]);
var inst_47405 = cljs.core.next.call(null,inst_47385);
var inst_47363 = inst_47405;
var inst_47364 = null;
var inst_47365 = (0);
var inst_47366 = (0);
var state_47486__$1 = (function (){var statearr_47496 = state_47486;
(statearr_47496[(13)] = inst_47364);

(statearr_47496[(14)] = inst_47365);

(statearr_47496[(15)] = inst_47404);

(statearr_47496[(16)] = inst_47366);

(statearr_47496[(17)] = inst_47363);

return statearr_47496;
})();
var statearr_47497_47578 = state_47486__$1;
(statearr_47497_47578[(2)] = null);

(statearr_47497_47578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (39))){
var state_47486__$1 = state_47486;
var statearr_47501_47579 = state_47486__$1;
(statearr_47501_47579[(2)] = null);

(statearr_47501_47579[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (4))){
var inst_47354 = (state_47486[(11)]);
var inst_47354__$1 = (state_47486[(2)]);
var inst_47355 = (inst_47354__$1 == null);
var state_47486__$1 = (function (){var statearr_47502 = state_47486;
(statearr_47502[(11)] = inst_47354__$1);

return statearr_47502;
})();
if(cljs.core.truth_(inst_47355)){
var statearr_47503_47580 = state_47486__$1;
(statearr_47503_47580[(1)] = (5));

} else {
var statearr_47504_47581 = state_47486__$1;
(statearr_47504_47581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (15))){
var inst_47364 = (state_47486[(13)]);
var inst_47365 = (state_47486[(14)]);
var inst_47366 = (state_47486[(16)]);
var inst_47363 = (state_47486[(17)]);
var inst_47381 = (state_47486[(2)]);
var inst_47382 = (inst_47366 + (1));
var tmp47498 = inst_47364;
var tmp47499 = inst_47365;
var tmp47500 = inst_47363;
var inst_47363__$1 = tmp47500;
var inst_47364__$1 = tmp47498;
var inst_47365__$1 = tmp47499;
var inst_47366__$1 = inst_47382;
var state_47486__$1 = (function (){var statearr_47505 = state_47486;
(statearr_47505[(13)] = inst_47364__$1);

(statearr_47505[(14)] = inst_47365__$1);

(statearr_47505[(18)] = inst_47381);

(statearr_47505[(16)] = inst_47366__$1);

(statearr_47505[(17)] = inst_47363__$1);

return statearr_47505;
})();
var statearr_47506_47582 = state_47486__$1;
(statearr_47506_47582[(2)] = null);

(statearr_47506_47582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (21))){
var inst_47408 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47510_47583 = state_47486__$1;
(statearr_47510_47583[(2)] = inst_47408);

(statearr_47510_47583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (31))){
var inst_47434 = (state_47486[(9)]);
var inst_47438 = done.call(null,null);
var inst_47439 = cljs.core.async.untap_STAR_.call(null,m,inst_47434);
var state_47486__$1 = (function (){var statearr_47511 = state_47486;
(statearr_47511[(19)] = inst_47438);

return statearr_47511;
})();
var statearr_47512_47584 = state_47486__$1;
(statearr_47512_47584[(2)] = inst_47439);

(statearr_47512_47584[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (32))){
var inst_47428 = (state_47486[(20)]);
var inst_47427 = (state_47486[(10)]);
var inst_47429 = (state_47486[(12)]);
var inst_47426 = (state_47486[(21)]);
var inst_47441 = (state_47486[(2)]);
var inst_47442 = (inst_47429 + (1));
var tmp47507 = inst_47428;
var tmp47508 = inst_47427;
var tmp47509 = inst_47426;
var inst_47426__$1 = tmp47509;
var inst_47427__$1 = tmp47508;
var inst_47428__$1 = tmp47507;
var inst_47429__$1 = inst_47442;
var state_47486__$1 = (function (){var statearr_47513 = state_47486;
(statearr_47513[(20)] = inst_47428__$1);

(statearr_47513[(22)] = inst_47441);

(statearr_47513[(10)] = inst_47427__$1);

(statearr_47513[(12)] = inst_47429__$1);

(statearr_47513[(21)] = inst_47426__$1);

return statearr_47513;
})();
var statearr_47514_47585 = state_47486__$1;
(statearr_47514_47585[(2)] = null);

(statearr_47514_47585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (40))){
var inst_47454 = (state_47486[(23)]);
var inst_47458 = done.call(null,null);
var inst_47459 = cljs.core.async.untap_STAR_.call(null,m,inst_47454);
var state_47486__$1 = (function (){var statearr_47515 = state_47486;
(statearr_47515[(24)] = inst_47458);

return statearr_47515;
})();
var statearr_47516_47586 = state_47486__$1;
(statearr_47516_47586[(2)] = inst_47459);

(statearr_47516_47586[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (33))){
var inst_47445 = (state_47486[(25)]);
var inst_47447 = cljs.core.chunked_seq_QMARK_.call(null,inst_47445);
var state_47486__$1 = state_47486;
if(inst_47447){
var statearr_47517_47587 = state_47486__$1;
(statearr_47517_47587[(1)] = (36));

} else {
var statearr_47518_47588 = state_47486__$1;
(statearr_47518_47588[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (13))){
var inst_47375 = (state_47486[(26)]);
var inst_47378 = cljs.core.async.close_BANG_.call(null,inst_47375);
var state_47486__$1 = state_47486;
var statearr_47519_47589 = state_47486__$1;
(statearr_47519_47589[(2)] = inst_47378);

(statearr_47519_47589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (22))){
var inst_47398 = (state_47486[(8)]);
var inst_47401 = cljs.core.async.close_BANG_.call(null,inst_47398);
var state_47486__$1 = state_47486;
var statearr_47520_47590 = state_47486__$1;
(statearr_47520_47590[(2)] = inst_47401);

(statearr_47520_47590[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (36))){
var inst_47445 = (state_47486[(25)]);
var inst_47449 = cljs.core.chunk_first.call(null,inst_47445);
var inst_47450 = cljs.core.chunk_rest.call(null,inst_47445);
var inst_47451 = cljs.core.count.call(null,inst_47449);
var inst_47426 = inst_47450;
var inst_47427 = inst_47449;
var inst_47428 = inst_47451;
var inst_47429 = (0);
var state_47486__$1 = (function (){var statearr_47521 = state_47486;
(statearr_47521[(20)] = inst_47428);

(statearr_47521[(10)] = inst_47427);

(statearr_47521[(12)] = inst_47429);

(statearr_47521[(21)] = inst_47426);

return statearr_47521;
})();
var statearr_47522_47591 = state_47486__$1;
(statearr_47522_47591[(2)] = null);

(statearr_47522_47591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (41))){
var inst_47445 = (state_47486[(25)]);
var inst_47461 = (state_47486[(2)]);
var inst_47462 = cljs.core.next.call(null,inst_47445);
var inst_47426 = inst_47462;
var inst_47427 = null;
var inst_47428 = (0);
var inst_47429 = (0);
var state_47486__$1 = (function (){var statearr_47523 = state_47486;
(statearr_47523[(20)] = inst_47428);

(statearr_47523[(10)] = inst_47427);

(statearr_47523[(12)] = inst_47429);

(statearr_47523[(27)] = inst_47461);

(statearr_47523[(21)] = inst_47426);

return statearr_47523;
})();
var statearr_47524_47592 = state_47486__$1;
(statearr_47524_47592[(2)] = null);

(statearr_47524_47592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (43))){
var state_47486__$1 = state_47486;
var statearr_47525_47593 = state_47486__$1;
(statearr_47525_47593[(2)] = null);

(statearr_47525_47593[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (29))){
var inst_47470 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47526_47594 = state_47486__$1;
(statearr_47526_47594[(2)] = inst_47470);

(statearr_47526_47594[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (44))){
var inst_47479 = (state_47486[(2)]);
var state_47486__$1 = (function (){var statearr_47527 = state_47486;
(statearr_47527[(28)] = inst_47479);

return statearr_47527;
})();
var statearr_47528_47595 = state_47486__$1;
(statearr_47528_47595[(2)] = null);

(statearr_47528_47595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (6))){
var inst_47418 = (state_47486[(29)]);
var inst_47417 = cljs.core.deref.call(null,cs);
var inst_47418__$1 = cljs.core.keys.call(null,inst_47417);
var inst_47419 = cljs.core.count.call(null,inst_47418__$1);
var inst_47420 = cljs.core.reset_BANG_.call(null,dctr,inst_47419);
var inst_47425 = cljs.core.seq.call(null,inst_47418__$1);
var inst_47426 = inst_47425;
var inst_47427 = null;
var inst_47428 = (0);
var inst_47429 = (0);
var state_47486__$1 = (function (){var statearr_47529 = state_47486;
(statearr_47529[(20)] = inst_47428);

(statearr_47529[(30)] = inst_47420);

(statearr_47529[(10)] = inst_47427);

(statearr_47529[(29)] = inst_47418__$1);

(statearr_47529[(12)] = inst_47429);

(statearr_47529[(21)] = inst_47426);

return statearr_47529;
})();
var statearr_47530_47596 = state_47486__$1;
(statearr_47530_47596[(2)] = null);

(statearr_47530_47596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (28))){
var inst_47445 = (state_47486[(25)]);
var inst_47426 = (state_47486[(21)]);
var inst_47445__$1 = cljs.core.seq.call(null,inst_47426);
var state_47486__$1 = (function (){var statearr_47531 = state_47486;
(statearr_47531[(25)] = inst_47445__$1);

return statearr_47531;
})();
if(inst_47445__$1){
var statearr_47532_47597 = state_47486__$1;
(statearr_47532_47597[(1)] = (33));

} else {
var statearr_47533_47598 = state_47486__$1;
(statearr_47533_47598[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (25))){
var inst_47428 = (state_47486[(20)]);
var inst_47429 = (state_47486[(12)]);
var inst_47431 = (inst_47429 < inst_47428);
var inst_47432 = inst_47431;
var state_47486__$1 = state_47486;
if(cljs.core.truth_(inst_47432)){
var statearr_47534_47599 = state_47486__$1;
(statearr_47534_47599[(1)] = (27));

} else {
var statearr_47535_47600 = state_47486__$1;
(statearr_47535_47600[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (34))){
var state_47486__$1 = state_47486;
var statearr_47536_47601 = state_47486__$1;
(statearr_47536_47601[(2)] = null);

(statearr_47536_47601[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (17))){
var state_47486__$1 = state_47486;
var statearr_47537_47602 = state_47486__$1;
(statearr_47537_47602[(2)] = null);

(statearr_47537_47602[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (3))){
var inst_47484 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47486__$1,inst_47484);
} else {
if((state_val_47487 === (12))){
var inst_47413 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47538_47603 = state_47486__$1;
(statearr_47538_47603[(2)] = inst_47413);

(statearr_47538_47603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (2))){
var state_47486__$1 = state_47486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47486__$1,(4),ch);
} else {
if((state_val_47487 === (23))){
var state_47486__$1 = state_47486;
var statearr_47539_47604 = state_47486__$1;
(statearr_47539_47604[(2)] = null);

(statearr_47539_47604[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (35))){
var inst_47468 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47540_47605 = state_47486__$1;
(statearr_47540_47605[(2)] = inst_47468);

(statearr_47540_47605[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (19))){
var inst_47385 = (state_47486[(7)]);
var inst_47389 = cljs.core.chunk_first.call(null,inst_47385);
var inst_47390 = cljs.core.chunk_rest.call(null,inst_47385);
var inst_47391 = cljs.core.count.call(null,inst_47389);
var inst_47363 = inst_47390;
var inst_47364 = inst_47389;
var inst_47365 = inst_47391;
var inst_47366 = (0);
var state_47486__$1 = (function (){var statearr_47541 = state_47486;
(statearr_47541[(13)] = inst_47364);

(statearr_47541[(14)] = inst_47365);

(statearr_47541[(16)] = inst_47366);

(statearr_47541[(17)] = inst_47363);

return statearr_47541;
})();
var statearr_47542_47606 = state_47486__$1;
(statearr_47542_47606[(2)] = null);

(statearr_47542_47606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (11))){
var inst_47385 = (state_47486[(7)]);
var inst_47363 = (state_47486[(17)]);
var inst_47385__$1 = cljs.core.seq.call(null,inst_47363);
var state_47486__$1 = (function (){var statearr_47543 = state_47486;
(statearr_47543[(7)] = inst_47385__$1);

return statearr_47543;
})();
if(inst_47385__$1){
var statearr_47544_47607 = state_47486__$1;
(statearr_47544_47607[(1)] = (16));

} else {
var statearr_47545_47608 = state_47486__$1;
(statearr_47545_47608[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (9))){
var inst_47415 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47546_47609 = state_47486__$1;
(statearr_47546_47609[(2)] = inst_47415);

(statearr_47546_47609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (5))){
var inst_47361 = cljs.core.deref.call(null,cs);
var inst_47362 = cljs.core.seq.call(null,inst_47361);
var inst_47363 = inst_47362;
var inst_47364 = null;
var inst_47365 = (0);
var inst_47366 = (0);
var state_47486__$1 = (function (){var statearr_47547 = state_47486;
(statearr_47547[(13)] = inst_47364);

(statearr_47547[(14)] = inst_47365);

(statearr_47547[(16)] = inst_47366);

(statearr_47547[(17)] = inst_47363);

return statearr_47547;
})();
var statearr_47548_47610 = state_47486__$1;
(statearr_47548_47610[(2)] = null);

(statearr_47548_47610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (14))){
var state_47486__$1 = state_47486;
var statearr_47549_47611 = state_47486__$1;
(statearr_47549_47611[(2)] = null);

(statearr_47549_47611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (45))){
var inst_47476 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47550_47612 = state_47486__$1;
(statearr_47550_47612[(2)] = inst_47476);

(statearr_47550_47612[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (26))){
var inst_47418 = (state_47486[(29)]);
var inst_47472 = (state_47486[(2)]);
var inst_47473 = cljs.core.seq.call(null,inst_47418);
var state_47486__$1 = (function (){var statearr_47551 = state_47486;
(statearr_47551[(31)] = inst_47472);

return statearr_47551;
})();
if(inst_47473){
var statearr_47552_47613 = state_47486__$1;
(statearr_47552_47613[(1)] = (42));

} else {
var statearr_47553_47614 = state_47486__$1;
(statearr_47553_47614[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (16))){
var inst_47385 = (state_47486[(7)]);
var inst_47387 = cljs.core.chunked_seq_QMARK_.call(null,inst_47385);
var state_47486__$1 = state_47486;
if(inst_47387){
var statearr_47554_47615 = state_47486__$1;
(statearr_47554_47615[(1)] = (19));

} else {
var statearr_47555_47616 = state_47486__$1;
(statearr_47555_47616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (38))){
var inst_47465 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47556_47617 = state_47486__$1;
(statearr_47556_47617[(2)] = inst_47465);

(statearr_47556_47617[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (30))){
var state_47486__$1 = state_47486;
var statearr_47557_47618 = state_47486__$1;
(statearr_47557_47618[(2)] = null);

(statearr_47557_47618[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (10))){
var inst_47364 = (state_47486[(13)]);
var inst_47366 = (state_47486[(16)]);
var inst_47374 = cljs.core._nth.call(null,inst_47364,inst_47366);
var inst_47375 = cljs.core.nth.call(null,inst_47374,(0),null);
var inst_47376 = cljs.core.nth.call(null,inst_47374,(1),null);
var state_47486__$1 = (function (){var statearr_47558 = state_47486;
(statearr_47558[(26)] = inst_47375);

return statearr_47558;
})();
if(cljs.core.truth_(inst_47376)){
var statearr_47559_47619 = state_47486__$1;
(statearr_47559_47619[(1)] = (13));

} else {
var statearr_47560_47620 = state_47486__$1;
(statearr_47560_47620[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (18))){
var inst_47411 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47561_47621 = state_47486__$1;
(statearr_47561_47621[(2)] = inst_47411);

(statearr_47561_47621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (42))){
var state_47486__$1 = state_47486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47486__$1,(45),dchan);
} else {
if((state_val_47487 === (37))){
var inst_47445 = (state_47486[(25)]);
var inst_47454 = (state_47486[(23)]);
var inst_47354 = (state_47486[(11)]);
var inst_47454__$1 = cljs.core.first.call(null,inst_47445);
var inst_47455 = cljs.core.async.put_BANG_.call(null,inst_47454__$1,inst_47354,done);
var state_47486__$1 = (function (){var statearr_47562 = state_47486;
(statearr_47562[(23)] = inst_47454__$1);

return statearr_47562;
})();
if(cljs.core.truth_(inst_47455)){
var statearr_47563_47622 = state_47486__$1;
(statearr_47563_47622[(1)] = (39));

} else {
var statearr_47564_47623 = state_47486__$1;
(statearr_47564_47623[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (8))){
var inst_47365 = (state_47486[(14)]);
var inst_47366 = (state_47486[(16)]);
var inst_47368 = (inst_47366 < inst_47365);
var inst_47369 = inst_47368;
var state_47486__$1 = state_47486;
if(cljs.core.truth_(inst_47369)){
var statearr_47565_47624 = state_47486__$1;
(statearr_47565_47624[(1)] = (10));

} else {
var statearr_47566_47625 = state_47486__$1;
(statearr_47566_47625[(1)] = (11));

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
});})(c__46752__auto___47571,cs,m,dchan,dctr,done))
;
return ((function (switch__46662__auto__,c__46752__auto___47571,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46663__auto__ = null;
var cljs$core$async$mult_$_state_machine__46663__auto____0 = (function (){
var statearr_47567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47567[(0)] = cljs$core$async$mult_$_state_machine__46663__auto__);

(statearr_47567[(1)] = (1));

return statearr_47567;
});
var cljs$core$async$mult_$_state_machine__46663__auto____1 = (function (state_47486){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_47486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e47568){if((e47568 instanceof Object)){
var ex__46666__auto__ = e47568;
var statearr_47569_47626 = state_47486;
(statearr_47569_47626[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47627 = state_47486;
state_47486 = G__47627;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46663__auto__ = function(state_47486){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46663__auto____1.call(this,state_47486);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46663__auto____0;
cljs$core$async$mult_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46663__auto____1;
return cljs$core$async$mult_$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___47571,cs,m,dchan,dctr,done))
})();
var state__46754__auto__ = (function (){var statearr_47570 = f__46753__auto__.call(null);
(statearr_47570[(6)] = c__46752__auto___47571);

return statearr_47570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___47571,cs,m,dchan,dctr,done))
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
var G__47629 = arguments.length;
switch (G__47629) {
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
var len__31802__auto___47641 = arguments.length;
var i__31803__auto___47642 = (0);
while(true){
if((i__31803__auto___47642 < len__31802__auto___47641)){
args__31809__auto__.push((arguments[i__31803__auto___47642]));

var G__47643 = (i__31803__auto___47642 + (1));
i__31803__auto___47642 = G__47643;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((3) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31810__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47635){
var map__47636 = p__47635;
var map__47636__$1 = ((((!((map__47636 == null)))?((((map__47636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47636):map__47636);
var opts = map__47636__$1;
var statearr_47638_47644 = state;
(statearr_47638_47644[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__47636,map__47636__$1,opts){
return (function (val){
var statearr_47639_47645 = state;
(statearr_47639_47645[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47636,map__47636__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_47640_47646 = state;
(statearr_47640_47646[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47631){
var G__47632 = cljs.core.first.call(null,seq47631);
var seq47631__$1 = cljs.core.next.call(null,seq47631);
var G__47633 = cljs.core.first.call(null,seq47631__$1);
var seq47631__$2 = cljs.core.next.call(null,seq47631__$1);
var G__47634 = cljs.core.first.call(null,seq47631__$2);
var seq47631__$3 = cljs.core.next.call(null,seq47631__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47632,G__47633,G__47634,seq47631__$3);
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
if(typeof cljs.core.async.t_cljs$core$async47647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47647 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta47648){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta47648 = meta47648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47649,meta47648__$1){
var self__ = this;
var _47649__$1 = this;
return (new cljs.core.async.t_cljs$core$async47647(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta47648__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47649){
var self__ = this;
var _47649__$1 = this;
return self__.meta47648;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47647.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47647.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47647.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47647.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47647.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47647.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47647.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47647.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async47647.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta47648","meta47648",1518096278,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47647";

cljs.core.async.t_cljs$core$async47647.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async47647");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47647 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47647(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47648){
return (new cljs.core.async.t_cljs$core$async47647(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47648));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47647(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46752__auto___47811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___47811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___47811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47751){
var state_val_47752 = (state_47751[(1)]);
if((state_val_47752 === (7))){
var inst_47666 = (state_47751[(2)]);
var state_47751__$1 = state_47751;
var statearr_47753_47812 = state_47751__$1;
(statearr_47753_47812[(2)] = inst_47666);

(statearr_47753_47812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (20))){
var inst_47678 = (state_47751[(7)]);
var state_47751__$1 = state_47751;
var statearr_47754_47813 = state_47751__$1;
(statearr_47754_47813[(2)] = inst_47678);

(statearr_47754_47813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (27))){
var state_47751__$1 = state_47751;
var statearr_47755_47814 = state_47751__$1;
(statearr_47755_47814[(2)] = null);

(statearr_47755_47814[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (1))){
var inst_47653 = (state_47751[(8)]);
var inst_47653__$1 = calc_state.call(null);
var inst_47655 = (inst_47653__$1 == null);
var inst_47656 = cljs.core.not.call(null,inst_47655);
var state_47751__$1 = (function (){var statearr_47756 = state_47751;
(statearr_47756[(8)] = inst_47653__$1);

return statearr_47756;
})();
if(inst_47656){
var statearr_47757_47815 = state_47751__$1;
(statearr_47757_47815[(1)] = (2));

} else {
var statearr_47758_47816 = state_47751__$1;
(statearr_47758_47816[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (24))){
var inst_47711 = (state_47751[(9)]);
var inst_47702 = (state_47751[(10)]);
var inst_47725 = (state_47751[(11)]);
var inst_47725__$1 = inst_47702.call(null,inst_47711);
var state_47751__$1 = (function (){var statearr_47759 = state_47751;
(statearr_47759[(11)] = inst_47725__$1);

return statearr_47759;
})();
if(cljs.core.truth_(inst_47725__$1)){
var statearr_47760_47817 = state_47751__$1;
(statearr_47760_47817[(1)] = (29));

} else {
var statearr_47761_47818 = state_47751__$1;
(statearr_47761_47818[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (4))){
var inst_47669 = (state_47751[(2)]);
var state_47751__$1 = state_47751;
if(cljs.core.truth_(inst_47669)){
var statearr_47762_47819 = state_47751__$1;
(statearr_47762_47819[(1)] = (8));

} else {
var statearr_47763_47820 = state_47751__$1;
(statearr_47763_47820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (15))){
var inst_47696 = (state_47751[(2)]);
var state_47751__$1 = state_47751;
if(cljs.core.truth_(inst_47696)){
var statearr_47764_47821 = state_47751__$1;
(statearr_47764_47821[(1)] = (19));

} else {
var statearr_47765_47822 = state_47751__$1;
(statearr_47765_47822[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (21))){
var inst_47701 = (state_47751[(12)]);
var inst_47701__$1 = (state_47751[(2)]);
var inst_47702 = cljs.core.get.call(null,inst_47701__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47703 = cljs.core.get.call(null,inst_47701__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47704 = cljs.core.get.call(null,inst_47701__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47751__$1 = (function (){var statearr_47766 = state_47751;
(statearr_47766[(10)] = inst_47702);

(statearr_47766[(13)] = inst_47703);

(statearr_47766[(12)] = inst_47701__$1);

return statearr_47766;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47751__$1,(22),inst_47704);
} else {
if((state_val_47752 === (31))){
var inst_47733 = (state_47751[(2)]);
var state_47751__$1 = state_47751;
if(cljs.core.truth_(inst_47733)){
var statearr_47767_47823 = state_47751__$1;
(statearr_47767_47823[(1)] = (32));

} else {
var statearr_47768_47824 = state_47751__$1;
(statearr_47768_47824[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (32))){
var inst_47710 = (state_47751[(14)]);
var state_47751__$1 = state_47751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47751__$1,(35),out,inst_47710);
} else {
if((state_val_47752 === (33))){
var inst_47701 = (state_47751[(12)]);
var inst_47678 = inst_47701;
var state_47751__$1 = (function (){var statearr_47769 = state_47751;
(statearr_47769[(7)] = inst_47678);

return statearr_47769;
})();
var statearr_47770_47825 = state_47751__$1;
(statearr_47770_47825[(2)] = null);

(statearr_47770_47825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (13))){
var inst_47678 = (state_47751[(7)]);
var inst_47685 = inst_47678.cljs$lang$protocol_mask$partition0$;
var inst_47686 = (inst_47685 & (64));
var inst_47687 = inst_47678.cljs$core$ISeq$;
var inst_47688 = (cljs.core.PROTOCOL_SENTINEL === inst_47687);
var inst_47689 = (inst_47686) || (inst_47688);
var state_47751__$1 = state_47751;
if(cljs.core.truth_(inst_47689)){
var statearr_47771_47826 = state_47751__$1;
(statearr_47771_47826[(1)] = (16));

} else {
var statearr_47772_47827 = state_47751__$1;
(statearr_47772_47827[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (22))){
var inst_47711 = (state_47751[(9)]);
var inst_47710 = (state_47751[(14)]);
var inst_47709 = (state_47751[(2)]);
var inst_47710__$1 = cljs.core.nth.call(null,inst_47709,(0),null);
var inst_47711__$1 = cljs.core.nth.call(null,inst_47709,(1),null);
var inst_47712 = (inst_47710__$1 == null);
var inst_47713 = cljs.core._EQ_.call(null,inst_47711__$1,change);
var inst_47714 = (inst_47712) || (inst_47713);
var state_47751__$1 = (function (){var statearr_47773 = state_47751;
(statearr_47773[(9)] = inst_47711__$1);

(statearr_47773[(14)] = inst_47710__$1);

return statearr_47773;
})();
if(cljs.core.truth_(inst_47714)){
var statearr_47774_47828 = state_47751__$1;
(statearr_47774_47828[(1)] = (23));

} else {
var statearr_47775_47829 = state_47751__$1;
(statearr_47775_47829[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (36))){
var inst_47701 = (state_47751[(12)]);
var inst_47678 = inst_47701;
var state_47751__$1 = (function (){var statearr_47776 = state_47751;
(statearr_47776[(7)] = inst_47678);

return statearr_47776;
})();
var statearr_47777_47830 = state_47751__$1;
(statearr_47777_47830[(2)] = null);

(statearr_47777_47830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (29))){
var inst_47725 = (state_47751[(11)]);
var state_47751__$1 = state_47751;
var statearr_47778_47831 = state_47751__$1;
(statearr_47778_47831[(2)] = inst_47725);

(statearr_47778_47831[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (6))){
var state_47751__$1 = state_47751;
var statearr_47779_47832 = state_47751__$1;
(statearr_47779_47832[(2)] = false);

(statearr_47779_47832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (28))){
var inst_47721 = (state_47751[(2)]);
var inst_47722 = calc_state.call(null);
var inst_47678 = inst_47722;
var state_47751__$1 = (function (){var statearr_47780 = state_47751;
(statearr_47780[(7)] = inst_47678);

(statearr_47780[(15)] = inst_47721);

return statearr_47780;
})();
var statearr_47781_47833 = state_47751__$1;
(statearr_47781_47833[(2)] = null);

(statearr_47781_47833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (25))){
var inst_47747 = (state_47751[(2)]);
var state_47751__$1 = state_47751;
var statearr_47782_47834 = state_47751__$1;
(statearr_47782_47834[(2)] = inst_47747);

(statearr_47782_47834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (34))){
var inst_47745 = (state_47751[(2)]);
var state_47751__$1 = state_47751;
var statearr_47783_47835 = state_47751__$1;
(statearr_47783_47835[(2)] = inst_47745);

(statearr_47783_47835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (17))){
var state_47751__$1 = state_47751;
var statearr_47784_47836 = state_47751__$1;
(statearr_47784_47836[(2)] = false);

(statearr_47784_47836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (3))){
var state_47751__$1 = state_47751;
var statearr_47785_47837 = state_47751__$1;
(statearr_47785_47837[(2)] = false);

(statearr_47785_47837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (12))){
var inst_47749 = (state_47751[(2)]);
var state_47751__$1 = state_47751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47751__$1,inst_47749);
} else {
if((state_val_47752 === (2))){
var inst_47653 = (state_47751[(8)]);
var inst_47658 = inst_47653.cljs$lang$protocol_mask$partition0$;
var inst_47659 = (inst_47658 & (64));
var inst_47660 = inst_47653.cljs$core$ISeq$;
var inst_47661 = (cljs.core.PROTOCOL_SENTINEL === inst_47660);
var inst_47662 = (inst_47659) || (inst_47661);
var state_47751__$1 = state_47751;
if(cljs.core.truth_(inst_47662)){
var statearr_47786_47838 = state_47751__$1;
(statearr_47786_47838[(1)] = (5));

} else {
var statearr_47787_47839 = state_47751__$1;
(statearr_47787_47839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (23))){
var inst_47710 = (state_47751[(14)]);
var inst_47716 = (inst_47710 == null);
var state_47751__$1 = state_47751;
if(cljs.core.truth_(inst_47716)){
var statearr_47788_47840 = state_47751__$1;
(statearr_47788_47840[(1)] = (26));

} else {
var statearr_47789_47841 = state_47751__$1;
(statearr_47789_47841[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (35))){
var inst_47736 = (state_47751[(2)]);
var state_47751__$1 = state_47751;
if(cljs.core.truth_(inst_47736)){
var statearr_47790_47842 = state_47751__$1;
(statearr_47790_47842[(1)] = (36));

} else {
var statearr_47791_47843 = state_47751__$1;
(statearr_47791_47843[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (19))){
var inst_47678 = (state_47751[(7)]);
var inst_47698 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47678);
var state_47751__$1 = state_47751;
var statearr_47792_47844 = state_47751__$1;
(statearr_47792_47844[(2)] = inst_47698);

(statearr_47792_47844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (11))){
var inst_47678 = (state_47751[(7)]);
var inst_47682 = (inst_47678 == null);
var inst_47683 = cljs.core.not.call(null,inst_47682);
var state_47751__$1 = state_47751;
if(inst_47683){
var statearr_47793_47845 = state_47751__$1;
(statearr_47793_47845[(1)] = (13));

} else {
var statearr_47794_47846 = state_47751__$1;
(statearr_47794_47846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (9))){
var inst_47653 = (state_47751[(8)]);
var state_47751__$1 = state_47751;
var statearr_47795_47847 = state_47751__$1;
(statearr_47795_47847[(2)] = inst_47653);

(statearr_47795_47847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (5))){
var state_47751__$1 = state_47751;
var statearr_47796_47848 = state_47751__$1;
(statearr_47796_47848[(2)] = true);

(statearr_47796_47848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (14))){
var state_47751__$1 = state_47751;
var statearr_47797_47849 = state_47751__$1;
(statearr_47797_47849[(2)] = false);

(statearr_47797_47849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (26))){
var inst_47711 = (state_47751[(9)]);
var inst_47718 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47711);
var state_47751__$1 = state_47751;
var statearr_47798_47850 = state_47751__$1;
(statearr_47798_47850[(2)] = inst_47718);

(statearr_47798_47850[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (16))){
var state_47751__$1 = state_47751;
var statearr_47799_47851 = state_47751__$1;
(statearr_47799_47851[(2)] = true);

(statearr_47799_47851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (38))){
var inst_47741 = (state_47751[(2)]);
var state_47751__$1 = state_47751;
var statearr_47800_47852 = state_47751__$1;
(statearr_47800_47852[(2)] = inst_47741);

(statearr_47800_47852[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (30))){
var inst_47711 = (state_47751[(9)]);
var inst_47702 = (state_47751[(10)]);
var inst_47703 = (state_47751[(13)]);
var inst_47728 = cljs.core.empty_QMARK_.call(null,inst_47702);
var inst_47729 = inst_47703.call(null,inst_47711);
var inst_47730 = cljs.core.not.call(null,inst_47729);
var inst_47731 = (inst_47728) && (inst_47730);
var state_47751__$1 = state_47751;
var statearr_47801_47853 = state_47751__$1;
(statearr_47801_47853[(2)] = inst_47731);

(statearr_47801_47853[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (10))){
var inst_47653 = (state_47751[(8)]);
var inst_47674 = (state_47751[(2)]);
var inst_47675 = cljs.core.get.call(null,inst_47674,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47676 = cljs.core.get.call(null,inst_47674,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47677 = cljs.core.get.call(null,inst_47674,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47678 = inst_47653;
var state_47751__$1 = (function (){var statearr_47802 = state_47751;
(statearr_47802[(7)] = inst_47678);

(statearr_47802[(16)] = inst_47676);

(statearr_47802[(17)] = inst_47675);

(statearr_47802[(18)] = inst_47677);

return statearr_47802;
})();
var statearr_47803_47854 = state_47751__$1;
(statearr_47803_47854[(2)] = null);

(statearr_47803_47854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (18))){
var inst_47693 = (state_47751[(2)]);
var state_47751__$1 = state_47751;
var statearr_47804_47855 = state_47751__$1;
(statearr_47804_47855[(2)] = inst_47693);

(statearr_47804_47855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (37))){
var state_47751__$1 = state_47751;
var statearr_47805_47856 = state_47751__$1;
(statearr_47805_47856[(2)] = null);

(statearr_47805_47856[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47752 === (8))){
var inst_47653 = (state_47751[(8)]);
var inst_47671 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47653);
var state_47751__$1 = state_47751;
var statearr_47806_47857 = state_47751__$1;
(statearr_47806_47857[(2)] = inst_47671);

(statearr_47806_47857[(1)] = (10));


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
});})(c__46752__auto___47811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46662__auto__,c__46752__auto___47811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46663__auto__ = null;
var cljs$core$async$mix_$_state_machine__46663__auto____0 = (function (){
var statearr_47807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47807[(0)] = cljs$core$async$mix_$_state_machine__46663__auto__);

(statearr_47807[(1)] = (1));

return statearr_47807;
});
var cljs$core$async$mix_$_state_machine__46663__auto____1 = (function (state_47751){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_47751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e47808){if((e47808 instanceof Object)){
var ex__46666__auto__ = e47808;
var statearr_47809_47858 = state_47751;
(statearr_47809_47858[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47859 = state_47751;
state_47751 = G__47859;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46663__auto__ = function(state_47751){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46663__auto____1.call(this,state_47751);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46663__auto____0;
cljs$core$async$mix_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46663__auto____1;
return cljs$core$async$mix_$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___47811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46754__auto__ = (function (){var statearr_47810 = f__46753__auto__.call(null);
(statearr_47810[(6)] = c__46752__auto___47811);

return statearr_47810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___47811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__47861 = arguments.length;
switch (G__47861) {
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
var G__47865 = arguments.length;
switch (G__47865) {
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
var or__30523__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30523__auto__)){
return or__30523__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30523__auto__,mults){
return (function (p1__47863_SHARP_){
if(cljs.core.truth_(p1__47863_SHARP_.call(null,topic))){
return p1__47863_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__47863_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30523__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async47866 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47866 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47867){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47867 = meta47867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47868,meta47867__$1){
var self__ = this;
var _47868__$1 = this;
return (new cljs.core.async.t_cljs$core$async47866(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47867__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47868){
var self__ = this;
var _47868__$1 = this;
return self__.meta47867;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47866.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47867","meta47867",43200440,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47866.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47866";

cljs.core.async.t_cljs$core$async47866.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async47866");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async47866 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47866(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47867){
return (new cljs.core.async.t_cljs$core$async47866(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47867));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47866(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46752__auto___47986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___47986,mults,ensure_mult,p){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___47986,mults,ensure_mult,p){
return (function (state_47940){
var state_val_47941 = (state_47940[(1)]);
if((state_val_47941 === (7))){
var inst_47936 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_47942_47987 = state_47940__$1;
(statearr_47942_47987[(2)] = inst_47936);

(statearr_47942_47987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (20))){
var state_47940__$1 = state_47940;
var statearr_47943_47988 = state_47940__$1;
(statearr_47943_47988[(2)] = null);

(statearr_47943_47988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (1))){
var state_47940__$1 = state_47940;
var statearr_47944_47989 = state_47940__$1;
(statearr_47944_47989[(2)] = null);

(statearr_47944_47989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (24))){
var inst_47919 = (state_47940[(7)]);
var inst_47928 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_47919);
var state_47940__$1 = state_47940;
var statearr_47945_47990 = state_47940__$1;
(statearr_47945_47990[(2)] = inst_47928);

(statearr_47945_47990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (4))){
var inst_47871 = (state_47940[(8)]);
var inst_47871__$1 = (state_47940[(2)]);
var inst_47872 = (inst_47871__$1 == null);
var state_47940__$1 = (function (){var statearr_47946 = state_47940;
(statearr_47946[(8)] = inst_47871__$1);

return statearr_47946;
})();
if(cljs.core.truth_(inst_47872)){
var statearr_47947_47991 = state_47940__$1;
(statearr_47947_47991[(1)] = (5));

} else {
var statearr_47948_47992 = state_47940__$1;
(statearr_47948_47992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (15))){
var inst_47913 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_47949_47993 = state_47940__$1;
(statearr_47949_47993[(2)] = inst_47913);

(statearr_47949_47993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (21))){
var inst_47933 = (state_47940[(2)]);
var state_47940__$1 = (function (){var statearr_47950 = state_47940;
(statearr_47950[(9)] = inst_47933);

return statearr_47950;
})();
var statearr_47951_47994 = state_47940__$1;
(statearr_47951_47994[(2)] = null);

(statearr_47951_47994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (13))){
var inst_47895 = (state_47940[(10)]);
var inst_47897 = cljs.core.chunked_seq_QMARK_.call(null,inst_47895);
var state_47940__$1 = state_47940;
if(inst_47897){
var statearr_47952_47995 = state_47940__$1;
(statearr_47952_47995[(1)] = (16));

} else {
var statearr_47953_47996 = state_47940__$1;
(statearr_47953_47996[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (22))){
var inst_47925 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
if(cljs.core.truth_(inst_47925)){
var statearr_47954_47997 = state_47940__$1;
(statearr_47954_47997[(1)] = (23));

} else {
var statearr_47955_47998 = state_47940__$1;
(statearr_47955_47998[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (6))){
var inst_47871 = (state_47940[(8)]);
var inst_47921 = (state_47940[(11)]);
var inst_47919 = (state_47940[(7)]);
var inst_47919__$1 = topic_fn.call(null,inst_47871);
var inst_47920 = cljs.core.deref.call(null,mults);
var inst_47921__$1 = cljs.core.get.call(null,inst_47920,inst_47919__$1);
var state_47940__$1 = (function (){var statearr_47956 = state_47940;
(statearr_47956[(11)] = inst_47921__$1);

(statearr_47956[(7)] = inst_47919__$1);

return statearr_47956;
})();
if(cljs.core.truth_(inst_47921__$1)){
var statearr_47957_47999 = state_47940__$1;
(statearr_47957_47999[(1)] = (19));

} else {
var statearr_47958_48000 = state_47940__$1;
(statearr_47958_48000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (25))){
var inst_47930 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_47959_48001 = state_47940__$1;
(statearr_47959_48001[(2)] = inst_47930);

(statearr_47959_48001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (17))){
var inst_47895 = (state_47940[(10)]);
var inst_47904 = cljs.core.first.call(null,inst_47895);
var inst_47905 = cljs.core.async.muxch_STAR_.call(null,inst_47904);
var inst_47906 = cljs.core.async.close_BANG_.call(null,inst_47905);
var inst_47907 = cljs.core.next.call(null,inst_47895);
var inst_47881 = inst_47907;
var inst_47882 = null;
var inst_47883 = (0);
var inst_47884 = (0);
var state_47940__$1 = (function (){var statearr_47960 = state_47940;
(statearr_47960[(12)] = inst_47881);

(statearr_47960[(13)] = inst_47883);

(statearr_47960[(14)] = inst_47884);

(statearr_47960[(15)] = inst_47882);

(statearr_47960[(16)] = inst_47906);

return statearr_47960;
})();
var statearr_47961_48002 = state_47940__$1;
(statearr_47961_48002[(2)] = null);

(statearr_47961_48002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (3))){
var inst_47938 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47940__$1,inst_47938);
} else {
if((state_val_47941 === (12))){
var inst_47915 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_47962_48003 = state_47940__$1;
(statearr_47962_48003[(2)] = inst_47915);

(statearr_47962_48003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (2))){
var state_47940__$1 = state_47940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47940__$1,(4),ch);
} else {
if((state_val_47941 === (23))){
var state_47940__$1 = state_47940;
var statearr_47963_48004 = state_47940__$1;
(statearr_47963_48004[(2)] = null);

(statearr_47963_48004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (19))){
var inst_47871 = (state_47940[(8)]);
var inst_47921 = (state_47940[(11)]);
var inst_47923 = cljs.core.async.muxch_STAR_.call(null,inst_47921);
var state_47940__$1 = state_47940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47940__$1,(22),inst_47923,inst_47871);
} else {
if((state_val_47941 === (11))){
var inst_47881 = (state_47940[(12)]);
var inst_47895 = (state_47940[(10)]);
var inst_47895__$1 = cljs.core.seq.call(null,inst_47881);
var state_47940__$1 = (function (){var statearr_47964 = state_47940;
(statearr_47964[(10)] = inst_47895__$1);

return statearr_47964;
})();
if(inst_47895__$1){
var statearr_47965_48005 = state_47940__$1;
(statearr_47965_48005[(1)] = (13));

} else {
var statearr_47966_48006 = state_47940__$1;
(statearr_47966_48006[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (9))){
var inst_47917 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_47967_48007 = state_47940__$1;
(statearr_47967_48007[(2)] = inst_47917);

(statearr_47967_48007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (5))){
var inst_47878 = cljs.core.deref.call(null,mults);
var inst_47879 = cljs.core.vals.call(null,inst_47878);
var inst_47880 = cljs.core.seq.call(null,inst_47879);
var inst_47881 = inst_47880;
var inst_47882 = null;
var inst_47883 = (0);
var inst_47884 = (0);
var state_47940__$1 = (function (){var statearr_47968 = state_47940;
(statearr_47968[(12)] = inst_47881);

(statearr_47968[(13)] = inst_47883);

(statearr_47968[(14)] = inst_47884);

(statearr_47968[(15)] = inst_47882);

return statearr_47968;
})();
var statearr_47969_48008 = state_47940__$1;
(statearr_47969_48008[(2)] = null);

(statearr_47969_48008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (14))){
var state_47940__$1 = state_47940;
var statearr_47973_48009 = state_47940__$1;
(statearr_47973_48009[(2)] = null);

(statearr_47973_48009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (16))){
var inst_47895 = (state_47940[(10)]);
var inst_47899 = cljs.core.chunk_first.call(null,inst_47895);
var inst_47900 = cljs.core.chunk_rest.call(null,inst_47895);
var inst_47901 = cljs.core.count.call(null,inst_47899);
var inst_47881 = inst_47900;
var inst_47882 = inst_47899;
var inst_47883 = inst_47901;
var inst_47884 = (0);
var state_47940__$1 = (function (){var statearr_47974 = state_47940;
(statearr_47974[(12)] = inst_47881);

(statearr_47974[(13)] = inst_47883);

(statearr_47974[(14)] = inst_47884);

(statearr_47974[(15)] = inst_47882);

return statearr_47974;
})();
var statearr_47975_48010 = state_47940__$1;
(statearr_47975_48010[(2)] = null);

(statearr_47975_48010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (10))){
var inst_47881 = (state_47940[(12)]);
var inst_47883 = (state_47940[(13)]);
var inst_47884 = (state_47940[(14)]);
var inst_47882 = (state_47940[(15)]);
var inst_47889 = cljs.core._nth.call(null,inst_47882,inst_47884);
var inst_47890 = cljs.core.async.muxch_STAR_.call(null,inst_47889);
var inst_47891 = cljs.core.async.close_BANG_.call(null,inst_47890);
var inst_47892 = (inst_47884 + (1));
var tmp47970 = inst_47881;
var tmp47971 = inst_47883;
var tmp47972 = inst_47882;
var inst_47881__$1 = tmp47970;
var inst_47882__$1 = tmp47972;
var inst_47883__$1 = tmp47971;
var inst_47884__$1 = inst_47892;
var state_47940__$1 = (function (){var statearr_47976 = state_47940;
(statearr_47976[(12)] = inst_47881__$1);

(statearr_47976[(17)] = inst_47891);

(statearr_47976[(13)] = inst_47883__$1);

(statearr_47976[(14)] = inst_47884__$1);

(statearr_47976[(15)] = inst_47882__$1);

return statearr_47976;
})();
var statearr_47977_48011 = state_47940__$1;
(statearr_47977_48011[(2)] = null);

(statearr_47977_48011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (18))){
var inst_47910 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_47978_48012 = state_47940__$1;
(statearr_47978_48012[(2)] = inst_47910);

(statearr_47978_48012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (8))){
var inst_47883 = (state_47940[(13)]);
var inst_47884 = (state_47940[(14)]);
var inst_47886 = (inst_47884 < inst_47883);
var inst_47887 = inst_47886;
var state_47940__$1 = state_47940;
if(cljs.core.truth_(inst_47887)){
var statearr_47979_48013 = state_47940__$1;
(statearr_47979_48013[(1)] = (10));

} else {
var statearr_47980_48014 = state_47940__$1;
(statearr_47980_48014[(1)] = (11));

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
});})(c__46752__auto___47986,mults,ensure_mult,p))
;
return ((function (switch__46662__auto__,c__46752__auto___47986,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46663__auto__ = null;
var cljs$core$async$state_machine__46663__auto____0 = (function (){
var statearr_47981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47981[(0)] = cljs$core$async$state_machine__46663__auto__);

(statearr_47981[(1)] = (1));

return statearr_47981;
});
var cljs$core$async$state_machine__46663__auto____1 = (function (state_47940){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_47940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e47982){if((e47982 instanceof Object)){
var ex__46666__auto__ = e47982;
var statearr_47983_48015 = state_47940;
(statearr_47983_48015[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48016 = state_47940;
state_47940 = G__48016;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$state_machine__46663__auto__ = function(state_47940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46663__auto____1.call(this,state_47940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46663__auto____0;
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46663__auto____1;
return cljs$core$async$state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___47986,mults,ensure_mult,p))
})();
var state__46754__auto__ = (function (){var statearr_47984 = f__46753__auto__.call(null);
(statearr_47984[(6)] = c__46752__auto___47986);

return statearr_47984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___47986,mults,ensure_mult,p))
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
var G__48018 = arguments.length;
switch (G__48018) {
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
var G__48021 = arguments.length;
switch (G__48021) {
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
var G__48024 = arguments.length;
switch (G__48024) {
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
var c__46752__auto___48091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___48091,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___48091,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48063){
var state_val_48064 = (state_48063[(1)]);
if((state_val_48064 === (7))){
var state_48063__$1 = state_48063;
var statearr_48065_48092 = state_48063__$1;
(statearr_48065_48092[(2)] = null);

(statearr_48065_48092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (1))){
var state_48063__$1 = state_48063;
var statearr_48066_48093 = state_48063__$1;
(statearr_48066_48093[(2)] = null);

(statearr_48066_48093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (4))){
var inst_48027 = (state_48063[(7)]);
var inst_48029 = (inst_48027 < cnt);
var state_48063__$1 = state_48063;
if(cljs.core.truth_(inst_48029)){
var statearr_48067_48094 = state_48063__$1;
(statearr_48067_48094[(1)] = (6));

} else {
var statearr_48068_48095 = state_48063__$1;
(statearr_48068_48095[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (15))){
var inst_48059 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48069_48096 = state_48063__$1;
(statearr_48069_48096[(2)] = inst_48059);

(statearr_48069_48096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (13))){
var inst_48052 = cljs.core.async.close_BANG_.call(null,out);
var state_48063__$1 = state_48063;
var statearr_48070_48097 = state_48063__$1;
(statearr_48070_48097[(2)] = inst_48052);

(statearr_48070_48097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (6))){
var state_48063__$1 = state_48063;
var statearr_48071_48098 = state_48063__$1;
(statearr_48071_48098[(2)] = null);

(statearr_48071_48098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (3))){
var inst_48061 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48063__$1,inst_48061);
} else {
if((state_val_48064 === (12))){
var inst_48049 = (state_48063[(8)]);
var inst_48049__$1 = (state_48063[(2)]);
var inst_48050 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48049__$1);
var state_48063__$1 = (function (){var statearr_48072 = state_48063;
(statearr_48072[(8)] = inst_48049__$1);

return statearr_48072;
})();
if(cljs.core.truth_(inst_48050)){
var statearr_48073_48099 = state_48063__$1;
(statearr_48073_48099[(1)] = (13));

} else {
var statearr_48074_48100 = state_48063__$1;
(statearr_48074_48100[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (2))){
var inst_48026 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48027 = (0);
var state_48063__$1 = (function (){var statearr_48075 = state_48063;
(statearr_48075[(7)] = inst_48027);

(statearr_48075[(9)] = inst_48026);

return statearr_48075;
})();
var statearr_48076_48101 = state_48063__$1;
(statearr_48076_48101[(2)] = null);

(statearr_48076_48101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (11))){
var inst_48027 = (state_48063[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48063,(10),Object,null,(9));
var inst_48036 = chs__$1.call(null,inst_48027);
var inst_48037 = done.call(null,inst_48027);
var inst_48038 = cljs.core.async.take_BANG_.call(null,inst_48036,inst_48037);
var state_48063__$1 = state_48063;
var statearr_48077_48102 = state_48063__$1;
(statearr_48077_48102[(2)] = inst_48038);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48063__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (9))){
var inst_48027 = (state_48063[(7)]);
var inst_48040 = (state_48063[(2)]);
var inst_48041 = (inst_48027 + (1));
var inst_48027__$1 = inst_48041;
var state_48063__$1 = (function (){var statearr_48078 = state_48063;
(statearr_48078[(7)] = inst_48027__$1);

(statearr_48078[(10)] = inst_48040);

return statearr_48078;
})();
var statearr_48079_48103 = state_48063__$1;
(statearr_48079_48103[(2)] = null);

(statearr_48079_48103[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (5))){
var inst_48047 = (state_48063[(2)]);
var state_48063__$1 = (function (){var statearr_48080 = state_48063;
(statearr_48080[(11)] = inst_48047);

return statearr_48080;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48063__$1,(12),dchan);
} else {
if((state_val_48064 === (14))){
var inst_48049 = (state_48063[(8)]);
var inst_48054 = cljs.core.apply.call(null,f,inst_48049);
var state_48063__$1 = state_48063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48063__$1,(16),out,inst_48054);
} else {
if((state_val_48064 === (16))){
var inst_48056 = (state_48063[(2)]);
var state_48063__$1 = (function (){var statearr_48081 = state_48063;
(statearr_48081[(12)] = inst_48056);

return statearr_48081;
})();
var statearr_48082_48104 = state_48063__$1;
(statearr_48082_48104[(2)] = null);

(statearr_48082_48104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (10))){
var inst_48031 = (state_48063[(2)]);
var inst_48032 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48063__$1 = (function (){var statearr_48083 = state_48063;
(statearr_48083[(13)] = inst_48031);

return statearr_48083;
})();
var statearr_48084_48105 = state_48063__$1;
(statearr_48084_48105[(2)] = inst_48032);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48063__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (8))){
var inst_48045 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48085_48106 = state_48063__$1;
(statearr_48085_48106[(2)] = inst_48045);

(statearr_48085_48106[(1)] = (5));


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
});})(c__46752__auto___48091,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46662__auto__,c__46752__auto___48091,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46663__auto__ = null;
var cljs$core$async$state_machine__46663__auto____0 = (function (){
var statearr_48086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48086[(0)] = cljs$core$async$state_machine__46663__auto__);

(statearr_48086[(1)] = (1));

return statearr_48086;
});
var cljs$core$async$state_machine__46663__auto____1 = (function (state_48063){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_48063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e48087){if((e48087 instanceof Object)){
var ex__46666__auto__ = e48087;
var statearr_48088_48107 = state_48063;
(statearr_48088_48107[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48108 = state_48063;
state_48063 = G__48108;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$state_machine__46663__auto__ = function(state_48063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46663__auto____1.call(this,state_48063);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46663__auto____0;
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46663__auto____1;
return cljs$core$async$state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___48091,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46754__auto__ = (function (){var statearr_48089 = f__46753__auto__.call(null);
(statearr_48089[(6)] = c__46752__auto___48091);

return statearr_48089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___48091,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__48111 = arguments.length;
switch (G__48111) {
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
var c__46752__auto___48165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___48165,out){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___48165,out){
return (function (state_48143){
var state_val_48144 = (state_48143[(1)]);
if((state_val_48144 === (7))){
var inst_48123 = (state_48143[(7)]);
var inst_48122 = (state_48143[(8)]);
var inst_48122__$1 = (state_48143[(2)]);
var inst_48123__$1 = cljs.core.nth.call(null,inst_48122__$1,(0),null);
var inst_48124 = cljs.core.nth.call(null,inst_48122__$1,(1),null);
var inst_48125 = (inst_48123__$1 == null);
var state_48143__$1 = (function (){var statearr_48145 = state_48143;
(statearr_48145[(9)] = inst_48124);

(statearr_48145[(7)] = inst_48123__$1);

(statearr_48145[(8)] = inst_48122__$1);

return statearr_48145;
})();
if(cljs.core.truth_(inst_48125)){
var statearr_48146_48166 = state_48143__$1;
(statearr_48146_48166[(1)] = (8));

} else {
var statearr_48147_48167 = state_48143__$1;
(statearr_48147_48167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (1))){
var inst_48112 = cljs.core.vec.call(null,chs);
var inst_48113 = inst_48112;
var state_48143__$1 = (function (){var statearr_48148 = state_48143;
(statearr_48148[(10)] = inst_48113);

return statearr_48148;
})();
var statearr_48149_48168 = state_48143__$1;
(statearr_48149_48168[(2)] = null);

(statearr_48149_48168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (4))){
var inst_48113 = (state_48143[(10)]);
var state_48143__$1 = state_48143;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48143__$1,(7),inst_48113);
} else {
if((state_val_48144 === (6))){
var inst_48139 = (state_48143[(2)]);
var state_48143__$1 = state_48143;
var statearr_48150_48169 = state_48143__$1;
(statearr_48150_48169[(2)] = inst_48139);

(statearr_48150_48169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (3))){
var inst_48141 = (state_48143[(2)]);
var state_48143__$1 = state_48143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48143__$1,inst_48141);
} else {
if((state_val_48144 === (2))){
var inst_48113 = (state_48143[(10)]);
var inst_48115 = cljs.core.count.call(null,inst_48113);
var inst_48116 = (inst_48115 > (0));
var state_48143__$1 = state_48143;
if(cljs.core.truth_(inst_48116)){
var statearr_48152_48170 = state_48143__$1;
(statearr_48152_48170[(1)] = (4));

} else {
var statearr_48153_48171 = state_48143__$1;
(statearr_48153_48171[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (11))){
var inst_48113 = (state_48143[(10)]);
var inst_48132 = (state_48143[(2)]);
var tmp48151 = inst_48113;
var inst_48113__$1 = tmp48151;
var state_48143__$1 = (function (){var statearr_48154 = state_48143;
(statearr_48154[(11)] = inst_48132);

(statearr_48154[(10)] = inst_48113__$1);

return statearr_48154;
})();
var statearr_48155_48172 = state_48143__$1;
(statearr_48155_48172[(2)] = null);

(statearr_48155_48172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (9))){
var inst_48123 = (state_48143[(7)]);
var state_48143__$1 = state_48143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48143__$1,(11),out,inst_48123);
} else {
if((state_val_48144 === (5))){
var inst_48137 = cljs.core.async.close_BANG_.call(null,out);
var state_48143__$1 = state_48143;
var statearr_48156_48173 = state_48143__$1;
(statearr_48156_48173[(2)] = inst_48137);

(statearr_48156_48173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (10))){
var inst_48135 = (state_48143[(2)]);
var state_48143__$1 = state_48143;
var statearr_48157_48174 = state_48143__$1;
(statearr_48157_48174[(2)] = inst_48135);

(statearr_48157_48174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (8))){
var inst_48124 = (state_48143[(9)]);
var inst_48123 = (state_48143[(7)]);
var inst_48122 = (state_48143[(8)]);
var inst_48113 = (state_48143[(10)]);
var inst_48127 = (function (){var cs = inst_48113;
var vec__48118 = inst_48122;
var v = inst_48123;
var c = inst_48124;
return ((function (cs,vec__48118,v,c,inst_48124,inst_48123,inst_48122,inst_48113,state_val_48144,c__46752__auto___48165,out){
return (function (p1__48109_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48109_SHARP_);
});
;})(cs,vec__48118,v,c,inst_48124,inst_48123,inst_48122,inst_48113,state_val_48144,c__46752__auto___48165,out))
})();
var inst_48128 = cljs.core.filterv.call(null,inst_48127,inst_48113);
var inst_48113__$1 = inst_48128;
var state_48143__$1 = (function (){var statearr_48158 = state_48143;
(statearr_48158[(10)] = inst_48113__$1);

return statearr_48158;
})();
var statearr_48159_48175 = state_48143__$1;
(statearr_48159_48175[(2)] = null);

(statearr_48159_48175[(1)] = (2));


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
});})(c__46752__auto___48165,out))
;
return ((function (switch__46662__auto__,c__46752__auto___48165,out){
return (function() {
var cljs$core$async$state_machine__46663__auto__ = null;
var cljs$core$async$state_machine__46663__auto____0 = (function (){
var statearr_48160 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48160[(0)] = cljs$core$async$state_machine__46663__auto__);

(statearr_48160[(1)] = (1));

return statearr_48160;
});
var cljs$core$async$state_machine__46663__auto____1 = (function (state_48143){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_48143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e48161){if((e48161 instanceof Object)){
var ex__46666__auto__ = e48161;
var statearr_48162_48176 = state_48143;
(statearr_48162_48176[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48177 = state_48143;
state_48143 = G__48177;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$state_machine__46663__auto__ = function(state_48143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46663__auto____1.call(this,state_48143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46663__auto____0;
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46663__auto____1;
return cljs$core$async$state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___48165,out))
})();
var state__46754__auto__ = (function (){var statearr_48163 = f__46753__auto__.call(null);
(statearr_48163[(6)] = c__46752__auto___48165);

return statearr_48163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___48165,out))
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
var G__48179 = arguments.length;
switch (G__48179) {
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
var c__46752__auto___48224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___48224,out){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___48224,out){
return (function (state_48203){
var state_val_48204 = (state_48203[(1)]);
if((state_val_48204 === (7))){
var inst_48185 = (state_48203[(7)]);
var inst_48185__$1 = (state_48203[(2)]);
var inst_48186 = (inst_48185__$1 == null);
var inst_48187 = cljs.core.not.call(null,inst_48186);
var state_48203__$1 = (function (){var statearr_48205 = state_48203;
(statearr_48205[(7)] = inst_48185__$1);

return statearr_48205;
})();
if(inst_48187){
var statearr_48206_48225 = state_48203__$1;
(statearr_48206_48225[(1)] = (8));

} else {
var statearr_48207_48226 = state_48203__$1;
(statearr_48207_48226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (1))){
var inst_48180 = (0);
var state_48203__$1 = (function (){var statearr_48208 = state_48203;
(statearr_48208[(8)] = inst_48180);

return statearr_48208;
})();
var statearr_48209_48227 = state_48203__$1;
(statearr_48209_48227[(2)] = null);

(statearr_48209_48227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (4))){
var state_48203__$1 = state_48203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48203__$1,(7),ch);
} else {
if((state_val_48204 === (6))){
var inst_48198 = (state_48203[(2)]);
var state_48203__$1 = state_48203;
var statearr_48210_48228 = state_48203__$1;
(statearr_48210_48228[(2)] = inst_48198);

(statearr_48210_48228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (3))){
var inst_48200 = (state_48203[(2)]);
var inst_48201 = cljs.core.async.close_BANG_.call(null,out);
var state_48203__$1 = (function (){var statearr_48211 = state_48203;
(statearr_48211[(9)] = inst_48200);

return statearr_48211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48203__$1,inst_48201);
} else {
if((state_val_48204 === (2))){
var inst_48180 = (state_48203[(8)]);
var inst_48182 = (inst_48180 < n);
var state_48203__$1 = state_48203;
if(cljs.core.truth_(inst_48182)){
var statearr_48212_48229 = state_48203__$1;
(statearr_48212_48229[(1)] = (4));

} else {
var statearr_48213_48230 = state_48203__$1;
(statearr_48213_48230[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (11))){
var inst_48180 = (state_48203[(8)]);
var inst_48190 = (state_48203[(2)]);
var inst_48191 = (inst_48180 + (1));
var inst_48180__$1 = inst_48191;
var state_48203__$1 = (function (){var statearr_48214 = state_48203;
(statearr_48214[(10)] = inst_48190);

(statearr_48214[(8)] = inst_48180__$1);

return statearr_48214;
})();
var statearr_48215_48231 = state_48203__$1;
(statearr_48215_48231[(2)] = null);

(statearr_48215_48231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (9))){
var state_48203__$1 = state_48203;
var statearr_48216_48232 = state_48203__$1;
(statearr_48216_48232[(2)] = null);

(statearr_48216_48232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (5))){
var state_48203__$1 = state_48203;
var statearr_48217_48233 = state_48203__$1;
(statearr_48217_48233[(2)] = null);

(statearr_48217_48233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (10))){
var inst_48195 = (state_48203[(2)]);
var state_48203__$1 = state_48203;
var statearr_48218_48234 = state_48203__$1;
(statearr_48218_48234[(2)] = inst_48195);

(statearr_48218_48234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (8))){
var inst_48185 = (state_48203[(7)]);
var state_48203__$1 = state_48203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48203__$1,(11),out,inst_48185);
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
});})(c__46752__auto___48224,out))
;
return ((function (switch__46662__auto__,c__46752__auto___48224,out){
return (function() {
var cljs$core$async$state_machine__46663__auto__ = null;
var cljs$core$async$state_machine__46663__auto____0 = (function (){
var statearr_48219 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48219[(0)] = cljs$core$async$state_machine__46663__auto__);

(statearr_48219[(1)] = (1));

return statearr_48219;
});
var cljs$core$async$state_machine__46663__auto____1 = (function (state_48203){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_48203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e48220){if((e48220 instanceof Object)){
var ex__46666__auto__ = e48220;
var statearr_48221_48235 = state_48203;
(statearr_48221_48235[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48236 = state_48203;
state_48203 = G__48236;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$state_machine__46663__auto__ = function(state_48203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46663__auto____1.call(this,state_48203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46663__auto____0;
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46663__auto____1;
return cljs$core$async$state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___48224,out))
})();
var state__46754__auto__ = (function (){var statearr_48222 = f__46753__auto__.call(null);
(statearr_48222[(6)] = c__46752__auto___48224);

return statearr_48222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___48224,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48238 = (function (f,ch,meta48239){
this.f = f;
this.ch = ch;
this.meta48239 = meta48239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48240,meta48239__$1){
var self__ = this;
var _48240__$1 = this;
return (new cljs.core.async.t_cljs$core$async48238(self__.f,self__.ch,meta48239__$1));
});

cljs.core.async.t_cljs$core$async48238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48240){
var self__ = this;
var _48240__$1 = this;
return self__.meta48239;
});

cljs.core.async.t_cljs$core$async48238.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48238.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48238.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48241 = (function (f,ch,meta48239,_,fn1,meta48242){
this.f = f;
this.ch = ch;
this.meta48239 = meta48239;
this._ = _;
this.fn1 = fn1;
this.meta48242 = meta48242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48243,meta48242__$1){
var self__ = this;
var _48243__$1 = this;
return (new cljs.core.async.t_cljs$core$async48241(self__.f,self__.ch,self__.meta48239,self__._,self__.fn1,meta48242__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48243){
var self__ = this;
var _48243__$1 = this;
return self__.meta48242;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48241.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48241.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48241.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48241.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48237_SHARP_){
return f1.call(null,(((p1__48237_SHARP_ == null))?null:self__.f.call(null,p1__48237_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48241.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48239","meta48239",47155737,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48238","cljs.core.async/t_cljs$core$async48238",-1471322557,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48242","meta48242",-1282859541,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48241";

cljs.core.async.t_cljs$core$async48241.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async48241");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48241 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48241(f__$1,ch__$1,meta48239__$1,___$2,fn1__$1,meta48242){
return (new cljs.core.async.t_cljs$core$async48241(f__$1,ch__$1,meta48239__$1,___$2,fn1__$1,meta48242));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48241(self__.f,self__.ch,self__.meta48239,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30511__auto__ = ret;
if(cljs.core.truth_(and__30511__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30511__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48238.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48239","meta48239",47155737,null)], null);
});

cljs.core.async.t_cljs$core$async48238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48238";

cljs.core.async.t_cljs$core$async48238.cljs$lang$ctorPrWriter = (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async48238");
});

cljs.core.async.__GT_t_cljs$core$async48238 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48238(f__$1,ch__$1,meta48239){
return (new cljs.core.async.t_cljs$core$async48238(f__$1,ch__$1,meta48239));
});

}

return (new cljs.core.async.t_cljs$core$async48238(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48244 = (function (f,ch,meta48245){
this.f = f;
this.ch = ch;
this.meta48245 = meta48245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48246,meta48245__$1){
var self__ = this;
var _48246__$1 = this;
return (new cljs.core.async.t_cljs$core$async48244(self__.f,self__.ch,meta48245__$1));
});

cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48246){
var self__ = this;
var _48246__$1 = this;
return self__.meta48245;
});

cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48245","meta48245",-94065709,null)], null);
});

cljs.core.async.t_cljs$core$async48244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48244";

cljs.core.async.t_cljs$core$async48244.cljs$lang$ctorPrWriter = (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async48244");
});

cljs.core.async.__GT_t_cljs$core$async48244 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48244(f__$1,ch__$1,meta48245){
return (new cljs.core.async.t_cljs$core$async48244(f__$1,ch__$1,meta48245));
});

}

return (new cljs.core.async.t_cljs$core$async48244(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48247 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48247 = (function (p,ch,meta48248){
this.p = p;
this.ch = ch;
this.meta48248 = meta48248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48249,meta48248__$1){
var self__ = this;
var _48249__$1 = this;
return (new cljs.core.async.t_cljs$core$async48247(self__.p,self__.ch,meta48248__$1));
});

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48249){
var self__ = this;
var _48249__$1 = this;
return self__.meta48248;
});

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48248","meta48248",-1579486362,null)], null);
});

cljs.core.async.t_cljs$core$async48247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48247";

cljs.core.async.t_cljs$core$async48247.cljs$lang$ctorPrWriter = (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.core.async/t_cljs$core$async48247");
});

cljs.core.async.__GT_t_cljs$core$async48247 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48247(p__$1,ch__$1,meta48248){
return (new cljs.core.async.t_cljs$core$async48247(p__$1,ch__$1,meta48248));
});

}

return (new cljs.core.async.t_cljs$core$async48247(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48251 = arguments.length;
switch (G__48251) {
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
var c__46752__auto___48291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___48291,out){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___48291,out){
return (function (state_48272){
var state_val_48273 = (state_48272[(1)]);
if((state_val_48273 === (7))){
var inst_48268 = (state_48272[(2)]);
var state_48272__$1 = state_48272;
var statearr_48274_48292 = state_48272__$1;
(statearr_48274_48292[(2)] = inst_48268);

(statearr_48274_48292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48273 === (1))){
var state_48272__$1 = state_48272;
var statearr_48275_48293 = state_48272__$1;
(statearr_48275_48293[(2)] = null);

(statearr_48275_48293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48273 === (4))){
var inst_48254 = (state_48272[(7)]);
var inst_48254__$1 = (state_48272[(2)]);
var inst_48255 = (inst_48254__$1 == null);
var state_48272__$1 = (function (){var statearr_48276 = state_48272;
(statearr_48276[(7)] = inst_48254__$1);

return statearr_48276;
})();
if(cljs.core.truth_(inst_48255)){
var statearr_48277_48294 = state_48272__$1;
(statearr_48277_48294[(1)] = (5));

} else {
var statearr_48278_48295 = state_48272__$1;
(statearr_48278_48295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48273 === (6))){
var inst_48254 = (state_48272[(7)]);
var inst_48259 = p.call(null,inst_48254);
var state_48272__$1 = state_48272;
if(cljs.core.truth_(inst_48259)){
var statearr_48279_48296 = state_48272__$1;
(statearr_48279_48296[(1)] = (8));

} else {
var statearr_48280_48297 = state_48272__$1;
(statearr_48280_48297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48273 === (3))){
var inst_48270 = (state_48272[(2)]);
var state_48272__$1 = state_48272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48272__$1,inst_48270);
} else {
if((state_val_48273 === (2))){
var state_48272__$1 = state_48272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48272__$1,(4),ch);
} else {
if((state_val_48273 === (11))){
var inst_48262 = (state_48272[(2)]);
var state_48272__$1 = state_48272;
var statearr_48281_48298 = state_48272__$1;
(statearr_48281_48298[(2)] = inst_48262);

(statearr_48281_48298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48273 === (9))){
var state_48272__$1 = state_48272;
var statearr_48282_48299 = state_48272__$1;
(statearr_48282_48299[(2)] = null);

(statearr_48282_48299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48273 === (5))){
var inst_48257 = cljs.core.async.close_BANG_.call(null,out);
var state_48272__$1 = state_48272;
var statearr_48283_48300 = state_48272__$1;
(statearr_48283_48300[(2)] = inst_48257);

(statearr_48283_48300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48273 === (10))){
var inst_48265 = (state_48272[(2)]);
var state_48272__$1 = (function (){var statearr_48284 = state_48272;
(statearr_48284[(8)] = inst_48265);

return statearr_48284;
})();
var statearr_48285_48301 = state_48272__$1;
(statearr_48285_48301[(2)] = null);

(statearr_48285_48301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48273 === (8))){
var inst_48254 = (state_48272[(7)]);
var state_48272__$1 = state_48272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48272__$1,(11),out,inst_48254);
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
});})(c__46752__auto___48291,out))
;
return ((function (switch__46662__auto__,c__46752__auto___48291,out){
return (function() {
var cljs$core$async$state_machine__46663__auto__ = null;
var cljs$core$async$state_machine__46663__auto____0 = (function (){
var statearr_48286 = [null,null,null,null,null,null,null,null,null];
(statearr_48286[(0)] = cljs$core$async$state_machine__46663__auto__);

(statearr_48286[(1)] = (1));

return statearr_48286;
});
var cljs$core$async$state_machine__46663__auto____1 = (function (state_48272){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_48272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e48287){if((e48287 instanceof Object)){
var ex__46666__auto__ = e48287;
var statearr_48288_48302 = state_48272;
(statearr_48288_48302[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48303 = state_48272;
state_48272 = G__48303;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$state_machine__46663__auto__ = function(state_48272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46663__auto____1.call(this,state_48272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46663__auto____0;
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46663__auto____1;
return cljs$core$async$state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___48291,out))
})();
var state__46754__auto__ = (function (){var statearr_48289 = f__46753__auto__.call(null);
(statearr_48289[(6)] = c__46752__auto___48291);

return statearr_48289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___48291,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48305 = arguments.length;
switch (G__48305) {
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
var c__46752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto__){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto__){
return (function (state_48368){
var state_val_48369 = (state_48368[(1)]);
if((state_val_48369 === (7))){
var inst_48364 = (state_48368[(2)]);
var state_48368__$1 = state_48368;
var statearr_48370_48408 = state_48368__$1;
(statearr_48370_48408[(2)] = inst_48364);

(statearr_48370_48408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (20))){
var inst_48334 = (state_48368[(7)]);
var inst_48345 = (state_48368[(2)]);
var inst_48346 = cljs.core.next.call(null,inst_48334);
var inst_48320 = inst_48346;
var inst_48321 = null;
var inst_48322 = (0);
var inst_48323 = (0);
var state_48368__$1 = (function (){var statearr_48371 = state_48368;
(statearr_48371[(8)] = inst_48323);

(statearr_48371[(9)] = inst_48321);

(statearr_48371[(10)] = inst_48345);

(statearr_48371[(11)] = inst_48322);

(statearr_48371[(12)] = inst_48320);

return statearr_48371;
})();
var statearr_48372_48409 = state_48368__$1;
(statearr_48372_48409[(2)] = null);

(statearr_48372_48409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (1))){
var state_48368__$1 = state_48368;
var statearr_48373_48410 = state_48368__$1;
(statearr_48373_48410[(2)] = null);

(statearr_48373_48410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (4))){
var inst_48309 = (state_48368[(13)]);
var inst_48309__$1 = (state_48368[(2)]);
var inst_48310 = (inst_48309__$1 == null);
var state_48368__$1 = (function (){var statearr_48374 = state_48368;
(statearr_48374[(13)] = inst_48309__$1);

return statearr_48374;
})();
if(cljs.core.truth_(inst_48310)){
var statearr_48375_48411 = state_48368__$1;
(statearr_48375_48411[(1)] = (5));

} else {
var statearr_48376_48412 = state_48368__$1;
(statearr_48376_48412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (15))){
var state_48368__$1 = state_48368;
var statearr_48380_48413 = state_48368__$1;
(statearr_48380_48413[(2)] = null);

(statearr_48380_48413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (21))){
var state_48368__$1 = state_48368;
var statearr_48381_48414 = state_48368__$1;
(statearr_48381_48414[(2)] = null);

(statearr_48381_48414[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (13))){
var inst_48323 = (state_48368[(8)]);
var inst_48321 = (state_48368[(9)]);
var inst_48322 = (state_48368[(11)]);
var inst_48320 = (state_48368[(12)]);
var inst_48330 = (state_48368[(2)]);
var inst_48331 = (inst_48323 + (1));
var tmp48377 = inst_48321;
var tmp48378 = inst_48322;
var tmp48379 = inst_48320;
var inst_48320__$1 = tmp48379;
var inst_48321__$1 = tmp48377;
var inst_48322__$1 = tmp48378;
var inst_48323__$1 = inst_48331;
var state_48368__$1 = (function (){var statearr_48382 = state_48368;
(statearr_48382[(8)] = inst_48323__$1);

(statearr_48382[(9)] = inst_48321__$1);

(statearr_48382[(14)] = inst_48330);

(statearr_48382[(11)] = inst_48322__$1);

(statearr_48382[(12)] = inst_48320__$1);

return statearr_48382;
})();
var statearr_48383_48415 = state_48368__$1;
(statearr_48383_48415[(2)] = null);

(statearr_48383_48415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (22))){
var state_48368__$1 = state_48368;
var statearr_48384_48416 = state_48368__$1;
(statearr_48384_48416[(2)] = null);

(statearr_48384_48416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (6))){
var inst_48309 = (state_48368[(13)]);
var inst_48318 = f.call(null,inst_48309);
var inst_48319 = cljs.core.seq.call(null,inst_48318);
var inst_48320 = inst_48319;
var inst_48321 = null;
var inst_48322 = (0);
var inst_48323 = (0);
var state_48368__$1 = (function (){var statearr_48385 = state_48368;
(statearr_48385[(8)] = inst_48323);

(statearr_48385[(9)] = inst_48321);

(statearr_48385[(11)] = inst_48322);

(statearr_48385[(12)] = inst_48320);

return statearr_48385;
})();
var statearr_48386_48417 = state_48368__$1;
(statearr_48386_48417[(2)] = null);

(statearr_48386_48417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (17))){
var inst_48334 = (state_48368[(7)]);
var inst_48338 = cljs.core.chunk_first.call(null,inst_48334);
var inst_48339 = cljs.core.chunk_rest.call(null,inst_48334);
var inst_48340 = cljs.core.count.call(null,inst_48338);
var inst_48320 = inst_48339;
var inst_48321 = inst_48338;
var inst_48322 = inst_48340;
var inst_48323 = (0);
var state_48368__$1 = (function (){var statearr_48387 = state_48368;
(statearr_48387[(8)] = inst_48323);

(statearr_48387[(9)] = inst_48321);

(statearr_48387[(11)] = inst_48322);

(statearr_48387[(12)] = inst_48320);

return statearr_48387;
})();
var statearr_48388_48418 = state_48368__$1;
(statearr_48388_48418[(2)] = null);

(statearr_48388_48418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (3))){
var inst_48366 = (state_48368[(2)]);
var state_48368__$1 = state_48368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48368__$1,inst_48366);
} else {
if((state_val_48369 === (12))){
var inst_48354 = (state_48368[(2)]);
var state_48368__$1 = state_48368;
var statearr_48389_48419 = state_48368__$1;
(statearr_48389_48419[(2)] = inst_48354);

(statearr_48389_48419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (2))){
var state_48368__$1 = state_48368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48368__$1,(4),in$);
} else {
if((state_val_48369 === (23))){
var inst_48362 = (state_48368[(2)]);
var state_48368__$1 = state_48368;
var statearr_48390_48420 = state_48368__$1;
(statearr_48390_48420[(2)] = inst_48362);

(statearr_48390_48420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (19))){
var inst_48349 = (state_48368[(2)]);
var state_48368__$1 = state_48368;
var statearr_48391_48421 = state_48368__$1;
(statearr_48391_48421[(2)] = inst_48349);

(statearr_48391_48421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (11))){
var inst_48334 = (state_48368[(7)]);
var inst_48320 = (state_48368[(12)]);
var inst_48334__$1 = cljs.core.seq.call(null,inst_48320);
var state_48368__$1 = (function (){var statearr_48392 = state_48368;
(statearr_48392[(7)] = inst_48334__$1);

return statearr_48392;
})();
if(inst_48334__$1){
var statearr_48393_48422 = state_48368__$1;
(statearr_48393_48422[(1)] = (14));

} else {
var statearr_48394_48423 = state_48368__$1;
(statearr_48394_48423[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (9))){
var inst_48356 = (state_48368[(2)]);
var inst_48357 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48368__$1 = (function (){var statearr_48395 = state_48368;
(statearr_48395[(15)] = inst_48356);

return statearr_48395;
})();
if(cljs.core.truth_(inst_48357)){
var statearr_48396_48424 = state_48368__$1;
(statearr_48396_48424[(1)] = (21));

} else {
var statearr_48397_48425 = state_48368__$1;
(statearr_48397_48425[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (5))){
var inst_48312 = cljs.core.async.close_BANG_.call(null,out);
var state_48368__$1 = state_48368;
var statearr_48398_48426 = state_48368__$1;
(statearr_48398_48426[(2)] = inst_48312);

(statearr_48398_48426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (14))){
var inst_48334 = (state_48368[(7)]);
var inst_48336 = cljs.core.chunked_seq_QMARK_.call(null,inst_48334);
var state_48368__$1 = state_48368;
if(inst_48336){
var statearr_48399_48427 = state_48368__$1;
(statearr_48399_48427[(1)] = (17));

} else {
var statearr_48400_48428 = state_48368__$1;
(statearr_48400_48428[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (16))){
var inst_48352 = (state_48368[(2)]);
var state_48368__$1 = state_48368;
var statearr_48401_48429 = state_48368__$1;
(statearr_48401_48429[(2)] = inst_48352);

(statearr_48401_48429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (10))){
var inst_48323 = (state_48368[(8)]);
var inst_48321 = (state_48368[(9)]);
var inst_48328 = cljs.core._nth.call(null,inst_48321,inst_48323);
var state_48368__$1 = state_48368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48368__$1,(13),out,inst_48328);
} else {
if((state_val_48369 === (18))){
var inst_48334 = (state_48368[(7)]);
var inst_48343 = cljs.core.first.call(null,inst_48334);
var state_48368__$1 = state_48368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48368__$1,(20),out,inst_48343);
} else {
if((state_val_48369 === (8))){
var inst_48323 = (state_48368[(8)]);
var inst_48322 = (state_48368[(11)]);
var inst_48325 = (inst_48323 < inst_48322);
var inst_48326 = inst_48325;
var state_48368__$1 = state_48368;
if(cljs.core.truth_(inst_48326)){
var statearr_48402_48430 = state_48368__$1;
(statearr_48402_48430[(1)] = (10));

} else {
var statearr_48403_48431 = state_48368__$1;
(statearr_48403_48431[(1)] = (11));

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
});})(c__46752__auto__))
;
return ((function (switch__46662__auto__,c__46752__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46663__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46663__auto____0 = (function (){
var statearr_48404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48404[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46663__auto__);

(statearr_48404[(1)] = (1));

return statearr_48404;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46663__auto____1 = (function (state_48368){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_48368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e48405){if((e48405 instanceof Object)){
var ex__46666__auto__ = e48405;
var statearr_48406_48432 = state_48368;
(statearr_48406_48432[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48433 = state_48368;
state_48368 = G__48433;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46663__auto__ = function(state_48368){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46663__auto____1.call(this,state_48368);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46663__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46663__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto__))
})();
var state__46754__auto__ = (function (){var statearr_48407 = f__46753__auto__.call(null);
(statearr_48407[(6)] = c__46752__auto__);

return statearr_48407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto__))
);

return c__46752__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48435 = arguments.length;
switch (G__48435) {
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
var G__48438 = arguments.length;
switch (G__48438) {
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
var G__48441 = arguments.length;
switch (G__48441) {
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
var c__46752__auto___48488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___48488,out){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___48488,out){
return (function (state_48465){
var state_val_48466 = (state_48465[(1)]);
if((state_val_48466 === (7))){
var inst_48460 = (state_48465[(2)]);
var state_48465__$1 = state_48465;
var statearr_48467_48489 = state_48465__$1;
(statearr_48467_48489[(2)] = inst_48460);

(statearr_48467_48489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (1))){
var inst_48442 = null;
var state_48465__$1 = (function (){var statearr_48468 = state_48465;
(statearr_48468[(7)] = inst_48442);

return statearr_48468;
})();
var statearr_48469_48490 = state_48465__$1;
(statearr_48469_48490[(2)] = null);

(statearr_48469_48490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (4))){
var inst_48445 = (state_48465[(8)]);
var inst_48445__$1 = (state_48465[(2)]);
var inst_48446 = (inst_48445__$1 == null);
var inst_48447 = cljs.core.not.call(null,inst_48446);
var state_48465__$1 = (function (){var statearr_48470 = state_48465;
(statearr_48470[(8)] = inst_48445__$1);

return statearr_48470;
})();
if(inst_48447){
var statearr_48471_48491 = state_48465__$1;
(statearr_48471_48491[(1)] = (5));

} else {
var statearr_48472_48492 = state_48465__$1;
(statearr_48472_48492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (6))){
var state_48465__$1 = state_48465;
var statearr_48473_48493 = state_48465__$1;
(statearr_48473_48493[(2)] = null);

(statearr_48473_48493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (3))){
var inst_48462 = (state_48465[(2)]);
var inst_48463 = cljs.core.async.close_BANG_.call(null,out);
var state_48465__$1 = (function (){var statearr_48474 = state_48465;
(statearr_48474[(9)] = inst_48462);

return statearr_48474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48465__$1,inst_48463);
} else {
if((state_val_48466 === (2))){
var state_48465__$1 = state_48465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48465__$1,(4),ch);
} else {
if((state_val_48466 === (11))){
var inst_48445 = (state_48465[(8)]);
var inst_48454 = (state_48465[(2)]);
var inst_48442 = inst_48445;
var state_48465__$1 = (function (){var statearr_48475 = state_48465;
(statearr_48475[(7)] = inst_48442);

(statearr_48475[(10)] = inst_48454);

return statearr_48475;
})();
var statearr_48476_48494 = state_48465__$1;
(statearr_48476_48494[(2)] = null);

(statearr_48476_48494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (9))){
var inst_48445 = (state_48465[(8)]);
var state_48465__$1 = state_48465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48465__$1,(11),out,inst_48445);
} else {
if((state_val_48466 === (5))){
var inst_48442 = (state_48465[(7)]);
var inst_48445 = (state_48465[(8)]);
var inst_48449 = cljs.core._EQ_.call(null,inst_48445,inst_48442);
var state_48465__$1 = state_48465;
if(inst_48449){
var statearr_48478_48495 = state_48465__$1;
(statearr_48478_48495[(1)] = (8));

} else {
var statearr_48479_48496 = state_48465__$1;
(statearr_48479_48496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (10))){
var inst_48457 = (state_48465[(2)]);
var state_48465__$1 = state_48465;
var statearr_48480_48497 = state_48465__$1;
(statearr_48480_48497[(2)] = inst_48457);

(statearr_48480_48497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (8))){
var inst_48442 = (state_48465[(7)]);
var tmp48477 = inst_48442;
var inst_48442__$1 = tmp48477;
var state_48465__$1 = (function (){var statearr_48481 = state_48465;
(statearr_48481[(7)] = inst_48442__$1);

return statearr_48481;
})();
var statearr_48482_48498 = state_48465__$1;
(statearr_48482_48498[(2)] = null);

(statearr_48482_48498[(1)] = (2));


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
});})(c__46752__auto___48488,out))
;
return ((function (switch__46662__auto__,c__46752__auto___48488,out){
return (function() {
var cljs$core$async$state_machine__46663__auto__ = null;
var cljs$core$async$state_machine__46663__auto____0 = (function (){
var statearr_48483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48483[(0)] = cljs$core$async$state_machine__46663__auto__);

(statearr_48483[(1)] = (1));

return statearr_48483;
});
var cljs$core$async$state_machine__46663__auto____1 = (function (state_48465){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_48465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e48484){if((e48484 instanceof Object)){
var ex__46666__auto__ = e48484;
var statearr_48485_48499 = state_48465;
(statearr_48485_48499[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48500 = state_48465;
state_48465 = G__48500;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$state_machine__46663__auto__ = function(state_48465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46663__auto____1.call(this,state_48465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46663__auto____0;
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46663__auto____1;
return cljs$core$async$state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___48488,out))
})();
var state__46754__auto__ = (function (){var statearr_48486 = f__46753__auto__.call(null);
(statearr_48486[(6)] = c__46752__auto___48488);

return statearr_48486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___48488,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48502 = arguments.length;
switch (G__48502) {
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
var c__46752__auto___48568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___48568,out){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___48568,out){
return (function (state_48540){
var state_val_48541 = (state_48540[(1)]);
if((state_val_48541 === (7))){
var inst_48536 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
var statearr_48542_48569 = state_48540__$1;
(statearr_48542_48569[(2)] = inst_48536);

(statearr_48542_48569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (1))){
var inst_48503 = (new Array(n));
var inst_48504 = inst_48503;
var inst_48505 = (0);
var state_48540__$1 = (function (){var statearr_48543 = state_48540;
(statearr_48543[(7)] = inst_48505);

(statearr_48543[(8)] = inst_48504);

return statearr_48543;
})();
var statearr_48544_48570 = state_48540__$1;
(statearr_48544_48570[(2)] = null);

(statearr_48544_48570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (4))){
var inst_48508 = (state_48540[(9)]);
var inst_48508__$1 = (state_48540[(2)]);
var inst_48509 = (inst_48508__$1 == null);
var inst_48510 = cljs.core.not.call(null,inst_48509);
var state_48540__$1 = (function (){var statearr_48545 = state_48540;
(statearr_48545[(9)] = inst_48508__$1);

return statearr_48545;
})();
if(inst_48510){
var statearr_48546_48571 = state_48540__$1;
(statearr_48546_48571[(1)] = (5));

} else {
var statearr_48547_48572 = state_48540__$1;
(statearr_48547_48572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (15))){
var inst_48530 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
var statearr_48548_48573 = state_48540__$1;
(statearr_48548_48573[(2)] = inst_48530);

(statearr_48548_48573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (13))){
var state_48540__$1 = state_48540;
var statearr_48549_48574 = state_48540__$1;
(statearr_48549_48574[(2)] = null);

(statearr_48549_48574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (6))){
var inst_48505 = (state_48540[(7)]);
var inst_48526 = (inst_48505 > (0));
var state_48540__$1 = state_48540;
if(cljs.core.truth_(inst_48526)){
var statearr_48550_48575 = state_48540__$1;
(statearr_48550_48575[(1)] = (12));

} else {
var statearr_48551_48576 = state_48540__$1;
(statearr_48551_48576[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (3))){
var inst_48538 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48540__$1,inst_48538);
} else {
if((state_val_48541 === (12))){
var inst_48504 = (state_48540[(8)]);
var inst_48528 = cljs.core.vec.call(null,inst_48504);
var state_48540__$1 = state_48540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48540__$1,(15),out,inst_48528);
} else {
if((state_val_48541 === (2))){
var state_48540__$1 = state_48540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48540__$1,(4),ch);
} else {
if((state_val_48541 === (11))){
var inst_48520 = (state_48540[(2)]);
var inst_48521 = (new Array(n));
var inst_48504 = inst_48521;
var inst_48505 = (0);
var state_48540__$1 = (function (){var statearr_48552 = state_48540;
(statearr_48552[(7)] = inst_48505);

(statearr_48552[(8)] = inst_48504);

(statearr_48552[(10)] = inst_48520);

return statearr_48552;
})();
var statearr_48553_48577 = state_48540__$1;
(statearr_48553_48577[(2)] = null);

(statearr_48553_48577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (9))){
var inst_48504 = (state_48540[(8)]);
var inst_48518 = cljs.core.vec.call(null,inst_48504);
var state_48540__$1 = state_48540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48540__$1,(11),out,inst_48518);
} else {
if((state_val_48541 === (5))){
var inst_48508 = (state_48540[(9)]);
var inst_48505 = (state_48540[(7)]);
var inst_48504 = (state_48540[(8)]);
var inst_48513 = (state_48540[(11)]);
var inst_48512 = (inst_48504[inst_48505] = inst_48508);
var inst_48513__$1 = (inst_48505 + (1));
var inst_48514 = (inst_48513__$1 < n);
var state_48540__$1 = (function (){var statearr_48554 = state_48540;
(statearr_48554[(12)] = inst_48512);

(statearr_48554[(11)] = inst_48513__$1);

return statearr_48554;
})();
if(cljs.core.truth_(inst_48514)){
var statearr_48555_48578 = state_48540__$1;
(statearr_48555_48578[(1)] = (8));

} else {
var statearr_48556_48579 = state_48540__$1;
(statearr_48556_48579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (14))){
var inst_48533 = (state_48540[(2)]);
var inst_48534 = cljs.core.async.close_BANG_.call(null,out);
var state_48540__$1 = (function (){var statearr_48558 = state_48540;
(statearr_48558[(13)] = inst_48533);

return statearr_48558;
})();
var statearr_48559_48580 = state_48540__$1;
(statearr_48559_48580[(2)] = inst_48534);

(statearr_48559_48580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (10))){
var inst_48524 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
var statearr_48560_48581 = state_48540__$1;
(statearr_48560_48581[(2)] = inst_48524);

(statearr_48560_48581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (8))){
var inst_48504 = (state_48540[(8)]);
var inst_48513 = (state_48540[(11)]);
var tmp48557 = inst_48504;
var inst_48504__$1 = tmp48557;
var inst_48505 = inst_48513;
var state_48540__$1 = (function (){var statearr_48561 = state_48540;
(statearr_48561[(7)] = inst_48505);

(statearr_48561[(8)] = inst_48504__$1);

return statearr_48561;
})();
var statearr_48562_48582 = state_48540__$1;
(statearr_48562_48582[(2)] = null);

(statearr_48562_48582[(1)] = (2));


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
});})(c__46752__auto___48568,out))
;
return ((function (switch__46662__auto__,c__46752__auto___48568,out){
return (function() {
var cljs$core$async$state_machine__46663__auto__ = null;
var cljs$core$async$state_machine__46663__auto____0 = (function (){
var statearr_48563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48563[(0)] = cljs$core$async$state_machine__46663__auto__);

(statearr_48563[(1)] = (1));

return statearr_48563;
});
var cljs$core$async$state_machine__46663__auto____1 = (function (state_48540){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_48540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e48564){if((e48564 instanceof Object)){
var ex__46666__auto__ = e48564;
var statearr_48565_48583 = state_48540;
(statearr_48565_48583[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48584 = state_48540;
state_48540 = G__48584;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$state_machine__46663__auto__ = function(state_48540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46663__auto____1.call(this,state_48540);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46663__auto____0;
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46663__auto____1;
return cljs$core$async$state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___48568,out))
})();
var state__46754__auto__ = (function (){var statearr_48566 = f__46753__auto__.call(null);
(statearr_48566[(6)] = c__46752__auto___48568);

return statearr_48566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___48568,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48586 = arguments.length;
switch (G__48586) {
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
var c__46752__auto___48656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___48656,out){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___48656,out){
return (function (state_48628){
var state_val_48629 = (state_48628[(1)]);
if((state_val_48629 === (7))){
var inst_48624 = (state_48628[(2)]);
var state_48628__$1 = state_48628;
var statearr_48630_48657 = state_48628__$1;
(statearr_48630_48657[(2)] = inst_48624);

(statearr_48630_48657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48629 === (1))){
var inst_48587 = [];
var inst_48588 = inst_48587;
var inst_48589 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48628__$1 = (function (){var statearr_48631 = state_48628;
(statearr_48631[(7)] = inst_48588);

(statearr_48631[(8)] = inst_48589);

return statearr_48631;
})();
var statearr_48632_48658 = state_48628__$1;
(statearr_48632_48658[(2)] = null);

(statearr_48632_48658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48629 === (4))){
var inst_48592 = (state_48628[(9)]);
var inst_48592__$1 = (state_48628[(2)]);
var inst_48593 = (inst_48592__$1 == null);
var inst_48594 = cljs.core.not.call(null,inst_48593);
var state_48628__$1 = (function (){var statearr_48633 = state_48628;
(statearr_48633[(9)] = inst_48592__$1);

return statearr_48633;
})();
if(inst_48594){
var statearr_48634_48659 = state_48628__$1;
(statearr_48634_48659[(1)] = (5));

} else {
var statearr_48635_48660 = state_48628__$1;
(statearr_48635_48660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48629 === (15))){
var inst_48618 = (state_48628[(2)]);
var state_48628__$1 = state_48628;
var statearr_48636_48661 = state_48628__$1;
(statearr_48636_48661[(2)] = inst_48618);

(statearr_48636_48661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48629 === (13))){
var state_48628__$1 = state_48628;
var statearr_48637_48662 = state_48628__$1;
(statearr_48637_48662[(2)] = null);

(statearr_48637_48662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48629 === (6))){
var inst_48588 = (state_48628[(7)]);
var inst_48613 = inst_48588.length;
var inst_48614 = (inst_48613 > (0));
var state_48628__$1 = state_48628;
if(cljs.core.truth_(inst_48614)){
var statearr_48638_48663 = state_48628__$1;
(statearr_48638_48663[(1)] = (12));

} else {
var statearr_48639_48664 = state_48628__$1;
(statearr_48639_48664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48629 === (3))){
var inst_48626 = (state_48628[(2)]);
var state_48628__$1 = state_48628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48628__$1,inst_48626);
} else {
if((state_val_48629 === (12))){
var inst_48588 = (state_48628[(7)]);
var inst_48616 = cljs.core.vec.call(null,inst_48588);
var state_48628__$1 = state_48628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48628__$1,(15),out,inst_48616);
} else {
if((state_val_48629 === (2))){
var state_48628__$1 = state_48628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48628__$1,(4),ch);
} else {
if((state_val_48629 === (11))){
var inst_48596 = (state_48628[(10)]);
var inst_48592 = (state_48628[(9)]);
var inst_48606 = (state_48628[(2)]);
var inst_48607 = [];
var inst_48608 = inst_48607.push(inst_48592);
var inst_48588 = inst_48607;
var inst_48589 = inst_48596;
var state_48628__$1 = (function (){var statearr_48640 = state_48628;
(statearr_48640[(7)] = inst_48588);

(statearr_48640[(8)] = inst_48589);

(statearr_48640[(11)] = inst_48608);

(statearr_48640[(12)] = inst_48606);

return statearr_48640;
})();
var statearr_48641_48665 = state_48628__$1;
(statearr_48641_48665[(2)] = null);

(statearr_48641_48665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48629 === (9))){
var inst_48588 = (state_48628[(7)]);
var inst_48604 = cljs.core.vec.call(null,inst_48588);
var state_48628__$1 = state_48628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48628__$1,(11),out,inst_48604);
} else {
if((state_val_48629 === (5))){
var inst_48589 = (state_48628[(8)]);
var inst_48596 = (state_48628[(10)]);
var inst_48592 = (state_48628[(9)]);
var inst_48596__$1 = f.call(null,inst_48592);
var inst_48597 = cljs.core._EQ_.call(null,inst_48596__$1,inst_48589);
var inst_48598 = cljs.core.keyword_identical_QMARK_.call(null,inst_48589,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48599 = (inst_48597) || (inst_48598);
var state_48628__$1 = (function (){var statearr_48642 = state_48628;
(statearr_48642[(10)] = inst_48596__$1);

return statearr_48642;
})();
if(cljs.core.truth_(inst_48599)){
var statearr_48643_48666 = state_48628__$1;
(statearr_48643_48666[(1)] = (8));

} else {
var statearr_48644_48667 = state_48628__$1;
(statearr_48644_48667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48629 === (14))){
var inst_48621 = (state_48628[(2)]);
var inst_48622 = cljs.core.async.close_BANG_.call(null,out);
var state_48628__$1 = (function (){var statearr_48646 = state_48628;
(statearr_48646[(13)] = inst_48621);

return statearr_48646;
})();
var statearr_48647_48668 = state_48628__$1;
(statearr_48647_48668[(2)] = inst_48622);

(statearr_48647_48668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48629 === (10))){
var inst_48611 = (state_48628[(2)]);
var state_48628__$1 = state_48628;
var statearr_48648_48669 = state_48628__$1;
(statearr_48648_48669[(2)] = inst_48611);

(statearr_48648_48669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48629 === (8))){
var inst_48588 = (state_48628[(7)]);
var inst_48596 = (state_48628[(10)]);
var inst_48592 = (state_48628[(9)]);
var inst_48601 = inst_48588.push(inst_48592);
var tmp48645 = inst_48588;
var inst_48588__$1 = tmp48645;
var inst_48589 = inst_48596;
var state_48628__$1 = (function (){var statearr_48649 = state_48628;
(statearr_48649[(7)] = inst_48588__$1);

(statearr_48649[(8)] = inst_48589);

(statearr_48649[(14)] = inst_48601);

return statearr_48649;
})();
var statearr_48650_48670 = state_48628__$1;
(statearr_48650_48670[(2)] = null);

(statearr_48650_48670[(1)] = (2));


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
});})(c__46752__auto___48656,out))
;
return ((function (switch__46662__auto__,c__46752__auto___48656,out){
return (function() {
var cljs$core$async$state_machine__46663__auto__ = null;
var cljs$core$async$state_machine__46663__auto____0 = (function (){
var statearr_48651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48651[(0)] = cljs$core$async$state_machine__46663__auto__);

(statearr_48651[(1)] = (1));

return statearr_48651;
});
var cljs$core$async$state_machine__46663__auto____1 = (function (state_48628){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_48628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e48652){if((e48652 instanceof Object)){
var ex__46666__auto__ = e48652;
var statearr_48653_48671 = state_48628;
(statearr_48653_48671[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48672 = state_48628;
state_48628 = G__48672;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
cljs$core$async$state_machine__46663__auto__ = function(state_48628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46663__auto____1.call(this,state_48628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46663__auto____0;
cljs$core$async$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46663__auto____1;
return cljs$core$async$state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___48656,out))
})();
var state__46754__auto__ = (function (){var statearr_48654 = f__46753__auto__.call(null);
(statearr_48654[(6)] = c__46752__auto___48656);

return statearr_48654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___48656,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510609301696
