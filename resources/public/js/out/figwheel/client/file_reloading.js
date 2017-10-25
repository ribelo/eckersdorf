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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49230_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49230_SHARP_));
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
var seq__49231 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49232 = null;
var count__49233 = (0);
var i__49234 = (0);
while(true){
if((i__49234 < count__49233)){
var n = cljs.core._nth.call(null,chunk__49232,i__49234);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49235 = seq__49231;
var G__49236 = chunk__49232;
var G__49237 = count__49233;
var G__49238 = (i__49234 + (1));
seq__49231 = G__49235;
chunk__49232 = G__49236;
count__49233 = G__49237;
i__49234 = G__49238;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__49231);
if(temp__5290__auto__){
var seq__49231__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49231__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__49231__$1);
var G__49239 = cljs.core.chunk_rest.call(null,seq__49231__$1);
var G__49240 = c__31180__auto__;
var G__49241 = cljs.core.count.call(null,c__31180__auto__);
var G__49242 = (0);
seq__49231 = G__49239;
chunk__49232 = G__49240;
count__49233 = G__49241;
i__49234 = G__49242;
continue;
} else {
var n = cljs.core.first.call(null,seq__49231__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49243 = cljs.core.next.call(null,seq__49231__$1);
var G__49244 = null;
var G__49245 = (0);
var G__49246 = (0);
seq__49231 = G__49243;
chunk__49232 = G__49244;
count__49233 = G__49245;
i__49234 = G__49246;
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

var seq__49256_49264 = cljs.core.seq.call(null,deps);
var chunk__49257_49265 = null;
var count__49258_49266 = (0);
var i__49259_49267 = (0);
while(true){
if((i__49259_49267 < count__49258_49266)){
var dep_49268 = cljs.core._nth.call(null,chunk__49257_49265,i__49259_49267);
topo_sort_helper_STAR_.call(null,dep_49268,(depth + (1)),state);

var G__49269 = seq__49256_49264;
var G__49270 = chunk__49257_49265;
var G__49271 = count__49258_49266;
var G__49272 = (i__49259_49267 + (1));
seq__49256_49264 = G__49269;
chunk__49257_49265 = G__49270;
count__49258_49266 = G__49271;
i__49259_49267 = G__49272;
continue;
} else {
var temp__5290__auto___49273 = cljs.core.seq.call(null,seq__49256_49264);
if(temp__5290__auto___49273){
var seq__49256_49274__$1 = temp__5290__auto___49273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49256_49274__$1)){
var c__31180__auto___49275 = cljs.core.chunk_first.call(null,seq__49256_49274__$1);
var G__49276 = cljs.core.chunk_rest.call(null,seq__49256_49274__$1);
var G__49277 = c__31180__auto___49275;
var G__49278 = cljs.core.count.call(null,c__31180__auto___49275);
var G__49279 = (0);
seq__49256_49264 = G__49276;
chunk__49257_49265 = G__49277;
count__49258_49266 = G__49278;
i__49259_49267 = G__49279;
continue;
} else {
var dep_49280 = cljs.core.first.call(null,seq__49256_49274__$1);
topo_sort_helper_STAR_.call(null,dep_49280,(depth + (1)),state);

var G__49281 = cljs.core.next.call(null,seq__49256_49274__$1);
var G__49282 = null;
var G__49283 = (0);
var G__49284 = (0);
seq__49256_49264 = G__49281;
chunk__49257_49265 = G__49282;
count__49258_49266 = G__49283;
i__49259_49267 = G__49284;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49260){
var vec__49261 = p__49260;
var seq__49262 = cljs.core.seq.call(null,vec__49261);
var first__49263 = cljs.core.first.call(null,seq__49262);
var seq__49262__$1 = cljs.core.next.call(null,seq__49262);
var x = first__49263;
var xs = seq__49262__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49261,seq__49262,first__49263,seq__49262__$1,x,xs,get_deps__$1){
return (function (p1__49247_SHARP_){
return clojure.set.difference.call(null,p1__49247_SHARP_,x);
});})(vec__49261,seq__49262,first__49263,seq__49262__$1,x,xs,get_deps__$1))
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
var seq__49285 = cljs.core.seq.call(null,provides);
var chunk__49286 = null;
var count__49287 = (0);
var i__49288 = (0);
while(true){
if((i__49288 < count__49287)){
var prov = cljs.core._nth.call(null,chunk__49286,i__49288);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49289_49297 = cljs.core.seq.call(null,requires);
var chunk__49290_49298 = null;
var count__49291_49299 = (0);
var i__49292_49300 = (0);
while(true){
if((i__49292_49300 < count__49291_49299)){
var req_49301 = cljs.core._nth.call(null,chunk__49290_49298,i__49292_49300);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49301,prov);

var G__49302 = seq__49289_49297;
var G__49303 = chunk__49290_49298;
var G__49304 = count__49291_49299;
var G__49305 = (i__49292_49300 + (1));
seq__49289_49297 = G__49302;
chunk__49290_49298 = G__49303;
count__49291_49299 = G__49304;
i__49292_49300 = G__49305;
continue;
} else {
var temp__5290__auto___49306 = cljs.core.seq.call(null,seq__49289_49297);
if(temp__5290__auto___49306){
var seq__49289_49307__$1 = temp__5290__auto___49306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49289_49307__$1)){
var c__31180__auto___49308 = cljs.core.chunk_first.call(null,seq__49289_49307__$1);
var G__49309 = cljs.core.chunk_rest.call(null,seq__49289_49307__$1);
var G__49310 = c__31180__auto___49308;
var G__49311 = cljs.core.count.call(null,c__31180__auto___49308);
var G__49312 = (0);
seq__49289_49297 = G__49309;
chunk__49290_49298 = G__49310;
count__49291_49299 = G__49311;
i__49292_49300 = G__49312;
continue;
} else {
var req_49313 = cljs.core.first.call(null,seq__49289_49307__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49313,prov);

var G__49314 = cljs.core.next.call(null,seq__49289_49307__$1);
var G__49315 = null;
var G__49316 = (0);
var G__49317 = (0);
seq__49289_49297 = G__49314;
chunk__49290_49298 = G__49315;
count__49291_49299 = G__49316;
i__49292_49300 = G__49317;
continue;
}
} else {
}
}
break;
}

