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
return (function (p1__52943_SHARP_){
return (window[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52943_SHARP_),"requestAnimationFrame"].join('')]);
});})(vendors))
,vendors)));
})();
if(cljs.core.truth_(temp__5288__auto__)){
var native$ = temp__5288__auto__;
var frame = cljs.core.async.chan.call(null);
var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__,frame,native$,temp__5288__auto__){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__,frame,native$,temp__5288__auto__){
return (function (state_52958){
var state_val_52959 = (state_52958[(1)]);
if((state_val_52959 === (1))){
var state_52958__$1 = state_52958;
var statearr_52960_52971 = state_52958__$1;
(statearr_52960_52971[(2)] = null);

(statearr_52960_52971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52959 === (2))){
var inst_52945 = (function (){return ((function (state_val_52959,c__51020__auto__,frame,native$,temp__5288__auto__){
return (function (time){
return cljs.core.async.put_BANG_.call(null,frame,time);
});
;})(state_val_52959,c__51020__auto__,frame,native$,temp__5288__auto__))
})();
var inst_52946 = native$.call(window,inst_52945);
var state_52958__$1 = (function (){var statearr_52961 = state_52958;
(statearr_52961[(7)] = inst_52946);

return statearr_52961;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52958__$1,(4),frame);
} else {
if((state_val_52959 === (3))){
var inst_52956 = (state_52958[(2)]);
var state_52958__$1 = state_52958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52958__$1,inst_52956);
} else {
if((state_val_52959 === (4))){
var inst_52948 = (state_52958[(2)]);
var inst_52949 = step_fn.call(null,inst_52948);
var state_52958__$1 = state_52958;
if(cljs.core.truth_(inst_52949)){
var statearr_52962_52972 = state_52958__$1;
(statearr_52962_52972[(1)] = (5));

} else {
var statearr_52963_52973 = state_52958__$1;
(statearr_52963_52973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52959 === (5))){
var state_52958__$1 = state_52958;
var statearr_52964_52974 = state_52958__$1;
(statearr_52964_52974[(2)] = null);

(statearr_52964_52974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52959 === (6))){
var state_52958__$1 = state_52958;
var statearr_52965_52975 = state_52958__$1;
(statearr_52965_52975[(2)] = null);

(statearr_52965_52975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52959 === (7))){
var inst_52954 = (state_52958[(2)]);
var state_52958__$1 = state_52958;
var statearr_52966_52976 = state_52958__$1;
(statearr_52966_52976[(2)] = inst_52954);

(statearr_52966_52976[(1)] = (3));


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
});})(c__51020__auto__,frame,native$,temp__5288__auto__))
;
return ((function (switch__50930__auto__,c__51020__auto__,frame,native$,temp__5288__auto__){
return (function() {
var bardo$transition$set_interval_$_state_machine__50931__auto__ = null;
var bardo$transition$set_interval_$_state_machine__50931__auto____0 = (function (){
var statearr_52967 = [null,null,null,null,null,null,null,null];
(statearr_52967[(0)] = bardo$transition$set_interval_$_state_machine__50931__auto__);

(statearr_52967[(1)] = (1));

return statearr_52967;
});
var bardo$transition$set_interval_$_state_machine__50931__auto____1 = (function (state_52958){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_52958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e52968){if((e52968 instanceof Object)){
var ex__50934__auto__ = e52968;
var statearr_52969_52977 = state_52958;
(statearr_52969_52977[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52978 = state_52958;
state_52958 = G__52978;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
bardo$transition$set_interval_$_state_machine__50931__auto__ = function(state_52958){
switch(arguments.length){
case 0:
return bardo$transition$set_interval_$_state_machine__50931__auto____0.call(this);
case 1:
return bardo$transition$set_interval_$_state_machine__50931__auto____1.call(this,state_52958);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
bardo$transition$set_interval_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = bardo$transition$set_interval_$_state_machine__50931__auto____0;
bardo$transition$set_interval_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = bardo$transition$set_interval_$_state_machine__50931__auto____1;
return bardo$transition$set_interval_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__,frame,native$,temp__5288__auto__))
})();
var state__51022__auto__ = (function (){var statearr_52970 = f__51021__auto__.call(null);
(statearr_52970[(6)] = c__51020__auto__);

return statearr_52970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__,frame,native$,temp__5288__auto__))
);

return c__51020__auto__;
} else {
return null;
}
});
bardo.transition.transition = (function bardo$transition$transition(var_args){
var G__52980 = arguments.length;
switch (G__52980) {
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

bardo.transition.transition.cljs$core$IFn$_invoke$arity$3 = (function (state,target,p__52981){
var map__52982 = p__52981;
var map__52982__$1 = ((((!((map__52982 == null)))?((((map__52982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52982):map__52982);
var duration = cljs.core.get.call(null,map__52982__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(500));
var easing = cljs.core.get.call(null,map__52982__$1,new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"cubic-in-out","cubic-in-out",1767611572));
var out = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var interpolator = bardo.interpolate.interpolate.call(null,state,target);
var ease_fn = bardo.ease.ease.call(null,easing);
var start = bardo.transition.now.call(null);
bardo.transition.set_interval.call(null,((function (out,interpolator,ease_fn,start,map__52982,map__52982__$1,duration,easing){
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
});})(out,interpolator,ease_fn,start,map__52982,map__52982__$1,duration,easing))
);

return out;
});

bardo.transition.transition.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=transition.js.map?rel=1507056182589
