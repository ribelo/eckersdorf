// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.util');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cuerdas.core');
goog.require('eckersdorf.flex');
eckersdorf.util.px = (function eckersdorf$util$px(num){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.long$.call(null,num)),"px"].join('');
});
eckersdorf.util.valid_email_address_QMARK_ = (function eckersdorf$util$valid_email_address_QMARK_(text){
return !((cljs.core.re_find.call(null,/(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/,text) == null));
});
eckersdorf.util.valid_phone_number_QMARK_ = (function eckersdorf$util$valid_phone_number_QMARK_(text){
return !((cljs.core.re_find.call(null,/^(?:[0+]48)?\d{9}$/,text) == null));
});
eckersdorf.util.valid_password = (function eckersdorf$util$valid_password(text){
return cljs.core.re_find.call(null,/(?=^.{8,}$)^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,text);
});
eckersdorf.util.swipeable = reagent.core.adapt_react_class.call(null,(window["deps"]["Swipeable"]));
eckersdorf.util.lazyload = reagent.core.adapt_react_class.call(null,(window["deps"]["LazyLoad"]["default"]));
eckersdorf.util.transition = reagent.core.adapt_react_class.call(null,(ReactTransitionGroup["Transition"]));
eckersdorf.util.transition_group = reagent.core.adapt_react_class.call(null,(ReactTransitionGroup["TransitionGroup"]));
eckersdorf.util.css_transition = reagent.core.adapt_react_class.call(null,(ReactTransitionGroup["CSSTransition"]));
eckersdorf.util.pintu_shield = (function eckersdorf$util$pintu_shield(p__34737){
var map__34738 = p__34737;
var map__34738__$1 = ((((!((map__34738 == null)))?((((map__34738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34738):map__34738);
var opts = map__34738__$1;
var height = cljs.core.get.call(null,map__34738__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var inverted_QMARK_ = cljs.core.get.call(null,map__34738__$1,new cljs.core.Keyword(null,"inverted?","inverted?",-676420704));
var mono_QMARK_ = cljs.core.get.call(null,map__34738__$1,new cljs.core.Keyword(null,"mono?","mono?",211301025));
var text = cljs.core.get.call(null,map__34738__$1,new cljs.core.Keyword(null,"text","text",-1790561697),"pintu.pl");
var font_size = (height / 1.5);
var width = ((height * cljs.core.count.call(null,text)) * 0.24);
var border_radius = (height * 0.2);
var hover_QMARK_ = reagent.core.atom.call(null,false);
var vec__34740 = (cljs.core.truth_((function (){var and__30237__auto__ = cljs.core.not.call(null,inverted_QMARK_);
if(and__30237__auto__){
return mono_QMARK_;
} else {
return and__30237__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.util.color.call(null,new cljs.core.Keyword(null,"grey50","grey50",351597331)),eckersdorf.util.color.call(null,new cljs.core.Keyword(null,"grey900","grey900",-712169247))], null):(cljs.core.truth_((function (){var and__30237__auto__ = inverted_QMARK_;
if(cljs.core.truth_(and__30237__auto__)){
return cljs.core.not.call(null,mono_QMARK_);
} else {
return and__30237__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.util.color.call(null,new cljs.core.Keyword(null,"green500","green500",-1927910030)),eckersdorf.util.color.call(null,new cljs.core.Keyword(null,"grey50","grey50",351597331))], null):(cljs.core.truth_((function (){var and__30237__auto__ = inverted_QMARK_;
if(cljs.core.truth_(and__30237__auto__)){
return mono_QMARK_;
} else {
return and__30237__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.util.color.call(null,new cljs.core.Keyword(null,"green500","green500",-1927910030)),eckersdorf.util.color.call(null,new cljs.core.Keyword(null,"grey50","grey50",351597331))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.util.color.call(null,new cljs.core.Keyword(null,"grey50","grey50",351597331)),eckersdorf.util.color.call(null,new cljs.core.Keyword(null,"green500","green500",-1927910030))], null)
)));
var background = cljs.core.nth.call(null,vec__34740,(0),null);
var color = cljs.core.nth.call(null,vec__34740,(1),null);
return ((function (font_size,width,border_radius,hover_QMARK_,vec__34740,background,color,map__34738,map__34738__$1,opts,height,inverted_QMARK_,mono_QMARK_,text){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.paper,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (font_size,width,border_radius,hover_QMARK_,vec__34740,background,color,map__34738,map__34738__$1,opts,height,inverted_QMARK_,mono_QMARK_,text){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,true);
});})(font_size,width,border_radius,hover_QMARK_,vec__34740,background,color,map__34738,map__34738__$1,opts,height,inverted_QMARK_,mono_QMARK_,text))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (font_size,width,border_radius,hover_QMARK_,vec__34740,background,color,map__34738,map__34738__$1,opts,height,inverted_QMARK_,mono_QMARK_,text){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,false);
});})(font_size,width,border_radius,hover_QMARK_,vec__34740,background,color,map__34738,map__34738__$1,opts,height,inverted_QMARK_,mono_QMARK_,text))
,new cljs.core.Keyword(null,"z-depth","z-depth",-334122453),(cljs.core.truth_(cljs.core.deref.call(null,hover_QMARK_))?(2):(1)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''),new cljs.core.Keyword(null,"min-width","min-width",1926193728),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''),new cljs.core.Keyword(null,"min-height","min-height",398480837),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''),new cljs.core.Keyword(null,"max-height","max-height",-612563804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(border_radius),"px"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Oregano",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),"px"].join(''),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null),text], null)], null)], null);
});
;})(font_size,width,border_radius,hover_QMARK_,vec__34740,background,color,map__34738,map__34738__$1,opts,height,inverted_QMARK_,mono_QMARK_,text))
});

//# sourceMappingURL=util.js.map?rel=1506023320429