var G__49318 = seq__49285;
var G__49319 = chunk__49286;
var G__49320 = count__49287;
var G__49321 = (i__49288 + (1));
seq__49285 = G__49318;
chunk__49286 = G__49319;
count__49287 = G__49320;
i__49288 = G__49321;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__49285);
if(temp__5290__auto__){
var seq__49285__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49285__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__49285__$1);
var G__49322 = cljs.core.chunk_rest.call(null,seq__49285__$1);
var G__49323 = c__31180__auto__;
var G__49324 = cljs.core.count.call(null,c__31180__auto__);
var G__49325 = (0);
seq__49285 = G__49322;
chunk__49286 = G__49323;
count__49287 = G__49324;
i__49288 = G__49325;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49285__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49293_49326 = cljs.core.seq.call(null,requires);
var chunk__49294_49327 = null;
var count__49295_49328 = (0);
var i__49296_49329 = (0);
while(true){
if((i__49296_49329 < count__49295_49328)){
var req_49330 = cljs.core._nth.call(null,chunk__49294_49327,i__49296_49329);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49330,prov);

var G__49331 = seq__49293_49326;
var G__49332 = chunk__49294_49327;
var G__49333 = count__49295_49328;
var G__49334 = (i__49296_49329 + (1));
seq__49293_49326 = G__49331;
chunk__49294_49327 = G__49332;
count__49295_49328 = G__49333;
i__49296_49329 = G__49334;
continue;
} else {
var temp__5290__auto___49335__$1 = cljs.core.seq.call(null,seq__49293_49326);
if(temp__5290__auto___49335__$1){
var seq__49293_49336__$1 = temp__5290__auto___49335__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49293_49336__$1)){
var c__31180__auto___49337 = cljs.core.chunk_first.call(null,seq__49293_49336__$1);
var G__49338 = cljs.core.chunk_rest.call(null,seq__49293_49336__$1);
var G__49339 = c__31180__auto___49337;
var G__49340 = cljs.core.count.call(null,c__31180__auto___49337);
var G__49341 = (0);
seq__49293_49326 = G__49338;
chunk__49294_49327 = G__49339;
count__49295_49328 = G__49340;
i__49296_49329 = G__49341;
continue;
} else {
var req_49342 = cljs.core.first.call(null,seq__49293_49336__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49342,prov);

var G__49343 = cljs.core.next.call(null,seq__49293_49336__$1);
var G__49344 = null;
var G__49345 = (0);
var G__49346 = (0);
seq__49293_49326 = G__49343;
chunk__49294_49327 = G__49344;
count__49295_49328 = G__49345;
i__49296_49329 = G__49346;
continue;
}
} else {
}
}
break;
}

