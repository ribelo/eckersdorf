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
var G__52356__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__52356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52357__i = 0, G__52357__a = new Array(arguments.length -  0);
while (G__52357__i < G__52357__a.length) {G__52357__a[G__52357__i] = arguments[G__52357__i + 0]; ++G__52357__i;}
  args = new cljs.core.IndexedSeq(G__52357__a,0,null);
} 
return G__52356__delegate.call(this,args);};
G__52356.cljs$lang$maxFixedArity = 0;
G__52356.cljs$lang$applyTo = (function (arglist__52358){
var args = cljs.core.seq(arglist__52358);
return G__52356__delegate(args);
});
G__52356.cljs$core$IFn$_invoke$arity$variadic = G__52356__delegate;
return G__52356;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__52359__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__52359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52360__i = 0, G__52360__a = new Array(arguments.length -  0);
while (G__52360__i < G__52360__a.length) {G__52360__a[G__52360__i] = arguments[G__52360__i + 0]; ++G__52360__i;}
  args = new cljs.core.IndexedSeq(G__52360__a,0,null);
} 
return G__52359__delegate.call(this,args);};
G__52359.cljs$lang$maxFixedArity = 0;
G__52359.cljs$lang$applyTo = (function (arglist__52361){
var args = cljs.core.seq(arglist__52361);
return G__52359__delegate(args);
});
G__52359.cljs$core$IFn$_invoke$arity$variadic = G__52359__delegate;
return G__52359;
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

//# sourceMappingURL=debug.js.map?rel=1510602162795
