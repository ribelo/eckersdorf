// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__35424__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__35424__auto__["add"]).call(o__35424__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__35424__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__35424__auto__["delete"]).call(o__35424__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__35424__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__35424__auto__["has"]).call(o__35424__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__52307 = data;
var target__35429__auto__ = G__52307;
if(cljs.core.truth_(target__35429__auto__)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["unable to locate object path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52307)].join('')),"\n","target__35429__auto__"].join('')));
}

(target__35429__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__52307;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_52312 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_52312);
} else {
var seq__52308_52313 = cljs.core.seq.call(null,json_ml);
var chunk__52309_52314 = null;
var count__52310_52315 = (0);
var i__52311_52316 = (0);
while(true){
if((i__52311_52316 < count__52310_52315)){
var item_52317 = cljs.core._nth.call(null,chunk__52309_52314,i__52311_52316);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_52317,new_depth_budget_52312);

var G__52318 = seq__52308_52313;
var G__52319 = chunk__52309_52314;
var G__52320 = count__52310_52315;
var G__52321 = (i__52311_52316 + (1));
seq__52308_52313 = G__52318;
chunk__52309_52314 = G__52319;
count__52310_52315 = G__52320;
i__52311_52316 = G__52321;
continue;
} else {
var temp__5457__auto___52322 = cljs.core.seq.call(null,seq__52308_52313);
if(temp__5457__auto___52322){
var seq__52308_52323__$1 = temp__5457__auto___52322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52308_52323__$1)){
var c__31454__auto___52324 = cljs.core.chunk_first.call(null,seq__52308_52323__$1);
var G__52325 = cljs.core.chunk_rest.call(null,seq__52308_52323__$1);
var G__52326 = c__31454__auto___52324;
var G__52327 = cljs.core.count.call(null,c__31454__auto___52324);
var G__52328 = (0);
seq__52308_52313 = G__52325;
chunk__52309_52314 = G__52326;
count__52310_52315 = G__52327;
i__52311_52316 = G__52328;
continue;
} else {
var item_52329 = cljs.core.first.call(null,seq__52308_52323__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_52329,new_depth_budget_52312);

var G__52330 = cljs.core.next.call(null,seq__52308_52323__$1);
var G__52331 = null;
var G__52332 = (0);
var G__52333 = (0);
seq__52308_52313 = G__52330;
chunk__52309_52314 = G__52331;
count__52310_52315 = G__52332;
i__52311_52316 = G__52333;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5455__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5455__auto__)){
var initial_hierarchy_depth_budget = temp__5455__auto__;
var remaining_depth_budget = (function (){var or__30523__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__30523__auto__)){
return or__30523__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1510609304914
