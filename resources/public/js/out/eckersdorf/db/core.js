// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.db.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('re_frame.core');
eckersdorf.db.core.ks = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("basket","products","basket/products",1159205322),new cljs.core.Keyword("warehouse","last-watched","warehouse/last-watched",-1741758825)], null);
eckersdorf.db.core.save_local_storage = (function eckersdorf$db$core$save_local_storage(db){
var w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return localStorage.setItem("pintu",cognitect.transit.write.call(null,w,cljs.core.select_keys.call(null,db,eckersdorf.db.core.ks)));
});
eckersdorf.db.core.__GT_local_storage = re_frame.core.after.call(null,eckersdorf.db.core.save_local_storage);
eckersdorf.db.core.load_local_storage = (function eckersdorf$db$core$load_local_storage(){
var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
var G__40822 = localStorage.getItem("pintu");
if((G__40822 == null)){
return null;
} else {
return cognitect.transit.read.call(null,r,G__40822);
}
});
eckersdorf.db.core.clear_local_storage = (function eckersdorf$db$core$clear_local_storage(){
return localStorage.setItem("pintu",cljs.core.PersistentArrayMap.EMPTY);
});
eckersdorf.db.core.default_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","active-panel","view/active-panel",-1798962863),new cljs.core.Keyword("store","products","store/products",1834307781)], null);

//# sourceMappingURL=core.js.map?rel=1506023647627
