// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.user.login.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('eckersdorf.db.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","set-email-address","login/set-email-address",-1716802526),(function (db,p__44368){
var vec__44369 = p__44368;
var _ = cljs.core.nth.call(null,vec__44369,(0),null);
var email = cljs.core.nth.call(null,vec__44369,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("login","email-address","login/email-address",-870577041),email);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","set-password","login/set-password",-937455710),(function (db,p__44372){
var vec__44373 = p__44372;
var _ = cljs.core.nth.call(null,vec__44373,(0),null);
var password = cljs.core.nth.call(null,vec__44373,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("login","password","login/password",464605936),password);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","set-invalid-password","login/set-invalid-password",-441133969),(function (db,p__44376){
var vec__44377 = p__44376;
var _ = cljs.core.nth.call(null,vec__44377,(0),null);
var status = cljs.core.nth.call(null,vec__44377,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("login","invalid-password?","login/invalid-password?",-1029257272),status);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","toggle-remember","login/toggle-remember",-742081227),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("login","remember?","login/remember?",44966347),cljs.core.not);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","request-login","login/request-login",-6563777),(function (p__44380,_){
var map__44381 = p__44380;
var map__44381__$1 = ((((!((map__44381 == null)))?((((map__44381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44381):map__44381);
var db = cljs.core.get.call(null,map__44381__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/users/login",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email-address","email-address",-910550248),new cljs.core.Keyword("login","email-address","login/email-address",-870577041).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword("login","password","login/password",464605936).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.url_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","request-login-success","login/request-login-success",1643197465)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","request-login-failure","login/request-login-failure",1582510396)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","request-login-success","login/request-login-success",1643197465),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.db.core.__GT_local_storage], null),(function (p__44383,p__44384){
var map__44385 = p__44383;
var map__44385__$1 = ((((!((map__44385 == null)))?((((map__44385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44385):map__44385);
var db = cljs.core.get.call(null,map__44385__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44386 = p__44384;
var _ = cljs.core.nth.call(null,vec__44386,(0),null);
var response = cljs.core.nth.call(null,vec__44386,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,clojure.set.rename_keys.call(null,cljs.core.update.call(null,response,new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),cljs_time.coerce.from_string),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),new cljs.core.Keyword("user","object-id","user/object-id",-759418702)], null))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("login","request-login","login/request-login",-6563777)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set-invalid-password","login/set-invalid-password",-441133969),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","refresh-last-login","user/refresh-last-login",-341546479)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","request-login-failure","login/request-login-failure",1582510396),(function (p__44390,p__44391){
var map__44392 = p__44390;
var map__44392__$1 = ((((!((map__44392 == null)))?((((map__44392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44392):map__44392);
var db = cljs.core.get.call(null,map__44392__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44393 = p__44391;
var _ = cljs.core.nth.call(null,vec__44393,(0),null);
var map__44396 = cljs.core.nth.call(null,vec__44393,(1),null);
var map__44396__$1 = ((((!((map__44396 == null)))?((((map__44396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44396):map__44396);
var response = map__44396__$1;
var status = cljs.core.get.call(null,map__44396__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var G__44399 = status;
switch (G__44399) {
case (401):
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set-invalid-password","login/set-invalid-password",-441133969),true], null)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("login","request-login","login/request-login",-6563777)], null)], null)], null);

}
}));

//# sourceMappingURL=events.js.map?rel=1509397947842
