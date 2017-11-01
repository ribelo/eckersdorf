// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.work_schedule.ui');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('antizer.reagent');
goog.require('cuerdas.core');
goog.require('eckersdorf.flex');
goog.require('eckersdorf.utils');
goog.require('eckersdorf.work_schedule.utils');
goog.require('clojure.set');
goog.require('cljsjs.moment.locale.pl');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('cljs_time.periodic');
eckersdorf.work_schedule.ui.short_weekdays = new cljs.core.PersistentArrayMap(null, 7, [(1),"PN",(2),"WT",(3),"\u015AR",(4),"CZ",(5),"PT",(6),"SO",(7),"ND"], null);
eckersdorf.work_schedule.ui.long_weekdays = new cljs.core.PersistentArrayMap(null, 7, [(1),"Poniedzia\u0142ek",(2),"Wtorek",(3),"\u015Aroda",(4),"Czwartek",(5),"Pi\u0105tek",(6),"Sobota",(7),"Niedziela"], null);
eckersdorf.work_schedule.ui.long_months = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(12),(2),(11),(9),(5),(10),(8)],["lipiec","stycze\u0144","kwiecie\u0144","czerwiec","marzec","grudzie\u0144","luty","listopad","wrzesie\u0144","maj","pa\u017Adziernik","sierpie\u0144"]);
eckersdorf.work_schedule.ui.select_workplace = (function eckersdorf$work_schedule$ui$select_workplace(){
var workplaces_list = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","list","workplaces/list",852308376)], null));
var workplace = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962)], null));
return ((function (workplaces_list,workplace){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30249__auto__ = cljs.core.deref.call(null,workplace);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return "brak";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (workplaces_list,workplace){
return (function (val){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-workplace","work-schedule/set-workplace",-600467261),val], null));
});})(workplaces_list,workplace))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (workplaces_list,workplace){
return (function eckersdorf$work_schedule$ui$select_workplace_$_iter__49420(s__49421){
return (new cljs.core.LazySeq(null,((function (workplaces_list,workplace){
return (function (){
var s__49421__$1 = s__49421;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__49421__$1);
if(temp__5290__auto__){
var s__49421__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49421__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__49421__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__49423 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__49422 = (0);
while(true){
if((i__49422 < size__31130__auto__)){
var w = cljs.core._nth.call(null,c__31129__auto__,i__49422);
var map__49424 = w;
var map__49424__$1 = ((((!((map__49424 == null)))?((((map__49424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49424):map__49424);
var object_id = cljs.core.get.call(null,map__49424__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__49424__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
cljs.core.chunk_append.call(null,b__49423,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)));

var G__49428 = (i__49422 + (1));
i__49422 = G__49428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49423),eckersdorf$work_schedule$ui$select_workplace_$_iter__49420.call(null,cljs.core.chunk_rest.call(null,s__49421__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49423),null);
}
} else {
var w = cljs.core.first.call(null,s__49421__$2);
var map__49426 = w;
var map__49426__$1 = ((((!((map__49426 == null)))?((((map__49426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49426):map__49426);
var object_id = cljs.core.get.call(null,map__49426__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__49426__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)),eckersdorf$work_schedule$ui$select_workplace_$_iter__49420.call(null,cljs.core.rest.call(null,s__49421__$2)));
}
} else {
return null;
}
break;
}
});})(workplaces_list,workplace))
,null,null));
});})(workplaces_list,workplace))
;
return iter__31131__auto__.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),null,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077),"brak"], null)], null),cljs.core.deref.call(null,workplaces_list)));
})())], null)], null);
});
;})(workplaces_list,workplace))
});
eckersdorf.work_schedule.ui.select_month = (function eckersdorf$work_schedule$ui$select_month(){
var main_date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118)], null));
return ((function (main_date){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.date_picker_month_picker,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),moment(cljs_time.coerce.to_string.call(null,cljs.core.deref.call(null,main_date))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (main_date){
return (function (date){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-date","work-schedule/set-date",-1172573652),cljs_time.coerce.from_string.call(null,date.toISOString())], null));
});})(main_date))
], null)], null)], null);
});
;})(main_date))
});
eckersdorf.work_schedule.ui.reload_button = (function eckersdorf$work_schedule$ui$reload_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"wczytaj harmonogram"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"cloud-download-o","cloud-download-o",-1973950225),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300)], null));
})], null)], null)], null);
});
});
eckersdorf.work_schedule.ui.sync_button = (function eckersdorf$work_schedule$ui$sync_button(){
var edited_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","edited?","work-schedule/edited?",-752047662)], null));
return ((function (edited_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"zapisz harmonogram"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(cljs.core.deref.call(null,edited_QMARK_))?new cljs.core.Keyword(null,"primary","primary",817773892):null),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"cloud-upload-o","cloud-upload-o",18060247),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (edited_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","sync","work-schedule/sync",1459023889)], null));
});})(edited_QMARK_))
], null)], null)], null);
});
;})(edited_QMARK_))
});
eckersdorf.work_schedule.ui.print_button = (function eckersdorf$work_schedule$ui$print_button(){
var print_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","print?","work-schedule/print?",-1907155809)], null));
return ((function (print_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?"drukuj harmonogram":"edytuj harmonogram")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(cljs.core.deref.call(null,print_QMARK_))?new cljs.core.Keyword(null,"primary","primary",817773892):null),new cljs.core.Keyword(null,"icon","icon",1679606541),((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?new cljs.core.Keyword(null,"printer","printer",-1267797056):new cljs.core.Keyword(null,"calendar","calendar",62308146)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (print_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","toggle-print","work-schedule/toggle-print",1363518021)], null));
});})(print_QMARK_))
], null)], null)], null);
});
;})(print_QMARK_))
});
eckersdorf.work_schedule.ui.work_cell = (function eckersdorf$work_schedule$ui$work_cell(p__49432){
var map__49433 = p__49432;
var map__49433__$1 = ((((!((map__49433 == null)))?((((map__49433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49433):map__49433);
var m = map__49433__$1;
var worker_id = cljs.core.get.call(null,map__49433__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__49433__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__49433__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var work = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","get","work-schedule/get",-529948046),m], null));
var worker = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","by-id","workers/by-id",-30752208),worker_id], null));
var seller_background = "repeating-linear-gradient(\n                           -45deg,\n                           #49a9ee,\n                           #49a9ee 4px,\n                           #add8f7 4px,\n                           #add8f7 8px)";
var butcher_background = "repeating-linear-gradient(\n                            -45deg,\n                            #f46e65,\n                            #f46e65 4px,\n                            #fabeb9 4px,\n                            #fabeb9 8px)";
var vacation_background = "repeating-linear-gradient(\n                             -45deg,\n                             #ffce3d,\n                             #ffce3d 4px,\n                             #ffe9a7 4px,\n                             #ffe9a7 8px)";
var holiday_background = "repeating-linear-gradient(\n                             -45deg,\n                             #f7629e,\n                             #f7629e 4px,\n                             #fcb8d3 4px,\n                             #fcb8d3 8px)";
return ((function (work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime){
return (function (m__$1){
var work_type = new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,work));
var working_hours = new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,worker));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime){
return (function (){
var G__49435 = work_type;
if(cljs.core._EQ_.call(null,null,G__49435)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
} else {
if(cljs.core._EQ_.call(null,"seller",G__49435)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher")], null));
} else {
if(cljs.core._EQ_.call(null,"butcher",G__49435)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),m__$1], null));
} else {
if(cljs.core._EQ_.call(null,"vacation",G__49435)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),m__$1], null));

return setTimeout(((function (G__49435,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
});})(G__49435,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime))
);
} else {
if(cljs.core._EQ_.call(null,"holiday",G__49435)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49435)].join('')));

}
}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime){
return (function (){
var end_datetime = cljs_time.core.plus.call(null,datetime,cljs_time.core.hours.call(null,(function (){var x__30608__auto__ = working_hours;
var y__30609__auto__ = ((21) - cljs_time.core.hour.call(null,datetime));
return ((x__30608__auto__ < y__30609__auto__) ? x__30608__auto__ : y__30609__auto__);
})()));
var G__49436 = work_type;
if(cljs.core._EQ_.call(null,null,G__49436)){
var works = cljs.core.map.call(null,((function (G__49436,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime){
return (function (p1__49429_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__49429_SHARP_);
});})(G__49436,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),works], null));
} else {
if(cljs.core._EQ_.call(null,"seller",G__49436)){
var works = cljs.core.map.call(null,((function (G__49436,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime){
return (function (p1__49430_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__49430_SHARP_,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller");
});})(G__49436,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),works], null));
} else {
if(cljs.core._EQ_.call(null,"butcher",G__49436)){
var works = cljs.core.map.call(null,((function (G__49436,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime){
return (function (p1__49431_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__49431_SHARP_,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher");
});})(G__49436,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),works], null));
} else {
if(cljs.core._EQ_.call(null,"holiday",G__49436)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49436)].join('')));

}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__49437 = work_type;
if(cljs.core._EQ_.call(null,null,G__49437)){
return null;
} else {
if(cljs.core._EQ_.call(null,"seller",G__49437)){
return seller_background;
} else {
if(cljs.core._EQ_.call(null,"butcher",G__49437)){
return butcher_background;
} else {
if(cljs.core._EQ_.call(null,"vacation",G__49437)){
return vacation_background;
} else {
if(cljs.core._EQ_.call(null,"holiday",G__49437)){
return holiday_background;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49437)].join('')));

}
}
}
}
}
})()], null)], null),null], null);
});
;})(work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__49433,map__49433__$1,m,worker_id,workplace_id,datetime))
});
eckersdorf.work_schedule.ui.worked_hours = (function eckersdorf$work_schedule$ui$worked_hours(work){
var worked_hours = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","hours-worked-in-month","work-schedule/hours-worked-in-month",1171046832),work], null));
return ((function (worked_hours){
return (function (work__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,worked_hours)], null);
});
;})(worked_hours))
});
eckersdorf.work_schedule.ui.worked_days = (function eckersdorf$work_schedule$ui$worked_days(work){
var worked_days = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","days-worked-in-month","work-schedule/days-worked-in-month",1038496604),work], null));
return ((function (worked_days){
return (function (work__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,worked_days)], null);
});
;})(worked_days))
});
eckersdorf.work_schedule.ui.worked_first_changes = (function eckersdorf$work_schedule$ui$worked_first_changes(work){
var x = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","first-changes-worked-in-month","work-schedule/first-changes-worked-in-month",2068610616),work], null));
return ((function (x){
return (function (work__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,x)], null);
});
;})(x))
});
eckersdorf.work_schedule.ui.worked_second_changes = (function eckersdorf$work_schedule$ui$worked_second_changes(work){
var x = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","second-changes-worked-in-month","work-schedule/second-changes-worked-in-month",-856750358),work], null));
return ((function (x){
return (function (work__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,x)], null);
});
;})(x))
});
eckersdorf.work_schedule.ui.worked_saturdays = (function eckersdorf$work_schedule$ui$worked_saturdays(work){
var x = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","saturdays-worked-in-month","work-schedule/saturdays-worked-in-month",1098814461),work], null));
return ((function (x){
return (function (work__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,x)], null);
});
;})(x))
});
eckersdorf.work_schedule.ui.worked_sundays = (function eckersdorf$work_schedule$ui$worked_sundays(work){
var x = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","sundays-worked-in-month","work-schedule/sundays-worked-in-month",-664863278),work], null));
return ((function (x){
return (function (work__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,x)], null);
});
;})(x))
});
eckersdorf.work_schedule.ui.work_schedule_print = (function eckersdorf$work_schedule$ui$work_schedule_print(){
var main_date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118)], null));
var days = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","days","work-schedule/days",550342111)], null));
var workplace_id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962)], null));
var workplace = reagent.ratom.make_reaction.call(null,((function (main_date,days,workplace_id){
return (function (){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplace","get-by-id","workplace/get-by-id",-1352956083),cljs.core.deref.call(null,workplace_id)], null)));
});})(main_date,days,workplace_id))
);
var workers = reagent.ratom.make_reaction.call(null,((function (main_date,days,workplace_id,workplace){
return (function (){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","by-workplace-id","workers/by-workplace-id",1364741936),cljs.core.deref.call(null,workplace_id)], null)));
});})(main_date,days,workplace_id,workplace))
);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"work-schedule-print",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (main_date,days,workplace_id,workplace,workers){
return (function (){
return window.print();
});})(main_date,days,workplace_id,workplace,workers))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (main_date,days,workplace_id,workplace,workers){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"avoid-break"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"no-print",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_workplace], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_month], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button_group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.reload_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.sync_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.print_button], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["grafik na ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_months,cljs_time.core.month.call(null,cljs.core.deref.call(null,main_date))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.year.call(null,cljs.core.deref.call(null,main_date)))," dla ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("workplace","name","workplace/name",-1414028077).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,workplace)))].join('')], null)], null)], null)], null);
});})(main_date,days,workplace_id,workplace,workers))
], null));
});
eckersdorf.work_schedule.ui.work_schedule_app = (function eckersdorf$work_schedule$ui$work_schedule_app(){
var main_date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118)], null));
var days = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","days","work-schedule/days",550342111)], null));
var workplace_id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962)], null));
var workers = reagent.ratom.make_reaction.call(null,((function (main_date,days,workplace_id){
return (function (){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","by-workplace-id","workers/by-workplace-id",1364741936),cljs.core.deref.call(null,workplace_id)], null)));
});})(main_date,days,workplace_id))
);
return ((function (main_date,days,workplace_id,workers){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"no-print",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_workplace], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_month], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button_group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.reload_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.sync_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.print_button], null)], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,workplace_id)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"prosz\u0119 wybra\u0107 sklep"], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"14 0 0",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"24px"], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438(s__49439){
return (new cljs.core.LazySeq(null,((function (main_date,days,workplace_id,workers){
return (function (){
var s__49439__$1 = s__49439;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__49439__$1);
if(temp__5290__auto__){
var s__49439__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49439__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__49439__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__49441 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__49440 = (0);
while(true){
if((i__49440 < size__31130__auto__)){
var date = cljs.core._nth.call(null,c__31129__auto__,i__49440);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
cljs.core.chunk_append.call(null,b__49441,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"\u015Bwi\u0119to",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dingding","dingding",903973456),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49440,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
}
});})(i__49440,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 4px"], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (i__49440,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49442(s__49443){
return (new cljs.core.LazySeq(null,((function (i__49440,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__49443__$1 = s__49443;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__49443__$1);
if(temp__5290__auto____$1){
var s__49443__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49443__$2)){
var c__31129__auto____$1 = cljs.core.chunk_first.call(null,s__49443__$2);
var size__31130__auto____$1 = cljs.core.count.call(null,c__31129__auto____$1);
var b__49445 = cljs.core.chunk_buffer.call(null,size__31130__auto____$1);
if((function (){var i__49444 = (0);
while(true){
if((i__49444 < size__31130__auto____$1)){
var hour = cljs.core._nth.call(null,c__31129__auto____$1,i__49444);
cljs.core.chunk_append.call(null,b__49445,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__49490 = (i__49444 + (1));
i__49444 = G__49490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49445),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49442.call(null,cljs.core.chunk_rest.call(null,s__49443__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49445),null);
}
} else {
var hour = cljs.core.first.call(null,s__49443__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49442.call(null,cljs.core.rest.call(null,s__49443__$2)));
}
} else {
return null;
}
break;
}
});})(i__49440,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__49440,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (i__49440,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49446(s__49447){
return (new cljs.core.LazySeq(null,((function (i__49440,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__49447__$1 = s__49447;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__49447__$1);
if(temp__5290__auto____$1){
var s__49447__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49447__$2)){
var c__31129__auto____$1 = cljs.core.chunk_first.call(null,s__49447__$2);
var size__31130__auto____$1 = cljs.core.count.call(null,c__31129__auto____$1);
var b__49449 = cljs.core.chunk_buffer.call(null,size__31130__auto____$1);
if((function (){var i__49448 = (0);
while(true){
if((i__49448 < size__31130__auto____$1)){
var map__49450 = cljs.core._nth.call(null,c__31129__auto____$1,i__49448);
var map__49450__$1 = ((((!((map__49450 == null)))?((((map__49450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49450):map__49450);
var object_id = cljs.core.get.call(null,map__49450__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__49450__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__49450__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__49450__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__49449,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49448,i__49440,map__49450,map__49450__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__49449,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
var vacation_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-vacation?","work-schedule/is-vacation?",-699162927),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
if(cljs.core.not.call(null,cljs.core.deref.call(null,vacation_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
}
});})(i__49448,i__49440,map__49450,map__49450__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__49449,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49448,i__49440,map__49450,map__49450__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__49449,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__49448,i__49440,map__49450,map__49450__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__49449,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (i__49448,i__49440,map__49450,map__49450__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__49449,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49446_$_iter__49452(s__49453){
return (new cljs.core.LazySeq(null,((function (i__49448,i__49440,map__49450,map__49450__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__49449,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__49453__$1 = s__49453;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__49453__$1);
if(temp__5290__auto____$2){
var s__49453__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49453__$2)){
var c__31129__auto____$2 = cljs.core.chunk_first.call(null,s__49453__$2);
var size__31130__auto____$2 = cljs.core.count.call(null,c__31129__auto____$2);
var b__49455 = cljs.core.chunk_buffer.call(null,size__31130__auto____$2);
if((function (){var i__49454 = (0);
while(true){
if((i__49454 < size__31130__auto____$2)){
var hour = cljs.core._nth.call(null,c__31129__auto____$2,i__49454);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__49455,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__49491 = (i__49454 + (1));
i__49454 = G__49491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49455),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49446_$_iter__49452.call(null,cljs.core.chunk_rest.call(null,s__49453__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49455),null);
}
} else {
var hour = cljs.core.first.call(null,s__49453__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49446_$_iter__49452.call(null,cljs.core.rest.call(null,s__49453__$2)));
}
} else {
return null;
}
break;
}
});})(i__49448,i__49440,map__49450,map__49450__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__49449,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__49448,i__49440,map__49450,map__49450__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__49449,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__49492 = (i__49448 + (1));
i__49448 = G__49492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49449),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49446.call(null,cljs.core.chunk_rest.call(null,s__49447__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49449),null);
}
} else {
var map__49456 = cljs.core.first.call(null,s__49447__$2);
var map__49456__$1 = ((((!((map__49456 == null)))?((((map__49456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49456):map__49456);
var object_id = cljs.core.get.call(null,map__49456__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__49456__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__49456__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__49456__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49440,map__49456,map__49456__$1,object_id,first_name,last_name,working_hours,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
var vacation_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-vacation?","work-schedule/is-vacation?",-699162927),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
if(cljs.core.not.call(null,cljs.core.deref.call(null,vacation_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
}
});})(i__49440,map__49456,map__49456__$1,object_id,first_name,last_name,working_hours,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49440,map__49456,map__49456__$1,object_id,first_name,last_name,working_hours,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__49440,map__49456,map__49456__$1,object_id,first_name,last_name,working_hours,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (i__49440,map__49456,map__49456__$1,object_id,first_name,last_name,working_hours,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49446_$_iter__49458(s__49459){
return (new cljs.core.LazySeq(null,((function (i__49440,map__49456,map__49456__$1,object_id,first_name,last_name,working_hours,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__49459__$1 = s__49459;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__49459__$1);
if(temp__5290__auto____$2){
var s__49459__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49459__$2)){
var c__31129__auto____$1 = cljs.core.chunk_first.call(null,s__49459__$2);
var size__31130__auto____$1 = cljs.core.count.call(null,c__31129__auto____$1);
var b__49461 = cljs.core.chunk_buffer.call(null,size__31130__auto____$1);
if((function (){var i__49460 = (0);
while(true){
if((i__49460 < size__31130__auto____$1)){
var hour = cljs.core._nth.call(null,c__31129__auto____$1,i__49460);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__49461,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__49493 = (i__49460 + (1));
i__49460 = G__49493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49461),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49446_$_iter__49458.call(null,cljs.core.chunk_rest.call(null,s__49459__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49461),null);
}
} else {
var hour = cljs.core.first.call(null,s__49459__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49446_$_iter__49458.call(null,cljs.core.rest.call(null,s__49459__$2)));
}
} else {
return null;
}
break;
}
});})(i__49440,map__49456,map__49456__$1,object_id,first_name,last_name,working_hours,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__49440,map__49456,map__49456__$1,object_id,first_name,last_name,working_hours,s__49447__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49446.call(null,cljs.core.rest.call(null,s__49447__$2)));
}
} else {
return null;
}
break;
}
});})(i__49440,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__49440,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__49441,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)));

var G__49494 = (i__49440 + (1));
i__49440 = G__49494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49441),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438.call(null,cljs.core.chunk_rest.call(null,s__49439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49441),null);
}
} else {
var date = cljs.core.first.call(null,s__49439__$2);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"\u015Bwi\u0119to",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dingding","dingding",903973456),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
}
});})(weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 4px"], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49462(s__49463){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__49463__$1 = s__49463;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__49463__$1);
if(temp__5290__auto____$1){
var s__49463__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49463__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__49463__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__49465 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__49464 = (0);
while(true){
if((i__49464 < size__31130__auto__)){
var hour = cljs.core._nth.call(null,c__31129__auto__,i__49464);
cljs.core.chunk_append.call(null,b__49465,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__49495 = (i__49464 + (1));
i__49464 = G__49495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49465),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49462.call(null,cljs.core.chunk_rest.call(null,s__49463__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49465),null);
}
} else {
var hour = cljs.core.first.call(null,s__49463__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49462.call(null,cljs.core.rest.call(null,s__49463__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49466(s__49467){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__49467__$1 = s__49467;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__49467__$1);
if(temp__5290__auto____$1){
var s__49467__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49467__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__49467__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__49469 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__49468 = (0);
while(true){
if((i__49468 < size__31130__auto__)){
var map__49470 = cljs.core._nth.call(null,c__31129__auto__,i__49468);
var map__49470__$1 = ((((!((map__49470 == null)))?((((map__49470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49470):map__49470);
var object_id = cljs.core.get.call(null,map__49470__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__49470__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__49470__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__49470__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__49469,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49468,map__49470,map__49470__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__49469,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
var vacation_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-vacation?","work-schedule/is-vacation?",-699162927),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
if(cljs.core.not.call(null,cljs.core.deref.call(null,vacation_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
}
});})(i__49468,map__49470,map__49470__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__49469,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49468,map__49470,map__49470__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__49469,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__49468,map__49470,map__49470__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__49469,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (i__49468,map__49470,map__49470__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__49469,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49466_$_iter__49472(s__49473){
return (new cljs.core.LazySeq(null,((function (i__49468,map__49470,map__49470__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__49469,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__49473__$1 = s__49473;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__49473__$1);
if(temp__5290__auto____$2){
var s__49473__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49473__$2)){
var c__31129__auto____$1 = cljs.core.chunk_first.call(null,s__49473__$2);
var size__31130__auto____$1 = cljs.core.count.call(null,c__31129__auto____$1);
var b__49475 = cljs.core.chunk_buffer.call(null,size__31130__auto____$1);
if((function (){var i__49474 = (0);
while(true){
if((i__49474 < size__31130__auto____$1)){
var hour = cljs.core._nth.call(null,c__31129__auto____$1,i__49474);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__49475,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__49496 = (i__49474 + (1));
i__49474 = G__49496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49475),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49466_$_iter__49472.call(null,cljs.core.chunk_rest.call(null,s__49473__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49475),null);
}
} else {
var hour = cljs.core.first.call(null,s__49473__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49466_$_iter__49472.call(null,cljs.core.rest.call(null,s__49473__$2)));
}
} else {
return null;
}
break;
}
});})(i__49468,map__49470,map__49470__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__49469,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__49468,map__49470,map__49470__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__49469,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__49497 = (i__49468 + (1));
i__49468 = G__49497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49469),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49466.call(null,cljs.core.chunk_rest.call(null,s__49467__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49469),null);
}
} else {
var map__49476 = cljs.core.first.call(null,s__49467__$2);
var map__49476__$1 = ((((!((map__49476 == null)))?((((map__49476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49476):map__49476);
var object_id = cljs.core.get.call(null,map__49476__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__49476__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__49476__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__49476__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__49476,map__49476__$1,object_id,first_name,last_name,working_hours,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
var vacation_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-vacation?","work-schedule/is-vacation?",-699162927),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
if(cljs.core.not.call(null,cljs.core.deref.call(null,vacation_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
}
});})(map__49476,map__49476__$1,object_id,first_name,last_name,working_hours,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__49476,map__49476__$1,object_id,first_name,last_name,working_hours,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(map__49476,map__49476__$1,object_id,first_name,last_name,working_hours,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (map__49476,map__49476__$1,object_id,first_name,last_name,working_hours,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49466_$_iter__49478(s__49479){
return (new cljs.core.LazySeq(null,((function (map__49476,map__49476__$1,object_id,first_name,last_name,working_hours,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__49479__$1 = s__49479;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__49479__$1);
if(temp__5290__auto____$2){
var s__49479__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49479__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__49479__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__49481 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__49480 = (0);
while(true){
if((i__49480 < size__31130__auto__)){
var hour = cljs.core._nth.call(null,c__31129__auto__,i__49480);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__49481,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__49498 = (i__49480 + (1));
i__49480 = G__49498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49481),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49466_$_iter__49478.call(null,cljs.core.chunk_rest.call(null,s__49479__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49481),null);
}
} else {
var hour = cljs.core.first.call(null,s__49479__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49466_$_iter__49478.call(null,cljs.core.rest.call(null,s__49479__$2)));
}
} else {
return null;
}
break;
}
});})(map__49476,map__49476__$1,object_id,first_name,last_name,working_hours,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(map__49476,map__49476__$1,object_id,first_name,last_name,working_hours,s__49467__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438_$_iter__49466.call(null,cljs.core.rest.call(null,s__49467__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__49439__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49438.call(null,cljs.core.rest.call(null,s__49439__$2)));
}
} else {
return null;
}
break;
}
});})(main_date,days,workplace_id,workers))
,null,null));
});})(main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.deref.call(null,days));
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"no-print",new cljs.core.Keyword(null,"size","size",1098693007),"3 0 auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 12px"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null),"osoba"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba godzin"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"g"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba pierwszych zmian"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"p"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba drugich zmian"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"d"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba sob\u00F3t"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"s"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba niedziel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"n"], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49482(s__49483){
return (new cljs.core.LazySeq(null,((function (main_date,days,workplace_id,workers){
return (function (){
var s__49483__$1 = s__49483;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__49483__$1);
if(temp__5290__auto__){
var s__49483__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49483__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__49483__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__49485 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__49484 = (0);
while(true){
if((i__49484 < size__31130__auto__)){
var map__49486 = cljs.core._nth.call(null,c__31129__auto__,i__49484);
var map__49486__$1 = ((((!((map__49486 == null)))?((((map__49486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49486):map__49486);
var object_id = cljs.core.get.call(null,map__49486__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__49486__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__49486__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__49486__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__49485,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,first_name)),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_hours,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_first_changes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_second_changes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_saturdays,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_sundays,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__49499 = (i__49484 + (1));
i__49484 = G__49499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49485),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49482.call(null,cljs.core.chunk_rest.call(null,s__49483__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49485),null);
}
} else {
var map__49488 = cljs.core.first.call(null,s__49483__$2);
var map__49488__$1 = ((((!((map__49488 == null)))?((((map__49488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49488):map__49488);
var object_id = cljs.core.get.call(null,map__49488__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__49488__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__49488__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__49488__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,first_name)),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_hours,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_first_changes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_second_changes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_saturdays,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_sundays,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__49482.call(null,cljs.core.rest.call(null,s__49483__$2)));
}
} else {
return null;
}
break;
}
});})(main_date,days,workplace_id,workers))
,null,null));
});})(main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.deref.call(null,workers));
})())], null)], null))], null);
});
;})(main_date,days,workplace_id,workers))
});
eckersdorf.work_schedule.ui.work_schedule_view = (function eckersdorf$work_schedule$ui$work_schedule_view(){
var print_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","print?","work-schedule/print?",-1907155809)], null));
return ((function (print_QMARK_){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_schedule_app], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_schedule_print], null);
}
});
;})(print_QMARK_))
});

//# sourceMappingURL=ui.js.map?rel=1509571947563
