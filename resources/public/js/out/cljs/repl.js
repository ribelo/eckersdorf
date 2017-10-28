// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50102){
var map__50103 = p__50102;
var map__50103__$1 = ((((!((map__50103 == null)))?((((map__50103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50103):map__50103);
var m = map__50103__$1;
var n = cljs.core.get.call(null,map__50103__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__50103__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__50105_50127 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50106_50128 = null;
var count__50107_50129 = (0);
var i__50108_50130 = (0);
while(true){
if((i__50108_50130 < count__50107_50129)){
var f_50131 = cljs.core._nth.call(null,chunk__50106_50128,i__50108_50130);
cljs.core.println.call(null,"  ",f_50131);

var G__50132 = seq__50105_50127;
var G__50133 = chunk__50106_50128;
var G__50134 = count__50107_50129;
var G__50135 = (i__50108_50130 + (1));
seq__50105_50127 = G__50132;
chunk__50106_50128 = G__50133;
count__50107_50129 = G__50134;
i__50108_50130 = G__50135;
continue;
} else {
var temp__5290__auto___50136 = cljs.core.seq.call(null,seq__50105_50127);
if(temp__5290__auto___50136){
var seq__50105_50137__$1 = temp__5290__auto___50136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50105_50137__$1)){
var c__31170__auto___50138 = cljs.core.chunk_first.call(null,seq__50105_50137__$1);
var G__50139 = cljs.core.chunk_rest.call(null,seq__50105_50137__$1);
var G__50140 = c__31170__auto___50138;
var G__50141 = cljs.core.count.call(null,c__31170__auto___50138);
var G__50142 = (0);
seq__50105_50127 = G__50139;
chunk__50106_50128 = G__50140;
count__50107_50129 = G__50141;
i__50108_50130 = G__50142;
continue;
} else {
var f_50143 = cljs.core.first.call(null,seq__50105_50137__$1);
cljs.core.println.call(null,"  ",f_50143);

var G__50144 = cljs.core.next.call(null,seq__50105_50137__$1);
var G__50145 = null;
var G__50146 = (0);
var G__50147 = (0);
seq__50105_50127 = G__50144;
chunk__50106_50128 = G__50145;
count__50107_50129 = G__50146;
i__50108_50130 = G__50147;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50148 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30239__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_50148);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_50148)))?cljs.core.second.call(null,arglists_50148):arglists_50148));
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
var seq__50109_50149 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50110_50150 = null;
var count__50111_50151 = (0);
var i__50112_50152 = (0);
while(true){
if((i__50112_50152 < count__50111_50151)){
var vec__50113_50153 = cljs.core._nth.call(null,chunk__50110_50150,i__50112_50152);
var name_50154 = cljs.core.nth.call(null,vec__50113_50153,(0),null);
var map__50116_50155 = cljs.core.nth.call(null,vec__50113_50153,(1),null);
var map__50116_50156__$1 = ((((!((map__50116_50155 == null)))?((((map__50116_50155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50116_50155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50116_50155):map__50116_50155);
var doc_50157 = cljs.core.get.call(null,map__50116_50156__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50158 = cljs.core.get.call(null,map__50116_50156__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50154);

cljs.core.println.call(null," ",arglists_50158);

if(cljs.core.truth_(doc_50157)){
cljs.core.println.call(null," ",doc_50157);
} else {
}

var G__50159 = seq__50109_50149;
var G__50160 = chunk__50110_50150;
var G__50161 = count__50111_50151;
var G__50162 = (i__50112_50152 + (1));
seq__50109_50149 = G__50159;
chunk__50110_50150 = G__50160;
count__50111_50151 = G__50161;
i__50112_50152 = G__50162;
continue;
} else {
var temp__5290__auto___50163 = cljs.core.seq.call(null,seq__50109_50149);
if(temp__5290__auto___50163){
var seq__50109_50164__$1 = temp__5290__auto___50163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50109_50164__$1)){
var c__31170__auto___50165 = cljs.core.chunk_first.call(null,seq__50109_50164__$1);
var G__50166 = cljs.core.chunk_rest.call(null,seq__50109_50164__$1);
var G__50167 = c__31170__auto___50165;
var G__50168 = cljs.core.count.call(null,c__31170__auto___50165);
var G__50169 = (0);
seq__50109_50149 = G__50166;
chunk__50110_50150 = G__50167;
count__50111_50151 = G__50168;
i__50112_50152 = G__50169;
continue;
} else {
var vec__50118_50170 = cljs.core.first.call(null,seq__50109_50164__$1);
var name_50171 = cljs.core.nth.call(null,vec__50118_50170,(0),null);
var map__50121_50172 = cljs.core.nth.call(null,vec__50118_50170,(1),null);
var map__50121_50173__$1 = ((((!((map__50121_50172 == null)))?((((map__50121_50172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50121_50172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50121_50172):map__50121_50172);
var doc_50174 = cljs.core.get.call(null,map__50121_50173__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50175 = cljs.core.get.call(null,map__50121_50173__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50171);

cljs.core.println.call(null," ",arglists_50175);

if(cljs.core.truth_(doc_50174)){
cljs.core.println.call(null," ",doc_50174);
} else {
}

var G__50176 = cljs.core.next.call(null,seq__50109_50164__$1);
var G__50177 = null;
var G__50178 = (0);
var G__50179 = (0);
seq__50109_50149 = G__50176;
chunk__50110_50150 = G__50177;
count__50111_50151 = G__50178;
i__50112_50152 = G__50179;
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

var seq__50123 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50124 = null;
var count__50125 = (0);
var i__50126 = (0);
while(true){
if((i__50126 < count__50125)){
var role = cljs.core._nth.call(null,chunk__50124,i__50126);
var temp__5290__auto___50180__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___50180__$1)){
var spec_50181 = temp__5290__auto___50180__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_50181));
} else {
}

var G__50182 = seq__50123;
var G__50183 = chunk__50124;
var G__50184 = count__50125;
var G__50185 = (i__50126 + (1));
seq__50123 = G__50182;
chunk__50124 = G__50183;
count__50125 = G__50184;
i__50126 = G__50185;
continue;
} else {
var temp__5290__auto____$1 = cljs.core.seq.call(null,seq__50123);
if(temp__5290__auto____$1){
var seq__50123__$1 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50123__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__50123__$1);
var G__50186 = cljs.core.chunk_rest.call(null,seq__50123__$1);
var G__50187 = c__31170__auto__;
var G__50188 = cljs.core.count.call(null,c__31170__auto__);
var G__50189 = (0);
seq__50123 = G__50186;
chunk__50124 = G__50187;
count__50125 = G__50188;
i__50126 = G__50189;
continue;
} else {
var role = cljs.core.first.call(null,seq__50123__$1);
var temp__5290__auto___50190__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5290__auto___50190__$2)){
var spec_50191 = temp__5290__auto___50190__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_50191));
} else {
}

var G__50192 = cljs.core.next.call(null,seq__50123__$1);
var G__50193 = null;
var G__50194 = (0);
var G__50195 = (0);
seq__50123 = G__50192;
chunk__50124 = G__50193;
count__50125 = G__50194;
i__50126 = G__50195;
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

//# sourceMappingURL=repl.js.map?rel=1509094253174
