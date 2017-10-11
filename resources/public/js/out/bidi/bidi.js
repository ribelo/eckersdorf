// Compiled by ClojureScript 1.9.908 {}
goog.provide('bidi.bidi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
bidi.bidi.url_encode = (function bidi$bidi$url_encode(string){
var G__42197 = string;
var G__42197__$1 = (((G__42197 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42197)].join(''));
var G__42197__$2 = (((G__42197__$1 == null))?null:encodeURIComponent(G__42197__$1));
if((G__42197__$2 == null)){
return null;
} else {
return G__42197__$2.replace("+","%20");
}
});
bidi.bidi.url_decode = (function bidi$bidi$url_decode(string){
var G__42198 = string;
var G__42198__$1 = (((G__42198 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42198)].join(''));
if((G__42198__$1 == null)){
return null;
} else {
return decodeURIComponent(G__42198__$1);
}
});
/**
 * Function for creating a UUID of the appropriate type for the platform.
 * Note that this function should _only_ be used in route patterns as, at least
 * in the case of ClojureScript, it does not validate that the input string is
 * actually a valid UUID (this is handled by the route matching logic).
 */
bidi.bidi.uuid = (function bidi$bidi$uuid(s){
return (new cljs.core.UUID(s));
});

/**
 * @interface
 */
bidi.bidi.ParameterEncoding = function(){};

bidi.bidi.encode_parameter = (function bidi$bidi$encode_parameter(_){
if((!((_ == null))) && (!((_.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 == null)))){
return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1(_);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.bidi.encode_parameter[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_);
} else {
var m__30973__auto____$1 = (bidi.bidi.encode_parameter["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ParameterEncoding.encode-parameter",_);
}
}
}
});

goog.object.set(bidi.bidi.ParameterEncoding,"string",true);

goog.object.set(bidi.bidi.encode_parameter,"string",(function (s){
return s;
}));

goog.object.set(bidi.bidi.ParameterEncoding,"number",true);

goog.object.set(bidi.bidi.encode_parameter,"number",(function (s){
return s;
}));

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (s){
var s__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1)].join('');
});

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (k){
var k__$1 = this;
return bidi.bidi.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,k__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.namespace.call(null,k__$1))?"/":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k__$1))].join(''));
});

/**
 * @interface
 */
bidi.bidi.PatternSegment = function(){};

bidi.bidi.segment_regex_group = (function bidi$bidi$segment_regex_group(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$segment_regex_group$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1(_);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.bidi.segment_regex_group[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_);
} else {
var m__30973__auto____$1 = (bidi.bidi.segment_regex_group["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.segment-regex-group",_);
}
}
}
});

bidi.bidi.param_key = (function bidi$bidi$param_key(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$param_key$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$param_key$arity$1(_);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.bidi.param_key[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_);
} else {
var m__30973__auto____$1 = (bidi.bidi.param_key["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.param-key",_);
}
}
}
});

bidi.bidi.transform_param = (function bidi$bidi$transform_param(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$transform_param$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$transform_param$arity$1(_);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.bidi.transform_param[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_);
} else {
var m__30973__auto____$1 = (bidi.bidi.transform_param["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.transform-param",_);
}
}
}
});

bidi.bidi.unmatch_segment = (function bidi$bidi$unmatch_segment(_,params){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$unmatch_segment$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2(_,params);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.bidi.unmatch_segment[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_,params);
} else {
var m__30973__auto____$1 = (bidi.bidi.unmatch_segment["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_,params);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.unmatch-segment",_);
}
}
}
});

bidi.bidi.matches_QMARK_ = (function bidi$bidi$matches_QMARK_(_,s){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2(_,s);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.bidi.matches_QMARK_[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_,s);
} else {
var m__30973__auto____$1 = (bidi.bidi.matches_QMARK_["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.matches?",_);
}
}
}
});

goog.object.set(bidi.bidi.PatternSegment,"string",true);

goog.object.set(bidi.bidi.segment_regex_group,"string",(function (this$){
return this$;
}));

goog.object.set(bidi.bidi.param_key,"string",(function (_){
return null;
}));

goog.object.set(bidi.bidi.transform_param,"string",(function (_){
return cljs.core.identity;
}));

goog.object.set(bidi.bidi.unmatch_segment,"string",(function (this$,_){
return this$;
}));

RegExp.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1["source"]);
});

RegExp.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (_){
var ___$1 = this;
return null;
});

RegExp.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

