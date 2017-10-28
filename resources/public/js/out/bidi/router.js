// Compiled by ClojureScript 1.9.908 {}
goog.provide('bidi.router');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');

/**
 * @interface
 */
bidi.router.Router = function(){};

bidi.router.set_location_BANG_ = (function bidi$router$set_location_BANG_(_,location){
if((!((_ == null))) && (!((_.bidi$router$Router$set_location_BANG_$arity$2 == null)))){
return _.bidi$router$Router$set_location_BANG_$arity$2(_,location);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.router.set_location_BANG_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_,location);
} else {
var m__30973__auto____$1 = (bidi.router.set_location_BANG_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_,location);
} else {
throw cljs.core.missing_protocol.call(null,"Router.set-location!",_);
}
}
}
});

bidi.router.replace_location_BANG_ = (function bidi$router$replace_location_BANG_(_,location){
if((!((_ == null))) && (!((_.bidi$router$Router$replace_location_BANG_$arity$2 == null)))){
return _.bidi$router$Router$replace_location_BANG_$arity$2(_,location);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.router.replace_location_BANG_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_,location);
} else {
var m__30973__auto____$1 = (bidi.router.replace_location_BANG_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_,location);
} else {
throw cljs.core.missing_protocol.call(null,"Router.replace-location!",_);
}
}
}
});

/**
 * Starts up a Bidi router based on Google Closure's 'History'
 * 
 *   Types:
 * 
 *  Location :- {:handler ...
 *               :route-params {...}}
 * 
 *   Parameters:
 * 
 *  routes :- a Bidi route structure
 *  on-navigate :- 0-arg function, accepting a Location
 *  default-location :- Location to default to if the current token doesn't match a route
 * 
 *   Returns :- Router
 * 
 *   Example usage:
 * 
 *  (require '[bidi.router :as br])
 * 
 *  (let [!location (atom nil)
 *        router (br/start-router! ["" {"/" ::home-page
 *                                        "/page2" ::page2}]
 *                                 {:on-navigate (fn [location]
 *                                                 (reset! !location location))
 *                                  :default-location {:handler ::home-page}})]
 * 
 *    ...
 * 
 *    (br/set-location! router {:handler ::page2}))
 */
