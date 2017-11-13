// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__52357__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__52357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52358__i = 0, G__52358__a = new Array(arguments.length -  0);
while (G__52358__i < G__52358__a.length) {G__52358__a[G__52358__i] = arguments[G__52358__i + 0]; ++G__52358__i;}
  args = new cljs.core.IndexedSeq(G__52358__a,0,null);
} 
return G__52357__delegate.call(this,args);};
G__52357.cljs$lang$maxFixedArity = 0;
G__52357.cljs$lang$applyTo = (function (arglist__52359){
var args = cljs.core.seq(arglist__52359);
return G__52357__delegate(args);
});
G__52357.cljs$core$IFn$_invoke$arity$variadic = G__52357__delegate;
return G__52357;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__52360__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__52360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52361__i = 0, G__52361__a = new Array(arguments.length -  0);
while (G__52361__i < G__52361__a.length) {G__52361__a[G__52361__i] = arguments[G__52361__i + 0]; ++G__52361__i;}
  args = new cljs.core.IndexedSeq(G__52361__a,0,null);
} 
return G__52360__delegate.call(this,args);};
G__52360.cljs$lang$maxFixedArity = 0;
G__52360.cljs$lang$applyTo = (function (arglist__52362){
var args = cljs.core.seq(arglist__52362);
return G__52360__delegate(args);
});
G__52360.cljs$core$IFn$_invoke$arity$variadic = G__52360__delegate;
return G__52360;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1510609304965
