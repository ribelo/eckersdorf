// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.view.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.dom');
goog.require('bardo.transition');
goog.require('bardo.interpolate');
goog.require('cljs.core.async');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","update-scroll-top","view/update-scroll-top",1565728779),(function (db,_){
var last_position = cljs.core.get.call(null,db,new cljs.core.Keyword("view","scroll-top","view/scroll-top",-59913553));
var current_position = (document.querySelector("#main-view")["scrollTop"]);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("view","scroll-top","view/scroll-top",-59913553),current_position,new cljs.core.Keyword("view","scrolling-down?","view/scrolling-down?",1222904737),(current_position > last_position),new cljs.core.Keyword("view","scrolling=up?","view/scrolling=up?",-1401887624),(current_position < last_position));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("view","go-to-top","view/go-to-top",716737651),(function (_,___$1){
var curr_scroll_39726 = (document.querySelector("#main-view")["scrollTop"]);
var intrpl_ch_39727 = bardo.transition.transition.call(null,curr_scroll_39726,(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(1000)], null));
var c__38813__auto___39728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38813__auto___39728,curr_scroll_39726,intrpl_ch_39727){
return (function (){
var f__38814__auto__ = (function (){var switch__38790__auto__ = ((function (c__38813__auto___39728,curr_scroll_39726,intrpl_ch_39727){
return (function (state_39712){
var state_val_39713 = (state_39712[(1)]);
if((state_val_39713 === (1))){
var state_39712__$1 = state_39712;
var statearr_39714_39729 = state_39712__$1;
(statearr_39714_39729[(2)] = null);

(statearr_39714_39729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39713 === (2))){
var state_39712__$1 = state_39712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39712__$1,(4),intrpl_ch_39727);
} else {
if((state_val_39713 === (3))){
var inst_39710 = (state_39712[(2)]);
var state_39712__$1 = state_39712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39712__$1,inst_39710);
} else {
if((state_val_39713 === (4))){
var inst_39701 = (state_39712[(7)]);
var inst_39701__$1 = (state_39712[(2)]);
var state_39712__$1 = (function (){var statearr_39715 = state_39712;
(statearr_39715[(7)] = inst_39701__$1);

return statearr_39715;
})();
if(cljs.core.truth_(inst_39701__$1)){
var statearr_39716_39730 = state_39712__$1;
(statearr_39716_39730[(1)] = (5));

} else {
var statearr_39717_39731 = state_39712__$1;
(statearr_39717_39731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39713 === (5))){
var inst_39701 = (state_39712[(7)]);
var inst_39703 = document.querySelector("#main-view");
var inst_39704 = (inst_39703["scrollTop"] = inst_39701);
var state_39712__$1 = (function (){var statearr_39718 = state_39712;
(statearr_39718[(8)] = inst_39704);

return statearr_39718;
})();
var statearr_39719_39732 = state_39712__$1;
(statearr_39719_39732[(2)] = null);

(statearr_39719_39732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39713 === (6))){
var state_39712__$1 = state_39712;
var statearr_39720_39733 = state_39712__$1;
(statearr_39720_39733[(2)] = null);

(statearr_39720_39733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39713 === (7))){
var inst_39708 = (state_39712[(2)]);
var state_39712__$1 = state_39712;
var statearr_39721_39734 = state_39712__$1;
(statearr_39721_39734[(2)] = inst_39708);

(statearr_39721_39734[(1)] = (3));


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
});})(c__38813__auto___39728,curr_scroll_39726,intrpl_ch_39727))
;
return ((function (switch__38790__auto__,c__38813__auto___39728,curr_scroll_39726,intrpl_ch_39727){
return (function() {
var eckersdorf$view$events$state_machine__38791__auto__ = null;
var eckersdorf$view$events$state_machine__38791__auto____0 = (function (){
var statearr_39722 = [null,null,null,null,null,null,null,null,null];
(statearr_39722[(0)] = eckersdorf$view$events$state_machine__38791__auto__);

(statearr_39722[(1)] = (1));

return statearr_39722;
});
var eckersdorf$view$events$state_machine__38791__auto____1 = (function (state_39712){
while(true){
var ret_value__38792__auto__ = (function (){try{while(true){
var result__38793__auto__ = switch__38790__auto__.call(null,state_39712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38793__auto__;
}
break;
}
}catch (e39723){if((e39723 instanceof Object)){
var ex__38794__auto__ = e39723;
var statearr_39724_39735 = state_39712;
(statearr_39724_39735[(5)] = ex__38794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39736 = state_39712;
state_39712 = G__39736;
continue;
} else {
return ret_value__38792__auto__;
}
break;
}
});
eckersdorf$view$events$state_machine__38791__auto__ = function(state_39712){
switch(arguments.length){
case 0:
return eckersdorf$view$events$state_machine__38791__auto____0.call(this);
case 1:
return eckersdorf$view$events$state_machine__38791__auto____1.call(this,state_39712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eckersdorf$view$events$state_machine__38791__auto__.cljs$core$IFn$_invoke$arity$0 = eckersdorf$view$events$state_machine__38791__auto____0;
eckersdorf$view$events$state_machine__38791__auto__.cljs$core$IFn$_invoke$arity$1 = eckersdorf$view$events$state_machine__38791__auto____1;
return eckersdorf$view$events$state_machine__38791__auto__;
})()
;})(switch__38790__auto__,c__38813__auto___39728,curr_scroll_39726,intrpl_ch_39727))
})();
var state__38815__auto__ = (function (){var statearr_39725 = f__38814__auto__.call(null);
(statearr_39725[(6)] = c__38813__auto___39728);

return statearr_39725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38815__auto__);
});})(c__38813__auto___39728,curr_scroll_39726,intrpl_ch_39727))
);


return null;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","sider-toggle","view/sider-toggle",-65349742),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("view","sider-collapsed?","view/sider-collapsed?",888100809),cljs.core.not);
}));

//# sourceMappingURL=events.js.map?rel=1506026049157
