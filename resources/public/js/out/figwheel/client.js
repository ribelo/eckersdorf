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
}catch (e49927){if((e49927 instanceof Error)){
var e = e49927;
return "Error: Unable to stringify";
} else {
throw e49927;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__49930 = arguments.length;
switch (G__49930) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__49928_SHARP_){
if(typeof p1__49928_SHARP_ === 'string'){
return p1__49928_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__49928_SHARP_);
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
var len__31526__auto___49933 = arguments.length;
var i__31527__auto___49934 = (0);
while(true){
if((i__31527__auto___49934 < len__31526__auto___49933)){
args__31533__auto__.push((arguments[i__31527__auto___49934]));

var G__49935 = (i__31527__auto___49934 + (1));
i__31527__auto___49934 = G__49935;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq49932){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49932));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31533__auto__ = [];
var len__31526__auto___49937 = arguments.length;
var i__31527__auto___49938 = (0);
while(true){
if((i__31527__auto___49938 < len__31526__auto___49937)){
args__31533__auto__.push((arguments[i__31527__auto___49938]));

var G__49939 = (i__31527__auto___49938 + (1));
i__31527__auto___49938 = G__49939;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq49936){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49936));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__49940){
var map__49941 = p__49940;
var map__49941__$1 = ((((!((map__49941 == null)))?((((map__49941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49941):map__49941);
var message = cljs.core.get.call(null,map__49941__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__49941__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__46833__auto___50020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___50020,ch){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___50020,ch){
return (function (state_49992){
var state_val_49993 = (state_49992[(1)]);
if((state_val_49993 === (7))){
var inst_49988 = (state_49992[(2)]);
var state_49992__$1 = state_49992;
var statearr_49994_50021 = state_49992__$1;
(statearr_49994_50021[(2)] = inst_49988);

(statearr_49994_50021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (1))){
var state_49992__$1 = state_49992;
var statearr_49995_50022 = state_49992__$1;
(statearr_49995_50022[(2)] = null);

(statearr_49995_50022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (4))){
var inst_49945 = (state_49992[(7)]);
var inst_49945__$1 = (state_49992[(2)]);
var state_49992__$1 = (function (){var statearr_49996 = state_49992;
(statearr_49996[(7)] = inst_49945__$1);

return statearr_49996;
})();
if(cljs.core.truth_(inst_49945__$1)){
var statearr_49997_50023 = state_49992__$1;
(statearr_49997_50023[(1)] = (5));

} else {
var statearr_49998_50024 = state_49992__$1;
(statearr_49998_50024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (15))){
var inst_49952 = (state_49992[(8)]);
var inst_49967 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49952);
var inst_49968 = cljs.core.first.call(null,inst_49967);
var inst_49969 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_49968);
var inst_49970 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49969)].join('');
var inst_49971 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_49970);
var state_49992__$1 = state_49992;
var statearr_49999_50025 = state_49992__$1;
(statearr_49999_50025[(2)] = inst_49971);

(statearr_49999_50025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (13))){
var inst_49976 = (state_49992[(2)]);
var state_49992__$1 = state_49992;
var statearr_50000_50026 = state_49992__$1;
(statearr_50000_50026[(2)] = inst_49976);

(statearr_50000_50026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (6))){
var state_49992__$1 = state_49992;
var statearr_50001_50027 = state_49992__$1;
(statearr_50001_50027[(2)] = null);

(statearr_50001_50027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (17))){
var inst_49974 = (state_49992[(2)]);
var state_49992__$1 = state_49992;
var statearr_50002_50028 = state_49992__$1;
(statearr_50002_50028[(2)] = inst_49974);

(statearr_50002_50028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (3))){
var inst_49990 = (state_49992[(2)]);
var state_49992__$1 = state_49992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49992__$1,inst_49990);
} else {
if((state_val_49993 === (12))){
var inst_49951 = (state_49992[(9)]);
var inst_49965 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_49951,opts);
var state_49992__$1 = state_49992;
if(cljs.core.truth_(inst_49965)){
var statearr_50003_50029 = state_49992__$1;
(statearr_50003_50029[(1)] = (15));

} else {
var statearr_50004_50030 = state_49992__$1;
(statearr_50004_50030[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (2))){
var state_49992__$1 = state_49992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49992__$1,(4),ch);
} else {
if((state_val_49993 === (11))){
var inst_49952 = (state_49992[(8)]);
var inst_49957 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49958 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_49952);
var inst_49959 = cljs.core.async.timeout.call(null,(1000));
var inst_49960 = [inst_49958,inst_49959];
var inst_49961 = (new cljs.core.PersistentVector(null,2,(5),inst_49957,inst_49960,null));
var state_49992__$1 = state_49992;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49992__$1,(14),inst_49961);
} else {
if((state_val_49993 === (9))){
var inst_49952 = (state_49992[(8)]);
var inst_49978 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_49979 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49952);
var inst_49980 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49979);
var inst_49981 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49980)].join('');
var inst_49982 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_49981);
var state_49992__$1 = (function (){var statearr_50005 = state_49992;
(statearr_50005[(10)] = inst_49978);

return statearr_50005;
})();
var statearr_50006_50031 = state_49992__$1;
(statearr_50006_50031[(2)] = inst_49982);

(statearr_50006_50031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (5))){
var inst_49945 = (state_49992[(7)]);
var inst_49947 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_49948 = (new cljs.core.PersistentArrayMap(null,2,inst_49947,null));
var inst_49949 = (new cljs.core.PersistentHashSet(null,inst_49948,null));
var inst_49950 = figwheel.client.focus_msgs.call(null,inst_49949,inst_49945);
var inst_49951 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_49950);
var inst_49952 = cljs.core.first.call(null,inst_49950);
var inst_49953 = figwheel.client.autoload_QMARK_.call(null);
var state_49992__$1 = (function (){var statearr_50007 = state_49992;
(statearr_50007[(8)] = inst_49952);

(statearr_50007[(9)] = inst_49951);

return statearr_50007;
})();
if(cljs.core.truth_(inst_49953)){
var statearr_50008_50032 = state_49992__$1;
(statearr_50008_50032[(1)] = (8));

} else {
var statearr_50009_50033 = state_49992__$1;
(statearr_50009_50033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (14))){
var inst_49963 = (state_49992[(2)]);
var state_49992__$1 = state_49992;
var statearr_50010_50034 = state_49992__$1;
(statearr_50010_50034[(2)] = inst_49963);

(statearr_50010_50034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (16))){
var state_49992__$1 = state_49992;
var statearr_50011_50035 = state_49992__$1;
(statearr_50011_50035[(2)] = null);

(statearr_50011_50035[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (10))){
var inst_49984 = (state_49992[(2)]);
var state_49992__$1 = (function (){var statearr_50012 = state_49992;
(statearr_50012[(11)] = inst_49984);

return statearr_50012;
})();
var statearr_50013_50036 = state_49992__$1;
(statearr_50013_50036[(2)] = null);

(statearr_50013_50036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (8))){
var inst_49951 = (state_49992[(9)]);
var inst_49955 = figwheel.client.reload_file_state_QMARK_.call(null,inst_49951,opts);
var state_49992__$1 = state_49992;
if(cljs.core.truth_(inst_49955)){
var statearr_50014_50037 = state_49992__$1;
(statearr_50014_50037[(1)] = (11));

} else {
var statearr_50015_50038 = state_49992__$1;
(statearr_50015_50038[(1)] = (12));

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
});})(c__46833__auto___50020,ch))
;
return ((function (switch__46743__auto__,c__46833__auto___50020,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__46744__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__46744__auto____0 = (function (){
var statearr_50016 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50016[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__46744__auto__);

(statearr_50016[(1)] = (1));

return statearr_50016;
});
var figwheel$client$file_reloader_plugin_$_state_machine__46744__auto____1 = (function (state_49992){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_49992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e50017){if((e50017 instanceof Object)){
var ex__46747__auto__ = e50017;
var statearr_50018_50039 = state_49992;
(statearr_50018_50039[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50040 = state_49992;
state_49992 = G__50040;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__46744__auto__ = function(state_49992){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__46744__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__46744__auto____1.call(this,state_49992);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__46744__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__46744__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___50020,ch))
})();
var state__46835__auto__ = (function (){var statearr_50019 = f__46834__auto__.call(null);
(statearr_50019[(6)] = c__46833__auto___50020);

return statearr_50019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___50020,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50041_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50041_SHARP_));
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
var base_path_50043 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50043){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e50042){if((e50042 instanceof Error)){
var e = e50042;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50043], null));
} else {
var e = e50042;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_50043))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50044){
var map__50045 = p__50044;
var map__50045__$1 = ((((!((map__50045 == null)))?((((map__50045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50045):map__50045);
var opts = map__50045__$1;
var build_id = cljs.core.get.call(null,map__50045__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50045,map__50045__$1,opts,build_id){
return (function (p__50047){
var vec__50048 = p__50047;
var seq__50049 = cljs.core.seq.call(null,vec__50048);
var first__50050 = cljs.core.first.call(null,seq__50049);
var seq__50049__$1 = cljs.core.next.call(null,seq__50049);
var map__50051 = first__50050;
var map__50051__$1 = ((((!((map__50051 == null)))?((((map__50051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50051):map__50051);
var msg = map__50051__$1;
var msg_name = cljs.core.get.call(null,map__50051__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50049__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50048,seq__50049,first__50050,seq__50049__$1,map__50051,map__50051__$1,msg,msg_name,_,map__50045,map__50045__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50048,seq__50049,first__50050,seq__50049__$1,map__50051,map__50051__$1,msg,msg_name,_,map__50045,map__50045__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__50045,map__50045__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50053){
var vec__50054 = p__50053;
var seq__50055 = cljs.core.seq.call(null,vec__50054);
var first__50056 = cljs.core.first.call(null,seq__50055);
var seq__50055__$1 = cljs.core.next.call(null,seq__50055);
var map__50057 = first__50056;
var map__50057__$1 = ((((!((map__50057 == null)))?((((map__50057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50057):map__50057);
var msg = map__50057__$1;
var msg_name = cljs.core.get.call(null,map__50057__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50055__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50059){
var map__50060 = p__50059;
var map__50060__$1 = ((((!((map__50060 == null)))?((((map__50060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50060):map__50060);
var on_compile_warning = cljs.core.get.call(null,map__50060__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50060__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50060,map__50060__$1,on_compile_warning,on_compile_fail){
return (function (p__50062){
var vec__50063 = p__50062;
var seq__50064 = cljs.core.seq.call(null,vec__50063);
var first__50065 = cljs.core.first.call(null,seq__50064);
var seq__50064__$1 = cljs.core.next.call(null,seq__50064);
var map__50066 = first__50065;
var map__50066__$1 = ((((!((map__50066 == null)))?((((map__50066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50066):map__50066);
var msg = map__50066__$1;
var msg_name = cljs.core.get.call(null,map__50066__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50064__$1;
var pred__50068 = cljs.core._EQ_;
var expr__50069 = msg_name;
if(cljs.core.truth_(pred__50068.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50069))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50068.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50069))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__50060,map__50060__$1,on_compile_warning,on_compile_fail))
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
var c__46833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto__,msg_hist,msg_names,msg){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto__,msg_hist,msg_names,msg){
return (function (state_50158){
var state_val_50159 = (state_50158[(1)]);
if((state_val_50159 === (7))){
var inst_50078 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
if(cljs.core.truth_(inst_50078)){
var statearr_50160_50207 = state_50158__$1;
(statearr_50160_50207[(1)] = (8));

} else {
var statearr_50161_50208 = state_50158__$1;
(statearr_50161_50208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (20))){
var inst_50152 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
var statearr_50162_50209 = state_50158__$1;
(statearr_50162_50209[(2)] = inst_50152);

(statearr_50162_50209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (27))){
var inst_50148 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
var statearr_50163_50210 = state_50158__$1;
(statearr_50163_50210[(2)] = inst_50148);

(statearr_50163_50210[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (1))){
var inst_50071 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50158__$1 = state_50158;
if(cljs.core.truth_(inst_50071)){
var statearr_50164_50211 = state_50158__$1;
(statearr_50164_50211[(1)] = (2));

} else {
var statearr_50165_50212 = state_50158__$1;
(statearr_50165_50212[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (24))){
var inst_50150 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
var statearr_50166_50213 = state_50158__$1;
(statearr_50166_50213[(2)] = inst_50150);

(statearr_50166_50213[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (4))){
var inst_50156 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50158__$1,inst_50156);
} else {
if((state_val_50159 === (15))){
var inst_50154 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
var statearr_50167_50214 = state_50158__$1;
(statearr_50167_50214[(2)] = inst_50154);

(statearr_50167_50214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (21))){
var inst_50107 = (state_50158[(2)]);
var inst_50108 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50109 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50108);
var state_50158__$1 = (function (){var statearr_50168 = state_50158;
(statearr_50168[(7)] = inst_50107);

return statearr_50168;
})();
var statearr_50169_50215 = state_50158__$1;
(statearr_50169_50215[(2)] = inst_50109);

(statearr_50169_50215[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (31))){
var inst_50137 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50158__$1 = state_50158;
if(cljs.core.truth_(inst_50137)){
var statearr_50170_50216 = state_50158__$1;
(statearr_50170_50216[(1)] = (34));

} else {
var statearr_50171_50217 = state_50158__$1;
(statearr_50171_50217[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (32))){
var inst_50146 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
var statearr_50172_50218 = state_50158__$1;
(statearr_50172_50218[(2)] = inst_50146);

(statearr_50172_50218[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (33))){
var inst_50133 = (state_50158[(2)]);
var inst_50134 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50135 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50134);
var state_50158__$1 = (function (){var statearr_50173 = state_50158;
(statearr_50173[(8)] = inst_50133);

return statearr_50173;
})();
var statearr_50174_50219 = state_50158__$1;
(statearr_50174_50219[(2)] = inst_50135);

(statearr_50174_50219[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (13))){
var inst_50092 = figwheel.client.heads_up.clear.call(null);
var state_50158__$1 = state_50158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50158__$1,(16),inst_50092);
} else {
if((state_val_50159 === (22))){
var inst_50113 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50114 = figwheel.client.heads_up.append_warning_message.call(null,inst_50113);
var state_50158__$1 = state_50158;
var statearr_50175_50220 = state_50158__$1;
(statearr_50175_50220[(2)] = inst_50114);

(statearr_50175_50220[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (36))){
var inst_50144 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
var statearr_50176_50221 = state_50158__$1;
(statearr_50176_50221[(2)] = inst_50144);

(statearr_50176_50221[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (29))){
var inst_50124 = (state_50158[(2)]);
var inst_50125 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50126 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50125);
var state_50158__$1 = (function (){var statearr_50177 = state_50158;
(statearr_50177[(9)] = inst_50124);

return statearr_50177;
})();
var statearr_50178_50222 = state_50158__$1;
(statearr_50178_50222[(2)] = inst_50126);

(statearr_50178_50222[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (6))){
var inst_50073 = (state_50158[(10)]);
var state_50158__$1 = state_50158;
var statearr_50179_50223 = state_50158__$1;
(statearr_50179_50223[(2)] = inst_50073);

(statearr_50179_50223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (28))){
var inst_50120 = (state_50158[(2)]);
var inst_50121 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50122 = figwheel.client.heads_up.display_warning.call(null,inst_50121);
var state_50158__$1 = (function (){var statearr_50180 = state_50158;
(statearr_50180[(11)] = inst_50120);

return statearr_50180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50158__$1,(29),inst_50122);
} else {
if((state_val_50159 === (25))){
var inst_50118 = figwheel.client.heads_up.clear.call(null);
var state_50158__$1 = state_50158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50158__$1,(28),inst_50118);
} else {
if((state_val_50159 === (34))){
var inst_50139 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50158__$1 = state_50158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50158__$1,(37),inst_50139);
} else {
if((state_val_50159 === (17))){
var inst_50098 = (state_50158[(2)]);
var inst_50099 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50100 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50099);
var state_50158__$1 = (function (){var statearr_50181 = state_50158;
(statearr_50181[(12)] = inst_50098);

return statearr_50181;
})();
var statearr_50182_50224 = state_50158__$1;
(statearr_50182_50224[(2)] = inst_50100);

(statearr_50182_50224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (3))){
var inst_50090 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50158__$1 = state_50158;
if(cljs.core.truth_(inst_50090)){
var statearr_50183_50225 = state_50158__$1;
(statearr_50183_50225[(1)] = (13));

} else {
var statearr_50184_50226 = state_50158__$1;
(statearr_50184_50226[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (12))){
var inst_50086 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
var statearr_50185_50227 = state_50158__$1;
(statearr_50185_50227[(2)] = inst_50086);

(statearr_50185_50227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (2))){
var inst_50073 = (state_50158[(10)]);
var inst_50073__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50158__$1 = (function (){var statearr_50186 = state_50158;
(statearr_50186[(10)] = inst_50073__$1);

return statearr_50186;
})();
if(cljs.core.truth_(inst_50073__$1)){
var statearr_50187_50228 = state_50158__$1;
(statearr_50187_50228[(1)] = (5));

} else {
var statearr_50188_50229 = state_50158__$1;
(statearr_50188_50229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (23))){
var inst_50116 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50158__$1 = state_50158;
if(cljs.core.truth_(inst_50116)){
var statearr_50189_50230 = state_50158__$1;
(statearr_50189_50230[(1)] = (25));

} else {
var statearr_50190_50231 = state_50158__$1;
(statearr_50190_50231[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (35))){
var state_50158__$1 = state_50158;
var statearr_50191_50232 = state_50158__$1;
(statearr_50191_50232[(2)] = null);

(statearr_50191_50232[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (19))){
var inst_50111 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50158__$1 = state_50158;
if(cljs.core.truth_(inst_50111)){
var statearr_50192_50233 = state_50158__$1;
(statearr_50192_50233[(1)] = (22));

} else {
var statearr_50193_50234 = state_50158__$1;
(statearr_50193_50234[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (11))){
var inst_50082 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
var statearr_50194_50235 = state_50158__$1;
(statearr_50194_50235[(2)] = inst_50082);

(statearr_50194_50235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (9))){
var inst_50084 = figwheel.client.heads_up.clear.call(null);
var state_50158__$1 = state_50158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50158__$1,(12),inst_50084);
} else {
if((state_val_50159 === (5))){
var inst_50075 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50158__$1 = state_50158;
var statearr_50195_50236 = state_50158__$1;
(statearr_50195_50236[(2)] = inst_50075);

(statearr_50195_50236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (14))){
var inst_50102 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50158__$1 = state_50158;
if(cljs.core.truth_(inst_50102)){
var statearr_50196_50237 = state_50158__$1;
(statearr_50196_50237[(1)] = (18));

} else {
var statearr_50197_50238 = state_50158__$1;
(statearr_50197_50238[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (26))){
var inst_50128 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50158__$1 = state_50158;
if(cljs.core.truth_(inst_50128)){
var statearr_50198_50239 = state_50158__$1;
(statearr_50198_50239[(1)] = (30));

} else {
var statearr_50199_50240 = state_50158__$1;
(statearr_50199_50240[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (16))){
var inst_50094 = (state_50158[(2)]);
var inst_50095 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50096 = figwheel.client.heads_up.display_exception.call(null,inst_50095);
var state_50158__$1 = (function (){var statearr_50200 = state_50158;
(statearr_50200[(13)] = inst_50094);

return statearr_50200;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50158__$1,(17),inst_50096);
} else {
if((state_val_50159 === (30))){
var inst_50130 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50131 = figwheel.client.heads_up.display_warning.call(null,inst_50130);
var state_50158__$1 = state_50158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50158__$1,(33),inst_50131);
} else {
if((state_val_50159 === (10))){
var inst_50088 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
var statearr_50201_50241 = state_50158__$1;
(statearr_50201_50241[(2)] = inst_50088);

(statearr_50201_50241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (18))){
var inst_50104 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50105 = figwheel.client.heads_up.display_exception.call(null,inst_50104);
var state_50158__$1 = state_50158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50158__$1,(21),inst_50105);
} else {
if((state_val_50159 === (37))){
var inst_50141 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
var statearr_50202_50242 = state_50158__$1;
(statearr_50202_50242[(2)] = inst_50141);

(statearr_50202_50242[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (8))){
var inst_50080 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50158__$1 = state_50158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50158__$1,(11),inst_50080);
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
});})(c__46833__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__46743__auto__,c__46833__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46744__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46744__auto____0 = (function (){
var statearr_50203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50203[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46744__auto__);

(statearr_50203[(1)] = (1));

return statearr_50203;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46744__auto____1 = (function (state_50158){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_50158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e50204){if((e50204 instanceof Object)){
var ex__46747__auto__ = e50204;
var statearr_50205_50243 = state_50158;
(statearr_50205_50243[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50244 = state_50158;
state_50158 = G__50244;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46744__auto__ = function(state_50158){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46744__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46744__auto____1.call(this,state_50158);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46744__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46744__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto__,msg_hist,msg_names,msg))
})();
var state__46835__auto__ = (function (){var statearr_50206 = f__46834__auto__.call(null);
(statearr_50206[(6)] = c__46833__auto__);

return statearr_50206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto__,msg_hist,msg_names,msg))
);

return c__46833__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__46833__auto___50273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___50273,ch){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___50273,ch){
return (function (state_50259){
var state_val_50260 = (state_50259[(1)]);
if((state_val_50260 === (1))){
var state_50259__$1 = state_50259;
var statearr_50261_50274 = state_50259__$1;
(statearr_50261_50274[(2)] = null);

(statearr_50261_50274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (2))){
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50259__$1,(4),ch);
} else {
if((state_val_50260 === (3))){
var inst_50257 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50259__$1,inst_50257);
} else {
if((state_val_50260 === (4))){
var inst_50247 = (state_50259[(7)]);
var inst_50247__$1 = (state_50259[(2)]);
var state_50259__$1 = (function (){var statearr_50262 = state_50259;
(statearr_50262[(7)] = inst_50247__$1);

return statearr_50262;
})();
if(cljs.core.truth_(inst_50247__$1)){
var statearr_50263_50275 = state_50259__$1;
(statearr_50263_50275[(1)] = (5));

} else {
var statearr_50264_50276 = state_50259__$1;
(statearr_50264_50276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (5))){
var inst_50247 = (state_50259[(7)]);
var inst_50249 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50247);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50259__$1,(8),inst_50249);
} else {
if((state_val_50260 === (6))){
var state_50259__$1 = state_50259;
var statearr_50265_50277 = state_50259__$1;
(statearr_50265_50277[(2)] = null);

(statearr_50265_50277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (7))){
var inst_50255 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50266_50278 = state_50259__$1;
(statearr_50266_50278[(2)] = inst_50255);

(statearr_50266_50278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (8))){
var inst_50251 = (state_50259[(2)]);
var state_50259__$1 = (function (){var statearr_50267 = state_50259;
(statearr_50267[(8)] = inst_50251);

return statearr_50267;
})();
var statearr_50268_50279 = state_50259__$1;
(statearr_50268_50279[(2)] = null);

(statearr_50268_50279[(1)] = (2));


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
});})(c__46833__auto___50273,ch))
;
return ((function (switch__46743__auto__,c__46833__auto___50273,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__46744__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__46744__auto____0 = (function (){
var statearr_50269 = [null,null,null,null,null,null,null,null,null];
(statearr_50269[(0)] = figwheel$client$heads_up_plugin_$_state_machine__46744__auto__);

(statearr_50269[(1)] = (1));

return statearr_50269;
});
var figwheel$client$heads_up_plugin_$_state_machine__46744__auto____1 = (function (state_50259){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_50259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e50270){if((e50270 instanceof Object)){
var ex__46747__auto__ = e50270;
var statearr_50271_50280 = state_50259;
(statearr_50271_50280[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50281 = state_50259;
state_50259 = G__50281;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__46744__auto__ = function(state_50259){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__46744__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__46744__auto____1.call(this,state_50259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__46744__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__46744__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___50273,ch))
})();
var state__46835__auto__ = (function (){var statearr_50272 = f__46834__auto__.call(null);
(statearr_50272[(6)] = c__46833__auto___50273);

return statearr_50272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___50273,ch))
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
var c__46833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto__){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto__){
return (function (state_50287){
var state_val_50288 = (state_50287[(1)]);
if((state_val_50288 === (1))){
var inst_50282 = cljs.core.async.timeout.call(null,(3000));
var state_50287__$1 = state_50287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50287__$1,(2),inst_50282);
} else {
if((state_val_50288 === (2))){
var inst_50284 = (state_50287[(2)]);
var inst_50285 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50287__$1 = (function (){var statearr_50289 = state_50287;
(statearr_50289[(7)] = inst_50284);

return statearr_50289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50287__$1,inst_50285);
} else {
return null;
}
}
});})(c__46833__auto__))
;
return ((function (switch__46743__auto__,c__46833__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__46744__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__46744__auto____0 = (function (){
var statearr_50290 = [null,null,null,null,null,null,null,null];
(statearr_50290[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__46744__auto__);

(statearr_50290[(1)] = (1));

return statearr_50290;
});
var figwheel$client$enforce_project_plugin_$_state_machine__46744__auto____1 = (function (state_50287){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_50287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e50291){if((e50291 instanceof Object)){
var ex__46747__auto__ = e50291;
var statearr_50292_50294 = state_50287;
(statearr_50292_50294[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50295 = state_50287;
state_50287 = G__50295;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__46744__auto__ = function(state_50287){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__46744__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__46744__auto____1.call(this,state_50287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__46744__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__46744__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto__))
})();
var state__46835__auto__ = (function (){var statearr_50293 = f__46834__auto__.call(null);
(statearr_50293[(6)] = c__46833__auto__);

return statearr_50293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto__))
);

return c__46833__auto__;
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
var c__46833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto__,figwheel_version,temp__5290__auto__){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto__,figwheel_version,temp__5290__auto__){
return (function (state_50302){
var state_val_50303 = (state_50302[(1)]);
if((state_val_50303 === (1))){
var inst_50296 = cljs.core.async.timeout.call(null,(2000));
var state_50302__$1 = state_50302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50302__$1,(2),inst_50296);
} else {
if((state_val_50303 === (2))){
var inst_50298 = (state_50302[(2)]);
var inst_50299 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_50300 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50299);
var state_50302__$1 = (function (){var statearr_50304 = state_50302;
(statearr_50304[(7)] = inst_50298);

return statearr_50304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50302__$1,inst_50300);
} else {
return null;
}
}
});})(c__46833__auto__,figwheel_version,temp__5290__auto__))
;
return ((function (switch__46743__auto__,c__46833__auto__,figwheel_version,temp__5290__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46744__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46744__auto____0 = (function (){
var statearr_50305 = [null,null,null,null,null,null,null,null];
(statearr_50305[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46744__auto__);

(statearr_50305[(1)] = (1));

return statearr_50305;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46744__auto____1 = (function (state_50302){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_50302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e50306){if((e50306 instanceof Object)){
var ex__46747__auto__ = e50306;
var statearr_50307_50309 = state_50302;
(statearr_50307_50309[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50310 = state_50302;
state_50302 = G__50310;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46744__auto__ = function(state_50302){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46744__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46744__auto____1.call(this,state_50302);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46744__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46744__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto__,figwheel_version,temp__5290__auto__))
})();
var state__46835__auto__ = (function (){var statearr_50308 = f__46834__auto__.call(null);
(statearr_50308[(6)] = c__46833__auto__);

return statearr_50308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto__,figwheel_version,temp__5290__auto__))
);

return c__46833__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50311){
var map__50312 = p__50311;
var map__50312__$1 = ((((!((map__50312 == null)))?((((map__50312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50312):map__50312);
var file = cljs.core.get.call(null,map__50312__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50312__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50312__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50314 = "";
var G__50314__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50314),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50314);
var G__50314__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50314__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50314__$1);
if(cljs.core.truth_((function (){var and__30237__auto__ = line;
if(cljs.core.truth_(and__30237__auto__)){
return column;
} else {
return and__30237__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50314__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50314__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50315){
var map__50316 = p__50315;
var map__50316__$1 = ((((!((map__50316 == null)))?((((map__50316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50316):map__50316);
var ed = map__50316__$1;
var formatted_exception = cljs.core.get.call(null,map__50316__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50316__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50316__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50318_50322 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50319_50323 = null;
var count__50320_50324 = (0);
var i__50321_50325 = (0);
while(true){
if((i__50321_50325 < count__50320_50324)){
var msg_50326 = cljs.core._nth.call(null,chunk__50319_50323,i__50321_50325);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50326);

var G__50327 = seq__50318_50322;
var G__50328 = chunk__50319_50323;
var G__50329 = count__50320_50324;
var G__50330 = (i__50321_50325 + (1));
seq__50318_50322 = G__50327;
chunk__50319_50323 = G__50328;
count__50320_50324 = G__50329;
i__50321_50325 = G__50330;
continue;
} else {
var temp__5290__auto___50331 = cljs.core.seq.call(null,seq__50318_50322);
if(temp__5290__auto___50331){
var seq__50318_50332__$1 = temp__5290__auto___50331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50318_50332__$1)){
var c__31180__auto___50333 = cljs.core.chunk_first.call(null,seq__50318_50332__$1);
var G__50334 = cljs.core.chunk_rest.call(null,seq__50318_50332__$1);
var G__50335 = c__31180__auto___50333;
var G__50336 = cljs.core.count.call(null,c__31180__auto___50333);
var G__50337 = (0);
seq__50318_50322 = G__50334;
chunk__50319_50323 = G__50335;
count__50320_50324 = G__50336;
i__50321_50325 = G__50337;
continue;
} else {
var msg_50338 = cljs.core.first.call(null,seq__50318_50332__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50338);

var G__50339 = cljs.core.next.call(null,seq__50318_50332__$1);
var G__50340 = null;
var G__50341 = (0);
var G__50342 = (0);
seq__50318_50322 = G__50339;
chunk__50319_50323 = G__50340;
count__50320_50324 = G__50341;
i__50321_50325 = G__50342;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50343){
var map__50344 = p__50343;
var map__50344__$1 = ((((!((map__50344 == null)))?((((map__50344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50344):map__50344);
var w = map__50344__$1;
var message = cljs.core.get.call(null,map__50344__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__50346 = cljs.core.seq.call(null,plugins);
var chunk__50347 = null;
var count__50348 = (0);
var i__50349 = (0);
while(true){
if((i__50349 < count__50348)){
var vec__50350 = cljs.core._nth.call(null,chunk__50347,i__50349);
var k = cljs.core.nth.call(null,vec__50350,(0),null);
var plugin = cljs.core.nth.call(null,vec__50350,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50356 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50346,chunk__50347,count__50348,i__50349,pl_50356,vec__50350,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50356.call(null,msg_hist);
});})(seq__50346,chunk__50347,count__50348,i__50349,pl_50356,vec__50350,k,plugin))
);
} else {
}

var G__50357 = seq__50346;
var G__50358 = chunk__50347;
var G__50359 = count__50348;
var G__50360 = (i__50349 + (1));
seq__50346 = G__50357;
chunk__50347 = G__50358;
count__50348 = G__50359;
i__50349 = G__50360;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__50346);
if(temp__5290__auto__){
var seq__50346__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50346__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__50346__$1);
var G__50361 = cljs.core.chunk_rest.call(null,seq__50346__$1);
var G__50362 = c__31180__auto__;
var G__50363 = cljs.core.count.call(null,c__31180__auto__);
var G__50364 = (0);
seq__50346 = G__50361;
chunk__50347 = G__50362;
count__50348 = G__50363;
i__50349 = G__50364;
continue;
} else {
var vec__50353 = cljs.core.first.call(null,seq__50346__$1);
var k = cljs.core.nth.call(null,vec__50353,(0),null);
var plugin = cljs.core.nth.call(null,vec__50353,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50365 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50346,chunk__50347,count__50348,i__50349,pl_50365,vec__50353,k,plugin,seq__50346__$1,temp__5290__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50365.call(null,msg_hist);
});})(seq__50346,chunk__50347,count__50348,i__50349,pl_50365,vec__50353,k,plugin,seq__50346__$1,temp__5290__auto__))
);
} else {
}

var G__50366 = cljs.core.next.call(null,seq__50346__$1);
var G__50367 = null;
var G__50368 = (0);
var G__50369 = (0);
seq__50346 = G__50366;
chunk__50347 = G__50367;
count__50348 = G__50368;
i__50349 = G__50369;
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
var G__50371 = arguments.length;
switch (G__50371) {
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

var seq__50372_50377 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50373_50378 = null;
var count__50374_50379 = (0);
var i__50375_50380 = (0);
while(true){
if((i__50375_50380 < count__50374_50379)){
var msg_50381 = cljs.core._nth.call(null,chunk__50373_50378,i__50375_50380);
figwheel.client.socket.handle_incoming_message.call(null,msg_50381);

var G__50382 = seq__50372_50377;
var G__50383 = chunk__50373_50378;
var G__50384 = count__50374_50379;
var G__50385 = (i__50375_50380 + (1));
seq__50372_50377 = G__50382;
chunk__50373_50378 = G__50383;
count__50374_50379 = G__50384;
i__50375_50380 = G__50385;
continue;
} else {
var temp__5290__auto___50386 = cljs.core.seq.call(null,seq__50372_50377);
if(temp__5290__auto___50386){
var seq__50372_50387__$1 = temp__5290__auto___50386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50372_50387__$1)){
var c__31180__auto___50388 = cljs.core.chunk_first.call(null,seq__50372_50387__$1);
var G__50389 = cljs.core.chunk_rest.call(null,seq__50372_50387__$1);
var G__50390 = c__31180__auto___50388;
var G__50391 = cljs.core.count.call(null,c__31180__auto___50388);
var G__50392 = (0);
seq__50372_50377 = G__50389;
chunk__50373_50378 = G__50390;
count__50374_50379 = G__50391;
i__50375_50380 = G__50392;
continue;
} else {
var msg_50393 = cljs.core.first.call(null,seq__50372_50387__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50393);

var G__50394 = cljs.core.next.call(null,seq__50372_50387__$1);
var G__50395 = null;
var G__50396 = (0);
var G__50397 = (0);
seq__50372_50377 = G__50394;
chunk__50373_50378 = G__50395;
count__50374_50379 = G__50396;
i__50375_50380 = G__50397;
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
var len__31526__auto___50402 = arguments.length;
var i__31527__auto___50403 = (0);
while(true){
if((i__31527__auto___50403 < len__31526__auto___50402)){
args__31533__auto__.push((arguments[i__31527__auto___50403]));

var G__50404 = (i__31527__auto___50403 + (1));
i__31527__auto___50403 = G__50404;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50399){
var map__50400 = p__50399;
var map__50400__$1 = ((((!((map__50400 == null)))?((((map__50400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50400):map__50400);
var opts = map__50400__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50398){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50398));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50405){if((e50405 instanceof Error)){
var e = e50405;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50405;

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
return (function (p__50406){
var map__50407 = p__50406;
var map__50407__$1 = ((((!((map__50407 == null)))?((((map__50407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50407):map__50407);
var msg_name = cljs.core.get.call(null,map__50407__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1506985655789
