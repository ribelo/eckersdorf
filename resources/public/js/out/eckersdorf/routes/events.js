// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.routes.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cuerdas.core');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("routes","set-active-panel","routes/set-active-panel",-2111721038),(function (p__36118,p__36119){
var map__36120 = p__36118;
var map__36120__$1 = ((((!((map__36120 == null)))?((((map__36120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36120):map__36120);
var db = cljs.core.get.call(null,map__36120__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36121 = p__36119;
var _ = cljs.core.nth.call(null,vec__36121,(0),null);
var map__36124 = cljs.core.nth.call(null,vec__36121,(1),null);
var map__36124__$1 = ((((!((map__36124 == null)))?((((map__36124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36124):map__36124);
var panel = cljs.core.get.call(null,map__36124__$1,new cljs.core.Keyword(null,"panel","panel",-558637456));
cljs.core.println.call(null,new cljs.core.Keyword("routes","set-active-panel","routes/set-active-panel",-2111721038),panel);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("view","active-panel","view/active-panel",-1798962863),((cljs.core.seq.call(null,panel))?cljs.core.keyword.call(null,panel):new cljs.core.Keyword(null,"warehouse","warehouse",-2139576992))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","deselect-product-group","warehouse/deselect-product-group",-994985893)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","deselect-product","warehouse/deselect-product",-553324422)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","reset-breadcrumbs","warehouse/reset-breadcrumbs",-1858640541)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","reset-search-field","warehouse/reset-search-field",176730300)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("routes","category","routes/category",365004938),(function (p__36127,p__36128){
var map__36129 = p__36127;
var map__36129__$1 = ((((!((map__36129 == null)))?((((map__36129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36129):map__36129);
var db = cljs.core.get.call(null,map__36129__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36130 = p__36128;
var _ = cljs.core.nth.call(null,vec__36130,(0),null);
var map__36133 = cljs.core.nth.call(null,vec__36130,(1),null);
var map__36133__$1 = ((((!((map__36133 == null)))?((((map__36133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36133):map__36133);
var slug = cljs.core.get.call(null,map__36133__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var categories = cuerdas.core.split.call(null,slug,">");
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","select-category","warehouse/select-category",-1462306362),categories], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("routes","product","routes/product",436887195),(function (p__36136,p__36137){
var map__36138 = p__36136;
var map__36138__$1 = ((((!((map__36138 == null)))?((((map__36138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36138):map__36138);
var db = cljs.core.get.call(null,map__36138__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36139 = p__36137;
var _ = cljs.core.nth.call(null,vec__36139,(0),null);
var map__36142 = cljs.core.nth.call(null,vec__36139,(1),null);
var map__36142__$1 = ((((!((map__36142 == null)))?((((map__36142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36142):map__36142);
var slug = cljs.core.get.call(null,map__36142__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","reset-search-field","warehouse/reset-search-field",176730300)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","select-product","warehouse/select-product",2079337632),slug], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("routes","search","routes/search",308997852),(function (p__36145,p__36146){
var map__36147 = p__36145;
var map__36147__$1 = ((((!((map__36147 == null)))?((((map__36147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36147):map__36147);
var db = cljs.core.get.call(null,map__36147__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36148 = p__36146;
var _ = cljs.core.nth.call(null,vec__36148,(0),null);
var map__36151 = cljs.core.nth.call(null,vec__36148,(1),null);
var map__36151__$1 = ((((!((map__36151 == null)))?((((map__36151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36151):map__36151);
var text = cljs.core.get.call(null,map__36151__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
console.log(text);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","deselect-product","warehouse/deselect-product",-553324422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","search-products","warehouse/search-products",1493719736),text], null)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1506023321625
