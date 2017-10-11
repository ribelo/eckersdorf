// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49629){
var map__49630 = p__49629;
var map__49630__$1 = ((((!((map__49630 == null)))?((((map__49630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49630):map__49630);
var m = map__49630__$1;
var n = cljs.core.get.call(null,map__49630__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49630__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49632_49654 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49633_49655 = null;
var count__49634_49656 = (0);
var i__49635_49657 = (0);
while(true){
if((i__49635_49657 < count__49634_49656)){
var f_49658 = cljs.core._nth.call(null,chunk__49633_49655,i__49635_49657);
cljs.core.println.call(null,"  ",f_49658);

var G__49659 = seq__49632_49654;
var G__49660 = chunk__49633_49655;
var G__49661 = count__49634_49656;
var G__49662 = (i__49635_49657 + (1));
seq__49632_49654 = G__49659;
chunk__49633_49655 = G__49660;
count__49634_49656 = G__49661;
i__49635_49657 = G__49662;
continue;
} else {
var temp__5290__auto___49663 = cljs.core.seq.call(null,seq__49632_49654);
if(temp__5290__auto___49663){
var seq__49632_49664__$1 = temp__5290__auto___49663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49632_49664__$1)){
var c__31170__auto___49665 = cljs.core.chunk_first.call(null,seq__49632_49664__$1);
var G__49666 = cljs.core.chunk_rest.call(null,seq__49632_49664__$1);
var G__49667 = c__31170__auto___49665;
var G__49668 = cljs.core.count.call(null,c__31170__auto___49665);
var G__49669 = (0);
seq__49632_49654 = G__49666;
chunk__49633_49655 = G__49667;
count__49634_49656 = G__49668;
i__49635_49657 = G__49669;
continue;
} else {
var f_49670 = cljs.core.first.call(null,seq__49632_49664__$1);
cljs.core.println.call(null,"  ",f_49670);

var G__49671 = cljs.core.next.call(null,seq__49632_49664__$1);
var G__49672 = null;
var G__49673 = (0);
var G__49674 = (0);
seq__49632_49654 = G__49671;
chunk__49633_49655 = G__49672;
count__49634_49656 = G__49673;
i__49635_49657 = G__49674;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49675 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30239__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49675);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49675)))?cljs.core.second.call(null,arglists_49675):arglists_49675));
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
var seq__49636_49676 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49637_49677 = null;
var count__49638_49678 = (0);
var i__49639_49679 = (0);
while(true){
if((i__49639_49679 < count__49638_49678)){
var vec__49640_49680 = cljs.core._nth.call(null,chunk__49637_49677,i__49639_49679);
var name_49681 = cljs.core.nth.call(null,vec__49640_49680,(0),null);
var map__49643_49682 = cljs.core.nth.call(null,vec__49640_49680,(1),null);
var map__49643_49683__$1 = ((((!((map__49643_49682 == null)))?((((map__49643_49682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49643_49682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49643_49682):map__49643_49682);
var doc_49684 = cljs.core.get.call(null,map__49643_49683__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49685 = cljs.core.get.call(null,map__49643_49683__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49681);

cljs.core.println.call(null," ",arglists_49685);

if(cljs.core.truth_(doc_49684)){
cljs.core.println.call(null," ",doc_49684);
} else {
}

var G__49686 = seq__49636_49676;
var G__49687 = chunk__49637_49677;
var G__49688 = count__49638_49678;
var G__49689 = (i__49639_49679 + (1));
seq__49636_49676 = G__49686;
chunk__49637_49677 = G__49687;
count__49638_49678 = G__49688;
i__49639_49679 = G__49689;
continue;
} else {
var temp__5290__auto___49690 = cljs.core.seq.call(null,seq__49636_49676);
if(temp__5290__auto___49690){
var seq__49636_49691__$1 = temp__5290__auto___49690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49636_49691__$1)){
var c__31170__auto___49692 = cljs.core.chunk_first.call(null,seq__49636_49691__$1);
var G__49693 = cljs.core.chunk_rest.call(null,seq__49636_49691__$1);
var G__49694 = c__31170__auto___49692;
var G__49695 = cljs.core.count.call(null,c__31170__auto___49692);
var G__49696 = (0);
seq__49636_49676 = G__49693;
chunk__49637_49677 = G__49694;
count__49638_49678 = G__49695;
i__49639_49679 = G__49696;
continue;
} else {
var vec__49645_49697 = cljs.core.first.call(null,seq__49636_49691__$1);
var name_49698 = cljs.core.nth.call(null,vec__49645_49697,(0),null);
var map__49648_49699 = cljs.core.nth.call(null,vec__49645_49697,(1),null);
var map__49648_49700__$1 = ((((!((map__49648_49699 == null)))?((((map__49648_49699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49648_49699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49648_49699):map__49648_49699);
var doc_49701 = cljs.core.get.call(null,map__49648_49700__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49702 = cljs.core.get.call(null,map__49648_49700__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49698);

cljs.core.println.call(null," ",arglists_49702);

if(cljs.core.truth_(doc_49701)){
cljs.core.println.call(null," ",doc_49701);
} else {
}

var G__49703 = cljs.core.next.call(null,seq__49636_49691__$1);
var G__49704 = null;
var G__49705 = (0);
var G__49706 = (0);
seq__49636_49676 = G__49703;
chunk__49637_49677 = G__49704;
count__49638_49678 = G__49705;
i__49639_49679 = G__49706;
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

var seq__49650 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49651 = null;
var count__49652 = (0);
var i__49653 = (0);
while(true){
if((i__49653 < count__49652)){
var role = cljs.core._nth.call(null,chunk__49651,i__49653);
var temp__5290__auto___49707__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___49707__$1)){
var spec_49708 = temp__5290__auto___49707__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49708));
} else {
}

var G__49709 = seq__49650;
var G__49710 = chunk__49651;
var G__49711 = count__49652;
var G__49712 = (i__49653 + (1));
seq__49650 = G__49709;
chunk__49651 = G__49710;
count__49652 = G__49711;
i__49653 = G__49712;
continue;
} else {
var temp__5290__auto____$1 = cljs.core.seq.call(null,seq__49650);
if(temp__5290__auto____$1){
var seq__49650__$1 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49650__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__49650__$1);
var G__49713 = cljs.core.chunk_rest.call(null,seq__49650__$1);
var G__49714 = c__31170__auto__;
var G__49715 = cljs.core.count.call(null,c__31170__auto__);
var G__49716 = (0);
seq__49650 = G__49713;
chunk__49651 = G__49714;
count__49652 = G__49715;
i__49653 = G__49716;
continue;
} else {
var role = cljs.core.first.call(null,seq__49650__$1);
var temp__5290__auto___49717__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___49717__$2)){
var spec_49718 = temp__5290__auto___49717__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49718));
} else {
}

var G__49719 = cljs.core.next.call(null,seq__49650__$1);
var G__49720 = null;
var G__49721 = (0);
var G__49722 = (0);
seq__49650 = G__49719;
chunk__49651 = G__49720;
count__49652 = G__49721;
i__49653 = G__49722;
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

//# sourceMappingURL=repl.js.map?rel=1507757468680
