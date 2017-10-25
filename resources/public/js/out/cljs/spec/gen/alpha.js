// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30920__auto__,writer__30921__auto__,opt__30922__auto__){
return cljs.core._write.call(null,writer__30921__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37790 = arguments.length;
var i__31527__auto___37791 = (0);
while(true){
if((i__31527__auto___37791 < len__31526__auto___37790)){
args__31533__auto__.push((arguments[i__31527__auto___37791]));

var G__37792 = (i__31527__auto___37791 + (1));
i__31527__auto___37791 = G__37792;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq37789){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37789));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37794 = arguments.length;
var i__31527__auto___37795 = (0);
while(true){
if((i__31527__auto___37795 < len__31526__auto___37794)){
args__31533__auto__.push((arguments[i__31527__auto___37795]));

var G__37796 = (i__31527__auto___37795 + (1));
i__31527__auto___37795 = G__37796;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq37793){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37793));
});

var g_QMARK__37797 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_37798 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37797){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__37797))
,null));
var mkg_37799 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37797,g_37798){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__37797,g_37798))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__37797,g_37798,mkg_37799){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__37797).call(null,x);
});})(g_QMARK__37797,g_37798,mkg_37799))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__37797,g_37798,mkg_37799){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_37799).call(null,gfn);
});})(g_QMARK__37797,g_37798,mkg_37799))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__37797,g_37798,mkg_37799){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_37798).call(null,generator);
});})(g_QMARK__37797,g_37798,mkg_37799))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32689__auto___37819 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__32689__auto___37819){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37820 = arguments.length;
var i__31527__auto___37821 = (0);
while(true){
if((i__31527__auto___37821 < len__31526__auto___37820)){
args__31533__auto__.push((arguments[i__31527__auto___37821]));

var G__37822 = (i__31527__auto___37821 + (1));
i__31527__auto___37821 = G__37822;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37819))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37819){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37819),args);
});})(g__32689__auto___37819))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__32689__auto___37819){
return (function (seq37800){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37800));
});})(g__32689__auto___37819))
;


var g__32689__auto___37823 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__32689__auto___37823){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37824 = arguments.length;
var i__31527__auto___37825 = (0);
while(true){
if((i__31527__auto___37825 < len__31526__auto___37824)){
args__31533__auto__.push((arguments[i__31527__auto___37825]));

var G__37826 = (i__31527__auto___37825 + (1));
i__31527__auto___37825 = G__37826;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37823))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37823){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37823),args);
});})(g__32689__auto___37823))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__32689__auto___37823){
return (function (seq37801){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37801));
});})(g__32689__auto___37823))
;


var g__32689__auto___37827 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__32689__auto___37827){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37828 = arguments.length;
var i__31527__auto___37829 = (0);
while(true){
if((i__31527__auto___37829 < len__31526__auto___37828)){
args__31533__auto__.push((arguments[i__31527__auto___37829]));

var G__37830 = (i__31527__auto___37829 + (1));
i__31527__auto___37829 = G__37830;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37827))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37827),args);
});})(g__32689__auto___37827))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__32689__auto___37827){
return (function (seq37802){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37802));
});})(g__32689__auto___37827))
;


var g__32689__auto___37831 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__32689__auto___37831){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37832 = arguments.length;
var i__31527__auto___37833 = (0);
while(true){
if((i__31527__auto___37833 < len__31526__auto___37832)){
args__31533__auto__.push((arguments[i__31527__auto___37833]));

var G__37834 = (i__31527__auto___37833 + (1));
i__31527__auto___37833 = G__37834;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37831))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37831){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37831),args);
});})(g__32689__auto___37831))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__32689__auto___37831){
return (function (seq37803){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37803));
});})(g__32689__auto___37831))
;


var g__32689__auto___37835 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__32689__auto___37835){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37836 = arguments.length;
var i__31527__auto___37837 = (0);
while(true){
if((i__31527__auto___37837 < len__31526__auto___37836)){
args__31533__auto__.push((arguments[i__31527__auto___37837]));

var G__37838 = (i__31527__auto___37837 + (1));
i__31527__auto___37837 = G__37838;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37835))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37835){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37835),args);
});})(g__32689__auto___37835))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__32689__auto___37835){
return (function (seq37804){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37804));
});})(g__32689__auto___37835))
;


