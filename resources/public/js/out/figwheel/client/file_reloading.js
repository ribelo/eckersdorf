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
var or__30249__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30249__auto__){
return or__30249__auto__;
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
var or__30249__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
var or__30249__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30249__auto____$1)){
return or__30249__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47965_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47965_SHARP_));
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
var seq__47966 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47967 = null;
var count__47968 = (0);
var i__47969 = (0);
while(true){
if((i__47969 < count__47968)){
var n = cljs.core._nth.call(null,chunk__47967,i__47969);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47970 = seq__47966;
var G__47971 = chunk__47967;
var G__47972 = count__47968;
var G__47973 = (i__47969 + (1));
seq__47966 = G__47970;
chunk__47967 = G__47971;
count__47968 = G__47972;
i__47969 = G__47973;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__47966);
if(temp__5290__auto__){
var seq__47966__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47966__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__47966__$1);
var G__47974 = cljs.core.chunk_rest.call(null,seq__47966__$1);
var G__47975 = c__31180__auto__;
var G__47976 = cljs.core.count.call(null,c__31180__auto__);
var G__47977 = (0);
seq__47966 = G__47974;
chunk__47967 = G__47975;
count__47968 = G__47976;
i__47969 = G__47977;
continue;
} else {
var n = cljs.core.first.call(null,seq__47966__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47978 = cljs.core.next.call(null,seq__47966__$1);
var G__47979 = null;
var G__47980 = (0);
var G__47981 = (0);
seq__47966 = G__47978;
chunk__47967 = G__47979;
count__47968 = G__47980;
i__47969 = G__47981;
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

var seq__47991_47999 = cljs.core.seq.call(null,deps);
var chunk__47992_48000 = null;
var count__47993_48001 = (0);
var i__47994_48002 = (0);
while(true){
if((i__47994_48002 < count__47993_48001)){
var dep_48003 = cljs.core._nth.call(null,chunk__47992_48000,i__47994_48002);
topo_sort_helper_STAR_.call(null,dep_48003,(depth + (1)),state);

var G__48004 = seq__47991_47999;
var G__48005 = chunk__47992_48000;
var G__48006 = count__47993_48001;
var G__48007 = (i__47994_48002 + (1));
seq__47991_47999 = G__48004;
chunk__47992_48000 = G__48005;
count__47993_48001 = G__48006;
i__47994_48002 = G__48007;
continue;
} else {
var temp__5290__auto___48008 = cljs.core.seq.call(null,seq__47991_47999);
if(temp__5290__auto___48008){
var seq__47991_48009__$1 = temp__5290__auto___48008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47991_48009__$1)){
var c__31180__auto___48010 = cljs.core.chunk_first.call(null,seq__47991_48009__$1);
var G__48011 = cljs.core.chunk_rest.call(null,seq__47991_48009__$1);
var G__48012 = c__31180__auto___48010;
var G__48013 = cljs.core.count.call(null,c__31180__auto___48010);
var G__48014 = (0);
seq__47991_47999 = G__48011;
chunk__47992_48000 = G__48012;
count__47993_48001 = G__48013;
i__47994_48002 = G__48014;
continue;
} else {
var dep_48015 = cljs.core.first.call(null,seq__47991_48009__$1);
topo_sort_helper_STAR_.call(null,dep_48015,(depth + (1)),state);

var G__48016 = cljs.core.next.call(null,seq__47991_48009__$1);
var G__48017 = null;
var G__48018 = (0);
var G__48019 = (0);
seq__47991_47999 = G__48016;
chunk__47992_48000 = G__48017;
count__47993_48001 = G__48018;
i__47994_48002 = G__48019;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47995){
var vec__47996 = p__47995;
var seq__47997 = cljs.core.seq.call(null,vec__47996);
var first__47998 = cljs.core.first.call(null,seq__47997);
var seq__47997__$1 = cljs.core.next.call(null,seq__47997);
var x = first__47998;
var xs = seq__47997__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47996,seq__47997,first__47998,seq__47997__$1,x,xs,get_deps__$1){
return (function (p1__47982_SHARP_){
return clojure.set.difference.call(null,p1__47982_SHARP_,x);
});})(vec__47996,seq__47997,first__47998,seq__47997__$1,x,xs,get_deps__$1))
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
var seq__48020 = cljs.core.seq.call(null,provides);
var chunk__48021 = null;
var count__48022 = (0);
var i__48023 = (0);
while(true){
if((i__48023 < count__48022)){
var prov = cljs.core._nth.call(null,chunk__48021,i__48023);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48024_48032 = cljs.core.seq.call(null,requires);
var chunk__48025_48033 = null;
var count__48026_48034 = (0);
var i__48027_48035 = (0);
while(true){
if((i__48027_48035 < count__48026_48034)){
var req_48036 = cljs.core._nth.call(null,chunk__48025_48033,i__48027_48035);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48036,prov);

var G__48037 = seq__48024_48032;
var G__48038 = chunk__48025_48033;
var G__48039 = count__48026_48034;
var G__48040 = (i__48027_48035 + (1));
seq__48024_48032 = G__48037;
chunk__48025_48033 = G__48038;
count__48026_48034 = G__48039;
i__48027_48035 = G__48040;
continue;
} else {
var temp__5290__auto___48041 = cljs.core.seq.call(null,seq__48024_48032);
if(temp__5290__auto___48041){
var seq__48024_48042__$1 = temp__5290__auto___48041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48024_48042__$1)){
var c__31180__auto___48043 = cljs.core.chunk_first.call(null,seq__48024_48042__$1);
var G__48044 = cljs.core.chunk_rest.call(null,seq__48024_48042__$1);
var G__48045 = c__31180__auto___48043;
var G__48046 = cljs.core.count.call(null,c__31180__auto___48043);
var G__48047 = (0);
seq__48024_48032 = G__48044;
chunk__48025_48033 = G__48045;
count__48026_48034 = G__48046;
i__48027_48035 = G__48047;
continue;
} else {
var req_48048 = cljs.core.first.call(null,seq__48024_48042__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48048,prov);

var G__48049 = cljs.core.next.call(null,seq__48024_48042__$1);
var G__48050 = null;
var G__48051 = (0);
var G__48052 = (0);
seq__48024_48032 = G__48049;
chunk__48025_48033 = G__48050;
count__48026_48034 = G__48051;
i__48027_48035 = G__48052;
continue;
}
} else {
}
}
break;
}

