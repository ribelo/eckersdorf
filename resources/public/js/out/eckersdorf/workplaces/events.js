// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.workplaces.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('taoensso.timbre');
goog.require('taoensso.encore');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),(function (p__43895){
var map__43896 = p__43895;
var map__43896__$1 = ((((!((map__43896 == null)))?((((map__43896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43896):map__43896);
var db = cljs.core.get.call(null,map__43896__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/workplaces",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list-success","workplaces/request-list-success",-779516114)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list-failure","workplaces/request-list-failure",141779967)], null)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),new cljs.core.Keyword(null,"desc","desc",2093485764),"requesting workplaces list"], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list-success","workplaces/request-list-success",-779516114),(function (p__43898,p__43899){
var map__43900 = p__43898;
var map__43900__$1 = ((((!((map__43900 == null)))?((((map__43900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43900):map__43900);
var db = cljs.core.get.call(null,map__43900__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43901 = p__43899;
var _ = cljs.core.nth.call(null,vec__43901,(0),null);
var response = cljs.core.nth.call(null,vec__43901,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","list","workplaces/list",852308376),response),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie pobrano list\u0119 obiekt\u00F3w",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list-failure","workplaces/request-list-failure",141779967),(function (p__43905,p__43906){
var map__43907 = p__43905;
var map__43907__$1 = ((((!((map__43907 == null)))?((((map__43907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43907):map__43907);
var db = cljs.core.get.call(null,map__43907__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43908 = p__43906;
var _ = cljs.core.nth.call(null,vec__43908,(0),null);
var map__43911 = cljs.core.nth.call(null,vec__43908,(1),null);
var map__43911__$1 = ((((!((map__43911 == null)))?((((map__43911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43911):map__43911);
var response = map__43911__$1;
var status_text = cljs.core.get.call(null,map__43911__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy pobieraniu listy obiekt\u00F3w: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-create","workplaces/request-create",-939879574),(function (p__43914,_){
var map__43915 = p__43914;
var map__43915__$1 = ((((!((map__43915 == null)))?((((map__43915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43915):map__43915);
var db = cljs.core.get.call(null,map__43915__$1,new cljs.core.Keyword(null,"db","db",993250759));
var workplace = new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workplaces"),new cljs.core.Keyword(null,"params","params",710516235),workplace,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-create-success","workplaces/request-create-success",-1290831073)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-create-failure","workplaces/request-create-failure",-167436845)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-create-success","workplaces/request-create-success",-1290831073),(function (p__43917,p__43918){
var map__43919 = p__43917;
var map__43919__$1 = ((((!((map__43919 == null)))?((((map__43919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43919):map__43919);
var db = cljs.core.get.call(null,map__43919__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43920 = p__43918;
var _ = cljs.core.nth.call(null,vec__43920,(0),null);
var response = cljs.core.nth.call(null,vec__43920,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"eckersdorf.workplaces.events","/tmp/form-init4624309513201810004.clj",57,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__43919,map__43919__$1,db,vec__43920,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});})(map__43919,map__43919__$1,db,vec__43920,_,response))
,null)),null,1613509762);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,response),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","hide-dialog","workplaces/hide-dialog",34869870)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie dodane obiekt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-create-failure","workplaces/request-create-failure",-167436845),(function (p__43924,p__43925){
var map__43926 = p__43924;
var map__43926__$1 = ((((!((map__43926 == null)))?((((map__43926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43926):map__43926);
var db = cljs.core.get.call(null,map__43926__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43927 = p__43925;
var _ = cljs.core.nth.call(null,vec__43927,(0),null);
var map__43930 = cljs.core.nth.call(null,vec__43927,(1),null);
var map__43930__$1 = ((((!((map__43930 == null)))?((((map__43930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43930):map__43930);
var response = map__43930__$1;
var status_text = cljs.core.get.call(null,map__43930__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy dodawaniu obiektu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-delete","workplaces/request-delete",1562757236),(function (p__43933,p__43934){
var map__43935 = p__43933;
var map__43935__$1 = ((((!((map__43935 == null)))?((((map__43935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43935):map__43935);
var db = cljs.core.get.call(null,map__43935__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43936 = p__43934;
var _ = cljs.core.nth.call(null,vec__43936,(0),null);
var id = cljs.core.nth.call(null,vec__43936,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workplaces",id),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.text_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-delete-success","workplaces/request-delete-success",2036698860)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-delete-failure","workplaces/request-delete-failure",-1253492897)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-delete-success","workplaces/request-delete-success",2036698860),(function (p__43940,p__43941){
var map__43942 = p__43940;
var map__43942__$1 = ((((!((map__43942 == null)))?((((map__43942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43942):map__43942);
var db = cljs.core.get.call(null,map__43942__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43943 = p__43941;
var _ = cljs.core.nth.call(null,vec__43943,(0),null);
var response = cljs.core.nth.call(null,vec__43943,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"eckersdorf.workplaces.events","/tmp/form-init4624309513201810004.clj",90,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__43942,map__43942__$1,db,vec__43943,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});})(map__43942,map__43942__$1,db,vec__43943,_,response))
,null)),null,-1775312987);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,response),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to obiekt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-delete-failure","workplaces/request-delete-failure",-1253492897),(function (p__43947,p__43948){
var map__43949 = p__43947;
var map__43949__$1 = ((((!((map__43949 == null)))?((((map__43949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43949):map__43949);
var db = cljs.core.get.call(null,map__43949__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43950 = p__43948;
var _ = cljs.core.nth.call(null,vec__43950,(0),null);
var map__43953 = cljs.core.nth.call(null,vec__43950,(1),null);
var map__43953__$1 = ((((!((map__43953 == null)))?((((map__43953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43953):map__43953);
var response = map__43953__$1;
var status_text = cljs.core.get.call(null,map__43953__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu obiektu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),(function (p__43956,_){
var map__43957 = p__43956;
var map__43957__$1 = ((((!((map__43957 == null)))?((((map__43957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43957):map__43957);
var db = cljs.core.get.call(null,map__43957__$1,new cljs.core.Keyword(null,"db","db",993250759));
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null));
var workplace = cljs.core.dissoc.call(null,new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
cljs.core.println.call(null,new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),id,workplace);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workplaces",id),new cljs.core.Keyword(null,"params","params",710516235),workplace,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-update-success","workplaces/request-update-success",1631317555)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-update-failure","workplaces/request-update-failure",-626669673)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update-success","workplaces/request-update-success",1631317555),(function (p__43959,p__43960){
var map__43961 = p__43959;
var map__43961__$1 = ((((!((map__43961 == null)))?((((map__43961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43961):map__43961);
var db = cljs.core.get.call(null,map__43961__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43962 = p__43960;
var _ = cljs.core.nth.call(null,vec__43962,(0),null);
var response = cljs.core.nth.call(null,vec__43962,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"eckersdorf.workplaces.events","/tmp/form-init4624309513201810004.clj",127,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__43961,map__43961__$1,db,vec__43962,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});})(map__43961,map__43961__$1,db,vec__43962,_,response))
,null)),null,-38964196);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,response),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","hide-dialog","workplaces/hide-dialog",34869870)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to obiekt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update-failure","workplaces/request-update-failure",-626669673),(function (p__43966,p__43967){
var map__43968 = p__43966;
var map__43968__$1 = ((((!((map__43968 == null)))?((((map__43968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43968):map__43968);
var db = cljs.core.get.call(null,map__43968__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43969 = p__43967;
var _ = cljs.core.nth.call(null,vec__43969,(0),null);
var map__43972 = cljs.core.nth.call(null,vec__43969,(1),null);
var map__43972__$1 = ((((!((map__43972 == null)))?((((map__43972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43972):map__43972);
var response = map__43972__$1;
var status_text = cljs.core.get.call(null,map__43972__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu obiektu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workplaces","set-workplace-form","workplaces/set-workplace-form",2062868738),(function (db,p__43975){
var vec__43976 = p__43975;
var _ = cljs.core.nth.call(null,vec__43976,(0),null);
var workplace = cljs.core.nth.call(null,vec__43976,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237),workplace);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","create-workplace-dialog","workplaces/create-workplace-dialog",758786805),(function (_,___$1){
var empty_workplace = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("workplace","name","workplace/name",-1414028077),null,new cljs.core.Keyword("workplace","type","workplace/type",-9855694),"dc",new cljs.core.Keyword("workplace","email-address","workplace/email-address",-2014908542),null,new cljs.core.Keyword("workplace","address","workplace/address",-479372496),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("address","street-name","address/street-name",2138263693),null,new cljs.core.Keyword("address","street-number","address/street-number",-280098867),null,new cljs.core.Keyword("address","house-number","address/house-number",1162238039),null,new cljs.core.Keyword("address","zip-code","address/zip-code",147739068),null,new cljs.core.Keyword("address","city","address/city",-1506334306),null], null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","set-workplace-form","workplaces/set-workplace-form",2062868738),empty_workplace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","show-dialog","workplaces/show-dialog",-147935221),new cljs.core.Keyword(null,"create","create",-1301499256)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","modify-workplace-dialog","workplaces/modify-workplace-dialog",1910824027),(function (_,p__43979){
var vec__43980 = p__43979;
var ___$1 = cljs.core.nth.call(null,vec__43980,(0),null);
var workplace = cljs.core.nth.call(null,vec__43980,(1),null);
cljs.core.println.call(null,workplace);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","set-workplace-form","workplaces/set-workplace-form",2062868738),workplace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","show-dialog","workplaces/show-dialog",-147935221),new cljs.core.Keyword(null,"modify","modify",-1261040869)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workplaces","show-dialog","workplaces/show-dialog",-147935221),(function (db,p__43983){
var vec__43984 = p__43983;
var _ = cljs.core.nth.call(null,vec__43984,(0),null);
var type = cljs.core.nth.call(null,vec__43984,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","show-dialog?","workplaces/show-dialog?",1298196099),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workplaces","hide-dialog","workplaces/hide-dialog",34869870),(function (db,p__43987){
var vec__43988 = p__43987;
var _ = cljs.core.nth.call(null,vec__43988,(0),null);
var type = cljs.core.nth.call(null,vec__43988,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","show-dialog?","workplaces/show-dialog?",1298196099),type);
}));

//# sourceMappingURL=events.js.map?rel=1508862160690
