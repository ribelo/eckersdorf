// Compiled by ClojureScript 1.9.946 {}
goog.provide('day8.re_frame.trace.graph');
goog.require('cljs.core');
goog.require('clojure.set');
day8.re_frame.trace.graph.select_type = (function day8$re_frame$trace$graph$select_type(type,traces){
return cljs.core.filter.call(null,(function (p1__53167_SHARP_){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(p1__53167_SHARP_));
}),traces);
});
day8.re_frame.trace.graph.get_reaction = (function day8$re_frame$trace$graph$get_reaction(trace){
return cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"reaction","reaction",490869788)], null));
});
/**
 * Returns a lazy sequence of the elements of coll with duplicates removed.
 */
day8.re_frame.trace.graph.distinct_k = (function day8$re_frame$trace$graph$distinct_k(key_fn,coll){
var step = (function day8$re_frame$trace$graph$distinct_k_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__53168,seen__$1){
while(true){
var vec__53169 = p__53168;
var f = cljs.core.nth.call(null,vec__53169,(0),null);
var xs__$1 = vec__53169;
var temp__5457__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5457__auto__){
var s = temp__5457__auto__;
var f_fn = key_fn.call(null,f);
if(cljs.core.contains_QMARK_.call(null,seen__$1,f_fn)){
var G__53172 = cljs.core.rest.call(null,s);
var G__53173 = seen__$1;
p__53168 = G__53172;
seen__$1 = G__53173;
continue;
} else {
return cljs.core.cons.call(null,f,day8$re_frame$trace$graph$distinct_k_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,f_fn)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
day8.re_frame.trace.graph.select_links = (function day8$re_frame$trace$graph$select_links(traces,type,disposed_ids,link_val){
return day8.re_frame.trace.graph.distinct_k.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.mapcat.call(null,(function (trace){
var iter__31405__auto__ = (function day8$re_frame$trace$graph$select_links_$_iter__53175(s__53176){
return (new cljs.core.LazySeq(null,(function (){
var s__53176__$1 = s__53176;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__53176__$1);
if(temp__5457__auto__){
var s__53176__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53176__$2)){
var c__31403__auto__ = cljs.core.chunk_first.call(null,s__53176__$2);
var size__31404__auto__ = cljs.core.count.call(null,c__31403__auto__);
var b__53178 = cljs.core.chunk_buffer.call(null,size__31404__auto__);
if((function (){var i__53177 = (0);
while(true){
if((i__53177 < size__31404__auto__)){
var input_signal = cljs.core._nth.call(null,c__31403__auto__,i__53177);
var reaction = day8.re_frame.trace.graph.get_reaction.call(null,trace);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_signal,reaction], null))){
cljs.core.chunk_append.call(null,b__53178,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"source","source",-433931539),input_signal,new cljs.core.Keyword(null,"target","target",253001721),reaction,new cljs.core.Keyword(null,"value","value",305978217),link_val,new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_signal),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction)].join('')], null));

var G__53179 = (i__53177 + (1));
i__53177 = G__53179;
continue;
} else {
var G__53180 = (i__53177 + (1));
i__53177 = G__53180;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53178),day8$re_frame$trace$graph$select_links_$_iter__53175.call(null,cljs.core.chunk_rest.call(null,s__53176__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53178),null);
}
} else {
var input_signal = cljs.core.first.call(null,s__53176__$2);
var reaction = day8.re_frame.trace.graph.get_reaction.call(null,trace);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_signal,reaction], null))){
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"source","source",-433931539),input_signal,new cljs.core.Keyword(null,"target","target",253001721),reaction,new cljs.core.Keyword(null,"value","value",305978217),link_val,new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_signal),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction)].join('')], null),day8$re_frame$trace$graph$select_links_$_iter__53175.call(null,cljs.core.rest.call(null,s__53176__$2)));
} else {
var G__53181 = cljs.core.rest.call(null,s__53176__$2);
s__53176__$1 = G__53181;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31405__auto__.call(null,cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"input-signals","input-signals",563633497)], null)));
}),cljs.core.remove.call(null,(function (p1__53174_SHARP_){
return cljs.core.contains_QMARK_.call(null,disposed_ids,day8.re_frame.trace.graph.get_reaction.call(null,p1__53174_SHARP_));
}),day8.re_frame.trace.graph.select_type.call(null,type,traces))));
});
day8.re_frame.trace.graph.select_sub_nodes = (function day8$re_frame$trace$graph$select_sub_nodes(traces,type,disposed_ids,r){
return day8.re_frame.trace.graph.distinct_k.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.map.call(null,(function (trace){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame.trace.graph.get_reaction.call(null,trace),new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace))].join(''),new cljs.core.Keyword(null,"group","group",582596132),(2),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"data","data",-232669377),trace], null);
}),cljs.core.remove.call(null,(function (p1__53183_SHARP_){
return cljs.core.get_in.call(null,p1__53183_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"cached?","cached?",86081880)], null));
}),cljs.core.remove.call(null,(function (p1__53182_SHARP_){
return cljs.core.contains_QMARK_.call(null,disposed_ids,day8.re_frame.trace.graph.get_reaction.call(null,p1__53182_SHARP_));
}),day8.re_frame.trace.graph.select_type.call(null,type,traces)))));
});
day8.re_frame.trace.graph.select_view_nodes = (function day8$re_frame$trace$graph$select_view_nodes(traces,type,unmounted_components,r){
return day8.re_frame.trace.graph.distinct_k.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.remove.call(null,(function (p1__53185_SHARP_){
return (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53185_SHARP_) == null);
}),cljs.core.map.call(null,(function (trace){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame.trace.graph.get_reaction.call(null,trace),new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace))].join(''),new cljs.core.Keyword(null,"group","group",582596132),(3),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"data","data",-232669377),trace,new cljs.core.Keyword(null,"fx","fx",-1237829572),(350)], null);
}),cljs.core.remove.call(null,(function (p1__53184_SHARP_){
return cljs.core.contains_QMARK_.call(null,unmounted_components,day8.re_frame.trace.graph.get_reaction.call(null,p1__53184_SHARP_));
}),day8.re_frame.trace.graph.select_type.call(null,type,traces)))));
});
day8.re_frame.trace.graph.trace__GT_sub_graph = (function day8$re_frame$trace$graph$trace__GT_sub_graph(traces,extra_nodes){
var disposed_ids = cljs.core.set.call(null,cljs.core.map.call(null,day8.re_frame.trace.graph.get_reaction,day8.re_frame.trace.graph.select_type.call(null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),traces)));
var unmounted_components = cljs.core.set.call(null,cljs.core.map.call(null,day8.re_frame.trace.graph.get_reaction,day8.re_frame.trace.graph.select_type.call(null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),traces)));
var sub_nodes = day8.re_frame.trace.graph.select_sub_nodes.call(null,traces,new cljs.core.Keyword("sub","create","sub/create",-1301317560),disposed_ids,(10));
var view_nodes = null;
var sub_links = day8.re_frame.trace.graph.select_links.call(null,traces,new cljs.core.Keyword("sub","run","sub/run",-1821315581),disposed_ids,(1));
var view_links = null;
var all_nodes = cljs.core.concat.call(null,extra_nodes,sub_nodes,view_nodes);
var node_ids = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),all_nodes));
var nodes_links = cljs.core.set.call(null,cljs.core.mapcat.call(null,((function (disposed_ids,unmounted_components,sub_nodes,view_nodes,sub_links,view_links,all_nodes,node_ids){
return (function (p__53187){
var map__53188 = p__53187;
var map__53188__$1 = ((((!((map__53188 == null)))?((((map__53188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53188):map__53188);
var source = cljs.core.get.call(null,map__53188__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.call(null,map__53188__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source,target], null);
});})(disposed_ids,unmounted_components,sub_nodes,view_nodes,sub_links,view_links,all_nodes,node_ids))
,view_links));
var missing_nodes = clojure.set.difference.call(null,nodes_links,node_ids);
var view_links__$1 = cljs.core.remove.call(null,((function (disposed_ids,unmounted_components,sub_nodes,view_nodes,sub_links,view_links,all_nodes,node_ids,nodes_links,missing_nodes){
return (function (p1__53186_SHARP_){
return cljs.core.get.call(null,missing_nodes,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(p1__53186_SHARP_));
});})(disposed_ids,unmounted_components,sub_nodes,view_nodes,sub_links,view_links,all_nodes,node_ids,nodes_links,missing_nodes))
,view_links);
var all_links = cljs.core.concat.call(null,sub_links,view_links__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),all_nodes,new cljs.core.Keyword(null,"links","links",-654507394),all_links], null);
});

//# sourceMappingURL=graph.js.map?rel=1510703510342
