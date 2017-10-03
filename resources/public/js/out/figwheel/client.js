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
}catch (e54114){if((e54114 instanceof Error)){
var e = e54114;
return "Error: Unable to stringify";
} else {
throw e54114;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__54117 = arguments.length;
switch (G__54117) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__54115_SHARP_){
if(typeof p1__54115_SHARP_ === 'string'){
return p1__54115_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__54115_SHARP_);
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
var len__31526__auto___54120 = arguments.length;
var i__31527__auto___54121 = (0);
while(true){
if((i__31527__auto___54121 < len__31526__auto___54120)){
args__31533__auto__.push((arguments[i__31527__auto___54121]));

var G__54122 = (i__31527__auto___54121 + (1));
i__31527__auto___54121 = G__54122;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54119){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54119));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31533__auto__ = [];
var len__31526__auto___54124 = arguments.length;
var i__31527__auto___54125 = (0);
while(true){
if((i__31527__auto___54125 < len__31526__auto___54124)){
args__31533__auto__.push((arguments[i__31527__auto___54125]));

var G__54126 = (i__31527__auto___54125 + (1));
i__31527__auto___54125 = G__54126;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54123){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54123));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54127){
var map__54128 = p__54127;
var map__54128__$1 = ((((!((map__54128 == null)))?((((map__54128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54128):map__54128);
var message = cljs.core.get.call(null,map__54128__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54128__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__51020__auto___54207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___54207,ch){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___54207,ch){
return (function (state_54179){
var state_val_54180 = (state_54179[(1)]);
if((state_val_54180 === (7))){
var inst_54175 = (state_54179[(2)]);
var state_54179__$1 = state_54179;
var statearr_54181_54208 = state_54179__$1;
(statearr_54181_54208[(2)] = inst_54175);

(statearr_54181_54208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54180 === (1))){
var state_54179__$1 = state_54179;
var statearr_54182_54209 = state_54179__$1;
(statearr_54182_54209[(2)] = null);

(statearr_54182_54209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54180 === (4))){
var inst_54132 = (state_54179[(7)]);
var inst_54132__$1 = (state_54179[(2)]);
var state_54179__$1 = (function (){var statearr_54183 = state_54179;
(statearr_54183[(7)] = inst_54132__$1);

return statearr_54183;
})();
if(cljs.core.truth_(inst_54132__$1)){
var statearr_54184_54210 = state_54179__$1;
(statearr_54184_54210[(1)] = (5));

} else {
var statearr_54185_54211 = state_54179__$1;
(statearr_54185_54211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54180 === (15))){
var inst_54139 = (state_54179[(8)]);
var inst_54154 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54139);
var inst_54155 = cljs.core.first.call(null,inst_54154);
var inst_54156 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54155);
var inst_54157 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54156)].join('');
var inst_54158 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54157);
var state_54179__$1 = state_54179;
var statearr_54186_54212 = state_54179__$1;
(statearr_54186_54212[(2)] = inst_54158);

(statearr_54186_54212[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54180 === (13))){
var inst_54163 = (state_54179[(2)]);
var state_54179__$1 = state_54179;
var statearr_54187_54213 = state_54179__$1;
(statearr_54187_54213[(2)] = inst_54163);

(statearr_54187_54213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54180 === (6))){
var state_54179__$1 = state_54179;
var statearr_54188_54214 = state_54179__$1;
(statearr_54188_54214[(2)] = null);

(statearr_54188_54214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54180 === (17))){
var inst_54161 = (state_54179[(2)]);
var state_54179__$1 = state_54179;
var statearr_54189_54215 = state_54179__$1;
(statearr_54189_54215[(2)] = inst_54161);

(statearr_54189_54215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54180 === (3))){
var inst_54177 = (state_54179[(2)]);
var state_54179__$1 = state_54179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54179__$1,inst_54177);
} else {
if((state_val_54180 === (12))){
var inst_54138 = (state_54179[(9)]);
var inst_54152 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54138,opts);
var state_54179__$1 = state_54179;
if(cljs.core.truth_(inst_54152)){
var statearr_54190_54216 = state_54179__$1;
(statearr_54190_54216[(1)] = (15));

} else {
var statearr_54191_54217 = state_54179__$1;
(statearr_54191_54217[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54180 === (2))){
var state_54179__$1 = state_54179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54179__$1,(4),ch);
} else {
if((state_val_54180 === (11))){
var inst_54139 = (state_54179[(8)]);
var inst_54144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54145 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54139);
var inst_54146 = cljs.core.async.timeout.call(null,(1000));
var inst_54147 = [inst_54145,inst_54146];
var inst_54148 = (new cljs.core.PersistentVector(null,2,(5),inst_54144,inst_54147,null));
var state_54179__$1 = state_54179;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54179__$1,(14),inst_54148);
} else {
if((state_val_54180 === (9))){
var inst_54139 = (state_54179[(8)]);
var inst_54165 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54166 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54139);
var inst_54167 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54166);
var inst_54168 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54167)].join('');
var inst_54169 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54168);
var state_54179__$1 = (function (){var statearr_54192 = state_54179;
(statearr_54192[(10)] = inst_54165);

return statearr_54192;
})();
var statearr_54193_54218 = state_54179__$1;
(statearr_54193_54218[(2)] = inst_54169);

(statearr_54193_54218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54180 === (5))){
var inst_54132 = (state_54179[(7)]);
var inst_54134 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54135 = (new cljs.core.PersistentArrayMap(null,2,inst_54134,null));
var inst_54136 = (new cljs.core.PersistentHashSet(null,inst_54135,null));
var inst_54137 = figwheel.client.focus_msgs.call(null,inst_54136,inst_54132);
var inst_54138 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54137);
var inst_54139 = cljs.core.first.call(null,inst_54137);
var inst_54140 = figwheel.client.autoload_QMARK_.call(null);
var state_54179__$1 = (function (){var statearr_54194 = state_54179;
(statearr_54194[(9)] = inst_54138);

(statearr_54194[(8)] = inst_54139);

return statearr_54194;
})();
if(cljs.core.truth_(inst_54140)){
var statearr_54195_54219 = state_54179__$1;
(statearr_54195_54219[(1)] = (8));

} else {
var statearr_54196_54220 = state_54179__$1;
(statearr_54196_54220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54180 === (14))){
var inst_54150 = (state_54179[(2)]);
var state_54179__$1 = state_54179;
var statearr_54197_54221 = state_54179__$1;
(statearr_54197_54221[(2)] = inst_54150);

(statearr_54197_54221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54180 === (16))){
var state_54179__$1 = state_54179;
var statearr_54198_54222 = state_54179__$1;
(statearr_54198_54222[(2)] = null);

(statearr_54198_54222[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54180 === (10))){
var inst_54171 = (state_54179[(2)]);
var state_54179__$1 = (function (){var statearr_54199 = state_54179;
(statearr_54199[(11)] = inst_54171);

return statearr_54199;
})();
var statearr_54200_54223 = state_54179__$1;
(statearr_54200_54223[(2)] = null);

(statearr_54200_54223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54180 === (8))){
var inst_54138 = (state_54179[(9)]);
var inst_54142 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54138,opts);
var state_54179__$1 = state_54179;
if(cljs.core.truth_(inst_54142)){
var statearr_54201_54224 = state_54179__$1;
(statearr_54201_54224[(1)] = (11));

} else {
var statearr_54202_54225 = state_54179__$1;
(statearr_54202_54225[(1)] = (12));

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
});})(c__51020__auto___54207,ch))
;
return ((function (switch__50930__auto__,c__51020__auto___54207,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__50931__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__50931__auto____0 = (function (){
var statearr_54203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54203[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__50931__auto__);

(statearr_54203[(1)] = (1));

return statearr_54203;
});
var figwheel$client$file_reloader_plugin_$_state_machine__50931__auto____1 = (function (state_54179){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_54179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e54204){if((e54204 instanceof Object)){
var ex__50934__auto__ = e54204;
var statearr_54205_54226 = state_54179;
(statearr_54205_54226[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54227 = state_54179;
state_54179 = G__54227;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__50931__auto__ = function(state_54179){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__50931__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__50931__auto____1.call(this,state_54179);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__50931__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__50931__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___54207,ch))
})();
var state__51022__auto__ = (function (){var statearr_54206 = f__51021__auto__.call(null);
(statearr_54206[(6)] = c__51020__auto___54207);

return statearr_54206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___54207,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54228_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54228_SHARP_));
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
var base_path_54230 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54230){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54229){if((e54229 instanceof Error)){
var e = e54229;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54230], null));
} else {
var e = e54229;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54230))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54231){
var map__54232 = p__54231;
var map__54232__$1 = ((((!((map__54232 == null)))?((((map__54232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54232):map__54232);
var opts = map__54232__$1;
var build_id = cljs.core.get.call(null,map__54232__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54232,map__54232__$1,opts,build_id){
return (function (p__54234){
var vec__54235 = p__54234;
var seq__54236 = cljs.core.seq.call(null,vec__54235);
var first__54237 = cljs.core.first.call(null,seq__54236);
var seq__54236__$1 = cljs.core.next.call(null,seq__54236);
var map__54238 = first__54237;
var map__54238__$1 = ((((!((map__54238 == null)))?((((map__54238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54238):map__54238);
var msg = map__54238__$1;
var msg_name = cljs.core.get.call(null,map__54238__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54236__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54235,seq__54236,first__54237,seq__54236__$1,map__54238,map__54238__$1,msg,msg_name,_,map__54232,map__54232__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54235,seq__54236,first__54237,seq__54236__$1,map__54238,map__54238__$1,msg,msg_name,_,map__54232,map__54232__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54232,map__54232__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54240){
var vec__54241 = p__54240;
var seq__54242 = cljs.core.seq.call(null,vec__54241);
var first__54243 = cljs.core.first.call(null,seq__54242);
var seq__54242__$1 = cljs.core.next.call(null,seq__54242);
var map__54244 = first__54243;
var map__54244__$1 = ((((!((map__54244 == null)))?((((map__54244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54244):map__54244);
var msg = map__54244__$1;
var msg_name = cljs.core.get.call(null,map__54244__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54242__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54246){
var map__54247 = p__54246;
var map__54247__$1 = ((((!((map__54247 == null)))?((((map__54247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54247):map__54247);
var on_compile_warning = cljs.core.get.call(null,map__54247__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54247__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54247,map__54247__$1,on_compile_warning,on_compile_fail){
return (function (p__54249){
var vec__54250 = p__54249;
var seq__54251 = cljs.core.seq.call(null,vec__54250);
var first__54252 = cljs.core.first.call(null,seq__54251);
var seq__54251__$1 = cljs.core.next.call(null,seq__54251);
var map__54253 = first__54252;
var map__54253__$1 = ((((!((map__54253 == null)))?((((map__54253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54253):map__54253);
var msg = map__54253__$1;
var msg_name = cljs.core.get.call(null,map__54253__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54251__$1;
var pred__54255 = cljs.core._EQ_;
var expr__54256 = msg_name;
if(cljs.core.truth_(pred__54255.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54256))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54255.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54256))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54247,map__54247__$1,on_compile_warning,on_compile_fail))
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
var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__,msg_hist,msg_names,msg){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__,msg_hist,msg_names,msg){
return (function (state_54345){
var state_val_54346 = (state_54345[(1)]);
if((state_val_54346 === (7))){
var inst_54265 = (state_54345[(2)]);
var state_54345__$1 = state_54345;
if(cljs.core.truth_(inst_54265)){
var statearr_54347_54394 = state_54345__$1;
(statearr_54347_54394[(1)] = (8));

} else {
var statearr_54348_54395 = state_54345__$1;
(statearr_54348_54395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (20))){
var inst_54339 = (state_54345[(2)]);
var state_54345__$1 = state_54345;
var statearr_54349_54396 = state_54345__$1;
(statearr_54349_54396[(2)] = inst_54339);

(statearr_54349_54396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (27))){
var inst_54335 = (state_54345[(2)]);
var state_54345__$1 = state_54345;
var statearr_54350_54397 = state_54345__$1;
(statearr_54350_54397[(2)] = inst_54335);

(statearr_54350_54397[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (1))){
var inst_54258 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54345__$1 = state_54345;
if(cljs.core.truth_(inst_54258)){
var statearr_54351_54398 = state_54345__$1;
(statearr_54351_54398[(1)] = (2));

} else {
var statearr_54352_54399 = state_54345__$1;
(statearr_54352_54399[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (24))){
var inst_54337 = (state_54345[(2)]);
var state_54345__$1 = state_54345;
var statearr_54353_54400 = state_54345__$1;
(statearr_54353_54400[(2)] = inst_54337);

(statearr_54353_54400[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (4))){
var inst_54343 = (state_54345[(2)]);
var state_54345__$1 = state_54345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54345__$1,inst_54343);
} else {
if((state_val_54346 === (15))){
var inst_54341 = (state_54345[(2)]);
var state_54345__$1 = state_54345;
var statearr_54354_54401 = state_54345__$1;
(statearr_54354_54401[(2)] = inst_54341);

(statearr_54354_54401[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (21))){
var inst_54294 = (state_54345[(2)]);
var inst_54295 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54296 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54295);
var state_54345__$1 = (function (){var statearr_54355 = state_54345;
(statearr_54355[(7)] = inst_54294);

return statearr_54355;
})();
var statearr_54356_54402 = state_54345__$1;
(statearr_54356_54402[(2)] = inst_54296);

(statearr_54356_54402[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (31))){
var inst_54324 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54345__$1 = state_54345;
if(cljs.core.truth_(inst_54324)){
var statearr_54357_54403 = state_54345__$1;
(statearr_54357_54403[(1)] = (34));

} else {
var statearr_54358_54404 = state_54345__$1;
(statearr_54358_54404[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (32))){
var inst_54333 = (state_54345[(2)]);
var state_54345__$1 = state_54345;
var statearr_54359_54405 = state_54345__$1;
(statearr_54359_54405[(2)] = inst_54333);

(statearr_54359_54405[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (33))){
var inst_54320 = (state_54345[(2)]);
var inst_54321 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54322 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54321);
var state_54345__$1 = (function (){var statearr_54360 = state_54345;
(statearr_54360[(8)] = inst_54320);

return statearr_54360;
})();
var statearr_54361_54406 = state_54345__$1;
(statearr_54361_54406[(2)] = inst_54322);

(statearr_54361_54406[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (13))){
var inst_54279 = figwheel.client.heads_up.clear.call(null);
var state_54345__$1 = state_54345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54345__$1,(16),inst_54279);
} else {
if((state_val_54346 === (22))){
var inst_54300 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54301 = figwheel.client.heads_up.append_warning_message.call(null,inst_54300);
var state_54345__$1 = state_54345;
var statearr_54362_54407 = state_54345__$1;
(statearr_54362_54407[(2)] = inst_54301);

(statearr_54362_54407[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (36))){
var inst_54331 = (state_54345[(2)]);
var state_54345__$1 = state_54345;
var statearr_54363_54408 = state_54345__$1;
(statearr_54363_54408[(2)] = inst_54331);

(statearr_54363_54408[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (29))){
var inst_54311 = (state_54345[(2)]);
var inst_54312 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54313 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54312);
var state_54345__$1 = (function (){var statearr_54364 = state_54345;
(statearr_54364[(9)] = inst_54311);

return statearr_54364;
})();
var statearr_54365_54409 = state_54345__$1;
(statearr_54365_54409[(2)] = inst_54313);

(statearr_54365_54409[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (6))){
var inst_54260 = (state_54345[(10)]);
var state_54345__$1 = state_54345;
var statearr_54366_54410 = state_54345__$1;
(statearr_54366_54410[(2)] = inst_54260);

(statearr_54366_54410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (28))){
var inst_54307 = (state_54345[(2)]);
var inst_54308 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54309 = figwheel.client.heads_up.display_warning.call(null,inst_54308);
var state_54345__$1 = (function (){var statearr_54367 = state_54345;
(statearr_54367[(11)] = inst_54307);

return statearr_54367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54345__$1,(29),inst_54309);
} else {
if((state_val_54346 === (25))){
var inst_54305 = figwheel.client.heads_up.clear.call(null);
var state_54345__$1 = state_54345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54345__$1,(28),inst_54305);
} else {
if((state_val_54346 === (34))){
var inst_54326 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54345__$1 = state_54345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54345__$1,(37),inst_54326);
} else {
if((state_val_54346 === (17))){
var inst_54285 = (state_54345[(2)]);
var inst_54286 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54287 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54286);
var state_54345__$1 = (function (){var statearr_54368 = state_54345;
(statearr_54368[(12)] = inst_54285);

return statearr_54368;
})();
var statearr_54369_54411 = state_54345__$1;
(statearr_54369_54411[(2)] = inst_54287);

(statearr_54369_54411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (3))){
var inst_54277 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54345__$1 = state_54345;
if(cljs.core.truth_(inst_54277)){
var statearr_54370_54412 = state_54345__$1;
(statearr_54370_54412[(1)] = (13));

} else {
var statearr_54371_54413 = state_54345__$1;
(statearr_54371_54413[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (12))){
var inst_54273 = (state_54345[(2)]);
var state_54345__$1 = state_54345;
var statearr_54372_54414 = state_54345__$1;
(statearr_54372_54414[(2)] = inst_54273);

(statearr_54372_54414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (2))){
var inst_54260 = (state_54345[(10)]);
var inst_54260__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54345__$1 = (function (){var statearr_54373 = state_54345;
(statearr_54373[(10)] = inst_54260__$1);

return statearr_54373;
})();
if(cljs.core.truth_(inst_54260__$1)){
var statearr_54374_54415 = state_54345__$1;
(statearr_54374_54415[(1)] = (5));

} else {
var statearr_54375_54416 = state_54345__$1;
(statearr_54375_54416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (23))){
var inst_54303 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54345__$1 = state_54345;
if(cljs.core.truth_(inst_54303)){
var statearr_54376_54417 = state_54345__$1;
(statearr_54376_54417[(1)] = (25));

} else {
var statearr_54377_54418 = state_54345__$1;
(statearr_54377_54418[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (35))){
var state_54345__$1 = state_54345;
var statearr_54378_54419 = state_54345__$1;
(statearr_54378_54419[(2)] = null);

(statearr_54378_54419[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (19))){
var inst_54298 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54345__$1 = state_54345;
if(cljs.core.truth_(inst_54298)){
var statearr_54379_54420 = state_54345__$1;
(statearr_54379_54420[(1)] = (22));

} else {
var statearr_54380_54421 = state_54345__$1;
(statearr_54380_54421[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (11))){
var inst_54269 = (state_54345[(2)]);
var state_54345__$1 = state_54345;
var statearr_54381_54422 = state_54345__$1;
(statearr_54381_54422[(2)] = inst_54269);

(statearr_54381_54422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (9))){
var inst_54271 = figwheel.client.heads_up.clear.call(null);
var state_54345__$1 = state_54345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54345__$1,(12),inst_54271);
} else {
if((state_val_54346 === (5))){
var inst_54262 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54345__$1 = state_54345;
var statearr_54382_54423 = state_54345__$1;
(statearr_54382_54423[(2)] = inst_54262);

(statearr_54382_54423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (14))){
var inst_54289 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54345__$1 = state_54345;
if(cljs.core.truth_(inst_54289)){
var statearr_54383_54424 = state_54345__$1;
(statearr_54383_54424[(1)] = (18));

} else {
var statearr_54384_54425 = state_54345__$1;
(statearr_54384_54425[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (26))){
var inst_54315 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54345__$1 = state_54345;
if(cljs.core.truth_(inst_54315)){
var statearr_54385_54426 = state_54345__$1;
(statearr_54385_54426[(1)] = (30));

} else {
var statearr_54386_54427 = state_54345__$1;
(statearr_54386_54427[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (16))){
var inst_54281 = (state_54345[(2)]);
var inst_54282 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54283 = figwheel.client.heads_up.display_exception.call(null,inst_54282);
var state_54345__$1 = (function (){var statearr_54387 = state_54345;
(statearr_54387[(13)] = inst_54281);

return statearr_54387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54345__$1,(17),inst_54283);
} else {
if((state_val_54346 === (30))){
var inst_54317 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54318 = figwheel.client.heads_up.display_warning.call(null,inst_54317);
var state_54345__$1 = state_54345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54345__$1,(33),inst_54318);
} else {
if((state_val_54346 === (10))){
var inst_54275 = (state_54345[(2)]);
var state_54345__$1 = state_54345;
var statearr_54388_54428 = state_54345__$1;
(statearr_54388_54428[(2)] = inst_54275);

(statearr_54388_54428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (18))){
var inst_54291 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54292 = figwheel.client.heads_up.display_exception.call(null,inst_54291);
var state_54345__$1 = state_54345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54345__$1,(21),inst_54292);
} else {
if((state_val_54346 === (37))){
var inst_54328 = (state_54345[(2)]);
var state_54345__$1 = state_54345;
var statearr_54389_54429 = state_54345__$1;
(statearr_54389_54429[(2)] = inst_54328);

(statearr_54389_54429[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54346 === (8))){
var inst_54267 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54345__$1 = state_54345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54345__$1,(11),inst_54267);
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
});})(c__51020__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__50930__auto__,c__51020__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50931__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50931__auto____0 = (function (){
var statearr_54390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54390[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50931__auto__);

(statearr_54390[(1)] = (1));

return statearr_54390;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50931__auto____1 = (function (state_54345){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_54345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e54391){if((e54391 instanceof Object)){
var ex__50934__auto__ = e54391;
var statearr_54392_54430 = state_54345;
(statearr_54392_54430[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54431 = state_54345;
state_54345 = G__54431;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50931__auto__ = function(state_54345){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50931__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50931__auto____1.call(this,state_54345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50931__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50931__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__,msg_hist,msg_names,msg))
})();
var state__51022__auto__ = (function (){var statearr_54393 = f__51021__auto__.call(null);
(statearr_54393[(6)] = c__51020__auto__);

return statearr_54393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__,msg_hist,msg_names,msg))
);

return c__51020__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__51020__auto___54460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___54460,ch){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___54460,ch){
return (function (state_54446){
var state_val_54447 = (state_54446[(1)]);
if((state_val_54447 === (1))){
var state_54446__$1 = state_54446;
var statearr_54448_54461 = state_54446__$1;
(statearr_54448_54461[(2)] = null);

(statearr_54448_54461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (2))){
var state_54446__$1 = state_54446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54446__$1,(4),ch);
} else {
if((state_val_54447 === (3))){
var inst_54444 = (state_54446[(2)]);
var state_54446__$1 = state_54446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54446__$1,inst_54444);
} else {
if((state_val_54447 === (4))){
var inst_54434 = (state_54446[(7)]);
var inst_54434__$1 = (state_54446[(2)]);
var state_54446__$1 = (function (){var statearr_54449 = state_54446;
(statearr_54449[(7)] = inst_54434__$1);

return statearr_54449;
})();
if(cljs.core.truth_(inst_54434__$1)){
var statearr_54450_54462 = state_54446__$1;
(statearr_54450_54462[(1)] = (5));

} else {
var statearr_54451_54463 = state_54446__$1;
(statearr_54451_54463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (5))){
var inst_54434 = (state_54446[(7)]);
var inst_54436 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54434);
var state_54446__$1 = state_54446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54446__$1,(8),inst_54436);
} else {
if((state_val_54447 === (6))){
var state_54446__$1 = state_54446;
var statearr_54452_54464 = state_54446__$1;
(statearr_54452_54464[(2)] = null);

(statearr_54452_54464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (7))){
var inst_54442 = (state_54446[(2)]);
var state_54446__$1 = state_54446;
var statearr_54453_54465 = state_54446__$1;
(statearr_54453_54465[(2)] = inst_54442);

(statearr_54453_54465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (8))){
var inst_54438 = (state_54446[(2)]);
var state_54446__$1 = (function (){var statearr_54454 = state_54446;
(statearr_54454[(8)] = inst_54438);

return statearr_54454;
})();
var statearr_54455_54466 = state_54446__$1;
(statearr_54455_54466[(2)] = null);

(statearr_54455_54466[(1)] = (2));


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
});})(c__51020__auto___54460,ch))
;
return ((function (switch__50930__auto__,c__51020__auto___54460,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__50931__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__50931__auto____0 = (function (){
var statearr_54456 = [null,null,null,null,null,null,null,null,null];
(statearr_54456[(0)] = figwheel$client$heads_up_plugin_$_state_machine__50931__auto__);

(statearr_54456[(1)] = (1));

return statearr_54456;
});
var figwheel$client$heads_up_plugin_$_state_machine__50931__auto____1 = (function (state_54446){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_54446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e54457){if((e54457 instanceof Object)){
var ex__50934__auto__ = e54457;
var statearr_54458_54467 = state_54446;
(statearr_54458_54467[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54468 = state_54446;
state_54446 = G__54468;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__50931__auto__ = function(state_54446){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__50931__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__50931__auto____1.call(this,state_54446);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__50931__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__50931__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___54460,ch))
})();
var state__51022__auto__ = (function (){var statearr_54459 = f__51021__auto__.call(null);
(statearr_54459[(6)] = c__51020__auto___54460);

return statearr_54459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___54460,ch))
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
var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__){
return (function (state_54474){
var state_val_54475 = (state_54474[(1)]);
if((state_val_54475 === (1))){
var inst_54469 = cljs.core.async.timeout.call(null,(3000));
var state_54474__$1 = state_54474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54474__$1,(2),inst_54469);
} else {
if((state_val_54475 === (2))){
var inst_54471 = (state_54474[(2)]);
var inst_54472 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54474__$1 = (function (){var statearr_54476 = state_54474;
(statearr_54476[(7)] = inst_54471);

return statearr_54476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54474__$1,inst_54472);
} else {
return null;
}
}
});})(c__51020__auto__))
;
return ((function (switch__50930__auto__,c__51020__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__50931__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__50931__auto____0 = (function (){
var statearr_54477 = [null,null,null,null,null,null,null,null];
(statearr_54477[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__50931__auto__);

(statearr_54477[(1)] = (1));

return statearr_54477;
});
var figwheel$client$enforce_project_plugin_$_state_machine__50931__auto____1 = (function (state_54474){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_54474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e54478){if((e54478 instanceof Object)){
var ex__50934__auto__ = e54478;
var statearr_54479_54481 = state_54474;
(statearr_54479_54481[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54482 = state_54474;
state_54474 = G__54482;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__50931__auto__ = function(state_54474){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__50931__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__50931__auto____1.call(this,state_54474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__50931__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__50931__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__))
})();
var state__51022__auto__ = (function (){var statearr_54480 = f__51021__auto__.call(null);
(statearr_54480[(6)] = c__51020__auto__);

return statearr_54480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__))
);

return c__51020__auto__;
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
var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__,figwheel_version,temp__5290__auto__){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__,figwheel_version,temp__5290__auto__){
return (function (state_54489){
var state_val_54490 = (state_54489[(1)]);
if((state_val_54490 === (1))){
var inst_54483 = cljs.core.async.timeout.call(null,(2000));
var state_54489__$1 = state_54489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54489__$1,(2),inst_54483);
} else {
if((state_val_54490 === (2))){
var inst_54485 = (state_54489[(2)]);
var inst_54486 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_54487 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_54486);
var state_54489__$1 = (function (){var statearr_54491 = state_54489;
(statearr_54491[(7)] = inst_54485);

return statearr_54491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54489__$1,inst_54487);
} else {
return null;
}
}
});})(c__51020__auto__,figwheel_version,temp__5290__auto__))
;
return ((function (switch__50930__auto__,c__51020__auto__,figwheel_version,temp__5290__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50931__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50931__auto____0 = (function (){
var statearr_54492 = [null,null,null,null,null,null,null,null];
(statearr_54492[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50931__auto__);

(statearr_54492[(1)] = (1));

return statearr_54492;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50931__auto____1 = (function (state_54489){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_54489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e54493){if((e54493 instanceof Object)){
var ex__50934__auto__ = e54493;
var statearr_54494_54496 = state_54489;
(statearr_54494_54496[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54497 = state_54489;
state_54489 = G__54497;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50931__auto__ = function(state_54489){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50931__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50931__auto____1.call(this,state_54489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50931__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50931__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__,figwheel_version,temp__5290__auto__))
})();
var state__51022__auto__ = (function (){var statearr_54495 = f__51021__auto__.call(null);
(statearr_54495[(6)] = c__51020__auto__);

return statearr_54495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__,figwheel_version,temp__5290__auto__))
);

return c__51020__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__54498){
var map__54499 = p__54498;
var map__54499__$1 = ((((!((map__54499 == null)))?((((map__54499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54499):map__54499);
var file = cljs.core.get.call(null,map__54499__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54499__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54499__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54501 = "";
var G__54501__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54501),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__54501);
var G__54501__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54501__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__54501__$1);
if(cljs.core.truth_((function (){var and__30237__auto__ = line;
if(cljs.core.truth_(and__30237__auto__)){
return column;
} else {
return and__30237__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54501__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__54501__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__54502){
var map__54503 = p__54502;
var map__54503__$1 = ((((!((map__54503 == null)))?((((map__54503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54503):map__54503);
var ed = map__54503__$1;
var formatted_exception = cljs.core.get.call(null,map__54503__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__54503__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__54503__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__54505_54509 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__54506_54510 = null;
var count__54507_54511 = (0);
var i__54508_54512 = (0);
while(true){
if((i__54508_54512 < count__54507_54511)){
var msg_54513 = cljs.core._nth.call(null,chunk__54506_54510,i__54508_54512);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54513);

var G__54514 = seq__54505_54509;
var G__54515 = chunk__54506_54510;
var G__54516 = count__54507_54511;
var G__54517 = (i__54508_54512 + (1));
seq__54505_54509 = G__54514;
chunk__54506_54510 = G__54515;
count__54507_54511 = G__54516;
i__54508_54512 = G__54517;
continue;
} else {
var temp__5290__auto___54518 = cljs.core.seq.call(null,seq__54505_54509);
if(temp__5290__auto___54518){
var seq__54505_54519__$1 = temp__5290__auto___54518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54505_54519__$1)){
var c__31180__auto___54520 = cljs.core.chunk_first.call(null,seq__54505_54519__$1);
var G__54521 = cljs.core.chunk_rest.call(null,seq__54505_54519__$1);
var G__54522 = c__31180__auto___54520;
var G__54523 = cljs.core.count.call(null,c__31180__auto___54520);
var G__54524 = (0);
seq__54505_54509 = G__54521;
chunk__54506_54510 = G__54522;
count__54507_54511 = G__54523;
i__54508_54512 = G__54524;
continue;
} else {
var msg_54525 = cljs.core.first.call(null,seq__54505_54519__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54525);

var G__54526 = cljs.core.next.call(null,seq__54505_54519__$1);
var G__54527 = null;
var G__54528 = (0);
var G__54529 = (0);
seq__54505_54509 = G__54526;
chunk__54506_54510 = G__54527;
count__54507_54511 = G__54528;
i__54508_54512 = G__54529;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__54530){
var map__54531 = p__54530;
var map__54531__$1 = ((((!((map__54531 == null)))?((((map__54531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54531):map__54531);
var w = map__54531__$1;
var message = cljs.core.get.call(null,map__54531__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__54533 = cljs.core.seq.call(null,plugins);
var chunk__54534 = null;
var count__54535 = (0);
var i__54536 = (0);
while(true){
if((i__54536 < count__54535)){
var vec__54537 = cljs.core._nth.call(null,chunk__54534,i__54536);
var k = cljs.core.nth.call(null,vec__54537,(0),null);
var plugin = cljs.core.nth.call(null,vec__54537,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54543 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54533,chunk__54534,count__54535,i__54536,pl_54543,vec__54537,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_54543.call(null,msg_hist);
});})(seq__54533,chunk__54534,count__54535,i__54536,pl_54543,vec__54537,k,plugin))
);
} else {
}

var G__54544 = seq__54533;
var G__54545 = chunk__54534;
var G__54546 = count__54535;
var G__54547 = (i__54536 + (1));
seq__54533 = G__54544;
chunk__54534 = G__54545;
count__54535 = G__54546;
i__54536 = G__54547;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__54533);
if(temp__5290__auto__){
var seq__54533__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54533__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__54533__$1);
var G__54548 = cljs.core.chunk_rest.call(null,seq__54533__$1);
var G__54549 = c__31180__auto__;
var G__54550 = cljs.core.count.call(null,c__31180__auto__);
var G__54551 = (0);
seq__54533 = G__54548;
chunk__54534 = G__54549;
count__54535 = G__54550;
i__54536 = G__54551;
continue;
} else {
var vec__54540 = cljs.core.first.call(null,seq__54533__$1);
var k = cljs.core.nth.call(null,vec__54540,(0),null);
var plugin = cljs.core.nth.call(null,vec__54540,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54552 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54533,chunk__54534,count__54535,i__54536,pl_54552,vec__54540,k,plugin,seq__54533__$1,temp__5290__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_54552.call(null,msg_hist);
});})(seq__54533,chunk__54534,count__54535,i__54536,pl_54552,vec__54540,k,plugin,seq__54533__$1,temp__5290__auto__))
);
} else {
}

var G__54553 = cljs.core.next.call(null,seq__54533__$1);
var G__54554 = null;
var G__54555 = (0);
var G__54556 = (0);
seq__54533 = G__54553;
chunk__54534 = G__54554;
count__54535 = G__54555;
i__54536 = G__54556;
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
var G__54558 = arguments.length;
switch (G__54558) {
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

var seq__54559_54564 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__54560_54565 = null;
var count__54561_54566 = (0);
var i__54562_54567 = (0);
while(true){
if((i__54562_54567 < count__54561_54566)){
var msg_54568 = cljs.core._nth.call(null,chunk__54560_54565,i__54562_54567);
figwheel.client.socket.handle_incoming_message.call(null,msg_54568);

var G__54569 = seq__54559_54564;
var G__54570 = chunk__54560_54565;
var G__54571 = count__54561_54566;
var G__54572 = (i__54562_54567 + (1));
seq__54559_54564 = G__54569;
chunk__54560_54565 = G__54570;
count__54561_54566 = G__54571;
i__54562_54567 = G__54572;
continue;
} else {
var temp__5290__auto___54573 = cljs.core.seq.call(null,seq__54559_54564);
if(temp__5290__auto___54573){
var seq__54559_54574__$1 = temp__5290__auto___54573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54559_54574__$1)){
var c__31180__auto___54575 = cljs.core.chunk_first.call(null,seq__54559_54574__$1);
var G__54576 = cljs.core.chunk_rest.call(null,seq__54559_54574__$1);
var G__54577 = c__31180__auto___54575;
var G__54578 = cljs.core.count.call(null,c__31180__auto___54575);
var G__54579 = (0);
seq__54559_54564 = G__54576;
chunk__54560_54565 = G__54577;
count__54561_54566 = G__54578;
i__54562_54567 = G__54579;
continue;
} else {
var msg_54580 = cljs.core.first.call(null,seq__54559_54574__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_54580);

var G__54581 = cljs.core.next.call(null,seq__54559_54574__$1);
var G__54582 = null;
var G__54583 = (0);
var G__54584 = (0);
seq__54559_54564 = G__54581;
chunk__54560_54565 = G__54582;
count__54561_54566 = G__54583;
i__54562_54567 = G__54584;
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
var len__31526__auto___54589 = arguments.length;
var i__31527__auto___54590 = (0);
while(true){
if((i__31527__auto___54590 < len__31526__auto___54589)){
args__31533__auto__.push((arguments[i__31527__auto___54590]));

var G__54591 = (i__31527__auto___54590 + (1));
i__31527__auto___54590 = G__54591;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__54586){
var map__54587 = p__54586;
var map__54587__$1 = ((((!((map__54587 == null)))?((((map__54587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54587):map__54587);
var opts = map__54587__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq54585){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54585));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e54592){if((e54592 instanceof Error)){
var e = e54592;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e54592;

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
return (function (p__54593){
var map__54594 = p__54593;
var map__54594__$1 = ((((!((map__54594 == null)))?((((map__54594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54594):map__54594);
var msg_name = cljs.core.get.call(null,map__54594__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1507056183598