RegExp.prototype.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.re_matches.call(null,this$__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.segment_regex_group.call(null,cljs.core.first.call(null,this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
var k = cljs.core.second.call(null,this$__$1);
if((k instanceof cljs.core.Keyword)){
return k;
} else {
throw cljs.core.ex_info.call(null,["If a PatternSegment is represented by a vector, the second\n                               element must be the keyword associated with the pattern: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.transform_param.call(null,cljs.core.first.call(null,this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var k = cljs.core.second.call(null,this$__$1);
if(!((k instanceof cljs.core.Keyword))){
throw cljs.core.ex_info.call(null,["If a PatternSegment is represented by a vector, the second element\n                               must be the key associated with the pattern: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var temp__5288__auto__ = cljs.core.get.call(null,params,k);
if(cljs.core.truth_(temp__5288__auto__)){
var v = temp__5288__auto__;
if(cljs.core.truth_(bidi.bidi.matches_QMARK_.call(null,cljs.core.first.call(null,this$__$1),v))){
return bidi.bidi.encode_parameter.call(null,v);
} else {
throw cljs.core.ex_info.call(null,["Parameter value of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," (key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),") ","is not compatible with the route pattern ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
throw cljs.core.ex_info.call(null,["No parameter found in params for key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (_){
var ___$1 = this;
return "[A-Za-z0-9\\-\\_\\.]+";
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var temp__5288__auto__ = this$__$1.call(null,params);
if(cljs.core.truth_(temp__5288__auto__)){
var v = temp__5288__auto__;
return bidi.bidi.encode_parameter.call(null,v);
} else {
throw cljs.core.ex_info.call(null,["Cannot form URI without a value given for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," parameter"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

goog.object.set(bidi.bidi.PatternSegment,"function",true);

goog.object.set(bidi.bidi.segment_regex_group,"function",(function (this$){
var pred__42202 = cljs.core._EQ_;
var expr__42203 = this$;
if(cljs.core.truth_(pred__42202.call(null,cljs.core.keyword,expr__42203))){
return "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?";
} else {
if(cljs.core.truth_(pred__42202.call(null,cljs.core.long$,expr__42203))){
return "-?\\d{1,19}";
} else {
if(cljs.core.truth_(pred__42202.call(null,bidi.bidi.uuid,expr__42203))){
return "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}";
} else {
if(cljs.core.truth_(pred__42202.call(null,new cljs.core.Keyword(null,"otherwise","otherwise",-1127537137),expr__42203))){
throw cljs.core.ex_info.call(null,["Unidentified function qualifier to pattern segment: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42203)].join('')));
}
}
}
}
}));

goog.object.set(bidi.bidi.transform_param,"function",(function (this$){
var pred__42205 = cljs.core._EQ_;
var expr__42206 = this$;
if(cljs.core.truth_(pred__42205.call(null,cljs.core.keyword,expr__42206))){
return cljs.core.comp.call(null,cljs.core.keyword,bidi.bidi.url_decode);
} else {
if(cljs.core.truth_(pred__42205.call(null,cljs.core.long$,expr__42206))){
return ((function (pred__42205,expr__42206){
return (function (p1__42200_SHARP_){
return Number(p1__42200_SHARP_);
});
;})(pred__42205,expr__42206))
} else {
if(cljs.core.truth_(pred__42205.call(null,bidi.bidi.uuid,expr__42206))){
return bidi.bidi.uuid;
} else {
throw cljs.core.ex_info.call(null,["Unrecognized function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}));

goog.object.set(bidi.bidi.matches_QMARK_,"function",(function (this$,s){
var pred__42208 = cljs.core._EQ_;
var expr__42209 = this$;
if(cljs.core.truth_(pred__42208.call(null,cljs.core.keyword,expr__42209))){
return (s instanceof cljs.core.Keyword);
} else {
if(cljs.core.truth_(pred__42208.call(null,cljs.core.long$,expr__42209))){
return cljs.core.not.call(null,isNaN(s));
} else {
if(cljs.core.truth_(pred__42208.call(null,bidi.bidi.uuid,expr__42209))){
return (s instanceof cljs.core.UUID);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42209)].join('')));
}
}
}
}));

/**
 * @interface
 */
bidi.bidi.Pattern = function(){};

/**
 * Return a new state if this pattern matches the given state, or
 *  falsy otherwise. If a new state is returned it will usually have the
 *  rest of the path to match in the :remainder entry.
 */
bidi.bidi.match_pattern = (function bidi$bidi$match_pattern(_,env){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$match_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$match_pattern$arity$2(_,env);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.bidi.match_pattern[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_,env);
} else {
var m__30973__auto____$1 = (bidi.bidi.match_pattern["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_,env);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.match-pattern",_);
}
}
}
});

bidi.bidi.unmatch_pattern = (function bidi$bidi$unmatch_pattern(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$unmatch_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$unmatch_pattern$arity$2(_,m);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.bidi.unmatch_pattern[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_,m);
} else {
var m__30973__auto____$1 = (bidi.bidi.unmatch_pattern["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.unmatch-pattern",_);
}
}
}
});


/**
 * @interface
 */
bidi.bidi.Matched = function(){};

bidi.bidi.resolve_handler = (function bidi$bidi$resolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$resolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$resolve_handler$arity$2(_,m);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.bidi.resolve_handler[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_,m);
} else {
var m__30973__auto____$1 = (bidi.bidi.resolve_handler["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Matched.resolve-handler",_);
}
}
}
});

bidi.bidi.unresolve_handler = (function bidi$bidi$unresolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$unresolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$unresolve_handler$arity$2(_,m);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.bidi.unresolve_handler[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_,m);
} else {
var m__30973__auto____$1 = (bidi.bidi.unresolve_handler["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Matched.unresolve-handler",_);
}
}
}
});

bidi.bidi.just_path = (function bidi$bidi$just_path(path){
var uri_string = ["file:///",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return cljs.core.subs.call(null,(new goog.Uri(uri_string)).getPath(),(1));
});
/**
 * A pair contains a pattern to match (either fully or partially) and an
 *   expression yielding a handler. The second parameter is a map
 *   containing state, including the remaining path.
 */
bidi.bidi.match_pair = (function bidi$bidi$match_pair(p__42211,orig_env){
var vec__42212 = p__42211;
var pattern = cljs.core.nth.call(null,vec__42212,(0),null);
var matched = cljs.core.nth.call(null,vec__42212,(1),null);
var env = cljs.core.update.call(null,orig_env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),bidi.bidi.just_path);
var temp__5290__auto__ = bidi.bidi.match_pattern.call(null,pattern,env);
if(cljs.core.truth_(temp__5290__auto__)){
var match_result = temp__5290__auto__;
return bidi.bidi.resolve_handler.call(null,matched,match_result);
} else {
return null;
}
});
/**
 * Match the beginning of the :remainder value in m. If matched, update
 *   the :remainder value in m with the path that remains after matching.
 */
bidi.bidi.match_beginning = (function bidi$bidi$match_beginning(regex_pattern,env){
var temp__5290__auto__ = cljs.core.last.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex_pattern),"(.*)"].join('')),new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_(temp__5290__auto__)){
var path = temp__5290__auto__;
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path);
} else {
return null;
}
});
bidi.bidi.succeed = (function bidi$bidi$succeed(handler,m){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(m),"")){
return cljs.core.merge.call(null,cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"remainder","remainder",1046186872)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
} else {
return null;
}
});
goog.object.set(bidi.bidi.Pattern,"string",true);

goog.object.set(bidi.bidi.match_pattern,"string",(function (this$,env){
return bidi.bidi.match_beginning.call(null,["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group.call(null,this$)),")"].join(''),env);
}));

goog.object.set(bidi.bidi.unmatch_pattern,"string",(function (this$,_){
return this$;
}));

RegExp.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
return bidi.bidi.match_beginning.call(null,["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group.call(null,this$__$1)),")"].join(''),env);
});

RegExp.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
var p = this$__$1.pattern();
return bidi.bidi.unmatch_pattern.call(null,clojure.string.replace.call(null,p,/\\\\/,""),m);
});

goog.object.set(bidi.bidi.Pattern,"boolean",true);

goog.object.set(bidi.bidi.match_pattern,"boolean",(function (this$,env){
if(this$){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),"");
} else {
return null;
}
}));

goog.object.set(bidi.bidi.unmatch_pattern,"boolean",(function (this$,_){
if(this$){
return "";
} else {
return null;
}
}));

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
var temp__5290__auto__ = (function (){var _PERCENT_ = this$__$1;
var _PERCENT___$1 = cljs.core.map.call(null,bidi.bidi.segment_regex_group,_PERCENT_);
var _PERCENT___$2 = cljs.core.map.call(null,((function (_PERCENT_,_PERCENT___$1,this$__$1){
return (function (x){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),")"].join('');
});})(_PERCENT_,_PERCENT___$1,this$__$1))
,_PERCENT___$1);
var _PERCENT___$3 = cljs.core.reduce.call(null,cljs.core.str,_PERCENT___$2);
var _PERCENT___$4 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_PERCENT___$3),"(.*)"].join('');
var _PERCENT___$5 = cljs.core.re_pattern.call(null,_PERCENT___$4);
var _PERCENT___$6 = cljs.core.re_matches.call(null,_PERCENT___$5,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env));
return cljs.core.next.call(null,_PERCENT___$6);
})();
if(temp__5290__auto__){
var groups = temp__5290__auto__;
var params = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,bidi.bidi.param_key,this$__$1),cljs.core.map.call(null,cljs.core.apply,cljs.core.map.call(null,bidi.bidi.transform_param,this$__$1),cljs.core.map.call(null,cljs.core.list,cljs.core.butlast.call(null,groups))))));
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remainder","remainder",1046186872)], null),cljs.core.last.call(null,groups)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null),cljs.core.merge,params);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__42215_SHARP_){
return bidi.bidi.unmatch_segment.call(null,p1__42215_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(m));
});})(this$__$1))
,this$__$1));
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(env))){
return env;
} else {
return null;
}
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p__42218){
var vec__42219 = p__42218;
var k = cljs.core.nth.call(null,vec__42219,(0),null);
var v = cljs.core.nth.call(null,vec__42219,(1),null);
if((cljs.core.fn_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v))){
return v.call(null,cljs.core.get.call(null,env,k));
} else {
return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,env,k));

}
});})(this$__$1))
,cljs.core.seq.call(null,this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p__42222){
var vec__42223 = p__42222;
var k = cljs.core.nth.call(null,vec__42223,(0),null);
var v = cljs.core.nth.call(null,vec__42223,(1),null);
if((cljs.core.fn_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v))){
return v.call(null,cljs.core.get.call(null,env,k));
} else {
return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,env,k));

}
});})(this$__$1))
,cljs.core.seq.call(null,this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__42216_SHARP_){
return bidi.bidi.match_pattern.call(null,p1__42216_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,this$__$1),s);
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__42217_SHARP_){
return bidi.bidi.match_pattern.call(null,p1__42217_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,this$__$1),s);
});
bidi.bidi.unmatch_pair = (function bidi$bidi$unmatch_pair(v,m){
var temp__5290__auto__ = bidi.bidi.unresolve_handler.call(null,cljs.core.second.call(null,v),m);
if(cljs.core.truth_(temp__5290__auto__)){
var r = temp__5290__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,v),m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
} else {
return null;
}
});
goog.object.set(bidi.bidi.Matched,"null",true);

