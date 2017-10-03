// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.user.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('taoensso.timbre');
goog.require('taoensso.encore');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("user","logout","user/logout",1413770948),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("user","object-id","user/object-id",-759418702),null,new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),null,new cljs.core.Keyword("user","last-name","user/last-name",-1699346595),null,new cljs.core.Keyword("user","email-address","user/email-address",-902625587),null,new cljs.core.Keyword("user","phone-number","user/phone-number",449922287),null,new cljs.core.Keyword("user","addresses","user/addresses",-539005673),null,new cljs.core.Keyword("user","roles","user/roles",130427029),null,new cljs.core.Keyword("user","token","user/token",-1199473138),null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("user","set-first-name","user/set-first-name",207588561),(function (db,p__43817){
var vec__43818 = p__43817;
var _ = cljs.core.nth.call(null,vec__43818,(0),null);
var first_name = cljs.core.nth.call(null,vec__43818,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),first_name);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("user","set-last-name","user/set-last-name",-1524400017),(function (db,p__43821){
var vec__43822 = p__43821;
var _ = cljs.core.nth.call(null,vec__43822,(0),null);
var last_name = cljs.core.nth.call(null,vec__43822,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("user","set-last-name","user/set-last-name",-1524400017),last_name);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("user","set-email-address","user/set-email-address",-1886211964),(function (db,p__43825){
var vec__43826 = p__43825;
var _ = cljs.core.nth.call(null,vec__43826,(0),null);
var email_address = cljs.core.nth.call(null,vec__43826,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("user","set-email-address","user/set-email-address",-1886211964),email_address);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("user","set-phone-number","user/set-phone-number",570586055),(function (db,p__43829){
var vec__43830 = p__43829;
var _ = cljs.core.nth.call(null,vec__43830,(0),null);
var phone_number = cljs.core.nth.call(null,vec__43830,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("user","set-phone-number","user/set-phone-number",570586055),phone_number);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("user","request-update","user/request-update",1510973894),(function (p__43833,_){
var map__43834 = p__43833;
var map__43834__$1 = ((((!((map__43834 == null)))?((((map__43834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43834):map__43834);
var db = cljs.core.get.call(null,map__43834__$1,new cljs.core.Keyword(null,"db","db",993250759));
var user_id = new cljs.core.Keyword("user","object-id","user/object-id",-759418702).cljs$core$IFn$_invoke$arity$1(db);
var user = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"email-address","email-address",-910550248),new cljs.core.Keyword("user","email-address","user/email-address",-902625587).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"phone-number","phone-number",453925028),new cljs.core.Keyword("user","phone-number","user/phone-number",449922287).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"first-name","first-name",-1559982131),new cljs.core.Keyword("user","first-name","user/first-name",-1564894072).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"last-name","last-name",-1695738974),new cljs.core.Keyword("user","last-name","user/last-name",-1699346595).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword("user","token","user/token",-1199473138).cljs$core$IFn$_invoke$arity$1(db)], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/users/",user_id,"update"),new cljs.core.Keyword(null,"params","params",710516235),user,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.url_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","request-update-success","user/request-update-success",1709439749)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","request-update-failure","user/request-update-failure",-689072023)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("user","request-update-success","user/request-update-success",1709439749),(function (p__43836,p__43837){
var map__43838 = p__43836;
var map__43838__$1 = ((((!((map__43838 == null)))?((((map__43838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43838):map__43838);
var db = cljs.core.get.call(null,map__43838__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43839 = p__43837;
var _ = cljs.core.nth.call(null,vec__43839,(0),null);
var response = cljs.core.nth.call(null,vec__43839,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"eckersdorf.user.events","/tmp/form-init8597948343343544720.clj",67,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__43838,map__43838__$1,db,vec__43839,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});})(map__43838,map__43838__$1,db,vec__43839,_,response))
,null)),null,1496665284);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,response)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("user","request-update-failure","user/request-update-failure",-689072023),(function (p__43843,p__43844){
var map__43845 = p__43843;
var map__43845__$1 = ((((!((map__43845 == null)))?((((map__43845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43845):map__43845);
var db = cljs.core.get.call(null,map__43845__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43846 = p__43844;
var _ = cljs.core.nth.call(null,vec__43846,(0),null);
var response = cljs.core.nth.call(null,vec__43846,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("user","request-update","user/request-update",1510973894),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1506985652576