var g__32689__auto___37839 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__32689__auto___37839){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37840 = arguments.length;
var i__31527__auto___37841 = (0);
while(true){
if((i__31527__auto___37841 < len__31526__auto___37840)){
args__31533__auto__.push((arguments[i__31527__auto___37841]));

var G__37842 = (i__31527__auto___37841 + (1));
i__31527__auto___37841 = G__37842;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37839))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37839),args);
});})(g__32689__auto___37839))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__32689__auto___37839){
return (function (seq37805){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37805));
});})(g__32689__auto___37839))
;


var g__32689__auto___37843 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__32689__auto___37843){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37844 = arguments.length;
var i__31527__auto___37845 = (0);
while(true){
if((i__31527__auto___37845 < len__31526__auto___37844)){
args__31533__auto__.push((arguments[i__31527__auto___37845]));

var G__37846 = (i__31527__auto___37845 + (1));
i__31527__auto___37845 = G__37846;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37843))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37843),args);
});})(g__32689__auto___37843))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__32689__auto___37843){
return (function (seq37806){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37806));
});})(g__32689__auto___37843))
;


var g__32689__auto___37847 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__32689__auto___37847){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37848 = arguments.length;
var i__31527__auto___37849 = (0);
while(true){
if((i__31527__auto___37849 < len__31526__auto___37848)){
args__31533__auto__.push((arguments[i__31527__auto___37849]));

var G__37850 = (i__31527__auto___37849 + (1));
i__31527__auto___37849 = G__37850;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37847))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37847),args);
});})(g__32689__auto___37847))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__32689__auto___37847){
return (function (seq37807){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37807));
});})(g__32689__auto___37847))
;


var g__32689__auto___37851 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__32689__auto___37851){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37852 = arguments.length;
var i__31527__auto___37853 = (0);
while(true){
if((i__31527__auto___37853 < len__31526__auto___37852)){
args__31533__auto__.push((arguments[i__31527__auto___37853]));

var G__37854 = (i__31527__auto___37853 + (1));
i__31527__auto___37853 = G__37854;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37851))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37851),args);
});})(g__32689__auto___37851))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__32689__auto___37851){
return (function (seq37808){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37808));
});})(g__32689__auto___37851))
;


var g__32689__auto___37855 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__32689__auto___37855){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37856 = arguments.length;
var i__31527__auto___37857 = (0);
while(true){
if((i__31527__auto___37857 < len__31526__auto___37856)){
args__31533__auto__.push((arguments[i__31527__auto___37857]));

var G__37858 = (i__31527__auto___37857 + (1));
i__31527__auto___37857 = G__37858;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37855))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37855),args);
});})(g__32689__auto___37855))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__32689__auto___37855){
return (function (seq37809){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37809));
});})(g__32689__auto___37855))
;


var g__32689__auto___37859 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__32689__auto___37859){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37860 = arguments.length;
var i__31527__auto___37861 = (0);
while(true){
if((i__31527__auto___37861 < len__31526__auto___37860)){
args__31533__auto__.push((arguments[i__31527__auto___37861]));

var G__37862 = (i__31527__auto___37861 + (1));
i__31527__auto___37861 = G__37862;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37859))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37859),args);
});})(g__32689__auto___37859))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__32689__auto___37859){
return (function (seq37810){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37810));
});})(g__32689__auto___37859))
;


var g__32689__auto___37863 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__32689__auto___37863){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37864 = arguments.length;
var i__31527__auto___37865 = (0);
while(true){
if((i__31527__auto___37865 < len__31526__auto___37864)){
args__31533__auto__.push((arguments[i__31527__auto___37865]));

var G__37866 = (i__31527__auto___37865 + (1));
i__31527__auto___37865 = G__37866;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37863))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37863),args);
});})(g__32689__auto___37863))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__32689__auto___37863){
return (function (seq37811){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37811));
});})(g__32689__auto___37863))
;


