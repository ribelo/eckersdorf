// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__30982__auto__ = (((obj == null))?null:obj);
var m__30983__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__30982__auto__)]);
if(!((m__30983__auto__ == null))){
return m__30983__auto__.call(null,obj);
} else {
var m__30983__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__30983__auto____$1 == null))){
return m__30983__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__41833 = millis;
if((G__41833 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__41833);
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first.call(null,(function (){var iter__31131__auto__ = (function cljs_time$coerce$from_string_$_iter__41834(s__41835){
return (new cljs.core.LazySeq(null,(function (){
var s__41835__$1 = s__41835;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__41835__$1);
if(temp__5290__auto__){
var s__41835__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41835__$2)){
var c__31129__auto__ = cljs.core.chunk_first.call(null,s__41835__$2);
var size__31130__auto__ = cljs.core.count.call(null,c__31129__auto__);
var b__41837 = cljs.core.chunk_buffer.call(null,size__31130__auto__);
if((function (){var i__41836 = (0);
while(true){
if((i__41836 < size__31130__auto__)){
var f = cljs.core._nth.call(null,c__31129__auto__,i__41836);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e41838){if((e41838 instanceof Error)){
var _ = e41838;
return null;
} else {
throw e41838;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__41837,d);

var G__41840 = (i__41836 + (1));
i__41836 = G__41840;
continue;
} else {
var G__41841 = (i__41836 + (1));
i__41836 = G__41841;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41837),cljs_time$coerce$from_string_$_iter__41834.call(null,cljs.core.chunk_rest.call(null,s__41835__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41837),null);
}
} else {
var f = cljs.core.first.call(null,s__41835__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e41839){if((e41839 instanceof Error)){
var _ = e41839;
return null;
} else {
throw e41839;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$coerce$from_string_$_iter__41834.call(null,cljs.core.rest.call(null,s__41835__$2)));
} else {
var G__41842 = cljs.core.rest.call(null,s__41835__$2);
s__41835__$1 = G__41842;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31131__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__41843 = date;
var G__41843__$1 = (((G__41843 == null))?null:G__41843.getTime());
if((G__41843__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long.call(null,G__41843__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__41844 = obj;
var G__41844__$1 = (((G__41844 == null))?null:cljs_time.coerce.to_date_time.call(null,G__41844));
if((G__41844__$1 == null)){
return null;
} else {
return G__41844__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long.call(null,obj);
var and__30237__auto__ = millis;
if(cljs.core.truth_(and__30237__auto__)){
return cljs.core.quot.call(null,millis,(1000));
} else {
return and__30237__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__41845 = obj;
var G__41845__$1 = (((G__41845 == null))?null:cljs_time.coerce.to_date_time.call(null,G__41845));
var G__41845__$2 = (((G__41845__$1 == null))?null:G__41845__$1.getTime());
if((G__41845__$2 == null)){
return null;
} else {
return (new Date(G__41845__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__41846 = obj;
var G__41846__$1 = (((G__41846 == null))?null:cljs_time.coerce.to_date_time.call(null,G__41846));
if((G__41846__$1 == null)){
return null;
} else {
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__41846__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.call(null,goog.date.Date,cljs.core.type.call(null,obj))){
return obj;
} else {
var temp__5288__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__5288__auto__)){
var dt = temp__5288__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5288__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__5288__auto__)){
var dt = temp__5288__auto__;
var G__41847 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__41847.setHours(dt.getHours());

G__41847.setMinutes(dt.getMinutes());

G__41847.setSeconds(dt.getSeconds());

G__41847.setMilliseconds(dt.getMilliseconds());

return G__41847;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

goog.object.set(cljs_time.coerce.to_date_time,"null",(function (_){
return null;
}));

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

goog.object.set(cljs_time.coerce.to_date_time,"number",(function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

goog.object.set(cljs_time.coerce.to_date_time,"string",(function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

//# sourceMappingURL=coerce.js.map?rel=1508862158651
