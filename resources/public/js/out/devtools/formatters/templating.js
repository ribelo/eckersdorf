// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x52007_52008 = value;
x52007_52008.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x52010_52011 = value;
x52010_52011.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x52013_52014 = value;
x52013_52014.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__30511__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__30511__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__30511__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__31809__auto__ = [];
var len__31802__auto___52021 = arguments.length;
var i__31803__auto___52022 = (0);
while(true){
if((i__31803__auto___52022 < len__31802__auto___52021)){
args__31809__auto__.push((arguments[i__31803__auto___52022]));

var G__52023 = (i__31803__auto___52022 + (1));
i__31803__auto___52022 = G__52023;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__52017_52024 = cljs.core.seq.call(null,items);
var chunk__52018_52025 = null;
var count__52019_52026 = (0);
var i__52020_52027 = (0);
while(true){
if((i__52020_52027 < count__52019_52026)){
var item_52028 = cljs.core._nth.call(null,chunk__52018_52025,i__52020_52027);
if(!((item_52028 == null))){
if(cljs.core.coll_QMARK_.call(null,item_52028)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_52028)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_52028));
}
} else {
}

var G__52029 = seq__52017_52024;
var G__52030 = chunk__52018_52025;
var G__52031 = count__52019_52026;
var G__52032 = (i__52020_52027 + (1));
seq__52017_52024 = G__52029;
chunk__52018_52025 = G__52030;
count__52019_52026 = G__52031;
i__52020_52027 = G__52032;
continue;
} else {
var temp__5457__auto___52033 = cljs.core.seq.call(null,seq__52017_52024);
if(temp__5457__auto___52033){
var seq__52017_52034__$1 = temp__5457__auto___52033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52017_52034__$1)){
var c__31454__auto___52035 = cljs.core.chunk_first.call(null,seq__52017_52034__$1);
var G__52036 = cljs.core.chunk_rest.call(null,seq__52017_52034__$1);
var G__52037 = c__31454__auto___52035;
var G__52038 = cljs.core.count.call(null,c__31454__auto___52035);
var G__52039 = (0);
seq__52017_52024 = G__52036;
chunk__52018_52025 = G__52037;
count__52019_52026 = G__52038;
i__52020_52027 = G__52039;
continue;
} else {
var item_52040 = cljs.core.first.call(null,seq__52017_52034__$1);
if(!((item_52040 == null))){
if(cljs.core.coll_QMARK_.call(null,item_52040)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_52040)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_52040));
}
} else {
}

var G__52041 = cljs.core.next.call(null,seq__52017_52034__$1);
var G__52042 = null;
var G__52043 = (0);
var G__52044 = (0);
seq__52017_52024 = G__52041;
chunk__52018_52025 = G__52042;
count__52019_52026 = G__52043;
i__52020_52027 = G__52044;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq52016){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52016));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__31809__auto__ = [];
var len__31802__auto___52052 = arguments.length;
var i__31803__auto___52053 = (0);
while(true){
if((i__31803__auto___52053 < len__31802__auto___52052)){
args__31809__auto__.push((arguments[i__31803__auto___52053]));

var G__52054 = (i__31803__auto___52053 + (1));
i__31803__auto___52053 = G__52054;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((2) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31810__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__52048_52055 = cljs.core.seq.call(null,children);
var chunk__52049_52056 = null;
var count__52050_52057 = (0);
var i__52051_52058 = (0);
while(true){
if((i__52051_52058 < count__52050_52057)){
var child_52059 = cljs.core._nth.call(null,chunk__52049_52056,i__52051_52058);
if(!((child_52059 == null))){
if(cljs.core.coll_QMARK_.call(null,child_52059)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_52059))));
} else {
var temp__5455__auto___52060 = devtools.formatters.helpers.pref.call(null,child_52059);
if(cljs.core.truth_(temp__5455__auto___52060)){
var child_value_52061 = temp__5455__auto___52060;
template.push(child_value_52061);
} else {
}
}
} else {
}

var G__52062 = seq__52048_52055;
var G__52063 = chunk__52049_52056;
var G__52064 = count__52050_52057;
var G__52065 = (i__52051_52058 + (1));
seq__52048_52055 = G__52062;
chunk__52049_52056 = G__52063;
count__52050_52057 = G__52064;
i__52051_52058 = G__52065;
continue;
} else {
var temp__5457__auto___52066 = cljs.core.seq.call(null,seq__52048_52055);
if(temp__5457__auto___52066){
var seq__52048_52067__$1 = temp__5457__auto___52066;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52048_52067__$1)){
var c__31454__auto___52068 = cljs.core.chunk_first.call(null,seq__52048_52067__$1);
var G__52069 = cljs.core.chunk_rest.call(null,seq__52048_52067__$1);
var G__52070 = c__31454__auto___52068;
var G__52071 = cljs.core.count.call(null,c__31454__auto___52068);
var G__52072 = (0);
seq__52048_52055 = G__52069;
chunk__52049_52056 = G__52070;
count__52050_52057 = G__52071;
i__52051_52058 = G__52072;
continue;
} else {
var child_52073 = cljs.core.first.call(null,seq__52048_52067__$1);
if(!((child_52073 == null))){
if(cljs.core.coll_QMARK_.call(null,child_52073)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_52073))));
} else {
var temp__5455__auto___52074 = devtools.formatters.helpers.pref.call(null,child_52073);
if(cljs.core.truth_(temp__5455__auto___52074)){
var child_value_52075 = temp__5455__auto___52074;
template.push(child_value_52075);
} else {
}
}
} else {
}

