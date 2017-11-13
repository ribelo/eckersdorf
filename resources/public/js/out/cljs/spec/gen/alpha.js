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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__31194__auto__,writer__31195__auto__,opt__31196__auto__){
return cljs.core._write.call(null,writer__31195__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__31809__auto__ = [];
var len__31802__auto___32880 = arguments.length;
var i__31803__auto___32881 = (0);
while(true){
if((i__31803__auto___32881 < len__31802__auto___32880)){
args__31809__auto__.push((arguments[i__31803__auto___32881]));

var G__32882 = (i__31803__auto___32881 + (1));
i__31803__auto___32881 = G__32882;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq32879){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32879));
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
var args__31809__auto__ = [];
var len__31802__auto___32884 = arguments.length;
var i__31803__auto___32885 = (0);
while(true){
if((i__31803__auto___32885 < len__31802__auto___32884)){
args__31809__auto__.push((arguments[i__31803__auto___32885]));

var G__32886 = (i__31803__auto___32885 + (1));
i__31803__auto___32885 = G__32886;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq32883){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32883));
});

var g_QMARK__32887 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_32888 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__32887){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__32887))
,null));
var mkg_32889 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__32887,g_32888){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__32887,g_32888))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__32887,g_32888,mkg_32889){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__32887).call(null,x);
});})(g_QMARK__32887,g_32888,mkg_32889))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__32887,g_32888,mkg_32889){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_32889).call(null,gfn);
});})(g_QMARK__32887,g_32888,mkg_32889))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__32887,g_32888,mkg_32889){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_32888).call(null,generator);
});})(g_QMARK__32887,g_32888,mkg_32889))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32851__auto___32909 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__32851__auto___32909){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32910 = arguments.length;
var i__31803__auto___32911 = (0);
while(true){
if((i__31803__auto___32911 < len__31802__auto___32910)){
args__31809__auto__.push((arguments[i__31803__auto___32911]));

var G__32912 = (i__31803__auto___32911 + (1));
i__31803__auto___32911 = G__32912;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32909))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32909){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32909),args);
});})(g__32851__auto___32909))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__32851__auto___32909){
return (function (seq32890){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32890));
});})(g__32851__auto___32909))
;


var g__32851__auto___32913 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__32851__auto___32913){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32914 = arguments.length;
var i__31803__auto___32915 = (0);
while(true){
if((i__31803__auto___32915 < len__31802__auto___32914)){
args__31809__auto__.push((arguments[i__31803__auto___32915]));

var G__32916 = (i__31803__auto___32915 + (1));
i__31803__auto___32915 = G__32916;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32913))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32913){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32913),args);
});})(g__32851__auto___32913))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__32851__auto___32913){
return (function (seq32891){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32891));
});})(g__32851__auto___32913))
;


var g__32851__auto___32917 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__32851__auto___32917){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32918 = arguments.length;
var i__31803__auto___32919 = (0);
while(true){
if((i__31803__auto___32919 < len__31802__auto___32918)){
args__31809__auto__.push((arguments[i__31803__auto___32919]));

var G__32920 = (i__31803__auto___32919 + (1));
i__31803__auto___32919 = G__32920;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32917))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32917){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32917),args);
});})(g__32851__auto___32917))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__32851__auto___32917){
return (function (seq32892){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32892));
});})(g__32851__auto___32917))
;


var g__32851__auto___32921 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__32851__auto___32921){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32922 = arguments.length;
var i__31803__auto___32923 = (0);
while(true){
if((i__31803__auto___32923 < len__31802__auto___32922)){
args__31809__auto__.push((arguments[i__31803__auto___32923]));

var G__32924 = (i__31803__auto___32923 + (1));
i__31803__auto___32923 = G__32924;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32921))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32921){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32921),args);
});})(g__32851__auto___32921))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__32851__auto___32921){
return (function (seq32893){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32893));
});})(g__32851__auto___32921))
;


