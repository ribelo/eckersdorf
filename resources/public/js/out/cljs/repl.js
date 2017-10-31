// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48591){
var map__48592 = p__48591;
var map__48592__$1 = ((((!((map__48592 == null)))?((((map__48592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48592):map__48592);
var m = map__48592__$1;
var n = cljs.core.get.call(null,map__48592__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__48592__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__48594_48616 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48595_48617 = null;
var count__48596_48618 = (0);
var i__48597_48619 = (0);
while(true){
if((i__48597_48619 < count__48596_48618)){
var f_48620 = cljs.core._nth.call(null,chunk__48595_48617,i__48597_48619);
cljs.core.println.call(null,"  ",f_48620);

var G__48621 = seq__48594_48616;
var G__48622 = chunk__48595_48617;
var G__48623 = count__48596_48618;
var G__48624 = (i__48597_48619 + (1));
seq__48594_48616 = G__48621;
chunk__48595_48617 = G__48622;
count__48596_48618 = G__48623;
i__48597_48619 = G__48624;
continue;
} else {
var temp__5290__auto___48625 = cljs.core.seq.call(null,seq__48594_48616);
if(temp__5290__auto___48625){
var seq__48594_48626__$1 = temp__5290__auto___48625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48594_48626__$1)){
var c__31180__auto___48627 = cljs.core.chunk_first.call(null,seq__48594_48626__$1);
var G__48628 = cljs.core.chunk_rest.call(null,seq__48594_48626__$1);
var G__48629 = c__31180__auto___48627;
var G__48630 = cljs.core.count.call(null,c__31180__auto___48627);
var G__48631 = (0);
seq__48594_48616 = G__48628;
chunk__48595_48617 = G__48629;
count__48596_48618 = G__48630;
i__48597_48619 = G__48631;
continue;
} else {
var f_48632 = cljs.core.first.call(null,seq__48594_48626__$1);
cljs.core.println.call(null,"  ",f_48632);

var G__48633 = cljs.core.next.call(null,seq__48594_48626__$1);
var G__48634 = null;
var G__48635 = (0);
var G__48636 = (0);
seq__48594_48616 = G__48633;
chunk__48595_48617 = G__48634;
count__48596_48618 = G__48635;
i__48597_48619 = G__48636;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48637 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30249__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_48637);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_48637)))?cljs.core.second.call(null,arglists_48637):arglists_48637));
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
var seq__48598_48638 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48599_48639 = null;
var count__48600_48640 = (0);
var i__48601_48641 = (0);
while(true){
if((i__48601_48641 < count__48600_48640)){
var vec__48602_48642 = cljs.core._nth.call(null,chunk__48599_48639,i__48601_48641);
var name_48643 = cljs.core.nth.call(null,vec__48602_48642,(0),null);
var map__48605_48644 = cljs.core.nth.call(null,vec__48602_48642,(1),null);
var map__48605_48645__$1 = ((((!((map__48605_48644 == null)))?((((map__48605_48644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48605_48644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48605_48644):map__48605_48644);
var doc_48646 = cljs.core.get.call(null,map__48605_48645__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48647 = cljs.core.get.call(null,map__48605_48645__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48643);

cljs.core.println.call(null," ",arglists_48647);

if(cljs.core.truth_(doc_48646)){
cljs.core.println.call(null," ",doc_48646);
} else {
}

var G__48648 = seq__48598_48638;
var G__48649 = chunk__48599_48639;
var G__48650 = count__48600_48640;
var G__48651 = (i__48601_48641 + (1));
seq__48598_48638 = G__48648;
chunk__48599_48639 = G__48649;
count__48600_48640 = G__48650;
i__48601_48641 = G__48651;
continue;
} else {
var temp__5290__auto___48652 = cljs.core.seq.call(null,seq__48598_48638);
if(temp__5290__auto___48652){
var seq__48598_48653__$1 = temp__5290__auto___48652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48598_48653__$1)){
var c__31180__auto___48654 = cljs.core.chunk_first.call(null,seq__48598_48653__$1);
var G__48655 = cljs.core.chunk_rest.call(null,seq__48598_48653__$1);
var G__48656 = c__31180__auto___48654;
var G__48657 = cljs.core.count.call(null,c__31180__auto___48654);
var G__48658 = (0);
seq__48598_48638 = G__48655;
chunk__48599_48639 = G__48656;
count__48600_48640 = G__48657;
i__48601_48641 = G__48658;
continue;
} else {
var vec__48607_48659 = cljs.core.first.call(null,seq__48598_48653__$1);
var name_48660 = cljs.core.nth.call(null,vec__48607_48659,(0),null);
var map__48610_48661 = cljs.core.nth.call(null,vec__48607_48659,(1),null);
var map__48610_48662__$1 = ((((!((map__48610_48661 == null)))?((((map__48610_48661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48610_48661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48610_48661):map__48610_48661);
var doc_48663 = cljs.core.get.call(null,map__48610_48662__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48664 = cljs.core.get.call(null,map__48610_48662__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48660);

cljs.core.println.call(null," ",arglists_48664);

if(cljs.core.truth_(doc_48663)){
cljs.core.println.call(null," ",doc_48663);
} else {
}

var G__48665 = cljs.core.next.call(null,seq__48598_48653__$1);
var G__48666 = null;
var G__48667 = (0);
var G__48668 = (0);
seq__48598_48638 = G__48665;
chunk__48599_48639 = G__48666;
count__48600_48640 = G__48667;
i__48601_48641 = G__48668;
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

var seq__48612 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48613 = null;
var count__48614 = (0);
var i__48615 = (0);
while(true){
if((i__48615 < count__48614)){
var role = cljs.core._nth.call(null,chunk__48613,i__48615);
var temp__5290__auto___48669__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___48669__$1)){
var spec_48670 = temp__5290__auto___48669__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_48670));
} else {
}

var G__48671 = seq__48612;
var G__48672 = chunk__48613;
var G__48673 = count__48614;
var G__48674 = (i__48615 + (1));
seq__48612 = G__48671;
chunk__48613 = G__48672;
count__48614 = G__48673;
i__48615 = G__48674;
continue;
} else {
var temp__5290__auto____$1 = cljs.core.seq.call(null,seq__48612);
if(temp__5290__auto____$1){
var seq__48612__$1 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48612__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__48612__$1);
var G__48675 = cljs.core.chunk_rest.call(null,seq__48612__$1);
var G__48676 = c__31180__auto__;
var G__48677 = cljs.core.count.call(null,c__31180__auto__);
var G__48678 = (0);
seq__48612 = G__48675;
chunk__48613 = G__48676;
count__48614 = G__48677;
i__48615 = G__48678;
continue;
} else {
var role = cljs.core.first.call(null,seq__48612__$1);
var temp__5290__auto___48679__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___48679__$2)){
var spec_48680 = temp__5290__auto___48679__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_48680));
} else {
}

var G__48681 = cljs.core.next.call(null,seq__48612__$1);
var G__48682 = null;
var G__48683 = (0);
var G__48684 = (0);
seq__48612 = G__48681;
chunk__48613 = G__48682;
count__48614 = G__48683;
i__48615 = G__48684;
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

//# sourceMappingURL=repl.js.map?rel=1509397949694
