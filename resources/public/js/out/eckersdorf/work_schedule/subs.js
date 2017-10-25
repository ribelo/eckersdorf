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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","get","work-schedule/get",-529948046),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035)], null),(function (schedule,p__86083){
var vec__86084 = p__86083;
var _ = cljs.core.nth.call(null,vec__86084,(0),null);
var map__86087 = cljs.core.nth.call(null,vec__86084,(1),null);
var map__86087__$1 = ((((!((map__86087 == null)))?((((map__86087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86087):map__86087);
var worker_id = cljs.core.get.call(null,map__86087__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__86087__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__86087__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__86084,_,map__86087,map__86087__$1,worker_id,workplace_id,datetime){
return (function (m){
return (cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m)));
});})(vec__86084,_,map__86087,map__86087__$1,worker_id,workplace_id,datetime))
,schedule));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035)], null),(function (schedule,p__86089){
var vec__86090 = p__86089;
var _ = cljs.core.nth.call(null,vec__86090,(0),null);
var map__86093 = cljs.core.nth.call(null,vec__86090,(1),null);
var map__86093__$1 = ((((!((map__86093 == null)))?((((map__86093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86093):map__86093);
var workplace_id = cljs.core.get.call(null,map__86093__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__86093__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
return cljs.core._EQ_.call(null,"holiday",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (datetime__$1,zero_time,vec__86090,_,map__86093,map__86093__$1,workplace_id,datetime){
return (function (m){
return (cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(12)))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m)));
});})(datetime__$1,zero_time,vec__86090,_,map__86093,map__86093__$1,workplace_id,datetime))
,schedule))));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","is-vacation?","work-schedule/is-vacation?",-699162927),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035)], null),(function (schedule,p__86095){
var vec__86096 = p__86095;
var _ = cljs.core.nth.call(null,vec__86096,(0),null);
var map__86099 = cljs.core.nth.call(null,vec__86096,(1),null);
var map__86099__$1 = ((((!((map__86099 == null)))?((((map__86099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86099):map__86099);
var workplace_id = cljs.core.get.call(null,map__86099__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var worker_id = cljs.core.get.call(null,map__86099__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var datetime = cljs.core.get.call(null,map__86099__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
return cljs.core._EQ_.call(null,"vacation",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (datetime__$1,zero_time,vec__86096,_,map__86099,map__86099__$1,workplace_id,worker_id,datetime){
return (function (m){
return (cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,cljs_time.coerce.to_string.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(12)))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m)));
});})(datetime__$1,zero_time,vec__86096,_,map__86099,map__86099__$1,workplace_id,worker_id,datetime))
,schedule))));
}));
cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","list","workplaces/list",852308376)], null)));
re_frame.core.clear_subscription_cache_BANG_.call(null);
cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035)], null)));
re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),"59cd4fc48466bc2056615d66",new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,cljs_time.core.date_time.call(null,(2017),(10),(1),(10)))], null)], null));

//# sourceMappingURL=subs.js.map?rel=1508972485747
