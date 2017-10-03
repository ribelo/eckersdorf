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
var o54831 = temp__5288__auto__;
var temp__5288__auto____$1 = (o54831["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o54832 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o54832["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o54833 = temp__5288__auto____$2;
return (o54833["make_template"]);
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
var o54834 = temp__5288__auto__;
var temp__5288__auto____$1 = (o54834["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o54835 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o54835["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o54836 = temp__5288__auto____$2;
return (o54836["make_group"]);
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
var o54837 = temp__5288__auto__;
var temp__5288__auto____$1 = (o54837["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o54838 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o54838["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o54839 = temp__5288__auto____$2;
return (o54839["make_reference"]);
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
var o54840 = temp__5288__auto__;
var temp__5288__auto____$1 = (o54840["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o54841 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o54841["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o54842 = temp__5288__auto____$2;
return (o54842["make_surrogate"]);
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
var o54843 = temp__5288__auto__;
var temp__5288__auto____$1 = (o54843["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o54844 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o54844["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o54845 = temp__5288__auto____$2;
return (o54845["render_markup"]);
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
var o54846 = temp__5288__auto__;
var temp__5288__auto____$1 = (o54846["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o54847 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o54847["markup"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o54848 = temp__5288__auto____$2;
return (o54848["_LT_header_GT_"]);
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
var o54849 = temp__5288__auto__;
var temp__5288__auto____$1 = (o54849["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o54850 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o54850["markup"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o54851 = temp__5288__auto____$2;
return (o54851["_LT_standard_body_GT_"]);
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
var len__31526__auto___54853 = arguments.length;
var i__31527__auto___54854 = (0);
while(true){
if((i__31527__auto___54854 < len__31526__auto___54853)){
args__31533__auto__.push((arguments[i__31527__auto___54854]));

var G__54855 = (i__31527__auto___54854 + (1));
i__31527__auto___54854 = G__54855;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq54852){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54852));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31533__auto__ = [];
var len__31526__auto___54857 = arguments.length;
var i__31527__auto___54858 = (0);
while(true){
if((i__31527__auto___54858 < len__31526__auto___54857)){
args__31533__auto__.push((arguments[i__31527__auto___54858]));

var G__54859 = (i__31527__auto___54858 + (1));
i__31527__auto___54858 = G__54859;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq54856){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54856));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31533__auto__ = [];
var len__31526__auto___54861 = arguments.length;
var i__31527__auto___54862 = (0);
while(true){
if((i__31527__auto___54862 < len__31526__auto___54861)){
args__31533__auto__.push((arguments[i__31527__auto___54862]));

var G__54863 = (i__31527__auto___54862 + (1));
i__31527__auto___54862 = G__54863;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq54860){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54860));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31533__auto__ = [];
var len__31526__auto___54865 = arguments.length;
var i__31527__auto___54866 = (0);
while(true){
if((i__31527__auto___54866 < len__31526__auto___54865)){
args__31533__auto__.push((arguments[i__31527__auto___54866]));

var G__54867 = (i__31527__auto___54866 + (1));
i__31527__auto___54866 = G__54867;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq54864){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54864));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31533__auto__ = [];
var len__31526__auto___54869 = arguments.length;
var i__31527__auto___54870 = (0);
while(true){
if((i__31527__auto___54870 < len__31526__auto___54869)){
args__31533__auto__.push((arguments[i__31527__auto___54870]));

var G__54871 = (i__31527__auto___54870 + (1));
i__31527__auto___54870 = G__54871;
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

devtools.format.template.cljs$lang$applyTo = (function (seq54868){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54868));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31533__auto__ = [];
var len__31526__auto___54873 = arguments.length;
var i__31527__auto___54874 = (0);
while(true){
if((i__31527__auto___54874 < len__31526__auto___54873)){
args__31533__auto__.push((arguments[i__31527__auto___54874]));

var G__54875 = (i__31527__auto___54874 + (1));
i__31527__auto___54874 = G__54875;
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

devtools.format.group.cljs$lang$applyTo = (function (seq54872){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54872));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31533__auto__ = [];
var len__31526__auto___54877 = arguments.length;
var i__31527__auto___54878 = (0);
while(true){
if((i__31527__auto___54878 < len__31526__auto___54877)){
args__31533__auto__.push((arguments[i__31527__auto___54878]));

var G__54879 = (i__31527__auto___54878 + (1));
i__31527__auto___54878 = G__54879;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq54876){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54876));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31533__auto__ = [];
var len__31526__auto___54887 = arguments.length;
var i__31527__auto___54888 = (0);
while(true){
if((i__31527__auto___54888 < len__31526__auto___54887)){
args__31533__auto__.push((arguments[i__31527__auto___54888]));

var G__54889 = (i__31527__auto___54888 + (1));
i__31527__auto___54888 = G__54889;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__54883){
var vec__54884 = p__54883;
var state_override = cljs.core.nth.call(null,vec__54884,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__54884,state_override){
return (function (p1__54880_SHARP_){
return cljs.core.merge.call(null,p1__54880_SHARP_,state_override);
});})(vec__54884,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq54881){
var G__54882 = cljs.core.first.call(null,seq54881);
var seq54881__$1 = cljs.core.next.call(null,seq54881);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__54882,seq54881__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31533__auto__ = [];
var len__31526__auto___54891 = arguments.length;
var i__31527__auto___54892 = (0);
while(true){
if((i__31527__auto___54892 < len__31526__auto___54891)){
args__31533__auto__.push((arguments[i__31527__auto___54892]));

var G__54893 = (i__31527__auto___54892 + (1));
i__31527__auto___54892 = G__54893;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq54890){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54890));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31533__auto__ = [];
var len__31526__auto___54896 = arguments.length;
var i__31527__auto___54897 = (0);
while(true){
if((i__31527__auto___54897 < len__31526__auto___54896)){
args__31533__auto__.push((arguments[i__31527__auto___54897]));

var G__54898 = (i__31527__auto___54897 + (1));
i__31527__auto___54897 = G__54898;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq54894){
var G__54895 = cljs.core.first.call(null,seq54894);
var seq54894__$1 = cljs.core.next.call(null,seq54894);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__54895,seq54894__$1);
});


//# sourceMappingURL=format.js.map?rel=1507056184008
