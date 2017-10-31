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
var G__45793 = arguments.length;
switch (G__45793) {
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
if(typeof cljs.core.async.t_cljs$core$async45794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45794 = (function (f,blockable,meta45795){
this.f = f;
this.blockable = blockable;
this.meta45795 = meta45795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45796,meta45795__$1){
var self__ = this;
var _45796__$1 = this;
return (new cljs.core.async.t_cljs$core$async45794(self__.f,self__.blockable,meta45795__$1));
});

cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45796){
var self__ = this;
var _45796__$1 = this;
return self__.meta45795;
});

cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async45794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45795","meta45795",905413589,null)], null);
});

cljs.core.async.t_cljs$core$async45794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45794";

cljs.core.async.t_cljs$core$async45794.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async45794");
});

cljs.core.async.__GT_t_cljs$core$async45794 = (function cljs$core$async$__GT_t_cljs$core$async45794(f__$1,blockable__$1,meta45795){
return (new cljs.core.async.t_cljs$core$async45794(f__$1,blockable__$1,meta45795));
});

}

return (new cljs.core.async.t_cljs$core$async45794(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45800 = arguments.length;
switch (G__45800) {
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
var G__45803 = arguments.length;
switch (G__45803) {
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
var G__45806 = arguments.length;
switch (G__45806) {
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
var val_45808 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45808);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45808,ret){
return (function (){
return fn1.call(null,val_45808);
});})(val_45808,ret))
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
var G__45810 = arguments.length;
switch (G__45810) {
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
var n__31292__auto___45812 = n;
var x_45813 = (0);
while(true){
if((x_45813 < n__31292__auto___45812)){
(a[x_45813] = (0));

var G__45814 = (x_45813 + (1));
x_45813 = G__45814;
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

var G__45815 = (i + (1));
i = G__45815;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async45816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45816 = (function (flag,meta45817){
this.flag = flag;
this.meta45817 = meta45817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45818,meta45817__$1){
var self__ = this;
var _45818__$1 = this;
return (new cljs.core.async.t_cljs$core$async45816(self__.flag,meta45817__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45818){
var self__ = this;
var _45818__$1 = this;
return self__.meta45817;
});})(flag))
;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45816.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45817","meta45817",1998465642,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async45816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45816";

cljs.core.async.t_cljs$core$async45816.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async45816");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async45816 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45816(flag__$1,meta45817){
return (new cljs.core.async.t_cljs$core$async45816(flag__$1,meta45817));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async45816(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async45819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45819 = (function (flag,cb,meta45820){
this.flag = flag;
this.cb = cb;
this.meta45820 = meta45820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45821,meta45820__$1){
var self__ = this;
var _45821__$1 = this;
return (new cljs.core.async.t_cljs$core$async45819(self__.flag,self__.cb,meta45820__$1));
});

cljs.core.async.t_cljs$core$async45819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45821){
var self__ = this;
var _45821__$1 = this;
return self__.meta45820;
});

cljs.core.async.t_cljs$core$async45819.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async45819.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async45819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45820","meta45820",900467470,null)], null);
});

cljs.core.async.t_cljs$core$async45819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45819";

cljs.core.async.t_cljs$core$async45819.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async45819");
});

cljs.core.async.__GT_t_cljs$core$async45819 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45819(flag__$1,cb__$1,meta45820){
return (new cljs.core.async.t_cljs$core$async45819(flag__$1,cb__$1,meta45820));
});

}

