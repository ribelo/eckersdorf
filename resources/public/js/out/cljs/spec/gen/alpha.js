// Compiled by ClojureScript 1.9.946 {}
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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__31193__auto__,writer__31194__auto__,opt__31195__auto__){
return cljs.core._write.call(null,writer__31194__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__31808__auto__ = [];
var len__31801__auto___32879 = arguments.length;
var i__31802__auto___32880 = (0);
while(true){
if((i__31802__auto___32880 < len__31801__auto___32879)){
args__31808__auto__.push((arguments[i__31802__auto___32880]));

var G__32881 = (i__31802__auto___32880 + (1));
i__31802__auto___32880 = G__32881;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq32878){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32878));
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
var args__31808__auto__ = [];
var len__31801__auto___32883 = arguments.length;
var i__31802__auto___32884 = (0);
while(true){
if((i__31802__auto___32884 < len__31801__auto___32883)){
args__31808__auto__.push((arguments[i__31802__auto___32884]));

var G__32885 = (i__31802__auto___32884 + (1));
i__31802__auto___32884 = G__32885;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq32882){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32882));
});

var g_QMARK__32886 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_32887 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__32886){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__32886))
,null));
var mkg_32888 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__32886,g_32887){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__32886,g_32887))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__32886,g_32887,mkg_32888){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__32886).call(null,x);
});})(g_QMARK__32886,g_32887,mkg_32888))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__32886,g_32887,mkg_32888){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_32888).call(null,gfn);
});})(g_QMARK__32886,g_32887,mkg_32888))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__32886,g_32887,mkg_32888){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_32887).call(null,generator);
});})(g_QMARK__32886,g_32887,mkg_32888))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32850__auto___32908 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__32850__auto___32908){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32909 = arguments.length;
var i__31802__auto___32910 = (0);
while(true){
if((i__31802__auto___32910 < len__31801__auto___32909)){
args__31808__auto__.push((arguments[i__31802__auto___32910]));

var G__32911 = (i__31802__auto___32910 + (1));
i__31802__auto___32910 = G__32911;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32908))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32908){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32908),args);
});})(g__32850__auto___32908))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__32850__auto___32908){
return (function (seq32889){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32889));
});})(g__32850__auto___32908))
;


var g__32850__auto___32912 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__32850__auto___32912){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32913 = arguments.length;
var i__31802__auto___32914 = (0);
while(true){
if((i__31802__auto___32914 < len__31801__auto___32913)){
args__31808__auto__.push((arguments[i__31802__auto___32914]));

var G__32915 = (i__31802__auto___32914 + (1));
i__31802__auto___32914 = G__32915;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32912))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32912){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32912),args);
});})(g__32850__auto___32912))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__32850__auto___32912){
return (function (seq32890){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32890));
});})(g__32850__auto___32912))
;


var g__32850__auto___32916 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__32850__auto___32916){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32917 = arguments.length;
var i__31802__auto___32918 = (0);
while(true){
if((i__31802__auto___32918 < len__31801__auto___32917)){
args__31808__auto__.push((arguments[i__31802__auto___32918]));

var G__32919 = (i__31802__auto___32918 + (1));
i__31802__auto___32918 = G__32919;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32916))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32916){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32916),args);
});})(g__32850__auto___32916))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__32850__auto___32916){
return (function (seq32891){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32891));
});})(g__32850__auto___32916))
;


var g__32850__auto___32920 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__32850__auto___32920){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32921 = arguments.length;
var i__31802__auto___32922 = (0);
while(true){
if((i__31802__auto___32922 < len__31801__auto___32921)){
args__31808__auto__.push((arguments[i__31802__auto___32922]));

var G__32923 = (i__31802__auto___32922 + (1));
i__31802__auto___32922 = G__32923;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32920))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32920){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32920),args);
});})(g__32850__auto___32920))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__32850__auto___32920){
return (function (seq32892){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32892));
});})(g__32850__auto___32920))
;


