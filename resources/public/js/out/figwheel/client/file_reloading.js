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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41191_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41191_SHARP_));
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
var seq__41192 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41193 = null;
var count__41194 = (0);
var i__41195 = (0);
while(true){
if((i__41195 < count__41194)){
var n = cljs.core._nth.call(null,chunk__41193,i__41195);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41196 = seq__41192;
var G__41197 = chunk__41193;
var G__41198 = count__41194;
var G__41199 = (i__41195 + (1));
seq__41192 = G__41196;
chunk__41193 = G__41197;
count__41194 = G__41198;
i__41195 = G__41199;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__41192);
if(temp__5290__auto__){
var seq__41192__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41192__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__41192__$1);
var G__41200 = cljs.core.chunk_rest.call(null,seq__41192__$1);
var G__41201 = c__31180__auto__;
var G__41202 = cljs.core.count.call(null,c__31180__auto__);
var G__41203 = (0);
seq__41192 = G__41200;
chunk__41193 = G__41201;
count__41194 = G__41202;
i__41195 = G__41203;
continue;
} else {
var n = cljs.core.first.call(null,seq__41192__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41204 = cljs.core.next.call(null,seq__41192__$1);
var G__41205 = null;
var G__41206 = (0);
var G__41207 = (0);
seq__41192 = G__41204;
chunk__41193 = G__41205;
count__41194 = G__41206;
i__41195 = G__41207;
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

var seq__41217_41225 = cljs.core.seq.call(null,deps);
var chunk__41218_41226 = null;
var count__41219_41227 = (0);
var i__41220_41228 = (0);
while(true){
if((i__41220_41228 < count__41219_41227)){
var dep_41229 = cljs.core._nth.call(null,chunk__41218_41226,i__41220_41228);
topo_sort_helper_STAR_.call(null,dep_41229,(depth + (1)),state);

var G__41230 = seq__41217_41225;
var G__41231 = chunk__41218_41226;
var G__41232 = count__41219_41227;
var G__41233 = (i__41220_41228 + (1));
seq__41217_41225 = G__41230;
chunk__41218_41226 = G__41231;
count__41219_41227 = G__41232;
i__41220_41228 = G__41233;
continue;
} else {
var temp__5290__auto___41234 = cljs.core.seq.call(null,seq__41217_41225);
if(temp__5290__auto___41234){
var seq__41217_41235__$1 = temp__5290__auto___41234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41217_41235__$1)){
var c__31180__auto___41236 = cljs.core.chunk_first.call(null,seq__41217_41235__$1);
var G__41237 = cljs.core.chunk_rest.call(null,seq__41217_41235__$1);
var G__41238 = c__31180__auto___41236;
var G__41239 = cljs.core.count.call(null,c__31180__auto___41236);
var G__41240 = (0);
seq__41217_41225 = G__41237;
chunk__41218_41226 = G__41238;
count__41219_41227 = G__41239;
i__41220_41228 = G__41240;
continue;
} else {
var dep_41241 = cljs.core.first.call(null,seq__41217_41235__$1);
topo_sort_helper_STAR_.call(null,dep_41241,(depth + (1)),state);

var G__41242 = cljs.core.next.call(null,seq__41217_41235__$1);
var G__41243 = null;
var G__41244 = (0);
var G__41245 = (0);
seq__41217_41225 = G__41242;
chunk__41218_41226 = G__41243;
count__41219_41227 = G__41244;
i__41220_41228 = G__41245;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41221){
var vec__41222 = p__41221;
var seq__41223 = cljs.core.seq.call(null,vec__41222);
var first__41224 = cljs.core.first.call(null,seq__41223);
var seq__41223__$1 = cljs.core.next.call(null,seq__41223);
var x = first__41224;
var xs = seq__41223__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41222,seq__41223,first__41224,seq__41223__$1,x,xs,get_deps__$1){
return (function (p1__41208_SHARP_){
return clojure.set.difference.call(null,p1__41208_SHARP_,x);
});})(vec__41222,seq__41223,first__41224,seq__41223__$1,x,xs,get_deps__$1))
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
var seq__41246 = cljs.core.seq.call(null,provides);
var chunk__41247 = null;
var count__41248 = (0);
var i__41249 = (0);
while(true){
if((i__41249 < count__41248)){
var prov = cljs.core._nth.call(null,chunk__41247,i__41249);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41250_41258 = cljs.core.seq.call(null,requires);
var chunk__41251_41259 = null;
var count__41252_41260 = (0);
var i__41253_41261 = (0);
while(true){
if((i__41253_41261 < count__41252_41260)){
var req_41262 = cljs.core._nth.call(null,chunk__41251_41259,i__41253_41261);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41262,prov);

var G__41263 = seq__41250_41258;
var G__41264 = chunk__41251_41259;
var G__41265 = count__41252_41260;
var G__41266 = (i__41253_41261 + (1));
seq__41250_41258 = G__41263;
chunk__41251_41259 = G__41264;
count__41252_41260 = G__41265;
i__41253_41261 = G__41266;
continue;
} else {
var temp__5290__auto___41267 = cljs.core.seq.call(null,seq__41250_41258);
if(temp__5290__auto___41267){
var seq__41250_41268__$1 = temp__5290__auto___41267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41250_41268__$1)){
var c__31180__auto___41269 = cljs.core.chunk_first.call(null,seq__41250_41268__$1);
var G__41270 = cljs.core.chunk_rest.call(null,seq__41250_41268__$1);
var G__41271 = c__31180__auto___41269;
var G__41272 = cljs.core.count.call(null,c__31180__auto___41269);
var G__41273 = (0);
seq__41250_41258 = G__41270;
chunk__41251_41259 = G__41271;
count__41252_41260 = G__41272;
i__41253_41261 = G__41273;
continue;
} else {
var req_41274 = cljs.core.first.call(null,seq__41250_41268__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41274,prov);

var G__41275 = cljs.core.next.call(null,seq__41250_41268__$1);
var G__41276 = null;
var G__41277 = (0);
var G__41278 = (0);
seq__41250_41258 = G__41275;
chunk__41251_41259 = G__41276;
count__41252_41260 = G__41277;
i__41253_41261 = G__41278;
continue;
}
} else {
}
}
break;
}

