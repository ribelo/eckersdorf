// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.login.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","set-email-address!","login/set-email-address!",-845735511),(function (db,p__35284){
var vec__35285 = p__35284;
var _ = cljs.core.nth.call(null,vec__35285,(0),null);
var email = cljs.core.nth.call(null,vec__35285,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("login","email-address","login/email-address",-870577041),email);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","set-password!","login/set-password!",764014747),(function (db,p__35288){
var vec__35289 = p__35288;
var _ = cljs.core.nth.call(null,vec__35289,(0),null);
var password = cljs.core.nth.call(null,vec__35289,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("login","password","login/password",464605936),password);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","set-invalid-password!","login/set-invalid-password!",1940004357),(function (db,p__35292){
var vec__35293 = p__35292;
var _ = cljs.core.nth.call(null,vec__35293,(0),null);
var status = cljs.core.nth.call(null,vec__35293,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("login","invalid-password?","login/invalid-password?",-1029257272),status);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","request-login","login/request-login",-6563777),(function (p__35296,_){
var map__35297 = p__35296;
var map__35297__$1 = ((((!((map__35297 == null)))?((((map__35297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35297):map__35297);
var db = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"db","db",993250759));
cljs.core.println.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email-address","email-address",-910550248),new cljs.core.Keyword("login","email-address","login/email-address",-870577041).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword("login","password","login/password",464605936).cljs$core$IFn$_invoke$arity$1(db)], null));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/users/login",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email-address","email-address",-910550248),new cljs.core.Keyword("login","email-address","login/email-address",-870577041).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword("login","password","login/password",464605936).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.url_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","request-login-success","login/request-login-success",1643197465)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","request-login-failure","login/request-login-failure",1582510396)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","request-login-success","login/request-login-success",1643197465),(function (p__35299,p__35300){
var map__35301 = p__35299;
var map__35301__$1 = ((((!((map__35301 == null)))?((((map__35301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35301):map__35301);
var db = cljs.core.get.call(null,map__35301__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35302 = p__35300;
var _ = cljs.core.nth.call(null,vec__35302,(0),null);
var response = cljs.core.nth.call(null,vec__35302,(1),null);
cljs.core.println.call(null,clojure.set.rename_keys.call(null,cljs.core.update.call(null,response,new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),cljs_time.coerce.from_string),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),new cljs.core.Keyword("user","object-id","user/object-id",-759418702)], null)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,clojure.set.rename_keys.call(null,cljs.core.update.call(null,response,new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),cljs_time.coerce.from_string),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),new cljs.core.Keyword("user","object-id","user/object-id",-759418702)], null))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("login","request-login","login/request-login",-6563777)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set-invalid-password!","login/set-invalid-password!",1940004357),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","toggle-dialog","login/toggle-dialog",-990901549)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","request-login-failure","login/request-login-failure",1582510396),(function (p__35306,p__35307){
var map__35308 = p__35306;
var map__35308__$1 = ((((!((map__35308 == null)))?((((map__35308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35308):map__35308);
var db = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35309 = p__35307;
var _ = cljs.core.nth.call(null,vec__35309,(0),null);
var map__35312 = cljs.core.nth.call(null,vec__35309,(1),null);
var map__35312__$1 = ((((!((map__35312 == null)))?((((map__35312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35312):map__35312);
var response = map__35312__$1;
var status = cljs.core.get.call(null,map__35312__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var G__35315 = status;
switch (G__35315) {
case (401):
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set-invalid-password!","login/set-invalid-password!",1940004357),true], null)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("login","request-login","login/request-login",-6563777)], null)], null)], null);

}
}));

//# sourceMappingURL=events.js.map?rel=1506028216927
