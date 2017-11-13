// Compiled by ClojureScript 1.9.946 {}
goog.provide('eckersdorf.work_schedule.utils');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.periodic');
eckersdorf.work_schedule.utils.remove_work = (function eckersdorf$work_schedule$utils$remove_work(db,p__44302){
var map__44303 = p__44302;
var map__44303__$1 = ((((!((map__44303 == null)))?((((map__44303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44303):map__44303);
var worker_id = cljs.core.get.call(null,map__44303__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var datetime = cljs.core.get.call(null,map__44303__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var works = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null),cljs.core.remove.call(null,((function (works,map__44303,map__44303__$1,worker_id,datetime){
return (function (work){
return cljs_time.core.equal_QMARK_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(work));
});})(works,map__44303,map__44303__$1,worker_id,datetime))
,works));
});
eckersdorf.work_schedule.utils.remove_multiple_work = (function eckersdorf$work_schedule$utils$remove_multiple_work(db,new_works){
var worker_id = new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_works));
var works = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null),cljs.core.remove.call(null,((function (worker_id,works){
return (function (work){
return cljs.core.some.call(null,((function (worker_id,works){
return (function (p__44305){
var map__44306 = p__44305;
var map__44306__$1 = ((((!((map__44306 == null)))?((((map__44306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44306):map__44306);
var datetime = cljs.core.get.call(null,map__44306__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.equal_QMARK_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(work));
});})(worker_id,works))
,new_works);
});})(worker_id,works))
,works));
});
eckersdorf.work_schedule.utils.worker_working_hours = (function eckersdorf$work_schedule$utils$worker_working_hours(works,day){
return cljs.core.juxt.call(null,(function (p1__44310_SHARP_){
return (function (datetime){
if(cljs.core.truth_(datetime)){
return cljs_time.core.hour.call(null,datetime);
} else {
return null;
}
}).call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__44310_SHARP_)));
}),(function (p1__44311_SHARP_){
return (function (datetime){
if(cljs.core.truth_(datetime)){
return (cljs_time.core.hour.call(null,datetime) + (1));
} else {
return null;
}
}).call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,p1__44311_SHARP_)));
}),(function (p1__44312_SHARP_){
return new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__44312_SHARP_));
}),(function (p1__44313_SHARP_){
return (function (datetime){
if(cljs.core.truth_(datetime)){
return cljs_time.core.day_of_week.call(null,datetime);
} else {
return null;
}
}).call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__44313_SHARP_)));
})).call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),(function (d1,d2){
return cljs_time.core.before_QMARK_.call(null,d1,d2);
}),cljs.core.remove.call(null,(function (p1__44309_SHARP_){
return (cljs.core.empty_QMARK_.call(null,p1__44309_SHARP_)) || ((p1__44309_SHARP_ == null));
}),cljs.core.filter.call(null,(function (p1__44308_SHARP_){
return cljs.core._EQ_.call(null,day,cljs_time.core.day.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__44308_SHARP_)));
}),works))));
});

//# sourceMappingURL=utils.js.map?rel=1510609299284
