// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.work_schedule.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs_time.core');
goog.require('cljs_time.periodic');
goog.require('taoensso.encore');
goog.require('ajax.core');
goog.require('eckersdorf.db.core');
goog.require('cljs_time.coerce');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","show-dialog","work-schedule/show-dialog",1852194113),(function (db,p__41634){
var vec__41635 = p__41634;
var _ = cljs.core.nth.call(null,vec__41635,(0),null);
var type = cljs.core.nth.call(null,vec__41635,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","hide-dialog","work-schedule/hide-dialog",-1968439396),(function (db,p__41638){
var vec__41639 = p__41638;
var _ = cljs.core.nth.call(null,vec__41639,(0),null);
var type = cljs.core.nth.call(null,vec__41639,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","set-workplace","work-schedule/set-workplace",-600467261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (db,p__41642){
var vec__41643 = p__41642;
var _ = cljs.core.nth.call(null,vec__41643,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__41643,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962),workplace_id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","set-date","work-schedule/set-date",-1172573652),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (db,p__41646){
var vec__41647 = p__41646;
var _ = cljs.core.nth.call(null,vec__41647,(0),null);
var date = cljs.core.nth.call(null,vec__41647,(1),null);
var days = cljs_time.periodic.periodic_seq.call(null,cljs_time.core.first_day_of_the_month.call(null,date),cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,date),cljs_time.core.days.call(null,(1))),cljs_time.core.days.call(null,(1)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118),date,new cljs.core.Keyword("work-schedule","days","work-schedule/days",550342111),days);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","edited?","work-schedule/edited?",-752047662),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","unset-edited","work-schedule/unset-edited",-673180065),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","edited?","work-schedule/edited?",-752047662),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),(function (db,p__41651){
var vec__41652 = p__41651;
var _ = cljs.core.nth.call(null,vec__41652,(0),null);
var map__41655 = cljs.core.nth.call(null,vec__41652,(1),null);
var map__41655__$1 = ((((!((map__41655 == null)))?((((map__41655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41655):map__41655);
var worker_id = cljs.core.get.call(null,map__41655__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var datetime = cljs.core.get.call(null,map__41655__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var begin_time = cljs_time.core.first_day_of_the_month.call(null,datetime);
var end_time = cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,begin_time),cljs_time.core.days.call(null,(1)));
var hours_worked = cljs.core.count.call(null,cljs.core.filter.call(null,((function (begin_time,end_time,vec__41652,_,map__41655,map__41655__$1,worker_id,datetime){
return (function (p1__41650_SHARP_){
var and__30227__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(p1__41650_SHARP_));
if(and__30227__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__41650_SHARP_));
} else {
return and__30227__auto__;
}
});})(begin_time,end_time,vec__41652,_,map__41655,map__41655__$1,worker_id,datetime))
,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"hours-worked-in-month","hours-worked-in-month",-1178358959)], null),hours_worked);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),(function (p__41657,p__41658){
var map__41659 = p__41657;
var map__41659__$1 = ((((!((map__41659 == null)))?((((map__41659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41659):map__41659);
var db = cljs.core.get.call(null,map__41659__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41660 = p__41658;
var _ = cljs.core.nth.call(null,vec__41660,(0),null);
var work = cljs.core.nth.call(null,vec__41660,(1),null);
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.distinct.call(null,cljs.core.conj.call(null,schedule,work))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","schedule-multiple-work","work-schedule/schedule-multiple-work",-1082639016),(function (p__41664,p__41665){
var map__41666 = p__41664;
var map__41666__$1 = ((((!((map__41666 == null)))?((((map__41666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41666):map__41666);
var db = cljs.core.get.call(null,map__41666__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41667 = p__41665;
var _ = cljs.core.nth.call(null,vec__41667,(0),null);
var works = cljs.core.nth.call(null,vec__41667,(1),null);
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.distinct.call(null,cljs.core.into.call(null,schedule,works))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),(function (p__41671,p__41672){
var map__41673 = p__41671;
var map__41673__$1 = ((((!((map__41673 == null)))?((((map__41673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41673):map__41673);
var db = cljs.core.get.call(null,map__41673__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41674 = p__41672;
var _ = cljs.core.nth.call(null,vec__41674,(0),null);
var map__41677 = cljs.core.nth.call(null,vec__41674,(1),null);
var map__41677__$1 = ((((!((map__41677 == null)))?((((map__41677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41677):map__41677);
var work = map__41677__$1;
var worker_id = cljs.core.get.call(null,map__41677__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__41677__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__41677__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.remove.call(null,((function (schedule,map__41673,map__41673__$1,db,vec__41674,_,map__41677,map__41677__$1,work,worker_id,workplace_id,datetime){
return (function (work__$1){
var and__30227__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(work__$1));
if(and__30227__auto__){
var and__30227__auto____$1 = cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(work__$1));
if(and__30227__auto____$1){
return cljs_time.core.equal_QMARK_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(work__$1));
} else {
return and__30227__auto____$1;
}
} else {
return and__30227__auto__;
}
});})(schedule,map__41673,map__41673__$1,db,vec__41674,_,map__41677,map__41677__$1,work,worker_id,workplace_id,datetime))
,schedule))));
})(),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),(function (p__41680,p__41681){
var map__41682 = p__41680;
var map__41682__$1 = ((((!((map__41682 == null)))?((((map__41682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41682):map__41682);
var db = cljs.core.get.call(null,map__41682__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41683 = p__41681;
var _ = cljs.core.nth.call(null,vec__41683,(0),null);
var works = cljs.core.nth.call(null,vec__41683,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.remove.call(null,((function (schedule,map__41682,map__41682__$1,db,vec__41683,_,works){
return (function (work){
return cljs.core.some.call(null,((function (schedule,map__41682,map__41682__$1,db,vec__41683,_,works){
return (function (p__41687){
var map__41688 = p__41687;
var map__41688__$1 = ((((!((map__41688 == null)))?((((map__41688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41688):map__41688);
var worker_id = cljs.core.get.call(null,map__41688__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__41688__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__41688__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var and__30227__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(work));
if(and__30227__auto__){
var and__30227__auto____$1 = cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(work));
if(and__30227__auto____$1){
return cljs_time.core.equal_QMARK_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(work));
} else {
return and__30227__auto____$1;
}
} else {
return and__30227__auto__;
}
});})(schedule,map__41682,map__41682__$1,db,vec__41683,_,works))
,works);
});})(schedule,map__41682,map__41682__$1,db,vec__41683,_,works))
,schedule))));
})(),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),(function (db,p__41690){
var vec__41691 = p__41690;
var _ = cljs.core.nth.call(null,vec__41691,(0),null);
var work = cljs.core.nth.call(null,vec__41691,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),work], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),(function (db,p__41694){
var vec__41695 = p__41694;
var _ = cljs.core.nth.call(null,vec__41695,(0),null);
var works = cljs.core.nth.call(null,vec__41695,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),works], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-multiple-work","work-schedule/schedule-multiple-work",-1082639016),works], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),(function (db,p__41698){
var vec__41699 = p__41698;
var _ = cljs.core.nth.call(null,vec__41699,(0),null);
var map__41702 = cljs.core.nth.call(null,vec__41699,(1),null);
var map__41702__$1 = ((((!((map__41702 == null)))?((((map__41702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41702):map__41702);
var work = map__41702__$1;
var worker_id = cljs.core.get.call(null,map__41702__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__41702__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__41702__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = datetime;
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.mapv.call(null,((function (datetime__$1,zero_time,vec__41699,_,map__41702,map__41702__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2)], null);
});})(datetime__$1,zero_time,vec__41699,_,map__41702,map__41702__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.conj.call(null,works,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),(function (db,p__41704){
var vec__41705 = p__41704;
var _ = cljs.core.nth.call(null,vec__41705,(0),null);
var map__41708 = cljs.core.nth.call(null,vec__41705,(1),null);
var map__41708__$1 = ((((!((map__41708 == null)))?((((map__41708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41708):map__41708);
var work = map__41708__$1;
var worker_id = cljs.core.get.call(null,map__41708__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__41708__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__41708__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = datetime;
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.mapv.call(null,((function (datetime__$1,zero_time,vec__41705,_,map__41708,map__41708__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"vacation")], null);
});})(datetime__$1,zero_time,vec__41705,_,map__41708,map__41708__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.conj.call(null,works,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),(function (db,p__41710){
var vec__41711 = p__41710;
var _ = cljs.core.nth.call(null,vec__41711,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__41711,(1),null);
var workers = cljs.core.nth.call(null,vec__41711,(2),null);
var datetime = cljs.core.nth.call(null,vec__41711,(3),null);
var datetime__$1 = datetime;
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.doall.call(null,(function (){var iter__31121__auto__ = ((function (datetime__$1,zero_time,vec__41711,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__41714(s__41715){
return (new cljs.core.LazySeq(null,((function (datetime__$1,zero_time,vec__41711,_,workplace_id,workers,datetime){
return (function (){
var s__41715__$1 = s__41715;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__41715__$1);
if(temp__5290__auto__){
var xs__5843__auto__ = temp__5290__auto__;
var map__41720 = cljs.core.first.call(null,xs__5843__auto__);
var map__41720__$1 = ((((!((map__41720 == null)))?((((map__41720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41720):map__41720);
var object_id = cljs.core.get.call(null,map__41720__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__41720__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__41720__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__41720__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
var iterys__31117__auto__ = ((function (s__41715__$1,map__41720,map__41720__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__41711,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__41714_$_iter__41716(s__41717){
return (new cljs.core.LazySeq(null,((function (s__41715__$1,map__41720,map__41720__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__41711,_,workplace_id,workers,datetime){
return (function (){
var s__41717__$1 = s__41717;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__41717__$1);
if(temp__5290__auto____$1){
var s__41717__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41717__$2)){
var c__31119__auto__ = cljs.core.chunk_first.call(null,s__41717__$2);
var size__31120__auto__ = cljs.core.count.call(null,c__31119__auto__);
var b__41719 = cljs.core.chunk_buffer.call(null,size__31120__auto__);
if((function (){var i__41718 = (0);
while(true){
if((i__41718 < size__31120__auto__)){
var datetime__$2 = cljs.core._nth.call(null,c__31119__auto__,i__41718);
cljs.core.chunk_append.call(null,b__41719,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"holiday"], null)], null));

var G__41722 = (i__41718 + (1));
i__41718 = G__41722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41719),eckersdorf$work_schedule$events$iter__41714_$_iter__41716.call(null,cljs.core.chunk_rest.call(null,s__41717__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41719),null);
}
} else {
var datetime__$2 = cljs.core.first.call(null,s__41717__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"holiday"], null)], null),eckersdorf$work_schedule$events$iter__41714_$_iter__41716.call(null,cljs.core.rest.call(null,s__41717__$2)));
}
} else {
return null;
}
break;
}
});})(s__41715__$1,map__41720,map__41720__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__41711,_,workplace_id,workers,datetime))
,null,null));
});})(s__41715__$1,map__41720,map__41720__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__41711,_,workplace_id,workers,datetime))
;
var fs__31118__auto__ = cljs.core.seq.call(null,iterys__31117__auto__.call(null,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
if(fs__31118__auto__){
return cljs.core.concat.call(null,fs__31118__auto__,eckersdorf$work_schedule$events$iter__41714.call(null,cljs.core.rest.call(null,s__41715__$1)));
} else {
var G__41723 = cljs.core.rest.call(null,s__41715__$1);
s__41715__$1 = G__41723;
continue;
}
} else {
return null;
}
break;
}
});})(datetime__$1,zero_time,vec__41711,_,workplace_id,workers,datetime))
,null,null));
});})(datetime__$1,zero_time,vec__41711,_,workplace_id,workers,datetime))
;
return iter__31121__auto__.call(null,workers);
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.conj.call(null,works,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),(function (db,p__41724){
var vec__41725 = p__41724;
var _ = cljs.core.nth.call(null,vec__41725,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__41725,(1),null);
var workers = cljs.core.nth.call(null,vec__41725,(2),null);
var datetime = cljs.core.nth.call(null,vec__41725,(3),null);
var datetime__$1 = datetime;
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.doall.call(null,(function (){var iter__31121__auto__ = ((function (datetime__$1,zero_time,vec__41725,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__41728(s__41729){
return (new cljs.core.LazySeq(null,((function (datetime__$1,zero_time,vec__41725,_,workplace_id,workers,datetime){
return (function (){
var s__41729__$1 = s__41729;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__41729__$1);
if(temp__5290__auto__){
var xs__5843__auto__ = temp__5290__auto__;
var map__41734 = cljs.core.first.call(null,xs__5843__auto__);
var map__41734__$1 = ((((!((map__41734 == null)))?((((map__41734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41734):map__41734);
var object_id = cljs.core.get.call(null,map__41734__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__41734__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__41734__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__41734__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
var iterys__31117__auto__ = ((function (s__41729__$1,map__41734,map__41734__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__41725,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__41728_$_iter__41730(s__41731){
return (new cljs.core.LazySeq(null,((function (s__41729__$1,map__41734,map__41734__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__41725,_,workplace_id,workers,datetime){
return (function (){
var s__41731__$1 = s__41731;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__41731__$1);
if(temp__5290__auto____$1){
var s__41731__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41731__$2)){
var c__31119__auto__ = cljs.core.chunk_first.call(null,s__41731__$2);
var size__31120__auto__ = cljs.core.count.call(null,c__31119__auto__);
var b__41733 = cljs.core.chunk_buffer.call(null,size__31120__auto__);
if((function (){var i__41732 = (0);
while(true){
if((i__41732 < size__31120__auto__)){
var datetime__$2 = cljs.core._nth.call(null,c__31119__auto__,i__41732);
cljs.core.chunk_append.call(null,b__41733,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2], null)], null));

var G__41736 = (i__41732 + (1));
i__41732 = G__41736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41733),eckersdorf$work_schedule$events$iter__41728_$_iter__41730.call(null,cljs.core.chunk_rest.call(null,s__41731__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41733),null);
}
} else {
var datetime__$2 = cljs.core.first.call(null,s__41731__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2], null)], null),eckersdorf$work_schedule$events$iter__41728_$_iter__41730.call(null,cljs.core.rest.call(null,s__41731__$2)));
}
} else {
return null;
}
break;
}
});})(s__41729__$1,map__41734,map__41734__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__41725,_,workplace_id,workers,datetime))
,null,null));
});})(s__41729__$1,map__41734,map__41734__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__41725,_,workplace_id,workers,datetime))
;
var fs__31118__auto__ = cljs.core.seq.call(null,iterys__31117__auto__.call(null,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
if(fs__31118__auto__){
return cljs.core.concat.call(null,fs__31118__auto__,eckersdorf$work_schedule$events$iter__41728.call(null,cljs.core.rest.call(null,s__41729__$1)));
} else {
var G__41737 = cljs.core.rest.call(null,s__41729__$1);
s__41729__$1 = G__41737;
continue;
}
} else {
return null;
}
break;
}
});})(datetime__$1,zero_time,vec__41725,_,workplace_id,workers,datetime))
,null,null));
});})(datetime__$1,zero_time,vec__41725,_,workplace_id,workers,datetime))
;
return iter__31121__auto__.call(null,workers);
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.conj.call(null,works,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","clear","work-schedule/clear",209389428),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","request-work-schedule","work-schedule/request-work-schedule",1636514619),(function (p__41738,_){
var map__41739 = p__41738;
var map__41739__$1 = ((((!((map__41739 == null)))?((((map__41739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41739):map__41739);
var db = cljs.core.get.call(null,map__41739__$1,new cljs.core.Keyword(null,"db","db",993250759));
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
cljs.core.println.call(null,schedule);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),schedule,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","request-work-schedule-success","work-schedule/request-work-schedule-success",-52049297)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","request-work-schedule-failure","work-schedule/request-work-schedule-failure",-1804738097)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","request-work-schedule-success","work-schedule/request-work-schedule-success",-52049297),(function (p__41741,p__41742){
var map__41743 = p__41741;
var map__41743__$1 = ((((!((map__41743 == null)))?((((map__41743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41743):map__41743);
var db = cljs.core.get.call(null,map__41743__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41744 = p__41742;
var _ = cljs.core.nth.call(null,vec__41744,(0),null);
var map__41747 = cljs.core.nth.call(null,vec__41744,(1),null);
var map__41747__$1 = ((((!((map__41747 == null)))?((((map__41747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41747):map__41747);
var data = cljs.core.get.call(null,map__41747__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie dodano pracownika",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","request-work-schedule-failure","work-schedule/request-work-schedule-failure",-1804738097),(function (p__41750,p__41751){
var map__41752 = p__41750;
var map__41752__$1 = ((((!((map__41752 == null)))?((((map__41752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41752):map__41752);
var db = cljs.core.get.call(null,map__41752__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41753 = p__41751;
var _ = cljs.core.nth.call(null,vec__41753,(0),null);
var map__41756 = cljs.core.nth.call(null,vec__41753,(1),null);
var map__41756__$1 = ((((!((map__41756 == null)))?((((map__41756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41756):map__41756);
var response = map__41756__$1;
var status_text = cljs.core.get.call(null,map__41756__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy dodawaniu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","sync","work-schedule/sync",1459023889),(function (p__41759,_){
var map__41760 = p__41759;
var map__41760__$1 = ((((!((map__41760 == null)))?((((map__41760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41760):map__41760);
var db = cljs.core.get.call(null,map__41760__$1,new cljs.core.Keyword(null,"db","db",993250759));
cljs.core.println.call(null,"sex");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","request-work-schedule","work-schedule/request-work-schedule",1636514619)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1509146503877
