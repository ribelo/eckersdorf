// Compiled by ClojureScript 1.9.946 {}
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
goog.require('eckersdorf.workers.utils');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","show-dialog","work-schedule/show-dialog",1852194113),(function (db,p__44835){
var vec__44836 = p__44835;
var _ = cljs.core.nth.call(null,vec__44836,(0),null);
var type = cljs.core.nth.call(null,vec__44836,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","hide-dialog","work-schedule/hide-dialog",-1968439396),(function (db,p__44839){
var vec__44840 = p__44839;
var _ = cljs.core.nth.call(null,vec__44840,(0),null);
var type = cljs.core.nth.call(null,vec__44840,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","toggle-print","work-schedule/toggle-print",1363518021),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("work-schedule","print?","work-schedule/print?",-1907155809),cljs.core.not);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-workplace","work-schedule/set-workplace",-600467261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (p__44843,p__44844){
var map__44845 = p__44843;
var map__44845__$1 = ((((!((map__44845 == null)))?((((map__44845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44845):map__44845);
var db = cljs.core.get.call(null,map__44845__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44846 = p__44844;
var _ = cljs.core.nth.call(null,vec__44846,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__44846,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962),workplace_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-date","work-schedule/set-date",-1172573652),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (p__44850,p__44851){
var map__44852 = p__44850;
var map__44852__$1 = ((((!((map__44852 == null)))?((((map__44852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44852):map__44852);
var db = cljs.core.get.call(null,map__44852__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44853 = p__44851;
var _ = cljs.core.nth.call(null,vec__44853,(0),null);
var datetime = cljs.core.nth.call(null,vec__44853,(1),null);
var days = cljs_time.periodic.periodic_seq.call(null,cljs_time.core.first_day_of_the_month.call(null,datetime),cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,datetime),cljs_time.core.days.call(null,(1))),cljs_time.core.days.call(null,(1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118),datetime,new cljs.core.Keyword("work-schedule","days","work-schedule/days",550342111),days),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-all-working-days-in-month","work-schedule/calculate-all-working-days-in-month",1968649364)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300)], null)], null)], null);
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
var works = cljs.core.first.call(null,cljs.core.vals.call(null,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)));
var working_days = cljs.core.count.call(null,cljs.core.filter.call(null,((function (datetime,begin_time,end_time,works){
return (function (p1__44857_SHARP_){
return cljs_time.predicates.weekday_QMARK_.call(null,p1__44857_SHARP_);
});})(datetime,begin_time,end_time,works))
,cljs_time.periodic.periodic_seq.call(null,begin_time,end_time,cljs_time.core.days.call(null,(1)))));
var holidays = cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (datetime,begin_time,end_time,works,working_days){
return (function (p1__44858_SHARP_){
return cljs_time.core.day.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__44858_SHARP_));
});})(datetime,begin_time,end_time,works,working_days))
,cljs.core.filter.call(null,((function (datetime,begin_time,end_time,works,working_days){
return (function (work){
return cljs.core._EQ_.call(null,"holiday",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(work));
});})(datetime,begin_time,end_time,works,working_days))
,works))));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),new cljs.core.Keyword(null,"all-working-days","all-working-days",1056590347)], null),(working_days - holidays));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),(function (db,p__44860){
var vec__44861 = p__44860;
var _ = cljs.core.nth.call(null,vec__44861,(0),null);
var map__44864 = cljs.core.nth.call(null,vec__44861,(1),null);
var map__44864__$1 = ((((!((map__44864 == null)))?((((map__44864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44864):map__44864);
var worker_id = cljs.core.get.call(null,map__44864__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var calculate_fn = ((function (vec__44861,_,map__44864,map__44864__$1,worker_id){
return (function (db__$1,worker_id__$1){
return cljs.core.count.call(null,cljs.core.filter.call(null,((function (vec__44861,_,map__44864,map__44864__$1,worker_id){
return (function (p1__44859_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__44859_SHARP_));
});})(vec__44861,_,map__44864,map__44864__$1,worker_id))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id__$1], null))));
});})(vec__44861,_,map__44864,map__44864__$1,worker_id))
;
if(cljs.core.truth_(worker_id)){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"hours-worked-in-month","hours-worked-in-month",-1178358959)], null),calculate_fn.call(null,db,worker_id));
} else {
var workers = eckersdorf.workers.utils.workers_by_id.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.reduce.call(null,((function (workers,calculate_fn,vec__44861,_,map__44864,map__44864__$1,worker_id){
return (function (db__$1,p__44866){
var map__44867 = p__44866;
var map__44867__$1 = ((((!((map__44867 == null)))?((((map__44867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44867):map__44867);
var object_id = cljs.core.get.call(null,map__44867__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),object_id,new cljs.core.Keyword(null,"hours-worked-in-month","hours-worked-in-month",-1178358959)], null),calculate_fn.call(null,db__$1,object_id));
});})(workers,calculate_fn,vec__44861,_,map__44864,map__44864__$1,worker_id))
,db,workers);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),(function (db,p__44870){
var vec__44871 = p__44870;
var _ = cljs.core.nth.call(null,vec__44871,(0),null);
var map__44874 = cljs.core.nth.call(null,vec__44871,(1),null);
var map__44874__$1 = ((((!((map__44874 == null)))?((((map__44874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44874):map__44874);
var worker_id = cljs.core.get.call(null,map__44874__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var calculate_fn = ((function (vec__44871,_,map__44874,map__44874__$1,worker_id){
return (function (db__$1,worker_id__$1){
return cljs.core.count.call(null,cljs.core.map.call(null,((function (vec__44871,_,map__44874,map__44874__$1,worker_id){
return (function (p__44876){
var map__44877 = p__44876;
var map__44877__$1 = ((((!((map__44877 == null)))?((((map__44877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44877):map__44877);
var datetime = cljs.core.get.call(null,map__44877__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__44871,_,map__44874,map__44874__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__44871,_,map__44874,map__44874__$1,worker_id){
return (function (p1__44869_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__44869_SHARP_));
});})(vec__44871,_,map__44874,map__44874__$1,worker_id))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id__$1], null)))));
});})(vec__44871,_,map__44874,map__44874__$1,worker_id))
;
if(cljs.core.truth_(worker_id)){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"days-worked-in-month","days-worked-in-month",-1174346359)], null),calculate_fn.call(null,db,worker_id));
} else {
var workers = eckersdorf.workers.utils.workers_by_id.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.reduce.call(null,((function (workers,calculate_fn,vec__44871,_,map__44874,map__44874__$1,worker_id){
return (function (db__$1,p__44879){
var map__44880 = p__44879;
var map__44880__$1 = ((((!((map__44880 == null)))?((((map__44880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44880):map__44880);
var object_id = cljs.core.get.call(null,map__44880__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),object_id,new cljs.core.Keyword(null,"days-worked-in-month","days-worked-in-month",-1174346359)], null),calculate_fn.call(null,db__$1,object_id));
});})(workers,calculate_fn,vec__44871,_,map__44874,map__44874__$1,worker_id))
,db,workers);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),(function (db,p__44883){
var vec__44884 = p__44883;
var _ = cljs.core.nth.call(null,vec__44884,(0),null);
var map__44887 = cljs.core.nth.call(null,vec__44884,(1),null);
var map__44887__$1 = ((((!((map__44887 == null)))?((((map__44887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44887):map__44887);
var worker_id = cljs.core.get.call(null,map__44887__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var calculate_fn = ((function (vec__44884,_,map__44887,map__44887__$1,worker_id){
return (function (db__$1,worker_id__$1){
return cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (vec__44884,_,map__44887,map__44887__$1,worker_id){
return (function (p__44889){
var map__44890 = p__44889;
var map__44890__$1 = ((((!((map__44890 == null)))?((((map__44890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44890):map__44890);
var datetime = cljs.core.get.call(null,map__44890__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__44884,_,map__44887,map__44887__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__44884,_,map__44887,map__44887__$1,worker_id){
return (function (p1__44882_SHARP_){
var and__30510__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__44882_SHARP_));
if(cljs.core.truth_(and__30510__auto__)){
return cljs_time.predicates.saturday_QMARK_.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__44882_SHARP_));
} else {
return and__30510__auto__;
}
});})(vec__44884,_,map__44887,map__44887__$1,worker_id))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id__$1], null))))));
});})(vec__44884,_,map__44887,map__44887__$1,worker_id))
;
if(cljs.core.truth_(worker_id)){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"saturdays-worked-in-month","saturdays-worked-in-month",-983473622)], null),calculate_fn.call(null,db,worker_id));
} else {
var workers = eckersdorf.workers.utils.workers_by_id.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.reduce.call(null,((function (workers,calculate_fn,vec__44884,_,map__44887,map__44887__$1,worker_id){
return (function (db__$1,p__44892){
var map__44893 = p__44892;
var map__44893__$1 = ((((!((map__44893 == null)))?((((map__44893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44893):map__44893);
var object_id = cljs.core.get.call(null,map__44893__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),object_id,new cljs.core.Keyword(null,"saturdays-worked-in-month","saturdays-worked-in-month",-983473622)], null),calculate_fn.call(null,db__$1,object_id));
});})(workers,calculate_fn,vec__44884,_,map__44887,map__44887__$1,worker_id))
,db,workers);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),(function (db,p__44896){
var vec__44897 = p__44896;
var _ = cljs.core.nth.call(null,vec__44897,(0),null);
var map__44900 = cljs.core.nth.call(null,vec__44897,(1),null);
var map__44900__$1 = ((((!((map__44900 == null)))?((((map__44900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44900):map__44900);
var worker_id = cljs.core.get.call(null,map__44900__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var calculate_fn = ((function (vec__44897,_,map__44900,map__44900__$1,worker_id){
return (function (db__$1,worker_id__$1){
return cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (vec__44897,_,map__44900,map__44900__$1,worker_id){
return (function (p__44902){
var map__44903 = p__44902;
var map__44903__$1 = ((((!((map__44903 == null)))?((((map__44903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44903):map__44903);
var datetime = cljs.core.get.call(null,map__44903__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__44897,_,map__44900,map__44900__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__44897,_,map__44900,map__44900__$1,worker_id){
return (function (p1__44895_SHARP_){
var and__30510__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__44895_SHARP_));
if(cljs.core.truth_(and__30510__auto__)){
return cljs_time.predicates.sunday_QMARK_.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__44895_SHARP_));
} else {
return and__30510__auto__;
}
});})(vec__44897,_,map__44900,map__44900__$1,worker_id))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id__$1], null))))));
});})(vec__44897,_,map__44900,map__44900__$1,worker_id))
;
if(cljs.core.truth_(worker_id)){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"sundays-worked-in-month","sundays-worked-in-month",1551954077)], null),calculate_fn.call(null,db,worker_id));
} else {
var workers = eckersdorf.workers.utils.workers_by_id.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.reduce.call(null,((function (workers,calculate_fn,vec__44897,_,map__44900,map__44900__$1,worker_id){
return (function (db__$1,p__44905){
var map__44906 = p__44905;
var map__44906__$1 = ((((!((map__44906 == null)))?((((map__44906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44906):map__44906);
var object_id = cljs.core.get.call(null,map__44906__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),object_id,new cljs.core.Keyword(null,"sundays-worked-in-month","sundays-worked-in-month",1551954077)], null),calculate_fn.call(null,db__$1,object_id));
});})(workers,calculate_fn,vec__44897,_,map__44900,map__44900__$1,worker_id))
,db,workers);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),(function (db,p__44909){
var vec__44910 = p__44909;
var _ = cljs.core.nth.call(null,vec__44910,(0),null);
var map__44913 = cljs.core.nth.call(null,vec__44910,(1),null);
var map__44913__$1 = ((((!((map__44913 == null)))?((((map__44913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44913):map__44913);
var worker_id = cljs.core.get.call(null,map__44913__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var calculate_fn = ((function (vec__44910,_,map__44913,map__44913__$1,worker_id){
return (function (db__$1,worker_id__$1){
return cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (vec__44910,_,map__44913,map__44913__$1,worker_id){
return (function (p__44915){
var map__44916 = p__44915;
var map__44916__$1 = ((((!((map__44916 == null)))?((((map__44916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44916):map__44916);
var datetime = cljs.core.get.call(null,map__44916__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__44910,_,map__44913,map__44913__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__44910,_,map__44913,map__44913__$1,worker_id){
return (function (p1__44908_SHARP_){
var and__30510__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__44908_SHARP_));
if(cljs.core.truth_(and__30510__auto__)){
return cljs.core._EQ_.call(null,(6),cljs_time.core.hour.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__44908_SHARP_)));
} else {
return and__30510__auto__;
}
});})(vec__44910,_,map__44913,map__44913__$1,worker_id))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id__$1], null))))));
});})(vec__44910,_,map__44913,map__44913__$1,worker_id))
;
if(cljs.core.truth_(worker_id)){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"first-changes-worked-in-month","first-changes-worked-in-month",-146640955)], null),calculate_fn.call(null,db,worker_id));
} else {
var workers = eckersdorf.workers.utils.workers_by_id.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.reduce.call(null,((function (workers,calculate_fn,vec__44910,_,map__44913,map__44913__$1,worker_id){
return (function (db__$1,p__44918){
var map__44919 = p__44918;
var map__44919__$1 = ((((!((map__44919 == null)))?((((map__44919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44919):map__44919);
var object_id = cljs.core.get.call(null,map__44919__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),object_id,new cljs.core.Keyword(null,"first-changes-worked-in-month","first-changes-worked-in-month",-146640955)], null),calculate_fn.call(null,db__$1,object_id));
});})(workers,calculate_fn,vec__44910,_,map__44913,map__44913__$1,worker_id))
,db,workers);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),(function (db,p__44922){
var vec__44923 = p__44922;
var _ = cljs.core.nth.call(null,vec__44923,(0),null);
var map__44926 = cljs.core.nth.call(null,vec__44923,(1),null);
var map__44926__$1 = ((((!((map__44926 == null)))?((((map__44926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44926):map__44926);
var worker_id = cljs.core.get.call(null,map__44926__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var calculate_fn = ((function (vec__44923,_,map__44926,map__44926__$1,worker_id){
return (function (db__$1,worker_id__$1){
return cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (vec__44923,_,map__44926,map__44926__$1,worker_id){
return (function (p__44928){
var map__44929 = p__44928;
var map__44929__$1 = ((((!((map__44929 == null)))?((((map__44929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44929):map__44929);
var datetime = cljs.core.get.call(null,map__44929__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__44923,_,map__44926,map__44926__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__44923,_,map__44926,map__44926__$1,worker_id){
return (function (p1__44921_SHARP_){
var and__30510__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__44921_SHARP_));
if(cljs.core.truth_(and__30510__auto__)){
return cljs.core._EQ_.call(null,(20),cljs_time.core.hour.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__44921_SHARP_)));
} else {
return and__30510__auto__;
}
});})(vec__44923,_,map__44926,map__44926__$1,worker_id))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id__$1], null))))));
});})(vec__44923,_,map__44926,map__44926__$1,worker_id))
;
if(cljs.core.truth_(worker_id)){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"second-changes-worked-in-month","second-changes-worked-in-month",820237509)], null),calculate_fn.call(null,db,worker_id));
} else {
var workers = eckersdorf.workers.utils.workers_by_id.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.reduce.call(null,((function (workers,calculate_fn,vec__44923,_,map__44926,map__44926__$1,worker_id){
return (function (db__$1,p__44931){
var map__44932 = p__44931;
var map__44932__$1 = ((((!((map__44932 == null)))?((((map__44932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44932):map__44932);
var object_id = cljs.core.get.call(null,map__44932__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),object_id,new cljs.core.Keyword(null,"second-changes-worked-in-month","second-changes-worked-in-month",820237509)], null),calculate_fn.call(null,db__$1,object_id));
});})(workers,calculate_fn,vec__44923,_,map__44926,map__44926__$1,worker_id))
,db,workers);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),(function (p__44934,p__44935){
var map__44936 = p__44934;
var map__44936__$1 = ((((!((map__44936 == null)))?((((map__44936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44936):map__44936);
var db = cljs.core.get.call(null,map__44936__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44937 = p__44935;
var _ = cljs.core.nth.call(null,vec__44937,(0),null);
var map__44940 = cljs.core.nth.call(null,vec__44937,(1),null);
var map__44940__$1 = ((((!((map__44940 == null)))?((((map__44940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44940):map__44940);
var work = map__44940__$1;
var worker_id = cljs.core.get.call(null,map__44940__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var works = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null),cljs.core.conj.call(null,works,work)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","schedule-multiple-work","work-schedule/schedule-multiple-work",-1082639016),(function (p__44943,p__44944){
var map__44945 = p__44943;
var map__44945__$1 = ((((!((map__44945 == null)))?((((map__44945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44945):map__44945);
var db = cljs.core.get.call(null,map__44945__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44946 = p__44944;
var _ = cljs.core.nth.call(null,vec__44946,(0),null);
var new_works = cljs.core.nth.call(null,vec__44946,(1),null);
var worker_id = new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_works));
var works = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null),cljs.core.into.call(null,works,new_works)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),(function (p__44950,p__44951){
var map__44952 = p__44950;
var map__44952__$1 = ((((!((map__44952 == null)))?((((map__44952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44952):map__44952);
var db = cljs.core.get.call(null,map__44952__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44953 = p__44951;
var _ = cljs.core.nth.call(null,vec__44953,(0),null);
var map__44956 = cljs.core.nth.call(null,vec__44953,(1),null);
var map__44956__$1 = ((((!((map__44956 == null)))?((((map__44956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44956):map__44956);
var work = map__44956__$1;
var worker_id = cljs.core.get.call(null,map__44956__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44956__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44956__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_work.call(null,db,work),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),(function (p__44959,p__44960){
var map__44961 = p__44959;
var map__44961__$1 = ((((!((map__44961 == null)))?((((map__44961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44961):map__44961);
var db = cljs.core.get.call(null,map__44961__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44962 = p__44960;
var _ = cljs.core.nth.call(null,vec__44962,(0),null);
var works = cljs.core.nth.call(null,vec__44962,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),(function (p__44966,p__44967){
var map__44968 = p__44966;
var map__44968__$1 = ((((!((map__44968 == null)))?((((map__44968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44968):map__44968);
var db = cljs.core.get.call(null,map__44968__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44969 = p__44967;
var _ = cljs.core.nth.call(null,vec__44969,(0),null);
var work = cljs.core.nth.call(null,vec__44969,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),work], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),(function (p__44973,p__44974){
var map__44975 = p__44973;
var map__44975__$1 = ((((!((map__44975 == null)))?((((map__44975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44975):map__44975);
var db = cljs.core.get.call(null,map__44975__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44976 = p__44974;
var _ = cljs.core.nth.call(null,vec__44976,(0),null);
var works = cljs.core.nth.call(null,vec__44976,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),works], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-multiple-work","work-schedule/schedule-multiple-work",-1082639016),works], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),(function (p__44980,p__44981){
var map__44982 = p__44980;
var map__44982__$1 = ((((!((map__44982 == null)))?((((map__44982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44982):map__44982);
var db = cljs.core.get.call(null,map__44982__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44983 = p__44981;
var _ = cljs.core.nth.call(null,vec__44983,(0),null);
var map__44986 = cljs.core.nth.call(null,vec__44983,(1),null);
var map__44986__$1 = ((((!((map__44986 == null)))?((((map__44986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44986):map__44986);
var work = map__44986__$1;
var worker_id = cljs.core.get.call(null,map__44986__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44986__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44986__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var zero_time = cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime)));
var works = cljs.core.mapv.call(null,((function (zero_time,map__44982,map__44982__$1,db,vec__44983,_,map__44986,map__44986__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$1){
return cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$1);
});})(zero_time,map__44982,map__44982__$1,db,vec__44983,_,map__44986,map__44986__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),(function (p__44989,p__44990){
var map__44991 = p__44989;
var map__44991__$1 = ((((!((map__44991 == null)))?((((map__44991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44991):map__44991);
var db = cljs.core.get.call(null,map__44991__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44992 = p__44990;
var _ = cljs.core.nth.call(null,vec__44992,(0),null);
var map__44995 = cljs.core.nth.call(null,vec__44992,(1),null);
var map__44995__$1 = ((((!((map__44995 == null)))?((((map__44995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44995):map__44995);
var work = map__44995__$1;
var worker_id = cljs.core.get.call(null,map__44995__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44995__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44995__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var zero_time = cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime)));
var new_works = cljs.core.mapv.call(null,((function (zero_time,map__44991,map__44991__$1,db,vec__44992,_,map__44995,map__44995__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$1){
return cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"vacation");
});})(zero_time,map__44991,map__44991__$1,db,vec__44992,_,map__44995,map__44995__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,new_works),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null),((function (zero_time,new_works,map__44991,map__44991__$1,db,vec__44992,_,map__44995,map__44995__$1,work,worker_id,workplace_id,datetime){
return (function (works){
return cljs.core.into.call(null,works,new_works);
});})(zero_time,new_works,map__44991,map__44991__$1,db,vec__44992,_,map__44995,map__44995__$1,work,worker_id,workplace_id,datetime))
),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-break","work-schedule/set-break",2098802928),(function (p__44998,p__44999){
var map__45000 = p__44998;
var map__45000__$1 = ((((!((map__45000 == null)))?((((map__45000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45000):map__45000);
var db = cljs.core.get.call(null,map__45000__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45001 = p__44999;
var _ = cljs.core.nth.call(null,vec__45001,(0),null);
var map__45004 = cljs.core.nth.call(null,vec__45001,(1),null);
var map__45004__$1 = ((((!((map__45004 == null)))?((((map__45004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45004):map__45004);
var work = map__45004__$1;
var worker_id = cljs.core.get.call(null,map__45004__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__45004__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__45004__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var zero_time = cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime)));
var new_works = cljs.core.mapv.call(null,((function (zero_time,map__45000,map__45000__$1,db,vec__45001,_,map__45004,map__45004__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$1){
return cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"break");
});})(zero_time,map__45000,map__45000__$1,db,vec__45001,_,map__45004,map__45004__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,new_works),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null),((function (zero_time,new_works,map__45000,map__45000__$1,db,vec__45001,_,map__45004,map__45004__$1,work,worker_id,workplace_id,datetime){
return (function (works){
return cljs.core.into.call(null,works,new_works);
});})(zero_time,new_works,map__45000,map__45000__$1,db,vec__45001,_,map__45004,map__45004__$1,work,worker_id,workplace_id,datetime))
),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),(function (p__45007,p__45008){
var map__45009 = p__45007;
var map__45009__$1 = ((((!((map__45009 == null)))?((((map__45009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45009):map__45009);
var db = cljs.core.get.call(null,map__45009__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45010 = p__45008;
var _ = cljs.core.nth.call(null,vec__45010,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__45010,(1),null);
var workers = cljs.core.nth.call(null,vec__45010,(2),null);
var datetime = cljs.core.nth.call(null,vec__45010,(3),null);
var zero_time = cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime)));
var works = cljs.core.reduce.call(null,((function (zero_time,map__45009,map__45009__$1,db,vec__45010,_,workplace_id,workers,datetime){
return (function (m,p__45014){
var map__45015 = p__45014;
var map__45015__$1 = ((((!((map__45015 == null)))?((((map__45015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45015):map__45015);
var object_id = cljs.core.get.call(null,map__45015__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc.call(null,m,object_id,cljs.core.mapv.call(null,((function (map__45015,map__45015__$1,object_id,zero_time,map__45009,map__45009__$1,db,vec__45010,_,workplace_id,workers,datetime){
return (function (datetime__$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"holiday"], null);
});})(map__45015,map__45015__$1,object_id,zero_time,map__45009,map__45009__$1,db,vec__45010,_,workplace_id,workers,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
});})(zero_time,map__45009,map__45009__$1,db,vec__45010,_,workplace_id,workers,datetime))
,cljs.core.PersistentArrayMap.EMPTY,workers);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var $ = db;
var $__$1 = cljs.core.reduce.call(null,((function ($,zero_time,works,map__45009,map__45009__$1,db,vec__45010,_,workplace_id,workers,datetime){
return (function (r,w){
return eckersdorf.work_schedule.utils.remove_multiple_work.call(null,r,w);
});})($,zero_time,works,map__45009,map__45009__$1,db,vec__45010,_,workplace_id,workers,datetime))
,$,cljs.core.vals.call(null,works));
return cljs.core.reduce.call(null,((function ($,$__$1,zero_time,works,map__45009,map__45009__$1,db,vec__45010,_,workplace_id,workers,datetime){
return (function (r,w){
var worker_id = new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,w));
return cljs.core.update_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null),((function (worker_id,$,$__$1,zero_time,works,map__45009,map__45009__$1,db,vec__45010,_,workplace_id,workers,datetime){
return (function (works__$1){
return cljs.core.into.call(null,works__$1,w);
});})(worker_id,$,$__$1,zero_time,works,map__45009,map__45009__$1,db,vec__45010,_,workplace_id,workers,datetime))
);
});})($,$__$1,zero_time,works,map__45009,map__45009__$1,db,vec__45010,_,workplace_id,workers,datetime))
,$__$1,cljs.core.vals.call(null,works));
})(),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-all-working-days-in-month","work-schedule/calculate-all-working-days-in-month",1968649364)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),(function (p__45017,p__45018){
var map__45019 = p__45017;
var map__45019__$1 = ((((!((map__45019 == null)))?((((map__45019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45019):map__45019);
var db = cljs.core.get.call(null,map__45019__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45020 = p__45018;
var _ = cljs.core.nth.call(null,vec__45020,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__45020,(1),null);
var workers = cljs.core.nth.call(null,vec__45020,(2),null);
var datetime = cljs.core.nth.call(null,vec__45020,(3),null);
var zero_time = cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime)));
var works = cljs.core.reduce.call(null,((function (zero_time,map__45019,map__45019__$1,db,vec__45020,_,workplace_id,workers,datetime){
return (function (m,p__45024){
var map__45025 = p__45024;
var map__45025__$1 = ((((!((map__45025 == null)))?((((map__45025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45025):map__45025);
var object_id = cljs.core.get.call(null,map__45025__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc.call(null,m,object_id,cljs.core.mapv.call(null,((function (map__45025,map__45025__$1,object_id,zero_time,map__45019,map__45019__$1,db,vec__45020,_,workplace_id,workers,datetime){
return (function (datetime__$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$1], null);
});})(map__45025,map__45025__$1,object_id,zero_time,map__45019,map__45019__$1,db,vec__45020,_,workplace_id,workers,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
});})(zero_time,map__45019,map__45019__$1,db,vec__45020,_,workplace_id,workers,datetime))
,cljs.core.PersistentArrayMap.EMPTY,workers);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var $ = db;
return cljs.core.reduce.call(null,((function ($,zero_time,works,map__45019,map__45019__$1,db,vec__45020,_,workplace_id,workers,datetime){
return (function (r,w){
return eckersdorf.work_schedule.utils.remove_multiple_work.call(null,r,w);
});})($,zero_time,works,map__45019,map__45019__$1,db,vec__45020,_,workplace_id,workers,datetime))
,$,cljs.core.vals.call(null,works));
})(),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-all-working-days-in-month","work-schedule/calculate-all-working-days-in-month",1968649364)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","clear","work-schedule/clear",209389428),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300),(function (p__45027,_){
var map__45028 = p__45027;
var map__45028__$1 = ((((!((map__45028 == null)))?((((map__45028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45028):map__45028);
var db = cljs.core.get.call(null,map__45028__$1,new cljs.core.Keyword(null,"db","db",993250759));
var workplace_id = new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db);
var datetime = new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime)], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-success","work-schedule/ajax.get-work-schedule-success",753020555)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-failure","work-schedule/ajax.get-work-schedule-failure",-1814016044)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-success","work-schedule/ajax.get-work-schedule-success",753020555),(function (p__45030,p__45031){
var map__45032 = p__45030;
var map__45032__$1 = ((((!((map__45032 == null)))?((((map__45032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45032):map__45032);
var db = cljs.core.get.call(null,map__45032__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45033 = p__45031;
var _ = cljs.core.nth.call(null,vec__45033,(0),null);
var map__45036 = cljs.core.nth.call(null,vec__45033,(1),null);
var map__45036__$1 = ((((!((map__45036 == null)))?((((map__45036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45036):map__45036);
var data = cljs.core.get.call(null,map__45036__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.reduce.call(null,((function (map__45032,map__45032__$1,db,vec__45033,_,map__45036,map__45036__$1,data){
return (function (r,p__45039){
var vec__45040 = p__45039;
var k = cljs.core.nth.call(null,vec__45040,(0),null);
var v = cljs.core.nth.call(null,vec__45040,(1),null);
return cljs.core.assoc.call(null,r,cljs.core.name.call(null,k),cljs.core.map.call(null,((function (vec__45040,k,v,map__45032,map__45032__$1,db,vec__45033,_,map__45036,map__45036__$1,data){
return (function (m){
return cljs.core.update.call(null,m,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.from_string);
});})(vec__45040,k,v,map__45032,map__45032__$1,db,vec__45033,_,map__45036,map__45036__$1,data))
,v));
});})(map__45032,map__45032__$1,db,vec__45033,_,map__45036,map__45036__$1,data))
,cljs.core.PersistentArrayMap.EMPTY,data)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-all-working-days-in-month","work-schedule/calculate-all-working-days-in-month",1968649364)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie pobrano harmonogram pracy",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-failure","work-schedule/ajax.get-work-schedule-failure",-1814016044),(function (p__45043,p__45044){
var map__45045 = p__45043;
var map__45045__$1 = ((((!((map__45045 == null)))?((((map__45045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45045):map__45045);
var db = cljs.core.get.call(null,map__45045__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45046 = p__45044;
var _ = cljs.core.nth.call(null,vec__45046,(0),null);
var map__45049 = cljs.core.nth.call(null,vec__45046,(1),null);
var map__45049__$1 = ((((!((map__45049 == null)))?((((map__45049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45049):map__45049);
var response = map__45049__$1;
var status_text = cljs.core.get.call(null,map__45049__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy pobieraniu harmonogramu pracy: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.post-work-schedule","work-schedule/ajax.post-work-schedule",378268198),(function (p__45052,_){
var map__45053 = p__45052;
var map__45053__$1 = ((((!((map__45053 == null)))?((((map__45053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45053):map__45053);
var db = cljs.core.get.call(null,map__45053__$1,new cljs.core.Keyword(null,"db","db",993250759));
var works = cljs.core.flatten.call(null,cljs.core.vals.call(null,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),works,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-success","work-schedule/ajax.post-work-schedule-success",-587325761)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-failure","work-schedule/ajax.post-work-schedule-failure",1488934759)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-success","work-schedule/ajax.post-work-schedule-success",-587325761),(function (p__45055,p__45056){
var map__45057 = p__45055;
var map__45057__$1 = ((((!((map__45057 == null)))?((((map__45057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45057):map__45057);
var db = cljs.core.get.call(null,map__45057__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45058 = p__45056;
var _ = cljs.core.nth.call(null,vec__45058,(0),null);
var map__45061 = cljs.core.nth.call(null,vec__45058,(1),null);
var map__45061__$1 = ((((!((map__45061 == null)))?((((map__45061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45061):map__45061);
var data = cljs.core.get.call(null,map__45061__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.reduce.call(null,((function (map__45057,map__45057__$1,db,vec__45058,_,map__45061,map__45061__$1,data){
return (function (r,p__45064){
var vec__45065 = p__45064;
var k = cljs.core.nth.call(null,vec__45065,(0),null);
var v = cljs.core.nth.call(null,vec__45065,(1),null);
return cljs.core.assoc.call(null,r,cljs.core.name.call(null,k),cljs.core.map.call(null,((function (vec__45065,k,v,map__45057,map__45057__$1,db,vec__45058,_,map__45061,map__45061__$1,data){
return (function (m){
return cljs.core.update.call(null,m,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.from_string);
});})(vec__45065,k,v,map__45057,map__45057__$1,db,vec__45058,_,map__45061,map__45061__$1,data))
,v));
});})(map__45057,map__45057__$1,db,vec__45058,_,map__45061,map__45061__$1,data))
,cljs.core.PersistentArrayMap.EMPTY,data)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","unset-edited","work-schedule/unset-edited",-673180065)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie zapisano harmonogram pracy",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-failure","work-schedule/ajax.post-work-schedule-failure",1488934759),(function (p__45068,p__45069){
var map__45070 = p__45068;
var map__45070__$1 = ((((!((map__45070 == null)))?((((map__45070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45070):map__45070);
var db = cljs.core.get.call(null,map__45070__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45071 = p__45069;
var _ = cljs.core.nth.call(null,vec__45071,(0),null);
var map__45074 = cljs.core.nth.call(null,vec__45071,(1),null);
var map__45074__$1 = ((((!((map__45074 == null)))?((((map__45074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45074):map__45074);
var response = map__45074__$1;
var status_text = cljs.core.get.call(null,map__45074__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("work-schedule","ajax.post-work-schedule","work-schedule/ajax.post-work-schedule",378268198),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy zapisywaniu harmonogram pracy: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule","work-schedule/ajax.delete-work-schedule",-339546076),(function (p__45077,_){
var map__45078 = p__45077;
var map__45078__$1 = ((((!((map__45078 == null)))?((((map__45078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45078):map__45078);
var db = cljs.core.get.call(null,map__45078__$1,new cljs.core.Keyword(null,"db","db",993250759));
var workplace_id = new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db);
var datetime = new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-success","work-schedule/ajax.delete-work-schedule-success",-2066310923)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-failure","work-schedule/ajax.delete-work-schedule-failure",-225767126)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-success","work-schedule/ajax.delete-work-schedule-success",-2066310923),(function (p__45080,p__45081){
var map__45082 = p__45080;
var map__45082__$1 = ((((!((map__45082 == null)))?((((map__45082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45082):map__45082);
var db = cljs.core.get.call(null,map__45082__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45083 = p__45081;
var _ = cljs.core.nth.call(null,vec__45083,(0),null);
var map__45086 = cljs.core.nth.call(null,vec__45083,(1),null);
var map__45086__$1 = ((((!((map__45086 == null)))?((((map__45086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45086):map__45086);
var data = cljs.core.get.call(null,map__45086__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","unset-edited","work-schedule/unset-edited",-673180065)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to harmonogram pracy",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-failure","work-schedule/ajax.delete-work-schedule-failure",-225767126),(function (p__45089,p__45090){
var map__45091 = p__45089;
var map__45091__$1 = ((((!((map__45091 == null)))?((((map__45091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45091):map__45091);
var db = cljs.core.get.call(null,map__45091__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45092 = p__45090;
var _ = cljs.core.nth.call(null,vec__45092,(0),null);
var map__45095 = cljs.core.nth.call(null,vec__45092,(1),null);
var map__45095__$1 = ((((!((map__45095 == null)))?((((map__45095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45095):map__45095);
var response = map__45095__$1;
var status_text = cljs.core.get.call(null,map__45095__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule","work-schedule/ajax.delete-work-schedule",-339546076),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu harmonogramu pracy: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","sync","work-schedule/sync",1459023889),(function (p__45098,_){
var map__45099 = p__45098;
var map__45099__$1 = ((((!((map__45099 == null)))?((((map__45099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45099):map__45099);
var db = cljs.core.get.call(null,map__45099__$1,new cljs.core.Keyword(null,"db","db",993250759));
var works = cljs.core.flatten.call(null,cljs.core.vals.call(null,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((!(cljs.core.empty_QMARK_.call(null,works)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.post-work-schedule","work-schedule/ajax.post-work-schedule",378268198)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule","work-schedule/ajax.delete-work-schedule",-339546076)], null))], null);
}));

//# sourceMappingURL=events.js.map?rel=1510602152503
