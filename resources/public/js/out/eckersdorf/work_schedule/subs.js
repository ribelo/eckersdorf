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
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","get","work-schedule/get",-529948046),(function (db,p__44021){
var vec__44022 = p__44021;
var _ = cljs.core.nth.call(null,vec__44022,(0),null);
var map__44025 = cljs.core.nth.call(null,vec__44022,(1),null);
var map__44025__$1 = ((((!((map__44025 == null)))?((((map__44025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44025):map__44025);
var worker_id = cljs.core.get.call(null,map__44025__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44025__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44025__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var schedule = reagent.ratom.make_reaction.call(null,((function (vec__44022,_,map__44025,map__44025__$1,worker_id,workplace_id,datetime){
return (function (){
return new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(vec__44022,_,map__44025,map__44025__$1,worker_id,workplace_id,datetime))
);
var by_id = reagent.ratom.make_reaction.call(null,((function (schedule,vec__44022,_,map__44025,map__44025__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.filter.call(null,((function (schedule,vec__44022,_,map__44025,map__44025__$1,worker_id,workplace_id,datetime){
return (function (m){
return (cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(m)));
});})(schedule,vec__44022,_,map__44025,map__44025__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,schedule));
});})(schedule,vec__44022,_,map__44025,map__44025__$1,worker_id,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (schedule,by_id,vec__44022,_,map__44025,map__44025__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (schedule,by_id,vec__44022,_,map__44025,map__44025__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(schedule,by_id,vec__44022,_,map__44025,map__44025__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,by_id)));
});})(schedule,by_id,vec__44022,_,map__44025,map__44025__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),(function (db,p__44027){
var vec__44028 = p__44027;
var _ = cljs.core.nth.call(null,vec__44028,(0),null);
var map__44031 = cljs.core.nth.call(null,vec__44028,(1),null);
var map__44031__$1 = ((((!((map__44031 == null)))?((((map__44031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44031):map__44031);
var worker_id = cljs.core.get.call(null,map__44031__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44031__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44031__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var schedule = reagent.ratom.make_reaction.call(null,((function (vec__44028,_,map__44031,map__44031__$1,worker_id,workplace_id,datetime){
return (function (){
return new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(vec__44028,_,map__44031,map__44031__$1,worker_id,workplace_id,datetime))
);
var by_id = reagent.ratom.make_reaction.call(null,((function (schedule,vec__44028,_,map__44031,map__44031__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.filter.call(null,((function (schedule,vec__44028,_,map__44031,map__44031__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(m));
});})(schedule,vec__44028,_,map__44031,map__44031__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,schedule));
});})(schedule,vec__44028,_,map__44031,map__44031__$1,worker_id,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (schedule,by_id,vec__44028,_,map__44031,map__44031__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core._EQ_.call(null,"holiday",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (schedule,by_id,vec__44028,_,map__44031,map__44031__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,cljs_time.core.plus.call(null,cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime))),cljs_time.core.hours.call(null,(6))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(schedule,by_id,vec__44028,_,map__44031,map__44031__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,by_id)))));
});})(schedule,by_id,vec__44028,_,map__44031,map__44031__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","is-vacation?","work-schedule/is-vacation?",-699162927),(function (db,p__44033){
var vec__44034 = p__44033;
var _ = cljs.core.nth.call(null,vec__44034,(0),null);
var map__44037 = cljs.core.nth.call(null,vec__44034,(1),null);
var map__44037__$1 = ((((!((map__44037 == null)))?((((map__44037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44037):map__44037);
var worker_id = cljs.core.get.call(null,map__44037__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44037__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44037__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var schedule = reagent.ratom.make_reaction.call(null,((function (vec__44034,_,map__44037,map__44037__$1,worker_id,workplace_id,datetime){
return (function (){
return new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(vec__44034,_,map__44037,map__44037__$1,worker_id,workplace_id,datetime))
);
var by_id = reagent.ratom.make_reaction.call(null,((function (schedule,vec__44034,_,map__44037,map__44037__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.filter.call(null,((function (schedule,vec__44034,_,map__44037,map__44037__$1,worker_id,workplace_id,datetime){
return (function (m){
return (cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(m)));
});})(schedule,vec__44034,_,map__44037,map__44037__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,schedule));
});})(schedule,vec__44034,_,map__44037,map__44037__$1,worker_id,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (schedule,by_id,vec__44034,_,map__44037,map__44037__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core._EQ_.call(null,"vacation",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (schedule,by_id,vec__44034,_,map__44037,map__44037__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,cljs_time.core.plus.call(null,cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime))),cljs_time.core.hours.call(null,(6))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(schedule,by_id,vec__44034,_,map__44037,map__44037__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,by_id)))));
});})(schedule,by_id,vec__44034,_,map__44037,map__44037__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.clear_subscription_cache_BANG_.call(null);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","hours-worked-in-month","work-schedule/hours-worked-in-month",1171046832),(function (db,p__44039){
var vec__44040 = p__44039;
var _ = cljs.core.nth.call(null,vec__44040,(0),null);
var map__44043 = cljs.core.nth.call(null,vec__44040,(1),null);
var map__44043__$1 = ((((!((map__44043 == null)))?((((map__44043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44043):map__44043);
var worker_id = cljs.core.get.call(null,map__44043__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30249__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"hours-worked-in-month","hours-worked-in-month",-1178358959)], null));
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","days-worked-in-month","work-schedule/days-worked-in-month",1038496604),(function (db,p__44045){
var vec__44046 = p__44045;
var _ = cljs.core.nth.call(null,vec__44046,(0),null);
var map__44049 = cljs.core.nth.call(null,vec__44046,(1),null);
var map__44049__$1 = ((((!((map__44049 == null)))?((((map__44049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44049):map__44049);
var worker_id = cljs.core.get.call(null,map__44049__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30249__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"days-worked-in-month","days-worked-in-month",-1174346359)], null));
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","edited?","work-schedule/edited?",-752047662),(function (db,_){
return new cljs.core.Keyword("work-schedule","edited?","work-schedule/edited?",-752047662).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1509397947622
