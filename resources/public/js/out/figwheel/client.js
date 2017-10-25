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
}catch (e50144){if((e50144 instanceof Error)){
var e = e50144;
return "Error: Unable to stringify";
} else {
throw e50144;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__50147 = arguments.length;
switch (G__50147) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__50145_SHARP_){
if(typeof p1__50145_SHARP_ === 'string'){
return p1__50145_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__50145_SHARP_);
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
var len__31526__auto___50150 = arguments.length;
var i__31527__auto___50151 = (0);
while(true){
if((i__31527__auto___50151 < len__31526__auto___50150)){
args__31533__auto__.push((arguments[i__31527__auto___50151]));

var G__50152 = (i__31527__auto___50151 + (1));
i__31527__auto___50151 = G__50152;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq50149){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50149));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31533__auto__ = [];
var len__31526__auto___50154 = arguments.length;
var i__31527__auto___50155 = (0);
while(true){
if((i__31527__auto___50155 < len__31526__auto___50154)){
args__31533__auto__.push((arguments[i__31527__auto___50155]));

var G__50156 = (i__31527__auto___50155 + (1));
i__31527__auto___50155 = G__50156;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq50153){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50153));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50157){
var map__50158 = p__50157;
var map__50158__$1 = ((((!((map__50158 == null)))?((((map__50158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50158):map__50158);
var message = cljs.core.get.call(null,map__50158__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50158__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__46922__auto___50237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___50237,ch){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___50237,ch){
return (function (state_50209){
var state_val_50210 = (state_50209[(1)]);
if((state_val_50210 === (7))){
var inst_50205 = (state_50209[(2)]);
var state_50209__$1 = state_50209;
var statearr_50211_50238 = state_50209__$1;
(statearr_50211_50238[(2)] = inst_50205);

(statearr_50211_50238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50210 === (1))){
var state_50209__$1 = state_50209;
var statearr_50212_50239 = state_50209__$1;
(statearr_50212_50239[(2)] = null);

(statearr_50212_50239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50210 === (4))){
var inst_50162 = (state_50209[(7)]);
var inst_50162__$1 = (state_50209[(2)]);
var state_50209__$1 = (function (){var statearr_50213 = state_50209;
(statearr_50213[(7)] = inst_50162__$1);

return statearr_50213;
})();
if(cljs.core.truth_(inst_50162__$1)){
var statearr_50214_50240 = state_50209__$1;
(statearr_50214_50240[(1)] = (5));

} else {
var statearr_50215_50241 = state_50209__$1;
(statearr_50215_50241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50210 === (15))){
var inst_50169 = (state_50209[(8)]);
var inst_50184 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50169);
var inst_50185 = cljs.core.first.call(null,inst_50184);
var inst_50186 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50185);
var inst_50187 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50186)].join('');
var inst_50188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50187);
var state_50209__$1 = state_50209;
var statearr_50216_50242 = state_50209__$1;
(statearr_50216_50242[(2)] = inst_50188);

(statearr_50216_50242[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50210 === (13))){
var inst_50193 = (state_50209[(2)]);
var state_50209__$1 = state_50209;
var statearr_50217_50243 = state_50209__$1;
(statearr_50217_50243[(2)] = inst_50193);

(statearr_50217_50243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50210 === (6))){
var state_50209__$1 = state_50209;
var statearr_50218_50244 = state_50209__$1;
(statearr_50218_50244[(2)] = null);

(statearr_50218_50244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50210 === (17))){
var inst_50191 = (state_50209[(2)]);
var state_50209__$1 = state_50209;
var statearr_50219_50245 = state_50209__$1;
(statearr_50219_50245[(2)] = inst_50191);

(statearr_50219_50245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50210 === (3))){
var inst_50207 = (state_50209[(2)]);
var state_50209__$1 = state_50209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50209__$1,inst_50207);
} else {
if((state_val_50210 === (12))){
var inst_50168 = (state_50209[(9)]);
var inst_50182 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50168,opts);
var state_50209__$1 = state_50209;
if(cljs.core.truth_(inst_50182)){
var statearr_50220_50246 = state_50209__$1;
(statearr_50220_50246[(1)] = (15));

} else {
var statearr_50221_50247 = state_50209__$1;
(statearr_50221_50247[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50210 === (2))){
var state_50209__$1 = state_50209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50209__$1,(4),ch);
} else {
if((state_val_50210 === (11))){
var inst_50169 = (state_50209[(8)]);
var inst_50174 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50175 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50169);
var inst_50176 = cljs.core.async.timeout.call(null,(1000));
var inst_50177 = [inst_50175,inst_50176];
var inst_50178 = (new cljs.core.PersistentVector(null,2,(5),inst_50174,inst_50177,null));
var state_50209__$1 = state_50209;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50209__$1,(14),inst_50178);
} else {
if((state_val_50210 === (9))){
var inst_50169 = (state_50209[(8)]);
var inst_50195 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50196 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50169);
var inst_50197 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50196);
var inst_50198 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50197)].join('');
var inst_50199 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50198);
var state_50209__$1 = (function (){var statearr_50222 = state_50209;
(statearr_50222[(10)] = inst_50195);

return statearr_50222;
})();
var statearr_50223_50248 = state_50209__$1;
(statearr_50223_50248[(2)] = inst_50199);

(statearr_50223_50248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50210 === (5))){
var inst_50162 = (state_50209[(7)]);
var inst_50164 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50165 = (new cljs.core.PersistentArrayMap(null,2,inst_50164,null));
var inst_50166 = (new cljs.core.PersistentHashSet(null,inst_50165,null));
var inst_50167 = figwheel.client.focus_msgs.call(null,inst_50166,inst_50162);
var inst_50168 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50167);
var inst_50169 = cljs.core.first.call(null,inst_50167);
var inst_50170 = figwheel.client.autoload_QMARK_.call(null);
var state_50209__$1 = (function (){var statearr_50224 = state_50209;
(statearr_50224[(8)] = inst_50169);

(statearr_50224[(9)] = inst_50168);

return statearr_50224;
})();
if(cljs.core.truth_(inst_50170)){
var statearr_50225_50249 = state_50209__$1;
(statearr_50225_50249[(1)] = (8));

} else {
var statearr_50226_50250 = state_50209__$1;
(statearr_50226_50250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50210 === (14))){
var inst_50180 = (state_50209[(2)]);
var state_50209__$1 = state_50209;
var statearr_50227_50251 = state_50209__$1;
(statearr_50227_50251[(2)] = inst_50180);

(statearr_50227_50251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50210 === (16))){
var state_50209__$1 = state_50209;
var statearr_50228_50252 = state_50209__$1;
(statearr_50228_50252[(2)] = null);

(statearr_50228_50252[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50210 === (10))){
var inst_50201 = (state_50209[(2)]);
var state_50209__$1 = (function (){var statearr_50229 = state_50209;
(statearr_50229[(11)] = inst_50201);

return statearr_50229;
})();
var statearr_50230_50253 = state_50209__$1;
(statearr_50230_50253[(2)] = null);

(statearr_50230_50253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50210 === (8))){
var inst_50168 = (state_50209[(9)]);
var inst_50172 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50168,opts);
var state_50209__$1 = state_50209;
if(cljs.core.truth_(inst_50172)){
var statearr_50231_50254 = state_50209__$1;
(statearr_50231_50254[(1)] = (11));

} else {
var statearr_50232_50255 = state_50209__$1;
(statearr_50232_50255[(1)] = (12));

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
});})(c__46922__auto___50237,ch))
;
return ((function (switch__46832__auto__,c__46922__auto___50237,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__46833__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__46833__auto____0 = (function (){
var statearr_50233 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50233[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__46833__auto__);

(statearr_50233[(1)] = (1));

return statearr_50233;
});
var figwheel$client$file_reloader_plugin_$_state_machine__46833__auto____1 = (function (state_50209){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_50209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e50234){if((e50234 instanceof Object)){
var ex__46836__auto__ = e50234;
var statearr_50235_50256 = state_50209;
(statearr_50235_50256[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50257 = state_50209;
state_50209 = G__50257;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__46833__auto__ = function(state_50209){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__46833__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__46833__auto____1.call(this,state_50209);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__46833__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__46833__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___50237,ch))
})();
var state__46924__auto__ = (function (){var statearr_50236 = f__46923__auto__.call(null);
(statearr_50236[(6)] = c__46922__auto___50237);

return statearr_50236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___50237,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50258_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50258_SHARP_));
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
var base_path_50260 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50260){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e50259){if((e50259 instanceof Error)){
var e = e50259;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50260], null));
} else {
var e = e50259;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_50260))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50261){
var map__50262 = p__50261;
var map__50262__$1 = ((((!((map__50262 == null)))?((((map__50262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50262):map__50262);
var opts = map__50262__$1;
var build_id = cljs.core.get.call(null,map__50262__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50262,map__50262__$1,opts,build_id){
return (function (p__50264){
var vec__50265 = p__50264;
var seq__50266 = cljs.core.seq.call(null,vec__50265);
var first__50267 = cljs.core.first.call(null,seq__50266);
var seq__50266__$1 = cljs.core.next.call(null,seq__50266);
var map__50268 = first__50267;
var map__50268__$1 = ((((!((map__50268 == null)))?((((map__50268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50268):map__50268);
var msg = map__50268__$1;
var msg_name = cljs.core.get.call(null,map__50268__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50266__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50265,seq__50266,first__50267,seq__50266__$1,map__50268,map__50268__$1,msg,msg_name,_,map__50262,map__50262__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50265,seq__50266,first__50267,seq__50266__$1,map__50268,map__50268__$1,msg,msg_name,_,map__50262,map__50262__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__50262,map__50262__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50270){
var vec__50271 = p__50270;
var seq__50272 = cljs.core.seq.call(null,vec__50271);
var first__50273 = cljs.core.first.call(null,seq__50272);
var seq__50272__$1 = cljs.core.next.call(null,seq__50272);
var map__50274 = first__50273;
var map__50274__$1 = ((((!((map__50274 == null)))?((((map__50274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50274):map__50274);
var msg = map__50274__$1;
var msg_name = cljs.core.get.call(null,map__50274__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50272__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50276){
var map__50277 = p__50276;
var map__50277__$1 = ((((!((map__50277 == null)))?((((map__50277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50277):map__50277);
var on_compile_warning = cljs.core.get.call(null,map__50277__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50277__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50277,map__50277__$1,on_compile_warning,on_compile_fail){
return (function (p__50279){
var vec__50280 = p__50279;
var seq__50281 = cljs.core.seq.call(null,vec__50280);
var first__50282 = cljs.core.first.call(null,seq__50281);
var seq__50281__$1 = cljs.core.next.call(null,seq__50281);
var map__50283 = first__50282;
var map__50283__$1 = ((((!((map__50283 == null)))?((((map__50283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50283):map__50283);
var msg = map__50283__$1;
var msg_name = cljs.core.get.call(null,map__50283__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50281__$1;
var pred__50285 = cljs.core._EQ_;
var expr__50286 = msg_name;
if(cljs.core.truth_(pred__50285.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50286))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50285.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50286))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__50277,map__50277__$1,on_compile_warning,on_compile_fail))
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
var c__46922__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto__,msg_hist,msg_names,msg){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto__,msg_hist,msg_names,msg){
return (function (state_50375){
var state_val_50376 = (state_50375[(1)]);
if((state_val_50376 === (7))){
var inst_50295 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
if(cljs.core.truth_(inst_50295)){
var statearr_50377_50424 = state_50375__$1;
(statearr_50377_50424[(1)] = (8));

} else {
var statearr_50378_50425 = state_50375__$1;
(statearr_50378_50425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (20))){
var inst_50369 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50379_50426 = state_50375__$1;
(statearr_50379_50426[(2)] = inst_50369);

(statearr_50379_50426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (27))){
var inst_50365 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50380_50427 = state_50375__$1;
(statearr_50380_50427[(2)] = inst_50365);

(statearr_50380_50427[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (1))){
var inst_50288 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50375__$1 = state_50375;
if(cljs.core.truth_(inst_50288)){
var statearr_50381_50428 = state_50375__$1;
(statearr_50381_50428[(1)] = (2));

} else {
var statearr_50382_50429 = state_50375__$1;
(statearr_50382_50429[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (24))){
var inst_50367 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50383_50430 = state_50375__$1;
(statearr_50383_50430[(2)] = inst_50367);

(statearr_50383_50430[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (4))){
var inst_50373 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50375__$1,inst_50373);
} else {
if((state_val_50376 === (15))){
var inst_50371 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50384_50431 = state_50375__$1;
(statearr_50384_50431[(2)] = inst_50371);

(statearr_50384_50431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (21))){
var inst_50324 = (state_50375[(2)]);
var inst_50325 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50326 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50325);
var state_50375__$1 = (function (){var statearr_50385 = state_50375;
(statearr_50385[(7)] = inst_50324);

return statearr_50385;
})();
var statearr_50386_50432 = state_50375__$1;
(statearr_50386_50432[(2)] = inst_50326);

(statearr_50386_50432[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (31))){
var inst_50354 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50375__$1 = state_50375;
if(cljs.core.truth_(inst_50354)){
var statearr_50387_50433 = state_50375__$1;
(statearr_50387_50433[(1)] = (34));

} else {
var statearr_50388_50434 = state_50375__$1;
(statearr_50388_50434[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (32))){
var inst_50363 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50389_50435 = state_50375__$1;
(statearr_50389_50435[(2)] = inst_50363);

(statearr_50389_50435[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (33))){
var inst_50350 = (state_50375[(2)]);
var inst_50351 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50352 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50351);
var state_50375__$1 = (function (){var statearr_50390 = state_50375;
(statearr_50390[(8)] = inst_50350);

return statearr_50390;
})();
var statearr_50391_50436 = state_50375__$1;
(statearr_50391_50436[(2)] = inst_50352);

(statearr_50391_50436[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (13))){
var inst_50309 = figwheel.client.heads_up.clear.call(null);
var state_50375__$1 = state_50375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50375__$1,(16),inst_50309);
} else {
if((state_val_50376 === (22))){
var inst_50330 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50331 = figwheel.client.heads_up.append_warning_message.call(null,inst_50330);
var state_50375__$1 = state_50375;
var statearr_50392_50437 = state_50375__$1;
(statearr_50392_50437[(2)] = inst_50331);

(statearr_50392_50437[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (36))){
var inst_50361 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50393_50438 = state_50375__$1;
(statearr_50393_50438[(2)] = inst_50361);

(statearr_50393_50438[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (29))){
var inst_50341 = (state_50375[(2)]);
var inst_50342 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50343 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50342);
var state_50375__$1 = (function (){var statearr_50394 = state_50375;
(statearr_50394[(9)] = inst_50341);

return statearr_50394;
})();
var statearr_50395_50439 = state_50375__$1;
(statearr_50395_50439[(2)] = inst_50343);

(statearr_50395_50439[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (6))){
var inst_50290 = (state_50375[(10)]);
var state_50375__$1 = state_50375;
var statearr_50396_50440 = state_50375__$1;
(statearr_50396_50440[(2)] = inst_50290);

(statearr_50396_50440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (28))){
var inst_50337 = (state_50375[(2)]);
var inst_50338 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50339 = figwheel.client.heads_up.display_warning.call(null,inst_50338);
var state_50375__$1 = (function (){var statearr_50397 = state_50375;
(statearr_50397[(11)] = inst_50337);

return statearr_50397;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50375__$1,(29),inst_50339);
} else {
if((state_val_50376 === (25))){
var inst_50335 = figwheel.client.heads_up.clear.call(null);
var state_50375__$1 = state_50375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50375__$1,(28),inst_50335);
} else {
if((state_val_50376 === (34))){
var inst_50356 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50375__$1 = state_50375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50375__$1,(37),inst_50356);
} else {
if((state_val_50376 === (17))){
var inst_50315 = (state_50375[(2)]);
var inst_50316 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50317 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50316);
var state_50375__$1 = (function (){var statearr_50398 = state_50375;
(statearr_50398[(12)] = inst_50315);

return statearr_50398;
})();
var statearr_50399_50441 = state_50375__$1;
(statearr_50399_50441[(2)] = inst_50317);

(statearr_50399_50441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (3))){
var inst_50307 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50375__$1 = state_50375;
if(cljs.core.truth_(inst_50307)){
var statearr_50400_50442 = state_50375__$1;
(statearr_50400_50442[(1)] = (13));

} else {
var statearr_50401_50443 = state_50375__$1;
(statearr_50401_50443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (12))){
var inst_50303 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50402_50444 = state_50375__$1;
(statearr_50402_50444[(2)] = inst_50303);

(statearr_50402_50444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (2))){
var inst_50290 = (state_50375[(10)]);
var inst_50290__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50375__$1 = (function (){var statearr_50403 = state_50375;
(statearr_50403[(10)] = inst_50290__$1);

return statearr_50403;
})();
if(cljs.core.truth_(inst_50290__$1)){
var statearr_50404_50445 = state_50375__$1;
(statearr_50404_50445[(1)] = (5));

} else {
var statearr_50405_50446 = state_50375__$1;
(statearr_50405_50446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (23))){
var inst_50333 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50375__$1 = state_50375;
if(cljs.core.truth_(inst_50333)){
var statearr_50406_50447 = state_50375__$1;
(statearr_50406_50447[(1)] = (25));

} else {
var statearr_50407_50448 = state_50375__$1;
(statearr_50407_50448[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (35))){
var state_50375__$1 = state_50375;
var statearr_50408_50449 = state_50375__$1;
(statearr_50408_50449[(2)] = null);

(statearr_50408_50449[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (19))){
var inst_50328 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50375__$1 = state_50375;
if(cljs.core.truth_(inst_50328)){
var statearr_50409_50450 = state_50375__$1;
(statearr_50409_50450[(1)] = (22));

} else {
var statearr_50410_50451 = state_50375__$1;
(statearr_50410_50451[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (11))){
var inst_50299 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50411_50452 = state_50375__$1;
(statearr_50411_50452[(2)] = inst_50299);

(statearr_50411_50452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (9))){
var inst_50301 = figwheel.client.heads_up.clear.call(null);
var state_50375__$1 = state_50375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50375__$1,(12),inst_50301);
} else {
if((state_val_50376 === (5))){
var inst_50292 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50375__$1 = state_50375;
var statearr_50412_50453 = state_50375__$1;
(statearr_50412_50453[(2)] = inst_50292);

(statearr_50412_50453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (14))){
var inst_50319 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50375__$1 = state_50375;
if(cljs.core.truth_(inst_50319)){
var statearr_50413_50454 = state_50375__$1;
(statearr_50413_50454[(1)] = (18));

} else {
var statearr_50414_50455 = state_50375__$1;
(statearr_50414_50455[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (26))){
var inst_50345 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50375__$1 = state_50375;
if(cljs.core.truth_(inst_50345)){
var statearr_50415_50456 = state_50375__$1;
(statearr_50415_50456[(1)] = (30));

} else {
var statearr_50416_50457 = state_50375__$1;
(statearr_50416_50457[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (16))){
var inst_50311 = (state_50375[(2)]);
var inst_50312 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50313 = figwheel.client.heads_up.display_exception.call(null,inst_50312);
var state_50375__$1 = (function (){var statearr_50417 = state_50375;
(statearr_50417[(13)] = inst_50311);

return statearr_50417;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50375__$1,(17),inst_50313);
} else {
if((state_val_50376 === (30))){
var inst_50347 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50348 = figwheel.client.heads_up.display_warning.call(null,inst_50347);
var state_50375__$1 = state_50375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50375__$1,(33),inst_50348);
} else {
if((state_val_50376 === (10))){
var inst_50305 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50418_50458 = state_50375__$1;
(statearr_50418_50458[(2)] = inst_50305);

(statearr_50418_50458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (18))){
var inst_50321 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50322 = figwheel.client.heads_up.display_exception.call(null,inst_50321);
var state_50375__$1 = state_50375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50375__$1,(21),inst_50322);
} else {
if((state_val_50376 === (37))){
var inst_50358 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50419_50459 = state_50375__$1;
(statearr_50419_50459[(2)] = inst_50358);

(statearr_50419_50459[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (8))){
var inst_50297 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50375__$1 = state_50375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50375__$1,(11),inst_50297);
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
});})(c__46922__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__46832__auto__,c__46922__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46833__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46833__auto____0 = (function (){
var statearr_50420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50420[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46833__auto__);

(statearr_50420[(1)] = (1));

return statearr_50420;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46833__auto____1 = (function (state_50375){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_50375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e50421){if((e50421 instanceof Object)){
var ex__46836__auto__ = e50421;
var statearr_50422_50460 = state_50375;
(statearr_50422_50460[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50461 = state_50375;
state_50375 = G__50461;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46833__auto__ = function(state_50375){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46833__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46833__auto____1.call(this,state_50375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46833__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46833__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto__,msg_hist,msg_names,msg))
})();
var state__46924__auto__ = (function (){var statearr_50423 = f__46923__auto__.call(null);
(statearr_50423[(6)] = c__46922__auto__);

return statearr_50423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto__,msg_hist,msg_names,msg))
);

return c__46922__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__46922__auto___50490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___50490,ch){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___50490,ch){
return (function (state_50476){
var state_val_50477 = (state_50476[(1)]);
if((state_val_50477 === (1))){
var state_50476__$1 = state_50476;
var statearr_50478_50491 = state_50476__$1;
(statearr_50478_50491[(2)] = null);

(statearr_50478_50491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50477 === (2))){
var state_50476__$1 = state_50476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50476__$1,(4),ch);
} else {
if((state_val_50477 === (3))){
var inst_50474 = (state_50476[(2)]);
var state_50476__$1 = state_50476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50476__$1,inst_50474);
} else {
if((state_val_50477 === (4))){
var inst_50464 = (state_50476[(7)]);
var inst_50464__$1 = (state_50476[(2)]);
var state_50476__$1 = (function (){var statearr_50479 = state_50476;
(statearr_50479[(7)] = inst_50464__$1);

return statearr_50479;
})();
if(cljs.core.truth_(inst_50464__$1)){
var statearr_50480_50492 = state_50476__$1;
(statearr_50480_50492[(1)] = (5));

} else {
var statearr_50481_50493 = state_50476__$1;
(statearr_50481_50493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50477 === (5))){
var inst_50464 = (state_50476[(7)]);
var inst_50466 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50464);
var state_50476__$1 = state_50476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50476__$1,(8),inst_50466);
} else {
if((state_val_50477 === (6))){
var state_50476__$1 = state_50476;
var statearr_50482_50494 = state_50476__$1;
(statearr_50482_50494[(2)] = null);

(statearr_50482_50494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50477 === (7))){
var inst_50472 = (state_50476[(2)]);
var state_50476__$1 = state_50476;
var statearr_50483_50495 = state_50476__$1;
(statearr_50483_50495[(2)] = inst_50472);

(statearr_50483_50495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50477 === (8))){
var inst_50468 = (state_50476[(2)]);
var state_50476__$1 = (function (){var statearr_50484 = state_50476;
(statearr_50484[(8)] = inst_50468);

return statearr_50484;
})();
var statearr_50485_50496 = state_50476__$1;
(statearr_50485_50496[(2)] = null);

(statearr_50485_50496[(1)] = (2));


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
});})(c__46922__auto___50490,ch))
;
return ((function (switch__46832__auto__,c__46922__auto___50490,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__46833__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__46833__auto____0 = (function (){
var statearr_50486 = [null,null,null,null,null,null,null,null,null];
(statearr_50486[(0)] = figwheel$client$heads_up_plugin_$_state_machine__46833__auto__);

(statearr_50486[(1)] = (1));

return statearr_50486;
});
var figwheel$client$heads_up_plugin_$_state_machine__46833__auto____1 = (function (state_50476){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_50476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e50487){if((e50487 instanceof Object)){
var ex__46836__auto__ = e50487;
var statearr_50488_50497 = state_50476;
(statearr_50488_50497[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50498 = state_50476;
state_50476 = G__50498;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__46833__auto__ = function(state_50476){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__46833__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__46833__auto____1.call(this,state_50476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__46833__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__46833__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___50490,ch))
})();
var state__46924__auto__ = (function (){var statearr_50489 = f__46923__auto__.call(null);
(statearr_50489[(6)] = c__46922__auto___50490);

return statearr_50489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___50490,ch))
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
var c__46922__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto__){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto__){
return (function (state_50504){
var state_val_50505 = (state_50504[(1)]);
if((state_val_50505 === (1))){
var inst_50499 = cljs.core.async.timeout.call(null,(3000));
var state_50504__$1 = state_50504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50504__$1,(2),inst_50499);
} else {
if((state_val_50505 === (2))){
var inst_50501 = (state_50504[(2)]);
var inst_50502 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50504__$1 = (function (){var statearr_50506 = state_50504;
(statearr_50506[(7)] = inst_50501);

return statearr_50506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50504__$1,inst_50502);
} else {
return null;
}
}
});})(c__46922__auto__))
;
return ((function (switch__46832__auto__,c__46922__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__46833__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__46833__auto____0 = (function (){
var statearr_50507 = [null,null,null,null,null,null,null,null];
(statearr_50507[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__46833__auto__);

(statearr_50507[(1)] = (1));

return statearr_50507;
});
var figwheel$client$enforce_project_plugin_$_state_machine__46833__auto____1 = (function (state_50504){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_50504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e50508){if((e50508 instanceof Object)){
var ex__46836__auto__ = e50508;
var statearr_50509_50511 = state_50504;
(statearr_50509_50511[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50512 = state_50504;
state_50504 = G__50512;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__46833__auto__ = function(state_50504){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__46833__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__46833__auto____1.call(this,state_50504);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__46833__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__46833__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto__))
})();
var state__46924__auto__ = (function (){var statearr_50510 = f__46923__auto__.call(null);
(statearr_50510[(6)] = c__46922__auto__);

return statearr_50510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto__))
);

return c__46922__auto__;
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
var c__46922__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto__,figwheel_version,temp__5290__auto__){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto__,figwheel_version,temp__5290__auto__){
return (function (state_50519){
var state_val_50520 = (state_50519[(1)]);
if((state_val_50520 === (1))){
var inst_50513 = cljs.core.async.timeout.call(null,(2000));
var state_50519__$1 = state_50519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50519__$1,(2),inst_50513);
} else {
if((state_val_50520 === (2))){
var inst_50515 = (state_50519[(2)]);
var inst_50516 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_50517 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50516);
var state_50519__$1 = (function (){var statearr_50521 = state_50519;
(statearr_50521[(7)] = inst_50515);

return statearr_50521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50519__$1,inst_50517);
} else {
return null;
}
}
});})(c__46922__auto__,figwheel_version,temp__5290__auto__))
;
return ((function (switch__46832__auto__,c__46922__auto__,figwheel_version,temp__5290__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46833__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46833__auto____0 = (function (){
var statearr_50522 = [null,null,null,null,null,null,null,null];
(statearr_50522[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46833__auto__);

(statearr_50522[(1)] = (1));

return statearr_50522;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46833__auto____1 = (function (state_50519){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_50519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e50523){if((e50523 instanceof Object)){
var ex__46836__auto__ = e50523;
var statearr_50524_50526 = state_50519;
(statearr_50524_50526[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50527 = state_50519;
state_50519 = G__50527;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46833__auto__ = function(state_50519){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46833__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46833__auto____1.call(this,state_50519);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46833__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46833__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto__,figwheel_version,temp__5290__auto__))
})();
var state__46924__auto__ = (function (){var statearr_50525 = f__46923__auto__.call(null);
(statearr_50525[(6)] = c__46922__auto__);

return statearr_50525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto__,figwheel_version,temp__5290__auto__))
);

return c__46922__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50528){
var map__50529 = p__50528;
var map__50529__$1 = ((((!((map__50529 == null)))?((((map__50529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50529):map__50529);
var file = cljs.core.get.call(null,map__50529__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50529__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50529__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50531 = "";
var G__50531__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50531),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50531);
var G__50531__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50531__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50531__$1);
if(cljs.core.truth_((function (){var and__30237__auto__ = line;
if(cljs.core.truth_(and__30237__auto__)){
return column;
} else {
return and__30237__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50531__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50531__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50532){
var map__50533 = p__50532;
var map__50533__$1 = ((((!((map__50533 == null)))?((((map__50533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50533):map__50533);
var ed = map__50533__$1;
var formatted_exception = cljs.core.get.call(null,map__50533__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50533__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50533__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50535_50539 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50536_50540 = null;
var count__50537_50541 = (0);
var i__50538_50542 = (0);
while(true){
if((i__50538_50542 < count__50537_50541)){
var msg_50543 = cljs.core._nth.call(null,chunk__50536_50540,i__50538_50542);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50543);

var G__50544 = seq__50535_50539;
var G__50545 = chunk__50536_50540;
var G__50546 = count__50537_50541;
var G__50547 = (i__50538_50542 + (1));
seq__50535_50539 = G__50544;
chunk__50536_50540 = G__50545;
count__50537_50541 = G__50546;
i__50538_50542 = G__50547;
continue;
} else {
var temp__5290__auto___50548 = cljs.core.seq.call(null,seq__50535_50539);
if(temp__5290__auto___50548){
var seq__50535_50549__$1 = temp__5290__auto___50548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50535_50549__$1)){
var c__31180__auto___50550 = cljs.core.chunk_first.call(null,seq__50535_50549__$1);
var G__50551 = cljs.core.chunk_rest.call(null,seq__50535_50549__$1);
var G__50552 = c__31180__auto___50550;
var G__50553 = cljs.core.count.call(null,c__31180__auto___50550);
var G__50554 = (0);
seq__50535_50539 = G__50551;
chunk__50536_50540 = G__50552;
count__50537_50541 = G__50553;
i__50538_50542 = G__50554;
continue;
} else {
var msg_50555 = cljs.core.first.call(null,seq__50535_50549__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50555);

var G__50556 = cljs.core.next.call(null,seq__50535_50549__$1);
var G__50557 = null;
var G__50558 = (0);
var G__50559 = (0);
seq__50535_50539 = G__50556;
chunk__50536_50540 = G__50557;
count__50537_50541 = G__50558;
i__50538_50542 = G__50559;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50560){
var map__50561 = p__50560;
var map__50561__$1 = ((((!((map__50561 == null)))?((((map__50561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50561):map__50561);
var w = map__50561__$1;
var message = cljs.core.get.call(null,map__50561__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__50563 = cljs.core.seq.call(null,plugins);
var chunk__50564 = null;
var count__50565 = (0);
var i__50566 = (0);
while(true){
if((i__50566 < count__50565)){
var vec__50567 = cljs.core._nth.call(null,chunk__50564,i__50566);
var k = cljs.core.nth.call(null,vec__50567,(0),null);
var plugin = cljs.core.nth.call(null,vec__50567,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50573 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50563,chunk__50564,count__50565,i__50566,pl_50573,vec__50567,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50573.call(null,msg_hist);
});})(seq__50563,chunk__50564,count__50565,i__50566,pl_50573,vec__50567,k,plugin))
);
} else {
}

var G__50574 = seq__50563;
var G__50575 = chunk__50564;
var G__50576 = count__50565;
var G__50577 = (i__50566 + (1));
seq__50563 = G__50574;
chunk__50564 = G__50575;
count__50565 = G__50576;
i__50566 = G__50577;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__50563);
if(temp__5290__auto__){
var seq__50563__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50563__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__50563__$1);
var G__50578 = cljs.core.chunk_rest.call(null,seq__50563__$1);
var G__50579 = c__31180__auto__;
var G__50580 = cljs.core.count.call(null,c__31180__auto__);
var G__50581 = (0);
seq__50563 = G__50578;
chunk__50564 = G__50579;
count__50565 = G__50580;
i__50566 = G__50581;
continue;
} else {
var vec__50570 = cljs.core.first.call(null,seq__50563__$1);
var k = cljs.core.nth.call(null,vec__50570,(0),null);
var plugin = cljs.core.nth.call(null,vec__50570,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50582 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50563,chunk__50564,count__50565,i__50566,pl_50582,vec__50570,k,plugin,seq__50563__$1,temp__5290__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50582.call(null,msg_hist);
});})(seq__50563,chunk__50564,count__50565,i__50566,pl_50582,vec__50570,k,plugin,seq__50563__$1,temp__5290__auto__))
);
} else {
}

var G__50583 = cljs.core.next.call(null,seq__50563__$1);
var G__50584 = null;
var G__50585 = (0);
var G__50586 = (0);
seq__50563 = G__50583;
chunk__50564 = G__50584;
count__50565 = G__50585;
i__50566 = G__50586;
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
var G__50588 = arguments.length;
switch (G__50588) {
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

var seq__50589_50594 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50590_50595 = null;
var count__50591_50596 = (0);
var i__50592_50597 = (0);
while(true){
if((i__50592_50597 < count__50591_50596)){
var msg_50598 = cljs.core._nth.call(null,chunk__50590_50595,i__50592_50597);
figwheel.client.socket.handle_incoming_message.call(null,msg_50598);

var G__50599 = seq__50589_50594;
var G__50600 = chunk__50590_50595;
var G__50601 = count__50591_50596;
var G__50602 = (i__50592_50597 + (1));
seq__50589_50594 = G__50599;
chunk__50590_50595 = G__50600;
count__50591_50596 = G__50601;
i__50592_50597 = G__50602;
continue;
} else {
var temp__5290__auto___50603 = cljs.core.seq.call(null,seq__50589_50594);
if(temp__5290__auto___50603){
var seq__50589_50604__$1 = temp__5290__auto___50603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50589_50604__$1)){
var c__31180__auto___50605 = cljs.core.chunk_first.call(null,seq__50589_50604__$1);
var G__50606 = cljs.core.chunk_rest.call(null,seq__50589_50604__$1);
var G__50607 = c__31180__auto___50605;
var G__50608 = cljs.core.count.call(null,c__31180__auto___50605);
var G__50609 = (0);
seq__50589_50594 = G__50606;
chunk__50590_50595 = G__50607;
count__50591_50596 = G__50608;
i__50592_50597 = G__50609;
continue;
} else {
var msg_50610 = cljs.core.first.call(null,seq__50589_50604__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50610);

var G__50611 = cljs.core.next.call(null,seq__50589_50604__$1);
var G__50612 = null;
var G__50613 = (0);
var G__50614 = (0);
seq__50589_50594 = G__50611;
chunk__50590_50595 = G__50612;
count__50591_50596 = G__50613;
i__50592_50597 = G__50614;
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
var len__31526__auto___50619 = arguments.length;
var i__31527__auto___50620 = (0);
while(true){
if((i__31527__auto___50620 < len__31526__auto___50619)){
args__31533__auto__.push((arguments[i__31527__auto___50620]));

var G__50621 = (i__31527__auto___50620 + (1));
i__31527__auto___50620 = G__50621;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50616){
var map__50617 = p__50616;
var map__50617__$1 = ((((!((map__50617 == null)))?((((map__50617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50617):map__50617);
var opts = map__50617__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50615){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50615));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50622){if((e50622 instanceof Error)){
var e = e50622;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50622;

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
return (function (p__50623){
var map__50624 = p__50623;
var map__50624__$1 = ((((!((map__50624 == null)))?((((map__50624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50624):map__50624);
var msg_name = cljs.core.get.call(null,map__50624__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1508862163541