var g__32851__auto___32925 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__32851__auto___32925){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32926 = arguments.length;
var i__31803__auto___32927 = (0);
while(true){
if((i__31803__auto___32927 < len__31802__auto___32926)){
args__31809__auto__.push((arguments[i__31803__auto___32927]));

var G__32928 = (i__31803__auto___32927 + (1));
i__31803__auto___32927 = G__32928;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32925))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32925){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32925),args);
});})(g__32851__auto___32925))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__32851__auto___32925){
return (function (seq32894){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32894));
});})(g__32851__auto___32925))
;


var g__32851__auto___32929 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__32851__auto___32929){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32930 = arguments.length;
var i__31803__auto___32931 = (0);
while(true){
if((i__31803__auto___32931 < len__31802__auto___32930)){
args__31809__auto__.push((arguments[i__31803__auto___32931]));

var G__32932 = (i__31803__auto___32931 + (1));
i__31803__auto___32931 = G__32932;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32929))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32929){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32929),args);
});})(g__32851__auto___32929))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__32851__auto___32929){
return (function (seq32895){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32895));
});})(g__32851__auto___32929))
;


var g__32851__auto___32933 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__32851__auto___32933){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32934 = arguments.length;
var i__31803__auto___32935 = (0);
while(true){
if((i__31803__auto___32935 < len__31802__auto___32934)){
args__31809__auto__.push((arguments[i__31803__auto___32935]));

var G__32936 = (i__31803__auto___32935 + (1));
i__31803__auto___32935 = G__32936;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32933))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32933){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32933),args);
});})(g__32851__auto___32933))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__32851__auto___32933){
return (function (seq32896){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32896));
});})(g__32851__auto___32933))
;


var g__32851__auto___32937 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__32851__auto___32937){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32938 = arguments.length;
var i__31803__auto___32939 = (0);
while(true){
if((i__31803__auto___32939 < len__31802__auto___32938)){
args__31809__auto__.push((arguments[i__31803__auto___32939]));

var G__32940 = (i__31803__auto___32939 + (1));
i__31803__auto___32939 = G__32940;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32937))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32937){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32937),args);
});})(g__32851__auto___32937))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__32851__auto___32937){
return (function (seq32897){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32897));
});})(g__32851__auto___32937))
;


var g__32851__auto___32941 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__32851__auto___32941){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32942 = arguments.length;
var i__31803__auto___32943 = (0);
while(true){
if((i__31803__auto___32943 < len__31802__auto___32942)){
args__31809__auto__.push((arguments[i__31803__auto___32943]));

var G__32944 = (i__31803__auto___32943 + (1));
i__31803__auto___32943 = G__32944;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32941))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32941){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32941),args);
});})(g__32851__auto___32941))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__32851__auto___32941){
return (function (seq32898){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32898));
});})(g__32851__auto___32941))
;


var g__32851__auto___32945 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__32851__auto___32945){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32946 = arguments.length;
var i__31803__auto___32947 = (0);
while(true){
if((i__31803__auto___32947 < len__31802__auto___32946)){
args__31809__auto__.push((arguments[i__31803__auto___32947]));

var G__32948 = (i__31803__auto___32947 + (1));
i__31803__auto___32947 = G__32948;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32945))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32945){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32945),args);
});})(g__32851__auto___32945))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__32851__auto___32945){
return (function (seq32899){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32899));
});})(g__32851__auto___32945))
;


var g__32851__auto___32949 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__32851__auto___32949){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32950 = arguments.length;
var i__31803__auto___32951 = (0);
while(true){
if((i__31803__auto___32951 < len__31802__auto___32950)){
args__31809__auto__.push((arguments[i__31803__auto___32951]));

var G__32952 = (i__31803__auto___32951 + (1));
i__31803__auto___32951 = G__32952;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32949))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32949){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32949),args);
});})(g__32851__auto___32949))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__32851__auto___32949){
return (function (seq32900){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32900));
});})(g__32851__auto___32949))
;


var g__32851__auto___32953 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__32851__auto___32953){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32954 = arguments.length;
var i__31803__auto___32955 = (0);
while(true){
if((i__31803__auto___32955 < len__31802__auto___32954)){
args__31809__auto__.push((arguments[i__31803__auto___32955]));

var G__32956 = (i__31803__auto___32955 + (1));
i__31803__auto___32955 = G__32956;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32953))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32953){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32953),args);
});})(g__32851__auto___32953))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__32851__auto___32953){
return (function (seq32901){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32901));
});})(g__32851__auto___32953))
;


