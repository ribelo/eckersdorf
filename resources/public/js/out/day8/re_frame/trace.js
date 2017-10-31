// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame.trace.subvis');
goog.require('day8.re_frame.trace.app_db');
goog.require('day8.re_frame.trace.styles');
goog.require('day8.re_frame.trace.components');
goog.require('day8.re_frame.trace.localstorage');
goog.require('re_frame.trace');
goog.require('re_frame.db');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('reagent.core');
goog.require('reagent.interop');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('goog.object');
goog.require('re_frame.interop');
goog.require('devtools.formatters.core');
day8.re_frame.trace.comp_name = (function day8$re_frame$trace$comp_name(c){
var n = (function (){var or__30249__auto__ = reagent.impl.component.component_path.call(null,c);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
var G__52427 = c;
var G__52427__$1 = (((G__52427 == null))?null:G__52427.constructor);
if((G__52427__$1 == null)){
return null;
} else {
return reagent.impl.util.fun_name.call(null,G__52427__$1);
}
}
})();
if(!(cljs.core.empty_QMARK_.call(null,n))){
return n;
} else {
return "";
}
});
day8.re_frame.trace.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function day8$re_frame$trace$render(){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_52428 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-path","component-path",-1014945685),reagent.impl.component.component_path.call(null,c)], null),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.last.call(null,clojure.string.split.call(null,reagent.impl.component.component_path.call(null,c),/ > /))], null));

try{try{if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
var _ = reagent.impl.batching.mark_rendered.call(null,c);
var res = (((rat == null))?reagent.ratom.run_in_reaction.call(null,((function (rat,_,_STAR_current_trace_STAR_52428,c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(rat,_,_STAR_current_trace_STAR_52428,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = (c["cljsRatom"]);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38915__auto___52441 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38915__auto___52441;

} else {
}

return res;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38910__auto___52442 = re_frame.interop.now.call(null);
var duration__38911__auto___52443 = (end__38910__auto___52442 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__52429_52444 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__52430_52445 = null;
var count__52431_52446 = (0);
var i__52432_52447 = (0);
while(true){
if((i__52432_52447 < count__52431_52446)){
var vec__52433_52448 = cljs.core._nth.call(null,chunk__52430_52445,i__52432_52447);
var k__38912__auto___52449 = cljs.core.nth.call(null,vec__52433_52448,(0),null);
var cb__38913__auto___52450 = cljs.core.nth.call(null,vec__52433_52448,(1),null);
try{cb__38913__auto___52450.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38911__auto___52443,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e52436){if((e52436 instanceof java.lang.Exception)){
var e__38914__auto___52451 = e52436;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38912__auto___52449,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38914__auto___52451);
} else {
throw e52436;

}
}
var G__52452 = seq__52429_52444;
var G__52453 = chunk__52430_52445;
var G__52454 = count__52431_52446;
var G__52455 = (i__52432_52447 + (1));
seq__52429_52444 = G__52452;
chunk__52430_52445 = G__52453;
count__52431_52446 = G__52454;
i__52432_52447 = G__52455;
continue;
} else {
var temp__5290__auto___52456 = cljs.core.seq.call(null,seq__52429_52444);
if(temp__5290__auto___52456){
var seq__52429_52457__$1 = temp__5290__auto___52456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52429_52457__$1)){
var c__31180__auto___52458 = cljs.core.chunk_first.call(null,seq__52429_52457__$1);
var G__52459 = cljs.core.chunk_rest.call(null,seq__52429_52457__$1);
var G__52460 = c__31180__auto___52458;
var G__52461 = cljs.core.count.call(null,c__31180__auto___52458);
var G__52462 = (0);
seq__52429_52444 = G__52459;
chunk__52430_52445 = G__52460;
count__52431_52446 = G__52461;
i__52432_52447 = G__52462;
continue;
} else {
var vec__52437_52463 = cljs.core.first.call(null,seq__52429_52457__$1);
var k__38912__auto___52464 = cljs.core.nth.call(null,vec__52437_52463,(0),null);
var cb__38913__auto___52465 = cljs.core.nth.call(null,vec__52437_52463,(1),null);
try{cb__38913__auto___52465.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38911__auto___52443,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e52440){if((e52440 instanceof java.lang.Exception)){
var e__38914__auto___52466 = e52440;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38912__auto___52464,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38914__auto___52466);
} else {
throw e52440;

}
}
var G__52467 = cljs.core.next.call(null,seq__52429_52457__$1);
var G__52468 = null;
var G__52469 = (0);
var G__52470 = (0);
seq__52429_52444 = G__52467;
chunk__52430_52445 = G__52468;
count__52431_52446 = G__52469;
i__52432_52447 = G__52470;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_52428;
}} else {
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
var _ = reagent.impl.batching.mark_rendered.call(null,c);
var res = (((rat == null))?reagent.ratom.run_in_reaction.call(null,((function (rat,_,c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(rat,_,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = (c["cljsRatom"]);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38915__auto___52471 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38915__auto___52471;

} else {
}

return res;
}
}
})], null);
day8.re_frame.trace.monkey_patch_reagent = (function day8$re_frame$trace$monkey_patch_reagent(){
var real_custom_wrapper = reagent.impl.component.custom_wrapper;
var real_next_tick = reagent.impl.batching.next_tick;
var real_schedule = reagent.impl.batching.schedule;
reagent.impl.component.static_fns = day8.re_frame.trace.static_fns;

return reagent.impl.component.custom_wrapper = ((function (real_custom_wrapper,real_next_tick,real_schedule){
return (function (key,f){
var G__52472 = key;
var G__52472__$1 = (((G__52472 instanceof cljs.core.Keyword))?G__52472.fqn:null);
switch (G__52472__$1) {
case "componentWillUnmount":
return ((function (G__52472,G__52472__$1,real_custom_wrapper,real_next_tick,real_schedule){
return (function (){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_52473_52487 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),key,new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.last.call(null,clojure.string.split.call(null,day8.re_frame.trace.comp_name.call(null,c),/ > /)),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-path","component-path",-1014945685),reagent.impl.component.component_path.call(null,c),new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,(c["cljsRatom"]))], null)], null));

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38910__auto___52488 = re_frame.interop.now.call(null);
var duration__38911__auto___52489 = (end__38910__auto___52488 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__52474_52490 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__52475_52491 = null;
var count__52476_52492 = (0);
var i__52477_52493 = (0);
while(true){
if((i__52477_52493 < count__52476_52492)){
var vec__52478_52494 = cljs.core._nth.call(null,chunk__52475_52491,i__52477_52493);
var k__38912__auto___52495 = cljs.core.nth.call(null,vec__52478_52494,(0),null);
var cb__38913__auto___52496 = cljs.core.nth.call(null,vec__52478_52494,(1),null);
try{cb__38913__auto___52496.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38911__auto___52489,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e52481){if((e52481 instanceof java.lang.Exception)){
var e__38914__auto___52497 = e52481;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38912__auto___52495,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38914__auto___52497);
} else {
throw e52481;

}
}
var G__52498 = seq__52474_52490;
var G__52499 = chunk__52475_52491;
var G__52500 = count__52476_52492;
var G__52501 = (i__52477_52493 + (1));
seq__52474_52490 = G__52498;
chunk__52475_52491 = G__52499;
count__52476_52492 = G__52500;
i__52477_52493 = G__52501;
continue;
} else {
var temp__5290__auto___52502 = cljs.core.seq.call(null,seq__52474_52490);
if(temp__5290__auto___52502){
var seq__52474_52503__$1 = temp__5290__auto___52502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52474_52503__$1)){
var c__31180__auto___52504 = cljs.core.chunk_first.call(null,seq__52474_52503__$1);
var G__52505 = cljs.core.chunk_rest.call(null,seq__52474_52503__$1);
var G__52506 = c__31180__auto___52504;
var G__52507 = cljs.core.count.call(null,c__31180__auto___52504);
var G__52508 = (0);
seq__52474_52490 = G__52505;
chunk__52475_52491 = G__52506;
count__52476_52492 = G__52507;
i__52477_52493 = G__52508;
continue;
} else {
var vec__52482_52509 = cljs.core.first.call(null,seq__52474_52503__$1);
var k__38912__auto___52510 = cljs.core.nth.call(null,vec__52482_52509,(0),null);
var cb__38913__auto___52511 = cljs.core.nth.call(null,vec__52482_52509,(1),null);
try{cb__38913__auto___52511.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38911__auto___52489,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e52485){if((e52485 instanceof java.lang.Exception)){
var e__38914__auto___52512 = e52485;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38912__auto___52510,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38914__auto___52512);
} else {
throw e52485;

}
}
var G__52513 = cljs.core.next.call(null,seq__52474_52503__$1);
var G__52514 = null;
var G__52515 = (0);
var G__52516 = (0);
seq__52474_52490 = G__52513;
chunk__52475_52491 = G__52514;
count__52476_52492 = G__52515;
i__52477_52493 = G__52516;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_52473_52487;
}} else {
}

return real_custom_wrapper.call(null,key,f).call(c,c);
});
;})(G__52472,G__52472__$1,real_custom_wrapper,real_next_tick,real_schedule))

break;
default:
return real_custom_wrapper.call(null,key,f);

}
});})(real_custom_wrapper,real_next_tick,real_schedule))
;
});
day8.re_frame.trace.total_traces = re_frame.interop.ratom.call(null,(0));
day8.re_frame.trace.traces = re_frame.interop.ratom.call(null,cljs.core.PersistentVector.EMPTY);
day8.re_frame.trace.log_trace_QMARK_ = (function day8$re_frame$trace$log_trace_QMARK_(trace){
var rendering_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"render","render",-1408033454));
if(!(rendering_QMARK_)){
return true;
} else {
return !(clojure.string.includes_QMARK_.call(null,cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"component-path","component-path",-1014945685)], null),""),"day8.re_frame.trace"));
}
});
day8.re_frame.trace.disable_tracing_BANG_ = (function day8$re_frame$trace$disable_tracing_BANG_(){
return re_frame.trace.remove_trace_cb.call(null,new cljs.core.Keyword("day8.re-frame.trace","cb","day8.re-frame.trace/cb",1933032133));
});
day8.re_frame.trace.enable_tracing_BANG_ = (function day8$re_frame$trace$enable_tracing_BANG_(){
return re_frame.trace.register_trace_cb.call(null,new cljs.core.Keyword("day8.re-frame.trace","cb","day8.re-frame.trace/cb",1933032133),(function (new_traces){
var temp__5290__auto__ = cljs.core.filter.call(null,day8.re_frame.trace.log_trace_QMARK_,new_traces);
if(cljs.core.truth_(temp__5290__auto__)){
var new_traces__$1 = temp__5290__auto__;
cljs.core.swap_BANG_.call(null,day8.re_frame.trace.total_traces,cljs.core._PLUS_,cljs.core.count.call(null,new_traces__$1));

return cljs.core.swap_BANG_.call(null,day8.re_frame.trace.traces,((function (new_traces__$1,temp__5290__auto__){
return (function (existing){
var new$ = cljs.core.reduce.call(null,cljs.core.conj,existing,new_traces__$1);
var size = cljs.core.count.call(null,new$);
if(((4000) < size)){
var new2 = cljs.core.subvec.call(null,new$,(size - (2000)));
if((cljs.core.deref.call(null,day8.re_frame.trace.total_traces) < (20000))){
cljs.core.reset_BANG_.call(null,day8.re_frame.trace.total_traces,(0));

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new2);
} else {
return null;
}
} else {
return new$;
}
});})(new_traces__$1,temp__5290__auto__))
);
} else {
return null;
}
}));
});
/**
 * Sets up any initial state that needs to be there for tracing. Does not enable tracing.
 */