var G__48053 = seq__48020;
var G__48054 = chunk__48021;
var G__48055 = count__48022;
var G__48056 = (i__48023 + (1));
seq__48020 = G__48053;
chunk__48021 = G__48054;
count__48022 = G__48055;
i__48023 = G__48056;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__48020);
if(temp__5290__auto__){
var seq__48020__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48020__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__48020__$1);
var G__48057 = cljs.core.chunk_rest.call(null,seq__48020__$1);
var G__48058 = c__31180__auto__;
var G__48059 = cljs.core.count.call(null,c__31180__auto__);
var G__48060 = (0);
seq__48020 = G__48057;
chunk__48021 = G__48058;
count__48022 = G__48059;
i__48023 = G__48060;
continue;
} else {
var prov = cljs.core.first.call(null,seq__48020__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48028_48061 = cljs.core.seq.call(null,requires);
var chunk__48029_48062 = null;
var count__48030_48063 = (0);
var i__48031_48064 = (0);
while(true){
if((i__48031_48064 < count__48030_48063)){
var req_48065 = cljs.core._nth.call(null,chunk__48029_48062,i__48031_48064);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48065,prov);

var G__48066 = seq__48028_48061;
var G__48067 = chunk__48029_48062;
var G__48068 = count__48030_48063;
var G__48069 = (i__48031_48064 + (1));
seq__48028_48061 = G__48066;
chunk__48029_48062 = G__48067;
count__48030_48063 = G__48068;
i__48031_48064 = G__48069;
continue;
} else {
var temp__5290__auto___48070__$1 = cljs.core.seq.call(null,seq__48028_48061);
if(temp__5290__auto___48070__$1){
var seq__48028_48071__$1 = temp__5290__auto___48070__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48028_48071__$1)){
var c__31180__auto___48072 = cljs.core.chunk_first.call(null,seq__48028_48071__$1);
var G__48073 = cljs.core.chunk_rest.call(null,seq__48028_48071__$1);
var G__48074 = c__31180__auto___48072;
var G__48075 = cljs.core.count.call(null,c__31180__auto___48072);
var G__48076 = (0);
seq__48028_48061 = G__48073;
chunk__48029_48062 = G__48074;
count__48030_48063 = G__48075;
i__48031_48064 = G__48076;
continue;
} else {
var req_48077 = cljs.core.first.call(null,seq__48028_48071__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48077,prov);

var G__48078 = cljs.core.next.call(null,seq__48028_48071__$1);
var G__48079 = null;
var G__48080 = (0);
var G__48081 = (0);
seq__48028_48061 = G__48078;
chunk__48029_48062 = G__48079;
count__48030_48063 = G__48080;
i__48031_48064 = G__48081;
continue;
}
} else {
}
}
break;
}

