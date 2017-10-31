// Compiled by ClojureScript 1.9.908 {}
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
var x__30982__auto__ = (((value == null))?null:value);
var m__30983__auto__ = (devtools.format._header[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,value);
} else {
var m__30983__auto____$1 = (devtools.format._header["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,value);
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
var x__30982__auto__ = (((value == null))?null:value);
var m__30983__auto__ = (devtools.format._has_body[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,value);
} else {
var m__30983__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,value);
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
var x__30982__auto__ = (((value == null))?null:value);
var m__30983__auto__ = (devtools.format._body[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,value);
} else {
var m__30983__auto____$1 = (devtools.format._body["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,value);
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

devtools.format.make_template_fn = (function (){var temp__5288__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var o50262 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50262["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50263 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50263["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50264 = temp__5288__auto____$2;
return (o50264["make_template"]);
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

devtools.format.make_group_fn = (function (){var temp__5288__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var o50265 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50265["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50266 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50266["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50267 = temp__5288__auto____$2;
return (o50267["make_group"]);
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

devtools.format.make_reference_fn = (function (){var temp__5288__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var o50268 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50268["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50269 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50269["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50270 = temp__5288__auto____$2;
return (o50270["make_reference"]);
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

devtools.format.make_surrogate_fn = (function (){var temp__5288__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var o50271 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50271["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50272 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50272["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50273 = temp__5288__auto____$2;
return (o50273["make_surrogate"]);
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

devtools.format.render_markup_fn = (function (){var temp__5288__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var o50274 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50274["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50275 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50275["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50276 = temp__5288__auto____$2;
return (o50276["render_markup"]);
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

devtools.format._LT_header_GT__fn = (function (){var temp__5288__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var o50277 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50277["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50278 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50278["markup"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50279 = temp__5288__auto____$2;
return (o50279["_LT_header_GT_"]);
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

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5288__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var o50280 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50280["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50281 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50281["markup"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50282 = temp__5288__auto____$2;
return (o50282["_LT_standard_body_GT_"]);
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
var args__31533__auto__ = [];
var len__31526__auto___50284 = arguments.length;
var i__31527__auto___50285 = (0);
while(true){
if((i__31527__auto___50285 < len__31526__auto___50284)){
args__31533__auto__.push((arguments[i__31527__auto___50285]));

var G__50286 = (i__31527__auto___50285 + (1));
i__31527__auto___50285 = G__50286;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq50283){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50283));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50288 = arguments.length;
var i__31527__auto___50289 = (0);
while(true){
if((i__31527__auto___50289 < len__31526__auto___50288)){
args__31533__auto__.push((arguments[i__31527__auto___50289]));

var G__50290 = (i__31527__auto___50289 + (1));
i__31527__auto___50289 = G__50290;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq50287){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50287));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50292 = arguments.length;
var i__31527__auto___50293 = (0);
while(true){
if((i__31527__auto___50293 < len__31526__auto___50292)){
args__31533__auto__.push((arguments[i__31527__auto___50293]));

var G__50294 = (i__31527__auto___50293 + (1));
i__31527__auto___50293 = G__50294;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq50291){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50291));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50296 = arguments.length;
var i__31527__auto___50297 = (0);
while(true){
if((i__31527__auto___50297 < len__31526__auto___50296)){
args__31533__auto__.push((arguments[i__31527__auto___50297]));

var G__50298 = (i__31527__auto___50297 + (1));
i__31527__auto___50297 = G__50298;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq50295){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50295));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50300 = arguments.length;
var i__31527__auto___50301 = (0);
while(true){
if((i__31527__auto___50301 < len__31526__auto___50300)){
args__31533__auto__.push((arguments[i__31527__auto___50301]));

var G__50302 = (i__31527__auto___50301 + (1));
i__31527__auto___50301 = G__50302;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq50299){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50299));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50304 = arguments.length;
var i__31527__auto___50305 = (0);
while(true){
if((i__31527__auto___50305 < len__31526__auto___50304)){
args__31533__auto__.push((arguments[i__31527__auto___50305]));

var G__50306 = (i__31527__auto___50305 + (1));
i__31527__auto___50305 = G__50306;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq50303){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50303));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50308 = arguments.length;
var i__31527__auto___50309 = (0);
while(true){
if((i__31527__auto___50309 < len__31526__auto___50308)){
args__31533__auto__.push((arguments[i__31527__auto___50309]));

var G__50310 = (i__31527__auto___50309 + (1));
i__31527__auto___50309 = G__50310;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq50307){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50307));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50318 = arguments.length;
var i__31527__auto___50319 = (0);
while(true){
if((i__31527__auto___50319 < len__31526__auto___50318)){
args__31533__auto__.push((arguments[i__31527__auto___50319]));

var G__50320 = (i__31527__auto___50319 + (1));
i__31527__auto___50319 = G__50320;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50314){
var vec__50315 = p__50314;
var state_override = cljs.core.nth.call(null,vec__50315,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__50315,state_override){
return (function (p1__50311_SHARP_){
return cljs.core.merge.call(null,p1__50311_SHARP_,state_override);
});})(vec__50315,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq50312){
var G__50313 = cljs.core.first.call(null,seq50312);
var seq50312__$1 = cljs.core.next.call(null,seq50312);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__50313,seq50312__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50322 = arguments.length;
var i__31527__auto___50323 = (0);
while(true){
if((i__31527__auto___50323 < len__31526__auto___50322)){
args__31533__auto__.push((arguments[i__31527__auto___50323]));

var G__50324 = (i__31527__auto___50323 + (1));
i__31527__auto___50323 = G__50324;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq50321){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50321));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50327 = arguments.length;
var i__31527__auto___50328 = (0);
while(true){
if((i__31527__auto___50328 < len__31526__auto___50327)){
args__31533__auto__.push((arguments[i__31527__auto___50328]));

var G__50329 = (i__31527__auto___50328 + (1));
i__31527__auto___50328 = G__50329;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq50325){
var G__50326 = cljs.core.first.call(null,seq50325);
var seq50325__$1 = cljs.core.next.call(null,seq50325);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__50326,seq50325__$1);
});


//# sourceMappingURL=format.js.map?rel=1509397951613
