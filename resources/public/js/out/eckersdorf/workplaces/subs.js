// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.workplaces.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workplaces","list","workplaces/list",852308376),(function (db,_){
return new cljs.core.Keyword("workplaces","list","workplaces/list",852308376).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workplaces","show-dialog?","workplaces/show-dialog?",1298196099),(function (db,_){
return new cljs.core.Keyword("workplaces","show-dialog?","workplaces/show-dialog?",1298196099).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237),(function (db,_){
return new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workplace","get-by-id","workplace/get-by-id",-1352956083),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","list","workplaces/list",852308376)], null),(function (workplaces,p__47665){
var vec__47666 = p__47665;
var _ = cljs.core.nth.call(null,vec__47666,(0),null);
var id = cljs.core.nth.call(null,vec__47666,(1),null);
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__47666,_,id){
return (function (p1__47664_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663).cljs$core$IFn$_invoke$arity$1(p1__47664_SHARP_));
});})(vec__47666,_,id))
,workplaces));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workplace","get-by-email","workplace/get-by-email",1808089154),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","list","workplaces/list",852308376)], null),(function (workplaces,p__47670){
var vec__47671 = p__47670;
var _ = cljs.core.nth.call(null,vec__47671,(0),null);
var x = cljs.core.nth.call(null,vec__47671,(1),null);
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__47671,_,x){
return (function (p1__47669_SHARP_){
return cljs.core._EQ_.call(null,x,new cljs.core.Keyword("workplace","email-address","workplace/email-address",-2014908542).cljs$core$IFn$_invoke$arity$1(p1__47669_SHARP_));
});})(vec__47671,_,x))
,workplaces));
}));

//# sourceMappingURL=subs.js.map?rel=1509397948995