day8.re_frame.trace.init_tracing_BANG_ = (function day8$re_frame$trace$init_tracing_BANG_(){
return day8.re_frame.trace.monkey_patch_reagent.call(null);
});
day8.re_frame.trace.query__GT_fn = (function day8$re_frame$trace$query__GT_fn(query){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(query))){
return (function (trace){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace))].join('')),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query));
});
} else {
return (function (trace){
return (new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query) < new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(trace));
});
}
});
day8.re_frame.trace.add_filter = (function day8$re_frame$trace$add_filter(filter_items,filter_input,filter_type){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__52517_SHARP_){
return cljs.core._EQ_.call(null,filter_input,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__52517_SHARP_));
}),cljs.core.deref.call(null,filter_items)))){
return null;
} else {
if(cljs.core.truth_((function (){var and__30237__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),filter_type);
if(and__30237__auto__){
return cljs.core.some.call(null,((function (and__30237__auto__){
return (function (p1__52518_SHARP_){
return cljs.core._EQ_.call(null,filter_type,new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__52518_SHARP_));
});})(and__30237__auto__))
,cljs.core.deref.call(null,filter_items));
} else {
return and__30237__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,filter_items,(function (item){
return cljs.core.remove.call(null,(function (p1__52519_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__52519_SHARP_));
}),item);
}));
} else {
}

