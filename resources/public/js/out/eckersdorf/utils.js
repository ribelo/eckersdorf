// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.utils');
goog.require('cljs.core');
eckersdorf.utils.add_ns = (function eckersdorf$utils$add_ns(m,ns){
if(cljs.core.truth_(m)){
return cljs.core.reduce.call(null,(function (ret,p__47155){
var vec__47156 = p__47155;
var k = cljs.core.nth.call(null,vec__47156,(0),null);
var v = cljs.core.nth.call(null,vec__47156,(1),null);
return cljs.core.assoc.call(null,ret,cljs.core.keyword.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});
eckersdorf.utils.simplify_string = (function eckersdorf$utils$simplify_string(s){
var replacement_list = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,"\u0105\u0107\u0119\u0142\u0144\u00F3\u015B\u017A\u017C","acelnoszz"));
return cljs.core.reduce.call(null,((function (replacement_list){
return (function (ret,x){
return cljs.core.apply.call(null,clojure.string.replace,ret,x);
});})(replacement_list))
,s,replacement_list);
});

//# sourceMappingURL=utils.js.map?rel=1508792853051
