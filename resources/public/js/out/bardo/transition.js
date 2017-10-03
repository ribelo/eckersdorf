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
return (function (p1__48756_SHARP_){
return (window[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48756_SHARP_),"requestAnimationFrame"].join('')]);
});})(vendors))
,vendors)));
})();
if(cljs.core.truth_(temp__5288__auto__)){
var native$ = temp__5288__auto__;
var frame = cljs.core.async.chan.call(null);
var c__46833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto__,frame,native$,temp__5288__auto__){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto__,frame,native$,temp__5288__auto__){
return (function (state_48771){
var state_val_48772 = (state_48771[(1)]);
if((state_val_48772 === (1))){
var state_48771__$1 = state_48771;
var statearr_48773_48784 = state_48771__$1;
(statearr_48773_48784[(2)] = null);

(statearr_48773_48784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48772 === (2))){
var inst_48758 = (function (){return ((function (state_val_48772,c__46833__auto__,frame,native$,temp__5288__auto__){
return (function (time){
return cljs.core.async.put_BANG_.call(null,frame,time);
});
;})(state_val_48772,c__46833__auto__,frame,native$,temp__5288__auto__))
})();
var inst_48759 = native$.call(window,inst_48758);
var state_48771__$1 = (function (){var statearr_48774 = state_48771;
(statearr_48774[(7)] = inst_48759);

return statearr_48774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48771__$1,(4),frame);
} else {
if((state_val_48772 === (3))){
var inst_48769 = (state_48771[(2)]);
var state_48771__$1 = state_48771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48771__$1,inst_48769);
} else {
if((state_val_48772 === (4))){
var inst_48761 = (state_48771[(2)]);
var inst_48762 = step_fn.call(null,inst_48761);
var state_48771__$1 = state_48771;
if(cljs.core.truth_(inst_48762)){
var statearr_48775_48785 = state_48771__$1;
(statearr_48775_48785[(1)] = (5));

} else {
var statearr_48776_48786 = state_48771__$1;
(statearr_48776_48786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48772 === (5))){
var state_48771__$1 = state_48771;
var statearr_48777_48787 = state_48771__$1;
(statearr_48777_48787[(2)] = null);

(statearr_48777_48787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48772 === (6))){
var state_48771__$1 = state_48771;
var statearr_48778_48788 = state_48771__$1;
(statearr_48778_48788[(2)] = null);

(statearr_48778_48788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48772 === (7))){
var inst_48767 = (state_48771[(2)]);
var state_48771__$1 = state_48771;
var statearr_48779_48789 = state_48771__$1;
(statearr_48779_48789[(2)] = inst_48767);

(statearr_48779_48789[(1)] = (3));


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
});})(c__46833__auto__,frame,native$,temp__5288__auto__))
;
return ((function (switch__46743__auto__,c__46833__auto__,frame,native$,temp__5288__auto__){
return (function() {
var bardo$transition$set_interval_$_state_machine__46744__auto__ = null;
var bardo$transition$set_interval_$_state_machine__46744__auto____0 = (function (){
var statearr_48780 = [null,null,null,null,null,null,null,null];
(statearr_48780[(0)] = bardo$transition$set_interval_$_state_machine__46744__auto__);

(statearr_48780[(1)] = (1));

return statearr_48780;
});
var bardo$transition$set_interval_$_state_machine__46744__auto____1 = (function (state_48771){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_48771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e48781){if((e48781 instanceof Object)){
var ex__46747__auto__ = e48781;
var statearr_48782_48790 = state_48771;
(statearr_48782_48790[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48791 = state_48771;
state_48771 = G__48791;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
bardo$transition$set_interval_$_state_machine__46744__auto__ = function(state_48771){
switch(arguments.length){
case 0:
return bardo$transition$set_interval_$_state_machine__46744__auto____0.call(this);
case 1:
return bardo$transition$set_interval_$_state_machine__46744__auto____1.call(this,state_48771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
bardo$transition$set_interval_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = bardo$transition$set_interval_$_state_machine__46744__auto____0;
bardo$transition$set_interval_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = bardo$transition$set_interval_$_state_machine__46744__auto____1;
return bardo$transition$set_interval_$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto__,frame,native$,temp__5288__auto__))
})();
var state__46835__auto__ = (function (){var statearr_48783 = f__46834__auto__.call(null);
(statearr_48783[(6)] = c__46833__auto__);

return statearr_48783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto__,frame,native$,temp__5288__auto__))
);

return c__46833__auto__;
} else {
return null;
}
});
bardo.transition.transition = (function bardo$transition$transition(var_args){
var G__48793 = arguments.length;
switch (G__48793) {
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

bardo.transition.transition.cljs$core$IFn$_invoke$arity$3 = (function (state,target,p__48794){
var map__48795 = p__48794;
var map__48795__$1 = ((((!((map__48795 == null)))?((((map__48795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48795):map__48795);
var duration = cljs.core.get.call(null,map__48795__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(500));
var easing = cljs.core.get.call(null,map__48795__$1,new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"cubic-in-out","cubic-in-out",1767611572));
var out = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var interpolator = bardo.interpolate.interpolate.call(null,state,target);
var ease_fn = bardo.ease.ease.call(null,easing);
var start = bardo.transition.now.call(null);
bardo.transition.set_interval.call(null,((function (out,interpolator,ease_fn,start,map__48795,map__48795__$1,duration,easing){
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
});})(out,interpolator,ease_fn,start,map__48795,map__48795__$1,duration,easing))
);

return out;
});

bardo.transition.transition.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=transition.js.map?rel=1506985654703
