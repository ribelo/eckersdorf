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
goog.require('eckersdorf.workplaces.subs');
goog.require('eckersdorf.workplaces.events');
goog.require('re_frame.router');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
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
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__53326 = cljs.core.seq.call(null,value);
var chunk__53327 = null;
var count__53328 = (0);
var i__53329 = (0);
while(true){
if((i__53329 < count__53328)){
var event = cljs.core._nth.call(null,chunk__53327,i__53329);
re_frame.router.dispatch_sync.call(null,event);

var G__53330 = seq__53326;
var G__53331 = chunk__53327;
var G__53332 = count__53328;
var G__53333 = (i__53329 + (1));
seq__53326 = G__53330;
chunk__53327 = G__53331;
count__53328 = G__53332;
i__53329 = G__53333;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__53326);
if(temp__5290__auto__){
var seq__53326__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53326__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__53326__$1);
var G__53334 = cljs.core.chunk_rest.call(null,seq__53326__$1);
var G__53335 = c__31180__auto__;
var G__53336 = cljs.core.count.call(null,c__31180__auto__);
var G__53337 = (0);
seq__53326 = G__53334;
chunk__53327 = G__53335;
count__53328 = G__53336;
i__53329 = G__53337;
continue;
} else {
var event = cljs.core.first.call(null,seq__53326__$1);
re_frame.router.dispatch_sync.call(null,event);

var G__53338 = cljs.core.next.call(null,seq__53326__$1);
var G__53339 = null;
var G__53340 = (0);
var G__53341 = (0);
seq__53326 = G__53338;
chunk__53327 = G__53339;
count__53328 = G__53340;
i__53329 = G__53341;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=init.js.map?rel=1506985985877
