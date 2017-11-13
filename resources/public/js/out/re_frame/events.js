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
var make_chain = (function (p1__34821_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__34821_SHARP_));
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

var temp__5457__auto___34822 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___34822)){
var not_i_34823 = temp__5457__auto___34822;
if(cljs.core.fn_QMARK_.call(null,not_i_34823)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_34823);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_34823);
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
var _STAR_handling_STAR_34824 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_34825 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__34769__auto___34838 = re_frame.interop.now.call(null);
var duration__34770__auto___34839 = (end__34769__auto___34838 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__34826_34840 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__34827_34841 = null;
var count__34828_34842 = (0);
var i__34829_34843 = (0);
while(true){
if((i__34829_34843 < count__34828_34842)){
var vec__34830_34844 = cljs.core._nth.call(null,chunk__34827_34841,i__34829_34843);
var k__34771__auto___34845 = cljs.core.nth.call(null,vec__34830_34844,(0),null);
var cb__34772__auto___34846 = cljs.core.nth.call(null,vec__34830_34844,(1),null);
try{cb__34772__auto___34846.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34770__auto___34839,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e34833){if((e34833 instanceof java.lang.Exception)){
var e__34773__auto___34847 = e34833;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34771__auto___34845,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34773__auto___34847);
} else {
throw e34833;

}
}
var G__34848 = seq__34826_34840;
var G__34849 = chunk__34827_34841;
var G__34850 = count__34828_34842;
var G__34851 = (i__34829_34843 + (1));
seq__34826_34840 = G__34848;
chunk__34827_34841 = G__34849;
count__34828_34842 = G__34850;
i__34829_34843 = G__34851;
continue;
} else {
var temp__5457__auto___34852 = cljs.core.seq.call(null,seq__34826_34840);
if(temp__5457__auto___34852){
var seq__34826_34853__$1 = temp__5457__auto___34852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34826_34853__$1)){
var c__31453__auto___34854 = cljs.core.chunk_first.call(null,seq__34826_34853__$1);
var G__34855 = cljs.core.chunk_rest.call(null,seq__34826_34853__$1);
var G__34856 = c__31453__auto___34854;
var G__34857 = cljs.core.count.call(null,c__31453__auto___34854);
var G__34858 = (0);
seq__34826_34840 = G__34855;
chunk__34827_34841 = G__34856;
count__34828_34842 = G__34857;
i__34829_34843 = G__34858;
continue;
} else {
var vec__34834_34859 = cljs.core.first.call(null,seq__34826_34853__$1);
var k__34771__auto___34860 = cljs.core.nth.call(null,vec__34834_34859,(0),null);
var cb__34772__auto___34861 = cljs.core.nth.call(null,vec__34834_34859,(1),null);
try{cb__34772__auto___34861.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34770__auto___34839,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e34837){if((e34837 instanceof java.lang.Exception)){
var e__34773__auto___34862 = e34837;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34771__auto___34860,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34773__auto___34862);
} else {
throw e34837;

}
}
var G__34863 = cljs.core.next.call(null,seq__34826_34853__$1);
var G__34864 = null;
var G__34865 = (0);
var G__34866 = (0);
seq__34826_34840 = G__34863;
chunk__34827_34841 = G__34864;
count__34828_34842 = G__34865;
i__34829_34843 = G__34866;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_34825;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_34824;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1510602139440
