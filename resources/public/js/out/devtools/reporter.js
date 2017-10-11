// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__31523__auto__ = [];
var len__31516__auto___52621 = arguments.length;
var i__31517__auto___52622 = (0);
while(true){
if((i__31517__auto___52622 < len__31516__auto___52621)){
args__31523__auto__.push((arguments[i__31517__auto___52622]));

var G__52623 = (i__31517__auto___52622 + (1));
i__31517__auto___52622 = G__52623;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((1) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31524__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__52616){
var vec__52617 = p__52616;
var context = cljs.core.nth.call(null,vec__52617,(0),null);
var footer = cljs.core.nth.call(null,vec__52617,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__30239__auto__ = e.message;
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e52620){var e__$1 = e52620;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq52614){
var G__52615 = cljs.core.first.call(null,seq52614);
var seq52614__$1 = cljs.core.next.call(null,seq52614);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52615,seq52614__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1507757474612
