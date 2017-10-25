// Compiled by ClojureScript 1.9.908 {}
goog.provide('bardo.interpolate');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('bardo.ease');

/**
 * @interface
 */
bardo.interpolate.IFresh = function(){};

bardo.interpolate.fresh = (function bardo$interpolate$fresh(x){
if((!((x == null))) && (!((x.bardo$interpolate$IFresh$fresh$arity$1 == null)))){
return x.bardo$interpolate$IFresh$fresh$arity$1(x);
} else {
var x__30982__auto__ = (((x == null))?null:x);
var m__30983__auto__ = (bardo.interpolate.fresh[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,x);
} else {
var m__30983__auto____$1 = (bardo.interpolate.fresh["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IFresh.fresh",x);
}
}
}
});

goog.object.set(bardo.interpolate.IFresh,"number",true);

goog.object.set(bardo.interpolate.fresh,"number",(function (x){
return (0);
}));

cljs.core.List.prototype.bardo$interpolate$IFresh$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bardo$interpolate$IFresh$fresh$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.PersistentArrayMap.prototype.bardo$interpolate$IFresh$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bardo$interpolate$IFresh$fresh$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});
bardo.interpolate.hash_map_QMARK_ = cljs.core.every_pred.call(null,cljs.core.coll_QMARK_,cljs.core.complement.call(null,cljs.core.sequential_QMARK_));
/**
 * if a value is nil, replace it with a fresh value of the other
 *   value if it satisfies IFresh
 */
