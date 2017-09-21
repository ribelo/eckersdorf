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
var G__35308 = arguments.length;
switch (G__35308) {
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
if(typeof cljs.core.async.t_cljs$core$async35309 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35309 = (function (f,blockable,meta35310){
this.f = f;
this.blockable = blockable;
this.meta35310 = meta35310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35311,meta35310__$1){
var self__ = this;
var _35311__$1 = this;
return (new cljs.core.async.t_cljs$core$async35309(self__.f,self__.blockable,meta35310__$1));
});

cljs.core.async.t_cljs$core$async35309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35311){
var self__ = this;
var _35311__$1 = this;
return self__.meta35310;
});

cljs.core.async.t_cljs$core$async35309.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35309.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35310","meta35310",1614665404,null)], null);
});

cljs.core.async.t_cljs$core$async35309.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35309";

cljs.core.async.t_cljs$core$async35309.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async35309");
});

cljs.core.async.__GT_t_cljs$core$async35309 = (function cljs$core$async$__GT_t_cljs$core$async35309(f__$1,blockable__$1,meta35310){
return (new cljs.core.async.t_cljs$core$async35309(f__$1,blockable__$1,meta35310));
});

}

return (new cljs.core.async.t_cljs$core$async35309(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35315 = arguments.length;
switch (G__35315) {
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
var G__35318 = arguments.length;
switch (G__35318) {
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
var G__35321 = arguments.length;
switch (G__35321) {
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
var val_35323 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35323);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35323,ret){
return (function (){
return fn1.call(null,val_35323);
});})(val_35323,ret))
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
var G__35325 = arguments.length;
switch (G__35325) {
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
var n__31292__auto___35327 = n;
var x_35328 = (0);
while(true){
if((x_35328 < n__31292__auto___35327)){
(a[x_35328] = (0));

var G__35329 = (x_35328 + (1));
x_35328 = G__35329;
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

var G__35330 = (i + (1));
i = G__35330;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35331 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35331 = (function (flag,meta35332){
this.flag = flag;
this.meta35332 = meta35332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35333,meta35332__$1){
var self__ = this;
var _35333__$1 = this;
return (new cljs.core.async.t_cljs$core$async35331(self__.flag,meta35332__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35333){
var self__ = this;
var _35333__$1 = this;
return self__.meta35332;
});})(flag))
;

cljs.core.async.t_cljs$core$async35331.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35331.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35331.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35332","meta35332",-409393053,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35331.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35331";

cljs.core.async.t_cljs$core$async35331.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async35331");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35331 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35331(flag__$1,meta35332){
return (new cljs.core.async.t_cljs$core$async35331(flag__$1,meta35332));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35331(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35334 = (function (flag,cb,meta35335){
this.flag = flag;
this.cb = cb;
this.meta35335 = meta35335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35336,meta35335__$1){
var self__ = this;
var _35336__$1 = this;
return (new cljs.core.async.t_cljs$core$async35334(self__.flag,self__.cb,meta35335__$1));
});

cljs.core.async.t_cljs$core$async35334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35336){
var self__ = this;
var _35336__$1 = this;
return self__.meta35335;
});

cljs.core.async.t_cljs$core$async35334.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35334.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35335","meta35335",-894003309,null)], null);
});

cljs.core.async.t_cljs$core$async35334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35334";

cljs.core.async.t_cljs$core$async35334.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async35334");
});

cljs.core.async.__GT_t_cljs$core$async35334 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35334(flag__$1,cb__$1,meta35335){
return (new cljs.core.async.t_cljs$core$async35334(flag__$1,cb__$1,meta35335));
});

}

