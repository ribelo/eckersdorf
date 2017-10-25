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
var o50861 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50861["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50862 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50862["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50863 = temp__5288__auto____$2;
return (o50863["make_template"]);
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
var o50864 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50864["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50865 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50865["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50866 = temp__5288__auto____$2;
return (o50866["make_group"]);
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
var o50867 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50867["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50868 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50868["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50869 = temp__5288__auto____$2;
return (o50869["make_reference"]);
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
var o50870 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50870["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50871 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50871["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50872 = temp__5288__auto____$2;
return (o50872["make_surrogate"]);
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
var o50873 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50873["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50874 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50874["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50875 = temp__5288__auto____$2;
return (o50875["render_markup"]);
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
var o50876 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50876["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50877 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50877["markup"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50878 = temp__5288__auto____$2;
return (o50878["_LT_header_GT_"]);
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
var o50879 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50879["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50880 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50880["markup"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50881 = temp__5288__auto____$2;
return (o50881["_LT_standard_body_GT_"]);
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
var len__31526__auto___50883 = arguments.length;
var i__31527__auto___50884 = (0);
while(true){
if((i__31527__auto___50884 < len__31526__auto___50883)){
args__31533__auto__.push((arguments[i__31527__auto___50884]));

var G__50885 = (i__31527__auto___50884 + (1));
i__31527__auto___50884 = G__50885;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq50882){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50882));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50887 = arguments.length;
var i__31527__auto___50888 = (0);
while(true){
if((i__31527__auto___50888 < len__31526__auto___50887)){
args__31533__auto__.push((arguments[i__31527__auto___50888]));

var G__50889 = (i__31527__auto___50888 + (1));
i__31527__auto___50888 = G__50889;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq50886){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50886));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50891 = arguments.length;
var i__31527__auto___50892 = (0);
while(true){
if((i__31527__auto___50892 < len__31526__auto___50891)){
args__31533__auto__.push((arguments[i__31527__auto___50892]));

var G__50893 = (i__31527__auto___50892 + (1));
i__31527__auto___50892 = G__50893;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq50890){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50890));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50895 = arguments.length;
var i__31527__auto___50896 = (0);
while(true){
if((i__31527__auto___50896 < len__31526__auto___50895)){
args__31533__auto__.push((arguments[i__31527__auto___50896]));

var G__50897 = (i__31527__auto___50896 + (1));
i__31527__auto___50896 = G__50897;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq50894){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50894));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50899 = arguments.length;
var i__31527__auto___50900 = (0);
while(true){
if((i__31527__auto___50900 < len__31526__auto___50899)){
args__31533__auto__.push((arguments[i__31527__auto___50900]));

var G__50901 = (i__31527__auto___50900 + (1));
i__31527__auto___50900 = G__50901;
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

devtools.format.template.cljs$lang$applyTo = (function (seq50898){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50898));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50903 = arguments.length;
var i__31527__auto___50904 = (0);
while(true){
if((i__31527__auto___50904 < len__31526__auto___50903)){
args__31533__auto__.push((arguments[i__31527__auto___50904]));

var G__50905 = (i__31527__auto___50904 + (1));
i__31527__auto___50904 = G__50905;
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

devtools.format.group.cljs$lang$applyTo = (function (seq50902){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50902));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50907 = arguments.length;
var i__31527__auto___50908 = (0);
while(true){
if((i__31527__auto___50908 < len__31526__auto___50907)){
args__31533__auto__.push((arguments[i__31527__auto___50908]));

var G__50909 = (i__31527__auto___50908 + (1));
i__31527__auto___50908 = G__50909;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq50906){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50906));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50917 = arguments.length;
var i__31527__auto___50918 = (0);
while(true){
if((i__31527__auto___50918 < len__31526__auto___50917)){
args__31533__auto__.push((arguments[i__31527__auto___50918]));

var G__50919 = (i__31527__auto___50918 + (1));
i__31527__auto___50918 = G__50919;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50913){
var vec__50914 = p__50913;
var state_override = cljs.core.nth.call(null,vec__50914,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__50914,state_override){
return (function (p1__50910_SHARP_){
return cljs.core.merge.call(null,p1__50910_SHARP_,state_override);
});})(vec__50914,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq50911){
var G__50912 = cljs.core.first.call(null,seq50911);
var seq50911__$1 = cljs.core.next.call(null,seq50911);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__50912,seq50911__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50921 = arguments.length;
var i__31527__auto___50922 = (0);
while(true){
if((i__31527__auto___50922 < len__31526__auto___50921)){
args__31533__auto__.push((arguments[i__31527__auto___50922]));

var G__50923 = (i__31527__auto___50922 + (1));
i__31527__auto___50922 = G__50923;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq50920){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50920));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50926 = arguments.length;
var i__31527__auto___50927 = (0);
while(true){
if((i__31527__auto___50927 < len__31526__auto___50926)){
args__31533__auto__.push((arguments[i__31527__auto___50927]));

var G__50928 = (i__31527__auto___50927 + (1));
i__31527__auto___50927 = G__50928;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq50924){
var G__50925 = cljs.core.first.call(null,seq50924);
var seq50924__$1 = cljs.core.next.call(null,seq50924);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__50925,seq50924__$1);
});


//# sourceMappingURL=format.js.map?rel=1508862163957