var g__32851__auto___32957 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__32851__auto___32957){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32958 = arguments.length;
var i__31803__auto___32959 = (0);
while(true){
if((i__31803__auto___32959 < len__31802__auto___32958)){
args__31809__auto__.push((arguments[i__31803__auto___32959]));

var G__32960 = (i__31803__auto___32959 + (1));
i__31803__auto___32959 = G__32960;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32957))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32957){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32957),args);
});})(g__32851__auto___32957))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__32851__auto___32957){
return (function (seq32902){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32902));
});})(g__32851__auto___32957))
;


var g__32851__auto___32961 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__32851__auto___32961){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32962 = arguments.length;
var i__31803__auto___32963 = (0);
while(true){
if((i__31803__auto___32963 < len__31802__auto___32962)){
args__31809__auto__.push((arguments[i__31803__auto___32963]));

var G__32964 = (i__31803__auto___32963 + (1));
i__31803__auto___32963 = G__32964;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32961))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32961){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32961),args);
});})(g__32851__auto___32961))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__32851__auto___32961){
return (function (seq32903){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32903));
});})(g__32851__auto___32961))
;


var g__32851__auto___32965 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__32851__auto___32965){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32966 = arguments.length;
var i__31803__auto___32967 = (0);
while(true){
if((i__31803__auto___32967 < len__31802__auto___32966)){
args__31809__auto__.push((arguments[i__31803__auto___32967]));

var G__32968 = (i__31803__auto___32967 + (1));
i__31803__auto___32967 = G__32968;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32965))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32965){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32965),args);
});})(g__32851__auto___32965))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__32851__auto___32965){
return (function (seq32904){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32904));
});})(g__32851__auto___32965))
;


var g__32851__auto___32969 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__32851__auto___32969){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32970 = arguments.length;
var i__31803__auto___32971 = (0);
while(true){
if((i__31803__auto___32971 < len__31802__auto___32970)){
args__31809__auto__.push((arguments[i__31803__auto___32971]));

var G__32972 = (i__31803__auto___32971 + (1));
i__31803__auto___32971 = G__32972;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32969))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32969){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32969),args);
});})(g__32851__auto___32969))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__32851__auto___32969){
return (function (seq32905){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32905));
});})(g__32851__auto___32969))
;


var g__32851__auto___32973 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__32851__auto___32973){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32974 = arguments.length;
var i__31803__auto___32975 = (0);
while(true){
if((i__31803__auto___32975 < len__31802__auto___32974)){
args__31809__auto__.push((arguments[i__31803__auto___32975]));

var G__32976 = (i__31803__auto___32975 + (1));
i__31803__auto___32975 = G__32976;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32973))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32973){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32973),args);
});})(g__32851__auto___32973))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32851__auto___32973){
return (function (seq32906){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32906));
});})(g__32851__auto___32973))
;


var g__32851__auto___32977 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__32851__auto___32977){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32978 = arguments.length;
var i__31803__auto___32979 = (0);
while(true){
if((i__31803__auto___32979 < len__31802__auto___32978)){
args__31809__auto__.push((arguments[i__31803__auto___32979]));

var G__32980 = (i__31803__auto___32979 + (1));
i__31803__auto___32979 = G__32980;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32977))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32977){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32977),args);
});})(g__32851__auto___32977))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__32851__auto___32977){
return (function (seq32907){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32907));
});})(g__32851__auto___32977))
;


var g__32851__auto___32981 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__32851__auto___32981){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31809__auto__ = [];
var len__31802__auto___32982 = arguments.length;
var i__31803__auto___32983 = (0);
while(true){
if((i__31803__auto___32983 < len__31802__auto___32982)){
args__31809__auto__.push((arguments[i__31803__auto___32983]));

var G__32984 = (i__31803__auto___32983 + (1));
i__31803__auto___32983 = G__32984;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32851__auto___32981))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32851__auto___32981){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32851__auto___32981),args);
});})(g__32851__auto___32981))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__32851__auto___32981){
return (function (seq32908){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32908));
});})(g__32851__auto___32981))
;

