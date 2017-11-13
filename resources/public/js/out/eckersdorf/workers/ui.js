// Compiled by ClojureScript 1.9.946 {}
goog.provide('eckersdorf.workers.ui');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('antizer.reagent');
goog.require('cuerdas.core');
goog.require('eckersdorf.flex');
goog.require('eckersdorf.utils');
goog.require('clojure.set');
goog.require('cljsjs.moment.locale.pl');
goog.require('cljs_time.coerce');
eckersdorf.workers.ui.worker_dialog = (function eckersdorf$workers$ui$worker_dialog(modify_QMARK_){
var show_dialog_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069)], null));
var workplaces_list = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","list","workplaces/list",852308376)], null));
var worker_form = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617)], null));
var email_addon = "@teas.com.pl";
var valid_worker = reagent.core.atom.call(null,null);
return ((function (show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.modal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visible","visible",-1024216805),!((cljs.core.deref.call(null,show_dialog_QMARK_) == null)),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modify","modify",-1261040869),null], null), null).call(null,cljs.core.deref.call(null,show_dialog_QMARK_)))?"edytuj pracownika":"dodaj pracownika"),new cljs.core.Keyword(null,"footer","footer",1606445390),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766)], null));
});})(show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker))
], null),"anuluj"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("worker","worker","worker/worker",-418761606),cljs.core.deref.call(null,worker_form)))?new cljs.core.Keyword(null,"primary","primary",817773892):new cljs.core.Keyword(null,"danger","danger",-624338030)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker){
return (function (){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("worker","worker","worker/worker",-418761606),cljs.core.deref.call(null,worker_form)))){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modify","modify",-1261040869),null], null), null).call(null,cljs.core.deref.call(null,show_dialog_QMARK_)))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-create","workers/request-create",652227090)], null));
}
} else {
return antizer.reagent.message_warning.call(null,"wprowadzono b\u0142\u0119dne dane");
}
});})(show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker))
], null),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modify","modify",-1261040869),null], null), null).call(null,cljs.core.deref.call(null,show_dialog_QMARK_)))?"modyfikuj":"dodaj")], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var map__42371 = cljs.core.deref.call(null,worker_form);
var map__42371__$1 = ((((!((map__42371 == null)))?((((map__42371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42371):map__42371);
var first_name = cljs.core.get.call(null,map__42371__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__42371__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutter","gutter",1047805662),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate-status","validate-status",-612956038),(((!((first_name == null))) && (cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645),first_name))))?new cljs.core.Keyword(null,"error","error",-978969032):null),new cljs.core.Keyword(null,"help","help",-439233446),(((!((first_name == null))) && (cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645),first_name))))?"pole nie mo\u017Ce by\u0107 puste":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"imi\u0119",new cljs.core.Keyword(null,"value","value",305978217),first_name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__42371,map__42371__$1,first_name,last_name,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker){
return (function (e){
var val = cuerdas.core.lower.call(null,e.target.value);
var email_address = eckersdorf.utils.simplify_string.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,val)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(email_addon)].join(''));
var worker = cljs.core.assoc.call(null,cljs.core.deref.call(null,worker_form),new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645),val,new cljs.core.Keyword("worker","email-address","worker/email-address",391671898),email_address);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),worker], null));
});})(map__42371,map__42371__$1,first_name,last_name,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate-status","validate-status",-612956038),(((!((last_name == null))) && (cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756),last_name))))?new cljs.core.Keyword(null,"error","error",-978969032):null),new cljs.core.Keyword(null,"help","help",-439233446),(((!((last_name == null))) && (cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756),last_name))))?"pole nie mo\u017Ce by\u0107 puste":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"nazwisko",new cljs.core.Keyword(null,"value","value",305978217),last_name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__42371,map__42371__$1,first_name,last_name,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker){
return (function (e){
var val = cuerdas.core.lower.call(null,e.target.value);
var email_address = cuerdas.core.lower.call(null,eckersdorf.utils.simplify_string.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,first_name)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1(email_addon)].join('')));
var worker = cljs.core.assoc.call(null,cljs.core.deref.call(null,worker_form),new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756),val,new cljs.core.Keyword("worker","email-address","worker/email-address",391671898),email_address);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),worker], null));
});})(map__42371,map__42371__$1,first_name,last_name,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker))
], null)], null)], null)], null)], null);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutter","gutter",1047805662),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),(function (){var map__42373 = cljs.core.deref.call(null,worker_form);
var map__42373__$1 = ((((!((map__42373 == null)))?((((map__42373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42373):map__42373);
var email_address = cljs.core.get.call(null,map__42373__$1,new cljs.core.Keyword("worker","email-address","worker/email-address",391671898));
var email_address__$1 = cljs.core.first.call(null,cuerdas.core.split.call(null,email_address,"@"));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate-status","validate-status",-612956038),(((!((email_address__$1 == null))) && (cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("worker","email-address","worker/email-address",391671898),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(email_address__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(email_addon)].join('')))))?new cljs.core.Keyword(null,"error","error",-978969032):null),new cljs.core.Keyword(null,"help","help",-439233446),(cljs.core.truth_(cuerdas.core.empty_QMARK_.call(null,email_address__$1))?"pole nie mo\u017Ce by\u0107 puste":(((!((email_address__$1 == null))) && (cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("workplace","email-address","workplace/email-address",-2014908542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(email_address__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(email_addon)].join('')))))?"b\u0142\u0119dny adres email":null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"e-mail",new cljs.core.Keyword(null,"value","value",305978217),email_address__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306),email_addon,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__42373,map__42373__$1,email_address,email_address__$1,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker){
return (function (e){
var val = e.target.value;
var worker = cljs.core.assoc.call(null,cljs.core.deref.call(null,worker_form),new cljs.core.Keyword("worker","email-address","worker/email-address",391671898),((cljs.core.not.call(null,cuerdas.core.empty_or_nil_QMARK_.call(null,val)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1(email_addon)].join(''):""));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),worker], null));
});})(map__42373,map__42373__$1,email_address,email_address__$1,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker))
], null)], null)], null);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),(function (){var map__42375 = cljs.core.deref.call(null,worker_form);
var map__42375__$1 = ((((!((map__42375 == null)))?((((map__42375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42375):map__42375);
var phone_number = cljs.core.get.call(null,map__42375__$1,new cljs.core.Keyword("worker","phone-number","worker/phone-number",1303174430));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"wrapper-col","wrapper-col",-1413688923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(24)], null),new cljs.core.Keyword(null,"validate-status","validate-status",-612956038),((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("worker","phone-number","worker/phone-number",1303174430),phone_number)))?new cljs.core.Keyword(null,"error","error",-978969032):null),new cljs.core.Keyword(null,"help","help",-439233446),((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("worker","phone-number","worker/phone-number",1303174430),phone_number)))?"b\u0142\u0119dny numer telefonu":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"numer telefonu",new cljs.core.Keyword(null,"value","value",305978217),phone_number,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),"+48",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__42375,map__42375__$1,phone_number,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker){
return (function (e){
var val = e.target.value;
var worker = cljs.core.assoc.call(null,cljs.core.deref.call(null,worker_form),new cljs.core.Keyword("worker","phone-number","worker/phone-number",1303174430),val);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),worker], null));
});})(map__42375,map__42375__$1,phone_number,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222)], null)], null)], null)], null);
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutter","gutter",1047805662),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),(function (){var map__42377 = cljs.core.deref.call(null,worker_form);
var map__42377__$1 = ((((!((map__42377 == null)))?((((map__42377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42377):map__42377);
var working_hours = cljs.core.get.call(null,map__42377__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"ilo\u015B\u0107 godzin pracy",new cljs.core.Keyword(null,"label-col","label-col",1883390160),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),new cljs.core.Keyword(null,"wrapper-col","wrapper-col",-1413688923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),new cljs.core.Keyword(null,"validate-status","validate-status",-612956038),(((!((working_hours == null))) && (cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629),working_hours))))?new cljs.core.Keyword(null,"error","error",-978969032):null),new cljs.core.Keyword(null,"help","help",-439233446),(cljs.core.truth_(cuerdas.core.empty_QMARK_.call(null,working_hours))?"pole nie mo\u017Ce by\u0107 puste":(((!((working_hours == null))) && (cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629),working_hours))))?"b\u0142\u0119dna liczba":null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.input_number,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),working_hours,new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(12),new cljs.core.Keyword(null,"size","size",1098693007),"200px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__42377,map__42377__$1,working_hours,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker){
return (function (val){
var worker = cljs.core.assoc.call(null,cljs.core.deref.call(null,worker_form),new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629),val);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),worker], null));
});})(map__42377,map__42377__$1,working_hours,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null)], null)], null);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),(function (){var map__42379 = cljs.core.deref.call(null,worker_form);
var map__42379__$1 = ((((!((map__42379 == null)))?((((map__42379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42379):map__42379);
var object_id = cljs.core.get.call(null,map__42379__$1,new cljs.core.Keyword("worker","workplace","worker/workplace",-1450573153));
var workplace = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplace","get-by-id","workplace/get-by-id",-1352956083),object_id], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30523__auto__ = new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,workplace));
if(cljs.core.truth_(or__30523__auto__)){
return or__30523__auto__;
} else {
return "brak";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__42379,map__42379__$1,object_id,workplace,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker){
return (function (val){
var worker = cljs.core.assoc.call(null,cljs.core.deref.call(null,worker_form),new cljs.core.Keyword("worker","workplace","worker/workplace",-1450573153),val);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),worker], null));
});})(map__42379,map__42379__$1,object_id,workplace,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),cljs.core.doall.call(null,(function (){var iter__31405__auto__ = ((function (map__42379,map__42379__$1,object_id,workplace,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker){
return (function eckersdorf$workers$ui$worker_dialog_$_iter__42381(s__42382){
return (new cljs.core.LazySeq(null,((function (map__42379,map__42379__$1,object_id,workplace,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker){
return (function (){
var s__42382__$1 = s__42382;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__42382__$1);
if(temp__5457__auto__){
var s__42382__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42382__$2)){
var c__31403__auto__ = cljs.core.chunk_first.call(null,s__42382__$2);
var size__31404__auto__ = cljs.core.count.call(null,c__31403__auto__);
var b__42384 = cljs.core.chunk_buffer.call(null,size__31404__auto__);
if((function (){var i__42383 = (0);
while(true){
if((i__42383 < size__31404__auto__)){
var w = cljs.core._nth.call(null,c__31403__auto__,i__42383);
var map__42385 = w;
var map__42385__$1 = ((((!((map__42385 == null)))?((((map__42385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42385):map__42385);
var object_id__$1 = cljs.core.get.call(null,map__42385__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__42385__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
cljs.core.chunk_append.call(null,b__42384,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id__$1], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id__$1], null)], null)));

var G__42389 = (i__42383 + (1));
i__42383 = G__42389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42384),eckersdorf$workers$ui$worker_dialog_$_iter__42381.call(null,cljs.core.chunk_rest.call(null,s__42382__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42384),null);
}
} else {
var w = cljs.core.first.call(null,s__42382__$2);
var map__42387 = w;
var map__42387__$1 = ((((!((map__42387 == null)))?((((map__42387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42387):map__42387);
var object_id__$1 = cljs.core.get.call(null,map__42387__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__42387__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id__$1], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id__$1], null)], null)),eckersdorf$workers$ui$worker_dialog_$_iter__42381.call(null,cljs.core.rest.call(null,s__42382__$2)));
}
} else {
return null;
}
break;
}
});})(map__42379,map__42379__$1,object_id,workplace,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker))
,null,null));
});})(map__42379,map__42379__$1,object_id,workplace,show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker))
;
return iter__31405__auto__.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),null,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077),"brak"], null)], null),cljs.core.deref.call(null,workplaces_list)));
})())], null)], null);
})()], null)], null)], null)], null);
});
;})(show_dialog_QMARK_,workplaces_list,worker_form,email_addon,valid_worker))
});
eckersdorf.workers.ui.workers_list = (function eckersdorf$workers$ui$workers_list(){
var workers_list = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","list","workers/list",-759802960)], null));
var workplaces_list = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","list","workplaces/list",852308376)], null));
return ((function (workers_list,workplaces_list){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.table,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"imi\u0119",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645),new cljs.core.Keyword(null,"sorter","sorter",-2066997708),((function (workers_list,workplaces_list){
return (function (a,b){
return cljs.core.compare.call(null,(a["first-name"]),(b["first-name"]));
});})(workers_list,workplaces_list))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"nazwisko",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756),new cljs.core.Keyword(null,"sorter","sorter",-2066997708),((function (workers_list,workplaces_list){
return (function (a,b){
return cljs.core.compare.call(null,(a["last-name"]),(b["last-name"]));
});})(workers_list,workplaces_list))
], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"e-mail",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),new cljs.core.Keyword("worker","email-address","worker/email-address",391671898),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("worker","email-address","worker/email-address",391671898)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"miejsce pracy",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),new cljs.core.Keyword("worker","workplace","worker/workplace",-1450573153),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("worker","workplace","worker/workplace",-1450573153),new cljs.core.Keyword(null,"render","render",-1408033454),((function (workers_list,workplaces_list){
return (function (id,_,___$1){
var map__42390 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplace","get-by-id","workplace/get-by-id",-1352956083),id], null)));
var map__42390__$1 = ((((!((map__42390 == null)))?((((map__42390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42390):map__42390);
var name = cljs.core.get.call(null,map__42390__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
return name;
});})(workers_list,workplaces_list))
,new cljs.core.Keyword(null,"sorter","sorter",-2066997708),((function (workers_list,workplaces_list){
return (function (a,b){
var first_id = (a["workplace"]);
var second_id = (b["workplace"]);
var first_workplace = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplace","get-by-id","workplace/get-by-id",-1352956083),first_id], null)));
var second_workplace = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplace","get-by-id","workplace/get-by-id",-1352956083),second_id], null)));
return cljs.core.compare.call(null,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077).cljs$core$IFn$_invoke$arity$1(first_workplace),new cljs.core.Keyword("workplace","name","workplace/name",-1414028077).cljs$core$IFn$_invoke$arity$1(second_workplace));
});})(workers_list,workplaces_list))
,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.doall.call(null,(function (){var iter__31405__auto__ = ((function (workers_list,workplaces_list){
return (function eckersdorf$workers$ui$workers_list_$_iter__42392(s__42393){
return (new cljs.core.LazySeq(null,((function (workers_list,workplaces_list){
return (function (){
var s__42393__$1 = s__42393;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__42393__$1);
if(temp__5457__auto__){
var s__42393__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42393__$2)){
var c__31403__auto__ = cljs.core.chunk_first.call(null,s__42393__$2);
var size__31404__auto__ = cljs.core.count.call(null,c__31403__auto__);
var b__42395 = cljs.core.chunk_buffer.call(null,size__31404__auto__);
if((function (){var i__42394 = (0);
while(true){
if((i__42394 < size__31404__auto__)){
var map__42396 = cljs.core._nth.call(null,c__31403__auto__,i__42394);
var map__42396__$1 = ((((!((map__42396 == null)))?((((map__42396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42396):map__42396);
var name = cljs.core.get.call(null,map__42396__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
var object_id = cljs.core.get.call(null,map__42396__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
cljs.core.chunk_append.call(null,b__42395,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),name,new cljs.core.Keyword(null,"value","value",305978217),object_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__42400 = (i__42394 + (1));
i__42394 = G__42400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42395),eckersdorf$workers$ui$workers_list_$_iter__42392.call(null,cljs.core.chunk_rest.call(null,s__42393__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42395),null);
}
} else {
var map__42398 = cljs.core.first.call(null,s__42393__$2);
var map__42398__$1 = ((((!((map__42398 == null)))?((((map__42398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42398):map__42398);
var name = cljs.core.get.call(null,map__42398__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
var object_id = cljs.core.get.call(null,map__42398__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),name,new cljs.core.Keyword(null,"value","value",305978217),object_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$workers$ui$workers_list_$_iter__42392.call(null,cljs.core.rest.call(null,s__42393__$2)));
}
} else {
return null;
}
break;
}
});})(workers_list,workplaces_list))
,null,null));
});})(workers_list,workplaces_list))
;
return iter__31405__auto__.call(null,cljs.core.deref.call(null,workplaces_list));
})()),new cljs.core.Keyword(null,"onFilter","onFilter",-791374537),((function (workers_list,workplaces_list){
return (function (v,record){
return cljs.core._EQ_.call(null,v,(record["workplace"]));
});})(workers_list,workplaces_list))
], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wielko\u015B\u0107 etatu w h",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"akcje",new cljs.core.Keyword(null,"render","render",-1408033454),((function (workers_list,workplaces_list){
return (function (_,record,___$1){
var object_id = (record["object-id"]);
var worker = cljs.core.update.call(null,clojure.set.rename_keys.call(null,eckersdorf.utils.add_ns.call(null,cljs.core.dissoc.call(null,cljs.core.js__GT_clj.call(null,record,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"worker","worker",938239996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("worker","object-id","worker/object-id",1703454787),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null)),new cljs.core.Keyword("worker","address","worker/address",1924848680),eckersdorf.utils.add_ns,new cljs.core.Keyword(null,"address","address",559499426));
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (object_id,worker,workers_list,workplaces_list){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-delete","workers/request-delete",-68343540),object_id], null));
});})(object_id,worker,workers_list,workplaces_list))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (object_id,worker,workers_list,workplaces_list){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","modify-worker-dialog","workers/modify-worker-dialog",1703643381),worker], null));
});})(object_id,worker,workers_list,workplaces_list))
], null)], null)], null));
});})(workers_list,workplaces_list))
], null)], null),new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),cljs.core.map_indexed.call(null,((function (workers_list,workplaces_list){
return (function (i,m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",-1388402092),i);
});})(workers_list,workplaces_list))
,cljs.core.deref.call(null,workers_list)),new cljs.core.Keyword(null,"row-key","row-key",-1189010712),"id",new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-size","page-size",223836073),(5)], null)], null)], null);
});
;})(workers_list,workplaces_list))
});
eckersdorf.workers.ui.workers_view = (function eckersdorf$workers$ui$workers_view(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.workers.ui.worker_dialog], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.workers.ui.workers_list], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","create-worker-dialog","workers/create-worker-dialog",1176847078)], null));
})], null),"dodaj"], null)], null)], null);
});
});

//# sourceMappingURL=ui.js.map?rel=1510609297731
