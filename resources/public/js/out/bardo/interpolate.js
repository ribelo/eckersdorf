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
var x__30972__auto__ = (((x == null))?null:x);
var m__30973__auto__ = (bardo.interpolate.fresh[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,x);
} else {
var m__30973__auto____$1 = (bardo.interpolate.fresh["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,x);
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
}catch (e45730){if((e45730 instanceof Error)){
var e__44819__auto__ = e45730;
if((e__44819__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,end,end)){
if(((!((end == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === end.bardo$interpolate$IFresh$)))?true:(((!end.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IFresh,end):false)):cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IFresh,end))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bardo.interpolate.fresh.call(null,end),end], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,end], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e45731){if((e45731 instanceof Error)){
var e__44819__auto____$1 = e45731;
if((e__44819__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44819__auto____$1;
}
} else {
throw e45731;

}
}} else {
throw e__44819__auto__;
}
} else {
throw e45730;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45725){if((e45725 instanceof Error)){
var e__44819__auto__ = e45725;
if((e__44819__auto__ === cljs.core.match.backtrack)){
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
}catch (e45727){if((e45727 instanceof Error)){
var e__44819__auto____$1 = e45727;
if((e__44819__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,end,end)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45728){if((e45728 instanceof Error)){
var e__44819__auto____$2 = e45728;
if((e__44819__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44819__auto____$2;
}
} else {
throw e45728;

}
}} else {
throw e__44819__auto____$1;
}
} else {
throw e45727;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45726){if((e45726 instanceof Error)){
var e__44819__auto____$1 = e45726;
if((e__44819__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('')));
} else {
throw e__44819__auto____$1;
}
} else {
throw e45726;

}
}} else {
throw e__44819__auto__;
}
} else {
throw e45725;

}
}});
bardo.interpolate.wrap_infinite = (function bardo$interpolate$wrap_infinite(x,y){
if(cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
var ocr_45733 = cljs.core.mapv.call(null,cljs.core.counted_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
try{if((cljs.core.vector_QMARK_.call(null,ocr_45733)) && ((cljs.core.count.call(null,ocr_45733) === 2))){
try{var ocr_45733_0__45739 = cljs.core.nth.call(null,ocr_45733,(0));
if((ocr_45733_0__45739 === false)){
try{var ocr_45733_1__45740 = cljs.core.nth.call(null,ocr_45733,(1));
if((ocr_45733_1__45740 === false)){
throw Error(Exception,"Cannot interpolate between two uncounted sequences");
} else {
throw cljs.core.match.backtrack;

}
}catch (e45744){if((e45744 instanceof Error)){
var e__44819__auto__ = e45744;
if((e__44819__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,cljs.core.count.call(null,y),x),y], null);
} else {
throw e__44819__auto__;
}
} else {
throw e45744;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45742){if((e45742 instanceof Error)){
var e__44819__auto__ = e45742;
if((e__44819__auto__ === cljs.core.match.backtrack)){
try{var ocr_45733_1__45740 = cljs.core.nth.call(null,ocr_45733,(1));
if((ocr_45733_1__45740 === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.take.call(null,cljs.core.count.call(null,x),y)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45743){if((e45743 instanceof Error)){
var e__44819__auto____$1 = e45743;
if((e__44819__auto____$1 === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else {
throw e__44819__auto____$1;
}
} else {
throw e45743;

}
}} else {
throw e__44819__auto__;
}
} else {
throw e45742;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45741){if((e45741 instanceof Error)){
var e__44819__auto__ = e45741;
if((e__44819__auto__ === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_45733)].join('')));
} else {
throw e__44819__auto__;
}
} else {
throw e45741;

}
}} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}
});
bardo.interpolate.juxt_args = (function bardo$interpolate$juxt_args(var_args){
var args__31523__auto__ = [];
var len__31516__auto___45746 = arguments.length;
var i__31517__auto___45747 = (0);
while(true){
if((i__31517__auto___45747 < len__31516__auto___45746)){
args__31523__auto__.push((arguments[i__31517__auto___45747]));

var G__45748 = (i__31517__auto___45747 + (1));
i__31517__auto___45747 = G__45748;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return bardo.interpolate.juxt_args.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

bardo.interpolate.juxt_args.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function() { 
var G__45749__delegate = function (args){
return cljs.core.map_indexed.call(null,(function (idx,f){
return f.call(null,cljs.core.nth.call(null,args,idx,null));
}),fns);
};
var G__45749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45750__i = 0, G__45750__a = new Array(arguments.length -  0);
while (G__45750__i < G__45750__a.length) {G__45750__a[G__45750__i] = arguments[G__45750__i + 0]; ++G__45750__i;}
  args = new cljs.core.IndexedSeq(G__45750__a,0,null);
} 
return G__45749__delegate.call(this,args);};
G__45749.cljs$lang$maxFixedArity = 0;
G__45749.cljs$lang$applyTo = (function (arglist__45751){
var args = cljs.core.seq(arglist__45751);
return G__45749__delegate(args);
});
G__45749.cljs$core$IFn$_invoke$arity$variadic = G__45749__delegate;
return G__45749;
})()
;
});

bardo.interpolate.juxt_args.cljs$lang$maxFixedArity = (0);

bardo.interpolate.juxt_args.cljs$lang$applyTo = (function (seq45745){
return bardo.interpolate.juxt_args.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45745));
});

/**
 * calls (f x y) (f y x) and returns [x y] where f is a function (f x y) that returns [x y]
 */
bardo.interpolate.symmetrical_error = (function bardo$interpolate$symmetrical_error(s,msg,f){
if(cljs.core.truth_((function (){var or__30239__auto__ = cljs.core.apply.call(null,f,s);
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
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
var seq__45752_45762 = cljs.core.seq.call(null,types);
var chunk__45753_45763 = null;
var count__45754_45764 = (0);
var i__45755_45765 = (0);
while(true){
if((i__45755_45765 < count__45754_45764)){
var vec__45756_45766 = cljs.core._nth.call(null,chunk__45753_45763,i__45755_45765);
var type_45767 = cljs.core.nth.call(null,vec__45756_45766,(0),null);
var pred_45768 = cljs.core.nth.call(null,vec__45756_45766,(1),null);
bardo.interpolate.symmetrical_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),["Cannot interpolate between a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_45767)," and something else"].join(''),bardo.interpolate.pair_pred.call(null,pred_45768));

var G__45769 = seq__45752_45762;
var G__45770 = chunk__45753_45763;
var G__45771 = count__45754_45764;
var G__45772 = (i__45755_45765 + (1));
seq__45752_45762 = G__45769;
chunk__45753_45763 = G__45770;
count__45754_45764 = G__45771;
i__45755_45765 = G__45772;
continue;
} else {
var temp__5290__auto___45773 = cljs.core.seq.call(null,seq__45752_45762);
if(temp__5290__auto___45773){
var seq__45752_45774__$1 = temp__5290__auto___45773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45752_45774__$1)){
var c__31170__auto___45775 = cljs.core.chunk_first.call(null,seq__45752_45774__$1);
var G__45776 = cljs.core.chunk_rest.call(null,seq__45752_45774__$1);
var G__45777 = c__31170__auto___45775;
var G__45778 = cljs.core.count.call(null,c__31170__auto___45775);
var G__45779 = (0);
seq__45752_45762 = G__45776;
chunk__45753_45763 = G__45777;
count__45754_45764 = G__45778;
i__45755_45765 = G__45779;
continue;
} else {
var vec__45759_45780 = cljs.core.first.call(null,seq__45752_45774__$1);
var type_45781 = cljs.core.nth.call(null,vec__45759_45780,(0),null);
var pred_45782 = cljs.core.nth.call(null,vec__45759_45780,(1),null);
bardo.interpolate.symmetrical_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),["Cannot interpolate between a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_45781)," and something else"].join(''),bardo.interpolate.pair_pred.call(null,pred_45782));

var G__45783 = cljs.core.next.call(null,seq__45752_45774__$1);
var G__45784 = null;
var G__45785 = (0);
var G__45786 = (0);
seq__45752_45762 = G__45783;
chunk__45753_45763 = G__45784;
count__45754_45764 = G__45785;
i__45755_45765 = G__45786;
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
}catch (e45802){if((e45802 instanceof Error)){
var e__44819__auto__ = e45802;
if((e__44819__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44819__auto__;
}
} else {
throw e45802;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45795){if((e45795 instanceof Error)){
var e__44819__auto__ = e45795;
if((e__44819__auto__ === cljs.core.match.backtrack)){
try{if((t === (1))){
try{if(cljs.core.truth_(bardo.interpolate.hash_map_QMARK_.call(null,v))){
return cljs.core.select_keys.call(null,v,cljs.core.keys.call(null,end));
} else {
throw cljs.core.match.backtrack;

}
}catch (e45801){if((e45801 instanceof Error)){
var e__44819__auto____$1 = e45801;
if((e__44819__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44819__auto____$1;
}
} else {
throw e45801;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45796){if((e45796 instanceof Error)){
var e__44819__auto____$1 = e45796;
if((e__44819__auto____$1 === cljs.core.match.backtrack)){
try{if((t === (0))){
try{if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,start),v));
} else {
throw cljs.core.match.backtrack;

}
}catch (e45800){if((e45800 instanceof Error)){
var e__44819__auto____$2 = e45800;
if((e__44819__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44819__auto____$2;
}
} else {
throw e45800;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45797){if((e45797 instanceof Error)){
var e__44819__auto____$2 = e45797;
if((e__44819__auto____$2 === cljs.core.match.backtrack)){
try{if((t === (1))){
try{if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,end),v));
} else {
throw cljs.core.match.backtrack;

}
}catch (e45799){if((e45799 instanceof Error)){
var e__44819__auto____$3 = e45799;
if((e__44819__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44819__auto____$3;
}
} else {
throw e45799;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45798){if((e45798 instanceof Error)){
var e__44819__auto____$3 = e45798;
if((e__44819__auto____$3 === cljs.core.match.backtrack)){
return v;
} else {
throw e__44819__auto____$3;
}
} else {
throw e45798;

}
}} else {
throw e__44819__auto____$2;
}
} else {
throw e45797;

}
}} else {
throw e__44819__auto____$1;
}
} else {
throw e45796;

}
}} else {
throw e__44819__auto__;
}
} else {
throw e45795;

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
var x__30972__auto__ = (((start == null))?null:start);
var m__30973__auto__ = (bardo.interpolate._interpolate[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,start,end);
} else {
var m__30973__auto____$1 = (bardo.interpolate._interpolate["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,start,end);
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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__31121__auto__ = ((function (start__$1){
return (function bardo$interpolate$iter__45807(s__45808){
return (new cljs.core.LazySeq(null,((function (start__$1){
return (function (){
var s__45808__$1 = s__45808;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__45808__$1);
if(temp__5290__auto__){
var s__45808__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45808__$2)){
var c__31119__auto__ = cljs.core.chunk_first.call(null,s__45808__$2);
var size__31120__auto__ = cljs.core.count.call(null,c__31119__auto__);
var b__45810 = cljs.core.chunk_buffer.call(null,size__31120__auto__);
if((function (){var i__45809 = (0);
while(true){
if((i__45809 < size__31120__auto__)){
var k = cljs.core._nth.call(null,c__31119__auto__,i__45809);
cljs.core.chunk_append.call(null,b__45810,((function (i__45809,k,c__31119__auto__,size__31120__auto__,b__45810,s__45808__$2,temp__5290__auto__,start__$1){
return (function (p1__45805_SHARP_){
return p1__45805_SHARP_.call(null,t);
});})(i__45809,k,c__31119__auto__,size__31120__auto__,b__45810,s__45808__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.apply.call(null,bardo.interpolate.wrap_nil,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,start__$1,k,null),cljs.core.nth.call(null,end,k,null)], null)))));

var G__45815 = (i__45809 + (1));
i__45809 = G__45815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45810),bardo$interpolate$iter__45807.call(null,cljs.core.chunk_rest.call(null,s__45808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45810),null);
}
} else {
var k = cljs.core.first.call(null,s__45808__$2);
return cljs.core.cons.call(null,((function (k,s__45808__$2,temp__5290__auto__,start__$1){
return (function (p1__45805_SHARP_){
return p1__45805_SHARP_.call(null,t);
});})(k,s__45808__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.apply.call(null,bardo.interpolate.wrap_nil,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,start__$1,k,null),cljs.core.nth.call(null,end,k,null)], null)))),bardo$interpolate$iter__45807.call(null,cljs.core.rest.call(null,s__45808__$2)));
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
return iter__31121__auto__.call(null,cljs.core.range.call(null,Math.max(cljs.core.count.call(null,start__$1),cljs.core.count.call(null,end))));
})());
});
;})(start__$1))
});

cljs.core.PersistentArrayMap.prototype.bardo$interpolate$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bardo$interpolate$IInterpolate$_interpolate$arity$2 = (function (start,end){
var start__$1 = this;
return ((function (start__$1){
return (function (t){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__31121__auto__ = ((function (start__$1){
return (function bardo$interpolate$iter__45811(s__45812){
return (new cljs.core.LazySeq(null,((function (start__$1){
return (function (){
var s__45812__$1 = s__45812;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__45812__$1);
if(temp__5290__auto__){
var s__45812__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45812__$2)){
var c__31119__auto__ = cljs.core.chunk_first.call(null,s__45812__$2);
var size__31120__auto__ = cljs.core.count.call(null,c__31119__auto__);
var b__45814 = cljs.core.chunk_buffer.call(null,size__31120__auto__);
if((function (){var i__45813 = (0);
while(true){
if((i__45813 < size__31120__auto__)){
var k = cljs.core._nth.call(null,c__31119__auto__,i__45813);
cljs.core.chunk_append.call(null,b__45814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((function (i__45813,k,c__31119__auto__,size__31120__auto__,b__45814,s__45812__$2,temp__5290__auto__,start__$1){
return (function (p1__45806_SHARP_){
return p1__45806_SHARP_.call(null,t);
});})(i__45813,k,c__31119__auto__,size__31120__auto__,b__45814,s__45812__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.map.call(null,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null))))], null));

var G__45816 = (i__45813 + (1));
i__45813 = G__45816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45814),bardo$interpolate$iter__45811.call(null,cljs.core.chunk_rest.call(null,s__45812__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45814),null);
}
} else {
var k = cljs.core.first.call(null,s__45812__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((function (k,s__45812__$2,temp__5290__auto__,start__$1){
return (function (p1__45806_SHARP_){
return p1__45806_SHARP_.call(null,t);
});})(k,s__45812__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.map.call(null,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null))))], null),bardo$interpolate$iter__45811.call(null,cljs.core.rest.call(null,s__45812__$2)));
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
return iter__31121__auto__.call(null,cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,cljs.core.set,cljs.core.map.call(null,cljs.core.keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null)))));
})());
});
;})(start__$1))
});
bardo.interpolate.interpolate = (function bardo$interpolate$interpolate(start,end){
var wrapped = (function (){var G__45818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null);
var G__45818__$1 = (((G__45818 == null))?null:cljs.core.apply.call(null,bardo.interpolate.wrap_nil,G__45818));
var G__45818__$2 = (((G__45818__$1 == null))?null:cljs.core.apply.call(null,bardo.interpolate.wrap_errors,G__45818__$1));
if((G__45818__$2 == null)){
return null;
} else {
return cljs.core.apply.call(null,bardo.interpolate.wrap_infinite,G__45818__$2);
}
})();
var can_interpolate = cljs.core.mapv.call(null,((function (wrapped){
return (function (p1__45817_SHARP_){
if(!((p1__45817_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__45817_SHARP_.bardo$interpolate$IInterpolate$))){
return true;
} else {
if((!p1__45817_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IInterpolate,p1__45817_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IInterpolate,p1__45817_SHARP_);
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
var G__45821 = arguments.length;
switch (G__45821) {
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
var G__45825 = arguments.length;
switch (G__45825) {
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
var vec__45826 = states;
var seq__45827 = cljs.core.seq.call(null,vec__45826);
var first__45828 = cljs.core.first.call(null,seq__45827);
var seq__45827__$1 = cljs.core.next.call(null,seq__45827);
var start = first__45828;
var first__45828__$1 = cljs.core.first.call(null,seq__45827__$1);
var seq__45827__$2 = cljs.core.next.call(null,seq__45827__$1);
var second = first__45828__$1;
var states__$1 = seq__45827__$2;
var output = cljs.core.cons.call(null,(0),cljs.core.reverse.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.iterate.call(null,((function (n,vec__45826,seq__45827,first__45828,seq__45827__$1,start,first__45828__$1,seq__45827__$2,second,states__$1){
return (function (p1__45823_SHARP_){
return (p1__45823_SHARP_ / (2));
});})(n,vec__45826,seq__45827,first__45828,seq__45827__$1,start,first__45828__$1,seq__45827__$2,second,states__$1))
,(1)))));
return bardo.ease.shift_parts.call(null,cljs.core.reduce.call(null,bardo.interpolate.chain,bardo.interpolate.interpolate.call(null,start,second),states__$1),input,output);
});

bardo.interpolate.pipeline.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=interpolate.js.map?rel=1509094250303
