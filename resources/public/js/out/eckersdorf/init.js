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

var seq__41764 = cljs.core.seq.call(null,value);
var chunk__41765 = null;
var count__41766 = (0);
var i__41767 = (0);
while(true){
if((i__41767 < count__41766)){
var event = cljs.core._nth.call(null,chunk__41765,i__41767);
re_frame.router.dispatch_sync.call(null,event);

var G__41768 = seq__41764;
var G__41769 = chunk__41765;
var G__41770 = count__41766;
var G__41771 = (i__41767 + (1));
seq__41764 = G__41768;
chunk__41765 = G__41769;
count__41766 = G__41770;
i__41767 = G__41771;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__41764);
if(temp__5290__auto__){
var seq__41764__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41764__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__41764__$1);
var G__41772 = cljs.core.chunk_rest.call(null,seq__41764__$1);
var G__41773 = c__31170__auto__;
var G__41774 = cljs.core.count.call(null,c__31170__auto__);
var G__41775 = (0);
seq__41764 = G__41772;
chunk__41765 = G__41773;
count__41766 = G__41774;
i__41767 = G__41775;
continue;
} else {
var event = cljs.core.first.call(null,seq__41764__$1);
re_frame.router.dispatch_sync.call(null,event);

var G__41776 = cljs.core.next.call(null,seq__41764__$1);
var G__41777 = null;
var G__41778 = (0);
var G__41779 = (0);
seq__41764 = G__41776;
chunk__41765 = G__41777;
count__41766 = G__41778;
i__41767 = G__41779;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.registrar.register_handler.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"message","message",-406056002),(function (p__41780){
var map__41781 = p__41780;
var map__41781__$1 = ((((!((map__41781 == null)))?((((map__41781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41781):map__41781);
var m = map__41781__$1;
var content = cljs.core.get.call(null,map__41781__$1,new cljs.core.Keyword(null,"content","content",15833224));
var type = cljs.core.get.call(null,map__41781__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var duration = cljs.core.get.call(null,map__41781__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(!(cljs.core.map_QMARK_.call(null,m))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a map, but got:",m);
} else {
var G__41783 = type;
var G__41783__$1 = (((G__41783 instanceof cljs.core.Keyword))?G__41783.fqn:null);
switch (G__41783__$1) {
case "info":
return antizer.reagent.message_info.call(null,content,(function (){var or__30239__auto__ = duration;
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return 3.5;
}
})());

break;
case "success":
return antizer.reagent.message_success.call(null,content,(function (){var or__30239__auto__ = duration;
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return 3.5;
}
})());

break;
case "warning":
return antizer.reagent.message_warning.call(null,content,(function (){var or__30239__auto__ = duration;
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return 3.5;
}
})());

break;
case "error":
return antizer.reagent.message_error.call(null,content,(function (){var or__30239__auto__ = duration;
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return 3.5;
}
})());

break;
case "loading":
return antizer.reagent.message_loading.call(null,content,(function (){var or__30239__auto__ = duration;
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return 3.5;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41783__$1)].join('')));

}
}
}));

//# sourceMappingURL=init.js.map?rel=1509146504139
