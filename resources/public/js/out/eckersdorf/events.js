// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('taoensso.encore');
goog.require('eckersdorf.csv.core');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"change-url","change-url",-1138899515),(function (_,p__49094){
var vec__49095 = p__49094;
var seq__49096 = cljs.core.seq.call(null,vec__49095);
var first__49097 = cljs.core.first.call(null,seq__49096);
var seq__49096__$1 = cljs.core.next.call(null,seq__49096);
var ___$1 = first__49097;
var elems = seq__49096__$1;
var path = cljs.core.apply.call(null,taoensso.encore.path,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#/"], null),elems));
return (window["location"] = path);
}));

//# sourceMappingURL=events.js.map?rel=1508862162591
