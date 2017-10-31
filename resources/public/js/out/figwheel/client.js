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
}catch (e48879){if((e48879 instanceof Error)){
var e = e48879;
return "Error: Unable to stringify";
} else {
throw e48879;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__48882 = arguments.length;
switch (G__48882) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__48880_SHARP_){
if(typeof p1__48880_SHARP_ === 'string'){
return p1__48880_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__48880_SHARP_);
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
var len__31526__auto___48885 = arguments.length;
var i__31527__auto___48886 = (0);
while(true){
if((i__31527__auto___48886 < len__31526__auto___48885)){
args__31533__auto__.push((arguments[i__31527__auto___48886]));

var G__48887 = (i__31527__auto___48886 + (1));
i__31527__auto___48886 = G__48887;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48884){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48884));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31533__auto__ = [];
var len__31526__auto___48889 = arguments.length;
var i__31527__auto___48890 = (0);
while(true){
if((i__31527__auto___48890 < len__31526__auto___48889)){
args__31533__auto__.push((arguments[i__31527__auto___48890]));

var G__48891 = (i__31527__auto___48890 + (1));
i__31527__auto___48890 = G__48891;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48888){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48888));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48892){
var map__48893 = p__48892;
var map__48893__$1 = ((((!((map__48893 == null)))?((((map__48893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48893):map__48893);
var message = cljs.core.get.call(null,map__48893__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48893__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__45733__auto___48972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___48972,ch){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___48972,ch){
return (function (state_48944){
var state_val_48945 = (state_48944[(1)]);
if((state_val_48945 === (7))){
var inst_48940 = (state_48944[(2)]);
var state_48944__$1 = state_48944;
var statearr_48946_48973 = state_48944__$1;
(statearr_48946_48973[(2)] = inst_48940);

(statearr_48946_48973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (1))){
var state_48944__$1 = state_48944;
var statearr_48947_48974 = state_48944__$1;
(statearr_48947_48974[(2)] = null);

(statearr_48947_48974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (4))){
var inst_48897 = (state_48944[(7)]);
var inst_48897__$1 = (state_48944[(2)]);
var state_48944__$1 = (function (){var statearr_48948 = state_48944;
(statearr_48948[(7)] = inst_48897__$1);

return statearr_48948;
})();
if(cljs.core.truth_(inst_48897__$1)){
var statearr_48949_48975 = state_48944__$1;
(statearr_48949_48975[(1)] = (5));

} else {
var statearr_48950_48976 = state_48944__$1;
(statearr_48950_48976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (15))){
var inst_48904 = (state_48944[(8)]);
var inst_48919 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48904);
var inst_48920 = cljs.core.first.call(null,inst_48919);
var inst_48921 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48920);
var inst_48922 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48921)].join('');
var inst_48923 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48922);
var state_48944__$1 = state_48944;
var statearr_48951_48977 = state_48944__$1;
(statearr_48951_48977[(2)] = inst_48923);

(statearr_48951_48977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (13))){
var inst_48928 = (state_48944[(2)]);
var state_48944__$1 = state_48944;
var statearr_48952_48978 = state_48944__$1;
(statearr_48952_48978[(2)] = inst_48928);

(statearr_48952_48978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (6))){
var state_48944__$1 = state_48944;
var statearr_48953_48979 = state_48944__$1;
(statearr_48953_48979[(2)] = null);

(statearr_48953_48979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (17))){
var inst_48926 = (state_48944[(2)]);
var state_48944__$1 = state_48944;
var statearr_48954_48980 = state_48944__$1;
(statearr_48954_48980[(2)] = inst_48926);

(statearr_48954_48980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (3))){
var inst_48942 = (state_48944[(2)]);
var state_48944__$1 = state_48944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48944__$1,inst_48942);
} else {
if((state_val_48945 === (12))){
var inst_48903 = (state_48944[(9)]);
var inst_48917 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48903,opts);
var state_48944__$1 = state_48944;
if(cljs.core.truth_(inst_48917)){
var statearr_48955_48981 = state_48944__$1;
(statearr_48955_48981[(1)] = (15));

} else {
var statearr_48956_48982 = state_48944__$1;
(statearr_48956_48982[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (2))){
var state_48944__$1 = state_48944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48944__$1,(4),ch);
} else {
if((state_val_48945 === (11))){
var inst_48904 = (state_48944[(8)]);
var inst_48909 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48910 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48904);
var inst_48911 = cljs.core.async.timeout.call(null,(1000));
var inst_48912 = [inst_48910,inst_48911];
var inst_48913 = (new cljs.core.PersistentVector(null,2,(5),inst_48909,inst_48912,null));
var state_48944__$1 = state_48944;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48944__$1,(14),inst_48913);
} else {
if((state_val_48945 === (9))){
var inst_48904 = (state_48944[(8)]);
var inst_48930 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48931 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48904);
var inst_48932 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48931);
var inst_48933 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48932)].join('');
var inst_48934 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48933);
var state_48944__$1 = (function (){var statearr_48957 = state_48944;
(statearr_48957[(10)] = inst_48930);

return statearr_48957;
})();
var statearr_48958_48983 = state_48944__$1;
(statearr_48958_48983[(2)] = inst_48934);

(statearr_48958_48983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (5))){
var inst_48897 = (state_48944[(7)]);
var inst_48899 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48900 = (new cljs.core.PersistentArrayMap(null,2,inst_48899,null));
var inst_48901 = (new cljs.core.PersistentHashSet(null,inst_48900,null));
var inst_48902 = figwheel.client.focus_msgs.call(null,inst_48901,inst_48897);
var inst_48903 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48902);
var inst_48904 = cljs.core.first.call(null,inst_48902);
var inst_48905 = figwheel.client.autoload_QMARK_.call(null);
var state_48944__$1 = (function (){var statearr_48959 = state_48944;
(statearr_48959[(9)] = inst_48903);

(statearr_48959[(8)] = inst_48904);

return statearr_48959;
})();
if(cljs.core.truth_(inst_48905)){
var statearr_48960_48984 = state_48944__$1;
(statearr_48960_48984[(1)] = (8));

} else {
var statearr_48961_48985 = state_48944__$1;
(statearr_48961_48985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (14))){
var inst_48915 = (state_48944[(2)]);
var state_48944__$1 = state_48944;
var statearr_48962_48986 = state_48944__$1;
(statearr_48962_48986[(2)] = inst_48915);

(statearr_48962_48986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (16))){
var state_48944__$1 = state_48944;
var statearr_48963_48987 = state_48944__$1;
(statearr_48963_48987[(2)] = null);

(statearr_48963_48987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (10))){
var inst_48936 = (state_48944[(2)]);
var state_48944__$1 = (function (){var statearr_48964 = state_48944;
(statearr_48964[(11)] = inst_48936);

return statearr_48964;
})();
var statearr_48965_48988 = state_48944__$1;
(statearr_48965_48988[(2)] = null);

(statearr_48965_48988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (8))){
var inst_48903 = (state_48944[(9)]);
var inst_48907 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48903,opts);
var state_48944__$1 = state_48944;
if(cljs.core.truth_(inst_48907)){
var statearr_48966_48989 = state_48944__$1;
(statearr_48966_48989[(1)] = (11));

} else {
var statearr_48967_48990 = state_48944__$1;
(statearr_48967_48990[(1)] = (12));

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
});})(c__45733__auto___48972,ch))
;
return ((function (switch__45643__auto__,c__45733__auto___48972,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__45644__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__45644__auto____0 = (function (){
var statearr_48968 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48968[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__45644__auto__);

(statearr_48968[(1)] = (1));

return statearr_48968;
});
var figwheel$client$file_reloader_plugin_$_state_machine__45644__auto____1 = (function (state_48944){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_48944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e48969){if((e48969 instanceof Object)){
var ex__45647__auto__ = e48969;
var statearr_48970_48991 = state_48944;
(statearr_48970_48991[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48992 = state_48944;
state_48944 = G__48992;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__45644__auto__ = function(state_48944){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__45644__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__45644__auto____1.call(this,state_48944);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__45644__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__45644__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___48972,ch))
})();
var state__45735__auto__ = (function (){var statearr_48971 = f__45734__auto__.call(null);
(statearr_48971[(6)] = c__45733__auto___48972);

return statearr_48971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___48972,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48993_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48993_SHARP_));
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
var base_path_48995 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48995){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e48994){if((e48994 instanceof Error)){
var e = e48994;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48995], null));
} else {
var e = e48994;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_48995))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48996){
var map__48997 = p__48996;
var map__48997__$1 = ((((!((map__48997 == null)))?((((map__48997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48997):map__48997);
var opts = map__48997__$1;
var build_id = cljs.core.get.call(null,map__48997__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48997,map__48997__$1,opts,build_id){
return (function (p__48999){
var vec__49000 = p__48999;
var seq__49001 = cljs.core.seq.call(null,vec__49000);
var first__49002 = cljs.core.first.call(null,seq__49001);
var seq__49001__$1 = cljs.core.next.call(null,seq__49001);
var map__49003 = first__49002;
var map__49003__$1 = ((((!((map__49003 == null)))?((((map__49003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49003):map__49003);
var msg = map__49003__$1;
var msg_name = cljs.core.get.call(null,map__49003__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49001__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49000,seq__49001,first__49002,seq__49001__$1,map__49003,map__49003__$1,msg,msg_name,_,map__48997,map__48997__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49000,seq__49001,first__49002,seq__49001__$1,map__49003,map__49003__$1,msg,msg_name,_,map__48997,map__48997__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48997,map__48997__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49005){
var vec__49006 = p__49005;
var seq__49007 = cljs.core.seq.call(null,vec__49006);
var first__49008 = cljs.core.first.call(null,seq__49007);
var seq__49007__$1 = cljs.core.next.call(null,seq__49007);
var map__49009 = first__49008;
var map__49009__$1 = ((((!((map__49009 == null)))?((((map__49009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49009):map__49009);
var msg = map__49009__$1;
var msg_name = cljs.core.get.call(null,map__49009__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49007__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49011){
var map__49012 = p__49011;
var map__49012__$1 = ((((!((map__49012 == null)))?((((map__49012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49012):map__49012);
var on_compile_warning = cljs.core.get.call(null,map__49012__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49012__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49012,map__49012__$1,on_compile_warning,on_compile_fail){
return (function (p__49014){
var vec__49015 = p__49014;
var seq__49016 = cljs.core.seq.call(null,vec__49015);
var first__49017 = cljs.core.first.call(null,seq__49016);
var seq__49016__$1 = cljs.core.next.call(null,seq__49016);
var map__49018 = first__49017;
var map__49018__$1 = ((((!((map__49018 == null)))?((((map__49018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49018):map__49018);
var msg = map__49018__$1;
var msg_name = cljs.core.get.call(null,map__49018__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49016__$1;
var pred__49020 = cljs.core._EQ_;
var expr__49021 = msg_name;
if(cljs.core.truth_(pred__49020.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49021))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49020.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49021))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49012,map__49012__$1,on_compile_warning,on_compile_fail))
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
var c__45733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto__,msg_hist,msg_names,msg){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto__,msg_hist,msg_names,msg){
return (function (state_49110){
var state_val_49111 = (state_49110[(1)]);
if((state_val_49111 === (7))){
var inst_49030 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
if(cljs.core.truth_(inst_49030)){
var statearr_49112_49159 = state_49110__$1;
(statearr_49112_49159[(1)] = (8));

} else {
var statearr_49113_49160 = state_49110__$1;
(statearr_49113_49160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (20))){
var inst_49104 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
var statearr_49114_49161 = state_49110__$1;
(statearr_49114_49161[(2)] = inst_49104);

(statearr_49114_49161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (27))){
var inst_49100 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
var statearr_49115_49162 = state_49110__$1;
(statearr_49115_49162[(2)] = inst_49100);

(statearr_49115_49162[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (1))){
var inst_49023 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49110__$1 = state_49110;
if(cljs.core.truth_(inst_49023)){
var statearr_49116_49163 = state_49110__$1;
(statearr_49116_49163[(1)] = (2));

} else {
var statearr_49117_49164 = state_49110__$1;
(statearr_49117_49164[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (24))){
var inst_49102 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
var statearr_49118_49165 = state_49110__$1;
(statearr_49118_49165[(2)] = inst_49102);

(statearr_49118_49165[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (4))){
var inst_49108 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49110__$1,inst_49108);
} else {
if((state_val_49111 === (15))){
var inst_49106 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
var statearr_49119_49166 = state_49110__$1;
(statearr_49119_49166[(2)] = inst_49106);

(statearr_49119_49166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (21))){
var inst_49059 = (state_49110[(2)]);
var inst_49060 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49061 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49060);
var state_49110__$1 = (function (){var statearr_49120 = state_49110;
(statearr_49120[(7)] = inst_49059);

return statearr_49120;
})();
var statearr_49121_49167 = state_49110__$1;
(statearr_49121_49167[(2)] = inst_49061);

(statearr_49121_49167[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (31))){
var inst_49089 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49110__$1 = state_49110;
if(cljs.core.truth_(inst_49089)){
var statearr_49122_49168 = state_49110__$1;
(statearr_49122_49168[(1)] = (34));

} else {
var statearr_49123_49169 = state_49110__$1;
(statearr_49123_49169[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (32))){
var inst_49098 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
var statearr_49124_49170 = state_49110__$1;
(statearr_49124_49170[(2)] = inst_49098);

(statearr_49124_49170[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (33))){
var inst_49085 = (state_49110[(2)]);
var inst_49086 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49087 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49086);
var state_49110__$1 = (function (){var statearr_49125 = state_49110;
(statearr_49125[(8)] = inst_49085);

return statearr_49125;
})();
var statearr_49126_49171 = state_49110__$1;
(statearr_49126_49171[(2)] = inst_49087);

(statearr_49126_49171[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (13))){
var inst_49044 = figwheel.client.heads_up.clear.call(null);
var state_49110__$1 = state_49110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49110__$1,(16),inst_49044);
} else {
if((state_val_49111 === (22))){
var inst_49065 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49066 = figwheel.client.heads_up.append_warning_message.call(null,inst_49065);
var state_49110__$1 = state_49110;
var statearr_49127_49172 = state_49110__$1;
(statearr_49127_49172[(2)] = inst_49066);

(statearr_49127_49172[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (36))){
var inst_49096 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
var statearr_49128_49173 = state_49110__$1;
(statearr_49128_49173[(2)] = inst_49096);

(statearr_49128_49173[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (29))){
var inst_49076 = (state_49110[(2)]);
var inst_49077 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49078 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49077);
var state_49110__$1 = (function (){var statearr_49129 = state_49110;
(statearr_49129[(9)] = inst_49076);

return statearr_49129;
})();
var statearr_49130_49174 = state_49110__$1;
(statearr_49130_49174[(2)] = inst_49078);

(statearr_49130_49174[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (6))){
var inst_49025 = (state_49110[(10)]);
var state_49110__$1 = state_49110;
var statearr_49131_49175 = state_49110__$1;
(statearr_49131_49175[(2)] = inst_49025);

(statearr_49131_49175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (28))){
var inst_49072 = (state_49110[(2)]);
var inst_49073 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49074 = figwheel.client.heads_up.display_warning.call(null,inst_49073);
var state_49110__$1 = (function (){var statearr_49132 = state_49110;
(statearr_49132[(11)] = inst_49072);

return statearr_49132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49110__$1,(29),inst_49074);
} else {
if((state_val_49111 === (25))){
var inst_49070 = figwheel.client.heads_up.clear.call(null);
var state_49110__$1 = state_49110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49110__$1,(28),inst_49070);
} else {
if((state_val_49111 === (34))){
var inst_49091 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49110__$1 = state_49110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49110__$1,(37),inst_49091);
} else {
if((state_val_49111 === (17))){
var inst_49050 = (state_49110[(2)]);
var inst_49051 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49052 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49051);
var state_49110__$1 = (function (){var statearr_49133 = state_49110;
(statearr_49133[(12)] = inst_49050);

return statearr_49133;
})();
var statearr_49134_49176 = state_49110__$1;
(statearr_49134_49176[(2)] = inst_49052);

(statearr_49134_49176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (3))){
var inst_49042 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49110__$1 = state_49110;
if(cljs.core.truth_(inst_49042)){
var statearr_49135_49177 = state_49110__$1;
(statearr_49135_49177[(1)] = (13));

} else {
var statearr_49136_49178 = state_49110__$1;
(statearr_49136_49178[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (12))){
var inst_49038 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
var statearr_49137_49179 = state_49110__$1;
(statearr_49137_49179[(2)] = inst_49038);

(statearr_49137_49179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (2))){
var inst_49025 = (state_49110[(10)]);
var inst_49025__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49110__$1 = (function (){var statearr_49138 = state_49110;
(statearr_49138[(10)] = inst_49025__$1);

return statearr_49138;
})();
if(cljs.core.truth_(inst_49025__$1)){
var statearr_49139_49180 = state_49110__$1;
(statearr_49139_49180[(1)] = (5));

} else {
var statearr_49140_49181 = state_49110__$1;
(statearr_49140_49181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (23))){
var inst_49068 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49110__$1 = state_49110;
if(cljs.core.truth_(inst_49068)){
var statearr_49141_49182 = state_49110__$1;
(statearr_49141_49182[(1)] = (25));

} else {
var statearr_49142_49183 = state_49110__$1;
(statearr_49142_49183[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (35))){
var state_49110__$1 = state_49110;
var statearr_49143_49184 = state_49110__$1;
(statearr_49143_49184[(2)] = null);

(statearr_49143_49184[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (19))){
var inst_49063 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49110__$1 = state_49110;
if(cljs.core.truth_(inst_49063)){
var statearr_49144_49185 = state_49110__$1;
(statearr_49144_49185[(1)] = (22));

} else {
var statearr_49145_49186 = state_49110__$1;
(statearr_49145_49186[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (11))){
var inst_49034 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
var statearr_49146_49187 = state_49110__$1;
(statearr_49146_49187[(2)] = inst_49034);

(statearr_49146_49187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (9))){
var inst_49036 = figwheel.client.heads_up.clear.call(null);
var state_49110__$1 = state_49110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49110__$1,(12),inst_49036);
} else {
if((state_val_49111 === (5))){
var inst_49027 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49110__$1 = state_49110;
var statearr_49147_49188 = state_49110__$1;
(statearr_49147_49188[(2)] = inst_49027);

(statearr_49147_49188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (14))){
var inst_49054 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49110__$1 = state_49110;
if(cljs.core.truth_(inst_49054)){
var statearr_49148_49189 = state_49110__$1;
(statearr_49148_49189[(1)] = (18));

} else {
var statearr_49149_49190 = state_49110__$1;
(statearr_49149_49190[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (26))){
var inst_49080 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49110__$1 = state_49110;
if(cljs.core.truth_(inst_49080)){
var statearr_49150_49191 = state_49110__$1;
(statearr_49150_49191[(1)] = (30));

} else {
var statearr_49151_49192 = state_49110__$1;
(statearr_49151_49192[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (16))){
var inst_49046 = (state_49110[(2)]);
var inst_49047 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49048 = figwheel.client.heads_up.display_exception.call(null,inst_49047);
var state_49110__$1 = (function (){var statearr_49152 = state_49110;
(statearr_49152[(13)] = inst_49046);

return statearr_49152;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49110__$1,(17),inst_49048);
} else {
if((state_val_49111 === (30))){
var inst_49082 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49083 = figwheel.client.heads_up.display_warning.call(null,inst_49082);
var state_49110__$1 = state_49110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49110__$1,(33),inst_49083);
} else {
if((state_val_49111 === (10))){
var inst_49040 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
var statearr_49153_49193 = state_49110__$1;
(statearr_49153_49193[(2)] = inst_49040);

(statearr_49153_49193[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (18))){
var inst_49056 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49057 = figwheel.client.heads_up.display_exception.call(null,inst_49056);
var state_49110__$1 = state_49110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49110__$1,(21),inst_49057);
} else {
if((state_val_49111 === (37))){
var inst_49093 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
var statearr_49154_49194 = state_49110__$1;
(statearr_49154_49194[(2)] = inst_49093);

(statearr_49154_49194[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (8))){
var inst_49032 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49110__$1 = state_49110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49110__$1,(11),inst_49032);
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
});})(c__45733__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__45643__auto__,c__45733__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45644__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45644__auto____0 = (function (){
var statearr_49155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49155[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45644__auto__);

(statearr_49155[(1)] = (1));

return statearr_49155;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45644__auto____1 = (function (state_49110){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_49110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e49156){if((e49156 instanceof Object)){
var ex__45647__auto__ = e49156;
var statearr_49157_49195 = state_49110;
(statearr_49157_49195[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49196 = state_49110;
state_49110 = G__49196;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45644__auto__ = function(state_49110){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45644__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45644__auto____1.call(this,state_49110);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45644__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45644__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto__,msg_hist,msg_names,msg))
})();
var state__45735__auto__ = (function (){var statearr_49158 = f__45734__auto__.call(null);
(statearr_49158[(6)] = c__45733__auto__);

return statearr_49158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto__,msg_hist,msg_names,msg))
);

return c__45733__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__45733__auto___49225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___49225,ch){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___49225,ch){
return (function (state_49211){
var state_val_49212 = (state_49211[(1)]);
if((state_val_49212 === (1))){
var state_49211__$1 = state_49211;
var statearr_49213_49226 = state_49211__$1;
(statearr_49213_49226[(2)] = null);

(statearr_49213_49226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49212 === (2))){
var state_49211__$1 = state_49211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49211__$1,(4),ch);
} else {
if((state_val_49212 === (3))){
var inst_49209 = (state_49211[(2)]);
var state_49211__$1 = state_49211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49211__$1,inst_49209);
} else {
if((state_val_49212 === (4))){
var inst_49199 = (state_49211[(7)]);
var inst_49199__$1 = (state_49211[(2)]);
var state_49211__$1 = (function (){var statearr_49214 = state_49211;
(statearr_49214[(7)] = inst_49199__$1);

return statearr_49214;
})();
if(cljs.core.truth_(inst_49199__$1)){
var statearr_49215_49227 = state_49211__$1;
(statearr_49215_49227[(1)] = (5));

} else {
var statearr_49216_49228 = state_49211__$1;
(statearr_49216_49228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49212 === (5))){
var inst_49199 = (state_49211[(7)]);
var inst_49201 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49199);
var state_49211__$1 = state_49211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49211__$1,(8),inst_49201);
} else {
if((state_val_49212 === (6))){
var state_49211__$1 = state_49211;
var statearr_49217_49229 = state_49211__$1;
(statearr_49217_49229[(2)] = null);

(statearr_49217_49229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49212 === (7))){
var inst_49207 = (state_49211[(2)]);
var state_49211__$1 = state_49211;
var statearr_49218_49230 = state_49211__$1;
(statearr_49218_49230[(2)] = inst_49207);

(statearr_49218_49230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49212 === (8))){
var inst_49203 = (state_49211[(2)]);
var state_49211__$1 = (function (){var statearr_49219 = state_49211;
(statearr_49219[(8)] = inst_49203);

return statearr_49219;
})();
var statearr_49220_49231 = state_49211__$1;
(statearr_49220_49231[(2)] = null);

(statearr_49220_49231[(1)] = (2));


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
});})(c__45733__auto___49225,ch))
;
return ((function (switch__45643__auto__,c__45733__auto___49225,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__45644__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__45644__auto____0 = (function (){
var statearr_49221 = [null,null,null,null,null,null,null,null,null];
(statearr_49221[(0)] = figwheel$client$heads_up_plugin_$_state_machine__45644__auto__);

(statearr_49221[(1)] = (1));

return statearr_49221;
});
var figwheel$client$heads_up_plugin_$_state_machine__45644__auto____1 = (function (state_49211){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_49211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e49222){if((e49222 instanceof Object)){
var ex__45647__auto__ = e49222;
var statearr_49223_49232 = state_49211;
(statearr_49223_49232[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49233 = state_49211;
state_49211 = G__49233;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__45644__auto__ = function(state_49211){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__45644__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__45644__auto____1.call(this,state_49211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__45644__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__45644__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___49225,ch))
})();
var state__45735__auto__ = (function (){var statearr_49224 = f__45734__auto__.call(null);
(statearr_49224[(6)] = c__45733__auto___49225);

return statearr_49224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___49225,ch))
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
var c__45733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto__){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto__){
return (function (state_49239){
var state_val_49240 = (state_49239[(1)]);
if((state_val_49240 === (1))){
var inst_49234 = cljs.core.async.timeout.call(null,(3000));
var state_49239__$1 = state_49239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49239__$1,(2),inst_49234);
} else {
if((state_val_49240 === (2))){
var inst_49236 = (state_49239[(2)]);
var inst_49237 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49239__$1 = (function (){var statearr_49241 = state_49239;
(statearr_49241[(7)] = inst_49236);

return statearr_49241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49239__$1,inst_49237);
} else {
return null;
}
}
});})(c__45733__auto__))
;
return ((function (switch__45643__auto__,c__45733__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__45644__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__45644__auto____0 = (function (){
var statearr_49242 = [null,null,null,null,null,null,null,null];
(statearr_49242[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__45644__auto__);

(statearr_49242[(1)] = (1));

return statearr_49242;
});
var figwheel$client$enforce_project_plugin_$_state_machine__45644__auto____1 = (function (state_49239){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_49239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e49243){if((e49243 instanceof Object)){
var ex__45647__auto__ = e49243;
var statearr_49244_49246 = state_49239;
(statearr_49244_49246[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49247 = state_49239;
state_49239 = G__49247;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__45644__auto__ = function(state_49239){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__45644__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__45644__auto____1.call(this,state_49239);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__45644__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__45644__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto__))
})();
var state__45735__auto__ = (function (){var statearr_49245 = f__45734__auto__.call(null);
(statearr_49245[(6)] = c__45733__auto__);

return statearr_49245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto__))
);

return c__45733__auto__;
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
var c__45733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto__,figwheel_version,temp__5290__auto__){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto__,figwheel_version,temp__5290__auto__){
return (function (state_49254){
var state_val_49255 = (state_49254[(1)]);
if((state_val_49255 === (1))){
var inst_49248 = cljs.core.async.timeout.call(null,(2000));
var state_49254__$1 = state_49254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49254__$1,(2),inst_49248);
} else {
if((state_val_49255 === (2))){
var inst_49250 = (state_49254[(2)]);
var inst_49251 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_49252 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49251);
var state_49254__$1 = (function (){var statearr_49256 = state_49254;
(statearr_49256[(7)] = inst_49250);

return statearr_49256;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49254__$1,inst_49252);
} else {
return null;
}
}
});})(c__45733__auto__,figwheel_version,temp__5290__auto__))
;
return ((function (switch__45643__auto__,c__45733__auto__,figwheel_version,temp__5290__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45644__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45644__auto____0 = (function (){
var statearr_49257 = [null,null,null,null,null,null,null,null];
(statearr_49257[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45644__auto__);

(statearr_49257[(1)] = (1));

return statearr_49257;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45644__auto____1 = (function (state_49254){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_49254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e49258){if((e49258 instanceof Object)){
var ex__45647__auto__ = e49258;
var statearr_49259_49261 = state_49254;
(statearr_49259_49261[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49262 = state_49254;
state_49254 = G__49262;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45644__auto__ = function(state_49254){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45644__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45644__auto____1.call(this,state_49254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45644__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45644__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto__,figwheel_version,temp__5290__auto__))
})();
var state__45735__auto__ = (function (){var statearr_49260 = f__45734__auto__.call(null);
(statearr_49260[(6)] = c__45733__auto__);

return statearr_49260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto__,figwheel_version,temp__5290__auto__))
);

return c__45733__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49263){
var map__49264 = p__49263;
var map__49264__$1 = ((((!((map__49264 == null)))?((((map__49264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49264):map__49264);
var file = cljs.core.get.call(null,map__49264__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49264__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49264__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49266 = "";
var G__49266__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49266),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__49266);
var G__49266__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49266__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__49266__$1);
if(cljs.core.truth_((function (){var and__30237__auto__ = line;
if(cljs.core.truth_(and__30237__auto__)){
return column;
} else {
return and__30237__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49266__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__49266__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49267){
var map__49268 = p__49267;
var map__49268__$1 = ((((!((map__49268 == null)))?((((map__49268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49268):map__49268);
var ed = map__49268__$1;
var formatted_exception = cljs.core.get.call(null,map__49268__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49268__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49268__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49270_49274 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49271_49275 = null;
var count__49272_49276 = (0);
var i__49273_49277 = (0);
while(true){
if((i__49273_49277 < count__49272_49276)){
var msg_49278 = cljs.core._nth.call(null,chunk__49271_49275,i__49273_49277);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49278);

var G__49279 = seq__49270_49274;
var G__49280 = chunk__49271_49275;
var G__49281 = count__49272_49276;
var G__49282 = (i__49273_49277 + (1));
seq__49270_49274 = G__49279;
chunk__49271_49275 = G__49280;
count__49272_49276 = G__49281;
i__49273_49277 = G__49282;
continue;
} else {
var temp__5290__auto___49283 = cljs.core.seq.call(null,seq__49270_49274);
if(temp__5290__auto___49283){
var seq__49270_49284__$1 = temp__5290__auto___49283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49270_49284__$1)){
var c__31180__auto___49285 = cljs.core.chunk_first.call(null,seq__49270_49284__$1);
var G__49286 = cljs.core.chunk_rest.call(null,seq__49270_49284__$1);
var G__49287 = c__31180__auto___49285;
var G__49288 = cljs.core.count.call(null,c__31180__auto___49285);
var G__49289 = (0);
seq__49270_49274 = G__49286;
chunk__49271_49275 = G__49287;
count__49272_49276 = G__49288;
i__49273_49277 = G__49289;
continue;
} else {
var msg_49290 = cljs.core.first.call(null,seq__49270_49284__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49290);

var G__49291 = cljs.core.next.call(null,seq__49270_49284__$1);
var G__49292 = null;
var G__49293 = (0);
var G__49294 = (0);
seq__49270_49274 = G__49291;
chunk__49271_49275 = G__49292;
count__49272_49276 = G__49293;
i__49273_49277 = G__49294;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__49295){
var map__49296 = p__49295;
var map__49296__$1 = ((((!((map__49296 == null)))?((((map__49296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49296):map__49296);
var w = map__49296__$1;
var message = cljs.core.get.call(null,map__49296__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__49298 = cljs.core.seq.call(null,plugins);
var chunk__49299 = null;
var count__49300 = (0);
var i__49301 = (0);
while(true){
if((i__49301 < count__49300)){
var vec__49302 = cljs.core._nth.call(null,chunk__49299,i__49301);
var k = cljs.core.nth.call(null,vec__49302,(0),null);
var plugin = cljs.core.nth.call(null,vec__49302,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49308 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49298,chunk__49299,count__49300,i__49301,pl_49308,vec__49302,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_49308.call(null,msg_hist);
});})(seq__49298,chunk__49299,count__49300,i__49301,pl_49308,vec__49302,k,plugin))
);
} else {
}

var G__49309 = seq__49298;
var G__49310 = chunk__49299;
var G__49311 = count__49300;
var G__49312 = (i__49301 + (1));
seq__49298 = G__49309;
chunk__49299 = G__49310;
count__49300 = G__49311;
i__49301 = G__49312;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__49298);
if(temp__5290__auto__){
var seq__49298__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49298__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__49298__$1);
var G__49313 = cljs.core.chunk_rest.call(null,seq__49298__$1);
var G__49314 = c__31180__auto__;
var G__49315 = cljs.core.count.call(null,c__31180__auto__);
var G__49316 = (0);
seq__49298 = G__49313;
chunk__49299 = G__49314;
count__49300 = G__49315;
i__49301 = G__49316;
continue;
} else {
var vec__49305 = cljs.core.first.call(null,seq__49298__$1);
var k = cljs.core.nth.call(null,vec__49305,(0),null);
var plugin = cljs.core.nth.call(null,vec__49305,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49317 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49298,chunk__49299,count__49300,i__49301,pl_49317,vec__49305,k,plugin,seq__49298__$1,temp__5290__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_49317.call(null,msg_hist);
});})(seq__49298,chunk__49299,count__49300,i__49301,pl_49317,vec__49305,k,plugin,seq__49298__$1,temp__5290__auto__))
);
} else {
}

var G__49318 = cljs.core.next.call(null,seq__49298__$1);
var G__49319 = null;
var G__49320 = (0);
var G__49321 = (0);
seq__49298 = G__49318;
chunk__49299 = G__49319;
count__49300 = G__49320;
i__49301 = G__49321;
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
var G__49323 = arguments.length;
switch (G__49323) {
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

var seq__49324_49329 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__49325_49330 = null;
var count__49326_49331 = (0);
var i__49327_49332 = (0);
while(true){
if((i__49327_49332 < count__49326_49331)){
var msg_49333 = cljs.core._nth.call(null,chunk__49325_49330,i__49327_49332);
figwheel.client.socket.handle_incoming_message.call(null,msg_49333);

var G__49334 = seq__49324_49329;
var G__49335 = chunk__49325_49330;
var G__49336 = count__49326_49331;
var G__49337 = (i__49327_49332 + (1));
seq__49324_49329 = G__49334;
chunk__49325_49330 = G__49335;
count__49326_49331 = G__49336;
i__49327_49332 = G__49337;
continue;
} else {
var temp__5290__auto___49338 = cljs.core.seq.call(null,seq__49324_49329);
if(temp__5290__auto___49338){
var seq__49324_49339__$1 = temp__5290__auto___49338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49324_49339__$1)){
var c__31180__auto___49340 = cljs.core.chunk_first.call(null,seq__49324_49339__$1);
var G__49341 = cljs.core.chunk_rest.call(null,seq__49324_49339__$1);
var G__49342 = c__31180__auto___49340;
var G__49343 = cljs.core.count.call(null,c__31180__auto___49340);
var G__49344 = (0);
seq__49324_49329 = G__49341;
chunk__49325_49330 = G__49342;
count__49326_49331 = G__49343;
i__49327_49332 = G__49344;
continue;
} else {
var msg_49345 = cljs.core.first.call(null,seq__49324_49339__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_49345);

var G__49346 = cljs.core.next.call(null,seq__49324_49339__$1);
var G__49347 = null;
var G__49348 = (0);
var G__49349 = (0);
seq__49324_49329 = G__49346;
chunk__49325_49330 = G__49347;
count__49326_49331 = G__49348;
i__49327_49332 = G__49349;
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
var len__31526__auto___49354 = arguments.length;
var i__31527__auto___49355 = (0);
while(true){
if((i__31527__auto___49355 < len__31526__auto___49354)){
args__31533__auto__.push((arguments[i__31527__auto___49355]));

var G__49356 = (i__31527__auto___49355 + (1));
i__31527__auto___49355 = G__49356;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49351){
var map__49352 = p__49351;
var map__49352__$1 = ((((!((map__49352 == null)))?((((map__49352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49352):map__49352);
var opts = map__49352__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49350){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49350));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e49357){if((e49357 instanceof Error)){
var e = e49357;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e49357;

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
return (function (p__49358){
var map__49359 = p__49358;
var map__49359__$1 = ((((!((map__49359 == null)))?((((map__49359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49359):map__49359);
var msg_name = cljs.core.get.call(null,map__49359__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1509397950036
