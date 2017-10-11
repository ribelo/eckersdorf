// Compiled by ClojureScript 1.9.908 {}
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
var seq__39289 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39290 = null;
var count__39291 = (0);
var i__39292 = (0);
while(true){
if((i__39292 < count__39291)){
var vec__39293 = cljs.core._nth.call(null,chunk__39290,i__39292);
var effect_key = cljs.core.nth.call(null,vec__39293,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39293,(1),null);
var temp__5288__auto___39299 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5288__auto___39299)){
var effect_fn_39300 = temp__5288__auto___39299;
effect_fn_39300.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__39301 = seq__39289;
var G__39302 = chunk__39290;
var G__39303 = count__39291;
var G__39304 = (i__39292 + (1));
seq__39289 = G__39301;
chunk__39290 = G__39302;
count__39291 = G__39303;
i__39292 = G__39304;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39289);
if(temp__5290__auto__){
var seq__39289__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39289__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__39289__$1);
var G__39305 = cljs.core.chunk_rest.call(null,seq__39289__$1);
var G__39306 = c__31170__auto__;
var G__39307 = cljs.core.count.call(null,c__31170__auto__);
var G__39308 = (0);
seq__39289 = G__39305;
chunk__39290 = G__39306;
count__39291 = G__39307;
i__39292 = G__39308;
continue;
} else {
var vec__39296 = cljs.core.first.call(null,seq__39289__$1);
var effect_key = cljs.core.nth.call(null,vec__39296,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39296,(1),null);
var temp__5288__auto___39309 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5288__auto___39309)){
var effect_fn_39310 = temp__5288__auto___39309;
effect_fn_39310.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__39311 = cljs.core.next.call(null,seq__39289__$1);
var G__39312 = null;
var G__39313 = (0);
var G__39314 = (0);
seq__39289 = G__39311;
chunk__39290 = G__39312;
count__39291 = G__39313;
i__39292 = G__39314;
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
var seq__39315 = cljs.core.seq.call(null,value);
var chunk__39316 = null;
var count__39317 = (0);
var i__39318 = (0);
while(true){
if((i__39318 < count__39317)){
var map__39319 = cljs.core._nth.call(null,chunk__39316,i__39318);
var map__39319__$1 = ((((!((map__39319 == null)))?((((map__39319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39319):map__39319);
var effect = map__39319__$1;
var ms = cljs.core.get.call(null,map__39319__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39319__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39315,chunk__39316,count__39317,i__39318,map__39319,map__39319__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39315,chunk__39316,count__39317,i__39318,map__39319,map__39319__$1,effect,ms,dispatch))
,ms);
}

var G__39323 = seq__39315;
var G__39324 = chunk__39316;
var G__39325 = count__39317;
var G__39326 = (i__39318 + (1));
seq__39315 = G__39323;
chunk__39316 = G__39324;
count__39317 = G__39325;
i__39318 = G__39326;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39315);
if(temp__5290__auto__){
var seq__39315__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39315__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__39315__$1);
var G__39327 = cljs.core.chunk_rest.call(null,seq__39315__$1);
var G__39328 = c__31170__auto__;
var G__39329 = cljs.core.count.call(null,c__31170__auto__);
var G__39330 = (0);
seq__39315 = G__39327;
chunk__39316 = G__39328;
count__39317 = G__39329;
i__39318 = G__39330;
continue;
} else {
var map__39321 = cljs.core.first.call(null,seq__39315__$1);
var map__39321__$1 = ((((!((map__39321 == null)))?((((map__39321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39321):map__39321);
var effect = map__39321__$1;
var ms = cljs.core.get.call(null,map__39321__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39321__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39315,chunk__39316,count__39317,i__39318,map__39321,map__39321__$1,effect,ms,dispatch,seq__39315__$1,temp__5290__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39315,chunk__39316,count__39317,i__39318,map__39321,map__39321__$1,effect,ms,dispatch,seq__39315__$1,temp__5290__auto__))
,ms);
}

var G__39331 = cljs.core.next.call(null,seq__39315__$1);
var G__39332 = null;
var G__39333 = (0);
var G__39334 = (0);
seq__39315 = G__39331;
chunk__39316 = G__39332;
count__39317 = G__39333;
i__39318 = G__39334;
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
var seq__39335 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__39336 = null;
var count__39337 = (0);
var i__39338 = (0);
while(true){
if((i__39338 < count__39337)){
var event = cljs.core._nth.call(null,chunk__39336,i__39338);
re_frame.router.dispatch.call(null,event);

var G__39339 = seq__39335;
var G__39340 = chunk__39336;
var G__39341 = count__39337;
var G__39342 = (i__39338 + (1));
seq__39335 = G__39339;
chunk__39336 = G__39340;
count__39337 = G__39341;
i__39338 = G__39342;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39335);
if(temp__5290__auto__){
var seq__39335__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39335__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__39335__$1);
var G__39343 = cljs.core.chunk_rest.call(null,seq__39335__$1);
var G__39344 = c__31170__auto__;
var G__39345 = cljs.core.count.call(null,c__31170__auto__);
var G__39346 = (0);
seq__39335 = G__39343;
chunk__39336 = G__39344;
count__39337 = G__39345;
i__39338 = G__39346;
continue;
} else {
var event = cljs.core.first.call(null,seq__39335__$1);
re_frame.router.dispatch.call(null,event);

var G__39347 = cljs.core.next.call(null,seq__39335__$1);
var G__39348 = null;
var G__39349 = (0);
var G__39350 = (0);
seq__39335 = G__39347;
chunk__39336 = G__39348;
count__39337 = G__39349;
i__39338 = G__39350;
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
var seq__39351 = cljs.core.seq.call(null,value);
var chunk__39352 = null;
var count__39353 = (0);
var i__39354 = (0);
while(true){
if((i__39354 < count__39353)){
var event = cljs.core._nth.call(null,chunk__39352,i__39354);
clear_event.call(null,event);

var G__39355 = seq__39351;
var G__39356 = chunk__39352;
var G__39357 = count__39353;
var G__39358 = (i__39354 + (1));
seq__39351 = G__39355;
chunk__39352 = G__39356;
count__39353 = G__39357;
i__39354 = G__39358;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39351);
if(temp__5290__auto__){
var seq__39351__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39351__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__39351__$1);
var G__39359 = cljs.core.chunk_rest.call(null,seq__39351__$1);
var G__39360 = c__31170__auto__;
var G__39361 = cljs.core.count.call(null,c__31170__auto__);
var G__39362 = (0);
seq__39351 = G__39359;
chunk__39352 = G__39360;
count__39353 = G__39361;
i__39354 = G__39362;
continue;
} else {
var event = cljs.core.first.call(null,seq__39351__$1);
clear_event.call(null,event);

var G__39363 = cljs.core.next.call(null,seq__39351__$1);
var G__39364 = null;
var G__39365 = (0);
var G__39366 = (0);
seq__39351 = G__39363;
chunk__39352 = G__39364;
count__39353 = G__39365;
i__39354 = G__39366;
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

//# sourceMappingURL=fx.js.map?rel=1507757452218
