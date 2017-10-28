// Compiled by ClojureScript 1.9.908 {}
goog.provide('bardo.transition');
goog.require('cljs.core');
goog.require('bardo.ease');
goog.require('bardo.interpolate');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
bardo.transition.now = (function bardo$transition$now(){
var temp__5288__auto__ = window.performance.now;
if(cljs.core.truth_(temp__5288__auto__)){
var now = temp__5288__auto__;
return now.call(window.performance);
} else {
return Date.now();
}
});
bardo.transition.set_interval = (function bardo$transition$set_interval(step_fn){
var temp__5288__auto__ = (function (){var vendors = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","ms","moz","webkit","o"], null);
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (vendors){
return (function (p1__49085_SHARP_){
return (window[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49085_SHARP_),"requestAnimationFrame"].join('')]);
});})(vendors))
,vendors)));
})();
if(cljs.core.truth_(temp__5288__auto__)){
var native$ = temp__5288__auto__;
var frame = cljs.core.async.chan.call(null);
var c__47162__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto__,frame,native$,temp__5288__auto__){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto__,frame,native$,temp__5288__auto__){
return (function (state_49100){
var state_val_49101 = (state_49100[(1)]);
if((state_val_49101 === (1))){
var state_49100__$1 = state_49100;
var statearr_49102_49113 = state_49100__$1;
(statearr_49102_49113[(2)] = null);

(statearr_49102_49113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (2))){
var inst_49087 = (function (){return ((function (state_val_49101,c__47162__auto__,frame,native$,temp__5288__auto__){
return (function (time){
return cljs.core.async.put_BANG_.call(null,frame,time);
});
;})(state_val_49101,c__47162__auto__,frame,native$,temp__5288__auto__))
})();
var inst_49088 = native$.call(window,inst_49087);
var state_49100__$1 = (function (){var statearr_49103 = state_49100;
(statearr_49103[(7)] = inst_49088);

return statearr_49103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49100__$1,(4),frame);
} else {
if((state_val_49101 === (3))){
var inst_49098 = (state_49100[(2)]);
var state_49100__$1 = state_49100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49100__$1,inst_49098);
} else {
if((state_val_49101 === (4))){
var inst_49090 = (state_49100[(2)]);
var inst_49091 = step_fn.call(null,inst_49090);
var state_49100__$1 = state_49100;
if(cljs.core.truth_(inst_49091)){
var statearr_49104_49114 = state_49100__$1;
(statearr_49104_49114[(1)] = (5));

} else {
var statearr_49105_49115 = state_49100__$1;
(statearr_49105_49115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (5))){
var state_49100__$1 = state_49100;
var statearr_49106_49116 = state_49100__$1;
(statearr_49106_49116[(2)] = null);

(statearr_49106_49116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (6))){
var state_49100__$1 = state_49100;
var statearr_49107_49117 = state_49100__$1;
(statearr_49107_49117[(2)] = null);

(statearr_49107_49117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (7))){
var inst_49096 = (state_49100[(2)]);
var state_49100__$1 = state_49100;
var statearr_49108_49118 = state_49100__$1;
(statearr_49108_49118[(2)] = inst_49096);

(statearr_49108_49118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__47162__auto__,frame,native$,temp__5288__auto__))
;
return ((function (switch__47072__auto__,c__47162__auto__,frame,native$,temp__5288__auto__){
return (function() {
var bardo$transition$set_interval_$_state_machine__47073__auto__ = null;
var bardo$transition$set_interval_$_state_machine__47073__auto____0 = (function (){
var statearr_49109 = [null,null,null,null,null,null,null,null];
(statearr_49109[(0)] = bardo$transition$set_interval_$_state_machine__47073__auto__);

(statearr_49109[(1)] = (1));

return statearr_49109;
});
var bardo$transition$set_interval_$_state_machine__47073__auto____1 = (function (state_49100){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_49100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e49110){if((e49110 instanceof Object)){
var ex__47076__auto__ = e49110;
var statearr_49111_49119 = state_49100;
(statearr_49111_49119[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49120 = state_49100;
state_49100 = G__49120;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
bardo$transition$set_interval_$_state_machine__47073__auto__ = function(state_49100){
switch(arguments.length){
case 0:
return bardo$transition$set_interval_$_state_machine__47073__auto____0.call(this);
case 1:
return bardo$transition$set_interval_$_state_machine__47073__auto____1.call(this,state_49100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
bardo$transition$set_interval_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = bardo$transition$set_interval_$_state_machine__47073__auto____0;
bardo$transition$set_interval_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = bardo$transition$set_interval_$_state_machine__47073__auto____1;
return bardo$transition$set_interval_$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto__,frame,native$,temp__5288__auto__))
})();
var state__47164__auto__ = (function (){var statearr_49112 = f__47163__auto__.call(null);
(statearr_49112[(6)] = c__47162__auto__);

return statearr_49112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto__,frame,native$,temp__5288__auto__))
);

return c__47162__auto__;
} else {
return null;
}
});
bardo.transition.transition = (function bardo$transition$transition(var_args){
var G__49122 = arguments.length;
switch (G__49122) {
case 2:
return bardo.transition.transition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bardo.transition.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bardo.transition.transition.cljs$core$IFn$_invoke$arity$2 = (function (state,target){
return bardo.transition.transition.call(null,state,target,cljs.core.PersistentArrayMap.EMPTY);
});

bardo.transition.transition.cljs$core$IFn$_invoke$arity$3 = (function (state,target,p__49123){
var map__49124 = p__49123;
var map__49124__$1 = ((((!((map__49124 == null)))?((((map__49124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49124):map__49124);
var duration = cljs.core.get.call(null,map__49124__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(500));
var easing = cljs.core.get.call(null,map__49124__$1,new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"cubic-in-out","cubic-in-out",1767611572));
var out = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var interpolator = bardo.interpolate.interpolate.call(null,state,target);
var ease_fn = bardo.ease.ease.call(null,easing);
var start = bardo.transition.now.call(null);
bardo.transition.set_interval.call(null,((function (out,interpolator,ease_fn,start,map__49124,map__49124__$1,duration,easing){
return (function (time){
var since = (time - start);
var done_QMARK_ = (since > duration);
var t = ((done_QMARK_)?(1):ease_fn.call(null,(since / duration)));
var step = interpolator.call(null,ease_fn.call(null,t));
cljs.core.async.put_BANG_.call(null,out,step);

if(done_QMARK_){
cljs.core.async.close_BANG_.call(null,out);
} else {
}

return !(done_QMARK_);
});})(out,interpolator,ease_fn,start,map__49124,map__49124__$1,duration,easing))
);

return out;
});

bardo.transition.transition.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=transition.js.map?rel=1509094251965