var G__48082 = cljs.core.next.call(null,seq__48020__$1);
var G__48083 = null;
var G__48084 = (0);
var G__48085 = (0);
seq__48020 = G__48082;
chunk__48021 = G__48083;
count__48022 = G__48084;
i__48023 = G__48085;
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
var seq__48086_48090 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__48087_48091 = null;
var count__48088_48092 = (0);
var i__48089_48093 = (0);
while(true){
if((i__48089_48093 < count__48088_48092)){
var ns_48094 = cljs.core._nth.call(null,chunk__48087_48091,i__48089_48093);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48094);

var G__48095 = seq__48086_48090;
var G__48096 = chunk__48087_48091;
var G__48097 = count__48088_48092;
var G__48098 = (i__48089_48093 + (1));
seq__48086_48090 = G__48095;
chunk__48087_48091 = G__48096;
count__48088_48092 = G__48097;
i__48089_48093 = G__48098;
continue;
} else {
var temp__5290__auto___48099 = cljs.core.seq.call(null,seq__48086_48090);
if(temp__5290__auto___48099){
var seq__48086_48100__$1 = temp__5290__auto___48099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48086_48100__$1)){
var c__31180__auto___48101 = cljs.core.chunk_first.call(null,seq__48086_48100__$1);
var G__48102 = cljs.core.chunk_rest.call(null,seq__48086_48100__$1);
var G__48103 = c__31180__auto___48101;
var G__48104 = cljs.core.count.call(null,c__31180__auto___48101);
var G__48105 = (0);
seq__48086_48090 = G__48102;
chunk__48087_48091 = G__48103;
count__48088_48092 = G__48104;
i__48089_48093 = G__48105;
continue;
} else {
var ns_48106 = cljs.core.first.call(null,seq__48086_48100__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48106);

var G__48107 = cljs.core.next.call(null,seq__48086_48100__$1);
var G__48108 = null;
var G__48109 = (0);
var G__48110 = (0);
seq__48086_48090 = G__48107;
chunk__48087_48091 = G__48108;
count__48088_48092 = G__48109;
i__48089_48093 = G__48110;
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
goog.require_figwheel_backup_ = (function (){var or__30249__auto__ = goog.require__;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
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
var G__48111__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__48111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48112__i = 0, G__48112__a = new Array(arguments.length -  0);
while (G__48112__i < G__48112__a.length) {G__48112__a[G__48112__i] = arguments[G__48112__i + 0]; ++G__48112__i;}
  args = new cljs.core.IndexedSeq(G__48112__a,0,null);
} 
return G__48111__delegate.call(this,args);};
G__48111.cljs$lang$maxFixedArity = 0;
G__48111.cljs$lang$applyTo = (function (arglist__48113){
var args = cljs.core.seq(arglist__48113);
return G__48111__delegate(args);
});
G__48111.cljs$core$IFn$_invoke$arity$variadic = G__48111__delegate;
return G__48111;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__48114_SHARP_,p2__48115_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48114_SHARP_)].join('')),p2__48115_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__48116_SHARP_,p2__48117_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48116_SHARP_)].join(''),p2__48117_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__48118 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__48118.addCallback(((function (G__48118){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__48118))
);

G__48118.addErrback(((function (G__48118){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__48118))
);

return G__48118;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__48119 = cljs.core._EQ_;
var expr__48120 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__48119.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__48120))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__48119,expr__48120){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__48119,expr__48120))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__48119,expr__48120){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e48122){if((e48122 instanceof Error)){
var e = e48122;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48122;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__48119,expr__48120))
} else {
if(cljs.core.truth_(pred__48119.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__48120))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__48119.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__48120))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__48119.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__48120))){
return ((function (pred__48119,expr__48120){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e48123){if((e48123 instanceof Error)){
var e = e48123;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48123;

}
}})());
});
;})(pred__48119,expr__48120))
} else {
return ((function (pred__48119,expr__48120){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__48119,expr__48120))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__48124,callback){
var map__48125 = p__48124;
var map__48125__$1 = ((((!((map__48125 == null)))?((((map__48125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48125):map__48125);
var file_msg = map__48125__$1;
var request_url = cljs.core.get.call(null,map__48125__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__48125,map__48125__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__48125,map__48125__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__45733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto__){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto__){
return (function (state_48149){
var state_val_48150 = (state_48149[(1)]);
if((state_val_48150 === (7))){
var inst_48145 = (state_48149[(2)]);
var state_48149__$1 = state_48149;
var statearr_48151_48168 = state_48149__$1;
(statearr_48151_48168[(2)] = inst_48145);

(statearr_48151_48168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48150 === (1))){
var state_48149__$1 = state_48149;
var statearr_48152_48169 = state_48149__$1;
(statearr_48152_48169[(2)] = null);

(statearr_48152_48169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48150 === (4))){
var inst_48129 = (state_48149[(7)]);
var inst_48129__$1 = (state_48149[(2)]);
var state_48149__$1 = (function (){var statearr_48153 = state_48149;
(statearr_48153[(7)] = inst_48129__$1);

return statearr_48153;
})();
if(cljs.core.truth_(inst_48129__$1)){
var statearr_48154_48170 = state_48149__$1;
(statearr_48154_48170[(1)] = (5));

} else {
var statearr_48155_48171 = state_48149__$1;
(statearr_48155_48171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48150 === (6))){
var state_48149__$1 = state_48149;
var statearr_48156_48172 = state_48149__$1;
(statearr_48156_48172[(2)] = null);

(statearr_48156_48172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48150 === (3))){
var inst_48147 = (state_48149[(2)]);
var state_48149__$1 = state_48149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48149__$1,inst_48147);
} else {
if((state_val_48150 === (2))){
var state_48149__$1 = state_48149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48149__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_48150 === (11))){
var inst_48141 = (state_48149[(2)]);
var state_48149__$1 = (function (){var statearr_48157 = state_48149;
(statearr_48157[(8)] = inst_48141);

return statearr_48157;
})();
var statearr_48158_48173 = state_48149__$1;
(statearr_48158_48173[(2)] = null);

(statearr_48158_48173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48150 === (9))){
var inst_48135 = (state_48149[(9)]);
var inst_48133 = (state_48149[(10)]);
var inst_48137 = inst_48135.call(null,inst_48133);
var state_48149__$1 = state_48149;
var statearr_48159_48174 = state_48149__$1;
(statearr_48159_48174[(2)] = inst_48137);

(statearr_48159_48174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48150 === (5))){
var inst_48129 = (state_48149[(7)]);
var inst_48131 = figwheel.client.file_reloading.blocking_load.call(null,inst_48129);
var state_48149__$1 = state_48149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48149__$1,(8),inst_48131);
} else {
if((state_val_48150 === (10))){
var inst_48133 = (state_48149[(10)]);
var inst_48139 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_48133);
var state_48149__$1 = state_48149;
var statearr_48160_48175 = state_48149__$1;
(statearr_48160_48175[(2)] = inst_48139);

(statearr_48160_48175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48150 === (8))){
var inst_48135 = (state_48149[(9)]);
var inst_48129 = (state_48149[(7)]);
var inst_48133 = (state_48149[(2)]);
var inst_48134 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_48135__$1 = cljs.core.get.call(null,inst_48134,inst_48129);
var state_48149__$1 = (function (){var statearr_48161 = state_48149;
(statearr_48161[(9)] = inst_48135__$1);

(statearr_48161[(10)] = inst_48133);

return statearr_48161;
})();
if(cljs.core.truth_(inst_48135__$1)){
var statearr_48162_48176 = state_48149__$1;
(statearr_48162_48176[(1)] = (9));

} else {
var statearr_48163_48177 = state_48149__$1;
(statearr_48163_48177[(1)] = (10));

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
});})(c__45733__auto__))
;
return ((function (switch__45643__auto__,c__45733__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__45644__auto__ = null;
var figwheel$client$file_reloading$state_machine__45644__auto____0 = (function (){
var statearr_48164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48164[(0)] = figwheel$client$file_reloading$state_machine__45644__auto__);

(statearr_48164[(1)] = (1));

return statearr_48164;
});
var figwheel$client$file_reloading$state_machine__45644__auto____1 = (function (state_48149){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_48149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e48165){if((e48165 instanceof Object)){
var ex__45647__auto__ = e48165;
var statearr_48166_48178 = state_48149;
(statearr_48166_48178[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48179 = state_48149;
state_48149 = G__48179;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__45644__auto__ = function(state_48149){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__45644__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__45644__auto____1.call(this,state_48149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__45644__auto____0;
figwheel$client$file_reloading$state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__45644__auto____1;
return figwheel$client$file_reloading$state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto__))
})();
var state__45735__auto__ = (function (){var statearr_48167 = f__45734__auto__.call(null);
(statearr_48167[(6)] = c__45733__auto__);

return statearr_48167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto__))
);

return c__45733__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__48180,callback){
var map__48181 = p__48180;
var map__48181__$1 = ((((!((map__48181 == null)))?((((map__48181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48181):map__48181);
var file_msg = map__48181__$1;
var namespace = cljs.core.get.call(null,map__48181__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__48181,map__48181__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__48181,map__48181__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__48183){
var map__48184 = p__48183;
var map__48184__$1 = ((((!((map__48184 == null)))?((((map__48184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48184):map__48184);
var file_msg = map__48184__$1;
var namespace = cljs.core.get.call(null,map__48184__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__48186){
var map__48187 = p__48186;
var map__48187__$1 = ((((!((map__48187 == null)))?((((map__48187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48187):map__48187);
var file_msg = map__48187__$1;
var namespace = cljs.core.get.call(null,map__48187__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30237__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30237__auto__){
var or__30249__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
var or__30249__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30249__auto____$1)){
return or__30249__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30237__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__48189,callback){
var map__48190 = p__48189;
var map__48190__$1 = ((((!((map__48190 == null)))?((((map__48190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48190):map__48190);
var file_msg = map__48190__$1;
var request_url = cljs.core.get.call(null,map__48190__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__48190__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__45733__auto___48240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto___48240,out){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto___48240,out){
return (function (state_48225){
var state_val_48226 = (state_48225[(1)]);
if((state_val_48226 === (1))){
var inst_48199 = cljs.core.seq.call(null,files);
var inst_48200 = cljs.core.first.call(null,inst_48199);
var inst_48201 = cljs.core.next.call(null,inst_48199);
var inst_48202 = files;
var state_48225__$1 = (function (){var statearr_48227 = state_48225;
(statearr_48227[(7)] = inst_48200);

(statearr_48227[(8)] = inst_48201);

(statearr_48227[(9)] = inst_48202);

return statearr_48227;
})();
var statearr_48228_48241 = state_48225__$1;
(statearr_48228_48241[(2)] = null);

(statearr_48228_48241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48226 === (2))){
var inst_48202 = (state_48225[(9)]);
var inst_48208 = (state_48225[(10)]);
var inst_48207 = cljs.core.seq.call(null,inst_48202);
var inst_48208__$1 = cljs.core.first.call(null,inst_48207);
var inst_48209 = cljs.core.next.call(null,inst_48207);
var inst_48210 = (inst_48208__$1 == null);
var inst_48211 = cljs.core.not.call(null,inst_48210);
var state_48225__$1 = (function (){var statearr_48229 = state_48225;
(statearr_48229[(11)] = inst_48209);

(statearr_48229[(10)] = inst_48208__$1);

return statearr_48229;
})();
if(inst_48211){
var statearr_48230_48242 = state_48225__$1;
(statearr_48230_48242[(1)] = (4));

} else {
var statearr_48231_48243 = state_48225__$1;
(statearr_48231_48243[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48226 === (3))){
var inst_48223 = (state_48225[(2)]);
var state_48225__$1 = state_48225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48225__$1,inst_48223);
} else {
if((state_val_48226 === (4))){
var inst_48208 = (state_48225[(10)]);
var inst_48213 = figwheel.client.file_reloading.reload_js_file.call(null,inst_48208);
var state_48225__$1 = state_48225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48225__$1,(7),inst_48213);
} else {
if((state_val_48226 === (5))){
var inst_48219 = cljs.core.async.close_BANG_.call(null,out);
var state_48225__$1 = state_48225;
var statearr_48232_48244 = state_48225__$1;
(statearr_48232_48244[(2)] = inst_48219);

(statearr_48232_48244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48226 === (6))){
var inst_48221 = (state_48225[(2)]);
var state_48225__$1 = state_48225;
var statearr_48233_48245 = state_48225__$1;
(statearr_48233_48245[(2)] = inst_48221);

(statearr_48233_48245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48226 === (7))){
var inst_48209 = (state_48225[(11)]);
var inst_48215 = (state_48225[(2)]);
var inst_48216 = cljs.core.async.put_BANG_.call(null,out,inst_48215);
var inst_48202 = inst_48209;
var state_48225__$1 = (function (){var statearr_48234 = state_48225;
(statearr_48234[(9)] = inst_48202);

(statearr_48234[(12)] = inst_48216);

return statearr_48234;
})();
var statearr_48235_48246 = state_48225__$1;
(statearr_48235_48246[(2)] = null);

(statearr_48235_48246[(1)] = (2));


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
});})(c__45733__auto___48240,out))
;
return ((function (switch__45643__auto__,c__45733__auto___48240,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45644__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45644__auto____0 = (function (){
var statearr_48236 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48236[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45644__auto__);

(statearr_48236[(1)] = (1));

return statearr_48236;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45644__auto____1 = (function (state_48225){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_48225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e48237){if((e48237 instanceof Object)){
var ex__45647__auto__ = e48237;
var statearr_48238_48247 = state_48225;
(statearr_48238_48247[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48248 = state_48225;
state_48225 = G__48248;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45644__auto__ = function(state_48225){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45644__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45644__auto____1.call(this,state_48225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45644__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45644__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto___48240,out))
})();
var state__45735__auto__ = (function (){var statearr_48239 = f__45734__auto__.call(null);
(statearr_48239[(6)] = c__45733__auto___48240);

return statearr_48239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto___48240,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__48249,opts){
var map__48250 = p__48249;
var map__48250__$1 = ((((!((map__48250 == null)))?((((map__48250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48250):map__48250);
var eval_body = cljs.core.get.call(null,map__48250__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__48250__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30237__auto__ = eval_body;
if(cljs.core.truth_(and__30237__auto__)){
return typeof eval_body === 'string';
} else {
return and__30237__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e48252){var e = e48252;
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
return (function (p1__48253_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48253_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__48254){
var vec__48255 = p__48254;
var k = cljs.core.nth.call(null,vec__48255,(0),null);
var v = cljs.core.nth.call(null,vec__48255,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__48258){
var vec__48259 = p__48258;
var k = cljs.core.nth.call(null,vec__48259,(0),null);
var v = cljs.core.nth.call(null,vec__48259,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__48265,p__48266){
var map__48267 = p__48265;
var map__48267__$1 = ((((!((map__48267 == null)))?((((map__48267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48267):map__48267);
var opts = map__48267__$1;
var before_jsload = cljs.core.get.call(null,map__48267__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__48267__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__48267__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__48268 = p__48266;
var map__48268__$1 = ((((!((map__48268 == null)))?((((map__48268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48268):map__48268);
var msg = map__48268__$1;
var files = cljs.core.get.call(null,map__48268__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__48268__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__48268__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__45733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__45734__auto__ = (function (){var switch__45643__auto__ = ((function (c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_48422){
var state_val_48423 = (state_48422[(1)]);
if((state_val_48423 === (7))){
var inst_48282 = (state_48422[(7)]);
var inst_48284 = (state_48422[(8)]);
var inst_48285 = (state_48422[(9)]);
var inst_48283 = (state_48422[(10)]);
var inst_48290 = cljs.core._nth.call(null,inst_48283,inst_48285);
var inst_48291 = figwheel.client.file_reloading.eval_body.call(null,inst_48290,opts);
var inst_48292 = (inst_48285 + (1));
var tmp48424 = inst_48282;
var tmp48425 = inst_48284;
var tmp48426 = inst_48283;
var inst_48282__$1 = tmp48424;
var inst_48283__$1 = tmp48426;
var inst_48284__$1 = tmp48425;
var inst_48285__$1 = inst_48292;
var state_48422__$1 = (function (){var statearr_48427 = state_48422;
(statearr_48427[(7)] = inst_48282__$1);

(statearr_48427[(8)] = inst_48284__$1);

(statearr_48427[(9)] = inst_48285__$1);

(statearr_48427[(10)] = inst_48283__$1);

(statearr_48427[(11)] = inst_48291);

return statearr_48427;
})();
var statearr_48428_48511 = state_48422__$1;
(statearr_48428_48511[(2)] = null);

(statearr_48428_48511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (20))){
var inst_48325 = (state_48422[(12)]);
var inst_48333 = figwheel.client.file_reloading.sort_files.call(null,inst_48325);
var state_48422__$1 = state_48422;
var statearr_48429_48512 = state_48422__$1;
(statearr_48429_48512[(2)] = inst_48333);

(statearr_48429_48512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (27))){
var state_48422__$1 = state_48422;
var statearr_48430_48513 = state_48422__$1;
(statearr_48430_48513[(2)] = null);

(statearr_48430_48513[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (1))){
var inst_48274 = (state_48422[(13)]);
var inst_48271 = before_jsload.call(null,files);
var inst_48272 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_48273 = (function (){return ((function (inst_48274,inst_48271,inst_48272,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48262_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48262_SHARP_);
});
;})(inst_48274,inst_48271,inst_48272,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48274__$1 = cljs.core.filter.call(null,inst_48273,files);
var inst_48275 = cljs.core.not_empty.call(null,inst_48274__$1);
var state_48422__$1 = (function (){var statearr_48431 = state_48422;
(statearr_48431[(13)] = inst_48274__$1);

(statearr_48431[(14)] = inst_48272);

(statearr_48431[(15)] = inst_48271);

return statearr_48431;
})();
if(cljs.core.truth_(inst_48275)){
var statearr_48432_48514 = state_48422__$1;
(statearr_48432_48514[(1)] = (2));

} else {
var statearr_48433_48515 = state_48422__$1;
(statearr_48433_48515[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (24))){
var state_48422__$1 = state_48422;
var statearr_48434_48516 = state_48422__$1;
(statearr_48434_48516[(2)] = null);

(statearr_48434_48516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (39))){
var inst_48375 = (state_48422[(16)]);
var state_48422__$1 = state_48422;
var statearr_48435_48517 = state_48422__$1;
(statearr_48435_48517[(2)] = inst_48375);

(statearr_48435_48517[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (46))){
var inst_48417 = (state_48422[(2)]);
var state_48422__$1 = state_48422;
var statearr_48436_48518 = state_48422__$1;
(statearr_48436_48518[(2)] = inst_48417);

(statearr_48436_48518[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (4))){
var inst_48319 = (state_48422[(2)]);
var inst_48320 = cljs.core.List.EMPTY;
var inst_48321 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_48320);
var inst_48322 = (function (){return ((function (inst_48319,inst_48320,inst_48321,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48263_SHARP_){
var and__30237__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48263_SHARP_);
if(cljs.core.truth_(and__30237__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48263_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__48263_SHARP_)));
} else {
return and__30237__auto__;
}
});
;})(inst_48319,inst_48320,inst_48321,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48323 = cljs.core.filter.call(null,inst_48322,files);
var inst_48324 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_48325 = cljs.core.concat.call(null,inst_48323,inst_48324);
var state_48422__$1 = (function (){var statearr_48437 = state_48422;
(statearr_48437[(12)] = inst_48325);

(statearr_48437[(17)] = inst_48321);

(statearr_48437[(18)] = inst_48319);

return statearr_48437;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48438_48519 = state_48422__$1;
(statearr_48438_48519[(1)] = (16));

} else {
var statearr_48439_48520 = state_48422__$1;
(statearr_48439_48520[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (15))){
var inst_48309 = (state_48422[(2)]);
var state_48422__$1 = state_48422;
var statearr_48440_48521 = state_48422__$1;
(statearr_48440_48521[(2)] = inst_48309);

(statearr_48440_48521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (21))){
var inst_48335 = (state_48422[(19)]);
var inst_48335__$1 = (state_48422[(2)]);
var inst_48336 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_48335__$1);
var state_48422__$1 = (function (){var statearr_48441 = state_48422;
(statearr_48441[(19)] = inst_48335__$1);

return statearr_48441;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48422__$1,(22),inst_48336);
} else {
if((state_val_48423 === (31))){
var inst_48420 = (state_48422[(2)]);
var state_48422__$1 = state_48422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48422__$1,inst_48420);
} else {
if((state_val_48423 === (32))){
var inst_48375 = (state_48422[(16)]);
var inst_48380 = inst_48375.cljs$lang$protocol_mask$partition0$;
var inst_48381 = (inst_48380 & (64));
var inst_48382 = inst_48375.cljs$core$ISeq$;
var inst_48383 = (cljs.core.PROTOCOL_SENTINEL === inst_48382);
var inst_48384 = (inst_48381) || (inst_48383);
var state_48422__$1 = state_48422;
if(cljs.core.truth_(inst_48384)){
var statearr_48442_48522 = state_48422__$1;
(statearr_48442_48522[(1)] = (35));

} else {
var statearr_48443_48523 = state_48422__$1;
(statearr_48443_48523[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (40))){
var inst_48397 = (state_48422[(20)]);
var inst_48396 = (state_48422[(2)]);
var inst_48397__$1 = cljs.core.get.call(null,inst_48396,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48398 = cljs.core.get.call(null,inst_48396,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48399 = cljs.core.not_empty.call(null,inst_48397__$1);
var state_48422__$1 = (function (){var statearr_48444 = state_48422;
(statearr_48444[(21)] = inst_48398);

(statearr_48444[(20)] = inst_48397__$1);

return statearr_48444;
})();
if(cljs.core.truth_(inst_48399)){
var statearr_48445_48524 = state_48422__$1;
(statearr_48445_48524[(1)] = (41));

} else {
var statearr_48446_48525 = state_48422__$1;
(statearr_48446_48525[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (33))){
var state_48422__$1 = state_48422;
var statearr_48447_48526 = state_48422__$1;
(statearr_48447_48526[(2)] = false);

(statearr_48447_48526[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (13))){
var inst_48295 = (state_48422[(22)]);
var inst_48299 = cljs.core.chunk_first.call(null,inst_48295);
var inst_48300 = cljs.core.chunk_rest.call(null,inst_48295);
var inst_48301 = cljs.core.count.call(null,inst_48299);
var inst_48282 = inst_48300;
var inst_48283 = inst_48299;
var inst_48284 = inst_48301;
var inst_48285 = (0);
var state_48422__$1 = (function (){var statearr_48448 = state_48422;
(statearr_48448[(7)] = inst_48282);

(statearr_48448[(8)] = inst_48284);

(statearr_48448[(9)] = inst_48285);

(statearr_48448[(10)] = inst_48283);

return statearr_48448;
})();
var statearr_48449_48527 = state_48422__$1;
(statearr_48449_48527[(2)] = null);

(statearr_48449_48527[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (22))){
var inst_48343 = (state_48422[(23)]);
var inst_48335 = (state_48422[(19)]);
var inst_48338 = (state_48422[(24)]);
var inst_48339 = (state_48422[(25)]);
var inst_48338__$1 = (state_48422[(2)]);
var inst_48339__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48338__$1);
var inst_48340 = (function (){var all_files = inst_48335;
var res_SINGLEQUOTE_ = inst_48338__$1;
var res = inst_48339__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_48343,inst_48335,inst_48338,inst_48339,inst_48338__$1,inst_48339__$1,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48264_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__48264_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_48343,inst_48335,inst_48338,inst_48339,inst_48338__$1,inst_48339__$1,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48341 = cljs.core.filter.call(null,inst_48340,inst_48338__$1);
var inst_48342 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48343__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48342);
var inst_48344 = cljs.core.not_empty.call(null,inst_48343__$1);
var state_48422__$1 = (function (){var statearr_48450 = state_48422;
(statearr_48450[(26)] = inst_48341);

(statearr_48450[(23)] = inst_48343__$1);

(statearr_48450[(24)] = inst_48338__$1);

(statearr_48450[(25)] = inst_48339__$1);

return statearr_48450;
})();
if(cljs.core.truth_(inst_48344)){
var statearr_48451_48528 = state_48422__$1;
(statearr_48451_48528[(1)] = (23));

} else {
var statearr_48452_48529 = state_48422__$1;
(statearr_48452_48529[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (36))){
var state_48422__$1 = state_48422;
var statearr_48453_48530 = state_48422__$1;
(statearr_48453_48530[(2)] = false);

(statearr_48453_48530[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (41))){
var inst_48397 = (state_48422[(20)]);
var inst_48401 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48402 = cljs.core.map.call(null,inst_48401,inst_48397);
var inst_48403 = cljs.core.pr_str.call(null,inst_48402);
var inst_48404 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48403)].join('');
var inst_48405 = figwheel.client.utils.log.call(null,inst_48404);
var state_48422__$1 = state_48422;
var statearr_48454_48531 = state_48422__$1;
(statearr_48454_48531[(2)] = inst_48405);

(statearr_48454_48531[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (43))){
var inst_48398 = (state_48422[(21)]);
var inst_48408 = (state_48422[(2)]);
var inst_48409 = cljs.core.not_empty.call(null,inst_48398);
var state_48422__$1 = (function (){var statearr_48455 = state_48422;
(statearr_48455[(27)] = inst_48408);

return statearr_48455;
})();
if(cljs.core.truth_(inst_48409)){
var statearr_48456_48532 = state_48422__$1;
(statearr_48456_48532[(1)] = (44));

} else {
var statearr_48457_48533 = state_48422__$1;
(statearr_48457_48533[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (29))){
var inst_48341 = (state_48422[(26)]);
var inst_48343 = (state_48422[(23)]);
var inst_48335 = (state_48422[(19)]);
var inst_48338 = (state_48422[(24)]);
var inst_48339 = (state_48422[(25)]);
var inst_48375 = (state_48422[(16)]);
var inst_48371 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48374 = (function (){var all_files = inst_48335;
var res_SINGLEQUOTE_ = inst_48338;
var res = inst_48339;
var files_not_loaded = inst_48341;
var dependencies_that_loaded = inst_48343;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48341,inst_48343,inst_48335,inst_48338,inst_48339,inst_48375,inst_48371,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48373){
var map__48458 = p__48373;
var map__48458__$1 = ((((!((map__48458 == null)))?((((map__48458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48458):map__48458);
var namespace = cljs.core.get.call(null,map__48458__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48341,inst_48343,inst_48335,inst_48338,inst_48339,inst_48375,inst_48371,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48375__$1 = cljs.core.group_by.call(null,inst_48374,inst_48341);
var inst_48377 = (inst_48375__$1 == null);
var inst_48378 = cljs.core.not.call(null,inst_48377);
var state_48422__$1 = (function (){var statearr_48460 = state_48422;
(statearr_48460[(28)] = inst_48371);

(statearr_48460[(16)] = inst_48375__$1);

return statearr_48460;
})();
if(inst_48378){
var statearr_48461_48534 = state_48422__$1;
(statearr_48461_48534[(1)] = (32));

} else {
var statearr_48462_48535 = state_48422__$1;
(statearr_48462_48535[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (44))){
var inst_48398 = (state_48422[(21)]);
var inst_48411 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48398);
var inst_48412 = cljs.core.pr_str.call(null,inst_48411);
var inst_48413 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48412)].join('');
var inst_48414 = figwheel.client.utils.log.call(null,inst_48413);
var state_48422__$1 = state_48422;
var statearr_48463_48536 = state_48422__$1;
(statearr_48463_48536[(2)] = inst_48414);

(statearr_48463_48536[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (6))){
var inst_48316 = (state_48422[(2)]);
var state_48422__$1 = state_48422;
var statearr_48464_48537 = state_48422__$1;
(statearr_48464_48537[(2)] = inst_48316);

(statearr_48464_48537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (28))){
var inst_48341 = (state_48422[(26)]);
var inst_48368 = (state_48422[(2)]);
var inst_48369 = cljs.core.not_empty.call(null,inst_48341);
var state_48422__$1 = (function (){var statearr_48465 = state_48422;
(statearr_48465[(29)] = inst_48368);

return statearr_48465;
})();
if(cljs.core.truth_(inst_48369)){
var statearr_48466_48538 = state_48422__$1;
(statearr_48466_48538[(1)] = (29));

} else {
var statearr_48467_48539 = state_48422__$1;
(statearr_48467_48539[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (25))){
var inst_48339 = (state_48422[(25)]);
var inst_48355 = (state_48422[(2)]);
var inst_48356 = cljs.core.not_empty.call(null,inst_48339);
var state_48422__$1 = (function (){var statearr_48468 = state_48422;
(statearr_48468[(30)] = inst_48355);

return statearr_48468;
})();
if(cljs.core.truth_(inst_48356)){
var statearr_48469_48540 = state_48422__$1;
(statearr_48469_48540[(1)] = (26));

} else {
var statearr_48470_48541 = state_48422__$1;
(statearr_48470_48541[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (34))){
var inst_48391 = (state_48422[(2)]);
var state_48422__$1 = state_48422;
if(cljs.core.truth_(inst_48391)){
var statearr_48471_48542 = state_48422__$1;
(statearr_48471_48542[(1)] = (38));

} else {
var statearr_48472_48543 = state_48422__$1;
(statearr_48472_48543[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (17))){
var state_48422__$1 = state_48422;
var statearr_48473_48544 = state_48422__$1;
(statearr_48473_48544[(2)] = recompile_dependents);

(statearr_48473_48544[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (3))){
var state_48422__$1 = state_48422;
var statearr_48474_48545 = state_48422__$1;
(statearr_48474_48545[(2)] = null);

(statearr_48474_48545[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (12))){
var inst_48312 = (state_48422[(2)]);
var state_48422__$1 = state_48422;
var statearr_48475_48546 = state_48422__$1;
(statearr_48475_48546[(2)] = inst_48312);

(statearr_48475_48546[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (2))){
var inst_48274 = (state_48422[(13)]);
var inst_48281 = cljs.core.seq.call(null,inst_48274);
var inst_48282 = inst_48281;
var inst_48283 = null;
var inst_48284 = (0);
var inst_48285 = (0);
var state_48422__$1 = (function (){var statearr_48476 = state_48422;
(statearr_48476[(7)] = inst_48282);

(statearr_48476[(8)] = inst_48284);

(statearr_48476[(9)] = inst_48285);

(statearr_48476[(10)] = inst_48283);

return statearr_48476;
})();
var statearr_48477_48547 = state_48422__$1;
(statearr_48477_48547[(2)] = null);

(statearr_48477_48547[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (23))){
var inst_48341 = (state_48422[(26)]);
var inst_48343 = (state_48422[(23)]);
var inst_48335 = (state_48422[(19)]);
var inst_48338 = (state_48422[(24)]);
var inst_48339 = (state_48422[(25)]);
var inst_48346 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48348 = (function (){var all_files = inst_48335;
var res_SINGLEQUOTE_ = inst_48338;
var res = inst_48339;
var files_not_loaded = inst_48341;
var dependencies_that_loaded = inst_48343;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48341,inst_48343,inst_48335,inst_48338,inst_48339,inst_48346,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48347){
var map__48478 = p__48347;
var map__48478__$1 = ((((!((map__48478 == null)))?((((map__48478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48478):map__48478);
var request_url = cljs.core.get.call(null,map__48478__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48341,inst_48343,inst_48335,inst_48338,inst_48339,inst_48346,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48349 = cljs.core.reverse.call(null,inst_48343);
var inst_48350 = cljs.core.map.call(null,inst_48348,inst_48349);
var inst_48351 = cljs.core.pr_str.call(null,inst_48350);
var inst_48352 = figwheel.client.utils.log.call(null,inst_48351);
var state_48422__$1 = (function (){var statearr_48480 = state_48422;
(statearr_48480[(31)] = inst_48346);

return statearr_48480;
})();
var statearr_48481_48548 = state_48422__$1;
(statearr_48481_48548[(2)] = inst_48352);

(statearr_48481_48548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (35))){
var state_48422__$1 = state_48422;
var statearr_48482_48549 = state_48422__$1;
(statearr_48482_48549[(2)] = true);

(statearr_48482_48549[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (19))){
var inst_48325 = (state_48422[(12)]);
var inst_48331 = figwheel.client.file_reloading.expand_files.call(null,inst_48325);
var state_48422__$1 = state_48422;
var statearr_48483_48550 = state_48422__$1;
(statearr_48483_48550[(2)] = inst_48331);

(statearr_48483_48550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (11))){
var state_48422__$1 = state_48422;
var statearr_48484_48551 = state_48422__$1;
(statearr_48484_48551[(2)] = null);

(statearr_48484_48551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (9))){
var inst_48314 = (state_48422[(2)]);
var state_48422__$1 = state_48422;
var statearr_48485_48552 = state_48422__$1;
(statearr_48485_48552[(2)] = inst_48314);

(statearr_48485_48552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (5))){
var inst_48284 = (state_48422[(8)]);
var inst_48285 = (state_48422[(9)]);
var inst_48287 = (inst_48285 < inst_48284);
var inst_48288 = inst_48287;
var state_48422__$1 = state_48422;
if(cljs.core.truth_(inst_48288)){
var statearr_48486_48553 = state_48422__$1;
(statearr_48486_48553[(1)] = (7));

} else {
var statearr_48487_48554 = state_48422__$1;
(statearr_48487_48554[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (14))){
var inst_48295 = (state_48422[(22)]);
var inst_48304 = cljs.core.first.call(null,inst_48295);
var inst_48305 = figwheel.client.file_reloading.eval_body.call(null,inst_48304,opts);
var inst_48306 = cljs.core.next.call(null,inst_48295);
var inst_48282 = inst_48306;
var inst_48283 = null;
var inst_48284 = (0);
var inst_48285 = (0);
var state_48422__$1 = (function (){var statearr_48488 = state_48422;
(statearr_48488[(7)] = inst_48282);

(statearr_48488[(8)] = inst_48284);

(statearr_48488[(32)] = inst_48305);

(statearr_48488[(9)] = inst_48285);

(statearr_48488[(10)] = inst_48283);

return statearr_48488;
})();
var statearr_48489_48555 = state_48422__$1;
(statearr_48489_48555[(2)] = null);

(statearr_48489_48555[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (45))){
var state_48422__$1 = state_48422;
var statearr_48490_48556 = state_48422__$1;
(statearr_48490_48556[(2)] = null);

(statearr_48490_48556[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (26))){
var inst_48341 = (state_48422[(26)]);
var inst_48343 = (state_48422[(23)]);
var inst_48335 = (state_48422[(19)]);
var inst_48338 = (state_48422[(24)]);
var inst_48339 = (state_48422[(25)]);
var inst_48358 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48360 = (function (){var all_files = inst_48335;
var res_SINGLEQUOTE_ = inst_48338;
var res = inst_48339;
var files_not_loaded = inst_48341;
var dependencies_that_loaded = inst_48343;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48341,inst_48343,inst_48335,inst_48338,inst_48339,inst_48358,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48359){
var map__48491 = p__48359;
var map__48491__$1 = ((((!((map__48491 == null)))?((((map__48491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48491):map__48491);
var namespace = cljs.core.get.call(null,map__48491__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48491__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48341,inst_48343,inst_48335,inst_48338,inst_48339,inst_48358,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48361 = cljs.core.map.call(null,inst_48360,inst_48339);
var inst_48362 = cljs.core.pr_str.call(null,inst_48361);
var inst_48363 = figwheel.client.utils.log.call(null,inst_48362);
var inst_48364 = (function (){var all_files = inst_48335;
var res_SINGLEQUOTE_ = inst_48338;
var res = inst_48339;
var files_not_loaded = inst_48341;
var dependencies_that_loaded = inst_48343;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48341,inst_48343,inst_48335,inst_48338,inst_48339,inst_48358,inst_48360,inst_48361,inst_48362,inst_48363,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48341,inst_48343,inst_48335,inst_48338,inst_48339,inst_48358,inst_48360,inst_48361,inst_48362,inst_48363,state_val_48423,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48365 = setTimeout(inst_48364,(10));
var state_48422__$1 = (function (){var statearr_48493 = state_48422;
(statearr_48493[(33)] = inst_48363);

(statearr_48493[(34)] = inst_48358);

return statearr_48493;
})();
var statearr_48494_48557 = state_48422__$1;
(statearr_48494_48557[(2)] = inst_48365);

(statearr_48494_48557[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (16))){
var state_48422__$1 = state_48422;
var statearr_48495_48558 = state_48422__$1;
(statearr_48495_48558[(2)] = reload_dependents);

(statearr_48495_48558[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (38))){
var inst_48375 = (state_48422[(16)]);
var inst_48393 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48375);
var state_48422__$1 = state_48422;
var statearr_48496_48559 = state_48422__$1;
(statearr_48496_48559[(2)] = inst_48393);

(statearr_48496_48559[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (30))){
var state_48422__$1 = state_48422;
var statearr_48497_48560 = state_48422__$1;
(statearr_48497_48560[(2)] = null);

(statearr_48497_48560[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (10))){
var inst_48295 = (state_48422[(22)]);
var inst_48297 = cljs.core.chunked_seq_QMARK_.call(null,inst_48295);
var state_48422__$1 = state_48422;
if(inst_48297){
var statearr_48498_48561 = state_48422__$1;
(statearr_48498_48561[(1)] = (13));

} else {
var statearr_48499_48562 = state_48422__$1;
(statearr_48499_48562[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (18))){
var inst_48329 = (state_48422[(2)]);
var state_48422__$1 = state_48422;
if(cljs.core.truth_(inst_48329)){
var statearr_48500_48563 = state_48422__$1;
(statearr_48500_48563[(1)] = (19));

} else {
var statearr_48501_48564 = state_48422__$1;
(statearr_48501_48564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (42))){
var state_48422__$1 = state_48422;
var statearr_48502_48565 = state_48422__$1;
(statearr_48502_48565[(2)] = null);

(statearr_48502_48565[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (37))){
var inst_48388 = (state_48422[(2)]);
var state_48422__$1 = state_48422;
var statearr_48503_48566 = state_48422__$1;
(statearr_48503_48566[(2)] = inst_48388);

(statearr_48503_48566[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48423 === (8))){
var inst_48282 = (state_48422[(7)]);
var inst_48295 = (state_48422[(22)]);
var inst_48295__$1 = cljs.core.seq.call(null,inst_48282);
var state_48422__$1 = (function (){var statearr_48504 = state_48422;
(statearr_48504[(22)] = inst_48295__$1);

return statearr_48504;
})();
if(inst_48295__$1){
var statearr_48505_48567 = state_48422__$1;
(statearr_48505_48567[(1)] = (10));

} else {
var statearr_48506_48568 = state_48422__$1;
(statearr_48506_48568[(1)] = (11));

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
});})(c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__45643__auto__,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45644__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45644__auto____0 = (function (){
var statearr_48507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48507[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__45644__auto__);

(statearr_48507[(1)] = (1));

return statearr_48507;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45644__auto____1 = (function (state_48422){
while(true){
var ret_value__45645__auto__ = (function (){try{while(true){
var result__45646__auto__ = switch__45643__auto__.call(null,state_48422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45646__auto__;
}
break;
}
}catch (e48508){if((e48508 instanceof Object)){
var ex__45647__auto__ = e48508;
var statearr_48509_48569 = state_48422;
(statearr_48509_48569[(5)] = ex__45647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48570 = state_48422;
state_48422 = G__48570;
continue;
} else {
return ret_value__45645__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__45644__auto__ = function(state_48422){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45644__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45644__auto____1.call(this,state_48422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45644__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__45644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45644__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45644__auto__;
})()
;})(switch__45643__auto__,c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__45735__auto__ = (function (){var statearr_48510 = f__45734__auto__.call(null);
(statearr_48510[(6)] = c__45733__auto__);

return statearr_48510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45735__auto__);
});})(c__45733__auto__,map__48267,map__48267__$1,opts,before_jsload,on_jsload,reload_dependents,map__48268,map__48268__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__45733__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48573,link){
var map__48574 = p__48573;
var map__48574__$1 = ((((!((map__48574 == null)))?((((map__48574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48574):map__48574);
var file = cljs.core.get.call(null,map__48574__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5290__auto__ = link.href;
if(cljs.core.truth_(temp__5290__auto__)){
var link_href = temp__5290__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5290__auto__,map__48574,map__48574__$1,file){
return (function (p1__48571_SHARP_,p2__48572_SHARP_){
if(cljs.core._EQ_.call(null,p1__48571_SHARP_,p2__48572_SHARP_)){
return p1__48571_SHARP_;
} else {
return false;
}
});})(link_href,temp__5290__auto__,map__48574,map__48574__$1,file))
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
var temp__5290__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48577){
var map__48578 = p__48577;
var map__48578__$1 = ((((!((map__48578 == null)))?((((map__48578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48578):map__48578);
var match_length = cljs.core.get.call(null,map__48578__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48578__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48576_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48576_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48580_SHARP_,p2__48581_SHARP_){
return cljs.core.assoc.call(null,p1__48580_SHARP_,cljs.core.get.call(null,p2__48581_SHARP_,key),p2__48581_SHARP_);
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
var loaded_f_datas_48582 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_48582);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_48582);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48583,p__48584){
var map__48585 = p__48583;
var map__48585__$1 = ((((!((map__48585 == null)))?((((map__48585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48585):map__48585);
var on_cssload = cljs.core.get.call(null,map__48585__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__48586 = p__48584;
var map__48586__$1 = ((((!((map__48586 == null)))?((((map__48586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48586):map__48586);
var files_msg = map__48586__$1;
var files = cljs.core.get.call(null,map__48586__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1509397949643
