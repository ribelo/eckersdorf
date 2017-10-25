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
return (function eckersdorf$work_schedule$ui$select_workplace_$_iter__86886(s__86887){
return (new cljs.core.LazySeq(null,((function (workplaces_list,workplace){
return (function (){
var s__86887__$1 = s__86887;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__86887__$1);
if(temp__5290__auto__){
var s__86887__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86887__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__86887__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__86889 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__86888 = (0);
while(true){
if((i__86888 < size__31131__auto__)){
var w = cljs.core._nth.call(null,c__31130__auto__,i__86888);
var map__86890 = w;
var map__86890__$1 = ((((!((map__86890 == null)))?((((map__86890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86890):map__86890);
var object_id = cljs.core.get.call(null,map__86890__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__86890__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
cljs.core.chunk_append.call(null,b__86889,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)));

var G__86894 = (i__86888 + (1));
i__86888 = G__86894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86889),eckersdorf$work_schedule$ui$select_workplace_$_iter__86886.call(null,cljs.core.chunk_rest.call(null,s__86887__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86889),null);
}
} else {
var w = cljs.core.first.call(null,s__86887__$2);
var map__86892 = w;
var map__86892__$1 = ((((!((map__86892 == null)))?((((map__86892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86892):map__86892);
var object_id = cljs.core.get.call(null,map__86892__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var name = cljs.core.get.call(null,map__86892__$1,new cljs.core.Keyword("workplace","name","workplace/name",-1414028077));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),object_id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_id], null)], null)),eckersdorf$work_schedule$ui$select_workplace_$_iter__86886.call(null,cljs.core.rest.call(null,s__86887__$2)));
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
eckersdorf.work_schedule.ui.work_cell = (function eckersdorf$work_schedule$ui$work_cell(p__86895){
var map__86896 = p__86895;
var map__86896__$1 = ((((!((map__86896 == null)))?((((map__86896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86896):map__86896);
var m = map__86896__$1;
var worker_id = cljs.core.get.call(null,map__86896__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__86896__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__86896__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var work = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","get","work-schedule/get",-529948046),m], null));
var worker = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","by-id","workers/by-id",-30752208),worker_id], null));
var seller_background = "repeating-linear-gradient(\n                           -45deg,\n                           #49a9ee,\n                           #49a9ee 4px,\n                           #add8f7 4px,\n                           #add8f7 8px)";
var butcher_background = "repeating-linear-gradient(\n                            -45deg,\n                            #f46e65,\n                            #f46e65 4px,\n                            #fabeb9 4px,\n                            #fabeb9 8px)";
var vacation_background = "repeating-linear-gradient(\n                             -45deg,\n                             #ffce3d,\n                             #ffce3d 4px,\n                             #ffe9a7 4px,\n                             #ffe9a7 8px)";
var holiday_background = "repeating-linear-gradient(\n                             -45deg,\n                             #f7629e,\n                             #f7629e 4px,\n                             #fcb8d3 4px,\n                             #fcb8d3 8px)";
return ((function (work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__86896,map__86896__$1,m,worker_id,workplace_id,datetime){
return (function (m__$1){
var work_type = new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,work));
var working_hours = new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,worker));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"4%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__86896,map__86896__$1,m,worker_id,workplace_id,datetime){
return (function (){
var G__86898 = work_type;
if(cljs.core._EQ_.call(null,null,G__86898)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
} else {
if(cljs.core._EQ_.call(null,"seller",G__86898)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher")], null));
} else {
if(cljs.core._EQ_.call(null,"butcher",G__86898)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),m__$1], null));
} else {
if(cljs.core._EQ_.call(null,"vacation",G__86898)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),m__$1], null));

return setTimeout(((function (G__86898,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__86896,map__86896__$1,m,worker_id,workplace_id,datetime){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));
});})(G__86898,work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__86896,map__86896__$1,m,worker_id,workplace_id,datetime))
);
} else {
if(cljs.core._EQ_.call(null,"holiday",G__86898)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__86898)].join('')));

}
}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__86896,map__86896__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__86896,map__86896__$1,m,worker_id,workplace_id,datetime){
return (function (){
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var end_datetime = cljs_time.core.plus.call(null,datetime__$1,cljs_time.core.hours.call(null,(function (){var x__30608__auto__ = working_hours;
var y__30609__auto__ = ((21) - cljs_time.core.hour.call(null,datetime__$1));
return ((x__30608__auto__ < y__30609__auto__) ? x__30608__auto__ : y__30609__auto__);
})()));
var G__86899 = work_type;
if(cljs.core._EQ_.call(null,null,G__86899)){
var seq__86900 = cljs.core.seq.call(null,cljs_time.periodic.periodic_seq.call(null,datetime__$1,end_datetime,cljs_time.core.hours.call(null,(1))));
var chunk__86901 = null;
var count__86902 = (0);
var i__86903 = (0);
while(true){
if((i__86903 < count__86902)){
var date = cljs.core._nth.call(null,chunk__86901,i__86903);
cljs.core.println.call(null,"nil");

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date))], null));

var G__86913 = seq__86900;
var G__86914 = chunk__86901;
var G__86915 = count__86902;
var G__86916 = (i__86903 + (1));
seq__86900 = G__86913;
chunk__86901 = G__86914;
count__86902 = G__86915;
i__86903 = G__86916;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__86900);
if(temp__5290__auto__){
var seq__86900__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86900__$1)){
var c__31181__auto__ = cljs.core.chunk_first.call(null,seq__86900__$1);
var G__86917 = cljs.core.chunk_rest.call(null,seq__86900__$1);
var G__86918 = c__31181__auto__;
var G__86919 = cljs.core.count.call(null,c__31181__auto__);
var G__86920 = (0);
seq__86900 = G__86917;
chunk__86901 = G__86918;
count__86902 = G__86919;
i__86903 = G__86920;
continue;
} else {
var date = cljs.core.first.call(null,seq__86900__$1);
cljs.core.println.call(null,"nil");

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date))], null));

var G__86921 = cljs.core.next.call(null,seq__86900__$1);
var G__86922 = null;
var G__86923 = (0);
var G__86924 = (0);
seq__86900 = G__86921;
chunk__86901 = G__86922;
count__86902 = G__86923;
i__86903 = G__86924;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.call(null,"seller",G__86899)){
var seq__86904 = cljs.core.seq.call(null,cljs_time.periodic.periodic_seq.call(null,datetime__$1,end_datetime,cljs_time.core.hours.call(null,(1))));
var chunk__86905 = null;
var count__86906 = (0);
var i__86907 = (0);
while(true){
if((i__86907 < count__86906)){
var date = cljs.core._nth.call(null,chunk__86905,i__86907);
cljs.core.println.call(null,"seller");

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date),new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));

var G__86925 = seq__86904;
var G__86926 = chunk__86905;
var G__86927 = count__86906;
var G__86928 = (i__86907 + (1));
seq__86904 = G__86925;
chunk__86905 = G__86926;
count__86906 = G__86927;
i__86907 = G__86928;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__86904);
if(temp__5290__auto__){
var seq__86904__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86904__$1)){
var c__31181__auto__ = cljs.core.chunk_first.call(null,seq__86904__$1);
var G__86929 = cljs.core.chunk_rest.call(null,seq__86904__$1);
var G__86930 = c__31181__auto__;
var G__86931 = cljs.core.count.call(null,c__31181__auto__);
var G__86932 = (0);
seq__86904 = G__86929;
chunk__86905 = G__86930;
count__86906 = G__86931;
i__86907 = G__86932;
continue;
} else {
var date = cljs.core.first.call(null,seq__86904__$1);
cljs.core.println.call(null,"seller");

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date),new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"seller")], null));

