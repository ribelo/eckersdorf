// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.user.login.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('eckersdorf.db.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","set-email-address","login/set-email-address",-1716802526),(function (db,p__43903){
var vec__43904 = p__43903;
var _ = cljs.core.nth.call(null,vec__43904,(0),null);
var email = cljs.core.nth.call(null,vec__43904,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("login","email-address","login/email-address",-870577041),email);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","set-password","login/set-password",-937455710),(function (db,p__43907){
var vec__43908 = p__43907;
var _ = cljs.core.nth.call(null,vec__43908,(0),null);
var password = cljs.core.nth.call(null,vec__43908,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("login","password","login/password",464605936),password);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","set-invalid-password","login/set-invalid-password",-441133969),(function (db,p__43911){
var vec__43912 = p__43911;
var _ = cljs.core.nth.call(null,vec__43912,(0),null);
var status = cljs.core.nth.call(null,vec__43912,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("login","invalid-password?","login/invalid-password?",-1029257272),status);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","toggle-remember","login/toggle-remember",-742081227),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("login","remember?","login/remember?",44966347),cljs.core.not);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","request-login","login/request-login",-6563777),(function (p__43915,_){
var map__43916 = p__43915;
var map__43916__$1 = ((((!((map__43916 == null)))?((((map__43916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43916):map__43916);
var db = cljs.core.get.call(null,map__43916__$1,new cljs.core.Keyword(null,"db","db",993250759));
cljs.core.println.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email-address","email-address",-910550248),new cljs.core.Keyword("login","email-address","login/email-address",-870577041).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword("login","password","login/password",464605936).cljs$core$IFn$_invoke$arity$1(db)], null));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/users/login",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email-address","email-address",-910550248),new cljs.core.Keyword("login","email-address","login/email-address",-870577041).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword("login","password","login/password",464605936).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.url_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","request-login-success","login/request-login-success",1643197465)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","request-login-failure","login/request-login-failure",1582510396)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","request-login-success","login/request-login-success",1643197465),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (p__43918,p__43919){
var map__43920 = p__43918;
var map__43920__$1 = ((((!((map__43920 == null)))?((((map__43920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43920):map__43920);
var db = cljs.core.get.call(null,map__43920__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43921 = p__43919;
var _ = cljs.core.nth.call(null,vec__43921,(0),null);
var response = cljs.core.nth.call(null,vec__43921,(1),null);
cljs.core.println.call(null,clojure.set.rename_keys.call(null,cljs.core.update.call(null,response,new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),cljs_time.coerce.from_string),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),new cljs.core.Keyword("user","object-id","user/object-id",-759418702)], null)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,clojure.set.rename_keys.call(null,cljs.core.update.call(null,response,new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),cljs_time.coerce.from_string),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),new cljs.core.Keyword("user","object-id","user/object-id",-759418702)], null))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("login","request-login","login/request-login",-6563777)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set-invalid-password","login/set-invalid-password",-441133969),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","refresh-last-login","user/refresh-last-login",-341546479)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","request-login-failure","login/request-login-failure",1582510396),(function (p__43925,p__43926){
var map__43927 = p__43925;
var map__43927__$1 = ((((!((map__43927 == null)))?((((map__43927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43927):map__43927);
var db = cljs.core.get.call(null,map__43927__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43928 = p__43926;
var _ = cljs.core.nth.call(null,vec__43928,(0),null);
var map__43931 = cljs.core.nth.call(null,vec__43928,(1),null);
var map__43931__$1 = ((((!((map__43931 == null)))?((((map__43931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43931):map__43931);
var response = map__43931__$1;
var status = cljs.core.get.call(null,map__43931__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var G__43934 = status;
switch (G__43934) {
case (401):
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set-invalid-password","login/set-invalid-password",-441133969),true], null)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("login","request-login","login/request-login",-6563777)], null)], null)], null);

}
}));

//# sourceMappingURL=events.js.map?rel=1507757462411