return (new cljs.core.async.t_cljs$core$async45819(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__45822_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45822_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45823_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45823_SHARP_,port], null));
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
var G__45824 = (i + (1));
i = G__45824;
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
var len__31526__auto___45830 = arguments.length;
var i__31527__auto___45831 = (0);
while(true){
if((i__31527__auto___45831 < len__31526__auto___45830)){
args__31533__auto__.push((arguments[i__31527__auto___45831]));

var G__45832 = (i__31527__auto___45831 + (1));
i__31527__auto___45831 = G__45832;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45827){
var map__45828 = p__45827;
var map__45828__$1 = ((((!((map__45828 == null)))?((((map__45828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45828):map__45828);
var opts = map__45828__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45825){
var G__45826 = cljs.core.first.call(null,seq45825);
var seq45825__$1 = cljs.core.next.call(null,seq45825);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45826,seq45825__$1);
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
var G__45834 = arguments.length;
switch (G__45834) {
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
var c__45733__auto___45880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___45880){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___45880){
return (function (state_45858){
var state_val_45859 = (state_45858[(1)]);
if((state_val_45859 === (7))){
var inst_45854 = (state_45858[(2)]);
var state_45858__$1 = state_45858;
var statearr_45860_45881 = state_45858__$1;
(statearr_45860_45881[(2)] = inst_45854);

(statearr_45860_45881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45859 === (1))){
var state_45858__$1 = state_45858;
var statearr_45861_45882 = state_45858__$1;
(statearr_45861_45882[(2)] = null);

(statearr_45861_45882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45859 === (4))){
var inst_45837 = (state_45858[(7)]);
var inst_45837__$1 = (state_45858[(2)]);
var inst_45838 = (inst_45837__$1 == null);
var state_45858__$1 = (function (){var statearr_45862 = state_45858;
(statearr_45862[(7)] = inst_45837__$1);

return statearr_45862;
})();
if(cljs.core.truth_(inst_45838)){
var statearr_45863_45883 = state_45858__$1;
(statearr_45863_45883[(1)] = (5));

} else {
var statearr_45864_45884 = state_45858__$1;
(statearr_45864_45884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45859 === (13))){
var state_45858__$1 = state_45858;
var statearr_45865_45885 = state_45858__$1;
(statearr_45865_45885[(2)] = null);

(statearr_45865_45885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45859 === (6))){
var inst_45837 = (state_45858[(7)]);
var state_45858__$1 = state_45858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45858__$1,(11),to,inst_45837);
} else {
if((state_val_45859 === (3))){
var inst_45856 = (state_45858[(2)]);
var state_45858__$1 = state_45858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45858__$1,inst_45856);
} else {
if((state_val_45859 === (12))){
var state_45858__$1 = state_45858;
var statearr_45866_45886 = state_45858__$1;
(statearr_45866_45886[(2)] = null);

(statearr_45866_45886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45859 === (2))){
var state_45858__$1 = state_45858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45858__$1,(4),from);
} else {
if((state_val_45859 === (11))){
var inst_45847 = (state_45858[(2)]);
var state_45858__$1 = state_45858;
if(cljs.core.truth_(inst_45847)){
var statearr_45867_45887 = state_45858__$1;
(statearr_45867_45887[(1)] = (12));

} else {
var statearr_45868_45888 = state_45858__$1;
(statearr_45868_45888[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45859 === (9))){
var state_45858__$1 = state_45858;
var statearr_45869_45889 = state_45858__$1;
(statearr_45869_45889[(2)] = null);

(statearr_45869_45889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45859 === (5))){
var state_45858__$1 = state_45858;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45870_45890 = state_45858__$1;
(statearr_45870_45890[(1)] = (8));

} else {
var statearr_45871_45891 = state_45858__$1;
(statearr_45871_45891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45859 === (14))){
var inst_45852 = (state_45858[(2)]);
var state_45858__$1 = state_45858;
var statearr_45872_45892 = state_45858__$1;
(statearr_45872_45892[(2)] = inst_45852);

(statearr_45872_45892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45859 === (10))){
var inst_45844 = (state_45858[(2)]);
var state_45858__$1 = state_45858;
var statearr_45873_45893 = state_45858__$1;
(statearr_45873_45893[(2)] = inst_45844);

(statearr_45873_45893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45859 === (8))){
var inst_45841 = cljs.core.async.close_BANG_.call(null,to);
var state_45858__$1 = state_45858;
var statearr_45874_45894 = state_45858__$1;
(statearr_45874_45894[(2)] = inst_45841);

(statearr_45874_45894[(1)] = (10));


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
});})(c__45733__auto___45880))
;
return ((function (switch__45643__auto__,c__45733__auto___45880){
return (function() {
var cljs$core$async$state_machine__45644__auto__ = null;
var cljs$core$async$state_machine__45644__auto____0 = (function (){
var statearr_45875 = [null,null,null,null,null,null,null,null];
(statearr_45875[(0)] = cljs$core$async$state_machine__45644__auto__);

(statearr_45875[(1)] = (1));

return statearr_45875;
});
var cljs$core$async$state_machine__45644__auto____1 = (function (state_45858){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_45858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e45876){if((e45876 instanceof Object)){
var ex__45647__auto__ = e45876;
var statearr_45877_45895 = state_45858;
(statearr_45877_45895[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45896 = state_45858;
state_45858 = G__45896;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$state_machine__45644__auto__ = function(state_45858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45644__auto____1.call(this,state_45858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45644__auto____0;
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45644__auto____1;
return cljs$core$async$state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___45880))
})();
var state__45735__auto__ = (function (){var statearr_45878 = f__45734__auto__.call(null);
(statearr_45878[(6)] = c__45733__auto___45880);

return statearr_45878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___45880))
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
return (function (p__45897){
var vec__45898 = p__45897;
var v = cljs.core.nth.call(null,vec__45898,(0),null);
var p = cljs.core.nth.call(null,vec__45898,(1),null);
var job = vec__45898;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__45733__auto___46069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___46069,res,vec__45898,v,p,job,jobs,results){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___46069,res,vec__45898,v,p,job,jobs,results){
return (function (state_45905){
var state_val_45906 = (state_45905[(1)]);
if((state_val_45906 === (1))){
var state_45905__$1 = state_45905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45905__$1,(2),res,v);
} else {
if((state_val_45906 === (2))){
var inst_45902 = (state_45905[(2)]);
var inst_45903 = cljs.core.async.close_BANG_.call(null,res);
var state_45905__$1 = (function (){var statearr_45907 = state_45905;
(statearr_45907[(7)] = inst_45902);

return statearr_45907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45905__$1,inst_45903);
} else {
return null;
}
}
});})(c__45733__auto___46069,res,vec__45898,v,p,job,jobs,results))
;
return ((function (switch__45643__auto__,c__45733__auto___46069,res,vec__45898,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0 = (function (){
var statearr_45908 = [null,null,null,null,null,null,null,null];
(statearr_45908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__);

(statearr_45908[(1)] = (1));

return statearr_45908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1 = (function (state_45905){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_45905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e45909){if((e45909 instanceof Object)){
var ex__45647__auto__ = e45909;
var statearr_45910_46070 = state_45905;
(statearr_45910_46070[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46071 = state_45905;
state_45905 = G__46071;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__ = function(state_45905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1.call(this,state_45905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___46069,res,vec__45898,v,p,job,jobs,results))
})();
var state__45735__auto__ = (function (){var statearr_45911 = f__45734__auto__.call(null);
(statearr_45911[(6)] = c__45733__auto___46069);

return statearr_45911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___46069,res,vec__45898,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45912){
var vec__45913 = p__45912;
var v = cljs.core.nth.call(null,vec__45913,(0),null);
var p = cljs.core.nth.call(null,vec__45913,(1),null);
var job = vec__45913;
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
var n__31292__auto___46072 = n;
var __46073 = (0);
while(true){
if((__46073 < n__31292__auto___46072)){
var G__45916_46074 = type;
var G__45916_46075__$1 = (((G__45916_46074 instanceof cljs.core.Keyword))?G__45916_46074.fqn:null);
switch (G__45916_46075__$1) {
case "compute":
var c__45733__auto___46077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46073,c__45733__auto___46077,G__45916_46074,G__45916_46075__$1,n__31292__auto___46072,jobs,results,process,async){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (__46073,c__45733__auto___46077,G__45916_46074,G__45916_46075__$1,n__31292__auto___46072,jobs,results,process,async){
return (function (state_45929){
var state_val_45930 = (state_45929[(1)]);
if((state_val_45930 === (1))){
var state_45929__$1 = state_45929;
var statearr_45931_46078 = state_45929__$1;
(statearr_45931_46078[(2)] = null);

(statearr_45931_46078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45930 === (2))){
var state_45929__$1 = state_45929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45929__$1,(4),jobs);
} else {
if((state_val_45930 === (3))){
var inst_45927 = (state_45929[(2)]);
var state_45929__$1 = state_45929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45929__$1,inst_45927);
} else {
if((state_val_45930 === (4))){
var inst_45919 = (state_45929[(2)]);
var inst_45920 = process.call(null,inst_45919);
var state_45929__$1 = state_45929;
if(cljs.core.truth_(inst_45920)){
var statearr_45932_46079 = state_45929__$1;
(statearr_45932_46079[(1)] = (5));

} else {
var statearr_45933_46080 = state_45929__$1;
(statearr_45933_46080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45930 === (5))){
var state_45929__$1 = state_45929;
var statearr_45934_46081 = state_45929__$1;
(statearr_45934_46081[(2)] = null);

(statearr_45934_46081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45930 === (6))){
var state_45929__$1 = state_45929;
var statearr_45935_46082 = state_45929__$1;
(statearr_45935_46082[(2)] = null);

(statearr_45935_46082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45930 === (7))){
var inst_45925 = (state_45929[(2)]);
var state_45929__$1 = state_45929;
var statearr_45936_46083 = state_45929__$1;
(statearr_45936_46083[(2)] = inst_45925);

(statearr_45936_46083[(1)] = (3));


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
});})(__46073,c__45733__auto___46077,G__45916_46074,G__45916_46075__$1,n__31292__auto___46072,jobs,results,process,async))
;
return ((function (__46073,switch__45643__auto__,c__45733__auto___46077,G__45916_46074,G__45916_46075__$1,n__31292__auto___46072,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0 = (function (){
var statearr_45937 = [null,null,null,null,null,null,null];
(statearr_45937[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__);

(statearr_45937[(1)] = (1));

return statearr_45937;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1 = (function (state_45929){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_45929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e45938){if((e45938 instanceof Object)){
var ex__45647__auto__ = e45938;
var statearr_45939_46084 = state_45929;
(statearr_45939_46084[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46085 = state_45929;
state_45929 = G__46085;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__ = function(state_45929){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1.call(this,state_45929);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__;
})()
;})(__46073,switch__45643__auto__,c__45733__auto___46077,G__45916_46074,G__45916_46075__$1,n__31292__auto___46072,jobs,results,process,async))
})();
var state__45735__auto__ = (function (){var statearr_45940 = f__45734__auto__.call(null);
(statearr_45940[(6)] = c__45733__auto___46077);

return statearr_45940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(__46073,c__45733__auto___46077,G__45916_46074,G__45916_46075__$1,n__31292__auto___46072,jobs,results,process,async))
);


break;
case "async":
var c__45733__auto___46086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46073,c__45733__auto___46086,G__45916_46074,G__45916_46075__$1,n__31292__auto___46072,jobs,results,process,async){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (__46073,c__45733__auto___46086,G__45916_46074,G__45916_46075__$1,n__31292__auto___46072,jobs,results,process,async){
return (function (state_45953){
var state_val_45954 = (state_45953[(1)]);
if((state_val_45954 === (1))){
var state_45953__$1 = state_45953;
var statearr_45955_46087 = state_45953__$1;
(statearr_45955_46087[(2)] = null);

(statearr_45955_46087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45954 === (2))){
var state_45953__$1 = state_45953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45953__$1,(4),jobs);
} else {
if((state_val_45954 === (3))){
var inst_45951 = (state_45953[(2)]);
var state_45953__$1 = state_45953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45953__$1,inst_45951);
} else {
if((state_val_45954 === (4))){
var inst_45943 = (state_45953[(2)]);
var inst_45944 = async.call(null,inst_45943);
var state_45953__$1 = state_45953;
if(cljs.core.truth_(inst_45944)){
var statearr_45956_46088 = state_45953__$1;
(statearr_45956_46088[(1)] = (5));

} else {
var statearr_45957_46089 = state_45953__$1;
(statearr_45957_46089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45954 === (5))){
var state_45953__$1 = state_45953;
var statearr_45958_46090 = state_45953__$1;
(statearr_45958_46090[(2)] = null);

(statearr_45958_46090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45954 === (6))){
var state_45953__$1 = state_45953;
var statearr_45959_46091 = state_45953__$1;
(statearr_45959_46091[(2)] = null);

(statearr_45959_46091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45954 === (7))){
var inst_45949 = (state_45953[(2)]);
var state_45953__$1 = state_45953;
var statearr_45960_46092 = state_45953__$1;
(statearr_45960_46092[(2)] = inst_45949);

(statearr_45960_46092[(1)] = (3));


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
});})(__46073,c__45733__auto___46086,G__45916_46074,G__45916_46075__$1,n__31292__auto___46072,jobs,results,process,async))
;
return ((function (__46073,switch__45643__auto__,c__45733__auto___46086,G__45916_46074,G__45916_46075__$1,n__31292__auto___46072,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0 = (function (){
var statearr_45961 = [null,null,null,null,null,null,null];
(statearr_45961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__);

(statearr_45961[(1)] = (1));

return statearr_45961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1 = (function (state_45953){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_45953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e45962){if((e45962 instanceof Object)){
var ex__45647__auto__ = e45962;
var statearr_45963_46093 = state_45953;
(statearr_45963_46093[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46094 = state_45953;
state_45953 = G__46094;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__ = function(state_45953){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1.call(this,state_45953);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__;
})()
;})(__46073,switch__45643__auto__,c__45733__auto___46086,G__45916_46074,G__45916_46075__$1,n__31292__auto___46072,jobs,results,process,async))
})();
var state__45735__auto__ = (function (){var statearr_45964 = f__45734__auto__.call(null);
(statearr_45964[(6)] = c__45733__auto___46086);

return statearr_45964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(__46073,c__45733__auto___46086,G__45916_46074,G__45916_46075__$1,n__31292__auto___46072,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45916_46075__$1)].join('')));

}

var G__46095 = (__46073 + (1));
__46073 = G__46095;
continue;
} else {
}
break;
}

var c__45733__auto___46096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___46096,jobs,results,process,async){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___46096,jobs,results,process,async){
return (function (state_45986){
var state_val_45987 = (state_45986[(1)]);
if((state_val_45987 === (1))){
var state_45986__$1 = state_45986;
var statearr_45988_46097 = state_45986__$1;
(statearr_45988_46097[(2)] = null);

(statearr_45988_46097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (2))){
var state_45986__$1 = state_45986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45986__$1,(4),from);
} else {
if((state_val_45987 === (3))){
var inst_45984 = (state_45986[(2)]);
var state_45986__$1 = state_45986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45986__$1,inst_45984);
} else {
if((state_val_45987 === (4))){
var inst_45967 = (state_45986[(7)]);
var inst_45967__$1 = (state_45986[(2)]);
var inst_45968 = (inst_45967__$1 == null);
var state_45986__$1 = (function (){var statearr_45989 = state_45986;
(statearr_45989[(7)] = inst_45967__$1);

return statearr_45989;
})();
if(cljs.core.truth_(inst_45968)){
var statearr_45990_46098 = state_45986__$1;
(statearr_45990_46098[(1)] = (5));

} else {
var statearr_45991_46099 = state_45986__$1;
(statearr_45991_46099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (5))){
var inst_45970 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45986__$1 = state_45986;
var statearr_45992_46100 = state_45986__$1;
(statearr_45992_46100[(2)] = inst_45970);

(statearr_45992_46100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (6))){
var inst_45967 = (state_45986[(7)]);
var inst_45972 = (state_45986[(8)]);
var inst_45972__$1 = cljs.core.async.chan.call(null,(1));
var inst_45973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45974 = [inst_45967,inst_45972__$1];
var inst_45975 = (new cljs.core.PersistentVector(null,2,(5),inst_45973,inst_45974,null));
var state_45986__$1 = (function (){var statearr_45993 = state_45986;
(statearr_45993[(8)] = inst_45972__$1);

return statearr_45993;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45986__$1,(8),jobs,inst_45975);
} else {
if((state_val_45987 === (7))){
var inst_45982 = (state_45986[(2)]);
var state_45986__$1 = state_45986;
var statearr_45994_46101 = state_45986__$1;
(statearr_45994_46101[(2)] = inst_45982);

(statearr_45994_46101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (8))){
var inst_45972 = (state_45986[(8)]);
var inst_45977 = (state_45986[(2)]);
var state_45986__$1 = (function (){var statearr_45995 = state_45986;
(statearr_45995[(9)] = inst_45977);

return statearr_45995;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45986__$1,(9),results,inst_45972);
} else {
if((state_val_45987 === (9))){
var inst_45979 = (state_45986[(2)]);
var state_45986__$1 = (function (){var statearr_45996 = state_45986;
(statearr_45996[(10)] = inst_45979);

return statearr_45996;
})();
var statearr_45997_46102 = state_45986__$1;
(statearr_45997_46102[(2)] = null);

(statearr_45997_46102[(1)] = (2));


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
});})(c__45733__auto___46096,jobs,results,process,async))
;
return ((function (switch__45643__auto__,c__45733__auto___46096,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0 = (function (){
var statearr_45998 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45998[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__);

(statearr_45998[(1)] = (1));

return statearr_45998;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1 = (function (state_45986){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_45986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e45999){if((e45999 instanceof Object)){
var ex__45647__auto__ = e45999;
var statearr_46000_46103 = state_45986;
(statearr_46000_46103[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46104 = state_45986;
state_45986 = G__46104;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__ = function(state_45986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1.call(this,state_45986);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___46096,jobs,results,process,async))
})();
var state__45735__auto__ = (function (){var statearr_46001 = f__45734__auto__.call(null);
(statearr_46001[(6)] = c__45733__auto___46096);

return statearr_46001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___46096,jobs,results,process,async))
);


var c__45733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto__,jobs,results,process,async){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto__,jobs,results,process,async){
return (function (state_46039){
var state_val_46040 = (state_46039[(1)]);
if((state_val_46040 === (7))){
var inst_46035 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
var statearr_46041_46105 = state_46039__$1;
(statearr_46041_46105[(2)] = inst_46035);

(statearr_46041_46105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (20))){
var state_46039__$1 = state_46039;
var statearr_46042_46106 = state_46039__$1;
(statearr_46042_46106[(2)] = null);

(statearr_46042_46106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (1))){
var state_46039__$1 = state_46039;
var statearr_46043_46107 = state_46039__$1;
(statearr_46043_46107[(2)] = null);

(statearr_46043_46107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (4))){
var inst_46004 = (state_46039[(7)]);
var inst_46004__$1 = (state_46039[(2)]);
var inst_46005 = (inst_46004__$1 == null);
var state_46039__$1 = (function (){var statearr_46044 = state_46039;
(statearr_46044[(7)] = inst_46004__$1);

return statearr_46044;
})();
if(cljs.core.truth_(inst_46005)){
var statearr_46045_46108 = state_46039__$1;
(statearr_46045_46108[(1)] = (5));

} else {
var statearr_46046_46109 = state_46039__$1;
(statearr_46046_46109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (15))){
var inst_46017 = (state_46039[(8)]);
var state_46039__$1 = state_46039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46039__$1,(18),to,inst_46017);
} else {
if((state_val_46040 === (21))){
var inst_46030 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
var statearr_46047_46110 = state_46039__$1;
(statearr_46047_46110[(2)] = inst_46030);

(statearr_46047_46110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (13))){
var inst_46032 = (state_46039[(2)]);
var state_46039__$1 = (function (){var statearr_46048 = state_46039;
(statearr_46048[(9)] = inst_46032);

return statearr_46048;
})();
var statearr_46049_46111 = state_46039__$1;
(statearr_46049_46111[(2)] = null);

(statearr_46049_46111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (6))){
var inst_46004 = (state_46039[(7)]);
var state_46039__$1 = state_46039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46039__$1,(11),inst_46004);
} else {
if((state_val_46040 === (17))){
var inst_46025 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
if(cljs.core.truth_(inst_46025)){
var statearr_46050_46112 = state_46039__$1;
(statearr_46050_46112[(1)] = (19));

} else {
var statearr_46051_46113 = state_46039__$1;
(statearr_46051_46113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (3))){
var inst_46037 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46039__$1,inst_46037);
} else {
if((state_val_46040 === (12))){
var inst_46014 = (state_46039[(10)]);
var state_46039__$1 = state_46039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46039__$1,(14),inst_46014);
} else {
if((state_val_46040 === (2))){
var state_46039__$1 = state_46039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46039__$1,(4),results);
} else {
if((state_val_46040 === (19))){
var state_46039__$1 = state_46039;
var statearr_46052_46114 = state_46039__$1;
(statearr_46052_46114[(2)] = null);

(statearr_46052_46114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (11))){
var inst_46014 = (state_46039[(2)]);
var state_46039__$1 = (function (){var statearr_46053 = state_46039;
(statearr_46053[(10)] = inst_46014);

return statearr_46053;
})();
var statearr_46054_46115 = state_46039__$1;
(statearr_46054_46115[(2)] = null);

(statearr_46054_46115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (9))){
var state_46039__$1 = state_46039;
var statearr_46055_46116 = state_46039__$1;
(statearr_46055_46116[(2)] = null);

(statearr_46055_46116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (5))){
var state_46039__$1 = state_46039;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46056_46117 = state_46039__$1;
(statearr_46056_46117[(1)] = (8));

} else {
var statearr_46057_46118 = state_46039__$1;
(statearr_46057_46118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (14))){
var inst_46019 = (state_46039[(11)]);
var inst_46017 = (state_46039[(8)]);
var inst_46017__$1 = (state_46039[(2)]);
var inst_46018 = (inst_46017__$1 == null);
var inst_46019__$1 = cljs.core.not.call(null,inst_46018);
var state_46039__$1 = (function (){var statearr_46058 = state_46039;
(statearr_46058[(11)] = inst_46019__$1);

(statearr_46058[(8)] = inst_46017__$1);

return statearr_46058;
})();
if(inst_46019__$1){
var statearr_46059_46119 = state_46039__$1;
(statearr_46059_46119[(1)] = (15));

} else {
var statearr_46060_46120 = state_46039__$1;
(statearr_46060_46120[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (16))){
var inst_46019 = (state_46039[(11)]);
var state_46039__$1 = state_46039;
var statearr_46061_46121 = state_46039__$1;
(statearr_46061_46121[(2)] = inst_46019);

(statearr_46061_46121[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (10))){
var inst_46011 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
var statearr_46062_46122 = state_46039__$1;
(statearr_46062_46122[(2)] = inst_46011);

(statearr_46062_46122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (18))){
var inst_46022 = (state_46039[(2)]);
var state_46039__$1 = state_46039;
var statearr_46063_46123 = state_46039__$1;
(statearr_46063_46123[(2)] = inst_46022);

(statearr_46063_46123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46040 === (8))){
var inst_46008 = cljs.core.async.close_BANG_.call(null,to);
var state_46039__$1 = state_46039;
var statearr_46064_46124 = state_46039__$1;
(statearr_46064_46124[(2)] = inst_46008);

(statearr_46064_46124[(1)] = (10));


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
});})(c__45733__auto__,jobs,results,process,async))
;
return ((function (switch__45643__auto__,c__45733__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0 = (function (){
var statearr_46065 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46065[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__);

(statearr_46065[(1)] = (1));

return statearr_46065;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1 = (function (state_46039){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_46039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e46066){if((e46066 instanceof Object)){
var ex__45647__auto__ = e46066;
var statearr_46067_46125 = state_46039;
(statearr_46067_46125[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46126 = state_46039;
state_46039 = G__46126;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__ = function(state_46039){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1.call(this,state_46039);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto__,jobs,results,process,async))
})();
var state__45735__auto__ = (function (){var statearr_46068 = f__45734__auto__.call(null);
(statearr_46068[(6)] = c__45733__auto__);

return statearr_46068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto__,jobs,results,process,async))
);

return c__45733__auto__;
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
var G__46128 = arguments.length;
switch (G__46128) {
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
var G__46131 = arguments.length;
switch (G__46131) {
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
var G__46134 = arguments.length;
switch (G__46134) {
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
var c__45733__auto___46183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___46183,tc,fc){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___46183,tc,fc){
return (function (state_46160){
var state_val_46161 = (state_46160[(1)]);
if((state_val_46161 === (7))){
var inst_46156 = (state_46160[(2)]);
var state_46160__$1 = state_46160;
var statearr_46162_46184 = state_46160__$1;
(statearr_46162_46184[(2)] = inst_46156);

(statearr_46162_46184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46161 === (1))){
var state_46160__$1 = state_46160;
var statearr_46163_46185 = state_46160__$1;
(statearr_46163_46185[(2)] = null);

(statearr_46163_46185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46161 === (4))){
var inst_46137 = (state_46160[(7)]);
var inst_46137__$1 = (state_46160[(2)]);
var inst_46138 = (inst_46137__$1 == null);
var state_46160__$1 = (function (){var statearr_46164 = state_46160;
(statearr_46164[(7)] = inst_46137__$1);

return statearr_46164;
})();
if(cljs.core.truth_(inst_46138)){
var statearr_46165_46186 = state_46160__$1;
(statearr_46165_46186[(1)] = (5));

} else {
var statearr_46166_46187 = state_46160__$1;
(statearr_46166_46187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46161 === (13))){
var state_46160__$1 = state_46160;
var statearr_46167_46188 = state_46160__$1;
(statearr_46167_46188[(2)] = null);

(statearr_46167_46188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46161 === (6))){
var inst_46137 = (state_46160[(7)]);
var inst_46143 = p.call(null,inst_46137);
var state_46160__$1 = state_46160;
if(cljs.core.truth_(inst_46143)){
var statearr_46168_46189 = state_46160__$1;
(statearr_46168_46189[(1)] = (9));

} else {
var statearr_46169_46190 = state_46160__$1;
(statearr_46169_46190[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46161 === (3))){
var inst_46158 = (state_46160[(2)]);
var state_46160__$1 = state_46160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46160__$1,inst_46158);
} else {
if((state_val_46161 === (12))){
var state_46160__$1 = state_46160;
var statearr_46170_46191 = state_46160__$1;
(statearr_46170_46191[(2)] = null);

(statearr_46170_46191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46161 === (2))){
var state_46160__$1 = state_46160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46160__$1,(4),ch);
} else {
if((state_val_46161 === (11))){
var inst_46137 = (state_46160[(7)]);
var inst_46147 = (state_46160[(2)]);
var state_46160__$1 = state_46160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46160__$1,(8),inst_46147,inst_46137);
} else {
if((state_val_46161 === (9))){
var state_46160__$1 = state_46160;
var statearr_46171_46192 = state_46160__$1;
(statearr_46171_46192[(2)] = tc);

(statearr_46171_46192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46161 === (5))){
var inst_46140 = cljs.core.async.close_BANG_.call(null,tc);
var inst_46141 = cljs.core.async.close_BANG_.call(null,fc);
var state_46160__$1 = (function (){var statearr_46172 = state_46160;
(statearr_46172[(8)] = inst_46140);

return statearr_46172;
})();
var statearr_46173_46193 = state_46160__$1;
(statearr_46173_46193[(2)] = inst_46141);

(statearr_46173_46193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46161 === (14))){
var inst_46154 = (state_46160[(2)]);
var state_46160__$1 = state_46160;
var statearr_46174_46194 = state_46160__$1;
(statearr_46174_46194[(2)] = inst_46154);

(statearr_46174_46194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46161 === (10))){
var state_46160__$1 = state_46160;
var statearr_46175_46195 = state_46160__$1;
(statearr_46175_46195[(2)] = fc);

(statearr_46175_46195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46161 === (8))){
var inst_46149 = (state_46160[(2)]);
var state_46160__$1 = state_46160;
if(cljs.core.truth_(inst_46149)){
var statearr_46176_46196 = state_46160__$1;
(statearr_46176_46196[(1)] = (12));

} else {
var statearr_46177_46197 = state_46160__$1;
(statearr_46177_46197[(1)] = (13));

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
});})(c__45733__auto___46183,tc,fc))
;
return ((function (switch__45643__auto__,c__45733__auto___46183,tc,fc){
return (function() {
var cljs$core$async$state_machine__45644__auto__ = null;
var cljs$core$async$state_machine__45644__auto____0 = (function (){
var statearr_46178 = [null,null,null,null,null,null,null,null,null];
(statearr_46178[(0)] = cljs$core$async$state_machine__45644__auto__);

(statearr_46178[(1)] = (1));

return statearr_46178;
});
var cljs$core$async$state_machine__45644__auto____1 = (function (state_46160){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_46160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e46179){if((e46179 instanceof Object)){
var ex__45647__auto__ = e46179;
var statearr_46180_46198 = state_46160;
(statearr_46180_46198[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46199 = state_46160;
state_46160 = G__46199;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$state_machine__45644__auto__ = function(state_46160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45644__auto____1.call(this,state_46160);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45644__auto____0;
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45644__auto____1;
return cljs$core$async$state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___46183,tc,fc))
})();
var state__45735__auto__ = (function (){var statearr_46181 = f__45734__auto__.call(null);
(statearr_46181[(6)] = c__45733__auto___46183);

return statearr_46181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___46183,tc,fc))
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
var c__45733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto__){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto__){
return (function (state_46220){
var state_val_46221 = (state_46220[(1)]);
if((state_val_46221 === (7))){
var inst_46216 = (state_46220[(2)]);
var state_46220__$1 = state_46220;
var statearr_46222_46240 = state_46220__$1;
(statearr_46222_46240[(2)] = inst_46216);

(statearr_46222_46240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (1))){
var inst_46200 = init;
var state_46220__$1 = (function (){var statearr_46223 = state_46220;
(statearr_46223[(7)] = inst_46200);

return statearr_46223;
})();
var statearr_46224_46241 = state_46220__$1;
(statearr_46224_46241[(2)] = null);

(statearr_46224_46241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (4))){
var inst_46203 = (state_46220[(8)]);
var inst_46203__$1 = (state_46220[(2)]);
var inst_46204 = (inst_46203__$1 == null);
var state_46220__$1 = (function (){var statearr_46225 = state_46220;
(statearr_46225[(8)] = inst_46203__$1);

return statearr_46225;
})();
if(cljs.core.truth_(inst_46204)){
var statearr_46226_46242 = state_46220__$1;
(statearr_46226_46242[(1)] = (5));

} else {
var statearr_46227_46243 = state_46220__$1;
(statearr_46227_46243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (6))){
var inst_46203 = (state_46220[(8)]);
var inst_46200 = (state_46220[(7)]);
var inst_46207 = (state_46220[(9)]);
var inst_46207__$1 = f.call(null,inst_46200,inst_46203);
var inst_46208 = cljs.core.reduced_QMARK_.call(null,inst_46207__$1);
var state_46220__$1 = (function (){var statearr_46228 = state_46220;
(statearr_46228[(9)] = inst_46207__$1);

return statearr_46228;
})();
if(inst_46208){
var statearr_46229_46244 = state_46220__$1;
(statearr_46229_46244[(1)] = (8));

} else {
var statearr_46230_46245 = state_46220__$1;
(statearr_46230_46245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (3))){
var inst_46218 = (state_46220[(2)]);
var state_46220__$1 = state_46220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46220__$1,inst_46218);
} else {
if((state_val_46221 === (2))){
var state_46220__$1 = state_46220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46220__$1,(4),ch);
} else {
if((state_val_46221 === (9))){
var inst_46207 = (state_46220[(9)]);
var inst_46200 = inst_46207;
var state_46220__$1 = (function (){var statearr_46231 = state_46220;
(statearr_46231[(7)] = inst_46200);

return statearr_46231;
})();
var statearr_46232_46246 = state_46220__$1;
(statearr_46232_46246[(2)] = null);

(statearr_46232_46246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (5))){
var inst_46200 = (state_46220[(7)]);
var state_46220__$1 = state_46220;
var statearr_46233_46247 = state_46220__$1;
(statearr_46233_46247[(2)] = inst_46200);

(statearr_46233_46247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (10))){
var inst_46214 = (state_46220[(2)]);
var state_46220__$1 = state_46220;
var statearr_46234_46248 = state_46220__$1;
(statearr_46234_46248[(2)] = inst_46214);

(statearr_46234_46248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (8))){
var inst_46207 = (state_46220[(9)]);
var inst_46210 = cljs.core.deref.call(null,inst_46207);
var state_46220__$1 = state_46220;
var statearr_46235_46249 = state_46220__$1;
(statearr_46235_46249[(2)] = inst_46210);

(statearr_46235_46249[(1)] = (10));


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
});})(c__45733__auto__))
;
return ((function (switch__45643__auto__,c__45733__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__45644__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45644__auto____0 = (function (){
var statearr_46236 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46236[(0)] = cljs$core$async$reduce_$_state_machine__45644__auto__);

(statearr_46236[(1)] = (1));

return statearr_46236;
});
var cljs$core$async$reduce_$_state_machine__45644__auto____1 = (function (state_46220){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_46220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e46237){if((e46237 instanceof Object)){
var ex__45647__auto__ = e46237;
var statearr_46238_46250 = state_46220;
(statearr_46238_46250[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46251 = state_46220;
state_46220 = G__46251;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45644__auto__ = function(state_46220){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45644__auto____1.call(this,state_46220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45644__auto____0;
cljs$core$async$reduce_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45644__auto____1;
return cljs$core$async$reduce_$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto__))
})();
var state__45735__auto__ = (function (){var statearr_46239 = f__45734__auto__.call(null);
(statearr_46239[(6)] = c__45733__auto__);

return statearr_46239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto__))
);

return c__45733__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__45733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto__,f__$1){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto__,f__$1){
return (function (state_46257){
var state_val_46258 = (state_46257[(1)]);
if((state_val_46258 === (1))){
var inst_46252 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_46257__$1 = state_46257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46257__$1,(2),inst_46252);
} else {
if((state_val_46258 === (2))){
var inst_46254 = (state_46257[(2)]);
var inst_46255 = f__$1.call(null,inst_46254);
var state_46257__$1 = state_46257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46257__$1,inst_46255);
} else {
return null;
}
}
});})(c__45733__auto__,f__$1))
;
return ((function (switch__45643__auto__,c__45733__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__45644__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45644__auto____0 = (function (){
var statearr_46259 = [null,null,null,null,null,null,null];
(statearr_46259[(0)] = cljs$core$async$transduce_$_state_machine__45644__auto__);

(statearr_46259[(1)] = (1));

return statearr_46259;
});
var cljs$core$async$transduce_$_state_machine__45644__auto____1 = (function (state_46257){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_46257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e46260){if((e46260 instanceof Object)){
var ex__45647__auto__ = e46260;
var statearr_46261_46263 = state_46257;
(statearr_46261_46263[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46264 = state_46257;
state_46257 = G__46264;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45644__auto__ = function(state_46257){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45644__auto____1.call(this,state_46257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45644__auto____0;
cljs$core$async$transduce_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45644__auto____1;
return cljs$core$async$transduce_$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto__,f__$1))
})();
var state__45735__auto__ = (function (){var statearr_46262 = f__45734__auto__.call(null);
(statearr_46262[(6)] = c__45733__auto__);

return statearr_46262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto__,f__$1))
);

return c__45733__auto__;
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
var G__46266 = arguments.length;
switch (G__46266) {
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
var c__45733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto__){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto__){
return (function (state_46291){
var state_val_46292 = (state_46291[(1)]);
if((state_val_46292 === (7))){
var inst_46273 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
var statearr_46293_46314 = state_46291__$1;
(statearr_46293_46314[(2)] = inst_46273);

(statearr_46293_46314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (1))){
var inst_46267 = cljs.core.seq.call(null,coll);
var inst_46268 = inst_46267;
var state_46291__$1 = (function (){var statearr_46294 = state_46291;
(statearr_46294[(7)] = inst_46268);

return statearr_46294;
})();
var statearr_46295_46315 = state_46291__$1;
(statearr_46295_46315[(2)] = null);

(statearr_46295_46315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (4))){
var inst_46268 = (state_46291[(7)]);
var inst_46271 = cljs.core.first.call(null,inst_46268);
var state_46291__$1 = state_46291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46291__$1,(7),ch,inst_46271);
} else {
if((state_val_46292 === (13))){
var inst_46285 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
var statearr_46296_46316 = state_46291__$1;
(statearr_46296_46316[(2)] = inst_46285);

(statearr_46296_46316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (6))){
var inst_46276 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
if(cljs.core.truth_(inst_46276)){
var statearr_46297_46317 = state_46291__$1;
(statearr_46297_46317[(1)] = (8));

} else {
var statearr_46298_46318 = state_46291__$1;
(statearr_46298_46318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (3))){
var inst_46289 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46291__$1,inst_46289);
} else {
if((state_val_46292 === (12))){
var state_46291__$1 = state_46291;
var statearr_46299_46319 = state_46291__$1;
(statearr_46299_46319[(2)] = null);

(statearr_46299_46319[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (2))){
var inst_46268 = (state_46291[(7)]);
var state_46291__$1 = state_46291;
if(cljs.core.truth_(inst_46268)){
var statearr_46300_46320 = state_46291__$1;
(statearr_46300_46320[(1)] = (4));

} else {
var statearr_46301_46321 = state_46291__$1;
(statearr_46301_46321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (11))){
var inst_46282 = cljs.core.async.close_BANG_.call(null,ch);
var state_46291__$1 = state_46291;
var statearr_46302_46322 = state_46291__$1;
(statearr_46302_46322[(2)] = inst_46282);

(statearr_46302_46322[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (9))){
var state_46291__$1 = state_46291;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46303_46323 = state_46291__$1;
(statearr_46303_46323[(1)] = (11));

} else {
var statearr_46304_46324 = state_46291__$1;
(statearr_46304_46324[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (5))){
var inst_46268 = (state_46291[(7)]);
var state_46291__$1 = state_46291;
var statearr_46305_46325 = state_46291__$1;
(statearr_46305_46325[(2)] = inst_46268);

(statearr_46305_46325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (10))){
var inst_46287 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
var statearr_46306_46326 = state_46291__$1;
(statearr_46306_46326[(2)] = inst_46287);

(statearr_46306_46326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (8))){
var inst_46268 = (state_46291[(7)]);
var inst_46278 = cljs.core.next.call(null,inst_46268);
var inst_46268__$1 = inst_46278;
var state_46291__$1 = (function (){var statearr_46307 = state_46291;
(statearr_46307[(7)] = inst_46268__$1);

return statearr_46307;
})();
var statearr_46308_46327 = state_46291__$1;
(statearr_46308_46327[(2)] = null);

(statearr_46308_46327[(1)] = (2));


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
});})(c__45733__auto__))
;
return ((function (switch__45643__auto__,c__45733__auto__){
return (function() {
var cljs$core$async$state_machine__45644__auto__ = null;
var cljs$core$async$state_machine__45644__auto____0 = (function (){
var statearr_46309 = [null,null,null,null,null,null,null,null];
(statearr_46309[(0)] = cljs$core$async$state_machine__45644__auto__);

(statearr_46309[(1)] = (1));

return statearr_46309;
});
var cljs$core$async$state_machine__45644__auto____1 = (function (state_46291){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_46291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e46310){if((e46310 instanceof Object)){
var ex__45647__auto__ = e46310;
var statearr_46311_46328 = state_46291;
(statearr_46311_46328[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46329 = state_46291;
state_46291 = G__46329;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$state_machine__45644__auto__ = function(state_46291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45644__auto____1.call(this,state_46291);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45644__auto____0;
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45644__auto____1;
return cljs$core$async$state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto__))
})();
var state__45735__auto__ = (function (){var statearr_46312 = f__45734__auto__.call(null);
(statearr_46312[(6)] = c__45733__auto__);

return statearr_46312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto__))
);

return c__45733__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async46330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46330 = (function (ch,cs,meta46331){
this.ch = ch;
this.cs = cs;
this.meta46331 = meta46331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46332,meta46331__$1){
var self__ = this;
var _46332__$1 = this;
return (new cljs.core.async.t_cljs$core$async46330(self__.ch,self__.cs,meta46331__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46332){
var self__ = this;
var _46332__$1 = this;
return self__.meta46331;
});})(cs))
;

cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46330.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46330.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46331","meta46331",-674866342,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46330";

cljs.core.async.t_cljs$core$async46330.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async46330");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async46330 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46330(ch__$1,cs__$1,meta46331){
return (new cljs.core.async.t_cljs$core$async46330(ch__$1,cs__$1,meta46331));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46330(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__45733__auto___46552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___46552,cs,m,dchan,dctr,done){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___46552,cs,m,dchan,dctr,done){
return (function (state_46467){
var state_val_46468 = (state_46467[(1)]);
if((state_val_46468 === (7))){
var inst_46463 = (state_46467[(2)]);
var state_46467__$1 = state_46467;
var statearr_46469_46553 = state_46467__$1;
(statearr_46469_46553[(2)] = inst_46463);

(statearr_46469_46553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (20))){
var inst_46366 = (state_46467[(7)]);
var inst_46378 = cljs.core.first.call(null,inst_46366);
var inst_46379 = cljs.core.nth.call(null,inst_46378,(0),null);
var inst_46380 = cljs.core.nth.call(null,inst_46378,(1),null);
var state_46467__$1 = (function (){var statearr_46470 = state_46467;
(statearr_46470[(8)] = inst_46379);

return statearr_46470;
})();
if(cljs.core.truth_(inst_46380)){
var statearr_46471_46554 = state_46467__$1;
(statearr_46471_46554[(1)] = (22));

} else {
var statearr_46472_46555 = state_46467__$1;
(statearr_46472_46555[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (27))){
var inst_46410 = (state_46467[(9)]);
var inst_46335 = (state_46467[(10)]);
var inst_46408 = (state_46467[(11)]);
var inst_46415 = (state_46467[(12)]);
var inst_46415__$1 = cljs.core._nth.call(null,inst_46408,inst_46410);
var inst_46416 = cljs.core.async.put_BANG_.call(null,inst_46415__$1,inst_46335,done);
var state_46467__$1 = (function (){var statearr_46473 = state_46467;
(statearr_46473[(12)] = inst_46415__$1);

return statearr_46473;
})();
if(cljs.core.truth_(inst_46416)){
var statearr_46474_46556 = state_46467__$1;
(statearr_46474_46556[(1)] = (30));

} else {
var statearr_46475_46557 = state_46467__$1;
(statearr_46475_46557[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (1))){
var state_46467__$1 = state_46467;
var statearr_46476_46558 = state_46467__$1;
(statearr_46476_46558[(2)] = null);

(statearr_46476_46558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (24))){
var inst_46366 = (state_46467[(7)]);
var inst_46385 = (state_46467[(2)]);
var inst_46386 = cljs.core.next.call(null,inst_46366);
var inst_46344 = inst_46386;
var inst_46345 = null;
var inst_46346 = (0);
var inst_46347 = (0);
var state_46467__$1 = (function (){var statearr_46477 = state_46467;
(statearr_46477[(13)] = inst_46385);

(statearr_46477[(14)] = inst_46347);

(statearr_46477[(15)] = inst_46345);

(statearr_46477[(16)] = inst_46346);

(statearr_46477[(17)] = inst_46344);

return statearr_46477;
})();
var statearr_46478_46559 = state_46467__$1;
(statearr_46478_46559[(2)] = null);

(statearr_46478_46559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (39))){
var state_46467__$1 = state_46467;
var statearr_46482_46560 = state_46467__$1;
(statearr_46482_46560[(2)] = null);

(statearr_46482_46560[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (4))){
var inst_46335 = (state_46467[(10)]);
var inst_46335__$1 = (state_46467[(2)]);
var inst_46336 = (inst_46335__$1 == null);
var state_46467__$1 = (function (){var statearr_46483 = state_46467;
(statearr_46483[(10)] = inst_46335__$1);

return statearr_46483;
})();
if(cljs.core.truth_(inst_46336)){
var statearr_46484_46561 = state_46467__$1;
(statearr_46484_46561[(1)] = (5));

} else {
var statearr_46485_46562 = state_46467__$1;
(statearr_46485_46562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (15))){
var inst_46347 = (state_46467[(14)]);
var inst_46345 = (state_46467[(15)]);
var inst_46346 = (state_46467[(16)]);
var inst_46344 = (state_46467[(17)]);
var inst_46362 = (state_46467[(2)]);
var inst_46363 = (inst_46347 + (1));
var tmp46479 = inst_46345;
var tmp46480 = inst_46346;
var tmp46481 = inst_46344;
var inst_46344__$1 = tmp46481;
var inst_46345__$1 = tmp46479;
var inst_46346__$1 = tmp46480;
var inst_46347__$1 = inst_46363;
var state_46467__$1 = (function (){var statearr_46486 = state_46467;
(statearr_46486[(18)] = inst_46362);

(statearr_46486[(14)] = inst_46347__$1);

(statearr_46486[(15)] = inst_46345__$1);

(statearr_46486[(16)] = inst_46346__$1);

(statearr_46486[(17)] = inst_46344__$1);

return statearr_46486;
})();
var statearr_46487_46563 = state_46467__$1;
(statearr_46487_46563[(2)] = null);

(statearr_46487_46563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (21))){
var inst_46389 = (state_46467[(2)]);
var state_46467__$1 = state_46467;
var statearr_46491_46564 = state_46467__$1;
(statearr_46491_46564[(2)] = inst_46389);

(statearr_46491_46564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (31))){
var inst_46415 = (state_46467[(12)]);
var inst_46419 = done.call(null,null);
var inst_46420 = cljs.core.async.untap_STAR_.call(null,m,inst_46415);
var state_46467__$1 = (function (){var statearr_46492 = state_46467;
(statearr_46492[(19)] = inst_46419);

return statearr_46492;
})();
var statearr_46493_46565 = state_46467__$1;
(statearr_46493_46565[(2)] = inst_46420);

(statearr_46493_46565[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (32))){
var inst_46410 = (state_46467[(9)]);
var inst_46407 = (state_46467[(20)]);
var inst_46409 = (state_46467[(21)]);
var inst_46408 = (state_46467[(11)]);
var inst_46422 = (state_46467[(2)]);
var inst_46423 = (inst_46410 + (1));
var tmp46488 = inst_46407;
var tmp46489 = inst_46409;
var tmp46490 = inst_46408;
var inst_46407__$1 = tmp46488;
var inst_46408__$1 = tmp46490;
var inst_46409__$1 = tmp46489;
var inst_46410__$1 = inst_46423;
var state_46467__$1 = (function (){var statearr_46494 = state_46467;
(statearr_46494[(9)] = inst_46410__$1);

(statearr_46494[(20)] = inst_46407__$1);

(statearr_46494[(21)] = inst_46409__$1);

(statearr_46494[(11)] = inst_46408__$1);

(statearr_46494[(22)] = inst_46422);

return statearr_46494;
})();
var statearr_46495_46566 = state_46467__$1;
(statearr_46495_46566[(2)] = null);

(statearr_46495_46566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (40))){
var inst_46435 = (state_46467[(23)]);
var inst_46439 = done.call(null,null);
var inst_46440 = cljs.core.async.untap_STAR_.call(null,m,inst_46435);
var state_46467__$1 = (function (){var statearr_46496 = state_46467;
(statearr_46496[(24)] = inst_46439);

return statearr_46496;
})();
var statearr_46497_46567 = state_46467__$1;
(statearr_46497_46567[(2)] = inst_46440);

(statearr_46497_46567[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (33))){
var inst_46426 = (state_46467[(25)]);
var inst_46428 = cljs.core.chunked_seq_QMARK_.call(null,inst_46426);
var state_46467__$1 = state_46467;
if(inst_46428){
var statearr_46498_46568 = state_46467__$1;
(statearr_46498_46568[(1)] = (36));

} else {
var statearr_46499_46569 = state_46467__$1;
(statearr_46499_46569[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (13))){
var inst_46356 = (state_46467[(26)]);
var inst_46359 = cljs.core.async.close_BANG_.call(null,inst_46356);
var state_46467__$1 = state_46467;
var statearr_46500_46570 = state_46467__$1;
(statearr_46500_46570[(2)] = inst_46359);

(statearr_46500_46570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (22))){
var inst_46379 = (state_46467[(8)]);
var inst_46382 = cljs.core.async.close_BANG_.call(null,inst_46379);
var state_46467__$1 = state_46467;
var statearr_46501_46571 = state_46467__$1;
(statearr_46501_46571[(2)] = inst_46382);

(statearr_46501_46571[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (36))){
var inst_46426 = (state_46467[(25)]);
var inst_46430 = cljs.core.chunk_first.call(null,inst_46426);
var inst_46431 = cljs.core.chunk_rest.call(null,inst_46426);
var inst_46432 = cljs.core.count.call(null,inst_46430);
var inst_46407 = inst_46431;
var inst_46408 = inst_46430;
var inst_46409 = inst_46432;
var inst_46410 = (0);
var state_46467__$1 = (function (){var statearr_46502 = state_46467;
(statearr_46502[(9)] = inst_46410);

(statearr_46502[(20)] = inst_46407);

(statearr_46502[(21)] = inst_46409);

(statearr_46502[(11)] = inst_46408);

return statearr_46502;
})();
var statearr_46503_46572 = state_46467__$1;
(statearr_46503_46572[(2)] = null);

(statearr_46503_46572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (41))){
var inst_46426 = (state_46467[(25)]);
var inst_46442 = (state_46467[(2)]);
var inst_46443 = cljs.core.next.call(null,inst_46426);
var inst_46407 = inst_46443;
var inst_46408 = null;
var inst_46409 = (0);
var inst_46410 = (0);
var state_46467__$1 = (function (){var statearr_46504 = state_46467;
(statearr_46504[(9)] = inst_46410);

(statearr_46504[(20)] = inst_46407);

(statearr_46504[(21)] = inst_46409);

(statearr_46504[(27)] = inst_46442);

(statearr_46504[(11)] = inst_46408);

return statearr_46504;
})();
var statearr_46505_46573 = state_46467__$1;
(statearr_46505_46573[(2)] = null);

(statearr_46505_46573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (43))){
var state_46467__$1 = state_46467;
var statearr_46506_46574 = state_46467__$1;
(statearr_46506_46574[(2)] = null);

(statearr_46506_46574[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (29))){
var inst_46451 = (state_46467[(2)]);
var state_46467__$1 = state_46467;
var statearr_46507_46575 = state_46467__$1;
(statearr_46507_46575[(2)] = inst_46451);

(statearr_46507_46575[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (44))){
var inst_46460 = (state_46467[(2)]);
var state_46467__$1 = (function (){var statearr_46508 = state_46467;
(statearr_46508[(28)] = inst_46460);

return statearr_46508;
})();
var statearr_46509_46576 = state_46467__$1;
(statearr_46509_46576[(2)] = null);

(statearr_46509_46576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (6))){
var inst_46399 = (state_46467[(29)]);
var inst_46398 = cljs.core.deref.call(null,cs);
var inst_46399__$1 = cljs.core.keys.call(null,inst_46398);
var inst_46400 = cljs.core.count.call(null,inst_46399__$1);
var inst_46401 = cljs.core.reset_BANG_.call(null,dctr,inst_46400);
var inst_46406 = cljs.core.seq.call(null,inst_46399__$1);
var inst_46407 = inst_46406;
var inst_46408 = null;
var inst_46409 = (0);
var inst_46410 = (0);
var state_46467__$1 = (function (){var statearr_46510 = state_46467;
(statearr_46510[(9)] = inst_46410);

(statearr_46510[(20)] = inst_46407);

(statearr_46510[(29)] = inst_46399__$1);

(statearr_46510[(21)] = inst_46409);

(statearr_46510[(11)] = inst_46408);

(statearr_46510[(30)] = inst_46401);

return statearr_46510;
})();
var statearr_46511_46577 = state_46467__$1;
(statearr_46511_46577[(2)] = null);

(statearr_46511_46577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (28))){
var inst_46407 = (state_46467[(20)]);
var inst_46426 = (state_46467[(25)]);
var inst_46426__$1 = cljs.core.seq.call(null,inst_46407);
var state_46467__$1 = (function (){var statearr_46512 = state_46467;
(statearr_46512[(25)] = inst_46426__$1);

return statearr_46512;
})();
if(inst_46426__$1){
var statearr_46513_46578 = state_46467__$1;
(statearr_46513_46578[(1)] = (33));

} else {
var statearr_46514_46579 = state_46467__$1;
(statearr_46514_46579[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (25))){
var inst_46410 = (state_46467[(9)]);
var inst_46409 = (state_46467[(21)]);
var inst_46412 = (inst_46410 < inst_46409);
var inst_46413 = inst_46412;
var state_46467__$1 = state_46467;
if(cljs.core.truth_(inst_46413)){
var statearr_46515_46580 = state_46467__$1;
(statearr_46515_46580[(1)] = (27));

} else {
var statearr_46516_46581 = state_46467__$1;
(statearr_46516_46581[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (34))){
var state_46467__$1 = state_46467;
var statearr_46517_46582 = state_46467__$1;
(statearr_46517_46582[(2)] = null);

(statearr_46517_46582[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (17))){
var state_46467__$1 = state_46467;
var statearr_46518_46583 = state_46467__$1;
(statearr_46518_46583[(2)] = null);

(statearr_46518_46583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (3))){
var inst_46465 = (state_46467[(2)]);
var state_46467__$1 = state_46467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46467__$1,inst_46465);
} else {
if((state_val_46468 === (12))){
var inst_46394 = (state_46467[(2)]);
var state_46467__$1 = state_46467;
var statearr_46519_46584 = state_46467__$1;
(statearr_46519_46584[(2)] = inst_46394);

(statearr_46519_46584[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (2))){
var state_46467__$1 = state_46467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46467__$1,(4),ch);
} else {
if((state_val_46468 === (23))){
var state_46467__$1 = state_46467;
var statearr_46520_46585 = state_46467__$1;
(statearr_46520_46585[(2)] = null);

(statearr_46520_46585[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (35))){
var inst_46449 = (state_46467[(2)]);
var state_46467__$1 = state_46467;
var statearr_46521_46586 = state_46467__$1;
(statearr_46521_46586[(2)] = inst_46449);

(statearr_46521_46586[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (19))){
var inst_46366 = (state_46467[(7)]);
var inst_46370 = cljs.core.chunk_first.call(null,inst_46366);
var inst_46371 = cljs.core.chunk_rest.call(null,inst_46366);
var inst_46372 = cljs.core.count.call(null,inst_46370);
var inst_46344 = inst_46371;
var inst_46345 = inst_46370;
var inst_46346 = inst_46372;
var inst_46347 = (0);
var state_46467__$1 = (function (){var statearr_46522 = state_46467;
(statearr_46522[(14)] = inst_46347);

(statearr_46522[(15)] = inst_46345);

(statearr_46522[(16)] = inst_46346);

(statearr_46522[(17)] = inst_46344);

return statearr_46522;
})();
var statearr_46523_46587 = state_46467__$1;
(statearr_46523_46587[(2)] = null);

(statearr_46523_46587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (11))){
var inst_46366 = (state_46467[(7)]);
var inst_46344 = (state_46467[(17)]);
var inst_46366__$1 = cljs.core.seq.call(null,inst_46344);
var state_46467__$1 = (function (){var statearr_46524 = state_46467;
(statearr_46524[(7)] = inst_46366__$1);

return statearr_46524;
})();
if(inst_46366__$1){
var statearr_46525_46588 = state_46467__$1;
(statearr_46525_46588[(1)] = (16));

} else {
var statearr_46526_46589 = state_46467__$1;
(statearr_46526_46589[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (9))){
var inst_46396 = (state_46467[(2)]);
var state_46467__$1 = state_46467;
var statearr_46527_46590 = state_46467__$1;
(statearr_46527_46590[(2)] = inst_46396);

(statearr_46527_46590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (5))){
var inst_46342 = cljs.core.deref.call(null,cs);
var inst_46343 = cljs.core.seq.call(null,inst_46342);
var inst_46344 = inst_46343;
var inst_46345 = null;
var inst_46346 = (0);
var inst_46347 = (0);
var state_46467__$1 = (function (){var statearr_46528 = state_46467;
(statearr_46528[(14)] = inst_46347);

(statearr_46528[(15)] = inst_46345);

(statearr_46528[(16)] = inst_46346);

(statearr_46528[(17)] = inst_46344);

return statearr_46528;
})();
var statearr_46529_46591 = state_46467__$1;
(statearr_46529_46591[(2)] = null);

(statearr_46529_46591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (14))){
var state_46467__$1 = state_46467;
var statearr_46530_46592 = state_46467__$1;
(statearr_46530_46592[(2)] = null);

(statearr_46530_46592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (45))){
var inst_46457 = (state_46467[(2)]);
var state_46467__$1 = state_46467;
var statearr_46531_46593 = state_46467__$1;
(statearr_46531_46593[(2)] = inst_46457);

(statearr_46531_46593[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (26))){
var inst_46399 = (state_46467[(29)]);
var inst_46453 = (state_46467[(2)]);
var inst_46454 = cljs.core.seq.call(null,inst_46399);
var state_46467__$1 = (function (){var statearr_46532 = state_46467;
(statearr_46532[(31)] = inst_46453);

return statearr_46532;
})();
if(inst_46454){
var statearr_46533_46594 = state_46467__$1;
(statearr_46533_46594[(1)] = (42));

} else {
var statearr_46534_46595 = state_46467__$1;
(statearr_46534_46595[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (16))){
var inst_46366 = (state_46467[(7)]);
var inst_46368 = cljs.core.chunked_seq_QMARK_.call(null,inst_46366);
var state_46467__$1 = state_46467;
if(inst_46368){
var statearr_46535_46596 = state_46467__$1;
(statearr_46535_46596[(1)] = (19));

} else {
var statearr_46536_46597 = state_46467__$1;
(statearr_46536_46597[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (38))){
var inst_46446 = (state_46467[(2)]);
var state_46467__$1 = state_46467;
var statearr_46537_46598 = state_46467__$1;
(statearr_46537_46598[(2)] = inst_46446);

(statearr_46537_46598[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (30))){
var state_46467__$1 = state_46467;
var statearr_46538_46599 = state_46467__$1;
(statearr_46538_46599[(2)] = null);

(statearr_46538_46599[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (10))){
var inst_46347 = (state_46467[(14)]);
var inst_46345 = (state_46467[(15)]);
var inst_46355 = cljs.core._nth.call(null,inst_46345,inst_46347);
var inst_46356 = cljs.core.nth.call(null,inst_46355,(0),null);
var inst_46357 = cljs.core.nth.call(null,inst_46355,(1),null);
var state_46467__$1 = (function (){var statearr_46539 = state_46467;
(statearr_46539[(26)] = inst_46356);

return statearr_46539;
})();
if(cljs.core.truth_(inst_46357)){
var statearr_46540_46600 = state_46467__$1;
(statearr_46540_46600[(1)] = (13));

} else {
var statearr_46541_46601 = state_46467__$1;
(statearr_46541_46601[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (18))){
var inst_46392 = (state_46467[(2)]);
var state_46467__$1 = state_46467;
var statearr_46542_46602 = state_46467__$1;
(statearr_46542_46602[(2)] = inst_46392);

(statearr_46542_46602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (42))){
var state_46467__$1 = state_46467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46467__$1,(45),dchan);
} else {
if((state_val_46468 === (37))){
var inst_46435 = (state_46467[(23)]);
var inst_46335 = (state_46467[(10)]);
var inst_46426 = (state_46467[(25)]);
var inst_46435__$1 = cljs.core.first.call(null,inst_46426);
var inst_46436 = cljs.core.async.put_BANG_.call(null,inst_46435__$1,inst_46335,done);
var state_46467__$1 = (function (){var statearr_46543 = state_46467;
(statearr_46543[(23)] = inst_46435__$1);

return statearr_46543;
})();
if(cljs.core.truth_(inst_46436)){
var statearr_46544_46603 = state_46467__$1;
(statearr_46544_46603[(1)] = (39));

} else {
var statearr_46545_46604 = state_46467__$1;
(statearr_46545_46604[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (8))){
var inst_46347 = (state_46467[(14)]);
var inst_46346 = (state_46467[(16)]);
var inst_46349 = (inst_46347 < inst_46346);
var inst_46350 = inst_46349;
var state_46467__$1 = state_46467;
if(cljs.core.truth_(inst_46350)){
var statearr_46546_46605 = state_46467__$1;
(statearr_46546_46605[(1)] = (10));

} else {
var statearr_46547_46606 = state_46467__$1;
(statearr_46547_46606[(1)] = (11));

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
});})(c__45733__auto___46552,cs,m,dchan,dctr,done))
;
return ((function (switch__45643__auto__,c__45733__auto___46552,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__45644__auto__ = null;
var cljs$core$async$mult_$_state_machine__45644__auto____0 = (function (){
var statearr_46548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46548[(0)] = cljs$core$async$mult_$_state_machine__45644__auto__);

(statearr_46548[(1)] = (1));

return statearr_46548;
});
var cljs$core$async$mult_$_state_machine__45644__auto____1 = (function (state_46467){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_46467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e46549){if((e46549 instanceof Object)){
var ex__45647__auto__ = e46549;
var statearr_46550_46607 = state_46467;
(statearr_46550_46607[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46608 = state_46467;
state_46467 = G__46608;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45644__auto__ = function(state_46467){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45644__auto____1.call(this,state_46467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45644__auto____0;
cljs$core$async$mult_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45644__auto____1;
return cljs$core$async$mult_$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___46552,cs,m,dchan,dctr,done))
})();
var state__45735__auto__ = (function (){var statearr_46551 = f__45734__auto__.call(null);
(statearr_46551[(6)] = c__45733__auto___46552);

return statearr_46551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___46552,cs,m,dchan,dctr,done))
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
var G__46610 = arguments.length;
switch (G__46610) {
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
var len__31526__auto___46622 = arguments.length;
var i__31527__auto___46623 = (0);
while(true){
if((i__31527__auto___46623 < len__31526__auto___46622)){
args__31533__auto__.push((arguments[i__31527__auto___46623]));

var G__46624 = (i__31527__auto___46623 + (1));
i__31527__auto___46623 = G__46624;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((3) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31534__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46616){
var map__46617 = p__46616;
var map__46617__$1 = ((((!((map__46617 == null)))?((((map__46617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46617):map__46617);
var opts = map__46617__$1;
var statearr_46619_46625 = state;
(statearr_46619_46625[(1)] = cont_block);


var temp__5290__auto__ = cljs.core.async.do_alts.call(null,((function (map__46617,map__46617__$1,opts){
return (function (val){
var statearr_46620_46626 = state;
(statearr_46620_46626[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46617,map__46617__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5290__auto__)){
var cb = temp__5290__auto__;
var statearr_46621_46627 = state;
(statearr_46621_46627[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46612){
var G__46613 = cljs.core.first.call(null,seq46612);
var seq46612__$1 = cljs.core.next.call(null,seq46612);
var G__46614 = cljs.core.first.call(null,seq46612__$1);
var seq46612__$2 = cljs.core.next.call(null,seq46612__$1);
var G__46615 = cljs.core.first.call(null,seq46612__$2);
var seq46612__$3 = cljs.core.next.call(null,seq46612__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46613,G__46614,G__46615,seq46612__$3);
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
if(typeof cljs.core.async.t_cljs$core$async46628 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46628 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta46629){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta46629 = meta46629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46630,meta46629__$1){
var self__ = this;
var _46630__$1 = this;
return (new cljs.core.async.t_cljs$core$async46628(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta46629__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46630){
var self__ = this;
var _46630__$1 = this;
return self__.meta46629;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46628.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46628.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46628.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46628.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46628.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46628.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46628.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46628.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async46628.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta46629","meta46629",-1916049445,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46628.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46628.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46628";

cljs.core.async.t_cljs$core$async46628.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async46628");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46628 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46628(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46629){
return (new cljs.core.async.t_cljs$core$async46628(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46629));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46628(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45733__auto___46792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___46792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___46792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46732){
var state_val_46733 = (state_46732[(1)]);
if((state_val_46733 === (7))){
var inst_46647 = (state_46732[(2)]);
var state_46732__$1 = state_46732;
var statearr_46734_46793 = state_46732__$1;
(statearr_46734_46793[(2)] = inst_46647);

(statearr_46734_46793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (20))){
var inst_46659 = (state_46732[(7)]);
var state_46732__$1 = state_46732;
var statearr_46735_46794 = state_46732__$1;
(statearr_46735_46794[(2)] = inst_46659);

(statearr_46735_46794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (27))){
var state_46732__$1 = state_46732;
var statearr_46736_46795 = state_46732__$1;
(statearr_46736_46795[(2)] = null);

(statearr_46736_46795[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (1))){
var inst_46634 = (state_46732[(8)]);
var inst_46634__$1 = calc_state.call(null);
var inst_46636 = (inst_46634__$1 == null);
var inst_46637 = cljs.core.not.call(null,inst_46636);
var state_46732__$1 = (function (){var statearr_46737 = state_46732;
(statearr_46737[(8)] = inst_46634__$1);

return statearr_46737;
})();
if(inst_46637){
var statearr_46738_46796 = state_46732__$1;
(statearr_46738_46796[(1)] = (2));

} else {
var statearr_46739_46797 = state_46732__$1;
(statearr_46739_46797[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (24))){
var inst_46706 = (state_46732[(9)]);
var inst_46692 = (state_46732[(10)]);
var inst_46683 = (state_46732[(11)]);
var inst_46706__$1 = inst_46683.call(null,inst_46692);
var state_46732__$1 = (function (){var statearr_46740 = state_46732;
(statearr_46740[(9)] = inst_46706__$1);

return statearr_46740;
})();
if(cljs.core.truth_(inst_46706__$1)){
var statearr_46741_46798 = state_46732__$1;
(statearr_46741_46798[(1)] = (29));

} else {
var statearr_46742_46799 = state_46732__$1;
(statearr_46742_46799[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (4))){
var inst_46650 = (state_46732[(2)]);
var state_46732__$1 = state_46732;
if(cljs.core.truth_(inst_46650)){
var statearr_46743_46800 = state_46732__$1;
(statearr_46743_46800[(1)] = (8));

} else {
var statearr_46744_46801 = state_46732__$1;
(statearr_46744_46801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (15))){
var inst_46677 = (state_46732[(2)]);
var state_46732__$1 = state_46732;
if(cljs.core.truth_(inst_46677)){
var statearr_46745_46802 = state_46732__$1;
(statearr_46745_46802[(1)] = (19));

} else {
var statearr_46746_46803 = state_46732__$1;
(statearr_46746_46803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (21))){
var inst_46682 = (state_46732[(12)]);
var inst_46682__$1 = (state_46732[(2)]);
var inst_46683 = cljs.core.get.call(null,inst_46682__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46684 = cljs.core.get.call(null,inst_46682__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46685 = cljs.core.get.call(null,inst_46682__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46732__$1 = (function (){var statearr_46747 = state_46732;
(statearr_46747[(12)] = inst_46682__$1);

(statearr_46747[(13)] = inst_46684);

(statearr_46747[(11)] = inst_46683);

return statearr_46747;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46732__$1,(22),inst_46685);
} else {
if((state_val_46733 === (31))){
var inst_46714 = (state_46732[(2)]);
var state_46732__$1 = state_46732;
if(cljs.core.truth_(inst_46714)){
var statearr_46748_46804 = state_46732__$1;
(statearr_46748_46804[(1)] = (32));

} else {
var statearr_46749_46805 = state_46732__$1;
(statearr_46749_46805[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (32))){
var inst_46691 = (state_46732[(14)]);
var state_46732__$1 = state_46732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46732__$1,(35),out,inst_46691);
} else {
if((state_val_46733 === (33))){
var inst_46682 = (state_46732[(12)]);
var inst_46659 = inst_46682;
var state_46732__$1 = (function (){var statearr_46750 = state_46732;
(statearr_46750[(7)] = inst_46659);

return statearr_46750;
})();
var statearr_46751_46806 = state_46732__$1;
(statearr_46751_46806[(2)] = null);

(statearr_46751_46806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (13))){
var inst_46659 = (state_46732[(7)]);
var inst_46666 = inst_46659.cljs$lang$protocol_mask$partition0$;
var inst_46667 = (inst_46666 & (64));
var inst_46668 = inst_46659.cljs$core$ISeq$;
var inst_46669 = (cljs.core.PROTOCOL_SENTINEL === inst_46668);
var inst_46670 = (inst_46667) || (inst_46669);
var state_46732__$1 = state_46732;
if(cljs.core.truth_(inst_46670)){
var statearr_46752_46807 = state_46732__$1;
(statearr_46752_46807[(1)] = (16));

} else {
var statearr_46753_46808 = state_46732__$1;
(statearr_46753_46808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (22))){
var inst_46692 = (state_46732[(10)]);
var inst_46691 = (state_46732[(14)]);
var inst_46690 = (state_46732[(2)]);
var inst_46691__$1 = cljs.core.nth.call(null,inst_46690,(0),null);
var inst_46692__$1 = cljs.core.nth.call(null,inst_46690,(1),null);
var inst_46693 = (inst_46691__$1 == null);
var inst_46694 = cljs.core._EQ_.call(null,inst_46692__$1,change);
var inst_46695 = (inst_46693) || (inst_46694);
var state_46732__$1 = (function (){var statearr_46754 = state_46732;
(statearr_46754[(10)] = inst_46692__$1);

(statearr_46754[(14)] = inst_46691__$1);

return statearr_46754;
})();
if(cljs.core.truth_(inst_46695)){
var statearr_46755_46809 = state_46732__$1;
(statearr_46755_46809[(1)] = (23));

} else {
var statearr_46756_46810 = state_46732__$1;
(statearr_46756_46810[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (36))){
var inst_46682 = (state_46732[(12)]);
var inst_46659 = inst_46682;
var state_46732__$1 = (function (){var statearr_46757 = state_46732;
(statearr_46757[(7)] = inst_46659);

return statearr_46757;
})();
var statearr_46758_46811 = state_46732__$1;
(statearr_46758_46811[(2)] = null);

(statearr_46758_46811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (29))){
var inst_46706 = (state_46732[(9)]);
var state_46732__$1 = state_46732;
var statearr_46759_46812 = state_46732__$1;
(statearr_46759_46812[(2)] = inst_46706);

(statearr_46759_46812[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (6))){
var state_46732__$1 = state_46732;
var statearr_46760_46813 = state_46732__$1;
(statearr_46760_46813[(2)] = false);

(statearr_46760_46813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (28))){
var inst_46702 = (state_46732[(2)]);
var inst_46703 = calc_state.call(null);
var inst_46659 = inst_46703;
var state_46732__$1 = (function (){var statearr_46761 = state_46732;
(statearr_46761[(15)] = inst_46702);

(statearr_46761[(7)] = inst_46659);

return statearr_46761;
})();
var statearr_46762_46814 = state_46732__$1;
(statearr_46762_46814[(2)] = null);

(statearr_46762_46814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (25))){
var inst_46728 = (state_46732[(2)]);
var state_46732__$1 = state_46732;
var statearr_46763_46815 = state_46732__$1;
(statearr_46763_46815[(2)] = inst_46728);

(statearr_46763_46815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (34))){
var inst_46726 = (state_46732[(2)]);
var state_46732__$1 = state_46732;
var statearr_46764_46816 = state_46732__$1;
(statearr_46764_46816[(2)] = inst_46726);

(statearr_46764_46816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (17))){
var state_46732__$1 = state_46732;
var statearr_46765_46817 = state_46732__$1;
(statearr_46765_46817[(2)] = false);

(statearr_46765_46817[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (3))){
var state_46732__$1 = state_46732;
var statearr_46766_46818 = state_46732__$1;
(statearr_46766_46818[(2)] = false);

(statearr_46766_46818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (12))){
var inst_46730 = (state_46732[(2)]);
var state_46732__$1 = state_46732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46732__$1,inst_46730);
} else {
if((state_val_46733 === (2))){
var inst_46634 = (state_46732[(8)]);
var inst_46639 = inst_46634.cljs$lang$protocol_mask$partition0$;
var inst_46640 = (inst_46639 & (64));
var inst_46641 = inst_46634.cljs$core$ISeq$;
var inst_46642 = (cljs.core.PROTOCOL_SENTINEL === inst_46641);
var inst_46643 = (inst_46640) || (inst_46642);
var state_46732__$1 = state_46732;
if(cljs.core.truth_(inst_46643)){
var statearr_46767_46819 = state_46732__$1;
(statearr_46767_46819[(1)] = (5));

} else {
var statearr_46768_46820 = state_46732__$1;
(statearr_46768_46820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (23))){
var inst_46691 = (state_46732[(14)]);
var inst_46697 = (inst_46691 == null);
var state_46732__$1 = state_46732;
if(cljs.core.truth_(inst_46697)){
var statearr_46769_46821 = state_46732__$1;
(statearr_46769_46821[(1)] = (26));

} else {
var statearr_46770_46822 = state_46732__$1;
(statearr_46770_46822[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (35))){
var inst_46717 = (state_46732[(2)]);
var state_46732__$1 = state_46732;
if(cljs.core.truth_(inst_46717)){
var statearr_46771_46823 = state_46732__$1;
(statearr_46771_46823[(1)] = (36));

} else {
var statearr_46772_46824 = state_46732__$1;
(statearr_46772_46824[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (19))){
var inst_46659 = (state_46732[(7)]);
var inst_46679 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46659);
var state_46732__$1 = state_46732;
var statearr_46773_46825 = state_46732__$1;
(statearr_46773_46825[(2)] = inst_46679);

(statearr_46773_46825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (11))){
var inst_46659 = (state_46732[(7)]);
var inst_46663 = (inst_46659 == null);
var inst_46664 = cljs.core.not.call(null,inst_46663);
var state_46732__$1 = state_46732;
if(inst_46664){
var statearr_46774_46826 = state_46732__$1;
(statearr_46774_46826[(1)] = (13));

} else {
var statearr_46775_46827 = state_46732__$1;
(statearr_46775_46827[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (9))){
var inst_46634 = (state_46732[(8)]);
var state_46732__$1 = state_46732;
var statearr_46776_46828 = state_46732__$1;
(statearr_46776_46828[(2)] = inst_46634);

(statearr_46776_46828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (5))){
var state_46732__$1 = state_46732;
var statearr_46777_46829 = state_46732__$1;
(statearr_46777_46829[(2)] = true);

(statearr_46777_46829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (14))){
var state_46732__$1 = state_46732;
var statearr_46778_46830 = state_46732__$1;
(statearr_46778_46830[(2)] = false);

(statearr_46778_46830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (26))){
var inst_46692 = (state_46732[(10)]);
var inst_46699 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46692);
var state_46732__$1 = state_46732;
var statearr_46779_46831 = state_46732__$1;
(statearr_46779_46831[(2)] = inst_46699);

(statearr_46779_46831[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (16))){
var state_46732__$1 = state_46732;
var statearr_46780_46832 = state_46732__$1;
(statearr_46780_46832[(2)] = true);

(statearr_46780_46832[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (38))){
var inst_46722 = (state_46732[(2)]);
var state_46732__$1 = state_46732;
var statearr_46781_46833 = state_46732__$1;
(statearr_46781_46833[(2)] = inst_46722);

(statearr_46781_46833[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (30))){
var inst_46692 = (state_46732[(10)]);
var inst_46684 = (state_46732[(13)]);
var inst_46683 = (state_46732[(11)]);
var inst_46709 = cljs.core.empty_QMARK_.call(null,inst_46683);
var inst_46710 = inst_46684.call(null,inst_46692);
var inst_46711 = cljs.core.not.call(null,inst_46710);
var inst_46712 = (inst_46709) && (inst_46711);
var state_46732__$1 = state_46732;
var statearr_46782_46834 = state_46732__$1;
(statearr_46782_46834[(2)] = inst_46712);

(statearr_46782_46834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (10))){
var inst_46634 = (state_46732[(8)]);
var inst_46655 = (state_46732[(2)]);
var inst_46656 = cljs.core.get.call(null,inst_46655,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46657 = cljs.core.get.call(null,inst_46655,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46658 = cljs.core.get.call(null,inst_46655,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46659 = inst_46634;
var state_46732__$1 = (function (){var statearr_46783 = state_46732;
(statearr_46783[(16)] = inst_46658);

(statearr_46783[(17)] = inst_46656);

(statearr_46783[(18)] = inst_46657);

(statearr_46783[(7)] = inst_46659);

return statearr_46783;
})();
var statearr_46784_46835 = state_46732__$1;
(statearr_46784_46835[(2)] = null);

(statearr_46784_46835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (18))){
var inst_46674 = (state_46732[(2)]);
var state_46732__$1 = state_46732;
var statearr_46785_46836 = state_46732__$1;
(statearr_46785_46836[(2)] = inst_46674);

(statearr_46785_46836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (37))){
var state_46732__$1 = state_46732;
var statearr_46786_46837 = state_46732__$1;
(statearr_46786_46837[(2)] = null);

(statearr_46786_46837[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46733 === (8))){
var inst_46634 = (state_46732[(8)]);
var inst_46652 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46634);
var state_46732__$1 = state_46732;
var statearr_46787_46838 = state_46732__$1;
(statearr_46787_46838[(2)] = inst_46652);

(statearr_46787_46838[(1)] = (10));


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
});})(c__45733__auto___46792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__45643__auto__,c__45733__auto___46792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__45644__auto__ = null;
var cljs$core$async$mix_$_state_machine__45644__auto____0 = (function (){
var statearr_46788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46788[(0)] = cljs$core$async$mix_$_state_machine__45644__auto__);

(statearr_46788[(1)] = (1));

return statearr_46788;
});
var cljs$core$async$mix_$_state_machine__45644__auto____1 = (function (state_46732){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_46732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e46789){if((e46789 instanceof Object)){
var ex__45647__auto__ = e46789;
var statearr_46790_46839 = state_46732;
(statearr_46790_46839[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46840 = state_46732;
state_46732 = G__46840;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45644__auto__ = function(state_46732){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45644__auto____1.call(this,state_46732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45644__auto____0;
cljs$core$async$mix_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45644__auto____1;
return cljs$core$async$mix_$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___46792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__45735__auto__ = (function (){var statearr_46791 = f__45734__auto__.call(null);
(statearr_46791[(6)] = c__45733__auto___46792);

return statearr_46791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___46792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__46842 = arguments.length;
switch (G__46842) {
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
var G__46846 = arguments.length;
switch (G__46846) {
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
return (function (p1__46844_SHARP_){
if(cljs.core.truth_(p1__46844_SHARP_.call(null,topic))){
return p1__46844_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46844_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30249__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46847 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46848){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46848 = meta46848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46849,meta46848__$1){
var self__ = this;
var _46849__$1 = this;
return (new cljs.core.async.t_cljs$core$async46847(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46848__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46849){
var self__ = this;
var _46849__$1 = this;
return self__.meta46848;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46847.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46847.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46847.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46847.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async46847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46847.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46848","meta46848",1928366738,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46847";

cljs.core.async.t_cljs$core$async46847.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async46847");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46847 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46847(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46848){
return (new cljs.core.async.t_cljs$core$async46847(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46848));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46847(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45733__auto___46967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___46967,mults,ensure_mult,p){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___46967,mults,ensure_mult,p){
return (function (state_46921){
var state_val_46922 = (state_46921[(1)]);
if((state_val_46922 === (7))){
var inst_46917 = (state_46921[(2)]);
var state_46921__$1 = state_46921;
var statearr_46923_46968 = state_46921__$1;
(statearr_46923_46968[(2)] = inst_46917);

(statearr_46923_46968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (20))){
var state_46921__$1 = state_46921;
var statearr_46924_46969 = state_46921__$1;
(statearr_46924_46969[(2)] = null);

(statearr_46924_46969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (1))){
var state_46921__$1 = state_46921;
var statearr_46925_46970 = state_46921__$1;
(statearr_46925_46970[(2)] = null);

(statearr_46925_46970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (24))){
var inst_46900 = (state_46921[(7)]);
var inst_46909 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46900);
var state_46921__$1 = state_46921;
var statearr_46926_46971 = state_46921__$1;
(statearr_46926_46971[(2)] = inst_46909);

(statearr_46926_46971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (4))){
var inst_46852 = (state_46921[(8)]);
var inst_46852__$1 = (state_46921[(2)]);
var inst_46853 = (inst_46852__$1 == null);
var state_46921__$1 = (function (){var statearr_46927 = state_46921;
(statearr_46927[(8)] = inst_46852__$1);

return statearr_46927;
})();
if(cljs.core.truth_(inst_46853)){
var statearr_46928_46972 = state_46921__$1;
(statearr_46928_46972[(1)] = (5));

} else {
var statearr_46929_46973 = state_46921__$1;
(statearr_46929_46973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (15))){
var inst_46894 = (state_46921[(2)]);
var state_46921__$1 = state_46921;
var statearr_46930_46974 = state_46921__$1;
(statearr_46930_46974[(2)] = inst_46894);

(statearr_46930_46974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (21))){
var inst_46914 = (state_46921[(2)]);
var state_46921__$1 = (function (){var statearr_46931 = state_46921;
(statearr_46931[(9)] = inst_46914);

return statearr_46931;
})();
var statearr_46932_46975 = state_46921__$1;
(statearr_46932_46975[(2)] = null);

(statearr_46932_46975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (13))){
var inst_46876 = (state_46921[(10)]);
var inst_46878 = cljs.core.chunked_seq_QMARK_.call(null,inst_46876);
var state_46921__$1 = state_46921;
if(inst_46878){
var statearr_46933_46976 = state_46921__$1;
(statearr_46933_46976[(1)] = (16));

} else {
var statearr_46934_46977 = state_46921__$1;
(statearr_46934_46977[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (22))){
var inst_46906 = (state_46921[(2)]);
var state_46921__$1 = state_46921;
if(cljs.core.truth_(inst_46906)){
var statearr_46935_46978 = state_46921__$1;
(statearr_46935_46978[(1)] = (23));

} else {
var statearr_46936_46979 = state_46921__$1;
(statearr_46936_46979[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (6))){
var inst_46852 = (state_46921[(8)]);
var inst_46902 = (state_46921[(11)]);
var inst_46900 = (state_46921[(7)]);
var inst_46900__$1 = topic_fn.call(null,inst_46852);
var inst_46901 = cljs.core.deref.call(null,mults);
var inst_46902__$1 = cljs.core.get.call(null,inst_46901,inst_46900__$1);
var state_46921__$1 = (function (){var statearr_46937 = state_46921;
(statearr_46937[(11)] = inst_46902__$1);

(statearr_46937[(7)] = inst_46900__$1);

return statearr_46937;
})();
if(cljs.core.truth_(inst_46902__$1)){
var statearr_46938_46980 = state_46921__$1;
(statearr_46938_46980[(1)] = (19));

} else {
var statearr_46939_46981 = state_46921__$1;
(statearr_46939_46981[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (25))){
var inst_46911 = (state_46921[(2)]);
var state_46921__$1 = state_46921;
var statearr_46940_46982 = state_46921__$1;
(statearr_46940_46982[(2)] = inst_46911);

(statearr_46940_46982[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (17))){
var inst_46876 = (state_46921[(10)]);
var inst_46885 = cljs.core.first.call(null,inst_46876);
var inst_46886 = cljs.core.async.muxch_STAR_.call(null,inst_46885);
var inst_46887 = cljs.core.async.close_BANG_.call(null,inst_46886);
var inst_46888 = cljs.core.next.call(null,inst_46876);
var inst_46862 = inst_46888;
var inst_46863 = null;
var inst_46864 = (0);
var inst_46865 = (0);
var state_46921__$1 = (function (){var statearr_46941 = state_46921;
(statearr_46941[(12)] = inst_46863);

(statearr_46941[(13)] = inst_46864);

(statearr_46941[(14)] = inst_46887);

(statearr_46941[(15)] = inst_46865);

(statearr_46941[(16)] = inst_46862);

return statearr_46941;
})();
var statearr_46942_46983 = state_46921__$1;
(statearr_46942_46983[(2)] = null);

(statearr_46942_46983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (3))){
var inst_46919 = (state_46921[(2)]);
var state_46921__$1 = state_46921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46921__$1,inst_46919);
} else {
if((state_val_46922 === (12))){
var inst_46896 = (state_46921[(2)]);
var state_46921__$1 = state_46921;
var statearr_46943_46984 = state_46921__$1;
(statearr_46943_46984[(2)] = inst_46896);

(statearr_46943_46984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (2))){
var state_46921__$1 = state_46921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46921__$1,(4),ch);
} else {
if((state_val_46922 === (23))){
var state_46921__$1 = state_46921;
var statearr_46944_46985 = state_46921__$1;
(statearr_46944_46985[(2)] = null);

(statearr_46944_46985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (19))){
var inst_46852 = (state_46921[(8)]);
var inst_46902 = (state_46921[(11)]);
var inst_46904 = cljs.core.async.muxch_STAR_.call(null,inst_46902);
var state_46921__$1 = state_46921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46921__$1,(22),inst_46904,inst_46852);
} else {
if((state_val_46922 === (11))){
var inst_46876 = (state_46921[(10)]);
var inst_46862 = (state_46921[(16)]);
var inst_46876__$1 = cljs.core.seq.call(null,inst_46862);
var state_46921__$1 = (function (){var statearr_46945 = state_46921;
(statearr_46945[(10)] = inst_46876__$1);

return statearr_46945;
})();
if(inst_46876__$1){
var statearr_46946_46986 = state_46921__$1;
(statearr_46946_46986[(1)] = (13));

} else {
var statearr_46947_46987 = state_46921__$1;
(statearr_46947_46987[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (9))){
var inst_46898 = (state_46921[(2)]);
var state_46921__$1 = state_46921;
var statearr_46948_46988 = state_46921__$1;
(statearr_46948_46988[(2)] = inst_46898);

(statearr_46948_46988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (5))){
var inst_46859 = cljs.core.deref.call(null,mults);
var inst_46860 = cljs.core.vals.call(null,inst_46859);
var inst_46861 = cljs.core.seq.call(null,inst_46860);
var inst_46862 = inst_46861;
var inst_46863 = null;
var inst_46864 = (0);
var inst_46865 = (0);
var state_46921__$1 = (function (){var statearr_46949 = state_46921;
(statearr_46949[(12)] = inst_46863);

(statearr_46949[(13)] = inst_46864);

(statearr_46949[(15)] = inst_46865);

(statearr_46949[(16)] = inst_46862);

return statearr_46949;
})();
var statearr_46950_46989 = state_46921__$1;
(statearr_46950_46989[(2)] = null);

(statearr_46950_46989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (14))){
var state_46921__$1 = state_46921;
var statearr_46954_46990 = state_46921__$1;
(statearr_46954_46990[(2)] = null);

(statearr_46954_46990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (16))){
var inst_46876 = (state_46921[(10)]);
var inst_46880 = cljs.core.chunk_first.call(null,inst_46876);
var inst_46881 = cljs.core.chunk_rest.call(null,inst_46876);
var inst_46882 = cljs.core.count.call(null,inst_46880);
var inst_46862 = inst_46881;
var inst_46863 = inst_46880;
var inst_46864 = inst_46882;
var inst_46865 = (0);
var state_46921__$1 = (function (){var statearr_46955 = state_46921;
(statearr_46955[(12)] = inst_46863);

(statearr_46955[(13)] = inst_46864);

(statearr_46955[(15)] = inst_46865);

(statearr_46955[(16)] = inst_46862);

return statearr_46955;
})();
var statearr_46956_46991 = state_46921__$1;
(statearr_46956_46991[(2)] = null);

(statearr_46956_46991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (10))){
var inst_46863 = (state_46921[(12)]);
var inst_46864 = (state_46921[(13)]);
var inst_46865 = (state_46921[(15)]);
var inst_46862 = (state_46921[(16)]);
var inst_46870 = cljs.core._nth.call(null,inst_46863,inst_46865);
var inst_46871 = cljs.core.async.muxch_STAR_.call(null,inst_46870);
var inst_46872 = cljs.core.async.close_BANG_.call(null,inst_46871);
var inst_46873 = (inst_46865 + (1));
var tmp46951 = inst_46863;
var tmp46952 = inst_46864;
var tmp46953 = inst_46862;
var inst_46862__$1 = tmp46953;
var inst_46863__$1 = tmp46951;
var inst_46864__$1 = tmp46952;
var inst_46865__$1 = inst_46873;
var state_46921__$1 = (function (){var statearr_46957 = state_46921;
(statearr_46957[(12)] = inst_46863__$1);

(statearr_46957[(13)] = inst_46864__$1);

(statearr_46957[(15)] = inst_46865__$1);

(statearr_46957[(17)] = inst_46872);

(statearr_46957[(16)] = inst_46862__$1);

return statearr_46957;
})();
var statearr_46958_46992 = state_46921__$1;
(statearr_46958_46992[(2)] = null);

(statearr_46958_46992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (18))){
var inst_46891 = (state_46921[(2)]);
var state_46921__$1 = state_46921;
var statearr_46959_46993 = state_46921__$1;
(statearr_46959_46993[(2)] = inst_46891);

(statearr_46959_46993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (8))){
var inst_46864 = (state_46921[(13)]);
var inst_46865 = (state_46921[(15)]);
var inst_46867 = (inst_46865 < inst_46864);
var inst_46868 = inst_46867;
var state_46921__$1 = state_46921;
if(cljs.core.truth_(inst_46868)){
var statearr_46960_46994 = state_46921__$1;
(statearr_46960_46994[(1)] = (10));

} else {
var statearr_46961_46995 = state_46921__$1;
(statearr_46961_46995[(1)] = (11));

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
});})(c__45733__auto___46967,mults,ensure_mult,p))
;
return ((function (switch__45643__auto__,c__45733__auto___46967,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__45644__auto__ = null;
var cljs$core$async$state_machine__45644__auto____0 = (function (){
var statearr_46962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46962[(0)] = cljs$core$async$state_machine__45644__auto__);

(statearr_46962[(1)] = (1));

return statearr_46962;
});
var cljs$core$async$state_machine__45644__auto____1 = (function (state_46921){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_46921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e46963){if((e46963 instanceof Object)){
var ex__45647__auto__ = e46963;
var statearr_46964_46996 = state_46921;
(statearr_46964_46996[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46997 = state_46921;
state_46921 = G__46997;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$state_machine__45644__auto__ = function(state_46921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45644__auto____1.call(this,state_46921);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45644__auto____0;
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45644__auto____1;
return cljs$core$async$state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___46967,mults,ensure_mult,p))
})();
var state__45735__auto__ = (function (){var statearr_46965 = f__45734__auto__.call(null);
(statearr_46965[(6)] = c__45733__auto___46967);

return statearr_46965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___46967,mults,ensure_mult,p))
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
var G__46999 = arguments.length;
switch (G__46999) {
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
var G__47002 = arguments.length;
switch (G__47002) {
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
var G__47005 = arguments.length;
switch (G__47005) {
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
var c__45733__auto___47072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___47072,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___47072,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47044){
var state_val_47045 = (state_47044[(1)]);
if((state_val_47045 === (7))){
var state_47044__$1 = state_47044;
var statearr_47046_47073 = state_47044__$1;
(statearr_47046_47073[(2)] = null);

(statearr_47046_47073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47045 === (1))){
var state_47044__$1 = state_47044;
var statearr_47047_47074 = state_47044__$1;
(statearr_47047_47074[(2)] = null);

(statearr_47047_47074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47045 === (4))){
var inst_47008 = (state_47044[(7)]);
var inst_47010 = (inst_47008 < cnt);
var state_47044__$1 = state_47044;
if(cljs.core.truth_(inst_47010)){
var statearr_47048_47075 = state_47044__$1;
(statearr_47048_47075[(1)] = (6));

} else {
var statearr_47049_47076 = state_47044__$1;
(statearr_47049_47076[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47045 === (15))){
var inst_47040 = (state_47044[(2)]);
var state_47044__$1 = state_47044;
var statearr_47050_47077 = state_47044__$1;
(statearr_47050_47077[(2)] = inst_47040);

(statearr_47050_47077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47045 === (13))){
var inst_47033 = cljs.core.async.close_BANG_.call(null,out);
var state_47044__$1 = state_47044;
var statearr_47051_47078 = state_47044__$1;
(statearr_47051_47078[(2)] = inst_47033);

(statearr_47051_47078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47045 === (6))){
var state_47044__$1 = state_47044;
var statearr_47052_47079 = state_47044__$1;
(statearr_47052_47079[(2)] = null);

(statearr_47052_47079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47045 === (3))){
var inst_47042 = (state_47044[(2)]);
var state_47044__$1 = state_47044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47044__$1,inst_47042);
} else {
if((state_val_47045 === (12))){
var inst_47030 = (state_47044[(8)]);
var inst_47030__$1 = (state_47044[(2)]);
var inst_47031 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_47030__$1);
var state_47044__$1 = (function (){var statearr_47053 = state_47044;
(statearr_47053[(8)] = inst_47030__$1);

return statearr_47053;
})();
if(cljs.core.truth_(inst_47031)){
var statearr_47054_47080 = state_47044__$1;
(statearr_47054_47080[(1)] = (13));

} else {
var statearr_47055_47081 = state_47044__$1;
(statearr_47055_47081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47045 === (2))){
var inst_47007 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_47008 = (0);
var state_47044__$1 = (function (){var statearr_47056 = state_47044;
(statearr_47056[(7)] = inst_47008);

(statearr_47056[(9)] = inst_47007);

return statearr_47056;
})();
var statearr_47057_47082 = state_47044__$1;
(statearr_47057_47082[(2)] = null);

(statearr_47057_47082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47045 === (11))){
var inst_47008 = (state_47044[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_47044,(10),Object,null,(9));
var inst_47017 = chs__$1.call(null,inst_47008);
var inst_47018 = done.call(null,inst_47008);
var inst_47019 = cljs.core.async.take_BANG_.call(null,inst_47017,inst_47018);
var state_47044__$1 = state_47044;
var statearr_47058_47083 = state_47044__$1;
(statearr_47058_47083[(2)] = inst_47019);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47044__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47045 === (9))){
var inst_47008 = (state_47044[(7)]);
var inst_47021 = (state_47044[(2)]);
var inst_47022 = (inst_47008 + (1));
var inst_47008__$1 = inst_47022;
var state_47044__$1 = (function (){var statearr_47059 = state_47044;
(statearr_47059[(7)] = inst_47008__$1);

(statearr_47059[(10)] = inst_47021);

return statearr_47059;
})();
var statearr_47060_47084 = state_47044__$1;
(statearr_47060_47084[(2)] = null);

(statearr_47060_47084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47045 === (5))){
var inst_47028 = (state_47044[(2)]);
var state_47044__$1 = (function (){var statearr_47061 = state_47044;
(statearr_47061[(11)] = inst_47028);

return statearr_47061;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47044__$1,(12),dchan);
} else {
if((state_val_47045 === (14))){
var inst_47030 = (state_47044[(8)]);
var inst_47035 = cljs.core.apply.call(null,f,inst_47030);
var state_47044__$1 = state_47044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47044__$1,(16),out,inst_47035);
} else {
if((state_val_47045 === (16))){
var inst_47037 = (state_47044[(2)]);
var state_47044__$1 = (function (){var statearr_47062 = state_47044;
(statearr_47062[(12)] = inst_47037);

return statearr_47062;
})();
var statearr_47063_47085 = state_47044__$1;
(statearr_47063_47085[(2)] = null);

(statearr_47063_47085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47045 === (10))){
var inst_47012 = (state_47044[(2)]);
var inst_47013 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_47044__$1 = (function (){var statearr_47064 = state_47044;
(statearr_47064[(13)] = inst_47012);

return statearr_47064;
})();
var statearr_47065_47086 = state_47044__$1;
(statearr_47065_47086[(2)] = inst_47013);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47044__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47045 === (8))){
var inst_47026 = (state_47044[(2)]);
var state_47044__$1 = state_47044;
var statearr_47066_47087 = state_47044__$1;
(statearr_47066_47087[(2)] = inst_47026);

(statearr_47066_47087[(1)] = (5));


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
});})(c__45733__auto___47072,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__45643__auto__,c__45733__auto___47072,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__45644__auto__ = null;
var cljs$core$async$state_machine__45644__auto____0 = (function (){
var statearr_47067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47067[(0)] = cljs$core$async$state_machine__45644__auto__);

(statearr_47067[(1)] = (1));

return statearr_47067;
});
var cljs$core$async$state_machine__45644__auto____1 = (function (state_47044){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_47044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e47068){if((e47068 instanceof Object)){
var ex__45647__auto__ = e47068;
var statearr_47069_47088 = state_47044;
(statearr_47069_47088[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47089 = state_47044;
state_47044 = G__47089;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$state_machine__45644__auto__ = function(state_47044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45644__auto____1.call(this,state_47044);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45644__auto____0;
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45644__auto____1;
return cljs$core$async$state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___47072,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__45735__auto__ = (function (){var statearr_47070 = f__45734__auto__.call(null);
(statearr_47070[(6)] = c__45733__auto___47072);

return statearr_47070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___47072,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__47092 = arguments.length;
switch (G__47092) {
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
var c__45733__auto___47146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___47146,out){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___47146,out){
return (function (state_47124){
var state_val_47125 = (state_47124[(1)]);
if((state_val_47125 === (7))){
var inst_47103 = (state_47124[(7)]);
var inst_47104 = (state_47124[(8)]);
var inst_47103__$1 = (state_47124[(2)]);
var inst_47104__$1 = cljs.core.nth.call(null,inst_47103__$1,(0),null);
var inst_47105 = cljs.core.nth.call(null,inst_47103__$1,(1),null);
var inst_47106 = (inst_47104__$1 == null);
var state_47124__$1 = (function (){var statearr_47126 = state_47124;
(statearr_47126[(7)] = inst_47103__$1);

(statearr_47126[(8)] = inst_47104__$1);

(statearr_47126[(9)] = inst_47105);

return statearr_47126;
})();
if(cljs.core.truth_(inst_47106)){
var statearr_47127_47147 = state_47124__$1;
(statearr_47127_47147[(1)] = (8));

} else {
var statearr_47128_47148 = state_47124__$1;
(statearr_47128_47148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (1))){
var inst_47093 = cljs.core.vec.call(null,chs);
var inst_47094 = inst_47093;
var state_47124__$1 = (function (){var statearr_47129 = state_47124;
(statearr_47129[(10)] = inst_47094);

return statearr_47129;
})();
var statearr_47130_47149 = state_47124__$1;
(statearr_47130_47149[(2)] = null);

(statearr_47130_47149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (4))){
var inst_47094 = (state_47124[(10)]);
var state_47124__$1 = state_47124;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47124__$1,(7),inst_47094);
} else {
if((state_val_47125 === (6))){
var inst_47120 = (state_47124[(2)]);
var state_47124__$1 = state_47124;
var statearr_47131_47150 = state_47124__$1;
(statearr_47131_47150[(2)] = inst_47120);

(statearr_47131_47150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (3))){
var inst_47122 = (state_47124[(2)]);
var state_47124__$1 = state_47124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47124__$1,inst_47122);
} else {
if((state_val_47125 === (2))){
var inst_47094 = (state_47124[(10)]);
var inst_47096 = cljs.core.count.call(null,inst_47094);
var inst_47097 = (inst_47096 > (0));
var state_47124__$1 = state_47124;
if(cljs.core.truth_(inst_47097)){
var statearr_47133_47151 = state_47124__$1;
(statearr_47133_47151[(1)] = (4));

} else {
var statearr_47134_47152 = state_47124__$1;
(statearr_47134_47152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (11))){
var inst_47094 = (state_47124[(10)]);
var inst_47113 = (state_47124[(2)]);
var tmp47132 = inst_47094;
var inst_47094__$1 = tmp47132;
var state_47124__$1 = (function (){var statearr_47135 = state_47124;
(statearr_47135[(11)] = inst_47113);

(statearr_47135[(10)] = inst_47094__$1);

return statearr_47135;
})();
var statearr_47136_47153 = state_47124__$1;
(statearr_47136_47153[(2)] = null);

(statearr_47136_47153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (9))){
var inst_47104 = (state_47124[(8)]);
var state_47124__$1 = state_47124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47124__$1,(11),out,inst_47104);
} else {
if((state_val_47125 === (5))){
var inst_47118 = cljs.core.async.close_BANG_.call(null,out);
var state_47124__$1 = state_47124;
var statearr_47137_47154 = state_47124__$1;
(statearr_47137_47154[(2)] = inst_47118);

(statearr_47137_47154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (10))){
var inst_47116 = (state_47124[(2)]);
var state_47124__$1 = state_47124;
var statearr_47138_47155 = state_47124__$1;
(statearr_47138_47155[(2)] = inst_47116);

(statearr_47138_47155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47125 === (8))){
var inst_47103 = (state_47124[(7)]);
var inst_47104 = (state_47124[(8)]);
var inst_47105 = (state_47124[(9)]);
var inst_47094 = (state_47124[(10)]);
var inst_47108 = (function (){var cs = inst_47094;
var vec__47099 = inst_47103;
var v = inst_47104;
var c = inst_47105;
return ((function (cs,vec__47099,v,c,inst_47103,inst_47104,inst_47105,inst_47094,state_val_47125,c__45733__auto___47146,out){
return (function (p1__47090_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__47090_SHARP_);
});
;})(cs,vec__47099,v,c,inst_47103,inst_47104,inst_47105,inst_47094,state_val_47125,c__45733__auto___47146,out))
})();
var inst_47109 = cljs.core.filterv.call(null,inst_47108,inst_47094);
var inst_47094__$1 = inst_47109;
var state_47124__$1 = (function (){var statearr_47139 = state_47124;
(statearr_47139[(10)] = inst_47094__$1);

return statearr_47139;
})();
var statearr_47140_47156 = state_47124__$1;
(statearr_47140_47156[(2)] = null);

(statearr_47140_47156[(1)] = (2));


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
});})(c__45733__auto___47146,out))
;
return ((function (switch__45643__auto__,c__45733__auto___47146,out){
return (function() {
var cljs$core$async$state_machine__45644__auto__ = null;
var cljs$core$async$state_machine__45644__auto____0 = (function (){
var statearr_47141 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47141[(0)] = cljs$core$async$state_machine__45644__auto__);

(statearr_47141[(1)] = (1));

return statearr_47141;
});
var cljs$core$async$state_machine__45644__auto____1 = (function (state_47124){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_47124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e47142){if((e47142 instanceof Object)){
var ex__45647__auto__ = e47142;
var statearr_47143_47157 = state_47124;
(statearr_47143_47157[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47158 = state_47124;
state_47124 = G__47158;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$state_machine__45644__auto__ = function(state_47124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45644__auto____1.call(this,state_47124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45644__auto____0;
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45644__auto____1;
return cljs$core$async$state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___47146,out))
})();
var state__45735__auto__ = (function (){var statearr_47144 = f__45734__auto__.call(null);
(statearr_47144[(6)] = c__45733__auto___47146);

return statearr_47144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___47146,out))
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
var G__47160 = arguments.length;
switch (G__47160) {
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
var c__45733__auto___47205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___47205,out){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___47205,out){
return (function (state_47184){
var state_val_47185 = (state_47184[(1)]);
if((state_val_47185 === (7))){
var inst_47166 = (state_47184[(7)]);
var inst_47166__$1 = (state_47184[(2)]);
var inst_47167 = (inst_47166__$1 == null);
var inst_47168 = cljs.core.not.call(null,inst_47167);
var state_47184__$1 = (function (){var statearr_47186 = state_47184;
(statearr_47186[(7)] = inst_47166__$1);

return statearr_47186;
})();
if(inst_47168){
var statearr_47187_47206 = state_47184__$1;
(statearr_47187_47206[(1)] = (8));

} else {
var statearr_47188_47207 = state_47184__$1;
(statearr_47188_47207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (1))){
var inst_47161 = (0);
var state_47184__$1 = (function (){var statearr_47189 = state_47184;
(statearr_47189[(8)] = inst_47161);

return statearr_47189;
})();
var statearr_47190_47208 = state_47184__$1;
(statearr_47190_47208[(2)] = null);

(statearr_47190_47208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (4))){
var state_47184__$1 = state_47184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47184__$1,(7),ch);
} else {
if((state_val_47185 === (6))){
var inst_47179 = (state_47184[(2)]);
var state_47184__$1 = state_47184;
var statearr_47191_47209 = state_47184__$1;
(statearr_47191_47209[(2)] = inst_47179);

(statearr_47191_47209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (3))){
var inst_47181 = (state_47184[(2)]);
var inst_47182 = cljs.core.async.close_BANG_.call(null,out);
var state_47184__$1 = (function (){var statearr_47192 = state_47184;
(statearr_47192[(9)] = inst_47181);

return statearr_47192;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47184__$1,inst_47182);
} else {
if((state_val_47185 === (2))){
var inst_47161 = (state_47184[(8)]);
var inst_47163 = (inst_47161 < n);
var state_47184__$1 = state_47184;
if(cljs.core.truth_(inst_47163)){
var statearr_47193_47210 = state_47184__$1;
(statearr_47193_47210[(1)] = (4));

} else {
var statearr_47194_47211 = state_47184__$1;
(statearr_47194_47211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (11))){
var inst_47161 = (state_47184[(8)]);
var inst_47171 = (state_47184[(2)]);
var inst_47172 = (inst_47161 + (1));
var inst_47161__$1 = inst_47172;
var state_47184__$1 = (function (){var statearr_47195 = state_47184;
(statearr_47195[(10)] = inst_47171);

(statearr_47195[(8)] = inst_47161__$1);

return statearr_47195;
})();
var statearr_47196_47212 = state_47184__$1;
(statearr_47196_47212[(2)] = null);

(statearr_47196_47212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (9))){
var state_47184__$1 = state_47184;
var statearr_47197_47213 = state_47184__$1;
(statearr_47197_47213[(2)] = null);

(statearr_47197_47213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (5))){
var state_47184__$1 = state_47184;
var statearr_47198_47214 = state_47184__$1;
(statearr_47198_47214[(2)] = null);

(statearr_47198_47214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (10))){
var inst_47176 = (state_47184[(2)]);
var state_47184__$1 = state_47184;
var statearr_47199_47215 = state_47184__$1;
(statearr_47199_47215[(2)] = inst_47176);

(statearr_47199_47215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (8))){
var inst_47166 = (state_47184[(7)]);
var state_47184__$1 = state_47184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47184__$1,(11),out,inst_47166);
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
});})(c__45733__auto___47205,out))
;
return ((function (switch__45643__auto__,c__45733__auto___47205,out){
return (function() {
var cljs$core$async$state_machine__45644__auto__ = null;
var cljs$core$async$state_machine__45644__auto____0 = (function (){
var statearr_47200 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47200[(0)] = cljs$core$async$state_machine__45644__auto__);

(statearr_47200[(1)] = (1));

return statearr_47200;
});
var cljs$core$async$state_machine__45644__auto____1 = (function (state_47184){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_47184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e47201){if((e47201 instanceof Object)){
var ex__45647__auto__ = e47201;
var statearr_47202_47216 = state_47184;
(statearr_47202_47216[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47217 = state_47184;
state_47184 = G__47217;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$state_machine__45644__auto__ = function(state_47184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45644__auto____1.call(this,state_47184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45644__auto____0;
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45644__auto____1;
return cljs$core$async$state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___47205,out))
})();
var state__45735__auto__ = (function (){var statearr_47203 = f__45734__auto__.call(null);
(statearr_47203[(6)] = c__45733__auto___47205);

return statearr_47203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___47205,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47219 = (function (f,ch,meta47220){
this.f = f;
this.ch = ch;
this.meta47220 = meta47220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47221,meta47220__$1){
var self__ = this;
var _47221__$1 = this;
return (new cljs.core.async.t_cljs$core$async47219(self__.f,self__.ch,meta47220__$1));
});

cljs.core.async.t_cljs$core$async47219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47221){
var self__ = this;
var _47221__$1 = this;
return self__.meta47220;
});

cljs.core.async.t_cljs$core$async47219.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47219.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47219.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47219.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47219.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async47222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47222 = (function (f,ch,meta47220,_,fn1,meta47223){
this.f = f;
this.ch = ch;
this.meta47220 = meta47220;
this._ = _;
this.fn1 = fn1;
this.meta47223 = meta47223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47224,meta47223__$1){
var self__ = this;
var _47224__$1 = this;
return (new cljs.core.async.t_cljs$core$async47222(self__.f,self__.ch,self__.meta47220,self__._,self__.fn1,meta47223__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47224){
var self__ = this;
var _47224__$1 = this;
return self__.meta47223;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47222.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47222.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47218_SHARP_){
return f1.call(null,(((p1__47218_SHARP_ == null))?null:self__.f.call(null,p1__47218_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47222.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47220","meta47220",-31859788,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47219","cljs.core.async/t_cljs$core$async47219",1296106629,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47223","meta47223",-1740072132,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47222";

cljs.core.async.t_cljs$core$async47222.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async47222");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async47222 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47222(f__$1,ch__$1,meta47220__$1,___$2,fn1__$1,meta47223){
return (new cljs.core.async.t_cljs$core$async47222(f__$1,ch__$1,meta47220__$1,___$2,fn1__$1,meta47223));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47222(self__.f,self__.ch,self__.meta47220,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async47219.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47219.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47220","meta47220",-31859788,null)], null);
});

cljs.core.async.t_cljs$core$async47219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47219";

cljs.core.async.t_cljs$core$async47219.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async47219");
});

cljs.core.async.__GT_t_cljs$core$async47219 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47219(f__$1,ch__$1,meta47220){
return (new cljs.core.async.t_cljs$core$async47219(f__$1,ch__$1,meta47220));
});

}

return (new cljs.core.async.t_cljs$core$async47219(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47225 = (function (f,ch,meta47226){
this.f = f;
this.ch = ch;
this.meta47226 = meta47226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47227,meta47226__$1){
var self__ = this;
var _47227__$1 = this;
return (new cljs.core.async.t_cljs$core$async47225(self__.f,self__.ch,meta47226__$1));
});

cljs.core.async.t_cljs$core$async47225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47227){
var self__ = this;
var _47227__$1 = this;
return self__.meta47226;
});

cljs.core.async.t_cljs$core$async47225.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47225.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47225.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47225.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47225.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47225.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47226","meta47226",729113026,null)], null);
});

cljs.core.async.t_cljs$core$async47225.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47225";

cljs.core.async.t_cljs$core$async47225.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async47225");
});

cljs.core.async.__GT_t_cljs$core$async47225 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47225(f__$1,ch__$1,meta47226){
return (new cljs.core.async.t_cljs$core$async47225(f__$1,ch__$1,meta47226));
});

}

return (new cljs.core.async.t_cljs$core$async47225(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async47228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47228 = (function (p,ch,meta47229){
this.p = p;
this.ch = ch;
this.meta47229 = meta47229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47230,meta47229__$1){
var self__ = this;
var _47230__$1 = this;
return (new cljs.core.async.t_cljs$core$async47228(self__.p,self__.ch,meta47229__$1));
});

cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47230){
var self__ = this;
var _47230__$1 = this;
return self__.meta47229;
});

cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47229","meta47229",805247743,null)], null);
});

cljs.core.async.t_cljs$core$async47228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47228";

cljs.core.async.t_cljs$core$async47228.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async47228");
});

cljs.core.async.__GT_t_cljs$core$async47228 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47228(p__$1,ch__$1,meta47229){
return (new cljs.core.async.t_cljs$core$async47228(p__$1,ch__$1,meta47229));
});

}

return (new cljs.core.async.t_cljs$core$async47228(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47232 = arguments.length;
switch (G__47232) {
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
var c__45733__auto___47272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___47272,out){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___47272,out){
return (function (state_47253){
var state_val_47254 = (state_47253[(1)]);
if((state_val_47254 === (7))){
var inst_47249 = (state_47253[(2)]);
var state_47253__$1 = state_47253;
var statearr_47255_47273 = state_47253__$1;
(statearr_47255_47273[(2)] = inst_47249);

(statearr_47255_47273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47254 === (1))){
var state_47253__$1 = state_47253;
var statearr_47256_47274 = state_47253__$1;
(statearr_47256_47274[(2)] = null);

(statearr_47256_47274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47254 === (4))){
var inst_47235 = (state_47253[(7)]);
var inst_47235__$1 = (state_47253[(2)]);
var inst_47236 = (inst_47235__$1 == null);
var state_47253__$1 = (function (){var statearr_47257 = state_47253;
(statearr_47257[(7)] = inst_47235__$1);

return statearr_47257;
})();
if(cljs.core.truth_(inst_47236)){
var statearr_47258_47275 = state_47253__$1;
(statearr_47258_47275[(1)] = (5));

} else {
var statearr_47259_47276 = state_47253__$1;
(statearr_47259_47276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47254 === (6))){
var inst_47235 = (state_47253[(7)]);
var inst_47240 = p.call(null,inst_47235);
var state_47253__$1 = state_47253;
if(cljs.core.truth_(inst_47240)){
var statearr_47260_47277 = state_47253__$1;
(statearr_47260_47277[(1)] = (8));

} else {
var statearr_47261_47278 = state_47253__$1;
(statearr_47261_47278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47254 === (3))){
var inst_47251 = (state_47253[(2)]);
var state_47253__$1 = state_47253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47253__$1,inst_47251);
} else {
if((state_val_47254 === (2))){
var state_47253__$1 = state_47253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47253__$1,(4),ch);
} else {
if((state_val_47254 === (11))){
var inst_47243 = (state_47253[(2)]);
var state_47253__$1 = state_47253;
var statearr_47262_47279 = state_47253__$1;
(statearr_47262_47279[(2)] = inst_47243);

(statearr_47262_47279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47254 === (9))){
var state_47253__$1 = state_47253;
var statearr_47263_47280 = state_47253__$1;
(statearr_47263_47280[(2)] = null);

(statearr_47263_47280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47254 === (5))){
var inst_47238 = cljs.core.async.close_BANG_.call(null,out);
var state_47253__$1 = state_47253;
var statearr_47264_47281 = state_47253__$1;
(statearr_47264_47281[(2)] = inst_47238);

(statearr_47264_47281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47254 === (10))){
var inst_47246 = (state_47253[(2)]);
var state_47253__$1 = (function (){var statearr_47265 = state_47253;
(statearr_47265[(8)] = inst_47246);

return statearr_47265;
})();
var statearr_47266_47282 = state_47253__$1;
(statearr_47266_47282[(2)] = null);

(statearr_47266_47282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47254 === (8))){
var inst_47235 = (state_47253[(7)]);
var state_47253__$1 = state_47253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47253__$1,(11),out,inst_47235);
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
});})(c__45733__auto___47272,out))
;
return ((function (switch__45643__auto__,c__45733__auto___47272,out){
return (function() {
var cljs$core$async$state_machine__45644__auto__ = null;
var cljs$core$async$state_machine__45644__auto____0 = (function (){
var statearr_47267 = [null,null,null,null,null,null,null,null,null];
(statearr_47267[(0)] = cljs$core$async$state_machine__45644__auto__);

(statearr_47267[(1)] = (1));

return statearr_47267;
});
var cljs$core$async$state_machine__45644__auto____1 = (function (state_47253){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_47253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e47268){if((e47268 instanceof Object)){
var ex__45647__auto__ = e47268;
var statearr_47269_47283 = state_47253;
(statearr_47269_47283[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47284 = state_47253;
state_47253 = G__47284;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$state_machine__45644__auto__ = function(state_47253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45644__auto____1.call(this,state_47253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45644__auto____0;
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45644__auto____1;
return cljs$core$async$state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___47272,out))
})();
var state__45735__auto__ = (function (){var statearr_47270 = f__45734__auto__.call(null);
(statearr_47270[(6)] = c__45733__auto___47272);

return statearr_47270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___47272,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47286 = arguments.length;
switch (G__47286) {
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
var c__45733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto__){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto__){
return (function (state_47349){
var state_val_47350 = (state_47349[(1)]);
if((state_val_47350 === (7))){
var inst_47345 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
var statearr_47351_47389 = state_47349__$1;
(statearr_47351_47389[(2)] = inst_47345);

(statearr_47351_47389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (20))){
var inst_47315 = (state_47349[(7)]);
var inst_47326 = (state_47349[(2)]);
var inst_47327 = cljs.core.next.call(null,inst_47315);
var inst_47301 = inst_47327;
var inst_47302 = null;
var inst_47303 = (0);
var inst_47304 = (0);
var state_47349__$1 = (function (){var statearr_47352 = state_47349;
(statearr_47352[(8)] = inst_47302);

(statearr_47352[(9)] = inst_47304);

(statearr_47352[(10)] = inst_47303);

(statearr_47352[(11)] = inst_47326);

(statearr_47352[(12)] = inst_47301);

return statearr_47352;
})();
var statearr_47353_47390 = state_47349__$1;
(statearr_47353_47390[(2)] = null);

(statearr_47353_47390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (1))){
var state_47349__$1 = state_47349;
var statearr_47354_47391 = state_47349__$1;
(statearr_47354_47391[(2)] = null);

(statearr_47354_47391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (4))){
var inst_47290 = (state_47349[(13)]);
var inst_47290__$1 = (state_47349[(2)]);
var inst_47291 = (inst_47290__$1 == null);
var state_47349__$1 = (function (){var statearr_47355 = state_47349;
(statearr_47355[(13)] = inst_47290__$1);

return statearr_47355;
})();
if(cljs.core.truth_(inst_47291)){
var statearr_47356_47392 = state_47349__$1;
(statearr_47356_47392[(1)] = (5));

} else {
var statearr_47357_47393 = state_47349__$1;
(statearr_47357_47393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (15))){
var state_47349__$1 = state_47349;
var statearr_47361_47394 = state_47349__$1;
(statearr_47361_47394[(2)] = null);

(statearr_47361_47394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (21))){
var state_47349__$1 = state_47349;
var statearr_47362_47395 = state_47349__$1;
(statearr_47362_47395[(2)] = null);

(statearr_47362_47395[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (13))){
var inst_47302 = (state_47349[(8)]);
var inst_47304 = (state_47349[(9)]);
var inst_47303 = (state_47349[(10)]);
var inst_47301 = (state_47349[(12)]);
var inst_47311 = (state_47349[(2)]);
var inst_47312 = (inst_47304 + (1));
var tmp47358 = inst_47302;
var tmp47359 = inst_47303;
var tmp47360 = inst_47301;
var inst_47301__$1 = tmp47360;
var inst_47302__$1 = tmp47358;
var inst_47303__$1 = tmp47359;
var inst_47304__$1 = inst_47312;
var state_47349__$1 = (function (){var statearr_47363 = state_47349;
(statearr_47363[(8)] = inst_47302__$1);

(statearr_47363[(9)] = inst_47304__$1);

(statearr_47363[(10)] = inst_47303__$1);

(statearr_47363[(12)] = inst_47301__$1);

(statearr_47363[(14)] = inst_47311);

return statearr_47363;
})();
var statearr_47364_47396 = state_47349__$1;
(statearr_47364_47396[(2)] = null);

(statearr_47364_47396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (22))){
var state_47349__$1 = state_47349;
var statearr_47365_47397 = state_47349__$1;
(statearr_47365_47397[(2)] = null);

(statearr_47365_47397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (6))){
var inst_47290 = (state_47349[(13)]);
var inst_47299 = f.call(null,inst_47290);
var inst_47300 = cljs.core.seq.call(null,inst_47299);
var inst_47301 = inst_47300;
var inst_47302 = null;
var inst_47303 = (0);
var inst_47304 = (0);
var state_47349__$1 = (function (){var statearr_47366 = state_47349;
(statearr_47366[(8)] = inst_47302);

(statearr_47366[(9)] = inst_47304);

(statearr_47366[(10)] = inst_47303);

(statearr_47366[(12)] = inst_47301);

return statearr_47366;
})();
var statearr_47367_47398 = state_47349__$1;
(statearr_47367_47398[(2)] = null);

(statearr_47367_47398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (17))){
var inst_47315 = (state_47349[(7)]);
var inst_47319 = cljs.core.chunk_first.call(null,inst_47315);
var inst_47320 = cljs.core.chunk_rest.call(null,inst_47315);
var inst_47321 = cljs.core.count.call(null,inst_47319);
var inst_47301 = inst_47320;
var inst_47302 = inst_47319;
var inst_47303 = inst_47321;
var inst_47304 = (0);
var state_47349__$1 = (function (){var statearr_47368 = state_47349;
(statearr_47368[(8)] = inst_47302);

(statearr_47368[(9)] = inst_47304);

(statearr_47368[(10)] = inst_47303);

(statearr_47368[(12)] = inst_47301);

return statearr_47368;
})();
var statearr_47369_47399 = state_47349__$1;
(statearr_47369_47399[(2)] = null);

(statearr_47369_47399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (3))){
var inst_47347 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47349__$1,inst_47347);
} else {
if((state_val_47350 === (12))){
var inst_47335 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
var statearr_47370_47400 = state_47349__$1;
(statearr_47370_47400[(2)] = inst_47335);

(statearr_47370_47400[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (2))){
var state_47349__$1 = state_47349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47349__$1,(4),in$);
} else {
if((state_val_47350 === (23))){
var inst_47343 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
var statearr_47371_47401 = state_47349__$1;
(statearr_47371_47401[(2)] = inst_47343);

(statearr_47371_47401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (19))){
var inst_47330 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
var statearr_47372_47402 = state_47349__$1;
(statearr_47372_47402[(2)] = inst_47330);

(statearr_47372_47402[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (11))){
var inst_47301 = (state_47349[(12)]);
var inst_47315 = (state_47349[(7)]);
var inst_47315__$1 = cljs.core.seq.call(null,inst_47301);
var state_47349__$1 = (function (){var statearr_47373 = state_47349;
(statearr_47373[(7)] = inst_47315__$1);

return statearr_47373;
})();
if(inst_47315__$1){
var statearr_47374_47403 = state_47349__$1;
(statearr_47374_47403[(1)] = (14));

} else {
var statearr_47375_47404 = state_47349__$1;
(statearr_47375_47404[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (9))){
var inst_47337 = (state_47349[(2)]);
var inst_47338 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47349__$1 = (function (){var statearr_47376 = state_47349;
(statearr_47376[(15)] = inst_47337);

return statearr_47376;
})();
if(cljs.core.truth_(inst_47338)){
var statearr_47377_47405 = state_47349__$1;
(statearr_47377_47405[(1)] = (21));

} else {
var statearr_47378_47406 = state_47349__$1;
(statearr_47378_47406[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (5))){
var inst_47293 = cljs.core.async.close_BANG_.call(null,out);
var state_47349__$1 = state_47349;
var statearr_47379_47407 = state_47349__$1;
(statearr_47379_47407[(2)] = inst_47293);

(statearr_47379_47407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (14))){
var inst_47315 = (state_47349[(7)]);
var inst_47317 = cljs.core.chunked_seq_QMARK_.call(null,inst_47315);
var state_47349__$1 = state_47349;
if(inst_47317){
var statearr_47380_47408 = state_47349__$1;
(statearr_47380_47408[(1)] = (17));

} else {
var statearr_47381_47409 = state_47349__$1;
(statearr_47381_47409[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (16))){
var inst_47333 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
var statearr_47382_47410 = state_47349__$1;
(statearr_47382_47410[(2)] = inst_47333);

(statearr_47382_47410[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (10))){
var inst_47302 = (state_47349[(8)]);
var inst_47304 = (state_47349[(9)]);
var inst_47309 = cljs.core._nth.call(null,inst_47302,inst_47304);
var state_47349__$1 = state_47349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47349__$1,(13),out,inst_47309);
} else {
if((state_val_47350 === (18))){
var inst_47315 = (state_47349[(7)]);
var inst_47324 = cljs.core.first.call(null,inst_47315);
var state_47349__$1 = state_47349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47349__$1,(20),out,inst_47324);
} else {
if((state_val_47350 === (8))){
var inst_47304 = (state_47349[(9)]);
var inst_47303 = (state_47349[(10)]);
var inst_47306 = (inst_47304 < inst_47303);
var inst_47307 = inst_47306;
var state_47349__$1 = state_47349;
if(cljs.core.truth_(inst_47307)){
var statearr_47383_47411 = state_47349__$1;
(statearr_47383_47411[(1)] = (10));

} else {
var statearr_47384_47412 = state_47349__$1;
(statearr_47384_47412[(1)] = (11));

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
});})(c__45733__auto__))
;
return ((function (switch__45643__auto__,c__45733__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45644__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45644__auto____0 = (function (){
var statearr_47385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47385[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45644__auto__);

(statearr_47385[(1)] = (1));

return statearr_47385;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45644__auto____1 = (function (state_47349){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_47349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e47386){if((e47386 instanceof Object)){
var ex__45647__auto__ = e47386;
var statearr_47387_47413 = state_47349;
(statearr_47387_47413[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47414 = state_47349;
state_47349 = G__47414;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45644__auto__ = function(state_47349){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45644__auto____1.call(this,state_47349);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45644__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45644__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto__))
})();
var state__45735__auto__ = (function (){var statearr_47388 = f__45734__auto__.call(null);
(statearr_47388[(6)] = c__45733__auto__);

return statearr_47388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto__))
);

return c__45733__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47416 = arguments.length;
switch (G__47416) {
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
var G__47419 = arguments.length;
switch (G__47419) {
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
var G__47422 = arguments.length;
switch (G__47422) {
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
var c__45733__auto___47469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___47469,out){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___47469,out){
return (function (state_47446){
var state_val_47447 = (state_47446[(1)]);
if((state_val_47447 === (7))){
var inst_47441 = (state_47446[(2)]);
var state_47446__$1 = state_47446;
var statearr_47448_47470 = state_47446__$1;
(statearr_47448_47470[(2)] = inst_47441);

(statearr_47448_47470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (1))){
var inst_47423 = null;
var state_47446__$1 = (function (){var statearr_47449 = state_47446;
(statearr_47449[(7)] = inst_47423);

return statearr_47449;
})();
var statearr_47450_47471 = state_47446__$1;
(statearr_47450_47471[(2)] = null);

(statearr_47450_47471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (4))){
var inst_47426 = (state_47446[(8)]);
var inst_47426__$1 = (state_47446[(2)]);
var inst_47427 = (inst_47426__$1 == null);
var inst_47428 = cljs.core.not.call(null,inst_47427);
var state_47446__$1 = (function (){var statearr_47451 = state_47446;
(statearr_47451[(8)] = inst_47426__$1);

return statearr_47451;
})();
if(inst_47428){
var statearr_47452_47472 = state_47446__$1;
(statearr_47452_47472[(1)] = (5));

} else {
var statearr_47453_47473 = state_47446__$1;
(statearr_47453_47473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (6))){
var state_47446__$1 = state_47446;
var statearr_47454_47474 = state_47446__$1;
(statearr_47454_47474[(2)] = null);

(statearr_47454_47474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (3))){
var inst_47443 = (state_47446[(2)]);
var inst_47444 = cljs.core.async.close_BANG_.call(null,out);
var state_47446__$1 = (function (){var statearr_47455 = state_47446;
(statearr_47455[(9)] = inst_47443);

return statearr_47455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47446__$1,inst_47444);
} else {
if((state_val_47447 === (2))){
var state_47446__$1 = state_47446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47446__$1,(4),ch);
} else {
if((state_val_47447 === (11))){
var inst_47426 = (state_47446[(8)]);
var inst_47435 = (state_47446[(2)]);
var inst_47423 = inst_47426;
var state_47446__$1 = (function (){var statearr_47456 = state_47446;
(statearr_47456[(10)] = inst_47435);

(statearr_47456[(7)] = inst_47423);

return statearr_47456;
})();
var statearr_47457_47475 = state_47446__$1;
(statearr_47457_47475[(2)] = null);

(statearr_47457_47475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (9))){
var inst_47426 = (state_47446[(8)]);
var state_47446__$1 = state_47446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47446__$1,(11),out,inst_47426);
} else {
if((state_val_47447 === (5))){
var inst_47423 = (state_47446[(7)]);
var inst_47426 = (state_47446[(8)]);
var inst_47430 = cljs.core._EQ_.call(null,inst_47426,inst_47423);
var state_47446__$1 = state_47446;
if(inst_47430){
var statearr_47459_47476 = state_47446__$1;
(statearr_47459_47476[(1)] = (8));

} else {
var statearr_47460_47477 = state_47446__$1;
(statearr_47460_47477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (10))){
var inst_47438 = (state_47446[(2)]);
var state_47446__$1 = state_47446;
var statearr_47461_47478 = state_47446__$1;
(statearr_47461_47478[(2)] = inst_47438);

(statearr_47461_47478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (8))){
var inst_47423 = (state_47446[(7)]);
var tmp47458 = inst_47423;
var inst_47423__$1 = tmp47458;
var state_47446__$1 = (function (){var statearr_47462 = state_47446;
(statearr_47462[(7)] = inst_47423__$1);

return statearr_47462;
})();
var statearr_47463_47479 = state_47446__$1;
(statearr_47463_47479[(2)] = null);

(statearr_47463_47479[(1)] = (2));


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
});})(c__45733__auto___47469,out))
;
return ((function (switch__45643__auto__,c__45733__auto___47469,out){
return (function() {
var cljs$core$async$state_machine__45644__auto__ = null;
var cljs$core$async$state_machine__45644__auto____0 = (function (){
var statearr_47464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47464[(0)] = cljs$core$async$state_machine__45644__auto__);

(statearr_47464[(1)] = (1));

return statearr_47464;
});
var cljs$core$async$state_machine__45644__auto____1 = (function (state_47446){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_47446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e47465){if((e47465 instanceof Object)){
var ex__45647__auto__ = e47465;
var statearr_47466_47480 = state_47446;
(statearr_47466_47480[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47481 = state_47446;
state_47446 = G__47481;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$state_machine__45644__auto__ = function(state_47446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45644__auto____1.call(this,state_47446);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45644__auto____0;
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45644__auto____1;
return cljs$core$async$state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___47469,out))
})();
var state__45735__auto__ = (function (){var statearr_47467 = f__45734__auto__.call(null);
(statearr_47467[(6)] = c__45733__auto___47469);

return statearr_47467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___47469,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47483 = arguments.length;
switch (G__47483) {
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
var c__45733__auto___47549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___47549,out){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___47549,out){
return (function (state_47521){
var state_val_47522 = (state_47521[(1)]);
if((state_val_47522 === (7))){
var inst_47517 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
var statearr_47523_47550 = state_47521__$1;
(statearr_47523_47550[(2)] = inst_47517);

(statearr_47523_47550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (1))){
var inst_47484 = (new Array(n));
var inst_47485 = inst_47484;
var inst_47486 = (0);
var state_47521__$1 = (function (){var statearr_47524 = state_47521;
(statearr_47524[(7)] = inst_47485);

(statearr_47524[(8)] = inst_47486);

return statearr_47524;
})();
var statearr_47525_47551 = state_47521__$1;
(statearr_47525_47551[(2)] = null);

(statearr_47525_47551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (4))){
var inst_47489 = (state_47521[(9)]);
var inst_47489__$1 = (state_47521[(2)]);
var inst_47490 = (inst_47489__$1 == null);
var inst_47491 = cljs.core.not.call(null,inst_47490);
var state_47521__$1 = (function (){var statearr_47526 = state_47521;
(statearr_47526[(9)] = inst_47489__$1);

return statearr_47526;
})();
if(inst_47491){
var statearr_47527_47552 = state_47521__$1;
(statearr_47527_47552[(1)] = (5));

} else {
var statearr_47528_47553 = state_47521__$1;
(statearr_47528_47553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (15))){
var inst_47511 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
var statearr_47529_47554 = state_47521__$1;
(statearr_47529_47554[(2)] = inst_47511);

(statearr_47529_47554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (13))){
var state_47521__$1 = state_47521;
var statearr_47530_47555 = state_47521__$1;
(statearr_47530_47555[(2)] = null);

(statearr_47530_47555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (6))){
var inst_47486 = (state_47521[(8)]);
var inst_47507 = (inst_47486 > (0));
var state_47521__$1 = state_47521;
if(cljs.core.truth_(inst_47507)){
var statearr_47531_47556 = state_47521__$1;
(statearr_47531_47556[(1)] = (12));

} else {
var statearr_47532_47557 = state_47521__$1;
(statearr_47532_47557[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (3))){
var inst_47519 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47521__$1,inst_47519);
} else {
if((state_val_47522 === (12))){
var inst_47485 = (state_47521[(7)]);
var inst_47509 = cljs.core.vec.call(null,inst_47485);
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47521__$1,(15),out,inst_47509);
} else {
if((state_val_47522 === (2))){
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47521__$1,(4),ch);
} else {
if((state_val_47522 === (11))){
var inst_47501 = (state_47521[(2)]);
var inst_47502 = (new Array(n));
var inst_47485 = inst_47502;
var inst_47486 = (0);
var state_47521__$1 = (function (){var statearr_47533 = state_47521;
(statearr_47533[(7)] = inst_47485);

(statearr_47533[(8)] = inst_47486);

(statearr_47533[(10)] = inst_47501);

return statearr_47533;
})();
var statearr_47534_47558 = state_47521__$1;
(statearr_47534_47558[(2)] = null);

(statearr_47534_47558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (9))){
var inst_47485 = (state_47521[(7)]);
var inst_47499 = cljs.core.vec.call(null,inst_47485);
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47521__$1,(11),out,inst_47499);
} else {
if((state_val_47522 === (5))){
var inst_47489 = (state_47521[(9)]);
var inst_47485 = (state_47521[(7)]);
var inst_47486 = (state_47521[(8)]);
var inst_47494 = (state_47521[(11)]);
var inst_47493 = (inst_47485[inst_47486] = inst_47489);
var inst_47494__$1 = (inst_47486 + (1));
var inst_47495 = (inst_47494__$1 < n);
var state_47521__$1 = (function (){var statearr_47535 = state_47521;
(statearr_47535[(12)] = inst_47493);

(statearr_47535[(11)] = inst_47494__$1);

return statearr_47535;
})();
if(cljs.core.truth_(inst_47495)){
var statearr_47536_47559 = state_47521__$1;
(statearr_47536_47559[(1)] = (8));

} else {
var statearr_47537_47560 = state_47521__$1;
(statearr_47537_47560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (14))){
var inst_47514 = (state_47521[(2)]);
var inst_47515 = cljs.core.async.close_BANG_.call(null,out);
var state_47521__$1 = (function (){var statearr_47539 = state_47521;
(statearr_47539[(13)] = inst_47514);

return statearr_47539;
})();
var statearr_47540_47561 = state_47521__$1;
(statearr_47540_47561[(2)] = inst_47515);

(statearr_47540_47561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (10))){
var inst_47505 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
var statearr_47541_47562 = state_47521__$1;
(statearr_47541_47562[(2)] = inst_47505);

(statearr_47541_47562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (8))){
var inst_47485 = (state_47521[(7)]);
var inst_47494 = (state_47521[(11)]);
var tmp47538 = inst_47485;
var inst_47485__$1 = tmp47538;
var inst_47486 = inst_47494;
var state_47521__$1 = (function (){var statearr_47542 = state_47521;
(statearr_47542[(7)] = inst_47485__$1);

(statearr_47542[(8)] = inst_47486);

return statearr_47542;
})();
var statearr_47543_47563 = state_47521__$1;
(statearr_47543_47563[(2)] = null);

(statearr_47543_47563[(1)] = (2));


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
});})(c__45733__auto___47549,out))
;
return ((function (switch__45643__auto__,c__45733__auto___47549,out){
return (function() {
var cljs$core$async$state_machine__45644__auto__ = null;
var cljs$core$async$state_machine__45644__auto____0 = (function (){
var statearr_47544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47544[(0)] = cljs$core$async$state_machine__45644__auto__);

(statearr_47544[(1)] = (1));

return statearr_47544;
});
var cljs$core$async$state_machine__45644__auto____1 = (function (state_47521){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_47521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e47545){if((e47545 instanceof Object)){
var ex__45647__auto__ = e47545;
var statearr_47546_47564 = state_47521;
(statearr_47546_47564[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47565 = state_47521;
state_47521 = G__47565;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$state_machine__45644__auto__ = function(state_47521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45644__auto____1.call(this,state_47521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45644__auto____0;
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45644__auto____1;
return cljs$core$async$state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___47549,out))
})();
var state__45735__auto__ = (function (){var statearr_47547 = f__45734__auto__.call(null);
(statearr_47547[(6)] = c__45733__auto___47549);

return statearr_47547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___47549,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47567 = arguments.length;
switch (G__47567) {
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
var c__45733__auto___47637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___47637,out){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___47637,out){
return (function (state_47609){
var state_val_47610 = (state_47609[(1)]);
if((state_val_47610 === (7))){
var inst_47605 = (state_47609[(2)]);
var state_47609__$1 = state_47609;
var statearr_47611_47638 = state_47609__$1;
(statearr_47611_47638[(2)] = inst_47605);

(statearr_47611_47638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (1))){
var inst_47568 = [];
var inst_47569 = inst_47568;
var inst_47570 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47609__$1 = (function (){var statearr_47612 = state_47609;
(statearr_47612[(7)] = inst_47569);

(statearr_47612[(8)] = inst_47570);

return statearr_47612;
})();
var statearr_47613_47639 = state_47609__$1;
(statearr_47613_47639[(2)] = null);

(statearr_47613_47639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (4))){
var inst_47573 = (state_47609[(9)]);
var inst_47573__$1 = (state_47609[(2)]);
var inst_47574 = (inst_47573__$1 == null);
var inst_47575 = cljs.core.not.call(null,inst_47574);
var state_47609__$1 = (function (){var statearr_47614 = state_47609;
(statearr_47614[(9)] = inst_47573__$1);

return statearr_47614;
})();
if(inst_47575){
var statearr_47615_47640 = state_47609__$1;
(statearr_47615_47640[(1)] = (5));

} else {
var statearr_47616_47641 = state_47609__$1;
(statearr_47616_47641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (15))){
var inst_47599 = (state_47609[(2)]);
var state_47609__$1 = state_47609;
var statearr_47617_47642 = state_47609__$1;
(statearr_47617_47642[(2)] = inst_47599);

(statearr_47617_47642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (13))){
var state_47609__$1 = state_47609;
var statearr_47618_47643 = state_47609__$1;
(statearr_47618_47643[(2)] = null);

(statearr_47618_47643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (6))){
var inst_47569 = (state_47609[(7)]);
var inst_47594 = inst_47569.length;
var inst_47595 = (inst_47594 > (0));
var state_47609__$1 = state_47609;
if(cljs.core.truth_(inst_47595)){
var statearr_47619_47644 = state_47609__$1;
(statearr_47619_47644[(1)] = (12));

} else {
var statearr_47620_47645 = state_47609__$1;
(statearr_47620_47645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (3))){
var inst_47607 = (state_47609[(2)]);
var state_47609__$1 = state_47609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47609__$1,inst_47607);
} else {
if((state_val_47610 === (12))){
var inst_47569 = (state_47609[(7)]);
var inst_47597 = cljs.core.vec.call(null,inst_47569);
var state_47609__$1 = state_47609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47609__$1,(15),out,inst_47597);
} else {
if((state_val_47610 === (2))){
var state_47609__$1 = state_47609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47609__$1,(4),ch);
} else {
if((state_val_47610 === (11))){
var inst_47573 = (state_47609[(9)]);
var inst_47577 = (state_47609[(10)]);
var inst_47587 = (state_47609[(2)]);
var inst_47588 = [];
var inst_47589 = inst_47588.push(inst_47573);
var inst_47569 = inst_47588;
var inst_47570 = inst_47577;
var state_47609__$1 = (function (){var statearr_47621 = state_47609;
(statearr_47621[(11)] = inst_47589);

(statearr_47621[(7)] = inst_47569);

(statearr_47621[(12)] = inst_47587);

(statearr_47621[(8)] = inst_47570);

return statearr_47621;
})();
var statearr_47622_47646 = state_47609__$1;
(statearr_47622_47646[(2)] = null);

(statearr_47622_47646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (9))){
var inst_47569 = (state_47609[(7)]);
var inst_47585 = cljs.core.vec.call(null,inst_47569);
var state_47609__$1 = state_47609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47609__$1,(11),out,inst_47585);
} else {
if((state_val_47610 === (5))){
var inst_47573 = (state_47609[(9)]);
var inst_47570 = (state_47609[(8)]);
var inst_47577 = (state_47609[(10)]);
var inst_47577__$1 = f.call(null,inst_47573);
var inst_47578 = cljs.core._EQ_.call(null,inst_47577__$1,inst_47570);
var inst_47579 = cljs.core.keyword_identical_QMARK_.call(null,inst_47570,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47580 = (inst_47578) || (inst_47579);
var state_47609__$1 = (function (){var statearr_47623 = state_47609;
(statearr_47623[(10)] = inst_47577__$1);

return statearr_47623;
})();
if(cljs.core.truth_(inst_47580)){
var statearr_47624_47647 = state_47609__$1;
(statearr_47624_47647[(1)] = (8));

} else {
var statearr_47625_47648 = state_47609__$1;
(statearr_47625_47648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (14))){
var inst_47602 = (state_47609[(2)]);
var inst_47603 = cljs.core.async.close_BANG_.call(null,out);
var state_47609__$1 = (function (){var statearr_47627 = state_47609;
(statearr_47627[(13)] = inst_47602);

return statearr_47627;
})();
var statearr_47628_47649 = state_47609__$1;
(statearr_47628_47649[(2)] = inst_47603);

(statearr_47628_47649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (10))){
var inst_47592 = (state_47609[(2)]);
var state_47609__$1 = state_47609;
var statearr_47629_47650 = state_47609__$1;
(statearr_47629_47650[(2)] = inst_47592);

(statearr_47629_47650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (8))){
var inst_47569 = (state_47609[(7)]);
var inst_47573 = (state_47609[(9)]);
var inst_47577 = (state_47609[(10)]);
var inst_47582 = inst_47569.push(inst_47573);
var tmp47626 = inst_47569;
var inst_47569__$1 = tmp47626;
var inst_47570 = inst_47577;
var state_47609__$1 = (function (){var statearr_47630 = state_47609;
(statearr_47630[(14)] = inst_47582);

(statearr_47630[(7)] = inst_47569__$1);

(statearr_47630[(8)] = inst_47570);

return statearr_47630;
})();
var statearr_47631_47651 = state_47609__$1;
(statearr_47631_47651[(2)] = null);

(statearr_47631_47651[(1)] = (2));


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
});})(c__45733__auto___47637,out))
;
return ((function (switch__45643__auto__,c__45733__auto___47637,out){
return (function() {
var cljs$core$async$state_machine__45644__auto__ = null;
var cljs$core$async$state_machine__45644__auto____0 = (function (){
var statearr_47632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47632[(0)] = cljs$core$async$state_machine__45644__auto__);

(statearr_47632[(1)] = (1));

return statearr_47632;
});
var cljs$core$async$state_machine__45644__auto____1 = (function (state_47609){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_47609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e47633){if((e47633 instanceof Object)){
var ex__45647__auto__ = e47633;
var statearr_47634_47652 = state_47609;
(statearr_47634_47652[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47653 = state_47609;
state_47609 = G__47653;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
cljs$core$async$state_machine__45644__auto__ = function(state_47609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45644__auto____1.call(this,state_47609);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45644__auto____0;
cljs$core$async$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45644__auto____1;
return cljs$core$async$state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___47637,out))
})();
var state__45735__auto__ = (function (){var statearr_47635 = f__45734__auto__.call(null);
(statearr_47635[(6)] = c__45733__auto___47637);

return statearr_47635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___47637,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1509397948913
