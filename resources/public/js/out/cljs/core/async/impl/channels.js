// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41943 = (function (val,meta41944){
this.val = val;
this.meta41944 = meta41944;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41945,meta41944__$1){
var self__ = this;
var _41945__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41943(self__.val,meta41944__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41945){
var self__ = this;
var _41945__$1 = this;
return self__.meta41944;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41943.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta41944","meta41944",1345620729,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41943.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41943.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels41943";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41943.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels41943");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels41943 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels41943(val__$1,meta41944){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41943(val__$1,meta41944));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41943(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__30982__auto__ = (((this$ == null))?null:this$);
var m__30983__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,this$);
} else {
var m__30983__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_41957 = self__.puts.pop();
if((putter_41957 == null)){
} else {
var put_handler_41958 = putter_41957.handler;
var val_41959 = putter_41957.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_41958)){
var put_cb_41960 = cljs.core.async.impl.protocols.commit.call(null,put_handler_41958);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_41960,put_handler_41958,val_41959,putter_41957,this$__$1){
return (function (){
return put_cb_41960.call(null,true);
});})(put_cb_41960,put_handler_41958,val_41959,putter_41957,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__30237__auto__ = self__.buf;
if(cljs.core.truth_(and__30237__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__30237__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__41961 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__41961;
continue;
} else {
var G__41962 = takers;
takers = G__41962;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__41946_41963 = cljs.core.seq.call(null,take_cbs);
var chunk__41947_41964 = null;
var count__41948_41965 = (0);
var i__41949_41966 = (0);
while(true){
if((i__41949_41966 < count__41948_41965)){
var f_41967 = cljs.core._nth.call(null,chunk__41947_41964,i__41949_41966);
cljs.core.async.impl.dispatch.run.call(null,f_41967);

var G__41968 = seq__41946_41963;
var G__41969 = chunk__41947_41964;
var G__41970 = count__41948_41965;
var G__41971 = (i__41949_41966 + (1));
seq__41946_41963 = G__41968;
chunk__41947_41964 = G__41969;
count__41948_41965 = G__41970;
i__41949_41966 = G__41971;
continue;
} else {
var temp__5290__auto___41972 = cljs.core.seq.call(null,seq__41946_41963);
if(temp__5290__auto___41972){
var seq__41946_41973__$1 = temp__5290__auto___41972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41946_41973__$1)){
var c__31180__auto___41974 = cljs.core.chunk_first.call(null,seq__41946_41973__$1);
var G__41975 = cljs.core.chunk_rest.call(null,seq__41946_41973__$1);
var G__41976 = c__31180__auto___41974;
var G__41977 = cljs.core.count.call(null,c__31180__auto___41974);
var G__41978 = (0);
seq__41946_41963 = G__41975;
chunk__41947_41964 = G__41976;
count__41948_41965 = G__41977;
i__41949_41966 = G__41978;
continue;
} else {
var f_41979 = cljs.core.first.call(null,seq__41946_41973__$1);
cljs.core.async.impl.dispatch.run.call(null,f_41979);

var G__41980 = cljs.core.next.call(null,seq__41946_41973__$1);
var G__41981 = null;
var G__41982 = (0);
var G__41983 = (0);
seq__41946_41963 = G__41980;
chunk__41947_41964 = G__41981;
count__41948_41965 = G__41982;
i__41949_41966 = G__41983;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__5288__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5288__auto__)){
var take_cb = temp__5288__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__41950 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__30237__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__30237__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__30237__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__41984 = cbs__$1;
cbs = G__41984;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__41950,(0),null);
var cbs = cljs.core.nth.call(null,vec__41950,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__41953_41985 = cljs.core.seq.call(null,cbs);
var chunk__41954_41986 = null;
var count__41955_41987 = (0);
var i__41956_41988 = (0);
while(true){
if((i__41956_41988 < count__41955_41987)){
var cb_41989 = cljs.core._nth.call(null,chunk__41954_41986,i__41956_41988);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__41953_41985,chunk__41954_41986,count__41955_41987,i__41956_41988,cb_41989,val,vec__41950,done_QMARK_,cbs,take_cb,temp__5288__auto__,this$__$1){
return (function (){
return cb_41989.call(null,true);
});})(seq__41953_41985,chunk__41954_41986,count__41955_41987,i__41956_41988,cb_41989,val,vec__41950,done_QMARK_,cbs,take_cb,temp__5288__auto__,this$__$1))
);

var G__41990 = seq__41953_41985;
var G__41991 = chunk__41954_41986;
var G__41992 = count__41955_41987;
var G__41993 = (i__41956_41988 + (1));
seq__41953_41985 = G__41990;
chunk__41954_41986 = G__41991;
count__41955_41987 = G__41992;
i__41956_41988 = G__41993;
continue;
} else {
var temp__5290__auto___41994 = cljs.core.seq.call(null,seq__41953_41985);
if(temp__5290__auto___41994){
var seq__41953_41995__$1 = temp__5290__auto___41994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41953_41995__$1)){
var c__31180__auto___41996 = cljs.core.chunk_first.call(null,seq__41953_41995__$1);
var G__41997 = cljs.core.chunk_rest.call(null,seq__41953_41995__$1);
var G__41998 = c__31180__auto___41996;
var G__41999 = cljs.core.count.call(null,c__31180__auto___41996);
var G__42000 = (0);
seq__41953_41985 = G__41997;
chunk__41954_41986 = G__41998;
count__41955_41987 = G__41999;
i__41956_41988 = G__42000;
continue;
} else {
var cb_42001 = cljs.core.first.call(null,seq__41953_41995__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__41953_41985,chunk__41954_41986,count__41955_41987,i__41956_41988,cb_42001,seq__41953_41995__$1,temp__5290__auto___41994,val,vec__41950,done_QMARK_,cbs,take_cb,temp__5288__auto__,this$__$1){
return (function (){
return cb_42001.call(null,true);
});})(seq__41953_41985,chunk__41954_41986,count__41955_41987,i__41956_41988,cb_42001,seq__41953_41995__$1,temp__5290__auto___41994,val,vec__41950,done_QMARK_,cbs,take_cb,temp__5288__auto__,this$__$1))
);

