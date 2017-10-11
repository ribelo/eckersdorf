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
var G__46890 = arguments.length;
switch (G__46890) {
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
if(typeof cljs.core.async.t_cljs$core$async46891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46891 = (function (f,blockable,meta46892){
this.f = f;
this.blockable = blockable;
this.meta46892 = meta46892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46893,meta46892__$1){
var self__ = this;
var _46893__$1 = this;
return (new cljs.core.async.t_cljs$core$async46891(self__.f,self__.blockable,meta46892__$1));
});

cljs.core.async.t_cljs$core$async46891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46893){
var self__ = this;
var _46893__$1 = this;
return self__.meta46892;
});

cljs.core.async.t_cljs$core$async46891.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46891.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46892","meta46892",-26308678,null)], null);
});

cljs.core.async.t_cljs$core$async46891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46891";

cljs.core.async.t_cljs$core$async46891.cljs$lang$ctorPrWriter = (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async46891");
});

cljs.core.async.__GT_t_cljs$core$async46891 = (function cljs$core$async$__GT_t_cljs$core$async46891(f__$1,blockable__$1,meta46892){
return (new cljs.core.async.t_cljs$core$async46891(f__$1,blockable__$1,meta46892));
});

}

return (new cljs.core.async.t_cljs$core$async46891(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46897 = arguments.length;
switch (G__46897) {
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
var G__46900 = arguments.length;
switch (G__46900) {
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
var G__46903 = arguments.length;
switch (G__46903) {
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
var val_46905 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46905);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46905,ret){
return (function (){
return fn1.call(null,val_46905);
});})(val_46905,ret))
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
var G__46907 = arguments.length;
switch (G__46907) {
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
var n__31282__auto___46909 = n;
var x_46910 = (0);
while(true){
if((x_46910 < n__31282__auto___46909)){
(a[x_46910] = (0));

var G__46911 = (x_46910 + (1));
x_46910 = G__46911;
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

var G__46912 = (i + (1));
i = G__46912;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46913 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46913 = (function (flag,meta46914){
this.flag = flag;
this.meta46914 = meta46914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46915,meta46914__$1){
var self__ = this;
var _46915__$1 = this;
return (new cljs.core.async.t_cljs$core$async46913(self__.flag,meta46914__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46915){
var self__ = this;
var _46915__$1 = this;
return self__.meta46914;
});})(flag))
;

cljs.core.async.t_cljs$core$async46913.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46913.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46913.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46914","meta46914",1203700201,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46913";

cljs.core.async.t_cljs$core$async46913.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async46913");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46913 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46913(flag__$1,meta46914){
return (new cljs.core.async.t_cljs$core$async46913(flag__$1,meta46914));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46913(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46916 = (function (flag,cb,meta46917){
this.flag = flag;
this.cb = cb;
this.meta46917 = meta46917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46918,meta46917__$1){
var self__ = this;
var _46918__$1 = this;
return (new cljs.core.async.t_cljs$core$async46916(self__.flag,self__.cb,meta46917__$1));
});

cljs.core.async.t_cljs$core$async46916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46918){
var self__ = this;
var _46918__$1 = this;
return self__.meta46917;
});

cljs.core.async.t_cljs$core$async46916.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46916.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46917","meta46917",-2047339536,null)], null);
});

cljs.core.async.t_cljs$core$async46916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46916";

cljs.core.async.t_cljs$core$async46916.cljs$lang$ctorPrWriter = (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async46916");
});

cljs.core.async.__GT_t_cljs$core$async46916 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46916(flag__$1,cb__$1,meta46917){
return (new cljs.core.async.t_cljs$core$async46916(flag__$1,cb__$1,meta46917));
});

}

