// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.view.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.dom');
goog.require('cljs.core.async');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","set-active-panel","view/set-active-panel",-964344755),(function (db,p__47656){
var vec__47657 = p__47656;
var _ = cljs.core.nth.call(null,vec__47657,(0),null);
var panel = cljs.core.nth.call(null,vec__47657,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("view","active-panel","view/active-panel",-1798962863),panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("view","sider-toggle","view/sider-toggle",-65349742),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("view","sider-collapsed?","view/sider-collapsed?",888100809),cljs.core.not);
}));

//# sourceMappingURL=events.js.map?rel=1509397948986
