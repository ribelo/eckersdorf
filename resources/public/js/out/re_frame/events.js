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
var make_chain = (function (p1__39169_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__39169_SHARP_));
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

var temp__5290__auto___39170 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5290__auto___39170)){
var not_i_39171 = temp__5290__auto___39170;
if(cljs.core.fn_QMARK_.call(null,not_i_39171)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_39171);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_39171);
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
var _STAR_handling_STAR_39172 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39173 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__39117__auto___39186 = re_frame.interop.now.call(null);
var duration__39118__auto___39187 = (end__39117__auto___39186 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39174_39188 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39175_39189 = null;
var count__39176_39190 = (0);
var i__39177_39191 = (0);
while(true){
if((i__39177_39191 < count__39176_39190)){
var vec__39178_39192 = cljs.core._nth.call(null,chunk__39175_39189,i__39177_39191);
var k__39119__auto___39193 = cljs.core.nth.call(null,vec__39178_39192,(0),null);
var cb__39120__auto___39194 = cljs.core.nth.call(null,vec__39178_39192,(1),null);
try{cb__39120__auto___39194.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39118__auto___39187,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39181){if((e39181 instanceof java.lang.Exception)){
var e__39121__auto___39195 = e39181;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39119__auto___39193,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39121__auto___39195);
} else {
throw e39181;

}
}
var G__39196 = seq__39174_39188;
var G__39197 = chunk__39175_39189;
var G__39198 = count__39176_39190;
var G__39199 = (i__39177_39191 + (1));
seq__39174_39188 = G__39196;
chunk__39175_39189 = G__39197;
count__39176_39190 = G__39198;
i__39177_39191 = G__39199;
continue;
} else {
var temp__5290__auto___39200 = cljs.core.seq.call(null,seq__39174_39188);
if(temp__5290__auto___39200){
var seq__39174_39201__$1 = temp__5290__auto___39200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39174_39201__$1)){
var c__31170__auto___39202 = cljs.core.chunk_first.call(null,seq__39174_39201__$1);
var G__39203 = cljs.core.chunk_rest.call(null,seq__39174_39201__$1);
var G__39204 = c__31170__auto___39202;
var G__39205 = cljs.core.count.call(null,c__31170__auto___39202);
var G__39206 = (0);
seq__39174_39188 = G__39203;
chunk__39175_39189 = G__39204;
count__39176_39190 = G__39205;
i__39177_39191 = G__39206;
continue;
} else {
var vec__39182_39207 = cljs.core.first.call(null,seq__39174_39201__$1);
var k__39119__auto___39208 = cljs.core.nth.call(null,vec__39182_39207,(0),null);
var cb__39120__auto___39209 = cljs.core.nth.call(null,vec__39182_39207,(1),null);
try{cb__39120__auto___39209.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39118__auto___39187,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39185){if((e39185 instanceof java.lang.Exception)){
var e__39121__auto___39210 = e39185;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__39119__auto___39208,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__39121__auto___39210);
} else {
throw e39185;

}
}
var G__39211 = cljs.core.next.call(null,seq__39174_39201__$1);
var G__39212 = null;
var G__39213 = (0);
var G__39214 = (0);
seq__39174_39188 = G__39211;
chunk__39175_39189 = G__39212;
count__39176_39190 = G__39213;
i__39177_39191 = G__39214;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39173;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_39172;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1507757451974
