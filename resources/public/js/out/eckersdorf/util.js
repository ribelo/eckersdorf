// Compiled by ClojureScript 1.9.908 {}
goog.provide('eckersdorf.util');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cuerdas.core');
goog.require('eckersdorf.flex');
goog.require('antizer.reagent');
eckersdorf.util.px = (function eckersdorf$util$px(num){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.long$.call(null,num)),"px"].join('');
});
eckersdorf.util.valid_email_address_QMARK_ = (function eckersdorf$util$valid_email_address_QMARK_(text){
return !((cljs.core.re_find.call(null,/(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/,text) == null));
});
eckersdorf.util.valid_phone_number_QMARK_ = (function eckersdorf$util$valid_phone_number_QMARK_(text){
return !((cljs.core.re_find.call(null,/^(?:[0+]48)?\d{9}$/,text) == null));
});
eckersdorf.util.valid_password = (function eckersdorf$util$valid_password(text){
return cljs.core.re_find.call(null,/(?=^.{8,}$)^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,text);
});
eckersdorf.util.ant_form_item = (function eckersdorf$util$ant_form_item(form,name,children){
return null;
});

//# sourceMappingURL=util.js.map?rel=1507140160519
