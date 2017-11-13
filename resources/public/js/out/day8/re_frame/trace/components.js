// Compiled by ClojureScript 1.9.946 {}
goog.provide('day8.re_frame.trace.components');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('goog.fx.dom');
day8.re_frame.trace.components.search_input = (function day8$re_frame$trace$components$search_input(p__52710){
var map__52711 = p__52710;
var map__52711__$1 = ((((!((map__52711 == null)))?((((map__52711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52711):map__52711);
var title = cljs.core.get.call(null,map__52711__$1,new cljs.core.Keyword(null,"title","title",636505583));
var placeholder = cljs.core.get.call(null,map__52711__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_save = cljs.core.get.call(null,map__52711__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_change = cljs.core.get.call(null,map__52711__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_stop = cljs.core.get.call(null,map__52711__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = reagent.core.atom.call(null,title);
var save = ((function (val,map__52711,map__52711__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
var v = clojure.string.trim.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''));
if((cljs.core.count.call(null,v) > (0))){
return on_save.call(null,v);
} else {
return null;
}
});})(val,map__52711,map__52711__$1,title,placeholder,on_save,on_change,on_stop))
;
return ((function (val,save,map__52711,map__52711__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"size","size",1098693007),((((20) > cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''))))?(25):cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,save,map__52711,map__52711__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__52708_SHARP_){
cljs.core.reset_BANG_.call(null,val,p1__52708_SHARP_.target.value);

return on_change.call(null,p1__52708_SHARP_);
});})(val,save,map__52711,map__52711__$1,title,placeholder,on_save,on_change,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,save,map__52711,map__52711__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__52709_SHARP_){
var G__52713 = p1__52709_SHARP_.which;
switch (G__52713) {
case (13):
save.call(null);

return cljs.core.reset_BANG_.call(null,val,"");

break;
default:
return null;

}
});})(val,save,map__52711,map__52711__$1,title,placeholder,on_save,on_change,on_stop))
], null)], null);
});
;})(val,save,map__52711,map__52711__$1,title,placeholder,on_save,on_change,on_stop))
});
day8.re_frame.trace.components.scroll_BANG_ = (function day8$re_frame$trace$components$scroll_BANG_(el,start,end,time){
return (new goog.fx.dom.Scroll(el,cljs.core.clj__GT_js.call(null,start),cljs.core.clj__GT_js.call(null,end),time)).play();
});
day8.re_frame.trace.components.scrolled_to_end_QMARK_ = (function day8$re_frame$trace$components$scrolled_to_end_QMARK_(el,tolerance){
return (tolerance > ((el.scrollHeight - el.scrollTop) - el.clientHeight));
});
day8.re_frame.trace.components.autoscroll_list = (function day8$re_frame$trace$components$autoscroll_list(p__52715,child){
var map__52716 = p__52715;
var map__52716__$1 = ((((!((map__52716 == null)))?((((map__52716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52716):map__52716);
var class$ = cljs.core.get.call(null,map__52716__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var scroll_QMARK_ = cljs.core.get.call(null,map__52716__$1,new cljs.core.Keyword(null,"scroll?","scroll?",-1393045951));

var node = reagent.core.atom.call(null,null);
var should_scroll = reagent.core.atom.call(null,true);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"autoscroll-list",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (node,should_scroll,map__52716,map__52716__$1,class$,scroll_QMARK_){
return (function (_){
return day8.re_frame.trace.components.scroll_BANG_.call(null,cljs.core.deref.call(null,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollHeight], null),(0));
});})(node,should_scroll,map__52716,map__52716__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),((function (node,should_scroll,map__52716,map__52716__$1,class$,scroll_QMARK_){
return (function (_){
return cljs.core.reset_BANG_.call(null,should_scroll,day8.re_frame.trace.components.scrolled_to_end_QMARK_.call(null,cljs.core.deref.call(null,node),(100)));
});})(node,should_scroll,map__52716,map__52716__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (node,should_scroll,map__52716,map__52716__$1,class$,scroll_QMARK_){
return (function (_){
if(cljs.core.truth_((function (){var and__30510__auto__ = scroll_QMARK_;
if(cljs.core.truth_(and__30510__auto__)){
return cljs.core.deref.call(null,should_scroll);
} else {
return and__30510__auto__;
}
})())){
return day8.re_frame.trace.components.scroll_BANG_.call(null,cljs.core.deref.call(null,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollHeight], null),(500));
} else {
return null;
}
});})(node,should_scroll,map__52716,map__52716__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (node,should_scroll,map__52716,map__52716__$1,class$,scroll_QMARK_){
return (function (p__52718,child__$1){
var map__52719 = p__52718;
var map__52719__$1 = ((((!((map__52719 == null)))?((((map__52719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52719):map__52719);
var class$__$1 = cljs.core.get.call(null,map__52719__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__52719,map__52719__$1,class$__$1,node,should_scroll,map__52716,map__52716__$1,class$,scroll_QMARK_){
return (function (dom_node){
return cljs.core.reset_BANG_.call(null,node,dom_node);
});})(map__52719,map__52719__$1,class$__$1,node,should_scroll,map__52716,map__52716__$1,class$,scroll_QMARK_))
], null),child__$1], null);
});})(node,should_scroll,map__52716,map__52716__$1,class$,scroll_QMARK_))
], null));
});

//# sourceMappingURL=components.js.map?rel=1510602164571
