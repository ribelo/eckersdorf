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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30522__auto__ = cljs.core.deref.call(null,workplace);
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return "brak";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (workplaces_list,workplace){
return (function (val){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-workplace","work-schedule/set-workplace",-600467261),val], null));
});})(workplaces_list,workplace))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null)], null),cljs.core.doall.call(null,(function (){var iter__31404__auto__ = ((function (workplaces_list,workplace){
return (function eckersdorf$work_schedule$ui$select_workplace_$_iter__44315(s__44316){
return (new cljs.core.LazySeq(null,((function (workplaces_list,workplace){
return (function (){
var s__44316__$1 = s__44316;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44316__$1);
if(temp__5457__auto__){
var s__44316__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44316__$2)){
var c__31402__auto__ = cljs.core.chunk_first.call(null,s__44316__$2);
var size__31403__auto__ = cljs.core.count.call(null,c__31402__auto__);
var b__44318 = cljs.core.chunk_buffer.call(null,size__31403__auto__);
if((function (){var i__44317 = (0);
while(true){
if((i__44317 < size__31403__auto__)){
var w = cljs.core._nth.call(null,c__31402__auto__,i__44317);
var map__44319 = w;
var map__44319__$1 = ((((!((map__44319 == null)))?((((map__44319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44319):map__44319);
var object_id = cljs.core.get.call(null,map__44319__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__44319__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
cljs.core.chunk_append.call(null,b__44318,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)));

var G__44323 = (i__44317 + (1));
i__44317 = G__44323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44318),eckersdorf$work_schedule$ui$select_workplace_$_iter__44315.call(null,cljs.core.chunk_rest.call(null,s__44316__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44318),null);
}
} else {
var w = cljs.core.first.call(null,s__44316__$2);
var map__44321 = w;
var map__44321__$1 = ((((!((map__44321 == null)))?((((map__44321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44321):map__44321);
var object_id = cljs.core.get.call(null,map__44321__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__44321__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)),eckersdorf$work_schedule$ui$select_workplace_$_iter__44315.call(null,cljs.core.rest.call(null,s__44316__$2)));
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
return iter__31404__auto__.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),null,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077),"brak"], null)], null),cljs.core.deref.call(null,workplaces_list)));
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
eckersdorf.work_schedule.ui.work_cell = (function eckersdorf$work_schedule$ui$work_cell(p__44327){
var map__44328 = p__44327;
var map__44328__$1 = ((((!((map__44328 == null)))?((((map__44328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44328):map__44328);
var m = map__44328__$1;
var worker_id = cljs.core.get.call(null,map__44328__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44328__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44328__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var work = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","get-work","work-schedule/get-work",1385389307),m], null));
var worker = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","by-id","workers/by-id",-30752208),worker_id], null));
var seller_background = "repeating-linear-gradient(\n                           -45deg,\n                           #49a9ee,\n                           #49a9ee 4px,\n                           #add8f7 4px,\n                           #add8f7 8px)";
var butcher_background = "repeating-linear-gradient(\n                            -45deg,\n                            #f46e65,\n                            #f46e65 4px,\n                            #fabeb9 4px,\n                            #fabeb9 8px)";
var vacation_background = "repeating-linear-gradient(\n                            -45deg,\n                            #ffce3d,\n                            #ffce3d 4px,\n                            #ffe9a7 4px,\n                            #ffe9a7 8px)";
var holiday_background = "repeating-linear-gradient(\n                            -45deg,\n                            #f7629e,\n                            #f7629e 4px,\n                            #fcb8d3 4px,\n                            #fcb8d3 8px)";
var break_background = "repeating-linear-gradient(\n                          -45deg,\n                          #919191,\n                          #919191 4px,\n                          #d9d9d9 4px,\n                          #d9d9d9 8px)";
return ((function (work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime){
return (function (m__$1){
var work_type = new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,work));
var working_hours = new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,worker));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime){
return (function (){
var G__44330 = work_type;
if(cljs.core._EQ_.call(null,null,G__44330)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
} else {
if(cljs.core._EQ_.call(null,"seller",G__44330)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher")], null));
} else {
if(cljs.core._EQ_.call(null,"butcher",G__44330)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),m__$1], null));
} else {
if(cljs.core._EQ_.call(null,"break",G__44330)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),m__$1], null));

return setTimeout(((function (G__44330,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
});})(G__44330,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime))
);
} else {
if(cljs.core._EQ_.call(null,"vacation",G__44330)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),m__$1], null));

return setTimeout(((function (G__44330,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
});})(G__44330,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime))
);
} else {
if(cljs.core._EQ_.call(null,"holiday",G__44330)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44330)].join('')));

}
}
}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime){
return (function (){
var end_datetime = cljs_time.core.plus.call(null,datetime,cljs_time.core.hours.call(null,(function (){var x__30881__auto__ = working_hours;
var y__30882__auto__ = ((21) - cljs_time.core.hour.call(null,datetime));
return ((x__30881__auto__ < y__30882__auto__) ? x__30881__auto__ : y__30882__auto__);
})()));
var G__44331 = work_type;
if(cljs.core._EQ_.call(null,null,G__44331)){
var works = cljs.core.map.call(null,((function (G__44331,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime){
return (function (p1__44324_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__44324_SHARP_);
});})(G__44331,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),works], null));
} else {
if(cljs.core._EQ_.call(null,"seller",G__44331)){
var works = cljs.core.map.call(null,((function (G__44331,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime){
return (function (p1__44325_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__44325_SHARP_,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller");
});})(G__44331,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),works], null));
} else {
if(cljs.core._EQ_.call(null,"butcher",G__44331)){
var works = cljs.core.map.call(null,((function (G__44331,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime){
return (function (p1__44326_SHARP_){
return cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),p1__44326_SHARP_,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher");
});})(G__44331,end_datetime,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,datetime,end_datetime,cljs_time.core.hours.call(null,(1))));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),works], null));
} else {
if(cljs.core._EQ_.call(null,"holiday",G__44331)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44331)].join('')));

}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__44332 = work_type;
if(cljs.core._EQ_.call(null,null,G__44332)){
return null;
} else {
if(cljs.core._EQ_.call(null,"seller",G__44332)){
return seller_background;
} else {
if(cljs.core._EQ_.call(null,"butcher",G__44332)){
return butcher_background;
} else {
if(cljs.core._EQ_.call(null,"break",G__44332)){
return break_background;
} else {
if(cljs.core._EQ_.call(null,"vacation",G__44332)){
return vacation_background;
} else {
if(cljs.core._EQ_.call(null,"holiday",G__44332)){
return holiday_background;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44332)].join('')));

}
}
}
}
}
}
})()], null)], null),null], null);
});
;})(work,worker,seller_background,butcher_background,vacation_background,holiday_background,break_background,map__44328,map__44328__$1,m,worker_id,workplace_id,datetime))
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
return (function (p__44333){
var map__44334 = p__44333;
var map__44334__$1 = ((((!((map__44334 == null)))?((((map__44334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44334):map__44334);
var object_id = cljs.core.get.call(null,map__44334__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44334__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44334__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),reagent.core.as_element.call(null,(function (){var text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,first_name)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('');
var height = (cljs.core.count.call(null,text) * 6.5);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"writing-mode","writing-mode",-1707110905),"vertical-rl",new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join('')], null)], null),text], null)], null);
})()),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,width)),"%"].join(''),new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),object_id,new cljs.core.Keyword(null,"key","key",-1516042587),object_id,new cljs.core.Keyword(null,"render","render",-1408033454),((function (map__44334,map__44334__$1,object_id,first_name,last_name,main_date,days,workplace_id,workplace,workers,width,data_source){
return (function (p__44336,_,___$1){
var vec__44337 = p__44336;
var begin = cljs.core.nth.call(null,vec__44337,(0),null);
var end = cljs.core.nth.call(null,vec__44337,(1),null);
var work_type = cljs.core.nth.call(null,vec__44337,(2),null);
var day_of_week = cljs.core.nth.call(null,vec__44337,(3),null);
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,work_type))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(begin),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,(function (){var G__44340 = work_type;
switch (G__44340) {
case "seller":
return "sklep";

break;
case "butcher":
return "lada";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44340)].join('')));

}
})()], null)], null):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["vacation",null], null), null).call(null,work_type))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,"urlop"], null):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["holiday",null], null), null).call(null,work_type))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,"\u015Bwi\u0119to"], null):((cljs.core._EQ_.call(null,(7),day_of_week))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,"niedziela"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,"wolne"], null)
))))], null));
});})(map__44334,map__44334__$1,object_id,first_name,last_name,main_date,days,workplace_id,workplace,workers,width,data_source))
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"calc(100% - 80px)"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"no-print",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_workplace], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_month], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button_group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.reload_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.sync_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.print_button], null)], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,workplace_id)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"prosz\u0119 wybra\u0107 sklep"], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"14 0 0",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"scroll","scroll",971553779),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"24px"], null)], null),cljs.core.doall.call(null,(function (){var iter__31404__auto__ = ((function (main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342(s__44343){
return (new cljs.core.LazySeq(null,((function (main_date,days,workplace_id,workers){
return (function (){
var s__44343__$1 = s__44343;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44343__$1);
if(temp__5457__auto__){
var s__44343__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44343__$2)){
var c__31402__auto__ = cljs.core.chunk_first.call(null,s__44343__$2);
var size__31403__auto__ = cljs.core.count.call(null,c__31402__auto__);
var b__44345 = cljs.core.chunk_buffer.call(null,size__31403__auto__);
if((function (){var i__44344 = (0);
while(true){
if((i__44344 < size__31403__auto__)){
var date = cljs.core._nth.call(null,c__31402__auto__,i__44344);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
cljs.core.chunk_append.call(null,b__44345,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"\u015Bwi\u0119to",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bell","bell",419679286),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44344,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
}
});})(i__44344,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 4px"], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31404__auto__ = ((function (i__44344,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44346(s__44347){
return (new cljs.core.LazySeq(null,((function (i__44344,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44347__$1 = s__44347;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44347__$1);
if(temp__5457__auto____$1){
var s__44347__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44347__$2)){
var c__31402__auto____$1 = cljs.core.chunk_first.call(null,s__44347__$2);
var size__31403__auto____$1 = cljs.core.count.call(null,c__31402__auto____$1);
var b__44349 = cljs.core.chunk_buffer.call(null,size__31403__auto____$1);
if((function (){var i__44348 = (0);
while(true){
if((i__44348 < size__31403__auto____$1)){
var hour = cljs.core._nth.call(null,c__31402__auto____$1,i__44348);
cljs.core.chunk_append.call(null,b__44349,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__44394 = (i__44348 + (1));
i__44348 = G__44394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44349),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44346.call(null,cljs.core.chunk_rest.call(null,s__44347__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44349),null);
}
} else {
var hour = cljs.core.first.call(null,s__44347__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44346.call(null,cljs.core.rest.call(null,s__44347__$2)));
}
} else {
return null;
}
break;
}
});})(i__44344,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__44344,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31404__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31404__auto__ = ((function (i__44344,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44350(s__44351){
return (new cljs.core.LazySeq(null,((function (i__44344,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44351__$1 = s__44351;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44351__$1);
if(temp__5457__auto____$1){
var s__44351__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44351__$2)){
var c__31402__auto____$1 = cljs.core.chunk_first.call(null,s__44351__$2);
var size__31403__auto____$1 = cljs.core.count.call(null,c__31402__auto____$1);
var b__44353 = cljs.core.chunk_buffer.call(null,size__31403__auto____$1);
if((function (){var i__44352 = (0);
while(true){
if((i__44352 < size__31403__auto____$1)){
var map__44354 = cljs.core._nth.call(null,c__31402__auto____$1,i__44352);
var map__44354__$1 = ((((!((map__44354 == null)))?((((map__44354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44354):map__44354);
var object_id = cljs.core.get.call(null,map__44354__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44354__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44354__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__44354__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__44353,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"dzie\u0144 wolny",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44352,i__44344,map__44354,map__44354__$1,object_id,first_name,last_name,working_hours,c__31402__auto____$1,size__31403__auto____$1,b__44353,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
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
});})(i__44352,i__44344,map__44354,map__44354__$1,object_id,first_name,last_name,working_hours,c__31402__auto____$1,size__31403__auto____$1,b__44353,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"compass","compass",-1753121034),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44352,i__44344,map__44354,map__44354__$1,object_id,first_name,last_name,working_hours,c__31402__auto____$1,size__31403__auto____$1,b__44353,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
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
});})(i__44352,i__44344,map__44354,map__44354__$1,object_id,first_name,last_name,working_hours,c__31402__auto____$1,size__31403__auto____$1,b__44353,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44352,i__44344,map__44354,map__44354__$1,object_id,first_name,last_name,working_hours,c__31402__auto____$1,size__31403__auto____$1,b__44353,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__44352,i__44344,map__44354,map__44354__$1,object_id,first_name,last_name,working_hours,c__31402__auto____$1,size__31403__auto____$1,b__44353,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31404__auto__ = ((function (i__44352,i__44344,map__44354,map__44354__$1,object_id,first_name,last_name,working_hours,c__31402__auto____$1,size__31403__auto____$1,b__44353,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44350_$_iter__44356(s__44357){
return (new cljs.core.LazySeq(null,((function (i__44352,i__44344,map__44354,map__44354__$1,object_id,first_name,last_name,working_hours,c__31402__auto____$1,size__31403__auto____$1,b__44353,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44357__$1 = s__44357;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__44357__$1);
if(temp__5457__auto____$2){
var s__44357__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44357__$2)){
var c__31402__auto____$2 = cljs.core.chunk_first.call(null,s__44357__$2);
var size__31403__auto____$2 = cljs.core.count.call(null,c__31402__auto____$2);
var b__44359 = cljs.core.chunk_buffer.call(null,size__31403__auto____$2);
if((function (){var i__44358 = (0);
while(true){
if((i__44358 < size__31403__auto____$2)){
var hour = cljs.core._nth.call(null,c__31402__auto____$2,i__44358);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__44359,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__44395 = (i__44358 + (1));
i__44358 = G__44395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44359),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44350_$_iter__44356.call(null,cljs.core.chunk_rest.call(null,s__44357__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44359),null);
}
} else {
var hour = cljs.core.first.call(null,s__44357__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44350_$_iter__44356.call(null,cljs.core.rest.call(null,s__44357__$2)));
}
} else {
return null;
}
break;
}
});})(i__44352,i__44344,map__44354,map__44354__$1,object_id,first_name,last_name,working_hours,c__31402__auto____$1,size__31403__auto____$1,b__44353,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__44352,i__44344,map__44354,map__44354__$1,object_id,first_name,last_name,working_hours,c__31402__auto____$1,size__31403__auto____$1,b__44353,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31404__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__44396 = (i__44352 + (1));
i__44352 = G__44396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44353),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44350.call(null,cljs.core.chunk_rest.call(null,s__44351__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44353),null);
}
} else {
var map__44360 = cljs.core.first.call(null,s__44351__$2);
var map__44360__$1 = ((((!((map__44360 == null)))?((((map__44360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44360):map__44360);
var object_id = cljs.core.get.call(null,map__44360__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44360__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44360__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__44360__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"dzie\u0144 wolny",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44344,map__44360,map__44360__$1,object_id,first_name,last_name,working_hours,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
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
});})(i__44344,map__44360,map__44360__$1,object_id,first_name,last_name,working_hours,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"compass","compass",-1753121034),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44344,map__44360,map__44360__$1,object_id,first_name,last_name,working_hours,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
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
});})(i__44344,map__44360,map__44360__$1,object_id,first_name,last_name,working_hours,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44344,map__44360,map__44360__$1,object_id,first_name,last_name,working_hours,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__44344,map__44360,map__44360__$1,object_id,first_name,last_name,working_hours,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31404__auto__ = ((function (i__44344,map__44360,map__44360__$1,object_id,first_name,last_name,working_hours,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44350_$_iter__44362(s__44363){
return (new cljs.core.LazySeq(null,((function (i__44344,map__44360,map__44360__$1,object_id,first_name,last_name,working_hours,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44363__$1 = s__44363;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__44363__$1);
if(temp__5457__auto____$2){
var s__44363__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44363__$2)){
var c__31402__auto____$1 = cljs.core.chunk_first.call(null,s__44363__$2);
var size__31403__auto____$1 = cljs.core.count.call(null,c__31402__auto____$1);
var b__44365 = cljs.core.chunk_buffer.call(null,size__31403__auto____$1);
if((function (){var i__44364 = (0);
while(true){
if((i__44364 < size__31403__auto____$1)){
var hour = cljs.core._nth.call(null,c__31402__auto____$1,i__44364);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__44365,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__44397 = (i__44364 + (1));
i__44364 = G__44397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44365),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44350_$_iter__44362.call(null,cljs.core.chunk_rest.call(null,s__44363__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44365),null);
}
} else {
var hour = cljs.core.first.call(null,s__44363__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44350_$_iter__44362.call(null,cljs.core.rest.call(null,s__44363__$2)));
}
} else {
return null;
}
break;
}
});})(i__44344,map__44360,map__44360__$1,object_id,first_name,last_name,working_hours,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__44344,map__44360,map__44360__$1,object_id,first_name,last_name,working_hours,s__44351__$2,temp__5457__auto____$1,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31404__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44350.call(null,cljs.core.rest.call(null,s__44351__$2)));
}
} else {
return null;
}
break;
}
});})(i__44344,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__44344,weekday,weekday_name,date,c__31402__auto__,size__31403__auto__,b__44345,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31404__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)));

var G__44398 = (i__44344 + (1));
i__44344 = G__44398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44345),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342.call(null,cljs.core.chunk_rest.call(null,s__44343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44345),null);
}
} else {
var date = cljs.core.first.call(null,s__44343__$2);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"\u015Bwi\u0119to",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bell","bell",419679286),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),date], null));
}
});})(weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 4px"], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31404__auto__ = ((function (weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44366(s__44367){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44367__$1 = s__44367;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44367__$1);
if(temp__5457__auto____$1){
var s__44367__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44367__$2)){
var c__31402__auto__ = cljs.core.chunk_first.call(null,s__44367__$2);
var size__31403__auto__ = cljs.core.count.call(null,c__31402__auto__);
var b__44369 = cljs.core.chunk_buffer.call(null,size__31403__auto__);
if((function (){var i__44368 = (0);
while(true){
if((i__44368 < size__31403__auto__)){
var hour = cljs.core._nth.call(null,c__31402__auto__,i__44368);
cljs.core.chunk_append.call(null,b__44369,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__44399 = (i__44368 + (1));
i__44368 = G__44399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44369),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44366.call(null,cljs.core.chunk_rest.call(null,s__44367__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44369),null);
}
} else {
var hour = cljs.core.first.call(null,s__44367__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44366.call(null,cljs.core.rest.call(null,s__44367__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31404__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31404__auto__ = ((function (weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44370(s__44371){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44371__$1 = s__44371;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44371__$1);
if(temp__5457__auto____$1){
var s__44371__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44371__$2)){
var c__31402__auto__ = cljs.core.chunk_first.call(null,s__44371__$2);
var size__31403__auto__ = cljs.core.count.call(null,c__31402__auto__);
var b__44373 = cljs.core.chunk_buffer.call(null,size__31403__auto__);
if((function (){var i__44372 = (0);
while(true){
if((i__44372 < size__31403__auto__)){
var map__44374 = cljs.core._nth.call(null,c__31402__auto__,i__44372);
var map__44374__$1 = ((((!((map__44374 == null)))?((((map__44374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44374):map__44374);
var object_id = cljs.core.get.call(null,map__44374__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44374__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44374__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__44374__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__44373,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"dzie\u0144 wolny",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44372,map__44374,map__44374__$1,object_id,first_name,last_name,working_hours,c__31402__auto__,size__31403__auto__,b__44373,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
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
});})(i__44372,map__44374,map__44374__$1,object_id,first_name,last_name,working_hours,c__31402__auto__,size__31403__auto__,b__44373,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"compass","compass",-1753121034),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44372,map__44374,map__44374__$1,object_id,first_name,last_name,working_hours,c__31402__auto__,size__31403__auto__,b__44373,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
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
});})(i__44372,map__44374,map__44374__$1,object_id,first_name,last_name,working_hours,c__31402__auto__,size__31403__auto__,b__44373,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__44372,map__44374,map__44374__$1,object_id,first_name,last_name,working_hours,c__31402__auto__,size__31403__auto__,b__44373,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(i__44372,map__44374,map__44374__$1,object_id,first_name,last_name,working_hours,c__31402__auto__,size__31403__auto__,b__44373,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31404__auto__ = ((function (i__44372,map__44374,map__44374__$1,object_id,first_name,last_name,working_hours,c__31402__auto__,size__31403__auto__,b__44373,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44370_$_iter__44376(s__44377){
return (new cljs.core.LazySeq(null,((function (i__44372,map__44374,map__44374__$1,object_id,first_name,last_name,working_hours,c__31402__auto__,size__31403__auto__,b__44373,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44377__$1 = s__44377;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__44377__$1);
if(temp__5457__auto____$2){
var s__44377__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44377__$2)){
var c__31402__auto____$1 = cljs.core.chunk_first.call(null,s__44377__$2);
var size__31403__auto____$1 = cljs.core.count.call(null,c__31402__auto____$1);
var b__44379 = cljs.core.chunk_buffer.call(null,size__31403__auto____$1);
if((function (){var i__44378 = (0);
while(true){
if((i__44378 < size__31403__auto____$1)){
var hour = cljs.core._nth.call(null,c__31402__auto____$1,i__44378);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__44379,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__44400 = (i__44378 + (1));
i__44378 = G__44400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44379),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44370_$_iter__44376.call(null,cljs.core.chunk_rest.call(null,s__44377__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44379),null);
}
} else {
var hour = cljs.core.first.call(null,s__44377__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44370_$_iter__44376.call(null,cljs.core.rest.call(null,s__44377__$2)));
}
} else {
return null;
}
break;
}
});})(i__44372,map__44374,map__44374__$1,object_id,first_name,last_name,working_hours,c__31402__auto__,size__31403__auto__,b__44373,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(i__44372,map__44374,map__44374__$1,object_id,first_name,last_name,working_hours,c__31402__auto__,size__31403__auto__,b__44373,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31404__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__44401 = (i__44372 + (1));
i__44372 = G__44401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44373),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44370.call(null,cljs.core.chunk_rest.call(null,s__44371__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44373),null);
}
} else {
var map__44380 = cljs.core.first.call(null,s__44371__$2);
var map__44380__$1 = ((((!((map__44380 == null)))?((((map__44380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44380):map__44380);
var object_id = cljs.core.get.call(null,map__44380__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44380__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44380__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__44380__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"dzie\u0144 wolny",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__44380,map__44380__$1,object_id,first_name,last_name,working_hours,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
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
});})(map__44380,map__44380__$1,object_id,first_name,last_name,working_hours,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wy\u015Blij na urlop",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"compass","compass",-1753121034),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__44380,map__44380__$1,object_id,first_name,last_name,working_hours,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
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
});})(map__44380,map__44380__$1,object_id,first_name,last_name,working_hours,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"wyczy\u015B\u0107 dzie\u0144",new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"mouse-enter-delay","mouse-enter-delay",987444361),0.25], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__44380,map__44380__$1,object_id,first_name,last_name,working_hours,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),date], null)], null));
}
});})(map__44380,map__44380__$1,object_id,first_name,last_name,working_hours,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px"], null)], null)], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31404__auto__ = ((function (map__44380,map__44380__$1,object_id,first_name,last_name,working_hours,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44370_$_iter__44382(s__44383){
return (new cljs.core.LazySeq(null,((function (map__44380,map__44380__$1,object_id,first_name,last_name,working_hours,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers){
return (function (){
var s__44383__$1 = s__44383;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__44383__$1);
if(temp__5457__auto____$2){
var s__44383__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44383__$2)){
var c__31402__auto__ = cljs.core.chunk_first.call(null,s__44383__$2);
var size__31403__auto__ = cljs.core.count.call(null,c__31402__auto__);
var b__44385 = cljs.core.chunk_buffer.call(null,size__31403__auto__);
if((function (){var i__44384 = (0);
while(true){
if((i__44384 < size__31403__auto__)){
var hour = cljs.core._nth.call(null,c__31402__auto__,i__44384);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
cljs.core.chunk_append.call(null,b__44385,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__44402 = (i__44384 + (1));
i__44384 = G__44402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44385),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44370_$_iter__44382.call(null,cljs.core.chunk_rest.call(null,s__44383__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44385),null);
}
} else {
var hour = cljs.core.first.call(null,s__44383__$2);
var datetime = cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44370_$_iter__44382.call(null,cljs.core.rest.call(null,s__44383__$2)));
}
} else {
return null;
}
break;
}
});})(map__44380,map__44380__$1,object_id,first_name,last_name,working_hours,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(map__44380,map__44380__$1,object_id,first_name,last_name,working_hours,s__44371__$2,temp__5457__auto____$1,weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31404__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342_$_iter__44370.call(null,cljs.core.rest.call(null,s__44371__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__44343__$2,temp__5457__auto__,main_date,days,workplace_id,workers))
;
return iter__31404__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44342.call(null,cljs.core.rest.call(null,s__44343__$2)));
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
return iter__31404__auto__.call(null,cljs.core.deref.call(null,days));
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"no-print",new cljs.core.Keyword(null,"size","size",1098693007),"3 0 auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 12px"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null),"osoba"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba godzin"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"g"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba pierwszych zmian"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"p"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba drugich zmian"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"d"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba sob\u00F3t"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"s"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"liczba niedziel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"n"], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31404__auto__ = ((function (main_date,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44386(s__44387){
return (new cljs.core.LazySeq(null,((function (main_date,days,workplace_id,workers){
return (function (){
var s__44387__$1 = s__44387;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44387__$1);
if(temp__5457__auto__){
var s__44387__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44387__$2)){
var c__31402__auto__ = cljs.core.chunk_first.call(null,s__44387__$2);
var size__31403__auto__ = cljs.core.count.call(null,c__31402__auto__);
var b__44389 = cljs.core.chunk_buffer.call(null,size__31403__auto__);
if((function (){var i__44388 = (0);
while(true){
if((i__44388 < size__31403__auto__)){
var map__44390 = cljs.core._nth.call(null,c__31402__auto__,i__44388);
var map__44390__$1 = ((((!((map__44390 == null)))?((((map__44390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44390):map__44390);
var object_id = cljs.core.get.call(null,map__44390__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44390__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44390__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__44390__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__44389,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,first_name)),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_hours,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_first_changes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_second_changes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_saturdays,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_sundays,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__44403 = (i__44388 + (1));
i__44388 = G__44403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44389),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44386.call(null,cljs.core.chunk_rest.call(null,s__44387__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44389),null);
}
} else {
var map__44392 = cljs.core.first.call(null,s__44387__$2);
var map__44392__$1 = ((((!((map__44392 == null)))?((((map__44392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44392):map__44392);
var object_id = cljs.core.get.call(null,map__44392__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__44392__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__44392__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__44392__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,first_name)),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_hours,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_first_changes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_second_changes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_saturdays,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.worked_sundays,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs.core.deref.call(null,main_date)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_app_$_iter__44386.call(null,cljs.core.rest.call(null,s__44387__$2)));
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
return iter__31404__auto__.call(null,cljs.core.deref.call(null,workers));
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

//# sourceMappingURL=ui.js.map?rel=1510602151496
