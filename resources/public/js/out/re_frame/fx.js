// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__39054 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39055 = null;
var count__39056 = (0);
var i__39057 = (0);
while(true){
if((i__39057 < count__39056)){
var vec__39058 = cljs.core._nth.call(null,chunk__39055,i__39057);
var effect_key = cljs.core.nth.call(null,vec__39058,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39058,(1),null);
var temp__5288__auto___39064 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5288__auto___39064)){
var effect_fn_39065 = temp__5288__auto___39064;
effect_fn_39065.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__39066 = seq__39054;
var G__39067 = chunk__39055;
var G__39068 = count__39056;
var G__39069 = (i__39057 + (1));
seq__39054 = G__39066;
chunk__39055 = G__39067;
count__39056 = G__39068;
i__39057 = G__39069;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39054);
if(temp__5290__auto__){
var seq__39054__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39054__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__39054__$1);
var G__39070 = cljs.core.chunk_rest.call(null,seq__39054__$1);
var G__39071 = c__31180__auto__;
var G__39072 = cljs.core.count.call(null,c__31180__auto__);
var G__39073 = (0);
seq__39054 = G__39070;
chunk__39055 = G__39071;
count__39056 = G__39072;
i__39057 = G__39073;
continue;
} else {
var vec__39061 = cljs.core.first.call(null,seq__39054__$1);
var effect_key = cljs.core.nth.call(null,vec__39061,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39061,(1),null);
var temp__5288__auto___39074 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5288__auto___39074)){
var effect_fn_39075 = temp__5288__auto___39074;
effect_fn_39075.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__39076 = cljs.core.next.call(null,seq__39054__$1);
var G__39077 = null;
var G__39078 = (0);
var G__39079 = (0);
seq__39054 = G__39076;
chunk__39055 = G__39077;
count__39056 = G__39078;
i__39057 = G__39079;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__39080 = cljs.core.seq.call(null,value);
var chunk__39081 = null;
var count__39082 = (0);
var i__39083 = (0);
while(true){
if((i__39083 < count__39082)){
var map__39084 = cljs.core._nth.call(null,chunk__39081,i__39083);
var map__39084__$1 = ((((!((map__39084 == null)))?((((map__39084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39084):map__39084);
var effect = map__39084__$1;
var ms = cljs.core.get.call(null,map__39084__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39084__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39080,chunk__39081,count__39082,i__39083,map__39084,map__39084__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39080,chunk__39081,count__39082,i__39083,map__39084,map__39084__$1,effect,ms,dispatch))
,ms);
}

var G__39088 = seq__39080;
var G__39089 = chunk__39081;
var G__39090 = count__39082;
var G__39091 = (i__39083 + (1));
seq__39080 = G__39088;
chunk__39081 = G__39089;
count__39082 = G__39090;
i__39083 = G__39091;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39080);
if(temp__5290__auto__){
var seq__39080__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39080__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__39080__$1);
var G__39092 = cljs.core.chunk_rest.call(null,seq__39080__$1);
var G__39093 = c__31180__auto__;
var G__39094 = cljs.core.count.call(null,c__31180__auto__);
var G__39095 = (0);
seq__39080 = G__39092;
chunk__39081 = G__39093;
count__39082 = G__39094;
i__39083 = G__39095;
continue;
} else {
var map__39086 = cljs.core.first.call(null,seq__39080__$1);
var map__39086__$1 = ((((!((map__39086 == null)))?((((map__39086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39086):map__39086);
var effect = map__39086__$1;
var ms = cljs.core.get.call(null,map__39086__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39086__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39080,chunk__39081,count__39082,i__39083,map__39086,map__39086__$1,effect,ms,dispatch,seq__39080__$1,temp__5290__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39080,chunk__39081,count__39082,i__39083,map__39086,map__39086__$1,effect,ms,dispatch,seq__39080__$1,temp__5290__auto__))
,ms);
}

var G__39096 = cljs.core.next.call(null,seq__39080__$1);
var G__39097 = null;
var G__39098 = (0);
var G__39099 = (0);
seq__39080 = G__39096;
chunk__39081 = G__39097;
count__39082 = G__39098;
i__39083 = G__39099;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__39100 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__39101 = null;
var count__39102 = (0);
var i__39103 = (0);
while(true){
if((i__39103 < count__39102)){
var event = cljs.core._nth.call(null,chunk__39101,i__39103);
re_frame.router.dispatch.call(null,event);

var G__39104 = seq__39100;
var G__39105 = chunk__39101;
var G__39106 = count__39102;
var G__39107 = (i__39103 + (1));
seq__39100 = G__39104;
chunk__39101 = G__39105;
count__39102 = G__39106;
i__39103 = G__39107;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39100);
if(temp__5290__auto__){
var seq__39100__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39100__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__39100__$1);
var G__39108 = cljs.core.chunk_rest.call(null,seq__39100__$1);
var G__39109 = c__31180__auto__;
var G__39110 = cljs.core.count.call(null,c__31180__auto__);
var G__39111 = (0);
seq__39100 = G__39108;
chunk__39101 = G__39109;
count__39102 = G__39110;
i__39103 = G__39111;
continue;
} else {
var event = cljs.core.first.call(null,seq__39100__$1);
re_frame.router.dispatch.call(null,event);

var G__39112 = cljs.core.next.call(null,seq__39100__$1);
var G__39113 = null;
var G__39114 = (0);
var G__39115 = (0);
seq__39100 = G__39112;
chunk__39101 = G__39113;
count__39102 = G__39114;
i__39103 = G__39115;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__39116 = cljs.core.seq.call(null,value);
var chunk__39117 = null;
var count__39118 = (0);
var i__39119 = (0);
while(true){
if((i__39119 < count__39118)){
var event = cljs.core._nth.call(null,chunk__39117,i__39119);
clear_event.call(null,event);

var G__39120 = seq__39116;
var G__39121 = chunk__39117;
var G__39122 = count__39118;
var G__39123 = (i__39119 + (1));
seq__39116 = G__39120;
chunk__39117 = G__39121;
count__39118 = G__39122;
i__39119 = G__39123;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39116);
if(temp__5290__auto__){
var seq__39116__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39116__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__39116__$1);
var G__39124 = cljs.core.chunk_rest.call(null,seq__39116__$1);
var G__39125 = c__31180__auto__;
var G__39126 = cljs.core.count.call(null,c__31180__auto__);
var G__39127 = (0);
seq__39116 = G__39124;
chunk__39117 = G__39125;
count__39118 = G__39126;
i__39119 = G__39127;
continue;
} else {
var event = cljs.core.first.call(null,seq__39116__$1);
clear_event.call(null,event);

var G__39128 = cljs.core.next.call(null,seq__39116__$1);
var G__39129 = null;
var G__39130 = (0);
var G__39131 = (0);
seq__39116 = G__39128;
chunk__39117 = G__39129;
count__39118 = G__39130;
i__39119 = G__39131;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1507056173817