var g__32850__auto___32924 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__32850__auto___32924){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32925 = arguments.length;
var i__31802__auto___32926 = (0);
while(true){
if((i__31802__auto___32926 < len__31801__auto___32925)){
args__31808__auto__.push((arguments[i__31802__auto___32926]));

var G__32927 = (i__31802__auto___32926 + (1));
i__31802__auto___32926 = G__32927;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32924))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32924){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32924),args);
});})(g__32850__auto___32924))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__32850__auto___32924){
return (function (seq32893){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32893));
});})(g__32850__auto___32924))
;


var g__32850__auto___32928 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__32850__auto___32928){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32929 = arguments.length;
var i__31802__auto___32930 = (0);
while(true){
if((i__31802__auto___32930 < len__31801__auto___32929)){
args__31808__auto__.push((arguments[i__31802__auto___32930]));

var G__32931 = (i__31802__auto___32930 + (1));
i__31802__auto___32930 = G__32931;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32928))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32928){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32928),args);
});})(g__32850__auto___32928))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__32850__auto___32928){
return (function (seq32894){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32894));
});})(g__32850__auto___32928))
;


var g__32850__auto___32932 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__32850__auto___32932){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32933 = arguments.length;
var i__31802__auto___32934 = (0);
while(true){
if((i__31802__auto___32934 < len__31801__auto___32933)){
args__31808__auto__.push((arguments[i__31802__auto___32934]));

var G__32935 = (i__31802__auto___32934 + (1));
i__31802__auto___32934 = G__32935;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32932))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32932){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32932),args);
});})(g__32850__auto___32932))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__32850__auto___32932){
return (function (seq32895){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32895));
});})(g__32850__auto___32932))
;


var g__32850__auto___32936 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__32850__auto___32936){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32937 = arguments.length;
var i__31802__auto___32938 = (0);
while(true){
if((i__31802__auto___32938 < len__31801__auto___32937)){
args__31808__auto__.push((arguments[i__31802__auto___32938]));

var G__32939 = (i__31802__auto___32938 + (1));
i__31802__auto___32938 = G__32939;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32936))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32936){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32936),args);
});})(g__32850__auto___32936))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__32850__auto___32936){
return (function (seq32896){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32896));
});})(g__32850__auto___32936))
;


var g__32850__auto___32940 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__32850__auto___32940){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32941 = arguments.length;
var i__31802__auto___32942 = (0);
while(true){
if((i__31802__auto___32942 < len__31801__auto___32941)){
args__31808__auto__.push((arguments[i__31802__auto___32942]));

var G__32943 = (i__31802__auto___32942 + (1));
i__31802__auto___32942 = G__32943;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32940))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32940){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32940),args);
});})(g__32850__auto___32940))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__32850__auto___32940){
return (function (seq32897){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32897));
});})(g__32850__auto___32940))
;


var g__32850__auto___32944 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__32850__auto___32944){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32945 = arguments.length;
var i__31802__auto___32946 = (0);
while(true){
if((i__31802__auto___32946 < len__31801__auto___32945)){
args__31808__auto__.push((arguments[i__31802__auto___32946]));

var G__32947 = (i__31802__auto___32946 + (1));
i__31802__auto___32946 = G__32947;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32944))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32944){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32944),args);
});})(g__32850__auto___32944))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__32850__auto___32944){
return (function (seq32898){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32898));
});})(g__32850__auto___32944))
;


var g__32850__auto___32948 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__32850__auto___32948){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32949 = arguments.length;
var i__31802__auto___32950 = (0);
while(true){
if((i__31802__auto___32950 < len__31801__auto___32949)){
args__31808__auto__.push((arguments[i__31802__auto___32950]));

var G__32951 = (i__31802__auto___32950 + (1));
i__31802__auto___32950 = G__32951;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32948))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32948){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32948),args);
});})(g__32850__auto___32948))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__32850__auto___32948){
return (function (seq32899){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32899));
});})(g__32850__auto___32948))
;


var g__32850__auto___32952 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__32850__auto___32952){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32953 = arguments.length;
var i__31802__auto___32954 = (0);
while(true){
if((i__31802__auto___32954 < len__31801__auto___32953)){
args__31808__auto__.push((arguments[i__31802__auto___32954]));

var G__32955 = (i__31802__auto___32954 + (1));
i__31802__auto___32954 = G__32955;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32952))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32952){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32952),args);
});})(g__32850__auto___32952))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__32850__auto___32952){
return (function (seq32900){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32900));
});})(g__32850__auto___32952))
;


