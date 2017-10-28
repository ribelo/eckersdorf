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
var make_chain = (function (p1__33655_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__33655_SHARP_));
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

var temp__5290__auto___33656 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5290__auto___33656)){
var not_i_33657 = temp__5290__auto___33656;
if(cljs.core.fn_QMARK_.call(null,not_i_33657)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_33657);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_33657);
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
var _STAR_handling_STAR_33658 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_33659 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33603__auto___33672 = re_frame.interop.now.call(null);
var duration__33604__auto___33673 = (end__33603__auto___33672 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__33660_33674 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__33661_33675 = null;
var count__33662_33676 = (0);
var i__33663_33677 = (0);
while(true){
if((i__33663_33677 < count__33662_33676)){
var vec__33664_33678 = cljs.core._nth.call(null,chunk__33661_33675,i__33663_33677);
var k__33605__auto___33679 = cljs.core.nth.call(null,vec__33664_33678,(0),null);
var cb__33606__auto___33680 = cljs.core.nth.call(null,vec__33664_33678,(1),null);
try{cb__33606__auto___33680.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33604__auto___33673,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e33667){if((e33667 instanceof java.lang.Exception)){
var e__33607__auto___33681 = e33667;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33605__auto___33679,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33607__auto___33681);
} else {
throw e33667;

}
}
var G__33682 = seq__33660_33674;
var G__33683 = chunk__33661_33675;
var G__33684 = count__33662_33676;
var G__33685 = (i__33663_33677 + (1));
seq__33660_33674 = G__33682;
chunk__33661_33675 = G__33683;
count__33662_33676 = G__33684;
i__33663_33677 = G__33685;
continue;
} else {
var temp__5290__auto___33686 = cljs.core.seq.call(null,seq__33660_33674);
if(temp__5290__auto___33686){
var seq__33660_33687__$1 = temp__5290__auto___33686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33660_33687__$1)){
var c__31170__auto___33688 = cljs.core.chunk_first.call(null,seq__33660_33687__$1);
var G__33689 = cljs.core.chunk_rest.call(null,seq__33660_33687__$1);
var G__33690 = c__31170__auto___33688;
var G__33691 = cljs.core.count.call(null,c__31170__auto___33688);
var G__33692 = (0);
seq__33660_33674 = G__33689;
chunk__33661_33675 = G__33690;
count__33662_33676 = G__33691;
i__33663_33677 = G__33692;
continue;
} else {
var vec__33668_33693 = cljs.core.first.call(null,seq__33660_33687__$1);
var k__33605__auto___33694 = cljs.core.nth.call(null,vec__33668_33693,(0),null);
var cb__33606__auto___33695 = cljs.core.nth.call(null,vec__33668_33693,(1),null);
try{cb__33606__auto___33695.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33604__auto___33673,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e33671){if((e33671 instanceof java.lang.Exception)){
var e__33607__auto___33696 = e33671;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33605__auto___33694,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33607__auto___33696);
} else {
throw e33671;

}
}
var G__33697 = cljs.core.next.call(null,seq__33660_33687__$1);
var G__33698 = null;
var G__33699 = (0);
var G__33700 = (0);
seq__33660_33674 = G__33697;
chunk__33661_33675 = G__33698;
count__33662_33676 = G__33699;
i__33663_33677 = G__33700;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_33659;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_33658;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1509094234730
