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
var G__47222 = arguments.length;
switch (G__47222) {
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
if(typeof cljs.core.async.t_cljs$core$async47223 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47223 = (function (f,blockable,meta47224){
this.f = f;
this.blockable = blockable;
this.meta47224 = meta47224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47225,meta47224__$1){
var self__ = this;
var _47225__$1 = this;
return (new cljs.core.async.t_cljs$core$async47223(self__.f,self__.blockable,meta47224__$1));
});

cljs.core.async.t_cljs$core$async47223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47225){
var self__ = this;
var _47225__$1 = this;
return self__.meta47224;
});

cljs.core.async.t_cljs$core$async47223.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47223.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47223.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47223.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47224","meta47224",-2041003841,null)], null);
});

cljs.core.async.t_cljs$core$async47223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47223";

cljs.core.async.t_cljs$core$async47223.cljs$lang$ctorPrWriter = (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async47223");
});

cljs.core.async.__GT_t_cljs$core$async47223 = (function cljs$core$async$__GT_t_cljs$core$async47223(f__$1,blockable__$1,meta47224){
return (new cljs.core.async.t_cljs$core$async47223(f__$1,blockable__$1,meta47224));
});

}

return (new cljs.core.async.t_cljs$core$async47223(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47229 = arguments.length;
switch (G__47229) {
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
var G__47232 = arguments.length;
switch (G__47232) {
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
var G__47235 = arguments.length;
switch (G__47235) {
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
var val_47237 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47237);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47237,ret){
return (function (){
return fn1.call(null,val_47237);
});})(val_47237,ret))
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
var G__47239 = arguments.length;
switch (G__47239) {
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
var n__31282__auto___47241 = n;
var x_47242 = (0);
while(true){
if((x_47242 < n__31282__auto___47241)){
(a[x_47242] = (0));

var G__47243 = (x_47242 + (1));
x_47242 = G__47243;
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

var G__47244 = (i + (1));
i = G__47244;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47245 = (function (flag,meta47246){
this.flag = flag;
this.meta47246 = meta47246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47247,meta47246__$1){
var self__ = this;
var _47247__$1 = this;
return (new cljs.core.async.t_cljs$core$async47245(self__.flag,meta47246__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47247){
var self__ = this;
var _47247__$1 = this;
return self__.meta47246;
});})(flag))
;

cljs.core.async.t_cljs$core$async47245.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47245.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47245.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47245.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47245.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47246","meta47246",-936653561,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47245";

cljs.core.async.t_cljs$core$async47245.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async47245");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47245 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47245(flag__$1,meta47246){
return (new cljs.core.async.t_cljs$core$async47245(flag__$1,meta47246));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47245(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47248 = (function (flag,cb,meta47249){
this.flag = flag;
this.cb = cb;
this.meta47249 = meta47249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47250,meta47249__$1){
var self__ = this;
var _47250__$1 = this;
return (new cljs.core.async.t_cljs$core$async47248(self__.flag,self__.cb,meta47249__$1));
});

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47250){
var self__ = this;
var _47250__$1 = this;
return self__.meta47249;
});

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47249","meta47249",-1112164570,null)], null);
});

cljs.core.async.t_cljs$core$async47248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47248";

cljs.core.async.t_cljs$core$async47248.cljs$lang$ctorPrWriter = (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async47248");
});

cljs.core.async.__GT_t_cljs$core$async47248 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47248(flag__$1,cb__$1,meta47249){
return (new cljs.core.async.t_cljs$core$async47248(flag__$1,cb__$1,meta47249));
});

}

