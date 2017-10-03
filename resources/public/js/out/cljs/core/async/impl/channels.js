// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41230 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41230 = (function (val,meta41231){
this.val = val;
this.meta41231 = meta41231;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41232,meta41231__$1){
var self__ = this;
var _41232__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41230(self__.val,meta41231__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41232){
var self__ = this;
var _41232__$1 = this;
return self__.meta41231;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41230.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta41231","meta41231",427975572,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41230.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41230.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels41230";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41230.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels41230");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels41230 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels41230(val__$1,meta41231){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41230(val__$1,meta41231));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels41230(val,cljs.core.PersistentArrayMap.EMPTY));
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
var putter_41244 = self__.puts.pop();
if((putter_41244 == null)){
} else {
var put_handler_41245 = putter_41244.handler;
var val_41246 = putter_41244.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_41245)){
var put_cb_41247 = cljs.core.async.impl.protocols.commit.call(null,put_handler_41245);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_41247,put_handler_41245,val_41246,putter_41244,this$__$1){
return (function (){
return put_cb_41247.call(null,true);
});})(put_cb_41247,put_handler_41245,val_41246,putter_41244,this$__$1))
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
var G__41248 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__41248;
continue;
} else {
var G__41249 = takers;
takers = G__41249;
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
var seq__41233_41250 = cljs.core.seq.call(null,take_cbs);
var chunk__41234_41251 = null;
var count__41235_41252 = (0);
var i__41236_41253 = (0);
while(true){
if((i__41236_41253 < count__41235_41252)){
var f_41254 = cljs.core._nth.call(null,chunk__41234_41251,i__41236_41253);
cljs.core.async.impl.dispatch.run.call(null,f_41254);

var G__41255 = seq__41233_41250;
var G__41256 = chunk__41234_41251;
var G__41257 = count__41235_41252;
var G__41258 = (i__41236_41253 + (1));
seq__41233_41250 = G__41255;
chunk__41234_41251 = G__41256;
count__41235_41252 = G__41257;
i__41236_41253 = G__41258;
continue;
} else {
var temp__5290__auto___41259 = cljs.core.seq.call(null,seq__41233_41250);
if(temp__5290__auto___41259){
var seq__41233_41260__$1 = temp__5290__auto___41259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41233_41260__$1)){
var c__31180__auto___41261 = cljs.core.chunk_first.call(null,seq__41233_41260__$1);
var G__41262 = cljs.core.chunk_rest.call(null,seq__41233_41260__$1);
var G__41263 = c__31180__auto___41261;
var G__41264 = cljs.core.count.call(null,c__31180__auto___41261);
var G__41265 = (0);
seq__41233_41250 = G__41262;
chunk__41234_41251 = G__41263;
count__41235_41252 = G__41264;
i__41236_41253 = G__41265;
continue;
} else {
var f_41266 = cljs.core.first.call(null,seq__41233_41260__$1);
cljs.core.async.impl.dispatch.run.call(null,f_41266);

var G__41267 = cljs.core.next.call(null,seq__41233_41260__$1);
var G__41268 = null;
var G__41269 = (0);
var G__41270 = (0);
seq__41233_41250 = G__41267;
chunk__41234_41251 = G__41268;
count__41235_41252 = G__41269;
i__41236_41253 = G__41270;
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
var vec__41237 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
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
var G__41271 = cbs__$1;
cbs = G__41271;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__41237,(0),null);
var cbs = cljs.core.nth.call(null,vec__41237,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__41240_41272 = cljs.core.seq.call(null,cbs);
var chunk__41241_41273 = null;
var count__41242_41274 = (0);
var i__41243_41275 = (0);
while(true){
if((i__41243_41275 < count__41242_41274)){
var cb_41276 = cljs.core._nth.call(null,chunk__41241_41273,i__41243_41275);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__41240_41272,chunk__41241_41273,count__41242_41274,i__41243_41275,cb_41276,val,vec__41237,done_QMARK_,cbs,take_cb,temp__5288__auto__,this$__$1){
return (function (){
return cb_41276.call(null,true);
});})(seq__41240_41272,chunk__41241_41273,count__41242_41274,i__41243_41275,cb_41276,val,vec__41237,done_QMARK_,cbs,take_cb,temp__5288__auto__,this$__$1))
);

var G__41277 = seq__41240_41272;
var G__41278 = chunk__41241_41273;
var G__41279 = count__41242_41274;
var G__41280 = (i__41243_41275 + (1));
seq__41240_41272 = G__41277;
chunk__41241_41273 = G__41278;
count__41242_41274 = G__41279;
i__41243_41275 = G__41280;
continue;
} else {
var temp__5290__auto___41281 = cljs.core.seq.call(null,seq__41240_41272);
if(temp__5290__auto___41281){
var seq__41240_41282__$1 = temp__5290__auto___41281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41240_41282__$1)){
var c__31180__auto___41283 = cljs.core.chunk_first.call(null,seq__41240_41282__$1);
var G__41284 = cljs.core.chunk_rest.call(null,seq__41240_41282__$1);
var G__41285 = c__31180__auto___41283;
var G__41286 = cljs.core.count.call(null,c__31180__auto___41283);
var G__41287 = (0);
seq__41240_41272 = G__41284;
chunk__41241_41273 = G__41285;
count__41242_41274 = G__41286;
i__41243_41275 = G__41287;
continue;
} else {
var cb_41288 = cljs.core.first.call(null,seq__41240_41282__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__41240_41272,chunk__41241_41273,count__41242_41274,i__41243_41275,cb_41288,seq__41240_41282__$1,temp__5290__auto___41281,val,vec__41237,done_QMARK_,cbs,take_cb,temp__5288__auto__,this$__$1){
return (function (){
return cb_41288.call(null,true);
});})(seq__41240_41272,chunk__41241_41273,count__41242_41274,i__41243_41275,cb_41288,seq__41240_41282__$1,temp__5290__auto___41281,val,vec__41237,done_QMARK_,cbs,take_cb,temp__5288__auto__,this$__$1))
);

var G__41289 = cljs.core.next.call(null,seq__41240_41282__$1);
var G__41290 = null;
var G__41291 = (0);
var G__41292 = (0);
seq__41240_41272 = G__41289;
chunk__41241_41273 = G__41290;
count__41242_41274 = G__41291;
i__41243_41275 = G__41292;
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
var taker_41293 = self__.takes.pop();
if((taker_41293 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_41293)){
var take_cb_41294 = cljs.core.async.impl.protocols.commit.call(null,taker_41293);
var val_41295 = (cljs.core.truth_((function (){var and__30237__auto__ = self__.buf;
if(cljs.core.truth_(and__30237__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__30237__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_41294,val_41295,taker_41293,this$__$1){
return (function (){
return take_cb_41294.call(null,val_41295);
});})(take_cb_41294,val_41295,taker_41293,this$__$1))
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
var G__41297 = arguments.length;
switch (G__41297) {
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
var G__41301 = null;
var G__41301__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e41298){var t = e41298;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__41301__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e41299){var t = e41299;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__41301 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__41301__1.call(this,buf__$1);
case 2:
return G__41301__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__41301.cljs$core$IFn$_invoke$arity$1 = G__41301__1;
G__41301.cljs$core$IFn$_invoke$arity$2 = G__41301__2;
return G__41301;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1507056175374
