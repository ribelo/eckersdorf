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
var curr_scroll_53014 = (document.querySelector("#main-view")["scrollTop"]);
var intrpl_ch_53015 = bardo.transition.transition.call(null,curr_scroll_53014,(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(1000)], null));
var c__51020__auto___53016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___53016,curr_scroll_53014,intrpl_ch_53015){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___53016,curr_scroll_53014,intrpl_ch_53015){
return (function (state_53000){
var state_val_53001 = (state_53000[(1)]);
if((state_val_53001 === (1))){
var state_53000__$1 = state_53000;
var statearr_53002_53017 = state_53000__$1;
(statearr_53002_53017[(2)] = null);

(statearr_53002_53017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (2))){
var state_53000__$1 = state_53000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53000__$1,(4),intrpl_ch_53015);
} else {
if((state_val_53001 === (3))){
var inst_52998 = (state_53000[(2)]);
var state_53000__$1 = state_53000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53000__$1,inst_52998);
} else {
if((state_val_53001 === (4))){
var inst_52989 = (state_53000[(7)]);
var inst_52989__$1 = (state_53000[(2)]);
var state_53000__$1 = (function (){var statearr_53003 = state_53000;
(statearr_53003[(7)] = inst_52989__$1);

return statearr_53003;
})();
if(cljs.core.truth_(inst_52989__$1)){
var statearr_53004_53018 = state_53000__$1;
(statearr_53004_53018[(1)] = (5));

} else {
var statearr_53005_53019 = state_53000__$1;
(statearr_53005_53019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (5))){
var inst_52989 = (state_53000[(7)]);
var inst_52991 = document.querySelector("#main-view");
var inst_52992 = (inst_52991["scrollTop"] = inst_52989);
var state_53000__$1 = (function (){var statearr_53006 = state_53000;
(statearr_53006[(8)] = inst_52992);

return statearr_53006;
})();
var statearr_53007_53020 = state_53000__$1;
(statearr_53007_53020[(2)] = null);

(statearr_53007_53020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (6))){
var state_53000__$1 = state_53000;
var statearr_53008_53021 = state_53000__$1;
(statearr_53008_53021[(2)] = null);

(statearr_53008_53021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (7))){
var inst_52996 = (state_53000[(2)]);
var state_53000__$1 = state_53000;
var statearr_53009_53022 = state_53000__$1;
(statearr_53009_53022[(2)] = inst_52996);

(statearr_53009_53022[(1)] = (3));


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
});})(c__51020__auto___53016,curr_scroll_53014,intrpl_ch_53015))
;
return ((function (switch__50930__auto__,c__51020__auto___53016,curr_scroll_53014,intrpl_ch_53015){
return (function() {
var eckersdorf$view$events$state_machine__50931__auto__ = null;
var eckersdorf$view$events$state_machine__50931__auto____0 = (function (){
var statearr_53010 = [null,null,null,null,null,null,null,null,null];
(statearr_53010[(0)] = eckersdorf$view$events$state_machine__50931__auto__);

(statearr_53010[(1)] = (1));

return statearr_53010;
});
var eckersdorf$view$events$state_machine__50931__auto____1 = (function (state_53000){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_53000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e53011){if((e53011 instanceof Object)){
var ex__50934__auto__ = e53011;
var statearr_53012_53023 = state_53000;
(statearr_53012_53023[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53024 = state_53000;
state_53000 = G__53024;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
eckersdorf$view$events$state_machine__50931__auto__ = function(state_53000){
switch(arguments.length){
case 0:
return eckersdorf$view$events$state_machine__50931__auto____0.call(this);
case 1:
return eckersdorf$view$events$state_machine__50931__auto____1.call(this,state_53000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eckersdorf$view$events$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = eckersdorf$view$events$state_machine__50931__auto____0;
eckersdorf$view$events$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = eckersdorf$view$events$state_machine__50931__auto____1;
return eckersdorf$view$events$state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___53016,curr_scroll_53014,intrpl_ch_53015))
})();
var state__51022__auto__ = (function (){var statearr_53013 = f__51021__auto__.call(null);
(statearr_53013[(6)] = c__51020__auto___53016);

return statearr_53013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___53016,curr_scroll_53014,intrpl_ch_53015))
);


return null;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","sider-toggle","view/sider-toggle",-65349742),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("view","sider-collapsed?","view/sider-collapsed?",888100809),cljs.core.not);
}));

//# sourceMappingURL=events.js.map?rel=1507056182610