var G__41279 = seq__41246;
var G__41280 = chunk__41247;
var G__41281 = count__41248;
var G__41282 = (i__41249 + (1));
seq__41246 = G__41279;
chunk__41247 = G__41280;
count__41248 = G__41281;
i__41249 = G__41282;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__41246);
if(temp__5290__auto__){
var seq__41246__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41246__$1)){
var c__31180__auto__ = cljs.core.chunk_first.call(null,seq__41246__$1);
var G__41283 = cljs.core.chunk_rest.call(null,seq__41246__$1);
var G__41284 = c__31180__auto__;
var G__41285 = cljs.core.count.call(null,c__31180__auto__);
var G__41286 = (0);
seq__41246 = G__41283;
chunk__41247 = G__41284;
count__41248 = G__41285;
i__41249 = G__41286;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41246__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41254_41287 = cljs.core.seq.call(null,requires);
var chunk__41255_41288 = null;
var count__41256_41289 = (0);
var i__41257_41290 = (0);
while(true){
if((i__41257_41290 < count__41256_41289)){
var req_41291 = cljs.core._nth.call(null,chunk__41255_41288,i__41257_41290);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41291,prov);

var G__41292 = seq__41254_41287;
var G__41293 = chunk__41255_41288;
var G__41294 = count__41256_41289;
var G__41295 = (i__41257_41290 + (1));
seq__41254_41287 = G__41292;
chunk__41255_41288 = G__41293;
count__41256_41289 = G__41294;
i__41257_41290 = G__41295;
continue;
} else {
var temp__5290__auto___41296__$1 = cljs.core.seq.call(null,seq__41254_41287);
if(temp__5290__auto___41296__$1){
var seq__41254_41297__$1 = temp__5290__auto___41296__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41254_41297__$1)){
var c__31180__auto___41298 = cljs.core.chunk_first.call(null,seq__41254_41297__$1);
var G__41299 = cljs.core.chunk_rest.call(null,seq__41254_41297__$1);
var G__41300 = c__31180__auto___41298;
var G__41301 = cljs.core.count.call(null,c__31180__auto___41298);
var G__41302 = (0);
seq__41254_41287 = G__41299;
chunk__41255_41288 = G__41300;
count__41256_41289 = G__41301;
i__41257_41290 = G__41302;
continue;
} else {
var req_41303 = cljs.core.first.call(null,seq__41254_41297__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41303,prov);

var G__41304 = cljs.core.next.call(null,seq__41254_41297__$1);
var G__41305 = null;
var G__41306 = (0);
var G__41307 = (0);
seq__41254_41287 = G__41304;
chunk__41255_41288 = G__41305;
count__41256_41289 = G__41306;
i__41257_41290 = G__41307;
continue;
}
} else {
}
}
break;
}

