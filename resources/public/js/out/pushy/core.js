// Compiled by ClojureScript 1.9.908 {}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__43252 = h;
G__43252.setUseFragment(false);

G__43252.setPathPrefix("");

G__43252.setEnabled(true);

return G__43252;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var G__43254 = arguments.length;
switch (G__43254) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var G__43257 = arguments.length;
switch (G__43257) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__30972__auto__ = (((this$ == null))?null:this$);
var m__30973__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,this$,token);
} else {
var m__30973__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__30972__auto__ = (((this$ == null))?null:this$);
var m__30973__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,this$,token,title);
} else {
var m__30973__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var G__43259 = arguments.length;
switch (G__43259) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__30972__auto__ = (((this$ == null))?null:this$);
var m__30973__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,this$,token);
} else {
var m__30973__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__30972__auto__ = (((this$ == null))?null:this$);
var m__30973__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,this$,token,title);
} else {
var m__30973__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.get_token = (function pushy$core$get_token(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$get_token$arity$1 == null)))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__30972__auto__ = (((this$ == null))?null:this$);
var m__30973__auto__ = (pushy.core.get_token[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,this$);
} else {
var m__30973__auto____$1 = (pushy.core.get_token["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__30972__auto__ = (((this$ == null))?null:this$);
var m__30973__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,this$);
} else {
var m__30973__auto____$1 = (pushy.core.start_BANG_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__30972__auto__ = (((this$ == null))?null:this$);
var m__30973__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,this$);
} else {
var m__30973__auto____$1 = (pushy.core.stop_BANG_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (!(clojure.string.blank_QMARK_.call(null,uri))) && (((cljs.core.not.call(null,uri.hasScheme())) && (cljs.core.not.call(null,uri.hasDomain()))) || (!((cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*$"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('')) == null))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__31523__auto__ = [];
var len__31516__auto___43276 = arguments.length;
var i__31517__auto___43277 = (0);
while(true){
if((i__31517__auto___43277 < len__31516__auto___43276)){
args__31523__auto__.push((arguments[i__31517__auto___43277]));

var G__43278 = (i__31517__auto___43277 + (1));
i__31517__auto___43277 = G__43278;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((2) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31524__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__43265){
var map__43266 = p__43265;
var map__43266__$1 = ((((!((map__43266 == null)))?((((map__43266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43266):map__43266);
var processable_url_QMARK_ = cljs.core.get.call(null,map__43266__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.call(null,map__43266__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var prevent_default_when_no_match_QMARK_ = cljs.core.get.call(null,map__43266__$1,new cljs.core.Keyword(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",-358623618),cljs.core.constantly.call(null,false));
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t_pushy$core43268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core43268 = (function (dispatch_fn,match_fn,p__43265,map__43266,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_,history,event_keys,meta43269){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.p__43265 = p__43265;
this.map__43266 = map__43266;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.identity_fn = identity_fn;
this.prevent_default_when_no_match_QMARK_ = prevent_default_when_no_match_QMARK_;
this.history = history;
this.event_keys = event_keys;
this.meta43269 = meta43269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pushy.core.t_pushy$core43268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_43270,meta43269__$1){
var self__ = this;
var _43270__$1 = this;
return (new pushy.core.t_pushy$core43268(self__.dispatch_fn,self__.match_fn,self__.p__43265,self__.map__43266,self__.processable_url_QMARK_,self__.identity_fn,self__.prevent_default_when_no_match_QMARK_,self__.history,self__.event_keys,meta43269__$1));
});})(history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core43268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_43270){
var self__ = this;
var _43270__$1 = this;
return self__.meta43269;
});})(history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core43268.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL;

pushy.core.t_pushy$core43268.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core43268.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core43268.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core43268.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core43268.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core43268.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (e){
var temp__5290__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__5290__auto__)){
var match = temp__5290__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
));

var temp__5290__auto___43279 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__5290__auto___43279)){
var match_43280 = temp__5290__auto___43279;
self__.dispatch_fn.call(null,match_43280);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (e){
var temp__5290__auto__ = (function (){var G__43271 = e;
var G__43271__$1 = (((G__43271 == null))?null:G__43271.target);
if((G__43271__$1 == null)){
return null;
} else {
return G__43271__$1.closest("a");
}
})();
if(cljs.core.truth_(temp__5290__auto__)){
var el = temp__5290__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__30227__auto__ = self__.processable_url_QMARK_.call(null,uri);
if(cljs.core.truth_(and__30227__auto__)){
return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (cljs.core.not.call(null,cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && ((cljs.core.not.call(null,el.hasAttribute("data-pushy-ignore"))) || (cljs.core._EQ_.call(null,el.getAttribute("data-pushy-ignore"),"false"))) && (cljs.core._EQ_.call(null,(0),e.button));
} else {
return and__30227__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri.call(null,uri);
if(cljs.core.truth_(self__.identity_fn.call(null,self__.match_fn.call(null,next_token)))){
var temp__5288__auto___43281 = el.title;
if(cljs.core.truth_(temp__5288__auto___43281)){
var title_43282 = temp__5288__auto___43281;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_43282);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,next_token);
}

return e.preventDefault();
} else {
if(cljs.core.truth_(self__.prevent_default_when_no_match_QMARK_.call(null,next_token))){
return e.preventDefault();
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
));

return null;
});})(history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core43268.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__43272_43283 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__43273_43284 = null;
var count__43274_43285 = (0);
var i__43275_43286 = (0);
while(true){
if((i__43275_43286 < count__43274_43285)){
var key_43287 = cljs.core._nth.call(null,chunk__43273_43284,i__43275_43286);
goog.events.unlistenByKey(key_43287);

var G__43288 = seq__43272_43283;
var G__43289 = chunk__43273_43284;
var G__43290 = count__43274_43285;
var G__43291 = (i__43275_43286 + (1));
seq__43272_43283 = G__43288;
chunk__43273_43284 = G__43289;
count__43274_43285 = G__43290;
i__43275_43286 = G__43291;
continue;
} else {
var temp__5290__auto___43292 = cljs.core.seq.call(null,seq__43272_43283);
if(temp__5290__auto___43292){
var seq__43272_43293__$1 = temp__5290__auto___43292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43272_43293__$1)){
var c__31170__auto___43294 = cljs.core.chunk_first.call(null,seq__43272_43293__$1);
var G__43295 = cljs.core.chunk_rest.call(null,seq__43272_43293__$1);
var G__43296 = c__31170__auto___43294;
var G__43297 = cljs.core.count.call(null,c__31170__auto___43294);
var G__43298 = (0);
seq__43272_43283 = G__43295;
chunk__43273_43284 = G__43296;
count__43274_43285 = G__43297;
i__43275_43286 = G__43298;
continue;
} else {
var key_43299 = cljs.core.first.call(null,seq__43272_43293__$1);
goog.events.unlistenByKey(key_43299);

var G__43300 = cljs.core.next.call(null,seq__43272_43293__$1);
var G__43301 = null;
var G__43302 = (0);
var G__43303 = (0);
seq__43272_43283 = G__43300;
chunk__43273_43284 = G__43301;
count__43274_43285 = G__43302;
i__43275_43286 = G__43303;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core43268.getBasis = ((function (history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"p__43265","p__43265",-834078246,null),new cljs.core.Symbol(null,"map__43266","map__43266",-406406728,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",1281907909,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta43269","meta43269",-1283421297,null)], null);
});})(history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core43268.cljs$lang$type = true;

pushy.core.t_pushy$core43268.cljs$lang$ctorStr = "pushy.core/t_pushy$core43268";

pushy.core.t_pushy$core43268.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this__30910__auto__,writer__30911__auto__,opt__30912__auto__){
return cljs.core._write.call(null,writer__30911__auto__,"pushy.core/t_pushy$core43268");
});})(history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.__GT_t_pushy$core43268 = ((function (history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function pushy$core$__GT_t_pushy$core43268(dispatch_fn__$1,match_fn__$1,p__43265__$1,map__43266__$2,processable_url_QMARK___$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,history__$1,event_keys__$1,meta43269){
return (new pushy.core.t_pushy$core43268(dispatch_fn__$1,match_fn__$1,p__43265__$1,map__43266__$2,processable_url_QMARK___$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,history__$1,event_keys__$1,meta43269));
});})(history,event_keys,map__43266,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

}

return (new pushy.core.t_pushy$core43268(dispatch_fn,match_fn,p__43265,map__43266__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

pushy.core.pushy.cljs$lang$applyTo = (function (seq43262){
var G__43263 = cljs.core.first.call(null,seq43262);
var seq43262__$1 = cljs.core.next.call(null,seq43262);
var G__43264 = cljs.core.first.call(null,seq43262__$1);
var seq43262__$2 = cljs.core.next.call(null,seq43262__$1);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(G__43263,G__43264,seq43262__$2);
});

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var G__43305 = arguments.length;
switch (G__43305) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var G__43308 = arguments.length;
switch (G__43308) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map?rel=1507757460337
