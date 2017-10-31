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
var seq__39082 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39083 = null;
var count__39084 = (0);
var i__39085 = (0);
while(true){
if((i__39085 < count__39084)){
var vec__39086 = cljs.core._nth.call(null,chunk__39083,i__39085);
var effect_key = cljs.core.nth.call(null,vec__39086,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39086,(1),null);
var temp__5288__auto___39092 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5288__auto___39092)){
var effect_fn_39093 = temp__5288__auto___39092;
effect_fn_39093.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__39094 = seq__39082;
var G__39095 = chunk__39083;
var G__39096 = count__39084;
var G__39097 = (i__39085 + (1));
seq__39082 = G__39094;
chunk__39083 = G__39095;
count__39084 = G__39096;
i__39085 = G__39097;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39082);
if(temp__5290__auto__){
var seq__39082__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39082__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__39082__$1);
var G__39098 = cljs.core.chunk_rest.call(null,seq__39082__$1);
var G__39099 = c__31180__auto__;
var G__39100 = cljs.core.count.call(null,c__31180__auto__);
var G__39101 = (0);
seq__39082 = G__39098;
chunk__39083 = G__39099;
count__39084 = G__39100;
i__39085 = G__39101;
continue;
} else {
var vec__39089 = cljs.core.first.call(null,seq__39082__$1);
var effect_key = cljs.core.nth.call(null,vec__39089,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39089,(1),null);
var temp__5288__auto___39102 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5288__auto___39102)){
var effect_fn_39103 = temp__5288__auto___39102;
effect_fn_39103.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__39104 = cljs.core.next.call(null,seq__39082__$1);
var G__39105 = null;
var G__39106 = (0);
var G__39107 = (0);
seq__39082 = G__39104;
chunk__39083 = G__39105;
count__39084 = G__39106;
i__39085 = G__39107;
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
var seq__39108 = cljs.core.seq.call(null,value);
var chunk__39109 = null;
var count__39110 = (0);
var i__39111 = (0);
while(true){
if((i__39111 < count__39110)){
var map__39112 = cljs.core._nth.call(null,chunk__39109,i__39111);
var map__39112__$1 = ((((!((map__39112 == null)))?((((map__39112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39112):map__39112);
var effect = map__39112__$1;
var ms = cljs.core.get.call(null,map__39112__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39112__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39108,chunk__39109,count__39110,i__39111,map__39112,map__39112__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39108,chunk__39109,count__39110,i__39111,map__39112,map__39112__$1,effect,ms,dispatch))
,ms);
}

var G__39116 = seq__39108;
var G__39117 = chunk__39109;
var G__39118 = count__39110;
var G__39119 = (i__39111 + (1));
seq__39108 = G__39116;
chunk__39109 = G__39117;
count__39110 = G__39118;
i__39111 = G__39119;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39108);
if(temp__5290__auto__){
var seq__39108__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39108__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__39108__$1);
var G__39120 = cljs.core.chunk_rest.call(null,seq__39108__$1);
var G__39121 = c__31180__auto__;
var G__39122 = cljs.core.count.call(null,c__31180__auto__);
var G__39123 = (0);
seq__39108 = G__39120;
chunk__39109 = G__39121;
count__39110 = G__39122;
i__39111 = G__39123;
continue;
} else {
var map__39114 = cljs.core.first.call(null,seq__39108__$1);
var map__39114__$1 = ((((!((map__39114 == null)))?((((map__39114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39114):map__39114);
var effect = map__39114__$1;
var ms = cljs.core.get.call(null,map__39114__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39114__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39108,chunk__39109,count__39110,i__39111,map__39114,map__39114__$1,effect,ms,dispatch,seq__39108__$1,temp__5290__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39108,chunk__39109,count__39110,i__39111,map__39114,map__39114__$1,effect,ms,dispatch,seq__39108__$1,temp__5290__auto__))
,ms);
}

var G__39124 = cljs.core.next.call(null,seq__39108__$1);
var G__39125 = null;
var G__39126 = (0);
var G__39127 = (0);
seq__39108 = G__39124;
chunk__39109 = G__39125;
count__39110 = G__39126;
i__39111 = G__39127;
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
var seq__39128 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__39129 = null;
var count__39130 = (0);
var i__39131 = (0);
while(true){
if((i__39131 < count__39130)){
var event = cljs.core._nth.call(null,chunk__39129,i__39131);
re_frame.router.dispatch.call(null,event);

var G__39132 = seq__39128;
var G__39133 = chunk__39129;
var G__39134 = count__39130;
var G__39135 = (i__39131 + (1));
seq__39128 = G__39132;
chunk__39129 = G__39133;
count__39130 = G__39134;
i__39131 = G__39135;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39128);
if(temp__5290__auto__){
var seq__39128__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39128__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__39128__$1);
var G__39136 = cljs.core.chunk_rest.call(null,seq__39128__$1);
var G__39137 = c__31180__auto__;
var G__39138 = cljs.core.count.call(null,c__31180__auto__);
var G__39139 = (0);
seq__39128 = G__39136;
chunk__39129 = G__39137;
count__39130 = G__39138;
i__39131 = G__39139;
continue;
} else {
var event = cljs.core.first.call(null,seq__39128__$1);
re_frame.router.dispatch.call(null,event);

var G__39140 = cljs.core.next.call(null,seq__39128__$1);
var G__39141 = null;
var G__39142 = (0);
var G__39143 = (0);
seq__39128 = G__39140;
chunk__39129 = G__39141;
count__39130 = G__39142;
i__39131 = G__39143;
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
var seq__39144 = cljs.core.seq.call(null,value);
var chunk__39145 = null;
var count__39146 = (0);
var i__39147 = (0);
while(true){
if((i__39147 < count__39146)){
var event = cljs.core._nth.call(null,chunk__39145,i__39147);
clear_event.call(null,event);

var G__39148 = seq__39144;
var G__39149 = chunk__39145;
var G__39150 = count__39146;
var G__39151 = (i__39147 + (1));
seq__39144 = G__39148;
chunk__39145 = G__39149;
count__39146 = G__39150;
i__39147 = G__39151;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__39144);
if(temp__5290__auto__){
var seq__39144__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39144__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__39144__$1);
var G__39152 = cljs.core.chunk_rest.call(null,seq__39144__$1);
var G__39153 = c__31180__auto__;
var G__39154 = cljs.core.count.call(null,c__31180__auto__);
var G__39155 = (0);
seq__39144 = G__39152;
chunk__39145 = G__39153;
count__39146 = G__39154;
i__39147 = G__39155;
continue;
} else {
var event = cljs.core.first.call(null,seq__39144__$1);
clear_event.call(null,event);

var G__39156 = cljs.core.next.call(null,seq__39144__$1);
var G__39157 = null;
var G__39158 = (0);
var G__39159 = (0);
seq__39144 = G__39156;
chunk__39145 = G__39157;
count__39146 = G__39158;
i__39147 = G__39159;
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

//# sourceMappingURL=fx.js.map?rel=1509397943312