goog.object.set(bidi.bidi.resolve_handler,"null",(function (this$,m){
return null;
}));

goog.object.set(bidi.bidi.unresolve_handler,"null",(function (this$,m){
return null;
}));

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__42226_SHARP_){
return bidi.bidi.match_pair.call(null,p1__42226_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__42227_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__42227_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Var.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Var.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed.call(null,this$__$1,m);
});

cljs.core.Var.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.unresolve_handler.call(null,cljs.core.deref.call(null,this$__$1),m);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__42230_SHARP_){
return bidi.bidi.match_pair.call(null,p1__42230_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__42231_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__42231_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__42228_SHARP_){
return bidi.bidi.match_pair.call(null,p1__42228_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__42229_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__42229_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

goog.object.set(bidi.bidi.Matched,"string",true);

goog.object.set(bidi.bidi.unresolve_handler,"string",(function (_,___$1){
return null;
}));

cljs.core.Symbol.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed.call(null,this$__$1,m);
});

cljs.core.Symbol.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});

goog.object.set(bidi.bidi.Matched,"function",true);

goog.object.set(bidi.bidi.resolve_handler,"function",(function (this$,m){
return bidi.bidi.succeed.call(null,this$,m);
}));

goog.object.set(bidi.bidi.unresolve_handler,"function",(function (this$,m){
if(cljs.core._EQ_.call(null,this$,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
}));

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__42232_SHARP_){
return bidi.bidi.match_pair.call(null,p1__42232_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__42233_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__42233_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__42234_SHARP_){
return bidi.bidi.match_pair.call(null,p1__42234_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__42235_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__42235_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed.call(null,this$__$1,m);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});
bidi.bidi.match_route_STAR_ = (function bidi$bidi$match_route_STAR_(route,path,options){
return cljs.core.dissoc.call(null,bidi.bidi.match_pair.call(null,route,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path,new cljs.core.Keyword(null,"route","route",329891309),route)),new cljs.core.Keyword(null,"route","route",329891309));
});
/**
 * Given a route definition data structure and a path, return the
 *   handler, if any, that matches the path.
 */
bidi.bidi.match_route = (function bidi$bidi$match_route(var_args){
var args__31523__auto__ = [];
var len__31516__auto___42242 = arguments.length;
var i__31517__auto___42243 = (0);
while(true){
if((i__31517__auto___42243 < len__31516__auto___42242)){
args__31523__auto__.push((arguments[i__31517__auto___42243]));

var G__42244 = (i__31517__auto___42243 + (1));
i__31517__auto___42243 = G__42244;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((2) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((2)),(0),null)):null);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31524__auto__);
});

bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic = (function (route,path,p__42239){
var map__42240 = p__42239;
var map__42240__$1 = ((((!((map__42240 == null)))?((((map__42240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42240):map__42240);
var options = map__42240__$1;
return bidi.bidi.match_route_STAR_.call(null,route,path,options);
});

bidi.bidi.match_route.cljs$lang$maxFixedArity = (2);

bidi.bidi.match_route.cljs$lang$applyTo = (function (seq42236){
var G__42237 = cljs.core.first.call(null,seq42236);
var seq42236__$1 = cljs.core.next.call(null,seq42236);
var G__42238 = cljs.core.first.call(null,seq42236__$1);
var seq42236__$2 = cljs.core.next.call(null,seq42236__$1);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic(G__42237,G__42238,seq42236__$2);
});

/**
 * Given a route definition data structure, a handler and an option map, return a
 *   path that would route to the handler. The map must contain the values to any
 *   parameters required to create the path, and extra values are silently ignored.
 */
bidi.bidi.path_for = (function bidi$bidi$path_for(var_args){
var args__31523__auto__ = [];
var len__31516__auto___42251 = arguments.length;
var i__31517__auto___42252 = (0);
while(true){
if((i__31517__auto___42252 < len__31516__auto___42251)){
args__31523__auto__.push((arguments[i__31517__auto___42252]));

var G__42253 = (i__31517__auto___42252 + (1));
i__31517__auto___42252 = G__42253;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((2) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((2)),(0),null)):null);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31524__auto__);
});

bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,handler,p__42248){
var map__42249 = p__42248;
var map__42249__$1 = ((((!((map__42249 == null)))?((((map__42249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42249):map__42249);
var params = map__42249__$1;
if((handler == null)){
throw cljs.core.ex_info.call(null,"Cannot form URI from a nil handler",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return bidi.bidi.unmatch_pair.call(null,route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params], null));
});

bidi.bidi.path_for.cljs$lang$maxFixedArity = (2);

bidi.bidi.path_for.cljs$lang$applyTo = (function (seq42245){
var G__42246 = cljs.core.first.call(null,seq42245);
var seq42245__$1 = cljs.core.next.call(null,seq42245);
var G__42247 = cljs.core.first.call(null,seq42245__$1);
var seq42245__$2 = cljs.core.next.call(null,seq42245__$1);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic(G__42246,G__42247,seq42245__$2);
});


/**
 * @interface
 */
bidi.bidi.Matches = function(){};

/**
 * A protocol used in the expansion of possible matches that the pattern can match. This is used to gather all possible routes using route-seq below.
 */
bidi.bidi.matches = (function bidi$bidi$matches(_){
if((!((_ == null))) && (!((_.bidi$bidi$Matches$matches$arity$1 == null)))){
return _.bidi$bidi$Matches$matches$arity$1(_);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.bidi.matches[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_);
} else {
var m__30973__auto____$1 = (bidi.bidi.matches["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Matches.matches",_);
}
}
}
});

goog.object.set(bidi.bidi.Matches,"_",true);

goog.object.set(bidi.bidi.matches,"_",(function (this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null);
}));

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.Route = (function (handler,path,__meta,__extmap,__hash){
this.handler = handler;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30927__auto__,k__30928__auto__){
var self__ = this;
var this__30927__auto____$1 = this;
return this__30927__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30928__auto__,null);
});

bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30929__auto__,k42255,else__30930__auto__){
var self__ = this;
var this__30929__auto____$1 = this;
var G__42259 = k42255;
var G__42259__$1 = (((G__42259 instanceof cljs.core.Keyword))?G__42259.fqn:null);
switch (G__42259__$1) {
case "handler":
return self__.handler;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42255,else__30930__auto__);

}
});

bidi.bidi.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30941__auto__,writer__30942__auto__,opts__30943__auto__){
var self__ = this;
var this__30941__auto____$1 = this;
var pr_pair__30944__auto__ = ((function (this__30941__auto____$1){
return (function (keyval__30945__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30942__auto__,cljs.core.pr_writer,""," ","",opts__30943__auto__,keyval__30945__auto__);
});})(this__30941__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30942__auto__,pr_pair__30944__auto__,"#bidi.bidi.Route{",", ","}",opts__30943__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42254){
var self__ = this;
var G__42254__$1 = this;
return (new cljs.core.RecordIter((0),G__42254__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30925__auto__){
var self__ = this;
var this__30925__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30922__auto__){
var self__ = this;
var this__30922__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30931__auto__){
var self__ = this;
var this__30931__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30923__auto__){
var self__ = this;
var this__30923__auto____$1 = this;
var h__30695__auto__ = self__.__hash;
if(!((h__30695__auto__ == null))){
return h__30695__auto__;
} else {
var h__30695__auto____$1 = ((function (h__30695__auto__,this__30923__auto____$1){
return (function (coll__30924__auto__){
return (-350230779 ^ cljs.core.hash_unordered_coll.call(null,coll__30924__auto__));
});})(h__30695__auto__,this__30923__auto____$1))
.call(null,this__30923__auto____$1);
self__.__hash = h__30695__auto____$1;

return h__30695__auto____$1;
}
});

bidi.bidi.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42256,other42257){
var self__ = this;
var this42256__$1 = this;
return (!((other42257 == null))) && ((this42256__$1.constructor === other42257.constructor)) && (cljs.core._EQ_.call(null,this42256__$1.handler,other42257.handler)) && (cljs.core._EQ_.call(null,this42256__$1.path,other42257.path)) && (cljs.core._EQ_.call(null,this42256__$1.__extmap,other42257.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30936__auto__,k__30937__auto__){
var self__ = this;
var this__30936__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__30937__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30936__auto____$1),self__.__meta),k__30937__auto__);
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30937__auto__)),null));
}
});

bidi.bidi.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30934__auto__,k__30935__auto__,G__42254){
var self__ = this;
var this__30934__auto____$1 = this;
var pred__42260 = cljs.core.keyword_identical_QMARK_;
var expr__42261 = k__30935__auto__;
if(cljs.core.truth_(pred__42260.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__42261))){
return (new bidi.bidi.Route(G__42254,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42260.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__42261))){
return (new bidi.bidi.Route(self__.handler,G__42254,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30935__auto__,G__42254),null));
}
}
});

bidi.bidi.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30939__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30926__auto__,G__42254){
var self__ = this;
var this__30926__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,G__42254,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30932__auto__,entry__30933__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30933__auto__)){
return this__30932__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30933__auto__,(0)),cljs.core._nth.call(null,entry__30933__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30932__auto____$1,entry__30933__auto__);
}
});

bidi.bidi.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

bidi.bidi.Route.cljs$lang$type = true;

bidi.bidi.Route.cljs$lang$ctorPrSeq = (function (this__30965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/Route");
});

bidi.bidi.Route.cljs$lang$ctorPrWriter = (function (this__30965__auto__,writer__30966__auto__){
return cljs.core._write.call(null,writer__30966__auto__,"bidi.bidi/Route");
});

bidi.bidi.__GT_Route = (function bidi$bidi$__GT_Route(handler,path){
return (new bidi.bidi.Route(handler,path,null,null,null));
});

