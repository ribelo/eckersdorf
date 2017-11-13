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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","show-dialog","work-schedule/show-dialog",1852194113),(function (db,p__44836){
var vec__44837 = p__44836;
var _ = cljs.core.nth.call(null,vec__44837,(0),null);
var type = cljs.core.nth.call(null,vec__44837,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","hide-dialog","work-schedule/hide-dialog",-1968439396),(function (db,p__44840){
var vec__44841 = p__44840;
var _ = cljs.core.nth.call(null,vec__44841,(0),null);
var type = cljs.core.nth.call(null,vec__44841,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","toggle-print","work-schedule/toggle-print",1363518021),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("work-schedule","print?","work-schedule/print?",-1907155809),cljs.core.not);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-workplace","work-schedule/set-workplace",-600467261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (p__44844,p__44845){
var map__44846 = p__44844;
var map__44846__$1 = ((((!((map__44846 == null)))?((((map__44846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44846):map__44846);
var db = cljs.core.get.call(null,map__44846__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44847 = p__44845;
var _ = cljs.core.nth.call(null,vec__44847,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__44847,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962),workplace_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-date","work-schedule/set-date",-1172573652),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (p__44851,p__44852){
var map__44853 = p__44851;
var map__44853__$1 = ((((!((map__44853 == null)))?((((map__44853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44853):map__44853);
var db = cljs.core.get.call(null,map__44853__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44854 = p__44852;
var _ = cljs.core.nth.call(null,vec__44854,(0),null);
var datetime = cljs.core.nth.call(null,vec__44854,(1),null);
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
return (function (p1__44858_SHARP_){
return cljs_time.predicates.weekday_QMARK_.call(null,p1__44858_SHARP_);
});})(datetime,begin_time,end_time,works))
,cljs_time.periodic.periodic_seq.call(null,begin_time,end_time,cljs_time.core.days.call(null,(1)))));
var holidays = cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (datetime,begin_time,end_time,works,working_days){
return (function (p1__44859_SHARP_){
return cljs_time.core.day.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__44859_SHARP_));
});})(datetime,begin_time,end_time,works,working_days))
,cljs.core.filter.call(null,((function (datetime,begin_time,end_time,works,working_days){
return (function (work){
return cljs.core._EQ_.call(null,"holiday",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(work));
});})(datetime,begin_time,end_time,works,working_days))
,works))));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),new cljs.core.Keyword(null,"all-working-days","all-working-days",1056590347)], null),(working_days - holidays));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),(function (db,p__44861){
var vec__44862 = p__44861;
var _ = cljs.core.nth.call(null,vec__44862,(0),null);
var map__44865 = cljs.core.nth.call(null,vec__44862,(1),null);
var map__44865__$1 = ((((!((map__44865 == null)))?((((map__44865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44865):map__44865);
var worker_id = cljs.core.get.call(null,map__44865__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var calculate_fn = ((function (vec__44862,_,map__44865,map__44865__$1,worker_id){
return (function (db__$1,worker_id__$1){
return cljs.core.count.call(null,cljs.core.filter.call(null,((function (vec__44862,_,map__44865,map__44865__$1,worker_id){
return (function (p1__44860_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__44860_SHARP_));
});})(vec__44862,_,map__44865,map__44865__$1,worker_id))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id__$1], null))));
});})(vec__44862,_,map__44865,map__44865__$1,worker_id))
;
if(cljs.core.truth_(worker_id)){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"hours-worked-in-month","hours-worked-in-month",-1178358959)], null),calculate_fn.call(null,db,worker_id));
} else {
var workers = eckersdorf.workers.utils.workers_by_id.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.reduce.call(null,((function (workers,calculate_fn,vec__44862,_,map__44865,map__44865__$1,worker_id){
return (function (db__$1,p__44867){
var map__44868 = p__44867;
var map__44868__$1 = ((((!((map__44868 == null)))?((((map__44868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44868):map__44868);
var object_id = cljs.core.get.call(null,map__44868__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),object_id,new cljs.core.Keyword(null,"hours-worked-in-month","hours-worked-in-month",-1178358959)], null),calculate_fn.call(null,db__$1,object_id));
});})(workers,calculate_fn,vec__44862,_,map__44865,map__44865__$1,worker_id))
,db,workers);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),(function (db,p__44871){
var vec__44872 = p__44871;
var _ = cljs.core.nth.call(null,vec__44872,(0),null);
var map__44875 = cljs.core.nth.call(null,vec__44872,(1),null);
var map__44875__$1 = ((((!((map__44875 == null)))?((((map__44875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44875):map__44875);
var worker_id = cljs.core.get.call(null,map__44875__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var calculate_fn = ((function (vec__44872,_,map__44875,map__44875__$1,worker_id){
return (function (db__$1,worker_id__$1){
return cljs.core.count.call(null,cljs.core.map.call(null,((function (vec__44872,_,map__44875,map__44875__$1,worker_id){
return (function (p__44877){
var map__44878 = p__44877;
var map__44878__$1 = ((((!((map__44878 == null)))?((((map__44878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44878):map__44878);
var datetime = cljs.core.get.call(null,map__44878__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__44872,_,map__44875,map__44875__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__44872,_,map__44875,map__44875__$1,worker_id){
return (function (p1__44870_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__44870_SHARP_));
});})(vec__44872,_,map__44875,map__44875__$1,worker_id))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id__$1], null)))));
});})(vec__44872,_,map__44875,map__44875__$1,worker_id))
;
if(cljs.core.truth_(worker_id)){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"days-worked-in-month","days-worked-in-month",-1174346359)], null),calculate_fn.call(null,db,worker_id));
} else {
var workers = eckersdorf.workers.utils.workers_by_id.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.reduce.call(null,((function (workers,calculate_fn,vec__44872,_,map__44875,map__44875__$1,worker_id){
return (function (db__$1,p__44880){
var map__44881 = p__44880;
var map__44881__$1 = ((((!((map__44881 == null)))?((((map__44881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44881):map__44881);
var object_id = cljs.core.get.call(null,map__44881__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),object_id,new cljs.core.Keyword(null,"days-worked-in-month","days-worked-in-month",-1174346359)], null),calculate_fn.call(null,db__$1,object_id));
});})(workers,calculate_fn,vec__44872,_,map__44875,map__44875__$1,worker_id))
,db,workers);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),(function (db,p__44884){
var vec__44885 = p__44884;
var _ = cljs.core.nth.call(null,vec__44885,(0),null);
var map__44888 = cljs.core.nth.call(null,vec__44885,(1),null);
var map__44888__$1 = ((((!((map__44888 == null)))?((((map__44888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44888):map__44888);
var worker_id = cljs.core.get.call(null,map__44888__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var calculate_fn = ((function (vec__44885,_,map__44888,map__44888__$1,worker_id){
return (function (db__$1,worker_id__$1){
return cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (vec__44885,_,map__44888,map__44888__$1,worker_id){
return (function (p__44890){
var map__44891 = p__44890;
var map__44891__$1 = ((((!((map__44891 == null)))?((((map__44891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44891):map__44891);
var datetime = cljs.core.get.call(null,map__44891__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__44885,_,map__44888,map__44888__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__44885,_,map__44888,map__44888__$1,worker_id){
return (function (p1__44883_SHARP_){
var and__30511__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__44883_SHARP_));
if(cljs.core.truth_(and__30511__auto__)){
return cljs_time.predicates.saturday_QMARK_.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__44883_SHARP_));
} else {
return and__30511__auto__;
}
});})(vec__44885,_,map__44888,map__44888__$1,worker_id))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id__$1], null))))));
});})(vec__44885,_,map__44888,map__44888__$1,worker_id))
;
if(cljs.core.truth_(worker_id)){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"saturdays-worked-in-month","saturdays-worked-in-month",-983473622)], null),calculate_fn.call(null,db,worker_id));
} else {
var workers = eckersdorf.workers.utils.workers_by_id.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.reduce.call(null,((function (workers,calculate_fn,vec__44885,_,map__44888,map__44888__$1,worker_id){
return (function (db__$1,p__44893){
var map__44894 = p__44893;
var map__44894__$1 = ((((!((map__44894 == null)))?((((map__44894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44894):map__44894);
var object_id = cljs.core.get.call(null,map__44894__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),object_id,new cljs.core.Keyword(null,"saturdays-worked-in-month","saturdays-worked-in-month",-983473622)], null),calculate_fn.call(null,db__$1,object_id));
});})(workers,calculate_fn,vec__44885,_,map__44888,map__44888__$1,worker_id))
,db,workers);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),(function (db,p__44897){
var vec__44898 = p__44897;
var _ = cljs.core.nth.call(null,vec__44898,(0),null);
var map__44901 = cljs.core.nth.call(null,vec__44898,(1),null);
var map__44901__$1 = ((((!((map__44901 == null)))?((((map__44901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44901):map__44901);
var worker_id = cljs.core.get.call(null,map__44901__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var calculate_fn = ((function (vec__44898,_,map__44901,map__44901__$1,worker_id){
return (function (db__$1,worker_id__$1){
return cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (vec__44898,_,map__44901,map__44901__$1,worker_id){
return (function (p__44903){
var map__44904 = p__44903;
var map__44904__$1 = ((((!((map__44904 == null)))?((((map__44904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44904):map__44904);
var datetime = cljs.core.get.call(null,map__44904__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__44898,_,map__44901,map__44901__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__44898,_,map__44901,map__44901__$1,worker_id){
return (function (p1__44896_SHARP_){
var and__30511__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__44896_SHARP_));
if(cljs.core.truth_(and__30511__auto__)){
return cljs_time.predicates.sunday_QMARK_.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__44896_SHARP_));
} else {
return and__30511__auto__;
}
});})(vec__44898,_,map__44901,map__44901__$1,worker_id))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id__$1], null))))));
});})(vec__44898,_,map__44901,map__44901__$1,worker_id))
;
if(cljs.core.truth_(worker_id)){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"sundays-worked-in-month","sundays-worked-in-month",1551954077)], null),calculate_fn.call(null,db,worker_id));
} else {
var workers = eckersdorf.workers.utils.workers_by_id.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.reduce.call(null,((function (workers,calculate_fn,vec__44898,_,map__44901,map__44901__$1,worker_id){
return (function (db__$1,p__44906){
var map__44907 = p__44906;
var map__44907__$1 = ((((!((map__44907 == null)))?((((map__44907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44907):map__44907);
var object_id = cljs.core.get.call(null,map__44907__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),object_id,new cljs.core.Keyword(null,"sundays-worked-in-month","sundays-worked-in-month",1551954077)], null),calculate_fn.call(null,db__$1,object_id));
});})(workers,calculate_fn,vec__44898,_,map__44901,map__44901__$1,worker_id))
,db,workers);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),(function (db,p__44910){
var vec__44911 = p__44910;
var _ = cljs.core.nth.call(null,vec__44911,(0),null);
var map__44914 = cljs.core.nth.call(null,vec__44911,(1),null);
var map__44914__$1 = ((((!((map__44914 == null)))?((((map__44914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44914):map__44914);
var worker_id = cljs.core.get.call(null,map__44914__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var calculate_fn = ((function (vec__44911,_,map__44914,map__44914__$1,worker_id){
return (function (db__$1,worker_id__$1){
return cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (vec__44911,_,map__44914,map__44914__$1,worker_id){
return (function (p__44916){
var map__44917 = p__44916;
var map__44917__$1 = ((((!((map__44917 == null)))?((((map__44917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44917):map__44917);
var datetime = cljs.core.get.call(null,map__44917__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__44911,_,map__44914,map__44914__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__44911,_,map__44914,map__44914__$1,worker_id){
return (function (p1__44909_SHARP_){
var and__30511__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__44909_SHARP_));
if(cljs.core.truth_(and__30511__auto__)){
return cljs.core._EQ_.call(null,(6),cljs_time.core.hour.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__44909_SHARP_)));
} else {
return and__30511__auto__;
}
});})(vec__44911,_,map__44914,map__44914__$1,worker_id))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id__$1], null))))));
});})(vec__44911,_,map__44914,map__44914__$1,worker_id))
;
if(cljs.core.truth_(worker_id)){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"first-changes-worked-in-month","first-changes-worked-in-month",-146640955)], null),calculate_fn.call(null,db,worker_id));
} else {
var workers = eckersdorf.workers.utils.workers_by_id.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.reduce.call(null,((function (workers,calculate_fn,vec__44911,_,map__44914,map__44914__$1,worker_id){
return (function (db__$1,p__44919){
var map__44920 = p__44919;
var map__44920__$1 = ((((!((map__44920 == null)))?((((map__44920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44920):map__44920);
var object_id = cljs.core.get.call(null,map__44920__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),object_id,new cljs.core.Keyword(null,"first-changes-worked-in-month","first-changes-worked-in-month",-146640955)], null),calculate_fn.call(null,db__$1,object_id));
});})(workers,calculate_fn,vec__44911,_,map__44914,map__44914__$1,worker_id))
,db,workers);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),(function (db,p__44923){
var vec__44924 = p__44923;
var _ = cljs.core.nth.call(null,vec__44924,(0),null);
var map__44927 = cljs.core.nth.call(null,vec__44924,(1),null);
var map__44927__$1 = ((((!((map__44927 == null)))?((((map__44927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44927):map__44927);
var worker_id = cljs.core.get.call(null,map__44927__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var calculate_fn = ((function (vec__44924,_,map__44927,map__44927__$1,worker_id){
return (function (db__$1,worker_id__$1){
return cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (vec__44924,_,map__44927,map__44927__$1,worker_id){
return (function (p__44929){
var map__44930 = p__44929;
var map__44930__$1 = ((((!((map__44930 == null)))?((((map__44930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44930):map__44930);
var datetime = cljs.core.get.call(null,map__44930__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__44924,_,map__44927,map__44927__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__44924,_,map__44927,map__44927__$1,worker_id){
return (function (p1__44922_SHARP_){
var and__30511__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__44922_SHARP_));
if(cljs.core.truth_(and__30511__auto__)){
return cljs.core._EQ_.call(null,(20),cljs_time.core.hour.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__44922_SHARP_)));
} else {
return and__30511__auto__;
}
});})(vec__44924,_,map__44927,map__44927__$1,worker_id))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id__$1], null))))));
});})(vec__44924,_,map__44927,map__44927__$1,worker_id))
;
if(cljs.core.truth_(worker_id)){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"second-changes-worked-in-month","second-changes-worked-in-month",820237509)], null),calculate_fn.call(null,db,worker_id));
} else {
var workers = eckersdorf.workers.utils.workers_by_id.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.reduce.call(null,((function (workers,calculate_fn,vec__44924,_,map__44927,map__44927__$1,worker_id){
return (function (db__$1,p__44932){
var map__44933 = p__44932;
var map__44933__$1 = ((((!((map__44933 == null)))?((((map__44933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44933):map__44933);
var object_id = cljs.core.get.call(null,map__44933__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),object_id,new cljs.core.Keyword(null,"second-changes-worked-in-month","second-changes-worked-in-month",820237509)], null),calculate_fn.call(null,db__$1,object_id));
});})(workers,calculate_fn,vec__44924,_,map__44927,map__44927__$1,worker_id))
,db,workers);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),(function (p__44935,p__44936){
var map__44937 = p__44935;
var map__44937__$1 = ((((!((map__44937 == null)))?((((map__44937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44937):map__44937);
var db = cljs.core.get.call(null,map__44937__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44938 = p__44936;
var _ = cljs.core.nth.call(null,vec__44938,(0),null);
var map__44941 = cljs.core.nth.call(null,vec__44938,(1),null);
var map__44941__$1 = ((((!((map__44941 == null)))?((((map__44941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44941):map__44941);
var work = map__44941__$1;
var worker_id = cljs.core.get.call(null,map__44941__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var works = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null),cljs.core.conj.call(null,works,work)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","schedule-multiple-work","work-schedule/schedule-multiple-work",-1082639016),(function (p__44944,p__44945){
var map__44946 = p__44944;
var map__44946__$1 = ((((!((map__44946 == null)))?((((map__44946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44946):map__44946);
var db = cljs.core.get.call(null,map__44946__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44947 = p__44945;
var _ = cljs.core.nth.call(null,vec__44947,(0),null);
var new_works = cljs.core.nth.call(null,vec__44947,(1),null);
var worker_id = new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new_works));
var works = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null),cljs.core.into.call(null,works,new_works)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),(function (p__44951,p__44952){
var map__44953 = p__44951;
var map__44953__$1 = ((((!((map__44953 == null)))?((((map__44953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44953):map__44953);
var db = cljs.core.get.call(null,map__44953__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44954 = p__44952;
var _ = cljs.core.nth.call(null,vec__44954,(0),null);
var map__44957 = cljs.core.nth.call(null,vec__44954,(1),null);
var map__44957__$1 = ((((!((map__44957 == null)))?((((map__44957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44957):map__44957);
var work = map__44957__$1;
var worker_id = cljs.core.get.call(null,map__44957__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44957__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44957__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_work.call(null,db,work),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),(function (p__44960,p__44961){
var map__44962 = p__44960;
var map__44962__$1 = ((((!((map__44962 == null)))?((((map__44962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44962):map__44962);
var db = cljs.core.get.call(null,map__44962__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44963 = p__44961;
var _ = cljs.core.nth.call(null,vec__44963,(0),null);
var works = cljs.core.nth.call(null,vec__44963,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),(function (p__44967,p__44968){
var map__44969 = p__44967;
var map__44969__$1 = ((((!((map__44969 == null)))?((((map__44969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44969):map__44969);
var db = cljs.core.get.call(null,map__44969__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44970 = p__44968;
var _ = cljs.core.nth.call(null,vec__44970,(0),null);
var work = cljs.core.nth.call(null,vec__44970,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),work], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),(function (p__44974,p__44975){
var map__44976 = p__44974;
var map__44976__$1 = ((((!((map__44976 == null)))?((((map__44976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44976):map__44976);
var db = cljs.core.get.call(null,map__44976__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44977 = p__44975;
var _ = cljs.core.nth.call(null,vec__44977,(0),null);
var works = cljs.core.nth.call(null,vec__44977,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),works], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-multiple-work","work-schedule/schedule-multiple-work",-1082639016),works], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),(function (p__44981,p__44982){
var map__44983 = p__44981;
var map__44983__$1 = ((((!((map__44983 == null)))?((((map__44983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44983):map__44983);
var db = cljs.core.get.call(null,map__44983__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44984 = p__44982;
var _ = cljs.core.nth.call(null,vec__44984,(0),null);
var map__44987 = cljs.core.nth.call(null,vec__44984,(1),null);
var map__44987__$1 = ((((!((map__44987 == null)))?((((map__44987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44987):map__44987);
var work = map__44987__$1;
var worker_id = cljs.core.get.call(null,map__44987__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44987__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44987__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var zero_time = cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime)));
var works = cljs.core.mapv.call(null,((function (zero_time,map__44983,map__44983__$1,db,vec__44984,_,map__44987,map__44987__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$1){
return cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$1);
});})(zero_time,map__44983,map__44983__$1,db,vec__44984,_,map__44987,map__44987__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),(function (p__44990,p__44991){
var map__44992 = p__44990;
var map__44992__$1 = ((((!((map__44992 == null)))?((((map__44992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44992):map__44992);
var db = cljs.core.get.call(null,map__44992__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44993 = p__44991;
var _ = cljs.core.nth.call(null,vec__44993,(0),null);
var map__44996 = cljs.core.nth.call(null,vec__44993,(1),null);
var map__44996__$1 = ((((!((map__44996 == null)))?((((map__44996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44996):map__44996);
var work = map__44996__$1;
var worker_id = cljs.core.get.call(null,map__44996__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44996__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44996__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var zero_time = cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime)));
var new_works = cljs.core.mapv.call(null,((function (zero_time,map__44992,map__44992__$1,db,vec__44993,_,map__44996,map__44996__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$1){
return cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"vacation");
});})(zero_time,map__44992,map__44992__$1,db,vec__44993,_,map__44996,map__44996__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,new_works),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null),((function (zero_time,new_works,map__44992,map__44992__$1,db,vec__44993,_,map__44996,map__44996__$1,work,worker_id,workplace_id,datetime){
return (function (works){
return cljs.core.into.call(null,works,new_works);
});})(zero_time,new_works,map__44992,map__44992__$1,db,vec__44993,_,map__44996,map__44996__$1,work,worker_id,workplace_id,datetime))
),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-break","work-schedule/set-break",2098802928),(function (p__44999,p__45000){
var map__45001 = p__44999;
var map__45001__$1 = ((((!((map__45001 == null)))?((((map__45001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45001):map__45001);
var db = cljs.core.get.call(null,map__45001__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45002 = p__45000;
var _ = cljs.core.nth.call(null,vec__45002,(0),null);
var map__45005 = cljs.core.nth.call(null,vec__45002,(1),null);
var map__45005__$1 = ((((!((map__45005 == null)))?((((map__45005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45005):map__45005);
var work = map__45005__$1;
var worker_id = cljs.core.get.call(null,map__45005__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__45005__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__45005__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var zero_time = cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime)));
var new_works = cljs.core.mapv.call(null,((function (zero_time,map__45001,map__45001__$1,db,vec__45002,_,map__45005,map__45005__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$1){
return cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"break");
});})(zero_time,map__45001,map__45001__$1,db,vec__45002,_,map__45005,map__45005__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,new_works),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null),((function (zero_time,new_works,map__45001,map__45001__$1,db,vec__45002,_,map__45005,map__45005__$1,work,worker_id,workplace_id,datetime){
return (function (works){
return cljs.core.into.call(null,works,new_works);
});})(zero_time,new_works,map__45001,map__45001__$1,db,vec__45002,_,map__45005,map__45005__$1,work,worker_id,workplace_id,datetime))
),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),(function (p__45008,p__45009){
var map__45010 = p__45008;
var map__45010__$1 = ((((!((map__45010 == null)))?((((map__45010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45010):map__45010);
var db = cljs.core.get.call(null,map__45010__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45011 = p__45009;
var _ = cljs.core.nth.call(null,vec__45011,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__45011,(1),null);
var workers = cljs.core.nth.call(null,vec__45011,(2),null);
var datetime = cljs.core.nth.call(null,vec__45011,(3),null);
var zero_time = cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime)));
var works = cljs.core.reduce.call(null,((function (zero_time,map__45010,map__45010__$1,db,vec__45011,_,workplace_id,workers,datetime){
return (function (m,p__45015){
var map__45016 = p__45015;
var map__45016__$1 = ((((!((map__45016 == null)))?((((map__45016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45016):map__45016);
var object_id = cljs.core.get.call(null,map__45016__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc.call(null,m,object_id,cljs.core.mapv.call(null,((function (map__45016,map__45016__$1,object_id,zero_time,map__45010,map__45010__$1,db,vec__45011,_,workplace_id,workers,datetime){
return (function (datetime__$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$1,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"holiday"], null);
});})(map__45016,map__45016__$1,object_id,zero_time,map__45010,map__45010__$1,db,vec__45011,_,workplace_id,workers,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
});})(zero_time,map__45010,map__45010__$1,db,vec__45011,_,workplace_id,workers,datetime))
,cljs.core.PersistentArrayMap.EMPTY,workers);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var $ = db;
var $__$1 = cljs.core.reduce.call(null,((function ($,zero_time,works,map__45010,map__45010__$1,db,vec__45011,_,workplace_id,workers,datetime){
return (function (r,w){
return eckersdorf.work_schedule.utils.remove_multiple_work.call(null,r,w);
});})($,zero_time,works,map__45010,map__45010__$1,db,vec__45011,_,workplace_id,workers,datetime))
,$,cljs.core.vals.call(null,works));
return cljs.core.reduce.call(null,((function ($,$__$1,zero_time,works,map__45010,map__45010__$1,db,vec__45011,_,workplace_id,workers,datetime){
return (function (r,w){
var worker_id = new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,w));
return cljs.core.update_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null),((function (worker_id,$,$__$1,zero_time,works,map__45010,map__45010__$1,db,vec__45011,_,workplace_id,workers,datetime){
return (function (works__$1){
return cljs.core.into.call(null,works__$1,w);
});})(worker_id,$,$__$1,zero_time,works,map__45010,map__45010__$1,db,vec__45011,_,workplace_id,workers,datetime))
);
});})($,$__$1,zero_time,works,map__45010,map__45010__$1,db,vec__45011,_,workplace_id,workers,datetime))
,$__$1,cljs.core.vals.call(null,works));
})(),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-all-working-days-in-month","work-schedule/calculate-all-working-days-in-month",1968649364)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),(function (p__45018,p__45019){
var map__45020 = p__45018;
var map__45020__$1 = ((((!((map__45020 == null)))?((((map__45020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45020):map__45020);
var db = cljs.core.get.call(null,map__45020__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45021 = p__45019;
var _ = cljs.core.nth.call(null,vec__45021,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__45021,(1),null);
var workers = cljs.core.nth.call(null,vec__45021,(2),null);
var datetime = cljs.core.nth.call(null,vec__45021,(3),null);
var zero_time = cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime)));
var works = cljs.core.reduce.call(null,((function (zero_time,map__45020,map__45020__$1,db,vec__45021,_,workplace_id,workers,datetime){
return (function (m,p__45025){
var map__45026 = p__45025;
var map__45026__$1 = ((((!((map__45026 == null)))?((((map__45026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45026):map__45026);
var object_id = cljs.core.get.call(null,map__45026__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return cljs.core.assoc.call(null,m,object_id,cljs.core.mapv.call(null,((function (map__45026,map__45026__$1,object_id,zero_time,map__45020,map__45020__$1,db,vec__45021,_,workplace_id,workers,datetime){
return (function (datetime__$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$1], null);
});})(map__45026,map__45026__$1,object_id,zero_time,map__45020,map__45020__$1,db,vec__45021,_,workplace_id,workers,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
});})(zero_time,map__45020,map__45020__$1,db,vec__45021,_,workplace_id,workers,datetime))
,cljs.core.PersistentArrayMap.EMPTY,workers);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var $ = db;
return cljs.core.reduce.call(null,((function ($,zero_time,works,map__45020,map__45020__$1,db,vec__45021,_,workplace_id,workers,datetime){
return (function (r,w){
return eckersdorf.work_schedule.utils.remove_multiple_work.call(null,r,w);
});})($,zero_time,works,map__45020,map__45020__$1,db,vec__45021,_,workplace_id,workers,datetime))
,$,cljs.core.vals.call(null,works));
})(),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-all-working-days-in-month","work-schedule/calculate-all-working-days-in-month",1968649364)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","clear","work-schedule/clear",209389428),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300),(function (p__45028,_){
var map__45029 = p__45028;
var map__45029__$1 = ((((!((map__45029 == null)))?((((map__45029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45029.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45029):map__45029);
var db = cljs.core.get.call(null,map__45029__$1,new cljs.core.Keyword(null,"db","db",993250759));
var workplace_id = new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db);
var datetime = new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime)], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-success","work-schedule/ajax.get-work-schedule-success",753020555)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-failure","work-schedule/ajax.get-work-schedule-failure",-1814016044)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-success","work-schedule/ajax.get-work-schedule-success",753020555),(function (p__45031,p__45032){
var map__45033 = p__45031;
var map__45033__$1 = ((((!((map__45033 == null)))?((((map__45033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45033):map__45033);
var db = cljs.core.get.call(null,map__45033__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45034 = p__45032;
var _ = cljs.core.nth.call(null,vec__45034,(0),null);
var map__45037 = cljs.core.nth.call(null,vec__45034,(1),null);
var map__45037__$1 = ((((!((map__45037 == null)))?((((map__45037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45037):map__45037);
var data = cljs.core.get.call(null,map__45037__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.reduce.call(null,((function (map__45033,map__45033__$1,db,vec__45034,_,map__45037,map__45037__$1,data){
return (function (r,p__45040){
var vec__45041 = p__45040;
var k = cljs.core.nth.call(null,vec__45041,(0),null);
var v = cljs.core.nth.call(null,vec__45041,(1),null);
return cljs.core.assoc.call(null,r,cljs.core.name.call(null,k),cljs.core.map.call(null,((function (vec__45041,k,v,map__45033,map__45033__$1,db,vec__45034,_,map__45037,map__45037__$1,data){
return (function (m){
return cljs.core.update.call(null,m,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.from_string);
});})(vec__45041,k,v,map__45033,map__45033__$1,db,vec__45034,_,map__45037,map__45037__$1,data))
,v));
});})(map__45033,map__45033__$1,db,vec__45034,_,map__45037,map__45037__$1,data))
,cljs.core.PersistentArrayMap.EMPTY,data)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-all-working-days-in-month","work-schedule/calculate-all-working-days-in-month",1968649364)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie pobrano harmonogram pracy",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-failure","work-schedule/ajax.get-work-schedule-failure",-1814016044),(function (p__45044,p__45045){
var map__45046 = p__45044;
var map__45046__$1 = ((((!((map__45046 == null)))?((((map__45046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45046):map__45046);
var db = cljs.core.get.call(null,map__45046__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45047 = p__45045;
var _ = cljs.core.nth.call(null,vec__45047,(0),null);
var map__45050 = cljs.core.nth.call(null,vec__45047,(1),null);
var map__45050__$1 = ((((!((map__45050 == null)))?((((map__45050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45050):map__45050);
var response = map__45050__$1;
var status_text = cljs.core.get.call(null,map__45050__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy pobieraniu harmonogramu pracy: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.post-work-schedule","work-schedule/ajax.post-work-schedule",378268198),(function (p__45053,_){
var map__45054 = p__45053;
var map__45054__$1 = ((((!((map__45054 == null)))?((((map__45054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45054):map__45054);
var db = cljs.core.get.call(null,map__45054__$1,new cljs.core.Keyword(null,"db","db",993250759));
var works = cljs.core.flatten.call(null,cljs.core.vals.call(null,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),works,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-success","work-schedule/ajax.post-work-schedule-success",-587325761)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-failure","work-schedule/ajax.post-work-schedule-failure",1488934759)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-success","work-schedule/ajax.post-work-schedule-success",-587325761),(function (p__45056,p__45057){
var map__45058 = p__45056;
var map__45058__$1 = ((((!((map__45058 == null)))?((((map__45058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45058):map__45058);
var db = cljs.core.get.call(null,map__45058__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45059 = p__45057;
var _ = cljs.core.nth.call(null,vec__45059,(0),null);
var map__45062 = cljs.core.nth.call(null,vec__45059,(1),null);
var map__45062__$1 = ((((!((map__45062 == null)))?((((map__45062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45062):map__45062);
var data = cljs.core.get.call(null,map__45062__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.reduce.call(null,((function (map__45058,map__45058__$1,db,vec__45059,_,map__45062,map__45062__$1,data){
return (function (r,p__45065){
var vec__45066 = p__45065;
var k = cljs.core.nth.call(null,vec__45066,(0),null);
var v = cljs.core.nth.call(null,vec__45066,(1),null);
return cljs.core.assoc.call(null,r,cljs.core.name.call(null,k),cljs.core.map.call(null,((function (vec__45066,k,v,map__45058,map__45058__$1,db,vec__45059,_,map__45062,map__45062__$1,data){
return (function (m){
return cljs.core.update.call(null,m,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.from_string);
});})(vec__45066,k,v,map__45058,map__45058__$1,db,vec__45059,_,map__45062,map__45062__$1,data))
,v));
});})(map__45058,map__45058__$1,db,vec__45059,_,map__45062,map__45062__$1,data))
,cljs.core.PersistentArrayMap.EMPTY,data)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","unset-edited","work-schedule/unset-edited",-673180065)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie zapisano harmonogram pracy",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-failure","work-schedule/ajax.post-work-schedule-failure",1488934759),(function (p__45069,p__45070){
var map__45071 = p__45069;
var map__45071__$1 = ((((!((map__45071 == null)))?((((map__45071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45071):map__45071);
var db = cljs.core.get.call(null,map__45071__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45072 = p__45070;
var _ = cljs.core.nth.call(null,vec__45072,(0),null);
var map__45075 = cljs.core.nth.call(null,vec__45072,(1),null);
var map__45075__$1 = ((((!((map__45075 == null)))?((((map__45075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45075):map__45075);
var response = map__45075__$1;
var status_text = cljs.core.get.call(null,map__45075__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("work-schedule","ajax.post-work-schedule","work-schedule/ajax.post-work-schedule",378268198),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy zapisywaniu harmonogram pracy: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule","work-schedule/ajax.delete-work-schedule",-339546076),(function (p__45078,_){
var map__45079 = p__45078;
var map__45079__$1 = ((((!((map__45079 == null)))?((((map__45079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45079):map__45079);
var db = cljs.core.get.call(null,map__45079__$1,new cljs.core.Keyword(null,"db","db",993250759));
var workplace_id = new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db);
var datetime = new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-success","work-schedule/ajax.delete-work-schedule-success",-2066310923)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-failure","work-schedule/ajax.delete-work-schedule-failure",-225767126)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-success","work-schedule/ajax.delete-work-schedule-success",-2066310923),(function (p__45081,p__45082){
var map__45083 = p__45081;
var map__45083__$1 = ((((!((map__45083 == null)))?((((map__45083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45083):map__45083);
var db = cljs.core.get.call(null,map__45083__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45084 = p__45082;
var _ = cljs.core.nth.call(null,vec__45084,(0),null);
var map__45087 = cljs.core.nth.call(null,vec__45084,(1),null);
var map__45087__$1 = ((((!((map__45087 == null)))?((((map__45087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45087):map__45087);
var data = cljs.core.get.call(null,map__45087__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","unset-edited","work-schedule/unset-edited",-673180065)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to harmonogram pracy",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-failure","work-schedule/ajax.delete-work-schedule-failure",-225767126),(function (p__45090,p__45091){
var map__45092 = p__45090;
var map__45092__$1 = ((((!((map__45092 == null)))?((((map__45092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45092):map__45092);
var db = cljs.core.get.call(null,map__45092__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45093 = p__45091;
var _ = cljs.core.nth.call(null,vec__45093,(0),null);
var map__45096 = cljs.core.nth.call(null,vec__45093,(1),null);
var map__45096__$1 = ((((!((map__45096 == null)))?((((map__45096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45096):map__45096);
var response = map__45096__$1;
var status_text = cljs.core.get.call(null,map__45096__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule","work-schedule/ajax.delete-work-schedule",-339546076),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu harmonogramu pracy: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","sync","work-schedule/sync",1459023889),(function (p__45099,_){
var map__45100 = p__45099;
var map__45100__$1 = ((((!((map__45100 == null)))?((((map__45100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45100):map__45100);
var db = cljs.core.get.call(null,map__45100__$1,new cljs.core.Keyword(null,"db","db",993250759));
var works = cljs.core.flatten.call(null,cljs.core.vals.call(null,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((!(cljs.core.empty_QMARK_.call(null,works)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.post-work-schedule","work-schedule/ajax.post-work-schedule",378268198)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule","work-schedule/ajax.delete-work-schedule",-339546076)], null))], null);
}));

//# sourceMappingURL=events.js.map?rel=1510609300102
