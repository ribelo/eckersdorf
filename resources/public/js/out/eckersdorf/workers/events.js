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
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166),(function (p__53747){
var map__53748 = p__53747;
var map__53748__$1 = ((((!((map__53748 == null)))?((((map__53748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53748):map__53748);
var db = cljs.core.get.call(null,map__53748__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/workers",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-list-success","workers/request-list-success",-281859802)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-list-failure","workers/request-list-failure",739901991)], null)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166),new cljs.core.Keyword(null,"desc","desc",2093485764),"requesting workers list"], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-list-success","workers/request-list-success",-281859802),(function (p__53750,p__53751){
var map__53752 = p__53750;
var map__53752__$1 = ((((!((map__53752 == null)))?((((map__53752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53752):map__53752);
var db = cljs.core.get.call(null,map__53752__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53753 = p__53751;
var _ = cljs.core.nth.call(null,vec__53753,(0),null);
var map__53756 = cljs.core.nth.call(null,vec__53753,(1),null);
var map__53756__$1 = ((((!((map__53756 == null)))?((((map__53756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53756):map__53756);
var data = cljs.core.get.call(null,map__53756__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie pobrano list\u0119 pracownik\u00F3w",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-list-failure","workers/request-list-failure",739901991),(function (p__53759,p__53760){
var map__53761 = p__53759;
var map__53761__$1 = ((((!((map__53761 == null)))?((((map__53761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53761):map__53761);
var db = cljs.core.get.call(null,map__53761__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53762 = p__53760;
var _ = cljs.core.nth.call(null,vec__53762,(0),null);
var map__53765 = cljs.core.nth.call(null,vec__53762,(1),null);
var map__53765__$1 = ((((!((map__53765 == null)))?((((map__53765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53765):map__53765);
var response = map__53765__$1;
var status_text = cljs.core.get.call(null,map__53765__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy pobieraniu listy pracownik\u00F3w: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-create","workers/request-create",652227090),(function (p__53768,_){
var map__53769 = p__53768;
var map__53769__$1 = ((((!((map__53769 == null)))?((((map__53769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53769):map__53769);
var db = cljs.core.get.call(null,map__53769__$1,new cljs.core.Keyword(null,"db","db",993250759));
var worker = new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workers"),new cljs.core.Keyword(null,"params","params",710516235),worker,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-create-success","workers/request-create-success",313073863)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-create-failure","workers/request-create-failure",-1804894053)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-create-success","workers/request-create-success",313073863),(function (p__53771,p__53772){
var map__53773 = p__53771;
var map__53773__$1 = ((((!((map__53773 == null)))?((((map__53773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53773):map__53773);
var db = cljs.core.get.call(null,map__53773__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53774 = p__53772;
var _ = cljs.core.nth.call(null,vec__53774,(0),null);
var map__53777 = cljs.core.nth.call(null,vec__53774,(1),null);
var map__53777__$1 = ((((!((map__53777 == null)))?((((map__53777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53777):map__53777);
var data = cljs.core.get.call(null,map__53777__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie dodano pracownika",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-create-failure","workers/request-create-failure",-1804894053),(function (p__53780,p__53781){
var map__53782 = p__53780;
var map__53782__$1 = ((((!((map__53782 == null)))?((((map__53782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53782):map__53782);
var db = cljs.core.get.call(null,map__53782__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53783 = p__53781;
var _ = cljs.core.nth.call(null,vec__53783,(0),null);
var map__53786 = cljs.core.nth.call(null,vec__53783,(1),null);
var map__53786__$1 = ((((!((map__53786 == null)))?((((map__53786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53786):map__53786);
var response = map__53786__$1;
var status_text = cljs.core.get.call(null,map__53786__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy dodawaniu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-delete","workers/request-delete",-68343540),(function (p__53789,p__53790){
var map__53791 = p__53789;
var map__53791__$1 = ((((!((map__53791 == null)))?((((map__53791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53791):map__53791);
var db = cljs.core.get.call(null,map__53791__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53792 = p__53790;
var _ = cljs.core.nth.call(null,vec__53792,(0),null);
var id = cljs.core.nth.call(null,vec__53792,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workers",id),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.text_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-delete-success","workers/request-delete-success",420229524)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-delete-failure","workers/request-delete-failure",1442207751)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-delete-success","workers/request-delete-success",420229524),(function (p__53796,p__53797){
var map__53798 = p__53796;
var map__53798__$1 = ((((!((map__53798 == null)))?((((map__53798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53798):map__53798);
var db = cljs.core.get.call(null,map__53798__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53799 = p__53797;
var _ = cljs.core.nth.call(null,vec__53799,(0),null);
var map__53802 = cljs.core.nth.call(null,vec__53799,(1),null);
var map__53802__$1 = ((((!((map__53802 == null)))?((((map__53802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53802):map__53802);
var data = cljs.core.get.call(null,map__53802__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to pracowinka",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-delete-failure","workers/request-delete-failure",1442207751),(function (p__53805,p__53806){
var map__53807 = p__53805;
var map__53807__$1 = ((((!((map__53807 == null)))?((((map__53807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53807):map__53807);
var db = cljs.core.get.call(null,map__53807__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53808 = p__53806;
var _ = cljs.core.nth.call(null,vec__53808,(0),null);
var map__53811 = cljs.core.nth.call(null,vec__53808,(1),null);
var map__53811__$1 = ((((!((map__53811 == null)))?((((map__53811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53811):map__53811);
var response = map__53811__$1;
var status_text = cljs.core.get.call(null,map__53811__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),(function (p__53814,_){
var map__53815 = p__53814;
var map__53815__$1 = ((((!((map__53815 == null)))?((((map__53815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53815):map__53815);
var db = cljs.core.get.call(null,map__53815__$1,new cljs.core.Keyword(null,"db","db",993250759));
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null));
var worker = cljs.core.dissoc.call(null,new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
cljs.core.println.call(null,new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),id,worker);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workers",id),new cljs.core.Keyword(null,"params","params",710516235),worker,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-update-success","workers/request-update-success",-1162522597)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-update-failure","workers/request-update-failure",-235312801)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-update-success","workers/request-update-success",-1162522597),(function (p__53817,p__53818){
var map__53819 = p__53817;
var map__53819__$1 = ((((!((map__53819 == null)))?((((map__53819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53819):map__53819);
var db = cljs.core.get.call(null,map__53819__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53820 = p__53818;
var _ = cljs.core.nth.call(null,vec__53820,(0),null);
var map__53823 = cljs.core.nth.call(null,vec__53820,(1),null);
var map__53823__$1 = ((((!((map__53823 == null)))?((((map__53823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53823):map__53823);
var data = cljs.core.get.call(null,map__53823__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie uaktualniono pracownika",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-update-failure","workers/request-update-failure",-235312801),(function (p__53826,p__53827){
var map__53828 = p__53826;
var map__53828__$1 = ((((!((map__53828 == null)))?((((map__53828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53828):map__53828);
var db = cljs.core.get.call(null,map__53828__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53829 = p__53827;
var _ = cljs.core.nth.call(null,vec__53829,(0),null);
var map__53832 = cljs.core.nth.call(null,vec__53829,(1),null);
var map__53832__$1 = ((((!((map__53832 == null)))?((((map__53832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53832):map__53832);
var response = map__53832__$1;
var status_text = cljs.core.get.call(null,map__53832__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy uaktualnianiu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),(function (db,p__53835){
var vec__53836 = p__53835;
var _ = cljs.core.nth.call(null,vec__53836,(0),null);
var worker = cljs.core.nth.call(null,vec__53836,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617),worker);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","create-worker-dialog","workers/create-worker-dialog",1176847078),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),eckersdorf.workers.db.empty_worker], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),new cljs.core.Keyword(null,"create","create",-1301499256)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","modify-worker-dialog","workers/modify-worker-dialog",1703643381),(function (_,p__53839){
var vec__53840 = p__53839;
var ___$1 = cljs.core.nth.call(null,vec__53840,(0),null);
var worker = cljs.core.nth.call(null,vec__53840,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),worker], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),new cljs.core.Keyword(null,"modify","modify",-1261040869)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),(function (db,p__53843){
var vec__53844 = p__53843;
var _ = cljs.core.nth.call(null,vec__53844,(0),null);
var type = cljs.core.nth.call(null,vec__53844,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),null);
}));

//# sourceMappingURL=events.js.map?rel=1508862993136
