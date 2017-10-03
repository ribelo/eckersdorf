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

var seq__59794 = cljs.core.seq.call(null,value);
var chunk__59795 = null;
var count__59796 = (0);
var i__59797 = (0);
while(true){
if((i__59797 < count__59796)){
var event = cljs.core._nth.call(null,chunk__59795,i__59797);
re_frame.router.dispatch_sync.call(null,event);

var G__59798 = seq__59794;
var G__59799 = chunk__59795;
var G__59800 = count__59796;
var G__59801 = (i__59797 + (1));
seq__59794 = G__59798;
chunk__59795 = G__59799;
count__59796 = G__59800;
i__59797 = G__59801;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__59794);
if(temp__5290__auto__){
var seq__59794__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59794__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__59794__$1);
var G__59802 = cljs.core.chunk_rest.call(null,seq__59794__$1);
var G__59803 = c__31180__auto__;
var G__59804 = cljs.core.count.call(null,c__31180__auto__);
var G__59805 = (0);
seq__59794 = G__59802;
chunk__59795 = G__59803;
count__59796 = G__59804;
i__59797 = G__59805;
continue;
} else {
var event = cljs.core.first.call(null,seq__59794__$1);
re_frame.router.dispatch_sync.call(null,event);

var G__59806 = cljs.core.next.call(null,seq__59794__$1);
var G__59807 = null;
var G__59808 = (0);
var G__59809 = (0);
seq__59794 = G__59806;
chunk__59795 = G__59807;
count__59796 = G__59808;
i__59797 = G__59809;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=init.js.map?rel=1507060443414
