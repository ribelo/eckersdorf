// Compiled by ClojureScript 1.9.908 {}
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
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e50390){if((e50390 instanceof Error)){
var e = e50390;
return "Error: Unable to stringify";
} else {
throw e50390;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__50393 = arguments.length;
switch (G__50393) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__50391_SHARP_){
if(typeof p1__50391_SHARP_ === 'string'){
return p1__50391_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__50391_SHARP_);
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
var args__31523__auto__ = [];
var len__31516__auto___50396 = arguments.length;
var i__31517__auto___50397 = (0);
while(true){
if((i__31517__auto___50397 < len__31516__auto___50396)){
args__31523__auto__.push((arguments[i__31517__auto___50397]));

var G__50398 = (i__31517__auto___50397 + (1));
i__31517__auto___50397 = G__50398;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq50395){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50395));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31523__auto__ = [];
var len__31516__auto___50400 = arguments.length;
var i__31517__auto___50401 = (0);
while(true){
if((i__31517__auto___50401 < len__31516__auto___50400)){
args__31523__auto__.push((arguments[i__31517__auto___50401]));

var G__50402 = (i__31517__auto___50401 + (1));
i__31517__auto___50401 = G__50402;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq50399){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50399));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50403){
var map__50404 = p__50403;
var map__50404__$1 = ((((!((map__50404 == null)))?((((map__50404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50404):map__50404);
var message = cljs.core.get.call(null,map__50404__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50404__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30239__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30227__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30227__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30227__auto__;
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
var c__47162__auto___50483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___50483,ch){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___50483,ch){
return (function (state_50455){
var state_val_50456 = (state_50455[(1)]);
if((state_val_50456 === (7))){
var inst_50451 = (state_50455[(2)]);
var state_50455__$1 = state_50455;
var statearr_50457_50484 = state_50455__$1;
(statearr_50457_50484[(2)] = inst_50451);

(statearr_50457_50484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50456 === (1))){
var state_50455__$1 = state_50455;
var statearr_50458_50485 = state_50455__$1;
(statearr_50458_50485[(2)] = null);

(statearr_50458_50485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50456 === (4))){
var inst_50408 = (state_50455[(7)]);
var inst_50408__$1 = (state_50455[(2)]);
var state_50455__$1 = (function (){var statearr_50459 = state_50455;
(statearr_50459[(7)] = inst_50408__$1);

return statearr_50459;
})();
if(cljs.core.truth_(inst_50408__$1)){
var statearr_50460_50486 = state_50455__$1;
(statearr_50460_50486[(1)] = (5));

} else {
var statearr_50461_50487 = state_50455__$1;
(statearr_50461_50487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50456 === (15))){
var inst_50415 = (state_50455[(8)]);
var inst_50430 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50415);
var inst_50431 = cljs.core.first.call(null,inst_50430);
var inst_50432 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50431);
var inst_50433 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50432)].join('');
var inst_50434 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50433);
var state_50455__$1 = state_50455;
var statearr_50462_50488 = state_50455__$1;
(statearr_50462_50488[(2)] = inst_50434);

(statearr_50462_50488[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50456 === (13))){
var inst_50439 = (state_50455[(2)]);
var state_50455__$1 = state_50455;
var statearr_50463_50489 = state_50455__$1;
(statearr_50463_50489[(2)] = inst_50439);

(statearr_50463_50489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50456 === (6))){
var state_50455__$1 = state_50455;
var statearr_50464_50490 = state_50455__$1;
(statearr_50464_50490[(2)] = null);

(statearr_50464_50490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50456 === (17))){
var inst_50437 = (state_50455[(2)]);
var state_50455__$1 = state_50455;
var statearr_50465_50491 = state_50455__$1;
(statearr_50465_50491[(2)] = inst_50437);

(statearr_50465_50491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50456 === (3))){
var inst_50453 = (state_50455[(2)]);
var state_50455__$1 = state_50455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50455__$1,inst_50453);
} else {
if((state_val_50456 === (12))){
var inst_50414 = (state_50455[(9)]);
var inst_50428 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50414,opts);
var state_50455__$1 = state_50455;
if(cljs.core.truth_(inst_50428)){
var statearr_50466_50492 = state_50455__$1;
(statearr_50466_50492[(1)] = (15));

} else {
var statearr_50467_50493 = state_50455__$1;
(statearr_50467_50493[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50456 === (2))){
var state_50455__$1 = state_50455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50455__$1,(4),ch);
} else {
if((state_val_50456 === (11))){
var inst_50415 = (state_50455[(8)]);
var inst_50420 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50421 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50415);
var inst_50422 = cljs.core.async.timeout.call(null,(1000));
var inst_50423 = [inst_50421,inst_50422];
var inst_50424 = (new cljs.core.PersistentVector(null,2,(5),inst_50420,inst_50423,null));
var state_50455__$1 = state_50455;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50455__$1,(14),inst_50424);
} else {
if((state_val_50456 === (9))){
var inst_50415 = (state_50455[(8)]);
var inst_50441 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50442 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50415);
var inst_50443 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50442);
var inst_50444 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50443)].join('');
var inst_50445 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50444);
var state_50455__$1 = (function (){var statearr_50468 = state_50455;
(statearr_50468[(10)] = inst_50441);

return statearr_50468;
})();
var statearr_50469_50494 = state_50455__$1;
(statearr_50469_50494[(2)] = inst_50445);

(statearr_50469_50494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50456 === (5))){
var inst_50408 = (state_50455[(7)]);
var inst_50410 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50411 = (new cljs.core.PersistentArrayMap(null,2,inst_50410,null));
var inst_50412 = (new cljs.core.PersistentHashSet(null,inst_50411,null));
var inst_50413 = figwheel.client.focus_msgs.call(null,inst_50412,inst_50408);
var inst_50414 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50413);
var inst_50415 = cljs.core.first.call(null,inst_50413);
var inst_50416 = figwheel.client.autoload_QMARK_.call(null);
var state_50455__$1 = (function (){var statearr_50470 = state_50455;
(statearr_50470[(8)] = inst_50415);

(statearr_50470[(9)] = inst_50414);

return statearr_50470;
})();
if(cljs.core.truth_(inst_50416)){
var statearr_50471_50495 = state_50455__$1;
(statearr_50471_50495[(1)] = (8));

} else {
var statearr_50472_50496 = state_50455__$1;
(statearr_50472_50496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50456 === (14))){
var inst_50426 = (state_50455[(2)]);
var state_50455__$1 = state_50455;
var statearr_50473_50497 = state_50455__$1;
(statearr_50473_50497[(2)] = inst_50426);

(statearr_50473_50497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50456 === (16))){
var state_50455__$1 = state_50455;
var statearr_50474_50498 = state_50455__$1;
(statearr_50474_50498[(2)] = null);

(statearr_50474_50498[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50456 === (10))){
var inst_50447 = (state_50455[(2)]);
var state_50455__$1 = (function (){var statearr_50475 = state_50455;
(statearr_50475[(11)] = inst_50447);

return statearr_50475;
})();
var statearr_50476_50499 = state_50455__$1;
(statearr_50476_50499[(2)] = null);

(statearr_50476_50499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50456 === (8))){
var inst_50414 = (state_50455[(9)]);
var inst_50418 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50414,opts);
var state_50455__$1 = state_50455;
if(cljs.core.truth_(inst_50418)){
var statearr_50477_50500 = state_50455__$1;
(statearr_50477_50500[(1)] = (11));

} else {
var statearr_50478_50501 = state_50455__$1;
(statearr_50478_50501[(1)] = (12));

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
});})(c__47162__auto___50483,ch))
;
return ((function (switch__47072__auto__,c__47162__auto___50483,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__47073__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__47073__auto____0 = (function (){
var statearr_50479 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50479[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__47073__auto__);

(statearr_50479[(1)] = (1));

return statearr_50479;
});
var figwheel$client$file_reloader_plugin_$_state_machine__47073__auto____1 = (function (state_50455){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_50455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e50480){if((e50480 instanceof Object)){
var ex__47076__auto__ = e50480;
var statearr_50481_50502 = state_50455;
(statearr_50481_50502[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50503 = state_50455;
state_50455 = G__50503;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__47073__auto__ = function(state_50455){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__47073__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__47073__auto____1.call(this,state_50455);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__47073__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__47073__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___50483,ch))
})();
var state__47164__auto__ = (function (){var statearr_50482 = f__47163__auto__.call(null);
(statearr_50482[(6)] = c__47162__auto___50483);

return statearr_50482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___50483,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50504_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50504_SHARP_));
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
var base_path_50506 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50506){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e50505){if((e50505 instanceof Error)){
var e = e50505;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50506], null));
} else {
var e = e50505;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_50506))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50507){
var map__50508 = p__50507;
var map__50508__$1 = ((((!((map__50508 == null)))?((((map__50508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50508):map__50508);
var opts = map__50508__$1;
var build_id = cljs.core.get.call(null,map__50508__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50508,map__50508__$1,opts,build_id){
return (function (p__50510){
var vec__50511 = p__50510;
var seq__50512 = cljs.core.seq.call(null,vec__50511);
var first__50513 = cljs.core.first.call(null,seq__50512);
var seq__50512__$1 = cljs.core.next.call(null,seq__50512);
var map__50514 = first__50513;
var map__50514__$1 = ((((!((map__50514 == null)))?((((map__50514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50514):map__50514);
var msg = map__50514__$1;
var msg_name = cljs.core.get.call(null,map__50514__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50512__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50511,seq__50512,first__50513,seq__50512__$1,map__50514,map__50514__$1,msg,msg_name,_,map__50508,map__50508__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50511,seq__50512,first__50513,seq__50512__$1,map__50514,map__50514__$1,msg,msg_name,_,map__50508,map__50508__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__50508,map__50508__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50516){
var vec__50517 = p__50516;
var seq__50518 = cljs.core.seq.call(null,vec__50517);
var first__50519 = cljs.core.first.call(null,seq__50518);
var seq__50518__$1 = cljs.core.next.call(null,seq__50518);
var map__50520 = first__50519;
var map__50520__$1 = ((((!((map__50520 == null)))?((((map__50520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50520):map__50520);
var msg = map__50520__$1;
var msg_name = cljs.core.get.call(null,map__50520__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50518__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50522){
var map__50523 = p__50522;
var map__50523__$1 = ((((!((map__50523 == null)))?((((map__50523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50523):map__50523);
var on_compile_warning = cljs.core.get.call(null,map__50523__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50523__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50523,map__50523__$1,on_compile_warning,on_compile_fail){
return (function (p__50525){
var vec__50526 = p__50525;
var seq__50527 = cljs.core.seq.call(null,vec__50526);
var first__50528 = cljs.core.first.call(null,seq__50527);
var seq__50527__$1 = cljs.core.next.call(null,seq__50527);
var map__50529 = first__50528;
var map__50529__$1 = ((((!((map__50529 == null)))?((((map__50529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50529):map__50529);
var msg = map__50529__$1;
var msg_name = cljs.core.get.call(null,map__50529__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50527__$1;
var pred__50531 = cljs.core._EQ_;
var expr__50532 = msg_name;
if(cljs.core.truth_(pred__50531.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50532))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50531.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50532))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__50523,map__50523__$1,on_compile_warning,on_compile_fail))
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
var c__47162__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto__,msg_hist,msg_names,msg){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto__,msg_hist,msg_names,msg){
return (function (state_50621){
var state_val_50622 = (state_50621[(1)]);
if((state_val_50622 === (7))){
var inst_50541 = (state_50621[(2)]);
var state_50621__$1 = state_50621;
if(cljs.core.truth_(inst_50541)){
var statearr_50623_50670 = state_50621__$1;
(statearr_50623_50670[(1)] = (8));

} else {
var statearr_50624_50671 = state_50621__$1;
(statearr_50624_50671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (20))){
var inst_50615 = (state_50621[(2)]);
var state_50621__$1 = state_50621;
var statearr_50625_50672 = state_50621__$1;
(statearr_50625_50672[(2)] = inst_50615);

(statearr_50625_50672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (27))){
var inst_50611 = (state_50621[(2)]);
var state_50621__$1 = state_50621;
var statearr_50626_50673 = state_50621__$1;
(statearr_50626_50673[(2)] = inst_50611);

(statearr_50626_50673[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (1))){
var inst_50534 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50621__$1 = state_50621;
if(cljs.core.truth_(inst_50534)){
var statearr_50627_50674 = state_50621__$1;
(statearr_50627_50674[(1)] = (2));

} else {
var statearr_50628_50675 = state_50621__$1;
(statearr_50628_50675[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (24))){
var inst_50613 = (state_50621[(2)]);
var state_50621__$1 = state_50621;
var statearr_50629_50676 = state_50621__$1;
(statearr_50629_50676[(2)] = inst_50613);

(statearr_50629_50676[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (4))){
var inst_50619 = (state_50621[(2)]);
var state_50621__$1 = state_50621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50621__$1,inst_50619);
} else {
if((state_val_50622 === (15))){
var inst_50617 = (state_50621[(2)]);
var state_50621__$1 = state_50621;
var statearr_50630_50677 = state_50621__$1;
(statearr_50630_50677[(2)] = inst_50617);

(statearr_50630_50677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (21))){
var inst_50570 = (state_50621[(2)]);
var inst_50571 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50572 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50571);
var state_50621__$1 = (function (){var statearr_50631 = state_50621;
(statearr_50631[(7)] = inst_50570);

return statearr_50631;
})();
var statearr_50632_50678 = state_50621__$1;
(statearr_50632_50678[(2)] = inst_50572);

(statearr_50632_50678[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (31))){
var inst_50600 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50621__$1 = state_50621;
if(cljs.core.truth_(inst_50600)){
var statearr_50633_50679 = state_50621__$1;
(statearr_50633_50679[(1)] = (34));

} else {
var statearr_50634_50680 = state_50621__$1;
(statearr_50634_50680[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (32))){
var inst_50609 = (state_50621[(2)]);
var state_50621__$1 = state_50621;
var statearr_50635_50681 = state_50621__$1;
(statearr_50635_50681[(2)] = inst_50609);

(statearr_50635_50681[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (33))){
var inst_50596 = (state_50621[(2)]);
var inst_50597 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50598 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50597);
var state_50621__$1 = (function (){var statearr_50636 = state_50621;
(statearr_50636[(8)] = inst_50596);

return statearr_50636;
})();
var statearr_50637_50682 = state_50621__$1;
(statearr_50637_50682[(2)] = inst_50598);

(statearr_50637_50682[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (13))){
var inst_50555 = figwheel.client.heads_up.clear.call(null);
var state_50621__$1 = state_50621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50621__$1,(16),inst_50555);
} else {
if((state_val_50622 === (22))){
var inst_50576 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50577 = figwheel.client.heads_up.append_warning_message.call(null,inst_50576);
var state_50621__$1 = state_50621;
var statearr_50638_50683 = state_50621__$1;
(statearr_50638_50683[(2)] = inst_50577);

(statearr_50638_50683[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (36))){
var inst_50607 = (state_50621[(2)]);
var state_50621__$1 = state_50621;
var statearr_50639_50684 = state_50621__$1;
(statearr_50639_50684[(2)] = inst_50607);

(statearr_50639_50684[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (29))){
var inst_50587 = (state_50621[(2)]);
var inst_50588 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50589 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50588);
var state_50621__$1 = (function (){var statearr_50640 = state_50621;
(statearr_50640[(9)] = inst_50587);

return statearr_50640;
})();
var statearr_50641_50685 = state_50621__$1;
(statearr_50641_50685[(2)] = inst_50589);

(statearr_50641_50685[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (6))){
var inst_50536 = (state_50621[(10)]);
var state_50621__$1 = state_50621;
var statearr_50642_50686 = state_50621__$1;
(statearr_50642_50686[(2)] = inst_50536);

(statearr_50642_50686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (28))){
var inst_50583 = (state_50621[(2)]);
var inst_50584 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50585 = figwheel.client.heads_up.display_warning.call(null,inst_50584);
var state_50621__$1 = (function (){var statearr_50643 = state_50621;
(statearr_50643[(11)] = inst_50583);

return statearr_50643;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50621__$1,(29),inst_50585);
} else {
if((state_val_50622 === (25))){
var inst_50581 = figwheel.client.heads_up.clear.call(null);
var state_50621__$1 = state_50621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50621__$1,(28),inst_50581);
} else {
if((state_val_50622 === (34))){
var inst_50602 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50621__$1 = state_50621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50621__$1,(37),inst_50602);
} else {
if((state_val_50622 === (17))){
var inst_50561 = (state_50621[(2)]);
var inst_50562 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50563 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50562);
var state_50621__$1 = (function (){var statearr_50644 = state_50621;
(statearr_50644[(12)] = inst_50561);

return statearr_50644;
})();
var statearr_50645_50687 = state_50621__$1;
(statearr_50645_50687[(2)] = inst_50563);

(statearr_50645_50687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (3))){
var inst_50553 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50621__$1 = state_50621;
if(cljs.core.truth_(inst_50553)){
var statearr_50646_50688 = state_50621__$1;
(statearr_50646_50688[(1)] = (13));

} else {
var statearr_50647_50689 = state_50621__$1;
(statearr_50647_50689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (12))){
var inst_50549 = (state_50621[(2)]);
var state_50621__$1 = state_50621;
var statearr_50648_50690 = state_50621__$1;
(statearr_50648_50690[(2)] = inst_50549);

(statearr_50648_50690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (2))){
var inst_50536 = (state_50621[(10)]);
var inst_50536__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50621__$1 = (function (){var statearr_50649 = state_50621;
(statearr_50649[(10)] = inst_50536__$1);

return statearr_50649;
})();
if(cljs.core.truth_(inst_50536__$1)){
var statearr_50650_50691 = state_50621__$1;
(statearr_50650_50691[(1)] = (5));

} else {
var statearr_50651_50692 = state_50621__$1;
(statearr_50651_50692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (23))){
var inst_50579 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50621__$1 = state_50621;
if(cljs.core.truth_(inst_50579)){
var statearr_50652_50693 = state_50621__$1;
(statearr_50652_50693[(1)] = (25));

} else {
var statearr_50653_50694 = state_50621__$1;
(statearr_50653_50694[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (35))){
var state_50621__$1 = state_50621;
var statearr_50654_50695 = state_50621__$1;
(statearr_50654_50695[(2)] = null);

(statearr_50654_50695[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (19))){
var inst_50574 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50621__$1 = state_50621;
if(cljs.core.truth_(inst_50574)){
var statearr_50655_50696 = state_50621__$1;
(statearr_50655_50696[(1)] = (22));

} else {
var statearr_50656_50697 = state_50621__$1;
(statearr_50656_50697[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (11))){
var inst_50545 = (state_50621[(2)]);
var state_50621__$1 = state_50621;
var statearr_50657_50698 = state_50621__$1;
(statearr_50657_50698[(2)] = inst_50545);

(statearr_50657_50698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (9))){
var inst_50547 = figwheel.client.heads_up.clear.call(null);
var state_50621__$1 = state_50621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50621__$1,(12),inst_50547);
} else {
if((state_val_50622 === (5))){
var inst_50538 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50621__$1 = state_50621;
var statearr_50658_50699 = state_50621__$1;
(statearr_50658_50699[(2)] = inst_50538);

(statearr_50658_50699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (14))){
var inst_50565 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50621__$1 = state_50621;
if(cljs.core.truth_(inst_50565)){
var statearr_50659_50700 = state_50621__$1;
(statearr_50659_50700[(1)] = (18));

} else {
var statearr_50660_50701 = state_50621__$1;
(statearr_50660_50701[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (26))){
var inst_50591 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50621__$1 = state_50621;
if(cljs.core.truth_(inst_50591)){
var statearr_50661_50702 = state_50621__$1;
(statearr_50661_50702[(1)] = (30));

} else {
var statearr_50662_50703 = state_50621__$1;
(statearr_50662_50703[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (16))){
var inst_50557 = (state_50621[(2)]);
var inst_50558 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50559 = figwheel.client.heads_up.display_exception.call(null,inst_50558);
var state_50621__$1 = (function (){var statearr_50663 = state_50621;
(statearr_50663[(13)] = inst_50557);

return statearr_50663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50621__$1,(17),inst_50559);
} else {
if((state_val_50622 === (30))){
var inst_50593 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50594 = figwheel.client.heads_up.display_warning.call(null,inst_50593);
var state_50621__$1 = state_50621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50621__$1,(33),inst_50594);
} else {
if((state_val_50622 === (10))){
var inst_50551 = (state_50621[(2)]);
var state_50621__$1 = state_50621;
var statearr_50664_50704 = state_50621__$1;
(statearr_50664_50704[(2)] = inst_50551);

(statearr_50664_50704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (18))){
var inst_50567 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50568 = figwheel.client.heads_up.display_exception.call(null,inst_50567);
var state_50621__$1 = state_50621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50621__$1,(21),inst_50568);
} else {
if((state_val_50622 === (37))){
var inst_50604 = (state_50621[(2)]);
var state_50621__$1 = state_50621;
var statearr_50665_50705 = state_50621__$1;
(statearr_50665_50705[(2)] = inst_50604);

(statearr_50665_50705[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50622 === (8))){
var inst_50543 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50621__$1 = state_50621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50621__$1,(11),inst_50543);
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
});})(c__47162__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__47072__auto__,c__47162__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47073__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47073__auto____0 = (function (){
var statearr_50666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50666[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47073__auto__);

(statearr_50666[(1)] = (1));

return statearr_50666;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47073__auto____1 = (function (state_50621){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_50621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e50667){if((e50667 instanceof Object)){
var ex__47076__auto__ = e50667;
var statearr_50668_50706 = state_50621;
(statearr_50668_50706[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50707 = state_50621;
state_50621 = G__50707;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47073__auto__ = function(state_50621){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47073__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47073__auto____1.call(this,state_50621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47073__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47073__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto__,msg_hist,msg_names,msg))
})();
var state__47164__auto__ = (function (){var statearr_50669 = f__47163__auto__.call(null);
(statearr_50669[(6)] = c__47162__auto__);

return statearr_50669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto__,msg_hist,msg_names,msg))
);

return c__47162__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__47162__auto___50736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___50736,ch){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___50736,ch){
return (function (state_50722){
var state_val_50723 = (state_50722[(1)]);
if((state_val_50723 === (1))){
var state_50722__$1 = state_50722;
var statearr_50724_50737 = state_50722__$1;
(statearr_50724_50737[(2)] = null);

(statearr_50724_50737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50723 === (2))){
var state_50722__$1 = state_50722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50722__$1,(4),ch);
} else {
if((state_val_50723 === (3))){
var inst_50720 = (state_50722[(2)]);
var state_50722__$1 = state_50722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50722__$1,inst_50720);
} else {
if((state_val_50723 === (4))){
var inst_50710 = (state_50722[(7)]);
var inst_50710__$1 = (state_50722[(2)]);
var state_50722__$1 = (function (){var statearr_50725 = state_50722;
(statearr_50725[(7)] = inst_50710__$1);

return statearr_50725;
})();
if(cljs.core.truth_(inst_50710__$1)){
var statearr_50726_50738 = state_50722__$1;
(statearr_50726_50738[(1)] = (5));

} else {
var statearr_50727_50739 = state_50722__$1;
(statearr_50727_50739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50723 === (5))){
var inst_50710 = (state_50722[(7)]);
var inst_50712 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50710);
var state_50722__$1 = state_50722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50722__$1,(8),inst_50712);
} else {
if((state_val_50723 === (6))){
var state_50722__$1 = state_50722;
var statearr_50728_50740 = state_50722__$1;
(statearr_50728_50740[(2)] = null);

(statearr_50728_50740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50723 === (7))){
var inst_50718 = (state_50722[(2)]);
var state_50722__$1 = state_50722;
var statearr_50729_50741 = state_50722__$1;
(statearr_50729_50741[(2)] = inst_50718);

(statearr_50729_50741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50723 === (8))){
var inst_50714 = (state_50722[(2)]);
var state_50722__$1 = (function (){var statearr_50730 = state_50722;
(statearr_50730[(8)] = inst_50714);

return statearr_50730;
})();
var statearr_50731_50742 = state_50722__$1;
(statearr_50731_50742[(2)] = null);

(statearr_50731_50742[(1)] = (2));


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
});})(c__47162__auto___50736,ch))
;
return ((function (switch__47072__auto__,c__47162__auto___50736,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__47073__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__47073__auto____0 = (function (){
var statearr_50732 = [null,null,null,null,null,null,null,null,null];
(statearr_50732[(0)] = figwheel$client$heads_up_plugin_$_state_machine__47073__auto__);

(statearr_50732[(1)] = (1));

return statearr_50732;
});
var figwheel$client$heads_up_plugin_$_state_machine__47073__auto____1 = (function (state_50722){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_50722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e50733){if((e50733 instanceof Object)){
var ex__47076__auto__ = e50733;
var statearr_50734_50743 = state_50722;
(statearr_50734_50743[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50744 = state_50722;
state_50722 = G__50744;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__47073__auto__ = function(state_50722){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__47073__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__47073__auto____1.call(this,state_50722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__47073__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__47073__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___50736,ch))
})();
var state__47164__auto__ = (function (){var statearr_50735 = f__47163__auto__.call(null);
(statearr_50735[(6)] = c__47162__auto___50736);

return statearr_50735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___50736,ch))
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
var c__47162__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto__){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto__){
return (function (state_50750){
var state_val_50751 = (state_50750[(1)]);
if((state_val_50751 === (1))){
var inst_50745 = cljs.core.async.timeout.call(null,(3000));
var state_50750__$1 = state_50750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50750__$1,(2),inst_50745);
} else {
if((state_val_50751 === (2))){
var inst_50747 = (state_50750[(2)]);
var inst_50748 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50750__$1 = (function (){var statearr_50752 = state_50750;
(statearr_50752[(7)] = inst_50747);

return statearr_50752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50750__$1,inst_50748);
} else {
return null;
}
}
});})(c__47162__auto__))
;
return ((function (switch__47072__auto__,c__47162__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__47073__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__47073__auto____0 = (function (){
var statearr_50753 = [null,null,null,null,null,null,null,null];
(statearr_50753[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__47073__auto__);

(statearr_50753[(1)] = (1));

return statearr_50753;
});
var figwheel$client$enforce_project_plugin_$_state_machine__47073__auto____1 = (function (state_50750){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_50750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e50754){if((e50754 instanceof Object)){
var ex__47076__auto__ = e50754;
var statearr_50755_50757 = state_50750;
(statearr_50755_50757[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50758 = state_50750;
state_50750 = G__50758;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__47073__auto__ = function(state_50750){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__47073__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__47073__auto____1.call(this,state_50750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__47073__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__47073__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto__))
})();
var state__47164__auto__ = (function (){var statearr_50756 = f__47163__auto__.call(null);
(statearr_50756[(6)] = c__47162__auto__);

return statearr_50756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto__))
);

return c__47162__auto__;
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
var temp__5290__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5290__auto__)){
var figwheel_version = temp__5290__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__47162__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto__,figwheel_version,temp__5290__auto__){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto__,figwheel_version,temp__5290__auto__){
return (function (state_50765){
var state_val_50766 = (state_50765[(1)]);
if((state_val_50766 === (1))){
var inst_50759 = cljs.core.async.timeout.call(null,(2000));
var state_50765__$1 = state_50765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50765__$1,(2),inst_50759);
} else {
if((state_val_50766 === (2))){
var inst_50761 = (state_50765[(2)]);
var inst_50762 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_50763 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50762);
var state_50765__$1 = (function (){var statearr_50767 = state_50765;
(statearr_50767[(7)] = inst_50761);

return statearr_50767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50765__$1,inst_50763);
} else {
return null;
}
}
});})(c__47162__auto__,figwheel_version,temp__5290__auto__))
;
return ((function (switch__47072__auto__,c__47162__auto__,figwheel_version,temp__5290__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47073__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47073__auto____0 = (function (){
var statearr_50768 = [null,null,null,null,null,null,null,null];
(statearr_50768[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47073__auto__);

(statearr_50768[(1)] = (1));

return statearr_50768;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47073__auto____1 = (function (state_50765){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_50765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e50769){if((e50769 instanceof Object)){
var ex__47076__auto__ = e50769;
var statearr_50770_50772 = state_50765;
(statearr_50770_50772[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50773 = state_50765;
state_50765 = G__50773;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47073__auto__ = function(state_50765){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47073__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47073__auto____1.call(this,state_50765);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47073__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47073__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto__,figwheel_version,temp__5290__auto__))
})();
var state__47164__auto__ = (function (){var statearr_50771 = f__47163__auto__.call(null);
(statearr_50771[(6)] = c__47162__auto__);

return statearr_50771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto__,figwheel_version,temp__5290__auto__))
);

return c__47162__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50774){
var map__50775 = p__50774;
var map__50775__$1 = ((((!((map__50775 == null)))?((((map__50775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50775):map__50775);
var file = cljs.core.get.call(null,map__50775__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50775__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50775__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50777 = "";
var G__50777__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50777),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50777);
var G__50777__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50777__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50777__$1);
if(cljs.core.truth_((function (){var and__30227__auto__ = line;
if(cljs.core.truth_(and__30227__auto__)){
return column;
} else {
return and__30227__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50777__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50777__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50778){
var map__50779 = p__50778;
var map__50779__$1 = ((((!((map__50779 == null)))?((((map__50779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50779):map__50779);
var ed = map__50779__$1;
var formatted_exception = cljs.core.get.call(null,map__50779__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50779__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50779__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50781_50785 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50782_50786 = null;
var count__50783_50787 = (0);
var i__50784_50788 = (0);
while(true){
if((i__50784_50788 < count__50783_50787)){
var msg_50789 = cljs.core._nth.call(null,chunk__50782_50786,i__50784_50788);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50789);

var G__50790 = seq__50781_50785;
var G__50791 = chunk__50782_50786;
var G__50792 = count__50783_50787;
var G__50793 = (i__50784_50788 + (1));
seq__50781_50785 = G__50790;
chunk__50782_50786 = G__50791;
count__50783_50787 = G__50792;
i__50784_50788 = G__50793;
continue;
} else {
var temp__5290__auto___50794 = cljs.core.seq.call(null,seq__50781_50785);
if(temp__5290__auto___50794){
var seq__50781_50795__$1 = temp__5290__auto___50794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50781_50795__$1)){
var c__31170__auto___50796 = cljs.core.chunk_first.call(null,seq__50781_50795__$1);
var G__50797 = cljs.core.chunk_rest.call(null,seq__50781_50795__$1);
var G__50798 = c__31170__auto___50796;
var G__50799 = cljs.core.count.call(null,c__31170__auto___50796);
var G__50800 = (0);
seq__50781_50785 = G__50797;
chunk__50782_50786 = G__50798;
count__50783_50787 = G__50799;
i__50784_50788 = G__50800;
continue;
} else {
var msg_50801 = cljs.core.first.call(null,seq__50781_50795__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50801);

var G__50802 = cljs.core.next.call(null,seq__50781_50795__$1);
var G__50803 = null;
var G__50804 = (0);
var G__50805 = (0);
seq__50781_50785 = G__50802;
chunk__50782_50786 = G__50803;
count__50783_50787 = G__50804;
i__50784_50788 = G__50805;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50806){
var map__50807 = p__50806;
var map__50807__$1 = ((((!((map__50807 == null)))?((((map__50807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50807):map__50807);
var w = map__50807__$1;
var message = cljs.core.get.call(null,map__50807__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__30227__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30227__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30227__auto__;
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
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__50809 = cljs.core.seq.call(null,plugins);
var chunk__50810 = null;
var count__50811 = (0);
var i__50812 = (0);
while(true){
if((i__50812 < count__50811)){
var vec__50813 = cljs.core._nth.call(null,chunk__50810,i__50812);
var k = cljs.core.nth.call(null,vec__50813,(0),null);
var plugin = cljs.core.nth.call(null,vec__50813,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50819 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50809,chunk__50810,count__50811,i__50812,pl_50819,vec__50813,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50819.call(null,msg_hist);
});})(seq__50809,chunk__50810,count__50811,i__50812,pl_50819,vec__50813,k,plugin))
);
} else {
}

var G__50820 = seq__50809;
var G__50821 = chunk__50810;
var G__50822 = count__50811;
var G__50823 = (i__50812 + (1));
seq__50809 = G__50820;
chunk__50810 = G__50821;
count__50811 = G__50822;
i__50812 = G__50823;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__50809);
if(temp__5290__auto__){
var seq__50809__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50809__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__50809__$1);
var G__50824 = cljs.core.chunk_rest.call(null,seq__50809__$1);
var G__50825 = c__31170__auto__;
var G__50826 = cljs.core.count.call(null,c__31170__auto__);
var G__50827 = (0);
seq__50809 = G__50824;
chunk__50810 = G__50825;
count__50811 = G__50826;
i__50812 = G__50827;
continue;
} else {
var vec__50816 = cljs.core.first.call(null,seq__50809__$1);
var k = cljs.core.nth.call(null,vec__50816,(0),null);
var plugin = cljs.core.nth.call(null,vec__50816,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50828 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50809,chunk__50810,count__50811,i__50812,pl_50828,vec__50816,k,plugin,seq__50809__$1,temp__5290__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50828.call(null,msg_hist);
});})(seq__50809,chunk__50810,count__50811,i__50812,pl_50828,vec__50816,k,plugin,seq__50809__$1,temp__5290__auto__))
);
} else {
}

var G__50829 = cljs.core.next.call(null,seq__50809__$1);
var G__50830 = null;
var G__50831 = (0);
var G__50832 = (0);
seq__50809 = G__50829;
chunk__50810 = G__50830;
count__50811 = G__50831;
i__50812 = G__50832;
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
var G__50834 = arguments.length;
switch (G__50834) {
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

var seq__50835_50840 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50836_50841 = null;
var count__50837_50842 = (0);
var i__50838_50843 = (0);
while(true){
if((i__50838_50843 < count__50837_50842)){
var msg_50844 = cljs.core._nth.call(null,chunk__50836_50841,i__50838_50843);
figwheel.client.socket.handle_incoming_message.call(null,msg_50844);

var G__50845 = seq__50835_50840;
var G__50846 = chunk__50836_50841;
var G__50847 = count__50837_50842;
var G__50848 = (i__50838_50843 + (1));
seq__50835_50840 = G__50845;
chunk__50836_50841 = G__50846;
count__50837_50842 = G__50847;
i__50838_50843 = G__50848;
continue;
} else {
var temp__5290__auto___50849 = cljs.core.seq.call(null,seq__50835_50840);
if(temp__5290__auto___50849){
var seq__50835_50850__$1 = temp__5290__auto___50849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50835_50850__$1)){
var c__31170__auto___50851 = cljs.core.chunk_first.call(null,seq__50835_50850__$1);
var G__50852 = cljs.core.chunk_rest.call(null,seq__50835_50850__$1);
var G__50853 = c__31170__auto___50851;
var G__50854 = cljs.core.count.call(null,c__31170__auto___50851);
var G__50855 = (0);
seq__50835_50840 = G__50852;
chunk__50836_50841 = G__50853;
count__50837_50842 = G__50854;
i__50838_50843 = G__50855;
continue;
} else {
var msg_50856 = cljs.core.first.call(null,seq__50835_50850__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50856);

var G__50857 = cljs.core.next.call(null,seq__50835_50850__$1);
var G__50858 = null;
var G__50859 = (0);
var G__50860 = (0);
seq__50835_50840 = G__50857;
chunk__50836_50841 = G__50858;
count__50837_50842 = G__50859;
i__50838_50843 = G__50860;
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
var args__31523__auto__ = [];
var len__31516__auto___50865 = arguments.length;
var i__31517__auto___50866 = (0);
while(true){
if((i__31517__auto___50866 < len__31516__auto___50865)){
args__31523__auto__.push((arguments[i__31517__auto___50866]));

var G__50867 = (i__31517__auto___50866 + (1));
i__31517__auto___50866 = G__50867;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50862){
var map__50863 = p__50862;
var map__50863__$1 = ((((!((map__50863 == null)))?((((map__50863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50863):map__50863);
var opts = map__50863__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50861){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50861));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50868){if((e50868 instanceof Error)){
var e = e50868;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50868;

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
return (function (p__50869){
var map__50870 = p__50869;
var map__50870__$1 = ((((!((map__50870 == null)))?((((map__50870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50870):map__50870);
var msg_name = cljs.core.get.call(null,map__50870__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1509094253665
