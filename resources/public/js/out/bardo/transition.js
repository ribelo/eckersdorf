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
return (function (p1__37351_SHARP_){
return (window[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37351_SHARP_),"requestAnimationFrame"].join('')]);
});})(vendors))
,vendors)));
})();
if(cljs.core.truth_(temp__5288__auto__)){
var native$ = temp__5288__auto__;
var frame = cljs.core.async.chan.call(null);
var c__35248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto__,frame,native$,temp__5288__auto__){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto__,frame,native$,temp__5288__auto__){
return (function (state_37366){
var state_val_37367 = (state_37366[(1)]);
if((state_val_37367 === (1))){
var state_37366__$1 = state_37366;
var statearr_37368_37379 = state_37366__$1;
(statearr_37368_37379[(2)] = null);

(statearr_37368_37379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37367 === (2))){
var inst_37353 = (function (){return ((function (state_val_37367,c__35248__auto__,frame,native$,temp__5288__auto__){
return (function (time){
return cljs.core.async.put_BANG_.call(null,frame,time);
});
;})(state_val_37367,c__35248__auto__,frame,native$,temp__5288__auto__))
})();
var inst_37354 = native$.call(window,inst_37353);
var state_37366__$1 = (function (){var statearr_37369 = state_37366;
(statearr_37369[(7)] = inst_37354);

return statearr_37369;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37366__$1,(4),frame);
} else {
if((state_val_37367 === (3))){
var inst_37364 = (state_37366[(2)]);
var state_37366__$1 = state_37366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37366__$1,inst_37364);
} else {
if((state_val_37367 === (4))){
var inst_37356 = (state_37366[(2)]);
var inst_37357 = step_fn.call(null,inst_37356);
var state_37366__$1 = state_37366;
if(cljs.core.truth_(inst_37357)){
var statearr_37370_37380 = state_37366__$1;
(statearr_37370_37380[(1)] = (5));

} else {
var statearr_37371_37381 = state_37366__$1;
(statearr_37371_37381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37367 === (5))){
var state_37366__$1 = state_37366;
var statearr_37372_37382 = state_37366__$1;
(statearr_37372_37382[(2)] = null);

(statearr_37372_37382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37367 === (6))){
var state_37366__$1 = state_37366;
var statearr_37373_37383 = state_37366__$1;
(statearr_37373_37383[(2)] = null);

(statearr_37373_37383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37367 === (7))){
var inst_37362 = (state_37366[(2)]);
var state_37366__$1 = state_37366;
var statearr_37374_37384 = state_37366__$1;
(statearr_37374_37384[(2)] = inst_37362);

(statearr_37374_37384[(1)] = (3));


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
});})(c__35248__auto__,frame,native$,temp__5288__auto__))
;
return ((function (switch__35158__auto__,c__35248__auto__,frame,native$,temp__5288__auto__){
return (function() {
var bardo$transition$set_interval_$_state_machine__35159__auto__ = null;
var bardo$transition$set_interval_$_state_machine__35159__auto____0 = (function (){
var statearr_37375 = [null,null,null,null,null,null,null,null];
(statearr_37375[(0)] = bardo$transition$set_interval_$_state_machine__35159__auto__);

(statearr_37375[(1)] = (1));

return statearr_37375;
});
var bardo$transition$set_interval_$_state_machine__35159__auto____1 = (function (state_37366){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_37366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e37376){if((e37376 instanceof Object)){
var ex__35162__auto__ = e37376;
var statearr_37377_37385 = state_37366;
(statearr_37377_37385[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37386 = state_37366;
state_37366 = G__37386;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
bardo$transition$set_interval_$_state_machine__35159__auto__ = function(state_37366){
switch(arguments.length){
case 0:
return bardo$transition$set_interval_$_state_machine__35159__auto____0.call(this);
case 1:
return bardo$transition$set_interval_$_state_machine__35159__auto____1.call(this,state_37366);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
bardo$transition$set_interval_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = bardo$transition$set_interval_$_state_machine__35159__auto____0;
bardo$transition$set_interval_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = bardo$transition$set_interval_$_state_machine__35159__auto____1;
return bardo$transition$set_interval_$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto__,frame,native$,temp__5288__auto__))
})();
var state__35250__auto__ = (function (){var statearr_37378 = f__35249__auto__.call(null);
(statearr_37378[(6)] = c__35248__auto__);

return statearr_37378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto__,frame,native$,temp__5288__auto__))
);

return c__35248__auto__;
} else {
return null;
}
});
bardo.transition.transition = (function bardo$transition$transition(var_args){
var G__37388 = arguments.length;
switch (G__37388) {
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

bardo.transition.transition.cljs$core$IFn$_invoke$arity$3 = (function (state,target,p__37389){
var map__37390 = p__37389;
var map__37390__$1 = ((((!((map__37390 == null)))?((((map__37390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37390):map__37390);
var duration = cljs.core.get.call(null,map__37390__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(500));
var easing = cljs.core.get.call(null,map__37390__$1,new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"cubic-in-out","cubic-in-out",1767611572));
var out = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var interpolator = bardo.interpolate.interpolate.call(null,state,target);
var ease_fn = bardo.ease.ease.call(null,easing);
var start = bardo.transition.now.call(null);
bardo.transition.set_interval.call(null,((function (out,interpolator,ease_fn,start,map__37390,map__37390__$1,duration,easing){
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
});})(out,interpolator,ease_fn,start,map__37390,map__37390__$1,duration,easing))
);

return out;
});

bardo.transition.transition.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=transition.js.map?rel=1506023646106
