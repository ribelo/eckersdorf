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
}catch (e49588){if((e49588 instanceof Error)){
var e__48677__auto__ = e49588;
if((e__48677__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,end,end)){
if(((!((end == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === end.bardo$interpolate$IFresh$)))?true:(((!end.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IFresh,end):false)):cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IFresh,end))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bardo.interpolate.fresh.call(null,end),end], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,end], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e49589){if((e49589 instanceof Error)){
var e__48677__auto____$1 = e49589;
if((e__48677__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48677__auto____$1;
}
} else {
throw e49589;

}
}} else {
throw e__48677__auto__;
}
} else {
throw e49588;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e49583){if((e49583 instanceof Error)){
var e__48677__auto__ = e49583;
if((e__48677__auto__ === cljs.core.match.backtrack)){
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
}catch (e49585){if((e49585 instanceof Error)){
var e__48677__auto____$1 = e49585;
if((e__48677__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,end,end)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e49586){if((e49586 instanceof Error)){
var e__48677__auto____$2 = e49586;
if((e__48677__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48677__auto____$2;
}
} else {
throw e49586;

}
}} else {
throw e__48677__auto____$1;
}
} else {
throw e49585;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e49584){if((e49584 instanceof Error)){
var e__48677__auto____$1 = e49584;
if((e__48677__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('')));
} else {
throw e__48677__auto____$1;
}
} else {
throw e49584;

}
}} else {
throw e__48677__auto__;
}
} else {
throw e49583;

}
}});
bardo.interpolate.wrap_infinite = (function bardo$interpolate$wrap_infinite(x,y){
if(cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
var ocr_49591 = cljs.core.mapv.call(null,cljs.core.counted_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
try{if((cljs.core.vector_QMARK_.call(null,ocr_49591)) && ((cljs.core.count.call(null,ocr_49591) === 2))){
try{var ocr_49591_0__49597 = cljs.core.nth.call(null,ocr_49591,(0));
if((ocr_49591_0__49597 === false)){
try{var ocr_49591_1__49598 = cljs.core.nth.call(null,ocr_49591,(1));
if((ocr_49591_1__49598 === false)){
throw Error(Exception,"Cannot interpolate between two uncounted sequences");
} else {
throw cljs.core.match.backtrack;

}
}catch (e49602){if((e49602 instanceof Error)){
var e__48677__auto__ = e49602;
if((e__48677__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,cljs.core.count.call(null,y),x),y], null);
} else {
throw e__48677__auto__;
}
} else {
throw e49602;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e49600){if((e49600 instanceof Error)){
var e__48677__auto__ = e49600;
if((e__48677__auto__ === cljs.core.match.backtrack)){
try{var ocr_49591_1__49598 = cljs.core.nth.call(null,ocr_49591,(1));
if((ocr_49591_1__49598 === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.take.call(null,cljs.core.count.call(null,x),y)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e49601){if((e49601 instanceof Error)){
var e__48677__auto____$1 = e49601;
if((e__48677__auto____$1 === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else {
throw e__48677__auto____$1;
}
} else {
throw e49601;

}
}} else {
throw e__48677__auto__;
}
} else {
throw e49600;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e49599){if((e49599 instanceof Error)){
var e__48677__auto__ = e49599;
if((e__48677__auto__ === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_49591)].join('')));
} else {
throw e__48677__auto__;
}
} else {
throw e49599;

}
}} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}
});
bardo.interpolate.juxt_args = (function bardo$interpolate$juxt_args(var_args){
var args__31533__auto__ = [];
var len__31526__auto___49604 = arguments.length;
var i__31527__auto___49605 = (0);
while(true){
if((i__31527__auto___49605 < len__31526__auto___49604)){
args__31533__auto__.push((arguments[i__31527__auto___49605]));

var G__49606 = (i__31527__auto___49605 + (1));
i__31527__auto___49605 = G__49606;
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
var G__49607__delegate = function (args){
return cljs.core.map_indexed.call(null,(function (idx,f){
return f.call(null,cljs.core.nth.call(null,args,idx,null));
}),fns);
};
var G__49607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49608__i = 0, G__49608__a = new Array(arguments.length -  0);
while (G__49608__i < G__49608__a.length) {G__49608__a[G__49608__i] = arguments[G__49608__i + 0]; ++G__49608__i;}
  args = new cljs.core.IndexedSeq(G__49608__a,0,null);
} 
return G__49607__delegate.call(this,args);};
G__49607.cljs$lang$maxFixedArity = 0;
G__49607.cljs$lang$applyTo = (function (arglist__49609){
var args = cljs.core.seq(arglist__49609);
return G__49607__delegate(args);
});
G__49607.cljs$core$IFn$_invoke$arity$variadic = G__49607__delegate;
return G__49607;
})()
;
});

bardo.interpolate.juxt_args.cljs$lang$maxFixedArity = (0);

bardo.interpolate.juxt_args.cljs$lang$applyTo = (function (seq49603){
return bardo.interpolate.juxt_args.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49603));
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
var seq__49610_49620 = cljs.core.seq.call(null,types);
var chunk__49611_49621 = null;
var count__49612_49622 = (0);
var i__49613_49623 = (0);
while(true){
if((i__49613_49623 < count__49612_49622)){
var vec__49614_49624 = cljs.core._nth.call(null,chunk__49611_49621,i__49613_49623);
var type_49625 = cljs.core.nth.call(null,vec__49614_49624,(0),null);
var pred_49626 = cljs.core.nth.call(null,vec__49614_49624,(1),null);
bardo.interpolate.symmetrical_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),["Cannot interpolate between a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_49625)," and something else"].join(''),bardo.interpolate.pair_pred.call(null,pred_49626));

var G__49627 = seq__49610_49620;
var G__49628 = chunk__49611_49621;
var G__49629 = count__49612_49622;
var G__49630 = (i__49613_49623 + (1));
seq__49610_49620 = G__49627;
chunk__49611_49621 = G__49628;
count__49612_49622 = G__49629;
i__49613_49623 = G__49630;
continue;
} else {
var temp__5290__auto___49631 = cljs.core.seq.call(null,seq__49610_49620);
if(temp__5290__auto___49631){
var seq__49610_49632__$1 = temp__5290__auto___49631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49610_49632__$1)){
var c__31180__auto___49633 = cljs.core.chunk_first.call(null,seq__49610_49632__$1);
var G__49634 = cljs.core.chunk_rest.call(null,seq__49610_49632__$1);
var G__49635 = c__31180__auto___49633;
var G__49636 = cljs.core.count.call(null,c__31180__auto___49633);
var G__49637 = (0);
seq__49610_49620 = G__49634;
chunk__49611_49621 = G__49635;
count__49612_49622 = G__49636;
i__49613_49623 = G__49637;
continue;
} else {
var vec__49617_49638 = cljs.core.first.call(null,seq__49610_49632__$1);
var type_49639 = cljs.core.nth.call(null,vec__49617_49638,(0),null);
var pred_49640 = cljs.core.nth.call(null,vec__49617_49638,(1),null);
bardo.interpolate.symmetrical_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),["Cannot interpolate between a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_49639)," and something else"].join(''),bardo.interpolate.pair_pred.call(null,pred_49640));

var G__49641 = cljs.core.next.call(null,seq__49610_49632__$1);
var G__49642 = null;
var G__49643 = (0);
var G__49644 = (0);
seq__49610_49620 = G__49641;
chunk__49611_49621 = G__49642;
count__49612_49622 = G__49643;
i__49613_49623 = G__49644;
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
}catch (e49660){if((e49660 instanceof Error)){
var e__48677__auto__ = e49660;
if((e__48677__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48677__auto__;
}
} else {
throw e49660;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e49653){if((e49653 instanceof Error)){
var e__48677__auto__ = e49653;
if((e__48677__auto__ === cljs.core.match.backtrack)){
try{if((t === (1))){
try{if(cljs.core.truth_(bardo.interpolate.hash_map_QMARK_.call(null,v))){
return cljs.core.select_keys.call(null,v,cljs.core.keys.call(null,end));
} else {
throw cljs.core.match.backtrack;

}
}catch (e49659){if((e49659 instanceof Error)){
var e__48677__auto____$1 = e49659;
if((e__48677__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48677__auto____$1;
}
} else {
throw e49659;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e49654){if((e49654 instanceof Error)){
var e__48677__auto____$1 = e49654;
if((e__48677__auto____$1 === cljs.core.match.backtrack)){
try{if((t === (0))){
try{if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,start),v));
} else {
throw cljs.core.match.backtrack;

}
}catch (e49658){if((e49658 instanceof Error)){
var e__48677__auto____$2 = e49658;
if((e__48677__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48677__auto____$2;
}
} else {
throw e49658;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e49655){if((e49655 instanceof Error)){
var e__48677__auto____$2 = e49655;
if((e__48677__auto____$2 === cljs.core.match.backtrack)){
try{if((t === (1))){
try{if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,end),v));
} else {
throw cljs.core.match.backtrack;

}
}catch (e49657){if((e49657 instanceof Error)){
var e__48677__auto____$3 = e49657;
if((e__48677__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48677__auto____$3;
}
} else {
throw e49657;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e49656){if((e49656 instanceof Error)){
var e__48677__auto____$3 = e49656;
if((e__48677__auto____$3 === cljs.core.match.backtrack)){
return v;
} else {
throw e__48677__auto____$3;
}
} else {
throw e49656;

}
}} else {
throw e__48677__auto____$2;
}
} else {
throw e49655;

}
}} else {
throw e__48677__auto____$1;
}
} else {
throw e49654;

}
}} else {
throw e__48677__auto__;
}
} else {
throw e49653;

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
return (function bardo$interpolate$iter__49665(s__49666){
return (new cljs.core.LazySeq(null,((function (start__$1){
return (function (){
var s__49666__$1 = s__49666;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__49666__$1);
if(temp__5290__auto__){
var s__49666__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49666__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__49666__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__49668 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__49667 = (0);
while(true){
if((i__49667 < size__31130__auto__)){
var k = cljs.core._nth.call(null,c__31129__auto__,i__49667);
cljs.core.chunk_append.call(null,b__49668,((function (i__49667,k,c__31129__auto__,size__31130__auto__,b__49668,s__49666__$2,temp__5290__auto__,start__$1){
return (function (p1__49663_SHARP_){
return p1__49663_SHARP_.call(null,t);
});})(i__49667,k,c__31129__auto__,size__31130__auto__,b__49668,s__49666__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.apply.call(null,bardo.interpolate.wrap_nil,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,start__$1,k,null),cljs.core.nth.call(null,end,k,null)], null)))));

var G__49673 = (i__49667 + (1));
i__49667 = G__49673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49668),bardo$interpolate$iter__49665.call(null,cljs.core.chunk_rest.call(null,s__49666__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49668),null);
}
} else {
var k = cljs.core.first.call(null,s__49666__$2);
return cljs.core.cons.call(null,((function (k,s__49666__$2,temp__5290__auto__,start__$1){
return (function (p1__49663_SHARP_){
return p1__49663_SHARP_.call(null,t);
});})(k,s__49666__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.apply.call(null,bardo.interpolate.wrap_nil,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,start__$1,k,null),cljs.core.nth.call(null,end,k,null)], null)))),bardo$interpolate$iter__49665.call(null,cljs.core.rest.call(null,s__49666__$2)));
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
return (function bardo$interpolate$iter__49669(s__49670){
return (new cljs.core.LazySeq(null,((function (start__$1){
return (function (){
var s__49670__$1 = s__49670;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__49670__$1);
if(temp__5290__auto__){
var s__49670__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49670__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__49670__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__49672 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__49671 = (0);
while(true){
if((i__49671 < size__31130__auto__)){
var k = cljs.core._nth.call(null,c__31129__auto__,i__49671);
cljs.core.chunk_append.call(null,b__49672,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((function (i__49671,k,c__31129__auto__,size__31130__auto__,b__49672,s__49670__$2,temp__5290__auto__,start__$1){
return (function (p1__49664_SHARP_){
return p1__49664_SHARP_.call(null,t);
});})(i__49671,k,c__31129__auto__,size__31130__auto__,b__49672,s__49670__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.map.call(null,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null))))], null));

var G__49674 = (i__49671 + (1));
i__49671 = G__49674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49672),bardo$interpolate$iter__49669.call(null,cljs.core.chunk_rest.call(null,s__49670__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49672),null);
}
} else {
var k = cljs.core.first.call(null,s__49670__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((function (k,s__49670__$2,temp__5290__auto__,start__$1){
return (function (p1__49664_SHARP_){
return p1__49664_SHARP_.call(null,t);
});})(k,s__49670__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.map.call(null,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null))))], null),bardo$interpolate$iter__49669.call(null,cljs.core.rest.call(null,s__49670__$2)));
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
var wrapped = (function (){var G__49676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null);
var G__49676__$1 = (((G__49676 == null))?null:cljs.core.apply.call(null,bardo.interpolate.wrap_nil,G__49676));
var G__49676__$2 = (((G__49676__$1 == null))?null:cljs.core.apply.call(null,bardo.interpolate.wrap_errors,G__49676__$1));
if((G__49676__$2 == null)){
return null;
} else {
return cljs.core.apply.call(null,bardo.interpolate.wrap_infinite,G__49676__$2);
}
})();
var can_interpolate = cljs.core.mapv.call(null,((function (wrapped){
return (function (p1__49675_SHARP_){
if(!((p1__49675_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__49675_SHARP_.bardo$interpolate$IInterpolate$))){
return true;
} else {
if((!p1__49675_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IInterpolate,p1__49675_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IInterpolate,p1__49675_SHARP_);
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
var G__49679 = arguments.length;
switch (G__49679) {
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
var G__49683 = arguments.length;
switch (G__49683) {
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
var vec__49684 = states;
var seq__49685 = cljs.core.seq.call(null,vec__49684);
var first__49686 = cljs.core.first.call(null,seq__49685);
var seq__49685__$1 = cljs.core.next.call(null,seq__49685);
var start = first__49686;
var first__49686__$1 = cljs.core.first.call(null,seq__49685__$1);
var seq__49685__$2 = cljs.core.next.call(null,seq__49685__$1);
var second = first__49686__$1;
var states__$1 = seq__49685__$2;
var output = cljs.core.cons.call(null,(0),cljs.core.reverse.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.iterate.call(null,((function (n,vec__49684,seq__49685,first__49686,seq__49685__$1,start,first__49686__$1,seq__49685__$2,second,states__$1){
return (function (p1__49681_SHARP_){
return (p1__49681_SHARP_ / (2));
});})(n,vec__49684,seq__49685,first__49686,seq__49685__$1,start,first__49686__$1,seq__49685__$2,second,states__$1))
,(1)))));
return bardo.ease.shift_parts.call(null,cljs.core.reduce.call(null,bardo.interpolate.chain,bardo.interpolate.interpolate.call(null,start,second),states__$1),input,output);
});

bardo.interpolate.pipeline.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=interpolate.js.map?rel=1507056181353
