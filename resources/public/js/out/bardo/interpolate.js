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
}catch (e33816){if((e33816 instanceof Error)){
var e__32905__auto__ = e33816;
if((e__32905__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,end,end)){
if(((!((end == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === end.bardo$interpolate$IFresh$)))?true:(((!end.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IFresh,end):false)):cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IFresh,end))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bardo.interpolate.fresh.call(null,end),end], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,end], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e33817){if((e33817 instanceof Error)){
var e__32905__auto____$1 = e33817;
if((e__32905__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32905__auto____$1;
}
} else {
throw e33817;

}
}} else {
throw e__32905__auto__;
}
} else {
throw e33816;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33811){if((e33811 instanceof Error)){
var e__32905__auto__ = e33811;
if((e__32905__auto__ === cljs.core.match.backtrack)){
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
}catch (e33813){if((e33813 instanceof Error)){
var e__32905__auto____$1 = e33813;
if((e__32905__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,end,end)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33814){if((e33814 instanceof Error)){
var e__32905__auto____$2 = e33814;
if((e__32905__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32905__auto____$2;
}
} else {
throw e33814;

}
}} else {
throw e__32905__auto____$1;
}
} else {
throw e33813;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33812){if((e33812 instanceof Error)){
var e__32905__auto____$1 = e33812;
if((e__32905__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('')));
} else {
throw e__32905__auto____$1;
}
} else {
throw e33812;

}
}} else {
throw e__32905__auto__;
}
} else {
throw e33811;

}
}});
bardo.interpolate.wrap_infinite = (function bardo$interpolate$wrap_infinite(x,y){
if(cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
var ocr_33819 = cljs.core.mapv.call(null,cljs.core.counted_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
try{if((cljs.core.vector_QMARK_.call(null,ocr_33819)) && ((cljs.core.count.call(null,ocr_33819) === 2))){
try{var ocr_33819_0__33825 = cljs.core.nth.call(null,ocr_33819,(0));
if((ocr_33819_0__33825 === false)){
try{var ocr_33819_1__33826 = cljs.core.nth.call(null,ocr_33819,(1));
if((ocr_33819_1__33826 === false)){
throw Error(Exception,"Cannot interpolate between two uncounted sequences");
} else {
throw cljs.core.match.backtrack;

}
}catch (e33830){if((e33830 instanceof Error)){
var e__32905__auto__ = e33830;
if((e__32905__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,cljs.core.count.call(null,y),x),y], null);
} else {
throw e__32905__auto__;
}
} else {
throw e33830;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33828){if((e33828 instanceof Error)){
var e__32905__auto__ = e33828;
if((e__32905__auto__ === cljs.core.match.backtrack)){
try{var ocr_33819_1__33826 = cljs.core.nth.call(null,ocr_33819,(1));
if((ocr_33819_1__33826 === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.take.call(null,cljs.core.count.call(null,x),y)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33829){if((e33829 instanceof Error)){
var e__32905__auto____$1 = e33829;
if((e__32905__auto____$1 === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else {
throw e__32905__auto____$1;
}
} else {
throw e33829;

}
}} else {
throw e__32905__auto__;
}
} else {
throw e33828;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33827){if((e33827 instanceof Error)){
var e__32905__auto__ = e33827;
if((e__32905__auto__ === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_33819)].join('')));
} else {
throw e__32905__auto__;
}
} else {
throw e33827;

}
}} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}
});
bardo.interpolate.juxt_args = (function bardo$interpolate$juxt_args(var_args){
var args__31533__auto__ = [];
var len__31526__auto___33832 = arguments.length;
var i__31527__auto___33833 = (0);
while(true){
if((i__31527__auto___33833 < len__31526__auto___33832)){
args__31533__auto__.push((arguments[i__31527__auto___33833]));

var G__33834 = (i__31527__auto___33833 + (1));
i__31527__auto___33833 = G__33834;
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
var G__33835__delegate = function (args){
return cljs.core.map_indexed.call(null,(function (idx,f){
return f.call(null,cljs.core.nth.call(null,args,idx,null));
}),fns);
};
var G__33835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33836__i = 0, G__33836__a = new Array(arguments.length -  0);
while (G__33836__i < G__33836__a.length) {G__33836__a[G__33836__i] = arguments[G__33836__i + 0]; ++G__33836__i;}
  args = new cljs.core.IndexedSeq(G__33836__a,0,null);
} 
return G__33835__delegate.call(this,args);};
G__33835.cljs$lang$maxFixedArity = 0;
G__33835.cljs$lang$applyTo = (function (arglist__33837){
var args = cljs.core.seq(arglist__33837);
return G__33835__delegate(args);
});
G__33835.cljs$core$IFn$_invoke$arity$variadic = G__33835__delegate;
return G__33835;
})()
;
});

bardo.interpolate.juxt_args.cljs$lang$maxFixedArity = (0);

bardo.interpolate.juxt_args.cljs$lang$applyTo = (function (seq33831){
return bardo.interpolate.juxt_args.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33831));
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
var seq__33838_33848 = cljs.core.seq.call(null,types);
var chunk__33839_33849 = null;
var count__33840_33850 = (0);
var i__33841_33851 = (0);
while(true){
if((i__33841_33851 < count__33840_33850)){
var vec__33842_33852 = cljs.core._nth.call(null,chunk__33839_33849,i__33841_33851);
var type_33853 = cljs.core.nth.call(null,vec__33842_33852,(0),null);
var pred_33854 = cljs.core.nth.call(null,vec__33842_33852,(1),null);
bardo.interpolate.symmetrical_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),["Cannot interpolate between a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_33853)," and something else"].join(''),bardo.interpolate.pair_pred.call(null,pred_33854));

var G__33855 = seq__33838_33848;
var G__33856 = chunk__33839_33849;
var G__33857 = count__33840_33850;
var G__33858 = (i__33841_33851 + (1));
seq__33838_33848 = G__33855;
chunk__33839_33849 = G__33856;
count__33840_33850 = G__33857;
i__33841_33851 = G__33858;
continue;
} else {
var temp__5290__auto___33859 = cljs.core.seq.call(null,seq__33838_33848);
if(temp__5290__auto___33859){
var seq__33838_33860__$1 = temp__5290__auto___33859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33838_33860__$1)){
var c__31180__auto___33861 = cljs.core.chunk_first.call(null,seq__33838_33860__$1);
var G__33862 = cljs.core.chunk_rest.call(null,seq__33838_33860__$1);
var G__33863 = c__31180__auto___33861;
var G__33864 = cljs.core.count.call(null,c__31180__auto___33861);
var G__33865 = (0);
seq__33838_33848 = G__33862;
chunk__33839_33849 = G__33863;
count__33840_33850 = G__33864;
i__33841_33851 = G__33865;
continue;
} else {
var vec__33845_33866 = cljs.core.first.call(null,seq__33838_33860__$1);
var type_33867 = cljs.core.nth.call(null,vec__33845_33866,(0),null);
var pred_33868 = cljs.core.nth.call(null,vec__33845_33866,(1),null);
bardo.interpolate.symmetrical_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),["Cannot interpolate between a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_33867)," and something else"].join(''),bardo.interpolate.pair_pred.call(null,pred_33868));

var G__33869 = cljs.core.next.call(null,seq__33838_33860__$1);
var G__33870 = null;
var G__33871 = (0);
var G__33872 = (0);
seq__33838_33848 = G__33869;
chunk__33839_33849 = G__33870;
count__33840_33850 = G__33871;
i__33841_33851 = G__33872;
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
}catch (e33888){if((e33888 instanceof Error)){
var e__32905__auto__ = e33888;
if((e__32905__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32905__auto__;
}
} else {
throw e33888;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33881){if((e33881 instanceof Error)){
var e__32905__auto__ = e33881;
if((e__32905__auto__ === cljs.core.match.backtrack)){
try{if((t === (1))){
try{if(cljs.core.truth_(bardo.interpolate.hash_map_QMARK_.call(null,v))){
return cljs.core.select_keys.call(null,v,cljs.core.keys.call(null,end));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33887){if((e33887 instanceof Error)){
var e__32905__auto____$1 = e33887;
if((e__32905__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32905__auto____$1;
}
} else {
throw e33887;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33882){if((e33882 instanceof Error)){
var e__32905__auto____$1 = e33882;
if((e__32905__auto____$1 === cljs.core.match.backtrack)){
try{if((t === (0))){
try{if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,start),v));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33886){if((e33886 instanceof Error)){
var e__32905__auto____$2 = e33886;
if((e__32905__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32905__auto____$2;
}
} else {
throw e33886;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33883){if((e33883 instanceof Error)){
var e__32905__auto____$2 = e33883;
if((e__32905__auto____$2 === cljs.core.match.backtrack)){
try{if((t === (1))){
try{if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,end),v));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33885){if((e33885 instanceof Error)){
var e__32905__auto____$3 = e33885;
if((e__32905__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32905__auto____$3;
}
} else {
throw e33885;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33884){if((e33884 instanceof Error)){
var e__32905__auto____$3 = e33884;
if((e__32905__auto____$3 === cljs.core.match.backtrack)){
return v;
} else {
throw e__32905__auto____$3;
}
} else {
throw e33884;

}
}} else {
throw e__32905__auto____$2;
}
} else {
throw e33883;

}
}} else {
throw e__32905__auto____$1;
}
} else {
throw e33882;

}
}} else {
throw e__32905__auto__;
}
} else {
throw e33881;

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
return (function bardo$interpolate$iter__33893(s__33894){
return (new cljs.core.LazySeq(null,((function (start__$1){
return (function (){
var s__33894__$1 = s__33894;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__33894__$1);
if(temp__5290__auto__){
var s__33894__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33894__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__33894__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__33896 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__33895 = (0);
while(true){
if((i__33895 < size__31130__auto__)){
var k = cljs.core._nth.call(null,c__31129__auto__,i__33895);
cljs.core.chunk_append.call(null,b__33896,((function (i__33895,k,c__31129__auto__,size__31130__auto__,b__33896,s__33894__$2,temp__5290__auto__,start__$1){
return (function (p1__33891_SHARP_){
return p1__33891_SHARP_.call(null,t);
});})(i__33895,k,c__31129__auto__,size__31130__auto__,b__33896,s__33894__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.apply.call(null,bardo.interpolate.wrap_nil,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,start__$1,k,null),cljs.core.nth.call(null,end,k,null)], null)))));

var G__33901 = (i__33895 + (1));
i__33895 = G__33901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33896),bardo$interpolate$iter__33893.call(null,cljs.core.chunk_rest.call(null,s__33894__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33896),null);
}
} else {
var k = cljs.core.first.call(null,s__33894__$2);
return cljs.core.cons.call(null,((function (k,s__33894__$2,temp__5290__auto__,start__$1){
return (function (p1__33891_SHARP_){
return p1__33891_SHARP_.call(null,t);
});})(k,s__33894__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.apply.call(null,bardo.interpolate.wrap_nil,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,start__$1,k,null),cljs.core.nth.call(null,end,k,null)], null)))),bardo$interpolate$iter__33893.call(null,cljs.core.rest.call(null,s__33894__$2)));
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
return (function bardo$interpolate$iter__33897(s__33898){
return (new cljs.core.LazySeq(null,((function (start__$1){
return (function (){
var s__33898__$1 = s__33898;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__33898__$1);
if(temp__5290__auto__){
var s__33898__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33898__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__33898__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__33900 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__33899 = (0);
while(true){
if((i__33899 < size__31130__auto__)){
var k = cljs.core._nth.call(null,c__31129__auto__,i__33899);
cljs.core.chunk_append.call(null,b__33900,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((function (i__33899,k,c__31129__auto__,size__31130__auto__,b__33900,s__33898__$2,temp__5290__auto__,start__$1){
return (function (p1__33892_SHARP_){
return p1__33892_SHARP_.call(null,t);
});})(i__33899,k,c__31129__auto__,size__31130__auto__,b__33900,s__33898__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.map.call(null,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null))))], null));

var G__33902 = (i__33899 + (1));
i__33899 = G__33902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33900),bardo$interpolate$iter__33897.call(null,cljs.core.chunk_rest.call(null,s__33898__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33900),null);
}
} else {
var k = cljs.core.first.call(null,s__33898__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((function (k,s__33898__$2,temp__5290__auto__,start__$1){
return (function (p1__33892_SHARP_){
return p1__33892_SHARP_.call(null,t);
});})(k,s__33898__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.map.call(null,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null))))], null),bardo$interpolate$iter__33897.call(null,cljs.core.rest.call(null,s__33898__$2)));
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
var wrapped = (function (){var G__33904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null);
var G__33904__$1 = (((G__33904 == null))?null:cljs.core.apply.call(null,bardo.interpolate.wrap_nil,G__33904));
var G__33904__$2 = (((G__33904__$1 == null))?null:cljs.core.apply.call(null,bardo.interpolate.wrap_errors,G__33904__$1));
if((G__33904__$2 == null)){
return null;
} else {
return cljs.core.apply.call(null,bardo.interpolate.wrap_infinite,G__33904__$2);
}
})();
var can_interpolate = cljs.core.mapv.call(null,((function (wrapped){
return (function (p1__33903_SHARP_){
if(!((p1__33903_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__33903_SHARP_.bardo$interpolate$IInterpolate$))){
return true;
} else {
if((!p1__33903_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IInterpolate,p1__33903_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IInterpolate,p1__33903_SHARP_);
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
var G__33907 = arguments.length;
switch (G__33907) {
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
var G__33911 = arguments.length;
switch (G__33911) {
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
var vec__33912 = states;
var seq__33913 = cljs.core.seq.call(null,vec__33912);
var first__33914 = cljs.core.first.call(null,seq__33913);
var seq__33913__$1 = cljs.core.next.call(null,seq__33913);
var start = first__33914;
var first__33914__$1 = cljs.core.first.call(null,seq__33913__$1);
var seq__33913__$2 = cljs.core.next.call(null,seq__33913__$1);
var second = first__33914__$1;
var states__$1 = seq__33913__$2;
var output = cljs.core.cons.call(null,(0),cljs.core.reverse.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.iterate.call(null,((function (n,vec__33912,seq__33913,first__33914,seq__33913__$1,start,first__33914__$1,seq__33913__$2,second,states__$1){
return (function (p1__33909_SHARP_){
return (p1__33909_SHARP_ / (2));
});})(n,vec__33912,seq__33913,first__33914,seq__33913__$1,start,first__33914__$1,seq__33913__$2,second,states__$1))
,(1)))));
return bardo.ease.shift_parts.call(null,cljs.core.reduce.call(null,bardo.interpolate.chain,bardo.interpolate.interpolate.call(null,start,second),states__$1),input,output);
});

bardo.interpolate.pipeline.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=interpolate.js.map?rel=1506023644098
