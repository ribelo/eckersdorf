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
goog.require('eckersdorf.user.login.ui');
eckersdorf.view.ui.sider = (function eckersdorf$view$ui$sider(){
return (function (){
return null;
});
});
cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","list","workplaces/list",852308376)], null))));
eckersdorf.view.ui.workplaces_list = (function eckersdorf$view$ui$workplaces_list(){
var workplaces_list = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","list","workplaces/list",852308376)], null));
return ((function (workplaces_list){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"nazwa",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),new cljs.core.Keyword("workplace","name","workplace/name",-1414028077),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("workplace","name","workplace/name",-1414028077)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"typ",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),new cljs.core.Keyword("workplace","type","workplace/type",-9855694),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("workplace","type","workplace/type",-9855694)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"e-mail",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),new cljs.core.Keyword("workplace","email-address","workplace/email-address",-2014908542),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("workplace","email-address","workplace/email-address",-2014908542)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"ulica",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),"address.street-name",new cljs.core.Keyword(null,"key","key",-1516042587),"address.street-name"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"numer ulicy",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),"address.street-number",new cljs.core.Keyword(null,"key","key",-1516042587),"address.street-number"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"numer budynku",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),"address.house-number",new cljs.core.Keyword(null,"key","key",-1516042587),"address.house-number",new cljs.core.Keyword(null,"render","render",-1408033454),((function (workplaces_list){
return (function (p1__40538_SHARP_){
var or__30249__auto__ = p1__40538_SHARP_;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return "brak";
}
});})(workplaces_list))
], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"kod pocztowy",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),"address.zip-code",new cljs.core.Keyword(null,"key","key",-1516042587),"address.zip-code"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"miejscowo\u015B\u0107",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),"address.city",new cljs.core.Keyword(null,"key","key",-1516042587),"address.city"], null)], null),new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),cljs.core.deref.call(null,workplaces_list)], null)], null);
});
;})(workplaces_list))
});
eckersdorf.view.ui.page = (function eckersdorf$view$ui$page(){
var logged_QMARK_ = (function (){var or__30249__auto__ = cljs.core.atom.call(null,true);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","logged-in?","user/logged-in?",-657925498)], null));
}
})();
var sider_collapsed_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","sider-collapsed?","view/sider-collapsed?",888100809)], null));
var personal_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","personal-data","user/personal-data",-1584646157)], null));
return ((function (logged_QMARK_,sider_collapsed_QMARK_,personal_data){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,logged_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.user.login.ui.login_page], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_sider,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"collapsible","collapsible",-1677056983),true,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),cljs.core.deref.call(null,sider_collapsed_QMARK_),new cljs.core.Keyword(null,"on-collapse","on-collapse",-1862907995),((function (logged_QMARK_,sider_collapsed_QMARK_,personal_data){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","sider-toggle","view/sider-toggle",-65349742)], null));
});})(logged_QMARK_,sider_collapsed_QMARK_,personal_data))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"inherit","inherit",-1840815422)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"inline","inline",1399884222)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"meh-o","meh-o",1532584273)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.title.call(null,new cljs.core.Keyword("user","first-name","user/first-name",-1564894072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,personal_data))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.title.call(null,new cljs.core.Keyword("user","last-name","user/last-name",-1699346595).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,personal_data))))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shopping-cart","shopping-cart",173904463)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Sklepy"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"usergroup-add","usergroup-add",-1893494539)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Pracownicy"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Harmonogram Pracy"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"24px 24px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.view.ui.workplaces_list], null)], null)], null)], null);
}
});
;})(logged_QMARK_,sider_collapsed_QMARK_,personal_data))
});

//# sourceMappingURL=ui.js.map?rel=1506631163145
