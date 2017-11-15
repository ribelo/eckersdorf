// Compiled by ClojureScript 1.9.946 {}
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
var n = (function (){var or__30522__auto__ = reagent.impl.component.component_path.call(null,c);
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
var G__53231 = c;
var G__53231__$1 = (((G__53231 == null))?null:G__53231.constructor);
if((G__53231__$1 == null)){
return null;
} else {
return reagent.impl.util.fun_name.call(null,G__53231__$1);
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
var _STAR_current_trace_STAR_53232 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-path","component-path",-1014945685),reagent.impl.component.component_path.call(null,c)], null),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.last.call(null,clojure.string.split.call(null,reagent.impl.component.component_path.call(null,c),/ > /))], null));

try{try{if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
var _ = reagent.impl.batching.mark_rendered.call(null,c);
var res = (((rat == null))?reagent.ratom.run_in_reaction.call(null,((function (rat,_,_STAR_current_trace_STAR_53232,c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(rat,_,_STAR_current_trace_STAR_53232,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = (c["cljsRatom"]);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34775__auto___53245 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34775__auto___53245;

} else {
}

return res;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__34770__auto___53246 = re_frame.interop.now.call(null);
var duration__34771__auto___53247 = (end__34770__auto___53246 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__53233_53248 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__53234_53249 = null;
var count__53235_53250 = (0);
var i__53236_53251 = (0);
while(true){
if((i__53236_53251 < count__53235_53250)){
var vec__53237_53252 = cljs.core._nth.call(null,chunk__53234_53249,i__53236_53251);
var k__34772__auto___53253 = cljs.core.nth.call(null,vec__53237_53252,(0),null);
var cb__34773__auto___53254 = cljs.core.nth.call(null,vec__53237_53252,(1),null);
try{cb__34773__auto___53254.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34771__auto___53247,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e53240){if((e53240 instanceof java.lang.Exception)){
var e__34774__auto___53255 = e53240;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34772__auto___53253,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34774__auto___53255);
} else {
throw e53240;

}
}
var G__53256 = seq__53233_53248;
var G__53257 = chunk__53234_53249;
var G__53258 = count__53235_53250;
var G__53259 = (i__53236_53251 + (1));
seq__53233_53248 = G__53256;
chunk__53234_53249 = G__53257;
count__53235_53250 = G__53258;
i__53236_53251 = G__53259;
continue;
} else {
var temp__5457__auto___53260 = cljs.core.seq.call(null,seq__53233_53248);
if(temp__5457__auto___53260){
var seq__53233_53261__$1 = temp__5457__auto___53260;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53233_53261__$1)){
var c__31454__auto___53262 = cljs.core.chunk_first.call(null,seq__53233_53261__$1);
var G__53263 = cljs.core.chunk_rest.call(null,seq__53233_53261__$1);
var G__53264 = c__31454__auto___53262;
var G__53265 = cljs.core.count.call(null,c__31454__auto___53262);
var G__53266 = (0);
seq__53233_53248 = G__53263;
chunk__53234_53249 = G__53264;
count__53235_53250 = G__53265;
i__53236_53251 = G__53266;
continue;
} else {
var vec__53241_53267 = cljs.core.first.call(null,seq__53233_53261__$1);
var k__34772__auto___53268 = cljs.core.nth.call(null,vec__53241_53267,(0),null);
var cb__34773__auto___53269 = cljs.core.nth.call(null,vec__53241_53267,(1),null);
try{cb__34773__auto___53269.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34771__auto___53247,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e53244){if((e53244 instanceof java.lang.Exception)){
var e__34774__auto___53270 = e53244;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34772__auto___53268,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34774__auto___53270);
} else {
throw e53244;

}
}
var G__53271 = cljs.core.next.call(null,seq__53233_53261__$1);
var G__53272 = null;
var G__53273 = (0);
var G__53274 = (0);
seq__53233_53248 = G__53271;
chunk__53234_53249 = G__53272;
count__53235_53250 = G__53273;
i__53236_53251 = G__53274;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_53232;
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
var new_trace__34775__auto___53275 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34775__auto___53275;

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
var G__53276 = key;
var G__53276__$1 = (((G__53276 instanceof cljs.core.Keyword))?G__53276.fqn:null);
switch (G__53276__$1) {
case "componentWillUnmount":
return ((function (G__53276,G__53276__$1,real_custom_wrapper,real_next_tick,real_schedule){
return (function (){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_53277_53291 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),key,new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.last.call(null,clojure.string.split.call(null,day8.re_frame.trace.comp_name.call(null,c),/ > /)),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-path","component-path",-1014945685),reagent.impl.component.component_path.call(null,c),new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,(c["cljsRatom"]))], null)], null));

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__34770__auto___53292 = re_frame.interop.now.call(null);
var duration__34771__auto___53293 = (end__34770__auto___53292 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__53278_53294 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__53279_53295 = null;
var count__53280_53296 = (0);
var i__53281_53297 = (0);
while(true){
if((i__53281_53297 < count__53280_53296)){
var vec__53282_53298 = cljs.core._nth.call(null,chunk__53279_53295,i__53281_53297);
var k__34772__auto___53299 = cljs.core.nth.call(null,vec__53282_53298,(0),null);
var cb__34773__auto___53300 = cljs.core.nth.call(null,vec__53282_53298,(1),null);
try{cb__34773__auto___53300.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34771__auto___53293,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e53285){if((e53285 instanceof java.lang.Exception)){
var e__34774__auto___53301 = e53285;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34772__auto___53299,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34774__auto___53301);
} else {
throw e53285;

}
}
var G__53302 = seq__53278_53294;
var G__53303 = chunk__53279_53295;
var G__53304 = count__53280_53296;
var G__53305 = (i__53281_53297 + (1));
seq__53278_53294 = G__53302;
chunk__53279_53295 = G__53303;
count__53280_53296 = G__53304;
i__53281_53297 = G__53305;
continue;
} else {
var temp__5457__auto___53306 = cljs.core.seq.call(null,seq__53278_53294);
if(temp__5457__auto___53306){
var seq__53278_53307__$1 = temp__5457__auto___53306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53278_53307__$1)){
var c__31454__auto___53308 = cljs.core.chunk_first.call(null,seq__53278_53307__$1);
var G__53309 = cljs.core.chunk_rest.call(null,seq__53278_53307__$1);
var G__53310 = c__31454__auto___53308;
var G__53311 = cljs.core.count.call(null,c__31454__auto___53308);
var G__53312 = (0);
seq__53278_53294 = G__53309;
chunk__53279_53295 = G__53310;
count__53280_53296 = G__53311;
i__53281_53297 = G__53312;
continue;
} else {
var vec__53286_53313 = cljs.core.first.call(null,seq__53278_53307__$1);
var k__34772__auto___53314 = cljs.core.nth.call(null,vec__53286_53313,(0),null);
var cb__34773__auto___53315 = cljs.core.nth.call(null,vec__53286_53313,(1),null);
try{cb__34773__auto___53315.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34771__auto___53293,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e53289){if((e53289 instanceof java.lang.Exception)){
var e__34774__auto___53316 = e53289;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34772__auto___53314,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34774__auto___53316);
} else {
throw e53289;

}
}
var G__53317 = cljs.core.next.call(null,seq__53278_53307__$1);
var G__53318 = null;
var G__53319 = (0);
var G__53320 = (0);
seq__53278_53294 = G__53317;
chunk__53279_53295 = G__53318;
count__53280_53296 = G__53319;
i__53281_53297 = G__53320;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_53277_53291;
}} else {
}

return real_custom_wrapper.call(null,key,f).call(c,c);
});
;})(G__53276,G__53276__$1,real_custom_wrapper,real_next_tick,real_schedule))

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
var temp__5457__auto__ = cljs.core.filter.call(null,day8.re_frame.trace.log_trace_QMARK_,new_traces);
if(cljs.core.truth_(temp__5457__auto__)){
var new_traces__$1 = temp__5457__auto__;
cljs.core.swap_BANG_.call(null,day8.re_frame.trace.total_traces,cljs.core._PLUS_,cljs.core.count.call(null,new_traces__$1));

return cljs.core.swap_BANG_.call(null,day8.re_frame.trace.traces,((function (new_traces__$1,temp__5457__auto__){
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
});})(new_traces__$1,temp__5457__auto__))
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
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__53321_SHARP_){
return cljs.core._EQ_.call(null,filter_input,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__53321_SHARP_));
}),cljs.core.deref.call(null,filter_items)))){
return null;
} else {
if(cljs.core.truth_((function (){var and__30510__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),filter_type);
if(and__30510__auto__){
return cljs.core.some.call(null,((function (and__30510__auto__){
return (function (p1__53322_SHARP_){
return cljs.core._EQ_.call(null,filter_type,new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__53322_SHARP_));
});})(and__30510__auto__))
,cljs.core.deref.call(null,filter_items));
} else {
return and__30510__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,filter_items,(function (item){
return cljs.core.remove.call(null,(function (p1__53323_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__53323_SHARP_));
}),item);
}));
} else {
}

return cljs.core.swap_BANG_.call(null,filter_items,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.call(null,filter_type,new cljs.core.Keyword(null,"contains","contains",676899812)))?clojure.string.lower_case.call(null,filter_input):parseFloat(filter_input)),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735),filter_type], null));
}
});
day8.re_frame.trace.render_traces = (function day8$re_frame$trace$render_traces(visible_traces,filter_items,filter_input,trace_detail_expansions){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (index,p__53325){
var map__53326 = p__53325;
var map__53326__$1 = ((((!((map__53326 == null)))?((((map__53326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53326):map__53326);
var trace = map__53326__$1;
var op_type = cljs.core.get.call(null,map__53326__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var id = cljs.core.get.call(null,map__53326__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var operation = cljs.core.get.call(null,map__53326__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var tags = cljs.core.get.call(null,map__53326__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var duration = cljs.core.get.call(null,map__53326__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var show_row_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,trace_detail_expansions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,trace_detail_expansions)));
var op_name = ((cljs.core.vector_QMARK_.call(null,operation))?cljs.core.second.call(null,operation):operation);
var x__31477__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration){
return (function (ev){
return cljs.core.swap_BANG_.call(null,trace_detail_expansions,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),((function (show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration){
return (function (p1__53324_SHARP_){
if(cljs.core.truth_(show_row_QMARK_)){
return false;
} else {
return cljs.core.not.call(null,p1__53324_SHARP_);
}
});})(show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration))
);
});})(show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration))
,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trace--trace",(function (){var G__53329 = op_type;
var G__53329__$1 = (((G__53329 instanceof cljs.core.Keyword))?G__53329.fqn:null);
switch (G__53329__$1) {
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
})()], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--toggle","td.trace--toggle",1439700573),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(show_row_QMARK_)?"\u25BC":"\u25B6")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--op","td.trace--op",12927021),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.op-string","span.op-string",1365795266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration){
return (function (ev){
day8.re_frame.trace.add_filter.call(null,filter_items,cljs.core.name.call(null,op_type),new cljs.core.Keyword(null,"contains","contains",676899812));

return ev.stopPropagation();
});})(show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration))
], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_type)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--op-string","td.trace--op-string",806514025),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.op-string","span.op-string",1365795266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration){
return (function (ev){
day8.re_frame.trace.add_filter.call(null,filter_items,cljs.core.name.call(null,op_name),new cljs.core.Keyword(null,"contains","contains",676899812));

return ev.stopPropagation();
});})(show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration))
], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_name)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--meta","td.trace--meta",-1502909226),duration.toFixed((1))," ms"], null)], null);
return cljs.core._conj.call(null,(function (){var x__31477__auto____$1 = (cljs.core.truth_(show_row_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.trace--details","tr.trace--details",998262242),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-details"].join(''),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--details-tags","td.trace--details-tags",1722973599),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x__31477__auto__,show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration){
return (function (){
return console.log(tags);
});})(x__31477__auto__,show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.trace--details-tags-text","div.trace--details-tags-text",210345595),(function (){var tag_str = (function (){var sb__31650__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_53332_53335 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_53333_53336 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_53332_53335,_STAR_print_fn_STAR_53333_53336,sb__31650__auto__,x__31477__auto__,show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration){
return (function (x__31651__auto__){
return sb__31650__auto__.append(x__31651__auto__);
});})(_STAR_print_newline_STAR_53332_53335,_STAR_print_fn_STAR_53333_53336,sb__31650__auto__,x__31477__auto__,show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration))
;

