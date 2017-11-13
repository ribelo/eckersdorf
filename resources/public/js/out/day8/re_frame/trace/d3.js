// Compiled by ClojureScript 1.9.946 {}
goog.provide('day8.re_frame.trace.d3');
goog.require('cljs.core');
goog.require('reagent.core');
day8.re_frame.trace.d3.no_op = (function day8$re_frame$trace$d3$no_op(desc){
return (function() { 
var G__53121__delegate = function (args){
return null;
};
var G__53121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53122__i = 0, G__53122__a = new Array(arguments.length -  0);
while (G__53122__i < G__53122__a.length) {G__53122__a[G__53122__i] = arguments[G__53122__i + 0]; ++G__53122__i;}
  args = new cljs.core.IndexedSeq(G__53122__a,0,null);
} 
return G__53121__delegate.call(this,args);};
G__53121.cljs$lang$maxFixedArity = 0;
G__53121.cljs$lang$applyTo = (function (arglist__53123){
var args = cljs.core.seq(arglist__53123);
return G__53121__delegate(args);
});
G__53121.cljs$core$IFn$_invoke$arity$variadic = G__53121__delegate;
return G__53121;
})()
;
});
day8.re_frame.trace.d3.component_did_update = (function day8$re_frame$trace$d3$component_did_update(p__53124,ratoms){
var map__53125 = p__53124;
var map__53125__$1 = ((((!((map__53125 == null)))?((((map__53125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53125):map__53125);
var d3_update = cljs.core.get.call(null,map__53125__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552));
return cljs.core.apply.call(null,d3_update,ratoms);
});
day8.re_frame.trace.d3.component_did_mount = (function day8$re_frame$trace$d3$component_did_mount(p__53127,ratoms){
var map__53128 = p__53127;
var map__53128__$1 = ((((!((map__53128 == null)))?((((map__53128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53128):map__53128);
var lifecycle_fns = map__53128__$1;
var d3_once = cljs.core.get.call(null,map__53128__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478));
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
var len__31802__auto___53139 = arguments.length;
var i__31803__auto___53140 = (0);
while(true){
if((i__31803__auto___53140 < len__31802__auto___53139)){
args__31809__auto__.push((arguments[i__31803__auto___53140]));

var G__53141 = (i__31803__auto___53140 + (1));
i__31803__auto___53140 = G__53141;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((1) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31810__auto__);
});

day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic = (function (p__53132,ratoms){
var map__53133 = p__53132;
var map__53133__$1 = ((((!((map__53133 == null)))?((((map__53133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53133):map__53133);
var render_component = cljs.core.get.call(null,map__53133__$1,new cljs.core.Keyword(null,"render-component","render-component",21088873),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
var d3_once = cljs.core.get.call(null,map__53133__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-did-mount","d3-did-mount",1382769638)));
var d3_update = cljs.core.get.call(null,map__53133__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552)));
var lifecycle_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-component","render-component",21088873),render_component,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),d3_once,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),d3_update], null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (lifecycle_fns,map__53133,map__53133__$1,render_component,d3_once,d3_update){
return (function (){
var seq__53135_53142 = cljs.core.seq.call(null,ratoms);
var chunk__53136_53143 = null;
var count__53137_53144 = (0);
var i__53138_53145 = (0);
while(true){
if((i__53138_53145 < count__53137_53144)){
var r_53146 = cljs.core._nth.call(null,chunk__53136_53143,i__53138_53145);
cljs.core.deref.call(null,r_53146);

var G__53147 = seq__53135_53142;
var G__53148 = chunk__53136_53143;
var G__53149 = count__53137_53144;
var G__53150 = (i__53138_53145 + (1));
seq__53135_53142 = G__53147;
chunk__53136_53143 = G__53148;
count__53137_53144 = G__53149;
i__53138_53145 = G__53150;
continue;
} else {
var temp__5457__auto___53151 = cljs.core.seq.call(null,seq__53135_53142);
if(temp__5457__auto___53151){
var seq__53135_53152__$1 = temp__5457__auto___53151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53135_53152__$1)){
var c__31454__auto___53153 = cljs.core.chunk_first.call(null,seq__53135_53152__$1);
var G__53154 = cljs.core.chunk_rest.call(null,seq__53135_53152__$1);
var G__53155 = c__31454__auto___53153;
var G__53156 = cljs.core.count.call(null,c__31454__auto___53153);
var G__53157 = (0);
seq__53135_53142 = G__53154;
chunk__53136_53143 = G__53155;
count__53137_53144 = G__53156;
i__53138_53145 = G__53157;
continue;
} else {
var r_53158 = cljs.core.first.call(null,seq__53135_53152__$1);
cljs.core.deref.call(null,r_53158);

var G__53159 = cljs.core.next.call(null,seq__53135_53152__$1);
var G__53160 = null;
var G__53161 = (0);
var G__53162 = (0);
seq__53135_53142 = G__53159;
chunk__53136_53143 = G__53160;
count__53137_53144 = G__53161;
i__53138_53145 = G__53162;
continue;
}
} else {
}
}
break;
}

return cljs.core.apply.call(null,render_component,ratoms);
});})(lifecycle_fns,map__53133,map__53133__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (lifecycle_fns,map__53133,map__53133__$1,render_component,d3_once,d3_update){
return (function (this$){
return day8.re_frame.trace.d3.component_did_mount.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__53133,map__53133__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (lifecycle_fns,map__53133,map__53133__$1,render_component,d3_once,d3_update){
return (function (this$,old_argv){
return day8.re_frame.trace.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__53133,map__53133__$1,render_component,d3_once,d3_update))
], null));
});

day8.re_frame.trace.d3.create_d3.cljs$lang$maxFixedArity = (1);

day8.re_frame.trace.d3.create_d3.cljs$lang$applyTo = (function (seq53130){
var G__53131 = cljs.core.first.call(null,seq53130);
var seq53130__$1 = cljs.core.next.call(null,seq53130);
return day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic(G__53131,seq53130__$1);
});


//# sourceMappingURL=d3.js.map?rel=1510609306355
