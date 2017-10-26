// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('bidi.bidi');
goog.require('bidi.router');
goog.require('taoensso.timbre');
goog.require('ajax.core');
goog.require('pushy.core');
goog.require('eckersdorf.view.ui');
goog.require('eckersdorf.routes.core');
goog.require('eckersdorf.init');
goog.require('goog.History');
eckersdorf.core.mount_components = (function eckersdorf$core$mount_components(){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"eckersdorf.core","/tmp/form-init7472925615710723956.clj",19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["components mounted!"], null);
}),null)),null,-1182159388);

re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return eckersdorf.view.ui.page;},new cljs.core.Symbol("eckersdorf.view.ui","page","eckersdorf.view.ui/page",871225885,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"eckersdorf.view.ui","eckersdorf.view.ui",20617291,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"src/cljs/eckersdorf/view/ui.cljs",11,1,17,17,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(eckersdorf.view.ui.page)?eckersdorf.view.ui.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
eckersdorf.core.init_BANG_ = (function eckersdorf$core$init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","initialize-db","db/initialize-db",230999070)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","load-storage","db/load-storage",171544095)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","run-resize-listener!","window/run-resize-listener!",-743521203)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","update-size","window/update-size",624479977)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workplaces","request-list","workplaces/request-list",1487973522)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","request-list","workers/request-list",-145222166)], null));

return eckersdorf.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map?rel=1509056172084
