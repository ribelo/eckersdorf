// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.workplaces.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('taoensso.timbre');
goog.require('taoensso.encore');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),(function (p__40006){
var map__40007 = p__40006;
var map__40007__$1 = ((((!((map__40007 == null)))?((((map__40007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40007):map__40007);
var db = cljs.core.get.call(null,map__40007__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/workplaces",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list-success","workplaces/request-list-success",-779516114)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list-failure","workplaces/request-list-failure",141779967)], null)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),new cljs.core.Keyword(null,"desc","desc",2093485764),"requesting workplaces list"], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list-success","workplaces/request-list-success",-779516114),(function (p__40009,p__40010){
var map__40011 = p__40009;
var map__40011__$1 = ((((!((map__40011 == null)))?((((map__40011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40011):map__40011);
var db = cljs.core.get.call(null,map__40011__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40012 = p__40010;
var _ = cljs.core.nth.call(null,vec__40012,(0),null);
var response = cljs.core.nth.call(null,vec__40012,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","list","workplaces/list",852308376),response),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list-failure","workplaces/request-list-failure",141779967),(function (p__40016,p__40017){
var map__40018 = p__40016;
var map__40018__$1 = ((((!((map__40018 == null)))?((((map__40018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40018):map__40018);
var db = cljs.core.get.call(null,map__40018__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40019 = p__40017;
var _ = cljs.core.nth.call(null,vec__40019,(0),null);
var response = cljs.core.nth.call(null,vec__40019,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),(function (p__40023,_){
var map__40024 = p__40023;
var map__40024__$1 = ((((!((map__40024 == null)))?((((map__40024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40024):map__40024);
var db = cljs.core.get.call(null,map__40024__$1,new cljs.core.Keyword(null,"db","db",993250759));
var workplaces_id = new cljs.core.Keyword("workplaces","object-id","workplaces/object-id",-810287260).cljs$core$IFn$_invoke$arity$1(db);
var workplaces = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"email-address","email-address",-910550248),new cljs.core.Keyword("workplaces","email-address","workplaces/email-address",-180101765).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"phone-number","phone-number",453925028),new cljs.core.Keyword("workplaces","phone-number","workplaces/phone-number",391713213).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"first-name","first-name",-1559982131),new cljs.core.Keyword("workplaces","first-name","workplaces/first-name",-1617833550).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"last-name","last-name",-1695738974),new cljs.core.Keyword("workplaces","last-name","workplaces/last-name",1700680195).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword("workplaces","token","workplaces/token",-1139127500).cljs$core$IFn$_invoke$arity$1(db)], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workplacess/",workplaces_id,"update"),new cljs.core.Keyword(null,"params","params",710516235),workplaces,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.url_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-update-success","workplaces/request-update-success",1631317555)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-update-failure","workplaces/request-update-failure",-626669673)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update-success","workplaces/request-update-success",1631317555),(function (p__40026,p__40027){
var map__40028 = p__40026;
var map__40028__$1 = ((((!((map__40028 == null)))?((((map__40028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40028):map__40028);
var db = cljs.core.get.call(null,map__40028__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40029 = p__40027;
var _ = cljs.core.nth.call(null,vec__40029,(0),null);
var response = cljs.core.nth.call(null,vec__40029,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"eckersdorf.workplaces.events","/tmp/form-init7775163415538507422.clj",58,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__40028,map__40028__$1,db,vec__40029,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});})(map__40028,map__40028__$1,db,vec__40029,_,response))
,null)),null,1707388321);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,response)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update-failure","workplaces/request-update-failure",-626669673),(function (p__40033,p__40034){
var map__40035 = p__40033;
var map__40035__$1 = ((((!((map__40035 == null)))?((((map__40035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40035):map__40035);
var db = cljs.core.get.call(null,map__40035__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40036 = p__40034;
var _ = cljs.core.nth.call(null,vec__40036,(0),null);
var response = cljs.core.nth.call(null,vec__40036,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1506628924541
