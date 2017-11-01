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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","show-dialog","work-schedule/show-dialog",1852194113),(function (db,p__47279){
var vec__47280 = p__47279;
var _ = cljs.core.nth.call(null,vec__47280,(0),null);
var type = cljs.core.nth.call(null,vec__47280,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","hide-dialog","work-schedule/hide-dialog",-1968439396),(function (db,p__47283){
var vec__47284 = p__47283;
var _ = cljs.core.nth.call(null,vec__47284,(0),null);
var type = cljs.core.nth.call(null,vec__47284,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","toggle-print","work-schedule/toggle-print",1363518021),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("work-schedule","print?","work-schedule/print?",-1907155809),cljs.core.not);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-workplace","work-schedule/set-workplace",-600467261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (p__47287,p__47288){
var map__47289 = p__47287;
var map__47289__$1 = ((((!((map__47289 == null)))?((((map__47289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47289):map__47289);
var db = cljs.core.get.call(null,map__47289__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47290 = p__47288;
var _ = cljs.core.nth.call(null,vec__47290,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__47290,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962),workplace_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-date","work-schedule/set-date",-1172573652),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (p__47294,p__47295){
var map__47296 = p__47294;
var map__47296__$1 = ((((!((map__47296 == null)))?((((map__47296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47296):map__47296);
var db = cljs.core.get.call(null,map__47296__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47297 = p__47295;
var _ = cljs.core.nth.call(null,vec__47297,(0),null);
var date = cljs.core.nth.call(null,vec__47297,(1),null);
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
return (function (p1__47301_SHARP_){
return cljs_time.predicates.weekday_QMARK_.call(null,p1__47301_SHARP_);
});})(datetime,begin_time,end_time))
,cljs_time.periodic.periodic_seq.call(null,begin_time,end_time,cljs_time.core.days.call(null,(1))))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),(function (db,p__47303){
var vec__47304 = p__47303;
var _ = cljs.core.nth.call(null,vec__47304,(0),null);
var map__47307 = cljs.core.nth.call(null,vec__47304,(1),null);
var map__47307__$1 = ((((!((map__47307 == null)))?((((map__47307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47307):map__47307);
var worker_id = cljs.core.get.call(null,map__47307__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var datetime = cljs.core.get.call(null,map__47307__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var begin_time = cljs_time.core.first_day_of_the_month.call(null,datetime);
var end_time = cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,begin_time),cljs_time.core.days.call(null,(1)));
var hours_worked = cljs.core.count.call(null,cljs.core.filter.call(null,((function (begin_time,end_time,vec__47304,_,map__47307,map__47307__$1,worker_id,datetime){
return (function (p1__47302_SHARP_){
var and__30237__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(p1__47302_SHARP_));
if(and__30237__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__47302_SHARP_));
} else {
return and__30237__auto__;
}
});})(begin_time,end_time,vec__47304,_,map__47307,map__47307__$1,worker_id,datetime))
,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"hours-worked-in-month","hours-worked-in-month",-1178358959)], null),hours_worked);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),(function (db,p__47310){
var vec__47311 = p__47310;
var _ = cljs.core.nth.call(null,vec__47311,(0),null);
var map__47314 = cljs.core.nth.call(null,vec__47311,(1),null);
var map__47314__$1 = ((((!((map__47314 == null)))?((((map__47314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47314):map__47314);
var worker_id = cljs.core.get.call(null,map__47314__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var hours_worked = cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (vec__47311,_,map__47314,map__47314__$1,worker_id){
return (function (p__47316){
var map__47317 = p__47316;
var map__47317__$1 = ((((!((map__47317 == null)))?((((map__47317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47317):map__47317);
var datetime = cljs.core.get.call(null,map__47317__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__47311,_,map__47314,map__47314__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__47311,_,map__47314,map__47314__$1,worker_id){
return (function (p1__47309_SHARP_){
var and__30237__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(p1__47309_SHARP_));
if(and__30237__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__47309_SHARP_));
} else {
return and__30237__auto__;
}
});})(vec__47311,_,map__47314,map__47314__$1,worker_id))
,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)))));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"days-worked-in-month","days-worked-in-month",-1174346359)], null),hours_worked);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),(function (db,p__47320){
var vec__47321 = p__47320;
var _ = cljs.core.nth.call(null,vec__47321,(0),null);
var map__47324 = cljs.core.nth.call(null,vec__47321,(1),null);
var map__47324__$1 = ((((!((map__47324 == null)))?((((map__47324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47324):map__47324);
var worker_id = cljs.core.get.call(null,map__47324__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var c = cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (vec__47321,_,map__47324,map__47324__$1,worker_id){
return (function (p__47326){
var map__47327 = p__47326;
var map__47327__$1 = ((((!((map__47327 == null)))?((((map__47327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47327):map__47327);
var datetime = cljs.core.get.call(null,map__47327__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__47321,_,map__47324,map__47324__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__47321,_,map__47324,map__47324__$1,worker_id){
return (function (p1__47319_SHARP_){
var and__30237__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(p1__47319_SHARP_));
if(and__30237__auto__){
var and__30237__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__47319_SHARP_));
if(cljs.core.truth_(and__30237__auto____$1)){
return cljs_time.predicates.saturday_QMARK_.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__47319_SHARP_));
} else {
return and__30237__auto____$1;
}
} else {
return and__30237__auto__;
}
});})(vec__47321,_,map__47324,map__47324__$1,worker_id))
,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)))));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"saturdays-worked-in-month","saturdays-worked-in-month",-983473622)], null),c);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),(function (db,p__47330){
var vec__47331 = p__47330;
var _ = cljs.core.nth.call(null,vec__47331,(0),null);
var map__47334 = cljs.core.nth.call(null,vec__47331,(1),null);
var map__47334__$1 = ((((!((map__47334 == null)))?((((map__47334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47334):map__47334);
var worker_id = cljs.core.get.call(null,map__47334__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var c = cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (vec__47331,_,map__47334,map__47334__$1,worker_id){
return (function (p__47336){
var map__47337 = p__47336;
var map__47337__$1 = ((((!((map__47337 == null)))?((((map__47337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47337):map__47337);
var datetime = cljs.core.get.call(null,map__47337__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__47331,_,map__47334,map__47334__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__47331,_,map__47334,map__47334__$1,worker_id){
return (function (p1__47329_SHARP_){
var and__30237__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(p1__47329_SHARP_));
if(and__30237__auto__){
var and__30237__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__47329_SHARP_));
if(cljs.core.truth_(and__30237__auto____$1)){
return cljs_time.predicates.sunday_QMARK_.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__47329_SHARP_));
} else {
return and__30237__auto____$1;
}
} else {
return and__30237__auto__;
}
});})(vec__47331,_,map__47334,map__47334__$1,worker_id))
,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)))));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"sundays-worked-in-month","sundays-worked-in-month",1551954077)], null),c);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),(function (db,p__47340){
var vec__47341 = p__47340;
var _ = cljs.core.nth.call(null,vec__47341,(0),null);
var map__47344 = cljs.core.nth.call(null,vec__47341,(1),null);
var map__47344__$1 = ((((!((map__47344 == null)))?((((map__47344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47344):map__47344);
var worker_id = cljs.core.get.call(null,map__47344__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var c = cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (vec__47341,_,map__47344,map__47344__$1,worker_id){
return (function (p__47346){
var map__47347 = p__47346;
var map__47347__$1 = ((((!((map__47347 == null)))?((((map__47347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47347):map__47347);
var datetime = cljs.core.get.call(null,map__47347__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__47341,_,map__47344,map__47344__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__47341,_,map__47344,map__47344__$1,worker_id){
return (function (p1__47339_SHARP_){
var and__30237__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(p1__47339_SHARP_));
if(and__30237__auto__){
var and__30237__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__47339_SHARP_));
if(cljs.core.truth_(and__30237__auto____$1)){
return cljs.core._EQ_.call(null,(6),cljs_time.core.hour.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__47339_SHARP_)));
} else {
return and__30237__auto____$1;
}
} else {
return and__30237__auto__;
}
});})(vec__47341,_,map__47344,map__47344__$1,worker_id))
,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)))));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"first-changes-worked-in-month","first-changes-worked-in-month",-146640955)], null),c);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),(function (db,p__47350){
var vec__47351 = p__47350;
var _ = cljs.core.nth.call(null,vec__47351,(0),null);
var map__47354 = cljs.core.nth.call(null,vec__47351,(1),null);
var map__47354__$1 = ((((!((map__47354 == null)))?((((map__47354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47354):map__47354);
var worker_id = cljs.core.get.call(null,map__47354__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var c = cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (vec__47351,_,map__47354,map__47354__$1,worker_id){
return (function (p__47356){
var map__47357 = p__47356;
var map__47357__$1 = ((((!((map__47357 == null)))?((((map__47357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47357):map__47357);
var datetime = cljs.core.get.call(null,map__47357__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs_time.core.day.call(null,datetime);
});})(vec__47351,_,map__47354,map__47354__$1,worker_id))
,cljs.core.filter.call(null,((function (vec__47351,_,map__47354,map__47354__$1,worker_id){
return (function (p1__47349_SHARP_){
var and__30237__auto__ = cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(p1__47349_SHARP_));
if(and__30237__auto__){
var and__30237__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["butcher",null,"seller",null], null), null).call(null,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(p1__47349_SHARP_));
if(cljs.core.truth_(and__30237__auto____$1)){
return cljs.core._EQ_.call(null,(20),cljs_time.core.hour.call(null,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__47349_SHARP_)));
} else {
return and__30237__auto____$1;
}
} else {
return and__30237__auto__;
}
});})(vec__47351,_,map__47354,map__47354__$1,worker_id))
,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db)))));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"second-changes-worked-in-month","second-changes-worked-in-month",820237509)], null),c);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),(function (p__47359,p__47360){
var map__47361 = p__47359;
var map__47361__$1 = ((((!((map__47361 == null)))?((((map__47361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47361):map__47361);
var db = cljs.core.get.call(null,map__47361__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47362 = p__47360;
var _ = cljs.core.nth.call(null,vec__47362,(0),null);
var work = cljs.core.nth.call(null,vec__47362,(1),null);
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.distinct.call(null,cljs.core.conj.call(null,schedule,work))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","schedule-multiple-work","work-schedule/schedule-multiple-work",-1082639016),(function (p__47366,p__47367){
var map__47368 = p__47366;
var map__47368__$1 = ((((!((map__47368 == null)))?((((map__47368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47368):map__47368);
var db = cljs.core.get.call(null,map__47368__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47369 = p__47367;
var _ = cljs.core.nth.call(null,vec__47369,(0),null);
var works = cljs.core.nth.call(null,vec__47369,(1),null);
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.distinct.call(null,cljs.core.into.call(null,schedule,works))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),(function (p__47373,p__47374){
var map__47375 = p__47373;
var map__47375__$1 = ((((!((map__47375 == null)))?((((map__47375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47375):map__47375);
var db = cljs.core.get.call(null,map__47375__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47376 = p__47374;
var _ = cljs.core.nth.call(null,vec__47376,(0),null);
var map__47379 = cljs.core.nth.call(null,vec__47376,(1),null);
var map__47379__$1 = ((((!((map__47379 == null)))?((((map__47379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47379):map__47379);
var work = map__47379__$1;
var worker_id = cljs.core.get.call(null,map__47379__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__47379__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__47379__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_work.call(null,db,work),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),(function (p__47382,p__47383){
var map__47384 = p__47382;
var map__47384__$1 = ((((!((map__47384 == null)))?((((map__47384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47384):map__47384);
var db = cljs.core.get.call(null,map__47384__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47385 = p__47383;
var _ = cljs.core.nth.call(null,vec__47385,(0),null);
var works = cljs.core.nth.call(null,vec__47385,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),(function (p__47389,p__47390){
var map__47391 = p__47389;
var map__47391__$1 = ((((!((map__47391 == null)))?((((map__47391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47391):map__47391);
var db = cljs.core.get.call(null,map__47391__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47392 = p__47390;
var _ = cljs.core.nth.call(null,vec__47392,(0),null);
var work = cljs.core.nth.call(null,vec__47392,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),work], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","update-multiple-work","work-schedule/update-multiple-work",1219497502),(function (p__47396,p__47397){
var map__47398 = p__47396;
var map__47398__$1 = ((((!((map__47398 == null)))?((((map__47398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47398):map__47398);
var db = cljs.core.get.call(null,map__47398__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47399 = p__47397;
var _ = cljs.core.nth.call(null,vec__47399,(0),null);
var works = cljs.core.nth.call(null,vec__47399,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-multiple-work","work-schedule/remove-multiple-work",647477489),works], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-multiple-work","work-schedule/schedule-multiple-work",-1082639016),works], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),(function (p__47403,p__47404){
var map__47405 = p__47403;
var map__47405__$1 = ((((!((map__47405 == null)))?((((map__47405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47405):map__47405);
var db = cljs.core.get.call(null,map__47405__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47406 = p__47404;
var _ = cljs.core.nth.call(null,vec__47406,(0),null);
var map__47409 = cljs.core.nth.call(null,vec__47406,(1),null);
var map__47409__$1 = ((((!((map__47409 == null)))?((((map__47409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47409):map__47409);
var work = map__47409__$1;
var worker_id = cljs.core.get.call(null,map__47409__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__47409__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__47409__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = datetime;
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.mapv.call(null,((function (datetime__$1,zero_time,map__47405,map__47405__$1,db,vec__47406,_,map__47409,map__47409__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$2){
return cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2);
});})(datetime__$1,zero_time,map__47405,map__47405__$1,db,vec__47406,_,map__47409,map__47409__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),(function (p__47412,p__47413){
var map__47414 = p__47412;
var map__47414__$1 = ((((!((map__47414 == null)))?((((map__47414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47414):map__47414);
var db = cljs.core.get.call(null,map__47414__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47415 = p__47413;
var _ = cljs.core.nth.call(null,vec__47415,(0),null);
var map__47418 = cljs.core.nth.call(null,vec__47415,(1),null);
var map__47418__$1 = ((((!((map__47418 == null)))?((((map__47418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47418):map__47418);
var work = map__47418__$1;
var worker_id = cljs.core.get.call(null,map__47418__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__47418__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__47418__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = datetime;
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.mapv.call(null,((function (datetime__$1,zero_time,map__47414,map__47414__$1,db,vec__47415,_,map__47418,map__47418__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$2){
return cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"vacation");
});})(datetime__$1,zero_time,map__47414,map__47414__$1,db,vec__47415,_,map__47418,map__47418__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.call(null,eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),((function (datetime__$1,zero_time,works,map__47414,map__47414__$1,db,vec__47415,_,map__47418,map__47418__$1,work,worker_id,workplace_id,datetime){
return (function (schedule){
return cljs.core.distinct.call(null,cljs.core.into.call(null,schedule,works));
});})(datetime__$1,zero_time,works,map__47414,map__47414__$1,db,vec__47415,_,map__47418,map__47418__$1,work,worker_id,workplace_id,datetime))
),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-vacation","work-schedule/remove-vacation",-149059750),(function (p__47421,p__47422){
var map__47423 = p__47421;
var map__47423__$1 = ((((!((map__47423 == null)))?((((map__47423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47423):map__47423);
var db = cljs.core.get.call(null,map__47423__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47424 = p__47422;
var _ = cljs.core.nth.call(null,vec__47424,(0),null);
var map__47427 = cljs.core.nth.call(null,vec__47424,(1),null);
var map__47427__$1 = ((((!((map__47427 == null)))?((((map__47427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47427):map__47427);
var work = map__47427__$1;
var worker_id = cljs.core.get.call(null,map__47427__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__47427__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__47427__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var zero_time = cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime)));
var works = cljs.core.mapv.call(null,((function (zero_time,map__47423,map__47423__$1,db,vec__47424,_,map__47427,map__47427__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$1){
return cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$1);
});})(zero_time,map__47423,map__47423__$1,db,vec__47424,_,map__47427,map__47427__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),work], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),(function (p__47430,p__47431){
var map__47432 = p__47430;
var map__47432__$1 = ((((!((map__47432 == null)))?((((map__47432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47432):map__47432);
var db = cljs.core.get.call(null,map__47432__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47433 = p__47431;
var _ = cljs.core.nth.call(null,vec__47433,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__47433,(1),null);
var workers = cljs.core.nth.call(null,vec__47433,(2),null);
var datetime = cljs.core.nth.call(null,vec__47433,(3),null);
var datetime__$1 = datetime;
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (datetime__$1,zero_time,map__47432,map__47432__$1,db,vec__47433,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__47437(s__47438){
return (new cljs.core.LazySeq(null,((function (datetime__$1,zero_time,map__47432,map__47432__$1,db,vec__47433,_,workplace_id,workers,datetime){
return (function (){
var s__47438__$1 = s__47438;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__47438__$1);
if(temp__5290__auto__){
var xs__5843__auto__ = temp__5290__auto__;
var map__47443 = cljs.core.first.call(null,xs__5843__auto__);
var map__47443__$1 = ((((!((map__47443 == null)))?((((map__47443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47443):map__47443);
var object_id = cljs.core.get.call(null,map__47443__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__47443__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__47443__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__47443__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
var iterys__31127__auto__ = ((function (s__47438__$1,map__47443,map__47443__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__47432,map__47432__$1,db,vec__47433,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__47437_$_iter__47439(s__47440){
return (new cljs.core.LazySeq(null,((function (s__47438__$1,map__47443,map__47443__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__47432,map__47432__$1,db,vec__47433,_,workplace_id,workers,datetime){
return (function (){
var s__47440__$1 = s__47440;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__47440__$1);
if(temp__5290__auto____$1){
var s__47440__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47440__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__47440__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__47442 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__47441 = (0);
while(true){
if((i__47441 < size__31130__auto__)){
var datetime__$2 = cljs.core._nth.call(null,c__31129__auto__,i__47441);
cljs.core.chunk_append.call(null,b__47442,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"holiday"], null));

var G__47445 = (i__47441 + (1));
i__47441 = G__47445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47442),eckersdorf$work_schedule$events$iter__47437_$_iter__47439.call(null,cljs.core.chunk_rest.call(null,s__47440__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47442),null);
}
} else {
var datetime__$2 = cljs.core.first.call(null,s__47440__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2,new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"holiday"], null),eckersdorf$work_schedule$events$iter__47437_$_iter__47439.call(null,cljs.core.rest.call(null,s__47440__$2)));
}
} else {
return null;
}
break;
}
});})(s__47438__$1,map__47443,map__47443__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__47432,map__47432__$1,db,vec__47433,_,workplace_id,workers,datetime))
,null,null));
});})(s__47438__$1,map__47443,map__47443__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__47432,map__47432__$1,db,vec__47433,_,workplace_id,workers,datetime))
;
var fs__31128__auto__ = cljs.core.seq.call(null,iterys__31127__auto__.call(null,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
if(fs__31128__auto__){
return cljs.core.concat.call(null,fs__31128__auto__,eckersdorf$work_schedule$events$iter__47437.call(null,cljs.core.rest.call(null,s__47438__$1)));
} else {
var G__47446 = cljs.core.rest.call(null,s__47438__$1);
s__47438__$1 = G__47446;
continue;
}
} else {
return null;
}
break;
}
});})(datetime__$1,zero_time,map__47432,map__47432__$1,db,vec__47433,_,workplace_id,workers,datetime))
,null,null));
});})(datetime__$1,zero_time,map__47432,map__47432__$1,db,vec__47433,_,workplace_id,workers,datetime))
;
return iter__31131__auto__.call(null,workers);
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.call(null,eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),((function (datetime__$1,zero_time,works,map__47432,map__47432__$1,db,vec__47433,_,workplace_id,workers,datetime){
return (function (schedule){
return cljs.core.distinct.call(null,cljs.core.into.call(null,schedule,works));
});})(datetime__$1,zero_time,works,map__47432,map__47432__$1,db,vec__47433,_,workplace_id,workers,datetime))
),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),(function (p__47447,p__47448){
var map__47449 = p__47447;
var map__47449__$1 = ((((!((map__47449 == null)))?((((map__47449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47449):map__47449);
var db = cljs.core.get.call(null,map__47449__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47450 = p__47448;
var _ = cljs.core.nth.call(null,vec__47450,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__47450,(1),null);
var workers = cljs.core.nth.call(null,vec__47450,(2),null);
var datetime = cljs.core.nth.call(null,vec__47450,(3),null);
var datetime__$1 = datetime;
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (datetime__$1,zero_time,map__47449,map__47449__$1,db,vec__47450,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__47454(s__47455){
return (new cljs.core.LazySeq(null,((function (datetime__$1,zero_time,map__47449,map__47449__$1,db,vec__47450,_,workplace_id,workers,datetime){
return (function (){
var s__47455__$1 = s__47455;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__47455__$1);
if(temp__5290__auto__){
var xs__5843__auto__ = temp__5290__auto__;
var map__47460 = cljs.core.first.call(null,xs__5843__auto__);
var map__47460__$1 = ((((!((map__47460 == null)))?((((map__47460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47460):map__47460);
var object_id = cljs.core.get.call(null,map__47460__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__47460__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__47460__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__47460__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
var iterys__31127__auto__ = ((function (s__47455__$1,map__47460,map__47460__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__47449,map__47449__$1,db,vec__47450,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__47454_$_iter__47456(s__47457){
return (new cljs.core.LazySeq(null,((function (s__47455__$1,map__47460,map__47460__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__47449,map__47449__$1,db,vec__47450,_,workplace_id,workers,datetime){
return (function (){
var s__47457__$1 = s__47457;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__47457__$1);
if(temp__5290__auto____$1){
var s__47457__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47457__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__47457__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__47459 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__47458 = (0);
while(true){
if((i__47458 < size__31130__auto__)){
var datetime__$2 = cljs.core._nth.call(null,c__31129__auto__,i__47458);
cljs.core.chunk_append.call(null,b__47459,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2], null));

var G__47462 = (i__47458 + (1));
i__47458 = G__47462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47459),eckersdorf$work_schedule$events$iter__47454_$_iter__47456.call(null,cljs.core.chunk_rest.call(null,s__47457__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47459),null);
}
} else {
var datetime__$2 = cljs.core.first.call(null,s__47457__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),datetime__$2], null),eckersdorf$work_schedule$events$iter__47454_$_iter__47456.call(null,cljs.core.rest.call(null,s__47457__$2)));
}
} else {
return null;
}
break;
}
});})(s__47455__$1,map__47460,map__47460__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__47449,map__47449__$1,db,vec__47450,_,workplace_id,workers,datetime))
,null,null));
});})(s__47455__$1,map__47460,map__47460__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,map__47449,map__47449__$1,db,vec__47450,_,workplace_id,workers,datetime))
;
var fs__31128__auto__ = cljs.core.seq.call(null,iterys__31127__auto__.call(null,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
if(fs__31128__auto__){
return cljs.core.concat.call(null,fs__31128__auto__,eckersdorf$work_schedule$events$iter__47454.call(null,cljs.core.rest.call(null,s__47455__$1)));
} else {
var G__47463 = cljs.core.rest.call(null,s__47455__$1);
s__47455__$1 = G__47463;
continue;
}
} else {
return null;
}
break;
}
});})(datetime__$1,zero_time,map__47449,map__47449__$1,db,vec__47450,_,workplace_id,workers,datetime))
,null,null));
});})(datetime__$1,zero_time,map__47449,map__47449__$1,db,vec__47450,_,workplace_id,workers,datetime))
;
return iter__31131__auto__.call(null,workers);
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),eckersdorf.work_schedule.utils.remove_multiple_work.call(null,db,works),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-hours-worked-in-month","work-schedule/calculate-hours-worked-in-month",28405095),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-days-worked-in-month","work-schedule/calculate-days-worked-in-month",2005154371),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-saturdays-worked-in-month","work-schedule/calculate-saturdays-worked-in-month",-569653985),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-sundays-worked-in-month","work-schedule/calculate-sundays-worked-in-month",-213405750),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-first-changes-worked-in-month","work-schedule/calculate-first-changes-worked-in-month",1368017319),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","calculate-second-changes-worked-in-month","work-schedule/calculate-second-changes-worked-in-month",-1947005161),cljs.core.first.call(null,works)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","set-edited","work-schedule/set-edited",-962845982)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","clear","work-schedule/clear",209389428),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300),(function (p__47464,_){
var map__47465 = p__47464;
var map__47465__$1 = ((((!((map__47465 == null)))?((((map__47465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47465):map__47465);
var db = cljs.core.get.call(null,map__47465__$1,new cljs.core.Keyword(null,"db","db",993250759));
var workplace_id = new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db);
var datetime = new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime)], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-success","work-schedule/ajax.get-work-schedule-success",753020555)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-failure","work-schedule/ajax.get-work-schedule-failure",-1814016044)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-success","work-schedule/ajax.get-work-schedule-success",753020555),(function (p__47467,p__47468){
var map__47469 = p__47467;
var map__47469__$1 = ((((!((map__47469 == null)))?((((map__47469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47469):map__47469);
var db = cljs.core.get.call(null,map__47469__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47470 = p__47468;
var _ = cljs.core.nth.call(null,vec__47470,(0),null);
var map__47473 = cljs.core.nth.call(null,vec__47470,(1),null);
var map__47473__$1 = ((((!((map__47473 == null)))?((((map__47473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47473):map__47473);
var data = cljs.core.get.call(null,map__47473__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.mapv.call(null,((function (map__47469,map__47469__$1,db,vec__47470,_,map__47473,map__47473__$1,data){
return (function (work){
return cljs.core.update.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.from_string);
});})(map__47469,map__47469__$1,db,vec__47470,_,map__47473,map__47473__$1,data))
,data)),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie pobrano harmonogram pracy",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.get-work-schedule-failure","work-schedule/ajax.get-work-schedule-failure",-1814016044),(function (p__47476,p__47477){
var map__47478 = p__47476;
var map__47478__$1 = ((((!((map__47478 == null)))?((((map__47478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47478):map__47478);
var db = cljs.core.get.call(null,map__47478__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47479 = p__47477;
var _ = cljs.core.nth.call(null,vec__47479,(0),null);
var map__47482 = cljs.core.nth.call(null,vec__47479,(1),null);
var map__47482__$1 = ((((!((map__47482 == null)))?((((map__47482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47482):map__47482);
var response = map__47482__$1;
var status_text = cljs.core.get.call(null,map__47482__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("work-schedule","ajax.get-work-schedule","work-schedule/ajax.get-work-schedule",-1297058300),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy pobieraniu harmonogramu pracy: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.post-work-schedule","work-schedule/ajax.post-work-schedule",378268198),(function (p__47485,_){
var map__47486 = p__47485;
var map__47486__$1 = ((((!((map__47486 == null)))?((((map__47486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47486):map__47486);
var db = cljs.core.get.call(null,map__47486__$1,new cljs.core.Keyword(null,"db","db",993250759));
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),schedule,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-success","work-schedule/ajax.post-work-schedule-success",-587325761)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-failure","work-schedule/ajax.post-work-schedule-failure",1488934759)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-success","work-schedule/ajax.post-work-schedule-success",-587325761),(function (p__47488,p__47489){
var map__47490 = p__47488;
var map__47490__$1 = ((((!((map__47490 == null)))?((((map__47490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47490):map__47490);
var db = cljs.core.get.call(null,map__47490__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47491 = p__47489;
var _ = cljs.core.nth.call(null,vec__47491,(0),null);
var map__47494 = cljs.core.nth.call(null,vec__47491,(1),null);
var map__47494__$1 = ((((!((map__47494 == null)))?((((map__47494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47494):map__47494);
var data = cljs.core.get.call(null,map__47494__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.mapv.call(null,((function (map__47490,map__47490__$1,db,vec__47491,_,map__47494,map__47494__$1,data){
return (function (work){
return cljs.core.update.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.from_string);
});})(map__47490,map__47490__$1,db,vec__47491,_,map__47494,map__47494__$1,data))
,data)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","unset-edited","work-schedule/unset-edited",-673180065)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie zapisano harmonogram pracy",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.post-work-schedule-failure","work-schedule/ajax.post-work-schedule-failure",1488934759),(function (p__47497,p__47498){
var map__47499 = p__47497;
var map__47499__$1 = ((((!((map__47499 == null)))?((((map__47499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47499):map__47499);
var db = cljs.core.get.call(null,map__47499__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47500 = p__47498;
var _ = cljs.core.nth.call(null,vec__47500,(0),null);
var map__47503 = cljs.core.nth.call(null,vec__47500,(1),null);
var map__47503__$1 = ((((!((map__47503 == null)))?((((map__47503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47503):map__47503);
var response = map__47503__$1;
var status_text = cljs.core.get.call(null,map__47503__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("work-schedule","ajax.post-work-schedule","work-schedule/ajax.post-work-schedule",378268198),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy zapisywaniu harmonogram pracy: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule","work-schedule/ajax.delete-work-schedule",-339546076),(function (p__47506,_){
var map__47507 = p__47506;
var map__47507__$1 = ((((!((map__47507 == null)))?((((map__47507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47507):map__47507);
var db = cljs.core.get.call(null,map__47507__$1,new cljs.core.Keyword(null,"db","db",993250759));
var workplace_id = new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db);
var datetime = new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-success","work-schedule/ajax.delete-work-schedule-success",-2066310923)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-failure","work-schedule/ajax.delete-work-schedule-failure",-225767126)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-success","work-schedule/ajax.delete-work-schedule-success",-2066310923),(function (p__47509,p__47510){
var map__47511 = p__47509;
var map__47511__$1 = ((((!((map__47511 == null)))?((((map__47511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47511):map__47511);
var db = cljs.core.get.call(null,map__47511__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47512 = p__47510;
var _ = cljs.core.nth.call(null,vec__47512,(0),null);
var map__47515 = cljs.core.nth.call(null,vec__47512,(1),null);
var map__47515__$1 = ((((!((map__47515 == null)))?((((map__47515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47515):map__47515);
var data = cljs.core.get.call(null,map__47515__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","unset-edited","work-schedule/unset-edited",-673180065)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to harmonogram pracy",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule-failure","work-schedule/ajax.delete-work-schedule-failure",-225767126),(function (p__47518,p__47519){
var map__47520 = p__47518;
var map__47520__$1 = ((((!((map__47520 == null)))?((((map__47520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47520):map__47520);
var db = cljs.core.get.call(null,map__47520__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47521 = p__47519;
var _ = cljs.core.nth.call(null,vec__47521,(0),null);
var map__47524 = cljs.core.nth.call(null,vec__47521,(1),null);
var map__47524__$1 = ((((!((map__47524 == null)))?((((map__47524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47524):map__47524);
var response = map__47524__$1;
var status_text = cljs.core.get.call(null,map__47524__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule","work-schedule/ajax.delete-work-schedule",-339546076),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu harmonogramu pracy: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),1.5], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","sync","work-schedule/sync",1459023889),(function (p__47527,_){
var map__47528 = p__47527;
var map__47528__$1 = ((((!((map__47528 == null)))?((((map__47528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47528):map__47528);
var db = cljs.core.get.call(null,map__47528__$1,new cljs.core.Keyword(null,"db","db",993250759));
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
cljs.core.println.call(null,schedule);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((!(cljs.core.empty_QMARK_.call(null,schedule)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.post-work-schedule","work-schedule/ajax.post-work-schedule",378268198)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","ajax.delete-work-schedule","work-schedule/ajax.delete-work-schedule",-339546076)], null))], null);
}));

//# sourceMappingURL=events.js.map?rel=1509570209902
