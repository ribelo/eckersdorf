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
var G__51080 = arguments.length;
switch (G__51080) {
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
if(typeof cljs.core.async.t_cljs$core$async51081 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51081 = (function (f,blockable,meta51082){
this.f = f;
this.blockable = blockable;
this.meta51082 = meta51082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51083,meta51082__$1){
var self__ = this;
var _51083__$1 = this;
return (new cljs.core.async.t_cljs$core$async51081(self__.f,self__.blockable,meta51082__$1));
});

cljs.core.async.t_cljs$core$async51081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51083){
var self__ = this;
var _51083__$1 = this;
return self__.meta51082;
});

cljs.core.async.t_cljs$core$async51081.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51081.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async51081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async51081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51082","meta51082",1341416934,null)], null);
});

cljs.core.async.t_cljs$core$async51081.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51081";

cljs.core.async.t_cljs$core$async51081.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async51081");
});

cljs.core.async.__GT_t_cljs$core$async51081 = (function cljs$core$async$__GT_t_cljs$core$async51081(f__$1,blockable__$1,meta51082){
return (new cljs.core.async.t_cljs$core$async51081(f__$1,blockable__$1,meta51082));
});

}

return (new cljs.core.async.t_cljs$core$async51081(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51087 = arguments.length;
switch (G__51087) {
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
var G__51090 = arguments.length;
switch (G__51090) {
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
var G__51093 = arguments.length;
switch (G__51093) {
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
var val_51095 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_51095);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_51095,ret){
return (function (){
return fn1.call(null,val_51095);
});})(val_51095,ret))
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
var G__51097 = arguments.length;
switch (G__51097) {
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
var n__31292__auto___51099 = n;
var x_51100 = (0);
while(true){
if((x_51100 < n__31292__auto___51099)){
(a[x_51100] = (0));

var G__51101 = (x_51100 + (1));
x_51100 = G__51101;
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

var G__51102 = (i + (1));
i = G__51102;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async51103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51103 = (function (flag,meta51104){
this.flag = flag;
this.meta51104 = meta51104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_51105,meta51104__$1){
var self__ = this;
var _51105__$1 = this;
return (new cljs.core.async.t_cljs$core$async51103(self__.flag,meta51104__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_51105){
var self__ = this;
var _51105__$1 = this;
return self__.meta51104;
});})(flag))
;

cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51103.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51104","meta51104",797145306,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async51103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51103";

cljs.core.async.t_cljs$core$async51103.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async51103");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async51103 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51103(flag__$1,meta51104){
return (new cljs.core.async.t_cljs$core$async51103(flag__$1,meta51104));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async51103(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async51106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51106 = (function (flag,cb,meta51107){
this.flag = flag;
this.cb = cb;
this.meta51107 = meta51107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51108,meta51107__$1){
var self__ = this;
var _51108__$1 = this;
return (new cljs.core.async.t_cljs$core$async51106(self__.flag,self__.cb,meta51107__$1));
});

cljs.core.async.t_cljs$core$async51106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51108){
var self__ = this;
var _51108__$1 = this;
return self__.meta51107;
});

cljs.core.async.t_cljs$core$async51106.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async51106.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async51106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51107","meta51107",-1896005791,null)], null);
});

cljs.core.async.t_cljs$core$async51106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51106";

cljs.core.async.t_cljs$core$async51106.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async51106");
});

cljs.core.async.__GT_t_cljs$core$async51106 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51106(flag__$1,cb__$1,meta51107){
return (new cljs.core.async.t_cljs$core$async51106(flag__$1,cb__$1,meta51107));
});

}

