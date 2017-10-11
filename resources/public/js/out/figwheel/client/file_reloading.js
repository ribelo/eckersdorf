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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49003_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49003_SHARP_));
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
var seq__49004 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49005 = null;
var count__49006 = (0);
var i__49007 = (0);
while(true){
if((i__49007 < count__49006)){
var n = cljs.core._nth.call(null,chunk__49005,i__49007);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49008 = seq__49004;
var G__49009 = chunk__49005;
var G__49010 = count__49006;
var G__49011 = (i__49007 + (1));
seq__49004 = G__49008;
chunk__49005 = G__49009;
count__49006 = G__49010;
i__49007 = G__49011;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__49004);
if(temp__5290__auto__){
var seq__49004__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49004__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__49004__$1);
var G__49012 = cljs.core.chunk_rest.call(null,seq__49004__$1);
var G__49013 = c__31170__auto__;
var G__49014 = cljs.core.count.call(null,c__31170__auto__);
var G__49015 = (0);
seq__49004 = G__49012;
chunk__49005 = G__49013;
count__49006 = G__49014;
i__49007 = G__49015;
continue;
} else {
var n = cljs.core.first.call(null,seq__49004__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49016 = cljs.core.next.call(null,seq__49004__$1);
var G__49017 = null;
var G__49018 = (0);
var G__49019 = (0);
seq__49004 = G__49016;
chunk__49005 = G__49017;
count__49006 = G__49018;
i__49007 = G__49019;
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

var seq__49029_49037 = cljs.core.seq.call(null,deps);
var chunk__49030_49038 = null;
var count__49031_49039 = (0);
var i__49032_49040 = (0);
while(true){
if((i__49032_49040 < count__49031_49039)){
var dep_49041 = cljs.core._nth.call(null,chunk__49030_49038,i__49032_49040);
topo_sort_helper_STAR_.call(null,dep_49041,(depth + (1)),state);

var G__49042 = seq__49029_49037;
var G__49043 = chunk__49030_49038;
var G__49044 = count__49031_49039;
var G__49045 = (i__49032_49040 + (1));
seq__49029_49037 = G__49042;
chunk__49030_49038 = G__49043;
count__49031_49039 = G__49044;
i__49032_49040 = G__49045;
continue;
} else {
var temp__5290__auto___49046 = cljs.core.seq.call(null,seq__49029_49037);
if(temp__5290__auto___49046){
var seq__49029_49047__$1 = temp__5290__auto___49046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49029_49047__$1)){
var c__31170__auto___49048 = cljs.core.chunk_first.call(null,seq__49029_49047__$1);
var G__49049 = cljs.core.chunk_rest.call(null,seq__49029_49047__$1);
var G__49050 = c__31170__auto___49048;
var G__49051 = cljs.core.count.call(null,c__31170__auto___49048);
var G__49052 = (0);
seq__49029_49037 = G__49049;
chunk__49030_49038 = G__49050;
count__49031_49039 = G__49051;
i__49032_49040 = G__49052;
continue;
} else {
var dep_49053 = cljs.core.first.call(null,seq__49029_49047__$1);
topo_sort_helper_STAR_.call(null,dep_49053,(depth + (1)),state);

var G__49054 = cljs.core.next.call(null,seq__49029_49047__$1);
var G__49055 = null;
var G__49056 = (0);
var G__49057 = (0);
seq__49029_49037 = G__49054;
chunk__49030_49038 = G__49055;
count__49031_49039 = G__49056;
i__49032_49040 = G__49057;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49033){
var vec__49034 = p__49033;
var seq__49035 = cljs.core.seq.call(null,vec__49034);
var first__49036 = cljs.core.first.call(null,seq__49035);
var seq__49035__$1 = cljs.core.next.call(null,seq__49035);
var x = first__49036;
var xs = seq__49035__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49034,seq__49035,first__49036,seq__49035__$1,x,xs,get_deps__$1){
return (function (p1__49020_SHARP_){
return clojure.set.difference.call(null,p1__49020_SHARP_,x);
});})(vec__49034,seq__49035,first__49036,seq__49035__$1,x,xs,get_deps__$1))
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
var seq__49058 = cljs.core.seq.call(null,provides);
var chunk__49059 = null;
var count__49060 = (0);
var i__49061 = (0);
while(true){
if((i__49061 < count__49060)){
var prov = cljs.core._nth.call(null,chunk__49059,i__49061);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49062_49070 = cljs.core.seq.call(null,requires);
var chunk__49063_49071 = null;
var count__49064_49072 = (0);
var i__49065_49073 = (0);
while(true){
if((i__49065_49073 < count__49064_49072)){
var req_49074 = cljs.core._nth.call(null,chunk__49063_49071,i__49065_49073);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49074,prov);

var G__49075 = seq__49062_49070;
var G__49076 = chunk__49063_49071;
var G__49077 = count__49064_49072;
var G__49078 = (i__49065_49073 + (1));
seq__49062_49070 = G__49075;
chunk__49063_49071 = G__49076;
count__49064_49072 = G__49077;
i__49065_49073 = G__49078;
continue;
} else {
var temp__5290__auto___49079 = cljs.core.seq.call(null,seq__49062_49070);
if(temp__5290__auto___49079){
var seq__49062_49080__$1 = temp__5290__auto___49079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49062_49080__$1)){
var c__31170__auto___49081 = cljs.core.chunk_first.call(null,seq__49062_49080__$1);
var G__49082 = cljs.core.chunk_rest.call(null,seq__49062_49080__$1);
var G__49083 = c__31170__auto___49081;
var G__49084 = cljs.core.count.call(null,c__31170__auto___49081);
var G__49085 = (0);
seq__49062_49070 = G__49082;
chunk__49063_49071 = G__49083;
count__49064_49072 = G__49084;
i__49065_49073 = G__49085;
continue;
} else {
var req_49086 = cljs.core.first.call(null,seq__49062_49080__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49086,prov);

var G__49087 = cljs.core.next.call(null,seq__49062_49080__$1);
var G__49088 = null;
var G__49089 = (0);
var G__49090 = (0);
seq__49062_49070 = G__49087;
chunk__49063_49071 = G__49088;
count__49064_49072 = G__49089;
i__49065_49073 = G__49090;
continue;
}
} else {
}
}
break;
}

