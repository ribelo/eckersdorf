// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__31533__auto__ = [];
var len__31526__auto___53939 = arguments.length;
var i__31527__auto___53940 = (0);
while(true){
if((i__31527__auto___53940 < len__31526__auto___53939)){
args__31533__auto__.push((arguments[i__31527__auto___53940]));

var G__53941 = (i__31527__auto___53940 + (1));
i__31527__auto___53940 = G__53941;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((2) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31534__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__53931_53942 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__53932_53943 = null;
var count__53933_53944 = (0);
var i__53934_53945 = (0);
while(true){
if((i__53934_53945 < count__53933_53944)){
var k_53946 = cljs.core._nth.call(null,chunk__53932_53943,i__53934_53945);
e.setAttribute(cljs.core.name.call(null,k_53946),cljs.core.get.call(null,attrs,k_53946));

var G__53947 = seq__53931_53942;
var G__53948 = chunk__53932_53943;
var G__53949 = count__53933_53944;
var G__53950 = (i__53934_53945 + (1));
seq__53931_53942 = G__53947;
chunk__53932_53943 = G__53948;
count__53933_53944 = G__53949;
i__53934_53945 = G__53950;
continue;
} else {
var temp__5290__auto___53951 = cljs.core.seq.call(null,seq__53931_53942);
if(temp__5290__auto___53951){
var seq__53931_53952__$1 = temp__5290__auto___53951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53931_53952__$1)){
var c__31180__auto___53953 = cljs.core.chunk_first.call(null,seq__53931_53952__$1);
var G__53954 = cljs.core.chunk_rest.call(null,seq__53931_53952__$1);
var G__53955 = c__31180__auto___53953;
var G__53956 = cljs.core.count.call(null,c__31180__auto___53953);
var G__53957 = (0);
seq__53931_53942 = G__53954;
chunk__53932_53943 = G__53955;
count__53933_53944 = G__53956;
i__53934_53945 = G__53957;
continue;
} else {
var k_53958 = cljs.core.first.call(null,seq__53931_53952__$1);
e.setAttribute(cljs.core.name.call(null,k_53958),cljs.core.get.call(null,attrs,k_53958));

var G__53959 = cljs.core.next.call(null,seq__53931_53952__$1);
var G__53960 = null;
var G__53961 = (0);
var G__53962 = (0);
seq__53931_53942 = G__53959;
chunk__53932_53943 = G__53960;
count__53933_53944 = G__53961;
i__53934_53945 = G__53962;
continue;
}
} else {
}
}
break;
}

var seq__53935_53963 = cljs.core.seq.call(null,children);
var chunk__53936_53964 = null;
var count__53937_53965 = (0);
var i__53938_53966 = (0);
while(true){
if((i__53938_53966 < count__53937_53965)){
var ch_53967 = cljs.core._nth.call(null,chunk__53936_53964,i__53938_53966);
e.appendChild(ch_53967);

var G__53968 = seq__53935_53963;
var G__53969 = chunk__53936_53964;
var G__53970 = count__53937_53965;
var G__53971 = (i__53938_53966 + (1));
seq__53935_53963 = G__53968;
chunk__53936_53964 = G__53969;
count__53937_53965 = G__53970;
i__53938_53966 = G__53971;
continue;
} else {
var temp__5290__auto___53972 = cljs.core.seq.call(null,seq__53935_53963);
if(temp__5290__auto___53972){
var seq__53935_53973__$1 = temp__5290__auto___53972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53935_53973__$1)){
var c__31180__auto___53974 = cljs.core.chunk_first.call(null,seq__53935_53973__$1);
var G__53975 = cljs.core.chunk_rest.call(null,seq__53935_53973__$1);
var G__53976 = c__31180__auto___53974;
var G__53977 = cljs.core.count.call(null,c__31180__auto___53974);
var G__53978 = (0);
seq__53935_53963 = G__53975;
chunk__53936_53964 = G__53976;
count__53937_53965 = G__53977;
i__53938_53966 = G__53978;
continue;
} else {
var ch_53979 = cljs.core.first.call(null,seq__53935_53973__$1);
e.appendChild(ch_53979);

var G__53980 = cljs.core.next.call(null,seq__53935_53973__$1);
var G__53981 = null;
var G__53982 = (0);
var G__53983 = (0);
seq__53935_53963 = G__53980;
chunk__53936_53964 = G__53981;
count__53937_53965 = G__53982;
i__53938_53966 = G__53983;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq53928){
var G__53929 = cljs.core.first.call(null,seq53928);
var seq53928__$1 = cljs.core.next.call(null,seq53928);
var G__53930 = cljs.core.first.call(null,seq53928__$1);
var seq53928__$2 = cljs.core.next.call(null,seq53928__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__53929,G__53930,seq53928__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__31302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31305__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31306__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__31302__auto__,prefer_table__31303__auto__,method_cache__31304__auto__,cached_hierarchy__31305__auto__,hierarchy__31306__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__31302__auto__,prefer_table__31303__auto__,method_cache__31304__auto__,cached_hierarchy__31305__auto__,hierarchy__31306__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31306__auto__,method_table__31302__auto__,prefer_table__31303__auto__,method_cache__31304__auto__,cached_hierarchy__31305__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_53984 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_53984.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_53984.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_53984.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_53984);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__53985,st_map){
var map__53986 = p__53985;
var map__53986__$1 = ((((!((map__53986 == null)))?((((map__53986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53986):map__53986);
var container_el = cljs.core.get.call(null,map__53986__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__53986,map__53986__$1,container_el){
return (function (p__53988){
var vec__53989 = p__53988;
var k = cljs.core.nth.call(null,vec__53989,(0),null);
var v = cljs.core.nth.call(null,vec__53989,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__53986,map__53986__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__53992,dom_str){
var map__53993 = p__53992;
var map__53993__$1 = ((((!((map__53993 == null)))?((((map__53993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53993):map__53993);
var c = map__53993__$1;
var content_area_el = cljs.core.get.call(null,map__53993__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__53995){
var map__53996 = p__53995;
var map__53996__$1 = ((((!((map__53996 == null)))?((((map__53996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53996):map__53996);
var content_area_el = cljs.core.get.call(null,map__53996__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__){
return (function (state_54013){
var state_val_54014 = (state_54013[(1)]);
if((state_val_54014 === (1))){
var inst_53998 = (state_54013[(7)]);
var inst_53998__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_53999 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_54000 = ["10px","10px","100%","68px","1.0"];
var inst_54001 = cljs.core.PersistentHashMap.fromArrays(inst_53999,inst_54000);
var inst_54002 = cljs.core.merge.call(null,inst_54001,style);
var inst_54003 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_53998__$1,inst_54002);
var inst_54004 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_53998__$1,msg);
var inst_54005 = cljs.core.async.timeout.call(null,(300));
var state_54013__$1 = (function (){var statearr_54015 = state_54013;
(statearr_54015[(7)] = inst_53998__$1);

(statearr_54015[(8)] = inst_54003);

(statearr_54015[(9)] = inst_54004);

return statearr_54015;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54013__$1,(2),inst_54005);
} else {
if((state_val_54014 === (2))){
var inst_53998 = (state_54013[(7)]);
var inst_54007 = (state_54013[(2)]);
var inst_54008 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_54009 = ["auto"];
var inst_54010 = cljs.core.PersistentHashMap.fromArrays(inst_54008,inst_54009);
var inst_54011 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_53998,inst_54010);
var state_54013__$1 = (function (){var statearr_54016 = state_54013;
(statearr_54016[(10)] = inst_54007);

return statearr_54016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54013__$1,inst_54011);
} else {
return null;
}
}
});})(c__51020__auto__))
;
return ((function (switch__50930__auto__,c__51020__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__50931__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__50931__auto____0 = (function (){
var statearr_54017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54017[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__50931__auto__);

(statearr_54017[(1)] = (1));

return statearr_54017;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__50931__auto____1 = (function (state_54013){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_54013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e54018){if((e54018 instanceof Object)){
var ex__50934__auto__ = e54018;
var statearr_54019_54021 = state_54013;
(statearr_54019_54021[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54022 = state_54013;
state_54013 = G__54022;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__50931__auto__ = function(state_54013){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__50931__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__50931__auto____1.call(this,state_54013);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__50931__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__50931__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__))
})();
var state__51022__auto__ = (function (){var statearr_54020 = f__51021__auto__.call(null);
(statearr_54020[(6)] = c__51020__auto__);

return statearr_54020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__))
);

return c__51020__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__54024 = arguments.length;
switch (G__54024) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__54026){
var map__54027 = p__54026;
var map__54027__$1 = ((((!((map__54027 == null)))?((((map__54027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54027):map__54027);
var file = cljs.core.get.call(null,map__54027__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54027__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54027__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__30249__auto__ = file;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__54029){
var vec__54030 = p__54029;
var typ = cljs.core.nth.call(null,vec__54030,(0),null);
var line_number = cljs.core.nth.call(null,vec__54030,(1),null);
var line = cljs.core.nth.call(null,vec__54030,(2),null);
var pred__54033 = cljs.core._EQ_;
var expr__54034 = typ;
if(cljs.core.truth_(pred__54033.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__54034))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__54033.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__54034))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__54033.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__54034))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__54036_SHARP_){
return cljs.core.update_in.call(null,p1__54036_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__54037_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__54037_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__54040){
var map__54041 = p__54040;
var map__54041__$1 = ((((!((map__54041 == null)))?((((map__54041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54041):map__54041);
var exception = map__54041__$1;
var message = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__30237__auto__ = file;
if(cljs.core.truth_(and__30237__auto__)){
return line;
} else {
return and__30237__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__54041,map__54041__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__54038_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54038_SHARP_),"</div>"].join('');
});})(last_message,map__54041,map__54041__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__54041,map__54041__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__54039_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__54039_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__54039_SHARP_)))].join('');
});})(last_message,map__54041,map__54041__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__54043){
var map__54044 = p__54043;
var map__54044__$1 = ((((!((map__54044 == null)))?((((map__54044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54044):map__54044);
var file = cljs.core.get.call(null,map__54044__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54044__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54044__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__54047 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__54047__$1 = ((((!((map__54047 == null)))?((((map__54047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54047):map__54047);
var head = cljs.core.get.call(null,map__54047__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__54047__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__54047__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__54047__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__54047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54047__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54047__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__54050){
var map__54051 = p__54050;
var map__54051__$1 = ((((!((map__54051 == null)))?((((map__54051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54051):map__54051);
var warning_data = map__54051__$1;
var file = cljs.core.get.call(null,map__54051__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54051__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54051__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__54051__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__54051__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__30237__auto__ = file;
if(cljs.core.truth_(and__30237__auto__)){
return line;
} else {
return and__30237__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__54051,map__54051__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__54049_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54049_SHARP_),"</div>"].join('');
});})(last_message,map__54051,map__54051__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__54053 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__54053__$1 = ((((!((map__54053 == null)))?((((map__54053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54053):map__54053);
var head = cljs.core.get.call(null,map__54053__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__54053__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__54053__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__54053__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__54053__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54053__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54053__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__54055){
var map__54056 = p__54055;
var map__54056__$1 = ((((!((map__54056 == null)))?((((map__54056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54056):map__54056);
var warning_data = map__54056__$1;
var message = cljs.core.get.call(null,map__54056__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__54056__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54056__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54056__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54058 = message;
var G__54058__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54058)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__54058);
var G__54058__$2 = (cljs.core.truth_((function (){var and__30237__auto__ = line;
if(cljs.core.truth_(and__30237__auto__)){
return column;
} else {
return and__30237__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54058__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__54058__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54058__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__54058__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__54059){
var map__54060 = p__54059;
var map__54060__$1 = ((((!((map__54060 == null)))?((((map__54060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54060):map__54060);
var warning_data = map__54060__$1;
var message = cljs.core.get.call(null,map__54060__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__54060__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54060__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54060__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__54062 = figwheel.client.heads_up.ensure_container.call(null);
var map__54062__$1 = ((((!((map__54062 == null)))?((((map__54062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54062):map__54062);
var content_area_el = cljs.core.get.call(null,map__54062__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5290__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5290__auto__)){
var last_child = temp__5290__auto__;
var temp__5288__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5288__auto__)){
var message_count = temp__5288__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__){
return (function (state_54081){
var state_val_54082 = (state_54081[(1)]);
if((state_val_54082 === (1))){
var inst_54064 = (state_54081[(7)]);
var inst_54064__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_54065 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_54066 = ["0.0"];
var inst_54067 = cljs.core.PersistentHashMap.fromArrays(inst_54065,inst_54066);
var inst_54068 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_54064__$1,inst_54067);
var inst_54069 = cljs.core.async.timeout.call(null,(300));
var state_54081__$1 = (function (){var statearr_54083 = state_54081;
(statearr_54083[(7)] = inst_54064__$1);

(statearr_54083[(8)] = inst_54068);

return statearr_54083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54081__$1,(2),inst_54069);
} else {
if((state_val_54082 === (2))){
var inst_54064 = (state_54081[(7)]);
var inst_54071 = (state_54081[(2)]);
var inst_54072 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_54073 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_54074 = cljs.core.PersistentHashMap.fromArrays(inst_54072,inst_54073);
var inst_54075 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_54064,inst_54074);
var inst_54076 = cljs.core.async.timeout.call(null,(200));
var state_54081__$1 = (function (){var statearr_54084 = state_54081;
(statearr_54084[(9)] = inst_54075);

(statearr_54084[(10)] = inst_54071);

return statearr_54084;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54081__$1,(3),inst_54076);
} else {
if((state_val_54082 === (3))){
var inst_54064 = (state_54081[(7)]);
var inst_54078 = (state_54081[(2)]);
var inst_54079 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_54064,"");
var state_54081__$1 = (function (){var statearr_54085 = state_54081;
(statearr_54085[(11)] = inst_54078);

return statearr_54085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54081__$1,inst_54079);
} else {
return null;
}
}
}
});})(c__51020__auto__))
;
return ((function (switch__50930__auto__,c__51020__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__50931__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__50931__auto____0 = (function (){
var statearr_54086 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54086[(0)] = figwheel$client$heads_up$clear_$_state_machine__50931__auto__);

(statearr_54086[(1)] = (1));

return statearr_54086;
});
var figwheel$client$heads_up$clear_$_state_machine__50931__auto____1 = (function (state_54081){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_54081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e54087){if((e54087 instanceof Object)){
var ex__50934__auto__ = e54087;
var statearr_54088_54090 = state_54081;
(statearr_54088_54090[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54091 = state_54081;
state_54081 = G__54091;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__50931__auto__ = function(state_54081){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__50931__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__50931__auto____1.call(this,state_54081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__50931__auto____0;
figwheel$client$heads_up$clear_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__50931__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__))
})();
var state__51022__auto__ = (function (){var statearr_54089 = f__51021__auto__.call(null);
(statearr_54089[(6)] = c__51020__auto__);

return statearr_54089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__))
);

return c__51020__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__51020__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51020__auto__){
return (function (){
var f__51021__auto__ = (function (){var switch__50930__auto__ = ((function (c__51020__auto__){
return (function (state_54102){
var state_val_54103 = (state_54102[(1)]);
if((state_val_54103 === (1))){
var inst_54092 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_54102__$1 = state_54102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54102__$1,(2),inst_54092);
} else {
if((state_val_54103 === (2))){
var inst_54094 = (state_54102[(2)]);
var inst_54095 = cljs.core.async.timeout.call(null,(400));
var state_54102__$1 = (function (){var statearr_54104 = state_54102;
(statearr_54104[(7)] = inst_54094);

return statearr_54104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54102__$1,(3),inst_54095);
} else {
if((state_val_54103 === (3))){
var inst_54097 = (state_54102[(2)]);
var inst_54098 = figwheel.client.heads_up.clear.call(null);
var state_54102__$1 = (function (){var statearr_54105 = state_54102;
(statearr_54105[(8)] = inst_54097);

return statearr_54105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54102__$1,(4),inst_54098);
} else {
if((state_val_54103 === (4))){
var inst_54100 = (state_54102[(2)]);
var state_54102__$1 = state_54102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54102__$1,inst_54100);
} else {
return null;
}
}
}
}
});})(c__51020__auto__))
;
return ((function (switch__50930__auto__,c__51020__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__50931__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__50931__auto____0 = (function (){
var statearr_54106 = [null,null,null,null,null,null,null,null,null];
(statearr_54106[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__50931__auto__);

(statearr_54106[(1)] = (1));

return statearr_54106;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__50931__auto____1 = (function (state_54102){
while(true){
var ret_value__50932__auto__ = (function (){try{while(true){
var result__50933__auto__ = switch__50930__auto__.call(null,state_54102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50933__auto__;
}
break;
}
}catch (e54107){if((e54107 instanceof Object)){
var ex__50934__auto__ = e54107;
var statearr_54108_54110 = state_54102;
(statearr_54108_54110[(5)] = ex__50934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54111 = state_54102;
state_54102 = G__54111;
continue;
} else {
return ret_value__50932__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__50931__auto__ = function(state_54102){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__50931__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__50931__auto____1.call(this,state_54102);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__50931__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__50931__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__50931__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__50931__auto__;
})()
;})(switch__50930__auto__,c__51020__auto__))
})();
var state__51022__auto__ = (function (){var statearr_54109 = f__51021__auto__.call(null);
(statearr_54109[(6)] = c__51020__auto__);

return statearr_54109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51022__auto__);
});})(c__51020__auto__))
);

return c__51020__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5290__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5290__auto__)){
var el = temp__5290__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1507056183389