return (new cljs.core.async.t_cljs$core$async46916(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46919_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46919_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46920_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46920_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30239__auto__ = wport;
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46921 = (i + (1));
i = G__46921;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30239__auto__ = ret;
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5290__auto__ = (function (){var and__30227__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30227__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30227__auto__;
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
var args__31523__auto__ = [];
var len__31516__auto___46927 = arguments.length;
var i__31517__auto___46928 = (0);
while(true){
if((i__31517__auto___46928 < len__31516__auto___46927)){
args__31523__auto__.push((arguments[i__31517__auto___46928]));

var G__46929 = (i__31517__auto___46928 + (1));
i__31517__auto___46928 = G__46929;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((1) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31524__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46924){
var map__46925 = p__46924;
var map__46925__$1 = ((((!((map__46925 == null)))?((((map__46925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46925):map__46925);
var opts = map__46925__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46922){
var G__46923 = cljs.core.first.call(null,seq46922);
var seq46922__$1 = cljs.core.next.call(null,seq46922);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46923,seq46922__$1);
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
var G__46931 = arguments.length;
switch (G__46931) {
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
var c__46830__auto___46977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___46977){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___46977){
return (function (state_46955){
var state_val_46956 = (state_46955[(1)]);
if((state_val_46956 === (7))){
var inst_46951 = (state_46955[(2)]);
var state_46955__$1 = state_46955;
var statearr_46957_46978 = state_46955__$1;
(statearr_46957_46978[(2)] = inst_46951);

(statearr_46957_46978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (1))){
var state_46955__$1 = state_46955;
var statearr_46958_46979 = state_46955__$1;
(statearr_46958_46979[(2)] = null);

(statearr_46958_46979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (4))){
var inst_46934 = (state_46955[(7)]);
var inst_46934__$1 = (state_46955[(2)]);
var inst_46935 = (inst_46934__$1 == null);
var state_46955__$1 = (function (){var statearr_46959 = state_46955;
(statearr_46959[(7)] = inst_46934__$1);

return statearr_46959;
})();
if(cljs.core.truth_(inst_46935)){
var statearr_46960_46980 = state_46955__$1;
(statearr_46960_46980[(1)] = (5));

} else {
var statearr_46961_46981 = state_46955__$1;
(statearr_46961_46981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (13))){
var state_46955__$1 = state_46955;
var statearr_46962_46982 = state_46955__$1;
(statearr_46962_46982[(2)] = null);

(statearr_46962_46982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (6))){
var inst_46934 = (state_46955[(7)]);
var state_46955__$1 = state_46955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46955__$1,(11),to,inst_46934);
} else {
if((state_val_46956 === (3))){
var inst_46953 = (state_46955[(2)]);
var state_46955__$1 = state_46955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46955__$1,inst_46953);
} else {
if((state_val_46956 === (12))){
var state_46955__$1 = state_46955;
var statearr_46963_46983 = state_46955__$1;
(statearr_46963_46983[(2)] = null);

(statearr_46963_46983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (2))){
var state_46955__$1 = state_46955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46955__$1,(4),from);
} else {
if((state_val_46956 === (11))){
var inst_46944 = (state_46955[(2)]);
var state_46955__$1 = state_46955;
if(cljs.core.truth_(inst_46944)){
var statearr_46964_46984 = state_46955__$1;
(statearr_46964_46984[(1)] = (12));

} else {
var statearr_46965_46985 = state_46955__$1;
(statearr_46965_46985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (9))){
var state_46955__$1 = state_46955;
var statearr_46966_46986 = state_46955__$1;
(statearr_46966_46986[(2)] = null);

(statearr_46966_46986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (5))){
var state_46955__$1 = state_46955;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46967_46987 = state_46955__$1;
(statearr_46967_46987[(1)] = (8));

} else {
var statearr_46968_46988 = state_46955__$1;
(statearr_46968_46988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (14))){
var inst_46949 = (state_46955[(2)]);
var state_46955__$1 = state_46955;
var statearr_46969_46989 = state_46955__$1;
(statearr_46969_46989[(2)] = inst_46949);

(statearr_46969_46989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (10))){
var inst_46941 = (state_46955[(2)]);
var state_46955__$1 = state_46955;
var statearr_46970_46990 = state_46955__$1;
(statearr_46970_46990[(2)] = inst_46941);

(statearr_46970_46990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (8))){
var inst_46938 = cljs.core.async.close_BANG_.call(null,to);
var state_46955__$1 = state_46955;
var statearr_46971_46991 = state_46955__$1;
(statearr_46971_46991[(2)] = inst_46938);

(statearr_46971_46991[(1)] = (10));


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
});})(c__46830__auto___46977))
;
return ((function (switch__46740__auto__,c__46830__auto___46977){
return (function() {
var cljs$core$async$state_machine__46741__auto__ = null;
var cljs$core$async$state_machine__46741__auto____0 = (function (){
var statearr_46972 = [null,null,null,null,null,null,null,null];
(statearr_46972[(0)] = cljs$core$async$state_machine__46741__auto__);

(statearr_46972[(1)] = (1));

return statearr_46972;
});
var cljs$core$async$state_machine__46741__auto____1 = (function (state_46955){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_46955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e46973){if((e46973 instanceof Object)){
var ex__46744__auto__ = e46973;
var statearr_46974_46992 = state_46955;
(statearr_46974_46992[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46993 = state_46955;
state_46955 = G__46993;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$state_machine__46741__auto__ = function(state_46955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46741__auto____1.call(this,state_46955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46741__auto____0;
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46741__auto____1;
return cljs$core$async$state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___46977))
})();
var state__46832__auto__ = (function (){var statearr_46975 = f__46831__auto__.call(null);
(statearr_46975[(6)] = c__46830__auto___46977);

return statearr_46975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___46977))
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
return (function (p__46994){
var vec__46995 = p__46994;
var v = cljs.core.nth.call(null,vec__46995,(0),null);
var p = cljs.core.nth.call(null,vec__46995,(1),null);
var job = vec__46995;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__46830__auto___47166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___47166,res,vec__46995,v,p,job,jobs,results){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___47166,res,vec__46995,v,p,job,jobs,results){
return (function (state_47002){
var state_val_47003 = (state_47002[(1)]);
if((state_val_47003 === (1))){
var state_47002__$1 = state_47002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47002__$1,(2),res,v);
} else {
if((state_val_47003 === (2))){
var inst_46999 = (state_47002[(2)]);
var inst_47000 = cljs.core.async.close_BANG_.call(null,res);
var state_47002__$1 = (function (){var statearr_47004 = state_47002;
(statearr_47004[(7)] = inst_46999);

return statearr_47004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47002__$1,inst_47000);
} else {
return null;
}
}
});})(c__46830__auto___47166,res,vec__46995,v,p,job,jobs,results))
;
return ((function (switch__46740__auto__,c__46830__auto___47166,res,vec__46995,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0 = (function (){
var statearr_47005 = [null,null,null,null,null,null,null,null];
(statearr_47005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__);

(statearr_47005[(1)] = (1));

return statearr_47005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1 = (function (state_47002){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_47002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e47006){if((e47006 instanceof Object)){
var ex__46744__auto__ = e47006;
var statearr_47007_47167 = state_47002;
(statearr_47007_47167[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47168 = state_47002;
state_47002 = G__47168;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__ = function(state_47002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1.call(this,state_47002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___47166,res,vec__46995,v,p,job,jobs,results))
})();
var state__46832__auto__ = (function (){var statearr_47008 = f__46831__auto__.call(null);
(statearr_47008[(6)] = c__46830__auto___47166);

return statearr_47008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___47166,res,vec__46995,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47009){
var vec__47010 = p__47009;
var v = cljs.core.nth.call(null,vec__47010,(0),null);
var p = cljs.core.nth.call(null,vec__47010,(1),null);
var job = vec__47010;
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
var n__31282__auto___47169 = n;
var __47170 = (0);
while(true){
if((__47170 < n__31282__auto___47169)){
var G__47013_47171 = type;
var G__47013_47172__$1 = (((G__47013_47171 instanceof cljs.core.Keyword))?G__47013_47171.fqn:null);
switch (G__47013_47172__$1) {
case "compute":
var c__46830__auto___47174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47170,c__46830__auto___47174,G__47013_47171,G__47013_47172__$1,n__31282__auto___47169,jobs,results,process,async){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (__47170,c__46830__auto___47174,G__47013_47171,G__47013_47172__$1,n__31282__auto___47169,jobs,results,process,async){
return (function (state_47026){
var state_val_47027 = (state_47026[(1)]);
if((state_val_47027 === (1))){
var state_47026__$1 = state_47026;
var statearr_47028_47175 = state_47026__$1;
(statearr_47028_47175[(2)] = null);

(statearr_47028_47175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47027 === (2))){
var state_47026__$1 = state_47026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47026__$1,(4),jobs);
} else {
if((state_val_47027 === (3))){
var inst_47024 = (state_47026[(2)]);
var state_47026__$1 = state_47026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47026__$1,inst_47024);
} else {
if((state_val_47027 === (4))){
var inst_47016 = (state_47026[(2)]);
var inst_47017 = process.call(null,inst_47016);
var state_47026__$1 = state_47026;
if(cljs.core.truth_(inst_47017)){
var statearr_47029_47176 = state_47026__$1;
(statearr_47029_47176[(1)] = (5));

} else {
var statearr_47030_47177 = state_47026__$1;
(statearr_47030_47177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47027 === (5))){
var state_47026__$1 = state_47026;
var statearr_47031_47178 = state_47026__$1;
(statearr_47031_47178[(2)] = null);

(statearr_47031_47178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47027 === (6))){
var state_47026__$1 = state_47026;
var statearr_47032_47179 = state_47026__$1;
(statearr_47032_47179[(2)] = null);

(statearr_47032_47179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47027 === (7))){
var inst_47022 = (state_47026[(2)]);
var state_47026__$1 = state_47026;
var statearr_47033_47180 = state_47026__$1;
(statearr_47033_47180[(2)] = inst_47022);

(statearr_47033_47180[(1)] = (3));


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
});})(__47170,c__46830__auto___47174,G__47013_47171,G__47013_47172__$1,n__31282__auto___47169,jobs,results,process,async))
;
return ((function (__47170,switch__46740__auto__,c__46830__auto___47174,G__47013_47171,G__47013_47172__$1,n__31282__auto___47169,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0 = (function (){
var statearr_47034 = [null,null,null,null,null,null,null];
(statearr_47034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__);

(statearr_47034[(1)] = (1));

return statearr_47034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1 = (function (state_47026){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_47026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e47035){if((e47035 instanceof Object)){
var ex__46744__auto__ = e47035;
var statearr_47036_47181 = state_47026;
(statearr_47036_47181[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47182 = state_47026;
state_47026 = G__47182;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__ = function(state_47026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1.call(this,state_47026);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__;
})()
;})(__47170,switch__46740__auto__,c__46830__auto___47174,G__47013_47171,G__47013_47172__$1,n__31282__auto___47169,jobs,results,process,async))
})();
var state__46832__auto__ = (function (){var statearr_47037 = f__46831__auto__.call(null);
(statearr_47037[(6)] = c__46830__auto___47174);

return statearr_47037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(__47170,c__46830__auto___47174,G__47013_47171,G__47013_47172__$1,n__31282__auto___47169,jobs,results,process,async))
);


break;
case "async":
var c__46830__auto___47183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47170,c__46830__auto___47183,G__47013_47171,G__47013_47172__$1,n__31282__auto___47169,jobs,results,process,async){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (__47170,c__46830__auto___47183,G__47013_47171,G__47013_47172__$1,n__31282__auto___47169,jobs,results,process,async){
return (function (state_47050){
var state_val_47051 = (state_47050[(1)]);
if((state_val_47051 === (1))){
var state_47050__$1 = state_47050;
var statearr_47052_47184 = state_47050__$1;
(statearr_47052_47184[(2)] = null);

(statearr_47052_47184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47051 === (2))){
var state_47050__$1 = state_47050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47050__$1,(4),jobs);
} else {
if((state_val_47051 === (3))){
var inst_47048 = (state_47050[(2)]);
var state_47050__$1 = state_47050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47050__$1,inst_47048);
} else {
if((state_val_47051 === (4))){
var inst_47040 = (state_47050[(2)]);
var inst_47041 = async.call(null,inst_47040);
var state_47050__$1 = state_47050;
if(cljs.core.truth_(inst_47041)){
var statearr_47053_47185 = state_47050__$1;
(statearr_47053_47185[(1)] = (5));

} else {
var statearr_47054_47186 = state_47050__$1;
(statearr_47054_47186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47051 === (5))){
var state_47050__$1 = state_47050;
var statearr_47055_47187 = state_47050__$1;
(statearr_47055_47187[(2)] = null);

(statearr_47055_47187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47051 === (6))){
var state_47050__$1 = state_47050;
var statearr_47056_47188 = state_47050__$1;
(statearr_47056_47188[(2)] = null);

(statearr_47056_47188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47051 === (7))){
var inst_47046 = (state_47050[(2)]);
var state_47050__$1 = state_47050;
var statearr_47057_47189 = state_47050__$1;
(statearr_47057_47189[(2)] = inst_47046);

(statearr_47057_47189[(1)] = (3));


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
});})(__47170,c__46830__auto___47183,G__47013_47171,G__47013_47172__$1,n__31282__auto___47169,jobs,results,process,async))
;
return ((function (__47170,switch__46740__auto__,c__46830__auto___47183,G__47013_47171,G__47013_47172__$1,n__31282__auto___47169,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0 = (function (){
var statearr_47058 = [null,null,null,null,null,null,null];
(statearr_47058[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__);

(statearr_47058[(1)] = (1));

return statearr_47058;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1 = (function (state_47050){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_47050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e47059){if((e47059 instanceof Object)){
var ex__46744__auto__ = e47059;
var statearr_47060_47190 = state_47050;
(statearr_47060_47190[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47191 = state_47050;
state_47050 = G__47191;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__ = function(state_47050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1.call(this,state_47050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__;
})()
;})(__47170,switch__46740__auto__,c__46830__auto___47183,G__47013_47171,G__47013_47172__$1,n__31282__auto___47169,jobs,results,process,async))
})();
var state__46832__auto__ = (function (){var statearr_47061 = f__46831__auto__.call(null);
(statearr_47061[(6)] = c__46830__auto___47183);

return statearr_47061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(__47170,c__46830__auto___47183,G__47013_47171,G__47013_47172__$1,n__31282__auto___47169,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47013_47172__$1)].join('')));

}

var G__47192 = (__47170 + (1));
__47170 = G__47192;
continue;
} else {
}
break;
}

var c__46830__auto___47193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___47193,jobs,results,process,async){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___47193,jobs,results,process,async){
return (function (state_47083){
var state_val_47084 = (state_47083[(1)]);
if((state_val_47084 === (1))){
var state_47083__$1 = state_47083;
var statearr_47085_47194 = state_47083__$1;
(statearr_47085_47194[(2)] = null);

(statearr_47085_47194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (2))){
var state_47083__$1 = state_47083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47083__$1,(4),from);
} else {
if((state_val_47084 === (3))){
var inst_47081 = (state_47083[(2)]);
var state_47083__$1 = state_47083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47083__$1,inst_47081);
} else {
if((state_val_47084 === (4))){
var inst_47064 = (state_47083[(7)]);
var inst_47064__$1 = (state_47083[(2)]);
var inst_47065 = (inst_47064__$1 == null);
var state_47083__$1 = (function (){var statearr_47086 = state_47083;
(statearr_47086[(7)] = inst_47064__$1);

return statearr_47086;
})();
if(cljs.core.truth_(inst_47065)){
var statearr_47087_47195 = state_47083__$1;
(statearr_47087_47195[(1)] = (5));

} else {
var statearr_47088_47196 = state_47083__$1;
(statearr_47088_47196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (5))){
var inst_47067 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47083__$1 = state_47083;
var statearr_47089_47197 = state_47083__$1;
(statearr_47089_47197[(2)] = inst_47067);

(statearr_47089_47197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (6))){
var inst_47064 = (state_47083[(7)]);
var inst_47069 = (state_47083[(8)]);
var inst_47069__$1 = cljs.core.async.chan.call(null,(1));
var inst_47070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47071 = [inst_47064,inst_47069__$1];
var inst_47072 = (new cljs.core.PersistentVector(null,2,(5),inst_47070,inst_47071,null));
var state_47083__$1 = (function (){var statearr_47090 = state_47083;
(statearr_47090[(8)] = inst_47069__$1);

return statearr_47090;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47083__$1,(8),jobs,inst_47072);
} else {
if((state_val_47084 === (7))){
var inst_47079 = (state_47083[(2)]);
var state_47083__$1 = state_47083;
var statearr_47091_47198 = state_47083__$1;
(statearr_47091_47198[(2)] = inst_47079);

(statearr_47091_47198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (8))){
var inst_47069 = (state_47083[(8)]);
var inst_47074 = (state_47083[(2)]);
var state_47083__$1 = (function (){var statearr_47092 = state_47083;
(statearr_47092[(9)] = inst_47074);

return statearr_47092;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47083__$1,(9),results,inst_47069);
} else {
if((state_val_47084 === (9))){
var inst_47076 = (state_47083[(2)]);
var state_47083__$1 = (function (){var statearr_47093 = state_47083;
(statearr_47093[(10)] = inst_47076);

return statearr_47093;
})();
var statearr_47094_47199 = state_47083__$1;
(statearr_47094_47199[(2)] = null);

(statearr_47094_47199[(1)] = (2));


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
});})(c__46830__auto___47193,jobs,results,process,async))
;
return ((function (switch__46740__auto__,c__46830__auto___47193,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0 = (function (){
var statearr_47095 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47095[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__);

(statearr_47095[(1)] = (1));

return statearr_47095;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1 = (function (state_47083){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_47083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e47096){if((e47096 instanceof Object)){
var ex__46744__auto__ = e47096;
var statearr_47097_47200 = state_47083;
(statearr_47097_47200[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47201 = state_47083;
state_47083 = G__47201;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__ = function(state_47083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1.call(this,state_47083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___47193,jobs,results,process,async))
})();
var state__46832__auto__ = (function (){var statearr_47098 = f__46831__auto__.call(null);
(statearr_47098[(6)] = c__46830__auto___47193);

return statearr_47098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___47193,jobs,results,process,async))
);


var c__46830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto__,jobs,results,process,async){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto__,jobs,results,process,async){
return (function (state_47136){
var state_val_47137 = (state_47136[(1)]);
if((state_val_47137 === (7))){
var inst_47132 = (state_47136[(2)]);
var state_47136__$1 = state_47136;
var statearr_47138_47202 = state_47136__$1;
(statearr_47138_47202[(2)] = inst_47132);

(statearr_47138_47202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (20))){
var state_47136__$1 = state_47136;
var statearr_47139_47203 = state_47136__$1;
(statearr_47139_47203[(2)] = null);

(statearr_47139_47203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (1))){
var state_47136__$1 = state_47136;
var statearr_47140_47204 = state_47136__$1;
(statearr_47140_47204[(2)] = null);

(statearr_47140_47204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (4))){
var inst_47101 = (state_47136[(7)]);
var inst_47101__$1 = (state_47136[(2)]);
var inst_47102 = (inst_47101__$1 == null);
var state_47136__$1 = (function (){var statearr_47141 = state_47136;
(statearr_47141[(7)] = inst_47101__$1);

return statearr_47141;
})();
if(cljs.core.truth_(inst_47102)){
var statearr_47142_47205 = state_47136__$1;
(statearr_47142_47205[(1)] = (5));

} else {
var statearr_47143_47206 = state_47136__$1;
(statearr_47143_47206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (15))){
var inst_47114 = (state_47136[(8)]);
var state_47136__$1 = state_47136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47136__$1,(18),to,inst_47114);
} else {
if((state_val_47137 === (21))){
var inst_47127 = (state_47136[(2)]);
var state_47136__$1 = state_47136;
var statearr_47144_47207 = state_47136__$1;
(statearr_47144_47207[(2)] = inst_47127);

(statearr_47144_47207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (13))){
var inst_47129 = (state_47136[(2)]);
var state_47136__$1 = (function (){var statearr_47145 = state_47136;
(statearr_47145[(9)] = inst_47129);

return statearr_47145;
})();
var statearr_47146_47208 = state_47136__$1;
(statearr_47146_47208[(2)] = null);

(statearr_47146_47208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (6))){
var inst_47101 = (state_47136[(7)]);
var state_47136__$1 = state_47136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47136__$1,(11),inst_47101);
} else {
if((state_val_47137 === (17))){
var inst_47122 = (state_47136[(2)]);
var state_47136__$1 = state_47136;
if(cljs.core.truth_(inst_47122)){
var statearr_47147_47209 = state_47136__$1;
(statearr_47147_47209[(1)] = (19));

} else {
var statearr_47148_47210 = state_47136__$1;
(statearr_47148_47210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (3))){
var inst_47134 = (state_47136[(2)]);
var state_47136__$1 = state_47136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47136__$1,inst_47134);
} else {
if((state_val_47137 === (12))){
var inst_47111 = (state_47136[(10)]);
var state_47136__$1 = state_47136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47136__$1,(14),inst_47111);
} else {
if((state_val_47137 === (2))){
var state_47136__$1 = state_47136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47136__$1,(4),results);
} else {
if((state_val_47137 === (19))){
var state_47136__$1 = state_47136;
var statearr_47149_47211 = state_47136__$1;
(statearr_47149_47211[(2)] = null);

(statearr_47149_47211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (11))){
var inst_47111 = (state_47136[(2)]);
var state_47136__$1 = (function (){var statearr_47150 = state_47136;
(statearr_47150[(10)] = inst_47111);

return statearr_47150;
})();
var statearr_47151_47212 = state_47136__$1;
(statearr_47151_47212[(2)] = null);

(statearr_47151_47212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (9))){
var state_47136__$1 = state_47136;
var statearr_47152_47213 = state_47136__$1;
(statearr_47152_47213[(2)] = null);

(statearr_47152_47213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (5))){
var state_47136__$1 = state_47136;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47153_47214 = state_47136__$1;
(statearr_47153_47214[(1)] = (8));

} else {
var statearr_47154_47215 = state_47136__$1;
(statearr_47154_47215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (14))){
var inst_47114 = (state_47136[(8)]);
var inst_47116 = (state_47136[(11)]);
var inst_47114__$1 = (state_47136[(2)]);
var inst_47115 = (inst_47114__$1 == null);
var inst_47116__$1 = cljs.core.not.call(null,inst_47115);
var state_47136__$1 = (function (){var statearr_47155 = state_47136;
(statearr_47155[(8)] = inst_47114__$1);

(statearr_47155[(11)] = inst_47116__$1);

return statearr_47155;
})();
if(inst_47116__$1){
var statearr_47156_47216 = state_47136__$1;
(statearr_47156_47216[(1)] = (15));

} else {
var statearr_47157_47217 = state_47136__$1;
(statearr_47157_47217[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (16))){
var inst_47116 = (state_47136[(11)]);
var state_47136__$1 = state_47136;
var statearr_47158_47218 = state_47136__$1;
(statearr_47158_47218[(2)] = inst_47116);

(statearr_47158_47218[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (10))){
var inst_47108 = (state_47136[(2)]);
var state_47136__$1 = state_47136;
var statearr_47159_47219 = state_47136__$1;
(statearr_47159_47219[(2)] = inst_47108);

(statearr_47159_47219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (18))){
var inst_47119 = (state_47136[(2)]);
var state_47136__$1 = state_47136;
var statearr_47160_47220 = state_47136__$1;
(statearr_47160_47220[(2)] = inst_47119);

(statearr_47160_47220[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (8))){
var inst_47105 = cljs.core.async.close_BANG_.call(null,to);
var state_47136__$1 = state_47136;
var statearr_47161_47221 = state_47136__$1;
(statearr_47161_47221[(2)] = inst_47105);

(statearr_47161_47221[(1)] = (10));


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
});})(c__46830__auto__,jobs,results,process,async))
;
return ((function (switch__46740__auto__,c__46830__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0 = (function (){
var statearr_47162 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47162[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__);

(statearr_47162[(1)] = (1));

return statearr_47162;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1 = (function (state_47136){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_47136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e47163){if((e47163 instanceof Object)){
var ex__46744__auto__ = e47163;
var statearr_47164_47222 = state_47136;
(statearr_47164_47222[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47223 = state_47136;
state_47136 = G__47223;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__ = function(state_47136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1.call(this,state_47136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto__,jobs,results,process,async))
})();
var state__46832__auto__ = (function (){var statearr_47165 = f__46831__auto__.call(null);
(statearr_47165[(6)] = c__46830__auto__);

return statearr_47165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto__,jobs,results,process,async))
);

return c__46830__auto__;
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
var G__47225 = arguments.length;
switch (G__47225) {
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
var G__47228 = arguments.length;
switch (G__47228) {
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
var G__47231 = arguments.length;
switch (G__47231) {
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
var c__46830__auto___47280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___47280,tc,fc){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___47280,tc,fc){
return (function (state_47257){
var state_val_47258 = (state_47257[(1)]);
if((state_val_47258 === (7))){
var inst_47253 = (state_47257[(2)]);
var state_47257__$1 = state_47257;
var statearr_47259_47281 = state_47257__$1;
(statearr_47259_47281[(2)] = inst_47253);

(statearr_47259_47281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (1))){
var state_47257__$1 = state_47257;
var statearr_47260_47282 = state_47257__$1;
(statearr_47260_47282[(2)] = null);

(statearr_47260_47282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (4))){
var inst_47234 = (state_47257[(7)]);
var inst_47234__$1 = (state_47257[(2)]);
var inst_47235 = (inst_47234__$1 == null);
var state_47257__$1 = (function (){var statearr_47261 = state_47257;
(statearr_47261[(7)] = inst_47234__$1);

return statearr_47261;
})();
if(cljs.core.truth_(inst_47235)){
var statearr_47262_47283 = state_47257__$1;
(statearr_47262_47283[(1)] = (5));

} else {
var statearr_47263_47284 = state_47257__$1;
(statearr_47263_47284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (13))){
var state_47257__$1 = state_47257;
var statearr_47264_47285 = state_47257__$1;
(statearr_47264_47285[(2)] = null);

(statearr_47264_47285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (6))){
var inst_47234 = (state_47257[(7)]);
var inst_47240 = p.call(null,inst_47234);
var state_47257__$1 = state_47257;
if(cljs.core.truth_(inst_47240)){
var statearr_47265_47286 = state_47257__$1;
(statearr_47265_47286[(1)] = (9));

} else {
var statearr_47266_47287 = state_47257__$1;
(statearr_47266_47287[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (3))){
var inst_47255 = (state_47257[(2)]);
var state_47257__$1 = state_47257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47257__$1,inst_47255);
} else {
if((state_val_47258 === (12))){
var state_47257__$1 = state_47257;
var statearr_47267_47288 = state_47257__$1;
(statearr_47267_47288[(2)] = null);

(statearr_47267_47288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (2))){
var state_47257__$1 = state_47257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47257__$1,(4),ch);
} else {
if((state_val_47258 === (11))){
var inst_47234 = (state_47257[(7)]);
var inst_47244 = (state_47257[(2)]);
var state_47257__$1 = state_47257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47257__$1,(8),inst_47244,inst_47234);
} else {
if((state_val_47258 === (9))){
var state_47257__$1 = state_47257;
var statearr_47268_47289 = state_47257__$1;
(statearr_47268_47289[(2)] = tc);

(statearr_47268_47289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (5))){
var inst_47237 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47238 = cljs.core.async.close_BANG_.call(null,fc);
var state_47257__$1 = (function (){var statearr_47269 = state_47257;
(statearr_47269[(8)] = inst_47237);

return statearr_47269;
})();
var statearr_47270_47290 = state_47257__$1;
(statearr_47270_47290[(2)] = inst_47238);

(statearr_47270_47290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (14))){
var inst_47251 = (state_47257[(2)]);
var state_47257__$1 = state_47257;
var statearr_47271_47291 = state_47257__$1;
(statearr_47271_47291[(2)] = inst_47251);

(statearr_47271_47291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (10))){
var state_47257__$1 = state_47257;
var statearr_47272_47292 = state_47257__$1;
(statearr_47272_47292[(2)] = fc);

(statearr_47272_47292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47258 === (8))){
var inst_47246 = (state_47257[(2)]);
var state_47257__$1 = state_47257;
if(cljs.core.truth_(inst_47246)){
var statearr_47273_47293 = state_47257__$1;
(statearr_47273_47293[(1)] = (12));

} else {
var statearr_47274_47294 = state_47257__$1;
(statearr_47274_47294[(1)] = (13));

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
});})(c__46830__auto___47280,tc,fc))
;
return ((function (switch__46740__auto__,c__46830__auto___47280,tc,fc){
return (function() {
var cljs$core$async$state_machine__46741__auto__ = null;
var cljs$core$async$state_machine__46741__auto____0 = (function (){
var statearr_47275 = [null,null,null,null,null,null,null,null,null];
(statearr_47275[(0)] = cljs$core$async$state_machine__46741__auto__);

(statearr_47275[(1)] = (1));

return statearr_47275;
});
var cljs$core$async$state_machine__46741__auto____1 = (function (state_47257){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_47257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e47276){if((e47276 instanceof Object)){
var ex__46744__auto__ = e47276;
var statearr_47277_47295 = state_47257;
(statearr_47277_47295[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47296 = state_47257;
state_47257 = G__47296;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$state_machine__46741__auto__ = function(state_47257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46741__auto____1.call(this,state_47257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46741__auto____0;
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46741__auto____1;
return cljs$core$async$state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___47280,tc,fc))
})();
var state__46832__auto__ = (function (){var statearr_47278 = f__46831__auto__.call(null);
(statearr_47278[(6)] = c__46830__auto___47280);

return statearr_47278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___47280,tc,fc))
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
var c__46830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto__){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto__){
return (function (state_47317){
var state_val_47318 = (state_47317[(1)]);
if((state_val_47318 === (7))){
var inst_47313 = (state_47317[(2)]);
var state_47317__$1 = state_47317;
var statearr_47319_47337 = state_47317__$1;
(statearr_47319_47337[(2)] = inst_47313);

(statearr_47319_47337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47318 === (1))){
var inst_47297 = init;
var state_47317__$1 = (function (){var statearr_47320 = state_47317;
(statearr_47320[(7)] = inst_47297);

return statearr_47320;
})();
var statearr_47321_47338 = state_47317__$1;
(statearr_47321_47338[(2)] = null);

(statearr_47321_47338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47318 === (4))){
var inst_47300 = (state_47317[(8)]);
var inst_47300__$1 = (state_47317[(2)]);
var inst_47301 = (inst_47300__$1 == null);
var state_47317__$1 = (function (){var statearr_47322 = state_47317;
(statearr_47322[(8)] = inst_47300__$1);

return statearr_47322;
})();
if(cljs.core.truth_(inst_47301)){
var statearr_47323_47339 = state_47317__$1;
(statearr_47323_47339[(1)] = (5));

} else {
var statearr_47324_47340 = state_47317__$1;
(statearr_47324_47340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47318 === (6))){
var inst_47297 = (state_47317[(7)]);
var inst_47304 = (state_47317[(9)]);
var inst_47300 = (state_47317[(8)]);
var inst_47304__$1 = f.call(null,inst_47297,inst_47300);
var inst_47305 = cljs.core.reduced_QMARK_.call(null,inst_47304__$1);
var state_47317__$1 = (function (){var statearr_47325 = state_47317;
(statearr_47325[(9)] = inst_47304__$1);

return statearr_47325;
})();
if(inst_47305){
var statearr_47326_47341 = state_47317__$1;
(statearr_47326_47341[(1)] = (8));

} else {
var statearr_47327_47342 = state_47317__$1;
(statearr_47327_47342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47318 === (3))){
var inst_47315 = (state_47317[(2)]);
var state_47317__$1 = state_47317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47317__$1,inst_47315);
} else {
if((state_val_47318 === (2))){
var state_47317__$1 = state_47317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47317__$1,(4),ch);
} else {
if((state_val_47318 === (9))){
var inst_47304 = (state_47317[(9)]);
var inst_47297 = inst_47304;
var state_47317__$1 = (function (){var statearr_47328 = state_47317;
(statearr_47328[(7)] = inst_47297);

return statearr_47328;
})();
var statearr_47329_47343 = state_47317__$1;
(statearr_47329_47343[(2)] = null);

(statearr_47329_47343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47318 === (5))){
var inst_47297 = (state_47317[(7)]);
var state_47317__$1 = state_47317;
var statearr_47330_47344 = state_47317__$1;
(statearr_47330_47344[(2)] = inst_47297);

(statearr_47330_47344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47318 === (10))){
var inst_47311 = (state_47317[(2)]);
var state_47317__$1 = state_47317;
var statearr_47331_47345 = state_47317__$1;
(statearr_47331_47345[(2)] = inst_47311);

(statearr_47331_47345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47318 === (8))){
var inst_47304 = (state_47317[(9)]);
var inst_47307 = cljs.core.deref.call(null,inst_47304);
var state_47317__$1 = state_47317;
var statearr_47332_47346 = state_47317__$1;
(statearr_47332_47346[(2)] = inst_47307);

(statearr_47332_47346[(1)] = (10));


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
});})(c__46830__auto__))
;
return ((function (switch__46740__auto__,c__46830__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46741__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46741__auto____0 = (function (){
var statearr_47333 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47333[(0)] = cljs$core$async$reduce_$_state_machine__46741__auto__);

(statearr_47333[(1)] = (1));

return statearr_47333;
});
var cljs$core$async$reduce_$_state_machine__46741__auto____1 = (function (state_47317){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_47317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e47334){if((e47334 instanceof Object)){
var ex__46744__auto__ = e47334;
var statearr_47335_47347 = state_47317;
(statearr_47335_47347[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47348 = state_47317;
state_47317 = G__47348;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46741__auto__ = function(state_47317){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46741__auto____1.call(this,state_47317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46741__auto____0;
cljs$core$async$reduce_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46741__auto____1;
return cljs$core$async$reduce_$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto__))
})();
var state__46832__auto__ = (function (){var statearr_47336 = f__46831__auto__.call(null);
(statearr_47336[(6)] = c__46830__auto__);

return statearr_47336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto__))
);

return c__46830__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__46830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto__,f__$1){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto__,f__$1){
return (function (state_47354){
var state_val_47355 = (state_47354[(1)]);
if((state_val_47355 === (1))){
var inst_47349 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47354__$1 = state_47354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47354__$1,(2),inst_47349);
} else {
if((state_val_47355 === (2))){
var inst_47351 = (state_47354[(2)]);
var inst_47352 = f__$1.call(null,inst_47351);
var state_47354__$1 = state_47354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47354__$1,inst_47352);
} else {
return null;
}
}
});})(c__46830__auto__,f__$1))
;
return ((function (switch__46740__auto__,c__46830__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__46741__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46741__auto____0 = (function (){
var statearr_47356 = [null,null,null,null,null,null,null];
(statearr_47356[(0)] = cljs$core$async$transduce_$_state_machine__46741__auto__);

(statearr_47356[(1)] = (1));

return statearr_47356;
});
var cljs$core$async$transduce_$_state_machine__46741__auto____1 = (function (state_47354){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_47354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e47357){if((e47357 instanceof Object)){
var ex__46744__auto__ = e47357;
var statearr_47358_47360 = state_47354;
(statearr_47358_47360[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47361 = state_47354;
state_47354 = G__47361;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46741__auto__ = function(state_47354){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46741__auto____1.call(this,state_47354);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46741__auto____0;
cljs$core$async$transduce_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46741__auto____1;
return cljs$core$async$transduce_$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto__,f__$1))
})();
var state__46832__auto__ = (function (){var statearr_47359 = f__46831__auto__.call(null);
(statearr_47359[(6)] = c__46830__auto__);

return statearr_47359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto__,f__$1))
);

return c__46830__auto__;
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
var G__47363 = arguments.length;
switch (G__47363) {
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
var c__46830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto__){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto__){
return (function (state_47388){
var state_val_47389 = (state_47388[(1)]);
if((state_val_47389 === (7))){
var inst_47370 = (state_47388[(2)]);
var state_47388__$1 = state_47388;
var statearr_47390_47411 = state_47388__$1;
(statearr_47390_47411[(2)] = inst_47370);

(statearr_47390_47411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (1))){
var inst_47364 = cljs.core.seq.call(null,coll);
var inst_47365 = inst_47364;
var state_47388__$1 = (function (){var statearr_47391 = state_47388;
(statearr_47391[(7)] = inst_47365);

return statearr_47391;
})();
var statearr_47392_47412 = state_47388__$1;
(statearr_47392_47412[(2)] = null);

(statearr_47392_47412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (4))){
var inst_47365 = (state_47388[(7)]);
var inst_47368 = cljs.core.first.call(null,inst_47365);
var state_47388__$1 = state_47388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47388__$1,(7),ch,inst_47368);
} else {
if((state_val_47389 === (13))){
var inst_47382 = (state_47388[(2)]);
var state_47388__$1 = state_47388;
var statearr_47393_47413 = state_47388__$1;
(statearr_47393_47413[(2)] = inst_47382);

(statearr_47393_47413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (6))){
var inst_47373 = (state_47388[(2)]);
var state_47388__$1 = state_47388;
if(cljs.core.truth_(inst_47373)){
var statearr_47394_47414 = state_47388__$1;
(statearr_47394_47414[(1)] = (8));

} else {
var statearr_47395_47415 = state_47388__$1;
(statearr_47395_47415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (3))){
var inst_47386 = (state_47388[(2)]);
var state_47388__$1 = state_47388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47388__$1,inst_47386);
} else {
if((state_val_47389 === (12))){
var state_47388__$1 = state_47388;
var statearr_47396_47416 = state_47388__$1;
(statearr_47396_47416[(2)] = null);

(statearr_47396_47416[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (2))){
var inst_47365 = (state_47388[(7)]);
var state_47388__$1 = state_47388;
if(cljs.core.truth_(inst_47365)){
var statearr_47397_47417 = state_47388__$1;
(statearr_47397_47417[(1)] = (4));

} else {
var statearr_47398_47418 = state_47388__$1;
(statearr_47398_47418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (11))){
var inst_47379 = cljs.core.async.close_BANG_.call(null,ch);
var state_47388__$1 = state_47388;
var statearr_47399_47419 = state_47388__$1;
(statearr_47399_47419[(2)] = inst_47379);

(statearr_47399_47419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (9))){
var state_47388__$1 = state_47388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47400_47420 = state_47388__$1;
(statearr_47400_47420[(1)] = (11));

} else {
var statearr_47401_47421 = state_47388__$1;
(statearr_47401_47421[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (5))){
var inst_47365 = (state_47388[(7)]);
var state_47388__$1 = state_47388;
var statearr_47402_47422 = state_47388__$1;
(statearr_47402_47422[(2)] = inst_47365);

(statearr_47402_47422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (10))){
var inst_47384 = (state_47388[(2)]);
var state_47388__$1 = state_47388;
var statearr_47403_47423 = state_47388__$1;
(statearr_47403_47423[(2)] = inst_47384);

(statearr_47403_47423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (8))){
var inst_47365 = (state_47388[(7)]);
var inst_47375 = cljs.core.next.call(null,inst_47365);
var inst_47365__$1 = inst_47375;
var state_47388__$1 = (function (){var statearr_47404 = state_47388;
(statearr_47404[(7)] = inst_47365__$1);

return statearr_47404;
})();
var statearr_47405_47424 = state_47388__$1;
(statearr_47405_47424[(2)] = null);

(statearr_47405_47424[(1)] = (2));


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
});})(c__46830__auto__))
;
return ((function (switch__46740__auto__,c__46830__auto__){
return (function() {
var cljs$core$async$state_machine__46741__auto__ = null;
var cljs$core$async$state_machine__46741__auto____0 = (function (){
var statearr_47406 = [null,null,null,null,null,null,null,null];
(statearr_47406[(0)] = cljs$core$async$state_machine__46741__auto__);

(statearr_47406[(1)] = (1));

return statearr_47406;
});
var cljs$core$async$state_machine__46741__auto____1 = (function (state_47388){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_47388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e47407){if((e47407 instanceof Object)){
var ex__46744__auto__ = e47407;
var statearr_47408_47425 = state_47388;
(statearr_47408_47425[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47426 = state_47388;
state_47388 = G__47426;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$state_machine__46741__auto__ = function(state_47388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46741__auto____1.call(this,state_47388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46741__auto____0;
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46741__auto____1;
return cljs$core$async$state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto__))
})();
var state__46832__auto__ = (function (){var statearr_47409 = f__46831__auto__.call(null);
(statearr_47409[(6)] = c__46830__auto__);

return statearr_47409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto__))
);

return c__46830__auto__;
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
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_);
} else {
var m__30973__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_);
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
var x__30972__auto__ = (((m == null))?null:m);
var m__30973__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30973__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__30972__auto__ = (((m == null))?null:m);
var m__30973__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,m,ch);
} else {
var m__30973__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,m,ch);
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
var x__30972__auto__ = (((m == null))?null:m);
var m__30973__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,m);
} else {
var m__30973__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async47427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47427 = (function (ch,cs,meta47428){
this.ch = ch;
this.cs = cs;
this.meta47428 = meta47428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47429,meta47428__$1){
var self__ = this;
var _47429__$1 = this;
return (new cljs.core.async.t_cljs$core$async47427(self__.ch,self__.cs,meta47428__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47429){
var self__ = this;
var _47429__$1 = this;
return self__.meta47428;
});})(cs))
;

cljs.core.async.t_cljs$core$async47427.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47427.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47427.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47427.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47427.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47427.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47427.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47428","meta47428",-2121277359,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47427";

cljs.core.async.t_cljs$core$async47427.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async47427");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47427 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47427(ch__$1,cs__$1,meta47428){
return (new cljs.core.async.t_cljs$core$async47427(ch__$1,cs__$1,meta47428));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47427(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46830__auto___47649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___47649,cs,m,dchan,dctr,done){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___47649,cs,m,dchan,dctr,done){
return (function (state_47564){
var state_val_47565 = (state_47564[(1)]);
if((state_val_47565 === (7))){
var inst_47560 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47566_47650 = state_47564__$1;
(statearr_47566_47650[(2)] = inst_47560);

(statearr_47566_47650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (20))){
var inst_47463 = (state_47564[(7)]);
var inst_47475 = cljs.core.first.call(null,inst_47463);
var inst_47476 = cljs.core.nth.call(null,inst_47475,(0),null);
var inst_47477 = cljs.core.nth.call(null,inst_47475,(1),null);
var state_47564__$1 = (function (){var statearr_47567 = state_47564;
(statearr_47567[(8)] = inst_47476);

return statearr_47567;
})();
if(cljs.core.truth_(inst_47477)){
var statearr_47568_47651 = state_47564__$1;
(statearr_47568_47651[(1)] = (22));

} else {
var statearr_47569_47652 = state_47564__$1;
(statearr_47569_47652[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (27))){
var inst_47512 = (state_47564[(9)]);
var inst_47432 = (state_47564[(10)]);
var inst_47507 = (state_47564[(11)]);
var inst_47505 = (state_47564[(12)]);
var inst_47512__$1 = cljs.core._nth.call(null,inst_47505,inst_47507);
var inst_47513 = cljs.core.async.put_BANG_.call(null,inst_47512__$1,inst_47432,done);
var state_47564__$1 = (function (){var statearr_47570 = state_47564;
(statearr_47570[(9)] = inst_47512__$1);

return statearr_47570;
})();
if(cljs.core.truth_(inst_47513)){
var statearr_47571_47653 = state_47564__$1;
(statearr_47571_47653[(1)] = (30));

} else {
var statearr_47572_47654 = state_47564__$1;
(statearr_47572_47654[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (1))){
var state_47564__$1 = state_47564;
var statearr_47573_47655 = state_47564__$1;
(statearr_47573_47655[(2)] = null);

(statearr_47573_47655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (24))){
var inst_47463 = (state_47564[(7)]);
var inst_47482 = (state_47564[(2)]);
var inst_47483 = cljs.core.next.call(null,inst_47463);
var inst_47441 = inst_47483;
var inst_47442 = null;
var inst_47443 = (0);
var inst_47444 = (0);
var state_47564__$1 = (function (){var statearr_47574 = state_47564;
(statearr_47574[(13)] = inst_47444);

(statearr_47574[(14)] = inst_47441);

(statearr_47574[(15)] = inst_47443);

(statearr_47574[(16)] = inst_47442);

(statearr_47574[(17)] = inst_47482);

return statearr_47574;
})();
var statearr_47575_47656 = state_47564__$1;
(statearr_47575_47656[(2)] = null);

(statearr_47575_47656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (39))){
var state_47564__$1 = state_47564;
var statearr_47579_47657 = state_47564__$1;
(statearr_47579_47657[(2)] = null);

(statearr_47579_47657[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (4))){
var inst_47432 = (state_47564[(10)]);
var inst_47432__$1 = (state_47564[(2)]);
var inst_47433 = (inst_47432__$1 == null);
var state_47564__$1 = (function (){var statearr_47580 = state_47564;
(statearr_47580[(10)] = inst_47432__$1);

return statearr_47580;
})();
if(cljs.core.truth_(inst_47433)){
var statearr_47581_47658 = state_47564__$1;
(statearr_47581_47658[(1)] = (5));

} else {
var statearr_47582_47659 = state_47564__$1;
(statearr_47582_47659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (15))){
var inst_47444 = (state_47564[(13)]);
var inst_47441 = (state_47564[(14)]);
var inst_47443 = (state_47564[(15)]);
var inst_47442 = (state_47564[(16)]);
var inst_47459 = (state_47564[(2)]);
var inst_47460 = (inst_47444 + (1));
var tmp47576 = inst_47441;
var tmp47577 = inst_47443;
var tmp47578 = inst_47442;
var inst_47441__$1 = tmp47576;
var inst_47442__$1 = tmp47578;
var inst_47443__$1 = tmp47577;
var inst_47444__$1 = inst_47460;
var state_47564__$1 = (function (){var statearr_47583 = state_47564;
(statearr_47583[(13)] = inst_47444__$1);

(statearr_47583[(14)] = inst_47441__$1);

(statearr_47583[(15)] = inst_47443__$1);

(statearr_47583[(18)] = inst_47459);

(statearr_47583[(16)] = inst_47442__$1);

return statearr_47583;
})();
var statearr_47584_47660 = state_47564__$1;
(statearr_47584_47660[(2)] = null);

(statearr_47584_47660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (21))){
var inst_47486 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47588_47661 = state_47564__$1;
(statearr_47588_47661[(2)] = inst_47486);

(statearr_47588_47661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (31))){
var inst_47512 = (state_47564[(9)]);
var inst_47516 = done.call(null,null);
var inst_47517 = cljs.core.async.untap_STAR_.call(null,m,inst_47512);
var state_47564__$1 = (function (){var statearr_47589 = state_47564;
(statearr_47589[(19)] = inst_47516);

return statearr_47589;
})();
var statearr_47590_47662 = state_47564__$1;
(statearr_47590_47662[(2)] = inst_47517);

(statearr_47590_47662[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (32))){
var inst_47506 = (state_47564[(20)]);
var inst_47507 = (state_47564[(11)]);
var inst_47504 = (state_47564[(21)]);
var inst_47505 = (state_47564[(12)]);
var inst_47519 = (state_47564[(2)]);
var inst_47520 = (inst_47507 + (1));
var tmp47585 = inst_47506;
var tmp47586 = inst_47504;
var tmp47587 = inst_47505;
var inst_47504__$1 = tmp47586;
var inst_47505__$1 = tmp47587;
var inst_47506__$1 = tmp47585;
var inst_47507__$1 = inst_47520;
var state_47564__$1 = (function (){var statearr_47591 = state_47564;
(statearr_47591[(20)] = inst_47506__$1);

(statearr_47591[(22)] = inst_47519);

(statearr_47591[(11)] = inst_47507__$1);

(statearr_47591[(21)] = inst_47504__$1);

(statearr_47591[(12)] = inst_47505__$1);

return statearr_47591;
})();
var statearr_47592_47663 = state_47564__$1;
(statearr_47592_47663[(2)] = null);

(statearr_47592_47663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (40))){
var inst_47532 = (state_47564[(23)]);
var inst_47536 = done.call(null,null);
var inst_47537 = cljs.core.async.untap_STAR_.call(null,m,inst_47532);
var state_47564__$1 = (function (){var statearr_47593 = state_47564;
(statearr_47593[(24)] = inst_47536);

return statearr_47593;
})();
var statearr_47594_47664 = state_47564__$1;
(statearr_47594_47664[(2)] = inst_47537);

(statearr_47594_47664[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (33))){
var inst_47523 = (state_47564[(25)]);
var inst_47525 = cljs.core.chunked_seq_QMARK_.call(null,inst_47523);
var state_47564__$1 = state_47564;
if(inst_47525){
var statearr_47595_47665 = state_47564__$1;
(statearr_47595_47665[(1)] = (36));

} else {
var statearr_47596_47666 = state_47564__$1;
(statearr_47596_47666[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (13))){
var inst_47453 = (state_47564[(26)]);
var inst_47456 = cljs.core.async.close_BANG_.call(null,inst_47453);
var state_47564__$1 = state_47564;
var statearr_47597_47667 = state_47564__$1;
(statearr_47597_47667[(2)] = inst_47456);

(statearr_47597_47667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (22))){
var inst_47476 = (state_47564[(8)]);
var inst_47479 = cljs.core.async.close_BANG_.call(null,inst_47476);
var state_47564__$1 = state_47564;
var statearr_47598_47668 = state_47564__$1;
(statearr_47598_47668[(2)] = inst_47479);

(statearr_47598_47668[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (36))){
var inst_47523 = (state_47564[(25)]);
var inst_47527 = cljs.core.chunk_first.call(null,inst_47523);
var inst_47528 = cljs.core.chunk_rest.call(null,inst_47523);
var inst_47529 = cljs.core.count.call(null,inst_47527);
var inst_47504 = inst_47528;
var inst_47505 = inst_47527;
var inst_47506 = inst_47529;
var inst_47507 = (0);
var state_47564__$1 = (function (){var statearr_47599 = state_47564;
(statearr_47599[(20)] = inst_47506);

(statearr_47599[(11)] = inst_47507);

(statearr_47599[(21)] = inst_47504);

(statearr_47599[(12)] = inst_47505);

return statearr_47599;
})();
var statearr_47600_47669 = state_47564__$1;
(statearr_47600_47669[(2)] = null);

(statearr_47600_47669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (41))){
var inst_47523 = (state_47564[(25)]);
var inst_47539 = (state_47564[(2)]);
var inst_47540 = cljs.core.next.call(null,inst_47523);
var inst_47504 = inst_47540;
var inst_47505 = null;
var inst_47506 = (0);
var inst_47507 = (0);
var state_47564__$1 = (function (){var statearr_47601 = state_47564;
(statearr_47601[(20)] = inst_47506);

(statearr_47601[(27)] = inst_47539);

(statearr_47601[(11)] = inst_47507);

(statearr_47601[(21)] = inst_47504);

(statearr_47601[(12)] = inst_47505);

return statearr_47601;
})();
var statearr_47602_47670 = state_47564__$1;
(statearr_47602_47670[(2)] = null);

(statearr_47602_47670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (43))){
var state_47564__$1 = state_47564;
var statearr_47603_47671 = state_47564__$1;
(statearr_47603_47671[(2)] = null);

(statearr_47603_47671[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (29))){
var inst_47548 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47604_47672 = state_47564__$1;
(statearr_47604_47672[(2)] = inst_47548);

(statearr_47604_47672[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (44))){
var inst_47557 = (state_47564[(2)]);
var state_47564__$1 = (function (){var statearr_47605 = state_47564;
(statearr_47605[(28)] = inst_47557);

return statearr_47605;
})();
var statearr_47606_47673 = state_47564__$1;
(statearr_47606_47673[(2)] = null);

(statearr_47606_47673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (6))){
var inst_47496 = (state_47564[(29)]);
var inst_47495 = cljs.core.deref.call(null,cs);
var inst_47496__$1 = cljs.core.keys.call(null,inst_47495);
var inst_47497 = cljs.core.count.call(null,inst_47496__$1);
var inst_47498 = cljs.core.reset_BANG_.call(null,dctr,inst_47497);
var inst_47503 = cljs.core.seq.call(null,inst_47496__$1);
var inst_47504 = inst_47503;
var inst_47505 = null;
var inst_47506 = (0);
var inst_47507 = (0);
var state_47564__$1 = (function (){var statearr_47607 = state_47564;
(statearr_47607[(29)] = inst_47496__$1);

(statearr_47607[(30)] = inst_47498);

(statearr_47607[(20)] = inst_47506);

(statearr_47607[(11)] = inst_47507);

(statearr_47607[(21)] = inst_47504);

(statearr_47607[(12)] = inst_47505);

return statearr_47607;
})();
var statearr_47608_47674 = state_47564__$1;
(statearr_47608_47674[(2)] = null);

(statearr_47608_47674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (28))){
var inst_47504 = (state_47564[(21)]);
var inst_47523 = (state_47564[(25)]);
var inst_47523__$1 = cljs.core.seq.call(null,inst_47504);
var state_47564__$1 = (function (){var statearr_47609 = state_47564;
(statearr_47609[(25)] = inst_47523__$1);

return statearr_47609;
})();
if(inst_47523__$1){
var statearr_47610_47675 = state_47564__$1;
(statearr_47610_47675[(1)] = (33));

} else {
var statearr_47611_47676 = state_47564__$1;
(statearr_47611_47676[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (25))){
var inst_47506 = (state_47564[(20)]);
var inst_47507 = (state_47564[(11)]);
var inst_47509 = (inst_47507 < inst_47506);
var inst_47510 = inst_47509;
var state_47564__$1 = state_47564;
if(cljs.core.truth_(inst_47510)){
var statearr_47612_47677 = state_47564__$1;
(statearr_47612_47677[(1)] = (27));

} else {
var statearr_47613_47678 = state_47564__$1;
(statearr_47613_47678[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (34))){
var state_47564__$1 = state_47564;
var statearr_47614_47679 = state_47564__$1;
(statearr_47614_47679[(2)] = null);

(statearr_47614_47679[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (17))){
var state_47564__$1 = state_47564;
var statearr_47615_47680 = state_47564__$1;
(statearr_47615_47680[(2)] = null);

(statearr_47615_47680[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (3))){
var inst_47562 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47564__$1,inst_47562);
} else {
if((state_val_47565 === (12))){
var inst_47491 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47616_47681 = state_47564__$1;
(statearr_47616_47681[(2)] = inst_47491);

(statearr_47616_47681[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (2))){
var state_47564__$1 = state_47564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47564__$1,(4),ch);
} else {
if((state_val_47565 === (23))){
var state_47564__$1 = state_47564;
var statearr_47617_47682 = state_47564__$1;
(statearr_47617_47682[(2)] = null);

(statearr_47617_47682[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (35))){
var inst_47546 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47618_47683 = state_47564__$1;
(statearr_47618_47683[(2)] = inst_47546);

(statearr_47618_47683[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (19))){
var inst_47463 = (state_47564[(7)]);
var inst_47467 = cljs.core.chunk_first.call(null,inst_47463);
var inst_47468 = cljs.core.chunk_rest.call(null,inst_47463);
var inst_47469 = cljs.core.count.call(null,inst_47467);
var inst_47441 = inst_47468;
var inst_47442 = inst_47467;
var inst_47443 = inst_47469;
var inst_47444 = (0);
var state_47564__$1 = (function (){var statearr_47619 = state_47564;
(statearr_47619[(13)] = inst_47444);

(statearr_47619[(14)] = inst_47441);

(statearr_47619[(15)] = inst_47443);

(statearr_47619[(16)] = inst_47442);

return statearr_47619;
})();
var statearr_47620_47684 = state_47564__$1;
(statearr_47620_47684[(2)] = null);

(statearr_47620_47684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (11))){
var inst_47441 = (state_47564[(14)]);
var inst_47463 = (state_47564[(7)]);
var inst_47463__$1 = cljs.core.seq.call(null,inst_47441);
var state_47564__$1 = (function (){var statearr_47621 = state_47564;
(statearr_47621[(7)] = inst_47463__$1);

return statearr_47621;
})();
if(inst_47463__$1){
var statearr_47622_47685 = state_47564__$1;
(statearr_47622_47685[(1)] = (16));

} else {
var statearr_47623_47686 = state_47564__$1;
(statearr_47623_47686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (9))){
var inst_47493 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47624_47687 = state_47564__$1;
(statearr_47624_47687[(2)] = inst_47493);

(statearr_47624_47687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (5))){
var inst_47439 = cljs.core.deref.call(null,cs);
var inst_47440 = cljs.core.seq.call(null,inst_47439);
var inst_47441 = inst_47440;
var inst_47442 = null;
var inst_47443 = (0);
var inst_47444 = (0);
var state_47564__$1 = (function (){var statearr_47625 = state_47564;
(statearr_47625[(13)] = inst_47444);

(statearr_47625[(14)] = inst_47441);

(statearr_47625[(15)] = inst_47443);

(statearr_47625[(16)] = inst_47442);

return statearr_47625;
})();
var statearr_47626_47688 = state_47564__$1;
(statearr_47626_47688[(2)] = null);

(statearr_47626_47688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (14))){
var state_47564__$1 = state_47564;
var statearr_47627_47689 = state_47564__$1;
(statearr_47627_47689[(2)] = null);

(statearr_47627_47689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (45))){
var inst_47554 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47628_47690 = state_47564__$1;
(statearr_47628_47690[(2)] = inst_47554);

(statearr_47628_47690[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (26))){
var inst_47496 = (state_47564[(29)]);
var inst_47550 = (state_47564[(2)]);
var inst_47551 = cljs.core.seq.call(null,inst_47496);
var state_47564__$1 = (function (){var statearr_47629 = state_47564;
(statearr_47629[(31)] = inst_47550);

return statearr_47629;
})();
if(inst_47551){
var statearr_47630_47691 = state_47564__$1;
(statearr_47630_47691[(1)] = (42));

} else {
var statearr_47631_47692 = state_47564__$1;
(statearr_47631_47692[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (16))){
var inst_47463 = (state_47564[(7)]);
var inst_47465 = cljs.core.chunked_seq_QMARK_.call(null,inst_47463);
var state_47564__$1 = state_47564;
if(inst_47465){
var statearr_47632_47693 = state_47564__$1;
(statearr_47632_47693[(1)] = (19));

} else {
var statearr_47633_47694 = state_47564__$1;
(statearr_47633_47694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (38))){
var inst_47543 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47634_47695 = state_47564__$1;
(statearr_47634_47695[(2)] = inst_47543);

(statearr_47634_47695[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (30))){
var state_47564__$1 = state_47564;
var statearr_47635_47696 = state_47564__$1;
(statearr_47635_47696[(2)] = null);

(statearr_47635_47696[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (10))){
var inst_47444 = (state_47564[(13)]);
var inst_47442 = (state_47564[(16)]);
var inst_47452 = cljs.core._nth.call(null,inst_47442,inst_47444);
var inst_47453 = cljs.core.nth.call(null,inst_47452,(0),null);
var inst_47454 = cljs.core.nth.call(null,inst_47452,(1),null);
var state_47564__$1 = (function (){var statearr_47636 = state_47564;
(statearr_47636[(26)] = inst_47453);

return statearr_47636;
})();
if(cljs.core.truth_(inst_47454)){
var statearr_47637_47697 = state_47564__$1;
(statearr_47637_47697[(1)] = (13));

} else {
var statearr_47638_47698 = state_47564__$1;
(statearr_47638_47698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (18))){
var inst_47489 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47639_47699 = state_47564__$1;
(statearr_47639_47699[(2)] = inst_47489);

(statearr_47639_47699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (42))){
var state_47564__$1 = state_47564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47564__$1,(45),dchan);
} else {
if((state_val_47565 === (37))){
var inst_47532 = (state_47564[(23)]);
var inst_47432 = (state_47564[(10)]);
var inst_47523 = (state_47564[(25)]);
var inst_47532__$1 = cljs.core.first.call(null,inst_47523);
var inst_47533 = cljs.core.async.put_BANG_.call(null,inst_47532__$1,inst_47432,done);
var state_47564__$1 = (function (){var statearr_47640 = state_47564;
(statearr_47640[(23)] = inst_47532__$1);

return statearr_47640;
})();
if(cljs.core.truth_(inst_47533)){
var statearr_47641_47700 = state_47564__$1;
(statearr_47641_47700[(1)] = (39));

} else {
var statearr_47642_47701 = state_47564__$1;
(statearr_47642_47701[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (8))){
var inst_47444 = (state_47564[(13)]);
var inst_47443 = (state_47564[(15)]);
var inst_47446 = (inst_47444 < inst_47443);
var inst_47447 = inst_47446;
var state_47564__$1 = state_47564;
if(cljs.core.truth_(inst_47447)){
var statearr_47643_47702 = state_47564__$1;
(statearr_47643_47702[(1)] = (10));

} else {
var statearr_47644_47703 = state_47564__$1;
(statearr_47644_47703[(1)] = (11));

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
});})(c__46830__auto___47649,cs,m,dchan,dctr,done))
;
return ((function (switch__46740__auto__,c__46830__auto___47649,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46741__auto__ = null;
var cljs$core$async$mult_$_state_machine__46741__auto____0 = (function (){
var statearr_47645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47645[(0)] = cljs$core$async$mult_$_state_machine__46741__auto__);

(statearr_47645[(1)] = (1));

return statearr_47645;
});
var cljs$core$async$mult_$_state_machine__46741__auto____1 = (function (state_47564){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_47564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e47646){if((e47646 instanceof Object)){
var ex__46744__auto__ = e47646;
var statearr_47647_47704 = state_47564;
(statearr_47647_47704[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47705 = state_47564;
state_47564 = G__47705;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46741__auto__ = function(state_47564){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46741__auto____1.call(this,state_47564);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46741__auto____0;
cljs$core$async$mult_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46741__auto____1;
return cljs$core$async$mult_$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___47649,cs,m,dchan,dctr,done))
})();
var state__46832__auto__ = (function (){var statearr_47648 = f__46831__auto__.call(null);
(statearr_47648[(6)] = c__46830__auto___47649);

return statearr_47648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___47649,cs,m,dchan,dctr,done))
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
var G__47707 = arguments.length;
switch (G__47707) {
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
var x__30972__auto__ = (((m == null))?null:m);
var m__30973__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,m,ch);
} else {
var m__30973__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,m,ch);
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
var x__30972__auto__ = (((m == null))?null:m);
var m__30973__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,m,ch);
} else {
var m__30973__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,m,ch);
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
var x__30972__auto__ = (((m == null))?null:m);
var m__30973__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,m);
} else {
var m__30973__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,m);
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
var x__30972__auto__ = (((m == null))?null:m);
var m__30973__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,m,state_map);
} else {
var m__30973__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,m,state_map);
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
var x__30972__auto__ = (((m == null))?null:m);
var m__30973__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,m,mode);
} else {
var m__30973__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31523__auto__ = [];
var len__31516__auto___47719 = arguments.length;
var i__31517__auto___47720 = (0);
while(true){
if((i__31517__auto___47720 < len__31516__auto___47719)){
args__31523__auto__.push((arguments[i__31517__auto___47720]));

var G__47721 = (i__31517__auto___47720 + (1));
i__31517__auto___47720 = G__47721;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((3) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31524__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47713){
var map__47714 = p__47713;
var map__47714__$1 = ((((!((map__47714 == null)))?((((map__47714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47714):map__47714);
var opts = map__47714__$1;
var statearr_47716_47722 = state;
(statearr_47716_47722[(1)] = cont_block);


var temp__5290__auto__ = cljs.core.async.do_alts.call(null,((function (map__47714,map__47714__$1,opts){
return (function (val){
var statearr_47717_47723 = state;
(statearr_47717_47723[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47714,map__47714__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5290__auto__)){
var cb = temp__5290__auto__;
var statearr_47718_47724 = state;
(statearr_47718_47724[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47709){
var G__47710 = cljs.core.first.call(null,seq47709);
var seq47709__$1 = cljs.core.next.call(null,seq47709);
var G__47711 = cljs.core.first.call(null,seq47709__$1);
var seq47709__$2 = cljs.core.next.call(null,seq47709__$1);
var G__47712 = cljs.core.first.call(null,seq47709__$2);
var seq47709__$3 = cljs.core.next.call(null,seq47709__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47710,G__47711,G__47712,seq47709__$3);
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
if(typeof cljs.core.async.t_cljs$core$async47725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47725 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta47726){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta47726 = meta47726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47727,meta47726__$1){
var self__ = this;
var _47727__$1 = this;
return (new cljs.core.async.t_cljs$core$async47725(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta47726__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47727){
var self__ = this;
var _47727__$1 = this;
return self__.meta47726;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47725.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47725.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47725.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47725.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47725.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47725.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47725.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async47725.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta47726","meta47726",-1368800263,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47725.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47725";

cljs.core.async.t_cljs$core$async47725.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async47725");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47725 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47725(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47726){
return (new cljs.core.async.t_cljs$core$async47725(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47726));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47725(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46830__auto___47889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___47889,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___47889,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47829){
var state_val_47830 = (state_47829[(1)]);
if((state_val_47830 === (7))){
var inst_47744 = (state_47829[(2)]);
var state_47829__$1 = state_47829;
var statearr_47831_47890 = state_47829__$1;
(statearr_47831_47890[(2)] = inst_47744);

(statearr_47831_47890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (20))){
var inst_47756 = (state_47829[(7)]);
var state_47829__$1 = state_47829;
var statearr_47832_47891 = state_47829__$1;
(statearr_47832_47891[(2)] = inst_47756);

(statearr_47832_47891[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (27))){
var state_47829__$1 = state_47829;
var statearr_47833_47892 = state_47829__$1;
(statearr_47833_47892[(2)] = null);

(statearr_47833_47892[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (1))){
var inst_47731 = (state_47829[(8)]);
var inst_47731__$1 = calc_state.call(null);
var inst_47733 = (inst_47731__$1 == null);
var inst_47734 = cljs.core.not.call(null,inst_47733);
var state_47829__$1 = (function (){var statearr_47834 = state_47829;
(statearr_47834[(8)] = inst_47731__$1);

return statearr_47834;
})();
if(inst_47734){
var statearr_47835_47893 = state_47829__$1;
(statearr_47835_47893[(1)] = (2));

} else {
var statearr_47836_47894 = state_47829__$1;
(statearr_47836_47894[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (24))){
var inst_47803 = (state_47829[(9)]);
var inst_47780 = (state_47829[(10)]);
var inst_47789 = (state_47829[(11)]);
var inst_47803__$1 = inst_47780.call(null,inst_47789);
var state_47829__$1 = (function (){var statearr_47837 = state_47829;
(statearr_47837[(9)] = inst_47803__$1);

return statearr_47837;
})();
if(cljs.core.truth_(inst_47803__$1)){
var statearr_47838_47895 = state_47829__$1;
(statearr_47838_47895[(1)] = (29));

} else {
var statearr_47839_47896 = state_47829__$1;
(statearr_47839_47896[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (4))){
var inst_47747 = (state_47829[(2)]);
var state_47829__$1 = state_47829;
if(cljs.core.truth_(inst_47747)){
var statearr_47840_47897 = state_47829__$1;
(statearr_47840_47897[(1)] = (8));

} else {
var statearr_47841_47898 = state_47829__$1;
(statearr_47841_47898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (15))){
var inst_47774 = (state_47829[(2)]);
var state_47829__$1 = state_47829;
if(cljs.core.truth_(inst_47774)){
var statearr_47842_47899 = state_47829__$1;
(statearr_47842_47899[(1)] = (19));

} else {
var statearr_47843_47900 = state_47829__$1;
(statearr_47843_47900[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (21))){
var inst_47779 = (state_47829[(12)]);
var inst_47779__$1 = (state_47829[(2)]);
var inst_47780 = cljs.core.get.call(null,inst_47779__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47781 = cljs.core.get.call(null,inst_47779__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47782 = cljs.core.get.call(null,inst_47779__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47829__$1 = (function (){var statearr_47844 = state_47829;
(statearr_47844[(10)] = inst_47780);

(statearr_47844[(12)] = inst_47779__$1);

(statearr_47844[(13)] = inst_47781);

return statearr_47844;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47829__$1,(22),inst_47782);
} else {
if((state_val_47830 === (31))){
var inst_47811 = (state_47829[(2)]);
var state_47829__$1 = state_47829;
if(cljs.core.truth_(inst_47811)){
var statearr_47845_47901 = state_47829__$1;
(statearr_47845_47901[(1)] = (32));

} else {
var statearr_47846_47902 = state_47829__$1;
(statearr_47846_47902[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (32))){
var inst_47788 = (state_47829[(14)]);
var state_47829__$1 = state_47829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47829__$1,(35),out,inst_47788);
} else {
if((state_val_47830 === (33))){
var inst_47779 = (state_47829[(12)]);
var inst_47756 = inst_47779;
var state_47829__$1 = (function (){var statearr_47847 = state_47829;
(statearr_47847[(7)] = inst_47756);

return statearr_47847;
})();
var statearr_47848_47903 = state_47829__$1;
(statearr_47848_47903[(2)] = null);

(statearr_47848_47903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (13))){
var inst_47756 = (state_47829[(7)]);
var inst_47763 = inst_47756.cljs$lang$protocol_mask$partition0$;
var inst_47764 = (inst_47763 & (64));
var inst_47765 = inst_47756.cljs$core$ISeq$;
var inst_47766 = (cljs.core.PROTOCOL_SENTINEL === inst_47765);
var inst_47767 = (inst_47764) || (inst_47766);
var state_47829__$1 = state_47829;
if(cljs.core.truth_(inst_47767)){
var statearr_47849_47904 = state_47829__$1;
(statearr_47849_47904[(1)] = (16));

} else {
var statearr_47850_47905 = state_47829__$1;
(statearr_47850_47905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (22))){
var inst_47789 = (state_47829[(11)]);
var inst_47788 = (state_47829[(14)]);
var inst_47787 = (state_47829[(2)]);
var inst_47788__$1 = cljs.core.nth.call(null,inst_47787,(0),null);
var inst_47789__$1 = cljs.core.nth.call(null,inst_47787,(1),null);
var inst_47790 = (inst_47788__$1 == null);
var inst_47791 = cljs.core._EQ_.call(null,inst_47789__$1,change);
var inst_47792 = (inst_47790) || (inst_47791);
var state_47829__$1 = (function (){var statearr_47851 = state_47829;
(statearr_47851[(11)] = inst_47789__$1);

(statearr_47851[(14)] = inst_47788__$1);

return statearr_47851;
})();
if(cljs.core.truth_(inst_47792)){
var statearr_47852_47906 = state_47829__$1;
(statearr_47852_47906[(1)] = (23));

} else {
var statearr_47853_47907 = state_47829__$1;
(statearr_47853_47907[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (36))){
var inst_47779 = (state_47829[(12)]);
var inst_47756 = inst_47779;
var state_47829__$1 = (function (){var statearr_47854 = state_47829;
(statearr_47854[(7)] = inst_47756);

return statearr_47854;
})();
var statearr_47855_47908 = state_47829__$1;
(statearr_47855_47908[(2)] = null);

(statearr_47855_47908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (29))){
var inst_47803 = (state_47829[(9)]);
var state_47829__$1 = state_47829;
var statearr_47856_47909 = state_47829__$1;
(statearr_47856_47909[(2)] = inst_47803);

(statearr_47856_47909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (6))){
var state_47829__$1 = state_47829;
var statearr_47857_47910 = state_47829__$1;
(statearr_47857_47910[(2)] = false);

(statearr_47857_47910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (28))){
var inst_47799 = (state_47829[(2)]);
var inst_47800 = calc_state.call(null);
var inst_47756 = inst_47800;
var state_47829__$1 = (function (){var statearr_47858 = state_47829;
(statearr_47858[(7)] = inst_47756);

(statearr_47858[(15)] = inst_47799);

return statearr_47858;
})();
var statearr_47859_47911 = state_47829__$1;
(statearr_47859_47911[(2)] = null);

(statearr_47859_47911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (25))){
var inst_47825 = (state_47829[(2)]);
var state_47829__$1 = state_47829;
var statearr_47860_47912 = state_47829__$1;
(statearr_47860_47912[(2)] = inst_47825);

(statearr_47860_47912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (34))){
var inst_47823 = (state_47829[(2)]);
var state_47829__$1 = state_47829;
var statearr_47861_47913 = state_47829__$1;
(statearr_47861_47913[(2)] = inst_47823);

(statearr_47861_47913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (17))){
var state_47829__$1 = state_47829;
var statearr_47862_47914 = state_47829__$1;
(statearr_47862_47914[(2)] = false);

(statearr_47862_47914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (3))){
var state_47829__$1 = state_47829;
var statearr_47863_47915 = state_47829__$1;
(statearr_47863_47915[(2)] = false);

(statearr_47863_47915[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (12))){
var inst_47827 = (state_47829[(2)]);
var state_47829__$1 = state_47829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47829__$1,inst_47827);
} else {
if((state_val_47830 === (2))){
var inst_47731 = (state_47829[(8)]);
var inst_47736 = inst_47731.cljs$lang$protocol_mask$partition0$;
var inst_47737 = (inst_47736 & (64));
var inst_47738 = inst_47731.cljs$core$ISeq$;
var inst_47739 = (cljs.core.PROTOCOL_SENTINEL === inst_47738);
var inst_47740 = (inst_47737) || (inst_47739);
var state_47829__$1 = state_47829;
if(cljs.core.truth_(inst_47740)){
var statearr_47864_47916 = state_47829__$1;
(statearr_47864_47916[(1)] = (5));

} else {
var statearr_47865_47917 = state_47829__$1;
(statearr_47865_47917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (23))){
var inst_47788 = (state_47829[(14)]);
var inst_47794 = (inst_47788 == null);
var state_47829__$1 = state_47829;
if(cljs.core.truth_(inst_47794)){
var statearr_47866_47918 = state_47829__$1;
(statearr_47866_47918[(1)] = (26));

} else {
var statearr_47867_47919 = state_47829__$1;
(statearr_47867_47919[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (35))){
var inst_47814 = (state_47829[(2)]);
var state_47829__$1 = state_47829;
if(cljs.core.truth_(inst_47814)){
var statearr_47868_47920 = state_47829__$1;
(statearr_47868_47920[(1)] = (36));

} else {
var statearr_47869_47921 = state_47829__$1;
(statearr_47869_47921[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (19))){
var inst_47756 = (state_47829[(7)]);
var inst_47776 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47756);
var state_47829__$1 = state_47829;
var statearr_47870_47922 = state_47829__$1;
(statearr_47870_47922[(2)] = inst_47776);

(statearr_47870_47922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (11))){
var inst_47756 = (state_47829[(7)]);
var inst_47760 = (inst_47756 == null);
var inst_47761 = cljs.core.not.call(null,inst_47760);
var state_47829__$1 = state_47829;
if(inst_47761){
var statearr_47871_47923 = state_47829__$1;
(statearr_47871_47923[(1)] = (13));

} else {
var statearr_47872_47924 = state_47829__$1;
(statearr_47872_47924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (9))){
var inst_47731 = (state_47829[(8)]);
var state_47829__$1 = state_47829;
var statearr_47873_47925 = state_47829__$1;
(statearr_47873_47925[(2)] = inst_47731);

(statearr_47873_47925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (5))){
var state_47829__$1 = state_47829;
var statearr_47874_47926 = state_47829__$1;
(statearr_47874_47926[(2)] = true);

(statearr_47874_47926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (14))){
var state_47829__$1 = state_47829;
var statearr_47875_47927 = state_47829__$1;
(statearr_47875_47927[(2)] = false);

(statearr_47875_47927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (26))){
var inst_47789 = (state_47829[(11)]);
var inst_47796 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47789);
var state_47829__$1 = state_47829;
var statearr_47876_47928 = state_47829__$1;
(statearr_47876_47928[(2)] = inst_47796);

(statearr_47876_47928[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (16))){
var state_47829__$1 = state_47829;
var statearr_47877_47929 = state_47829__$1;
(statearr_47877_47929[(2)] = true);

(statearr_47877_47929[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (38))){
var inst_47819 = (state_47829[(2)]);
var state_47829__$1 = state_47829;
var statearr_47878_47930 = state_47829__$1;
(statearr_47878_47930[(2)] = inst_47819);

(statearr_47878_47930[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (30))){
var inst_47780 = (state_47829[(10)]);
var inst_47789 = (state_47829[(11)]);
var inst_47781 = (state_47829[(13)]);
var inst_47806 = cljs.core.empty_QMARK_.call(null,inst_47780);
var inst_47807 = inst_47781.call(null,inst_47789);
var inst_47808 = cljs.core.not.call(null,inst_47807);
var inst_47809 = (inst_47806) && (inst_47808);
var state_47829__$1 = state_47829;
var statearr_47879_47931 = state_47829__$1;
(statearr_47879_47931[(2)] = inst_47809);

(statearr_47879_47931[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (10))){
var inst_47731 = (state_47829[(8)]);
var inst_47752 = (state_47829[(2)]);
var inst_47753 = cljs.core.get.call(null,inst_47752,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47754 = cljs.core.get.call(null,inst_47752,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47755 = cljs.core.get.call(null,inst_47752,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47756 = inst_47731;
var state_47829__$1 = (function (){var statearr_47880 = state_47829;
(statearr_47880[(16)] = inst_47754);

(statearr_47880[(7)] = inst_47756);

(statearr_47880[(17)] = inst_47755);

(statearr_47880[(18)] = inst_47753);

return statearr_47880;
})();
var statearr_47881_47932 = state_47829__$1;
(statearr_47881_47932[(2)] = null);

(statearr_47881_47932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (18))){
var inst_47771 = (state_47829[(2)]);
var state_47829__$1 = state_47829;
var statearr_47882_47933 = state_47829__$1;
(statearr_47882_47933[(2)] = inst_47771);

(statearr_47882_47933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (37))){
var state_47829__$1 = state_47829;
var statearr_47883_47934 = state_47829__$1;
(statearr_47883_47934[(2)] = null);

(statearr_47883_47934[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47830 === (8))){
var inst_47731 = (state_47829[(8)]);
var inst_47749 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47731);
var state_47829__$1 = state_47829;
var statearr_47884_47935 = state_47829__$1;
(statearr_47884_47935[(2)] = inst_47749);

(statearr_47884_47935[(1)] = (10));


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
});})(c__46830__auto___47889,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46740__auto__,c__46830__auto___47889,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46741__auto__ = null;
var cljs$core$async$mix_$_state_machine__46741__auto____0 = (function (){
var statearr_47885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47885[(0)] = cljs$core$async$mix_$_state_machine__46741__auto__);

(statearr_47885[(1)] = (1));

return statearr_47885;
});
var cljs$core$async$mix_$_state_machine__46741__auto____1 = (function (state_47829){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_47829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e47886){if((e47886 instanceof Object)){
var ex__46744__auto__ = e47886;
var statearr_47887_47936 = state_47829;
(statearr_47887_47936[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47937 = state_47829;
state_47829 = G__47937;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46741__auto__ = function(state_47829){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46741__auto____1.call(this,state_47829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46741__auto____0;
cljs$core$async$mix_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46741__auto____1;
return cljs$core$async$mix_$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___47889,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46832__auto__ = (function (){var statearr_47888 = f__46831__auto__.call(null);
(statearr_47888[(6)] = c__46830__auto___47889);

return statearr_47888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___47889,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__30972__auto__ = (((p == null))?null:p);
var m__30973__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30973__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__30972__auto__ = (((p == null))?null:p);
var m__30973__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,p,v,ch);
} else {
var m__30973__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47939 = arguments.length;
switch (G__47939) {
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
var x__30972__auto__ = (((p == null))?null:p);
var m__30973__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,p);
} else {
var m__30973__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,p);
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
var x__30972__auto__ = (((p == null))?null:p);
var m__30973__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,p,v);
} else {
var m__30973__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,p,v);
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
var G__47943 = arguments.length;
switch (G__47943) {
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
var or__30239__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30239__auto__,mults){
return (function (p1__47941_SHARP_){
if(cljs.core.truth_(p1__47941_SHARP_.call(null,topic))){
return p1__47941_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__47941_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30239__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async47944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47944 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47945){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47945 = meta47945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47946,meta47945__$1){
var self__ = this;
var _47946__$1 = this;
return (new cljs.core.async.t_cljs$core$async47944(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47945__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47946){
var self__ = this;
var _47946__$1 = this;
return self__.meta47945;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47944.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47944.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47944.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47944.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async47944.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47944.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47944.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47945","meta47945",-1358083550,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47944";

cljs.core.async.t_cljs$core$async47944.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async47944");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async47944 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47944(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47945){
return (new cljs.core.async.t_cljs$core$async47944(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47945));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47944(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46830__auto___48064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___48064,mults,ensure_mult,p){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___48064,mults,ensure_mult,p){
return (function (state_48018){
var state_val_48019 = (state_48018[(1)]);
if((state_val_48019 === (7))){
var inst_48014 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
var statearr_48020_48065 = state_48018__$1;
(statearr_48020_48065[(2)] = inst_48014);

(statearr_48020_48065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (20))){
var state_48018__$1 = state_48018;
var statearr_48021_48066 = state_48018__$1;
(statearr_48021_48066[(2)] = null);

(statearr_48021_48066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (1))){
var state_48018__$1 = state_48018;
var statearr_48022_48067 = state_48018__$1;
(statearr_48022_48067[(2)] = null);

(statearr_48022_48067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (24))){
var inst_47997 = (state_48018[(7)]);
var inst_48006 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_47997);
var state_48018__$1 = state_48018;
var statearr_48023_48068 = state_48018__$1;
(statearr_48023_48068[(2)] = inst_48006);

(statearr_48023_48068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (4))){
var inst_47949 = (state_48018[(8)]);
var inst_47949__$1 = (state_48018[(2)]);
var inst_47950 = (inst_47949__$1 == null);
var state_48018__$1 = (function (){var statearr_48024 = state_48018;
(statearr_48024[(8)] = inst_47949__$1);

return statearr_48024;
})();
if(cljs.core.truth_(inst_47950)){
var statearr_48025_48069 = state_48018__$1;
(statearr_48025_48069[(1)] = (5));

} else {
var statearr_48026_48070 = state_48018__$1;
(statearr_48026_48070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (15))){
var inst_47991 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
var statearr_48027_48071 = state_48018__$1;
(statearr_48027_48071[(2)] = inst_47991);

(statearr_48027_48071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (21))){
var inst_48011 = (state_48018[(2)]);
var state_48018__$1 = (function (){var statearr_48028 = state_48018;
(statearr_48028[(9)] = inst_48011);

return statearr_48028;
})();
var statearr_48029_48072 = state_48018__$1;
(statearr_48029_48072[(2)] = null);

(statearr_48029_48072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (13))){
var inst_47973 = (state_48018[(10)]);
var inst_47975 = cljs.core.chunked_seq_QMARK_.call(null,inst_47973);
var state_48018__$1 = state_48018;
if(inst_47975){
var statearr_48030_48073 = state_48018__$1;
(statearr_48030_48073[(1)] = (16));

} else {
var statearr_48031_48074 = state_48018__$1;
(statearr_48031_48074[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (22))){
var inst_48003 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
if(cljs.core.truth_(inst_48003)){
var statearr_48032_48075 = state_48018__$1;
(statearr_48032_48075[(1)] = (23));

} else {
var statearr_48033_48076 = state_48018__$1;
(statearr_48033_48076[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (6))){
var inst_47999 = (state_48018[(11)]);
var inst_47997 = (state_48018[(7)]);
var inst_47949 = (state_48018[(8)]);
var inst_47997__$1 = topic_fn.call(null,inst_47949);
var inst_47998 = cljs.core.deref.call(null,mults);
var inst_47999__$1 = cljs.core.get.call(null,inst_47998,inst_47997__$1);
var state_48018__$1 = (function (){var statearr_48034 = state_48018;
(statearr_48034[(11)] = inst_47999__$1);

(statearr_48034[(7)] = inst_47997__$1);

return statearr_48034;
})();
if(cljs.core.truth_(inst_47999__$1)){
var statearr_48035_48077 = state_48018__$1;
(statearr_48035_48077[(1)] = (19));

} else {
var statearr_48036_48078 = state_48018__$1;
(statearr_48036_48078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (25))){
var inst_48008 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
var statearr_48037_48079 = state_48018__$1;
(statearr_48037_48079[(2)] = inst_48008);

(statearr_48037_48079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (17))){
var inst_47973 = (state_48018[(10)]);
var inst_47982 = cljs.core.first.call(null,inst_47973);
var inst_47983 = cljs.core.async.muxch_STAR_.call(null,inst_47982);
var inst_47984 = cljs.core.async.close_BANG_.call(null,inst_47983);
var inst_47985 = cljs.core.next.call(null,inst_47973);
var inst_47959 = inst_47985;
var inst_47960 = null;
var inst_47961 = (0);
var inst_47962 = (0);
var state_48018__$1 = (function (){var statearr_48038 = state_48018;
(statearr_48038[(12)] = inst_47960);

(statearr_48038[(13)] = inst_47959);

(statearr_48038[(14)] = inst_47961);

(statearr_48038[(15)] = inst_47984);

(statearr_48038[(16)] = inst_47962);

return statearr_48038;
})();
var statearr_48039_48080 = state_48018__$1;
(statearr_48039_48080[(2)] = null);

(statearr_48039_48080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (3))){
var inst_48016 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48018__$1,inst_48016);
} else {
if((state_val_48019 === (12))){
var inst_47993 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
var statearr_48040_48081 = state_48018__$1;
(statearr_48040_48081[(2)] = inst_47993);

(statearr_48040_48081[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (2))){
var state_48018__$1 = state_48018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48018__$1,(4),ch);
} else {
if((state_val_48019 === (23))){
var state_48018__$1 = state_48018;
var statearr_48041_48082 = state_48018__$1;
(statearr_48041_48082[(2)] = null);

(statearr_48041_48082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (19))){
var inst_47999 = (state_48018[(11)]);
var inst_47949 = (state_48018[(8)]);
var inst_48001 = cljs.core.async.muxch_STAR_.call(null,inst_47999);
var state_48018__$1 = state_48018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48018__$1,(22),inst_48001,inst_47949);
} else {
if((state_val_48019 === (11))){
var inst_47973 = (state_48018[(10)]);
var inst_47959 = (state_48018[(13)]);
var inst_47973__$1 = cljs.core.seq.call(null,inst_47959);
var state_48018__$1 = (function (){var statearr_48042 = state_48018;
(statearr_48042[(10)] = inst_47973__$1);

return statearr_48042;
})();
if(inst_47973__$1){
var statearr_48043_48083 = state_48018__$1;
(statearr_48043_48083[(1)] = (13));

} else {
var statearr_48044_48084 = state_48018__$1;
(statearr_48044_48084[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (9))){
var inst_47995 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
var statearr_48045_48085 = state_48018__$1;
(statearr_48045_48085[(2)] = inst_47995);

(statearr_48045_48085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (5))){
var inst_47956 = cljs.core.deref.call(null,mults);
var inst_47957 = cljs.core.vals.call(null,inst_47956);
var inst_47958 = cljs.core.seq.call(null,inst_47957);
var inst_47959 = inst_47958;
var inst_47960 = null;
var inst_47961 = (0);
var inst_47962 = (0);
var state_48018__$1 = (function (){var statearr_48046 = state_48018;
(statearr_48046[(12)] = inst_47960);

(statearr_48046[(13)] = inst_47959);

(statearr_48046[(14)] = inst_47961);

(statearr_48046[(16)] = inst_47962);

return statearr_48046;
})();
var statearr_48047_48086 = state_48018__$1;
(statearr_48047_48086[(2)] = null);

(statearr_48047_48086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (14))){
var state_48018__$1 = state_48018;
var statearr_48051_48087 = state_48018__$1;
(statearr_48051_48087[(2)] = null);

(statearr_48051_48087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (16))){
var inst_47973 = (state_48018[(10)]);
var inst_47977 = cljs.core.chunk_first.call(null,inst_47973);
var inst_47978 = cljs.core.chunk_rest.call(null,inst_47973);
var inst_47979 = cljs.core.count.call(null,inst_47977);
var inst_47959 = inst_47978;
var inst_47960 = inst_47977;
var inst_47961 = inst_47979;
var inst_47962 = (0);
var state_48018__$1 = (function (){var statearr_48052 = state_48018;
(statearr_48052[(12)] = inst_47960);

(statearr_48052[(13)] = inst_47959);

(statearr_48052[(14)] = inst_47961);

(statearr_48052[(16)] = inst_47962);

return statearr_48052;
})();
var statearr_48053_48088 = state_48018__$1;
(statearr_48053_48088[(2)] = null);

(statearr_48053_48088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (10))){
var inst_47960 = (state_48018[(12)]);
var inst_47959 = (state_48018[(13)]);
var inst_47961 = (state_48018[(14)]);
var inst_47962 = (state_48018[(16)]);
var inst_47967 = cljs.core._nth.call(null,inst_47960,inst_47962);
var inst_47968 = cljs.core.async.muxch_STAR_.call(null,inst_47967);
var inst_47969 = cljs.core.async.close_BANG_.call(null,inst_47968);
var inst_47970 = (inst_47962 + (1));
var tmp48048 = inst_47960;
var tmp48049 = inst_47959;
var tmp48050 = inst_47961;
var inst_47959__$1 = tmp48049;
var inst_47960__$1 = tmp48048;
var inst_47961__$1 = tmp48050;
var inst_47962__$1 = inst_47970;
var state_48018__$1 = (function (){var statearr_48054 = state_48018;
(statearr_48054[(12)] = inst_47960__$1);

(statearr_48054[(17)] = inst_47969);

(statearr_48054[(13)] = inst_47959__$1);

(statearr_48054[(14)] = inst_47961__$1);

(statearr_48054[(16)] = inst_47962__$1);

return statearr_48054;
})();
var statearr_48055_48089 = state_48018__$1;
(statearr_48055_48089[(2)] = null);

(statearr_48055_48089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (18))){
var inst_47988 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
var statearr_48056_48090 = state_48018__$1;
(statearr_48056_48090[(2)] = inst_47988);

(statearr_48056_48090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (8))){
var inst_47961 = (state_48018[(14)]);
var inst_47962 = (state_48018[(16)]);
var inst_47964 = (inst_47962 < inst_47961);
var inst_47965 = inst_47964;
var state_48018__$1 = state_48018;
if(cljs.core.truth_(inst_47965)){
var statearr_48057_48091 = state_48018__$1;
(statearr_48057_48091[(1)] = (10));

} else {
var statearr_48058_48092 = state_48018__$1;
(statearr_48058_48092[(1)] = (11));

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
});})(c__46830__auto___48064,mults,ensure_mult,p))
;
return ((function (switch__46740__auto__,c__46830__auto___48064,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46741__auto__ = null;
var cljs$core$async$state_machine__46741__auto____0 = (function (){
var statearr_48059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48059[(0)] = cljs$core$async$state_machine__46741__auto__);

(statearr_48059[(1)] = (1));

return statearr_48059;
});
var cljs$core$async$state_machine__46741__auto____1 = (function (state_48018){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_48018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e48060){if((e48060 instanceof Object)){
var ex__46744__auto__ = e48060;
var statearr_48061_48093 = state_48018;
(statearr_48061_48093[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48094 = state_48018;
state_48018 = G__48094;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$state_machine__46741__auto__ = function(state_48018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46741__auto____1.call(this,state_48018);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46741__auto____0;
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46741__auto____1;
return cljs$core$async$state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___48064,mults,ensure_mult,p))
})();
var state__46832__auto__ = (function (){var statearr_48062 = f__46831__auto__.call(null);
(statearr_48062[(6)] = c__46830__auto___48064);

return statearr_48062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___48064,mults,ensure_mult,p))
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
var G__48096 = arguments.length;
switch (G__48096) {
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
var G__48099 = arguments.length;
switch (G__48099) {
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
var G__48102 = arguments.length;
switch (G__48102) {
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
var c__46830__auto___48169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___48169,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___48169,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48141){
var state_val_48142 = (state_48141[(1)]);
if((state_val_48142 === (7))){
var state_48141__$1 = state_48141;
var statearr_48143_48170 = state_48141__$1;
(statearr_48143_48170[(2)] = null);

(statearr_48143_48170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48142 === (1))){
var state_48141__$1 = state_48141;
var statearr_48144_48171 = state_48141__$1;
(statearr_48144_48171[(2)] = null);

(statearr_48144_48171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48142 === (4))){
var inst_48105 = (state_48141[(7)]);
var inst_48107 = (inst_48105 < cnt);
var state_48141__$1 = state_48141;
if(cljs.core.truth_(inst_48107)){
var statearr_48145_48172 = state_48141__$1;
(statearr_48145_48172[(1)] = (6));

} else {
var statearr_48146_48173 = state_48141__$1;
(statearr_48146_48173[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48142 === (15))){
var inst_48137 = (state_48141[(2)]);
var state_48141__$1 = state_48141;
var statearr_48147_48174 = state_48141__$1;
(statearr_48147_48174[(2)] = inst_48137);

(statearr_48147_48174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48142 === (13))){
var inst_48130 = cljs.core.async.close_BANG_.call(null,out);
var state_48141__$1 = state_48141;
var statearr_48148_48175 = state_48141__$1;
(statearr_48148_48175[(2)] = inst_48130);

(statearr_48148_48175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48142 === (6))){
var state_48141__$1 = state_48141;
var statearr_48149_48176 = state_48141__$1;
(statearr_48149_48176[(2)] = null);

(statearr_48149_48176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48142 === (3))){
var inst_48139 = (state_48141[(2)]);
var state_48141__$1 = state_48141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48141__$1,inst_48139);
} else {
if((state_val_48142 === (12))){
var inst_48127 = (state_48141[(8)]);
var inst_48127__$1 = (state_48141[(2)]);
var inst_48128 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48127__$1);
var state_48141__$1 = (function (){var statearr_48150 = state_48141;
(statearr_48150[(8)] = inst_48127__$1);

return statearr_48150;
})();
if(cljs.core.truth_(inst_48128)){
var statearr_48151_48177 = state_48141__$1;
(statearr_48151_48177[(1)] = (13));

} else {
var statearr_48152_48178 = state_48141__$1;
(statearr_48152_48178[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48142 === (2))){
var inst_48104 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48105 = (0);
var state_48141__$1 = (function (){var statearr_48153 = state_48141;
(statearr_48153[(7)] = inst_48105);

(statearr_48153[(9)] = inst_48104);

return statearr_48153;
})();
var statearr_48154_48179 = state_48141__$1;
(statearr_48154_48179[(2)] = null);

(statearr_48154_48179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48142 === (11))){
var inst_48105 = (state_48141[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48141,(10),Object,null,(9));
var inst_48114 = chs__$1.call(null,inst_48105);
var inst_48115 = done.call(null,inst_48105);
var inst_48116 = cljs.core.async.take_BANG_.call(null,inst_48114,inst_48115);
var state_48141__$1 = state_48141;
var statearr_48155_48180 = state_48141__$1;
(statearr_48155_48180[(2)] = inst_48116);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48141__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48142 === (9))){
var inst_48105 = (state_48141[(7)]);
var inst_48118 = (state_48141[(2)]);
var inst_48119 = (inst_48105 + (1));
var inst_48105__$1 = inst_48119;
var state_48141__$1 = (function (){var statearr_48156 = state_48141;
(statearr_48156[(7)] = inst_48105__$1);

(statearr_48156[(10)] = inst_48118);

return statearr_48156;
})();
var statearr_48157_48181 = state_48141__$1;
(statearr_48157_48181[(2)] = null);

(statearr_48157_48181[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48142 === (5))){
var inst_48125 = (state_48141[(2)]);
var state_48141__$1 = (function (){var statearr_48158 = state_48141;
(statearr_48158[(11)] = inst_48125);

return statearr_48158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48141__$1,(12),dchan);
} else {
if((state_val_48142 === (14))){
var inst_48127 = (state_48141[(8)]);
var inst_48132 = cljs.core.apply.call(null,f,inst_48127);
var state_48141__$1 = state_48141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48141__$1,(16),out,inst_48132);
} else {
if((state_val_48142 === (16))){
var inst_48134 = (state_48141[(2)]);
var state_48141__$1 = (function (){var statearr_48159 = state_48141;
(statearr_48159[(12)] = inst_48134);

return statearr_48159;
})();
var statearr_48160_48182 = state_48141__$1;
(statearr_48160_48182[(2)] = null);

(statearr_48160_48182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48142 === (10))){
var inst_48109 = (state_48141[(2)]);
var inst_48110 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48141__$1 = (function (){var statearr_48161 = state_48141;
(statearr_48161[(13)] = inst_48109);

return statearr_48161;
})();
var statearr_48162_48183 = state_48141__$1;
(statearr_48162_48183[(2)] = inst_48110);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48141__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48142 === (8))){
var inst_48123 = (state_48141[(2)]);
var state_48141__$1 = state_48141;
var statearr_48163_48184 = state_48141__$1;
(statearr_48163_48184[(2)] = inst_48123);

(statearr_48163_48184[(1)] = (5));


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
});})(c__46830__auto___48169,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46740__auto__,c__46830__auto___48169,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46741__auto__ = null;
var cljs$core$async$state_machine__46741__auto____0 = (function (){
var statearr_48164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48164[(0)] = cljs$core$async$state_machine__46741__auto__);

(statearr_48164[(1)] = (1));

return statearr_48164;
});
var cljs$core$async$state_machine__46741__auto____1 = (function (state_48141){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_48141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e48165){if((e48165 instanceof Object)){
var ex__46744__auto__ = e48165;
var statearr_48166_48185 = state_48141;
(statearr_48166_48185[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48186 = state_48141;
state_48141 = G__48186;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$state_machine__46741__auto__ = function(state_48141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46741__auto____1.call(this,state_48141);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46741__auto____0;
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46741__auto____1;
return cljs$core$async$state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___48169,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46832__auto__ = (function (){var statearr_48167 = f__46831__auto__.call(null);
(statearr_48167[(6)] = c__46830__auto___48169);

return statearr_48167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___48169,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__48189 = arguments.length;
switch (G__48189) {
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
var c__46830__auto___48243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___48243,out){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___48243,out){
return (function (state_48221){
var state_val_48222 = (state_48221[(1)]);
if((state_val_48222 === (7))){
var inst_48200 = (state_48221[(7)]);
var inst_48201 = (state_48221[(8)]);
var inst_48200__$1 = (state_48221[(2)]);
var inst_48201__$1 = cljs.core.nth.call(null,inst_48200__$1,(0),null);
var inst_48202 = cljs.core.nth.call(null,inst_48200__$1,(1),null);
var inst_48203 = (inst_48201__$1 == null);
var state_48221__$1 = (function (){var statearr_48223 = state_48221;
(statearr_48223[(7)] = inst_48200__$1);

(statearr_48223[(8)] = inst_48201__$1);

(statearr_48223[(9)] = inst_48202);

return statearr_48223;
})();
if(cljs.core.truth_(inst_48203)){
var statearr_48224_48244 = state_48221__$1;
(statearr_48224_48244[(1)] = (8));

} else {
var statearr_48225_48245 = state_48221__$1;
(statearr_48225_48245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48222 === (1))){
var inst_48190 = cljs.core.vec.call(null,chs);
var inst_48191 = inst_48190;
var state_48221__$1 = (function (){var statearr_48226 = state_48221;
(statearr_48226[(10)] = inst_48191);

return statearr_48226;
})();
var statearr_48227_48246 = state_48221__$1;
(statearr_48227_48246[(2)] = null);

(statearr_48227_48246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48222 === (4))){
var inst_48191 = (state_48221[(10)]);
var state_48221__$1 = state_48221;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48221__$1,(7),inst_48191);
} else {
if((state_val_48222 === (6))){
var inst_48217 = (state_48221[(2)]);
var state_48221__$1 = state_48221;
var statearr_48228_48247 = state_48221__$1;
(statearr_48228_48247[(2)] = inst_48217);

(statearr_48228_48247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48222 === (3))){
var inst_48219 = (state_48221[(2)]);
var state_48221__$1 = state_48221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48221__$1,inst_48219);
} else {
if((state_val_48222 === (2))){
var inst_48191 = (state_48221[(10)]);
var inst_48193 = cljs.core.count.call(null,inst_48191);
var inst_48194 = (inst_48193 > (0));
var state_48221__$1 = state_48221;
if(cljs.core.truth_(inst_48194)){
var statearr_48230_48248 = state_48221__$1;
(statearr_48230_48248[(1)] = (4));

} else {
var statearr_48231_48249 = state_48221__$1;
(statearr_48231_48249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48222 === (11))){
var inst_48191 = (state_48221[(10)]);
var inst_48210 = (state_48221[(2)]);
var tmp48229 = inst_48191;
var inst_48191__$1 = tmp48229;
var state_48221__$1 = (function (){var statearr_48232 = state_48221;
(statearr_48232[(11)] = inst_48210);

(statearr_48232[(10)] = inst_48191__$1);

return statearr_48232;
})();
var statearr_48233_48250 = state_48221__$1;
(statearr_48233_48250[(2)] = null);

(statearr_48233_48250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48222 === (9))){
var inst_48201 = (state_48221[(8)]);
var state_48221__$1 = state_48221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48221__$1,(11),out,inst_48201);
} else {
if((state_val_48222 === (5))){
var inst_48215 = cljs.core.async.close_BANG_.call(null,out);
var state_48221__$1 = state_48221;
var statearr_48234_48251 = state_48221__$1;
(statearr_48234_48251[(2)] = inst_48215);

(statearr_48234_48251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48222 === (10))){
var inst_48213 = (state_48221[(2)]);
var state_48221__$1 = state_48221;
var statearr_48235_48252 = state_48221__$1;
(statearr_48235_48252[(2)] = inst_48213);

(statearr_48235_48252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48222 === (8))){
var inst_48191 = (state_48221[(10)]);
var inst_48200 = (state_48221[(7)]);
var inst_48201 = (state_48221[(8)]);
var inst_48202 = (state_48221[(9)]);
var inst_48205 = (function (){var cs = inst_48191;
var vec__48196 = inst_48200;
var v = inst_48201;
var c = inst_48202;
return ((function (cs,vec__48196,v,c,inst_48191,inst_48200,inst_48201,inst_48202,state_val_48222,c__46830__auto___48243,out){
return (function (p1__48187_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48187_SHARP_);
});
;})(cs,vec__48196,v,c,inst_48191,inst_48200,inst_48201,inst_48202,state_val_48222,c__46830__auto___48243,out))
})();
var inst_48206 = cljs.core.filterv.call(null,inst_48205,inst_48191);
var inst_48191__$1 = inst_48206;
var state_48221__$1 = (function (){var statearr_48236 = state_48221;
(statearr_48236[(10)] = inst_48191__$1);

return statearr_48236;
})();
var statearr_48237_48253 = state_48221__$1;
(statearr_48237_48253[(2)] = null);

(statearr_48237_48253[(1)] = (2));


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
});})(c__46830__auto___48243,out))
;
return ((function (switch__46740__auto__,c__46830__auto___48243,out){
return (function() {
var cljs$core$async$state_machine__46741__auto__ = null;
var cljs$core$async$state_machine__46741__auto____0 = (function (){
var statearr_48238 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48238[(0)] = cljs$core$async$state_machine__46741__auto__);

(statearr_48238[(1)] = (1));

return statearr_48238;
});
var cljs$core$async$state_machine__46741__auto____1 = (function (state_48221){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_48221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e48239){if((e48239 instanceof Object)){
var ex__46744__auto__ = e48239;
var statearr_48240_48254 = state_48221;
(statearr_48240_48254[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48255 = state_48221;
state_48221 = G__48255;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$state_machine__46741__auto__ = function(state_48221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46741__auto____1.call(this,state_48221);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46741__auto____0;
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46741__auto____1;
return cljs$core$async$state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___48243,out))
})();
var state__46832__auto__ = (function (){var statearr_48241 = f__46831__auto__.call(null);
(statearr_48241[(6)] = c__46830__auto___48243);

return statearr_48241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___48243,out))
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
var G__48257 = arguments.length;
switch (G__48257) {
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
var c__46830__auto___48302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___48302,out){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___48302,out){
return (function (state_48281){
var state_val_48282 = (state_48281[(1)]);
if((state_val_48282 === (7))){
var inst_48263 = (state_48281[(7)]);
var inst_48263__$1 = (state_48281[(2)]);
var inst_48264 = (inst_48263__$1 == null);
var inst_48265 = cljs.core.not.call(null,inst_48264);
var state_48281__$1 = (function (){var statearr_48283 = state_48281;
(statearr_48283[(7)] = inst_48263__$1);

return statearr_48283;
})();
if(inst_48265){
var statearr_48284_48303 = state_48281__$1;
(statearr_48284_48303[(1)] = (8));

} else {
var statearr_48285_48304 = state_48281__$1;
(statearr_48285_48304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48282 === (1))){
var inst_48258 = (0);
var state_48281__$1 = (function (){var statearr_48286 = state_48281;
(statearr_48286[(8)] = inst_48258);

return statearr_48286;
})();
var statearr_48287_48305 = state_48281__$1;
(statearr_48287_48305[(2)] = null);

(statearr_48287_48305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48282 === (4))){
var state_48281__$1 = state_48281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48281__$1,(7),ch);
} else {
if((state_val_48282 === (6))){
var inst_48276 = (state_48281[(2)]);
var state_48281__$1 = state_48281;
var statearr_48288_48306 = state_48281__$1;
(statearr_48288_48306[(2)] = inst_48276);

(statearr_48288_48306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48282 === (3))){
var inst_48278 = (state_48281[(2)]);
var inst_48279 = cljs.core.async.close_BANG_.call(null,out);
var state_48281__$1 = (function (){var statearr_48289 = state_48281;
(statearr_48289[(9)] = inst_48278);

return statearr_48289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48281__$1,inst_48279);
} else {
if((state_val_48282 === (2))){
var inst_48258 = (state_48281[(8)]);
var inst_48260 = (inst_48258 < n);
var state_48281__$1 = state_48281;
if(cljs.core.truth_(inst_48260)){
var statearr_48290_48307 = state_48281__$1;
(statearr_48290_48307[(1)] = (4));

} else {
var statearr_48291_48308 = state_48281__$1;
(statearr_48291_48308[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48282 === (11))){
var inst_48258 = (state_48281[(8)]);
var inst_48268 = (state_48281[(2)]);
var inst_48269 = (inst_48258 + (1));
var inst_48258__$1 = inst_48269;
var state_48281__$1 = (function (){var statearr_48292 = state_48281;
(statearr_48292[(10)] = inst_48268);

(statearr_48292[(8)] = inst_48258__$1);

return statearr_48292;
})();
var statearr_48293_48309 = state_48281__$1;
(statearr_48293_48309[(2)] = null);

(statearr_48293_48309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48282 === (9))){
var state_48281__$1 = state_48281;
var statearr_48294_48310 = state_48281__$1;
(statearr_48294_48310[(2)] = null);

(statearr_48294_48310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48282 === (5))){
var state_48281__$1 = state_48281;
var statearr_48295_48311 = state_48281__$1;
(statearr_48295_48311[(2)] = null);

(statearr_48295_48311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48282 === (10))){
var inst_48273 = (state_48281[(2)]);
var state_48281__$1 = state_48281;
var statearr_48296_48312 = state_48281__$1;
(statearr_48296_48312[(2)] = inst_48273);

(statearr_48296_48312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48282 === (8))){
var inst_48263 = (state_48281[(7)]);
var state_48281__$1 = state_48281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48281__$1,(11),out,inst_48263);
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
});})(c__46830__auto___48302,out))
;
return ((function (switch__46740__auto__,c__46830__auto___48302,out){
return (function() {
var cljs$core$async$state_machine__46741__auto__ = null;
var cljs$core$async$state_machine__46741__auto____0 = (function (){
var statearr_48297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48297[(0)] = cljs$core$async$state_machine__46741__auto__);

(statearr_48297[(1)] = (1));

return statearr_48297;
});
var cljs$core$async$state_machine__46741__auto____1 = (function (state_48281){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_48281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e48298){if((e48298 instanceof Object)){
var ex__46744__auto__ = e48298;
var statearr_48299_48313 = state_48281;
(statearr_48299_48313[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48314 = state_48281;
state_48281 = G__48314;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$state_machine__46741__auto__ = function(state_48281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46741__auto____1.call(this,state_48281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46741__auto____0;
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46741__auto____1;
return cljs$core$async$state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___48302,out))
})();
var state__46832__auto__ = (function (){var statearr_48300 = f__46831__auto__.call(null);
(statearr_48300[(6)] = c__46830__auto___48302);

return statearr_48300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___48302,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48316 = (function (f,ch,meta48317){
this.f = f;
this.ch = ch;
this.meta48317 = meta48317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48318,meta48317__$1){
var self__ = this;
var _48318__$1 = this;
return (new cljs.core.async.t_cljs$core$async48316(self__.f,self__.ch,meta48317__$1));
});

cljs.core.async.t_cljs$core$async48316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48318){
var self__ = this;
var _48318__$1 = this;
return self__.meta48317;
});

cljs.core.async.t_cljs$core$async48316.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48316.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48316.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48319 = (function (f,ch,meta48317,_,fn1,meta48320){
this.f = f;
this.ch = ch;
this.meta48317 = meta48317;
this._ = _;
this.fn1 = fn1;
this.meta48320 = meta48320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48321,meta48320__$1){
var self__ = this;
var _48321__$1 = this;
return (new cljs.core.async.t_cljs$core$async48319(self__.f,self__.ch,self__.meta48317,self__._,self__.fn1,meta48320__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48321){
var self__ = this;
var _48321__$1 = this;
return self__.meta48320;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48319.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48315_SHARP_){
return f1.call(null,(((p1__48315_SHARP_ == null))?null:self__.f.call(null,p1__48315_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48319.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48317","meta48317",-1679609898,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48316","cljs.core.async/t_cljs$core$async48316",1673829648,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48320","meta48320",1075549740,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48319.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48319";

cljs.core.async.t_cljs$core$async48319.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async48319");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48319 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48319(f__$1,ch__$1,meta48317__$1,___$2,fn1__$1,meta48320){
return (new cljs.core.async.t_cljs$core$async48319(f__$1,ch__$1,meta48317__$1,___$2,fn1__$1,meta48320));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48319(self__.f,self__.ch,self__.meta48317,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30227__auto__ = ret;
if(cljs.core.truth_(and__30227__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30227__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48316.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48317","meta48317",-1679609898,null)], null);
});

cljs.core.async.t_cljs$core$async48316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48316";

cljs.core.async.t_cljs$core$async48316.cljs$lang$ctorPrWriter = (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async48316");
});

cljs.core.async.__GT_t_cljs$core$async48316 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48316(f__$1,ch__$1,meta48317){
return (new cljs.core.async.t_cljs$core$async48316(f__$1,ch__$1,meta48317));
});

}

return (new cljs.core.async.t_cljs$core$async48316(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48322 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48322 = (function (f,ch,meta48323){
this.f = f;
this.ch = ch;
this.meta48323 = meta48323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48324,meta48323__$1){
var self__ = this;
var _48324__$1 = this;
return (new cljs.core.async.t_cljs$core$async48322(self__.f,self__.ch,meta48323__$1));
});

cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48324){
var self__ = this;
var _48324__$1 = this;
return self__.meta48323;
});

cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48322.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48323","meta48323",-1972337329,null)], null);
});

cljs.core.async.t_cljs$core$async48322.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48322";

cljs.core.async.t_cljs$core$async48322.cljs$lang$ctorPrWriter = (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async48322");
});

cljs.core.async.__GT_t_cljs$core$async48322 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48322(f__$1,ch__$1,meta48323){
return (new cljs.core.async.t_cljs$core$async48322(f__$1,ch__$1,meta48323));
});

}

return (new cljs.core.async.t_cljs$core$async48322(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async48325 = (function (p,ch,meta48326){
this.p = p;
this.ch = ch;
this.meta48326 = meta48326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48327,meta48326__$1){
var self__ = this;
var _48327__$1 = this;
return (new cljs.core.async.t_cljs$core$async48325(self__.p,self__.ch,meta48326__$1));
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

cljs.core.async.t_cljs$core$async48325.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
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
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48326","meta48326",-2095878641,null)], null);
});

cljs.core.async.t_cljs$core$async48325.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48325";

cljs.core.async.t_cljs$core$async48325.cljs$lang$ctorPrWriter = (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async48325");
});

cljs.core.async.__GT_t_cljs$core$async48325 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48325(p__$1,ch__$1,meta48326){
return (new cljs.core.async.t_cljs$core$async48325(p__$1,ch__$1,meta48326));
});

}

return (new cljs.core.async.t_cljs$core$async48325(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48329 = arguments.length;
switch (G__48329) {
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
var c__46830__auto___48369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___48369,out){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___48369,out){
return (function (state_48350){
var state_val_48351 = (state_48350[(1)]);
if((state_val_48351 === (7))){
var inst_48346 = (state_48350[(2)]);
var state_48350__$1 = state_48350;
var statearr_48352_48370 = state_48350__$1;
(statearr_48352_48370[(2)] = inst_48346);

(statearr_48352_48370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (1))){
var state_48350__$1 = state_48350;
var statearr_48353_48371 = state_48350__$1;
(statearr_48353_48371[(2)] = null);

(statearr_48353_48371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (4))){
var inst_48332 = (state_48350[(7)]);
var inst_48332__$1 = (state_48350[(2)]);
var inst_48333 = (inst_48332__$1 == null);
var state_48350__$1 = (function (){var statearr_48354 = state_48350;
(statearr_48354[(7)] = inst_48332__$1);

return statearr_48354;
})();
if(cljs.core.truth_(inst_48333)){
var statearr_48355_48372 = state_48350__$1;
(statearr_48355_48372[(1)] = (5));

} else {
var statearr_48356_48373 = state_48350__$1;
(statearr_48356_48373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (6))){
var inst_48332 = (state_48350[(7)]);
var inst_48337 = p.call(null,inst_48332);
var state_48350__$1 = state_48350;
if(cljs.core.truth_(inst_48337)){
var statearr_48357_48374 = state_48350__$1;
(statearr_48357_48374[(1)] = (8));

} else {
var statearr_48358_48375 = state_48350__$1;
(statearr_48358_48375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (3))){
var inst_48348 = (state_48350[(2)]);
var state_48350__$1 = state_48350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48350__$1,inst_48348);
} else {
if((state_val_48351 === (2))){
var state_48350__$1 = state_48350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48350__$1,(4),ch);
} else {
if((state_val_48351 === (11))){
var inst_48340 = (state_48350[(2)]);
var state_48350__$1 = state_48350;
var statearr_48359_48376 = state_48350__$1;
(statearr_48359_48376[(2)] = inst_48340);

(statearr_48359_48376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (9))){
var state_48350__$1 = state_48350;
var statearr_48360_48377 = state_48350__$1;
(statearr_48360_48377[(2)] = null);

(statearr_48360_48377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (5))){
var inst_48335 = cljs.core.async.close_BANG_.call(null,out);
var state_48350__$1 = state_48350;
var statearr_48361_48378 = state_48350__$1;
(statearr_48361_48378[(2)] = inst_48335);

(statearr_48361_48378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (10))){
var inst_48343 = (state_48350[(2)]);
var state_48350__$1 = (function (){var statearr_48362 = state_48350;
(statearr_48362[(8)] = inst_48343);

return statearr_48362;
})();
var statearr_48363_48379 = state_48350__$1;
(statearr_48363_48379[(2)] = null);

(statearr_48363_48379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (8))){
var inst_48332 = (state_48350[(7)]);
var state_48350__$1 = state_48350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48350__$1,(11),out,inst_48332);
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
});})(c__46830__auto___48369,out))
;
return ((function (switch__46740__auto__,c__46830__auto___48369,out){
return (function() {
var cljs$core$async$state_machine__46741__auto__ = null;
var cljs$core$async$state_machine__46741__auto____0 = (function (){
var statearr_48364 = [null,null,null,null,null,null,null,null,null];
(statearr_48364[(0)] = cljs$core$async$state_machine__46741__auto__);

(statearr_48364[(1)] = (1));

return statearr_48364;
});
var cljs$core$async$state_machine__46741__auto____1 = (function (state_48350){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_48350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e48365){if((e48365 instanceof Object)){
var ex__46744__auto__ = e48365;
var statearr_48366_48380 = state_48350;
(statearr_48366_48380[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48381 = state_48350;
state_48350 = G__48381;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$state_machine__46741__auto__ = function(state_48350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46741__auto____1.call(this,state_48350);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46741__auto____0;
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46741__auto____1;
return cljs$core$async$state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___48369,out))
})();
var state__46832__auto__ = (function (){var statearr_48367 = f__46831__auto__.call(null);
(statearr_48367[(6)] = c__46830__auto___48369);

return statearr_48367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___48369,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48383 = arguments.length;
switch (G__48383) {
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
var c__46830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto__){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto__){
return (function (state_48446){
var state_val_48447 = (state_48446[(1)]);
if((state_val_48447 === (7))){
var inst_48442 = (state_48446[(2)]);
var state_48446__$1 = state_48446;
var statearr_48448_48486 = state_48446__$1;
(statearr_48448_48486[(2)] = inst_48442);

(statearr_48448_48486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (20))){
var inst_48412 = (state_48446[(7)]);
var inst_48423 = (state_48446[(2)]);
var inst_48424 = cljs.core.next.call(null,inst_48412);
var inst_48398 = inst_48424;
var inst_48399 = null;
var inst_48400 = (0);
var inst_48401 = (0);
var state_48446__$1 = (function (){var statearr_48449 = state_48446;
(statearr_48449[(8)] = inst_48398);

(statearr_48449[(9)] = inst_48400);

(statearr_48449[(10)] = inst_48401);

(statearr_48449[(11)] = inst_48423);

(statearr_48449[(12)] = inst_48399);

return statearr_48449;
})();
var statearr_48450_48487 = state_48446__$1;
(statearr_48450_48487[(2)] = null);

(statearr_48450_48487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (1))){
var state_48446__$1 = state_48446;
var statearr_48451_48488 = state_48446__$1;
(statearr_48451_48488[(2)] = null);

(statearr_48451_48488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (4))){
var inst_48387 = (state_48446[(13)]);
var inst_48387__$1 = (state_48446[(2)]);
var inst_48388 = (inst_48387__$1 == null);
var state_48446__$1 = (function (){var statearr_48452 = state_48446;
(statearr_48452[(13)] = inst_48387__$1);

return statearr_48452;
})();
if(cljs.core.truth_(inst_48388)){
var statearr_48453_48489 = state_48446__$1;
(statearr_48453_48489[(1)] = (5));

} else {
var statearr_48454_48490 = state_48446__$1;
(statearr_48454_48490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (15))){
var state_48446__$1 = state_48446;
var statearr_48458_48491 = state_48446__$1;
(statearr_48458_48491[(2)] = null);

(statearr_48458_48491[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (21))){
var state_48446__$1 = state_48446;
var statearr_48459_48492 = state_48446__$1;
(statearr_48459_48492[(2)] = null);

(statearr_48459_48492[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (13))){
var inst_48398 = (state_48446[(8)]);
var inst_48400 = (state_48446[(9)]);
var inst_48401 = (state_48446[(10)]);
var inst_48399 = (state_48446[(12)]);
var inst_48408 = (state_48446[(2)]);
var inst_48409 = (inst_48401 + (1));
var tmp48455 = inst_48398;
var tmp48456 = inst_48400;
var tmp48457 = inst_48399;
var inst_48398__$1 = tmp48455;
var inst_48399__$1 = tmp48457;
var inst_48400__$1 = tmp48456;
var inst_48401__$1 = inst_48409;
var state_48446__$1 = (function (){var statearr_48460 = state_48446;
(statearr_48460[(8)] = inst_48398__$1);

(statearr_48460[(9)] = inst_48400__$1);

(statearr_48460[(10)] = inst_48401__$1);

(statearr_48460[(14)] = inst_48408);

(statearr_48460[(12)] = inst_48399__$1);

return statearr_48460;
})();
var statearr_48461_48493 = state_48446__$1;
(statearr_48461_48493[(2)] = null);

(statearr_48461_48493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (22))){
var state_48446__$1 = state_48446;
var statearr_48462_48494 = state_48446__$1;
(statearr_48462_48494[(2)] = null);

(statearr_48462_48494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (6))){
var inst_48387 = (state_48446[(13)]);
var inst_48396 = f.call(null,inst_48387);
var inst_48397 = cljs.core.seq.call(null,inst_48396);
var inst_48398 = inst_48397;
var inst_48399 = null;
var inst_48400 = (0);
var inst_48401 = (0);
var state_48446__$1 = (function (){var statearr_48463 = state_48446;
(statearr_48463[(8)] = inst_48398);

(statearr_48463[(9)] = inst_48400);

(statearr_48463[(10)] = inst_48401);

(statearr_48463[(12)] = inst_48399);

return statearr_48463;
})();
var statearr_48464_48495 = state_48446__$1;
(statearr_48464_48495[(2)] = null);

(statearr_48464_48495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (17))){
var inst_48412 = (state_48446[(7)]);
var inst_48416 = cljs.core.chunk_first.call(null,inst_48412);
var inst_48417 = cljs.core.chunk_rest.call(null,inst_48412);
var inst_48418 = cljs.core.count.call(null,inst_48416);
var inst_48398 = inst_48417;
var inst_48399 = inst_48416;
var inst_48400 = inst_48418;
var inst_48401 = (0);
var state_48446__$1 = (function (){var statearr_48465 = state_48446;
(statearr_48465[(8)] = inst_48398);

(statearr_48465[(9)] = inst_48400);

(statearr_48465[(10)] = inst_48401);

(statearr_48465[(12)] = inst_48399);

return statearr_48465;
})();
var statearr_48466_48496 = state_48446__$1;
(statearr_48466_48496[(2)] = null);

(statearr_48466_48496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (3))){
var inst_48444 = (state_48446[(2)]);
var state_48446__$1 = state_48446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48446__$1,inst_48444);
} else {
if((state_val_48447 === (12))){
var inst_48432 = (state_48446[(2)]);
var state_48446__$1 = state_48446;
var statearr_48467_48497 = state_48446__$1;
(statearr_48467_48497[(2)] = inst_48432);

(statearr_48467_48497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (2))){
var state_48446__$1 = state_48446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48446__$1,(4),in$);
} else {
if((state_val_48447 === (23))){
var inst_48440 = (state_48446[(2)]);
var state_48446__$1 = state_48446;
var statearr_48468_48498 = state_48446__$1;
(statearr_48468_48498[(2)] = inst_48440);

(statearr_48468_48498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (19))){
var inst_48427 = (state_48446[(2)]);
var state_48446__$1 = state_48446;
var statearr_48469_48499 = state_48446__$1;
(statearr_48469_48499[(2)] = inst_48427);

(statearr_48469_48499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (11))){
var inst_48398 = (state_48446[(8)]);
var inst_48412 = (state_48446[(7)]);
var inst_48412__$1 = cljs.core.seq.call(null,inst_48398);
var state_48446__$1 = (function (){var statearr_48470 = state_48446;
(statearr_48470[(7)] = inst_48412__$1);

return statearr_48470;
})();
if(inst_48412__$1){
var statearr_48471_48500 = state_48446__$1;
(statearr_48471_48500[(1)] = (14));

} else {
var statearr_48472_48501 = state_48446__$1;
(statearr_48472_48501[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (9))){
var inst_48434 = (state_48446[(2)]);
var inst_48435 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48446__$1 = (function (){var statearr_48473 = state_48446;
(statearr_48473[(15)] = inst_48434);

return statearr_48473;
})();
if(cljs.core.truth_(inst_48435)){
var statearr_48474_48502 = state_48446__$1;
(statearr_48474_48502[(1)] = (21));

} else {
var statearr_48475_48503 = state_48446__$1;
(statearr_48475_48503[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (5))){
var inst_48390 = cljs.core.async.close_BANG_.call(null,out);
var state_48446__$1 = state_48446;
var statearr_48476_48504 = state_48446__$1;
(statearr_48476_48504[(2)] = inst_48390);

(statearr_48476_48504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (14))){
var inst_48412 = (state_48446[(7)]);
var inst_48414 = cljs.core.chunked_seq_QMARK_.call(null,inst_48412);
var state_48446__$1 = state_48446;
if(inst_48414){
var statearr_48477_48505 = state_48446__$1;
(statearr_48477_48505[(1)] = (17));

} else {
var statearr_48478_48506 = state_48446__$1;
(statearr_48478_48506[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (16))){
var inst_48430 = (state_48446[(2)]);
var state_48446__$1 = state_48446;
var statearr_48479_48507 = state_48446__$1;
(statearr_48479_48507[(2)] = inst_48430);

(statearr_48479_48507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48447 === (10))){
var inst_48401 = (state_48446[(10)]);
var inst_48399 = (state_48446[(12)]);
var inst_48406 = cljs.core._nth.call(null,inst_48399,inst_48401);
var state_48446__$1 = state_48446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48446__$1,(13),out,inst_48406);
} else {
if((state_val_48447 === (18))){
var inst_48412 = (state_48446[(7)]);
var inst_48421 = cljs.core.first.call(null,inst_48412);
var state_48446__$1 = state_48446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48446__$1,(20),out,inst_48421);
} else {
if((state_val_48447 === (8))){
var inst_48400 = (state_48446[(9)]);
var inst_48401 = (state_48446[(10)]);
var inst_48403 = (inst_48401 < inst_48400);
var inst_48404 = inst_48403;
var state_48446__$1 = state_48446;
if(cljs.core.truth_(inst_48404)){
var statearr_48480_48508 = state_48446__$1;
(statearr_48480_48508[(1)] = (10));

} else {
var statearr_48481_48509 = state_48446__$1;
(statearr_48481_48509[(1)] = (11));

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
});})(c__46830__auto__))
;
return ((function (switch__46740__auto__,c__46830__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46741__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46741__auto____0 = (function (){
var statearr_48482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48482[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46741__auto__);

(statearr_48482[(1)] = (1));

return statearr_48482;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46741__auto____1 = (function (state_48446){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_48446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e48483){if((e48483 instanceof Object)){
var ex__46744__auto__ = e48483;
var statearr_48484_48510 = state_48446;
(statearr_48484_48510[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48511 = state_48446;
state_48446 = G__48511;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46741__auto__ = function(state_48446){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46741__auto____1.call(this,state_48446);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46741__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46741__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto__))
})();
var state__46832__auto__ = (function (){var statearr_48485 = f__46831__auto__.call(null);
(statearr_48485[(6)] = c__46830__auto__);

return statearr_48485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto__))
);

return c__46830__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48513 = arguments.length;
switch (G__48513) {
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
var G__48516 = arguments.length;
switch (G__48516) {
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
var G__48519 = arguments.length;
switch (G__48519) {
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
var c__46830__auto___48566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___48566,out){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___48566,out){
return (function (state_48543){
var state_val_48544 = (state_48543[(1)]);
if((state_val_48544 === (7))){
var inst_48538 = (state_48543[(2)]);
var state_48543__$1 = state_48543;
var statearr_48545_48567 = state_48543__$1;
(statearr_48545_48567[(2)] = inst_48538);

(statearr_48545_48567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48544 === (1))){
var inst_48520 = null;
var state_48543__$1 = (function (){var statearr_48546 = state_48543;
(statearr_48546[(7)] = inst_48520);

return statearr_48546;
})();
var statearr_48547_48568 = state_48543__$1;
(statearr_48547_48568[(2)] = null);

(statearr_48547_48568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48544 === (4))){
var inst_48523 = (state_48543[(8)]);
var inst_48523__$1 = (state_48543[(2)]);
var inst_48524 = (inst_48523__$1 == null);
var inst_48525 = cljs.core.not.call(null,inst_48524);
var state_48543__$1 = (function (){var statearr_48548 = state_48543;
(statearr_48548[(8)] = inst_48523__$1);

return statearr_48548;
})();
if(inst_48525){
var statearr_48549_48569 = state_48543__$1;
(statearr_48549_48569[(1)] = (5));

} else {
var statearr_48550_48570 = state_48543__$1;
(statearr_48550_48570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48544 === (6))){
var state_48543__$1 = state_48543;
var statearr_48551_48571 = state_48543__$1;
(statearr_48551_48571[(2)] = null);

(statearr_48551_48571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48544 === (3))){
var inst_48540 = (state_48543[(2)]);
var inst_48541 = cljs.core.async.close_BANG_.call(null,out);
var state_48543__$1 = (function (){var statearr_48552 = state_48543;
(statearr_48552[(9)] = inst_48540);

return statearr_48552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48543__$1,inst_48541);
} else {
if((state_val_48544 === (2))){
var state_48543__$1 = state_48543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48543__$1,(4),ch);
} else {
if((state_val_48544 === (11))){
var inst_48523 = (state_48543[(8)]);
var inst_48532 = (state_48543[(2)]);
var inst_48520 = inst_48523;
var state_48543__$1 = (function (){var statearr_48553 = state_48543;
(statearr_48553[(10)] = inst_48532);

(statearr_48553[(7)] = inst_48520);

return statearr_48553;
})();
var statearr_48554_48572 = state_48543__$1;
(statearr_48554_48572[(2)] = null);

(statearr_48554_48572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48544 === (9))){
var inst_48523 = (state_48543[(8)]);
var state_48543__$1 = state_48543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48543__$1,(11),out,inst_48523);
} else {
if((state_val_48544 === (5))){
var inst_48523 = (state_48543[(8)]);
var inst_48520 = (state_48543[(7)]);
var inst_48527 = cljs.core._EQ_.call(null,inst_48523,inst_48520);
var state_48543__$1 = state_48543;
if(inst_48527){
var statearr_48556_48573 = state_48543__$1;
(statearr_48556_48573[(1)] = (8));

} else {
var statearr_48557_48574 = state_48543__$1;
(statearr_48557_48574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48544 === (10))){
var inst_48535 = (state_48543[(2)]);
var state_48543__$1 = state_48543;
var statearr_48558_48575 = state_48543__$1;
(statearr_48558_48575[(2)] = inst_48535);

(statearr_48558_48575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48544 === (8))){
var inst_48520 = (state_48543[(7)]);
var tmp48555 = inst_48520;
var inst_48520__$1 = tmp48555;
var state_48543__$1 = (function (){var statearr_48559 = state_48543;
(statearr_48559[(7)] = inst_48520__$1);

return statearr_48559;
})();
var statearr_48560_48576 = state_48543__$1;
(statearr_48560_48576[(2)] = null);

(statearr_48560_48576[(1)] = (2));


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
});})(c__46830__auto___48566,out))
;
return ((function (switch__46740__auto__,c__46830__auto___48566,out){
return (function() {
var cljs$core$async$state_machine__46741__auto__ = null;
var cljs$core$async$state_machine__46741__auto____0 = (function (){
var statearr_48561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48561[(0)] = cljs$core$async$state_machine__46741__auto__);

(statearr_48561[(1)] = (1));

return statearr_48561;
});
var cljs$core$async$state_machine__46741__auto____1 = (function (state_48543){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_48543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e48562){if((e48562 instanceof Object)){
var ex__46744__auto__ = e48562;
var statearr_48563_48577 = state_48543;
(statearr_48563_48577[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48578 = state_48543;
state_48543 = G__48578;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$state_machine__46741__auto__ = function(state_48543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46741__auto____1.call(this,state_48543);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46741__auto____0;
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46741__auto____1;
return cljs$core$async$state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___48566,out))
})();
var state__46832__auto__ = (function (){var statearr_48564 = f__46831__auto__.call(null);
(statearr_48564[(6)] = c__46830__auto___48566);

return statearr_48564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___48566,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48580 = arguments.length;
switch (G__48580) {
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
var c__46830__auto___48646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___48646,out){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___48646,out){
return (function (state_48618){
var state_val_48619 = (state_48618[(1)]);
if((state_val_48619 === (7))){
var inst_48614 = (state_48618[(2)]);
var state_48618__$1 = state_48618;
var statearr_48620_48647 = state_48618__$1;
(statearr_48620_48647[(2)] = inst_48614);

(statearr_48620_48647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48619 === (1))){
var inst_48581 = (new Array(n));
var inst_48582 = inst_48581;
var inst_48583 = (0);
var state_48618__$1 = (function (){var statearr_48621 = state_48618;
(statearr_48621[(7)] = inst_48583);

(statearr_48621[(8)] = inst_48582);

return statearr_48621;
})();
var statearr_48622_48648 = state_48618__$1;
(statearr_48622_48648[(2)] = null);

(statearr_48622_48648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48619 === (4))){
var inst_48586 = (state_48618[(9)]);
var inst_48586__$1 = (state_48618[(2)]);
var inst_48587 = (inst_48586__$1 == null);
var inst_48588 = cljs.core.not.call(null,inst_48587);
var state_48618__$1 = (function (){var statearr_48623 = state_48618;
(statearr_48623[(9)] = inst_48586__$1);

return statearr_48623;
})();
if(inst_48588){
var statearr_48624_48649 = state_48618__$1;
(statearr_48624_48649[(1)] = (5));

} else {
var statearr_48625_48650 = state_48618__$1;
(statearr_48625_48650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48619 === (15))){
var inst_48608 = (state_48618[(2)]);
var state_48618__$1 = state_48618;
var statearr_48626_48651 = state_48618__$1;
(statearr_48626_48651[(2)] = inst_48608);

(statearr_48626_48651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48619 === (13))){
var state_48618__$1 = state_48618;
var statearr_48627_48652 = state_48618__$1;
(statearr_48627_48652[(2)] = null);

(statearr_48627_48652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48619 === (6))){
var inst_48583 = (state_48618[(7)]);
var inst_48604 = (inst_48583 > (0));
var state_48618__$1 = state_48618;
if(cljs.core.truth_(inst_48604)){
var statearr_48628_48653 = state_48618__$1;
(statearr_48628_48653[(1)] = (12));

} else {
var statearr_48629_48654 = state_48618__$1;
(statearr_48629_48654[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48619 === (3))){
var inst_48616 = (state_48618[(2)]);
var state_48618__$1 = state_48618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48618__$1,inst_48616);
} else {
if((state_val_48619 === (12))){
var inst_48582 = (state_48618[(8)]);
var inst_48606 = cljs.core.vec.call(null,inst_48582);
var state_48618__$1 = state_48618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48618__$1,(15),out,inst_48606);
} else {
if((state_val_48619 === (2))){
var state_48618__$1 = state_48618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48618__$1,(4),ch);
} else {
if((state_val_48619 === (11))){
var inst_48598 = (state_48618[(2)]);
var inst_48599 = (new Array(n));
var inst_48582 = inst_48599;
var inst_48583 = (0);
var state_48618__$1 = (function (){var statearr_48630 = state_48618;
(statearr_48630[(7)] = inst_48583);

(statearr_48630[(8)] = inst_48582);

(statearr_48630[(10)] = inst_48598);

return statearr_48630;
})();
var statearr_48631_48655 = state_48618__$1;
(statearr_48631_48655[(2)] = null);

(statearr_48631_48655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48619 === (9))){
var inst_48582 = (state_48618[(8)]);
var inst_48596 = cljs.core.vec.call(null,inst_48582);
var state_48618__$1 = state_48618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48618__$1,(11),out,inst_48596);
} else {
if((state_val_48619 === (5))){
var inst_48583 = (state_48618[(7)]);
var inst_48586 = (state_48618[(9)]);
var inst_48591 = (state_48618[(11)]);
var inst_48582 = (state_48618[(8)]);
var inst_48590 = (inst_48582[inst_48583] = inst_48586);
var inst_48591__$1 = (inst_48583 + (1));
var inst_48592 = (inst_48591__$1 < n);
var state_48618__$1 = (function (){var statearr_48632 = state_48618;
(statearr_48632[(11)] = inst_48591__$1);

(statearr_48632[(12)] = inst_48590);

return statearr_48632;
})();
if(cljs.core.truth_(inst_48592)){
var statearr_48633_48656 = state_48618__$1;
(statearr_48633_48656[(1)] = (8));

} else {
var statearr_48634_48657 = state_48618__$1;
(statearr_48634_48657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48619 === (14))){
var inst_48611 = (state_48618[(2)]);
var inst_48612 = cljs.core.async.close_BANG_.call(null,out);
var state_48618__$1 = (function (){var statearr_48636 = state_48618;
(statearr_48636[(13)] = inst_48611);

return statearr_48636;
})();
var statearr_48637_48658 = state_48618__$1;
(statearr_48637_48658[(2)] = inst_48612);

(statearr_48637_48658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48619 === (10))){
var inst_48602 = (state_48618[(2)]);
var state_48618__$1 = state_48618;
var statearr_48638_48659 = state_48618__$1;
(statearr_48638_48659[(2)] = inst_48602);

(statearr_48638_48659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48619 === (8))){
var inst_48591 = (state_48618[(11)]);
var inst_48582 = (state_48618[(8)]);
var tmp48635 = inst_48582;
var inst_48582__$1 = tmp48635;
var inst_48583 = inst_48591;
var state_48618__$1 = (function (){var statearr_48639 = state_48618;
(statearr_48639[(7)] = inst_48583);

(statearr_48639[(8)] = inst_48582__$1);

return statearr_48639;
})();
var statearr_48640_48660 = state_48618__$1;
(statearr_48640_48660[(2)] = null);

(statearr_48640_48660[(1)] = (2));


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
});})(c__46830__auto___48646,out))
;
return ((function (switch__46740__auto__,c__46830__auto___48646,out){
return (function() {
var cljs$core$async$state_machine__46741__auto__ = null;
var cljs$core$async$state_machine__46741__auto____0 = (function (){
var statearr_48641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48641[(0)] = cljs$core$async$state_machine__46741__auto__);

(statearr_48641[(1)] = (1));

return statearr_48641;
});
var cljs$core$async$state_machine__46741__auto____1 = (function (state_48618){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_48618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e48642){if((e48642 instanceof Object)){
var ex__46744__auto__ = e48642;
var statearr_48643_48661 = state_48618;
(statearr_48643_48661[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48662 = state_48618;
state_48618 = G__48662;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$state_machine__46741__auto__ = function(state_48618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46741__auto____1.call(this,state_48618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46741__auto____0;
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46741__auto____1;
return cljs$core$async$state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___48646,out))
})();
var state__46832__auto__ = (function (){var statearr_48644 = f__46831__auto__.call(null);
(statearr_48644[(6)] = c__46830__auto___48646);

return statearr_48644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___48646,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48664 = arguments.length;
switch (G__48664) {
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
var c__46830__auto___48734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___48734,out){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___48734,out){
return (function (state_48706){
var state_val_48707 = (state_48706[(1)]);
if((state_val_48707 === (7))){
var inst_48702 = (state_48706[(2)]);
var state_48706__$1 = state_48706;
var statearr_48708_48735 = state_48706__$1;
(statearr_48708_48735[(2)] = inst_48702);

(statearr_48708_48735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48707 === (1))){
var inst_48665 = [];
var inst_48666 = inst_48665;
var inst_48667 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48706__$1 = (function (){var statearr_48709 = state_48706;
(statearr_48709[(7)] = inst_48666);

(statearr_48709[(8)] = inst_48667);

return statearr_48709;
})();
var statearr_48710_48736 = state_48706__$1;
(statearr_48710_48736[(2)] = null);

(statearr_48710_48736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48707 === (4))){
var inst_48670 = (state_48706[(9)]);
var inst_48670__$1 = (state_48706[(2)]);
var inst_48671 = (inst_48670__$1 == null);
var inst_48672 = cljs.core.not.call(null,inst_48671);
var state_48706__$1 = (function (){var statearr_48711 = state_48706;
(statearr_48711[(9)] = inst_48670__$1);

return statearr_48711;
})();
if(inst_48672){
var statearr_48712_48737 = state_48706__$1;
(statearr_48712_48737[(1)] = (5));

} else {
var statearr_48713_48738 = state_48706__$1;
(statearr_48713_48738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48707 === (15))){
var inst_48696 = (state_48706[(2)]);
var state_48706__$1 = state_48706;
var statearr_48714_48739 = state_48706__$1;
(statearr_48714_48739[(2)] = inst_48696);

(statearr_48714_48739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48707 === (13))){
var state_48706__$1 = state_48706;
var statearr_48715_48740 = state_48706__$1;
(statearr_48715_48740[(2)] = null);

(statearr_48715_48740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48707 === (6))){
var inst_48666 = (state_48706[(7)]);
var inst_48691 = inst_48666.length;
var inst_48692 = (inst_48691 > (0));
var state_48706__$1 = state_48706;
if(cljs.core.truth_(inst_48692)){
var statearr_48716_48741 = state_48706__$1;
(statearr_48716_48741[(1)] = (12));

} else {
var statearr_48717_48742 = state_48706__$1;
(statearr_48717_48742[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48707 === (3))){
var inst_48704 = (state_48706[(2)]);
var state_48706__$1 = state_48706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48706__$1,inst_48704);
} else {
if((state_val_48707 === (12))){
var inst_48666 = (state_48706[(7)]);
var inst_48694 = cljs.core.vec.call(null,inst_48666);
var state_48706__$1 = state_48706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48706__$1,(15),out,inst_48694);
} else {
if((state_val_48707 === (2))){
var state_48706__$1 = state_48706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48706__$1,(4),ch);
} else {
if((state_val_48707 === (11))){
var inst_48674 = (state_48706[(10)]);
var inst_48670 = (state_48706[(9)]);
var inst_48684 = (state_48706[(2)]);
var inst_48685 = [];
var inst_48686 = inst_48685.push(inst_48670);
var inst_48666 = inst_48685;
var inst_48667 = inst_48674;
var state_48706__$1 = (function (){var statearr_48718 = state_48706;
(statearr_48718[(11)] = inst_48684);

(statearr_48718[(7)] = inst_48666);

(statearr_48718[(12)] = inst_48686);

(statearr_48718[(8)] = inst_48667);

return statearr_48718;
})();
var statearr_48719_48743 = state_48706__$1;
(statearr_48719_48743[(2)] = null);

(statearr_48719_48743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48707 === (9))){
var inst_48666 = (state_48706[(7)]);
var inst_48682 = cljs.core.vec.call(null,inst_48666);
var state_48706__$1 = state_48706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48706__$1,(11),out,inst_48682);
} else {
if((state_val_48707 === (5))){
var inst_48674 = (state_48706[(10)]);
var inst_48667 = (state_48706[(8)]);
var inst_48670 = (state_48706[(9)]);
var inst_48674__$1 = f.call(null,inst_48670);
var inst_48675 = cljs.core._EQ_.call(null,inst_48674__$1,inst_48667);
var inst_48676 = cljs.core.keyword_identical_QMARK_.call(null,inst_48667,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48677 = (inst_48675) || (inst_48676);
var state_48706__$1 = (function (){var statearr_48720 = state_48706;
(statearr_48720[(10)] = inst_48674__$1);

return statearr_48720;
})();
if(cljs.core.truth_(inst_48677)){
var statearr_48721_48744 = state_48706__$1;
(statearr_48721_48744[(1)] = (8));

} else {
var statearr_48722_48745 = state_48706__$1;
(statearr_48722_48745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48707 === (14))){
var inst_48699 = (state_48706[(2)]);
var inst_48700 = cljs.core.async.close_BANG_.call(null,out);
var state_48706__$1 = (function (){var statearr_48724 = state_48706;
(statearr_48724[(13)] = inst_48699);

return statearr_48724;
})();
var statearr_48725_48746 = state_48706__$1;
(statearr_48725_48746[(2)] = inst_48700);

(statearr_48725_48746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48707 === (10))){
var inst_48689 = (state_48706[(2)]);
var state_48706__$1 = state_48706;
var statearr_48726_48747 = state_48706__$1;
(statearr_48726_48747[(2)] = inst_48689);

(statearr_48726_48747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48707 === (8))){
var inst_48666 = (state_48706[(7)]);
var inst_48674 = (state_48706[(10)]);
var inst_48670 = (state_48706[(9)]);
var inst_48679 = inst_48666.push(inst_48670);
var tmp48723 = inst_48666;
var inst_48666__$1 = tmp48723;
var inst_48667 = inst_48674;
var state_48706__$1 = (function (){var statearr_48727 = state_48706;
(statearr_48727[(7)] = inst_48666__$1);

(statearr_48727[(14)] = inst_48679);

(statearr_48727[(8)] = inst_48667);

return statearr_48727;
})();
var statearr_48728_48748 = state_48706__$1;
(statearr_48728_48748[(2)] = null);

(statearr_48728_48748[(1)] = (2));


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
});})(c__46830__auto___48734,out))
;
return ((function (switch__46740__auto__,c__46830__auto___48734,out){
return (function() {
var cljs$core$async$state_machine__46741__auto__ = null;
var cljs$core$async$state_machine__46741__auto____0 = (function (){
var statearr_48729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48729[(0)] = cljs$core$async$state_machine__46741__auto__);

(statearr_48729[(1)] = (1));

return statearr_48729;
});
var cljs$core$async$state_machine__46741__auto____1 = (function (state_48706){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_48706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e48730){if((e48730 instanceof Object)){
var ex__46744__auto__ = e48730;
var statearr_48731_48749 = state_48706;
(statearr_48731_48749[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48750 = state_48706;
state_48706 = G__48750;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
cljs$core$async$state_machine__46741__auto__ = function(state_48706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46741__auto____1.call(this,state_48706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46741__auto____0;
cljs$core$async$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46741__auto____1;
return cljs$core$async$state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___48734,out))
})();
var state__46832__auto__ = (function (){var statearr_48732 = f__46831__auto__.call(null);
(statearr_48732[(6)] = c__46830__auto___48734);

return statearr_48732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___48734,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1507757467188