var G__49347 = cljs.core.next.call(null,seq__49285__$1);
var G__49348 = null;
var G__49349 = (0);
var G__49350 = (0);
seq__49285 = G__49347;
chunk__49286 = G__49348;
count__49287 = G__49349;
i__49288 = G__49350;
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
var seq__49351_49355 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49352_49356 = null;
var count__49353_49357 = (0);
var i__49354_49358 = (0);
while(true){
if((i__49354_49358 < count__49353_49357)){
var ns_49359 = cljs.core._nth.call(null,chunk__49352_49356,i__49354_49358);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49359);

var G__49360 = seq__49351_49355;
var G__49361 = chunk__49352_49356;
var G__49362 = count__49353_49357;
var G__49363 = (i__49354_49358 + (1));
seq__49351_49355 = G__49360;
chunk__49352_49356 = G__49361;
count__49353_49357 = G__49362;
i__49354_49358 = G__49363;
continue;
} else {
var temp__5290__auto___49364 = cljs.core.seq.call(null,seq__49351_49355);
if(temp__5290__auto___49364){
var seq__49351_49365__$1 = temp__5290__auto___49364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49351_49365__$1)){
var c__31180__auto___49366 = cljs.core.chunk_first.call(null,seq__49351_49365__$1);
var G__49367 = cljs.core.chunk_rest.call(null,seq__49351_49365__$1);
var G__49368 = c__31180__auto___49366;
var G__49369 = cljs.core.count.call(null,c__31180__auto___49366);
var G__49370 = (0);
seq__49351_49355 = G__49367;
chunk__49352_49356 = G__49368;
count__49353_49357 = G__49369;
i__49354_49358 = G__49370;
continue;
} else {
var ns_49371 = cljs.core.first.call(null,seq__49351_49365__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49371);

var G__49372 = cljs.core.next.call(null,seq__49351_49365__$1);
var G__49373 = null;
var G__49374 = (0);
var G__49375 = (0);
seq__49351_49355 = G__49372;
chunk__49352_49356 = G__49373;
count__49353_49357 = G__49374;
i__49354_49358 = G__49375;
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
var G__49376__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49377__i = 0, G__49377__a = new Array(arguments.length -  0);
while (G__49377__i < G__49377__a.length) {G__49377__a[G__49377__i] = arguments[G__49377__i + 0]; ++G__49377__i;}
  args = new cljs.core.IndexedSeq(G__49377__a,0,null);
} 
return G__49376__delegate.call(this,args);};
G__49376.cljs$lang$maxFixedArity = 0;
G__49376.cljs$lang$applyTo = (function (arglist__49378){
var args = cljs.core.seq(arglist__49378);
return G__49376__delegate(args);
});
G__49376.cljs$core$IFn$_invoke$arity$variadic = G__49376__delegate;
return G__49376;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__49379_SHARP_,p2__49380_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49379_SHARP_)].join('')),p2__49380_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__49381_SHARP_,p2__49382_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49381_SHARP_)].join(''),p2__49382_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__49383 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__49383.addCallback(((function (G__49383){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__49383))
);

G__49383.addErrback(((function (G__49383){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__49383))
);

return G__49383;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49384 = cljs.core._EQ_;
var expr__49385 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49384.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49385))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__49384,expr__49385){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__49384,expr__49385))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__49384,expr__49385){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49387){if((e49387 instanceof Error)){
var e = e49387;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49387;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__49384,expr__49385))
} else {
if(cljs.core.truth_(pred__49384.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49385))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49384.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__49385))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49384.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49385))){
return ((function (pred__49384,expr__49385){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49388){if((e49388 instanceof Error)){
var e = e49388;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49388;

}
}})());
});
;})(pred__49384,expr__49385))
} else {
return ((function (pred__49384,expr__49385){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49384,expr__49385))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49389,callback){
var map__49390 = p__49389;
var map__49390__$1 = ((((!((map__49390 == null)))?((((map__49390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49390):map__49390);
var file_msg = map__49390__$1;
var request_url = cljs.core.get.call(null,map__49390__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49390,map__49390__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49390,map__49390__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__46922__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto__){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto__){
return (function (state_49414){
var state_val_49415 = (state_49414[(1)]);
if((state_val_49415 === (7))){
var inst_49410 = (state_49414[(2)]);
var state_49414__$1 = state_49414;
var statearr_49416_49433 = state_49414__$1;
(statearr_49416_49433[(2)] = inst_49410);

(statearr_49416_49433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (1))){
var state_49414__$1 = state_49414;
var statearr_49417_49434 = state_49414__$1;
(statearr_49417_49434[(2)] = null);

(statearr_49417_49434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (4))){
var inst_49394 = (state_49414[(7)]);
var inst_49394__$1 = (state_49414[(2)]);
var state_49414__$1 = (function (){var statearr_49418 = state_49414;
(statearr_49418[(7)] = inst_49394__$1);

return statearr_49418;
})();
if(cljs.core.truth_(inst_49394__$1)){
var statearr_49419_49435 = state_49414__$1;
(statearr_49419_49435[(1)] = (5));

} else {
var statearr_49420_49436 = state_49414__$1;
(statearr_49420_49436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (6))){
var state_49414__$1 = state_49414;
var statearr_49421_49437 = state_49414__$1;
(statearr_49421_49437[(2)] = null);

(statearr_49421_49437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (3))){
var inst_49412 = (state_49414[(2)]);
var state_49414__$1 = state_49414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49414__$1,inst_49412);
} else {
if((state_val_49415 === (2))){
var state_49414__$1 = state_49414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49414__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49415 === (11))){
var inst_49406 = (state_49414[(2)]);
var state_49414__$1 = (function (){var statearr_49422 = state_49414;
(statearr_49422[(8)] = inst_49406);

return statearr_49422;
})();
var statearr_49423_49438 = state_49414__$1;
(statearr_49423_49438[(2)] = null);

(statearr_49423_49438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (9))){
var inst_49398 = (state_49414[(9)]);
var inst_49400 = (state_49414[(10)]);
var inst_49402 = inst_49400.call(null,inst_49398);
var state_49414__$1 = state_49414;
var statearr_49424_49439 = state_49414__$1;
(statearr_49424_49439[(2)] = inst_49402);

(statearr_49424_49439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (5))){
var inst_49394 = (state_49414[(7)]);
var inst_49396 = figwheel.client.file_reloading.blocking_load.call(null,inst_49394);
var state_49414__$1 = state_49414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49414__$1,(8),inst_49396);
} else {
if((state_val_49415 === (10))){
var inst_49398 = (state_49414[(9)]);
var inst_49404 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49398);
var state_49414__$1 = state_49414;
var statearr_49425_49440 = state_49414__$1;
(statearr_49425_49440[(2)] = inst_49404);

(statearr_49425_49440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (8))){
var inst_49394 = (state_49414[(7)]);
var inst_49400 = (state_49414[(10)]);
var inst_49398 = (state_49414[(2)]);
var inst_49399 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49400__$1 = cljs.core.get.call(null,inst_49399,inst_49394);
var state_49414__$1 = (function (){var statearr_49426 = state_49414;
(statearr_49426[(9)] = inst_49398);

(statearr_49426[(10)] = inst_49400__$1);

return statearr_49426;
})();
if(cljs.core.truth_(inst_49400__$1)){
var statearr_49427_49441 = state_49414__$1;
(statearr_49427_49441[(1)] = (9));

} else {
var statearr_49428_49442 = state_49414__$1;
(statearr_49428_49442[(1)] = (10));

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
});})(c__46922__auto__))
;
return ((function (switch__46832__auto__,c__46922__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__46833__auto__ = null;
var figwheel$client$file_reloading$state_machine__46833__auto____0 = (function (){
var statearr_49429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49429[(0)] = figwheel$client$file_reloading$state_machine__46833__auto__);

(statearr_49429[(1)] = (1));

return statearr_49429;
});
var figwheel$client$file_reloading$state_machine__46833__auto____1 = (function (state_49414){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_49414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e49430){if((e49430 instanceof Object)){
var ex__46836__auto__ = e49430;
var statearr_49431_49443 = state_49414;
(statearr_49431_49443[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49444 = state_49414;
state_49414 = G__49444;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__46833__auto__ = function(state_49414){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__46833__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__46833__auto____1.call(this,state_49414);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__46833__auto____0;
figwheel$client$file_reloading$state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__46833__auto____1;
return figwheel$client$file_reloading$state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto__))
})();
var state__46924__auto__ = (function (){var statearr_49432 = f__46923__auto__.call(null);
(statearr_49432[(6)] = c__46922__auto__);

return statearr_49432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto__))
);

return c__46922__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49445,callback){
var map__49446 = p__49445;
var map__49446__$1 = ((((!((map__49446 == null)))?((((map__49446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49446):map__49446);
var file_msg = map__49446__$1;
var namespace = cljs.core.get.call(null,map__49446__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49446,map__49446__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49446,map__49446__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49448){
var map__49449 = p__49448;
var map__49449__$1 = ((((!((map__49449 == null)))?((((map__49449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49449):map__49449);
var file_msg = map__49449__$1;
var namespace = cljs.core.get.call(null,map__49449__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49451){
var map__49452 = p__49451;
var map__49452__$1 = ((((!((map__49452 == null)))?((((map__49452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49452):map__49452);
var file_msg = map__49452__$1;
var namespace = cljs.core.get.call(null,map__49452__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49454,callback){
var map__49455 = p__49454;
var map__49455__$1 = ((((!((map__49455 == null)))?((((map__49455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49455):map__49455);
var file_msg = map__49455__$1;
var request_url = cljs.core.get.call(null,map__49455__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49455__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__46922__auto___49505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto___49505,out){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto___49505,out){
return (function (state_49490){
var state_val_49491 = (state_49490[(1)]);
if((state_val_49491 === (1))){
var inst_49464 = cljs.core.seq.call(null,files);
var inst_49465 = cljs.core.first.call(null,inst_49464);
var inst_49466 = cljs.core.next.call(null,inst_49464);
var inst_49467 = files;
var state_49490__$1 = (function (){var statearr_49492 = state_49490;
(statearr_49492[(7)] = inst_49465);

(statearr_49492[(8)] = inst_49466);

(statearr_49492[(9)] = inst_49467);

return statearr_49492;
})();
var statearr_49493_49506 = state_49490__$1;
(statearr_49493_49506[(2)] = null);

(statearr_49493_49506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49491 === (2))){
var inst_49467 = (state_49490[(9)]);
var inst_49473 = (state_49490[(10)]);
var inst_49472 = cljs.core.seq.call(null,inst_49467);
var inst_49473__$1 = cljs.core.first.call(null,inst_49472);
var inst_49474 = cljs.core.next.call(null,inst_49472);
var inst_49475 = (inst_49473__$1 == null);
var inst_49476 = cljs.core.not.call(null,inst_49475);
var state_49490__$1 = (function (){var statearr_49494 = state_49490;
(statearr_49494[(11)] = inst_49474);

(statearr_49494[(10)] = inst_49473__$1);

return statearr_49494;
})();
if(inst_49476){
var statearr_49495_49507 = state_49490__$1;
(statearr_49495_49507[(1)] = (4));

} else {
var statearr_49496_49508 = state_49490__$1;
(statearr_49496_49508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49491 === (3))){
var inst_49488 = (state_49490[(2)]);
var state_49490__$1 = state_49490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49490__$1,inst_49488);
} else {
if((state_val_49491 === (4))){
var inst_49473 = (state_49490[(10)]);
var inst_49478 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49473);
var state_49490__$1 = state_49490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49490__$1,(7),inst_49478);
} else {
if((state_val_49491 === (5))){
var inst_49484 = cljs.core.async.close_BANG_.call(null,out);
var state_49490__$1 = state_49490;
var statearr_49497_49509 = state_49490__$1;
(statearr_49497_49509[(2)] = inst_49484);

(statearr_49497_49509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49491 === (6))){
var inst_49486 = (state_49490[(2)]);
var state_49490__$1 = state_49490;
var statearr_49498_49510 = state_49490__$1;
(statearr_49498_49510[(2)] = inst_49486);

(statearr_49498_49510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49491 === (7))){
var inst_49474 = (state_49490[(11)]);
var inst_49480 = (state_49490[(2)]);
var inst_49481 = cljs.core.async.put_BANG_.call(null,out,inst_49480);
var inst_49467 = inst_49474;
var state_49490__$1 = (function (){var statearr_49499 = state_49490;
(statearr_49499[(9)] = inst_49467);

(statearr_49499[(12)] = inst_49481);

return statearr_49499;
})();
var statearr_49500_49511 = state_49490__$1;
(statearr_49500_49511[(2)] = null);

(statearr_49500_49511[(1)] = (2));


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
});})(c__46922__auto___49505,out))
;
return ((function (switch__46832__auto__,c__46922__auto___49505,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46833__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46833__auto____0 = (function (){
var statearr_49501 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49501[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46833__auto__);

(statearr_49501[(1)] = (1));

return statearr_49501;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46833__auto____1 = (function (state_49490){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_49490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e49502){if((e49502 instanceof Object)){
var ex__46836__auto__ = e49502;
var statearr_49503_49512 = state_49490;
(statearr_49503_49512[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49513 = state_49490;
state_49490 = G__49513;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46833__auto__ = function(state_49490){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46833__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46833__auto____1.call(this,state_49490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46833__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46833__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto___49505,out))
})();
var state__46924__auto__ = (function (){var statearr_49504 = f__46923__auto__.call(null);
(statearr_49504[(6)] = c__46922__auto___49505);

return statearr_49504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto___49505,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49514,opts){
var map__49515 = p__49514;
var map__49515__$1 = ((((!((map__49515 == null)))?((((map__49515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49515):map__49515);
var eval_body = cljs.core.get.call(null,map__49515__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49515__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e49517){var e = e49517;
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
return (function (p1__49518_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49518_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__49519){
var vec__49520 = p__49519;
var k = cljs.core.nth.call(null,vec__49520,(0),null);
var v = cljs.core.nth.call(null,vec__49520,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49523){
var vec__49524 = p__49523;
var k = cljs.core.nth.call(null,vec__49524,(0),null);
var v = cljs.core.nth.call(null,vec__49524,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49530,p__49531){
var map__49532 = p__49530;
var map__49532__$1 = ((((!((map__49532 == null)))?((((map__49532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49532):map__49532);
var opts = map__49532__$1;
var before_jsload = cljs.core.get.call(null,map__49532__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49532__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49532__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49533 = p__49531;
var map__49533__$1 = ((((!((map__49533 == null)))?((((map__49533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49533):map__49533);
var msg = map__49533__$1;
var files = cljs.core.get.call(null,map__49533__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49533__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49533__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__46922__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__46923__auto__ = (function (){var switch__46832__auto__ = ((function (c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49687){
var state_val_49688 = (state_49687[(1)]);
if((state_val_49688 === (7))){
var inst_49550 = (state_49687[(7)]);
var inst_49549 = (state_49687[(8)]);
var inst_49548 = (state_49687[(9)]);
var inst_49547 = (state_49687[(10)]);
var inst_49555 = cljs.core._nth.call(null,inst_49548,inst_49550);
var inst_49556 = figwheel.client.file_reloading.eval_body.call(null,inst_49555,opts);
var inst_49557 = (inst_49550 + (1));
var tmp49689 = inst_49549;
var tmp49690 = inst_49548;
var tmp49691 = inst_49547;
var inst_49547__$1 = tmp49691;
var inst_49548__$1 = tmp49690;
var inst_49549__$1 = tmp49689;
var inst_49550__$1 = inst_49557;
var state_49687__$1 = (function (){var statearr_49692 = state_49687;
(statearr_49692[(11)] = inst_49556);

(statearr_49692[(7)] = inst_49550__$1);

(statearr_49692[(8)] = inst_49549__$1);

(statearr_49692[(9)] = inst_49548__$1);

(statearr_49692[(10)] = inst_49547__$1);

return statearr_49692;
})();
var statearr_49693_49776 = state_49687__$1;
(statearr_49693_49776[(2)] = null);

(statearr_49693_49776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (20))){
var inst_49590 = (state_49687[(12)]);
var inst_49598 = figwheel.client.file_reloading.sort_files.call(null,inst_49590);
var state_49687__$1 = state_49687;
var statearr_49694_49777 = state_49687__$1;
(statearr_49694_49777[(2)] = inst_49598);

(statearr_49694_49777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (27))){
var state_49687__$1 = state_49687;
var statearr_49695_49778 = state_49687__$1;
(statearr_49695_49778[(2)] = null);

(statearr_49695_49778[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (1))){
var inst_49539 = (state_49687[(13)]);
var inst_49536 = before_jsload.call(null,files);
var inst_49537 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49538 = (function (){return ((function (inst_49539,inst_49536,inst_49537,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49527_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49527_SHARP_);
});
;})(inst_49539,inst_49536,inst_49537,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49539__$1 = cljs.core.filter.call(null,inst_49538,files);
var inst_49540 = cljs.core.not_empty.call(null,inst_49539__$1);
var state_49687__$1 = (function (){var statearr_49696 = state_49687;
(statearr_49696[(13)] = inst_49539__$1);

(statearr_49696[(14)] = inst_49537);

(statearr_49696[(15)] = inst_49536);

return statearr_49696;
})();
if(cljs.core.truth_(inst_49540)){
var statearr_49697_49779 = state_49687__$1;
(statearr_49697_49779[(1)] = (2));

} else {
var statearr_49698_49780 = state_49687__$1;
(statearr_49698_49780[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (24))){
var state_49687__$1 = state_49687;
var statearr_49699_49781 = state_49687__$1;
(statearr_49699_49781[(2)] = null);

(statearr_49699_49781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (39))){
var inst_49640 = (state_49687[(16)]);
var state_49687__$1 = state_49687;
var statearr_49700_49782 = state_49687__$1;
(statearr_49700_49782[(2)] = inst_49640);

(statearr_49700_49782[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (46))){
var inst_49682 = (state_49687[(2)]);
var state_49687__$1 = state_49687;
var statearr_49701_49783 = state_49687__$1;
(statearr_49701_49783[(2)] = inst_49682);

(statearr_49701_49783[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (4))){
var inst_49584 = (state_49687[(2)]);
var inst_49585 = cljs.core.List.EMPTY;
var inst_49586 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49585);
var inst_49587 = (function (){return ((function (inst_49584,inst_49585,inst_49586,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49528_SHARP_){
var and__30237__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49528_SHARP_);
if(cljs.core.truth_(and__30237__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49528_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49528_SHARP_)));
} else {
return and__30237__auto__;
}
});
;})(inst_49584,inst_49585,inst_49586,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49588 = cljs.core.filter.call(null,inst_49587,files);
var inst_49589 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49590 = cljs.core.concat.call(null,inst_49588,inst_49589);
var state_49687__$1 = (function (){var statearr_49702 = state_49687;
(statearr_49702[(12)] = inst_49590);

(statearr_49702[(17)] = inst_49584);

(statearr_49702[(18)] = inst_49586);

return statearr_49702;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49703_49784 = state_49687__$1;
(statearr_49703_49784[(1)] = (16));

} else {
var statearr_49704_49785 = state_49687__$1;
(statearr_49704_49785[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (15))){
var inst_49574 = (state_49687[(2)]);
var state_49687__$1 = state_49687;
var statearr_49705_49786 = state_49687__$1;
(statearr_49705_49786[(2)] = inst_49574);

(statearr_49705_49786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (21))){
var inst_49600 = (state_49687[(19)]);
var inst_49600__$1 = (state_49687[(2)]);
var inst_49601 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49600__$1);
var state_49687__$1 = (function (){var statearr_49706 = state_49687;
(statearr_49706[(19)] = inst_49600__$1);

return statearr_49706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49687__$1,(22),inst_49601);
} else {
if((state_val_49688 === (31))){
var inst_49685 = (state_49687[(2)]);
var state_49687__$1 = state_49687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49687__$1,inst_49685);
} else {
if((state_val_49688 === (32))){
var inst_49640 = (state_49687[(16)]);
var inst_49645 = inst_49640.cljs$lang$protocol_mask$partition0$;
var inst_49646 = (inst_49645 & (64));
var inst_49647 = inst_49640.cljs$core$ISeq$;
var inst_49648 = (cljs.core.PROTOCOL_SENTINEL === inst_49647);
var inst_49649 = (inst_49646) || (inst_49648);
var state_49687__$1 = state_49687;
if(cljs.core.truth_(inst_49649)){
var statearr_49707_49787 = state_49687__$1;
(statearr_49707_49787[(1)] = (35));

} else {
var statearr_49708_49788 = state_49687__$1;
(statearr_49708_49788[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (40))){
var inst_49662 = (state_49687[(20)]);
var inst_49661 = (state_49687[(2)]);
var inst_49662__$1 = cljs.core.get.call(null,inst_49661,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49663 = cljs.core.get.call(null,inst_49661,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49664 = cljs.core.not_empty.call(null,inst_49662__$1);
var state_49687__$1 = (function (){var statearr_49709 = state_49687;
(statearr_49709[(21)] = inst_49663);

(statearr_49709[(20)] = inst_49662__$1);

return statearr_49709;
})();
if(cljs.core.truth_(inst_49664)){
var statearr_49710_49789 = state_49687__$1;
(statearr_49710_49789[(1)] = (41));

} else {
var statearr_49711_49790 = state_49687__$1;
(statearr_49711_49790[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (33))){
var state_49687__$1 = state_49687;
var statearr_49712_49791 = state_49687__$1;
(statearr_49712_49791[(2)] = false);

(statearr_49712_49791[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (13))){
var inst_49560 = (state_49687[(22)]);
var inst_49564 = cljs.core.chunk_first.call(null,inst_49560);
var inst_49565 = cljs.core.chunk_rest.call(null,inst_49560);
var inst_49566 = cljs.core.count.call(null,inst_49564);
var inst_49547 = inst_49565;
var inst_49548 = inst_49564;
var inst_49549 = inst_49566;
var inst_49550 = (0);
var state_49687__$1 = (function (){var statearr_49713 = state_49687;
(statearr_49713[(7)] = inst_49550);

(statearr_49713[(8)] = inst_49549);

(statearr_49713[(9)] = inst_49548);

(statearr_49713[(10)] = inst_49547);

return statearr_49713;
})();
var statearr_49714_49792 = state_49687__$1;
(statearr_49714_49792[(2)] = null);

(statearr_49714_49792[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (22))){
var inst_49600 = (state_49687[(19)]);
var inst_49604 = (state_49687[(23)]);
var inst_49608 = (state_49687[(24)]);
var inst_49603 = (state_49687[(25)]);
var inst_49603__$1 = (state_49687[(2)]);
var inst_49604__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49603__$1);
var inst_49605 = (function (){var all_files = inst_49600;
var res_SINGLEQUOTE_ = inst_49603__$1;
var res = inst_49604__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49600,inst_49604,inst_49608,inst_49603,inst_49603__$1,inst_49604__$1,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49529_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49529_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49600,inst_49604,inst_49608,inst_49603,inst_49603__$1,inst_49604__$1,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49606 = cljs.core.filter.call(null,inst_49605,inst_49603__$1);
var inst_49607 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49608__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49607);
var inst_49609 = cljs.core.not_empty.call(null,inst_49608__$1);
var state_49687__$1 = (function (){var statearr_49715 = state_49687;
(statearr_49715[(26)] = inst_49606);

(statearr_49715[(23)] = inst_49604__$1);

(statearr_49715[(24)] = inst_49608__$1);

(statearr_49715[(25)] = inst_49603__$1);

return statearr_49715;
})();
if(cljs.core.truth_(inst_49609)){
var statearr_49716_49793 = state_49687__$1;
(statearr_49716_49793[(1)] = (23));

} else {
var statearr_49717_49794 = state_49687__$1;
(statearr_49717_49794[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (36))){
var state_49687__$1 = state_49687;
var statearr_49718_49795 = state_49687__$1;
(statearr_49718_49795[(2)] = false);

(statearr_49718_49795[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (41))){
var inst_49662 = (state_49687[(20)]);
var inst_49666 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49667 = cljs.core.map.call(null,inst_49666,inst_49662);
var inst_49668 = cljs.core.pr_str.call(null,inst_49667);
var inst_49669 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49668)].join('');
var inst_49670 = figwheel.client.utils.log.call(null,inst_49669);
var state_49687__$1 = state_49687;
var statearr_49719_49796 = state_49687__$1;
(statearr_49719_49796[(2)] = inst_49670);

(statearr_49719_49796[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (43))){
var inst_49663 = (state_49687[(21)]);
var inst_49673 = (state_49687[(2)]);
var inst_49674 = cljs.core.not_empty.call(null,inst_49663);
var state_49687__$1 = (function (){var statearr_49720 = state_49687;
(statearr_49720[(27)] = inst_49673);

return statearr_49720;
})();
if(cljs.core.truth_(inst_49674)){
var statearr_49721_49797 = state_49687__$1;
(statearr_49721_49797[(1)] = (44));

} else {
var statearr_49722_49798 = state_49687__$1;
(statearr_49722_49798[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (29))){
var inst_49606 = (state_49687[(26)]);
var inst_49600 = (state_49687[(19)]);
var inst_49640 = (state_49687[(16)]);
var inst_49604 = (state_49687[(23)]);
var inst_49608 = (state_49687[(24)]);
var inst_49603 = (state_49687[(25)]);
var inst_49636 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49639 = (function (){var all_files = inst_49600;
var res_SINGLEQUOTE_ = inst_49603;
var res = inst_49604;
var files_not_loaded = inst_49606;
var dependencies_that_loaded = inst_49608;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49606,inst_49600,inst_49640,inst_49604,inst_49608,inst_49603,inst_49636,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49638){
var map__49723 = p__49638;
var map__49723__$1 = ((((!((map__49723 == null)))?((((map__49723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49723):map__49723);
var namespace = cljs.core.get.call(null,map__49723__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49606,inst_49600,inst_49640,inst_49604,inst_49608,inst_49603,inst_49636,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49640__$1 = cljs.core.group_by.call(null,inst_49639,inst_49606);
var inst_49642 = (inst_49640__$1 == null);
var inst_49643 = cljs.core.not.call(null,inst_49642);
var state_49687__$1 = (function (){var statearr_49725 = state_49687;
(statearr_49725[(16)] = inst_49640__$1);

(statearr_49725[(28)] = inst_49636);

return statearr_49725;
})();
if(inst_49643){
var statearr_49726_49799 = state_49687__$1;
(statearr_49726_49799[(1)] = (32));

} else {
var statearr_49727_49800 = state_49687__$1;
(statearr_49727_49800[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (44))){
var inst_49663 = (state_49687[(21)]);
var inst_49676 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49663);
var inst_49677 = cljs.core.pr_str.call(null,inst_49676);
var inst_49678 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49677)].join('');
var inst_49679 = figwheel.client.utils.log.call(null,inst_49678);
var state_49687__$1 = state_49687;
var statearr_49728_49801 = state_49687__$1;
(statearr_49728_49801[(2)] = inst_49679);

(statearr_49728_49801[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (6))){
var inst_49581 = (state_49687[(2)]);
var state_49687__$1 = state_49687;
var statearr_49729_49802 = state_49687__$1;
(statearr_49729_49802[(2)] = inst_49581);

(statearr_49729_49802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (28))){
var inst_49606 = (state_49687[(26)]);
var inst_49633 = (state_49687[(2)]);
var inst_49634 = cljs.core.not_empty.call(null,inst_49606);
var state_49687__$1 = (function (){var statearr_49730 = state_49687;
(statearr_49730[(29)] = inst_49633);

return statearr_49730;
})();
if(cljs.core.truth_(inst_49634)){
var statearr_49731_49803 = state_49687__$1;
(statearr_49731_49803[(1)] = (29));

} else {
var statearr_49732_49804 = state_49687__$1;
(statearr_49732_49804[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (25))){
var inst_49604 = (state_49687[(23)]);
var inst_49620 = (state_49687[(2)]);
var inst_49621 = cljs.core.not_empty.call(null,inst_49604);
var state_49687__$1 = (function (){var statearr_49733 = state_49687;
(statearr_49733[(30)] = inst_49620);

return statearr_49733;
})();
if(cljs.core.truth_(inst_49621)){
var statearr_49734_49805 = state_49687__$1;
(statearr_49734_49805[(1)] = (26));

} else {
var statearr_49735_49806 = state_49687__$1;
(statearr_49735_49806[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (34))){
var inst_49656 = (state_49687[(2)]);
var state_49687__$1 = state_49687;
if(cljs.core.truth_(inst_49656)){
var statearr_49736_49807 = state_49687__$1;
(statearr_49736_49807[(1)] = (38));

} else {
var statearr_49737_49808 = state_49687__$1;
(statearr_49737_49808[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (17))){
var state_49687__$1 = state_49687;
var statearr_49738_49809 = state_49687__$1;
(statearr_49738_49809[(2)] = recompile_dependents);

(statearr_49738_49809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (3))){
var state_49687__$1 = state_49687;
var statearr_49739_49810 = state_49687__$1;
(statearr_49739_49810[(2)] = null);

(statearr_49739_49810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (12))){
var inst_49577 = (state_49687[(2)]);
var state_49687__$1 = state_49687;
var statearr_49740_49811 = state_49687__$1;
(statearr_49740_49811[(2)] = inst_49577);

(statearr_49740_49811[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (2))){
var inst_49539 = (state_49687[(13)]);
var inst_49546 = cljs.core.seq.call(null,inst_49539);
var inst_49547 = inst_49546;
var inst_49548 = null;
var inst_49549 = (0);
var inst_49550 = (0);
var state_49687__$1 = (function (){var statearr_49741 = state_49687;
(statearr_49741[(7)] = inst_49550);

(statearr_49741[(8)] = inst_49549);

(statearr_49741[(9)] = inst_49548);

(statearr_49741[(10)] = inst_49547);

return statearr_49741;
})();
var statearr_49742_49812 = state_49687__$1;
(statearr_49742_49812[(2)] = null);

(statearr_49742_49812[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (23))){
var inst_49606 = (state_49687[(26)]);
var inst_49600 = (state_49687[(19)]);
var inst_49604 = (state_49687[(23)]);
var inst_49608 = (state_49687[(24)]);
var inst_49603 = (state_49687[(25)]);
var inst_49611 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49613 = (function (){var all_files = inst_49600;
var res_SINGLEQUOTE_ = inst_49603;
var res = inst_49604;
var files_not_loaded = inst_49606;
var dependencies_that_loaded = inst_49608;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49606,inst_49600,inst_49604,inst_49608,inst_49603,inst_49611,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49612){
var map__49743 = p__49612;
var map__49743__$1 = ((((!((map__49743 == null)))?((((map__49743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49743):map__49743);
var request_url = cljs.core.get.call(null,map__49743__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49606,inst_49600,inst_49604,inst_49608,inst_49603,inst_49611,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49614 = cljs.core.reverse.call(null,inst_49608);
var inst_49615 = cljs.core.map.call(null,inst_49613,inst_49614);
var inst_49616 = cljs.core.pr_str.call(null,inst_49615);
var inst_49617 = figwheel.client.utils.log.call(null,inst_49616);
var state_49687__$1 = (function (){var statearr_49745 = state_49687;
(statearr_49745[(31)] = inst_49611);

return statearr_49745;
})();
var statearr_49746_49813 = state_49687__$1;
(statearr_49746_49813[(2)] = inst_49617);

(statearr_49746_49813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (35))){
var state_49687__$1 = state_49687;
var statearr_49747_49814 = state_49687__$1;
(statearr_49747_49814[(2)] = true);

(statearr_49747_49814[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (19))){
var inst_49590 = (state_49687[(12)]);
var inst_49596 = figwheel.client.file_reloading.expand_files.call(null,inst_49590);
var state_49687__$1 = state_49687;
var statearr_49748_49815 = state_49687__$1;
(statearr_49748_49815[(2)] = inst_49596);

(statearr_49748_49815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (11))){
var state_49687__$1 = state_49687;
var statearr_49749_49816 = state_49687__$1;
(statearr_49749_49816[(2)] = null);

(statearr_49749_49816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (9))){
var inst_49579 = (state_49687[(2)]);
var state_49687__$1 = state_49687;
var statearr_49750_49817 = state_49687__$1;
(statearr_49750_49817[(2)] = inst_49579);

(statearr_49750_49817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (5))){
var inst_49550 = (state_49687[(7)]);
var inst_49549 = (state_49687[(8)]);
var inst_49552 = (inst_49550 < inst_49549);
var inst_49553 = inst_49552;
var state_49687__$1 = state_49687;
if(cljs.core.truth_(inst_49553)){
var statearr_49751_49818 = state_49687__$1;
(statearr_49751_49818[(1)] = (7));

} else {
var statearr_49752_49819 = state_49687__$1;
(statearr_49752_49819[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (14))){
var inst_49560 = (state_49687[(22)]);
var inst_49569 = cljs.core.first.call(null,inst_49560);
var inst_49570 = figwheel.client.file_reloading.eval_body.call(null,inst_49569,opts);
var inst_49571 = cljs.core.next.call(null,inst_49560);
var inst_49547 = inst_49571;
var inst_49548 = null;
var inst_49549 = (0);
var inst_49550 = (0);
var state_49687__$1 = (function (){var statearr_49753 = state_49687;
(statearr_49753[(7)] = inst_49550);

(statearr_49753[(8)] = inst_49549);

(statearr_49753[(9)] = inst_49548);

(statearr_49753[(32)] = inst_49570);

(statearr_49753[(10)] = inst_49547);

return statearr_49753;
})();
var statearr_49754_49820 = state_49687__$1;
(statearr_49754_49820[(2)] = null);

(statearr_49754_49820[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (45))){
var state_49687__$1 = state_49687;
var statearr_49755_49821 = state_49687__$1;
(statearr_49755_49821[(2)] = null);

(statearr_49755_49821[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (26))){
var inst_49606 = (state_49687[(26)]);
var inst_49600 = (state_49687[(19)]);
var inst_49604 = (state_49687[(23)]);
var inst_49608 = (state_49687[(24)]);
var inst_49603 = (state_49687[(25)]);
var inst_49623 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49625 = (function (){var all_files = inst_49600;
var res_SINGLEQUOTE_ = inst_49603;
var res = inst_49604;
var files_not_loaded = inst_49606;
var dependencies_that_loaded = inst_49608;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49606,inst_49600,inst_49604,inst_49608,inst_49603,inst_49623,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49624){
var map__49756 = p__49624;
var map__49756__$1 = ((((!((map__49756 == null)))?((((map__49756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49756):map__49756);
var namespace = cljs.core.get.call(null,map__49756__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49756__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49606,inst_49600,inst_49604,inst_49608,inst_49603,inst_49623,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49626 = cljs.core.map.call(null,inst_49625,inst_49604);
var inst_49627 = cljs.core.pr_str.call(null,inst_49626);
var inst_49628 = figwheel.client.utils.log.call(null,inst_49627);
var inst_49629 = (function (){var all_files = inst_49600;
var res_SINGLEQUOTE_ = inst_49603;
var res = inst_49604;
var files_not_loaded = inst_49606;
var dependencies_that_loaded = inst_49608;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49606,inst_49600,inst_49604,inst_49608,inst_49603,inst_49623,inst_49625,inst_49626,inst_49627,inst_49628,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49606,inst_49600,inst_49604,inst_49608,inst_49603,inst_49623,inst_49625,inst_49626,inst_49627,inst_49628,state_val_49688,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49630 = setTimeout(inst_49629,(10));
var state_49687__$1 = (function (){var statearr_49758 = state_49687;
(statearr_49758[(33)] = inst_49623);

(statearr_49758[(34)] = inst_49628);

return statearr_49758;
})();
var statearr_49759_49822 = state_49687__$1;
(statearr_49759_49822[(2)] = inst_49630);

(statearr_49759_49822[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (16))){
var state_49687__$1 = state_49687;
var statearr_49760_49823 = state_49687__$1;
(statearr_49760_49823[(2)] = reload_dependents);

(statearr_49760_49823[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (38))){
var inst_49640 = (state_49687[(16)]);
var inst_49658 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49640);
var state_49687__$1 = state_49687;
var statearr_49761_49824 = state_49687__$1;
(statearr_49761_49824[(2)] = inst_49658);

(statearr_49761_49824[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (30))){
var state_49687__$1 = state_49687;
var statearr_49762_49825 = state_49687__$1;
(statearr_49762_49825[(2)] = null);

(statearr_49762_49825[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (10))){
var inst_49560 = (state_49687[(22)]);
var inst_49562 = cljs.core.chunked_seq_QMARK_.call(null,inst_49560);
var state_49687__$1 = state_49687;
if(inst_49562){
var statearr_49763_49826 = state_49687__$1;
(statearr_49763_49826[(1)] = (13));

} else {
var statearr_49764_49827 = state_49687__$1;
(statearr_49764_49827[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (18))){
var inst_49594 = (state_49687[(2)]);
var state_49687__$1 = state_49687;
if(cljs.core.truth_(inst_49594)){
var statearr_49765_49828 = state_49687__$1;
(statearr_49765_49828[(1)] = (19));

} else {
var statearr_49766_49829 = state_49687__$1;
(statearr_49766_49829[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (42))){
var state_49687__$1 = state_49687;
var statearr_49767_49830 = state_49687__$1;
(statearr_49767_49830[(2)] = null);

(statearr_49767_49830[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (37))){
var inst_49653 = (state_49687[(2)]);
var state_49687__$1 = state_49687;
var statearr_49768_49831 = state_49687__$1;
(statearr_49768_49831[(2)] = inst_49653);

(statearr_49768_49831[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (8))){
var inst_49560 = (state_49687[(22)]);
var inst_49547 = (state_49687[(10)]);
var inst_49560__$1 = cljs.core.seq.call(null,inst_49547);
var state_49687__$1 = (function (){var statearr_49769 = state_49687;
(statearr_49769[(22)] = inst_49560__$1);

return statearr_49769;
})();
if(inst_49560__$1){
var statearr_49770_49832 = state_49687__$1;
(statearr_49770_49832[(1)] = (10));

} else {
var statearr_49771_49833 = state_49687__$1;
(statearr_49771_49833[(1)] = (11));

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
});})(c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__46832__auto__,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46833__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46833__auto____0 = (function (){
var statearr_49772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49772[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__46833__auto__);

(statearr_49772[(1)] = (1));

return statearr_49772;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46833__auto____1 = (function (state_49687){
while(true){
var ret_value__46834__auto__ = (function (){try{while(true){
var result__46835__auto__ = switch__46832__auto__.call(null,state_49687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46835__auto__;
}
break;
}
}catch (e49773){if((e49773 instanceof Object)){
var ex__46836__auto__ = e49773;
var statearr_49774_49834 = state_49687;
(statearr_49774_49834[(5)] = ex__46836__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49835 = state_49687;
state_49687 = G__49835;
continue;
} else {
return ret_value__46834__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__46833__auto__ = function(state_49687){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46833__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46833__auto____1.call(this,state_49687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46833__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__46833__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46833__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46833__auto__;
})()
;})(switch__46832__auto__,c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__46924__auto__ = (function (){var statearr_49775 = f__46923__auto__.call(null);
(statearr_49775[(6)] = c__46922__auto__);

return statearr_49775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46924__auto__);
});})(c__46922__auto__,map__49532,map__49532__$1,opts,before_jsload,on_jsload,reload_dependents,map__49533,map__49533__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__46922__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49838,link){
var map__49839 = p__49838;
var map__49839__$1 = ((((!((map__49839 == null)))?((((map__49839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49839):map__49839);
var file = cljs.core.get.call(null,map__49839__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5290__auto__ = link.href;
if(cljs.core.truth_(temp__5290__auto__)){
var link_href = temp__5290__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5290__auto__,map__49839,map__49839__$1,file){
return (function (p1__49836_SHARP_,p2__49837_SHARP_){
if(cljs.core._EQ_.call(null,p1__49836_SHARP_,p2__49837_SHARP_)){
return p1__49836_SHARP_;
} else {
return false;
}
});})(link_href,temp__5290__auto__,map__49839,map__49839__$1,file))
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
var temp__5290__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49842){
var map__49843 = p__49842;
var map__49843__$1 = ((((!((map__49843 == null)))?((((map__49843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49843):map__49843);
var match_length = cljs.core.get.call(null,map__49843__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49843__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49841_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49841_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49845_SHARP_,p2__49846_SHARP_){
return cljs.core.assoc.call(null,p1__49845_SHARP_,cljs.core.get.call(null,p2__49846_SHARP_,key),p2__49846_SHARP_);
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
var loaded_f_datas_49847 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_49847);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_49847);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49848,p__49849){
var map__49850 = p__49848;
var map__49850__$1 = ((((!((map__49850 == null)))?((((map__49850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49850):map__49850);
var on_cssload = cljs.core.get.call(null,map__49850__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49851 = p__49849;
var map__49851__$1 = ((((!((map__49851 == null)))?((((map__49851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49851):map__49851);
var files_msg = map__49851__$1;
var files = cljs.core.get.call(null,map__49851__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1508862163151
