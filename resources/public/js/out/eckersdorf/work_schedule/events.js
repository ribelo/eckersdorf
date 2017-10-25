// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.work_schedule.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs_time.core');
goog.require('cljs_time.periodic');
goog.require('taoensso.encore');
goog.require('ajax.core');
goog.require('eckersdorf.db.core');
goog.require('cljs_time.coerce');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","show-dialog","work-schedule/show-dialog",1852194113),(function (db,p__84958){
var vec__84959 = p__84958;
var _ = cljs.core.nth.call(null,vec__84959,(0),null);
var type = cljs.core.nth.call(null,vec__84959,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","hide-dialog","work-schedule/hide-dialog",-1968439396),(function (db,p__84962){
var vec__84963 = p__84962;
var _ = cljs.core.nth.call(null,vec__84963,(0),null);
var type = cljs.core.nth.call(null,vec__84963,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","show-dialog?","work-schedule/show-dialog?",-970421831),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","set-workplace","work-schedule/set-workplace",-600467261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (db,p__84966){
var vec__84967 = p__84966;
var _ = cljs.core.nth.call(null,vec__84967,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__84967,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","selected-workplace-id","work-schedule/selected-workplace-id",623410962),workplace_id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","set-date","work-schedule/set-date",-1172573652),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (db,p__84970){
var vec__84971 = p__84970;
var _ = cljs.core.nth.call(null,vec__84971,(0),null);
var date = cljs.core.nth.call(null,vec__84971,(1),null);
var days = cljs_time.periodic.periodic_seq.call(null,cljs_time.core.first_day_of_the_month.call(null,date),cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,date),cljs_time.core.days.call(null,(1))),cljs_time.core.days.call(null,(1)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","main-date","work-schedule/main-date",-1562823118),date,new cljs.core.Keyword("work-schedule","days","work-schedule/days",550342111),days);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),(function (db,p__84974){
var vec__84975 = p__84974;
var _ = cljs.core.nth.call(null,vec__84975,(0),null);
var work = cljs.core.nth.call(null,vec__84975,(1),null);
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.distinct.call(null,cljs.core.conj.call(null,schedule,work)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),(function (db,p__84978){
var vec__84979 = p__84978;
var _ = cljs.core.nth.call(null,vec__84979,(0),null);
var map__84982 = cljs.core.nth.call(null,vec__84979,(1),null);
var map__84982__$1 = ((((!((map__84982 == null)))?((((map__84982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84982):map__84982);
var worker_id = cljs.core.get.call(null,map__84982__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__84982__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__84982__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var schedule = new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.remove.call(null,((function (schedule,vec__84979,_,map__84982,map__84982__$1,worker_id,workplace_id,datetime){
return (function (work){
return (cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603).cljs$core$IFn$_invoke$arity$1(work))) && (cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045).cljs$core$IFn$_invoke$arity$1(work))) && (cljs.core._EQ_.call(null,datetime,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599).cljs$core$IFn$_invoke$arity$1(work)));
});})(schedule,vec__84979,_,map__84982,map__84982__$1,worker_id,workplace_id,datetime))
,schedule))));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),(function (db,p__84984){
var vec__84985 = p__84984;
var _ = cljs.core.nth.call(null,vec__84985,(0),null);
var work = cljs.core.nth.call(null,vec__84985,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),work], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","schedule-work","work-schedule/schedule-work",1434388170),work], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","clear-day","work-schedule/clear-day",2018341687),(function (db,p__84988){
var vec__84989 = p__84988;
var _ = cljs.core.nth.call(null,vec__84989,(0),null);
var map__84992 = cljs.core.nth.call(null,vec__84989,(1),null);
var map__84992__$1 = ((((!((map__84992 == null)))?((((map__84992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84992):map__84992);
var work = map__84992__$1;
var worker_id = cljs.core.get.call(null,map__84992__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__84992__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__84992__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.mapv.call(null,((function (datetime__$1,zero_time,vec__84989,_,map__84992,map__84992__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime__$2))], null);
});})(datetime__$1,zero_time,vec__84989,_,map__84992,map__84992__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),works], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-vacation","work-schedule/set-vacation",-1445617925),(function (db,p__84994){
var vec__84995 = p__84994;
var _ = cljs.core.nth.call(null,vec__84995,(0),null);
var map__84998 = cljs.core.nth.call(null,vec__84995,(1),null);
var map__84998__$1 = ((((!((map__84998 == null)))?((((map__84998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84998):map__84998);
var work = map__84998__$1;
var worker_id = cljs.core.get.call(null,map__84998__$1,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603));
var workplace_id = cljs.core.get.call(null,map__84998__$1,new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045));
var datetime = cljs.core.get.call(null,map__84998__$1,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599));
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.mapv.call(null,((function (datetime__$1,zero_time,vec__84995,_,map__84998,map__84998__$1,work,worker_id,workplace_id,datetime){
return (function (datetime__$2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),cljs.core.assoc.call(null,work,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime__$2),new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"vacation")], null);
});})(datetime__$1,zero_time,vec__84995,_,map__84998,map__84998__$1,work,worker_id,workplace_id,datetime))
,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),works], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","set-holiday","work-schedule/set-holiday",781884568),(function (db,p__85000){
var vec__85001 = p__85000;
var _ = cljs.core.nth.call(null,vec__85001,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__85001,(1),null);
var workers = cljs.core.nth.call(null,vec__85001,(2),null);
var datetime = cljs.core.nth.call(null,vec__85001,(3),null);
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (datetime__$1,zero_time,vec__85001,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__85004(s__85005){
return (new cljs.core.LazySeq(null,((function (datetime__$1,zero_time,vec__85001,_,workplace_id,workers,datetime){
return (function (){
var s__85005__$1 = s__85005;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__85005__$1);
if(temp__5290__auto__){
var xs__5843__auto__ = temp__5290__auto__;
var map__85010 = cljs.core.first.call(null,xs__5843__auto__);
var map__85010__$1 = ((((!((map__85010 == null)))?((((map__85010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85010):map__85010);
var object_id = cljs.core.get.call(null,map__85010__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__85010__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__85010__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__85010__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
var iterys__31128__auto__ = ((function (s__85005__$1,map__85010,map__85010__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__85001,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__85004_$_iter__85006(s__85007){
return (new cljs.core.LazySeq(null,((function (s__85005__$1,map__85010,map__85010__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__85001,_,workplace_id,workers,datetime){
return (function (){
var s__85007__$1 = s__85007;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__85007__$1);
if(temp__5290__auto____$1){
var s__85007__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85007__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__85007__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__85009 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__85008 = (0);
while(true){
if((i__85008 < size__31131__auto__)){
var datetime__$2 = cljs.core._nth.call(null,c__31130__auto__,i__85008);
cljs.core.chunk_append.call(null,b__85009,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime__$2),new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"holiday"], null)], null));

var G__85012 = (i__85008 + (1));
i__85008 = G__85012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85009),eckersdorf$work_schedule$events$iter__85004_$_iter__85006.call(null,cljs.core.chunk_rest.call(null,s__85007__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85009),null);
}
} else {
var datetime__$2 = cljs.core.first.call(null,s__85007__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","update-work","work-schedule/update-work",-297258453),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime__$2),new cljs.core.Keyword("work-schedule","work-type","work-schedule/work-type",985175823),"holiday"], null)], null),eckersdorf$work_schedule$events$iter__85004_$_iter__85006.call(null,cljs.core.rest.call(null,s__85007__$2)));
}
} else {
return null;
}
break;
}
});})(s__85005__$1,map__85010,map__85010__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__85001,_,workplace_id,workers,datetime))
,null,null));
});})(s__85005__$1,map__85010,map__85010__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__85001,_,workplace_id,workers,datetime))
;
var fs__31129__auto__ = cljs.core.seq.call(null,iterys__31128__auto__.call(null,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
if(fs__31129__auto__){
return cljs.core.concat.call(null,fs__31129__auto__,eckersdorf$work_schedule$events$iter__85004.call(null,cljs.core.rest.call(null,s__85005__$1)));
} else {
var G__85013 = cljs.core.rest.call(null,s__85005__$1);
s__85005__$1 = G__85013;
continue;
}
} else {
return null;
}
break;
}
});})(datetime__$1,zero_time,vec__85001,_,workplace_id,workers,datetime))
,null,null));
});})(datetime__$1,zero_time,vec__85001,_,workplace_id,workers,datetime))
;
return iter__31132__auto__.call(null,workers);
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),works], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","remove-holiday","work-schedule/remove-holiday",250448456),(function (db,p__85014){
var vec__85015 = p__85014;
var _ = cljs.core.nth.call(null,vec__85015,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__85015,(1),null);
var workers = cljs.core.nth.call(null,vec__85015,(2),null);
var datetime = cljs.core.nth.call(null,vec__85015,(3),null);
var datetime__$1 = cljs_time.coerce.from_string.call(null,datetime);
var zero_time = cljs_time.core.minus.call(null,datetime__$1,cljs_time.core.hours.call(null,cljs_time.core.hour.call(null,datetime__$1)));
var works = cljs.core.doall.call(null,(function (){var iter__31132__auto__ = ((function (datetime__$1,zero_time,vec__85015,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__85018(s__85019){
return (new cljs.core.LazySeq(null,((function (datetime__$1,zero_time,vec__85015,_,workplace_id,workers,datetime){
return (function (){
var s__85019__$1 = s__85019;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__85019__$1);
if(temp__5290__auto__){
var xs__5843__auto__ = temp__5290__auto__;
var map__85024 = cljs.core.first.call(null,xs__5843__auto__);
var map__85024__$1 = ((((!((map__85024 == null)))?((((map__85024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85024):map__85024);
var object_id = cljs.core.get.call(null,map__85024__$1,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
var first_name = cljs.core.get.call(null,map__85024__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__85024__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
var working_hours = cljs.core.get.call(null,map__85024__$1,new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629));
var iterys__31128__auto__ = ((function (s__85019__$1,map__85024,map__85024__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__85015,_,workplace_id,workers,datetime){
return (function eckersdorf$work_schedule$events$iter__85018_$_iter__85020(s__85021){
return (new cljs.core.LazySeq(null,((function (s__85019__$1,map__85024,map__85024__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__85015,_,workplace_id,workers,datetime){
return (function (){
var s__85021__$1 = s__85021;
while(true){
var temp__5290__auto____$1 = cljs.core.seq.call(null,s__85021__$1);
if(temp__5290__auto____$1){
var s__85021__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85021__$2)){
var c__31130__auto__ = cljs.core.chunk_first.call(null,s__85021__$2);
var size__31131__auto__ = cljs.core.count.call(null,c__31130__auto__);
var b__85023 = cljs.core.chunk_buffer.call(null,size__31131__auto__);
if((function (){var i__85022 = (0);
while(true){
if((i__85022 < size__31131__auto__)){
var datetime__$2 = cljs.core._nth.call(null,c__31130__auto__,i__85022);
cljs.core.chunk_append.call(null,b__85023,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime__$2)], null)], null));

var G__85026 = (i__85022 + (1));
i__85022 = G__85026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85023),eckersdorf$work_schedule$events$iter__85018_$_iter__85020.call(null,cljs.core.chunk_rest.call(null,s__85021__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85023),null);
}
} else {
var datetime__$2 = cljs.core.first.call(null,s__85021__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","remove-work","work-schedule/remove-work",891271461),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("work-schedule","workplace-id","work-schedule/workplace-id",-1900703045),workplace_id,new cljs.core.Keyword("work-schedule","worker-id","work-schedule/worker-id",-1438436603),object_id,new cljs.core.Keyword("work-schedule","datetime","work-schedule/datetime",-1851402599),cljs_time.coerce.to_string.call(null,datetime__$2)], null)], null),eckersdorf$work_schedule$events$iter__85018_$_iter__85020.call(null,cljs.core.rest.call(null,s__85021__$2)));
}
} else {
return null;
}
break;
}
});})(s__85019__$1,map__85024,map__85024__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__85015,_,workplace_id,workers,datetime))
,null,null));
});})(s__85019__$1,map__85024,map__85024__$1,object_id,first_name,last_name,working_hours,xs__5843__auto__,temp__5290__auto__,datetime__$1,zero_time,vec__85015,_,workplace_id,workers,datetime))
;
var fs__31129__auto__ = cljs.core.seq.call(null,iterys__31128__auto__.call(null,cljs_time.periodic.periodic_seq.call(null,cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(6))),cljs_time.core.plus.call(null,zero_time,cljs_time.core.hours.call(null,(21))),cljs_time.core.hours.call(null,(1)))));
if(fs__31129__auto__){
return cljs.core.concat.call(null,fs__31129__auto__,eckersdorf$work_schedule$events$iter__85018.call(null,cljs.core.rest.call(null,s__85019__$1)));
} else {
var G__85027 = cljs.core.rest.call(null,s__85019__$1);
s__85019__$1 = G__85027;
continue;
}
} else {
return null;
}
break;
}
});})(datetime__$1,zero_time,vec__85015,_,workplace_id,workers,datetime))
,null,null));
});})(datetime__$1,zero_time,vec__85015,_,workplace_id,workers,datetime))
;
return iter__31132__auto__.call(null,workers);
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),works], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("work-schedule","clear","work-schedule/clear",209389428),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("work-schedule","schedule","work-schedule/schedule",-1997253035),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","request-work-schedule","work-schedule/request-work-schedule",1636514619),(function (p__85028,p__85029){
var map__85030 = p__85028;
var map__85030__$1 = ((((!((map__85030 == null)))?((((map__85030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85030):map__85030);
var db = cljs.core.get.call(null,map__85030__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__85031 = p__85029;
var _ = cljs.core.nth.call(null,vec__85031,(0),null);
var works = cljs.core.nth.call(null,vec__85031,(1),null);
cljs.core.println.call(null,new cljs.core.Keyword("work-schedule","request-work-schedule","work-schedule/request-work-schedule",1636514619),works);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/work-schedule"),new cljs.core.Keyword(null,"params","params",710516235),works,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","request-work-schedule-success","work-schedule/request-work-schedule-success",-52049297)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-schedule","request-work-schedule-failure","work-schedule/request-work-schedule-failure",-1804738097)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","request-work-schedule-success","work-schedule/request-work-schedule-success",-52049297),(function (p__85035,p__85036){
var map__85037 = p__85035;
var map__85037__$1 = ((((!((map__85037 == null)))?((((map__85037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85037):map__85037);
var db = cljs.core.get.call(null,map__85037__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__85038 = p__85036;
var _ = cljs.core.nth.call(null,vec__85038,(0),null);
var map__85041 = cljs.core.nth.call(null,vec__85038,(1),null);
var map__85041__$1 = ((((!((map__85041 == null)))?((((map__85041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85041):map__85041);
var data = cljs.core.get.call(null,map__85041__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie dodano pracownika",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("work-schedule","request-work-schedule-failure","work-schedule/request-work-schedule-failure",-1804738097),(function (p__85044,p__85045){
var map__85046 = p__85044;
var map__85046__$1 = ((((!((map__85046 == null)))?((((map__85046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85046):map__85046);
var db = cljs.core.get.call(null,map__85046__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__85047 = p__85045;
var _ = cljs.core.nth.call(null,vec__85047,(0),null);
var map__85050 = cljs.core.nth.call(null,vec__85047,(1),null);
var map__85050__$1 = ((((!((map__85050 == null)))?((((map__85050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85050):map__85050);
var response = map__85050__$1;
var status_text = cljs.core.get.call(null,map__85050__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy dodawaniu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1508971837534