var g__32864__auto___33006 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__32864__auto___33006){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33007 = arguments.length;
var i__31803__auto___33008 = (0);
while(true){
if((i__31803__auto___33008 < len__31802__auto___33007)){
args__31809__auto__.push((arguments[i__31803__auto___33008]));

var G__33009 = (i__31803__auto___33008 + (1));
i__31803__auto___33008 = G__33009;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33006))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33006){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33006);
});})(g__32864__auto___33006))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__32864__auto___33006){
return (function (seq32985){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32985));
});})(g__32864__auto___33006))
;


var g__32864__auto___33010 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__32864__auto___33010){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33011 = arguments.length;
var i__31803__auto___33012 = (0);
while(true){
if((i__31803__auto___33012 < len__31802__auto___33011)){
args__31809__auto__.push((arguments[i__31803__auto___33012]));

var G__33013 = (i__31803__auto___33012 + (1));
i__31803__auto___33012 = G__33013;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33010))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33010){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33010);
});})(g__32864__auto___33010))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__32864__auto___33010){
return (function (seq32986){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32986));
});})(g__32864__auto___33010))
;


var g__32864__auto___33014 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__32864__auto___33014){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33015 = arguments.length;
var i__31803__auto___33016 = (0);
while(true){
if((i__31803__auto___33016 < len__31802__auto___33015)){
args__31809__auto__.push((arguments[i__31803__auto___33016]));

var G__33017 = (i__31803__auto___33016 + (1));
i__31803__auto___33016 = G__33017;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33014))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33014){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33014);
});})(g__32864__auto___33014))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__32864__auto___33014){
return (function (seq32987){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32987));
});})(g__32864__auto___33014))
;


var g__32864__auto___33018 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__32864__auto___33018){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33019 = arguments.length;
var i__31803__auto___33020 = (0);
while(true){
if((i__31803__auto___33020 < len__31802__auto___33019)){
args__31809__auto__.push((arguments[i__31803__auto___33020]));

var G__33021 = (i__31803__auto___33020 + (1));
i__31803__auto___33020 = G__33021;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33018))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33018){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33018);
});})(g__32864__auto___33018))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__32864__auto___33018){
return (function (seq32988){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32988));
});})(g__32864__auto___33018))
;


var g__32864__auto___33022 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__32864__auto___33022){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33023 = arguments.length;
var i__31803__auto___33024 = (0);
while(true){
if((i__31803__auto___33024 < len__31802__auto___33023)){
args__31809__auto__.push((arguments[i__31803__auto___33024]));

var G__33025 = (i__31803__auto___33024 + (1));
i__31803__auto___33024 = G__33025;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33022))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33022){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33022);
});})(g__32864__auto___33022))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__32864__auto___33022){
return (function (seq32989){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32989));
});})(g__32864__auto___33022))
;


var g__32864__auto___33026 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__32864__auto___33026){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33027 = arguments.length;
var i__31803__auto___33028 = (0);
while(true){
if((i__31803__auto___33028 < len__31802__auto___33027)){
args__31809__auto__.push((arguments[i__31803__auto___33028]));

var G__33029 = (i__31803__auto___33028 + (1));
i__31803__auto___33028 = G__33029;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33026))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33026){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33026);
});})(g__32864__auto___33026))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__32864__auto___33026){
return (function (seq32990){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32990));
});})(g__32864__auto___33026))
;


var g__32864__auto___33030 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__32864__auto___33030){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33031 = arguments.length;
var i__31803__auto___33032 = (0);
while(true){
if((i__31803__auto___33032 < len__31802__auto___33031)){
args__31809__auto__.push((arguments[i__31803__auto___33032]));

var G__33033 = (i__31803__auto___33032 + (1));
i__31803__auto___33032 = G__33033;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33030))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33030){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33030);
});})(g__32864__auto___33030))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__32864__auto___33030){
return (function (seq32991){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32991));
});})(g__32864__auto___33030))
;


