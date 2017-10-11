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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","gt?","window/gt?",-1057096403),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776)], null),(function (breakpoint,p__43332){
var vec__43333 = p__43332;
var _ = cljs.core.nth.call(null,vec__43333,(0),null);
var size = cljs.core.nth.call(null,vec__43333,(1),null);
var order = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"lg","lg",-80787836),new cljs.core.Keyword(null,"xl","xl",-1689552936)], null);
return (order.indexOf(breakpoint) > order.indexOf(size));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","ge?","window/ge?",-1542216258),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776)], null),(function (breakpoint,p__43336){
var vec__43337 = p__43336;
var _ = cljs.core.nth.call(null,vec__43337,(0),null);
var size = cljs.core.nth.call(null,vec__43337,(1),null);
var order = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"lg","lg",-80787836),new cljs.core.Keyword(null,"xl","xl",-1689552936)], null);
return (order.indexOf(breakpoint) >= order.indexOf(size));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","lt?","window/lt?",112857359),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776)], null),(function (breakpoint,p__43340){
var vec__43341 = p__43340;
var _ = cljs.core.nth.call(null,vec__43341,(0),null);
var size = cljs.core.nth.call(null,vec__43341,(1),null);
var order = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"lg","lg",-80787836),new cljs.core.Keyword(null,"xl","xl",-1689552936)], null);
return (order.indexOf(breakpoint) > order.indexOf(size));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("window","le?","window/le?",-1937843282),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","breakpoint","window/breakpoint",628938776)], null),(function (breakpoint,p__43344){
var vec__43345 = p__43344;
var _ = cljs.core.nth.call(null,vec__43345,(0),null);
var size = cljs.core.nth.call(null,vec__43345,(1),null);
var order = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"lg","lg",-80787836),new cljs.core.Keyword(null,"xl","xl",-1689552936)], null);
return (order.indexOf(breakpoint) > order.indexOf(size));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("layout","columns","layout/columns",-1195849614),(function (db,_){
return new cljs.core.Keyword("layout","columns","layout/columns",-1195849614).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("layout","gutter","layout/gutter",-2143600188),(function (db,_){
return new cljs.core.Keyword("layout","gutter","layout/gutter",-2143600188).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1507757460638