bardo.interpolate.wrap_nil = (function bardo$interpolate$wrap_nil(start,end){
try{if((start === null)){
try{if((end === null)){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e45490){if((e45490 instanceof Error)){
var e__44579__auto__ = e45490;
if((e__44579__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,end,end)){
if(((!((end == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === end.bardo$interpolate$IFresh$)))?true:(((!end.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IFresh,end):false)):cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IFresh,end))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bardo.interpolate.fresh.call(null,end),end], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,end], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e45491){if((e45491 instanceof Error)){
var e__44579__auto____$1 = e45491;
if((e__44579__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44579__auto____$1;
}
} else {
throw e45491;

}
}} else {
throw e__44579__auto__;
}
} else {
throw e45490;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45485){if((e45485 instanceof Error)){
var e__44579__auto__ = e45485;
if((e__44579__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,start,start)){
try{if((end === null)){
if(((!((start == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === start.bardo$interpolate$IFresh$)))?true:(((!start.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IFresh,start):false)):cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IFresh,start))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,bardo.interpolate.fresh.call(null,start)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,null], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e45487){if((e45487 instanceof Error)){
var e__44579__auto____$1 = e45487;
if((e__44579__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,end,end)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45488){if((e45488 instanceof Error)){
var e__44579__auto____$2 = e45488;
if((e__44579__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44579__auto____$2;
}
} else {
throw e45488;

}
}} else {
throw e__44579__auto____$1;
}
} else {
throw e45487;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45486){if((e45486 instanceof Error)){
var e__44579__auto____$1 = e45486;
if((e__44579__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('')));
} else {
throw e__44579__auto____$1;
}
} else {
throw e45486;

}
}} else {
throw e__44579__auto__;
}
} else {
throw e45485;

}
}});
bardo.interpolate.wrap_infinite = (function bardo$interpolate$wrap_infinite(x,y){
if(cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
var ocr_45493 = cljs.core.mapv.call(null,cljs.core.counted_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
try{if((cljs.core.vector_QMARK_.call(null,ocr_45493)) && ((cljs.core.count.call(null,ocr_45493) === 2))){
try{var ocr_45493_0__45499 = cljs.core.nth.call(null,ocr_45493,(0));
if((ocr_45493_0__45499 === false)){
try{var ocr_45493_1__45500 = cljs.core.nth.call(null,ocr_45493,(1));
if((ocr_45493_1__45500 === false)){
throw Error(Exception,"Cannot interpolate between two uncounted sequences");
} else {
throw cljs.core.match.backtrack;

}
}catch (e45504){if((e45504 instanceof Error)){
var e__44579__auto__ = e45504;
if((e__44579__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,cljs.core.count.call(null,y),x),y], null);
} else {
throw e__44579__auto__;
}
} else {
throw e45504;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45502){if((e45502 instanceof Error)){
var e__44579__auto__ = e45502;
if((e__44579__auto__ === cljs.core.match.backtrack)){
try{var ocr_45493_1__45500 = cljs.core.nth.call(null,ocr_45493,(1));
if((ocr_45493_1__45500 === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.take.call(null,cljs.core.count.call(null,x),y)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45503){if((e45503 instanceof Error)){
var e__44579__auto____$1 = e45503;
if((e__44579__auto____$1 === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else {
throw e__44579__auto____$1;
}
} else {
throw e45503;

}
}} else {
throw e__44579__auto__;
}
} else {
throw e45502;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45501){if((e45501 instanceof Error)){
var e__44579__auto__ = e45501;
if((e__44579__auto__ === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_45493)].join('')));
} else {
throw e__44579__auto__;
}
} else {
throw e45501;

}
}} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}
});
bardo.interpolate.juxt_args = (function bardo$interpolate$juxt_args(var_args){
var args__31533__auto__ = [];
var len__31526__auto___45506 = arguments.length;
var i__31527__auto___45507 = (0);
while(true){
if((i__31527__auto___45507 < len__31526__auto___45506)){
args__31533__auto__.push((arguments[i__31527__auto___45507]));

var G__45508 = (i__31527__auto___45507 + (1));
i__31527__auto___45507 = G__45508;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return bardo.interpolate.juxt_args.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

bardo.interpolate.juxt_args.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function() { 
var G__45509__delegate = function (args){
return cljs.core.map_indexed.call(null,(function (idx,f){
return f.call(null,cljs.core.nth.call(null,args,idx,null));
}),fns);
};
var G__45509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45510__i = 0, G__45510__a = new Array(arguments.length -  0);
while (G__45510__i < G__45510__a.length) {G__45510__a[G__45510__i] = arguments[G__45510__i + 0]; ++G__45510__i;}
  args = new cljs.core.IndexedSeq(G__45510__a,0,null);
} 
return G__45509__delegate.call(this,args);};
G__45509.cljs$lang$maxFixedArity = 0;
G__45509.cljs$lang$applyTo = (function (arglist__45511){
var args = cljs.core.seq(arglist__45511);
return G__45509__delegate(args);
});
G__45509.cljs$core$IFn$_invoke$arity$variadic = G__45509__delegate;
return G__45509;
})()
;
});

bardo.interpolate.juxt_args.cljs$lang$maxFixedArity = (0);

bardo.interpolate.juxt_args.cljs$lang$applyTo = (function (seq45505){
return bardo.interpolate.juxt_args.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45505));
});

/**
 * calls (f x y) (f y x) and returns [x y] where f is a function (f x y) that returns [x y]
 */
bardo.interpolate.symmetrical_error = (function bardo$interpolate$symmetrical_error(s,msg,f){
if(cljs.core.truth_((function (){var or__30249__auto__ = cljs.core.apply.call(null,f,s);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return cljs.core.apply.call(null,f,cljs.core.reverse.call(null,s));
}
})())){
throw Error(msg);
} else {
return null;
}
});
bardo.interpolate.pair_pred = (function bardo$interpolate$pair_pred(pred){
return cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.identity),bardo.interpolate.juxt_args.call(null,pred,cljs.core.complement.call(null,pred)));
});
/**
 * throw appropriate errors if you can't interpolate between two values
 */
bardo.interpolate.wrap_errors = (function bardo$interpolate$wrap_errors(x,y){
var types = new cljs.core.PersistentArrayMap(null, 3, ["seq",cljs.core.sequential_QMARK_,"hash-map",bardo.interpolate.hash_map_QMARK_,"number",cljs.core.number_QMARK_], null);
var seq__45512_45522 = cljs.core.seq.call(null,types);
var chunk__45513_45523 = null;
var count__45514_45524 = (0);
var i__45515_45525 = (0);
while(true){
if((i__45515_45525 < count__45514_45524)){
var vec__45516_45526 = cljs.core._nth.call(null,chunk__45513_45523,i__45515_45525);
var type_45527 = cljs.core.nth.call(null,vec__45516_45526,(0),null);
var pred_45528 = cljs.core.nth.call(null,vec__45516_45526,(1),null);
bardo.interpolate.symmetrical_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),["Cannot interpolate between a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_45527)," and something else"].join(''),bardo.interpolate.pair_pred.call(null,pred_45528));

var G__45529 = seq__45512_45522;
var G__45530 = chunk__45513_45523;
var G__45531 = count__45514_45524;
var G__45532 = (i__45515_45525 + (1));
seq__45512_45522 = G__45529;
chunk__45513_45523 = G__45530;
count__45514_45524 = G__45531;
i__45515_45525 = G__45532;
continue;
} else {
var temp__5290__auto___45533 = cljs.core.seq.call(null,seq__45512_45522);
if(temp__5290__auto___45533){
var seq__45512_45534__$1 = temp__5290__auto___45533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45512_45534__$1)){
var c__31180__auto___45535 = cljs.core.chunk_first.call(null,seq__45512_45534__$1);
var G__45536 = cljs.core.chunk_rest.call(null,seq__45512_45534__$1);
var G__45537 = c__31180__auto___45535;
var G__45538 = cljs.core.count.call(null,c__31180__auto___45535);
var G__45539 = (0);
seq__45512_45522 = G__45536;
chunk__45513_45523 = G__45537;
count__45514_45524 = G__45538;
i__45515_45525 = G__45539;
continue;
} else {
var vec__45519_45540 = cljs.core.first.call(null,seq__45512_45534__$1);
var type_45541 = cljs.core.nth.call(null,vec__45519_45540,(0),null);
var pred_45542 = cljs.core.nth.call(null,vec__45519_45540,(1),null);
bardo.interpolate.symmetrical_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),["Cannot interpolate between a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_45541)," and something else"].join(''),bardo.interpolate.pair_pred.call(null,pred_45542));

var G__45543 = cljs.core.next.call(null,seq__45512_45534__$1);
var G__45544 = null;
var G__45545 = (0);
var G__45546 = (0);
seq__45512_45522 = G__45543;
chunk__45513_45523 = G__45544;
count__45514_45524 = G__45545;
i__45515_45525 = G__45546;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
/**
 * removed keys not present in start or end of interpolation
 */
bardo.interpolate.wrap_size = (function bardo$interpolate$wrap_size(start,end){
return (function (intrpl){
return (function (t){
var v = intrpl.call(null,t);
try{if((t === (0))){
try{if(cljs.core.truth_(bardo.interpolate.hash_map_QMARK_.call(null,v))){
return cljs.core.select_keys.call(null,v,cljs.core.keys.call(null,start));
} else {
throw cljs.core.match.backtrack;

}
}catch (e45562){if((e45562 instanceof Error)){
var e__44579__auto__ = e45562;
if((e__44579__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44579__auto__;
}
} else {
throw e45562;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45555){if((e45555 instanceof Error)){
var e__44579__auto__ = e45555;
if((e__44579__auto__ === cljs.core.match.backtrack)){
try{if((t === (1))){
try{if(cljs.core.truth_(bardo.interpolate.hash_map_QMARK_.call(null,v))){
return cljs.core.select_keys.call(null,v,cljs.core.keys.call(null,end));
} else {
throw cljs.core.match.backtrack;

}
}catch (e45561){if((e45561 instanceof Error)){
var e__44579__auto____$1 = e45561;
if((e__44579__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44579__auto____$1;
}
} else {
throw e45561;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45556){if((e45556 instanceof Error)){
var e__44579__auto____$1 = e45556;
if((e__44579__auto____$1 === cljs.core.match.backtrack)){
try{if((t === (0))){
try{if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,start),v));
} else {
throw cljs.core.match.backtrack;

}
}catch (e45560){if((e45560 instanceof Error)){
var e__44579__auto____$2 = e45560;
if((e__44579__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44579__auto____$2;
}
} else {
throw e45560;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45557){if((e45557 instanceof Error)){
var e__44579__auto____$2 = e45557;
if((e__44579__auto____$2 === cljs.core.match.backtrack)){
try{if((t === (1))){
try{if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,end),v));
} else {
throw cljs.core.match.backtrack;

}
}catch (e45559){if((e45559 instanceof Error)){
var e__44579__auto____$3 = e45559;
if((e__44579__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44579__auto____$3;
}
} else {
throw e45559;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45558){if((e45558 instanceof Error)){
var e__44579__auto____$3 = e45558;
if((e__44579__auto____$3 === cljs.core.match.backtrack)){
return v;
} else {
throw e__44579__auto____$3;
}
} else {
throw e45558;

}
}} else {
throw e__44579__auto____$2;
}
} else {
throw e45557;

}
}} else {
throw e__44579__auto____$1;
}
} else {
throw e45556;

}
}} else {
throw e__44579__auto__;
}
} else {
throw e45555;

}
}});
});
});

/**
 * @interface
 */
bardo.interpolate.IInterpolate = function(){};

bardo.interpolate._interpolate = (function bardo$interpolate$_interpolate(start,end){
if((!((start == null))) && (!((start.bardo$interpolate$IInterpolate$_interpolate$arity$2 == null)))){
return start.bardo$interpolate$IInterpolate$_interpolate$arity$2(start,end);
} else {
var x__30982__auto__ = (((start == null))?null:start);
var m__30983__auto__ = (bardo.interpolate._interpolate[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,start,end);
} else {
var m__30983__auto____$1 = (bardo.interpolate._interpolate["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,start,end);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpolate.-interpolate",start);
}
}
}
});

goog.object.set(bardo.interpolate.IInterpolate,"number",true);

goog.object.set(bardo.interpolate._interpolate,"number",(function (start,end){
return (function (t){
return (start + (t * (end - start)));
});
}));

cljs.core.List.prototype.bardo$interpolate$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bardo$interpolate$IInterpolate$_interpolate$arity$2 = (function (start,end){
var start__$1 = this;
return ((function (start__$1){
return (function (t){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__31131__auto__ = ((function (start__$1){
return (function bardo$interpolate$iter__45567(s__45568){
return (new cljs.core.LazySeq(null,((function (start__$1){
return (function (){
var s__45568__$1 = s__45568;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__45568__$1);
if(temp__5290__auto__){
var s__45568__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45568__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__45568__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__45570 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__45569 = (0);
while(true){
if((i__45569 < size__31130__auto__)){
var k = cljs.core._nth.call(null,c__31129__auto__,i__45569);
cljs.core.chunk_append.call(null,b__45570,((function (i__45569,k,c__31129__auto__,size__31130__auto__,b__45570,s__45568__$2,temp__5290__auto__,start__$1){
return (function (p1__45565_SHARP_){
return p1__45565_SHARP_.call(null,t);
});})(i__45569,k,c__31129__auto__,size__31130__auto__,b__45570,s__45568__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.apply.call(null,bardo.interpolate.wrap_nil,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,start__$1,k,null),cljs.core.nth.call(null,end,k,null)], null)))));

var G__45575 = (i__45569 + (1));
i__45569 = G__45575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45570),bardo$interpolate$iter__45567.call(null,cljs.core.chunk_rest.call(null,s__45568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45570),null);
}
} else {
var k = cljs.core.first.call(null,s__45568__$2);
return cljs.core.cons.call(null,((function (k,s__45568__$2,temp__5290__auto__,start__$1){
return (function (p1__45565_SHARP_){
return p1__45565_SHARP_.call(null,t);
});})(k,s__45568__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.apply.call(null,bardo.interpolate.wrap_nil,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,start__$1,k,null),cljs.core.nth.call(null,end,k,null)], null)))),bardo$interpolate$iter__45567.call(null,cljs.core.rest.call(null,s__45568__$2)));
}
} else {
return null;
}
break;
}
});})(start__$1))
,null,null));
});})(start__$1))
;
return iter__31131__auto__.call(null,cljs.core.range.call(null,Math.max(cljs.core.count.call(null,start__$1),cljs.core.count.call(null,end))));
})());
});
;})(start__$1))
});

cljs.core.PersistentArrayMap.prototype.bardo$interpolate$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bardo$interpolate$IInterpolate$_interpolate$arity$2 = (function (start,end){
var start__$1 = this;
return ((function (start__$1){
return (function (t){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__31131__auto__ = ((function (start__$1){
return (function bardo$interpolate$iter__45571(s__45572){
return (new cljs.core.LazySeq(null,((function (start__$1){
return (function (){
var s__45572__$1 = s__45572;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__45572__$1);
if(temp__5290__auto__){
var s__45572__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45572__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__45572__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__45574 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__45573 = (0);
while(true){
if((i__45573 < size__31130__auto__)){
var k = cljs.core._nth.call(null,c__31129__auto__,i__45573);
cljs.core.chunk_append.call(null,b__45574,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((function (i__45573,k,c__31129__auto__,size__31130__auto__,b__45574,s__45572__$2,temp__5290__auto__,start__$1){
return (function (p1__45566_SHARP_){
return p1__45566_SHARP_.call(null,t);
});})(i__45573,k,c__31129__auto__,size__31130__auto__,b__45574,s__45572__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.map.call(null,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null))))], null));

var G__45576 = (i__45573 + (1));
i__45573 = G__45576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45574),bardo$interpolate$iter__45571.call(null,cljs.core.chunk_rest.call(null,s__45572__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45574),null);
}
} else {
var k = cljs.core.first.call(null,s__45572__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((function (k,s__45572__$2,temp__5290__auto__,start__$1){
return (function (p1__45566_SHARP_){
return p1__45566_SHARP_.call(null,t);
});})(k,s__45572__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.map.call(null,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null))))], null),bardo$interpolate$iter__45571.call(null,cljs.core.rest.call(null,s__45572__$2)));
}
} else {
return null;
}
break;
}
});})(start__$1))
,null,null));
});})(start__$1))
;
return iter__31131__auto__.call(null,cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,cljs.core.set,cljs.core.map.call(null,cljs.core.keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null)))));
})());
});
;})(start__$1))
});
bardo.interpolate.interpolate = (function bardo$interpolate$interpolate(start,end){
var wrapped = (function (){var G__45578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null);
var G__45578__$1 = (((G__45578 == null))?null:cljs.core.apply.call(null,bardo.interpolate.wrap_nil,G__45578));
var G__45578__$2 = (((G__45578__$1 == null))?null:cljs.core.apply.call(null,bardo.interpolate.wrap_errors,G__45578__$1));
if((G__45578__$2 == null)){
return null;
} else {
return cljs.core.apply.call(null,bardo.interpolate.wrap_infinite,G__45578__$2);
}
})();
var can_interpolate = cljs.core.mapv.call(null,((function (wrapped){
return (function (p1__45577_SHARP_){
if(!((p1__45577_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__45577_SHARP_.bardo$interpolate$IInterpolate$))){
return true;
} else {
if((!p1__45577_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IInterpolate,p1__45577_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IInterpolate,p1__45577_SHARP_);
}
});})(wrapped))
,wrapped);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,true,can_interpolate))){
return cljs.core.apply.call(null,bardo.interpolate.wrap_size,wrapped).call(null,cljs.core.apply.call(null,bardo.interpolate._interpolate,wrapped));
} else {
throw Error(["Cannot interpolate between ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join(''));
}
});
bardo.interpolate.into_lazy_seq = (function bardo$interpolate$into_lazy_seq(intrpl,vals){
if(cljs.core.seq.call(null,cljs.core.rest.call(null,vals))){
return cljs.core.cons.call(null,intrpl.call(null,cljs.core.first.call(null,vals)),(new cljs.core.LazySeq(null,(function (){
return bardo.interpolate.into_lazy_seq.call(null,intrpl,cljs.core.rest.call(null,vals));
}),null,null)));
} else {
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[intrpl.call(null,cljs.core.first.call(null,vals))],null));
}
});
bardo.interpolate.mix = (function bardo$interpolate$mix(start,end){
return (function (t){
return bardo.interpolate.interpolate.call(null,start.call(null,t),end.call(null,t)).call(null,t);
});
});
bardo.interpolate.blend = (function bardo$interpolate$blend(intrpl,end){
return (function (t){
return bardo.interpolate.interpolate.call(null,intrpl.call(null,t),end).call(null,t);
});
});
bardo.interpolate.chain = (function bardo$interpolate$chain(var_args){
var G__45581 = arguments.length;
switch (G__45581) {
case 2:
return bardo.interpolate.chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bardo.interpolate.chain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bardo.interpolate.chain.cljs$core$IFn$_invoke$arity$2 = (function (intrpl,end){
return bardo.interpolate.chain.call(null,intrpl,end,0.5);
});

bardo.interpolate.chain.cljs$core$IFn$_invoke$arity$3 = (function (intrpl,end,mid){
var start = bardo.ease.shift.call(null,intrpl,(0),mid);
var end__$1 = bardo.ease.shift.call(null,bardo.interpolate.interpolate.call(null,intrpl.call(null,(1)),end),mid,(1));
return ((function (start,end__$1){
return (function (t){
if((t < mid)){
return start.call(null,t);
} else {
if((t >= mid)){
return end__$1.call(null,t);
} else {
return null;
}
}
});
;})(start,end__$1))
});

bardo.interpolate.chain.cljs$lang$maxFixedArity = 3;

bardo.interpolate.pipeline = (function bardo$interpolate$pipeline(var_args){
var G__45585 = arguments.length;
switch (G__45585) {
case 1:
return bardo.interpolate.pipeline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bardo.interpolate.pipeline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bardo.interpolate.pipeline.cljs$core$IFn$_invoke$arity$1 = (function (states){
var n = cljs.core.count.call(null,states);
return bardo.interpolate.pipeline.call(null,states,cljs.core.cons.call(null,(0),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) / (n - (1)))),cljs.core.range.call(null,(1),n))));
});

bardo.interpolate.pipeline.cljs$core$IFn$_invoke$arity$2 = (function (states,input){
var n = cljs.core.count.call(null,states);
var vec__45586 = states;
var seq__45587 = cljs.core.seq.call(null,vec__45586);
var first__45588 = cljs.core.first.call(null,seq__45587);
var seq__45587__$1 = cljs.core.next.call(null,seq__45587);
var start = first__45588;
var first__45588__$1 = cljs.core.first.call(null,seq__45587__$1);
var seq__45587__$2 = cljs.core.next.call(null,seq__45587__$1);
var second = first__45588__$1;
var states__$1 = seq__45587__$2;
var output = cljs.core.cons.call(null,(0),cljs.core.reverse.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.iterate.call(null,((function (n,vec__45586,seq__45587,first__45588,seq__45587__$1,start,first__45588__$1,seq__45587__$2,second,states__$1){
return (function (p1__45583_SHARP_){
return (p1__45583_SHARP_ / (2));
});})(n,vec__45586,seq__45587,first__45588,seq__45587__$1,start,first__45588__$1,seq__45587__$2,second,states__$1))
,(1)))));
return bardo.ease.shift_parts.call(null,cljs.core.reduce.call(null,bardo.interpolate.chain,bardo.interpolate.interpolate.call(null,start,second),states__$1),input,output);
});

bardo.interpolate.pipeline.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=interpolate.js.map?rel=1508862161289
