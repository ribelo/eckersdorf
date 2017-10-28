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
var seq__33775 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33776 = null;
var count__33777 = (0);
var i__33778 = (0);
while(true){
if((i__33778 < count__33777)){
var vec__33779 = cljs.core._nth.call(null,chunk__33776,i__33778);
var effect_key = cljs.core.nth.call(null,vec__33779,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33779,(1),null);
var temp__5288__auto___33785 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5288__auto___33785)){
var effect_fn_33786 = temp__5288__auto___33785;
effect_fn_33786.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__33787 = seq__33775;
var G__33788 = chunk__33776;
var G__33789 = count__33777;
var G__33790 = (i__33778 + (1));
seq__33775 = G__33787;
chunk__33776 = G__33788;
count__33777 = G__33789;
i__33778 = G__33790;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__33775);
if(temp__5290__auto__){
var seq__33775__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33775__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__33775__$1);
var G__33791 = cljs.core.chunk_rest.call(null,seq__33775__$1);
var G__33792 = c__31170__auto__;
var G__33793 = cljs.core.count.call(null,c__31170__auto__);
var G__33794 = (0);
seq__33775 = G__33791;
chunk__33776 = G__33792;
count__33777 = G__33793;
i__33778 = G__33794;
continue;
} else {
var vec__33782 = cljs.core.first.call(null,seq__33775__$1);
var effect_key = cljs.core.nth.call(null,vec__33782,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33782,(1),null);
var temp__5288__auto___33795 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5288__auto___33795)){
var effect_fn_33796 = temp__5288__auto___33795;
effect_fn_33796.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__33797 = cljs.core.next.call(null,seq__33775__$1);
var G__33798 = null;
var G__33799 = (0);
var G__33800 = (0);
seq__33775 = G__33797;
chunk__33776 = G__33798;
count__33777 = G__33799;
i__33778 = G__33800;
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
var seq__33801 = cljs.core.seq.call(null,value);
var chunk__33802 = null;
var count__33803 = (0);
var i__33804 = (0);
while(true){
if((i__33804 < count__33803)){
var map__33805 = cljs.core._nth.call(null,chunk__33802,i__33804);
var map__33805__$1 = ((((!((map__33805 == null)))?((((map__33805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33805):map__33805);
var effect = map__33805__$1;
var ms = cljs.core.get.call(null,map__33805__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33805__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33801,chunk__33802,count__33803,i__33804,map__33805,map__33805__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__33801,chunk__33802,count__33803,i__33804,map__33805,map__33805__$1,effect,ms,dispatch))
,ms);
}

var G__33809 = seq__33801;
var G__33810 = chunk__33802;
var G__33811 = count__33803;
var G__33812 = (i__33804 + (1));
seq__33801 = G__33809;
chunk__33802 = G__33810;
count__33803 = G__33811;
i__33804 = G__33812;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__33801);
if(temp__5290__auto__){
var seq__33801__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33801__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__33801__$1);
var G__33813 = cljs.core.chunk_rest.call(null,seq__33801__$1);
var G__33814 = c__31170__auto__;
var G__33815 = cljs.core.count.call(null,c__31170__auto__);
var G__33816 = (0);
seq__33801 = G__33813;
chunk__33802 = G__33814;
count__33803 = G__33815;
i__33804 = G__33816;
continue;
} else {
var map__33807 = cljs.core.first.call(null,seq__33801__$1);
var map__33807__$1 = ((((!((map__33807 == null)))?((((map__33807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33807):map__33807);
var effect = map__33807__$1;
var ms = cljs.core.get.call(null,map__33807__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33807__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33801,chunk__33802,count__33803,i__33804,map__33807,map__33807__$1,effect,ms,dispatch,seq__33801__$1,temp__5290__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__33801,chunk__33802,count__33803,i__33804,map__33807,map__33807__$1,effect,ms,dispatch,seq__33801__$1,temp__5290__auto__))
,ms);
}

var G__33817 = cljs.core.next.call(null,seq__33801__$1);
var G__33818 = null;
var G__33819 = (0);
var G__33820 = (0);
seq__33801 = G__33817;
chunk__33802 = G__33818;
count__33803 = G__33819;
i__33804 = G__33820;
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
var seq__33821 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__33822 = null;
var count__33823 = (0);
var i__33824 = (0);
while(true){
if((i__33824 < count__33823)){
var event = cljs.core._nth.call(null,chunk__33822,i__33824);
re_frame.router.dispatch.call(null,event);

var G__33825 = seq__33821;
var G__33826 = chunk__33822;
var G__33827 = count__33823;
var G__33828 = (i__33824 + (1));
seq__33821 = G__33825;
chunk__33822 = G__33826;
count__33823 = G__33827;
i__33824 = G__33828;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__33821);
if(temp__5290__auto__){
var seq__33821__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33821__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__33821__$1);
var G__33829 = cljs.core.chunk_rest.call(null,seq__33821__$1);
var G__33830 = c__31170__auto__;
var G__33831 = cljs.core.count.call(null,c__31170__auto__);
var G__33832 = (0);
seq__33821 = G__33829;
chunk__33822 = G__33830;
count__33823 = G__33831;
i__33824 = G__33832;
continue;
} else {
var event = cljs.core.first.call(null,seq__33821__$1);
re_frame.router.dispatch.call(null,event);

var G__33833 = cljs.core.next.call(null,seq__33821__$1);
var G__33834 = null;
var G__33835 = (0);
var G__33836 = (0);
seq__33821 = G__33833;
chunk__33822 = G__33834;
count__33823 = G__33835;
i__33824 = G__33836;
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
var seq__33837 = cljs.core.seq.call(null,value);
var chunk__33838 = null;
var count__33839 = (0);
var i__33840 = (0);
while(true){
if((i__33840 < count__33839)){
var event = cljs.core._nth.call(null,chunk__33838,i__33840);
clear_event.call(null,event);

var G__33841 = seq__33837;
var G__33842 = chunk__33838;
var G__33843 = count__33839;
var G__33844 = (i__33840 + (1));
seq__33837 = G__33841;
chunk__33838 = G__33842;
count__33839 = G__33843;
i__33840 = G__33844;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__33837);
if(temp__5290__auto__){
var seq__33837__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33837__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__33837__$1);
var G__33845 = cljs.core.chunk_rest.call(null,seq__33837__$1);
var G__33846 = c__31170__auto__;
var G__33847 = cljs.core.count.call(null,c__31170__auto__);
var G__33848 = (0);
seq__33837 = G__33845;
chunk__33838 = G__33846;
count__33839 = G__33847;
i__33840 = G__33848;
continue;
} else {
var event = cljs.core.first.call(null,seq__33837__$1);
clear_event.call(null,event);

var G__33849 = cljs.core.next.call(null,seq__33837__$1);
var G__33850 = null;
var G__33851 = (0);
var G__33852 = (0);
seq__33837 = G__33849;
chunk__33838 = G__33850;
count__33839 = G__33851;
i__33840 = G__33852;
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

//# sourceMappingURL=fx.js.map?rel=1509094234974