var G__42002 = cljs.core.next.call(null,seq__41953_41995__$1);
var G__42003 = null;
var G__42004 = (0);
var G__42005 = (0);
seq__41953_41985 = G__42002;
chunk__41954_41986 = G__42003;
count__41955_41987 = G__42004;
i__41956_41988 = G__42005;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__30237__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__30237__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__30237__auto__;
}
})())){
var has_val = (function (){var and__30237__auto__ = self__.buf;
if(cljs.core.truth_(and__30237__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__30237__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__30237__auto__ = self__.buf;
if(cljs.core.truth_(and__30237__auto__)){
return (self__.puts.length === (0));
} else {
return and__30237__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_42006 = self__.takes.pop();
if((taker_42006 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_42006)){
var take_cb_42007 = cljs.core.async.impl.protocols.commit.call(null,taker_42006);
var val_42008 = (cljs.core.truth_((function (){var and__30237__auto__ = self__.buf;
if(cljs.core.truth_(and__30237__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__30237__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_42007,val_42008,taker_42006,this$__$1){
return (function (){
return take_cb_42007.call(null,val_42008);
});})(take_cb_42007,val_42008,taker_42006,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__30249__auto__ = exh;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__42010 = arguments.length;
switch (G__42010) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__42014 = null;
var G__42014__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e42011){var t = e42011;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__42014__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e42012){var t = e42012;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__42014 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__42014__1.call(this,buf__$1);
case 2:
return G__42014__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__42014.cljs$core$IFn$_invoke$arity$1 = G__42014__1;
G__42014.cljs$core$IFn$_invoke$arity$2 = G__42014__2;
return G__42014;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1509397945611
