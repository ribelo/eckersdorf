// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.error.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("error","event","error/event",406241322),(function (db){
return cljs.core.get.call(null,db,new cljs.core.Keyword("error","event","error/event",406241322));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("error","name","error/name",1621140033),(function (db){
return cljs.core.get.call(null,db,new cljs.core.Keyword("error","name","error/name",1621140033));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("error","description","error/description",-1591863400),(function (db){
return cljs.core.get.call(null,db,new cljs.core.Keyword("error","description","error/description",-1591863400));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("error","last-error","error/last-error",1601404477),(function (db){
var ks = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","event","error/event",406241322),new cljs.core.Keyword("error","description","error/description",-1591863400),new cljs.core.Keyword("error","name","error/name",1621140033)], null);
return cljs.core.reduce.call(null,((function (ks){
return (function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.get.call(null,k,db));
});})(ks))
,cljs.core.PersistentArrayMap.EMPTY,ks);
}));

//# sourceMappingURL=subs.js.map?rel=1509397949018
