// Compiled by ClojureScript 1.9.946 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__45353){
var vec__45354 = p__45353;
var success_QMARK_ = cljs.core.nth.call(null,vec__45354,(0),null);
var response = cljs.core.nth.call(null,vec__45354,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__45359){
var map__45360 = p__45359;
var map__45360__$1 = ((((!((map__45360 == null)))?((((map__45360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45360):map__45360);
var request = map__45360__$1;
var on_success = cljs.core.get.call(null,map__45360__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__45360__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__45360,map__45360__$1,request,on_success,on_failure){
return (function (p1__45357_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__45357_SHARP_));
});})(api,map__45360,map__45360__$1,request,on_success,on_failure))
,((function (api,map__45360,map__45360__$1,request,on_success,on_failure){
return (function (p1__45358_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__45358_SHARP_));
});})(api,map__45360,map__45360__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__45362 = cljs.core.seq.call(null,seq_request_maps);
var chunk__45363 = null;
var count__45364 = (0);
var i__45365 = (0);
while(true){
if((i__45365 < count__45364)){
var request__$1 = cljs.core._nth.call(null,chunk__45363,i__45365);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__45366 = seq__45362;
var G__45367 = chunk__45363;
var G__45368 = count__45364;
var G__45369 = (i__45365 + (1));
seq__45362 = G__45366;
chunk__45363 = G__45367;
count__45364 = G__45368;
i__45365 = G__45369;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__45362);
if(temp__5457__auto__){
var seq__45362__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45362__$1)){
var c__31453__auto__ = cljs.core.chunk_first.call(null,seq__45362__$1);
var G__45370 = cljs.core.chunk_rest.call(null,seq__45362__$1);
var G__45371 = c__31453__auto__;
var G__45372 = cljs.core.count.call(null,c__31453__auto__);
var G__45373 = (0);
seq__45362 = G__45370;
chunk__45363 = G__45371;
count__45364 = G__45372;
i__45365 = G__45373;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__45362__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__45374 = cljs.core.next.call(null,seq__45362__$1);
var G__45375 = null;
var G__45376 = (0);
var G__45377 = (0);
seq__45362 = G__45374;
chunk__45363 = G__45375;
count__45364 = G__45376;
i__45365 = G__45377;
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

//# sourceMappingURL=http_fx.js.map?rel=1510602152963
