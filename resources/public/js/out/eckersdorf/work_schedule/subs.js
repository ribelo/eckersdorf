// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.work_schedule.subs');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),(function (db,_){
return new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118),(function (db,_){
return new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962),(function (db,_){
return new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","short-date","work-schedule/short-date",1316191150),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118)], null),(function (date){
return cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM"),date);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","long-date","work-schedule/long-date",-396821704),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118)], null),(function (date){
return cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","days","work-schedule/days",550342111),(function (db,_){
return new cljs.core.Keyword("work-schedule","days","work-schedule/days",550342111).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),(function (db,_){
return new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","get","work-schedule/get",-529948046),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035)], null),(function (schedule,p__89756){
var vec__89757 = p__89756;
var _ = cljs.core.nth.call(null,vec__89757,(0),null);
var map__89760 = cljs.core.nth.call(null,vec__89757,(1),null);
var map__89760__$1 = ((((!((map__89760 == null)))?((((map__89760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89760):map__89760);
var worker_id = cljs.core.get.call(null,map__89760__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__89760__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__89760__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__89757,_,map__89760,map__89760__$1,worker_id,workplace_id,datetime){
return (function (m){
return (cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m)));
});})(vec__89757,_,map__89760,map__89760__$1,worker_id,workplace_id,datetime))
,schedule));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035)], null),(function (schedule,p__89762){
var vec__89763 = p__89762;
var _ = cljs.core.nth.call(null,vec__89763,(0),null);
var map__89766 = cljs.core.nth.call(null,vec__89763,(1),null);
var map__89766__$1 = ((((!((map__89766 == null)))?((((map__89766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89766):map__89766);
var workplace_id = cljs.core.get.call(null,map__89766__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__89766__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
return cljs.core._EQ_.call(null,"holiday",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (datetime__$1,zero_time,vec__89763,_,map__89766,map__89766__$1,workplace_id,datetime){
return (function (m){
return (cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(12)))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m)));
});})(datetime__$1,zero_time,vec__89763,_,map__89766,map__89766__$1,workplace_id,datetime))
,schedule))));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","is-vacation?","work-schedule/is-vacation?",-699162927),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035)], null),(function (schedule,p__89768){
var vec__89769 = p__89768;
var _ = cljs.core.nth.call(null,vec__89769,(0),null);
var map__89772 = cljs.core.nth.call(null,vec__89769,(1),null);
var map__89772__$1 = ((((!((map__89772 == null)))?((((map__89772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89772):map__89772);
var workplace_id = cljs.core.get.call(null,map__89772__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var worker_id = cljs.core.get.call(null,map__89772__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var datetime = cljs.core.get.call(null,map__89772__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
return cljs.core._EQ_.call(null,"vacation",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (datetime__$1,zero_time,vec__89769,_,map__89772,map__89772__$1,workplace_id,worker_id,datetime){
return (function (m){
return (cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(12)))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m)));
});})(datetime__$1,zero_time,vec__89769,_,map__89772,map__89772__$1,workplace_id,worker_id,datetime))
,schedule))));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","hours-worked-in-month","work-schedule/hours-worked-in-month",1171046832),(function (db,p__89774){
var vec__89775 = p__89774;
var _ = cljs.core.nth.call(null,vec__89775,(0),null);
var map__89778 = cljs.core.nth.call(null,vec__89775,(1),null);
var map__89778__$1 = ((((!((map__89778 == null)))?((((map__89778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89778):map__89778);
var worker_id = cljs.core.get.call(null,map__89778__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"hours-worked-in-month","hours-worked-in-month",-1178358959)], null));
}));
cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","list","workplaces/list",852308376)], null)));
re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","list","workers/list",-759802960)], null));
re_frame.core.clear_subscription_cache_BANG_.call(null);
re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","hours-worked-in-month","work-schedule/hours-worked-in-month",1171046832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),"59ed196efe1b232a5593a5a6"], null)], null));

//# sourceMappingURL=subs.js.map?rel=1509051759955