return (new cljs.core.async.t_cljs$core$async47248(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__47251_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47251_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47252_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47252_SHARP_,port], null));
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
var G__47253 = (i + (1));
i = G__47253;
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
var len__31516__auto___47259 = arguments.length;
var i__31517__auto___47260 = (0);
while(true){
if((i__31517__auto___47260 < len__31516__auto___47259)){
args__31523__auto__.push((arguments[i__31517__auto___47260]));

var G__47261 = (i__31517__auto___47260 + (1));
i__31517__auto___47260 = G__47261;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((1) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31524__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47256){
var map__47257 = p__47256;
var map__47257__$1 = ((((!((map__47257 == null)))?((((map__47257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47257):map__47257);
var opts = map__47257__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47254){
var G__47255 = cljs.core.first.call(null,seq47254);
var seq47254__$1 = cljs.core.next.call(null,seq47254);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47255,seq47254__$1);
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
var G__47263 = arguments.length;
switch (G__47263) {
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
var c__47162__auto___47309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___47309){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___47309){
return (function (state_47287){
var state_val_47288 = (state_47287[(1)]);
if((state_val_47288 === (7))){
var inst_47283 = (state_47287[(2)]);
var state_47287__$1 = state_47287;
var statearr_47289_47310 = state_47287__$1;
(statearr_47289_47310[(2)] = inst_47283);

(statearr_47289_47310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (1))){
var state_47287__$1 = state_47287;
var statearr_47290_47311 = state_47287__$1;
(statearr_47290_47311[(2)] = null);

(statearr_47290_47311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (4))){
var inst_47266 = (state_47287[(7)]);
var inst_47266__$1 = (state_47287[(2)]);
var inst_47267 = (inst_47266__$1 == null);
var state_47287__$1 = (function (){var statearr_47291 = state_47287;
(statearr_47291[(7)] = inst_47266__$1);

return statearr_47291;
})();
if(cljs.core.truth_(inst_47267)){
var statearr_47292_47312 = state_47287__$1;
(statearr_47292_47312[(1)] = (5));

} else {
var statearr_47293_47313 = state_47287__$1;
(statearr_47293_47313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (13))){
var state_47287__$1 = state_47287;
var statearr_47294_47314 = state_47287__$1;
(statearr_47294_47314[(2)] = null);

(statearr_47294_47314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (6))){
var inst_47266 = (state_47287[(7)]);
var state_47287__$1 = state_47287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47287__$1,(11),to,inst_47266);
} else {
if((state_val_47288 === (3))){
var inst_47285 = (state_47287[(2)]);
var state_47287__$1 = state_47287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47287__$1,inst_47285);
} else {
if((state_val_47288 === (12))){
var state_47287__$1 = state_47287;
var statearr_47295_47315 = state_47287__$1;
(statearr_47295_47315[(2)] = null);

(statearr_47295_47315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (2))){
var state_47287__$1 = state_47287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47287__$1,(4),from);
} else {
if((state_val_47288 === (11))){
var inst_47276 = (state_47287[(2)]);
var state_47287__$1 = state_47287;
if(cljs.core.truth_(inst_47276)){
var statearr_47296_47316 = state_47287__$1;
(statearr_47296_47316[(1)] = (12));

} else {
var statearr_47297_47317 = state_47287__$1;
(statearr_47297_47317[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (9))){
var state_47287__$1 = state_47287;
var statearr_47298_47318 = state_47287__$1;
(statearr_47298_47318[(2)] = null);

(statearr_47298_47318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (5))){
var state_47287__$1 = state_47287;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47299_47319 = state_47287__$1;
(statearr_47299_47319[(1)] = (8));

} else {
var statearr_47300_47320 = state_47287__$1;
(statearr_47300_47320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (14))){
var inst_47281 = (state_47287[(2)]);
var state_47287__$1 = state_47287;
var statearr_47301_47321 = state_47287__$1;
(statearr_47301_47321[(2)] = inst_47281);

(statearr_47301_47321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (10))){
var inst_47273 = (state_47287[(2)]);
var state_47287__$1 = state_47287;
var statearr_47302_47322 = state_47287__$1;
(statearr_47302_47322[(2)] = inst_47273);

(statearr_47302_47322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (8))){
var inst_47270 = cljs.core.async.close_BANG_.call(null,to);
var state_47287__$1 = state_47287;
var statearr_47303_47323 = state_47287__$1;
(statearr_47303_47323[(2)] = inst_47270);

(statearr_47303_47323[(1)] = (10));


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
});})(c__47162__auto___47309))
;
return ((function (switch__47072__auto__,c__47162__auto___47309){
return (function() {
var cljs$core$async$state_machine__47073__auto__ = null;
var cljs$core$async$state_machine__47073__auto____0 = (function (){
var statearr_47304 = [null,null,null,null,null,null,null,null];
(statearr_47304[(0)] = cljs$core$async$state_machine__47073__auto__);

(statearr_47304[(1)] = (1));

return statearr_47304;
});
var cljs$core$async$state_machine__47073__auto____1 = (function (state_47287){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_47287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e47305){if((e47305 instanceof Object)){
var ex__47076__auto__ = e47305;
var statearr_47306_47324 = state_47287;
(statearr_47306_47324[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47325 = state_47287;
state_47287 = G__47325;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$state_machine__47073__auto__ = function(state_47287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47073__auto____1.call(this,state_47287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47073__auto____0;
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47073__auto____1;
return cljs$core$async$state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___47309))
})();
var state__47164__auto__ = (function (){var statearr_47307 = f__47163__auto__.call(null);
(statearr_47307[(6)] = c__47162__auto___47309);

return statearr_47307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___47309))
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
return (function (p__47326){
var vec__47327 = p__47326;
var v = cljs.core.nth.call(null,vec__47327,(0),null);
var p = cljs.core.nth.call(null,vec__47327,(1),null);
var job = vec__47327;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__47162__auto___47498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___47498,res,vec__47327,v,p,job,jobs,results){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___47498,res,vec__47327,v,p,job,jobs,results){
return (function (state_47334){
var state_val_47335 = (state_47334[(1)]);
if((state_val_47335 === (1))){
var state_47334__$1 = state_47334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47334__$1,(2),res,v);
} else {
if((state_val_47335 === (2))){
var inst_47331 = (state_47334[(2)]);
var inst_47332 = cljs.core.async.close_BANG_.call(null,res);
var state_47334__$1 = (function (){var statearr_47336 = state_47334;
(statearr_47336[(7)] = inst_47331);

return statearr_47336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47334__$1,inst_47332);
} else {
return null;
}
}
});})(c__47162__auto___47498,res,vec__47327,v,p,job,jobs,results))
;
return ((function (switch__47072__auto__,c__47162__auto___47498,res,vec__47327,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0 = (function (){
var statearr_47337 = [null,null,null,null,null,null,null,null];
(statearr_47337[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__);

(statearr_47337[(1)] = (1));

return statearr_47337;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1 = (function (state_47334){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_47334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e47338){if((e47338 instanceof Object)){
var ex__47076__auto__ = e47338;
var statearr_47339_47499 = state_47334;
(statearr_47339_47499[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47500 = state_47334;
state_47334 = G__47500;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__ = function(state_47334){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1.call(this,state_47334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___47498,res,vec__47327,v,p,job,jobs,results))
})();
var state__47164__auto__ = (function (){var statearr_47340 = f__47163__auto__.call(null);
(statearr_47340[(6)] = c__47162__auto___47498);

return statearr_47340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___47498,res,vec__47327,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47341){
var vec__47342 = p__47341;
var v = cljs.core.nth.call(null,vec__47342,(0),null);
var p = cljs.core.nth.call(null,vec__47342,(1),null);
var job = vec__47342;
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
var n__31282__auto___47501 = n;
var __47502 = (0);
while(true){
if((__47502 < n__31282__auto___47501)){
var G__47345_47503 = type;
var G__47345_47504__$1 = (((G__47345_47503 instanceof cljs.core.Keyword))?G__47345_47503.fqn:null);
switch (G__47345_47504__$1) {
case "compute":
var c__47162__auto___47506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47502,c__47162__auto___47506,G__47345_47503,G__47345_47504__$1,n__31282__auto___47501,jobs,results,process,async){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (__47502,c__47162__auto___47506,G__47345_47503,G__47345_47504__$1,n__31282__auto___47501,jobs,results,process,async){
return (function (state_47358){
var state_val_47359 = (state_47358[(1)]);
if((state_val_47359 === (1))){
var state_47358__$1 = state_47358;
var statearr_47360_47507 = state_47358__$1;
(statearr_47360_47507[(2)] = null);

(statearr_47360_47507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47359 === (2))){
var state_47358__$1 = state_47358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47358__$1,(4),jobs);
} else {
if((state_val_47359 === (3))){
var inst_47356 = (state_47358[(2)]);
var state_47358__$1 = state_47358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47358__$1,inst_47356);
} else {
if((state_val_47359 === (4))){
var inst_47348 = (state_47358[(2)]);
var inst_47349 = process.call(null,inst_47348);
var state_47358__$1 = state_47358;
if(cljs.core.truth_(inst_47349)){
var statearr_47361_47508 = state_47358__$1;
(statearr_47361_47508[(1)] = (5));

} else {
var statearr_47362_47509 = state_47358__$1;
(statearr_47362_47509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47359 === (5))){
var state_47358__$1 = state_47358;
var statearr_47363_47510 = state_47358__$1;
(statearr_47363_47510[(2)] = null);

(statearr_47363_47510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47359 === (6))){
var state_47358__$1 = state_47358;
var statearr_47364_47511 = state_47358__$1;
(statearr_47364_47511[(2)] = null);

(statearr_47364_47511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47359 === (7))){
var inst_47354 = (state_47358[(2)]);
var state_47358__$1 = state_47358;
var statearr_47365_47512 = state_47358__$1;
(statearr_47365_47512[(2)] = inst_47354);

(statearr_47365_47512[(1)] = (3));


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
});})(__47502,c__47162__auto___47506,G__47345_47503,G__47345_47504__$1,n__31282__auto___47501,jobs,results,process,async))
;
return ((function (__47502,switch__47072__auto__,c__47162__auto___47506,G__47345_47503,G__47345_47504__$1,n__31282__auto___47501,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0 = (function (){
var statearr_47366 = [null,null,null,null,null,null,null];
(statearr_47366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__);

(statearr_47366[(1)] = (1));

return statearr_47366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1 = (function (state_47358){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_47358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e47367){if((e47367 instanceof Object)){
var ex__47076__auto__ = e47367;
var statearr_47368_47513 = state_47358;
(statearr_47368_47513[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47514 = state_47358;
state_47358 = G__47514;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__ = function(state_47358){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1.call(this,state_47358);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__;
})()
;})(__47502,switch__47072__auto__,c__47162__auto___47506,G__47345_47503,G__47345_47504__$1,n__31282__auto___47501,jobs,results,process,async))
})();
var state__47164__auto__ = (function (){var statearr_47369 = f__47163__auto__.call(null);
(statearr_47369[(6)] = c__47162__auto___47506);

return statearr_47369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(__47502,c__47162__auto___47506,G__47345_47503,G__47345_47504__$1,n__31282__auto___47501,jobs,results,process,async))
);


break;
case "async":
var c__47162__auto___47515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47502,c__47162__auto___47515,G__47345_47503,G__47345_47504__$1,n__31282__auto___47501,jobs,results,process,async){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (__47502,c__47162__auto___47515,G__47345_47503,G__47345_47504__$1,n__31282__auto___47501,jobs,results,process,async){
return (function (state_47382){
var state_val_47383 = (state_47382[(1)]);
if((state_val_47383 === (1))){
var state_47382__$1 = state_47382;
var statearr_47384_47516 = state_47382__$1;
(statearr_47384_47516[(2)] = null);

(statearr_47384_47516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47383 === (2))){
var state_47382__$1 = state_47382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47382__$1,(4),jobs);
} else {
if((state_val_47383 === (3))){
var inst_47380 = (state_47382[(2)]);
var state_47382__$1 = state_47382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47382__$1,inst_47380);
} else {
if((state_val_47383 === (4))){
var inst_47372 = (state_47382[(2)]);
var inst_47373 = async.call(null,inst_47372);
var state_47382__$1 = state_47382;
if(cljs.core.truth_(inst_47373)){
var statearr_47385_47517 = state_47382__$1;
(statearr_47385_47517[(1)] = (5));

} else {
var statearr_47386_47518 = state_47382__$1;
(statearr_47386_47518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47383 === (5))){
var state_47382__$1 = state_47382;
var statearr_47387_47519 = state_47382__$1;
(statearr_47387_47519[(2)] = null);

(statearr_47387_47519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47383 === (6))){
var state_47382__$1 = state_47382;
var statearr_47388_47520 = state_47382__$1;
(statearr_47388_47520[(2)] = null);

(statearr_47388_47520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47383 === (7))){
var inst_47378 = (state_47382[(2)]);
var state_47382__$1 = state_47382;
var statearr_47389_47521 = state_47382__$1;
(statearr_47389_47521[(2)] = inst_47378);

(statearr_47389_47521[(1)] = (3));


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
});})(__47502,c__47162__auto___47515,G__47345_47503,G__47345_47504__$1,n__31282__auto___47501,jobs,results,process,async))
;
return ((function (__47502,switch__47072__auto__,c__47162__auto___47515,G__47345_47503,G__47345_47504__$1,n__31282__auto___47501,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0 = (function (){
var statearr_47390 = [null,null,null,null,null,null,null];
(statearr_47390[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__);

(statearr_47390[(1)] = (1));

return statearr_47390;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1 = (function (state_47382){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_47382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e47391){if((e47391 instanceof Object)){
var ex__47076__auto__ = e47391;
var statearr_47392_47522 = state_47382;
(statearr_47392_47522[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47523 = state_47382;
state_47382 = G__47523;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__ = function(state_47382){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1.call(this,state_47382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__;
})()
;})(__47502,switch__47072__auto__,c__47162__auto___47515,G__47345_47503,G__47345_47504__$1,n__31282__auto___47501,jobs,results,process,async))
})();
var state__47164__auto__ = (function (){var statearr_47393 = f__47163__auto__.call(null);
(statearr_47393[(6)] = c__47162__auto___47515);

return statearr_47393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(__47502,c__47162__auto___47515,G__47345_47503,G__47345_47504__$1,n__31282__auto___47501,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47345_47504__$1)].join('')));

}

var G__47524 = (__47502 + (1));
__47502 = G__47524;
continue;
} else {
}
break;
}

var c__47162__auto___47525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___47525,jobs,results,process,async){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___47525,jobs,results,process,async){
return (function (state_47415){
var state_val_47416 = (state_47415[(1)]);
if((state_val_47416 === (1))){
var state_47415__$1 = state_47415;
var statearr_47417_47526 = state_47415__$1;
(statearr_47417_47526[(2)] = null);

(statearr_47417_47526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47416 === (2))){
var state_47415__$1 = state_47415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47415__$1,(4),from);
} else {
if((state_val_47416 === (3))){
var inst_47413 = (state_47415[(2)]);
var state_47415__$1 = state_47415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47415__$1,inst_47413);
} else {
if((state_val_47416 === (4))){
var inst_47396 = (state_47415[(7)]);
var inst_47396__$1 = (state_47415[(2)]);
var inst_47397 = (inst_47396__$1 == null);
var state_47415__$1 = (function (){var statearr_47418 = state_47415;
(statearr_47418[(7)] = inst_47396__$1);

return statearr_47418;
})();
if(cljs.core.truth_(inst_47397)){
var statearr_47419_47527 = state_47415__$1;
(statearr_47419_47527[(1)] = (5));

} else {
var statearr_47420_47528 = state_47415__$1;
(statearr_47420_47528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47416 === (5))){
var inst_47399 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47415__$1 = state_47415;
var statearr_47421_47529 = state_47415__$1;
(statearr_47421_47529[(2)] = inst_47399);

(statearr_47421_47529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47416 === (6))){
var inst_47401 = (state_47415[(8)]);
var inst_47396 = (state_47415[(7)]);
var inst_47401__$1 = cljs.core.async.chan.call(null,(1));
var inst_47402 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47403 = [inst_47396,inst_47401__$1];
var inst_47404 = (new cljs.core.PersistentVector(null,2,(5),inst_47402,inst_47403,null));
var state_47415__$1 = (function (){var statearr_47422 = state_47415;
(statearr_47422[(8)] = inst_47401__$1);

return statearr_47422;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47415__$1,(8),jobs,inst_47404);
} else {
if((state_val_47416 === (7))){
var inst_47411 = (state_47415[(2)]);
var state_47415__$1 = state_47415;
var statearr_47423_47530 = state_47415__$1;
(statearr_47423_47530[(2)] = inst_47411);

(statearr_47423_47530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47416 === (8))){
var inst_47401 = (state_47415[(8)]);
var inst_47406 = (state_47415[(2)]);
var state_47415__$1 = (function (){var statearr_47424 = state_47415;
(statearr_47424[(9)] = inst_47406);

return statearr_47424;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47415__$1,(9),results,inst_47401);
} else {
if((state_val_47416 === (9))){
var inst_47408 = (state_47415[(2)]);
var state_47415__$1 = (function (){var statearr_47425 = state_47415;
(statearr_47425[(10)] = inst_47408);

return statearr_47425;
})();
var statearr_47426_47531 = state_47415__$1;
(statearr_47426_47531[(2)] = null);

(statearr_47426_47531[(1)] = (2));


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
});})(c__47162__auto___47525,jobs,results,process,async))
;
return ((function (switch__47072__auto__,c__47162__auto___47525,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0 = (function (){
var statearr_47427 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47427[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__);

(statearr_47427[(1)] = (1));

return statearr_47427;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1 = (function (state_47415){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_47415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e47428){if((e47428 instanceof Object)){
var ex__47076__auto__ = e47428;
var statearr_47429_47532 = state_47415;
(statearr_47429_47532[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47533 = state_47415;
state_47415 = G__47533;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__ = function(state_47415){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1.call(this,state_47415);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___47525,jobs,results,process,async))
})();
var state__47164__auto__ = (function (){var statearr_47430 = f__47163__auto__.call(null);
(statearr_47430[(6)] = c__47162__auto___47525);

return statearr_47430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___47525,jobs,results,process,async))
);


var c__47162__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto__,jobs,results,process,async){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto__,jobs,results,process,async){
return (function (state_47468){
var state_val_47469 = (state_47468[(1)]);
if((state_val_47469 === (7))){
var inst_47464 = (state_47468[(2)]);
var state_47468__$1 = state_47468;
var statearr_47470_47534 = state_47468__$1;
(statearr_47470_47534[(2)] = inst_47464);

(statearr_47470_47534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (20))){
var state_47468__$1 = state_47468;
var statearr_47471_47535 = state_47468__$1;
(statearr_47471_47535[(2)] = null);

(statearr_47471_47535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (1))){
var state_47468__$1 = state_47468;
var statearr_47472_47536 = state_47468__$1;
(statearr_47472_47536[(2)] = null);

(statearr_47472_47536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (4))){
var inst_47433 = (state_47468[(7)]);
var inst_47433__$1 = (state_47468[(2)]);
var inst_47434 = (inst_47433__$1 == null);
var state_47468__$1 = (function (){var statearr_47473 = state_47468;
(statearr_47473[(7)] = inst_47433__$1);

return statearr_47473;
})();
if(cljs.core.truth_(inst_47434)){
var statearr_47474_47537 = state_47468__$1;
(statearr_47474_47537[(1)] = (5));

} else {
var statearr_47475_47538 = state_47468__$1;
(statearr_47475_47538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (15))){
var inst_47446 = (state_47468[(8)]);
var state_47468__$1 = state_47468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47468__$1,(18),to,inst_47446);
} else {
if((state_val_47469 === (21))){
var inst_47459 = (state_47468[(2)]);
var state_47468__$1 = state_47468;
var statearr_47476_47539 = state_47468__$1;
(statearr_47476_47539[(2)] = inst_47459);

(statearr_47476_47539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (13))){
var inst_47461 = (state_47468[(2)]);
var state_47468__$1 = (function (){var statearr_47477 = state_47468;
(statearr_47477[(9)] = inst_47461);

return statearr_47477;
})();
var statearr_47478_47540 = state_47468__$1;
(statearr_47478_47540[(2)] = null);

(statearr_47478_47540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (6))){
var inst_47433 = (state_47468[(7)]);
var state_47468__$1 = state_47468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47468__$1,(11),inst_47433);
} else {
if((state_val_47469 === (17))){
var inst_47454 = (state_47468[(2)]);
var state_47468__$1 = state_47468;
if(cljs.core.truth_(inst_47454)){
var statearr_47479_47541 = state_47468__$1;
(statearr_47479_47541[(1)] = (19));

} else {
var statearr_47480_47542 = state_47468__$1;
(statearr_47480_47542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (3))){
var inst_47466 = (state_47468[(2)]);
var state_47468__$1 = state_47468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47468__$1,inst_47466);
} else {
if((state_val_47469 === (12))){
var inst_47443 = (state_47468[(10)]);
var state_47468__$1 = state_47468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47468__$1,(14),inst_47443);
} else {
if((state_val_47469 === (2))){
var state_47468__$1 = state_47468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47468__$1,(4),results);
} else {
if((state_val_47469 === (19))){
var state_47468__$1 = state_47468;
var statearr_47481_47543 = state_47468__$1;
(statearr_47481_47543[(2)] = null);

(statearr_47481_47543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (11))){
var inst_47443 = (state_47468[(2)]);
var state_47468__$1 = (function (){var statearr_47482 = state_47468;
(statearr_47482[(10)] = inst_47443);

return statearr_47482;
})();
var statearr_47483_47544 = state_47468__$1;
(statearr_47483_47544[(2)] = null);

(statearr_47483_47544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (9))){
var state_47468__$1 = state_47468;
var statearr_47484_47545 = state_47468__$1;
(statearr_47484_47545[(2)] = null);

(statearr_47484_47545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (5))){
var state_47468__$1 = state_47468;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47485_47546 = state_47468__$1;
(statearr_47485_47546[(1)] = (8));

} else {
var statearr_47486_47547 = state_47468__$1;
(statearr_47486_47547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (14))){
var inst_47446 = (state_47468[(8)]);
var inst_47448 = (state_47468[(11)]);
var inst_47446__$1 = (state_47468[(2)]);
var inst_47447 = (inst_47446__$1 == null);
var inst_47448__$1 = cljs.core.not.call(null,inst_47447);
var state_47468__$1 = (function (){var statearr_47487 = state_47468;
(statearr_47487[(8)] = inst_47446__$1);

(statearr_47487[(11)] = inst_47448__$1);

return statearr_47487;
})();
if(inst_47448__$1){
var statearr_47488_47548 = state_47468__$1;
(statearr_47488_47548[(1)] = (15));

} else {
var statearr_47489_47549 = state_47468__$1;
(statearr_47489_47549[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (16))){
var inst_47448 = (state_47468[(11)]);
var state_47468__$1 = state_47468;
var statearr_47490_47550 = state_47468__$1;
(statearr_47490_47550[(2)] = inst_47448);

(statearr_47490_47550[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (10))){
var inst_47440 = (state_47468[(2)]);
var state_47468__$1 = state_47468;
var statearr_47491_47551 = state_47468__$1;
(statearr_47491_47551[(2)] = inst_47440);

(statearr_47491_47551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (18))){
var inst_47451 = (state_47468[(2)]);
var state_47468__$1 = state_47468;
var statearr_47492_47552 = state_47468__$1;
(statearr_47492_47552[(2)] = inst_47451);

(statearr_47492_47552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (8))){
var inst_47437 = cljs.core.async.close_BANG_.call(null,to);
var state_47468__$1 = state_47468;
var statearr_47493_47553 = state_47468__$1;
(statearr_47493_47553[(2)] = inst_47437);

(statearr_47493_47553[(1)] = (10));


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
});})(c__47162__auto__,jobs,results,process,async))
;
return ((function (switch__47072__auto__,c__47162__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0 = (function (){
var statearr_47494 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47494[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__);

(statearr_47494[(1)] = (1));

return statearr_47494;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1 = (function (state_47468){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_47468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e47495){if((e47495 instanceof Object)){
var ex__47076__auto__ = e47495;
var statearr_47496_47554 = state_47468;
(statearr_47496_47554[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47555 = state_47468;
state_47468 = G__47555;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__ = function(state_47468){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1.call(this,state_47468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47073__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto__,jobs,results,process,async))
})();
var state__47164__auto__ = (function (){var statearr_47497 = f__47163__auto__.call(null);
(statearr_47497[(6)] = c__47162__auto__);

return statearr_47497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto__,jobs,results,process,async))
);

return c__47162__auto__;
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
var G__47557 = arguments.length;
switch (G__47557) {
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
var G__47560 = arguments.length;
switch (G__47560) {
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
var G__47563 = arguments.length;
switch (G__47563) {
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
var c__47162__auto___47612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___47612,tc,fc){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___47612,tc,fc){
return (function (state_47589){
var state_val_47590 = (state_47589[(1)]);
if((state_val_47590 === (7))){
var inst_47585 = (state_47589[(2)]);
var state_47589__$1 = state_47589;
var statearr_47591_47613 = state_47589__$1;
(statearr_47591_47613[(2)] = inst_47585);

(statearr_47591_47613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (1))){
var state_47589__$1 = state_47589;
var statearr_47592_47614 = state_47589__$1;
(statearr_47592_47614[(2)] = null);

(statearr_47592_47614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (4))){
var inst_47566 = (state_47589[(7)]);
var inst_47566__$1 = (state_47589[(2)]);
var inst_47567 = (inst_47566__$1 == null);
var state_47589__$1 = (function (){var statearr_47593 = state_47589;
(statearr_47593[(7)] = inst_47566__$1);

return statearr_47593;
})();
if(cljs.core.truth_(inst_47567)){
var statearr_47594_47615 = state_47589__$1;
(statearr_47594_47615[(1)] = (5));

} else {
var statearr_47595_47616 = state_47589__$1;
(statearr_47595_47616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (13))){
var state_47589__$1 = state_47589;
var statearr_47596_47617 = state_47589__$1;
(statearr_47596_47617[(2)] = null);

(statearr_47596_47617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (6))){
var inst_47566 = (state_47589[(7)]);
var inst_47572 = p.call(null,inst_47566);
var state_47589__$1 = state_47589;
if(cljs.core.truth_(inst_47572)){
var statearr_47597_47618 = state_47589__$1;
(statearr_47597_47618[(1)] = (9));

} else {
var statearr_47598_47619 = state_47589__$1;
(statearr_47598_47619[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (3))){
var inst_47587 = (state_47589[(2)]);
var state_47589__$1 = state_47589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47589__$1,inst_47587);
} else {
if((state_val_47590 === (12))){
var state_47589__$1 = state_47589;
var statearr_47599_47620 = state_47589__$1;
(statearr_47599_47620[(2)] = null);

(statearr_47599_47620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (2))){
var state_47589__$1 = state_47589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47589__$1,(4),ch);
} else {
if((state_val_47590 === (11))){
var inst_47566 = (state_47589[(7)]);
var inst_47576 = (state_47589[(2)]);
var state_47589__$1 = state_47589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47589__$1,(8),inst_47576,inst_47566);
} else {
if((state_val_47590 === (9))){
var state_47589__$1 = state_47589;
var statearr_47600_47621 = state_47589__$1;
(statearr_47600_47621[(2)] = tc);

(statearr_47600_47621[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (5))){
var inst_47569 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47570 = cljs.core.async.close_BANG_.call(null,fc);
var state_47589__$1 = (function (){var statearr_47601 = state_47589;
(statearr_47601[(8)] = inst_47569);

return statearr_47601;
})();
var statearr_47602_47622 = state_47589__$1;
(statearr_47602_47622[(2)] = inst_47570);

(statearr_47602_47622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (14))){
var inst_47583 = (state_47589[(2)]);
var state_47589__$1 = state_47589;
var statearr_47603_47623 = state_47589__$1;
(statearr_47603_47623[(2)] = inst_47583);

(statearr_47603_47623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (10))){
var state_47589__$1 = state_47589;
var statearr_47604_47624 = state_47589__$1;
(statearr_47604_47624[(2)] = fc);

(statearr_47604_47624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (8))){
var inst_47578 = (state_47589[(2)]);
var state_47589__$1 = state_47589;
if(cljs.core.truth_(inst_47578)){
var statearr_47605_47625 = state_47589__$1;
(statearr_47605_47625[(1)] = (12));

} else {
var statearr_47606_47626 = state_47589__$1;
(statearr_47606_47626[(1)] = (13));

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
});})(c__47162__auto___47612,tc,fc))
;
return ((function (switch__47072__auto__,c__47162__auto___47612,tc,fc){
return (function() {
var cljs$core$async$state_machine__47073__auto__ = null;
var cljs$core$async$state_machine__47073__auto____0 = (function (){
var statearr_47607 = [null,null,null,null,null,null,null,null,null];
(statearr_47607[(0)] = cljs$core$async$state_machine__47073__auto__);

(statearr_47607[(1)] = (1));

return statearr_47607;
});
var cljs$core$async$state_machine__47073__auto____1 = (function (state_47589){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_47589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e47608){if((e47608 instanceof Object)){
var ex__47076__auto__ = e47608;
var statearr_47609_47627 = state_47589;
(statearr_47609_47627[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47628 = state_47589;
state_47589 = G__47628;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$state_machine__47073__auto__ = function(state_47589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47073__auto____1.call(this,state_47589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47073__auto____0;
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47073__auto____1;
return cljs$core$async$state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___47612,tc,fc))
})();
var state__47164__auto__ = (function (){var statearr_47610 = f__47163__auto__.call(null);
(statearr_47610[(6)] = c__47162__auto___47612);

return statearr_47610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___47612,tc,fc))
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
var c__47162__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto__){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto__){
return (function (state_47649){
var state_val_47650 = (state_47649[(1)]);
if((state_val_47650 === (7))){
var inst_47645 = (state_47649[(2)]);
var state_47649__$1 = state_47649;
var statearr_47651_47669 = state_47649__$1;
(statearr_47651_47669[(2)] = inst_47645);

(statearr_47651_47669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47650 === (1))){
var inst_47629 = init;
var state_47649__$1 = (function (){var statearr_47652 = state_47649;
(statearr_47652[(7)] = inst_47629);

return statearr_47652;
})();
var statearr_47653_47670 = state_47649__$1;
(statearr_47653_47670[(2)] = null);

(statearr_47653_47670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47650 === (4))){
var inst_47632 = (state_47649[(8)]);
var inst_47632__$1 = (state_47649[(2)]);
var inst_47633 = (inst_47632__$1 == null);
var state_47649__$1 = (function (){var statearr_47654 = state_47649;
(statearr_47654[(8)] = inst_47632__$1);

return statearr_47654;
})();
if(cljs.core.truth_(inst_47633)){
var statearr_47655_47671 = state_47649__$1;
(statearr_47655_47671[(1)] = (5));

} else {
var statearr_47656_47672 = state_47649__$1;
(statearr_47656_47672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47650 === (6))){
var inst_47629 = (state_47649[(7)]);
var inst_47636 = (state_47649[(9)]);
var inst_47632 = (state_47649[(8)]);
var inst_47636__$1 = f.call(null,inst_47629,inst_47632);
var inst_47637 = cljs.core.reduced_QMARK_.call(null,inst_47636__$1);
var state_47649__$1 = (function (){var statearr_47657 = state_47649;
(statearr_47657[(9)] = inst_47636__$1);

return statearr_47657;
})();
if(inst_47637){
var statearr_47658_47673 = state_47649__$1;
(statearr_47658_47673[(1)] = (8));

} else {
var statearr_47659_47674 = state_47649__$1;
(statearr_47659_47674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47650 === (3))){
var inst_47647 = (state_47649[(2)]);
var state_47649__$1 = state_47649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47649__$1,inst_47647);
} else {
if((state_val_47650 === (2))){
var state_47649__$1 = state_47649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47649__$1,(4),ch);
} else {
if((state_val_47650 === (9))){
var inst_47636 = (state_47649[(9)]);
var inst_47629 = inst_47636;
var state_47649__$1 = (function (){var statearr_47660 = state_47649;
(statearr_47660[(7)] = inst_47629);

return statearr_47660;
})();
var statearr_47661_47675 = state_47649__$1;
(statearr_47661_47675[(2)] = null);

(statearr_47661_47675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47650 === (5))){
var inst_47629 = (state_47649[(7)]);
var state_47649__$1 = state_47649;
var statearr_47662_47676 = state_47649__$1;
(statearr_47662_47676[(2)] = inst_47629);

(statearr_47662_47676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47650 === (10))){
var inst_47643 = (state_47649[(2)]);
var state_47649__$1 = state_47649;
var statearr_47663_47677 = state_47649__$1;
(statearr_47663_47677[(2)] = inst_47643);

(statearr_47663_47677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47650 === (8))){
var inst_47636 = (state_47649[(9)]);
var inst_47639 = cljs.core.deref.call(null,inst_47636);
var state_47649__$1 = state_47649;
var statearr_47664_47678 = state_47649__$1;
(statearr_47664_47678[(2)] = inst_47639);

(statearr_47664_47678[(1)] = (10));


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
});})(c__47162__auto__))
;
return ((function (switch__47072__auto__,c__47162__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__47073__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47073__auto____0 = (function (){
var statearr_47665 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47665[(0)] = cljs$core$async$reduce_$_state_machine__47073__auto__);

(statearr_47665[(1)] = (1));

return statearr_47665;
});
var cljs$core$async$reduce_$_state_machine__47073__auto____1 = (function (state_47649){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_47649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e47666){if((e47666 instanceof Object)){
var ex__47076__auto__ = e47666;
var statearr_47667_47679 = state_47649;
(statearr_47667_47679[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47680 = state_47649;
state_47649 = G__47680;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47073__auto__ = function(state_47649){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47073__auto____1.call(this,state_47649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47073__auto____0;
cljs$core$async$reduce_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47073__auto____1;
return cljs$core$async$reduce_$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto__))
})();
var state__47164__auto__ = (function (){var statearr_47668 = f__47163__auto__.call(null);
(statearr_47668[(6)] = c__47162__auto__);

return statearr_47668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto__))
);

return c__47162__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__47162__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto__,f__$1){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto__,f__$1){
return (function (state_47686){
var state_val_47687 = (state_47686[(1)]);
if((state_val_47687 === (1))){
var inst_47681 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47686__$1 = state_47686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47686__$1,(2),inst_47681);
} else {
if((state_val_47687 === (2))){
var inst_47683 = (state_47686[(2)]);
var inst_47684 = f__$1.call(null,inst_47683);
var state_47686__$1 = state_47686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47686__$1,inst_47684);
} else {
return null;
}
}
});})(c__47162__auto__,f__$1))
;
return ((function (switch__47072__auto__,c__47162__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__47073__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47073__auto____0 = (function (){
var statearr_47688 = [null,null,null,null,null,null,null];
(statearr_47688[(0)] = cljs$core$async$transduce_$_state_machine__47073__auto__);

(statearr_47688[(1)] = (1));

return statearr_47688;
});
var cljs$core$async$transduce_$_state_machine__47073__auto____1 = (function (state_47686){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_47686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e47689){if((e47689 instanceof Object)){
var ex__47076__auto__ = e47689;
var statearr_47690_47692 = state_47686;
(statearr_47690_47692[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47693 = state_47686;
state_47686 = G__47693;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47073__auto__ = function(state_47686){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47073__auto____1.call(this,state_47686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47073__auto____0;
cljs$core$async$transduce_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47073__auto____1;
return cljs$core$async$transduce_$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto__,f__$1))
})();
var state__47164__auto__ = (function (){var statearr_47691 = f__47163__auto__.call(null);
(statearr_47691[(6)] = c__47162__auto__);

return statearr_47691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto__,f__$1))
);

return c__47162__auto__;
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
var G__47695 = arguments.length;
switch (G__47695) {
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
var c__47162__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto__){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto__){
return (function (state_47720){
var state_val_47721 = (state_47720[(1)]);
if((state_val_47721 === (7))){
var inst_47702 = (state_47720[(2)]);
var state_47720__$1 = state_47720;
var statearr_47722_47743 = state_47720__$1;
(statearr_47722_47743[(2)] = inst_47702);

(statearr_47722_47743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47721 === (1))){
var inst_47696 = cljs.core.seq.call(null,coll);
var inst_47697 = inst_47696;
var state_47720__$1 = (function (){var statearr_47723 = state_47720;
(statearr_47723[(7)] = inst_47697);

return statearr_47723;
})();
var statearr_47724_47744 = state_47720__$1;
(statearr_47724_47744[(2)] = null);

(statearr_47724_47744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47721 === (4))){
var inst_47697 = (state_47720[(7)]);
var inst_47700 = cljs.core.first.call(null,inst_47697);
var state_47720__$1 = state_47720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47720__$1,(7),ch,inst_47700);
} else {
if((state_val_47721 === (13))){
var inst_47714 = (state_47720[(2)]);
var state_47720__$1 = state_47720;
var statearr_47725_47745 = state_47720__$1;
(statearr_47725_47745[(2)] = inst_47714);

(statearr_47725_47745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47721 === (6))){
var inst_47705 = (state_47720[(2)]);
var state_47720__$1 = state_47720;
if(cljs.core.truth_(inst_47705)){
var statearr_47726_47746 = state_47720__$1;
(statearr_47726_47746[(1)] = (8));

} else {
var statearr_47727_47747 = state_47720__$1;
(statearr_47727_47747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47721 === (3))){
var inst_47718 = (state_47720[(2)]);
var state_47720__$1 = state_47720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47720__$1,inst_47718);
} else {
if((state_val_47721 === (12))){
var state_47720__$1 = state_47720;
var statearr_47728_47748 = state_47720__$1;
(statearr_47728_47748[(2)] = null);

(statearr_47728_47748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47721 === (2))){
var inst_47697 = (state_47720[(7)]);
var state_47720__$1 = state_47720;
if(cljs.core.truth_(inst_47697)){
var statearr_47729_47749 = state_47720__$1;
(statearr_47729_47749[(1)] = (4));

} else {
var statearr_47730_47750 = state_47720__$1;
(statearr_47730_47750[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47721 === (11))){
var inst_47711 = cljs.core.async.close_BANG_.call(null,ch);
var state_47720__$1 = state_47720;
var statearr_47731_47751 = state_47720__$1;
(statearr_47731_47751[(2)] = inst_47711);

(statearr_47731_47751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47721 === (9))){
var state_47720__$1 = state_47720;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47732_47752 = state_47720__$1;
(statearr_47732_47752[(1)] = (11));

} else {
var statearr_47733_47753 = state_47720__$1;
(statearr_47733_47753[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47721 === (5))){
var inst_47697 = (state_47720[(7)]);
var state_47720__$1 = state_47720;
var statearr_47734_47754 = state_47720__$1;
(statearr_47734_47754[(2)] = inst_47697);

(statearr_47734_47754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47721 === (10))){
var inst_47716 = (state_47720[(2)]);
var state_47720__$1 = state_47720;
var statearr_47735_47755 = state_47720__$1;
(statearr_47735_47755[(2)] = inst_47716);

(statearr_47735_47755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47721 === (8))){
var inst_47697 = (state_47720[(7)]);
var inst_47707 = cljs.core.next.call(null,inst_47697);
var inst_47697__$1 = inst_47707;
var state_47720__$1 = (function (){var statearr_47736 = state_47720;
(statearr_47736[(7)] = inst_47697__$1);

return statearr_47736;
})();
var statearr_47737_47756 = state_47720__$1;
(statearr_47737_47756[(2)] = null);

(statearr_47737_47756[(1)] = (2));


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
});})(c__47162__auto__))
;
return ((function (switch__47072__auto__,c__47162__auto__){
return (function() {
var cljs$core$async$state_machine__47073__auto__ = null;
var cljs$core$async$state_machine__47073__auto____0 = (function (){
var statearr_47738 = [null,null,null,null,null,null,null,null];
(statearr_47738[(0)] = cljs$core$async$state_machine__47073__auto__);

(statearr_47738[(1)] = (1));

return statearr_47738;
});
var cljs$core$async$state_machine__47073__auto____1 = (function (state_47720){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_47720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e47739){if((e47739 instanceof Object)){
var ex__47076__auto__ = e47739;
var statearr_47740_47757 = state_47720;
(statearr_47740_47757[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47758 = state_47720;
state_47720 = G__47758;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$state_machine__47073__auto__ = function(state_47720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47073__auto____1.call(this,state_47720);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47073__auto____0;
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47073__auto____1;
return cljs$core$async$state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto__))
})();
var state__47164__auto__ = (function (){var statearr_47741 = f__47163__auto__.call(null);
(statearr_47741[(6)] = c__47162__auto__);

return statearr_47741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto__))
);

return c__47162__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async47759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47759 = (function (ch,cs,meta47760){
this.ch = ch;
this.cs = cs;
this.meta47760 = meta47760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47761,meta47760__$1){
var self__ = this;
var _47761__$1 = this;
return (new cljs.core.async.t_cljs$core$async47759(self__.ch,self__.cs,meta47760__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47761){
var self__ = this;
var _47761__$1 = this;
return self__.meta47760;
});})(cs))
;

cljs.core.async.t_cljs$core$async47759.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47759.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47759.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47759.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47759.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47759.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47759.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47760","meta47760",629667864,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47759";

cljs.core.async.t_cljs$core$async47759.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async47759");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47759 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47759(ch__$1,cs__$1,meta47760){
return (new cljs.core.async.t_cljs$core$async47759(ch__$1,cs__$1,meta47760));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47759(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__47162__auto___47981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___47981,cs,m,dchan,dctr,done){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___47981,cs,m,dchan,dctr,done){
return (function (state_47896){
var state_val_47897 = (state_47896[(1)]);
if((state_val_47897 === (7))){
var inst_47892 = (state_47896[(2)]);
var state_47896__$1 = state_47896;
var statearr_47898_47982 = state_47896__$1;
(statearr_47898_47982[(2)] = inst_47892);

(statearr_47898_47982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (20))){
var inst_47795 = (state_47896[(7)]);
var inst_47807 = cljs.core.first.call(null,inst_47795);
var inst_47808 = cljs.core.nth.call(null,inst_47807,(0),null);
var inst_47809 = cljs.core.nth.call(null,inst_47807,(1),null);
var state_47896__$1 = (function (){var statearr_47899 = state_47896;
(statearr_47899[(8)] = inst_47808);

return statearr_47899;
})();
if(cljs.core.truth_(inst_47809)){
var statearr_47900_47983 = state_47896__$1;
(statearr_47900_47983[(1)] = (22));

} else {
var statearr_47901_47984 = state_47896__$1;
(statearr_47901_47984[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (27))){
var inst_47844 = (state_47896[(9)]);
var inst_47839 = (state_47896[(10)]);
var inst_47764 = (state_47896[(11)]);
var inst_47837 = (state_47896[(12)]);
var inst_47844__$1 = cljs.core._nth.call(null,inst_47837,inst_47839);
var inst_47845 = cljs.core.async.put_BANG_.call(null,inst_47844__$1,inst_47764,done);
var state_47896__$1 = (function (){var statearr_47902 = state_47896;
(statearr_47902[(9)] = inst_47844__$1);

return statearr_47902;
})();
if(cljs.core.truth_(inst_47845)){
var statearr_47903_47985 = state_47896__$1;
(statearr_47903_47985[(1)] = (30));

} else {
var statearr_47904_47986 = state_47896__$1;
(statearr_47904_47986[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (1))){
var state_47896__$1 = state_47896;
var statearr_47905_47987 = state_47896__$1;
(statearr_47905_47987[(2)] = null);

(statearr_47905_47987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (24))){
var inst_47795 = (state_47896[(7)]);
var inst_47814 = (state_47896[(2)]);
var inst_47815 = cljs.core.next.call(null,inst_47795);
var inst_47773 = inst_47815;
var inst_47774 = null;
var inst_47775 = (0);
var inst_47776 = (0);
var state_47896__$1 = (function (){var statearr_47906 = state_47896;
(statearr_47906[(13)] = inst_47773);

(statearr_47906[(14)] = inst_47776);

(statearr_47906[(15)] = inst_47814);

(statearr_47906[(16)] = inst_47774);

(statearr_47906[(17)] = inst_47775);

return statearr_47906;
})();
var statearr_47907_47988 = state_47896__$1;
(statearr_47907_47988[(2)] = null);

(statearr_47907_47988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (39))){
var state_47896__$1 = state_47896;
var statearr_47911_47989 = state_47896__$1;
(statearr_47911_47989[(2)] = null);

(statearr_47911_47989[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (4))){
var inst_47764 = (state_47896[(11)]);
var inst_47764__$1 = (state_47896[(2)]);
var inst_47765 = (inst_47764__$1 == null);
var state_47896__$1 = (function (){var statearr_47912 = state_47896;
(statearr_47912[(11)] = inst_47764__$1);

return statearr_47912;
})();
if(cljs.core.truth_(inst_47765)){
var statearr_47913_47990 = state_47896__$1;
(statearr_47913_47990[(1)] = (5));

} else {
var statearr_47914_47991 = state_47896__$1;
(statearr_47914_47991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (15))){
var inst_47773 = (state_47896[(13)]);
var inst_47776 = (state_47896[(14)]);
var inst_47774 = (state_47896[(16)]);
var inst_47775 = (state_47896[(17)]);
var inst_47791 = (state_47896[(2)]);
var inst_47792 = (inst_47776 + (1));
var tmp47908 = inst_47773;
var tmp47909 = inst_47774;
var tmp47910 = inst_47775;
var inst_47773__$1 = tmp47908;
var inst_47774__$1 = tmp47909;
var inst_47775__$1 = tmp47910;
var inst_47776__$1 = inst_47792;
var state_47896__$1 = (function (){var statearr_47915 = state_47896;
(statearr_47915[(18)] = inst_47791);

(statearr_47915[(13)] = inst_47773__$1);

(statearr_47915[(14)] = inst_47776__$1);

(statearr_47915[(16)] = inst_47774__$1);

(statearr_47915[(17)] = inst_47775__$1);

return statearr_47915;
})();
var statearr_47916_47992 = state_47896__$1;
(statearr_47916_47992[(2)] = null);

(statearr_47916_47992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (21))){
var inst_47818 = (state_47896[(2)]);
var state_47896__$1 = state_47896;
var statearr_47920_47993 = state_47896__$1;
(statearr_47920_47993[(2)] = inst_47818);

(statearr_47920_47993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (31))){
var inst_47844 = (state_47896[(9)]);
var inst_47848 = done.call(null,null);
var inst_47849 = cljs.core.async.untap_STAR_.call(null,m,inst_47844);
var state_47896__$1 = (function (){var statearr_47921 = state_47896;
(statearr_47921[(19)] = inst_47848);

return statearr_47921;
})();
var statearr_47922_47994 = state_47896__$1;
(statearr_47922_47994[(2)] = inst_47849);

(statearr_47922_47994[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (32))){
var inst_47836 = (state_47896[(20)]);
var inst_47839 = (state_47896[(10)]);
var inst_47837 = (state_47896[(12)]);
var inst_47838 = (state_47896[(21)]);
var inst_47851 = (state_47896[(2)]);
var inst_47852 = (inst_47839 + (1));
var tmp47917 = inst_47836;
var tmp47918 = inst_47837;
var tmp47919 = inst_47838;
var inst_47836__$1 = tmp47917;
var inst_47837__$1 = tmp47918;
var inst_47838__$1 = tmp47919;
var inst_47839__$1 = inst_47852;
var state_47896__$1 = (function (){var statearr_47923 = state_47896;
(statearr_47923[(20)] = inst_47836__$1);

(statearr_47923[(10)] = inst_47839__$1);

(statearr_47923[(12)] = inst_47837__$1);

(statearr_47923[(22)] = inst_47851);

(statearr_47923[(21)] = inst_47838__$1);

return statearr_47923;
})();
var statearr_47924_47995 = state_47896__$1;
(statearr_47924_47995[(2)] = null);

(statearr_47924_47995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (40))){
var inst_47864 = (state_47896[(23)]);
var inst_47868 = done.call(null,null);
var inst_47869 = cljs.core.async.untap_STAR_.call(null,m,inst_47864);
var state_47896__$1 = (function (){var statearr_47925 = state_47896;
(statearr_47925[(24)] = inst_47868);

return statearr_47925;
})();
var statearr_47926_47996 = state_47896__$1;
(statearr_47926_47996[(2)] = inst_47869);

(statearr_47926_47996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (33))){
var inst_47855 = (state_47896[(25)]);
var inst_47857 = cljs.core.chunked_seq_QMARK_.call(null,inst_47855);
var state_47896__$1 = state_47896;
if(inst_47857){
var statearr_47927_47997 = state_47896__$1;
(statearr_47927_47997[(1)] = (36));

} else {
var statearr_47928_47998 = state_47896__$1;
(statearr_47928_47998[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (13))){
var inst_47785 = (state_47896[(26)]);
var inst_47788 = cljs.core.async.close_BANG_.call(null,inst_47785);
var state_47896__$1 = state_47896;
var statearr_47929_47999 = state_47896__$1;
(statearr_47929_47999[(2)] = inst_47788);

(statearr_47929_47999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (22))){
var inst_47808 = (state_47896[(8)]);
var inst_47811 = cljs.core.async.close_BANG_.call(null,inst_47808);
var state_47896__$1 = state_47896;
var statearr_47930_48000 = state_47896__$1;
(statearr_47930_48000[(2)] = inst_47811);

(statearr_47930_48000[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (36))){
var inst_47855 = (state_47896[(25)]);
var inst_47859 = cljs.core.chunk_first.call(null,inst_47855);
var inst_47860 = cljs.core.chunk_rest.call(null,inst_47855);
var inst_47861 = cljs.core.count.call(null,inst_47859);
var inst_47836 = inst_47860;
var inst_47837 = inst_47859;
var inst_47838 = inst_47861;
var inst_47839 = (0);
var state_47896__$1 = (function (){var statearr_47931 = state_47896;
(statearr_47931[(20)] = inst_47836);

(statearr_47931[(10)] = inst_47839);

(statearr_47931[(12)] = inst_47837);

(statearr_47931[(21)] = inst_47838);

return statearr_47931;
})();
var statearr_47932_48001 = state_47896__$1;
(statearr_47932_48001[(2)] = null);

(statearr_47932_48001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (41))){
var inst_47855 = (state_47896[(25)]);
var inst_47871 = (state_47896[(2)]);
var inst_47872 = cljs.core.next.call(null,inst_47855);
var inst_47836 = inst_47872;
var inst_47837 = null;
var inst_47838 = (0);
var inst_47839 = (0);
var state_47896__$1 = (function (){var statearr_47933 = state_47896;
(statearr_47933[(27)] = inst_47871);

(statearr_47933[(20)] = inst_47836);

(statearr_47933[(10)] = inst_47839);

(statearr_47933[(12)] = inst_47837);

(statearr_47933[(21)] = inst_47838);

return statearr_47933;
})();
var statearr_47934_48002 = state_47896__$1;
(statearr_47934_48002[(2)] = null);

(statearr_47934_48002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (43))){
var state_47896__$1 = state_47896;
var statearr_47935_48003 = state_47896__$1;
(statearr_47935_48003[(2)] = null);

(statearr_47935_48003[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (29))){
var inst_47880 = (state_47896[(2)]);
var state_47896__$1 = state_47896;
var statearr_47936_48004 = state_47896__$1;
(statearr_47936_48004[(2)] = inst_47880);

(statearr_47936_48004[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (44))){
var inst_47889 = (state_47896[(2)]);
var state_47896__$1 = (function (){var statearr_47937 = state_47896;
(statearr_47937[(28)] = inst_47889);

return statearr_47937;
})();
var statearr_47938_48005 = state_47896__$1;
(statearr_47938_48005[(2)] = null);

(statearr_47938_48005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (6))){
var inst_47828 = (state_47896[(29)]);
var inst_47827 = cljs.core.deref.call(null,cs);
var inst_47828__$1 = cljs.core.keys.call(null,inst_47827);
var inst_47829 = cljs.core.count.call(null,inst_47828__$1);
var inst_47830 = cljs.core.reset_BANG_.call(null,dctr,inst_47829);
var inst_47835 = cljs.core.seq.call(null,inst_47828__$1);
var inst_47836 = inst_47835;
var inst_47837 = null;
var inst_47838 = (0);
var inst_47839 = (0);
var state_47896__$1 = (function (){var statearr_47939 = state_47896;
(statearr_47939[(30)] = inst_47830);

(statearr_47939[(29)] = inst_47828__$1);

(statearr_47939[(20)] = inst_47836);

(statearr_47939[(10)] = inst_47839);

(statearr_47939[(12)] = inst_47837);

(statearr_47939[(21)] = inst_47838);

return statearr_47939;
})();
var statearr_47940_48006 = state_47896__$1;
(statearr_47940_48006[(2)] = null);

(statearr_47940_48006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (28))){
var inst_47855 = (state_47896[(25)]);
var inst_47836 = (state_47896[(20)]);
var inst_47855__$1 = cljs.core.seq.call(null,inst_47836);
var state_47896__$1 = (function (){var statearr_47941 = state_47896;
(statearr_47941[(25)] = inst_47855__$1);

return statearr_47941;
})();
if(inst_47855__$1){
var statearr_47942_48007 = state_47896__$1;
(statearr_47942_48007[(1)] = (33));

} else {
var statearr_47943_48008 = state_47896__$1;
(statearr_47943_48008[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (25))){
var inst_47839 = (state_47896[(10)]);
var inst_47838 = (state_47896[(21)]);
var inst_47841 = (inst_47839 < inst_47838);
var inst_47842 = inst_47841;
var state_47896__$1 = state_47896;
if(cljs.core.truth_(inst_47842)){
var statearr_47944_48009 = state_47896__$1;
(statearr_47944_48009[(1)] = (27));

} else {
var statearr_47945_48010 = state_47896__$1;
(statearr_47945_48010[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (34))){
var state_47896__$1 = state_47896;
var statearr_47946_48011 = state_47896__$1;
(statearr_47946_48011[(2)] = null);

(statearr_47946_48011[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (17))){
var state_47896__$1 = state_47896;
var statearr_47947_48012 = state_47896__$1;
(statearr_47947_48012[(2)] = null);

(statearr_47947_48012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (3))){
var inst_47894 = (state_47896[(2)]);
var state_47896__$1 = state_47896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47896__$1,inst_47894);
} else {
if((state_val_47897 === (12))){
var inst_47823 = (state_47896[(2)]);
var state_47896__$1 = state_47896;
var statearr_47948_48013 = state_47896__$1;
(statearr_47948_48013[(2)] = inst_47823);

(statearr_47948_48013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (2))){
var state_47896__$1 = state_47896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47896__$1,(4),ch);
} else {
if((state_val_47897 === (23))){
var state_47896__$1 = state_47896;
var statearr_47949_48014 = state_47896__$1;
(statearr_47949_48014[(2)] = null);

(statearr_47949_48014[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (35))){
var inst_47878 = (state_47896[(2)]);
var state_47896__$1 = state_47896;
var statearr_47950_48015 = state_47896__$1;
(statearr_47950_48015[(2)] = inst_47878);

(statearr_47950_48015[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (19))){
var inst_47795 = (state_47896[(7)]);
var inst_47799 = cljs.core.chunk_first.call(null,inst_47795);
var inst_47800 = cljs.core.chunk_rest.call(null,inst_47795);
var inst_47801 = cljs.core.count.call(null,inst_47799);
var inst_47773 = inst_47800;
var inst_47774 = inst_47799;
var inst_47775 = inst_47801;
var inst_47776 = (0);
var state_47896__$1 = (function (){var statearr_47951 = state_47896;
(statearr_47951[(13)] = inst_47773);

(statearr_47951[(14)] = inst_47776);

(statearr_47951[(16)] = inst_47774);

(statearr_47951[(17)] = inst_47775);

return statearr_47951;
})();
var statearr_47952_48016 = state_47896__$1;
(statearr_47952_48016[(2)] = null);

(statearr_47952_48016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (11))){
var inst_47795 = (state_47896[(7)]);
var inst_47773 = (state_47896[(13)]);
var inst_47795__$1 = cljs.core.seq.call(null,inst_47773);
var state_47896__$1 = (function (){var statearr_47953 = state_47896;
(statearr_47953[(7)] = inst_47795__$1);

return statearr_47953;
})();
if(inst_47795__$1){
var statearr_47954_48017 = state_47896__$1;
(statearr_47954_48017[(1)] = (16));

} else {
var statearr_47955_48018 = state_47896__$1;
(statearr_47955_48018[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (9))){
var inst_47825 = (state_47896[(2)]);
var state_47896__$1 = state_47896;
var statearr_47956_48019 = state_47896__$1;
(statearr_47956_48019[(2)] = inst_47825);

(statearr_47956_48019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (5))){
var inst_47771 = cljs.core.deref.call(null,cs);
var inst_47772 = cljs.core.seq.call(null,inst_47771);
var inst_47773 = inst_47772;
var inst_47774 = null;
var inst_47775 = (0);
var inst_47776 = (0);
var state_47896__$1 = (function (){var statearr_47957 = state_47896;
(statearr_47957[(13)] = inst_47773);

(statearr_47957[(14)] = inst_47776);

(statearr_47957[(16)] = inst_47774);

(statearr_47957[(17)] = inst_47775);

return statearr_47957;
})();
var statearr_47958_48020 = state_47896__$1;
(statearr_47958_48020[(2)] = null);

(statearr_47958_48020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (14))){
var state_47896__$1 = state_47896;
var statearr_47959_48021 = state_47896__$1;
(statearr_47959_48021[(2)] = null);

(statearr_47959_48021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (45))){
var inst_47886 = (state_47896[(2)]);
var state_47896__$1 = state_47896;
var statearr_47960_48022 = state_47896__$1;
(statearr_47960_48022[(2)] = inst_47886);

(statearr_47960_48022[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (26))){
var inst_47828 = (state_47896[(29)]);
var inst_47882 = (state_47896[(2)]);
var inst_47883 = cljs.core.seq.call(null,inst_47828);
var state_47896__$1 = (function (){var statearr_47961 = state_47896;
(statearr_47961[(31)] = inst_47882);

return statearr_47961;
})();
if(inst_47883){
var statearr_47962_48023 = state_47896__$1;
(statearr_47962_48023[(1)] = (42));

} else {
var statearr_47963_48024 = state_47896__$1;
(statearr_47963_48024[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (16))){
var inst_47795 = (state_47896[(7)]);
var inst_47797 = cljs.core.chunked_seq_QMARK_.call(null,inst_47795);
var state_47896__$1 = state_47896;
if(inst_47797){
var statearr_47964_48025 = state_47896__$1;
(statearr_47964_48025[(1)] = (19));

} else {
var statearr_47965_48026 = state_47896__$1;
(statearr_47965_48026[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (38))){
var inst_47875 = (state_47896[(2)]);
var state_47896__$1 = state_47896;
var statearr_47966_48027 = state_47896__$1;
(statearr_47966_48027[(2)] = inst_47875);

(statearr_47966_48027[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (30))){
var state_47896__$1 = state_47896;
var statearr_47967_48028 = state_47896__$1;
(statearr_47967_48028[(2)] = null);

(statearr_47967_48028[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (10))){
var inst_47776 = (state_47896[(14)]);
var inst_47774 = (state_47896[(16)]);
var inst_47784 = cljs.core._nth.call(null,inst_47774,inst_47776);
var inst_47785 = cljs.core.nth.call(null,inst_47784,(0),null);
var inst_47786 = cljs.core.nth.call(null,inst_47784,(1),null);
var state_47896__$1 = (function (){var statearr_47968 = state_47896;
(statearr_47968[(26)] = inst_47785);

return statearr_47968;
})();
if(cljs.core.truth_(inst_47786)){
var statearr_47969_48029 = state_47896__$1;
(statearr_47969_48029[(1)] = (13));

} else {
var statearr_47970_48030 = state_47896__$1;
(statearr_47970_48030[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (18))){
var inst_47821 = (state_47896[(2)]);
var state_47896__$1 = state_47896;
var statearr_47971_48031 = state_47896__$1;
(statearr_47971_48031[(2)] = inst_47821);

(statearr_47971_48031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (42))){
var state_47896__$1 = state_47896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47896__$1,(45),dchan);
} else {
if((state_val_47897 === (37))){
var inst_47855 = (state_47896[(25)]);
var inst_47764 = (state_47896[(11)]);
var inst_47864 = (state_47896[(23)]);
var inst_47864__$1 = cljs.core.first.call(null,inst_47855);
var inst_47865 = cljs.core.async.put_BANG_.call(null,inst_47864__$1,inst_47764,done);
var state_47896__$1 = (function (){var statearr_47972 = state_47896;
(statearr_47972[(23)] = inst_47864__$1);

return statearr_47972;
})();
if(cljs.core.truth_(inst_47865)){
var statearr_47973_48032 = state_47896__$1;
(statearr_47973_48032[(1)] = (39));

} else {
var statearr_47974_48033 = state_47896__$1;
(statearr_47974_48033[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (8))){
var inst_47776 = (state_47896[(14)]);
var inst_47775 = (state_47896[(17)]);
var inst_47778 = (inst_47776 < inst_47775);
var inst_47779 = inst_47778;
var state_47896__$1 = state_47896;
if(cljs.core.truth_(inst_47779)){
var statearr_47975_48034 = state_47896__$1;
(statearr_47975_48034[(1)] = (10));

} else {
var statearr_47976_48035 = state_47896__$1;
(statearr_47976_48035[(1)] = (11));

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
});})(c__47162__auto___47981,cs,m,dchan,dctr,done))
;
return ((function (switch__47072__auto__,c__47162__auto___47981,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__47073__auto__ = null;
var cljs$core$async$mult_$_state_machine__47073__auto____0 = (function (){
var statearr_47977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47977[(0)] = cljs$core$async$mult_$_state_machine__47073__auto__);

(statearr_47977[(1)] = (1));

return statearr_47977;
});
var cljs$core$async$mult_$_state_machine__47073__auto____1 = (function (state_47896){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_47896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e47978){if((e47978 instanceof Object)){
var ex__47076__auto__ = e47978;
var statearr_47979_48036 = state_47896;
(statearr_47979_48036[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48037 = state_47896;
state_47896 = G__48037;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47073__auto__ = function(state_47896){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47073__auto____1.call(this,state_47896);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47073__auto____0;
cljs$core$async$mult_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47073__auto____1;
return cljs$core$async$mult_$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___47981,cs,m,dchan,dctr,done))
})();
var state__47164__auto__ = (function (){var statearr_47980 = f__47163__auto__.call(null);
(statearr_47980[(6)] = c__47162__auto___47981);

return statearr_47980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___47981,cs,m,dchan,dctr,done))
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
var G__48039 = arguments.length;
switch (G__48039) {
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
var len__31516__auto___48051 = arguments.length;
var i__31517__auto___48052 = (0);
while(true){
if((i__31517__auto___48052 < len__31516__auto___48051)){
args__31523__auto__.push((arguments[i__31517__auto___48052]));

var G__48053 = (i__31517__auto___48052 + (1));
i__31517__auto___48052 = G__48053;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((3) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31524__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48045){
var map__48046 = p__48045;
var map__48046__$1 = ((((!((map__48046 == null)))?((((map__48046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48046):map__48046);
var opts = map__48046__$1;
var statearr_48048_48054 = state;
(statearr_48048_48054[(1)] = cont_block);


var temp__5290__auto__ = cljs.core.async.do_alts.call(null,((function (map__48046,map__48046__$1,opts){
return (function (val){
var statearr_48049_48055 = state;
(statearr_48049_48055[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48046,map__48046__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5290__auto__)){
var cb = temp__5290__auto__;
var statearr_48050_48056 = state;
(statearr_48050_48056[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48041){
var G__48042 = cljs.core.first.call(null,seq48041);
var seq48041__$1 = cljs.core.next.call(null,seq48041);
var G__48043 = cljs.core.first.call(null,seq48041__$1);
var seq48041__$2 = cljs.core.next.call(null,seq48041__$1);
var G__48044 = cljs.core.first.call(null,seq48041__$2);
var seq48041__$3 = cljs.core.next.call(null,seq48041__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48042,G__48043,G__48044,seq48041__$3);
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
if(typeof cljs.core.async.t_cljs$core$async48057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48057 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta48058){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta48058 = meta48058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48059,meta48058__$1){
var self__ = this;
var _48059__$1 = this;
return (new cljs.core.async.t_cljs$core$async48057(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta48058__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48059){
var self__ = this;
var _48059__$1 = this;
return self__.meta48058;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48057.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48057.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48057.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48057.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48057.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48057.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48057.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48057.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async48057.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta48058","meta48058",-375154272,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48057";

cljs.core.async.t_cljs$core$async48057.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async48057");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48057 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48057(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48058){
return (new cljs.core.async.t_cljs$core$async48057(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48058));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48057(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47162__auto___48221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___48221,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___48221,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48161){
var state_val_48162 = (state_48161[(1)]);
if((state_val_48162 === (7))){
var inst_48076 = (state_48161[(2)]);
var state_48161__$1 = state_48161;
var statearr_48163_48222 = state_48161__$1;
(statearr_48163_48222[(2)] = inst_48076);

(statearr_48163_48222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (20))){
var inst_48088 = (state_48161[(7)]);
var state_48161__$1 = state_48161;
var statearr_48164_48223 = state_48161__$1;
(statearr_48164_48223[(2)] = inst_48088);

(statearr_48164_48223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (27))){
var state_48161__$1 = state_48161;
var statearr_48165_48224 = state_48161__$1;
(statearr_48165_48224[(2)] = null);

(statearr_48165_48224[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (1))){
var inst_48063 = (state_48161[(8)]);
var inst_48063__$1 = calc_state.call(null);
var inst_48065 = (inst_48063__$1 == null);
var inst_48066 = cljs.core.not.call(null,inst_48065);
var state_48161__$1 = (function (){var statearr_48166 = state_48161;
(statearr_48166[(8)] = inst_48063__$1);

return statearr_48166;
})();
if(inst_48066){
var statearr_48167_48225 = state_48161__$1;
(statearr_48167_48225[(1)] = (2));

} else {
var statearr_48168_48226 = state_48161__$1;
(statearr_48168_48226[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (24))){
var inst_48135 = (state_48161[(9)]);
var inst_48121 = (state_48161[(10)]);
var inst_48112 = (state_48161[(11)]);
var inst_48135__$1 = inst_48112.call(null,inst_48121);
var state_48161__$1 = (function (){var statearr_48169 = state_48161;
(statearr_48169[(9)] = inst_48135__$1);

return statearr_48169;
})();
if(cljs.core.truth_(inst_48135__$1)){
var statearr_48170_48227 = state_48161__$1;
(statearr_48170_48227[(1)] = (29));

} else {
var statearr_48171_48228 = state_48161__$1;
(statearr_48171_48228[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (4))){
var inst_48079 = (state_48161[(2)]);
var state_48161__$1 = state_48161;
if(cljs.core.truth_(inst_48079)){
var statearr_48172_48229 = state_48161__$1;
(statearr_48172_48229[(1)] = (8));

} else {
var statearr_48173_48230 = state_48161__$1;
(statearr_48173_48230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (15))){
var inst_48106 = (state_48161[(2)]);
var state_48161__$1 = state_48161;
if(cljs.core.truth_(inst_48106)){
var statearr_48174_48231 = state_48161__$1;
(statearr_48174_48231[(1)] = (19));

} else {
var statearr_48175_48232 = state_48161__$1;
(statearr_48175_48232[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (21))){
var inst_48111 = (state_48161[(12)]);
var inst_48111__$1 = (state_48161[(2)]);
var inst_48112 = cljs.core.get.call(null,inst_48111__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48113 = cljs.core.get.call(null,inst_48111__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48114 = cljs.core.get.call(null,inst_48111__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48161__$1 = (function (){var statearr_48176 = state_48161;
(statearr_48176[(12)] = inst_48111__$1);

(statearr_48176[(11)] = inst_48112);

(statearr_48176[(13)] = inst_48113);

return statearr_48176;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48161__$1,(22),inst_48114);
} else {
if((state_val_48162 === (31))){
var inst_48143 = (state_48161[(2)]);
var state_48161__$1 = state_48161;
if(cljs.core.truth_(inst_48143)){
var statearr_48177_48233 = state_48161__$1;
(statearr_48177_48233[(1)] = (32));

} else {
var statearr_48178_48234 = state_48161__$1;
(statearr_48178_48234[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (32))){
var inst_48120 = (state_48161[(14)]);
var state_48161__$1 = state_48161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48161__$1,(35),out,inst_48120);
} else {
if((state_val_48162 === (33))){
var inst_48111 = (state_48161[(12)]);
var inst_48088 = inst_48111;
var state_48161__$1 = (function (){var statearr_48179 = state_48161;
(statearr_48179[(7)] = inst_48088);

return statearr_48179;
})();
var statearr_48180_48235 = state_48161__$1;
(statearr_48180_48235[(2)] = null);

(statearr_48180_48235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (13))){
var inst_48088 = (state_48161[(7)]);
var inst_48095 = inst_48088.cljs$lang$protocol_mask$partition0$;
var inst_48096 = (inst_48095 & (64));
var inst_48097 = inst_48088.cljs$core$ISeq$;
var inst_48098 = (cljs.core.PROTOCOL_SENTINEL === inst_48097);
var inst_48099 = (inst_48096) || (inst_48098);
var state_48161__$1 = state_48161;
if(cljs.core.truth_(inst_48099)){
var statearr_48181_48236 = state_48161__$1;
(statearr_48181_48236[(1)] = (16));

} else {
var statearr_48182_48237 = state_48161__$1;
(statearr_48182_48237[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (22))){
var inst_48121 = (state_48161[(10)]);
var inst_48120 = (state_48161[(14)]);
var inst_48119 = (state_48161[(2)]);
var inst_48120__$1 = cljs.core.nth.call(null,inst_48119,(0),null);
var inst_48121__$1 = cljs.core.nth.call(null,inst_48119,(1),null);
var inst_48122 = (inst_48120__$1 == null);
var inst_48123 = cljs.core._EQ_.call(null,inst_48121__$1,change);
var inst_48124 = (inst_48122) || (inst_48123);
var state_48161__$1 = (function (){var statearr_48183 = state_48161;
(statearr_48183[(10)] = inst_48121__$1);

(statearr_48183[(14)] = inst_48120__$1);

return statearr_48183;
})();
if(cljs.core.truth_(inst_48124)){
var statearr_48184_48238 = state_48161__$1;
(statearr_48184_48238[(1)] = (23));

} else {
var statearr_48185_48239 = state_48161__$1;
(statearr_48185_48239[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (36))){
var inst_48111 = (state_48161[(12)]);
var inst_48088 = inst_48111;
var state_48161__$1 = (function (){var statearr_48186 = state_48161;
(statearr_48186[(7)] = inst_48088);

return statearr_48186;
})();
var statearr_48187_48240 = state_48161__$1;
(statearr_48187_48240[(2)] = null);

(statearr_48187_48240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (29))){
var inst_48135 = (state_48161[(9)]);
var state_48161__$1 = state_48161;
var statearr_48188_48241 = state_48161__$1;
(statearr_48188_48241[(2)] = inst_48135);

(statearr_48188_48241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (6))){
var state_48161__$1 = state_48161;
var statearr_48189_48242 = state_48161__$1;
(statearr_48189_48242[(2)] = false);

(statearr_48189_48242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (28))){
var inst_48131 = (state_48161[(2)]);
var inst_48132 = calc_state.call(null);
var inst_48088 = inst_48132;
var state_48161__$1 = (function (){var statearr_48190 = state_48161;
(statearr_48190[(15)] = inst_48131);

(statearr_48190[(7)] = inst_48088);

return statearr_48190;
})();
var statearr_48191_48243 = state_48161__$1;
(statearr_48191_48243[(2)] = null);

(statearr_48191_48243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (25))){
var inst_48157 = (state_48161[(2)]);
var state_48161__$1 = state_48161;
var statearr_48192_48244 = state_48161__$1;
(statearr_48192_48244[(2)] = inst_48157);

(statearr_48192_48244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (34))){
var inst_48155 = (state_48161[(2)]);
var state_48161__$1 = state_48161;
var statearr_48193_48245 = state_48161__$1;
(statearr_48193_48245[(2)] = inst_48155);

(statearr_48193_48245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (17))){
var state_48161__$1 = state_48161;
var statearr_48194_48246 = state_48161__$1;
(statearr_48194_48246[(2)] = false);

(statearr_48194_48246[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (3))){
var state_48161__$1 = state_48161;
var statearr_48195_48247 = state_48161__$1;
(statearr_48195_48247[(2)] = false);

(statearr_48195_48247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (12))){
var inst_48159 = (state_48161[(2)]);
var state_48161__$1 = state_48161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48161__$1,inst_48159);
} else {
if((state_val_48162 === (2))){
var inst_48063 = (state_48161[(8)]);
var inst_48068 = inst_48063.cljs$lang$protocol_mask$partition0$;
var inst_48069 = (inst_48068 & (64));
var inst_48070 = inst_48063.cljs$core$ISeq$;
var inst_48071 = (cljs.core.PROTOCOL_SENTINEL === inst_48070);
var inst_48072 = (inst_48069) || (inst_48071);
var state_48161__$1 = state_48161;
if(cljs.core.truth_(inst_48072)){
var statearr_48196_48248 = state_48161__$1;
(statearr_48196_48248[(1)] = (5));

} else {
var statearr_48197_48249 = state_48161__$1;
(statearr_48197_48249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (23))){
var inst_48120 = (state_48161[(14)]);
var inst_48126 = (inst_48120 == null);
var state_48161__$1 = state_48161;
if(cljs.core.truth_(inst_48126)){
var statearr_48198_48250 = state_48161__$1;
(statearr_48198_48250[(1)] = (26));

} else {
var statearr_48199_48251 = state_48161__$1;
(statearr_48199_48251[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (35))){
var inst_48146 = (state_48161[(2)]);
var state_48161__$1 = state_48161;
if(cljs.core.truth_(inst_48146)){
var statearr_48200_48252 = state_48161__$1;
(statearr_48200_48252[(1)] = (36));

} else {
var statearr_48201_48253 = state_48161__$1;
(statearr_48201_48253[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (19))){
var inst_48088 = (state_48161[(7)]);
var inst_48108 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48088);
var state_48161__$1 = state_48161;
var statearr_48202_48254 = state_48161__$1;
(statearr_48202_48254[(2)] = inst_48108);

(statearr_48202_48254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (11))){
var inst_48088 = (state_48161[(7)]);
var inst_48092 = (inst_48088 == null);
var inst_48093 = cljs.core.not.call(null,inst_48092);
var state_48161__$1 = state_48161;
if(inst_48093){
var statearr_48203_48255 = state_48161__$1;
(statearr_48203_48255[(1)] = (13));

} else {
var statearr_48204_48256 = state_48161__$1;
(statearr_48204_48256[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (9))){
var inst_48063 = (state_48161[(8)]);
var state_48161__$1 = state_48161;
var statearr_48205_48257 = state_48161__$1;
(statearr_48205_48257[(2)] = inst_48063);

(statearr_48205_48257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (5))){
var state_48161__$1 = state_48161;
var statearr_48206_48258 = state_48161__$1;
(statearr_48206_48258[(2)] = true);

(statearr_48206_48258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (14))){
var state_48161__$1 = state_48161;
var statearr_48207_48259 = state_48161__$1;
(statearr_48207_48259[(2)] = false);

(statearr_48207_48259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (26))){
var inst_48121 = (state_48161[(10)]);
var inst_48128 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48121);
var state_48161__$1 = state_48161;
var statearr_48208_48260 = state_48161__$1;
(statearr_48208_48260[(2)] = inst_48128);

(statearr_48208_48260[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (16))){
var state_48161__$1 = state_48161;
var statearr_48209_48261 = state_48161__$1;
(statearr_48209_48261[(2)] = true);

(statearr_48209_48261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (38))){
var inst_48151 = (state_48161[(2)]);
var state_48161__$1 = state_48161;
var statearr_48210_48262 = state_48161__$1;
(statearr_48210_48262[(2)] = inst_48151);

(statearr_48210_48262[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (30))){
var inst_48121 = (state_48161[(10)]);
var inst_48112 = (state_48161[(11)]);
var inst_48113 = (state_48161[(13)]);
var inst_48138 = cljs.core.empty_QMARK_.call(null,inst_48112);
var inst_48139 = inst_48113.call(null,inst_48121);
var inst_48140 = cljs.core.not.call(null,inst_48139);
var inst_48141 = (inst_48138) && (inst_48140);
var state_48161__$1 = state_48161;
var statearr_48211_48263 = state_48161__$1;
(statearr_48211_48263[(2)] = inst_48141);

(statearr_48211_48263[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (10))){
var inst_48063 = (state_48161[(8)]);
var inst_48084 = (state_48161[(2)]);
var inst_48085 = cljs.core.get.call(null,inst_48084,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48086 = cljs.core.get.call(null,inst_48084,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48087 = cljs.core.get.call(null,inst_48084,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48088 = inst_48063;
var state_48161__$1 = (function (){var statearr_48212 = state_48161;
(statearr_48212[(16)] = inst_48086);

(statearr_48212[(17)] = inst_48087);

(statearr_48212[(7)] = inst_48088);

(statearr_48212[(18)] = inst_48085);

return statearr_48212;
})();
var statearr_48213_48264 = state_48161__$1;
(statearr_48213_48264[(2)] = null);

(statearr_48213_48264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (18))){
var inst_48103 = (state_48161[(2)]);
var state_48161__$1 = state_48161;
var statearr_48214_48265 = state_48161__$1;
(statearr_48214_48265[(2)] = inst_48103);

(statearr_48214_48265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (37))){
var state_48161__$1 = state_48161;
var statearr_48215_48266 = state_48161__$1;
(statearr_48215_48266[(2)] = null);

(statearr_48215_48266[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48162 === (8))){
var inst_48063 = (state_48161[(8)]);
var inst_48081 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48063);
var state_48161__$1 = state_48161;
var statearr_48216_48267 = state_48161__$1;
(statearr_48216_48267[(2)] = inst_48081);

(statearr_48216_48267[(1)] = (10));


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
});})(c__47162__auto___48221,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__47072__auto__,c__47162__auto___48221,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__47073__auto__ = null;
var cljs$core$async$mix_$_state_machine__47073__auto____0 = (function (){
var statearr_48217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48217[(0)] = cljs$core$async$mix_$_state_machine__47073__auto__);

(statearr_48217[(1)] = (1));

return statearr_48217;
});
var cljs$core$async$mix_$_state_machine__47073__auto____1 = (function (state_48161){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_48161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e48218){if((e48218 instanceof Object)){
var ex__47076__auto__ = e48218;
var statearr_48219_48268 = state_48161;
(statearr_48219_48268[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48269 = state_48161;
state_48161 = G__48269;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47073__auto__ = function(state_48161){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47073__auto____1.call(this,state_48161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47073__auto____0;
cljs$core$async$mix_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47073__auto____1;
return cljs$core$async$mix_$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___48221,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__47164__auto__ = (function (){var statearr_48220 = f__47163__auto__.call(null);
(statearr_48220[(6)] = c__47162__auto___48221);

return statearr_48220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___48221,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__48271 = arguments.length;
switch (G__48271) {
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
var G__48275 = arguments.length;
switch (G__48275) {
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
return (function (p1__48273_SHARP_){
if(cljs.core.truth_(p1__48273_SHARP_.call(null,topic))){
return p1__48273_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48273_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30239__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48276 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48277){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48277 = meta48277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48278,meta48277__$1){
var self__ = this;
var _48278__$1 = this;
return (new cljs.core.async.t_cljs$core$async48276(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48277__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48278){
var self__ = this;
var _48278__$1 = this;
return self__.meta48277;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48276.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48276.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48276.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48276.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48276.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async48276.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48276.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48276.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48277","meta48277",-868384840,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48276";

cljs.core.async.t_cljs$core$async48276.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async48276");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48276 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48276(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48277){
return (new cljs.core.async.t_cljs$core$async48276(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48277));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48276(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47162__auto___48396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___48396,mults,ensure_mult,p){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___48396,mults,ensure_mult,p){
return (function (state_48350){
var state_val_48351 = (state_48350[(1)]);
if((state_val_48351 === (7))){
var inst_48346 = (state_48350[(2)]);
var state_48350__$1 = state_48350;
var statearr_48352_48397 = state_48350__$1;
(statearr_48352_48397[(2)] = inst_48346);

(statearr_48352_48397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (20))){
var state_48350__$1 = state_48350;
var statearr_48353_48398 = state_48350__$1;
(statearr_48353_48398[(2)] = null);

(statearr_48353_48398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (1))){
var state_48350__$1 = state_48350;
var statearr_48354_48399 = state_48350__$1;
(statearr_48354_48399[(2)] = null);

(statearr_48354_48399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (24))){
var inst_48329 = (state_48350[(7)]);
var inst_48338 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48329);
var state_48350__$1 = state_48350;
var statearr_48355_48400 = state_48350__$1;
(statearr_48355_48400[(2)] = inst_48338);

(statearr_48355_48400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (4))){
var inst_48281 = (state_48350[(8)]);
var inst_48281__$1 = (state_48350[(2)]);
var inst_48282 = (inst_48281__$1 == null);
var state_48350__$1 = (function (){var statearr_48356 = state_48350;
(statearr_48356[(8)] = inst_48281__$1);

return statearr_48356;
})();
if(cljs.core.truth_(inst_48282)){
var statearr_48357_48401 = state_48350__$1;
(statearr_48357_48401[(1)] = (5));

} else {
var statearr_48358_48402 = state_48350__$1;
(statearr_48358_48402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (15))){
var inst_48323 = (state_48350[(2)]);
var state_48350__$1 = state_48350;
var statearr_48359_48403 = state_48350__$1;
(statearr_48359_48403[(2)] = inst_48323);

(statearr_48359_48403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (21))){
var inst_48343 = (state_48350[(2)]);
var state_48350__$1 = (function (){var statearr_48360 = state_48350;
(statearr_48360[(9)] = inst_48343);

return statearr_48360;
})();
var statearr_48361_48404 = state_48350__$1;
(statearr_48361_48404[(2)] = null);

(statearr_48361_48404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (13))){
var inst_48305 = (state_48350[(10)]);
var inst_48307 = cljs.core.chunked_seq_QMARK_.call(null,inst_48305);
var state_48350__$1 = state_48350;
if(inst_48307){
var statearr_48362_48405 = state_48350__$1;
(statearr_48362_48405[(1)] = (16));

} else {
var statearr_48363_48406 = state_48350__$1;
(statearr_48363_48406[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (22))){
var inst_48335 = (state_48350[(2)]);
var state_48350__$1 = state_48350;
if(cljs.core.truth_(inst_48335)){
var statearr_48364_48407 = state_48350__$1;
(statearr_48364_48407[(1)] = (23));

} else {
var statearr_48365_48408 = state_48350__$1;
(statearr_48365_48408[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (6))){
var inst_48281 = (state_48350[(8)]);
var inst_48331 = (state_48350[(11)]);
var inst_48329 = (state_48350[(7)]);
var inst_48329__$1 = topic_fn.call(null,inst_48281);
var inst_48330 = cljs.core.deref.call(null,mults);
var inst_48331__$1 = cljs.core.get.call(null,inst_48330,inst_48329__$1);
var state_48350__$1 = (function (){var statearr_48366 = state_48350;
(statearr_48366[(11)] = inst_48331__$1);

(statearr_48366[(7)] = inst_48329__$1);

return statearr_48366;
})();
if(cljs.core.truth_(inst_48331__$1)){
var statearr_48367_48409 = state_48350__$1;
(statearr_48367_48409[(1)] = (19));

} else {
var statearr_48368_48410 = state_48350__$1;
(statearr_48368_48410[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (25))){
var inst_48340 = (state_48350[(2)]);
var state_48350__$1 = state_48350;
var statearr_48369_48411 = state_48350__$1;
(statearr_48369_48411[(2)] = inst_48340);

(statearr_48369_48411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (17))){
var inst_48305 = (state_48350[(10)]);
var inst_48314 = cljs.core.first.call(null,inst_48305);
var inst_48315 = cljs.core.async.muxch_STAR_.call(null,inst_48314);
var inst_48316 = cljs.core.async.close_BANG_.call(null,inst_48315);
var inst_48317 = cljs.core.next.call(null,inst_48305);
var inst_48291 = inst_48317;
var inst_48292 = null;
var inst_48293 = (0);
var inst_48294 = (0);
var state_48350__$1 = (function (){var statearr_48370 = state_48350;
(statearr_48370[(12)] = inst_48316);

(statearr_48370[(13)] = inst_48294);

(statearr_48370[(14)] = inst_48291);

(statearr_48370[(15)] = inst_48292);

(statearr_48370[(16)] = inst_48293);

return statearr_48370;
})();
var statearr_48371_48412 = state_48350__$1;
(statearr_48371_48412[(2)] = null);

(statearr_48371_48412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (3))){
var inst_48348 = (state_48350[(2)]);
var state_48350__$1 = state_48350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48350__$1,inst_48348);
} else {
if((state_val_48351 === (12))){
var inst_48325 = (state_48350[(2)]);
var state_48350__$1 = state_48350;
var statearr_48372_48413 = state_48350__$1;
(statearr_48372_48413[(2)] = inst_48325);

(statearr_48372_48413[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (2))){
var state_48350__$1 = state_48350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48350__$1,(4),ch);
} else {
if((state_val_48351 === (23))){
var state_48350__$1 = state_48350;
var statearr_48373_48414 = state_48350__$1;
(statearr_48373_48414[(2)] = null);

(statearr_48373_48414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (19))){
var inst_48281 = (state_48350[(8)]);
var inst_48331 = (state_48350[(11)]);
var inst_48333 = cljs.core.async.muxch_STAR_.call(null,inst_48331);
var state_48350__$1 = state_48350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48350__$1,(22),inst_48333,inst_48281);
} else {
if((state_val_48351 === (11))){
var inst_48305 = (state_48350[(10)]);
var inst_48291 = (state_48350[(14)]);
var inst_48305__$1 = cljs.core.seq.call(null,inst_48291);
var state_48350__$1 = (function (){var statearr_48374 = state_48350;
(statearr_48374[(10)] = inst_48305__$1);

return statearr_48374;
})();
if(inst_48305__$1){
var statearr_48375_48415 = state_48350__$1;
(statearr_48375_48415[(1)] = (13));

} else {
var statearr_48376_48416 = state_48350__$1;
(statearr_48376_48416[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (9))){
var inst_48327 = (state_48350[(2)]);
var state_48350__$1 = state_48350;
var statearr_48377_48417 = state_48350__$1;
(statearr_48377_48417[(2)] = inst_48327);

(statearr_48377_48417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (5))){
var inst_48288 = cljs.core.deref.call(null,mults);
var inst_48289 = cljs.core.vals.call(null,inst_48288);
var inst_48290 = cljs.core.seq.call(null,inst_48289);
var inst_48291 = inst_48290;
var inst_48292 = null;
var inst_48293 = (0);
var inst_48294 = (0);
var state_48350__$1 = (function (){var statearr_48378 = state_48350;
(statearr_48378[(13)] = inst_48294);

(statearr_48378[(14)] = inst_48291);

(statearr_48378[(15)] = inst_48292);

(statearr_48378[(16)] = inst_48293);

return statearr_48378;
})();
var statearr_48379_48418 = state_48350__$1;
(statearr_48379_48418[(2)] = null);

(statearr_48379_48418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (14))){
var state_48350__$1 = state_48350;
var statearr_48383_48419 = state_48350__$1;
(statearr_48383_48419[(2)] = null);

(statearr_48383_48419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (16))){
var inst_48305 = (state_48350[(10)]);
var inst_48309 = cljs.core.chunk_first.call(null,inst_48305);
var inst_48310 = cljs.core.chunk_rest.call(null,inst_48305);
var inst_48311 = cljs.core.count.call(null,inst_48309);
var inst_48291 = inst_48310;
var inst_48292 = inst_48309;
var inst_48293 = inst_48311;
var inst_48294 = (0);
var state_48350__$1 = (function (){var statearr_48384 = state_48350;
(statearr_48384[(13)] = inst_48294);

(statearr_48384[(14)] = inst_48291);

(statearr_48384[(15)] = inst_48292);

(statearr_48384[(16)] = inst_48293);

return statearr_48384;
})();
var statearr_48385_48420 = state_48350__$1;
(statearr_48385_48420[(2)] = null);

(statearr_48385_48420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (10))){
var inst_48294 = (state_48350[(13)]);
var inst_48291 = (state_48350[(14)]);
var inst_48292 = (state_48350[(15)]);
var inst_48293 = (state_48350[(16)]);
var inst_48299 = cljs.core._nth.call(null,inst_48292,inst_48294);
var inst_48300 = cljs.core.async.muxch_STAR_.call(null,inst_48299);
var inst_48301 = cljs.core.async.close_BANG_.call(null,inst_48300);
var inst_48302 = (inst_48294 + (1));
var tmp48380 = inst_48291;
var tmp48381 = inst_48292;
var tmp48382 = inst_48293;
var inst_48291__$1 = tmp48380;
var inst_48292__$1 = tmp48381;
var inst_48293__$1 = tmp48382;
var inst_48294__$1 = inst_48302;
var state_48350__$1 = (function (){var statearr_48386 = state_48350;
(statearr_48386[(17)] = inst_48301);

(statearr_48386[(13)] = inst_48294__$1);

(statearr_48386[(14)] = inst_48291__$1);

(statearr_48386[(15)] = inst_48292__$1);

(statearr_48386[(16)] = inst_48293__$1);

return statearr_48386;
})();
var statearr_48387_48421 = state_48350__$1;
(statearr_48387_48421[(2)] = null);

(statearr_48387_48421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (18))){
var inst_48320 = (state_48350[(2)]);
var state_48350__$1 = state_48350;
var statearr_48388_48422 = state_48350__$1;
(statearr_48388_48422[(2)] = inst_48320);

(statearr_48388_48422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48351 === (8))){
var inst_48294 = (state_48350[(13)]);
var inst_48293 = (state_48350[(16)]);
var inst_48296 = (inst_48294 < inst_48293);
var inst_48297 = inst_48296;
var state_48350__$1 = state_48350;
if(cljs.core.truth_(inst_48297)){
var statearr_48389_48423 = state_48350__$1;
(statearr_48389_48423[(1)] = (10));

} else {
var statearr_48390_48424 = state_48350__$1;
(statearr_48390_48424[(1)] = (11));

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
});})(c__47162__auto___48396,mults,ensure_mult,p))
;
return ((function (switch__47072__auto__,c__47162__auto___48396,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__47073__auto__ = null;
var cljs$core$async$state_machine__47073__auto____0 = (function (){
var statearr_48391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48391[(0)] = cljs$core$async$state_machine__47073__auto__);

(statearr_48391[(1)] = (1));

return statearr_48391;
});
var cljs$core$async$state_machine__47073__auto____1 = (function (state_48350){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_48350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e48392){if((e48392 instanceof Object)){
var ex__47076__auto__ = e48392;
var statearr_48393_48425 = state_48350;
(statearr_48393_48425[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48426 = state_48350;
state_48350 = G__48426;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$state_machine__47073__auto__ = function(state_48350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47073__auto____1.call(this,state_48350);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47073__auto____0;
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47073__auto____1;
return cljs$core$async$state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___48396,mults,ensure_mult,p))
})();
var state__47164__auto__ = (function (){var statearr_48394 = f__47163__auto__.call(null);
(statearr_48394[(6)] = c__47162__auto___48396);

return statearr_48394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___48396,mults,ensure_mult,p))
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
var G__48428 = arguments.length;
switch (G__48428) {
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
var G__48431 = arguments.length;
switch (G__48431) {
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
var G__48434 = arguments.length;
switch (G__48434) {
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
var c__47162__auto___48501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___48501,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___48501,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48473){
var state_val_48474 = (state_48473[(1)]);
if((state_val_48474 === (7))){
var state_48473__$1 = state_48473;
var statearr_48475_48502 = state_48473__$1;
(statearr_48475_48502[(2)] = null);

(statearr_48475_48502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48474 === (1))){
var state_48473__$1 = state_48473;
var statearr_48476_48503 = state_48473__$1;
(statearr_48476_48503[(2)] = null);

(statearr_48476_48503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48474 === (4))){
var inst_48437 = (state_48473[(7)]);
var inst_48439 = (inst_48437 < cnt);
var state_48473__$1 = state_48473;
if(cljs.core.truth_(inst_48439)){
var statearr_48477_48504 = state_48473__$1;
(statearr_48477_48504[(1)] = (6));

} else {
var statearr_48478_48505 = state_48473__$1;
(statearr_48478_48505[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48474 === (15))){
var inst_48469 = (state_48473[(2)]);
var state_48473__$1 = state_48473;
var statearr_48479_48506 = state_48473__$1;
(statearr_48479_48506[(2)] = inst_48469);

(statearr_48479_48506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48474 === (13))){
var inst_48462 = cljs.core.async.close_BANG_.call(null,out);
var state_48473__$1 = state_48473;
var statearr_48480_48507 = state_48473__$1;
(statearr_48480_48507[(2)] = inst_48462);

(statearr_48480_48507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48474 === (6))){
var state_48473__$1 = state_48473;
var statearr_48481_48508 = state_48473__$1;
(statearr_48481_48508[(2)] = null);

(statearr_48481_48508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48474 === (3))){
var inst_48471 = (state_48473[(2)]);
var state_48473__$1 = state_48473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48473__$1,inst_48471);
} else {
if((state_val_48474 === (12))){
var inst_48459 = (state_48473[(8)]);
var inst_48459__$1 = (state_48473[(2)]);
var inst_48460 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48459__$1);
var state_48473__$1 = (function (){var statearr_48482 = state_48473;
(statearr_48482[(8)] = inst_48459__$1);

return statearr_48482;
})();
if(cljs.core.truth_(inst_48460)){
var statearr_48483_48509 = state_48473__$1;
(statearr_48483_48509[(1)] = (13));

} else {
var statearr_48484_48510 = state_48473__$1;
(statearr_48484_48510[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48474 === (2))){
var inst_48436 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48437 = (0);
var state_48473__$1 = (function (){var statearr_48485 = state_48473;
(statearr_48485[(7)] = inst_48437);

(statearr_48485[(9)] = inst_48436);

return statearr_48485;
})();
var statearr_48486_48511 = state_48473__$1;
(statearr_48486_48511[(2)] = null);

(statearr_48486_48511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48474 === (11))){
var inst_48437 = (state_48473[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48473,(10),Object,null,(9));
var inst_48446 = chs__$1.call(null,inst_48437);
var inst_48447 = done.call(null,inst_48437);
var inst_48448 = cljs.core.async.take_BANG_.call(null,inst_48446,inst_48447);
var state_48473__$1 = state_48473;
var statearr_48487_48512 = state_48473__$1;
(statearr_48487_48512[(2)] = inst_48448);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48473__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48474 === (9))){
var inst_48437 = (state_48473[(7)]);
var inst_48450 = (state_48473[(2)]);
var inst_48451 = (inst_48437 + (1));
var inst_48437__$1 = inst_48451;
var state_48473__$1 = (function (){var statearr_48488 = state_48473;
(statearr_48488[(7)] = inst_48437__$1);

(statearr_48488[(10)] = inst_48450);

return statearr_48488;
})();
var statearr_48489_48513 = state_48473__$1;
(statearr_48489_48513[(2)] = null);

(statearr_48489_48513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48474 === (5))){
var inst_48457 = (state_48473[(2)]);
var state_48473__$1 = (function (){var statearr_48490 = state_48473;
(statearr_48490[(11)] = inst_48457);

return statearr_48490;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48473__$1,(12),dchan);
} else {
if((state_val_48474 === (14))){
var inst_48459 = (state_48473[(8)]);
var inst_48464 = cljs.core.apply.call(null,f,inst_48459);
var state_48473__$1 = state_48473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48473__$1,(16),out,inst_48464);
} else {
if((state_val_48474 === (16))){
var inst_48466 = (state_48473[(2)]);
var state_48473__$1 = (function (){var statearr_48491 = state_48473;
(statearr_48491[(12)] = inst_48466);

return statearr_48491;
})();
var statearr_48492_48514 = state_48473__$1;
(statearr_48492_48514[(2)] = null);

(statearr_48492_48514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48474 === (10))){
var inst_48441 = (state_48473[(2)]);
var inst_48442 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48473__$1 = (function (){var statearr_48493 = state_48473;
(statearr_48493[(13)] = inst_48441);

return statearr_48493;
})();
var statearr_48494_48515 = state_48473__$1;
(statearr_48494_48515[(2)] = inst_48442);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48473__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48474 === (8))){
var inst_48455 = (state_48473[(2)]);
var state_48473__$1 = state_48473;
var statearr_48495_48516 = state_48473__$1;
(statearr_48495_48516[(2)] = inst_48455);

(statearr_48495_48516[(1)] = (5));


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
});})(c__47162__auto___48501,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__47072__auto__,c__47162__auto___48501,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__47073__auto__ = null;
var cljs$core$async$state_machine__47073__auto____0 = (function (){
var statearr_48496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48496[(0)] = cljs$core$async$state_machine__47073__auto__);

(statearr_48496[(1)] = (1));

return statearr_48496;
});
var cljs$core$async$state_machine__47073__auto____1 = (function (state_48473){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_48473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e48497){if((e48497 instanceof Object)){
var ex__47076__auto__ = e48497;
var statearr_48498_48517 = state_48473;
(statearr_48498_48517[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48518 = state_48473;
state_48473 = G__48518;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$state_machine__47073__auto__ = function(state_48473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47073__auto____1.call(this,state_48473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47073__auto____0;
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47073__auto____1;
return cljs$core$async$state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___48501,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__47164__auto__ = (function (){var statearr_48499 = f__47163__auto__.call(null);
(statearr_48499[(6)] = c__47162__auto___48501);

return statearr_48499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___48501,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__48521 = arguments.length;
switch (G__48521) {
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
var c__47162__auto___48575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___48575,out){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___48575,out){
return (function (state_48553){
var state_val_48554 = (state_48553[(1)]);
if((state_val_48554 === (7))){
var inst_48533 = (state_48553[(7)]);
var inst_48532 = (state_48553[(8)]);
var inst_48532__$1 = (state_48553[(2)]);
var inst_48533__$1 = cljs.core.nth.call(null,inst_48532__$1,(0),null);
var inst_48534 = cljs.core.nth.call(null,inst_48532__$1,(1),null);
var inst_48535 = (inst_48533__$1 == null);
var state_48553__$1 = (function (){var statearr_48555 = state_48553;
(statearr_48555[(7)] = inst_48533__$1);

(statearr_48555[(8)] = inst_48532__$1);

(statearr_48555[(9)] = inst_48534);

return statearr_48555;
})();
if(cljs.core.truth_(inst_48535)){
var statearr_48556_48576 = state_48553__$1;
(statearr_48556_48576[(1)] = (8));

} else {
var statearr_48557_48577 = state_48553__$1;
(statearr_48557_48577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48554 === (1))){
var inst_48522 = cljs.core.vec.call(null,chs);
var inst_48523 = inst_48522;
var state_48553__$1 = (function (){var statearr_48558 = state_48553;
(statearr_48558[(10)] = inst_48523);

return statearr_48558;
})();
var statearr_48559_48578 = state_48553__$1;
(statearr_48559_48578[(2)] = null);

(statearr_48559_48578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48554 === (4))){
var inst_48523 = (state_48553[(10)]);
var state_48553__$1 = state_48553;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48553__$1,(7),inst_48523);
} else {
if((state_val_48554 === (6))){
var inst_48549 = (state_48553[(2)]);
var state_48553__$1 = state_48553;
var statearr_48560_48579 = state_48553__$1;
(statearr_48560_48579[(2)] = inst_48549);

(statearr_48560_48579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48554 === (3))){
var inst_48551 = (state_48553[(2)]);
var state_48553__$1 = state_48553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48553__$1,inst_48551);
} else {
if((state_val_48554 === (2))){
var inst_48523 = (state_48553[(10)]);
var inst_48525 = cljs.core.count.call(null,inst_48523);
var inst_48526 = (inst_48525 > (0));
var state_48553__$1 = state_48553;
if(cljs.core.truth_(inst_48526)){
var statearr_48562_48580 = state_48553__$1;
(statearr_48562_48580[(1)] = (4));

} else {
var statearr_48563_48581 = state_48553__$1;
(statearr_48563_48581[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48554 === (11))){
var inst_48523 = (state_48553[(10)]);
var inst_48542 = (state_48553[(2)]);
var tmp48561 = inst_48523;
var inst_48523__$1 = tmp48561;
var state_48553__$1 = (function (){var statearr_48564 = state_48553;
(statearr_48564[(10)] = inst_48523__$1);

(statearr_48564[(11)] = inst_48542);

return statearr_48564;
})();
var statearr_48565_48582 = state_48553__$1;
(statearr_48565_48582[(2)] = null);

(statearr_48565_48582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48554 === (9))){
var inst_48533 = (state_48553[(7)]);
var state_48553__$1 = state_48553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48553__$1,(11),out,inst_48533);
} else {
if((state_val_48554 === (5))){
var inst_48547 = cljs.core.async.close_BANG_.call(null,out);
var state_48553__$1 = state_48553;
var statearr_48566_48583 = state_48553__$1;
(statearr_48566_48583[(2)] = inst_48547);

(statearr_48566_48583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48554 === (10))){
var inst_48545 = (state_48553[(2)]);
var state_48553__$1 = state_48553;
var statearr_48567_48584 = state_48553__$1;
(statearr_48567_48584[(2)] = inst_48545);

(statearr_48567_48584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48554 === (8))){
var inst_48523 = (state_48553[(10)]);
var inst_48533 = (state_48553[(7)]);
var inst_48532 = (state_48553[(8)]);
var inst_48534 = (state_48553[(9)]);
var inst_48537 = (function (){var cs = inst_48523;
var vec__48528 = inst_48532;
var v = inst_48533;
var c = inst_48534;
return ((function (cs,vec__48528,v,c,inst_48523,inst_48533,inst_48532,inst_48534,state_val_48554,c__47162__auto___48575,out){
return (function (p1__48519_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48519_SHARP_);
});
;})(cs,vec__48528,v,c,inst_48523,inst_48533,inst_48532,inst_48534,state_val_48554,c__47162__auto___48575,out))
})();
var inst_48538 = cljs.core.filterv.call(null,inst_48537,inst_48523);
var inst_48523__$1 = inst_48538;
var state_48553__$1 = (function (){var statearr_48568 = state_48553;
(statearr_48568[(10)] = inst_48523__$1);

return statearr_48568;
})();
var statearr_48569_48585 = state_48553__$1;
(statearr_48569_48585[(2)] = null);

(statearr_48569_48585[(1)] = (2));


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
});})(c__47162__auto___48575,out))
;
return ((function (switch__47072__auto__,c__47162__auto___48575,out){
return (function() {
var cljs$core$async$state_machine__47073__auto__ = null;
var cljs$core$async$state_machine__47073__auto____0 = (function (){
var statearr_48570 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48570[(0)] = cljs$core$async$state_machine__47073__auto__);

(statearr_48570[(1)] = (1));

return statearr_48570;
});
var cljs$core$async$state_machine__47073__auto____1 = (function (state_48553){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_48553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e48571){if((e48571 instanceof Object)){
var ex__47076__auto__ = e48571;
var statearr_48572_48586 = state_48553;
(statearr_48572_48586[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48587 = state_48553;
state_48553 = G__48587;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$state_machine__47073__auto__ = function(state_48553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47073__auto____1.call(this,state_48553);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47073__auto____0;
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47073__auto____1;
return cljs$core$async$state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___48575,out))
})();
var state__47164__auto__ = (function (){var statearr_48573 = f__47163__auto__.call(null);
(statearr_48573[(6)] = c__47162__auto___48575);

return statearr_48573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___48575,out))
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
var G__48589 = arguments.length;
switch (G__48589) {
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
var c__47162__auto___48634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___48634,out){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___48634,out){
return (function (state_48613){
var state_val_48614 = (state_48613[(1)]);
if((state_val_48614 === (7))){
var inst_48595 = (state_48613[(7)]);
var inst_48595__$1 = (state_48613[(2)]);
var inst_48596 = (inst_48595__$1 == null);
var inst_48597 = cljs.core.not.call(null,inst_48596);
var state_48613__$1 = (function (){var statearr_48615 = state_48613;
(statearr_48615[(7)] = inst_48595__$1);

return statearr_48615;
})();
if(inst_48597){
var statearr_48616_48635 = state_48613__$1;
(statearr_48616_48635[(1)] = (8));

} else {
var statearr_48617_48636 = state_48613__$1;
(statearr_48617_48636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (1))){
var inst_48590 = (0);
var state_48613__$1 = (function (){var statearr_48618 = state_48613;
(statearr_48618[(8)] = inst_48590);

return statearr_48618;
})();
var statearr_48619_48637 = state_48613__$1;
(statearr_48619_48637[(2)] = null);

(statearr_48619_48637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (4))){
var state_48613__$1 = state_48613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48613__$1,(7),ch);
} else {
if((state_val_48614 === (6))){
var inst_48608 = (state_48613[(2)]);
var state_48613__$1 = state_48613;
var statearr_48620_48638 = state_48613__$1;
(statearr_48620_48638[(2)] = inst_48608);

(statearr_48620_48638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (3))){
var inst_48610 = (state_48613[(2)]);
var inst_48611 = cljs.core.async.close_BANG_.call(null,out);
var state_48613__$1 = (function (){var statearr_48621 = state_48613;
(statearr_48621[(9)] = inst_48610);

return statearr_48621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48613__$1,inst_48611);
} else {
if((state_val_48614 === (2))){
var inst_48590 = (state_48613[(8)]);
var inst_48592 = (inst_48590 < n);
var state_48613__$1 = state_48613;
if(cljs.core.truth_(inst_48592)){
var statearr_48622_48639 = state_48613__$1;
(statearr_48622_48639[(1)] = (4));

} else {
var statearr_48623_48640 = state_48613__$1;
(statearr_48623_48640[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (11))){
var inst_48590 = (state_48613[(8)]);
var inst_48600 = (state_48613[(2)]);
var inst_48601 = (inst_48590 + (1));
var inst_48590__$1 = inst_48601;
var state_48613__$1 = (function (){var statearr_48624 = state_48613;
(statearr_48624[(10)] = inst_48600);

(statearr_48624[(8)] = inst_48590__$1);

return statearr_48624;
})();
var statearr_48625_48641 = state_48613__$1;
(statearr_48625_48641[(2)] = null);

(statearr_48625_48641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (9))){
var state_48613__$1 = state_48613;
var statearr_48626_48642 = state_48613__$1;
(statearr_48626_48642[(2)] = null);

(statearr_48626_48642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (5))){
var state_48613__$1 = state_48613;
var statearr_48627_48643 = state_48613__$1;
(statearr_48627_48643[(2)] = null);

(statearr_48627_48643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (10))){
var inst_48605 = (state_48613[(2)]);
var state_48613__$1 = state_48613;
var statearr_48628_48644 = state_48613__$1;
(statearr_48628_48644[(2)] = inst_48605);

(statearr_48628_48644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (8))){
var inst_48595 = (state_48613[(7)]);
var state_48613__$1 = state_48613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48613__$1,(11),out,inst_48595);
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
});})(c__47162__auto___48634,out))
;
return ((function (switch__47072__auto__,c__47162__auto___48634,out){
return (function() {
var cljs$core$async$state_machine__47073__auto__ = null;
var cljs$core$async$state_machine__47073__auto____0 = (function (){
var statearr_48629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48629[(0)] = cljs$core$async$state_machine__47073__auto__);

(statearr_48629[(1)] = (1));

return statearr_48629;
});
var cljs$core$async$state_machine__47073__auto____1 = (function (state_48613){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_48613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e48630){if((e48630 instanceof Object)){
var ex__47076__auto__ = e48630;
var statearr_48631_48645 = state_48613;
(statearr_48631_48645[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48646 = state_48613;
state_48613 = G__48646;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$state_machine__47073__auto__ = function(state_48613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47073__auto____1.call(this,state_48613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47073__auto____0;
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47073__auto____1;
return cljs$core$async$state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___48634,out))
})();
var state__47164__auto__ = (function (){var statearr_48632 = f__47163__auto__.call(null);
(statearr_48632[(6)] = c__47162__auto___48634);

return statearr_48632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___48634,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48648 = (function (f,ch,meta48649){
this.f = f;
this.ch = ch;
this.meta48649 = meta48649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48650,meta48649__$1){
var self__ = this;
var _48650__$1 = this;
return (new cljs.core.async.t_cljs$core$async48648(self__.f,self__.ch,meta48649__$1));
});

cljs.core.async.t_cljs$core$async48648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48650){
var self__ = this;
var _48650__$1 = this;
return self__.meta48649;
});

cljs.core.async.t_cljs$core$async48648.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48648.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48648.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48651 = (function (f,ch,meta48649,_,fn1,meta48652){
this.f = f;
this.ch = ch;
this.meta48649 = meta48649;
this._ = _;
this.fn1 = fn1;
this.meta48652 = meta48652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48653,meta48652__$1){
var self__ = this;
var _48653__$1 = this;
return (new cljs.core.async.t_cljs$core$async48651(self__.f,self__.ch,self__.meta48649,self__._,self__.fn1,meta48652__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48653){
var self__ = this;
var _48653__$1 = this;
return self__.meta48652;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48651.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48651.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48647_SHARP_){
return f1.call(null,(((p1__48647_SHARP_ == null))?null:self__.f.call(null,p1__48647_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48651.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48649","meta48649",1585349135,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48648","cljs.core.async/t_cljs$core$async48648",1169249938,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48652","meta48652",-1040087273,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48651";

cljs.core.async.t_cljs$core$async48651.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async48651");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48651 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48651(f__$1,ch__$1,meta48649__$1,___$2,fn1__$1,meta48652){
return (new cljs.core.async.t_cljs$core$async48651(f__$1,ch__$1,meta48649__$1,___$2,fn1__$1,meta48652));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48651(self__.f,self__.ch,self__.meta48649,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async48648.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48649","meta48649",1585349135,null)], null);
});

cljs.core.async.t_cljs$core$async48648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48648";

cljs.core.async.t_cljs$core$async48648.cljs$lang$ctorPrWriter = (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async48648");
});

cljs.core.async.__GT_t_cljs$core$async48648 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48648(f__$1,ch__$1,meta48649){
return (new cljs.core.async.t_cljs$core$async48648(f__$1,ch__$1,meta48649));
});

}

return (new cljs.core.async.t_cljs$core$async48648(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48654 = (function (f,ch,meta48655){
this.f = f;
this.ch = ch;
this.meta48655 = meta48655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48656,meta48655__$1){
var self__ = this;
var _48656__$1 = this;
return (new cljs.core.async.t_cljs$core$async48654(self__.f,self__.ch,meta48655__$1));
});

cljs.core.async.t_cljs$core$async48654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48656){
var self__ = this;
var _48656__$1 = this;
return self__.meta48655;
});

cljs.core.async.t_cljs$core$async48654.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48654.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48654.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48655","meta48655",-979424581,null)], null);
});

cljs.core.async.t_cljs$core$async48654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48654";

cljs.core.async.t_cljs$core$async48654.cljs$lang$ctorPrWriter = (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async48654");
});

cljs.core.async.__GT_t_cljs$core$async48654 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48654(f__$1,ch__$1,meta48655){
return (new cljs.core.async.t_cljs$core$async48654(f__$1,ch__$1,meta48655));
});

}

return (new cljs.core.async.t_cljs$core$async48654(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48657 = (function (p,ch,meta48658){
this.p = p;
this.ch = ch;
this.meta48658 = meta48658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48659,meta48658__$1){
var self__ = this;
var _48659__$1 = this;
return (new cljs.core.async.t_cljs$core$async48657(self__.p,self__.ch,meta48658__$1));
});

cljs.core.async.t_cljs$core$async48657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48659){
var self__ = this;
var _48659__$1 = this;
return self__.meta48658;
});

cljs.core.async.t_cljs$core$async48657.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48657.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48657.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48657.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48657.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48657.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48657.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48658","meta48658",2128769829,null)], null);
});

cljs.core.async.t_cljs$core$async48657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48657";

cljs.core.async.t_cljs$core$async48657.cljs$lang$ctorPrWriter = (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.core.async/t_cljs$core$async48657");
});

cljs.core.async.__GT_t_cljs$core$async48657 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48657(p__$1,ch__$1,meta48658){
return (new cljs.core.async.t_cljs$core$async48657(p__$1,ch__$1,meta48658));
});

}

return (new cljs.core.async.t_cljs$core$async48657(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48661 = arguments.length;
switch (G__48661) {
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
var c__47162__auto___48701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___48701,out){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___48701,out){
return (function (state_48682){
var state_val_48683 = (state_48682[(1)]);
if((state_val_48683 === (7))){
var inst_48678 = (state_48682[(2)]);
var state_48682__$1 = state_48682;
var statearr_48684_48702 = state_48682__$1;
(statearr_48684_48702[(2)] = inst_48678);

(statearr_48684_48702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48683 === (1))){
var state_48682__$1 = state_48682;
var statearr_48685_48703 = state_48682__$1;
(statearr_48685_48703[(2)] = null);

(statearr_48685_48703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48683 === (4))){
var inst_48664 = (state_48682[(7)]);
var inst_48664__$1 = (state_48682[(2)]);
var inst_48665 = (inst_48664__$1 == null);
var state_48682__$1 = (function (){var statearr_48686 = state_48682;
(statearr_48686[(7)] = inst_48664__$1);

return statearr_48686;
})();
if(cljs.core.truth_(inst_48665)){
var statearr_48687_48704 = state_48682__$1;
(statearr_48687_48704[(1)] = (5));

} else {
var statearr_48688_48705 = state_48682__$1;
(statearr_48688_48705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48683 === (6))){
var inst_48664 = (state_48682[(7)]);
var inst_48669 = p.call(null,inst_48664);
var state_48682__$1 = state_48682;
if(cljs.core.truth_(inst_48669)){
var statearr_48689_48706 = state_48682__$1;
(statearr_48689_48706[(1)] = (8));

} else {
var statearr_48690_48707 = state_48682__$1;
(statearr_48690_48707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48683 === (3))){
var inst_48680 = (state_48682[(2)]);
var state_48682__$1 = state_48682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48682__$1,inst_48680);
} else {
if((state_val_48683 === (2))){
var state_48682__$1 = state_48682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48682__$1,(4),ch);
} else {
if((state_val_48683 === (11))){
var inst_48672 = (state_48682[(2)]);
var state_48682__$1 = state_48682;
var statearr_48691_48708 = state_48682__$1;
(statearr_48691_48708[(2)] = inst_48672);

(statearr_48691_48708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48683 === (9))){
var state_48682__$1 = state_48682;
var statearr_48692_48709 = state_48682__$1;
(statearr_48692_48709[(2)] = null);

(statearr_48692_48709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48683 === (5))){
var inst_48667 = cljs.core.async.close_BANG_.call(null,out);
var state_48682__$1 = state_48682;
var statearr_48693_48710 = state_48682__$1;
(statearr_48693_48710[(2)] = inst_48667);

(statearr_48693_48710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48683 === (10))){
var inst_48675 = (state_48682[(2)]);
var state_48682__$1 = (function (){var statearr_48694 = state_48682;
(statearr_48694[(8)] = inst_48675);

return statearr_48694;
})();
var statearr_48695_48711 = state_48682__$1;
(statearr_48695_48711[(2)] = null);

(statearr_48695_48711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48683 === (8))){
var inst_48664 = (state_48682[(7)]);
var state_48682__$1 = state_48682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48682__$1,(11),out,inst_48664);
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
});})(c__47162__auto___48701,out))
;
return ((function (switch__47072__auto__,c__47162__auto___48701,out){
return (function() {
var cljs$core$async$state_machine__47073__auto__ = null;
var cljs$core$async$state_machine__47073__auto____0 = (function (){
var statearr_48696 = [null,null,null,null,null,null,null,null,null];
(statearr_48696[(0)] = cljs$core$async$state_machine__47073__auto__);

(statearr_48696[(1)] = (1));

return statearr_48696;
});
var cljs$core$async$state_machine__47073__auto____1 = (function (state_48682){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_48682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e48697){if((e48697 instanceof Object)){
var ex__47076__auto__ = e48697;
var statearr_48698_48712 = state_48682;
(statearr_48698_48712[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48713 = state_48682;
state_48682 = G__48713;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$state_machine__47073__auto__ = function(state_48682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47073__auto____1.call(this,state_48682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47073__auto____0;
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47073__auto____1;
return cljs$core$async$state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___48701,out))
})();
var state__47164__auto__ = (function (){var statearr_48699 = f__47163__auto__.call(null);
(statearr_48699[(6)] = c__47162__auto___48701);

return statearr_48699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___48701,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48715 = arguments.length;
switch (G__48715) {
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
var c__47162__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto__){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto__){
return (function (state_48778){
var state_val_48779 = (state_48778[(1)]);
if((state_val_48779 === (7))){
var inst_48774 = (state_48778[(2)]);
var state_48778__$1 = state_48778;
var statearr_48780_48818 = state_48778__$1;
(statearr_48780_48818[(2)] = inst_48774);

(statearr_48780_48818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (20))){
var inst_48744 = (state_48778[(7)]);
var inst_48755 = (state_48778[(2)]);
var inst_48756 = cljs.core.next.call(null,inst_48744);
var inst_48730 = inst_48756;
var inst_48731 = null;
var inst_48732 = (0);
var inst_48733 = (0);
var state_48778__$1 = (function (){var statearr_48781 = state_48778;
(statearr_48781[(8)] = inst_48730);

(statearr_48781[(9)] = inst_48755);

(statearr_48781[(10)] = inst_48731);

(statearr_48781[(11)] = inst_48733);

(statearr_48781[(12)] = inst_48732);

return statearr_48781;
})();
var statearr_48782_48819 = state_48778__$1;
(statearr_48782_48819[(2)] = null);

(statearr_48782_48819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (1))){
var state_48778__$1 = state_48778;
var statearr_48783_48820 = state_48778__$1;
(statearr_48783_48820[(2)] = null);

(statearr_48783_48820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (4))){
var inst_48719 = (state_48778[(13)]);
var inst_48719__$1 = (state_48778[(2)]);
var inst_48720 = (inst_48719__$1 == null);
var state_48778__$1 = (function (){var statearr_48784 = state_48778;
(statearr_48784[(13)] = inst_48719__$1);

return statearr_48784;
})();
if(cljs.core.truth_(inst_48720)){
var statearr_48785_48821 = state_48778__$1;
(statearr_48785_48821[(1)] = (5));

} else {
var statearr_48786_48822 = state_48778__$1;
(statearr_48786_48822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (15))){
var state_48778__$1 = state_48778;
var statearr_48790_48823 = state_48778__$1;
(statearr_48790_48823[(2)] = null);

(statearr_48790_48823[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (21))){
var state_48778__$1 = state_48778;
var statearr_48791_48824 = state_48778__$1;
(statearr_48791_48824[(2)] = null);

(statearr_48791_48824[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (13))){
var inst_48730 = (state_48778[(8)]);
var inst_48731 = (state_48778[(10)]);
var inst_48733 = (state_48778[(11)]);
var inst_48732 = (state_48778[(12)]);
var inst_48740 = (state_48778[(2)]);
var inst_48741 = (inst_48733 + (1));
var tmp48787 = inst_48730;
var tmp48788 = inst_48731;
var tmp48789 = inst_48732;
var inst_48730__$1 = tmp48787;
var inst_48731__$1 = tmp48788;
var inst_48732__$1 = tmp48789;
var inst_48733__$1 = inst_48741;
var state_48778__$1 = (function (){var statearr_48792 = state_48778;
(statearr_48792[(8)] = inst_48730__$1);

(statearr_48792[(10)] = inst_48731__$1);

(statearr_48792[(14)] = inst_48740);

(statearr_48792[(11)] = inst_48733__$1);

(statearr_48792[(12)] = inst_48732__$1);

return statearr_48792;
})();
var statearr_48793_48825 = state_48778__$1;
(statearr_48793_48825[(2)] = null);

(statearr_48793_48825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (22))){
var state_48778__$1 = state_48778;
var statearr_48794_48826 = state_48778__$1;
(statearr_48794_48826[(2)] = null);

(statearr_48794_48826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (6))){
var inst_48719 = (state_48778[(13)]);
var inst_48728 = f.call(null,inst_48719);
var inst_48729 = cljs.core.seq.call(null,inst_48728);
var inst_48730 = inst_48729;
var inst_48731 = null;
var inst_48732 = (0);
var inst_48733 = (0);
var state_48778__$1 = (function (){var statearr_48795 = state_48778;
(statearr_48795[(8)] = inst_48730);

(statearr_48795[(10)] = inst_48731);

(statearr_48795[(11)] = inst_48733);

(statearr_48795[(12)] = inst_48732);

return statearr_48795;
})();
var statearr_48796_48827 = state_48778__$1;
(statearr_48796_48827[(2)] = null);

(statearr_48796_48827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (17))){
var inst_48744 = (state_48778[(7)]);
var inst_48748 = cljs.core.chunk_first.call(null,inst_48744);
var inst_48749 = cljs.core.chunk_rest.call(null,inst_48744);
var inst_48750 = cljs.core.count.call(null,inst_48748);
var inst_48730 = inst_48749;
var inst_48731 = inst_48748;
var inst_48732 = inst_48750;
var inst_48733 = (0);
var state_48778__$1 = (function (){var statearr_48797 = state_48778;
(statearr_48797[(8)] = inst_48730);

(statearr_48797[(10)] = inst_48731);

(statearr_48797[(11)] = inst_48733);

(statearr_48797[(12)] = inst_48732);

return statearr_48797;
})();
var statearr_48798_48828 = state_48778__$1;
(statearr_48798_48828[(2)] = null);

(statearr_48798_48828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (3))){
var inst_48776 = (state_48778[(2)]);
var state_48778__$1 = state_48778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48778__$1,inst_48776);
} else {
if((state_val_48779 === (12))){
var inst_48764 = (state_48778[(2)]);
var state_48778__$1 = state_48778;
var statearr_48799_48829 = state_48778__$1;
(statearr_48799_48829[(2)] = inst_48764);

(statearr_48799_48829[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (2))){
var state_48778__$1 = state_48778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48778__$1,(4),in$);
} else {
if((state_val_48779 === (23))){
var inst_48772 = (state_48778[(2)]);
var state_48778__$1 = state_48778;
var statearr_48800_48830 = state_48778__$1;
(statearr_48800_48830[(2)] = inst_48772);

(statearr_48800_48830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (19))){
var inst_48759 = (state_48778[(2)]);
var state_48778__$1 = state_48778;
var statearr_48801_48831 = state_48778__$1;
(statearr_48801_48831[(2)] = inst_48759);

(statearr_48801_48831[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (11))){
var inst_48730 = (state_48778[(8)]);
var inst_48744 = (state_48778[(7)]);
var inst_48744__$1 = cljs.core.seq.call(null,inst_48730);
var state_48778__$1 = (function (){var statearr_48802 = state_48778;
(statearr_48802[(7)] = inst_48744__$1);

return statearr_48802;
})();
if(inst_48744__$1){
var statearr_48803_48832 = state_48778__$1;
(statearr_48803_48832[(1)] = (14));

} else {
var statearr_48804_48833 = state_48778__$1;
(statearr_48804_48833[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (9))){
var inst_48766 = (state_48778[(2)]);
var inst_48767 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48778__$1 = (function (){var statearr_48805 = state_48778;
(statearr_48805[(15)] = inst_48766);

return statearr_48805;
})();
if(cljs.core.truth_(inst_48767)){
var statearr_48806_48834 = state_48778__$1;
(statearr_48806_48834[(1)] = (21));

} else {
var statearr_48807_48835 = state_48778__$1;
(statearr_48807_48835[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (5))){
var inst_48722 = cljs.core.async.close_BANG_.call(null,out);
var state_48778__$1 = state_48778;
var statearr_48808_48836 = state_48778__$1;
(statearr_48808_48836[(2)] = inst_48722);

(statearr_48808_48836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (14))){
var inst_48744 = (state_48778[(7)]);
var inst_48746 = cljs.core.chunked_seq_QMARK_.call(null,inst_48744);
var state_48778__$1 = state_48778;
if(inst_48746){
var statearr_48809_48837 = state_48778__$1;
(statearr_48809_48837[(1)] = (17));

} else {
var statearr_48810_48838 = state_48778__$1;
(statearr_48810_48838[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (16))){
var inst_48762 = (state_48778[(2)]);
var state_48778__$1 = state_48778;
var statearr_48811_48839 = state_48778__$1;
(statearr_48811_48839[(2)] = inst_48762);

(statearr_48811_48839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48779 === (10))){
var inst_48731 = (state_48778[(10)]);
var inst_48733 = (state_48778[(11)]);
var inst_48738 = cljs.core._nth.call(null,inst_48731,inst_48733);
var state_48778__$1 = state_48778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48778__$1,(13),out,inst_48738);
} else {
if((state_val_48779 === (18))){
var inst_48744 = (state_48778[(7)]);
var inst_48753 = cljs.core.first.call(null,inst_48744);
var state_48778__$1 = state_48778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48778__$1,(20),out,inst_48753);
} else {
if((state_val_48779 === (8))){
var inst_48733 = (state_48778[(11)]);
var inst_48732 = (state_48778[(12)]);
var inst_48735 = (inst_48733 < inst_48732);
var inst_48736 = inst_48735;
var state_48778__$1 = state_48778;
if(cljs.core.truth_(inst_48736)){
var statearr_48812_48840 = state_48778__$1;
(statearr_48812_48840[(1)] = (10));

} else {
var statearr_48813_48841 = state_48778__$1;
(statearr_48813_48841[(1)] = (11));

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
});})(c__47162__auto__))
;
return ((function (switch__47072__auto__,c__47162__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__47073__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47073__auto____0 = (function (){
var statearr_48814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48814[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47073__auto__);

(statearr_48814[(1)] = (1));

return statearr_48814;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47073__auto____1 = (function (state_48778){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_48778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e48815){if((e48815 instanceof Object)){
var ex__47076__auto__ = e48815;
var statearr_48816_48842 = state_48778;
(statearr_48816_48842[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48843 = state_48778;
state_48778 = G__48843;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47073__auto__ = function(state_48778){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47073__auto____1.call(this,state_48778);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47073__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47073__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto__))
})();
var state__47164__auto__ = (function (){var statearr_48817 = f__47163__auto__.call(null);
(statearr_48817[(6)] = c__47162__auto__);

return statearr_48817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto__))
);

return c__47162__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48845 = arguments.length;
switch (G__48845) {
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
var G__48848 = arguments.length;
switch (G__48848) {
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
var G__48851 = arguments.length;
switch (G__48851) {
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
var c__47162__auto___48898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___48898,out){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___48898,out){
return (function (state_48875){
var state_val_48876 = (state_48875[(1)]);
if((state_val_48876 === (7))){
var inst_48870 = (state_48875[(2)]);
var state_48875__$1 = state_48875;
var statearr_48877_48899 = state_48875__$1;
(statearr_48877_48899[(2)] = inst_48870);

(statearr_48877_48899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48876 === (1))){
var inst_48852 = null;
var state_48875__$1 = (function (){var statearr_48878 = state_48875;
(statearr_48878[(7)] = inst_48852);

return statearr_48878;
})();
var statearr_48879_48900 = state_48875__$1;
(statearr_48879_48900[(2)] = null);

(statearr_48879_48900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48876 === (4))){
var inst_48855 = (state_48875[(8)]);
var inst_48855__$1 = (state_48875[(2)]);
var inst_48856 = (inst_48855__$1 == null);
var inst_48857 = cljs.core.not.call(null,inst_48856);
var state_48875__$1 = (function (){var statearr_48880 = state_48875;
(statearr_48880[(8)] = inst_48855__$1);

return statearr_48880;
})();
if(inst_48857){
var statearr_48881_48901 = state_48875__$1;
(statearr_48881_48901[(1)] = (5));

} else {
var statearr_48882_48902 = state_48875__$1;
(statearr_48882_48902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48876 === (6))){
var state_48875__$1 = state_48875;
var statearr_48883_48903 = state_48875__$1;
(statearr_48883_48903[(2)] = null);

(statearr_48883_48903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48876 === (3))){
var inst_48872 = (state_48875[(2)]);
var inst_48873 = cljs.core.async.close_BANG_.call(null,out);
var state_48875__$1 = (function (){var statearr_48884 = state_48875;
(statearr_48884[(9)] = inst_48872);

return statearr_48884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48875__$1,inst_48873);
} else {
if((state_val_48876 === (2))){
var state_48875__$1 = state_48875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48875__$1,(4),ch);
} else {
if((state_val_48876 === (11))){
var inst_48855 = (state_48875[(8)]);
var inst_48864 = (state_48875[(2)]);
var inst_48852 = inst_48855;
var state_48875__$1 = (function (){var statearr_48885 = state_48875;
(statearr_48885[(10)] = inst_48864);

(statearr_48885[(7)] = inst_48852);

return statearr_48885;
})();
var statearr_48886_48904 = state_48875__$1;
(statearr_48886_48904[(2)] = null);

(statearr_48886_48904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48876 === (9))){
var inst_48855 = (state_48875[(8)]);
var state_48875__$1 = state_48875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48875__$1,(11),out,inst_48855);
} else {
if((state_val_48876 === (5))){
var inst_48855 = (state_48875[(8)]);
var inst_48852 = (state_48875[(7)]);
var inst_48859 = cljs.core._EQ_.call(null,inst_48855,inst_48852);
var state_48875__$1 = state_48875;
if(inst_48859){
var statearr_48888_48905 = state_48875__$1;
(statearr_48888_48905[(1)] = (8));

} else {
var statearr_48889_48906 = state_48875__$1;
(statearr_48889_48906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48876 === (10))){
var inst_48867 = (state_48875[(2)]);
var state_48875__$1 = state_48875;
var statearr_48890_48907 = state_48875__$1;
(statearr_48890_48907[(2)] = inst_48867);

(statearr_48890_48907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48876 === (8))){
var inst_48852 = (state_48875[(7)]);
var tmp48887 = inst_48852;
var inst_48852__$1 = tmp48887;
var state_48875__$1 = (function (){var statearr_48891 = state_48875;
(statearr_48891[(7)] = inst_48852__$1);

return statearr_48891;
})();
var statearr_48892_48908 = state_48875__$1;
(statearr_48892_48908[(2)] = null);

(statearr_48892_48908[(1)] = (2));


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
});})(c__47162__auto___48898,out))
;
return ((function (switch__47072__auto__,c__47162__auto___48898,out){
return (function() {
var cljs$core$async$state_machine__47073__auto__ = null;
var cljs$core$async$state_machine__47073__auto____0 = (function (){
var statearr_48893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48893[(0)] = cljs$core$async$state_machine__47073__auto__);

(statearr_48893[(1)] = (1));

return statearr_48893;
});
var cljs$core$async$state_machine__47073__auto____1 = (function (state_48875){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_48875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e48894){if((e48894 instanceof Object)){
var ex__47076__auto__ = e48894;
var statearr_48895_48909 = state_48875;
(statearr_48895_48909[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48910 = state_48875;
state_48875 = G__48910;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$state_machine__47073__auto__ = function(state_48875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47073__auto____1.call(this,state_48875);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47073__auto____0;
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47073__auto____1;
return cljs$core$async$state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___48898,out))
})();
var state__47164__auto__ = (function (){var statearr_48896 = f__47163__auto__.call(null);
(statearr_48896[(6)] = c__47162__auto___48898);

return statearr_48896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___48898,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48912 = arguments.length;
switch (G__48912) {
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
var c__47162__auto___48978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___48978,out){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___48978,out){
return (function (state_48950){
var state_val_48951 = (state_48950[(1)]);
if((state_val_48951 === (7))){
var inst_48946 = (state_48950[(2)]);
var state_48950__$1 = state_48950;
var statearr_48952_48979 = state_48950__$1;
(statearr_48952_48979[(2)] = inst_48946);

(statearr_48952_48979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (1))){
var inst_48913 = (new Array(n));
var inst_48914 = inst_48913;
var inst_48915 = (0);
var state_48950__$1 = (function (){var statearr_48953 = state_48950;
(statearr_48953[(7)] = inst_48915);

(statearr_48953[(8)] = inst_48914);

return statearr_48953;
})();
var statearr_48954_48980 = state_48950__$1;
(statearr_48954_48980[(2)] = null);

(statearr_48954_48980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (4))){
var inst_48918 = (state_48950[(9)]);
var inst_48918__$1 = (state_48950[(2)]);
var inst_48919 = (inst_48918__$1 == null);
var inst_48920 = cljs.core.not.call(null,inst_48919);
var state_48950__$1 = (function (){var statearr_48955 = state_48950;
(statearr_48955[(9)] = inst_48918__$1);

return statearr_48955;
})();
if(inst_48920){
var statearr_48956_48981 = state_48950__$1;
(statearr_48956_48981[(1)] = (5));

} else {
var statearr_48957_48982 = state_48950__$1;
(statearr_48957_48982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (15))){
var inst_48940 = (state_48950[(2)]);
var state_48950__$1 = state_48950;
var statearr_48958_48983 = state_48950__$1;
(statearr_48958_48983[(2)] = inst_48940);

(statearr_48958_48983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (13))){
var state_48950__$1 = state_48950;
var statearr_48959_48984 = state_48950__$1;
(statearr_48959_48984[(2)] = null);

(statearr_48959_48984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (6))){
var inst_48915 = (state_48950[(7)]);
var inst_48936 = (inst_48915 > (0));
var state_48950__$1 = state_48950;
if(cljs.core.truth_(inst_48936)){
var statearr_48960_48985 = state_48950__$1;
(statearr_48960_48985[(1)] = (12));

} else {
var statearr_48961_48986 = state_48950__$1;
(statearr_48961_48986[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (3))){
var inst_48948 = (state_48950[(2)]);
var state_48950__$1 = state_48950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48950__$1,inst_48948);
} else {
if((state_val_48951 === (12))){
var inst_48914 = (state_48950[(8)]);
var inst_48938 = cljs.core.vec.call(null,inst_48914);
var state_48950__$1 = state_48950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48950__$1,(15),out,inst_48938);
} else {
if((state_val_48951 === (2))){
var state_48950__$1 = state_48950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48950__$1,(4),ch);
} else {
if((state_val_48951 === (11))){
var inst_48930 = (state_48950[(2)]);
var inst_48931 = (new Array(n));
var inst_48914 = inst_48931;
var inst_48915 = (0);
var state_48950__$1 = (function (){var statearr_48962 = state_48950;
(statearr_48962[(10)] = inst_48930);

(statearr_48962[(7)] = inst_48915);

(statearr_48962[(8)] = inst_48914);

return statearr_48962;
})();
var statearr_48963_48987 = state_48950__$1;
(statearr_48963_48987[(2)] = null);

(statearr_48963_48987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (9))){
var inst_48914 = (state_48950[(8)]);
var inst_48928 = cljs.core.vec.call(null,inst_48914);
var state_48950__$1 = state_48950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48950__$1,(11),out,inst_48928);
} else {
if((state_val_48951 === (5))){
var inst_48915 = (state_48950[(7)]);
var inst_48918 = (state_48950[(9)]);
var inst_48923 = (state_48950[(11)]);
var inst_48914 = (state_48950[(8)]);
var inst_48922 = (inst_48914[inst_48915] = inst_48918);
var inst_48923__$1 = (inst_48915 + (1));
var inst_48924 = (inst_48923__$1 < n);
var state_48950__$1 = (function (){var statearr_48964 = state_48950;
(statearr_48964[(12)] = inst_48922);

(statearr_48964[(11)] = inst_48923__$1);

return statearr_48964;
})();
if(cljs.core.truth_(inst_48924)){
var statearr_48965_48988 = state_48950__$1;
(statearr_48965_48988[(1)] = (8));

} else {
var statearr_48966_48989 = state_48950__$1;
(statearr_48966_48989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (14))){
var inst_48943 = (state_48950[(2)]);
var inst_48944 = cljs.core.async.close_BANG_.call(null,out);
var state_48950__$1 = (function (){var statearr_48968 = state_48950;
(statearr_48968[(13)] = inst_48943);

return statearr_48968;
})();
var statearr_48969_48990 = state_48950__$1;
(statearr_48969_48990[(2)] = inst_48944);

(statearr_48969_48990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (10))){
var inst_48934 = (state_48950[(2)]);
var state_48950__$1 = state_48950;
var statearr_48970_48991 = state_48950__$1;
(statearr_48970_48991[(2)] = inst_48934);

(statearr_48970_48991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (8))){
var inst_48923 = (state_48950[(11)]);
var inst_48914 = (state_48950[(8)]);
var tmp48967 = inst_48914;
var inst_48914__$1 = tmp48967;
var inst_48915 = inst_48923;
var state_48950__$1 = (function (){var statearr_48971 = state_48950;
(statearr_48971[(7)] = inst_48915);

(statearr_48971[(8)] = inst_48914__$1);

return statearr_48971;
})();
var statearr_48972_48992 = state_48950__$1;
(statearr_48972_48992[(2)] = null);

(statearr_48972_48992[(1)] = (2));


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
});})(c__47162__auto___48978,out))
;
return ((function (switch__47072__auto__,c__47162__auto___48978,out){
return (function() {
var cljs$core$async$state_machine__47073__auto__ = null;
var cljs$core$async$state_machine__47073__auto____0 = (function (){
var statearr_48973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48973[(0)] = cljs$core$async$state_machine__47073__auto__);

(statearr_48973[(1)] = (1));

return statearr_48973;
});
var cljs$core$async$state_machine__47073__auto____1 = (function (state_48950){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_48950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e48974){if((e48974 instanceof Object)){
var ex__47076__auto__ = e48974;
var statearr_48975_48993 = state_48950;
(statearr_48975_48993[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48994 = state_48950;
state_48950 = G__48994;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$state_machine__47073__auto__ = function(state_48950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47073__auto____1.call(this,state_48950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47073__auto____0;
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47073__auto____1;
return cljs$core$async$state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___48978,out))
})();
var state__47164__auto__ = (function (){var statearr_48976 = f__47163__auto__.call(null);
(statearr_48976[(6)] = c__47162__auto___48978);

return statearr_48976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___48978,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48996 = arguments.length;
switch (G__48996) {
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
var c__47162__auto___49066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___49066,out){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___49066,out){
return (function (state_49038){
var state_val_49039 = (state_49038[(1)]);
if((state_val_49039 === (7))){
var inst_49034 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
var statearr_49040_49067 = state_49038__$1;
(statearr_49040_49067[(2)] = inst_49034);

(statearr_49040_49067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (1))){
var inst_48997 = [];
var inst_48998 = inst_48997;
var inst_48999 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49038__$1 = (function (){var statearr_49041 = state_49038;
(statearr_49041[(7)] = inst_48998);

(statearr_49041[(8)] = inst_48999);

return statearr_49041;
})();
var statearr_49042_49068 = state_49038__$1;
(statearr_49042_49068[(2)] = null);

(statearr_49042_49068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (4))){
var inst_49002 = (state_49038[(9)]);
var inst_49002__$1 = (state_49038[(2)]);
var inst_49003 = (inst_49002__$1 == null);
var inst_49004 = cljs.core.not.call(null,inst_49003);
var state_49038__$1 = (function (){var statearr_49043 = state_49038;
(statearr_49043[(9)] = inst_49002__$1);

return statearr_49043;
})();
if(inst_49004){
var statearr_49044_49069 = state_49038__$1;
(statearr_49044_49069[(1)] = (5));

} else {
var statearr_49045_49070 = state_49038__$1;
(statearr_49045_49070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (15))){
var inst_49028 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
var statearr_49046_49071 = state_49038__$1;
(statearr_49046_49071[(2)] = inst_49028);

(statearr_49046_49071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (13))){
var state_49038__$1 = state_49038;
var statearr_49047_49072 = state_49038__$1;
(statearr_49047_49072[(2)] = null);

(statearr_49047_49072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (6))){
var inst_48998 = (state_49038[(7)]);
var inst_49023 = inst_48998.length;
var inst_49024 = (inst_49023 > (0));
var state_49038__$1 = state_49038;
if(cljs.core.truth_(inst_49024)){
var statearr_49048_49073 = state_49038__$1;
(statearr_49048_49073[(1)] = (12));

} else {
var statearr_49049_49074 = state_49038__$1;
(statearr_49049_49074[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (3))){
var inst_49036 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49038__$1,inst_49036);
} else {
if((state_val_49039 === (12))){
var inst_48998 = (state_49038[(7)]);
var inst_49026 = cljs.core.vec.call(null,inst_48998);
var state_49038__$1 = state_49038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49038__$1,(15),out,inst_49026);
} else {
if((state_val_49039 === (2))){
var state_49038__$1 = state_49038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49038__$1,(4),ch);
} else {
if((state_val_49039 === (11))){
var inst_49006 = (state_49038[(10)]);
var inst_49002 = (state_49038[(9)]);
var inst_49016 = (state_49038[(2)]);
var inst_49017 = [];
var inst_49018 = inst_49017.push(inst_49002);
var inst_48998 = inst_49017;
var inst_48999 = inst_49006;
var state_49038__$1 = (function (){var statearr_49050 = state_49038;
(statearr_49050[(11)] = inst_49016);

(statearr_49050[(12)] = inst_49018);

(statearr_49050[(7)] = inst_48998);

(statearr_49050[(8)] = inst_48999);

return statearr_49050;
})();
var statearr_49051_49075 = state_49038__$1;
(statearr_49051_49075[(2)] = null);

(statearr_49051_49075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (9))){
var inst_48998 = (state_49038[(7)]);
var inst_49014 = cljs.core.vec.call(null,inst_48998);
var state_49038__$1 = state_49038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49038__$1,(11),out,inst_49014);
} else {
if((state_val_49039 === (5))){
var inst_48999 = (state_49038[(8)]);
var inst_49006 = (state_49038[(10)]);
var inst_49002 = (state_49038[(9)]);
var inst_49006__$1 = f.call(null,inst_49002);
var inst_49007 = cljs.core._EQ_.call(null,inst_49006__$1,inst_48999);
var inst_49008 = cljs.core.keyword_identical_QMARK_.call(null,inst_48999,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49009 = (inst_49007) || (inst_49008);
var state_49038__$1 = (function (){var statearr_49052 = state_49038;
(statearr_49052[(10)] = inst_49006__$1);

return statearr_49052;
})();
if(cljs.core.truth_(inst_49009)){
var statearr_49053_49076 = state_49038__$1;
(statearr_49053_49076[(1)] = (8));

} else {
var statearr_49054_49077 = state_49038__$1;
(statearr_49054_49077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (14))){
var inst_49031 = (state_49038[(2)]);
var inst_49032 = cljs.core.async.close_BANG_.call(null,out);
var state_49038__$1 = (function (){var statearr_49056 = state_49038;
(statearr_49056[(13)] = inst_49031);

return statearr_49056;
})();
var statearr_49057_49078 = state_49038__$1;
(statearr_49057_49078[(2)] = inst_49032);

(statearr_49057_49078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (10))){
var inst_49021 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
var statearr_49058_49079 = state_49038__$1;
(statearr_49058_49079[(2)] = inst_49021);

(statearr_49058_49079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (8))){
var inst_48998 = (state_49038[(7)]);
var inst_49006 = (state_49038[(10)]);
var inst_49002 = (state_49038[(9)]);
var inst_49011 = inst_48998.push(inst_49002);
var tmp49055 = inst_48998;
var inst_48998__$1 = tmp49055;
var inst_48999 = inst_49006;
var state_49038__$1 = (function (){var statearr_49059 = state_49038;
(statearr_49059[(14)] = inst_49011);

(statearr_49059[(7)] = inst_48998__$1);

(statearr_49059[(8)] = inst_48999);

return statearr_49059;
})();
var statearr_49060_49080 = state_49038__$1;
(statearr_49060_49080[(2)] = null);

(statearr_49060_49080[(1)] = (2));


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
});})(c__47162__auto___49066,out))
;
return ((function (switch__47072__auto__,c__47162__auto___49066,out){
return (function() {
var cljs$core$async$state_machine__47073__auto__ = null;
var cljs$core$async$state_machine__47073__auto____0 = (function (){
var statearr_49061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49061[(0)] = cljs$core$async$state_machine__47073__auto__);

(statearr_49061[(1)] = (1));

return statearr_49061;
});
var cljs$core$async$state_machine__47073__auto____1 = (function (state_49038){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_49038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e49062){if((e49062 instanceof Object)){
var ex__47076__auto__ = e49062;
var statearr_49063_49081 = state_49038;
(statearr_49063_49081[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49082 = state_49038;
state_49038 = G__49082;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
cljs$core$async$state_machine__47073__auto__ = function(state_49038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47073__auto____1.call(this,state_49038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47073__auto____0;
cljs$core$async$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47073__auto____1;
return cljs$core$async$state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___49066,out))
})();
var state__47164__auto__ = (function (){var statearr_49064 = f__47163__auto__.call(null);
(statearr_49064[(6)] = c__47162__auto___49066);

return statearr_49064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___49066,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1509094251820
