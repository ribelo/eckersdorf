// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.view.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.dom');
goog.require('bardo.transition');
goog.require('bardo.interpolate');
goog.require('cljs.core.async');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","set-active-panel","view/set-active-panel",-964344755),(function (db,p__48889){
var vec__48890 = p__48889;
var _ = cljs.core.nth.call(null,vec__48890,(0),null);
var panel = cljs.core.nth.call(null,vec__48890,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("view","active-panel","view/active-panel",-1798962863),panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","update-scroll-top","view/update-scroll-top",1565728779),(function (db,_){
var last_position = cljs.core.get.call(null,db,new cljs.core.Keyword("view","scroll-top","view/scroll-top",-59913553));
var current_position = (document.querySelector("#main-view")["scrollTop"]);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("view","scroll-top","view/scroll-top",-59913553),current_position,new cljs.core.Keyword("view","scrolling-down?","view/scrolling-down?",1222904737),(current_position > last_position),new cljs.core.Keyword("view","scrolling=up?","view/scrolling=up?",-1401887624),(current_position < last_position));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("view","go-to-top","view/go-to-top",716737651),(function (_,___$1){
var curr_scroll_48920 = (document.querySelector("#main-view")["scrollTop"]);
var intrpl_ch_48921 = bardo.transition.transition.call(null,curr_scroll_48920,(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(1000)], null));
var c__46922__auto___48922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___48922,curr_scroll_48920,intrpl_ch_48921){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___48922,curr_scroll_48920,intrpl_ch_48921){
return (function (state_48906){
var state_val_48907 = (state_48906[(1)]);
if((state_val_48907 === (1))){
var state_48906__$1 = state_48906;
var statearr_48908_48923 = state_48906__$1;
(statearr_48908_48923[(2)] = null);

(statearr_48908_48923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48907 === (2))){
var state_48906__$1 = state_48906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48906__$1,(4),intrpl_ch_48921);
} else {
if((state_val_48907 === (3))){
var inst_48904 = (state_48906[(2)]);
var state_48906__$1 = state_48906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48906__$1,inst_48904);
} else {
if((state_val_48907 === (4))){
var inst_48895 = (state_48906[(7)]);
var inst_48895__$1 = (state_48906[(2)]);
var state_48906__$1 = (function (){var statearr_48909 = state_48906;
(statearr_48909[(7)] = inst_48895__$1);

return statearr_48909;
})();
if(cljs.core.truth_(inst_48895__$1)){
var statearr_48910_48924 = state_48906__$1;
(statearr_48910_48924[(1)] = (5));

} else {
var statearr_48911_48925 = state_48906__$1;
(statearr_48911_48925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48907 === (5))){
var inst_48895 = (state_48906[(7)]);
var inst_48897 = document.querySelector("#main-view");
var inst_48898 = (inst_48897["scrollTop"] = inst_48895);
var state_48906__$1 = (function (){var statearr_48912 = state_48906;
(statearr_48912[(8)] = inst_48898);

return statearr_48912;
})();
var statearr_48913_48926 = state_48906__$1;
(statearr_48913_48926[(2)] = null);

(statearr_48913_48926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48907 === (6))){
var state_48906__$1 = state_48906;
var statearr_48914_48927 = state_48906__$1;
(statearr_48914_48927[(2)] = null);

(statearr_48914_48927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48907 === (7))){
var inst_48902 = (state_48906[(2)]);
var state_48906__$1 = state_48906;
var statearr_48915_48928 = state_48906__$1;
(statearr_48915_48928[(2)] = inst_48902);

(statearr_48915_48928[(1)] = (3));


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
});})(c__46922__auto___48922,curr_scroll_48920,intrpl_ch_48921))
;
return ((function (switch__46832__auto__,c__46922__auto___48922,curr_scroll_48920,intrpl_ch_48921){
return (function() {
var eckersdorf$view$events$state_machine__46833__auto__ = null;
var eckersdorf$view$events$state_machine__46833__auto____0 = (function (){
var statearr_48916 = [null,null,null,null,null,null,null,null,null];
(statearr_48916[(0)] = eckersdorf$view$events$state_machine__46833__auto__);

(statearr_48916[(1)] = (1));

return statearr_48916;
});
var eckersdorf$view$events$state_machine__46833__auto____1 = (function (state_48906){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_48906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e48917){if((e48917 instanceof Object)){
var ex__46836__auto__ = e48917;
var statearr_48918_48929 = state_48906;
(statearr_48918_48929[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48930 = state_48906;
state_48906 = G__48930;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
eckersdorf$view$events$state_machine__46833__auto__ = function(state_48906){
switch(arguments.length){
case 0:
return eckersdorf$view$events$state_machine__46833__auto____0.call(this);
case 1:
return eckersdorf$view$events$state_machine__46833__auto____1.call(this,state_48906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eckersdorf$view$events$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = eckersdorf$view$events$state_machine__46833__auto____0;
eckersdorf$view$events$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = eckersdorf$view$events$state_machine__46833__auto____1;
return eckersdorf$view$events$state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___48922,curr_scroll_48920,intrpl_ch_48921))
})();
var state__46924__auto__ = (function (){var statearr_48919 = f__46923__auto__.call(null);
(statearr_48919[(6)] = c__46922__auto___48922);

return statearr_48919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___48922,curr_scroll_48920,intrpl_ch_48921))
);


return null;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","sider-toggle","view/sider-toggle",-65349742),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("view","sider-collapsed?","view/sider-collapsed?",888100809),cljs.core.not);
}));

//# sourceMappingURL=events.js.map?rel=1508862162472
