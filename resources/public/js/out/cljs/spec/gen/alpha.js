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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__31523__auto__ = [];
var len__31516__auto___38023 = arguments.length;
var i__31517__auto___38024 = (0);
while(true){
if((i__31517__auto___38024 < len__31516__auto___38023)){
args__31523__auto__.push((arguments[i__31517__auto___38024]));

var G__38025 = (i__31517__auto___38024 + (1));
i__31517__auto___38024 = G__38025;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq38022){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38022));
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
var args__31523__auto__ = [];
var len__31516__auto___38027 = arguments.length;
var i__31517__auto___38028 = (0);
while(true){
if((i__31517__auto___38028 < len__31516__auto___38027)){
args__31523__auto__.push((arguments[i__31517__auto___38028]));

var G__38029 = (i__31517__auto___38028 + (1));
i__31517__auto___38028 = G__38029;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq38026){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38026));
});

var g_QMARK__38030 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_38031 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38030){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__38030))
,null));
var mkg_38032 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38030,g_38031){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__38030,g_38031))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__38030,g_38031,mkg_38032){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__38030).call(null,x);
});})(g_QMARK__38030,g_38031,mkg_38032))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__38030,g_38031,mkg_38032){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_38032).call(null,gfn);
});})(g_QMARK__38030,g_38031,mkg_38032))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__38030,g_38031,mkg_38032){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_38031).call(null,generator);
});})(g_QMARK__38030,g_38031,mkg_38032))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32678__auto___38052 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__32678__auto___38052){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38053 = arguments.length;
var i__31517__auto___38054 = (0);
while(true){
if((i__31517__auto___38054 < len__31516__auto___38053)){
args__31523__auto__.push((arguments[i__31517__auto___38054]));

var G__38055 = (i__31517__auto___38054 + (1));
i__31517__auto___38054 = G__38055;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38052))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38052){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38052),args);
});})(g__32678__auto___38052))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__32678__auto___38052){
return (function (seq38033){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38033));
});})(g__32678__auto___38052))
;


var g__32678__auto___38056 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__32678__auto___38056){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38057 = arguments.length;
var i__31517__auto___38058 = (0);
while(true){
if((i__31517__auto___38058 < len__31516__auto___38057)){
args__31523__auto__.push((arguments[i__31517__auto___38058]));

var G__38059 = (i__31517__auto___38058 + (1));
i__31517__auto___38058 = G__38059;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38056))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38056){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38056),args);
});})(g__32678__auto___38056))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__32678__auto___38056){
return (function (seq38034){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38034));
});})(g__32678__auto___38056))
;


var g__32678__auto___38060 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__32678__auto___38060){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38061 = arguments.length;
var i__31517__auto___38062 = (0);
while(true){
if((i__31517__auto___38062 < len__31516__auto___38061)){
args__31523__auto__.push((arguments[i__31517__auto___38062]));

var G__38063 = (i__31517__auto___38062 + (1));
i__31517__auto___38062 = G__38063;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38060))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38060){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38060),args);
});})(g__32678__auto___38060))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__32678__auto___38060){
return (function (seq38035){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38035));
});})(g__32678__auto___38060))
;


var g__32678__auto___38064 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__32678__auto___38064){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38065 = arguments.length;
var i__31517__auto___38066 = (0);
while(true){
if((i__31517__auto___38066 < len__31516__auto___38065)){
args__31523__auto__.push((arguments[i__31517__auto___38066]));

var G__38067 = (i__31517__auto___38066 + (1));
i__31517__auto___38066 = G__38067;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38064))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38064){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38064),args);
});})(g__32678__auto___38064))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__32678__auto___38064){
return (function (seq38036){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38036));
});})(g__32678__auto___38064))
;


var g__32678__auto___38068 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__32678__auto___38068){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38069 = arguments.length;
var i__31517__auto___38070 = (0);
while(true){
if((i__31517__auto___38070 < len__31516__auto___38069)){
args__31523__auto__.push((arguments[i__31517__auto___38070]));

var G__38071 = (i__31517__auto___38070 + (1));
i__31517__auto___38070 = G__38071;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38068))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38068){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38068),args);
});})(g__32678__auto___38068))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__32678__auto___38068){
return (function (seq38037){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38037));
});})(g__32678__auto___38068))
;


