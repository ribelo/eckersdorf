// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.routes.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cuerdas.core');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("routes","set-active-panel","routes/set-active-panel",-2111721038),(function (p__47547,p__47548){
var map__47549 = p__47547;
var map__47549__$1 = ((((!((map__47549 == null)))?((((map__47549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47549):map__47549);
var db = cljs.core.get.call(null,map__47549__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47550 = p__47548;
var _ = cljs.core.nth.call(null,vec__47550,(0),null);
var map__47553 = cljs.core.nth.call(null,vec__47550,(1),null);
var map__47553__$1 = ((((!((map__47553 == null)))?((((map__47553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47553):map__47553);
var panel = cljs.core.get.call(null,map__47553__$1,new cljs.core.Keyword(null,"panel","panel",-558637456));
cljs.core.println.call(null,new cljs.core.Keyword("routes","set-active-panel","routes/set-active-panel",-2111721038),panel);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("view","active-panel","view/active-panel",-1798962863),((cljs.core.seq.call(null,panel))?cljs.core.keyword.call(null,panel):new cljs.core.Keyword(null,"warehouse","warehouse",-2139576992))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","deselect-product-group","warehouse/deselect-product-group",-994985893)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","deselect-product","warehouse/deselect-product",-553324422)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","reset-breadcrumbs","warehouse/reset-breadcrumbs",-1858640541)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","reset-search-field","warehouse/reset-search-field",176730300)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("routes","category","routes/category",365004938),(function (p__47556,p__47557){
var map__47558 = p__47556;
var map__47558__$1 = ((((!((map__47558 == null)))?((((map__47558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47558):map__47558);
var db = cljs.core.get.call(null,map__47558__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47559 = p__47557;
var _ = cljs.core.nth.call(null,vec__47559,(0),null);
var map__47562 = cljs.core.nth.call(null,vec__47559,(1),null);
var map__47562__$1 = ((((!((map__47562 == null)))?((((map__47562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47562):map__47562);
var slug = cljs.core.get.call(null,map__47562__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var categories = cuerdas.core.split.call(null,slug,">");
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","select-category","warehouse/select-category",-1462306362),categories], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("routes","product","routes/product",436887195),(function (p__47565,p__47566){
var map__47567 = p__47565;
var map__47567__$1 = ((((!((map__47567 == null)))?((((map__47567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47567):map__47567);
var db = cljs.core.get.call(null,map__47567__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47568 = p__47566;
var _ = cljs.core.nth.call(null,vec__47568,(0),null);
var map__47571 = cljs.core.nth.call(null,vec__47568,(1),null);
var map__47571__$1 = ((((!((map__47571 == null)))?((((map__47571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47571):map__47571);
var slug = cljs.core.get.call(null,map__47571__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","reset-search-field","warehouse/reset-search-field",176730300)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","select-product","warehouse/select-product",2079337632),slug], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("routes","search","routes/search",308997852),(function (p__47574,p__47575){
var map__47576 = p__47574;
var map__47576__$1 = ((((!((map__47576 == null)))?((((map__47576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47576):map__47576);
var db = cljs.core.get.call(null,map__47576__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47577 = p__47575;
var _ = cljs.core.nth.call(null,vec__47577,(0),null);
var map__47580 = cljs.core.nth.call(null,vec__47577,(1),null);
var map__47580__$1 = ((((!((map__47580 == null)))?((((map__47580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47580):map__47580);
var text = cljs.core.get.call(null,map__47580__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
console.log(text);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","deselect-product","warehouse/deselect-product",-553324422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","search-products","warehouse/search-products",1493719736),text], null)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1507056180045