var g__32850__auto___32956 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__32850__auto___32956){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32957 = arguments.length;
var i__31802__auto___32958 = (0);
while(true){
if((i__31802__auto___32958 < len__31801__auto___32957)){
args__31808__auto__.push((arguments[i__31802__auto___32958]));

var G__32959 = (i__31802__auto___32958 + (1));
i__31802__auto___32958 = G__32959;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32956))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32956){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32956),args);
});})(g__32850__auto___32956))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__32850__auto___32956){
return (function (seq32901){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32901));
});})(g__32850__auto___32956))
;


var g__32850__auto___32960 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__32850__auto___32960){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32961 = arguments.length;
var i__31802__auto___32962 = (0);
while(true){
if((i__31802__auto___32962 < len__31801__auto___32961)){
args__31808__auto__.push((arguments[i__31802__auto___32962]));

var G__32963 = (i__31802__auto___32962 + (1));
i__31802__auto___32962 = G__32963;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32960))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32960){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32960),args);
});})(g__32850__auto___32960))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__32850__auto___32960){
return (function (seq32902){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32902));
});})(g__32850__auto___32960))
;


var g__32850__auto___32964 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__32850__auto___32964){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32965 = arguments.length;
var i__31802__auto___32966 = (0);
while(true){
if((i__31802__auto___32966 < len__31801__auto___32965)){
args__31808__auto__.push((arguments[i__31802__auto___32966]));

var G__32967 = (i__31802__auto___32966 + (1));
i__31802__auto___32966 = G__32967;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32964))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32964){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32964),args);
});})(g__32850__auto___32964))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__32850__auto___32964){
return (function (seq32903){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32903));
});})(g__32850__auto___32964))
;


var g__32850__auto___32968 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__32850__auto___32968){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32969 = arguments.length;
var i__31802__auto___32970 = (0);
while(true){
if((i__31802__auto___32970 < len__31801__auto___32969)){
args__31808__auto__.push((arguments[i__31802__auto___32970]));

var G__32971 = (i__31802__auto___32970 + (1));
i__31802__auto___32970 = G__32971;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32968))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32968){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32968),args);
});})(g__32850__auto___32968))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__32850__auto___32968){
return (function (seq32904){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32904));
});})(g__32850__auto___32968))
;


var g__32850__auto___32972 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__32850__auto___32972){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32973 = arguments.length;
var i__31802__auto___32974 = (0);
while(true){
if((i__31802__auto___32974 < len__31801__auto___32973)){
args__31808__auto__.push((arguments[i__31802__auto___32974]));

var G__32975 = (i__31802__auto___32974 + (1));
i__31802__auto___32974 = G__32975;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32972))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32972){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32972),args);
});})(g__32850__auto___32972))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32850__auto___32972){
return (function (seq32905){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32905));
});})(g__32850__auto___32972))
;


var g__32850__auto___32976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__32850__auto___32976){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32977 = arguments.length;
var i__31802__auto___32978 = (0);
while(true){
if((i__31802__auto___32978 < len__31801__auto___32977)){
args__31808__auto__.push((arguments[i__31802__auto___32978]));

var G__32979 = (i__31802__auto___32978 + (1));
i__31802__auto___32978 = G__32979;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32976))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32976){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32976),args);
});})(g__32850__auto___32976))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__32850__auto___32976){
return (function (seq32906){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32906));
});})(g__32850__auto___32976))
;


var g__32850__auto___32980 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__32850__auto___32980){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31808__auto__ = [];
var len__31801__auto___32981 = arguments.length;
var i__31802__auto___32982 = (0);
while(true){
if((i__31802__auto___32982 < len__31801__auto___32981)){
args__31808__auto__.push((arguments[i__31802__auto___32982]));

var G__32983 = (i__31802__auto___32982 + (1));
i__31802__auto___32982 = G__32983;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32850__auto___32980))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32850__auto___32980){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32850__auto___32980),args);
});})(g__32850__auto___32980))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__32850__auto___32980){
return (function (seq32907){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32907));
});})(g__32850__auto___32980))
;

