// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('clojure.walk');
goog.require('sablono.util');
cljs_react_material_ui.core.transform_keys = (function cljs_react_material_ui$core$transform_keys(t,coll){

var transform = (function cljs_react_material_ui$core$transform_keys_$_transform(p__43350){
var vec__43351 = p__43350;
var k = cljs.core.nth.call(null,vec__43351,(0),null);
var v = cljs.core.nth.call(null,vec__43351,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.call(null,k),v], null);
});
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,transform,x));
} else {
return x;
}
}),coll);
});
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,sablono.util.camel_case_keys);
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var G__43355 = arguments.length;
switch (G__43355) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2 = (function (react_class,args){
var first_arg = cljs.core.first.call(null,args);
var args__$1 = (((cljs.core.map_QMARK_.call(null,first_arg)) || ((first_arg == null)))?args:cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.call(null,React.createElement,react_class,cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,cljs.core.first.call(null,args__$1)),cljs.core.rest.call(null,args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,(root_obj[type]),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var G__43358 = arguments.length;
switch (G__43358) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.call(null,null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs.core.clj__GT_js.call(null,cljs_react_material_ui.core.transform_keys.call(null,sablono.util.camel_case,raw_theme)));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][cljs.core.name.call(null,sablono.util.camel_case.call(null,color_key))]);
});
cljs_react_material_ui.core.make_selectable = (MaterialUI["makeSelectable"]);
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.call(null,cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43361 = arguments.length;
var i__31527__auto___43362 = (0);
while(true){
if((i__31527__auto___43362 < len__31526__auto___43361)){
args__31533__auto__.push((arguments[i__31527__auto___43362]));

var G__43363 = (i__31527__auto___43362 + (1));
i__31527__auto___43362 = G__43363;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,cljs_react_material_ui.core.make_selectable.call(null,(MaterialUI["List"])),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq43360){
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43360));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43365 = arguments.length;
var i__31527__auto___43366 = (0);
while(true){
if((i__31527__auto___43366 < len__31526__auto___43365)){
args__31533__auto__.push((arguments[i__31527__auto___43366]));

var G__43367 = (i__31527__auto___43366 + (1));
i__31527__auto___43366 = G__43367;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq43364){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43364));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43369 = arguments.length;
var i__31527__auto___43370 = (0);
while(true){
if((i__31527__auto___43370 < len__31526__auto___43369)){
args__31533__auto__.push((arguments[i__31527__auto___43370]));

var G__43371 = (i__31527__auto___43370 + (1));
i__31527__auto___43370 = G__43371;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq43368){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43368));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43373 = arguments.length;
var i__31527__auto___43374 = (0);
while(true){
if((i__31527__auto___43374 < len__31526__auto___43373)){
args__31533__auto__.push((arguments[i__31527__auto___43374]));

var G__43375 = (i__31527__auto___43374 + (1));
i__31527__auto___43374 = G__43375;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq43372){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43372));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43377 = arguments.length;
var i__31527__auto___43378 = (0);
while(true){
if((i__31527__auto___43378 < len__31526__auto___43377)){
args__31533__auto__.push((arguments[i__31527__auto___43378]));

var G__43379 = (i__31527__auto___43378 + (1));
i__31527__auto___43378 = G__43379;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq43376){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43376));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43381 = arguments.length;
var i__31527__auto___43382 = (0);
while(true){
if((i__31527__auto___43382 < len__31526__auto___43381)){
args__31533__auto__.push((arguments[i__31527__auto___43382]));

var G__43383 = (i__31527__auto___43382 + (1));
i__31527__auto___43382 = G__43383;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq43380){
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43380));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43385 = arguments.length;
var i__31527__auto___43386 = (0);
while(true){
if((i__31527__auto___43386 < len__31526__auto___43385)){
args__31533__auto__.push((arguments[i__31527__auto___43386]));

var G__43387 = (i__31527__auto___43386 + (1));
i__31527__auto___43386 = G__43387;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq43384){
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43384));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43389 = arguments.length;
var i__31527__auto___43390 = (0);
while(true){
if((i__31527__auto___43390 < len__31526__auto___43389)){
args__31533__auto__.push((arguments[i__31527__auto___43390]));

var G__43391 = (i__31527__auto___43390 + (1));
i__31527__auto___43390 = G__43391;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq43388){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43388));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43393 = arguments.length;
var i__31527__auto___43394 = (0);
while(true){
if((i__31527__auto___43394 < len__31526__auto___43393)){
args__31533__auto__.push((arguments[i__31527__auto___43394]));

var G__43395 = (i__31527__auto___43394 + (1));
i__31527__auto___43394 = G__43395;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq43392){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43392));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43397 = arguments.length;
var i__31527__auto___43398 = (0);
while(true){
if((i__31527__auto___43398 < len__31526__auto___43397)){
args__31533__auto__.push((arguments[i__31527__auto___43398]));

var G__43399 = (i__31527__auto___43398 + (1));
i__31527__auto___43398 = G__43399;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq43396){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43396));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43401 = arguments.length;
var i__31527__auto___43402 = (0);
while(true){
if((i__31527__auto___43402 < len__31526__auto___43401)){
args__31533__auto__.push((arguments[i__31527__auto___43402]));

var G__43403 = (i__31527__auto___43402 + (1));
i__31527__auto___43402 = G__43403;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq43400){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43400));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43405 = arguments.length;
var i__31527__auto___43406 = (0);
while(true){
if((i__31527__auto___43406 < len__31526__auto___43405)){
args__31533__auto__.push((arguments[i__31527__auto___43406]));

var G__43407 = (i__31527__auto___43406 + (1));
i__31527__auto___43406 = G__43407;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq43404){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43404));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43409 = arguments.length;
var i__31527__auto___43410 = (0);
while(true){
if((i__31527__auto___43410 < len__31526__auto___43409)){
args__31533__auto__.push((arguments[i__31527__auto___43410]));

var G__43411 = (i__31527__auto___43410 + (1));
i__31527__auto___43410 = G__43411;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq43408){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43408));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43413 = arguments.length;
var i__31527__auto___43414 = (0);
while(true){
if((i__31527__auto___43414 < len__31526__auto___43413)){
args__31533__auto__.push((arguments[i__31527__auto___43414]));

var G__43415 = (i__31527__auto___43414 + (1));
i__31527__auto___43414 = G__43415;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq43412){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43412));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43417 = arguments.length;
var i__31527__auto___43418 = (0);
while(true){
if((i__31527__auto___43418 < len__31526__auto___43417)){
args__31533__auto__.push((arguments[i__31527__auto___43418]));

var G__43419 = (i__31527__auto___43418 + (1));
i__31527__auto___43418 = G__43419;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq43416){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43416));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43421 = arguments.length;
var i__31527__auto___43422 = (0);
while(true){
if((i__31527__auto___43422 < len__31526__auto___43421)){
args__31533__auto__.push((arguments[i__31527__auto___43422]));

var G__43423 = (i__31527__auto___43422 + (1));
i__31527__auto___43422 = G__43423;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq43420){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43420));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43425 = arguments.length;
var i__31527__auto___43426 = (0);
while(true){
if((i__31527__auto___43426 < len__31526__auto___43425)){
args__31533__auto__.push((arguments[i__31527__auto___43426]));

var G__43427 = (i__31527__auto___43426 + (1));
i__31527__auto___43426 = G__43427;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq43424){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43424));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43429 = arguments.length;
var i__31527__auto___43430 = (0);
while(true){
if((i__31527__auto___43430 < len__31526__auto___43429)){
args__31533__auto__.push((arguments[i__31527__auto___43430]));

var G__43431 = (i__31527__auto___43430 + (1));
i__31527__auto___43430 = G__43431;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq43428){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43428));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43433 = arguments.length;
var i__31527__auto___43434 = (0);
while(true){
if((i__31527__auto___43434 < len__31526__auto___43433)){
args__31533__auto__.push((arguments[i__31527__auto___43434]));

var G__43435 = (i__31527__auto___43434 + (1));
i__31527__auto___43434 = G__43435;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq43432){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43432));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43437 = arguments.length;
var i__31527__auto___43438 = (0);
while(true){
if((i__31527__auto___43438 < len__31526__auto___43437)){
args__31533__auto__.push((arguments[i__31527__auto___43438]));

var G__43439 = (i__31527__auto___43438 + (1));
i__31527__auto___43438 = G__43439;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq43436){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43436));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43441 = arguments.length;
var i__31527__auto___43442 = (0);
while(true){
if((i__31527__auto___43442 < len__31526__auto___43441)){
args__31533__auto__.push((arguments[i__31527__auto___43442]));

var G__43443 = (i__31527__auto___43442 + (1));
i__31527__auto___43442 = G__43443;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq43440){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43440));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43445 = arguments.length;
var i__31527__auto___43446 = (0);
while(true){
if((i__31527__auto___43446 < len__31526__auto___43445)){
args__31533__auto__.push((arguments[i__31527__auto___43446]));

var G__43447 = (i__31527__auto___43446 + (1));
i__31527__auto___43446 = G__43447;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq43444){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43444));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43449 = arguments.length;
var i__31527__auto___43450 = (0);
while(true){
if((i__31527__auto___43450 < len__31526__auto___43449)){
args__31533__auto__.push((arguments[i__31527__auto___43450]));

var G__43451 = (i__31527__auto___43450 + (1));
i__31527__auto___43450 = G__43451;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq43448){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43448));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43453 = arguments.length;
var i__31527__auto___43454 = (0);
while(true){
if((i__31527__auto___43454 < len__31526__auto___43453)){
args__31533__auto__.push((arguments[i__31527__auto___43454]));

var G__43455 = (i__31527__auto___43454 + (1));
i__31527__auto___43454 = G__43455;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq43452){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43452));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43457 = arguments.length;
var i__31527__auto___43458 = (0);
while(true){
if((i__31527__auto___43458 < len__31526__auto___43457)){
args__31533__auto__.push((arguments[i__31527__auto___43458]));

var G__43459 = (i__31527__auto___43458 + (1));
i__31527__auto___43458 = G__43459;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq43456){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43456));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43461 = arguments.length;
var i__31527__auto___43462 = (0);
while(true){
if((i__31527__auto___43462 < len__31526__auto___43461)){
args__31533__auto__.push((arguments[i__31527__auto___43462]));

var G__43463 = (i__31527__auto___43462 + (1));
i__31527__auto___43462 = G__43463;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq43460){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43460));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43465 = arguments.length;
var i__31527__auto___43466 = (0);
while(true){
if((i__31527__auto___43466 < len__31526__auto___43465)){
args__31533__auto__.push((arguments[i__31527__auto___43466]));

var G__43467 = (i__31527__auto___43466 + (1));
i__31527__auto___43466 = G__43467;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq43464){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43464));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43469 = arguments.length;
var i__31527__auto___43470 = (0);
while(true){
if((i__31527__auto___43470 < len__31526__auto___43469)){
args__31533__auto__.push((arguments[i__31527__auto___43470]));

var G__43471 = (i__31527__auto___43470 + (1));
i__31527__auto___43470 = G__43471;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq43468){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43468));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43473 = arguments.length;
var i__31527__auto___43474 = (0);
while(true){
if((i__31527__auto___43474 < len__31526__auto___43473)){
args__31533__auto__.push((arguments[i__31527__auto___43474]));

var G__43475 = (i__31527__auto___43474 + (1));
i__31527__auto___43474 = G__43475;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq43472){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43472));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43477 = arguments.length;
var i__31527__auto___43478 = (0);
while(true){
if((i__31527__auto___43478 < len__31526__auto___43477)){
args__31533__auto__.push((arguments[i__31527__auto___43478]));

var G__43479 = (i__31527__auto___43478 + (1));
i__31527__auto___43478 = G__43479;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq43476){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43476));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43481 = arguments.length;
var i__31527__auto___43482 = (0);
while(true){
if((i__31527__auto___43482 < len__31526__auto___43481)){
args__31533__auto__.push((arguments[i__31527__auto___43482]));

var G__43483 = (i__31527__auto___43482 + (1));
i__31527__auto___43482 = G__43483;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq43480){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43480));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43485 = arguments.length;
var i__31527__auto___43486 = (0);
while(true){
if((i__31527__auto___43486 < len__31526__auto___43485)){
args__31533__auto__.push((arguments[i__31527__auto___43486]));

var G__43487 = (i__31527__auto___43486 + (1));
i__31527__auto___43486 = G__43487;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq43484){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43484));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43489 = arguments.length;
var i__31527__auto___43490 = (0);
while(true){
if((i__31527__auto___43490 < len__31526__auto___43489)){
args__31533__auto__.push((arguments[i__31527__auto___43490]));

var G__43491 = (i__31527__auto___43490 + (1));
i__31527__auto___43490 = G__43491;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq43488){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43488));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43493 = arguments.length;
var i__31527__auto___43494 = (0);
while(true){
if((i__31527__auto___43494 < len__31526__auto___43493)){
args__31533__auto__.push((arguments[i__31527__auto___43494]));

var G__43495 = (i__31527__auto___43494 + (1));
i__31527__auto___43494 = G__43495;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq43492){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43492));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43497 = arguments.length;
var i__31527__auto___43498 = (0);
while(true){
if((i__31527__auto___43498 < len__31526__auto___43497)){
args__31533__auto__.push((arguments[i__31527__auto___43498]));

var G__43499 = (i__31527__auto___43498 + (1));
i__31527__auto___43498 = G__43499;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq43496){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43496));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43501 = arguments.length;
var i__31527__auto___43502 = (0);
while(true){
if((i__31527__auto___43502 < len__31526__auto___43501)){
args__31533__auto__.push((arguments[i__31527__auto___43502]));

var G__43503 = (i__31527__auto___43502 + (1));
i__31527__auto___43502 = G__43503;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq43500){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43500));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43505 = arguments.length;
var i__31527__auto___43506 = (0);
while(true){
if((i__31527__auto___43506 < len__31526__auto___43505)){
args__31533__auto__.push((arguments[i__31527__auto___43506]));

var G__43507 = (i__31527__auto___43506 + (1));
i__31527__auto___43506 = G__43507;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq43504){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43504));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43509 = arguments.length;
var i__31527__auto___43510 = (0);
while(true){
if((i__31527__auto___43510 < len__31526__auto___43509)){
args__31533__auto__.push((arguments[i__31527__auto___43510]));

var G__43511 = (i__31527__auto___43510 + (1));
i__31527__auto___43510 = G__43511;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq43508){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43508));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43513 = arguments.length;
var i__31527__auto___43514 = (0);
while(true){
if((i__31527__auto___43514 < len__31526__auto___43513)){
args__31533__auto__.push((arguments[i__31527__auto___43514]));

var G__43515 = (i__31527__auto___43514 + (1));
i__31527__auto___43514 = G__43515;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq43512){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43512));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43517 = arguments.length;
var i__31527__auto___43518 = (0);
while(true){
if((i__31527__auto___43518 < len__31526__auto___43517)){
args__31533__auto__.push((arguments[i__31527__auto___43518]));

var G__43519 = (i__31527__auto___43518 + (1));
i__31527__auto___43518 = G__43519;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq43516){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43516));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43521 = arguments.length;
var i__31527__auto___43522 = (0);
while(true){
if((i__31527__auto___43522 < len__31526__auto___43521)){
args__31533__auto__.push((arguments[i__31527__auto___43522]));

var G__43523 = (i__31527__auto___43522 + (1));
i__31527__auto___43522 = G__43523;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq43520){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43520));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43525 = arguments.length;
var i__31527__auto___43526 = (0);
while(true){
if((i__31527__auto___43526 < len__31526__auto___43525)){
args__31533__auto__.push((arguments[i__31527__auto___43526]));

var G__43527 = (i__31527__auto___43526 + (1));
i__31527__auto___43526 = G__43527;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq43524){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43524));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43529 = arguments.length;
var i__31527__auto___43530 = (0);
while(true){
if((i__31527__auto___43530 < len__31526__auto___43529)){
args__31533__auto__.push((arguments[i__31527__auto___43530]));

var G__43531 = (i__31527__auto___43530 + (1));
i__31527__auto___43530 = G__43531;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq43528){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43528));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43533 = arguments.length;
var i__31527__auto___43534 = (0);
while(true){
if((i__31527__auto___43534 < len__31526__auto___43533)){
args__31533__auto__.push((arguments[i__31527__auto___43534]));

var G__43535 = (i__31527__auto___43534 + (1));
i__31527__auto___43534 = G__43535;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq43532){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43532));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43537 = arguments.length;
var i__31527__auto___43538 = (0);
while(true){
if((i__31527__auto___43538 < len__31526__auto___43537)){
args__31533__auto__.push((arguments[i__31527__auto___43538]));

var G__43539 = (i__31527__auto___43538 + (1));
i__31527__auto___43538 = G__43539;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq43536){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43536));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43541 = arguments.length;
var i__31527__auto___43542 = (0);
while(true){
if((i__31527__auto___43542 < len__31526__auto___43541)){
args__31533__auto__.push((arguments[i__31527__auto___43542]));

var G__43543 = (i__31527__auto___43542 + (1));
i__31527__auto___43542 = G__43543;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq43540){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43540));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43545 = arguments.length;
var i__31527__auto___43546 = (0);
while(true){
if((i__31527__auto___43546 < len__31526__auto___43545)){
args__31533__auto__.push((arguments[i__31527__auto___43546]));

var G__43547 = (i__31527__auto___43546 + (1));
i__31527__auto___43546 = G__43547;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq43544){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43544));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43549 = arguments.length;
var i__31527__auto___43550 = (0);
while(true){
if((i__31527__auto___43550 < len__31526__auto___43549)){
args__31533__auto__.push((arguments[i__31527__auto___43550]));

var G__43551 = (i__31527__auto___43550 + (1));
i__31527__auto___43550 = G__43551;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq43548){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43548));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43553 = arguments.length;
var i__31527__auto___43554 = (0);
while(true){
if((i__31527__auto___43554 < len__31526__auto___43553)){
args__31533__auto__.push((arguments[i__31527__auto___43554]));

var G__43555 = (i__31527__auto___43554 + (1));
i__31527__auto___43554 = G__43555;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq43552){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43552));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43557 = arguments.length;
var i__31527__auto___43558 = (0);
while(true){
if((i__31527__auto___43558 < len__31526__auto___43557)){
args__31533__auto__.push((arguments[i__31527__auto___43558]));

var G__43559 = (i__31527__auto___43558 + (1));
i__31527__auto___43558 = G__43559;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq43556){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43556));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43561 = arguments.length;
var i__31527__auto___43562 = (0);
while(true){
if((i__31527__auto___43562 < len__31526__auto___43561)){
args__31533__auto__.push((arguments[i__31527__auto___43562]));

var G__43563 = (i__31527__auto___43562 + (1));
i__31527__auto___43562 = G__43563;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq43560){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43560));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43565 = arguments.length;
var i__31527__auto___43566 = (0);
while(true){
if((i__31527__auto___43566 < len__31526__auto___43565)){
args__31533__auto__.push((arguments[i__31527__auto___43566]));

var G__43567 = (i__31527__auto___43566 + (1));
i__31527__auto___43566 = G__43567;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq43564){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43564));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43569 = arguments.length;
var i__31527__auto___43570 = (0);
while(true){
if((i__31527__auto___43570 < len__31526__auto___43569)){
args__31533__auto__.push((arguments[i__31527__auto___43570]));

var G__43571 = (i__31527__auto___43570 + (1));
i__31527__auto___43570 = G__43571;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq43568){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43568));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43573 = arguments.length;
var i__31527__auto___43574 = (0);
while(true){
if((i__31527__auto___43574 < len__31526__auto___43573)){
args__31533__auto__.push((arguments[i__31527__auto___43574]));

var G__43575 = (i__31527__auto___43574 + (1));
i__31527__auto___43574 = G__43575;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq43572){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43572));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43577 = arguments.length;
var i__31527__auto___43578 = (0);
while(true){
if((i__31527__auto___43578 < len__31526__auto___43577)){
args__31533__auto__.push((arguments[i__31527__auto___43578]));

var G__43579 = (i__31527__auto___43578 + (1));
i__31527__auto___43578 = G__43579;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq43576){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43576));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43581 = arguments.length;
var i__31527__auto___43582 = (0);
while(true){
if((i__31527__auto___43582 < len__31526__auto___43581)){
args__31533__auto__.push((arguments[i__31527__auto___43582]));

var G__43583 = (i__31527__auto___43582 + (1));
i__31527__auto___43582 = G__43583;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq43580){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43580));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43585 = arguments.length;
var i__31527__auto___43586 = (0);
while(true){
if((i__31527__auto___43586 < len__31526__auto___43585)){
args__31533__auto__.push((arguments[i__31527__auto___43586]));

var G__43587 = (i__31527__auto___43586 + (1));
i__31527__auto___43586 = G__43587;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq43584){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43584));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43589 = arguments.length;
var i__31527__auto___43590 = (0);
while(true){
if((i__31527__auto___43590 < len__31526__auto___43589)){
args__31533__auto__.push((arguments[i__31527__auto___43590]));

var G__43591 = (i__31527__auto___43590 + (1));
i__31527__auto___43590 = G__43591;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq43588){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43588));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43593 = arguments.length;
var i__31527__auto___43594 = (0);
while(true){
if((i__31527__auto___43594 < len__31526__auto___43593)){
args__31533__auto__.push((arguments[i__31527__auto___43594]));

var G__43595 = (i__31527__auto___43594 + (1));
i__31527__auto___43594 = G__43595;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq43592){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43592));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43597 = arguments.length;
var i__31527__auto___43598 = (0);
while(true){
if((i__31527__auto___43598 < len__31526__auto___43597)){
args__31533__auto__.push((arguments[i__31527__auto___43598]));

var G__43599 = (i__31527__auto___43598 + (1));
i__31527__auto___43598 = G__43599;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq43596){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43596));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43601 = arguments.length;
var i__31527__auto___43602 = (0);
while(true){
if((i__31527__auto___43602 < len__31526__auto___43601)){
args__31533__auto__.push((arguments[i__31527__auto___43602]));

var G__43603 = (i__31527__auto___43602 + (1));
i__31527__auto___43602 = G__43603;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq43600){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43600));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43605 = arguments.length;
var i__31527__auto___43606 = (0);
while(true){
if((i__31527__auto___43606 < len__31526__auto___43605)){
args__31533__auto__.push((arguments[i__31527__auto___43606]));

var G__43607 = (i__31527__auto___43606 + (1));
i__31527__auto___43606 = G__43607;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq43604){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43604));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43609 = arguments.length;
var i__31527__auto___43610 = (0);
while(true){
if((i__31527__auto___43610 < len__31526__auto___43609)){
args__31533__auto__.push((arguments[i__31527__auto___43610]));

var G__43611 = (i__31527__auto___43610 + (1));
i__31527__auto___43610 = G__43611;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq43608){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43608));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43613 = arguments.length;
var i__31527__auto___43614 = (0);
while(true){
if((i__31527__auto___43614 < len__31526__auto___43613)){
args__31533__auto__.push((arguments[i__31527__auto___43614]));

var G__43615 = (i__31527__auto___43614 + (1));
i__31527__auto___43614 = G__43615;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq43612){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43612));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43617 = arguments.length;
var i__31527__auto___43618 = (0);
while(true){
if((i__31527__auto___43618 < len__31526__auto___43617)){
args__31533__auto__.push((arguments[i__31527__auto___43618]));

var G__43619 = (i__31527__auto___43618 + (1));
i__31527__auto___43618 = G__43619;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq43616){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43616));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__31533__auto__ = [];
var len__31526__auto___43621 = arguments.length;
var i__31527__auto___43622 = (0);
while(true){
if((i__31527__auto___43622 < len__31526__auto___43621)){
args__31533__auto__.push((arguments[i__31527__auto___43622]));

var G__43623 = (i__31527__auto___43622 + (1));
i__31527__auto___43622 = G__43623;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq43620){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43620));
});


//# sourceMappingURL=core.js.map?rel=1507056177198
