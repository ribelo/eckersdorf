// Compiled by ClojureScript 1.9.946 {}
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
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","get-work","work-schedule/get-work",1385389307),(function (db,p__44664){
var vec__44665 = p__44664;
var _ = cljs.core.nth.call(null,vec__44665,(0),null);
var map__44668 = cljs.core.nth.call(null,vec__44665,(1),null);
var map__44668__$1 = ((((!((map__44668 == null)))?((((map__44668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44668):map__44668);
var worker_id = cljs.core.get.call(null,map__44668__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44668__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44668__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return reagent.ratom.make_reaction.call(null,((function (vec__44665,_,map__44668,map__44668__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__44665,_,map__44668,map__44668__$1,worker_id,workplace_id,datetime){
return (function (p1__44663_SHARP_){
return cljs_time.core.equal_QMARK_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__44663_SHARP_));
});})(vec__44665,_,map__44668,map__44668__$1,worker_id,workplace_id,datetime))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null))));
});})(vec__44665,_,map__44668,map__44668__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","get-work-day","work-schedule/get-work-day",1358317056),(function (db,p__44670){
var vec__44671 = p__44670;
var _ = cljs.core.nth.call(null,vec__44671,(0),null);
var map__44674 = cljs.core.nth.call(null,vec__44671,(1),null);
var map__44674__$1 = ((((!((map__44674 == null)))?((((map__44674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44674):map__44674);
var worker_id = cljs.core.get.call(null,map__44674__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44674__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44674__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var begin_datetime = cljs_time.core.minus.call(null,datetime,cljs_time.core.hour.call(null,datetime));
var end_datetime = cljs_time.core.date_midnight.call(null,cljs_time.core.minus.call(null,datetime,cljs_time.core.hour.call(null,datetime)));
var works = reagent.ratom.make_reaction.call(null,((function (begin_datetime,end_datetime,vec__44671,_,map__44674,map__44674__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null));
});})(begin_datetime,end_datetime,vec__44671,_,map__44674,map__44674__$1,worker_id,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (begin_datetime,end_datetime,works,vec__44671,_,map__44674,map__44674__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (begin_datetime,end_datetime,works,vec__44671,_,map__44674,map__44674__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(begin_datetime,end_datetime,works,vec__44671,_,map__44674,map__44674__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,works)));
});})(begin_datetime,end_datetime,works,vec__44671,_,map__44674,map__44674__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),(function (db,p__44676){
var vec__44677 = p__44676;
var _ = cljs.core.nth.call(null,vec__44677,(0),null);
var map__44680 = cljs.core.nth.call(null,vec__44677,(1),null);
var map__44680__$1 = ((((!((map__44680 == null)))?((((map__44680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44680):map__44680);
var workplace_id = cljs.core.get.call(null,map__44680__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44680__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var works = reagent.ratom.make_reaction.call(null,((function (vec__44677,_,map__44680,map__44680__$1,workplace_id,datetime){
return (function (){
return cljs.core.first.call(null,cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035))));
});})(vec__44677,_,map__44680,map__44680__$1,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (works,vec__44677,_,map__44680,map__44680__$1,workplace_id,datetime){
return (function (){
return cljs.core._EQ_.call(null,"holiday",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (works,vec__44677,_,map__44680,map__44680__$1,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,cljs_time.core.plus.call(null,cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime))),cljs_time.core.hours.call(null,(6))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(works,vec__44677,_,map__44680,map__44680__$1,workplace_id,datetime))
,cljs.core.deref.call(null,works)))));
});})(works,vec__44677,_,map__44680,map__44680__$1,workplace_id,datetime))
);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","is-vacation?","work-schedule/is-vacation?",-699162927),(function (db,p__44682){
var vec__44683 = p__44682;
var _ = cljs.core.nth.call(null,vec__44683,(0),null);
var map__44686 = cljs.core.nth.call(null,vec__44683,(1),null);
var map__44686__$1 = ((((!((map__44686 == null)))?((((map__44686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44686):map__44686);
var worker_id = cljs.core.get.call(null,map__44686__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44686__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44686__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var works = reagent.ratom.make_reaction.call(null,((function (vec__44683,_,map__44686,map__44686__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null));
});})(vec__44683,_,map__44686,map__44686__$1,worker_id,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (works,vec__44683,_,map__44686,map__44686__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core._EQ_.call(null,"vacation",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (works,vec__44683,_,map__44686,map__44686__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,cljs_time.core.plus.call(null,cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime))),cljs_time.core.hours.call(null,(6))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(works,vec__44683,_,map__44686,map__44686__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,works)))));
});})(works,vec__44683,_,map__44686,map__44686__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","is-break?","work-schedule/is-break?",-952345534),(function (db,p__44688){
var vec__44689 = p__44688;
var _ = cljs.core.nth.call(null,vec__44689,(0),null);
var map__44692 = cljs.core.nth.call(null,vec__44689,(1),null);
var map__44692__$1 = ((((!((map__44692 == null)))?((((map__44692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44692):map__44692);
var worker_id = cljs.core.get.call(null,map__44692__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44692__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44692__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var works = reagent.ratom.make_reaction.call(null,((function (vec__44689,_,map__44692,map__44692__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null));
});})(vec__44689,_,map__44692,map__44692__$1,worker_id,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (works,vec__44689,_,map__44692,map__44692__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core._EQ_.call(null,"break",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (works,vec__44689,_,map__44692,map__44692__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,cljs_time.core.plus.call(null,cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime))),cljs_time.core.hours.call(null,(6))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(works,vec__44689,_,map__44692,map__44692__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,works)))));
});})(works,vec__44689,_,map__44692,map__44692__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","all-working-days","work-schedule/all-working-days",-1020979232),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),new cljs.core.Keyword(null,"all-working-days","all-working-days",1056590347)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","all-working-hours","work-schedule/all-working-hours",-2063440714),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","all-working-days","work-schedule/all-working-days",-1020979232)], null),(function (days,_){
return (days * (8));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","hours-worked-in-month","work-schedule/hours-worked-in-month",1171046832),(function (db,p__44694){
var vec__44695 = p__44694;
var _ = cljs.core.nth.call(null,vec__44695,(0),null);
var map__44698 = cljs.core.nth.call(null,vec__44695,(1),null);
var map__44698__$1 = ((((!((map__44698 == null)))?((((map__44698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44698):map__44698);
var worker_id = cljs.core.get.call(null,map__44698__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30522__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"hours-worked-in-month","hours-worked-in-month",-1178358959)], null));
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","days-worked-in-month","work-schedule/days-worked-in-month",1038496604),(function (db,p__44700){
var vec__44701 = p__44700;
var _ = cljs.core.nth.call(null,vec__44701,(0),null);
var map__44704 = cljs.core.nth.call(null,vec__44701,(1),null);
var map__44704__$1 = ((((!((map__44704 == null)))?((((map__44704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44704):map__44704);
var worker_id = cljs.core.get.call(null,map__44704__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30522__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"days-worked-in-month","days-worked-in-month",-1174346359)], null));
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","saturdays-worked-in-month","work-schedule/saturdays-worked-in-month",1098814461),(function (db,p__44706){
var vec__44707 = p__44706;
var _ = cljs.core.nth.call(null,vec__44707,(0),null);
var map__44710 = cljs.core.nth.call(null,vec__44707,(1),null);
var map__44710__$1 = ((((!((map__44710 == null)))?((((map__44710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44710):map__44710);
var worker_id = cljs.core.get.call(null,map__44710__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30522__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"saturdays-worked-in-month","saturdays-worked-in-month",-983473622)], null));
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","sundays-worked-in-month","work-schedule/sundays-worked-in-month",-664863278),(function (db,p__44712){
var vec__44713 = p__44712;
var _ = cljs.core.nth.call(null,vec__44713,(0),null);
var map__44716 = cljs.core.nth.call(null,vec__44713,(1),null);
var map__44716__$1 = ((((!((map__44716 == null)))?((((map__44716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44716):map__44716);
var worker_id = cljs.core.get.call(null,map__44716__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30522__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"sundays-worked-in-month","sundays-worked-in-month",1551954077)], null));
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","first-changes-worked-in-month","work-schedule/first-changes-worked-in-month",2068610616),(function (db,p__44718){
var vec__44719 = p__44718;
var _ = cljs.core.nth.call(null,vec__44719,(0),null);
var map__44722 = cljs.core.nth.call(null,vec__44719,(1),null);
var map__44722__$1 = ((((!((map__44722 == null)))?((((map__44722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44722):map__44722);
var worker_id = cljs.core.get.call(null,map__44722__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30522__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"first-changes-worked-in-month","first-changes-worked-in-month",-146640955)], null));
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","second-changes-worked-in-month","work-schedule/second-changes-worked-in-month",-856750358),(function (db,p__44724){
var vec__44725 = p__44724;
var _ = cljs.core.nth.call(null,vec__44725,(0),null);
var map__44728 = cljs.core.nth.call(null,vec__44725,(1),null);
var map__44728__$1 = ((((!((map__44728 == null)))?((((map__44728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44728):map__44728);
var worker_id = cljs.core.get.call(null,map__44728__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30522__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"second-changes-worked-in-month","second-changes-worked-in-month",820237509)], null));
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
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
var schedule = reagent.ratom.make_reaction.call(null,((function (datetime){
return (function (){
return new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(datetime))
);
var workplace_id = reagent.ratom.make_reaction.call(null,((function (datetime,schedule){
return (function (){
return new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(datetime,schedule))
);
var all_workers = reagent.ratom.make_reaction.call(null,((function (datetime,schedule,workplace_id){
return (function (){
return new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(datetime,schedule,workplace_id))
);
var workers = reagent.ratom.make_reaction.call(null,((function (datetime,schedule,workplace_id,all_workers){
return (function (){
return eckersdorf.workers.utils.workers_by_id.call(null,cljs.core.deref.call(null,all_workers),cljs.core.deref.call(null,workplace_id));
});})(datetime,schedule,workplace_id,all_workers))
);
var begin_time = cljs_time.core.first_day_of_the_month.call(null,cljs.core.deref.call(null,datetime));
var end_time = cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,begin_time),cljs_time.core.days.call(null,(1)));
return reagent.ratom.make_reaction.call(null,((function (datetime,schedule,workplace_id,all_workers,workers,begin_time,end_time){
return (function (){
return cljs.core.flatten.call(null,cljs.core.mapv.call(null,((function (datetime,schedule,workplace_id,all_workers,workers,begin_time,end_time){
return (function (datetime__$1){
return cljs.core.reduce.call(null,cljs.core.merge,cljs.core.mapv.call(null,((function (datetime,schedule,workplace_id,all_workers,workers,begin_time,end_time){
return (function (p__44730){
var map__44731 = p__44730;
var map__44731__$1 = ((((!((map__44731 == null)))?((((map__44731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44731):map__44731);
var worker = map__44731__$1;
var object_id = cljs.core.get.call(null,map__44731__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var vec__44733 = eckersdorf.work_schedule.utils.worker_working_hours.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,schedule),object_id),cljs_time.core.day.call(null,datetime__$1));
var begin = cljs.core.nth.call(null,vec__44733,(0),null);
var end = cljs.core.nth.call(null,vec__44733,(1),null);
var work_type = cljs.core.nth.call(null,vec__44733,(2),null);
var day_of_weak = cljs.core.nth.call(null,vec__44733,(3),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"datetime","datetime",494675702),datetime__$1,object_id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [begin,end,work_type,day_of_weak], null)]);
});})(datetime,schedule,workplace_id,all_workers,workers,begin_time,end_time))
,cljs.core.deref.call(null,workers)));
});})(datetime,schedule,workplace_id,all_workers,workers,begin_time,end_time))
,cljs_time.periodic.periodic_seq.call(null,begin_time,end_time,cljs_time.core.days.call(null,(1)))));
});})(datetime,schedule,workplace_id,all_workers,workers,begin_time,end_time))
);
}));

//# sourceMappingURL=subs.js.map?rel=1510703503563
