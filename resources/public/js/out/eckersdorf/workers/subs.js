// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.workers.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960),(function (db,_){
return new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),(function (db,_){
return new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617),(function (db,_){
return new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617)], null));
cljs.core.last.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","list","workers/list",-759802960)], null))));
cljs.spec.alpha.explain.call(null,new cljs.core.Keyword("worker","worker","worker/worker",-418761606),cljs.core.last.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","list","workers/list",-759802960)], null)))));

//# sourceMappingURL=subs.js.map?rel=1508739495355
