// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__39416_39426 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__39417_39427 = null;
var count__39418_39428 = (0);
var i__39419_39429 = (0);
while(true){
if((i__39419_39429 < count__39418_39428)){
var vec__39420_39430 = cljs.core._nth.call(null,chunk__39417_39427,i__39419_39429);
var k_39431 = cljs.core.nth.call(null,vec__39420_39430,(0),null);
var rxn_39432 = cljs.core.nth.call(null,vec__39420_39430,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_39432);

var G__39433 = seq__39416_39426;
var G__39434 = chunk__39417_39427;
var G__39435 = count__39418_39428;
var G__39436 = (i__39419_39429 + (1));
seq__39416_39426 = G__39433;
chunk__39417_39427 = G__39434;
count__39418_39428 = G__39435;
i__39419_39429 = G__39436;
continue;
} else {
var temp__5290__auto___39437 = cljs.core.seq.call(null,seq__39416_39426);
if(temp__5290__auto___39437){
var seq__39416_39438__$1 = temp__5290__auto___39437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39416_39438__$1)){
var c__31170__auto___39439 = cljs.core.chunk_first.call(null,seq__39416_39438__$1);
var G__39440 = cljs.core.chunk_rest.call(null,seq__39416_39438__$1);
var G__39441 = c__31170__auto___39439;
var G__39442 = cljs.core.count.call(null,c__31170__auto___39439);
var G__39443 = (0);
seq__39416_39426 = G__39440;
chunk__39417_39427 = G__39441;
count__39418_39428 = G__39442;
i__39419_39429 = G__39443;
continue;
} else {
var vec__39423_39444 = cljs.core.first.call(null,seq__39416_39438__$1);
var k_39445 = cljs.core.nth.call(null,vec__39423_39444,(0),null);
var rxn_39446 = cljs.core.nth.call(null,vec__39423_39444,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_39446);

var G__39447 = cljs.core.next.call(null,seq__39416_39438__$1);
var G__39448 = null;
var G__39449 = (0);
var G__39450 = (0);
seq__39416_39426 = G__39447;
chunk__39417_39427 = G__39448;
count__39418_39428 = G__39449;
i__39419_39429 = G__39450;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39451 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__39117__auto___39464 = re_frame.interop.now.call(null);
var duration__39118__auto___39465 = (end__39117__auto___39464 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39452_39466 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39453_39467 = null;
var count__39454_39468 = (0);
var i__39455_39469 = (0);
while(true){
if((i__39455_39469 < count__39454_39468)){
var vec__39456_39470 = cljs.core._nth.call(null,chunk__39453_39467,i__39455_39469);
var k__39119__auto___39471 = cljs.core.nth.call(null,vec__39456_39470,(0),null);
var cb__39120__auto___39472 = cljs.core.nth.call(null,vec__39456_39470,(1),null);
try{cb__39120__auto___39472.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39118__auto___39465,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39459){if((e39459 instanceof java.lang.Exception)){
var e__39121__auto___39473 = e39459;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39119__auto___39471,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39121__auto___39473);
} else {
throw e39459;

}
}
var G__39474 = seq__39452_39466;
var G__39475 = chunk__39453_39467;
var G__39476 = count__39454_39468;
var G__39477 = (i__39455_39469 + (1));
seq__39452_39466 = G__39474;
chunk__39453_39467 = G__39475;
count__39454_39468 = G__39476;
i__39455_39469 = G__39477;
continue;
} else {
var temp__5290__auto___39478 = cljs.core.seq.call(null,seq__39452_39466);
if(temp__5290__auto___39478){
var seq__39452_39479__$1 = temp__5290__auto___39478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39452_39479__$1)){
var c__31170__auto___39480 = cljs.core.chunk_first.call(null,seq__39452_39479__$1);
var G__39481 = cljs.core.chunk_rest.call(null,seq__39452_39479__$1);
var G__39482 = c__31170__auto___39480;
var G__39483 = cljs.core.count.call(null,c__31170__auto___39480);
var G__39484 = (0);
seq__39452_39466 = G__39481;
chunk__39453_39467 = G__39482;
count__39454_39468 = G__39483;
i__39455_39469 = G__39484;
continue;
} else {
var vec__39460_39485 = cljs.core.first.call(null,seq__39452_39479__$1);
var k__39119__auto___39486 = cljs.core.nth.call(null,vec__39460_39485,(0),null);
var cb__39120__auto___39487 = cljs.core.nth.call(null,vec__39460_39485,(1),null);
try{cb__39120__auto___39487.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39118__auto___39465,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39463){if((e39463 instanceof java.lang.Exception)){
var e__39121__auto___39488 = e39463;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39119__auto___39486,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39121__auto___39488);
} else {
throw e39463;

}
}
var G__39489 = cljs.core.next.call(null,seq__39452_39479__$1);
var G__39490 = null;
var G__39491 = (0);
var G__39492 = (0);
seq__39452_39466 = G__39489;
chunk__39453_39467 = G__39490;
count__39454_39468 = G__39491;
i__39455_39469 = G__39492;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39451;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39493 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39493;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var G__39495 = arguments.length;
switch (G__39495) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var G__39498 = arguments.length;
switch (G__39498) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39499 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));

try{try{var temp__5288__auto__ = re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__5288__auto__)){
var cached = temp__5288__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39526 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39526;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39527 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39527;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39528 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39528;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__39117__auto___39529 = re_frame.interop.now.call(null);
var duration__39118__auto___39530 = (end__39117__auto___39529 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39500_39531 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39501_39532 = null;
var count__39502_39533 = (0);
var i__39503_39534 = (0);
while(true){
if((i__39503_39534 < count__39502_39533)){
var vec__39504_39535 = cljs.core._nth.call(null,chunk__39501_39532,i__39503_39534);
var k__39119__auto___39536 = cljs.core.nth.call(null,vec__39504_39535,(0),null);
var cb__39120__auto___39537 = cljs.core.nth.call(null,vec__39504_39535,(1),null);
try{cb__39120__auto___39537.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39118__auto___39530,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39507){if((e39507 instanceof java.lang.Exception)){
var e__39121__auto___39538 = e39507;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39119__auto___39536,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39121__auto___39538);
} else {
throw e39507;

}
}
var G__39539 = seq__39500_39531;
var G__39540 = chunk__39501_39532;
var G__39541 = count__39502_39533;
var G__39542 = (i__39503_39534 + (1));
seq__39500_39531 = G__39539;
chunk__39501_39532 = G__39540;
count__39502_39533 = G__39541;
i__39503_39534 = G__39542;
continue;
} else {
var temp__5290__auto___39543 = cljs.core.seq.call(null,seq__39500_39531);
if(temp__5290__auto___39543){
var seq__39500_39544__$1 = temp__5290__auto___39543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39500_39544__$1)){
var c__31170__auto___39545 = cljs.core.chunk_first.call(null,seq__39500_39544__$1);
var G__39546 = cljs.core.chunk_rest.call(null,seq__39500_39544__$1);
var G__39547 = c__31170__auto___39545;
var G__39548 = cljs.core.count.call(null,c__31170__auto___39545);
var G__39549 = (0);
seq__39500_39531 = G__39546;
chunk__39501_39532 = G__39547;
count__39502_39533 = G__39548;
i__39503_39534 = G__39549;
continue;
} else {
var vec__39508_39550 = cljs.core.first.call(null,seq__39500_39544__$1);
var k__39119__auto___39551 = cljs.core.nth.call(null,vec__39508_39550,(0),null);
var cb__39120__auto___39552 = cljs.core.nth.call(null,vec__39508_39550,(1),null);
try{cb__39120__auto___39552.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39118__auto___39530,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39511){if((e39511 instanceof java.lang.Exception)){
var e__39121__auto___39553 = e39511;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39119__auto___39551,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39121__auto___39553);
} else {
throw e39511;

}
}
var G__39554 = cljs.core.next.call(null,seq__39500_39544__$1);
var G__39555 = null;
var G__39556 = (0);
var G__39557 = (0);
seq__39500_39531 = G__39554;
chunk__39501_39532 = G__39555;
count__39502_39533 = G__39556;
i__39503_39534 = G__39557;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39499;
}} else {
var temp__5288__auto__ = re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__5288__auto__)){
var cached = temp__5288__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39558 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39558;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39559 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39559;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39560 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39560;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39512 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__5288__auto__ = re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__5288__auto__)){
var cached = temp__5288__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39561 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39561;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39562 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39562;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__5290__auto___39563 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5290__auto___39563)){
var not_reactive_39564 = temp__5290__auto___39563;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_39564);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39565 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39565;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__5288__auto__,_STAR_current_trace_STAR_39512){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5288__auto__,_STAR_current_trace_STAR_39512))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__5288__auto__,_STAR_current_trace_STAR_39512){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__5288__auto__,_STAR_current_trace_STAR_39512))
);
return re_frame.subs.cache_and_return.call(null,query,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__5288__auto__,_STAR_current_trace_STAR_39512){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5288__auto__,_STAR_current_trace_STAR_39512))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__39117__auto___39566 = re_frame.interop.now.call(null);
var duration__39118__auto___39567 = (end__39117__auto___39566 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39513_39568 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39514_39569 = null;
var count__39515_39570 = (0);
var i__39516_39571 = (0);
while(true){
if((i__39516_39571 < count__39515_39570)){
var vec__39517_39572 = cljs.core._nth.call(null,chunk__39514_39569,i__39516_39571);
var k__39119__auto___39573 = cljs.core.nth.call(null,vec__39517_39572,(0),null);
var cb__39120__auto___39574 = cljs.core.nth.call(null,vec__39517_39572,(1),null);
try{cb__39120__auto___39574.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39118__auto___39567,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39520){if((e39520 instanceof java.lang.Exception)){
var e__39121__auto___39575 = e39520;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39119__auto___39573,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39121__auto___39575);
} else {
throw e39520;

}
}
var G__39576 = seq__39513_39568;
var G__39577 = chunk__39514_39569;
var G__39578 = count__39515_39570;
var G__39579 = (i__39516_39571 + (1));
seq__39513_39568 = G__39576;
chunk__39514_39569 = G__39577;
count__39515_39570 = G__39578;
i__39516_39571 = G__39579;
continue;
} else {
var temp__5290__auto___39580 = cljs.core.seq.call(null,seq__39513_39568);
if(temp__5290__auto___39580){
var seq__39513_39581__$1 = temp__5290__auto___39580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39513_39581__$1)){
var c__31170__auto___39582 = cljs.core.chunk_first.call(null,seq__39513_39581__$1);
var G__39583 = cljs.core.chunk_rest.call(null,seq__39513_39581__$1);
var G__39584 = c__31170__auto___39582;
var G__39585 = cljs.core.count.call(null,c__31170__auto___39582);
var G__39586 = (0);
seq__39513_39568 = G__39583;
chunk__39514_39569 = G__39584;
count__39515_39570 = G__39585;
i__39516_39571 = G__39586;
continue;
} else {
var vec__39521_39587 = cljs.core.first.call(null,seq__39513_39581__$1);
var k__39119__auto___39588 = cljs.core.nth.call(null,vec__39521_39587,(0),null);
var cb__39120__auto___39589 = cljs.core.nth.call(null,vec__39521_39587,(1),null);
try{cb__39120__auto___39589.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39118__auto___39567,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39524){if((e39524 instanceof java.lang.Exception)){
var e__39121__auto___39590 = e39524;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39119__auto___39588,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39121__auto___39590);
} else {
throw e39524;

}
}
var G__39591 = cljs.core.next.call(null,seq__39513_39581__$1);
var G__39592 = null;
var G__39593 = (0);
var G__39594 = (0);
seq__39513_39568 = G__39591;
chunk__39514_39569 = G__39592;
count__39515_39570 = G__39593;
i__39516_39571 = G__39594;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39512;
}} else {
var temp__5288__auto__ = re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__5288__auto__)){
var cached = temp__5288__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39595 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39595;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39596 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39596;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__5290__auto___39597 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5290__auto___39597)){
var not_reactive_39598 = temp__5290__auto___39597;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_39598);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39599 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39599;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__5288__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5288__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__5288__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__5288__auto__))
);
return re_frame.subs.cache_and_return.call(null,query,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__5288__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5288__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__39600){
var vec__39601 = p__39600;
var k = cljs.core.nth.call(null,vec__39601,(0),null);
var v = cljs.core.nth.call(null,vec__39601,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__39122__auto___39604 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__39122__auto___39604;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__31523__auto__ = [];
var len__31516__auto___39637 = arguments.length;
var i__31517__auto___39638 = (0);
while(true){
if((i__31517__auto___39638 < len__31516__auto___39637)){
args__31523__auto__.push((arguments[i__31517__auto___39638]));

var G__39639 = (i__31517__auto___39638 + (1));
i__31517__auto___39638 = G__39639;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((1) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31524__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__39607 = cljs.core.count.call(null,input_args);
switch (G__39607) {
case (0):
return ((function (G__39607,computation_fn,input_args,err_header){
return (function() {
var G__39641 = null;
var G__39641__1 = (function (_){
return re_frame.db.app_db;
});
var G__39641__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__39641 = function(_,___$1){
switch(arguments.length){
case 1:
return G__39641__1.call(this,_);
case 2:
return G__39641__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__39641.cljs$core$IFn$_invoke$arity$1 = G__39641__1;
G__39641.cljs$core$IFn$_invoke$arity$2 = G__39641__2;
return G__39641;
})()
;})(G__39607,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__39608 = input_args;
var marker = cljs.core.nth.call(null,vec__39608,(0),null);
var vec = cljs.core.nth.call(null,vec__39608,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__39608,marker,vec,G__39607,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__39608,marker,vec,G__39607,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs))){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__39607,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__39607,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39611 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__39117__auto___39642 = re_frame.interop.now.call(null);
var duration__39118__auto___39643 = (end__39117__auto___39642 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39612_39644 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39613_39645 = null;
var count__39614_39646 = (0);
var i__39615_39647 = (0);
while(true){
if((i__39615_39647 < count__39614_39646)){
var vec__39616_39648 = cljs.core._nth.call(null,chunk__39613_39645,i__39615_39647);
var k__39119__auto___39649 = cljs.core.nth.call(null,vec__39616_39648,(0),null);
var cb__39120__auto___39650 = cljs.core.nth.call(null,vec__39616_39648,(1),null);
try{cb__39120__auto___39650.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39118__auto___39643,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39619){if((e39619 instanceof java.lang.Exception)){
var e__39121__auto___39651 = e39619;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39119__auto___39649,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39121__auto___39651);
} else {
throw e39619;

}
}
var G__39652 = seq__39612_39644;
var G__39653 = chunk__39613_39645;
var G__39654 = count__39614_39646;
var G__39655 = (i__39615_39647 + (1));
seq__39612_39644 = G__39652;
chunk__39613_39645 = G__39653;
count__39614_39646 = G__39654;
i__39615_39647 = G__39655;
continue;
} else {
var temp__5290__auto___39656 = cljs.core.seq.call(null,seq__39612_39644);
if(temp__5290__auto___39656){
var seq__39612_39657__$1 = temp__5290__auto___39656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39612_39657__$1)){
var c__31170__auto___39658 = cljs.core.chunk_first.call(null,seq__39612_39657__$1);
var G__39659 = cljs.core.chunk_rest.call(null,seq__39612_39657__$1);
var G__39660 = c__31170__auto___39658;
var G__39661 = cljs.core.count.call(null,c__31170__auto___39658);
var G__39662 = (0);
seq__39612_39644 = G__39659;
chunk__39613_39645 = G__39660;
count__39614_39646 = G__39661;
i__39615_39647 = G__39662;
continue;
} else {
var vec__39620_39663 = cljs.core.first.call(null,seq__39612_39657__$1);
var k__39119__auto___39664 = cljs.core.nth.call(null,vec__39620_39663,(0),null);
var cb__39120__auto___39665 = cljs.core.nth.call(null,vec__39620_39663,(1),null);
try{cb__39120__auto___39665.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39118__auto___39643,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39623){if((e39623 instanceof java.lang.Exception)){
var e__39121__auto___39666 = e39623;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39119__auto___39664,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39121__auto___39666);
} else {
throw e39623;

}
}
var G__39667 = cljs.core.next.call(null,seq__39612_39657__$1);
var G__39668 = null;
var G__39669 = (0);
var G__39670 = (0);
seq__39612_39644 = G__39667;
chunk__39613_39645 = G__39668;
count__39614_39646 = G__39669;
i__39615_39647 = G__39670;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39611;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39624 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__39117__auto___39671 = re_frame.interop.now.call(null);
var duration__39118__auto___39672 = (end__39117__auto___39671 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39625_39673 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39626_39674 = null;
var count__39627_39675 = (0);
var i__39628_39676 = (0);
while(true){
if((i__39628_39676 < count__39627_39675)){
var vec__39629_39677 = cljs.core._nth.call(null,chunk__39626_39674,i__39628_39676);
var k__39119__auto___39678 = cljs.core.nth.call(null,vec__39629_39677,(0),null);
var cb__39120__auto___39679 = cljs.core.nth.call(null,vec__39629_39677,(1),null);
try{cb__39120__auto___39679.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39118__auto___39672,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39632){if((e39632 instanceof java.lang.Exception)){
var e__39121__auto___39680 = e39632;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39119__auto___39678,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39121__auto___39680);
} else {
throw e39632;

}
}
var G__39681 = seq__39625_39673;
var G__39682 = chunk__39626_39674;
var G__39683 = count__39627_39675;
var G__39684 = (i__39628_39676 + (1));
seq__39625_39673 = G__39681;
chunk__39626_39674 = G__39682;
count__39627_39675 = G__39683;
i__39628_39676 = G__39684;
continue;
} else {
var temp__5290__auto___39685 = cljs.core.seq.call(null,seq__39625_39673);
if(temp__5290__auto___39685){
var seq__39625_39686__$1 = temp__5290__auto___39685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39625_39686__$1)){
var c__31170__auto___39687 = cljs.core.chunk_first.call(null,seq__39625_39686__$1);
var G__39688 = cljs.core.chunk_rest.call(null,seq__39625_39686__$1);
var G__39689 = c__31170__auto___39687;
var G__39690 = cljs.core.count.call(null,c__31170__auto___39687);
var G__39691 = (0);
seq__39625_39673 = G__39688;
chunk__39626_39674 = G__39689;
count__39627_39675 = G__39690;
i__39628_39676 = G__39691;
continue;
} else {
var vec__39633_39692 = cljs.core.first.call(null,seq__39625_39686__$1);
var k__39119__auto___39693 = cljs.core.nth.call(null,vec__39633_39692,(0),null);
var cb__39120__auto___39694 = cljs.core.nth.call(null,vec__39633_39692,(1),null);
try{cb__39120__auto___39694.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39118__auto___39672,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39636){if((e39636 instanceof java.lang.Exception)){
var e__39121__auto___39695 = e39636;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39119__auto___39693,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39121__auto___39695);
} else {
throw e39636;

}
}
var G__39696 = cljs.core.next.call(null,seq__39625_39686__$1);
var G__39697 = null;
var G__39698 = (0);
var G__39699 = (0);
seq__39625_39673 = G__39696;
chunk__39626_39674 = G__39697;
count__39627_39675 = G__39698;
i__39628_39676 = G__39699;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39624;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq39605){
var G__39606 = cljs.core.first.call(null,seq39605);
var seq39605__$1 = cljs.core.next.call(null,seq39605);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__39606,seq39605__$1);
});


//# sourceMappingURL=subs.js.map?rel=1507757452863
