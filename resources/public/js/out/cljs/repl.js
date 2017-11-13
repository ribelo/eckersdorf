// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33937){
var map__33938 = p__33937;
var map__33938__$1 = ((((!((map__33938 == null)))?((((map__33938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33938):map__33938);
var m = map__33938__$1;
var n = cljs.core.get.call(null,map__33938__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33938__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__33940_33962 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33941_33963 = null;
var count__33942_33964 = (0);
var i__33943_33965 = (0);
while(true){
if((i__33943_33965 < count__33942_33964)){
var f_33966 = cljs.core._nth.call(null,chunk__33941_33963,i__33943_33965);
cljs.core.println.call(null,"  ",f_33966);

var G__33967 = seq__33940_33962;
var G__33968 = chunk__33941_33963;
var G__33969 = count__33942_33964;
var G__33970 = (i__33943_33965 + (1));
seq__33940_33962 = G__33967;
chunk__33941_33963 = G__33968;
count__33942_33964 = G__33969;
i__33943_33965 = G__33970;
continue;
} else {
var temp__5457__auto___33971 = cljs.core.seq.call(null,seq__33940_33962);
if(temp__5457__auto___33971){
var seq__33940_33972__$1 = temp__5457__auto___33971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33940_33972__$1)){
var c__31454__auto___33973 = cljs.core.chunk_first.call(null,seq__33940_33972__$1);
var G__33974 = cljs.core.chunk_rest.call(null,seq__33940_33972__$1);
var G__33975 = c__31454__auto___33973;
var G__33976 = cljs.core.count.call(null,c__31454__auto___33973);
var G__33977 = (0);
seq__33940_33962 = G__33974;
chunk__33941_33963 = G__33975;
count__33942_33964 = G__33976;
i__33943_33965 = G__33977;
continue;
} else {
var f_33978 = cljs.core.first.call(null,seq__33940_33972__$1);
cljs.core.println.call(null,"  ",f_33978);

var G__33979 = cljs.core.next.call(null,seq__33940_33972__$1);
var G__33980 = null;
var G__33981 = (0);
var G__33982 = (0);
seq__33940_33962 = G__33979;
chunk__33941_33963 = G__33980;
count__33942_33964 = G__33981;
i__33943_33965 = G__33982;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33983 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30523__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30523__auto__)){
return or__30523__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33983);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33983)))?cljs.core.second.call(null,arglists_33983):arglists_33983));
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
var seq__33944_33984 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33945_33985 = null;
var count__33946_33986 = (0);
var i__33947_33987 = (0);
while(true){
if((i__33947_33987 < count__33946_33986)){
var vec__33948_33988 = cljs.core._nth.call(null,chunk__33945_33985,i__33947_33987);
var name_33989 = cljs.core.nth.call(null,vec__33948_33988,(0),null);
var map__33951_33990 = cljs.core.nth.call(null,vec__33948_33988,(1),null);
var map__33951_33991__$1 = ((((!((map__33951_33990 == null)))?((((map__33951_33990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33951_33990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33951_33990):map__33951_33990);
var doc_33992 = cljs.core.get.call(null,map__33951_33991__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33993 = cljs.core.get.call(null,map__33951_33991__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33989);

cljs.core.println.call(null," ",arglists_33993);

if(cljs.core.truth_(doc_33992)){
cljs.core.println.call(null," ",doc_33992);
} else {
}

var G__33994 = seq__33944_33984;
var G__33995 = chunk__33945_33985;
var G__33996 = count__33946_33986;
var G__33997 = (i__33947_33987 + (1));
seq__33944_33984 = G__33994;
chunk__33945_33985 = G__33995;
count__33946_33986 = G__33996;
i__33947_33987 = G__33997;
continue;
} else {
var temp__5457__auto___33998 = cljs.core.seq.call(null,seq__33944_33984);
if(temp__5457__auto___33998){
var seq__33944_33999__$1 = temp__5457__auto___33998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33944_33999__$1)){
var c__31454__auto___34000 = cljs.core.chunk_first.call(null,seq__33944_33999__$1);
var G__34001 = cljs.core.chunk_rest.call(null,seq__33944_33999__$1);
var G__34002 = c__31454__auto___34000;
var G__34003 = cljs.core.count.call(null,c__31454__auto___34000);
var G__34004 = (0);
seq__33944_33984 = G__34001;
chunk__33945_33985 = G__34002;
count__33946_33986 = G__34003;
i__33947_33987 = G__34004;
continue;
} else {
var vec__33953_34005 = cljs.core.first.call(null,seq__33944_33999__$1);
var name_34006 = cljs.core.nth.call(null,vec__33953_34005,(0),null);
var map__33956_34007 = cljs.core.nth.call(null,vec__33953_34005,(1),null);
var map__33956_34008__$1 = ((((!((map__33956_34007 == null)))?((((map__33956_34007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33956_34007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33956_34007):map__33956_34007);
var doc_34009 = cljs.core.get.call(null,map__33956_34008__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34010 = cljs.core.get.call(null,map__33956_34008__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34006);

cljs.core.println.call(null," ",arglists_34010);

if(cljs.core.truth_(doc_34009)){
cljs.core.println.call(null," ",doc_34009);
} else {
}

var G__34011 = cljs.core.next.call(null,seq__33944_33999__$1);
var G__34012 = null;
var G__34013 = (0);
var G__34014 = (0);
seq__33944_33984 = G__34011;
chunk__33945_33985 = G__34012;
count__33946_33986 = G__34013;
i__33947_33987 = G__34014;
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

var seq__33958 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33959 = null;
var count__33960 = (0);
var i__33961 = (0);
while(true){
if((i__33961 < count__33960)){
var role = cljs.core._nth.call(null,chunk__33959,i__33961);
var temp__5457__auto___34015__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34015__$1)){
var spec_34016 = temp__5457__auto___34015__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34016));
} else {
}

var G__34017 = seq__33958;
var G__34018 = chunk__33959;
var G__34019 = count__33960;
var G__34020 = (i__33961 + (1));
seq__33958 = G__34017;
chunk__33959 = G__34018;
count__33960 = G__34019;
i__33961 = G__34020;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__33958);
if(temp__5457__auto____$1){
var seq__33958__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33958__$1)){
var c__31454__auto__ = cljs.core.chunk_first.call(null,seq__33958__$1);
var G__34021 = cljs.core.chunk_rest.call(null,seq__33958__$1);
var G__34022 = c__31454__auto__;
var G__34023 = cljs.core.count.call(null,c__31454__auto__);
var G__34024 = (0);
seq__33958 = G__34021;
chunk__33959 = G__34022;
count__33960 = G__34023;
i__33961 = G__34024;
continue;
} else {
var role = cljs.core.first.call(null,seq__33958__$1);
var temp__5457__auto___34025__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34025__$2)){
var spec_34026 = temp__5457__auto___34025__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34026));
} else {
}

var G__34027 = cljs.core.next.call(null,seq__33958__$1);
var G__34028 = null;
var G__34029 = (0);
var G__34030 = (0);
seq__33958 = G__34027;
chunk__33959 = G__34028;
count__33960 = G__34029;
i__33961 = G__34030;
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

//# sourceMappingURL=repl.js.map?rel=1510609290676