try{cljs.pprint.pprint.call(null,tags);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53333_53336;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_53332_53335;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__31650__auto__)].join('');
})();
var string_size_limit = (400);
if((string_size_limit < cljs.core.count.call(null,tag_str))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,tag_str,(0),string_size_limit))," ..."].join('');
} else {
return tag_str;
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--meta.trace--details-icon","td.trace--meta.trace--details-icon",1686328364),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x__31477__auto__,show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration){
return (function (){
return console.log(tags);
});})(x__31477__auto__,show_row_QMARK_,op_name,map__53326,map__53326__$1,trace,op_type,id,operation,tags,duration))
], null)], null)], null):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31477__auto____$1);
})(),x__31477__auto__);
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
return (function (p1__53337_SHARP_){
if(cljs.core.truth_(clojure.set.superset_QMARK_.call(null,p1__53337_SHARP_,category_keys))){
return clojure.set.difference.call(null,p1__53337_SHARP_,category_keys);
} else {
return clojure.set.union.call(null,p1__53337_SHARP_,category_keys);
}
});})(filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
);
});})(filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
;
var visible_traces = (function (){var G__53341 = cljs.core.deref.call(null,day8.re_frame.trace.traces);
var G__53341__$1 = ((cljs.core.seq.call(null,cljs.core.deref.call(null,categories)))?cljs.core.filter.call(null,((function (G__53341,toggle_category_fn,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (trace){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,categories),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace))){
return trace;
} else {
return null;
}
});})(G__53341,toggle_category_fn,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
,G__53341):G__53341);
if(cljs.core.seq.call(null,cljs.core.deref.call(null,filter_items))){
return cljs.core.filter.call(null,cljs.core.apply.call(null,cljs.core.every_pred,cljs.core.map.call(null,day8.re_frame.trace.query__GT_fn,cljs.core.deref.call(null,filter_items))),G__53341__$1);
} else {
return G__53341__$1;
}
})();
var save_query = ((function (toggle_category_fn,visible_traces,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (_){
if(cljs.core.truth_((function (){var and__30510__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,filter_type),new cljs.core.Keyword(null,"slower-than","slower-than",1137227767));
if(and__30510__auto__){
return isNaN(parseFloat(cljs.core.deref.call(null,filter_input)));
} else {
return and__30510__auto__;
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
return (function (p1__53338_SHARP_){
return cljs.core.reset_BANG_.call(null,filter_type,cljs.core.keyword.call(null,p1__53338_SHARP_.target.value));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contains"], null),"contains"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"slower-than"], null),"slower than"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-control-input","div.filter-control-input",1831328221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.components.search_input,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-save","on-save",1618176266),save_query,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (p1__53339_SHARP_){
return cljs.core.reset_BANG_.call(null,filter_input,p1__53339_SHARP_.target.value);
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,input_error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-error","div.input-error",968893592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),"Please enter a valid number."], null):null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-items","ul.filter-items",817035023),cljs.core.map.call(null,((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-item","li.filter-item",955031911),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (event){
return cljs.core.swap_BANG_.call(null,filter_items,((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (p1__53340_SHARP_){
return cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(item)),new cljs.core.Keyword(null,"query","query",-1288509510)),p1__53340_SHARP_);
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
var combo_key_QMARK_ = (function (){var or__30522__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
var or__30522__auto____$1 = e.metaKey;
if(cljs.core.truth_(or__30522__auto____$1)){
return or__30522__auto____$1;
} else {
return e.altKey;
}
}
})();
var tag_name = e.target.tagName;
var key = e.key;
var entering_input_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
if(cljs.core.truth_((function (){var and__30510__auto__ = !(entering_input_QMARK_);
if(and__30510__auto__){
return combo_key_QMARK_;
} else {
return and__30510__auto__;
}
})())){
if(cljs.core.truth_((function (){var and__30510__auto__ = cljs.core._EQ_.call(null,key,"h");
if(and__30510__auto__){
return e.ctrlKey;
} else {
return and__30510__auto__;
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

cljs.core.reset_BANG_.call(null,panel_width_PERCENT_,(function (){var x__30875__auto__ = ((new_window_width - x) / new_window_width);
var y__30876__auto__ = 0.05;
return ((x__30875__auto__ > y__30876__auto__) ? x__30875__auto__ : y__30876__auto__);
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
], null),"App DB"], null)], null)], null),(function (){var G__53342 = cljs.core.deref.call(null,selected_tab);
var G__53342__$1 = (((G__53342 instanceof cljs.core.Keyword))?G__53342.fqn:null);
switch (G__53342__$1) {
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

//# sourceMappingURL=trace.js.map?rel=1510703510559
