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
var seq__39053 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39054 = null;
var count__39055 = (0);
var i__39056 = (0);
while(true){
if((i__39056 < count__39055)){
var vec__39057 = cljs.core._nth.call(null,chunk__39054,i__39056);
var effect_key = cljs.core.nth.call(null,vec__39057,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39057,(1),null);
var temp__5288__auto___39063 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5288__auto___39063)){
var effect_fn_39064 = temp__5288__auto___39063;
effect_fn_39064.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__39065 = seq__39053;
var G__39066 = chunk__39054;
var G__39067 = count__39055;
var G__39068 = (i__39056 + (1));
seq__39053 = G__39065;
chunk__39054 = G__39066;
count__39055 = G__39067;
i__39056 = G__39068;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39053);
if(temp__5290__auto__){
var seq__39053__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39053__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__39053__$1);
var G__39069 = cljs.core.chunk_rest.call(null,seq__39053__$1);
var G__39070 = c__31180__auto__;
var G__39071 = cljs.core.count.call(null,c__31180__auto__);
var G__39072 = (0);
seq__39053 = G__39069;
chunk__39054 = G__39070;
count__39055 = G__39071;
i__39056 = G__39072;
continue;
} else {
var vec__39060 = cljs.core.first.call(null,seq__39053__$1);
var effect_key = cljs.core.nth.call(null,vec__39060,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39060,(1),null);
var temp__5288__auto___39073 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5288__auto___39073)){
var effect_fn_39074 = temp__5288__auto___39073;
effect_fn_39074.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__39075 = cljs.core.next.call(null,seq__39053__$1);
var G__39076 = null;
var G__39077 = (0);
var G__39078 = (0);
seq__39053 = G__39075;
chunk__39054 = G__39076;
count__39055 = G__39077;
i__39056 = G__39078;
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
var seq__39079 = cljs.core.seq.call(null,value);
var chunk__39080 = null;
var count__39081 = (0);
var i__39082 = (0);
while(true){
if((i__39082 < count__39081)){
var map__39083 = cljs.core._nth.call(null,chunk__39080,i__39082);
var map__39083__$1 = ((((!((map__39083 == null)))?((((map__39083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39083):map__39083);
var effect = map__39083__$1;
var ms = cljs.core.get.call(null,map__39083__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39083__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39079,chunk__39080,count__39081,i__39082,map__39083,map__39083__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39079,chunk__39080,count__39081,i__39082,map__39083,map__39083__$1,effect,ms,dispatch))
,ms);
}

var G__39087 = seq__39079;
var G__39088 = chunk__39080;
var G__39089 = count__39081;
var G__39090 = (i__39082 + (1));
seq__39079 = G__39087;
chunk__39080 = G__39088;
count__39081 = G__39089;
i__39082 = G__39090;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39079);
if(temp__5290__auto__){
var seq__39079__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39079__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__39079__$1);
var G__39091 = cljs.core.chunk_rest.call(null,seq__39079__$1);
var G__39092 = c__31180__auto__;
var G__39093 = cljs.core.count.call(null,c__31180__auto__);
var G__39094 = (0);
seq__39079 = G__39091;
chunk__39080 = G__39092;
count__39081 = G__39093;
i__39082 = G__39094;
continue;
} else {
var map__39085 = cljs.core.first.call(null,seq__39079__$1);
var map__39085__$1 = ((((!((map__39085 == null)))?((((map__39085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39085):map__39085);
var effect = map__39085__$1;
var ms = cljs.core.get.call(null,map__39085__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39085__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39079,chunk__39080,count__39081,i__39082,map__39085,map__39085__$1,effect,ms,dispatch,seq__39079__$1,temp__5290__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39079,chunk__39080,count__39081,i__39082,map__39085,map__39085__$1,effect,ms,dispatch,seq__39079__$1,temp__5290__auto__))
,ms);
}

var G__39095 = cljs.core.next.call(null,seq__39079__$1);
var G__39096 = null;
var G__39097 = (0);
var G__39098 = (0);
seq__39079 = G__39095;
chunk__39080 = G__39096;
count__39081 = G__39097;
i__39082 = G__39098;
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
var seq__39099 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__39100 = null;
var count__39101 = (0);
var i__39102 = (0);
while(true){
if((i__39102 < count__39101)){
var event = cljs.core._nth.call(null,chunk__39100,i__39102);
re_frame.router.dispatch.call(null,event);

var G__39103 = seq__39099;
var G__39104 = chunk__39100;
var G__39105 = count__39101;
var G__39106 = (i__39102 + (1));
seq__39099 = G__39103;
chunk__39100 = G__39104;
count__39101 = G__39105;
i__39102 = G__39106;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39099);
if(temp__5290__auto__){
var seq__39099__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39099__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__39099__$1);
var G__39107 = cljs.core.chunk_rest.call(null,seq__39099__$1);
var G__39108 = c__31180__auto__;
var G__39109 = cljs.core.count.call(null,c__31180__auto__);
var G__39110 = (0);
seq__39099 = G__39107;
chunk__39100 = G__39108;
count__39101 = G__39109;
i__39102 = G__39110;
continue;
} else {
var event = cljs.core.first.call(null,seq__39099__$1);
re_frame.router.dispatch.call(null,event);

var G__39111 = cljs.core.next.call(null,seq__39099__$1);
var G__39112 = null;
var G__39113 = (0);
var G__39114 = (0);
seq__39099 = G__39111;
chunk__39100 = G__39112;
count__39101 = G__39113;
i__39102 = G__39114;
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
var seq__39115 = cljs.core.seq.call(null,value);
var chunk__39116 = null;
var count__39117 = (0);
var i__39118 = (0);
while(true){
if((i__39118 < count__39117)){
var event = cljs.core._nth.call(null,chunk__39116,i__39118);
clear_event.call(null,event);

var G__39119 = seq__39115;
var G__39120 = chunk__39116;
var G__39121 = count__39117;
var G__39122 = (i__39118 + (1));
seq__39115 = G__39119;
chunk__39116 = G__39120;
count__39117 = G__39121;
i__39118 = G__39122;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39115);
if(temp__5290__auto__){
var seq__39115__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39115__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__39115__$1);
var G__39123 = cljs.core.chunk_rest.call(null,seq__39115__$1);
var G__39124 = c__31180__auto__;
var G__39125 = cljs.core.count.call(null,c__31180__auto__);
var G__39126 = (0);
seq__39115 = G__39123;
chunk__39116 = G__39124;
count__39117 = G__39125;
i__39118 = G__39126;
continue;
} else {
var event = cljs.core.first.call(null,seq__39115__$1);
clear_event.call(null,event);

var G__39127 = cljs.core.next.call(null,seq__39115__$1);
var G__39128 = null;
var G__39129 = (0);
var G__39130 = (0);
seq__39115 = G__39127;
chunk__39116 = G__39128;
count__39117 = G__39129;
i__39118 = G__39130;
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

//# sourceMappingURL=fx.js.map?rel=1506985647861
