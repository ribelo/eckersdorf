// Compiled by ClojureScript 1.9.946 {}
goog.provide('eckersdorf.process.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
goog.require('taoensso.encore');
goog.require('eckersdorf.process.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("process","initialize-state","process/initialize-state",1831356737),(function (db,_){
return cljs.core.merge.call(null,db,eckersdorf.process.db.process_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("process","set","process/set",-543507287),(function (db,p__45182){
var vec__45183 = p__45182;
var _ = cljs.core.nth.call(null,vec__45183,(0),null);
var map__45186 = cljs.core.nth.call(null,vec__45183,(1),null);
var map__45186__$1 = ((((!((map__45186 == null)))?((((map__45186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45186):map__45186);
var process = map__45186__$1;
var event = cljs.core.get.call(null,map__45186__$1,new cljs.core.Keyword(null,"event","event",301435442));
var name = cljs.core.get.call(null,map__45186__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var desc = cljs.core.get.call(null,map__45186__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"eckersdorf.process.events","/tmp/form-init5826111653322655258.clj",17,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__45183,_,map__45186,map__45186__$1,process,event,name,desc){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [process], null);
});})(vec__45183,_,map__45186,map__45186__$1,process,event,name,desc))
,null)),null,1241617440);

return taoensso.encore.assoc_some.call(null,db,new cljs.core.Keyword("process","event","process/event",-1135455),event,new cljs.core.Keyword("process","name","process/name",2019122842),name,new cljs.core.Keyword("process","description","process/description",-647576593),desc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("process","clear","process/clear",1651862224),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("process","event","process/event",-1135455),null,new cljs.core.Keyword("process","name","process/name",2019122842),null,new cljs.core.Keyword("process","description","process/description",-647576593),null);
}));

//# sourceMappingURL=events.js.map?rel=1510703504004
