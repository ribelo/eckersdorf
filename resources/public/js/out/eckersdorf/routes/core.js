// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.routes.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('bidi.bidi');
goog.require('pushy.core');
goog.require('taoensso.timbre');
eckersdorf.routes.core.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"main-page","main-page",165237388)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["category/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/.+/,new cljs.core.Keyword(null,"slug","slug",2029314850)], null)], null),new cljs.core.Keyword(null,"category","category",-593092832)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["product/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/.+/,new cljs.core.Keyword(null,"slug","slug",2029314850)], null)], null),new cljs.core.Keyword(null,"product","product",1363474257)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/.+/,new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null),new cljs.core.Keyword(null,"search","search",1564939822)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/.*/,new cljs.core.Keyword(null,"panel","panel",-558637456)], null)], null),new cljs.core.Keyword(null,"panel","panel",-558637456)], null)], null)], null);
eckersdorf.routes.core.dispatch_route = (function eckersdorf$routes$core$dispatch_route(match){
var handler = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(match);
var G__36087 = handler;
var G__36087__$1 = (((G__36087 instanceof cljs.core.Keyword))?G__36087.fqn:null);
switch (G__36087__$1) {
case "main-page":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","deselect-category","warehouse/deselect-category",-1568088930)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","deselect-product","warehouse/deselect-product",-553324422)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","reset-search-field","warehouse/reset-search-field",176730300)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","request-products","warehouse/request-products",-1442291438)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","reset-breadcrumbs","warehouse/reset-breadcrumbs",-1858640541)], null));

break;
case "category":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routes","category","routes/category",365004938),new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(match)], null));

break;
case "product":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routes","product","routes/product",436887195),new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(match)], null));

break;
case "search":
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routes","search","routes/search",308997852),new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(match)], null));

break;
default:
return null;

}
});
eckersdorf.routes.core.match_route = (function eckersdorf$routes$core$match_route(path){
var or__30249__auto__ = bidi.bidi.match_route.call(null,eckersdorf.routes.core.routes,path);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"eckersdorf.routes.core","/tmp/form-init7856236355001265281.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (or__30249__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handler for path: ",path," not exists!"], null);
});})(or__30249__auto__))
,null)),null,-1743745707);
}
});
eckersdorf.routes.core.history = pushy.core.pushy.call(null,eckersdorf.routes.core.dispatch_route,eckersdorf.routes.core.match_route);
eckersdorf.routes.core.init = (function eckersdorf$routes$core$init(){
return pushy.core.start_BANG_.call(null,eckersdorf.routes.core.history);
});
eckersdorf.routes.core.set_token_BANG_ = (function eckersdorf$routes$core$set_token_BANG_(token){
return pushy.core.set_token_BANG_.call(null,eckersdorf.routes.core.history,token);
});
eckersdorf.routes.core.get_token_BANG_ = (function eckersdorf$routes$core$get_token_BANG_(){
return pushy.core.get_token.call(null,eckersdorf.routes.core.history);
});
eckersdorf.routes.core.path_for = (function eckersdorf$routes$core$path_for(var_args){
var args__31533__auto__ = [];
var len__31526__auto___36091 = arguments.length;
var i__31527__auto___36092 = (0);
while(true){
if((i__31527__auto___36092 < len__31526__auto___36091)){
args__31533__auto__.push((arguments[i__31527__auto___36092]));

var G__36093 = (i__31527__auto___36092 + (1));
i__31527__auto___36092 = G__36093;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return eckersdorf.routes.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

eckersdorf.routes.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (tag,args){
return cljs.core.apply.call(null,bidi.bidi.path_for,eckersdorf.routes.core.routes,tag,args);
});

eckersdorf.routes.core.path_for.cljs$lang$maxFixedArity = (1);

eckersdorf.routes.core.path_for.cljs$lang$applyTo = (function (seq36089){
var G__36090 = cljs.core.first.call(null,seq36089);
var seq36089__$1 = cljs.core.next.call(null,seq36089);
return eckersdorf.routes.core.path_for.cljs$core$IFn$_invoke$arity$variadic(G__36090,seq36089__$1);
});


//# sourceMappingURL=core.js.map?rel=1506023321569
