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
var G__32609__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32610__i = 0, G__32610__a = new Array(arguments.length -  0);
while (G__32610__i < G__32610__a.length) {G__32610__a[G__32610__i] = arguments[G__32610__i + 0]; ++G__32610__i;}
  args = new cljs.core.IndexedSeq(G__32610__a,0,null);
} 
return G__32609__delegate.call(this,args);};
G__32609.cljs$lang$maxFixedArity = 0;
G__32609.cljs$lang$applyTo = (function (arglist__32611){
var args = cljs.core.seq(arglist__32611);
return G__32609__delegate(args);
});
G__32609.cljs$core$IFn$_invoke$arity$variadic = G__32609__delegate;
return G__32609;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32612__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32613__i = 0, G__32613__a = new Array(arguments.length -  0);
while (G__32613__i < G__32613__a.length) {G__32613__a[G__32613__i] = arguments[G__32613__i + 0]; ++G__32613__i;}
  args = new cljs.core.IndexedSeq(G__32613__a,0,null);
} 
return G__32612__delegate.call(this,args);};
G__32612.cljs$lang$maxFixedArity = 0;
G__32612.cljs$lang$applyTo = (function (arglist__32614){
var args = cljs.core.seq(arglist__32614);
return G__32612__delegate(args);
});
G__32612.cljs$core$IFn$_invoke$arity$variadic = G__32612__delegate;
return G__32612;
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

//# sourceMappingURL=debug.js.map?rel=1507757435166
