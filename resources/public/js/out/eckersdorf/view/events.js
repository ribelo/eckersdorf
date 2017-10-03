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
var curr_scroll_48827 = (document.querySelector("#main-view")["scrollTop"]);
var intrpl_ch_48828 = bardo.transition.transition.call(null,curr_scroll_48827,(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(1000)], null));
var c__46833__auto___48829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___48829,curr_scroll_48827,intrpl_ch_48828){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___48829,curr_scroll_48827,intrpl_ch_48828){
return (function (state_48813){
var state_val_48814 = (state_48813[(1)]);
if((state_val_48814 === (1))){
var state_48813__$1 = state_48813;
var statearr_48815_48830 = state_48813__$1;
(statearr_48815_48830[(2)] = null);

(statearr_48815_48830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48814 === (2))){
var state_48813__$1 = state_48813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48813__$1,(4),intrpl_ch_48828);
} else {
if((state_val_48814 === (3))){
var inst_48811 = (state_48813[(2)]);
var state_48813__$1 = state_48813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48813__$1,inst_48811);
} else {
if((state_val_48814 === (4))){
var inst_48802 = (state_48813[(7)]);
var inst_48802__$1 = (state_48813[(2)]);
var state_48813__$1 = (function (){var statearr_48816 = state_48813;
(statearr_48816[(7)] = inst_48802__$1);

return statearr_48816;
})();
if(cljs.core.truth_(inst_48802__$1)){
var statearr_48817_48831 = state_48813__$1;
(statearr_48817_48831[(1)] = (5));

} else {
var statearr_48818_48832 = state_48813__$1;
(statearr_48818_48832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48814 === (5))){
var inst_48802 = (state_48813[(7)]);
var inst_48804 = document.querySelector("#main-view");
var inst_48805 = (inst_48804["scrollTop"] = inst_48802);
var state_48813__$1 = (function (){var statearr_48819 = state_48813;
(statearr_48819[(8)] = inst_48805);

return statearr_48819;
})();
var statearr_48820_48833 = state_48813__$1;
(statearr_48820_48833[(2)] = null);

(statearr_48820_48833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48814 === (6))){
var state_48813__$1 = state_48813;
var statearr_48821_48834 = state_48813__$1;
(statearr_48821_48834[(2)] = null);

(statearr_48821_48834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48814 === (7))){
var inst_48809 = (state_48813[(2)]);
var state_48813__$1 = state_48813;
var statearr_48822_48835 = state_48813__$1;
(statearr_48822_48835[(2)] = inst_48809);

(statearr_48822_48835[(1)] = (3));


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
});})(c__46833__auto___48829,curr_scroll_48827,intrpl_ch_48828))
;
return ((function (switch__46743__auto__,c__46833__auto___48829,curr_scroll_48827,intrpl_ch_48828){
return (function() {
var eckersdorf$view$events$state_machine__46744__auto__ = null;
var eckersdorf$view$events$state_machine__46744__auto____0 = (function (){
var statearr_48823 = [null,null,null,null,null,null,null,null,null];
(statearr_48823[(0)] = eckersdorf$view$events$state_machine__46744__auto__);

(statearr_48823[(1)] = (1));

return statearr_48823;
});
var eckersdorf$view$events$state_machine__46744__auto____1 = (function (state_48813){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_48813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e48824){if((e48824 instanceof Object)){
var ex__46747__auto__ = e48824;
var statearr_48825_48836 = state_48813;
(statearr_48825_48836[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48837 = state_48813;
state_48813 = G__48837;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
eckersdorf$view$events$state_machine__46744__auto__ = function(state_48813){
switch(arguments.length){
case 0:
return eckersdorf$view$events$state_machine__46744__auto____0.call(this);
case 1:
return eckersdorf$view$events$state_machine__46744__auto____1.call(this,state_48813);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eckersdorf$view$events$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = eckersdorf$view$events$state_machine__46744__auto____0;
eckersdorf$view$events$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = eckersdorf$view$events$state_machine__46744__auto____1;
return eckersdorf$view$events$state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___48829,curr_scroll_48827,intrpl_ch_48828))
})();
var state__46835__auto__ = (function (){var statearr_48826 = f__46834__auto__.call(null);
(statearr_48826[(6)] = c__46833__auto___48829);

return statearr_48826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___48829,curr_scroll_48827,intrpl_ch_48828))
);


return null;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","sider-toggle","view/sider-toggle",-65349742),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("view","sider-collapsed?","view/sider-collapsed?",888100809),cljs.core.not);
}));

//# sourceMappingURL=events.js.map?rel=1506985654730