var g__32689__auto___37867 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__32689__auto___37867){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37868 = arguments.length;
var i__31527__auto___37869 = (0);
while(true){
if((i__31527__auto___37869 < len__31526__auto___37868)){
args__31533__auto__.push((arguments[i__31527__auto___37869]));

var G__37870 = (i__31527__auto___37869 + (1));
i__31527__auto___37869 = G__37870;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37867))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37867),args);
});})(g__32689__auto___37867))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__32689__auto___37867){
return (function (seq37812){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37812));
});})(g__32689__auto___37867))
;


var g__32689__auto___37871 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__32689__auto___37871){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37872 = arguments.length;
var i__31527__auto___37873 = (0);
while(true){
if((i__31527__auto___37873 < len__31526__auto___37872)){
args__31533__auto__.push((arguments[i__31527__auto___37873]));

var G__37874 = (i__31527__auto___37873 + (1));
i__31527__auto___37873 = G__37874;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37871))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37871),args);
});})(g__32689__auto___37871))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__32689__auto___37871){
return (function (seq37813){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37813));
});})(g__32689__auto___37871))
;


var g__32689__auto___37875 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__32689__auto___37875){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37876 = arguments.length;
var i__31527__auto___37877 = (0);
while(true){
if((i__31527__auto___37877 < len__31526__auto___37876)){
args__31533__auto__.push((arguments[i__31527__auto___37877]));

var G__37878 = (i__31527__auto___37877 + (1));
i__31527__auto___37877 = G__37878;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37875))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37875),args);
});})(g__32689__auto___37875))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__32689__auto___37875){
return (function (seq37814){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37814));
});})(g__32689__auto___37875))
;


var g__32689__auto___37879 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__32689__auto___37879){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37880 = arguments.length;
var i__31527__auto___37881 = (0);
while(true){
if((i__31527__auto___37881 < len__31526__auto___37880)){
args__31533__auto__.push((arguments[i__31527__auto___37881]));

var G__37882 = (i__31527__auto___37881 + (1));
i__31527__auto___37881 = G__37882;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37879))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37879),args);
});})(g__32689__auto___37879))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__32689__auto___37879){
return (function (seq37815){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37815));
});})(g__32689__auto___37879))
;


var g__32689__auto___37883 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__32689__auto___37883){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37884 = arguments.length;
var i__31527__auto___37885 = (0);
while(true){
if((i__31527__auto___37885 < len__31526__auto___37884)){
args__31533__auto__.push((arguments[i__31527__auto___37885]));

var G__37886 = (i__31527__auto___37885 + (1));
i__31527__auto___37885 = G__37886;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37883))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37883),args);
});})(g__32689__auto___37883))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32689__auto___37883){
return (function (seq37816){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37816));
});})(g__32689__auto___37883))
;


var g__32689__auto___37887 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__32689__auto___37887){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37888 = arguments.length;
var i__31527__auto___37889 = (0);
while(true){
if((i__31527__auto___37889 < len__31526__auto___37888)){
args__31533__auto__.push((arguments[i__31527__auto___37889]));

var G__37890 = (i__31527__auto___37889 + (1));
i__31527__auto___37889 = G__37890;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37887))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37887),args);
});})(g__32689__auto___37887))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__32689__auto___37887){
return (function (seq37817){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37817));
});})(g__32689__auto___37887))
;


var g__32689__auto___37891 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__32689__auto___37891){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37892 = arguments.length;
var i__31527__auto___37893 = (0);
while(true){
if((i__31527__auto___37893 < len__31526__auto___37892)){
args__31533__auto__.push((arguments[i__31527__auto___37893]));

var G__37894 = (i__31527__auto___37893 + (1));
i__31527__auto___37893 = G__37894;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32689__auto___37891))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32689__auto___37891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32689__auto___37891),args);
});})(g__32689__auto___37891))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__32689__auto___37891){
return (function (seq37818){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37818));
});})(g__32689__auto___37891))
;