var g__32678__auto___38072 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__32678__auto___38072){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38073 = arguments.length;
var i__31517__auto___38074 = (0);
while(true){
if((i__31517__auto___38074 < len__31516__auto___38073)){
args__31523__auto__.push((arguments[i__31517__auto___38074]));

var G__38075 = (i__31517__auto___38074 + (1));
i__31517__auto___38074 = G__38075;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38072))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38072){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38072),args);
});})(g__32678__auto___38072))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__32678__auto___38072){
return (function (seq38038){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38038));
});})(g__32678__auto___38072))
;


var g__32678__auto___38076 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__32678__auto___38076){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38077 = arguments.length;
var i__31517__auto___38078 = (0);
while(true){
if((i__31517__auto___38078 < len__31516__auto___38077)){
args__31523__auto__.push((arguments[i__31517__auto___38078]));

var G__38079 = (i__31517__auto___38078 + (1));
i__31517__auto___38078 = G__38079;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38076))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38076){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38076),args);
});})(g__32678__auto___38076))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__32678__auto___38076){
return (function (seq38039){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38039));
});})(g__32678__auto___38076))
;


var g__32678__auto___38080 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__32678__auto___38080){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38081 = arguments.length;
var i__31517__auto___38082 = (0);
while(true){
if((i__31517__auto___38082 < len__31516__auto___38081)){
args__31523__auto__.push((arguments[i__31517__auto___38082]));

var G__38083 = (i__31517__auto___38082 + (1));
i__31517__auto___38082 = G__38083;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38080))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38080){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38080),args);
});})(g__32678__auto___38080))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__32678__auto___38080){
return (function (seq38040){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38040));
});})(g__32678__auto___38080))
;


var g__32678__auto___38084 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__32678__auto___38084){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38085 = arguments.length;
var i__31517__auto___38086 = (0);
while(true){
if((i__31517__auto___38086 < len__31516__auto___38085)){
args__31523__auto__.push((arguments[i__31517__auto___38086]));

var G__38087 = (i__31517__auto___38086 + (1));
i__31517__auto___38086 = G__38087;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38084))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38084){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38084),args);
});})(g__32678__auto___38084))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__32678__auto___38084){
return (function (seq38041){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38041));
});})(g__32678__auto___38084))
;


var g__32678__auto___38088 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__32678__auto___38088){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38089 = arguments.length;
var i__31517__auto___38090 = (0);
while(true){
if((i__31517__auto___38090 < len__31516__auto___38089)){
args__31523__auto__.push((arguments[i__31517__auto___38090]));

var G__38091 = (i__31517__auto___38090 + (1));
i__31517__auto___38090 = G__38091;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38088))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38088){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38088),args);
});})(g__32678__auto___38088))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__32678__auto___38088){
return (function (seq38042){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38042));
});})(g__32678__auto___38088))
;


var g__32678__auto___38092 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__32678__auto___38092){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38093 = arguments.length;
var i__31517__auto___38094 = (0);
while(true){
if((i__31517__auto___38094 < len__31516__auto___38093)){
args__31523__auto__.push((arguments[i__31517__auto___38094]));

var G__38095 = (i__31517__auto___38094 + (1));
i__31517__auto___38094 = G__38095;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38092))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38092){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38092),args);
});})(g__32678__auto___38092))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__32678__auto___38092){
return (function (seq38043){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38043));
});})(g__32678__auto___38092))
;


var g__32678__auto___38096 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__32678__auto___38096){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38097 = arguments.length;
var i__31517__auto___38098 = (0);
while(true){
if((i__31517__auto___38098 < len__31516__auto___38097)){
args__31523__auto__.push((arguments[i__31517__auto___38098]));

var G__38099 = (i__31517__auto___38098 + (1));
i__31517__auto___38098 = G__38099;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38096))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38096){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38096),args);
});})(g__32678__auto___38096))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__32678__auto___38096){
return (function (seq38044){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38044));
});})(g__32678__auto___38096))
;