var G__86933 = cljs.core.next.call(null,seq__86904__$1);
var G__86934 = null;
var G__86935 = (0);
var G__86936 = (0);
seq__86904 = G__86933;
chunk__86905 = G__86934;
count__86906 = G__86935;
i__86907 = G__86936;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.call(null,"butcher",G__86899)){
var seq__86908 = cljs.core.seq.call(null,cljs_time.periodic.periodic_seq.call(null,datetime__$1,end_datetime,cljs_time.core.hours.call(null,(1))));
var chunk__86909 = null;
var count__86910 = (0);
var i__86911 = (0);
while(true){
if((i__86911 < count__86910)){
var date = cljs.core._nth.call(null,chunk__86909,i__86911);
cljs.core.println.call(null,"butcher");

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date),new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher")], null));

var G__86937 = seq__86908;
var G__86938 = chunk__86909;
var G__86939 = count__86910;
var G__86940 = (i__86911 + (1));
seq__86908 = G__86937;
chunk__86909 = G__86938;
count__86910 = G__86939;
i__86911 = G__86940;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__86908);
if(temp__5290__auto__){
var seq__86908__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86908__$1)){
var c__31181__auto__ = cljs.core.chunk_first.call(null,seq__86908__$1);
var G__86941 = cljs.core.chunk_rest.call(null,seq__86908__$1);
var G__86942 = c__31181__auto__;
var G__86943 = cljs.core.count.call(null,c__31181__auto__);
var G__86944 = (0);
seq__86908 = G__86941;
chunk__86909 = G__86942;
count__86910 = G__86943;
i__86911 = G__86944;
continue;
} else {
var date = cljs.core.first.call(null,seq__86908__$1);
cljs.core.println.call(null,"butcher");

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date),new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"butcher")], null));

