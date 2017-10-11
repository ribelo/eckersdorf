// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('taoensso.encore');
goog.require('eckersdorf.csv.core');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"change-url","change-url",-1138899515),(function (_,p__48874){
var vec__48875 = p__48874;
var seq__48876 = cljs.core.seq.call(null,vec__48875);
var first__48877 = cljs.core.first.call(null,seq__48876);
var seq__48876__$1 = cljs.core.next.call(null,seq__48876);
var ___$1 = first__48877;
var elems = seq__48876__$1;
var path = cljs.core.apply.call(null,taoensso.encore.path,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#/"], null),elems));
return (window["location"] = path);
}));

//# sourceMappingURL=events.js.map?rel=1507757467556
