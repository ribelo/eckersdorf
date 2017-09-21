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
}catch (e42105){if((e42105 instanceof Error)){
var e = e42105;
return "Error: Unable to stringify";
} else {
throw e42105;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__42108 = arguments.length;
switch (G__42108) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__42106_SHARP_){
if(typeof p1__42106_SHARP_ === 'string'){
return p1__42106_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__42106_SHARP_);
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
var args__31533__auto__ = [];
var len__31526__auto___42111 = arguments.length;
var i__31527__auto___42112 = (0);
while(true){
if((i__31527__auto___42112 < len__31526__auto___42111)){
args__31533__auto__.push((arguments[i__31527__auto___42112]));

var G__42113 = (i__31527__auto___42112 + (1));
i__31527__auto___42112 = G__42113;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42110){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42110));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42115 = arguments.length;
var i__31527__auto___42116 = (0);
while(true){
if((i__31527__auto___42116 < len__31526__auto___42115)){
args__31533__auto__.push((arguments[i__31527__auto___42116]));

var G__42117 = (i__31527__auto___42116 + (1));
i__31527__auto___42116 = G__42117;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42114){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42114));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42118){
var map__42119 = p__42118;
var map__42119__$1 = ((((!((map__42119 == null)))?((((map__42119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42119):map__42119);
var message = cljs.core.get.call(null,map__42119__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42119__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30249__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30237__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30237__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30237__auto__;
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
var c__35248__auto___42198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___42198,ch){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___42198,ch){
return (function (state_42170){
var state_val_42171 = (state_42170[(1)]);
if((state_val_42171 === (7))){
var inst_42166 = (state_42170[(2)]);
var state_42170__$1 = state_42170;
var statearr_42172_42199 = state_42170__$1;
(statearr_42172_42199[(2)] = inst_42166);

(statearr_42172_42199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (1))){
var state_42170__$1 = state_42170;
var statearr_42173_42200 = state_42170__$1;
(statearr_42173_42200[(2)] = null);

(statearr_42173_42200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (4))){
var inst_42123 = (state_42170[(7)]);
var inst_42123__$1 = (state_42170[(2)]);
var state_42170__$1 = (function (){var statearr_42174 = state_42170;
(statearr_42174[(7)] = inst_42123__$1);

return statearr_42174;
})();
if(cljs.core.truth_(inst_42123__$1)){
var statearr_42175_42201 = state_42170__$1;
(statearr_42175_42201[(1)] = (5));

} else {
var statearr_42176_42202 = state_42170__$1;
(statearr_42176_42202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (15))){
var inst_42130 = (state_42170[(8)]);
var inst_42145 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42130);
var inst_42146 = cljs.core.first.call(null,inst_42145);
var inst_42147 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42146);
var inst_42148 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42147)].join('');
var inst_42149 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42148);
var state_42170__$1 = state_42170;
var statearr_42177_42203 = state_42170__$1;
(statearr_42177_42203[(2)] = inst_42149);

(statearr_42177_42203[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (13))){
var inst_42154 = (state_42170[(2)]);
var state_42170__$1 = state_42170;
var statearr_42178_42204 = state_42170__$1;
(statearr_42178_42204[(2)] = inst_42154);

(statearr_42178_42204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (6))){
var state_42170__$1 = state_42170;
var statearr_42179_42205 = state_42170__$1;
(statearr_42179_42205[(2)] = null);

(statearr_42179_42205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (17))){
var inst_42152 = (state_42170[(2)]);
var state_42170__$1 = state_42170;
var statearr_42180_42206 = state_42170__$1;
(statearr_42180_42206[(2)] = inst_42152);

(statearr_42180_42206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (3))){
var inst_42168 = (state_42170[(2)]);
var state_42170__$1 = state_42170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42170__$1,inst_42168);
} else {
if((state_val_42171 === (12))){
var inst_42129 = (state_42170[(9)]);
var inst_42143 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42129,opts);
var state_42170__$1 = state_42170;
if(cljs.core.truth_(inst_42143)){
var statearr_42181_42207 = state_42170__$1;
(statearr_42181_42207[(1)] = (15));

} else {
var statearr_42182_42208 = state_42170__$1;
(statearr_42182_42208[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (2))){
var state_42170__$1 = state_42170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42170__$1,(4),ch);
} else {
if((state_val_42171 === (11))){
var inst_42130 = (state_42170[(8)]);
var inst_42135 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42136 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42130);
var inst_42137 = cljs.core.async.timeout.call(null,(1000));
var inst_42138 = [inst_42136,inst_42137];
var inst_42139 = (new cljs.core.PersistentVector(null,2,(5),inst_42135,inst_42138,null));
var state_42170__$1 = state_42170;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42170__$1,(14),inst_42139);
} else {
if((state_val_42171 === (9))){
var inst_42130 = (state_42170[(8)]);
var inst_42156 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42157 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42130);
var inst_42158 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42157);
var inst_42159 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42158)].join('');
var inst_42160 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42159);
var state_42170__$1 = (function (){var statearr_42183 = state_42170;
(statearr_42183[(10)] = inst_42156);

return statearr_42183;
})();
var statearr_42184_42209 = state_42170__$1;
(statearr_42184_42209[(2)] = inst_42160);

(statearr_42184_42209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (5))){
var inst_42123 = (state_42170[(7)]);
var inst_42125 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42126 = (new cljs.core.PersistentArrayMap(null,2,inst_42125,null));
var inst_42127 = (new cljs.core.PersistentHashSet(null,inst_42126,null));
var inst_42128 = figwheel.client.focus_msgs.call(null,inst_42127,inst_42123);
var inst_42129 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42128);
var inst_42130 = cljs.core.first.call(null,inst_42128);
var inst_42131 = figwheel.client.autoload_QMARK_.call(null);
var state_42170__$1 = (function (){var statearr_42185 = state_42170;
(statearr_42185[(9)] = inst_42129);

(statearr_42185[(8)] = inst_42130);

return statearr_42185;
})();
if(cljs.core.truth_(inst_42131)){
var statearr_42186_42210 = state_42170__$1;
(statearr_42186_42210[(1)] = (8));

} else {
var statearr_42187_42211 = state_42170__$1;
(statearr_42187_42211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (14))){
var inst_42141 = (state_42170[(2)]);
var state_42170__$1 = state_42170;
var statearr_42188_42212 = state_42170__$1;
(statearr_42188_42212[(2)] = inst_42141);

(statearr_42188_42212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (16))){
var state_42170__$1 = state_42170;
var statearr_42189_42213 = state_42170__$1;
(statearr_42189_42213[(2)] = null);

(statearr_42189_42213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (10))){
var inst_42162 = (state_42170[(2)]);
var state_42170__$1 = (function (){var statearr_42190 = state_42170;
(statearr_42190[(11)] = inst_42162);

return statearr_42190;
})();
var statearr_42191_42214 = state_42170__$1;
(statearr_42191_42214[(2)] = null);

(statearr_42191_42214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (8))){
var inst_42129 = (state_42170[(9)]);
var inst_42133 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42129,opts);
var state_42170__$1 = state_42170;
if(cljs.core.truth_(inst_42133)){
var statearr_42192_42215 = state_42170__$1;
(statearr_42192_42215[(1)] = (11));

} else {
var statearr_42193_42216 = state_42170__$1;
(statearr_42193_42216[(1)] = (12));

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
});})(c__35248__auto___42198,ch))
;
return ((function (switch__35158__auto__,c__35248__auto___42198,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35159__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35159__auto____0 = (function (){
var statearr_42194 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42194[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35159__auto__);

(statearr_42194[(1)] = (1));

return statearr_42194;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35159__auto____1 = (function (state_42170){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_42170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e42195){if((e42195 instanceof Object)){
var ex__35162__auto__ = e42195;
var statearr_42196_42217 = state_42170;
(statearr_42196_42217[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42218 = state_42170;
state_42170 = G__42218;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35159__auto__ = function(state_42170){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35159__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35159__auto____1.call(this,state_42170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35159__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35159__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___42198,ch))
})();
var state__35250__auto__ = (function (){var statearr_42197 = f__35249__auto__.call(null);
(statearr_42197[(6)] = c__35248__auto___42198);

return statearr_42197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___42198,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42219_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42219_SHARP_));
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
var base_path_42221 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42221){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e42220){if((e42220 instanceof Error)){
var e = e42220;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42221], null));
} else {
var e = e42220;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_42221))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42222){
var map__42223 = p__42222;
var map__42223__$1 = ((((!((map__42223 == null)))?((((map__42223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42223):map__42223);
var opts = map__42223__$1;
var build_id = cljs.core.get.call(null,map__42223__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42223,map__42223__$1,opts,build_id){
return (function (p__42225){
var vec__42226 = p__42225;
var seq__42227 = cljs.core.seq.call(null,vec__42226);
var first__42228 = cljs.core.first.call(null,seq__42227);
var seq__42227__$1 = cljs.core.next.call(null,seq__42227);
var map__42229 = first__42228;
var map__42229__$1 = ((((!((map__42229 == null)))?((((map__42229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42229):map__42229);
var msg = map__42229__$1;
var msg_name = cljs.core.get.call(null,map__42229__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42227__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42226,seq__42227,first__42228,seq__42227__$1,map__42229,map__42229__$1,msg,msg_name,_,map__42223,map__42223__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42226,seq__42227,first__42228,seq__42227__$1,map__42229,map__42229__$1,msg,msg_name,_,map__42223,map__42223__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42223,map__42223__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42231){
var vec__42232 = p__42231;
var seq__42233 = cljs.core.seq.call(null,vec__42232);
var first__42234 = cljs.core.first.call(null,seq__42233);
var seq__42233__$1 = cljs.core.next.call(null,seq__42233);
var map__42235 = first__42234;
var map__42235__$1 = ((((!((map__42235 == null)))?((((map__42235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42235):map__42235);
var msg = map__42235__$1;
var msg_name = cljs.core.get.call(null,map__42235__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42233__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42237){
var map__42238 = p__42237;
var map__42238__$1 = ((((!((map__42238 == null)))?((((map__42238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42238):map__42238);
var on_compile_warning = cljs.core.get.call(null,map__42238__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42238__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42238,map__42238__$1,on_compile_warning,on_compile_fail){
return (function (p__42240){
var vec__42241 = p__42240;
var seq__42242 = cljs.core.seq.call(null,vec__42241);
var first__42243 = cljs.core.first.call(null,seq__42242);
var seq__42242__$1 = cljs.core.next.call(null,seq__42242);
var map__42244 = first__42243;
var map__42244__$1 = ((((!((map__42244 == null)))?((((map__42244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42244):map__42244);
var msg = map__42244__$1;
var msg_name = cljs.core.get.call(null,map__42244__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42242__$1;
var pred__42246 = cljs.core._EQ_;
var expr__42247 = msg_name;
if(cljs.core.truth_(pred__42246.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42247))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42246.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42247))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42238,map__42238__$1,on_compile_warning,on_compile_fail))
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
var c__35248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto__,msg_hist,msg_names,msg){
return (function (state_42336){
var state_val_42337 = (state_42336[(1)]);
if((state_val_42337 === (7))){
var inst_42256 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42256)){
var statearr_42338_42385 = state_42336__$1;
(statearr_42338_42385[(1)] = (8));

} else {
var statearr_42339_42386 = state_42336__$1;
(statearr_42339_42386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (20))){
var inst_42330 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42340_42387 = state_42336__$1;
(statearr_42340_42387[(2)] = inst_42330);

(statearr_42340_42387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (27))){
var inst_42326 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42341_42388 = state_42336__$1;
(statearr_42341_42388[(2)] = inst_42326);

(statearr_42341_42388[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (1))){
var inst_42249 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42249)){
var statearr_42342_42389 = state_42336__$1;
(statearr_42342_42389[(1)] = (2));

} else {
var statearr_42343_42390 = state_42336__$1;
(statearr_42343_42390[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (24))){
var inst_42328 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42344_42391 = state_42336__$1;
(statearr_42344_42391[(2)] = inst_42328);

(statearr_42344_42391[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (4))){
var inst_42334 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42336__$1,inst_42334);
} else {
if((state_val_42337 === (15))){
var inst_42332 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42345_42392 = state_42336__$1;
(statearr_42345_42392[(2)] = inst_42332);

(statearr_42345_42392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (21))){
var inst_42285 = (state_42336[(2)]);
var inst_42286 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42287 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42286);
var state_42336__$1 = (function (){var statearr_42346 = state_42336;
(statearr_42346[(7)] = inst_42285);

return statearr_42346;
})();
var statearr_42347_42393 = state_42336__$1;
(statearr_42347_42393[(2)] = inst_42287);

(statearr_42347_42393[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (31))){
var inst_42315 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42315)){
var statearr_42348_42394 = state_42336__$1;
(statearr_42348_42394[(1)] = (34));

} else {
var statearr_42349_42395 = state_42336__$1;
(statearr_42349_42395[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (32))){
var inst_42324 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42350_42396 = state_42336__$1;
(statearr_42350_42396[(2)] = inst_42324);

(statearr_42350_42396[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (33))){
var inst_42311 = (state_42336[(2)]);
var inst_42312 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42313 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42312);
var state_42336__$1 = (function (){var statearr_42351 = state_42336;
(statearr_42351[(8)] = inst_42311);

return statearr_42351;
})();
var statearr_42352_42397 = state_42336__$1;
(statearr_42352_42397[(2)] = inst_42313);

(statearr_42352_42397[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (13))){
var inst_42270 = figwheel.client.heads_up.clear.call(null);
var state_42336__$1 = state_42336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42336__$1,(16),inst_42270);
} else {
if((state_val_42337 === (22))){
var inst_42291 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42292 = figwheel.client.heads_up.append_warning_message.call(null,inst_42291);
var state_42336__$1 = state_42336;
var statearr_42353_42398 = state_42336__$1;
(statearr_42353_42398[(2)] = inst_42292);

(statearr_42353_42398[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (36))){
var inst_42322 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42354_42399 = state_42336__$1;
(statearr_42354_42399[(2)] = inst_42322);

(statearr_42354_42399[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (29))){
var inst_42302 = (state_42336[(2)]);
var inst_42303 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42304 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42303);
var state_42336__$1 = (function (){var statearr_42355 = state_42336;
(statearr_42355[(9)] = inst_42302);

return statearr_42355;
})();
var statearr_42356_42400 = state_42336__$1;
(statearr_42356_42400[(2)] = inst_42304);

(statearr_42356_42400[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (6))){
var inst_42251 = (state_42336[(10)]);
var state_42336__$1 = state_42336;
var statearr_42357_42401 = state_42336__$1;
(statearr_42357_42401[(2)] = inst_42251);

(statearr_42357_42401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (28))){
var inst_42298 = (state_42336[(2)]);
var inst_42299 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42300 = figwheel.client.heads_up.display_warning.call(null,inst_42299);
var state_42336__$1 = (function (){var statearr_42358 = state_42336;
(statearr_42358[(11)] = inst_42298);

return statearr_42358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42336__$1,(29),inst_42300);
} else {
if((state_val_42337 === (25))){
var inst_42296 = figwheel.client.heads_up.clear.call(null);
var state_42336__$1 = state_42336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42336__$1,(28),inst_42296);
} else {
if((state_val_42337 === (34))){
var inst_42317 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42336__$1 = state_42336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42336__$1,(37),inst_42317);
} else {
if((state_val_42337 === (17))){
var inst_42276 = (state_42336[(2)]);
var inst_42277 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42278 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42277);
var state_42336__$1 = (function (){var statearr_42359 = state_42336;
(statearr_42359[(12)] = inst_42276);

return statearr_42359;
})();
var statearr_42360_42402 = state_42336__$1;
(statearr_42360_42402[(2)] = inst_42278);

(statearr_42360_42402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (3))){
var inst_42268 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42268)){
var statearr_42361_42403 = state_42336__$1;
(statearr_42361_42403[(1)] = (13));

} else {
var statearr_42362_42404 = state_42336__$1;
(statearr_42362_42404[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (12))){
var inst_42264 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42363_42405 = state_42336__$1;
(statearr_42363_42405[(2)] = inst_42264);

(statearr_42363_42405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (2))){
var inst_42251 = (state_42336[(10)]);
var inst_42251__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42336__$1 = (function (){var statearr_42364 = state_42336;
(statearr_42364[(10)] = inst_42251__$1);

return statearr_42364;
})();
if(cljs.core.truth_(inst_42251__$1)){
var statearr_42365_42406 = state_42336__$1;
(statearr_42365_42406[(1)] = (5));

} else {
var statearr_42366_42407 = state_42336__$1;
(statearr_42366_42407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (23))){
var inst_42294 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42294)){
var statearr_42367_42408 = state_42336__$1;
(statearr_42367_42408[(1)] = (25));

} else {
var statearr_42368_42409 = state_42336__$1;
(statearr_42368_42409[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (35))){
var state_42336__$1 = state_42336;
var statearr_42369_42410 = state_42336__$1;
(statearr_42369_42410[(2)] = null);

(statearr_42369_42410[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (19))){
var inst_42289 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42289)){
var statearr_42370_42411 = state_42336__$1;
(statearr_42370_42411[(1)] = (22));

} else {
var statearr_42371_42412 = state_42336__$1;
(statearr_42371_42412[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (11))){
var inst_42260 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42372_42413 = state_42336__$1;
(statearr_42372_42413[(2)] = inst_42260);

(statearr_42372_42413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (9))){
var inst_42262 = figwheel.client.heads_up.clear.call(null);
var state_42336__$1 = state_42336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42336__$1,(12),inst_42262);
} else {
if((state_val_42337 === (5))){
var inst_42253 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42336__$1 = state_42336;
var statearr_42373_42414 = state_42336__$1;
(statearr_42373_42414[(2)] = inst_42253);

(statearr_42373_42414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (14))){
var inst_42280 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42280)){
var statearr_42374_42415 = state_42336__$1;
(statearr_42374_42415[(1)] = (18));

} else {
var statearr_42375_42416 = state_42336__$1;
(statearr_42375_42416[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (26))){
var inst_42306 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42306)){
var statearr_42376_42417 = state_42336__$1;
(statearr_42376_42417[(1)] = (30));

} else {
var statearr_42377_42418 = state_42336__$1;
(statearr_42377_42418[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (16))){
var inst_42272 = (state_42336[(2)]);
var inst_42273 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42274 = figwheel.client.heads_up.display_exception.call(null,inst_42273);
var state_42336__$1 = (function (){var statearr_42378 = state_42336;
(statearr_42378[(13)] = inst_42272);

return statearr_42378;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42336__$1,(17),inst_42274);
} else {
if((state_val_42337 === (30))){
var inst_42308 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42309 = figwheel.client.heads_up.display_warning.call(null,inst_42308);
var state_42336__$1 = state_42336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42336__$1,(33),inst_42309);
} else {
if((state_val_42337 === (10))){
var inst_42266 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42379_42419 = state_42336__$1;
(statearr_42379_42419[(2)] = inst_42266);

(statearr_42379_42419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (18))){
var inst_42282 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42283 = figwheel.client.heads_up.display_exception.call(null,inst_42282);
var state_42336__$1 = state_42336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42336__$1,(21),inst_42283);
} else {
if((state_val_42337 === (37))){
var inst_42319 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42380_42420 = state_42336__$1;
(statearr_42380_42420[(2)] = inst_42319);

(statearr_42380_42420[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (8))){
var inst_42258 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42336__$1 = state_42336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42336__$1,(11),inst_42258);
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
});})(c__35248__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35158__auto__,c__35248__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35159__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35159__auto____0 = (function (){
var statearr_42381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42381[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35159__auto__);

(statearr_42381[(1)] = (1));

return statearr_42381;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35159__auto____1 = (function (state_42336){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_42336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e42382){if((e42382 instanceof Object)){
var ex__35162__auto__ = e42382;
var statearr_42383_42421 = state_42336;
(statearr_42383_42421[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42422 = state_42336;
state_42336 = G__42422;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35159__auto__ = function(state_42336){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35159__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35159__auto____1.call(this,state_42336);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35159__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35159__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto__,msg_hist,msg_names,msg))
})();
var state__35250__auto__ = (function (){var statearr_42384 = f__35249__auto__.call(null);
(statearr_42384[(6)] = c__35248__auto__);

return statearr_42384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto__,msg_hist,msg_names,msg))
);

return c__35248__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35248__auto___42451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___42451,ch){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___42451,ch){
return (function (state_42437){
var state_val_42438 = (state_42437[(1)]);
if((state_val_42438 === (1))){
var state_42437__$1 = state_42437;
var statearr_42439_42452 = state_42437__$1;
(statearr_42439_42452[(2)] = null);

(statearr_42439_42452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42438 === (2))){
var state_42437__$1 = state_42437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42437__$1,(4),ch);
} else {
if((state_val_42438 === (3))){
var inst_42435 = (state_42437[(2)]);
var state_42437__$1 = state_42437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42437__$1,inst_42435);
} else {
if((state_val_42438 === (4))){
var inst_42425 = (state_42437[(7)]);
var inst_42425__$1 = (state_42437[(2)]);
var state_42437__$1 = (function (){var statearr_42440 = state_42437;
(statearr_42440[(7)] = inst_42425__$1);

return statearr_42440;
})();
if(cljs.core.truth_(inst_42425__$1)){
var statearr_42441_42453 = state_42437__$1;
(statearr_42441_42453[(1)] = (5));

} else {
var statearr_42442_42454 = state_42437__$1;
(statearr_42442_42454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42438 === (5))){
var inst_42425 = (state_42437[(7)]);
var inst_42427 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42425);
var state_42437__$1 = state_42437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42437__$1,(8),inst_42427);
} else {
if((state_val_42438 === (6))){
var state_42437__$1 = state_42437;
var statearr_42443_42455 = state_42437__$1;
(statearr_42443_42455[(2)] = null);

(statearr_42443_42455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42438 === (7))){
var inst_42433 = (state_42437[(2)]);
var state_42437__$1 = state_42437;
var statearr_42444_42456 = state_42437__$1;
(statearr_42444_42456[(2)] = inst_42433);

(statearr_42444_42456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42438 === (8))){
var inst_42429 = (state_42437[(2)]);
var state_42437__$1 = (function (){var statearr_42445 = state_42437;
(statearr_42445[(8)] = inst_42429);

return statearr_42445;
})();
var statearr_42446_42457 = state_42437__$1;
(statearr_42446_42457[(2)] = null);

(statearr_42446_42457[(1)] = (2));


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
});})(c__35248__auto___42451,ch))
;
return ((function (switch__35158__auto__,c__35248__auto___42451,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35159__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35159__auto____0 = (function (){
var statearr_42447 = [null,null,null,null,null,null,null,null,null];
(statearr_42447[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35159__auto__);

(statearr_42447[(1)] = (1));

return statearr_42447;
});
var figwheel$client$heads_up_plugin_$_state_machine__35159__auto____1 = (function (state_42437){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_42437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e42448){if((e42448 instanceof Object)){
var ex__35162__auto__ = e42448;
var statearr_42449_42458 = state_42437;
(statearr_42449_42458[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42459 = state_42437;
state_42437 = G__42459;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35159__auto__ = function(state_42437){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35159__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35159__auto____1.call(this,state_42437);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35159__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35159__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___42451,ch))
})();
var state__35250__auto__ = (function (){var statearr_42450 = f__35249__auto__.call(null);
(statearr_42450[(6)] = c__35248__auto___42451);

return statearr_42450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___42451,ch))
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
var c__35248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto__){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto__){
return (function (state_42465){
var state_val_42466 = (state_42465[(1)]);
if((state_val_42466 === (1))){
var inst_42460 = cljs.core.async.timeout.call(null,(3000));
var state_42465__$1 = state_42465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42465__$1,(2),inst_42460);
} else {
if((state_val_42466 === (2))){
var inst_42462 = (state_42465[(2)]);
var inst_42463 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42465__$1 = (function (){var statearr_42467 = state_42465;
(statearr_42467[(7)] = inst_42462);

return statearr_42467;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42465__$1,inst_42463);
} else {
return null;
}
}
});})(c__35248__auto__))
;
return ((function (switch__35158__auto__,c__35248__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35159__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35159__auto____0 = (function (){
var statearr_42468 = [null,null,null,null,null,null,null,null];
(statearr_42468[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35159__auto__);

(statearr_42468[(1)] = (1));

return statearr_42468;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35159__auto____1 = (function (state_42465){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_42465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e42469){if((e42469 instanceof Object)){
var ex__35162__auto__ = e42469;
var statearr_42470_42472 = state_42465;
(statearr_42470_42472[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42473 = state_42465;
state_42465 = G__42473;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35159__auto__ = function(state_42465){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35159__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35159__auto____1.call(this,state_42465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35159__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35159__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto__))
})();
var state__35250__auto__ = (function (){var statearr_42471 = f__35249__auto__.call(null);
(statearr_42471[(6)] = c__35248__auto__);

return statearr_42471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto__))
);

return c__35248__auto__;
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
var c__35248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto__,figwheel_version,temp__5290__auto__){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto__,figwheel_version,temp__5290__auto__){
return (function (state_42480){
var state_val_42481 = (state_42480[(1)]);
if((state_val_42481 === (1))){
var inst_42474 = cljs.core.async.timeout.call(null,(2000));
var state_42480__$1 = state_42480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42480__$1,(2),inst_42474);
} else {
if((state_val_42481 === (2))){
var inst_42476 = (state_42480[(2)]);
var inst_42477 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_42478 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42477);
var state_42480__$1 = (function (){var statearr_42482 = state_42480;
(statearr_42482[(7)] = inst_42476);

return statearr_42482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42480__$1,inst_42478);
} else {
return null;
}
}
});})(c__35248__auto__,figwheel_version,temp__5290__auto__))
;
return ((function (switch__35158__auto__,c__35248__auto__,figwheel_version,temp__5290__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35159__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35159__auto____0 = (function (){
var statearr_42483 = [null,null,null,null,null,null,null,null];
(statearr_42483[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35159__auto__);

(statearr_42483[(1)] = (1));

return statearr_42483;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35159__auto____1 = (function (state_42480){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_42480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e42484){if((e42484 instanceof Object)){
var ex__35162__auto__ = e42484;
var statearr_42485_42487 = state_42480;
(statearr_42485_42487[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42488 = state_42480;
state_42480 = G__42488;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35159__auto__ = function(state_42480){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35159__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35159__auto____1.call(this,state_42480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35159__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35159__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto__,figwheel_version,temp__5290__auto__))
})();
var state__35250__auto__ = (function (){var statearr_42486 = f__35249__auto__.call(null);
(statearr_42486[(6)] = c__35248__auto__);

return statearr_42486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto__,figwheel_version,temp__5290__auto__))
);

return c__35248__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42489){
var map__42490 = p__42489;
var map__42490__$1 = ((((!((map__42490 == null)))?((((map__42490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42490):map__42490);
var file = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42492 = "";
var G__42492__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42492),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42492);
var G__42492__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42492__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42492__$1);
if(cljs.core.truth_((function (){var and__30237__auto__ = line;
if(cljs.core.truth_(and__30237__auto__)){
return column;
} else {
return and__30237__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42492__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42492__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42493){
var map__42494 = p__42493;
var map__42494__$1 = ((((!((map__42494 == null)))?((((map__42494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42494):map__42494);
var ed = map__42494__$1;
var formatted_exception = cljs.core.get.call(null,map__42494__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42494__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42494__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42496_42500 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42497_42501 = null;
var count__42498_42502 = (0);
var i__42499_42503 = (0);
while(true){
if((i__42499_42503 < count__42498_42502)){
var msg_42504 = cljs.core._nth.call(null,chunk__42497_42501,i__42499_42503);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42504);

var G__42505 = seq__42496_42500;
var G__42506 = chunk__42497_42501;
var G__42507 = count__42498_42502;
var G__42508 = (i__42499_42503 + (1));
seq__42496_42500 = G__42505;
chunk__42497_42501 = G__42506;
count__42498_42502 = G__42507;
i__42499_42503 = G__42508;
continue;
} else {
var temp__5290__auto___42509 = cljs.core.seq.call(null,seq__42496_42500);
if(temp__5290__auto___42509){
var seq__42496_42510__$1 = temp__5290__auto___42509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42496_42510__$1)){
var c__31180__auto___42511 = cljs.core.chunk_first.call(null,seq__42496_42510__$1);
var G__42512 = cljs.core.chunk_rest.call(null,seq__42496_42510__$1);
var G__42513 = c__31180__auto___42511;
var G__42514 = cljs.core.count.call(null,c__31180__auto___42511);
var G__42515 = (0);
seq__42496_42500 = G__42512;
chunk__42497_42501 = G__42513;
count__42498_42502 = G__42514;
i__42499_42503 = G__42515;
continue;
} else {
var msg_42516 = cljs.core.first.call(null,seq__42496_42510__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42516);

var G__42517 = cljs.core.next.call(null,seq__42496_42510__$1);
var G__42518 = null;
var G__42519 = (0);
var G__42520 = (0);
seq__42496_42500 = G__42517;
chunk__42497_42501 = G__42518;
count__42498_42502 = G__42519;
i__42499_42503 = G__42520;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42521){
var map__42522 = p__42521;
var map__42522__$1 = ((((!((map__42522 == null)))?((((map__42522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42522):map__42522);
var w = map__42522__$1;
var message = cljs.core.get.call(null,map__42522__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__30237__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30237__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30237__auto__;
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
var seq__42524 = cljs.core.seq.call(null,plugins);
var chunk__42525 = null;
var count__42526 = (0);
var i__42527 = (0);
while(true){
if((i__42527 < count__42526)){
var vec__42528 = cljs.core._nth.call(null,chunk__42525,i__42527);
var k = cljs.core.nth.call(null,vec__42528,(0),null);
var plugin = cljs.core.nth.call(null,vec__42528,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42534 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42524,chunk__42525,count__42526,i__42527,pl_42534,vec__42528,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42534.call(null,msg_hist);
});})(seq__42524,chunk__42525,count__42526,i__42527,pl_42534,vec__42528,k,plugin))
);
} else {
}

var G__42535 = seq__42524;
var G__42536 = chunk__42525;
var G__42537 = count__42526;
var G__42538 = (i__42527 + (1));
seq__42524 = G__42535;
chunk__42525 = G__42536;
count__42526 = G__42537;
i__42527 = G__42538;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__42524);
if(temp__5290__auto__){
var seq__42524__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42524__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__42524__$1);
var G__42539 = cljs.core.chunk_rest.call(null,seq__42524__$1);
var G__42540 = c__31180__auto__;
var G__42541 = cljs.core.count.call(null,c__31180__auto__);
var G__42542 = (0);
seq__42524 = G__42539;
chunk__42525 = G__42540;
count__42526 = G__42541;
i__42527 = G__42542;
continue;
} else {
var vec__42531 = cljs.core.first.call(null,seq__42524__$1);
var k = cljs.core.nth.call(null,vec__42531,(0),null);
var plugin = cljs.core.nth.call(null,vec__42531,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42543 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42524,chunk__42525,count__42526,i__42527,pl_42543,vec__42531,k,plugin,seq__42524__$1,temp__5290__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42543.call(null,msg_hist);
});})(seq__42524,chunk__42525,count__42526,i__42527,pl_42543,vec__42531,k,plugin,seq__42524__$1,temp__5290__auto__))
);
} else {
}

var G__42544 = cljs.core.next.call(null,seq__42524__$1);
var G__42545 = null;
var G__42546 = (0);
var G__42547 = (0);
seq__42524 = G__42544;
chunk__42525 = G__42545;
count__42526 = G__42546;
i__42527 = G__42547;
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
var G__42549 = arguments.length;
switch (G__42549) {
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

var seq__42550_42555 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42551_42556 = null;
var count__42552_42557 = (0);
var i__42553_42558 = (0);
while(true){
if((i__42553_42558 < count__42552_42557)){
var msg_42559 = cljs.core._nth.call(null,chunk__42551_42556,i__42553_42558);
figwheel.client.socket.handle_incoming_message.call(null,msg_42559);

var G__42560 = seq__42550_42555;
var G__42561 = chunk__42551_42556;
var G__42562 = count__42552_42557;
var G__42563 = (i__42553_42558 + (1));
seq__42550_42555 = G__42560;
chunk__42551_42556 = G__42561;
count__42552_42557 = G__42562;
i__42553_42558 = G__42563;
continue;
} else {
var temp__5290__auto___42564 = cljs.core.seq.call(null,seq__42550_42555);
if(temp__5290__auto___42564){
var seq__42550_42565__$1 = temp__5290__auto___42564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42550_42565__$1)){
var c__31180__auto___42566 = cljs.core.chunk_first.call(null,seq__42550_42565__$1);
var G__42567 = cljs.core.chunk_rest.call(null,seq__42550_42565__$1);
var G__42568 = c__31180__auto___42566;
var G__42569 = cljs.core.count.call(null,c__31180__auto___42566);
var G__42570 = (0);
seq__42550_42555 = G__42567;
chunk__42551_42556 = G__42568;
count__42552_42557 = G__42569;
i__42553_42558 = G__42570;
continue;
} else {
var msg_42571 = cljs.core.first.call(null,seq__42550_42565__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42571);

var G__42572 = cljs.core.next.call(null,seq__42550_42565__$1);
var G__42573 = null;
var G__42574 = (0);
var G__42575 = (0);
seq__42550_42555 = G__42572;
chunk__42551_42556 = G__42573;
count__42552_42557 = G__42574;
i__42553_42558 = G__42575;
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
var args__31533__auto__ = [];
var len__31526__auto___42580 = arguments.length;
var i__31527__auto___42581 = (0);
while(true){
if((i__31527__auto___42581 < len__31526__auto___42580)){
args__31533__auto__.push((arguments[i__31527__auto___42581]));

var G__42582 = (i__31527__auto___42581 + (1));
i__31527__auto___42581 = G__42582;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42577){
var map__42578 = p__42577;
var map__42578__$1 = ((((!((map__42578 == null)))?((((map__42578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42578):map__42578);
var opts = map__42578__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42576){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42576));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42583){if((e42583 instanceof Error)){
var e = e42583;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42583;

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
return (function (p__42584){
var map__42585 = p__42584;
var map__42585__$1 = ((((!((map__42585 == null)))?((((map__42585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42585):map__42585);
var msg_name = cljs.core.get.call(null,map__42585__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1506023649128
