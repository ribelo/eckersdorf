// Compiled by ClojureScript 1.9.946 {}
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
var or__30522__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30522__auto__){
return or__30522__auto__;
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
var or__30522__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
var or__30522__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30522__auto____$1)){
return or__30522__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__48734_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__48734_SHARP_));
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
var seq__48735 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__48736 = null;
var count__48737 = (0);
var i__48738 = (0);
while(true){
if((i__48738 < count__48737)){
var n = cljs.core._nth.call(null,chunk__48736,i__48738);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48739 = seq__48735;
var G__48740 = chunk__48736;
var G__48741 = count__48737;
var G__48742 = (i__48738 + (1));
seq__48735 = G__48739;
chunk__48736 = G__48740;
count__48737 = G__48741;
i__48738 = G__48742;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__48735);
if(temp__5457__auto__){
var seq__48735__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48735__$1)){
var c__31453__auto__ = cljs.core.chunk_first.call(null,seq__48735__$1);
var G__48743 = cljs.core.chunk_rest.call(null,seq__48735__$1);
var G__48744 = c__31453__auto__;
var G__48745 = cljs.core.count.call(null,c__31453__auto__);
var G__48746 = (0);
seq__48735 = G__48743;
chunk__48736 = G__48744;
count__48737 = G__48745;
i__48738 = G__48746;
continue;
} else {
var n = cljs.core.first.call(null,seq__48735__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48747 = cljs.core.next.call(null,seq__48735__$1);
var G__48748 = null;
var G__48749 = (0);
var G__48750 = (0);
seq__48735 = G__48747;
chunk__48736 = G__48748;
count__48737 = G__48749;
i__48738 = G__48750;
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
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__48751){
var vec__48752 = p__48751;
var _ = cljs.core.nth.call(null,vec__48752,(0),null);
var v = cljs.core.nth.call(null,vec__48752,(1),null);
var and__30510__auto__ = v;
if(cljs.core.truth_(and__30510__auto__)){
return v.call(null,dep);
} else {
return and__30510__auto__;
}
}),cljs.core.filter.call(null,(function (p__48755){
var vec__48756 = p__48755;
var k = cljs.core.nth.call(null,vec__48756,(0),null);
var v = cljs.core.nth.call(null,vec__48756,(1),null);
return (k > current_depth);
}),topo_state));
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

var seq__48768_48776 = cljs.core.seq.call(null,deps);
var chunk__48769_48777 = null;
var count__48770_48778 = (0);
var i__48771_48779 = (0);
while(true){
if((i__48771_48779 < count__48770_48778)){
var dep_48780 = cljs.core._nth.call(null,chunk__48769_48777,i__48771_48779);
if(cljs.core.truth_((function (){var and__30510__auto__ = dep_48780;
if(cljs.core.truth_(and__30510__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_48780));
} else {
return and__30510__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_48780,(depth + (1)),state);
} else {
}

var G__48781 = seq__48768_48776;
var G__48782 = chunk__48769_48777;
var G__48783 = count__48770_48778;
var G__48784 = (i__48771_48779 + (1));
seq__48768_48776 = G__48781;
chunk__48769_48777 = G__48782;
count__48770_48778 = G__48783;
i__48771_48779 = G__48784;
continue;
} else {
var temp__5457__auto___48785 = cljs.core.seq.call(null,seq__48768_48776);
if(temp__5457__auto___48785){
var seq__48768_48786__$1 = temp__5457__auto___48785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48768_48786__$1)){
var c__31453__auto___48787 = cljs.core.chunk_first.call(null,seq__48768_48786__$1);
var G__48788 = cljs.core.chunk_rest.call(null,seq__48768_48786__$1);
var G__48789 = c__31453__auto___48787;
var G__48790 = cljs.core.count.call(null,c__31453__auto___48787);
var G__48791 = (0);
seq__48768_48776 = G__48788;
chunk__48769_48777 = G__48789;
count__48770_48778 = G__48790;
i__48771_48779 = G__48791;
continue;
} else {
var dep_48792 = cljs.core.first.call(null,seq__48768_48786__$1);
if(cljs.core.truth_((function (){var and__30510__auto__ = dep_48792;
if(cljs.core.truth_(and__30510__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_48792));
} else {
return and__30510__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_48792,(depth + (1)),state);
} else {
}

var G__48793 = cljs.core.next.call(null,seq__48768_48786__$1);
var G__48794 = null;
var G__48795 = (0);
var G__48796 = (0);
seq__48768_48776 = G__48793;
chunk__48769_48777 = G__48794;
count__48770_48778 = G__48795;
i__48771_48779 = G__48796;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__48772){
var vec__48773 = p__48772;
var seq__48774 = cljs.core.seq.call(null,vec__48773);
var first__48775 = cljs.core.first.call(null,seq__48774);
var seq__48774__$1 = cljs.core.next.call(null,seq__48774);
var x = first__48775;
var xs = seq__48774__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__48773,seq__48774,first__48775,seq__48774__$1,x,xs,get_deps__$1){
return (function (p1__48759_SHARP_){
return clojure.set.difference.call(null,p1__48759_SHARP_,x);
});})(vec__48773,seq__48774,first__48775,seq__48774__$1,x,xs,get_deps__$1))
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
var seq__48797 = cljs.core.seq.call(null,provides);
var chunk__48798 = null;
var count__48799 = (0);
var i__48800 = (0);
while(true){
if((i__48800 < count__48799)){
var prov = cljs.core._nth.call(null,chunk__48798,i__48800);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48801_48809 = cljs.core.seq.call(null,requires);
var chunk__48802_48810 = null;
var count__48803_48811 = (0);
var i__48804_48812 = (0);
while(true){
if((i__48804_48812 < count__48803_48811)){
var req_48813 = cljs.core._nth.call(null,chunk__48802_48810,i__48804_48812);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48813,prov);

var G__48814 = seq__48801_48809;
var G__48815 = chunk__48802_48810;
var G__48816 = count__48803_48811;
var G__48817 = (i__48804_48812 + (1));
seq__48801_48809 = G__48814;
chunk__48802_48810 = G__48815;
count__48803_48811 = G__48816;
i__48804_48812 = G__48817;
continue;
} else {
var temp__5457__auto___48818 = cljs.core.seq.call(null,seq__48801_48809);
if(temp__5457__auto___48818){
var seq__48801_48819__$1 = temp__5457__auto___48818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48801_48819__$1)){
var c__31453__auto___48820 = cljs.core.chunk_first.call(null,seq__48801_48819__$1);
var G__48821 = cljs.core.chunk_rest.call(null,seq__48801_48819__$1);
var G__48822 = c__31453__auto___48820;
var G__48823 = cljs.core.count.call(null,c__31453__auto___48820);
var G__48824 = (0);
seq__48801_48809 = G__48821;
chunk__48802_48810 = G__48822;
count__48803_48811 = G__48823;
i__48804_48812 = G__48824;
continue;
} else {
var req_48825 = cljs.core.first.call(null,seq__48801_48819__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48825,prov);

var G__48826 = cljs.core.next.call(null,seq__48801_48819__$1);
var G__48827 = null;
var G__48828 = (0);
var G__48829 = (0);
seq__48801_48809 = G__48826;
chunk__48802_48810 = G__48827;
count__48803_48811 = G__48828;
i__48804_48812 = G__48829;
continue;
}
} else {
}
}
break;
}

var G__48830 = seq__48797;
var G__48831 = chunk__48798;
var G__48832 = count__48799;
var G__48833 = (i__48800 + (1));
seq__48797 = G__48830;
chunk__48798 = G__48831;
count__48799 = G__48832;
i__48800 = G__48833;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__48797);
if(temp__5457__auto__){
var seq__48797__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48797__$1)){
var c__31453__auto__ = cljs.core.chunk_first.call(null,seq__48797__$1);
var G__48834 = cljs.core.chunk_rest.call(null,seq__48797__$1);
var G__48835 = c__31453__auto__;
var G__48836 = cljs.core.count.call(null,c__31453__auto__);
var G__48837 = (0);
seq__48797 = G__48834;
chunk__48798 = G__48835;
count__48799 = G__48836;
i__48800 = G__48837;
continue;
} else {
var prov = cljs.core.first.call(null,seq__48797__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48805_48838 = cljs.core.seq.call(null,requires);
var chunk__48806_48839 = null;
var count__48807_48840 = (0);
var i__48808_48841 = (0);
while(true){
if((i__48808_48841 < count__48807_48840)){
var req_48842 = cljs.core._nth.call(null,chunk__48806_48839,i__48808_48841);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48842,prov);

var G__48843 = seq__48805_48838;
var G__48844 = chunk__48806_48839;
var G__48845 = count__48807_48840;
var G__48846 = (i__48808_48841 + (1));
seq__48805_48838 = G__48843;
chunk__48806_48839 = G__48844;
count__48807_48840 = G__48845;
i__48808_48841 = G__48846;
continue;
} else {
var temp__5457__auto___48847__$1 = cljs.core.seq.call(null,seq__48805_48838);
if(temp__5457__auto___48847__$1){
var seq__48805_48848__$1 = temp__5457__auto___48847__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48805_48848__$1)){
var c__31453__auto___48849 = cljs.core.chunk_first.call(null,seq__48805_48848__$1);
var G__48850 = cljs.core.chunk_rest.call(null,seq__48805_48848__$1);
var G__48851 = c__31453__auto___48849;
var G__48852 = cljs.core.count.call(null,c__31453__auto___48849);
var G__48853 = (0);
seq__48805_48838 = G__48850;
chunk__48806_48839 = G__48851;
count__48807_48840 = G__48852;
i__48808_48841 = G__48853;
continue;
} else {
var req_48854 = cljs.core.first.call(null,seq__48805_48848__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48854,prov);

var G__48855 = cljs.core.next.call(null,seq__48805_48848__$1);
var G__48856 = null;
var G__48857 = (0);
var G__48858 = (0);
seq__48805_48838 = G__48855;
chunk__48806_48839 = G__48856;
count__48807_48840 = G__48857;
i__48808_48841 = G__48858;
continue;
}
} else {
}
}
break;
}