var g__32864__auto___33034 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__32864__auto___33034){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33035 = arguments.length;
var i__31803__auto___33036 = (0);
while(true){
if((i__31803__auto___33036 < len__31802__auto___33035)){
args__31809__auto__.push((arguments[i__31803__auto___33036]));

var G__33037 = (i__31803__auto___33036 + (1));
i__31803__auto___33036 = G__33037;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33034))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33034){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33034);
});})(g__32864__auto___33034))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__32864__auto___33034){
return (function (seq32992){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32992));
});})(g__32864__auto___33034))
;


var g__32864__auto___33038 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__32864__auto___33038){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33039 = arguments.length;
var i__31803__auto___33040 = (0);
while(true){
if((i__31803__auto___33040 < len__31802__auto___33039)){
args__31809__auto__.push((arguments[i__31803__auto___33040]));

var G__33041 = (i__31803__auto___33040 + (1));
i__31803__auto___33040 = G__33041;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33038))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33038){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33038);
});})(g__32864__auto___33038))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__32864__auto___33038){
return (function (seq32993){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32993));
});})(g__32864__auto___33038))
;


var g__32864__auto___33042 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__32864__auto___33042){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33043 = arguments.length;
var i__31803__auto___33044 = (0);
while(true){
if((i__31803__auto___33044 < len__31802__auto___33043)){
args__31809__auto__.push((arguments[i__31803__auto___33044]));

var G__33045 = (i__31803__auto___33044 + (1));
i__31803__auto___33044 = G__33045;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33042))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33042){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33042);
});})(g__32864__auto___33042))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__32864__auto___33042){
return (function (seq32994){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32994));
});})(g__32864__auto___33042))
;


var g__32864__auto___33046 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__32864__auto___33046){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33047 = arguments.length;
var i__31803__auto___33048 = (0);
while(true){
if((i__31803__auto___33048 < len__31802__auto___33047)){
args__31809__auto__.push((arguments[i__31803__auto___33048]));

var G__33049 = (i__31803__auto___33048 + (1));
i__31803__auto___33048 = G__33049;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33046))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33046){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33046);
});})(g__32864__auto___33046))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__32864__auto___33046){
return (function (seq32995){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32995));
});})(g__32864__auto___33046))
;


var g__32864__auto___33050 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__32864__auto___33050){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33051 = arguments.length;
var i__31803__auto___33052 = (0);
while(true){
if((i__31803__auto___33052 < len__31802__auto___33051)){
args__31809__auto__.push((arguments[i__31803__auto___33052]));

var G__33053 = (i__31803__auto___33052 + (1));
i__31803__auto___33052 = G__33053;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33050))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33050){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33050);
});})(g__32864__auto___33050))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__32864__auto___33050){
return (function (seq32996){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32996));
});})(g__32864__auto___33050))
;


var g__32864__auto___33054 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__32864__auto___33054){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33055 = arguments.length;
var i__31803__auto___33056 = (0);
while(true){
if((i__31803__auto___33056 < len__31802__auto___33055)){
args__31809__auto__.push((arguments[i__31803__auto___33056]));

var G__33057 = (i__31803__auto___33056 + (1));
i__31803__auto___33056 = G__33057;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33054))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33054){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33054);
});})(g__32864__auto___33054))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__32864__auto___33054){
return (function (seq32997){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32997));
});})(g__32864__auto___33054))
;


var g__32864__auto___33058 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__32864__auto___33058){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33059 = arguments.length;
var i__31803__auto___33060 = (0);
while(true){
if((i__31803__auto___33060 < len__31802__auto___33059)){
args__31809__auto__.push((arguments[i__31803__auto___33060]));

var G__33061 = (i__31803__auto___33060 + (1));
i__31803__auto___33060 = G__33061;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33058))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33058){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33058);
});})(g__32864__auto___33058))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__32864__auto___33058){
return (function (seq32998){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32998));
});})(g__32864__auto___33058))
;


var g__32864__auto___33062 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__32864__auto___33062){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33063 = arguments.length;
var i__31803__auto___33064 = (0);
while(true){
if((i__31803__auto___33064 < len__31802__auto___33063)){
args__31809__auto__.push((arguments[i__31803__auto___33064]));

var G__33065 = (i__31803__auto___33064 + (1));
i__31803__auto___33064 = G__33065;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33062))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33062){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33062);
});})(g__32864__auto___33062))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__32864__auto___33062){
return (function (seq32999){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32999));
});})(g__32864__auto___33062))
;


