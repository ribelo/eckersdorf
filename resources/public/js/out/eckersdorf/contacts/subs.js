// Compiled by ClojureScript 1.9.946 {}
goog.provide('eckersdorf.contacts.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('eckersdorf.contacts.utils');
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("contacts","list","contacts/list",1198689742),(function (db,_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","ajax.get-contacts","contacts/ajax.get-contacts",-646194622)], null));

return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.sort_by.call(null,new cljs.core.Keyword("contact","last-name","contact/last-name",-1539952766),new cljs.core.Keyword("contacts","list","contacts/list",1198689742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contacts","email-address-list","contacts/email-address-list",1448975208),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","list","contacts/list",1198689742)], null),(function (contacts,_){
return cljs.core.mapv.call(null,contacts,new cljs.core.Keyword("contact","email-address","contact/email-address",-1363984584));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contacts","phone-number-list","contacts/phone-number-list",-1748850780),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","list","contacts/list",1198689742)], null),(function (contacts,_){
return cljs.core.mapv.call(null,contacts,new cljs.core.Keyword("contact","phone-number","contact/phone-number",-766137276));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contacts","company-list","contacts/company-list",1344004473),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","list","contacts/list",1198689742)], null),(function (contacts,_){
return cljs.core.mapv.call(null,contacts,new cljs.core.Keyword("contact","company","contact/company",1357719325));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contacts","title-list","contacts/title-list",-234759553),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","list","contacts/list",1198689742)], null),(function (contacts,_){
return cljs.core.mapv.call(null,contacts,new cljs.core.Keyword("contact","title","contact/title",-151426609));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contacts","first-name-list","contacts/first-name-list",1603030482),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","list","contacts/list",1198689742)], null),(function (contacts,_){
return cljs.core.mapv.call(null,contacts,new cljs.core.Keyword("contact","first-name","contact/first-name",-365071315));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contacts","second-name-list","contacts/second-name-list",746724757),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","list","contacts/list",1198689742)], null),(function (contacts,_){
return cljs.core.mapv.call(null,contacts,new cljs.core.Keyword("contact","second-name","contact/second-name",-482235146));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contacts","filtered","contacts/filtered",64153716),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","list","contacts/list",1198689742)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","search-form","contacts/search-form",1073014637)], null),(function (p__45293,_){
var vec__45294 = p__45293;
var contacts = cljs.core.nth.call(null,vec__45294,(0),null);
var search = cljs.core.nth.call(null,vec__45294,(1),null);
if(!(cljs.core.empty_QMARK_.call(null,search))){
return cljs.core.filter.call(null,((function (vec__45294,contacts,search){
return (function (p__45297){
var map__45298 = p__45297;
var map__45298__$1 = ((((!((map__45298 == null)))?((((map__45298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45298):map__45298);
var first_name = cljs.core.get.call(null,map__45298__$1,new cljs.core.Keyword("contact","first-name","contact/first-name",-365071315));
var last_name = cljs.core.get.call(null,map__45298__$1,new cljs.core.Keyword("contact","last-name","contact/last-name",-1539952766));
var phone_number = cljs.core.get.call(null,map__45298__$1,new cljs.core.Keyword("contact","phone-number","contact/phone-number",-766137276));
var email_address = cljs.core.get.call(null,map__45298__$1,new cljs.core.Keyword("contact","email-address","contact/email-address",-1363984584));
var company = cljs.core.get.call(null,map__45298__$1,new cljs.core.Keyword("contact","company","contact/company",1357719325));
var title = cljs.core.get.call(null,map__45298__$1,new cljs.core.Keyword("contact","title","contact/title",-151426609));
var or__30522__auto__ = (cljs.core.truth_(first_name)?cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?iu)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search)].join('')),first_name):null);
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
var or__30522__auto____$1 = (cljs.core.truth_(last_name)?cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?iu)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search)].join('')),last_name):null);
if(cljs.core.truth_(or__30522__auto____$1)){
return or__30522__auto____$1;
} else {
var or__30522__auto____$2 = (cljs.core.truth_(phone_number)?cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?iu)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search)].join('')),phone_number):null);
if(cljs.core.truth_(or__30522__auto____$2)){
return or__30522__auto____$2;
} else {
var or__30522__auto____$3 = (cljs.core.truth_(email_address)?cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?iu)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search)].join('')),email_address):null);
if(cljs.core.truth_(or__30522__auto____$3)){
return or__30522__auto____$3;
} else {
var or__30522__auto____$4 = (cljs.core.truth_(company)?cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?iu)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search)].join('')),company):null);
if(cljs.core.truth_(or__30522__auto____$4)){
return or__30522__auto____$4;
} else {
if(cljs.core.truth_(title)){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?iu)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search)].join('')),title);
} else {
return null;
}
}
}
}
}
}
});})(vec__45294,contacts,search))
,contacts);
} else {
return contacts;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contacts","by-id","contacts/by-id",2053205650),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts","list","contacts/list",1198689742)], null),(function (contacts,p__45301){
var vec__45302 = p__45301;
var _ = cljs.core.nth.call(null,vec__45302,(0),null);
var contact_id = cljs.core.nth.call(null,vec__45302,(1),null);
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__45302,_,contact_id){
return (function (p1__45300_SHARP_){
return cljs.core._EQ_.call(null,contact_id,new cljs.core.Keyword("mongo","object-id","mongo/object-id",-1464142663).cljs$core$IFn$_invoke$arity$1(p1__45300_SHARP_));
});})(vec__45302,_,contact_id))
,contacts));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contacts","show-dialog?","contacts/show-dialog?",679689273),(function (db,_){
return new cljs.core.Keyword("contacts","show-dialog?","contacts/show-dialog?",679689273).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contacts","contact-form","contacts/contact-form",1454622784),(function (db,_){
return new cljs.core.Keyword("contacts","contact-form","contacts/contact-form",1454622784).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contacts","search-form","contacts/search-form",1073014637),(function (db,_){
return new cljs.core.Keyword("contacts","search-form","contacts/search-form",1073014637).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contacts","temp-search-form","contacts/temp-search-form",-476585488),(function (db,_){
return new cljs.core.Keyword("contacts","temp-search-form","contacts/temp-search-form",-476585488).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1510602152875
