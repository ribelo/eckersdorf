// Compiled by ClojureScript 1.9.946 {}
goog.provide('eckersdorf.user.login.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('cuerdas.core');
goog.require('antizer.reagent');
goog.require('eckersdorf.flex');
eckersdorf.user.login.ui.login_form = (function eckersdorf$user$login$ui$login_form(){
return antizer.reagent.create_form.call(null,(function (){var invalid_password_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","invalid-password?","login/invalid-password?",-1029257272)], null));
return ((function (invalid_password_QMARK_){
return (function (){
var form = antizer.reagent.get_form.call(null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"email"], null),antizer.reagent.decorate_field.call(null,form,"email",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"true","true",-1114210334),new cljs.core.Keyword(null,"message","message",-406056002),"wprowad\u017A adres email"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (form,invalid_password_QMARK_){
return (function (e){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set-email-address","login/set-email-address",-1716802526),e.target.value], null));
});})(form,invalid_password_QMARK_))
], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"has\u0142o",new cljs.core.Keyword(null,"validate-status","validate-status",-612956038),((cljs.core.deref.call(null,invalid_password_QMARK_) === true)?new cljs.core.Keyword(null,"error","error",-978969032):null),new cljs.core.Keyword(null,"help","help",-439233446),((cljs.core.deref.call(null,invalid_password_QMARK_) === true)?"bl\u0119dne has\u0142o":null)], null),antizer.reagent.decorate_field.call(null,form,"blabla",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"true","true",-1114210334),new cljs.core.Keyword(null,"message","message",-406056002),"wprowad\u017A has\u0142o"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.input,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (form,invalid_password_QMARK_){
return (function (e){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set-password","login/set-password",-937455710),e.target.value], null));
});})(form,invalid_password_QMARK_))
], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (form,invalid_password_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","request-login","login/request-login",-6563777)], null));
});})(form,invalid_password_QMARK_))
], null),"zaloguj"], null)], null)], null)], null);
});
;})(invalid_password_QMARK_))
})());
});
eckersdorf.user.login.ui.login_page = (function eckersdorf$user$login$ui$login_page(){
var email_address = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","email-address","login/email-address",-870577041)], null));
var password = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","password","login/password",464605936)], null));
var valid_email_QMARK_ = reagent.core.atom.call(null,true);
var invalid_password_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","invalid-password?","login/invalid-password?",-1029257272)], null));
var show_password_QMARK_ = reagent.core.atom.call(null,false);
var disabled_login_button_QMARK_ = reagent.ratom.make_reaction.call(null,((function (email_address,password,valid_email_QMARK_,invalid_password_QMARK_,show_password_QMARK_){
return (function (){
return (cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,email_address))) || (cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,password)));
});})(email_address,password,valid_email_QMARK_,invalid_password_QMARK_,show_password_QMARK_))
);
return ((function (email_address,password,valid_email_QMARK_,invalid_password_QMARK_,show_password_QMARK_,disabled_login_button_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eckersdorf.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh"], null)], null),eckersdorf.user.login.ui.login_form.call(null)], null)], null)], null);
});
;})(email_address,password,valid_email_QMARK_,invalid_password_QMARK_,show_password_QMARK_,disabled_login_button_QMARK_))
});

//# sourceMappingURL=ui.js.map?rel=1510703502979
