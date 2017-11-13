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
var or__30523__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30523__auto__){
return or__30523__auto__;
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
var or__30523__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30523__auto__)){
return or__30523__auto__;
} else {
var or__30523__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30523__auto____$1)){
return or__30523__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__48735_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__48735_SHARP_));
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
var seq__48736 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__48737 = null;
var count__48738 = (0);
var i__48739 = (0);
while(true){
if((i__48739 < count__48738)){
var n = cljs.core._nth.call(null,chunk__48737,i__48739);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48740 = seq__48736;
var G__48741 = chunk__48737;
var G__48742 = count__48738;
var G__48743 = (i__48739 + (1));
seq__48736 = G__48740;
chunk__48737 = G__48741;
count__48738 = G__48742;
i__48739 = G__48743;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__48736);
if(temp__5457__auto__){
var seq__48736__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48736__$1)){
var c__31454__auto__ = cljs.core.chunk_first.call(null,seq__48736__$1);
var G__48744 = cljs.core.chunk_rest.call(null,seq__48736__$1);
var G__48745 = c__31454__auto__;
var G__48746 = cljs.core.count.call(null,c__31454__auto__);
var G__48747 = (0);
seq__48736 = G__48744;
chunk__48737 = G__48745;
count__48738 = G__48746;
i__48739 = G__48747;
continue;
} else {
var n = cljs.core.first.call(null,seq__48736__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48748 = cljs.core.next.call(null,seq__48736__$1);
var G__48749 = null;
var G__48750 = (0);
var G__48751 = (0);
seq__48736 = G__48748;
chunk__48737 = G__48749;
count__48738 = G__48750;
i__48739 = G__48751;
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
return cljs.core.some.call(null,(function (p__48752){
var vec__48753 = p__48752;
var _ = cljs.core.nth.call(null,vec__48753,(0),null);
var v = cljs.core.nth.call(null,vec__48753,(1),null);
var and__30511__auto__ = v;
if(cljs.core.truth_(and__30511__auto__)){
return v.call(null,dep);
} else {
return and__30511__auto__;
}
}),cljs.core.filter.call(null,(function (p__48756){
var vec__48757 = p__48756;
var k = cljs.core.nth.call(null,vec__48757,(0),null);
var v = cljs.core.nth.call(null,vec__48757,(1),null);
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

var seq__48769_48777 = cljs.core.seq.call(null,deps);
var chunk__48770_48778 = null;
var count__48771_48779 = (0);
var i__48772_48780 = (0);
while(true){
if((i__48772_48780 < count__48771_48779)){
var dep_48781 = cljs.core._nth.call(null,chunk__48770_48778,i__48772_48780);
if(cljs.core.truth_((function (){var and__30511__auto__ = dep_48781;
if(cljs.core.truth_(and__30511__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_48781));
} else {
return and__30511__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_48781,(depth + (1)),state);
} else {
}

var G__48782 = seq__48769_48777;
var G__48783 = chunk__48770_48778;
var G__48784 = count__48771_48779;
var G__48785 = (i__48772_48780 + (1));
seq__48769_48777 = G__48782;
chunk__48770_48778 = G__48783;
count__48771_48779 = G__48784;
i__48772_48780 = G__48785;
continue;
} else {
var temp__5457__auto___48786 = cljs.core.seq.call(null,seq__48769_48777);
if(temp__5457__auto___48786){
var seq__48769_48787__$1 = temp__5457__auto___48786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48769_48787__$1)){
var c__31454__auto___48788 = cljs.core.chunk_first.call(null,seq__48769_48787__$1);
var G__48789 = cljs.core.chunk_rest.call(null,seq__48769_48787__$1);
var G__48790 = c__31454__auto___48788;
var G__48791 = cljs.core.count.call(null,c__31454__auto___48788);
var G__48792 = (0);
seq__48769_48777 = G__48789;
chunk__48770_48778 = G__48790;
count__48771_48779 = G__48791;
i__48772_48780 = G__48792;
continue;
} else {
var dep_48793 = cljs.core.first.call(null,seq__48769_48787__$1);
if(cljs.core.truth_((function (){var and__30511__auto__ = dep_48793;
if(cljs.core.truth_(and__30511__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_48793));
} else {
return and__30511__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_48793,(depth + (1)),state);
} else {
}

var G__48794 = cljs.core.next.call(null,seq__48769_48787__$1);
var G__48795 = null;
var G__48796 = (0);
var G__48797 = (0);
seq__48769_48777 = G__48794;
chunk__48770_48778 = G__48795;
count__48771_48779 = G__48796;
i__48772_48780 = G__48797;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__48773){
var vec__48774 = p__48773;
var seq__48775 = cljs.core.seq.call(null,vec__48774);
var first__48776 = cljs.core.first.call(null,seq__48775);
var seq__48775__$1 = cljs.core.next.call(null,seq__48775);
var x = first__48776;
var xs = seq__48775__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__48774,seq__48775,first__48776,seq__48775__$1,x,xs,get_deps__$1){
return (function (p1__48760_SHARP_){
return clojure.set.difference.call(null,p1__48760_SHARP_,x);
});})(vec__48774,seq__48775,first__48776,seq__48775__$1,x,xs,get_deps__$1))
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
var seq__48798 = cljs.core.seq.call(null,provides);
var chunk__48799 = null;
var count__48800 = (0);
var i__48801 = (0);
while(true){
if((i__48801 < count__48800)){
var prov = cljs.core._nth.call(null,chunk__48799,i__48801);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48802_48810 = cljs.core.seq.call(null,requires);
var chunk__48803_48811 = null;
var count__48804_48812 = (0);
var i__48805_48813 = (0);
while(true){
if((i__48805_48813 < count__48804_48812)){
var req_48814 = cljs.core._nth.call(null,chunk__48803_48811,i__48805_48813);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48814,prov);

var G__48815 = seq__48802_48810;
var G__48816 = chunk__48803_48811;
var G__48817 = count__48804_48812;
var G__48818 = (i__48805_48813 + (1));
seq__48802_48810 = G__48815;
chunk__48803_48811 = G__48816;
count__48804_48812 = G__48817;
i__48805_48813 = G__48818;
continue;
} else {
var temp__5457__auto___48819 = cljs.core.seq.call(null,seq__48802_48810);
if(temp__5457__auto___48819){
var seq__48802_48820__$1 = temp__5457__auto___48819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48802_48820__$1)){
var c__31454__auto___48821 = cljs.core.chunk_first.call(null,seq__48802_48820__$1);
var G__48822 = cljs.core.chunk_rest.call(null,seq__48802_48820__$1);
var G__48823 = c__31454__auto___48821;
var G__48824 = cljs.core.count.call(null,c__31454__auto___48821);
var G__48825 = (0);
seq__48802_48810 = G__48822;
chunk__48803_48811 = G__48823;
count__48804_48812 = G__48824;
i__48805_48813 = G__48825;
continue;
} else {
var req_48826 = cljs.core.first.call(null,seq__48802_48820__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48826,prov);

var G__48827 = cljs.core.next.call(null,seq__48802_48820__$1);
var G__48828 = null;
var G__48829 = (0);
var G__48830 = (0);
seq__48802_48810 = G__48827;
chunk__48803_48811 = G__48828;
count__48804_48812 = G__48829;
i__48805_48813 = G__48830;
continue;
}
} else {
}
}
break;
}

var G__48831 = seq__48798;
var G__48832 = chunk__48799;
var G__48833 = count__48800;
var G__48834 = (i__48801 + (1));
seq__48798 = G__48831;
chunk__48799 = G__48832;
count__48800 = G__48833;
i__48801 = G__48834;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__48798);
if(temp__5457__auto__){
var seq__48798__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48798__$1)){
var c__31454__auto__ = cljs.core.chunk_first.call(null,seq__48798__$1);
var G__48835 = cljs.core.chunk_rest.call(null,seq__48798__$1);
var G__48836 = c__31454__auto__;
var G__48837 = cljs.core.count.call(null,c__31454__auto__);
var G__48838 = (0);
seq__48798 = G__48835;
chunk__48799 = G__48836;
count__48800 = G__48837;
i__48801 = G__48838;
continue;
} else {
var prov = cljs.core.first.call(null,seq__48798__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48806_48839 = cljs.core.seq.call(null,requires);
var chunk__48807_48840 = null;
var count__48808_48841 = (0);
var i__48809_48842 = (0);
while(true){
if((i__48809_48842 < count__48808_48841)){
var req_48843 = cljs.core._nth.call(null,chunk__48807_48840,i__48809_48842);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48843,prov);

var G__48844 = seq__48806_48839;
var G__48845 = chunk__48807_48840;
var G__48846 = count__48808_48841;
var G__48847 = (i__48809_48842 + (1));
seq__48806_48839 = G__48844;
chunk__48807_48840 = G__48845;
count__48808_48841 = G__48846;
i__48809_48842 = G__48847;
continue;
} else {
var temp__5457__auto___48848__$1 = cljs.core.seq.call(null,seq__48806_48839);
if(temp__5457__auto___48848__$1){
var seq__48806_48849__$1 = temp__5457__auto___48848__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48806_48849__$1)){
var c__31454__auto___48850 = cljs.core.chunk_first.call(null,seq__48806_48849__$1);
var G__48851 = cljs.core.chunk_rest.call(null,seq__48806_48849__$1);
var G__48852 = c__31454__auto___48850;
var G__48853 = cljs.core.count.call(null,c__31454__auto___48850);
var G__48854 = (0);
seq__48806_48839 = G__48851;
chunk__48807_48840 = G__48852;
count__48808_48841 = G__48853;
i__48809_48842 = G__48854;
continue;
} else {
var req_48855 = cljs.core.first.call(null,seq__48806_48849__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48855,prov);

var G__48856 = cljs.core.next.call(null,seq__48806_48849__$1);
var G__48857 = null;
var G__48858 = (0);
var G__48859 = (0);
seq__48806_48839 = G__48856;
chunk__48807_48840 = G__48857;
count__48808_48841 = G__48858;
i__48809_48842 = G__48859;
continue;
}
} else {
}
}
break;
}

var G__48860 = cljs.core.next.call(null,seq__48798__$1);
var G__48861 = null;
var G__48862 = (0);
var G__48863 = (0);
seq__48798 = G__48860;
chunk__48799 = G__48861;
count__48800 = G__48862;
i__48801 = G__48863;
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
var seq__48864_48868 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__48865_48869 = null;
var count__48866_48870 = (0);
var i__48867_48871 = (0);
while(true){
if((i__48867_48871 < count__48866_48870)){
var ns_48872 = cljs.core._nth.call(null,chunk__48865_48869,i__48867_48871);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48872);

var G__48873 = seq__48864_48868;
var G__48874 = chunk__48865_48869;
var G__48875 = count__48866_48870;
var G__48876 = (i__48867_48871 + (1));
seq__48864_48868 = G__48873;
chunk__48865_48869 = G__48874;
count__48866_48870 = G__48875;
i__48867_48871 = G__48876;
continue;
} else {
var temp__5457__auto___48877 = cljs.core.seq.call(null,seq__48864_48868);
if(temp__5457__auto___48877){
var seq__48864_48878__$1 = temp__5457__auto___48877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48864_48878__$1)){
var c__31454__auto___48879 = cljs.core.chunk_first.call(null,seq__48864_48878__$1);
var G__48880 = cljs.core.chunk_rest.call(null,seq__48864_48878__$1);
var G__48881 = c__31454__auto___48879;
var G__48882 = cljs.core.count.call(null,c__31454__auto___48879);
var G__48883 = (0);
seq__48864_48868 = G__48880;
chunk__48865_48869 = G__48881;
count__48866_48870 = G__48882;
i__48867_48871 = G__48883;
continue;
} else {
var ns_48884 = cljs.core.first.call(null,seq__48864_48878__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48884);

var G__48885 = cljs.core.next.call(null,seq__48864_48878__$1);
var G__48886 = null;
var G__48887 = (0);
var G__48888 = (0);
seq__48864_48868 = G__48885;
chunk__48865_48869 = G__48886;
count__48866_48870 = G__48887;
i__48867_48871 = G__48888;
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
goog.require_figwheel_backup_ = (function (){var or__30523__auto__ = goog.require__;
if(cljs.core.truth_(or__30523__auto__)){
return or__30523__auto__;
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
var G__48889__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__48889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48890__i = 0, G__48890__a = new Array(arguments.length -  0);
while (G__48890__i < G__48890__a.length) {G__48890__a[G__48890__i] = arguments[G__48890__i + 0]; ++G__48890__i;}
  args = new cljs.core.IndexedSeq(G__48890__a,0,null);
} 
return G__48889__delegate.call(this,args);};
G__48889.cljs$lang$maxFixedArity = 0;
G__48889.cljs$lang$applyTo = (function (arglist__48891){
var args = cljs.core.seq(arglist__48891);
return G__48889__delegate(args);
});
G__48889.cljs$core$IFn$_invoke$arity$variadic = G__48889__delegate;
return G__48889;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__48892_SHARP_,p2__48893_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48892_SHARP_)].join('')),p2__48893_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__48894_SHARP_,p2__48895_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48894_SHARP_)].join(''),p2__48895_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__48896 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__48896.addCallback(((function (G__48896){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__48896))
);

G__48896.addErrback(((function (G__48896){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__48896))
);

return G__48896;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e48897){if((e48897 instanceof Error)){
var e = e48897;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48897;

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
}catch (e48898){if((e48898 instanceof Error)){
var e = e48898;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48898;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__48899 = cljs.core._EQ_;
var expr__48900 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__48899.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__48900))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__48899.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__48900))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__48899.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__48900))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__48899,expr__48900){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__48899,expr__48900))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__48902,callback){
var map__48903 = p__48902;
var map__48903__$1 = ((((!((map__48903 == null)))?((((map__48903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48903):map__48903);
var file_msg = map__48903__$1;
var request_url = cljs.core.get.call(null,map__48903__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30523__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30523__auto__)){
return or__30523__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__48903,map__48903__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__48903,map__48903__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__46752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto__){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto__){
return (function (state_48943){
var state_val_48944 = (state_48943[(1)]);
if((state_val_48944 === (7))){
var inst_48939 = (state_48943[(2)]);
var state_48943__$1 = state_48943;
var statearr_48945_48972 = state_48943__$1;
(statearr_48945_48972[(2)] = inst_48939);

(statearr_48945_48972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (1))){
var state_48943__$1 = state_48943;
var statearr_48946_48973 = state_48943__$1;
(statearr_48946_48973[(2)] = null);

(statearr_48946_48973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (4))){
var inst_48907 = (state_48943[(7)]);
var inst_48907__$1 = (state_48943[(2)]);
var state_48943__$1 = (function (){var statearr_48947 = state_48943;
(statearr_48947[(7)] = inst_48907__$1);

return statearr_48947;
})();
if(cljs.core.truth_(inst_48907__$1)){
var statearr_48948_48974 = state_48943__$1;
(statearr_48948_48974[(1)] = (5));

} else {
var statearr_48949_48975 = state_48943__$1;
(statearr_48949_48975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (15))){
var inst_48921 = (state_48943[(8)]);
var inst_48924 = (state_48943[(9)]);
var inst_48926 = inst_48924.call(null,inst_48921);
var state_48943__$1 = state_48943;
var statearr_48950_48976 = state_48943__$1;
(statearr_48950_48976[(2)] = inst_48926);

(statearr_48950_48976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (13))){
var inst_48933 = (state_48943[(2)]);
var state_48943__$1 = state_48943;
var statearr_48951_48977 = state_48943__$1;
(statearr_48951_48977[(2)] = inst_48933);

(statearr_48951_48977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (6))){
var state_48943__$1 = state_48943;
var statearr_48952_48978 = state_48943__$1;
(statearr_48952_48978[(2)] = null);

(statearr_48952_48978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (17))){
var inst_48930 = (state_48943[(2)]);
var state_48943__$1 = state_48943;
var statearr_48953_48979 = state_48943__$1;
(statearr_48953_48979[(2)] = inst_48930);

(statearr_48953_48979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (3))){
var inst_48941 = (state_48943[(2)]);
var state_48943__$1 = state_48943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48943__$1,inst_48941);
} else {
if((state_val_48944 === (12))){
var state_48943__$1 = state_48943;
var statearr_48954_48980 = state_48943__$1;
(statearr_48954_48980[(2)] = null);

(statearr_48954_48980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (2))){
var state_48943__$1 = state_48943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48943__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_48944 === (11))){
var inst_48912 = (state_48943[(10)]);
var inst_48919 = figwheel.client.file_reloading.blocking_load.call(null,inst_48912);
var state_48943__$1 = state_48943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48943__$1,(14),inst_48919);
} else {
if((state_val_48944 === (9))){
var inst_48912 = (state_48943[(10)]);
var state_48943__$1 = state_48943;
if(cljs.core.truth_(inst_48912)){
var statearr_48955_48981 = state_48943__$1;
(statearr_48955_48981[(1)] = (11));

} else {
var statearr_48956_48982 = state_48943__$1;
(statearr_48956_48982[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (5))){
var inst_48907 = (state_48943[(7)]);
var inst_48913 = (state_48943[(11)]);
var inst_48912 = cljs.core.nth.call(null,inst_48907,(0),null);
var inst_48913__$1 = cljs.core.nth.call(null,inst_48907,(1),null);
var state_48943__$1 = (function (){var statearr_48957 = state_48943;
(statearr_48957[(11)] = inst_48913__$1);

(statearr_48957[(10)] = inst_48912);

return statearr_48957;
})();
if(cljs.core.truth_(inst_48913__$1)){
var statearr_48958_48983 = state_48943__$1;
(statearr_48958_48983[(1)] = (8));

} else {
var statearr_48959_48984 = state_48943__$1;
(statearr_48959_48984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (14))){
var inst_48924 = (state_48943[(9)]);
var inst_48912 = (state_48943[(10)]);
var inst_48921 = (state_48943[(2)]);
var inst_48922 = console.log("Loading!",inst_48912);
var inst_48923 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_48924__$1 = cljs.core.get.call(null,inst_48923,inst_48912);
var state_48943__$1 = (function (){var statearr_48960 = state_48943;
(statearr_48960[(8)] = inst_48921);

(statearr_48960[(9)] = inst_48924__$1);

(statearr_48960[(12)] = inst_48922);

return statearr_48960;
})();
if(cljs.core.truth_(inst_48924__$1)){
var statearr_48961_48985 = state_48943__$1;
(statearr_48961_48985[(1)] = (15));

} else {
var statearr_48962_48986 = state_48943__$1;
(statearr_48962_48986[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (16))){
var inst_48921 = (state_48943[(8)]);
var inst_48928 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_48921);
var state_48943__$1 = state_48943;
var statearr_48963_48987 = state_48943__$1;
(statearr_48963_48987[(2)] = inst_48928);

(statearr_48963_48987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (10))){
var inst_48935 = (state_48943[(2)]);
var state_48943__$1 = (function (){var statearr_48964 = state_48943;
(statearr_48964[(13)] = inst_48935);

return statearr_48964;
})();
var statearr_48965_48988 = state_48943__$1;
(statearr_48965_48988[(2)] = null);

(statearr_48965_48988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (8))){
var inst_48913 = (state_48943[(11)]);
var inst_48915 = console.log("Evaling!",inst_48913);
var inst_48916 = eval(inst_48913);
var state_48943__$1 = (function (){var statearr_48966 = state_48943;
(statearr_48966[(14)] = inst_48915);

return statearr_48966;
})();
var statearr_48967_48989 = state_48943__$1;
(statearr_48967_48989[(2)] = inst_48916);

(statearr_48967_48989[(1)] = (10));


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
});})(c__46752__auto__))
;
return ((function (switch__46662__auto__,c__46752__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__46663__auto__ = null;
var figwheel$client$file_reloading$state_machine__46663__auto____0 = (function (){
var statearr_48968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48968[(0)] = figwheel$client$file_reloading$state_machine__46663__auto__);

(statearr_48968[(1)] = (1));

return statearr_48968;
});
var figwheel$client$file_reloading$state_machine__46663__auto____1 = (function (state_48943){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_48943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e48969){if((e48969 instanceof Object)){
var ex__46666__auto__ = e48969;
var statearr_48970_48990 = state_48943;
(statearr_48970_48990[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48991 = state_48943;
state_48943 = G__48991;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__46663__auto__ = function(state_48943){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__46663__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__46663__auto____1.call(this,state_48943);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__46663__auto____0;
figwheel$client$file_reloading$state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__46663__auto____1;
return figwheel$client$file_reloading$state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto__))
})();
var state__46754__auto__ = (function (){var statearr_48971 = f__46753__auto__.call(null);
(statearr_48971[(6)] = c__46752__auto__);

return statearr_48971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto__))
);

return c__46752__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__48993 = arguments.length;
switch (G__48993) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__48995,callback){
var map__48996 = p__48995;
var map__48996__$1 = ((((!((map__48996 == null)))?((((map__48996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48996):map__48996);
var file_msg = map__48996__$1;
var namespace = cljs.core.get.call(null,map__48996__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__48996,map__48996__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__48996,map__48996__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__48998){
var map__48999 = p__48998;
var map__48999__$1 = ((((!((map__48999 == null)))?((((map__48999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48999):map__48999);
var file_msg = map__48999__$1;
var namespace = cljs.core.get.call(null,map__48999__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49001){
var map__49002 = p__49001;
var map__49002__$1 = ((((!((map__49002 == null)))?((((map__49002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49002):map__49002);
var file_msg = map__49002__$1;
var namespace = cljs.core.get.call(null,map__49002__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30511__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30511__auto__){
var or__30523__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30523__auto__)){
return or__30523__auto__;
} else {
var or__30523__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30523__auto____$1)){
return or__30523__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30511__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49004,callback){
var map__49005 = p__49004;
var map__49005__$1 = ((((!((map__49005 == null)))?((((map__49005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49005):map__49005);
var file_msg = map__49005__$1;
var request_url = cljs.core.get.call(null,map__49005__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49005__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__46752__auto___49055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto___49055,out){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto___49055,out){
return (function (state_49040){
var state_val_49041 = (state_49040[(1)]);
if((state_val_49041 === (1))){
var inst_49014 = cljs.core.seq.call(null,files);
var inst_49015 = cljs.core.first.call(null,inst_49014);
var inst_49016 = cljs.core.next.call(null,inst_49014);
var inst_49017 = files;
var state_49040__$1 = (function (){var statearr_49042 = state_49040;
(statearr_49042[(7)] = inst_49016);

(statearr_49042[(8)] = inst_49017);

(statearr_49042[(9)] = inst_49015);

return statearr_49042;
})();
var statearr_49043_49056 = state_49040__$1;
(statearr_49043_49056[(2)] = null);

(statearr_49043_49056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49041 === (2))){
var inst_49023 = (state_49040[(10)]);
var inst_49017 = (state_49040[(8)]);
var inst_49022 = cljs.core.seq.call(null,inst_49017);
var inst_49023__$1 = cljs.core.first.call(null,inst_49022);
var inst_49024 = cljs.core.next.call(null,inst_49022);
var inst_49025 = (inst_49023__$1 == null);
var inst_49026 = cljs.core.not.call(null,inst_49025);
var state_49040__$1 = (function (){var statearr_49044 = state_49040;
(statearr_49044[(11)] = inst_49024);

(statearr_49044[(10)] = inst_49023__$1);

return statearr_49044;
})();
if(inst_49026){
var statearr_49045_49057 = state_49040__$1;
(statearr_49045_49057[(1)] = (4));

} else {
var statearr_49046_49058 = state_49040__$1;
(statearr_49046_49058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49041 === (3))){
var inst_49038 = (state_49040[(2)]);
var state_49040__$1 = state_49040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49040__$1,inst_49038);
} else {
if((state_val_49041 === (4))){
var inst_49023 = (state_49040[(10)]);
var inst_49028 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49023);
var state_49040__$1 = state_49040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49040__$1,(7),inst_49028);
} else {
if((state_val_49041 === (5))){
var inst_49034 = cljs.core.async.close_BANG_.call(null,out);
var state_49040__$1 = state_49040;
var statearr_49047_49059 = state_49040__$1;
(statearr_49047_49059[(2)] = inst_49034);

(statearr_49047_49059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49041 === (6))){
var inst_49036 = (state_49040[(2)]);
var state_49040__$1 = state_49040;
var statearr_49048_49060 = state_49040__$1;
(statearr_49048_49060[(2)] = inst_49036);

(statearr_49048_49060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49041 === (7))){
var inst_49024 = (state_49040[(11)]);
var inst_49030 = (state_49040[(2)]);
var inst_49031 = cljs.core.async.put_BANG_.call(null,out,inst_49030);
var inst_49017 = inst_49024;
var state_49040__$1 = (function (){var statearr_49049 = state_49040;
(statearr_49049[(8)] = inst_49017);

(statearr_49049[(12)] = inst_49031);

return statearr_49049;
})();
var statearr_49050_49061 = state_49040__$1;
(statearr_49050_49061[(2)] = null);

(statearr_49050_49061[(1)] = (2));


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
});})(c__46752__auto___49055,out))
;
return ((function (switch__46662__auto__,c__46752__auto___49055,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46663__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46663__auto____0 = (function (){
var statearr_49051 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49051[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46663__auto__);

(statearr_49051[(1)] = (1));

return statearr_49051;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46663__auto____1 = (function (state_49040){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_49040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e49052){if((e49052 instanceof Object)){
var ex__46666__auto__ = e49052;
var statearr_49053_49062 = state_49040;
(statearr_49053_49062[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49063 = state_49040;
state_49040 = G__49063;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46663__auto__ = function(state_49040){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46663__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46663__auto____1.call(this,state_49040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46663__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46663__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto___49055,out))
})();
var state__46754__auto__ = (function (){var statearr_49054 = f__46753__auto__.call(null);
(statearr_49054[(6)] = c__46752__auto___49055);

return statearr_49054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto___49055,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49064,opts){
var map__49065 = p__49064;
var map__49065__$1 = ((((!((map__49065 == null)))?((((map__49065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49065):map__49065);
var eval_body = cljs.core.get.call(null,map__49065__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49065__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30511__auto__ = eval_body;
if(cljs.core.truth_(and__30511__auto__)){
return typeof eval_body === 'string';
} else {
return and__30511__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e49067){var e = e49067;
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
return (function (p1__49068_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49068_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__49069){
var vec__49070 = p__49069;
var k = cljs.core.nth.call(null,vec__49070,(0),null);
var v = cljs.core.nth.call(null,vec__49070,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49073){
var vec__49074 = p__49073;
var k = cljs.core.nth.call(null,vec__49074,(0),null);
var v = cljs.core.nth.call(null,vec__49074,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49080,p__49081){
var map__49082 = p__49080;
var map__49082__$1 = ((((!((map__49082 == null)))?((((map__49082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49082):map__49082);
var opts = map__49082__$1;
var before_jsload = cljs.core.get.call(null,map__49082__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49082__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49082__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49083 = p__49081;
var map__49083__$1 = ((((!((map__49083 == null)))?((((map__49083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49083):map__49083);
var msg = map__49083__$1;
var files = cljs.core.get.call(null,map__49083__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49083__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49083__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__46752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__46753__auto__ = (function (){var switch__46662__auto__ = ((function (c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49237){
var state_val_49238 = (state_49237[(1)]);
if((state_val_49238 === (7))){
var inst_49098 = (state_49237[(7)]);
var inst_49099 = (state_49237[(8)]);
var inst_49100 = (state_49237[(9)]);
var inst_49097 = (state_49237[(10)]);
var inst_49105 = cljs.core._nth.call(null,inst_49098,inst_49100);
var inst_49106 = figwheel.client.file_reloading.eval_body.call(null,inst_49105,opts);
var inst_49107 = (inst_49100 + (1));
var tmp49239 = inst_49098;
var tmp49240 = inst_49099;
var tmp49241 = inst_49097;
var inst_49097__$1 = tmp49241;
var inst_49098__$1 = tmp49239;
var inst_49099__$1 = tmp49240;
var inst_49100__$1 = inst_49107;
var state_49237__$1 = (function (){var statearr_49242 = state_49237;
(statearr_49242[(7)] = inst_49098__$1);

(statearr_49242[(8)] = inst_49099__$1);

(statearr_49242[(9)] = inst_49100__$1);

(statearr_49242[(10)] = inst_49097__$1);

(statearr_49242[(11)] = inst_49106);

return statearr_49242;
})();
var statearr_49243_49326 = state_49237__$1;
(statearr_49243_49326[(2)] = null);

(statearr_49243_49326[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (20))){
var inst_49140 = (state_49237[(12)]);
var inst_49148 = figwheel.client.file_reloading.sort_files.call(null,inst_49140);
var state_49237__$1 = state_49237;
var statearr_49244_49327 = state_49237__$1;
(statearr_49244_49327[(2)] = inst_49148);

(statearr_49244_49327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (27))){
var state_49237__$1 = state_49237;
var statearr_49245_49328 = state_49237__$1;
(statearr_49245_49328[(2)] = null);

(statearr_49245_49328[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (1))){
var inst_49089 = (state_49237[(13)]);
var inst_49086 = before_jsload.call(null,files);
var inst_49087 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49088 = (function (){return ((function (inst_49089,inst_49086,inst_49087,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49077_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49077_SHARP_);
});
;})(inst_49089,inst_49086,inst_49087,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49089__$1 = cljs.core.filter.call(null,inst_49088,files);
var inst_49090 = cljs.core.not_empty.call(null,inst_49089__$1);
var state_49237__$1 = (function (){var statearr_49246 = state_49237;
(statearr_49246[(13)] = inst_49089__$1);

(statearr_49246[(14)] = inst_49086);

(statearr_49246[(15)] = inst_49087);

return statearr_49246;
})();
if(cljs.core.truth_(inst_49090)){
var statearr_49247_49329 = state_49237__$1;
(statearr_49247_49329[(1)] = (2));

} else {
var statearr_49248_49330 = state_49237__$1;
(statearr_49248_49330[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (24))){
var state_49237__$1 = state_49237;
var statearr_49249_49331 = state_49237__$1;
(statearr_49249_49331[(2)] = null);

(statearr_49249_49331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (39))){
var inst_49190 = (state_49237[(16)]);
var state_49237__$1 = state_49237;
var statearr_49250_49332 = state_49237__$1;
(statearr_49250_49332[(2)] = inst_49190);

(statearr_49250_49332[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (46))){
var inst_49232 = (state_49237[(2)]);
var state_49237__$1 = state_49237;
var statearr_49251_49333 = state_49237__$1;
(statearr_49251_49333[(2)] = inst_49232);

(statearr_49251_49333[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (4))){
var inst_49134 = (state_49237[(2)]);
var inst_49135 = cljs.core.List.EMPTY;
var inst_49136 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49135);
var inst_49137 = (function (){return ((function (inst_49134,inst_49135,inst_49136,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49078_SHARP_){
var and__30511__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49078_SHARP_);
if(cljs.core.truth_(and__30511__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49078_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49078_SHARP_)));
} else {
return and__30511__auto__;
}
});
;})(inst_49134,inst_49135,inst_49136,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49138 = cljs.core.filter.call(null,inst_49137,files);
var inst_49139 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49140 = cljs.core.concat.call(null,inst_49138,inst_49139);
var state_49237__$1 = (function (){var statearr_49252 = state_49237;
(statearr_49252[(17)] = inst_49134);

(statearr_49252[(18)] = inst_49136);

(statearr_49252[(12)] = inst_49140);

return statearr_49252;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49253_49334 = state_49237__$1;
(statearr_49253_49334[(1)] = (16));

} else {
var statearr_49254_49335 = state_49237__$1;
(statearr_49254_49335[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (15))){
var inst_49124 = (state_49237[(2)]);
var state_49237__$1 = state_49237;
var statearr_49255_49336 = state_49237__$1;
(statearr_49255_49336[(2)] = inst_49124);

(statearr_49255_49336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (21))){
var inst_49150 = (state_49237[(19)]);
var inst_49150__$1 = (state_49237[(2)]);
var inst_49151 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49150__$1);
var state_49237__$1 = (function (){var statearr_49256 = state_49237;
(statearr_49256[(19)] = inst_49150__$1);

return statearr_49256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49237__$1,(22),inst_49151);
} else {
if((state_val_49238 === (31))){
var inst_49235 = (state_49237[(2)]);
var state_49237__$1 = state_49237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49237__$1,inst_49235);
} else {
if((state_val_49238 === (32))){
var inst_49190 = (state_49237[(16)]);
var inst_49195 = inst_49190.cljs$lang$protocol_mask$partition0$;
var inst_49196 = (inst_49195 & (64));
var inst_49197 = inst_49190.cljs$core$ISeq$;
var inst_49198 = (cljs.core.PROTOCOL_SENTINEL === inst_49197);
var inst_49199 = (inst_49196) || (inst_49198);
var state_49237__$1 = state_49237;
if(cljs.core.truth_(inst_49199)){
var statearr_49257_49337 = state_49237__$1;
(statearr_49257_49337[(1)] = (35));

} else {
var statearr_49258_49338 = state_49237__$1;
(statearr_49258_49338[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (40))){
var inst_49212 = (state_49237[(20)]);
var inst_49211 = (state_49237[(2)]);
var inst_49212__$1 = cljs.core.get.call(null,inst_49211,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49213 = cljs.core.get.call(null,inst_49211,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49214 = cljs.core.not_empty.call(null,inst_49212__$1);
var state_49237__$1 = (function (){var statearr_49259 = state_49237;
(statearr_49259[(20)] = inst_49212__$1);

(statearr_49259[(21)] = inst_49213);

return statearr_49259;
})();
if(cljs.core.truth_(inst_49214)){
var statearr_49260_49339 = state_49237__$1;
(statearr_49260_49339[(1)] = (41));

} else {
var statearr_49261_49340 = state_49237__$1;
(statearr_49261_49340[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (33))){
var state_49237__$1 = state_49237;
var statearr_49262_49341 = state_49237__$1;
(statearr_49262_49341[(2)] = false);

(statearr_49262_49341[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (13))){
var inst_49110 = (state_49237[(22)]);
var inst_49114 = cljs.core.chunk_first.call(null,inst_49110);
var inst_49115 = cljs.core.chunk_rest.call(null,inst_49110);
var inst_49116 = cljs.core.count.call(null,inst_49114);
var inst_49097 = inst_49115;
var inst_49098 = inst_49114;
var inst_49099 = inst_49116;
var inst_49100 = (0);
var state_49237__$1 = (function (){var statearr_49263 = state_49237;
(statearr_49263[(7)] = inst_49098);

(statearr_49263[(8)] = inst_49099);

(statearr_49263[(9)] = inst_49100);

(statearr_49263[(10)] = inst_49097);

return statearr_49263;
})();
var statearr_49264_49342 = state_49237__$1;
(statearr_49264_49342[(2)] = null);

(statearr_49264_49342[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (22))){
var inst_49158 = (state_49237[(23)]);
var inst_49153 = (state_49237[(24)]);
var inst_49150 = (state_49237[(19)]);
var inst_49154 = (state_49237[(25)]);
var inst_49153__$1 = (state_49237[(2)]);
var inst_49154__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49153__$1);
var inst_49155 = (function (){var all_files = inst_49150;
var res_SINGLEQUOTE_ = inst_49153__$1;
var res = inst_49154__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49158,inst_49153,inst_49150,inst_49154,inst_49153__$1,inst_49154__$1,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49079_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49079_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49158,inst_49153,inst_49150,inst_49154,inst_49153__$1,inst_49154__$1,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49156 = cljs.core.filter.call(null,inst_49155,inst_49153__$1);
var inst_49157 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49158__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49157);
var inst_49159 = cljs.core.not_empty.call(null,inst_49158__$1);
var state_49237__$1 = (function (){var statearr_49265 = state_49237;
(statearr_49265[(23)] = inst_49158__$1);

(statearr_49265[(24)] = inst_49153__$1);

(statearr_49265[(25)] = inst_49154__$1);

(statearr_49265[(26)] = inst_49156);

return statearr_49265;
})();
if(cljs.core.truth_(inst_49159)){
var statearr_49266_49343 = state_49237__$1;
(statearr_49266_49343[(1)] = (23));

} else {
var statearr_49267_49344 = state_49237__$1;
(statearr_49267_49344[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (36))){
var state_49237__$1 = state_49237;
var statearr_49268_49345 = state_49237__$1;
(statearr_49268_49345[(2)] = false);

(statearr_49268_49345[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (41))){
var inst_49212 = (state_49237[(20)]);
var inst_49216 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49217 = cljs.core.map.call(null,inst_49216,inst_49212);
var inst_49218 = cljs.core.pr_str.call(null,inst_49217);
var inst_49219 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49218)].join('');
var inst_49220 = figwheel.client.utils.log.call(null,inst_49219);
var state_49237__$1 = state_49237;
var statearr_49269_49346 = state_49237__$1;
(statearr_49269_49346[(2)] = inst_49220);

(statearr_49269_49346[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (43))){
var inst_49213 = (state_49237[(21)]);
var inst_49223 = (state_49237[(2)]);
var inst_49224 = cljs.core.not_empty.call(null,inst_49213);
var state_49237__$1 = (function (){var statearr_49270 = state_49237;
(statearr_49270[(27)] = inst_49223);

return statearr_49270;
})();
if(cljs.core.truth_(inst_49224)){
var statearr_49271_49347 = state_49237__$1;
(statearr_49271_49347[(1)] = (44));

} else {
var statearr_49272_49348 = state_49237__$1;
(statearr_49272_49348[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (29))){
var inst_49158 = (state_49237[(23)]);
var inst_49153 = (state_49237[(24)]);
var inst_49150 = (state_49237[(19)]);
var inst_49190 = (state_49237[(16)]);
var inst_49154 = (state_49237[(25)]);
var inst_49156 = (state_49237[(26)]);
var inst_49186 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49189 = (function (){var all_files = inst_49150;
var res_SINGLEQUOTE_ = inst_49153;
var res = inst_49154;
var files_not_loaded = inst_49156;
var dependencies_that_loaded = inst_49158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49153,inst_49150,inst_49190,inst_49154,inst_49156,inst_49186,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49188){
var map__49273 = p__49188;
var map__49273__$1 = ((((!((map__49273 == null)))?((((map__49273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49273):map__49273);
var namespace = cljs.core.get.call(null,map__49273__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49153,inst_49150,inst_49190,inst_49154,inst_49156,inst_49186,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49190__$1 = cljs.core.group_by.call(null,inst_49189,inst_49156);
var inst_49192 = (inst_49190__$1 == null);
var inst_49193 = cljs.core.not.call(null,inst_49192);
var state_49237__$1 = (function (){var statearr_49275 = state_49237;
(statearr_49275[(16)] = inst_49190__$1);

(statearr_49275[(28)] = inst_49186);

return statearr_49275;
})();
if(inst_49193){
var statearr_49276_49349 = state_49237__$1;
(statearr_49276_49349[(1)] = (32));

} else {
var statearr_49277_49350 = state_49237__$1;
(statearr_49277_49350[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (44))){
var inst_49213 = (state_49237[(21)]);
var inst_49226 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49213);
var inst_49227 = cljs.core.pr_str.call(null,inst_49226);
var inst_49228 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49227)].join('');
var inst_49229 = figwheel.client.utils.log.call(null,inst_49228);
var state_49237__$1 = state_49237;
var statearr_49278_49351 = state_49237__$1;
(statearr_49278_49351[(2)] = inst_49229);

(statearr_49278_49351[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (6))){
var inst_49131 = (state_49237[(2)]);
var state_49237__$1 = state_49237;
var statearr_49279_49352 = state_49237__$1;
(statearr_49279_49352[(2)] = inst_49131);

(statearr_49279_49352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (28))){
var inst_49156 = (state_49237[(26)]);
var inst_49183 = (state_49237[(2)]);
var inst_49184 = cljs.core.not_empty.call(null,inst_49156);
var state_49237__$1 = (function (){var statearr_49280 = state_49237;
(statearr_49280[(29)] = inst_49183);

return statearr_49280;
})();
if(cljs.core.truth_(inst_49184)){
var statearr_49281_49353 = state_49237__$1;
(statearr_49281_49353[(1)] = (29));

} else {
var statearr_49282_49354 = state_49237__$1;
(statearr_49282_49354[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (25))){
var inst_49154 = (state_49237[(25)]);
var inst_49170 = (state_49237[(2)]);
var inst_49171 = cljs.core.not_empty.call(null,inst_49154);
var state_49237__$1 = (function (){var statearr_49283 = state_49237;
(statearr_49283[(30)] = inst_49170);

return statearr_49283;
})();
if(cljs.core.truth_(inst_49171)){
var statearr_49284_49355 = state_49237__$1;
(statearr_49284_49355[(1)] = (26));

} else {
var statearr_49285_49356 = state_49237__$1;
(statearr_49285_49356[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (34))){
var inst_49206 = (state_49237[(2)]);
var state_49237__$1 = state_49237;
if(cljs.core.truth_(inst_49206)){
var statearr_49286_49357 = state_49237__$1;
(statearr_49286_49357[(1)] = (38));

} else {
var statearr_49287_49358 = state_49237__$1;
(statearr_49287_49358[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (17))){
var state_49237__$1 = state_49237;
var statearr_49288_49359 = state_49237__$1;
(statearr_49288_49359[(2)] = recompile_dependents);

(statearr_49288_49359[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (3))){
var state_49237__$1 = state_49237;
var statearr_49289_49360 = state_49237__$1;
(statearr_49289_49360[(2)] = null);

(statearr_49289_49360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (12))){
var inst_49127 = (state_49237[(2)]);
var state_49237__$1 = state_49237;
var statearr_49290_49361 = state_49237__$1;
(statearr_49290_49361[(2)] = inst_49127);

(statearr_49290_49361[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (2))){
var inst_49089 = (state_49237[(13)]);
var inst_49096 = cljs.core.seq.call(null,inst_49089);
var inst_49097 = inst_49096;
var inst_49098 = null;
var inst_49099 = (0);
var inst_49100 = (0);
var state_49237__$1 = (function (){var statearr_49291 = state_49237;
(statearr_49291[(7)] = inst_49098);

(statearr_49291[(8)] = inst_49099);

(statearr_49291[(9)] = inst_49100);

(statearr_49291[(10)] = inst_49097);

return statearr_49291;
})();
var statearr_49292_49362 = state_49237__$1;
(statearr_49292_49362[(2)] = null);

(statearr_49292_49362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (23))){
var inst_49158 = (state_49237[(23)]);
var inst_49153 = (state_49237[(24)]);
var inst_49150 = (state_49237[(19)]);
var inst_49154 = (state_49237[(25)]);
var inst_49156 = (state_49237[(26)]);
var inst_49161 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49163 = (function (){var all_files = inst_49150;
var res_SINGLEQUOTE_ = inst_49153;
var res = inst_49154;
var files_not_loaded = inst_49156;
var dependencies_that_loaded = inst_49158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49153,inst_49150,inst_49154,inst_49156,inst_49161,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49162){
var map__49293 = p__49162;
var map__49293__$1 = ((((!((map__49293 == null)))?((((map__49293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49293):map__49293);
var request_url = cljs.core.get.call(null,map__49293__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49153,inst_49150,inst_49154,inst_49156,inst_49161,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49164 = cljs.core.reverse.call(null,inst_49158);
var inst_49165 = cljs.core.map.call(null,inst_49163,inst_49164);
var inst_49166 = cljs.core.pr_str.call(null,inst_49165);
var inst_49167 = figwheel.client.utils.log.call(null,inst_49166);
var state_49237__$1 = (function (){var statearr_49295 = state_49237;
(statearr_49295[(31)] = inst_49161);

return statearr_49295;
})();
var statearr_49296_49363 = state_49237__$1;
(statearr_49296_49363[(2)] = inst_49167);

(statearr_49296_49363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (35))){
var state_49237__$1 = state_49237;
var statearr_49297_49364 = state_49237__$1;
(statearr_49297_49364[(2)] = true);

(statearr_49297_49364[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (19))){
var inst_49140 = (state_49237[(12)]);
var inst_49146 = figwheel.client.file_reloading.expand_files.call(null,inst_49140);
var state_49237__$1 = state_49237;
var statearr_49298_49365 = state_49237__$1;
(statearr_49298_49365[(2)] = inst_49146);

(statearr_49298_49365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (11))){
var state_49237__$1 = state_49237;
var statearr_49299_49366 = state_49237__$1;
(statearr_49299_49366[(2)] = null);

(statearr_49299_49366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (9))){
var inst_49129 = (state_49237[(2)]);
var state_49237__$1 = state_49237;
var statearr_49300_49367 = state_49237__$1;
(statearr_49300_49367[(2)] = inst_49129);

(statearr_49300_49367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (5))){
var inst_49099 = (state_49237[(8)]);
var inst_49100 = (state_49237[(9)]);
var inst_49102 = (inst_49100 < inst_49099);
var inst_49103 = inst_49102;
var state_49237__$1 = state_49237;
if(cljs.core.truth_(inst_49103)){
var statearr_49301_49368 = state_49237__$1;
(statearr_49301_49368[(1)] = (7));

} else {
var statearr_49302_49369 = state_49237__$1;
(statearr_49302_49369[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (14))){
var inst_49110 = (state_49237[(22)]);
var inst_49119 = cljs.core.first.call(null,inst_49110);
var inst_49120 = figwheel.client.file_reloading.eval_body.call(null,inst_49119,opts);
var inst_49121 = cljs.core.next.call(null,inst_49110);
var inst_49097 = inst_49121;
var inst_49098 = null;
var inst_49099 = (0);
var inst_49100 = (0);
var state_49237__$1 = (function (){var statearr_49303 = state_49237;
(statearr_49303[(7)] = inst_49098);

(statearr_49303[(8)] = inst_49099);

(statearr_49303[(32)] = inst_49120);

(statearr_49303[(9)] = inst_49100);

(statearr_49303[(10)] = inst_49097);

return statearr_49303;
})();
var statearr_49304_49370 = state_49237__$1;
(statearr_49304_49370[(2)] = null);

(statearr_49304_49370[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (45))){
var state_49237__$1 = state_49237;
var statearr_49305_49371 = state_49237__$1;
(statearr_49305_49371[(2)] = null);

(statearr_49305_49371[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (26))){
var inst_49158 = (state_49237[(23)]);
var inst_49153 = (state_49237[(24)]);
var inst_49150 = (state_49237[(19)]);
var inst_49154 = (state_49237[(25)]);
var inst_49156 = (state_49237[(26)]);
var inst_49173 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49175 = (function (){var all_files = inst_49150;
var res_SINGLEQUOTE_ = inst_49153;
var res = inst_49154;
var files_not_loaded = inst_49156;
var dependencies_that_loaded = inst_49158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49153,inst_49150,inst_49154,inst_49156,inst_49173,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49174){
var map__49306 = p__49174;
var map__49306__$1 = ((((!((map__49306 == null)))?((((map__49306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49306):map__49306);
var namespace = cljs.core.get.call(null,map__49306__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49306__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49153,inst_49150,inst_49154,inst_49156,inst_49173,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49176 = cljs.core.map.call(null,inst_49175,inst_49154);
var inst_49177 = cljs.core.pr_str.call(null,inst_49176);
var inst_49178 = figwheel.client.utils.log.call(null,inst_49177);
var inst_49179 = (function (){var all_files = inst_49150;
var res_SINGLEQUOTE_ = inst_49153;
var res = inst_49154;
var files_not_loaded = inst_49156;
var dependencies_that_loaded = inst_49158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49153,inst_49150,inst_49154,inst_49156,inst_49173,inst_49175,inst_49176,inst_49177,inst_49178,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49158,inst_49153,inst_49150,inst_49154,inst_49156,inst_49173,inst_49175,inst_49176,inst_49177,inst_49178,state_val_49238,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49180 = setTimeout(inst_49179,(10));
var state_49237__$1 = (function (){var statearr_49308 = state_49237;
(statearr_49308[(33)] = inst_49178);

(statearr_49308[(34)] = inst_49173);

return statearr_49308;
})();
var statearr_49309_49372 = state_49237__$1;
(statearr_49309_49372[(2)] = inst_49180);

(statearr_49309_49372[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (16))){
var state_49237__$1 = state_49237;
var statearr_49310_49373 = state_49237__$1;
(statearr_49310_49373[(2)] = reload_dependents);

(statearr_49310_49373[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (38))){
var inst_49190 = (state_49237[(16)]);
var inst_49208 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49190);
var state_49237__$1 = state_49237;
var statearr_49311_49374 = state_49237__$1;
(statearr_49311_49374[(2)] = inst_49208);

(statearr_49311_49374[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (30))){
var state_49237__$1 = state_49237;
var statearr_49312_49375 = state_49237__$1;
(statearr_49312_49375[(2)] = null);

(statearr_49312_49375[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (10))){
var inst_49110 = (state_49237[(22)]);
var inst_49112 = cljs.core.chunked_seq_QMARK_.call(null,inst_49110);
var state_49237__$1 = state_49237;
if(inst_49112){
var statearr_49313_49376 = state_49237__$1;
(statearr_49313_49376[(1)] = (13));

} else {
var statearr_49314_49377 = state_49237__$1;
(statearr_49314_49377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (18))){
var inst_49144 = (state_49237[(2)]);
var state_49237__$1 = state_49237;
if(cljs.core.truth_(inst_49144)){
var statearr_49315_49378 = state_49237__$1;
(statearr_49315_49378[(1)] = (19));

} else {
var statearr_49316_49379 = state_49237__$1;
(statearr_49316_49379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (42))){
var state_49237__$1 = state_49237;
var statearr_49317_49380 = state_49237__$1;
(statearr_49317_49380[(2)] = null);

(statearr_49317_49380[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (37))){
var inst_49203 = (state_49237[(2)]);
var state_49237__$1 = state_49237;
var statearr_49318_49381 = state_49237__$1;
(statearr_49318_49381[(2)] = inst_49203);

(statearr_49318_49381[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49238 === (8))){
var inst_49097 = (state_49237[(10)]);
var inst_49110 = (state_49237[(22)]);
var inst_49110__$1 = cljs.core.seq.call(null,inst_49097);
var state_49237__$1 = (function (){var statearr_49319 = state_49237;
(statearr_49319[(22)] = inst_49110__$1);

return statearr_49319;
})();
if(inst_49110__$1){
var statearr_49320_49382 = state_49237__$1;
(statearr_49320_49382[(1)] = (10));

} else {
var statearr_49321_49383 = state_49237__$1;
(statearr_49321_49383[(1)] = (11));

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
});})(c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__46662__auto__,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46663__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46663__auto____0 = (function (){
var statearr_49322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49322[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__46663__auto__);

(statearr_49322[(1)] = (1));

return statearr_49322;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46663__auto____1 = (function (state_49237){
while(true){
var ret_value__46664__auto__ = (function (){try{while(true){
var result__46665__auto__ = switch__46662__auto__.call(null,state_49237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46665__auto__;
}
break;
}
}catch (e49323){if((e49323 instanceof Object)){
var ex__46666__auto__ = e49323;
var statearr_49324_49384 = state_49237;
(statearr_49324_49384[(5)] = ex__46666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49385 = state_49237;
state_49237 = G__49385;
continue;
} else {
return ret_value__46664__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__46663__auto__ = function(state_49237){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46663__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46663__auto____1.call(this,state_49237);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46663__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__46663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46663__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46663__auto__;
})()
;})(switch__46662__auto__,c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__46754__auto__ = (function (){var statearr_49325 = f__46753__auto__.call(null);
(statearr_49325[(6)] = c__46752__auto__);

return statearr_49325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46754__auto__);
});})(c__46752__auto__,map__49082,map__49082__$1,opts,before_jsload,on_jsload,reload_dependents,map__49083,map__49083__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__46752__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49388,link){
var map__49389 = p__49388;
var map__49389__$1 = ((((!((map__49389 == null)))?((((map__49389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49389):map__49389);
var file = cljs.core.get.call(null,map__49389__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__49389,map__49389__$1,file){
return (function (p1__49386_SHARP_,p2__49387_SHARP_){
if(cljs.core._EQ_.call(null,p1__49386_SHARP_,p2__49387_SHARP_)){
return p1__49386_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__49389,map__49389__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49392){
var map__49393 = p__49392;
var map__49393__$1 = ((((!((map__49393 == null)))?((((map__49393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49393):map__49393);
var match_length = cljs.core.get.call(null,map__49393__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49393__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49391_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49391_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49395_SHARP_,p2__49396_SHARP_){
return cljs.core.assoc.call(null,p1__49395_SHARP_,cljs.core.get.call(null,p2__49396_SHARP_,key),p2__49396_SHARP_);
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
var loaded_f_datas_49397 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_49397);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_49397);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49398,p__49399){
var map__49400 = p__49398;
var map__49400__$1 = ((((!((map__49400 == null)))?((((map__49400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49400):map__49400);
var on_cssload = cljs.core.get.call(null,map__49400__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49401 = p__49399;
var map__49401__$1 = ((((!((map__49401 == null)))?((((map__49401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49401):map__49401);
var files_msg = map__49401__$1;
var files = cljs.core.get.call(null,map__49401__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1510609302057