bidi.bidi.map__GT_Route = (function bidi$bidi$map__GT_Route(G__42258){
return (new bidi.bidi.Route(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__42258),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__42258),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42258,new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"path","path",-188191168))),null));
});


/**
 * @interface
 */
bidi.bidi.RouteSeq = function(){};

/**
 * Return a sequence of leaves
 */
bidi.bidi.gather = (function bidi$bidi$gather(_,context){
if((!((_ == null))) && (!((_.bidi$bidi$RouteSeq$gather$arity$2 == null)))){
return _.bidi$bidi$RouteSeq$gather$arity$2(_,context);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.bidi.gather[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_,context);
} else {
var m__30973__auto____$1 = (bidi.bidi.gather["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_,context);
} else {
throw cljs.core.missing_protocol.call(null,"RouteSeq.gather",_);
}
}
}
});

bidi.bidi.route_seq = (function bidi$bidi$route_seq(var_args){
var G__42265 = arguments.length;
switch (G__42265) {
case 2:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2 = (function (p__42266,ctx){
var vec__42267 = p__42266;
var pattern = cljs.core.nth.call(null,vec__42267,(0),null);
var matched = cljs.core.nth.call(null,vec__42267,(1),null);
return cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__31121__auto__ = ((function (vec__42267,pattern,matched){
return (function bidi$bidi$iter__42270(s__42271){
return (new cljs.core.LazySeq(null,((function (vec__42267,pattern,matched){
return (function (){
var s__42271__$1 = s__42271;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__42271__$1);
if(temp__5290__auto__){
var s__42271__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42271__$2)){
var c__31119__auto__ = cljs.core.chunk_first.call(null,s__42271__$2);
var size__31120__auto__ = cljs.core.count.call(null,c__31119__auto__);
var b__42273 = cljs.core.chunk_buffer.call(null,size__31120__auto__);
if((function (){var i__42272 = (0);
while(true){
if((i__42272 < size__31120__auto__)){
var p = cljs.core._nth.call(null,c__31119__auto__,i__42272);
cljs.core.chunk_append.call(null,b__42273,bidi.bidi.gather.call(null,matched,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)));

var G__42275 = (i__42272 + (1));
i__42272 = G__42275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42273),bidi$bidi$iter__42270.call(null,cljs.core.chunk_rest.call(null,s__42271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42273),null);
}
} else {
var p = cljs.core.first.call(null,s__42271__$2);
return cljs.core.cons.call(null,bidi.bidi.gather.call(null,matched,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)),bidi$bidi$iter__42270.call(null,cljs.core.rest.call(null,s__42271__$2)));
}
} else {
return null;
}
break;
}
});})(vec__42267,pattern,matched))
,null,null));
});})(vec__42267,pattern,matched))
;
return iter__31121__auto__.call(null,bidi.bidi.matches.call(null,pattern));
})());
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1 = (function (route){
return bidi.bidi.route_seq.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});

bidi.bidi.route_seq.cljs$lang$maxFixedArity = 2;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__42276_SHARP_){
return bidi.bidi.route_seq.call(null,p1__42276_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__42277_SHARP_){
return bidi.bidi.route_seq.call(null,p1__42277_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__42278_SHARP_){
return bidi.bidi.route_seq.call(null,p1__42278_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__42279_SHARP_){
return bidi.bidi.route_seq.call(null,p1__42279_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__42280_SHARP_){
return bidi.bidi.route_seq.call(null,p1__42280_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

goog.object.set(bidi.bidi.RouteSeq,"_",true);

goog.object.set(bidi.bidi.gather,"_",(function (this$,context){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"handler","handler",-195596612),this$))], null);
}));

/**
 * @interface
 */
bidi.bidi.RouteProvider = function(){};

/**
 * Provide a bidi route structure. Returns a vector pair,
 *   the first element is the pattern, the second element is the matched
 *   route or routes.
 */
bidi.bidi.routes = (function bidi$bidi$routes(_){
if((!((_ == null))) && (!((_.bidi$bidi$RouteProvider$routes$arity$1 == null)))){
return _.bidi$bidi$RouteProvider$routes$arity$1(_);
} else {
var x__30972__auto__ = (((_ == null))?null:_);
var m__30973__auto__ = (bidi.bidi.routes[goog.typeOf(x__30972__auto__)]);
if(!((m__30973__auto__ == null))){
return m__30973__auto__.call(null,_);
} else {
var m__30973__auto____$1 = (bidi.bidi.routes["_"]);
if(!((m__30973__auto____$1 == null))){
return m__30973__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"RouteProvider.routes",_);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {bidi.bidi.Matches}
 * @implements {cljs.core.ICounted}
 * @implements {bidi.bidi.Pattern}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.Alternates = (function (alts,__meta,__extmap,__hash){
this.alts = alts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30927__auto__,k__30928__auto__){
var self__ = this;
var this__30927__auto____$1 = this;
return this__30927__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30928__auto__,null);
});

bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30929__auto__,k42283,else__30930__auto__){
var self__ = this;
var this__30929__auto____$1 = this;
var G__42287 = k42283;
var G__42287__$1 = (((G__42287 instanceof cljs.core.Keyword))?G__42287.fqn:null);
switch (G__42287__$1) {
case "alts":
return self__.alts;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42283,else__30930__auto__);

}
});

bidi.bidi.Alternates.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30941__auto__,writer__30942__auto__,opts__30943__auto__){
var self__ = this;
var this__30941__auto____$1 = this;
var pr_pair__30944__auto__ = ((function (this__30941__auto____$1){
return (function (keyval__30945__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30942__auto__,cljs.core.pr_writer,""," ","",opts__30943__auto__,keyval__30945__auto__);
});})(this__30941__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30942__auto__,pr_pair__30944__auto__,"#bidi.bidi.Alternates{",", ","}",opts__30943__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alts","alts",647552416),self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42282){
var self__ = this;
var G__42282__$1 = this;
return (new cljs.core.RecordIter((0),G__42282__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alts","alts",647552416)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.Alternates.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30925__auto__){
var self__ = this;
var this__30925__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Alternates.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30922__auto__){
var self__ = this;
var this__30922__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30931__auto__){
var self__ = this;
var this__30931__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30923__auto__){
var self__ = this;
var this__30923__auto____$1 = this;
var h__30695__auto__ = self__.__hash;
if(!((h__30695__auto__ == null))){
return h__30695__auto__;
} else {
var h__30695__auto____$1 = ((function (h__30695__auto__,this__30923__auto____$1){
return (function (coll__30924__auto__){
return (1584309265 ^ cljs.core.hash_unordered_coll.call(null,coll__30924__auto__));
});})(h__30695__auto__,this__30923__auto____$1))
.call(null,this__30923__auto____$1);
self__.__hash = h__30695__auto____$1;

return h__30695__auto____$1;
}
});

bidi.bidi.Alternates.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42284,other42285){
var self__ = this;
var this42284__$1 = this;
return (!((other42285 == null))) && ((this42284__$1.constructor === other42285.constructor)) && (cljs.core._EQ_.call(null,this42284__$1.alts,other42285.alts)) && (cljs.core._EQ_.call(null,this42284__$1.__extmap,other42285.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30936__auto__,k__30937__auto__){
var self__ = this;
var this__30936__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alts","alts",647552416),null], null), null),k__30937__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30936__auto____$1),self__.__meta),k__30937__auto__);
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30937__auto__)),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30934__auto__,k__30935__auto__,G__42282){
var self__ = this;
var this__30934__auto____$1 = this;
var pred__42288 = cljs.core.keyword_identical_QMARK_;
var expr__42289 = k__30935__auto__;
if(cljs.core.truth_(pred__42288.call(null,new cljs.core.Keyword(null,"alts","alts",647552416),expr__42289))){
return (new bidi.bidi.Alternates(G__42282,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30935__auto__,G__42282),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30939__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alts","alts",647552416),self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30926__auto__,G__42282){
var self__ = this;
var this__30926__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,G__42282,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30932__auto__,entry__30933__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30933__auto__)){
return this__30932__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30933__auto__,(0)),cljs.core._nth.call(null,entry__30933__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30932__auto____$1,entry__30933__auto__);
}
});

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$matches$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.alts;
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__42281_SHARP_){
return bidi.bidi.match_pattern.call(null,p1__42281_SHARP_,m);
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,self__.alts));
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,self__.alts),m);
});

