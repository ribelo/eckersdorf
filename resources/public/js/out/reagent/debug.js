// Compiled by ClojureScript 1.9.908 {}
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
var G__32619__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32620__i = 0, G__32620__a = new Array(arguments.length -  0);
while (G__32620__i < G__32620__a.length) {G__32620__a[G__32620__i] = arguments[G__32620__i + 0]; ++G__32620__i;}
  args = new cljs.core.IndexedSeq(G__32620__a,0,null);
} 
return G__32619__delegate.call(this,args);};
G__32619.cljs$lang$maxFixedArity = 0;
G__32619.cljs$lang$applyTo = (function (arglist__32621){
var args = cljs.core.seq(arglist__32621);
return G__32619__delegate(args);
});
G__32619.cljs$core$IFn$_invoke$arity$variadic = G__32619__delegate;
return G__32619;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32622__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32623__i = 0, G__32623__a = new Array(arguments.length -  0);
while (G__32623__i < G__32623__a.length) {G__32623__a[G__32623__i] = arguments[G__32623__i + 0]; ++G__32623__i;}
  args = new cljs.core.IndexedSeq(G__32623__a,0,null);
} 
return G__32622__delegate.call(this,args);};
G__32622.cljs$lang$maxFixedArity = 0;
G__32622.cljs$lang$applyTo = (function (arglist__32624){
var args = cljs.core.seq(arglist__32624);
return G__32622__delegate(args);
});
G__32622.cljs$core$IFn$_invoke$arity$variadic = G__32622__delegate;
return G__32622;
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

//# sourceMappingURL=debug.js.map?rel=1506985641564
