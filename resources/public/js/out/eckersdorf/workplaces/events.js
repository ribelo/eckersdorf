// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.workplaces.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('taoensso.timbre');
goog.require('taoensso.encore');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),(function (p__41869){
var map__41870 = p__41869;
var map__41870__$1 = ((((!((map__41870 == null)))?((((map__41870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41870):map__41870);
var db = cljs.core.get.call(null,map__41870__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/workplaces",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list-success","workplaces/request-list-success",-779516114)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list-failure","workplaces/request-list-failure",141779967)], null)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),new cljs.core.Keyword(null,"desc","desc",2093485764),"requesting workplaces list"], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list-success","workplaces/request-list-success",-779516114),(function (p__41872,p__41873){
var map__41874 = p__41872;
var map__41874__$1 = ((((!((map__41874 == null)))?((((map__41874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41874):map__41874);
var db = cljs.core.get.call(null,map__41874__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41875 = p__41873;
var _ = cljs.core.nth.call(null,vec__41875,(0),null);
var response = cljs.core.nth.call(null,vec__41875,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","list","workplaces/list",852308376),response),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list-failure","workplaces/request-list-failure",141779967),(function (p__41879,p__41880){
var map__41881 = p__41879;
var map__41881__$1 = ((((!((map__41881 == null)))?((((map__41881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41881):map__41881);
var db = cljs.core.get.call(null,map__41881__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41882 = p__41880;
var _ = cljs.core.nth.call(null,vec__41882,(0),null);
var response = cljs.core.nth.call(null,vec__41882,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-create","workplaces/request-create",-939879574),(function (p__41886,_){
var map__41887 = p__41886;
var map__41887__$1 = ((((!((map__41887 == null)))?((((map__41887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41887):map__41887);
var db = cljs.core.get.call(null,map__41887__$1,new cljs.core.Keyword(null,"db","db",993250759));
var workplace = new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237).cljs$core$IFn$_invoke$arity$1(db);
cljs.core.println.call(null,workplace);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workplaces"),new cljs.core.Keyword(null,"params","params",710516235),workplace,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-update-success","workplaces/request-update-success",1631317555)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-update-failure","workplaces/request-update-failure",-626669673)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update-success","workplaces/request-update-success",1631317555),(function (p__41889,p__41890){
var map__41891 = p__41889;
var map__41891__$1 = ((((!((map__41891 == null)))?((((map__41891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41891):map__41891);
var db = cljs.core.get.call(null,map__41891__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41892 = p__41890;
var _ = cljs.core.nth.call(null,vec__41892,(0),null);
var response = cljs.core.nth.call(null,vec__41892,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"eckersdorf.workplaces.events","/tmp/form-init3168265846117069849.clj",52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__41891,map__41891__$1,db,vec__41892,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});})(map__41891,map__41891__$1,db,vec__41892,_,response))
,null)),null,900412313);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,response)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update-failure","workplaces/request-update-failure",-626669673),(function (p__41896,p__41897){
var map__41898 = p__41896;
var map__41898__$1 = ((((!((map__41898 == null)))?((((map__41898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41898):map__41898);
var db = cljs.core.get.call(null,map__41898__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41899 = p__41897;
var _ = cljs.core.nth.call(null,vec__41899,(0),null);
var response = cljs.core.nth.call(null,vec__41899,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workplaces","set-workplace-form","workplaces/set-workplace-form",2062868738),(function (db,p__41903){
var vec__41904 = p__41903;
var _ = cljs.core.nth.call(null,vec__41904,(0),null);
var workplace = cljs.core.nth.call(null,vec__41904,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237),workplace);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","create-workplace-dialog","workplaces/create-workplace-dialog",758786805),(function (_,___$1){
var empty_workplace = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("workplace","name","workplace/name",-1414028077),null,new cljs.core.Keyword("workplace","type","workplace/type",-9855694),"dc",new cljs.core.Keyword("workplace","email-address","workplace/email-address",-2014908542),null,new cljs.core.Keyword("workplace","address","workplace/address",-479372496),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("address","street-name","address/street-name",2138263693),null,new cljs.core.Keyword("address","street-number","address/street-number",-280098867),null,new cljs.core.Keyword("address","house-number","address/house-number",1162238039),null,new cljs.core.Keyword("address","zip-code","address/zip-code",147739068),null,new cljs.core.Keyword("address","city","address/city",-1506334306),null], null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","set-workplace-form","workplaces/set-workplace-form",2062868738),empty_workplace], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","toggle-dialog","workplaces/toggle-dialog",-1320592473)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","modify-workplace-dialog","workplaces/modify-workplace-dialog",1910824027),(function (_,p__41907){
var vec__41908 = p__41907;
var ___$1 = cljs.core.nth.call(null,vec__41908,(0),null);
var workplace = cljs.core.nth.call(null,vec__41908,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","set-workplace-form","workplaces/set-workplace-form",2062868738),workplace], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","toggle-dialog","workplaces/toggle-dialog",-1320592473)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workplaces","toggle-dialog","workplaces/toggle-dialog",-1320592473),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("workplaces","show-dialog?","workplaces/show-dialog?",1298196099),cljs.core.not);
}));
re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237)], null));

//# sourceMappingURL=events.js.map?rel=1507763678987