var g__32863__auto___33005 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__32863__auto___33005){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33006 = arguments.length;
var i__31802__auto___33007 = (0);
while(true){
if((i__31802__auto___33007 < len__31801__auto___33006)){
args__31808__auto__.push((arguments[i__31802__auto___33007]));

var G__33008 = (i__31802__auto___33007 + (1));
i__31802__auto___33007 = G__33008;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33005))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33005){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33005);
});})(g__32863__auto___33005))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__32863__auto___33005){
return (function (seq32984){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32984));
});})(g__32863__auto___33005))
;


var g__32863__auto___33009 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__32863__auto___33009){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33010 = arguments.length;
var i__31802__auto___33011 = (0);
while(true){
if((i__31802__auto___33011 < len__31801__auto___33010)){
args__31808__auto__.push((arguments[i__31802__auto___33011]));

var G__33012 = (i__31802__auto___33011 + (1));
i__31802__auto___33011 = G__33012;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33009))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33009){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33009);
});})(g__32863__auto___33009))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__32863__auto___33009){
return (function (seq32985){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32985));
});})(g__32863__auto___33009))
;


var g__32863__auto___33013 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__32863__auto___33013){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33014 = arguments.length;
var i__31802__auto___33015 = (0);
while(true){
if((i__31802__auto___33015 < len__31801__auto___33014)){
args__31808__auto__.push((arguments[i__31802__auto___33015]));

var G__33016 = (i__31802__auto___33015 + (1));
i__31802__auto___33015 = G__33016;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33013))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33013){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33013);
});})(g__32863__auto___33013))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__32863__auto___33013){
return (function (seq32986){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32986));
});})(g__32863__auto___33013))
;


var g__32863__auto___33017 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__32863__auto___33017){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33018 = arguments.length;
var i__31802__auto___33019 = (0);
while(true){
if((i__31802__auto___33019 < len__31801__auto___33018)){
args__31808__auto__.push((arguments[i__31802__auto___33019]));

var G__33020 = (i__31802__auto___33019 + (1));
i__31802__auto___33019 = G__33020;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33017))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33017){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33017);
});})(g__32863__auto___33017))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__32863__auto___33017){
return (function (seq32987){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32987));
});})(g__32863__auto___33017))
;


var g__32863__auto___33021 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__32863__auto___33021){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33022 = arguments.length;
var i__31802__auto___33023 = (0);
while(true){
if((i__31802__auto___33023 < len__31801__auto___33022)){
args__31808__auto__.push((arguments[i__31802__auto___33023]));

var G__33024 = (i__31802__auto___33023 + (1));
i__31802__auto___33023 = G__33024;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33021))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33021){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33021);
});})(g__32863__auto___33021))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__32863__auto___33021){
return (function (seq32988){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32988));
});})(g__32863__auto___33021))
;


var g__32863__auto___33025 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__32863__auto___33025){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33026 = arguments.length;
var i__31802__auto___33027 = (0);
while(true){
if((i__31802__auto___33027 < len__31801__auto___33026)){
args__31808__auto__.push((arguments[i__31802__auto___33027]));

var G__33028 = (i__31802__auto___33027 + (1));
i__31802__auto___33027 = G__33028;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33025))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33025){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33025);
});})(g__32863__auto___33025))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__32863__auto___33025){
return (function (seq32989){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32989));
});})(g__32863__auto___33025))
;


var g__32863__auto___33029 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__32863__auto___33029){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33030 = arguments.length;
var i__31802__auto___33031 = (0);
while(true){
if((i__31802__auto___33031 < len__31801__auto___33030)){
args__31808__auto__.push((arguments[i__31802__auto___33031]));

var G__33032 = (i__31802__auto___33031 + (1));
i__31802__auto___33031 = G__33032;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33029))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33029){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33029);
});})(g__32863__auto___33029))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__32863__auto___33029){
return (function (seq32990){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32990));
});})(g__32863__auto___33029))
;


