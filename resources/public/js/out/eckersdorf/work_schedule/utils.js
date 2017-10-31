// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.work_schedule.utils');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.periodic');
eckersdorf.work_schedule.utils.remove_work = (function eckersdorf$work_schedule$utils$remove_work(db,p__43799){
var map__43800 = p__43799;
var map__43800__$1 = ((((!((map__43800 == null)))?((((map__43800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43800):map__43800);
var worker_id = cljs.core.get.call(null,map__43800__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__43800__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__43800__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.remove.call(null,((function (schedule,map__43800,map__43800__$1,worker_id,workplace_id,datetime){
return (function (work){
var and__30237__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(work));
if(and__30237__auto__){
var and__30237__auto____$1 = cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(work));
if(and__30237__auto____$1){
return cljs_time.core.equal_QMARK_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(work));
} else {
return and__30237__auto____$1;
}
} else {
return and__30237__auto__;
}
});})(schedule,map__43800,map__43800__$1,worker_id,workplace_id,datetime))
,schedule))));
});
eckersdorf.work_schedule.utils.remove_multiple_work = (function eckersdorf$work_schedule$utils$remove_multiple_work(db,works){
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.remove.call(null,((function (schedule){
return (function (work){
return cljs.core.some.call(null,((function (schedule){
return (function (p__43802){
var map__43803 = p__43802;
var map__43803__$1 = ((((!((map__43803 == null)))?((((map__43803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43803):map__43803);
var worker_id = cljs.core.get.call(null,map__43803__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__43803__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__43803__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var and__30237__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(work));
if(and__30237__auto__){
var and__30237__auto____$1 = cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(work));
if(and__30237__auto____$1){
return cljs_time.core.equal_QMARK_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(work));
} else {
return and__30237__auto____$1;
}
} else {
return and__30237__auto__;
}
});})(schedule))
,works);
});})(schedule))
,schedule))));
});

//# sourceMappingURL=utils.js.map?rel=1509397947131
