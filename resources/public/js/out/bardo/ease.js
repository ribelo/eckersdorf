// Compiled by ClojureScript 1.9.908 {}
goog.provide('bardo.ease');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * canonical definition of a higher order interpolator function
 */
bardo.ease.interpolator = (function bardo$ease$interpolator(f){
return (function (t){
return f.call(null,t);
});
});
/**
 * useful for wrapping easers in other easers, especially in theading macros
 */
bardo.ease.wrap = (function bardo$ease$wrap(f,ease){
return bardo.ease.interpolator.call(null,cljs.core.comp.call(null,f,ease));
});
/**
 * clamp input to function so that (<= 0 t 1)
 */
bardo.ease.clamp = (function bardo$ease$clamp(f){
return (function (t){
return f.call(null,(((t < (0)))?(0):(((t > (1)))?(1):t
)));
});
});
/**
 * shifts the domain of input from [cmin cmax] to [nmin nmax]
 */
bardo.ease.shift = (function bardo$ease$shift(var_args){
var G__32357 = arguments.length;
switch (G__32357) {
case 3:
return bardo.ease.shift.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return bardo.ease.shift.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bardo.ease.shift.cljs$core$IFn$_invoke$arity$3 = (function (f,cmin,cmax){
return bardo.ease.shift.call(null,f,cmin,cmax,(0),(1));
});

bardo.ease.shift.cljs$core$IFn$_invoke$arity$5 = (function (f,cmin,cmax,nmin,nmax){
return (function (t){
return f.call(null,((((t - cmin) / (cmax - cmin)) * (nmax - nmin)) + nmin));
});
});

bardo.ease.shift.cljs$lang$maxFixedArity = 5;

/**
 * for a range partition into pairs of each number and it's following
 * ex. [0 0.25 0.5 0.75 1] => [[0 0.25] [0.25 0.5] [0.5 0.75] [0.75 1]]
 */
bardo.ease.partition_range = (function bardo$ease$partition_range(coll){
return cljs.core.mapv.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,coll,cljs.core.rest.call(null,coll))));
});
/**
 * shift input t over many steps
 * ex. (shift-part f [0 0.5 1] [0 0.3 1]) expands to roughly
 * =>  (fn [t]
 *       (cond
 *         (<= 0 t 0.5) (shift f 0 0.5 0 0.3)
 *         (<= 0.5 t 1) (shift f 0.5 1 0.3 1)))
 */
bardo.ease.shift_parts = (function bardo$ease$shift_parts(f,input,output){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,input),cljs.core.count.call(null,output))){
} else {
throw (new Error(["Assert failed: ","ranges must be the same length","\n","(= (count input) (count output))"].join('')));
}

var vec__32359 = cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.partial.call(null,cljs.core.map_indexed,cljs.core.vector),bardo.ease.partition_range),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input,output], null));
var input__$1 = cljs.core.nth.call(null,vec__32359,(0),null);
var output__$1 = cljs.core.nth.call(null,vec__32359,(1),null);
return ((function (vec__32359,input__$1,output__$1){
return (function (t){
if(cljs.core._EQ_.call(null,t,(0))){
return f.call(null,(0));
} else {
if(cljs.core._EQ_.call(null,t,(1))){
return f.call(null,(1));
} else {
var vec__32362 = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,((function (vec__32359,input__$1,output__$1){
return (function (p__32374){
var vec__32375 = p__32374;
var start = cljs.core.nth.call(null,vec__32375,(0),null);
var end = cljs.core.nth.call(null,vec__32375,(1),null);
return ((start <= t)) && ((t <= end));
});})(vec__32359,input__$1,output__$1))
,cljs.core.second),input__$1));
var idx = cljs.core.nth.call(null,vec__32362,(0),null);
var vec__32365 = cljs.core.nth.call(null,vec__32362,(1),null);
var istart = cljs.core.nth.call(null,vec__32365,(0),null);
var iend = cljs.core.nth.call(null,vec__32365,(1),null);
var vec__32368 = cljs.core.get.call(null,output__$1,(idx | (0)));
var _ = cljs.core.nth.call(null,vec__32368,(0),null);
var vec__32371 = cljs.core.nth.call(null,vec__32368,(1),null);
var estart = cljs.core.nth.call(null,vec__32371,(0),null);
var eend = cljs.core.nth.call(null,vec__32371,(1),null);
return bardo.ease.shift.call(null,f,istart,iend,estart,eend).call(null,t);

}
}
});
;})(vec__32359,input__$1,output__$1))
});
/**
 * reverse
 */
bardo.ease.flip = (function bardo$ease$flip(f){
return (function (t){
return ((1) - f.call(null,((1) - t)));
});
});
/**
 * symmetrical around t = 0.5
 */
bardo.ease.reflect = (function bardo$ease$reflect(f){
return (function (t){
return (0.5 * (((t < 0.5))?f.call(null,((2) * t)):((2) - f.call(null,((2) - ((2) * t))))));
});
});
bardo.ease.modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.identity,new cljs.core.Keyword(null,"out","out",-910545517),bardo.ease.flip,new cljs.core.Keyword(null,"in-out","in-out",1574198965),bardo.ease.reflect,new cljs.core.Keyword(null,"out-in","out-in",-58346952),cljs.core.comp.call(null,bardo.ease.reflect,bardo.ease.flip)], null);
bardo.ease.PI = Math.PI;
bardo.ease.PI_2 = (bardo.ease.PI / (2));
/**
 * Modeled after the parabola y = x^2
 */
bardo.ease.quad = (function bardo$ease$quad(t){
return (t * t);
});
/**
 * Modeled after the cubic y = x^3
 */