var g__32678__auto___38100 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__32678__auto___38100){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38101 = arguments.length;
var i__31517__auto___38102 = (0);
while(true){
if((i__31517__auto___38102 < len__31516__auto___38101)){
args__31523__auto__.push((arguments[i__31517__auto___38102]));

var G__38103 = (i__31517__auto___38102 + (1));
i__31517__auto___38102 = G__38103;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38100))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38100){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38100),args);
});})(g__32678__auto___38100))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__32678__auto___38100){
return (function (seq38045){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38045));
});})(g__32678__auto___38100))
;


var g__32678__auto___38104 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__32678__auto___38104){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38105 = arguments.length;
var i__31517__auto___38106 = (0);
while(true){
if((i__31517__auto___38106 < len__31516__auto___38105)){
args__31523__auto__.push((arguments[i__31517__auto___38106]));

var G__38107 = (i__31517__auto___38106 + (1));
i__31517__auto___38106 = G__38107;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38104))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38104){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38104),args);
});})(g__32678__auto___38104))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__32678__auto___38104){
return (function (seq38046){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38046));
});})(g__32678__auto___38104))
;


var g__32678__auto___38108 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__32678__auto___38108){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38109 = arguments.length;
var i__31517__auto___38110 = (0);
while(true){
if((i__31517__auto___38110 < len__31516__auto___38109)){
args__31523__auto__.push((arguments[i__31517__auto___38110]));

var G__38111 = (i__31517__auto___38110 + (1));
i__31517__auto___38110 = G__38111;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38108))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38108){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38108),args);
});})(g__32678__auto___38108))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__32678__auto___38108){
return (function (seq38047){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38047));
});})(g__32678__auto___38108))
;


var g__32678__auto___38112 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__32678__auto___38112){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38113 = arguments.length;
var i__31517__auto___38114 = (0);
while(true){
if((i__31517__auto___38114 < len__31516__auto___38113)){
args__31523__auto__.push((arguments[i__31517__auto___38114]));

var G__38115 = (i__31517__auto___38114 + (1));
i__31517__auto___38114 = G__38115;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38112))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38112){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38112),args);
});})(g__32678__auto___38112))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__32678__auto___38112){
return (function (seq38048){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38048));
});})(g__32678__auto___38112))
;


var g__32678__auto___38116 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__32678__auto___38116){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38117 = arguments.length;
var i__31517__auto___38118 = (0);
while(true){
if((i__31517__auto___38118 < len__31516__auto___38117)){
args__31523__auto__.push((arguments[i__31517__auto___38118]));

var G__38119 = (i__31517__auto___38118 + (1));
i__31517__auto___38118 = G__38119;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38116))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38116){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38116),args);
});})(g__32678__auto___38116))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32678__auto___38116){
return (function (seq38049){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38049));
});})(g__32678__auto___38116))
;


var g__32678__auto___38120 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__32678__auto___38120){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38121 = arguments.length;
var i__31517__auto___38122 = (0);
while(true){
if((i__31517__auto___38122 < len__31516__auto___38121)){
args__31523__auto__.push((arguments[i__31517__auto___38122]));

var G__38123 = (i__31517__auto___38122 + (1));
i__31517__auto___38122 = G__38123;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38120))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38120){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38120),args);
});})(g__32678__auto___38120))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__32678__auto___38120){
return (function (seq38050){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38050));
});})(g__32678__auto___38120))
;


var g__32678__auto___38124 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__32678__auto___38124){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38125 = arguments.length;
var i__31517__auto___38126 = (0);
while(true){
if((i__31517__auto___38126 < len__31516__auto___38125)){
args__31523__auto__.push((arguments[i__31517__auto___38126]));

var G__38127 = (i__31517__auto___38126 + (1));
i__31517__auto___38126 = G__38127;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32678__auto___38124))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32678__auto___38124){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32678__auto___38124),args);
});})(g__32678__auto___38124))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__32678__auto___38124){
return (function (seq38051){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38051));
});})(g__32678__auto___38124))
;

