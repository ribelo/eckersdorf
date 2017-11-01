// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.work_schedule.subs');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('cljs_time.periodic');
goog.require('cljs_time.predicates');
goog.require('eckersdorf.work_schedule.utils');
goog.require('eckersdorf.workers.utils');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),(function (db,_){
return new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","print?","work-schedule/print?",-1907155809),(function (db,_){
return new cljs.core.Keyword("work-schedule","print?","work-schedule/print?",-1907155809).cljs$core$IFn$_invoke$arity$1(db);
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
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","get","work-schedule/get",-529948046),(function (db,p__49279){
var vec__49280 = p__49279;
var _ = cljs.core.nth.call(null,vec__49280,(0),null);
var map__49283 = cljs.core.nth.call(null,vec__49280,(1),null);
var map__49283__$1 = ((((!((map__49283 == null)))?((((map__49283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49283):map__49283);
var worker_id = cljs.core.get.call(null,map__49283__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__49283__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__49283__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var schedule = reagent.ratom.make_reaction.call(null,((function (vec__49280,_,map__49283,map__49283__$1,worker_id,workplace_id,datetime){
return (function (){
return new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(vec__49280,_,map__49283,map__49283__$1,worker_id,workplace_id,datetime))
);
var by_id = reagent.ratom.make_reaction.call(null,((function (schedule,vec__49280,_,map__49283,map__49283__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.filter.call(null,((function (schedule,vec__49280,_,map__49283,map__49283__$1,worker_id,workplace_id,datetime){
return (function (m){
return (cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(m)));
});})(schedule,vec__49280,_,map__49283,map__49283__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,schedule));
});})(schedule,vec__49280,_,map__49283,map__49283__$1,worker_id,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (schedule,by_id,vec__49280,_,map__49283,map__49283__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (schedule,by_id,vec__49280,_,map__49283,map__49283__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(schedule,by_id,vec__49280,_,map__49283,map__49283__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,by_id)));
});})(schedule,by_id,vec__49280,_,map__49283,map__49283__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),(function (db,p__49285){
var vec__49286 = p__49285;
var _ = cljs.core.nth.call(null,vec__49286,(0),null);
var map__49289 = cljs.core.nth.call(null,vec__49286,(1),null);
var map__49289__$1 = ((((!((map__49289 == null)))?((((map__49289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49289):map__49289);
var worker_id = cljs.core.get.call(null,map__49289__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__49289__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__49289__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var schedule = reagent.ratom.make_reaction.call(null,((function (vec__49286,_,map__49289,map__49289__$1,worker_id,workplace_id,datetime){
return (function (){
return new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(vec__49286,_,map__49289,map__49289__$1,worker_id,workplace_id,datetime))
);
var by_id = reagent.ratom.make_reaction.call(null,((function (schedule,vec__49286,_,map__49289,map__49289__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.filter.call(null,((function (schedule,vec__49286,_,map__49289,map__49289__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(m));
});})(schedule,vec__49286,_,map__49289,map__49289__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,schedule));
});})(schedule,vec__49286,_,map__49289,map__49289__$1,worker_id,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (schedule,by_id,vec__49286,_,map__49289,map__49289__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core._EQ_.call(null,"holiday",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (schedule,by_id,vec__49286,_,map__49289,map__49289__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,cljs_time.core.plus.call(null,cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime))),cljs_time.core.hours.call(null,(6))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(schedule,by_id,vec__49286,_,map__49289,map__49289__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,by_id)))));
});})(schedule,by_id,vec__49286,_,map__49289,map__49289__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","is-vacation?","work-schedule/is-vacation?",-699162927),(function (db,p__49291){
var vec__49292 = p__49291;
var _ = cljs.core.nth.call(null,vec__49292,(0),null);
var map__49295 = cljs.core.nth.call(null,vec__49292,(1),null);
var map__49295__$1 = ((((!((map__49295 == null)))?((((map__49295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49295):map__49295);
var worker_id = cljs.core.get.call(null,map__49295__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__49295__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__49295__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var schedule = reagent.ratom.make_reaction.call(null,((function (vec__49292,_,map__49295,map__49295__$1,worker_id,workplace_id,datetime){
return (function (){
return new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(vec__49292,_,map__49295,map__49295__$1,worker_id,workplace_id,datetime))
);
var by_id = reagent.ratom.make_reaction.call(null,((function (schedule,vec__49292,_,map__49295,map__49295__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.filter.call(null,((function (schedule,vec__49292,_,map__49295,map__49295__$1,worker_id,workplace_id,datetime){
return (function (m){
return (cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(m)));
});})(schedule,vec__49292,_,map__49295,map__49295__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,schedule));
});})(schedule,vec__49292,_,map__49295,map__49295__$1,worker_id,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (schedule,by_id,vec__49292,_,map__49295,map__49295__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core._EQ_.call(null,"vacation",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (schedule,by_id,vec__49292,_,map__49295,map__49295__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,cljs_time.core.plus.call(null,cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime))),cljs_time.core.hours.call(null,(6))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(schedule,by_id,vec__49292,_,map__49295,map__49295__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,by_id)))));
});})(schedule,by_id,vec__49292,_,map__49295,map__49295__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","hours-worked-in-month","work-schedule/hours-worked-in-month",1171046832),(function (db,p__49297){
var vec__49298 = p__49297;
var _ = cljs.core.nth.call(null,vec__49298,(0),null);
var map__49301 = cljs.core.nth.call(null,vec__49298,(1),null);
var map__49301__$1 = ((((!((map__49301 == null)))?((((map__49301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49301):map__49301);
var worker_id = cljs.core.get.call(null,map__49301__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30249__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"hours-worked-in-month","hours-worked-in-month",-1178358959)], null));
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","days-worked-in-month","work-schedule/days-worked-in-month",1038496604),(function (db,p__49303){
var vec__49304 = p__49303;
var _ = cljs.core.nth.call(null,vec__49304,(0),null);
var map__49307 = cljs.core.nth.call(null,vec__49304,(1),null);
var map__49307__$1 = ((((!((map__49307 == null)))?((((map__49307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49307):map__49307);
var worker_id = cljs.core.get.call(null,map__49307__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30249__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"days-worked-in-month","days-worked-in-month",-1174346359)], null));
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","saturdays-worked-in-month","work-schedule/saturdays-worked-in-month",1098814461),(function (db,p__49309){
var vec__49310 = p__49309;
var _ = cljs.core.nth.call(null,vec__49310,(0),null);
var map__49313 = cljs.core.nth.call(null,vec__49310,(1),null);
var map__49313__$1 = ((((!((map__49313 == null)))?((((map__49313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49313):map__49313);
var worker_id = cljs.core.get.call(null,map__49313__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30249__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"saturdays-worked-in-month","saturdays-worked-in-month",-983473622)], null));
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","sundays-worked-in-month","work-schedule/sundays-worked-in-month",-664863278),(function (db,p__49315){
var vec__49316 = p__49315;
var _ = cljs.core.nth.call(null,vec__49316,(0),null);
var map__49319 = cljs.core.nth.call(null,vec__49316,(1),null);
var map__49319__$1 = ((((!((map__49319 == null)))?((((map__49319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49319):map__49319);
var worker_id = cljs.core.get.call(null,map__49319__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30249__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"sundays-worked-in-month","sundays-worked-in-month",1551954077)], null));
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","first-changes-worked-in-month","work-schedule/first-changes-worked-in-month",2068610616),(function (db,p__49321){
var vec__49322 = p__49321;
var _ = cljs.core.nth.call(null,vec__49322,(0),null);
var map__49325 = cljs.core.nth.call(null,vec__49322,(1),null);
var map__49325__$1 = ((((!((map__49325 == null)))?((((map__49325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49325):map__49325);
var worker_id = cljs.core.get.call(null,map__49325__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30249__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"first-changes-worked-in-month","first-changes-worked-in-month",-146640955)], null));
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","second-changes-worked-in-month","work-schedule/second-changes-worked-in-month",-856750358),(function (db,p__49327){
var vec__49328 = p__49327;
var _ = cljs.core.nth.call(null,vec__49328,(0),null);
var map__49331 = cljs.core.nth.call(null,vec__49328,(1),null);
var map__49331__$1 = ((((!((map__49331 == null)))?((((map__49331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49331):map__49331);
var worker_id = cljs.core.get.call(null,map__49331__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30249__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"second-changes-worked-in-month","second-changes-worked-in-month",820237509)], null));
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","edited?","work-schedule/edited?",-752047662),(function (db,_){
return new cljs.core.Keyword("work-schedule","edited?","work-schedule/edited?",-752047662).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","print-data-source","work-schedule/print-data-source",-1786888067),(function (db,_){
var datetime = reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
var workplace_id = reagent.ratom.make_reaction.call(null,((function (datetime){
return (function (){
return new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(datetime))
);
var all_workers = reagent.ratom.make_reaction.call(null,((function (datetime,workplace_id){
return (function (){
return new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(datetime,workplace_id))
);
var workers = reagent.ratom.make_reaction.call(null,((function (datetime,workplace_id,all_workers){
return (function (){
return eckersdorf.workers.utils.workers_by_id.call(null,cljs.core.deref.call(null,all_workers),workplace_id);
});})(datetime,workplace_id,all_workers))
);
var begin_time = cljs_time.core.first_day_of_the_month.call(null,datetime);
var end_time = cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,begin_time),cljs_time.core.days.call(null,(1)));
return reagent.ratom.make_reaction.call(null,((function (datetime,workplace_id,all_workers,workers,begin_time,end_time){
return (function (){
return cljs.core.doall.call(null,(function (){var iter__31131__auto__ = ((function (datetime,workplace_id,all_workers,workers,begin_time,end_time){
return (function eckersdorf$work_schedule$subs$iter__49333(s__49334){
return (new cljs.core.LazySeq(null,((function (datetime,workplace_id,all_workers,workers,begin_time,end_time){
return (function (){
var s__49334__$1 = s__49334;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__49334__$1);
if(temp__5290__auto__){
var xs__5843__auto__ = temp__5290__auto__;
var date = cljs.core.first.call(null,xs__5843__auto__);
var iterys__31127__auto__ = ((function (s__49334__$1,date,xs__5843__auto__,temp__5290__auto__,datetime,workplace_id,all_workers,workers,begin_time,end_time){
return (function eckersdorf$work_schedule$subs$iter__49333_$_iter__49335(s__49336){
return (new cljs.core.LazySeq(null,((function (s__49334__$1,date,xs__5843__auto__,temp__5290__auto__,datetime,workplace_id,all_workers,workers,begin_time,end_time){
return (function (){
var s__49336__$1 = s__49336;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__49336__$1);
if(temp__5290__auto____$1){
var s__49336__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49336__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__49336__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__49338 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__49337 = (0);
while(true){
if((i__49337 < size__31130__auto__)){
var worker = cljs.core._nth.call(null,c__31129__auto__,i__49337);
var map__49339 = worker;
var map__49339__$1 = ((((!((map__49339 == null)))?((((map__49339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49339):map__49339);
var object_id = cljs.core.get.call(null,map__49339__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var vec__49340 = eckersdorf.work_schedule.utils.worker_working_hours.call(null,db,object_id,cljs_time.core.day.call(null,date));
var begin = cljs.core.nth.call(null,vec__49340,(0),null);
var end = cljs.core.nth.call(null,vec__49340,(1),null);
var type = cljs.core.nth.call(null,vec__49340,(2),null);
cljs.core.chunk_append.call(null,b__49338,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("work","datetime","work/datetime",502591451),date,new cljs.core.Keyword("work","worker-id","work/worker-id",649209927),object_id,new cljs.core.Keyword("work","begin-hour","work/begin-hour",1954306060),begin,new cljs.core.Keyword("work","end-hour","work/end-hour",-951042082),end,new cljs.core.Keyword("work","work-type","work/work-type",-1234730547),type], null));

var G__49349 = (i__49337 + (1));
i__49337 = G__49349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49338),eckersdorf$work_schedule$subs$iter__49333_$_iter__49335.call(null,cljs.core.chunk_rest.call(null,s__49336__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49338),null);
}
} else {
var worker = cljs.core.first.call(null,s__49336__$2);
var map__49344 = worker;
var map__49344__$1 = ((((!((map__49344 == null)))?((((map__49344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49344):map__49344);
var object_id = cljs.core.get.call(null,map__49344__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var vec__49345 = eckersdorf.work_schedule.utils.worker_working_hours.call(null,db,object_id,cljs_time.core.day.call(null,date));
var begin = cljs.core.nth.call(null,vec__49345,(0),null);
var end = cljs.core.nth.call(null,vec__49345,(1),null);
var type = cljs.core.nth.call(null,vec__49345,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("work","datetime","work/datetime",502591451),date,new cljs.core.Keyword("work","worker-id","work/worker-id",649209927),object_id,new cljs.core.Keyword("work","begin-hour","work/begin-hour",1954306060),begin,new cljs.core.Keyword("work","end-hour","work/end-hour",-951042082),end,new cljs.core.Keyword("work","work-type","work/work-type",-1234730547),type], null),eckersdorf$work_schedule$subs$iter__49333_$_iter__49335.call(null,cljs.core.rest.call(null,s__49336__$2)));
}
} else {
return null;
}
break;
}
});})(s__49334__$1,date,xs__5843__auto__,temp__5290__auto__,datetime,workplace_id,all_workers,workers,begin_time,end_time))
,null,null));
});})(s__49334__$1,date,xs__5843__auto__,temp__5290__auto__,datetime,workplace_id,all_workers,workers,begin_time,end_time))
;
var fs__31128__auto__ = cljs.core.seq.call(null,iterys__31127__auto__.call(null,workers));
if(fs__31128__auto__){
return cljs.core.concat.call(null,fs__31128__auto__,eckersdorf$work_schedule$subs$iter__49333.call(null,cljs.core.rest.call(null,s__49334__$1)));
} else {
var G__49350 = cljs.core.rest.call(null,s__49334__$1);
s__49334__$1 = G__49350;
continue;
}
} else {
return null;
}
break;
}
});})(datetime,workplace_id,all_workers,workers,begin_time,end_time))
,null,null));
});})(datetime,workplace_id,all_workers,workers,begin_time,end_time))
;
return iter__31131__auto__.call(null,cljs_time.periodic.periodic_seq.call(null,begin_time,end_time,cljs_time.core.days.call(null,(1))));
})());
});})(datetime,workplace_id,all_workers,workers,begin_time,end_time))
);
}));

//# sourceMappingURL=subs.js.map?rel=1509571742254
