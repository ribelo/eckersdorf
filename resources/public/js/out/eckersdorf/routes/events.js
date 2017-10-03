// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.routes.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cuerdas.core');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("routes","set-active-panel","routes/set-active-panel",-2111721038),(function (p__43360,p__43361){
var map__43362 = p__43360;
var map__43362__$1 = ((((!((map__43362 == null)))?((((map__43362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43362):map__43362);
var db = cljs.core.get.call(null,map__43362__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43363 = p__43361;
var _ = cljs.core.nth.call(null,vec__43363,(0),null);
var map__43366 = cljs.core.nth.call(null,vec__43363,(1),null);
var map__43366__$1 = ((((!((map__43366 == null)))?((((map__43366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43366):map__43366);
var panel = cljs.core.get.call(null,map__43366__$1,new cljs.core.Keyword(null,"panel","panel",-558637456));
cljs.core.println.call(null,new cljs.core.Keyword("routes","set-active-panel","routes/set-active-panel",-2111721038),panel);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("view","active-panel","view/active-panel",-1798962863),((cljs.core.seq.call(null,panel))?cljs.core.keyword.call(null,panel):new cljs.core.Keyword(null,"warehouse","warehouse",-2139576992))),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","deselect-product-group","warehouse/deselect-product-group",-994985893)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","deselect-product","warehouse/deselect-product",-553324422)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","reset-breadcrumbs","warehouse/reset-breadcrumbs",-1858640541)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","reset-search-field","warehouse/reset-search-field",176730300)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("routes","category","routes/category",365004938),(function (p__43369,p__43370){
var map__43371 = p__43369;
var map__43371__$1 = ((((!((map__43371 == null)))?((((map__43371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43371):map__43371);
var db = cljs.core.get.call(null,map__43371__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43372 = p__43370;
var _ = cljs.core.nth.call(null,vec__43372,(0),null);
var map__43375 = cljs.core.nth.call(null,vec__43372,(1),null);
var map__43375__$1 = ((((!((map__43375 == null)))?((((map__43375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43375):map__43375);
var slug = cljs.core.get.call(null,map__43375__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var categories = cuerdas.core.split.call(null,slug,">");
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","select-category","warehouse/select-category",-1462306362),categories], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("routes","product","routes/product",436887195),(function (p__43378,p__43379){
var map__43380 = p__43378;
var map__43380__$1 = ((((!((map__43380 == null)))?((((map__43380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43380):map__43380);
var db = cljs.core.get.call(null,map__43380__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43381 = p__43379;
var _ = cljs.core.nth.call(null,vec__43381,(0),null);
var map__43384 = cljs.core.nth.call(null,vec__43381,(1),null);
var map__43384__$1 = ((((!((map__43384 == null)))?((((map__43384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43384):map__43384);
var slug = cljs.core.get.call(null,map__43384__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","reset-search-field","warehouse/reset-search-field",176730300)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","select-product","warehouse/select-product",2079337632),slug], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("routes","search","routes/search",308997852),(function (p__43387,p__43388){
var map__43389 = p__43387;
var map__43389__$1 = ((((!((map__43389 == null)))?((((map__43389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43389):map__43389);
var db = cljs.core.get.call(null,map__43389__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43390 = p__43388;
var _ = cljs.core.nth.call(null,vec__43390,(0),null);
var map__43393 = cljs.core.nth.call(null,vec__43390,(1),null);
var map__43393__$1 = ((((!((map__43393 == null)))?((((map__43393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43393):map__43393);
var text = cljs.core.get.call(null,map__43393__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
console.log(text);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","deselect-product","warehouse/deselect-product",-553324422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("warehouse","search-products","warehouse/search-products",1493719736),text], null)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1506985651848
