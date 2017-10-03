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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49013_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49013_SHARP_));
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
var seq__49014 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49015 = null;
var count__49016 = (0);
var i__49017 = (0);
while(true){
if((i__49017 < count__49016)){
var n = cljs.core._nth.call(null,chunk__49015,i__49017);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49018 = seq__49014;
var G__49019 = chunk__49015;
var G__49020 = count__49016;
var G__49021 = (i__49017 + (1));
seq__49014 = G__49018;
chunk__49015 = G__49019;
count__49016 = G__49020;
i__49017 = G__49021;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__49014);
if(temp__5290__auto__){
var seq__49014__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49014__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__49014__$1);
var G__49022 = cljs.core.chunk_rest.call(null,seq__49014__$1);
var G__49023 = c__31180__auto__;
var G__49024 = cljs.core.count.call(null,c__31180__auto__);
var G__49025 = (0);
seq__49014 = G__49022;
chunk__49015 = G__49023;
count__49016 = G__49024;
i__49017 = G__49025;
continue;
} else {
var n = cljs.core.first.call(null,seq__49014__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49026 = cljs.core.next.call(null,seq__49014__$1);
var G__49027 = null;
var G__49028 = (0);
var G__49029 = (0);
seq__49014 = G__49026;
chunk__49015 = G__49027;
count__49016 = G__49028;
i__49017 = G__49029;
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

var seq__49039_49047 = cljs.core.seq.call(null,deps);
var chunk__49040_49048 = null;
var count__49041_49049 = (0);
var i__49042_49050 = (0);
while(true){
if((i__49042_49050 < count__49041_49049)){
var dep_49051 = cljs.core._nth.call(null,chunk__49040_49048,i__49042_49050);
topo_sort_helper_STAR_.call(null,dep_49051,(depth + (1)),state);

var G__49052 = seq__49039_49047;
var G__49053 = chunk__49040_49048;
var G__49054 = count__49041_49049;
var G__49055 = (i__49042_49050 + (1));
seq__49039_49047 = G__49052;
chunk__49040_49048 = G__49053;
count__49041_49049 = G__49054;
i__49042_49050 = G__49055;
continue;
} else {
var temp__5290__auto___49056 = cljs.core.seq.call(null,seq__49039_49047);
if(temp__5290__auto___49056){
var seq__49039_49057__$1 = temp__5290__auto___49056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49039_49057__$1)){
var c__31180__auto___49058 = cljs.core.chunk_first.call(null,seq__49039_49057__$1);
var G__49059 = cljs.core.chunk_rest.call(null,seq__49039_49057__$1);
var G__49060 = c__31180__auto___49058;
var G__49061 = cljs.core.count.call(null,c__31180__auto___49058);
var G__49062 = (0);
seq__49039_49047 = G__49059;
chunk__49040_49048 = G__49060;
count__49041_49049 = G__49061;
i__49042_49050 = G__49062;
continue;
} else {
var dep_49063 = cljs.core.first.call(null,seq__49039_49057__$1);
topo_sort_helper_STAR_.call(null,dep_49063,(depth + (1)),state);

var G__49064 = cljs.core.next.call(null,seq__49039_49057__$1);
var G__49065 = null;
var G__49066 = (0);
var G__49067 = (0);
seq__49039_49047 = G__49064;
chunk__49040_49048 = G__49065;
count__49041_49049 = G__49066;
i__49042_49050 = G__49067;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49043){
var vec__49044 = p__49043;
var seq__49045 = cljs.core.seq.call(null,vec__49044);
var first__49046 = cljs.core.first.call(null,seq__49045);
var seq__49045__$1 = cljs.core.next.call(null,seq__49045);
var x = first__49046;
var xs = seq__49045__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49044,seq__49045,first__49046,seq__49045__$1,x,xs,get_deps__$1){
return (function (p1__49030_SHARP_){
return clojure.set.difference.call(null,p1__49030_SHARP_,x);
});})(vec__49044,seq__49045,first__49046,seq__49045__$1,x,xs,get_deps__$1))
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
var seq__49068 = cljs.core.seq.call(null,provides);
var chunk__49069 = null;
var count__49070 = (0);
var i__49071 = (0);
while(true){
if((i__49071 < count__49070)){
var prov = cljs.core._nth.call(null,chunk__49069,i__49071);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49072_49080 = cljs.core.seq.call(null,requires);
var chunk__49073_49081 = null;
var count__49074_49082 = (0);
var i__49075_49083 = (0);
while(true){
if((i__49075_49083 < count__49074_49082)){
var req_49084 = cljs.core._nth.call(null,chunk__49073_49081,i__49075_49083);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49084,prov);

var G__49085 = seq__49072_49080;
var G__49086 = chunk__49073_49081;
var G__49087 = count__49074_49082;
var G__49088 = (i__49075_49083 + (1));
seq__49072_49080 = G__49085;
chunk__49073_49081 = G__49086;
count__49074_49082 = G__49087;
i__49075_49083 = G__49088;
continue;
} else {
var temp__5290__auto___49089 = cljs.core.seq.call(null,seq__49072_49080);
if(temp__5290__auto___49089){
var seq__49072_49090__$1 = temp__5290__auto___49089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49072_49090__$1)){
var c__31180__auto___49091 = cljs.core.chunk_first.call(null,seq__49072_49090__$1);
var G__49092 = cljs.core.chunk_rest.call(null,seq__49072_49090__$1);
var G__49093 = c__31180__auto___49091;
var G__49094 = cljs.core.count.call(null,c__31180__auto___49091);
var G__49095 = (0);
seq__49072_49080 = G__49092;
chunk__49073_49081 = G__49093;
count__49074_49082 = G__49094;
i__49075_49083 = G__49095;
continue;
} else {
var req_49096 = cljs.core.first.call(null,seq__49072_49090__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49096,prov);

var G__49097 = cljs.core.next.call(null,seq__49072_49090__$1);
var G__49098 = null;
var G__49099 = (0);
var G__49100 = (0);
seq__49072_49080 = G__49097;
chunk__49073_49081 = G__49098;
count__49074_49082 = G__49099;
i__49075_49083 = G__49100;
continue;
}
} else {
}
}
break;
}

