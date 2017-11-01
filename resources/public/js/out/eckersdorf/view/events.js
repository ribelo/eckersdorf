// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.view.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.dom');
goog.require('cljs.core.async');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","set-active-panel","view/set-active-panel",-964344755),(function (db,p__42652){
var vec__42653 = p__42652;
var _ = cljs.core.nth.call(null,vec__42653,(0),null);
var panel = cljs.core.nth.call(null,vec__42653,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("view","active-panel","view/active-panel",-1798962863),panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","toggle-sider","view/toggle-sider",-1166821072),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("view","sider-collapsed?","view/sider-collapsed?",888100809),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","toggle-scroll-content","view/toggle-scroll-content",-437673932),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("view","scroll-content?","view/scroll-content?",2031747859),cljs.core.not);
}));

//# sourceMappingURL=events.js.map?rel=1509563010773
