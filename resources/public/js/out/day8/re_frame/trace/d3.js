// Compiled by ClojureScript 1.9.946 {}
goog.provide('day8.re_frame.trace.d3');
goog.require('cljs.core');
goog.require('reagent.core');
day8.re_frame.trace.d3.no_op = (function day8$re_frame$trace$d3$no_op(desc){
return (function() { 
var G__53120__delegate = function (args){
return null;
};
var G__53120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53121__i = 0, G__53121__a = new Array(arguments.length -  0);
while (G__53121__i < G__53121__a.length) {G__53121__a[G__53121__i] = arguments[G__53121__i + 0]; ++G__53121__i;}
  args = new cljs.core.IndexedSeq(G__53121__a,0,null);
} 
return G__53120__delegate.call(this,args);};
G__53120.cljs$lang$maxFixedArity = 0;
G__53120.cljs$lang$applyTo = (function (arglist__53122){
var args = cljs.core.seq(arglist__53122);
return G__53120__delegate(args);
});
G__53120.cljs$core$IFn$_invoke$arity$variadic = G__53120__delegate;
return G__53120;
})()
;
});
day8.re_frame.trace.d3.component_did_update = (function day8$re_frame$trace$d3$component_did_update(p__53123,ratoms){
var map__53124 = p__53123;
var map__53124__$1 = ((((!((map__53124 == null)))?((((map__53124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53124):map__53124);
var d3_update = cljs.core.get.call(null,map__53124__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552));
return cljs.core.apply.call(null,d3_update,ratoms);
});
day8.re_frame.trace.d3.component_did_mount = (function day8$re_frame$trace$d3$component_did_mount(p__53126,ratoms){
var map__53127 = p__53126;
var map__53127__$1 = ((((!((map__53127 == null)))?((((map__53127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53127):map__53127);
var lifecycle_fns = map__53127__$1;
var d3_once = cljs.core.get.call(null,map__53127__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478));
cljs.core.apply.call(null,d3_once,ratoms);

return day8.re_frame.trace.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});
/**
 * Creates a bridging component from Reagent to D3. Takes a map of
 *   lifecycle functions, and reactive data sources.
 * 
 *   :render-component - Render the outer Reagent component, and a place for your D3 component to mount to (probably an SVG element)
 *   :d3-once - Function called after the component has been rendered, for you to setup anything you need in D3 (e.g. adding <g> or classes)
 *   :d3-update - Run the D3 general update pattern: https://bl.ocks.org/mbostock/3808218
 *   
 */
day8.re_frame.trace.d3.create_d3 = (function day8$re_frame$trace$d3$create_d3(var_args){
var args__31808__auto__ = [];
var len__31801__auto___53138 = arguments.length;
var i__31802__auto___53139 = (0);
while(true){
if((i__31802__auto___53139 < len__31801__auto___53138)){
args__31808__auto__.push((arguments[i__31802__auto___53139]));

var G__53140 = (i__31802__auto___53139 + (1));
i__31802__auto___53139 = G__53140;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic = (function (p__53131,ratoms){
var map__53132 = p__53131;
var map__53132__$1 = ((((!((map__53132 == null)))?((((map__53132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53132):map__53132);
var render_component = cljs.core.get.call(null,map__53132__$1,new cljs.core.Keyword(null,"render-component","render-component",21088873),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
var d3_once = cljs.core.get.call(null,map__53132__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-did-mount","d3-did-mount",1382769638)));
var d3_update = cljs.core.get.call(null,map__53132__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552)));
var lifecycle_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-component","render-component",21088873),render_component,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),d3_once,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),d3_update], null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (lifecycle_fns,map__53132,map__53132__$1,render_component,d3_once,d3_update){
return (function (){
var seq__53134_53141 = cljs.core.seq.call(null,ratoms);
var chunk__53135_53142 = null;
var count__53136_53143 = (0);
var i__53137_53144 = (0);
while(true){
if((i__53137_53144 < count__53136_53143)){
var r_53145 = cljs.core._nth.call(null,chunk__53135_53142,i__53137_53144);
cljs.core.deref.call(null,r_53145);

var G__53146 = seq__53134_53141;
var G__53147 = chunk__53135_53142;
var G__53148 = count__53136_53143;
var G__53149 = (i__53137_53144 + (1));
seq__53134_53141 = G__53146;
chunk__53135_53142 = G__53147;
count__53136_53143 = G__53148;
i__53137_53144 = G__53149;
continue;
} else {
var temp__5457__auto___53150 = cljs.core.seq.call(null,seq__53134_53141);
if(temp__5457__auto___53150){
var seq__53134_53151__$1 = temp__5457__auto___53150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53134_53151__$1)){
var c__31453__auto___53152 = cljs.core.chunk_first.call(null,seq__53134_53151__$1);
var G__53153 = cljs.core.chunk_rest.call(null,seq__53134_53151__$1);
var G__53154 = c__31453__auto___53152;
var G__53155 = cljs.core.count.call(null,c__31453__auto___53152);
var G__53156 = (0);
seq__53134_53141 = G__53153;
chunk__53135_53142 = G__53154;
count__53136_53143 = G__53155;
i__53137_53144 = G__53156;
continue;
} else {
var r_53157 = cljs.core.first.call(null,seq__53134_53151__$1);
cljs.core.deref.call(null,r_53157);

var G__53158 = cljs.core.next.call(null,seq__53134_53151__$1);
var G__53159 = null;
var G__53160 = (0);
var G__53161 = (0);
seq__53134_53141 = G__53158;
chunk__53135_53142 = G__53159;
count__53136_53143 = G__53160;
i__53137_53144 = G__53161;
continue;
}
} else {
}
}
break;
}

return cljs.core.apply.call(null,render_component,ratoms);
});})(lifecycle_fns,map__53132,map__53132__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (lifecycle_fns,map__53132,map__53132__$1,render_component,d3_once,d3_update){
return (function (this$){
return day8.re_frame.trace.d3.component_did_mount.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__53132,map__53132__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (lifecycle_fns,map__53132,map__53132__$1,render_component,d3_once,d3_update){
return (function (this$,old_argv){
return day8.re_frame.trace.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__53132,map__53132__$1,render_component,d3_once,d3_update))
], null));
});

day8.re_frame.trace.d3.create_d3.cljs$lang$maxFixedArity = (1);

day8.re_frame.trace.d3.create_d3.cljs$lang$applyTo = (function (seq53129){
var G__53130 = cljs.core.first.call(null,seq53129);
var seq53129__$1 = cljs.core.next.call(null,seq53129);
return day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic(G__53130,seq53129__$1);
});


//# sourceMappingURL=d3.js.map?rel=1510602166261