bidi.bidi.Alternates.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alts","alts",-2006883353,null)], null);
});

bidi.bidi.Alternates.cljs$lang$type = true;

bidi.bidi.Alternates.cljs$lang$ctorPrSeq = (function (this__30965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/Alternates");
});

bidi.bidi.Alternates.cljs$lang$ctorPrWriter = (function (this__30965__auto__,writer__30966__auto__){
return cljs.core._write.call(null,writer__30966__auto__,"bidi.bidi/Alternates");
});

bidi.bidi.__GT_Alternates = (function bidi$bidi$__GT_Alternates(alts){
return (new bidi.bidi.Alternates(alts,null,null,null));
});

bidi.bidi.map__GT_Alternates = (function bidi$bidi$map__GT_Alternates(G__42286){
return (new bidi.bidi.Alternates(new cljs.core.Keyword(null,"alts","alts",647552416).cljs$core$IFn$_invoke$arity$1(G__42286),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42286,new cljs.core.Keyword(null,"alts","alts",647552416))),null));
});

bidi.bidi.alts = (function bidi$bidi$alts(var_args){
var args__31523__auto__ = [];
var len__31516__auto___42293 = arguments.length;
var i__31517__auto___42294 = (0);
while(true){
if((i__31517__auto___42294 < len__31516__auto___42293)){
args__31523__auto__.push((arguments[i__31517__auto___42294]));

var G__42295 = (i__31517__auto___42294 + (1));
i__31517__auto___42294 = G__42295;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic = (function (alts){
return bidi.bidi.__GT_Alternates.call(null,alts);
});

bidi.bidi.alts.cljs$lang$maxFixedArity = (0);

bidi.bidi.alts.cljs$lang$applyTo = (function (seq42292){
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42292));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.TaggedMatch = (function (matched,tag,__meta,__extmap,__hash){
this.matched = matched;
this.tag = tag;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30927__auto__,k__30928__auto__){
var self__ = this;
var this__30927__auto____$1 = this;
return this__30927__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30928__auto__,null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30929__auto__,k42297,else__30930__auto__){
var self__ = this;
var this__30929__auto____$1 = this;
var G__42301 = k42297;
var G__42301__$1 = (((G__42301 instanceof cljs.core.Keyword))?G__42301.fqn:null);
switch (G__42301__$1) {
case "matched":
return self__.matched;

break;
case "tag":
return self__.tag;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42297,else__30930__auto__);

}
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"handler","handler",-195596612),self__.matched,new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag))], null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30941__auto__,writer__30942__auto__,opts__30943__auto__){
var self__ = this;
var this__30941__auto____$1 = this;
var pr_pair__30944__auto__ = ((function (this__30941__auto____$1){
return (function (keyval__30945__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30942__auto__,cljs.core.pr_writer,""," ","",opts__30943__auto__,keyval__30945__auto__);
});})(this__30941__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30942__auto__,pr_pair__30944__auto__,"#bidi.bidi.TaggedMatch{",", ","}",opts__30943__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matched","matched",-975207164),self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42296){
var self__ = this;
var G__42296__$1 = this;
return (new cljs.core.RecordIter((0),G__42296__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matched","matched",-975207164),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler.call(null,self__.matched,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(((new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,self__.tag,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m)))){
return "";
} else {
return bidi.bidi.unresolve_handler.call(null,self__.matched,m);
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30925__auto__){
var self__ = this;
var this__30925__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30922__auto__){
var self__ = this;
var this__30922__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30931__auto__){
var self__ = this;
var this__30931__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30923__auto__){
var self__ = this;
var this__30923__auto____$1 = this;
var h__30695__auto__ = self__.__hash;
if(!((h__30695__auto__ == null))){
return h__30695__auto__;
} else {
var h__30695__auto____$1 = ((function (h__30695__auto__,this__30923__auto____$1){
return (function (coll__30924__auto__){
return (1322093519 ^ cljs.core.hash_unordered_coll.call(null,coll__30924__auto__));
});})(h__30695__auto__,this__30923__auto____$1))
.call(null,this__30923__auto____$1);
self__.__hash = h__30695__auto____$1;

return h__30695__auto____$1;
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42298,other42299){
var self__ = this;
var this42298__$1 = this;
return (!((other42299 == null))) && ((this42298__$1.constructor === other42299.constructor)) && (cljs.core._EQ_.call(null,this42298__$1.matched,other42299.matched)) && (cljs.core._EQ_.call(null,this42298__$1.tag,other42299.tag)) && (cljs.core._EQ_.call(null,this42298__$1.__extmap,other42299.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30936__auto__,k__30937__auto__){
var self__ = this;
var this__30936__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"matched","matched",-975207164),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__30937__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30936__auto____$1),self__.__meta),k__30937__auto__);
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30937__auto__)),null));
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30934__auto__,k__30935__auto__,G__42296){
var self__ = this;
var this__30934__auto____$1 = this;
var pred__42302 = cljs.core.keyword_identical_QMARK_;
var expr__42303 = k__30935__auto__;
if(cljs.core.truth_(pred__42302.call(null,new cljs.core.Keyword(null,"matched","matched",-975207164),expr__42303))){
return (new bidi.bidi.TaggedMatch(G__42296,self__.tag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42302.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__42303))){
return (new bidi.bidi.TaggedMatch(self__.matched,G__42296,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30935__auto__,G__42296),null));
}
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30939__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matched","matched",-975207164),self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30926__auto__,G__42296){
var self__ = this;
var this__30926__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,G__42296,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30932__auto__,entry__30933__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30933__auto__)){
return this__30932__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30933__auto__,(0)),cljs.core._nth.call(null,entry__30933__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30932__auto____$1,entry__30933__auto__);
}
});