var G__49101 = seq__49068;
var G__49102 = chunk__49069;
var G__49103 = count__49070;
var G__49104 = (i__49071 + (1));
seq__49068 = G__49101;
chunk__49069 = G__49102;
count__49070 = G__49103;
i__49071 = G__49104;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__49068);
if(temp__5290__auto__){
var seq__49068__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49068__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__49068__$1);
var G__49105 = cljs.core.chunk_rest.call(null,seq__49068__$1);
var G__49106 = c__31180__auto__;
var G__49107 = cljs.core.count.call(null,c__31180__auto__);
var G__49108 = (0);
seq__49068 = G__49105;
chunk__49069 = G__49106;
count__49070 = G__49107;
i__49071 = G__49108;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49068__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49076_49109 = cljs.core.seq.call(null,requires);
var chunk__49077_49110 = null;
var count__49078_49111 = (0);
var i__49079_49112 = (0);
while(true){
if((i__49079_49112 < count__49078_49111)){
var req_49113 = cljs.core._nth.call(null,chunk__49077_49110,i__49079_49112);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49113,prov);

var G__49114 = seq__49076_49109;
var G__49115 = chunk__49077_49110;
var G__49116 = count__49078_49111;
var G__49117 = (i__49079_49112 + (1));
seq__49076_49109 = G__49114;
chunk__49077_49110 = G__49115;
count__49078_49111 = G__49116;
i__49079_49112 = G__49117;
continue;
} else {
var temp__5290__auto___49118__$1 = cljs.core.seq.call(null,seq__49076_49109);
if(temp__5290__auto___49118__$1){
var seq__49076_49119__$1 = temp__5290__auto___49118__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49076_49119__$1)){
var c__31180__auto___49120 = cljs.core.chunk_first.call(null,seq__49076_49119__$1);
var G__49121 = cljs.core.chunk_rest.call(null,seq__49076_49119__$1);
var G__49122 = c__31180__auto___49120;
var G__49123 = cljs.core.count.call(null,c__31180__auto___49120);
var G__49124 = (0);
seq__49076_49109 = G__49121;
chunk__49077_49110 = G__49122;
count__49078_49111 = G__49123;
i__49079_49112 = G__49124;
continue;
} else {
var req_49125 = cljs.core.first.call(null,seq__49076_49119__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49125,prov);

var G__49126 = cljs.core.next.call(null,seq__49076_49119__$1);
var G__49127 = null;
var G__49128 = (0);
var G__49129 = (0);
seq__49076_49109 = G__49126;
chunk__49077_49110 = G__49127;
count__49078_49111 = G__49128;
i__49079_49112 = G__49129;
continue;
}
} else {
}
}
break;
}

