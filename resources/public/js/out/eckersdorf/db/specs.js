// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.db.specs');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs_time.core');
goog.require('cuerdas.core');
goog.require('goog.date.DateTime');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32344#","p1__32344#",-1862154988,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),(24),cljs.core.list(new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),new cljs.core.Symbol(null,"p1__32344#","p1__32344#",-1862154988,null))))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),(24),cljs.core.list(new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__32344_SHARP_){
return cljs.core._EQ_.call(null,(24),cljs.core.count.call(null,p1__32344_SHARP_));
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("datetime","datetime","datetime/datetime",-1499276175),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("goog","date.DateTime","goog/date.DateTime",-1378306679,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__32345_SHARP_){
return (p1__32345_SHARP_ instanceof goog.date.DateTime);
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.seq], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("string","empty","string/empty",1490577811),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null)),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.empty_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("string","number","string/number",1741517557),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446),new cljs.core.Symbol("cuerdas.core","numeric?","cuerdas.core/numeric?",1925957499,null)),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446),new cljs.core.Symbol("cuerdas.core","numeric?","cuerdas.core/numeric?",1925957499,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446),cuerdas.core.numeric_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446),new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("user","last-name","user/last-name",-1699346595),new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446),new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("user","email-address","user/email-address",-902625587),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),/(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/,new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),/(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/,new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__32346_SHARP_){
return cljs.core.re_find.call(null,/(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/,p1__32346_SHARP_);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("user","roles","user/roles",130427029),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["user",null,"admin",null], null), null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["user",null,"admin",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["user",null,"admin",null], null), null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__32347){
return cljs.core.coll_QMARK_.call(null,G__32347);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["user",null,"admin",null], null), null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("user","password","user/password",430055242),new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446),new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("datetime","datetime","datetime/datetime",-1499276175)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Keyword("datetime","datetime","datetime/datetime",-1499276175),new cljs.core.Keyword("datetime","datetime","datetime/datetime",-1499276175),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("user","token","user/token",-1199473138),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("user","base","user/base",180369295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email-address","user/email-address",-902625587)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),new cljs.core.Keyword("user","last-name","user/last-name",-1699346595),new cljs.core.Keyword("user","roles","user/roles",130427029),new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),new cljs.core.Keyword("user","token","user/token",-1199473138)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32348){
return cljs.core.map_QMARK_.call(null,G__32348);
}),(function (G__32348){
return cljs.core.contains_QMARK_.call(null,G__32348,new cljs.core.Keyword("user","email-address","user/email-address",-902625587));
})], null),(function (G__32348){
return (cljs.core.map_QMARK_.call(null,G__32348)) && (cljs.core.contains_QMARK_.call(null,G__32348,new cljs.core.Keyword("user","email-address","user/email-address",-902625587)));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),new cljs.core.Keyword("user","last-name","user/last-name",-1699346595),new cljs.core.Keyword("user","roles","user/roles",130427029),new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),new cljs.core.Keyword("user","token","user/token",-1199473138)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email-address","user/email-address",-902625587)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email-address","user/email-address",-902625587)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email-address","user/email-address",-902625587)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),new cljs.core.Keyword("user","last-name","user/last-name",-1699346595),new cljs.core.Keyword("user","roles","user/roles",130427029),new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),new cljs.core.Keyword("user","token","user/token",-1199473138)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("user","email-address","user/email-address",-902625587)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),new cljs.core.Keyword("user","last-name","user/last-name",-1699346595),new cljs.core.Keyword("user","roles","user/roles",130427029),new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),new cljs.core.Keyword("user","token","user/token",-1199473138)], null)])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("user","full","user/full",424672121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),new cljs.core.Keyword("user","last-name","user/last-name",-1699346595),new cljs.core.Keyword("user","email-address","user/email-address",-902625587)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","roles","user/roles",130427029),new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),new cljs.core.Keyword("user","token","user/token",-1199473138),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32349){
return cljs.core.map_QMARK_.call(null,G__32349);
}),(function (G__32349){
return cljs.core.contains_QMARK_.call(null,G__32349,new cljs.core.Keyword("user","first-name","user/first-name",-1564894072));
}),(function (G__32349){
return cljs.core.contains_QMARK_.call(null,G__32349,new cljs.core.Keyword("user","last-name","user/last-name",-1699346595));
}),(function (G__32349){
return cljs.core.contains_QMARK_.call(null,G__32349,new cljs.core.Keyword("user","email-address","user/email-address",-902625587));
})], null),(function (G__32349){
return (cljs.core.map_QMARK_.call(null,G__32349)) && (cljs.core.contains_QMARK_.call(null,G__32349,new cljs.core.Keyword("user","first-name","user/first-name",-1564894072))) && (cljs.core.contains_QMARK_.call(null,G__32349,new cljs.core.Keyword("user","last-name","user/last-name",-1699346595))) && (cljs.core.contains_QMARK_.call(null,G__32349,new cljs.core.Keyword("user","email-address","user/email-address",-902625587)));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","roles","user/roles",130427029),new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),new cljs.core.Keyword("user","token","user/token",-1199473138),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),new cljs.core.Keyword("user","last-name","user/last-name",-1699346595),new cljs.core.Keyword("user","email-address","user/email-address",-902625587)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),new cljs.core.Keyword("user","last-name","user/last-name",-1699346595),new cljs.core.Keyword("user","email-address","user/email-address",-902625587)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","first-name","user/first-name",-1564894072),new cljs.core.Keyword("user","last-name","user/last-name",-1699346595),new cljs.core.Keyword("user","email-address","user/email-address",-902625587)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","roles","user/roles",130427029),new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),new cljs.core.Keyword("user","token","user/token",-1199473138),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("user","first-name","user/first-name",-1564894072))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("user","last-name","user/last-name",-1699346595))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("user","email-address","user/email-address",-902625587)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","roles","user/roles",130427029),new cljs.core.Keyword("user","expire-at","user/expire-at",1827708957),new cljs.core.Keyword("user","token","user/token",-1199473138),new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663)], null)])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("user","admin","user/admin",-1243761792),new cljs.core.Keyword("user","base","user/base",180369295),new cljs.core.Keyword("user","base","user/base",180369295));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("user","user","user/user",1360535597),new cljs.core.Keyword("user","full","user/full",424672121),new cljs.core.Keyword("user","full","user/full",424672121));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("user","with-password","user/with-password",-1146494685),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("user","base","user/base",180369295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","password","user/password",430055242)], null))),cljs.spec.alpha.merge_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","base","user/base",180369295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","password","user/password",430055242)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","base","user/base",180369295),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32350){
return cljs.core.map_QMARK_.call(null,G__32350);
}),(function (G__32350){
return cljs.core.contains_QMARK_.call(null,G__32350,new cljs.core.Keyword("user","password","user/password",430055242));
})], null),(function (G__32350){
return (cljs.core.map_QMARK_.call(null,G__32350)) && (cljs.core.contains_QMARK_.call(null,G__32350,new cljs.core.Keyword("user","password","user/password",430055242)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","password","user/password",430055242)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","password","user/password",430055242)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","password","user/password",430055242)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("user","password","user/password",430055242)))], null),null]))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645),new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446),new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756),new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446),new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("worker","email-address","worker/email-address",391671898),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32351#","p1__32351#",779378418,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),/(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/,new cljs.core.Symbol(null,"p1__32351#","p1__32351#",779378418,null)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),/(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/,new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__32351_SHARP_){
return cljs.core.re_find.call(null,/(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/,p1__32351_SHARP_);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("worker","phone-number","worker/phone-number",1303174430),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32352#","p1__32352#",-1292822662,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),/^[0-9]{9}$/,new cljs.core.Symbol(null,"p1__32352#","p1__32352#",-1292822662,null)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),/^[0-9]{9}$/,new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__32352_SHARP_){
return cljs.core.re_find.call(null,/^[0-9]{9}$/,p1__32352_SHARP_);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("worker","worker","worker/worker",-418761606),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645),new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worker","email-address","worker/email-address",391671898),new cljs.core.Keyword("worker","phone-number","worker/phone-number",1303174430)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32353){
return cljs.core.map_QMARK_.call(null,G__32353);
}),(function (G__32353){
return cljs.core.contains_QMARK_.call(null,G__32353,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
}),(function (G__32353){
return cljs.core.contains_QMARK_.call(null,G__32353,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
})], null),(function (G__32353){
return (cljs.core.map_QMARK_.call(null,G__32353)) && (cljs.core.contains_QMARK_.call(null,G__32353,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645))) && (cljs.core.contains_QMARK_.call(null,G__32353,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worker","email-address","worker/email-address",391671898),new cljs.core.Keyword("worker","phone-number","worker/phone-number",1303174430)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645),new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645),new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645),new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worker","email-address","worker/email-address",391671898),new cljs.core.Keyword("worker","phone-number","worker/phone-number",1303174430)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worker","email-address","worker/email-address",391671898),new cljs.core.Keyword("worker","phone-number","worker/phone-number",1303174430)], null)])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("timetable","workplace","timetable/workplace",-612483074),new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446),new cljs.core.Keyword("string","not-empty","string/not-empty",-748594446));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("timetable","datetime","timetable/datetime",248366539),new cljs.core.Keyword("datetime","datetime","datetime/datetime",-1499276175),new cljs.core.Keyword("datetime","datetime","datetime/datetime",-1499276175));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("timetable","worker","timetable/worker",620595419),new cljs.core.Keyword("worker","worker","worker/worker",-418761606),new cljs.core.Keyword("worker","worker","worker/worker",-418761606));

//# sourceMappingURL=specs.js.map?rel=1506023643278