var g__32691__auto___38149 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__32691__auto___38149){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38150 = arguments.length;
var i__31517__auto___38151 = (0);
while(true){
if((i__31517__auto___38151 < len__31516__auto___38150)){
args__31523__auto__.push((arguments[i__31517__auto___38151]));

var G__38152 = (i__31517__auto___38151 + (1));
i__31517__auto___38151 = G__38152;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38149))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38149){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38149);
});})(g__32691__auto___38149))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__32691__auto___38149){
return (function (seq38128){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38128));
});})(g__32691__auto___38149))
;


var g__32691__auto___38153 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__32691__auto___38153){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38154 = arguments.length;
var i__31517__auto___38155 = (0);
while(true){
if((i__31517__auto___38155 < len__31516__auto___38154)){
args__31523__auto__.push((arguments[i__31517__auto___38155]));

var G__38156 = (i__31517__auto___38155 + (1));
i__31517__auto___38155 = G__38156;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38153))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38153){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38153);
});})(g__32691__auto___38153))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__32691__auto___38153){
return (function (seq38129){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38129));
});})(g__32691__auto___38153))
;


var g__32691__auto___38157 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__32691__auto___38157){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38158 = arguments.length;
var i__31517__auto___38159 = (0);
while(true){
if((i__31517__auto___38159 < len__31516__auto___38158)){
args__31523__auto__.push((arguments[i__31517__auto___38159]));

var G__38160 = (i__31517__auto___38159 + (1));
i__31517__auto___38159 = G__38160;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38157))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38157){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38157);
});})(g__32691__auto___38157))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__32691__auto___38157){
return (function (seq38130){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38130));
});})(g__32691__auto___38157))
;


var g__32691__auto___38161 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__32691__auto___38161){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38162 = arguments.length;
var i__31517__auto___38163 = (0);
while(true){
if((i__31517__auto___38163 < len__31516__auto___38162)){
args__31523__auto__.push((arguments[i__31517__auto___38163]));

var G__38164 = (i__31517__auto___38163 + (1));
i__31517__auto___38163 = G__38164;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38161))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38161){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38161);
});})(g__32691__auto___38161))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__32691__auto___38161){
return (function (seq38131){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38131));
});})(g__32691__auto___38161))
;


var g__32691__auto___38165 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__32691__auto___38165){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38166 = arguments.length;
var i__31517__auto___38167 = (0);
while(true){
if((i__31517__auto___38167 < len__31516__auto___38166)){
args__31523__auto__.push((arguments[i__31517__auto___38167]));

var G__38168 = (i__31517__auto___38167 + (1));
i__31517__auto___38167 = G__38168;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38165))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38165){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38165);
});})(g__32691__auto___38165))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__32691__auto___38165){
return (function (seq38132){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38132));
});})(g__32691__auto___38165))
;


var g__32691__auto___38169 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__32691__auto___38169){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38170 = arguments.length;
var i__31517__auto___38171 = (0);
while(true){
if((i__31517__auto___38171 < len__31516__auto___38170)){
args__31523__auto__.push((arguments[i__31517__auto___38171]));

var G__38172 = (i__31517__auto___38171 + (1));
i__31517__auto___38171 = G__38172;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38169))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38169){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38169);
});})(g__32691__auto___38169))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__32691__auto___38169){
return (function (seq38133){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38133));
});})(g__32691__auto___38169))
;


var g__32691__auto___38173 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__32691__auto___38173){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38174 = arguments.length;
var i__31517__auto___38175 = (0);
while(true){
if((i__31517__auto___38175 < len__31516__auto___38174)){
args__31523__auto__.push((arguments[i__31517__auto___38175]));

var G__38176 = (i__31517__auto___38175 + (1));
i__31517__auto___38175 = G__38176;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38173))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38173){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38173);
});})(g__32691__auto___38173))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__32691__auto___38173){
return (function (seq38134){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38134));
});})(g__32691__auto___38173))
;


