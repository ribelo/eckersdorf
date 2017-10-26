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
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null)], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (workplaces_list,workplace){
return (function eckersdorf$work_schedule$ui$select_workplace_$_iter__97616(s__97617){
return (new cljs.core.LazySeq(null,((function (workplaces_list,workplace){
return (function (){
var s__97617__$1 = s__97617;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__97617__$1);
if(temp__5290__auto__){
var s__97617__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97617__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__97617__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__97619 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__97618 = (0);
while(true){
if((i__97618 < size__31131__auto__)){
var w = cljs.core._nth.call(null,c__31130__auto__,i__97618);
var map__97620 = w;
var map__97620__$1 = ((((!((map__97620 == null)))?((((map__97620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97620):map__97620);
var object_id = cljs.core.get.call(null,map__97620__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__97620__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
cljs.core.chunk_append.call(null,b__97619,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)));

var G__97624 = (i__97618 + (1));
i__97618 = G__97624;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97619),eckersdorf$work_schedule$ui$select_workplace_$_iter__97616.call(null,cljs.core.chunk_rest.call(null,s__97617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97619),null);
}
} else {
var w = cljs.core.first.call(null,s__97617__$2);
var map__97622 = w;
var map__97622__$1 = ((((!((map__97622 == null)))?((((map__97622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97622):map__97622);
var object_id = cljs.core.get.call(null,map__97622__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__97622__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)),eckersdorf$work_schedule$ui$select_workplace_$_iter__97616.call(null,cljs.core.rest.call(null,s__97617__$2)));
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
return iter__31132__auto__.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),null,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077),"brak"], null)], null),cljs.core.deref.call(null,workplaces_list)));
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
eckersdorf.work_schedule.ui.work_cell = (function eckersdorf$work_schedule$ui$work_cell(p__97628){
var map__97629 = p__97628;
var map__97629__$1 = ((((!((map__97629 == null)))?((((map__97629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97629):map__97629);
var m = map__97629__$1;
var worker_id = cljs.core.get.call(null,map__97629__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__97629__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__97629__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var work = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","get","work-schedule/get",-529948046),m], null));
var worker = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","by-id","workers/by-id",-30752208),worker_id], null));
var seller_background = "repeating-linear-gradient(\n                           -45deg,\n                           #49a9ee,\n                           #49a9ee 4px,\n                           #add8f7 4px,\n                           #add8f7 8px)";
var butcher_background = "repeating-linear-gradient(\n                            -45deg,\n                            #f46e65,\n                            #f46e65 4px,\n                            #fabeb9 4px,\n                            #fabeb9 8px)";
var vacation_background = "repeating-linear-gradient(\n                             -45deg,\n                             #ffce3d,\n                             #ffce3d 4px,\n                             #ffe9a7 4px,\n                             #ffe9a7 8px)";
var holiday_background = "repeating-linear-gradient(\n                             -45deg,\n                             #f7629e,\n                             #f7629e 4px,\n                             #fcb8d3 4px,\n                             #fcb8d3 8px)";
return ((function (work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime){
return (function (m__$1){
var work_type = new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,work));
var working_hours = new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,worker));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime){
return (function (){
var G__97631 = work_type;
if(cljs.core._EQ_.call(null,null,G__97631)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
} else {
if(cljs.core._EQ_.call(null,"seller",G__97631)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher")], null));
} else {
if(cljs.core._EQ_.call(null,"butcher",G__97631)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),m__$1], null));
} else {
if(cljs.core._EQ_.call(null,"vacation",G__97631)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),m__$1], null));

return setTimeout(((function (G__97631,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
});})(G__97631,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime))
);
} else {
if(cljs.core._EQ_.call(null,"holiday",G__97631)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__97631)].join('')));

}
}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime){
return (function (){
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var end_datetime = cljs_time.core.plus.call(null,datetime__$1,cljs_time.core.hours.call(null,(function (){var x__30608__auto__ = working_hours;
var y__30609__auto__ = ((21) - cljs_time.core.hour.call(null,datetime__$1));
return ((x__30608__auto__ < y__30609__auto__) ? x__30608__auto__ : y__30609__auto__);
})()));
var G__97632 = work_type;
if(cljs.core._EQ_.call(null,null,G__97632)){
var works = cljs.core.map.call(null,((function (G__97632,datetime__$1,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime){
return (function (p1__97625_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,p1__97625_SHARP_));
});})(G__97632,datetime__$1,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime__$1,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),works], null));
} else {
if(cljs.core._EQ_.call(null,"seller",G__97632)){
var works = cljs.core.map.call(null,((function (G__97632,datetime__$1,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime){
return (function (p1__97626_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,p1__97626_SHARP_),new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller");
});})(G__97632,datetime__$1,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime__$1,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),works], null));
} else {
if(cljs.core._EQ_.call(null,"butcher",G__97632)){
var works = cljs.core.map.call(null,((function (G__97632,datetime__$1,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime){
return (function (p1__97627_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,p1__97627_SHARP_),new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher");
});})(G__97632,datetime__$1,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime__$1,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),works], null));
} else {
if(cljs.core._EQ_.call(null,"holiday",G__97632)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__97632)].join('')));

}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__97633 = work_type;
if(cljs.core._EQ_.call(null,null,G__97633)){
return null;
} else {
if(cljs.core._EQ_.call(null,"seller",G__97633)){
return seller_background;
} else {
if(cljs.core._EQ_.call(null,"butcher",G__97633)){
return butcher_background;
} else {
if(cljs.core._EQ_.call(null,"vacation",G__97633)){
return vacation_background;
} else {
if(cljs.core._EQ_.call(null,"holiday",G__97633)){
return holiday_background;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__97633)].join('')));

}
}
}
}
}
})()], null)], null),null], null);
});
;})(work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__97629,map__97629__$1,m,worker_id,workplace_id,datetime))
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_workplace], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_month], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"10 0 0",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"scroll","scroll",971553779)], null)], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634(s__97635){
return (new cljs.core.LazySeq(null,((function (main_date,days,workplace_id,workers){
return (function (){
var s__97635__$1 = s__97635;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__97635__$1);
if(temp__5290__auto__){
var s__97635__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97635__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__97635__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__97637 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__97636 = (0);
while(true){
if((i__97636 < size__31131__auto__)){
var date = cljs.core._nth.call(null,c__31130__auto__,i__97636);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
cljs.core.chunk_append.call(null,b__97637,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dingding","dingding",903973456),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__97636,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),cljs_time.coerce.to_string.call(null,date)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),cljs_time.coerce.to_string.call(null,date)], null));
}
});})(i__97636,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),null], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (i__97636,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97638(s__97639){
return (new cljs.core.LazySeq(null,((function (i__97636,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__97639__$1 = s__97639;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__97639__$1);
if(temp__5290__auto____$1){
var s__97639__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97639__$2)){
var c__31130__auto____$1 = cljs.core.chunk_first.call(null,s__97639__$2);
var size__31131__auto____$1 = cljs.core.count.call(null,c__31130__auto____$1);
var b__97641 = cljs.core.chunk_buffer.call(null,size__31131__auto____$1);
if((function (){var i__97640 = (0);
while(true){
if((i__97640 < size__31131__auto____$1)){
var hour = cljs.core._nth.call(null,c__31130__auto____$1,i__97640);
cljs.core.chunk_append.call(null,b__97641,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__97686 = (i__97640 + (1));
i__97640 = G__97686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97641),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97638.call(null,cljs.core.chunk_rest.call(null,s__97639__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97641),null);
}
} else {
var hour = cljs.core.first.call(null,s__97639__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97638.call(null,cljs.core.rest.call(null,s__97639__$2)));
}
} else {
return null;
}
break;
}
});})(i__97636,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__97636,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (i__97636,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97642(s__97643){
return (new cljs.core.LazySeq(null,((function (i__97636,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__97643__$1 = s__97643;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__97643__$1);
if(temp__5290__auto____$1){
var s__97643__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97643__$2)){
var c__31130__auto____$1 = cljs.core.chunk_first.call(null,s__97643__$2);
var size__31131__auto____$1 = cljs.core.count.call(null,c__31130__auto____$1);
var b__97645 = cljs.core.chunk_buffer.call(null,size__31131__auto____$1);
if((function (){var i__97644 = (0);
while(true){
if((i__97644 < size__31131__auto____$1)){
var map__97646 = cljs.core._nth.call(null,c__31130__auto____$1,i__97644);
var map__97646__$1 = ((((!((map__97646 == null)))?((((map__97646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97646):map__97646);
var object_id = cljs.core.get.call(null,map__97646__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__97646__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__97646__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__97646__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__97645,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__97644,i__97636,map__97646,map__97646__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__97645,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(i__97644,i__97636,map__97646,map__97646__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__97645,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__97644,i__97636,map__97646,map__97646__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__97645,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(i__97644,i__97636,map__97646,map__97646__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__97645,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (i__97644,i__97636,map__97646,map__97646__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__97645,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97642_$_iter__97648(s__97649){
return (new cljs.core.LazySeq(null,((function (i__97644,i__97636,map__97646,map__97646__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__97645,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__97649__$1 = s__97649;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__97649__$1);
if(temp__5290__auto____$2){
var s__97649__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97649__$2)){
var c__31130__auto____$2 = cljs.core.chunk_first.call(null,s__97649__$2);
var size__31131__auto____$2 = cljs.core.count.call(null,c__31130__auto____$2);
var b__97651 = cljs.core.chunk_buffer.call(null,size__31131__auto____$2);
if((function (){var i__97650 = (0);
while(true){
if((i__97650 < size__31131__auto____$2)){
var hour = cljs.core._nth.call(null,c__31130__auto____$2,i__97650);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
cljs.core.chunk_append.call(null,b__97651,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__97687 = (i__97650 + (1));
i__97650 = G__97687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97651),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97642_$_iter__97648.call(null,cljs.core.chunk_rest.call(null,s__97649__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97651),null);
}
} else {
var hour = cljs.core.first.call(null,s__97649__$2);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97642_$_iter__97648.call(null,cljs.core.rest.call(null,s__97649__$2)));
}
} else {
return null;
}
break;
}
});})(i__97644,i__97636,map__97646,map__97646__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__97645,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__97644,i__97636,map__97646,map__97646__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__97645,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__97688 = (i__97644 + (1));
i__97644 = G__97688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97645),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97642.call(null,cljs.core.chunk_rest.call(null,s__97643__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97645),null);
}
} else {
var map__97652 = cljs.core.first.call(null,s__97643__$2);
var map__97652__$1 = ((((!((map__97652 == null)))?((((map__97652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97652):map__97652);
var object_id = cljs.core.get.call(null,map__97652__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__97652__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__97652__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__97652__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__97636,map__97652,map__97652__$1,object_id,first_name,last_name,working_hours,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(i__97636,map__97652,map__97652__$1,object_id,first_name,last_name,working_hours,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__97636,map__97652,map__97652__$1,object_id,first_name,last_name,working_hours,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(i__97636,map__97652,map__97652__$1,object_id,first_name,last_name,working_hours,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (i__97636,map__97652,map__97652__$1,object_id,first_name,last_name,working_hours,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97642_$_iter__97654(s__97655){
return (new cljs.core.LazySeq(null,((function (i__97636,map__97652,map__97652__$1,object_id,first_name,last_name,working_hours,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__97655__$1 = s__97655;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__97655__$1);
if(temp__5290__auto____$2){
var s__97655__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97655__$2)){
var c__31130__auto____$1 = cljs.core.chunk_first.call(null,s__97655__$2);
var size__31131__auto____$1 = cljs.core.count.call(null,c__31130__auto____$1);
var b__97657 = cljs.core.chunk_buffer.call(null,size__31131__auto____$1);
if((function (){var i__97656 = (0);
while(true){
if((i__97656 < size__31131__auto____$1)){
var hour = cljs.core._nth.call(null,c__31130__auto____$1,i__97656);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
cljs.core.chunk_append.call(null,b__97657,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__97689 = (i__97656 + (1));
i__97656 = G__97689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97657),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97642_$_iter__97654.call(null,cljs.core.chunk_rest.call(null,s__97655__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97657),null);
}
} else {
var hour = cljs.core.first.call(null,s__97655__$2);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97642_$_iter__97654.call(null,cljs.core.rest.call(null,s__97655__$2)));
}
} else {
return null;
}
break;
}
});})(i__97636,map__97652,map__97652__$1,object_id,first_name,last_name,working_hours,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__97636,map__97652,map__97652__$1,object_id,first_name,last_name,working_hours,s__97643__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97642.call(null,cljs.core.rest.call(null,s__97643__$2)));
}
} else {
return null;
}
break;
}
});})(i__97636,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__97636,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__97637,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)));

var G__97690 = (i__97636 + (1));
i__97636 = G__97690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97637),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634.call(null,cljs.core.chunk_rest.call(null,s__97635__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97637),null);
}
} else {
var date = cljs.core.first.call(null,s__97635__$2);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dingding","dingding",903973456),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),cljs_time.coerce.to_string.call(null,date)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),cljs_time.coerce.to_string.call(null,date)], null));
}
});})(weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),null], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97658(s__97659){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__97659__$1 = s__97659;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__97659__$1);
if(temp__5290__auto____$1){
var s__97659__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97659__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__97659__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__97661 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__97660 = (0);
while(true){
if((i__97660 < size__31131__auto__)){
var hour = cljs.core._nth.call(null,c__31130__auto__,i__97660);
cljs.core.chunk_append.call(null,b__97661,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__97691 = (i__97660 + (1));
i__97660 = G__97691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97661),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97658.call(null,cljs.core.chunk_rest.call(null,s__97659__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97661),null);
}
} else {
var hour = cljs.core.first.call(null,s__97659__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97658.call(null,cljs.core.rest.call(null,s__97659__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97662(s__97663){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__97663__$1 = s__97663;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__97663__$1);
if(temp__5290__auto____$1){
var s__97663__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97663__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__97663__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__97665 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__97664 = (0);
while(true){
if((i__97664 < size__31131__auto__)){
var map__97666 = cljs.core._nth.call(null,c__31130__auto__,i__97664);
var map__97666__$1 = ((((!((map__97666 == null)))?((((map__97666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97666):map__97666);
var object_id = cljs.core.get.call(null,map__97666__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__97666__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__97666__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__97666__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__97665,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__97664,map__97666,map__97666__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__97665,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(i__97664,map__97666,map__97666__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__97665,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__97664,map__97666,map__97666__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__97665,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(i__97664,map__97666,map__97666__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__97665,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (i__97664,map__97666,map__97666__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__97665,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97662_$_iter__97668(s__97669){
return (new cljs.core.LazySeq(null,((function (i__97664,map__97666,map__97666__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__97665,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__97669__$1 = s__97669;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__97669__$1);
if(temp__5290__auto____$2){
var s__97669__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97669__$2)){
var c__31130__auto____$1 = cljs.core.chunk_first.call(null,s__97669__$2);
var size__31131__auto____$1 = cljs.core.count.call(null,c__31130__auto____$1);
var b__97671 = cljs.core.chunk_buffer.call(null,size__31131__auto____$1);
if((function (){var i__97670 = (0);
while(true){
if((i__97670 < size__31131__auto____$1)){
var hour = cljs.core._nth.call(null,c__31130__auto____$1,i__97670);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
cljs.core.chunk_append.call(null,b__97671,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__97692 = (i__97670 + (1));
i__97670 = G__97692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97671),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97662_$_iter__97668.call(null,cljs.core.chunk_rest.call(null,s__97669__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97671),null);
}
} else {
var hour = cljs.core.first.call(null,s__97669__$2);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97662_$_iter__97668.call(null,cljs.core.rest.call(null,s__97669__$2)));
}
} else {
return null;
}
break;
}
});})(i__97664,map__97666,map__97666__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__97665,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__97664,map__97666,map__97666__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__97665,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__97693 = (i__97664 + (1));
i__97664 = G__97693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97665),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97662.call(null,cljs.core.chunk_rest.call(null,s__97663__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97665),null);
}
} else {
var map__97672 = cljs.core.first.call(null,s__97663__$2);
var map__97672__$1 = ((((!((map__97672 == null)))?((((map__97672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97672):map__97672);
var object_id = cljs.core.get.call(null,map__97672__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__97672__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__97672__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__97672__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__97672,map__97672__$1,object_id,first_name,last_name,working_hours,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(map__97672,map__97672__$1,object_id,first_name,last_name,working_hours,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__97672,map__97672__$1,object_id,first_name,last_name,working_hours,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(map__97672,map__97672__$1,object_id,first_name,last_name,working_hours,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (map__97672,map__97672__$1,object_id,first_name,last_name,working_hours,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97662_$_iter__97674(s__97675){
return (new cljs.core.LazySeq(null,((function (map__97672,map__97672__$1,object_id,first_name,last_name,working_hours,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__97675__$1 = s__97675;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__97675__$1);
if(temp__5290__auto____$2){
var s__97675__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97675__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__97675__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__97677 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__97676 = (0);
while(true){
if((i__97676 < size__31131__auto__)){
var hour = cljs.core._nth.call(null,c__31130__auto__,i__97676);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
cljs.core.chunk_append.call(null,b__97677,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__97694 = (i__97676 + (1));
i__97676 = G__97694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97677),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97662_$_iter__97674.call(null,cljs.core.chunk_rest.call(null,s__97675__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97677),null);
}
} else {
var hour = cljs.core.first.call(null,s__97675__$2);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97662_$_iter__97674.call(null,cljs.core.rest.call(null,s__97675__$2)));
}
} else {
return null;
}
break;
}
});})(map__97672,map__97672__$1,object_id,first_name,last_name,working_hours,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(map__97672,map__97672__$1,object_id,first_name,last_name,working_hours,s__97663__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634_$_iter__97662.call(null,cljs.core.rest.call(null,s__97663__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__97635__$2,temp__5290__auto__,main_date,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97634.call(null,cljs.core.rest.call(null,s__97635__$2)));
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
return iter__31132__auto__.call(null,cljs.core.deref.call(null,days));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"3 0 auto"], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97678(s__97679){
return (new cljs.core.LazySeq(null,((function (main_date,days,workplace_id,workers){
return (function (){
var s__97679__$1 = s__97679;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__97679__$1);
if(temp__5290__auto__){
var s__97679__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97679__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__97679__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__97681 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__97680 = (0);
while(true){
if((i__97680 < size__31131__auto__)){
var map__97682 = cljs.core._nth.call(null,c__31130__auto__,i__97680);
var map__97682__$1 = ((((!((map__97682 == null)))?((((map__97682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97682):map__97682);
var object_id = cljs.core.get.call(null,map__97682__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__97682__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__97682__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__97682__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__97681,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_hours,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__97695 = (i__97680 + (1));
i__97680 = G__97695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97681),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97678.call(null,cljs.core.chunk_rest.call(null,s__97679__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97681),null);
}
} else {
var map__97684 = cljs.core.first.call(null,s__97679__$2);
var map__97684__$1 = ((((!((map__97684 == null)))?((((map__97684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97684):map__97684);
var object_id = cljs.core.get.call(null,map__97684__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__97684__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__97684__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__97684__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_hours,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__97678.call(null,cljs.core.rest.call(null,s__97679__$2)));
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
return iter__31132__auto__.call(null,cljs.core.deref.call(null,workers));
})())], null)], null)], null);
});
;})(main_date,days,workplace_id,workers))
});

//# sourceMappingURL=ui.js.map?rel=1509055248926
