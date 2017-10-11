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
var curr_scroll_48824 = (document.querySelector("#main-view")["scrollTop"]);
var intrpl_ch_48825 = bardo.transition.transition.call(null,curr_scroll_48824,(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(1000)], null));
var c__46830__auto___48826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___48826,curr_scroll_48824,intrpl_ch_48825){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___48826,curr_scroll_48824,intrpl_ch_48825){
return (function (state_48810){
var state_val_48811 = (state_48810[(1)]);
if((state_val_48811 === (1))){
var state_48810__$1 = state_48810;
var statearr_48812_48827 = state_48810__$1;
(statearr_48812_48827[(2)] = null);

(statearr_48812_48827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (2))){
var state_48810__$1 = state_48810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48810__$1,(4),intrpl_ch_48825);
} else {
if((state_val_48811 === (3))){
var inst_48808 = (state_48810[(2)]);
var state_48810__$1 = state_48810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48810__$1,inst_48808);
} else {
if((state_val_48811 === (4))){
var inst_48799 = (state_48810[(7)]);
var inst_48799__$1 = (state_48810[(2)]);
var state_48810__$1 = (function (){var statearr_48813 = state_48810;
(statearr_48813[(7)] = inst_48799__$1);

return statearr_48813;
})();
if(cljs.core.truth_(inst_48799__$1)){
var statearr_48814_48828 = state_48810__$1;
(statearr_48814_48828[(1)] = (5));

} else {
var statearr_48815_48829 = state_48810__$1;
(statearr_48815_48829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (5))){
var inst_48799 = (state_48810[(7)]);
var inst_48801 = document.querySelector("#main-view");
var inst_48802 = (inst_48801["scrollTop"] = inst_48799);
var state_48810__$1 = (function (){var statearr_48816 = state_48810;
(statearr_48816[(8)] = inst_48802);

return statearr_48816;
})();
var statearr_48817_48830 = state_48810__$1;
(statearr_48817_48830[(2)] = null);

(statearr_48817_48830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (6))){
var state_48810__$1 = state_48810;
var statearr_48818_48831 = state_48810__$1;
(statearr_48818_48831[(2)] = null);

(statearr_48818_48831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (7))){
var inst_48806 = (state_48810[(2)]);
var state_48810__$1 = state_48810;
var statearr_48819_48832 = state_48810__$1;
(statearr_48819_48832[(2)] = inst_48806);

(statearr_48819_48832[(1)] = (3));


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
});})(c__46830__auto___48826,curr_scroll_48824,intrpl_ch_48825))
;
return ((function (switch__46740__auto__,c__46830__auto___48826,curr_scroll_48824,intrpl_ch_48825){
return (function() {
var eckersdorf$view$events$state_machine__46741__auto__ = null;
var eckersdorf$view$events$state_machine__46741__auto____0 = (function (){
var statearr_48820 = [null,null,null,null,null,null,null,null,null];
(statearr_48820[(0)] = eckersdorf$view$events$state_machine__46741__auto__);

(statearr_48820[(1)] = (1));

return statearr_48820;
});
var eckersdorf$view$events$state_machine__46741__auto____1 = (function (state_48810){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_48810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e48821){if((e48821 instanceof Object)){
var ex__46744__auto__ = e48821;
var statearr_48822_48833 = state_48810;
(statearr_48822_48833[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48834 = state_48810;
state_48810 = G__48834;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
eckersdorf$view$events$state_machine__46741__auto__ = function(state_48810){
switch(arguments.length){
case 0:
return eckersdorf$view$events$state_machine__46741__auto____0.call(this);
case 1:
return eckersdorf$view$events$state_machine__46741__auto____1.call(this,state_48810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eckersdorf$view$events$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = eckersdorf$view$events$state_machine__46741__auto____0;
eckersdorf$view$events$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = eckersdorf$view$events$state_machine__46741__auto____1;
return eckersdorf$view$events$state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___48826,curr_scroll_48824,intrpl_ch_48825))
})();
var state__46832__auto__ = (function (){var statearr_48823 = f__46831__auto__.call(null);
(statearr_48823[(6)] = c__46830__auto___48826);

return statearr_48823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___48826,curr_scroll_48824,intrpl_ch_48825))
);


return null;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","sider-toggle","view/sider-toggle",-65349742),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("view","sider-collapsed?","view/sider-collapsed?",888100809),cljs.core.not);
}));

//# sourceMappingURL=events.js.map?rel=1507757467413
