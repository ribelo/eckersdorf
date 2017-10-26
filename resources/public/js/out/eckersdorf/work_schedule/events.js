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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","show-dialog","work-schedule/show-dialog",1852194113),(function (db,p__99608){
var vec__99609 = p__99608;
var _ = cljs.core.nth.call(null,vec__99609,(0),null);
var type = cljs.core.nth.call(null,vec__99609,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","hide-dialog","work-schedule/hide-dialog",-1968439396),(function (db,p__99612){
var vec__99613 = p__99612;
var _ = cljs.core.nth.call(null,vec__99613,(0),null);
var type = cljs.core.nth.call(null,vec__99613,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","set-workplace","work-schedule/set-workplace",-600467261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (db,p__99616){
var vec__99617 = p__99616;
var _ = cljs.core.nth.call(null,vec__99617,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__99617,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962),workplace_id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","set-date","work-schedule/set-date",-1172573652),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (db,p__99620){
var vec__99621 = p__99620;
var _ = cljs.core.nth.call(null,vec__99621,(0),null);
var date = cljs.core.nth.call(null,vec__99621,(1),null);
var days = cljs_time.periodic.periodic_seq.call(null,cljs_time.core.first_day_of_the_month.call(null,date),cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,date),cljs_time.core.days.call(null,(1))),cljs_time.core.days.call(null,(1)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118),date,new cljs.core.Keyword("work-schedule","days","work-schedule/days",550342111),days);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),(function (db,p__99625){
var vec__99626 = p__99625;
var _ = cljs.core.nth.call(null,vec__99626,(0),null);
var map__99629 = cljs.core.nth.call(null,vec__99626,(1),null);
var map__99629__$1 = ((((!((map__99629 == null)))?((((map__99629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99629):map__99629);
var worker_id = cljs.core.get.call(null,map__99629__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var datetime = cljs.core.get.call(null,map__99629__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var begin_time = cljs_time.core.first_day_of_the_month.call(null,cljs_time.coerce.from_string.call(null,datetime));
var end_time = cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,begin_time),cljs_time.core.days.call(null,(1)));
var hours_worked = cljs.core.count.call(null,cljs.core.filter.call(null,((function (begin_time,end_time,vec__99626,_,map__99629,map__99629__$1,worker_id,datetime){
return (function (p1__99624_SHARP_){
var and__30237__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(p1__99624_SHARP_));
if(and__30237__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__99624_SHARP_));
} else {
return and__30237__auto__;
}
});})(begin_time,end_time,vec__99626,_,map__99629,map__99629__$1,worker_id,datetime))
,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"hours-worked-in-month","hours-worked-in-month",-1178358959)], null),hours_worked);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),(function (p__99631,p__99632){
var map__99633 = p__99631;
var map__99633__$1 = ((((!((map__99633 == null)))?((((map__99633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99633):map__99633);
var db = cljs.core.get.call(null,map__99633__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__99634 = p__99632;
var _ = cljs.core.nth.call(null,vec__99634,(0),null);
var work = cljs.core.nth.call(null,vec__99634,(1),null);
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.distinct.call(null,cljs.core.conj.call(null,schedule,work))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","schedule-multiple-work","work-schedule/schedule-multiple-work",-1082639016),(function (p__99638,p__99639){
var map__99640 = p__99638;
var map__99640__$1 = ((((!((map__99640 == null)))?((((map__99640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99640):map__99640);
var db = cljs.core.get.call(null,map__99640__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__99641 = p__99639;
var _ = cljs.core.nth.call(null,vec__99641,(0),null);
var works = cljs.core.nth.call(null,vec__99641,(1),null);
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.distinct.call(null,cljs.core.into.call(null,schedule,works))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),(function (p__99645,p__99646){
var map__99647 = p__99645;
var map__99647__$1 = ((((!((map__99647 == null)))?((((map__99647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99647):map__99647);
var db = cljs.core.get.call(null,map__99647__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__99648 = p__99646;
var _ = cljs.core.nth.call(null,vec__99648,(0),null);
var map__99651 = cljs.core.nth.call(null,vec__99648,(1),null);
var map__99651__$1 = ((((!((map__99651 == null)))?((((map__99651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99651):map__99651);
var work = map__99651__$1;
var worker_id = cljs.core.get.call(null,map__99651__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__99651__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__99651__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.remove.call(null,((function (schedule,map__99647,map__99647__$1,db,vec__99648,_,map__99651,map__99651__$1,work,worker_id,workplace_id,datetime){
return (function (work__$1){
return (cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(work__$1))) && (cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(work__$1))) && (cljs.core._EQ_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(work__$1)));
});})(schedule,map__99647,map__99647__$1,db,vec__99648,_,map__99651,map__99651__$1,work,worker_id,workplace_id,datetime))
,schedule))));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),(function (p__99654,p__99655){
var map__99656 = p__99654;
var map__99656__$1 = ((((!((map__99656 == null)))?((((map__99656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99656):map__99656);
var db = cljs.core.get.call(null,map__99656__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__99657 = p__99655;
var _ = cljs.core.nth.call(null,vec__99657,(0),null);
var works = cljs.core.nth.call(null,vec__99657,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.remove.call(null,((function (schedule,map__99656,map__99656__$1,db,vec__99657,_,works){
return (function (work){
return cljs.core.some.call(null,((function (schedule,map__99656,map__99656__$1,db,vec__99657,_,works){
return (function (p__99661){
var map__99662 = p__99661;
var map__99662__$1 = ((((!((map__99662 == null)))?((((map__99662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99662):map__99662);
var worker_id = cljs.core.get.call(null,map__99662__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__99662__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__99662__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return (cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(work))) && (cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(work))) && (cljs.core._EQ_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(work)));
});})(schedule,map__99656,map__99656__$1,db,vec__99657,_,works))
,works);
});})(schedule,map__99656,map__99656__$1,db,vec__99657,_,works))
,schedule))));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),(function (db,p__99664){
var vec__99665 = p__99664;
var _ = cljs.core.nth.call(null,vec__99665,(0),null);
var work = cljs.core.nth.call(null,vec__99665,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),work], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),(function (db,p__99668){
var vec__99669 = p__99668;
var _ = cljs.core.nth.call(null,vec__99669,(0),null);
var works = cljs.core.nth.call(null,vec__99669,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),works], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-multiple-work","work-schedule/schedule-multiple-work",-1082639016),works], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),(function (db,p__99672){
var vec__99673 = p__99672;
var _ = cljs.core.nth.call(null,vec__99673,(0),null);
var map__99676 = cljs.core.nth.call(null,vec__99673,(1),null);
var map__99676__$1 = ((((!((map__99676 == null)))?((((map__99676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99676):map__99676);
var work = map__99676__$1;
var worker_id = cljs.core.get.call(null,map__99676__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__99676__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__99676__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.mapv.call(null,((function (datetime__$1,zero_time,vec__99673,_,map__99676,map__99676__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime__$2))], null);
});})(datetime__$1,zero_time,vec__99673,_,map__99676,map__99676__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.conj.call(null,works,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),(function (db,p__99678){
var vec__99679 = p__99678;
var _ = cljs.core.nth.call(null,vec__99679,(0),null);
var map__99682 = cljs.core.nth.call(null,vec__99679,(1),null);
var map__99682__$1 = ((((!((map__99682 == null)))?((((map__99682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99682):map__99682);
var work = map__99682__$1;
var worker_id = cljs.core.get.call(null,map__99682__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__99682__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__99682__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.mapv.call(null,((function (datetime__$1,zero_time,vec__99679,_,map__99682,map__99682__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime__$2),new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"vacation")], null);
});})(datetime__$1,zero_time,vec__99679,_,map__99682,map__99682__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),works], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),(function (db,p__99684){
var vec__99685 = p__99684;
var _ = cljs.core.nth.call(null,vec__99685,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__99685,(1),null);
var workers = cljs.core.nth.call(null,vec__99685,(2),null);
var datetime = cljs.core.nth.call(null,vec__99685,(3),null);
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (datetime__$1,zero_time,vec__99685,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__99688(s__99689){
return (new cljs.core.LazySeq(null,((function (datetime__$1,zero_time,vec__99685,_,workplace_id,workers,datetime){
return (function (){
var s__99689__$1 = s__99689;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__99689__$1);
if(temp__5290__auto__){
var xs__5843__auto__ = temp__5290__auto__;
var map__99694 = cljs.core.first.call(null,xs__5843__auto__);
var map__99694__$1 = ((((!((map__99694 == null)))?((((map__99694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99694):map__99694);
var object_id = cljs.core.get.call(null,map__99694__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__99694__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__99694__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__99694__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
var iterys__31128__auto__ = ((function (s__99689__$1,map__99694,map__99694__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__99685,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__99688_$_iter__99690(s__99691){
return (new cljs.core.LazySeq(null,((function (s__99689__$1,map__99694,map__99694__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__99685,_,workplace_id,workers,datetime){
return (function (){
var s__99691__$1 = s__99691;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__99691__$1);
if(temp__5290__auto____$1){
var s__99691__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__99691__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__99691__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__99693 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__99692 = (0);
while(true){
if((i__99692 < size__31131__auto__)){
var datetime__$2 = cljs.core._nth.call(null,c__31130__auto__,i__99692);
cljs.core.chunk_append.call(null,b__99693,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime__$2),new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"holiday"], null)], null));

var G__99696 = (i__99692 + (1));
i__99692 = G__99696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__99693),eckersdorf$work_schedule$events$iter__99688_$_iter__99690.call(null,cljs.core.chunk_rest.call(null,s__99691__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__99693),null);
}
} else {
var datetime__$2 = cljs.core.first.call(null,s__99691__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime__$2),new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"holiday"], null)], null),eckersdorf$work_schedule$events$iter__99688_$_iter__99690.call(null,cljs.core.rest.call(null,s__99691__$2)));
}
} else {
return null;
}
break;
}
});})(s__99689__$1,map__99694,map__99694__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__99685,_,workplace_id,workers,datetime))
,null,null));
});})(s__99689__$1,map__99694,map__99694__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__99685,_,workplace_id,workers,datetime))
;
var fs__31129__auto__ = cljs.core.seq.call(null,iterys__31128__auto__.call(null,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
if(fs__31129__auto__){
return cljs.core.concat.call(null,fs__31129__auto__,eckersdorf$work_schedule$events$iter__99688.call(null,cljs.core.rest.call(null,s__99689__$1)));
} else {
var G__99697 = cljs.core.rest.call(null,s__99689__$1);
s__99689__$1 = G__99697;
continue;
}
} else {
return null;
}
break;
}
});})(datetime__$1,zero_time,vec__99685,_,workplace_id,workers,datetime))
,null,null));
});})(datetime__$1,zero_time,vec__99685,_,workplace_id,workers,datetime))
;
return iter__31132__auto__.call(null,workers);
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),works], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),(function (db,p__99698){
var vec__99699 = p__99698;
var _ = cljs.core.nth.call(null,vec__99699,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__99699,(1),null);
var workers = cljs.core.nth.call(null,vec__99699,(2),null);
var datetime = cljs.core.nth.call(null,vec__99699,(3),null);
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (datetime__$1,zero_time,vec__99699,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__99702(s__99703){
return (new cljs.core.LazySeq(null,((function (datetime__$1,zero_time,vec__99699,_,workplace_id,workers,datetime){
return (function (){
var s__99703__$1 = s__99703;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__99703__$1);
if(temp__5290__auto__){
var xs__5843__auto__ = temp__5290__auto__;
var map__99708 = cljs.core.first.call(null,xs__5843__auto__);
var map__99708__$1 = ((((!((map__99708 == null)))?((((map__99708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99708):map__99708);
var object_id = cljs.core.get.call(null,map__99708__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__99708__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__99708__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__99708__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
var iterys__31128__auto__ = ((function (s__99703__$1,map__99708,map__99708__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__99699,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__99702_$_iter__99704(s__99705){
return (new cljs.core.LazySeq(null,((function (s__99703__$1,map__99708,map__99708__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__99699,_,workplace_id,workers,datetime){
return (function (){
var s__99705__$1 = s__99705;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__99705__$1);
if(temp__5290__auto____$1){
var s__99705__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__99705__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__99705__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__99707 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__99706 = (0);
while(true){
if((i__99706 < size__31131__auto__)){
var datetime__$2 = cljs.core._nth.call(null,c__31130__auto__,i__99706);
cljs.core.chunk_append.call(null,b__99707,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime__$2)], null)], null));

var G__99710 = (i__99706 + (1));
i__99706 = G__99710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__99707),eckersdorf$work_schedule$events$iter__99702_$_iter__99704.call(null,cljs.core.chunk_rest.call(null,s__99705__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__99707),null);
}
} else {
var datetime__$2 = cljs.core.first.call(null,s__99705__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime__$2)], null)], null),eckersdorf$work_schedule$events$iter__99702_$_iter__99704.call(null,cljs.core.rest.call(null,s__99705__$2)));
}
} else {
return null;
}
break;
}
});})(s__99703__$1,map__99708,map__99708__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__99699,_,workplace_id,workers,datetime))
,null,null));
});})(s__99703__$1,map__99708,map__99708__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__99699,_,workplace_id,workers,datetime))
;
var fs__31129__auto__ = cljs.core.seq.call(null,iterys__31128__auto__.call(null,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
if(fs__31129__auto__){
return cljs.core.concat.call(null,fs__31129__auto__,eckersdorf$work_schedule$events$iter__99702.call(null,cljs.core.rest.call(null,s__99703__$1)));
} else {
var G__99711 = cljs.core.rest.call(null,s__99703__$1);
s__99703__$1 = G__99711;
continue;
}
} else {
return null;
}
break;
}
});})(datetime__$1,zero_time,vec__99699,_,workplace_id,workers,datetime))
,null,null));
});})(datetime__$1,zero_time,vec__99699,_,workplace_id,workers,datetime))
;
return iter__31132__auto__.call(null,workers);
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),works], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","clear","work-schedule/clear",209389428),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","request-work-schedule","work-schedule/request-work-schedule",1636514619),(function (p__99712,p__99713){
var map__99714 = p__99712;
var map__99714__$1 = ((((!((map__99714 == null)))?((((map__99714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99714):map__99714);
var db = cljs.core.get.call(null,map__99714__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__99715 = p__99713;
var _ = cljs.core.nth.call(null,vec__99715,(0),null);
var works = cljs.core.nth.call(null,vec__99715,(1),null);
cljs.core.println.call(null,new cljs.core.Keyword("work-schedule","request-work-schedule","work-schedule/request-work-schedule",1636514619),works);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),works,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","request-work-schedule-success","work-schedule/request-work-schedule-success",-52049297)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","request-work-schedule-failure","work-schedule/request-work-schedule-failure",-1804738097)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","request-work-schedule-success","work-schedule/request-work-schedule-success",-52049297),(function (p__99719,p__99720){
var map__99721 = p__99719;
var map__99721__$1 = ((((!((map__99721 == null)))?((((map__99721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99721):map__99721);
var db = cljs.core.get.call(null,map__99721__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__99722 = p__99720;
var _ = cljs.core.nth.call(null,vec__99722,(0),null);
var map__99725 = cljs.core.nth.call(null,vec__99722,(1),null);
var map__99725__$1 = ((((!((map__99725 == null)))?((((map__99725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99725):map__99725);
var data = cljs.core.get.call(null,map__99725__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie dodano pracownika",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","request-work-schedule-failure","work-schedule/request-work-schedule-failure",-1804738097),(function (p__99728,p__99729){
var map__99730 = p__99728;
var map__99730__$1 = ((((!((map__99730 == null)))?((((map__99730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99730):map__99730);
var db = cljs.core.get.call(null,map__99730__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__99731 = p__99729;
var _ = cljs.core.nth.call(null,vec__99731,(0),null);
var map__99734 = cljs.core.nth.call(null,vec__99731,(1),null);
var map__99734__$1 = ((((!((map__99734 == null)))?((((map__99734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99734):map__99734);
var response = map__99734__$1;
var status_text = cljs.core.get.call(null,map__99734__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy dodawaniu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1509056171880
