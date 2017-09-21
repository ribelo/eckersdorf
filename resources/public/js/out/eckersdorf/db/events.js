// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.db.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('eckersdorf.db.core');
goog.require('eckersdorf.window.db');
goog.require('eckersdorf.view.db');
goog.require('eckersdorf.error.db');
goog.require('eckersdorf.login.db');
goog.require('eckersdorf.process.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("db","initialize-db","db/initialize-db",230999070),(function (_,___$1){
var db = cljs.core.merge.call(null,eckersdorf.db.core.default_db,eckersdorf.window.db.window_state,eckersdorf.view.db.view_state,eckersdorf.error.db.error_state,eckersdorf.login.db.login_state,eckersdorf.process.db.process_state);
var temp__5288__auto__ = eckersdorf.db.core.load_local_storage.call(null);
if(cljs.core.truth_(temp__5288__auto__)){
var storage = temp__5288__auto__;
return cljs.core.merge.call(null,db,storage);
} else {
return db;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("db","merge-db","db/merge-db",-2107570316),(function (db,p__35364){
var vec__35365 = p__35364;
var _ = cljs.core.nth.call(null,vec__35365,(0),null);
var state = cljs.core.nth.call(null,vec__35365,(1),null);
return cljs.core.merge.call(null,db,state);
}));

//# sourceMappingURL=events.js.map?rel=1506028339788
