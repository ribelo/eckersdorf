// Compiled by ClojureScript 1.9.908 {}
goog.provide('antizer.reagent');
goog.require('cljs.core');
goog.require('antizer.core');
goog.require('goog.object');
goog.require('reagent.core');
/**
 * Calls Form.create() decorator with the form to be created. form can be
 *  any hiccup form. Accepts the following options:
 * 
 *  :options - map of Form.create() options. Refer to: 
 *             https://ant.design/components/form/#Form.create(options) for
 *             details
 */
antizer.reagent.create_form = (function antizer$reagent$create_form(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41122 = arguments.length;
var i__31527__auto___41123 = (0);
while(true){
if((i__31527__auto___41123 < len__31526__auto___41122)){
args__31533__auto__.push((arguments[i__31527__auto___41123]));

var G__41124 = (i__31527__auto___41123 + (1));
i__31527__auto___41123 = G__41124;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__41119){
var map__41120 = p__41119;
var map__41120__$1 = ((((!((map__41120 == null)))?((((map__41120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41120):map__41120);
var options = cljs.core.get.call(null,map__41120__$1,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_element.call(null,goog.object.getValueByKeys(antd,"Form","create").call(null,cljs.core.clj__GT_js.call(null,antizer.core.map_keys__GT_camel_case.call(null,options))).call(null,reagent.core.reactify_component.call(null,form)));
});

antizer.reagent.create_form.cljs$lang$maxFixedArity = (1);

antizer.reagent.create_form.cljs$lang$applyTo = (function (seq41117){
var G__41118 = cljs.core.first.call(null,seq41117);
var seq41117__$1 = cljs.core.next.call(null,seq41117);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic(G__41118,seq41117__$1);
});

/**
 * Returns the `form` created by Form.create(). This function must be called
 * from within the `form` component
 */
antizer.reagent.get_form = (function antizer$reagent$get_form(){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,reagent.core.props.call(null,reagent.core.current_component.call(null)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
/**
 * Decorate a form field, corresponds to antd's getFieldDecorator() function
 * Arguments:
 * 
 * * form - the `form` object, obtained from `(get-form)`
 * * id - field identifier, supports nested fields format in string format
 * * options - the validation options for the field
 * * field - the input field element that the validation will be applied to
 * 
 * For more information about the validation options, please refer to: 
 * https://ant.design/components/form/#getFieldDecorator(id,-options)-parameters
 */
antizer.reagent.decorate_field = (function antizer$reagent$decorate_field(var_args){
var G__41126 = arguments.length;
switch (G__41126) {
case 3:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3 = (function (form,id,field){
return antizer.reagent.decorate_field.call(null,form,id,cljs.core.PersistentArrayMap.EMPTY,field);
});

antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4 = (function (form,id,options,field){
var field_decorator = new cljs.core.Keyword(null,"getFieldDecorator","getFieldDecorator",-1859085334).cljs$core$IFn$_invoke$arity$1(form);
var params = cljs.core.clj__GT_js.call(null,antizer.core.map_keys__GT_camel_case.call(null,options));
return field_decorator.call(null,id,params).call(null,reagent.core.as_element.call(null,field));
});

antizer.reagent.decorate_field.cljs$lang$maxFixedArity = 4;

antizer.reagent.get_field_decorator = (function antizer$reagent$get_field_decorator(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41154 = arguments.length;
var i__31527__auto___41155 = (0);
while(true){
if((i__31527__auto___41155 < len__31526__auto___41154)){
args__31533__auto__.push((arguments[i__31527__auto___41155]));

var G__41156 = (i__31527__auto___41155 + (1));
i__31527__auto___41155 = G__41156;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic = (function (form__41084__auto__,args__41085__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldDecorator").call(null,form__41084__auto__),args__41085__auto__);
});

antizer.reagent.get_field_decorator.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_decorator.cljs$lang$applyTo = (function (seq41128){
var G__41129 = cljs.core.first.call(null,seq41128);
var seq41128__$1 = cljs.core.next.call(null,seq41128);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic(G__41129,seq41128__$1);
});


antizer.reagent.get_field_error = (function antizer$reagent$get_field_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41157 = arguments.length;
var i__31527__auto___41158 = (0);
while(true){
if((i__31527__auto___41158 < len__31526__auto___41157)){
args__31533__auto__.push((arguments[i__31527__auto___41158]));

var G__41159 = (i__31527__auto___41158 + (1));
i__31527__auto___41158 = G__41159;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__41084__auto__,args__41085__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldError").call(null,form__41084__auto__),args__41085__auto__);
});

antizer.reagent.get_field_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_error.cljs$lang$applyTo = (function (seq41130){
var G__41131 = cljs.core.first.call(null,seq41130);
var seq41130__$1 = cljs.core.next.call(null,seq41130);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic(G__41131,seq41130__$1);
});


antizer.reagent.get_fields_error = (function antizer$reagent$get_fields_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41160 = arguments.length;
var i__31527__auto___41161 = (0);
while(true){
if((i__31527__auto___41161 < len__31526__auto___41160)){
args__31533__auto__.push((arguments[i__31527__auto___41161]));

var G__41162 = (i__31527__auto___41161 + (1));
i__31527__auto___41161 = G__41162;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__41084__auto__,args__41085__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsError").call(null,form__41084__auto__),args__41085__auto__);
});

antizer.reagent.get_fields_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_error.cljs$lang$applyTo = (function (seq41132){
var G__41133 = cljs.core.first.call(null,seq41132);
var seq41132__$1 = cljs.core.next.call(null,seq41132);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic(G__41133,seq41132__$1);
});


antizer.reagent.get_field_value = (function antizer$reagent$get_field_value(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41163 = arguments.length;
var i__31527__auto___41164 = (0);
while(true){
if((i__31527__auto___41164 < len__31526__auto___41163)){
args__31533__auto__.push((arguments[i__31527__auto___41164]));

var G__41165 = (i__31527__auto___41164 + (1));
i__31527__auto___41164 = G__41165;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__41084__auto__,args__41085__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldValue").call(null,form__41084__auto__),args__41085__auto__);
});

antizer.reagent.get_field_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_value.cljs$lang$applyTo = (function (seq41134){
var G__41135 = cljs.core.first.call(null,seq41134);
var seq41134__$1 = cljs.core.next.call(null,seq41134);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic(G__41135,seq41134__$1);
});


antizer.reagent.get_fields_value = (function antizer$reagent$get_fields_value(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41166 = arguments.length;
var i__31527__auto___41167 = (0);
while(true){
if((i__31527__auto___41167 < len__31526__auto___41166)){
args__31533__auto__.push((arguments[i__31527__auto___41167]));

var G__41168 = (i__31527__auto___41167 + (1));
i__31527__auto___41167 = G__41168;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__41084__auto__,args__41085__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsValue").call(null,form__41084__auto__),args__41085__auto__);
});

antizer.reagent.get_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_value.cljs$lang$applyTo = (function (seq41136){
var G__41137 = cljs.core.first.call(null,seq41136);
var seq41136__$1 = cljs.core.next.call(null,seq41136);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__41137,seq41136__$1);
});


antizer.reagent.is_field_touched = (function antizer$reagent$is_field_touched(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41169 = arguments.length;
var i__31527__auto___41170 = (0);
while(true){
if((i__31527__auto___41170 < len__31526__auto___41169)){
args__31533__auto__.push((arguments[i__31527__auto___41170]));

var G__41171 = (i__31527__auto___41170 + (1));
i__31527__auto___41170 = G__41171;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__41084__auto__,args__41085__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldTouched").call(null,form__41084__auto__),args__41085__auto__);
});

antizer.reagent.is_field_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_touched.cljs$lang$applyTo = (function (seq41138){
var G__41139 = cljs.core.first.call(null,seq41138);
var seq41138__$1 = cljs.core.next.call(null,seq41138);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic(G__41139,seq41138__$1);
});


antizer.reagent.is_fields_touched = (function antizer$reagent$is_fields_touched(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41172 = arguments.length;
var i__31527__auto___41173 = (0);
while(true){
if((i__31527__auto___41173 < len__31526__auto___41172)){
args__31533__auto__.push((arguments[i__31527__auto___41173]));

var G__41174 = (i__31527__auto___41173 + (1));
i__31527__auto___41173 = G__41174;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__41084__auto__,args__41085__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldsTouched").call(null,form__41084__auto__),args__41085__auto__);
});

antizer.reagent.is_fields_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_fields_touched.cljs$lang$applyTo = (function (seq41140){
var G__41141 = cljs.core.first.call(null,seq41140);
var seq41140__$1 = cljs.core.next.call(null,seq41140);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic(G__41141,seq41140__$1);
});


antizer.reagent.is_field_validating = (function antizer$reagent$is_field_validating(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41175 = arguments.length;
var i__31527__auto___41176 = (0);
while(true){
if((i__31527__auto___41176 < len__31526__auto___41175)){
args__31533__auto__.push((arguments[i__31527__auto___41176]));

var G__41177 = (i__31527__auto___41176 + (1));
i__31527__auto___41176 = G__41177;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic = (function (form__41084__auto__,args__41085__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldValidating").call(null,form__41084__auto__),args__41085__auto__);
});

antizer.reagent.is_field_validating.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_validating.cljs$lang$applyTo = (function (seq41142){
var G__41143 = cljs.core.first.call(null,seq41142);
var seq41142__$1 = cljs.core.next.call(null,seq41142);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic(G__41143,seq41142__$1);
});


antizer.reagent.reset_fields = (function antizer$reagent$reset_fields(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41178 = arguments.length;
var i__31527__auto___41179 = (0);
while(true){
if((i__31527__auto___41179 < len__31526__auto___41178)){
args__31533__auto__.push((arguments[i__31527__auto___41179]));

var G__41180 = (i__31527__auto___41179 + (1));
i__31527__auto___41179 = G__41180;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__41084__auto__,args__41085__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"resetFields").call(null,form__41084__auto__),args__41085__auto__);
});

antizer.reagent.reset_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.reset_fields.cljs$lang$applyTo = (function (seq41144){
var G__41145 = cljs.core.first.call(null,seq41144);
var seq41144__$1 = cljs.core.next.call(null,seq41144);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic(G__41145,seq41144__$1);
});


antizer.reagent.set_fields = (function antizer$reagent$set_fields(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41181 = arguments.length;
var i__31527__auto___41182 = (0);
while(true){
if((i__31527__auto___41182 < len__31526__auto___41181)){
args__31533__auto__.push((arguments[i__31527__auto___41182]));

var G__41183 = (i__31527__auto___41182 + (1));
i__31527__auto___41182 = G__41183;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__41084__auto__,args__41085__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFields").call(null,form__41084__auto__),args__41085__auto__);
});

antizer.reagent.set_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields.cljs$lang$applyTo = (function (seq41146){
var G__41147 = cljs.core.first.call(null,seq41146);
var seq41146__$1 = cljs.core.next.call(null,seq41146);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic(G__41147,seq41146__$1);
});


antizer.reagent.set_fields_value = (function antizer$reagent$set_fields_value(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41184 = arguments.length;
var i__31527__auto___41185 = (0);
while(true){
if((i__31527__auto___41185 < len__31526__auto___41184)){
args__31533__auto__.push((arguments[i__31527__auto___41185]));

var G__41186 = (i__31527__auto___41185 + (1));
i__31527__auto___41185 = G__41186;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__41084__auto__,args__41085__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFieldsValue").call(null,form__41084__auto__),args__41085__auto__);
});

antizer.reagent.set_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields_value.cljs$lang$applyTo = (function (seq41148){
var G__41149 = cljs.core.first.call(null,seq41148);
var seq41148__$1 = cljs.core.next.call(null,seq41148);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__41149,seq41148__$1);
});


antizer.reagent.validate_fields = (function antizer$reagent$validate_fields(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41187 = arguments.length;
var i__31527__auto___41188 = (0);
while(true){
if((i__31527__auto___41188 < len__31526__auto___41187)){
args__31533__auto__.push((arguments[i__31527__auto___41188]));

var G__41189 = (i__31527__auto___41188 + (1));
i__31527__auto___41188 = G__41189;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__41084__auto__,args__41085__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFields").call(null,form__41084__auto__),args__41085__auto__);
});

antizer.reagent.validate_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields.cljs$lang$applyTo = (function (seq41150){
var G__41151 = cljs.core.first.call(null,seq41150);
var seq41150__$1 = cljs.core.next.call(null,seq41150);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic(G__41151,seq41150__$1);
});


antizer.reagent.validate_fields_and_scroll = (function antizer$reagent$validate_fields_and_scroll(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41190 = arguments.length;
var i__31527__auto___41191 = (0);
while(true){
if((i__31527__auto___41191 < len__31526__auto___41190)){
args__31533__auto__.push((arguments[i__31527__auto___41191]));

var G__41192 = (i__31527__auto___41191 + (1));
i__31527__auto___41191 = G__41192;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic = (function (form__41084__auto__,args__41085__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFieldsAndScroll").call(null,form__41084__auto__),args__41085__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields_and_scroll.cljs$lang$applyTo = (function (seq41152){
var G__41153 = cljs.core.first.call(null,seq41152);
var seq41152__$1 = cljs.core.next.call(null,seq41152);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic(G__41153,seq41152__$1);
});

antizer.reagent.message_config = (function antizer$reagent$message_config(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41214 = arguments.length;
var i__31527__auto___41215 = (0);
while(true){
if((i__31527__auto___41215 < len__31526__auto___41214)){
args__31533__auto__.push((arguments[i__31527__auto___41215]));

var G__41216 = (i__31527__auto___41215 + (1));
i__31527__auto___41215 = G__41216;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.config",args__41080__auto__);
});

antizer.reagent.message_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_config.cljs$lang$applyTo = (function (seq41193){
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41193));
});


antizer.reagent.message_error = (function antizer$reagent$message_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41217 = arguments.length;
var i__31527__auto___41218 = (0);
while(true){
if((i__31527__auto___41218 < len__31526__auto___41217)){
args__31533__auto__.push((arguments[i__31527__auto___41218]));

var G__41219 = (i__31527__auto___41218 + (1));
i__31527__auto___41218 = G__41219;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.error",args__41080__auto__);
});

antizer.reagent.message_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_error.cljs$lang$applyTo = (function (seq41194){
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41194));
});


antizer.reagent.message_info = (function antizer$reagent$message_info(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41220 = arguments.length;
var i__31527__auto___41221 = (0);
while(true){
if((i__31527__auto___41221 < len__31526__auto___41220)){
args__31533__auto__.push((arguments[i__31527__auto___41221]));

var G__41222 = (i__31527__auto___41221 + (1));
i__31527__auto___41221 = G__41222;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.info",args__41080__auto__);
});

antizer.reagent.message_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_info.cljs$lang$applyTo = (function (seq41195){
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41195));
});


antizer.reagent.message_loading = (function antizer$reagent$message_loading(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41223 = arguments.length;
var i__31527__auto___41224 = (0);
while(true){
if((i__31527__auto___41224 < len__31526__auto___41223)){
args__31533__auto__.push((arguments[i__31527__auto___41224]));

var G__41225 = (i__31527__auto___41224 + (1));
i__31527__auto___41224 = G__41225;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.loading",args__41080__auto__);
});

antizer.reagent.message_loading.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_loading.cljs$lang$applyTo = (function (seq41196){
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41196));
});


antizer.reagent.message_success = (function antizer$reagent$message_success(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41226 = arguments.length;
var i__31527__auto___41227 = (0);
while(true){
if((i__31527__auto___41227 < len__31526__auto___41226)){
args__31533__auto__.push((arguments[i__31527__auto___41227]));

var G__41228 = (i__31527__auto___41227 + (1));
i__31527__auto___41227 = G__41228;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.success",args__41080__auto__);
});

antizer.reagent.message_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_success.cljs$lang$applyTo = (function (seq41197){
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41197));
});


antizer.reagent.message_warn = (function antizer$reagent$message_warn(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41229 = arguments.length;
var i__31527__auto___41230 = (0);
while(true){
if((i__31527__auto___41230 < len__31526__auto___41229)){
args__31533__auto__.push((arguments[i__31527__auto___41230]));

var G__41231 = (i__31527__auto___41230 + (1));
i__31527__auto___41230 = G__41231;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warn",args__41080__auto__);
});

antizer.reagent.message_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warn.cljs$lang$applyTo = (function (seq41198){
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41198));
});


antizer.reagent.message_warning = (function antizer$reagent$message_warning(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41232 = arguments.length;
var i__31527__auto___41233 = (0);
while(true){
if((i__31527__auto___41233 < len__31526__auto___41232)){
args__31533__auto__.push((arguments[i__31527__auto___41233]));

var G__41234 = (i__31527__auto___41233 + (1));
i__31527__auto___41233 = G__41234;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warning",args__41080__auto__);
});

antizer.reagent.message_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warning.cljs$lang$applyTo = (function (seq41199){
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41199));
});


antizer.reagent.modal_confirm = (function antizer$reagent$modal_confirm(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41235 = arguments.length;
var i__31527__auto___41236 = (0);
while(true){
if((i__31527__auto___41236 < len__31526__auto___41235)){
args__31533__auto__.push((arguments[i__31527__auto___41236]));

var G__41237 = (i__31527__auto___41236 + (1));
i__31527__auto___41236 = G__41237;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.confirm",args__41080__auto__);
});

antizer.reagent.modal_confirm.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_confirm.cljs$lang$applyTo = (function (seq41200){
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41200));
});


antizer.reagent.modal_error = (function antizer$reagent$modal_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41238 = arguments.length;
var i__31527__auto___41239 = (0);
while(true){
if((i__31527__auto___41239 < len__31526__auto___41238)){
args__31533__auto__.push((arguments[i__31527__auto___41239]));

var G__41240 = (i__31527__auto___41239 + (1));
i__31527__auto___41239 = G__41240;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.error",args__41080__auto__);
});

antizer.reagent.modal_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_error.cljs$lang$applyTo = (function (seq41201){
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41201));
});


antizer.reagent.modal_info = (function antizer$reagent$modal_info(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41241 = arguments.length;
var i__31527__auto___41242 = (0);
while(true){
if((i__31527__auto___41242 < len__31526__auto___41241)){
args__31533__auto__.push((arguments[i__31527__auto___41242]));

var G__41243 = (i__31527__auto___41242 + (1));
i__31527__auto___41242 = G__41243;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.info",args__41080__auto__);
});

antizer.reagent.modal_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_info.cljs$lang$applyTo = (function (seq41202){
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41202));
});


antizer.reagent.modal_success = (function antizer$reagent$modal_success(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41244 = arguments.length;
var i__31527__auto___41245 = (0);
while(true){
if((i__31527__auto___41245 < len__31526__auto___41244)){
args__31533__auto__.push((arguments[i__31527__auto___41245]));

var G__41246 = (i__31527__auto___41245 + (1));
i__31527__auto___41245 = G__41246;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.success",args__41080__auto__);
});

antizer.reagent.modal_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_success.cljs$lang$applyTo = (function (seq41203){
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41203));
});


antizer.reagent.modal_warning = (function antizer$reagent$modal_warning(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41247 = arguments.length;
var i__31527__auto___41248 = (0);
while(true){
if((i__31527__auto___41248 < len__31526__auto___41247)){
args__31533__auto__.push((arguments[i__31527__auto___41248]));

var G__41249 = (i__31527__auto___41248 + (1));
i__31527__auto___41248 = G__41249;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.warning",args__41080__auto__);
});

antizer.reagent.modal_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_warning.cljs$lang$applyTo = (function (seq41204){
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41204));
});


antizer.reagent.notification_close = (function antizer$reagent$notification_close(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41250 = arguments.length;
var i__31527__auto___41251 = (0);
while(true){
if((i__31527__auto___41251 < len__31526__auto___41250)){
args__31533__auto__.push((arguments[i__31527__auto___41251]));

var G__41252 = (i__31527__auto___41251 + (1));
i__31527__auto___41251 = G__41252;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.close",args__41080__auto__);
});

antizer.reagent.notification_close.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_close.cljs$lang$applyTo = (function (seq41205){
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41205));
});


antizer.reagent.notification_config = (function antizer$reagent$notification_config(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41253 = arguments.length;
var i__31527__auto___41254 = (0);
while(true){
if((i__31527__auto___41254 < len__31526__auto___41253)){
args__31533__auto__.push((arguments[i__31527__auto___41254]));

var G__41255 = (i__31527__auto___41254 + (1));
i__31527__auto___41254 = G__41255;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.config",args__41080__auto__);
});

antizer.reagent.notification_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_config.cljs$lang$applyTo = (function (seq41206){
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41206));
});


antizer.reagent.notification_destroy = (function antizer$reagent$notification_destroy(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41256 = arguments.length;
var i__31527__auto___41257 = (0);
while(true){
if((i__31527__auto___41257 < len__31526__auto___41256)){
args__31533__auto__.push((arguments[i__31527__auto___41257]));

var G__41258 = (i__31527__auto___41257 + (1));
i__31527__auto___41257 = G__41258;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.destroy",args__41080__auto__);
});

antizer.reagent.notification_destroy.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_destroy.cljs$lang$applyTo = (function (seq41207){
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41207));
});


antizer.reagent.notification_error = (function antizer$reagent$notification_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41259 = arguments.length;
var i__31527__auto___41260 = (0);
while(true){
if((i__31527__auto___41260 < len__31526__auto___41259)){
args__31533__auto__.push((arguments[i__31527__auto___41260]));

var G__41261 = (i__31527__auto___41260 + (1));
i__31527__auto___41260 = G__41261;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.error",args__41080__auto__);
});

antizer.reagent.notification_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_error.cljs$lang$applyTo = (function (seq41208){
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41208));
});


antizer.reagent.notification_info = (function antizer$reagent$notification_info(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41262 = arguments.length;
var i__31527__auto___41263 = (0);
while(true){
if((i__31527__auto___41263 < len__31526__auto___41262)){
args__31533__auto__.push((arguments[i__31527__auto___41263]));

var G__41264 = (i__31527__auto___41263 + (1));
i__31527__auto___41263 = G__41264;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.info",args__41080__auto__);
});

antizer.reagent.notification_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_info.cljs$lang$applyTo = (function (seq41209){
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41209));
});


antizer.reagent.notification_open = (function antizer$reagent$notification_open(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41265 = arguments.length;
var i__31527__auto___41266 = (0);
while(true){
if((i__31527__auto___41266 < len__31526__auto___41265)){
args__31533__auto__.push((arguments[i__31527__auto___41266]));

var G__41267 = (i__31527__auto___41266 + (1));
i__31527__auto___41266 = G__41267;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.open",args__41080__auto__);
});

antizer.reagent.notification_open.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_open.cljs$lang$applyTo = (function (seq41210){
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41210));
});


antizer.reagent.notification_success = (function antizer$reagent$notification_success(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41268 = arguments.length;
var i__31527__auto___41269 = (0);
while(true){
if((i__31527__auto___41269 < len__31526__auto___41268)){
args__31533__auto__.push((arguments[i__31527__auto___41269]));

var G__41270 = (i__31527__auto___41269 + (1));
i__31527__auto___41269 = G__41270;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.success",args__41080__auto__);
});

antizer.reagent.notification_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_success.cljs$lang$applyTo = (function (seq41211){
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41211));
});


antizer.reagent.notification_warn = (function antizer$reagent$notification_warn(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41271 = arguments.length;
var i__31527__auto___41272 = (0);
while(true){
if((i__31527__auto___41272 < len__31526__auto___41271)){
args__31533__auto__.push((arguments[i__31527__auto___41272]));

var G__41273 = (i__31527__auto___41272 + (1));
i__31527__auto___41272 = G__41273;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warn",args__41080__auto__);
});

antizer.reagent.notification_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warn.cljs$lang$applyTo = (function (seq41212){
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41212));
});


antizer.reagent.notification_warning = (function antizer$reagent$notification_warning(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41274 = arguments.length;
var i__31527__auto___41275 = (0);
while(true){
if((i__31527__auto___41275 < len__31526__auto___41274)){
args__31533__auto__.push((arguments[i__31527__auto___41275]));

var G__41276 = (i__31527__auto___41275 + (1));
i__31527__auto___41275 = G__41276;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__41080__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warning",args__41080__auto__);
});

antizer.reagent.notification_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warning.cljs$lang$applyTo = (function (seq41213){
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41213));
});

antizer.reagent.locales = (function antizer$reagent$locales(prop__41082__auto__){
return antizer.core.get_prop.call(null,"locales",prop__41082__auto__);
});
antizer.reagent.affix = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Affix"], null)));

antizer.reagent.alert = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Alert"], null)));

antizer.reagent.anchor = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor"], null)));

antizer.reagent.anchor_link = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor","Link"], null)));

antizer.reagent.auto_complete = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AutoComplete"], null)));

antizer.reagent.avatar = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Avatar"], null)));

antizer.reagent.back_top = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BackTop"], null)));

antizer.reagent.badge = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Badge"], null)));

antizer.reagent.breadcrumb = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb"], null)));

antizer.reagent.breadcrumb_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb","Item"], null)));

antizer.reagent.button = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button"], null)));

antizer.reagent.button_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button","Group"], null)));

antizer.reagent.calendar = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calendar"], null)));

antizer.reagent.card = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Card"], null)));

antizer.reagent.carousel = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Carousel"], null)));

antizer.reagent.cascader = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cascader"], null)));

antizer.reagent.checkbox = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Checkbox"], null)));

antizer.reagent.checkbox_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Checkbox","Group"], null)));

antizer.reagent.col = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Col"], null)));

antizer.reagent.collapse = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collapse"], null)));

antizer.reagent.collapse_panel = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collapse","Panel"], null)));

antizer.reagent.date_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker"], null)));

antizer.reagent.date_picker_month_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","MonthPicker"], null)));

antizer.reagent.date_picker_range_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","RangePicker"], null)));

antizer.reagent.dropdown = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropdown"], null)));

antizer.reagent.dropdown_button = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropdown","Button"], null)));

antizer.reagent.form = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form"], null)));

antizer.reagent.form_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form","Item"], null)));

antizer.reagent.icon = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Icon"], null)));

antizer.reagent.input = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input"], null)));

antizer.reagent.input_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","Group"], null)));

antizer.reagent.input_search = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","Search"], null)));

antizer.reagent.input_text_area = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","TextArea"], null)));

antizer.reagent.input_number = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["InputNumber"], null)));

antizer.reagent.layout = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout"], null)));

antizer.reagent.layout_content = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Content"], null)));

antizer.reagent.layout_footer = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Footer"], null)));

antizer.reagent.layout_header = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Header"], null)));

antizer.reagent.layout_sider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Sider"], null)));

antizer.reagent.locale_provider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LocaleProvider"], null)));

antizer.reagent.mention = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mention"], null)));

antizer.reagent.menu = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu"], null)));

antizer.reagent.menu_divider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","Divider"], null)));

antizer.reagent.menu_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","Item"], null)));

antizer.reagent.menu_item_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","ItemGroup"], null)));

antizer.reagent.menu_sub_menu = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","SubMenu"], null)));

antizer.reagent.modal = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Modal"], null)));

antizer.reagent.pagination = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pagination"], null)));

antizer.reagent.popconfirm = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Popconfirm"], null)));

antizer.reagent.popover = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Popover"], null)));

antizer.reagent.progress = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Progress"], null)));

antizer.reagent.radio = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio"], null)));

antizer.reagent.radio_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio","Group"], null)));

antizer.reagent.rate = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rate"], null)));

antizer.reagent.row = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Row"], null)));

antizer.reagent.select = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select"], null)));

antizer.reagent.select_option = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","Option"], null)));

antizer.reagent.select_opt_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","OptGroup"], null)));

antizer.reagent.slider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Slider"], null)));

antizer.reagent.spin = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Spin"], null)));

antizer.reagent.steps = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps"], null)));

antizer.reagent.steps_step = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps","Step"], null)));

antizer.reagent.switch$ = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Switch"], null)));

antizer.reagent.table = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table"], null)));

antizer.reagent.table_column = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table","Column"], null)));

antizer.reagent.tabs = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tabs"], null)));

antizer.reagent.tabs_tab_pane = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tabs","TabPane"], null)));

antizer.reagent.tag = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag"], null)));

antizer.reagent.tag_checkable_tag = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag","CheckableTag"], null)));

antizer.reagent.time_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TimePicker"], null)));

antizer.reagent.timeline = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Timeline"], null)));

antizer.reagent.timeline_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Timeline","Item"], null)));

antizer.reagent.tooltip = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tooltip"], null)));

antizer.reagent.transfer = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transfer"], null)));

antizer.reagent.tree = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tree"], null)));

antizer.reagent.tree_select = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TreeSelect"], null)));

antizer.reagent.tree_select_tree_node = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TreeSelect","TreeNode"], null)));

antizer.reagent.tree_tree_node = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tree","TreeNode"], null)));

antizer.reagent.upload = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Upload"], null)));

//# sourceMappingURL=reagent.js.map?rel=1508862157949
