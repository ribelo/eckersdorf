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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__53200_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__53200_SHARP_));
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
var seq__53201 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__53202 = null;
var count__53203 = (0);
var i__53204 = (0);
while(true){
if((i__53204 < count__53203)){
var n = cljs.core._nth.call(null,chunk__53202,i__53204);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__53205 = seq__53201;
var G__53206 = chunk__53202;
var G__53207 = count__53203;
var G__53208 = (i__53204 + (1));
seq__53201 = G__53205;
chunk__53202 = G__53206;
count__53203 = G__53207;
i__53204 = G__53208;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__53201);
if(temp__5290__auto__){
var seq__53201__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53201__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__53201__$1);
var G__53209 = cljs.core.chunk_rest.call(null,seq__53201__$1);
var G__53210 = c__31180__auto__;
var G__53211 = cljs.core.count.call(null,c__31180__auto__);
var G__53212 = (0);
seq__53201 = G__53209;
chunk__53202 = G__53210;
count__53203 = G__53211;
i__53204 = G__53212;
continue;
} else {
var n = cljs.core.first.call(null,seq__53201__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__53213 = cljs.core.next.call(null,seq__53201__$1);
var G__53214 = null;
var G__53215 = (0);
var G__53216 = (0);
seq__53201 = G__53213;
chunk__53202 = G__53214;
count__53203 = G__53215;
i__53204 = G__53216;
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

var seq__53226_53234 = cljs.core.seq.call(null,deps);
var chunk__53227_53235 = null;
var count__53228_53236 = (0);
var i__53229_53237 = (0);
while(true){
if((i__53229_53237 < count__53228_53236)){
var dep_53238 = cljs.core._nth.call(null,chunk__53227_53235,i__53229_53237);
topo_sort_helper_STAR_.call(null,dep_53238,(depth + (1)),state);

var G__53239 = seq__53226_53234;
var G__53240 = chunk__53227_53235;
var G__53241 = count__53228_53236;
var G__53242 = (i__53229_53237 + (1));
seq__53226_53234 = G__53239;
chunk__53227_53235 = G__53240;
count__53228_53236 = G__53241;
i__53229_53237 = G__53242;
continue;
} else {
var temp__5290__auto___53243 = cljs.core.seq.call(null,seq__53226_53234);
if(temp__5290__auto___53243){
var seq__53226_53244__$1 = temp__5290__auto___53243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53226_53244__$1)){
var c__31180__auto___53245 = cljs.core.chunk_first.call(null,seq__53226_53244__$1);
var G__53246 = cljs.core.chunk_rest.call(null,seq__53226_53244__$1);
var G__53247 = c__31180__auto___53245;
var G__53248 = cljs.core.count.call(null,c__31180__auto___53245);
var G__53249 = (0);
seq__53226_53234 = G__53246;
chunk__53227_53235 = G__53247;
count__53228_53236 = G__53248;
i__53229_53237 = G__53249;
continue;
} else {
var dep_53250 = cljs.core.first.call(null,seq__53226_53244__$1);
topo_sort_helper_STAR_.call(null,dep_53250,(depth + (1)),state);

var G__53251 = cljs.core.next.call(null,seq__53226_53244__$1);
var G__53252 = null;
var G__53253 = (0);
var G__53254 = (0);
seq__53226_53234 = G__53251;
chunk__53227_53235 = G__53252;
count__53228_53236 = G__53253;
i__53229_53237 = G__53254;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__53230){
var vec__53231 = p__53230;
var seq__53232 = cljs.core.seq.call(null,vec__53231);
var first__53233 = cljs.core.first.call(null,seq__53232);
var seq__53232__$1 = cljs.core.next.call(null,seq__53232);
var x = first__53233;
var xs = seq__53232__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__53231,seq__53232,first__53233,seq__53232__$1,x,xs,get_deps__$1){
return (function (p1__53217_SHARP_){
return clojure.set.difference.call(null,p1__53217_SHARP_,x);
});})(vec__53231,seq__53232,first__53233,seq__53232__$1,x,xs,get_deps__$1))
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
var seq__53255 = cljs.core.seq.call(null,provides);
var chunk__53256 = null;
var count__53257 = (0);
var i__53258 = (0);
while(true){
if((i__53258 < count__53257)){
var prov = cljs.core._nth.call(null,chunk__53256,i__53258);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53259_53267 = cljs.core.seq.call(null,requires);
var chunk__53260_53268 = null;
var count__53261_53269 = (0);
var i__53262_53270 = (0);
while(true){
if((i__53262_53270 < count__53261_53269)){
var req_53271 = cljs.core._nth.call(null,chunk__53260_53268,i__53262_53270);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53271,prov);

var G__53272 = seq__53259_53267;
var G__53273 = chunk__53260_53268;
var G__53274 = count__53261_53269;
var G__53275 = (i__53262_53270 + (1));
seq__53259_53267 = G__53272;
chunk__53260_53268 = G__53273;
count__53261_53269 = G__53274;
i__53262_53270 = G__53275;
continue;
} else {
var temp__5290__auto___53276 = cljs.core.seq.call(null,seq__53259_53267);
if(temp__5290__auto___53276){
var seq__53259_53277__$1 = temp__5290__auto___53276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53259_53277__$1)){
var c__31180__auto___53278 = cljs.core.chunk_first.call(null,seq__53259_53277__$1);
var G__53279 = cljs.core.chunk_rest.call(null,seq__53259_53277__$1);
var G__53280 = c__31180__auto___53278;
var G__53281 = cljs.core.count.call(null,c__31180__auto___53278);
var G__53282 = (0);
seq__53259_53267 = G__53279;
chunk__53260_53268 = G__53280;
count__53261_53269 = G__53281;
i__53262_53270 = G__53282;
continue;
} else {
var req_53283 = cljs.core.first.call(null,seq__53259_53277__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53283,prov);

var G__53284 = cljs.core.next.call(null,seq__53259_53277__$1);
var G__53285 = null;
var G__53286 = (0);
var G__53287 = (0);
seq__53259_53267 = G__53284;
chunk__53260_53268 = G__53285;
count__53261_53269 = G__53286;
i__53262_53270 = G__53287;
continue;
}
} else {
}
}
break;
}

