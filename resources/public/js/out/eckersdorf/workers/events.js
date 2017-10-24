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
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166),(function (p__47613){
var map__47614 = p__47613;
var map__47614__$1 = ((((!((map__47614 == null)))?((((map__47614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47614):map__47614);
var db = cljs.core.get.call(null,map__47614__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/workers",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-list-success","workers/request-list-success",-281859802)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-list-failure","workers/request-list-failure",739901991)], null)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166),new cljs.core.Keyword(null,"desc","desc",2093485764),"requesting workers list"], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-list-success","workers/request-list-success",-281859802),(function (p__47616,p__47617){
var map__47618 = p__47616;
var map__47618__$1 = ((((!((map__47618 == null)))?((((map__47618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47618):map__47618);
var db = cljs.core.get.call(null,map__47618__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47619 = p__47617;
var _ = cljs.core.nth.call(null,vec__47619,(0),null);
var map__47622 = cljs.core.nth.call(null,vec__47619,(1),null);
var map__47622__$1 = ((((!((map__47622 == null)))?((((map__47622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47622):map__47622);
var data = cljs.core.get.call(null,map__47622__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie pobrano list\u0119 pracownik\u00F3w",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-list-failure","workers/request-list-failure",739901991),(function (p__47625,p__47626){
var map__47627 = p__47625;
var map__47627__$1 = ((((!((map__47627 == null)))?((((map__47627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47627):map__47627);
var db = cljs.core.get.call(null,map__47627__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47628 = p__47626;
var _ = cljs.core.nth.call(null,vec__47628,(0),null);
var map__47631 = cljs.core.nth.call(null,vec__47628,(1),null);
var map__47631__$1 = ((((!((map__47631 == null)))?((((map__47631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47631):map__47631);
var response = map__47631__$1;
var status_text = cljs.core.get.call(null,map__47631__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy pobieraniu listy pracownik\u00F3w: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-create","workers/request-create",652227090),(function (p__47634,_){
var map__47635 = p__47634;
var map__47635__$1 = ((((!((map__47635 == null)))?((((map__47635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47635):map__47635);
var db = cljs.core.get.call(null,map__47635__$1,new cljs.core.Keyword(null,"db","db",993250759));
var worker = new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workers"),new cljs.core.Keyword(null,"params","params",710516235),worker,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-create-success","workers/request-create-success",313073863)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-create-failure","workers/request-create-failure",-1804894053)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-create-success","workers/request-create-success",313073863),(function (p__47637,p__47638){
var map__47639 = p__47637;
var map__47639__$1 = ((((!((map__47639 == null)))?((((map__47639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47639):map__47639);
var db = cljs.core.get.call(null,map__47639__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47640 = p__47638;
var _ = cljs.core.nth.call(null,vec__47640,(0),null);
var map__47643 = cljs.core.nth.call(null,vec__47640,(1),null);
var map__47643__$1 = ((((!((map__47643 == null)))?((((map__47643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47643):map__47643);
var data = cljs.core.get.call(null,map__47643__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie dodano pracownika",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-create-failure","workers/request-create-failure",-1804894053),(function (p__47646,p__47647){
var map__47648 = p__47646;
var map__47648__$1 = ((((!((map__47648 == null)))?((((map__47648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47648):map__47648);
var db = cljs.core.get.call(null,map__47648__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47649 = p__47647;
var _ = cljs.core.nth.call(null,vec__47649,(0),null);
var map__47652 = cljs.core.nth.call(null,vec__47649,(1),null);
var map__47652__$1 = ((((!((map__47652 == null)))?((((map__47652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47652):map__47652);
var response = map__47652__$1;
var status_text = cljs.core.get.call(null,map__47652__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy dodawaniu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-delete","workers/request-delete",-68343540),(function (p__47655,p__47656){
var map__47657 = p__47655;
var map__47657__$1 = ((((!((map__47657 == null)))?((((map__47657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47657):map__47657);
var db = cljs.core.get.call(null,map__47657__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47658 = p__47656;
var _ = cljs.core.nth.call(null,vec__47658,(0),null);
var id = cljs.core.nth.call(null,vec__47658,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workers",id),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.text_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-delete-success","workers/request-delete-success",420229524)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-delete-failure","workers/request-delete-failure",1442207751)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-delete-success","workers/request-delete-success",420229524),(function (p__47662,p__47663){
var map__47664 = p__47662;
var map__47664__$1 = ((((!((map__47664 == null)))?((((map__47664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47664):map__47664);
var db = cljs.core.get.call(null,map__47664__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47665 = p__47663;
var _ = cljs.core.nth.call(null,vec__47665,(0),null);
var map__47668 = cljs.core.nth.call(null,vec__47665,(1),null);
var map__47668__$1 = ((((!((map__47668 == null)))?((((map__47668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47668):map__47668);
var data = cljs.core.get.call(null,map__47668__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to pracowinka",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-delete-failure","workers/request-delete-failure",1442207751),(function (p__47671,p__47672){
var map__47673 = p__47671;
var map__47673__$1 = ((((!((map__47673 == null)))?((((map__47673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47673):map__47673);
var db = cljs.core.get.call(null,map__47673__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47674 = p__47672;
var _ = cljs.core.nth.call(null,vec__47674,(0),null);
var map__47677 = cljs.core.nth.call(null,vec__47674,(1),null);
var map__47677__$1 = ((((!((map__47677 == null)))?((((map__47677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47677):map__47677);
var response = map__47677__$1;
var status_text = cljs.core.get.call(null,map__47677__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),(function (p__47680,_){
var map__47681 = p__47680;
var map__47681__$1 = ((((!((map__47681 == null)))?((((map__47681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47681):map__47681);
var db = cljs.core.get.call(null,map__47681__$1,new cljs.core.Keyword(null,"db","db",993250759));
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null));
var worker = cljs.core.dissoc.call(null,new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
cljs.core.println.call(null,new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),id,worker);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workers",id),new cljs.core.Keyword(null,"params","params",710516235),worker,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-update-success","workers/request-update-success",-1162522597)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-update-failure","workers/request-update-failure",-235312801)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-update-success","workers/request-update-success",-1162522597),(function (p__47683,p__47684){
var map__47685 = p__47683;
var map__47685__$1 = ((((!((map__47685 == null)))?((((map__47685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47685):map__47685);
var db = cljs.core.get.call(null,map__47685__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47686 = p__47684;
var _ = cljs.core.nth.call(null,vec__47686,(0),null);
var map__47689 = cljs.core.nth.call(null,vec__47686,(1),null);
var map__47689__$1 = ((((!((map__47689 == null)))?((((map__47689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47689):map__47689);
var data = cljs.core.get.call(null,map__47689__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie uaktualniono pracownika",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-update-failure","workers/request-update-failure",-235312801),(function (p__47692,p__47693){
var map__47694 = p__47692;
var map__47694__$1 = ((((!((map__47694 == null)))?((((map__47694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47694):map__47694);
var db = cljs.core.get.call(null,map__47694__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47695 = p__47693;
var _ = cljs.core.nth.call(null,vec__47695,(0),null);
var map__47698 = cljs.core.nth.call(null,vec__47695,(1),null);
var map__47698__$1 = ((((!((map__47698 == null)))?((((map__47698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47698):map__47698);
var response = map__47698__$1;
var status_text = cljs.core.get.call(null,map__47698__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy uaktualnianiu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),(function (db,p__47701){
var vec__47702 = p__47701;
var _ = cljs.core.nth.call(null,vec__47702,(0),null);
var worker = cljs.core.nth.call(null,vec__47702,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617),worker);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","create-worker-dialog","workers/create-worker-dialog",1176847078),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),eckersdorf.workers.db.empty_worker], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","show-dialog","workers/show-dialog",-1755327965),new cljs.core.Keyword(null,"create","create",-1301499256)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","modify-worker-dialog","workers/modify-worker-dialog",1703643381),(function (_,p__47705){
var vec__47706 = p__47705;
var ___$1 = cljs.core.nth.call(null,vec__47706,(0),null);
var worker = cljs.core.nth.call(null,vec__47706,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),worker], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","show-dialog","workers/show-dialog",-1755327965),new cljs.core.Keyword(null,"modify","modify",-1261040869)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","show-dialog","workers/show-dialog",-1755327965),(function (db,p__47709){
var vec__47710 = p__47709;
var _ = cljs.core.nth.call(null,vec__47710,(0),null);
var type = cljs.core.nth.call(null,vec__47710,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766),(function (db,p__47713){
var vec__47714 = p__47713;
var _ = cljs.core.nth.call(null,vec__47714,(0),null);
var type = cljs.core.nth.call(null,vec__47714,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),type);
}));

//# sourceMappingURL=events.js.map?rel=1508793250845
