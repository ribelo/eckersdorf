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
}catch (e49917){if((e49917 instanceof Error)){
var e = e49917;
return "Error: Unable to stringify";
} else {
throw e49917;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__49920 = arguments.length;
switch (G__49920) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__49918_SHARP_){
if(typeof p1__49918_SHARP_ === 'string'){
return p1__49918_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__49918_SHARP_);
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
var len__31516__auto___49923 = arguments.length;
var i__31517__auto___49924 = (0);
while(true){
if((i__31517__auto___49924 < len__31516__auto___49923)){
args__31523__auto__.push((arguments[i__31517__auto___49924]));

var G__49925 = (i__31517__auto___49924 + (1));
i__31517__auto___49924 = G__49925;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq49922){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49922));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31523__auto__ = [];
var len__31516__auto___49927 = arguments.length;
var i__31517__auto___49928 = (0);
while(true){
if((i__31517__auto___49928 < len__31516__auto___49927)){
args__31523__auto__.push((arguments[i__31517__auto___49928]));

var G__49929 = (i__31517__auto___49928 + (1));
i__31517__auto___49928 = G__49929;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq49926){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49926));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__49930){
var map__49931 = p__49930;
var map__49931__$1 = ((((!((map__49931 == null)))?((((map__49931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49931):map__49931);
var message = cljs.core.get.call(null,map__49931__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__49931__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__46830__auto___50010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___50010,ch){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___50010,ch){
return (function (state_49982){
var state_val_49983 = (state_49982[(1)]);
if((state_val_49983 === (7))){
var inst_49978 = (state_49982[(2)]);
var state_49982__$1 = state_49982;
var statearr_49984_50011 = state_49982__$1;
(statearr_49984_50011[(2)] = inst_49978);

(statearr_49984_50011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49983 === (1))){
var state_49982__$1 = state_49982;
var statearr_49985_50012 = state_49982__$1;
(statearr_49985_50012[(2)] = null);

(statearr_49985_50012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49983 === (4))){
var inst_49935 = (state_49982[(7)]);
var inst_49935__$1 = (state_49982[(2)]);
var state_49982__$1 = (function (){var statearr_49986 = state_49982;
(statearr_49986[(7)] = inst_49935__$1);

return statearr_49986;
})();
if(cljs.core.truth_(inst_49935__$1)){
var statearr_49987_50013 = state_49982__$1;
(statearr_49987_50013[(1)] = (5));

} else {
var statearr_49988_50014 = state_49982__$1;
(statearr_49988_50014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49983 === (15))){
var inst_49942 = (state_49982[(8)]);
var inst_49957 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49942);
var inst_49958 = cljs.core.first.call(null,inst_49957);
var inst_49959 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_49958);
var inst_49960 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49959)].join('');
var inst_49961 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_49960);
var state_49982__$1 = state_49982;
var statearr_49989_50015 = state_49982__$1;
(statearr_49989_50015[(2)] = inst_49961);

(statearr_49989_50015[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49983 === (13))){
var inst_49966 = (state_49982[(2)]);
var state_49982__$1 = state_49982;
var statearr_49990_50016 = state_49982__$1;
(statearr_49990_50016[(2)] = inst_49966);

(statearr_49990_50016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49983 === (6))){
var state_49982__$1 = state_49982;
var statearr_49991_50017 = state_49982__$1;
(statearr_49991_50017[(2)] = null);

(statearr_49991_50017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49983 === (17))){
var inst_49964 = (state_49982[(2)]);
var state_49982__$1 = state_49982;
var statearr_49992_50018 = state_49982__$1;
(statearr_49992_50018[(2)] = inst_49964);

(statearr_49992_50018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49983 === (3))){
var inst_49980 = (state_49982[(2)]);
var state_49982__$1 = state_49982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49982__$1,inst_49980);
} else {
if((state_val_49983 === (12))){
var inst_49941 = (state_49982[(9)]);
var inst_49955 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_49941,opts);
var state_49982__$1 = state_49982;
if(cljs.core.truth_(inst_49955)){
var statearr_49993_50019 = state_49982__$1;
(statearr_49993_50019[(1)] = (15));

} else {
var statearr_49994_50020 = state_49982__$1;
(statearr_49994_50020[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49983 === (2))){
var state_49982__$1 = state_49982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49982__$1,(4),ch);
} else {
if((state_val_49983 === (11))){
var inst_49942 = (state_49982[(8)]);
var inst_49947 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49948 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_49942);
var inst_49949 = cljs.core.async.timeout.call(null,(1000));
var inst_49950 = [inst_49948,inst_49949];
var inst_49951 = (new cljs.core.PersistentVector(null,2,(5),inst_49947,inst_49950,null));
var state_49982__$1 = state_49982;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49982__$1,(14),inst_49951);
} else {
if((state_val_49983 === (9))){
var inst_49942 = (state_49982[(8)]);
var inst_49968 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_49969 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49942);
var inst_49970 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49969);
var inst_49971 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49970)].join('');
var inst_49972 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_49971);
var state_49982__$1 = (function (){var statearr_49995 = state_49982;
(statearr_49995[(10)] = inst_49968);

return statearr_49995;
})();
var statearr_49996_50021 = state_49982__$1;
(statearr_49996_50021[(2)] = inst_49972);

(statearr_49996_50021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49983 === (5))){
var inst_49935 = (state_49982[(7)]);
var inst_49937 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_49938 = (new cljs.core.PersistentArrayMap(null,2,inst_49937,null));
var inst_49939 = (new cljs.core.PersistentHashSet(null,inst_49938,null));
var inst_49940 = figwheel.client.focus_msgs.call(null,inst_49939,inst_49935);
var inst_49941 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_49940);
var inst_49942 = cljs.core.first.call(null,inst_49940);
var inst_49943 = figwheel.client.autoload_QMARK_.call(null);
var state_49982__$1 = (function (){var statearr_49997 = state_49982;
(statearr_49997[(8)] = inst_49942);

(statearr_49997[(9)] = inst_49941);

return statearr_49997;
})();
if(cljs.core.truth_(inst_49943)){
var statearr_49998_50022 = state_49982__$1;
(statearr_49998_50022[(1)] = (8));

} else {
var statearr_49999_50023 = state_49982__$1;
(statearr_49999_50023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49983 === (14))){
var inst_49953 = (state_49982[(2)]);
var state_49982__$1 = state_49982;
var statearr_50000_50024 = state_49982__$1;
(statearr_50000_50024[(2)] = inst_49953);

(statearr_50000_50024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49983 === (16))){
var state_49982__$1 = state_49982;
var statearr_50001_50025 = state_49982__$1;
(statearr_50001_50025[(2)] = null);

(statearr_50001_50025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49983 === (10))){
var inst_49974 = (state_49982[(2)]);
var state_49982__$1 = (function (){var statearr_50002 = state_49982;
(statearr_50002[(11)] = inst_49974);

return statearr_50002;
})();
var statearr_50003_50026 = state_49982__$1;
(statearr_50003_50026[(2)] = null);

(statearr_50003_50026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49983 === (8))){
var inst_49941 = (state_49982[(9)]);
var inst_49945 = figwheel.client.reload_file_state_QMARK_.call(null,inst_49941,opts);
var state_49982__$1 = state_49982;
if(cljs.core.truth_(inst_49945)){
var statearr_50004_50027 = state_49982__$1;
(statearr_50004_50027[(1)] = (11));

} else {
var statearr_50005_50028 = state_49982__$1;
(statearr_50005_50028[(1)] = (12));

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
});})(c__46830__auto___50010,ch))
;
return ((function (switch__46740__auto__,c__46830__auto___50010,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__46741__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__46741__auto____0 = (function (){
var statearr_50006 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50006[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__46741__auto__);

(statearr_50006[(1)] = (1));

return statearr_50006;
});
var figwheel$client$file_reloader_plugin_$_state_machine__46741__auto____1 = (function (state_49982){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_49982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e50007){if((e50007 instanceof Object)){
var ex__46744__auto__ = e50007;
var statearr_50008_50029 = state_49982;
(statearr_50008_50029[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50030 = state_49982;
state_49982 = G__50030;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__46741__auto__ = function(state_49982){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__46741__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__46741__auto____1.call(this,state_49982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__46741__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__46741__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___50010,ch))
})();
var state__46832__auto__ = (function (){var statearr_50009 = f__46831__auto__.call(null);
(statearr_50009[(6)] = c__46830__auto___50010);

return statearr_50009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___50010,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50031_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50031_SHARP_));
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
var base_path_50033 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50033){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e50032){if((e50032 instanceof Error)){
var e = e50032;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50033], null));
} else {
var e = e50032;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_50033))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50034){
var map__50035 = p__50034;
var map__50035__$1 = ((((!((map__50035 == null)))?((((map__50035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50035):map__50035);
var opts = map__50035__$1;
var build_id = cljs.core.get.call(null,map__50035__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50035,map__50035__$1,opts,build_id){
return (function (p__50037){
var vec__50038 = p__50037;
var seq__50039 = cljs.core.seq.call(null,vec__50038);
var first__50040 = cljs.core.first.call(null,seq__50039);
var seq__50039__$1 = cljs.core.next.call(null,seq__50039);
var map__50041 = first__50040;
var map__50041__$1 = ((((!((map__50041 == null)))?((((map__50041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50041):map__50041);
var msg = map__50041__$1;
var msg_name = cljs.core.get.call(null,map__50041__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50039__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50038,seq__50039,first__50040,seq__50039__$1,map__50041,map__50041__$1,msg,msg_name,_,map__50035,map__50035__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50038,seq__50039,first__50040,seq__50039__$1,map__50041,map__50041__$1,msg,msg_name,_,map__50035,map__50035__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__50035,map__50035__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50043){
var vec__50044 = p__50043;
var seq__50045 = cljs.core.seq.call(null,vec__50044);
var first__50046 = cljs.core.first.call(null,seq__50045);
var seq__50045__$1 = cljs.core.next.call(null,seq__50045);
var map__50047 = first__50046;
var map__50047__$1 = ((((!((map__50047 == null)))?((((map__50047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50047):map__50047);
var msg = map__50047__$1;
var msg_name = cljs.core.get.call(null,map__50047__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50045__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50049){
var map__50050 = p__50049;
var map__50050__$1 = ((((!((map__50050 == null)))?((((map__50050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50050):map__50050);
var on_compile_warning = cljs.core.get.call(null,map__50050__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50050__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50050,map__50050__$1,on_compile_warning,on_compile_fail){
return (function (p__50052){
var vec__50053 = p__50052;
var seq__50054 = cljs.core.seq.call(null,vec__50053);
var first__50055 = cljs.core.first.call(null,seq__50054);
var seq__50054__$1 = cljs.core.next.call(null,seq__50054);
var map__50056 = first__50055;
var map__50056__$1 = ((((!((map__50056 == null)))?((((map__50056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50056):map__50056);
var msg = map__50056__$1;
var msg_name = cljs.core.get.call(null,map__50056__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50054__$1;
var pred__50058 = cljs.core._EQ_;
var expr__50059 = msg_name;
if(cljs.core.truth_(pred__50058.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50059))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50058.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50059))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__50050,map__50050__$1,on_compile_warning,on_compile_fail))
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
var c__46830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto__,msg_hist,msg_names,msg){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto__,msg_hist,msg_names,msg){
return (function (state_50148){
var state_val_50149 = (state_50148[(1)]);
if((state_val_50149 === (7))){
var inst_50068 = (state_50148[(2)]);
var state_50148__$1 = state_50148;
if(cljs.core.truth_(inst_50068)){
var statearr_50150_50197 = state_50148__$1;
(statearr_50150_50197[(1)] = (8));

} else {
var statearr_50151_50198 = state_50148__$1;
(statearr_50151_50198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (20))){
var inst_50142 = (state_50148[(2)]);
var state_50148__$1 = state_50148;
var statearr_50152_50199 = state_50148__$1;
(statearr_50152_50199[(2)] = inst_50142);

(statearr_50152_50199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (27))){
var inst_50138 = (state_50148[(2)]);
var state_50148__$1 = state_50148;
var statearr_50153_50200 = state_50148__$1;
(statearr_50153_50200[(2)] = inst_50138);

(statearr_50153_50200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (1))){
var inst_50061 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50148__$1 = state_50148;
if(cljs.core.truth_(inst_50061)){
var statearr_50154_50201 = state_50148__$1;
(statearr_50154_50201[(1)] = (2));

} else {
var statearr_50155_50202 = state_50148__$1;
(statearr_50155_50202[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (24))){
var inst_50140 = (state_50148[(2)]);
var state_50148__$1 = state_50148;
var statearr_50156_50203 = state_50148__$1;
(statearr_50156_50203[(2)] = inst_50140);

(statearr_50156_50203[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (4))){
var inst_50146 = (state_50148[(2)]);
var state_50148__$1 = state_50148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50148__$1,inst_50146);
} else {
if((state_val_50149 === (15))){
var inst_50144 = (state_50148[(2)]);
var state_50148__$1 = state_50148;
var statearr_50157_50204 = state_50148__$1;
(statearr_50157_50204[(2)] = inst_50144);

(statearr_50157_50204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (21))){
var inst_50097 = (state_50148[(2)]);
var inst_50098 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50099 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50098);
var state_50148__$1 = (function (){var statearr_50158 = state_50148;
(statearr_50158[(7)] = inst_50097);

return statearr_50158;
})();
var statearr_50159_50205 = state_50148__$1;
(statearr_50159_50205[(2)] = inst_50099);

(statearr_50159_50205[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (31))){
var inst_50127 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50148__$1 = state_50148;
if(cljs.core.truth_(inst_50127)){
var statearr_50160_50206 = state_50148__$1;
(statearr_50160_50206[(1)] = (34));

} else {
var statearr_50161_50207 = state_50148__$1;
(statearr_50161_50207[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (32))){
var inst_50136 = (state_50148[(2)]);
var state_50148__$1 = state_50148;
var statearr_50162_50208 = state_50148__$1;
(statearr_50162_50208[(2)] = inst_50136);

(statearr_50162_50208[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (33))){
var inst_50123 = (state_50148[(2)]);
var inst_50124 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50125 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50124);
var state_50148__$1 = (function (){var statearr_50163 = state_50148;
(statearr_50163[(8)] = inst_50123);

return statearr_50163;
})();
var statearr_50164_50209 = state_50148__$1;
(statearr_50164_50209[(2)] = inst_50125);

(statearr_50164_50209[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (13))){
var inst_50082 = figwheel.client.heads_up.clear.call(null);
var state_50148__$1 = state_50148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50148__$1,(16),inst_50082);
} else {
if((state_val_50149 === (22))){
var inst_50103 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50104 = figwheel.client.heads_up.append_warning_message.call(null,inst_50103);
var state_50148__$1 = state_50148;
var statearr_50165_50210 = state_50148__$1;
(statearr_50165_50210[(2)] = inst_50104);

(statearr_50165_50210[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (36))){
var inst_50134 = (state_50148[(2)]);
var state_50148__$1 = state_50148;
var statearr_50166_50211 = state_50148__$1;
(statearr_50166_50211[(2)] = inst_50134);

(statearr_50166_50211[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (29))){
var inst_50114 = (state_50148[(2)]);
var inst_50115 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50116 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50115);
var state_50148__$1 = (function (){var statearr_50167 = state_50148;
(statearr_50167[(9)] = inst_50114);

return statearr_50167;
})();
var statearr_50168_50212 = state_50148__$1;
(statearr_50168_50212[(2)] = inst_50116);

(statearr_50168_50212[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (6))){
var inst_50063 = (state_50148[(10)]);
var state_50148__$1 = state_50148;
var statearr_50169_50213 = state_50148__$1;
(statearr_50169_50213[(2)] = inst_50063);

(statearr_50169_50213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (28))){
var inst_50110 = (state_50148[(2)]);
var inst_50111 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50112 = figwheel.client.heads_up.display_warning.call(null,inst_50111);
var state_50148__$1 = (function (){var statearr_50170 = state_50148;
(statearr_50170[(11)] = inst_50110);

return statearr_50170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50148__$1,(29),inst_50112);
} else {
if((state_val_50149 === (25))){
var inst_50108 = figwheel.client.heads_up.clear.call(null);
var state_50148__$1 = state_50148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50148__$1,(28),inst_50108);
} else {
if((state_val_50149 === (34))){
var inst_50129 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50148__$1 = state_50148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50148__$1,(37),inst_50129);
} else {
if((state_val_50149 === (17))){
var inst_50088 = (state_50148[(2)]);
var inst_50089 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50090 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50089);
var state_50148__$1 = (function (){var statearr_50171 = state_50148;
(statearr_50171[(12)] = inst_50088);

return statearr_50171;
})();
var statearr_50172_50214 = state_50148__$1;
(statearr_50172_50214[(2)] = inst_50090);

(statearr_50172_50214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (3))){
var inst_50080 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50148__$1 = state_50148;
if(cljs.core.truth_(inst_50080)){
var statearr_50173_50215 = state_50148__$1;
(statearr_50173_50215[(1)] = (13));

} else {
var statearr_50174_50216 = state_50148__$1;
(statearr_50174_50216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (12))){
var inst_50076 = (state_50148[(2)]);
var state_50148__$1 = state_50148;
var statearr_50175_50217 = state_50148__$1;
(statearr_50175_50217[(2)] = inst_50076);

(statearr_50175_50217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (2))){
var inst_50063 = (state_50148[(10)]);
var inst_50063__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50148__$1 = (function (){var statearr_50176 = state_50148;
(statearr_50176[(10)] = inst_50063__$1);

return statearr_50176;
})();
if(cljs.core.truth_(inst_50063__$1)){
var statearr_50177_50218 = state_50148__$1;
(statearr_50177_50218[(1)] = (5));

} else {
var statearr_50178_50219 = state_50148__$1;
(statearr_50178_50219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (23))){
var inst_50106 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50148__$1 = state_50148;
if(cljs.core.truth_(inst_50106)){
var statearr_50179_50220 = state_50148__$1;
(statearr_50179_50220[(1)] = (25));

} else {
var statearr_50180_50221 = state_50148__$1;
(statearr_50180_50221[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (35))){
var state_50148__$1 = state_50148;
var statearr_50181_50222 = state_50148__$1;
(statearr_50181_50222[(2)] = null);

(statearr_50181_50222[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (19))){
var inst_50101 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50148__$1 = state_50148;
if(cljs.core.truth_(inst_50101)){
var statearr_50182_50223 = state_50148__$1;
(statearr_50182_50223[(1)] = (22));

} else {
var statearr_50183_50224 = state_50148__$1;
(statearr_50183_50224[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (11))){
var inst_50072 = (state_50148[(2)]);
var state_50148__$1 = state_50148;
var statearr_50184_50225 = state_50148__$1;
(statearr_50184_50225[(2)] = inst_50072);

(statearr_50184_50225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (9))){
var inst_50074 = figwheel.client.heads_up.clear.call(null);
var state_50148__$1 = state_50148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50148__$1,(12),inst_50074);
} else {
if((state_val_50149 === (5))){
var inst_50065 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50148__$1 = state_50148;
var statearr_50185_50226 = state_50148__$1;
(statearr_50185_50226[(2)] = inst_50065);

(statearr_50185_50226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (14))){
var inst_50092 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50148__$1 = state_50148;
if(cljs.core.truth_(inst_50092)){
var statearr_50186_50227 = state_50148__$1;
(statearr_50186_50227[(1)] = (18));

} else {
var statearr_50187_50228 = state_50148__$1;
(statearr_50187_50228[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (26))){
var inst_50118 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50148__$1 = state_50148;
if(cljs.core.truth_(inst_50118)){
var statearr_50188_50229 = state_50148__$1;
(statearr_50188_50229[(1)] = (30));

} else {
var statearr_50189_50230 = state_50148__$1;
(statearr_50189_50230[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (16))){
var inst_50084 = (state_50148[(2)]);
var inst_50085 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50086 = figwheel.client.heads_up.display_exception.call(null,inst_50085);
var state_50148__$1 = (function (){var statearr_50190 = state_50148;
(statearr_50190[(13)] = inst_50084);

return statearr_50190;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50148__$1,(17),inst_50086);
} else {
if((state_val_50149 === (30))){
var inst_50120 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50121 = figwheel.client.heads_up.display_warning.call(null,inst_50120);
var state_50148__$1 = state_50148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50148__$1,(33),inst_50121);
} else {
if((state_val_50149 === (10))){
var inst_50078 = (state_50148[(2)]);
var state_50148__$1 = state_50148;
var statearr_50191_50231 = state_50148__$1;
(statearr_50191_50231[(2)] = inst_50078);

(statearr_50191_50231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (18))){
var inst_50094 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50095 = figwheel.client.heads_up.display_exception.call(null,inst_50094);
var state_50148__$1 = state_50148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50148__$1,(21),inst_50095);
} else {
if((state_val_50149 === (37))){
var inst_50131 = (state_50148[(2)]);
var state_50148__$1 = state_50148;
var statearr_50192_50232 = state_50148__$1;
(statearr_50192_50232[(2)] = inst_50131);

(statearr_50192_50232[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50149 === (8))){
var inst_50070 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50148__$1 = state_50148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50148__$1,(11),inst_50070);
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
});})(c__46830__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__46740__auto__,c__46830__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46741__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46741__auto____0 = (function (){
var statearr_50193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50193[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46741__auto__);

(statearr_50193[(1)] = (1));

return statearr_50193;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46741__auto____1 = (function (state_50148){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_50148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e50194){if((e50194 instanceof Object)){
var ex__46744__auto__ = e50194;
var statearr_50195_50233 = state_50148;
(statearr_50195_50233[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50234 = state_50148;
state_50148 = G__50234;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46741__auto__ = function(state_50148){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46741__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46741__auto____1.call(this,state_50148);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46741__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46741__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto__,msg_hist,msg_names,msg))
})();
var state__46832__auto__ = (function (){var statearr_50196 = f__46831__auto__.call(null);
(statearr_50196[(6)] = c__46830__auto__);

return statearr_50196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto__,msg_hist,msg_names,msg))
);

return c__46830__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__46830__auto___50263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___50263,ch){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___50263,ch){
return (function (state_50249){
var state_val_50250 = (state_50249[(1)]);
if((state_val_50250 === (1))){
var state_50249__$1 = state_50249;
var statearr_50251_50264 = state_50249__$1;
(statearr_50251_50264[(2)] = null);

(statearr_50251_50264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50250 === (2))){
var state_50249__$1 = state_50249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50249__$1,(4),ch);
} else {
if((state_val_50250 === (3))){
var inst_50247 = (state_50249[(2)]);
var state_50249__$1 = state_50249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50249__$1,inst_50247);
} else {
if((state_val_50250 === (4))){
var inst_50237 = (state_50249[(7)]);
var inst_50237__$1 = (state_50249[(2)]);
var state_50249__$1 = (function (){var statearr_50252 = state_50249;
(statearr_50252[(7)] = inst_50237__$1);

return statearr_50252;
})();
if(cljs.core.truth_(inst_50237__$1)){
var statearr_50253_50265 = state_50249__$1;
(statearr_50253_50265[(1)] = (5));

} else {
var statearr_50254_50266 = state_50249__$1;
(statearr_50254_50266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50250 === (5))){
var inst_50237 = (state_50249[(7)]);
var inst_50239 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50237);
var state_50249__$1 = state_50249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50249__$1,(8),inst_50239);
} else {
if((state_val_50250 === (6))){
var state_50249__$1 = state_50249;
var statearr_50255_50267 = state_50249__$1;
(statearr_50255_50267[(2)] = null);

(statearr_50255_50267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50250 === (7))){
var inst_50245 = (state_50249[(2)]);
var state_50249__$1 = state_50249;
var statearr_50256_50268 = state_50249__$1;
(statearr_50256_50268[(2)] = inst_50245);

(statearr_50256_50268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50250 === (8))){
var inst_50241 = (state_50249[(2)]);
var state_50249__$1 = (function (){var statearr_50257 = state_50249;
(statearr_50257[(8)] = inst_50241);

return statearr_50257;
})();
var statearr_50258_50269 = state_50249__$1;
(statearr_50258_50269[(2)] = null);

(statearr_50258_50269[(1)] = (2));


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
});})(c__46830__auto___50263,ch))
;
return ((function (switch__46740__auto__,c__46830__auto___50263,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__46741__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__46741__auto____0 = (function (){
var statearr_50259 = [null,null,null,null,null,null,null,null,null];
(statearr_50259[(0)] = figwheel$client$heads_up_plugin_$_state_machine__46741__auto__);

(statearr_50259[(1)] = (1));

return statearr_50259;
});
var figwheel$client$heads_up_plugin_$_state_machine__46741__auto____1 = (function (state_50249){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_50249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e50260){if((e50260 instanceof Object)){
var ex__46744__auto__ = e50260;
var statearr_50261_50270 = state_50249;
(statearr_50261_50270[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50271 = state_50249;
state_50249 = G__50271;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__46741__auto__ = function(state_50249){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__46741__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__46741__auto____1.call(this,state_50249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__46741__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__46741__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___50263,ch))
})();
var state__46832__auto__ = (function (){var statearr_50262 = f__46831__auto__.call(null);
(statearr_50262[(6)] = c__46830__auto___50263);

return statearr_50262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___50263,ch))
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
var c__46830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto__){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto__){
return (function (state_50277){
var state_val_50278 = (state_50277[(1)]);
if((state_val_50278 === (1))){
var inst_50272 = cljs.core.async.timeout.call(null,(3000));
var state_50277__$1 = state_50277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50277__$1,(2),inst_50272);
} else {
if((state_val_50278 === (2))){
var inst_50274 = (state_50277[(2)]);
var inst_50275 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50277__$1 = (function (){var statearr_50279 = state_50277;
(statearr_50279[(7)] = inst_50274);

return statearr_50279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50277__$1,inst_50275);
} else {
return null;
}
}
});})(c__46830__auto__))
;
return ((function (switch__46740__auto__,c__46830__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__46741__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__46741__auto____0 = (function (){
var statearr_50280 = [null,null,null,null,null,null,null,null];
(statearr_50280[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__46741__auto__);

(statearr_50280[(1)] = (1));

return statearr_50280;
});
var figwheel$client$enforce_project_plugin_$_state_machine__46741__auto____1 = (function (state_50277){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_50277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e50281){if((e50281 instanceof Object)){
var ex__46744__auto__ = e50281;
var statearr_50282_50284 = state_50277;
(statearr_50282_50284[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50285 = state_50277;
state_50277 = G__50285;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__46741__auto__ = function(state_50277){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__46741__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__46741__auto____1.call(this,state_50277);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__46741__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__46741__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto__))
})();
var state__46832__auto__ = (function (){var statearr_50283 = f__46831__auto__.call(null);
(statearr_50283[(6)] = c__46830__auto__);

return statearr_50283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto__))
);

return c__46830__auto__;
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
var c__46830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto__,figwheel_version,temp__5290__auto__){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto__,figwheel_version,temp__5290__auto__){
return (function (state_50292){
var state_val_50293 = (state_50292[(1)]);
if((state_val_50293 === (1))){
var inst_50286 = cljs.core.async.timeout.call(null,(2000));
var state_50292__$1 = state_50292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50292__$1,(2),inst_50286);
} else {
if((state_val_50293 === (2))){
var inst_50288 = (state_50292[(2)]);
var inst_50289 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_50290 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50289);
var state_50292__$1 = (function (){var statearr_50294 = state_50292;
(statearr_50294[(7)] = inst_50288);

return statearr_50294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50292__$1,inst_50290);
} else {
return null;
}
}
});})(c__46830__auto__,figwheel_version,temp__5290__auto__))
;
return ((function (switch__46740__auto__,c__46830__auto__,figwheel_version,temp__5290__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46741__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46741__auto____0 = (function (){
var statearr_50295 = [null,null,null,null,null,null,null,null];
(statearr_50295[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46741__auto__);

(statearr_50295[(1)] = (1));

return statearr_50295;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46741__auto____1 = (function (state_50292){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_50292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e50296){if((e50296 instanceof Object)){
var ex__46744__auto__ = e50296;
var statearr_50297_50299 = state_50292;
(statearr_50297_50299[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50300 = state_50292;
state_50292 = G__50300;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46741__auto__ = function(state_50292){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46741__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46741__auto____1.call(this,state_50292);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46741__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46741__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto__,figwheel_version,temp__5290__auto__))
})();
var state__46832__auto__ = (function (){var statearr_50298 = f__46831__auto__.call(null);
(statearr_50298[(6)] = c__46830__auto__);

return statearr_50298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto__,figwheel_version,temp__5290__auto__))
);

return c__46830__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50301){
var map__50302 = p__50301;
var map__50302__$1 = ((((!((map__50302 == null)))?((((map__50302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50302):map__50302);
var file = cljs.core.get.call(null,map__50302__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50302__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50302__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50304 = "";
var G__50304__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50304),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50304);
var G__50304__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50304__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50304__$1);
if(cljs.core.truth_((function (){var and__30227__auto__ = line;
if(cljs.core.truth_(and__30227__auto__)){
return column;
} else {
return and__30227__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50304__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50304__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50305){
var map__50306 = p__50305;
var map__50306__$1 = ((((!((map__50306 == null)))?((((map__50306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50306):map__50306);
var ed = map__50306__$1;
var formatted_exception = cljs.core.get.call(null,map__50306__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50306__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50306__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50308_50312 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50309_50313 = null;
var count__50310_50314 = (0);
var i__50311_50315 = (0);
while(true){
if((i__50311_50315 < count__50310_50314)){
var msg_50316 = cljs.core._nth.call(null,chunk__50309_50313,i__50311_50315);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50316);

var G__50317 = seq__50308_50312;
var G__50318 = chunk__50309_50313;
var G__50319 = count__50310_50314;
var G__50320 = (i__50311_50315 + (1));
seq__50308_50312 = G__50317;
chunk__50309_50313 = G__50318;
count__50310_50314 = G__50319;
i__50311_50315 = G__50320;
continue;
} else {
var temp__5290__auto___50321 = cljs.core.seq.call(null,seq__50308_50312);
if(temp__5290__auto___50321){
var seq__50308_50322__$1 = temp__5290__auto___50321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50308_50322__$1)){
var c__31170__auto___50323 = cljs.core.chunk_first.call(null,seq__50308_50322__$1);
var G__50324 = cljs.core.chunk_rest.call(null,seq__50308_50322__$1);
var G__50325 = c__31170__auto___50323;
var G__50326 = cljs.core.count.call(null,c__31170__auto___50323);
var G__50327 = (0);
seq__50308_50312 = G__50324;
chunk__50309_50313 = G__50325;
count__50310_50314 = G__50326;
i__50311_50315 = G__50327;
continue;
} else {
var msg_50328 = cljs.core.first.call(null,seq__50308_50322__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50328);

var G__50329 = cljs.core.next.call(null,seq__50308_50322__$1);
var G__50330 = null;
var G__50331 = (0);
var G__50332 = (0);
seq__50308_50312 = G__50329;
chunk__50309_50313 = G__50330;
count__50310_50314 = G__50331;
i__50311_50315 = G__50332;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50333){
var map__50334 = p__50333;
var map__50334__$1 = ((((!((map__50334 == null)))?((((map__50334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50334):map__50334);
var w = map__50334__$1;
var message = cljs.core.get.call(null,map__50334__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__50336 = cljs.core.seq.call(null,plugins);
var chunk__50337 = null;
var count__50338 = (0);
var i__50339 = (0);
while(true){
if((i__50339 < count__50338)){
var vec__50340 = cljs.core._nth.call(null,chunk__50337,i__50339);
var k = cljs.core.nth.call(null,vec__50340,(0),null);
var plugin = cljs.core.nth.call(null,vec__50340,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50346 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50336,chunk__50337,count__50338,i__50339,pl_50346,vec__50340,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50346.call(null,msg_hist);
});})(seq__50336,chunk__50337,count__50338,i__50339,pl_50346,vec__50340,k,plugin))
);
} else {
}

var G__50347 = seq__50336;
var G__50348 = chunk__50337;
var G__50349 = count__50338;
var G__50350 = (i__50339 + (1));
seq__50336 = G__50347;
chunk__50337 = G__50348;
count__50338 = G__50349;
i__50339 = G__50350;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__50336);
if(temp__5290__auto__){
var seq__50336__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50336__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__50336__$1);
var G__50351 = cljs.core.chunk_rest.call(null,seq__50336__$1);
var G__50352 = c__31170__auto__;
var G__50353 = cljs.core.count.call(null,c__31170__auto__);
var G__50354 = (0);
seq__50336 = G__50351;
chunk__50337 = G__50352;
count__50338 = G__50353;
i__50339 = G__50354;
continue;
} else {
var vec__50343 = cljs.core.first.call(null,seq__50336__$1);
var k = cljs.core.nth.call(null,vec__50343,(0),null);
var plugin = cljs.core.nth.call(null,vec__50343,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50355 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50336,chunk__50337,count__50338,i__50339,pl_50355,vec__50343,k,plugin,seq__50336__$1,temp__5290__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50355.call(null,msg_hist);
});})(seq__50336,chunk__50337,count__50338,i__50339,pl_50355,vec__50343,k,plugin,seq__50336__$1,temp__5290__auto__))
);
} else {
}

var G__50356 = cljs.core.next.call(null,seq__50336__$1);
var G__50357 = null;
var G__50358 = (0);
var G__50359 = (0);
seq__50336 = G__50356;
chunk__50337 = G__50357;
count__50338 = G__50358;
i__50339 = G__50359;
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
var G__50361 = arguments.length;
switch (G__50361) {
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

var seq__50362_50367 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50363_50368 = null;
var count__50364_50369 = (0);
var i__50365_50370 = (0);
while(true){
if((i__50365_50370 < count__50364_50369)){
var msg_50371 = cljs.core._nth.call(null,chunk__50363_50368,i__50365_50370);
figwheel.client.socket.handle_incoming_message.call(null,msg_50371);

var G__50372 = seq__50362_50367;
var G__50373 = chunk__50363_50368;
var G__50374 = count__50364_50369;
var G__50375 = (i__50365_50370 + (1));
seq__50362_50367 = G__50372;
chunk__50363_50368 = G__50373;
count__50364_50369 = G__50374;
i__50365_50370 = G__50375;
continue;
} else {
var temp__5290__auto___50376 = cljs.core.seq.call(null,seq__50362_50367);
if(temp__5290__auto___50376){
var seq__50362_50377__$1 = temp__5290__auto___50376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50362_50377__$1)){
var c__31170__auto___50378 = cljs.core.chunk_first.call(null,seq__50362_50377__$1);
var G__50379 = cljs.core.chunk_rest.call(null,seq__50362_50377__$1);
var G__50380 = c__31170__auto___50378;
var G__50381 = cljs.core.count.call(null,c__31170__auto___50378);
var G__50382 = (0);
seq__50362_50367 = G__50379;
chunk__50363_50368 = G__50380;
count__50364_50369 = G__50381;
i__50365_50370 = G__50382;
continue;
} else {
var msg_50383 = cljs.core.first.call(null,seq__50362_50377__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50383);

var G__50384 = cljs.core.next.call(null,seq__50362_50377__$1);
var G__50385 = null;
var G__50386 = (0);
var G__50387 = (0);
seq__50362_50367 = G__50384;
chunk__50363_50368 = G__50385;
count__50364_50369 = G__50386;
i__50365_50370 = G__50387;
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
var len__31516__auto___50392 = arguments.length;
var i__31517__auto___50393 = (0);
while(true){
if((i__31517__auto___50393 < len__31516__auto___50392)){
args__31523__auto__.push((arguments[i__31517__auto___50393]));

var G__50394 = (i__31517__auto___50393 + (1));
i__31517__auto___50393 = G__50394;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((0) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31524__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50389){
var map__50390 = p__50389;
var map__50390__$1 = ((((!((map__50390 == null)))?((((map__50390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50390):map__50390);
var opts = map__50390__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50388){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50388));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50395){if((e50395 instanceof Error)){
var e = e50395;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50395;

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
return (function (p__50396){
var map__50397 = p__50396;
var map__50397__$1 = ((((!((map__50397 == null)))?((((map__50397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50397):map__50397);
var msg_name = cljs.core.get.call(null,map__50397__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1507757469444
