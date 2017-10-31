// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.d3');
goog.require('cljs.core');
goog.require('reagent.core');
day8.re_frame.trace.d3.no_op = (function day8$re_frame$trace$d3$no_op(desc){
return (function() { 
var G__52319__delegate = function (args){
return null;
};
var G__52319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52320__i = 0, G__52320__a = new Array(arguments.length -  0);
while (G__52320__i < G__52320__a.length) {G__52320__a[G__52320__i] = arguments[G__52320__i + 0]; ++G__52320__i;}
  args = new cljs.core.IndexedSeq(G__52320__a,0,null);
} 
return G__52319__delegate.call(this,args);};
G__52319.cljs$lang$maxFixedArity = 0;
G__52319.cljs$lang$applyTo = (function (arglist__52321){
var args = cljs.core.seq(arglist__52321);
return G__52319__delegate(args);
});
G__52319.cljs$core$IFn$_invoke$arity$variadic = G__52319__delegate;
return G__52319;
})()
;
});
day8.re_frame.trace.d3.component_did_update = (function day8$re_frame$trace$d3$component_did_update(p__52322,ratoms){
var map__52323 = p__52322;
var map__52323__$1 = ((((!((map__52323 == null)))?((((map__52323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52323):map__52323);
var d3_update = cljs.core.get.call(null,map__52323__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552));
return cljs.core.apply.call(null,d3_update,ratoms);
});
day8.re_frame.trace.d3.component_did_mount = (function day8$re_frame$trace$d3$component_did_mount(p__52325,ratoms){
var map__52326 = p__52325;
var map__52326__$1 = ((((!((map__52326 == null)))?((((map__52326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52326):map__52326);
var lifecycle_fns = map__52326__$1;
var d3_once = cljs.core.get.call(null,map__52326__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478));
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
var args__31533__auto__ = [];
var len__31526__auto___52337 = arguments.length;
var i__31527__auto___52338 = (0);
while(true){
if((i__31527__auto___52338 < len__31526__auto___52337)){
args__31533__auto__.push((arguments[i__31527__auto___52338]));

var G__52339 = (i__31527__auto___52338 + (1));
i__31527__auto___52338 = G__52339;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic = (function (p__52330,ratoms){
var map__52331 = p__52330;
var map__52331__$1 = ((((!((map__52331 == null)))?((((map__52331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52331):map__52331);
var render_component = cljs.core.get.call(null,map__52331__$1,new cljs.core.Keyword(null,"render-component","render-component",21088873),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
var d3_once = cljs.core.get.call(null,map__52331__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-did-mount","d3-did-mount",1382769638)));
var d3_update = cljs.core.get.call(null,map__52331__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552)));
var lifecycle_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-component","render-component",21088873),render_component,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),d3_once,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),d3_update], null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (lifecycle_fns,map__52331,map__52331__$1,render_component,d3_once,d3_update){
return (function (){
var seq__52333_52340 = cljs.core.seq.call(null,ratoms);
var chunk__52334_52341 = null;
var count__52335_52342 = (0);
var i__52336_52343 = (0);
while(true){
if((i__52336_52343 < count__52335_52342)){
var r_52344 = cljs.core._nth.call(null,chunk__52334_52341,i__52336_52343);
cljs.core.deref.call(null,r_52344);

var G__52345 = seq__52333_52340;
var G__52346 = chunk__52334_52341;
var G__52347 = count__52335_52342;
var G__52348 = (i__52336_52343 + (1));
seq__52333_52340 = G__52345;
chunk__52334_52341 = G__52346;
count__52335_52342 = G__52347;
i__52336_52343 = G__52348;
continue;
} else {
var temp__5290__auto___52349 = cljs.core.seq.call(null,seq__52333_52340);
if(temp__5290__auto___52349){
var seq__52333_52350__$1 = temp__5290__auto___52349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52333_52350__$1)){
var c__31180__auto___52351 = cljs.core.chunk_first.call(null,seq__52333_52350__$1);
var G__52352 = cljs.core.chunk_rest.call(null,seq__52333_52350__$1);
var G__52353 = c__31180__auto___52351;
var G__52354 = cljs.core.count.call(null,c__31180__auto___52351);
var G__52355 = (0);
seq__52333_52340 = G__52352;
chunk__52334_52341 = G__52353;
count__52335_52342 = G__52354;
i__52336_52343 = G__52355;
continue;
} else {
var r_52356 = cljs.core.first.call(null,seq__52333_52350__$1);
cljs.core.deref.call(null,r_52356);

var G__52357 = cljs.core.next.call(null,seq__52333_52350__$1);
var G__52358 = null;
var G__52359 = (0);
var G__52360 = (0);
seq__52333_52340 = G__52357;
chunk__52334_52341 = G__52358;
count__52335_52342 = G__52359;
i__52336_52343 = G__52360;
continue;
}
} else {
}
}
break;
}

return cljs.core.apply.call(null,render_component,ratoms);
});})(lifecycle_fns,map__52331,map__52331__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (lifecycle_fns,map__52331,map__52331__$1,render_component,d3_once,d3_update){
return (function (this$){
return day8.re_frame.trace.d3.component_did_mount.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__52331,map__52331__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (lifecycle_fns,map__52331,map__52331__$1,render_component,d3_once,d3_update){
return (function (this$,old_argv){
return day8.re_frame.trace.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__52331,map__52331__$1,render_component,d3_once,d3_update))
], null));
});

day8.re_frame.trace.d3.create_d3.cljs$lang$maxFixedArity = (1);

day8.re_frame.trace.d3.create_d3.cljs$lang$applyTo = (function (seq52328){
var G__52329 = cljs.core.first.call(null,seq52328);
var seq52328__$1 = cljs.core.next.call(null,seq52328);
return day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic(G__52329,seq52328__$1);
});


//# sourceMappingURL=d3.js.map?rel=1509397953556