bidi.bidi.TaggedMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matched","matched",665324363,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null);
});

bidi.bidi.TaggedMatch.cljs$lang$type = true;

bidi.bidi.TaggedMatch.cljs$lang$ctorPrSeq = (function (this__30965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/TaggedMatch");
});

bidi.bidi.TaggedMatch.cljs$lang$ctorPrWriter = (function (this__30965__auto__,writer__30966__auto__){
return cljs.core._write.call(null,writer__30966__auto__,"bidi.bidi/TaggedMatch");
});

bidi.bidi.__GT_TaggedMatch = (function bidi$bidi$__GT_TaggedMatch(matched,tag){
return (new bidi.bidi.TaggedMatch(matched,tag,null,null,null));
});

bidi.bidi.map__GT_TaggedMatch = (function bidi$bidi$map__GT_TaggedMatch(G__42300){
return (new bidi.bidi.TaggedMatch(new cljs.core.Keyword(null,"matched","matched",-975207164).cljs$core$IFn$_invoke$arity$1(G__42300),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__42300),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42300,new cljs.core.Keyword(null,"matched","matched",-975207164),new cljs.core.Keyword(null,"tag","tag",-1290361223))),null));
});

bidi.bidi.tag = (function bidi$bidi$tag(matched,tag){
return bidi.bidi.__GT_TaggedMatch.call(null,matched,tag);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.IdentifiableHandler = (function (id,handler,__meta,__extmap,__hash){
this.id = id;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30927__auto__,k__30928__auto__){
var self__ = this;
var this__30927__auto____$1 = this;
return this__30927__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30928__auto__,null);
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30929__auto__,k42307,else__30930__auto__){
var self__ = this;
var this__30929__auto____$1 = this;
var G__42311 = k42307;
var G__42311__$1 = (((G__42311 instanceof cljs.core.Keyword))?G__42311.fqn:null);
switch (G__42311__$1) {
case "id":
return self__.id;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42307,else__30930__auto__);

}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30941__auto__,writer__30942__auto__,opts__30943__auto__){
var self__ = this;
var this__30941__auto____$1 = this;
var pr_pair__30944__auto__ = ((function (this__30941__auto____$1){
return (function (keyval__30945__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30942__auto__,cljs.core.pr_writer,""," ","",opts__30943__auto__,keyval__30945__auto__);
});})(this__30941__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30942__auto__,pr_pair__30944__auto__,"#bidi.bidi.IdentifiableHandler{",", ","}",opts__30943__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42306){
var self__ = this;
var G__42306__$1 = this;
return (new cljs.core.RecordIter((0),G__42306__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler.call(null,self__.handler,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.id)){
if(cljs.core._EQ_.call(null,self__.id,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return bidi.bidi.unresolve_handler.call(null,self__.handler,m);
}
} else {
return null;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30925__auto__){
var self__ = this;
var this__30925__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30922__auto__){
var self__ = this;
var this__30922__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30931__auto__){
var self__ = this;
var this__30931__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30923__auto__){
var self__ = this;
var this__30923__auto____$1 = this;
var h__30695__auto__ = self__.__hash;
if(!((h__30695__auto__ == null))){
return h__30695__auto__;
} else {
var h__30695__auto____$1 = ((function (h__30695__auto__,this__30923__auto____$1){
return (function (coll__30924__auto__){
return (-1607629977 ^ cljs.core.hash_unordered_coll.call(null,coll__30924__auto__));
});})(h__30695__auto__,this__30923__auto____$1))
.call(null,this__30923__auto____$1);
self__.__hash = h__30695__auto____$1;

return h__30695__auto____$1;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42308,other42309){
var self__ = this;
var this42308__$1 = this;
return (!((other42309 == null))) && ((this42308__$1.constructor === other42309.constructor)) && (cljs.core._EQ_.call(null,this42308__$1.id,other42309.id)) && (cljs.core._EQ_.call(null,this42308__$1.handler,other42309.handler)) && (cljs.core._EQ_.call(null,this42308__$1.__extmap,other42309.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30936__auto__,k__30937__auto__){
var self__ = this;
var this__30936__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__30937__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30936__auto____$1),self__.__meta),k__30937__auto__);
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30937__auto__)),null));
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30934__auto__,k__30935__auto__,G__42306){
var self__ = this;
var this__30934__auto____$1 = this;
var pred__42312 = cljs.core.keyword_identical_QMARK_;
var expr__42313 = k__30935__auto__;
if(cljs.core.truth_(pred__42312.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__42313))){
return (new bidi.bidi.IdentifiableHandler(G__42306,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42312.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__42313))){
return (new bidi.bidi.IdentifiableHandler(self__.id,G__42306,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30935__auto__,G__42306),null));
}
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30939__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30926__auto__,G__42306){
var self__ = this;
var this__30926__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,G__42306,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30932__auto__,entry__30933__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30933__auto__)){
return this__30932__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30933__auto__,(0)),cljs.core._nth.call(null,entry__30933__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30932__auto____$1,entry__30933__auto__);
}
});

bidi.bidi.IdentifiableHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
});

