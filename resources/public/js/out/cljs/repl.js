// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41817){
var map__41818 = p__41817;
var map__41818__$1 = ((((!((map__41818 == null)))?((((map__41818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41818):map__41818);
var m = map__41818__$1;
var n = cljs.core.get.call(null,map__41818__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41818__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__41820_41842 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41821_41843 = null;
var count__41822_41844 = (0);
var i__41823_41845 = (0);
while(true){
if((i__41823_41845 < count__41822_41844)){
var f_41846 = cljs.core._nth.call(null,chunk__41821_41843,i__41823_41845);
cljs.core.println.call(null,"  ",f_41846);

var G__41847 = seq__41820_41842;
var G__41848 = chunk__41821_41843;
var G__41849 = count__41822_41844;
var G__41850 = (i__41823_41845 + (1));
seq__41820_41842 = G__41847;
chunk__41821_41843 = G__41848;
count__41822_41844 = G__41849;
i__41823_41845 = G__41850;
continue;
} else {
var temp__5290__auto___41851 = cljs.core.seq.call(null,seq__41820_41842);
if(temp__5290__auto___41851){
var seq__41820_41852__$1 = temp__5290__auto___41851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41820_41852__$1)){
var c__31180__auto___41853 = cljs.core.chunk_first.call(null,seq__41820_41852__$1);
var G__41854 = cljs.core.chunk_rest.call(null,seq__41820_41852__$1);
var G__41855 = c__31180__auto___41853;
var G__41856 = cljs.core.count.call(null,c__31180__auto___41853);
var G__41857 = (0);
seq__41820_41842 = G__41854;
chunk__41821_41843 = G__41855;
count__41822_41844 = G__41856;
i__41823_41845 = G__41857;
continue;
} else {
var f_41858 = cljs.core.first.call(null,seq__41820_41852__$1);
cljs.core.println.call(null,"  ",f_41858);

var G__41859 = cljs.core.next.call(null,seq__41820_41852__$1);
var G__41860 = null;
var G__41861 = (0);
var G__41862 = (0);
seq__41820_41842 = G__41859;
chunk__41821_41843 = G__41860;
count__41822_41844 = G__41861;
i__41823_41845 = G__41862;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41863 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30249__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41863);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41863)))?cljs.core.second.call(null,arglists_41863):arglists_41863));
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
var seq__41824_41864 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41825_41865 = null;
var count__41826_41866 = (0);
var i__41827_41867 = (0);
while(true){
if((i__41827_41867 < count__41826_41866)){
var vec__41828_41868 = cljs.core._nth.call(null,chunk__41825_41865,i__41827_41867);
var name_41869 = cljs.core.nth.call(null,vec__41828_41868,(0),null);
var map__41831_41870 = cljs.core.nth.call(null,vec__41828_41868,(1),null);
var map__41831_41871__$1 = ((((!((map__41831_41870 == null)))?((((map__41831_41870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41831_41870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41831_41870):map__41831_41870);
var doc_41872 = cljs.core.get.call(null,map__41831_41871__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41873 = cljs.core.get.call(null,map__41831_41871__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41869);

cljs.core.println.call(null," ",arglists_41873);

if(cljs.core.truth_(doc_41872)){
cljs.core.println.call(null," ",doc_41872);
} else {
}

var G__41874 = seq__41824_41864;
var G__41875 = chunk__41825_41865;
var G__41876 = count__41826_41866;
var G__41877 = (i__41827_41867 + (1));
seq__41824_41864 = G__41874;
chunk__41825_41865 = G__41875;
count__41826_41866 = G__41876;
i__41827_41867 = G__41877;
continue;
} else {
var temp__5290__auto___41878 = cljs.core.seq.call(null,seq__41824_41864);
if(temp__5290__auto___41878){
var seq__41824_41879__$1 = temp__5290__auto___41878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41824_41879__$1)){
var c__31180__auto___41880 = cljs.core.chunk_first.call(null,seq__41824_41879__$1);
var G__41881 = cljs.core.chunk_rest.call(null,seq__41824_41879__$1);
var G__41882 = c__31180__auto___41880;
var G__41883 = cljs.core.count.call(null,c__31180__auto___41880);
var G__41884 = (0);
seq__41824_41864 = G__41881;
chunk__41825_41865 = G__41882;
count__41826_41866 = G__41883;
i__41827_41867 = G__41884;
continue;
} else {
var vec__41833_41885 = cljs.core.first.call(null,seq__41824_41879__$1);
var name_41886 = cljs.core.nth.call(null,vec__41833_41885,(0),null);
var map__41836_41887 = cljs.core.nth.call(null,vec__41833_41885,(1),null);
var map__41836_41888__$1 = ((((!((map__41836_41887 == null)))?((((map__41836_41887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41836_41887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41836_41887):map__41836_41887);
var doc_41889 = cljs.core.get.call(null,map__41836_41888__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41890 = cljs.core.get.call(null,map__41836_41888__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41886);

cljs.core.println.call(null," ",arglists_41890);

if(cljs.core.truth_(doc_41889)){
cljs.core.println.call(null," ",doc_41889);
} else {
}

var G__41891 = cljs.core.next.call(null,seq__41824_41879__$1);
var G__41892 = null;
var G__41893 = (0);
var G__41894 = (0);
seq__41824_41864 = G__41891;
chunk__41825_41865 = G__41892;
count__41826_41866 = G__41893;
i__41827_41867 = G__41894;
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

var seq__41838 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41839 = null;
var count__41840 = (0);
var i__41841 = (0);
while(true){
if((i__41841 < count__41840)){
var role = cljs.core._nth.call(null,chunk__41839,i__41841);
var temp__5290__auto___41895__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___41895__$1)){
var spec_41896 = temp__5290__auto___41895__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41896));
} else {
}

var G__41897 = seq__41838;
var G__41898 = chunk__41839;
var G__41899 = count__41840;
var G__41900 = (i__41841 + (1));
seq__41838 = G__41897;
chunk__41839 = G__41898;
count__41840 = G__41899;
i__41841 = G__41900;
continue;
} else {
var temp__5290__auto____$1 = cljs.core.seq.call(null,seq__41838);
if(temp__5290__auto____$1){
var seq__41838__$1 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41838__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__41838__$1);
var G__41901 = cljs.core.chunk_rest.call(null,seq__41838__$1);
var G__41902 = c__31180__auto__;
var G__41903 = cljs.core.count.call(null,c__31180__auto__);
var G__41904 = (0);
seq__41838 = G__41901;
chunk__41839 = G__41902;
count__41840 = G__41903;
i__41841 = G__41904;
continue;
} else {
var role = cljs.core.first.call(null,seq__41838__$1);
var temp__5290__auto___41905__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___41905__$2)){
var spec_41906 = temp__5290__auto___41905__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41906));
} else {
}

var G__41907 = cljs.core.next.call(null,seq__41838__$1);
var G__41908 = null;
var G__41909 = (0);
var G__41910 = (0);
seq__41838 = G__41907;
chunk__41839 = G__41908;
count__41840 = G__41909;
i__41841 = G__41910;
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

//# sourceMappingURL=repl.js.map?rel=1506023648653
