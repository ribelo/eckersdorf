// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42594 = arguments.length;
var i__31527__auto___42595 = (0);
while(true){
if((i__31527__auto___42595 < len__31526__auto___42594)){
args__31533__auto__.push((arguments[i__31527__auto___42595]));

var G__42596 = (i__31527__auto___42595 + (1));
i__31527__auto___42595 = G__42596;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__42191__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__42191__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__42191__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq42592){
var G__42593 = cljs.core.first.call(null,seq42592);
var seq42592__$1 = cljs.core.next.call(null,seq42592);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__42593,seq42592__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42599 = arguments.length;
var i__31527__auto___42600 = (0);
while(true){
if((i__31527__auto___42600 < len__31526__auto___42599)){
args__31533__auto__.push((arguments[i__31527__auto___42600]));

var G__42601 = (i__31527__auto___42600 + (1));
i__31527__auto___42600 = G__42601;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__42191__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__42191__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__42191__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq42597){
var G__42598 = cljs.core.first.call(null,seq42597);
var seq42597__$1 = cljs.core.next.call(null,seq42597);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__42598,seq42597__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42604 = arguments.length;
var i__31527__auto___42605 = (0);
while(true){
if((i__31527__auto___42605 < len__31526__auto___42604)){
args__31533__auto__.push((arguments[i__31527__auto___42605]));

var G__42606 = (i__31527__auto___42605 + (1));
i__31527__auto___42605 = G__42606;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__42191__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__42191__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__42191__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq42602){
var G__42603 = cljs.core.first.call(null,seq42602);
var seq42602__$1 = cljs.core.next.call(null,seq42602);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__42603,seq42602__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42609 = arguments.length;
var i__31527__auto___42610 = (0);
while(true){
if((i__31527__auto___42610 < len__31526__auto___42609)){
args__31533__auto__.push((arguments[i__31527__auto___42610]));

var G__42611 = (i__31527__auto___42610 + (1));
i__31527__auto___42610 = G__42611;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__42191__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__42191__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__42191__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq42607){
var G__42608 = cljs.core.first.call(null,seq42607);
var seq42607__$1 = cljs.core.next.call(null,seq42607);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__42608,seq42607__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42614 = arguments.length;
var i__31527__auto___42615 = (0);
while(true){
if((i__31527__auto___42615 < len__31526__auto___42614)){
args__31533__auto__.push((arguments[i__31527__auto___42615]));

var G__42616 = (i__31527__auto___42615 + (1));
i__31527__auto___42615 = G__42616;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__42191__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__42191__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__42191__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq42612){
var G__42613 = cljs.core.first.call(null,seq42612);
var seq42612__$1 = cljs.core.next.call(null,seq42612);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__42613,seq42612__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42619 = arguments.length;
var i__31527__auto___42620 = (0);
while(true){
if((i__31527__auto___42620 < len__31526__auto___42619)){
args__31533__auto__.push((arguments[i__31527__auto___42620]));

var G__42621 = (i__31527__auto___42620 + (1));
i__31527__auto___42620 = G__42621;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__42191__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__42191__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__42191__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq42617){
var G__42618 = cljs.core.first.call(null,seq42617);
var seq42617__$1 = cljs.core.next.call(null,seq42617);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__42618,seq42617__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42624 = arguments.length;
var i__31527__auto___42625 = (0);
while(true){
if((i__31527__auto___42625 < len__31526__auto___42624)){
args__31533__auto__.push((arguments[i__31527__auto___42625]));

var G__42626 = (i__31527__auto___42625 + (1));
i__31527__auto___42625 = G__42626;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__42191__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__42191__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__42191__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq42622){
var G__42623 = cljs.core.first.call(null,seq42622);
var seq42622__$1 = cljs.core.next.call(null,seq42622);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__42623,seq42622__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42629 = arguments.length;
var i__31527__auto___42630 = (0);
while(true){
if((i__31527__auto___42630 < len__31526__auto___42629)){
args__31533__auto__.push((arguments[i__31527__auto___42630]));

var G__42631 = (i__31527__auto___42630 + (1));
i__31527__auto___42630 = G__42631;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__42191__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__42191__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__42191__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq42627){
var G__42628 = cljs.core.first.call(null,seq42627);
var seq42627__$1 = cljs.core.next.call(null,seq42627);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__42628,seq42627__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42634 = arguments.length;
var i__31527__auto___42635 = (0);
while(true){
if((i__31527__auto___42635 < len__31526__auto___42634)){
args__31533__auto__.push((arguments[i__31527__auto___42635]));

var G__42636 = (i__31527__auto___42635 + (1));
i__31527__auto___42635 = G__42636;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__42191__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__42191__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__42191__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq42632){
var G__42633 = cljs.core.first.call(null,seq42632);
var seq42632__$1 = cljs.core.next.call(null,seq42632);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__42633,seq42632__$1);
});


//# sourceMappingURL=core.js.map?rel=1508862159532
