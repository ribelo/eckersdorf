// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.csv.core');
goog.require('cljs.core');
goog.require('clojure.string');
eckersdorf.csv.core.wrap_in_quotes = (function eckersdorf$csv$core$wrap_in_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
eckersdorf.csv.core.seperate = (function eckersdorf$csv$core$seperate(data,separator,quote_QMARK_){
return clojure.string.join.call(null,separator,(function (){var G__48863 = data;
if(cljs.core.truth_(quote_QMARK_)){
return cljs.core.map.call(null,eckersdorf.csv.core.wrap_in_quotes,G__48863);
} else {
return G__48863;
}
})());
});
eckersdorf.csv.core.write_data = (function eckersdorf$csv$core$write_data(data,separator,newline,quote_QMARK_){
return clojure.string.join.call(null,newline,cljs.core.map.call(null,(function (p1__48864_SHARP_){
return eckersdorf.csv.core.seperate.call(null,p1__48864_SHARP_,separator,quote_QMARK_);
}),data));
});
eckersdorf.csv.core.newlines = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lf","lf",1923784290),"\n",new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798),"\r\n"], null);
eckersdorf.csv.core.newline_error_message = [":newline must be one of [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",cljs.core.keys.call(null,eckersdorf.csv.core.newlines))),"]"].join('');
eckersdorf.csv.core.write_csv = (function eckersdorf$csv$core$write_csv(var_args){
var args__31523__auto__ = [];
var len__31516__auto___48869 = arguments.length;
var i__31517__auto___48870 = (0);
while(true){
if((i__31517__auto___48870 < len__31516__auto___48869)){
args__31523__auto__.push((arguments[i__31517__auto___48870]));

var G__48871 = (i__31517__auto___48870 + (1));
i__31517__auto___48870 = G__48871;
continue;
} else {
}
break;
}

var argseq__31524__auto__ = ((((1) < args__31523__auto__.length))?(new cljs.core.IndexedSeq(args__31523__auto__.slice((1)),(0),null)):null);
return eckersdorf.csv.core.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31524__auto__);
});

eckersdorf.csv.core.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__48867 = options;
var map__48867__$1 = ((((!((map__48867 == null)))?((((map__48867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48867):map__48867);
var separator = cljs.core.get.call(null,map__48867__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),";");
var newline = cljs.core.get.call(null,map__48867__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var quote_QMARK_ = cljs.core.get.call(null,map__48867__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),false);
var temp__5288__auto__ = cljs.core.get.call(null,eckersdorf.csv.core.newlines,newline);
if(cljs.core.truth_(temp__5288__auto__)){
var newline_char = temp__5288__auto__;
return eckersdorf.csv.core.write_data.call(null,data,separator,newline_char,quote_QMARK_);
} else {
throw (new Error(eckersdorf.csv.core.newline_error_message));
}
});

eckersdorf.csv.core.write_csv.cljs$lang$maxFixedArity = (1);

eckersdorf.csv.core.write_csv.cljs$lang$applyTo = (function (seq48865){
var G__48866 = cljs.core.first.call(null,seq48865);
var seq48865__$1 = cljs.core.next.call(null,seq48865);
return eckersdorf.csv.core.write_csv.cljs$core$IFn$_invoke$arity$variadic(G__48866,seq48865__$1);
});


//# sourceMappingURL=core.js.map?rel=1507757467544
