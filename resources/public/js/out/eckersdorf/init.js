// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.init');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('day8.re_frame.http_fx');
goog.require('eckersdorf.db.specs');
goog.require('eckersdorf.events');
goog.require('eckersdorf.routes.events');
goog.require('eckersdorf.db.events');
goog.require('eckersdorf.window.db');
goog.require('eckersdorf.window.subs');
goog.require('eckersdorf.window.events');
goog.require('eckersdorf.process.db');
goog.require('eckersdorf.process.events');
goog.require('eckersdorf.process.subs');
goog.require('eckersdorf.error.db');
goog.require('eckersdorf.error.events');
goog.require('eckersdorf.error.subs');
goog.require('eckersdorf.view.events');
goog.require('eckersdorf.view.subs');
goog.require('eckersdorf.user.db');
goog.require('eckersdorf.user.events');
goog.require('eckersdorf.user.subs');
goog.require('eckersdorf.user.login.db');
goog.require('eckersdorf.user.login.events');
goog.require('eckersdorf.user.login.subs');
goog.require('eckersdorf.workplaces.db');
goog.require('eckersdorf.workplaces.events');
goog.require('eckersdorf.workplaces.subs');
goog.require('eckersdorf.workers.db');
goog.require('eckersdorf.workers.events');
goog.require('eckersdorf.workers.subs');
goog.require('eckersdorf.work_schedule.db');
goog.require('eckersdorf.work_schedule.events');
goog.require('eckersdorf.work_schedule.subs');
goog.require('re_frame.router');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('antizer.reagent');
goog.require('eckersdorf.routes.core');
taoensso.timbre.merge_config_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"debug","debug",-1608172596)], null));
re_frame.registrar.register_handler.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"dispatch-sync","dispatch-sync",1664398243),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch_sync.call(null,value);
}
}));
re_frame.registrar.register_handler.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"dispatch-sync-n","dispatch-sync-n",1563896157),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection but got:",value);
} else {
}

var seq__86103 = cljs.core.seq.call(null,value);
var chunk__86104 = null;
var count__86105 = (0);
var i__86106 = (0);
while(true){
if((i__86106 < count__86105)){
var event = cljs.core._nth.call(null,chunk__86104,i__86106);
re_frame.router.dispatch_sync.call(null,event);

var G__86107 = seq__86103;
var G__86108 = chunk__86104;
var G__86109 = count__86105;
var G__86110 = (i__86106 + (1));
seq__86103 = G__86107;
chunk__86104 = G__86108;
count__86105 = G__86109;
i__86106 = G__86110;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__86103);
if(temp__5290__auto__){
var seq__86103__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86103__$1)){
var c__31181__auto__ = cljs.core.chunk_first.call(null,seq__86103__$1);
var G__86111 = cljs.core.chunk_rest.call(null,seq__86103__$1);
var G__86112 = c__31181__auto__;
var G__86113 = cljs.core.count.call(null,c__31181__auto__);
var G__86114 = (0);
seq__86103 = G__86111;
chunk__86104 = G__86112;
count__86105 = G__86113;
i__86106 = G__86114;
continue;
} else {
var event = cljs.core.first.call(null,seq__86103__$1);
re_frame.router.dispatch_sync.call(null,event);

var G__86115 = cljs.core.next.call(null,seq__86103__$1);
var G__86116 = null;
var G__86117 = (0);
var G__86118 = (0);
seq__86103 = G__86115;
chunk__86104 = G__86116;
count__86105 = G__86117;
i__86106 = G__86118;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.registrar.register_handler.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"message","message",-406056002),(function (p__86119){
var map__86120 = p__86119;
var map__86120__$1 = ((((!((map__86120 == null)))?((((map__86120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86120):map__86120);
var m = map__86120__$1;
var content = cljs.core.get.call(null,map__86120__$1,new cljs.core.Keyword(null,"content","content",15833224));
var type = cljs.core.get.call(null,map__86120__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var duration = cljs.core.get.call(null,map__86120__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(!(cljs.core.map_QMARK_.call(null,m))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a map, but got:",m);
} else {
var G__86122 = type;
var G__86122__$1 = (((G__86122 instanceof cljs.core.Keyword))?G__86122.fqn:null);
switch (G__86122__$1) {
case "info":
return antizer.reagent.message_info.call(null,content,(function (){var or__30249__auto__ = duration;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return 3.5;
}
})());

break;
case "success":
return antizer.reagent.message_success.call(null,content,(function (){var or__30249__auto__ = duration;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return 3.5;
}
})());

break;
case "warning":
return antizer.reagent.message_warning.call(null,content,(function (){var or__30249__auto__ = duration;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return 3.5;
}
})());

break;
case "error":
return antizer.reagent.message_error.call(null,content,(function (){var or__30249__auto__ = duration;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return 3.5;
}
})());

break;
case "loading":
return antizer.reagent.message_loading.call(null,content,(function (){var or__30249__auto__ = duration;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return 3.5;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__86122__$1)].join('')));

}
}
}));

//# sourceMappingURL=init.js.map?rel=1508972485873