var G__49091 = seq__49058;
var G__49092 = chunk__49059;
var G__49093 = count__49060;
var G__49094 = (i__49061 + (1));
seq__49058 = G__49091;
chunk__49059 = G__49092;
count__49060 = G__49093;
i__49061 = G__49094;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__49058);
if(temp__5290__auto__){
var seq__49058__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49058__$1)){
var c__31170__auto__ = cljs.core.chunk_first.call(null,seq__49058__$1);
var G__49095 = cljs.core.chunk_rest.call(null,seq__49058__$1);
var G__49096 = c__31170__auto__;
var G__49097 = cljs.core.count.call(null,c__31170__auto__);
var G__49098 = (0);
seq__49058 = G__49095;
chunk__49059 = G__49096;
count__49060 = G__49097;
i__49061 = G__49098;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49058__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49066_49099 = cljs.core.seq.call(null,requires);
var chunk__49067_49100 = null;
var count__49068_49101 = (0);
var i__49069_49102 = (0);
while(true){
if((i__49069_49102 < count__49068_49101)){
var req_49103 = cljs.core._nth.call(null,chunk__49067_49100,i__49069_49102);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49103,prov);

var G__49104 = seq__49066_49099;
var G__49105 = chunk__49067_49100;
var G__49106 = count__49068_49101;
var G__49107 = (i__49069_49102 + (1));
seq__49066_49099 = G__49104;
chunk__49067_49100 = G__49105;
count__49068_49101 = G__49106;
i__49069_49102 = G__49107;
continue;
} else {
var temp__5290__auto___49108__$1 = cljs.core.seq.call(null,seq__49066_49099);
if(temp__5290__auto___49108__$1){
var seq__49066_49109__$1 = temp__5290__auto___49108__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49066_49109__$1)){
var c__31170__auto___49110 = cljs.core.chunk_first.call(null,seq__49066_49109__$1);
var G__49111 = cljs.core.chunk_rest.call(null,seq__49066_49109__$1);
var G__49112 = c__31170__auto___49110;
var G__49113 = cljs.core.count.call(null,c__31170__auto___49110);
var G__49114 = (0);
seq__49066_49099 = G__49111;
chunk__49067_49100 = G__49112;
count__49068_49101 = G__49113;
i__49069_49102 = G__49114;
continue;
} else {
var req_49115 = cljs.core.first.call(null,seq__49066_49109__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49115,prov);

var G__49116 = cljs.core.next.call(null,seq__49066_49109__$1);
var G__49117 = null;
var G__49118 = (0);
var G__49119 = (0);
seq__49066_49099 = G__49116;
chunk__49067_49100 = G__49117;
count__49068_49101 = G__49118;
i__49069_49102 = G__49119;
continue;
}
} else {
}
}
break;
}

