// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49856){
var map__49857 = p__49856;
var map__49857__$1 = ((((!((map__49857 == null)))?((((map__49857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49857):map__49857);
var m = map__49857__$1;
var n = cljs.core.get.call(null,map__49857__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49857__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49859_49881 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49860_49882 = null;
var count__49861_49883 = (0);
var i__49862_49884 = (0);
while(true){
if((i__49862_49884 < count__49861_49883)){
var f_49885 = cljs.core._nth.call(null,chunk__49860_49882,i__49862_49884);
cljs.core.println.call(null,"  ",f_49885);

var G__49886 = seq__49859_49881;
var G__49887 = chunk__49860_49882;
var G__49888 = count__49861_49883;
var G__49889 = (i__49862_49884 + (1));
seq__49859_49881 = G__49886;
chunk__49860_49882 = G__49887;
count__49861_49883 = G__49888;
i__49862_49884 = G__49889;
continue;
} else {
var temp__5290__auto___49890 = cljs.core.seq.call(null,seq__49859_49881);
if(temp__5290__auto___49890){
var seq__49859_49891__$1 = temp__5290__auto___49890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49859_49891__$1)){
var c__31180__auto___49892 = cljs.core.chunk_first.call(null,seq__49859_49891__$1);
var G__49893 = cljs.core.chunk_rest.call(null,seq__49859_49891__$1);
var G__49894 = c__31180__auto___49892;
var G__49895 = cljs.core.count.call(null,c__31180__auto___49892);
var G__49896 = (0);
seq__49859_49881 = G__49893;
chunk__49860_49882 = G__49894;
count__49861_49883 = G__49895;
i__49862_49884 = G__49896;
continue;
} else {
var f_49897 = cljs.core.first.call(null,seq__49859_49891__$1);
cljs.core.println.call(null,"  ",f_49897);

var G__49898 = cljs.core.next.call(null,seq__49859_49891__$1);
var G__49899 = null;
var G__49900 = (0);
var G__49901 = (0);
seq__49859_49881 = G__49898;
chunk__49860_49882 = G__49899;
count__49861_49883 = G__49900;
i__49862_49884 = G__49901;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49902 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30249__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49902);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49902)))?cljs.core.second.call(null,arglists_49902):arglists_49902));
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
var seq__49863_49903 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49864_49904 = null;
var count__49865_49905 = (0);
var i__49866_49906 = (0);
while(true){
if((i__49866_49906 < count__49865_49905)){
var vec__49867_49907 = cljs.core._nth.call(null,chunk__49864_49904,i__49866_49906);
var name_49908 = cljs.core.nth.call(null,vec__49867_49907,(0),null);
var map__49870_49909 = cljs.core.nth.call(null,vec__49867_49907,(1),null);
var map__49870_49910__$1 = ((((!((map__49870_49909 == null)))?((((map__49870_49909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49870_49909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49870_49909):map__49870_49909);
var doc_49911 = cljs.core.get.call(null,map__49870_49910__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49912 = cljs.core.get.call(null,map__49870_49910__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49908);

cljs.core.println.call(null," ",arglists_49912);

if(cljs.core.truth_(doc_49911)){
cljs.core.println.call(null," ",doc_49911);
} else {
}

var G__49913 = seq__49863_49903;
var G__49914 = chunk__49864_49904;
var G__49915 = count__49865_49905;
var G__49916 = (i__49866_49906 + (1));
seq__49863_49903 = G__49913;
chunk__49864_49904 = G__49914;
count__49865_49905 = G__49915;
i__49866_49906 = G__49916;
continue;
} else {
var temp__5290__auto___49917 = cljs.core.seq.call(null,seq__49863_49903);
if(temp__5290__auto___49917){
var seq__49863_49918__$1 = temp__5290__auto___49917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49863_49918__$1)){
var c__31180__auto___49919 = cljs.core.chunk_first.call(null,seq__49863_49918__$1);
var G__49920 = cljs.core.chunk_rest.call(null,seq__49863_49918__$1);
var G__49921 = c__31180__auto___49919;
var G__49922 = cljs.core.count.call(null,c__31180__auto___49919);
var G__49923 = (0);
seq__49863_49903 = G__49920;
chunk__49864_49904 = G__49921;
count__49865_49905 = G__49922;
i__49866_49906 = G__49923;
continue;
} else {
var vec__49872_49924 = cljs.core.first.call(null,seq__49863_49918__$1);
var name_49925 = cljs.core.nth.call(null,vec__49872_49924,(0),null);
var map__49875_49926 = cljs.core.nth.call(null,vec__49872_49924,(1),null);
var map__49875_49927__$1 = ((((!((map__49875_49926 == null)))?((((map__49875_49926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49875_49926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49875_49926):map__49875_49926);
var doc_49928 = cljs.core.get.call(null,map__49875_49927__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49929 = cljs.core.get.call(null,map__49875_49927__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49925);

cljs.core.println.call(null," ",arglists_49929);

if(cljs.core.truth_(doc_49928)){
cljs.core.println.call(null," ",doc_49928);
} else {
}

var G__49930 = cljs.core.next.call(null,seq__49863_49918__$1);
var G__49931 = null;
var G__49932 = (0);
var G__49933 = (0);
seq__49863_49903 = G__49930;
chunk__49864_49904 = G__49931;
count__49865_49905 = G__49932;
i__49866_49906 = G__49933;
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

var seq__49877 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49878 = null;
var count__49879 = (0);
var i__49880 = (0);
while(true){
if((i__49880 < count__49879)){
var role = cljs.core._nth.call(null,chunk__49878,i__49880);
var temp__5290__auto___49934__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___49934__$1)){
var spec_49935 = temp__5290__auto___49934__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49935));
} else {
}

var G__49936 = seq__49877;
var G__49937 = chunk__49878;
var G__49938 = count__49879;
var G__49939 = (i__49880 + (1));
seq__49877 = G__49936;
chunk__49878 = G__49937;
count__49879 = G__49938;
i__49880 = G__49939;
continue;
} else {
var temp__5290__auto____$1 = cljs.core.seq.call(null,seq__49877);
if(temp__5290__auto____$1){
var seq__49877__$1 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49877__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__49877__$1);
var G__49940 = cljs.core.chunk_rest.call(null,seq__49877__$1);
var G__49941 = c__31180__auto__;
var G__49942 = cljs.core.count.call(null,c__31180__auto__);
var G__49943 = (0);
seq__49877 = G__49940;
chunk__49878 = G__49941;
count__49879 = G__49942;
i__49880 = G__49943;
continue;
} else {
var role = cljs.core.first.call(null,seq__49877__$1);
var temp__5290__auto___49944__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___49944__$2)){
var spec_49945 = temp__5290__auto___49944__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49945));
} else {
}

var G__49946 = cljs.core.next.call(null,seq__49877__$1);
var G__49947 = null;
var G__49948 = (0);
var G__49949 = (0);
seq__49877 = G__49946;
chunk__49878 = G__49947;
count__49879 = G__49948;
i__49880 = G__49949;
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

//# sourceMappingURL=repl.js.map?rel=1508862163203