return cljs.core.swap_BANG_.call(null,filter_items,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.call(null,filter_type,new cljs.core.Keyword(null,"contains","contains",676899812)))?clojure.string.lower_case.call(null,filter_input):parseFloat(filter_input)),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735),filter_type], null));
}
});
day8.re_frame.trace.render_traces = (function day8$re_frame$trace$render_traces(visible_traces,filter_items,filter_input,trace_detail_expansions){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (index,p__52521){
var map__52522 = p__52521;
var map__52522__$1 = ((((!((map__52522 == null)))?((((map__52522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52522):map__52522);
var trace = map__52522__$1;
var op_type = cljs.core.get.call(null,map__52522__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var id = cljs.core.get.call(null,map__52522__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var operation = cljs.core.get.call(null,map__52522__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var tags = cljs.core.get.call(null,map__52522__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var duration = cljs.core.get.call(null,map__52522__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var show_row_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,trace_detail_expansions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,trace_detail_expansions)));
var op_name = ((cljs.core.vector_QMARK_.call(null,operation))?cljs.core.second.call(null,operation):operation);
var x__31203__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration){
return (function (ev){
return cljs.core.swap_BANG_.call(null,trace_detail_expansions,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),((function (show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration){
return (function (p1__52520_SHARP_){
if(cljs.core.truth_(show_row_QMARK_)){
return false;
} else {
return cljs.core.not.call(null,p1__52520_SHARP_);
}
});})(show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration))
);
});})(show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration))
,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trace--trace",(function (){var G__52525 = op_type;
var G__52525__$1 = (((G__52525 instanceof cljs.core.Keyword))?G__52525.fqn:null);
switch (G__52525__$1) {
case "sub/create":
return "trace--sub-create";

break;
case "sub/run":
return "trace--sub-run";

break;
case "event":
return "trace--event";

break;
case "render":
return "trace--render";

break;
case "re-frame.router/fsm-trigger":
return "trace--fsm-trigger";

break;
default:
return null;

}
})()], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--toggle","td.trace--toggle",1439700573),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(show_row_QMARK_)?"\u25BC":"\u25B6")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--op","td.trace--op",12927021),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.op-string","span.op-string",1365795266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration){
return (function (ev){
day8.re_frame.trace.add_filter.call(null,filter_items,cljs.core.name.call(null,op_type),new cljs.core.Keyword(null,"contains","contains",676899812));

return ev.stopPropagation();
});})(show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration))
], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_type)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--op-string","td.trace--op-string",806514025),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.op-string","span.op-string",1365795266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration){
return (function (ev){
day8.re_frame.trace.add_filter.call(null,filter_items,cljs.core.name.call(null,op_name),new cljs.core.Keyword(null,"contains","contains",676899812));

return ev.stopPropagation();
});})(show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration))
], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_name)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--meta","td.trace--meta",-1502909226),duration.toFixed((1))," ms"], null)], null);
return cljs.core._conj.call(null,(function (){var x__31203__auto____$1 = (cljs.core.truth_(show_row_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.trace--details","tr.trace--details",998262242),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-details"].join(''),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--details-tags","td.trace--details-tags",1722973599),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x__31203__auto__,show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration){
return (function (){
return console.log(tags);
});})(x__31203__auto__,show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.trace--details-tags-text","div.trace--details-tags-text",210345595),(function (){var tag_str = (function (){var sb__31374__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52528_52531 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52529_52532 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52528_52531,_STAR_print_fn_STAR_52529_52532,sb__31374__auto__,x__31203__auto__,show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration){
return (function (x__31375__auto__){
return sb__31374__auto__.append(x__31375__auto__);
});})(_STAR_print_newline_STAR_52528_52531,_STAR_print_fn_STAR_52529_52532,sb__31374__auto__,x__31203__auto__,show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration))
;

