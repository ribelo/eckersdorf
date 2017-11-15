// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__34942 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34943 = null;
var count__34944 = (0);
var i__34945 = (0);
while(true){
if((i__34945 < count__34944)){
var vec__34946 = cljs.core._nth.call(null,chunk__34943,i__34945);
var effect_key = cljs.core.nth.call(null,vec__34946,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34946,(1),null);
var temp__5455__auto___34952 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___34952)){
var effect_fn_34953 = temp__5455__auto___34952;
effect_fn_34953.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__34954 = seq__34942;
var G__34955 = chunk__34943;
var G__34956 = count__34944;
var G__34957 = (i__34945 + (1));
seq__34942 = G__34954;
chunk__34943 = G__34955;
count__34944 = G__34956;
i__34945 = G__34957;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34942);
if(temp__5457__auto__){
var seq__34942__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34942__$1)){
var c__31454__auto__ = cljs.core.chunk_first.call(null,seq__34942__$1);
var G__34958 = cljs.core.chunk_rest.call(null,seq__34942__$1);
var G__34959 = c__31454__auto__;
var G__34960 = cljs.core.count.call(null,c__31454__auto__);
var G__34961 = (0);
seq__34942 = G__34958;
chunk__34943 = G__34959;
count__34944 = G__34960;
i__34945 = G__34961;
continue;
} else {
var vec__34949 = cljs.core.first.call(null,seq__34942__$1);
var effect_key = cljs.core.nth.call(null,vec__34949,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34949,(1),null);
var temp__5455__auto___34962 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___34962)){
var effect_fn_34963 = temp__5455__auto___34962;
effect_fn_34963.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__34964 = cljs.core.next.call(null,seq__34942__$1);
var G__34965 = null;
var G__34966 = (0);
var G__34967 = (0);
seq__34942 = G__34964;
chunk__34943 = G__34965;
count__34944 = G__34966;
i__34945 = G__34967;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__34968 = cljs.core.seq.call(null,value);
var chunk__34969 = null;
var count__34970 = (0);
var i__34971 = (0);
while(true){
if((i__34971 < count__34970)){
var map__34972 = cljs.core._nth.call(null,chunk__34969,i__34971);
var map__34972__$1 = ((((!((map__34972 == null)))?((((map__34972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34972):map__34972);
var effect = map__34972__$1;
var ms = cljs.core.get.call(null,map__34972__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34972__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34968,chunk__34969,count__34970,i__34971,map__34972,map__34972__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34968,chunk__34969,count__34970,i__34971,map__34972,map__34972__$1,effect,ms,dispatch))
,ms);
}

var G__34976 = seq__34968;
var G__34977 = chunk__34969;
var G__34978 = count__34970;
var G__34979 = (i__34971 + (1));
seq__34968 = G__34976;
chunk__34969 = G__34977;
count__34970 = G__34978;
i__34971 = G__34979;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34968);
if(temp__5457__auto__){
var seq__34968__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34968__$1)){
var c__31454__auto__ = cljs.core.chunk_first.call(null,seq__34968__$1);
var G__34980 = cljs.core.chunk_rest.call(null,seq__34968__$1);
var G__34981 = c__31454__auto__;
var G__34982 = cljs.core.count.call(null,c__31454__auto__);
var G__34983 = (0);
seq__34968 = G__34980;
chunk__34969 = G__34981;
count__34970 = G__34982;
i__34971 = G__34983;
continue;
} else {
var map__34974 = cljs.core.first.call(null,seq__34968__$1);
var map__34974__$1 = ((((!((map__34974 == null)))?((((map__34974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34974):map__34974);
var effect = map__34974__$1;
var ms = cljs.core.get.call(null,map__34974__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34974__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34968,chunk__34969,count__34970,i__34971,map__34974,map__34974__$1,effect,ms,dispatch,seq__34968__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34968,chunk__34969,count__34970,i__34971,map__34974,map__34974__$1,effect,ms,dispatch,seq__34968__$1,temp__5457__auto__))
,ms);
}

var G__34984 = cljs.core.next.call(null,seq__34968__$1);
var G__34985 = null;
var G__34986 = (0);
var G__34987 = (0);
seq__34968 = G__34984;
chunk__34969 = G__34985;
count__34970 = G__34986;
i__34971 = G__34987;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__34988 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__34989 = null;
var count__34990 = (0);
var i__34991 = (0);
while(true){
if((i__34991 < count__34990)){
var event = cljs.core._nth.call(null,chunk__34989,i__34991);
re_frame.router.dispatch.call(null,event);

var G__34992 = seq__34988;
var G__34993 = chunk__34989;
var G__34994 = count__34990;
var G__34995 = (i__34991 + (1));
seq__34988 = G__34992;
chunk__34989 = G__34993;
count__34990 = G__34994;
i__34991 = G__34995;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34988);
if(temp__5457__auto__){
var seq__34988__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34988__$1)){
var c__31454__auto__ = cljs.core.chunk_first.call(null,seq__34988__$1);
var G__34996 = cljs.core.chunk_rest.call(null,seq__34988__$1);
var G__34997 = c__31454__auto__;
var G__34998 = cljs.core.count.call(null,c__31454__auto__);
var G__34999 = (0);
seq__34988 = G__34996;
chunk__34989 = G__34997;
count__34990 = G__34998;
i__34991 = G__34999;
continue;
} else {
var event = cljs.core.first.call(null,seq__34988__$1);
re_frame.router.dispatch.call(null,event);

var G__35000 = cljs.core.next.call(null,seq__34988__$1);
var G__35001 = null;
var G__35002 = (0);
var G__35003 = (0);
seq__34988 = G__35000;
chunk__34989 = G__35001;
count__34990 = G__35002;
i__34991 = G__35003;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__35004 = cljs.core.seq.call(null,value);
var chunk__35005 = null;
var count__35006 = (0);
var i__35007 = (0);
while(true){
if((i__35007 < count__35006)){
var event = cljs.core._nth.call(null,chunk__35005,i__35007);
clear_event.call(null,event);

var G__35008 = seq__35004;
var G__35009 = chunk__35005;
var G__35010 = count__35006;
var G__35011 = (i__35007 + (1));
seq__35004 = G__35008;
chunk__35005 = G__35009;
count__35006 = G__35010;
i__35007 = G__35011;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__35004);
if(temp__5457__auto__){
var seq__35004__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35004__$1)){
var c__31454__auto__ = cljs.core.chunk_first.call(null,seq__35004__$1);
var G__35012 = cljs.core.chunk_rest.call(null,seq__35004__$1);
var G__35013 = c__31454__auto__;
var G__35014 = cljs.core.count.call(null,c__31454__auto__);
var G__35015 = (0);
seq__35004 = G__35012;
chunk__35005 = G__35013;
count__35006 = G__35014;
i__35007 = G__35015;
continue;
} else {
var event = cljs.core.first.call(null,seq__35004__$1);
clear_event.call(null,event);

var G__35016 = cljs.core.next.call(null,seq__35004__$1);
var G__35017 = null;
var G__35018 = (0);
var G__35019 = (0);
seq__35004 = G__35016;
chunk__35005 = G__35017;
count__35006 = G__35018;
i__35007 = G__35019;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1510703495396
