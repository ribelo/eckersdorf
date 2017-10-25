// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__38934_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__38934_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__5290__auto___38935 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5290__auto___38935)){
var not_i_38936 = temp__5290__auto___38935;
if(cljs.core.fn_QMARK_.call(null,not_i_38936)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_38936);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_38936);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__5288__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5288__auto__)){
var interceptors = temp__5288__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_38937 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_38938 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38882__auto___38951 = re_frame.interop.now.call(null);
var duration__38883__auto___38952 = (end__38882__auto___38951 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__38939_38953 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__38940_38954 = null;
var count__38941_38955 = (0);
var i__38942_38956 = (0);
while(true){
if((i__38942_38956 < count__38941_38955)){
var vec__38943_38957 = cljs.core._nth.call(null,chunk__38940_38954,i__38942_38956);
var k__38884__auto___38958 = cljs.core.nth.call(null,vec__38943_38957,(0),null);
var cb__38885__auto___38959 = cljs.core.nth.call(null,vec__38943_38957,(1),null);
try{cb__38885__auto___38959.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38883__auto___38952,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e38946){if((e38946 instanceof java.lang.Exception)){
var e__38886__auto___38960 = e38946;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38884__auto___38958,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38886__auto___38960);
} else {
throw e38946;

}
}
var G__38961 = seq__38939_38953;
var G__38962 = chunk__38940_38954;
var G__38963 = count__38941_38955;
var G__38964 = (i__38942_38956 + (1));
seq__38939_38953 = G__38961;
chunk__38940_38954 = G__38962;
count__38941_38955 = G__38963;
i__38942_38956 = G__38964;
continue;
} else {
var temp__5290__auto___38965 = cljs.core.seq.call(null,seq__38939_38953);
if(temp__5290__auto___38965){
var seq__38939_38966__$1 = temp__5290__auto___38965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38939_38966__$1)){
var c__31180__auto___38967 = cljs.core.chunk_first.call(null,seq__38939_38966__$1);
var G__38968 = cljs.core.chunk_rest.call(null,seq__38939_38966__$1);
var G__38969 = c__31180__auto___38967;
var G__38970 = cljs.core.count.call(null,c__31180__auto___38967);
var G__38971 = (0);
seq__38939_38953 = G__38968;
chunk__38940_38954 = G__38969;
count__38941_38955 = G__38970;
i__38942_38956 = G__38971;
continue;
} else {
var vec__38947_38972 = cljs.core.first.call(null,seq__38939_38966__$1);
var k__38884__auto___38973 = cljs.core.nth.call(null,vec__38947_38972,(0),null);
var cb__38885__auto___38974 = cljs.core.nth.call(null,vec__38947_38972,(1),null);
try{cb__38885__auto___38974.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38883__auto___38952,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e38950){if((e38950 instanceof java.lang.Exception)){
var e__38886__auto___38975 = e38950;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38884__auto___38973,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38886__auto___38975);
} else {
throw e38950;

}
}
var G__38976 = cljs.core.next.call(null,seq__38939_38966__$1);
var G__38977 = null;
var G__38978 = (0);
var G__38979 = (0);
seq__38939_38953 = G__38976;
chunk__38940_38954 = G__38977;
count__38941_38955 = G__38978;
i__38942_38956 = G__38979;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_38938;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_38937;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1508862156256
