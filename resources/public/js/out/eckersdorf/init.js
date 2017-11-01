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

var seq__49353 = cljs.core.seq.call(null,value);
var chunk__49354 = null;
var count__49355 = (0);
var i__49356 = (0);
while(true){
if((i__49356 < count__49355)){
var event = cljs.core._nth.call(null,chunk__49354,i__49356);
re_frame.router.dispatch_sync.call(null,event);

var G__49357 = seq__49353;
var G__49358 = chunk__49354;
var G__49359 = count__49355;
var G__49360 = (i__49356 + (1));
seq__49353 = G__49357;
chunk__49354 = G__49358;
count__49355 = G__49359;
i__49356 = G__49360;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__49353);
if(temp__5290__auto__){
var seq__49353__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49353__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__49353__$1);
var G__49361 = cljs.core.chunk_rest.call(null,seq__49353__$1);
var G__49362 = c__31180__auto__;
var G__49363 = cljs.core.count.call(null,c__31180__auto__);
var G__49364 = (0);
seq__49353 = G__49361;
chunk__49354 = G__49362;
count__49355 = G__49363;
i__49356 = G__49364;
continue;
} else {
var event = cljs.core.first.call(null,seq__49353__$1);
re_frame.router.dispatch_sync.call(null,event);

var G__49365 = cljs.core.next.call(null,seq__49353__$1);
var G__49366 = null;
var G__49367 = (0);
var G__49368 = (0);
seq__49353 = G__49365;
chunk__49354 = G__49366;
count__49355 = G__49367;
i__49356 = G__49368;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.registrar.register_handler.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"message","message",-406056002),(function (p__49369){
var map__49370 = p__49369;
var map__49370__$1 = ((((!((map__49370 == null)))?((((map__49370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49370):map__49370);
var m = map__49370__$1;
var content = cljs.core.get.call(null,map__49370__$1,new cljs.core.Keyword(null,"content","content",15833224));
var type = cljs.core.get.call(null,map__49370__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var duration = cljs.core.get.call(null,map__49370__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(!(cljs.core.map_QMARK_.call(null,m))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a map, but got:",m);
} else {
var G__49372 = type;
var G__49372__$1 = (((G__49372 instanceof cljs.core.Keyword))?G__49372.fqn:null);
switch (G__49372__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49372__$1)].join('')));

}
}
}));

//# sourceMappingURL=init.js.map?rel=1509571742373
