// Compiled by ClojureScript 1.9.946 {}
goog.provide('eckersdorf.view.ui');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('antizer.reagent');
goog.require('goog.string');
goog.require('cuerdas.core');
goog.require('eckersdorf.routes.core');
goog.require('eckersdorf.flex');
goog.require('eckersdorf.user.login.ui');
goog.require('eckersdorf.contacts.ui');
goog.require('eckersdorf.workplaces.ui');
goog.require('eckersdorf.workers.ui');
goog.require('eckersdorf.work_schedule.ui');
eckersdorf.view.ui.page = (function eckersdorf$view$ui$page(){
var panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","active-panel","view/active-panel",-1798962863)], null));
var logged_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","logged-in?","user/logged-in?",-657925498)], null));
var sider_collapsed_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","sider-collapsed?","view/sider-collapsed?",888100809)], null));
var personal_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","personal-data","user/personal-data",-1584646157)], null));
var scroll_content_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","scroll-content?","view/scroll-content?",2031747859)], null));
return ((function (panel,logged_QMARK_,sider_collapsed_QMARK_,personal_data,scroll_content_QMARK_){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,logged_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.user.login.ui.login_page], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.locale_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale","locale",-2115712697),antizer.reagent.locales.call(null,"pl_PL")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_sider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"no-print",new cljs.core.Keyword(null,"collapsible","collapsible",-1677056983),true,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),cljs.core.deref.call(null,sider_collapsed_QMARK_),new cljs.core.Keyword(null,"on-collapse","on-collapse",-1862907995),((function (panel,logged_QMARK_,sider_collapsed_QMARK_,personal_data,scroll_content_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","toggle-sider","view/toggle-sider",-1166821072)], null));
});})(panel,logged_QMARK_,sider_collapsed_QMARK_,personal_data,scroll_content_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (panel,logged_QMARK_,sider_collapsed_QMARK_,personal_data,scroll_content_QMARK_){
return (function (e){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","set-active-panel","view/set-active-panel",-964344755),cljs.core.keyword.call(null,e.key)], null));
});})(panel,logged_QMARK_,sider_collapsed_QMARK_,personal_data,scroll_content_QMARK_))
,new cljs.core.Keyword(null,"selected-keys","selected-keys",1351833857),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,cljs.core.deref.call(null,panel))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"user","user",1532431356)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"meh-o","meh-o",1532584273)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.title.call(null,new cljs.core.Keyword("user","first-name","user/first-name",-1564894072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,personal_data))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.title.call(null,new cljs.core.Keyword("user","last-name","user/last-name",-1699346595).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,personal_data))))].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"organization","organization",-1639375379)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fork","fork",1062974235)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"struktura"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"contacts","contacts",333503174)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"book","book",-918152214)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"kontakty"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"workplaces","workplaces",1405542315)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shopping-cart","shopping-cart",173904463)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"sklepy"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"workers","workers",-2054878819)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"usergroup-add","usergroup-add",-1893494539)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"pracownicy"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"work-schedule","work-schedule",-1167579262)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"harmonogram pracy"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"24px 24px 0px",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"calc(100vh - 48px)",new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),(function (){var G__53957 = cljs.core.deref.call(null,panel);
var G__53957__$1 = (((G__53957 instanceof cljs.core.Keyword))?G__53957.fqn:null);
switch (G__53957__$1) {
case "user":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"pusto jeszcze"], null);

break;
case "organization":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#org-chart","div#org-chart",-853259710),"organizacja"], null);

break;
case "contacts":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.contacts.ui.contacts_view], null);

break;
case "workplaces":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.workplaces.ui.workplaces_view], null);

break;
case "workers":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.workers.ui.workers_view], null);

break;
case "work-schedule":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_schedule_view], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53957__$1)].join('')));

}
})()], null)], null)], null)], null);
}
});
;})(panel,logged_QMARK_,sider_collapsed_QMARK_,personal_data,scroll_content_QMARK_))
});

//# sourceMappingURL=ui.js.map?rel=1510609389737
