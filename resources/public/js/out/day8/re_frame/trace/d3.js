// Compiled by ClojureScript 1.9.946 {}
goog.provide('day8.re_frame.trace.d3');
goog.require('cljs.core');
goog.require('reagent.core');
day8.re_frame.trace.d3.no_op = (function day8$re_frame$trace$d3$no_op(desc){
return (function() { 
var G__53123__delegate = function (args){
return null;
};
var G__53123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53124__i = 0, G__53124__a = new Array(arguments.length -  0);
while (G__53124__i < G__53124__a.length) {G__53124__a[G__53124__i] = arguments[G__53124__i + 0]; ++G__53124__i;}
  args = new cljs.core.IndexedSeq(G__53124__a,0,null);
} 
return G__53123__delegate.call(this,args);};
G__53123.cljs$lang$maxFixedArity = 0;
G__53123.cljs$lang$applyTo = (function (arglist__53125){
var args = cljs.core.seq(arglist__53125);
return G__53123__delegate(args);
});
G__53123.cljs$core$IFn$_invoke$arity$variadic = G__53123__delegate;
return G__53123;
})()
;
});
day8.re_frame.trace.d3.component_did_update = (function day8$re_frame$trace$d3$component_did_update(p__53126,ratoms){
var map__53127 = p__53126;
var map__53127__$1 = ((((!((map__53127 == null)))?((((map__53127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53127):map__53127);
var d3_update = cljs.core.get.call(null,map__53127__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552));
return cljs.core.apply.call(null,d3_update,ratoms);
});
day8.re_frame.trace.d3.component_did_mount = (function day8$re_frame$trace$d3$component_did_mount(p__53129,ratoms){
var map__53130 = p__53129;
var map__53130__$1 = ((((!((map__53130 == null)))?((((map__53130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53130):map__53130);
var lifecycle_fns = map__53130__$1;
var d3_once = cljs.core.get.call(null,map__53130__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478));
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
var args__31809__auto__ = [];
var len__31802__auto___53141 = arguments.length;
var i__31803__auto___53142 = (0);
while(true){
if((i__31803__auto___53142 < len__31802__auto___53141)){
args__31809__auto__.push((arguments[i__31803__auto___53142]));

var G__53143 = (i__31803__auto___53142 + (1));
i__31803__auto___53142 = G__53143;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((1) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31810__auto__);
});

day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic = (function (p__53134,ratoms){
var map__53135 = p__53134;
var map__53135__$1 = ((((!((map__53135 == null)))?((((map__53135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53135):map__53135);
var render_component = cljs.core.get.call(null,map__53135__$1,new cljs.core.Keyword(null,"render-component","render-component",21088873),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
var d3_once = cljs.core.get.call(null,map__53135__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-did-mount","d3-did-mount",1382769638)));
var d3_update = cljs.core.get.call(null,map__53135__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552)));
var lifecycle_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-component","render-component",21088873),render_component,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),d3_once,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),d3_update], null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (lifecycle_fns,map__53135,map__53135__$1,render_component,d3_once,d3_update){
return (function (){
var seq__53137_53144 = cljs.core.seq.call(null,ratoms);
var chunk__53138_53145 = null;
var count__53139_53146 = (0);
var i__53140_53147 = (0);
while(true){
if((i__53140_53147 < count__53139_53146)){
var r_53148 = cljs.core._nth.call(null,chunk__53138_53145,i__53140_53147);
cljs.core.deref.call(null,r_53148);

var G__53149 = seq__53137_53144;
var G__53150 = chunk__53138_53145;
var G__53151 = count__53139_53146;
var G__53152 = (i__53140_53147 + (1));
seq__53137_53144 = G__53149;
chunk__53138_53145 = G__53150;
count__53139_53146 = G__53151;
i__53140_53147 = G__53152;
continue;
} else {
var temp__5457__auto___53153 = cljs.core.seq.call(null,seq__53137_53144);
if(temp__5457__auto___53153){
var seq__53137_53154__$1 = temp__5457__auto___53153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53137_53154__$1)){
var c__31454__auto___53155 = cljs.core.chunk_first.call(null,seq__53137_53154__$1);
var G__53156 = cljs.core.chunk_rest.call(null,seq__53137_53154__$1);
var G__53157 = c__31454__auto___53155;
var G__53158 = cljs.core.count.call(null,c__31454__auto___53155);
var G__53159 = (0);
seq__53137_53144 = G__53156;
chunk__53138_53145 = G__53157;
count__53139_53146 = G__53158;
i__53140_53147 = G__53159;
continue;
} else {
var r_53160 = cljs.core.first.call(null,seq__53137_53154__$1);
cljs.core.deref.call(null,r_53160);

var G__53161 = cljs.core.next.call(null,seq__53137_53154__$1);
var G__53162 = null;
var G__53163 = (0);
var G__53164 = (0);
seq__53137_53144 = G__53161;
chunk__53138_53145 = G__53162;
count__53139_53146 = G__53163;
i__53140_53147 = G__53164;
continue;
}
} else {
}
}
break;
}

return cljs.core.apply.call(null,render_component,ratoms);
});})(lifecycle_fns,map__53135,map__53135__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (lifecycle_fns,map__53135,map__53135__$1,render_component,d3_once,d3_update){
return (function (this$){
return day8.re_frame.trace.d3.component_did_mount.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__53135,map__53135__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (lifecycle_fns,map__53135,map__53135__$1,render_component,d3_once,d3_update){
return (function (this$,old_argv){
return day8.re_frame.trace.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__53135,map__53135__$1,render_component,d3_once,d3_update))
], null));
});

day8.re_frame.trace.d3.create_d3.cljs$lang$maxFixedArity = (1);

day8.re_frame.trace.d3.create_d3.cljs$lang$applyTo = (function (seq53132){
var G__53133 = cljs.core.first.call(null,seq53132);
var seq53132__$1 = cljs.core.next.call(null,seq53132);
return day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic(G__53133,seq53132__$1);
});


//# sourceMappingURL=d3.js.map?rel=1510703510311
