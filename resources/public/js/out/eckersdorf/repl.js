// Compiled by ClojureScript 1.9.946 {}
goog.provide('eckersdorf.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('cljsjs.jquery');
eckersdorf.repl.create_person = (function eckersdorf$repl$create_person(var_args){
var G__33698 = arguments.length;
switch (G__33698) {
case 2:
return eckersdorf.repl.create_person.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eckersdorf.repl.create_person.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eckersdorf.repl.create_person.cljs$core$IFn$_invoke$arity$2 = (function (name,title){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"title","title",636505583),title], null);
});

eckersdorf.repl.create_person.cljs$core$IFn$_invoke$arity$3 = (function (name,title,children){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
});

eckersdorf.repl.create_person.cljs$lang$maxFixedArity = 3;

eckersdorf.repl.datasource = eckersdorf.repl.create_person.call(null,"Rafa\u0142 krzywa\u017Cnia","Prezes",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.repl.create_person.call(null,"El\u017Cbieta \u017Bura\u0144ska","Prokurent")], null));
$("#org-chart").orgchart(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),eckersdorf.repl.datasource,new cljs.core.Keyword(null,"depth","depth",1768663640),(2),new cljs.core.Keyword(null,"nodeContent","nodeContent",-1024068730),new cljs.core.Keyword(null,"title","title",636505583)], null)));
cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),eckersdorf.repl.datasource,new cljs.core.Keyword(null,"depth","depth",1768663640),(2),new cljs.core.Keyword(null,"node-content","node-content",1352249615),new cljs.core.Keyword(null,"title","title",636505583)], null));

//# sourceMappingURL=repl.js.map?rel=1510613863352