var g__32691__auto___38177 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__32691__auto___38177){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38178 = arguments.length;
var i__31517__auto___38179 = (0);
while(true){
if((i__31517__auto___38179 < len__31516__auto___38178)){
args__31523__auto__.push((arguments[i__31517__auto___38179]));

var G__38180 = (i__31517__auto___38179 + (1));
i__31517__auto___38179 = G__38180;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38177))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38177){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38177);
});})(g__32691__auto___38177))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__32691__auto___38177){
return (function (seq38135){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38135));
});})(g__32691__auto___38177))
;


var g__32691__auto___38181 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__32691__auto___38181){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38182 = arguments.length;
var i__31517__auto___38183 = (0);
while(true){
if((i__31517__auto___38183 < len__31516__auto___38182)){
args__31523__auto__.push((arguments[i__31517__auto___38183]));

var G__38184 = (i__31517__auto___38183 + (1));
i__31517__auto___38183 = G__38184;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38181))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38181){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38181);
});})(g__32691__auto___38181))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__32691__auto___38181){
return (function (seq38136){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38136));
});})(g__32691__auto___38181))
;


var g__32691__auto___38185 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__32691__auto___38185){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38186 = arguments.length;
var i__31517__auto___38187 = (0);
while(true){
if((i__31517__auto___38187 < len__31516__auto___38186)){
args__31523__auto__.push((arguments[i__31517__auto___38187]));

var G__38188 = (i__31517__auto___38187 + (1));
i__31517__auto___38187 = G__38188;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38185))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38185){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38185);
});})(g__32691__auto___38185))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__32691__auto___38185){
return (function (seq38137){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38137));
});})(g__32691__auto___38185))
;


var g__32691__auto___38189 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__32691__auto___38189){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38190 = arguments.length;
var i__31517__auto___38191 = (0);
while(true){
if((i__31517__auto___38191 < len__31516__auto___38190)){
args__31523__auto__.push((arguments[i__31517__auto___38191]));

var G__38192 = (i__31517__auto___38191 + (1));
i__31517__auto___38191 = G__38192;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38189))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38189){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38189);
});})(g__32691__auto___38189))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__32691__auto___38189){
return (function (seq38138){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38138));
});})(g__32691__auto___38189))
;


var g__32691__auto___38193 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__32691__auto___38193){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38194 = arguments.length;
var i__31517__auto___38195 = (0);
while(true){
if((i__31517__auto___38195 < len__31516__auto___38194)){
args__31523__auto__.push((arguments[i__31517__auto___38195]));

var G__38196 = (i__31517__auto___38195 + (1));
i__31517__auto___38195 = G__38196;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38193))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38193){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38193);
});})(g__32691__auto___38193))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__32691__auto___38193){
return (function (seq38139){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38139));
});})(g__32691__auto___38193))
;


var g__32691__auto___38197 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__32691__auto___38197){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38198 = arguments.length;
var i__31517__auto___38199 = (0);
while(true){
if((i__31517__auto___38199 < len__31516__auto___38198)){
args__31523__auto__.push((arguments[i__31517__auto___38199]));

var G__38200 = (i__31517__auto___38199 + (1));
i__31517__auto___38199 = G__38200;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38197))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38197){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38197);
});})(g__32691__auto___38197))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__32691__auto___38197){
return (function (seq38140){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38140));
});})(g__32691__auto___38197))
;


var g__32691__auto___38201 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__32691__auto___38201){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38202 = arguments.length;
var i__31517__auto___38203 = (0);
while(true){
if((i__31517__auto___38203 < len__31516__auto___38202)){
args__31523__auto__.push((arguments[i__31517__auto___38203]));

var G__38204 = (i__31517__auto___38203 + (1));
i__31517__auto___38203 = G__38204;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38201))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38201){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38201);
});})(g__32691__auto___38201))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__32691__auto___38201){
return (function (seq38141){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38141));
});})(g__32691__auto___38201))
;


var g__32691__auto___38205 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__32691__auto___38205){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38206 = arguments.length;
var i__31517__auto___38207 = (0);
while(true){
if((i__31517__auto___38207 < len__31516__auto___38206)){
args__31523__auto__.push((arguments[i__31517__auto___38207]));

var G__38208 = (i__31517__auto___38207 + (1));
i__31517__auto___38207 = G__38208;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38205))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38205){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38205);
});})(g__32691__auto___38205))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__32691__auto___38205){
return (function (seq38142){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38142));
});})(g__32691__auto___38205))
;


