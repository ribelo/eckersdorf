// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.user.login.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('eckersdorf.db.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","set-email-address","login/set-email-address",-1716802526),(function (db,p__43995){
var vec__43996 = p__43995;
var _ = cljs.core.nth.call(null,vec__43996,(0),null);
var email = cljs.core.nth.call(null,vec__43996,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("login","email-address","login/email-address",-870577041),email);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","set-password","login/set-password",-937455710),(function (db,p__43999){
var vec__44000 = p__43999;
var _ = cljs.core.nth.call(null,vec__44000,(0),null);
var password = cljs.core.nth.call(null,vec__44000,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("login","password","login/password",464605936),password);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","set-invalid-password","login/set-invalid-password",-441133969),(function (db,p__44003){
var vec__44004 = p__44003;
var _ = cljs.core.nth.call(null,vec__44004,(0),null);
var status = cljs.core.nth.call(null,vec__44004,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("login","invalid-password?","login/invalid-password?",-1029257272),status);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","toggle-remember","login/toggle-remember",-742081227),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("login","remember?","login/remember?",44966347),cljs.core.not);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","request-login","login/request-login",-6563777),(function (p__44007,_){
var map__44008 = p__44007;
var map__44008__$1 = ((((!((map__44008 == null)))?((((map__44008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44008):map__44008);
var db = cljs.core.get.call(null,map__44008__$1,new cljs.core.Keyword(null,"db","db",993250759));
cljs.core.println.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email-address","email-address",-910550248),new cljs.core.Keyword("login","email-address","login/email-address",-870577041).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword("login","password","login/password",464605936).cljs$core$IFn$_invoke$arity$1(db)], null));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/users/login",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email-address","email-address",-910550248),new cljs.core.Keyword("login","email-address","login/email-address",-870577041).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword("login","password","login/password",464605936).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.url_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","request-login-success","login/request-login-success",1643197465)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","request-login-failure","login/request-login-failure",1582510396)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","request-login-success","login/request-login-success",1643197465),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (p__44010,p__44011){
var map__44012 = p__44010;
var map__44012__$1 = ((((!((map__44012 == null)))?((((map__44012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44012):map__44012);
var db = cljs.core.get.call(null,map__44012__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44013 = p__44011;
var _ = cljs.core.nth.call(null,vec__44013,(0),null);
var response = cljs.core.nth.call(null,vec__44013,(1),null);
cljs.core.println.call(null,clojure.set.rename_keys.call(null,cljs.core.update.call(null,response,new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),cljs_time.coerce.from_string),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),new cljs.core.Keyword("user","object-id","user/object-id",-759418702)], null)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,clojure.set.rename_keys.call(null,cljs.core.update.call(null,response,new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),cljs_time.coerce.from_string),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),new cljs.core.Keyword("user","object-id","user/object-id",-759418702)], null))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("login","request-login","login/request-login",-6563777)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set-invalid-password","login/set-invalid-password",-441133969),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","refresh-last-login","user/refresh-last-login",-341546479)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","request-login-failure","login/request-login-failure",1582510396),(function (p__44017,p__44018){
var map__44019 = p__44017;
var map__44019__$1 = ((((!((map__44019 == null)))?((((map__44019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44019):map__44019);
var db = cljs.core.get.call(null,map__44019__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44020 = p__44018;
var _ = cljs.core.nth.call(null,vec__44020,(0),null);
var map__44023 = cljs.core.nth.call(null,vec__44020,(1),null);
var map__44023__$1 = ((((!((map__44023 == null)))?((((map__44023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44023):map__44023);
var response = map__44023__$1;
var status = cljs.core.get.call(null,map__44023__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var G__44026 = status;
switch (G__44026) {
case (401):
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set-invalid-password","login/set-invalid-password",-441133969),true], null)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("login","request-login","login/request-login",-6563777)], null)], null)], null);

}
}));

//# sourceMappingURL=events.js.map?rel=1508862160715
