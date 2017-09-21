// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.view.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('antizer.reagent');
goog.require('goog.string');
goog.require('cuerdas.core');
goog.require('eckersdorf.routes.core');
goog.require('eckersdorf.util');
goog.require('eckersdorf.flex');
goog.require('eckersdorf.login.ui');
eckersdorf.view.ui.sider = (function eckersdorf$view$ui$sider(){
var sider_collapsed_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","sider-collapsed?","view/sider-collapsed?",888100809)], null));
return ((function (sider_collapsed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_sider,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"collapsible","collapsible",-1677056983),true,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),cljs.core.deref.call(null,sider_collapsed_QMARK_),new cljs.core.Keyword(null,"on-collapse","on-collapse",-1862907995),((function (sider_collapsed_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","sider-toggle","view/sider-toggle",-65349742)], null));
});})(sider_collapsed_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"inherit","inherit",-1840815422)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"inline","inline",1399884222)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Harmonogram Pracy"], null)], null)], null)], null);
});
;})(sider_collapsed_QMARK_))
});
eckersdorf.view.ui.page = (function eckersdorf$view$ui$page(){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.login.ui.login_page], null);
});
});

//# sourceMappingURL=ui.js.map?rel=1506034075607
