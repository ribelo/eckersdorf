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
}catch (e49597){if((e49597 instanceof Error)){
var e = e49597;
return "Error: Unable to stringify";
} else {
throw e49597;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__49600 = arguments.length;
switch (G__49600) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__49598_SHARP_){
if(typeof p1__49598_SHARP_ === 'string'){
return p1__49598_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__49598_SHARP_);
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
var args__31808__auto__ = [];
var len__31801__auto___49603 = arguments.length;
var i__31802__auto___49604 = (0);
while(true){
if((i__31802__auto___49604 < len__31801__auto___49603)){
args__31808__auto__.push((arguments[i__31802__auto___49604]));

var G__49605 = (i__31802__auto___49604 + (1));
i__31802__auto___49604 = G__49605;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq49602){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49602));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31808__auto__ = [];
var len__31801__auto___49607 = arguments.length;
var i__31802__auto___49608 = (0);
while(true){
if((i__31802__auto___49608 < len__31801__auto___49607)){
args__31808__auto__.push((arguments[i__31802__auto___49608]));

var G__49609 = (i__31802__auto___49608 + (1));
i__31802__auto___49608 = G__49609;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq49606){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49606));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__49610){
var map__49611 = p__49610;
var map__49611__$1 = ((((!((map__49611 == null)))?((((map__49611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49611):map__49611);
var message = cljs.core.get.call(null,map__49611__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__49611__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__46751__auto___49690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___49690,ch){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___49690,ch){
return (function (state_49662){
var state_val_49663 = (state_49662[(1)]);
if((state_val_49663 === (7))){
var inst_49658 = (state_49662[(2)]);
var state_49662__$1 = state_49662;
var statearr_49664_49691 = state_49662__$1;
(statearr_49664_49691[(2)] = inst_49658);

(statearr_49664_49691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49663 === (1))){
var state_49662__$1 = state_49662;
var statearr_49665_49692 = state_49662__$1;
(statearr_49665_49692[(2)] = null);

(statearr_49665_49692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49663 === (4))){
var inst_49615 = (state_49662[(7)]);
var inst_49615__$1 = (state_49662[(2)]);
var state_49662__$1 = (function (){var statearr_49666 = state_49662;
(statearr_49666[(7)] = inst_49615__$1);

return statearr_49666;
})();
if(cljs.core.truth_(inst_49615__$1)){
var statearr_49667_49693 = state_49662__$1;
(statearr_49667_49693[(1)] = (5));

} else {
var statearr_49668_49694 = state_49662__$1;
(statearr_49668_49694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49663 === (15))){
var inst_49622 = (state_49662[(8)]);
var inst_49637 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49622);
var inst_49638 = cljs.core.first.call(null,inst_49637);
var inst_49639 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_49638);
var inst_49640 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49639)].join('');
var inst_49641 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_49640);
var state_49662__$1 = state_49662;
var statearr_49669_49695 = state_49662__$1;
(statearr_49669_49695[(2)] = inst_49641);

(statearr_49669_49695[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49663 === (13))){
var inst_49646 = (state_49662[(2)]);
var state_49662__$1 = state_49662;
var statearr_49670_49696 = state_49662__$1;
(statearr_49670_49696[(2)] = inst_49646);

(statearr_49670_49696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49663 === (6))){
var state_49662__$1 = state_49662;
var statearr_49671_49697 = state_49662__$1;
(statearr_49671_49697[(2)] = null);

(statearr_49671_49697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49663 === (17))){
var inst_49644 = (state_49662[(2)]);
var state_49662__$1 = state_49662;
var statearr_49672_49698 = state_49662__$1;
(statearr_49672_49698[(2)] = inst_49644);

(statearr_49672_49698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49663 === (3))){
var inst_49660 = (state_49662[(2)]);
var state_49662__$1 = state_49662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49662__$1,inst_49660);
} else {
if((state_val_49663 === (12))){
var inst_49621 = (state_49662[(9)]);
var inst_49635 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_49621,opts);
var state_49662__$1 = state_49662;
if(cljs.core.truth_(inst_49635)){
var statearr_49673_49699 = state_49662__$1;
(statearr_49673_49699[(1)] = (15));

} else {
var statearr_49674_49700 = state_49662__$1;
(statearr_49674_49700[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49663 === (2))){
var state_49662__$1 = state_49662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49662__$1,(4),ch);
} else {
if((state_val_49663 === (11))){
var inst_49622 = (state_49662[(8)]);
var inst_49627 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49628 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_49622);
var inst_49629 = cljs.core.async.timeout.call(null,(1000));
var inst_49630 = [inst_49628,inst_49629];
var inst_49631 = (new cljs.core.PersistentVector(null,2,(5),inst_49627,inst_49630,null));
var state_49662__$1 = state_49662;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49662__$1,(14),inst_49631);
} else {
if((state_val_49663 === (9))){
var inst_49622 = (state_49662[(8)]);
var inst_49648 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_49649 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49622);
var inst_49650 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49649);
var inst_49651 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49650)].join('');
var inst_49652 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_49651);
var state_49662__$1 = (function (){var statearr_49675 = state_49662;
(statearr_49675[(10)] = inst_49648);

return statearr_49675;
})();
var statearr_49676_49701 = state_49662__$1;
(statearr_49676_49701[(2)] = inst_49652);

(statearr_49676_49701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49663 === (5))){
var inst_49615 = (state_49662[(7)]);
var inst_49617 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_49618 = (new cljs.core.PersistentArrayMap(null,2,inst_49617,null));
var inst_49619 = (new cljs.core.PersistentHashSet(null,inst_49618,null));
var inst_49620 = figwheel.client.focus_msgs.call(null,inst_49619,inst_49615);
var inst_49621 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_49620);
var inst_49622 = cljs.core.first.call(null,inst_49620);
var inst_49623 = figwheel.client.autoload_QMARK_.call(null);
var state_49662__$1 = (function (){var statearr_49677 = state_49662;
(statearr_49677[(9)] = inst_49621);

(statearr_49677[(8)] = inst_49622);

return statearr_49677;
})();
if(cljs.core.truth_(inst_49623)){
var statearr_49678_49702 = state_49662__$1;
(statearr_49678_49702[(1)] = (8));

} else {
var statearr_49679_49703 = state_49662__$1;
(statearr_49679_49703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49663 === (14))){
var inst_49633 = (state_49662[(2)]);
var state_49662__$1 = state_49662;
var statearr_49680_49704 = state_49662__$1;
(statearr_49680_49704[(2)] = inst_49633);

(statearr_49680_49704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49663 === (16))){
var state_49662__$1 = state_49662;
var statearr_49681_49705 = state_49662__$1;
(statearr_49681_49705[(2)] = null);

(statearr_49681_49705[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49663 === (10))){
var inst_49654 = (state_49662[(2)]);
var state_49662__$1 = (function (){var statearr_49682 = state_49662;
(statearr_49682[(11)] = inst_49654);

return statearr_49682;
})();
var statearr_49683_49706 = state_49662__$1;
(statearr_49683_49706[(2)] = null);

(statearr_49683_49706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49663 === (8))){
var inst_49621 = (state_49662[(9)]);
var inst_49625 = figwheel.client.reload_file_state_QMARK_.call(null,inst_49621,opts);
var state_49662__$1 = state_49662;
if(cljs.core.truth_(inst_49625)){
var statearr_49684_49707 = state_49662__$1;
(statearr_49684_49707[(1)] = (11));

} else {
var statearr_49685_49708 = state_49662__$1;
(statearr_49685_49708[(1)] = (12));

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
});})(c__46751__auto___49690,ch))
;
return ((function (switch__46661__auto__,c__46751__auto___49690,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__46662__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__46662__auto____0 = (function (){
var statearr_49686 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49686[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__46662__auto__);

(statearr_49686[(1)] = (1));

return statearr_49686;
});
var figwheel$client$file_reloader_plugin_$_state_machine__46662__auto____1 = (function (state_49662){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_49662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e49687){if((e49687 instanceof Object)){
var ex__46665__auto__ = e49687;
var statearr_49688_49709 = state_49662;
(statearr_49688_49709[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49710 = state_49662;
state_49662 = G__49710;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__46662__auto__ = function(state_49662){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__46662__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__46662__auto____1.call(this,state_49662);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__46662__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__46662__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___49690,ch))
})();
var state__46753__auto__ = (function (){var statearr_49689 = f__46752__auto__.call(null);
(statearr_49689[(6)] = c__46751__auto___49690);

return statearr_49689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___49690,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__49711_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__49711_SHARP_));
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
var base_path_49713 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_49713){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e49712){if((e49712 instanceof Error)){
var e = e49712;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_49713], null));
} else {
var e = e49712;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_49713))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__49714){
var map__49715 = p__49714;
var map__49715__$1 = ((((!((map__49715 == null)))?((((map__49715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49715):map__49715);
var opts = map__49715__$1;
var build_id = cljs.core.get.call(null,map__49715__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__49715,map__49715__$1,opts,build_id){
return (function (p__49717){
var vec__49718 = p__49717;
var seq__49719 = cljs.core.seq.call(null,vec__49718);
var first__49720 = cljs.core.first.call(null,seq__49719);
var seq__49719__$1 = cljs.core.next.call(null,seq__49719);
var map__49721 = first__49720;
var map__49721__$1 = ((((!((map__49721 == null)))?((((map__49721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49721):map__49721);
var msg = map__49721__$1;
var msg_name = cljs.core.get.call(null,map__49721__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49719__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49718,seq__49719,first__49720,seq__49719__$1,map__49721,map__49721__$1,msg,msg_name,_,map__49715,map__49715__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49718,seq__49719,first__49720,seq__49719__$1,map__49721,map__49721__$1,msg,msg_name,_,map__49715,map__49715__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__49715,map__49715__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49723){
var vec__49724 = p__49723;
var seq__49725 = cljs.core.seq.call(null,vec__49724);
var first__49726 = cljs.core.first.call(null,seq__49725);
var seq__49725__$1 = cljs.core.next.call(null,seq__49725);
var map__49727 = first__49726;
var map__49727__$1 = ((((!((map__49727 == null)))?((((map__49727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49727):map__49727);
var msg = map__49727__$1;
var msg_name = cljs.core.get.call(null,map__49727__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49725__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49729){
var map__49730 = p__49729;
var map__49730__$1 = ((((!((map__49730 == null)))?((((map__49730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49730):map__49730);
var on_compile_warning = cljs.core.get.call(null,map__49730__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49730__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49730,map__49730__$1,on_compile_warning,on_compile_fail){
return (function (p__49732){
var vec__49733 = p__49732;
var seq__49734 = cljs.core.seq.call(null,vec__49733);
var first__49735 = cljs.core.first.call(null,seq__49734);
var seq__49734__$1 = cljs.core.next.call(null,seq__49734);
var map__49736 = first__49735;
var map__49736__$1 = ((((!((map__49736 == null)))?((((map__49736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49736):map__49736);
var msg = map__49736__$1;
var msg_name = cljs.core.get.call(null,map__49736__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49734__$1;
var pred__49738 = cljs.core._EQ_;
var expr__49739 = msg_name;
if(cljs.core.truth_(pred__49738.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49739))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49738.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49739))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49730,map__49730__$1,on_compile_warning,on_compile_fail))
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
var c__46751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto__,msg_hist,msg_names,msg){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto__,msg_hist,msg_names,msg){
return (function (state_49828){
var state_val_49829 = (state_49828[(1)]);
if((state_val_49829 === (7))){
var inst_49748 = (state_49828[(2)]);
var state_49828__$1 = state_49828;
if(cljs.core.truth_(inst_49748)){
var statearr_49830_49877 = state_49828__$1;
(statearr_49830_49877[(1)] = (8));

} else {
var statearr_49831_49878 = state_49828__$1;
(statearr_49831_49878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (20))){
var inst_49822 = (state_49828[(2)]);
var state_49828__$1 = state_49828;
var statearr_49832_49879 = state_49828__$1;
(statearr_49832_49879[(2)] = inst_49822);

(statearr_49832_49879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (27))){
var inst_49818 = (state_49828[(2)]);
var state_49828__$1 = state_49828;
var statearr_49833_49880 = state_49828__$1;
(statearr_49833_49880[(2)] = inst_49818);

(statearr_49833_49880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (1))){
var inst_49741 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49828__$1 = state_49828;
if(cljs.core.truth_(inst_49741)){
var statearr_49834_49881 = state_49828__$1;
(statearr_49834_49881[(1)] = (2));

} else {
var statearr_49835_49882 = state_49828__$1;
(statearr_49835_49882[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (24))){
var inst_49820 = (state_49828[(2)]);
var state_49828__$1 = state_49828;
var statearr_49836_49883 = state_49828__$1;
(statearr_49836_49883[(2)] = inst_49820);

(statearr_49836_49883[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (4))){
var inst_49826 = (state_49828[(2)]);
var state_49828__$1 = state_49828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49828__$1,inst_49826);
} else {
if((state_val_49829 === (15))){
var inst_49824 = (state_49828[(2)]);
var state_49828__$1 = state_49828;
var statearr_49837_49884 = state_49828__$1;
(statearr_49837_49884[(2)] = inst_49824);

(statearr_49837_49884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (21))){
var inst_49777 = (state_49828[(2)]);
var inst_49778 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49779 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49778);
var state_49828__$1 = (function (){var statearr_49838 = state_49828;
(statearr_49838[(7)] = inst_49777);

return statearr_49838;
})();
var statearr_49839_49885 = state_49828__$1;
(statearr_49839_49885[(2)] = inst_49779);

(statearr_49839_49885[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (31))){
var inst_49807 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49828__$1 = state_49828;
if(cljs.core.truth_(inst_49807)){
var statearr_49840_49886 = state_49828__$1;
(statearr_49840_49886[(1)] = (34));

} else {
var statearr_49841_49887 = state_49828__$1;
(statearr_49841_49887[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (32))){
var inst_49816 = (state_49828[(2)]);
var state_49828__$1 = state_49828;
var statearr_49842_49888 = state_49828__$1;
(statearr_49842_49888[(2)] = inst_49816);

(statearr_49842_49888[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (33))){
var inst_49803 = (state_49828[(2)]);
var inst_49804 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49805 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49804);
var state_49828__$1 = (function (){var statearr_49843 = state_49828;
(statearr_49843[(8)] = inst_49803);

return statearr_49843;
})();
var statearr_49844_49889 = state_49828__$1;
(statearr_49844_49889[(2)] = inst_49805);

(statearr_49844_49889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (13))){
var inst_49762 = figwheel.client.heads_up.clear.call(null);
var state_49828__$1 = state_49828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49828__$1,(16),inst_49762);
} else {
if((state_val_49829 === (22))){
var inst_49783 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49784 = figwheel.client.heads_up.append_warning_message.call(null,inst_49783);
var state_49828__$1 = state_49828;
var statearr_49845_49890 = state_49828__$1;
(statearr_49845_49890[(2)] = inst_49784);

(statearr_49845_49890[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (36))){
var inst_49814 = (state_49828[(2)]);
var state_49828__$1 = state_49828;
var statearr_49846_49891 = state_49828__$1;
(statearr_49846_49891[(2)] = inst_49814);

(statearr_49846_49891[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (29))){
var inst_49794 = (state_49828[(2)]);
var inst_49795 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49796 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49795);
var state_49828__$1 = (function (){var statearr_49847 = state_49828;
(statearr_49847[(9)] = inst_49794);

return statearr_49847;
})();
var statearr_49848_49892 = state_49828__$1;
(statearr_49848_49892[(2)] = inst_49796);

(statearr_49848_49892[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (6))){
var inst_49743 = (state_49828[(10)]);
var state_49828__$1 = state_49828;
var statearr_49849_49893 = state_49828__$1;
(statearr_49849_49893[(2)] = inst_49743);

(statearr_49849_49893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (28))){
var inst_49790 = (state_49828[(2)]);
var inst_49791 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49792 = figwheel.client.heads_up.display_warning.call(null,inst_49791);
var state_49828__$1 = (function (){var statearr_49850 = state_49828;
(statearr_49850[(11)] = inst_49790);

return statearr_49850;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49828__$1,(29),inst_49792);
} else {
if((state_val_49829 === (25))){
var inst_49788 = figwheel.client.heads_up.clear.call(null);
var state_49828__$1 = state_49828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49828__$1,(28),inst_49788);
} else {
if((state_val_49829 === (34))){
var inst_49809 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49828__$1 = state_49828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49828__$1,(37),inst_49809);
} else {
if((state_val_49829 === (17))){
var inst_49768 = (state_49828[(2)]);
var inst_49769 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49770 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49769);
var state_49828__$1 = (function (){var statearr_49851 = state_49828;
(statearr_49851[(12)] = inst_49768);

return statearr_49851;
})();
var statearr_49852_49894 = state_49828__$1;
(statearr_49852_49894[(2)] = inst_49770);

(statearr_49852_49894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (3))){
var inst_49760 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49828__$1 = state_49828;
if(cljs.core.truth_(inst_49760)){
var statearr_49853_49895 = state_49828__$1;
(statearr_49853_49895[(1)] = (13));

} else {
var statearr_49854_49896 = state_49828__$1;
(statearr_49854_49896[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (12))){
var inst_49756 = (state_49828[(2)]);
var state_49828__$1 = state_49828;
var statearr_49855_49897 = state_49828__$1;
(statearr_49855_49897[(2)] = inst_49756);

(statearr_49855_49897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (2))){
var inst_49743 = (state_49828[(10)]);
var inst_49743__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49828__$1 = (function (){var statearr_49856 = state_49828;
(statearr_49856[(10)] = inst_49743__$1);

return statearr_49856;
})();
if(cljs.core.truth_(inst_49743__$1)){
var statearr_49857_49898 = state_49828__$1;
(statearr_49857_49898[(1)] = (5));

} else {
var statearr_49858_49899 = state_49828__$1;
(statearr_49858_49899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (23))){
var inst_49786 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49828__$1 = state_49828;
if(cljs.core.truth_(inst_49786)){
var statearr_49859_49900 = state_49828__$1;
(statearr_49859_49900[(1)] = (25));

} else {
var statearr_49860_49901 = state_49828__$1;
(statearr_49860_49901[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (35))){
var state_49828__$1 = state_49828;
var statearr_49861_49902 = state_49828__$1;
(statearr_49861_49902[(2)] = null);

(statearr_49861_49902[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (19))){
var inst_49781 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49828__$1 = state_49828;
if(cljs.core.truth_(inst_49781)){
var statearr_49862_49903 = state_49828__$1;
(statearr_49862_49903[(1)] = (22));

} else {
var statearr_49863_49904 = state_49828__$1;
(statearr_49863_49904[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (11))){
var inst_49752 = (state_49828[(2)]);
var state_49828__$1 = state_49828;
var statearr_49864_49905 = state_49828__$1;
(statearr_49864_49905[(2)] = inst_49752);

(statearr_49864_49905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (9))){
var inst_49754 = figwheel.client.heads_up.clear.call(null);
var state_49828__$1 = state_49828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49828__$1,(12),inst_49754);
} else {
if((state_val_49829 === (5))){
var inst_49745 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49828__$1 = state_49828;
var statearr_49865_49906 = state_49828__$1;
(statearr_49865_49906[(2)] = inst_49745);

(statearr_49865_49906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (14))){
var inst_49772 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49828__$1 = state_49828;
if(cljs.core.truth_(inst_49772)){
var statearr_49866_49907 = state_49828__$1;
(statearr_49866_49907[(1)] = (18));

} else {
var statearr_49867_49908 = state_49828__$1;
(statearr_49867_49908[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (26))){
var inst_49798 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49828__$1 = state_49828;
if(cljs.core.truth_(inst_49798)){
var statearr_49868_49909 = state_49828__$1;
(statearr_49868_49909[(1)] = (30));

} else {
var statearr_49869_49910 = state_49828__$1;
(statearr_49869_49910[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (16))){
var inst_49764 = (state_49828[(2)]);
var inst_49765 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49766 = figwheel.client.heads_up.display_exception.call(null,inst_49765);
var state_49828__$1 = (function (){var statearr_49870 = state_49828;
(statearr_49870[(13)] = inst_49764);

return statearr_49870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49828__$1,(17),inst_49766);
} else {
if((state_val_49829 === (30))){
var inst_49800 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49801 = figwheel.client.heads_up.display_warning.call(null,inst_49800);
var state_49828__$1 = state_49828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49828__$1,(33),inst_49801);
} else {
if((state_val_49829 === (10))){
var inst_49758 = (state_49828[(2)]);
var state_49828__$1 = state_49828;
var statearr_49871_49911 = state_49828__$1;
(statearr_49871_49911[(2)] = inst_49758);

(statearr_49871_49911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (18))){
var inst_49774 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49775 = figwheel.client.heads_up.display_exception.call(null,inst_49774);
var state_49828__$1 = state_49828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49828__$1,(21),inst_49775);
} else {
if((state_val_49829 === (37))){
var inst_49811 = (state_49828[(2)]);
var state_49828__$1 = state_49828;
var statearr_49872_49912 = state_49828__$1;
(statearr_49872_49912[(2)] = inst_49811);

(statearr_49872_49912[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49829 === (8))){
var inst_49750 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49828__$1 = state_49828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49828__$1,(11),inst_49750);
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
});})(c__46751__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__46661__auto__,c__46751__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46662__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46662__auto____0 = (function (){
var statearr_49873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49873[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46662__auto__);

(statearr_49873[(1)] = (1));

return statearr_49873;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46662__auto____1 = (function (state_49828){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_49828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e49874){if((e49874 instanceof Object)){
var ex__46665__auto__ = e49874;
var statearr_49875_49913 = state_49828;
(statearr_49875_49913[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49914 = state_49828;
state_49828 = G__49914;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46662__auto__ = function(state_49828){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46662__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46662__auto____1.call(this,state_49828);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46662__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46662__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto__,msg_hist,msg_names,msg))
})();
var state__46753__auto__ = (function (){var statearr_49876 = f__46752__auto__.call(null);
(statearr_49876[(6)] = c__46751__auto__);

return statearr_49876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto__,msg_hist,msg_names,msg))
);

return c__46751__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__46751__auto___49943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___49943,ch){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___49943,ch){
return (function (state_49929){
var state_val_49930 = (state_49929[(1)]);
if((state_val_49930 === (1))){
var state_49929__$1 = state_49929;
var statearr_49931_49944 = state_49929__$1;
(statearr_49931_49944[(2)] = null);

(statearr_49931_49944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49930 === (2))){
var state_49929__$1 = state_49929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49929__$1,(4),ch);
} else {
if((state_val_49930 === (3))){
var inst_49927 = (state_49929[(2)]);
var state_49929__$1 = state_49929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49929__$1,inst_49927);
} else {
if((state_val_49930 === (4))){
var inst_49917 = (state_49929[(7)]);
var inst_49917__$1 = (state_49929[(2)]);
var state_49929__$1 = (function (){var statearr_49932 = state_49929;
(statearr_49932[(7)] = inst_49917__$1);

return statearr_49932;
})();
if(cljs.core.truth_(inst_49917__$1)){
var statearr_49933_49945 = state_49929__$1;
(statearr_49933_49945[(1)] = (5));

} else {
var statearr_49934_49946 = state_49929__$1;
(statearr_49934_49946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49930 === (5))){
var inst_49917 = (state_49929[(7)]);
var inst_49919 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49917);
var state_49929__$1 = state_49929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49929__$1,(8),inst_49919);
} else {
if((state_val_49930 === (6))){
var state_49929__$1 = state_49929;
var statearr_49935_49947 = state_49929__$1;
(statearr_49935_49947[(2)] = null);

(statearr_49935_49947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49930 === (7))){
var inst_49925 = (state_49929[(2)]);
var state_49929__$1 = state_49929;
var statearr_49936_49948 = state_49929__$1;
(statearr_49936_49948[(2)] = inst_49925);

(statearr_49936_49948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49930 === (8))){
var inst_49921 = (state_49929[(2)]);
var state_49929__$1 = (function (){var statearr_49937 = state_49929;
(statearr_49937[(8)] = inst_49921);

return statearr_49937;
})();
var statearr_49938_49949 = state_49929__$1;
(statearr_49938_49949[(2)] = null);

(statearr_49938_49949[(1)] = (2));


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
});})(c__46751__auto___49943,ch))
;
return ((function (switch__46661__auto__,c__46751__auto___49943,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__46662__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__46662__auto____0 = (function (){
var statearr_49939 = [null,null,null,null,null,null,null,null,null];
(statearr_49939[(0)] = figwheel$client$heads_up_plugin_$_state_machine__46662__auto__);

(statearr_49939[(1)] = (1));

return statearr_49939;
});
var figwheel$client$heads_up_plugin_$_state_machine__46662__auto____1 = (function (state_49929){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_49929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e49940){if((e49940 instanceof Object)){
var ex__46665__auto__ = e49940;
var statearr_49941_49950 = state_49929;
(statearr_49941_49950[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49951 = state_49929;
state_49929 = G__49951;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__46662__auto__ = function(state_49929){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__46662__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__46662__auto____1.call(this,state_49929);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__46662__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__46662__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___49943,ch))
})();
var state__46753__auto__ = (function (){var statearr_49942 = f__46752__auto__.call(null);
(statearr_49942[(6)] = c__46751__auto___49943);

return statearr_49942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___49943,ch))
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
var c__46751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto__){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto__){
return (function (state_49957){
var state_val_49958 = (state_49957[(1)]);
if((state_val_49958 === (1))){
var inst_49952 = cljs.core.async.timeout.call(null,(3000));
var state_49957__$1 = state_49957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49957__$1,(2),inst_49952);
} else {
if((state_val_49958 === (2))){
var inst_49954 = (state_49957[(2)]);
var inst_49955 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49957__$1 = (function (){var statearr_49959 = state_49957;
(statearr_49959[(7)] = inst_49954);

return statearr_49959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49957__$1,inst_49955);
} else {
return null;
}
}
});})(c__46751__auto__))
;
return ((function (switch__46661__auto__,c__46751__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__46662__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__46662__auto____0 = (function (){
var statearr_49960 = [null,null,null,null,null,null,null,null];
(statearr_49960[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__46662__auto__);

(statearr_49960[(1)] = (1));

return statearr_49960;
});
var figwheel$client$enforce_project_plugin_$_state_machine__46662__auto____1 = (function (state_49957){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_49957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e49961){if((e49961 instanceof Object)){
var ex__46665__auto__ = e49961;
var statearr_49962_49964 = state_49957;
(statearr_49962_49964[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49965 = state_49957;
state_49957 = G__49965;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__46662__auto__ = function(state_49957){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__46662__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__46662__auto____1.call(this,state_49957);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__46662__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__46662__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto__))
})();
var state__46753__auto__ = (function (){var statearr_49963 = f__46752__auto__.call(null);
(statearr_49963[(6)] = c__46751__auto__);

return statearr_49963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto__))
);

return c__46751__auto__;
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
var c__46751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto__,figwheel_version,temp__5457__auto__){
return (function (state_49972){
var state_val_49973 = (state_49972[(1)]);
if((state_val_49973 === (1))){
var inst_49966 = cljs.core.async.timeout.call(null,(2000));
var state_49972__$1 = state_49972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49972__$1,(2),inst_49966);
} else {
if((state_val_49973 === (2))){
var inst_49968 = (state_49972[(2)]);
var inst_49969 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_49970 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49969);
var state_49972__$1 = (function (){var statearr_49974 = state_49972;
(statearr_49974[(7)] = inst_49968);

return statearr_49974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49972__$1,inst_49970);
} else {
return null;
}
}
});})(c__46751__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__46661__auto__,c__46751__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46662__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46662__auto____0 = (function (){
var statearr_49975 = [null,null,null,null,null,null,null,null];
(statearr_49975[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46662__auto__);

(statearr_49975[(1)] = (1));

return statearr_49975;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46662__auto____1 = (function (state_49972){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_49972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e49976){if((e49976 instanceof Object)){
var ex__46665__auto__ = e49976;
var statearr_49977_49979 = state_49972;
(statearr_49977_49979[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49980 = state_49972;
state_49972 = G__49980;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46662__auto__ = function(state_49972){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46662__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46662__auto____1.call(this,state_49972);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46662__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46662__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto__,figwheel_version,temp__5457__auto__))
})();
var state__46753__auto__ = (function (){var statearr_49978 = f__46752__auto__.call(null);
(statearr_49978[(6)] = c__46751__auto__);

return statearr_49978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto__,figwheel_version,temp__5457__auto__))
);

return c__46751__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49981){
var map__49982 = p__49981;
var map__49982__$1 = ((((!((map__49982 == null)))?((((map__49982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49982):map__49982);
var file = cljs.core.get.call(null,map__49982__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49982__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49982__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49984 = "";
var G__49984__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49984),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__49984);
var G__49984__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49984__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__49984__$1);
if(cljs.core.truth_((function (){var and__30510__auto__ = line;
if(cljs.core.truth_(and__30510__auto__)){
return column;
} else {
return and__30510__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49984__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__49984__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49985){
var map__49986 = p__49985;
var map__49986__$1 = ((((!((map__49986 == null)))?((((map__49986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49986):map__49986);
var ed = map__49986__$1;
var formatted_exception = cljs.core.get.call(null,map__49986__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49986__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49986__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49988_49992 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49989_49993 = null;
var count__49990_49994 = (0);
var i__49991_49995 = (0);
while(true){
if((i__49991_49995 < count__49990_49994)){
var msg_49996 = cljs.core._nth.call(null,chunk__49989_49993,i__49991_49995);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49996);

var G__49997 = seq__49988_49992;
var G__49998 = chunk__49989_49993;
var G__49999 = count__49990_49994;
var G__50000 = (i__49991_49995 + (1));
seq__49988_49992 = G__49997;
chunk__49989_49993 = G__49998;
count__49990_49994 = G__49999;
i__49991_49995 = G__50000;
continue;
} else {
var temp__5457__auto___50001 = cljs.core.seq.call(null,seq__49988_49992);
if(temp__5457__auto___50001){
var seq__49988_50002__$1 = temp__5457__auto___50001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49988_50002__$1)){
var c__31453__auto___50003 = cljs.core.chunk_first.call(null,seq__49988_50002__$1);
var G__50004 = cljs.core.chunk_rest.call(null,seq__49988_50002__$1);
var G__50005 = c__31453__auto___50003;
var G__50006 = cljs.core.count.call(null,c__31453__auto___50003);
var G__50007 = (0);
seq__49988_49992 = G__50004;
chunk__49989_49993 = G__50005;
count__49990_49994 = G__50006;
i__49991_49995 = G__50007;
continue;
} else {
var msg_50008 = cljs.core.first.call(null,seq__49988_50002__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50008);

var G__50009 = cljs.core.next.call(null,seq__49988_50002__$1);
var G__50010 = null;
var G__50011 = (0);
var G__50012 = (0);
seq__49988_49992 = G__50009;
chunk__49989_49993 = G__50010;
count__49990_49994 = G__50011;
i__49991_49995 = G__50012;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50013){
var map__50014 = p__50013;
var map__50014__$1 = ((((!((map__50014 == null)))?((((map__50014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50014):map__50014);
var w = map__50014__$1;
var message = cljs.core.get.call(null,map__50014__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__50016 = cljs.core.seq.call(null,plugins);
var chunk__50017 = null;
var count__50018 = (0);
var i__50019 = (0);
while(true){
if((i__50019 < count__50018)){
var vec__50020 = cljs.core._nth.call(null,chunk__50017,i__50019);
var k = cljs.core.nth.call(null,vec__50020,(0),null);
var plugin = cljs.core.nth.call(null,vec__50020,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50026 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50016,chunk__50017,count__50018,i__50019,pl_50026,vec__50020,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50026.call(null,msg_hist);
});})(seq__50016,chunk__50017,count__50018,i__50019,pl_50026,vec__50020,k,plugin))
);
} else {
}

var G__50027 = seq__50016;
var G__50028 = chunk__50017;
var G__50029 = count__50018;
var G__50030 = (i__50019 + (1));
seq__50016 = G__50027;
chunk__50017 = G__50028;
count__50018 = G__50029;
i__50019 = G__50030;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50016);
if(temp__5457__auto__){
var seq__50016__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50016__$1)){
var c__31453__auto__ = cljs.core.chunk_first.call(null,seq__50016__$1);
var G__50031 = cljs.core.chunk_rest.call(null,seq__50016__$1);
var G__50032 = c__31453__auto__;
var G__50033 = cljs.core.count.call(null,c__31453__auto__);
var G__50034 = (0);
seq__50016 = G__50031;
chunk__50017 = G__50032;
count__50018 = G__50033;
i__50019 = G__50034;
continue;
} else {
var vec__50023 = cljs.core.first.call(null,seq__50016__$1);
var k = cljs.core.nth.call(null,vec__50023,(0),null);
var plugin = cljs.core.nth.call(null,vec__50023,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50035 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50016,chunk__50017,count__50018,i__50019,pl_50035,vec__50023,k,plugin,seq__50016__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50035.call(null,msg_hist);
});})(seq__50016,chunk__50017,count__50018,i__50019,pl_50035,vec__50023,k,plugin,seq__50016__$1,temp__5457__auto__))
);
} else {
}

var G__50036 = cljs.core.next.call(null,seq__50016__$1);
var G__50037 = null;
var G__50038 = (0);
var G__50039 = (0);
seq__50016 = G__50036;
chunk__50017 = G__50037;
count__50018 = G__50038;
i__50019 = G__50039;
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
var G__50041 = arguments.length;
switch (G__50041) {
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

var seq__50042_50047 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50043_50048 = null;
var count__50044_50049 = (0);
var i__50045_50050 = (0);
while(true){
if((i__50045_50050 < count__50044_50049)){
var msg_50051 = cljs.core._nth.call(null,chunk__50043_50048,i__50045_50050);
figwheel.client.socket.handle_incoming_message.call(null,msg_50051);

var G__50052 = seq__50042_50047;
var G__50053 = chunk__50043_50048;
var G__50054 = count__50044_50049;
var G__50055 = (i__50045_50050 + (1));
seq__50042_50047 = G__50052;
chunk__50043_50048 = G__50053;
count__50044_50049 = G__50054;
i__50045_50050 = G__50055;
continue;
} else {
var temp__5457__auto___50056 = cljs.core.seq.call(null,seq__50042_50047);
if(temp__5457__auto___50056){
var seq__50042_50057__$1 = temp__5457__auto___50056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50042_50057__$1)){
var c__31453__auto___50058 = cljs.core.chunk_first.call(null,seq__50042_50057__$1);
var G__50059 = cljs.core.chunk_rest.call(null,seq__50042_50057__$1);
var G__50060 = c__31453__auto___50058;
var G__50061 = cljs.core.count.call(null,c__31453__auto___50058);
var G__50062 = (0);
seq__50042_50047 = G__50059;
chunk__50043_50048 = G__50060;
count__50044_50049 = G__50061;
i__50045_50050 = G__50062;
continue;
} else {
var msg_50063 = cljs.core.first.call(null,seq__50042_50057__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50063);

var G__50064 = cljs.core.next.call(null,seq__50042_50057__$1);
var G__50065 = null;
var G__50066 = (0);
var G__50067 = (0);
seq__50042_50047 = G__50064;
chunk__50043_50048 = G__50065;
count__50044_50049 = G__50066;
i__50045_50050 = G__50067;
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
var args__31808__auto__ = [];
var len__31801__auto___50072 = arguments.length;
var i__31802__auto___50073 = (0);
while(true){
if((i__31802__auto___50073 < len__31801__auto___50072)){
args__31808__auto__.push((arguments[i__31802__auto___50073]));

var G__50074 = (i__31802__auto___50073 + (1));
i__31802__auto___50073 = G__50074;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50069){
var map__50070 = p__50069;
var map__50070__$1 = ((((!((map__50070 == null)))?((((map__50070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50070):map__50070);
var opts = map__50070__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50068){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50068));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50075){if((e50075 instanceof Error)){
var e = e50075;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50075;

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
return (function (p__50076){
var map__50077 = p__50076;
var map__50077__$1 = ((((!((map__50077 == null)))?((((map__50077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50077):map__50077);
var msg_name = cljs.core.get.call(null,map__50077__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510602156245
