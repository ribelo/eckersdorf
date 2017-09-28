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

var seq__42244 = cljs.core.seq.call(null,value);
var chunk__42245 = null;
var count__42246 = (0);
var i__42247 = (0);
while(true){
if((i__42247 < count__42246)){
var event = cljs.core._nth.call(null,chunk__42245,i__42247);
re_frame.router.dispatch_sync.call(null,event);

var G__42248 = seq__42244;
var G__42249 = chunk__42245;
var G__42250 = count__42246;
var G__42251 = (i__42247 + (1));
seq__42244 = G__42248;
chunk__42245 = G__42249;
count__42246 = G__42250;
i__42247 = G__42251;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__42244);
if(temp__5290__auto__){
var seq__42244__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42244__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__42244__$1);
var G__42252 = cljs.core.chunk_rest.call(null,seq__42244__$1);
var G__42253 = c__31180__auto__;
var G__42254 = cljs.core.count.call(null,c__31180__auto__);
var G__42255 = (0);
seq__42244 = G__42252;
chunk__42245 = G__42253;
count__42246 = G__42254;
i__42247 = G__42255;
continue;
} else {
var event = cljs.core.first.call(null,seq__42244__$1);
re_frame.router.dispatch_sync.call(null,event);

var G__42256 = cljs.core.next.call(null,seq__42244__$1);
var G__42257 = null;
var G__42258 = (0);
var G__42259 = (0);
seq__42244 = G__42256;
chunk__42245 = G__42257;
count__42246 = G__42258;
i__42247 = G__42259;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=init.js.map?rel=1506545649494
