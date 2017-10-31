// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.work_schedule.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.periodic');
goog.require('cljs_time.predicates');
goog.require('taoensso.encore');
goog.require('ajax.core');
goog.require('eckersdorf.db.core');
goog.require('eckersdorf.work_schedule.utils');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","show-dialog","work-schedule/show-dialog",1852194113),(function (db,p__53103){
var vec__53104 = p__53103;
var _ = cljs.core.nth.call(null,vec__53104,(0),null);
var type = cljs.core.nth.call(null,vec__53104,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","hide-dialog","work-schedule/hide-dialog",-1968439396),(function (db,p__53107){
var vec__53108 = p__53107;
var _ = cljs.core.nth.call(null,vec__53108,(0),null);
var type = cljs.core.nth.call(null,vec__53108,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-workplace","work-schedule/set-workplace",-600467261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (p__53111,p__53112){
var map__53113 = p__53111;
var map__53113__$1 = ((((!((map__53113 == null)))?((((map__53113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53113):map__53113);
var db = cljs.core.get.call(null,map__53113__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53114 = p__53112;
var _ = cljs.core.nth.call(null,vec__53114,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__53114,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962),workplace_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-date","work-schedule/set-date",-1172573652),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (p__53118,p__53119){
var map__53120 = p__53118;
var map__53120__$1 = ((((!((map__53120 == null)))?((((map__53120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53120):map__53120);
var db = cljs.core.get.call(null,map__53120__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53121 = p__53119;
var _ = cljs.core.nth.call(null,vec__53121,(0),null);
var date = cljs.core.nth.call(null,vec__53121,(1),null);
var days = cljs_time.periodic.periodic_seq.call(null,cljs_time.core.first_day_of_the_month.call(null,date),cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,date),cljs_time.core.days.call(null,(1))),cljs_time.core.days.call(null,(1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118),date,new cljs.core.Keyword("work-schedule","days","work-schedule/days",550342111),days),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-all-working-days-in-month","work-schedule/calculate-all-working-days-in-month",1968649364)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","edited?","work-schedule/edited?",-752047662),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","unset-edited","work-schedule/unset-edited",-673180065),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","edited?","work-schedule/edited?",-752047662),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-all-working-days-in-month","work-schedule/calculate-all-working-days-in-month",1968649364),(function (db,_){
var datetime = new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118).cljs$core$IFn$_invoke$arity$1(db);
var begin_time = cljs_time.core.first_day_of_the_month.call(null,datetime);
var end_time = cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,begin_time),cljs_time.core.days.call(null,(1)));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),new cljs.core.Keyword(null,"all-working-days","all-working-days",1056590347)], null),cljs.core.count.call(null,cljs.core.filter.call(null,((function (datetime,begin_time,end_time){
return (function (p1__53125_SHARP_){
return cljs_time.predicates.weekday_QMARK_.call(null,p1__53125_SHARP_);
});})(datetime,begin_time,end_time))
,cljs_time.periodic.periodic_seq.call(null,begin_time,end_time,cljs_time.core.days.call(null,(1))))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),(function (db,p__53127){
var vec__53128 = p__53127;
var _ = cljs.core.nth.call(null,vec__53128,(0),null);
var map__53131 = cljs.core.nth.call(null,vec__53128,(1),null);
var map__53131__$1 = ((((!((map__53131 == null)))?((((map__53131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53131):map__53131);
var worker_id = cljs.core.get.call(null,map__53131__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var datetime = cljs.core.get.call(null,map__53131__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var begin_time = cljs_time.core.first_day_of_the_month.call(null,datetime);
var end_time = cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,begin_time),cljs_time.core.days.call(null,(1)));
var hours_worked = cljs.core.count.call(null,cljs.core.filter.call(null,((function (begin_time,end_time,vec__53128,_,map__53131,map__53131__$1,worker_id,datetime){
return (function (p1__53126_SHARP_){
var and__30237__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(p1__53126_SHARP_));
if(and__30237__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__53126_SHARP_));
} else {
return and__30237__auto__;
}
});})(begin_time,end_time,vec__53128,_,map__53131,map__53131__$1,worker_id,datetime))
,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"hours-worked-in-month","hours-worked-in-month",-1178358959)], null),hours_worked);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),(function (db,p__53134){
var vec__53135 = p__53134;
var _ = cljs.core.nth.call(null,vec__53135,(0),null);
var map__53138 = cljs.core.nth.call(null,vec__53135,(1),null);
var map__53138__$1 = ((((!((map__53138 == null)))?((((map__53138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53138):map__53138);
var worker_id = cljs.core.get.call(null,map__53138__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var datetime = cljs.core.get.call(null,map__53138__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var begin_time = cljs_time.core.first_day_of_the_month.call(null,datetime);
var end_time = cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,begin_time),cljs_time.core.days.call(null,(1)));
var hours_worked = cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (begin_time,end_time,vec__53135,_,map__53138,map__53138__$1,worker_id,datetime){
return (function (p__53140){
var map__53141 = p__53140;
var map__53141__$1 = ((((!((map__53141 == null)))?((((map__53141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53141):map__53141);
var datetime__$1 = cljs.core.get.call(null,map__53141__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime__$1);
});})(begin_time,end_time,vec__53135,_,map__53138,map__53138__$1,worker_id,datetime))
,cljs.core.filter.call(null,((function (begin_time,end_time,vec__53135,_,map__53138,map__53138__$1,worker_id,datetime){
return (function (p1__53133_SHARP_){
var and__30237__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(p1__53133_SHARP_));
if(and__30237__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__53133_SHARP_));
} else {
return and__30237__auto__;
}
});})(begin_time,end_time,vec__53135,_,map__53138,map__53138__$1,worker_id,datetime))
,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)))));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"days-worked-in-month","days-worked-in-month",-1174346359)], null),hours_worked);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),(function (p__53143,p__53144){
var map__53145 = p__53143;
var map__53145__$1 = ((((!((map__53145 == null)))?((((map__53145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53145):map__53145);
var db = cljs.core.get.call(null,map__53145__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53146 = p__53144;
var _ = cljs.core.nth.call(null,vec__53146,(0),null);
var work = cljs.core.nth.call(null,vec__53146,(1),null);
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.distinct.call(null,cljs.core.conj.call(null,schedule,work))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","schedule-multiple-work","work-schedule/schedule-multiple-work",-1082639016),(function (p__53150,p__53151){
var map__53152 = p__53150;
var map__53152__$1 = ((((!((map__53152 == null)))?((((map__53152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53152):map__53152);
var db = cljs.core.get.call(null,map__53152__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53153 = p__53151;
var _ = cljs.core.nth.call(null,vec__53153,(0),null);
var works = cljs.core.nth.call(null,vec__53153,(1),null);
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.distinct.call(null,cljs.core.into.call(null,schedule,works))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),(function (p__53157,p__53158){
var map__53159 = p__53157;
var map__53159__$1 = ((((!((map__53159 == null)))?((((map__53159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53159):map__53159);
var db = cljs.core.get.call(null,map__53159__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53160 = p__53158;
var _ = cljs.core.nth.call(null,vec__53160,(0),null);
var map__53163 = cljs.core.nth.call(null,vec__53160,(1),null);
var map__53163__$1 = ((((!((map__53163 == null)))?((((map__53163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53163):map__53163);
var work = map__53163__$1;
var worker_id = cljs.core.get.call(null,map__53163__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__53163__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__53163__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_work.call(null,db,work),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),(function (p__53166,p__53167){
var map__53168 = p__53166;
var map__53168__$1 = ((((!((map__53168 == null)))?((((map__53168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53168):map__53168);
var db = cljs.core.get.call(null,map__53168__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53169 = p__53167;
var _ = cljs.core.nth.call(null,vec__53169,(0),null);
var works = cljs.core.nth.call(null,vec__53169,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),(function (p__53173,p__53174){
var map__53175 = p__53173;
var map__53175__$1 = ((((!((map__53175 == null)))?((((map__53175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53175):map__53175);
var db = cljs.core.get.call(null,map__53175__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53176 = p__53174;
var _ = cljs.core.nth.call(null,vec__53176,(0),null);
var work = cljs.core.nth.call(null,vec__53176,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),work], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),(function (p__53180,p__53181){
var map__53182 = p__53180;
var map__53182__$1 = ((((!((map__53182 == null)))?((((map__53182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53182):map__53182);
var db = cljs.core.get.call(null,map__53182__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53183 = p__53181;
var _ = cljs.core.nth.call(null,vec__53183,(0),null);
var works = cljs.core.nth.call(null,vec__53183,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),works], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-multiple-work","work-schedule/schedule-multiple-work",-1082639016),works], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),(function (p__53187,p__53188){
var map__53189 = p__53187;
var map__53189__$1 = ((((!((map__53189 == null)))?((((map__53189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53189):map__53189);
var db = cljs.core.get.call(null,map__53189__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53190 = p__53188;
var _ = cljs.core.nth.call(null,vec__53190,(0),null);
var map__53193 = cljs.core.nth.call(null,vec__53190,(1),null);
var map__53193__$1 = ((((!((map__53193 == null)))?((((map__53193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53193):map__53193);
var work = map__53193__$1;
var worker_id = cljs.core.get.call(null,map__53193__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__53193__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__53193__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = datetime;
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.mapv.call(null,((function (datetime__$1,zero_time,map__53189,map__53189__$1,db,vec__53190,_,map__53193,map__53193__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$2){
return cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2);
});})(datetime__$1,zero_time,map__53189,map__53189__$1,db,vec__53190,_,map__53193,map__53193__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),(function (p__53196,p__53197){
var map__53198 = p__53196;
var map__53198__$1 = ((((!((map__53198 == null)))?((((map__53198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53198):map__53198);
var db = cljs.core.get.call(null,map__53198__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53199 = p__53197;
var _ = cljs.core.nth.call(null,vec__53199,(0),null);
var map__53202 = cljs.core.nth.call(null,vec__53199,(1),null);
var map__53202__$1 = ((((!((map__53202 == null)))?((((map__53202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53202):map__53202);
var work = map__53202__$1;
var worker_id = cljs.core.get.call(null,map__53202__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__53202__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__53202__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = datetime;
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.mapv.call(null,((function (datetime__$1,zero_time,map__53198,map__53198__$1,db,vec__53199,_,map__53202,map__53202__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$2){
return cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"vacation");
});})(datetime__$1,zero_time,map__53198,map__53198__$1,db,vec__53199,_,map__53202,map__53202__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.call(null,eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),((function (datetime__$1,zero_time,works,map__53198,map__53198__$1,db,vec__53199,_,map__53202,map__53202__$1,work,worker_id,workplace_id,datetime){
return (function (schedule){
return cljs.core.distinct.call(null,cljs.core.into.call(null,schedule,works));
});})(datetime__$1,zero_time,works,map__53198,map__53198__$1,db,vec__53199,_,map__53202,map__53202__$1,work,worker_id,workplace_id,datetime))
),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-vacation","work-schedule/remove-vacation",-149059750),(function (p__53205,p__53206){
var map__53207 = p__53205;
var map__53207__$1 = ((((!((map__53207 == null)))?((((map__53207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53207):map__53207);
var db = cljs.core.get.call(null,map__53207__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53208 = p__53206;
var _ = cljs.core.nth.call(null,vec__53208,(0),null);
var map__53211 = cljs.core.nth.call(null,vec__53208,(1),null);
var map__53211__$1 = ((((!((map__53211 == null)))?((((map__53211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53211):map__53211);
var work = map__53211__$1;
var worker_id = cljs.core.get.call(null,map__53211__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__53211__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__53211__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var zero_time = cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime)));
var works = cljs.core.mapv.call(null,((function (zero_time,map__53207,map__53207__$1,db,vec__53208,_,map__53211,map__53211__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$1){
return cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$1);
});})(zero_time,map__53207,map__53207__$1,db,vec__53208,_,map__53211,map__53211__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),(function (p__53214,p__53215){
var map__53216 = p__53214;
var map__53216__$1 = ((((!((map__53216 == null)))?((((map__53216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53216):map__53216);
var db = cljs.core.get.call(null,map__53216__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53217 = p__53215;
var _ = cljs.core.nth.call(null,vec__53217,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__53217,(1),null);
var workers = cljs.core.nth.call(null,vec__53217,(2),null);
var datetime = cljs.core.nth.call(null,vec__53217,(3),null);
var datetime__$1 = datetime;
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (datetime__$1,zero_time,map__53216,map__53216__$1,db,vec__53217,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__53221(s__53222){
return (new cljs.core.LazySeq(null,((function (datetime__$1,zero_time,map__53216,map__53216__$1,db,vec__53217,_,workplace_id,workers,datetime){
return (function (){
var s__53222__$1 = s__53222;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__53222__$1);
if(temp__5290__auto__){
var xs__5843__auto__ = temp__5290__auto__;
var map__53227 = cljs.core.first.call(null,xs__5843__auto__);
var map__53227__$1 = ((((!((map__53227 == null)))?((((map__53227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53227):map__53227);
var object_id = cljs.core.get.call(null,map__53227__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__53227__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__53227__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__53227__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
var iterys__31127__auto__ = ((function (s__53222__$1,map__53227,map__53227__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__53216,map__53216__$1,db,vec__53217,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__53221_$_iter__53223(s__53224){
return (new cljs.core.LazySeq(null,((function (s__53222__$1,map__53227,map__53227__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__53216,map__53216__$1,db,vec__53217,_,workplace_id,workers,datetime){
return (function (){
var s__53224__$1 = s__53224;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__53224__$1);
if(temp__5290__auto____$1){
var s__53224__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53224__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__53224__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__53226 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__53225 = (0);
while(true){
if((i__53225 < size__31130__auto__)){
var datetime__$2 = cljs.core._nth.call(null,c__31129__auto__,i__53225);
cljs.core.chunk_append.call(null,b__53226,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"holiday"], null));

var G__53229 = (i__53225 + (1));
i__53225 = G__53229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53226),eckersdorf$work_schedule$events$iter__53221_$_iter__53223.call(null,cljs.core.chunk_rest.call(null,s__53224__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53226),null);
}
} else {
var datetime__$2 = cljs.core.first.call(null,s__53224__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"holiday"], null),eckersdorf$work_schedule$events$iter__53221_$_iter__53223.call(null,cljs.core.rest.call(null,s__53224__$2)));
}
} else {
return null;
}
break;
}
});})(s__53222__$1,map__53227,map__53227__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__53216,map__53216__$1,db,vec__53217,_,workplace_id,workers,datetime))
,null,null));
});})(s__53222__$1,map__53227,map__53227__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__53216,map__53216__$1,db,vec__53217,_,workplace_id,workers,datetime))
;
var fs__31128__auto__ = cljs.core.seq.call(null,iterys__31127__auto__.call(null,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
if(fs__31128__auto__){
return cljs.core.concat.call(null,fs__31128__auto__,eckersdorf$work_schedule$events$iter__53221.call(null,cljs.core.rest.call(null,s__53222__$1)));
} else {
var G__53230 = cljs.core.rest.call(null,s__53222__$1);
s__53222__$1 = G__53230;
continue;
}
} else {
return null;
}
break;
}
});})(datetime__$1,zero_time,map__53216,map__53216__$1,db,vec__53217,_,workplace_id,workers,datetime))
,null,null));
});})(datetime__$1,zero_time,map__53216,map__53216__$1,db,vec__53217,_,workplace_id,workers,datetime))
;
return iter__31131__auto__.call(null,workers);
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.call(null,eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),((function (datetime__$1,zero_time,works,map__53216,map__53216__$1,db,vec__53217,_,workplace_id,workers,datetime){
return (function (schedule){
return cljs.core.distinct.call(null,cljs.core.into.call(null,schedule,works));
});})(datetime__$1,zero_time,works,map__53216,map__53216__$1,db,vec__53217,_,workplace_id,workers,datetime))
),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),(function (p__53231,p__53232){
var map__53233 = p__53231;
var map__53233__$1 = ((((!((map__53233 == null)))?((((map__53233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53233):map__53233);
var db = cljs.core.get.call(null,map__53233__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53234 = p__53232;
var _ = cljs.core.nth.call(null,vec__53234,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__53234,(1),null);
var workers = cljs.core.nth.call(null,vec__53234,(2),null);
var datetime = cljs.core.nth.call(null,vec__53234,(3),null);
var datetime__$1 = datetime;
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (datetime__$1,zero_time,map__53233,map__53233__$1,db,vec__53234,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__53238(s__53239){
return (new cljs.core.LazySeq(null,((function (datetime__$1,zero_time,map__53233,map__53233__$1,db,vec__53234,_,workplace_id,workers,datetime){
return (function (){
var s__53239__$1 = s__53239;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__53239__$1);
if(temp__5290__auto__){
var xs__5843__auto__ = temp__5290__auto__;
var map__53244 = cljs.core.first.call(null,xs__5843__auto__);
var map__53244__$1 = ((((!((map__53244 == null)))?((((map__53244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53244):map__53244);
var object_id = cljs.core.get.call(null,map__53244__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__53244__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__53244__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__53244__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
var iterys__31127__auto__ = ((function (s__53239__$1,map__53244,map__53244__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__53233,map__53233__$1,db,vec__53234,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__53238_$_iter__53240(s__53241){
return (new cljs.core.LazySeq(null,((function (s__53239__$1,map__53244,map__53244__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__53233,map__53233__$1,db,vec__53234,_,workplace_id,workers,datetime){
return (function (){
var s__53241__$1 = s__53241;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__53241__$1);
if(temp__5290__auto____$1){
var s__53241__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53241__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__53241__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__53243 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__53242 = (0);
while(true){
if((i__53242 < size__31130__auto__)){
var datetime__$2 = cljs.core._nth.call(null,c__31129__auto__,i__53242);
cljs.core.chunk_append.call(null,b__53243,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2], null));

var G__53246 = (i__53242 + (1));
i__53242 = G__53246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53243),eckersdorf$work_schedule$events$iter__53238_$_iter__53240.call(null,cljs.core.chunk_rest.call(null,s__53241__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53243),null);
}
} else {
var datetime__$2 = cljs.core.first.call(null,s__53241__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2], null),eckersdorf$work_schedule$events$iter__53238_$_iter__53240.call(null,cljs.core.rest.call(null,s__53241__$2)));
}
} else {
return null;
}
break;
}
});})(s__53239__$1,map__53244,map__53244__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__53233,map__53233__$1,db,vec__53234,_,workplace_id,workers,datetime))
,null,null));
});})(s__53239__$1,map__53244,map__53244__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__53233,map__53233__$1,db,vec__53234,_,workplace_id,workers,datetime))
;
var fs__31128__auto__ = cljs.core.seq.call(null,iterys__31127__auto__.call(null,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
if(fs__31128__auto__){
return cljs.core.concat.call(null,fs__31128__auto__,eckersdorf$work_schedule$events$iter__53238.call(null,cljs.core.rest.call(null,s__53239__$1)));
} else {
var G__53247 = cljs.core.rest.call(null,s__53239__$1);
s__53239__$1 = G__53247;
continue;
}
} else {
return null;
}
break;
}
});})(datetime__$1,zero_time,map__53233,map__53233__$1,db,vec__53234,_,workplace_id,workers,datetime))
,null,null));
});})(datetime__$1,zero_time,map__53233,map__53233__$1,db,vec__53234,_,workplace_id,workers,datetime))
;
return iter__31131__auto__.call(null,workers);
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","clear","work-schedule/clear",209389428),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300),(function (p__53248,_){
var map__53249 = p__53248;
var map__53249__$1 = ((((!((map__53249 == null)))?((((map__53249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53249):map__53249);
var db = cljs.core.get.call(null,map__53249__$1,new cljs.core.Keyword(null,"db","db",993250759));
var workplace_id = new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db);
var datetime = new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime)], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-success","work-schedule/ajax.get-work-schedule-success",753020555)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-failure","work-schedule/ajax.get-work-schedule-failure",-1814016044)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-success","work-schedule/ajax.get-work-schedule-success",753020555),(function (p__53251,p__53252){
var map__53253 = p__53251;
var map__53253__$1 = ((((!((map__53253 == null)))?((((map__53253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53253):map__53253);
var db = cljs.core.get.call(null,map__53253__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53254 = p__53252;
var _ = cljs.core.nth.call(null,vec__53254,(0),null);
var map__53257 = cljs.core.nth.call(null,vec__53254,(1),null);
var map__53257__$1 = ((((!((map__53257 == null)))?((((map__53257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53257):map__53257);
var data = cljs.core.get.call(null,map__53257__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.mapv.call(null,((function (map__53253,map__53253__$1,db,vec__53254,_,map__53257,map__53257__$1,data){
return (function (work){
return cljs.core.update.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.from_string);
});})(map__53253,map__53253__$1,db,vec__53254,_,map__53257,map__53257__$1,data))
,data)),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie pobrano harmonogram pracy",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-failure","work-schedule/ajax.get-work-schedule-failure",-1814016044),(function (p__53260,p__53261){
var map__53262 = p__53260;
var map__53262__$1 = ((((!((map__53262 == null)))?((((map__53262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53262):map__53262);
var db = cljs.core.get.call(null,map__53262__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53263 = p__53261;
var _ = cljs.core.nth.call(null,vec__53263,(0),null);
var map__53266 = cljs.core.nth.call(null,vec__53263,(1),null);
var map__53266__$1 = ((((!((map__53266 == null)))?((((map__53266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53266):map__53266);
var response = map__53266__$1;
var status_text = cljs.core.get.call(null,map__53266__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy pobieraniu harmonogramu pracy: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.post-work-schedule","work-schedule/ajax.post-work-schedule",378268198),(function (p__53269,_){
var map__53270 = p__53269;
var map__53270__$1 = ((((!((map__53270 == null)))?((((map__53270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53270):map__53270);
var db = cljs.core.get.call(null,map__53270__$1,new cljs.core.Keyword(null,"db","db",993250759));
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),schedule,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-success","work-schedule/ajax.post-work-schedule-success",-587325761)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-failure","work-schedule/ajax.post-work-schedule-failure",1488934759)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-success","work-schedule/ajax.post-work-schedule-success",-587325761),(function (p__53272,p__53273){
var map__53274 = p__53272;
var map__53274__$1 = ((((!((map__53274 == null)))?((((map__53274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53274):map__53274);
var db = cljs.core.get.call(null,map__53274__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53275 = p__53273;
var _ = cljs.core.nth.call(null,vec__53275,(0),null);
var map__53278 = cljs.core.nth.call(null,vec__53275,(1),null);
var map__53278__$1 = ((((!((map__53278 == null)))?((((map__53278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53278):map__53278);
var data = cljs.core.get.call(null,map__53278__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.mapv.call(null,((function (map__53274,map__53274__$1,db,vec__53275,_,map__53278,map__53278__$1,data){
return (function (work){
return cljs.core.update.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.from_string);
});})(map__53274,map__53274__$1,db,vec__53275,_,map__53278,map__53278__$1,data))
,data)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","unset-edited","work-schedule/unset-edited",-673180065)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie zapisano harmonogram pracy",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-failure","work-schedule/ajax.post-work-schedule-failure",1488934759),(function (p__53281,p__53282){
var map__53283 = p__53281;
var map__53283__$1 = ((((!((map__53283 == null)))?((((map__53283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53283):map__53283);
var db = cljs.core.get.call(null,map__53283__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53284 = p__53282;
var _ = cljs.core.nth.call(null,vec__53284,(0),null);
var map__53287 = cljs.core.nth.call(null,vec__53284,(1),null);
var map__53287__$1 = ((((!((map__53287 == null)))?((((map__53287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53287):map__53287);
var response = map__53287__$1;
var status_text = cljs.core.get.call(null,map__53287__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("work-schedule","ajax.post-work-schedule","work-schedule/ajax.post-work-schedule",378268198),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy zapisywaniu harmonogram pracy: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule","work-schedule/ajax.delete-work-schedule",-339546076),(function (p__53290,_){
var map__53291 = p__53290;
var map__53291__$1 = ((((!((map__53291 == null)))?((((map__53291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53291):map__53291);
var db = cljs.core.get.call(null,map__53291__$1,new cljs.core.Keyword(null,"db","db",993250759));
var workplace_id = new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db);
var datetime = new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-success","work-schedule/ajax.delete-work-schedule-success",-2066310923)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-failure","work-schedule/ajax.delete-work-schedule-failure",-225767126)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-success","work-schedule/ajax.delete-work-schedule-success",-2066310923),(function (p__53293,p__53294){
var map__53295 = p__53293;
var map__53295__$1 = ((((!((map__53295 == null)))?((((map__53295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53295):map__53295);
var db = cljs.core.get.call(null,map__53295__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53296 = p__53294;
var _ = cljs.core.nth.call(null,vec__53296,(0),null);
var map__53299 = cljs.core.nth.call(null,vec__53296,(1),null);
var map__53299__$1 = ((((!((map__53299 == null)))?((((map__53299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53299):map__53299);
var data = cljs.core.get.call(null,map__53299__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","unset-edited","work-schedule/unset-edited",-673180065)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to harmonogram pracy",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-failure","work-schedule/ajax.delete-work-schedule-failure",-225767126),(function (p__53302,p__53303){
var map__53304 = p__53302;
var map__53304__$1 = ((((!((map__53304 == null)))?((((map__53304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53304):map__53304);
var db = cljs.core.get.call(null,map__53304__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53305 = p__53303;
var _ = cljs.core.nth.call(null,vec__53305,(0),null);
var map__53308 = cljs.core.nth.call(null,vec__53305,(1),null);
var map__53308__$1 = ((((!((map__53308 == null)))?((((map__53308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53308):map__53308);
var response = map__53308__$1;
var status_text = cljs.core.get.call(null,map__53308__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule","work-schedule/ajax.delete-work-schedule",-339546076),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu harmonogramu pracy: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","sync","work-schedule/sync",1459023889),(function (p__53311,_){
var map__53312 = p__53311;
var map__53312__$1 = ((((!((map__53312 == null)))?((((map__53312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53312):map__53312);
var db = cljs.core.get.call(null,map__53312__$1,new cljs.core.Keyword(null,"db","db",993250759));
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
cljs.core.println.call(null,schedule);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((!(cljs.core.empty_QMARK_.call(null,schedule)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.post-work-schedule","work-schedule/ajax.post-work-schedule",378268198)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule","work-schedule/ajax.delete-work-schedule",-339546076)], null))], null);
}));

//# sourceMappingURL=events.js.map?rel=1509398254564
