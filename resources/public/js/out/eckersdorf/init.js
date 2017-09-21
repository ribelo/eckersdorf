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
goog.require('eckersdorf.login.db');
goog.require('eckersdorf.login.events');
goog.require('eckersdorf.login.subs');
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

var seq__40644 = cljs.core.seq.call(null,value);
var chunk__40645 = null;
var count__40646 = (0);
var i__40647 = (0);
while(true){
if((i__40647 < count__40646)){
var event = cljs.core._nth.call(null,chunk__40645,i__40647);
re_frame.router.dispatch_sync.call(null,event);

var G__40648 = seq__40644;
var G__40649 = chunk__40645;
var G__40650 = count__40646;
var G__40651 = (i__40647 + (1));
seq__40644 = G__40648;
chunk__40645 = G__40649;
count__40646 = G__40650;
i__40647 = G__40651;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__40644);
if(temp__5290__auto__){
var seq__40644__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40644__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__40644__$1);
var G__40652 = cljs.core.chunk_rest.call(null,seq__40644__$1);
var G__40653 = c__31180__auto__;
var G__40654 = cljs.core.count.call(null,c__31180__auto__);
var G__40655 = (0);
seq__40644 = G__40652;
chunk__40645 = G__40653;
count__40646 = G__40654;
i__40647 = G__40655;
continue;
} else {
var event = cljs.core.first.call(null,seq__40644__$1);
re_frame.router.dispatch_sync.call(null,event);

var G__40656 = cljs.core.next.call(null,seq__40644__$1);
var G__40657 = null;
var G__40658 = (0);
var G__40659 = (0);
seq__40644 = G__40656;
chunk__40645 = G__40657;
count__40646 = G__40658;
i__40647 = G__40659;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=init.js.map?rel=1506033245550