var g__32863__auto___33033 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__32863__auto___33033){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33034 = arguments.length;
var i__31802__auto___33035 = (0);
while(true){
if((i__31802__auto___33035 < len__31801__auto___33034)){
args__31808__auto__.push((arguments[i__31802__auto___33035]));

var G__33036 = (i__31802__auto___33035 + (1));
i__31802__auto___33035 = G__33036;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33033))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33033){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33033);
});})(g__32863__auto___33033))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__32863__auto___33033){
return (function (seq32991){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32991));
});})(g__32863__auto___33033))
;


var g__32863__auto___33037 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__32863__auto___33037){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33038 = arguments.length;
var i__31802__auto___33039 = (0);
while(true){
if((i__31802__auto___33039 < len__31801__auto___33038)){
args__31808__auto__.push((arguments[i__31802__auto___33039]));

var G__33040 = (i__31802__auto___33039 + (1));
i__31802__auto___33039 = G__33040;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33037))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33037){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33037);
});})(g__32863__auto___33037))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__32863__auto___33037){
return (function (seq32992){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32992));
});})(g__32863__auto___33037))
;


var g__32863__auto___33041 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__32863__auto___33041){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33042 = arguments.length;
var i__31802__auto___33043 = (0);
while(true){
if((i__31802__auto___33043 < len__31801__auto___33042)){
args__31808__auto__.push((arguments[i__31802__auto___33043]));

var G__33044 = (i__31802__auto___33043 + (1));
i__31802__auto___33043 = G__33044;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33041))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33041){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33041);
});})(g__32863__auto___33041))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__32863__auto___33041){
return (function (seq32993){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32993));
});})(g__32863__auto___33041))
;


var g__32863__auto___33045 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__32863__auto___33045){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33046 = arguments.length;
var i__31802__auto___33047 = (0);
while(true){
if((i__31802__auto___33047 < len__31801__auto___33046)){
args__31808__auto__.push((arguments[i__31802__auto___33047]));

var G__33048 = (i__31802__auto___33047 + (1));
i__31802__auto___33047 = G__33048;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33045))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33045){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33045);
});})(g__32863__auto___33045))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__32863__auto___33045){
return (function (seq32994){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32994));
});})(g__32863__auto___33045))
;


var g__32863__auto___33049 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__32863__auto___33049){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33050 = arguments.length;
var i__31802__auto___33051 = (0);
while(true){
if((i__31802__auto___33051 < len__31801__auto___33050)){
args__31808__auto__.push((arguments[i__31802__auto___33051]));

var G__33052 = (i__31802__auto___33051 + (1));
i__31802__auto___33051 = G__33052;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33049))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33049){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33049);
});})(g__32863__auto___33049))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__32863__auto___33049){
return (function (seq32995){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32995));
});})(g__32863__auto___33049))
;


var g__32863__auto___33053 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__32863__auto___33053){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33054 = arguments.length;
var i__31802__auto___33055 = (0);
while(true){
if((i__31802__auto___33055 < len__31801__auto___33054)){
args__31808__auto__.push((arguments[i__31802__auto___33055]));

var G__33056 = (i__31802__auto___33055 + (1));
i__31802__auto___33055 = G__33056;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33053))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33053){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33053);
});})(g__32863__auto___33053))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__32863__auto___33053){
return (function (seq32996){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32996));
});})(g__32863__auto___33053))
;


var g__32863__auto___33057 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__32863__auto___33057){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33058 = arguments.length;
var i__31802__auto___33059 = (0);
while(true){
if((i__31802__auto___33059 < len__31801__auto___33058)){
args__31808__auto__.push((arguments[i__31802__auto___33059]));

var G__33060 = (i__31802__auto___33059 + (1));
i__31802__auto___33059 = G__33060;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33057))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33057){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33057);
});})(g__32863__auto___33057))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__32863__auto___33057){
return (function (seq32997){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32997));
});})(g__32863__auto___33057))
;


var g__32863__auto___33061 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__32863__auto___33061){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33062 = arguments.length;
var i__31802__auto___33063 = (0);
while(true){
if((i__31802__auto___33063 < len__31801__auto___33062)){
args__31808__auto__.push((arguments[i__31802__auto___33063]));

var G__33064 = (i__31802__auto___33063 + (1));
i__31802__auto___33063 = G__33064;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33061))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33061){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33061);
});})(g__32863__auto___33061))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__32863__auto___33061){
return (function (seq32998){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32998));
});})(g__32863__auto___33061))
;


