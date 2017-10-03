// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49639){
var map__49640 = p__49639;
var map__49640__$1 = ((((!((map__49640 == null)))?((((map__49640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49640):map__49640);
var m = map__49640__$1;
var n = cljs.core.get.call(null,map__49640__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49640__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49642_49664 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49643_49665 = null;
var count__49644_49666 = (0);
var i__49645_49667 = (0);
while(true){
if((i__49645_49667 < count__49644_49666)){
var f_49668 = cljs.core._nth.call(null,chunk__49643_49665,i__49645_49667);
cljs.core.println.call(null,"  ",f_49668);

var G__49669 = seq__49642_49664;
var G__49670 = chunk__49643_49665;
var G__49671 = count__49644_49666;
var G__49672 = (i__49645_49667 + (1));
seq__49642_49664 = G__49669;
chunk__49643_49665 = G__49670;
count__49644_49666 = G__49671;
i__49645_49667 = G__49672;
continue;
} else {
var temp__5290__auto___49673 = cljs.core.seq.call(null,seq__49642_49664);
if(temp__5290__auto___49673){
var seq__49642_49674__$1 = temp__5290__auto___49673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49642_49674__$1)){
var c__31180__auto___49675 = cljs.core.chunk_first.call(null,seq__49642_49674__$1);
var G__49676 = cljs.core.chunk_rest.call(null,seq__49642_49674__$1);
var G__49677 = c__31180__auto___49675;
var G__49678 = cljs.core.count.call(null,c__31180__auto___49675);
var G__49679 = (0);
seq__49642_49664 = G__49676;
chunk__49643_49665 = G__49677;
count__49644_49666 = G__49678;
i__49645_49667 = G__49679;
continue;
} else {
var f_49680 = cljs.core.first.call(null,seq__49642_49674__$1);
cljs.core.println.call(null,"  ",f_49680);

var G__49681 = cljs.core.next.call(null,seq__49642_49674__$1);
var G__49682 = null;
var G__49683 = (0);
var G__49684 = (0);
seq__49642_49664 = G__49681;
chunk__49643_49665 = G__49682;
count__49644_49666 = G__49683;
i__49645_49667 = G__49684;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49685 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30249__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49685);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49685)))?cljs.core.second.call(null,arglists_49685):arglists_49685));
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
var seq__49646_49686 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49647_49687 = null;
var count__49648_49688 = (0);
var i__49649_49689 = (0);
while(true){
if((i__49649_49689 < count__49648_49688)){
var vec__49650_49690 = cljs.core._nth.call(null,chunk__49647_49687,i__49649_49689);
var name_49691 = cljs.core.nth.call(null,vec__49650_49690,(0),null);
var map__49653_49692 = cljs.core.nth.call(null,vec__49650_49690,(1),null);
var map__49653_49693__$1 = ((((!((map__49653_49692 == null)))?((((map__49653_49692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49653_49692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49653_49692):map__49653_49692);
var doc_49694 = cljs.core.get.call(null,map__49653_49693__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49695 = cljs.core.get.call(null,map__49653_49693__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49691);

cljs.core.println.call(null," ",arglists_49695);

if(cljs.core.truth_(doc_49694)){
cljs.core.println.call(null," ",doc_49694);
} else {
}

var G__49696 = seq__49646_49686;
var G__49697 = chunk__49647_49687;
var G__49698 = count__49648_49688;
var G__49699 = (i__49649_49689 + (1));
seq__49646_49686 = G__49696;
chunk__49647_49687 = G__49697;
count__49648_49688 = G__49698;
i__49649_49689 = G__49699;
continue;
} else {
var temp__5290__auto___49700 = cljs.core.seq.call(null,seq__49646_49686);
if(temp__5290__auto___49700){
var seq__49646_49701__$1 = temp__5290__auto___49700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49646_49701__$1)){
var c__31180__auto___49702 = cljs.core.chunk_first.call(null,seq__49646_49701__$1);
var G__49703 = cljs.core.chunk_rest.call(null,seq__49646_49701__$1);
var G__49704 = c__31180__auto___49702;
var G__49705 = cljs.core.count.call(null,c__31180__auto___49702);
var G__49706 = (0);
seq__49646_49686 = G__49703;
chunk__49647_49687 = G__49704;
count__49648_49688 = G__49705;
i__49649_49689 = G__49706;
continue;
} else {
var vec__49655_49707 = cljs.core.first.call(null,seq__49646_49701__$1);
var name_49708 = cljs.core.nth.call(null,vec__49655_49707,(0),null);
var map__49658_49709 = cljs.core.nth.call(null,vec__49655_49707,(1),null);
var map__49658_49710__$1 = ((((!((map__49658_49709 == null)))?((((map__49658_49709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49658_49709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49658_49709):map__49658_49709);
var doc_49711 = cljs.core.get.call(null,map__49658_49710__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49712 = cljs.core.get.call(null,map__49658_49710__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49708);

cljs.core.println.call(null," ",arglists_49712);

if(cljs.core.truth_(doc_49711)){
cljs.core.println.call(null," ",doc_49711);
} else {
}

var G__49713 = cljs.core.next.call(null,seq__49646_49701__$1);
var G__49714 = null;
var G__49715 = (0);
var G__49716 = (0);
seq__49646_49686 = G__49713;
chunk__49647_49687 = G__49714;
count__49648_49688 = G__49715;
i__49649_49689 = G__49716;
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

var seq__49660 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49661 = null;
var count__49662 = (0);
var i__49663 = (0);
while(true){
if((i__49663 < count__49662)){
var role = cljs.core._nth.call(null,chunk__49661,i__49663);
var temp__5290__auto___49717__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___49717__$1)){
var spec_49718 = temp__5290__auto___49717__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49718));
} else {
}

var G__49719 = seq__49660;
var G__49720 = chunk__49661;
var G__49721 = count__49662;
var G__49722 = (i__49663 + (1));
seq__49660 = G__49719;
chunk__49661 = G__49720;
count__49662 = G__49721;
i__49663 = G__49722;
continue;
} else {
var temp__5290__auto____$1 = cljs.core.seq.call(null,seq__49660);
if(temp__5290__auto____$1){
var seq__49660__$1 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49660__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__49660__$1);
var G__49723 = cljs.core.chunk_rest.call(null,seq__49660__$1);
var G__49724 = c__31180__auto__;
var G__49725 = cljs.core.count.call(null,c__31180__auto__);
var G__49726 = (0);
seq__49660 = G__49723;
chunk__49661 = G__49724;
count__49662 = G__49725;
i__49663 = G__49726;
continue;
} else {
var role = cljs.core.first.call(null,seq__49660__$1);
var temp__5290__auto___49727__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___49727__$2)){
var spec_49728 = temp__5290__auto___49727__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49728));
} else {
}

var G__49729 = cljs.core.next.call(null,seq__49660__$1);
var G__49730 = null;
var G__49731 = (0);
var G__49732 = (0);
seq__49660 = G__49729;
chunk__49661 = G__49730;
count__49662 = G__49731;
i__49663 = G__49732;
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

//# sourceMappingURL=repl.js.map?rel=1506985655409
