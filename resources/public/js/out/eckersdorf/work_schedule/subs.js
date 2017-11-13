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
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","get-work","work-schedule/get-work",1385389307),(function (db,p__44663){
var vec__44664 = p__44663;
var _ = cljs.core.nth.call(null,vec__44664,(0),null);
var map__44667 = cljs.core.nth.call(null,vec__44664,(1),null);
var map__44667__$1 = ((((!((map__44667 == null)))?((((map__44667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44667):map__44667);
var worker_id = cljs.core.get.call(null,map__44667__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44667__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44667__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
return reagent.ratom.make_reaction.call(null,((function (vec__44664,_,map__44667,map__44667__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__44664,_,map__44667,map__44667__$1,worker_id,workplace_id,datetime){
return (function (p1__44662_SHARP_){
return cljs_time.core.equal_QMARK_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(p1__44662_SHARP_));
});})(vec__44664,_,map__44667,map__44667__$1,worker_id,workplace_id,datetime))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null))));
});})(vec__44664,_,map__44667,map__44667__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","get-work-day","work-schedule/get-work-day",1358317056),(function (db,p__44669){
var vec__44670 = p__44669;
var _ = cljs.core.nth.call(null,vec__44670,(0),null);
var map__44673 = cljs.core.nth.call(null,vec__44670,(1),null);
var map__44673__$1 = ((((!((map__44673 == null)))?((((map__44673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44673):map__44673);
var worker_id = cljs.core.get.call(null,map__44673__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44673__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44673__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var begin_datetime = cljs_time.core.minus.call(null,datetime,cljs_time.core.hour.call(null,datetime));
var end_datetime = cljs_time.core.date_midnight.call(null,cljs_time.core.minus.call(null,datetime,cljs_time.core.hour.call(null,datetime)));
var works = reagent.ratom.make_reaction.call(null,((function (begin_datetime,end_datetime,vec__44670,_,map__44673,map__44673__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null));
});})(begin_datetime,end_datetime,vec__44670,_,map__44673,map__44673__$1,worker_id,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (begin_datetime,end_datetime,works,vec__44670,_,map__44673,map__44673__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (begin_datetime,end_datetime,works,vec__44670,_,map__44673,map__44673__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(begin_datetime,end_datetime,works,vec__44670,_,map__44673,map__44673__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,works)));
});})(begin_datetime,end_datetime,works,vec__44670,_,map__44673,map__44673__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","is-holiday?","work-schedule/is-holiday?",-1356022753),(function (db,p__44675){
var vec__44676 = p__44675;
var _ = cljs.core.nth.call(null,vec__44676,(0),null);
var map__44679 = cljs.core.nth.call(null,vec__44676,(1),null);
var map__44679__$1 = ((((!((map__44679 == null)))?((((map__44679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44679):map__44679);
var workplace_id = cljs.core.get.call(null,map__44679__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44679__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var works = reagent.ratom.make_reaction.call(null,((function (vec__44676,_,map__44679,map__44679__$1,workplace_id,datetime){
return (function (){
return cljs.core.first.call(null,cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035))));
});})(vec__44676,_,map__44679,map__44679__$1,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (works,vec__44676,_,map__44679,map__44679__$1,workplace_id,datetime){
return (function (){
return cljs.core._EQ_.call(null,"holiday",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (works,vec__44676,_,map__44679,map__44679__$1,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,cljs_time.core.plus.call(null,cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime))),cljs_time.core.hours.call(null,(6))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(works,vec__44676,_,map__44679,map__44679__$1,workplace_id,datetime))
,cljs.core.deref.call(null,works)))));
});})(works,vec__44676,_,map__44679,map__44679__$1,workplace_id,datetime))
);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","is-vacation?","work-schedule/is-vacation?",-699162927),(function (db,p__44681){
var vec__44682 = p__44681;
var _ = cljs.core.nth.call(null,vec__44682,(0),null);
var map__44685 = cljs.core.nth.call(null,vec__44682,(1),null);
var map__44685__$1 = ((((!((map__44685 == null)))?((((map__44685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44685):map__44685);
var worker_id = cljs.core.get.call(null,map__44685__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44685__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44685__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var works = reagent.ratom.make_reaction.call(null,((function (vec__44682,_,map__44685,map__44685__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null));
});})(vec__44682,_,map__44685,map__44685__$1,worker_id,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (works,vec__44682,_,map__44685,map__44685__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core._EQ_.call(null,"vacation",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (works,vec__44682,_,map__44685,map__44685__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,cljs_time.core.plus.call(null,cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime))),cljs_time.core.hours.call(null,(6))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(works,vec__44682,_,map__44685,map__44685__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,works)))));
});})(works,vec__44682,_,map__44685,map__44685__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("work-schedule","is-break?","work-schedule/is-break?",-952345534),(function (db,p__44687){
var vec__44688 = p__44687;
var _ = cljs.core.nth.call(null,vec__44688,(0),null);
var map__44691 = cljs.core.nth.call(null,vec__44688,(1),null);
var map__44691__$1 = ((((!((map__44691 == null)))?((((map__44691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44691):map__44691);
var worker_id = cljs.core.get.call(null,map__44691__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__44691__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__44691__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var works = reagent.ratom.make_reaction.call(null,((function (vec__44688,_,map__44691,map__44691__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),worker_id], null));
});})(vec__44688,_,map__44691,map__44691__$1,worker_id,workplace_id,datetime))
);
return reagent.ratom.make_reaction.call(null,((function (works,vec__44688,_,map__44691,map__44691__$1,worker_id,workplace_id,datetime){
return (function (){
return cljs.core._EQ_.call(null,"break",new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (works,vec__44688,_,map__44691,map__44691__$1,worker_id,workplace_id,datetime){
return (function (m){
return cljs_time.core.equal_QMARK_.call(null,cljs_time.core.plus.call(null,cljs_time.core.minus.call(null,datetime,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime))),cljs_time.core.hours.call(null,(6))),new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(m));
});})(works,vec__44688,_,map__44691,map__44691__$1,worker_id,workplace_id,datetime))
,cljs.core.deref.call(null,works)))));
});})(works,vec__44688,_,map__44691,map__44691__$1,worker_id,workplace_id,datetime))
);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","all-working-days","work-schedule/all-working-days",-1020979232),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),new cljs.core.Keyword(null,"all-working-days","all-working-days",1056590347)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","all-working-hours","work-schedule/all-working-hours",-2063440714),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","all-working-days","work-schedule/all-working-days",-1020979232)], null),(function (days,_){
return (days * (8));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","hours-worked-in-month","work-schedule/hours-worked-in-month",1171046832),(function (db,p__44693){
var vec__44694 = p__44693;
var _ = cljs.core.nth.call(null,vec__44694,(0),null);
var map__44697 = cljs.core.nth.call(null,vec__44694,(1),null);
var map__44697__$1 = ((((!((map__44697 == null)))?((((map__44697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44697):map__44697);
var worker_id = cljs.core.get.call(null,map__44697__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30522__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"hours-worked-in-month","hours-worked-in-month",-1178358959)], null));
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","days-worked-in-month","work-schedule/days-worked-in-month",1038496604),(function (db,p__44699){
var vec__44700 = p__44699;
var _ = cljs.core.nth.call(null,vec__44700,(0),null);
var map__44703 = cljs.core.nth.call(null,vec__44700,(1),null);
var map__44703__$1 = ((((!((map__44703 == null)))?((((map__44703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44703):map__44703);
var worker_id = cljs.core.get.call(null,map__44703__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30522__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"days-worked-in-month","days-worked-in-month",-1174346359)], null));
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","saturdays-worked-in-month","work-schedule/saturdays-worked-in-month",1098814461),(function (db,p__44705){
var vec__44706 = p__44705;
var _ = cljs.core.nth.call(null,vec__44706,(0),null);
var map__44709 = cljs.core.nth.call(null,vec__44706,(1),null);
var map__44709__$1 = ((((!((map__44709 == null)))?((((map__44709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44709):map__44709);
var worker_id = cljs.core.get.call(null,map__44709__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30522__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"saturdays-worked-in-month","saturdays-worked-in-month",-983473622)], null));
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","sundays-worked-in-month","work-schedule/sundays-worked-in-month",-664863278),(function (db,p__44711){
var vec__44712 = p__44711;
var _ = cljs.core.nth.call(null,vec__44712,(0),null);
var map__44715 = cljs.core.nth.call(null,vec__44712,(1),null);
var map__44715__$1 = ((((!((map__44715 == null)))?((((map__44715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44715):map__44715);
var worker_id = cljs.core.get.call(null,map__44715__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30522__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"sundays-worked-in-month","sundays-worked-in-month",1551954077)], null));
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","first-changes-worked-in-month","work-schedule/first-changes-worked-in-month",2068610616),(function (db,p__44717){
var vec__44718 = p__44717;
var _ = cljs.core.nth.call(null,vec__44718,(0),null);
var map__44721 = cljs.core.nth.call(null,vec__44718,(1),null);
var map__44721__$1 = ((((!((map__44721 == null)))?((((map__44721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44721):map__44721);
var worker_id = cljs.core.get.call(null,map__44721__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var or__30522__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","stats","work-schedule/stats",1594028770),worker_id,new cljs.core.Keyword(null,"first-changes-worked-in-month","first-changes-worked-in-month",-146640955)], null));
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","second-changes-worked-in-month","work-schedule/second-changes-worked-in-month",-856750358),(function (db,p__44723){
var vec__44724 = p__44723;
var _ = cljs.core.nth.call(null,vec__44724,(0),null);
var map__44727 = cljs.core.nth.call(null,vec__44724,(1),null);
var map__44727__$1 = ((((!((map__44727 == null)))?((((map__44727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44727):map__44727);
var worker_id = cljs.core.get.call(null,map__44727__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
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
return (function (p__44729){
var map__44730 = p__44729;
var map__44730__$1 = ((((!((map__44730 == null)))?((((map__44730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44730):map__44730);
var worker = map__44730__$1;
var object_id = cljs.core.get.call(null,map__44730__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var vec__44732 = eckersdorf.work_schedule.utils.worker_working_hours.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,schedule),object_id),cljs_time.core.day.call(null,datetime__$1));
var begin = cljs.core.nth.call(null,vec__44732,(0),null);
var end = cljs.core.nth.call(null,vec__44732,(1),null);
var work_type = cljs.core.nth.call(null,vec__44732,(2),null);
var day_of_weak = cljs.core.nth.call(null,vec__44732,(3),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"datetime","datetime",494675702),datetime__$1,object_id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [begin,end,work_type,day_of_weak], null)]);
});})(datetime,schedule,workplace_id,all_workers,workers,begin_time,end_time))
,cljs.core.deref.call(null,workers)));
});})(datetime,schedule,workplace_id,all_workers,workers,begin_time,end_time))
,cljs_time.periodic.periodic_seq.call(null,begin_time,end_time,cljs_time.core.days.call(null,(1)))));
});})(datetime,schedule,workplace_id,all_workers,workers,begin_time,end_time))
);
}));

//# sourceMappingURL=subs.js.map?rel=1510602152081