try{cljs.pprint.pprint.call(null,tags);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52529_52532;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52528_52531;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__31374__auto__)].join('');
})();
var string_size_limit = (400);
if((string_size_limit < cljs.core.count.call(null,tag_str))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,tag_str,(0),string_size_limit))," ..."].join('');
} else {
return tag_str;
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--meta.trace--details-icon","td.trace--meta.trace--details-icon",1686328364),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x__31203__auto__,show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration){
return (function (){
return console.log(tags);
});})(x__31203__auto__,show_row_QMARK_,op_name,map__52522,map__52522__$1,trace,op_type,id,operation,tags,duration))
], null)], null)], null):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31203__auto____$1);
})(),x__31203__auto__);
}),visible_traces));
});
day8.re_frame.trace.render_trace_panel = (function day8$re_frame$trace$render_trace_panel(){
var filter_input = reagent.core.atom.call(null,"");
var filter_items = reagent.core.atom.call(null,day8.re_frame.trace.localstorage.get.call(null,"filter-items",cljs.core.PersistentVector.EMPTY));
var filter_type = reagent.core.atom.call(null,new cljs.core.Keyword(null,"contains","contains",676899812));
var input_error = reagent.core.atom.call(null,false);
var categories = reagent.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword(null,"event","event",301435442),null], null), null));
var trace_detail_expansions = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-all?","show-all?",503618702),false,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs.core.PersistentArrayMap.EMPTY], null));
cljs.core.add_watch.call(null,filter_items,new cljs.core.Keyword(null,"update-localstorage","update-localstorage",190199195),((function (filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (_,___$1,___$2,new_state){
return day8.re_frame.trace.localstorage.save_BANG_.call(null,"filter-items",new_state);
});})(filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
);

return ((function (filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
var toggle_category_fn = ((function (filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (category_keys){
return cljs.core.swap_BANG_.call(null,categories,((function (filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (p1__52533_SHARP_){
if(cljs.core.truth_(clojure.set.superset_QMARK_.call(null,p1__52533_SHARP_,category_keys))){
return clojure.set.difference.call(null,p1__52533_SHARP_,category_keys);
} else {
return clojure.set.union.call(null,p1__52533_SHARP_,category_keys);
}
});})(filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
);
});})(filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
;
var visible_traces = (function (){var G__52537 = cljs.core.deref.call(null,day8.re_frame.trace.traces);
var G__52537__$1 = ((cljs.core.seq.call(null,cljs.core.deref.call(null,categories)))?cljs.core.filter.call(null,((function (G__52537,toggle_category_fn,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (trace){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,categories),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace))){
return trace;
} else {
return null;
}
});})(G__52537,toggle_category_fn,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
,G__52537):G__52537);
if(cljs.core.seq.call(null,cljs.core.deref.call(null,filter_items))){
return cljs.core.filter.call(null,cljs.core.apply.call(null,cljs.core.every_pred,cljs.core.map.call(null,day8.re_frame.trace.query__GT_fn,cljs.core.deref.call(null,filter_items))),G__52537__$1);
} else {
return G__52537__$1;
}
})();
var save_query = ((function (toggle_category_fn,visible_traces,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (_){
if(cljs.core.truth_((function (){var and__30237__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,filter_type),new cljs.core.Keyword(null,"slower-than","slower-than",1137227767));
if(and__30237__auto__){
return isNaN(parseFloat(cljs.core.deref.call(null,filter_input)));
} else {
return and__30237__auto__;
}
})())){
return cljs.core.reset_BANG_.call(null,input_error,true);
} else {
cljs.core.reset_BANG_.call(null,input_error,false);

return day8.re_frame.trace.add_filter.call(null,filter_items,cljs.core.deref.call(null,filter_input),cljs.core.deref.call(null,filter_type));
}
});})(toggle_category_fn,visible_traces,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-contents","div.tab-contents",-893703725),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter","div.filter",145823472),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-control","div.filter-control",1456858546),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-categories","ul.filter-categories",561361953),"show: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-category","li.filter-category",310802497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,categories),new cljs.core.Keyword(null,"event","event",301435442)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
return toggle_category_fn.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),null], null), null));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),"events"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-category","li.filter-category",310802497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,categories),new cljs.core.Keyword("sub","run","sub/run",-1821315581)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
return toggle_category_fn.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null], null), null));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),"subscriptions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-category","li.filter-category",310802497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,categories),new cljs.core.Keyword(null,"render","render",-1408033454)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
return toggle_category_fn.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),null], null), null));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),"reagent"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-category","li.filter-category",310802497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,categories),new cljs.core.Keyword("re-frame.router","fsm-trigger","re-frame.router/fsm-trigger",1379787274)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
return toggle_category_fn.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("re-frame.router","fsm-trigger","re-frame.router/fsm-trigger",1379787274),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null), null));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),"internals"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-fields","div.filter-fields",322405243),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,filter_type),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (p1__52534_SHARP_){
return cljs.core.reset_BANG_.call(null,filter_type,cljs.core.keyword.call(null,p1__52534_SHARP_.target.value));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contains"], null),"contains"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"slower-than"], null),"slower than"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-control-input","div.filter-control-input",1831328221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.components.search_input,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-save","on-save",1618176266),save_query,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (p1__52535_SHARP_){
return cljs.core.reset_BANG_.call(null,filter_input,p1__52535_SHARP_.target.value);
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,input_error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-error","div.input-error",968893592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),"Please enter a valid number."], null):null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-items","ul.filter-items",817035023),cljs.core.map.call(null,((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-item","li.filter-item",955031911),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (event){
return cljs.core.swap_BANG_.call(null,filter_items,((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (p1__52536_SHARP_){
return cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(item)),new cljs.core.Keyword(null,"query","query",-1288509510)),p1__52536_SHARP_);
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
);
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(item),": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.filter-item-string","span.filter-item-string",-274349574),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
,cljs.core.deref.call(null,filter_items))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.components.autoscroll_list,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-content-scrollable",new cljs.core.Keyword(null,"scroll?","scroll?",-1393045951),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead>tr","thead>tr",-1341733367),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-button","button.text-button",1574964044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (ev){
cljs.core.swap_BANG_.call(null,trace_detail_expansions,cljs.core.assoc,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.swap_BANG_.call(null,trace_detail_expansions,cljs.core.update,new cljs.core.Keyword(null,"show-all?","show-all?",503618702),cljs.core.not);
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),(cljs.core.truth_(new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,trace_detail_expansions)))?"-":"+")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"operations"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-items-count",(((cljs.core.count.call(null,cljs.core.deref.call(null,filter_items)) > (0)))?"active":null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
return cljs.core.reset_BANG_.call(null,filter_items,cljs.core.PersistentVector.EMPTY);
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),(((cljs.core.count.call(null,cljs.core.deref.call(null,filter_items)) > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,visible_traces))," of "].join(''):null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.deref.call(null,day8.re_frame.trace.traces)))].join('')], null)," events ",(((cljs.core.count.call(null,cljs.core.deref.call(null,day8.re_frame.trace.traces)) > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-button","button.text-button",1574964044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
re_frame.trace.reset_tracing_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,day8.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),"clear"], null),")"], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),"meta"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),day8.re_frame.trace.render_traces.call(null,visible_traces,filter_items,filter_input,trace_detail_expansions)], null)], null)], null)], null);
});
;})(filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
});
day8.re_frame.trace.resizer_style = (function day8$re_frame$trace$resizer_style(draggable_area){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((- (draggable_area / (2)))),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"10px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"col-resize"], null);
});
day8.re_frame.trace.ease_transition = "left 0.2s ease-out, top 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out";
day8.re_frame.trace.toggle_traces = (function day8$re_frame$trace$toggle_traces(showing_QMARK_){
if(cljs.core.truth_(cljs.core.deref.call(null,showing_QMARK_))){
return day8.re_frame.trace.enable_tracing_BANG_.call(null);
} else {
return day8.re_frame.trace.disable_tracing_BANG_.call(null);
}
});
day8.re_frame.trace.devtools = (function day8$re_frame$trace$devtools(){
var position = reagent.core.atom.call(null,new cljs.core.Keyword(null,"right","right",-452581833));
var panel_width_PERCENT_ = reagent.core.atom.call(null,day8.re_frame.trace.localstorage.get.call(null,"panel-width-ratio",0.35));
var showing_QMARK_ = reagent.core.atom.call(null,day8.re_frame.trace.localstorage.get.call(null,"show-panel",false));
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var pin_to_bottom_QMARK_ = reagent.core.atom.call(null,true);
var selected_tab = reagent.core.atom.call(null,day8.re_frame.trace.localstorage.get.call(null,"selected-tab",new cljs.core.Keyword(null,"traces","traces",-1301138004)));
var window_width = reagent.core.atom.call(null,window.innerWidth);
var handle_window_resize = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width){
return (function (e){
return cljs.core.reset_BANG_.call(null,window_width,window.innerWidth);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width))
;
var handle_keys = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize){
return (function (e){
var combo_key_QMARK_ = (function (){var or__30249__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
var or__30249__auto____$1 = e.metaKey;
if(cljs.core.truth_(or__30249__auto____$1)){
return or__30249__auto____$1;
} else {
return e.altKey;
}
}
})();
var tag_name = e.target.tagName;
var key = e.key;
var entering_input_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
if(cljs.core.truth_((function (){var and__30237__auto__ = !(entering_input_QMARK_);
if(and__30237__auto__){
return combo_key_QMARK_;
} else {
return and__30237__auto__;
}
})())){
if(cljs.core.truth_((function (){var and__30237__auto__ = cljs.core._EQ_.call(null,key,"h");
if(and__30237__auto__){
return e.ctrlKey;
} else {
return and__30237__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,showing_QMARK_,cljs.core.not);

day8.re_frame.trace.toggle_traces.call(null,showing_QMARK_);

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize))
;
var handle_mousemove = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys){
return (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,dragging_QMARK_))){
var x = e.clientX;
var y = e.clientY;
var new_window_width = window.innerWidth;
e.preventDefault();

cljs.core.reset_BANG_.call(null,panel_width_PERCENT_,(function (){var x__30601__auto__ = ((new_window_width - x) / new_window_width);
var y__30602__auto__ = 0.05;
return ((x__30601__auto__ > y__30602__auto__) ? x__30601__auto__ : y__30602__auto__);
})());

return cljs.core.reset_BANG_.call(null,window_width,new_window_width);
} else {
return null;
}
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys))
;
var handle_mouse_up = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove){
return (function (e){
return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove))
;
cljs.core.add_watch.call(null,panel_width_PERCENT_,new cljs.core.Keyword(null,"update-panel-width-ratio","update-panel-width-ratio",1319075268),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (_,___$1,___$2,new_state){
return day8.re_frame.trace.localstorage.save_BANG_.call(null,"panel-width-ratio",new_state);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
);

cljs.core.add_watch.call(null,showing_QMARK_,new cljs.core.Keyword(null,"update-show-panel","update-show-panel",-319694060),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (_,___$1,___$2,new_state){
return day8.re_frame.trace.localstorage.save_BANG_.call(null,"show-panel",new_state);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
);

cljs.core.add_watch.call(null,selected_tab,new cljs.core.Keyword(null,"update-selected-tab","update-selected-tab",326455910),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (_,___$1,___$2,new_state){
return day8.re_frame.trace.localstorage.save_BANG_.call(null,"selected-tab",new_state);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
);

return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
day8.re_frame.trace.toggle_traces.call(null,showing_QMARK_);

window.addEventListener("keydown",handle_keys);

window.addEventListener("mousemove",handle_mousemove);

window.addEventListener("mouseup",handle_mouse_up);

return window.addEventListener("resize",handle_window_resize);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
window.removeEventListener("keydown",handle_keys);

window.removeEventListener("mousemove",handle_mousemove);

window.removeEventListener("mouseup",handle_mouse_up);

return window.removeEventListener("resize",handle_window_resize);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"devtools outer",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
var draggable_area = (10);
var left = (cljs.core.truth_(cljs.core.deref.call(null,showing_QMARK_))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * ((1) - cljs.core.deref.call(null,panel_width_PERCENT_)))),"%"].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,window_width)),"px"].join(''));
var transition = (cljs.core.truth_(cljs.core.deref.call(null,dragging_QMARK_))?"":day8.re_frame.trace.ease_transition);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrapper","div.panel-wrapper",-807046921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"width","width",-384071477),"0px",new cljs.core.Keyword(null,"height","height",1025178622),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(99999999)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["rgba(0, 0, 0, 0.3) 0px 0px 4px",transition,"0px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((100) * cljs.core.deref.call(null,panel_width_PERCENT_)) | (0)) + (1))),"%"].join(''),"white",(1),"fixed","100%",left])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-resizer","div.panel-resizer",1762174164),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame.trace.resizer_style.call(null,draggable_area),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});})(draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-content","div.panel-content",-1191526548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-content-top","div.panel-content-top",2122112306),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav","div.nav",-1805454552),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["tab button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_tab),new cljs.core.Keyword(null,"traces","traces",-1301138004)))?"active":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
return cljs.core.reset_BANG_.call(null,selected_tab,new cljs.core.Keyword(null,"traces","traces",-1301138004));
});})(draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
], null),"Traces"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["tab button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_tab),new cljs.core.Keyword(null,"app-db","app-db",865606302)))?"active":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
return cljs.core.reset_BANG_.call(null,selected_tab,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
], null),"App DB"], null)], null)], null),(function (){var G__52538 = cljs.core.deref.call(null,selected_tab);
var G__52538__$1 = (((G__52538 instanceof cljs.core.Keyword))?G__52538.fqn:null);
switch (G__52538__$1) {
case "traces":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.render_trace_panel], null);

break;
case "app-db":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.app_db.render_state,re_frame.db.app_db], null);

