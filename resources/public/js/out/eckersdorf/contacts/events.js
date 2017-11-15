// Compiled by ClojureScript 1.9.946 {}
goog.provide('eckersdorf.contacts.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('taoensso.timbre');
goog.require('taoensso.encore');
goog.require('eckersdorf.contacts.db');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.get-contacts","contacts/ajax.get-contacts",-646194622),(function (p__44480){
var map__44481 = p__44480;
var map__44481__$1 = ((((!((map__44481 == null)))?((((map__44481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44481):map__44481);
var db = cljs.core.get.call(null,map__44481__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/contacts",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.get-contacts-success","contacts/ajax.get-contacts-success",-1183443832)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.get-contacts-failure","contacts/ajax.get-contacts-failure",531171050)], null)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("contacts","ajax.get-contacts","contacts/ajax.get-contacts",-646194622),new cljs.core.Keyword(null,"desc","desc",2093485764),"requesting contacts list"], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.get-contacts-success","contacts/ajax.get-contacts-success",-1183443832),(function (p__44483,p__44484){
var map__44485 = p__44483;
var map__44485__$1 = ((((!((map__44485 == null)))?((((map__44485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44485):map__44485);
var db = cljs.core.get.call(null,map__44485__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44486 = p__44484;
var _ = cljs.core.nth.call(null,vec__44486,(0),null);
var map__44489 = cljs.core.nth.call(null,vec__44486,(1),null);
var map__44489__$1 = ((((!((map__44489 == null)))?((((map__44489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44489):map__44489);
var data = cljs.core.get.call(null,map__44489__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","list","contacts/list",1198689742),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie pobrano list\u0119 kontakt\u00F3w",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.get-contacts-failure","contacts/ajax.get-contacts-failure",531171050),(function (p__44492,p__44493){
var map__44494 = p__44492;
var map__44494__$1 = ((((!((map__44494 == null)))?((((map__44494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44494):map__44494);
var db = cljs.core.get.call(null,map__44494__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44495 = p__44493;
var _ = cljs.core.nth.call(null,vec__44495,(0),null);
var map__44498 = cljs.core.nth.call(null,vec__44495,(1),null);
var map__44498__$1 = ((((!((map__44498 == null)))?((((map__44498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44498):map__44498);
var response = map__44498__$1;
var status_text = cljs.core.get.call(null,map__44498__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("contacts","ajax.get-contacts","contacts/ajax.get-contacts",-646194622),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy pobieraniu listy kontakt\u00F3w: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.create-contact","contacts/ajax.create-contact",-1260559406),(function (p__44501,_){
var map__44502 = p__44501;
var map__44502__$1 = ((((!((map__44502 == null)))?((((map__44502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44502):map__44502);
var db = cljs.core.get.call(null,map__44502__$1,new cljs.core.Keyword(null,"db","db",993250759));
var contact = new cljs.core.Keyword("contacts","contact-form","contacts/contact-form",1454622784).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/contacts"),new cljs.core.Keyword(null,"params","params",710516235),contact,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.create-contact-success","contacts/ajax.create-contact-success",1805462154)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.create-contact-failure","contacts/ajax.create-contact-failure",362840894)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.create-contact-success","contacts/ajax.create-contact-success",1805462154),(function (p__44504,p__44505){
var map__44506 = p__44504;
var map__44506__$1 = ((((!((map__44506 == null)))?((((map__44506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44506):map__44506);
var db = cljs.core.get.call(null,map__44506__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44507 = p__44505;
var _ = cljs.core.nth.call(null,vec__44507,(0),null);
var map__44510 = cljs.core.nth.call(null,vec__44507,(1),null);
var map__44510__$1 = ((((!((map__44510 == null)))?((((map__44510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44510):map__44510);
var data = cljs.core.get.call(null,map__44510__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","list","contacts/list",1198689742),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","hide-dialog","contacts/hide-dialog",-462065380)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie dodano kontaktu",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.create-contact-failure","contacts/ajax.create-contact-failure",362840894),(function (p__44513,p__44514){
var map__44515 = p__44513;
var map__44515__$1 = ((((!((map__44515 == null)))?((((map__44515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44515):map__44515);
var db = cljs.core.get.call(null,map__44515__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44516 = p__44514;
var _ = cljs.core.nth.call(null,vec__44516,(0),null);
var map__44519 = cljs.core.nth.call(null,vec__44516,(1),null);
var map__44519__$1 = ((((!((map__44519 == null)))?((((map__44519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44519):map__44519);
var response = map__44519__$1;
var status_text = cljs.core.get.call(null,map__44519__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("contacts","ajax.modify-contact","contacts/ajax.modify-contact",801381536),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy dodawaniu kontaktu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.delete-contact","contacts/ajax.delete-contact",1023851134),(function (p__44522,p__44523){
var map__44524 = p__44522;
var map__44524__$1 = ((((!((map__44524 == null)))?((((map__44524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44524):map__44524);
var db = cljs.core.get.call(null,map__44524__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44525 = p__44523;
var _ = cljs.core.nth.call(null,vec__44525,(0),null);
var id = cljs.core.nth.call(null,vec__44525,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/contacts",id),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.text_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.delete-contact-success","contacts/ajax.delete-contact-success",-406506553)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.delete-contact-failure","contacts/ajax.delete-contact-failure",-946802311)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.delete-contact-success","contacts/ajax.delete-contact-success",-406506553),(function (p__44529,p__44530){
var map__44531 = p__44529;
var map__44531__$1 = ((((!((map__44531 == null)))?((((map__44531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44531):map__44531);
var db = cljs.core.get.call(null,map__44531__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44532 = p__44530;
var _ = cljs.core.nth.call(null,vec__44532,(0),null);
var map__44535 = cljs.core.nth.call(null,vec__44532,(1),null);
var map__44535__$1 = ((((!((map__44535 == null)))?((((map__44535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44535):map__44535);
var data = cljs.core.get.call(null,map__44535__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","list","contacts/list",1198689742),data),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to kontaktu",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.delete-contact-failure","contacts/ajax.delete-contact-failure",-946802311),(function (p__44538,p__44539){
var map__44540 = p__44538;
var map__44540__$1 = ((((!((map__44540 == null)))?((((map__44540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44540):map__44540);
var db = cljs.core.get.call(null,map__44540__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44541 = p__44539;
var _ = cljs.core.nth.call(null,vec__44541,(0),null);
var map__44544 = cljs.core.nth.call(null,vec__44541,(1),null);
var map__44544__$1 = ((((!((map__44544 == null)))?((((map__44544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44544):map__44544);
var response = map__44544__$1;
var status_text = cljs.core.get.call(null,map__44544__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("contacts","ajax.modify-contact","contacts/ajax.modify-contact",801381536),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu kontaktu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.modify-contact","contacts/ajax.modify-contact",801381536),(function (p__44547,_){
var map__44548 = p__44547;
var map__44548__$1 = ((((!((map__44548 == null)))?((((map__44548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44548):map__44548);
var db = cljs.core.get.call(null,map__44548__$1,new cljs.core.Keyword(null,"db","db",993250759));
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","contact-form","contacts/contact-form",1454622784),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null));
var contact = cljs.core.dissoc.call(null,new cljs.core.Keyword("contacts","contact-form","contacts/contact-form",1454622784).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/contacts",id),new cljs.core.Keyword(null,"params","params",710516235),contact,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.modify-contact-success","contacts/ajax.modify-contact-success",-676329690)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.modify-contact-failure","contacts/ajax.modify-contact-failure",1229231729)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.modify-contact-success","contacts/ajax.modify-contact-success",-676329690),(function (p__44550,p__44551){
var map__44552 = p__44550;
var map__44552__$1 = ((((!((map__44552 == null)))?((((map__44552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44552):map__44552);
var db = cljs.core.get.call(null,map__44552__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44553 = p__44551;
var _ = cljs.core.nth.call(null,vec__44553,(0),null);
var map__44556 = cljs.core.nth.call(null,vec__44553,(1),null);
var map__44556__$1 = ((((!((map__44556 == null)))?((((map__44556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44556):map__44556);
var data = cljs.core.get.call(null,map__44556__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","list","contacts/list",1198689742),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","hide-dialog","contacts/hide-dialog",-462065380)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie uaktualniono kontaktu",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.modify-contact-failure","contacts/ajax.modify-contact-failure",1229231729),(function (p__44559,p__44560){
var map__44561 = p__44559;
var map__44561__$1 = ((((!((map__44561 == null)))?((((map__44561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44561):map__44561);
var db = cljs.core.get.call(null,map__44561__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44562 = p__44560;
var _ = cljs.core.nth.call(null,vec__44562,(0),null);
var map__44565 = cljs.core.nth.call(null,vec__44562,(1),null);
var map__44565__$1 = ((((!((map__44565 == null)))?((((map__44565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44565):map__44565);
var response = map__44565__$1;
var status_text = cljs.core.get.call(null,map__44565__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("contacts","ajax.modify-contact","contacts/ajax.modify-contact",801381536),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy uaktualnianiu kontaktu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("contacts","set-contact-form","contacts/set-contact-form",690565228),(function (db,p__44568){
var vec__44569 = p__44568;
var _ = cljs.core.nth.call(null,vec__44569,(0),null);
var contact = cljs.core.nth.call(null,vec__44569,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","contact-form","contacts/contact-form",1454622784),contact);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","create-contact-dialog","contacts/create-contact-dialog",373120771),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","set-contact-form","contacts/set-contact-form",690565228),eckersdorf.contacts.db.empty_contact], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","show-dialog?","contacts/show-dialog?",679689273),new cljs.core.Keyword(null,"create","create",-1301499256)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","modify-contact-dialog","contacts/modify-contact-dialog",-1062860849),(function (_,p__44572){
var vec__44573 = p__44572;
var ___$1 = cljs.core.nth.call(null,vec__44573,(0),null);
var contact = cljs.core.nth.call(null,vec__44573,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","set-contact-form","contacts/set-contact-form",690565228),contact], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","show-dialog?","contacts/show-dialog?",679689273),new cljs.core.Keyword(null,"modify","modify",-1261040869)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("contacts","show-dialog?","contacts/show-dialog?",679689273),(function (db,p__44576){
var vec__44577 = p__44576;
var _ = cljs.core.nth.call(null,vec__44577,(0),null);
var type = cljs.core.nth.call(null,vec__44577,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","show-dialog?","contacts/show-dialog?",679689273),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("contacts","hide-dialog","contacts/hide-dialog",-462065380),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","show-dialog?","contacts/show-dialog?",679689273),null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("concatcs","set-search-form","concatcs/set-search-form",1778107898),(function (db,p__44580){
var vec__44581 = p__44580;
var _ = cljs.core.nth.call(null,vec__44581,(0),null);
var val = cljs.core.nth.call(null,vec__44581,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","search-form","contacts/search-form",1073014637),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("concatcs","set-temp-search-form","concatcs/set-temp-search-form",-554931291),(function (db,p__44584){
var vec__44585 = p__44584;
var _ = cljs.core.nth.call(null,vec__44585,(0),null);
var val = cljs.core.nth.call(null,vec__44585,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","temp-search-form","contacts/temp-search-form",-476585488),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("contacts","store-debounce-search","contacts/store-debounce-search",-1442503543),(function (db,p__44588){
var vec__44589 = p__44588;
var _ = cljs.core.nth.call(null,vec__44589,(0),null);
var map__44592 = cljs.core.nth.call(null,vec__44589,(1),null);
var map__44592__$1 = ((((!((map__44592 == null)))?((((map__44592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44592):map__44592);
var m = map__44592__$1;
var value = cljs.core.get.call(null,map__44592__$1,new cljs.core.Keyword(null,"value","value",305978217));
var timestamp = cljs.core.get.call(null,map__44592__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","debounce-search","contacts/debounce-search",279243449),m);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","dispatch-debounce-search","contacts/dispatch-debounce-search",-653482275),(function (p__44594,p__44595){
var map__44596 = p__44594;
var map__44596__$1 = ((((!((map__44596 == null)))?((((map__44596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44596):map__44596);
var db = cljs.core.get.call(null,map__44596__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44597 = p__44595;
var _ = cljs.core.nth.call(null,vec__44597,(0),null);
var map__44600 = cljs.core.nth.call(null,vec__44597,(1),null);
var map__44600__$1 = ((((!((map__44600 == null)))?((((map__44600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44600):map__44600);
var m = map__44600__$1;
var value = cljs.core.get.call(null,map__44600__$1,new cljs.core.Keyword(null,"value","value",305978217));
var timestamp = cljs.core.get.call(null,map__44600__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var map__44603 = cljs.core.get.call(null,db,new cljs.core.Keyword("contacts","debounce-search","contacts/debounce-search",279243449));
var map__44603__$1 = ((((!((map__44603 == null)))?((((map__44603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44603):map__44603);
var stored_timestamp = cljs.core.get.call(null,map__44603__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
if(cljs.core._EQ_.call(null,stored_timestamp,timestamp)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","debounce-search","contacts/debounce-search",279243449),null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("concatcs","set-search-form","concatcs/set-search-form",1778107898),value], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","debounce-search","contacts/debounce-search",279243449),(function (p__44605,p__44606){
var map__44607 = p__44605;
var map__44607__$1 = ((((!((map__44607 == null)))?((((map__44607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44607):map__44607);
var db = cljs.core.get.call(null,map__44607__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44608 = p__44606;
var _ = cljs.core.nth.call(null,vec__44608,(0),null);
var value = cljs.core.nth.call(null,vec__44608,(1),null);
var timestamp = (new Date()).getTime();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","store-debounce-search","contacts/store-debounce-search",-1442503543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("concatcs","set-temp-search-form","concatcs/set-temp-search-form",-554931291),value], null)], null),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(500),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","dispatch-debounce-search","contacts/dispatch-debounce-search",-653482275),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp], null)], null)], null)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1510703503427
