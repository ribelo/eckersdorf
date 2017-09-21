// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.csv.core');
goog.require('cljs.core');
goog.require('clojure.string');
eckersdorf.csv.core.wrap_in_quotes = (function eckersdorf$csv$core$wrap_in_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
eckersdorf.csv.core.seperate = (function eckersdorf$csv$core$seperate(data,separator,quote_QMARK_){
return clojure.string.join.call(null,separator,(function (){var G__40833 = data;
if(cljs.core.truth_(quote_QMARK_)){
return cljs.core.map.call(null,eckersdorf.csv.core.wrap_in_quotes,G__40833);
} else {
return G__40833;
}
})());
});
eckersdorf.csv.core.write_data = (function eckersdorf$csv$core$write_data(data,separator,newline,quote_QMARK_){
return clojure.string.join.call(null,newline,cljs.core.map.call(null,(function (p1__40834_SHARP_){
return eckersdorf.csv.core.seperate.call(null,p1__40834_SHARP_,separator,quote_QMARK_);
}),data));
});
eckersdorf.csv.core.newlines = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lf","lf",1923784290),"\n",new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798),"\r\n"], null);
eckersdorf.csv.core.newline_error_message = [":newline must be one of [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",cljs.core.keys.call(null,eckersdorf.csv.core.newlines))),"]"].join('');
eckersdorf.csv.core.write_csv = (function eckersdorf$csv$core$write_csv(var_args){
var args__31533__auto__ = [];
var len__31526__auto___40839 = arguments.length;
var i__31527__auto___40840 = (0);
while(true){
if((i__31527__auto___40840 < len__31526__auto___40839)){
args__31533__auto__.push((arguments[i__31527__auto___40840]));

var G__40841 = (i__31527__auto___40840 + (1));
i__31527__auto___40840 = G__40841;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return eckersdorf.csv.core.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

eckersdorf.csv.core.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__40837 = options;
var map__40837__$1 = ((((!((map__40837 == null)))?((((map__40837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40837):map__40837);
var separator = cljs.core.get.call(null,map__40837__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),";");
var newline = cljs.core.get.call(null,map__40837__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var quote_QMARK_ = cljs.core.get.call(null,map__40837__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),false);
var temp__5288__auto__ = cljs.core.get.call(null,eckersdorf.csv.core.newlines,newline);
if(cljs.core.truth_(temp__5288__auto__)){
var newline_char = temp__5288__auto__;
return eckersdorf.csv.core.write_data.call(null,data,separator,newline_char,quote_QMARK_);
} else {
throw (new Error(eckersdorf.csv.core.newline_error_message));
}
});

eckersdorf.csv.core.write_csv.cljs$lang$maxFixedArity = (1);

eckersdorf.csv.core.write_csv.cljs$lang$applyTo = (function (seq40835){
var G__40836 = cljs.core.first.call(null,seq40835);
var seq40835__$1 = cljs.core.next.call(null,seq40835);
return eckersdorf.csv.core.write_csv.cljs$core$IFn$_invoke$arity$variadic(G__40836,seq40835__$1);
});


//# sourceMappingURL=core.js.map?rel=1506023647669