var G__86945 = cljs.core.next.call(null,seq__86908__$1);
var G__86946 = null;
var G__86947 = (0);
var G__86948 = (0);
seq__86908 = G__86945;
chunk__86909 = G__86946;
count__86910 = G__86947;
i__86911 = G__86948;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.call(null,"holiday",G__86899)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__86899)].join('')));

}
}
}
}
});})(work_type,working_hours,work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__86896,map__86896__$1,m,worker_id,workplace_id,datetime))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__86912 = work_type;
if(cljs.core._EQ_.call(null,null,G__86912)){
return null;
} else {
if(cljs.core._EQ_.call(null,"seller",G__86912)){
return seller_background;
} else {
if(cljs.core._EQ_.call(null,"butcher",G__86912)){
return butcher_background;
} else {
if(cljs.core._EQ_.call(null,"vacation",G__86912)){
return vacation_background;
} else {
if(cljs.core._EQ_.call(null,"holiday",G__86912)){
return holiday_background;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__86912)].join('')));

}
}
}
}
}
})()], null)], null),null], null);
});
;})(work,worker,seller_background,butcher_background,vacation_background,holiday_background,map__86896,map__86896__$1,m,worker_id,workplace_id,datetime))
});
eckersdorf.work_schedule.ui.work_schedule_view = (function eckersdorf$work_schedule$ui$work_schedule_view(){
var days = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","days","work-schedule/days",550342111)], null));
var workplace_id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962)], null));
var workers = reagent.ratom.make_reaction.call(null,((function (days,workplace_id){
return (function (){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","by-workplace-id","workers/by-workplace-id",1364741936),cljs.core.deref.call(null,workplace_id)], null)));
});})(days,workplace_id))
);
return ((function (days,workplace_id,workers){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_workplace], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.select_month], null)], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949(s__86950){
return (new cljs.core.LazySeq(null,((function (days,workplace_id,workers){
return (function (){
var s__86950__$1 = s__86950;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__86950__$1);
if(temp__5290__auto__){
var s__86950__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86950__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__86950__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__86952 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__86951 = (0);
while(true){
if((i__86951 < size__31131__auto__)){
var date = cljs.core._nth.call(null,c__31130__auto__,i__86951);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
cljs.core.chunk_append.call(null,b__86952,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dingding","dingding",903973456),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__86951,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),cljs_time.coerce.to_string.call(null,date)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),cljs_time.coerce.to_string.call(null,date)], null));
}
});})(i__86951,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"12%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),null], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (i__86951,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86953(s__86954){
return (new cljs.core.LazySeq(null,((function (i__86951,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var s__86954__$1 = s__86954;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__86954__$1);
if(temp__5290__auto____$1){
var s__86954__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86954__$2)){
var c__31130__auto____$1 = cljs.core.chunk_first.call(null,s__86954__$2);
var size__31131__auto____$1 = cljs.core.count.call(null,c__31130__auto____$1);
var b__86956 = cljs.core.chunk_buffer.call(null,size__31131__auto____$1);
if((function (){var i__86955 = (0);
while(true){
if((i__86955 < size__31131__auto____$1)){
var hour = cljs.core._nth.call(null,c__31130__auto____$1,i__86955);
cljs.core.chunk_append.call(null,b__86956,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"4%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__86993 = (i__86955 + (1));
i__86955 = G__86993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86956),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86953.call(null,cljs.core.chunk_rest.call(null,s__86954__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86956),null);
}
} else {
var hour = cljs.core.first.call(null,s__86954__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"4%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86953.call(null,cljs.core.rest.call(null,s__86954__$2)));
}
} else {
return null;
}
break;
}
});})(i__86951,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,null,null));
});})(i__86951,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (i__86951,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86957(s__86958){
return (new cljs.core.LazySeq(null,((function (i__86951,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var s__86958__$1 = s__86958;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__86958__$1);
if(temp__5290__auto____$1){
var s__86958__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86958__$2)){
var c__31130__auto____$1 = cljs.core.chunk_first.call(null,s__86958__$2);
var size__31131__auto____$1 = cljs.core.count.call(null,c__31130__auto____$1);
var b__86960 = cljs.core.chunk_buffer.call(null,size__31131__auto____$1);
if((function (){var i__86959 = (0);
while(true){
if((i__86959 < size__31131__auto____$1)){
var map__86961 = cljs.core._nth.call(null,c__31130__auto____$1,i__86959);
var map__86961__$1 = ((((!((map__86961 == null)))?((((map__86961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86961):map__86961);
var object_id = cljs.core.get.call(null,map__86961__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__86961__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__86961__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__86961__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__86960,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"12%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__86959,i__86951,map__86961,map__86961__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__86960,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(i__86959,i__86951,map__86961,map__86961__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__86960,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__86959,i__86951,map__86961,map__86961__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__86960,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(i__86959,i__86951,map__86961,map__86961__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__86960,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (i__86959,i__86951,map__86961,map__86961__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__86960,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86957_$_iter__86963(s__86964){
return (new cljs.core.LazySeq(null,((function (i__86959,i__86951,map__86961,map__86961__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__86960,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var s__86964__$1 = s__86964;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__86964__$1);
if(temp__5290__auto____$2){
var s__86964__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86964__$2)){
var c__31130__auto____$2 = cljs.core.chunk_first.call(null,s__86964__$2);
var size__31131__auto____$2 = cljs.core.count.call(null,c__31130__auto____$2);
var b__86966 = cljs.core.chunk_buffer.call(null,size__31131__auto____$2);
if((function (){var i__86965 = (0);
while(true){
if((i__86965 < size__31131__auto____$2)){
var hour = cljs.core._nth.call(null,c__31130__auto____$2,i__86965);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
cljs.core.chunk_append.call(null,b__86966,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__86994 = (i__86965 + (1));
i__86965 = G__86994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86966),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86957_$_iter__86963.call(null,cljs.core.chunk_rest.call(null,s__86964__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86966),null);
}
} else {
var hour = cljs.core.first.call(null,s__86964__$2);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86957_$_iter__86963.call(null,cljs.core.rest.call(null,s__86964__$2)));
}
} else {
return null;
}
break;
}
});})(i__86959,i__86951,map__86961,map__86961__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__86960,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,null,null));
});})(i__86959,i__86951,map__86961,map__86961__$1,object_id,first_name,last_name,working_hours,c__31130__auto____$1,size__31131__auto____$1,b__86960,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__86995 = (i__86959 + (1));
i__86959 = G__86995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86960),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86957.call(null,cljs.core.chunk_rest.call(null,s__86958__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86960),null);
}
} else {
var map__86967 = cljs.core.first.call(null,s__86958__$2);
var map__86967__$1 = ((((!((map__86967 == null)))?((((map__86967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86967):map__86967);
var object_id = cljs.core.get.call(null,map__86967__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__86967__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__86967__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__86967__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"12%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__86951,map__86967,map__86967__$1,object_id,first_name,last_name,working_hours,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(i__86951,map__86967,map__86967__$1,object_id,first_name,last_name,working_hours,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__86951,map__86967,map__86967__$1,object_id,first_name,last_name,working_hours,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(i__86951,map__86967,map__86967__$1,object_id,first_name,last_name,working_hours,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (i__86951,map__86967,map__86967__$1,object_id,first_name,last_name,working_hours,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86957_$_iter__86969(s__86970){
return (new cljs.core.LazySeq(null,((function (i__86951,map__86967,map__86967__$1,object_id,first_name,last_name,working_hours,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var s__86970__$1 = s__86970;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__86970__$1);
if(temp__5290__auto____$2){
var s__86970__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86970__$2)){
var c__31130__auto____$1 = cljs.core.chunk_first.call(null,s__86970__$2);
var size__31131__auto____$1 = cljs.core.count.call(null,c__31130__auto____$1);
var b__86972 = cljs.core.chunk_buffer.call(null,size__31131__auto____$1);
if((function (){var i__86971 = (0);
while(true){
if((i__86971 < size__31131__auto____$1)){
var hour = cljs.core._nth.call(null,c__31130__auto____$1,i__86971);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
cljs.core.chunk_append.call(null,b__86972,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__86996 = (i__86971 + (1));
i__86971 = G__86996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86972),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86957_$_iter__86969.call(null,cljs.core.chunk_rest.call(null,s__86970__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86972),null);
}
} else {
var hour = cljs.core.first.call(null,s__86970__$2);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86957_$_iter__86969.call(null,cljs.core.rest.call(null,s__86970__$2)));
}
} else {
return null;
}
break;
}
});})(i__86951,map__86967,map__86967__$1,object_id,first_name,last_name,working_hours,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,null,null));
});})(i__86951,map__86967,map__86967__$1,object_id,first_name,last_name,working_hours,s__86958__$2,temp__5290__auto____$1,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86957.call(null,cljs.core.rest.call(null,s__86958__$2)));
}
} else {
return null;
}
break;
}
});})(i__86951,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,null,null));
});})(i__86951,weekday,weekday_name,date,c__31130__auto__,size__31131__auto__,b__86952,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)));

var G__86997 = (i__86951 + (1));
i__86951 = G__86997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86952),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949.call(null,cljs.core.chunk_rest.call(null,s__86950__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86952),null);
}
} else {
var date = cljs.core.first.call(null,s__86950__$2);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,eckersdorf.work_schedule.ui.long_weekdays,weekday);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.vbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dingding","dingding",903973456),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.not.call(null,cljs.core.deref.call(null,holiday_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),cljs_time.coerce.to_string.call(null,date)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),cljs.core.deref.call(null,workplace_id),cljs.core.deref.call(null,workers),cljs_time.coerce.to_string.call(null,date)], null));
}
});})(weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"12%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),null], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86973(s__86974){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var s__86974__$1 = s__86974;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__86974__$1);
if(temp__5290__auto____$1){
var s__86974__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86974__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__86974__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__86976 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__86975 = (0);
while(true){
if((i__86975 < size__31131__auto__)){
var hour = cljs.core._nth.call(null,c__31130__auto__,i__86975);
cljs.core.chunk_append.call(null,b__86976,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"4%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__86998 = (i__86975 + (1));
i__86975 = G__86998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86976),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86973.call(null,cljs.core.chunk_rest.call(null,s__86974__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86976),null);
}
} else {
var hour = cljs.core.first.call(null,s__86974__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"4%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86973.call(null,cljs.core.rest.call(null,s__86974__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86977(s__86978){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var s__86978__$1 = s__86978;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__86978__$1);
if(temp__5290__auto____$1){
var s__86978__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86978__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__86978__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__86980 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__86979 = (0);
while(true){
if((i__86979 < size__31131__auto__)){
var map__86981 = cljs.core._nth.call(null,c__31130__auto__,i__86979);
var map__86981__$1 = ((((!((map__86981 == null)))?((((map__86981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86981):map__86981);
var object_id = cljs.core.get.call(null,map__86981__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__86981__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__86981__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__86981__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
cljs.core.chunk_append.call(null,b__86980,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"12%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__86979,map__86981,map__86981__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__86980,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(i__86979,map__86981,map__86981__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__86980,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__86979,map__86981,map__86981__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__86980,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(i__86979,map__86981,map__86981__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__86980,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (i__86979,map__86981,map__86981__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__86980,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86977_$_iter__86983(s__86984){
return (new cljs.core.LazySeq(null,((function (i__86979,map__86981,map__86981__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__86980,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var s__86984__$1 = s__86984;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__86984__$1);
if(temp__5290__auto____$2){
var s__86984__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86984__$2)){
var c__31130__auto____$1 = cljs.core.chunk_first.call(null,s__86984__$2);
var size__31131__auto____$1 = cljs.core.count.call(null,c__31130__auto____$1);
var b__86986 = cljs.core.chunk_buffer.call(null,size__31131__auto____$1);
if((function (){var i__86985 = (0);
while(true){
if((i__86985 < size__31131__auto____$1)){
var hour = cljs.core._nth.call(null,c__31130__auto____$1,i__86985);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
cljs.core.chunk_append.call(null,b__86986,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__86999 = (i__86985 + (1));
i__86985 = G__86999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86986),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86977_$_iter__86983.call(null,cljs.core.chunk_rest.call(null,s__86984__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86986),null);
}
} else {
var hour = cljs.core.first.call(null,s__86984__$2);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86977_$_iter__86983.call(null,cljs.core.rest.call(null,s__86984__$2)));
}
} else {
return null;
}
break;
}
});})(i__86979,map__86981,map__86981__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__86980,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,null,null));
});})(i__86979,map__86981,map__86981__$1,object_id,first_name,last_name,working_hours,c__31130__auto__,size__31131__auto__,b__86980,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)));

var G__87000 = (i__86979 + (1));
i__86979 = G__87000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86980),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86977.call(null,cljs.core.chunk_rest.call(null,s__86978__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86980),null);
}
} else {
var map__86987 = cljs.core.first.call(null,s__86978__$2);
var map__86987__$1 = ((((!((map__86987 == null)))?((((map__86987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86987):map__86987);
var object_id = cljs.core.get.call(null,map__86987__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__86987__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__86987__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__86987__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"12%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d9d9d9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__86987,map__86987__$1,object_id,first_name,last_name,working_hours,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(map__86987,map__86987__$1,object_id,first_name,last_name,working_hours,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__86987,map__86987__$1,object_id,first_name,last_name,working_hours,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var holiday_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,holiday_QMARK_))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,date)], null)], null));
}
});})(map__86987,map__86987__$1,object_id,first_name,last_name,working_hours,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
], null)], null)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (map__86987,map__86987__$1,object_id,first_name,last_name,working_hours,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86977_$_iter__86989(s__86990){
return (new cljs.core.LazySeq(null,((function (map__86987,map__86987__$1,object_id,first_name,last_name,working_hours,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers){
return (function (){
var s__86990__$1 = s__86990;
while(true){
var temp__5290__auto____$2 = cljs.core.seq.call(null,s__86990__$1);
if(temp__5290__auto____$2){
var s__86990__$2 = temp__5290__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86990__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__86990__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__86992 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__86991 = (0);
while(true){
if((i__86991 < size__31131__auto__)){
var hour = cljs.core._nth.call(null,c__31130__auto__,i__86991);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
cljs.core.chunk_append.call(null,b__86992,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)));

var G__87001 = (i__86991 + (1));
i__86991 = G__87001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86992),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86977_$_iter__86989.call(null,cljs.core.chunk_rest.call(null,s__86990__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86992),null);
}
} else {
var hour = cljs.core.first.call(null,s__86990__$2);
var datetime = cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,hour)));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.work_schedule.ui.work_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),cljs.core.deref.call(null,workplace_id),new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86977_$_iter__86989.call(null,cljs.core.rest.call(null,s__86990__$2)));
}
} else {
return null;
}
break;
}
});})(map__86987,map__86987__$1,object_id,first_name,last_name,working_hours,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,null,null));
});})(map__86987,map__86987__$1,object_id,first_name,last_name,working_hours,s__86978__$2,temp__5290__auto____$1,weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.range.call(null,(6),(21)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),object_id], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949_$_iter__86977.call(null,cljs.core.rest.call(null,s__86978__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
,null,null));
});})(weekday,weekday_name,date,s__86950__$2,temp__5290__auto__,days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)),eckersdorf$work_schedule$ui$work_schedule_view_$_iter__86949.call(null,cljs.core.rest.call(null,s__86950__$2)));
}
} else {
return null;
}
break;
}
});})(days,workplace_id,workers))
,null,null));
});})(days,workplace_id,workers))
;
return iter__31132__auto__.call(null,cljs.core.deref.call(null,days));
})())], null);
});
;})(days,workplace_id,workers))
});

//# sourceMappingURL=ui.js.map?rel=1508972779667
