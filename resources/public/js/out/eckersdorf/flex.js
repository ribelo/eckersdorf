// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.flex');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('reagent.core');
goog.require('cuerdas.core');
goog.require('taoensso.encore');
eckersdorf.flex.all_prop_keys = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285)], null);
eckersdorf.flex.display = (function eckersdorf$flex$display(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628)], null));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("flex","direction","flex/direction",-630213658),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["column",null,"row",null,"row-rewerse",null,"column-rewerse",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["column",null,"row",null,"row-rewerse",null,"column-rewerse",null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("flex","wrap","flex/wrap",856912860),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,"wrap",null,"nowrap",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,"wrap",null,"nowrap",null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("flex","flow","flex/flow",587343295),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.Symbol(null,"wrap","wrap",-1802765782,null)], null),cljs.core.list(new cljs.core.Symbol("cuerdas.core","split","cuerdas.core/split",1272694307,null),new cljs.core.Symbol(null,"%","%",-950237169,null)," ")], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","valid?","cljs.spec.alpha/valid?",-142132235,null),new cljs.core.Keyword("flex","direction","flex/direction",-630213658),new cljs.core.Symbol(null,"direction","direction",1007172132,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","valid?","cljs.spec.alpha/valid?",-142132235,null),new cljs.core.Keyword("flex","wrap","flex/wrap",856912860),new cljs.core.Symbol(null,"wrap","wrap",-1802765782,null))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","valid?","cljs.spec.alpha/valid?",-142132235,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["inherit",null], null), null),new cljs.core.Symbol(null,"%","%",-950237169,null))))),(function (p1__38709_SHARP_){
var vec__38710 = cuerdas.core.split.call(null,p1__38709_SHARP_," ");
var direction = cljs.core.nth.call(null,vec__38710,(0),null);
var wrap = cljs.core.nth.call(null,vec__38710,(1),null);
var or__30249__auto__ = (function (){var and__30237__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("flex","direction","flex/direction",-630213658),direction);
if(cljs.core.truth_(and__30237__auto__)){
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("flex","wrap","flex/wrap",856912860),wrap);
} else {
return and__30237__auto__;
}
})();
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["inherit",null], null), null),p1__38709_SHARP_);
}
}));
eckersdorf.flex.flow = (function eckersdorf$flex$flow(style,flow){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("flex","flow","flex/flow",587343295),flow))){
} else {
throw (new Error("Assert failed: (s/valid? :flex/flow flow)"));
}

