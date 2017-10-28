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
var x__30972__auto__ = (((value == null))?null:value);
var m__30973__auto__ = (devtools.format._header[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,value);
} else {
var m__30973__auto____$1 = (devtools.format._header["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,value);
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
var x__30972__auto__ = (((value == null))?null:value);
var m__30973__auto__ = (devtools.format._has_body[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,value);
} else {
var m__30973__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,value);
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
var x__30972__auto__ = (((value == null))?null:value);
var m__30973__auto__ = (devtools.format._body[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,value);
} else {
var m__30973__auto____$1 = (devtools.format._body["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,value);
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
var o51107 = temp__5288__auto__;
var temp__5288__auto____$1 = (o51107["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o51108 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o51108["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o51109 = temp__5288__auto____$2;
return (o51109["make_template"]);
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
var o51110 = temp__5288__auto__;
var temp__5288__auto____$1 = (o51110["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o51111 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o51111["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o51112 = temp__5288__auto____$2;
return (o51112["make_group"]);
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
var o51113 = temp__5288__auto__;
var temp__5288__auto____$1 = (o51113["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o51114 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o51114["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o51115 = temp__5288__auto____$2;
return (o51115["make_reference"]);
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
var o51116 = temp__5288__auto__;
var temp__5288__auto____$1 = (o51116["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o51117 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o51117["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o51118 = temp__5288__auto____$2;
return (o51118["make_surrogate"]);
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
var o51119 = temp__5288__auto__;
var temp__5288__auto____$1 = (o51119["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o51120 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o51120["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o51121 = temp__5288__auto____$2;
return (o51121["render_markup"]);
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
var o51122 = temp__5288__auto__;
var temp__5288__auto____$1 = (o51122["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o51123 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o51123["markup"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o51124 = temp__5288__auto____$2;
return (o51124["_LT_header_GT_"]);
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
var o51125 = temp__5288__auto__;
var temp__5288__auto____$1 = (o51125["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o51126 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o51126["markup"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o51127 = temp__5288__auto____$2;
return (o51127["_LT_standard_body_GT_"]);
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
var args__31523__auto__ = [];
var len__31516__auto___51129 = arguments.length;
var i__31517__auto___51130 = (0);
while(true){
if((i__31517__auto___51130 < len__31516__auto___51129)){
args__31523__auto__.push((arguments[i__31517__auto___51130]));

var G__51131 = (i__31517__auto___51130 + (1));
i__31517__auto___51130 = G__51131;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq51128){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51128));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31523__auto__ = [];
var len__31516__auto___51133 = arguments.length;
var i__31517__auto___51134 = (0);
while(true){
if((i__31517__auto___51134 < len__31516__auto___51133)){
args__31523__auto__.push((arguments[i__31517__auto___51134]));

var G__51135 = (i__31517__auto___51134 + (1));
i__31517__auto___51134 = G__51135;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq51132){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51132));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31523__auto__ = [];
var len__31516__auto___51137 = arguments.length;
var i__31517__auto___51138 = (0);
while(true){
if((i__31517__auto___51138 < len__31516__auto___51137)){
args__31523__auto__.push((arguments[i__31517__auto___51138]));

var G__51139 = (i__31517__auto___51138 + (1));
i__31517__auto___51138 = G__51139;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq51136){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51136));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31523__auto__ = [];
var len__31516__auto___51141 = arguments.length;
var i__31517__auto___51142 = (0);
while(true){
if((i__31517__auto___51142 < len__31516__auto___51141)){
args__31523__auto__.push((arguments[i__31517__auto___51142]));

var G__51143 = (i__31517__auto___51142 + (1));
i__31517__auto___51142 = G__51143;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq51140){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51140));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31523__auto__ = [];
var len__31516__auto___51145 = arguments.length;
var i__31517__auto___51146 = (0);
while(true){
if((i__31517__auto___51146 < len__31516__auto___51145)){
args__31523__auto__.push((arguments[i__31517__auto___51146]));

var G__51147 = (i__31517__auto___51146 + (1));
i__31517__auto___51146 = G__51147;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq51144){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51144));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31523__auto__ = [];
var len__31516__auto___51149 = arguments.length;
var i__31517__auto___51150 = (0);
while(true){
if((i__31517__auto___51150 < len__31516__auto___51149)){
args__31523__auto__.push((arguments[i__31517__auto___51150]));

var G__51151 = (i__31517__auto___51150 + (1));
i__31517__auto___51150 = G__51151;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq51148){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51148));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31523__auto__ = [];
var len__31516__auto___51153 = arguments.length;
var i__31517__auto___51154 = (0);
while(true){
if((i__31517__auto___51154 < len__31516__auto___51153)){
args__31523__auto__.push((arguments[i__31517__auto___51154]));

var G__51155 = (i__31517__auto___51154 + (1));
i__31517__auto___51154 = G__51155;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq51152){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51152));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31523__auto__ = [];
var len__31516__auto___51163 = arguments.length;
var i__31517__auto___51164 = (0);
while(true){
if((i__31517__auto___51164 < len__31516__auto___51163)){
args__31523__auto__.push((arguments[i__31517__auto___51164]));

var G__51165 = (i__31517__auto___51164 + (1));
i__31517__auto___51164 = G__51165;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((1) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31524__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__51159){
var vec__51160 = p__51159;
var state_override = cljs.core.nth.call(null,vec__51160,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__51160,state_override){
return (function (p1__51156_SHARP_){
return cljs.core.merge.call(null,p1__51156_SHARP_,state_override);
});})(vec__51160,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq51157){
var G__51158 = cljs.core.first.call(null,seq51157);
var seq51157__$1 = cljs.core.next.call(null,seq51157);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__51158,seq51157__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31523__auto__ = [];
var len__31516__auto___51167 = arguments.length;
var i__31517__auto___51168 = (0);
while(true){
if((i__31517__auto___51168 < len__31516__auto___51167)){
args__31523__auto__.push((arguments[i__31517__auto___51168]));

var G__51169 = (i__31517__auto___51168 + (1));
i__31517__auto___51168 = G__51169;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq51166){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51166));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31523__auto__ = [];
var len__31516__auto___51172 = arguments.length;
var i__31517__auto___51173 = (0);
while(true){
if((i__31517__auto___51173 < len__31516__auto___51172)){
args__31523__auto__.push((arguments[i__31517__auto___51173]));

var G__51174 = (i__31517__auto___51173 + (1));
i__31517__auto___51173 = G__51174;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((1) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31524__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq51170){
var G__51171 = cljs.core.first.call(null,seq51170);
var seq51170__$1 = cljs.core.next.call(null,seq51170);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__51171,seq51170__$1);
});


//# sourceMappingURL=format.js.map?rel=1509094254266
