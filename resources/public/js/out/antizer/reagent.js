// Compiled by ClojureScript 1.9.946 {}
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
var args__31808__auto__ = [];
var len__31801__auto___38118 = arguments.length;
var i__31802__auto___38119 = (0);
while(true){
if((i__31802__auto___38119 < len__31801__auto___38118)){
args__31808__auto__.push((arguments[i__31802__auto___38119]));

var G__38120 = (i__31802__auto___38119 + (1));
i__31802__auto___38119 = G__38120;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__38115){
var map__38116 = p__38115;
var map__38116__$1 = ((((!((map__38116 == null)))?((((map__38116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38116):map__38116);
var options = cljs.core.get.call(null,map__38116__$1,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_element.call(null,goog.object.getValueByKeys(antd,"Form","create").call(null,cljs.core.clj__GT_js.call(null,antizer.core.map_keys__GT_camel_case.call(null,options))).call(null,reagent.core.reactify_component.call(null,form)));
});

antizer.reagent.create_form.cljs$lang$maxFixedArity = (1);

antizer.reagent.create_form.cljs$lang$applyTo = (function (seq38113){
var G__38114 = cljs.core.first.call(null,seq38113);
var seq38113__$1 = cljs.core.next.call(null,seq38113);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic(G__38114,seq38113__$1);
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
var G__38122 = arguments.length;
switch (G__38122) {
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
var args__31808__auto__ = [];
var len__31801__auto___38150 = arguments.length;
var i__31802__auto___38151 = (0);
while(true){
if((i__31802__auto___38151 < len__31801__auto___38150)){
args__31808__auto__.push((arguments[i__31802__auto___38151]));

var G__38152 = (i__31802__auto___38151 + (1));
i__31802__auto___38151 = G__38152;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic = (function (form__38080__auto__,args__38081__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldDecorator").call(null,form__38080__auto__),args__38081__auto__);
});

antizer.reagent.get_field_decorator.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_decorator.cljs$lang$applyTo = (function (seq38124){
var G__38125 = cljs.core.first.call(null,seq38124);
var seq38124__$1 = cljs.core.next.call(null,seq38124);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic(G__38125,seq38124__$1);
});


antizer.reagent.get_field_error = (function antizer$reagent$get_field_error(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38153 = arguments.length;
var i__31802__auto___38154 = (0);
while(true){
if((i__31802__auto___38154 < len__31801__auto___38153)){
args__31808__auto__.push((arguments[i__31802__auto___38154]));

var G__38155 = (i__31802__auto___38154 + (1));
i__31802__auto___38154 = G__38155;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__38080__auto__,args__38081__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldError").call(null,form__38080__auto__),args__38081__auto__);
});

antizer.reagent.get_field_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_error.cljs$lang$applyTo = (function (seq38126){
var G__38127 = cljs.core.first.call(null,seq38126);
var seq38126__$1 = cljs.core.next.call(null,seq38126);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic(G__38127,seq38126__$1);
});


antizer.reagent.get_fields_error = (function antizer$reagent$get_fields_error(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38156 = arguments.length;
var i__31802__auto___38157 = (0);
while(true){
if((i__31802__auto___38157 < len__31801__auto___38156)){
args__31808__auto__.push((arguments[i__31802__auto___38157]));

var G__38158 = (i__31802__auto___38157 + (1));
i__31802__auto___38157 = G__38158;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__38080__auto__,args__38081__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsError").call(null,form__38080__auto__),args__38081__auto__);
});

antizer.reagent.get_fields_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_error.cljs$lang$applyTo = (function (seq38128){
var G__38129 = cljs.core.first.call(null,seq38128);
var seq38128__$1 = cljs.core.next.call(null,seq38128);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic(G__38129,seq38128__$1);
});


antizer.reagent.get_field_value = (function antizer$reagent$get_field_value(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38159 = arguments.length;
var i__31802__auto___38160 = (0);
while(true){
if((i__31802__auto___38160 < len__31801__auto___38159)){
args__31808__auto__.push((arguments[i__31802__auto___38160]));

var G__38161 = (i__31802__auto___38160 + (1));
i__31802__auto___38160 = G__38161;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__38080__auto__,args__38081__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldValue").call(null,form__38080__auto__),args__38081__auto__);
});

antizer.reagent.get_field_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_value.cljs$lang$applyTo = (function (seq38130){
var G__38131 = cljs.core.first.call(null,seq38130);
var seq38130__$1 = cljs.core.next.call(null,seq38130);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic(G__38131,seq38130__$1);
});


antizer.reagent.get_fields_value = (function antizer$reagent$get_fields_value(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38162 = arguments.length;
var i__31802__auto___38163 = (0);
while(true){
if((i__31802__auto___38163 < len__31801__auto___38162)){
args__31808__auto__.push((arguments[i__31802__auto___38163]));

var G__38164 = (i__31802__auto___38163 + (1));
i__31802__auto___38163 = G__38164;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__38080__auto__,args__38081__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsValue").call(null,form__38080__auto__),args__38081__auto__);
});

antizer.reagent.get_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_value.cljs$lang$applyTo = (function (seq38132){
var G__38133 = cljs.core.first.call(null,seq38132);
var seq38132__$1 = cljs.core.next.call(null,seq38132);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__38133,seq38132__$1);
});


antizer.reagent.is_field_touched = (function antizer$reagent$is_field_touched(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38165 = arguments.length;
var i__31802__auto___38166 = (0);
while(true){
if((i__31802__auto___38166 < len__31801__auto___38165)){
args__31808__auto__.push((arguments[i__31802__auto___38166]));

var G__38167 = (i__31802__auto___38166 + (1));
i__31802__auto___38166 = G__38167;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__38080__auto__,args__38081__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldTouched").call(null,form__38080__auto__),args__38081__auto__);
});

antizer.reagent.is_field_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_touched.cljs$lang$applyTo = (function (seq38134){
var G__38135 = cljs.core.first.call(null,seq38134);
var seq38134__$1 = cljs.core.next.call(null,seq38134);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic(G__38135,seq38134__$1);
});


antizer.reagent.is_fields_touched = (function antizer$reagent$is_fields_touched(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38168 = arguments.length;
var i__31802__auto___38169 = (0);
while(true){
if((i__31802__auto___38169 < len__31801__auto___38168)){
args__31808__auto__.push((arguments[i__31802__auto___38169]));

var G__38170 = (i__31802__auto___38169 + (1));
i__31802__auto___38169 = G__38170;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__38080__auto__,args__38081__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldsTouched").call(null,form__38080__auto__),args__38081__auto__);
});

antizer.reagent.is_fields_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_fields_touched.cljs$lang$applyTo = (function (seq38136){
var G__38137 = cljs.core.first.call(null,seq38136);
var seq38136__$1 = cljs.core.next.call(null,seq38136);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic(G__38137,seq38136__$1);
});


antizer.reagent.is_field_validating = (function antizer$reagent$is_field_validating(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38171 = arguments.length;
var i__31802__auto___38172 = (0);
while(true){
if((i__31802__auto___38172 < len__31801__auto___38171)){
args__31808__auto__.push((arguments[i__31802__auto___38172]));

var G__38173 = (i__31802__auto___38172 + (1));
i__31802__auto___38172 = G__38173;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic = (function (form__38080__auto__,args__38081__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldValidating").call(null,form__38080__auto__),args__38081__auto__);
});

antizer.reagent.is_field_validating.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_validating.cljs$lang$applyTo = (function (seq38138){
var G__38139 = cljs.core.first.call(null,seq38138);
var seq38138__$1 = cljs.core.next.call(null,seq38138);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic(G__38139,seq38138__$1);
});


antizer.reagent.reset_fields = (function antizer$reagent$reset_fields(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38174 = arguments.length;
var i__31802__auto___38175 = (0);
while(true){
if((i__31802__auto___38175 < len__31801__auto___38174)){
args__31808__auto__.push((arguments[i__31802__auto___38175]));

var G__38176 = (i__31802__auto___38175 + (1));
i__31802__auto___38175 = G__38176;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__38080__auto__,args__38081__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"resetFields").call(null,form__38080__auto__),args__38081__auto__);
});

antizer.reagent.reset_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.reset_fields.cljs$lang$applyTo = (function (seq38140){
var G__38141 = cljs.core.first.call(null,seq38140);
var seq38140__$1 = cljs.core.next.call(null,seq38140);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic(G__38141,seq38140__$1);
});


antizer.reagent.set_fields = (function antizer$reagent$set_fields(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38177 = arguments.length;
var i__31802__auto___38178 = (0);
while(true){
if((i__31802__auto___38178 < len__31801__auto___38177)){
args__31808__auto__.push((arguments[i__31802__auto___38178]));

var G__38179 = (i__31802__auto___38178 + (1));
i__31802__auto___38178 = G__38179;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__38080__auto__,args__38081__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFields").call(null,form__38080__auto__),args__38081__auto__);
});

antizer.reagent.set_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields.cljs$lang$applyTo = (function (seq38142){
var G__38143 = cljs.core.first.call(null,seq38142);
var seq38142__$1 = cljs.core.next.call(null,seq38142);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic(G__38143,seq38142__$1);
});


antizer.reagent.set_fields_value = (function antizer$reagent$set_fields_value(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38180 = arguments.length;
var i__31802__auto___38181 = (0);
while(true){
if((i__31802__auto___38181 < len__31801__auto___38180)){
args__31808__auto__.push((arguments[i__31802__auto___38181]));

var G__38182 = (i__31802__auto___38181 + (1));
i__31802__auto___38181 = G__38182;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__38080__auto__,args__38081__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFieldsValue").call(null,form__38080__auto__),args__38081__auto__);
});

antizer.reagent.set_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields_value.cljs$lang$applyTo = (function (seq38144){
var G__38145 = cljs.core.first.call(null,seq38144);
var seq38144__$1 = cljs.core.next.call(null,seq38144);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__38145,seq38144__$1);
});


antizer.reagent.validate_fields = (function antizer$reagent$validate_fields(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38183 = arguments.length;
var i__31802__auto___38184 = (0);
while(true){
if((i__31802__auto___38184 < len__31801__auto___38183)){
args__31808__auto__.push((arguments[i__31802__auto___38184]));

var G__38185 = (i__31802__auto___38184 + (1));
i__31802__auto___38184 = G__38185;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__38080__auto__,args__38081__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFields").call(null,form__38080__auto__),args__38081__auto__);
});

antizer.reagent.validate_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields.cljs$lang$applyTo = (function (seq38146){
var G__38147 = cljs.core.first.call(null,seq38146);
var seq38146__$1 = cljs.core.next.call(null,seq38146);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic(G__38147,seq38146__$1);
});


antizer.reagent.validate_fields_and_scroll = (function antizer$reagent$validate_fields_and_scroll(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38186 = arguments.length;
var i__31802__auto___38187 = (0);
while(true){
if((i__31802__auto___38187 < len__31801__auto___38186)){
args__31808__auto__.push((arguments[i__31802__auto___38187]));

var G__38188 = (i__31802__auto___38187 + (1));
i__31802__auto___38187 = G__38188;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((1) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31809__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic = (function (form__38080__auto__,args__38081__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFieldsAndScroll").call(null,form__38080__auto__),args__38081__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields_and_scroll.cljs$lang$applyTo = (function (seq38148){
var G__38149 = cljs.core.first.call(null,seq38148);
var seq38148__$1 = cljs.core.next.call(null,seq38148);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic(G__38149,seq38148__$1);
});

antizer.reagent.message_config = (function antizer$reagent$message_config(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38210 = arguments.length;
var i__31802__auto___38211 = (0);
while(true){
if((i__31802__auto___38211 < len__31801__auto___38210)){
args__31808__auto__.push((arguments[i__31802__auto___38211]));

var G__38212 = (i__31802__auto___38211 + (1));
i__31802__auto___38211 = G__38212;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.config",args__38076__auto__);
});

antizer.reagent.message_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_config.cljs$lang$applyTo = (function (seq38189){
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38189));
});


antizer.reagent.message_error = (function antizer$reagent$message_error(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38213 = arguments.length;
var i__31802__auto___38214 = (0);
while(true){
if((i__31802__auto___38214 < len__31801__auto___38213)){
args__31808__auto__.push((arguments[i__31802__auto___38214]));

var G__38215 = (i__31802__auto___38214 + (1));
i__31802__auto___38214 = G__38215;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.error",args__38076__auto__);
});

antizer.reagent.message_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_error.cljs$lang$applyTo = (function (seq38190){
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38190));
});


antizer.reagent.message_info = (function antizer$reagent$message_info(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38216 = arguments.length;
var i__31802__auto___38217 = (0);
while(true){
if((i__31802__auto___38217 < len__31801__auto___38216)){
args__31808__auto__.push((arguments[i__31802__auto___38217]));

var G__38218 = (i__31802__auto___38217 + (1));
i__31802__auto___38217 = G__38218;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.info",args__38076__auto__);
});

antizer.reagent.message_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_info.cljs$lang$applyTo = (function (seq38191){
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38191));
});


antizer.reagent.message_loading = (function antizer$reagent$message_loading(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38219 = arguments.length;
var i__31802__auto___38220 = (0);
while(true){
if((i__31802__auto___38220 < len__31801__auto___38219)){
args__31808__auto__.push((arguments[i__31802__auto___38220]));

var G__38221 = (i__31802__auto___38220 + (1));
i__31802__auto___38220 = G__38221;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.loading",args__38076__auto__);
});

antizer.reagent.message_loading.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_loading.cljs$lang$applyTo = (function (seq38192){
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38192));
});


antizer.reagent.message_success = (function antizer$reagent$message_success(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38222 = arguments.length;
var i__31802__auto___38223 = (0);
while(true){
if((i__31802__auto___38223 < len__31801__auto___38222)){
args__31808__auto__.push((arguments[i__31802__auto___38223]));

var G__38224 = (i__31802__auto___38223 + (1));
i__31802__auto___38223 = G__38224;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.success",args__38076__auto__);
});

antizer.reagent.message_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_success.cljs$lang$applyTo = (function (seq38193){
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38193));
});


antizer.reagent.message_warn = (function antizer$reagent$message_warn(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38225 = arguments.length;
var i__31802__auto___38226 = (0);
while(true){
if((i__31802__auto___38226 < len__31801__auto___38225)){
args__31808__auto__.push((arguments[i__31802__auto___38226]));

var G__38227 = (i__31802__auto___38226 + (1));
i__31802__auto___38226 = G__38227;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warn",args__38076__auto__);
});

antizer.reagent.message_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warn.cljs$lang$applyTo = (function (seq38194){
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38194));
});


antizer.reagent.message_warning = (function antizer$reagent$message_warning(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38228 = arguments.length;
var i__31802__auto___38229 = (0);
while(true){
if((i__31802__auto___38229 < len__31801__auto___38228)){
args__31808__auto__.push((arguments[i__31802__auto___38229]));

var G__38230 = (i__31802__auto___38229 + (1));
i__31802__auto___38229 = G__38230;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warning",args__38076__auto__);
});

antizer.reagent.message_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warning.cljs$lang$applyTo = (function (seq38195){
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38195));
});


antizer.reagent.modal_confirm = (function antizer$reagent$modal_confirm(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38231 = arguments.length;
var i__31802__auto___38232 = (0);
while(true){
if((i__31802__auto___38232 < len__31801__auto___38231)){
args__31808__auto__.push((arguments[i__31802__auto___38232]));

var G__38233 = (i__31802__auto___38232 + (1));
i__31802__auto___38232 = G__38233;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.confirm",args__38076__auto__);
});

antizer.reagent.modal_confirm.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_confirm.cljs$lang$applyTo = (function (seq38196){
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38196));
});


antizer.reagent.modal_error = (function antizer$reagent$modal_error(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38234 = arguments.length;
var i__31802__auto___38235 = (0);
while(true){
if((i__31802__auto___38235 < len__31801__auto___38234)){
args__31808__auto__.push((arguments[i__31802__auto___38235]));

var G__38236 = (i__31802__auto___38235 + (1));
i__31802__auto___38235 = G__38236;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.error",args__38076__auto__);
});

antizer.reagent.modal_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_error.cljs$lang$applyTo = (function (seq38197){
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38197));
});


antizer.reagent.modal_info = (function antizer$reagent$modal_info(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38237 = arguments.length;
var i__31802__auto___38238 = (0);
while(true){
if((i__31802__auto___38238 < len__31801__auto___38237)){
args__31808__auto__.push((arguments[i__31802__auto___38238]));

var G__38239 = (i__31802__auto___38238 + (1));
i__31802__auto___38238 = G__38239;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.info",args__38076__auto__);
});

antizer.reagent.modal_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_info.cljs$lang$applyTo = (function (seq38198){
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38198));
});


antizer.reagent.modal_success = (function antizer$reagent$modal_success(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38240 = arguments.length;
var i__31802__auto___38241 = (0);
while(true){
if((i__31802__auto___38241 < len__31801__auto___38240)){
args__31808__auto__.push((arguments[i__31802__auto___38241]));

var G__38242 = (i__31802__auto___38241 + (1));
i__31802__auto___38241 = G__38242;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.success",args__38076__auto__);
});

antizer.reagent.modal_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_success.cljs$lang$applyTo = (function (seq38199){
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38199));
});


antizer.reagent.modal_warning = (function antizer$reagent$modal_warning(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38243 = arguments.length;
var i__31802__auto___38244 = (0);
while(true){
if((i__31802__auto___38244 < len__31801__auto___38243)){
args__31808__auto__.push((arguments[i__31802__auto___38244]));

var G__38245 = (i__31802__auto___38244 + (1));
i__31802__auto___38244 = G__38245;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.warning",args__38076__auto__);
});

antizer.reagent.modal_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_warning.cljs$lang$applyTo = (function (seq38200){
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38200));
});


antizer.reagent.notification_close = (function antizer$reagent$notification_close(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38246 = arguments.length;
var i__31802__auto___38247 = (0);
while(true){
if((i__31802__auto___38247 < len__31801__auto___38246)){
args__31808__auto__.push((arguments[i__31802__auto___38247]));

var G__38248 = (i__31802__auto___38247 + (1));
i__31802__auto___38247 = G__38248;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.close",args__38076__auto__);
});

antizer.reagent.notification_close.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_close.cljs$lang$applyTo = (function (seq38201){
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38201));
});


antizer.reagent.notification_config = (function antizer$reagent$notification_config(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38249 = arguments.length;
var i__31802__auto___38250 = (0);
while(true){
if((i__31802__auto___38250 < len__31801__auto___38249)){
args__31808__auto__.push((arguments[i__31802__auto___38250]));

var G__38251 = (i__31802__auto___38250 + (1));
i__31802__auto___38250 = G__38251;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.config",args__38076__auto__);
});

antizer.reagent.notification_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_config.cljs$lang$applyTo = (function (seq38202){
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38202));
});


antizer.reagent.notification_destroy = (function antizer$reagent$notification_destroy(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38252 = arguments.length;
var i__31802__auto___38253 = (0);
while(true){
if((i__31802__auto___38253 < len__31801__auto___38252)){
args__31808__auto__.push((arguments[i__31802__auto___38253]));

var G__38254 = (i__31802__auto___38253 + (1));
i__31802__auto___38253 = G__38254;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.destroy",args__38076__auto__);
});

antizer.reagent.notification_destroy.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_destroy.cljs$lang$applyTo = (function (seq38203){
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38203));
});


antizer.reagent.notification_error = (function antizer$reagent$notification_error(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38255 = arguments.length;
var i__31802__auto___38256 = (0);
while(true){
if((i__31802__auto___38256 < len__31801__auto___38255)){
args__31808__auto__.push((arguments[i__31802__auto___38256]));

var G__38257 = (i__31802__auto___38256 + (1));
i__31802__auto___38256 = G__38257;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.error",args__38076__auto__);
});

antizer.reagent.notification_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_error.cljs$lang$applyTo = (function (seq38204){
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38204));
});


antizer.reagent.notification_info = (function antizer$reagent$notification_info(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38258 = arguments.length;
var i__31802__auto___38259 = (0);
while(true){
if((i__31802__auto___38259 < len__31801__auto___38258)){
args__31808__auto__.push((arguments[i__31802__auto___38259]));

var G__38260 = (i__31802__auto___38259 + (1));
i__31802__auto___38259 = G__38260;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.info",args__38076__auto__);
});

antizer.reagent.notification_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_info.cljs$lang$applyTo = (function (seq38205){
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38205));
});


antizer.reagent.notification_open = (function antizer$reagent$notification_open(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38261 = arguments.length;
var i__31802__auto___38262 = (0);
while(true){
if((i__31802__auto___38262 < len__31801__auto___38261)){
args__31808__auto__.push((arguments[i__31802__auto___38262]));

var G__38263 = (i__31802__auto___38262 + (1));
i__31802__auto___38262 = G__38263;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.open",args__38076__auto__);
});

antizer.reagent.notification_open.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_open.cljs$lang$applyTo = (function (seq38206){
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38206));
});


antizer.reagent.notification_success = (function antizer$reagent$notification_success(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38264 = arguments.length;
var i__31802__auto___38265 = (0);
while(true){
if((i__31802__auto___38265 < len__31801__auto___38264)){
args__31808__auto__.push((arguments[i__31802__auto___38265]));

var G__38266 = (i__31802__auto___38265 + (1));
i__31802__auto___38265 = G__38266;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.success",args__38076__auto__);
});

antizer.reagent.notification_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_success.cljs$lang$applyTo = (function (seq38207){
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38207));
});


antizer.reagent.notification_warn = (function antizer$reagent$notification_warn(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38267 = arguments.length;
var i__31802__auto___38268 = (0);
while(true){
if((i__31802__auto___38268 < len__31801__auto___38267)){
args__31808__auto__.push((arguments[i__31802__auto___38268]));

var G__38269 = (i__31802__auto___38268 + (1));
i__31802__auto___38268 = G__38269;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warn",args__38076__auto__);
});

antizer.reagent.notification_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warn.cljs$lang$applyTo = (function (seq38208){
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38208));
});


antizer.reagent.notification_warning = (function antizer$reagent$notification_warning(var_args){
var args__31808__auto__ = [];
var len__31801__auto___38270 = arguments.length;
var i__31802__auto___38271 = (0);
while(true){
if((i__31802__auto___38271 < len__31801__auto___38270)){
args__31808__auto__.push((arguments[i__31802__auto___38271]));

var G__38272 = (i__31802__auto___38271 + (1));
i__31802__auto___38271 = G__38272;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((0) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__31809__auto__);
});

antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__38076__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warning",args__38076__auto__);
});

antizer.reagent.notification_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warning.cljs$lang$applyTo = (function (seq38209){
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38209));
});

antizer.reagent.locales = (function antizer$reagent$locales(prop__38078__auto__){
return antizer.core.get_prop.call(null,"locales",prop__38078__auto__);
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

//# sourceMappingURL=reagent.js.map?rel=1510602143577
