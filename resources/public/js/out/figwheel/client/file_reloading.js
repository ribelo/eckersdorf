// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30239__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30239__auto__){
return or__30239__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30239__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
var or__30239__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30239__auto____$1)){
return or__30239__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49476_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49476_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__49477 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49478 = null;
var count__49479 = (0);
var i__49480 = (0);
while(true){
if((i__49480 < count__49479)){
var n = cljs.core._nth.call(null,chunk__49478,i__49480);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49481 = seq__49477;
var G__49482 = chunk__49478;
var G__49483 = count__49479;
var G__49484 = (i__49480 + (1));
seq__49477 = G__49481;
chunk__49478 = G__49482;
count__49479 = G__49483;
i__49480 = G__49484;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__49477);
if(temp__5290__auto__){
var seq__49477__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49477__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__49477__$1);
var G__49485 = cljs.core.chunk_rest.call(null,seq__49477__$1);
var G__49486 = c__31170__auto__;
var G__49487 = cljs.core.count.call(null,c__31170__auto__);
var G__49488 = (0);
seq__49477 = G__49485;
chunk__49478 = G__49486;
count__49479 = G__49487;
i__49480 = G__49488;
continue;
} else {
var n = cljs.core.first.call(null,seq__49477__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49489 = cljs.core.next.call(null,seq__49477__$1);
var G__49490 = null;
var G__49491 = (0);
var G__49492 = (0);
seq__49477 = G__49489;
chunk__49478 = G__49490;
count__49479 = G__49491;
i__49480 = G__49492;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__49502_49510 = cljs.core.seq.call(null,deps);
var chunk__49503_49511 = null;
var count__49504_49512 = (0);
var i__49505_49513 = (0);
while(true){
if((i__49505_49513 < count__49504_49512)){
var dep_49514 = cljs.core._nth.call(null,chunk__49503_49511,i__49505_49513);
topo_sort_helper_STAR_.call(null,dep_49514,(depth + (1)),state);

var G__49515 = seq__49502_49510;
var G__49516 = chunk__49503_49511;
var G__49517 = count__49504_49512;
var G__49518 = (i__49505_49513 + (1));
seq__49502_49510 = G__49515;
chunk__49503_49511 = G__49516;
count__49504_49512 = G__49517;
i__49505_49513 = G__49518;
continue;
} else {
var temp__5290__auto___49519 = cljs.core.seq.call(null,seq__49502_49510);
if(temp__5290__auto___49519){
var seq__49502_49520__$1 = temp__5290__auto___49519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49502_49520__$1)){
var c__31170__auto___49521 = cljs.core.chunk_first.call(null,seq__49502_49520__$1);
var G__49522 = cljs.core.chunk_rest.call(null,seq__49502_49520__$1);
var G__49523 = c__31170__auto___49521;
var G__49524 = cljs.core.count.call(null,c__31170__auto___49521);
var G__49525 = (0);
seq__49502_49510 = G__49522;
chunk__49503_49511 = G__49523;
count__49504_49512 = G__49524;
i__49505_49513 = G__49525;
continue;
} else {
var dep_49526 = cljs.core.first.call(null,seq__49502_49520__$1);
topo_sort_helper_STAR_.call(null,dep_49526,(depth + (1)),state);

var G__49527 = cljs.core.next.call(null,seq__49502_49520__$1);
var G__49528 = null;
var G__49529 = (0);
var G__49530 = (0);
seq__49502_49510 = G__49527;
chunk__49503_49511 = G__49528;
count__49504_49512 = G__49529;
i__49505_49513 = G__49530;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49506){
var vec__49507 = p__49506;
var seq__49508 = cljs.core.seq.call(null,vec__49507);
var first__49509 = cljs.core.first.call(null,seq__49508);
var seq__49508__$1 = cljs.core.next.call(null,seq__49508);
var x = first__49509;
var xs = seq__49508__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49507,seq__49508,first__49509,seq__49508__$1,x,xs,get_deps__$1){
return (function (p1__49493_SHARP_){
return clojure.set.difference.call(null,p1__49493_SHARP_,x);
});})(vec__49507,seq__49508,first__49509,seq__49508__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__49531 = cljs.core.seq.call(null,provides);
var chunk__49532 = null;
var count__49533 = (0);
var i__49534 = (0);
while(true){
if((i__49534 < count__49533)){
var prov = cljs.core._nth.call(null,chunk__49532,i__49534);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49535_49543 = cljs.core.seq.call(null,requires);
var chunk__49536_49544 = null;
var count__49537_49545 = (0);
var i__49538_49546 = (0);
while(true){
if((i__49538_49546 < count__49537_49545)){
var req_49547 = cljs.core._nth.call(null,chunk__49536_49544,i__49538_49546);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49547,prov);

var G__49548 = seq__49535_49543;
var G__49549 = chunk__49536_49544;
var G__49550 = count__49537_49545;
var G__49551 = (i__49538_49546 + (1));
seq__49535_49543 = G__49548;
chunk__49536_49544 = G__49549;
count__49537_49545 = G__49550;
i__49538_49546 = G__49551;
continue;
} else {
var temp__5290__auto___49552 = cljs.core.seq.call(null,seq__49535_49543);
if(temp__5290__auto___49552){
var seq__49535_49553__$1 = temp__5290__auto___49552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49535_49553__$1)){
var c__31170__auto___49554 = cljs.core.chunk_first.call(null,seq__49535_49553__$1);
var G__49555 = cljs.core.chunk_rest.call(null,seq__49535_49553__$1);
var G__49556 = c__31170__auto___49554;
var G__49557 = cljs.core.count.call(null,c__31170__auto___49554);
var G__49558 = (0);
seq__49535_49543 = G__49555;
chunk__49536_49544 = G__49556;
count__49537_49545 = G__49557;
i__49538_49546 = G__49558;
continue;
} else {
var req_49559 = cljs.core.first.call(null,seq__49535_49553__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49559,prov);

var G__49560 = cljs.core.next.call(null,seq__49535_49553__$1);
var G__49561 = null;
var G__49562 = (0);
var G__49563 = (0);
seq__49535_49543 = G__49560;
chunk__49536_49544 = G__49561;
count__49537_49545 = G__49562;
i__49538_49546 = G__49563;
continue;
}
} else {
}
}
break;
}

var G__49564 = seq__49531;
var G__49565 = chunk__49532;
var G__49566 = count__49533;
var G__49567 = (i__49534 + (1));
seq__49531 = G__49564;
chunk__49532 = G__49565;
count__49533 = G__49566;
i__49534 = G__49567;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__49531);
if(temp__5290__auto__){
var seq__49531__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49531__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__49531__$1);
var G__49568 = cljs.core.chunk_rest.call(null,seq__49531__$1);
var G__49569 = c__31170__auto__;
var G__49570 = cljs.core.count.call(null,c__31170__auto__);
var G__49571 = (0);
seq__49531 = G__49568;
chunk__49532 = G__49569;
count__49533 = G__49570;
i__49534 = G__49571;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49531__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49539_49572 = cljs.core.seq.call(null,requires);
var chunk__49540_49573 = null;
var count__49541_49574 = (0);
var i__49542_49575 = (0);
while(true){
if((i__49542_49575 < count__49541_49574)){
var req_49576 = cljs.core._nth.call(null,chunk__49540_49573,i__49542_49575);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49576,prov);

var G__49577 = seq__49539_49572;
var G__49578 = chunk__49540_49573;
var G__49579 = count__49541_49574;
var G__49580 = (i__49542_49575 + (1));
seq__49539_49572 = G__49577;
chunk__49540_49573 = G__49578;
count__49541_49574 = G__49579;
i__49542_49575 = G__49580;
continue;
} else {
var temp__5290__auto___49581__$1 = cljs.core.seq.call(null,seq__49539_49572);
if(temp__5290__auto___49581__$1){
var seq__49539_49582__$1 = temp__5290__auto___49581__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49539_49582__$1)){
var c__31170__auto___49583 = cljs.core.chunk_first.call(null,seq__49539_49582__$1);
var G__49584 = cljs.core.chunk_rest.call(null,seq__49539_49582__$1);
var G__49585 = c__31170__auto___49583;
var G__49586 = cljs.core.count.call(null,c__31170__auto___49583);
var G__49587 = (0);
seq__49539_49572 = G__49584;
chunk__49540_49573 = G__49585;
count__49541_49574 = G__49586;
i__49542_49575 = G__49587;
continue;
} else {
var req_49588 = cljs.core.first.call(null,seq__49539_49582__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49588,prov);

var G__49589 = cljs.core.next.call(null,seq__49539_49582__$1);
var G__49590 = null;
var G__49591 = (0);
var G__49592 = (0);
seq__49539_49572 = G__49589;
chunk__49540_49573 = G__49590;
count__49541_49574 = G__49591;
i__49542_49575 = G__49592;
continue;
}
} else {
}
}
break;
}

