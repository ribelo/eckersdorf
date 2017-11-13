// Compiled by ClojureScript 1.9.946 {}
goog.provide('eckersdorf.user.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","object-id","user/object-id",-759418702),(function (db,_){
return new cljs.core.Keyword("user","object-id","user/object-id",-759418702).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),(function (db,_){
return new cljs.core.Keyword("user","first-name","user/first-name",-1564894072).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","last-name","user/last-name",-1699346595),(function (db,_){
return new cljs.core.Keyword("user","last-name","user/last-name",-1699346595).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","email-address","user/email-address",-902625587),(function (db,_){
return new cljs.core.Keyword("user","email-address","user/email-address",-902625587).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","token","user/token",-1199473138),(function (db,_){
return new cljs.core.Keyword("user","token","user/token",-1199473138).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","roles","user/roles",130427029),(function (db,_){
return new cljs.core.Keyword("user","roles","user/roles",130427029).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","permissions","user/permissions",55542912),(function (db,_){
return new cljs.core.Keyword("user","permissions","user/permissions",55542912).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","admin?","user/admin?",-380045250),(function (db,_){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,new cljs.core.Keyword("user","roles","user/roles",130427029).cljs$core$IFn$_invoke$arity$1(db)),"admin");
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","moderator?","user/moderator?",-1643695315),(function (db,_){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,new cljs.core.Keyword("user","roles","user/roles",130427029).cljs$core$IFn$_invoke$arity$1(db)),"moderator");
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","admin-or-moderator?","user/admin-or-moderator?",1276690555),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","admin?","user/admin?",-380045250)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","moderator?","user/moderator?",-1643695315)], null),(function (p__44613,_){
var vec__44614 = p__44613;
var admin_QMARK_ = cljs.core.nth.call(null,vec__44614,(0),null);
var moderator_QMARK_ = cljs.core.nth.call(null,vec__44614,(1),null);
var or__30522__auto__ = admin_QMARK_;
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return moderator_QMARK_;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","personal-data","user/personal-data",-1584646157),(function (db,_){
return cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),new cljs.core.Keyword("user","last-name","user/last-name",-1699346595),new cljs.core.Keyword("user","email-address","user/email-address",-902625587),new cljs.core.Keyword("user","phone-number","user/phone-number",449922287)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","logged-in?","user/logged-in?",-657925498),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","token","user/token",-1199473138)], null),(function (token){
return !((token == null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("user","last-login","user/last-login",-513275033),(function (db,_){
return new cljs.core.Keyword("user","last-login","user/last-login",-513275033).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1510602151838
