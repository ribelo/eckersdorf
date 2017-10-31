// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.workplaces.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('taoensso.timbre');
goog.require('taoensso.encore');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),(function (p__44053){
var map__44054 = p__44053;
var map__44054__$1 = ((((!((map__44054 == null)))?((((map__44054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44054):map__44054);
var db = cljs.core.get.call(null,map__44054__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/workplaces",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list-success","workplaces/request-list-success",-779516114)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list-failure","workplaces/request-list-failure",141779967)], null)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),new cljs.core.Keyword(null,"desc","desc",2093485764),"requesting workplaces list"], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list-success","workplaces/request-list-success",-779516114),(function (p__44056,p__44057){
var map__44058 = p__44056;
var map__44058__$1 = ((((!((map__44058 == null)))?((((map__44058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44058):map__44058);
var db = cljs.core.get.call(null,map__44058__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44059 = p__44057;
var _ = cljs.core.nth.call(null,vec__44059,(0),null);
var response = cljs.core.nth.call(null,vec__44059,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","list","workplaces/list",852308376),response),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie pobrano list\u0119 obiekt\u00F3w",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-list-failure","workplaces/request-list-failure",141779967),(function (p__44063,p__44064){
var map__44065 = p__44063;
var map__44065__$1 = ((((!((map__44065 == null)))?((((map__44065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44065):map__44065);
var db = cljs.core.get.call(null,map__44065__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44066 = p__44064;
var _ = cljs.core.nth.call(null,vec__44066,(0),null);
var map__44069 = cljs.core.nth.call(null,vec__44066,(1),null);
var map__44069__$1 = ((((!((map__44069 == null)))?((((map__44069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44069):map__44069);
var response = map__44069__$1;
var status_text = cljs.core.get.call(null,map__44069__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy pobieraniu listy obiekt\u00F3w: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-create","workplaces/request-create",-939879574),(function (p__44072,_){
var map__44073 = p__44072;
var map__44073__$1 = ((((!((map__44073 == null)))?((((map__44073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44073):map__44073);
var db = cljs.core.get.call(null,map__44073__$1,new cljs.core.Keyword(null,"db","db",993250759));
var workplace = new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workplaces"),new cljs.core.Keyword(null,"params","params",710516235),workplace,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-create-success","workplaces/request-create-success",-1290831073)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-create-failure","workplaces/request-create-failure",-167436845)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-create-success","workplaces/request-create-success",-1290831073),(function (p__44075,p__44076){
var map__44077 = p__44075;
var map__44077__$1 = ((((!((map__44077 == null)))?((((map__44077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44077):map__44077);
var db = cljs.core.get.call(null,map__44077__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44078 = p__44076;
var _ = cljs.core.nth.call(null,vec__44078,(0),null);
var response = cljs.core.nth.call(null,vec__44078,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"eckersdorf.workplaces.events","/tmp/form-init6794852216488370137.clj",57,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__44077,map__44077__$1,db,vec__44078,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});})(map__44077,map__44077__$1,db,vec__44078,_,response))
,null)),null,-537612251);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,response),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","hide-dialog","workplaces/hide-dialog",34869870)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie dodane obiekt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-create-failure","workplaces/request-create-failure",-167436845),(function (p__44082,p__44083){
var map__44084 = p__44082;
var map__44084__$1 = ((((!((map__44084 == null)))?((((map__44084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44084):map__44084);
var db = cljs.core.get.call(null,map__44084__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44085 = p__44083;
var _ = cljs.core.nth.call(null,vec__44085,(0),null);
var map__44088 = cljs.core.nth.call(null,vec__44085,(1),null);
var map__44088__$1 = ((((!((map__44088 == null)))?((((map__44088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44088):map__44088);
var response = map__44088__$1;
var status_text = cljs.core.get.call(null,map__44088__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy dodawaniu obiektu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-delete","workplaces/request-delete",1562757236),(function (p__44091,p__44092){
var map__44093 = p__44091;
var map__44093__$1 = ((((!((map__44093 == null)))?((((map__44093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44093):map__44093);
var db = cljs.core.get.call(null,map__44093__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44094 = p__44092;
var _ = cljs.core.nth.call(null,vec__44094,(0),null);
var id = cljs.core.nth.call(null,vec__44094,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workplaces",id),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.text_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-delete-success","workplaces/request-delete-success",2036698860)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-delete-failure","workplaces/request-delete-failure",-1253492897)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-delete-success","workplaces/request-delete-success",2036698860),(function (p__44098,p__44099){
var map__44100 = p__44098;
var map__44100__$1 = ((((!((map__44100 == null)))?((((map__44100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44100):map__44100);
var db = cljs.core.get.call(null,map__44100__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44101 = p__44099;
var _ = cljs.core.nth.call(null,vec__44101,(0),null);
var response = cljs.core.nth.call(null,vec__44101,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"eckersdorf.workplaces.events","/tmp/form-init6794852216488370137.clj",90,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__44100,map__44100__$1,db,vec__44101,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});})(map__44100,map__44100__$1,db,vec__44101,_,response))
,null)),null,-333371687);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,response),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to obiekt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-delete-failure","workplaces/request-delete-failure",-1253492897),(function (p__44105,p__44106){
var map__44107 = p__44105;
var map__44107__$1 = ((((!((map__44107 == null)))?((((map__44107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44107):map__44107);
var db = cljs.core.get.call(null,map__44107__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44108 = p__44106;
var _ = cljs.core.nth.call(null,vec__44108,(0),null);
var map__44111 = cljs.core.nth.call(null,vec__44108,(1),null);
var map__44111__$1 = ((((!((map__44111 == null)))?((((map__44111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44111):map__44111);
var response = map__44111__$1;
var status_text = cljs.core.get.call(null,map__44111__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu obiektu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),(function (p__44114,_){
var map__44115 = p__44114;
var map__44115__$1 = ((((!((map__44115 == null)))?((((map__44115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44115):map__44115);
var db = cljs.core.get.call(null,map__44115__$1,new cljs.core.Keyword(null,"db","db",993250759));
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null));
var workplace = cljs.core.dissoc.call(null,new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workplaces",id),new cljs.core.Keyword(null,"params","params",710516235),workplace,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-update-success","workplaces/request-update-success",1631317555)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-update-failure","workplaces/request-update-failure",-626669673)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update-success","workplaces/request-update-success",1631317555),(function (p__44117,p__44118){
var map__44119 = p__44117;
var map__44119__$1 = ((((!((map__44119 == null)))?((((map__44119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44119):map__44119);
var db = cljs.core.get.call(null,map__44119__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44120 = p__44118;
var _ = cljs.core.nth.call(null,vec__44120,(0),null);
var response = cljs.core.nth.call(null,vec__44120,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"eckersdorf.workplaces.events","/tmp/form-init6794852216488370137.clj",126,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__44119,map__44119__$1,db,vec__44120,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});})(map__44119,map__44119__$1,db,vec__44120,_,response))
,null)),null,-365926797);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,response),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","hide-dialog","workplaces/hide-dialog",34869870)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to obiekt",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","request-update-failure","workplaces/request-update-failure",-626669673),(function (p__44124,p__44125){
var map__44126 = p__44124;
var map__44126__$1 = ((((!((map__44126 == null)))?((((map__44126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44126):map__44126);
var db = cljs.core.get.call(null,map__44126__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44127 = p__44125;
var _ = cljs.core.nth.call(null,vec__44127,(0),null);
var map__44130 = cljs.core.nth.call(null,vec__44127,(1),null);
var map__44130__$1 = ((((!((map__44130 == null)))?((((map__44130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44130):map__44130);
var response = map__44130__$1;
var status_text = cljs.core.get.call(null,map__44130__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workplaces","request-update","workplaces/request-update",1547171640),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu obiektu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workplaces","set-workplace-form","workplaces/set-workplace-form",2062868738),(function (db,p__44133){
var vec__44134 = p__44133;
var _ = cljs.core.nth.call(null,vec__44134,(0),null);
var workplace = cljs.core.nth.call(null,vec__44134,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","workplace-form","workplaces/workplace-form",2000080237),workplace);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","create-workplace-dialog","workplaces/create-workplace-dialog",758786805),(function (_,___$1){
var empty_workplace = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("workplace","name","workplace/name",-1414028077),null,new cljs.core.Keyword("workplace","type","workplace/type",-9855694),"dc",new cljs.core.Keyword("workplace","email-address","workplace/email-address",-2014908542),null,new cljs.core.Keyword("workplace","address","workplace/address",-479372496),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("address","street-name","address/street-name",2138263693),null,new cljs.core.Keyword("address","street-number","address/street-number",-280098867),null,new cljs.core.Keyword("address","house-number","address/house-number",1162238039),null,new cljs.core.Keyword("address","zip-code","address/zip-code",147739068),null,new cljs.core.Keyword("address","city","address/city",-1506334306),null], null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","set-workplace-form","workplaces/set-workplace-form",2062868738),empty_workplace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","show-dialog","workplaces/show-dialog",-147935221),new cljs.core.Keyword(null,"create","create",-1301499256)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workplaces","modify-workplace-dialog","workplaces/modify-workplace-dialog",1910824027),(function (_,p__44137){
var vec__44138 = p__44137;
var ___$1 = cljs.core.nth.call(null,vec__44138,(0),null);
var workplace = cljs.core.nth.call(null,vec__44138,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","set-workplace-form","workplaces/set-workplace-form",2062868738),workplace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","show-dialog","workplaces/show-dialog",-147935221),new cljs.core.Keyword(null,"modify","modify",-1261040869)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workplaces","show-dialog","workplaces/show-dialog",-147935221),(function (db,p__44141){
var vec__44142 = p__44141;
var _ = cljs.core.nth.call(null,vec__44142,(0),null);
var type = cljs.core.nth.call(null,vec__44142,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","show-dialog?","workplaces/show-dialog?",1298196099),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workplaces","hide-dialog","workplaces/hide-dialog",34869870),(function (db,p__44145){
var vec__44146 = p__44145;
var _ = cljs.core.nth.call(null,vec__44146,(0),null);
var type = cljs.core.nth.call(null,vec__44146,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workplaces","show-dialog?","workplaces/show-dialog?",1298196099),type);
}));

//# sourceMappingURL=events.js.map?rel=1509397947670
