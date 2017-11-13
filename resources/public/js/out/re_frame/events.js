// Compiled by ClojureScript 1.9.946 {}
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
var make_chain = (function (p1__34822_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__34822_SHARP_));
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

var temp__5457__auto___34823 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___34823)){
var not_i_34824 = temp__5457__auto___34823;
if(cljs.core.fn_QMARK_.call(null,not_i_34824)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_34824);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_34824);
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
var temp__5455__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5455__auto__)){
var interceptors = temp__5455__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_34825 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_34826 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__34770__auto___34839 = re_frame.interop.now.call(null);
var duration__34771__auto___34840 = (end__34770__auto___34839 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__34827_34841 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__34828_34842 = null;
var count__34829_34843 = (0);
var i__34830_34844 = (0);
while(true){
if((i__34830_34844 < count__34829_34843)){
var vec__34831_34845 = cljs.core._nth.call(null,chunk__34828_34842,i__34830_34844);
var k__34772__auto___34846 = cljs.core.nth.call(null,vec__34831_34845,(0),null);
var cb__34773__auto___34847 = cljs.core.nth.call(null,vec__34831_34845,(1),null);
try{cb__34773__auto___34847.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34771__auto___34840,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e34834){if((e34834 instanceof java.lang.Exception)){
var e__34774__auto___34848 = e34834;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34772__auto___34846,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34774__auto___34848);
} else {
throw e34834;

}
}
var G__34849 = seq__34827_34841;
var G__34850 = chunk__34828_34842;
var G__34851 = count__34829_34843;
var G__34852 = (i__34830_34844 + (1));
seq__34827_34841 = G__34849;
chunk__34828_34842 = G__34850;
count__34829_34843 = G__34851;
i__34830_34844 = G__34852;
continue;
} else {
var temp__5457__auto___34853 = cljs.core.seq.call(null,seq__34827_34841);
if(temp__5457__auto___34853){
var seq__34827_34854__$1 = temp__5457__auto___34853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34827_34854__$1)){
var c__31454__auto___34855 = cljs.core.chunk_first.call(null,seq__34827_34854__$1);
var G__34856 = cljs.core.chunk_rest.call(null,seq__34827_34854__$1);
var G__34857 = c__31454__auto___34855;
var G__34858 = cljs.core.count.call(null,c__31454__auto___34855);
var G__34859 = (0);
seq__34827_34841 = G__34856;
chunk__34828_34842 = G__34857;
count__34829_34843 = G__34858;
i__34830_34844 = G__34859;
continue;
} else {
var vec__34835_34860 = cljs.core.first.call(null,seq__34827_34854__$1);
var k__34772__auto___34861 = cljs.core.nth.call(null,vec__34835_34860,(0),null);
var cb__34773__auto___34862 = cljs.core.nth.call(null,vec__34835_34860,(1),null);
try{cb__34773__auto___34862.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34771__auto___34840,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e34838){if((e34838 instanceof java.lang.Exception)){
var e__34774__auto___34863 = e34838;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34772__auto___34861,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34774__auto___34863);
} else {
throw e34838;

}
}
var G__34864 = cljs.core.next.call(null,seq__34827_34854__$1);
var G__34865 = null;
var G__34866 = (0);
var G__34867 = (0);
seq__34827_34841 = G__34864;
chunk__34828_34842 = G__34865;
count__34829_34843 = G__34866;
i__34830_34844 = G__34867;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_34826;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_34825;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1510609291832