bidi.router.start_router_BANG_ = (function bidi$router$start_router_BANG_(routes,p__49398){
var map__49399 = p__49398;
var map__49399__$1 = ((((!((map__49399 == null)))?((((map__49399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49399):map__49399);
var on_navigate = cljs.core.get.call(null,map__49399__$1,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),cljs.core.constantly.call(null,null));
var default_location = cljs.core.get.call(null,map__49399__$1,new cljs.core.Keyword(null,"default-location","default-location",1316404397));
var history = (new goog.History());
history.setEnabled(true);

var token__GT_location = ((function (history,map__49399,map__49399__$1,on_navigate,default_location){
return (function bidi$router$start_router_BANG__$_token__GT_location(token){
var or__30239__auto__ = bidi.bidi.match_route.call(null,routes,token);
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return default_location;
}
});})(history,map__49399,map__49399__$1,on_navigate,default_location))
;
var location__GT_token = ((function (history,map__49399,map__49399__$1,on_navigate,default_location){
return (function bidi$router$start_router_BANG__$_location__GT_token(p__49404){
var map__49405 = p__49404;
var map__49405__$1 = ((((!((map__49405 == null)))?((((map__49405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49405):map__49405);
var handler = cljs.core.get.call(null,map__49405__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.call(null,map__49405__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
return bidi.bidi.unmatch_pair.call(null,routes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),route_params], null));
});})(history,map__49399,map__49399__$1,on_navigate,default_location))
;
goog.events.listen(history,goog.History.EventType.NAVIGATE,((function (history,map__49399,map__49399__$1,on_navigate,default_location){
return (function (e){
return on_navigate.call(null,token__GT_location.call(null,e.token));
});})(history,map__49399,map__49399__$1,on_navigate,default_location))
);

var initial_token_49410 = (function (){var token = history.getToken();
if(!(clojure.string.blank_QMARK_.call(null,token))){
return token;
} else {
var or__30239__auto__ = location__GT_token.call(null,default_location);
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return "/";
}
}
})();
var initial_location_49411 = token__GT_location.call(null,initial_token_49410);
history.replaceToken(initial_token_49410);

on_navigate.call(null,initial_location_49411);

if(typeof bidi.router.t_bidi$router49407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {bidi.router.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
bidi.router.t_bidi$router49407 = (function (routes,p__49398,map__49399,on_navigate,default_location,history,token__GT_location,location__GT_token,meta49408){
this.routes = routes;
this.p__49398 = p__49398;
this.map__49399 = map__49399;
this.on_navigate = on_navigate;
this.default_location = default_location;
this.history = history;
this.token__GT_location = token__GT_location;
this.location__GT_token = location__GT_token;
this.meta49408 = meta49408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
bidi.router.t_bidi$router49407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,map__49399,map__49399__$1,on_navigate,default_location){
return (function (_49409,meta49408__$1){
var self__ = this;
var _49409__$1 = this;
return (new bidi.router.t_bidi$router49407(self__.routes,self__.p__49398,self__.map__49399,self__.on_navigate,self__.default_location,self__.history,self__.token__GT_location,self__.location__GT_token,meta49408__$1));
});})(history,map__49399,map__49399__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router49407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,map__49399,map__49399__$1,on_navigate,default_location){
return (function (_49409){
var self__ = this;
var _49409__$1 = this;
return self__.meta49408;
});})(history,map__49399,map__49399__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router49407.prototype.bidi$router$Router$ = cljs.core.PROTOCOL_SENTINEL;

bidi.router.t_bidi$router49407.prototype.bidi$router$Router$set_location_BANG_$arity$2 = ((function (history,map__49399,map__49399__$1,on_navigate,default_location){
return (function (_,location){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(self__.location__GT_token.call(null,location));
});})(history,map__49399,map__49399__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router49407.prototype.bidi$router$Router$replace_location_BANG_$arity$2 = ((function (history,map__49399,map__49399__$1,on_navigate,default_location){
return (function (_,location){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(self__.location__GT_token.call(null,location));
});})(history,map__49399,map__49399__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router49407.getBasis = ((function (history,map__49399,map__49399__$1,on_navigate,default_location){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"p__49398","p__49398",934047950,null),new cljs.core.Symbol(null,"map__49399","map__49399",-1855872497,null),new cljs.core.Symbol(null,"on-navigate","on-navigate",1343303619,null),new cljs.core.Symbol(null,"default-location","default-location",-1338031372,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"token->location","token->location",354786609,null),new cljs.core.Symbol(null,"location->token","location->token",2092281408,null),new cljs.core.Symbol(null,"meta49408","meta49408",800063185,null)], null);
});})(history,map__49399,map__49399__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router49407.cljs$lang$type = true;

bidi.router.t_bidi$router49407.cljs$lang$ctorStr = "bidi.router/t_bidi$router49407";

bidi.router.t_bidi$router49407.cljs$lang$ctorPrWriter = ((function (history,map__49399,map__49399__$1,on_navigate,default_location){
return (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"bidi.router/t_bidi$router49407");
});})(history,map__49399,map__49399__$1,on_navigate,default_location))
;

bidi.router.__GT_t_bidi$router49407 = ((function (history,map__49399,map__49399__$1,on_navigate,default_location){
return (function bidi$router$start_router_BANG__$___GT_t_bidi$router49407(routes__$1,p__49398__$1,map__49399__$2,on_navigate__$1,default_location__$1,history__$1,token__GT_location__$1,location__GT_token__$1,meta49408){
return (new bidi.router.t_bidi$router49407(routes__$1,p__49398__$1,map__49399__$2,on_navigate__$1,default_location__$1,history__$1,token__GT_location__$1,location__GT_token__$1,meta49408));
});})(history,map__49399,map__49399__$1,on_navigate,default_location))
;

}

return (new bidi.router.t_bidi$router49407(routes,p__49398,map__49399__$1,on_navigate,default_location,history,token__GT_location,location__GT_token,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=router.js.map?rel=1509094252473