var g__32702__auto___37916 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__32702__auto___37916){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37917 = arguments.length;
var i__31527__auto___37918 = (0);
while(true){
if((i__31527__auto___37918 < len__31526__auto___37917)){
args__31533__auto__.push((arguments[i__31527__auto___37918]));

var G__37919 = (i__31527__auto___37918 + (1));
i__31527__auto___37918 = G__37919;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37916))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37916){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37916);
});})(g__32702__auto___37916))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__32702__auto___37916){
return (function (seq37895){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37895));
});})(g__32702__auto___37916))
;


var g__32702__auto___37920 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__32702__auto___37920){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37921 = arguments.length;
var i__31527__auto___37922 = (0);
while(true){
if((i__31527__auto___37922 < len__31526__auto___37921)){
args__31533__auto__.push((arguments[i__31527__auto___37922]));

var G__37923 = (i__31527__auto___37922 + (1));
i__31527__auto___37922 = G__37923;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37920))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37920){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37920);
});})(g__32702__auto___37920))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__32702__auto___37920){
return (function (seq37896){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37896));
});})(g__32702__auto___37920))
;


var g__32702__auto___37924 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__32702__auto___37924){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37925 = arguments.length;
var i__31527__auto___37926 = (0);
while(true){
if((i__31527__auto___37926 < len__31526__auto___37925)){
args__31533__auto__.push((arguments[i__31527__auto___37926]));

var G__37927 = (i__31527__auto___37926 + (1));
i__31527__auto___37926 = G__37927;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37924))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37924){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37924);
});})(g__32702__auto___37924))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__32702__auto___37924){
return (function (seq37897){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37897));
});})(g__32702__auto___37924))
;


var g__32702__auto___37928 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__32702__auto___37928){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37929 = arguments.length;
var i__31527__auto___37930 = (0);
while(true){
if((i__31527__auto___37930 < len__31526__auto___37929)){
args__31533__auto__.push((arguments[i__31527__auto___37930]));

var G__37931 = (i__31527__auto___37930 + (1));
i__31527__auto___37930 = G__37931;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37928))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37928){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37928);
});})(g__32702__auto___37928))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__32702__auto___37928){
return (function (seq37898){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37898));
});})(g__32702__auto___37928))
;


var g__32702__auto___37932 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__32702__auto___37932){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37933 = arguments.length;
var i__31527__auto___37934 = (0);
while(true){
if((i__31527__auto___37934 < len__31526__auto___37933)){
args__31533__auto__.push((arguments[i__31527__auto___37934]));

var G__37935 = (i__31527__auto___37934 + (1));
i__31527__auto___37934 = G__37935;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37932))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37932){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37932);
});})(g__32702__auto___37932))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__32702__auto___37932){
return (function (seq37899){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37899));
});})(g__32702__auto___37932))
;


var g__32702__auto___37936 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__32702__auto___37936){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37937 = arguments.length;
var i__31527__auto___37938 = (0);
while(true){
if((i__31527__auto___37938 < len__31526__auto___37937)){
args__31533__auto__.push((arguments[i__31527__auto___37938]));

var G__37939 = (i__31527__auto___37938 + (1));
i__31527__auto___37938 = G__37939;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37936))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37936){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37936);
});})(g__32702__auto___37936))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__32702__auto___37936){
return (function (seq37900){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37900));
});})(g__32702__auto___37936))
;


var g__32702__auto___37940 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__32702__auto___37940){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37941 = arguments.length;
var i__31527__auto___37942 = (0);
while(true){
if((i__31527__auto___37942 < len__31526__auto___37941)){
args__31533__auto__.push((arguments[i__31527__auto___37942]));

var G__37943 = (i__31527__auto___37942 + (1));
i__31527__auto___37942 = G__37943;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37940))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37940){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37940);
});})(g__32702__auto___37940))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__32702__auto___37940){
return (function (seq37901){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37901));
});})(g__32702__auto___37940))
;


var g__32702__auto___37944 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__32702__auto___37944){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37945 = arguments.length;
var i__31527__auto___37946 = (0);
while(true){
if((i__31527__auto___37946 < len__31526__auto___37945)){
args__31533__auto__.push((arguments[i__31527__auto___37946]));

var G__37947 = (i__31527__auto___37946 + (1));
i__31527__auto___37946 = G__37947;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37944))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37944){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37944);
});})(g__32702__auto___37944))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__32702__auto___37944){
return (function (seq37902){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37902));
});})(g__32702__auto___37944))
;


