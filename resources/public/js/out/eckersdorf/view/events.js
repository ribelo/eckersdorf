// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.view.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.dom');
goog.require('bardo.transition');
goog.require('bardo.interpolate');
goog.require('cljs.core.async');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","set-active-panel","view/set-active-panel",-964344755),(function (db,p__39627){
var vec__39628 = p__39627;
var _ = cljs.core.nth.call(null,vec__39628,(0),null);
var panel = cljs.core.nth.call(null,vec__39628,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("view","active-panel","view/active-panel",-1798962863),panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","update-scroll-top","view/update-scroll-top",1565728779),(function (db,_){
var last_position = cljs.core.get.call(null,db,new cljs.core.Keyword("view","scroll-top","view/scroll-top",-59913553));
var current_position = (document.querySelector("#main-view")["scrollTop"]);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("view","scroll-top","view/scroll-top",-59913553),current_position,new cljs.core.Keyword("view","scrolling-down?","view/scrolling-down?",1222904737),(current_position > last_position),new cljs.core.Keyword("view","scrolling=up?","view/scrolling=up?",-1401887624),(current_position < last_position));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("view","go-to-top","view/go-to-top",716737651),(function (_,___$1){
var curr_scroll_39658 = (document.querySelector("#main-view")["scrollTop"]);
var intrpl_ch_39659 = bardo.transition.transition.call(null,curr_scroll_39658,(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(1000)], null));
var c__38797__auto___39660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38797__auto___39660,curr_scroll_39658,intrpl_ch_39659){
return (function (){
var f__38798__auto__ = (function (){var switch__38774__auto__ = ((function (c__38797__auto___39660,curr_scroll_39658,intrpl_ch_39659){
return (function (state_39644){
var state_val_39645 = (state_39644[(1)]);
if((state_val_39645 === (1))){
var state_39644__$1 = state_39644;
var statearr_39646_39661 = state_39644__$1;
(statearr_39646_39661[(2)] = null);

(statearr_39646_39661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (2))){
var state_39644__$1 = state_39644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39644__$1,(4),intrpl_ch_39659);
} else {
if((state_val_39645 === (3))){
var inst_39642 = (state_39644[(2)]);
var state_39644__$1 = state_39644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39644__$1,inst_39642);
} else {
if((state_val_39645 === (4))){
var inst_39633 = (state_39644[(7)]);
var inst_39633__$1 = (state_39644[(2)]);
var state_39644__$1 = (function (){var statearr_39647 = state_39644;
(statearr_39647[(7)] = inst_39633__$1);

return statearr_39647;
})();
if(cljs.core.truth_(inst_39633__$1)){
var statearr_39648_39662 = state_39644__$1;
(statearr_39648_39662[(1)] = (5));

} else {
var statearr_39649_39663 = state_39644__$1;
(statearr_39649_39663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (5))){
var inst_39633 = (state_39644[(7)]);
var inst_39635 = document.querySelector("#main-view");
var inst_39636 = (inst_39635["scrollTop"] = inst_39633);
var state_39644__$1 = (function (){var statearr_39650 = state_39644;
(statearr_39650[(8)] = inst_39636);

return statearr_39650;
})();
var statearr_39651_39664 = state_39644__$1;
(statearr_39651_39664[(2)] = null);

(statearr_39651_39664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (6))){
var state_39644__$1 = state_39644;
var statearr_39652_39665 = state_39644__$1;
(statearr_39652_39665[(2)] = null);

(statearr_39652_39665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (7))){
var inst_39640 = (state_39644[(2)]);
var state_39644__$1 = state_39644;
var statearr_39653_39666 = state_39644__$1;
(statearr_39653_39666[(2)] = inst_39640);

(statearr_39653_39666[(1)] = (3));


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
});})(c__38797__auto___39660,curr_scroll_39658,intrpl_ch_39659))
;
return ((function (switch__38774__auto__,c__38797__auto___39660,curr_scroll_39658,intrpl_ch_39659){
return (function() {
var eckersdorf$view$events$state_machine__38775__auto__ = null;
var eckersdorf$view$events$state_machine__38775__auto____0 = (function (){
var statearr_39654 = [null,null,null,null,null,null,null,null,null];
(statearr_39654[(0)] = eckersdorf$view$events$state_machine__38775__auto__);

(statearr_39654[(1)] = (1));

return statearr_39654;
});
var eckersdorf$view$events$state_machine__38775__auto____1 = (function (state_39644){
while(true){
var ret_value__38776__auto__ = (function (){try{while(true){
var result__38777__auto__ = switch__38774__auto__.call(null,state_39644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38777__auto__;
}
break;
}
}catch (e39655){if((e39655 instanceof Object)){
var ex__38778__auto__ = e39655;
var statearr_39656_39667 = state_39644;
(statearr_39656_39667[(5)] = ex__38778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39668 = state_39644;
state_39644 = G__39668;
continue;
} else {
return ret_value__38776__auto__;
}
break;
}
});
eckersdorf$view$events$state_machine__38775__auto__ = function(state_39644){
switch(arguments.length){
case 0:
return eckersdorf$view$events$state_machine__38775__auto____0.call(this);
case 1:
return eckersdorf$view$events$state_machine__38775__auto____1.call(this,state_39644);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eckersdorf$view$events$state_machine__38775__auto__.cljs$core$IFn$_invoke$arity$0 = eckersdorf$view$events$state_machine__38775__auto____0;
eckersdorf$view$events$state_machine__38775__auto__.cljs$core$IFn$_invoke$arity$1 = eckersdorf$view$events$state_machine__38775__auto____1;
return eckersdorf$view$events$state_machine__38775__auto__;
})()
;})(switch__38774__auto__,c__38797__auto___39660,curr_scroll_39658,intrpl_ch_39659))
})();
var state__38799__auto__ = (function (){var statearr_39657 = f__38798__auto__.call(null);
(statearr_39657[(6)] = c__38797__auto___39660);

return statearr_39657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38799__auto__);
});})(c__38797__auto___39660,curr_scroll_39658,intrpl_ch_39659))
);


return null;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","sider-toggle","view/sider-toggle",-65349742),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("view","sider-collapsed?","view/sider-collapsed?",888100809),cljs.core.not);
}));

//# sourceMappingURL=events.js.map?rel=1508271556386