var G__49120 = cljs.core.next.call(null,seq__49058__$1);
var G__49121 = null;
var G__49122 = (0);
var G__49123 = (0);
seq__49058 = G__49120;
chunk__49059 = G__49121;
count__49060 = G__49122;
i__49061 = G__49123;
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
var seq__49124_49128 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49125_49129 = null;
var count__49126_49130 = (0);
var i__49127_49131 = (0);
while(true){
if((i__49127_49131 < count__49126_49130)){
var ns_49132 = cljs.core._nth.call(null,chunk__49125_49129,i__49127_49131);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49132);

var G__49133 = seq__49124_49128;
var G__49134 = chunk__49125_49129;
var G__49135 = count__49126_49130;
var G__49136 = (i__49127_49131 + (1));
seq__49124_49128 = G__49133;
chunk__49125_49129 = G__49134;
count__49126_49130 = G__49135;
i__49127_49131 = G__49136;
continue;
} else {
var temp__5290__auto___49137 = cljs.core.seq.call(null,seq__49124_49128);
if(temp__5290__auto___49137){
var seq__49124_49138__$1 = temp__5290__auto___49137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49124_49138__$1)){
var c__31170__auto___49139 = cljs.core.chunk_first.call(null,seq__49124_49138__$1);
var G__49140 = cljs.core.chunk_rest.call(null,seq__49124_49138__$1);
var G__49141 = c__31170__auto___49139;
var G__49142 = cljs.core.count.call(null,c__31170__auto___49139);
var G__49143 = (0);
seq__49124_49128 = G__49140;
chunk__49125_49129 = G__49141;
count__49126_49130 = G__49142;
i__49127_49131 = G__49143;
continue;
} else {
var ns_49144 = cljs.core.first.call(null,seq__49124_49138__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49144);

var G__49145 = cljs.core.next.call(null,seq__49124_49138__$1);
var G__49146 = null;
var G__49147 = (0);
var G__49148 = (0);
seq__49124_49128 = G__49145;
chunk__49125_49129 = G__49146;
count__49126_49130 = G__49147;
i__49127_49131 = G__49148;
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
var G__49149__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49150__i = 0, G__49150__a = new Array(arguments.length -  0);
while (G__49150__i < G__49150__a.length) {G__49150__a[G__49150__i] = arguments[G__49150__i + 0]; ++G__49150__i;}
  args = new cljs.core.IndexedSeq(G__49150__a,0,null);
} 
return G__49149__delegate.call(this,args);};
G__49149.cljs$lang$maxFixedArity = 0;
G__49149.cljs$lang$applyTo = (function (arglist__49151){
var args = cljs.core.seq(arglist__49151);
return G__49149__delegate(args);
});
G__49149.cljs$core$IFn$_invoke$arity$variadic = G__49149__delegate;
return G__49149;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__49152_SHARP_,p2__49153_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49152_SHARP_)].join('')),p2__49153_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__49154_SHARP_,p2__49155_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49154_SHARP_)].join(''),p2__49155_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__49156 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__49156.addCallback(((function (G__49156){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__49156))
);

G__49156.addErrback(((function (G__49156){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__49156))
);

return G__49156;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49157 = cljs.core._EQ_;
var expr__49158 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49157.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49158))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__49157,expr__49158){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__49157,expr__49158))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__49157,expr__49158){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49160){if((e49160 instanceof Error)){
var e = e49160;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49160;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__49157,expr__49158))
} else {
if(cljs.core.truth_(pred__49157.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49158))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49157.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__49158))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49157.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49158))){
return ((function (pred__49157,expr__49158){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49161){if((e49161 instanceof Error)){
var e = e49161;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49161;

}
}})());
});
;})(pred__49157,expr__49158))
} else {
return ((function (pred__49157,expr__49158){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49157,expr__49158))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49162,callback){
var map__49163 = p__49162;
var map__49163__$1 = ((((!((map__49163 == null)))?((((map__49163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49163):map__49163);
var file_msg = map__49163__$1;
var request_url = cljs.core.get.call(null,map__49163__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49163,map__49163__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49163,map__49163__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__46830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto__){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto__){
return (function (state_49187){
var state_val_49188 = (state_49187[(1)]);
if((state_val_49188 === (7))){
var inst_49183 = (state_49187[(2)]);
var state_49187__$1 = state_49187;
var statearr_49189_49206 = state_49187__$1;
(statearr_49189_49206[(2)] = inst_49183);

(statearr_49189_49206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (1))){
var state_49187__$1 = state_49187;
var statearr_49190_49207 = state_49187__$1;
(statearr_49190_49207[(2)] = null);

(statearr_49190_49207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (4))){
var inst_49167 = (state_49187[(7)]);
var inst_49167__$1 = (state_49187[(2)]);
var state_49187__$1 = (function (){var statearr_49191 = state_49187;
(statearr_49191[(7)] = inst_49167__$1);

return statearr_49191;
})();
if(cljs.core.truth_(inst_49167__$1)){
var statearr_49192_49208 = state_49187__$1;
(statearr_49192_49208[(1)] = (5));

} else {
var statearr_49193_49209 = state_49187__$1;
(statearr_49193_49209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (6))){
var state_49187__$1 = state_49187;
var statearr_49194_49210 = state_49187__$1;
(statearr_49194_49210[(2)] = null);

(statearr_49194_49210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (3))){
var inst_49185 = (state_49187[(2)]);
var state_49187__$1 = state_49187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49187__$1,inst_49185);
} else {
if((state_val_49188 === (2))){
var state_49187__$1 = state_49187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49187__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49188 === (11))){
var inst_49179 = (state_49187[(2)]);
var state_49187__$1 = (function (){var statearr_49195 = state_49187;
(statearr_49195[(8)] = inst_49179);

return statearr_49195;
})();
var statearr_49196_49211 = state_49187__$1;
(statearr_49196_49211[(2)] = null);

(statearr_49196_49211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (9))){
var inst_49171 = (state_49187[(9)]);
var inst_49173 = (state_49187[(10)]);
var inst_49175 = inst_49173.call(null,inst_49171);
var state_49187__$1 = state_49187;
var statearr_49197_49212 = state_49187__$1;
(statearr_49197_49212[(2)] = inst_49175);

(statearr_49197_49212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (5))){
var inst_49167 = (state_49187[(7)]);
var inst_49169 = figwheel.client.file_reloading.blocking_load.call(null,inst_49167);
var state_49187__$1 = state_49187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49187__$1,(8),inst_49169);
} else {
if((state_val_49188 === (10))){
var inst_49171 = (state_49187[(9)]);
var inst_49177 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49171);
var state_49187__$1 = state_49187;
var statearr_49198_49213 = state_49187__$1;
(statearr_49198_49213[(2)] = inst_49177);

(statearr_49198_49213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (8))){
var inst_49167 = (state_49187[(7)]);
var inst_49173 = (state_49187[(10)]);
var inst_49171 = (state_49187[(2)]);
var inst_49172 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49173__$1 = cljs.core.get.call(null,inst_49172,inst_49167);
var state_49187__$1 = (function (){var statearr_49199 = state_49187;
(statearr_49199[(9)] = inst_49171);

(statearr_49199[(10)] = inst_49173__$1);

return statearr_49199;
})();
if(cljs.core.truth_(inst_49173__$1)){
var statearr_49200_49214 = state_49187__$1;
(statearr_49200_49214[(1)] = (9));

} else {
var statearr_49201_49215 = state_49187__$1;
(statearr_49201_49215[(1)] = (10));

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
});})(c__46830__auto__))
;
return ((function (switch__46740__auto__,c__46830__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__46741__auto__ = null;
var figwheel$client$file_reloading$state_machine__46741__auto____0 = (function (){
var statearr_49202 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49202[(0)] = figwheel$client$file_reloading$state_machine__46741__auto__);

(statearr_49202[(1)] = (1));

return statearr_49202;
});
var figwheel$client$file_reloading$state_machine__46741__auto____1 = (function (state_49187){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_49187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e49203){if((e49203 instanceof Object)){
var ex__46744__auto__ = e49203;
var statearr_49204_49216 = state_49187;
(statearr_49204_49216[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49217 = state_49187;
state_49187 = G__49217;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__46741__auto__ = function(state_49187){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__46741__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__46741__auto____1.call(this,state_49187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__46741__auto____0;
figwheel$client$file_reloading$state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__46741__auto____1;
return figwheel$client$file_reloading$state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto__))
})();
var state__46832__auto__ = (function (){var statearr_49205 = f__46831__auto__.call(null);
(statearr_49205[(6)] = c__46830__auto__);

return statearr_49205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto__))
);

return c__46830__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49218,callback){
var map__49219 = p__49218;
var map__49219__$1 = ((((!((map__49219 == null)))?((((map__49219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49219):map__49219);
var file_msg = map__49219__$1;
var namespace = cljs.core.get.call(null,map__49219__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49219,map__49219__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49219,map__49219__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49221){
var map__49222 = p__49221;
var map__49222__$1 = ((((!((map__49222 == null)))?((((map__49222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49222):map__49222);
var file_msg = map__49222__$1;
var namespace = cljs.core.get.call(null,map__49222__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49224){
var map__49225 = p__49224;
var map__49225__$1 = ((((!((map__49225 == null)))?((((map__49225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49225):map__49225);
var file_msg = map__49225__$1;
var namespace = cljs.core.get.call(null,map__49225__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49227,callback){
var map__49228 = p__49227;
var map__49228__$1 = ((((!((map__49228 == null)))?((((map__49228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49228):map__49228);
var file_msg = map__49228__$1;
var request_url = cljs.core.get.call(null,map__49228__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49228__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__46830__auto___49278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto___49278,out){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto___49278,out){
return (function (state_49263){
var state_val_49264 = (state_49263[(1)]);
if((state_val_49264 === (1))){
var inst_49237 = cljs.core.seq.call(null,files);
var inst_49238 = cljs.core.first.call(null,inst_49237);
var inst_49239 = cljs.core.next.call(null,inst_49237);
var inst_49240 = files;
var state_49263__$1 = (function (){var statearr_49265 = state_49263;
(statearr_49265[(7)] = inst_49239);

(statearr_49265[(8)] = inst_49240);

(statearr_49265[(9)] = inst_49238);

return statearr_49265;
})();
var statearr_49266_49279 = state_49263__$1;
(statearr_49266_49279[(2)] = null);

(statearr_49266_49279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49264 === (2))){
var inst_49240 = (state_49263[(8)]);
var inst_49246 = (state_49263[(10)]);
var inst_49245 = cljs.core.seq.call(null,inst_49240);
var inst_49246__$1 = cljs.core.first.call(null,inst_49245);
var inst_49247 = cljs.core.next.call(null,inst_49245);
var inst_49248 = (inst_49246__$1 == null);
var inst_49249 = cljs.core.not.call(null,inst_49248);
var state_49263__$1 = (function (){var statearr_49267 = state_49263;
(statearr_49267[(10)] = inst_49246__$1);

(statearr_49267[(11)] = inst_49247);

return statearr_49267;
})();
if(inst_49249){
var statearr_49268_49280 = state_49263__$1;
(statearr_49268_49280[(1)] = (4));

} else {
var statearr_49269_49281 = state_49263__$1;
(statearr_49269_49281[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49264 === (3))){
var inst_49261 = (state_49263[(2)]);
var state_49263__$1 = state_49263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49263__$1,inst_49261);
} else {
if((state_val_49264 === (4))){
var inst_49246 = (state_49263[(10)]);
var inst_49251 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49246);
var state_49263__$1 = state_49263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49263__$1,(7),inst_49251);
} else {
if((state_val_49264 === (5))){
var inst_49257 = cljs.core.async.close_BANG_.call(null,out);
var state_49263__$1 = state_49263;
var statearr_49270_49282 = state_49263__$1;
(statearr_49270_49282[(2)] = inst_49257);

(statearr_49270_49282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49264 === (6))){
var inst_49259 = (state_49263[(2)]);
var state_49263__$1 = state_49263;
var statearr_49271_49283 = state_49263__$1;
(statearr_49271_49283[(2)] = inst_49259);

(statearr_49271_49283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49264 === (7))){
var inst_49247 = (state_49263[(11)]);
var inst_49253 = (state_49263[(2)]);
var inst_49254 = cljs.core.async.put_BANG_.call(null,out,inst_49253);
var inst_49240 = inst_49247;
var state_49263__$1 = (function (){var statearr_49272 = state_49263;
(statearr_49272[(8)] = inst_49240);

(statearr_49272[(12)] = inst_49254);

return statearr_49272;
})();
var statearr_49273_49284 = state_49263__$1;
(statearr_49273_49284[(2)] = null);

(statearr_49273_49284[(1)] = (2));


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
});})(c__46830__auto___49278,out))
;
return ((function (switch__46740__auto__,c__46830__auto___49278,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46741__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46741__auto____0 = (function (){
var statearr_49274 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49274[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46741__auto__);

(statearr_49274[(1)] = (1));

return statearr_49274;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46741__auto____1 = (function (state_49263){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_49263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e49275){if((e49275 instanceof Object)){
var ex__46744__auto__ = e49275;
var statearr_49276_49285 = state_49263;
(statearr_49276_49285[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49286 = state_49263;
state_49263 = G__49286;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46741__auto__ = function(state_49263){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46741__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46741__auto____1.call(this,state_49263);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46741__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46741__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto___49278,out))
})();
var state__46832__auto__ = (function (){var statearr_49277 = f__46831__auto__.call(null);
(statearr_49277[(6)] = c__46830__auto___49278);

return statearr_49277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto___49278,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49287,opts){
var map__49288 = p__49287;
var map__49288__$1 = ((((!((map__49288 == null)))?((((map__49288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49288):map__49288);
var eval_body = cljs.core.get.call(null,map__49288__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49288__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e49290){var e = e49290;
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
return (function (p1__49291_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49291_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__49292){
var vec__49293 = p__49292;
var k = cljs.core.nth.call(null,vec__49293,(0),null);
var v = cljs.core.nth.call(null,vec__49293,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49296){
var vec__49297 = p__49296;
var k = cljs.core.nth.call(null,vec__49297,(0),null);
var v = cljs.core.nth.call(null,vec__49297,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49303,p__49304){
var map__49305 = p__49303;
var map__49305__$1 = ((((!((map__49305 == null)))?((((map__49305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49305):map__49305);
var opts = map__49305__$1;
var before_jsload = cljs.core.get.call(null,map__49305__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49305__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49305__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49306 = p__49304;
var map__49306__$1 = ((((!((map__49306 == null)))?((((map__49306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49306):map__49306);
var msg = map__49306__$1;
var files = cljs.core.get.call(null,map__49306__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49306__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49306__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__46830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__46831__auto__ = (function (){var switch__46740__auto__ = ((function (c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49460){
var state_val_49461 = (state_49460[(1)]);
if((state_val_49461 === (7))){
var inst_49320 = (state_49460[(7)]);
var inst_49321 = (state_49460[(8)]);
var inst_49322 = (state_49460[(9)]);
var inst_49323 = (state_49460[(10)]);
var inst_49328 = cljs.core._nth.call(null,inst_49321,inst_49323);
var inst_49329 = figwheel.client.file_reloading.eval_body.call(null,inst_49328,opts);
var inst_49330 = (inst_49323 + (1));
var tmp49462 = inst_49320;
var tmp49463 = inst_49321;
var tmp49464 = inst_49322;
var inst_49320__$1 = tmp49462;
var inst_49321__$1 = tmp49463;
var inst_49322__$1 = tmp49464;
var inst_49323__$1 = inst_49330;
var state_49460__$1 = (function (){var statearr_49465 = state_49460;
(statearr_49465[(7)] = inst_49320__$1);

(statearr_49465[(8)] = inst_49321__$1);

(statearr_49465[(9)] = inst_49322__$1);

(statearr_49465[(10)] = inst_49323__$1);

(statearr_49465[(11)] = inst_49329);

return statearr_49465;
})();
var statearr_49466_49549 = state_49460__$1;
(statearr_49466_49549[(2)] = null);

(statearr_49466_49549[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (20))){
var inst_49363 = (state_49460[(12)]);
var inst_49371 = figwheel.client.file_reloading.sort_files.call(null,inst_49363);
var state_49460__$1 = state_49460;
var statearr_49467_49550 = state_49460__$1;
(statearr_49467_49550[(2)] = inst_49371);

(statearr_49467_49550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (27))){
var state_49460__$1 = state_49460;
var statearr_49468_49551 = state_49460__$1;
(statearr_49468_49551[(2)] = null);

(statearr_49468_49551[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (1))){
var inst_49312 = (state_49460[(13)]);
var inst_49309 = before_jsload.call(null,files);
var inst_49310 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49311 = (function (){return ((function (inst_49312,inst_49309,inst_49310,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49300_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49300_SHARP_);
});
;})(inst_49312,inst_49309,inst_49310,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49312__$1 = cljs.core.filter.call(null,inst_49311,files);
var inst_49313 = cljs.core.not_empty.call(null,inst_49312__$1);
var state_49460__$1 = (function (){var statearr_49469 = state_49460;
(statearr_49469[(14)] = inst_49309);

(statearr_49469[(13)] = inst_49312__$1);

(statearr_49469[(15)] = inst_49310);

return statearr_49469;
})();
if(cljs.core.truth_(inst_49313)){
var statearr_49470_49552 = state_49460__$1;
(statearr_49470_49552[(1)] = (2));

} else {
var statearr_49471_49553 = state_49460__$1;
(statearr_49471_49553[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (24))){
var state_49460__$1 = state_49460;
var statearr_49472_49554 = state_49460__$1;
(statearr_49472_49554[(2)] = null);

(statearr_49472_49554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (39))){
var inst_49413 = (state_49460[(16)]);
var state_49460__$1 = state_49460;
var statearr_49473_49555 = state_49460__$1;
(statearr_49473_49555[(2)] = inst_49413);

(statearr_49473_49555[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (46))){
var inst_49455 = (state_49460[(2)]);
var state_49460__$1 = state_49460;
var statearr_49474_49556 = state_49460__$1;
(statearr_49474_49556[(2)] = inst_49455);

(statearr_49474_49556[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (4))){
var inst_49357 = (state_49460[(2)]);
var inst_49358 = cljs.core.List.EMPTY;
var inst_49359 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49358);
var inst_49360 = (function (){return ((function (inst_49357,inst_49358,inst_49359,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49301_SHARP_){
var and__30227__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49301_SHARP_);
if(cljs.core.truth_(and__30227__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49301_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49301_SHARP_)));
} else {
return and__30227__auto__;
}
});
;})(inst_49357,inst_49358,inst_49359,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49361 = cljs.core.filter.call(null,inst_49360,files);
var inst_49362 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49363 = cljs.core.concat.call(null,inst_49361,inst_49362);
var state_49460__$1 = (function (){var statearr_49475 = state_49460;
(statearr_49475[(17)] = inst_49357);

(statearr_49475[(18)] = inst_49359);

(statearr_49475[(12)] = inst_49363);

return statearr_49475;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49476_49557 = state_49460__$1;
(statearr_49476_49557[(1)] = (16));

} else {
var statearr_49477_49558 = state_49460__$1;
(statearr_49477_49558[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (15))){
var inst_49347 = (state_49460[(2)]);
var state_49460__$1 = state_49460;
var statearr_49478_49559 = state_49460__$1;
(statearr_49478_49559[(2)] = inst_49347);

(statearr_49478_49559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (21))){
var inst_49373 = (state_49460[(19)]);
var inst_49373__$1 = (state_49460[(2)]);
var inst_49374 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49373__$1);
var state_49460__$1 = (function (){var statearr_49479 = state_49460;
(statearr_49479[(19)] = inst_49373__$1);

return statearr_49479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49460__$1,(22),inst_49374);
} else {
if((state_val_49461 === (31))){
var inst_49458 = (state_49460[(2)]);
var state_49460__$1 = state_49460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49460__$1,inst_49458);
} else {
if((state_val_49461 === (32))){
var inst_49413 = (state_49460[(16)]);
var inst_49418 = inst_49413.cljs$lang$protocol_mask$partition0$;
var inst_49419 = (inst_49418 & (64));
var inst_49420 = inst_49413.cljs$core$ISeq$;
var inst_49421 = (cljs.core.PROTOCOL_SENTINEL === inst_49420);
var inst_49422 = (inst_49419) || (inst_49421);
var state_49460__$1 = state_49460;
if(cljs.core.truth_(inst_49422)){
var statearr_49480_49560 = state_49460__$1;
(statearr_49480_49560[(1)] = (35));

} else {
var statearr_49481_49561 = state_49460__$1;
(statearr_49481_49561[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (40))){
var inst_49435 = (state_49460[(20)]);
var inst_49434 = (state_49460[(2)]);
var inst_49435__$1 = cljs.core.get.call(null,inst_49434,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49436 = cljs.core.get.call(null,inst_49434,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49437 = cljs.core.not_empty.call(null,inst_49435__$1);
var state_49460__$1 = (function (){var statearr_49482 = state_49460;
(statearr_49482[(21)] = inst_49436);

(statearr_49482[(20)] = inst_49435__$1);

return statearr_49482;
})();
if(cljs.core.truth_(inst_49437)){
var statearr_49483_49562 = state_49460__$1;
(statearr_49483_49562[(1)] = (41));

} else {
var statearr_49484_49563 = state_49460__$1;
(statearr_49484_49563[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (33))){
var state_49460__$1 = state_49460;
var statearr_49485_49564 = state_49460__$1;
(statearr_49485_49564[(2)] = false);

(statearr_49485_49564[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (13))){
var inst_49333 = (state_49460[(22)]);
var inst_49337 = cljs.core.chunk_first.call(null,inst_49333);
var inst_49338 = cljs.core.chunk_rest.call(null,inst_49333);
var inst_49339 = cljs.core.count.call(null,inst_49337);
var inst_49320 = inst_49338;
var inst_49321 = inst_49337;
var inst_49322 = inst_49339;
var inst_49323 = (0);
var state_49460__$1 = (function (){var statearr_49486 = state_49460;
(statearr_49486[(7)] = inst_49320);

(statearr_49486[(8)] = inst_49321);

(statearr_49486[(9)] = inst_49322);

(statearr_49486[(10)] = inst_49323);

return statearr_49486;
})();
var statearr_49487_49565 = state_49460__$1;
(statearr_49487_49565[(2)] = null);

(statearr_49487_49565[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (22))){
var inst_49376 = (state_49460[(23)]);
var inst_49373 = (state_49460[(19)]);
var inst_49381 = (state_49460[(24)]);
var inst_49377 = (state_49460[(25)]);
var inst_49376__$1 = (state_49460[(2)]);
var inst_49377__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49376__$1);
var inst_49378 = (function (){var all_files = inst_49373;
var res_SINGLEQUOTE_ = inst_49376__$1;
var res = inst_49377__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49376,inst_49373,inst_49381,inst_49377,inst_49376__$1,inst_49377__$1,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49302_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49302_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49376,inst_49373,inst_49381,inst_49377,inst_49376__$1,inst_49377__$1,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49379 = cljs.core.filter.call(null,inst_49378,inst_49376__$1);
var inst_49380 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49381__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49380);
var inst_49382 = cljs.core.not_empty.call(null,inst_49381__$1);
var state_49460__$1 = (function (){var statearr_49488 = state_49460;
(statearr_49488[(23)] = inst_49376__$1);

(statearr_49488[(24)] = inst_49381__$1);

(statearr_49488[(26)] = inst_49379);

(statearr_49488[(25)] = inst_49377__$1);

return statearr_49488;
})();
if(cljs.core.truth_(inst_49382)){
var statearr_49489_49566 = state_49460__$1;
(statearr_49489_49566[(1)] = (23));

} else {
var statearr_49490_49567 = state_49460__$1;
(statearr_49490_49567[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (36))){
var state_49460__$1 = state_49460;
var statearr_49491_49568 = state_49460__$1;
(statearr_49491_49568[(2)] = false);

(statearr_49491_49568[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (41))){
var inst_49435 = (state_49460[(20)]);
var inst_49439 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49440 = cljs.core.map.call(null,inst_49439,inst_49435);
var inst_49441 = cljs.core.pr_str.call(null,inst_49440);
var inst_49442 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49441)].join('');
var inst_49443 = figwheel.client.utils.log.call(null,inst_49442);
var state_49460__$1 = state_49460;
var statearr_49492_49569 = state_49460__$1;
(statearr_49492_49569[(2)] = inst_49443);

(statearr_49492_49569[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (43))){
var inst_49436 = (state_49460[(21)]);
var inst_49446 = (state_49460[(2)]);
var inst_49447 = cljs.core.not_empty.call(null,inst_49436);
var state_49460__$1 = (function (){var statearr_49493 = state_49460;
(statearr_49493[(27)] = inst_49446);

return statearr_49493;
})();
if(cljs.core.truth_(inst_49447)){
var statearr_49494_49570 = state_49460__$1;
(statearr_49494_49570[(1)] = (44));

} else {
var statearr_49495_49571 = state_49460__$1;
(statearr_49495_49571[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (29))){
var inst_49376 = (state_49460[(23)]);
var inst_49373 = (state_49460[(19)]);
var inst_49381 = (state_49460[(24)]);
var inst_49379 = (state_49460[(26)]);
var inst_49413 = (state_49460[(16)]);
var inst_49377 = (state_49460[(25)]);
var inst_49409 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49412 = (function (){var all_files = inst_49373;
var res_SINGLEQUOTE_ = inst_49376;
var res = inst_49377;
var files_not_loaded = inst_49379;
var dependencies_that_loaded = inst_49381;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49376,inst_49373,inst_49381,inst_49379,inst_49413,inst_49377,inst_49409,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49411){
var map__49496 = p__49411;
var map__49496__$1 = ((((!((map__49496 == null)))?((((map__49496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49496):map__49496);
var namespace = cljs.core.get.call(null,map__49496__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49376,inst_49373,inst_49381,inst_49379,inst_49413,inst_49377,inst_49409,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49413__$1 = cljs.core.group_by.call(null,inst_49412,inst_49379);
var inst_49415 = (inst_49413__$1 == null);
var inst_49416 = cljs.core.not.call(null,inst_49415);
var state_49460__$1 = (function (){var statearr_49498 = state_49460;
(statearr_49498[(16)] = inst_49413__$1);

(statearr_49498[(28)] = inst_49409);

return statearr_49498;
})();
if(inst_49416){
var statearr_49499_49572 = state_49460__$1;
(statearr_49499_49572[(1)] = (32));

} else {
var statearr_49500_49573 = state_49460__$1;
(statearr_49500_49573[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (44))){
var inst_49436 = (state_49460[(21)]);
var inst_49449 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49436);
var inst_49450 = cljs.core.pr_str.call(null,inst_49449);
var inst_49451 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49450)].join('');
var inst_49452 = figwheel.client.utils.log.call(null,inst_49451);
var state_49460__$1 = state_49460;
var statearr_49501_49574 = state_49460__$1;
(statearr_49501_49574[(2)] = inst_49452);

(statearr_49501_49574[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (6))){
var inst_49354 = (state_49460[(2)]);
var state_49460__$1 = state_49460;
var statearr_49502_49575 = state_49460__$1;
(statearr_49502_49575[(2)] = inst_49354);

(statearr_49502_49575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (28))){
var inst_49379 = (state_49460[(26)]);
var inst_49406 = (state_49460[(2)]);
var inst_49407 = cljs.core.not_empty.call(null,inst_49379);
var state_49460__$1 = (function (){var statearr_49503 = state_49460;
(statearr_49503[(29)] = inst_49406);

return statearr_49503;
})();
if(cljs.core.truth_(inst_49407)){
var statearr_49504_49576 = state_49460__$1;
(statearr_49504_49576[(1)] = (29));

} else {
var statearr_49505_49577 = state_49460__$1;
(statearr_49505_49577[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (25))){
var inst_49377 = (state_49460[(25)]);
var inst_49393 = (state_49460[(2)]);
var inst_49394 = cljs.core.not_empty.call(null,inst_49377);
var state_49460__$1 = (function (){var statearr_49506 = state_49460;
(statearr_49506[(30)] = inst_49393);

return statearr_49506;
})();
if(cljs.core.truth_(inst_49394)){
var statearr_49507_49578 = state_49460__$1;
(statearr_49507_49578[(1)] = (26));

} else {
var statearr_49508_49579 = state_49460__$1;
(statearr_49508_49579[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (34))){
var inst_49429 = (state_49460[(2)]);
var state_49460__$1 = state_49460;
if(cljs.core.truth_(inst_49429)){
var statearr_49509_49580 = state_49460__$1;
(statearr_49509_49580[(1)] = (38));

} else {
var statearr_49510_49581 = state_49460__$1;
(statearr_49510_49581[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (17))){
var state_49460__$1 = state_49460;
var statearr_49511_49582 = state_49460__$1;
(statearr_49511_49582[(2)] = recompile_dependents);

(statearr_49511_49582[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (3))){
var state_49460__$1 = state_49460;
var statearr_49512_49583 = state_49460__$1;
(statearr_49512_49583[(2)] = null);

(statearr_49512_49583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (12))){
var inst_49350 = (state_49460[(2)]);
var state_49460__$1 = state_49460;
var statearr_49513_49584 = state_49460__$1;
(statearr_49513_49584[(2)] = inst_49350);

(statearr_49513_49584[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (2))){
var inst_49312 = (state_49460[(13)]);
var inst_49319 = cljs.core.seq.call(null,inst_49312);
var inst_49320 = inst_49319;
var inst_49321 = null;
var inst_49322 = (0);
var inst_49323 = (0);
var state_49460__$1 = (function (){var statearr_49514 = state_49460;
(statearr_49514[(7)] = inst_49320);

(statearr_49514[(8)] = inst_49321);

(statearr_49514[(9)] = inst_49322);

(statearr_49514[(10)] = inst_49323);

return statearr_49514;
})();
var statearr_49515_49585 = state_49460__$1;
(statearr_49515_49585[(2)] = null);

(statearr_49515_49585[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (23))){
var inst_49376 = (state_49460[(23)]);
var inst_49373 = (state_49460[(19)]);
var inst_49381 = (state_49460[(24)]);
var inst_49379 = (state_49460[(26)]);
var inst_49377 = (state_49460[(25)]);
var inst_49384 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49386 = (function (){var all_files = inst_49373;
var res_SINGLEQUOTE_ = inst_49376;
var res = inst_49377;
var files_not_loaded = inst_49379;
var dependencies_that_loaded = inst_49381;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49376,inst_49373,inst_49381,inst_49379,inst_49377,inst_49384,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49385){
var map__49516 = p__49385;
var map__49516__$1 = ((((!((map__49516 == null)))?((((map__49516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49516):map__49516);
var request_url = cljs.core.get.call(null,map__49516__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49376,inst_49373,inst_49381,inst_49379,inst_49377,inst_49384,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49387 = cljs.core.reverse.call(null,inst_49381);
var inst_49388 = cljs.core.map.call(null,inst_49386,inst_49387);
var inst_49389 = cljs.core.pr_str.call(null,inst_49388);
var inst_49390 = figwheel.client.utils.log.call(null,inst_49389);
var state_49460__$1 = (function (){var statearr_49518 = state_49460;
(statearr_49518[(31)] = inst_49384);

return statearr_49518;
})();
var statearr_49519_49586 = state_49460__$1;
(statearr_49519_49586[(2)] = inst_49390);

(statearr_49519_49586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (35))){
var state_49460__$1 = state_49460;
var statearr_49520_49587 = state_49460__$1;
(statearr_49520_49587[(2)] = true);

(statearr_49520_49587[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (19))){
var inst_49363 = (state_49460[(12)]);
var inst_49369 = figwheel.client.file_reloading.expand_files.call(null,inst_49363);
var state_49460__$1 = state_49460;
var statearr_49521_49588 = state_49460__$1;
(statearr_49521_49588[(2)] = inst_49369);

(statearr_49521_49588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (11))){
var state_49460__$1 = state_49460;
var statearr_49522_49589 = state_49460__$1;
(statearr_49522_49589[(2)] = null);

(statearr_49522_49589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (9))){
var inst_49352 = (state_49460[(2)]);
var state_49460__$1 = state_49460;
var statearr_49523_49590 = state_49460__$1;
(statearr_49523_49590[(2)] = inst_49352);

(statearr_49523_49590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (5))){
var inst_49322 = (state_49460[(9)]);
var inst_49323 = (state_49460[(10)]);
var inst_49325 = (inst_49323 < inst_49322);
var inst_49326 = inst_49325;
var state_49460__$1 = state_49460;
if(cljs.core.truth_(inst_49326)){
var statearr_49524_49591 = state_49460__$1;
(statearr_49524_49591[(1)] = (7));

} else {
var statearr_49525_49592 = state_49460__$1;
(statearr_49525_49592[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (14))){
var inst_49333 = (state_49460[(22)]);
var inst_49342 = cljs.core.first.call(null,inst_49333);
var inst_49343 = figwheel.client.file_reloading.eval_body.call(null,inst_49342,opts);
var inst_49344 = cljs.core.next.call(null,inst_49333);
var inst_49320 = inst_49344;
var inst_49321 = null;
var inst_49322 = (0);
var inst_49323 = (0);
var state_49460__$1 = (function (){var statearr_49526 = state_49460;
(statearr_49526[(32)] = inst_49343);

(statearr_49526[(7)] = inst_49320);

(statearr_49526[(8)] = inst_49321);

(statearr_49526[(9)] = inst_49322);

(statearr_49526[(10)] = inst_49323);

return statearr_49526;
})();
var statearr_49527_49593 = state_49460__$1;
(statearr_49527_49593[(2)] = null);

(statearr_49527_49593[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (45))){
var state_49460__$1 = state_49460;
var statearr_49528_49594 = state_49460__$1;
(statearr_49528_49594[(2)] = null);

(statearr_49528_49594[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (26))){
var inst_49376 = (state_49460[(23)]);
var inst_49373 = (state_49460[(19)]);
var inst_49381 = (state_49460[(24)]);
var inst_49379 = (state_49460[(26)]);
var inst_49377 = (state_49460[(25)]);
var inst_49396 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49398 = (function (){var all_files = inst_49373;
var res_SINGLEQUOTE_ = inst_49376;
var res = inst_49377;
var files_not_loaded = inst_49379;
var dependencies_that_loaded = inst_49381;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49376,inst_49373,inst_49381,inst_49379,inst_49377,inst_49396,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49397){
var map__49529 = p__49397;
var map__49529__$1 = ((((!((map__49529 == null)))?((((map__49529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49529):map__49529);
var namespace = cljs.core.get.call(null,map__49529__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49529__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49376,inst_49373,inst_49381,inst_49379,inst_49377,inst_49396,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49399 = cljs.core.map.call(null,inst_49398,inst_49377);
var inst_49400 = cljs.core.pr_str.call(null,inst_49399);
var inst_49401 = figwheel.client.utils.log.call(null,inst_49400);
var inst_49402 = (function (){var all_files = inst_49373;
var res_SINGLEQUOTE_ = inst_49376;
var res = inst_49377;
var files_not_loaded = inst_49379;
var dependencies_that_loaded = inst_49381;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49376,inst_49373,inst_49381,inst_49379,inst_49377,inst_49396,inst_49398,inst_49399,inst_49400,inst_49401,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49376,inst_49373,inst_49381,inst_49379,inst_49377,inst_49396,inst_49398,inst_49399,inst_49400,inst_49401,state_val_49461,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49403 = setTimeout(inst_49402,(10));
var state_49460__$1 = (function (){var statearr_49531 = state_49460;
(statearr_49531[(33)] = inst_49401);

(statearr_49531[(34)] = inst_49396);

return statearr_49531;
})();
var statearr_49532_49595 = state_49460__$1;
(statearr_49532_49595[(2)] = inst_49403);

(statearr_49532_49595[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (16))){
var state_49460__$1 = state_49460;
var statearr_49533_49596 = state_49460__$1;
(statearr_49533_49596[(2)] = reload_dependents);

(statearr_49533_49596[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (38))){
var inst_49413 = (state_49460[(16)]);
var inst_49431 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49413);
var state_49460__$1 = state_49460;
var statearr_49534_49597 = state_49460__$1;
(statearr_49534_49597[(2)] = inst_49431);

(statearr_49534_49597[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (30))){
var state_49460__$1 = state_49460;
var statearr_49535_49598 = state_49460__$1;
(statearr_49535_49598[(2)] = null);

(statearr_49535_49598[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (10))){
var inst_49333 = (state_49460[(22)]);
var inst_49335 = cljs.core.chunked_seq_QMARK_.call(null,inst_49333);
var state_49460__$1 = state_49460;
if(inst_49335){
var statearr_49536_49599 = state_49460__$1;
(statearr_49536_49599[(1)] = (13));

} else {
var statearr_49537_49600 = state_49460__$1;
(statearr_49537_49600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (18))){
var inst_49367 = (state_49460[(2)]);
var state_49460__$1 = state_49460;
if(cljs.core.truth_(inst_49367)){
var statearr_49538_49601 = state_49460__$1;
(statearr_49538_49601[(1)] = (19));

} else {
var statearr_49539_49602 = state_49460__$1;
(statearr_49539_49602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (42))){
var state_49460__$1 = state_49460;
var statearr_49540_49603 = state_49460__$1;
(statearr_49540_49603[(2)] = null);

(statearr_49540_49603[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (37))){
var inst_49426 = (state_49460[(2)]);
var state_49460__$1 = state_49460;
var statearr_49541_49604 = state_49460__$1;
(statearr_49541_49604[(2)] = inst_49426);

(statearr_49541_49604[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49461 === (8))){
var inst_49333 = (state_49460[(22)]);
var inst_49320 = (state_49460[(7)]);
var inst_49333__$1 = cljs.core.seq.call(null,inst_49320);
var state_49460__$1 = (function (){var statearr_49542 = state_49460;
(statearr_49542[(22)] = inst_49333__$1);

return statearr_49542;
})();
if(inst_49333__$1){
var statearr_49543_49605 = state_49460__$1;
(statearr_49543_49605[(1)] = (10));

} else {
var statearr_49544_49606 = state_49460__$1;
(statearr_49544_49606[(1)] = (11));

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
});})(c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__46740__auto__,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46741__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46741__auto____0 = (function (){
var statearr_49545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49545[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__46741__auto__);

(statearr_49545[(1)] = (1));

return statearr_49545;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46741__auto____1 = (function (state_49460){
while(true){
var ret_value__46742__auto__ = (function (){try{while(true){
var result__46743__auto__ = switch__46740__auto__.call(null,state_49460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46743__auto__;
}
break;
}
}catch (e49546){if((e49546 instanceof Object)){
var ex__46744__auto__ = e49546;
var statearr_49547_49607 = state_49460;
(statearr_49547_49607[(5)] = ex__46744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49608 = state_49460;
state_49460 = G__49608;
continue;
} else {
return ret_value__46742__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__46741__auto__ = function(state_49460){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46741__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46741__auto____1.call(this,state_49460);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46741__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__46741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46741__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46741__auto__;
})()
;})(switch__46740__auto__,c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__46832__auto__ = (function (){var statearr_49548 = f__46831__auto__.call(null);
(statearr_49548[(6)] = c__46830__auto__);

return statearr_49548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46832__auto__);
});})(c__46830__auto__,map__49305,map__49305__$1,opts,before_jsload,on_jsload,reload_dependents,map__49306,map__49306__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__46830__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49611,link){
var map__49612 = p__49611;
var map__49612__$1 = ((((!((map__49612 == null)))?((((map__49612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49612):map__49612);
var file = cljs.core.get.call(null,map__49612__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5290__auto__ = link.href;
if(cljs.core.truth_(temp__5290__auto__)){
var link_href = temp__5290__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5290__auto__,map__49612,map__49612__$1,file){
return (function (p1__49609_SHARP_,p2__49610_SHARP_){
if(cljs.core._EQ_.call(null,p1__49609_SHARP_,p2__49610_SHARP_)){
return p1__49609_SHARP_;
} else {
return false;
}
});})(link_href,temp__5290__auto__,map__49612,map__49612__$1,file))
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
var temp__5290__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49615){
var map__49616 = p__49615;
var map__49616__$1 = ((((!((map__49616 == null)))?((((map__49616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49616):map__49616);
var match_length = cljs.core.get.call(null,map__49616__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49616__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49614_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49614_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49618_SHARP_,p2__49619_SHARP_){
return cljs.core.assoc.call(null,p1__49618_SHARP_,cljs.core.get.call(null,p2__49619_SHARP_,key),p2__49619_SHARP_);
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
var loaded_f_datas_49620 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_49620);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_49620);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49621,p__49622){
var map__49623 = p__49621;
var map__49623__$1 = ((((!((map__49623 == null)))?((((map__49623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49623):map__49623);
var on_cssload = cljs.core.get.call(null,map__49623__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49624 = p__49622;
var map__49624__$1 = ((((!((map__49624 == null)))?((((map__49624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49624):map__49624);
var files_msg = map__49624__$1;
var files = cljs.core.get.call(null,map__49624__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1507757468593
