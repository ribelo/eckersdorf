// Compiled by ClojureScript 1.9.946 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__45354){
var vec__45355 = p__45354;
var success_QMARK_ = cljs.core.nth.call(null,vec__45355,(0),null);
var response = cljs.core.nth.call(null,vec__45355,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__45360){
var map__45361 = p__45360;
var map__45361__$1 = ((((!((map__45361 == null)))?((((map__45361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45361):map__45361);
var request = map__45361__$1;
var on_success = cljs.core.get.call(null,map__45361__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__45361__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__45361,map__45361__$1,request,on_success,on_failure){
return (function (p1__45358_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__45358_SHARP_));
});})(api,map__45361,map__45361__$1,request,on_success,on_failure))
,((function (api,map__45361,map__45361__$1,request,on_success,on_failure){
return (function (p1__45359_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__45359_SHARP_));
});})(api,map__45361,map__45361__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__45363 = cljs.core.seq.call(null,seq_request_maps);
var chunk__45364 = null;
var count__45365 = (0);
var i__45366 = (0);
while(true){
if((i__45366 < count__45365)){
var request__$1 = cljs.core._nth.call(null,chunk__45364,i__45366);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__45367 = seq__45363;
var G__45368 = chunk__45364;
var G__45369 = count__45365;
var G__45370 = (i__45366 + (1));
seq__45363 = G__45367;
chunk__45364 = G__45368;
count__45365 = G__45369;
i__45366 = G__45370;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__45363);
if(temp__5457__auto__){
var seq__45363__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45363__$1)){
var c__31454__auto__ = cljs.core.chunk_first.call(null,seq__45363__$1);
var G__45371 = cljs.core.chunk_rest.call(null,seq__45363__$1);
var G__45372 = c__31454__auto__;
var G__45373 = cljs.core.count.call(null,c__31454__auto__);
var G__45374 = (0);
seq__45363 = G__45371;
chunk__45364 = G__45372;
count__45365 = G__45373;
i__45366 = G__45374;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__45363__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__45375 = cljs.core.next.call(null,seq__45363__$1);
var G__45376 = null;
var G__45377 = (0);
var G__45378 = (0);
seq__45363 = G__45375;
chunk__45364 = G__45376;
count__45365 = G__45377;
i__45366 = G__45378;
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

//# sourceMappingURL=http_fx.js.map?rel=1510609300398