return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),flow], null));
});
eckersdorf.flex.justify_content = (function eckersdorf$flex$justify_content(style,alignment){
if(cljs.core.truth_(alignment)){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),alignment], null));
} else {
return style;
}
});
eckersdorf.flex.justify_content_start = (function eckersdorf$flex$justify_content_start(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815)], null));
});
eckersdorf.flex.justify_content_end = (function eckersdorf$flex$justify_content_end(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"flex-end","flex-end",297207970)], null));
});
eckersdorf.flex.justify_content_center = (function eckersdorf$flex$justify_content_center(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null));
});
eckersdorf.flex.justify_content_between = (function eckersdorf$flex$justify_content_between(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null));
});
eckersdorf.flex.justify_content_around = (function eckersdorf$flex$justify_content_around(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132)], null));
});
eckersdorf.flex.align_items = (function eckersdorf$flex$align_items(style,alignment){
if(cljs.core.truth_(alignment)){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),alignment], null));
} else {
return style;
}
});
eckersdorf.flex.align_items_start = (function eckersdorf$flex$align_items_start(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815)], null));
});
eckersdorf.flex.align_items_end = (function eckersdorf$flex$align_items_end(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-end","flex-end",297207970)], null));
});
eckersdorf.flex.align_items_center = (function eckersdorf$flex$align_items_center(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null));
});
eckersdorf.flex.align_items_stretch = (function eckersdorf$flex$align_items_stretch(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"stretch","stretch",-1888837380)], null));
});
eckersdorf.flex.align_items_baseline = (function eckersdorf$flex$align_items_baseline(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"baseline","baseline",1151033280)], null));
});
eckersdorf.flex.align_self = (function eckersdorf$flex$align_self(style,alignment){
if(cljs.core.truth_(alignment)){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),alignment], null));
} else {
return style;
}
});
eckersdorf.flex.align_self_start = (function eckersdorf$flex$align_self_start(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815)], null));
});
eckersdorf.flex.align_self_end = (function eckersdorf$flex$align_self_end(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"flex-end","flex-end",297207970)], null));
});
eckersdorf.flex.align_self_center = (function eckersdorf$flex$align_self_center(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null));
});
eckersdorf.flex.align_self_stretch = (function eckersdorf$flex$align_self_stretch(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"stretch","stretch",-1888837380)], null));
});
eckersdorf.flex.align_self_baseline = (function eckersdorf$flex$align_self_baseline(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"baseline","baseline",1151033280)], null));
});
eckersdorf.flex.align_content = (function eckersdorf$flex$align_content(style,alignment){
if(cljs.core.truth_(alignment)){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-content","align-content",-990200349),alignment], null));
} else {
return style;
}
});
eckersdorf.flex.align_content_start = (function eckersdorf$flex$align_content_start(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815)], null));
});
eckersdorf.flex.align_content_end = (function eckersdorf$flex$align_content_end(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"flex-end","flex-end",297207970)], null));
});
eckersdorf.flex.align_content_center = (function eckersdorf$flex$align_content_center(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null));
});
eckersdorf.flex.align_content_stretch = (function eckersdorf$flex$align_content_stretch(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"stretch","stretch",-1888837380)], null));
});
eckersdorf.flex.align_content_between = (function eckersdorf$flex$align_content_between(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null));
});
eckersdorf.flex.align_content_around = (function eckersdorf$flex$align_content_around(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"space-around","space-around",248184132)], null));
});
eckersdorf.flex.order = (function eckersdorf$flex$order(order,style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),order], null));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("flex","initial","flex/initial",1857793885),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["initial",null,new cljs.core.Keyword(null,"initial","initial",1854648214),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["initial",null,new cljs.core.Keyword(null,"initial","initial",1854648214),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("flex","auto","flex/auto",-502316349),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["auto",null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["auto",null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("flex","none","flex/none",1338711365),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["none",null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["none",null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("flex","grow","flex/grow",-518876038),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cuerdas.core","numeric?","cuerdas.core/numeric?",1925957499,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cuerdas.core","numeric?","cuerdas.core/numeric?",1925957499,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,cuerdas.core.numeric_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("flex","shrink","flex/shrink",1420530486),new cljs.core.Symbol("cuerdas.core","numeric?","cuerdas.core/numeric?",1925957499,null),cuerdas.core.numeric_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("flex","basis","flex/basis",1835410626),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38713#","p1__38713#",-590377706,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null),new cljs.core.Symbol(null,"p1__38713#","p1__38713#",-590377706,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null),cljs.core.list(new cljs.core.Symbol("js","parseInt","js/parseInt",-92318511,null),new cljs.core.Symbol(null,"p1__38713#","p1__38713#",-590377706,null))))),new cljs.core.Keyword(null,"px","px",281329899),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38714#","p1__38714#",2053764673,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),/px/,new cljs.core.Symbol(null,"p1__38714#","p1__38714#",2053764673,null))),new cljs.core.Keyword(null,"percent","percent",2031453817),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38715#","p1__38715#",1672466391,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),/\%/,new cljs.core.Symbol(null,"p1__38715#","p1__38715#",1672466391,null))),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword("flex","auto","flex/auto",-502316349),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword("flex","initial","flex/initial",1857793885)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zero","zero",-858964576),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"percent","percent",2031453817),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"initial","initial",1854648214)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null),cljs.core.list(new cljs.core.Symbol("js","parseInt","js/parseInt",-92318511,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),/px/,new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),/\%/,new cljs.core.Symbol(null,"%","%",-950237169,null))),new cljs.core.Keyword("flex","auto","flex/auto",-502316349),new cljs.core.Keyword("flex","initial","flex/initial",1857793885)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__38713_SHARP_){
return ((p1__38713_SHARP_ === (0))) || ((parseInt(p1__38713_SHARP_) === (0)));
}),(function (p1__38714_SHARP_){
return cljs.core.re_find.call(null,/px/,p1__38714_SHARP_);
}),(function (p1__38715_SHARP_){
return cljs.core.re_find.call(null,/\%/,p1__38715_SHARP_);
}),new cljs.core.Keyword("flex","auto","flex/auto",-502316349),new cljs.core.Keyword("flex","initial","flex/initial",1857793885)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("flex","gsb","flex/gsb",461461210),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),cljs.core.list(new cljs.core.Symbol("cuerdas.core","split","cuerdas.core/split",1272694307,null),new cljs.core.Symbol(null,"%","%",-950237169,null))], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","valid?","cljs.spec.alpha/valid?",-142132235,null),new cljs.core.Keyword("flex","grow","flex/grow",-518876038),new cljs.core.Symbol(null,"g","g",-916345864,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","valid?","cljs.spec.alpha/valid?",-142132235,null),new cljs.core.Keyword("flex","shrink","flex/shrink",1420530486),new cljs.core.Symbol(null,"s","s",-948495851,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","valid?","cljs.spec.alpha/valid?",-142132235,null),new cljs.core.Keyword("flex","basis","flex/basis",1835410626),new cljs.core.Symbol(null,"b","b",-1172211299,null))))),(function (p1__38716_SHARP_){
var vec__38717 = cuerdas.core.split.call(null,p1__38716_SHARP_);
var g = cljs.core.nth.call(null,vec__38717,(0),null);
var s = cljs.core.nth.call(null,vec__38717,(1),null);
var b = cljs.core.nth.call(null,vec__38717,(2),null);
var and__30237__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("flex","grow","flex/grow",-518876038),g);
if(cljs.core.truth_(and__30237__auto__)){
var and__30237__auto____$1 = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("flex","shrink","flex/shrink",1420530486),s);
if(cljs.core.truth_(and__30237__auto____$1)){
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("flex","basis","flex/basis",1835410626),b);
} else {
return and__30237__auto____$1;
}
} else {
return and__30237__auto__;
}
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("flex","flex","flex/flex",-1424076043),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword("flex","auto","flex/auto",-502316349),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword("flex","initial","flex/initial",1857793885),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword("flex","none","flex/none",1338711365),new cljs.core.Keyword(null,"grow","grow",-524118895),new cljs.core.Keyword("flex","grow","flex/grow",-518876038),new cljs.core.Keyword(null,"gsb","gsb",466704095),new cljs.core.Keyword("flex","gsb","flex/gsb",461461210),new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.Keyword("flex","basis","flex/basis",1835410626))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword("flex","auto","flex/auto",-502316349),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword("flex","initial","flex/initial",1857793885),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword("flex","none","flex/none",1338711365),new cljs.core.Keyword(null,"grow","grow",-524118895),new cljs.core.Keyword("flex","grow","flex/grow",-518876038),new cljs.core.Keyword(null,"gsb","gsb",466704095),new cljs.core.Keyword("flex","gsb","flex/gsb",461461210),new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.Keyword("flex","basis","flex/basis",1835410626)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"grow","grow",-524118895),new cljs.core.Keyword(null,"gsb","gsb",466704095),new cljs.core.Keyword(null,"basis","basis",1865819339)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flex","auto","flex/auto",-502316349),new cljs.core.Keyword("flex","initial","flex/initial",1857793885),new cljs.core.Keyword("flex","none","flex/none",1338711365),new cljs.core.Keyword("flex","grow","flex/grow",-518876038),new cljs.core.Keyword("flex","gsb","flex/gsb",461461210),new cljs.core.Keyword("flex","basis","flex/basis",1835410626)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flex","auto","flex/auto",-502316349),new cljs.core.Keyword("flex","initial","flex/initial",1857793885),new cljs.core.Keyword("flex","none","flex/none",1338711365),new cljs.core.Keyword("flex","grow","flex/grow",-518876038),new cljs.core.Keyword("flex","gsb","flex/gsb",461461210),new cljs.core.Keyword("flex","basis","flex/basis",1835410626)], null),null),null));
eckersdorf.flex.flex = (function eckersdorf$flex$flex(style,size){
if(cljs.core.truth_(size)){
var vec__38720 = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("flex","flex","flex/flex",-1424076043),size);
var type = cljs.core.nth.call(null,vec__38720,(0),null);
var size__$1 = cljs.core.nth.call(null,vec__38720,(1),null);
var flex = (function (){var G__38723 = type;
var G__38723__$1 = (((G__38723 instanceof cljs.core.Keyword))?G__38723.fqn:null);
switch (G__38723__$1) {
case "initial":
return "0 1 auto";

break;
case "auto":
return "1 1 auto";

break;
case "none":
return "0 0 auto";

break;
case "grow":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,size__$1))," 1 0px"].join('');

break;
case "basis":
var vec__38724 = size__$1;
var unit = cljs.core.nth.call(null,vec__38724,(0),null);
var size__$2 = cljs.core.nth.call(null,vec__38724,(1),null);
var G__38727 = unit;
var G__38727__$1 = (((G__38727 instanceof cljs.core.Keyword))?G__38727.fqn:null);
switch (G__38727__$1) {
case "px":
return ["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size__$2)].join('');

break;
case "percent":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find.call(null,/\d+/,size__$2))," 1 0px"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38727__$1)].join('')));

}

