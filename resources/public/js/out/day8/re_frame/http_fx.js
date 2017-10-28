// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__49348){
var vec__49349 = p__49348;
var success_QMARK_ = cljs.core.nth.call(null,vec__49349,(0),null);
var response = cljs.core.nth.call(null,vec__49349,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__49354){
var map__49355 = p__49354;
var map__49355__$1 = ((((!((map__49355 == null)))?((((map__49355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49355):map__49355);
var request = map__49355__$1;
var on_success = cljs.core.get.call(null,map__49355__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__49355__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__49355,map__49355__$1,request,on_success,on_failure){
return (function (p1__49352_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__49352_SHARP_));
});})(api,map__49355,map__49355__$1,request,on_success,on_failure))
,((function (api,map__49355,map__49355__$1,request,on_success,on_failure){
return (function (p1__49353_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__49353_SHARP_));
});})(api,map__49355,map__49355__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__49357 = cljs.core.seq.call(null,seq_request_maps);
var chunk__49358 = null;
var count__49359 = (0);
var i__49360 = (0);
while(true){
if((i__49360 < count__49359)){
var request__$1 = cljs.core._nth.call(null,chunk__49358,i__49360);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__49361 = seq__49357;
var G__49362 = chunk__49358;
var G__49363 = count__49359;
var G__49364 = (i__49360 + (1));
seq__49357 = G__49361;
chunk__49358 = G__49362;
count__49359 = G__49363;
i__49360 = G__49364;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__49357);
if(temp__5290__auto__){
var seq__49357__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49357__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__49357__$1);
var G__49365 = cljs.core.chunk_rest.call(null,seq__49357__$1);
var G__49366 = c__31170__auto__;
var G__49367 = cljs.core.count.call(null,c__31170__auto__);
var G__49368 = (0);
seq__49357 = G__49365;
chunk__49358 = G__49366;
count__49359 = G__49367;
i__49360 = G__49368;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__49357__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__49369 = cljs.core.next.call(null,seq__49357__$1);
var G__49370 = null;
var G__49371 = (0);
var G__49372 = (0);
seq__49357 = G__49369;
chunk__49358 = G__49370;
count__49359 = G__49371;
i__49360 = G__49372;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=http_fx.js.map?rel=1509094252233
