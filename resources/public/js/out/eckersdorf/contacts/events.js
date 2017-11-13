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
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.get-contacts","contacts/ajax.get-contacts",-646194622),(function (p__44479){
var map__44480 = p__44479;
var map__44480__$1 = ((((!((map__44480 == null)))?((((map__44480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44480):map__44480);
var db = cljs.core.get.call(null,map__44480__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/api/1.0/contacts",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.get-contacts-success","contacts/ajax.get-contacts-success",-1183443832)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.get-contacts-failure","contacts/ajax.get-contacts-failure",531171050)], null)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","set","process/set",-543507287),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("contacts","ajax.get-contacts","contacts/ajax.get-contacts",-646194622),new cljs.core.Keyword(null,"desc","desc",2093485764),"requesting contacts list"], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.get-contacts-success","contacts/ajax.get-contacts-success",-1183443832),(function (p__44482,p__44483){
var map__44484 = p__44482;
var map__44484__$1 = ((((!((map__44484 == null)))?((((map__44484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44484):map__44484);
var db = cljs.core.get.call(null,map__44484__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44485 = p__44483;
var _ = cljs.core.nth.call(null,vec__44485,(0),null);
var map__44488 = cljs.core.nth.call(null,vec__44485,(1),null);
var map__44488__$1 = ((((!((map__44488 == null)))?((((map__44488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44488):map__44488);
var data = cljs.core.get.call(null,map__44488__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","list","contacts/list",1198689742),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie pobrano list\u0119 kontakt\u00F3w",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.get-contacts-failure","contacts/ajax.get-contacts-failure",531171050),(function (p__44491,p__44492){
var map__44493 = p__44491;
var map__44493__$1 = ((((!((map__44493 == null)))?((((map__44493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44493):map__44493);
var db = cljs.core.get.call(null,map__44493__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44494 = p__44492;
var _ = cljs.core.nth.call(null,vec__44494,(0),null);
var map__44497 = cljs.core.nth.call(null,vec__44494,(1),null);
var map__44497__$1 = ((((!((map__44497 == null)))?((((map__44497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44497):map__44497);
var response = map__44497__$1;
var status_text = cljs.core.get.call(null,map__44497__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("contacts","ajax.get-contacts","contacts/ajax.get-contacts",-646194622),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("process","clear","process/clear",1651862224)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy pobieraniu listy kontakt\u00F3w: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.create-contact","contacts/ajax.create-contact",-1260559406),(function (p__44500,_){
var map__44501 = p__44500;
var map__44501__$1 = ((((!((map__44501 == null)))?((((map__44501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44501):map__44501);
var db = cljs.core.get.call(null,map__44501__$1,new cljs.core.Keyword(null,"db","db",993250759));
var contact = new cljs.core.Keyword("contacts","contact-form","contacts/contact-form",1454622784).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/contacts"),new cljs.core.Keyword(null,"params","params",710516235),contact,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.create-contact-success","contacts/ajax.create-contact-success",1805462154)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.create-contact-failure","contacts/ajax.create-contact-failure",362840894)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.create-contact-success","contacts/ajax.create-contact-success",1805462154),(function (p__44503,p__44504){
var map__44505 = p__44503;
var map__44505__$1 = ((((!((map__44505 == null)))?((((map__44505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44505):map__44505);
var db = cljs.core.get.call(null,map__44505__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44506 = p__44504;
var _ = cljs.core.nth.call(null,vec__44506,(0),null);
var map__44509 = cljs.core.nth.call(null,vec__44506,(1),null);
var map__44509__$1 = ((((!((map__44509 == null)))?((((map__44509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44509):map__44509);
var data = cljs.core.get.call(null,map__44509__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","list","contacts/list",1198689742),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","hide-dialog","contacts/hide-dialog",-462065380)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie dodano kontaktu",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.create-contact-failure","contacts/ajax.create-contact-failure",362840894),(function (p__44512,p__44513){
var map__44514 = p__44512;
var map__44514__$1 = ((((!((map__44514 == null)))?((((map__44514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44514):map__44514);
var db = cljs.core.get.call(null,map__44514__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44515 = p__44513;
var _ = cljs.core.nth.call(null,vec__44515,(0),null);
var map__44518 = cljs.core.nth.call(null,vec__44515,(1),null);
var map__44518__$1 = ((((!((map__44518 == null)))?((((map__44518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44518):map__44518);
var response = map__44518__$1;
var status_text = cljs.core.get.call(null,map__44518__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("contacts","ajax.modify-contact","contacts/ajax.modify-contact",801381536),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy dodawaniu kontaktu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.delete-contact","contacts/ajax.delete-contact",1023851134),(function (p__44521,p__44522){
var map__44523 = p__44521;
var map__44523__$1 = ((((!((map__44523 == null)))?((((map__44523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44523):map__44523);
var db = cljs.core.get.call(null,map__44523__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44524 = p__44522;
var _ = cljs.core.nth.call(null,vec__44524,(0),null);
var id = cljs.core.nth.call(null,vec__44524,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/contacts",id),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.text_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.delete-contact-success","contacts/ajax.delete-contact-success",-406506553)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.delete-contact-failure","contacts/ajax.delete-contact-failure",-946802311)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.delete-contact-success","contacts/ajax.delete-contact-success",-406506553),(function (p__44528,p__44529){
var map__44530 = p__44528;
var map__44530__$1 = ((((!((map__44530 == null)))?((((map__44530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44530):map__44530);
var db = cljs.core.get.call(null,map__44530__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44531 = p__44529;
var _ = cljs.core.nth.call(null,vec__44531,(0),null);
var map__44534 = cljs.core.nth.call(null,vec__44531,(1),null);
var map__44534__$1 = ((((!((map__44534 == null)))?((((map__44534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44534):map__44534);
var data = cljs.core.get.call(null,map__44534__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","list","contacts/list",1198689742),data),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie usuni\u0119to kontaktu",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.delete-contact-failure","contacts/ajax.delete-contact-failure",-946802311),(function (p__44537,p__44538){
var map__44539 = p__44537;
var map__44539__$1 = ((((!((map__44539 == null)))?((((map__44539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44539):map__44539);
var db = cljs.core.get.call(null,map__44539__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44540 = p__44538;
var _ = cljs.core.nth.call(null,vec__44540,(0),null);
var map__44543 = cljs.core.nth.call(null,vec__44540,(1),null);
var map__44543__$1 = ((((!((map__44543 == null)))?((((map__44543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44543):map__44543);
var response = map__44543__$1;
var status_text = cljs.core.get.call(null,map__44543__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("contacts","ajax.modify-contact","contacts/ajax.modify-contact",801381536),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy usuwaniu kontaktu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.modify-contact","contacts/ajax.modify-contact",801381536),(function (p__44546,_){
var map__44547 = p__44546;
var map__44547__$1 = ((((!((map__44547 == null)))?((((map__44547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44547):map__44547);
var db = cljs.core.get.call(null,map__44547__$1,new cljs.core.Keyword(null,"db","db",993250759));
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","contact-form","contacts/contact-form",1454622784),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null));
var contact = cljs.core.dissoc.call(null,new cljs.core.Keyword("contacts","contact-form","contacts/contact-form",1454622784).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),taoensso.encore.path.call(null,"/api/1.0/contacts",id),new cljs.core.Keyword(null,"params","params",710516235),contact,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.modify-contact-success","contacts/ajax.modify-contact-success",-676329690)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.modify-contact-failure","contacts/ajax.modify-contact-failure",1229231729)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.modify-contact-success","contacts/ajax.modify-contact-success",-676329690),(function (p__44549,p__44550){
var map__44551 = p__44549;
var map__44551__$1 = ((((!((map__44551 == null)))?((((map__44551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44551):map__44551);
var db = cljs.core.get.call(null,map__44551__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44552 = p__44550;
var _ = cljs.core.nth.call(null,vec__44552,(0),null);
var map__44555 = cljs.core.nth.call(null,vec__44552,(1),null);
var map__44555__$1 = ((((!((map__44555 == null)))?((((map__44555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44555):map__44555);
var data = cljs.core.get.call(null,map__44555__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","list","contacts/list",1198689742),data),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","hide-dialog","contacts/hide-dialog",-462065380)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"poprawnie uaktualniono kontaktu",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","ajax.modify-contact-failure","contacts/ajax.modify-contact-failure",1229231729),(function (p__44558,p__44559){
var map__44560 = p__44558;
var map__44560__$1 = ((((!((map__44560 == null)))?((((map__44560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44560):map__44560);
var db = cljs.core.get.call(null,map__44560__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44561 = p__44559;
var _ = cljs.core.nth.call(null,vec__44561,(0),null);
var map__44564 = cljs.core.nth.call(null,vec__44561,(1),null);
var map__44564__$1 = ((((!((map__44564 == null)))?((((map__44564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44564):map__44564);
var response = map__44564__$1;
var status_text = cljs.core.get.call(null,map__44564__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","set","error/set",392376274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("contacts","ajax.modify-contact","contacts/ajax.modify-contact",801381536),new cljs.core.Keyword(null,"desc","desc",2093485764),response], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["b\u0142\u0105d przy uaktualnianiu kontaktu: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"duration","duration",1444101068),(3)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("contacts","set-contact-form","contacts/set-contact-form",690565228),(function (db,p__44567){
var vec__44568 = p__44567;
var _ = cljs.core.nth.call(null,vec__44568,(0),null);
var contact = cljs.core.nth.call(null,vec__44568,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","contact-form","contacts/contact-form",1454622784),contact);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","create-contact-dialog","contacts/create-contact-dialog",373120771),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","set-contact-form","contacts/set-contact-form",690565228),eckersdorf.contacts.db.empty_contact], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","show-dialog?","contacts/show-dialog?",679689273),new cljs.core.Keyword(null,"create","create",-1301499256)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","modify-contact-dialog","contacts/modify-contact-dialog",-1062860849),(function (_,p__44571){
var vec__44572 = p__44571;
var ___$1 = cljs.core.nth.call(null,vec__44572,(0),null);
var contact = cljs.core.nth.call(null,vec__44572,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","set-contact-form","contacts/set-contact-form",690565228),contact], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","show-dialog?","contacts/show-dialog?",679689273),new cljs.core.Keyword(null,"modify","modify",-1261040869)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("contacts","show-dialog?","contacts/show-dialog?",679689273),(function (db,p__44575){
var vec__44576 = p__44575;
var _ = cljs.core.nth.call(null,vec__44576,(0),null);
var type = cljs.core.nth.call(null,vec__44576,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","show-dialog?","contacts/show-dialog?",679689273),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("contacts","hide-dialog","contacts/hide-dialog",-462065380),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","show-dialog?","contacts/show-dialog?",679689273),null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("concatcs","set-search-form","concatcs/set-search-form",1778107898),(function (db,p__44579){
var vec__44580 = p__44579;
var _ = cljs.core.nth.call(null,vec__44580,(0),null);
var val = cljs.core.nth.call(null,vec__44580,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","search-form","contacts/search-form",1073014637),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("concatcs","set-temp-search-form","concatcs/set-temp-search-form",-554931291),(function (db,p__44583){
var vec__44584 = p__44583;
var _ = cljs.core.nth.call(null,vec__44584,(0),null);
var val = cljs.core.nth.call(null,vec__44584,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","temp-search-form","contacts/temp-search-form",-476585488),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("contacts","store-debounce-search","contacts/store-debounce-search",-1442503543),(function (db,p__44587){
var vec__44588 = p__44587;
var _ = cljs.core.nth.call(null,vec__44588,(0),null);
var map__44591 = cljs.core.nth.call(null,vec__44588,(1),null);
var map__44591__$1 = ((((!((map__44591 == null)))?((((map__44591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44591):map__44591);
var m = map__44591__$1;
var value = cljs.core.get.call(null,map__44591__$1,new cljs.core.Keyword(null,"value","value",305978217));
var timestamp = cljs.core.get.call(null,map__44591__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","debounce-search","contacts/debounce-search",279243449),m);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","dispatch-debounce-search","contacts/dispatch-debounce-search",-653482275),(function (p__44593,p__44594){
var map__44595 = p__44593;
var map__44595__$1 = ((((!((map__44595 == null)))?((((map__44595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44595):map__44595);
var db = cljs.core.get.call(null,map__44595__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44596 = p__44594;
var _ = cljs.core.nth.call(null,vec__44596,(0),null);
var map__44599 = cljs.core.nth.call(null,vec__44596,(1),null);
var map__44599__$1 = ((((!((map__44599 == null)))?((((map__44599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44599):map__44599);
var m = map__44599__$1;
var value = cljs.core.get.call(null,map__44599__$1,new cljs.core.Keyword(null,"value","value",305978217));
var timestamp = cljs.core.get.call(null,map__44599__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var map__44602 = cljs.core.get.call(null,db,new cljs.core.Keyword("contacts","debounce-search","contacts/debounce-search",279243449));
var map__44602__$1 = ((((!((map__44602 == null)))?((((map__44602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44602):map__44602);
var stored_timestamp = cljs.core.get.call(null,map__44602__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
if(cljs.core._EQ_.call(null,stored_timestamp,timestamp)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("contacts","debounce-search","contacts/debounce-search",279243449),null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("concatcs","set-search-form","concatcs/set-search-form",1778107898),value], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contacts","debounce-search","contacts/debounce-search",279243449),(function (p__44604,p__44605){
var map__44606 = p__44604;
var map__44606__$1 = ((((!((map__44606 == null)))?((((map__44606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44606):map__44606);
var db = cljs.core.get.call(null,map__44606__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44607 = p__44605;
var _ = cljs.core.nth.call(null,vec__44607,(0),null);
var value = cljs.core.nth.call(null,vec__44607,(1),null);
var timestamp = (new Date()).getTime();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","store-debounce-search","contacts/store-debounce-search",-1442503543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("concatcs","set-temp-search-form","concatcs/set-temp-search-form",-554931291),value], null)], null),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(500),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","dispatch-debounce-search","contacts/dispatch-debounce-search",-653482275),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp], null)], null)], null)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1510602151814