var g__32702__auto___37948 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__32702__auto___37948){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37949 = arguments.length;
var i__31527__auto___37950 = (0);
while(true){
if((i__31527__auto___37950 < len__31526__auto___37949)){
args__31533__auto__.push((arguments[i__31527__auto___37950]));

var G__37951 = (i__31527__auto___37950 + (1));
i__31527__auto___37950 = G__37951;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37948))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37948){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37948);
});})(g__32702__auto___37948))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__32702__auto___37948){
return (function (seq37903){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37903));
});})(g__32702__auto___37948))
;


var g__32702__auto___37952 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__32702__auto___37952){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37953 = arguments.length;
var i__31527__auto___37954 = (0);
while(true){
if((i__31527__auto___37954 < len__31526__auto___37953)){
args__31533__auto__.push((arguments[i__31527__auto___37954]));

var G__37955 = (i__31527__auto___37954 + (1));
i__31527__auto___37954 = G__37955;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37952))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37952){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37952);
});})(g__32702__auto___37952))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__32702__auto___37952){
return (function (seq37904){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37904));
});})(g__32702__auto___37952))
;


var g__32702__auto___37956 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__32702__auto___37956){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37957 = arguments.length;
var i__31527__auto___37958 = (0);
while(true){
if((i__31527__auto___37958 < len__31526__auto___37957)){
args__31533__auto__.push((arguments[i__31527__auto___37958]));

var G__37959 = (i__31527__auto___37958 + (1));
i__31527__auto___37958 = G__37959;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37956))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37956){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37956);
});})(g__32702__auto___37956))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__32702__auto___37956){
return (function (seq37905){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37905));
});})(g__32702__auto___37956))
;


var g__32702__auto___37960 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__32702__auto___37960){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37961 = arguments.length;
var i__31527__auto___37962 = (0);
while(true){
if((i__31527__auto___37962 < len__31526__auto___37961)){
args__31533__auto__.push((arguments[i__31527__auto___37962]));

var G__37963 = (i__31527__auto___37962 + (1));
i__31527__auto___37962 = G__37963;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37960))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37960){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37960);
});})(g__32702__auto___37960))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__32702__auto___37960){
return (function (seq37906){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37906));
});})(g__32702__auto___37960))
;


var g__32702__auto___37964 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__32702__auto___37964){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37965 = arguments.length;
var i__31527__auto___37966 = (0);
while(true){
if((i__31527__auto___37966 < len__31526__auto___37965)){
args__31533__auto__.push((arguments[i__31527__auto___37966]));

var G__37967 = (i__31527__auto___37966 + (1));
i__31527__auto___37966 = G__37967;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37964))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37964){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37964);
});})(g__32702__auto___37964))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__32702__auto___37964){
return (function (seq37907){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37907));
});})(g__32702__auto___37964))
;


var g__32702__auto___37968 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__32702__auto___37968){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37969 = arguments.length;
var i__31527__auto___37970 = (0);
while(true){
if((i__31527__auto___37970 < len__31526__auto___37969)){
args__31533__auto__.push((arguments[i__31527__auto___37970]));

var G__37971 = (i__31527__auto___37970 + (1));
i__31527__auto___37970 = G__37971;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37968))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37968){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37968);
});})(g__32702__auto___37968))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__32702__auto___37968){
return (function (seq37908){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37908));
});})(g__32702__auto___37968))
;


var g__32702__auto___37972 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__32702__auto___37972){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37973 = arguments.length;
var i__31527__auto___37974 = (0);
while(true){
if((i__31527__auto___37974 < len__31526__auto___37973)){
args__31533__auto__.push((arguments[i__31527__auto___37974]));

var G__37975 = (i__31527__auto___37974 + (1));
i__31527__auto___37974 = G__37975;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37972))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37972){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37972);
});})(g__32702__auto___37972))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__32702__auto___37972){
return (function (seq37909){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37909));
});})(g__32702__auto___37972))
;