var G__52076 = cljs.core.next.call(null,seq__52048_52067__$1);
var G__52077 = null;
var G__52078 = (0);
var G__52079 = (0);
seq__52048_52055 = G__52076;
chunk__52049_52056 = G__52077;
count__52050_52057 = G__52078;
i__52051_52058 = G__52079;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq52045){
var G__52046 = cljs.core.first.call(null,seq52045);
var seq52045__$1 = cljs.core.next.call(null,seq52045);
var G__52047 = cljs.core.first.call(null,seq52045__$1);
var seq52045__$2 = cljs.core.next.call(null,seq52045__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__52046,G__52047,seq52045__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__31809__auto__ = [];
var len__31802__auto___52082 = arguments.length;
var i__31803__auto___52083 = (0);
while(true){
if((i__31803__auto___52083 < len__31802__auto___52082)){
args__31809__auto__.push((arguments[i__31803__auto___52083]));

var G__52084 = (i__31803__auto___52083 + (1));
i__31803__auto___52083 = G__52084;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((1) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31810__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq52080){
var G__52081 = cljs.core.first.call(null,seq52080);
var seq52080__$1 = cljs.core.next.call(null,seq52080);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52081,seq52080__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__31809__auto__ = [];
var len__31802__auto___52087 = arguments.length;
var i__31803__auto___52088 = (0);
while(true){
if((i__31803__auto___52088 < len__31802__auto___52087)){
args__31809__auto__.push((arguments[i__31803__auto___52088]));

var G__52089 = (i__31803__auto___52088 + (1));
i__31803__auto___52088 = G__52089;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((1) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31810__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq52085){
var G__52086 = cljs.core.first.call(null,seq52085);
var seq52085__$1 = cljs.core.next.call(null,seq52085);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52086,seq52085__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__52091 = arguments.length;
switch (G__52091) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj52093 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__30523__auto__ = start_index;
if(cljs.core.truth_(or__30523__auto__)){
return or__30523__auto__;
} else {
return (0);
}
})()};
return obj52093;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__31809__auto__ = [];
var len__31802__auto___52101 = arguments.length;
var i__31803__auto___52102 = (0);
while(true){
if((i__31803__auto___52102 < len__31802__auto___52101)){
args__31809__auto__.push((arguments[i__31803__auto___52102]));

var G__52103 = (i__31803__auto___52102 + (1));
i__31803__auto___52102 = G__52103;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((1) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31810__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__52097){
var vec__52098 = p__52097;
var state_override_fn = cljs.core.nth.call(null,vec__52098,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq52095){
var G__52096 = cljs.core.first.call(null,seq52095);
var seq52095__$1 = cljs.core.next.call(null,seq52095);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__52096,seq52095__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_52104 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_52104;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__52105 = name;
switch (G__52105) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__52107 = tag;
var html_tag = cljs.core.nth.call(null,vec__52107,(0),null);
var style = cljs.core.nth.call(null,vec__52107,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_52110 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_52110;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_52111 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_52112 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_52112;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_52111;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__52113 = initial_value;
var G__52114 = value.call(null);
initial_value = G__52113;
value = G__52114;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__52115 = initial_value;
var G__52116 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__52115;
value = G__52116;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__52117 = initial_value;
var G__52118 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__52117;
value = G__52118;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1510609304707