var G__53288 = seq__53255;
var G__53289 = chunk__53256;
var G__53290 = count__53257;
var G__53291 = (i__53258 + (1));
seq__53255 = G__53288;
chunk__53256 = G__53289;
count__53257 = G__53290;
i__53258 = G__53291;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__53255);
if(temp__5290__auto__){
var seq__53255__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53255__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__53255__$1);
var G__53292 = cljs.core.chunk_rest.call(null,seq__53255__$1);
var G__53293 = c__31180__auto__;
var G__53294 = cljs.core.count.call(null,c__31180__auto__);
var G__53295 = (0);
seq__53255 = G__53292;
chunk__53256 = G__53293;
count__53257 = G__53294;
i__53258 = G__53295;
continue;
} else {
var prov = cljs.core.first.call(null,seq__53255__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53263_53296 = cljs.core.seq.call(null,requires);
var chunk__53264_53297 = null;
var count__53265_53298 = (0);
var i__53266_53299 = (0);
while(true){
if((i__53266_53299 < count__53265_53298)){
var req_53300 = cljs.core._nth.call(null,chunk__53264_53297,i__53266_53299);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53300,prov);

var G__53301 = seq__53263_53296;
var G__53302 = chunk__53264_53297;
var G__53303 = count__53265_53298;
var G__53304 = (i__53266_53299 + (1));
seq__53263_53296 = G__53301;
chunk__53264_53297 = G__53302;
count__53265_53298 = G__53303;
i__53266_53299 = G__53304;
continue;
} else {
var temp__5290__auto___53305__$1 = cljs.core.seq.call(null,seq__53263_53296);
if(temp__5290__auto___53305__$1){
var seq__53263_53306__$1 = temp__5290__auto___53305__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53263_53306__$1)){
var c__31180__auto___53307 = cljs.core.chunk_first.call(null,seq__53263_53306__$1);
var G__53308 = cljs.core.chunk_rest.call(null,seq__53263_53306__$1);
var G__53309 = c__31180__auto___53307;
var G__53310 = cljs.core.count.call(null,c__31180__auto___53307);
var G__53311 = (0);
seq__53263_53296 = G__53308;
chunk__53264_53297 = G__53309;
count__53265_53298 = G__53310;
i__53266_53299 = G__53311;
continue;
} else {
var req_53312 = cljs.core.first.call(null,seq__53263_53306__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53312,prov);

var G__53313 = cljs.core.next.call(null,seq__53263_53306__$1);
var G__53314 = null;
var G__53315 = (0);
var G__53316 = (0);
seq__53263_53296 = G__53313;
chunk__53264_53297 = G__53314;
count__53265_53298 = G__53315;
i__53266_53299 = G__53316;
continue;
}
} else {
}
}
break;
}

