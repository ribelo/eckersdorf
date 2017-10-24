// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.workplaces.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('taoensso.timbre');
goog.require('taoensso.encore');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),(function (p__45001){
var map__45002 = p__45001;
var map__45002__$1 = ((((!((map__45002 == null)))?((((map__45002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45002):map__45002);
var db = cljs.core.get.call(null,map__45002__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/workplaces",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list-success","workplaces/request-list-success",-779516114)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list-failure","workplaces/request-list-failure",141779967)], null)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),new cljs.core.Keyword(null,"desc","desc",2093485764),"requesting workplaces list"], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list-success","workplaces/request-list-success",-779516114),(function (p__45004,p__45005){
var map__45006 = p__45004;
var map__45006__$1 = ((((!((map__45006 == null)))?((((map__45006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45006):map__45006);
var db = cljs.core.get.call(null,map__45006__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45007 = p__45005;
var _ = cljs.core.nth.call(null,vec__45007,(0),null);
var response = cljs.core.nth.call(null,vec__45007,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","list","workplaces/list",852308376),response),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie pobrano list\u0119 obiekt\u00F3w",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list-failure","workplaces/request-list-failure",141779967),(function (p__45011,p__45012){
var map__45013 = p__45011;
var map__45013__$1 = ((((!((map__45013 == null)))?((((map__45013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45013):map__45013);
var db = cljs.core.get.call(null,map__45013__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45014 = p__45012;
var _ = cljs.core.nth.call(null,vec__45014,(0),null);
var map__45017 = cljs.core.nth.call(null,vec__45014,(1),null);
var map__45017__$1 = ((((!((map__45017 == null)))?((((map__45017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45017):map__45017);
var response = map__45017__$1;
var status_text = cljs.core.get.call(null,map__45017__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy pobieraniu listy obiekt\u00F3w: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-create","workplaces/request-create",-939879574),(function (p__45020,_){
var map__45021 = p__45020;
var map__45021__$1 = ((((!((map__45021 == null)))?((((map__45021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45021):map__45021);
var db = cljs.core.get.call(null,map__45021__$1,new cljs.core.Keyword(null,"db","db",993250759));
var workplace = new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workplaces"),new cljs.core.Keyword(null,"params","params",710516235),workplace,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-create-success","workplaces/request-create-success",-1290831073)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-create-failure","workplaces/request-create-failure",-167436845)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-create-success","workplaces/request-create-success",-1290831073),(function (p__45023,p__45024){
var map__45025 = p__45023;
var map__45025__$1 = ((((!((map__45025 == null)))?((((map__45025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45025):map__45025);
var db = cljs.core.get.call(null,map__45025__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45026 = p__45024;
var _ = cljs.core.nth.call(null,vec__45026,(0),null);
var response = cljs.core.nth.call(null,vec__45026,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"eckersdorf.workplaces.events","/tmp/form-init2216660953966239457.clj",57,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__45025,map__45025__$1,db,vec__45026,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});})(map__45025,map__45025__$1,db,vec__45026,_,response))
,null)),null,-1180256348);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,response),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","hide-dialog","workplaces/hide-dialog",34869870)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie dodane obiekt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-create-failure","workplaces/request-create-failure",-167436845),(function (p__45030,p__45031){
var map__45032 = p__45030;
var map__45032__$1 = ((((!((map__45032 == null)))?((((map__45032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45032):map__45032);
var db = cljs.core.get.call(null,map__45032__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45033 = p__45031;
var _ = cljs.core.nth.call(null,vec__45033,(0),null);
var map__45036 = cljs.core.nth.call(null,vec__45033,(1),null);
var map__45036__$1 = ((((!((map__45036 == null)))?((((map__45036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45036):map__45036);
var response = map__45036__$1;
var status_text = cljs.core.get.call(null,map__45036__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy dodawaniu obiektu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-delete","workplaces/request-delete",1562757236),(function (p__45039,p__45040){
var map__45041 = p__45039;
var map__45041__$1 = ((((!((map__45041 == null)))?((((map__45041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45041):map__45041);
var db = cljs.core.get.call(null,map__45041__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45042 = p__45040;
var _ = cljs.core.nth.call(null,vec__45042,(0),null);
var id = cljs.core.nth.call(null,vec__45042,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workplaces",id),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.text_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-delete-success","workplaces/request-delete-success",2036698860)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-delete-failure","workplaces/request-delete-failure",-1253492897)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-delete-success","workplaces/request-delete-success",2036698860),(function (p__45046,p__45047){
var map__45048 = p__45046;
var map__45048__$1 = ((((!((map__45048 == null)))?((((map__45048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45048):map__45048);
var db = cljs.core.get.call(null,map__45048__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45049 = p__45047;
var _ = cljs.core.nth.call(null,vec__45049,(0),null);
var response = cljs.core.nth.call(null,vec__45049,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"eckersdorf.workplaces.events","/tmp/form-init2216660953966239457.clj",90,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__45048,map__45048__$1,db,vec__45049,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});})(map__45048,map__45048__$1,db,vec__45049,_,response))
,null)),null,-2053140499);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,response),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to obiekt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-delete-failure","workplaces/request-delete-failure",-1253492897),(function (p__45053,p__45054){
var map__45055 = p__45053;
var map__45055__$1 = ((((!((map__45055 == null)))?((((map__45055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45055):map__45055);
var db = cljs.core.get.call(null,map__45055__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45056 = p__45054;
var _ = cljs.core.nth.call(null,vec__45056,(0),null);
var map__45059 = cljs.core.nth.call(null,vec__45056,(1),null);
var map__45059__$1 = ((((!((map__45059 == null)))?((((map__45059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45059):map__45059);
var response = map__45059__$1;
var status_text = cljs.core.get.call(null,map__45059__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu obiektu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),(function (p__45062,_){
var map__45063 = p__45062;
var map__45063__$1 = ((((!((map__45063 == null)))?((((map__45063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45063):map__45063);
var db = cljs.core.get.call(null,map__45063__$1,new cljs.core.Keyword(null,"db","db",993250759));
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null));
var workplace = cljs.core.dissoc.call(null,new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
cljs.core.println.call(null,new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),id,workplace);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workplaces",id),new cljs.core.Keyword(null,"params","params",710516235),workplace,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-update-success","workplaces/request-update-success",1631317555)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-update-failure","workplaces/request-update-failure",-626669673)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update-success","workplaces/request-update-success",1631317555),(function (p__45065,p__45066){
var map__45067 = p__45065;
var map__45067__$1 = ((((!((map__45067 == null)))?((((map__45067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45067):map__45067);
var db = cljs.core.get.call(null,map__45067__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45068 = p__45066;
var _ = cljs.core.nth.call(null,vec__45068,(0),null);
var response = cljs.core.nth.call(null,vec__45068,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"eckersdorf.workplaces.events","/tmp/form-init2216660953966239457.clj",127,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__45067,map__45067__$1,db,vec__45068,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});})(map__45067,map__45067__$1,db,vec__45068,_,response))
,null)),null,878060008);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,response),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","hide-dialog","workplaces/hide-dialog",34869870)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to obiekt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update-failure","workplaces/request-update-failure",-626669673),(function (p__45072,p__45073){
var map__45074 = p__45072;
var map__45074__$1 = ((((!((map__45074 == null)))?((((map__45074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45074):map__45074);
var db = cljs.core.get.call(null,map__45074__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45075 = p__45073;
var _ = cljs.core.nth.call(null,vec__45075,(0),null);
var map__45078 = cljs.core.nth.call(null,vec__45075,(1),null);
var map__45078__$1 = ((((!((map__45078 == null)))?((((map__45078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45078):map__45078);
var response = map__45078__$1;
var status_text = cljs.core.get.call(null,map__45078__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu obiektu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workplaces","set-workplace-form","workplaces/set-workplace-form",2062868738),(function (db,p__45081){
var vec__45082 = p__45081;
var _ = cljs.core.nth.call(null,vec__45082,(0),null);
var workplace = cljs.core.nth.call(null,vec__45082,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237),workplace);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","create-workplace-dialog","workplaces/create-workplace-dialog",758786805),(function (_,___$1){
var empty_workplace = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("workplace","name","workplace/name",-1414028077),null,new cljs.core.Keyword("workplace","type","workplace/type",-9855694),"dc",new cljs.core.Keyword("workplace","email-address","workplace/email-address",-2014908542),null,new cljs.core.Keyword("workplace","address","workplace/address",-479372496),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("address","street-name","address/street-name",2138263693),null,new cljs.core.Keyword("address","street-number","address/street-number",-280098867),null,new cljs.core.Keyword("address","house-number","address/house-number",1162238039),null,new cljs.core.Keyword("address","zip-code","address/zip-code",147739068),null,new cljs.core.Keyword("address","city","address/city",-1506334306),null], null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","set-workplace-form","workplaces/set-workplace-form",2062868738),empty_workplace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","show-dialog","workplaces/show-dialog",-147935221),new cljs.core.Keyword(null,"create","create",-1301499256)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","modify-workplace-dialog","workplaces/modify-workplace-dialog",1910824027),(function (_,p__45085){
var vec__45086 = p__45085;
var ___$1 = cljs.core.nth.call(null,vec__45086,(0),null);
var workplace = cljs.core.nth.call(null,vec__45086,(1),null);
cljs.core.println.call(null,workplace);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","set-workplace-form","workplaces/set-workplace-form",2062868738),workplace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","show-dialog","workplaces/show-dialog",-147935221),new cljs.core.Keyword(null,"modify","modify",-1261040869)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workplaces","show-dialog","workplaces/show-dialog",-147935221),(function (db,p__45089){
var vec__45090 = p__45089;
var _ = cljs.core.nth.call(null,vec__45090,(0),null);
var type = cljs.core.nth.call(null,vec__45090,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","show-dialog?","workplaces/show-dialog?",1298196099),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workplaces","hide-dialog","workplaces/hide-dialog",34869870),(function (db,p__45093){
var vec__45094 = p__45093;
var _ = cljs.core.nth.call(null,vec__45094,(0),null);
var type = cljs.core.nth.call(null,vec__45094,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","show-dialog?","workplaces/show-dialog?",1298196099),type);
}));

//# sourceMappingURL=events.js.map?rel=1508189281385
