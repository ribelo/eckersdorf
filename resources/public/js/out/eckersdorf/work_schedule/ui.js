// Compiled by ClojureScript 1.9.946 {}
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
eckersdorf.work_schedule.ui.long_weekdays = new cljs.core.PersistentArrayMap(null, 7, [(1),"poniedzia\u0142ek",(2),"wtorek",(3),"\u015Broda",(4),"czwartek",(5),"pi\u0105tek",(6),"sobota",(7),"niedziela"], null);
eckersdorf.work_schedule.ui.long_months = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(12),(2),(11),(9),(5),(10),(8)],["lipiec","stycze\u0144","kwiecie\u0144","czerwiec","marzec","grudzie\u0144","luty","listopad","wrzesie\u0144","maj","pa\u017Adziernik","sierpie\u0144"]);
eckersdorf.work_schedule.ui.select_workplace = (function eckersdorf$work_schedule$ui$select_workplace(){
var workplaces_list = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","list","workplaces/list",852308376)], null));
var workplace = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962)], null));
return ((function (workplaces_list,workplace){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30523__auto__ = cljs.core.deref.call(null,workplace);
if(cljs.core.truth_(or__30523__auto__)){
return or__30523__auto__;
} else {
return "brak";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (workplaces_list,workplace){
return (function (val){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-workplace","work-schedule/set-workplace",-600467261),val], null));
});})(workplaces_list,workplace))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null)], null),cljs.core.doall.call(null,(function (){var iter__31405__auto__ = ((function (workplaces_list,workplace){
return (function eckersdorf$work_schedule$ui$select_workplace_$_iter__44316(s__44317){
return (new cljs.core.LazySeq(null,((function (workplaces_list,workplace){
return (function (){
var s__44317__$1 = s__44317;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44317__$1);
if(temp__5457__auto__){
var s__44317__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44317__$2)){
var c__31403__auto__ = cljs.core.chunk_first.call(null,s__44317__$2);
var size__31404__auto__ = cljs.core.count.call(null,c__31403__auto__);
var b__44319 = cljs.core.chunk_buffer.call(null,size__31404__auto__);
if((function (){var i__44318 = (0);
while(true){
if((i__44318 < size__31404__auto__)){
var w = cljs.core._nth.call(null,c__31403__auto__,i__44318);
var map__44320 = w;
var map__44320__$1 = ((((!((map__44320 == null)))?((((map__44320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44320):map__44320);
var object_id = cljs.core.get.call(null,map__44320__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__44320__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
cljs.core.chunk_append.call(null,b__44319,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)));

var G__44324 = (i__44318 + (1));
i__44318 = G__44324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44319),eckersdorf$work_schedule$ui$select_workplace_$_iter__44316.call(null,cljs.core.chunk_rest.call(null,s__44317__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44319),null);
}
} else {
var w = cljs.core.first.call(null,s__44317__$2);
var map__44322 = w;
var map__44322__$1 = ((((!((map__44322 == null)))?((((map__44322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44322):map__44322);
var object_id = cljs.core.get.call(null,map__44322__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__44322__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)),eckersdorf$work_schedule$ui$select_workplace_$_iter__44316.call(null,cljs.core.rest.call(null,s__44317__$2)));
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
return iter__31405__auto__.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),null,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077),"brak"], null)], null),cljs.core.deref.call(null,workplaces_list)));
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
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-date","work-schedule/set-date",-1172573652),cljs_time.coerce.from_string.call(null,date.endOf("day").utc().toISOString())], null));
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
eckersdorf.work_schedule.ui.work_cell = (function eckersdorf$work_schedule$ui$work_cell(p__44328){
var map__44329 = p__44328;
var map__44329__$1 = ((((!((map__44329 == null)))?((((map__44329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44329):map__44329);
var m = map__44329__$1;
var worker_id = cljs.core.get.call(null,map__44329__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44329__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44329__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var work = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","get-work","work-schedule/get-work",1385389307),m], null));
var worker = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","by-id","workers/by-id",-30752208),worker_id], null));
var seller_background = "repeating-linear-gradient(\n                           -45deg,\n                           #49a9ee,\n                           #49a9ee 4px,\n                           #add8f7 4px,\n                           #add8f7 8px)";
var butcher_background = "repeating-linear-gradient(\n                            -45deg,\n                            #f46e65,\n                            #f46e65 4px,\n                            #fabeb9 4px,\n                            #fabeb9 8px)";
var vacation_background = "repeating-linear-gradient(\n                            -45deg,\n                            #ffce3d,\n                            #ffce3d 4px,\n                            #ffe9a7 4px,\n                            #ffe9a7 8px)";
var holiday_background = "repeating-linear-gradient(\n                            -45deg,\n                            #f7629e,\n                            #f7629e 4px,\n                            #fcb8d3 4px,\n                            #fcb8d3 8px)";
var break_background = "repeating-linear-gradient(\n                          -45deg,\n                          #919191,\n                          #919191 4px,\n                          #d9d9d9 4px,\n                          #d9d9d9 8px)";
return ((function (work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime){
return (function (m__$1){
var work_type = new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,work));
var working_hours = new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,worker));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime){
return (function (){
var G__44331 = work_type;
if(cljs.core._EQ_.call(null,null,G__44331)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
} else {
if(cljs.core._EQ_.call(null,"seller",G__44331)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher")], null));
} else {
if(cljs.core._EQ_.call(null,"butcher",G__44331)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),m__$1], null));
} else {
if(cljs.core._EQ_.call(null,"break",G__44331)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),m__$1], null));

return setTimeout(((function (G__44331,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
});})(G__44331,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime))
);
} else {
if(cljs.core._EQ_.call(null,"vacation",G__44331)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),m__$1], null));

return setTimeout(((function (G__44331,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
});})(G__44331,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime))
);
} else {
if(cljs.core._EQ_.call(null,"holiday",G__44331)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44331)].join('')));

}
}
}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime){
return (function (){
var end_datetime = cljs_time.core.plus.call(null,datetime,cljs_time.core.hours.call(null,(function (){var x__30882__auto__ = working_hours;
var y__30883__auto__ = ((21) - cljs_time.core.hour.call(null,datetime));
return ((x__30882__auto__ < y__30883__auto__) ? x__30882__auto__ : y__30883__auto__);
})()));
var G__44332 = work_type;
if(cljs.core._EQ_.call(null,null,G__44332)){
var works = cljs.core.map.call(null,((function (G__44332,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime){
return (function (p1__44325_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__44325_SHARP_);
});})(G__44332,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),works], null));
} else {
if(cljs.core._EQ_.call(null,"seller",G__44332)){
var works = cljs.core.map.call(null,((function (G__44332,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime){
return (function (p1__44326_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__44326_SHARP_,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller");
});})(G__44332,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),works], null));
} else {
if(cljs.core._EQ_.call(null,"butcher",G__44332)){
var works = cljs.core.map.call(null,((function (G__44332,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime){
return (function (p1__44327_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__44327_SHARP_,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher");
});})(G__44332,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),works], null));
} else {
if(cljs.core._EQ_.call(null,"holiday",G__44332)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44332)].join('')));

}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__44333 = work_type;
if(cljs.core._EQ_.call(null,null,G__44333)){
return null;
} else {
if(cljs.core._EQ_.call(null,"seller",G__44333)){
return seller_background;
} else {
if(cljs.core._EQ_.call(null,"butcher",G__44333)){
return butcher_background;
} else {
if(cljs.core._EQ_.call(null,"break",G__44333)){
return break_background;
} else {
if(cljs.core._EQ_.call(null,"vacation",G__44333)){
return vacation_background;
} else {
if(cljs.core._EQ_.call(null,"holiday",G__44333)){
return holiday_background;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44333)].join('')));

}
}
}
}
}
}
})()], null)], null),null], null);
});
;})(work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44329,map__44329__$1,m,worker_id,workplace_id,datetime))
});
eckersdorf.work_schedule.ui.worked_hours = (function eckersdorf$work_schedule$ui$worked_hours(work){
var working_hours = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","all-working-hours","work-schedule/all-working-hours",-2063440714)], null));
var worked_hours = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","hours-worked-in-month","work-schedule/hours-worked-in-month",1171046832),work], null));
return ((function (working_hours,worked_hours){
return (function (work__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.deref.call(null,working_hours) - cljs.core.deref.call(null,worked_hours))], null);
});
;})(working_hours,worked_hours))
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
var width = reagent.ratom.make_reaction.call(null,((function (main_date,days,workplace_id,workplace,workers){
return (function (){
return ((100) / (cljs.core.count.call(null,cljs.core.deref.call(null,workers)) + (1)));
});})(main_date,days,workplace_id,workplace,workers))
);
var data_source = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","print-data-source","work-schedule/print-data-source",-1786888067)], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"work-schedule-print",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (main_date,days,workplace_id,workplace,workers,width,data_source){
return (function (){
return window.print();
});})(main_date,days,workplace_id,workplace,workers,width,data_source))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (main_date,days,workplace_id,workplace,workers,width,data_source){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"no-print",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_workplace], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_month], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button_group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.reload_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.sync_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.print_button], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.table,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.conj.call(null,cljs.core.map.call(null,((function (main_date,days,workplace_id,workplace,workers,width,data_source){
return (function (p__44334){
var map__44335 = p__44334;
var map__44335__$1 = ((((!((map__44335 == null)))?((((map__44335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44335):map__44335);
var object_id = cljs.core.get.call(null,map__44335__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44335__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44335__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),reagent.core.as_element.call(null,(function (){var text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,first_name)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('');
var height = (cljs.core.count.call(null,text) * 6.5);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"writing-mode","writing-mode",-1707110905),"vertical-rl",new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join('')], null)], null),text], null)], null);
})()),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,width)),"%"].join(''),new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),object_id,new cljs.core.Keyword(null,"key","key",-1516042587),object_id,new cljs.core.Keyword(null,"render","render",-1408033454),((function (map__44335,map__44335__$1,object_id,first_name,last_name,main_date,days,workplace_id,workplace,workers,width,data_source){
return (function (p__44337,_,___$1){
var vec__44338 = p__44337;
var begin = cljs.core.nth.call(null,vec__44338,(0),null);
var end = cljs.core.nth.call(null,vec__44338,(1),null);
var work_type = cljs.core.nth.call(null,vec__44338,(2),null);
var day_of_week = cljs.core.nth.call(null,vec__44338,(3),null);
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,work_type))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(begin),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,(function (){var G__44341 = work_type;
switch (G__44341) {
case "seller":
return "sklep";

break;
case "butcher":
return "lada";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44341)].join('')));

}
})()], null)], null):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["vacation",null], null), null).call(null,work_type))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,"urlop"], null):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["holiday",null], null), null).call(null,work_type))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,"\u015Bwi\u0119to"], null):((cljs.core._EQ_.call(null,(7),day_of_week))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,"niedziela"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,"wolne"], null)
))))], null));
});})(map__44335,map__44335__$1,object_id,first_name,last_name,main_date,days,workplace_id,workplace,workers,width,data_source))
], null);
});})(main_date,days,workplace_id,workplace,workers,width,data_source))
,cljs.core.deref.call(null,workers)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"writing-mode","writing-mode",-1707110905),"vertical-rl",new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((25)),"px"].join('')], null)], null),"data"], null)], null)),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"%"].join(''),new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.Keyword(null,"render","render",-1408033454),((function (main_date,days,workplace_id,workplace,workers,width,data_source){
return (function (datetime,record,_){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),datetime)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,cljs_time.core.day_of_week.call(null,datetime))], null)], null)], null));
});})(main_date,days,workplace_id,workplace,workers,width,data_source))
], null)),new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),cljs.core.map_indexed.call(null,((function (main_date,days,workplace_id,workplace,workers,width,data_source){
return (function (i,m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",-1388402092),i);
});})(main_date,days,workplace_id,workplace,workers,width,data_source))
,cljs.core.deref.call(null,data_source)),new cljs.core.Keyword(null,"row-key","row-key",-1189010712),"id",new cljs.core.Keyword(null,"pagination","pagination",-1553654604),false,new cljs.core.Keyword(null,"bordered","bordered",-832486681),true], null)], null)], null);
});})(main_date,days,workplace_id,workplace,workers,width,data_source))
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"calc(100% - 80px)"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"no-print",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_workplace], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_month], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button_group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.reload_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.sync_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.print_button], null)], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,workplace_id)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"prosz\u0119 wybra\u0107 sklep"], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"14 0 0",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"scroll","scroll",971553779),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"24px"], null)], null),cljs.core.doall.call(null,(function (){var iter__31405__auto__ = ((function (main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343(s__44344){
return (new cljs.core.LazySeq(null,((function (main_date,days,workplace_id,workers){
return (function (){
var s__44344__$1 = s__44344;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44344__$1);
if(temp__5457__auto__){
var s__44344__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44344__$2)){
var c__31403__auto__ = cljs.core.chunk_first.call(null,s__44344__$2);
var size__31404__auto__ = cljs.core.count.call(null,c__31403__auto__);
var b__44346 = cljs.core.chunk_buffer.call(null,size__31404__auto__);
if((function (){var i__44345 = (0);
while(true){
if((i__44345 < size__31404__auto__)){
var date = cljs.core._nth.call(null,c__31403__auto__,i__44345);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
cljs.core.chunk_append.call(null,b__44346,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"\u015Bwi\u0119to",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bell","bell",419679286),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44345,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
}
});})(i__44345,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 4px"], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31405__auto__ = ((function (i__44345,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44347(s__44348){
return (new cljs.core.LazySeq(null,((function (i__44345,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44348__$1 = s__44348;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44348__$1);
if(temp__5457__auto____$1){
var s__44348__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44348__$2)){
var c__31403__auto____$1 = cljs.core.chunk_first.call(null,s__44348__$2);
var size__31404__auto____$1 = cljs.core.count.call(null,c__31403__auto____$1);
var b__44350 = cljs.core.chunk_buffer.call(null,size__31404__auto____$1);
if((function (){var i__44349 = (0);
while(true){
if((i__44349 < size__31404__auto____$1)){
var hour = cljs.core._nth.call(null,c__31403__auto____$1,i__44349);
cljs.core.chunk_append.call(null,b__44350,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__44395 = (i__44349 + (1));
i__44349 = G__44395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44350),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44347.call(null,cljs.core.chunk_rest.call(null,s__44348__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44350),null);
}
} else {
var hour = cljs.core.first.call(null,s__44348__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44347.call(null,cljs.core.rest.call(null,s__44348__$2)));
}
} else {
return null;
}
break;
}
});})(i__44345,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__44345,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31405__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31405__auto__ = ((function (i__44345,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44351(s__44352){
return (new cljs.core.LazySeq(null,((function (i__44345,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44352__$1 = s__44352;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44352__$1);
if(temp__5457__auto____$1){
var s__44352__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44352__$2)){
var c__31403__auto____$1 = cljs.core.chunk_first.call(null,s__44352__$2);
var size__31404__auto____$1 = cljs.core.count.call(null,c__31403__auto____$1);
var b__44354 = cljs.core.chunk_buffer.call(null,size__31404__auto____$1);
if((function (){var i__44353 = (0);
while(true){
if((i__44353 < size__31404__auto____$1)){
var map__44355 = cljs.core._nth.call(null,c__31403__auto____$1,i__44353);
var map__44355__$1 = ((((!((map__44355 == null)))?((((map__44355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44355):map__44355);
var object_id = cljs.core.get.call(null,map__44355__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44355__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44355__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__44355__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__44354,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"dzie\u0144 wolny",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44353,i__44345,map__44355,map__44355__$1,object_id,first_name,last_name,working_hours,c__31403__auto____$1,size__31404__auto____$1,b__44354,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
var break_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-break?","work-schedule/is-break?",-952345534),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
if(cljs.core.not.call(null,cljs.core.deref.call(null,break_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-break","work-schedule/set-break",2098802928),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
}
});})(i__44353,i__44345,map__44355,map__44355__$1,object_id,first_name,last_name,working_hours,c__31403__auto____$1,size__31404__auto____$1,b__44354,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"compass","compass",-1753121034),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44353,i__44345,map__44355,map__44355__$1,object_id,first_name,last_name,working_hours,c__31403__auto____$1,size__31404__auto____$1,b__44354,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
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
});})(i__44353,i__44345,map__44355,map__44355__$1,object_id,first_name,last_name,working_hours,c__31403__auto____$1,size__31404__auto____$1,b__44354,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44353,i__44345,map__44355,map__44355__$1,object_id,first_name,last_name,working_hours,c__31403__auto____$1,size__31404__auto____$1,b__44354,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__44353,i__44345,map__44355,map__44355__$1,object_id,first_name,last_name,working_hours,c__31403__auto____$1,size__31404__auto____$1,b__44354,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31405__auto__ = ((function (i__44353,i__44345,map__44355,map__44355__$1,object_id,first_name,last_name,working_hours,c__31403__auto____$1,size__31404__auto____$1,b__44354,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44351_$_iter__44357(s__44358){
return (new cljs.core.LazySeq(null,((function (i__44353,i__44345,map__44355,map__44355__$1,object_id,first_name,last_name,working_hours,c__31403__auto____$1,size__31404__auto____$1,b__44354,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44358__$1 = s__44358;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__44358__$1);
if(temp__5457__auto____$2){
var s__44358__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44358__$2)){
var c__31403__auto____$2 = cljs.core.chunk_first.call(null,s__44358__$2);
var size__31404__auto____$2 = cljs.core.count.call(null,c__31403__auto____$2);
var b__44360 = cljs.core.chunk_buffer.call(null,size__31404__auto____$2);
if((function (){var i__44359 = (0);
while(true){
if((i__44359 < size__31404__auto____$2)){
var hour = cljs.core._nth.call(null,c__31403__auto____$2,i__44359);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__44360,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__44396 = (i__44359 + (1));
i__44359 = G__44396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44360),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44351_$_iter__44357.call(null,cljs.core.chunk_rest.call(null,s__44358__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44360),null);
}
} else {
var hour = cljs.core.first.call(null,s__44358__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44351_$_iter__44357.call(null,cljs.core.rest.call(null,s__44358__$2)));
}
} else {
return null;
}
break;
}
});})(i__44353,i__44345,map__44355,map__44355__$1,object_id,first_name,last_name,working_hours,c__31403__auto____$1,size__31404__auto____$1,b__44354,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__44353,i__44345,map__44355,map__44355__$1,object_id,first_name,last_name,working_hours,c__31403__auto____$1,size__31404__auto____$1,b__44354,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31405__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__44397 = (i__44353 + (1));
i__44353 = G__44397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44354),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44351.call(null,cljs.core.chunk_rest.call(null,s__44352__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44354),null);
}
} else {
var map__44361 = cljs.core.first.call(null,s__44352__$2);
var map__44361__$1 = ((((!((map__44361 == null)))?((((map__44361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44361):map__44361);
var object_id = cljs.core.get.call(null,map__44361__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44361__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44361__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__44361__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"dzie\u0144 wolny",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44345,map__44361,map__44361__$1,object_id,first_name,last_name,working_hours,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
var break_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-break?","work-schedule/is-break?",-952345534),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
if(cljs.core.not.call(null,cljs.core.deref.call(null,break_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-break","work-schedule/set-break",2098802928),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
}
});})(i__44345,map__44361,map__44361__$1,object_id,first_name,last_name,working_hours,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"compass","compass",-1753121034),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44345,map__44361,map__44361__$1,object_id,first_name,last_name,working_hours,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
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
});})(i__44345,map__44361,map__44361__$1,object_id,first_name,last_name,working_hours,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44345,map__44361,map__44361__$1,object_id,first_name,last_name,working_hours,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__44345,map__44361,map__44361__$1,object_id,first_name,last_name,working_hours,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31405__auto__ = ((function (i__44345,map__44361,map__44361__$1,object_id,first_name,last_name,working_hours,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44351_$_iter__44363(s__44364){
return (new cljs.core.LazySeq(null,((function (i__44345,map__44361,map__44361__$1,object_id,first_name,last_name,working_hours,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44364__$1 = s__44364;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__44364__$1);
if(temp__5457__auto____$2){
var s__44364__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44364__$2)){
var c__31403__auto____$1 = cljs.core.chunk_first.call(null,s__44364__$2);
var size__31404__auto____$1 = cljs.core.count.call(null,c__31403__auto____$1);
var b__44366 = cljs.core.chunk_buffer.call(null,size__31404__auto____$1);
if((function (){var i__44365 = (0);
while(true){
if((i__44365 < size__31404__auto____$1)){
var hour = cljs.core._nth.call(null,c__31403__auto____$1,i__44365);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__44366,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__44398 = (i__44365 + (1));
i__44365 = G__44398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44366),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44351_$_iter__44363.call(null,cljs.core.chunk_rest.call(null,s__44364__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44366),null);
}
} else {
var hour = cljs.core.first.call(null,s__44364__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44351_$_iter__44363.call(null,cljs.core.rest.call(null,s__44364__$2)));
}
} else {
return null;
}
break;
}
});})(i__44345,map__44361,map__44361__$1,object_id,first_name,last_name,working_hours,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__44345,map__44361,map__44361__$1,object_id,first_name,last_name,working_hours,s__44352__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31405__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44351.call(null,cljs.core.rest.call(null,s__44352__$2)));
}
} else {
return null;
}
break;
}
});})(i__44345,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__44345,weekday,weekday_name,date,c__31403__auto__,size__31404__auto__,b__44346,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31405__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)));

var G__44399 = (i__44345 + (1));
i__44345 = G__44399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44346),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343.call(null,cljs.core.chunk_rest.call(null,s__44344__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44346),null);
}
} else {
var date = cljs.core.first.call(null,s__44344__$2);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"\u015Bwi\u0119to",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bell","bell",419679286),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
}
});})(weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 4px"], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31405__auto__ = ((function (weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44367(s__44368){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44368__$1 = s__44368;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44368__$1);
if(temp__5457__auto____$1){
var s__44368__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44368__$2)){
var c__31403__auto__ = cljs.core.chunk_first.call(null,s__44368__$2);
var size__31404__auto__ = cljs.core.count.call(null,c__31403__auto__);
var b__44370 = cljs.core.chunk_buffer.call(null,size__31404__auto__);
if((function (){var i__44369 = (0);
while(true){
if((i__44369 < size__31404__auto__)){
var hour = cljs.core._nth.call(null,c__31403__auto__,i__44369);
cljs.core.chunk_append.call(null,b__44370,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__44400 = (i__44369 + (1));
i__44369 = G__44400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44370),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44367.call(null,cljs.core.chunk_rest.call(null,s__44368__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44370),null);
}
} else {
var hour = cljs.core.first.call(null,s__44368__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44367.call(null,cljs.core.rest.call(null,s__44368__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31405__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31405__auto__ = ((function (weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44371(s__44372){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44372__$1 = s__44372;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44372__$1);
if(temp__5457__auto____$1){
var s__44372__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44372__$2)){
var c__31403__auto__ = cljs.core.chunk_first.call(null,s__44372__$2);
var size__31404__auto__ = cljs.core.count.call(null,c__31403__auto__);
var b__44374 = cljs.core.chunk_buffer.call(null,size__31404__auto__);
if((function (){var i__44373 = (0);
while(true){
if((i__44373 < size__31404__auto__)){
var map__44375 = cljs.core._nth.call(null,c__31403__auto__,i__44373);
var map__44375__$1 = ((((!((map__44375 == null)))?((((map__44375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44375):map__44375);
var object_id = cljs.core.get.call(null,map__44375__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44375__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44375__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__44375__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__44374,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"dzie\u0144 wolny",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44373,map__44375,map__44375__$1,object_id,first_name,last_name,working_hours,c__31403__auto__,size__31404__auto__,b__44374,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
var break_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-break?","work-schedule/is-break?",-952345534),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
if(cljs.core.not.call(null,cljs.core.deref.call(null,break_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-break","work-schedule/set-break",2098802928),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
}
});})(i__44373,map__44375,map__44375__$1,object_id,first_name,last_name,working_hours,c__31403__auto__,size__31404__auto__,b__44374,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"compass","compass",-1753121034),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44373,map__44375,map__44375__$1,object_id,first_name,last_name,working_hours,c__31403__auto__,size__31404__auto__,b__44374,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
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
});})(i__44373,map__44375,map__44375__$1,object_id,first_name,last_name,working_hours,c__31403__auto__,size__31404__auto__,b__44374,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44373,map__44375,map__44375__$1,object_id,first_name,last_name,working_hours,c__31403__auto__,size__31404__auto__,b__44374,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__44373,map__44375,map__44375__$1,object_id,first_name,last_name,working_hours,c__31403__auto__,size__31404__auto__,b__44374,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31405__auto__ = ((function (i__44373,map__44375,map__44375__$1,object_id,first_name,last_name,working_hours,c__31403__auto__,size__31404__auto__,b__44374,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44371_$_iter__44377(s__44378){
return (new cljs.core.LazySeq(null,((function (i__44373,map__44375,map__44375__$1,object_id,first_name,last_name,working_hours,c__31403__auto__,size__31404__auto__,b__44374,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44378__$1 = s__44378;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__44378__$1);
if(temp__5457__auto____$2){
var s__44378__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44378__$2)){
var c__31403__auto____$1 = cljs.core.chunk_first.call(null,s__44378__$2);
var size__31404__auto____$1 = cljs.core.count.call(null,c__31403__auto____$1);
var b__44380 = cljs.core.chunk_buffer.call(null,size__31404__auto____$1);
if((function (){var i__44379 = (0);
while(true){
if((i__44379 < size__31404__auto____$1)){
var hour = cljs.core._nth.call(null,c__31403__auto____$1,i__44379);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__44380,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__44401 = (i__44379 + (1));
i__44379 = G__44401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44380),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44371_$_iter__44377.call(null,cljs.core.chunk_rest.call(null,s__44378__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44380),null);
}
} else {
var hour = cljs.core.first.call(null,s__44378__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44371_$_iter__44377.call(null,cljs.core.rest.call(null,s__44378__$2)));
}
} else {
return null;
}
break;
}
});})(i__44373,map__44375,map__44375__$1,object_id,first_name,last_name,working_hours,c__31403__auto__,size__31404__auto__,b__44374,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__44373,map__44375,map__44375__$1,object_id,first_name,last_name,working_hours,c__31403__auto__,size__31404__auto__,b__44374,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31405__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__44402 = (i__44373 + (1));
i__44373 = G__44402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44374),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44371.call(null,cljs.core.chunk_rest.call(null,s__44372__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44374),null);
}
} else {
var map__44381 = cljs.core.first.call(null,s__44372__$2);
var map__44381__$1 = ((((!((map__44381 == null)))?((((map__44381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44381):map__44381);
var object_id = cljs.core.get.call(null,map__44381__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44381__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44381__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__44381__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"dzie\u0144 wolny",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__44381,map__44381__$1,object_id,first_name,last_name,working_hours,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
var break_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-break?","work-schedule/is-break?",-952345534),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
if(cljs.core.not.call(null,cljs.core.deref.call(null,break_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-break","work-schedule/set-break",2098802928),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
}
});})(map__44381,map__44381__$1,object_id,first_name,last_name,working_hours,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"compass","compass",-1753121034),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__44381,map__44381__$1,object_id,first_name,last_name,working_hours,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
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
});})(map__44381,map__44381__$1,object_id,first_name,last_name,working_hours,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__44381,map__44381__$1,object_id,first_name,last_name,working_hours,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(map__44381,map__44381__$1,object_id,first_name,last_name,working_hours,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31405__auto__ = ((function (map__44381,map__44381__$1,object_id,first_name,last_name,working_hours,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44371_$_iter__44383(s__44384){
return (new cljs.core.LazySeq(null,((function (map__44381,map__44381__$1,object_id,first_name,last_name,working_hours,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44384__$1 = s__44384;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__44384__$1);
if(temp__5457__auto____$2){
var s__44384__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44384__$2)){
var c__31403__auto__ = cljs.core.chunk_first.call(null,s__44384__$2);
var size__31404__auto__ = cljs.core.count.call(null,c__31403__auto__);
var b__44386 = cljs.core.chunk_buffer.call(null,size__31404__auto__);
if((function (){var i__44385 = (0);
while(true){
if((i__44385 < size__31404__auto__)){
var hour = cljs.core._nth.call(null,c__31403__auto__,i__44385);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__44386,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__44403 = (i__44385 + (1));
i__44385 = G__44403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44386),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44371_$_iter__44383.call(null,cljs.core.chunk_rest.call(null,s__44384__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44386),null);
}
} else {
var hour = cljs.core.first.call(null,s__44384__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44371_$_iter__44383.call(null,cljs.core.rest.call(null,s__44384__$2)));
}
} else {
return null;
}
break;
}
});})(map__44381,map__44381__$1,object_id,first_name,last_name,working_hours,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(map__44381,map__44381__$1,object_id,first_name,last_name,working_hours,s__44372__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31405__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343_$_iter__44371.call(null,cljs.core.rest.call(null,s__44372__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__44344__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31405__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44343.call(null,cljs.core.rest.call(null,s__44344__$2)));
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
return iter__31405__auto__.call(null,cljs.core.deref.call(null,days));
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"no-print",new cljs.core.Keyword(null,"size","size",1098693007),"3 0 auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 12px"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null),"osoba"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba godzin"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"g"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba pierwszych zmian"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"p"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba drugich zmian"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"d"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba sob\u00F3t"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"s"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba niedziel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"n"], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31405__auto__ = ((function (main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44387(s__44388){
return (new cljs.core.LazySeq(null,((function (main_date,days,workplace_id,workers){
return (function (){
var s__44388__$1 = s__44388;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44388__$1);
if(temp__5457__auto__){
var s__44388__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44388__$2)){
var c__31403__auto__ = cljs.core.chunk_first.call(null,s__44388__$2);
var size__31404__auto__ = cljs.core.count.call(null,c__31403__auto__);
var b__44390 = cljs.core.chunk_buffer.call(null,size__31404__auto__);
if((function (){var i__44389 = (0);
while(true){
if((i__44389 < size__31404__auto__)){
var map__44391 = cljs.core._nth.call(null,c__31403__auto__,i__44389);
var map__44391__$1 = ((((!((map__44391 == null)))?((((map__44391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44391):map__44391);
var object_id = cljs.core.get.call(null,map__44391__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44391__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44391__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__44391__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__44390,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,first_name)),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_hours,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_first_changes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_second_changes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_saturdays,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_sundays,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__44404 = (i__44389 + (1));
i__44389 = G__44404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44390),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44387.call(null,cljs.core.chunk_rest.call(null,s__44388__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44390),null);
}
} else {
var map__44393 = cljs.core.first.call(null,s__44388__$2);
var map__44393__$1 = ((((!((map__44393 == null)))?((((map__44393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44393):map__44393);
var object_id = cljs.core.get.call(null,map__44393__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44393__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44393__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__44393__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,first_name)),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_hours,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_first_changes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_second_changes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_saturdays,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_sundays,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44387.call(null,cljs.core.rest.call(null,s__44388__$2)));
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
return iter__31405__auto__.call(null,cljs.core.deref.call(null,workers));
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

//# sourceMappingURL=ui.js.map?rel=1510609299487