var G__53317 = cljs.core.next.call(null,seq__53255__$1);
var G__53318 = null;
var G__53319 = (0);
var G__53320 = (0);
seq__53255 = G__53317;
chunk__53256 = G__53318;
count__53257 = G__53319;
i__53258 = G__53320;
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
var seq__53321_53325 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__53322_53326 = null;
var count__53323_53327 = (0);
var i__53324_53328 = (0);
while(true){
if((i__53324_53328 < count__53323_53327)){
var ns_53329 = cljs.core._nth.call(null,chunk__53322_53326,i__53324_53328);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53329);

var G__53330 = seq__53321_53325;
var G__53331 = chunk__53322_53326;
var G__53332 = count__53323_53327;
var G__53333 = (i__53324_53328 + (1));
seq__53321_53325 = G__53330;
chunk__53322_53326 = G__53331;
count__53323_53327 = G__53332;
i__53324_53328 = G__53333;
continue;
} else {
var temp__5290__auto___53334 = cljs.core.seq.call(null,seq__53321_53325);
if(temp__5290__auto___53334){
var seq__53321_53335__$1 = temp__5290__auto___53334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53321_53335__$1)){
var c__31180__auto___53336 = cljs.core.chunk_first.call(null,seq__53321_53335__$1);
var G__53337 = cljs.core.chunk_rest.call(null,seq__53321_53335__$1);
var G__53338 = c__31180__auto___53336;
var G__53339 = cljs.core.count.call(null,c__31180__auto___53336);
var G__53340 = (0);
seq__53321_53325 = G__53337;
chunk__53322_53326 = G__53338;
count__53323_53327 = G__53339;
i__53324_53328 = G__53340;
continue;
} else {
var ns_53341 = cljs.core.first.call(null,seq__53321_53335__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53341);

var G__53342 = cljs.core.next.call(null,seq__53321_53335__$1);
var G__53343 = null;
var G__53344 = (0);
var G__53345 = (0);
seq__53321_53325 = G__53342;
chunk__53322_53326 = G__53343;
count__53323_53327 = G__53344;
i__53324_53328 = G__53345;
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
var G__53346__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__53346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53347__i = 0, G__53347__a = new Array(arguments.length -  0);
while (G__53347__i < G__53347__a.length) {G__53347__a[G__53347__i] = arguments[G__53347__i + 0]; ++G__53347__i;}
  args = new cljs.core.IndexedSeq(G__53347__a,0,null);
} 
return G__53346__delegate.call(this,args);};
G__53346.cljs$lang$maxFixedArity = 0;
G__53346.cljs$lang$applyTo = (function (arglist__53348){
var args = cljs.core.seq(arglist__53348);
return G__53346__delegate(args);
});
G__53346.cljs$core$IFn$_invoke$arity$variadic = G__53346__delegate;
return G__53346;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__53349_SHARP_,p2__53350_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53349_SHARP_)].join('')),p2__53350_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__53351_SHARP_,p2__53352_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53351_SHARP_)].join(''),p2__53352_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__53353 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__53353.addCallback(((function (G__53353){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__53353))
);

G__53353.addErrback(((function (G__53353){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__53353))
);

return G__53353;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__53354 = cljs.core._EQ_;
var expr__53355 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__53354.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__53355))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__53354,expr__53355){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__53354,expr__53355))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__53354,expr__53355){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e53357){if((e53357 instanceof Error)){
var e = e53357;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e53357;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__53354,expr__53355))
} else {
if(cljs.core.truth_(pred__53354.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__53355))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__53354.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__53355))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__53354.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__53355))){
return ((function (pred__53354,expr__53355){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e53358){if((e53358 instanceof Error)){
var e = e53358;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e53358;

}
}})());
});
;})(pred__53354,expr__53355))
} else {
return ((function (pred__53354,expr__53355){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__53354,expr__53355))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__53359,callback){
var map__53360 = p__53359;
var map__53360__$1 = ((((!((map__53360 == null)))?((((map__53360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53360):map__53360);
var file_msg = map__53360__$1;
var request_url = cljs.core.get.call(null,map__53360__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__53360,map__53360__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__53360,map__53360__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__){
return (function (state_53384){
var state_val_53385 = (state_53384[(1)]);
if((state_val_53385 === (7))){
var inst_53380 = (state_53384[(2)]);
var state_53384__$1 = state_53384;
var statearr_53386_53403 = state_53384__$1;
(statearr_53386_53403[(2)] = inst_53380);

(statearr_53386_53403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53385 === (1))){
var state_53384__$1 = state_53384;
var statearr_53387_53404 = state_53384__$1;
(statearr_53387_53404[(2)] = null);

(statearr_53387_53404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53385 === (4))){
var inst_53364 = (state_53384[(7)]);
var inst_53364__$1 = (state_53384[(2)]);
var state_53384__$1 = (function (){var statearr_53388 = state_53384;
(statearr_53388[(7)] = inst_53364__$1);

return statearr_53388;
})();
if(cljs.core.truth_(inst_53364__$1)){
var statearr_53389_53405 = state_53384__$1;
(statearr_53389_53405[(1)] = (5));

} else {
var statearr_53390_53406 = state_53384__$1;
(statearr_53390_53406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53385 === (6))){
var state_53384__$1 = state_53384;
var statearr_53391_53407 = state_53384__$1;
(statearr_53391_53407[(2)] = null);

(statearr_53391_53407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53385 === (3))){
var inst_53382 = (state_53384[(2)]);
var state_53384__$1 = state_53384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53384__$1,inst_53382);
} else {
if((state_val_53385 === (2))){
var state_53384__$1 = state_53384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53384__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_53385 === (11))){
var inst_53376 = (state_53384[(2)]);
var state_53384__$1 = (function (){var statearr_53392 = state_53384;
(statearr_53392[(8)] = inst_53376);

return statearr_53392;
})();
var statearr_53393_53408 = state_53384__$1;
(statearr_53393_53408[(2)] = null);

(statearr_53393_53408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53385 === (9))){
var inst_53368 = (state_53384[(9)]);
var inst_53370 = (state_53384[(10)]);
var inst_53372 = inst_53370.call(null,inst_53368);
var state_53384__$1 = state_53384;
var statearr_53394_53409 = state_53384__$1;
(statearr_53394_53409[(2)] = inst_53372);

(statearr_53394_53409[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53385 === (5))){
var inst_53364 = (state_53384[(7)]);
var inst_53366 = figwheel.client.file_reloading.blocking_load.call(null,inst_53364);
var state_53384__$1 = state_53384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53384__$1,(8),inst_53366);
} else {
if((state_val_53385 === (10))){
var inst_53368 = (state_53384[(9)]);
var inst_53374 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_53368);
var state_53384__$1 = state_53384;
var statearr_53395_53410 = state_53384__$1;
(statearr_53395_53410[(2)] = inst_53374);

(statearr_53395_53410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53385 === (8))){
var inst_53364 = (state_53384[(7)]);
var inst_53370 = (state_53384[(10)]);
var inst_53368 = (state_53384[(2)]);
var inst_53369 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_53370__$1 = cljs.core.get.call(null,inst_53369,inst_53364);
var state_53384__$1 = (function (){var statearr_53396 = state_53384;
(statearr_53396[(9)] = inst_53368);

(statearr_53396[(10)] = inst_53370__$1);

return statearr_53396;
})();
if(cljs.core.truth_(inst_53370__$1)){
var statearr_53397_53411 = state_53384__$1;
(statearr_53397_53411[(1)] = (9));

} else {
var statearr_53398_53412 = state_53384__$1;
(statearr_53398_53412[(1)] = (10));

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
});})(c__51020__auto__))
;
return ((function (switch__50930__auto__,c__51020__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__50931__auto__ = null;
var figwheel$client$file_reloading$state_machine__50931__auto____0 = (function (){
var statearr_53399 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53399[(0)] = figwheel$client$file_reloading$state_machine__50931__auto__);

(statearr_53399[(1)] = (1));

return statearr_53399;
});
var figwheel$client$file_reloading$state_machine__50931__auto____1 = (function (state_53384){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_53384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e53400){if((e53400 instanceof Object)){
var ex__50934__auto__ = e53400;
var statearr_53401_53413 = state_53384;
(statearr_53401_53413[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53414 = state_53384;
state_53384 = G__53414;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__50931__auto__ = function(state_53384){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__50931__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__50931__auto____1.call(this,state_53384);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__50931__auto____0;
figwheel$client$file_reloading$state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__50931__auto____1;
return figwheel$client$file_reloading$state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__))
})();
var state__51022__auto__ = (function (){var statearr_53402 = f__51021__auto__.call(null);
(statearr_53402[(6)] = c__51020__auto__);

return statearr_53402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__))
);

return c__51020__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__53415,callback){
var map__53416 = p__53415;
var map__53416__$1 = ((((!((map__53416 == null)))?((((map__53416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53416):map__53416);
var file_msg = map__53416__$1;
var namespace = cljs.core.get.call(null,map__53416__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__53416,map__53416__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__53416,map__53416__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__53418){
var map__53419 = p__53418;
var map__53419__$1 = ((((!((map__53419 == null)))?((((map__53419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53419):map__53419);
var file_msg = map__53419__$1;
var namespace = cljs.core.get.call(null,map__53419__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__53421){
var map__53422 = p__53421;
var map__53422__$1 = ((((!((map__53422 == null)))?((((map__53422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53422):map__53422);
var file_msg = map__53422__$1;
var namespace = cljs.core.get.call(null,map__53422__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__53424,callback){
var map__53425 = p__53424;
var map__53425__$1 = ((((!((map__53425 == null)))?((((map__53425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53425):map__53425);
var file_msg = map__53425__$1;
var request_url = cljs.core.get.call(null,map__53425__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__53425__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__51020__auto___53475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto___53475,out){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto___53475,out){
return (function (state_53460){
var state_val_53461 = (state_53460[(1)]);
if((state_val_53461 === (1))){
var inst_53434 = cljs.core.seq.call(null,files);
var inst_53435 = cljs.core.first.call(null,inst_53434);
var inst_53436 = cljs.core.next.call(null,inst_53434);
var inst_53437 = files;
var state_53460__$1 = (function (){var statearr_53462 = state_53460;
(statearr_53462[(7)] = inst_53436);

(statearr_53462[(8)] = inst_53437);

(statearr_53462[(9)] = inst_53435);

return statearr_53462;
})();
var statearr_53463_53476 = state_53460__$1;
(statearr_53463_53476[(2)] = null);

(statearr_53463_53476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (2))){
var inst_53443 = (state_53460[(10)]);
var inst_53437 = (state_53460[(8)]);
var inst_53442 = cljs.core.seq.call(null,inst_53437);
var inst_53443__$1 = cljs.core.first.call(null,inst_53442);
var inst_53444 = cljs.core.next.call(null,inst_53442);
var inst_53445 = (inst_53443__$1 == null);
var inst_53446 = cljs.core.not.call(null,inst_53445);
var state_53460__$1 = (function (){var statearr_53464 = state_53460;
(statearr_53464[(11)] = inst_53444);

(statearr_53464[(10)] = inst_53443__$1);

return statearr_53464;
})();
if(inst_53446){
var statearr_53465_53477 = state_53460__$1;
(statearr_53465_53477[(1)] = (4));

} else {
var statearr_53466_53478 = state_53460__$1;
(statearr_53466_53478[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (3))){
var inst_53458 = (state_53460[(2)]);
var state_53460__$1 = state_53460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53460__$1,inst_53458);
} else {
if((state_val_53461 === (4))){
var inst_53443 = (state_53460[(10)]);
var inst_53448 = figwheel.client.file_reloading.reload_js_file.call(null,inst_53443);
var state_53460__$1 = state_53460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53460__$1,(7),inst_53448);
} else {
if((state_val_53461 === (5))){
var inst_53454 = cljs.core.async.close_BANG_.call(null,out);
var state_53460__$1 = state_53460;
var statearr_53467_53479 = state_53460__$1;
(statearr_53467_53479[(2)] = inst_53454);

(statearr_53467_53479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (6))){
var inst_53456 = (state_53460[(2)]);
var state_53460__$1 = state_53460;
var statearr_53468_53480 = state_53460__$1;
(statearr_53468_53480[(2)] = inst_53456);

(statearr_53468_53480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (7))){
var inst_53444 = (state_53460[(11)]);
var inst_53450 = (state_53460[(2)]);
var inst_53451 = cljs.core.async.put_BANG_.call(null,out,inst_53450);
var inst_53437 = inst_53444;
var state_53460__$1 = (function (){var statearr_53469 = state_53460;
(statearr_53469[(12)] = inst_53451);

(statearr_53469[(8)] = inst_53437);

return statearr_53469;
})();
var statearr_53470_53481 = state_53460__$1;
(statearr_53470_53481[(2)] = null);

(statearr_53470_53481[(1)] = (2));


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
});})(c__51020__auto___53475,out))
;
return ((function (switch__50930__auto__,c__51020__auto___53475,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50931__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50931__auto____0 = (function (){
var statearr_53471 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53471[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50931__auto__);

(statearr_53471[(1)] = (1));

return statearr_53471;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50931__auto____1 = (function (state_53460){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_53460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e53472){if((e53472 instanceof Object)){
var ex__50934__auto__ = e53472;
var statearr_53473_53482 = state_53460;
(statearr_53473_53482[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53483 = state_53460;
state_53460 = G__53483;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50931__auto__ = function(state_53460){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50931__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50931__auto____1.call(this,state_53460);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50931__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50931__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto___53475,out))
})();
var state__51022__auto__ = (function (){var statearr_53474 = f__51021__auto__.call(null);
(statearr_53474[(6)] = c__51020__auto___53475);

return statearr_53474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto___53475,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__53484,opts){
var map__53485 = p__53484;
var map__53485__$1 = ((((!((map__53485 == null)))?((((map__53485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53485):map__53485);
var eval_body = cljs.core.get.call(null,map__53485__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__53485__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e53487){var e = e53487;
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
return (function (p1__53488_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53488_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__53489){
var vec__53490 = p__53489;
var k = cljs.core.nth.call(null,vec__53490,(0),null);
var v = cljs.core.nth.call(null,vec__53490,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__53493){
var vec__53494 = p__53493;
var k = cljs.core.nth.call(null,vec__53494,(0),null);
var v = cljs.core.nth.call(null,vec__53494,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__53500,p__53501){
var map__53502 = p__53500;
var map__53502__$1 = ((((!((map__53502 == null)))?((((map__53502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53502):map__53502);
var opts = map__53502__$1;
var before_jsload = cljs.core.get.call(null,map__53502__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__53502__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__53502__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__53503 = p__53501;
var map__53503__$1 = ((((!((map__53503 == null)))?((((map__53503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53503):map__53503);
var msg = map__53503__$1;
var files = cljs.core.get.call(null,map__53503__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__53503__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__53503__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_53657){
var state_val_53658 = (state_53657[(1)]);
if((state_val_53658 === (7))){
var inst_53519 = (state_53657[(7)]);
var inst_53517 = (state_53657[(8)]);
var inst_53520 = (state_53657[(9)]);
var inst_53518 = (state_53657[(10)]);
var inst_53525 = cljs.core._nth.call(null,inst_53518,inst_53520);
var inst_53526 = figwheel.client.file_reloading.eval_body.call(null,inst_53525,opts);
var inst_53527 = (inst_53520 + (1));
var tmp53659 = inst_53519;
var tmp53660 = inst_53517;
var tmp53661 = inst_53518;
var inst_53517__$1 = tmp53660;
var inst_53518__$1 = tmp53661;
var inst_53519__$1 = tmp53659;
var inst_53520__$1 = inst_53527;
var state_53657__$1 = (function (){var statearr_53662 = state_53657;
(statearr_53662[(7)] = inst_53519__$1);

(statearr_53662[(8)] = inst_53517__$1);

(statearr_53662[(11)] = inst_53526);

(statearr_53662[(9)] = inst_53520__$1);

(statearr_53662[(10)] = inst_53518__$1);

return statearr_53662;
})();
var statearr_53663_53746 = state_53657__$1;
(statearr_53663_53746[(2)] = null);

(statearr_53663_53746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (20))){
var inst_53560 = (state_53657[(12)]);
var inst_53568 = figwheel.client.file_reloading.sort_files.call(null,inst_53560);
var state_53657__$1 = state_53657;
var statearr_53664_53747 = state_53657__$1;
(statearr_53664_53747[(2)] = inst_53568);

(statearr_53664_53747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (27))){
var state_53657__$1 = state_53657;
var statearr_53665_53748 = state_53657__$1;
(statearr_53665_53748[(2)] = null);

(statearr_53665_53748[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (1))){
var inst_53509 = (state_53657[(13)]);
var inst_53506 = before_jsload.call(null,files);
var inst_53507 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_53508 = (function (){return ((function (inst_53509,inst_53506,inst_53507,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53497_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53497_SHARP_);
});
;})(inst_53509,inst_53506,inst_53507,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53509__$1 = cljs.core.filter.call(null,inst_53508,files);
var inst_53510 = cljs.core.not_empty.call(null,inst_53509__$1);
var state_53657__$1 = (function (){var statearr_53666 = state_53657;
(statearr_53666[(14)] = inst_53506);

(statearr_53666[(13)] = inst_53509__$1);

(statearr_53666[(15)] = inst_53507);

return statearr_53666;
})();
if(cljs.core.truth_(inst_53510)){
var statearr_53667_53749 = state_53657__$1;
(statearr_53667_53749[(1)] = (2));

} else {
var statearr_53668_53750 = state_53657__$1;
(statearr_53668_53750[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (24))){
var state_53657__$1 = state_53657;
var statearr_53669_53751 = state_53657__$1;
(statearr_53669_53751[(2)] = null);

(statearr_53669_53751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (39))){
var inst_53610 = (state_53657[(16)]);
var state_53657__$1 = state_53657;
var statearr_53670_53752 = state_53657__$1;
(statearr_53670_53752[(2)] = inst_53610);

(statearr_53670_53752[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (46))){
var inst_53652 = (state_53657[(2)]);
var state_53657__$1 = state_53657;
var statearr_53671_53753 = state_53657__$1;
(statearr_53671_53753[(2)] = inst_53652);

(statearr_53671_53753[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (4))){
var inst_53554 = (state_53657[(2)]);
var inst_53555 = cljs.core.List.EMPTY;
var inst_53556 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_53555);
var inst_53557 = (function (){return ((function (inst_53554,inst_53555,inst_53556,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53498_SHARP_){
var and__30237__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53498_SHARP_);
if(cljs.core.truth_(and__30237__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53498_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__53498_SHARP_)));
} else {
return and__30237__auto__;
}
});
;})(inst_53554,inst_53555,inst_53556,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53558 = cljs.core.filter.call(null,inst_53557,files);
var inst_53559 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_53560 = cljs.core.concat.call(null,inst_53558,inst_53559);
var state_53657__$1 = (function (){var statearr_53672 = state_53657;
(statearr_53672[(17)] = inst_53554);

(statearr_53672[(18)] = inst_53556);

(statearr_53672[(12)] = inst_53560);

return statearr_53672;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_53673_53754 = state_53657__$1;
(statearr_53673_53754[(1)] = (16));

} else {
var statearr_53674_53755 = state_53657__$1;
(statearr_53674_53755[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (15))){
var inst_53544 = (state_53657[(2)]);
var state_53657__$1 = state_53657;
var statearr_53675_53756 = state_53657__$1;
(statearr_53675_53756[(2)] = inst_53544);

(statearr_53675_53756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (21))){
var inst_53570 = (state_53657[(19)]);
var inst_53570__$1 = (state_53657[(2)]);
var inst_53571 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_53570__$1);
var state_53657__$1 = (function (){var statearr_53676 = state_53657;
(statearr_53676[(19)] = inst_53570__$1);

return statearr_53676;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53657__$1,(22),inst_53571);
} else {
if((state_val_53658 === (31))){
var inst_53655 = (state_53657[(2)]);
var state_53657__$1 = state_53657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53657__$1,inst_53655);
} else {
if((state_val_53658 === (32))){
var inst_53610 = (state_53657[(16)]);
var inst_53615 = inst_53610.cljs$lang$protocol_mask$partition0$;
var inst_53616 = (inst_53615 & (64));
var inst_53617 = inst_53610.cljs$core$ISeq$;
var inst_53618 = (cljs.core.PROTOCOL_SENTINEL === inst_53617);
var inst_53619 = (inst_53616) || (inst_53618);
var state_53657__$1 = state_53657;
if(cljs.core.truth_(inst_53619)){
var statearr_53677_53757 = state_53657__$1;
(statearr_53677_53757[(1)] = (35));

} else {
var statearr_53678_53758 = state_53657__$1;
(statearr_53678_53758[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (40))){
var inst_53632 = (state_53657[(20)]);
var inst_53631 = (state_53657[(2)]);
var inst_53632__$1 = cljs.core.get.call(null,inst_53631,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_53633 = cljs.core.get.call(null,inst_53631,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_53634 = cljs.core.not_empty.call(null,inst_53632__$1);
var state_53657__$1 = (function (){var statearr_53679 = state_53657;
(statearr_53679[(20)] = inst_53632__$1);

(statearr_53679[(21)] = inst_53633);

return statearr_53679;
})();
if(cljs.core.truth_(inst_53634)){
var statearr_53680_53759 = state_53657__$1;
(statearr_53680_53759[(1)] = (41));

} else {
var statearr_53681_53760 = state_53657__$1;
(statearr_53681_53760[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (33))){
var state_53657__$1 = state_53657;
var statearr_53682_53761 = state_53657__$1;
(statearr_53682_53761[(2)] = false);

(statearr_53682_53761[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (13))){
var inst_53530 = (state_53657[(22)]);
var inst_53534 = cljs.core.chunk_first.call(null,inst_53530);
var inst_53535 = cljs.core.chunk_rest.call(null,inst_53530);
var inst_53536 = cljs.core.count.call(null,inst_53534);
var inst_53517 = inst_53535;
var inst_53518 = inst_53534;
var inst_53519 = inst_53536;
var inst_53520 = (0);
var state_53657__$1 = (function (){var statearr_53683 = state_53657;
(statearr_53683[(7)] = inst_53519);

(statearr_53683[(8)] = inst_53517);

(statearr_53683[(9)] = inst_53520);

(statearr_53683[(10)] = inst_53518);

return statearr_53683;
})();
var statearr_53684_53762 = state_53657__$1;
(statearr_53684_53762[(2)] = null);

(statearr_53684_53762[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (22))){
var inst_53570 = (state_53657[(19)]);
var inst_53573 = (state_53657[(23)]);
var inst_53578 = (state_53657[(24)]);
var inst_53574 = (state_53657[(25)]);
var inst_53573__$1 = (state_53657[(2)]);
var inst_53574__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53573__$1);
var inst_53575 = (function (){var all_files = inst_53570;
var res_SINGLEQUOTE_ = inst_53573__$1;
var res = inst_53574__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_53570,inst_53573,inst_53578,inst_53574,inst_53573__$1,inst_53574__$1,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53499_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__53499_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_53570,inst_53573,inst_53578,inst_53574,inst_53573__$1,inst_53574__$1,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53576 = cljs.core.filter.call(null,inst_53575,inst_53573__$1);
var inst_53577 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_53578__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53577);
var inst_53579 = cljs.core.not_empty.call(null,inst_53578__$1);
var state_53657__$1 = (function (){var statearr_53685 = state_53657;
(statearr_53685[(23)] = inst_53573__$1);

(statearr_53685[(24)] = inst_53578__$1);

(statearr_53685[(26)] = inst_53576);

(statearr_53685[(25)] = inst_53574__$1);

return statearr_53685;
})();
if(cljs.core.truth_(inst_53579)){
var statearr_53686_53763 = state_53657__$1;
(statearr_53686_53763[(1)] = (23));

} else {
var statearr_53687_53764 = state_53657__$1;
(statearr_53687_53764[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (36))){
var state_53657__$1 = state_53657;
var statearr_53688_53765 = state_53657__$1;
(statearr_53688_53765[(2)] = false);

(statearr_53688_53765[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (41))){
var inst_53632 = (state_53657[(20)]);
var inst_53636 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_53637 = cljs.core.map.call(null,inst_53636,inst_53632);
var inst_53638 = cljs.core.pr_str.call(null,inst_53637);
var inst_53639 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53638)].join('');
var inst_53640 = figwheel.client.utils.log.call(null,inst_53639);
var state_53657__$1 = state_53657;
var statearr_53689_53766 = state_53657__$1;
(statearr_53689_53766[(2)] = inst_53640);

(statearr_53689_53766[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (43))){
var inst_53633 = (state_53657[(21)]);
var inst_53643 = (state_53657[(2)]);
var inst_53644 = cljs.core.not_empty.call(null,inst_53633);
var state_53657__$1 = (function (){var statearr_53690 = state_53657;
(statearr_53690[(27)] = inst_53643);

return statearr_53690;
})();
if(cljs.core.truth_(inst_53644)){
var statearr_53691_53767 = state_53657__$1;
(statearr_53691_53767[(1)] = (44));

} else {
var statearr_53692_53768 = state_53657__$1;
(statearr_53692_53768[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (29))){
var inst_53570 = (state_53657[(19)]);
var inst_53573 = (state_53657[(23)]);
var inst_53578 = (state_53657[(24)]);
var inst_53576 = (state_53657[(26)]);
var inst_53610 = (state_53657[(16)]);
var inst_53574 = (state_53657[(25)]);
var inst_53606 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_53609 = (function (){var all_files = inst_53570;
var res_SINGLEQUOTE_ = inst_53573;
var res = inst_53574;
var files_not_loaded = inst_53576;
var dependencies_that_loaded = inst_53578;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53570,inst_53573,inst_53578,inst_53576,inst_53610,inst_53574,inst_53606,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53608){
var map__53693 = p__53608;
var map__53693__$1 = ((((!((map__53693 == null)))?((((map__53693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53693):map__53693);
var namespace = cljs.core.get.call(null,map__53693__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53570,inst_53573,inst_53578,inst_53576,inst_53610,inst_53574,inst_53606,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53610__$1 = cljs.core.group_by.call(null,inst_53609,inst_53576);
var inst_53612 = (inst_53610__$1 == null);
var inst_53613 = cljs.core.not.call(null,inst_53612);
var state_53657__$1 = (function (){var statearr_53695 = state_53657;
(statearr_53695[(16)] = inst_53610__$1);

(statearr_53695[(28)] = inst_53606);

return statearr_53695;
})();
if(inst_53613){
var statearr_53696_53769 = state_53657__$1;
(statearr_53696_53769[(1)] = (32));

} else {
var statearr_53697_53770 = state_53657__$1;
(statearr_53697_53770[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (44))){
var inst_53633 = (state_53657[(21)]);
var inst_53646 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53633);
var inst_53647 = cljs.core.pr_str.call(null,inst_53646);
var inst_53648 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53647)].join('');
var inst_53649 = figwheel.client.utils.log.call(null,inst_53648);
var state_53657__$1 = state_53657;
var statearr_53698_53771 = state_53657__$1;
(statearr_53698_53771[(2)] = inst_53649);

(statearr_53698_53771[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (6))){
var inst_53551 = (state_53657[(2)]);
var state_53657__$1 = state_53657;
var statearr_53699_53772 = state_53657__$1;
(statearr_53699_53772[(2)] = inst_53551);

(statearr_53699_53772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (28))){
var inst_53576 = (state_53657[(26)]);
var inst_53603 = (state_53657[(2)]);
var inst_53604 = cljs.core.not_empty.call(null,inst_53576);
var state_53657__$1 = (function (){var statearr_53700 = state_53657;
(statearr_53700[(29)] = inst_53603);

return statearr_53700;
})();
if(cljs.core.truth_(inst_53604)){
var statearr_53701_53773 = state_53657__$1;
(statearr_53701_53773[(1)] = (29));

} else {
var statearr_53702_53774 = state_53657__$1;
(statearr_53702_53774[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (25))){
var inst_53574 = (state_53657[(25)]);
var inst_53590 = (state_53657[(2)]);
var inst_53591 = cljs.core.not_empty.call(null,inst_53574);
var state_53657__$1 = (function (){var statearr_53703 = state_53657;
(statearr_53703[(30)] = inst_53590);

return statearr_53703;
})();
if(cljs.core.truth_(inst_53591)){
var statearr_53704_53775 = state_53657__$1;
(statearr_53704_53775[(1)] = (26));

} else {
var statearr_53705_53776 = state_53657__$1;
(statearr_53705_53776[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (34))){
var inst_53626 = (state_53657[(2)]);
var state_53657__$1 = state_53657;
if(cljs.core.truth_(inst_53626)){
var statearr_53706_53777 = state_53657__$1;
(statearr_53706_53777[(1)] = (38));

} else {
var statearr_53707_53778 = state_53657__$1;
(statearr_53707_53778[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (17))){
var state_53657__$1 = state_53657;
var statearr_53708_53779 = state_53657__$1;
(statearr_53708_53779[(2)] = recompile_dependents);

(statearr_53708_53779[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (3))){
var state_53657__$1 = state_53657;
var statearr_53709_53780 = state_53657__$1;
(statearr_53709_53780[(2)] = null);

(statearr_53709_53780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (12))){
var inst_53547 = (state_53657[(2)]);
var state_53657__$1 = state_53657;
var statearr_53710_53781 = state_53657__$1;
(statearr_53710_53781[(2)] = inst_53547);

(statearr_53710_53781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (2))){
var inst_53509 = (state_53657[(13)]);
var inst_53516 = cljs.core.seq.call(null,inst_53509);
var inst_53517 = inst_53516;
var inst_53518 = null;
var inst_53519 = (0);
var inst_53520 = (0);
var state_53657__$1 = (function (){var statearr_53711 = state_53657;
(statearr_53711[(7)] = inst_53519);

(statearr_53711[(8)] = inst_53517);

(statearr_53711[(9)] = inst_53520);

(statearr_53711[(10)] = inst_53518);

return statearr_53711;
})();
var statearr_53712_53782 = state_53657__$1;
(statearr_53712_53782[(2)] = null);

(statearr_53712_53782[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (23))){
var inst_53570 = (state_53657[(19)]);
var inst_53573 = (state_53657[(23)]);
var inst_53578 = (state_53657[(24)]);
var inst_53576 = (state_53657[(26)]);
var inst_53574 = (state_53657[(25)]);
var inst_53581 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_53583 = (function (){var all_files = inst_53570;
var res_SINGLEQUOTE_ = inst_53573;
var res = inst_53574;
var files_not_loaded = inst_53576;
var dependencies_that_loaded = inst_53578;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53570,inst_53573,inst_53578,inst_53576,inst_53574,inst_53581,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53582){
var map__53713 = p__53582;
var map__53713__$1 = ((((!((map__53713 == null)))?((((map__53713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53713):map__53713);
var request_url = cljs.core.get.call(null,map__53713__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53570,inst_53573,inst_53578,inst_53576,inst_53574,inst_53581,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53584 = cljs.core.reverse.call(null,inst_53578);
var inst_53585 = cljs.core.map.call(null,inst_53583,inst_53584);
var inst_53586 = cljs.core.pr_str.call(null,inst_53585);
var inst_53587 = figwheel.client.utils.log.call(null,inst_53586);
var state_53657__$1 = (function (){var statearr_53715 = state_53657;
(statearr_53715[(31)] = inst_53581);

return statearr_53715;
})();
var statearr_53716_53783 = state_53657__$1;
(statearr_53716_53783[(2)] = inst_53587);

(statearr_53716_53783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (35))){
var state_53657__$1 = state_53657;
var statearr_53717_53784 = state_53657__$1;
(statearr_53717_53784[(2)] = true);

(statearr_53717_53784[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (19))){
var inst_53560 = (state_53657[(12)]);
var inst_53566 = figwheel.client.file_reloading.expand_files.call(null,inst_53560);
var state_53657__$1 = state_53657;
var statearr_53718_53785 = state_53657__$1;
(statearr_53718_53785[(2)] = inst_53566);

(statearr_53718_53785[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (11))){
var state_53657__$1 = state_53657;
var statearr_53719_53786 = state_53657__$1;
(statearr_53719_53786[(2)] = null);

(statearr_53719_53786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (9))){
var inst_53549 = (state_53657[(2)]);
var state_53657__$1 = state_53657;
var statearr_53720_53787 = state_53657__$1;
(statearr_53720_53787[(2)] = inst_53549);

(statearr_53720_53787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (5))){
var inst_53519 = (state_53657[(7)]);
var inst_53520 = (state_53657[(9)]);
var inst_53522 = (inst_53520 < inst_53519);
var inst_53523 = inst_53522;
var state_53657__$1 = state_53657;
if(cljs.core.truth_(inst_53523)){
var statearr_53721_53788 = state_53657__$1;
(statearr_53721_53788[(1)] = (7));

} else {
var statearr_53722_53789 = state_53657__$1;
(statearr_53722_53789[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (14))){
var inst_53530 = (state_53657[(22)]);
var inst_53539 = cljs.core.first.call(null,inst_53530);
var inst_53540 = figwheel.client.file_reloading.eval_body.call(null,inst_53539,opts);
var inst_53541 = cljs.core.next.call(null,inst_53530);
var inst_53517 = inst_53541;
var inst_53518 = null;
var inst_53519 = (0);
var inst_53520 = (0);
var state_53657__$1 = (function (){var statearr_53723 = state_53657;
(statearr_53723[(7)] = inst_53519);

(statearr_53723[(8)] = inst_53517);

(statearr_53723[(9)] = inst_53520);

(statearr_53723[(32)] = inst_53540);

(statearr_53723[(10)] = inst_53518);

return statearr_53723;
})();
var statearr_53724_53790 = state_53657__$1;
(statearr_53724_53790[(2)] = null);

(statearr_53724_53790[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (45))){
var state_53657__$1 = state_53657;
var statearr_53725_53791 = state_53657__$1;
(statearr_53725_53791[(2)] = null);

(statearr_53725_53791[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (26))){
var inst_53570 = (state_53657[(19)]);
var inst_53573 = (state_53657[(23)]);
var inst_53578 = (state_53657[(24)]);
var inst_53576 = (state_53657[(26)]);
var inst_53574 = (state_53657[(25)]);
var inst_53593 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_53595 = (function (){var all_files = inst_53570;
var res_SINGLEQUOTE_ = inst_53573;
var res = inst_53574;
var files_not_loaded = inst_53576;
var dependencies_that_loaded = inst_53578;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53570,inst_53573,inst_53578,inst_53576,inst_53574,inst_53593,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53594){
var map__53726 = p__53594;
var map__53726__$1 = ((((!((map__53726 == null)))?((((map__53726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53726):map__53726);
var namespace = cljs.core.get.call(null,map__53726__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__53726__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53570,inst_53573,inst_53578,inst_53576,inst_53574,inst_53593,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53596 = cljs.core.map.call(null,inst_53595,inst_53574);
var inst_53597 = cljs.core.pr_str.call(null,inst_53596);
var inst_53598 = figwheel.client.utils.log.call(null,inst_53597);
var inst_53599 = (function (){var all_files = inst_53570;
var res_SINGLEQUOTE_ = inst_53573;
var res = inst_53574;
var files_not_loaded = inst_53576;
var dependencies_that_loaded = inst_53578;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53570,inst_53573,inst_53578,inst_53576,inst_53574,inst_53593,inst_53595,inst_53596,inst_53597,inst_53598,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53570,inst_53573,inst_53578,inst_53576,inst_53574,inst_53593,inst_53595,inst_53596,inst_53597,inst_53598,state_val_53658,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53600 = setTimeout(inst_53599,(10));
var state_53657__$1 = (function (){var statearr_53728 = state_53657;
(statearr_53728[(33)] = inst_53598);

(statearr_53728[(34)] = inst_53593);

return statearr_53728;
})();
var statearr_53729_53792 = state_53657__$1;
(statearr_53729_53792[(2)] = inst_53600);

(statearr_53729_53792[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (16))){
var state_53657__$1 = state_53657;
var statearr_53730_53793 = state_53657__$1;
(statearr_53730_53793[(2)] = reload_dependents);

(statearr_53730_53793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (38))){
var inst_53610 = (state_53657[(16)]);
var inst_53628 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53610);
var state_53657__$1 = state_53657;
var statearr_53731_53794 = state_53657__$1;
(statearr_53731_53794[(2)] = inst_53628);

(statearr_53731_53794[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (30))){
var state_53657__$1 = state_53657;
var statearr_53732_53795 = state_53657__$1;
(statearr_53732_53795[(2)] = null);

(statearr_53732_53795[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (10))){
var inst_53530 = (state_53657[(22)]);
var inst_53532 = cljs.core.chunked_seq_QMARK_.call(null,inst_53530);
var state_53657__$1 = state_53657;
if(inst_53532){
var statearr_53733_53796 = state_53657__$1;
(statearr_53733_53796[(1)] = (13));

} else {
var statearr_53734_53797 = state_53657__$1;
(statearr_53734_53797[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (18))){
var inst_53564 = (state_53657[(2)]);
var state_53657__$1 = state_53657;
if(cljs.core.truth_(inst_53564)){
var statearr_53735_53798 = state_53657__$1;
(statearr_53735_53798[(1)] = (19));

} else {
var statearr_53736_53799 = state_53657__$1;
(statearr_53736_53799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (42))){
var state_53657__$1 = state_53657;
var statearr_53737_53800 = state_53657__$1;
(statearr_53737_53800[(2)] = null);

(statearr_53737_53800[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (37))){
var inst_53623 = (state_53657[(2)]);
var state_53657__$1 = state_53657;
var statearr_53738_53801 = state_53657__$1;
(statearr_53738_53801[(2)] = inst_53623);

(statearr_53738_53801[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53658 === (8))){
var inst_53517 = (state_53657[(8)]);
var inst_53530 = (state_53657[(22)]);
var inst_53530__$1 = cljs.core.seq.call(null,inst_53517);
var state_53657__$1 = (function (){var statearr_53739 = state_53657;
(statearr_53739[(22)] = inst_53530__$1);

return statearr_53739;
})();
if(inst_53530__$1){
var statearr_53740_53802 = state_53657__$1;
(statearr_53740_53802[(1)] = (10));

} else {
var statearr_53741_53803 = state_53657__$1;
(statearr_53741_53803[(1)] = (11));

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
});})(c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__50930__auto__,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50931__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50931__auto____0 = (function (){
var statearr_53742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53742[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__50931__auto__);

(statearr_53742[(1)] = (1));

return statearr_53742;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50931__auto____1 = (function (state_53657){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_53657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e53743){if((e53743 instanceof Object)){
var ex__50934__auto__ = e53743;
var statearr_53744_53804 = state_53657;
(statearr_53744_53804[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53805 = state_53657;
state_53657 = G__53805;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__50931__auto__ = function(state_53657){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50931__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50931__auto____1.call(this,state_53657);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50931__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50931__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__51022__auto__ = (function (){var statearr_53745 = f__51021__auto__.call(null);
(statearr_53745[(6)] = c__51020__auto__);

return statearr_53745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__,map__53502,map__53502__$1,opts,before_jsload,on_jsload,reload_dependents,map__53503,map__53503__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__51020__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__53808,link){
var map__53809 = p__53808;
var map__53809__$1 = ((((!((map__53809 == null)))?((((map__53809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53809):map__53809);
var file = cljs.core.get.call(null,map__53809__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5290__auto__ = link.href;
if(cljs.core.truth_(temp__5290__auto__)){
var link_href = temp__5290__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5290__auto__,map__53809,map__53809__$1,file){
return (function (p1__53806_SHARP_,p2__53807_SHARP_){
if(cljs.core._EQ_.call(null,p1__53806_SHARP_,p2__53807_SHARP_)){
return p1__53806_SHARP_;
} else {
return false;
}
});})(link_href,temp__5290__auto__,map__53809,map__53809__$1,file))
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
var temp__5290__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__53812){
var map__53813 = p__53812;
var map__53813__$1 = ((((!((map__53813 == null)))?((((map__53813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53813):map__53813);
var match_length = cljs.core.get.call(null,map__53813__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__53813__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__53811_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__53811_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__53815_SHARP_,p2__53816_SHARP_){
return cljs.core.assoc.call(null,p1__53815_SHARP_,cljs.core.get.call(null,p2__53816_SHARP_,key),p2__53816_SHARP_);
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
var loaded_f_datas_53817 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_53817);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_53817);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__53818,p__53819){
var map__53820 = p__53818;
var map__53820__$1 = ((((!((map__53820 == null)))?((((map__53820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53820):map__53820);
var on_cssload = cljs.core.get.call(null,map__53820__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__53821 = p__53819;
var map__53821__$1 = ((((!((map__53821 == null)))?((((map__53821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53821):map__53821);
var files_msg = map__53821__$1;
var files = cljs.core.get.call(null,map__53821__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1507056183201
