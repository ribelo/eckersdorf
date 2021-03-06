// Compiled by ClojureScript 1.9.946 {}
goog.provide('eckersdorf.db.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs_time.core');
goog.require('eckersdorf.db.core');
goog.require('eckersdorf.window.db');
goog.require('eckersdorf.view.db');
goog.require('eckersdorf.error.db');
goog.require('eckersdorf.user.db');
goog.require('eckersdorf.user.login.db');
goog.require('eckersdorf.process.db');
goog.require('eckersdorf.workplaces.db');
goog.require('eckersdorf.workers.db');
goog.require('eckersdorf.work_schedule.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("db","initialize-db","db/initialize-db",230999070),(function (_,p__45312){
var vec__45313 = p__45312;
var ___$1 = cljs.core.nth.call(null,vec__45313,(0),null);
var load_storage_QMARK_ = cljs.core.nth.call(null,vec__45313,(1),null);
var db = cljs.core.merge.call(null,eckersdorf.db.core.default_db,eckersdorf.window.db.window_state,eckersdorf.view.db.view_state,eckersdorf.error.db.error_state,eckersdorf.user.login.db.login_state,eckersdorf.user.db.user_state,eckersdorf.process.db.process_state,eckersdorf.workplaces.db.workplaces_state,eckersdorf.workers.db.workers_state,eckersdorf.work_schedule.db.work_schedule_state);
return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("db","load-storage","db/load-storage",171544095),(function (db,p__45316){
var vec__45317 = p__45316;
var _ = cljs.core.nth.call(null,vec__45317,(0),null);
var force_QMARK_ = cljs.core.nth.call(null,vec__45317,(1),null);
var map__45320 = eckersdorf.db.core.load_local_storage.call(null);
var map__45320__$1 = ((((!((map__45320 == null)))?((((map__45320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45320):map__45320);
var storage = map__45320__$1;
var last_login = cljs.core.get.call(null,map__45320__$1,new cljs.core.Keyword("user","last-login","user/last-login",-513275033));
if(cljs.core.truth_((function (){var or__30522__auto__ = force_QMARK_;
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
var and__30510__auto__ = last_login;
if(cljs.core.truth_(and__30510__auto__)){
return cljs_time.core.before_QMARK_.call(null,cljs_time.core.now.call(null),cljs_time.core.plus.call(null,last_login,cljs_time.core.months.call(null,(1))));
} else {
return and__30510__auto__;
}
}
})())){
return cljs.core.merge.call(null,db,storage);
} else {
return db;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("db","merge-db","db/merge-db",-2107570316),(function (db,p__45322){
var vec__45323 = p__45322;
var _ = cljs.core.nth.call(null,vec__45323,(0),null);
var state = cljs.core.nth.call(null,vec__45323,(1),null);
return cljs.core.merge.call(null,db,state);
}));

//# sourceMappingURL=events.js.map?rel=1510703504102