var G__49593 = cljs.core.next.call(null,seq__49531__$1);
var G__49594 = null;
var G__49595 = (0);
var G__49596 = (0);
seq__49531 = G__49593;
chunk__49532 = G__49594;
count__49533 = G__49595;
i__49534 = G__49596;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__49597_49601 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49598_49602 = null;
var count__49599_49603 = (0);
var i__49600_49604 = (0);
while(true){
if((i__49600_49604 < count__49599_49603)){
var ns_49605 = cljs.core._nth.call(null,chunk__49598_49602,i__49600_49604);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49605);

var G__49606 = seq__49597_49601;
var G__49607 = chunk__49598_49602;
var G__49608 = count__49599_49603;
var G__49609 = (i__49600_49604 + (1));
seq__49597_49601 = G__49606;
chunk__49598_49602 = G__49607;
count__49599_49603 = G__49608;
i__49600_49604 = G__49609;
continue;
} else {
var temp__5290__auto___49610 = cljs.core.seq.call(null,seq__49597_49601);
if(temp__5290__auto___49610){
var seq__49597_49611__$1 = temp__5290__auto___49610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49597_49611__$1)){
var c__31170__auto___49612 = cljs.core.chunk_first.call(null,seq__49597_49611__$1);
var G__49613 = cljs.core.chunk_rest.call(null,seq__49597_49611__$1);
var G__49614 = c__31170__auto___49612;
var G__49615 = cljs.core.count.call(null,c__31170__auto___49612);
var G__49616 = (0);
seq__49597_49601 = G__49613;
chunk__49598_49602 = G__49614;
count__49599_49603 = G__49615;
i__49600_49604 = G__49616;
continue;
} else {
var ns_49617 = cljs.core.first.call(null,seq__49597_49611__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49617);

var G__49618 = cljs.core.next.call(null,seq__49597_49611__$1);
var G__49619 = null;
var G__49620 = (0);
var G__49621 = (0);
seq__49597_49601 = G__49618;
chunk__49598_49602 = G__49619;
count__49599_49603 = G__49620;
i__49600_49604 = G__49621;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30239__auto__ = goog.require__;
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__49622__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49623__i = 0, G__49623__a = new Array(arguments.length -  0);
while (G__49623__i < G__49623__a.length) {G__49623__a[G__49623__i] = arguments[G__49623__i + 0]; ++G__49623__i;}
  args = new cljs.core.IndexedSeq(G__49623__a,0,null);
} 
return G__49622__delegate.call(this,args);};
G__49622.cljs$lang$maxFixedArity = 0;
G__49622.cljs$lang$applyTo = (function (arglist__49624){
var args = cljs.core.seq(arglist__49624);
return G__49622__delegate(args);
});
G__49622.cljs$core$IFn$_invoke$arity$variadic = G__49622__delegate;
return G__49622;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__49625_SHARP_,p2__49626_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49625_SHARP_)].join('')),p2__49626_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__49627_SHARP_,p2__49628_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49627_SHARP_)].join(''),p2__49628_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__49629 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__49629.addCallback(((function (G__49629){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__49629))
);

G__49629.addErrback(((function (G__49629){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__49629))
);

return G__49629;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49630 = cljs.core._EQ_;
var expr__49631 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49630.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49631))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__49630,expr__49631){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__49630,expr__49631))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__49630,expr__49631){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49633){if((e49633 instanceof Error)){
var e = e49633;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49633;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__49630,expr__49631))
} else {
if(cljs.core.truth_(pred__49630.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49631))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49630.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__49631))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49630.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49631))){
return ((function (pred__49630,expr__49631){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49634){if((e49634 instanceof Error)){
var e = e49634;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49634;

}
}})());
});
;})(pred__49630,expr__49631))
} else {
return ((function (pred__49630,expr__49631){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49630,expr__49631))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49635,callback){
var map__49636 = p__49635;
var map__49636__$1 = ((((!((map__49636 == null)))?((((map__49636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49636):map__49636);
var file_msg = map__49636__$1;
var request_url = cljs.core.get.call(null,map__49636__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49636,map__49636__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49636,map__49636__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__47162__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto__){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto__){
return (function (state_49660){
var state_val_49661 = (state_49660[(1)]);
if((state_val_49661 === (7))){
var inst_49656 = (state_49660[(2)]);
var state_49660__$1 = state_49660;
var statearr_49662_49679 = state_49660__$1;
(statearr_49662_49679[(2)] = inst_49656);

(statearr_49662_49679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49661 === (1))){
var state_49660__$1 = state_49660;
var statearr_49663_49680 = state_49660__$1;
(statearr_49663_49680[(2)] = null);

(statearr_49663_49680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49661 === (4))){
var inst_49640 = (state_49660[(7)]);
var inst_49640__$1 = (state_49660[(2)]);
var state_49660__$1 = (function (){var statearr_49664 = state_49660;
(statearr_49664[(7)] = inst_49640__$1);

return statearr_49664;
})();
if(cljs.core.truth_(inst_49640__$1)){
var statearr_49665_49681 = state_49660__$1;
(statearr_49665_49681[(1)] = (5));

} else {
var statearr_49666_49682 = state_49660__$1;
(statearr_49666_49682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49661 === (6))){
var state_49660__$1 = state_49660;
var statearr_49667_49683 = state_49660__$1;
(statearr_49667_49683[(2)] = null);

(statearr_49667_49683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49661 === (3))){
var inst_49658 = (state_49660[(2)]);
var state_49660__$1 = state_49660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49660__$1,inst_49658);
} else {
if((state_val_49661 === (2))){
var state_49660__$1 = state_49660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49660__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49661 === (11))){
var inst_49652 = (state_49660[(2)]);
var state_49660__$1 = (function (){var statearr_49668 = state_49660;
(statearr_49668[(8)] = inst_49652);

return statearr_49668;
})();
var statearr_49669_49684 = state_49660__$1;
(statearr_49669_49684[(2)] = null);

(statearr_49669_49684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49661 === (9))){
var inst_49644 = (state_49660[(9)]);
var inst_49646 = (state_49660[(10)]);
var inst_49648 = inst_49646.call(null,inst_49644);
var state_49660__$1 = state_49660;
var statearr_49670_49685 = state_49660__$1;
(statearr_49670_49685[(2)] = inst_49648);

(statearr_49670_49685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49661 === (5))){
var inst_49640 = (state_49660[(7)]);
var inst_49642 = figwheel.client.file_reloading.blocking_load.call(null,inst_49640);
var state_49660__$1 = state_49660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49660__$1,(8),inst_49642);
} else {
if((state_val_49661 === (10))){
var inst_49644 = (state_49660[(9)]);
var inst_49650 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49644);
var state_49660__$1 = state_49660;
var statearr_49671_49686 = state_49660__$1;
(statearr_49671_49686[(2)] = inst_49650);

(statearr_49671_49686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49661 === (8))){
var inst_49640 = (state_49660[(7)]);
var inst_49646 = (state_49660[(10)]);
var inst_49644 = (state_49660[(2)]);
var inst_49645 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49646__$1 = cljs.core.get.call(null,inst_49645,inst_49640);
var state_49660__$1 = (function (){var statearr_49672 = state_49660;
(statearr_49672[(9)] = inst_49644);

(statearr_49672[(10)] = inst_49646__$1);

return statearr_49672;
})();
if(cljs.core.truth_(inst_49646__$1)){
var statearr_49673_49687 = state_49660__$1;
(statearr_49673_49687[(1)] = (9));

} else {
var statearr_49674_49688 = state_49660__$1;
(statearr_49674_49688[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__47162__auto__))
;
return ((function (switch__47072__auto__,c__47162__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__47073__auto__ = null;
var figwheel$client$file_reloading$state_machine__47073__auto____0 = (function (){
var statearr_49675 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49675[(0)] = figwheel$client$file_reloading$state_machine__47073__auto__);

(statearr_49675[(1)] = (1));

return statearr_49675;
});
var figwheel$client$file_reloading$state_machine__47073__auto____1 = (function (state_49660){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_49660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e49676){if((e49676 instanceof Object)){
var ex__47076__auto__ = e49676;
var statearr_49677_49689 = state_49660;
(statearr_49677_49689[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49690 = state_49660;
state_49660 = G__49690;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__47073__auto__ = function(state_49660){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__47073__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__47073__auto____1.call(this,state_49660);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__47073__auto____0;
figwheel$client$file_reloading$state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__47073__auto____1;
return figwheel$client$file_reloading$state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto__))
})();
var state__47164__auto__ = (function (){var statearr_49678 = f__47163__auto__.call(null);
(statearr_49678[(6)] = c__47162__auto__);

return statearr_49678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto__))
);

return c__47162__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49691,callback){
var map__49692 = p__49691;
var map__49692__$1 = ((((!((map__49692 == null)))?((((map__49692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49692):map__49692);
var file_msg = map__49692__$1;
var namespace = cljs.core.get.call(null,map__49692__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49692,map__49692__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49692,map__49692__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49694){
var map__49695 = p__49694;
var map__49695__$1 = ((((!((map__49695 == null)))?((((map__49695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49695):map__49695);
var file_msg = map__49695__$1;
var namespace = cljs.core.get.call(null,map__49695__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49697){
var map__49698 = p__49697;
var map__49698__$1 = ((((!((map__49698 == null)))?((((map__49698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49698):map__49698);
var file_msg = map__49698__$1;
var namespace = cljs.core.get.call(null,map__49698__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30227__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30227__auto__){
var or__30239__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30239__auto__)){
return or__30239__auto__;
} else {
var or__30239__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30239__auto____$1)){
return or__30239__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30227__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49700,callback){
var map__49701 = p__49700;
var map__49701__$1 = ((((!((map__49701 == null)))?((((map__49701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49701):map__49701);
var file_msg = map__49701__$1;
var request_url = cljs.core.get.call(null,map__49701__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__47162__auto___49751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto___49751,out){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto___49751,out){
return (function (state_49736){
var state_val_49737 = (state_49736[(1)]);
if((state_val_49737 === (1))){
var inst_49710 = cljs.core.seq.call(null,files);
var inst_49711 = cljs.core.first.call(null,inst_49710);
var inst_49712 = cljs.core.next.call(null,inst_49710);
var inst_49713 = files;
var state_49736__$1 = (function (){var statearr_49738 = state_49736;
(statearr_49738[(7)] = inst_49713);

(statearr_49738[(8)] = inst_49711);

(statearr_49738[(9)] = inst_49712);

return statearr_49738;
})();
var statearr_49739_49752 = state_49736__$1;
(statearr_49739_49752[(2)] = null);

(statearr_49739_49752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49737 === (2))){
var inst_49713 = (state_49736[(7)]);
var inst_49719 = (state_49736[(10)]);
var inst_49718 = cljs.core.seq.call(null,inst_49713);
var inst_49719__$1 = cljs.core.first.call(null,inst_49718);
var inst_49720 = cljs.core.next.call(null,inst_49718);
var inst_49721 = (inst_49719__$1 == null);
var inst_49722 = cljs.core.not.call(null,inst_49721);
var state_49736__$1 = (function (){var statearr_49740 = state_49736;
(statearr_49740[(10)] = inst_49719__$1);

(statearr_49740[(11)] = inst_49720);

return statearr_49740;
})();
if(inst_49722){
var statearr_49741_49753 = state_49736__$1;
(statearr_49741_49753[(1)] = (4));

} else {
var statearr_49742_49754 = state_49736__$1;
(statearr_49742_49754[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49737 === (3))){
var inst_49734 = (state_49736[(2)]);
var state_49736__$1 = state_49736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49736__$1,inst_49734);
} else {
if((state_val_49737 === (4))){
var inst_49719 = (state_49736[(10)]);
var inst_49724 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49719);
var state_49736__$1 = state_49736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49736__$1,(7),inst_49724);
} else {
if((state_val_49737 === (5))){
var inst_49730 = cljs.core.async.close_BANG_.call(null,out);
var state_49736__$1 = state_49736;
var statearr_49743_49755 = state_49736__$1;
(statearr_49743_49755[(2)] = inst_49730);

(statearr_49743_49755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49737 === (6))){
var inst_49732 = (state_49736[(2)]);
var state_49736__$1 = state_49736;
var statearr_49744_49756 = state_49736__$1;
(statearr_49744_49756[(2)] = inst_49732);

(statearr_49744_49756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49737 === (7))){
var inst_49720 = (state_49736[(11)]);
var inst_49726 = (state_49736[(2)]);
var inst_49727 = cljs.core.async.put_BANG_.call(null,out,inst_49726);
var inst_49713 = inst_49720;
var state_49736__$1 = (function (){var statearr_49745 = state_49736;
(statearr_49745[(7)] = inst_49713);

(statearr_49745[(12)] = inst_49727);

return statearr_49745;
})();
var statearr_49746_49757 = state_49736__$1;
(statearr_49746_49757[(2)] = null);

(statearr_49746_49757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__47162__auto___49751,out))
;
return ((function (switch__47072__auto__,c__47162__auto___49751,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47073__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47073__auto____0 = (function (){
var statearr_49747 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49747[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47073__auto__);

(statearr_49747[(1)] = (1));

return statearr_49747;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47073__auto____1 = (function (state_49736){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_49736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e49748){if((e49748 instanceof Object)){
var ex__47076__auto__ = e49748;
var statearr_49749_49758 = state_49736;
(statearr_49749_49758[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49759 = state_49736;
state_49736 = G__49759;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47073__auto__ = function(state_49736){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47073__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47073__auto____1.call(this,state_49736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47073__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47073__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto___49751,out))
})();
var state__47164__auto__ = (function (){var statearr_49750 = f__47163__auto__.call(null);
(statearr_49750[(6)] = c__47162__auto___49751);

return statearr_49750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto___49751,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49760,opts){
var map__49761 = p__49760;
var map__49761__$1 = ((((!((map__49761 == null)))?((((map__49761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49761):map__49761);
var eval_body = cljs.core.get.call(null,map__49761__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30227__auto__ = eval_body;
if(cljs.core.truth_(and__30227__auto__)){
return typeof eval_body === 'string';
} else {
return and__30227__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e49763){var e = e49763;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5288__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__49764_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49764_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5288__auto__)){
var file_msg = temp__5288__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__49765){
var vec__49766 = p__49765;
var k = cljs.core.nth.call(null,vec__49766,(0),null);
var v = cljs.core.nth.call(null,vec__49766,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49769){
var vec__49770 = p__49769;
var k = cljs.core.nth.call(null,vec__49770,(0),null);
var v = cljs.core.nth.call(null,vec__49770,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49776,p__49777){
var map__49778 = p__49776;
var map__49778__$1 = ((((!((map__49778 == null)))?((((map__49778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49778):map__49778);
var opts = map__49778__$1;
var before_jsload = cljs.core.get.call(null,map__49778__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49778__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49778__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49779 = p__49777;
var map__49779__$1 = ((((!((map__49779 == null)))?((((map__49779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49779):map__49779);
var msg = map__49779__$1;
var files = cljs.core.get.call(null,map__49779__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49779__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49779__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__47162__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__47163__auto__ = (function (){var switch__47072__auto__ = ((function (c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49933){
var state_val_49934 = (state_49933[(1)]);
if((state_val_49934 === (7))){
var inst_49795 = (state_49933[(7)]);
var inst_49793 = (state_49933[(8)]);
var inst_49796 = (state_49933[(9)]);
var inst_49794 = (state_49933[(10)]);
var inst_49801 = cljs.core._nth.call(null,inst_49794,inst_49796);
var inst_49802 = figwheel.client.file_reloading.eval_body.call(null,inst_49801,opts);
var inst_49803 = (inst_49796 + (1));
var tmp49935 = inst_49795;
var tmp49936 = inst_49793;
var tmp49937 = inst_49794;
var inst_49793__$1 = tmp49936;
var inst_49794__$1 = tmp49937;
var inst_49795__$1 = tmp49935;
var inst_49796__$1 = inst_49803;
var state_49933__$1 = (function (){var statearr_49938 = state_49933;
(statearr_49938[(7)] = inst_49795__$1);

(statearr_49938[(8)] = inst_49793__$1);

(statearr_49938[(9)] = inst_49796__$1);

(statearr_49938[(10)] = inst_49794__$1);

(statearr_49938[(11)] = inst_49802);

return statearr_49938;
})();
var statearr_49939_50022 = state_49933__$1;
(statearr_49939_50022[(2)] = null);

(statearr_49939_50022[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (20))){
var inst_49836 = (state_49933[(12)]);
var inst_49844 = figwheel.client.file_reloading.sort_files.call(null,inst_49836);
var state_49933__$1 = state_49933;
var statearr_49940_50023 = state_49933__$1;
(statearr_49940_50023[(2)] = inst_49844);

(statearr_49940_50023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (27))){
var state_49933__$1 = state_49933;
var statearr_49941_50024 = state_49933__$1;
(statearr_49941_50024[(2)] = null);

(statearr_49941_50024[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (1))){
var inst_49785 = (state_49933[(13)]);
var inst_49782 = before_jsload.call(null,files);
var inst_49783 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49784 = (function (){return ((function (inst_49785,inst_49782,inst_49783,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49773_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49773_SHARP_);
});
;})(inst_49785,inst_49782,inst_49783,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49785__$1 = cljs.core.filter.call(null,inst_49784,files);
var inst_49786 = cljs.core.not_empty.call(null,inst_49785__$1);
var state_49933__$1 = (function (){var statearr_49942 = state_49933;
(statearr_49942[(14)] = inst_49782);

(statearr_49942[(13)] = inst_49785__$1);

(statearr_49942[(15)] = inst_49783);

return statearr_49942;
})();
if(cljs.core.truth_(inst_49786)){
var statearr_49943_50025 = state_49933__$1;
(statearr_49943_50025[(1)] = (2));

} else {
var statearr_49944_50026 = state_49933__$1;
(statearr_49944_50026[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (24))){
var state_49933__$1 = state_49933;
var statearr_49945_50027 = state_49933__$1;
(statearr_49945_50027[(2)] = null);

(statearr_49945_50027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (39))){
var inst_49886 = (state_49933[(16)]);
var state_49933__$1 = state_49933;
var statearr_49946_50028 = state_49933__$1;
(statearr_49946_50028[(2)] = inst_49886);

(statearr_49946_50028[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (46))){
var inst_49928 = (state_49933[(2)]);
var state_49933__$1 = state_49933;
var statearr_49947_50029 = state_49933__$1;
(statearr_49947_50029[(2)] = inst_49928);

(statearr_49947_50029[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (4))){
var inst_49830 = (state_49933[(2)]);
var inst_49831 = cljs.core.List.EMPTY;
var inst_49832 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49831);
var inst_49833 = (function (){return ((function (inst_49830,inst_49831,inst_49832,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49774_SHARP_){
var and__30227__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49774_SHARP_);
if(cljs.core.truth_(and__30227__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49774_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49774_SHARP_)));
} else {
return and__30227__auto__;
}
});
;})(inst_49830,inst_49831,inst_49832,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49834 = cljs.core.filter.call(null,inst_49833,files);
var inst_49835 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49836 = cljs.core.concat.call(null,inst_49834,inst_49835);
var state_49933__$1 = (function (){var statearr_49948 = state_49933;
(statearr_49948[(17)] = inst_49832);

(statearr_49948[(18)] = inst_49830);

(statearr_49948[(12)] = inst_49836);

return statearr_49948;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49949_50030 = state_49933__$1;
(statearr_49949_50030[(1)] = (16));

} else {
var statearr_49950_50031 = state_49933__$1;
(statearr_49950_50031[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (15))){
var inst_49820 = (state_49933[(2)]);
var state_49933__$1 = state_49933;
var statearr_49951_50032 = state_49933__$1;
(statearr_49951_50032[(2)] = inst_49820);

(statearr_49951_50032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (21))){
var inst_49846 = (state_49933[(19)]);
var inst_49846__$1 = (state_49933[(2)]);
var inst_49847 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49846__$1);
var state_49933__$1 = (function (){var statearr_49952 = state_49933;
(statearr_49952[(19)] = inst_49846__$1);

return statearr_49952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49933__$1,(22),inst_49847);
} else {
if((state_val_49934 === (31))){
var inst_49931 = (state_49933[(2)]);
var state_49933__$1 = state_49933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49933__$1,inst_49931);
} else {
if((state_val_49934 === (32))){
var inst_49886 = (state_49933[(16)]);
var inst_49891 = inst_49886.cljs$lang$protocol_mask$partition0$;
var inst_49892 = (inst_49891 & (64));
var inst_49893 = inst_49886.cljs$core$ISeq$;
var inst_49894 = (cljs.core.PROTOCOL_SENTINEL === inst_49893);
var inst_49895 = (inst_49892) || (inst_49894);
var state_49933__$1 = state_49933;
if(cljs.core.truth_(inst_49895)){
var statearr_49953_50033 = state_49933__$1;
(statearr_49953_50033[(1)] = (35));

} else {
var statearr_49954_50034 = state_49933__$1;
(statearr_49954_50034[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (40))){
var inst_49908 = (state_49933[(20)]);
var inst_49907 = (state_49933[(2)]);
var inst_49908__$1 = cljs.core.get.call(null,inst_49907,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49909 = cljs.core.get.call(null,inst_49907,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49910 = cljs.core.not_empty.call(null,inst_49908__$1);
var state_49933__$1 = (function (){var statearr_49955 = state_49933;
(statearr_49955[(20)] = inst_49908__$1);

(statearr_49955[(21)] = inst_49909);

return statearr_49955;
})();
if(cljs.core.truth_(inst_49910)){
var statearr_49956_50035 = state_49933__$1;
(statearr_49956_50035[(1)] = (41));

} else {
var statearr_49957_50036 = state_49933__$1;
(statearr_49957_50036[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (33))){
var state_49933__$1 = state_49933;
var statearr_49958_50037 = state_49933__$1;
(statearr_49958_50037[(2)] = false);

(statearr_49958_50037[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (13))){
var inst_49806 = (state_49933[(22)]);
var inst_49810 = cljs.core.chunk_first.call(null,inst_49806);
var inst_49811 = cljs.core.chunk_rest.call(null,inst_49806);
var inst_49812 = cljs.core.count.call(null,inst_49810);
var inst_49793 = inst_49811;
var inst_49794 = inst_49810;
var inst_49795 = inst_49812;
var inst_49796 = (0);
var state_49933__$1 = (function (){var statearr_49959 = state_49933;
(statearr_49959[(7)] = inst_49795);

(statearr_49959[(8)] = inst_49793);

(statearr_49959[(9)] = inst_49796);

(statearr_49959[(10)] = inst_49794);

return statearr_49959;
})();
var statearr_49960_50038 = state_49933__$1;
(statearr_49960_50038[(2)] = null);

(statearr_49960_50038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (22))){
var inst_49850 = (state_49933[(23)]);
var inst_49846 = (state_49933[(19)]);
var inst_49854 = (state_49933[(24)]);
var inst_49849 = (state_49933[(25)]);
var inst_49849__$1 = (state_49933[(2)]);
var inst_49850__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49849__$1);
var inst_49851 = (function (){var all_files = inst_49846;
var res_SINGLEQUOTE_ = inst_49849__$1;
var res = inst_49850__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49850,inst_49846,inst_49854,inst_49849,inst_49849__$1,inst_49850__$1,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49775_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49775_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49850,inst_49846,inst_49854,inst_49849,inst_49849__$1,inst_49850__$1,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49852 = cljs.core.filter.call(null,inst_49851,inst_49849__$1);
var inst_49853 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49854__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49853);
var inst_49855 = cljs.core.not_empty.call(null,inst_49854__$1);
var state_49933__$1 = (function (){var statearr_49961 = state_49933;
(statearr_49961[(23)] = inst_49850__$1);

(statearr_49961[(26)] = inst_49852);

(statearr_49961[(24)] = inst_49854__$1);

(statearr_49961[(25)] = inst_49849__$1);

return statearr_49961;
})();
if(cljs.core.truth_(inst_49855)){
var statearr_49962_50039 = state_49933__$1;
(statearr_49962_50039[(1)] = (23));

} else {
var statearr_49963_50040 = state_49933__$1;
(statearr_49963_50040[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (36))){
var state_49933__$1 = state_49933;
var statearr_49964_50041 = state_49933__$1;
(statearr_49964_50041[(2)] = false);

(statearr_49964_50041[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (41))){
var inst_49908 = (state_49933[(20)]);
var inst_49912 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49913 = cljs.core.map.call(null,inst_49912,inst_49908);
var inst_49914 = cljs.core.pr_str.call(null,inst_49913);
var inst_49915 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49914)].join('');
var inst_49916 = figwheel.client.utils.log.call(null,inst_49915);
var state_49933__$1 = state_49933;
var statearr_49965_50042 = state_49933__$1;
(statearr_49965_50042[(2)] = inst_49916);

(statearr_49965_50042[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (43))){
var inst_49909 = (state_49933[(21)]);
var inst_49919 = (state_49933[(2)]);
var inst_49920 = cljs.core.not_empty.call(null,inst_49909);
var state_49933__$1 = (function (){var statearr_49966 = state_49933;
(statearr_49966[(27)] = inst_49919);

return statearr_49966;
})();
if(cljs.core.truth_(inst_49920)){
var statearr_49967_50043 = state_49933__$1;
(statearr_49967_50043[(1)] = (44));

} else {
var statearr_49968_50044 = state_49933__$1;
(statearr_49968_50044[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (29))){
var inst_49850 = (state_49933[(23)]);
var inst_49846 = (state_49933[(19)]);
var inst_49852 = (state_49933[(26)]);
var inst_49854 = (state_49933[(24)]);
var inst_49849 = (state_49933[(25)]);
var inst_49886 = (state_49933[(16)]);
var inst_49882 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49885 = (function (){var all_files = inst_49846;
var res_SINGLEQUOTE_ = inst_49849;
var res = inst_49850;
var files_not_loaded = inst_49852;
var dependencies_that_loaded = inst_49854;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49850,inst_49846,inst_49852,inst_49854,inst_49849,inst_49886,inst_49882,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49884){
var map__49969 = p__49884;
var map__49969__$1 = ((((!((map__49969 == null)))?((((map__49969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49969):map__49969);
var namespace = cljs.core.get.call(null,map__49969__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49850,inst_49846,inst_49852,inst_49854,inst_49849,inst_49886,inst_49882,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49886__$1 = cljs.core.group_by.call(null,inst_49885,inst_49852);
var inst_49888 = (inst_49886__$1 == null);
var inst_49889 = cljs.core.not.call(null,inst_49888);
var state_49933__$1 = (function (){var statearr_49971 = state_49933;
(statearr_49971[(28)] = inst_49882);

(statearr_49971[(16)] = inst_49886__$1);

return statearr_49971;
})();
if(inst_49889){
var statearr_49972_50045 = state_49933__$1;
(statearr_49972_50045[(1)] = (32));

} else {
var statearr_49973_50046 = state_49933__$1;
(statearr_49973_50046[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (44))){
var inst_49909 = (state_49933[(21)]);
var inst_49922 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49909);
var inst_49923 = cljs.core.pr_str.call(null,inst_49922);
var inst_49924 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49923)].join('');
var inst_49925 = figwheel.client.utils.log.call(null,inst_49924);
var state_49933__$1 = state_49933;
var statearr_49974_50047 = state_49933__$1;
(statearr_49974_50047[(2)] = inst_49925);

(statearr_49974_50047[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (6))){
var inst_49827 = (state_49933[(2)]);
var state_49933__$1 = state_49933;
var statearr_49975_50048 = state_49933__$1;
(statearr_49975_50048[(2)] = inst_49827);

(statearr_49975_50048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (28))){
var inst_49852 = (state_49933[(26)]);
var inst_49879 = (state_49933[(2)]);
var inst_49880 = cljs.core.not_empty.call(null,inst_49852);
var state_49933__$1 = (function (){var statearr_49976 = state_49933;
(statearr_49976[(29)] = inst_49879);

return statearr_49976;
})();
if(cljs.core.truth_(inst_49880)){
var statearr_49977_50049 = state_49933__$1;
(statearr_49977_50049[(1)] = (29));

} else {
var statearr_49978_50050 = state_49933__$1;
(statearr_49978_50050[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (25))){
var inst_49850 = (state_49933[(23)]);
var inst_49866 = (state_49933[(2)]);
var inst_49867 = cljs.core.not_empty.call(null,inst_49850);
var state_49933__$1 = (function (){var statearr_49979 = state_49933;
(statearr_49979[(30)] = inst_49866);

return statearr_49979;
})();
if(cljs.core.truth_(inst_49867)){
var statearr_49980_50051 = state_49933__$1;
(statearr_49980_50051[(1)] = (26));

} else {
var statearr_49981_50052 = state_49933__$1;
(statearr_49981_50052[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (34))){
var inst_49902 = (state_49933[(2)]);
var state_49933__$1 = state_49933;
if(cljs.core.truth_(inst_49902)){
var statearr_49982_50053 = state_49933__$1;
(statearr_49982_50053[(1)] = (38));

} else {
var statearr_49983_50054 = state_49933__$1;
(statearr_49983_50054[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (17))){
var state_49933__$1 = state_49933;
var statearr_49984_50055 = state_49933__$1;
(statearr_49984_50055[(2)] = recompile_dependents);

(statearr_49984_50055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (3))){
var state_49933__$1 = state_49933;
var statearr_49985_50056 = state_49933__$1;
(statearr_49985_50056[(2)] = null);

(statearr_49985_50056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (12))){
var inst_49823 = (state_49933[(2)]);
var state_49933__$1 = state_49933;
var statearr_49986_50057 = state_49933__$1;
(statearr_49986_50057[(2)] = inst_49823);

(statearr_49986_50057[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (2))){
var inst_49785 = (state_49933[(13)]);
var inst_49792 = cljs.core.seq.call(null,inst_49785);
var inst_49793 = inst_49792;
var inst_49794 = null;
var inst_49795 = (0);
var inst_49796 = (0);
var state_49933__$1 = (function (){var statearr_49987 = state_49933;
(statearr_49987[(7)] = inst_49795);

(statearr_49987[(8)] = inst_49793);

(statearr_49987[(9)] = inst_49796);

(statearr_49987[(10)] = inst_49794);

return statearr_49987;
})();
var statearr_49988_50058 = state_49933__$1;
(statearr_49988_50058[(2)] = null);

(statearr_49988_50058[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (23))){
var inst_49850 = (state_49933[(23)]);
var inst_49846 = (state_49933[(19)]);
var inst_49852 = (state_49933[(26)]);
var inst_49854 = (state_49933[(24)]);
var inst_49849 = (state_49933[(25)]);
var inst_49857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49859 = (function (){var all_files = inst_49846;
var res_SINGLEQUOTE_ = inst_49849;
var res = inst_49850;
var files_not_loaded = inst_49852;
var dependencies_that_loaded = inst_49854;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49850,inst_49846,inst_49852,inst_49854,inst_49849,inst_49857,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49858){
var map__49989 = p__49858;
var map__49989__$1 = ((((!((map__49989 == null)))?((((map__49989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49989):map__49989);
var request_url = cljs.core.get.call(null,map__49989__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49850,inst_49846,inst_49852,inst_49854,inst_49849,inst_49857,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49860 = cljs.core.reverse.call(null,inst_49854);
var inst_49861 = cljs.core.map.call(null,inst_49859,inst_49860);
var inst_49862 = cljs.core.pr_str.call(null,inst_49861);
var inst_49863 = figwheel.client.utils.log.call(null,inst_49862);
var state_49933__$1 = (function (){var statearr_49991 = state_49933;
(statearr_49991[(31)] = inst_49857);

return statearr_49991;
})();
var statearr_49992_50059 = state_49933__$1;
(statearr_49992_50059[(2)] = inst_49863);

(statearr_49992_50059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (35))){
var state_49933__$1 = state_49933;
var statearr_49993_50060 = state_49933__$1;
(statearr_49993_50060[(2)] = true);

(statearr_49993_50060[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (19))){
var inst_49836 = (state_49933[(12)]);
var inst_49842 = figwheel.client.file_reloading.expand_files.call(null,inst_49836);
var state_49933__$1 = state_49933;
var statearr_49994_50061 = state_49933__$1;
(statearr_49994_50061[(2)] = inst_49842);

(statearr_49994_50061[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (11))){
var state_49933__$1 = state_49933;
var statearr_49995_50062 = state_49933__$1;
(statearr_49995_50062[(2)] = null);

(statearr_49995_50062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (9))){
var inst_49825 = (state_49933[(2)]);
var state_49933__$1 = state_49933;
var statearr_49996_50063 = state_49933__$1;
(statearr_49996_50063[(2)] = inst_49825);

(statearr_49996_50063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (5))){
var inst_49795 = (state_49933[(7)]);
var inst_49796 = (state_49933[(9)]);
var inst_49798 = (inst_49796 < inst_49795);
var inst_49799 = inst_49798;
var state_49933__$1 = state_49933;
if(cljs.core.truth_(inst_49799)){
var statearr_49997_50064 = state_49933__$1;
(statearr_49997_50064[(1)] = (7));

} else {
var statearr_49998_50065 = state_49933__$1;
(statearr_49998_50065[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (14))){
var inst_49806 = (state_49933[(22)]);
var inst_49815 = cljs.core.first.call(null,inst_49806);
var inst_49816 = figwheel.client.file_reloading.eval_body.call(null,inst_49815,opts);
var inst_49817 = cljs.core.next.call(null,inst_49806);
var inst_49793 = inst_49817;
var inst_49794 = null;
var inst_49795 = (0);
var inst_49796 = (0);
var state_49933__$1 = (function (){var statearr_49999 = state_49933;
(statearr_49999[(7)] = inst_49795);

(statearr_49999[(8)] = inst_49793);

(statearr_49999[(32)] = inst_49816);

(statearr_49999[(9)] = inst_49796);

(statearr_49999[(10)] = inst_49794);

return statearr_49999;
})();
var statearr_50000_50066 = state_49933__$1;
(statearr_50000_50066[(2)] = null);

(statearr_50000_50066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (45))){
var state_49933__$1 = state_49933;
var statearr_50001_50067 = state_49933__$1;
(statearr_50001_50067[(2)] = null);

(statearr_50001_50067[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (26))){
var inst_49850 = (state_49933[(23)]);
var inst_49846 = (state_49933[(19)]);
var inst_49852 = (state_49933[(26)]);
var inst_49854 = (state_49933[(24)]);
var inst_49849 = (state_49933[(25)]);
var inst_49869 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49871 = (function (){var all_files = inst_49846;
var res_SINGLEQUOTE_ = inst_49849;
var res = inst_49850;
var files_not_loaded = inst_49852;
var dependencies_that_loaded = inst_49854;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49850,inst_49846,inst_49852,inst_49854,inst_49849,inst_49869,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49870){
var map__50002 = p__49870;
var map__50002__$1 = ((((!((map__50002 == null)))?((((map__50002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50002):map__50002);
var namespace = cljs.core.get.call(null,map__50002__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__50002__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49850,inst_49846,inst_49852,inst_49854,inst_49849,inst_49869,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49872 = cljs.core.map.call(null,inst_49871,inst_49850);
var inst_49873 = cljs.core.pr_str.call(null,inst_49872);
var inst_49874 = figwheel.client.utils.log.call(null,inst_49873);
var inst_49875 = (function (){var all_files = inst_49846;
var res_SINGLEQUOTE_ = inst_49849;
var res = inst_49850;
var files_not_loaded = inst_49852;
var dependencies_that_loaded = inst_49854;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49850,inst_49846,inst_49852,inst_49854,inst_49849,inst_49869,inst_49871,inst_49872,inst_49873,inst_49874,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49850,inst_49846,inst_49852,inst_49854,inst_49849,inst_49869,inst_49871,inst_49872,inst_49873,inst_49874,state_val_49934,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49876 = setTimeout(inst_49875,(10));
var state_49933__$1 = (function (){var statearr_50004 = state_49933;
(statearr_50004[(33)] = inst_49874);

(statearr_50004[(34)] = inst_49869);

return statearr_50004;
})();
var statearr_50005_50068 = state_49933__$1;
(statearr_50005_50068[(2)] = inst_49876);

(statearr_50005_50068[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (16))){
var state_49933__$1 = state_49933;
var statearr_50006_50069 = state_49933__$1;
(statearr_50006_50069[(2)] = reload_dependents);

(statearr_50006_50069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (38))){
var inst_49886 = (state_49933[(16)]);
var inst_49904 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49886);
var state_49933__$1 = state_49933;
var statearr_50007_50070 = state_49933__$1;
(statearr_50007_50070[(2)] = inst_49904);

(statearr_50007_50070[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (30))){
var state_49933__$1 = state_49933;
var statearr_50008_50071 = state_49933__$1;
(statearr_50008_50071[(2)] = null);

(statearr_50008_50071[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (10))){
var inst_49806 = (state_49933[(22)]);
var inst_49808 = cljs.core.chunked_seq_QMARK_.call(null,inst_49806);
var state_49933__$1 = state_49933;
if(inst_49808){
var statearr_50009_50072 = state_49933__$1;
(statearr_50009_50072[(1)] = (13));

} else {
var statearr_50010_50073 = state_49933__$1;
(statearr_50010_50073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (18))){
var inst_49840 = (state_49933[(2)]);
var state_49933__$1 = state_49933;
if(cljs.core.truth_(inst_49840)){
var statearr_50011_50074 = state_49933__$1;
(statearr_50011_50074[(1)] = (19));

} else {
var statearr_50012_50075 = state_49933__$1;
(statearr_50012_50075[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (42))){
var state_49933__$1 = state_49933;
var statearr_50013_50076 = state_49933__$1;
(statearr_50013_50076[(2)] = null);

(statearr_50013_50076[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (37))){
var inst_49899 = (state_49933[(2)]);
var state_49933__$1 = state_49933;
var statearr_50014_50077 = state_49933__$1;
(statearr_50014_50077[(2)] = inst_49899);

(statearr_50014_50077[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (8))){
var inst_49806 = (state_49933[(22)]);
var inst_49793 = (state_49933[(8)]);
var inst_49806__$1 = cljs.core.seq.call(null,inst_49793);
var state_49933__$1 = (function (){var statearr_50015 = state_49933;
(statearr_50015[(22)] = inst_49806__$1);

return statearr_50015;
})();
if(inst_49806__$1){
var statearr_50016_50078 = state_49933__$1;
(statearr_50016_50078[(1)] = (10));

} else {
var statearr_50017_50079 = state_49933__$1;
(statearr_50017_50079[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__47072__auto__,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47073__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47073__auto____0 = (function (){
var statearr_50018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50018[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__47073__auto__);

(statearr_50018[(1)] = (1));

return statearr_50018;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47073__auto____1 = (function (state_49933){
while(true){
var ret_value__47074__auto__ = (function (){try{while(true){
var result__47075__auto__ = switch__47072__auto__.call(null,state_49933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47075__auto__;
}
break;
}
}catch (e50019){if((e50019 instanceof Object)){
var ex__47076__auto__ = e50019;
var statearr_50020_50080 = state_49933;
(statearr_50020_50080[(5)] = ex__47076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50081 = state_49933;
state_49933 = G__50081;
continue;
} else {
return ret_value__47074__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__47073__auto__ = function(state_49933){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47073__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47073__auto____1.call(this,state_49933);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47073__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__47073__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47073__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47073__auto__;
})()
;})(switch__47072__auto__,c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__47164__auto__ = (function (){var statearr_50021 = f__47163__auto__.call(null);
(statearr_50021[(6)] = c__47162__auto__);

return statearr_50021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47164__auto__);
});})(c__47162__auto__,map__49778,map__49778__$1,opts,before_jsload,on_jsload,reload_dependents,map__49779,map__49779__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__47162__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50084,link){
var map__50085 = p__50084;
var map__50085__$1 = ((((!((map__50085 == null)))?((((map__50085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50085):map__50085);
var file = cljs.core.get.call(null,map__50085__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5290__auto__ = link.href;
if(cljs.core.truth_(temp__5290__auto__)){
var link_href = temp__5290__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5290__auto__,map__50085,map__50085__$1,file){
return (function (p1__50082_SHARP_,p2__50083_SHARP_){
if(cljs.core._EQ_.call(null,p1__50082_SHARP_,p2__50083_SHARP_)){
return p1__50082_SHARP_;
} else {
return false;
}
});})(link_href,temp__5290__auto__,map__50085,map__50085__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5290__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50088){
var map__50089 = p__50088;
var map__50089__$1 = ((((!((map__50089 == null)))?((((map__50089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50089):map__50089);
var match_length = cljs.core.get.call(null,map__50089__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50089__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50087_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50087_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5290__auto__)){
var res = temp__5290__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50091_SHARP_,p2__50092_SHARP_){
return cljs.core.assoc.call(null,p1__50091_SHARP_,cljs.core.get.call(null,p2__50092_SHARP_,key),p2__50092_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5288__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5288__auto__)){
var link = temp__5288__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5288__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5288__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_50093 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_50093);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_50093);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50094,p__50095){
var map__50096 = p__50094;
var map__50096__$1 = ((((!((map__50096 == null)))?((((map__50096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50096):map__50096);
var on_cssload = cljs.core.get.call(null,map__50096__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50097 = p__50095;
var map__50097__$1 = ((((!((map__50097 == null)))?((((map__50097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50097):map__50097);
var files_msg = map__50097__$1;
var files = cljs.core.get.call(null,map__50097__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5290__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5290__auto__)){
var f_datas = temp__5290__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1509094253103