break;
case "subvis":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.subvis.render_subvis,day8.re_frame.trace.traces,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-content-scrollable","div.panel-content-scrollable",-1722397406)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.app_db.render_state,re_frame.db.app_db], null);

}
})()], null)], null)], null);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
], null));
});
day8.re_frame.trace.panel_div = (function day8$re_frame$trace$panel_div(){
var id = "--re-frame-trace--";
var panel = document.getElementById(id);
if(cljs.core.truth_(panel)){
return panel;
} else {
var new_panel = document.createElement("div");
new_panel.setAttribute("id",id);

document.body.appendChild(new_panel);

window.focus(new_panel);

return new_panel;
}
});
day8.re_frame.trace.inject_styles = (function day8$re_frame$trace$inject_styles(){
var id = "--re-frame-trace-styles--";
var styles_el = document.getElementById(id);
var new_styles_el = document.createElement("style");
var new_styles = day8.re_frame.trace.styles.panel_styles;
new_styles_el.setAttribute("id",id);

new_styles_el.innerHTML = new_styles;

if(cljs.core.truth_(styles_el)){
return styles_el.parentNode.replaceChild(new_styles_el,styles_el);
} else {
document.head.appendChild(new_styles_el);

return new_styles_el;
}
});
day8.re_frame.trace.inject_devtools_BANG_ = (function day8$re_frame$trace$inject_devtools_BANG_(){
day8.re_frame.trace.inject_styles.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.devtools], null),day8.re_frame.trace.panel_div.call(null));
});

//# sourceMappingURL=trace.js.map?rel=1509397953782