var G__41308 = cljs.core.next.call(null,seq__41246__$1);
var G__41309 = null;
var G__41310 = (0);
var G__41311 = (0);
seq__41246 = G__41308;
chunk__41247 = G__41309;
count__41248 = G__41310;
i__41249 = G__41311;
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
var seq__41312_41316 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41313_41317 = null;
var count__41314_41318 = (0);
var i__41315_41319 = (0);
while(true){
if((i__41315_41319 < count__41314_41318)){
var ns_41320 = cljs.core._nth.call(null,chunk__41313_41317,i__41315_41319);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41320);

var G__41321 = seq__41312_41316;
var G__41322 = chunk__41313_41317;
var G__41323 = count__41314_41318;
var G__41324 = (i__41315_41319 + (1));
seq__41312_41316 = G__41321;
chunk__41313_41317 = G__41322;
count__41314_41318 = G__41323;
i__41315_41319 = G__41324;
continue;
} else {
var temp__5290__auto___41325 = cljs.core.seq.call(null,seq__41312_41316);
if(temp__5290__auto___41325){
var seq__41312_41326__$1 = temp__5290__auto___41325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41312_41326__$1)){
var c__31180__auto___41327 = cljs.core.chunk_first.call(null,seq__41312_41326__$1);
var G__41328 = cljs.core.chunk_rest.call(null,seq__41312_41326__$1);
var G__41329 = c__31180__auto___41327;
var G__41330 = cljs.core.count.call(null,c__31180__auto___41327);
var G__41331 = (0);
seq__41312_41316 = G__41328;
chunk__41313_41317 = G__41329;
count__41314_41318 = G__41330;
i__41315_41319 = G__41331;
continue;
} else {
var ns_41332 = cljs.core.first.call(null,seq__41312_41326__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41332);

var G__41333 = cljs.core.next.call(null,seq__41312_41326__$1);
var G__41334 = null;
var G__41335 = (0);
var G__41336 = (0);
seq__41312_41316 = G__41333;
chunk__41313_41317 = G__41334;
count__41314_41318 = G__41335;
i__41315_41319 = G__41336;
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
var G__41337__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41338__i = 0, G__41338__a = new Array(arguments.length -  0);
while (G__41338__i < G__41338__a.length) {G__41338__a[G__41338__i] = arguments[G__41338__i + 0]; ++G__41338__i;}
  args = new cljs.core.IndexedSeq(G__41338__a,0,null);
} 
return G__41337__delegate.call(this,args);};
G__41337.cljs$lang$maxFixedArity = 0;
G__41337.cljs$lang$applyTo = (function (arglist__41339){
var args = cljs.core.seq(arglist__41339);
return G__41337__delegate(args);
});
G__41337.cljs$core$IFn$_invoke$arity$variadic = G__41337__delegate;
return G__41337;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__41340_SHARP_,p2__41341_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41340_SHARP_)].join('')),p2__41341_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__41342_SHARP_,p2__41343_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41342_SHARP_)].join(''),p2__41343_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__41344 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__41344.addCallback(((function (G__41344){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__41344))
);

G__41344.addErrback(((function (G__41344){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__41344))
);

return G__41344;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41345 = cljs.core._EQ_;
var expr__41346 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41345.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41346))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__41345,expr__41346){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__41345,expr__41346))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__41345,expr__41346){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41348){if((e41348 instanceof Error)){
var e = e41348;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41348;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__41345,expr__41346))
} else {
if(cljs.core.truth_(pred__41345.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41346))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__41345.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__41346))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__41345.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__41346))){
return ((function (pred__41345,expr__41346){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e41349){if((e41349 instanceof Error)){
var e = e41349;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41349;

}
}})());
});
;})(pred__41345,expr__41346))
} else {
return ((function (pred__41345,expr__41346){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41345,expr__41346))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41350,callback){
var map__41351 = p__41350;
var map__41351__$1 = ((((!((map__41351 == null)))?((((map__41351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41351):map__41351);
var file_msg = map__41351__$1;
var request_url = cljs.core.get.call(null,map__41351__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__41351,map__41351__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41351,map__41351__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__35248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto__){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto__){
return (function (state_41375){
var state_val_41376 = (state_41375[(1)]);
if((state_val_41376 === (7))){
var inst_41371 = (state_41375[(2)]);
var state_41375__$1 = state_41375;
var statearr_41377_41394 = state_41375__$1;
(statearr_41377_41394[(2)] = inst_41371);

(statearr_41377_41394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (1))){
var state_41375__$1 = state_41375;
var statearr_41378_41395 = state_41375__$1;
(statearr_41378_41395[(2)] = null);

(statearr_41378_41395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (4))){
var inst_41355 = (state_41375[(7)]);
var inst_41355__$1 = (state_41375[(2)]);
var state_41375__$1 = (function (){var statearr_41379 = state_41375;
(statearr_41379[(7)] = inst_41355__$1);

return statearr_41379;
})();
if(cljs.core.truth_(inst_41355__$1)){
var statearr_41380_41396 = state_41375__$1;
(statearr_41380_41396[(1)] = (5));

} else {
var statearr_41381_41397 = state_41375__$1;
(statearr_41381_41397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (6))){
var state_41375__$1 = state_41375;
var statearr_41382_41398 = state_41375__$1;
(statearr_41382_41398[(2)] = null);

(statearr_41382_41398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (3))){
var inst_41373 = (state_41375[(2)]);
var state_41375__$1 = state_41375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41375__$1,inst_41373);
} else {
if((state_val_41376 === (2))){
var state_41375__$1 = state_41375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41375__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41376 === (11))){
var inst_41367 = (state_41375[(2)]);
var state_41375__$1 = (function (){var statearr_41383 = state_41375;
(statearr_41383[(8)] = inst_41367);

return statearr_41383;
})();
var statearr_41384_41399 = state_41375__$1;
(statearr_41384_41399[(2)] = null);

(statearr_41384_41399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (9))){
var inst_41359 = (state_41375[(9)]);
var inst_41361 = (state_41375[(10)]);
var inst_41363 = inst_41361.call(null,inst_41359);
var state_41375__$1 = state_41375;
var statearr_41385_41400 = state_41375__$1;
(statearr_41385_41400[(2)] = inst_41363);

(statearr_41385_41400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (5))){
var inst_41355 = (state_41375[(7)]);
var inst_41357 = figwheel.client.file_reloading.blocking_load.call(null,inst_41355);
var state_41375__$1 = state_41375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41375__$1,(8),inst_41357);
} else {
if((state_val_41376 === (10))){
var inst_41359 = (state_41375[(9)]);
var inst_41365 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41359);
var state_41375__$1 = state_41375;
var statearr_41386_41401 = state_41375__$1;
(statearr_41386_41401[(2)] = inst_41365);

(statearr_41386_41401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (8))){
var inst_41355 = (state_41375[(7)]);
var inst_41361 = (state_41375[(10)]);
var inst_41359 = (state_41375[(2)]);
var inst_41360 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41361__$1 = cljs.core.get.call(null,inst_41360,inst_41355);
var state_41375__$1 = (function (){var statearr_41387 = state_41375;
(statearr_41387[(9)] = inst_41359);

(statearr_41387[(10)] = inst_41361__$1);

return statearr_41387;
})();
if(cljs.core.truth_(inst_41361__$1)){
var statearr_41388_41402 = state_41375__$1;
(statearr_41388_41402[(1)] = (9));

} else {
var statearr_41389_41403 = state_41375__$1;
(statearr_41389_41403[(1)] = (10));

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
});})(c__35248__auto__))
;
return ((function (switch__35158__auto__,c__35248__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35159__auto__ = null;
var figwheel$client$file_reloading$state_machine__35159__auto____0 = (function (){
var statearr_41390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41390[(0)] = figwheel$client$file_reloading$state_machine__35159__auto__);

(statearr_41390[(1)] = (1));

return statearr_41390;
});
var figwheel$client$file_reloading$state_machine__35159__auto____1 = (function (state_41375){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_41375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e41391){if((e41391 instanceof Object)){
var ex__35162__auto__ = e41391;
var statearr_41392_41404 = state_41375;
(statearr_41392_41404[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41405 = state_41375;
state_41375 = G__41405;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35159__auto__ = function(state_41375){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35159__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35159__auto____1.call(this,state_41375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35159__auto____0;
figwheel$client$file_reloading$state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35159__auto____1;
return figwheel$client$file_reloading$state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto__))
})();
var state__35250__auto__ = (function (){var statearr_41393 = f__35249__auto__.call(null);
(statearr_41393[(6)] = c__35248__auto__);

return statearr_41393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto__))
);

return c__35248__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41406,callback){
var map__41407 = p__41406;
var map__41407__$1 = ((((!((map__41407 == null)))?((((map__41407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41407):map__41407);
var file_msg = map__41407__$1;
var namespace = cljs.core.get.call(null,map__41407__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41407,map__41407__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41407,map__41407__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__41409){
var map__41410 = p__41409;
var map__41410__$1 = ((((!((map__41410 == null)))?((((map__41410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41410):map__41410);
var file_msg = map__41410__$1;
var namespace = cljs.core.get.call(null,map__41410__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41412){
var map__41413 = p__41412;
var map__41413__$1 = ((((!((map__41413 == null)))?((((map__41413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41413):map__41413);
var file_msg = map__41413__$1;
var namespace = cljs.core.get.call(null,map__41413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41415,callback){
var map__41416 = p__41415;
var map__41416__$1 = ((((!((map__41416 == null)))?((((map__41416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41416):map__41416);
var file_msg = map__41416__$1;
var request_url = cljs.core.get.call(null,map__41416__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41416__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__35248__auto___41466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto___41466,out){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto___41466,out){
return (function (state_41451){
var state_val_41452 = (state_41451[(1)]);
if((state_val_41452 === (1))){
var inst_41425 = cljs.core.seq.call(null,files);
var inst_41426 = cljs.core.first.call(null,inst_41425);
var inst_41427 = cljs.core.next.call(null,inst_41425);
var inst_41428 = files;
var state_41451__$1 = (function (){var statearr_41453 = state_41451;
(statearr_41453[(7)] = inst_41428);

(statearr_41453[(8)] = inst_41427);

(statearr_41453[(9)] = inst_41426);

return statearr_41453;
})();
var statearr_41454_41467 = state_41451__$1;
(statearr_41454_41467[(2)] = null);

(statearr_41454_41467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41452 === (2))){
var inst_41428 = (state_41451[(7)]);
var inst_41434 = (state_41451[(10)]);
var inst_41433 = cljs.core.seq.call(null,inst_41428);
var inst_41434__$1 = cljs.core.first.call(null,inst_41433);
var inst_41435 = cljs.core.next.call(null,inst_41433);
var inst_41436 = (inst_41434__$1 == null);
var inst_41437 = cljs.core.not.call(null,inst_41436);
var state_41451__$1 = (function (){var statearr_41455 = state_41451;
(statearr_41455[(11)] = inst_41435);

(statearr_41455[(10)] = inst_41434__$1);

return statearr_41455;
})();
if(inst_41437){
var statearr_41456_41468 = state_41451__$1;
(statearr_41456_41468[(1)] = (4));

} else {
var statearr_41457_41469 = state_41451__$1;
(statearr_41457_41469[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41452 === (3))){
var inst_41449 = (state_41451[(2)]);
var state_41451__$1 = state_41451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41451__$1,inst_41449);
} else {
if((state_val_41452 === (4))){
var inst_41434 = (state_41451[(10)]);
var inst_41439 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41434);
var state_41451__$1 = state_41451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41451__$1,(7),inst_41439);
} else {
if((state_val_41452 === (5))){
var inst_41445 = cljs.core.async.close_BANG_.call(null,out);
var state_41451__$1 = state_41451;
var statearr_41458_41470 = state_41451__$1;
(statearr_41458_41470[(2)] = inst_41445);

(statearr_41458_41470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41452 === (6))){
var inst_41447 = (state_41451[(2)]);
var state_41451__$1 = state_41451;
var statearr_41459_41471 = state_41451__$1;
(statearr_41459_41471[(2)] = inst_41447);

(statearr_41459_41471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41452 === (7))){
var inst_41435 = (state_41451[(11)]);
var inst_41441 = (state_41451[(2)]);
var inst_41442 = cljs.core.async.put_BANG_.call(null,out,inst_41441);
var inst_41428 = inst_41435;
var state_41451__$1 = (function (){var statearr_41460 = state_41451;
(statearr_41460[(7)] = inst_41428);

(statearr_41460[(12)] = inst_41442);

return statearr_41460;
})();
var statearr_41461_41472 = state_41451__$1;
(statearr_41461_41472[(2)] = null);

(statearr_41461_41472[(1)] = (2));


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
});})(c__35248__auto___41466,out))
;
return ((function (switch__35158__auto__,c__35248__auto___41466,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35159__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35159__auto____0 = (function (){
var statearr_41462 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41462[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35159__auto__);

(statearr_41462[(1)] = (1));

return statearr_41462;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35159__auto____1 = (function (state_41451){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_41451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e41463){if((e41463 instanceof Object)){
var ex__35162__auto__ = e41463;
var statearr_41464_41473 = state_41451;
(statearr_41464_41473[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41474 = state_41451;
state_41451 = G__41474;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35159__auto__ = function(state_41451){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35159__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35159__auto____1.call(this,state_41451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35159__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35159__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto___41466,out))
})();
var state__35250__auto__ = (function (){var statearr_41465 = f__35249__auto__.call(null);
(statearr_41465[(6)] = c__35248__auto___41466);

return statearr_41465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto___41466,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41475,opts){
var map__41476 = p__41475;
var map__41476__$1 = ((((!((map__41476 == null)))?((((map__41476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41476):map__41476);
var eval_body = cljs.core.get.call(null,map__41476__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41476__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e41478){var e = e41478;
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
return (function (p1__41479_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41479_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__41480){
var vec__41481 = p__41480;
var k = cljs.core.nth.call(null,vec__41481,(0),null);
var v = cljs.core.nth.call(null,vec__41481,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41484){
var vec__41485 = p__41484;
var k = cljs.core.nth.call(null,vec__41485,(0),null);
var v = cljs.core.nth.call(null,vec__41485,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41491,p__41492){
var map__41493 = p__41491;
var map__41493__$1 = ((((!((map__41493 == null)))?((((map__41493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41493):map__41493);
var opts = map__41493__$1;
var before_jsload = cljs.core.get.call(null,map__41493__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41493__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41493__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41494 = p__41492;
var map__41494__$1 = ((((!((map__41494 == null)))?((((map__41494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41494):map__41494);
var msg = map__41494__$1;
var files = cljs.core.get.call(null,map__41494__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41494__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41494__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35248__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35249__auto__ = (function (){var switch__35158__auto__ = ((function (c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41648){
var state_val_41649 = (state_41648[(1)]);
if((state_val_41649 === (7))){
var inst_41508 = (state_41648[(7)]);
var inst_41509 = (state_41648[(8)]);
var inst_41511 = (state_41648[(9)]);
var inst_41510 = (state_41648[(10)]);
var inst_41516 = cljs.core._nth.call(null,inst_41509,inst_41511);
var inst_41517 = figwheel.client.file_reloading.eval_body.call(null,inst_41516,opts);
var inst_41518 = (inst_41511 + (1));
var tmp41650 = inst_41508;
var tmp41651 = inst_41509;
var tmp41652 = inst_41510;
var inst_41508__$1 = tmp41650;
var inst_41509__$1 = tmp41651;
var inst_41510__$1 = tmp41652;
var inst_41511__$1 = inst_41518;
var state_41648__$1 = (function (){var statearr_41653 = state_41648;
(statearr_41653[(7)] = inst_41508__$1);

(statearr_41653[(8)] = inst_41509__$1);

(statearr_41653[(9)] = inst_41511__$1);

(statearr_41653[(11)] = inst_41517);

(statearr_41653[(10)] = inst_41510__$1);

return statearr_41653;
})();
var statearr_41654_41737 = state_41648__$1;
(statearr_41654_41737[(2)] = null);

(statearr_41654_41737[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (20))){
var inst_41551 = (state_41648[(12)]);
var inst_41559 = figwheel.client.file_reloading.sort_files.call(null,inst_41551);
var state_41648__$1 = state_41648;
var statearr_41655_41738 = state_41648__$1;
(statearr_41655_41738[(2)] = inst_41559);

(statearr_41655_41738[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (27))){
var state_41648__$1 = state_41648;
var statearr_41656_41739 = state_41648__$1;
(statearr_41656_41739[(2)] = null);

(statearr_41656_41739[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (1))){
var inst_41500 = (state_41648[(13)]);
var inst_41497 = before_jsload.call(null,files);
var inst_41498 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41499 = (function (){return ((function (inst_41500,inst_41497,inst_41498,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41488_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41488_SHARP_);
});
;})(inst_41500,inst_41497,inst_41498,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41500__$1 = cljs.core.filter.call(null,inst_41499,files);
var inst_41501 = cljs.core.not_empty.call(null,inst_41500__$1);
var state_41648__$1 = (function (){var statearr_41657 = state_41648;
(statearr_41657[(14)] = inst_41497);

(statearr_41657[(15)] = inst_41498);

(statearr_41657[(13)] = inst_41500__$1);

return statearr_41657;
})();
if(cljs.core.truth_(inst_41501)){
var statearr_41658_41740 = state_41648__$1;
(statearr_41658_41740[(1)] = (2));

} else {
var statearr_41659_41741 = state_41648__$1;
(statearr_41659_41741[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (24))){
var state_41648__$1 = state_41648;
var statearr_41660_41742 = state_41648__$1;
(statearr_41660_41742[(2)] = null);

(statearr_41660_41742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (39))){
var inst_41601 = (state_41648[(16)]);
var state_41648__$1 = state_41648;
var statearr_41661_41743 = state_41648__$1;
(statearr_41661_41743[(2)] = inst_41601);

(statearr_41661_41743[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (46))){
var inst_41643 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
var statearr_41662_41744 = state_41648__$1;
(statearr_41662_41744[(2)] = inst_41643);

(statearr_41662_41744[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (4))){
var inst_41545 = (state_41648[(2)]);
var inst_41546 = cljs.core.List.EMPTY;
var inst_41547 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41546);
var inst_41548 = (function (){return ((function (inst_41545,inst_41546,inst_41547,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41489_SHARP_){
var and__30237__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41489_SHARP_);
if(cljs.core.truth_(and__30237__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41489_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__41489_SHARP_)));
} else {
return and__30237__auto__;
}
});
;})(inst_41545,inst_41546,inst_41547,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41549 = cljs.core.filter.call(null,inst_41548,files);
var inst_41550 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41551 = cljs.core.concat.call(null,inst_41549,inst_41550);
var state_41648__$1 = (function (){var statearr_41663 = state_41648;
(statearr_41663[(17)] = inst_41545);

(statearr_41663[(18)] = inst_41547);

(statearr_41663[(12)] = inst_41551);

return statearr_41663;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41664_41745 = state_41648__$1;
(statearr_41664_41745[(1)] = (16));

} else {
var statearr_41665_41746 = state_41648__$1;
(statearr_41665_41746[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (15))){
var inst_41535 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
var statearr_41666_41747 = state_41648__$1;
(statearr_41666_41747[(2)] = inst_41535);

(statearr_41666_41747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (21))){
var inst_41561 = (state_41648[(19)]);
var inst_41561__$1 = (state_41648[(2)]);
var inst_41562 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41561__$1);
var state_41648__$1 = (function (){var statearr_41667 = state_41648;
(statearr_41667[(19)] = inst_41561__$1);

return statearr_41667;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41648__$1,(22),inst_41562);
} else {
if((state_val_41649 === (31))){
var inst_41646 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41648__$1,inst_41646);
} else {
if((state_val_41649 === (32))){
var inst_41601 = (state_41648[(16)]);
var inst_41606 = inst_41601.cljs$lang$protocol_mask$partition0$;
var inst_41607 = (inst_41606 & (64));
var inst_41608 = inst_41601.cljs$core$ISeq$;
var inst_41609 = (cljs.core.PROTOCOL_SENTINEL === inst_41608);
var inst_41610 = (inst_41607) || (inst_41609);
var state_41648__$1 = state_41648;
if(cljs.core.truth_(inst_41610)){
var statearr_41668_41748 = state_41648__$1;
(statearr_41668_41748[(1)] = (35));

} else {
var statearr_41669_41749 = state_41648__$1;
(statearr_41669_41749[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (40))){
var inst_41623 = (state_41648[(20)]);
var inst_41622 = (state_41648[(2)]);
var inst_41623__$1 = cljs.core.get.call(null,inst_41622,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41624 = cljs.core.get.call(null,inst_41622,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41625 = cljs.core.not_empty.call(null,inst_41623__$1);
var state_41648__$1 = (function (){var statearr_41670 = state_41648;
(statearr_41670[(20)] = inst_41623__$1);

(statearr_41670[(21)] = inst_41624);

return statearr_41670;
})();
if(cljs.core.truth_(inst_41625)){
var statearr_41671_41750 = state_41648__$1;
(statearr_41671_41750[(1)] = (41));

} else {
var statearr_41672_41751 = state_41648__$1;
(statearr_41672_41751[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (33))){
var state_41648__$1 = state_41648;
var statearr_41673_41752 = state_41648__$1;
(statearr_41673_41752[(2)] = false);

(statearr_41673_41752[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (13))){
var inst_41521 = (state_41648[(22)]);
var inst_41525 = cljs.core.chunk_first.call(null,inst_41521);
var inst_41526 = cljs.core.chunk_rest.call(null,inst_41521);
var inst_41527 = cljs.core.count.call(null,inst_41525);
var inst_41508 = inst_41526;
var inst_41509 = inst_41525;
var inst_41510 = inst_41527;
var inst_41511 = (0);
var state_41648__$1 = (function (){var statearr_41674 = state_41648;
(statearr_41674[(7)] = inst_41508);

(statearr_41674[(8)] = inst_41509);

(statearr_41674[(9)] = inst_41511);

(statearr_41674[(10)] = inst_41510);

return statearr_41674;
})();
var statearr_41675_41753 = state_41648__$1;
(statearr_41675_41753[(2)] = null);

(statearr_41675_41753[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (22))){
var inst_41564 = (state_41648[(23)]);
var inst_41565 = (state_41648[(24)]);
var inst_41561 = (state_41648[(19)]);
var inst_41569 = (state_41648[(25)]);
var inst_41564__$1 = (state_41648[(2)]);
var inst_41565__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41564__$1);
var inst_41566 = (function (){var all_files = inst_41561;
var res_SINGLEQUOTE_ = inst_41564__$1;
var res = inst_41565__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41564,inst_41565,inst_41561,inst_41569,inst_41564__$1,inst_41565__$1,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41490_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41490_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41564,inst_41565,inst_41561,inst_41569,inst_41564__$1,inst_41565__$1,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41567 = cljs.core.filter.call(null,inst_41566,inst_41564__$1);
var inst_41568 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41569__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41568);
var inst_41570 = cljs.core.not_empty.call(null,inst_41569__$1);
var state_41648__$1 = (function (){var statearr_41676 = state_41648;
(statearr_41676[(23)] = inst_41564__$1);

(statearr_41676[(24)] = inst_41565__$1);

(statearr_41676[(26)] = inst_41567);

(statearr_41676[(25)] = inst_41569__$1);

return statearr_41676;
})();
if(cljs.core.truth_(inst_41570)){
var statearr_41677_41754 = state_41648__$1;
(statearr_41677_41754[(1)] = (23));

} else {
var statearr_41678_41755 = state_41648__$1;
(statearr_41678_41755[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (36))){
var state_41648__$1 = state_41648;
var statearr_41679_41756 = state_41648__$1;
(statearr_41679_41756[(2)] = false);

(statearr_41679_41756[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (41))){
var inst_41623 = (state_41648[(20)]);
var inst_41627 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41628 = cljs.core.map.call(null,inst_41627,inst_41623);
var inst_41629 = cljs.core.pr_str.call(null,inst_41628);
var inst_41630 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41629)].join('');
var inst_41631 = figwheel.client.utils.log.call(null,inst_41630);
var state_41648__$1 = state_41648;
var statearr_41680_41757 = state_41648__$1;
(statearr_41680_41757[(2)] = inst_41631);

(statearr_41680_41757[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (43))){
var inst_41624 = (state_41648[(21)]);
var inst_41634 = (state_41648[(2)]);
var inst_41635 = cljs.core.not_empty.call(null,inst_41624);
var state_41648__$1 = (function (){var statearr_41681 = state_41648;
(statearr_41681[(27)] = inst_41634);

return statearr_41681;
})();
if(cljs.core.truth_(inst_41635)){
var statearr_41682_41758 = state_41648__$1;
(statearr_41682_41758[(1)] = (44));

} else {
var statearr_41683_41759 = state_41648__$1;
(statearr_41683_41759[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (29))){
var inst_41564 = (state_41648[(23)]);
var inst_41601 = (state_41648[(16)]);
var inst_41565 = (state_41648[(24)]);
var inst_41561 = (state_41648[(19)]);
var inst_41567 = (state_41648[(26)]);
var inst_41569 = (state_41648[(25)]);
var inst_41597 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41600 = (function (){var all_files = inst_41561;
var res_SINGLEQUOTE_ = inst_41564;
var res = inst_41565;
var files_not_loaded = inst_41567;
var dependencies_that_loaded = inst_41569;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41564,inst_41601,inst_41565,inst_41561,inst_41567,inst_41569,inst_41597,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41599){
var map__41684 = p__41599;
var map__41684__$1 = ((((!((map__41684 == null)))?((((map__41684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41684):map__41684);
var namespace = cljs.core.get.call(null,map__41684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41564,inst_41601,inst_41565,inst_41561,inst_41567,inst_41569,inst_41597,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41601__$1 = cljs.core.group_by.call(null,inst_41600,inst_41567);
var inst_41603 = (inst_41601__$1 == null);
var inst_41604 = cljs.core.not.call(null,inst_41603);
var state_41648__$1 = (function (){var statearr_41686 = state_41648;
(statearr_41686[(16)] = inst_41601__$1);

(statearr_41686[(28)] = inst_41597);

return statearr_41686;
})();
if(inst_41604){
var statearr_41687_41760 = state_41648__$1;
(statearr_41687_41760[(1)] = (32));

} else {
var statearr_41688_41761 = state_41648__$1;
(statearr_41688_41761[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (44))){
var inst_41624 = (state_41648[(21)]);
var inst_41637 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41624);
var inst_41638 = cljs.core.pr_str.call(null,inst_41637);
var inst_41639 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41638)].join('');
var inst_41640 = figwheel.client.utils.log.call(null,inst_41639);
var state_41648__$1 = state_41648;
var statearr_41689_41762 = state_41648__$1;
(statearr_41689_41762[(2)] = inst_41640);

(statearr_41689_41762[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (6))){
var inst_41542 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
var statearr_41690_41763 = state_41648__$1;
(statearr_41690_41763[(2)] = inst_41542);

(statearr_41690_41763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (28))){
var inst_41567 = (state_41648[(26)]);
var inst_41594 = (state_41648[(2)]);
var inst_41595 = cljs.core.not_empty.call(null,inst_41567);
var state_41648__$1 = (function (){var statearr_41691 = state_41648;
(statearr_41691[(29)] = inst_41594);

return statearr_41691;
})();
if(cljs.core.truth_(inst_41595)){
var statearr_41692_41764 = state_41648__$1;
(statearr_41692_41764[(1)] = (29));

} else {
var statearr_41693_41765 = state_41648__$1;
(statearr_41693_41765[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (25))){
var inst_41565 = (state_41648[(24)]);
var inst_41581 = (state_41648[(2)]);
var inst_41582 = cljs.core.not_empty.call(null,inst_41565);
var state_41648__$1 = (function (){var statearr_41694 = state_41648;
(statearr_41694[(30)] = inst_41581);

return statearr_41694;
})();
if(cljs.core.truth_(inst_41582)){
var statearr_41695_41766 = state_41648__$1;
(statearr_41695_41766[(1)] = (26));

} else {
var statearr_41696_41767 = state_41648__$1;
(statearr_41696_41767[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (34))){
var inst_41617 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
if(cljs.core.truth_(inst_41617)){
var statearr_41697_41768 = state_41648__$1;
(statearr_41697_41768[(1)] = (38));

} else {
var statearr_41698_41769 = state_41648__$1;
(statearr_41698_41769[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (17))){
var state_41648__$1 = state_41648;
var statearr_41699_41770 = state_41648__$1;
(statearr_41699_41770[(2)] = recompile_dependents);

(statearr_41699_41770[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (3))){
var state_41648__$1 = state_41648;
var statearr_41700_41771 = state_41648__$1;
(statearr_41700_41771[(2)] = null);

(statearr_41700_41771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (12))){
var inst_41538 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
var statearr_41701_41772 = state_41648__$1;
(statearr_41701_41772[(2)] = inst_41538);

(statearr_41701_41772[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (2))){
var inst_41500 = (state_41648[(13)]);
var inst_41507 = cljs.core.seq.call(null,inst_41500);
var inst_41508 = inst_41507;
var inst_41509 = null;
var inst_41510 = (0);
var inst_41511 = (0);
var state_41648__$1 = (function (){var statearr_41702 = state_41648;
(statearr_41702[(7)] = inst_41508);

(statearr_41702[(8)] = inst_41509);

(statearr_41702[(9)] = inst_41511);

(statearr_41702[(10)] = inst_41510);

return statearr_41702;
})();
var statearr_41703_41773 = state_41648__$1;
(statearr_41703_41773[(2)] = null);

(statearr_41703_41773[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (23))){
var inst_41564 = (state_41648[(23)]);
var inst_41565 = (state_41648[(24)]);
var inst_41561 = (state_41648[(19)]);
var inst_41567 = (state_41648[(26)]);
var inst_41569 = (state_41648[(25)]);
var inst_41572 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41574 = (function (){var all_files = inst_41561;
var res_SINGLEQUOTE_ = inst_41564;
var res = inst_41565;
var files_not_loaded = inst_41567;
var dependencies_that_loaded = inst_41569;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41564,inst_41565,inst_41561,inst_41567,inst_41569,inst_41572,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41573){
var map__41704 = p__41573;
var map__41704__$1 = ((((!((map__41704 == null)))?((((map__41704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41704):map__41704);
var request_url = cljs.core.get.call(null,map__41704__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41564,inst_41565,inst_41561,inst_41567,inst_41569,inst_41572,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41575 = cljs.core.reverse.call(null,inst_41569);
var inst_41576 = cljs.core.map.call(null,inst_41574,inst_41575);
var inst_41577 = cljs.core.pr_str.call(null,inst_41576);
var inst_41578 = figwheel.client.utils.log.call(null,inst_41577);
var state_41648__$1 = (function (){var statearr_41706 = state_41648;
(statearr_41706[(31)] = inst_41572);

return statearr_41706;
})();
var statearr_41707_41774 = state_41648__$1;
(statearr_41707_41774[(2)] = inst_41578);

(statearr_41707_41774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (35))){
var state_41648__$1 = state_41648;
var statearr_41708_41775 = state_41648__$1;
(statearr_41708_41775[(2)] = true);

(statearr_41708_41775[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (19))){
var inst_41551 = (state_41648[(12)]);
var inst_41557 = figwheel.client.file_reloading.expand_files.call(null,inst_41551);
var state_41648__$1 = state_41648;
var statearr_41709_41776 = state_41648__$1;
(statearr_41709_41776[(2)] = inst_41557);

(statearr_41709_41776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (11))){
var state_41648__$1 = state_41648;
var statearr_41710_41777 = state_41648__$1;
(statearr_41710_41777[(2)] = null);

(statearr_41710_41777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (9))){
var inst_41540 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
var statearr_41711_41778 = state_41648__$1;
(statearr_41711_41778[(2)] = inst_41540);

(statearr_41711_41778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (5))){
var inst_41511 = (state_41648[(9)]);
var inst_41510 = (state_41648[(10)]);
var inst_41513 = (inst_41511 < inst_41510);
var inst_41514 = inst_41513;
var state_41648__$1 = state_41648;
if(cljs.core.truth_(inst_41514)){
var statearr_41712_41779 = state_41648__$1;
(statearr_41712_41779[(1)] = (7));

} else {
var statearr_41713_41780 = state_41648__$1;
(statearr_41713_41780[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (14))){
var inst_41521 = (state_41648[(22)]);
var inst_41530 = cljs.core.first.call(null,inst_41521);
var inst_41531 = figwheel.client.file_reloading.eval_body.call(null,inst_41530,opts);
var inst_41532 = cljs.core.next.call(null,inst_41521);
var inst_41508 = inst_41532;
var inst_41509 = null;
var inst_41510 = (0);
var inst_41511 = (0);
var state_41648__$1 = (function (){var statearr_41714 = state_41648;
(statearr_41714[(7)] = inst_41508);

(statearr_41714[(8)] = inst_41509);

(statearr_41714[(9)] = inst_41511);

(statearr_41714[(32)] = inst_41531);

(statearr_41714[(10)] = inst_41510);

return statearr_41714;
})();
var statearr_41715_41781 = state_41648__$1;
(statearr_41715_41781[(2)] = null);

(statearr_41715_41781[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (45))){
var state_41648__$1 = state_41648;
var statearr_41716_41782 = state_41648__$1;
(statearr_41716_41782[(2)] = null);

(statearr_41716_41782[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (26))){
var inst_41564 = (state_41648[(23)]);
var inst_41565 = (state_41648[(24)]);
var inst_41561 = (state_41648[(19)]);
var inst_41567 = (state_41648[(26)]);
var inst_41569 = (state_41648[(25)]);
var inst_41584 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41586 = (function (){var all_files = inst_41561;
var res_SINGLEQUOTE_ = inst_41564;
var res = inst_41565;
var files_not_loaded = inst_41567;
var dependencies_that_loaded = inst_41569;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41564,inst_41565,inst_41561,inst_41567,inst_41569,inst_41584,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41585){
var map__41717 = p__41585;
var map__41717__$1 = ((((!((map__41717 == null)))?((((map__41717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41717):map__41717);
var namespace = cljs.core.get.call(null,map__41717__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41717__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41564,inst_41565,inst_41561,inst_41567,inst_41569,inst_41584,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41587 = cljs.core.map.call(null,inst_41586,inst_41565);
var inst_41588 = cljs.core.pr_str.call(null,inst_41587);
var inst_41589 = figwheel.client.utils.log.call(null,inst_41588);
var inst_41590 = (function (){var all_files = inst_41561;
var res_SINGLEQUOTE_ = inst_41564;
var res = inst_41565;
var files_not_loaded = inst_41567;
var dependencies_that_loaded = inst_41569;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41564,inst_41565,inst_41561,inst_41567,inst_41569,inst_41584,inst_41586,inst_41587,inst_41588,inst_41589,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41564,inst_41565,inst_41561,inst_41567,inst_41569,inst_41584,inst_41586,inst_41587,inst_41588,inst_41589,state_val_41649,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41591 = setTimeout(inst_41590,(10));
var state_41648__$1 = (function (){var statearr_41719 = state_41648;
(statearr_41719[(33)] = inst_41584);

(statearr_41719[(34)] = inst_41589);

return statearr_41719;
})();
var statearr_41720_41783 = state_41648__$1;
(statearr_41720_41783[(2)] = inst_41591);

(statearr_41720_41783[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (16))){
var state_41648__$1 = state_41648;
var statearr_41721_41784 = state_41648__$1;
(statearr_41721_41784[(2)] = reload_dependents);

(statearr_41721_41784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (38))){
var inst_41601 = (state_41648[(16)]);
var inst_41619 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41601);
var state_41648__$1 = state_41648;
var statearr_41722_41785 = state_41648__$1;
(statearr_41722_41785[(2)] = inst_41619);

(statearr_41722_41785[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (30))){
var state_41648__$1 = state_41648;
var statearr_41723_41786 = state_41648__$1;
(statearr_41723_41786[(2)] = null);

(statearr_41723_41786[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (10))){
var inst_41521 = (state_41648[(22)]);
var inst_41523 = cljs.core.chunked_seq_QMARK_.call(null,inst_41521);
var state_41648__$1 = state_41648;
if(inst_41523){
var statearr_41724_41787 = state_41648__$1;
(statearr_41724_41787[(1)] = (13));

} else {
var statearr_41725_41788 = state_41648__$1;
(statearr_41725_41788[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (18))){
var inst_41555 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
if(cljs.core.truth_(inst_41555)){
var statearr_41726_41789 = state_41648__$1;
(statearr_41726_41789[(1)] = (19));

} else {
var statearr_41727_41790 = state_41648__$1;
(statearr_41727_41790[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (42))){
var state_41648__$1 = state_41648;
var statearr_41728_41791 = state_41648__$1;
(statearr_41728_41791[(2)] = null);

(statearr_41728_41791[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (37))){
var inst_41614 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
var statearr_41729_41792 = state_41648__$1;
(statearr_41729_41792[(2)] = inst_41614);

(statearr_41729_41792[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (8))){
var inst_41521 = (state_41648[(22)]);
var inst_41508 = (state_41648[(7)]);
var inst_41521__$1 = cljs.core.seq.call(null,inst_41508);
var state_41648__$1 = (function (){var statearr_41730 = state_41648;
(statearr_41730[(22)] = inst_41521__$1);

return statearr_41730;
})();
if(inst_41521__$1){
var statearr_41731_41793 = state_41648__$1;
(statearr_41731_41793[(1)] = (10));

} else {
var statearr_41732_41794 = state_41648__$1;
(statearr_41732_41794[(1)] = (11));

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
});})(c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35158__auto__,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35159__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35159__auto____0 = (function (){
var statearr_41733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41733[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35159__auto__);

(statearr_41733[(1)] = (1));

return statearr_41733;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35159__auto____1 = (function (state_41648){
while(true){
var ret_value__35160__auto__ = (function (){try{while(true){
var result__35161__auto__ = switch__35158__auto__.call(null,state_41648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35161__auto__;
}
break;
}
}catch (e41734){if((e41734 instanceof Object)){
var ex__35162__auto__ = e41734;
var statearr_41735_41795 = state_41648;
(statearr_41735_41795[(5)] = ex__35162__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41796 = state_41648;
state_41648 = G__41796;
continue;
} else {
return ret_value__35160__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35159__auto__ = function(state_41648){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35159__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35159__auto____1.call(this,state_41648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35159__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35159__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35159__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35159__auto__;
})()
;})(switch__35158__auto__,c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35250__auto__ = (function (){var statearr_41736 = f__35249__auto__.call(null);
(statearr_41736[(6)] = c__35248__auto__);

return statearr_41736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35250__auto__);
});})(c__35248__auto__,map__41493,map__41493__$1,opts,before_jsload,on_jsload,reload_dependents,map__41494,map__41494__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35248__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41799,link){
var map__41800 = p__41799;
var map__41800__$1 = ((((!((map__41800 == null)))?((((map__41800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41800):map__41800);
var file = cljs.core.get.call(null,map__41800__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5290__auto__ = link.href;
if(cljs.core.truth_(temp__5290__auto__)){
var link_href = temp__5290__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5290__auto__,map__41800,map__41800__$1,file){
return (function (p1__41797_SHARP_,p2__41798_SHARP_){
if(cljs.core._EQ_.call(null,p1__41797_SHARP_,p2__41798_SHARP_)){
return p1__41797_SHARP_;
} else {
return false;
}
});})(link_href,temp__5290__auto__,map__41800,map__41800__$1,file))
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
var temp__5290__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41803){
var map__41804 = p__41803;
var map__41804__$1 = ((((!((map__41804 == null)))?((((map__41804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41804):map__41804);
var match_length = cljs.core.get.call(null,map__41804__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41804__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41802_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41802_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41806_SHARP_,p2__41807_SHARP_){
return cljs.core.assoc.call(null,p1__41806_SHARP_,cljs.core.get.call(null,p2__41807_SHARP_,key),p2__41807_SHARP_);
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
var loaded_f_datas_41808 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41808);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41808);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41809,p__41810){
var map__41811 = p__41809;
var map__41811__$1 = ((((!((map__41811 == null)))?((((map__41811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41811):map__41811);
var on_cssload = cljs.core.get.call(null,map__41811__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41812 = p__41810;
var map__41812__$1 = ((((!((map__41812 == null)))?((((map__41812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41812):map__41812);
var files_msg = map__41812__$1;
var files = cljs.core.get.call(null,map__41812__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1506023648593
