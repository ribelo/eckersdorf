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
}catch (e49598){if((e49598 instanceof Error)){
var e = e49598;
return "Error: Unable to stringify";
} else {
throw e49598;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__49601 = arguments.length;
switch (G__49601) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__49599_SHARP_){
if(typeof p1__49599_SHARP_ === 'string'){
return p1__49599_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__49599_SHARP_);
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
var len__31802__auto___49604 = arguments.length;
var i__31803__auto___49605 = (0);
while(true){
if((i__31803__auto___49605 < len__31802__auto___49604)){
args__31809__auto__.push((arguments[i__31803__auto___49605]));

var G__49606 = (i__31803__auto___49605 + (1));
i__31803__auto___49605 = G__49606;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq49603){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49603));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31809__auto__ = [];
var len__31802__auto___49608 = arguments.length;
var i__31803__auto___49609 = (0);
while(true){
if((i__31803__auto___49609 < len__31802__auto___49608)){
args__31809__auto__.push((arguments[i__31803__auto___49609]));

var G__49610 = (i__31803__auto___49609 + (1));
i__31803__auto___49609 = G__49610;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq49607){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49607));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__49611){
var map__49612 = p__49611;
var map__49612__$1 = ((((!((map__49612 == null)))?((((map__49612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49612):map__49612);
var message = cljs.core.get.call(null,map__49612__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__49612__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30523__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30523__auto__)){
return or__30523__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30511__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30511__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30511__auto__;
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
var c__46752__auto___49691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___49691,ch){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___49691,ch){
return (function (state_49663){
var state_val_49664 = (state_49663[(1)]);
if((state_val_49664 === (7))){
var inst_49659 = (state_49663[(2)]);
var state_49663__$1 = state_49663;
var statearr_49665_49692 = state_49663__$1;
(statearr_49665_49692[(2)] = inst_49659);

(statearr_49665_49692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (1))){
var state_49663__$1 = state_49663;
var statearr_49666_49693 = state_49663__$1;
(statearr_49666_49693[(2)] = null);

(statearr_49666_49693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (4))){
var inst_49616 = (state_49663[(7)]);
var inst_49616__$1 = (state_49663[(2)]);
var state_49663__$1 = (function (){var statearr_49667 = state_49663;
(statearr_49667[(7)] = inst_49616__$1);

return statearr_49667;
})();
if(cljs.core.truth_(inst_49616__$1)){
var statearr_49668_49694 = state_49663__$1;
(statearr_49668_49694[(1)] = (5));

} else {
var statearr_49669_49695 = state_49663__$1;
(statearr_49669_49695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (15))){
var inst_49623 = (state_49663[(8)]);
var inst_49638 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49623);
var inst_49639 = cljs.core.first.call(null,inst_49638);
var inst_49640 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_49639);
var inst_49641 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49640)].join('');
var inst_49642 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_49641);
var state_49663__$1 = state_49663;
var statearr_49670_49696 = state_49663__$1;
(statearr_49670_49696[(2)] = inst_49642);

(statearr_49670_49696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (13))){
var inst_49647 = (state_49663[(2)]);
var state_49663__$1 = state_49663;
var statearr_49671_49697 = state_49663__$1;
(statearr_49671_49697[(2)] = inst_49647);

(statearr_49671_49697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (6))){
var state_49663__$1 = state_49663;
var statearr_49672_49698 = state_49663__$1;
(statearr_49672_49698[(2)] = null);

(statearr_49672_49698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (17))){
var inst_49645 = (state_49663[(2)]);
var state_49663__$1 = state_49663;
var statearr_49673_49699 = state_49663__$1;
(statearr_49673_49699[(2)] = inst_49645);

(statearr_49673_49699[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (3))){
var inst_49661 = (state_49663[(2)]);
var state_49663__$1 = state_49663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49663__$1,inst_49661);
} else {
if((state_val_49664 === (12))){
var inst_49622 = (state_49663[(9)]);
var inst_49636 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_49622,opts);
var state_49663__$1 = state_49663;
if(cljs.core.truth_(inst_49636)){
var statearr_49674_49700 = state_49663__$1;
(statearr_49674_49700[(1)] = (15));

} else {
var statearr_49675_49701 = state_49663__$1;
(statearr_49675_49701[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (2))){
var state_49663__$1 = state_49663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49663__$1,(4),ch);
} else {
if((state_val_49664 === (11))){
var inst_49623 = (state_49663[(8)]);
var inst_49628 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49629 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_49623);
var inst_49630 = cljs.core.async.timeout.call(null,(1000));
var inst_49631 = [inst_49629,inst_49630];
var inst_49632 = (new cljs.core.PersistentVector(null,2,(5),inst_49628,inst_49631,null));
var state_49663__$1 = state_49663;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49663__$1,(14),inst_49632);
} else {
if((state_val_49664 === (9))){
var inst_49623 = (state_49663[(8)]);
var inst_49649 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_49650 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49623);
var inst_49651 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49650);
var inst_49652 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49651)].join('');
var inst_49653 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_49652);
var state_49663__$1 = (function (){var statearr_49676 = state_49663;
(statearr_49676[(10)] = inst_49649);

return statearr_49676;
})();
var statearr_49677_49702 = state_49663__$1;
(statearr_49677_49702[(2)] = inst_49653);

(statearr_49677_49702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (5))){
var inst_49616 = (state_49663[(7)]);
var inst_49618 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_49619 = (new cljs.core.PersistentArrayMap(null,2,inst_49618,null));
var inst_49620 = (new cljs.core.PersistentHashSet(null,inst_49619,null));
var inst_49621 = figwheel.client.focus_msgs.call(null,inst_49620,inst_49616);
var inst_49622 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_49621);
var inst_49623 = cljs.core.first.call(null,inst_49621);
var inst_49624 = figwheel.client.autoload_QMARK_.call(null);
var state_49663__$1 = (function (){var statearr_49678 = state_49663;
(statearr_49678[(8)] = inst_49623);

(statearr_49678[(9)] = inst_49622);

return statearr_49678;
})();
if(cljs.core.truth_(inst_49624)){
var statearr_49679_49703 = state_49663__$1;
(statearr_49679_49703[(1)] = (8));

} else {
var statearr_49680_49704 = state_49663__$1;
(statearr_49680_49704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (14))){
var inst_49634 = (state_49663[(2)]);
var state_49663__$1 = state_49663;
var statearr_49681_49705 = state_49663__$1;
(statearr_49681_49705[(2)] = inst_49634);

(statearr_49681_49705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (16))){
var state_49663__$1 = state_49663;
var statearr_49682_49706 = state_49663__$1;
(statearr_49682_49706[(2)] = null);

(statearr_49682_49706[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (10))){
var inst_49655 = (state_49663[(2)]);
var state_49663__$1 = (function (){var statearr_49683 = state_49663;
(statearr_49683[(11)] = inst_49655);

return statearr_49683;
})();
var statearr_49684_49707 = state_49663__$1;
(statearr_49684_49707[(2)] = null);

(statearr_49684_49707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49664 === (8))){
var inst_49622 = (state_49663[(9)]);
var inst_49626 = figwheel.client.reload_file_state_QMARK_.call(null,inst_49622,opts);
var state_49663__$1 = state_49663;
if(cljs.core.truth_(inst_49626)){
var statearr_49685_49708 = state_49663__$1;
(statearr_49685_49708[(1)] = (11));

} else {
var statearr_49686_49709 = state_49663__$1;
(statearr_49686_49709[(1)] = (12));

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
});})(c__46752__auto___49691,ch))
;
return ((function (switch__46662__auto__,c__46752__auto___49691,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__46663__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__46663__auto____0 = (function (){
var statearr_49687 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49687[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__46663__auto__);

(statearr_49687[(1)] = (1));

return statearr_49687;
});
var figwheel$client$file_reloader_plugin_$_state_machine__46663__auto____1 = (function (state_49663){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_49663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e49688){if((e49688 instanceof Object)){
var ex__46666__auto__ = e49688;
var statearr_49689_49710 = state_49663;
(statearr_49689_49710[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49711 = state_49663;
state_49663 = G__49711;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__46663__auto__ = function(state_49663){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__46663__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__46663__auto____1.call(this,state_49663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__46663__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__46663__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___49691,ch))
})();
var state__46754__auto__ = (function (){var statearr_49690 = f__46753__auto__.call(null);
(statearr_49690[(6)] = c__46752__auto___49691);

return statearr_49690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___49691,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__49712_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__49712_SHARP_));
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
var base_path_49714 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_49714){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e49713){if((e49713 instanceof Error)){
var e = e49713;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_49714], null));
} else {
var e = e49713;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_49714))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__49715){
var map__49716 = p__49715;
var map__49716__$1 = ((((!((map__49716 == null)))?((((map__49716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49716):map__49716);
var opts = map__49716__$1;
var build_id = cljs.core.get.call(null,map__49716__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__49716,map__49716__$1,opts,build_id){
return (function (p__49718){
var vec__49719 = p__49718;
var seq__49720 = cljs.core.seq.call(null,vec__49719);
var first__49721 = cljs.core.first.call(null,seq__49720);
var seq__49720__$1 = cljs.core.next.call(null,seq__49720);
var map__49722 = first__49721;
var map__49722__$1 = ((((!((map__49722 == null)))?((((map__49722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49722):map__49722);
var msg = map__49722__$1;
var msg_name = cljs.core.get.call(null,map__49722__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49720__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49719,seq__49720,first__49721,seq__49720__$1,map__49722,map__49722__$1,msg,msg_name,_,map__49716,map__49716__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49719,seq__49720,first__49721,seq__49720__$1,map__49722,map__49722__$1,msg,msg_name,_,map__49716,map__49716__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__49716,map__49716__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49724){
var vec__49725 = p__49724;
var seq__49726 = cljs.core.seq.call(null,vec__49725);
var first__49727 = cljs.core.first.call(null,seq__49726);
var seq__49726__$1 = cljs.core.next.call(null,seq__49726);
var map__49728 = first__49727;
var map__49728__$1 = ((((!((map__49728 == null)))?((((map__49728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49728):map__49728);
var msg = map__49728__$1;
var msg_name = cljs.core.get.call(null,map__49728__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49726__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49730){
var map__49731 = p__49730;
var map__49731__$1 = ((((!((map__49731 == null)))?((((map__49731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49731):map__49731);
var on_compile_warning = cljs.core.get.call(null,map__49731__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49731__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49731,map__49731__$1,on_compile_warning,on_compile_fail){
return (function (p__49733){
var vec__49734 = p__49733;
var seq__49735 = cljs.core.seq.call(null,vec__49734);
var first__49736 = cljs.core.first.call(null,seq__49735);
var seq__49735__$1 = cljs.core.next.call(null,seq__49735);
var map__49737 = first__49736;
var map__49737__$1 = ((((!((map__49737 == null)))?((((map__49737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49737):map__49737);
var msg = map__49737__$1;
var msg_name = cljs.core.get.call(null,map__49737__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49735__$1;
var pred__49739 = cljs.core._EQ_;
var expr__49740 = msg_name;
if(cljs.core.truth_(pred__49739.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49740))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49739.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49740))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49731,map__49731__$1,on_compile_warning,on_compile_fail))
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
var c__46752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto__,msg_hist,msg_names,msg){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto__,msg_hist,msg_names,msg){
return (function (state_49829){
var state_val_49830 = (state_49829[(1)]);
if((state_val_49830 === (7))){
var inst_49749 = (state_49829[(2)]);
var state_49829__$1 = state_49829;
if(cljs.core.truth_(inst_49749)){
var statearr_49831_49878 = state_49829__$1;
(statearr_49831_49878[(1)] = (8));

} else {
var statearr_49832_49879 = state_49829__$1;
(statearr_49832_49879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (20))){
var inst_49823 = (state_49829[(2)]);
var state_49829__$1 = state_49829;
var statearr_49833_49880 = state_49829__$1;
(statearr_49833_49880[(2)] = inst_49823);

(statearr_49833_49880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (27))){
var inst_49819 = (state_49829[(2)]);
var state_49829__$1 = state_49829;
var statearr_49834_49881 = state_49829__$1;
(statearr_49834_49881[(2)] = inst_49819);

(statearr_49834_49881[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (1))){
var inst_49742 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49829__$1 = state_49829;
if(cljs.core.truth_(inst_49742)){
var statearr_49835_49882 = state_49829__$1;
(statearr_49835_49882[(1)] = (2));

} else {
var statearr_49836_49883 = state_49829__$1;
(statearr_49836_49883[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (24))){
var inst_49821 = (state_49829[(2)]);
var state_49829__$1 = state_49829;
var statearr_49837_49884 = state_49829__$1;
(statearr_49837_49884[(2)] = inst_49821);

(statearr_49837_49884[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (4))){
var inst_49827 = (state_49829[(2)]);
var state_49829__$1 = state_49829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49829__$1,inst_49827);
} else {
if((state_val_49830 === (15))){
var inst_49825 = (state_49829[(2)]);
var state_49829__$1 = state_49829;
var statearr_49838_49885 = state_49829__$1;
(statearr_49838_49885[(2)] = inst_49825);

(statearr_49838_49885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (21))){
var inst_49778 = (state_49829[(2)]);
var inst_49779 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49780 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49779);
var state_49829__$1 = (function (){var statearr_49839 = state_49829;
(statearr_49839[(7)] = inst_49778);

return statearr_49839;
})();
var statearr_49840_49886 = state_49829__$1;
(statearr_49840_49886[(2)] = inst_49780);

(statearr_49840_49886[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (31))){
var inst_49808 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49829__$1 = state_49829;
if(cljs.core.truth_(inst_49808)){
var statearr_49841_49887 = state_49829__$1;
(statearr_49841_49887[(1)] = (34));

} else {
var statearr_49842_49888 = state_49829__$1;
(statearr_49842_49888[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (32))){
var inst_49817 = (state_49829[(2)]);
var state_49829__$1 = state_49829;
var statearr_49843_49889 = state_49829__$1;
(statearr_49843_49889[(2)] = inst_49817);

(statearr_49843_49889[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (33))){
var inst_49804 = (state_49829[(2)]);
var inst_49805 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49806 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49805);
var state_49829__$1 = (function (){var statearr_49844 = state_49829;
(statearr_49844[(8)] = inst_49804);

return statearr_49844;
})();
var statearr_49845_49890 = state_49829__$1;
(statearr_49845_49890[(2)] = inst_49806);

(statearr_49845_49890[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (13))){
var inst_49763 = figwheel.client.heads_up.clear.call(null);
var state_49829__$1 = state_49829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49829__$1,(16),inst_49763);
} else {
if((state_val_49830 === (22))){
var inst_49784 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49785 = figwheel.client.heads_up.append_warning_message.call(null,inst_49784);
var state_49829__$1 = state_49829;
var statearr_49846_49891 = state_49829__$1;
(statearr_49846_49891[(2)] = inst_49785);

(statearr_49846_49891[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (36))){
var inst_49815 = (state_49829[(2)]);
var state_49829__$1 = state_49829;
var statearr_49847_49892 = state_49829__$1;
(statearr_49847_49892[(2)] = inst_49815);

(statearr_49847_49892[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (29))){
var inst_49795 = (state_49829[(2)]);
var inst_49796 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49797 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49796);
var state_49829__$1 = (function (){var statearr_49848 = state_49829;
(statearr_49848[(9)] = inst_49795);

return statearr_49848;
})();
var statearr_49849_49893 = state_49829__$1;
(statearr_49849_49893[(2)] = inst_49797);

(statearr_49849_49893[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (6))){
var inst_49744 = (state_49829[(10)]);
var state_49829__$1 = state_49829;
var statearr_49850_49894 = state_49829__$1;
(statearr_49850_49894[(2)] = inst_49744);

(statearr_49850_49894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (28))){
var inst_49791 = (state_49829[(2)]);
var inst_49792 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49793 = figwheel.client.heads_up.display_warning.call(null,inst_49792);
var state_49829__$1 = (function (){var statearr_49851 = state_49829;
(statearr_49851[(11)] = inst_49791);

return statearr_49851;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49829__$1,(29),inst_49793);
} else {
if((state_val_49830 === (25))){
var inst_49789 = figwheel.client.heads_up.clear.call(null);
var state_49829__$1 = state_49829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49829__$1,(28),inst_49789);
} else {
if((state_val_49830 === (34))){
var inst_49810 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49829__$1 = state_49829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49829__$1,(37),inst_49810);
} else {
if((state_val_49830 === (17))){
var inst_49769 = (state_49829[(2)]);
var inst_49770 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49771 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49770);
var state_49829__$1 = (function (){var statearr_49852 = state_49829;
(statearr_49852[(12)] = inst_49769);

return statearr_49852;
})();
var statearr_49853_49895 = state_49829__$1;
(statearr_49853_49895[(2)] = inst_49771);

(statearr_49853_49895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (3))){
var inst_49761 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49829__$1 = state_49829;
if(cljs.core.truth_(inst_49761)){
var statearr_49854_49896 = state_49829__$1;
(statearr_49854_49896[(1)] = (13));

} else {
var statearr_49855_49897 = state_49829__$1;
(statearr_49855_49897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (12))){
var inst_49757 = (state_49829[(2)]);
var state_49829__$1 = state_49829;
var statearr_49856_49898 = state_49829__$1;
(statearr_49856_49898[(2)] = inst_49757);

(statearr_49856_49898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (2))){
var inst_49744 = (state_49829[(10)]);
var inst_49744__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49829__$1 = (function (){var statearr_49857 = state_49829;
(statearr_49857[(10)] = inst_49744__$1);

return statearr_49857;
})();
if(cljs.core.truth_(inst_49744__$1)){
var statearr_49858_49899 = state_49829__$1;
(statearr_49858_49899[(1)] = (5));

} else {
var statearr_49859_49900 = state_49829__$1;
(statearr_49859_49900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (23))){
var inst_49787 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49829__$1 = state_49829;
if(cljs.core.truth_(inst_49787)){
var statearr_49860_49901 = state_49829__$1;
(statearr_49860_49901[(1)] = (25));

} else {
var statearr_49861_49902 = state_49829__$1;
(statearr_49861_49902[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (35))){
var state_49829__$1 = state_49829;
var statearr_49862_49903 = state_49829__$1;
(statearr_49862_49903[(2)] = null);

(statearr_49862_49903[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (19))){
var inst_49782 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49829__$1 = state_49829;
if(cljs.core.truth_(inst_49782)){
var statearr_49863_49904 = state_49829__$1;
(statearr_49863_49904[(1)] = (22));

} else {
var statearr_49864_49905 = state_49829__$1;
(statearr_49864_49905[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (11))){
var inst_49753 = (state_49829[(2)]);
var state_49829__$1 = state_49829;
var statearr_49865_49906 = state_49829__$1;
(statearr_49865_49906[(2)] = inst_49753);

(statearr_49865_49906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (9))){
var inst_49755 = figwheel.client.heads_up.clear.call(null);
var state_49829__$1 = state_49829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49829__$1,(12),inst_49755);
} else {
if((state_val_49830 === (5))){
var inst_49746 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49829__$1 = state_49829;
var statearr_49866_49907 = state_49829__$1;
(statearr_49866_49907[(2)] = inst_49746);

(statearr_49866_49907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (14))){
var inst_49773 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49829__$1 = state_49829;
if(cljs.core.truth_(inst_49773)){
var statearr_49867_49908 = state_49829__$1;
(statearr_49867_49908[(1)] = (18));

} else {
var statearr_49868_49909 = state_49829__$1;
(statearr_49868_49909[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (26))){
var inst_49799 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49829__$1 = state_49829;
if(cljs.core.truth_(inst_49799)){
var statearr_49869_49910 = state_49829__$1;
(statearr_49869_49910[(1)] = (30));

} else {
var statearr_49870_49911 = state_49829__$1;
(statearr_49870_49911[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (16))){
var inst_49765 = (state_49829[(2)]);
var inst_49766 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49767 = figwheel.client.heads_up.display_exception.call(null,inst_49766);
var state_49829__$1 = (function (){var statearr_49871 = state_49829;
(statearr_49871[(13)] = inst_49765);

return statearr_49871;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49829__$1,(17),inst_49767);
} else {
if((state_val_49830 === (30))){
var inst_49801 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49802 = figwheel.client.heads_up.display_warning.call(null,inst_49801);
var state_49829__$1 = state_49829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49829__$1,(33),inst_49802);
} else {
if((state_val_49830 === (10))){
var inst_49759 = (state_49829[(2)]);
var state_49829__$1 = state_49829;
var statearr_49872_49912 = state_49829__$1;
(statearr_49872_49912[(2)] = inst_49759);

(statearr_49872_49912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (18))){
var inst_49775 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49776 = figwheel.client.heads_up.display_exception.call(null,inst_49775);
var state_49829__$1 = state_49829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49829__$1,(21),inst_49776);
} else {
if((state_val_49830 === (37))){
var inst_49812 = (state_49829[(2)]);
var state_49829__$1 = state_49829;
var statearr_49873_49913 = state_49829__$1;
(statearr_49873_49913[(2)] = inst_49812);

(statearr_49873_49913[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49830 === (8))){
var inst_49751 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49829__$1 = state_49829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49829__$1,(11),inst_49751);
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
});})(c__46752__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__46662__auto__,c__46752__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46663__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46663__auto____0 = (function (){
var statearr_49874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49874[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46663__auto__);

(statearr_49874[(1)] = (1));

return statearr_49874;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46663__auto____1 = (function (state_49829){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_49829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e49875){if((e49875 instanceof Object)){
var ex__46666__auto__ = e49875;
var statearr_49876_49914 = state_49829;
(statearr_49876_49914[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49915 = state_49829;
state_49829 = G__49915;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46663__auto__ = function(state_49829){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46663__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46663__auto____1.call(this,state_49829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46663__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46663__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto__,msg_hist,msg_names,msg))
})();
var state__46754__auto__ = (function (){var statearr_49877 = f__46753__auto__.call(null);
(statearr_49877[(6)] = c__46752__auto__);

return statearr_49877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto__,msg_hist,msg_names,msg))
);

return c__46752__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__46752__auto___49944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___49944,ch){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___49944,ch){
return (function (state_49930){
var state_val_49931 = (state_49930[(1)]);
if((state_val_49931 === (1))){
var state_49930__$1 = state_49930;
var statearr_49932_49945 = state_49930__$1;
(statearr_49932_49945[(2)] = null);

(statearr_49932_49945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49931 === (2))){
var state_49930__$1 = state_49930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49930__$1,(4),ch);
} else {
if((state_val_49931 === (3))){
var inst_49928 = (state_49930[(2)]);
var state_49930__$1 = state_49930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49930__$1,inst_49928);
} else {
if((state_val_49931 === (4))){
var inst_49918 = (state_49930[(7)]);
var inst_49918__$1 = (state_49930[(2)]);
var state_49930__$1 = (function (){var statearr_49933 = state_49930;
(statearr_49933[(7)] = inst_49918__$1);

return statearr_49933;
})();
if(cljs.core.truth_(inst_49918__$1)){
var statearr_49934_49946 = state_49930__$1;
(statearr_49934_49946[(1)] = (5));

} else {
var statearr_49935_49947 = state_49930__$1;
(statearr_49935_49947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49931 === (5))){
var inst_49918 = (state_49930[(7)]);
var inst_49920 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49918);
var state_49930__$1 = state_49930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49930__$1,(8),inst_49920);
} else {
if((state_val_49931 === (6))){
var state_49930__$1 = state_49930;
var statearr_49936_49948 = state_49930__$1;
(statearr_49936_49948[(2)] = null);

(statearr_49936_49948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49931 === (7))){
var inst_49926 = (state_49930[(2)]);
var state_49930__$1 = state_49930;
var statearr_49937_49949 = state_49930__$1;
(statearr_49937_49949[(2)] = inst_49926);

(statearr_49937_49949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49931 === (8))){
var inst_49922 = (state_49930[(2)]);
var state_49930__$1 = (function (){var statearr_49938 = state_49930;
(statearr_49938[(8)] = inst_49922);

return statearr_49938;
})();
var statearr_49939_49950 = state_49930__$1;
(statearr_49939_49950[(2)] = null);

(statearr_49939_49950[(1)] = (2));


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
});})(c__46752__auto___49944,ch))
;
return ((function (switch__46662__auto__,c__46752__auto___49944,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__46663__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__46663__auto____0 = (function (){
var statearr_49940 = [null,null,null,null,null,null,null,null,null];
(statearr_49940[(0)] = figwheel$client$heads_up_plugin_$_state_machine__46663__auto__);

(statearr_49940[(1)] = (1));

return statearr_49940;
});
var figwheel$client$heads_up_plugin_$_state_machine__46663__auto____1 = (function (state_49930){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_49930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e49941){if((e49941 instanceof Object)){
var ex__46666__auto__ = e49941;
var statearr_49942_49951 = state_49930;
(statearr_49942_49951[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49952 = state_49930;
state_49930 = G__49952;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__46663__auto__ = function(state_49930){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__46663__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__46663__auto____1.call(this,state_49930);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__46663__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__46663__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___49944,ch))
})();
var state__46754__auto__ = (function (){var statearr_49943 = f__46753__auto__.call(null);
(statearr_49943[(6)] = c__46752__auto___49944);

return statearr_49943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___49944,ch))
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
var c__46752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto__){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto__){
return (function (state_49958){
var state_val_49959 = (state_49958[(1)]);
if((state_val_49959 === (1))){
var inst_49953 = cljs.core.async.timeout.call(null,(3000));
var state_49958__$1 = state_49958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49958__$1,(2),inst_49953);
} else {
if((state_val_49959 === (2))){
var inst_49955 = (state_49958[(2)]);
var inst_49956 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49958__$1 = (function (){var statearr_49960 = state_49958;
(statearr_49960[(7)] = inst_49955);

return statearr_49960;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49958__$1,inst_49956);
} else {
return null;
}
}
});})(c__46752__auto__))
;
return ((function (switch__46662__auto__,c__46752__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__46663__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__46663__auto____0 = (function (){
var statearr_49961 = [null,null,null,null,null,null,null,null];
(statearr_49961[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__46663__auto__);

(statearr_49961[(1)] = (1));

return statearr_49961;
});
var figwheel$client$enforce_project_plugin_$_state_machine__46663__auto____1 = (function (state_49958){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_49958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e49962){if((e49962 instanceof Object)){
var ex__46666__auto__ = e49962;
var statearr_49963_49965 = state_49958;
(statearr_49963_49965[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49966 = state_49958;
state_49958 = G__49966;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__46663__auto__ = function(state_49958){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__46663__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__46663__auto____1.call(this,state_49958);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__46663__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__46663__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto__))
})();
var state__46754__auto__ = (function (){var statearr_49964 = f__46753__auto__.call(null);
(statearr_49964[(6)] = c__46752__auto__);

return statearr_49964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto__))
);

return c__46752__auto__;
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
var c__46752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto__,figwheel_version,temp__5457__auto__){
return (function (state_49973){
var state_val_49974 = (state_49973[(1)]);
if((state_val_49974 === (1))){
var inst_49967 = cljs.core.async.timeout.call(null,(2000));
var state_49973__$1 = state_49973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49973__$1,(2),inst_49967);
} else {
if((state_val_49974 === (2))){
var inst_49969 = (state_49973[(2)]);
var inst_49970 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_49971 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49970);
var state_49973__$1 = (function (){var statearr_49975 = state_49973;
(statearr_49975[(7)] = inst_49969);

return statearr_49975;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49973__$1,inst_49971);
} else {
return null;
}
}
});})(c__46752__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__46662__auto__,c__46752__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46663__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46663__auto____0 = (function (){
var statearr_49976 = [null,null,null,null,null,null,null,null];
(statearr_49976[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46663__auto__);

(statearr_49976[(1)] = (1));

return statearr_49976;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46663__auto____1 = (function (state_49973){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_49973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e49977){if((e49977 instanceof Object)){
var ex__46666__auto__ = e49977;
var statearr_49978_49980 = state_49973;
(statearr_49978_49980[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49981 = state_49973;
state_49973 = G__49981;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46663__auto__ = function(state_49973){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46663__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46663__auto____1.call(this,state_49973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46663__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46663__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto__,figwheel_version,temp__5457__auto__))
})();
var state__46754__auto__ = (function (){var statearr_49979 = f__46753__auto__.call(null);
(statearr_49979[(6)] = c__46752__auto__);

return statearr_49979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto__,figwheel_version,temp__5457__auto__))
);

return c__46752__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49982){
var map__49983 = p__49982;
var map__49983__$1 = ((((!((map__49983 == null)))?((((map__49983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49983):map__49983);
var file = cljs.core.get.call(null,map__49983__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49983__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49983__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49985 = "";
var G__49985__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49985),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__49985);
var G__49985__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49985__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__49985__$1);
if(cljs.core.truth_((function (){var and__30511__auto__ = line;
if(cljs.core.truth_(and__30511__auto__)){
return column;
} else {
return and__30511__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49985__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__49985__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49986){
var map__49987 = p__49986;
var map__49987__$1 = ((((!((map__49987 == null)))?((((map__49987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49987):map__49987);
var ed = map__49987__$1;
var formatted_exception = cljs.core.get.call(null,map__49987__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49987__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49987__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49989_49993 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49990_49994 = null;
var count__49991_49995 = (0);
var i__49992_49996 = (0);
while(true){
if((i__49992_49996 < count__49991_49995)){
var msg_49997 = cljs.core._nth.call(null,chunk__49990_49994,i__49992_49996);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49997);

var G__49998 = seq__49989_49993;
var G__49999 = chunk__49990_49994;
var G__50000 = count__49991_49995;
var G__50001 = (i__49992_49996 + (1));
seq__49989_49993 = G__49998;
chunk__49990_49994 = G__49999;
count__49991_49995 = G__50000;
i__49992_49996 = G__50001;
continue;
} else {
var temp__5457__auto___50002 = cljs.core.seq.call(null,seq__49989_49993);
if(temp__5457__auto___50002){
var seq__49989_50003__$1 = temp__5457__auto___50002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49989_50003__$1)){
var c__31454__auto___50004 = cljs.core.chunk_first.call(null,seq__49989_50003__$1);
var G__50005 = cljs.core.chunk_rest.call(null,seq__49989_50003__$1);
var G__50006 = c__31454__auto___50004;
var G__50007 = cljs.core.count.call(null,c__31454__auto___50004);
var G__50008 = (0);
seq__49989_49993 = G__50005;
chunk__49990_49994 = G__50006;
count__49991_49995 = G__50007;
i__49992_49996 = G__50008;
continue;
} else {
var msg_50009 = cljs.core.first.call(null,seq__49989_50003__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50009);

var G__50010 = cljs.core.next.call(null,seq__49989_50003__$1);
var G__50011 = null;
var G__50012 = (0);
var G__50013 = (0);
seq__49989_49993 = G__50010;
chunk__49990_49994 = G__50011;
count__49991_49995 = G__50012;
i__49992_49996 = G__50013;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50014){
var map__50015 = p__50014;
var map__50015__$1 = ((((!((map__50015 == null)))?((((map__50015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50015):map__50015);
var w = map__50015__$1;
var message = cljs.core.get.call(null,map__50015__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__30511__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30511__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30511__auto__;
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
var seq__50017 = cljs.core.seq.call(null,plugins);
var chunk__50018 = null;
var count__50019 = (0);
var i__50020 = (0);
while(true){
if((i__50020 < count__50019)){
var vec__50021 = cljs.core._nth.call(null,chunk__50018,i__50020);
var k = cljs.core.nth.call(null,vec__50021,(0),null);
var plugin = cljs.core.nth.call(null,vec__50021,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50027 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50017,chunk__50018,count__50019,i__50020,pl_50027,vec__50021,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50027.call(null,msg_hist);
});})(seq__50017,chunk__50018,count__50019,i__50020,pl_50027,vec__50021,k,plugin))
);
} else {
}

var G__50028 = seq__50017;
var G__50029 = chunk__50018;
var G__50030 = count__50019;
var G__50031 = (i__50020 + (1));
seq__50017 = G__50028;
chunk__50018 = G__50029;
count__50019 = G__50030;
i__50020 = G__50031;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50017);
if(temp__5457__auto__){
var seq__50017__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50017__$1)){
var c__31454__auto__ = cljs.core.chunk_first.call(null,seq__50017__$1);
var G__50032 = cljs.core.chunk_rest.call(null,seq__50017__$1);
var G__50033 = c__31454__auto__;
var G__50034 = cljs.core.count.call(null,c__31454__auto__);
var G__50035 = (0);
seq__50017 = G__50032;
chunk__50018 = G__50033;
count__50019 = G__50034;
i__50020 = G__50035;
continue;
} else {
var vec__50024 = cljs.core.first.call(null,seq__50017__$1);
var k = cljs.core.nth.call(null,vec__50024,(0),null);
var plugin = cljs.core.nth.call(null,vec__50024,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50036 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50017,chunk__50018,count__50019,i__50020,pl_50036,vec__50024,k,plugin,seq__50017__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50036.call(null,msg_hist);
});})(seq__50017,chunk__50018,count__50019,i__50020,pl_50036,vec__50024,k,plugin,seq__50017__$1,temp__5457__auto__))
);
} else {
}

var G__50037 = cljs.core.next.call(null,seq__50017__$1);
var G__50038 = null;
var G__50039 = (0);
var G__50040 = (0);
seq__50017 = G__50037;
chunk__50018 = G__50038;
count__50019 = G__50039;
i__50020 = G__50040;
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
var G__50042 = arguments.length;
switch (G__50042) {
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

var seq__50043_50048 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50044_50049 = null;
var count__50045_50050 = (0);
var i__50046_50051 = (0);
while(true){
if((i__50046_50051 < count__50045_50050)){
var msg_50052 = cljs.core._nth.call(null,chunk__50044_50049,i__50046_50051);
figwheel.client.socket.handle_incoming_message.call(null,msg_50052);

var G__50053 = seq__50043_50048;
var G__50054 = chunk__50044_50049;
var G__50055 = count__50045_50050;
var G__50056 = (i__50046_50051 + (1));
seq__50043_50048 = G__50053;
chunk__50044_50049 = G__50054;
count__50045_50050 = G__50055;
i__50046_50051 = G__50056;
continue;
} else {
var temp__5457__auto___50057 = cljs.core.seq.call(null,seq__50043_50048);
if(temp__5457__auto___50057){
var seq__50043_50058__$1 = temp__5457__auto___50057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50043_50058__$1)){
var c__31454__auto___50059 = cljs.core.chunk_first.call(null,seq__50043_50058__$1);
var G__50060 = cljs.core.chunk_rest.call(null,seq__50043_50058__$1);
var G__50061 = c__31454__auto___50059;
var G__50062 = cljs.core.count.call(null,c__31454__auto___50059);
var G__50063 = (0);
seq__50043_50048 = G__50060;
chunk__50044_50049 = G__50061;
count__50045_50050 = G__50062;
i__50046_50051 = G__50063;
continue;
} else {
var msg_50064 = cljs.core.first.call(null,seq__50043_50058__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50064);

var G__50065 = cljs.core.next.call(null,seq__50043_50058__$1);
var G__50066 = null;
var G__50067 = (0);
var G__50068 = (0);
seq__50043_50048 = G__50065;
chunk__50044_50049 = G__50066;
count__50045_50050 = G__50067;
i__50046_50051 = G__50068;
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
var len__31802__auto___50073 = arguments.length;
var i__31803__auto___50074 = (0);
while(true){
if((i__31803__auto___50074 < len__31802__auto___50073)){
args__31809__auto__.push((arguments[i__31803__auto___50074]));

var G__50075 = (i__31803__auto___50074 + (1));
i__31803__auto___50074 = G__50075;
continue;
} else {
}
break;
}

var argseq__31810__auto__ = ((((0) < args__31809__auto__.length))?(new cljs.core.IndexedSeq(args__31809__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31810__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50070){
var map__50071 = p__50070;
var map__50071__$1 = ((((!((map__50071 == null)))?((((map__50071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50071):map__50071);
var opts = map__50071__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50069){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50069));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50076){if((e50076 instanceof Error)){
var e = e50076;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50076;

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
return (function (p__50077){
var map__50078 = p__50077;
var map__50078__$1 = ((((!((map__50078 == null)))?((((map__50078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50078):map__50078);
var msg_name = cljs.core.get.call(null,map__50078__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510609302434
