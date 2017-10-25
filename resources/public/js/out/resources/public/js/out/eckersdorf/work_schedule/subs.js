// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.work_schedule.subs');
goog.require('cljs.core');
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","workplace","work-schedule/workplace",1561743596),(function (db,_){
return new cljs.core.Keyword("work-schedule","workplace","work-schedule/workplace",1561743596).cljs$core$IFn$_invoke$arity$1(db);
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","get","work-schedule/get",-529948046),(function (db,p__56508){
var vec__56509 = p__56508;
var _ = cljs.core.nth.call(null,vec__56509,(0),null);
var vec__56512 = cljs.core.nth.call(null,vec__56509,(1),null);
var date = cljs.core.nth.call(null,vec__56512,(0),null);
var map__56515 = cljs.core.nth.call(null,vec__56512,(1),null);
var map__56515__$1 = ((((!((map__56515 == null)))?((((map__56515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56515):map__56515);
var id = cljs.core.get.call(null,map__56515__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
var hour = cljs.core.nth.call(null,vec__56512,(2),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join(''),id,hour], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","count-work-days","work-schedule/count-work-days",-1651557315),(function (db,_){
return cljs.core.count.call(null,cljs.core.remove.call(null,(function (p1__56517_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(7),null,(6),null], null), null).call(null,cljs_time.core.day_of_week.call(null,p1__56517_SHARP_));
}),new cljs.core.Keyword("work-schedule","days","work-schedule/days",550342111).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","worker-day-schedule","work-schedule/worker-day-schedule",-702330241),(function (db,p__56518){
var vec__56519 = p__56518;
var _ = cljs.core.nth.call(null,vec__56519,(0),null);
var vec__56522 = cljs.core.nth.call(null,vec__56519,(1),null);
var day = cljs.core.nth.call(null,vec__56522,(0),null);
var worker = cljs.core.nth.call(null,vec__56522,(1),null);
return eckersdorf.work_schedule.subs.worker_day_schedule.call(null,worker,day,db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","count-work-hours","work-schedule/count-work-hours",2144139281),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","count-work-days","work-schedule/count-work-days",-1651557315)], null),(function (days){
return (days * (8));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","count-worker-work-hours","work-schedule/count-worker-work-hours",1040359699),(function (db,p__56525){
var vec__56526 = p__56525;
var _ = cljs.core.nth.call(null,vec__56526,(0),null);
var worker = cljs.core.nth.call(null,vec__56526,(1),null);
var date = new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118).cljs$core$IFn$_invoke$arity$1(db);
return eckersdorf.work_schedule.subs.count_worker_hours.call(null,worker,date,db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("work-schedule","print?","work-schedule/print?",-1907155809),(function (db,_){
return new cljs.core.Keyword("view","print?","view/print?",453157869).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1508865004168
