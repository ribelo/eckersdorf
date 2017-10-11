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
}catch (e45398){if((e45398 instanceof Error)){
var e__44487__auto__ = e45398;
if((e__44487__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,end,end)){
if(((!((end == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === end.bardo$interpolate$IFresh$)))?true:(((!end.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IFresh,end):false)):cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IFresh,end))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bardo.interpolate.fresh.call(null,end),end], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,end], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e45399){if((e45399 instanceof Error)){
var e__44487__auto____$1 = e45399;
if((e__44487__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44487__auto____$1;
}
} else {
throw e45399;

}
}} else {
throw e__44487__auto__;
}
} else {
throw e45398;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45393){if((e45393 instanceof Error)){
var e__44487__auto__ = e45393;
if((e__44487__auto__ === cljs.core.match.backtrack)){
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
}catch (e45395){if((e45395 instanceof Error)){
var e__44487__auto____$1 = e45395;
if((e__44487__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,end,end)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45396){if((e45396 instanceof Error)){
var e__44487__auto____$2 = e45396;
if((e__44487__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44487__auto____$2;
}
} else {
throw e45396;

}
}} else {
throw e__44487__auto____$1;
}
} else {
throw e45395;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45394){if((e45394 instanceof Error)){
var e__44487__auto____$1 = e45394;
if((e__44487__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('')));
} else {
throw e__44487__auto____$1;
}
} else {
throw e45394;

}
}} else {
throw e__44487__auto__;
}
} else {
throw e45393;

}
}});
bardo.interpolate.wrap_infinite = (function bardo$interpolate$wrap_infinite(x,y){
if(cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
var ocr_45401 = cljs.core.mapv.call(null,cljs.core.counted_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
try{if((cljs.core.vector_QMARK_.call(null,ocr_45401)) && ((cljs.core.count.call(null,ocr_45401) === 2))){
try{var ocr_45401_0__45407 = cljs.core.nth.call(null,ocr_45401,(0));
if((ocr_45401_0__45407 === false)){
try{var ocr_45401_1__45408 = cljs.core.nth.call(null,ocr_45401,(1));
if((ocr_45401_1__45408 === false)){
throw Error(Exception,"Cannot interpolate between two uncounted sequences");
} else {
throw cljs.core.match.backtrack;

}
}catch (e45412){if((e45412 instanceof Error)){
var e__44487__auto__ = e45412;
if((e__44487__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,cljs.core.count.call(null,y),x),y], null);
} else {
throw e__44487__auto__;
}
} else {
throw e45412;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45410){if((e45410 instanceof Error)){
var e__44487__auto__ = e45410;
if((e__44487__auto__ === cljs.core.match.backtrack)){
try{var ocr_45401_1__45408 = cljs.core.nth.call(null,ocr_45401,(1));
if((ocr_45401_1__45408 === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.take.call(null,cljs.core.count.call(null,x),y)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45411){if((e45411 instanceof Error)){
var e__44487__auto____$1 = e45411;
if((e__44487__auto____$1 === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else {
throw e__44487__auto____$1;
}
} else {
throw e45411;

}
}} else {
throw e__44487__auto__;
}
} else {
throw e45410;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45409){if((e45409 instanceof Error)){
var e__44487__auto__ = e45409;
if((e__44487__auto__ === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_45401)].join('')));
} else {
throw e__44487__auto__;
}
} else {
throw e45409;

}
}} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}
});
bardo.interpolate.juxt_args = (function bardo$interpolate$juxt_args(var_args){
var args__31523__auto__ = [];
var len__31516__auto___45414 = arguments.length;
var i__31517__auto___45415 = (0);
while(true){
if((i__31517__auto___45415 < len__31516__auto___45414)){
args__31523__auto__.push((arguments[i__31517__auto___45415]));

var G__45416 = (i__31517__auto___45415 + (1));
i__31517__auto___45415 = G__45416;
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
var G__45417__delegate = function (args){
return cljs.core.map_indexed.call(null,(function (idx,f){
return f.call(null,cljs.core.nth.call(null,args,idx,null));
}),fns);
};
var G__45417 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45418__i = 0, G__45418__a = new Array(arguments.length -  0);
while (G__45418__i < G__45418__a.length) {G__45418__a[G__45418__i] = arguments[G__45418__i + 0]; ++G__45418__i;}
  args = new cljs.core.IndexedSeq(G__45418__a,0,null);
} 
return G__45417__delegate.call(this,args);};
G__45417.cljs$lang$maxFixedArity = 0;
G__45417.cljs$lang$applyTo = (function (arglist__45419){
var args = cljs.core.seq(arglist__45419);
return G__45417__delegate(args);
});
G__45417.cljs$core$IFn$_invoke$arity$variadic = G__45417__delegate;
return G__45417;
})()
;
});

bardo.interpolate.juxt_args.cljs$lang$maxFixedArity = (0);

bardo.interpolate.juxt_args.cljs$lang$applyTo = (function (seq45413){
return bardo.interpolate.juxt_args.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45413));
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
var seq__45420_45430 = cljs.core.seq.call(null,types);
var chunk__45421_45431 = null;
var count__45422_45432 = (0);
var i__45423_45433 = (0);
while(true){
if((i__45423_45433 < count__45422_45432)){
var vec__45424_45434 = cljs.core._nth.call(null,chunk__45421_45431,i__45423_45433);
var type_45435 = cljs.core.nth.call(null,vec__45424_45434,(0),null);
var pred_45436 = cljs.core.nth.call(null,vec__45424_45434,(1),null);
bardo.interpolate.symmetrical_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),["Cannot interpolate between a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_45435)," and something else"].join(''),bardo.interpolate.pair_pred.call(null,pred_45436));

var G__45437 = seq__45420_45430;
var G__45438 = chunk__45421_45431;
var G__45439 = count__45422_45432;
var G__45440 = (i__45423_45433 + (1));
seq__45420_45430 = G__45437;
chunk__45421_45431 = G__45438;
count__45422_45432 = G__45439;
i__45423_45433 = G__45440;
continue;
} else {
var temp__5290__auto___45441 = cljs.core.seq.call(null,seq__45420_45430);
if(temp__5290__auto___45441){
var seq__45420_45442__$1 = temp__5290__auto___45441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45420_45442__$1)){
var c__31170__auto___45443 = cljs.core.chunk_first.call(null,seq__45420_45442__$1);
var G__45444 = cljs.core.chunk_rest.call(null,seq__45420_45442__$1);
var G__45445 = c__31170__auto___45443;
var G__45446 = cljs.core.count.call(null,c__31170__auto___45443);
var G__45447 = (0);
seq__45420_45430 = G__45444;
chunk__45421_45431 = G__45445;
count__45422_45432 = G__45446;
i__45423_45433 = G__45447;
continue;
} else {
var vec__45427_45448 = cljs.core.first.call(null,seq__45420_45442__$1);
var type_45449 = cljs.core.nth.call(null,vec__45427_45448,(0),null);
var pred_45450 = cljs.core.nth.call(null,vec__45427_45448,(1),null);
bardo.interpolate.symmetrical_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),["Cannot interpolate between a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_45449)," and something else"].join(''),bardo.interpolate.pair_pred.call(null,pred_45450));

var G__45451 = cljs.core.next.call(null,seq__45420_45442__$1);
var G__45452 = null;
var G__45453 = (0);
var G__45454 = (0);
seq__45420_45430 = G__45451;
chunk__45421_45431 = G__45452;
count__45422_45432 = G__45453;
i__45423_45433 = G__45454;
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
}catch (e45470){if((e45470 instanceof Error)){
var e__44487__auto__ = e45470;
if((e__44487__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44487__auto__;
}
} else {
throw e45470;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45463){if((e45463 instanceof Error)){
var e__44487__auto__ = e45463;
if((e__44487__auto__ === cljs.core.match.backtrack)){
try{if((t === (1))){
try{if(cljs.core.truth_(bardo.interpolate.hash_map_QMARK_.call(null,v))){
return cljs.core.select_keys.call(null,v,cljs.core.keys.call(null,end));
} else {
throw cljs.core.match.backtrack;

}
}catch (e45469){if((e45469 instanceof Error)){
var e__44487__auto____$1 = e45469;
if((e__44487__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44487__auto____$1;
}
} else {
throw e45469;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45464){if((e45464 instanceof Error)){
var e__44487__auto____$1 = e45464;
if((e__44487__auto____$1 === cljs.core.match.backtrack)){
try{if((t === (0))){
try{if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,start),v));
} else {
throw cljs.core.match.backtrack;

}
}catch (e45468){if((e45468 instanceof Error)){
var e__44487__auto____$2 = e45468;
if((e__44487__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44487__auto____$2;
}
} else {
throw e45468;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45465){if((e45465 instanceof Error)){
var e__44487__auto____$2 = e45465;
if((e__44487__auto____$2 === cljs.core.match.backtrack)){
try{if((t === (1))){
try{if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,end),v));
} else {
throw cljs.core.match.backtrack;

}
}catch (e45467){if((e45467 instanceof Error)){
var e__44487__auto____$3 = e45467;
if((e__44487__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44487__auto____$3;
}
} else {
throw e45467;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45466){if((e45466 instanceof Error)){
var e__44487__auto____$3 = e45466;
if((e__44487__auto____$3 === cljs.core.match.backtrack)){
return v;
} else {
throw e__44487__auto____$3;
}
} else {
throw e45466;

}
}} else {
throw e__44487__auto____$2;
}
} else {
throw e45465;

}
}} else {
throw e__44487__auto____$1;
}
} else {
throw e45464;

}
}} else {
throw e__44487__auto__;
}
} else {
throw e45463;

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
return (function bardo$interpolate$iter__45475(s__45476){
return (new cljs.core.LazySeq(null,((function (start__$1){
return (function (){
var s__45476__$1 = s__45476;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__45476__$1);
if(temp__5290__auto__){
var s__45476__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45476__$2)){
var c__31119__auto__ = cljs.core.chunk_first.call(null,s__45476__$2);
var size__31120__auto__ = cljs.core.count.call(null,c__31119__auto__);
var b__45478 = cljs.core.chunk_buffer.call(null,size__31120__auto__);
if((function (){var i__45477 = (0);
while(true){
if((i__45477 < size__31120__auto__)){
var k = cljs.core._nth.call(null,c__31119__auto__,i__45477);
cljs.core.chunk_append.call(null,b__45478,((function (i__45477,k,c__31119__auto__,size__31120__auto__,b__45478,s__45476__$2,temp__5290__auto__,start__$1){
return (function (p1__45473_SHARP_){
return p1__45473_SHARP_.call(null,t);
});})(i__45477,k,c__31119__auto__,size__31120__auto__,b__45478,s__45476__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.apply.call(null,bardo.interpolate.wrap_nil,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,start__$1,k,null),cljs.core.nth.call(null,end,k,null)], null)))));

var G__45483 = (i__45477 + (1));
i__45477 = G__45483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45478),bardo$interpolate$iter__45475.call(null,cljs.core.chunk_rest.call(null,s__45476__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45478),null);
}
} else {
var k = cljs.core.first.call(null,s__45476__$2);
return cljs.core.cons.call(null,((function (k,s__45476__$2,temp__5290__auto__,start__$1){
return (function (p1__45473_SHARP_){
return p1__45473_SHARP_.call(null,t);
});})(k,s__45476__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.apply.call(null,bardo.interpolate.wrap_nil,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,start__$1,k,null),cljs.core.nth.call(null,end,k,null)], null)))),bardo$interpolate$iter__45475.call(null,cljs.core.rest.call(null,s__45476__$2)));
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
return (function bardo$interpolate$iter__45479(s__45480){
return (new cljs.core.LazySeq(null,((function (start__$1){
return (function (){
var s__45480__$1 = s__45480;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__45480__$1);
if(temp__5290__auto__){
var s__45480__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45480__$2)){
var c__31119__auto__ = cljs.core.chunk_first.call(null,s__45480__$2);
var size__31120__auto__ = cljs.core.count.call(null,c__31119__auto__);
var b__45482 = cljs.core.chunk_buffer.call(null,size__31120__auto__);
if((function (){var i__45481 = (0);
while(true){
if((i__45481 < size__31120__auto__)){
var k = cljs.core._nth.call(null,c__31119__auto__,i__45481);
cljs.core.chunk_append.call(null,b__45482,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((function (i__45481,k,c__31119__auto__,size__31120__auto__,b__45482,s__45480__$2,temp__5290__auto__,start__$1){
return (function (p1__45474_SHARP_){
return p1__45474_SHARP_.call(null,t);
});})(i__45481,k,c__31119__auto__,size__31120__auto__,b__45482,s__45480__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.map.call(null,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null))))], null));

var G__45484 = (i__45481 + (1));
i__45481 = G__45484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45482),bardo$interpolate$iter__45479.call(null,cljs.core.chunk_rest.call(null,s__45480__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45482),null);
}
} else {
var k = cljs.core.first.call(null,s__45480__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((function (k,s__45480__$2,temp__5290__auto__,start__$1){
return (function (p1__45474_SHARP_){
return p1__45474_SHARP_.call(null,t);
});})(k,s__45480__$2,temp__5290__auto__,start__$1))
.call(null,cljs.core.apply.call(null,bardo.interpolate.interpolate,cljs.core.map.call(null,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null))))], null),bardo$interpolate$iter__45479.call(null,cljs.core.rest.call(null,s__45480__$2)));
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
var wrapped = (function (){var G__45486 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null);
var G__45486__$1 = (((G__45486 == null))?null:cljs.core.apply.call(null,bardo.interpolate.wrap_nil,G__45486));
var G__45486__$2 = (((G__45486__$1 == null))?null:cljs.core.apply.call(null,bardo.interpolate.wrap_errors,G__45486__$1));
if((G__45486__$2 == null)){
return null;
} else {
return cljs.core.apply.call(null,bardo.interpolate.wrap_infinite,G__45486__$2);
}
})();
var can_interpolate = cljs.core.mapv.call(null,((function (wrapped){
return (function (p1__45485_SHARP_){
if(!((p1__45485_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__45485_SHARP_.bardo$interpolate$IInterpolate$))){
return true;
} else {
if((!p1__45485_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IInterpolate,p1__45485_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,bardo.interpolate.IInterpolate,p1__45485_SHARP_);
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
var G__45489 = arguments.length;
switch (G__45489) {
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
var G__45493 = arguments.length;
switch (G__45493) {
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
var vec__45494 = states;
var seq__45495 = cljs.core.seq.call(null,vec__45494);
var first__45496 = cljs.core.first.call(null,seq__45495);
var seq__45495__$1 = cljs.core.next.call(null,seq__45495);
var start = first__45496;
var first__45496__$1 = cljs.core.first.call(null,seq__45495__$1);
var seq__45495__$2 = cljs.core.next.call(null,seq__45495__$1);
var second = first__45496__$1;
var states__$1 = seq__45495__$2;
var output = cljs.core.cons.call(null,(0),cljs.core.reverse.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.iterate.call(null,((function (n,vec__45494,seq__45495,first__45496,seq__45495__$1,start,first__45496__$1,seq__45495__$2,second,states__$1){
return (function (p1__45491_SHARP_){
return (p1__45491_SHARP_ / (2));
});})(n,vec__45494,seq__45495,first__45496,seq__45495__$1,start,first__45496__$1,seq__45495__$2,second,states__$1))
,(1)))));
return bardo.ease.shift_parts.call(null,cljs.core.reduce.call(null,bardo.interpolate.chain,bardo.interpolate.interpolate.call(null,start,second),states__$1),input,output);
});

bardo.interpolate.pipeline.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=interpolate.js.map?rel=1507757464020
