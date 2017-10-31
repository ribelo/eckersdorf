// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.window.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","height","window/height",1310154766),(function (db,_){
return new cljs.core.Keyword("window","height","window/height",1310154766).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","width","window/width",-1138776901),(function (db,_){
return new cljs.core.Keyword("window","width","window/width",-1138776901).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776),(function (db,_){
return new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","xsmall?","window/xsmall?",-180824537),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776)], null),(function (breakpoint){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"xs","xs",649443341),breakpoint);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","small?","window/small?",884043037),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776)], null),(function (breakpoint){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"sm","sm",-1402575065),breakpoint);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","medium?","window/medium?",-2015824440),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776)], null),(function (breakpoint){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"md","md",707286655),breakpoint);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","large?","window/large?",135210112),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776)], null),(function (breakpoint){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lg","lg",-80787836),breakpoint);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","xlarge?","window/xlarge?",981357443),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776)], null),(function (breakpoint){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"xl","xl",-1689552936),breakpoint);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","gt?","window/gt?",-1057096403),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776)], null),(function (breakpoint,p__43928){
var vec__43929 = p__43928;
var _ = cljs.core.nth.call(null,vec__43929,(0),null);
var size = cljs.core.nth.call(null,vec__43929,(1),null);
var order = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"lg","lg",-80787836),new cljs.core.Keyword(null,"xl","xl",-1689552936)], null);
return (order.indexOf(breakpoint) > order.indexOf(size));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","ge?","window/ge?",-1542216258),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776)], null),(function (breakpoint,p__43932){
var vec__43933 = p__43932;
var _ = cljs.core.nth.call(null,vec__43933,(0),null);
var size = cljs.core.nth.call(null,vec__43933,(1),null);
var order = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"lg","lg",-80787836),new cljs.core.Keyword(null,"xl","xl",-1689552936)], null);
return (order.indexOf(breakpoint) >= order.indexOf(size));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","lt?","window/lt?",112857359),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776)], null),(function (breakpoint,p__43936){
var vec__43937 = p__43936;
var _ = cljs.core.nth.call(null,vec__43937,(0),null);
var size = cljs.core.nth.call(null,vec__43937,(1),null);
var order = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"lg","lg",-80787836),new cljs.core.Keyword(null,"xl","xl",-1689552936)], null);
return (order.indexOf(breakpoint) > order.indexOf(size));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","le?","window/le?",-1937843282),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776)], null),(function (breakpoint,p__43940){
var vec__43941 = p__43940;
var _ = cljs.core.nth.call(null,vec__43941,(0),null);
var size = cljs.core.nth.call(null,vec__43941,(1),null);
var order = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"lg","lg",-80787836),new cljs.core.Keyword(null,"xl","xl",-1689552936)], null);
return (order.indexOf(breakpoint) > order.indexOf(size));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("layout","columns","layout/columns",-1195849614),(function (db,_){
return new cljs.core.Keyword("layout","columns","layout/columns",-1195849614).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("layout","gutter","layout/gutter",-2143600188),(function (db,_){
return new cljs.core.Keyword("layout","gutter","layout/gutter",-2143600188).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1509397947447
