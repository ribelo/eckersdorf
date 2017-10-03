// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.error.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
goog.require('taoensso.encore');
goog.require('eckersdorf.error.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("error","inistialize-state","error/inistialize-state",-1491330211),(function (db,_){
return cljs.core.merge.call(null,db,eckersdorf.error.db.error_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("error","set","error/set",392376274),(function (db,p__43400){
var vec__43401 = p__43400;
var _ = cljs.core.nth.call(null,vec__43401,(0),null);
var map__43404 = cljs.core.nth.call(null,vec__43401,(1),null);
var map__43404__$1 = ((((!((map__43404 == null)))?((((map__43404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43404):map__43404);
var error = map__43404__$1;
var event = cljs.core.get.call(null,map__43404__$1,new cljs.core.Keyword(null,"event","event",301435442));
var name = cljs.core.get.call(null,map__43404__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var desc = cljs.core.get.call(null,map__43404__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"eckersdorf.error.events","/tmp/form-init8597948343343544720.clj",18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__43401,_,map__43404,map__43404__$1,error,event,name,desc){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [error], null);
});})(vec__43401,_,map__43404,map__43404__$1,error,event,name,desc))
,null)),null,-1492184957);

return taoensso.encore.assoc_some.call(null,db,new cljs.core.Keyword("error","event","error/event",406241322),event,new cljs.core.Keyword("error","name","error/name",1621140033),name,new cljs.core.Keyword("error","description","error/description",-1591863400),desc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("error","clear","error/clear",-1969412281),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("error","event","error/event",406241322),null,new cljs.core.Keyword("error","name","error/name",1621140033),null,new cljs.core.Keyword("error","description","error/description",-1591863400),null);
}));

//# sourceMappingURL=events.js.map?rel=1506985651870