bardo.ease.cubic = (function bardo$ease$cubic(t){
return ((t * t) * t);
});
/**
 * raise t to power e
 */
bardo.ease.poly = (function bardo$ease$poly(e){
return (function (t){
return Math.pow(t,e);
});
});
/**
 * Modeled after quarter-cycle of sine wave
 */
bardo.ease.sine = (function bardo$ease$sine(t){
return (Math.sin(((t - (1)) * bardo.ease.PI_2)) + (1));
});
/**
 * Modeled after shifted quadrant IV of unit circle
 */
bardo.ease.circle = (function bardo$ease$circle(t){
return ((1) - Math.sqrt(((1) - (t * t))));
});
/**
 * Modeled after the exponential function y = 2^(10(x - 1))
 */
bardo.ease.exp = (function bardo$ease$exp(t){
if(cljs.core._EQ_.call(null,t,(0))){
return t;
} else {
return Math.pow((2),((10) * (t - (1))));
}
});
/**
 * Modeled after the damped sine wave y = sin(13PI_2*x)*pow(2, 10 * (x - 1))
 */
bardo.ease.elastic = (function bardo$ease$elastic(t){
return (Math.sin((((13) * bardo.ease.PI_2) * t)) * Math.pow((2),((10) * (t - (1)))));
});
/**
 * Modeled after the overshooting cubic y = x^3-x*sin(x*pi)
 */
bardo.ease.back = (function bardo$ease$back(t){
return (((t * t) * t) - (t * Math.sin((t * bardo.ease.PI))));
});
/**
 * Modeled after some fun bouncing stuff
 */
bardo.ease.bounce = (function bardo$ease$bounce(t){
if((t < ((1) / 2.75))){
return ((7.5625 * t) * t);
} else {
if((t < ((2) / 2.75))){
return (((7.5625 * (t - (1.5 / 2.75))) * (t - (1.5 / 2.75))) + 0.75);
} else {
if((t < (2.5 / 2.75))){
return (((7.5625 * (t - (2.5 / 2.75))) * (t - (2.5 / 2.75))) + 0.9375);
} else {
return (((7.5625 * (t - (2.625 / 2.75))) * (t - (2.625 / 2.75))) + 0.984375);

}
}
}
});
bardo.ease.ease_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"poly","poly",1201005828),new cljs.core.Keyword(null,"cubic","cubic",1834638442),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"elastic","elastic",6164687),new cljs.core.Keyword(null,"bounce","bounce",1491727280),new cljs.core.Keyword(null,"back","back",-417520012),new cljs.core.Keyword(null,"quad","quad",432820757),new cljs.core.Keyword(null,"sine","sine",-619916490),new cljs.core.Keyword(null,"linear","linear",872268697)],[bardo.ease.poly,cljs.core.constantly.call(null,bardo.ease.cubic),cljs.core.constantly.call(null,bardo.ease.exp),cljs.core.constantly.call(null,bardo.ease.circle),cljs.core.constantly.call(null,bardo.ease.elastic),cljs.core.constantly.call(null,bardo.ease.bounce),cljs.core.constantly.call(null,bardo.ease.back),cljs.core.constantly.call(null,bardo.ease.quad),cljs.core.constantly.call(null,bardo.ease.sine),cljs.core.constantly.call(null,cljs.core.identity)]);
/**
 * easing function constructor. takes key-mode where mode #{:in :out :in-out}
 *   ex. :bounce-in-out will return a symetrical bounce easing curve
 */
bardo.ease.ease = (function bardo$ease$ease(var_args){
var args__31533__auto__ = [];
var len__31526__auto___32383 = arguments.length;
var i__31527__auto___32384 = (0);
while(true){
if((i__31527__auto___32384 < len__31526__auto___32383)){
args__31533__auto__.push((arguments[i__31527__auto___32384]));

var G__32385 = (i__31527__auto___32384 + (1));
i__31527__auto___32384 = G__32385;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return bardo.ease.ease.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

bardo.ease.ease.cljs$core$IFn$_invoke$arity$variadic = (function (key,args){
var vec__32380 = clojure.string.split.call(null,cljs.core.name.call(null,key),/-/);
var fn = cljs.core.nth.call(null,vec__32380,(0),null);
var start = cljs.core.nth.call(null,vec__32380,(1),null);
var end = cljs.core.nth.call(null,vec__32380,(2),null);
var ease_fn = (function (){var or__30249__auto__ = cljs.core.get.call(null,bardo.ease.ease_fns,cljs.core.keyword.call(null,fn));
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return new cljs.core.Keyword(null,"linear","linear",872268697).cljs$core$IFn$_invoke$arity$1(bardo.ease.ease_fns);
}
})();
var mode = (function (){var or__30249__auto__ = cljs.core.get.call(null,bardo.ease.modes,cljs.core.keyword.call(null,clojure.string.join.call(null,"-",cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)))));
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(bardo.ease.modes);
}
})();
return cljs.core.comp.call(null,bardo.ease.clamp,mode).call(null,cljs.core.apply.call(null,ease_fn,args));
});

bardo.ease.ease.cljs$lang$maxFixedArity = (1);

bardo.ease.ease.cljs$lang$applyTo = (function (seq32378){
var G__32379 = cljs.core.first.call(null,seq32378);
var seq32378__$1 = cljs.core.next.call(null,seq32378);
return bardo.ease.ease.cljs$core$IFn$_invoke$arity$variadic(G__32379,seq32378__$1);
});


//# sourceMappingURL=ease.js.map?rel=1506023643407