// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.workers.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('taoensso.timbre');
goog.require('taoensso.encore');
goog.require('eckersdorf.workers.db');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166),(function (p__47495){
var map__47496 = p__47495;
var map__47496__$1 = ((((!((map__47496 == null)))?((((map__47496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47496):map__47496);
var db = cljs.core.get.call(null,map__47496__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/workers",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-list-success","workers/request-list-success",-281859802)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-list-failure","workers/request-list-failure",739901991)], null)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166),new cljs.core.Keyword(null,"desc","desc",2093485764),"requesting workers list"], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-list-success","workers/request-list-success",-281859802),(function (p__47498,p__47499){
var map__47500 = p__47498;
var map__47500__$1 = ((((!((map__47500 == null)))?((((map__47500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47500):map__47500);
var db = cljs.core.get.call(null,map__47500__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47501 = p__47499;
var _ = cljs.core.nth.call(null,vec__47501,(0),null);
var map__47504 = cljs.core.nth.call(null,vec__47501,(1),null);
var map__47504__$1 = ((((!((map__47504 == null)))?((((map__47504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47504):map__47504);
var data = cljs.core.get.call(null,map__47504__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie pobrano list\u0119 pracownik\u00F3w",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-list-failure","workers/request-list-failure",739901991),(function (p__47507,p__47508){
var map__47509 = p__47507;
var map__47509__$1 = ((((!((map__47509 == null)))?((((map__47509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47509):map__47509);
var db = cljs.core.get.call(null,map__47509__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47510 = p__47508;
var _ = cljs.core.nth.call(null,vec__47510,(0),null);
var map__47513 = cljs.core.nth.call(null,vec__47510,(1),null);
var map__47513__$1 = ((((!((map__47513 == null)))?((((map__47513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47513):map__47513);
var response = map__47513__$1;
var status_text = cljs.core.get.call(null,map__47513__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy pobieraniu listy pracownik\u00F3w: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-create","workers/request-create",652227090),(function (p__47516,_){
var map__47517 = p__47516;
var map__47517__$1 = ((((!((map__47517 == null)))?((((map__47517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47517):map__47517);
var db = cljs.core.get.call(null,map__47517__$1,new cljs.core.Keyword(null,"db","db",993250759));
var worker = new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workers"),new cljs.core.Keyword(null,"params","params",710516235),worker,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-create-success","workers/request-create-success",313073863)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-create-failure","workers/request-create-failure",-1804894053)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-create-success","workers/request-create-success",313073863),(function (p__47519,p__47520){
var map__47521 = p__47519;
var map__47521__$1 = ((((!((map__47521 == null)))?((((map__47521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47521):map__47521);
var db = cljs.core.get.call(null,map__47521__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47522 = p__47520;
var _ = cljs.core.nth.call(null,vec__47522,(0),null);
var map__47525 = cljs.core.nth.call(null,vec__47522,(1),null);
var map__47525__$1 = ((((!((map__47525 == null)))?((((map__47525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47525):map__47525);
var data = cljs.core.get.call(null,map__47525__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie dodano pracownika",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-create-failure","workers/request-create-failure",-1804894053),(function (p__47528,p__47529){
var map__47530 = p__47528;
var map__47530__$1 = ((((!((map__47530 == null)))?((((map__47530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47530):map__47530);
var db = cljs.core.get.call(null,map__47530__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47531 = p__47529;
var _ = cljs.core.nth.call(null,vec__47531,(0),null);
var map__47534 = cljs.core.nth.call(null,vec__47531,(1),null);
var map__47534__$1 = ((((!((map__47534 == null)))?((((map__47534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47534):map__47534);
var response = map__47534__$1;
var status_text = cljs.core.get.call(null,map__47534__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy dodawaniu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-delete","workers/request-delete",-68343540),(function (p__47537,p__47538){
var map__47539 = p__47537;
var map__47539__$1 = ((((!((map__47539 == null)))?((((map__47539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47539):map__47539);
var db = cljs.core.get.call(null,map__47539__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47540 = p__47538;
var _ = cljs.core.nth.call(null,vec__47540,(0),null);
var id = cljs.core.nth.call(null,vec__47540,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workers",id),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.text_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-delete-success","workers/request-delete-success",420229524)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-delete-failure","workers/request-delete-failure",1442207751)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-delete-success","workers/request-delete-success",420229524),(function (p__47544,p__47545){
var map__47546 = p__47544;
var map__47546__$1 = ((((!((map__47546 == null)))?((((map__47546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47546):map__47546);
var db = cljs.core.get.call(null,map__47546__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47547 = p__47545;
var _ = cljs.core.nth.call(null,vec__47547,(0),null);
var map__47550 = cljs.core.nth.call(null,vec__47547,(1),null);
var map__47550__$1 = ((((!((map__47550 == null)))?((((map__47550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47550):map__47550);
var data = cljs.core.get.call(null,map__47550__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to pracowinka",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-delete-failure","workers/request-delete-failure",1442207751),(function (p__47553,p__47554){
var map__47555 = p__47553;
var map__47555__$1 = ((((!((map__47555 == null)))?((((map__47555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47555):map__47555);
var db = cljs.core.get.call(null,map__47555__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47556 = p__47554;
var _ = cljs.core.nth.call(null,vec__47556,(0),null);
var map__47559 = cljs.core.nth.call(null,vec__47556,(1),null);
var map__47559__$1 = ((((!((map__47559 == null)))?((((map__47559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47559):map__47559);
var response = map__47559__$1;
var status_text = cljs.core.get.call(null,map__47559__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),(function (p__47562,_){
var map__47563 = p__47562;
var map__47563__$1 = ((((!((map__47563 == null)))?((((map__47563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47563):map__47563);
var db = cljs.core.get.call(null,map__47563__$1,new cljs.core.Keyword(null,"db","db",993250759));
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null));
var worker = cljs.core.dissoc.call(null,new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
cljs.core.println.call(null,new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),id,worker);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workers",id),new cljs.core.Keyword(null,"params","params",710516235),worker,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-update-success","workers/request-update-success",-1162522597)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-update-failure","workers/request-update-failure",-235312801)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-update-success","workers/request-update-success",-1162522597),(function (p__47565,p__47566){
var map__47567 = p__47565;
var map__47567__$1 = ((((!((map__47567 == null)))?((((map__47567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47567):map__47567);
var db = cljs.core.get.call(null,map__47567__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47568 = p__47566;
var _ = cljs.core.nth.call(null,vec__47568,(0),null);
var map__47571 = cljs.core.nth.call(null,vec__47568,(1),null);
var map__47571__$1 = ((((!((map__47571 == null)))?((((map__47571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47571):map__47571);
var data = cljs.core.get.call(null,map__47571__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie uaktualniono pracownika",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-update-failure","workers/request-update-failure",-235312801),(function (p__47574,p__47575){
var map__47576 = p__47574;
var map__47576__$1 = ((((!((map__47576 == null)))?((((map__47576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47576):map__47576);
var db = cljs.core.get.call(null,map__47576__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47577 = p__47575;
var _ = cljs.core.nth.call(null,vec__47577,(0),null);
var map__47580 = cljs.core.nth.call(null,vec__47577,(1),null);
var map__47580__$1 = ((((!((map__47580 == null)))?((((map__47580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47580):map__47580);
var response = map__47580__$1;
var status_text = cljs.core.get.call(null,map__47580__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy uaktualnianiu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),(function (db,p__47583){
var vec__47584 = p__47583;
var _ = cljs.core.nth.call(null,vec__47584,(0),null);
var worker = cljs.core.nth.call(null,vec__47584,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617),worker);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","create-worker-dialog","workers/create-worker-dialog",1176847078),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),eckersdorf.workers.db.empty_worker], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","show-dialog","workers/show-dialog",-1755327965),new cljs.core.Keyword(null,"create","create",-1301499256)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","modify-worker-dialog","workers/modify-worker-dialog",1703643381),(function (_,p__47587){
var vec__47588 = p__47587;
var ___$1 = cljs.core.nth.call(null,vec__47588,(0),null);
var worker = cljs.core.nth.call(null,vec__47588,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),worker], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","show-dialog","workers/show-dialog",-1755327965),new cljs.core.Keyword(null,"modify","modify",-1261040869)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","show-dialog","workers/show-dialog",-1755327965),(function (db,p__47591){
var vec__47592 = p__47591;
var _ = cljs.core.nth.call(null,vec__47592,(0),null);
var type = cljs.core.nth.call(null,vec__47592,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766),(function (db,p__47595){
var vec__47596 = p__47595;
var _ = cljs.core.nth.call(null,vec__47596,(0),null);
var type = cljs.core.nth.call(null,vec__47596,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),type);
}));

//# sourceMappingURL=events.js.map?rel=1508793172983
