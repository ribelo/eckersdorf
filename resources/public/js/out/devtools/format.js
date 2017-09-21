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
var o34244 = temp__5288__auto__;
var temp__5288__auto____$1 = (o34244["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o34245 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o34245["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o34246 = temp__5288__auto____$2;
return (o34246["make_template"]);
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
var o34247 = temp__5288__auto__;
var temp__5288__auto____$1 = (o34247["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o34248 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o34248["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o34249 = temp__5288__auto____$2;
return (o34249["make_group"]);
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
var o34250 = temp__5288__auto__;
var temp__5288__auto____$1 = (o34250["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o34251 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o34251["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o34252 = temp__5288__auto____$2;
return (o34252["make_reference"]);
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
var o34253 = temp__5288__auto__;
var temp__5288__auto____$1 = (o34253["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o34254 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o34254["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o34255 = temp__5288__auto____$2;
return (o34255["make_surrogate"]);
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
var o34256 = temp__5288__auto__;
var temp__5288__auto____$1 = (o34256["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o34257 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o34257["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o34258 = temp__5288__auto____$2;
return (o34258["render_markup"]);
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
var o34259 = temp__5288__auto__;
var temp__5288__auto____$1 = (o34259["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o34260 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o34260["markup"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o34261 = temp__5288__auto____$2;
return (o34261["_LT_header_GT_"]);
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
var o34262 = temp__5288__auto__;
var temp__5288__auto____$1 = (o34262["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o34263 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o34263["markup"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o34264 = temp__5288__auto____$2;
return (o34264["_LT_standard_body_GT_"]);
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
var len__31526__auto___34266 = arguments.length;
var i__31527__auto___34267 = (0);
while(true){
if((i__31527__auto___34267 < len__31526__auto___34266)){
args__31533__auto__.push((arguments[i__31527__auto___34267]));

var G__34268 = (i__31527__auto___34267 + (1));
i__31527__auto___34267 = G__34268;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq34265){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34265));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31533__auto__ = [];
var len__31526__auto___34270 = arguments.length;
var i__31527__auto___34271 = (0);
while(true){
if((i__31527__auto___34271 < len__31526__auto___34270)){
args__31533__auto__.push((arguments[i__31527__auto___34271]));

var G__34272 = (i__31527__auto___34271 + (1));
i__31527__auto___34271 = G__34272;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq34269){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34269));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31533__auto__ = [];
var len__31526__auto___34274 = arguments.length;
var i__31527__auto___34275 = (0);
while(true){
if((i__31527__auto___34275 < len__31526__auto___34274)){
args__31533__auto__.push((arguments[i__31527__auto___34275]));

var G__34276 = (i__31527__auto___34275 + (1));
i__31527__auto___34275 = G__34276;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq34273){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34273));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31533__auto__ = [];
var len__31526__auto___34278 = arguments.length;
var i__31527__auto___34279 = (0);
while(true){
if((i__31527__auto___34279 < len__31526__auto___34278)){
args__31533__auto__.push((arguments[i__31527__auto___34279]));

var G__34280 = (i__31527__auto___34279 + (1));
i__31527__auto___34279 = G__34280;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq34277){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34277));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31533__auto__ = [];
var len__31526__auto___34282 = arguments.length;
var i__31527__auto___34283 = (0);
while(true){
if((i__31527__auto___34283 < len__31526__auto___34282)){
args__31533__auto__.push((arguments[i__31527__auto___34283]));

var G__34284 = (i__31527__auto___34283 + (1));
i__31527__auto___34283 = G__34284;
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

devtools.format.template.cljs$lang$applyTo = (function (seq34281){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34281));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31533__auto__ = [];
var len__31526__auto___34286 = arguments.length;
var i__31527__auto___34287 = (0);
while(true){
if((i__31527__auto___34287 < len__31526__auto___34286)){
args__31533__auto__.push((arguments[i__31527__auto___34287]));

var G__34288 = (i__31527__auto___34287 + (1));
i__31527__auto___34287 = G__34288;
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

devtools.format.group.cljs$lang$applyTo = (function (seq34285){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34285));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31533__auto__ = [];
var len__31526__auto___34290 = arguments.length;
var i__31527__auto___34291 = (0);
while(true){
if((i__31527__auto___34291 < len__31526__auto___34290)){
args__31533__auto__.push((arguments[i__31527__auto___34291]));

var G__34292 = (i__31527__auto___34291 + (1));
i__31527__auto___34291 = G__34292;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq34289){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34289));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31533__auto__ = [];
var len__31526__auto___34300 = arguments.length;
var i__31527__auto___34301 = (0);
while(true){
if((i__31527__auto___34301 < len__31526__auto___34300)){
args__31533__auto__.push((arguments[i__31527__auto___34301]));

var G__34302 = (i__31527__auto___34301 + (1));
i__31527__auto___34301 = G__34302;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__34296){
var vec__34297 = p__34296;
var state_override = cljs.core.nth.call(null,vec__34297,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__34297,state_override){
return (function (p1__34293_SHARP_){
return cljs.core.merge.call(null,p1__34293_SHARP_,state_override);
});})(vec__34297,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq34294){
var G__34295 = cljs.core.first.call(null,seq34294);
var seq34294__$1 = cljs.core.next.call(null,seq34294);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__34295,seq34294__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31533__auto__ = [];
var len__31526__auto___34304 = arguments.length;
var i__31527__auto___34305 = (0);
while(true){
if((i__31527__auto___34305 < len__31526__auto___34304)){
args__31533__auto__.push((arguments[i__31527__auto___34305]));

var G__34306 = (i__31527__auto___34305 + (1));
i__31527__auto___34305 = G__34306;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq34303){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34303));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31533__auto__ = [];
var len__31526__auto___34309 = arguments.length;
var i__31527__auto___34310 = (0);
while(true){
if((i__31527__auto___34310 < len__31526__auto___34309)){
args__31533__auto__.push((arguments[i__31527__auto___34310]));

var G__34311 = (i__31527__auto___34310 + (1));
i__31527__auto___34310 = G__34311;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq34307){
var G__34308 = cljs.core.first.call(null,seq34307);
var seq34307__$1 = cljs.core.next.call(null,seq34307);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__34308,seq34307__$1);
});


//# sourceMappingURL=format.js.map?rel=1506023157214
