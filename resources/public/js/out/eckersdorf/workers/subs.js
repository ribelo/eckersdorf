// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.workers.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960),(function (db,_){
return cljs.core.sort_by.call(null,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756),new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workers","by-workplace-id","workers/by-workplace-id",1364741936),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","list","workers/list",-759802960)], null),(function (workers,p__47826){
var vec__47827 = p__47826;
var _ = cljs.core.nth.call(null,vec__47827,(0),null);
var workplace_id = cljs.core.nth.call(null,vec__47827,(1),null);
return cljs.core.filter.call(null,((function (vec__47827,_,workplace_id){
return (function (p1__47825_SHARP_){
return cljs.core._EQ_.call(null,workplace_id,new cljs.core.Keyword("worker","workplace","worker/workplace",-1450573153).cljs$core$IFn$_invoke$arity$1(p1__47825_SHARP_));
});})(vec__47827,_,workplace_id))
,workers);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workers","by-id","workers/by-id",-30752208),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","list","workers/list",-759802960)], null),(function (workers,p__47831){
var vec__47832 = p__47831;
var _ = cljs.core.nth.call(null,vec__47832,(0),null);
var worker_id = cljs.core.nth.call(null,vec__47832,(1),null);
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__47832,_,worker_id){
return (function (p1__47830_SHARP_){
return cljs.core._EQ_.call(null,worker_id,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663).cljs$core$IFn$_invoke$arity$1(p1__47830_SHARP_));
});})(vec__47832,_,worker_id))
,workers));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),(function (db,_){
return new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617),(function (db,_){
return new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1509397949113