var g__32864__auto___33066 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__32864__auto___33066){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33067 = arguments.length;
var i__31803__auto___33068 = (0);
while(true){
if((i__31803__auto___33068 < len__31802__auto___33067)){
args__31809__auto__.push((arguments[i__31803__auto___33068]));

var G__33069 = (i__31803__auto___33068 + (1));
i__31803__auto___33068 = G__33069;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33066))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33066){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33066);
});})(g__32864__auto___33066))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__32864__auto___33066){
return (function (seq33000){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33000));
});})(g__32864__auto___33066))
;


var g__32864__auto___33070 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__32864__auto___33070){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33071 = arguments.length;
var i__31803__auto___33072 = (0);
while(true){
if((i__31803__auto___33072 < len__31802__auto___33071)){
args__31809__auto__.push((arguments[i__31803__auto___33072]));

var G__33073 = (i__31803__auto___33072 + (1));
i__31803__auto___33072 = G__33073;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33070))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33070){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33070);
});})(g__32864__auto___33070))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__32864__auto___33070){
return (function (seq33001){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33001));
});})(g__32864__auto___33070))
;


var g__32864__auto___33074 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__32864__auto___33074){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33075 = arguments.length;
var i__31803__auto___33076 = (0);
while(true){
if((i__31803__auto___33076 < len__31802__auto___33075)){
args__31809__auto__.push((arguments[i__31803__auto___33076]));

var G__33077 = (i__31803__auto___33076 + (1));
i__31803__auto___33076 = G__33077;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33074))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33074){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33074);
});})(g__32864__auto___33074))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__32864__auto___33074){
return (function (seq33002){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33002));
});})(g__32864__auto___33074))
;


var g__32864__auto___33078 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__32864__auto___33078){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33079 = arguments.length;
var i__31803__auto___33080 = (0);
while(true){
if((i__31803__auto___33080 < len__31802__auto___33079)){
args__31809__auto__.push((arguments[i__31803__auto___33080]));

var G__33081 = (i__31803__auto___33080 + (1));
i__31803__auto___33080 = G__33081;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33078))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33078){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33078);
});})(g__32864__auto___33078))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__32864__auto___33078){
return (function (seq33003){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33003));
});})(g__32864__auto___33078))
;


var g__32864__auto___33082 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__32864__auto___33082){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33083 = arguments.length;
var i__31803__auto___33084 = (0);
while(true){
if((i__31803__auto___33084 < len__31802__auto___33083)){
args__31809__auto__.push((arguments[i__31803__auto___33084]));

var G__33085 = (i__31803__auto___33084 + (1));
i__31803__auto___33084 = G__33085;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33082))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33082){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33082);
});})(g__32864__auto___33082))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__32864__auto___33082){
return (function (seq33004){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33004));
});})(g__32864__auto___33082))
;


var g__32864__auto___33086 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__32864__auto___33086){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33087 = arguments.length;
var i__31803__auto___33088 = (0);
while(true){
if((i__31803__auto___33088 < len__31802__auto___33087)){
args__31809__auto__.push((arguments[i__31803__auto___33088]));

var G__33089 = (i__31803__auto___33088 + (1));
i__31803__auto___33088 = G__33089;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});})(g__32864__auto___33086))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32864__auto___33086){
return (function (args){
return cljs.core.deref.call(null,g__32864__auto___33086);
});})(g__32864__auto___33086))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__32864__auto___33086){
return (function (seq33005){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33005));
});})(g__32864__auto___33086))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31809__auto__ = [];
var len__31802__auto___33092 = arguments.length;
var i__31803__auto___33093 = (0);
while(true){
if((i__31803__auto___33093 < len__31802__auto___33092)){
args__31809__auto__.push((arguments[i__31803__auto___33093]));

var G__33094 = (i__31803__auto___33093 + (1));
i__31803__auto___33093 = G__33094;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__33090_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__33090_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq33091){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33091));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__33095_SHARP_){
return (new Date(p1__33095_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1510609289574
