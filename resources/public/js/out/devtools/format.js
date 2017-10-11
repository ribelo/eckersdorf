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
var o50634 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50634["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50635 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50635["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50636 = temp__5288__auto____$2;
return (o50636["make_template"]);
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
var o50637 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50637["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50638 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50638["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50639 = temp__5288__auto____$2;
return (o50639["make_group"]);
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
var o50640 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50640["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50641 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50641["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50642 = temp__5288__auto____$2;
return (o50642["make_reference"]);
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
var o50643 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50643["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50644 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50644["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50645 = temp__5288__auto____$2;
return (o50645["make_surrogate"]);
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
var o50646 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50646["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50647 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50647["templating"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50648 = temp__5288__auto____$2;
return (o50648["render_markup"]);
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
var o50649 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50649["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50650 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50650["markup"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50651 = temp__5288__auto____$2;
return (o50651["_LT_header_GT_"]);
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
var o50652 = temp__5288__auto__;
var temp__5288__auto____$1 = (o50652["formatters"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var o50653 = temp__5288__auto____$1;
var temp__5288__auto____$2 = (o50653["markup"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var o50654 = temp__5288__auto____$2;
return (o50654["_LT_standard_body_GT_"]);
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
var len__31516__auto___50656 = arguments.length;
var i__31517__auto___50657 = (0);
while(true){
if((i__31517__auto___50657 < len__31516__auto___50656)){
args__31523__auto__.push((arguments[i__31517__auto___50657]));

var G__50658 = (i__31517__auto___50657 + (1));
i__31517__auto___50657 = G__50658;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq50655){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50655));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31523__auto__ = [];
var len__31516__auto___50660 = arguments.length;
var i__31517__auto___50661 = (0);
while(true){
if((i__31517__auto___50661 < len__31516__auto___50660)){
args__31523__auto__.push((arguments[i__31517__auto___50661]));

var G__50662 = (i__31517__auto___50661 + (1));
i__31517__auto___50661 = G__50662;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq50659){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50659));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31523__auto__ = [];
var len__31516__auto___50664 = arguments.length;
var i__31517__auto___50665 = (0);
while(true){
if((i__31517__auto___50665 < len__31516__auto___50664)){
args__31523__auto__.push((arguments[i__31517__auto___50665]));

var G__50666 = (i__31517__auto___50665 + (1));
i__31517__auto___50665 = G__50666;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq50663){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50663));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31523__auto__ = [];
var len__31516__auto___50668 = arguments.length;
var i__31517__auto___50669 = (0);
while(true){
if((i__31517__auto___50669 < len__31516__auto___50668)){
args__31523__auto__.push((arguments[i__31517__auto___50669]));

var G__50670 = (i__31517__auto___50669 + (1));
i__31517__auto___50669 = G__50670;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq50667){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50667));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31523__auto__ = [];
var len__31516__auto___50672 = arguments.length;
var i__31517__auto___50673 = (0);
while(true){
if((i__31517__auto___50673 < len__31516__auto___50672)){
args__31523__auto__.push((arguments[i__31517__auto___50673]));

var G__50674 = (i__31517__auto___50673 + (1));
i__31517__auto___50673 = G__50674;
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

devtools.format.template.cljs$lang$applyTo = (function (seq50671){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50671));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31523__auto__ = [];
var len__31516__auto___50676 = arguments.length;
var i__31517__auto___50677 = (0);
while(true){
if((i__31517__auto___50677 < len__31516__auto___50676)){
args__31523__auto__.push((arguments[i__31517__auto___50677]));

var G__50678 = (i__31517__auto___50677 + (1));
i__31517__auto___50677 = G__50678;
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

devtools.format.group.cljs$lang$applyTo = (function (seq50675){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50675));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31523__auto__ = [];
var len__31516__auto___50680 = arguments.length;
var i__31517__auto___50681 = (0);
while(true){
if((i__31517__auto___50681 < len__31516__auto___50680)){
args__31523__auto__.push((arguments[i__31517__auto___50681]));

var G__50682 = (i__31517__auto___50681 + (1));
i__31517__auto___50681 = G__50682;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq50679){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50679));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31523__auto__ = [];
var len__31516__auto___50690 = arguments.length;
var i__31517__auto___50691 = (0);
while(true){
if((i__31517__auto___50691 < len__31516__auto___50690)){
args__31523__auto__.push((arguments[i__31517__auto___50691]));

var G__50692 = (i__31517__auto___50691 + (1));
i__31517__auto___50691 = G__50692;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((1) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31524__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50686){
var vec__50687 = p__50686;
var state_override = cljs.core.nth.call(null,vec__50687,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__50687,state_override){
return (function (p1__50683_SHARP_){
return cljs.core.merge.call(null,p1__50683_SHARP_,state_override);
});})(vec__50687,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq50684){
var G__50685 = cljs.core.first.call(null,seq50684);
var seq50684__$1 = cljs.core.next.call(null,seq50684);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__50685,seq50684__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31523__auto__ = [];
var len__31516__auto___50694 = arguments.length;
var i__31517__auto___50695 = (0);
while(true){
if((i__31517__auto___50695 < len__31516__auto___50694)){
args__31523__auto__.push((arguments[i__31517__auto___50695]));

var G__50696 = (i__31517__auto___50695 + (1));
i__31517__auto___50695 = G__50696;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq50693){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50693));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31523__auto__ = [];
var len__31516__auto___50699 = arguments.length;
var i__31517__auto___50700 = (0);
while(true){
if((i__31517__auto___50700 < len__31516__auto___50699)){
args__31523__auto__.push((arguments[i__31517__auto___50700]));

var G__50701 = (i__31517__auto___50700 + (1));
i__31517__auto___50700 = G__50701;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq50697){
var G__50698 = cljs.core.first.call(null,seq50697);
var seq50697__$1 = cljs.core.next.call(null,seq50697);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__50698,seq50697__$1);
});


//# sourceMappingURL=format.js.map?rel=1507757470224