break;
default:
return size__$1;

}
})();
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),flex], null));
} else {
return style;
}
});
eckersdorf.flex.gap = (function eckersdorf$flex$gap(p__38730){
var map__38731 = p__38730;
var map__38731__$1 = ((((!((map__38731 == null)))?((((map__38731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38731):map__38731);
var size = cljs.core.get.call(null,map__38731__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var width = cljs.core.get.call(null,map__38731__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__38731__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var this$ = reagent.core.current_component.call(null);
var props = cljs.core.apply.call(null,cljs.core.dissoc,reagent.core.props.call(null,this$),eckersdorf.flex.all_prop_keys);
var children = reagent.core.children.call(null,this$);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),eckersdorf.flex.flex.call(null,taoensso.encore.assoc_some.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__30249__auto__ = width;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return size;
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__30249__auto__ = height;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return size;
}
})()),size)], null),props)], null),children);
});
eckersdorf.flex.gap_ = eckersdorf.flex.gap;
eckersdorf.flex.line = (function eckersdorf$flex$line(p__38733){
var map__38734 = p__38733;
var map__38734__$1 = ((((!((map__38734 == null)))?((((map__38734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38734):map__38734);
var size = cljs.core.get.call(null,map__38734__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.call(null,map__38734__$1,new cljs.core.Keyword(null,"color","color",1011675173),"lightgray");
var this$ = reagent.core.current_component.call(null);
var props = cljs.core.apply.call(null,cljs.core.dissoc,reagent.core.props.call(null,this$),eckersdorf.flex.all_prop_keys);
var children = reagent.core.children.call(null,this$);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),eckersdorf.flex.flex.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null),size)], null),props)], null),children);
});
eckersdorf.flex.scroller = (function eckersdorf$flex$scroller(p__38736){
var map__38737 = p__38736;
var map__38737__$1 = ((((!((map__38737 == null)))?((((map__38737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38737):map__38737);
var align_self = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var overflow_y = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285));
var height = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var min_width = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var align_items = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"align-items","align-items",-267946462));
var max_height = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var overflow = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"overflow","overflow",2058931880));
var width = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var justify_content = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787));
var overflow_x = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754));
var gap = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var this$ = reagent.core.current_component.call(null);
var props = cljs.core.apply.call(null,cljs.core.dissoc,reagent.core.props.call(null,this$),eckersdorf.flex.all_prop_keys);
var children = reagent.core.children.call(null,this$);
var not_v_or_h = ((overflow_y == null)) && ((overflow_x == null));
var overflow__$1 = ((((overflow == null)) && (not_v_or_h))?new cljs.core.Keyword(null,"auto","auto",-566279492):overflow);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),eckersdorf.flex.align_self.call(null,eckersdorf.flex.align_items.call(null,eckersdorf.flex.justify_content.call(null,eckersdorf.flex.flow.call(null,eckersdorf.flex.flex.call(null,eckersdorf.flex.display.call(null,taoensso.encore.assoc_some.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height,new cljs.core.Keyword(null,"overflow","overflow",2058931880),overflow__$1,new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),overflow_x,new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),overflow_y)),size),"inherit"),justify_content),align_items),align_self)], null),props)], null),children);
});
eckersdorf.flex.hbox = (function eckersdorf$flex$hbox(p__38739){
var map__38740 = p__38739;
var map__38740__$1 = ((((!((map__38740 == null)))?((((map__38740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38740):map__38740);
var align_self = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var height = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var min_width = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var align_items = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
var max_height = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var width = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"none","none",1333468478));
var justify_content = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"start","start",-355208981));
var gap = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var this$ = reagent.core.current_component.call(null);
var props = cljs.core.apply.call(null,cljs.core.dissoc,reagent.core.props.call(null,this$),eckersdorf.flex.all_prop_keys);
var gap_form = (cljs.core.truth_(gap)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.gap_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),gap], null)], null):null);
var children = (cljs.core.truth_(gap)?cljs.core.interpose.call(null,gap_form,cljs.core.filter.call(null,cljs.core.identity,reagent.core.children.call(null,this$))):reagent.core.children.call(null,this$));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),eckersdorf.flex.align_self.call(null,eckersdorf.flex.align_items.call(null,eckersdorf.flex.justify_content.call(null,eckersdorf.flex.flow.call(null,eckersdorf.flex.flex.call(null,eckersdorf.flex.display.call(null,taoensso.encore.assoc_some.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height)),size),"row nowrap"),justify_content),align_items),align_self)], null),props)], null),children);
});
eckersdorf.flex.vbox = (function eckersdorf$flex$vbox(p__38742){
var map__38743 = p__38742;
var map__38743__$1 = ((((!((map__38743 == null)))?((((map__38743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38743):map__38743);
var align_self = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var height = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var min_width = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var align_items = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
var max_height = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var width = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"none","none",1333468478));
var justify_content = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"start","start",-355208981));
var gap = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var this$ = reagent.core.current_component.call(null);
var props = cljs.core.apply.call(null,cljs.core.dissoc,reagent.core.props.call(null,this$),eckersdorf.flex.all_prop_keys);
var gap_form = (cljs.core.truth_(gap)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.gap_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),gap], null)], null):null);
var children = (cljs.core.truth_(gap)?cljs.core.interpose.call(null,gap_form,cljs.core.filter.call(null,cljs.core.identity,reagent.core.children.call(null,this$))):reagent.core.children.call(null,this$));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),eckersdorf.flex.align_self.call(null,eckersdorf.flex.align_items.call(null,eckersdorf.flex.justify_content.call(null,eckersdorf.flex.flow.call(null,eckersdorf.flex.flex.call(null,eckersdorf.flex.display.call(null,taoensso.encore.assoc_some.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height)),size),"column nowrap"),justify_content),align_items),align_self)], null),props)], null),children);
});
eckersdorf.flex.box = (function eckersdorf$flex$box(p__38745){
var map__38746 = p__38745;
var map__38746__$1 = ((((!((map__38746 == null)))?((((map__38746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38746):map__38746);
var align_self = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var height = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var min_width = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var align_items = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
var max_height = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var width = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"none","none",1333468478));
var justify_content = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"start","start",-355208981));
var gap = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var this$ = reagent.core.current_component.call(null);
var props = cljs.core.apply.call(null,cljs.core.dissoc,reagent.core.props.call(null,this$),eckersdorf.flex.all_prop_keys);
var gap_form = (cljs.core.truth_(gap)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.gap_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),gap], null)], null):null);
var children = (cljs.core.truth_(gap)?cljs.core.interpose.call(null,gap_form,cljs.core.filter.call(null,cljs.core.identity,reagent.core.children.call(null,this$))):reagent.core.children.call(null,this$));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),eckersdorf.flex.align_self.call(null,eckersdorf.flex.align_items.call(null,eckersdorf.flex.justify_content.call(null,eckersdorf.flex.flow.call(null,eckersdorf.flex.flex.call(null,eckersdorf.flex.display.call(null,taoensso.encore.assoc_some.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height)),size),"inherit"),justify_content),align_items),align_self)], null),props)], null),children);
});

//# sourceMappingURL=flex.js.map?rel=1509397942998
