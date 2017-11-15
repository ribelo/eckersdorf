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
var o50319 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50319["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50320 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50320["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50321 = temp__5455__auto____$2;
return (o50321["make_template"]);
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
var o50322 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50322["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50323 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50323["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50324 = temp__5455__auto____$2;
return (o50324["make_group"]);
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
var o50325 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50325["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50326 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50326["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50327 = temp__5455__auto____$2;
return (o50327["make_reference"]);
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
var o50328 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50328["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50329 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50329["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50330 = temp__5455__auto____$2;
return (o50330["make_surrogate"]);
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
var o50331 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50331["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50332 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50332["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50333 = temp__5455__auto____$2;
return (o50333["render_markup"]);
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
var o50334 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50334["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50335 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50335["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50336 = temp__5455__auto____$2;
return (o50336["_LT_header_GT_"]);
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
var o50337 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50337["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50338 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50338["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50339 = temp__5455__auto____$2;
return (o50339["_LT_standard_body_GT_"]);
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
var len__31802__auto___50341 = arguments.length;
var i__31803__auto___50342 = (0);
while(true){
if((i__31803__auto___50342 < len__31802__auto___50341)){
args__31809__auto__.push((arguments[i__31803__auto___50342]));

var G__50343 = (i__31803__auto___50342 + (1));
i__31803__auto___50342 = G__50343;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq50340){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50340));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50345 = arguments.length;
var i__31803__auto___50346 = (0);
while(true){
if((i__31803__auto___50346 < len__31802__auto___50345)){
args__31809__auto__.push((arguments[i__31803__auto___50346]));

var G__50347 = (i__31803__auto___50346 + (1));
i__31803__auto___50346 = G__50347;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq50344){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50344));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50349 = arguments.length;
var i__31803__auto___50350 = (0);
while(true){
if((i__31803__auto___50350 < len__31802__auto___50349)){
args__31809__auto__.push((arguments[i__31803__auto___50350]));

var G__50351 = (i__31803__auto___50350 + (1));
i__31803__auto___50350 = G__50351;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq50348){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50348));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50353 = arguments.length;
var i__31803__auto___50354 = (0);
while(true){
if((i__31803__auto___50354 < len__31802__auto___50353)){
args__31809__auto__.push((arguments[i__31803__auto___50354]));

var G__50355 = (i__31803__auto___50354 + (1));
i__31803__auto___50354 = G__50355;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq50352){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50352));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50357 = arguments.length;
var i__31803__auto___50358 = (0);
while(true){
if((i__31803__auto___50358 < len__31802__auto___50357)){
args__31809__auto__.push((arguments[i__31803__auto___50358]));

var G__50359 = (i__31803__auto___50358 + (1));
i__31803__auto___50358 = G__50359;
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

devtools.format.template.cljs$lang$applyTo = (function (seq50356){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50356));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50361 = arguments.length;
var i__31803__auto___50362 = (0);
while(true){
if((i__31803__auto___50362 < len__31802__auto___50361)){
args__31809__auto__.push((arguments[i__31803__auto___50362]));

var G__50363 = (i__31803__auto___50362 + (1));
i__31803__auto___50362 = G__50363;
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

devtools.format.group.cljs$lang$applyTo = (function (seq50360){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50360));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50365 = arguments.length;
var i__31803__auto___50366 = (0);
while(true){
if((i__31803__auto___50366 < len__31802__auto___50365)){
args__31809__auto__.push((arguments[i__31803__auto___50366]));

var G__50367 = (i__31803__auto___50366 + (1));
i__31803__auto___50366 = G__50367;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq50364){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50364));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50375 = arguments.length;
var i__31803__auto___50376 = (0);
while(true){
if((i__31803__auto___50376 < len__31802__auto___50375)){
args__31809__auto__.push((arguments[i__31803__auto___50376]));

var G__50377 = (i__31803__auto___50376 + (1));
i__31803__auto___50376 = G__50377;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((1) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31810__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50371){
var vec__50372 = p__50371;
var state_override = cljs.core.nth.call(null,vec__50372,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__50372,state_override){
return (function (p1__50368_SHARP_){
return cljs.core.merge.call(null,p1__50368_SHARP_,state_override);
});})(vec__50372,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq50369){
var G__50370 = cljs.core.first.call(null,seq50369);
var seq50369__$1 = cljs.core.next.call(null,seq50369);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__50370,seq50369__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50379 = arguments.length;
var i__31803__auto___50380 = (0);
while(true){
if((i__31803__auto___50380 < len__31802__auto___50379)){
args__31809__auto__.push((arguments[i__31803__auto___50380]));

var G__50381 = (i__31803__auto___50380 + (1));
i__31803__auto___50380 = G__50381;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq50378){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50378));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50384 = arguments.length;
var i__31803__auto___50385 = (0);
while(true){
if((i__31803__auto___50385 < len__31802__auto___50384)){
args__31809__auto__.push((arguments[i__31803__auto___50385]));

var G__50386 = (i__31803__auto___50385 + (1));
i__31803__auto___50385 = G__50386;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq50382){
var G__50383 = cljs.core.first.call(null,seq50382);
var seq50382__$1 = cljs.core.next.call(null,seq50382);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__50383,seq50382__$1);
});


//# sourceMappingURL=format.js.map?rel=1510703506796
