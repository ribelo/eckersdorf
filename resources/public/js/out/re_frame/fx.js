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
var seq__33730 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33731 = null;
var count__33732 = (0);
var i__33733 = (0);
while(true){
if((i__33733 < count__33732)){
var vec__33734 = cljs.core._nth.call(null,chunk__33731,i__33733);
var effect_key = cljs.core.nth.call(null,vec__33734,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33734,(1),null);
var temp__5288__auto___33740 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5288__auto___33740)){
var effect_fn_33741 = temp__5288__auto___33740;
effect_fn_33741.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__33742 = seq__33730;
var G__33743 = chunk__33731;
var G__33744 = count__33732;
var G__33745 = (i__33733 + (1));
seq__33730 = G__33742;
chunk__33731 = G__33743;
count__33732 = G__33744;
i__33733 = G__33745;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__33730);
if(temp__5290__auto__){
var seq__33730__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33730__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__33730__$1);
var G__33746 = cljs.core.chunk_rest.call(null,seq__33730__$1);
var G__33747 = c__31180__auto__;
var G__33748 = cljs.core.count.call(null,c__31180__auto__);
var G__33749 = (0);
seq__33730 = G__33746;
chunk__33731 = G__33747;
count__33732 = G__33748;
i__33733 = G__33749;
continue;
} else {
var vec__33737 = cljs.core.first.call(null,seq__33730__$1);
var effect_key = cljs.core.nth.call(null,vec__33737,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33737,(1),null);
var temp__5288__auto___33750 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5288__auto___33750)){
var effect_fn_33751 = temp__5288__auto___33750;
effect_fn_33751.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__33752 = cljs.core.next.call(null,seq__33730__$1);
var G__33753 = null;
var G__33754 = (0);
var G__33755 = (0);
seq__33730 = G__33752;
chunk__33731 = G__33753;
count__33732 = G__33754;
i__33733 = G__33755;
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
var seq__33756 = cljs.core.seq.call(null,value);
var chunk__33757 = null;
var count__33758 = (0);
var i__33759 = (0);
while(true){
if((i__33759 < count__33758)){
var map__33760 = cljs.core._nth.call(null,chunk__33757,i__33759);
var map__33760__$1 = ((((!((map__33760 == null)))?((((map__33760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33760):map__33760);
var effect = map__33760__$1;
var ms = cljs.core.get.call(null,map__33760__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33760__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33756,chunk__33757,count__33758,i__33759,map__33760,map__33760__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__33756,chunk__33757,count__33758,i__33759,map__33760,map__33760__$1,effect,ms,dispatch))
,ms);
}

var G__33764 = seq__33756;
var G__33765 = chunk__33757;
var G__33766 = count__33758;
var G__33767 = (i__33759 + (1));
seq__33756 = G__33764;
chunk__33757 = G__33765;
count__33758 = G__33766;
i__33759 = G__33767;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__33756);
if(temp__5290__auto__){
var seq__33756__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33756__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__33756__$1);
var G__33768 = cljs.core.chunk_rest.call(null,seq__33756__$1);
var G__33769 = c__31180__auto__;
var G__33770 = cljs.core.count.call(null,c__31180__auto__);
var G__33771 = (0);
seq__33756 = G__33768;
chunk__33757 = G__33769;
count__33758 = G__33770;
i__33759 = G__33771;
continue;
} else {
var map__33762 = cljs.core.first.call(null,seq__33756__$1);
var map__33762__$1 = ((((!((map__33762 == null)))?((((map__33762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33762):map__33762);
var effect = map__33762__$1;
var ms = cljs.core.get.call(null,map__33762__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33762__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33756,chunk__33757,count__33758,i__33759,map__33762,map__33762__$1,effect,ms,dispatch,seq__33756__$1,temp__5290__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__33756,chunk__33757,count__33758,i__33759,map__33762,map__33762__$1,effect,ms,dispatch,seq__33756__$1,temp__5290__auto__))
,ms);
}

var G__33772 = cljs.core.next.call(null,seq__33756__$1);
var G__33773 = null;
var G__33774 = (0);
var G__33775 = (0);
seq__33756 = G__33772;
chunk__33757 = G__33773;
count__33758 = G__33774;
i__33759 = G__33775;
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
var seq__33776 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__33777 = null;
var count__33778 = (0);
var i__33779 = (0);
while(true){
if((i__33779 < count__33778)){
var event = cljs.core._nth.call(null,chunk__33777,i__33779);
re_frame.router.dispatch.call(null,event);

var G__33780 = seq__33776;
var G__33781 = chunk__33777;
var G__33782 = count__33778;
var G__33783 = (i__33779 + (1));
seq__33776 = G__33780;
chunk__33777 = G__33781;
count__33778 = G__33782;
i__33779 = G__33783;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__33776);
if(temp__5290__auto__){
var seq__33776__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33776__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__33776__$1);
var G__33784 = cljs.core.chunk_rest.call(null,seq__33776__$1);
var G__33785 = c__31180__auto__;
var G__33786 = cljs.core.count.call(null,c__31180__auto__);
var G__33787 = (0);
seq__33776 = G__33784;
chunk__33777 = G__33785;
count__33778 = G__33786;
i__33779 = G__33787;
continue;
} else {
var event = cljs.core.first.call(null,seq__33776__$1);
re_frame.router.dispatch.call(null,event);

var G__33788 = cljs.core.next.call(null,seq__33776__$1);
var G__33789 = null;
var G__33790 = (0);
var G__33791 = (0);
seq__33776 = G__33788;
chunk__33777 = G__33789;
count__33778 = G__33790;
i__33779 = G__33791;
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
var seq__33792 = cljs.core.seq.call(null,value);
var chunk__33793 = null;
var count__33794 = (0);
var i__33795 = (0);
while(true){
if((i__33795 < count__33794)){
var event = cljs.core._nth.call(null,chunk__33793,i__33795);
clear_event.call(null,event);

var G__33796 = seq__33792;
var G__33797 = chunk__33793;
var G__33798 = count__33794;
var G__33799 = (i__33795 + (1));
seq__33792 = G__33796;
chunk__33793 = G__33797;
count__33794 = G__33798;
i__33795 = G__33799;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__33792);
if(temp__5290__auto__){
var seq__33792__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33792__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__33792__$1);
var G__33800 = cljs.core.chunk_rest.call(null,seq__33792__$1);
var G__33801 = c__31180__auto__;
var G__33802 = cljs.core.count.call(null,c__31180__auto__);
var G__33803 = (0);
seq__33792 = G__33800;
chunk__33793 = G__33801;
count__33794 = G__33802;
i__33795 = G__33803;
continue;
} else {
var event = cljs.core.first.call(null,seq__33792__$1);
clear_event.call(null,event);

var G__33804 = cljs.core.next.call(null,seq__33792__$1);
var G__33805 = null;
var G__33806 = (0);
var G__33807 = (0);
seq__33792 = G__33804;
chunk__33793 = G__33805;
count__33794 = G__33806;
i__33795 = G__33807;
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

//# sourceMappingURL=fx.js.map?rel=1506023156827