return (new cljs.core.async.t_cljs$core$async35334(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35337_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35337_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35338_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35338_SHARP_,port], null));
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
var G__35339 = (i + (1));
i = G__35339;
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
var len__31526__auto___35345 = arguments.length;
var i__31527__auto___35346 = (0);
while(true){
if((i__31527__auto___35346 < len__31526__auto___35345)){
args__31533__auto__.push((arguments[i__31527__auto___35346]));

var G__35347 = (i__31527__auto___35346 + (1));
i__31527__auto___35346 = G__35347;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35342){
var map__35343 = p__35342;
var map__35343__$1 = ((((!((map__35343 == null)))?((((map__35343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35343):map__35343);
var opts = map__35343__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35340){
var G__35341 = cljs.core.first.call(null,seq35340);
var seq35340__$1 = cljs.core.next.call(null,seq35340);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35341,seq35340__$1);
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
var G__35349 = arguments.length;
switch (G__35349) {
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
var c__35248__auto___35395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___35395){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___35395){
return (function (state_35373){
var state_val_35374 = (state_35373[(1)]);
if((state_val_35374 === (7))){
var inst_35369 = (state_35373[(2)]);
var state_35373__$1 = state_35373;
var statearr_35375_35396 = state_35373__$1;
(statearr_35375_35396[(2)] = inst_35369);

(statearr_35375_35396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35374 === (1))){
var state_35373__$1 = state_35373;
var statearr_35376_35397 = state_35373__$1;
(statearr_35376_35397[(2)] = null);

(statearr_35376_35397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35374 === (4))){
var inst_35352 = (state_35373[(7)]);
var inst_35352__$1 = (state_35373[(2)]);
var inst_35353 = (inst_35352__$1 == null);
var state_35373__$1 = (function (){var statearr_35377 = state_35373;
(statearr_35377[(7)] = inst_35352__$1);

return statearr_35377;
})();
if(cljs.core.truth_(inst_35353)){
var statearr_35378_35398 = state_35373__$1;
(statearr_35378_35398[(1)] = (5));

} else {
var statearr_35379_35399 = state_35373__$1;
(statearr_35379_35399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35374 === (13))){
var state_35373__$1 = state_35373;
var statearr_35380_35400 = state_35373__$1;
(statearr_35380_35400[(2)] = null);

(statearr_35380_35400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35374 === (6))){
var inst_35352 = (state_35373[(7)]);
var state_35373__$1 = state_35373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35373__$1,(11),to,inst_35352);
} else {
if((state_val_35374 === (3))){
var inst_35371 = (state_35373[(2)]);
var state_35373__$1 = state_35373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35373__$1,inst_35371);
} else {
if((state_val_35374 === (12))){
var state_35373__$1 = state_35373;
var statearr_35381_35401 = state_35373__$1;
(statearr_35381_35401[(2)] = null);

(statearr_35381_35401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35374 === (2))){
var state_35373__$1 = state_35373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35373__$1,(4),from);
} else {
if((state_val_35374 === (11))){
var inst_35362 = (state_35373[(2)]);
var state_35373__$1 = state_35373;
if(cljs.core.truth_(inst_35362)){
var statearr_35382_35402 = state_35373__$1;
(statearr_35382_35402[(1)] = (12));

} else {
var statearr_35383_35403 = state_35373__$1;
(statearr_35383_35403[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35374 === (9))){
var state_35373__$1 = state_35373;
var statearr_35384_35404 = state_35373__$1;
(statearr_35384_35404[(2)] = null);

(statearr_35384_35404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35374 === (5))){
var state_35373__$1 = state_35373;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35385_35405 = state_35373__$1;
(statearr_35385_35405[(1)] = (8));

} else {
var statearr_35386_35406 = state_35373__$1;
(statearr_35386_35406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35374 === (14))){
var inst_35367 = (state_35373[(2)]);
var state_35373__$1 = state_35373;
var statearr_35387_35407 = state_35373__$1;
(statearr_35387_35407[(2)] = inst_35367);

(statearr_35387_35407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35374 === (10))){
var inst_35359 = (state_35373[(2)]);
var state_35373__$1 = state_35373;
var statearr_35388_35408 = state_35373__$1;
(statearr_35388_35408[(2)] = inst_35359);

(statearr_35388_35408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35374 === (8))){
var inst_35356 = cljs.core.async.close_BANG_.call(null,to);
var state_35373__$1 = state_35373;
var statearr_35389_35409 = state_35373__$1;
(statearr_35389_35409[(2)] = inst_35356);

(statearr_35389_35409[(1)] = (10));


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
});})(c__35248__auto___35395))
;
return ((function (switch__35158__auto__,c__35248__auto___35395){
return (function() {
var cljs$core$async$state_machine__35159__auto__ = null;
var cljs$core$async$state_machine__35159__auto____0 = (function (){
var statearr_35390 = [null,null,null,null,null,null,null,null];
(statearr_35390[(0)] = cljs$core$async$state_machine__35159__auto__);

(statearr_35390[(1)] = (1));

return statearr_35390;
});
var cljs$core$async$state_machine__35159__auto____1 = (function (state_35373){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_35373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e35391){if((e35391 instanceof Object)){
var ex__35162__auto__ = e35391;
var statearr_35392_35410 = state_35373;
(statearr_35392_35410[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35411 = state_35373;
state_35373 = G__35411;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$state_machine__35159__auto__ = function(state_35373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35159__auto____1.call(this,state_35373);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35159__auto____0;
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35159__auto____1;
return cljs$core$async$state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___35395))
})();
var state__35250__auto__ = (function (){var statearr_35393 = f__35249__auto__.call(null);
(statearr_35393[(6)] = c__35248__auto___35395);

return statearr_35393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___35395))
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
return (function (p__35412){
var vec__35413 = p__35412;
var v = cljs.core.nth.call(null,vec__35413,(0),null);
var p = cljs.core.nth.call(null,vec__35413,(1),null);
var job = vec__35413;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35248__auto___35584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___35584,res,vec__35413,v,p,job,jobs,results){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___35584,res,vec__35413,v,p,job,jobs,results){
return (function (state_35420){
var state_val_35421 = (state_35420[(1)]);
if((state_val_35421 === (1))){
var state_35420__$1 = state_35420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35420__$1,(2),res,v);
} else {
if((state_val_35421 === (2))){
var inst_35417 = (state_35420[(2)]);
var inst_35418 = cljs.core.async.close_BANG_.call(null,res);
var state_35420__$1 = (function (){var statearr_35422 = state_35420;
(statearr_35422[(7)] = inst_35417);

return statearr_35422;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35420__$1,inst_35418);
} else {
return null;
}
}
});})(c__35248__auto___35584,res,vec__35413,v,p,job,jobs,results))
;
return ((function (switch__35158__auto__,c__35248__auto___35584,res,vec__35413,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0 = (function (){
var statearr_35423 = [null,null,null,null,null,null,null,null];
(statearr_35423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__);

(statearr_35423[(1)] = (1));

return statearr_35423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1 = (function (state_35420){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_35420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e35424){if((e35424 instanceof Object)){
var ex__35162__auto__ = e35424;
var statearr_35425_35585 = state_35420;
(statearr_35425_35585[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35586 = state_35420;
state_35420 = G__35586;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__ = function(state_35420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1.call(this,state_35420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___35584,res,vec__35413,v,p,job,jobs,results))
})();
var state__35250__auto__ = (function (){var statearr_35426 = f__35249__auto__.call(null);
(statearr_35426[(6)] = c__35248__auto___35584);

return statearr_35426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___35584,res,vec__35413,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35427){
var vec__35428 = p__35427;
var v = cljs.core.nth.call(null,vec__35428,(0),null);
var p = cljs.core.nth.call(null,vec__35428,(1),null);
var job = vec__35428;
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
var n__31292__auto___35587 = n;
var __35588 = (0);
while(true){
if((__35588 < n__31292__auto___35587)){
var G__35431_35589 = type;
var G__35431_35590__$1 = (((G__35431_35589 instanceof cljs.core.Keyword))?G__35431_35589.fqn:null);
switch (G__35431_35590__$1) {
case "compute":
var c__35248__auto___35592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35588,c__35248__auto___35592,G__35431_35589,G__35431_35590__$1,n__31292__auto___35587,jobs,results,process,async){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (__35588,c__35248__auto___35592,G__35431_35589,G__35431_35590__$1,n__31292__auto___35587,jobs,results,process,async){
return (function (state_35444){
var state_val_35445 = (state_35444[(1)]);
if((state_val_35445 === (1))){
var state_35444__$1 = state_35444;
var statearr_35446_35593 = state_35444__$1;
(statearr_35446_35593[(2)] = null);

(statearr_35446_35593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35445 === (2))){
var state_35444__$1 = state_35444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35444__$1,(4),jobs);
} else {
if((state_val_35445 === (3))){
var inst_35442 = (state_35444[(2)]);
var state_35444__$1 = state_35444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35444__$1,inst_35442);
} else {
if((state_val_35445 === (4))){
var inst_35434 = (state_35444[(2)]);
var inst_35435 = process.call(null,inst_35434);
var state_35444__$1 = state_35444;
if(cljs.core.truth_(inst_35435)){
var statearr_35447_35594 = state_35444__$1;
(statearr_35447_35594[(1)] = (5));

} else {
var statearr_35448_35595 = state_35444__$1;
(statearr_35448_35595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35445 === (5))){
var state_35444__$1 = state_35444;
var statearr_35449_35596 = state_35444__$1;
(statearr_35449_35596[(2)] = null);

(statearr_35449_35596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35445 === (6))){
var state_35444__$1 = state_35444;
var statearr_35450_35597 = state_35444__$1;
(statearr_35450_35597[(2)] = null);

(statearr_35450_35597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35445 === (7))){
var inst_35440 = (state_35444[(2)]);
var state_35444__$1 = state_35444;
var statearr_35451_35598 = state_35444__$1;
(statearr_35451_35598[(2)] = inst_35440);

(statearr_35451_35598[(1)] = (3));


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
});})(__35588,c__35248__auto___35592,G__35431_35589,G__35431_35590__$1,n__31292__auto___35587,jobs,results,process,async))
;
return ((function (__35588,switch__35158__auto__,c__35248__auto___35592,G__35431_35589,G__35431_35590__$1,n__31292__auto___35587,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0 = (function (){
var statearr_35452 = [null,null,null,null,null,null,null];
(statearr_35452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__);

(statearr_35452[(1)] = (1));

return statearr_35452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1 = (function (state_35444){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_35444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e35453){if((e35453 instanceof Object)){
var ex__35162__auto__ = e35453;
var statearr_35454_35599 = state_35444;
(statearr_35454_35599[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35600 = state_35444;
state_35444 = G__35600;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__ = function(state_35444){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1.call(this,state_35444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__;
})()
;})(__35588,switch__35158__auto__,c__35248__auto___35592,G__35431_35589,G__35431_35590__$1,n__31292__auto___35587,jobs,results,process,async))
})();
var state__35250__auto__ = (function (){var statearr_35455 = f__35249__auto__.call(null);
(statearr_35455[(6)] = c__35248__auto___35592);

return statearr_35455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(__35588,c__35248__auto___35592,G__35431_35589,G__35431_35590__$1,n__31292__auto___35587,jobs,results,process,async))
);


break;
case "async":
var c__35248__auto___35601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35588,c__35248__auto___35601,G__35431_35589,G__35431_35590__$1,n__31292__auto___35587,jobs,results,process,async){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (__35588,c__35248__auto___35601,G__35431_35589,G__35431_35590__$1,n__31292__auto___35587,jobs,results,process,async){
return (function (state_35468){
var state_val_35469 = (state_35468[(1)]);
if((state_val_35469 === (1))){
var state_35468__$1 = state_35468;
var statearr_35470_35602 = state_35468__$1;
(statearr_35470_35602[(2)] = null);

(statearr_35470_35602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (2))){
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35468__$1,(4),jobs);
} else {
if((state_val_35469 === (3))){
var inst_35466 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35468__$1,inst_35466);
} else {
if((state_val_35469 === (4))){
var inst_35458 = (state_35468[(2)]);
var inst_35459 = async.call(null,inst_35458);
var state_35468__$1 = state_35468;
if(cljs.core.truth_(inst_35459)){
var statearr_35471_35603 = state_35468__$1;
(statearr_35471_35603[(1)] = (5));

} else {
var statearr_35472_35604 = state_35468__$1;
(statearr_35472_35604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (5))){
var state_35468__$1 = state_35468;
var statearr_35473_35605 = state_35468__$1;
(statearr_35473_35605[(2)] = null);

(statearr_35473_35605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (6))){
var state_35468__$1 = state_35468;
var statearr_35474_35606 = state_35468__$1;
(statearr_35474_35606[(2)] = null);

(statearr_35474_35606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (7))){
var inst_35464 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35475_35607 = state_35468__$1;
(statearr_35475_35607[(2)] = inst_35464);

(statearr_35475_35607[(1)] = (3));


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
});})(__35588,c__35248__auto___35601,G__35431_35589,G__35431_35590__$1,n__31292__auto___35587,jobs,results,process,async))
;
return ((function (__35588,switch__35158__auto__,c__35248__auto___35601,G__35431_35589,G__35431_35590__$1,n__31292__auto___35587,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0 = (function (){
var statearr_35476 = [null,null,null,null,null,null,null];
(statearr_35476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__);

(statearr_35476[(1)] = (1));

return statearr_35476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1 = (function (state_35468){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_35468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e35477){if((e35477 instanceof Object)){
var ex__35162__auto__ = e35477;
var statearr_35478_35608 = state_35468;
(statearr_35478_35608[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35609 = state_35468;
state_35468 = G__35609;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__ = function(state_35468){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1.call(this,state_35468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__;
})()
;})(__35588,switch__35158__auto__,c__35248__auto___35601,G__35431_35589,G__35431_35590__$1,n__31292__auto___35587,jobs,results,process,async))
})();
var state__35250__auto__ = (function (){var statearr_35479 = f__35249__auto__.call(null);
(statearr_35479[(6)] = c__35248__auto___35601);

return statearr_35479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(__35588,c__35248__auto___35601,G__35431_35589,G__35431_35590__$1,n__31292__auto___35587,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35431_35590__$1)].join('')));

}

var G__35610 = (__35588 + (1));
__35588 = G__35610;
continue;
} else {
}
break;
}

var c__35248__auto___35611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___35611,jobs,results,process,async){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___35611,jobs,results,process,async){
return (function (state_35501){
var state_val_35502 = (state_35501[(1)]);
if((state_val_35502 === (1))){
var state_35501__$1 = state_35501;
var statearr_35503_35612 = state_35501__$1;
(statearr_35503_35612[(2)] = null);

(statearr_35503_35612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35502 === (2))){
var state_35501__$1 = state_35501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35501__$1,(4),from);
} else {
if((state_val_35502 === (3))){
var inst_35499 = (state_35501[(2)]);
var state_35501__$1 = state_35501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35501__$1,inst_35499);
} else {
if((state_val_35502 === (4))){
var inst_35482 = (state_35501[(7)]);
var inst_35482__$1 = (state_35501[(2)]);
var inst_35483 = (inst_35482__$1 == null);
var state_35501__$1 = (function (){var statearr_35504 = state_35501;
(statearr_35504[(7)] = inst_35482__$1);

return statearr_35504;
})();
if(cljs.core.truth_(inst_35483)){
var statearr_35505_35613 = state_35501__$1;
(statearr_35505_35613[(1)] = (5));

} else {
var statearr_35506_35614 = state_35501__$1;
(statearr_35506_35614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35502 === (5))){
var inst_35485 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35501__$1 = state_35501;
var statearr_35507_35615 = state_35501__$1;
(statearr_35507_35615[(2)] = inst_35485);

(statearr_35507_35615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35502 === (6))){
var inst_35487 = (state_35501[(8)]);
var inst_35482 = (state_35501[(7)]);
var inst_35487__$1 = cljs.core.async.chan.call(null,(1));
var inst_35488 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35489 = [inst_35482,inst_35487__$1];
var inst_35490 = (new cljs.core.PersistentVector(null,2,(5),inst_35488,inst_35489,null));
var state_35501__$1 = (function (){var statearr_35508 = state_35501;
(statearr_35508[(8)] = inst_35487__$1);

return statearr_35508;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35501__$1,(8),jobs,inst_35490);
} else {
if((state_val_35502 === (7))){
var inst_35497 = (state_35501[(2)]);
var state_35501__$1 = state_35501;
var statearr_35509_35616 = state_35501__$1;
(statearr_35509_35616[(2)] = inst_35497);

(statearr_35509_35616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35502 === (8))){
var inst_35487 = (state_35501[(8)]);
var inst_35492 = (state_35501[(2)]);
var state_35501__$1 = (function (){var statearr_35510 = state_35501;
(statearr_35510[(9)] = inst_35492);

return statearr_35510;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35501__$1,(9),results,inst_35487);
} else {
if((state_val_35502 === (9))){
var inst_35494 = (state_35501[(2)]);
var state_35501__$1 = (function (){var statearr_35511 = state_35501;
(statearr_35511[(10)] = inst_35494);

return statearr_35511;
})();
var statearr_35512_35617 = state_35501__$1;
(statearr_35512_35617[(2)] = null);

(statearr_35512_35617[(1)] = (2));


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
});})(c__35248__auto___35611,jobs,results,process,async))
;
return ((function (switch__35158__auto__,c__35248__auto___35611,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0 = (function (){
var statearr_35513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__);

(statearr_35513[(1)] = (1));

return statearr_35513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1 = (function (state_35501){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_35501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e35514){if((e35514 instanceof Object)){
var ex__35162__auto__ = e35514;
var statearr_35515_35618 = state_35501;
(statearr_35515_35618[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35619 = state_35501;
state_35501 = G__35619;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__ = function(state_35501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1.call(this,state_35501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___35611,jobs,results,process,async))
})();
var state__35250__auto__ = (function (){var statearr_35516 = f__35249__auto__.call(null);
(statearr_35516[(6)] = c__35248__auto___35611);

return statearr_35516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___35611,jobs,results,process,async))
);


var c__35248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto__,jobs,results,process,async){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto__,jobs,results,process,async){
return (function (state_35554){
var state_val_35555 = (state_35554[(1)]);
if((state_val_35555 === (7))){
var inst_35550 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35556_35620 = state_35554__$1;
(statearr_35556_35620[(2)] = inst_35550);

(statearr_35556_35620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (20))){
var state_35554__$1 = state_35554;
var statearr_35557_35621 = state_35554__$1;
(statearr_35557_35621[(2)] = null);

(statearr_35557_35621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (1))){
var state_35554__$1 = state_35554;
var statearr_35558_35622 = state_35554__$1;
(statearr_35558_35622[(2)] = null);

(statearr_35558_35622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (4))){
var inst_35519 = (state_35554[(7)]);
var inst_35519__$1 = (state_35554[(2)]);
var inst_35520 = (inst_35519__$1 == null);
var state_35554__$1 = (function (){var statearr_35559 = state_35554;
(statearr_35559[(7)] = inst_35519__$1);

return statearr_35559;
})();
if(cljs.core.truth_(inst_35520)){
var statearr_35560_35623 = state_35554__$1;
(statearr_35560_35623[(1)] = (5));

} else {
var statearr_35561_35624 = state_35554__$1;
(statearr_35561_35624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (15))){
var inst_35532 = (state_35554[(8)]);
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35554__$1,(18),to,inst_35532);
} else {
if((state_val_35555 === (21))){
var inst_35545 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35562_35625 = state_35554__$1;
(statearr_35562_35625[(2)] = inst_35545);

(statearr_35562_35625[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (13))){
var inst_35547 = (state_35554[(2)]);
var state_35554__$1 = (function (){var statearr_35563 = state_35554;
(statearr_35563[(9)] = inst_35547);

return statearr_35563;
})();
var statearr_35564_35626 = state_35554__$1;
(statearr_35564_35626[(2)] = null);

(statearr_35564_35626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (6))){
var inst_35519 = (state_35554[(7)]);
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35554__$1,(11),inst_35519);
} else {
if((state_val_35555 === (17))){
var inst_35540 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35540)){
var statearr_35565_35627 = state_35554__$1;
(statearr_35565_35627[(1)] = (19));

} else {
var statearr_35566_35628 = state_35554__$1;
(statearr_35566_35628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (3))){
var inst_35552 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35554__$1,inst_35552);
} else {
if((state_val_35555 === (12))){
var inst_35529 = (state_35554[(10)]);
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35554__$1,(14),inst_35529);
} else {
if((state_val_35555 === (2))){
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35554__$1,(4),results);
} else {
if((state_val_35555 === (19))){
var state_35554__$1 = state_35554;
var statearr_35567_35629 = state_35554__$1;
(statearr_35567_35629[(2)] = null);

(statearr_35567_35629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (11))){
var inst_35529 = (state_35554[(2)]);
var state_35554__$1 = (function (){var statearr_35568 = state_35554;
(statearr_35568[(10)] = inst_35529);

return statearr_35568;
})();
var statearr_35569_35630 = state_35554__$1;
(statearr_35569_35630[(2)] = null);

(statearr_35569_35630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (9))){
var state_35554__$1 = state_35554;
var statearr_35570_35631 = state_35554__$1;
(statearr_35570_35631[(2)] = null);

(statearr_35570_35631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (5))){
var state_35554__$1 = state_35554;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35571_35632 = state_35554__$1;
(statearr_35571_35632[(1)] = (8));

} else {
var statearr_35572_35633 = state_35554__$1;
(statearr_35572_35633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (14))){
var inst_35532 = (state_35554[(8)]);
var inst_35534 = (state_35554[(11)]);
var inst_35532__$1 = (state_35554[(2)]);
var inst_35533 = (inst_35532__$1 == null);
var inst_35534__$1 = cljs.core.not.call(null,inst_35533);
var state_35554__$1 = (function (){var statearr_35573 = state_35554;
(statearr_35573[(8)] = inst_35532__$1);

(statearr_35573[(11)] = inst_35534__$1);

return statearr_35573;
})();
if(inst_35534__$1){
var statearr_35574_35634 = state_35554__$1;
(statearr_35574_35634[(1)] = (15));

} else {
var statearr_35575_35635 = state_35554__$1;
(statearr_35575_35635[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (16))){
var inst_35534 = (state_35554[(11)]);
var state_35554__$1 = state_35554;
var statearr_35576_35636 = state_35554__$1;
(statearr_35576_35636[(2)] = inst_35534);

(statearr_35576_35636[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (10))){
var inst_35526 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35577_35637 = state_35554__$1;
(statearr_35577_35637[(2)] = inst_35526);

(statearr_35577_35637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (18))){
var inst_35537 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35578_35638 = state_35554__$1;
(statearr_35578_35638[(2)] = inst_35537);

(statearr_35578_35638[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (8))){
var inst_35523 = cljs.core.async.close_BANG_.call(null,to);
var state_35554__$1 = state_35554;
var statearr_35579_35639 = state_35554__$1;
(statearr_35579_35639[(2)] = inst_35523);

(statearr_35579_35639[(1)] = (10));


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
});})(c__35248__auto__,jobs,results,process,async))
;
return ((function (switch__35158__auto__,c__35248__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0 = (function (){
var statearr_35580 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35580[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__);

(statearr_35580[(1)] = (1));

return statearr_35580;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1 = (function (state_35554){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_35554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e35581){if((e35581 instanceof Object)){
var ex__35162__auto__ = e35581;
var statearr_35582_35640 = state_35554;
(statearr_35582_35640[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35641 = state_35554;
state_35554 = G__35641;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__ = function(state_35554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1.call(this,state_35554);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto__,jobs,results,process,async))
})();
var state__35250__auto__ = (function (){var statearr_35583 = f__35249__auto__.call(null);
(statearr_35583[(6)] = c__35248__auto__);

return statearr_35583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto__,jobs,results,process,async))
);

return c__35248__auto__;
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
var G__35643 = arguments.length;
switch (G__35643) {
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
var G__35646 = arguments.length;
switch (G__35646) {
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
var G__35649 = arguments.length;
switch (G__35649) {
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
var c__35248__auto___35698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___35698,tc,fc){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___35698,tc,fc){
return (function (state_35675){
var state_val_35676 = (state_35675[(1)]);
if((state_val_35676 === (7))){
var inst_35671 = (state_35675[(2)]);
var state_35675__$1 = state_35675;
var statearr_35677_35699 = state_35675__$1;
(statearr_35677_35699[(2)] = inst_35671);

(statearr_35677_35699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (1))){
var state_35675__$1 = state_35675;
var statearr_35678_35700 = state_35675__$1;
(statearr_35678_35700[(2)] = null);

(statearr_35678_35700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (4))){
var inst_35652 = (state_35675[(7)]);
var inst_35652__$1 = (state_35675[(2)]);
var inst_35653 = (inst_35652__$1 == null);
var state_35675__$1 = (function (){var statearr_35679 = state_35675;
(statearr_35679[(7)] = inst_35652__$1);

return statearr_35679;
})();
if(cljs.core.truth_(inst_35653)){
var statearr_35680_35701 = state_35675__$1;
(statearr_35680_35701[(1)] = (5));

} else {
var statearr_35681_35702 = state_35675__$1;
(statearr_35681_35702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (13))){
var state_35675__$1 = state_35675;
var statearr_35682_35703 = state_35675__$1;
(statearr_35682_35703[(2)] = null);

(statearr_35682_35703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (6))){
var inst_35652 = (state_35675[(7)]);
var inst_35658 = p.call(null,inst_35652);
var state_35675__$1 = state_35675;
if(cljs.core.truth_(inst_35658)){
var statearr_35683_35704 = state_35675__$1;
(statearr_35683_35704[(1)] = (9));

} else {
var statearr_35684_35705 = state_35675__$1;
(statearr_35684_35705[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (3))){
var inst_35673 = (state_35675[(2)]);
var state_35675__$1 = state_35675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35675__$1,inst_35673);
} else {
if((state_val_35676 === (12))){
var state_35675__$1 = state_35675;
var statearr_35685_35706 = state_35675__$1;
(statearr_35685_35706[(2)] = null);

(statearr_35685_35706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (2))){
var state_35675__$1 = state_35675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35675__$1,(4),ch);
} else {
if((state_val_35676 === (11))){
var inst_35652 = (state_35675[(7)]);
var inst_35662 = (state_35675[(2)]);
var state_35675__$1 = state_35675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35675__$1,(8),inst_35662,inst_35652);
} else {
if((state_val_35676 === (9))){
var state_35675__$1 = state_35675;
var statearr_35686_35707 = state_35675__$1;
(statearr_35686_35707[(2)] = tc);

(statearr_35686_35707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (5))){
var inst_35655 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35656 = cljs.core.async.close_BANG_.call(null,fc);
var state_35675__$1 = (function (){var statearr_35687 = state_35675;
(statearr_35687[(8)] = inst_35655);

return statearr_35687;
})();
var statearr_35688_35708 = state_35675__$1;
(statearr_35688_35708[(2)] = inst_35656);

(statearr_35688_35708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (14))){
var inst_35669 = (state_35675[(2)]);
var state_35675__$1 = state_35675;
var statearr_35689_35709 = state_35675__$1;
(statearr_35689_35709[(2)] = inst_35669);

(statearr_35689_35709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (10))){
var state_35675__$1 = state_35675;
var statearr_35690_35710 = state_35675__$1;
(statearr_35690_35710[(2)] = fc);

(statearr_35690_35710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (8))){
var inst_35664 = (state_35675[(2)]);
var state_35675__$1 = state_35675;
if(cljs.core.truth_(inst_35664)){
var statearr_35691_35711 = state_35675__$1;
(statearr_35691_35711[(1)] = (12));

} else {
var statearr_35692_35712 = state_35675__$1;
(statearr_35692_35712[(1)] = (13));

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
});})(c__35248__auto___35698,tc,fc))
;
return ((function (switch__35158__auto__,c__35248__auto___35698,tc,fc){
return (function() {
var cljs$core$async$state_machine__35159__auto__ = null;
var cljs$core$async$state_machine__35159__auto____0 = (function (){
var statearr_35693 = [null,null,null,null,null,null,null,null,null];
(statearr_35693[(0)] = cljs$core$async$state_machine__35159__auto__);

(statearr_35693[(1)] = (1));

return statearr_35693;
});
var cljs$core$async$state_machine__35159__auto____1 = (function (state_35675){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_35675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e35694){if((e35694 instanceof Object)){
var ex__35162__auto__ = e35694;
var statearr_35695_35713 = state_35675;
(statearr_35695_35713[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35714 = state_35675;
state_35675 = G__35714;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$state_machine__35159__auto__ = function(state_35675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35159__auto____1.call(this,state_35675);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35159__auto____0;
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35159__auto____1;
return cljs$core$async$state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___35698,tc,fc))
})();
var state__35250__auto__ = (function (){var statearr_35696 = f__35249__auto__.call(null);
(statearr_35696[(6)] = c__35248__auto___35698);

return statearr_35696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___35698,tc,fc))
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
var c__35248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto__){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto__){
return (function (state_35735){
var state_val_35736 = (state_35735[(1)]);
if((state_val_35736 === (7))){
var inst_35731 = (state_35735[(2)]);
var state_35735__$1 = state_35735;
var statearr_35737_35755 = state_35735__$1;
(statearr_35737_35755[(2)] = inst_35731);

(statearr_35737_35755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35736 === (1))){
var inst_35715 = init;
var state_35735__$1 = (function (){var statearr_35738 = state_35735;
(statearr_35738[(7)] = inst_35715);

return statearr_35738;
})();
var statearr_35739_35756 = state_35735__$1;
(statearr_35739_35756[(2)] = null);

(statearr_35739_35756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35736 === (4))){
var inst_35718 = (state_35735[(8)]);
var inst_35718__$1 = (state_35735[(2)]);
var inst_35719 = (inst_35718__$1 == null);
var state_35735__$1 = (function (){var statearr_35740 = state_35735;
(statearr_35740[(8)] = inst_35718__$1);

return statearr_35740;
})();
if(cljs.core.truth_(inst_35719)){
var statearr_35741_35757 = state_35735__$1;
(statearr_35741_35757[(1)] = (5));

} else {
var statearr_35742_35758 = state_35735__$1;
(statearr_35742_35758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35736 === (6))){
var inst_35722 = (state_35735[(9)]);
var inst_35718 = (state_35735[(8)]);
var inst_35715 = (state_35735[(7)]);
var inst_35722__$1 = f.call(null,inst_35715,inst_35718);
var inst_35723 = cljs.core.reduced_QMARK_.call(null,inst_35722__$1);
var state_35735__$1 = (function (){var statearr_35743 = state_35735;
(statearr_35743[(9)] = inst_35722__$1);

return statearr_35743;
})();
if(inst_35723){
var statearr_35744_35759 = state_35735__$1;
(statearr_35744_35759[(1)] = (8));

} else {
var statearr_35745_35760 = state_35735__$1;
(statearr_35745_35760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35736 === (3))){
var inst_35733 = (state_35735[(2)]);
var state_35735__$1 = state_35735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35735__$1,inst_35733);
} else {
if((state_val_35736 === (2))){
var state_35735__$1 = state_35735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35735__$1,(4),ch);
} else {
if((state_val_35736 === (9))){
var inst_35722 = (state_35735[(9)]);
var inst_35715 = inst_35722;
var state_35735__$1 = (function (){var statearr_35746 = state_35735;
(statearr_35746[(7)] = inst_35715);

return statearr_35746;
})();
var statearr_35747_35761 = state_35735__$1;
(statearr_35747_35761[(2)] = null);

(statearr_35747_35761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35736 === (5))){
var inst_35715 = (state_35735[(7)]);
var state_35735__$1 = state_35735;
var statearr_35748_35762 = state_35735__$1;
(statearr_35748_35762[(2)] = inst_35715);

(statearr_35748_35762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35736 === (10))){
var inst_35729 = (state_35735[(2)]);
var state_35735__$1 = state_35735;
var statearr_35749_35763 = state_35735__$1;
(statearr_35749_35763[(2)] = inst_35729);

(statearr_35749_35763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35736 === (8))){
var inst_35722 = (state_35735[(9)]);
var inst_35725 = cljs.core.deref.call(null,inst_35722);
var state_35735__$1 = state_35735;
var statearr_35750_35764 = state_35735__$1;
(statearr_35750_35764[(2)] = inst_35725);

(statearr_35750_35764[(1)] = (10));


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
});})(c__35248__auto__))
;
return ((function (switch__35158__auto__,c__35248__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35159__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35159__auto____0 = (function (){
var statearr_35751 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35751[(0)] = cljs$core$async$reduce_$_state_machine__35159__auto__);

(statearr_35751[(1)] = (1));

return statearr_35751;
});
var cljs$core$async$reduce_$_state_machine__35159__auto____1 = (function (state_35735){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_35735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e35752){if((e35752 instanceof Object)){
var ex__35162__auto__ = e35752;
var statearr_35753_35765 = state_35735;
(statearr_35753_35765[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35766 = state_35735;
state_35735 = G__35766;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35159__auto__ = function(state_35735){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35159__auto____1.call(this,state_35735);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35159__auto____0;
cljs$core$async$reduce_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35159__auto____1;
return cljs$core$async$reduce_$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto__))
})();
var state__35250__auto__ = (function (){var statearr_35754 = f__35249__auto__.call(null);
(statearr_35754[(6)] = c__35248__auto__);

return statearr_35754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto__))
);

return c__35248__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto__,f__$1){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto__,f__$1){
return (function (state_35772){
var state_val_35773 = (state_35772[(1)]);
if((state_val_35773 === (1))){
var inst_35767 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35772__$1 = state_35772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35772__$1,(2),inst_35767);
} else {
if((state_val_35773 === (2))){
var inst_35769 = (state_35772[(2)]);
var inst_35770 = f__$1.call(null,inst_35769);
var state_35772__$1 = state_35772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35772__$1,inst_35770);
} else {
return null;
}
}
});})(c__35248__auto__,f__$1))
;
return ((function (switch__35158__auto__,c__35248__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__35159__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35159__auto____0 = (function (){
var statearr_35774 = [null,null,null,null,null,null,null];
(statearr_35774[(0)] = cljs$core$async$transduce_$_state_machine__35159__auto__);

(statearr_35774[(1)] = (1));

return statearr_35774;
});
var cljs$core$async$transduce_$_state_machine__35159__auto____1 = (function (state_35772){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_35772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e35775){if((e35775 instanceof Object)){
var ex__35162__auto__ = e35775;
var statearr_35776_35778 = state_35772;
(statearr_35776_35778[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35779 = state_35772;
state_35772 = G__35779;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35159__auto__ = function(state_35772){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35159__auto____1.call(this,state_35772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35159__auto____0;
cljs$core$async$transduce_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35159__auto____1;
return cljs$core$async$transduce_$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto__,f__$1))
})();
var state__35250__auto__ = (function (){var statearr_35777 = f__35249__auto__.call(null);
(statearr_35777[(6)] = c__35248__auto__);

return statearr_35777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto__,f__$1))
);

return c__35248__auto__;
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
var G__35781 = arguments.length;
switch (G__35781) {
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
var c__35248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto__){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto__){
return (function (state_35806){
var state_val_35807 = (state_35806[(1)]);
if((state_val_35807 === (7))){
var inst_35788 = (state_35806[(2)]);
var state_35806__$1 = state_35806;
var statearr_35808_35829 = state_35806__$1;
(statearr_35808_35829[(2)] = inst_35788);

(statearr_35808_35829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35807 === (1))){
var inst_35782 = cljs.core.seq.call(null,coll);
var inst_35783 = inst_35782;
var state_35806__$1 = (function (){var statearr_35809 = state_35806;
(statearr_35809[(7)] = inst_35783);

return statearr_35809;
})();
var statearr_35810_35830 = state_35806__$1;
(statearr_35810_35830[(2)] = null);

(statearr_35810_35830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35807 === (4))){
var inst_35783 = (state_35806[(7)]);
var inst_35786 = cljs.core.first.call(null,inst_35783);
var state_35806__$1 = state_35806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35806__$1,(7),ch,inst_35786);
} else {
if((state_val_35807 === (13))){
var inst_35800 = (state_35806[(2)]);
var state_35806__$1 = state_35806;
var statearr_35811_35831 = state_35806__$1;
(statearr_35811_35831[(2)] = inst_35800);

(statearr_35811_35831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35807 === (6))){
var inst_35791 = (state_35806[(2)]);
var state_35806__$1 = state_35806;
if(cljs.core.truth_(inst_35791)){
var statearr_35812_35832 = state_35806__$1;
(statearr_35812_35832[(1)] = (8));

} else {
var statearr_35813_35833 = state_35806__$1;
(statearr_35813_35833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35807 === (3))){
var inst_35804 = (state_35806[(2)]);
var state_35806__$1 = state_35806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35806__$1,inst_35804);
} else {
if((state_val_35807 === (12))){
var state_35806__$1 = state_35806;
var statearr_35814_35834 = state_35806__$1;
(statearr_35814_35834[(2)] = null);

(statearr_35814_35834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35807 === (2))){
var inst_35783 = (state_35806[(7)]);
var state_35806__$1 = state_35806;
if(cljs.core.truth_(inst_35783)){
var statearr_35815_35835 = state_35806__$1;
(statearr_35815_35835[(1)] = (4));

} else {
var statearr_35816_35836 = state_35806__$1;
(statearr_35816_35836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35807 === (11))){
var inst_35797 = cljs.core.async.close_BANG_.call(null,ch);
var state_35806__$1 = state_35806;
var statearr_35817_35837 = state_35806__$1;
(statearr_35817_35837[(2)] = inst_35797);

(statearr_35817_35837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35807 === (9))){
var state_35806__$1 = state_35806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35818_35838 = state_35806__$1;
(statearr_35818_35838[(1)] = (11));

} else {
var statearr_35819_35839 = state_35806__$1;
(statearr_35819_35839[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35807 === (5))){
var inst_35783 = (state_35806[(7)]);
var state_35806__$1 = state_35806;
var statearr_35820_35840 = state_35806__$1;
(statearr_35820_35840[(2)] = inst_35783);

(statearr_35820_35840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35807 === (10))){
var inst_35802 = (state_35806[(2)]);
var state_35806__$1 = state_35806;
var statearr_35821_35841 = state_35806__$1;
(statearr_35821_35841[(2)] = inst_35802);

(statearr_35821_35841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35807 === (8))){
var inst_35783 = (state_35806[(7)]);
var inst_35793 = cljs.core.next.call(null,inst_35783);
var inst_35783__$1 = inst_35793;
var state_35806__$1 = (function (){var statearr_35822 = state_35806;
(statearr_35822[(7)] = inst_35783__$1);

return statearr_35822;
})();
var statearr_35823_35842 = state_35806__$1;
(statearr_35823_35842[(2)] = null);

(statearr_35823_35842[(1)] = (2));


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
});})(c__35248__auto__))
;
return ((function (switch__35158__auto__,c__35248__auto__){
return (function() {
var cljs$core$async$state_machine__35159__auto__ = null;
var cljs$core$async$state_machine__35159__auto____0 = (function (){
var statearr_35824 = [null,null,null,null,null,null,null,null];
(statearr_35824[(0)] = cljs$core$async$state_machine__35159__auto__);

(statearr_35824[(1)] = (1));

return statearr_35824;
});
var cljs$core$async$state_machine__35159__auto____1 = (function (state_35806){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_35806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e35825){if((e35825 instanceof Object)){
var ex__35162__auto__ = e35825;
var statearr_35826_35843 = state_35806;
(statearr_35826_35843[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35844 = state_35806;
state_35806 = G__35844;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$state_machine__35159__auto__ = function(state_35806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35159__auto____1.call(this,state_35806);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35159__auto____0;
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35159__auto____1;
return cljs$core$async$state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto__))
})();
var state__35250__auto__ = (function (){var statearr_35827 = f__35249__auto__.call(null);
(statearr_35827[(6)] = c__35248__auto__);

return statearr_35827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto__))
);

return c__35248__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async35845 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35845 = (function (ch,cs,meta35846){
this.ch = ch;
this.cs = cs;
this.meta35846 = meta35846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35847,meta35846__$1){
var self__ = this;
var _35847__$1 = this;
return (new cljs.core.async.t_cljs$core$async35845(self__.ch,self__.cs,meta35846__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35847){
var self__ = this;
var _35847__$1 = this;
return self__.meta35846;
});})(cs))
;

cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35845.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35846","meta35846",976022049,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35845.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35845";

cljs.core.async.t_cljs$core$async35845.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async35845");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35845 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35845(ch__$1,cs__$1,meta35846){
return (new cljs.core.async.t_cljs$core$async35845(ch__$1,cs__$1,meta35846));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35845(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35248__auto___36067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___36067,cs,m,dchan,dctr,done){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___36067,cs,m,dchan,dctr,done){
return (function (state_35982){
var state_val_35983 = (state_35982[(1)]);
if((state_val_35983 === (7))){
var inst_35978 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_35984_36068 = state_35982__$1;
(statearr_35984_36068[(2)] = inst_35978);

(statearr_35984_36068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (20))){
var inst_35881 = (state_35982[(7)]);
var inst_35893 = cljs.core.first.call(null,inst_35881);
var inst_35894 = cljs.core.nth.call(null,inst_35893,(0),null);
var inst_35895 = cljs.core.nth.call(null,inst_35893,(1),null);
var state_35982__$1 = (function (){var statearr_35985 = state_35982;
(statearr_35985[(8)] = inst_35894);

return statearr_35985;
})();
if(cljs.core.truth_(inst_35895)){
var statearr_35986_36069 = state_35982__$1;
(statearr_35986_36069[(1)] = (22));

} else {
var statearr_35987_36070 = state_35982__$1;
(statearr_35987_36070[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (27))){
var inst_35923 = (state_35982[(9)]);
var inst_35925 = (state_35982[(10)]);
var inst_35850 = (state_35982[(11)]);
var inst_35930 = (state_35982[(12)]);
var inst_35930__$1 = cljs.core._nth.call(null,inst_35923,inst_35925);
var inst_35931 = cljs.core.async.put_BANG_.call(null,inst_35930__$1,inst_35850,done);
var state_35982__$1 = (function (){var statearr_35988 = state_35982;
(statearr_35988[(12)] = inst_35930__$1);

return statearr_35988;
})();
if(cljs.core.truth_(inst_35931)){
var statearr_35989_36071 = state_35982__$1;
(statearr_35989_36071[(1)] = (30));

} else {
var statearr_35990_36072 = state_35982__$1;
(statearr_35990_36072[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (1))){
var state_35982__$1 = state_35982;
var statearr_35991_36073 = state_35982__$1;
(statearr_35991_36073[(2)] = null);

(statearr_35991_36073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (24))){
var inst_35881 = (state_35982[(7)]);
var inst_35900 = (state_35982[(2)]);
var inst_35901 = cljs.core.next.call(null,inst_35881);
var inst_35859 = inst_35901;
var inst_35860 = null;
var inst_35861 = (0);
var inst_35862 = (0);
var state_35982__$1 = (function (){var statearr_35992 = state_35982;
(statearr_35992[(13)] = inst_35861);

(statearr_35992[(14)] = inst_35862);

(statearr_35992[(15)] = inst_35860);

(statearr_35992[(16)] = inst_35900);

(statearr_35992[(17)] = inst_35859);

return statearr_35992;
})();
var statearr_35993_36074 = state_35982__$1;
(statearr_35993_36074[(2)] = null);

(statearr_35993_36074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (39))){
var state_35982__$1 = state_35982;
var statearr_35997_36075 = state_35982__$1;
(statearr_35997_36075[(2)] = null);

(statearr_35997_36075[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (4))){
var inst_35850 = (state_35982[(11)]);
var inst_35850__$1 = (state_35982[(2)]);
var inst_35851 = (inst_35850__$1 == null);
var state_35982__$1 = (function (){var statearr_35998 = state_35982;
(statearr_35998[(11)] = inst_35850__$1);

return statearr_35998;
})();
if(cljs.core.truth_(inst_35851)){
var statearr_35999_36076 = state_35982__$1;
(statearr_35999_36076[(1)] = (5));

} else {
var statearr_36000_36077 = state_35982__$1;
(statearr_36000_36077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (15))){
var inst_35861 = (state_35982[(13)]);
var inst_35862 = (state_35982[(14)]);
var inst_35860 = (state_35982[(15)]);
var inst_35859 = (state_35982[(17)]);
var inst_35877 = (state_35982[(2)]);
var inst_35878 = (inst_35862 + (1));
var tmp35994 = inst_35861;
var tmp35995 = inst_35860;
var tmp35996 = inst_35859;
var inst_35859__$1 = tmp35996;
var inst_35860__$1 = tmp35995;
var inst_35861__$1 = tmp35994;
var inst_35862__$1 = inst_35878;
var state_35982__$1 = (function (){var statearr_36001 = state_35982;
(statearr_36001[(13)] = inst_35861__$1);

(statearr_36001[(14)] = inst_35862__$1);

(statearr_36001[(15)] = inst_35860__$1);

(statearr_36001[(18)] = inst_35877);

(statearr_36001[(17)] = inst_35859__$1);

return statearr_36001;
})();
var statearr_36002_36078 = state_35982__$1;
(statearr_36002_36078[(2)] = null);

(statearr_36002_36078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (21))){
var inst_35904 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_36006_36079 = state_35982__$1;
(statearr_36006_36079[(2)] = inst_35904);

(statearr_36006_36079[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (31))){
var inst_35930 = (state_35982[(12)]);
var inst_35934 = done.call(null,null);
var inst_35935 = cljs.core.async.untap_STAR_.call(null,m,inst_35930);
var state_35982__$1 = (function (){var statearr_36007 = state_35982;
(statearr_36007[(19)] = inst_35934);

return statearr_36007;
})();
var statearr_36008_36080 = state_35982__$1;
(statearr_36008_36080[(2)] = inst_35935);

(statearr_36008_36080[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (32))){
var inst_35923 = (state_35982[(9)]);
var inst_35922 = (state_35982[(20)]);
var inst_35925 = (state_35982[(10)]);
var inst_35924 = (state_35982[(21)]);
var inst_35937 = (state_35982[(2)]);
var inst_35938 = (inst_35925 + (1));
var tmp36003 = inst_35923;
var tmp36004 = inst_35922;
var tmp36005 = inst_35924;
var inst_35922__$1 = tmp36004;
var inst_35923__$1 = tmp36003;
var inst_35924__$1 = tmp36005;
var inst_35925__$1 = inst_35938;
var state_35982__$1 = (function (){var statearr_36009 = state_35982;
(statearr_36009[(9)] = inst_35923__$1);

(statearr_36009[(20)] = inst_35922__$1);

(statearr_36009[(10)] = inst_35925__$1);

(statearr_36009[(22)] = inst_35937);

(statearr_36009[(21)] = inst_35924__$1);

return statearr_36009;
})();
var statearr_36010_36081 = state_35982__$1;
(statearr_36010_36081[(2)] = null);

(statearr_36010_36081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (40))){
var inst_35950 = (state_35982[(23)]);
var inst_35954 = done.call(null,null);
var inst_35955 = cljs.core.async.untap_STAR_.call(null,m,inst_35950);
var state_35982__$1 = (function (){var statearr_36011 = state_35982;
(statearr_36011[(24)] = inst_35954);

return statearr_36011;
})();
var statearr_36012_36082 = state_35982__$1;
(statearr_36012_36082[(2)] = inst_35955);

(statearr_36012_36082[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (33))){
var inst_35941 = (state_35982[(25)]);
var inst_35943 = cljs.core.chunked_seq_QMARK_.call(null,inst_35941);
var state_35982__$1 = state_35982;
if(inst_35943){
var statearr_36013_36083 = state_35982__$1;
(statearr_36013_36083[(1)] = (36));

} else {
var statearr_36014_36084 = state_35982__$1;
(statearr_36014_36084[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (13))){
var inst_35871 = (state_35982[(26)]);
var inst_35874 = cljs.core.async.close_BANG_.call(null,inst_35871);
var state_35982__$1 = state_35982;
var statearr_36015_36085 = state_35982__$1;
(statearr_36015_36085[(2)] = inst_35874);

(statearr_36015_36085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (22))){
var inst_35894 = (state_35982[(8)]);
var inst_35897 = cljs.core.async.close_BANG_.call(null,inst_35894);
var state_35982__$1 = state_35982;
var statearr_36016_36086 = state_35982__$1;
(statearr_36016_36086[(2)] = inst_35897);

(statearr_36016_36086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (36))){
var inst_35941 = (state_35982[(25)]);
var inst_35945 = cljs.core.chunk_first.call(null,inst_35941);
var inst_35946 = cljs.core.chunk_rest.call(null,inst_35941);
var inst_35947 = cljs.core.count.call(null,inst_35945);
var inst_35922 = inst_35946;
var inst_35923 = inst_35945;
var inst_35924 = inst_35947;
var inst_35925 = (0);
var state_35982__$1 = (function (){var statearr_36017 = state_35982;
(statearr_36017[(9)] = inst_35923);

(statearr_36017[(20)] = inst_35922);

(statearr_36017[(10)] = inst_35925);

(statearr_36017[(21)] = inst_35924);

return statearr_36017;
})();
var statearr_36018_36087 = state_35982__$1;
(statearr_36018_36087[(2)] = null);

(statearr_36018_36087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (41))){
var inst_35941 = (state_35982[(25)]);
var inst_35957 = (state_35982[(2)]);
var inst_35958 = cljs.core.next.call(null,inst_35941);
var inst_35922 = inst_35958;
var inst_35923 = null;
var inst_35924 = (0);
var inst_35925 = (0);
var state_35982__$1 = (function (){var statearr_36019 = state_35982;
(statearr_36019[(9)] = inst_35923);

(statearr_36019[(20)] = inst_35922);

(statearr_36019[(10)] = inst_35925);

(statearr_36019[(27)] = inst_35957);

(statearr_36019[(21)] = inst_35924);

return statearr_36019;
})();
var statearr_36020_36088 = state_35982__$1;
(statearr_36020_36088[(2)] = null);

(statearr_36020_36088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (43))){
var state_35982__$1 = state_35982;
var statearr_36021_36089 = state_35982__$1;
(statearr_36021_36089[(2)] = null);

(statearr_36021_36089[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (29))){
var inst_35966 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_36022_36090 = state_35982__$1;
(statearr_36022_36090[(2)] = inst_35966);

(statearr_36022_36090[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (44))){
var inst_35975 = (state_35982[(2)]);
var state_35982__$1 = (function (){var statearr_36023 = state_35982;
(statearr_36023[(28)] = inst_35975);

return statearr_36023;
})();
var statearr_36024_36091 = state_35982__$1;
(statearr_36024_36091[(2)] = null);

(statearr_36024_36091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (6))){
var inst_35914 = (state_35982[(29)]);
var inst_35913 = cljs.core.deref.call(null,cs);
var inst_35914__$1 = cljs.core.keys.call(null,inst_35913);
var inst_35915 = cljs.core.count.call(null,inst_35914__$1);
var inst_35916 = cljs.core.reset_BANG_.call(null,dctr,inst_35915);
var inst_35921 = cljs.core.seq.call(null,inst_35914__$1);
var inst_35922 = inst_35921;
var inst_35923 = null;
var inst_35924 = (0);
var inst_35925 = (0);
var state_35982__$1 = (function (){var statearr_36025 = state_35982;
(statearr_36025[(29)] = inst_35914__$1);

(statearr_36025[(30)] = inst_35916);

(statearr_36025[(9)] = inst_35923);

(statearr_36025[(20)] = inst_35922);

(statearr_36025[(10)] = inst_35925);

(statearr_36025[(21)] = inst_35924);

return statearr_36025;
})();
var statearr_36026_36092 = state_35982__$1;
(statearr_36026_36092[(2)] = null);

(statearr_36026_36092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (28))){
var inst_35941 = (state_35982[(25)]);
var inst_35922 = (state_35982[(20)]);
var inst_35941__$1 = cljs.core.seq.call(null,inst_35922);
var state_35982__$1 = (function (){var statearr_36027 = state_35982;
(statearr_36027[(25)] = inst_35941__$1);

return statearr_36027;
})();
if(inst_35941__$1){
var statearr_36028_36093 = state_35982__$1;
(statearr_36028_36093[(1)] = (33));

} else {
var statearr_36029_36094 = state_35982__$1;
(statearr_36029_36094[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (25))){
var inst_35925 = (state_35982[(10)]);
var inst_35924 = (state_35982[(21)]);
var inst_35927 = (inst_35925 < inst_35924);
var inst_35928 = inst_35927;
var state_35982__$1 = state_35982;
if(cljs.core.truth_(inst_35928)){
var statearr_36030_36095 = state_35982__$1;
(statearr_36030_36095[(1)] = (27));

} else {
var statearr_36031_36096 = state_35982__$1;
(statearr_36031_36096[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (34))){
var state_35982__$1 = state_35982;
var statearr_36032_36097 = state_35982__$1;
(statearr_36032_36097[(2)] = null);

(statearr_36032_36097[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (17))){
var state_35982__$1 = state_35982;
var statearr_36033_36098 = state_35982__$1;
(statearr_36033_36098[(2)] = null);

(statearr_36033_36098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (3))){
var inst_35980 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35982__$1,inst_35980);
} else {
if((state_val_35983 === (12))){
var inst_35909 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_36034_36099 = state_35982__$1;
(statearr_36034_36099[(2)] = inst_35909);

(statearr_36034_36099[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (2))){
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35982__$1,(4),ch);
} else {
if((state_val_35983 === (23))){
var state_35982__$1 = state_35982;
var statearr_36035_36100 = state_35982__$1;
(statearr_36035_36100[(2)] = null);

(statearr_36035_36100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (35))){
var inst_35964 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_36036_36101 = state_35982__$1;
(statearr_36036_36101[(2)] = inst_35964);

(statearr_36036_36101[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (19))){
var inst_35881 = (state_35982[(7)]);
var inst_35885 = cljs.core.chunk_first.call(null,inst_35881);
var inst_35886 = cljs.core.chunk_rest.call(null,inst_35881);
var inst_35887 = cljs.core.count.call(null,inst_35885);
var inst_35859 = inst_35886;
var inst_35860 = inst_35885;
var inst_35861 = inst_35887;
var inst_35862 = (0);
var state_35982__$1 = (function (){var statearr_36037 = state_35982;
(statearr_36037[(13)] = inst_35861);

(statearr_36037[(14)] = inst_35862);

(statearr_36037[(15)] = inst_35860);

(statearr_36037[(17)] = inst_35859);

return statearr_36037;
})();
var statearr_36038_36102 = state_35982__$1;
(statearr_36038_36102[(2)] = null);

(statearr_36038_36102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (11))){
var inst_35881 = (state_35982[(7)]);
var inst_35859 = (state_35982[(17)]);
var inst_35881__$1 = cljs.core.seq.call(null,inst_35859);
var state_35982__$1 = (function (){var statearr_36039 = state_35982;
(statearr_36039[(7)] = inst_35881__$1);

return statearr_36039;
})();
if(inst_35881__$1){
var statearr_36040_36103 = state_35982__$1;
(statearr_36040_36103[(1)] = (16));

} else {
var statearr_36041_36104 = state_35982__$1;
(statearr_36041_36104[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (9))){
var inst_35911 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_36042_36105 = state_35982__$1;
(statearr_36042_36105[(2)] = inst_35911);

(statearr_36042_36105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (5))){
var inst_35857 = cljs.core.deref.call(null,cs);
var inst_35858 = cljs.core.seq.call(null,inst_35857);
var inst_35859 = inst_35858;
var inst_35860 = null;
var inst_35861 = (0);
var inst_35862 = (0);
var state_35982__$1 = (function (){var statearr_36043 = state_35982;
(statearr_36043[(13)] = inst_35861);

(statearr_36043[(14)] = inst_35862);

(statearr_36043[(15)] = inst_35860);

(statearr_36043[(17)] = inst_35859);

return statearr_36043;
})();
var statearr_36044_36106 = state_35982__$1;
(statearr_36044_36106[(2)] = null);

(statearr_36044_36106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (14))){
var state_35982__$1 = state_35982;
var statearr_36045_36107 = state_35982__$1;
(statearr_36045_36107[(2)] = null);

(statearr_36045_36107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (45))){
var inst_35972 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_36046_36108 = state_35982__$1;
(statearr_36046_36108[(2)] = inst_35972);

(statearr_36046_36108[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (26))){
var inst_35914 = (state_35982[(29)]);
var inst_35968 = (state_35982[(2)]);
var inst_35969 = cljs.core.seq.call(null,inst_35914);
var state_35982__$1 = (function (){var statearr_36047 = state_35982;
(statearr_36047[(31)] = inst_35968);

return statearr_36047;
})();
if(inst_35969){
var statearr_36048_36109 = state_35982__$1;
(statearr_36048_36109[(1)] = (42));

} else {
var statearr_36049_36110 = state_35982__$1;
(statearr_36049_36110[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (16))){
var inst_35881 = (state_35982[(7)]);
var inst_35883 = cljs.core.chunked_seq_QMARK_.call(null,inst_35881);
var state_35982__$1 = state_35982;
if(inst_35883){
var statearr_36050_36111 = state_35982__$1;
(statearr_36050_36111[(1)] = (19));

} else {
var statearr_36051_36112 = state_35982__$1;
(statearr_36051_36112[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (38))){
var inst_35961 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_36052_36113 = state_35982__$1;
(statearr_36052_36113[(2)] = inst_35961);

(statearr_36052_36113[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (30))){
var state_35982__$1 = state_35982;
var statearr_36053_36114 = state_35982__$1;
(statearr_36053_36114[(2)] = null);

(statearr_36053_36114[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (10))){
var inst_35862 = (state_35982[(14)]);
var inst_35860 = (state_35982[(15)]);
var inst_35870 = cljs.core._nth.call(null,inst_35860,inst_35862);
var inst_35871 = cljs.core.nth.call(null,inst_35870,(0),null);
var inst_35872 = cljs.core.nth.call(null,inst_35870,(1),null);
var state_35982__$1 = (function (){var statearr_36054 = state_35982;
(statearr_36054[(26)] = inst_35871);

return statearr_36054;
})();
if(cljs.core.truth_(inst_35872)){
var statearr_36055_36115 = state_35982__$1;
(statearr_36055_36115[(1)] = (13));

} else {
var statearr_36056_36116 = state_35982__$1;
(statearr_36056_36116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (18))){
var inst_35907 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_36057_36117 = state_35982__$1;
(statearr_36057_36117[(2)] = inst_35907);

(statearr_36057_36117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (42))){
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35982__$1,(45),dchan);
} else {
if((state_val_35983 === (37))){
var inst_35941 = (state_35982[(25)]);
var inst_35950 = (state_35982[(23)]);
var inst_35850 = (state_35982[(11)]);
var inst_35950__$1 = cljs.core.first.call(null,inst_35941);
var inst_35951 = cljs.core.async.put_BANG_.call(null,inst_35950__$1,inst_35850,done);
var state_35982__$1 = (function (){var statearr_36058 = state_35982;
(statearr_36058[(23)] = inst_35950__$1);

return statearr_36058;
})();
if(cljs.core.truth_(inst_35951)){
var statearr_36059_36118 = state_35982__$1;
(statearr_36059_36118[(1)] = (39));

} else {
var statearr_36060_36119 = state_35982__$1;
(statearr_36060_36119[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (8))){
var inst_35861 = (state_35982[(13)]);
var inst_35862 = (state_35982[(14)]);
var inst_35864 = (inst_35862 < inst_35861);
var inst_35865 = inst_35864;
var state_35982__$1 = state_35982;
if(cljs.core.truth_(inst_35865)){
var statearr_36061_36120 = state_35982__$1;
(statearr_36061_36120[(1)] = (10));

} else {
var statearr_36062_36121 = state_35982__$1;
(statearr_36062_36121[(1)] = (11));

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
});})(c__35248__auto___36067,cs,m,dchan,dctr,done))
;
return ((function (switch__35158__auto__,c__35248__auto___36067,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35159__auto__ = null;
var cljs$core$async$mult_$_state_machine__35159__auto____0 = (function (){
var statearr_36063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36063[(0)] = cljs$core$async$mult_$_state_machine__35159__auto__);

(statearr_36063[(1)] = (1));

return statearr_36063;
});
var cljs$core$async$mult_$_state_machine__35159__auto____1 = (function (state_35982){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_35982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e36064){if((e36064 instanceof Object)){
var ex__35162__auto__ = e36064;
var statearr_36065_36122 = state_35982;
(statearr_36065_36122[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36123 = state_35982;
state_35982 = G__36123;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35159__auto__ = function(state_35982){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35159__auto____1.call(this,state_35982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35159__auto____0;
cljs$core$async$mult_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35159__auto____1;
return cljs$core$async$mult_$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___36067,cs,m,dchan,dctr,done))
})();
var state__35250__auto__ = (function (){var statearr_36066 = f__35249__auto__.call(null);
(statearr_36066[(6)] = c__35248__auto___36067);

return statearr_36066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___36067,cs,m,dchan,dctr,done))
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
var G__36125 = arguments.length;
switch (G__36125) {
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
var len__31526__auto___36137 = arguments.length;
var i__31527__auto___36138 = (0);
while(true){
if((i__31527__auto___36138 < len__31526__auto___36137)){
args__31533__auto__.push((arguments[i__31527__auto___36138]));

var G__36139 = (i__31527__auto___36138 + (1));
i__31527__auto___36138 = G__36139;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((3) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31534__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36131){
var map__36132 = p__36131;
var map__36132__$1 = ((((!((map__36132 == null)))?((((map__36132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36132):map__36132);
var opts = map__36132__$1;
var statearr_36134_36140 = state;
(statearr_36134_36140[(1)] = cont_block);


var temp__5290__auto__ = cljs.core.async.do_alts.call(null,((function (map__36132,map__36132__$1,opts){
return (function (val){
var statearr_36135_36141 = state;
(statearr_36135_36141[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36132,map__36132__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5290__auto__)){
var cb = temp__5290__auto__;
var statearr_36136_36142 = state;
(statearr_36136_36142[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36127){
var G__36128 = cljs.core.first.call(null,seq36127);
var seq36127__$1 = cljs.core.next.call(null,seq36127);
var G__36129 = cljs.core.first.call(null,seq36127__$1);
var seq36127__$2 = cljs.core.next.call(null,seq36127__$1);
var G__36130 = cljs.core.first.call(null,seq36127__$2);
var seq36127__$3 = cljs.core.next.call(null,seq36127__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36128,G__36129,G__36130,seq36127__$3);
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
if(typeof cljs.core.async.t_cljs$core$async36143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36143 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta36144){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta36144 = meta36144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36145,meta36144__$1){
var self__ = this;
var _36145__$1 = this;
return (new cljs.core.async.t_cljs$core$async36143(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta36144__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36145){
var self__ = this;
var _36145__$1 = this;
return self__.meta36144;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async36143.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta36144","meta36144",1243269825,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36143";

cljs.core.async.t_cljs$core$async36143.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async36143");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36143 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36143(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36144){
return (new cljs.core.async.t_cljs$core$async36143(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36144));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36143(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35248__auto___36307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___36307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___36307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36247){
var state_val_36248 = (state_36247[(1)]);
if((state_val_36248 === (7))){
var inst_36162 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36249_36308 = state_36247__$1;
(statearr_36249_36308[(2)] = inst_36162);

(statearr_36249_36308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (20))){
var inst_36174 = (state_36247[(7)]);
var state_36247__$1 = state_36247;
var statearr_36250_36309 = state_36247__$1;
(statearr_36250_36309[(2)] = inst_36174);

(statearr_36250_36309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (27))){
var state_36247__$1 = state_36247;
var statearr_36251_36310 = state_36247__$1;
(statearr_36251_36310[(2)] = null);

(statearr_36251_36310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (1))){
var inst_36149 = (state_36247[(8)]);
var inst_36149__$1 = calc_state.call(null);
var inst_36151 = (inst_36149__$1 == null);
var inst_36152 = cljs.core.not.call(null,inst_36151);
var state_36247__$1 = (function (){var statearr_36252 = state_36247;
(statearr_36252[(8)] = inst_36149__$1);

return statearr_36252;
})();
if(inst_36152){
var statearr_36253_36311 = state_36247__$1;
(statearr_36253_36311[(1)] = (2));

} else {
var statearr_36254_36312 = state_36247__$1;
(statearr_36254_36312[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (24))){
var inst_36221 = (state_36247[(9)]);
var inst_36207 = (state_36247[(10)]);
var inst_36198 = (state_36247[(11)]);
var inst_36221__$1 = inst_36198.call(null,inst_36207);
var state_36247__$1 = (function (){var statearr_36255 = state_36247;
(statearr_36255[(9)] = inst_36221__$1);

return statearr_36255;
})();
if(cljs.core.truth_(inst_36221__$1)){
var statearr_36256_36313 = state_36247__$1;
(statearr_36256_36313[(1)] = (29));

} else {
var statearr_36257_36314 = state_36247__$1;
(statearr_36257_36314[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (4))){
var inst_36165 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36165)){
var statearr_36258_36315 = state_36247__$1;
(statearr_36258_36315[(1)] = (8));

} else {
var statearr_36259_36316 = state_36247__$1;
(statearr_36259_36316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (15))){
var inst_36192 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36192)){
var statearr_36260_36317 = state_36247__$1;
(statearr_36260_36317[(1)] = (19));

} else {
var statearr_36261_36318 = state_36247__$1;
(statearr_36261_36318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (21))){
var inst_36197 = (state_36247[(12)]);
var inst_36197__$1 = (state_36247[(2)]);
var inst_36198 = cljs.core.get.call(null,inst_36197__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36199 = cljs.core.get.call(null,inst_36197__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36200 = cljs.core.get.call(null,inst_36197__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36247__$1 = (function (){var statearr_36262 = state_36247;
(statearr_36262[(13)] = inst_36199);

(statearr_36262[(12)] = inst_36197__$1);

(statearr_36262[(11)] = inst_36198);

return statearr_36262;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36247__$1,(22),inst_36200);
} else {
if((state_val_36248 === (31))){
var inst_36229 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36229)){
var statearr_36263_36319 = state_36247__$1;
(statearr_36263_36319[(1)] = (32));

} else {
var statearr_36264_36320 = state_36247__$1;
(statearr_36264_36320[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (32))){
var inst_36206 = (state_36247[(14)]);
var state_36247__$1 = state_36247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36247__$1,(35),out,inst_36206);
} else {
if((state_val_36248 === (33))){
var inst_36197 = (state_36247[(12)]);
var inst_36174 = inst_36197;
var state_36247__$1 = (function (){var statearr_36265 = state_36247;
(statearr_36265[(7)] = inst_36174);

return statearr_36265;
})();
var statearr_36266_36321 = state_36247__$1;
(statearr_36266_36321[(2)] = null);

(statearr_36266_36321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (13))){
var inst_36174 = (state_36247[(7)]);
var inst_36181 = inst_36174.cljs$lang$protocol_mask$partition0$;
var inst_36182 = (inst_36181 & (64));
var inst_36183 = inst_36174.cljs$core$ISeq$;
var inst_36184 = (cljs.core.PROTOCOL_SENTINEL === inst_36183);
var inst_36185 = (inst_36182) || (inst_36184);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36185)){
var statearr_36267_36322 = state_36247__$1;
(statearr_36267_36322[(1)] = (16));

} else {
var statearr_36268_36323 = state_36247__$1;
(statearr_36268_36323[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (22))){
var inst_36206 = (state_36247[(14)]);
var inst_36207 = (state_36247[(10)]);
var inst_36205 = (state_36247[(2)]);
var inst_36206__$1 = cljs.core.nth.call(null,inst_36205,(0),null);
var inst_36207__$1 = cljs.core.nth.call(null,inst_36205,(1),null);
var inst_36208 = (inst_36206__$1 == null);
var inst_36209 = cljs.core._EQ_.call(null,inst_36207__$1,change);
var inst_36210 = (inst_36208) || (inst_36209);
var state_36247__$1 = (function (){var statearr_36269 = state_36247;
(statearr_36269[(14)] = inst_36206__$1);

(statearr_36269[(10)] = inst_36207__$1);

return statearr_36269;
})();
if(cljs.core.truth_(inst_36210)){
var statearr_36270_36324 = state_36247__$1;
(statearr_36270_36324[(1)] = (23));

} else {
var statearr_36271_36325 = state_36247__$1;
(statearr_36271_36325[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (36))){
var inst_36197 = (state_36247[(12)]);
var inst_36174 = inst_36197;
var state_36247__$1 = (function (){var statearr_36272 = state_36247;
(statearr_36272[(7)] = inst_36174);

return statearr_36272;
})();
var statearr_36273_36326 = state_36247__$1;
(statearr_36273_36326[(2)] = null);

(statearr_36273_36326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (29))){
var inst_36221 = (state_36247[(9)]);
var state_36247__$1 = state_36247;
var statearr_36274_36327 = state_36247__$1;
(statearr_36274_36327[(2)] = inst_36221);

(statearr_36274_36327[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (6))){
var state_36247__$1 = state_36247;
var statearr_36275_36328 = state_36247__$1;
(statearr_36275_36328[(2)] = false);

(statearr_36275_36328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (28))){
var inst_36217 = (state_36247[(2)]);
var inst_36218 = calc_state.call(null);
var inst_36174 = inst_36218;
var state_36247__$1 = (function (){var statearr_36276 = state_36247;
(statearr_36276[(15)] = inst_36217);

(statearr_36276[(7)] = inst_36174);

return statearr_36276;
})();
var statearr_36277_36329 = state_36247__$1;
(statearr_36277_36329[(2)] = null);

(statearr_36277_36329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (25))){
var inst_36243 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36278_36330 = state_36247__$1;
(statearr_36278_36330[(2)] = inst_36243);

(statearr_36278_36330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (34))){
var inst_36241 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36279_36331 = state_36247__$1;
(statearr_36279_36331[(2)] = inst_36241);

(statearr_36279_36331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (17))){
var state_36247__$1 = state_36247;
var statearr_36280_36332 = state_36247__$1;
(statearr_36280_36332[(2)] = false);

(statearr_36280_36332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (3))){
var state_36247__$1 = state_36247;
var statearr_36281_36333 = state_36247__$1;
(statearr_36281_36333[(2)] = false);

(statearr_36281_36333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (12))){
var inst_36245 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36247__$1,inst_36245);
} else {
if((state_val_36248 === (2))){
var inst_36149 = (state_36247[(8)]);
var inst_36154 = inst_36149.cljs$lang$protocol_mask$partition0$;
var inst_36155 = (inst_36154 & (64));
var inst_36156 = inst_36149.cljs$core$ISeq$;
var inst_36157 = (cljs.core.PROTOCOL_SENTINEL === inst_36156);
var inst_36158 = (inst_36155) || (inst_36157);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36158)){
var statearr_36282_36334 = state_36247__$1;
(statearr_36282_36334[(1)] = (5));

} else {
var statearr_36283_36335 = state_36247__$1;
(statearr_36283_36335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (23))){
var inst_36206 = (state_36247[(14)]);
var inst_36212 = (inst_36206 == null);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36212)){
var statearr_36284_36336 = state_36247__$1;
(statearr_36284_36336[(1)] = (26));

} else {
var statearr_36285_36337 = state_36247__$1;
(statearr_36285_36337[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (35))){
var inst_36232 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36232)){
var statearr_36286_36338 = state_36247__$1;
(statearr_36286_36338[(1)] = (36));

} else {
var statearr_36287_36339 = state_36247__$1;
(statearr_36287_36339[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (19))){
var inst_36174 = (state_36247[(7)]);
var inst_36194 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36174);
var state_36247__$1 = state_36247;
var statearr_36288_36340 = state_36247__$1;
(statearr_36288_36340[(2)] = inst_36194);

(statearr_36288_36340[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (11))){
var inst_36174 = (state_36247[(7)]);
var inst_36178 = (inst_36174 == null);
var inst_36179 = cljs.core.not.call(null,inst_36178);
var state_36247__$1 = state_36247;
if(inst_36179){
var statearr_36289_36341 = state_36247__$1;
(statearr_36289_36341[(1)] = (13));

} else {
var statearr_36290_36342 = state_36247__$1;
(statearr_36290_36342[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (9))){
var inst_36149 = (state_36247[(8)]);
var state_36247__$1 = state_36247;
var statearr_36291_36343 = state_36247__$1;
(statearr_36291_36343[(2)] = inst_36149);

(statearr_36291_36343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (5))){
var state_36247__$1 = state_36247;
var statearr_36292_36344 = state_36247__$1;
(statearr_36292_36344[(2)] = true);

(statearr_36292_36344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (14))){
var state_36247__$1 = state_36247;
var statearr_36293_36345 = state_36247__$1;
(statearr_36293_36345[(2)] = false);

(statearr_36293_36345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (26))){
var inst_36207 = (state_36247[(10)]);
var inst_36214 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36207);
var state_36247__$1 = state_36247;
var statearr_36294_36346 = state_36247__$1;
(statearr_36294_36346[(2)] = inst_36214);

(statearr_36294_36346[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (16))){
var state_36247__$1 = state_36247;
var statearr_36295_36347 = state_36247__$1;
(statearr_36295_36347[(2)] = true);

(statearr_36295_36347[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (38))){
var inst_36237 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36296_36348 = state_36247__$1;
(statearr_36296_36348[(2)] = inst_36237);

(statearr_36296_36348[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (30))){
var inst_36199 = (state_36247[(13)]);
var inst_36207 = (state_36247[(10)]);
var inst_36198 = (state_36247[(11)]);
var inst_36224 = cljs.core.empty_QMARK_.call(null,inst_36198);
var inst_36225 = inst_36199.call(null,inst_36207);
var inst_36226 = cljs.core.not.call(null,inst_36225);
var inst_36227 = (inst_36224) && (inst_36226);
var state_36247__$1 = state_36247;
var statearr_36297_36349 = state_36247__$1;
(statearr_36297_36349[(2)] = inst_36227);

(statearr_36297_36349[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (10))){
var inst_36149 = (state_36247[(8)]);
var inst_36170 = (state_36247[(2)]);
var inst_36171 = cljs.core.get.call(null,inst_36170,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36172 = cljs.core.get.call(null,inst_36170,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36173 = cljs.core.get.call(null,inst_36170,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36174 = inst_36149;
var state_36247__$1 = (function (){var statearr_36298 = state_36247;
(statearr_36298[(16)] = inst_36173);

(statearr_36298[(7)] = inst_36174);

(statearr_36298[(17)] = inst_36172);

(statearr_36298[(18)] = inst_36171);

return statearr_36298;
})();
var statearr_36299_36350 = state_36247__$1;
(statearr_36299_36350[(2)] = null);

(statearr_36299_36350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (18))){
var inst_36189 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36300_36351 = state_36247__$1;
(statearr_36300_36351[(2)] = inst_36189);

(statearr_36300_36351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (37))){
var state_36247__$1 = state_36247;
var statearr_36301_36352 = state_36247__$1;
(statearr_36301_36352[(2)] = null);

(statearr_36301_36352[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (8))){
var inst_36149 = (state_36247[(8)]);
var inst_36167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36149);
var state_36247__$1 = state_36247;
var statearr_36302_36353 = state_36247__$1;
(statearr_36302_36353[(2)] = inst_36167);

(statearr_36302_36353[(1)] = (10));


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
});})(c__35248__auto___36307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35158__auto__,c__35248__auto___36307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35159__auto__ = null;
var cljs$core$async$mix_$_state_machine__35159__auto____0 = (function (){
var statearr_36303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36303[(0)] = cljs$core$async$mix_$_state_machine__35159__auto__);

(statearr_36303[(1)] = (1));

return statearr_36303;
});
var cljs$core$async$mix_$_state_machine__35159__auto____1 = (function (state_36247){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_36247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e36304){if((e36304 instanceof Object)){
var ex__35162__auto__ = e36304;
var statearr_36305_36354 = state_36247;
(statearr_36305_36354[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36355 = state_36247;
state_36247 = G__36355;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35159__auto__ = function(state_36247){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35159__auto____1.call(this,state_36247);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35159__auto____0;
cljs$core$async$mix_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35159__auto____1;
return cljs$core$async$mix_$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___36307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35250__auto__ = (function (){var statearr_36306 = f__35249__auto__.call(null);
(statearr_36306[(6)] = c__35248__auto___36307);

return statearr_36306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___36307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__36357 = arguments.length;
switch (G__36357) {
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
var G__36361 = arguments.length;
switch (G__36361) {
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
return (function (p1__36359_SHARP_){
if(cljs.core.truth_(p1__36359_SHARP_.call(null,topic))){
return p1__36359_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36359_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30249__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36362 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36363){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36363 = meta36363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36364,meta36363__$1){
var self__ = this;
var _36364__$1 = this;
return (new cljs.core.async.t_cljs$core$async36362(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36363__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36364){
var self__ = this;
var _36364__$1 = this;
return self__.meta36363;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36362.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36363","meta36363",297710205,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36362.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36362";

cljs.core.async.t_cljs$core$async36362.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async36362");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36362 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36362(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36363){
return (new cljs.core.async.t_cljs$core$async36362(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36363));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36362(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35248__auto___36482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___36482,mults,ensure_mult,p){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___36482,mults,ensure_mult,p){
return (function (state_36436){
var state_val_36437 = (state_36436[(1)]);
if((state_val_36437 === (7))){
var inst_36432 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36438_36483 = state_36436__$1;
(statearr_36438_36483[(2)] = inst_36432);

(statearr_36438_36483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (20))){
var state_36436__$1 = state_36436;
var statearr_36439_36484 = state_36436__$1;
(statearr_36439_36484[(2)] = null);

(statearr_36439_36484[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (1))){
var state_36436__$1 = state_36436;
var statearr_36440_36485 = state_36436__$1;
(statearr_36440_36485[(2)] = null);

(statearr_36440_36485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (24))){
var inst_36415 = (state_36436[(7)]);
var inst_36424 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36415);
var state_36436__$1 = state_36436;
var statearr_36441_36486 = state_36436__$1;
(statearr_36441_36486[(2)] = inst_36424);

(statearr_36441_36486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (4))){
var inst_36367 = (state_36436[(8)]);
var inst_36367__$1 = (state_36436[(2)]);
var inst_36368 = (inst_36367__$1 == null);
var state_36436__$1 = (function (){var statearr_36442 = state_36436;
(statearr_36442[(8)] = inst_36367__$1);

return statearr_36442;
})();
if(cljs.core.truth_(inst_36368)){
var statearr_36443_36487 = state_36436__$1;
(statearr_36443_36487[(1)] = (5));

} else {
var statearr_36444_36488 = state_36436__$1;
(statearr_36444_36488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (15))){
var inst_36409 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36445_36489 = state_36436__$1;
(statearr_36445_36489[(2)] = inst_36409);

(statearr_36445_36489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (21))){
var inst_36429 = (state_36436[(2)]);
var state_36436__$1 = (function (){var statearr_36446 = state_36436;
(statearr_36446[(9)] = inst_36429);

return statearr_36446;
})();
var statearr_36447_36490 = state_36436__$1;
(statearr_36447_36490[(2)] = null);

(statearr_36447_36490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (13))){
var inst_36391 = (state_36436[(10)]);
var inst_36393 = cljs.core.chunked_seq_QMARK_.call(null,inst_36391);
var state_36436__$1 = state_36436;
if(inst_36393){
var statearr_36448_36491 = state_36436__$1;
(statearr_36448_36491[(1)] = (16));

} else {
var statearr_36449_36492 = state_36436__$1;
(statearr_36449_36492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (22))){
var inst_36421 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
if(cljs.core.truth_(inst_36421)){
var statearr_36450_36493 = state_36436__$1;
(statearr_36450_36493[(1)] = (23));

} else {
var statearr_36451_36494 = state_36436__$1;
(statearr_36451_36494[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (6))){
var inst_36415 = (state_36436[(7)]);
var inst_36367 = (state_36436[(8)]);
var inst_36417 = (state_36436[(11)]);
var inst_36415__$1 = topic_fn.call(null,inst_36367);
var inst_36416 = cljs.core.deref.call(null,mults);
var inst_36417__$1 = cljs.core.get.call(null,inst_36416,inst_36415__$1);
var state_36436__$1 = (function (){var statearr_36452 = state_36436;
(statearr_36452[(7)] = inst_36415__$1);

(statearr_36452[(11)] = inst_36417__$1);

return statearr_36452;
})();
if(cljs.core.truth_(inst_36417__$1)){
var statearr_36453_36495 = state_36436__$1;
(statearr_36453_36495[(1)] = (19));

} else {
var statearr_36454_36496 = state_36436__$1;
(statearr_36454_36496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (25))){
var inst_36426 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36455_36497 = state_36436__$1;
(statearr_36455_36497[(2)] = inst_36426);

(statearr_36455_36497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (17))){
var inst_36391 = (state_36436[(10)]);
var inst_36400 = cljs.core.first.call(null,inst_36391);
var inst_36401 = cljs.core.async.muxch_STAR_.call(null,inst_36400);
var inst_36402 = cljs.core.async.close_BANG_.call(null,inst_36401);
var inst_36403 = cljs.core.next.call(null,inst_36391);
var inst_36377 = inst_36403;
var inst_36378 = null;
var inst_36379 = (0);
var inst_36380 = (0);
var state_36436__$1 = (function (){var statearr_36456 = state_36436;
(statearr_36456[(12)] = inst_36380);

(statearr_36456[(13)] = inst_36378);

(statearr_36456[(14)] = inst_36402);

(statearr_36456[(15)] = inst_36377);

(statearr_36456[(16)] = inst_36379);

return statearr_36456;
})();
var statearr_36457_36498 = state_36436__$1;
(statearr_36457_36498[(2)] = null);

(statearr_36457_36498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (3))){
var inst_36434 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36436__$1,inst_36434);
} else {
if((state_val_36437 === (12))){
var inst_36411 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36458_36499 = state_36436__$1;
(statearr_36458_36499[(2)] = inst_36411);

(statearr_36458_36499[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (2))){
var state_36436__$1 = state_36436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36436__$1,(4),ch);
} else {
if((state_val_36437 === (23))){
var state_36436__$1 = state_36436;
var statearr_36459_36500 = state_36436__$1;
(statearr_36459_36500[(2)] = null);

(statearr_36459_36500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (19))){
var inst_36367 = (state_36436[(8)]);
var inst_36417 = (state_36436[(11)]);
var inst_36419 = cljs.core.async.muxch_STAR_.call(null,inst_36417);
var state_36436__$1 = state_36436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36436__$1,(22),inst_36419,inst_36367);
} else {
if((state_val_36437 === (11))){
var inst_36377 = (state_36436[(15)]);
var inst_36391 = (state_36436[(10)]);
var inst_36391__$1 = cljs.core.seq.call(null,inst_36377);
var state_36436__$1 = (function (){var statearr_36460 = state_36436;
(statearr_36460[(10)] = inst_36391__$1);

return statearr_36460;
})();
if(inst_36391__$1){
var statearr_36461_36501 = state_36436__$1;
(statearr_36461_36501[(1)] = (13));

} else {
var statearr_36462_36502 = state_36436__$1;
(statearr_36462_36502[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (9))){
var inst_36413 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36463_36503 = state_36436__$1;
(statearr_36463_36503[(2)] = inst_36413);

(statearr_36463_36503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (5))){
var inst_36374 = cljs.core.deref.call(null,mults);
var inst_36375 = cljs.core.vals.call(null,inst_36374);
var inst_36376 = cljs.core.seq.call(null,inst_36375);
var inst_36377 = inst_36376;
var inst_36378 = null;
var inst_36379 = (0);
var inst_36380 = (0);
var state_36436__$1 = (function (){var statearr_36464 = state_36436;
(statearr_36464[(12)] = inst_36380);

(statearr_36464[(13)] = inst_36378);

(statearr_36464[(15)] = inst_36377);

(statearr_36464[(16)] = inst_36379);

return statearr_36464;
})();
var statearr_36465_36504 = state_36436__$1;
(statearr_36465_36504[(2)] = null);

(statearr_36465_36504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (14))){
var state_36436__$1 = state_36436;
var statearr_36469_36505 = state_36436__$1;
(statearr_36469_36505[(2)] = null);

(statearr_36469_36505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (16))){
var inst_36391 = (state_36436[(10)]);
var inst_36395 = cljs.core.chunk_first.call(null,inst_36391);
var inst_36396 = cljs.core.chunk_rest.call(null,inst_36391);
var inst_36397 = cljs.core.count.call(null,inst_36395);
var inst_36377 = inst_36396;
var inst_36378 = inst_36395;
var inst_36379 = inst_36397;
var inst_36380 = (0);
var state_36436__$1 = (function (){var statearr_36470 = state_36436;
(statearr_36470[(12)] = inst_36380);

(statearr_36470[(13)] = inst_36378);

(statearr_36470[(15)] = inst_36377);

(statearr_36470[(16)] = inst_36379);

return statearr_36470;
})();
var statearr_36471_36506 = state_36436__$1;
(statearr_36471_36506[(2)] = null);

(statearr_36471_36506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (10))){
var inst_36380 = (state_36436[(12)]);
var inst_36378 = (state_36436[(13)]);
var inst_36377 = (state_36436[(15)]);
var inst_36379 = (state_36436[(16)]);
var inst_36385 = cljs.core._nth.call(null,inst_36378,inst_36380);
var inst_36386 = cljs.core.async.muxch_STAR_.call(null,inst_36385);
var inst_36387 = cljs.core.async.close_BANG_.call(null,inst_36386);
var inst_36388 = (inst_36380 + (1));
var tmp36466 = inst_36378;
var tmp36467 = inst_36377;
var tmp36468 = inst_36379;
var inst_36377__$1 = tmp36467;
var inst_36378__$1 = tmp36466;
var inst_36379__$1 = tmp36468;
var inst_36380__$1 = inst_36388;
var state_36436__$1 = (function (){var statearr_36472 = state_36436;
(statearr_36472[(12)] = inst_36380__$1);

(statearr_36472[(13)] = inst_36378__$1);

(statearr_36472[(17)] = inst_36387);

(statearr_36472[(15)] = inst_36377__$1);

(statearr_36472[(16)] = inst_36379__$1);

return statearr_36472;
})();
var statearr_36473_36507 = state_36436__$1;
(statearr_36473_36507[(2)] = null);

(statearr_36473_36507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (18))){
var inst_36406 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36474_36508 = state_36436__$1;
(statearr_36474_36508[(2)] = inst_36406);

(statearr_36474_36508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (8))){
var inst_36380 = (state_36436[(12)]);
var inst_36379 = (state_36436[(16)]);
var inst_36382 = (inst_36380 < inst_36379);
var inst_36383 = inst_36382;
var state_36436__$1 = state_36436;
if(cljs.core.truth_(inst_36383)){
var statearr_36475_36509 = state_36436__$1;
(statearr_36475_36509[(1)] = (10));

} else {
var statearr_36476_36510 = state_36436__$1;
(statearr_36476_36510[(1)] = (11));

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
});})(c__35248__auto___36482,mults,ensure_mult,p))
;
return ((function (switch__35158__auto__,c__35248__auto___36482,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35159__auto__ = null;
var cljs$core$async$state_machine__35159__auto____0 = (function (){
var statearr_36477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36477[(0)] = cljs$core$async$state_machine__35159__auto__);

(statearr_36477[(1)] = (1));

return statearr_36477;
});
var cljs$core$async$state_machine__35159__auto____1 = (function (state_36436){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_36436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e36478){if((e36478 instanceof Object)){
var ex__35162__auto__ = e36478;
var statearr_36479_36511 = state_36436;
(statearr_36479_36511[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36512 = state_36436;
state_36436 = G__36512;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$state_machine__35159__auto__ = function(state_36436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35159__auto____1.call(this,state_36436);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35159__auto____0;
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35159__auto____1;
return cljs$core$async$state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___36482,mults,ensure_mult,p))
})();
var state__35250__auto__ = (function (){var statearr_36480 = f__35249__auto__.call(null);
(statearr_36480[(6)] = c__35248__auto___36482);

return statearr_36480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___36482,mults,ensure_mult,p))
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
var G__36514 = arguments.length;
switch (G__36514) {
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
var G__36517 = arguments.length;
switch (G__36517) {
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
var G__36520 = arguments.length;
switch (G__36520) {
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
var c__35248__auto___36587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___36587,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___36587,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36559){
var state_val_36560 = (state_36559[(1)]);
if((state_val_36560 === (7))){
var state_36559__$1 = state_36559;
var statearr_36561_36588 = state_36559__$1;
(statearr_36561_36588[(2)] = null);

(statearr_36561_36588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (1))){
var state_36559__$1 = state_36559;
var statearr_36562_36589 = state_36559__$1;
(statearr_36562_36589[(2)] = null);

(statearr_36562_36589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (4))){
var inst_36523 = (state_36559[(7)]);
var inst_36525 = (inst_36523 < cnt);
var state_36559__$1 = state_36559;
if(cljs.core.truth_(inst_36525)){
var statearr_36563_36590 = state_36559__$1;
(statearr_36563_36590[(1)] = (6));

} else {
var statearr_36564_36591 = state_36559__$1;
(statearr_36564_36591[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (15))){
var inst_36555 = (state_36559[(2)]);
var state_36559__$1 = state_36559;
var statearr_36565_36592 = state_36559__$1;
(statearr_36565_36592[(2)] = inst_36555);

(statearr_36565_36592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (13))){
var inst_36548 = cljs.core.async.close_BANG_.call(null,out);
var state_36559__$1 = state_36559;
var statearr_36566_36593 = state_36559__$1;
(statearr_36566_36593[(2)] = inst_36548);

(statearr_36566_36593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (6))){
var state_36559__$1 = state_36559;
var statearr_36567_36594 = state_36559__$1;
(statearr_36567_36594[(2)] = null);

(statearr_36567_36594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (3))){
var inst_36557 = (state_36559[(2)]);
var state_36559__$1 = state_36559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36559__$1,inst_36557);
} else {
if((state_val_36560 === (12))){
var inst_36545 = (state_36559[(8)]);
var inst_36545__$1 = (state_36559[(2)]);
var inst_36546 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36545__$1);
var state_36559__$1 = (function (){var statearr_36568 = state_36559;
(statearr_36568[(8)] = inst_36545__$1);

return statearr_36568;
})();
if(cljs.core.truth_(inst_36546)){
var statearr_36569_36595 = state_36559__$1;
(statearr_36569_36595[(1)] = (13));

} else {
var statearr_36570_36596 = state_36559__$1;
(statearr_36570_36596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (2))){
var inst_36522 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36523 = (0);
var state_36559__$1 = (function (){var statearr_36571 = state_36559;
(statearr_36571[(7)] = inst_36523);

(statearr_36571[(9)] = inst_36522);

return statearr_36571;
})();
var statearr_36572_36597 = state_36559__$1;
(statearr_36572_36597[(2)] = null);

(statearr_36572_36597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (11))){
var inst_36523 = (state_36559[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36559,(10),Object,null,(9));
var inst_36532 = chs__$1.call(null,inst_36523);
var inst_36533 = done.call(null,inst_36523);
var inst_36534 = cljs.core.async.take_BANG_.call(null,inst_36532,inst_36533);
var state_36559__$1 = state_36559;
var statearr_36573_36598 = state_36559__$1;
(statearr_36573_36598[(2)] = inst_36534);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36559__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (9))){
var inst_36523 = (state_36559[(7)]);
var inst_36536 = (state_36559[(2)]);
var inst_36537 = (inst_36523 + (1));
var inst_36523__$1 = inst_36537;
var state_36559__$1 = (function (){var statearr_36574 = state_36559;
(statearr_36574[(7)] = inst_36523__$1);

(statearr_36574[(10)] = inst_36536);

return statearr_36574;
})();
var statearr_36575_36599 = state_36559__$1;
(statearr_36575_36599[(2)] = null);

(statearr_36575_36599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (5))){
var inst_36543 = (state_36559[(2)]);
var state_36559__$1 = (function (){var statearr_36576 = state_36559;
(statearr_36576[(11)] = inst_36543);

return statearr_36576;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36559__$1,(12),dchan);
} else {
if((state_val_36560 === (14))){
var inst_36545 = (state_36559[(8)]);
var inst_36550 = cljs.core.apply.call(null,f,inst_36545);
var state_36559__$1 = state_36559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36559__$1,(16),out,inst_36550);
} else {
if((state_val_36560 === (16))){
var inst_36552 = (state_36559[(2)]);
var state_36559__$1 = (function (){var statearr_36577 = state_36559;
(statearr_36577[(12)] = inst_36552);

return statearr_36577;
})();
var statearr_36578_36600 = state_36559__$1;
(statearr_36578_36600[(2)] = null);

(statearr_36578_36600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (10))){
var inst_36527 = (state_36559[(2)]);
var inst_36528 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36559__$1 = (function (){var statearr_36579 = state_36559;
(statearr_36579[(13)] = inst_36527);

return statearr_36579;
})();
var statearr_36580_36601 = state_36559__$1;
(statearr_36580_36601[(2)] = inst_36528);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36559__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (8))){
var inst_36541 = (state_36559[(2)]);
var state_36559__$1 = state_36559;
var statearr_36581_36602 = state_36559__$1;
(statearr_36581_36602[(2)] = inst_36541);

(statearr_36581_36602[(1)] = (5));


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
});})(c__35248__auto___36587,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35158__auto__,c__35248__auto___36587,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35159__auto__ = null;
var cljs$core$async$state_machine__35159__auto____0 = (function (){
var statearr_36582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36582[(0)] = cljs$core$async$state_machine__35159__auto__);

(statearr_36582[(1)] = (1));

return statearr_36582;
});
var cljs$core$async$state_machine__35159__auto____1 = (function (state_36559){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_36559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e36583){if((e36583 instanceof Object)){
var ex__35162__auto__ = e36583;
var statearr_36584_36603 = state_36559;
(statearr_36584_36603[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36604 = state_36559;
state_36559 = G__36604;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$state_machine__35159__auto__ = function(state_36559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35159__auto____1.call(this,state_36559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35159__auto____0;
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35159__auto____1;
return cljs$core$async$state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___36587,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35250__auto__ = (function (){var statearr_36585 = f__35249__auto__.call(null);
(statearr_36585[(6)] = c__35248__auto___36587);

return statearr_36585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___36587,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__36607 = arguments.length;
switch (G__36607) {
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
var c__35248__auto___36661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___36661,out){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___36661,out){
return (function (state_36639){
var state_val_36640 = (state_36639[(1)]);
if((state_val_36640 === (7))){
var inst_36619 = (state_36639[(7)]);
var inst_36618 = (state_36639[(8)]);
var inst_36618__$1 = (state_36639[(2)]);
var inst_36619__$1 = cljs.core.nth.call(null,inst_36618__$1,(0),null);
var inst_36620 = cljs.core.nth.call(null,inst_36618__$1,(1),null);
var inst_36621 = (inst_36619__$1 == null);
var state_36639__$1 = (function (){var statearr_36641 = state_36639;
(statearr_36641[(7)] = inst_36619__$1);

(statearr_36641[(9)] = inst_36620);

(statearr_36641[(8)] = inst_36618__$1);

return statearr_36641;
})();
if(cljs.core.truth_(inst_36621)){
var statearr_36642_36662 = state_36639__$1;
(statearr_36642_36662[(1)] = (8));

} else {
var statearr_36643_36663 = state_36639__$1;
(statearr_36643_36663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (1))){
var inst_36608 = cljs.core.vec.call(null,chs);
var inst_36609 = inst_36608;
var state_36639__$1 = (function (){var statearr_36644 = state_36639;
(statearr_36644[(10)] = inst_36609);

return statearr_36644;
})();
var statearr_36645_36664 = state_36639__$1;
(statearr_36645_36664[(2)] = null);

(statearr_36645_36664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (4))){
var inst_36609 = (state_36639[(10)]);
var state_36639__$1 = state_36639;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36639__$1,(7),inst_36609);
} else {
if((state_val_36640 === (6))){
var inst_36635 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
var statearr_36646_36665 = state_36639__$1;
(statearr_36646_36665[(2)] = inst_36635);

(statearr_36646_36665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (3))){
var inst_36637 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36639__$1,inst_36637);
} else {
if((state_val_36640 === (2))){
var inst_36609 = (state_36639[(10)]);
var inst_36611 = cljs.core.count.call(null,inst_36609);
var inst_36612 = (inst_36611 > (0));
var state_36639__$1 = state_36639;
if(cljs.core.truth_(inst_36612)){
var statearr_36648_36666 = state_36639__$1;
(statearr_36648_36666[(1)] = (4));

} else {
var statearr_36649_36667 = state_36639__$1;
(statearr_36649_36667[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (11))){
var inst_36609 = (state_36639[(10)]);
var inst_36628 = (state_36639[(2)]);
var tmp36647 = inst_36609;
var inst_36609__$1 = tmp36647;
var state_36639__$1 = (function (){var statearr_36650 = state_36639;
(statearr_36650[(11)] = inst_36628);

(statearr_36650[(10)] = inst_36609__$1);

return statearr_36650;
})();
var statearr_36651_36668 = state_36639__$1;
(statearr_36651_36668[(2)] = null);

(statearr_36651_36668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (9))){
var inst_36619 = (state_36639[(7)]);
var state_36639__$1 = state_36639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36639__$1,(11),out,inst_36619);
} else {
if((state_val_36640 === (5))){
var inst_36633 = cljs.core.async.close_BANG_.call(null,out);
var state_36639__$1 = state_36639;
var statearr_36652_36669 = state_36639__$1;
(statearr_36652_36669[(2)] = inst_36633);

(statearr_36652_36669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (10))){
var inst_36631 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
var statearr_36653_36670 = state_36639__$1;
(statearr_36653_36670[(2)] = inst_36631);

(statearr_36653_36670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (8))){
var inst_36609 = (state_36639[(10)]);
var inst_36619 = (state_36639[(7)]);
var inst_36620 = (state_36639[(9)]);
var inst_36618 = (state_36639[(8)]);
var inst_36623 = (function (){var cs = inst_36609;
var vec__36614 = inst_36618;
var v = inst_36619;
var c = inst_36620;
return ((function (cs,vec__36614,v,c,inst_36609,inst_36619,inst_36620,inst_36618,state_val_36640,c__35248__auto___36661,out){
return (function (p1__36605_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36605_SHARP_);
});
;})(cs,vec__36614,v,c,inst_36609,inst_36619,inst_36620,inst_36618,state_val_36640,c__35248__auto___36661,out))
})();
var inst_36624 = cljs.core.filterv.call(null,inst_36623,inst_36609);
var inst_36609__$1 = inst_36624;
var state_36639__$1 = (function (){var statearr_36654 = state_36639;
(statearr_36654[(10)] = inst_36609__$1);

return statearr_36654;
})();
var statearr_36655_36671 = state_36639__$1;
(statearr_36655_36671[(2)] = null);

(statearr_36655_36671[(1)] = (2));


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
});})(c__35248__auto___36661,out))
;
return ((function (switch__35158__auto__,c__35248__auto___36661,out){
return (function() {
var cljs$core$async$state_machine__35159__auto__ = null;
var cljs$core$async$state_machine__35159__auto____0 = (function (){
var statearr_36656 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36656[(0)] = cljs$core$async$state_machine__35159__auto__);

(statearr_36656[(1)] = (1));

return statearr_36656;
});
var cljs$core$async$state_machine__35159__auto____1 = (function (state_36639){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_36639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e36657){if((e36657 instanceof Object)){
var ex__35162__auto__ = e36657;
var statearr_36658_36672 = state_36639;
(statearr_36658_36672[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36673 = state_36639;
state_36639 = G__36673;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$state_machine__35159__auto__ = function(state_36639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35159__auto____1.call(this,state_36639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35159__auto____0;
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35159__auto____1;
return cljs$core$async$state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___36661,out))
})();
var state__35250__auto__ = (function (){var statearr_36659 = f__35249__auto__.call(null);
(statearr_36659[(6)] = c__35248__auto___36661);

return statearr_36659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___36661,out))
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
var G__36675 = arguments.length;
switch (G__36675) {
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
var c__35248__auto___36720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___36720,out){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___36720,out){
return (function (state_36699){
var state_val_36700 = (state_36699[(1)]);
if((state_val_36700 === (7))){
var inst_36681 = (state_36699[(7)]);
var inst_36681__$1 = (state_36699[(2)]);
var inst_36682 = (inst_36681__$1 == null);
var inst_36683 = cljs.core.not.call(null,inst_36682);
var state_36699__$1 = (function (){var statearr_36701 = state_36699;
(statearr_36701[(7)] = inst_36681__$1);

return statearr_36701;
})();
if(inst_36683){
var statearr_36702_36721 = state_36699__$1;
(statearr_36702_36721[(1)] = (8));

} else {
var statearr_36703_36722 = state_36699__$1;
(statearr_36703_36722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (1))){
var inst_36676 = (0);
var state_36699__$1 = (function (){var statearr_36704 = state_36699;
(statearr_36704[(8)] = inst_36676);

return statearr_36704;
})();
var statearr_36705_36723 = state_36699__$1;
(statearr_36705_36723[(2)] = null);

(statearr_36705_36723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (4))){
var state_36699__$1 = state_36699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36699__$1,(7),ch);
} else {
if((state_val_36700 === (6))){
var inst_36694 = (state_36699[(2)]);
var state_36699__$1 = state_36699;
var statearr_36706_36724 = state_36699__$1;
(statearr_36706_36724[(2)] = inst_36694);

(statearr_36706_36724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (3))){
var inst_36696 = (state_36699[(2)]);
var inst_36697 = cljs.core.async.close_BANG_.call(null,out);
var state_36699__$1 = (function (){var statearr_36707 = state_36699;
(statearr_36707[(9)] = inst_36696);

return statearr_36707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36699__$1,inst_36697);
} else {
if((state_val_36700 === (2))){
var inst_36676 = (state_36699[(8)]);
var inst_36678 = (inst_36676 < n);
var state_36699__$1 = state_36699;
if(cljs.core.truth_(inst_36678)){
var statearr_36708_36725 = state_36699__$1;
(statearr_36708_36725[(1)] = (4));

} else {
var statearr_36709_36726 = state_36699__$1;
(statearr_36709_36726[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (11))){
var inst_36676 = (state_36699[(8)]);
var inst_36686 = (state_36699[(2)]);
var inst_36687 = (inst_36676 + (1));
var inst_36676__$1 = inst_36687;
var state_36699__$1 = (function (){var statearr_36710 = state_36699;
(statearr_36710[(10)] = inst_36686);

(statearr_36710[(8)] = inst_36676__$1);

return statearr_36710;
})();
var statearr_36711_36727 = state_36699__$1;
(statearr_36711_36727[(2)] = null);

(statearr_36711_36727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (9))){
var state_36699__$1 = state_36699;
var statearr_36712_36728 = state_36699__$1;
(statearr_36712_36728[(2)] = null);

(statearr_36712_36728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (5))){
var state_36699__$1 = state_36699;
var statearr_36713_36729 = state_36699__$1;
(statearr_36713_36729[(2)] = null);

(statearr_36713_36729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (10))){
var inst_36691 = (state_36699[(2)]);
var state_36699__$1 = state_36699;
var statearr_36714_36730 = state_36699__$1;
(statearr_36714_36730[(2)] = inst_36691);

(statearr_36714_36730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (8))){
var inst_36681 = (state_36699[(7)]);
var state_36699__$1 = state_36699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36699__$1,(11),out,inst_36681);
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
});})(c__35248__auto___36720,out))
;
return ((function (switch__35158__auto__,c__35248__auto___36720,out){
return (function() {
var cljs$core$async$state_machine__35159__auto__ = null;
var cljs$core$async$state_machine__35159__auto____0 = (function (){
var statearr_36715 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36715[(0)] = cljs$core$async$state_machine__35159__auto__);

(statearr_36715[(1)] = (1));

return statearr_36715;
});
var cljs$core$async$state_machine__35159__auto____1 = (function (state_36699){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_36699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e36716){if((e36716 instanceof Object)){
var ex__35162__auto__ = e36716;
var statearr_36717_36731 = state_36699;
(statearr_36717_36731[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36732 = state_36699;
state_36699 = G__36732;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$state_machine__35159__auto__ = function(state_36699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35159__auto____1.call(this,state_36699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35159__auto____0;
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35159__auto____1;
return cljs$core$async$state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___36720,out))
})();
var state__35250__auto__ = (function (){var statearr_36718 = f__35249__auto__.call(null);
(statearr_36718[(6)] = c__35248__auto___36720);

return statearr_36718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___36720,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36734 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36734 = (function (f,ch,meta36735){
this.f = f;
this.ch = ch;
this.meta36735 = meta36735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36736,meta36735__$1){
var self__ = this;
var _36736__$1 = this;
return (new cljs.core.async.t_cljs$core$async36734(self__.f,self__.ch,meta36735__$1));
});

cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36736){
var self__ = this;
var _36736__$1 = this;
return self__.meta36735;
});

cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36737 = (function (f,ch,meta36735,_,fn1,meta36738){
this.f = f;
this.ch = ch;
this.meta36735 = meta36735;
this._ = _;
this.fn1 = fn1;
this.meta36738 = meta36738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36739,meta36738__$1){
var self__ = this;
var _36739__$1 = this;
return (new cljs.core.async.t_cljs$core$async36737(self__.f,self__.ch,self__.meta36735,self__._,self__.fn1,meta36738__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36737.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36739){
var self__ = this;
var _36739__$1 = this;
return self__.meta36738;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36737.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36737.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36733_SHARP_){
return f1.call(null,(((p1__36733_SHARP_ == null))?null:self__.f.call(null,p1__36733_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36737.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36735","meta36735",-996541028,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36734","cljs.core.async/t_cljs$core$async36734",-1971003005,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36738","meta36738",709772470,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36737";

cljs.core.async.t_cljs$core$async36737.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async36737");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36737 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36737(f__$1,ch__$1,meta36735__$1,___$2,fn1__$1,meta36738){
return (new cljs.core.async.t_cljs$core$async36737(f__$1,ch__$1,meta36735__$1,___$2,fn1__$1,meta36738));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36737(self__.f,self__.ch,self__.meta36735,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36735","meta36735",-996541028,null)], null);
});

cljs.core.async.t_cljs$core$async36734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36734";

cljs.core.async.t_cljs$core$async36734.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async36734");
});

cljs.core.async.__GT_t_cljs$core$async36734 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36734(f__$1,ch__$1,meta36735){
return (new cljs.core.async.t_cljs$core$async36734(f__$1,ch__$1,meta36735));
});

}

return (new cljs.core.async.t_cljs$core$async36734(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36740 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36740 = (function (f,ch,meta36741){
this.f = f;
this.ch = ch;
this.meta36741 = meta36741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36742,meta36741__$1){
var self__ = this;
var _36742__$1 = this;
return (new cljs.core.async.t_cljs$core$async36740(self__.f,self__.ch,meta36741__$1));
});

cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36742){
var self__ = this;
var _36742__$1 = this;
return self__.meta36741;
});

cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36741","meta36741",1116262105,null)], null);
});

cljs.core.async.t_cljs$core$async36740.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36740";

cljs.core.async.t_cljs$core$async36740.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async36740");
});

cljs.core.async.__GT_t_cljs$core$async36740 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36740(f__$1,ch__$1,meta36741){
return (new cljs.core.async.t_cljs$core$async36740(f__$1,ch__$1,meta36741));
});

}

return (new cljs.core.async.t_cljs$core$async36740(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36743 = (function (p,ch,meta36744){
this.p = p;
this.ch = ch;
this.meta36744 = meta36744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36745,meta36744__$1){
var self__ = this;
var _36745__$1 = this;
return (new cljs.core.async.t_cljs$core$async36743(self__.p,self__.ch,meta36744__$1));
});

cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36745){
var self__ = this;
var _36745__$1 = this;
return self__.meta36744;
});

cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36744","meta36744",-482989596,null)], null);
});

cljs.core.async.t_cljs$core$async36743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36743";

cljs.core.async.t_cljs$core$async36743.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async36743");
});

cljs.core.async.__GT_t_cljs$core$async36743 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36743(p__$1,ch__$1,meta36744){
return (new cljs.core.async.t_cljs$core$async36743(p__$1,ch__$1,meta36744));
});

}

return (new cljs.core.async.t_cljs$core$async36743(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36747 = arguments.length;
switch (G__36747) {
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
var c__35248__auto___36787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___36787,out){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___36787,out){
return (function (state_36768){
var state_val_36769 = (state_36768[(1)]);
if((state_val_36769 === (7))){
var inst_36764 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36770_36788 = state_36768__$1;
(statearr_36770_36788[(2)] = inst_36764);

(statearr_36770_36788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (1))){
var state_36768__$1 = state_36768;
var statearr_36771_36789 = state_36768__$1;
(statearr_36771_36789[(2)] = null);

(statearr_36771_36789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (4))){
var inst_36750 = (state_36768[(7)]);
var inst_36750__$1 = (state_36768[(2)]);
var inst_36751 = (inst_36750__$1 == null);
var state_36768__$1 = (function (){var statearr_36772 = state_36768;
(statearr_36772[(7)] = inst_36750__$1);

return statearr_36772;
})();
if(cljs.core.truth_(inst_36751)){
var statearr_36773_36790 = state_36768__$1;
(statearr_36773_36790[(1)] = (5));

} else {
var statearr_36774_36791 = state_36768__$1;
(statearr_36774_36791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (6))){
var inst_36750 = (state_36768[(7)]);
var inst_36755 = p.call(null,inst_36750);
var state_36768__$1 = state_36768;
if(cljs.core.truth_(inst_36755)){
var statearr_36775_36792 = state_36768__$1;
(statearr_36775_36792[(1)] = (8));

} else {
var statearr_36776_36793 = state_36768__$1;
(statearr_36776_36793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (3))){
var inst_36766 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36768__$1,inst_36766);
} else {
if((state_val_36769 === (2))){
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36768__$1,(4),ch);
} else {
if((state_val_36769 === (11))){
var inst_36758 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36777_36794 = state_36768__$1;
(statearr_36777_36794[(2)] = inst_36758);

(statearr_36777_36794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (9))){
var state_36768__$1 = state_36768;
var statearr_36778_36795 = state_36768__$1;
(statearr_36778_36795[(2)] = null);

(statearr_36778_36795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (5))){
var inst_36753 = cljs.core.async.close_BANG_.call(null,out);
var state_36768__$1 = state_36768;
var statearr_36779_36796 = state_36768__$1;
(statearr_36779_36796[(2)] = inst_36753);

(statearr_36779_36796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (10))){
var inst_36761 = (state_36768[(2)]);
var state_36768__$1 = (function (){var statearr_36780 = state_36768;
(statearr_36780[(8)] = inst_36761);

return statearr_36780;
})();
var statearr_36781_36797 = state_36768__$1;
(statearr_36781_36797[(2)] = null);

(statearr_36781_36797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (8))){
var inst_36750 = (state_36768[(7)]);
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36768__$1,(11),out,inst_36750);
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
});})(c__35248__auto___36787,out))
;
return ((function (switch__35158__auto__,c__35248__auto___36787,out){
return (function() {
var cljs$core$async$state_machine__35159__auto__ = null;
var cljs$core$async$state_machine__35159__auto____0 = (function (){
var statearr_36782 = [null,null,null,null,null,null,null,null,null];
(statearr_36782[(0)] = cljs$core$async$state_machine__35159__auto__);

(statearr_36782[(1)] = (1));

return statearr_36782;
});
var cljs$core$async$state_machine__35159__auto____1 = (function (state_36768){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_36768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e36783){if((e36783 instanceof Object)){
var ex__35162__auto__ = e36783;
var statearr_36784_36798 = state_36768;
(statearr_36784_36798[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36799 = state_36768;
state_36768 = G__36799;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$state_machine__35159__auto__ = function(state_36768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35159__auto____1.call(this,state_36768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35159__auto____0;
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35159__auto____1;
return cljs$core$async$state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___36787,out))
})();
var state__35250__auto__ = (function (){var statearr_36785 = f__35249__auto__.call(null);
(statearr_36785[(6)] = c__35248__auto___36787);

return statearr_36785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___36787,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36801 = arguments.length;
switch (G__36801) {
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
var c__35248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto__){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto__){
return (function (state_36864){
var state_val_36865 = (state_36864[(1)]);
if((state_val_36865 === (7))){
var inst_36860 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36866_36904 = state_36864__$1;
(statearr_36866_36904[(2)] = inst_36860);

(statearr_36866_36904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (20))){
var inst_36830 = (state_36864[(7)]);
var inst_36841 = (state_36864[(2)]);
var inst_36842 = cljs.core.next.call(null,inst_36830);
var inst_36816 = inst_36842;
var inst_36817 = null;
var inst_36818 = (0);
var inst_36819 = (0);
var state_36864__$1 = (function (){var statearr_36867 = state_36864;
(statearr_36867[(8)] = inst_36818);

(statearr_36867[(9)] = inst_36816);

(statearr_36867[(10)] = inst_36819);

(statearr_36867[(11)] = inst_36841);

(statearr_36867[(12)] = inst_36817);

return statearr_36867;
})();
var statearr_36868_36905 = state_36864__$1;
(statearr_36868_36905[(2)] = null);

(statearr_36868_36905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (1))){
var state_36864__$1 = state_36864;
var statearr_36869_36906 = state_36864__$1;
(statearr_36869_36906[(2)] = null);

(statearr_36869_36906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (4))){
var inst_36805 = (state_36864[(13)]);
var inst_36805__$1 = (state_36864[(2)]);
var inst_36806 = (inst_36805__$1 == null);
var state_36864__$1 = (function (){var statearr_36870 = state_36864;
(statearr_36870[(13)] = inst_36805__$1);

return statearr_36870;
})();
if(cljs.core.truth_(inst_36806)){
var statearr_36871_36907 = state_36864__$1;
(statearr_36871_36907[(1)] = (5));

} else {
var statearr_36872_36908 = state_36864__$1;
(statearr_36872_36908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (15))){
var state_36864__$1 = state_36864;
var statearr_36876_36909 = state_36864__$1;
(statearr_36876_36909[(2)] = null);

(statearr_36876_36909[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (21))){
var state_36864__$1 = state_36864;
var statearr_36877_36910 = state_36864__$1;
(statearr_36877_36910[(2)] = null);

(statearr_36877_36910[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (13))){
var inst_36818 = (state_36864[(8)]);
var inst_36816 = (state_36864[(9)]);
var inst_36819 = (state_36864[(10)]);
var inst_36817 = (state_36864[(12)]);
var inst_36826 = (state_36864[(2)]);
var inst_36827 = (inst_36819 + (1));
var tmp36873 = inst_36818;
var tmp36874 = inst_36816;
var tmp36875 = inst_36817;
var inst_36816__$1 = tmp36874;
var inst_36817__$1 = tmp36875;
var inst_36818__$1 = tmp36873;
var inst_36819__$1 = inst_36827;
var state_36864__$1 = (function (){var statearr_36878 = state_36864;
(statearr_36878[(8)] = inst_36818__$1);

(statearr_36878[(9)] = inst_36816__$1);

(statearr_36878[(14)] = inst_36826);

(statearr_36878[(10)] = inst_36819__$1);

(statearr_36878[(12)] = inst_36817__$1);

return statearr_36878;
})();
var statearr_36879_36911 = state_36864__$1;
(statearr_36879_36911[(2)] = null);

(statearr_36879_36911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (22))){
var state_36864__$1 = state_36864;
var statearr_36880_36912 = state_36864__$1;
(statearr_36880_36912[(2)] = null);

(statearr_36880_36912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (6))){
var inst_36805 = (state_36864[(13)]);
var inst_36814 = f.call(null,inst_36805);
var inst_36815 = cljs.core.seq.call(null,inst_36814);
var inst_36816 = inst_36815;
var inst_36817 = null;
var inst_36818 = (0);
var inst_36819 = (0);
var state_36864__$1 = (function (){var statearr_36881 = state_36864;
(statearr_36881[(8)] = inst_36818);

(statearr_36881[(9)] = inst_36816);

(statearr_36881[(10)] = inst_36819);

(statearr_36881[(12)] = inst_36817);

return statearr_36881;
})();
var statearr_36882_36913 = state_36864__$1;
(statearr_36882_36913[(2)] = null);

(statearr_36882_36913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (17))){
var inst_36830 = (state_36864[(7)]);
var inst_36834 = cljs.core.chunk_first.call(null,inst_36830);
var inst_36835 = cljs.core.chunk_rest.call(null,inst_36830);
var inst_36836 = cljs.core.count.call(null,inst_36834);
var inst_36816 = inst_36835;
var inst_36817 = inst_36834;
var inst_36818 = inst_36836;
var inst_36819 = (0);
var state_36864__$1 = (function (){var statearr_36883 = state_36864;
(statearr_36883[(8)] = inst_36818);

(statearr_36883[(9)] = inst_36816);

(statearr_36883[(10)] = inst_36819);

(statearr_36883[(12)] = inst_36817);

return statearr_36883;
})();
var statearr_36884_36914 = state_36864__$1;
(statearr_36884_36914[(2)] = null);

(statearr_36884_36914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (3))){
var inst_36862 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36864__$1,inst_36862);
} else {
if((state_val_36865 === (12))){
var inst_36850 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36885_36915 = state_36864__$1;
(statearr_36885_36915[(2)] = inst_36850);

(statearr_36885_36915[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (2))){
var state_36864__$1 = state_36864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36864__$1,(4),in$);
} else {
if((state_val_36865 === (23))){
var inst_36858 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36886_36916 = state_36864__$1;
(statearr_36886_36916[(2)] = inst_36858);

(statearr_36886_36916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (19))){
var inst_36845 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36887_36917 = state_36864__$1;
(statearr_36887_36917[(2)] = inst_36845);

(statearr_36887_36917[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (11))){
var inst_36816 = (state_36864[(9)]);
var inst_36830 = (state_36864[(7)]);
var inst_36830__$1 = cljs.core.seq.call(null,inst_36816);
var state_36864__$1 = (function (){var statearr_36888 = state_36864;
(statearr_36888[(7)] = inst_36830__$1);

return statearr_36888;
})();
if(inst_36830__$1){
var statearr_36889_36918 = state_36864__$1;
(statearr_36889_36918[(1)] = (14));

} else {
var statearr_36890_36919 = state_36864__$1;
(statearr_36890_36919[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (9))){
var inst_36852 = (state_36864[(2)]);
var inst_36853 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36864__$1 = (function (){var statearr_36891 = state_36864;
(statearr_36891[(15)] = inst_36852);

return statearr_36891;
})();
if(cljs.core.truth_(inst_36853)){
var statearr_36892_36920 = state_36864__$1;
(statearr_36892_36920[(1)] = (21));

} else {
var statearr_36893_36921 = state_36864__$1;
(statearr_36893_36921[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (5))){
var inst_36808 = cljs.core.async.close_BANG_.call(null,out);
var state_36864__$1 = state_36864;
var statearr_36894_36922 = state_36864__$1;
(statearr_36894_36922[(2)] = inst_36808);

(statearr_36894_36922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (14))){
var inst_36830 = (state_36864[(7)]);
var inst_36832 = cljs.core.chunked_seq_QMARK_.call(null,inst_36830);
var state_36864__$1 = state_36864;
if(inst_36832){
var statearr_36895_36923 = state_36864__$1;
(statearr_36895_36923[(1)] = (17));

} else {
var statearr_36896_36924 = state_36864__$1;
(statearr_36896_36924[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (16))){
var inst_36848 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36897_36925 = state_36864__$1;
(statearr_36897_36925[(2)] = inst_36848);

(statearr_36897_36925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (10))){
var inst_36819 = (state_36864[(10)]);
var inst_36817 = (state_36864[(12)]);
var inst_36824 = cljs.core._nth.call(null,inst_36817,inst_36819);
var state_36864__$1 = state_36864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36864__$1,(13),out,inst_36824);
} else {
if((state_val_36865 === (18))){
var inst_36830 = (state_36864[(7)]);
var inst_36839 = cljs.core.first.call(null,inst_36830);
var state_36864__$1 = state_36864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36864__$1,(20),out,inst_36839);
} else {
if((state_val_36865 === (8))){
var inst_36818 = (state_36864[(8)]);
var inst_36819 = (state_36864[(10)]);
var inst_36821 = (inst_36819 < inst_36818);
var inst_36822 = inst_36821;
var state_36864__$1 = state_36864;
if(cljs.core.truth_(inst_36822)){
var statearr_36898_36926 = state_36864__$1;
(statearr_36898_36926[(1)] = (10));

} else {
var statearr_36899_36927 = state_36864__$1;
(statearr_36899_36927[(1)] = (11));

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
});})(c__35248__auto__))
;
return ((function (switch__35158__auto__,c__35248__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35159__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35159__auto____0 = (function (){
var statearr_36900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36900[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35159__auto__);

(statearr_36900[(1)] = (1));

return statearr_36900;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35159__auto____1 = (function (state_36864){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_36864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e36901){if((e36901 instanceof Object)){
var ex__35162__auto__ = e36901;
var statearr_36902_36928 = state_36864;
(statearr_36902_36928[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36929 = state_36864;
state_36864 = G__36929;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35159__auto__ = function(state_36864){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35159__auto____1.call(this,state_36864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35159__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35159__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto__))
})();
var state__35250__auto__ = (function (){var statearr_36903 = f__35249__auto__.call(null);
(statearr_36903[(6)] = c__35248__auto__);

return statearr_36903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto__))
);

return c__35248__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36931 = arguments.length;
switch (G__36931) {
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
var G__36934 = arguments.length;
switch (G__36934) {
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
var G__36937 = arguments.length;
switch (G__36937) {
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
var c__35248__auto___36984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___36984,out){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___36984,out){
return (function (state_36961){
var state_val_36962 = (state_36961[(1)]);
if((state_val_36962 === (7))){
var inst_36956 = (state_36961[(2)]);
var state_36961__$1 = state_36961;
var statearr_36963_36985 = state_36961__$1;
(statearr_36963_36985[(2)] = inst_36956);

(statearr_36963_36985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (1))){
var inst_36938 = null;
var state_36961__$1 = (function (){var statearr_36964 = state_36961;
(statearr_36964[(7)] = inst_36938);

return statearr_36964;
})();
var statearr_36965_36986 = state_36961__$1;
(statearr_36965_36986[(2)] = null);

(statearr_36965_36986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (4))){
var inst_36941 = (state_36961[(8)]);
var inst_36941__$1 = (state_36961[(2)]);
var inst_36942 = (inst_36941__$1 == null);
var inst_36943 = cljs.core.not.call(null,inst_36942);
var state_36961__$1 = (function (){var statearr_36966 = state_36961;
(statearr_36966[(8)] = inst_36941__$1);

return statearr_36966;
})();
if(inst_36943){
var statearr_36967_36987 = state_36961__$1;
(statearr_36967_36987[(1)] = (5));

} else {
var statearr_36968_36988 = state_36961__$1;
(statearr_36968_36988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (6))){
var state_36961__$1 = state_36961;
var statearr_36969_36989 = state_36961__$1;
(statearr_36969_36989[(2)] = null);

(statearr_36969_36989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (3))){
var inst_36958 = (state_36961[(2)]);
var inst_36959 = cljs.core.async.close_BANG_.call(null,out);
var state_36961__$1 = (function (){var statearr_36970 = state_36961;
(statearr_36970[(9)] = inst_36958);

return statearr_36970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36961__$1,inst_36959);
} else {
if((state_val_36962 === (2))){
var state_36961__$1 = state_36961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36961__$1,(4),ch);
} else {
if((state_val_36962 === (11))){
var inst_36941 = (state_36961[(8)]);
var inst_36950 = (state_36961[(2)]);
var inst_36938 = inst_36941;
var state_36961__$1 = (function (){var statearr_36971 = state_36961;
(statearr_36971[(7)] = inst_36938);

(statearr_36971[(10)] = inst_36950);

return statearr_36971;
})();
var statearr_36972_36990 = state_36961__$1;
(statearr_36972_36990[(2)] = null);

(statearr_36972_36990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (9))){
var inst_36941 = (state_36961[(8)]);
var state_36961__$1 = state_36961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36961__$1,(11),out,inst_36941);
} else {
if((state_val_36962 === (5))){
var inst_36938 = (state_36961[(7)]);
var inst_36941 = (state_36961[(8)]);
var inst_36945 = cljs.core._EQ_.call(null,inst_36941,inst_36938);
var state_36961__$1 = state_36961;
if(inst_36945){
var statearr_36974_36991 = state_36961__$1;
(statearr_36974_36991[(1)] = (8));

} else {
var statearr_36975_36992 = state_36961__$1;
(statearr_36975_36992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (10))){
var inst_36953 = (state_36961[(2)]);
var state_36961__$1 = state_36961;
var statearr_36976_36993 = state_36961__$1;
(statearr_36976_36993[(2)] = inst_36953);

(statearr_36976_36993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (8))){
var inst_36938 = (state_36961[(7)]);
var tmp36973 = inst_36938;
var inst_36938__$1 = tmp36973;
var state_36961__$1 = (function (){var statearr_36977 = state_36961;
(statearr_36977[(7)] = inst_36938__$1);

return statearr_36977;
})();
var statearr_36978_36994 = state_36961__$1;
(statearr_36978_36994[(2)] = null);

(statearr_36978_36994[(1)] = (2));


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
});})(c__35248__auto___36984,out))
;
return ((function (switch__35158__auto__,c__35248__auto___36984,out){
return (function() {
var cljs$core$async$state_machine__35159__auto__ = null;
var cljs$core$async$state_machine__35159__auto____0 = (function (){
var statearr_36979 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36979[(0)] = cljs$core$async$state_machine__35159__auto__);

(statearr_36979[(1)] = (1));

return statearr_36979;
});
var cljs$core$async$state_machine__35159__auto____1 = (function (state_36961){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_36961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e36980){if((e36980 instanceof Object)){
var ex__35162__auto__ = e36980;
var statearr_36981_36995 = state_36961;
(statearr_36981_36995[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36996 = state_36961;
state_36961 = G__36996;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$state_machine__35159__auto__ = function(state_36961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35159__auto____1.call(this,state_36961);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35159__auto____0;
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35159__auto____1;
return cljs$core$async$state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___36984,out))
})();
var state__35250__auto__ = (function (){var statearr_36982 = f__35249__auto__.call(null);
(statearr_36982[(6)] = c__35248__auto___36984);

return statearr_36982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___36984,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36998 = arguments.length;
switch (G__36998) {
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
var c__35248__auto___37064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___37064,out){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___37064,out){
return (function (state_37036){
var state_val_37037 = (state_37036[(1)]);
if((state_val_37037 === (7))){
var inst_37032 = (state_37036[(2)]);
var state_37036__$1 = state_37036;
var statearr_37038_37065 = state_37036__$1;
(statearr_37038_37065[(2)] = inst_37032);

(statearr_37038_37065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (1))){
var inst_36999 = (new Array(n));
var inst_37000 = inst_36999;
var inst_37001 = (0);
var state_37036__$1 = (function (){var statearr_37039 = state_37036;
(statearr_37039[(7)] = inst_37000);

(statearr_37039[(8)] = inst_37001);

return statearr_37039;
})();
var statearr_37040_37066 = state_37036__$1;
(statearr_37040_37066[(2)] = null);

(statearr_37040_37066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (4))){
var inst_37004 = (state_37036[(9)]);
var inst_37004__$1 = (state_37036[(2)]);
var inst_37005 = (inst_37004__$1 == null);
var inst_37006 = cljs.core.not.call(null,inst_37005);
var state_37036__$1 = (function (){var statearr_37041 = state_37036;
(statearr_37041[(9)] = inst_37004__$1);

return statearr_37041;
})();
if(inst_37006){
var statearr_37042_37067 = state_37036__$1;
(statearr_37042_37067[(1)] = (5));

} else {
var statearr_37043_37068 = state_37036__$1;
(statearr_37043_37068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (15))){
var inst_37026 = (state_37036[(2)]);
var state_37036__$1 = state_37036;
var statearr_37044_37069 = state_37036__$1;
(statearr_37044_37069[(2)] = inst_37026);

(statearr_37044_37069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (13))){
var state_37036__$1 = state_37036;
var statearr_37045_37070 = state_37036__$1;
(statearr_37045_37070[(2)] = null);

(statearr_37045_37070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (6))){
var inst_37001 = (state_37036[(8)]);
var inst_37022 = (inst_37001 > (0));
var state_37036__$1 = state_37036;
if(cljs.core.truth_(inst_37022)){
var statearr_37046_37071 = state_37036__$1;
(statearr_37046_37071[(1)] = (12));

} else {
var statearr_37047_37072 = state_37036__$1;
(statearr_37047_37072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (3))){
var inst_37034 = (state_37036[(2)]);
var state_37036__$1 = state_37036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37036__$1,inst_37034);
} else {
if((state_val_37037 === (12))){
var inst_37000 = (state_37036[(7)]);
var inst_37024 = cljs.core.vec.call(null,inst_37000);
var state_37036__$1 = state_37036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37036__$1,(15),out,inst_37024);
} else {
if((state_val_37037 === (2))){
var state_37036__$1 = state_37036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37036__$1,(4),ch);
} else {
if((state_val_37037 === (11))){
var inst_37016 = (state_37036[(2)]);
var inst_37017 = (new Array(n));
var inst_37000 = inst_37017;
var inst_37001 = (0);
var state_37036__$1 = (function (){var statearr_37048 = state_37036;
(statearr_37048[(7)] = inst_37000);

(statearr_37048[(8)] = inst_37001);

(statearr_37048[(10)] = inst_37016);

return statearr_37048;
})();
var statearr_37049_37073 = state_37036__$1;
(statearr_37049_37073[(2)] = null);

(statearr_37049_37073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (9))){
var inst_37000 = (state_37036[(7)]);
var inst_37014 = cljs.core.vec.call(null,inst_37000);
var state_37036__$1 = state_37036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37036__$1,(11),out,inst_37014);
} else {
if((state_val_37037 === (5))){
var inst_37009 = (state_37036[(11)]);
var inst_37000 = (state_37036[(7)]);
var inst_37004 = (state_37036[(9)]);
var inst_37001 = (state_37036[(8)]);
var inst_37008 = (inst_37000[inst_37001] = inst_37004);
var inst_37009__$1 = (inst_37001 + (1));
var inst_37010 = (inst_37009__$1 < n);
var state_37036__$1 = (function (){var statearr_37050 = state_37036;
(statearr_37050[(12)] = inst_37008);

(statearr_37050[(11)] = inst_37009__$1);

return statearr_37050;
})();
if(cljs.core.truth_(inst_37010)){
var statearr_37051_37074 = state_37036__$1;
(statearr_37051_37074[(1)] = (8));

} else {
var statearr_37052_37075 = state_37036__$1;
(statearr_37052_37075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (14))){
var inst_37029 = (state_37036[(2)]);
var inst_37030 = cljs.core.async.close_BANG_.call(null,out);
var state_37036__$1 = (function (){var statearr_37054 = state_37036;
(statearr_37054[(13)] = inst_37029);

return statearr_37054;
})();
var statearr_37055_37076 = state_37036__$1;
(statearr_37055_37076[(2)] = inst_37030);

(statearr_37055_37076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (10))){
var inst_37020 = (state_37036[(2)]);
var state_37036__$1 = state_37036;
var statearr_37056_37077 = state_37036__$1;
(statearr_37056_37077[(2)] = inst_37020);

(statearr_37056_37077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (8))){
var inst_37009 = (state_37036[(11)]);
var inst_37000 = (state_37036[(7)]);
var tmp37053 = inst_37000;
var inst_37000__$1 = tmp37053;
var inst_37001 = inst_37009;
var state_37036__$1 = (function (){var statearr_37057 = state_37036;
(statearr_37057[(7)] = inst_37000__$1);

(statearr_37057[(8)] = inst_37001);

return statearr_37057;
})();
var statearr_37058_37078 = state_37036__$1;
(statearr_37058_37078[(2)] = null);

(statearr_37058_37078[(1)] = (2));


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
});})(c__35248__auto___37064,out))
;
return ((function (switch__35158__auto__,c__35248__auto___37064,out){
return (function() {
var cljs$core$async$state_machine__35159__auto__ = null;
var cljs$core$async$state_machine__35159__auto____0 = (function (){
var statearr_37059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37059[(0)] = cljs$core$async$state_machine__35159__auto__);

(statearr_37059[(1)] = (1));

return statearr_37059;
});
var cljs$core$async$state_machine__35159__auto____1 = (function (state_37036){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_37036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e37060){if((e37060 instanceof Object)){
var ex__35162__auto__ = e37060;
var statearr_37061_37079 = state_37036;
(statearr_37061_37079[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37080 = state_37036;
state_37036 = G__37080;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$state_machine__35159__auto__ = function(state_37036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35159__auto____1.call(this,state_37036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35159__auto____0;
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35159__auto____1;
return cljs$core$async$state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___37064,out))
})();
var state__35250__auto__ = (function (){var statearr_37062 = f__35249__auto__.call(null);
(statearr_37062[(6)] = c__35248__auto___37064);

return statearr_37062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___37064,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37082 = arguments.length;
switch (G__37082) {
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
var c__35248__auto___37152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___37152,out){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___37152,out){
return (function (state_37124){
var state_val_37125 = (state_37124[(1)]);
if((state_val_37125 === (7))){
var inst_37120 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37126_37153 = state_37124__$1;
(statearr_37126_37153[(2)] = inst_37120);

(statearr_37126_37153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (1))){
var inst_37083 = [];
var inst_37084 = inst_37083;
var inst_37085 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37124__$1 = (function (){var statearr_37127 = state_37124;
(statearr_37127[(7)] = inst_37085);

(statearr_37127[(8)] = inst_37084);

return statearr_37127;
})();
var statearr_37128_37154 = state_37124__$1;
(statearr_37128_37154[(2)] = null);

(statearr_37128_37154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (4))){
var inst_37088 = (state_37124[(9)]);
var inst_37088__$1 = (state_37124[(2)]);
var inst_37089 = (inst_37088__$1 == null);
var inst_37090 = cljs.core.not.call(null,inst_37089);
var state_37124__$1 = (function (){var statearr_37129 = state_37124;
(statearr_37129[(9)] = inst_37088__$1);

return statearr_37129;
})();
if(inst_37090){
var statearr_37130_37155 = state_37124__$1;
(statearr_37130_37155[(1)] = (5));

} else {
var statearr_37131_37156 = state_37124__$1;
(statearr_37131_37156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (15))){
var inst_37114 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37132_37157 = state_37124__$1;
(statearr_37132_37157[(2)] = inst_37114);

(statearr_37132_37157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (13))){
var state_37124__$1 = state_37124;
var statearr_37133_37158 = state_37124__$1;
(statearr_37133_37158[(2)] = null);

(statearr_37133_37158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (6))){
var inst_37084 = (state_37124[(8)]);
var inst_37109 = inst_37084.length;
var inst_37110 = (inst_37109 > (0));
var state_37124__$1 = state_37124;
if(cljs.core.truth_(inst_37110)){
var statearr_37134_37159 = state_37124__$1;
(statearr_37134_37159[(1)] = (12));

} else {
var statearr_37135_37160 = state_37124__$1;
(statearr_37135_37160[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (3))){
var inst_37122 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37124__$1,inst_37122);
} else {
if((state_val_37125 === (12))){
var inst_37084 = (state_37124[(8)]);
var inst_37112 = cljs.core.vec.call(null,inst_37084);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37124__$1,(15),out,inst_37112);
} else {
if((state_val_37125 === (2))){
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37124__$1,(4),ch);
} else {
if((state_val_37125 === (11))){
var inst_37088 = (state_37124[(9)]);
var inst_37092 = (state_37124[(10)]);
var inst_37102 = (state_37124[(2)]);
var inst_37103 = [];
var inst_37104 = inst_37103.push(inst_37088);
var inst_37084 = inst_37103;
var inst_37085 = inst_37092;
var state_37124__$1 = (function (){var statearr_37136 = state_37124;
(statearr_37136[(7)] = inst_37085);

(statearr_37136[(11)] = inst_37104);

(statearr_37136[(12)] = inst_37102);

(statearr_37136[(8)] = inst_37084);

return statearr_37136;
})();
var statearr_37137_37161 = state_37124__$1;
(statearr_37137_37161[(2)] = null);

(statearr_37137_37161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (9))){
var inst_37084 = (state_37124[(8)]);
var inst_37100 = cljs.core.vec.call(null,inst_37084);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37124__$1,(11),out,inst_37100);
} else {
if((state_val_37125 === (5))){
var inst_37085 = (state_37124[(7)]);
var inst_37088 = (state_37124[(9)]);
var inst_37092 = (state_37124[(10)]);
var inst_37092__$1 = f.call(null,inst_37088);
var inst_37093 = cljs.core._EQ_.call(null,inst_37092__$1,inst_37085);
var inst_37094 = cljs.core.keyword_identical_QMARK_.call(null,inst_37085,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37095 = (inst_37093) || (inst_37094);
var state_37124__$1 = (function (){var statearr_37138 = state_37124;
(statearr_37138[(10)] = inst_37092__$1);

return statearr_37138;
})();
if(cljs.core.truth_(inst_37095)){
var statearr_37139_37162 = state_37124__$1;
(statearr_37139_37162[(1)] = (8));

} else {
var statearr_37140_37163 = state_37124__$1;
(statearr_37140_37163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (14))){
var inst_37117 = (state_37124[(2)]);
var inst_37118 = cljs.core.async.close_BANG_.call(null,out);
var state_37124__$1 = (function (){var statearr_37142 = state_37124;
(statearr_37142[(13)] = inst_37117);

return statearr_37142;
})();
var statearr_37143_37164 = state_37124__$1;
(statearr_37143_37164[(2)] = inst_37118);

(statearr_37143_37164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (10))){
var inst_37107 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37144_37165 = state_37124__$1;
(statearr_37144_37165[(2)] = inst_37107);

(statearr_37144_37165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (8))){
var inst_37088 = (state_37124[(9)]);
var inst_37092 = (state_37124[(10)]);
var inst_37084 = (state_37124[(8)]);
var inst_37097 = inst_37084.push(inst_37088);
var tmp37141 = inst_37084;
var inst_37084__$1 = tmp37141;
var inst_37085 = inst_37092;
var state_37124__$1 = (function (){var statearr_37145 = state_37124;
(statearr_37145[(7)] = inst_37085);

(statearr_37145[(14)] = inst_37097);

(statearr_37145[(8)] = inst_37084__$1);

return statearr_37145;
})();
var statearr_37146_37166 = state_37124__$1;
(statearr_37146_37166[(2)] = null);

(statearr_37146_37166[(1)] = (2));


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
});})(c__35248__auto___37152,out))
;
return ((function (switch__35158__auto__,c__35248__auto___37152,out){
return (function() {
var cljs$core$async$state_machine__35159__auto__ = null;
var cljs$core$async$state_machine__35159__auto____0 = (function (){
var statearr_37147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37147[(0)] = cljs$core$async$state_machine__35159__auto__);

(statearr_37147[(1)] = (1));

return statearr_37147;
});
var cljs$core$async$state_machine__35159__auto____1 = (function (state_37124){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_37124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e37148){if((e37148 instanceof Object)){
var ex__35162__auto__ = e37148;
var statearr_37149_37167 = state_37124;
(statearr_37149_37167[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37168 = state_37124;
state_37124 = G__37168;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
cljs$core$async$state_machine__35159__auto__ = function(state_37124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35159__auto____1.call(this,state_37124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35159__auto____0;
cljs$core$async$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35159__auto____1;
return cljs$core$async$state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___37152,out))
})();
var state__35250__auto__ = (function (){var statearr_37150 = f__35249__auto__.call(null);
(statearr_37150[(6)] = c__35248__auto___37152);

return statearr_37150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___37152,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1506023645568