bidi.bidi.IdentifiableHandler.cljs$lang$type = true;

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrSeq = (function (this__30965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/IdentifiableHandler");
});

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrWriter = (function (this__30965__auto__,writer__30966__auto__){
return cljs.core._write.call(null,writer__30966__auto__,"bidi.bidi/IdentifiableHandler");
});

bidi.bidi.__GT_IdentifiableHandler = (function bidi$bidi$__GT_IdentifiableHandler(id,handler){
return (new bidi.bidi.IdentifiableHandler(id,handler,null,null,null));
});

bidi.bidi.map__GT_IdentifiableHandler = (function bidi$bidi$map__GT_IdentifiableHandler(G__42310){
return (new bidi.bidi.IdentifiableHandler(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__42310),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__42310),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42310,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"handler","handler",-195596612))),null));
});

bidi.bidi.handler = (function bidi$bidi$handler(var_args){
var G__42317 = arguments.length;
switch (G__42317) {
case 2:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2 = (function (k,handler){
return bidi.bidi.__GT_IdentifiableHandler.call(null,k,handler);
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return bidi.bidi.__GT_IdentifiableHandler.call(null,null,handler);
});

bidi.bidi.handler.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.RoutesContext = (function (routes,context,__meta,__extmap,__hash){
this.routes = routes;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30927__auto__,k__30928__auto__){
var self__ = this;
var this__30927__auto____$1 = this;
return this__30927__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30928__auto__,null);
});

bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30929__auto__,k42320,else__30930__auto__){
var self__ = this;
var this__30929__auto____$1 = this;
var G__42324 = k42320;
var G__42324__$1 = (((G__42324 instanceof cljs.core.Keyword))?G__42324.fqn:null);
switch (G__42324__$1) {
case "routes":
return self__.routes;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42320,else__30930__auto__);

}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (_,context__$1){
var self__ = this;
var ___$1 = this;
return bidi.bidi.gather.call(null,self__.routes,context__$1);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30941__auto__,writer__30942__auto__,opts__30943__auto__){
var self__ = this;
var this__30941__auto____$1 = this;
var pr_pair__30944__auto__ = ((function (this__30941__auto____$1){
return (function (keyval__30945__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30942__auto__,cljs.core.pr_writer,""," ","",opts__30943__auto__,keyval__30945__auto__);
});})(this__30941__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30942__auto__,pr_pair__30944__auto__,"#bidi.bidi.RoutesContext{",", ","}",opts__30943__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42319){
var self__ = this;
var G__42319__$1 = this;
return (new cljs.core.RecordIter((0),G__42319__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var temp__5290__auto__ = bidi.bidi.resolve_handler.call(null,self__.routes,m);
if(cljs.core.truth_(temp__5290__auto__)){
var m__$1 = temp__5290__auto__;
return cljs.core.merge.call(null,self__.context,m__$1);
} else {
return null;
}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return bidi.bidi.unresolve_handler.call(null,self__.routes,m);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30925__auto__){
var self__ = this;
var this__30925__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30922__auto__){
var self__ = this;
var this__30922__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30931__auto__){
var self__ = this;
var this__30931__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30923__auto__){
var self__ = this;
var this__30923__auto____$1 = this;
var h__30695__auto__ = self__.__hash;
if(!((h__30695__auto__ == null))){
return h__30695__auto__;
} else {
var h__30695__auto____$1 = ((function (h__30695__auto__,this__30923__auto____$1){
return (function (coll__30924__auto__){
return (-736389484 ^ cljs.core.hash_unordered_coll.call(null,coll__30924__auto__));
});})(h__30695__auto__,this__30923__auto____$1))
.call(null,this__30923__auto____$1);
self__.__hash = h__30695__auto____$1;

return h__30695__auto____$1;
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42321,other42322){
var self__ = this;
var this42321__$1 = this;
return (!((other42322 == null))) && ((this42321__$1.constructor === other42322.constructor)) && (cljs.core._EQ_.call(null,this42321__$1.routes,other42322.routes)) && (cljs.core._EQ_.call(null,this42321__$1.context,other42322.context)) && (cljs.core._EQ_.call(null,this42321__$1.__extmap,other42322.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30936__auto__,k__30937__auto__){
var self__ = this;
var this__30936__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"context","context",-830191113),null], null), null),k__30937__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30936__auto____$1),self__.__meta),k__30937__auto__);
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30937__auto__)),null));
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30934__auto__,k__30935__auto__,G__42319){
var self__ = this;
var this__30934__auto____$1 = this;
var pred__42325 = cljs.core.keyword_identical_QMARK_;
var expr__42326 = k__30935__auto__;
if(cljs.core.truth_(pred__42325.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__42326))){
return (new bidi.bidi.RoutesContext(G__42319,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42325.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__42326))){
return (new bidi.bidi.RoutesContext(self__.routes,G__42319,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30935__auto__,G__42319),null));
}
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30939__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30926__auto__,G__42319){
var self__ = this;
var this__30926__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,G__42319,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30932__auto__,entry__30933__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30933__auto__)){
return this__30932__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30933__auto__,(0)),cljs.core._nth.call(null,entry__30933__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30932__auto____$1,entry__30933__auto__);
}
});

bidi.bidi.RoutesContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
});

bidi.bidi.RoutesContext.cljs$lang$type = true;

bidi.bidi.RoutesContext.cljs$lang$ctorPrSeq = (function (this__30965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/RoutesContext");
});

bidi.bidi.RoutesContext.cljs$lang$ctorPrWriter = (function (this__30965__auto__,writer__30966__auto__){
return cljs.core._write.call(null,writer__30966__auto__,"bidi.bidi/RoutesContext");
});

bidi.bidi.__GT_RoutesContext = (function bidi$bidi$__GT_RoutesContext(routes,context){
return (new bidi.bidi.RoutesContext(routes,context,null,null,null));
});

bidi.bidi.map__GT_RoutesContext = (function bidi$bidi$map__GT_RoutesContext(G__42323){
return (new bidi.bidi.RoutesContext(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__42323),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__42323),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42323,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"context","context",-830191113))),null));
});

/**
 * Wrap a Matched such that a successful match will merge the given
 *   context with the match-context. The merge is such that where there
 *   is a conflict, the inner sub-tree overrides the outer container.
 */
bidi.bidi.routes_context = (function bidi$bidi$routes_context(routes,context){
return bidi.bidi.__GT_RoutesContext.call(null,routes,context);
});
bidi.bidi.compile_route = (function bidi$bidi$compile_route(route){
return route;
});

//# sourceMappingURL=bidi.js.map?rel=1507757459040
