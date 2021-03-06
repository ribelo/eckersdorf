// Compiled by ClojureScript 1.9.946 {}
goog.provide('eckersdorf.window.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("window","update-height","window/update-height",-825804406),(function (db,_){
var height = window.innerHeight;
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("window","height","window/height",1310154766),height);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("window","update-width","window/update-width",1111264788),(function (db,_){
var width = window.innerWidth;
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("window","width","window/width",-1138776901),width);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("window","update-breakpoint","window/update-breakpoint",1517550785),(function (p__42405,_){
var map__42406 = p__42405;
var map__42406__$1 = ((((!((map__42406 == null)))?((((map__42406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42406):map__42406);
var db = map__42406__$1;
var width = cljs.core.get.call(null,map__42406__$1,new cljs.core.Keyword("window","width","window/width",-1138776901));
var breakpoint = (((width < (600)))?new cljs.core.Keyword(null,"xs","xs",649443341):((((width >= (600))) && ((width < (960))))?new cljs.core.Keyword(null,"sm","sm",-1402575065):((((width >= (960))) && ((width < (1200))))?new cljs.core.Keyword(null,"md","md",707286655):((((width >= (1200))) && ((width < (1920))))?new cljs.core.Keyword(null,"lg","lg",-80787836):(((width >= (1920)))?new cljs.core.Keyword(null,"xl","xl",-1689552936):null)))));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776),breakpoint);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("layout","update-columns","layout/update-columns",1792953905),(function (p__42408,_){
var map__42409 = p__42408;
var map__42409__$1 = ((((!((map__42409 == null)))?((((map__42409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42409):map__42409);
var db = map__42409__$1;
var width = cljs.core.get.call(null,map__42409__$1,new cljs.core.Keyword("window","width","window/width",-1138776901));
var columns = (((width < (600)))?(4):((((width >= (600))) && ((width < (720))))?(8):(((width >= (720)))?(12):null)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("layout","columns","layout/columns",-1195849614),columns);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("layout","update-gutter","layout/update-gutter",-832825682),(function (p__42411,_){
var map__42412 = p__42411;
var map__42412__$1 = ((((!((map__42412 == null)))?((((map__42412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42412):map__42412);
var db = map__42412__$1;
var width = cljs.core.get.call(null,map__42412__$1,new cljs.core.Keyword("window","width","window/width",-1138776901));
var gutter = (((width < (600)))?(16):(((width >= (600)))?(24):null));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("layout","gutter","layout/gutter",-2143600188),gutter);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("window","update-size","window/update-size",624479977),(function (db,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","update-height","window/update-height",-825804406)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","update-width","window/update-width",1111264788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","update-breakpoint","window/update-breakpoint",1517550785)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layout","update-columns","layout/update-columns",1792953905)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layout","update-gutter","layout/update-gutter",-832825682)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("window","run-resize-listener!","window/run-resize-listener!",-743521203),(function (_,___$1){
var resize_state_42414 = cljs.core.atom.call(null,null);
window.addEventListener("resize",((function (resize_state_42414){
return (function (){
clearTimeout(cljs.core.deref.call(null,resize_state_42414));

var timeout = setTimeout(((function (resize_state_42414){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","update-size","window/update-size",624479977)], null));
});})(resize_state_42414))
,(500));
return cljs.core.reset_BANG_.call(null,resize_state_42414,timeout);
});})(resize_state_42414))
);

return null;
}));

//# sourceMappingURL=events.js.map?rel=1510703501387
