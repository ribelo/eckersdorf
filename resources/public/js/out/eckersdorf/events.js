// Compiled by ClojureScript 1.9.946 {}
goog.provide('eckersdorf.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('taoensso.encore');
goog.require('eckersdorf.csv.core');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"change-url","change-url",-1138899515),(function (_,p__45337){
var vec__45338 = p__45337;
var seq__45339 = cljs.core.seq.call(null,vec__45338);
var first__45340 = cljs.core.first.call(null,seq__45339);
var seq__45339__$1 = cljs.core.next.call(null,seq__45339);
var ___$1 = first__45340;
var elems = seq__45339__$1;
var path = cljs.core.apply.call(null,taoensso.encore.path,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#/"], null),elems));
return (window["location"] = path);
}));

//# sourceMappingURL=events.js.map?rel=1510609300377
