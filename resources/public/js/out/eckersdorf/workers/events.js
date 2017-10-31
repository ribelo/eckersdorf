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
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166),(function (p__47688){
var map__47689 = p__47688;
var map__47689__$1 = ((((!((map__47689 == null)))?((((map__47689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47689):map__47689);
var db = cljs.core.get.call(null,map__47689__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/workers",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-list-success","workers/request-list-success",-281859802)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-list-failure","workers/request-list-failure",739901991)], null)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166),new cljs.core.Keyword(null,"desc","desc",2093485764),"requesting workers list"], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-list-success","workers/request-list-success",-281859802),(function (p__47691,p__47692){
var map__47693 = p__47691;
var map__47693__$1 = ((((!((map__47693 == null)))?((((map__47693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47693):map__47693);
var db = cljs.core.get.call(null,map__47693__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47694 = p__47692;
var _ = cljs.core.nth.call(null,vec__47694,(0),null);
var map__47697 = cljs.core.nth.call(null,vec__47694,(1),null);
var map__47697__$1 = ((((!((map__47697 == null)))?((((map__47697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47697):map__47697);
var data = cljs.core.get.call(null,map__47697__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie pobrano list\u0119 pracownik\u00F3w",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-list-failure","workers/request-list-failure",739901991),(function (p__47700,p__47701){
var map__47702 = p__47700;
var map__47702__$1 = ((((!((map__47702 == null)))?((((map__47702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47702):map__47702);
var db = cljs.core.get.call(null,map__47702__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47703 = p__47701;
var _ = cljs.core.nth.call(null,vec__47703,(0),null);
var map__47706 = cljs.core.nth.call(null,vec__47703,(1),null);
var map__47706__$1 = ((((!((map__47706 == null)))?((((map__47706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47706):map__47706);
var response = map__47706__$1;
var status_text = cljs.core.get.call(null,map__47706__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy pobieraniu listy pracownik\u00F3w: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-create","workers/request-create",652227090),(function (p__47709,_){
var map__47710 = p__47709;
var map__47710__$1 = ((((!((map__47710 == null)))?((((map__47710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47710):map__47710);
var db = cljs.core.get.call(null,map__47710__$1,new cljs.core.Keyword(null,"db","db",993250759));
var worker = new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workers"),new cljs.core.Keyword(null,"params","params",710516235),worker,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-create-success","workers/request-create-success",313073863)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-create-failure","workers/request-create-failure",-1804894053)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-create-success","workers/request-create-success",313073863),(function (p__47712,p__47713){
var map__47714 = p__47712;
var map__47714__$1 = ((((!((map__47714 == null)))?((((map__47714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47714):map__47714);
var db = cljs.core.get.call(null,map__47714__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47715 = p__47713;
var _ = cljs.core.nth.call(null,vec__47715,(0),null);
var map__47718 = cljs.core.nth.call(null,vec__47715,(1),null);
var map__47718__$1 = ((((!((map__47718 == null)))?((((map__47718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47718):map__47718);
var data = cljs.core.get.call(null,map__47718__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie dodano pracownika",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-create-failure","workers/request-create-failure",-1804894053),(function (p__47721,p__47722){
var map__47723 = p__47721;
var map__47723__$1 = ((((!((map__47723 == null)))?((((map__47723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47723):map__47723);
var db = cljs.core.get.call(null,map__47723__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47724 = p__47722;
var _ = cljs.core.nth.call(null,vec__47724,(0),null);
var map__47727 = cljs.core.nth.call(null,vec__47724,(1),null);
var map__47727__$1 = ((((!((map__47727 == null)))?((((map__47727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47727):map__47727);
var response = map__47727__$1;
var status_text = cljs.core.get.call(null,map__47727__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy dodawaniu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-delete","workers/request-delete",-68343540),(function (p__47730,p__47731){
var map__47732 = p__47730;
var map__47732__$1 = ((((!((map__47732 == null)))?((((map__47732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47732):map__47732);
var db = cljs.core.get.call(null,map__47732__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47733 = p__47731;
var _ = cljs.core.nth.call(null,vec__47733,(0),null);
var id = cljs.core.nth.call(null,vec__47733,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workers",id),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.text_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-delete-success","workers/request-delete-success",420229524)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-delete-failure","workers/request-delete-failure",1442207751)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-delete-success","workers/request-delete-success",420229524),(function (p__47737,p__47738){
var map__47739 = p__47737;
var map__47739__$1 = ((((!((map__47739 == null)))?((((map__47739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47739):map__47739);
var db = cljs.core.get.call(null,map__47739__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47740 = p__47738;
var _ = cljs.core.nth.call(null,vec__47740,(0),null);
var map__47743 = cljs.core.nth.call(null,vec__47740,(1),null);
var map__47743__$1 = ((((!((map__47743 == null)))?((((map__47743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47743):map__47743);
var data = cljs.core.get.call(null,map__47743__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to pracowinka",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-delete-failure","workers/request-delete-failure",1442207751),(function (p__47746,p__47747){
var map__47748 = p__47746;
var map__47748__$1 = ((((!((map__47748 == null)))?((((map__47748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47748):map__47748);
var db = cljs.core.get.call(null,map__47748__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47749 = p__47747;
var _ = cljs.core.nth.call(null,vec__47749,(0),null);
var map__47752 = cljs.core.nth.call(null,vec__47749,(1),null);
var map__47752__$1 = ((((!((map__47752 == null)))?((((map__47752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47752):map__47752);
var response = map__47752__$1;
var status_text = cljs.core.get.call(null,map__47752__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),(function (p__47755,_){
var map__47756 = p__47755;
var map__47756__$1 = ((((!((map__47756 == null)))?((((map__47756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47756):map__47756);
var db = cljs.core.get.call(null,map__47756__$1,new cljs.core.Keyword(null,"db","db",993250759));
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null));
var worker = cljs.core.dissoc.call(null,new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/workers",id),new cljs.core.Keyword(null,"params","params",710516235),worker,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-update-success","workers/request-update-success",-1162522597)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-update-failure","workers/request-update-failure",-235312801)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-update-success","workers/request-update-success",-1162522597),(function (p__47758,p__47759){
var map__47760 = p__47758;
var map__47760__$1 = ((((!((map__47760 == null)))?((((map__47760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47760):map__47760);
var db = cljs.core.get.call(null,map__47760__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47761 = p__47759;
var _ = cljs.core.nth.call(null,vec__47761,(0),null);
var map__47764 = cljs.core.nth.call(null,vec__47761,(1),null);
var map__47764__$1 = ((((!((map__47764 == null)))?((((map__47764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47764):map__47764);
var data = cljs.core.get.call(null,map__47764__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie uaktualniono pracownika",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","request-update-failure","workers/request-update-failure",-235312801),(function (p__47767,p__47768){
var map__47769 = p__47767;
var map__47769__$1 = ((((!((map__47769 == null)))?((((map__47769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47769):map__47769);
var db = cljs.core.get.call(null,map__47769__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47770 = p__47768;
var _ = cljs.core.nth.call(null,vec__47770,(0),null);
var map__47773 = cljs.core.nth.call(null,vec__47770,(1),null);
var map__47773__$1 = ((((!((map__47773 == null)))?((((map__47773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47773):map__47773);
var response = map__47773__$1;
var status_text = cljs.core.get.call(null,map__47773__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("workers","request-update","workers/request-update",-73508656),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy uaktualnianiu pracownika: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),(function (db,p__47776){
var vec__47777 = p__47776;
var _ = cljs.core.nth.call(null,vec__47777,(0),null);
var worker = cljs.core.nth.call(null,vec__47777,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","worker-form","workers/worker-form",-1164998617),worker);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","create-worker-dialog","workers/create-worker-dialog",1176847078),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),eckersdorf.workers.db.empty_worker], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),new cljs.core.Keyword(null,"create","create",-1301499256)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("workers","modify-worker-dialog","workers/modify-worker-dialog",1703643381),(function (_,p__47780){
var vec__47781 = p__47780;
var ___$1 = cljs.core.nth.call(null,vec__47781,(0),null);
var worker = cljs.core.nth.call(null,vec__47781,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","set-worker-form","workers/set-worker-form",462806327),worker], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),new cljs.core.Keyword(null,"modify","modify",-1261040869)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),(function (db,p__47784){
var vec__47785 = p__47784;
var _ = cljs.core.nth.call(null,vec__47785,(0),null);
var type = cljs.core.nth.call(null,vec__47785,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","hide-dialog","workers/hide-dialog",1638511766),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","show-dialog?","workers/show-dialog?",-1389492069),null);
}));

//# sourceMappingURL=events.js.map?rel=1509397949070