var G__49130 = cljs.core.next.call(null,seq__49068__$1);
var G__49131 = null;
var G__49132 = (0);
var G__49133 = (0);
seq__49068 = G__49130;
chunk__49069 = G__49131;
count__49070 = G__49132;
i__49071 = G__49133;
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
var seq__49134_49138 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49135_49139 = null;
var count__49136_49140 = (0);
var i__49137_49141 = (0);
while(true){
if((i__49137_49141 < count__49136_49140)){
var ns_49142 = cljs.core._nth.call(null,chunk__49135_49139,i__49137_49141);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49142);

var G__49143 = seq__49134_49138;
var G__49144 = chunk__49135_49139;
var G__49145 = count__49136_49140;
var G__49146 = (i__49137_49141 + (1));
seq__49134_49138 = G__49143;
chunk__49135_49139 = G__49144;
count__49136_49140 = G__49145;
i__49137_49141 = G__49146;
continue;
} else {
var temp__5290__auto___49147 = cljs.core.seq.call(null,seq__49134_49138);
if(temp__5290__auto___49147){
var seq__49134_49148__$1 = temp__5290__auto___49147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49134_49148__$1)){
var c__31180__auto___49149 = cljs.core.chunk_first.call(null,seq__49134_49148__$1);
var G__49150 = cljs.core.chunk_rest.call(null,seq__49134_49148__$1);
var G__49151 = c__31180__auto___49149;
var G__49152 = cljs.core.count.call(null,c__31180__auto___49149);
var G__49153 = (0);
seq__49134_49138 = G__49150;
chunk__49135_49139 = G__49151;
count__49136_49140 = G__49152;
i__49137_49141 = G__49153;
continue;
} else {
var ns_49154 = cljs.core.first.call(null,seq__49134_49148__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49154);

var G__49155 = cljs.core.next.call(null,seq__49134_49148__$1);
var G__49156 = null;
var G__49157 = (0);
var G__49158 = (0);
seq__49134_49138 = G__49155;
chunk__49135_49139 = G__49156;
count__49136_49140 = G__49157;
i__49137_49141 = G__49158;
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
var G__49159__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49160__i = 0, G__49160__a = new Array(arguments.length -  0);
while (G__49160__i < G__49160__a.length) {G__49160__a[G__49160__i] = arguments[G__49160__i + 0]; ++G__49160__i;}
  args = new cljs.core.IndexedSeq(G__49160__a,0,null);
} 
return G__49159__delegate.call(this,args);};
G__49159.cljs$lang$maxFixedArity = 0;
G__49159.cljs$lang$applyTo = (function (arglist__49161){
var args = cljs.core.seq(arglist__49161);
return G__49159__delegate(args);
});
G__49159.cljs$core$IFn$_invoke$arity$variadic = G__49159__delegate;
return G__49159;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__49162_SHARP_,p2__49163_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49162_SHARP_)].join('')),p2__49163_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__49164_SHARP_,p2__49165_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49164_SHARP_)].join(''),p2__49165_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__49166 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__49166.addCallback(((function (G__49166){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__49166))
);

G__49166.addErrback(((function (G__49166){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__49166))
);

return G__49166;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49167 = cljs.core._EQ_;
var expr__49168 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49167.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49168))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__49167,expr__49168){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__49167,expr__49168))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__49167,expr__49168){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49170){if((e49170 instanceof Error)){
var e = e49170;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49170;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__49167,expr__49168))
} else {
if(cljs.core.truth_(pred__49167.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49168))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49167.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__49168))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49167.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49168))){
return ((function (pred__49167,expr__49168){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49171){if((e49171 instanceof Error)){
var e = e49171;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49171;

}
}})());
});
;})(pred__49167,expr__49168))
} else {
return ((function (pred__49167,expr__49168){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49167,expr__49168))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49172,callback){
var map__49173 = p__49172;
var map__49173__$1 = ((((!((map__49173 == null)))?((((map__49173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49173):map__49173);
var file_msg = map__49173__$1;
var request_url = cljs.core.get.call(null,map__49173__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49173,map__49173__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49173,map__49173__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__46833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto__){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto__){
return (function (state_49197){
var state_val_49198 = (state_49197[(1)]);
if((state_val_49198 === (7))){
var inst_49193 = (state_49197[(2)]);
var state_49197__$1 = state_49197;
var statearr_49199_49216 = state_49197__$1;
(statearr_49199_49216[(2)] = inst_49193);

(statearr_49199_49216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49198 === (1))){
var state_49197__$1 = state_49197;
var statearr_49200_49217 = state_49197__$1;
(statearr_49200_49217[(2)] = null);

(statearr_49200_49217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49198 === (4))){
var inst_49177 = (state_49197[(7)]);
var inst_49177__$1 = (state_49197[(2)]);
var state_49197__$1 = (function (){var statearr_49201 = state_49197;
(statearr_49201[(7)] = inst_49177__$1);

return statearr_49201;
})();
if(cljs.core.truth_(inst_49177__$1)){
var statearr_49202_49218 = state_49197__$1;
(statearr_49202_49218[(1)] = (5));

} else {
var statearr_49203_49219 = state_49197__$1;
(statearr_49203_49219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49198 === (6))){
var state_49197__$1 = state_49197;
var statearr_49204_49220 = state_49197__$1;
(statearr_49204_49220[(2)] = null);

(statearr_49204_49220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49198 === (3))){
var inst_49195 = (state_49197[(2)]);
var state_49197__$1 = state_49197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49197__$1,inst_49195);
} else {
if((state_val_49198 === (2))){
var state_49197__$1 = state_49197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49197__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49198 === (11))){
var inst_49189 = (state_49197[(2)]);
var state_49197__$1 = (function (){var statearr_49205 = state_49197;
(statearr_49205[(8)] = inst_49189);

return statearr_49205;
})();
var statearr_49206_49221 = state_49197__$1;
(statearr_49206_49221[(2)] = null);

(statearr_49206_49221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49198 === (9))){
var inst_49183 = (state_49197[(9)]);
var inst_49181 = (state_49197[(10)]);
var inst_49185 = inst_49183.call(null,inst_49181);
var state_49197__$1 = state_49197;
var statearr_49207_49222 = state_49197__$1;
(statearr_49207_49222[(2)] = inst_49185);

(statearr_49207_49222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49198 === (5))){
var inst_49177 = (state_49197[(7)]);
var inst_49179 = figwheel.client.file_reloading.blocking_load.call(null,inst_49177);
var state_49197__$1 = state_49197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49197__$1,(8),inst_49179);
} else {
if((state_val_49198 === (10))){
var inst_49181 = (state_49197[(10)]);
var inst_49187 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49181);
var state_49197__$1 = state_49197;
var statearr_49208_49223 = state_49197__$1;
(statearr_49208_49223[(2)] = inst_49187);

(statearr_49208_49223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49198 === (8))){
var inst_49183 = (state_49197[(9)]);
var inst_49177 = (state_49197[(7)]);
var inst_49181 = (state_49197[(2)]);
var inst_49182 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49183__$1 = cljs.core.get.call(null,inst_49182,inst_49177);
var state_49197__$1 = (function (){var statearr_49209 = state_49197;
(statearr_49209[(9)] = inst_49183__$1);

(statearr_49209[(10)] = inst_49181);

return statearr_49209;
})();
if(cljs.core.truth_(inst_49183__$1)){
var statearr_49210_49224 = state_49197__$1;
(statearr_49210_49224[(1)] = (9));

} else {
var statearr_49211_49225 = state_49197__$1;
(statearr_49211_49225[(1)] = (10));

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
});})(c__46833__auto__))
;
return ((function (switch__46743__auto__,c__46833__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__46744__auto__ = null;
var figwheel$client$file_reloading$state_machine__46744__auto____0 = (function (){
var statearr_49212 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49212[(0)] = figwheel$client$file_reloading$state_machine__46744__auto__);

(statearr_49212[(1)] = (1));

return statearr_49212;
});
var figwheel$client$file_reloading$state_machine__46744__auto____1 = (function (state_49197){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_49197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e49213){if((e49213 instanceof Object)){
var ex__46747__auto__ = e49213;
var statearr_49214_49226 = state_49197;
(statearr_49214_49226[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49227 = state_49197;
state_49197 = G__49227;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__46744__auto__ = function(state_49197){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__46744__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__46744__auto____1.call(this,state_49197);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__46744__auto____0;
figwheel$client$file_reloading$state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__46744__auto____1;
return figwheel$client$file_reloading$state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto__))
})();
var state__46835__auto__ = (function (){var statearr_49215 = f__46834__auto__.call(null);
(statearr_49215[(6)] = c__46833__auto__);

return statearr_49215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto__))
);

return c__46833__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49228,callback){
var map__49229 = p__49228;
var map__49229__$1 = ((((!((map__49229 == null)))?((((map__49229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49229):map__49229);
var file_msg = map__49229__$1;
var namespace = cljs.core.get.call(null,map__49229__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49229,map__49229__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49229,map__49229__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49231){
var map__49232 = p__49231;
var map__49232__$1 = ((((!((map__49232 == null)))?((((map__49232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49232):map__49232);
var file_msg = map__49232__$1;
var namespace = cljs.core.get.call(null,map__49232__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49234){
var map__49235 = p__49234;
var map__49235__$1 = ((((!((map__49235 == null)))?((((map__49235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49235):map__49235);
var file_msg = map__49235__$1;
var namespace = cljs.core.get.call(null,map__49235__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49237,callback){
var map__49238 = p__49237;
var map__49238__$1 = ((((!((map__49238 == null)))?((((map__49238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49238):map__49238);
var file_msg = map__49238__$1;
var request_url = cljs.core.get.call(null,map__49238__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49238__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__46833__auto___49288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto___49288,out){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto___49288,out){
return (function (state_49273){
var state_val_49274 = (state_49273[(1)]);
if((state_val_49274 === (1))){
var inst_49247 = cljs.core.seq.call(null,files);
var inst_49248 = cljs.core.first.call(null,inst_49247);
var inst_49249 = cljs.core.next.call(null,inst_49247);
var inst_49250 = files;
var state_49273__$1 = (function (){var statearr_49275 = state_49273;
(statearr_49275[(7)] = inst_49250);

(statearr_49275[(8)] = inst_49248);

(statearr_49275[(9)] = inst_49249);

return statearr_49275;
})();
var statearr_49276_49289 = state_49273__$1;
(statearr_49276_49289[(2)] = null);

(statearr_49276_49289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (2))){
var inst_49250 = (state_49273[(7)]);
var inst_49256 = (state_49273[(10)]);
var inst_49255 = cljs.core.seq.call(null,inst_49250);
var inst_49256__$1 = cljs.core.first.call(null,inst_49255);
var inst_49257 = cljs.core.next.call(null,inst_49255);
var inst_49258 = (inst_49256__$1 == null);
var inst_49259 = cljs.core.not.call(null,inst_49258);
var state_49273__$1 = (function (){var statearr_49277 = state_49273;
(statearr_49277[(11)] = inst_49257);

(statearr_49277[(10)] = inst_49256__$1);

return statearr_49277;
})();
if(inst_49259){
var statearr_49278_49290 = state_49273__$1;
(statearr_49278_49290[(1)] = (4));

} else {
var statearr_49279_49291 = state_49273__$1;
(statearr_49279_49291[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (3))){
var inst_49271 = (state_49273[(2)]);
var state_49273__$1 = state_49273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49273__$1,inst_49271);
} else {
if((state_val_49274 === (4))){
var inst_49256 = (state_49273[(10)]);
var inst_49261 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49256);
var state_49273__$1 = state_49273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49273__$1,(7),inst_49261);
} else {
if((state_val_49274 === (5))){
var inst_49267 = cljs.core.async.close_BANG_.call(null,out);
var state_49273__$1 = state_49273;
var statearr_49280_49292 = state_49273__$1;
(statearr_49280_49292[(2)] = inst_49267);

(statearr_49280_49292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (6))){
var inst_49269 = (state_49273[(2)]);
var state_49273__$1 = state_49273;
var statearr_49281_49293 = state_49273__$1;
(statearr_49281_49293[(2)] = inst_49269);

(statearr_49281_49293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (7))){
var inst_49257 = (state_49273[(11)]);
var inst_49263 = (state_49273[(2)]);
var inst_49264 = cljs.core.async.put_BANG_.call(null,out,inst_49263);
var inst_49250 = inst_49257;
var state_49273__$1 = (function (){var statearr_49282 = state_49273;
(statearr_49282[(7)] = inst_49250);

(statearr_49282[(12)] = inst_49264);

return statearr_49282;
})();
var statearr_49283_49294 = state_49273__$1;
(statearr_49283_49294[(2)] = null);

(statearr_49283_49294[(1)] = (2));


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
});})(c__46833__auto___49288,out))
;
return ((function (switch__46743__auto__,c__46833__auto___49288,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46744__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46744__auto____0 = (function (){
var statearr_49284 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49284[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46744__auto__);

(statearr_49284[(1)] = (1));

return statearr_49284;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46744__auto____1 = (function (state_49273){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_49273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e49285){if((e49285 instanceof Object)){
var ex__46747__auto__ = e49285;
var statearr_49286_49295 = state_49273;
(statearr_49286_49295[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49296 = state_49273;
state_49273 = G__49296;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46744__auto__ = function(state_49273){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46744__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46744__auto____1.call(this,state_49273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46744__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46744__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto___49288,out))
})();
var state__46835__auto__ = (function (){var statearr_49287 = f__46834__auto__.call(null);
(statearr_49287[(6)] = c__46833__auto___49288);

return statearr_49287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto___49288,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49297,opts){
var map__49298 = p__49297;
var map__49298__$1 = ((((!((map__49298 == null)))?((((map__49298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49298):map__49298);
var eval_body = cljs.core.get.call(null,map__49298__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49298__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e49300){var e = e49300;
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
return (function (p1__49301_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49301_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__49302){
var vec__49303 = p__49302;
var k = cljs.core.nth.call(null,vec__49303,(0),null);
var v = cljs.core.nth.call(null,vec__49303,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49306){
var vec__49307 = p__49306;
var k = cljs.core.nth.call(null,vec__49307,(0),null);
var v = cljs.core.nth.call(null,vec__49307,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49313,p__49314){
var map__49315 = p__49313;
var map__49315__$1 = ((((!((map__49315 == null)))?((((map__49315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49315):map__49315);
var opts = map__49315__$1;
var before_jsload = cljs.core.get.call(null,map__49315__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49315__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49315__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49316 = p__49314;
var map__49316__$1 = ((((!((map__49316 == null)))?((((map__49316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49316):map__49316);
var msg = map__49316__$1;
var files = cljs.core.get.call(null,map__49316__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49316__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49316__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__46833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__46834__auto__ = (function (){var switch__46743__auto__ = ((function (c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49470){
var state_val_49471 = (state_49470[(1)]);
if((state_val_49471 === (7))){
var inst_49333 = (state_49470[(7)]);
var inst_49331 = (state_49470[(8)]);
var inst_49330 = (state_49470[(9)]);
var inst_49332 = (state_49470[(10)]);
var inst_49338 = cljs.core._nth.call(null,inst_49331,inst_49333);
var inst_49339 = figwheel.client.file_reloading.eval_body.call(null,inst_49338,opts);
var inst_49340 = (inst_49333 + (1));
var tmp49472 = inst_49331;
var tmp49473 = inst_49330;
var tmp49474 = inst_49332;
var inst_49330__$1 = tmp49473;
var inst_49331__$1 = tmp49472;
var inst_49332__$1 = tmp49474;
var inst_49333__$1 = inst_49340;
var state_49470__$1 = (function (){var statearr_49475 = state_49470;
(statearr_49475[(7)] = inst_49333__$1);

(statearr_49475[(8)] = inst_49331__$1);

(statearr_49475[(9)] = inst_49330__$1);

(statearr_49475[(11)] = inst_49339);

(statearr_49475[(10)] = inst_49332__$1);

return statearr_49475;
})();
var statearr_49476_49559 = state_49470__$1;
(statearr_49476_49559[(2)] = null);

(statearr_49476_49559[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (20))){
var inst_49373 = (state_49470[(12)]);
var inst_49381 = figwheel.client.file_reloading.sort_files.call(null,inst_49373);
var state_49470__$1 = state_49470;
var statearr_49477_49560 = state_49470__$1;
(statearr_49477_49560[(2)] = inst_49381);

(statearr_49477_49560[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (27))){
var state_49470__$1 = state_49470;
var statearr_49478_49561 = state_49470__$1;
(statearr_49478_49561[(2)] = null);

(statearr_49478_49561[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (1))){
var inst_49322 = (state_49470[(13)]);
var inst_49319 = before_jsload.call(null,files);
var inst_49320 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49321 = (function (){return ((function (inst_49322,inst_49319,inst_49320,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49310_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49310_SHARP_);
});
;})(inst_49322,inst_49319,inst_49320,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49322__$1 = cljs.core.filter.call(null,inst_49321,files);
var inst_49323 = cljs.core.not_empty.call(null,inst_49322__$1);
var state_49470__$1 = (function (){var statearr_49479 = state_49470;
(statearr_49479[(14)] = inst_49319);

(statearr_49479[(15)] = inst_49320);

(statearr_49479[(13)] = inst_49322__$1);

return statearr_49479;
})();
if(cljs.core.truth_(inst_49323)){
var statearr_49480_49562 = state_49470__$1;
(statearr_49480_49562[(1)] = (2));

} else {
var statearr_49481_49563 = state_49470__$1;
(statearr_49481_49563[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (24))){
var state_49470__$1 = state_49470;
var statearr_49482_49564 = state_49470__$1;
(statearr_49482_49564[(2)] = null);

(statearr_49482_49564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (39))){
var inst_49423 = (state_49470[(16)]);
var state_49470__$1 = state_49470;
var statearr_49483_49565 = state_49470__$1;
(statearr_49483_49565[(2)] = inst_49423);

(statearr_49483_49565[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (46))){
var inst_49465 = (state_49470[(2)]);
var state_49470__$1 = state_49470;
var statearr_49484_49566 = state_49470__$1;
(statearr_49484_49566[(2)] = inst_49465);

(statearr_49484_49566[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (4))){
var inst_49367 = (state_49470[(2)]);
var inst_49368 = cljs.core.List.EMPTY;
var inst_49369 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49368);
var inst_49370 = (function (){return ((function (inst_49367,inst_49368,inst_49369,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49311_SHARP_){
var and__30237__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49311_SHARP_);
if(cljs.core.truth_(and__30237__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49311_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49311_SHARP_)));
} else {
return and__30237__auto__;
}
});
;})(inst_49367,inst_49368,inst_49369,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49371 = cljs.core.filter.call(null,inst_49370,files);
var inst_49372 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49373 = cljs.core.concat.call(null,inst_49371,inst_49372);
var state_49470__$1 = (function (){var statearr_49485 = state_49470;
(statearr_49485[(17)] = inst_49369);

(statearr_49485[(12)] = inst_49373);

(statearr_49485[(18)] = inst_49367);

return statearr_49485;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49486_49567 = state_49470__$1;
(statearr_49486_49567[(1)] = (16));

} else {
var statearr_49487_49568 = state_49470__$1;
(statearr_49487_49568[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (15))){
var inst_49357 = (state_49470[(2)]);
var state_49470__$1 = state_49470;
var statearr_49488_49569 = state_49470__$1;
(statearr_49488_49569[(2)] = inst_49357);

(statearr_49488_49569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (21))){
var inst_49383 = (state_49470[(19)]);
var inst_49383__$1 = (state_49470[(2)]);
var inst_49384 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49383__$1);
var state_49470__$1 = (function (){var statearr_49489 = state_49470;
(statearr_49489[(19)] = inst_49383__$1);

return statearr_49489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49470__$1,(22),inst_49384);
} else {
if((state_val_49471 === (31))){
var inst_49468 = (state_49470[(2)]);
var state_49470__$1 = state_49470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49470__$1,inst_49468);
} else {
if((state_val_49471 === (32))){
var inst_49423 = (state_49470[(16)]);
var inst_49428 = inst_49423.cljs$lang$protocol_mask$partition0$;
var inst_49429 = (inst_49428 & (64));
var inst_49430 = inst_49423.cljs$core$ISeq$;
var inst_49431 = (cljs.core.PROTOCOL_SENTINEL === inst_49430);
var inst_49432 = (inst_49429) || (inst_49431);
var state_49470__$1 = state_49470;
if(cljs.core.truth_(inst_49432)){
var statearr_49490_49570 = state_49470__$1;
(statearr_49490_49570[(1)] = (35));

} else {
var statearr_49491_49571 = state_49470__$1;
(statearr_49491_49571[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (40))){
var inst_49445 = (state_49470[(20)]);
var inst_49444 = (state_49470[(2)]);
var inst_49445__$1 = cljs.core.get.call(null,inst_49444,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49446 = cljs.core.get.call(null,inst_49444,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49447 = cljs.core.not_empty.call(null,inst_49445__$1);
var state_49470__$1 = (function (){var statearr_49492 = state_49470;
(statearr_49492[(20)] = inst_49445__$1);

(statearr_49492[(21)] = inst_49446);

return statearr_49492;
})();
if(cljs.core.truth_(inst_49447)){
var statearr_49493_49572 = state_49470__$1;
(statearr_49493_49572[(1)] = (41));

} else {
var statearr_49494_49573 = state_49470__$1;
(statearr_49494_49573[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (33))){
var state_49470__$1 = state_49470;
var statearr_49495_49574 = state_49470__$1;
(statearr_49495_49574[(2)] = false);

(statearr_49495_49574[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (13))){
var inst_49343 = (state_49470[(22)]);
var inst_49347 = cljs.core.chunk_first.call(null,inst_49343);
var inst_49348 = cljs.core.chunk_rest.call(null,inst_49343);
var inst_49349 = cljs.core.count.call(null,inst_49347);
var inst_49330 = inst_49348;
var inst_49331 = inst_49347;
var inst_49332 = inst_49349;
var inst_49333 = (0);
var state_49470__$1 = (function (){var statearr_49496 = state_49470;
(statearr_49496[(7)] = inst_49333);

(statearr_49496[(8)] = inst_49331);

(statearr_49496[(9)] = inst_49330);

(statearr_49496[(10)] = inst_49332);

return statearr_49496;
})();
var statearr_49497_49575 = state_49470__$1;
(statearr_49497_49575[(2)] = null);

(statearr_49497_49575[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (22))){
var inst_49387 = (state_49470[(23)]);
var inst_49386 = (state_49470[(24)]);
var inst_49383 = (state_49470[(19)]);
var inst_49391 = (state_49470[(25)]);
var inst_49386__$1 = (state_49470[(2)]);
var inst_49387__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49386__$1);
var inst_49388 = (function (){var all_files = inst_49383;
var res_SINGLEQUOTE_ = inst_49386__$1;
var res = inst_49387__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49387,inst_49386,inst_49383,inst_49391,inst_49386__$1,inst_49387__$1,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49312_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49312_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49387,inst_49386,inst_49383,inst_49391,inst_49386__$1,inst_49387__$1,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49389 = cljs.core.filter.call(null,inst_49388,inst_49386__$1);
var inst_49390 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49391__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49390);
var inst_49392 = cljs.core.not_empty.call(null,inst_49391__$1);
var state_49470__$1 = (function (){var statearr_49498 = state_49470;
(statearr_49498[(23)] = inst_49387__$1);

(statearr_49498[(24)] = inst_49386__$1);

(statearr_49498[(25)] = inst_49391__$1);

(statearr_49498[(26)] = inst_49389);

return statearr_49498;
})();
if(cljs.core.truth_(inst_49392)){
var statearr_49499_49576 = state_49470__$1;
(statearr_49499_49576[(1)] = (23));

} else {
var statearr_49500_49577 = state_49470__$1;
(statearr_49500_49577[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (36))){
var state_49470__$1 = state_49470;
var statearr_49501_49578 = state_49470__$1;
(statearr_49501_49578[(2)] = false);

(statearr_49501_49578[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (41))){
var inst_49445 = (state_49470[(20)]);
var inst_49449 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49450 = cljs.core.map.call(null,inst_49449,inst_49445);
var inst_49451 = cljs.core.pr_str.call(null,inst_49450);
var inst_49452 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49451)].join('');
var inst_49453 = figwheel.client.utils.log.call(null,inst_49452);
var state_49470__$1 = state_49470;
var statearr_49502_49579 = state_49470__$1;
(statearr_49502_49579[(2)] = inst_49453);

(statearr_49502_49579[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (43))){
var inst_49446 = (state_49470[(21)]);
var inst_49456 = (state_49470[(2)]);
var inst_49457 = cljs.core.not_empty.call(null,inst_49446);
var state_49470__$1 = (function (){var statearr_49503 = state_49470;
(statearr_49503[(27)] = inst_49456);

return statearr_49503;
})();
if(cljs.core.truth_(inst_49457)){
var statearr_49504_49580 = state_49470__$1;
(statearr_49504_49580[(1)] = (44));

} else {
var statearr_49505_49581 = state_49470__$1;
(statearr_49505_49581[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (29))){
var inst_49387 = (state_49470[(23)]);
var inst_49386 = (state_49470[(24)]);
var inst_49383 = (state_49470[(19)]);
var inst_49391 = (state_49470[(25)]);
var inst_49389 = (state_49470[(26)]);
var inst_49423 = (state_49470[(16)]);
var inst_49419 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49422 = (function (){var all_files = inst_49383;
var res_SINGLEQUOTE_ = inst_49386;
var res = inst_49387;
var files_not_loaded = inst_49389;
var dependencies_that_loaded = inst_49391;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49387,inst_49386,inst_49383,inst_49391,inst_49389,inst_49423,inst_49419,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49421){
var map__49506 = p__49421;
var map__49506__$1 = ((((!((map__49506 == null)))?((((map__49506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49506):map__49506);
var namespace = cljs.core.get.call(null,map__49506__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49387,inst_49386,inst_49383,inst_49391,inst_49389,inst_49423,inst_49419,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49423__$1 = cljs.core.group_by.call(null,inst_49422,inst_49389);
var inst_49425 = (inst_49423__$1 == null);
var inst_49426 = cljs.core.not.call(null,inst_49425);
var state_49470__$1 = (function (){var statearr_49508 = state_49470;
(statearr_49508[(28)] = inst_49419);

(statearr_49508[(16)] = inst_49423__$1);

return statearr_49508;
})();
if(inst_49426){
var statearr_49509_49582 = state_49470__$1;
(statearr_49509_49582[(1)] = (32));

} else {
var statearr_49510_49583 = state_49470__$1;
(statearr_49510_49583[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (44))){
var inst_49446 = (state_49470[(21)]);
var inst_49459 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49446);
var inst_49460 = cljs.core.pr_str.call(null,inst_49459);
var inst_49461 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49460)].join('');
var inst_49462 = figwheel.client.utils.log.call(null,inst_49461);
var state_49470__$1 = state_49470;
var statearr_49511_49584 = state_49470__$1;
(statearr_49511_49584[(2)] = inst_49462);

(statearr_49511_49584[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (6))){
var inst_49364 = (state_49470[(2)]);
var state_49470__$1 = state_49470;
var statearr_49512_49585 = state_49470__$1;
(statearr_49512_49585[(2)] = inst_49364);

(statearr_49512_49585[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (28))){
var inst_49389 = (state_49470[(26)]);
var inst_49416 = (state_49470[(2)]);
var inst_49417 = cljs.core.not_empty.call(null,inst_49389);
var state_49470__$1 = (function (){var statearr_49513 = state_49470;
(statearr_49513[(29)] = inst_49416);

return statearr_49513;
})();
if(cljs.core.truth_(inst_49417)){
var statearr_49514_49586 = state_49470__$1;
(statearr_49514_49586[(1)] = (29));

} else {
var statearr_49515_49587 = state_49470__$1;
(statearr_49515_49587[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (25))){
var inst_49387 = (state_49470[(23)]);
var inst_49403 = (state_49470[(2)]);
var inst_49404 = cljs.core.not_empty.call(null,inst_49387);
var state_49470__$1 = (function (){var statearr_49516 = state_49470;
(statearr_49516[(30)] = inst_49403);

return statearr_49516;
})();
if(cljs.core.truth_(inst_49404)){
var statearr_49517_49588 = state_49470__$1;
(statearr_49517_49588[(1)] = (26));

} else {
var statearr_49518_49589 = state_49470__$1;
(statearr_49518_49589[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (34))){
var inst_49439 = (state_49470[(2)]);
var state_49470__$1 = state_49470;
if(cljs.core.truth_(inst_49439)){
var statearr_49519_49590 = state_49470__$1;
(statearr_49519_49590[(1)] = (38));

} else {
var statearr_49520_49591 = state_49470__$1;
(statearr_49520_49591[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (17))){
var state_49470__$1 = state_49470;
var statearr_49521_49592 = state_49470__$1;
(statearr_49521_49592[(2)] = recompile_dependents);

(statearr_49521_49592[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (3))){
var state_49470__$1 = state_49470;
var statearr_49522_49593 = state_49470__$1;
(statearr_49522_49593[(2)] = null);

(statearr_49522_49593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (12))){
var inst_49360 = (state_49470[(2)]);
var state_49470__$1 = state_49470;
var statearr_49523_49594 = state_49470__$1;
(statearr_49523_49594[(2)] = inst_49360);

(statearr_49523_49594[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (2))){
var inst_49322 = (state_49470[(13)]);
var inst_49329 = cljs.core.seq.call(null,inst_49322);
var inst_49330 = inst_49329;
var inst_49331 = null;
var inst_49332 = (0);
var inst_49333 = (0);
var state_49470__$1 = (function (){var statearr_49524 = state_49470;
(statearr_49524[(7)] = inst_49333);

(statearr_49524[(8)] = inst_49331);

(statearr_49524[(9)] = inst_49330);

(statearr_49524[(10)] = inst_49332);

return statearr_49524;
})();
var statearr_49525_49595 = state_49470__$1;
(statearr_49525_49595[(2)] = null);

(statearr_49525_49595[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (23))){
var inst_49387 = (state_49470[(23)]);
var inst_49386 = (state_49470[(24)]);
var inst_49383 = (state_49470[(19)]);
var inst_49391 = (state_49470[(25)]);
var inst_49389 = (state_49470[(26)]);
var inst_49394 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49396 = (function (){var all_files = inst_49383;
var res_SINGLEQUOTE_ = inst_49386;
var res = inst_49387;
var files_not_loaded = inst_49389;
var dependencies_that_loaded = inst_49391;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49387,inst_49386,inst_49383,inst_49391,inst_49389,inst_49394,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49395){
var map__49526 = p__49395;
var map__49526__$1 = ((((!((map__49526 == null)))?((((map__49526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49526):map__49526);
var request_url = cljs.core.get.call(null,map__49526__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49387,inst_49386,inst_49383,inst_49391,inst_49389,inst_49394,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49397 = cljs.core.reverse.call(null,inst_49391);
var inst_49398 = cljs.core.map.call(null,inst_49396,inst_49397);
var inst_49399 = cljs.core.pr_str.call(null,inst_49398);
var inst_49400 = figwheel.client.utils.log.call(null,inst_49399);
var state_49470__$1 = (function (){var statearr_49528 = state_49470;
(statearr_49528[(31)] = inst_49394);

return statearr_49528;
})();
var statearr_49529_49596 = state_49470__$1;
(statearr_49529_49596[(2)] = inst_49400);

(statearr_49529_49596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (35))){
var state_49470__$1 = state_49470;
var statearr_49530_49597 = state_49470__$1;
(statearr_49530_49597[(2)] = true);

(statearr_49530_49597[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (19))){
var inst_49373 = (state_49470[(12)]);
var inst_49379 = figwheel.client.file_reloading.expand_files.call(null,inst_49373);
var state_49470__$1 = state_49470;
var statearr_49531_49598 = state_49470__$1;
(statearr_49531_49598[(2)] = inst_49379);

(statearr_49531_49598[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (11))){
var state_49470__$1 = state_49470;
var statearr_49532_49599 = state_49470__$1;
(statearr_49532_49599[(2)] = null);

(statearr_49532_49599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (9))){
var inst_49362 = (state_49470[(2)]);
var state_49470__$1 = state_49470;
var statearr_49533_49600 = state_49470__$1;
(statearr_49533_49600[(2)] = inst_49362);

(statearr_49533_49600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (5))){
var inst_49333 = (state_49470[(7)]);
var inst_49332 = (state_49470[(10)]);
var inst_49335 = (inst_49333 < inst_49332);
var inst_49336 = inst_49335;
var state_49470__$1 = state_49470;
if(cljs.core.truth_(inst_49336)){
var statearr_49534_49601 = state_49470__$1;
(statearr_49534_49601[(1)] = (7));

} else {
var statearr_49535_49602 = state_49470__$1;
(statearr_49535_49602[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (14))){
var inst_49343 = (state_49470[(22)]);
var inst_49352 = cljs.core.first.call(null,inst_49343);
var inst_49353 = figwheel.client.file_reloading.eval_body.call(null,inst_49352,opts);
var inst_49354 = cljs.core.next.call(null,inst_49343);
var inst_49330 = inst_49354;
var inst_49331 = null;
var inst_49332 = (0);
var inst_49333 = (0);
var state_49470__$1 = (function (){var statearr_49536 = state_49470;
(statearr_49536[(7)] = inst_49333);

(statearr_49536[(8)] = inst_49331);

(statearr_49536[(32)] = inst_49353);

(statearr_49536[(9)] = inst_49330);

(statearr_49536[(10)] = inst_49332);

return statearr_49536;
})();
var statearr_49537_49603 = state_49470__$1;
(statearr_49537_49603[(2)] = null);

(statearr_49537_49603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (45))){
var state_49470__$1 = state_49470;
var statearr_49538_49604 = state_49470__$1;
(statearr_49538_49604[(2)] = null);

(statearr_49538_49604[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (26))){
var inst_49387 = (state_49470[(23)]);
var inst_49386 = (state_49470[(24)]);
var inst_49383 = (state_49470[(19)]);
var inst_49391 = (state_49470[(25)]);
var inst_49389 = (state_49470[(26)]);
var inst_49406 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49408 = (function (){var all_files = inst_49383;
var res_SINGLEQUOTE_ = inst_49386;
var res = inst_49387;
var files_not_loaded = inst_49389;
var dependencies_that_loaded = inst_49391;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49387,inst_49386,inst_49383,inst_49391,inst_49389,inst_49406,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49407){
var map__49539 = p__49407;
var map__49539__$1 = ((((!((map__49539 == null)))?((((map__49539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49539):map__49539);
var namespace = cljs.core.get.call(null,map__49539__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49539__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49387,inst_49386,inst_49383,inst_49391,inst_49389,inst_49406,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49409 = cljs.core.map.call(null,inst_49408,inst_49387);
var inst_49410 = cljs.core.pr_str.call(null,inst_49409);
var inst_49411 = figwheel.client.utils.log.call(null,inst_49410);
var inst_49412 = (function (){var all_files = inst_49383;
var res_SINGLEQUOTE_ = inst_49386;
var res = inst_49387;
var files_not_loaded = inst_49389;
var dependencies_that_loaded = inst_49391;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49387,inst_49386,inst_49383,inst_49391,inst_49389,inst_49406,inst_49408,inst_49409,inst_49410,inst_49411,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49387,inst_49386,inst_49383,inst_49391,inst_49389,inst_49406,inst_49408,inst_49409,inst_49410,inst_49411,state_val_49471,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49413 = setTimeout(inst_49412,(10));
var state_49470__$1 = (function (){var statearr_49541 = state_49470;
(statearr_49541[(33)] = inst_49411);

(statearr_49541[(34)] = inst_49406);

return statearr_49541;
})();
var statearr_49542_49605 = state_49470__$1;
(statearr_49542_49605[(2)] = inst_49413);

(statearr_49542_49605[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (16))){
var state_49470__$1 = state_49470;
var statearr_49543_49606 = state_49470__$1;
(statearr_49543_49606[(2)] = reload_dependents);

(statearr_49543_49606[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (38))){
var inst_49423 = (state_49470[(16)]);
var inst_49441 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49423);
var state_49470__$1 = state_49470;
var statearr_49544_49607 = state_49470__$1;
(statearr_49544_49607[(2)] = inst_49441);

(statearr_49544_49607[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (30))){
var state_49470__$1 = state_49470;
var statearr_49545_49608 = state_49470__$1;
(statearr_49545_49608[(2)] = null);

(statearr_49545_49608[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (10))){
var inst_49343 = (state_49470[(22)]);
var inst_49345 = cljs.core.chunked_seq_QMARK_.call(null,inst_49343);
var state_49470__$1 = state_49470;
if(inst_49345){
var statearr_49546_49609 = state_49470__$1;
(statearr_49546_49609[(1)] = (13));

} else {
var statearr_49547_49610 = state_49470__$1;
(statearr_49547_49610[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (18))){
var inst_49377 = (state_49470[(2)]);
var state_49470__$1 = state_49470;
if(cljs.core.truth_(inst_49377)){
var statearr_49548_49611 = state_49470__$1;
(statearr_49548_49611[(1)] = (19));

} else {
var statearr_49549_49612 = state_49470__$1;
(statearr_49549_49612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (42))){
var state_49470__$1 = state_49470;
var statearr_49550_49613 = state_49470__$1;
(statearr_49550_49613[(2)] = null);

(statearr_49550_49613[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (37))){
var inst_49436 = (state_49470[(2)]);
var state_49470__$1 = state_49470;
var statearr_49551_49614 = state_49470__$1;
(statearr_49551_49614[(2)] = inst_49436);

(statearr_49551_49614[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49471 === (8))){
var inst_49343 = (state_49470[(22)]);
var inst_49330 = (state_49470[(9)]);
var inst_49343__$1 = cljs.core.seq.call(null,inst_49330);
var state_49470__$1 = (function (){var statearr_49552 = state_49470;
(statearr_49552[(22)] = inst_49343__$1);

return statearr_49552;
})();
if(inst_49343__$1){
var statearr_49553_49615 = state_49470__$1;
(statearr_49553_49615[(1)] = (10));

} else {
var statearr_49554_49616 = state_49470__$1;
(statearr_49554_49616[(1)] = (11));

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
});})(c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__46743__auto__,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46744__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46744__auto____0 = (function (){
var statearr_49555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49555[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__46744__auto__);

(statearr_49555[(1)] = (1));

return statearr_49555;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46744__auto____1 = (function (state_49470){
while(true){
var ret_value__46745__auto__ = (function (){try{while(true){
var result__46746__auto__ = switch__46743__auto__.call(null,state_49470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46746__auto__;
}
break;
}
}catch (e49556){if((e49556 instanceof Object)){
var ex__46747__auto__ = e49556;
var statearr_49557_49617 = state_49470;
(statearr_49557_49617[(5)] = ex__46747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49618 = state_49470;
state_49470 = G__49618;
continue;
} else {
return ret_value__46745__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__46744__auto__ = function(state_49470){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46744__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46744__auto____1.call(this,state_49470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46744__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__46744__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46744__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46744__auto__;
})()
;})(switch__46743__auto__,c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__46835__auto__ = (function (){var statearr_49558 = f__46834__auto__.call(null);
(statearr_49558[(6)] = c__46833__auto__);

return statearr_49558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46835__auto__);
});})(c__46833__auto__,map__49315,map__49315__$1,opts,before_jsload,on_jsload,reload_dependents,map__49316,map__49316__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__46833__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49621,link){
var map__49622 = p__49621;
var map__49622__$1 = ((((!((map__49622 == null)))?((((map__49622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49622):map__49622);
var file = cljs.core.get.call(null,map__49622__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5290__auto__ = link.href;
if(cljs.core.truth_(temp__5290__auto__)){
var link_href = temp__5290__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5290__auto__,map__49622,map__49622__$1,file){
return (function (p1__49619_SHARP_,p2__49620_SHARP_){
if(cljs.core._EQ_.call(null,p1__49619_SHARP_,p2__49620_SHARP_)){
return p1__49619_SHARP_;
} else {
return false;
}
});})(link_href,temp__5290__auto__,map__49622,map__49622__$1,file))
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
var temp__5290__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49625){
var map__49626 = p__49625;
var map__49626__$1 = ((((!((map__49626 == null)))?((((map__49626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49626):map__49626);
var match_length = cljs.core.get.call(null,map__49626__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49626__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49624_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49624_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49628_SHARP_,p2__49629_SHARP_){
return cljs.core.assoc.call(null,p1__49628_SHARP_,cljs.core.get.call(null,p2__49629_SHARP_,key),p2__49629_SHARP_);
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
var loaded_f_datas_49630 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_49630);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_49630);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49631,p__49632){
var map__49633 = p__49631;
var map__49633__$1 = ((((!((map__49633 == null)))?((((map__49633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49633):map__49633);
var on_cssload = cljs.core.get.call(null,map__49633__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49634 = p__49632;
var map__49634__$1 = ((((!((map__49634 == null)))?((((map__49634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49634):map__49634);
var files_msg = map__49634__$1;
var files = cljs.core.get.call(null,map__49634__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1506985655345
