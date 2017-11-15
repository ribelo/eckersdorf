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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__48737_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__48737_SHARP_));
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
var seq__48738 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__48739 = null;
var count__48740 = (0);
var i__48741 = (0);
while(true){
if((i__48741 < count__48740)){
var n = cljs.core._nth.call(null,chunk__48739,i__48741);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48742 = seq__48738;
var G__48743 = chunk__48739;
var G__48744 = count__48740;
var G__48745 = (i__48741 + (1));
seq__48738 = G__48742;
chunk__48739 = G__48743;
count__48740 = G__48744;
i__48741 = G__48745;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__48738);
if(temp__5457__auto__){
var seq__48738__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48738__$1)){
var c__31454__auto__ = cljs.core.chunk_first.call(null,seq__48738__$1);
var G__48746 = cljs.core.chunk_rest.call(null,seq__48738__$1);
var G__48747 = c__31454__auto__;
var G__48748 = cljs.core.count.call(null,c__31454__auto__);
var G__48749 = (0);
seq__48738 = G__48746;
chunk__48739 = G__48747;
count__48740 = G__48748;
i__48741 = G__48749;
continue;
} else {
var n = cljs.core.first.call(null,seq__48738__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48750 = cljs.core.next.call(null,seq__48738__$1);
var G__48751 = null;
var G__48752 = (0);
var G__48753 = (0);
seq__48738 = G__48750;
chunk__48739 = G__48751;
count__48740 = G__48752;
i__48741 = G__48753;
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
return cljs.core.some.call(null,(function (p__48754){
var vec__48755 = p__48754;
var _ = cljs.core.nth.call(null,vec__48755,(0),null);
var v = cljs.core.nth.call(null,vec__48755,(1),null);
var and__30510__auto__ = v;
if(cljs.core.truth_(and__30510__auto__)){
return v.call(null,dep);
} else {
return and__30510__auto__;
}
}),cljs.core.filter.call(null,(function (p__48758){
var vec__48759 = p__48758;
var k = cljs.core.nth.call(null,vec__48759,(0),null);
var v = cljs.core.nth.call(null,vec__48759,(1),null);
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

var seq__48771_48779 = cljs.core.seq.call(null,deps);
var chunk__48772_48780 = null;
var count__48773_48781 = (0);
var i__48774_48782 = (0);
while(true){
if((i__48774_48782 < count__48773_48781)){
var dep_48783 = cljs.core._nth.call(null,chunk__48772_48780,i__48774_48782);
if(cljs.core.truth_((function (){var and__30510__auto__ = dep_48783;
if(cljs.core.truth_(and__30510__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_48783));
} else {
return and__30510__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_48783,(depth + (1)),state);
} else {
}

var G__48784 = seq__48771_48779;
var G__48785 = chunk__48772_48780;
var G__48786 = count__48773_48781;
var G__48787 = (i__48774_48782 + (1));
seq__48771_48779 = G__48784;
chunk__48772_48780 = G__48785;
count__48773_48781 = G__48786;
i__48774_48782 = G__48787;
continue;
} else {
var temp__5457__auto___48788 = cljs.core.seq.call(null,seq__48771_48779);
if(temp__5457__auto___48788){
var seq__48771_48789__$1 = temp__5457__auto___48788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48771_48789__$1)){
var c__31454__auto___48790 = cljs.core.chunk_first.call(null,seq__48771_48789__$1);
var G__48791 = cljs.core.chunk_rest.call(null,seq__48771_48789__$1);
var G__48792 = c__31454__auto___48790;
var G__48793 = cljs.core.count.call(null,c__31454__auto___48790);
var G__48794 = (0);
seq__48771_48779 = G__48791;
chunk__48772_48780 = G__48792;
count__48773_48781 = G__48793;
i__48774_48782 = G__48794;
continue;
} else {
var dep_48795 = cljs.core.first.call(null,seq__48771_48789__$1);
if(cljs.core.truth_((function (){var and__30510__auto__ = dep_48795;
if(cljs.core.truth_(and__30510__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_48795));
} else {
return and__30510__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_48795,(depth + (1)),state);
} else {
}

var G__48796 = cljs.core.next.call(null,seq__48771_48789__$1);
var G__48797 = null;
var G__48798 = (0);
var G__48799 = (0);
seq__48771_48779 = G__48796;
chunk__48772_48780 = G__48797;
count__48773_48781 = G__48798;
i__48774_48782 = G__48799;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__48775){
var vec__48776 = p__48775;
var seq__48777 = cljs.core.seq.call(null,vec__48776);
var first__48778 = cljs.core.first.call(null,seq__48777);
var seq__48777__$1 = cljs.core.next.call(null,seq__48777);
var x = first__48778;
var xs = seq__48777__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__48776,seq__48777,first__48778,seq__48777__$1,x,xs,get_deps__$1){
return (function (p1__48762_SHARP_){
return clojure.set.difference.call(null,p1__48762_SHARP_,x);
});})(vec__48776,seq__48777,first__48778,seq__48777__$1,x,xs,get_deps__$1))
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
var seq__48800 = cljs.core.seq.call(null,provides);
var chunk__48801 = null;
var count__48802 = (0);
var i__48803 = (0);
while(true){
if((i__48803 < count__48802)){
var prov = cljs.core._nth.call(null,chunk__48801,i__48803);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48804_48812 = cljs.core.seq.call(null,requires);
var chunk__48805_48813 = null;
var count__48806_48814 = (0);
var i__48807_48815 = (0);
while(true){
if((i__48807_48815 < count__48806_48814)){
var req_48816 = cljs.core._nth.call(null,chunk__48805_48813,i__48807_48815);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48816,prov);

var G__48817 = seq__48804_48812;
var G__48818 = chunk__48805_48813;
var G__48819 = count__48806_48814;
var G__48820 = (i__48807_48815 + (1));
seq__48804_48812 = G__48817;
chunk__48805_48813 = G__48818;
count__48806_48814 = G__48819;
i__48807_48815 = G__48820;
continue;
} else {
var temp__5457__auto___48821 = cljs.core.seq.call(null,seq__48804_48812);
if(temp__5457__auto___48821){
var seq__48804_48822__$1 = temp__5457__auto___48821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48804_48822__$1)){
var c__31454__auto___48823 = cljs.core.chunk_first.call(null,seq__48804_48822__$1);
var G__48824 = cljs.core.chunk_rest.call(null,seq__48804_48822__$1);
var G__48825 = c__31454__auto___48823;
var G__48826 = cljs.core.count.call(null,c__31454__auto___48823);
var G__48827 = (0);
seq__48804_48812 = G__48824;
chunk__48805_48813 = G__48825;
count__48806_48814 = G__48826;
i__48807_48815 = G__48827;
continue;
} else {
var req_48828 = cljs.core.first.call(null,seq__48804_48822__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48828,prov);

var G__48829 = cljs.core.next.call(null,seq__48804_48822__$1);
var G__48830 = null;
var G__48831 = (0);
var G__48832 = (0);
seq__48804_48812 = G__48829;
chunk__48805_48813 = G__48830;
count__48806_48814 = G__48831;
i__48807_48815 = G__48832;
continue;
}
} else {
}
}
break;
}

var G__48833 = seq__48800;
var G__48834 = chunk__48801;
var G__48835 = count__48802;
var G__48836 = (i__48803 + (1));
seq__48800 = G__48833;
chunk__48801 = G__48834;
count__48802 = G__48835;
i__48803 = G__48836;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__48800);
if(temp__5457__auto__){
var seq__48800__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48800__$1)){
var c__31454__auto__ = cljs.core.chunk_first.call(null,seq__48800__$1);
var G__48837 = cljs.core.chunk_rest.call(null,seq__48800__$1);
var G__48838 = c__31454__auto__;
var G__48839 = cljs.core.count.call(null,c__31454__auto__);
var G__48840 = (0);
seq__48800 = G__48837;
chunk__48801 = G__48838;
count__48802 = G__48839;
i__48803 = G__48840;
continue;
} else {
var prov = cljs.core.first.call(null,seq__48800__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48808_48841 = cljs.core.seq.call(null,requires);
var chunk__48809_48842 = null;
var count__48810_48843 = (0);
var i__48811_48844 = (0);
while(true){
if((i__48811_48844 < count__48810_48843)){
var req_48845 = cljs.core._nth.call(null,chunk__48809_48842,i__48811_48844);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48845,prov);

var G__48846 = seq__48808_48841;
var G__48847 = chunk__48809_48842;
var G__48848 = count__48810_48843;
var G__48849 = (i__48811_48844 + (1));
seq__48808_48841 = G__48846;
chunk__48809_48842 = G__48847;
count__48810_48843 = G__48848;
i__48811_48844 = G__48849;
continue;
} else {
var temp__5457__auto___48850__$1 = cljs.core.seq.call(null,seq__48808_48841);
if(temp__5457__auto___48850__$1){
var seq__48808_48851__$1 = temp__5457__auto___48850__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48808_48851__$1)){
var c__31454__auto___48852 = cljs.core.chunk_first.call(null,seq__48808_48851__$1);
var G__48853 = cljs.core.chunk_rest.call(null,seq__48808_48851__$1);
var G__48854 = c__31454__auto___48852;
var G__48855 = cljs.core.count.call(null,c__31454__auto___48852);
var G__48856 = (0);
seq__48808_48841 = G__48853;
chunk__48809_48842 = G__48854;
count__48810_48843 = G__48855;
i__48811_48844 = G__48856;
continue;
} else {
var req_48857 = cljs.core.first.call(null,seq__48808_48851__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48857,prov);

var G__48858 = cljs.core.next.call(null,seq__48808_48851__$1);
var G__48859 = null;
var G__48860 = (0);
var G__48861 = (0);
seq__48808_48841 = G__48858;
chunk__48809_48842 = G__48859;
count__48810_48843 = G__48860;
i__48811_48844 = G__48861;
continue;
}
} else {
}
}
break;
}

var G__48862 = cljs.core.next.call(null,seq__48800__$1);
var G__48863 = null;
var G__48864 = (0);
var G__48865 = (0);
seq__48800 = G__48862;
chunk__48801 = G__48863;
count__48802 = G__48864;
i__48803 = G__48865;
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
var seq__48866_48870 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__48867_48871 = null;
var count__48868_48872 = (0);
var i__48869_48873 = (0);
while(true){
if((i__48869_48873 < count__48868_48872)){
var ns_48874 = cljs.core._nth.call(null,chunk__48867_48871,i__48869_48873);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48874);

var G__48875 = seq__48866_48870;
var G__48876 = chunk__48867_48871;
var G__48877 = count__48868_48872;
var G__48878 = (i__48869_48873 + (1));
seq__48866_48870 = G__48875;
chunk__48867_48871 = G__48876;
count__48868_48872 = G__48877;
i__48869_48873 = G__48878;
continue;
} else {
var temp__5457__auto___48879 = cljs.core.seq.call(null,seq__48866_48870);
if(temp__5457__auto___48879){
var seq__48866_48880__$1 = temp__5457__auto___48879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48866_48880__$1)){
var c__31454__auto___48881 = cljs.core.chunk_first.call(null,seq__48866_48880__$1);
var G__48882 = cljs.core.chunk_rest.call(null,seq__48866_48880__$1);
var G__48883 = c__31454__auto___48881;
var G__48884 = cljs.core.count.call(null,c__31454__auto___48881);
var G__48885 = (0);
seq__48866_48870 = G__48882;
chunk__48867_48871 = G__48883;
count__48868_48872 = G__48884;
i__48869_48873 = G__48885;
continue;
} else {
var ns_48886 = cljs.core.first.call(null,seq__48866_48880__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48886);

var G__48887 = cljs.core.next.call(null,seq__48866_48880__$1);
var G__48888 = null;
var G__48889 = (0);
var G__48890 = (0);
seq__48866_48870 = G__48887;
chunk__48867_48871 = G__48888;
count__48868_48872 = G__48889;
i__48869_48873 = G__48890;
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
var G__48891__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__48891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48892__i = 0, G__48892__a = new Array(arguments.length -  0);
while (G__48892__i < G__48892__a.length) {G__48892__a[G__48892__i] = arguments[G__48892__i + 0]; ++G__48892__i;}
  args = new cljs.core.IndexedSeq(G__48892__a,0,null);
} 
return G__48891__delegate.call(this,args);};
G__48891.cljs$lang$maxFixedArity = 0;
G__48891.cljs$lang$applyTo = (function (arglist__48893){
var args = cljs.core.seq(arglist__48893);
return G__48891__delegate(args);
});
G__48891.cljs$core$IFn$_invoke$arity$variadic = G__48891__delegate;
return G__48891;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__48894_SHARP_,p2__48895_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48894_SHARP_)].join('')),p2__48895_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__48896_SHARP_,p2__48897_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48896_SHARP_)].join(''),p2__48897_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__48898 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__48898.addCallback(((function (G__48898){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__48898))
);

G__48898.addErrback(((function (G__48898){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__48898))
);

return G__48898;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e48899){if((e48899 instanceof Error)){
var e = e48899;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48899;

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
}catch (e48900){if((e48900 instanceof Error)){
var e = e48900;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48900;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__48901 = cljs.core._EQ_;
var expr__48902 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__48901.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__48902))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__48901.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__48902))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__48901.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__48902))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__48901,expr__48902){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__48901,expr__48902))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__48904,callback){
var map__48905 = p__48904;
var map__48905__$1 = ((((!((map__48905 == null)))?((((map__48905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48905):map__48905);
var file_msg = map__48905__$1;
var request_url = cljs.core.get.call(null,map__48905__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30522__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__48905,map__48905__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__48905,map__48905__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__46754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto__){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto__){
return (function (state_48945){
var state_val_48946 = (state_48945[(1)]);
if((state_val_48946 === (7))){
var inst_48941 = (state_48945[(2)]);
var state_48945__$1 = state_48945;
var statearr_48947_48974 = state_48945__$1;
(statearr_48947_48974[(2)] = inst_48941);

(statearr_48947_48974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (1))){
var state_48945__$1 = state_48945;
var statearr_48948_48975 = state_48945__$1;
(statearr_48948_48975[(2)] = null);

(statearr_48948_48975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (4))){
var inst_48909 = (state_48945[(7)]);
var inst_48909__$1 = (state_48945[(2)]);
var state_48945__$1 = (function (){var statearr_48949 = state_48945;
(statearr_48949[(7)] = inst_48909__$1);

return statearr_48949;
})();
if(cljs.core.truth_(inst_48909__$1)){
var statearr_48950_48976 = state_48945__$1;
(statearr_48950_48976[(1)] = (5));

} else {
var statearr_48951_48977 = state_48945__$1;
(statearr_48951_48977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (15))){
var inst_48926 = (state_48945[(8)]);
var inst_48923 = (state_48945[(9)]);
var inst_48928 = inst_48926.call(null,inst_48923);
var state_48945__$1 = state_48945;
var statearr_48952_48978 = state_48945__$1;
(statearr_48952_48978[(2)] = inst_48928);

(statearr_48952_48978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (13))){
var inst_48935 = (state_48945[(2)]);
var state_48945__$1 = state_48945;
var statearr_48953_48979 = state_48945__$1;
(statearr_48953_48979[(2)] = inst_48935);

(statearr_48953_48979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (6))){
var state_48945__$1 = state_48945;
var statearr_48954_48980 = state_48945__$1;
(statearr_48954_48980[(2)] = null);

(statearr_48954_48980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (17))){
var inst_48932 = (state_48945[(2)]);
var state_48945__$1 = state_48945;
var statearr_48955_48981 = state_48945__$1;
(statearr_48955_48981[(2)] = inst_48932);

(statearr_48955_48981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (3))){
var inst_48943 = (state_48945[(2)]);
var state_48945__$1 = state_48945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48945__$1,inst_48943);
} else {
if((state_val_48946 === (12))){
var state_48945__$1 = state_48945;
var statearr_48956_48982 = state_48945__$1;
(statearr_48956_48982[(2)] = null);

(statearr_48956_48982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (2))){
var state_48945__$1 = state_48945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48945__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_48946 === (11))){
var inst_48914 = (state_48945[(10)]);
var inst_48921 = figwheel.client.file_reloading.blocking_load.call(null,inst_48914);
var state_48945__$1 = state_48945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48945__$1,(14),inst_48921);
} else {
if((state_val_48946 === (9))){
var inst_48914 = (state_48945[(10)]);
var state_48945__$1 = state_48945;
if(cljs.core.truth_(inst_48914)){
var statearr_48957_48983 = state_48945__$1;
(statearr_48957_48983[(1)] = (11));

} else {
var statearr_48958_48984 = state_48945__$1;
(statearr_48958_48984[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (5))){
var inst_48909 = (state_48945[(7)]);
var inst_48915 = (state_48945[(11)]);
var inst_48914 = cljs.core.nth.call(null,inst_48909,(0),null);
var inst_48915__$1 = cljs.core.nth.call(null,inst_48909,(1),null);
var state_48945__$1 = (function (){var statearr_48959 = state_48945;
(statearr_48959[(11)] = inst_48915__$1);

(statearr_48959[(10)] = inst_48914);

return statearr_48959;
})();
if(cljs.core.truth_(inst_48915__$1)){
var statearr_48960_48985 = state_48945__$1;
(statearr_48960_48985[(1)] = (8));

} else {
var statearr_48961_48986 = state_48945__$1;
(statearr_48961_48986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (14))){
var inst_48926 = (state_48945[(8)]);
var inst_48914 = (state_48945[(10)]);
var inst_48923 = (state_48945[(2)]);
var inst_48924 = console.log("Loading!",inst_48914);
var inst_48925 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_48926__$1 = cljs.core.get.call(null,inst_48925,inst_48914);
var state_48945__$1 = (function (){var statearr_48962 = state_48945;
(statearr_48962[(12)] = inst_48924);

(statearr_48962[(8)] = inst_48926__$1);

(statearr_48962[(9)] = inst_48923);

return statearr_48962;
})();
if(cljs.core.truth_(inst_48926__$1)){
var statearr_48963_48987 = state_48945__$1;
(statearr_48963_48987[(1)] = (15));

} else {
var statearr_48964_48988 = state_48945__$1;
(statearr_48964_48988[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (16))){
var inst_48923 = (state_48945[(9)]);
var inst_48930 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_48923);
var state_48945__$1 = state_48945;
var statearr_48965_48989 = state_48945__$1;
(statearr_48965_48989[(2)] = inst_48930);

(statearr_48965_48989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (10))){
var inst_48937 = (state_48945[(2)]);
var state_48945__$1 = (function (){var statearr_48966 = state_48945;
(statearr_48966[(13)] = inst_48937);

return statearr_48966;
})();
var statearr_48967_48990 = state_48945__$1;
(statearr_48967_48990[(2)] = null);

(statearr_48967_48990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (8))){
var inst_48915 = (state_48945[(11)]);
var inst_48917 = console.log("Evaling!",inst_48915);
var inst_48918 = eval(inst_48915);
var state_48945__$1 = (function (){var statearr_48968 = state_48945;
(statearr_48968[(14)] = inst_48917);

return statearr_48968;
})();
var statearr_48969_48991 = state_48945__$1;
(statearr_48969_48991[(2)] = inst_48918);

(statearr_48969_48991[(1)] = (10));


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
});})(c__46754__auto__))
;
return ((function (switch__46664__auto__,c__46754__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__46665__auto__ = null;
var figwheel$client$file_reloading$state_machine__46665__auto____0 = (function (){
var statearr_48970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48970[(0)] = figwheel$client$file_reloading$state_machine__46665__auto__);

(statearr_48970[(1)] = (1));

return statearr_48970;
});
var figwheel$client$file_reloading$state_machine__46665__auto____1 = (function (state_48945){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_48945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e48971){if((e48971 instanceof Object)){
var ex__46668__auto__ = e48971;
var statearr_48972_48992 = state_48945;
(statearr_48972_48992[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48993 = state_48945;
state_48945 = G__48993;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__46665__auto__ = function(state_48945){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__46665__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__46665__auto____1.call(this,state_48945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__46665__auto____0;
figwheel$client$file_reloading$state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__46665__auto____1;
return figwheel$client$file_reloading$state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto__))
})();
var state__46756__auto__ = (function (){var statearr_48973 = f__46755__auto__.call(null);
(statearr_48973[(6)] = c__46754__auto__);

return statearr_48973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto__))
);

return c__46754__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__48995 = arguments.length;
switch (G__48995) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__48997,callback){
var map__48998 = p__48997;
var map__48998__$1 = ((((!((map__48998 == null)))?((((map__48998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48998):map__48998);
var file_msg = map__48998__$1;
var namespace = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__48998,map__48998__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__48998,map__48998__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49000){
var map__49001 = p__49000;
var map__49001__$1 = ((((!((map__49001 == null)))?((((map__49001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49001):map__49001);
var file_msg = map__49001__$1;
var namespace = cljs.core.get.call(null,map__49001__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49003){
var map__49004 = p__49003;
var map__49004__$1 = ((((!((map__49004 == null)))?((((map__49004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49004):map__49004);
var file_msg = map__49004__$1;
var namespace = cljs.core.get.call(null,map__49004__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49006,callback){
var map__49007 = p__49006;
var map__49007__$1 = ((((!((map__49007 == null)))?((((map__49007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49007):map__49007);
var file_msg = map__49007__$1;
var request_url = cljs.core.get.call(null,map__49007__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49007__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__46754__auto___49057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto___49057,out){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto___49057,out){
return (function (state_49042){
var state_val_49043 = (state_49042[(1)]);
if((state_val_49043 === (1))){
var inst_49016 = cljs.core.seq.call(null,files);
var inst_49017 = cljs.core.first.call(null,inst_49016);
var inst_49018 = cljs.core.next.call(null,inst_49016);
var inst_49019 = files;
var state_49042__$1 = (function (){var statearr_49044 = state_49042;
(statearr_49044[(7)] = inst_49019);

(statearr_49044[(8)] = inst_49018);

(statearr_49044[(9)] = inst_49017);

return statearr_49044;
})();
var statearr_49045_49058 = state_49042__$1;
(statearr_49045_49058[(2)] = null);

(statearr_49045_49058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49043 === (2))){
var inst_49025 = (state_49042[(10)]);
var inst_49019 = (state_49042[(7)]);
var inst_49024 = cljs.core.seq.call(null,inst_49019);
var inst_49025__$1 = cljs.core.first.call(null,inst_49024);
var inst_49026 = cljs.core.next.call(null,inst_49024);
var inst_49027 = (inst_49025__$1 == null);
var inst_49028 = cljs.core.not.call(null,inst_49027);
var state_49042__$1 = (function (){var statearr_49046 = state_49042;
(statearr_49046[(11)] = inst_49026);

(statearr_49046[(10)] = inst_49025__$1);

return statearr_49046;
})();
if(inst_49028){
var statearr_49047_49059 = state_49042__$1;
(statearr_49047_49059[(1)] = (4));

} else {
var statearr_49048_49060 = state_49042__$1;
(statearr_49048_49060[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49043 === (3))){
var inst_49040 = (state_49042[(2)]);
var state_49042__$1 = state_49042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49042__$1,inst_49040);
} else {
if((state_val_49043 === (4))){
var inst_49025 = (state_49042[(10)]);
var inst_49030 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49025);
var state_49042__$1 = state_49042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49042__$1,(7),inst_49030);
} else {
if((state_val_49043 === (5))){
var inst_49036 = cljs.core.async.close_BANG_.call(null,out);
var state_49042__$1 = state_49042;
var statearr_49049_49061 = state_49042__$1;
(statearr_49049_49061[(2)] = inst_49036);

(statearr_49049_49061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49043 === (6))){
var inst_49038 = (state_49042[(2)]);
var state_49042__$1 = state_49042;
var statearr_49050_49062 = state_49042__$1;
(statearr_49050_49062[(2)] = inst_49038);

(statearr_49050_49062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49043 === (7))){
var inst_49026 = (state_49042[(11)]);
var inst_49032 = (state_49042[(2)]);
var inst_49033 = cljs.core.async.put_BANG_.call(null,out,inst_49032);
var inst_49019 = inst_49026;
var state_49042__$1 = (function (){var statearr_49051 = state_49042;
(statearr_49051[(7)] = inst_49019);

(statearr_49051[(12)] = inst_49033);

return statearr_49051;
})();
var statearr_49052_49063 = state_49042__$1;
(statearr_49052_49063[(2)] = null);

(statearr_49052_49063[(1)] = (2));


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
});})(c__46754__auto___49057,out))
;
return ((function (switch__46664__auto__,c__46754__auto___49057,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46665__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46665__auto____0 = (function (){
var statearr_49053 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49053[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46665__auto__);

(statearr_49053[(1)] = (1));

return statearr_49053;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46665__auto____1 = (function (state_49042){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_49042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e49054){if((e49054 instanceof Object)){
var ex__46668__auto__ = e49054;
var statearr_49055_49064 = state_49042;
(statearr_49055_49064[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49065 = state_49042;
state_49042 = G__49065;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46665__auto__ = function(state_49042){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46665__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46665__auto____1.call(this,state_49042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46665__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46665__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto___49057,out))
})();
var state__46756__auto__ = (function (){var statearr_49056 = f__46755__auto__.call(null);
(statearr_49056[(6)] = c__46754__auto___49057);

return statearr_49056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto___49057,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49066,opts){
var map__49067 = p__49066;
var map__49067__$1 = ((((!((map__49067 == null)))?((((map__49067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49067):map__49067);
var eval_body = cljs.core.get.call(null,map__49067__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49067__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e49069){var e = e49069;
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
return (function (p1__49070_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49070_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__49071){
var vec__49072 = p__49071;
var k = cljs.core.nth.call(null,vec__49072,(0),null);
var v = cljs.core.nth.call(null,vec__49072,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49075){
var vec__49076 = p__49075;
var k = cljs.core.nth.call(null,vec__49076,(0),null);
var v = cljs.core.nth.call(null,vec__49076,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49082,p__49083){
var map__49084 = p__49082;
var map__49084__$1 = ((((!((map__49084 == null)))?((((map__49084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49084):map__49084);
var opts = map__49084__$1;
var before_jsload = cljs.core.get.call(null,map__49084__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49084__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49084__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49085 = p__49083;
var map__49085__$1 = ((((!((map__49085 == null)))?((((map__49085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49085):map__49085);
var msg = map__49085__$1;
var files = cljs.core.get.call(null,map__49085__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49085__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49085__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__46754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__46755__auto__ = (function (){var switch__46664__auto__ = ((function (c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49239){
var state_val_49240 = (state_49239[(1)]);
if((state_val_49240 === (7))){
var inst_49099 = (state_49239[(7)]);
var inst_49100 = (state_49239[(8)]);
var inst_49101 = (state_49239[(9)]);
var inst_49102 = (state_49239[(10)]);
var inst_49107 = cljs.core._nth.call(null,inst_49100,inst_49102);
var inst_49108 = figwheel.client.file_reloading.eval_body.call(null,inst_49107,opts);
var inst_49109 = (inst_49102 + (1));
var tmp49241 = inst_49099;
var tmp49242 = inst_49100;
var tmp49243 = inst_49101;
var inst_49099__$1 = tmp49241;
var inst_49100__$1 = tmp49242;
var inst_49101__$1 = tmp49243;
var inst_49102__$1 = inst_49109;
var state_49239__$1 = (function (){var statearr_49244 = state_49239;
(statearr_49244[(7)] = inst_49099__$1);

(statearr_49244[(8)] = inst_49100__$1);

(statearr_49244[(11)] = inst_49108);

(statearr_49244[(9)] = inst_49101__$1);

(statearr_49244[(10)] = inst_49102__$1);

return statearr_49244;
})();
var statearr_49245_49328 = state_49239__$1;
(statearr_49245_49328[(2)] = null);

(statearr_49245_49328[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (20))){
var inst_49142 = (state_49239[(12)]);
var inst_49150 = figwheel.client.file_reloading.sort_files.call(null,inst_49142);
var state_49239__$1 = state_49239;
var statearr_49246_49329 = state_49239__$1;
(statearr_49246_49329[(2)] = inst_49150);

(statearr_49246_49329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (27))){
var state_49239__$1 = state_49239;
var statearr_49247_49330 = state_49239__$1;
(statearr_49247_49330[(2)] = null);

(statearr_49247_49330[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (1))){
var inst_49091 = (state_49239[(13)]);
var inst_49088 = before_jsload.call(null,files);
var inst_49089 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49090 = (function (){return ((function (inst_49091,inst_49088,inst_49089,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49079_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49079_SHARP_);
});
;})(inst_49091,inst_49088,inst_49089,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49091__$1 = cljs.core.filter.call(null,inst_49090,files);
var inst_49092 = cljs.core.not_empty.call(null,inst_49091__$1);
var state_49239__$1 = (function (){var statearr_49248 = state_49239;
(statearr_49248[(13)] = inst_49091__$1);

(statearr_49248[(14)] = inst_49089);

(statearr_49248[(15)] = inst_49088);

return statearr_49248;
})();
if(cljs.core.truth_(inst_49092)){
var statearr_49249_49331 = state_49239__$1;
(statearr_49249_49331[(1)] = (2));

} else {
var statearr_49250_49332 = state_49239__$1;
(statearr_49250_49332[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (24))){
var state_49239__$1 = state_49239;
var statearr_49251_49333 = state_49239__$1;
(statearr_49251_49333[(2)] = null);

(statearr_49251_49333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (39))){
var inst_49192 = (state_49239[(16)]);
var state_49239__$1 = state_49239;
var statearr_49252_49334 = state_49239__$1;
(statearr_49252_49334[(2)] = inst_49192);

(statearr_49252_49334[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (46))){
var inst_49234 = (state_49239[(2)]);
var state_49239__$1 = state_49239;
var statearr_49253_49335 = state_49239__$1;
(statearr_49253_49335[(2)] = inst_49234);

(statearr_49253_49335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (4))){
var inst_49136 = (state_49239[(2)]);
var inst_49137 = cljs.core.List.EMPTY;
var inst_49138 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49137);
var inst_49139 = (function (){return ((function (inst_49136,inst_49137,inst_49138,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49080_SHARP_){
var and__30510__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49080_SHARP_);
if(cljs.core.truth_(and__30510__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49080_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49080_SHARP_)));
} else {
return and__30510__auto__;
}
});
;})(inst_49136,inst_49137,inst_49138,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49140 = cljs.core.filter.call(null,inst_49139,files);
var inst_49141 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49142 = cljs.core.concat.call(null,inst_49140,inst_49141);
var state_49239__$1 = (function (){var statearr_49254 = state_49239;
(statearr_49254[(17)] = inst_49136);

(statearr_49254[(18)] = inst_49138);

(statearr_49254[(12)] = inst_49142);

return statearr_49254;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49255_49336 = state_49239__$1;
(statearr_49255_49336[(1)] = (16));

} else {
var statearr_49256_49337 = state_49239__$1;
(statearr_49256_49337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (15))){
var inst_49126 = (state_49239[(2)]);
var state_49239__$1 = state_49239;
var statearr_49257_49338 = state_49239__$1;
(statearr_49257_49338[(2)] = inst_49126);

(statearr_49257_49338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (21))){
var inst_49152 = (state_49239[(19)]);
var inst_49152__$1 = (state_49239[(2)]);
var inst_49153 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49152__$1);
var state_49239__$1 = (function (){var statearr_49258 = state_49239;
(statearr_49258[(19)] = inst_49152__$1);

return statearr_49258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49239__$1,(22),inst_49153);
} else {
if((state_val_49240 === (31))){
var inst_49237 = (state_49239[(2)]);
var state_49239__$1 = state_49239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49239__$1,inst_49237);
} else {
if((state_val_49240 === (32))){
var inst_49192 = (state_49239[(16)]);
var inst_49197 = inst_49192.cljs$lang$protocol_mask$partition0$;
var inst_49198 = (inst_49197 & (64));
var inst_49199 = inst_49192.cljs$core$ISeq$;
var inst_49200 = (cljs.core.PROTOCOL_SENTINEL === inst_49199);
var inst_49201 = (inst_49198) || (inst_49200);
var state_49239__$1 = state_49239;
if(cljs.core.truth_(inst_49201)){
var statearr_49259_49339 = state_49239__$1;
(statearr_49259_49339[(1)] = (35));

} else {
var statearr_49260_49340 = state_49239__$1;
(statearr_49260_49340[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (40))){
var inst_49214 = (state_49239[(20)]);
var inst_49213 = (state_49239[(2)]);
var inst_49214__$1 = cljs.core.get.call(null,inst_49213,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49215 = cljs.core.get.call(null,inst_49213,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49216 = cljs.core.not_empty.call(null,inst_49214__$1);
var state_49239__$1 = (function (){var statearr_49261 = state_49239;
(statearr_49261[(21)] = inst_49215);

(statearr_49261[(20)] = inst_49214__$1);

return statearr_49261;
})();
if(cljs.core.truth_(inst_49216)){
var statearr_49262_49341 = state_49239__$1;
(statearr_49262_49341[(1)] = (41));

} else {
var statearr_49263_49342 = state_49239__$1;
(statearr_49263_49342[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (33))){
var state_49239__$1 = state_49239;
var statearr_49264_49343 = state_49239__$1;
(statearr_49264_49343[(2)] = false);

(statearr_49264_49343[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (13))){
var inst_49112 = (state_49239[(22)]);
var inst_49116 = cljs.core.chunk_first.call(null,inst_49112);
var inst_49117 = cljs.core.chunk_rest.call(null,inst_49112);
var inst_49118 = cljs.core.count.call(null,inst_49116);
var inst_49099 = inst_49117;
var inst_49100 = inst_49116;
var inst_49101 = inst_49118;
var inst_49102 = (0);
var state_49239__$1 = (function (){var statearr_49265 = state_49239;
(statearr_49265[(7)] = inst_49099);

(statearr_49265[(8)] = inst_49100);

(statearr_49265[(9)] = inst_49101);

(statearr_49265[(10)] = inst_49102);

return statearr_49265;
})();
var statearr_49266_49344 = state_49239__$1;
(statearr_49266_49344[(2)] = null);

(statearr_49266_49344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (22))){
var inst_49160 = (state_49239[(23)]);
var inst_49152 = (state_49239[(19)]);
var inst_49155 = (state_49239[(24)]);
var inst_49156 = (state_49239[(25)]);
var inst_49155__$1 = (state_49239[(2)]);
var inst_49156__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49155__$1);
var inst_49157 = (function (){var all_files = inst_49152;
var res_SINGLEQUOTE_ = inst_49155__$1;
var res = inst_49156__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49160,inst_49152,inst_49155,inst_49156,inst_49155__$1,inst_49156__$1,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49081_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49081_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49160,inst_49152,inst_49155,inst_49156,inst_49155__$1,inst_49156__$1,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49158 = cljs.core.filter.call(null,inst_49157,inst_49155__$1);
var inst_49159 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49160__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49159);
var inst_49161 = cljs.core.not_empty.call(null,inst_49160__$1);
var state_49239__$1 = (function (){var statearr_49267 = state_49239;
(statearr_49267[(26)] = inst_49158);

(statearr_49267[(23)] = inst_49160__$1);

(statearr_49267[(24)] = inst_49155__$1);

(statearr_49267[(25)] = inst_49156__$1);

return statearr_49267;
})();
if(cljs.core.truth_(inst_49161)){
var statearr_49268_49345 = state_49239__$1;
(statearr_49268_49345[(1)] = (23));

} else {
var statearr_49269_49346 = state_49239__$1;
(statearr_49269_49346[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (36))){
var state_49239__$1 = state_49239;
var statearr_49270_49347 = state_49239__$1;
(statearr_49270_49347[(2)] = false);

(statearr_49270_49347[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (41))){
var inst_49214 = (state_49239[(20)]);
var inst_49218 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49219 = cljs.core.map.call(null,inst_49218,inst_49214);
var inst_49220 = cljs.core.pr_str.call(null,inst_49219);
var inst_49221 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49220)].join('');
var inst_49222 = figwheel.client.utils.log.call(null,inst_49221);
var state_49239__$1 = state_49239;
var statearr_49271_49348 = state_49239__$1;
(statearr_49271_49348[(2)] = inst_49222);

(statearr_49271_49348[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (43))){
var inst_49215 = (state_49239[(21)]);
var inst_49225 = (state_49239[(2)]);
var inst_49226 = cljs.core.not_empty.call(null,inst_49215);
var state_49239__$1 = (function (){var statearr_49272 = state_49239;
(statearr_49272[(27)] = inst_49225);

return statearr_49272;
})();
if(cljs.core.truth_(inst_49226)){
var statearr_49273_49349 = state_49239__$1;
(statearr_49273_49349[(1)] = (44));

} else {
var statearr_49274_49350 = state_49239__$1;
(statearr_49274_49350[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (29))){
var inst_49158 = (state_49239[(26)]);
var inst_49160 = (state_49239[(23)]);
var inst_49152 = (state_49239[(19)]);
var inst_49155 = (state_49239[(24)]);
var inst_49156 = (state_49239[(25)]);
var inst_49192 = (state_49239[(16)]);
var inst_49188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49191 = (function (){var all_files = inst_49152;
var res_SINGLEQUOTE_ = inst_49155;
var res = inst_49156;
var files_not_loaded = inst_49158;
var dependencies_that_loaded = inst_49160;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49160,inst_49152,inst_49155,inst_49156,inst_49192,inst_49188,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49190){
var map__49275 = p__49190;
var map__49275__$1 = ((((!((map__49275 == null)))?((((map__49275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49275):map__49275);
var namespace = cljs.core.get.call(null,map__49275__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49160,inst_49152,inst_49155,inst_49156,inst_49192,inst_49188,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49192__$1 = cljs.core.group_by.call(null,inst_49191,inst_49158);
var inst_49194 = (inst_49192__$1 == null);
var inst_49195 = cljs.core.not.call(null,inst_49194);
var state_49239__$1 = (function (){var statearr_49277 = state_49239;
(statearr_49277[(28)] = inst_49188);

(statearr_49277[(16)] = inst_49192__$1);

return statearr_49277;
})();
if(inst_49195){
var statearr_49278_49351 = state_49239__$1;
(statearr_49278_49351[(1)] = (32));

} else {
var statearr_49279_49352 = state_49239__$1;
(statearr_49279_49352[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (44))){
var inst_49215 = (state_49239[(21)]);
var inst_49228 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49215);
var inst_49229 = cljs.core.pr_str.call(null,inst_49228);
var inst_49230 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49229)].join('');
var inst_49231 = figwheel.client.utils.log.call(null,inst_49230);
var state_49239__$1 = state_49239;
var statearr_49280_49353 = state_49239__$1;
(statearr_49280_49353[(2)] = inst_49231);

(statearr_49280_49353[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (6))){
var inst_49133 = (state_49239[(2)]);
var state_49239__$1 = state_49239;
var statearr_49281_49354 = state_49239__$1;
(statearr_49281_49354[(2)] = inst_49133);

(statearr_49281_49354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (28))){
var inst_49158 = (state_49239[(26)]);
var inst_49185 = (state_49239[(2)]);
var inst_49186 = cljs.core.not_empty.call(null,inst_49158);
var state_49239__$1 = (function (){var statearr_49282 = state_49239;
(statearr_49282[(29)] = inst_49185);

return statearr_49282;
})();
if(cljs.core.truth_(inst_49186)){
var statearr_49283_49355 = state_49239__$1;
(statearr_49283_49355[(1)] = (29));

} else {
var statearr_49284_49356 = state_49239__$1;
(statearr_49284_49356[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (25))){
var inst_49156 = (state_49239[(25)]);
var inst_49172 = (state_49239[(2)]);
var inst_49173 = cljs.core.not_empty.call(null,inst_49156);
var state_49239__$1 = (function (){var statearr_49285 = state_49239;
(statearr_49285[(30)] = inst_49172);

return statearr_49285;
})();
if(cljs.core.truth_(inst_49173)){
var statearr_49286_49357 = state_49239__$1;
(statearr_49286_49357[(1)] = (26));

} else {
var statearr_49287_49358 = state_49239__$1;
(statearr_49287_49358[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (34))){
var inst_49208 = (state_49239[(2)]);
var state_49239__$1 = state_49239;
if(cljs.core.truth_(inst_49208)){
var statearr_49288_49359 = state_49239__$1;
(statearr_49288_49359[(1)] = (38));

} else {
var statearr_49289_49360 = state_49239__$1;
(statearr_49289_49360[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (17))){
var state_49239__$1 = state_49239;
var statearr_49290_49361 = state_49239__$1;
(statearr_49290_49361[(2)] = recompile_dependents);

(statearr_49290_49361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (3))){
var state_49239__$1 = state_49239;
var statearr_49291_49362 = state_49239__$1;
(statearr_49291_49362[(2)] = null);

(statearr_49291_49362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (12))){
var inst_49129 = (state_49239[(2)]);
var state_49239__$1 = state_49239;
var statearr_49292_49363 = state_49239__$1;
(statearr_49292_49363[(2)] = inst_49129);

(statearr_49292_49363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (2))){
var inst_49091 = (state_49239[(13)]);
var inst_49098 = cljs.core.seq.call(null,inst_49091);
var inst_49099 = inst_49098;
var inst_49100 = null;
var inst_49101 = (0);
var inst_49102 = (0);
var state_49239__$1 = (function (){var statearr_49293 = state_49239;
(statearr_49293[(7)] = inst_49099);

(statearr_49293[(8)] = inst_49100);

(statearr_49293[(9)] = inst_49101);

(statearr_49293[(10)] = inst_49102);

return statearr_49293;
})();
var statearr_49294_49364 = state_49239__$1;
(statearr_49294_49364[(2)] = null);

(statearr_49294_49364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (23))){
var inst_49158 = (state_49239[(26)]);
var inst_49160 = (state_49239[(23)]);
var inst_49152 = (state_49239[(19)]);
var inst_49155 = (state_49239[(24)]);
var inst_49156 = (state_49239[(25)]);
var inst_49163 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49165 = (function (){var all_files = inst_49152;
var res_SINGLEQUOTE_ = inst_49155;
var res = inst_49156;
var files_not_loaded = inst_49158;
var dependencies_that_loaded = inst_49160;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49160,inst_49152,inst_49155,inst_49156,inst_49163,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49164){
var map__49295 = p__49164;
var map__49295__$1 = ((((!((map__49295 == null)))?((((map__49295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49295):map__49295);
var request_url = cljs.core.get.call(null,map__49295__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49160,inst_49152,inst_49155,inst_49156,inst_49163,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49166 = cljs.core.reverse.call(null,inst_49160);
var inst_49167 = cljs.core.map.call(null,inst_49165,inst_49166);
var inst_49168 = cljs.core.pr_str.call(null,inst_49167);
var inst_49169 = figwheel.client.utils.log.call(null,inst_49168);
var state_49239__$1 = (function (){var statearr_49297 = state_49239;
(statearr_49297[(31)] = inst_49163);

return statearr_49297;
})();
var statearr_49298_49365 = state_49239__$1;
(statearr_49298_49365[(2)] = inst_49169);

(statearr_49298_49365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (35))){
var state_49239__$1 = state_49239;
var statearr_49299_49366 = state_49239__$1;
(statearr_49299_49366[(2)] = true);

(statearr_49299_49366[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (19))){
var inst_49142 = (state_49239[(12)]);
var inst_49148 = figwheel.client.file_reloading.expand_files.call(null,inst_49142);
var state_49239__$1 = state_49239;
var statearr_49300_49367 = state_49239__$1;
(statearr_49300_49367[(2)] = inst_49148);

(statearr_49300_49367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (11))){
var state_49239__$1 = state_49239;
var statearr_49301_49368 = state_49239__$1;
(statearr_49301_49368[(2)] = null);

(statearr_49301_49368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (9))){
var inst_49131 = (state_49239[(2)]);
var state_49239__$1 = state_49239;
var statearr_49302_49369 = state_49239__$1;
(statearr_49302_49369[(2)] = inst_49131);

(statearr_49302_49369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (5))){
var inst_49101 = (state_49239[(9)]);
var inst_49102 = (state_49239[(10)]);
var inst_49104 = (inst_49102 < inst_49101);
var inst_49105 = inst_49104;
var state_49239__$1 = state_49239;
if(cljs.core.truth_(inst_49105)){
var statearr_49303_49370 = state_49239__$1;
(statearr_49303_49370[(1)] = (7));

} else {
var statearr_49304_49371 = state_49239__$1;
(statearr_49304_49371[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (14))){
var inst_49112 = (state_49239[(22)]);
var inst_49121 = cljs.core.first.call(null,inst_49112);
var inst_49122 = figwheel.client.file_reloading.eval_body.call(null,inst_49121,opts);
var inst_49123 = cljs.core.next.call(null,inst_49112);
var inst_49099 = inst_49123;
var inst_49100 = null;
var inst_49101 = (0);
var inst_49102 = (0);
var state_49239__$1 = (function (){var statearr_49305 = state_49239;
(statearr_49305[(7)] = inst_49099);

(statearr_49305[(8)] = inst_49100);

(statearr_49305[(9)] = inst_49101);

(statearr_49305[(32)] = inst_49122);

(statearr_49305[(10)] = inst_49102);

return statearr_49305;
})();
var statearr_49306_49372 = state_49239__$1;
(statearr_49306_49372[(2)] = null);

(statearr_49306_49372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (45))){
var state_49239__$1 = state_49239;
var statearr_49307_49373 = state_49239__$1;
(statearr_49307_49373[(2)] = null);

(statearr_49307_49373[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (26))){
var inst_49158 = (state_49239[(26)]);
var inst_49160 = (state_49239[(23)]);
var inst_49152 = (state_49239[(19)]);
var inst_49155 = (state_49239[(24)]);
var inst_49156 = (state_49239[(25)]);
var inst_49175 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49177 = (function (){var all_files = inst_49152;
var res_SINGLEQUOTE_ = inst_49155;
var res = inst_49156;
var files_not_loaded = inst_49158;
var dependencies_that_loaded = inst_49160;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49160,inst_49152,inst_49155,inst_49156,inst_49175,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49176){
var map__49308 = p__49176;
var map__49308__$1 = ((((!((map__49308 == null)))?((((map__49308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49308):map__49308);
var namespace = cljs.core.get.call(null,map__49308__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49308__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49160,inst_49152,inst_49155,inst_49156,inst_49175,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49178 = cljs.core.map.call(null,inst_49177,inst_49156);
var inst_49179 = cljs.core.pr_str.call(null,inst_49178);
var inst_49180 = figwheel.client.utils.log.call(null,inst_49179);
var inst_49181 = (function (){var all_files = inst_49152;
var res_SINGLEQUOTE_ = inst_49155;
var res = inst_49156;
var files_not_loaded = inst_49158;
var dependencies_that_loaded = inst_49160;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49160,inst_49152,inst_49155,inst_49156,inst_49175,inst_49177,inst_49178,inst_49179,inst_49180,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49160,inst_49152,inst_49155,inst_49156,inst_49175,inst_49177,inst_49178,inst_49179,inst_49180,state_val_49240,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49182 = setTimeout(inst_49181,(10));
var state_49239__$1 = (function (){var statearr_49310 = state_49239;
(statearr_49310[(33)] = inst_49180);

(statearr_49310[(34)] = inst_49175);

return statearr_49310;
})();
var statearr_49311_49374 = state_49239__$1;
(statearr_49311_49374[(2)] = inst_49182);

(statearr_49311_49374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (16))){
var state_49239__$1 = state_49239;
var statearr_49312_49375 = state_49239__$1;
(statearr_49312_49375[(2)] = reload_dependents);

(statearr_49312_49375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (38))){
var inst_49192 = (state_49239[(16)]);
var inst_49210 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49192);
var state_49239__$1 = state_49239;
var statearr_49313_49376 = state_49239__$1;
(statearr_49313_49376[(2)] = inst_49210);

(statearr_49313_49376[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (30))){
var state_49239__$1 = state_49239;
var statearr_49314_49377 = state_49239__$1;
(statearr_49314_49377[(2)] = null);

(statearr_49314_49377[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (10))){
var inst_49112 = (state_49239[(22)]);
var inst_49114 = cljs.core.chunked_seq_QMARK_.call(null,inst_49112);
var state_49239__$1 = state_49239;
if(inst_49114){
var statearr_49315_49378 = state_49239__$1;
(statearr_49315_49378[(1)] = (13));

} else {
var statearr_49316_49379 = state_49239__$1;
(statearr_49316_49379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (18))){
var inst_49146 = (state_49239[(2)]);
var state_49239__$1 = state_49239;
if(cljs.core.truth_(inst_49146)){
var statearr_49317_49380 = state_49239__$1;
(statearr_49317_49380[(1)] = (19));

} else {
var statearr_49318_49381 = state_49239__$1;
(statearr_49318_49381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (42))){
var state_49239__$1 = state_49239;
var statearr_49319_49382 = state_49239__$1;
(statearr_49319_49382[(2)] = null);

(statearr_49319_49382[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (37))){
var inst_49205 = (state_49239[(2)]);
var state_49239__$1 = state_49239;
var statearr_49320_49383 = state_49239__$1;
(statearr_49320_49383[(2)] = inst_49205);

(statearr_49320_49383[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49240 === (8))){
var inst_49099 = (state_49239[(7)]);
var inst_49112 = (state_49239[(22)]);
var inst_49112__$1 = cljs.core.seq.call(null,inst_49099);
var state_49239__$1 = (function (){var statearr_49321 = state_49239;
(statearr_49321[(22)] = inst_49112__$1);

return statearr_49321;
})();
if(inst_49112__$1){
var statearr_49322_49384 = state_49239__$1;
(statearr_49322_49384[(1)] = (10));

} else {
var statearr_49323_49385 = state_49239__$1;
(statearr_49323_49385[(1)] = (11));

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
});})(c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__46664__auto__,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46665__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46665__auto____0 = (function (){
var statearr_49324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49324[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__46665__auto__);

(statearr_49324[(1)] = (1));

return statearr_49324;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46665__auto____1 = (function (state_49239){
while(true){
var ret_value__46666__auto__ = (function (){try{while(true){
var result__46667__auto__ = switch__46664__auto__.call(null,state_49239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46667__auto__;
}
break;
}
}catch (e49325){if((e49325 instanceof Object)){
var ex__46668__auto__ = e49325;
var statearr_49326_49386 = state_49239;
(statearr_49326_49386[(5)] = ex__46668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49387 = state_49239;
state_49239 = G__49387;
continue;
} else {
return ret_value__46666__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__46665__auto__ = function(state_49239){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46665__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46665__auto____1.call(this,state_49239);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46665__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__46665__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46665__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46665__auto__;
})()
;})(switch__46664__auto__,c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__46756__auto__ = (function (){var statearr_49327 = f__46755__auto__.call(null);
(statearr_49327[(6)] = c__46754__auto__);

return statearr_49327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46756__auto__);
});})(c__46754__auto__,map__49084,map__49084__$1,opts,before_jsload,on_jsload,reload_dependents,map__49085,map__49085__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__46754__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49390,link){
var map__49391 = p__49390;
var map__49391__$1 = ((((!((map__49391 == null)))?((((map__49391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49391):map__49391);
var file = cljs.core.get.call(null,map__49391__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__49391,map__49391__$1,file){
return (function (p1__49388_SHARP_,p2__49389_SHARP_){
if(cljs.core._EQ_.call(null,p1__49388_SHARP_,p2__49389_SHARP_)){
return p1__49388_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__49391,map__49391__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49394){
var map__49395 = p__49394;
var map__49395__$1 = ((((!((map__49395 == null)))?((((map__49395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49395):map__49395);
var match_length = cljs.core.get.call(null,map__49395__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49395__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49393_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49393_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49397_SHARP_,p2__49398_SHARP_){
return cljs.core.assoc.call(null,p1__49397_SHARP_,cljs.core.get.call(null,p2__49398_SHARP_,key),p2__49398_SHARP_);
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
var loaded_f_datas_49399 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_49399);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_49399);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49400,p__49401){
var map__49402 = p__49400;
var map__49402__$1 = ((((!((map__49402 == null)))?((((map__49402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49402):map__49402);
var on_cssload = cljs.core.get.call(null,map__49402__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49403 = p__49401;
var map__49403__$1 = ((((!((map__49403 == null)))?((((map__49403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49403):map__49403);
var files_msg = map__49403__$1;
var files = cljs.core.get.call(null,map__49403__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1510703505915
