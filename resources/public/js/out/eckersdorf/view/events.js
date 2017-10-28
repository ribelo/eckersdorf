// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.view.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.dom');
goog.require('bardo.transition');
goog.require('bardo.interpolate');
goog.require('cljs.core.async');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","set-active-panel","view/set-active-panel",-964344755),(function (db,p__49129){
var vec__49130 = p__49129;
var _ = cljs.core.nth.call(null,vec__49130,(0),null);
var panel = cljs.core.nth.call(null,vec__49130,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("view","active-panel","view/active-panel",-1798962863),panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","update-scroll-top","view/update-scroll-top",1565728779),(function (db,_){
var last_position = cljs.core.get.call(null,db,new cljs.core.Keyword("view","scroll-top","view/scroll-top",-59913553));
var current_position = (document.querySelector("#main-view")["scrollTop"]);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("view","scroll-top","view/scroll-top",-59913553),current_position,new cljs.core.Keyword("view","scrolling-down?","view/scrolling-down?",1222904737),(current_position > last_position),new cljs.core.Keyword("view","scrolling=up?","view/scrolling=up?",-1401887624),(current_position < last_position));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("view","go-to-top","view/go-to-top",716737651),(function (_,___$1){
var curr_scroll_49160 = (document.querySelector("#main-view")["scrollTop"]);
var intrpl_ch_49161 = bardo.transition.transition.call(null,curr_scroll_49160,(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(1000)], null));
var c__47162__auto___49162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___49162,curr_scroll_49160,intrpl_ch_49161){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___49162,curr_scroll_49160,intrpl_ch_49161){
return (function (state_49146){
var state_val_49147 = (state_49146[(1)]);
if((state_val_49147 === (1))){
var state_49146__$1 = state_49146;
var statearr_49148_49163 = state_49146__$1;
(statearr_49148_49163[(2)] = null);

(statearr_49148_49163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49147 === (2))){
var state_49146__$1 = state_49146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49146__$1,(4),intrpl_ch_49161);
} else {
if((state_val_49147 === (3))){
var inst_49144 = (state_49146[(2)]);
var state_49146__$1 = state_49146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49146__$1,inst_49144);
} else {
if((state_val_49147 === (4))){
var inst_49135 = (state_49146[(7)]);
var inst_49135__$1 = (state_49146[(2)]);
var state_49146__$1 = (function (){var statearr_49149 = state_49146;
(statearr_49149[(7)] = inst_49135__$1);

return statearr_49149;
})();
if(cljs.core.truth_(inst_49135__$1)){
var statearr_49150_49164 = state_49146__$1;
(statearr_49150_49164[(1)] = (5));

} else {
var statearr_49151_49165 = state_49146__$1;
(statearr_49151_49165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49147 === (5))){
var inst_49135 = (state_49146[(7)]);
var inst_49137 = document.querySelector("#main-view");
var inst_49138 = (inst_49137["scrollTop"] = inst_49135);
var state_49146__$1 = (function (){var statearr_49152 = state_49146;
(statearr_49152[(8)] = inst_49138);

return statearr_49152;
})();
var statearr_49153_49166 = state_49146__$1;
(statearr_49153_49166[(2)] = null);

(statearr_49153_49166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49147 === (6))){
var state_49146__$1 = state_49146;
var statearr_49154_49167 = state_49146__$1;
(statearr_49154_49167[(2)] = null);

(statearr_49154_49167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49147 === (7))){
var inst_49142 = (state_49146[(2)]);
var state_49146__$1 = state_49146;
var statearr_49155_49168 = state_49146__$1;
(statearr_49155_49168[(2)] = inst_49142);

(statearr_49155_49168[(1)] = (3));


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
});})(c__47162__auto___49162,curr_scroll_49160,intrpl_ch_49161))
;
return ((function (switch__47072__auto__,c__47162__auto___49162,curr_scroll_49160,intrpl_ch_49161){
return (function() {
var eckersdorf$view$events$state_machine__47073__auto__ = null;
var eckersdorf$view$events$state_machine__47073__auto____0 = (function (){
var statearr_49156 = [null,null,null,null,null,null,null,null,null];
(statearr_49156[(0)] = eckersdorf$view$events$state_machine__47073__auto__);

(statearr_49156[(1)] = (1));

return statearr_49156;
});
var eckersdorf$view$events$state_machine__47073__auto____1 = (function (state_49146){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_49146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e49157){if((e49157 instanceof Object)){
var ex__47076__auto__ = e49157;
var statearr_49158_49169 = state_49146;
(statearr_49158_49169[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49170 = state_49146;
state_49146 = G__49170;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
eckersdorf$view$events$state_machine__47073__auto__ = function(state_49146){
switch(arguments.length){
case 0:
return eckersdorf$view$events$state_machine__47073__auto____0.call(this);
case 1:
return eckersdorf$view$events$state_machine__47073__auto____1.call(this,state_49146);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eckersdorf$view$events$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = eckersdorf$view$events$state_machine__47073__auto____0;
eckersdorf$view$events$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = eckersdorf$view$events$state_machine__47073__auto____1;
return eckersdorf$view$events$state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___49162,curr_scroll_49160,intrpl_ch_49161))
})();
var state__47164__auto__ = (function (){var statearr_49159 = f__47163__auto__.call(null);
(statearr_49159[(6)] = c__47162__auto___49162);

return statearr_49159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___49162,curr_scroll_49160,intrpl_ch_49161))
);


return null;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","sider-toggle","view/sider-toggle",-65349742),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("view","sider-collapsed?","view/sider-collapsed?",888100809),cljs.core.not);
}));

//# sourceMappingURL=events.js.map?rel=1509094252000