var G__48859 = cljs.core.next.call(null,seq__48797__$1);
var G__48860 = null;
var G__48861 = (0);
var G__48862 = (0);
seq__48797 = G__48859;
chunk__48798 = G__48860;
count__48799 = G__48861;
i__48800 = G__48862;
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
var seq__48863_48867 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__48864_48868 = null;
var count__48865_48869 = (0);
var i__48866_48870 = (0);
while(true){
if((i__48866_48870 < count__48865_48869)){
var ns_48871 = cljs.core._nth.call(null,chunk__48864_48868,i__48866_48870);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48871);

var G__48872 = seq__48863_48867;
var G__48873 = chunk__48864_48868;
var G__48874 = count__48865_48869;
var G__48875 = (i__48866_48870 + (1));
seq__48863_48867 = G__48872;
chunk__48864_48868 = G__48873;
count__48865_48869 = G__48874;
i__48866_48870 = G__48875;
continue;
} else {
var temp__5457__auto___48876 = cljs.core.seq.call(null,seq__48863_48867);
if(temp__5457__auto___48876){
var seq__48863_48877__$1 = temp__5457__auto___48876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48863_48877__$1)){
var c__31453__auto___48878 = cljs.core.chunk_first.call(null,seq__48863_48877__$1);
var G__48879 = cljs.core.chunk_rest.call(null,seq__48863_48877__$1);
var G__48880 = c__31453__auto___48878;
var G__48881 = cljs.core.count.call(null,c__31453__auto___48878);
var G__48882 = (0);
seq__48863_48867 = G__48879;
chunk__48864_48868 = G__48880;
count__48865_48869 = G__48881;
i__48866_48870 = G__48882;
continue;
} else {
var ns_48883 = cljs.core.first.call(null,seq__48863_48877__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48883);

var G__48884 = cljs.core.next.call(null,seq__48863_48877__$1);
var G__48885 = null;
var G__48886 = (0);
var G__48887 = (0);
seq__48863_48867 = G__48884;
chunk__48864_48868 = G__48885;
count__48865_48869 = G__48886;
i__48866_48870 = G__48887;
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
goog.require_figwheel_backup_ = (function (){var or__30522__auto__ = goog.require__;
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
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
var G__48888__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__48888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48889__i = 0, G__48889__a = new Array(arguments.length -  0);
while (G__48889__i < G__48889__a.length) {G__48889__a[G__48889__i] = arguments[G__48889__i + 0]; ++G__48889__i;}
  args = new cljs.core.IndexedSeq(G__48889__a,0,null);
} 
return G__48888__delegate.call(this,args);};
G__48888.cljs$lang$maxFixedArity = 0;
G__48888.cljs$lang$applyTo = (function (arglist__48890){
var args = cljs.core.seq(arglist__48890);
return G__48888__delegate(args);
});
G__48888.cljs$core$IFn$_invoke$arity$variadic = G__48888__delegate;
return G__48888;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__48891_SHARP_,p2__48892_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48891_SHARP_)].join('')),p2__48892_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__48893_SHARP_,p2__48894_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48893_SHARP_)].join(''),p2__48894_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__48895 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__48895.addCallback(((function (G__48895){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__48895))
);

G__48895.addErrback(((function (G__48895){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__48895))
);

return G__48895;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e48896){if((e48896 instanceof Error)){
var e = e48896;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48896;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e48897){if((e48897 instanceof Error)){
var e = e48897;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48897;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__48898 = cljs.core._EQ_;
var expr__48899 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__48898.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__48899))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__48898.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__48899))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__48898.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__48899))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__48898,expr__48899){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__48898,expr__48899))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__48901,callback){
var map__48902 = p__48901;
var map__48902__$1 = ((((!((map__48902 == null)))?((((map__48902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48902):map__48902);
var file_msg = map__48902__$1;
var request_url = cljs.core.get.call(null,map__48902__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30522__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__48902,map__48902__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__48902,map__48902__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__46751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto__){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto__){
return (function (state_48942){
var state_val_48943 = (state_48942[(1)]);
if((state_val_48943 === (7))){
var inst_48938 = (state_48942[(2)]);
var state_48942__$1 = state_48942;
var statearr_48944_48971 = state_48942__$1;
(statearr_48944_48971[(2)] = inst_48938);

(statearr_48944_48971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48943 === (1))){
var state_48942__$1 = state_48942;
var statearr_48945_48972 = state_48942__$1;
(statearr_48945_48972[(2)] = null);

(statearr_48945_48972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48943 === (4))){
var inst_48906 = (state_48942[(7)]);
var inst_48906__$1 = (state_48942[(2)]);
var state_48942__$1 = (function (){var statearr_48946 = state_48942;
(statearr_48946[(7)] = inst_48906__$1);

return statearr_48946;
})();
if(cljs.core.truth_(inst_48906__$1)){
var statearr_48947_48973 = state_48942__$1;
(statearr_48947_48973[(1)] = (5));

} else {
var statearr_48948_48974 = state_48942__$1;
(statearr_48948_48974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48943 === (15))){
var inst_48923 = (state_48942[(8)]);
var inst_48920 = (state_48942[(9)]);
var inst_48925 = inst_48923.call(null,inst_48920);
var state_48942__$1 = state_48942;
var statearr_48949_48975 = state_48942__$1;
(statearr_48949_48975[(2)] = inst_48925);

(statearr_48949_48975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48943 === (13))){
var inst_48932 = (state_48942[(2)]);
var state_48942__$1 = state_48942;
var statearr_48950_48976 = state_48942__$1;
(statearr_48950_48976[(2)] = inst_48932);

(statearr_48950_48976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48943 === (6))){
var state_48942__$1 = state_48942;
var statearr_48951_48977 = state_48942__$1;
(statearr_48951_48977[(2)] = null);

(statearr_48951_48977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48943 === (17))){
var inst_48929 = (state_48942[(2)]);
var state_48942__$1 = state_48942;
var statearr_48952_48978 = state_48942__$1;
(statearr_48952_48978[(2)] = inst_48929);

(statearr_48952_48978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48943 === (3))){
var inst_48940 = (state_48942[(2)]);
var state_48942__$1 = state_48942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48942__$1,inst_48940);
} else {
if((state_val_48943 === (12))){
var state_48942__$1 = state_48942;
var statearr_48953_48979 = state_48942__$1;
(statearr_48953_48979[(2)] = null);

(statearr_48953_48979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48943 === (2))){
var state_48942__$1 = state_48942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48942__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_48943 === (11))){
var inst_48911 = (state_48942[(10)]);
var inst_48918 = figwheel.client.file_reloading.blocking_load.call(null,inst_48911);
var state_48942__$1 = state_48942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48942__$1,(14),inst_48918);
} else {
if((state_val_48943 === (9))){
var inst_48911 = (state_48942[(10)]);
var state_48942__$1 = state_48942;
if(cljs.core.truth_(inst_48911)){
var statearr_48954_48980 = state_48942__$1;
(statearr_48954_48980[(1)] = (11));

} else {
var statearr_48955_48981 = state_48942__$1;
(statearr_48955_48981[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48943 === (5))){
var inst_48906 = (state_48942[(7)]);
var inst_48912 = (state_48942[(11)]);
var inst_48911 = cljs.core.nth.call(null,inst_48906,(0),null);
var inst_48912__$1 = cljs.core.nth.call(null,inst_48906,(1),null);
var state_48942__$1 = (function (){var statearr_48956 = state_48942;
(statearr_48956[(10)] = inst_48911);

(statearr_48956[(11)] = inst_48912__$1);

return statearr_48956;
})();
if(cljs.core.truth_(inst_48912__$1)){
var statearr_48957_48982 = state_48942__$1;
(statearr_48957_48982[(1)] = (8));

} else {
var statearr_48958_48983 = state_48942__$1;
(statearr_48958_48983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48943 === (14))){
var inst_48911 = (state_48942[(10)]);
var inst_48923 = (state_48942[(8)]);
var inst_48920 = (state_48942[(2)]);
var inst_48921 = console.log("Loading!",inst_48911);
var inst_48922 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_48923__$1 = cljs.core.get.call(null,inst_48922,inst_48911);
var state_48942__$1 = (function (){var statearr_48959 = state_48942;
(statearr_48959[(12)] = inst_48921);

(statearr_48959[(8)] = inst_48923__$1);

(statearr_48959[(9)] = inst_48920);

return statearr_48959;
})();
if(cljs.core.truth_(inst_48923__$1)){
var statearr_48960_48984 = state_48942__$1;
(statearr_48960_48984[(1)] = (15));

} else {
var statearr_48961_48985 = state_48942__$1;
(statearr_48961_48985[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48943 === (16))){
var inst_48920 = (state_48942[(9)]);
var inst_48927 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_48920);
var state_48942__$1 = state_48942;
var statearr_48962_48986 = state_48942__$1;
(statearr_48962_48986[(2)] = inst_48927);

(statearr_48962_48986[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48943 === (10))){
var inst_48934 = (state_48942[(2)]);
var state_48942__$1 = (function (){var statearr_48963 = state_48942;
(statearr_48963[(13)] = inst_48934);

return statearr_48963;
})();
var statearr_48964_48987 = state_48942__$1;
(statearr_48964_48987[(2)] = null);

(statearr_48964_48987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48943 === (8))){
var inst_48912 = (state_48942[(11)]);
var inst_48914 = console.log("Evaling!",inst_48912);
var inst_48915 = eval(inst_48912);
var state_48942__$1 = (function (){var statearr_48965 = state_48942;
(statearr_48965[(14)] = inst_48914);

return statearr_48965;
})();
var statearr_48966_48988 = state_48942__$1;
(statearr_48966_48988[(2)] = inst_48915);

(statearr_48966_48988[(1)] = (10));


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
});})(c__46751__auto__))
;
return ((function (switch__46661__auto__,c__46751__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__46662__auto__ = null;
var figwheel$client$file_reloading$state_machine__46662__auto____0 = (function (){
var statearr_48967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48967[(0)] = figwheel$client$file_reloading$state_machine__46662__auto__);

(statearr_48967[(1)] = (1));

return statearr_48967;
});
var figwheel$client$file_reloading$state_machine__46662__auto____1 = (function (state_48942){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_48942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e48968){if((e48968 instanceof Object)){
var ex__46665__auto__ = e48968;
var statearr_48969_48989 = state_48942;
(statearr_48969_48989[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48990 = state_48942;
state_48942 = G__48990;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__46662__auto__ = function(state_48942){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__46662__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__46662__auto____1.call(this,state_48942);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__46662__auto____0;
figwheel$client$file_reloading$state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__46662__auto____1;
return figwheel$client$file_reloading$state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto__))
})();
var state__46753__auto__ = (function (){var statearr_48970 = f__46752__auto__.call(null);
(statearr_48970[(6)] = c__46751__auto__);

return statearr_48970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto__))
);

return c__46751__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__48992 = arguments.length;
switch (G__48992) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__48994,callback){
var map__48995 = p__48994;
var map__48995__$1 = ((((!((map__48995 == null)))?((((map__48995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48995):map__48995);
var file_msg = map__48995__$1;
var namespace = cljs.core.get.call(null,map__48995__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__48995,map__48995__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__48995,map__48995__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__48997){
var map__48998 = p__48997;
var map__48998__$1 = ((((!((map__48998 == null)))?((((map__48998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48998):map__48998);
var file_msg = map__48998__$1;
var namespace = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49000){
var map__49001 = p__49000;
var map__49001__$1 = ((((!((map__49001 == null)))?((((map__49001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49001):map__49001);
var file_msg = map__49001__$1;
var namespace = cljs.core.get.call(null,map__49001__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30510__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30510__auto__){
var or__30522__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
var or__30522__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30522__auto____$1)){
return or__30522__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30510__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49003,callback){
var map__49004 = p__49003;
var map__49004__$1 = ((((!((map__49004 == null)))?((((map__49004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49004):map__49004);
var file_msg = map__49004__$1;
var request_url = cljs.core.get.call(null,map__49004__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49004__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__46751__auto___49054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto___49054,out){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto___49054,out){
return (function (state_49039){
var state_val_49040 = (state_49039[(1)]);
if((state_val_49040 === (1))){
var inst_49013 = cljs.core.seq.call(null,files);
var inst_49014 = cljs.core.first.call(null,inst_49013);
var inst_49015 = cljs.core.next.call(null,inst_49013);
var inst_49016 = files;
var state_49039__$1 = (function (){var statearr_49041 = state_49039;
(statearr_49041[(7)] = inst_49016);

(statearr_49041[(8)] = inst_49015);

(statearr_49041[(9)] = inst_49014);

return statearr_49041;
})();
var statearr_49042_49055 = state_49039__$1;
(statearr_49042_49055[(2)] = null);

(statearr_49042_49055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49040 === (2))){
var inst_49016 = (state_49039[(7)]);
var inst_49022 = (state_49039[(10)]);
var inst_49021 = cljs.core.seq.call(null,inst_49016);
var inst_49022__$1 = cljs.core.first.call(null,inst_49021);
var inst_49023 = cljs.core.next.call(null,inst_49021);
var inst_49024 = (inst_49022__$1 == null);
var inst_49025 = cljs.core.not.call(null,inst_49024);
var state_49039__$1 = (function (){var statearr_49043 = state_49039;
(statearr_49043[(11)] = inst_49023);

(statearr_49043[(10)] = inst_49022__$1);

return statearr_49043;
})();
if(inst_49025){
var statearr_49044_49056 = state_49039__$1;
(statearr_49044_49056[(1)] = (4));

} else {
var statearr_49045_49057 = state_49039__$1;
(statearr_49045_49057[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49040 === (3))){
var inst_49037 = (state_49039[(2)]);
var state_49039__$1 = state_49039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49039__$1,inst_49037);
} else {
if((state_val_49040 === (4))){
var inst_49022 = (state_49039[(10)]);
var inst_49027 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49022);
var state_49039__$1 = state_49039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49039__$1,(7),inst_49027);
} else {
if((state_val_49040 === (5))){
var inst_49033 = cljs.core.async.close_BANG_.call(null,out);
var state_49039__$1 = state_49039;
var statearr_49046_49058 = state_49039__$1;
(statearr_49046_49058[(2)] = inst_49033);

(statearr_49046_49058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49040 === (6))){
var inst_49035 = (state_49039[(2)]);
var state_49039__$1 = state_49039;
var statearr_49047_49059 = state_49039__$1;
(statearr_49047_49059[(2)] = inst_49035);

(statearr_49047_49059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49040 === (7))){
var inst_49023 = (state_49039[(11)]);
var inst_49029 = (state_49039[(2)]);
var inst_49030 = cljs.core.async.put_BANG_.call(null,out,inst_49029);
var inst_49016 = inst_49023;
var state_49039__$1 = (function (){var statearr_49048 = state_49039;
(statearr_49048[(7)] = inst_49016);

(statearr_49048[(12)] = inst_49030);

return statearr_49048;
})();
var statearr_49049_49060 = state_49039__$1;
(statearr_49049_49060[(2)] = null);

(statearr_49049_49060[(1)] = (2));


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
});})(c__46751__auto___49054,out))
;
return ((function (switch__46661__auto__,c__46751__auto___49054,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46662__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46662__auto____0 = (function (){
var statearr_49050 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49050[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46662__auto__);

(statearr_49050[(1)] = (1));

return statearr_49050;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46662__auto____1 = (function (state_49039){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_49039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e49051){if((e49051 instanceof Object)){
var ex__46665__auto__ = e49051;
var statearr_49052_49061 = state_49039;
(statearr_49052_49061[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49062 = state_49039;
state_49039 = G__49062;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46662__auto__ = function(state_49039){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46662__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46662__auto____1.call(this,state_49039);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46662__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46662__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto___49054,out))
})();
var state__46753__auto__ = (function (){var statearr_49053 = f__46752__auto__.call(null);
(statearr_49053[(6)] = c__46751__auto___49054);

return statearr_49053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto___49054,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49063,opts){
var map__49064 = p__49063;
var map__49064__$1 = ((((!((map__49064 == null)))?((((map__49064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49064):map__49064);
var eval_body = cljs.core.get.call(null,map__49064__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49064__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30510__auto__ = eval_body;
if(cljs.core.truth_(and__30510__auto__)){
return typeof eval_body === 'string';
} else {
return and__30510__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e49066){var e = e49066;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__49067_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49067_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
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
return cljs.core.map.call(null,(function (p__49068){
var vec__49069 = p__49068;
var k = cljs.core.nth.call(null,vec__49069,(0),null);
var v = cljs.core.nth.call(null,vec__49069,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49072){
var vec__49073 = p__49072;
var k = cljs.core.nth.call(null,vec__49073,(0),null);
var v = cljs.core.nth.call(null,vec__49073,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49079,p__49080){
var map__49081 = p__49079;
var map__49081__$1 = ((((!((map__49081 == null)))?((((map__49081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49081):map__49081);
var opts = map__49081__$1;
var before_jsload = cljs.core.get.call(null,map__49081__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49081__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49081__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49082 = p__49080;
var map__49082__$1 = ((((!((map__49082 == null)))?((((map__49082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49082):map__49082);
var msg = map__49082__$1;
var files = cljs.core.get.call(null,map__49082__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49082__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49082__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__46751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__46752__auto__ = (function (){var switch__46661__auto__ = ((function (c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49236){
var state_val_49237 = (state_49236[(1)]);
if((state_val_49237 === (7))){
var inst_49098 = (state_49236[(7)]);
var inst_49099 = (state_49236[(8)]);
var inst_49097 = (state_49236[(9)]);
var inst_49096 = (state_49236[(10)]);
var inst_49104 = cljs.core._nth.call(null,inst_49097,inst_49099);
var inst_49105 = figwheel.client.file_reloading.eval_body.call(null,inst_49104,opts);
var inst_49106 = (inst_49099 + (1));
var tmp49238 = inst_49098;
var tmp49239 = inst_49097;
var tmp49240 = inst_49096;
var inst_49096__$1 = tmp49240;
var inst_49097__$1 = tmp49239;
var inst_49098__$1 = tmp49238;
var inst_49099__$1 = inst_49106;
var state_49236__$1 = (function (){var statearr_49241 = state_49236;
(statearr_49241[(7)] = inst_49098__$1);

(statearr_49241[(8)] = inst_49099__$1);

(statearr_49241[(9)] = inst_49097__$1);

(statearr_49241[(10)] = inst_49096__$1);

(statearr_49241[(11)] = inst_49105);

return statearr_49241;
})();
var statearr_49242_49325 = state_49236__$1;
(statearr_49242_49325[(2)] = null);

(statearr_49242_49325[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (20))){
var inst_49139 = (state_49236[(12)]);
var inst_49147 = figwheel.client.file_reloading.sort_files.call(null,inst_49139);
var state_49236__$1 = state_49236;
var statearr_49243_49326 = state_49236__$1;
(statearr_49243_49326[(2)] = inst_49147);

(statearr_49243_49326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (27))){
var state_49236__$1 = state_49236;
var statearr_49244_49327 = state_49236__$1;
(statearr_49244_49327[(2)] = null);

(statearr_49244_49327[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (1))){
var inst_49088 = (state_49236[(13)]);
var inst_49085 = before_jsload.call(null,files);
var inst_49086 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49087 = (function (){return ((function (inst_49088,inst_49085,inst_49086,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49076_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49076_SHARP_);
});
;})(inst_49088,inst_49085,inst_49086,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49088__$1 = cljs.core.filter.call(null,inst_49087,files);
var inst_49089 = cljs.core.not_empty.call(null,inst_49088__$1);
var state_49236__$1 = (function (){var statearr_49245 = state_49236;
(statearr_49245[(14)] = inst_49085);

(statearr_49245[(15)] = inst_49086);

(statearr_49245[(13)] = inst_49088__$1);

return statearr_49245;
})();
if(cljs.core.truth_(inst_49089)){
var statearr_49246_49328 = state_49236__$1;
(statearr_49246_49328[(1)] = (2));

} else {
var statearr_49247_49329 = state_49236__$1;
(statearr_49247_49329[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (24))){
var state_49236__$1 = state_49236;
var statearr_49248_49330 = state_49236__$1;
(statearr_49248_49330[(2)] = null);

(statearr_49248_49330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (39))){
var inst_49189 = (state_49236[(16)]);
var state_49236__$1 = state_49236;
var statearr_49249_49331 = state_49236__$1;
(statearr_49249_49331[(2)] = inst_49189);

(statearr_49249_49331[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (46))){
var inst_49231 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
var statearr_49250_49332 = state_49236__$1;
(statearr_49250_49332[(2)] = inst_49231);

(statearr_49250_49332[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (4))){
var inst_49133 = (state_49236[(2)]);
var inst_49134 = cljs.core.List.EMPTY;
var inst_49135 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49134);
var inst_49136 = (function (){return ((function (inst_49133,inst_49134,inst_49135,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49077_SHARP_){
var and__30510__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49077_SHARP_);
if(cljs.core.truth_(and__30510__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49077_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49077_SHARP_)));
} else {
return and__30510__auto__;
}
});
;})(inst_49133,inst_49134,inst_49135,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49137 = cljs.core.filter.call(null,inst_49136,files);
var inst_49138 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49139 = cljs.core.concat.call(null,inst_49137,inst_49138);
var state_49236__$1 = (function (){var statearr_49251 = state_49236;
(statearr_49251[(12)] = inst_49139);

(statearr_49251[(17)] = inst_49135);

(statearr_49251[(18)] = inst_49133);

return statearr_49251;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49252_49333 = state_49236__$1;
(statearr_49252_49333[(1)] = (16));

} else {
var statearr_49253_49334 = state_49236__$1;
(statearr_49253_49334[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (15))){
var inst_49123 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
var statearr_49254_49335 = state_49236__$1;
(statearr_49254_49335[(2)] = inst_49123);

(statearr_49254_49335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (21))){
var inst_49149 = (state_49236[(19)]);
var inst_49149__$1 = (state_49236[(2)]);
var inst_49150 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49149__$1);
var state_49236__$1 = (function (){var statearr_49255 = state_49236;
(statearr_49255[(19)] = inst_49149__$1);

return statearr_49255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49236__$1,(22),inst_49150);
} else {
if((state_val_49237 === (31))){
var inst_49234 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49236__$1,inst_49234);
} else {
if((state_val_49237 === (32))){
var inst_49189 = (state_49236[(16)]);
var inst_49194 = inst_49189.cljs$lang$protocol_mask$partition0$;
var inst_49195 = (inst_49194 & (64));
var inst_49196 = inst_49189.cljs$core$ISeq$;
var inst_49197 = (cljs.core.PROTOCOL_SENTINEL === inst_49196);
var inst_49198 = (inst_49195) || (inst_49197);
var state_49236__$1 = state_49236;
if(cljs.core.truth_(inst_49198)){
var statearr_49256_49336 = state_49236__$1;
(statearr_49256_49336[(1)] = (35));

} else {
var statearr_49257_49337 = state_49236__$1;
(statearr_49257_49337[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (40))){
var inst_49211 = (state_49236[(20)]);
var inst_49210 = (state_49236[(2)]);
var inst_49211__$1 = cljs.core.get.call(null,inst_49210,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49212 = cljs.core.get.call(null,inst_49210,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49213 = cljs.core.not_empty.call(null,inst_49211__$1);
var state_49236__$1 = (function (){var statearr_49258 = state_49236;
(statearr_49258[(20)] = inst_49211__$1);

(statearr_49258[(21)] = inst_49212);

return statearr_49258;
})();
if(cljs.core.truth_(inst_49213)){
var statearr_49259_49338 = state_49236__$1;
(statearr_49259_49338[(1)] = (41));

} else {
var statearr_49260_49339 = state_49236__$1;
(statearr_49260_49339[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (33))){
var state_49236__$1 = state_49236;
var statearr_49261_49340 = state_49236__$1;
(statearr_49261_49340[(2)] = false);

(statearr_49261_49340[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (13))){
var inst_49109 = (state_49236[(22)]);
var inst_49113 = cljs.core.chunk_first.call(null,inst_49109);
var inst_49114 = cljs.core.chunk_rest.call(null,inst_49109);
var inst_49115 = cljs.core.count.call(null,inst_49113);
var inst_49096 = inst_49114;
var inst_49097 = inst_49113;
var inst_49098 = inst_49115;
var inst_49099 = (0);
var state_49236__$1 = (function (){var statearr_49262 = state_49236;
(statearr_49262[(7)] = inst_49098);

(statearr_49262[(8)] = inst_49099);

(statearr_49262[(9)] = inst_49097);

(statearr_49262[(10)] = inst_49096);

return statearr_49262;
})();
var statearr_49263_49341 = state_49236__$1;
(statearr_49263_49341[(2)] = null);

(statearr_49263_49341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (22))){
var inst_49153 = (state_49236[(23)]);
var inst_49157 = (state_49236[(24)]);
var inst_49149 = (state_49236[(19)]);
var inst_49152 = (state_49236[(25)]);
var inst_49152__$1 = (state_49236[(2)]);
var inst_49153__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49152__$1);
var inst_49154 = (function (){var all_files = inst_49149;
var res_SINGLEQUOTE_ = inst_49152__$1;
var res = inst_49153__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49153,inst_49157,inst_49149,inst_49152,inst_49152__$1,inst_49153__$1,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49078_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49078_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49153,inst_49157,inst_49149,inst_49152,inst_49152__$1,inst_49153__$1,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49155 = cljs.core.filter.call(null,inst_49154,inst_49152__$1);
var inst_49156 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49157__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49156);
var inst_49158 = cljs.core.not_empty.call(null,inst_49157__$1);
var state_49236__$1 = (function (){var statearr_49264 = state_49236;
(statearr_49264[(23)] = inst_49153__$1);

(statearr_49264[(24)] = inst_49157__$1);

(statearr_49264[(25)] = inst_49152__$1);

(statearr_49264[(26)] = inst_49155);

return statearr_49264;
})();
if(cljs.core.truth_(inst_49158)){
var statearr_49265_49342 = state_49236__$1;
(statearr_49265_49342[(1)] = (23));

} else {
var statearr_49266_49343 = state_49236__$1;
(statearr_49266_49343[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (36))){
var state_49236__$1 = state_49236;
var statearr_49267_49344 = state_49236__$1;
(statearr_49267_49344[(2)] = false);

(statearr_49267_49344[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (41))){
var inst_49211 = (state_49236[(20)]);
var inst_49215 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49216 = cljs.core.map.call(null,inst_49215,inst_49211);
var inst_49217 = cljs.core.pr_str.call(null,inst_49216);
var inst_49218 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49217)].join('');
var inst_49219 = figwheel.client.utils.log.call(null,inst_49218);
var state_49236__$1 = state_49236;
var statearr_49268_49345 = state_49236__$1;
(statearr_49268_49345[(2)] = inst_49219);

(statearr_49268_49345[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (43))){
var inst_49212 = (state_49236[(21)]);
var inst_49222 = (state_49236[(2)]);
var inst_49223 = cljs.core.not_empty.call(null,inst_49212);
var state_49236__$1 = (function (){var statearr_49269 = state_49236;
(statearr_49269[(27)] = inst_49222);

return statearr_49269;
})();
if(cljs.core.truth_(inst_49223)){
var statearr_49270_49346 = state_49236__$1;
(statearr_49270_49346[(1)] = (44));

} else {
var statearr_49271_49347 = state_49236__$1;
(statearr_49271_49347[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (29))){
var inst_49153 = (state_49236[(23)]);
var inst_49157 = (state_49236[(24)]);
var inst_49149 = (state_49236[(19)]);
var inst_49152 = (state_49236[(25)]);
var inst_49155 = (state_49236[(26)]);
var inst_49189 = (state_49236[(16)]);
var inst_49185 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49188 = (function (){var all_files = inst_49149;
var res_SINGLEQUOTE_ = inst_49152;
var res = inst_49153;
var files_not_loaded = inst_49155;
var dependencies_that_loaded = inst_49157;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49153,inst_49157,inst_49149,inst_49152,inst_49155,inst_49189,inst_49185,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49187){
var map__49272 = p__49187;
var map__49272__$1 = ((((!((map__49272 == null)))?((((map__49272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49272):map__49272);
var namespace = cljs.core.get.call(null,map__49272__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49153,inst_49157,inst_49149,inst_49152,inst_49155,inst_49189,inst_49185,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49189__$1 = cljs.core.group_by.call(null,inst_49188,inst_49155);
var inst_49191 = (inst_49189__$1 == null);
var inst_49192 = cljs.core.not.call(null,inst_49191);
var state_49236__$1 = (function (){var statearr_49274 = state_49236;
(statearr_49274[(28)] = inst_49185);

(statearr_49274[(16)] = inst_49189__$1);

return statearr_49274;
})();
if(inst_49192){
var statearr_49275_49348 = state_49236__$1;
(statearr_49275_49348[(1)] = (32));

} else {
var statearr_49276_49349 = state_49236__$1;
(statearr_49276_49349[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (44))){
var inst_49212 = (state_49236[(21)]);
var inst_49225 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49212);
var inst_49226 = cljs.core.pr_str.call(null,inst_49225);
var inst_49227 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49226)].join('');
var inst_49228 = figwheel.client.utils.log.call(null,inst_49227);
var state_49236__$1 = state_49236;
var statearr_49277_49350 = state_49236__$1;
(statearr_49277_49350[(2)] = inst_49228);

(statearr_49277_49350[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (6))){
var inst_49130 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
var statearr_49278_49351 = state_49236__$1;
(statearr_49278_49351[(2)] = inst_49130);

(statearr_49278_49351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (28))){
var inst_49155 = (state_49236[(26)]);
var inst_49182 = (state_49236[(2)]);
var inst_49183 = cljs.core.not_empty.call(null,inst_49155);
var state_49236__$1 = (function (){var statearr_49279 = state_49236;
(statearr_49279[(29)] = inst_49182);

return statearr_49279;
})();
if(cljs.core.truth_(inst_49183)){
var statearr_49280_49352 = state_49236__$1;
(statearr_49280_49352[(1)] = (29));

} else {
var statearr_49281_49353 = state_49236__$1;
(statearr_49281_49353[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (25))){
var inst_49153 = (state_49236[(23)]);
var inst_49169 = (state_49236[(2)]);
var inst_49170 = cljs.core.not_empty.call(null,inst_49153);
var state_49236__$1 = (function (){var statearr_49282 = state_49236;
(statearr_49282[(30)] = inst_49169);

return statearr_49282;
})();
if(cljs.core.truth_(inst_49170)){
var statearr_49283_49354 = state_49236__$1;
(statearr_49283_49354[(1)] = (26));

} else {
var statearr_49284_49355 = state_49236__$1;
(statearr_49284_49355[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (34))){
var inst_49205 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
if(cljs.core.truth_(inst_49205)){
var statearr_49285_49356 = state_49236__$1;
(statearr_49285_49356[(1)] = (38));

} else {
var statearr_49286_49357 = state_49236__$1;
(statearr_49286_49357[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (17))){
var state_49236__$1 = state_49236;
var statearr_49287_49358 = state_49236__$1;
(statearr_49287_49358[(2)] = recompile_dependents);

(statearr_49287_49358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (3))){
var state_49236__$1 = state_49236;
var statearr_49288_49359 = state_49236__$1;
(statearr_49288_49359[(2)] = null);

(statearr_49288_49359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (12))){
var inst_49126 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
var statearr_49289_49360 = state_49236__$1;
(statearr_49289_49360[(2)] = inst_49126);

(statearr_49289_49360[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (2))){
var inst_49088 = (state_49236[(13)]);
var inst_49095 = cljs.core.seq.call(null,inst_49088);
var inst_49096 = inst_49095;
var inst_49097 = null;
var inst_49098 = (0);
var inst_49099 = (0);
var state_49236__$1 = (function (){var statearr_49290 = state_49236;
(statearr_49290[(7)] = inst_49098);

(statearr_49290[(8)] = inst_49099);

(statearr_49290[(9)] = inst_49097);

(statearr_49290[(10)] = inst_49096);

return statearr_49290;
})();
var statearr_49291_49361 = state_49236__$1;
(statearr_49291_49361[(2)] = null);

(statearr_49291_49361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (23))){
var inst_49153 = (state_49236[(23)]);
var inst_49157 = (state_49236[(24)]);
var inst_49149 = (state_49236[(19)]);
var inst_49152 = (state_49236[(25)]);
var inst_49155 = (state_49236[(26)]);
var inst_49160 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49162 = (function (){var all_files = inst_49149;
var res_SINGLEQUOTE_ = inst_49152;
var res = inst_49153;
var files_not_loaded = inst_49155;
var dependencies_that_loaded = inst_49157;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49153,inst_49157,inst_49149,inst_49152,inst_49155,inst_49160,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49161){
var map__49292 = p__49161;
var map__49292__$1 = ((((!((map__49292 == null)))?((((map__49292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49292):map__49292);
var request_url = cljs.core.get.call(null,map__49292__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49153,inst_49157,inst_49149,inst_49152,inst_49155,inst_49160,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49163 = cljs.core.reverse.call(null,inst_49157);
var inst_49164 = cljs.core.map.call(null,inst_49162,inst_49163);
var inst_49165 = cljs.core.pr_str.call(null,inst_49164);
var inst_49166 = figwheel.client.utils.log.call(null,inst_49165);
var state_49236__$1 = (function (){var statearr_49294 = state_49236;
(statearr_49294[(31)] = inst_49160);

return statearr_49294;
})();
var statearr_49295_49362 = state_49236__$1;
(statearr_49295_49362[(2)] = inst_49166);

(statearr_49295_49362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (35))){
var state_49236__$1 = state_49236;
var statearr_49296_49363 = state_49236__$1;
(statearr_49296_49363[(2)] = true);

(statearr_49296_49363[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (19))){
var inst_49139 = (state_49236[(12)]);
var inst_49145 = figwheel.client.file_reloading.expand_files.call(null,inst_49139);
var state_49236__$1 = state_49236;
var statearr_49297_49364 = state_49236__$1;
(statearr_49297_49364[(2)] = inst_49145);

(statearr_49297_49364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (11))){
var state_49236__$1 = state_49236;
var statearr_49298_49365 = state_49236__$1;
(statearr_49298_49365[(2)] = null);

(statearr_49298_49365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (9))){
var inst_49128 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
var statearr_49299_49366 = state_49236__$1;
(statearr_49299_49366[(2)] = inst_49128);

(statearr_49299_49366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (5))){
var inst_49098 = (state_49236[(7)]);
var inst_49099 = (state_49236[(8)]);
var inst_49101 = (inst_49099 < inst_49098);
var inst_49102 = inst_49101;
var state_49236__$1 = state_49236;
if(cljs.core.truth_(inst_49102)){
var statearr_49300_49367 = state_49236__$1;
(statearr_49300_49367[(1)] = (7));

} else {
var statearr_49301_49368 = state_49236__$1;
(statearr_49301_49368[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (14))){
var inst_49109 = (state_49236[(22)]);
var inst_49118 = cljs.core.first.call(null,inst_49109);
var inst_49119 = figwheel.client.file_reloading.eval_body.call(null,inst_49118,opts);
var inst_49120 = cljs.core.next.call(null,inst_49109);
var inst_49096 = inst_49120;
var inst_49097 = null;
var inst_49098 = (0);
var inst_49099 = (0);
var state_49236__$1 = (function (){var statearr_49302 = state_49236;
(statearr_49302[(7)] = inst_49098);

(statearr_49302[(8)] = inst_49099);

(statearr_49302[(32)] = inst_49119);

(statearr_49302[(9)] = inst_49097);

(statearr_49302[(10)] = inst_49096);

return statearr_49302;
})();
var statearr_49303_49369 = state_49236__$1;
(statearr_49303_49369[(2)] = null);

(statearr_49303_49369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (45))){
var state_49236__$1 = state_49236;
var statearr_49304_49370 = state_49236__$1;
(statearr_49304_49370[(2)] = null);

(statearr_49304_49370[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (26))){
var inst_49153 = (state_49236[(23)]);
var inst_49157 = (state_49236[(24)]);
var inst_49149 = (state_49236[(19)]);
var inst_49152 = (state_49236[(25)]);
var inst_49155 = (state_49236[(26)]);
var inst_49172 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49174 = (function (){var all_files = inst_49149;
var res_SINGLEQUOTE_ = inst_49152;
var res = inst_49153;
var files_not_loaded = inst_49155;
var dependencies_that_loaded = inst_49157;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49153,inst_49157,inst_49149,inst_49152,inst_49155,inst_49172,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49173){
var map__49305 = p__49173;
var map__49305__$1 = ((((!((map__49305 == null)))?((((map__49305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49305):map__49305);
var namespace = cljs.core.get.call(null,map__49305__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49305__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49153,inst_49157,inst_49149,inst_49152,inst_49155,inst_49172,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49175 = cljs.core.map.call(null,inst_49174,inst_49153);
var inst_49176 = cljs.core.pr_str.call(null,inst_49175);
var inst_49177 = figwheel.client.utils.log.call(null,inst_49176);
var inst_49178 = (function (){var all_files = inst_49149;
var res_SINGLEQUOTE_ = inst_49152;
var res = inst_49153;
var files_not_loaded = inst_49155;
var dependencies_that_loaded = inst_49157;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49153,inst_49157,inst_49149,inst_49152,inst_49155,inst_49172,inst_49174,inst_49175,inst_49176,inst_49177,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49153,inst_49157,inst_49149,inst_49152,inst_49155,inst_49172,inst_49174,inst_49175,inst_49176,inst_49177,state_val_49237,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49179 = setTimeout(inst_49178,(10));
var state_49236__$1 = (function (){var statearr_49307 = state_49236;
(statearr_49307[(33)] = inst_49172);

(statearr_49307[(34)] = inst_49177);

return statearr_49307;
})();
var statearr_49308_49371 = state_49236__$1;
(statearr_49308_49371[(2)] = inst_49179);

(statearr_49308_49371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (16))){
var state_49236__$1 = state_49236;
var statearr_49309_49372 = state_49236__$1;
(statearr_49309_49372[(2)] = reload_dependents);

(statearr_49309_49372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (38))){
var inst_49189 = (state_49236[(16)]);
var inst_49207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49189);
var state_49236__$1 = state_49236;
var statearr_49310_49373 = state_49236__$1;
(statearr_49310_49373[(2)] = inst_49207);

(statearr_49310_49373[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (30))){
var state_49236__$1 = state_49236;
var statearr_49311_49374 = state_49236__$1;
(statearr_49311_49374[(2)] = null);

(statearr_49311_49374[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (10))){
var inst_49109 = (state_49236[(22)]);
var inst_49111 = cljs.core.chunked_seq_QMARK_.call(null,inst_49109);
var state_49236__$1 = state_49236;
if(inst_49111){
var statearr_49312_49375 = state_49236__$1;
(statearr_49312_49375[(1)] = (13));

} else {
var statearr_49313_49376 = state_49236__$1;
(statearr_49313_49376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (18))){
var inst_49143 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
if(cljs.core.truth_(inst_49143)){
var statearr_49314_49377 = state_49236__$1;
(statearr_49314_49377[(1)] = (19));

} else {
var statearr_49315_49378 = state_49236__$1;
(statearr_49315_49378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (42))){
var state_49236__$1 = state_49236;
var statearr_49316_49379 = state_49236__$1;
(statearr_49316_49379[(2)] = null);

(statearr_49316_49379[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (37))){
var inst_49202 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
var statearr_49317_49380 = state_49236__$1;
(statearr_49317_49380[(2)] = inst_49202);

(statearr_49317_49380[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (8))){
var inst_49109 = (state_49236[(22)]);
var inst_49096 = (state_49236[(10)]);
var inst_49109__$1 = cljs.core.seq.call(null,inst_49096);
var state_49236__$1 = (function (){var statearr_49318 = state_49236;
(statearr_49318[(22)] = inst_49109__$1);

return statearr_49318;
})();
if(inst_49109__$1){
var statearr_49319_49381 = state_49236__$1;
(statearr_49319_49381[(1)] = (10));

} else {
var statearr_49320_49382 = state_49236__$1;
(statearr_49320_49382[(1)] = (11));

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
});})(c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__46661__auto__,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46662__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46662__auto____0 = (function (){
var statearr_49321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49321[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__46662__auto__);

(statearr_49321[(1)] = (1));

return statearr_49321;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46662__auto____1 = (function (state_49236){
while(true){
var ret_value__46663__auto__ = (function (){try{while(true){
var result__46664__auto__ = switch__46661__auto__.call(null,state_49236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46664__auto__;
}
break;
}
}catch (e49322){if((e49322 instanceof Object)){
var ex__46665__auto__ = e49322;
var statearr_49323_49383 = state_49236;
(statearr_49323_49383[(5)] = ex__46665__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49384 = state_49236;
state_49236 = G__49384;
continue;
} else {
return ret_value__46663__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__46662__auto__ = function(state_49236){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46662__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46662__auto____1.call(this,state_49236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46662__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__46662__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46662__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46662__auto__;
})()
;})(switch__46661__auto__,c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__46753__auto__ = (function (){var statearr_49324 = f__46752__auto__.call(null);
(statearr_49324[(6)] = c__46751__auto__);

return statearr_49324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46753__auto__);
});})(c__46751__auto__,map__49081,map__49081__$1,opts,before_jsload,on_jsload,reload_dependents,map__49082,map__49082__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__46751__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49387,link){
var map__49388 = p__49387;
var map__49388__$1 = ((((!((map__49388 == null)))?((((map__49388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49388):map__49388);
var file = cljs.core.get.call(null,map__49388__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__49388,map__49388__$1,file){
return (function (p1__49385_SHARP_,p2__49386_SHARP_){
if(cljs.core._EQ_.call(null,p1__49385_SHARP_,p2__49386_SHARP_)){
return p1__49385_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__49388,map__49388__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49391){
var map__49392 = p__49391;
var map__49392__$1 = ((((!((map__49392 == null)))?((((map__49392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49392):map__49392);
var match_length = cljs.core.get.call(null,map__49392__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49392__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49390_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49390_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49394_SHARP_,p2__49395_SHARP_){
return cljs.core.assoc.call(null,p1__49394_SHARP_,cljs.core.get.call(null,p2__49395_SHARP_,key),p2__49395_SHARP_);
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
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_49396 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_49396);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_49396);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49397,p__49398){
var map__49399 = p__49397;
var map__49399__$1 = ((((!((map__49399 == null)))?((((map__49399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49399):map__49399);
var on_cssload = cljs.core.get.call(null,map__49399__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49400 = p__49398;
var map__49400__$1 = ((((!((map__49400 == null)))?((((map__49400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49400):map__49400);
var files_msg = map__49400__$1;
var files = cljs.core.get.call(null,map__49400__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1510602155703
