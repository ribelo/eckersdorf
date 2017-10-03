// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53826){
var map__53827 = p__53826;
var map__53827__$1 = ((((!((map__53827 == null)))?((((map__53827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53827):map__53827);
var m = map__53827__$1;
var n = cljs.core.get.call(null,map__53827__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__53827__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5290__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5290__auto__)){
var ns = temp__5290__auto__;
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
var seq__53829_53851 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53830_53852 = null;
var count__53831_53853 = (0);
var i__53832_53854 = (0);
while(true){
if((i__53832_53854 < count__53831_53853)){
var f_53855 = cljs.core._nth.call(null,chunk__53830_53852,i__53832_53854);
cljs.core.println.call(null,"  ",f_53855);

var G__53856 = seq__53829_53851;
var G__53857 = chunk__53830_53852;
var G__53858 = count__53831_53853;
var G__53859 = (i__53832_53854 + (1));
seq__53829_53851 = G__53856;
chunk__53830_53852 = G__53857;
count__53831_53853 = G__53858;
i__53832_53854 = G__53859;
continue;
} else {
var temp__5290__auto___53860 = cljs.core.seq.call(null,seq__53829_53851);
if(temp__5290__auto___53860){
var seq__53829_53861__$1 = temp__5290__auto___53860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53829_53861__$1)){
var c__31180__auto___53862 = cljs.core.chunk_first.call(null,seq__53829_53861__$1);
var G__53863 = cljs.core.chunk_rest.call(null,seq__53829_53861__$1);
var G__53864 = c__31180__auto___53862;
var G__53865 = cljs.core.count.call(null,c__31180__auto___53862);
var G__53866 = (0);
seq__53829_53851 = G__53863;
chunk__53830_53852 = G__53864;
count__53831_53853 = G__53865;
i__53832_53854 = G__53866;
continue;
} else {
var f_53867 = cljs.core.first.call(null,seq__53829_53861__$1);
cljs.core.println.call(null,"  ",f_53867);

var G__53868 = cljs.core.next.call(null,seq__53829_53861__$1);
var G__53869 = null;
var G__53870 = (0);
var G__53871 = (0);
seq__53829_53851 = G__53868;
chunk__53830_53852 = G__53869;
count__53831_53853 = G__53870;
i__53832_53854 = G__53871;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53872 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30249__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_53872);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_53872)))?cljs.core.second.call(null,arglists_53872):arglists_53872));
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
var seq__53833_53873 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53834_53874 = null;
var count__53835_53875 = (0);
var i__53836_53876 = (0);
while(true){
if((i__53836_53876 < count__53835_53875)){
var vec__53837_53877 = cljs.core._nth.call(null,chunk__53834_53874,i__53836_53876);
var name_53878 = cljs.core.nth.call(null,vec__53837_53877,(0),null);
var map__53840_53879 = cljs.core.nth.call(null,vec__53837_53877,(1),null);
var map__53840_53880__$1 = ((((!((map__53840_53879 == null)))?((((map__53840_53879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53840_53879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53840_53879):map__53840_53879);
var doc_53881 = cljs.core.get.call(null,map__53840_53880__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53882 = cljs.core.get.call(null,map__53840_53880__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53878);

cljs.core.println.call(null," ",arglists_53882);

if(cljs.core.truth_(doc_53881)){
cljs.core.println.call(null," ",doc_53881);
} else {
}

var G__53883 = seq__53833_53873;
var G__53884 = chunk__53834_53874;
var G__53885 = count__53835_53875;
var G__53886 = (i__53836_53876 + (1));
seq__53833_53873 = G__53883;
chunk__53834_53874 = G__53884;
count__53835_53875 = G__53885;
i__53836_53876 = G__53886;
continue;
} else {
var temp__5290__auto___53887 = cljs.core.seq.call(null,seq__53833_53873);
if(temp__5290__auto___53887){
var seq__53833_53888__$1 = temp__5290__auto___53887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53833_53888__$1)){
var c__31180__auto___53889 = cljs.core.chunk_first.call(null,seq__53833_53888__$1);
var G__53890 = cljs.core.chunk_rest.call(null,seq__53833_53888__$1);
var G__53891 = c__31180__auto___53889;
var G__53892 = cljs.core.count.call(null,c__31180__auto___53889);
var G__53893 = (0);
seq__53833_53873 = G__53890;
chunk__53834_53874 = G__53891;
count__53835_53875 = G__53892;
i__53836_53876 = G__53893;
continue;
} else {
var vec__53842_53894 = cljs.core.first.call(null,seq__53833_53888__$1);
var name_53895 = cljs.core.nth.call(null,vec__53842_53894,(0),null);
var map__53845_53896 = cljs.core.nth.call(null,vec__53842_53894,(1),null);
var map__53845_53897__$1 = ((((!((map__53845_53896 == null)))?((((map__53845_53896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53845_53896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53845_53896):map__53845_53896);
var doc_53898 = cljs.core.get.call(null,map__53845_53897__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53899 = cljs.core.get.call(null,map__53845_53897__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53895);

cljs.core.println.call(null," ",arglists_53899);

if(cljs.core.truth_(doc_53898)){
cljs.core.println.call(null," ",doc_53898);
} else {
}

var G__53900 = cljs.core.next.call(null,seq__53833_53888__$1);
var G__53901 = null;
var G__53902 = (0);
var G__53903 = (0);
seq__53833_53873 = G__53900;
chunk__53834_53874 = G__53901;
count__53835_53875 = G__53902;
i__53836_53876 = G__53903;
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
var temp__5290__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5290__auto__)){
var fnspec = temp__5290__auto__;
cljs.core.print.call(null,"Spec");

var seq__53847 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53848 = null;
var count__53849 = (0);
var i__53850 = (0);
while(true){
if((i__53850 < count__53849)){
var role = cljs.core._nth.call(null,chunk__53848,i__53850);
var temp__5290__auto___53904__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___53904__$1)){
var spec_53905 = temp__5290__auto___53904__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_53905));
} else {
}

var G__53906 = seq__53847;
var G__53907 = chunk__53848;
var G__53908 = count__53849;
var G__53909 = (i__53850 + (1));
seq__53847 = G__53906;
chunk__53848 = G__53907;
count__53849 = G__53908;
i__53850 = G__53909;
continue;
} else {
var temp__5290__auto____$1 = cljs.core.seq.call(null,seq__53847);
if(temp__5290__auto____$1){
var seq__53847__$1 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53847__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__53847__$1);
var G__53910 = cljs.core.chunk_rest.call(null,seq__53847__$1);
var G__53911 = c__31180__auto__;
var G__53912 = cljs.core.count.call(null,c__31180__auto__);
var G__53913 = (0);
seq__53847 = G__53910;
chunk__53848 = G__53911;
count__53849 = G__53912;
i__53850 = G__53913;
continue;
} else {
var role = cljs.core.first.call(null,seq__53847__$1);
var temp__5290__auto___53914__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___53914__$2)){
var spec_53915 = temp__5290__auto___53914__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_53915));
} else {
}

var G__53916 = cljs.core.next.call(null,seq__53847__$1);
var G__53917 = null;
var G__53918 = (0);
var G__53919 = (0);
seq__53847 = G__53916;
chunk__53848 = G__53917;
count__53849 = G__53918;
i__53850 = G__53919;
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

//# sourceMappingURL=repl.js.map?rel=1507056183253
