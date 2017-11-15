// Compiled by ClojureScript 1.9.946 {}
goog.provide('eckersdorf.db.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('re_frame.core');
goog.require('goog.date.UtcDateTime');
eckersdorf.db.core.transit_readers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 1, ["m",cognitect.transit.read_handler.call(null,(function (s){
return goog.date.UtcDateTime.fromTimestamp.call(null,s);
}))], null)], null);
eckersdorf.db.core.transit_writers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.date.UtcDateTime,cognitect.transit.write_handler.call(null,cljs.core.constantly.call(null,"m"),(function (v){
return v.getTime();
}),(function (v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v.getTime())].join('');
}))])], null);
eckersdorf.db.core.__GT_json = (function eckersdorf$db$core$__GT_json(db){
var w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),eckersdorf.db.core.transit_writers);
return cognitect.transit.write.call(null,w,db);
});
eckersdorf.db.core.save_local_storage = (function eckersdorf$db$core$save_local_storage(db){
return localStorage.setItem("eckersdorf",eckersdorf.db.core.__GT_json.call(null,cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","active-panel","view/active-panel",-1798962863),new cljs.core.Keyword("view","sider-collapsed?","view/sider-collapsed?",888100809),new cljs.core.Keyword("user","last-login","user/last-login",-513275033),new cljs.core.Keyword("user","object-id","user/object-id",-759418702),new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),new cljs.core.Keyword("user","last-name","user/last-name",-1699346595),new cljs.core.Keyword("user","email-address","user/email-address",-902625587),new cljs.core.Keyword("user","roles","user/roles",130427029),new cljs.core.Keyword("user","token","user/token",-1199473138),new cljs.core.Keyword("user","permissions","user/permissions",55542912)], null))));
});
eckersdorf.db.core.__GT_local_storage = re_frame.core.after.call(null,eckersdorf.db.core.save_local_storage);
eckersdorf.db.core.load_local_storage = (function eckersdorf$db$core$load_local_storage(){
var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),eckersdorf.db.core.transit_readers);
var G__44620 = localStorage.getItem("eckersdorf");
if((G__44620 == null)){
return null;
} else {
return cognitect.transit.read.call(null,r,G__44620);
}
});
eckersdorf.db.core.clear_local_storage = (function eckersdorf$db$core$clear_local_storage(){
return eckersdorf.db.core.save_local_storage.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
eckersdorf.db.core.default_db = cljs.core.PersistentArrayMap.EMPTY;

//# sourceMappingURL=core.js.map?rel=1510703503452