var g__32691__auto___38209 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__32691__auto___38209){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38210 = arguments.length;
var i__31517__auto___38211 = (0);
while(true){
if((i__31517__auto___38211 < len__31516__auto___38210)){
args__31523__auto__.push((arguments[i__31517__auto___38211]));

var G__38212 = (i__31517__auto___38211 + (1));
i__31517__auto___38211 = G__38212;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38209))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38209){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38209);
});})(g__32691__auto___38209))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__32691__auto___38209){
return (function (seq38143){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38143));
});})(g__32691__auto___38209))
;


var g__32691__auto___38213 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__32691__auto___38213){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38214 = arguments.length;
var i__31517__auto___38215 = (0);
while(true){
if((i__31517__auto___38215 < len__31516__auto___38214)){
args__31523__auto__.push((arguments[i__31517__auto___38215]));

var G__38216 = (i__31517__auto___38215 + (1));
i__31517__auto___38215 = G__38216;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38213))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38213){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38213);
});})(g__32691__auto___38213))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__32691__auto___38213){
return (function (seq38144){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38144));
});})(g__32691__auto___38213))
;


var g__32691__auto___38217 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__32691__auto___38217){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38218 = arguments.length;
var i__31517__auto___38219 = (0);
while(true){
if((i__31517__auto___38219 < len__31516__auto___38218)){
args__31523__auto__.push((arguments[i__31517__auto___38219]));

var G__38220 = (i__31517__auto___38219 + (1));
i__31517__auto___38219 = G__38220;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38217))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38217){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38217);
});})(g__32691__auto___38217))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__32691__auto___38217){
return (function (seq38145){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38145));
});})(g__32691__auto___38217))
;


var g__32691__auto___38221 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__32691__auto___38221){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38222 = arguments.length;
var i__31517__auto___38223 = (0);
while(true){
if((i__31517__auto___38223 < len__31516__auto___38222)){
args__31523__auto__.push((arguments[i__31517__auto___38223]));

var G__38224 = (i__31517__auto___38223 + (1));
i__31517__auto___38223 = G__38224;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38221))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38221){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38221);
});})(g__32691__auto___38221))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__32691__auto___38221){
return (function (seq38146){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38146));
});})(g__32691__auto___38221))
;


var g__32691__auto___38225 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__32691__auto___38225){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38226 = arguments.length;
var i__31517__auto___38227 = (0);
while(true){
if((i__31517__auto___38227 < len__31516__auto___38226)){
args__31523__auto__.push((arguments[i__31517__auto___38227]));

var G__38228 = (i__31517__auto___38227 + (1));
i__31517__auto___38227 = G__38228;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38225))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38225){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38225);
});})(g__32691__auto___38225))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__32691__auto___38225){
return (function (seq38147){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38147));
});})(g__32691__auto___38225))
;


var g__32691__auto___38229 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__32691__auto___38229){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38230 = arguments.length;
var i__31517__auto___38231 = (0);
while(true){
if((i__31517__auto___38231 < len__31516__auto___38230)){
args__31523__auto__.push((arguments[i__31517__auto___38231]));

var G__38232 = (i__31517__auto___38231 + (1));
i__31517__auto___38231 = G__38232;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});})(g__32691__auto___38229))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32691__auto___38229){
return (function (args){
return cljs.core.deref.call(null,g__32691__auto___38229);
});})(g__32691__auto___38229))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__32691__auto___38229){
return (function (seq38148){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38148));
});})(g__32691__auto___38229))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31523__auto__ = [];
var len__31516__auto___38235 = arguments.length;
var i__31517__auto___38236 = (0);
while(true){
if((i__31517__auto___38236 < len__31516__auto___38235)){
args__31523__auto__.push((arguments[i__31517__auto___38236]));

var G__38237 = (i__31517__auto___38236 + (1));
i__31517__auto___38236 = G__38237;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__38233_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__38233_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq38234){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38234));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__38238_SHARP_){
return (new Date(p1__38238_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1507757449546
