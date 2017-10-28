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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30239__auto__ = cljs.core.deref.call(null,workplace);
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return "brak";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (workplaces_list,workplace){
return (function (val){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-workplace","work-schedule/set-workplace",-600467261),val], null));
});})(workplaces_list,workplace))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null)], null),cljs.core.doall.call(null,(function (){var iter__31121__auto__ = ((function (workplaces_list,workplace){
return (function eckersdorf$work_schedule$ui$select_workplace_$_iter__41230(s__41231){
return (new cljs.core.LazySeq(null,((function (workplaces_list,workplace){
return (function (){
var s__41231__$1 = s__41231;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__41231__$1);
if(temp__5290__auto__){
var s__41231__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41231__$2)){
var c__31119__auto__ = cljs.core.chunk_first.call(null,s__41231__$2);
var size__31120__auto__ = cljs.core.count.call(null,c__31119__auto__);
var b__41233 = cljs.core.chunk_buffer.call(null,size__31120__auto__);
if((function (){var i__41232 = (0);
while(true){
if((i__41232 < size__31120__auto__)){
var w = cljs.core._nth.call(null,c__31119__auto__,i__41232);
var map__41234 = w;
var map__41234__$1 = ((((!((map__41234 == null)))?((((map__41234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41234):map__41234);
var object_id = cljs.core.get.call(null,map__41234__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__41234__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
cljs.core.chunk_append.call(null,b__41233,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)));

var G__41238 = (i__41232 + (1));
i__41232 = G__41238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41233),eckersdorf$work_schedule$ui$select_workplace_$_iter__41230.call(null,cljs.core.chunk_rest.call(null,s__41231__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41233),null);
}
} else {
var w = cljs.core.first.call(null,s__41231__$2);
var map__41236 = w;
var map__41236__$1 = ((((!((map__41236 == null)))?((((map__41236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41236):map__41236);
var object_id = cljs.core.get.call(null,map__41236__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__41236__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)),eckersdorf$work_schedule$ui$select_workplace_$_iter__41230.call(null,cljs.core.rest.call(null,s__41231__$2)));
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
return iter__31121__auto__.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),null,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077),"brak"], null)], null),cljs.core.deref.call(null,workplaces_list)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"reload","reload",863702807)], null)], null);
});
});
eckersdorf.work_schedule.ui.sync_button = (function eckersdorf$work_schedule$ui$sync_button(){
var edited_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","edited?","work-schedule/edited?",-752047662)], null));
return ((function (edited_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(cljs.core.deref.call(null,edited_QMARK_))?new cljs.core.Keyword(null,"primary","primary",817773892):null),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"sync","sync",-624148946),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (edited_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","sync","work-schedule/sync",1459023889)], null));
});})(edited_QMARK_))
], null)], null);
});
;})(edited_QMARK_))
});
eckersdorf.work_schedule.ui.work_cell = (function eckersdorf$work_schedule$ui$work_cell(p__41242){
var map__41243 = p__41242;
var map__41243__$1 = ((((!((map__41243 == null)))?((((map__41243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41243):map__41243);
var m = map__41243__$1;
var worker_id = cljs.core.get.call(null,map__41243__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__41243__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__41243__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var work = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","get","work-schedule/get",-529948046),m], null));
var worker = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","by-id","workers/by-id",-30752208),worker_id], null));
var seller_background = "repeating-linear-gradient(\n                           -45deg,\n                           #49a9ee,\n                           #49a9ee 4px,\n                           #add8f7 4px,\n                           #add8f7 8px)";
var butcher_background = "repeating-linear-gradient(\n                            -45deg,\n                            #f46e65,\n                            #f46e65 4px,\n                            #fabeb9 4px,\n                            #fabeb9 8px)";
var vacation_background = "repeating-linear-gradient(\n                             -45deg,\n                             #ffce3d,\n                             #ffce3d 4px,\n                             #ffe9a7 4px,\n                             #ffe9a7 8px)";
var holiday_background = "repeating-linear-gradient(\n                             -45deg,\n                             #f7629e,\n                             #f7629e 4px,\n                             #fcb8d3 4px,\n                             #fcb8d3 8px)";
return ((function (work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime){
return (function (m__$1){
var work_type = new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,work));
var working_hours = new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,worker));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime){
return (function (){
var G__41245 = work_type;
if(cljs.core._EQ_.call(null,null,G__41245)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
} else {
if(cljs.core._EQ_.call(null,"seller",G__41245)){
cljs.core.println.call(null,m__$1);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher")], null));
} else {
if(cljs.core._EQ_.call(null,"butcher",G__41245)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),m__$1], null));
} else {
if(cljs.core._EQ_.call(null,"vacation",G__41245)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),m__$1], null));

return setTimeout(((function (G__41245,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
});})(G__41245,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime))
);
} else {
if(cljs.core._EQ_.call(null,"holiday",G__41245)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41245)].join('')));

}
}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime){
return (function (){
var end_datetime = cljs_time.core.plus.call(null,datetime,cljs_time.core.hours.call(null,(function (){var x__30598__auto__ = working_hours;
var y__30599__auto__ = ((21) - cljs_time.core.hour.call(null,datetime));
return ((x__30598__auto__ < y__30599__auto__) ? x__30598__auto__ : y__30599__auto__);
})()));
var G__41246 = work_type;
if(cljs.core._EQ_.call(null,null,G__41246)){
var works = cljs.core.map.call(null,((function (G__41246,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime){
return (function (p1__41239_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__41239_SHARP_);
});})(G__41246,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),works], null));
} else {
if(cljs.core._EQ_.call(null,"seller",G__41246)){
var works = cljs.core.map.call(null,((function (G__41246,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime){
return (function (p1__41240_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__41240_SHARP_,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller");
});})(G__41246,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),works], null));
} else {
if(cljs.core._EQ_.call(null,"butcher",G__41246)){
var works = cljs.core.map.call(null,((function (G__41246,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime){
return (function (p1__41241_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__41241_SHARP_,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher");
});})(G__41246,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),works], null));
} else {
if(cljs.core._EQ_.call(null,"holiday",G__41246)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41246)].join('')));

}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__41247 = work_type;
if(cljs.core._EQ_.call(null,null,G__41247)){
return null;
} else {
if(cljs.core._EQ_.call(null,"seller",G__41247)){
return seller_background;
} else {
if(cljs.core._EQ_.call(null,"butcher",G__41247)){
return butcher_background;
} else {
if(cljs.core._EQ_.call(null,"vacation",G__41247)){
return vacation_background;
} else {
if(cljs.core._EQ_.call(null,"holiday",G__41247)){
return holiday_background;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41247)].join('')));

}
}
}
}
}
})()], null)], null),null], null);
});
;})(work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__41243,map__41243__$1,m,worker_id,workplace_id,datetime))
});
eckersdorf.work_schedule.ui.worked_hours = (function eckersdorf$work_schedule$ui$worked_hours(work){
var worked_hours = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","hours-worked-in-month","work-schedule/hours-worked-in-month",1171046832),work], null));
return ((function (worked_hours){
return (function (work__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,worked_hours)], null);
});
;})(worked_hours))
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_workplace], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_month], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.reload_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.sync_button], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,workplace_id)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"prosz\u0119 wybra\u0107 sklep"], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"14 0 0",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"scroll","scroll",971553779)], null)], null),cljs.core.doall.call(null,(function (){var iter__31121__auto__ = ((function (main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248(s__41249){
return (new cljs.core.LazySeq(null,((function (main_date,days,workplace_id,workers){
return (function (){
var s__41249__$1 = s__41249;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__41249__$1);
if(temp__5290__auto__){
var s__41249__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41249__$2)){
var c__31119__auto__ = cljs.core.chunk_first.call(null,s__41249__$2);
var size__31120__auto__ = cljs.core.count.call(null,c__31119__auto__);
var b__41251 = cljs.core.chunk_buffer.call(null,size__31120__auto__);
if((function (){var i__41250 = (0);
while(true){
if((i__41250 < size__31120__auto__)){
var date = cljs.core._nth.call(null,c__31119__auto__,i__41250);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
cljs.core.chunk_append.call(null,b__41251,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dingding","dingding",903973456),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41250,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
}
});})(i__41250,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),null], null),cljs.core.doall.call(null,(function (){var iter__31121__auto__ = ((function (i__41250,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41252(s__41253){
return (new cljs.core.LazySeq(null,((function (i__41250,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__41253__$1 = s__41253;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__41253__$1);
if(temp__5290__auto____$1){
var s__41253__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41253__$2)){
var c__31119__auto____$1 = cljs.core.chunk_first.call(null,s__41253__$2);
var size__31120__auto____$1 = cljs.core.count.call(null,c__31119__auto____$1);
var b__41255 = cljs.core.chunk_buffer.call(null,size__31120__auto____$1);
if((function (){var i__41254 = (0);
while(true){
if((i__41254 < size__31120__auto____$1)){
var hour = cljs.core._nth.call(null,c__31119__auto____$1,i__41254);
cljs.core.chunk_append.call(null,b__41255,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__41300 = (i__41254 + (1));
i__41254 = G__41300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41255),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41252.call(null,cljs.core.chunk_rest.call(null,s__41253__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41255),null);
}
} else {
var hour = cljs.core.first.call(null,s__41253__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41252.call(null,cljs.core.rest.call(null,s__41253__$2)));
}
} else {
return null;
}
break;
}
});})(i__41250,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__41250,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31121__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31121__auto__ = ((function (i__41250,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41256(s__41257){
return (new cljs.core.LazySeq(null,((function (i__41250,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__41257__$1 = s__41257;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__41257__$1);
if(temp__5290__auto____$1){
var s__41257__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41257__$2)){
var c__31119__auto____$1 = cljs.core.chunk_first.call(null,s__41257__$2);
var size__31120__auto____$1 = cljs.core.count.call(null,c__31119__auto____$1);
var b__41259 = cljs.core.chunk_buffer.call(null,size__31120__auto____$1);
if((function (){var i__41258 = (0);
while(true){
if((i__41258 < size__31120__auto____$1)){
var map__41260 = cljs.core._nth.call(null,c__31119__auto____$1,i__41258);
var map__41260__$1 = ((((!((map__41260 == null)))?((((map__41260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41260):map__41260);
var object_id = cljs.core.get.call(null,map__41260__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__41260__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__41260__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__41260__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__41259,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41258,i__41250,map__41260,map__41260__$1,object_id,first_name,last_name,working_hours,c__31119__auto____$1,size__31120__auto____$1,b__41259,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__41258,i__41250,map__41260,map__41260__$1,object_id,first_name,last_name,working_hours,c__31119__auto____$1,size__31120__auto____$1,b__41259,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41258,i__41250,map__41260,map__41260__$1,object_id,first_name,last_name,working_hours,c__31119__auto____$1,size__31120__auto____$1,b__41259,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__41258,i__41250,map__41260,map__41260__$1,object_id,first_name,last_name,working_hours,c__31119__auto____$1,size__31120__auto____$1,b__41259,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31121__auto__ = ((function (i__41258,i__41250,map__41260,map__41260__$1,object_id,first_name,last_name,working_hours,c__31119__auto____$1,size__31120__auto____$1,b__41259,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41256_$_iter__41262(s__41263){
return (new cljs.core.LazySeq(null,((function (i__41258,i__41250,map__41260,map__41260__$1,object_id,first_name,last_name,working_hours,c__31119__auto____$1,size__31120__auto____$1,b__41259,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__41263__$1 = s__41263;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__41263__$1);
if(temp__5290__auto____$2){
var s__41263__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41263__$2)){
var c__31119__auto____$2 = cljs.core.chunk_first.call(null,s__41263__$2);
var size__31120__auto____$2 = cljs.core.count.call(null,c__31119__auto____$2);
var b__41265 = cljs.core.chunk_buffer.call(null,size__31120__auto____$2);
if((function (){var i__41264 = (0);
while(true){
if((i__41264 < size__31120__auto____$2)){
var hour = cljs.core._nth.call(null,c__31119__auto____$2,i__41264);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__41265,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__41301 = (i__41264 + (1));
i__41264 = G__41301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41265),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41256_$_iter__41262.call(null,cljs.core.chunk_rest.call(null,s__41263__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41265),null);
}
} else {
var hour = cljs.core.first.call(null,s__41263__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41256_$_iter__41262.call(null,cljs.core.rest.call(null,s__41263__$2)));
}
} else {
return null;
}
break;
}
});})(i__41258,i__41250,map__41260,map__41260__$1,object_id,first_name,last_name,working_hours,c__31119__auto____$1,size__31120__auto____$1,b__41259,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__41258,i__41250,map__41260,map__41260__$1,object_id,first_name,last_name,working_hours,c__31119__auto____$1,size__31120__auto____$1,b__41259,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31121__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__41302 = (i__41258 + (1));
i__41258 = G__41302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41259),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41256.call(null,cljs.core.chunk_rest.call(null,s__41257__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41259),null);
}
} else {
var map__41266 = cljs.core.first.call(null,s__41257__$2);
var map__41266__$1 = ((((!((map__41266 == null)))?((((map__41266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41266):map__41266);
var object_id = cljs.core.get.call(null,map__41266__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__41266__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__41266__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__41266__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41250,map__41266,map__41266__$1,object_id,first_name,last_name,working_hours,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__41250,map__41266,map__41266__$1,object_id,first_name,last_name,working_hours,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41250,map__41266,map__41266__$1,object_id,first_name,last_name,working_hours,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__41250,map__41266,map__41266__$1,object_id,first_name,last_name,working_hours,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31121__auto__ = ((function (i__41250,map__41266,map__41266__$1,object_id,first_name,last_name,working_hours,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41256_$_iter__41268(s__41269){
return (new cljs.core.LazySeq(null,((function (i__41250,map__41266,map__41266__$1,object_id,first_name,last_name,working_hours,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__41269__$1 = s__41269;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__41269__$1);
if(temp__5290__auto____$2){
var s__41269__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41269__$2)){
var c__31119__auto____$1 = cljs.core.chunk_first.call(null,s__41269__$2);
var size__31120__auto____$1 = cljs.core.count.call(null,c__31119__auto____$1);
var b__41271 = cljs.core.chunk_buffer.call(null,size__31120__auto____$1);
if((function (){var i__41270 = (0);
while(true){
if((i__41270 < size__31120__auto____$1)){
var hour = cljs.core._nth.call(null,c__31119__auto____$1,i__41270);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__41271,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__41303 = (i__41270 + (1));
i__41270 = G__41303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41271),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41256_$_iter__41268.call(null,cljs.core.chunk_rest.call(null,s__41269__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41271),null);
}
} else {
var hour = cljs.core.first.call(null,s__41269__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41256_$_iter__41268.call(null,cljs.core.rest.call(null,s__41269__$2)));
}
} else {
return null;
}
break;
}
});})(i__41250,map__41266,map__41266__$1,object_id,first_name,last_name,working_hours,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__41250,map__41266,map__41266__$1,object_id,first_name,last_name,working_hours,s__41257__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31121__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41256.call(null,cljs.core.rest.call(null,s__41257__$2)));
}
} else {
return null;
}
break;
}
});})(i__41250,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__41250,weekday,weekday_name,date,c__31119__auto__,size__31120__auto__,b__41251,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31121__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)));

var G__41304 = (i__41250 + (1));
i__41250 = G__41304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41251),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248.call(null,cljs.core.chunk_rest.call(null,s__41249__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41251),null);
}
} else {
var date = cljs.core.first.call(null,s__41249__$2);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dingding","dingding",903973456),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
}
});})(weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),null], null),cljs.core.doall.call(null,(function (){var iter__31121__auto__ = ((function (weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41272(s__41273){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__41273__$1 = s__41273;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__41273__$1);
if(temp__5290__auto____$1){
var s__41273__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41273__$2)){
var c__31119__auto__ = cljs.core.chunk_first.call(null,s__41273__$2);
var size__31120__auto__ = cljs.core.count.call(null,c__31119__auto__);
var b__41275 = cljs.core.chunk_buffer.call(null,size__31120__auto__);
if((function (){var i__41274 = (0);
while(true){
if((i__41274 < size__31120__auto__)){
var hour = cljs.core._nth.call(null,c__31119__auto__,i__41274);
cljs.core.chunk_append.call(null,b__41275,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__41305 = (i__41274 + (1));
i__41274 = G__41305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41275),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41272.call(null,cljs.core.chunk_rest.call(null,s__41273__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41275),null);
}
} else {
var hour = cljs.core.first.call(null,s__41273__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41272.call(null,cljs.core.rest.call(null,s__41273__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31121__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31121__auto__ = ((function (weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41276(s__41277){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__41277__$1 = s__41277;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__41277__$1);
if(temp__5290__auto____$1){
var s__41277__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41277__$2)){
var c__31119__auto__ = cljs.core.chunk_first.call(null,s__41277__$2);
var size__31120__auto__ = cljs.core.count.call(null,c__31119__auto__);
var b__41279 = cljs.core.chunk_buffer.call(null,size__31120__auto__);
if((function (){var i__41278 = (0);
while(true){
if((i__41278 < size__31120__auto__)){
var map__41280 = cljs.core._nth.call(null,c__31119__auto__,i__41278);
var map__41280__$1 = ((((!((map__41280 == null)))?((((map__41280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41280):map__41280);
var object_id = cljs.core.get.call(null,map__41280__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__41280__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__41280__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__41280__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__41279,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41278,map__41280,map__41280__$1,object_id,first_name,last_name,working_hours,c__31119__auto__,size__31120__auto__,b__41279,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__41278,map__41280,map__41280__$1,object_id,first_name,last_name,working_hours,c__31119__auto__,size__31120__auto__,b__41279,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41278,map__41280,map__41280__$1,object_id,first_name,last_name,working_hours,c__31119__auto__,size__31120__auto__,b__41279,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__41278,map__41280,map__41280__$1,object_id,first_name,last_name,working_hours,c__31119__auto__,size__31120__auto__,b__41279,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31121__auto__ = ((function (i__41278,map__41280,map__41280__$1,object_id,first_name,last_name,working_hours,c__31119__auto__,size__31120__auto__,b__41279,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41276_$_iter__41282(s__41283){
return (new cljs.core.LazySeq(null,((function (i__41278,map__41280,map__41280__$1,object_id,first_name,last_name,working_hours,c__31119__auto__,size__31120__auto__,b__41279,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__41283__$1 = s__41283;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__41283__$1);
if(temp__5290__auto____$2){
var s__41283__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41283__$2)){
var c__31119__auto____$1 = cljs.core.chunk_first.call(null,s__41283__$2);
var size__31120__auto____$1 = cljs.core.count.call(null,c__31119__auto____$1);
var b__41285 = cljs.core.chunk_buffer.call(null,size__31120__auto____$1);
if((function (){var i__41284 = (0);
while(true){
if((i__41284 < size__31120__auto____$1)){
var hour = cljs.core._nth.call(null,c__31119__auto____$1,i__41284);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__41285,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__41306 = (i__41284 + (1));
i__41284 = G__41306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41285),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41276_$_iter__41282.call(null,cljs.core.chunk_rest.call(null,s__41283__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41285),null);
}
} else {
var hour = cljs.core.first.call(null,s__41283__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41276_$_iter__41282.call(null,cljs.core.rest.call(null,s__41283__$2)));
}
} else {
return null;
}
break;
}
});})(i__41278,map__41280,map__41280__$1,object_id,first_name,last_name,working_hours,c__31119__auto__,size__31120__auto__,b__41279,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__41278,map__41280,map__41280__$1,object_id,first_name,last_name,working_hours,c__31119__auto__,size__31120__auto__,b__41279,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31121__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__41307 = (i__41278 + (1));
i__41278 = G__41307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41279),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41276.call(null,cljs.core.chunk_rest.call(null,s__41277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41279),null);
}
} else {
var map__41286 = cljs.core.first.call(null,s__41277__$2);
var map__41286__$1 = ((((!((map__41286 == null)))?((((map__41286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41286):map__41286);
var object_id = cljs.core.get.call(null,map__41286__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__41286__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__41286__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__41286__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__41286,map__41286__$1,object_id,first_name,last_name,working_hours,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(map__41286,map__41286__$1,object_id,first_name,last_name,working_hours,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__41286,map__41286__$1,object_id,first_name,last_name,working_hours,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(map__41286,map__41286__$1,object_id,first_name,last_name,working_hours,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31121__auto__ = ((function (map__41286,map__41286__$1,object_id,first_name,last_name,working_hours,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41276_$_iter__41288(s__41289){
return (new cljs.core.LazySeq(null,((function (map__41286,map__41286__$1,object_id,first_name,last_name,working_hours,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__41289__$1 = s__41289;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__41289__$1);
if(temp__5290__auto____$2){
var s__41289__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41289__$2)){
var c__31119__auto__ = cljs.core.chunk_first.call(null,s__41289__$2);
var size__31120__auto__ = cljs.core.count.call(null,c__31119__auto__);
var b__41291 = cljs.core.chunk_buffer.call(null,size__31120__auto__);
if((function (){var i__41290 = (0);
while(true){
if((i__41290 < size__31120__auto__)){
var hour = cljs.core._nth.call(null,c__31119__auto__,i__41290);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__41291,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__41308 = (i__41290 + (1));
i__41290 = G__41308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41291),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41276_$_iter__41288.call(null,cljs.core.chunk_rest.call(null,s__41289__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41291),null);
}
} else {
var hour = cljs.core.first.call(null,s__41289__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41276_$_iter__41288.call(null,cljs.core.rest.call(null,s__41289__$2)));
}
} else {
return null;
}
break;
}
});})(map__41286,map__41286__$1,object_id,first_name,last_name,working_hours,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(map__41286,map__41286__$1,object_id,first_name,last_name,working_hours,s__41277__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31121__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248_$_iter__41276.call(null,cljs.core.rest.call(null,s__41277__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__41249__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31121__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41248.call(null,cljs.core.rest.call(null,s__41249__$2)));
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
return iter__31121__auto__.call(null,cljs.core.deref.call(null,days));
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"2 0 auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 12px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"osoba"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"liczba godzin"], null)], null),cljs.core.doall.call(null,(function (){var iter__31121__auto__ = ((function (main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41292(s__41293){
return (new cljs.core.LazySeq(null,((function (main_date,days,workplace_id,workers){
return (function (){
var s__41293__$1 = s__41293;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__41293__$1);
if(temp__5290__auto__){
var s__41293__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41293__$2)){
var c__31119__auto__ = cljs.core.chunk_first.call(null,s__41293__$2);
var size__31120__auto__ = cljs.core.count.call(null,c__31119__auto__);
var b__41295 = cljs.core.chunk_buffer.call(null,size__31120__auto__);
if((function (){var i__41294 = (0);
while(true){
if((i__41294 < size__31120__auto__)){
var map__41296 = cljs.core._nth.call(null,c__31119__auto__,i__41294);
var map__41296__$1 = ((((!((map__41296 == null)))?((((map__41296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41296):map__41296);
var object_id = cljs.core.get.call(null,map__41296__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__41296__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__41296__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__41296__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__41295,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_hours,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__41309 = (i__41294 + (1));
i__41294 = G__41309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41295),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41292.call(null,cljs.core.chunk_rest.call(null,s__41293__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41295),null);
}
} else {
var map__41298 = cljs.core.first.call(null,s__41293__$2);
var map__41298__$1 = ((((!((map__41298 == null)))?((((map__41298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41298):map__41298);
var object_id = cljs.core.get.call(null,map__41298__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__41298__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__41298__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__41298__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_hours,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__41292.call(null,cljs.core.rest.call(null,s__41293__$2)));
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
return iter__31121__auto__.call(null,cljs.core.deref.call(null,workers));
})())], null)], null))], null);
});
;})(main_date,days,workplace_id,workers))
});

//# sourceMappingURL=ui.js.map?rel=1509146371105