return (new cljs.core.async.t_cljs$core$async51106(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__51109_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51109_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51110_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51110_SHARP_,port], null));
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
var G__51111 = (i + (1));
i = G__51111;
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
var len__31526__auto___51117 = arguments.length;
var i__31527__auto___51118 = (0);
while(true){
if((i__31527__auto___51118 < len__31526__auto___51117)){
args__31533__auto__.push((arguments[i__31527__auto___51118]));

var G__51119 = (i__31527__auto___51118 + (1));
i__31527__auto___51118 = G__51119;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51114){
var map__51115 = p__51114;
var map__51115__$1 = ((((!((map__51115 == null)))?((((map__51115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51115):map__51115);
var opts = map__51115__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51112){
var G__51113 = cljs.core.first.call(null,seq51112);
var seq51112__$1 = cljs.core.next.call(null,seq51112);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51113,seq51112__$1);
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
var G__51121 = arguments.length;
switch (G__51121) {
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
var c__51020__auto___51167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___51167){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___51167){
return (function (state_51145){
var state_val_51146 = (state_51145[(1)]);
if((state_val_51146 === (7))){
var inst_51141 = (state_51145[(2)]);
var state_51145__$1 = state_51145;
var statearr_51147_51168 = state_51145__$1;
(statearr_51147_51168[(2)] = inst_51141);

(statearr_51147_51168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51146 === (1))){
var state_51145__$1 = state_51145;
var statearr_51148_51169 = state_51145__$1;
(statearr_51148_51169[(2)] = null);

(statearr_51148_51169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51146 === (4))){
var inst_51124 = (state_51145[(7)]);
var inst_51124__$1 = (state_51145[(2)]);
var inst_51125 = (inst_51124__$1 == null);
var state_51145__$1 = (function (){var statearr_51149 = state_51145;
(statearr_51149[(7)] = inst_51124__$1);

return statearr_51149;
})();
if(cljs.core.truth_(inst_51125)){
var statearr_51150_51170 = state_51145__$1;
(statearr_51150_51170[(1)] = (5));

} else {
var statearr_51151_51171 = state_51145__$1;
(statearr_51151_51171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51146 === (13))){
var state_51145__$1 = state_51145;
var statearr_51152_51172 = state_51145__$1;
(statearr_51152_51172[(2)] = null);

(statearr_51152_51172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51146 === (6))){
var inst_51124 = (state_51145[(7)]);
var state_51145__$1 = state_51145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51145__$1,(11),to,inst_51124);
} else {
if((state_val_51146 === (3))){
var inst_51143 = (state_51145[(2)]);
var state_51145__$1 = state_51145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51145__$1,inst_51143);
} else {
if((state_val_51146 === (12))){
var state_51145__$1 = state_51145;
var statearr_51153_51173 = state_51145__$1;
(statearr_51153_51173[(2)] = null);

(statearr_51153_51173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51146 === (2))){
var state_51145__$1 = state_51145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51145__$1,(4),from);
} else {
if((state_val_51146 === (11))){
var inst_51134 = (state_51145[(2)]);
var state_51145__$1 = state_51145;
if(cljs.core.truth_(inst_51134)){
var statearr_51154_51174 = state_51145__$1;
(statearr_51154_51174[(1)] = (12));

} else {
var statearr_51155_51175 = state_51145__$1;
(statearr_51155_51175[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51146 === (9))){
var state_51145__$1 = state_51145;
var statearr_51156_51176 = state_51145__$1;
(statearr_51156_51176[(2)] = null);

(statearr_51156_51176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51146 === (5))){
var state_51145__$1 = state_51145;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51157_51177 = state_51145__$1;
(statearr_51157_51177[(1)] = (8));

} else {
var statearr_51158_51178 = state_51145__$1;
(statearr_51158_51178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51146 === (14))){
var inst_51139 = (state_51145[(2)]);
var state_51145__$1 = state_51145;
var statearr_51159_51179 = state_51145__$1;
(statearr_51159_51179[(2)] = inst_51139);

(statearr_51159_51179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51146 === (10))){
var inst_51131 = (state_51145[(2)]);
var state_51145__$1 = state_51145;
var statearr_51160_51180 = state_51145__$1;
(statearr_51160_51180[(2)] = inst_51131);

(statearr_51160_51180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51146 === (8))){
var inst_51128 = cljs.core.async.close_BANG_.call(null,to);
var state_51145__$1 = state_51145;
var statearr_51161_51181 = state_51145__$1;
(statearr_51161_51181[(2)] = inst_51128);

(statearr_51161_51181[(1)] = (10));


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
});})(c__51020__auto___51167))
;
return ((function (switch__50930__auto__,c__51020__auto___51167){
return (function() {
var cljs$core$async$state_machine__50931__auto__ = null;
var cljs$core$async$state_machine__50931__auto____0 = (function (){
var statearr_51162 = [null,null,null,null,null,null,null,null];
(statearr_51162[(0)] = cljs$core$async$state_machine__50931__auto__);

(statearr_51162[(1)] = (1));

return statearr_51162;
});
var cljs$core$async$state_machine__50931__auto____1 = (function (state_51145){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_51145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e51163){if((e51163 instanceof Object)){
var ex__50934__auto__ = e51163;
var statearr_51164_51182 = state_51145;
(statearr_51164_51182[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51183 = state_51145;
state_51145 = G__51183;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$state_machine__50931__auto__ = function(state_51145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50931__auto____1.call(this,state_51145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50931__auto____0;
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50931__auto____1;
return cljs$core$async$state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___51167))
})();
var state__51022__auto__ = (function (){var statearr_51165 = f__51021__auto__.call(null);
(statearr_51165[(6)] = c__51020__auto___51167);

return statearr_51165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___51167))
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
return (function (p__51184){
var vec__51185 = p__51184;
var v = cljs.core.nth.call(null,vec__51185,(0),null);
var p = cljs.core.nth.call(null,vec__51185,(1),null);
var job = vec__51185;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__51020__auto___51356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___51356,res,vec__51185,v,p,job,jobs,results){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___51356,res,vec__51185,v,p,job,jobs,results){
return (function (state_51192){
var state_val_51193 = (state_51192[(1)]);
if((state_val_51193 === (1))){
var state_51192__$1 = state_51192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51192__$1,(2),res,v);
} else {
if((state_val_51193 === (2))){
var inst_51189 = (state_51192[(2)]);
var inst_51190 = cljs.core.async.close_BANG_.call(null,res);
var state_51192__$1 = (function (){var statearr_51194 = state_51192;
(statearr_51194[(7)] = inst_51189);

return statearr_51194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51192__$1,inst_51190);
} else {
return null;
}
}
});})(c__51020__auto___51356,res,vec__51185,v,p,job,jobs,results))
;
return ((function (switch__50930__auto__,c__51020__auto___51356,res,vec__51185,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0 = (function (){
var statearr_51195 = [null,null,null,null,null,null,null,null];
(statearr_51195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__);

(statearr_51195[(1)] = (1));

return statearr_51195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1 = (function (state_51192){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_51192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e51196){if((e51196 instanceof Object)){
var ex__50934__auto__ = e51196;
var statearr_51197_51357 = state_51192;
(statearr_51197_51357[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51358 = state_51192;
state_51192 = G__51358;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__ = function(state_51192){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1.call(this,state_51192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___51356,res,vec__51185,v,p,job,jobs,results))
})();
var state__51022__auto__ = (function (){var statearr_51198 = f__51021__auto__.call(null);
(statearr_51198[(6)] = c__51020__auto___51356);

return statearr_51198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___51356,res,vec__51185,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__51199){
var vec__51200 = p__51199;
var v = cljs.core.nth.call(null,vec__51200,(0),null);
var p = cljs.core.nth.call(null,vec__51200,(1),null);
var job = vec__51200;
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
var n__31292__auto___51359 = n;
var __51360 = (0);
while(true){
if((__51360 < n__31292__auto___51359)){
var G__51203_51361 = type;
var G__51203_51362__$1 = (((G__51203_51361 instanceof cljs.core.Keyword))?G__51203_51361.fqn:null);
switch (G__51203_51362__$1) {
case "compute":
var c__51020__auto___51364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51360,c__51020__auto___51364,G__51203_51361,G__51203_51362__$1,n__31292__auto___51359,jobs,results,process,async){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (__51360,c__51020__auto___51364,G__51203_51361,G__51203_51362__$1,n__31292__auto___51359,jobs,results,process,async){
return (function (state_51216){
var state_val_51217 = (state_51216[(1)]);
if((state_val_51217 === (1))){
var state_51216__$1 = state_51216;
var statearr_51218_51365 = state_51216__$1;
(statearr_51218_51365[(2)] = null);

(statearr_51218_51365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (2))){
var state_51216__$1 = state_51216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51216__$1,(4),jobs);
} else {
if((state_val_51217 === (3))){
var inst_51214 = (state_51216[(2)]);
var state_51216__$1 = state_51216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51216__$1,inst_51214);
} else {
if((state_val_51217 === (4))){
var inst_51206 = (state_51216[(2)]);
var inst_51207 = process.call(null,inst_51206);
var state_51216__$1 = state_51216;
if(cljs.core.truth_(inst_51207)){
var statearr_51219_51366 = state_51216__$1;
(statearr_51219_51366[(1)] = (5));

} else {
var statearr_51220_51367 = state_51216__$1;
(statearr_51220_51367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (5))){
var state_51216__$1 = state_51216;
var statearr_51221_51368 = state_51216__$1;
(statearr_51221_51368[(2)] = null);

(statearr_51221_51368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (6))){
var state_51216__$1 = state_51216;
var statearr_51222_51369 = state_51216__$1;
(statearr_51222_51369[(2)] = null);

(statearr_51222_51369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (7))){
var inst_51212 = (state_51216[(2)]);
var state_51216__$1 = state_51216;
var statearr_51223_51370 = state_51216__$1;
(statearr_51223_51370[(2)] = inst_51212);

(statearr_51223_51370[(1)] = (3));


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
});})(__51360,c__51020__auto___51364,G__51203_51361,G__51203_51362__$1,n__31292__auto___51359,jobs,results,process,async))
;
return ((function (__51360,switch__50930__auto__,c__51020__auto___51364,G__51203_51361,G__51203_51362__$1,n__31292__auto___51359,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0 = (function (){
var statearr_51224 = [null,null,null,null,null,null,null];
(statearr_51224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__);

(statearr_51224[(1)] = (1));

return statearr_51224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1 = (function (state_51216){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_51216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e51225){if((e51225 instanceof Object)){
var ex__50934__auto__ = e51225;
var statearr_51226_51371 = state_51216;
(statearr_51226_51371[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51372 = state_51216;
state_51216 = G__51372;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__ = function(state_51216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1.call(this,state_51216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__;
})()
;})(__51360,switch__50930__auto__,c__51020__auto___51364,G__51203_51361,G__51203_51362__$1,n__31292__auto___51359,jobs,results,process,async))
})();
var state__51022__auto__ = (function (){var statearr_51227 = f__51021__auto__.call(null);
(statearr_51227[(6)] = c__51020__auto___51364);

return statearr_51227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(__51360,c__51020__auto___51364,G__51203_51361,G__51203_51362__$1,n__31292__auto___51359,jobs,results,process,async))
);


break;
case "async":
var c__51020__auto___51373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51360,c__51020__auto___51373,G__51203_51361,G__51203_51362__$1,n__31292__auto___51359,jobs,results,process,async){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (__51360,c__51020__auto___51373,G__51203_51361,G__51203_51362__$1,n__31292__auto___51359,jobs,results,process,async){
return (function (state_51240){
var state_val_51241 = (state_51240[(1)]);
if((state_val_51241 === (1))){
var state_51240__$1 = state_51240;
var statearr_51242_51374 = state_51240__$1;
(statearr_51242_51374[(2)] = null);

(statearr_51242_51374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51241 === (2))){
var state_51240__$1 = state_51240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51240__$1,(4),jobs);
} else {
if((state_val_51241 === (3))){
var inst_51238 = (state_51240[(2)]);
var state_51240__$1 = state_51240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51240__$1,inst_51238);
} else {
if((state_val_51241 === (4))){
var inst_51230 = (state_51240[(2)]);
var inst_51231 = async.call(null,inst_51230);
var state_51240__$1 = state_51240;
if(cljs.core.truth_(inst_51231)){
var statearr_51243_51375 = state_51240__$1;
(statearr_51243_51375[(1)] = (5));

} else {
var statearr_51244_51376 = state_51240__$1;
(statearr_51244_51376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51241 === (5))){
var state_51240__$1 = state_51240;
var statearr_51245_51377 = state_51240__$1;
(statearr_51245_51377[(2)] = null);

(statearr_51245_51377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51241 === (6))){
var state_51240__$1 = state_51240;
var statearr_51246_51378 = state_51240__$1;
(statearr_51246_51378[(2)] = null);

(statearr_51246_51378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51241 === (7))){
var inst_51236 = (state_51240[(2)]);
var state_51240__$1 = state_51240;
var statearr_51247_51379 = state_51240__$1;
(statearr_51247_51379[(2)] = inst_51236);

(statearr_51247_51379[(1)] = (3));


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
});})(__51360,c__51020__auto___51373,G__51203_51361,G__51203_51362__$1,n__31292__auto___51359,jobs,results,process,async))
;
return ((function (__51360,switch__50930__auto__,c__51020__auto___51373,G__51203_51361,G__51203_51362__$1,n__31292__auto___51359,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0 = (function (){
var statearr_51248 = [null,null,null,null,null,null,null];
(statearr_51248[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__);

(statearr_51248[(1)] = (1));

return statearr_51248;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1 = (function (state_51240){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_51240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e51249){if((e51249 instanceof Object)){
var ex__50934__auto__ = e51249;
var statearr_51250_51380 = state_51240;
(statearr_51250_51380[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51381 = state_51240;
state_51240 = G__51381;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__ = function(state_51240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1.call(this,state_51240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__;
})()
;})(__51360,switch__50930__auto__,c__51020__auto___51373,G__51203_51361,G__51203_51362__$1,n__31292__auto___51359,jobs,results,process,async))
})();
var state__51022__auto__ = (function (){var statearr_51251 = f__51021__auto__.call(null);
(statearr_51251[(6)] = c__51020__auto___51373);

return statearr_51251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(__51360,c__51020__auto___51373,G__51203_51361,G__51203_51362__$1,n__31292__auto___51359,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51203_51362__$1)].join('')));

}

var G__51382 = (__51360 + (1));
__51360 = G__51382;
continue;
} else {
}
break;
}

var c__51020__auto___51383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___51383,jobs,results,process,async){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___51383,jobs,results,process,async){
return (function (state_51273){
var state_val_51274 = (state_51273[(1)]);
if((state_val_51274 === (1))){
var state_51273__$1 = state_51273;
var statearr_51275_51384 = state_51273__$1;
(statearr_51275_51384[(2)] = null);

(statearr_51275_51384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51274 === (2))){
var state_51273__$1 = state_51273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51273__$1,(4),from);
} else {
if((state_val_51274 === (3))){
var inst_51271 = (state_51273[(2)]);
var state_51273__$1 = state_51273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51273__$1,inst_51271);
} else {
if((state_val_51274 === (4))){
var inst_51254 = (state_51273[(7)]);
var inst_51254__$1 = (state_51273[(2)]);
var inst_51255 = (inst_51254__$1 == null);
var state_51273__$1 = (function (){var statearr_51276 = state_51273;
(statearr_51276[(7)] = inst_51254__$1);

return statearr_51276;
})();
if(cljs.core.truth_(inst_51255)){
var statearr_51277_51385 = state_51273__$1;
(statearr_51277_51385[(1)] = (5));

} else {
var statearr_51278_51386 = state_51273__$1;
(statearr_51278_51386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51274 === (5))){
var inst_51257 = cljs.core.async.close_BANG_.call(null,jobs);
var state_51273__$1 = state_51273;
var statearr_51279_51387 = state_51273__$1;
(statearr_51279_51387[(2)] = inst_51257);

(statearr_51279_51387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51274 === (6))){
var inst_51259 = (state_51273[(8)]);
var inst_51254 = (state_51273[(7)]);
var inst_51259__$1 = cljs.core.async.chan.call(null,(1));
var inst_51260 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51261 = [inst_51254,inst_51259__$1];
var inst_51262 = (new cljs.core.PersistentVector(null,2,(5),inst_51260,inst_51261,null));
var state_51273__$1 = (function (){var statearr_51280 = state_51273;
(statearr_51280[(8)] = inst_51259__$1);

return statearr_51280;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51273__$1,(8),jobs,inst_51262);
} else {
if((state_val_51274 === (7))){
var inst_51269 = (state_51273[(2)]);
var state_51273__$1 = state_51273;
var statearr_51281_51388 = state_51273__$1;
(statearr_51281_51388[(2)] = inst_51269);

(statearr_51281_51388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51274 === (8))){
var inst_51259 = (state_51273[(8)]);
var inst_51264 = (state_51273[(2)]);
var state_51273__$1 = (function (){var statearr_51282 = state_51273;
(statearr_51282[(9)] = inst_51264);

return statearr_51282;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51273__$1,(9),results,inst_51259);
} else {
if((state_val_51274 === (9))){
var inst_51266 = (state_51273[(2)]);
var state_51273__$1 = (function (){var statearr_51283 = state_51273;
(statearr_51283[(10)] = inst_51266);

return statearr_51283;
})();
var statearr_51284_51389 = state_51273__$1;
(statearr_51284_51389[(2)] = null);

(statearr_51284_51389[(1)] = (2));


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
});})(c__51020__auto___51383,jobs,results,process,async))
;
return ((function (switch__50930__auto__,c__51020__auto___51383,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0 = (function (){
var statearr_51285 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__);

(statearr_51285[(1)] = (1));

return statearr_51285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1 = (function (state_51273){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_51273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e51286){if((e51286 instanceof Object)){
var ex__50934__auto__ = e51286;
var statearr_51287_51390 = state_51273;
(statearr_51287_51390[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51391 = state_51273;
state_51273 = G__51391;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__ = function(state_51273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1.call(this,state_51273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___51383,jobs,results,process,async))
})();
var state__51022__auto__ = (function (){var statearr_51288 = f__51021__auto__.call(null);
(statearr_51288[(6)] = c__51020__auto___51383);

return statearr_51288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___51383,jobs,results,process,async))
);


var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__,jobs,results,process,async){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__,jobs,results,process,async){
return (function (state_51326){
var state_val_51327 = (state_51326[(1)]);
if((state_val_51327 === (7))){
var inst_51322 = (state_51326[(2)]);
var state_51326__$1 = state_51326;
var statearr_51328_51392 = state_51326__$1;
(statearr_51328_51392[(2)] = inst_51322);

(statearr_51328_51392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (20))){
var state_51326__$1 = state_51326;
var statearr_51329_51393 = state_51326__$1;
(statearr_51329_51393[(2)] = null);

(statearr_51329_51393[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (1))){
var state_51326__$1 = state_51326;
var statearr_51330_51394 = state_51326__$1;
(statearr_51330_51394[(2)] = null);

(statearr_51330_51394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (4))){
var inst_51291 = (state_51326[(7)]);
var inst_51291__$1 = (state_51326[(2)]);
var inst_51292 = (inst_51291__$1 == null);
var state_51326__$1 = (function (){var statearr_51331 = state_51326;
(statearr_51331[(7)] = inst_51291__$1);

return statearr_51331;
})();
if(cljs.core.truth_(inst_51292)){
var statearr_51332_51395 = state_51326__$1;
(statearr_51332_51395[(1)] = (5));

} else {
var statearr_51333_51396 = state_51326__$1;
(statearr_51333_51396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (15))){
var inst_51304 = (state_51326[(8)]);
var state_51326__$1 = state_51326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51326__$1,(18),to,inst_51304);
} else {
if((state_val_51327 === (21))){
var inst_51317 = (state_51326[(2)]);
var state_51326__$1 = state_51326;
var statearr_51334_51397 = state_51326__$1;
(statearr_51334_51397[(2)] = inst_51317);

(statearr_51334_51397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (13))){
var inst_51319 = (state_51326[(2)]);
var state_51326__$1 = (function (){var statearr_51335 = state_51326;
(statearr_51335[(9)] = inst_51319);

return statearr_51335;
})();
var statearr_51336_51398 = state_51326__$1;
(statearr_51336_51398[(2)] = null);

(statearr_51336_51398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (6))){
var inst_51291 = (state_51326[(7)]);
var state_51326__$1 = state_51326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51326__$1,(11),inst_51291);
} else {
if((state_val_51327 === (17))){
var inst_51312 = (state_51326[(2)]);
var state_51326__$1 = state_51326;
if(cljs.core.truth_(inst_51312)){
var statearr_51337_51399 = state_51326__$1;
(statearr_51337_51399[(1)] = (19));

} else {
var statearr_51338_51400 = state_51326__$1;
(statearr_51338_51400[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (3))){
var inst_51324 = (state_51326[(2)]);
var state_51326__$1 = state_51326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51326__$1,inst_51324);
} else {
if((state_val_51327 === (12))){
var inst_51301 = (state_51326[(10)]);
var state_51326__$1 = state_51326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51326__$1,(14),inst_51301);
} else {
if((state_val_51327 === (2))){
var state_51326__$1 = state_51326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51326__$1,(4),results);
} else {
if((state_val_51327 === (19))){
var state_51326__$1 = state_51326;
var statearr_51339_51401 = state_51326__$1;
(statearr_51339_51401[(2)] = null);

(statearr_51339_51401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (11))){
var inst_51301 = (state_51326[(2)]);
var state_51326__$1 = (function (){var statearr_51340 = state_51326;
(statearr_51340[(10)] = inst_51301);

return statearr_51340;
})();
var statearr_51341_51402 = state_51326__$1;
(statearr_51341_51402[(2)] = null);

(statearr_51341_51402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (9))){
var state_51326__$1 = state_51326;
var statearr_51342_51403 = state_51326__$1;
(statearr_51342_51403[(2)] = null);

(statearr_51342_51403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (5))){
var state_51326__$1 = state_51326;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51343_51404 = state_51326__$1;
(statearr_51343_51404[(1)] = (8));

} else {
var statearr_51344_51405 = state_51326__$1;
(statearr_51344_51405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (14))){
var inst_51306 = (state_51326[(11)]);
var inst_51304 = (state_51326[(8)]);
var inst_51304__$1 = (state_51326[(2)]);
var inst_51305 = (inst_51304__$1 == null);
var inst_51306__$1 = cljs.core.not.call(null,inst_51305);
var state_51326__$1 = (function (){var statearr_51345 = state_51326;
(statearr_51345[(11)] = inst_51306__$1);

(statearr_51345[(8)] = inst_51304__$1);

return statearr_51345;
})();
if(inst_51306__$1){
var statearr_51346_51406 = state_51326__$1;
(statearr_51346_51406[(1)] = (15));

} else {
var statearr_51347_51407 = state_51326__$1;
(statearr_51347_51407[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (16))){
var inst_51306 = (state_51326[(11)]);
var state_51326__$1 = state_51326;
var statearr_51348_51408 = state_51326__$1;
(statearr_51348_51408[(2)] = inst_51306);

(statearr_51348_51408[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (10))){
var inst_51298 = (state_51326[(2)]);
var state_51326__$1 = state_51326;
var statearr_51349_51409 = state_51326__$1;
(statearr_51349_51409[(2)] = inst_51298);

(statearr_51349_51409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (18))){
var inst_51309 = (state_51326[(2)]);
var state_51326__$1 = state_51326;
var statearr_51350_51410 = state_51326__$1;
(statearr_51350_51410[(2)] = inst_51309);

(statearr_51350_51410[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51327 === (8))){
var inst_51295 = cljs.core.async.close_BANG_.call(null,to);
var state_51326__$1 = state_51326;
var statearr_51351_51411 = state_51326__$1;
(statearr_51351_51411[(2)] = inst_51295);

(statearr_51351_51411[(1)] = (10));


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
});})(c__51020__auto__,jobs,results,process,async))
;
return ((function (switch__50930__auto__,c__51020__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0 = (function (){
var statearr_51352 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__);

(statearr_51352[(1)] = (1));

return statearr_51352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1 = (function (state_51326){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_51326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e51353){if((e51353 instanceof Object)){
var ex__50934__auto__ = e51353;
var statearr_51354_51412 = state_51326;
(statearr_51354_51412[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51413 = state_51326;
state_51326 = G__51413;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__ = function(state_51326){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1.call(this,state_51326);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__,jobs,results,process,async))
})();
var state__51022__auto__ = (function (){var statearr_51355 = f__51021__auto__.call(null);
(statearr_51355[(6)] = c__51020__auto__);

return statearr_51355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__,jobs,results,process,async))
);

return c__51020__auto__;
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
var G__51415 = arguments.length;
switch (G__51415) {
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
var G__51418 = arguments.length;
switch (G__51418) {
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
var G__51421 = arguments.length;
switch (G__51421) {
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
var c__51020__auto___51470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___51470,tc,fc){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___51470,tc,fc){
return (function (state_51447){
var state_val_51448 = (state_51447[(1)]);
if((state_val_51448 === (7))){
var inst_51443 = (state_51447[(2)]);
var state_51447__$1 = state_51447;
var statearr_51449_51471 = state_51447__$1;
(statearr_51449_51471[(2)] = inst_51443);

(statearr_51449_51471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (1))){
var state_51447__$1 = state_51447;
var statearr_51450_51472 = state_51447__$1;
(statearr_51450_51472[(2)] = null);

(statearr_51450_51472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (4))){
var inst_51424 = (state_51447[(7)]);
var inst_51424__$1 = (state_51447[(2)]);
var inst_51425 = (inst_51424__$1 == null);
var state_51447__$1 = (function (){var statearr_51451 = state_51447;
(statearr_51451[(7)] = inst_51424__$1);

return statearr_51451;
})();
if(cljs.core.truth_(inst_51425)){
var statearr_51452_51473 = state_51447__$1;
(statearr_51452_51473[(1)] = (5));

} else {
var statearr_51453_51474 = state_51447__$1;
(statearr_51453_51474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (13))){
var state_51447__$1 = state_51447;
var statearr_51454_51475 = state_51447__$1;
(statearr_51454_51475[(2)] = null);

(statearr_51454_51475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (6))){
var inst_51424 = (state_51447[(7)]);
var inst_51430 = p.call(null,inst_51424);
var state_51447__$1 = state_51447;
if(cljs.core.truth_(inst_51430)){
var statearr_51455_51476 = state_51447__$1;
(statearr_51455_51476[(1)] = (9));

} else {
var statearr_51456_51477 = state_51447__$1;
(statearr_51456_51477[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (3))){
var inst_51445 = (state_51447[(2)]);
var state_51447__$1 = state_51447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51447__$1,inst_51445);
} else {
if((state_val_51448 === (12))){
var state_51447__$1 = state_51447;
var statearr_51457_51478 = state_51447__$1;
(statearr_51457_51478[(2)] = null);

(statearr_51457_51478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (2))){
var state_51447__$1 = state_51447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51447__$1,(4),ch);
} else {
if((state_val_51448 === (11))){
var inst_51424 = (state_51447[(7)]);
var inst_51434 = (state_51447[(2)]);
var state_51447__$1 = state_51447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51447__$1,(8),inst_51434,inst_51424);
} else {
if((state_val_51448 === (9))){
var state_51447__$1 = state_51447;
var statearr_51458_51479 = state_51447__$1;
(statearr_51458_51479[(2)] = tc);

(statearr_51458_51479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (5))){
var inst_51427 = cljs.core.async.close_BANG_.call(null,tc);
var inst_51428 = cljs.core.async.close_BANG_.call(null,fc);
var state_51447__$1 = (function (){var statearr_51459 = state_51447;
(statearr_51459[(8)] = inst_51427);

return statearr_51459;
})();
var statearr_51460_51480 = state_51447__$1;
(statearr_51460_51480[(2)] = inst_51428);

(statearr_51460_51480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (14))){
var inst_51441 = (state_51447[(2)]);
var state_51447__$1 = state_51447;
var statearr_51461_51481 = state_51447__$1;
(statearr_51461_51481[(2)] = inst_51441);

(statearr_51461_51481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (10))){
var state_51447__$1 = state_51447;
var statearr_51462_51482 = state_51447__$1;
(statearr_51462_51482[(2)] = fc);

(statearr_51462_51482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (8))){
var inst_51436 = (state_51447[(2)]);
var state_51447__$1 = state_51447;
if(cljs.core.truth_(inst_51436)){
var statearr_51463_51483 = state_51447__$1;
(statearr_51463_51483[(1)] = (12));

} else {
var statearr_51464_51484 = state_51447__$1;
(statearr_51464_51484[(1)] = (13));

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
});})(c__51020__auto___51470,tc,fc))
;
return ((function (switch__50930__auto__,c__51020__auto___51470,tc,fc){
return (function() {
var cljs$core$async$state_machine__50931__auto__ = null;
var cljs$core$async$state_machine__50931__auto____0 = (function (){
var statearr_51465 = [null,null,null,null,null,null,null,null,null];
(statearr_51465[(0)] = cljs$core$async$state_machine__50931__auto__);

(statearr_51465[(1)] = (1));

return statearr_51465;
});
var cljs$core$async$state_machine__50931__auto____1 = (function (state_51447){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_51447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e51466){if((e51466 instanceof Object)){
var ex__50934__auto__ = e51466;
var statearr_51467_51485 = state_51447;
(statearr_51467_51485[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51486 = state_51447;
state_51447 = G__51486;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$state_machine__50931__auto__ = function(state_51447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50931__auto____1.call(this,state_51447);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50931__auto____0;
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50931__auto____1;
return cljs$core$async$state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___51470,tc,fc))
})();
var state__51022__auto__ = (function (){var statearr_51468 = f__51021__auto__.call(null);
(statearr_51468[(6)] = c__51020__auto___51470);

return statearr_51468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___51470,tc,fc))
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
var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__){
return (function (state_51507){
var state_val_51508 = (state_51507[(1)]);
if((state_val_51508 === (7))){
var inst_51503 = (state_51507[(2)]);
var state_51507__$1 = state_51507;
var statearr_51509_51527 = state_51507__$1;
(statearr_51509_51527[(2)] = inst_51503);

(statearr_51509_51527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51508 === (1))){
var inst_51487 = init;
var state_51507__$1 = (function (){var statearr_51510 = state_51507;
(statearr_51510[(7)] = inst_51487);

return statearr_51510;
})();
var statearr_51511_51528 = state_51507__$1;
(statearr_51511_51528[(2)] = null);

(statearr_51511_51528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51508 === (4))){
var inst_51490 = (state_51507[(8)]);
var inst_51490__$1 = (state_51507[(2)]);
var inst_51491 = (inst_51490__$1 == null);
var state_51507__$1 = (function (){var statearr_51512 = state_51507;
(statearr_51512[(8)] = inst_51490__$1);

return statearr_51512;
})();
if(cljs.core.truth_(inst_51491)){
var statearr_51513_51529 = state_51507__$1;
(statearr_51513_51529[(1)] = (5));

} else {
var statearr_51514_51530 = state_51507__$1;
(statearr_51514_51530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51508 === (6))){
var inst_51487 = (state_51507[(7)]);
var inst_51490 = (state_51507[(8)]);
var inst_51494 = (state_51507[(9)]);
var inst_51494__$1 = f.call(null,inst_51487,inst_51490);
var inst_51495 = cljs.core.reduced_QMARK_.call(null,inst_51494__$1);
var state_51507__$1 = (function (){var statearr_51515 = state_51507;
(statearr_51515[(9)] = inst_51494__$1);

return statearr_51515;
})();
if(inst_51495){
var statearr_51516_51531 = state_51507__$1;
(statearr_51516_51531[(1)] = (8));

} else {
var statearr_51517_51532 = state_51507__$1;
(statearr_51517_51532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51508 === (3))){
var inst_51505 = (state_51507[(2)]);
var state_51507__$1 = state_51507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51507__$1,inst_51505);
} else {
if((state_val_51508 === (2))){
var state_51507__$1 = state_51507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51507__$1,(4),ch);
} else {
if((state_val_51508 === (9))){
var inst_51494 = (state_51507[(9)]);
var inst_51487 = inst_51494;
var state_51507__$1 = (function (){var statearr_51518 = state_51507;
(statearr_51518[(7)] = inst_51487);

return statearr_51518;
})();
var statearr_51519_51533 = state_51507__$1;
(statearr_51519_51533[(2)] = null);

(statearr_51519_51533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51508 === (5))){
var inst_51487 = (state_51507[(7)]);
var state_51507__$1 = state_51507;
var statearr_51520_51534 = state_51507__$1;
(statearr_51520_51534[(2)] = inst_51487);

(statearr_51520_51534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51508 === (10))){
var inst_51501 = (state_51507[(2)]);
var state_51507__$1 = state_51507;
var statearr_51521_51535 = state_51507__$1;
(statearr_51521_51535[(2)] = inst_51501);

(statearr_51521_51535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51508 === (8))){
var inst_51494 = (state_51507[(9)]);
var inst_51497 = cljs.core.deref.call(null,inst_51494);
var state_51507__$1 = state_51507;
var statearr_51522_51536 = state_51507__$1;
(statearr_51522_51536[(2)] = inst_51497);

(statearr_51522_51536[(1)] = (10));


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
});})(c__51020__auto__))
;
return ((function (switch__50930__auto__,c__51020__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__50931__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50931__auto____0 = (function (){
var statearr_51523 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51523[(0)] = cljs$core$async$reduce_$_state_machine__50931__auto__);

(statearr_51523[(1)] = (1));

return statearr_51523;
});
var cljs$core$async$reduce_$_state_machine__50931__auto____1 = (function (state_51507){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_51507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e51524){if((e51524 instanceof Object)){
var ex__50934__auto__ = e51524;
var statearr_51525_51537 = state_51507;
(statearr_51525_51537[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51538 = state_51507;
state_51507 = G__51538;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50931__auto__ = function(state_51507){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50931__auto____1.call(this,state_51507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50931__auto____0;
cljs$core$async$reduce_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50931__auto____1;
return cljs$core$async$reduce_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__))
})();
var state__51022__auto__ = (function (){var statearr_51526 = f__51021__auto__.call(null);
(statearr_51526[(6)] = c__51020__auto__);

return statearr_51526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__))
);

return c__51020__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__,f__$1){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__,f__$1){
return (function (state_51544){
var state_val_51545 = (state_51544[(1)]);
if((state_val_51545 === (1))){
var inst_51539 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_51544__$1 = state_51544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51544__$1,(2),inst_51539);
} else {
if((state_val_51545 === (2))){
var inst_51541 = (state_51544[(2)]);
var inst_51542 = f__$1.call(null,inst_51541);
var state_51544__$1 = state_51544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51544__$1,inst_51542);
} else {
return null;
}
}
});})(c__51020__auto__,f__$1))
;
return ((function (switch__50930__auto__,c__51020__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__50931__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50931__auto____0 = (function (){
var statearr_51546 = [null,null,null,null,null,null,null];
(statearr_51546[(0)] = cljs$core$async$transduce_$_state_machine__50931__auto__);

(statearr_51546[(1)] = (1));

return statearr_51546;
});
var cljs$core$async$transduce_$_state_machine__50931__auto____1 = (function (state_51544){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_51544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e51547){if((e51547 instanceof Object)){
var ex__50934__auto__ = e51547;
var statearr_51548_51550 = state_51544;
(statearr_51548_51550[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51551 = state_51544;
state_51544 = G__51551;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50931__auto__ = function(state_51544){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50931__auto____1.call(this,state_51544);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50931__auto____0;
cljs$core$async$transduce_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50931__auto____1;
return cljs$core$async$transduce_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__,f__$1))
})();
var state__51022__auto__ = (function (){var statearr_51549 = f__51021__auto__.call(null);
(statearr_51549[(6)] = c__51020__auto__);

return statearr_51549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__,f__$1))
);

return c__51020__auto__;
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
var G__51553 = arguments.length;
switch (G__51553) {
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
var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__){
return (function (state_51578){
var state_val_51579 = (state_51578[(1)]);
if((state_val_51579 === (7))){
var inst_51560 = (state_51578[(2)]);
var state_51578__$1 = state_51578;
var statearr_51580_51601 = state_51578__$1;
(statearr_51580_51601[(2)] = inst_51560);

(statearr_51580_51601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (1))){
var inst_51554 = cljs.core.seq.call(null,coll);
var inst_51555 = inst_51554;
var state_51578__$1 = (function (){var statearr_51581 = state_51578;
(statearr_51581[(7)] = inst_51555);

return statearr_51581;
})();
var statearr_51582_51602 = state_51578__$1;
(statearr_51582_51602[(2)] = null);

(statearr_51582_51602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (4))){
var inst_51555 = (state_51578[(7)]);
var inst_51558 = cljs.core.first.call(null,inst_51555);
var state_51578__$1 = state_51578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51578__$1,(7),ch,inst_51558);
} else {
if((state_val_51579 === (13))){
var inst_51572 = (state_51578[(2)]);
var state_51578__$1 = state_51578;
var statearr_51583_51603 = state_51578__$1;
(statearr_51583_51603[(2)] = inst_51572);

(statearr_51583_51603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (6))){
var inst_51563 = (state_51578[(2)]);
var state_51578__$1 = state_51578;
if(cljs.core.truth_(inst_51563)){
var statearr_51584_51604 = state_51578__$1;
(statearr_51584_51604[(1)] = (8));

} else {
var statearr_51585_51605 = state_51578__$1;
(statearr_51585_51605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (3))){
var inst_51576 = (state_51578[(2)]);
var state_51578__$1 = state_51578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51578__$1,inst_51576);
} else {
if((state_val_51579 === (12))){
var state_51578__$1 = state_51578;
var statearr_51586_51606 = state_51578__$1;
(statearr_51586_51606[(2)] = null);

(statearr_51586_51606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (2))){
var inst_51555 = (state_51578[(7)]);
var state_51578__$1 = state_51578;
if(cljs.core.truth_(inst_51555)){
var statearr_51587_51607 = state_51578__$1;
(statearr_51587_51607[(1)] = (4));

} else {
var statearr_51588_51608 = state_51578__$1;
(statearr_51588_51608[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (11))){
var inst_51569 = cljs.core.async.close_BANG_.call(null,ch);
var state_51578__$1 = state_51578;
var statearr_51589_51609 = state_51578__$1;
(statearr_51589_51609[(2)] = inst_51569);

(statearr_51589_51609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (9))){
var state_51578__$1 = state_51578;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51590_51610 = state_51578__$1;
(statearr_51590_51610[(1)] = (11));

} else {
var statearr_51591_51611 = state_51578__$1;
(statearr_51591_51611[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (5))){
var inst_51555 = (state_51578[(7)]);
var state_51578__$1 = state_51578;
var statearr_51592_51612 = state_51578__$1;
(statearr_51592_51612[(2)] = inst_51555);

(statearr_51592_51612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (10))){
var inst_51574 = (state_51578[(2)]);
var state_51578__$1 = state_51578;
var statearr_51593_51613 = state_51578__$1;
(statearr_51593_51613[(2)] = inst_51574);

(statearr_51593_51613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (8))){
var inst_51555 = (state_51578[(7)]);
var inst_51565 = cljs.core.next.call(null,inst_51555);
var inst_51555__$1 = inst_51565;
var state_51578__$1 = (function (){var statearr_51594 = state_51578;
(statearr_51594[(7)] = inst_51555__$1);

return statearr_51594;
})();
var statearr_51595_51614 = state_51578__$1;
(statearr_51595_51614[(2)] = null);

(statearr_51595_51614[(1)] = (2));


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
});})(c__51020__auto__))
;
return ((function (switch__50930__auto__,c__51020__auto__){
return (function() {
var cljs$core$async$state_machine__50931__auto__ = null;
var cljs$core$async$state_machine__50931__auto____0 = (function (){
var statearr_51596 = [null,null,null,null,null,null,null,null];
(statearr_51596[(0)] = cljs$core$async$state_machine__50931__auto__);

(statearr_51596[(1)] = (1));

return statearr_51596;
});
var cljs$core$async$state_machine__50931__auto____1 = (function (state_51578){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_51578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e51597){if((e51597 instanceof Object)){
var ex__50934__auto__ = e51597;
var statearr_51598_51615 = state_51578;
(statearr_51598_51615[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51616 = state_51578;
state_51578 = G__51616;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$state_machine__50931__auto__ = function(state_51578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50931__auto____1.call(this,state_51578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50931__auto____0;
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50931__auto____1;
return cljs$core$async$state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__))
})();
var state__51022__auto__ = (function (){var statearr_51599 = f__51021__auto__.call(null);
(statearr_51599[(6)] = c__51020__auto__);

return statearr_51599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__))
);

return c__51020__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async51617 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51617 = (function (ch,cs,meta51618){
this.ch = ch;
this.cs = cs;
this.meta51618 = meta51618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_51619,meta51618__$1){
var self__ = this;
var _51619__$1 = this;
return (new cljs.core.async.t_cljs$core$async51617(self__.ch,self__.cs,meta51618__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_51619){
var self__ = this;
var _51619__$1 = this;
return self__.meta51618;
});})(cs))
;

cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51617.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51618","meta51618",1269648047,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async51617.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51617";

cljs.core.async.t_cljs$core$async51617.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async51617");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async51617 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async51617(ch__$1,cs__$1,meta51618){
return (new cljs.core.async.t_cljs$core$async51617(ch__$1,cs__$1,meta51618));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async51617(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__51020__auto___51839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___51839,cs,m,dchan,dctr,done){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___51839,cs,m,dchan,dctr,done){
return (function (state_51754){
var state_val_51755 = (state_51754[(1)]);
if((state_val_51755 === (7))){
var inst_51750 = (state_51754[(2)]);
var state_51754__$1 = state_51754;
var statearr_51756_51840 = state_51754__$1;
(statearr_51756_51840[(2)] = inst_51750);

(statearr_51756_51840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (20))){
var inst_51653 = (state_51754[(7)]);
var inst_51665 = cljs.core.first.call(null,inst_51653);
var inst_51666 = cljs.core.nth.call(null,inst_51665,(0),null);
var inst_51667 = cljs.core.nth.call(null,inst_51665,(1),null);
var state_51754__$1 = (function (){var statearr_51757 = state_51754;
(statearr_51757[(8)] = inst_51666);

return statearr_51757;
})();
if(cljs.core.truth_(inst_51667)){
var statearr_51758_51841 = state_51754__$1;
(statearr_51758_51841[(1)] = (22));

} else {
var statearr_51759_51842 = state_51754__$1;
(statearr_51759_51842[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (27))){
var inst_51702 = (state_51754[(9)]);
var inst_51695 = (state_51754[(10)]);
var inst_51697 = (state_51754[(11)]);
var inst_51622 = (state_51754[(12)]);
var inst_51702__$1 = cljs.core._nth.call(null,inst_51695,inst_51697);
var inst_51703 = cljs.core.async.put_BANG_.call(null,inst_51702__$1,inst_51622,done);
var state_51754__$1 = (function (){var statearr_51760 = state_51754;
(statearr_51760[(9)] = inst_51702__$1);

return statearr_51760;
})();
if(cljs.core.truth_(inst_51703)){
var statearr_51761_51843 = state_51754__$1;
(statearr_51761_51843[(1)] = (30));

} else {
var statearr_51762_51844 = state_51754__$1;
(statearr_51762_51844[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (1))){
var state_51754__$1 = state_51754;
var statearr_51763_51845 = state_51754__$1;
(statearr_51763_51845[(2)] = null);

(statearr_51763_51845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (24))){
var inst_51653 = (state_51754[(7)]);
var inst_51672 = (state_51754[(2)]);
var inst_51673 = cljs.core.next.call(null,inst_51653);
var inst_51631 = inst_51673;
var inst_51632 = null;
var inst_51633 = (0);
var inst_51634 = (0);
var state_51754__$1 = (function (){var statearr_51764 = state_51754;
(statearr_51764[(13)] = inst_51631);

(statearr_51764[(14)] = inst_51672);

(statearr_51764[(15)] = inst_51634);

(statearr_51764[(16)] = inst_51632);

(statearr_51764[(17)] = inst_51633);

return statearr_51764;
})();
var statearr_51765_51846 = state_51754__$1;
(statearr_51765_51846[(2)] = null);

(statearr_51765_51846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (39))){
var state_51754__$1 = state_51754;
var statearr_51769_51847 = state_51754__$1;
(statearr_51769_51847[(2)] = null);

(statearr_51769_51847[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (4))){
var inst_51622 = (state_51754[(12)]);
var inst_51622__$1 = (state_51754[(2)]);
var inst_51623 = (inst_51622__$1 == null);
var state_51754__$1 = (function (){var statearr_51770 = state_51754;
(statearr_51770[(12)] = inst_51622__$1);

return statearr_51770;
})();
if(cljs.core.truth_(inst_51623)){
var statearr_51771_51848 = state_51754__$1;
(statearr_51771_51848[(1)] = (5));

} else {
var statearr_51772_51849 = state_51754__$1;
(statearr_51772_51849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (15))){
var inst_51631 = (state_51754[(13)]);
var inst_51634 = (state_51754[(15)]);
var inst_51632 = (state_51754[(16)]);
var inst_51633 = (state_51754[(17)]);
var inst_51649 = (state_51754[(2)]);
var inst_51650 = (inst_51634 + (1));
var tmp51766 = inst_51631;
var tmp51767 = inst_51632;
var tmp51768 = inst_51633;
var inst_51631__$1 = tmp51766;
var inst_51632__$1 = tmp51767;
var inst_51633__$1 = tmp51768;
var inst_51634__$1 = inst_51650;
var state_51754__$1 = (function (){var statearr_51773 = state_51754;
(statearr_51773[(13)] = inst_51631__$1);

(statearr_51773[(15)] = inst_51634__$1);

(statearr_51773[(16)] = inst_51632__$1);

(statearr_51773[(18)] = inst_51649);

(statearr_51773[(17)] = inst_51633__$1);

return statearr_51773;
})();
var statearr_51774_51850 = state_51754__$1;
(statearr_51774_51850[(2)] = null);

(statearr_51774_51850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (21))){
var inst_51676 = (state_51754[(2)]);
var state_51754__$1 = state_51754;
var statearr_51778_51851 = state_51754__$1;
(statearr_51778_51851[(2)] = inst_51676);

(statearr_51778_51851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (31))){
var inst_51702 = (state_51754[(9)]);
var inst_51706 = done.call(null,null);
var inst_51707 = cljs.core.async.untap_STAR_.call(null,m,inst_51702);
var state_51754__$1 = (function (){var statearr_51779 = state_51754;
(statearr_51779[(19)] = inst_51706);

return statearr_51779;
})();
var statearr_51780_51852 = state_51754__$1;
(statearr_51780_51852[(2)] = inst_51707);

(statearr_51780_51852[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (32))){
var inst_51696 = (state_51754[(20)]);
var inst_51695 = (state_51754[(10)]);
var inst_51697 = (state_51754[(11)]);
var inst_51694 = (state_51754[(21)]);
var inst_51709 = (state_51754[(2)]);
var inst_51710 = (inst_51697 + (1));
var tmp51775 = inst_51696;
var tmp51776 = inst_51695;
var tmp51777 = inst_51694;
var inst_51694__$1 = tmp51777;
var inst_51695__$1 = tmp51776;
var inst_51696__$1 = tmp51775;
var inst_51697__$1 = inst_51710;
var state_51754__$1 = (function (){var statearr_51781 = state_51754;
(statearr_51781[(22)] = inst_51709);

(statearr_51781[(20)] = inst_51696__$1);

(statearr_51781[(10)] = inst_51695__$1);

(statearr_51781[(11)] = inst_51697__$1);

(statearr_51781[(21)] = inst_51694__$1);

return statearr_51781;
})();
var statearr_51782_51853 = state_51754__$1;
(statearr_51782_51853[(2)] = null);

(statearr_51782_51853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (40))){
var inst_51722 = (state_51754[(23)]);
var inst_51726 = done.call(null,null);
var inst_51727 = cljs.core.async.untap_STAR_.call(null,m,inst_51722);
var state_51754__$1 = (function (){var statearr_51783 = state_51754;
(statearr_51783[(24)] = inst_51726);

return statearr_51783;
})();
var statearr_51784_51854 = state_51754__$1;
(statearr_51784_51854[(2)] = inst_51727);

(statearr_51784_51854[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (33))){
var inst_51713 = (state_51754[(25)]);
var inst_51715 = cljs.core.chunked_seq_QMARK_.call(null,inst_51713);
var state_51754__$1 = state_51754;
if(inst_51715){
var statearr_51785_51855 = state_51754__$1;
(statearr_51785_51855[(1)] = (36));

} else {
var statearr_51786_51856 = state_51754__$1;
(statearr_51786_51856[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (13))){
var inst_51643 = (state_51754[(26)]);
var inst_51646 = cljs.core.async.close_BANG_.call(null,inst_51643);
var state_51754__$1 = state_51754;
var statearr_51787_51857 = state_51754__$1;
(statearr_51787_51857[(2)] = inst_51646);

(statearr_51787_51857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (22))){
var inst_51666 = (state_51754[(8)]);
var inst_51669 = cljs.core.async.close_BANG_.call(null,inst_51666);
var state_51754__$1 = state_51754;
var statearr_51788_51858 = state_51754__$1;
(statearr_51788_51858[(2)] = inst_51669);

(statearr_51788_51858[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (36))){
var inst_51713 = (state_51754[(25)]);
var inst_51717 = cljs.core.chunk_first.call(null,inst_51713);
var inst_51718 = cljs.core.chunk_rest.call(null,inst_51713);
var inst_51719 = cljs.core.count.call(null,inst_51717);
var inst_51694 = inst_51718;
var inst_51695 = inst_51717;
var inst_51696 = inst_51719;
var inst_51697 = (0);
var state_51754__$1 = (function (){var statearr_51789 = state_51754;
(statearr_51789[(20)] = inst_51696);

(statearr_51789[(10)] = inst_51695);

(statearr_51789[(11)] = inst_51697);

(statearr_51789[(21)] = inst_51694);

return statearr_51789;
})();
var statearr_51790_51859 = state_51754__$1;
(statearr_51790_51859[(2)] = null);

(statearr_51790_51859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (41))){
var inst_51713 = (state_51754[(25)]);
var inst_51729 = (state_51754[(2)]);
var inst_51730 = cljs.core.next.call(null,inst_51713);
var inst_51694 = inst_51730;
var inst_51695 = null;
var inst_51696 = (0);
var inst_51697 = (0);
var state_51754__$1 = (function (){var statearr_51791 = state_51754;
(statearr_51791[(20)] = inst_51696);

(statearr_51791[(10)] = inst_51695);

(statearr_51791[(11)] = inst_51697);

(statearr_51791[(21)] = inst_51694);

(statearr_51791[(27)] = inst_51729);

return statearr_51791;
})();
var statearr_51792_51860 = state_51754__$1;
(statearr_51792_51860[(2)] = null);

(statearr_51792_51860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (43))){
var state_51754__$1 = state_51754;
var statearr_51793_51861 = state_51754__$1;
(statearr_51793_51861[(2)] = null);

(statearr_51793_51861[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (29))){
var inst_51738 = (state_51754[(2)]);
var state_51754__$1 = state_51754;
var statearr_51794_51862 = state_51754__$1;
(statearr_51794_51862[(2)] = inst_51738);

(statearr_51794_51862[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (44))){
var inst_51747 = (state_51754[(2)]);
var state_51754__$1 = (function (){var statearr_51795 = state_51754;
(statearr_51795[(28)] = inst_51747);

return statearr_51795;
})();
var statearr_51796_51863 = state_51754__$1;
(statearr_51796_51863[(2)] = null);

(statearr_51796_51863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (6))){
var inst_51686 = (state_51754[(29)]);
var inst_51685 = cljs.core.deref.call(null,cs);
var inst_51686__$1 = cljs.core.keys.call(null,inst_51685);
var inst_51687 = cljs.core.count.call(null,inst_51686__$1);
var inst_51688 = cljs.core.reset_BANG_.call(null,dctr,inst_51687);
var inst_51693 = cljs.core.seq.call(null,inst_51686__$1);
var inst_51694 = inst_51693;
var inst_51695 = null;
var inst_51696 = (0);
var inst_51697 = (0);
var state_51754__$1 = (function (){var statearr_51797 = state_51754;
(statearr_51797[(20)] = inst_51696);

(statearr_51797[(10)] = inst_51695);

(statearr_51797[(11)] = inst_51697);

(statearr_51797[(30)] = inst_51688);

(statearr_51797[(21)] = inst_51694);

(statearr_51797[(29)] = inst_51686__$1);

return statearr_51797;
})();
var statearr_51798_51864 = state_51754__$1;
(statearr_51798_51864[(2)] = null);

(statearr_51798_51864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (28))){
var inst_51713 = (state_51754[(25)]);
var inst_51694 = (state_51754[(21)]);
var inst_51713__$1 = cljs.core.seq.call(null,inst_51694);
var state_51754__$1 = (function (){var statearr_51799 = state_51754;
(statearr_51799[(25)] = inst_51713__$1);

return statearr_51799;
})();
if(inst_51713__$1){
var statearr_51800_51865 = state_51754__$1;
(statearr_51800_51865[(1)] = (33));

} else {
var statearr_51801_51866 = state_51754__$1;
(statearr_51801_51866[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (25))){
var inst_51696 = (state_51754[(20)]);
var inst_51697 = (state_51754[(11)]);
var inst_51699 = (inst_51697 < inst_51696);
var inst_51700 = inst_51699;
var state_51754__$1 = state_51754;
if(cljs.core.truth_(inst_51700)){
var statearr_51802_51867 = state_51754__$1;
(statearr_51802_51867[(1)] = (27));

} else {
var statearr_51803_51868 = state_51754__$1;
(statearr_51803_51868[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (34))){
var state_51754__$1 = state_51754;
var statearr_51804_51869 = state_51754__$1;
(statearr_51804_51869[(2)] = null);

(statearr_51804_51869[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (17))){
var state_51754__$1 = state_51754;
var statearr_51805_51870 = state_51754__$1;
(statearr_51805_51870[(2)] = null);

(statearr_51805_51870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (3))){
var inst_51752 = (state_51754[(2)]);
var state_51754__$1 = state_51754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51754__$1,inst_51752);
} else {
if((state_val_51755 === (12))){
var inst_51681 = (state_51754[(2)]);
var state_51754__$1 = state_51754;
var statearr_51806_51871 = state_51754__$1;
(statearr_51806_51871[(2)] = inst_51681);

(statearr_51806_51871[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (2))){
var state_51754__$1 = state_51754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51754__$1,(4),ch);
} else {
if((state_val_51755 === (23))){
var state_51754__$1 = state_51754;
var statearr_51807_51872 = state_51754__$1;
(statearr_51807_51872[(2)] = null);

(statearr_51807_51872[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (35))){
var inst_51736 = (state_51754[(2)]);
var state_51754__$1 = state_51754;
var statearr_51808_51873 = state_51754__$1;
(statearr_51808_51873[(2)] = inst_51736);

(statearr_51808_51873[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (19))){
var inst_51653 = (state_51754[(7)]);
var inst_51657 = cljs.core.chunk_first.call(null,inst_51653);
var inst_51658 = cljs.core.chunk_rest.call(null,inst_51653);
var inst_51659 = cljs.core.count.call(null,inst_51657);
var inst_51631 = inst_51658;
var inst_51632 = inst_51657;
var inst_51633 = inst_51659;
var inst_51634 = (0);
var state_51754__$1 = (function (){var statearr_51809 = state_51754;
(statearr_51809[(13)] = inst_51631);

(statearr_51809[(15)] = inst_51634);

(statearr_51809[(16)] = inst_51632);

(statearr_51809[(17)] = inst_51633);

return statearr_51809;
})();
var statearr_51810_51874 = state_51754__$1;
(statearr_51810_51874[(2)] = null);

(statearr_51810_51874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (11))){
var inst_51631 = (state_51754[(13)]);
var inst_51653 = (state_51754[(7)]);
var inst_51653__$1 = cljs.core.seq.call(null,inst_51631);
var state_51754__$1 = (function (){var statearr_51811 = state_51754;
(statearr_51811[(7)] = inst_51653__$1);

return statearr_51811;
})();
if(inst_51653__$1){
var statearr_51812_51875 = state_51754__$1;
(statearr_51812_51875[(1)] = (16));

} else {
var statearr_51813_51876 = state_51754__$1;
(statearr_51813_51876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (9))){
var inst_51683 = (state_51754[(2)]);
var state_51754__$1 = state_51754;
var statearr_51814_51877 = state_51754__$1;
(statearr_51814_51877[(2)] = inst_51683);

(statearr_51814_51877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (5))){
var inst_51629 = cljs.core.deref.call(null,cs);
var inst_51630 = cljs.core.seq.call(null,inst_51629);
var inst_51631 = inst_51630;
var inst_51632 = null;
var inst_51633 = (0);
var inst_51634 = (0);
var state_51754__$1 = (function (){var statearr_51815 = state_51754;
(statearr_51815[(13)] = inst_51631);

(statearr_51815[(15)] = inst_51634);

(statearr_51815[(16)] = inst_51632);

(statearr_51815[(17)] = inst_51633);

return statearr_51815;
})();
var statearr_51816_51878 = state_51754__$1;
(statearr_51816_51878[(2)] = null);

(statearr_51816_51878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (14))){
var state_51754__$1 = state_51754;
var statearr_51817_51879 = state_51754__$1;
(statearr_51817_51879[(2)] = null);

(statearr_51817_51879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (45))){
var inst_51744 = (state_51754[(2)]);
var state_51754__$1 = state_51754;
var statearr_51818_51880 = state_51754__$1;
(statearr_51818_51880[(2)] = inst_51744);

(statearr_51818_51880[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (26))){
var inst_51686 = (state_51754[(29)]);
var inst_51740 = (state_51754[(2)]);
var inst_51741 = cljs.core.seq.call(null,inst_51686);
var state_51754__$1 = (function (){var statearr_51819 = state_51754;
(statearr_51819[(31)] = inst_51740);

return statearr_51819;
})();
if(inst_51741){
var statearr_51820_51881 = state_51754__$1;
(statearr_51820_51881[(1)] = (42));

} else {
var statearr_51821_51882 = state_51754__$1;
(statearr_51821_51882[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (16))){
var inst_51653 = (state_51754[(7)]);
var inst_51655 = cljs.core.chunked_seq_QMARK_.call(null,inst_51653);
var state_51754__$1 = state_51754;
if(inst_51655){
var statearr_51822_51883 = state_51754__$1;
(statearr_51822_51883[(1)] = (19));

} else {
var statearr_51823_51884 = state_51754__$1;
(statearr_51823_51884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (38))){
var inst_51733 = (state_51754[(2)]);
var state_51754__$1 = state_51754;
var statearr_51824_51885 = state_51754__$1;
(statearr_51824_51885[(2)] = inst_51733);

(statearr_51824_51885[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (30))){
var state_51754__$1 = state_51754;
var statearr_51825_51886 = state_51754__$1;
(statearr_51825_51886[(2)] = null);

(statearr_51825_51886[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (10))){
var inst_51634 = (state_51754[(15)]);
var inst_51632 = (state_51754[(16)]);
var inst_51642 = cljs.core._nth.call(null,inst_51632,inst_51634);
var inst_51643 = cljs.core.nth.call(null,inst_51642,(0),null);
var inst_51644 = cljs.core.nth.call(null,inst_51642,(1),null);
var state_51754__$1 = (function (){var statearr_51826 = state_51754;
(statearr_51826[(26)] = inst_51643);

return statearr_51826;
})();
if(cljs.core.truth_(inst_51644)){
var statearr_51827_51887 = state_51754__$1;
(statearr_51827_51887[(1)] = (13));

} else {
var statearr_51828_51888 = state_51754__$1;
(statearr_51828_51888[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (18))){
var inst_51679 = (state_51754[(2)]);
var state_51754__$1 = state_51754;
var statearr_51829_51889 = state_51754__$1;
(statearr_51829_51889[(2)] = inst_51679);

(statearr_51829_51889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (42))){
var state_51754__$1 = state_51754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51754__$1,(45),dchan);
} else {
if((state_val_51755 === (37))){
var inst_51713 = (state_51754[(25)]);
var inst_51722 = (state_51754[(23)]);
var inst_51622 = (state_51754[(12)]);
var inst_51722__$1 = cljs.core.first.call(null,inst_51713);
var inst_51723 = cljs.core.async.put_BANG_.call(null,inst_51722__$1,inst_51622,done);
var state_51754__$1 = (function (){var statearr_51830 = state_51754;
(statearr_51830[(23)] = inst_51722__$1);

return statearr_51830;
})();
if(cljs.core.truth_(inst_51723)){
var statearr_51831_51890 = state_51754__$1;
(statearr_51831_51890[(1)] = (39));

} else {
var statearr_51832_51891 = state_51754__$1;
(statearr_51832_51891[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51755 === (8))){
var inst_51634 = (state_51754[(15)]);
var inst_51633 = (state_51754[(17)]);
var inst_51636 = (inst_51634 < inst_51633);
var inst_51637 = inst_51636;
var state_51754__$1 = state_51754;
if(cljs.core.truth_(inst_51637)){
var statearr_51833_51892 = state_51754__$1;
(statearr_51833_51892[(1)] = (10));

} else {
var statearr_51834_51893 = state_51754__$1;
(statearr_51834_51893[(1)] = (11));

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
});})(c__51020__auto___51839,cs,m,dchan,dctr,done))
;
return ((function (switch__50930__auto__,c__51020__auto___51839,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__50931__auto__ = null;
var cljs$core$async$mult_$_state_machine__50931__auto____0 = (function (){
var statearr_51835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51835[(0)] = cljs$core$async$mult_$_state_machine__50931__auto__);

(statearr_51835[(1)] = (1));

return statearr_51835;
});
var cljs$core$async$mult_$_state_machine__50931__auto____1 = (function (state_51754){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_51754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e51836){if((e51836 instanceof Object)){
var ex__50934__auto__ = e51836;
var statearr_51837_51894 = state_51754;
(statearr_51837_51894[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51895 = state_51754;
state_51754 = G__51895;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50931__auto__ = function(state_51754){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50931__auto____1.call(this,state_51754);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50931__auto____0;
cljs$core$async$mult_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50931__auto____1;
return cljs$core$async$mult_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___51839,cs,m,dchan,dctr,done))
})();
var state__51022__auto__ = (function (){var statearr_51838 = f__51021__auto__.call(null);
(statearr_51838[(6)] = c__51020__auto___51839);

return statearr_51838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___51839,cs,m,dchan,dctr,done))
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
var G__51897 = arguments.length;
switch (G__51897) {
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
var len__31526__auto___51909 = arguments.length;
var i__31527__auto___51910 = (0);
while(true){
if((i__31527__auto___51910 < len__31526__auto___51909)){
args__31533__auto__.push((arguments[i__31527__auto___51910]));

var G__51911 = (i__31527__auto___51910 + (1));
i__31527__auto___51910 = G__51911;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((3) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31534__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51903){
var map__51904 = p__51903;
var map__51904__$1 = ((((!((map__51904 == null)))?((((map__51904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51904):map__51904);
var opts = map__51904__$1;
var statearr_51906_51912 = state;
(statearr_51906_51912[(1)] = cont_block);


var temp__5290__auto__ = cljs.core.async.do_alts.call(null,((function (map__51904,map__51904__$1,opts){
return (function (val){
var statearr_51907_51913 = state;
(statearr_51907_51913[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__51904,map__51904__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5290__auto__)){
var cb = temp__5290__auto__;
var statearr_51908_51914 = state;
(statearr_51908_51914[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51899){
var G__51900 = cljs.core.first.call(null,seq51899);
var seq51899__$1 = cljs.core.next.call(null,seq51899);
var G__51901 = cljs.core.first.call(null,seq51899__$1);
var seq51899__$2 = cljs.core.next.call(null,seq51899__$1);
var G__51902 = cljs.core.first.call(null,seq51899__$2);
var seq51899__$3 = cljs.core.next.call(null,seq51899__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51900,G__51901,G__51902,seq51899__$3);
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
if(typeof cljs.core.async.t_cljs$core$async51915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51915 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta51916){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta51916 = meta51916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51917,meta51916__$1){
var self__ = this;
var _51917__$1 = this;
return (new cljs.core.async.t_cljs$core$async51915(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta51916__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51915.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51917){
var self__ = this;
var _51917__$1 = this;
return self__.meta51916;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51915.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51915.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51915.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51915.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51915.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51915.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51915.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51915.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async51915.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta51916","meta51916",-524118209,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51915";

cljs.core.async.t_cljs$core$async51915.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async51915");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async51915 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async51915(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta51916){
return (new cljs.core.async.t_cljs$core$async51915(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta51916));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async51915(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51020__auto___52079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___52079,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___52079,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_52019){
var state_val_52020 = (state_52019[(1)]);
if((state_val_52020 === (7))){
var inst_51934 = (state_52019[(2)]);
var state_52019__$1 = state_52019;
var statearr_52021_52080 = state_52019__$1;
(statearr_52021_52080[(2)] = inst_51934);

(statearr_52021_52080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (20))){
var inst_51946 = (state_52019[(7)]);
var state_52019__$1 = state_52019;
var statearr_52022_52081 = state_52019__$1;
(statearr_52022_52081[(2)] = inst_51946);

(statearr_52022_52081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (27))){
var state_52019__$1 = state_52019;
var statearr_52023_52082 = state_52019__$1;
(statearr_52023_52082[(2)] = null);

(statearr_52023_52082[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (1))){
var inst_51921 = (state_52019[(8)]);
var inst_51921__$1 = calc_state.call(null);
var inst_51923 = (inst_51921__$1 == null);
var inst_51924 = cljs.core.not.call(null,inst_51923);
var state_52019__$1 = (function (){var statearr_52024 = state_52019;
(statearr_52024[(8)] = inst_51921__$1);

return statearr_52024;
})();
if(inst_51924){
var statearr_52025_52083 = state_52019__$1;
(statearr_52025_52083[(1)] = (2));

} else {
var statearr_52026_52084 = state_52019__$1;
(statearr_52026_52084[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (24))){
var inst_51993 = (state_52019[(9)]);
var inst_51979 = (state_52019[(10)]);
var inst_51970 = (state_52019[(11)]);
var inst_51993__$1 = inst_51970.call(null,inst_51979);
var state_52019__$1 = (function (){var statearr_52027 = state_52019;
(statearr_52027[(9)] = inst_51993__$1);

return statearr_52027;
})();
if(cljs.core.truth_(inst_51993__$1)){
var statearr_52028_52085 = state_52019__$1;
(statearr_52028_52085[(1)] = (29));

} else {
var statearr_52029_52086 = state_52019__$1;
(statearr_52029_52086[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (4))){
var inst_51937 = (state_52019[(2)]);
var state_52019__$1 = state_52019;
if(cljs.core.truth_(inst_51937)){
var statearr_52030_52087 = state_52019__$1;
(statearr_52030_52087[(1)] = (8));

} else {
var statearr_52031_52088 = state_52019__$1;
(statearr_52031_52088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (15))){
var inst_51964 = (state_52019[(2)]);
var state_52019__$1 = state_52019;
if(cljs.core.truth_(inst_51964)){
var statearr_52032_52089 = state_52019__$1;
(statearr_52032_52089[(1)] = (19));

} else {
var statearr_52033_52090 = state_52019__$1;
(statearr_52033_52090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (21))){
var inst_51969 = (state_52019[(12)]);
var inst_51969__$1 = (state_52019[(2)]);
var inst_51970 = cljs.core.get.call(null,inst_51969__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51971 = cljs.core.get.call(null,inst_51969__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51972 = cljs.core.get.call(null,inst_51969__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52019__$1 = (function (){var statearr_52034 = state_52019;
(statearr_52034[(12)] = inst_51969__$1);

(statearr_52034[(13)] = inst_51971);

(statearr_52034[(11)] = inst_51970);

return statearr_52034;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_52019__$1,(22),inst_51972);
} else {
if((state_val_52020 === (31))){
var inst_52001 = (state_52019[(2)]);
var state_52019__$1 = state_52019;
if(cljs.core.truth_(inst_52001)){
var statearr_52035_52091 = state_52019__$1;
(statearr_52035_52091[(1)] = (32));

} else {
var statearr_52036_52092 = state_52019__$1;
(statearr_52036_52092[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (32))){
var inst_51978 = (state_52019[(14)]);
var state_52019__$1 = state_52019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52019__$1,(35),out,inst_51978);
} else {
if((state_val_52020 === (33))){
var inst_51969 = (state_52019[(12)]);
var inst_51946 = inst_51969;
var state_52019__$1 = (function (){var statearr_52037 = state_52019;
(statearr_52037[(7)] = inst_51946);

return statearr_52037;
})();
var statearr_52038_52093 = state_52019__$1;
(statearr_52038_52093[(2)] = null);

(statearr_52038_52093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (13))){
var inst_51946 = (state_52019[(7)]);
var inst_51953 = inst_51946.cljs$lang$protocol_mask$partition0$;
var inst_51954 = (inst_51953 & (64));
var inst_51955 = inst_51946.cljs$core$ISeq$;
var inst_51956 = (cljs.core.PROTOCOL_SENTINEL === inst_51955);
var inst_51957 = (inst_51954) || (inst_51956);
var state_52019__$1 = state_52019;
if(cljs.core.truth_(inst_51957)){
var statearr_52039_52094 = state_52019__$1;
(statearr_52039_52094[(1)] = (16));

} else {
var statearr_52040_52095 = state_52019__$1;
(statearr_52040_52095[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (22))){
var inst_51979 = (state_52019[(10)]);
var inst_51978 = (state_52019[(14)]);
var inst_51977 = (state_52019[(2)]);
var inst_51978__$1 = cljs.core.nth.call(null,inst_51977,(0),null);
var inst_51979__$1 = cljs.core.nth.call(null,inst_51977,(1),null);
var inst_51980 = (inst_51978__$1 == null);
var inst_51981 = cljs.core._EQ_.call(null,inst_51979__$1,change);
var inst_51982 = (inst_51980) || (inst_51981);
var state_52019__$1 = (function (){var statearr_52041 = state_52019;
(statearr_52041[(10)] = inst_51979__$1);

(statearr_52041[(14)] = inst_51978__$1);

return statearr_52041;
})();
if(cljs.core.truth_(inst_51982)){
var statearr_52042_52096 = state_52019__$1;
(statearr_52042_52096[(1)] = (23));

} else {
var statearr_52043_52097 = state_52019__$1;
(statearr_52043_52097[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (36))){
var inst_51969 = (state_52019[(12)]);
var inst_51946 = inst_51969;
var state_52019__$1 = (function (){var statearr_52044 = state_52019;
(statearr_52044[(7)] = inst_51946);

return statearr_52044;
})();
var statearr_52045_52098 = state_52019__$1;
(statearr_52045_52098[(2)] = null);

(statearr_52045_52098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (29))){
var inst_51993 = (state_52019[(9)]);
var state_52019__$1 = state_52019;
var statearr_52046_52099 = state_52019__$1;
(statearr_52046_52099[(2)] = inst_51993);

(statearr_52046_52099[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (6))){
var state_52019__$1 = state_52019;
var statearr_52047_52100 = state_52019__$1;
(statearr_52047_52100[(2)] = false);

(statearr_52047_52100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (28))){
var inst_51989 = (state_52019[(2)]);
var inst_51990 = calc_state.call(null);
var inst_51946 = inst_51990;
var state_52019__$1 = (function (){var statearr_52048 = state_52019;
(statearr_52048[(15)] = inst_51989);

(statearr_52048[(7)] = inst_51946);

return statearr_52048;
})();
var statearr_52049_52101 = state_52019__$1;
(statearr_52049_52101[(2)] = null);

(statearr_52049_52101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (25))){
var inst_52015 = (state_52019[(2)]);
var state_52019__$1 = state_52019;
var statearr_52050_52102 = state_52019__$1;
(statearr_52050_52102[(2)] = inst_52015);

(statearr_52050_52102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (34))){
var inst_52013 = (state_52019[(2)]);
var state_52019__$1 = state_52019;
var statearr_52051_52103 = state_52019__$1;
(statearr_52051_52103[(2)] = inst_52013);

(statearr_52051_52103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (17))){
var state_52019__$1 = state_52019;
var statearr_52052_52104 = state_52019__$1;
(statearr_52052_52104[(2)] = false);

(statearr_52052_52104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (3))){
var state_52019__$1 = state_52019;
var statearr_52053_52105 = state_52019__$1;
(statearr_52053_52105[(2)] = false);

(statearr_52053_52105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (12))){
var inst_52017 = (state_52019[(2)]);
var state_52019__$1 = state_52019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52019__$1,inst_52017);
} else {
if((state_val_52020 === (2))){
var inst_51921 = (state_52019[(8)]);
var inst_51926 = inst_51921.cljs$lang$protocol_mask$partition0$;
var inst_51927 = (inst_51926 & (64));
var inst_51928 = inst_51921.cljs$core$ISeq$;
var inst_51929 = (cljs.core.PROTOCOL_SENTINEL === inst_51928);
var inst_51930 = (inst_51927) || (inst_51929);
var state_52019__$1 = state_52019;
if(cljs.core.truth_(inst_51930)){
var statearr_52054_52106 = state_52019__$1;
(statearr_52054_52106[(1)] = (5));

} else {
var statearr_52055_52107 = state_52019__$1;
(statearr_52055_52107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (23))){
var inst_51978 = (state_52019[(14)]);
var inst_51984 = (inst_51978 == null);
var state_52019__$1 = state_52019;
if(cljs.core.truth_(inst_51984)){
var statearr_52056_52108 = state_52019__$1;
(statearr_52056_52108[(1)] = (26));

} else {
var statearr_52057_52109 = state_52019__$1;
(statearr_52057_52109[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (35))){
var inst_52004 = (state_52019[(2)]);
var state_52019__$1 = state_52019;
if(cljs.core.truth_(inst_52004)){
var statearr_52058_52110 = state_52019__$1;
(statearr_52058_52110[(1)] = (36));

} else {
var statearr_52059_52111 = state_52019__$1;
(statearr_52059_52111[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (19))){
var inst_51946 = (state_52019[(7)]);
var inst_51966 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51946);
var state_52019__$1 = state_52019;
var statearr_52060_52112 = state_52019__$1;
(statearr_52060_52112[(2)] = inst_51966);

(statearr_52060_52112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (11))){
var inst_51946 = (state_52019[(7)]);
var inst_51950 = (inst_51946 == null);
var inst_51951 = cljs.core.not.call(null,inst_51950);
var state_52019__$1 = state_52019;
if(inst_51951){
var statearr_52061_52113 = state_52019__$1;
(statearr_52061_52113[(1)] = (13));

} else {
var statearr_52062_52114 = state_52019__$1;
(statearr_52062_52114[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (9))){
var inst_51921 = (state_52019[(8)]);
var state_52019__$1 = state_52019;
var statearr_52063_52115 = state_52019__$1;
(statearr_52063_52115[(2)] = inst_51921);

(statearr_52063_52115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (5))){
var state_52019__$1 = state_52019;
var statearr_52064_52116 = state_52019__$1;
(statearr_52064_52116[(2)] = true);

(statearr_52064_52116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (14))){
var state_52019__$1 = state_52019;
var statearr_52065_52117 = state_52019__$1;
(statearr_52065_52117[(2)] = false);

(statearr_52065_52117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (26))){
var inst_51979 = (state_52019[(10)]);
var inst_51986 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_51979);
var state_52019__$1 = state_52019;
var statearr_52066_52118 = state_52019__$1;
(statearr_52066_52118[(2)] = inst_51986);

(statearr_52066_52118[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (16))){
var state_52019__$1 = state_52019;
var statearr_52067_52119 = state_52019__$1;
(statearr_52067_52119[(2)] = true);

(statearr_52067_52119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (38))){
var inst_52009 = (state_52019[(2)]);
var state_52019__$1 = state_52019;
var statearr_52068_52120 = state_52019__$1;
(statearr_52068_52120[(2)] = inst_52009);

(statearr_52068_52120[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (30))){
var inst_51979 = (state_52019[(10)]);
var inst_51971 = (state_52019[(13)]);
var inst_51970 = (state_52019[(11)]);
var inst_51996 = cljs.core.empty_QMARK_.call(null,inst_51970);
var inst_51997 = inst_51971.call(null,inst_51979);
var inst_51998 = cljs.core.not.call(null,inst_51997);
var inst_51999 = (inst_51996) && (inst_51998);
var state_52019__$1 = state_52019;
var statearr_52069_52121 = state_52019__$1;
(statearr_52069_52121[(2)] = inst_51999);

(statearr_52069_52121[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (10))){
var inst_51921 = (state_52019[(8)]);
var inst_51942 = (state_52019[(2)]);
var inst_51943 = cljs.core.get.call(null,inst_51942,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51944 = cljs.core.get.call(null,inst_51942,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51945 = cljs.core.get.call(null,inst_51942,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51946 = inst_51921;
var state_52019__$1 = (function (){var statearr_52070 = state_52019;
(statearr_52070[(7)] = inst_51946);

(statearr_52070[(16)] = inst_51945);

(statearr_52070[(17)] = inst_51944);

(statearr_52070[(18)] = inst_51943);

return statearr_52070;
})();
var statearr_52071_52122 = state_52019__$1;
(statearr_52071_52122[(2)] = null);

(statearr_52071_52122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (18))){
var inst_51961 = (state_52019[(2)]);
var state_52019__$1 = state_52019;
var statearr_52072_52123 = state_52019__$1;
(statearr_52072_52123[(2)] = inst_51961);

(statearr_52072_52123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (37))){
var state_52019__$1 = state_52019;
var statearr_52073_52124 = state_52019__$1;
(statearr_52073_52124[(2)] = null);

(statearr_52073_52124[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (8))){
var inst_51921 = (state_52019[(8)]);
var inst_51939 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51921);
var state_52019__$1 = state_52019;
var statearr_52074_52125 = state_52019__$1;
(statearr_52074_52125[(2)] = inst_51939);

(statearr_52074_52125[(1)] = (10));


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
});})(c__51020__auto___52079,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__50930__auto__,c__51020__auto___52079,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__50931__auto__ = null;
var cljs$core$async$mix_$_state_machine__50931__auto____0 = (function (){
var statearr_52075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52075[(0)] = cljs$core$async$mix_$_state_machine__50931__auto__);

(statearr_52075[(1)] = (1));

return statearr_52075;
});
var cljs$core$async$mix_$_state_machine__50931__auto____1 = (function (state_52019){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_52019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e52076){if((e52076 instanceof Object)){
var ex__50934__auto__ = e52076;
var statearr_52077_52126 = state_52019;
(statearr_52077_52126[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52127 = state_52019;
state_52019 = G__52127;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50931__auto__ = function(state_52019){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50931__auto____1.call(this,state_52019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50931__auto____0;
cljs$core$async$mix_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50931__auto____1;
return cljs$core$async$mix_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___52079,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__51022__auto__ = (function (){var statearr_52078 = f__51021__auto__.call(null);
(statearr_52078[(6)] = c__51020__auto___52079);

return statearr_52078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___52079,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__52129 = arguments.length;
switch (G__52129) {
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
var G__52133 = arguments.length;
switch (G__52133) {
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
return (function (p1__52131_SHARP_){
if(cljs.core.truth_(p1__52131_SHARP_.call(null,topic))){
return p1__52131_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__52131_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30249__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async52134 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52134 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52135){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52135 = meta52135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_52136,meta52135__$1){
var self__ = this;
var _52136__$1 = this;
return (new cljs.core.async.t_cljs$core$async52134(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52135__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_52136){
var self__ = this;
var _52136__$1 = this;
return self__.meta52135;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52134.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52135","meta52135",-1445341109,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52134.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52134";

cljs.core.async.t_cljs$core$async52134.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async52134");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async52134 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async52134(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52135){
return (new cljs.core.async.t_cljs$core$async52134(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52135));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async52134(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51020__auto___52254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___52254,mults,ensure_mult,p){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___52254,mults,ensure_mult,p){
return (function (state_52208){
var state_val_52209 = (state_52208[(1)]);
if((state_val_52209 === (7))){
var inst_52204 = (state_52208[(2)]);
var state_52208__$1 = state_52208;
var statearr_52210_52255 = state_52208__$1;
(statearr_52210_52255[(2)] = inst_52204);

(statearr_52210_52255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (20))){
var state_52208__$1 = state_52208;
var statearr_52211_52256 = state_52208__$1;
(statearr_52211_52256[(2)] = null);

(statearr_52211_52256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (1))){
var state_52208__$1 = state_52208;
var statearr_52212_52257 = state_52208__$1;
(statearr_52212_52257[(2)] = null);

(statearr_52212_52257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (24))){
var inst_52187 = (state_52208[(7)]);
var inst_52196 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_52187);
var state_52208__$1 = state_52208;
var statearr_52213_52258 = state_52208__$1;
(statearr_52213_52258[(2)] = inst_52196);

(statearr_52213_52258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (4))){
var inst_52139 = (state_52208[(8)]);
var inst_52139__$1 = (state_52208[(2)]);
var inst_52140 = (inst_52139__$1 == null);
var state_52208__$1 = (function (){var statearr_52214 = state_52208;
(statearr_52214[(8)] = inst_52139__$1);

return statearr_52214;
})();
if(cljs.core.truth_(inst_52140)){
var statearr_52215_52259 = state_52208__$1;
(statearr_52215_52259[(1)] = (5));

} else {
var statearr_52216_52260 = state_52208__$1;
(statearr_52216_52260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (15))){
var inst_52181 = (state_52208[(2)]);
var state_52208__$1 = state_52208;
var statearr_52217_52261 = state_52208__$1;
(statearr_52217_52261[(2)] = inst_52181);

(statearr_52217_52261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (21))){
var inst_52201 = (state_52208[(2)]);
var state_52208__$1 = (function (){var statearr_52218 = state_52208;
(statearr_52218[(9)] = inst_52201);

return statearr_52218;
})();
var statearr_52219_52262 = state_52208__$1;
(statearr_52219_52262[(2)] = null);

(statearr_52219_52262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (13))){
var inst_52163 = (state_52208[(10)]);
var inst_52165 = cljs.core.chunked_seq_QMARK_.call(null,inst_52163);
var state_52208__$1 = state_52208;
if(inst_52165){
var statearr_52220_52263 = state_52208__$1;
(statearr_52220_52263[(1)] = (16));

} else {
var statearr_52221_52264 = state_52208__$1;
(statearr_52221_52264[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (22))){
var inst_52193 = (state_52208[(2)]);
var state_52208__$1 = state_52208;
if(cljs.core.truth_(inst_52193)){
var statearr_52222_52265 = state_52208__$1;
(statearr_52222_52265[(1)] = (23));

} else {
var statearr_52223_52266 = state_52208__$1;
(statearr_52223_52266[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (6))){
var inst_52139 = (state_52208[(8)]);
var inst_52189 = (state_52208[(11)]);
var inst_52187 = (state_52208[(7)]);
var inst_52187__$1 = topic_fn.call(null,inst_52139);
var inst_52188 = cljs.core.deref.call(null,mults);
var inst_52189__$1 = cljs.core.get.call(null,inst_52188,inst_52187__$1);
var state_52208__$1 = (function (){var statearr_52224 = state_52208;
(statearr_52224[(11)] = inst_52189__$1);

(statearr_52224[(7)] = inst_52187__$1);

return statearr_52224;
})();
if(cljs.core.truth_(inst_52189__$1)){
var statearr_52225_52267 = state_52208__$1;
(statearr_52225_52267[(1)] = (19));

} else {
var statearr_52226_52268 = state_52208__$1;
(statearr_52226_52268[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (25))){
var inst_52198 = (state_52208[(2)]);
var state_52208__$1 = state_52208;
var statearr_52227_52269 = state_52208__$1;
(statearr_52227_52269[(2)] = inst_52198);

(statearr_52227_52269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (17))){
var inst_52163 = (state_52208[(10)]);
var inst_52172 = cljs.core.first.call(null,inst_52163);
var inst_52173 = cljs.core.async.muxch_STAR_.call(null,inst_52172);
var inst_52174 = cljs.core.async.close_BANG_.call(null,inst_52173);
var inst_52175 = cljs.core.next.call(null,inst_52163);
var inst_52149 = inst_52175;
var inst_52150 = null;
var inst_52151 = (0);
var inst_52152 = (0);
var state_52208__$1 = (function (){var statearr_52228 = state_52208;
(statearr_52228[(12)] = inst_52150);

(statearr_52228[(13)] = inst_52152);

(statearr_52228[(14)] = inst_52151);

(statearr_52228[(15)] = inst_52174);

(statearr_52228[(16)] = inst_52149);

return statearr_52228;
})();
var statearr_52229_52270 = state_52208__$1;
(statearr_52229_52270[(2)] = null);

(statearr_52229_52270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (3))){
var inst_52206 = (state_52208[(2)]);
var state_52208__$1 = state_52208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52208__$1,inst_52206);
} else {
if((state_val_52209 === (12))){
var inst_52183 = (state_52208[(2)]);
var state_52208__$1 = state_52208;
var statearr_52230_52271 = state_52208__$1;
(statearr_52230_52271[(2)] = inst_52183);

(statearr_52230_52271[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (2))){
var state_52208__$1 = state_52208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52208__$1,(4),ch);
} else {
if((state_val_52209 === (23))){
var state_52208__$1 = state_52208;
var statearr_52231_52272 = state_52208__$1;
(statearr_52231_52272[(2)] = null);

(statearr_52231_52272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (19))){
var inst_52139 = (state_52208[(8)]);
var inst_52189 = (state_52208[(11)]);
var inst_52191 = cljs.core.async.muxch_STAR_.call(null,inst_52189);
var state_52208__$1 = state_52208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52208__$1,(22),inst_52191,inst_52139);
} else {
if((state_val_52209 === (11))){
var inst_52163 = (state_52208[(10)]);
var inst_52149 = (state_52208[(16)]);
var inst_52163__$1 = cljs.core.seq.call(null,inst_52149);
var state_52208__$1 = (function (){var statearr_52232 = state_52208;
(statearr_52232[(10)] = inst_52163__$1);

return statearr_52232;
})();
if(inst_52163__$1){
var statearr_52233_52273 = state_52208__$1;
(statearr_52233_52273[(1)] = (13));

} else {
var statearr_52234_52274 = state_52208__$1;
(statearr_52234_52274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (9))){
var inst_52185 = (state_52208[(2)]);
var state_52208__$1 = state_52208;
var statearr_52235_52275 = state_52208__$1;
(statearr_52235_52275[(2)] = inst_52185);

(statearr_52235_52275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (5))){
var inst_52146 = cljs.core.deref.call(null,mults);
var inst_52147 = cljs.core.vals.call(null,inst_52146);
var inst_52148 = cljs.core.seq.call(null,inst_52147);
var inst_52149 = inst_52148;
var inst_52150 = null;
var inst_52151 = (0);
var inst_52152 = (0);
var state_52208__$1 = (function (){var statearr_52236 = state_52208;
(statearr_52236[(12)] = inst_52150);

(statearr_52236[(13)] = inst_52152);

(statearr_52236[(14)] = inst_52151);

(statearr_52236[(16)] = inst_52149);

return statearr_52236;
})();
var statearr_52237_52276 = state_52208__$1;
(statearr_52237_52276[(2)] = null);

(statearr_52237_52276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (14))){
var state_52208__$1 = state_52208;
var statearr_52241_52277 = state_52208__$1;
(statearr_52241_52277[(2)] = null);

(statearr_52241_52277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (16))){
var inst_52163 = (state_52208[(10)]);
var inst_52167 = cljs.core.chunk_first.call(null,inst_52163);
var inst_52168 = cljs.core.chunk_rest.call(null,inst_52163);
var inst_52169 = cljs.core.count.call(null,inst_52167);
var inst_52149 = inst_52168;
var inst_52150 = inst_52167;
var inst_52151 = inst_52169;
var inst_52152 = (0);
var state_52208__$1 = (function (){var statearr_52242 = state_52208;
(statearr_52242[(12)] = inst_52150);

(statearr_52242[(13)] = inst_52152);

(statearr_52242[(14)] = inst_52151);

(statearr_52242[(16)] = inst_52149);

return statearr_52242;
})();
var statearr_52243_52278 = state_52208__$1;
(statearr_52243_52278[(2)] = null);

(statearr_52243_52278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (10))){
var inst_52150 = (state_52208[(12)]);
var inst_52152 = (state_52208[(13)]);
var inst_52151 = (state_52208[(14)]);
var inst_52149 = (state_52208[(16)]);
var inst_52157 = cljs.core._nth.call(null,inst_52150,inst_52152);
var inst_52158 = cljs.core.async.muxch_STAR_.call(null,inst_52157);
var inst_52159 = cljs.core.async.close_BANG_.call(null,inst_52158);
var inst_52160 = (inst_52152 + (1));
var tmp52238 = inst_52150;
var tmp52239 = inst_52151;
var tmp52240 = inst_52149;
var inst_52149__$1 = tmp52240;
var inst_52150__$1 = tmp52238;
var inst_52151__$1 = tmp52239;
var inst_52152__$1 = inst_52160;
var state_52208__$1 = (function (){var statearr_52244 = state_52208;
(statearr_52244[(12)] = inst_52150__$1);

(statearr_52244[(13)] = inst_52152__$1);

(statearr_52244[(14)] = inst_52151__$1);

(statearr_52244[(17)] = inst_52159);

(statearr_52244[(16)] = inst_52149__$1);

return statearr_52244;
})();
var statearr_52245_52279 = state_52208__$1;
(statearr_52245_52279[(2)] = null);

(statearr_52245_52279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (18))){
var inst_52178 = (state_52208[(2)]);
var state_52208__$1 = state_52208;
var statearr_52246_52280 = state_52208__$1;
(statearr_52246_52280[(2)] = inst_52178);

(statearr_52246_52280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52209 === (8))){
var inst_52152 = (state_52208[(13)]);
var inst_52151 = (state_52208[(14)]);
var inst_52154 = (inst_52152 < inst_52151);
var inst_52155 = inst_52154;
var state_52208__$1 = state_52208;
if(cljs.core.truth_(inst_52155)){
var statearr_52247_52281 = state_52208__$1;
(statearr_52247_52281[(1)] = (10));

} else {
var statearr_52248_52282 = state_52208__$1;
(statearr_52248_52282[(1)] = (11));

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
});})(c__51020__auto___52254,mults,ensure_mult,p))
;
return ((function (switch__50930__auto__,c__51020__auto___52254,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__50931__auto__ = null;
var cljs$core$async$state_machine__50931__auto____0 = (function (){
var statearr_52249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52249[(0)] = cljs$core$async$state_machine__50931__auto__);

(statearr_52249[(1)] = (1));

return statearr_52249;
});
var cljs$core$async$state_machine__50931__auto____1 = (function (state_52208){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_52208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e52250){if((e52250 instanceof Object)){
var ex__50934__auto__ = e52250;
var statearr_52251_52283 = state_52208;
(statearr_52251_52283[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52284 = state_52208;
state_52208 = G__52284;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$state_machine__50931__auto__ = function(state_52208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50931__auto____1.call(this,state_52208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50931__auto____0;
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50931__auto____1;
return cljs$core$async$state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___52254,mults,ensure_mult,p))
})();
var state__51022__auto__ = (function (){var statearr_52252 = f__51021__auto__.call(null);
(statearr_52252[(6)] = c__51020__auto___52254);

return statearr_52252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___52254,mults,ensure_mult,p))
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
var G__52286 = arguments.length;
switch (G__52286) {
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
var G__52289 = arguments.length;
switch (G__52289) {
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
var G__52292 = arguments.length;
switch (G__52292) {
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
var c__51020__auto___52359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___52359,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___52359,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_52331){
var state_val_52332 = (state_52331[(1)]);
if((state_val_52332 === (7))){
var state_52331__$1 = state_52331;
var statearr_52333_52360 = state_52331__$1;
(statearr_52333_52360[(2)] = null);

(statearr_52333_52360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (1))){
var state_52331__$1 = state_52331;
var statearr_52334_52361 = state_52331__$1;
(statearr_52334_52361[(2)] = null);

(statearr_52334_52361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (4))){
var inst_52295 = (state_52331[(7)]);
var inst_52297 = (inst_52295 < cnt);
var state_52331__$1 = state_52331;
if(cljs.core.truth_(inst_52297)){
var statearr_52335_52362 = state_52331__$1;
(statearr_52335_52362[(1)] = (6));

} else {
var statearr_52336_52363 = state_52331__$1;
(statearr_52336_52363[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (15))){
var inst_52327 = (state_52331[(2)]);
var state_52331__$1 = state_52331;
var statearr_52337_52364 = state_52331__$1;
(statearr_52337_52364[(2)] = inst_52327);

(statearr_52337_52364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (13))){
var inst_52320 = cljs.core.async.close_BANG_.call(null,out);
var state_52331__$1 = state_52331;
var statearr_52338_52365 = state_52331__$1;
(statearr_52338_52365[(2)] = inst_52320);

(statearr_52338_52365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (6))){
var state_52331__$1 = state_52331;
var statearr_52339_52366 = state_52331__$1;
(statearr_52339_52366[(2)] = null);

(statearr_52339_52366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (3))){
var inst_52329 = (state_52331[(2)]);
var state_52331__$1 = state_52331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52331__$1,inst_52329);
} else {
if((state_val_52332 === (12))){
var inst_52317 = (state_52331[(8)]);
var inst_52317__$1 = (state_52331[(2)]);
var inst_52318 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_52317__$1);
var state_52331__$1 = (function (){var statearr_52340 = state_52331;
(statearr_52340[(8)] = inst_52317__$1);

return statearr_52340;
})();
if(cljs.core.truth_(inst_52318)){
var statearr_52341_52367 = state_52331__$1;
(statearr_52341_52367[(1)] = (13));

} else {
var statearr_52342_52368 = state_52331__$1;
(statearr_52342_52368[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (2))){
var inst_52294 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_52295 = (0);
var state_52331__$1 = (function (){var statearr_52343 = state_52331;
(statearr_52343[(9)] = inst_52294);

(statearr_52343[(7)] = inst_52295);

return statearr_52343;
})();
var statearr_52344_52369 = state_52331__$1;
(statearr_52344_52369[(2)] = null);

(statearr_52344_52369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (11))){
var inst_52295 = (state_52331[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52331,(10),Object,null,(9));
var inst_52304 = chs__$1.call(null,inst_52295);
var inst_52305 = done.call(null,inst_52295);
var inst_52306 = cljs.core.async.take_BANG_.call(null,inst_52304,inst_52305);
var state_52331__$1 = state_52331;
var statearr_52345_52370 = state_52331__$1;
(statearr_52345_52370[(2)] = inst_52306);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52331__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (9))){
var inst_52295 = (state_52331[(7)]);
var inst_52308 = (state_52331[(2)]);
var inst_52309 = (inst_52295 + (1));
var inst_52295__$1 = inst_52309;
var state_52331__$1 = (function (){var statearr_52346 = state_52331;
(statearr_52346[(10)] = inst_52308);

(statearr_52346[(7)] = inst_52295__$1);

return statearr_52346;
})();
var statearr_52347_52371 = state_52331__$1;
(statearr_52347_52371[(2)] = null);

(statearr_52347_52371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (5))){
var inst_52315 = (state_52331[(2)]);
var state_52331__$1 = (function (){var statearr_52348 = state_52331;
(statearr_52348[(11)] = inst_52315);

return statearr_52348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52331__$1,(12),dchan);
} else {
if((state_val_52332 === (14))){
var inst_52317 = (state_52331[(8)]);
var inst_52322 = cljs.core.apply.call(null,f,inst_52317);
var state_52331__$1 = state_52331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52331__$1,(16),out,inst_52322);
} else {
if((state_val_52332 === (16))){
var inst_52324 = (state_52331[(2)]);
var state_52331__$1 = (function (){var statearr_52349 = state_52331;
(statearr_52349[(12)] = inst_52324);

return statearr_52349;
})();
var statearr_52350_52372 = state_52331__$1;
(statearr_52350_52372[(2)] = null);

(statearr_52350_52372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (10))){
var inst_52299 = (state_52331[(2)]);
var inst_52300 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_52331__$1 = (function (){var statearr_52351 = state_52331;
(statearr_52351[(13)] = inst_52299);

return statearr_52351;
})();
var statearr_52352_52373 = state_52331__$1;
(statearr_52352_52373[(2)] = inst_52300);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52331__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (8))){
var inst_52313 = (state_52331[(2)]);
var state_52331__$1 = state_52331;
var statearr_52353_52374 = state_52331__$1;
(statearr_52353_52374[(2)] = inst_52313);

(statearr_52353_52374[(1)] = (5));


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
});})(c__51020__auto___52359,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__50930__auto__,c__51020__auto___52359,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__50931__auto__ = null;
var cljs$core$async$state_machine__50931__auto____0 = (function (){
var statearr_52354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52354[(0)] = cljs$core$async$state_machine__50931__auto__);

(statearr_52354[(1)] = (1));

return statearr_52354;
});
var cljs$core$async$state_machine__50931__auto____1 = (function (state_52331){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_52331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e52355){if((e52355 instanceof Object)){
var ex__50934__auto__ = e52355;
var statearr_52356_52375 = state_52331;
(statearr_52356_52375[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52376 = state_52331;
state_52331 = G__52376;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$state_machine__50931__auto__ = function(state_52331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50931__auto____1.call(this,state_52331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50931__auto____0;
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50931__auto____1;
return cljs$core$async$state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___52359,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__51022__auto__ = (function (){var statearr_52357 = f__51021__auto__.call(null);
(statearr_52357[(6)] = c__51020__auto___52359);

return statearr_52357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___52359,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__52379 = arguments.length;
switch (G__52379) {
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
var c__51020__auto___52433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___52433,out){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___52433,out){
return (function (state_52411){
var state_val_52412 = (state_52411[(1)]);
if((state_val_52412 === (7))){
var inst_52390 = (state_52411[(7)]);
var inst_52391 = (state_52411[(8)]);
var inst_52390__$1 = (state_52411[(2)]);
var inst_52391__$1 = cljs.core.nth.call(null,inst_52390__$1,(0),null);
var inst_52392 = cljs.core.nth.call(null,inst_52390__$1,(1),null);
var inst_52393 = (inst_52391__$1 == null);
var state_52411__$1 = (function (){var statearr_52413 = state_52411;
(statearr_52413[(7)] = inst_52390__$1);

(statearr_52413[(8)] = inst_52391__$1);

(statearr_52413[(9)] = inst_52392);

return statearr_52413;
})();
if(cljs.core.truth_(inst_52393)){
var statearr_52414_52434 = state_52411__$1;
(statearr_52414_52434[(1)] = (8));

} else {
var statearr_52415_52435 = state_52411__$1;
(statearr_52415_52435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (1))){
var inst_52380 = cljs.core.vec.call(null,chs);
var inst_52381 = inst_52380;
var state_52411__$1 = (function (){var statearr_52416 = state_52411;
(statearr_52416[(10)] = inst_52381);

return statearr_52416;
})();
var statearr_52417_52436 = state_52411__$1;
(statearr_52417_52436[(2)] = null);

(statearr_52417_52436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (4))){
var inst_52381 = (state_52411[(10)]);
var state_52411__$1 = state_52411;
return cljs.core.async.ioc_alts_BANG_.call(null,state_52411__$1,(7),inst_52381);
} else {
if((state_val_52412 === (6))){
var inst_52407 = (state_52411[(2)]);
var state_52411__$1 = state_52411;
var statearr_52418_52437 = state_52411__$1;
(statearr_52418_52437[(2)] = inst_52407);

(statearr_52418_52437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (3))){
var inst_52409 = (state_52411[(2)]);
var state_52411__$1 = state_52411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52411__$1,inst_52409);
} else {
if((state_val_52412 === (2))){
var inst_52381 = (state_52411[(10)]);
var inst_52383 = cljs.core.count.call(null,inst_52381);
var inst_52384 = (inst_52383 > (0));
var state_52411__$1 = state_52411;
if(cljs.core.truth_(inst_52384)){
var statearr_52420_52438 = state_52411__$1;
(statearr_52420_52438[(1)] = (4));

} else {
var statearr_52421_52439 = state_52411__$1;
(statearr_52421_52439[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (11))){
var inst_52381 = (state_52411[(10)]);
var inst_52400 = (state_52411[(2)]);
var tmp52419 = inst_52381;
var inst_52381__$1 = tmp52419;
var state_52411__$1 = (function (){var statearr_52422 = state_52411;
(statearr_52422[(10)] = inst_52381__$1);

(statearr_52422[(11)] = inst_52400);

return statearr_52422;
})();
var statearr_52423_52440 = state_52411__$1;
(statearr_52423_52440[(2)] = null);

(statearr_52423_52440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (9))){
var inst_52391 = (state_52411[(8)]);
var state_52411__$1 = state_52411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52411__$1,(11),out,inst_52391);
} else {
if((state_val_52412 === (5))){
var inst_52405 = cljs.core.async.close_BANG_.call(null,out);
var state_52411__$1 = state_52411;
var statearr_52424_52441 = state_52411__$1;
(statearr_52424_52441[(2)] = inst_52405);

(statearr_52424_52441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (10))){
var inst_52403 = (state_52411[(2)]);
var state_52411__$1 = state_52411;
var statearr_52425_52442 = state_52411__$1;
(statearr_52425_52442[(2)] = inst_52403);

(statearr_52425_52442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (8))){
var inst_52390 = (state_52411[(7)]);
var inst_52391 = (state_52411[(8)]);
var inst_52381 = (state_52411[(10)]);
var inst_52392 = (state_52411[(9)]);
var inst_52395 = (function (){var cs = inst_52381;
var vec__52386 = inst_52390;
var v = inst_52391;
var c = inst_52392;
return ((function (cs,vec__52386,v,c,inst_52390,inst_52391,inst_52381,inst_52392,state_val_52412,c__51020__auto___52433,out){
return (function (p1__52377_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__52377_SHARP_);
});
;})(cs,vec__52386,v,c,inst_52390,inst_52391,inst_52381,inst_52392,state_val_52412,c__51020__auto___52433,out))
})();
var inst_52396 = cljs.core.filterv.call(null,inst_52395,inst_52381);
var inst_52381__$1 = inst_52396;
var state_52411__$1 = (function (){var statearr_52426 = state_52411;
(statearr_52426[(10)] = inst_52381__$1);

return statearr_52426;
})();
var statearr_52427_52443 = state_52411__$1;
(statearr_52427_52443[(2)] = null);

(statearr_52427_52443[(1)] = (2));


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
});})(c__51020__auto___52433,out))
;
return ((function (switch__50930__auto__,c__51020__auto___52433,out){
return (function() {
var cljs$core$async$state_machine__50931__auto__ = null;
var cljs$core$async$state_machine__50931__auto____0 = (function (){
var statearr_52428 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52428[(0)] = cljs$core$async$state_machine__50931__auto__);

(statearr_52428[(1)] = (1));

return statearr_52428;
});
var cljs$core$async$state_machine__50931__auto____1 = (function (state_52411){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_52411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e52429){if((e52429 instanceof Object)){
var ex__50934__auto__ = e52429;
var statearr_52430_52444 = state_52411;
(statearr_52430_52444[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52445 = state_52411;
state_52411 = G__52445;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$state_machine__50931__auto__ = function(state_52411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50931__auto____1.call(this,state_52411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50931__auto____0;
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50931__auto____1;
return cljs$core$async$state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___52433,out))
})();
var state__51022__auto__ = (function (){var statearr_52431 = f__51021__auto__.call(null);
(statearr_52431[(6)] = c__51020__auto___52433);

return statearr_52431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___52433,out))
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
var G__52447 = arguments.length;
switch (G__52447) {
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
var c__51020__auto___52492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___52492,out){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___52492,out){
return (function (state_52471){
var state_val_52472 = (state_52471[(1)]);
if((state_val_52472 === (7))){
var inst_52453 = (state_52471[(7)]);
var inst_52453__$1 = (state_52471[(2)]);
var inst_52454 = (inst_52453__$1 == null);
var inst_52455 = cljs.core.not.call(null,inst_52454);
var state_52471__$1 = (function (){var statearr_52473 = state_52471;
(statearr_52473[(7)] = inst_52453__$1);

return statearr_52473;
})();
if(inst_52455){
var statearr_52474_52493 = state_52471__$1;
(statearr_52474_52493[(1)] = (8));

} else {
var statearr_52475_52494 = state_52471__$1;
(statearr_52475_52494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52472 === (1))){
var inst_52448 = (0);
var state_52471__$1 = (function (){var statearr_52476 = state_52471;
(statearr_52476[(8)] = inst_52448);

return statearr_52476;
})();
var statearr_52477_52495 = state_52471__$1;
(statearr_52477_52495[(2)] = null);

(statearr_52477_52495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52472 === (4))){
var state_52471__$1 = state_52471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52471__$1,(7),ch);
} else {
if((state_val_52472 === (6))){
var inst_52466 = (state_52471[(2)]);
var state_52471__$1 = state_52471;
var statearr_52478_52496 = state_52471__$1;
(statearr_52478_52496[(2)] = inst_52466);

(statearr_52478_52496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52472 === (3))){
var inst_52468 = (state_52471[(2)]);
var inst_52469 = cljs.core.async.close_BANG_.call(null,out);
var state_52471__$1 = (function (){var statearr_52479 = state_52471;
(statearr_52479[(9)] = inst_52468);

return statearr_52479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52471__$1,inst_52469);
} else {
if((state_val_52472 === (2))){
var inst_52448 = (state_52471[(8)]);
var inst_52450 = (inst_52448 < n);
var state_52471__$1 = state_52471;
if(cljs.core.truth_(inst_52450)){
var statearr_52480_52497 = state_52471__$1;
(statearr_52480_52497[(1)] = (4));

} else {
var statearr_52481_52498 = state_52471__$1;
(statearr_52481_52498[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52472 === (11))){
var inst_52448 = (state_52471[(8)]);
var inst_52458 = (state_52471[(2)]);
var inst_52459 = (inst_52448 + (1));
var inst_52448__$1 = inst_52459;
var state_52471__$1 = (function (){var statearr_52482 = state_52471;
(statearr_52482[(10)] = inst_52458);

(statearr_52482[(8)] = inst_52448__$1);

return statearr_52482;
})();
var statearr_52483_52499 = state_52471__$1;
(statearr_52483_52499[(2)] = null);

(statearr_52483_52499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52472 === (9))){
var state_52471__$1 = state_52471;
var statearr_52484_52500 = state_52471__$1;
(statearr_52484_52500[(2)] = null);

(statearr_52484_52500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52472 === (5))){
var state_52471__$1 = state_52471;
var statearr_52485_52501 = state_52471__$1;
(statearr_52485_52501[(2)] = null);

(statearr_52485_52501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52472 === (10))){
var inst_52463 = (state_52471[(2)]);
var state_52471__$1 = state_52471;
var statearr_52486_52502 = state_52471__$1;
(statearr_52486_52502[(2)] = inst_52463);

(statearr_52486_52502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52472 === (8))){
var inst_52453 = (state_52471[(7)]);
var state_52471__$1 = state_52471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52471__$1,(11),out,inst_52453);
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
});})(c__51020__auto___52492,out))
;
return ((function (switch__50930__auto__,c__51020__auto___52492,out){
return (function() {
var cljs$core$async$state_machine__50931__auto__ = null;
var cljs$core$async$state_machine__50931__auto____0 = (function (){
var statearr_52487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52487[(0)] = cljs$core$async$state_machine__50931__auto__);

(statearr_52487[(1)] = (1));

return statearr_52487;
});
var cljs$core$async$state_machine__50931__auto____1 = (function (state_52471){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_52471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e52488){if((e52488 instanceof Object)){
var ex__50934__auto__ = e52488;
var statearr_52489_52503 = state_52471;
(statearr_52489_52503[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52504 = state_52471;
state_52471 = G__52504;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$state_machine__50931__auto__ = function(state_52471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50931__auto____1.call(this,state_52471);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50931__auto____0;
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50931__auto____1;
return cljs$core$async$state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___52492,out))
})();
var state__51022__auto__ = (function (){var statearr_52490 = f__51021__auto__.call(null);
(statearr_52490[(6)] = c__51020__auto___52492);

return statearr_52490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___52492,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52506 = (function (f,ch,meta52507){
this.f = f;
this.ch = ch;
this.meta52507 = meta52507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52508,meta52507__$1){
var self__ = this;
var _52508__$1 = this;
return (new cljs.core.async.t_cljs$core$async52506(self__.f,self__.ch,meta52507__$1));
});

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52508){
var self__ = this;
var _52508__$1 = this;
return self__.meta52507;
});

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async52509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52509 = (function (f,ch,meta52507,_,fn1,meta52510){
this.f = f;
this.ch = ch;
this.meta52507 = meta52507;
this._ = _;
this.fn1 = fn1;
this.meta52510 = meta52510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_52511,meta52510__$1){
var self__ = this;
var _52511__$1 = this;
return (new cljs.core.async.t_cljs$core$async52509(self__.f,self__.ch,self__.meta52507,self__._,self__.fn1,meta52510__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async52509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_52511){
var self__ = this;
var _52511__$1 = this;
return self__.meta52510;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52509.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52509.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__52505_SHARP_){
return f1.call(null,(((p1__52505_SHARP_ == null))?null:self__.f.call(null,p1__52505_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async52509.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52507","meta52507",74419366,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52506","cljs.core.async/t_cljs$core$async52506",-2103979670,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52510","meta52510",-1401081711,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52509";

cljs.core.async.t_cljs$core$async52509.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async52509");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async52509 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52509(f__$1,ch__$1,meta52507__$1,___$2,fn1__$1,meta52510){
return (new cljs.core.async.t_cljs$core$async52509(f__$1,ch__$1,meta52507__$1,___$2,fn1__$1,meta52510));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async52509(self__.f,self__.ch,self__.meta52507,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async52506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52507","meta52507",74419366,null)], null);
});

cljs.core.async.t_cljs$core$async52506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52506";

cljs.core.async.t_cljs$core$async52506.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async52506");
});

cljs.core.async.__GT_t_cljs$core$async52506 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52506(f__$1,ch__$1,meta52507){
return (new cljs.core.async.t_cljs$core$async52506(f__$1,ch__$1,meta52507));
});

}

return (new cljs.core.async.t_cljs$core$async52506(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52512 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52512 = (function (f,ch,meta52513){
this.f = f;
this.ch = ch;
this.meta52513 = meta52513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52514,meta52513__$1){
var self__ = this;
var _52514__$1 = this;
return (new cljs.core.async.t_cljs$core$async52512(self__.f,self__.ch,meta52513__$1));
});

cljs.core.async.t_cljs$core$async52512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52514){
var self__ = this;
var _52514__$1 = this;
return self__.meta52513;
});

cljs.core.async.t_cljs$core$async52512.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52512.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52512.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52512.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52512.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52512.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async52512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52513","meta52513",-153588586,null)], null);
});

cljs.core.async.t_cljs$core$async52512.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52512";

cljs.core.async.t_cljs$core$async52512.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async52512");
});

cljs.core.async.__GT_t_cljs$core$async52512 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52512(f__$1,ch__$1,meta52513){
return (new cljs.core.async.t_cljs$core$async52512(f__$1,ch__$1,meta52513));
});

}

return (new cljs.core.async.t_cljs$core$async52512(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async52515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52515 = (function (p,ch,meta52516){
this.p = p;
this.ch = ch;
this.meta52516 = meta52516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52517,meta52516__$1){
var self__ = this;
var _52517__$1 = this;
return (new cljs.core.async.t_cljs$core$async52515(self__.p,self__.ch,meta52516__$1));
});

cljs.core.async.t_cljs$core$async52515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52517){
var self__ = this;
var _52517__$1 = this;
return self__.meta52516;
});

cljs.core.async.t_cljs$core$async52515.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52515.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52515.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52515.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52515.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52515.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52515.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async52515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52516","meta52516",-614257630,null)], null);
});

cljs.core.async.t_cljs$core$async52515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52515";

cljs.core.async.t_cljs$core$async52515.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async/t_cljs$core$async52515");
});

cljs.core.async.__GT_t_cljs$core$async52515 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52515(p__$1,ch__$1,meta52516){
return (new cljs.core.async.t_cljs$core$async52515(p__$1,ch__$1,meta52516));
});

}

return (new cljs.core.async.t_cljs$core$async52515(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__52519 = arguments.length;
switch (G__52519) {
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
var c__51020__auto___52559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___52559,out){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___52559,out){
return (function (state_52540){
var state_val_52541 = (state_52540[(1)]);
if((state_val_52541 === (7))){
var inst_52536 = (state_52540[(2)]);
var state_52540__$1 = state_52540;
var statearr_52542_52560 = state_52540__$1;
(statearr_52542_52560[(2)] = inst_52536);

(statearr_52542_52560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52541 === (1))){
var state_52540__$1 = state_52540;
var statearr_52543_52561 = state_52540__$1;
(statearr_52543_52561[(2)] = null);

(statearr_52543_52561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52541 === (4))){
var inst_52522 = (state_52540[(7)]);
var inst_52522__$1 = (state_52540[(2)]);
var inst_52523 = (inst_52522__$1 == null);
var state_52540__$1 = (function (){var statearr_52544 = state_52540;
(statearr_52544[(7)] = inst_52522__$1);

return statearr_52544;
})();
if(cljs.core.truth_(inst_52523)){
var statearr_52545_52562 = state_52540__$1;
(statearr_52545_52562[(1)] = (5));

} else {
var statearr_52546_52563 = state_52540__$1;
(statearr_52546_52563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52541 === (6))){
var inst_52522 = (state_52540[(7)]);
var inst_52527 = p.call(null,inst_52522);
var state_52540__$1 = state_52540;
if(cljs.core.truth_(inst_52527)){
var statearr_52547_52564 = state_52540__$1;
(statearr_52547_52564[(1)] = (8));

} else {
var statearr_52548_52565 = state_52540__$1;
(statearr_52548_52565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52541 === (3))){
var inst_52538 = (state_52540[(2)]);
var state_52540__$1 = state_52540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52540__$1,inst_52538);
} else {
if((state_val_52541 === (2))){
var state_52540__$1 = state_52540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52540__$1,(4),ch);
} else {
if((state_val_52541 === (11))){
var inst_52530 = (state_52540[(2)]);
var state_52540__$1 = state_52540;
var statearr_52549_52566 = state_52540__$1;
(statearr_52549_52566[(2)] = inst_52530);

(statearr_52549_52566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52541 === (9))){
var state_52540__$1 = state_52540;
var statearr_52550_52567 = state_52540__$1;
(statearr_52550_52567[(2)] = null);

(statearr_52550_52567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52541 === (5))){
var inst_52525 = cljs.core.async.close_BANG_.call(null,out);
var state_52540__$1 = state_52540;
var statearr_52551_52568 = state_52540__$1;
(statearr_52551_52568[(2)] = inst_52525);

(statearr_52551_52568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52541 === (10))){
var inst_52533 = (state_52540[(2)]);
var state_52540__$1 = (function (){var statearr_52552 = state_52540;
(statearr_52552[(8)] = inst_52533);

return statearr_52552;
})();
var statearr_52553_52569 = state_52540__$1;
(statearr_52553_52569[(2)] = null);

(statearr_52553_52569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52541 === (8))){
var inst_52522 = (state_52540[(7)]);
var state_52540__$1 = state_52540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52540__$1,(11),out,inst_52522);
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
});})(c__51020__auto___52559,out))
;
return ((function (switch__50930__auto__,c__51020__auto___52559,out){
return (function() {
var cljs$core$async$state_machine__50931__auto__ = null;
var cljs$core$async$state_machine__50931__auto____0 = (function (){
var statearr_52554 = [null,null,null,null,null,null,null,null,null];
(statearr_52554[(0)] = cljs$core$async$state_machine__50931__auto__);

(statearr_52554[(1)] = (1));

return statearr_52554;
});
var cljs$core$async$state_machine__50931__auto____1 = (function (state_52540){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_52540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e52555){if((e52555 instanceof Object)){
var ex__50934__auto__ = e52555;
var statearr_52556_52570 = state_52540;
(statearr_52556_52570[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52571 = state_52540;
state_52540 = G__52571;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$state_machine__50931__auto__ = function(state_52540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50931__auto____1.call(this,state_52540);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50931__auto____0;
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50931__auto____1;
return cljs$core$async$state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___52559,out))
})();
var state__51022__auto__ = (function (){var statearr_52557 = f__51021__auto__.call(null);
(statearr_52557[(6)] = c__51020__auto___52559);

return statearr_52557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___52559,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52573 = arguments.length;
switch (G__52573) {
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
var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__){
return (function (state_52636){
var state_val_52637 = (state_52636[(1)]);
if((state_val_52637 === (7))){
var inst_52632 = (state_52636[(2)]);
var state_52636__$1 = state_52636;
var statearr_52638_52676 = state_52636__$1;
(statearr_52638_52676[(2)] = inst_52632);

(statearr_52638_52676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (20))){
var inst_52602 = (state_52636[(7)]);
var inst_52613 = (state_52636[(2)]);
var inst_52614 = cljs.core.next.call(null,inst_52602);
var inst_52588 = inst_52614;
var inst_52589 = null;
var inst_52590 = (0);
var inst_52591 = (0);
var state_52636__$1 = (function (){var statearr_52639 = state_52636;
(statearr_52639[(8)] = inst_52589);

(statearr_52639[(9)] = inst_52591);

(statearr_52639[(10)] = inst_52590);

(statearr_52639[(11)] = inst_52613);

(statearr_52639[(12)] = inst_52588);

return statearr_52639;
})();
var statearr_52640_52677 = state_52636__$1;
(statearr_52640_52677[(2)] = null);

(statearr_52640_52677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (1))){
var state_52636__$1 = state_52636;
var statearr_52641_52678 = state_52636__$1;
(statearr_52641_52678[(2)] = null);

(statearr_52641_52678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (4))){
var inst_52577 = (state_52636[(13)]);
var inst_52577__$1 = (state_52636[(2)]);
var inst_52578 = (inst_52577__$1 == null);
var state_52636__$1 = (function (){var statearr_52642 = state_52636;
(statearr_52642[(13)] = inst_52577__$1);

return statearr_52642;
})();
if(cljs.core.truth_(inst_52578)){
var statearr_52643_52679 = state_52636__$1;
(statearr_52643_52679[(1)] = (5));

} else {
var statearr_52644_52680 = state_52636__$1;
(statearr_52644_52680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (15))){
var state_52636__$1 = state_52636;
var statearr_52648_52681 = state_52636__$1;
(statearr_52648_52681[(2)] = null);

(statearr_52648_52681[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (21))){
var state_52636__$1 = state_52636;
var statearr_52649_52682 = state_52636__$1;
(statearr_52649_52682[(2)] = null);

(statearr_52649_52682[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (13))){
var inst_52589 = (state_52636[(8)]);
var inst_52591 = (state_52636[(9)]);
var inst_52590 = (state_52636[(10)]);
var inst_52588 = (state_52636[(12)]);
var inst_52598 = (state_52636[(2)]);
var inst_52599 = (inst_52591 + (1));
var tmp52645 = inst_52589;
var tmp52646 = inst_52590;
var tmp52647 = inst_52588;
var inst_52588__$1 = tmp52647;
var inst_52589__$1 = tmp52645;
var inst_52590__$1 = tmp52646;
var inst_52591__$1 = inst_52599;
var state_52636__$1 = (function (){var statearr_52650 = state_52636;
(statearr_52650[(8)] = inst_52589__$1);

(statearr_52650[(9)] = inst_52591__$1);

(statearr_52650[(14)] = inst_52598);

(statearr_52650[(10)] = inst_52590__$1);

(statearr_52650[(12)] = inst_52588__$1);

return statearr_52650;
})();
var statearr_52651_52683 = state_52636__$1;
(statearr_52651_52683[(2)] = null);

(statearr_52651_52683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (22))){
var state_52636__$1 = state_52636;
var statearr_52652_52684 = state_52636__$1;
(statearr_52652_52684[(2)] = null);

(statearr_52652_52684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (6))){
var inst_52577 = (state_52636[(13)]);
var inst_52586 = f.call(null,inst_52577);
var inst_52587 = cljs.core.seq.call(null,inst_52586);
var inst_52588 = inst_52587;
var inst_52589 = null;
var inst_52590 = (0);
var inst_52591 = (0);
var state_52636__$1 = (function (){var statearr_52653 = state_52636;
(statearr_52653[(8)] = inst_52589);

(statearr_52653[(9)] = inst_52591);

(statearr_52653[(10)] = inst_52590);

(statearr_52653[(12)] = inst_52588);

return statearr_52653;
})();
var statearr_52654_52685 = state_52636__$1;
(statearr_52654_52685[(2)] = null);

(statearr_52654_52685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (17))){
var inst_52602 = (state_52636[(7)]);
var inst_52606 = cljs.core.chunk_first.call(null,inst_52602);
var inst_52607 = cljs.core.chunk_rest.call(null,inst_52602);
var inst_52608 = cljs.core.count.call(null,inst_52606);
var inst_52588 = inst_52607;
var inst_52589 = inst_52606;
var inst_52590 = inst_52608;
var inst_52591 = (0);
var state_52636__$1 = (function (){var statearr_52655 = state_52636;
(statearr_52655[(8)] = inst_52589);

(statearr_52655[(9)] = inst_52591);

(statearr_52655[(10)] = inst_52590);

(statearr_52655[(12)] = inst_52588);

return statearr_52655;
})();
var statearr_52656_52686 = state_52636__$1;
(statearr_52656_52686[(2)] = null);

(statearr_52656_52686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (3))){
var inst_52634 = (state_52636[(2)]);
var state_52636__$1 = state_52636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52636__$1,inst_52634);
} else {
if((state_val_52637 === (12))){
var inst_52622 = (state_52636[(2)]);
var state_52636__$1 = state_52636;
var statearr_52657_52687 = state_52636__$1;
(statearr_52657_52687[(2)] = inst_52622);

(statearr_52657_52687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (2))){
var state_52636__$1 = state_52636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52636__$1,(4),in$);
} else {
if((state_val_52637 === (23))){
var inst_52630 = (state_52636[(2)]);
var state_52636__$1 = state_52636;
var statearr_52658_52688 = state_52636__$1;
(statearr_52658_52688[(2)] = inst_52630);

(statearr_52658_52688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (19))){
var inst_52617 = (state_52636[(2)]);
var state_52636__$1 = state_52636;
var statearr_52659_52689 = state_52636__$1;
(statearr_52659_52689[(2)] = inst_52617);

(statearr_52659_52689[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (11))){
var inst_52602 = (state_52636[(7)]);
var inst_52588 = (state_52636[(12)]);
var inst_52602__$1 = cljs.core.seq.call(null,inst_52588);
var state_52636__$1 = (function (){var statearr_52660 = state_52636;
(statearr_52660[(7)] = inst_52602__$1);

return statearr_52660;
})();
if(inst_52602__$1){
var statearr_52661_52690 = state_52636__$1;
(statearr_52661_52690[(1)] = (14));

} else {
var statearr_52662_52691 = state_52636__$1;
(statearr_52662_52691[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (9))){
var inst_52624 = (state_52636[(2)]);
var inst_52625 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_52636__$1 = (function (){var statearr_52663 = state_52636;
(statearr_52663[(15)] = inst_52624);

return statearr_52663;
})();
if(cljs.core.truth_(inst_52625)){
var statearr_52664_52692 = state_52636__$1;
(statearr_52664_52692[(1)] = (21));

} else {
var statearr_52665_52693 = state_52636__$1;
(statearr_52665_52693[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (5))){
var inst_52580 = cljs.core.async.close_BANG_.call(null,out);
var state_52636__$1 = state_52636;
var statearr_52666_52694 = state_52636__$1;
(statearr_52666_52694[(2)] = inst_52580);

(statearr_52666_52694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (14))){
var inst_52602 = (state_52636[(7)]);
var inst_52604 = cljs.core.chunked_seq_QMARK_.call(null,inst_52602);
var state_52636__$1 = state_52636;
if(inst_52604){
var statearr_52667_52695 = state_52636__$1;
(statearr_52667_52695[(1)] = (17));

} else {
var statearr_52668_52696 = state_52636__$1;
(statearr_52668_52696[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (16))){
var inst_52620 = (state_52636[(2)]);
var state_52636__$1 = state_52636;
var statearr_52669_52697 = state_52636__$1;
(statearr_52669_52697[(2)] = inst_52620);

(statearr_52669_52697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (10))){
var inst_52589 = (state_52636[(8)]);
var inst_52591 = (state_52636[(9)]);
var inst_52596 = cljs.core._nth.call(null,inst_52589,inst_52591);
var state_52636__$1 = state_52636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52636__$1,(13),out,inst_52596);
} else {
if((state_val_52637 === (18))){
var inst_52602 = (state_52636[(7)]);
var inst_52611 = cljs.core.first.call(null,inst_52602);
var state_52636__$1 = state_52636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52636__$1,(20),out,inst_52611);
} else {
if((state_val_52637 === (8))){
var inst_52591 = (state_52636[(9)]);
var inst_52590 = (state_52636[(10)]);
var inst_52593 = (inst_52591 < inst_52590);
var inst_52594 = inst_52593;
var state_52636__$1 = state_52636;
if(cljs.core.truth_(inst_52594)){
var statearr_52670_52698 = state_52636__$1;
(statearr_52670_52698[(1)] = (10));

} else {
var statearr_52671_52699 = state_52636__$1;
(statearr_52671_52699[(1)] = (11));

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
});})(c__51020__auto__))
;
return ((function (switch__50930__auto__,c__51020__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50931__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50931__auto____0 = (function (){
var statearr_52672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52672[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50931__auto__);

(statearr_52672[(1)] = (1));

return statearr_52672;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50931__auto____1 = (function (state_52636){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_52636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e52673){if((e52673 instanceof Object)){
var ex__50934__auto__ = e52673;
var statearr_52674_52700 = state_52636;
(statearr_52674_52700[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52701 = state_52636;
state_52636 = G__52701;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50931__auto__ = function(state_52636){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50931__auto____1.call(this,state_52636);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50931__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50931__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__))
})();
var state__51022__auto__ = (function (){var statearr_52675 = f__51021__auto__.call(null);
(statearr_52675[(6)] = c__51020__auto__);

return statearr_52675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__))
);

return c__51020__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52703 = arguments.length;
switch (G__52703) {
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
var G__52706 = arguments.length;
switch (G__52706) {
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
var G__52709 = arguments.length;
switch (G__52709) {
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
var c__51020__auto___52756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___52756,out){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___52756,out){
return (function (state_52733){
var state_val_52734 = (state_52733[(1)]);
if((state_val_52734 === (7))){
var inst_52728 = (state_52733[(2)]);
var state_52733__$1 = state_52733;
var statearr_52735_52757 = state_52733__$1;
(statearr_52735_52757[(2)] = inst_52728);

(statearr_52735_52757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52734 === (1))){
var inst_52710 = null;
var state_52733__$1 = (function (){var statearr_52736 = state_52733;
(statearr_52736[(7)] = inst_52710);

return statearr_52736;
})();
var statearr_52737_52758 = state_52733__$1;
(statearr_52737_52758[(2)] = null);

(statearr_52737_52758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52734 === (4))){
var inst_52713 = (state_52733[(8)]);
var inst_52713__$1 = (state_52733[(2)]);
var inst_52714 = (inst_52713__$1 == null);
var inst_52715 = cljs.core.not.call(null,inst_52714);
var state_52733__$1 = (function (){var statearr_52738 = state_52733;
(statearr_52738[(8)] = inst_52713__$1);

return statearr_52738;
})();
if(inst_52715){
var statearr_52739_52759 = state_52733__$1;
(statearr_52739_52759[(1)] = (5));

} else {
var statearr_52740_52760 = state_52733__$1;
(statearr_52740_52760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52734 === (6))){
var state_52733__$1 = state_52733;
var statearr_52741_52761 = state_52733__$1;
(statearr_52741_52761[(2)] = null);

(statearr_52741_52761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52734 === (3))){
var inst_52730 = (state_52733[(2)]);
var inst_52731 = cljs.core.async.close_BANG_.call(null,out);
var state_52733__$1 = (function (){var statearr_52742 = state_52733;
(statearr_52742[(9)] = inst_52730);

return statearr_52742;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52733__$1,inst_52731);
} else {
if((state_val_52734 === (2))){
var state_52733__$1 = state_52733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52733__$1,(4),ch);
} else {
if((state_val_52734 === (11))){
var inst_52713 = (state_52733[(8)]);
var inst_52722 = (state_52733[(2)]);
var inst_52710 = inst_52713;
var state_52733__$1 = (function (){var statearr_52743 = state_52733;
(statearr_52743[(10)] = inst_52722);

(statearr_52743[(7)] = inst_52710);

return statearr_52743;
})();
var statearr_52744_52762 = state_52733__$1;
(statearr_52744_52762[(2)] = null);

(statearr_52744_52762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52734 === (9))){
var inst_52713 = (state_52733[(8)]);
var state_52733__$1 = state_52733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52733__$1,(11),out,inst_52713);
} else {
if((state_val_52734 === (5))){
var inst_52713 = (state_52733[(8)]);
var inst_52710 = (state_52733[(7)]);
var inst_52717 = cljs.core._EQ_.call(null,inst_52713,inst_52710);
var state_52733__$1 = state_52733;
if(inst_52717){
var statearr_52746_52763 = state_52733__$1;
(statearr_52746_52763[(1)] = (8));

} else {
var statearr_52747_52764 = state_52733__$1;
(statearr_52747_52764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52734 === (10))){
var inst_52725 = (state_52733[(2)]);
var state_52733__$1 = state_52733;
var statearr_52748_52765 = state_52733__$1;
(statearr_52748_52765[(2)] = inst_52725);

(statearr_52748_52765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52734 === (8))){
var inst_52710 = (state_52733[(7)]);
var tmp52745 = inst_52710;
var inst_52710__$1 = tmp52745;
var state_52733__$1 = (function (){var statearr_52749 = state_52733;
(statearr_52749[(7)] = inst_52710__$1);

return statearr_52749;
})();
var statearr_52750_52766 = state_52733__$1;
(statearr_52750_52766[(2)] = null);

(statearr_52750_52766[(1)] = (2));


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
});})(c__51020__auto___52756,out))
;
return ((function (switch__50930__auto__,c__51020__auto___52756,out){
return (function() {
var cljs$core$async$state_machine__50931__auto__ = null;
var cljs$core$async$state_machine__50931__auto____0 = (function (){
var statearr_52751 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52751[(0)] = cljs$core$async$state_machine__50931__auto__);

(statearr_52751[(1)] = (1));

return statearr_52751;
});
var cljs$core$async$state_machine__50931__auto____1 = (function (state_52733){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_52733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e52752){if((e52752 instanceof Object)){
var ex__50934__auto__ = e52752;
var statearr_52753_52767 = state_52733;
(statearr_52753_52767[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52768 = state_52733;
state_52733 = G__52768;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$state_machine__50931__auto__ = function(state_52733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50931__auto____1.call(this,state_52733);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50931__auto____0;
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50931__auto____1;
return cljs$core$async$state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___52756,out))
})();
var state__51022__auto__ = (function (){var statearr_52754 = f__51021__auto__.call(null);
(statearr_52754[(6)] = c__51020__auto___52756);

return statearr_52754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___52756,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52770 = arguments.length;
switch (G__52770) {
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
var c__51020__auto___52836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___52836,out){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___52836,out){
return (function (state_52808){
var state_val_52809 = (state_52808[(1)]);
if((state_val_52809 === (7))){
var inst_52804 = (state_52808[(2)]);
var state_52808__$1 = state_52808;
var statearr_52810_52837 = state_52808__$1;
(statearr_52810_52837[(2)] = inst_52804);

(statearr_52810_52837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (1))){
var inst_52771 = (new Array(n));
var inst_52772 = inst_52771;
var inst_52773 = (0);
var state_52808__$1 = (function (){var statearr_52811 = state_52808;
(statearr_52811[(7)] = inst_52772);

(statearr_52811[(8)] = inst_52773);

return statearr_52811;
})();
var statearr_52812_52838 = state_52808__$1;
(statearr_52812_52838[(2)] = null);

(statearr_52812_52838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (4))){
var inst_52776 = (state_52808[(9)]);
var inst_52776__$1 = (state_52808[(2)]);
var inst_52777 = (inst_52776__$1 == null);
var inst_52778 = cljs.core.not.call(null,inst_52777);
var state_52808__$1 = (function (){var statearr_52813 = state_52808;
(statearr_52813[(9)] = inst_52776__$1);

return statearr_52813;
})();
if(inst_52778){
var statearr_52814_52839 = state_52808__$1;
(statearr_52814_52839[(1)] = (5));

} else {
var statearr_52815_52840 = state_52808__$1;
(statearr_52815_52840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (15))){
var inst_52798 = (state_52808[(2)]);
var state_52808__$1 = state_52808;
var statearr_52816_52841 = state_52808__$1;
(statearr_52816_52841[(2)] = inst_52798);

(statearr_52816_52841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (13))){
var state_52808__$1 = state_52808;
var statearr_52817_52842 = state_52808__$1;
(statearr_52817_52842[(2)] = null);

(statearr_52817_52842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (6))){
var inst_52773 = (state_52808[(8)]);
var inst_52794 = (inst_52773 > (0));
var state_52808__$1 = state_52808;
if(cljs.core.truth_(inst_52794)){
var statearr_52818_52843 = state_52808__$1;
(statearr_52818_52843[(1)] = (12));

} else {
var statearr_52819_52844 = state_52808__$1;
(statearr_52819_52844[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (3))){
var inst_52806 = (state_52808[(2)]);
var state_52808__$1 = state_52808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52808__$1,inst_52806);
} else {
if((state_val_52809 === (12))){
var inst_52772 = (state_52808[(7)]);
var inst_52796 = cljs.core.vec.call(null,inst_52772);
var state_52808__$1 = state_52808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52808__$1,(15),out,inst_52796);
} else {
if((state_val_52809 === (2))){
var state_52808__$1 = state_52808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52808__$1,(4),ch);
} else {
if((state_val_52809 === (11))){
var inst_52788 = (state_52808[(2)]);
var inst_52789 = (new Array(n));
var inst_52772 = inst_52789;
var inst_52773 = (0);
var state_52808__$1 = (function (){var statearr_52820 = state_52808;
(statearr_52820[(7)] = inst_52772);

(statearr_52820[(8)] = inst_52773);

(statearr_52820[(10)] = inst_52788);

return statearr_52820;
})();
var statearr_52821_52845 = state_52808__$1;
(statearr_52821_52845[(2)] = null);

(statearr_52821_52845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (9))){
var inst_52772 = (state_52808[(7)]);
var inst_52786 = cljs.core.vec.call(null,inst_52772);
var state_52808__$1 = state_52808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52808__$1,(11),out,inst_52786);
} else {
if((state_val_52809 === (5))){
var inst_52772 = (state_52808[(7)]);
var inst_52776 = (state_52808[(9)]);
var inst_52781 = (state_52808[(11)]);
var inst_52773 = (state_52808[(8)]);
var inst_52780 = (inst_52772[inst_52773] = inst_52776);
var inst_52781__$1 = (inst_52773 + (1));
var inst_52782 = (inst_52781__$1 < n);
var state_52808__$1 = (function (){var statearr_52822 = state_52808;
(statearr_52822[(11)] = inst_52781__$1);

(statearr_52822[(12)] = inst_52780);

return statearr_52822;
})();
if(cljs.core.truth_(inst_52782)){
var statearr_52823_52846 = state_52808__$1;
(statearr_52823_52846[(1)] = (8));

} else {
var statearr_52824_52847 = state_52808__$1;
(statearr_52824_52847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (14))){
var inst_52801 = (state_52808[(2)]);
var inst_52802 = cljs.core.async.close_BANG_.call(null,out);
var state_52808__$1 = (function (){var statearr_52826 = state_52808;
(statearr_52826[(13)] = inst_52801);

return statearr_52826;
})();
var statearr_52827_52848 = state_52808__$1;
(statearr_52827_52848[(2)] = inst_52802);

(statearr_52827_52848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (10))){
var inst_52792 = (state_52808[(2)]);
var state_52808__$1 = state_52808;
var statearr_52828_52849 = state_52808__$1;
(statearr_52828_52849[(2)] = inst_52792);

(statearr_52828_52849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (8))){
var inst_52772 = (state_52808[(7)]);
var inst_52781 = (state_52808[(11)]);
var tmp52825 = inst_52772;
var inst_52772__$1 = tmp52825;
var inst_52773 = inst_52781;
var state_52808__$1 = (function (){var statearr_52829 = state_52808;
(statearr_52829[(7)] = inst_52772__$1);

(statearr_52829[(8)] = inst_52773);

return statearr_52829;
})();
var statearr_52830_52850 = state_52808__$1;
(statearr_52830_52850[(2)] = null);

(statearr_52830_52850[(1)] = (2));


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
});})(c__51020__auto___52836,out))
;
return ((function (switch__50930__auto__,c__51020__auto___52836,out){
return (function() {
var cljs$core$async$state_machine__50931__auto__ = null;
var cljs$core$async$state_machine__50931__auto____0 = (function (){
var statearr_52831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52831[(0)] = cljs$core$async$state_machine__50931__auto__);

(statearr_52831[(1)] = (1));

return statearr_52831;
});
var cljs$core$async$state_machine__50931__auto____1 = (function (state_52808){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_52808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e52832){if((e52832 instanceof Object)){
var ex__50934__auto__ = e52832;
var statearr_52833_52851 = state_52808;
(statearr_52833_52851[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52852 = state_52808;
state_52808 = G__52852;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$state_machine__50931__auto__ = function(state_52808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50931__auto____1.call(this,state_52808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50931__auto____0;
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50931__auto____1;
return cljs$core$async$state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___52836,out))
})();
var state__51022__auto__ = (function (){var statearr_52834 = f__51021__auto__.call(null);
(statearr_52834[(6)] = c__51020__auto___52836);

return statearr_52834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___52836,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52854 = arguments.length;
switch (G__52854) {
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
var c__51020__auto___52924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___52924,out){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___52924,out){
return (function (state_52896){
var state_val_52897 = (state_52896[(1)]);
if((state_val_52897 === (7))){
var inst_52892 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
var statearr_52898_52925 = state_52896__$1;
(statearr_52898_52925[(2)] = inst_52892);

(statearr_52898_52925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (1))){
var inst_52855 = [];
var inst_52856 = inst_52855;
var inst_52857 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52896__$1 = (function (){var statearr_52899 = state_52896;
(statearr_52899[(7)] = inst_52857);

(statearr_52899[(8)] = inst_52856);

return statearr_52899;
})();
var statearr_52900_52926 = state_52896__$1;
(statearr_52900_52926[(2)] = null);

(statearr_52900_52926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (4))){
var inst_52860 = (state_52896[(9)]);
var inst_52860__$1 = (state_52896[(2)]);
var inst_52861 = (inst_52860__$1 == null);
var inst_52862 = cljs.core.not.call(null,inst_52861);
var state_52896__$1 = (function (){var statearr_52901 = state_52896;
(statearr_52901[(9)] = inst_52860__$1);

return statearr_52901;
})();
if(inst_52862){
var statearr_52902_52927 = state_52896__$1;
(statearr_52902_52927[(1)] = (5));

} else {
var statearr_52903_52928 = state_52896__$1;
(statearr_52903_52928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (15))){
var inst_52886 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
var statearr_52904_52929 = state_52896__$1;
(statearr_52904_52929[(2)] = inst_52886);

(statearr_52904_52929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (13))){
var state_52896__$1 = state_52896;
var statearr_52905_52930 = state_52896__$1;
(statearr_52905_52930[(2)] = null);

(statearr_52905_52930[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (6))){
var inst_52856 = (state_52896[(8)]);
var inst_52881 = inst_52856.length;
var inst_52882 = (inst_52881 > (0));
var state_52896__$1 = state_52896;
if(cljs.core.truth_(inst_52882)){
var statearr_52906_52931 = state_52896__$1;
(statearr_52906_52931[(1)] = (12));

} else {
var statearr_52907_52932 = state_52896__$1;
(statearr_52907_52932[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (3))){
var inst_52894 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52896__$1,inst_52894);
} else {
if((state_val_52897 === (12))){
var inst_52856 = (state_52896[(8)]);
var inst_52884 = cljs.core.vec.call(null,inst_52856);
var state_52896__$1 = state_52896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52896__$1,(15),out,inst_52884);
} else {
if((state_val_52897 === (2))){
var state_52896__$1 = state_52896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52896__$1,(4),ch);
} else {
if((state_val_52897 === (11))){
var inst_52860 = (state_52896[(9)]);
var inst_52864 = (state_52896[(10)]);
var inst_52874 = (state_52896[(2)]);
var inst_52875 = [];
var inst_52876 = inst_52875.push(inst_52860);
var inst_52856 = inst_52875;
var inst_52857 = inst_52864;
var state_52896__$1 = (function (){var statearr_52908 = state_52896;
(statearr_52908[(7)] = inst_52857);

(statearr_52908[(11)] = inst_52876);

(statearr_52908[(12)] = inst_52874);

(statearr_52908[(8)] = inst_52856);

return statearr_52908;
})();
var statearr_52909_52933 = state_52896__$1;
(statearr_52909_52933[(2)] = null);

(statearr_52909_52933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (9))){
var inst_52856 = (state_52896[(8)]);
var inst_52872 = cljs.core.vec.call(null,inst_52856);
var state_52896__$1 = state_52896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52896__$1,(11),out,inst_52872);
} else {
if((state_val_52897 === (5))){
var inst_52857 = (state_52896[(7)]);
var inst_52860 = (state_52896[(9)]);
var inst_52864 = (state_52896[(10)]);
var inst_52864__$1 = f.call(null,inst_52860);
var inst_52865 = cljs.core._EQ_.call(null,inst_52864__$1,inst_52857);
var inst_52866 = cljs.core.keyword_identical_QMARK_.call(null,inst_52857,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_52867 = (inst_52865) || (inst_52866);
var state_52896__$1 = (function (){var statearr_52910 = state_52896;
(statearr_52910[(10)] = inst_52864__$1);

return statearr_52910;
})();
if(cljs.core.truth_(inst_52867)){
var statearr_52911_52934 = state_52896__$1;
(statearr_52911_52934[(1)] = (8));

} else {
var statearr_52912_52935 = state_52896__$1;
(statearr_52912_52935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (14))){
var inst_52889 = (state_52896[(2)]);
var inst_52890 = cljs.core.async.close_BANG_.call(null,out);
var state_52896__$1 = (function (){var statearr_52914 = state_52896;
(statearr_52914[(13)] = inst_52889);

return statearr_52914;
})();
var statearr_52915_52936 = state_52896__$1;
(statearr_52915_52936[(2)] = inst_52890);

(statearr_52915_52936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (10))){
var inst_52879 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
var statearr_52916_52937 = state_52896__$1;
(statearr_52916_52937[(2)] = inst_52879);

(statearr_52916_52937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (8))){
var inst_52856 = (state_52896[(8)]);
var inst_52860 = (state_52896[(9)]);
var inst_52864 = (state_52896[(10)]);
var inst_52869 = inst_52856.push(inst_52860);
var tmp52913 = inst_52856;
var inst_52856__$1 = tmp52913;
var inst_52857 = inst_52864;
var state_52896__$1 = (function (){var statearr_52917 = state_52896;
(statearr_52917[(7)] = inst_52857);

(statearr_52917[(8)] = inst_52856__$1);

(statearr_52917[(14)] = inst_52869);

return statearr_52917;
})();
var statearr_52918_52938 = state_52896__$1;
(statearr_52918_52938[(2)] = null);

(statearr_52918_52938[(1)] = (2));


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
});})(c__51020__auto___52924,out))
;
return ((function (switch__50930__auto__,c__51020__auto___52924,out){
return (function() {
var cljs$core$async$state_machine__50931__auto__ = null;
var cljs$core$async$state_machine__50931__auto____0 = (function (){
var statearr_52919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52919[(0)] = cljs$core$async$state_machine__50931__auto__);

(statearr_52919[(1)] = (1));

return statearr_52919;
});
var cljs$core$async$state_machine__50931__auto____1 = (function (state_52896){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_52896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e52920){if((e52920 instanceof Object)){
var ex__50934__auto__ = e52920;
var statearr_52921_52939 = state_52896;
(statearr_52921_52939[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52940 = state_52896;
state_52896 = G__52940;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
cljs$core$async$state_machine__50931__auto__ = function(state_52896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50931__auto____1.call(this,state_52896);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50931__auto____0;
cljs$core$async$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50931__auto____1;
return cljs$core$async$state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___52924,out))
})();
var state__51022__auto__ = (function (){var statearr_52922 = f__51021__auto__.call(null);
(statearr_52922[(6)] = c__51020__auto___52924);

return statearr_52922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___52924,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1507056182494
