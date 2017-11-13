// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__31256__auto__ = (((value == null))?null:value);
var m__31257__auto__ = (devtools.format._header[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,value);
} else {
var m__31257__auto____$1 = (devtools.format._header["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__31256__auto__ = (((value == null))?null:value);
var m__31257__auto__ = (devtools.format._has_body[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,value);
} else {
var m__31257__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__31256__auto__ = (((value == null))?null:value);
var m__31257__auto__ = (devtools.format._body[goog.typeOf(x__31256__auto__)]);
if(!((m__31257__auto__ == null))){
return m__31257__auto__.call(null,value);
} else {
var m__31257__auto____$1 = (devtools.format._body["_"]);
if(!((m__31257__auto____$1 == null))){
return m__31257__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50317 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50317["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50318 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50318["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50319 = temp__5455__auto____$2;
return (o50319["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50320 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50320["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50321 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50321["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50322 = temp__5455__auto____$2;
return (o50322["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50323 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50323["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50324 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50324["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50325 = temp__5455__auto____$2;
return (o50325["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50326 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50326["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50327 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50327["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50328 = temp__5455__auto____$2;
return (o50328["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50329 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50329["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50330 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50330["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50331 = temp__5455__auto____$2;
return (o50331["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50332 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50332["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50333 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50333["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50334 = temp__5455__auto____$2;
return (o50334["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50335 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50335["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50336 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50336["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50337 = temp__5455__auto____$2;
return (o50337["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50339 = arguments.length;
var i__31803__auto___50340 = (0);
while(true){
if((i__31803__auto___50340 < len__31802__auto___50339)){
args__31809__auto__.push((arguments[i__31803__auto___50340]));

var G__50341 = (i__31803__auto___50340 + (1));
i__31803__auto___50340 = G__50341;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq50338){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50338));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50343 = arguments.length;
var i__31803__auto___50344 = (0);
while(true){
if((i__31803__auto___50344 < len__31802__auto___50343)){
args__31809__auto__.push((arguments[i__31803__auto___50344]));

var G__50345 = (i__31803__auto___50344 + (1));
i__31803__auto___50344 = G__50345;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq50342){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50342));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50347 = arguments.length;
var i__31803__auto___50348 = (0);
while(true){
if((i__31803__auto___50348 < len__31802__auto___50347)){
args__31809__auto__.push((arguments[i__31803__auto___50348]));

var G__50349 = (i__31803__auto___50348 + (1));
i__31803__auto___50348 = G__50349;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq50346){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50346));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50351 = arguments.length;
var i__31803__auto___50352 = (0);
while(true){
if((i__31803__auto___50352 < len__31802__auto___50351)){
args__31809__auto__.push((arguments[i__31803__auto___50352]));

var G__50353 = (i__31803__auto___50352 + (1));
i__31803__auto___50352 = G__50353;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq50350){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50350));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50355 = arguments.length;
var i__31803__auto___50356 = (0);
while(true){
if((i__31803__auto___50356 < len__31802__auto___50355)){
args__31809__auto__.push((arguments[i__31803__auto___50356]));

var G__50357 = (i__31803__auto___50356 + (1));
i__31803__auto___50356 = G__50357;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq50354){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50354));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50359 = arguments.length;
var i__31803__auto___50360 = (0);
while(true){
if((i__31803__auto___50360 < len__31802__auto___50359)){
args__31809__auto__.push((arguments[i__31803__auto___50360]));

var G__50361 = (i__31803__auto___50360 + (1));
i__31803__auto___50360 = G__50361;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq50358){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50358));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50363 = arguments.length;
var i__31803__auto___50364 = (0);
while(true){
if((i__31803__auto___50364 < len__31802__auto___50363)){
args__31809__auto__.push((arguments[i__31803__auto___50364]));

var G__50365 = (i__31803__auto___50364 + (1));
i__31803__auto___50364 = G__50365;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq50362){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50362));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50373 = arguments.length;
var i__31803__auto___50374 = (0);
while(true){
if((i__31803__auto___50374 < len__31802__auto___50373)){
args__31809__auto__.push((arguments[i__31803__auto___50374]));

var G__50375 = (i__31803__auto___50374 + (1));
i__31803__auto___50374 = G__50375;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((1) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31810__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50369){
var vec__50370 = p__50369;
var state_override = cljs.core.nth.call(null,vec__50370,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__50370,state_override){
return (function (p1__50366_SHARP_){
return cljs.core.merge.call(null,p1__50366_SHARP_,state_override);
});})(vec__50370,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq50367){
var G__50368 = cljs.core.first.call(null,seq50367);
var seq50367__$1 = cljs.core.next.call(null,seq50367);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__50368,seq50367__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50377 = arguments.length;
var i__31803__auto___50378 = (0);
while(true){
if((i__31803__auto___50378 < len__31802__auto___50377)){
args__31809__auto__.push((arguments[i__31803__auto___50378]));

var G__50379 = (i__31803__auto___50378 + (1));
i__31803__auto___50378 = G__50379;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq50376){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50376));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50382 = arguments.length;
var i__31803__auto___50383 = (0);
while(true){
if((i__31803__auto___50383 < len__31802__auto___50382)){
args__31809__auto__.push((arguments[i__31803__auto___50383]));

var G__50384 = (i__31803__auto___50383 + (1));
i__31803__auto___50383 = G__50384;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((1) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31810__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq50380){
var G__50381 = cljs.core.first.call(null,seq50380);
var seq50380__$1 = cljs.core.next.call(null,seq50380);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__50381,seq50380__$1);
});


//# sourceMappingURL=format.js.map?rel=1510609302886