var g__32702__auto___37976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__32702__auto___37976){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37977 = arguments.length;
var i__31527__auto___37978 = (0);
while(true){
if((i__31527__auto___37978 < len__31526__auto___37977)){
args__31533__auto__.push((arguments[i__31527__auto___37978]));

var G__37979 = (i__31527__auto___37978 + (1));
i__31527__auto___37978 = G__37979;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37976))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37976){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37976);
});})(g__32702__auto___37976))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__32702__auto___37976){
return (function (seq37910){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37910));
});})(g__32702__auto___37976))
;


var g__32702__auto___37980 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__32702__auto___37980){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37981 = arguments.length;
var i__31527__auto___37982 = (0);
while(true){
if((i__31527__auto___37982 < len__31526__auto___37981)){
args__31533__auto__.push((arguments[i__31527__auto___37982]));

var G__37983 = (i__31527__auto___37982 + (1));
i__31527__auto___37982 = G__37983;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37980))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37980){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37980);
});})(g__32702__auto___37980))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__32702__auto___37980){
return (function (seq37911){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37911));
});})(g__32702__auto___37980))
;


var g__32702__auto___37984 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__32702__auto___37984){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37985 = arguments.length;
var i__31527__auto___37986 = (0);
while(true){
if((i__31527__auto___37986 < len__31526__auto___37985)){
args__31533__auto__.push((arguments[i__31527__auto___37986]));

var G__37987 = (i__31527__auto___37986 + (1));
i__31527__auto___37986 = G__37987;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37984))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37984){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37984);
});})(g__32702__auto___37984))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__32702__auto___37984){
return (function (seq37912){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37912));
});})(g__32702__auto___37984))
;


var g__32702__auto___37988 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__32702__auto___37988){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37989 = arguments.length;
var i__31527__auto___37990 = (0);
while(true){
if((i__31527__auto___37990 < len__31526__auto___37989)){
args__31533__auto__.push((arguments[i__31527__auto___37990]));

var G__37991 = (i__31527__auto___37990 + (1));
i__31527__auto___37990 = G__37991;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37988))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37988){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37988);
});})(g__32702__auto___37988))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__32702__auto___37988){
return (function (seq37913){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37913));
});})(g__32702__auto___37988))
;


var g__32702__auto___37992 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__32702__auto___37992){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37993 = arguments.length;
var i__31527__auto___37994 = (0);
while(true){
if((i__31527__auto___37994 < len__31526__auto___37993)){
args__31533__auto__.push((arguments[i__31527__auto___37994]));

var G__37995 = (i__31527__auto___37994 + (1));
i__31527__auto___37994 = G__37995;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37992))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37992){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37992);
});})(g__32702__auto___37992))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__32702__auto___37992){
return (function (seq37914){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37914));
});})(g__32702__auto___37992))
;


var g__32702__auto___37996 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__32702__auto___37996){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31533__auto__ = [];
var len__31526__auto___37997 = arguments.length;
var i__31527__auto___37998 = (0);
while(true){
if((i__31527__auto___37998 < len__31526__auto___37997)){
args__31533__auto__.push((arguments[i__31527__auto___37998]));

var G__37999 = (i__31527__auto___37998 + (1));
i__31527__auto___37998 = G__37999;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});})(g__32702__auto___37996))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32702__auto___37996){
return (function (args){
return cljs.core.deref.call(null,g__32702__auto___37996);
});})(g__32702__auto___37996))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__32702__auto___37996){
return (function (seq37915){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37915));
});})(g__32702__auto___37996))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31533__auto__ = [];
var len__31526__auto___38002 = arguments.length;
var i__31527__auto___38003 = (0);
while(true){
if((i__31527__auto___38003 < len__31526__auto___38002)){
args__31533__auto__.push((arguments[i__31527__auto___38003]));

var G__38004 = (i__31527__auto___38003 + (1));
i__31527__auto___38003 = G__38004;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__38000_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__38000_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq38001){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38001));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__38005_SHARP_){
return (new Date(p1__38005_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1508862155067
