// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33936){
var map__33937 = p__33936;
var map__33937__$1 = ((((!((map__33937 == null)))?((((map__33937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33937):map__33937);
var m = map__33937__$1;
var n = cljs.core.get.call(null,map__33937__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33937__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33939_33961 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33940_33962 = null;
var count__33941_33963 = (0);
var i__33942_33964 = (0);
while(true){
if((i__33942_33964 < count__33941_33963)){
var f_33965 = cljs.core._nth.call(null,chunk__33940_33962,i__33942_33964);
cljs.core.println.call(null,"  ",f_33965);

var G__33966 = seq__33939_33961;
var G__33967 = chunk__33940_33962;
var G__33968 = count__33941_33963;
var G__33969 = (i__33942_33964 + (1));
seq__33939_33961 = G__33966;
chunk__33940_33962 = G__33967;
count__33941_33963 = G__33968;
i__33942_33964 = G__33969;
continue;
} else {
var temp__5457__auto___33970 = cljs.core.seq.call(null,seq__33939_33961);
if(temp__5457__auto___33970){
var seq__33939_33971__$1 = temp__5457__auto___33970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33939_33971__$1)){
var c__31453__auto___33972 = cljs.core.chunk_first.call(null,seq__33939_33971__$1);
var G__33973 = cljs.core.chunk_rest.call(null,seq__33939_33971__$1);
var G__33974 = c__31453__auto___33972;
var G__33975 = cljs.core.count.call(null,c__31453__auto___33972);
var G__33976 = (0);
seq__33939_33961 = G__33973;
chunk__33940_33962 = G__33974;
count__33941_33963 = G__33975;
i__33942_33964 = G__33976;
continue;
} else {
var f_33977 = cljs.core.first.call(null,seq__33939_33971__$1);
cljs.core.println.call(null,"  ",f_33977);

var G__33978 = cljs.core.next.call(null,seq__33939_33971__$1);
var G__33979 = null;
var G__33980 = (0);
var G__33981 = (0);
seq__33939_33961 = G__33978;
chunk__33940_33962 = G__33979;
count__33941_33963 = G__33980;
i__33942_33964 = G__33981;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33982 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30522__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33982);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33982)))?cljs.core.second.call(null,arglists_33982):arglists_33982));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33943_33983 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33944_33984 = null;
var count__33945_33985 = (0);
var i__33946_33986 = (0);
while(true){
if((i__33946_33986 < count__33945_33985)){
var vec__33947_33987 = cljs.core._nth.call(null,chunk__33944_33984,i__33946_33986);
var name_33988 = cljs.core.nth.call(null,vec__33947_33987,(0),null);
var map__33950_33989 = cljs.core.nth.call(null,vec__33947_33987,(1),null);
var map__33950_33990__$1 = ((((!((map__33950_33989 == null)))?((((map__33950_33989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33950_33989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33950_33989):map__33950_33989);
var doc_33991 = cljs.core.get.call(null,map__33950_33990__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33992 = cljs.core.get.call(null,map__33950_33990__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33988);

cljs.core.println.call(null," ",arglists_33992);

if(cljs.core.truth_(doc_33991)){
cljs.core.println.call(null," ",doc_33991);
} else {
}

var G__33993 = seq__33943_33983;
var G__33994 = chunk__33944_33984;
var G__33995 = count__33945_33985;
var G__33996 = (i__33946_33986 + (1));
seq__33943_33983 = G__33993;
chunk__33944_33984 = G__33994;
count__33945_33985 = G__33995;
i__33946_33986 = G__33996;
continue;
} else {
var temp__5457__auto___33997 = cljs.core.seq.call(null,seq__33943_33983);
if(temp__5457__auto___33997){
var seq__33943_33998__$1 = temp__5457__auto___33997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33943_33998__$1)){
var c__31453__auto___33999 = cljs.core.chunk_first.call(null,seq__33943_33998__$1);
var G__34000 = cljs.core.chunk_rest.call(null,seq__33943_33998__$1);
var G__34001 = c__31453__auto___33999;
var G__34002 = cljs.core.count.call(null,c__31453__auto___33999);
var G__34003 = (0);
seq__33943_33983 = G__34000;
chunk__33944_33984 = G__34001;
count__33945_33985 = G__34002;
i__33946_33986 = G__34003;
continue;
} else {
var vec__33952_34004 = cljs.core.first.call(null,seq__33943_33998__$1);
var name_34005 = cljs.core.nth.call(null,vec__33952_34004,(0),null);
var map__33955_34006 = cljs.core.nth.call(null,vec__33952_34004,(1),null);
var map__33955_34007__$1 = ((((!((map__33955_34006 == null)))?((((map__33955_34006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33955_34006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33955_34006):map__33955_34006);
var doc_34008 = cljs.core.get.call(null,map__33955_34007__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34009 = cljs.core.get.call(null,map__33955_34007__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34005);

cljs.core.println.call(null," ",arglists_34009);

if(cljs.core.truth_(doc_34008)){
cljs.core.println.call(null," ",doc_34008);
} else {
}

var G__34010 = cljs.core.next.call(null,seq__33943_33998__$1);
var G__34011 = null;
var G__34012 = (0);
var G__34013 = (0);
seq__33943_33983 = G__34010;
chunk__33944_33984 = G__34011;
count__33945_33985 = G__34012;
i__33946_33986 = G__34013;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__33957 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33958 = null;
var count__33959 = (0);
var i__33960 = (0);
while(true){
if((i__33960 < count__33959)){
var role = cljs.core._nth.call(null,chunk__33958,i__33960);
var temp__5457__auto___34014__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34014__$1)){
var spec_34015 = temp__5457__auto___34014__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34015));
} else {
}

var G__34016 = seq__33957;
var G__34017 = chunk__33958;
var G__34018 = count__33959;
var G__34019 = (i__33960 + (1));
seq__33957 = G__34016;
chunk__33958 = G__34017;
count__33959 = G__34018;
i__33960 = G__34019;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__33957);
if(temp__5457__auto____$1){
var seq__33957__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33957__$1)){
var c__31453__auto__ = cljs.core.chunk_first.call(null,seq__33957__$1);
var G__34020 = cljs.core.chunk_rest.call(null,seq__33957__$1);
var G__34021 = c__31453__auto__;
var G__34022 = cljs.core.count.call(null,c__31453__auto__);
var G__34023 = (0);
seq__33957 = G__34020;
chunk__33958 = G__34021;
count__33959 = G__34022;
i__33960 = G__34023;
continue;
} else {
var role = cljs.core.first.call(null,seq__33957__$1);
var temp__5457__auto___34024__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34024__$2)){
var spec_34025 = temp__5457__auto___34024__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34025));
} else {
}

var G__34026 = cljs.core.next.call(null,seq__33957__$1);
var G__34027 = null;
var G__34028 = (0);
var G__34029 = (0);
seq__33957 = G__34026;
chunk__33958 = G__34027;
count__33959 = G__34028;
i__33960 = G__34029;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1510602137514
