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
return (function eckersdorf$work_schedule$ui$select_workplace_$_iter__55005(s__55006){
return (new cljs.core.LazySeq(null,((function (workplaces_list,workplace){
return (function (){
var s__55006__$1 = s__55006;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__55006__$1);
if(temp__5290__auto__){
var s__55006__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55006__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__55006__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__55008 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__55007 = (0);
while(true){
if((i__55007 < size__31130__auto__)){
var w = cljs.core._nth.call(null,c__31129__auto__,i__55007);
var map__55009 = w;
var map__55009__$1 = ((((!((map__55009 == null)))?((((map__55009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55009):map__55009);
var object_id = cljs.core.get.call(null,map__55009__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__55009__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
cljs.core.chunk_append.call(null,b__55008,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)));

var G__55013 = (i__55007 + (1));
i__55007 = G__55013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55008),eckersdorf$work_schedule$ui$select_workplace_$_iter__55005.call(null,cljs.core.chunk_rest.call(null,s__55006__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55008),null);
}
} else {
var w = cljs.core.first.call(null,s__55006__$2);
var map__55011 = w;
var map__55011__$1 = ((((!((map__55011 == null)))?((((map__55011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55011):map__55011);
var object_id = cljs.core.get.call(null,map__55011__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__55011__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)),eckersdorf$work_schedule$ui$select_workplace_$_iter__55005.call(null,cljs.core.rest.call(null,s__55006__$2)));
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
eckersdorf.work_schedule.ui.work_cell = (function eckersdorf$work_schedule$ui$work_cell(p__55017){
var map__55018 = p__55017;
var map__55018__$1 = ((((!((map__55018 == null)))?((((map__55018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55018):map__55018);
var m = map__55018__$1;
var worker_id = cljs.core.get.call(null,map__55018__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__55018__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__55018__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var work = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","get","work-schedule/get",-529948046),m], null));
var worker = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","by-id","workers/by-id",-30752208),worker_id], null));
var seller_background = "repeating-linear-gradient(\n                           -45deg,\n                           #49a9ee,\n                           #49a9ee 4px,\n                           #add8f7 4px,\n                           #add8f7 8px)";
var butcher_background = "repeating-linear-gradient(\n                            -45deg,\n                            #f46e65,\n                            #f46e65 4px,\n                            #fabeb9 4px,\n                            #fabeb9 8px)";
var vacation_background = "repeating-linear-gradient(\n                             -45deg,\n                             #ffce3d,\n                             #ffce3d 4px,\n                             #ffe9a7 4px,\n                             #ffe9a7 8px)";
var holiday_background = "repeating-linear-gradient(\n                             -45deg,\n                             #f7629e,\n                             #f7629e 4px,\n                             #fcb8d3 4px,\n                             #fcb8d3 8px)";
return ((function (work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime){
return (function (m__$1){
var work_type = new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,work));
var working_hours = new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,worker));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime){
return (function (){
var G__55020 = work_type;
if(cljs.core._EQ_.call(null,null,G__55020)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
} else {
if(cljs.core._EQ_.call(null,"seller",G__55020)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher")], null));
} else {
if(cljs.core._EQ_.call(null,"butcher",G__55020)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),m__$1], null));
} else {
if(cljs.core._EQ_.call(null,"vacation",G__55020)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),m__$1], null));

return setTimeout(((function (G__55020,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
});})(G__55020,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime))
);
} else {
if(cljs.core._EQ_.call(null,"holiday",G__55020)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55020)].join('')));

}
}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime){
return (function (){
var end_datetime = cljs_time.core.plus.call(null,datetime,cljs_time.core.hours.call(null,(function (){var x__30608__auto__ = working_hours;
var y__30609__auto__ = ((21) - cljs_time.core.hour.call(null,datetime));
return ((x__30608__auto__ < y__30609__auto__) ? x__30608__auto__ : y__30609__auto__);
})()));
var G__55021 = work_type;
if(cljs.core._EQ_.call(null,null,G__55021)){
var works = cljs.core.map.call(null,((function (G__55021,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime){
return (function (p1__55014_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__55014_SHARP_);
});})(G__55021,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),works], null));
} else {
if(cljs.core._EQ_.call(null,"seller",G__55021)){
var works = cljs.core.map.call(null,((function (G__55021,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime){
return (function (p1__55015_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__55015_SHARP_,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller");
});})(G__55021,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),works], null));
} else {
if(cljs.core._EQ_.call(null,"butcher",G__55021)){
var works = cljs.core.map.call(null,((function (G__55021,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime){
return (function (p1__55016_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__55016_SHARP_,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher");
});})(G__55021,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),works], null));
} else {
if(cljs.core._EQ_.call(null,"holiday",G__55021)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55021)].join('')));

}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__55022 = work_type;
if(cljs.core._EQ_.call(null,null,G__55022)){
return null;
} else {
if(cljs.core._EQ_.call(null,"seller",G__55022)){
return seller_background;
} else {
if(cljs.core._EQ_.call(null,"butcher",G__55022)){
return butcher_background;
} else {
if(cljs.core._EQ_.call(null,"vacation",G__55022)){
return vacation_background;
} else {
if(cljs.core._EQ_.call(null,"holiday",G__55022)){
return holiday_background;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55022)].join('')));

}
}
}
}
}
})()], null)], null),null], null);
});
;})(work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__55018,map__55018__$1,m,worker_id,workplace_id,datetime))
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
eckersdorf.work_schedule.ui.work_schedule_view = (function eckersdorf$work_schedule$ui$work_schedule_view(){
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_workplace], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_month], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.reload_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.sync_button], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,workplace_id)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"prosz\u0119 wybra\u0107 sklep"], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"14 0 0",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"scroll","scroll",971553779),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"24px"], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023(s__55024){
return (new cljs.core.LazySeq(null,((function (main_date,days,workplace_id,workers){
return (function (){
var s__55024__$1 = s__55024;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__55024__$1);
if(temp__5290__auto__){
var s__55024__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55024__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__55024__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__55026 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__55025 = (0);
while(true){
if((i__55025 < size__31130__auto__)){
var date = cljs.core._nth.call(null,c__31129__auto__,i__55025);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
cljs.core.chunk_append.call(null,b__55026,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"\u015Bwi\u0119to",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dingding","dingding",903973456),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55025,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
}
});})(i__55025,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 4px"], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (i__55025,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55027(s__55028){
return (new cljs.core.LazySeq(null,((function (i__55025,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__55028__$1 = s__55028;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__55028__$1);
if(temp__5290__auto____$1){
var s__55028__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55028__$2)){
var c__31129__auto____$1 = cljs.core.chunk_first.call(null,s__55028__$2);
var size__31130__auto____$1 = cljs.core.count.call(null,c__31129__auto____$1);
var b__55030 = cljs.core.chunk_buffer.call(null,size__31130__auto____$1);
if((function (){var i__55029 = (0);
while(true){
if((i__55029 < size__31130__auto____$1)){
var hour = cljs.core._nth.call(null,c__31129__auto____$1,i__55029);
cljs.core.chunk_append.call(null,b__55030,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__55075 = (i__55029 + (1));
i__55029 = G__55075;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55030),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55027.call(null,cljs.core.chunk_rest.call(null,s__55028__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55030),null);
}
} else {
var hour = cljs.core.first.call(null,s__55028__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55027.call(null,cljs.core.rest.call(null,s__55028__$2)));
}
} else {
return null;
}
break;
}
});})(i__55025,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__55025,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (i__55025,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55031(s__55032){
return (new cljs.core.LazySeq(null,((function (i__55025,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__55032__$1 = s__55032;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__55032__$1);
if(temp__5290__auto____$1){
var s__55032__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55032__$2)){
var c__31129__auto____$1 = cljs.core.chunk_first.call(null,s__55032__$2);
var size__31130__auto____$1 = cljs.core.count.call(null,c__31129__auto____$1);
var b__55034 = cljs.core.chunk_buffer.call(null,size__31130__auto____$1);
if((function (){var i__55033 = (0);
while(true){
if((i__55033 < size__31130__auto____$1)){
var map__55035 = cljs.core._nth.call(null,c__31129__auto____$1,i__55033);
var map__55035__$1 = ((((!((map__55035 == null)))?((((map__55035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55035):map__55035);
var object_id = cljs.core.get.call(null,map__55035__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__55035__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__55035__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__55035__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__55034,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55033,i__55025,map__55035,map__55035__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__55034,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
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
});})(i__55033,i__55025,map__55035,map__55035__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__55034,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55033,i__55025,map__55035,map__55035__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__55034,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__55033,i__55025,map__55035,map__55035__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__55034,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (i__55033,i__55025,map__55035,map__55035__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__55034,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55031_$_iter__55037(s__55038){
return (new cljs.core.LazySeq(null,((function (i__55033,i__55025,map__55035,map__55035__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__55034,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__55038__$1 = s__55038;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__55038__$1);
if(temp__5290__auto____$2){
var s__55038__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55038__$2)){
var c__31129__auto____$2 = cljs.core.chunk_first.call(null,s__55038__$2);
var size__31130__auto____$2 = cljs.core.count.call(null,c__31129__auto____$2);
var b__55040 = cljs.core.chunk_buffer.call(null,size__31130__auto____$2);
if((function (){var i__55039 = (0);
while(true){
if((i__55039 < size__31130__auto____$2)){
var hour = cljs.core._nth.call(null,c__31129__auto____$2,i__55039);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__55040,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__55076 = (i__55039 + (1));
i__55039 = G__55076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55040),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55031_$_iter__55037.call(null,cljs.core.chunk_rest.call(null,s__55038__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55040),null);
}
} else {
var hour = cljs.core.first.call(null,s__55038__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55031_$_iter__55037.call(null,cljs.core.rest.call(null,s__55038__$2)));
}
} else {
return null;
}
break;
}
});})(i__55033,i__55025,map__55035,map__55035__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__55034,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__55033,i__55025,map__55035,map__55035__$1,object_id,first_name,last_name,working_hours,c__31129__auto____$1,size__31130__auto____$1,b__55034,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__55077 = (i__55033 + (1));
i__55033 = G__55077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55034),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55031.call(null,cljs.core.chunk_rest.call(null,s__55032__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55034),null);
}
} else {
var map__55041 = cljs.core.first.call(null,s__55032__$2);
var map__55041__$1 = ((((!((map__55041 == null)))?((((map__55041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55041):map__55041);
var object_id = cljs.core.get.call(null,map__55041__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__55041__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__55041__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__55041__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55025,map__55041,map__55041__$1,object_id,first_name,last_name,working_hours,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
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
});})(i__55025,map__55041,map__55041__$1,object_id,first_name,last_name,working_hours,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55025,map__55041,map__55041__$1,object_id,first_name,last_name,working_hours,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__55025,map__55041,map__55041__$1,object_id,first_name,last_name,working_hours,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (i__55025,map__55041,map__55041__$1,object_id,first_name,last_name,working_hours,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55031_$_iter__55043(s__55044){
return (new cljs.core.LazySeq(null,((function (i__55025,map__55041,map__55041__$1,object_id,first_name,last_name,working_hours,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__55044__$1 = s__55044;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__55044__$1);
if(temp__5290__auto____$2){
var s__55044__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55044__$2)){
var c__31129__auto____$1 = cljs.core.chunk_first.call(null,s__55044__$2);
var size__31130__auto____$1 = cljs.core.count.call(null,c__31129__auto____$1);
var b__55046 = cljs.core.chunk_buffer.call(null,size__31130__auto____$1);
if((function (){var i__55045 = (0);
while(true){
if((i__55045 < size__31130__auto____$1)){
var hour = cljs.core._nth.call(null,c__31129__auto____$1,i__55045);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__55046,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__55078 = (i__55045 + (1));
i__55045 = G__55078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55046),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55031_$_iter__55043.call(null,cljs.core.chunk_rest.call(null,s__55044__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55046),null);
}
} else {
var hour = cljs.core.first.call(null,s__55044__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55031_$_iter__55043.call(null,cljs.core.rest.call(null,s__55044__$2)));
}
} else {
return null;
}
break;
}
});})(i__55025,map__55041,map__55041__$1,object_id,first_name,last_name,working_hours,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__55025,map__55041,map__55041__$1,object_id,first_name,last_name,working_hours,s__55032__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55031.call(null,cljs.core.rest.call(null,s__55032__$2)));
}
} else {
return null;
}
break;
}
});})(i__55025,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__55025,weekday,weekday_name,date,c__31129__auto__,size__31130__auto__,b__55026,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)));

var G__55079 = (i__55025 + (1));
i__55025 = G__55079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55026),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023.call(null,cljs.core.chunk_rest.call(null,s__55024__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55026),null);
}
} else {
var date = cljs.core.first.call(null,s__55024__$2);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"\u015Bwi\u0119to",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dingding","dingding",903973456),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
}
});})(weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 4px"], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55047(s__55048){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__55048__$1 = s__55048;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__55048__$1);
if(temp__5290__auto____$1){
var s__55048__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55048__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__55048__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__55050 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__55049 = (0);
while(true){
if((i__55049 < size__31130__auto__)){
var hour = cljs.core._nth.call(null,c__31129__auto__,i__55049);
cljs.core.chunk_append.call(null,b__55050,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__55080 = (i__55049 + (1));
i__55049 = G__55080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55050),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55047.call(null,cljs.core.chunk_rest.call(null,s__55048__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55050),null);
}
} else {
var hour = cljs.core.first.call(null,s__55048__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55047.call(null,cljs.core.rest.call(null,s__55048__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55051(s__55052){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__55052__$1 = s__55052;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__55052__$1);
if(temp__5290__auto____$1){
var s__55052__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55052__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__55052__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__55054 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__55053 = (0);
while(true){
if((i__55053 < size__31130__auto__)){
var map__55055 = cljs.core._nth.call(null,c__31129__auto__,i__55053);
var map__55055__$1 = ((((!((map__55055 == null)))?((((map__55055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55055):map__55055);
var object_id = cljs.core.get.call(null,map__55055__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__55055__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__55055__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__55055__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__55054,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55053,map__55055,map__55055__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__55054,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
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
});})(i__55053,map__55055,map__55055__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__55054,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55053,map__55055,map__55055__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__55054,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__55053,map__55055,map__55055__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__55054,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (i__55053,map__55055,map__55055__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__55054,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55051_$_iter__55057(s__55058){
return (new cljs.core.LazySeq(null,((function (i__55053,map__55055,map__55055__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__55054,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__55058__$1 = s__55058;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__55058__$1);
if(temp__5290__auto____$2){
var s__55058__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55058__$2)){
var c__31129__auto____$1 = cljs.core.chunk_first.call(null,s__55058__$2);
var size__31130__auto____$1 = cljs.core.count.call(null,c__31129__auto____$1);
var b__55060 = cljs.core.chunk_buffer.call(null,size__31130__auto____$1);
if((function (){var i__55059 = (0);
while(true){
if((i__55059 < size__31130__auto____$1)){
var hour = cljs.core._nth.call(null,c__31129__auto____$1,i__55059);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__55060,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__55081 = (i__55059 + (1));
i__55059 = G__55081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55060),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55051_$_iter__55057.call(null,cljs.core.chunk_rest.call(null,s__55058__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55060),null);
}
} else {
var hour = cljs.core.first.call(null,s__55058__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55051_$_iter__55057.call(null,cljs.core.rest.call(null,s__55058__$2)));
}
} else {
return null;
}
break;
}
});})(i__55053,map__55055,map__55055__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__55054,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__55053,map__55055,map__55055__$1,object_id,first_name,last_name,working_hours,c__31129__auto__,size__31130__auto__,b__55054,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__55082 = (i__55053 + (1));
i__55053 = G__55082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55054),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55051.call(null,cljs.core.chunk_rest.call(null,s__55052__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55054),null);
}
} else {
var map__55061 = cljs.core.first.call(null,s__55052__$2);
var map__55061__$1 = ((((!((map__55061 == null)))?((((map__55061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55061):map__55061);
var object_id = cljs.core.get.call(null,map__55061__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__55061__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__55061__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__55061__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__55061,map__55061__$1,object_id,first_name,last_name,working_hours,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
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
});})(map__55061,map__55061__$1,object_id,first_name,last_name,working_hours,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__55061,map__55061__$1,object_id,first_name,last_name,working_hours,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(map__55061,map__55061__$1,object_id,first_name,last_name,working_hours,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (map__55061,map__55061__$1,object_id,first_name,last_name,working_hours,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55051_$_iter__55063(s__55064){
return (new cljs.core.LazySeq(null,((function (map__55061,map__55061__$1,object_id,first_name,last_name,working_hours,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__55064__$1 = s__55064;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__55064__$1);
if(temp__5290__auto____$2){
var s__55064__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55064__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__55064__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__55066 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__55065 = (0);
while(true){
if((i__55065 < size__31130__auto__)){
var hour = cljs.core._nth.call(null,c__31129__auto__,i__55065);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__55066,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__55083 = (i__55065 + (1));
i__55065 = G__55083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55066),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55051_$_iter__55063.call(null,cljs.core.chunk_rest.call(null,s__55064__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55066),null);
}
} else {
var hour = cljs.core.first.call(null,s__55064__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55051_$_iter__55063.call(null,cljs.core.rest.call(null,s__55064__$2)));
}
} else {
return null;
}
break;
}
});})(map__55061,map__55061__$1,object_id,first_name,last_name,working_hours,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(map__55061,map__55061__$1,object_id,first_name,last_name,working_hours,s__55052__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023_$_iter__55051.call(null,cljs.core.rest.call(null,s__55052__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__55024__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31131__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55023.call(null,cljs.core.rest.call(null,s__55024__$2)));
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
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"2 0 auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 12px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(2)], null),"osoba"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),"godziny"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),"dni"], null)], null),cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55067(s__55068){
return (new cljs.core.LazySeq(null,((function (main_date,days,workplace_id,workers){
return (function (){
var s__55068__$1 = s__55068;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__55068__$1);
if(temp__5290__auto__){
var s__55068__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55068__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__55068__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__55070 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__55069 = (0);
while(true){
if((i__55069 < size__31130__auto__)){
var map__55071 = cljs.core._nth.call(null,c__31129__auto__,i__55069);
var map__55071__$1 = ((((!((map__55071 == null)))?((((map__55071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55071):map__55071);
var object_id = cljs.core.get.call(null,map__55071__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__55071__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__55071__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__55071__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__55070,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(2)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_hours,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_days,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__55084 = (i__55069 + (1));
i__55069 = G__55084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55070),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55067.call(null,cljs.core.chunk_rest.call(null,s__55068__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55070),null);
}
} else {
var map__55073 = cljs.core.first.call(null,s__55068__$2);
var map__55073__$1 = ((((!((map__55073 == null)))?((((map__55073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55073):map__55073);
var object_id = cljs.core.get.call(null,map__55073__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__55073__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__55073__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__55073__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(2)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_hours,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_days,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__55067.call(null,cljs.core.rest.call(null,s__55068__$2)));
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

//# sourceMappingURL=ui.js.map?rel=1509398870358