var g__32863__auto___33065 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__32863__auto___33065){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33066 = arguments.length;
var i__31802__auto___33067 = (0);
while(true){
if((i__31802__auto___33067 < len__31801__auto___33066)){
args__31808__auto__.push((arguments[i__31802__auto___33067]));

var G__33068 = (i__31802__auto___33067 + (1));
i__31802__auto___33067 = G__33068;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33065))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33065){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33065);
});})(g__32863__auto___33065))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__32863__auto___33065){
return (function (seq32999){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32999));
});})(g__32863__auto___33065))
;


var g__32863__auto___33069 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__32863__auto___33069){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33070 = arguments.length;
var i__31802__auto___33071 = (0);
while(true){
if((i__31802__auto___33071 < len__31801__auto___33070)){
args__31808__auto__.push((arguments[i__31802__auto___33071]));

var G__33072 = (i__31802__auto___33071 + (1));
i__31802__auto___33071 = G__33072;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33069))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33069){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33069);
});})(g__32863__auto___33069))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__32863__auto___33069){
return (function (seq33000){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33000));
});})(g__32863__auto___33069))
;


var g__32863__auto___33073 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__32863__auto___33073){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33074 = arguments.length;
var i__31802__auto___33075 = (0);
while(true){
if((i__31802__auto___33075 < len__31801__auto___33074)){
args__31808__auto__.push((arguments[i__31802__auto___33075]));

var G__33076 = (i__31802__auto___33075 + (1));
i__31802__auto___33075 = G__33076;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33073))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33073){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33073);
});})(g__32863__auto___33073))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__32863__auto___33073){
return (function (seq33001){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33001));
});})(g__32863__auto___33073))
;


var g__32863__auto___33077 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__32863__auto___33077){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33078 = arguments.length;
var i__31802__auto___33079 = (0);
while(true){
if((i__31802__auto___33079 < len__31801__auto___33078)){
args__31808__auto__.push((arguments[i__31802__auto___33079]));

var G__33080 = (i__31802__auto___33079 + (1));
i__31802__auto___33079 = G__33080;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33077))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33077){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33077);
});})(g__32863__auto___33077))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__32863__auto___33077){
return (function (seq33002){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33002));
});})(g__32863__auto___33077))
;


var g__32863__auto___33081 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__32863__auto___33081){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33082 = arguments.length;
var i__31802__auto___33083 = (0);
while(true){
if((i__31802__auto___33083 < len__31801__auto___33082)){
args__31808__auto__.push((arguments[i__31802__auto___33083]));

var G__33084 = (i__31802__auto___33083 + (1));
i__31802__auto___33083 = G__33084;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33081))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33081){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33081);
});})(g__32863__auto___33081))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__32863__auto___33081){
return (function (seq33003){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33003));
});})(g__32863__auto___33081))
;


var g__32863__auto___33085 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__32863__auto___33085){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33086 = arguments.length;
var i__31802__auto___33087 = (0);
while(true){
if((i__31802__auto___33087 < len__31801__auto___33086)){
args__31808__auto__.push((arguments[i__31802__auto___33087]));

var G__33088 = (i__31802__auto___33087 + (1));
i__31802__auto___33087 = G__33088;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});})(g__32863__auto___33085))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32863__auto___33085){
return (function (args){
return cljs.core.deref.call(null,g__32863__auto___33085);
});})(g__32863__auto___33085))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__32863__auto___33085){
return (function (seq33004){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33004));
});})(g__32863__auto___33085))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31808__auto__ = [];
var len__31801__auto___33091 = arguments.length;
var i__31802__auto___33092 = (0);
while(true){
if((i__31802__auto___33092 < len__31801__auto___33091)){
args__31808__auto__.push((arguments[i__31802__auto___33092]));

var G__33093 = (i__31802__auto___33092 + (1));
i__31802__auto___33092 = G__33093;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__33089_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__33089_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq33090){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33090));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__33094_SHARP_){
return (new Date(p1__33094_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1510602135636
