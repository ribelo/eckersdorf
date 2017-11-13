// Compiled by ClojureScript 1.9.946 {}
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workplace","get-by-id","workplace/get-by-id",-1352956083),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","list","workplaces/list",852308376)], null),(function (workplaces,p__45168){
var vec__45169 = p__45168;
var _ = cljs.core.nth.call(null,vec__45169,(0),null);
var id = cljs.core.nth.call(null,vec__45169,(1),null);
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__45169,_,id){
return (function (p1__45167_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663).cljs$core$IFn$_invoke$arity$1(p1__45167_SHARP_));
});})(vec__45169,_,id))
,workplaces));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workplace","get-by-email","workplace/get-by-email",1808089154),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","list","workplaces/list",852308376)], null),(function (workplaces,p__45173){
var vec__45174 = p__45173;
var _ = cljs.core.nth.call(null,vec__45174,(0),null);
var x = cljs.core.nth.call(null,vec__45174,(1),null);
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__45174,_,x){
return (function (p1__45172_SHARP_){
return cljs.core._EQ_.call(null,x,new cljs.core.Keyword("workplace","email-address","workplace/email-address",-2014908542).cljs$core$IFn$_invoke$arity$1(p1__45172_SHARP_));
});})(vec__45174,_,x))
,workplaces));
}));

//# sourceMappingURL=subs.js.map?rel=1510602152749
