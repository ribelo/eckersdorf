// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e49600){if((e49600 instanceof Error)){
var e = e49600;
return "Error: Unable to stringify";
} else {
throw e49600;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__49603 = arguments.length;
switch (G__49603) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__49601_SHARP_){
if(typeof p1__49601_SHARP_ === 'string'){
return p1__49601_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__49601_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31809__auto__ = [];
var len__31802__auto___49606 = arguments.length;
var i__31803__auto___49607 = (0);
while(true){
if((i__31803__auto___49607 < len__31802__auto___49606)){
args__31809__auto__.push((arguments[i__31803__auto___49607]));

var G__49608 = (i__31803__auto___49607 + (1));
i__31803__auto___49607 = G__49608;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq49605){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49605));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31809__auto__ = [];
var len__31802__auto___49610 = arguments.length;
var i__31803__auto___49611 = (0);
while(true){
if((i__31803__auto___49611 < len__31802__auto___49610)){
args__31809__auto__.push((arguments[i__31803__auto___49611]));

var G__49612 = (i__31803__auto___49611 + (1));
i__31803__auto___49611 = G__49612;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq49609){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49609));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__49613){
var map__49614 = p__49613;
var map__49614__$1 = ((((!((map__49614 == null)))?((((map__49614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49614):map__49614);
var message = cljs.core.get.call(null,map__49614__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__49614__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30522__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30510__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30510__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30510__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__46754__auto___49693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___49693,ch){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___49693,ch){
return (function (state_49665){
var state_val_49666 = (state_49665[(1)]);
if((state_val_49666 === (7))){
var inst_49661 = (state_49665[(2)]);
var state_49665__$1 = state_49665;
var statearr_49667_49694 = state_49665__$1;
(statearr_49667_49694[(2)] = inst_49661);

(statearr_49667_49694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (1))){
var state_49665__$1 = state_49665;
var statearr_49668_49695 = state_49665__$1;
(statearr_49668_49695[(2)] = null);

(statearr_49668_49695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (4))){
var inst_49618 = (state_49665[(7)]);
var inst_49618__$1 = (state_49665[(2)]);
var state_49665__$1 = (function (){var statearr_49669 = state_49665;
(statearr_49669[(7)] = inst_49618__$1);

return statearr_49669;
})();
if(cljs.core.truth_(inst_49618__$1)){
var statearr_49670_49696 = state_49665__$1;
(statearr_49670_49696[(1)] = (5));

} else {
var statearr_49671_49697 = state_49665__$1;
(statearr_49671_49697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (15))){
var inst_49625 = (state_49665[(8)]);
var inst_49640 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49625);
var inst_49641 = cljs.core.first.call(null,inst_49640);
var inst_49642 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_49641);
var inst_49643 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49642)].join('');
var inst_49644 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_49643);
var state_49665__$1 = state_49665;
var statearr_49672_49698 = state_49665__$1;
(statearr_49672_49698[(2)] = inst_49644);

(statearr_49672_49698[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (13))){
var inst_49649 = (state_49665[(2)]);
var state_49665__$1 = state_49665;
var statearr_49673_49699 = state_49665__$1;
(statearr_49673_49699[(2)] = inst_49649);

(statearr_49673_49699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (6))){
var state_49665__$1 = state_49665;
var statearr_49674_49700 = state_49665__$1;
(statearr_49674_49700[(2)] = null);

(statearr_49674_49700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (17))){
var inst_49647 = (state_49665[(2)]);
var state_49665__$1 = state_49665;
var statearr_49675_49701 = state_49665__$1;
(statearr_49675_49701[(2)] = inst_49647);

(statearr_49675_49701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (3))){
var inst_49663 = (state_49665[(2)]);
var state_49665__$1 = state_49665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49665__$1,inst_49663);
} else {
if((state_val_49666 === (12))){
var inst_49624 = (state_49665[(9)]);
var inst_49638 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_49624,opts);
var state_49665__$1 = state_49665;
if(cljs.core.truth_(inst_49638)){
var statearr_49676_49702 = state_49665__$1;
(statearr_49676_49702[(1)] = (15));

} else {
var statearr_49677_49703 = state_49665__$1;
(statearr_49677_49703[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (2))){
var state_49665__$1 = state_49665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49665__$1,(4),ch);
} else {
if((state_val_49666 === (11))){
var inst_49625 = (state_49665[(8)]);
var inst_49630 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49631 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_49625);
var inst_49632 = cljs.core.async.timeout.call(null,(1000));
var inst_49633 = [inst_49631,inst_49632];
var inst_49634 = (new cljs.core.PersistentVector(null,2,(5),inst_49630,inst_49633,null));
var state_49665__$1 = state_49665;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49665__$1,(14),inst_49634);
} else {
if((state_val_49666 === (9))){
var inst_49625 = (state_49665[(8)]);
var inst_49651 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_49652 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49625);
var inst_49653 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49652);
var inst_49654 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49653)].join('');
var inst_49655 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_49654);
var state_49665__$1 = (function (){var statearr_49678 = state_49665;
(statearr_49678[(10)] = inst_49651);

return statearr_49678;
})();
var statearr_49679_49704 = state_49665__$1;
(statearr_49679_49704[(2)] = inst_49655);

(statearr_49679_49704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (5))){
var inst_49618 = (state_49665[(7)]);
var inst_49620 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_49621 = (new cljs.core.PersistentArrayMap(null,2,inst_49620,null));
var inst_49622 = (new cljs.core.PersistentHashSet(null,inst_49621,null));
var inst_49623 = figwheel.client.focus_msgs.call(null,inst_49622,inst_49618);
var inst_49624 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_49623);
var inst_49625 = cljs.core.first.call(null,inst_49623);
var inst_49626 = figwheel.client.autoload_QMARK_.call(null);
var state_49665__$1 = (function (){var statearr_49680 = state_49665;
(statearr_49680[(9)] = inst_49624);

(statearr_49680[(8)] = inst_49625);

return statearr_49680;
})();
if(cljs.core.truth_(inst_49626)){
var statearr_49681_49705 = state_49665__$1;
(statearr_49681_49705[(1)] = (8));

} else {
var statearr_49682_49706 = state_49665__$1;
(statearr_49682_49706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (14))){
var inst_49636 = (state_49665[(2)]);
var state_49665__$1 = state_49665;
var statearr_49683_49707 = state_49665__$1;
(statearr_49683_49707[(2)] = inst_49636);

(statearr_49683_49707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (16))){
var state_49665__$1 = state_49665;
var statearr_49684_49708 = state_49665__$1;
(statearr_49684_49708[(2)] = null);

(statearr_49684_49708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (10))){
var inst_49657 = (state_49665[(2)]);
var state_49665__$1 = (function (){var statearr_49685 = state_49665;
(statearr_49685[(11)] = inst_49657);

return statearr_49685;
})();
var statearr_49686_49709 = state_49665__$1;
(statearr_49686_49709[(2)] = null);

(statearr_49686_49709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (8))){
var inst_49624 = (state_49665[(9)]);
var inst_49628 = figwheel.client.reload_file_state_QMARK_.call(null,inst_49624,opts);
var state_49665__$1 = state_49665;
if(cljs.core.truth_(inst_49628)){
var statearr_49687_49710 = state_49665__$1;
(statearr_49687_49710[(1)] = (11));

} else {
var statearr_49688_49711 = state_49665__$1;
(statearr_49688_49711[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46754__auto___49693,ch))
;
return ((function (switch__46664__auto__,c__46754__auto___49693,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__46665__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__46665__auto____0 = (function (){
var statearr_49689 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49689[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__46665__auto__);

(statearr_49689[(1)] = (1));

return statearr_49689;
});
var figwheel$client$file_reloader_plugin_$_state_machine__46665__auto____1 = (function (state_49665){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_49665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e49690){if((e49690 instanceof Object)){
var ex__46668__auto__ = e49690;
var statearr_49691_49712 = state_49665;
(statearr_49691_49712[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49713 = state_49665;
state_49665 = G__49713;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__46665__auto__ = function(state_49665){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__46665__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__46665__auto____1.call(this,state_49665);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__46665__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__46665__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___49693,ch))
})();
var state__46756__auto__ = (function (){var statearr_49692 = f__46755__auto__.call(null);
(statearr_49692[(6)] = c__46754__auto___49693);

return statearr_49692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___49693,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__49714_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__49714_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_49716 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_49716){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e49715){if((e49715 instanceof Error)){
var e = e49715;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_49716], null));
} else {
var e = e49715;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_49716))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__49717){
var map__49718 = p__49717;
var map__49718__$1 = ((((!((map__49718 == null)))?((((map__49718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49718):map__49718);
var opts = map__49718__$1;
var build_id = cljs.core.get.call(null,map__49718__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__49718,map__49718__$1,opts,build_id){
return (function (p__49720){
var vec__49721 = p__49720;
var seq__49722 = cljs.core.seq.call(null,vec__49721);
var first__49723 = cljs.core.first.call(null,seq__49722);
var seq__49722__$1 = cljs.core.next.call(null,seq__49722);
var map__49724 = first__49723;
var map__49724__$1 = ((((!((map__49724 == null)))?((((map__49724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49724):map__49724);
var msg = map__49724__$1;
var msg_name = cljs.core.get.call(null,map__49724__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49722__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49721,seq__49722,first__49723,seq__49722__$1,map__49724,map__49724__$1,msg,msg_name,_,map__49718,map__49718__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49721,seq__49722,first__49723,seq__49722__$1,map__49724,map__49724__$1,msg,msg_name,_,map__49718,map__49718__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__49718,map__49718__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49726){
var vec__49727 = p__49726;
var seq__49728 = cljs.core.seq.call(null,vec__49727);
var first__49729 = cljs.core.first.call(null,seq__49728);
var seq__49728__$1 = cljs.core.next.call(null,seq__49728);
var map__49730 = first__49729;
var map__49730__$1 = ((((!((map__49730 == null)))?((((map__49730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49730):map__49730);
var msg = map__49730__$1;
var msg_name = cljs.core.get.call(null,map__49730__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49728__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49732){
var map__49733 = p__49732;
var map__49733__$1 = ((((!((map__49733 == null)))?((((map__49733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49733):map__49733);
var on_compile_warning = cljs.core.get.call(null,map__49733__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49733__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49733,map__49733__$1,on_compile_warning,on_compile_fail){
return (function (p__49735){
var vec__49736 = p__49735;
var seq__49737 = cljs.core.seq.call(null,vec__49736);
var first__49738 = cljs.core.first.call(null,seq__49737);
var seq__49737__$1 = cljs.core.next.call(null,seq__49737);
var map__49739 = first__49738;
var map__49739__$1 = ((((!((map__49739 == null)))?((((map__49739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49739):map__49739);
var msg = map__49739__$1;
var msg_name = cljs.core.get.call(null,map__49739__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49737__$1;
var pred__49741 = cljs.core._EQ_;
var expr__49742 = msg_name;
if(cljs.core.truth_(pred__49741.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49742))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49741.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49742))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49733,map__49733__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__46754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto__,msg_hist,msg_names,msg){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto__,msg_hist,msg_names,msg){
return (function (state_49831){
var state_val_49832 = (state_49831[(1)]);
if((state_val_49832 === (7))){
var inst_49751 = (state_49831[(2)]);
var state_49831__$1 = state_49831;
if(cljs.core.truth_(inst_49751)){
var statearr_49833_49880 = state_49831__$1;
(statearr_49833_49880[(1)] = (8));

} else {
var statearr_49834_49881 = state_49831__$1;
(statearr_49834_49881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (20))){
var inst_49825 = (state_49831[(2)]);
var state_49831__$1 = state_49831;
var statearr_49835_49882 = state_49831__$1;
(statearr_49835_49882[(2)] = inst_49825);

(statearr_49835_49882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (27))){
var inst_49821 = (state_49831[(2)]);
var state_49831__$1 = state_49831;
var statearr_49836_49883 = state_49831__$1;
(statearr_49836_49883[(2)] = inst_49821);

(statearr_49836_49883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (1))){
var inst_49744 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49831__$1 = state_49831;
if(cljs.core.truth_(inst_49744)){
var statearr_49837_49884 = state_49831__$1;
(statearr_49837_49884[(1)] = (2));

} else {
var statearr_49838_49885 = state_49831__$1;
(statearr_49838_49885[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (24))){
var inst_49823 = (state_49831[(2)]);
var state_49831__$1 = state_49831;
var statearr_49839_49886 = state_49831__$1;
(statearr_49839_49886[(2)] = inst_49823);

(statearr_49839_49886[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (4))){
var inst_49829 = (state_49831[(2)]);
var state_49831__$1 = state_49831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49831__$1,inst_49829);
} else {
if((state_val_49832 === (15))){
var inst_49827 = (state_49831[(2)]);
var state_49831__$1 = state_49831;
var statearr_49840_49887 = state_49831__$1;
(statearr_49840_49887[(2)] = inst_49827);

(statearr_49840_49887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (21))){
var inst_49780 = (state_49831[(2)]);
var inst_49781 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49782 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49781);
var state_49831__$1 = (function (){var statearr_49841 = state_49831;
(statearr_49841[(7)] = inst_49780);

return statearr_49841;
})();
var statearr_49842_49888 = state_49831__$1;
(statearr_49842_49888[(2)] = inst_49782);

(statearr_49842_49888[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (31))){
var inst_49810 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49831__$1 = state_49831;
if(cljs.core.truth_(inst_49810)){
var statearr_49843_49889 = state_49831__$1;
(statearr_49843_49889[(1)] = (34));

} else {
var statearr_49844_49890 = state_49831__$1;
(statearr_49844_49890[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (32))){
var inst_49819 = (state_49831[(2)]);
var state_49831__$1 = state_49831;
var statearr_49845_49891 = state_49831__$1;
(statearr_49845_49891[(2)] = inst_49819);

(statearr_49845_49891[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (33))){
var inst_49806 = (state_49831[(2)]);
var inst_49807 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49808 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49807);
var state_49831__$1 = (function (){var statearr_49846 = state_49831;
(statearr_49846[(8)] = inst_49806);

return statearr_49846;
})();
var statearr_49847_49892 = state_49831__$1;
(statearr_49847_49892[(2)] = inst_49808);

(statearr_49847_49892[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (13))){
var inst_49765 = figwheel.client.heads_up.clear.call(null);
var state_49831__$1 = state_49831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49831__$1,(16),inst_49765);
} else {
if((state_val_49832 === (22))){
var inst_49786 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49787 = figwheel.client.heads_up.append_warning_message.call(null,inst_49786);
var state_49831__$1 = state_49831;
var statearr_49848_49893 = state_49831__$1;
(statearr_49848_49893[(2)] = inst_49787);

(statearr_49848_49893[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (36))){
var inst_49817 = (state_49831[(2)]);
var state_49831__$1 = state_49831;
var statearr_49849_49894 = state_49831__$1;
(statearr_49849_49894[(2)] = inst_49817);

(statearr_49849_49894[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (29))){
var inst_49797 = (state_49831[(2)]);
var inst_49798 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49799 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49798);
var state_49831__$1 = (function (){var statearr_49850 = state_49831;
(statearr_49850[(9)] = inst_49797);

return statearr_49850;
})();
var statearr_49851_49895 = state_49831__$1;
(statearr_49851_49895[(2)] = inst_49799);

(statearr_49851_49895[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (6))){
var inst_49746 = (state_49831[(10)]);
var state_49831__$1 = state_49831;
var statearr_49852_49896 = state_49831__$1;
(statearr_49852_49896[(2)] = inst_49746);

(statearr_49852_49896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (28))){
var inst_49793 = (state_49831[(2)]);
var inst_49794 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49795 = figwheel.client.heads_up.display_warning.call(null,inst_49794);
var state_49831__$1 = (function (){var statearr_49853 = state_49831;
(statearr_49853[(11)] = inst_49793);

return statearr_49853;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49831__$1,(29),inst_49795);
} else {
if((state_val_49832 === (25))){
var inst_49791 = figwheel.client.heads_up.clear.call(null);
var state_49831__$1 = state_49831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49831__$1,(28),inst_49791);
} else {
if((state_val_49832 === (34))){
var inst_49812 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49831__$1 = state_49831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49831__$1,(37),inst_49812);
} else {
if((state_val_49832 === (17))){
var inst_49771 = (state_49831[(2)]);
var inst_49772 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49773 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49772);
var state_49831__$1 = (function (){var statearr_49854 = state_49831;
(statearr_49854[(12)] = inst_49771);

return statearr_49854;
})();
var statearr_49855_49897 = state_49831__$1;
(statearr_49855_49897[(2)] = inst_49773);

(statearr_49855_49897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (3))){
var inst_49763 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49831__$1 = state_49831;
if(cljs.core.truth_(inst_49763)){
var statearr_49856_49898 = state_49831__$1;
(statearr_49856_49898[(1)] = (13));

} else {
var statearr_49857_49899 = state_49831__$1;
(statearr_49857_49899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (12))){
var inst_49759 = (state_49831[(2)]);
var state_49831__$1 = state_49831;
var statearr_49858_49900 = state_49831__$1;
(statearr_49858_49900[(2)] = inst_49759);

(statearr_49858_49900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (2))){
var inst_49746 = (state_49831[(10)]);
var inst_49746__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49831__$1 = (function (){var statearr_49859 = state_49831;
(statearr_49859[(10)] = inst_49746__$1);

return statearr_49859;
})();
if(cljs.core.truth_(inst_49746__$1)){
var statearr_49860_49901 = state_49831__$1;
(statearr_49860_49901[(1)] = (5));

} else {
var statearr_49861_49902 = state_49831__$1;
(statearr_49861_49902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (23))){
var inst_49789 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49831__$1 = state_49831;
if(cljs.core.truth_(inst_49789)){
var statearr_49862_49903 = state_49831__$1;
(statearr_49862_49903[(1)] = (25));

} else {
var statearr_49863_49904 = state_49831__$1;
(statearr_49863_49904[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (35))){
var state_49831__$1 = state_49831;
var statearr_49864_49905 = state_49831__$1;
(statearr_49864_49905[(2)] = null);

(statearr_49864_49905[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (19))){
var inst_49784 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49831__$1 = state_49831;
if(cljs.core.truth_(inst_49784)){
var statearr_49865_49906 = state_49831__$1;
(statearr_49865_49906[(1)] = (22));

} else {
var statearr_49866_49907 = state_49831__$1;
(statearr_49866_49907[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (11))){
var inst_49755 = (state_49831[(2)]);
var state_49831__$1 = state_49831;
var statearr_49867_49908 = state_49831__$1;
(statearr_49867_49908[(2)] = inst_49755);

(statearr_49867_49908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (9))){
var inst_49757 = figwheel.client.heads_up.clear.call(null);
var state_49831__$1 = state_49831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49831__$1,(12),inst_49757);
} else {
if((state_val_49832 === (5))){
var inst_49748 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49831__$1 = state_49831;
var statearr_49868_49909 = state_49831__$1;
(statearr_49868_49909[(2)] = inst_49748);

(statearr_49868_49909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (14))){
var inst_49775 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49831__$1 = state_49831;
if(cljs.core.truth_(inst_49775)){
var statearr_49869_49910 = state_49831__$1;
(statearr_49869_49910[(1)] = (18));

} else {
var statearr_49870_49911 = state_49831__$1;
(statearr_49870_49911[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (26))){
var inst_49801 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49831__$1 = state_49831;
if(cljs.core.truth_(inst_49801)){
var statearr_49871_49912 = state_49831__$1;
(statearr_49871_49912[(1)] = (30));

} else {
var statearr_49872_49913 = state_49831__$1;
(statearr_49872_49913[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (16))){
var inst_49767 = (state_49831[(2)]);
var inst_49768 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49769 = figwheel.client.heads_up.display_exception.call(null,inst_49768);
var state_49831__$1 = (function (){var statearr_49873 = state_49831;
(statearr_49873[(13)] = inst_49767);

return statearr_49873;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49831__$1,(17),inst_49769);
} else {
if((state_val_49832 === (30))){
var inst_49803 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49804 = figwheel.client.heads_up.display_warning.call(null,inst_49803);
var state_49831__$1 = state_49831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49831__$1,(33),inst_49804);
} else {
if((state_val_49832 === (10))){
var inst_49761 = (state_49831[(2)]);
var state_49831__$1 = state_49831;
var statearr_49874_49914 = state_49831__$1;
(statearr_49874_49914[(2)] = inst_49761);

(statearr_49874_49914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (18))){
var inst_49777 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49778 = figwheel.client.heads_up.display_exception.call(null,inst_49777);
var state_49831__$1 = state_49831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49831__$1,(21),inst_49778);
} else {
if((state_val_49832 === (37))){
var inst_49814 = (state_49831[(2)]);
var state_49831__$1 = state_49831;
var statearr_49875_49915 = state_49831__$1;
(statearr_49875_49915[(2)] = inst_49814);

(statearr_49875_49915[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49832 === (8))){
var inst_49753 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49831__$1 = state_49831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49831__$1,(11),inst_49753);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46754__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__46664__auto__,c__46754__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46665__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46665__auto____0 = (function (){
var statearr_49876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49876[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46665__auto__);

(statearr_49876[(1)] = (1));

return statearr_49876;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46665__auto____1 = (function (state_49831){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_49831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e49877){if((e49877 instanceof Object)){
var ex__46668__auto__ = e49877;
var statearr_49878_49916 = state_49831;
(statearr_49878_49916[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49917 = state_49831;
state_49831 = G__49917;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46665__auto__ = function(state_49831){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46665__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46665__auto____1.call(this,state_49831);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46665__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46665__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto__,msg_hist,msg_names,msg))
})();
var state__46756__auto__ = (function (){var statearr_49879 = f__46755__auto__.call(null);
(statearr_49879[(6)] = c__46754__auto__);

return statearr_49879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto__,msg_hist,msg_names,msg))
);

return c__46754__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__46754__auto___49946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___49946,ch){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___49946,ch){
return (function (state_49932){
var state_val_49933 = (state_49932[(1)]);
if((state_val_49933 === (1))){
var state_49932__$1 = state_49932;
var statearr_49934_49947 = state_49932__$1;
(statearr_49934_49947[(2)] = null);

(statearr_49934_49947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49933 === (2))){
var state_49932__$1 = state_49932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49932__$1,(4),ch);
} else {
if((state_val_49933 === (3))){
var inst_49930 = (state_49932[(2)]);
var state_49932__$1 = state_49932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49932__$1,inst_49930);
} else {
if((state_val_49933 === (4))){
var inst_49920 = (state_49932[(7)]);
var inst_49920__$1 = (state_49932[(2)]);
var state_49932__$1 = (function (){var statearr_49935 = state_49932;
(statearr_49935[(7)] = inst_49920__$1);

return statearr_49935;
})();
if(cljs.core.truth_(inst_49920__$1)){
var statearr_49936_49948 = state_49932__$1;
(statearr_49936_49948[(1)] = (5));

} else {
var statearr_49937_49949 = state_49932__$1;
(statearr_49937_49949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49933 === (5))){
var inst_49920 = (state_49932[(7)]);
var inst_49922 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49920);
var state_49932__$1 = state_49932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49932__$1,(8),inst_49922);
} else {
if((state_val_49933 === (6))){
var state_49932__$1 = state_49932;
var statearr_49938_49950 = state_49932__$1;
(statearr_49938_49950[(2)] = null);

(statearr_49938_49950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49933 === (7))){
var inst_49928 = (state_49932[(2)]);
var state_49932__$1 = state_49932;
var statearr_49939_49951 = state_49932__$1;
(statearr_49939_49951[(2)] = inst_49928);

(statearr_49939_49951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49933 === (8))){
var inst_49924 = (state_49932[(2)]);
var state_49932__$1 = (function (){var statearr_49940 = state_49932;
(statearr_49940[(8)] = inst_49924);

return statearr_49940;
})();
var statearr_49941_49952 = state_49932__$1;
(statearr_49941_49952[(2)] = null);

(statearr_49941_49952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__46754__auto___49946,ch))
;
return ((function (switch__46664__auto__,c__46754__auto___49946,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__46665__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__46665__auto____0 = (function (){
var statearr_49942 = [null,null,null,null,null,null,null,null,null];
(statearr_49942[(0)] = figwheel$client$heads_up_plugin_$_state_machine__46665__auto__);

(statearr_49942[(1)] = (1));

return statearr_49942;
});
var figwheel$client$heads_up_plugin_$_state_machine__46665__auto____1 = (function (state_49932){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_49932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e49943){if((e49943 instanceof Object)){
var ex__46668__auto__ = e49943;
var statearr_49944_49953 = state_49932;
(statearr_49944_49953[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49954 = state_49932;
state_49932 = G__49954;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__46665__auto__ = function(state_49932){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__46665__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__46665__auto____1.call(this,state_49932);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__46665__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__46665__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___49946,ch))
})();
var state__46756__auto__ = (function (){var statearr_49945 = f__46755__auto__.call(null);
(statearr_49945[(6)] = c__46754__auto___49946);

return statearr_49945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___49946,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__46754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto__){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto__){
return (function (state_49960){
var state_val_49961 = (state_49960[(1)]);
if((state_val_49961 === (1))){
var inst_49955 = cljs.core.async.timeout.call(null,(3000));
var state_49960__$1 = state_49960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49960__$1,(2),inst_49955);
} else {
if((state_val_49961 === (2))){
var inst_49957 = (state_49960[(2)]);
var inst_49958 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49960__$1 = (function (){var statearr_49962 = state_49960;
(statearr_49962[(7)] = inst_49957);

return statearr_49962;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49960__$1,inst_49958);
} else {
return null;
}
}
});})(c__46754__auto__))
;
return ((function (switch__46664__auto__,c__46754__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__46665__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__46665__auto____0 = (function (){
var statearr_49963 = [null,null,null,null,null,null,null,null];
(statearr_49963[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__46665__auto__);

(statearr_49963[(1)] = (1));

return statearr_49963;
});
var figwheel$client$enforce_project_plugin_$_state_machine__46665__auto____1 = (function (state_49960){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_49960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e49964){if((e49964 instanceof Object)){
var ex__46668__auto__ = e49964;
var statearr_49965_49967 = state_49960;
(statearr_49965_49967[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49968 = state_49960;
state_49960 = G__49968;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__46665__auto__ = function(state_49960){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__46665__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__46665__auto____1.call(this,state_49960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__46665__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__46665__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto__))
})();
var state__46756__auto__ = (function (){var statearr_49966 = f__46755__auto__.call(null);
(statearr_49966[(6)] = c__46754__auto__);

return statearr_49966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto__))
);

return c__46754__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__46754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto__,figwheel_version,temp__5457__auto__){
return (function (state_49975){
var state_val_49976 = (state_49975[(1)]);
if((state_val_49976 === (1))){
var inst_49969 = cljs.core.async.timeout.call(null,(2000));
var state_49975__$1 = state_49975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49975__$1,(2),inst_49969);
} else {
if((state_val_49976 === (2))){
var inst_49971 = (state_49975[(2)]);
var inst_49972 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_49973 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49972);
var state_49975__$1 = (function (){var statearr_49977 = state_49975;
(statearr_49977[(7)] = inst_49971);

return statearr_49977;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49975__$1,inst_49973);
} else {
return null;
}
}
});})(c__46754__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__46664__auto__,c__46754__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46665__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46665__auto____0 = (function (){
var statearr_49978 = [null,null,null,null,null,null,null,null];
(statearr_49978[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46665__auto__);

(statearr_49978[(1)] = (1));

return statearr_49978;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46665__auto____1 = (function (state_49975){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_49975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e49979){if((e49979 instanceof Object)){
var ex__46668__auto__ = e49979;
var statearr_49980_49982 = state_49975;
(statearr_49980_49982[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49983 = state_49975;
state_49975 = G__49983;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46665__auto__ = function(state_49975){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46665__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46665__auto____1.call(this,state_49975);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46665__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46665__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto__,figwheel_version,temp__5457__auto__))
})();
var state__46756__auto__ = (function (){var statearr_49981 = f__46755__auto__.call(null);
(statearr_49981[(6)] = c__46754__auto__);

return statearr_49981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto__,figwheel_version,temp__5457__auto__))
);

return c__46754__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49984){
var map__49985 = p__49984;
var map__49985__$1 = ((((!((map__49985 == null)))?((((map__49985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49985):map__49985);
var file = cljs.core.get.call(null,map__49985__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49985__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49985__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49987 = "";
var G__49987__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49987),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__49987);
var G__49987__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49987__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__49987__$1);
if(cljs.core.truth_((function (){var and__30510__auto__ = line;
if(cljs.core.truth_(and__30510__auto__)){
return column;
} else {
return and__30510__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49987__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__49987__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49988){
var map__49989 = p__49988;
var map__49989__$1 = ((((!((map__49989 == null)))?((((map__49989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49989):map__49989);
var ed = map__49989__$1;
var formatted_exception = cljs.core.get.call(null,map__49989__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49989__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49989__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49991_49995 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49992_49996 = null;
var count__49993_49997 = (0);
var i__49994_49998 = (0);
while(true){
if((i__49994_49998 < count__49993_49997)){
var msg_49999 = cljs.core._nth.call(null,chunk__49992_49996,i__49994_49998);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49999);

var G__50000 = seq__49991_49995;
var G__50001 = chunk__49992_49996;
var G__50002 = count__49993_49997;
var G__50003 = (i__49994_49998 + (1));
seq__49991_49995 = G__50000;
chunk__49992_49996 = G__50001;
count__49993_49997 = G__50002;
i__49994_49998 = G__50003;
continue;
} else {
var temp__5457__auto___50004 = cljs.core.seq.call(null,seq__49991_49995);
if(temp__5457__auto___50004){
var seq__49991_50005__$1 = temp__5457__auto___50004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49991_50005__$1)){
var c__31454__auto___50006 = cljs.core.chunk_first.call(null,seq__49991_50005__$1);
var G__50007 = cljs.core.chunk_rest.call(null,seq__49991_50005__$1);
var G__50008 = c__31454__auto___50006;
var G__50009 = cljs.core.count.call(null,c__31454__auto___50006);
var G__50010 = (0);
seq__49991_49995 = G__50007;
chunk__49992_49996 = G__50008;
count__49993_49997 = G__50009;
i__49994_49998 = G__50010;
continue;
} else {
var msg_50011 = cljs.core.first.call(null,seq__49991_50005__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50011);

var G__50012 = cljs.core.next.call(null,seq__49991_50005__$1);
var G__50013 = null;
var G__50014 = (0);
var G__50015 = (0);
seq__49991_49995 = G__50012;
chunk__49992_49996 = G__50013;
count__49993_49997 = G__50014;
i__49994_49998 = G__50015;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50016){
var map__50017 = p__50016;
var map__50017__$1 = ((((!((map__50017 == null)))?((((map__50017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50017):map__50017);
var w = map__50017__$1;
var message = cljs.core.get.call(null,map__50017__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30510__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30510__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30510__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__50019 = cljs.core.seq.call(null,plugins);
var chunk__50020 = null;
var count__50021 = (0);
var i__50022 = (0);
while(true){
if((i__50022 < count__50021)){
var vec__50023 = cljs.core._nth.call(null,chunk__50020,i__50022);
var k = cljs.core.nth.call(null,vec__50023,(0),null);
var plugin = cljs.core.nth.call(null,vec__50023,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50029 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50019,chunk__50020,count__50021,i__50022,pl_50029,vec__50023,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50029.call(null,msg_hist);
});})(seq__50019,chunk__50020,count__50021,i__50022,pl_50029,vec__50023,k,plugin))
);
} else {
}

var G__50030 = seq__50019;
var G__50031 = chunk__50020;
var G__50032 = count__50021;
var G__50033 = (i__50022 + (1));
seq__50019 = G__50030;
chunk__50020 = G__50031;
count__50021 = G__50032;
i__50022 = G__50033;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50019);
if(temp__5457__auto__){
var seq__50019__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50019__$1)){
var c__31454__auto__ = cljs.core.chunk_first.call(null,seq__50019__$1);
var G__50034 = cljs.core.chunk_rest.call(null,seq__50019__$1);
var G__50035 = c__31454__auto__;
var G__50036 = cljs.core.count.call(null,c__31454__auto__);
var G__50037 = (0);
seq__50019 = G__50034;
chunk__50020 = G__50035;
count__50021 = G__50036;
i__50022 = G__50037;
continue;
} else {
var vec__50026 = cljs.core.first.call(null,seq__50019__$1);
var k = cljs.core.nth.call(null,vec__50026,(0),null);
var plugin = cljs.core.nth.call(null,vec__50026,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50038 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50019,chunk__50020,count__50021,i__50022,pl_50038,vec__50026,k,plugin,seq__50019__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50038.call(null,msg_hist);
});})(seq__50019,chunk__50020,count__50021,i__50022,pl_50038,vec__50026,k,plugin,seq__50019__$1,temp__5457__auto__))
);
} else {
}

var G__50039 = cljs.core.next.call(null,seq__50019__$1);
var G__50040 = null;
var G__50041 = (0);
var G__50042 = (0);
seq__50019 = G__50039;
chunk__50020 = G__50040;
count__50021 = G__50041;
i__50022 = G__50042;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__50044 = arguments.length;
switch (G__50044) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__50045_50050 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50046_50051 = null;
var count__50047_50052 = (0);
var i__50048_50053 = (0);
while(true){
if((i__50048_50053 < count__50047_50052)){
var msg_50054 = cljs.core._nth.call(null,chunk__50046_50051,i__50048_50053);
figwheel.client.socket.handle_incoming_message.call(null,msg_50054);

var G__50055 = seq__50045_50050;
var G__50056 = chunk__50046_50051;
var G__50057 = count__50047_50052;
var G__50058 = (i__50048_50053 + (1));
seq__50045_50050 = G__50055;
chunk__50046_50051 = G__50056;
count__50047_50052 = G__50057;
i__50048_50053 = G__50058;
continue;
} else {
var temp__5457__auto___50059 = cljs.core.seq.call(null,seq__50045_50050);
if(temp__5457__auto___50059){
var seq__50045_50060__$1 = temp__5457__auto___50059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50045_50060__$1)){
var c__31454__auto___50061 = cljs.core.chunk_first.call(null,seq__50045_50060__$1);
var G__50062 = cljs.core.chunk_rest.call(null,seq__50045_50060__$1);
var G__50063 = c__31454__auto___50061;
var G__50064 = cljs.core.count.call(null,c__31454__auto___50061);
var G__50065 = (0);
seq__50045_50050 = G__50062;
chunk__50046_50051 = G__50063;
count__50047_50052 = G__50064;
i__50048_50053 = G__50065;
continue;
} else {
var msg_50066 = cljs.core.first.call(null,seq__50045_50060__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50066);

var G__50067 = cljs.core.next.call(null,seq__50045_50060__$1);
var G__50068 = null;
var G__50069 = (0);
var G__50070 = (0);
seq__50045_50050 = G__50067;
chunk__50046_50051 = G__50068;
count__50047_50052 = G__50069;
i__50048_50053 = G__50070;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31809__auto__ = [];
var len__31802__auto___50075 = arguments.length;
var i__31803__auto___50076 = (0);
while(true){
if((i__31803__auto___50076 < len__31802__auto___50075)){
args__31809__auto__.push((arguments[i__31803__auto___50076]));

var G__50077 = (i__31803__auto___50076 + (1));
i__31803__auto___50076 = G__50077;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50072){
var map__50073 = p__50072;
var map__50073__$1 = ((((!((map__50073 == null)))?((((map__50073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50073):map__50073);
var opts = map__50073__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50071){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50071));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50078){if((e50078 instanceof Error)){
var e = e50078;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50078;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__50079){
var map__50080 = p__50079;
var map__50080__$1 = ((((!((map__50080 == null)))?((((map__50080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50080):map__50080);
var msg_name = cljs.core.get.call(null,map__50080__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510703506296
