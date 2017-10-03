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
var len__31526__auto___42183 = arguments.length;
var i__31527__auto___42184 = (0);
while(true){
if((i__31527__auto___42184 < len__31526__auto___42183)){
args__31533__auto__.push((arguments[i__31527__auto___42184]));

var G__42185 = (i__31527__auto___42184 + (1));
i__31527__auto___42184 = G__42185;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__42180){
var map__42181 = p__42180;
var map__42181__$1 = ((((!((map__42181 == null)))?((((map__42181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42181):map__42181);
var options = cljs.core.get.call(null,map__42181__$1,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_element.call(null,goog.object.getValueByKeys(antd,"Form","create").call(null,cljs.core.clj__GT_js.call(null,antizer.core.map_keys__GT_camel_case.call(null,options))).call(null,reagent.core.reactify_component.call(null,form)));
});

antizer.reagent.create_form.cljs$lang$maxFixedArity = (1);

antizer.reagent.create_form.cljs$lang$applyTo = (function (seq42178){
var G__42179 = cljs.core.first.call(null,seq42178);
var seq42178__$1 = cljs.core.next.call(null,seq42178);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic(G__42179,seq42178__$1);
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
var G__42187 = arguments.length;
switch (G__42187) {
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
var len__31526__auto___42215 = arguments.length;
var i__31527__auto___42216 = (0);
while(true){
if((i__31527__auto___42216 < len__31526__auto___42215)){
args__31533__auto__.push((arguments[i__31527__auto___42216]));

var G__42217 = (i__31527__auto___42216 + (1));
i__31527__auto___42216 = G__42217;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic = (function (form__42145__auto__,args__42146__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldDecorator").call(null,form__42145__auto__),args__42146__auto__);
});

antizer.reagent.get_field_decorator.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_decorator.cljs$lang$applyTo = (function (seq42189){
var G__42190 = cljs.core.first.call(null,seq42189);
var seq42189__$1 = cljs.core.next.call(null,seq42189);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic(G__42190,seq42189__$1);
});


antizer.reagent.get_field_error = (function antizer$reagent$get_field_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42218 = arguments.length;
var i__31527__auto___42219 = (0);
while(true){
if((i__31527__auto___42219 < len__31526__auto___42218)){
args__31533__auto__.push((arguments[i__31527__auto___42219]));

var G__42220 = (i__31527__auto___42219 + (1));
i__31527__auto___42219 = G__42220;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__42145__auto__,args__42146__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldError").call(null,form__42145__auto__),args__42146__auto__);
});

antizer.reagent.get_field_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_error.cljs$lang$applyTo = (function (seq42191){
var G__42192 = cljs.core.first.call(null,seq42191);
var seq42191__$1 = cljs.core.next.call(null,seq42191);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic(G__42192,seq42191__$1);
});


antizer.reagent.get_fields_error = (function antizer$reagent$get_fields_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42221 = arguments.length;
var i__31527__auto___42222 = (0);
while(true){
if((i__31527__auto___42222 < len__31526__auto___42221)){
args__31533__auto__.push((arguments[i__31527__auto___42222]));

var G__42223 = (i__31527__auto___42222 + (1));
i__31527__auto___42222 = G__42223;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__42145__auto__,args__42146__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsError").call(null,form__42145__auto__),args__42146__auto__);
});

antizer.reagent.get_fields_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_error.cljs$lang$applyTo = (function (seq42193){
var G__42194 = cljs.core.first.call(null,seq42193);
var seq42193__$1 = cljs.core.next.call(null,seq42193);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic(G__42194,seq42193__$1);
});


antizer.reagent.get_field_value = (function antizer$reagent$get_field_value(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42224 = arguments.length;
var i__31527__auto___42225 = (0);
while(true){
if((i__31527__auto___42225 < len__31526__auto___42224)){
args__31533__auto__.push((arguments[i__31527__auto___42225]));

var G__42226 = (i__31527__auto___42225 + (1));
i__31527__auto___42225 = G__42226;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__42145__auto__,args__42146__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldValue").call(null,form__42145__auto__),args__42146__auto__);
});

antizer.reagent.get_field_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_value.cljs$lang$applyTo = (function (seq42195){
var G__42196 = cljs.core.first.call(null,seq42195);
var seq42195__$1 = cljs.core.next.call(null,seq42195);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic(G__42196,seq42195__$1);
});


antizer.reagent.get_fields_value = (function antizer$reagent$get_fields_value(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42227 = arguments.length;
var i__31527__auto___42228 = (0);
while(true){
if((i__31527__auto___42228 < len__31526__auto___42227)){
args__31533__auto__.push((arguments[i__31527__auto___42228]));

var G__42229 = (i__31527__auto___42228 + (1));
i__31527__auto___42228 = G__42229;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__42145__auto__,args__42146__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsValue").call(null,form__42145__auto__),args__42146__auto__);
});

antizer.reagent.get_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_value.cljs$lang$applyTo = (function (seq42197){
var G__42198 = cljs.core.first.call(null,seq42197);
var seq42197__$1 = cljs.core.next.call(null,seq42197);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__42198,seq42197__$1);
});


antizer.reagent.is_field_touched = (function antizer$reagent$is_field_touched(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42230 = arguments.length;
var i__31527__auto___42231 = (0);
while(true){
if((i__31527__auto___42231 < len__31526__auto___42230)){
args__31533__auto__.push((arguments[i__31527__auto___42231]));

var G__42232 = (i__31527__auto___42231 + (1));
i__31527__auto___42231 = G__42232;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__42145__auto__,args__42146__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldTouched").call(null,form__42145__auto__),args__42146__auto__);
});

antizer.reagent.is_field_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_touched.cljs$lang$applyTo = (function (seq42199){
var G__42200 = cljs.core.first.call(null,seq42199);
var seq42199__$1 = cljs.core.next.call(null,seq42199);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic(G__42200,seq42199__$1);
});


antizer.reagent.is_fields_touched = (function antizer$reagent$is_fields_touched(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42233 = arguments.length;
var i__31527__auto___42234 = (0);
while(true){
if((i__31527__auto___42234 < len__31526__auto___42233)){
args__31533__auto__.push((arguments[i__31527__auto___42234]));

var G__42235 = (i__31527__auto___42234 + (1));
i__31527__auto___42234 = G__42235;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__42145__auto__,args__42146__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldsTouched").call(null,form__42145__auto__),args__42146__auto__);
});

antizer.reagent.is_fields_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_fields_touched.cljs$lang$applyTo = (function (seq42201){
var G__42202 = cljs.core.first.call(null,seq42201);
var seq42201__$1 = cljs.core.next.call(null,seq42201);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic(G__42202,seq42201__$1);
});


antizer.reagent.is_field_validating = (function antizer$reagent$is_field_validating(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42236 = arguments.length;
var i__31527__auto___42237 = (0);
while(true){
if((i__31527__auto___42237 < len__31526__auto___42236)){
args__31533__auto__.push((arguments[i__31527__auto___42237]));

var G__42238 = (i__31527__auto___42237 + (1));
i__31527__auto___42237 = G__42238;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic = (function (form__42145__auto__,args__42146__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldValidating").call(null,form__42145__auto__),args__42146__auto__);
});

antizer.reagent.is_field_validating.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_validating.cljs$lang$applyTo = (function (seq42203){
var G__42204 = cljs.core.first.call(null,seq42203);
var seq42203__$1 = cljs.core.next.call(null,seq42203);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic(G__42204,seq42203__$1);
});


antizer.reagent.reset_fields = (function antizer$reagent$reset_fields(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42239 = arguments.length;
var i__31527__auto___42240 = (0);
while(true){
if((i__31527__auto___42240 < len__31526__auto___42239)){
args__31533__auto__.push((arguments[i__31527__auto___42240]));

var G__42241 = (i__31527__auto___42240 + (1));
i__31527__auto___42240 = G__42241;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__42145__auto__,args__42146__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"resetFields").call(null,form__42145__auto__),args__42146__auto__);
});

antizer.reagent.reset_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.reset_fields.cljs$lang$applyTo = (function (seq42205){
var G__42206 = cljs.core.first.call(null,seq42205);
var seq42205__$1 = cljs.core.next.call(null,seq42205);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic(G__42206,seq42205__$1);
});


antizer.reagent.set_fields = (function antizer$reagent$set_fields(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42242 = arguments.length;
var i__31527__auto___42243 = (0);
while(true){
if((i__31527__auto___42243 < len__31526__auto___42242)){
args__31533__auto__.push((arguments[i__31527__auto___42243]));

var G__42244 = (i__31527__auto___42243 + (1));
i__31527__auto___42243 = G__42244;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__42145__auto__,args__42146__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFields").call(null,form__42145__auto__),args__42146__auto__);
});

antizer.reagent.set_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields.cljs$lang$applyTo = (function (seq42207){
var G__42208 = cljs.core.first.call(null,seq42207);
var seq42207__$1 = cljs.core.next.call(null,seq42207);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic(G__42208,seq42207__$1);
});


antizer.reagent.set_fields_value = (function antizer$reagent$set_fields_value(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42245 = arguments.length;
var i__31527__auto___42246 = (0);
while(true){
if((i__31527__auto___42246 < len__31526__auto___42245)){
args__31533__auto__.push((arguments[i__31527__auto___42246]));

var G__42247 = (i__31527__auto___42246 + (1));
i__31527__auto___42246 = G__42247;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__42145__auto__,args__42146__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFieldsValue").call(null,form__42145__auto__),args__42146__auto__);
});

antizer.reagent.set_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields_value.cljs$lang$applyTo = (function (seq42209){
var G__42210 = cljs.core.first.call(null,seq42209);
var seq42209__$1 = cljs.core.next.call(null,seq42209);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__42210,seq42209__$1);
});


antizer.reagent.validate_fields = (function antizer$reagent$validate_fields(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42248 = arguments.length;
var i__31527__auto___42249 = (0);
while(true){
if((i__31527__auto___42249 < len__31526__auto___42248)){
args__31533__auto__.push((arguments[i__31527__auto___42249]));

var G__42250 = (i__31527__auto___42249 + (1));
i__31527__auto___42249 = G__42250;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__42145__auto__,args__42146__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFields").call(null,form__42145__auto__),args__42146__auto__);
});

antizer.reagent.validate_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields.cljs$lang$applyTo = (function (seq42211){
var G__42212 = cljs.core.first.call(null,seq42211);
var seq42211__$1 = cljs.core.next.call(null,seq42211);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic(G__42212,seq42211__$1);
});


antizer.reagent.validate_fields_and_scroll = (function antizer$reagent$validate_fields_and_scroll(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42251 = arguments.length;
var i__31527__auto___42252 = (0);
while(true){
if((i__31527__auto___42252 < len__31526__auto___42251)){
args__31533__auto__.push((arguments[i__31527__auto___42252]));

var G__42253 = (i__31527__auto___42252 + (1));
i__31527__auto___42252 = G__42253;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic = (function (form__42145__auto__,args__42146__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFieldsAndScroll").call(null,form__42145__auto__),args__42146__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields_and_scroll.cljs$lang$applyTo = (function (seq42213){
var G__42214 = cljs.core.first.call(null,seq42213);
var seq42213__$1 = cljs.core.next.call(null,seq42213);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic(G__42214,seq42213__$1);
});

antizer.reagent.message_config = (function antizer$reagent$message_config(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42275 = arguments.length;
var i__31527__auto___42276 = (0);
while(true){
if((i__31527__auto___42276 < len__31526__auto___42275)){
args__31533__auto__.push((arguments[i__31527__auto___42276]));

var G__42277 = (i__31527__auto___42276 + (1));
i__31527__auto___42276 = G__42277;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.config",args__42141__auto__);
});

antizer.reagent.message_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_config.cljs$lang$applyTo = (function (seq42254){
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42254));
});


antizer.reagent.message_error = (function antizer$reagent$message_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42278 = arguments.length;
var i__31527__auto___42279 = (0);
while(true){
if((i__31527__auto___42279 < len__31526__auto___42278)){
args__31533__auto__.push((arguments[i__31527__auto___42279]));

var G__42280 = (i__31527__auto___42279 + (1));
i__31527__auto___42279 = G__42280;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.error",args__42141__auto__);
});

antizer.reagent.message_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_error.cljs$lang$applyTo = (function (seq42255){
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42255));
});


antizer.reagent.message_info = (function antizer$reagent$message_info(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42281 = arguments.length;
var i__31527__auto___42282 = (0);
while(true){
if((i__31527__auto___42282 < len__31526__auto___42281)){
args__31533__auto__.push((arguments[i__31527__auto___42282]));

var G__42283 = (i__31527__auto___42282 + (1));
i__31527__auto___42282 = G__42283;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.info",args__42141__auto__);
});

antizer.reagent.message_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_info.cljs$lang$applyTo = (function (seq42256){
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42256));
});


antizer.reagent.message_loading = (function antizer$reagent$message_loading(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42284 = arguments.length;
var i__31527__auto___42285 = (0);
while(true){
if((i__31527__auto___42285 < len__31526__auto___42284)){
args__31533__auto__.push((arguments[i__31527__auto___42285]));

var G__42286 = (i__31527__auto___42285 + (1));
i__31527__auto___42285 = G__42286;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.loading",args__42141__auto__);
});

antizer.reagent.message_loading.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_loading.cljs$lang$applyTo = (function (seq42257){
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42257));
});


antizer.reagent.message_success = (function antizer$reagent$message_success(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42287 = arguments.length;
var i__31527__auto___42288 = (0);
while(true){
if((i__31527__auto___42288 < len__31526__auto___42287)){
args__31533__auto__.push((arguments[i__31527__auto___42288]));

var G__42289 = (i__31527__auto___42288 + (1));
i__31527__auto___42288 = G__42289;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.success",args__42141__auto__);
});

antizer.reagent.message_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_success.cljs$lang$applyTo = (function (seq42258){
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42258));
});


antizer.reagent.message_warn = (function antizer$reagent$message_warn(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42290 = arguments.length;
var i__31527__auto___42291 = (0);
while(true){
if((i__31527__auto___42291 < len__31526__auto___42290)){
args__31533__auto__.push((arguments[i__31527__auto___42291]));

var G__42292 = (i__31527__auto___42291 + (1));
i__31527__auto___42291 = G__42292;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warn",args__42141__auto__);
});

antizer.reagent.message_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warn.cljs$lang$applyTo = (function (seq42259){
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42259));
});


antizer.reagent.message_warning = (function antizer$reagent$message_warning(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42293 = arguments.length;
var i__31527__auto___42294 = (0);
while(true){
if((i__31527__auto___42294 < len__31526__auto___42293)){
args__31533__auto__.push((arguments[i__31527__auto___42294]));

var G__42295 = (i__31527__auto___42294 + (1));
i__31527__auto___42294 = G__42295;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warning",args__42141__auto__);
});

antizer.reagent.message_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warning.cljs$lang$applyTo = (function (seq42260){
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42260));
});


antizer.reagent.modal_confirm = (function antizer$reagent$modal_confirm(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42296 = arguments.length;
var i__31527__auto___42297 = (0);
while(true){
if((i__31527__auto___42297 < len__31526__auto___42296)){
args__31533__auto__.push((arguments[i__31527__auto___42297]));

var G__42298 = (i__31527__auto___42297 + (1));
i__31527__auto___42297 = G__42298;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.confirm",args__42141__auto__);
});

antizer.reagent.modal_confirm.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_confirm.cljs$lang$applyTo = (function (seq42261){
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42261));
});


antizer.reagent.modal_error = (function antizer$reagent$modal_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42299 = arguments.length;
var i__31527__auto___42300 = (0);
while(true){
if((i__31527__auto___42300 < len__31526__auto___42299)){
args__31533__auto__.push((arguments[i__31527__auto___42300]));

var G__42301 = (i__31527__auto___42300 + (1));
i__31527__auto___42300 = G__42301;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.error",args__42141__auto__);
});

antizer.reagent.modal_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_error.cljs$lang$applyTo = (function (seq42262){
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42262));
});


antizer.reagent.modal_info = (function antizer$reagent$modal_info(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42302 = arguments.length;
var i__31527__auto___42303 = (0);
while(true){
if((i__31527__auto___42303 < len__31526__auto___42302)){
args__31533__auto__.push((arguments[i__31527__auto___42303]));

var G__42304 = (i__31527__auto___42303 + (1));
i__31527__auto___42303 = G__42304;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.info",args__42141__auto__);
});

antizer.reagent.modal_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_info.cljs$lang$applyTo = (function (seq42263){
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42263));
});


antizer.reagent.modal_success = (function antizer$reagent$modal_success(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42305 = arguments.length;
var i__31527__auto___42306 = (0);
while(true){
if((i__31527__auto___42306 < len__31526__auto___42305)){
args__31533__auto__.push((arguments[i__31527__auto___42306]));

var G__42307 = (i__31527__auto___42306 + (1));
i__31527__auto___42306 = G__42307;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.success",args__42141__auto__);
});

antizer.reagent.modal_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_success.cljs$lang$applyTo = (function (seq42264){
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42264));
});


antizer.reagent.modal_warning = (function antizer$reagent$modal_warning(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42308 = arguments.length;
var i__31527__auto___42309 = (0);
while(true){
if((i__31527__auto___42309 < len__31526__auto___42308)){
args__31533__auto__.push((arguments[i__31527__auto___42309]));

var G__42310 = (i__31527__auto___42309 + (1));
i__31527__auto___42309 = G__42310;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.warning",args__42141__auto__);
});

antizer.reagent.modal_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_warning.cljs$lang$applyTo = (function (seq42265){
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42265));
});


antizer.reagent.notification_close = (function antizer$reagent$notification_close(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42311 = arguments.length;
var i__31527__auto___42312 = (0);
while(true){
if((i__31527__auto___42312 < len__31526__auto___42311)){
args__31533__auto__.push((arguments[i__31527__auto___42312]));

var G__42313 = (i__31527__auto___42312 + (1));
i__31527__auto___42312 = G__42313;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.close",args__42141__auto__);
});

antizer.reagent.notification_close.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_close.cljs$lang$applyTo = (function (seq42266){
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42266));
});


antizer.reagent.notification_config = (function antizer$reagent$notification_config(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42314 = arguments.length;
var i__31527__auto___42315 = (0);
while(true){
if((i__31527__auto___42315 < len__31526__auto___42314)){
args__31533__auto__.push((arguments[i__31527__auto___42315]));

var G__42316 = (i__31527__auto___42315 + (1));
i__31527__auto___42315 = G__42316;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.config",args__42141__auto__);
});

antizer.reagent.notification_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_config.cljs$lang$applyTo = (function (seq42267){
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42267));
});


antizer.reagent.notification_destroy = (function antizer$reagent$notification_destroy(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42317 = arguments.length;
var i__31527__auto___42318 = (0);
while(true){
if((i__31527__auto___42318 < len__31526__auto___42317)){
args__31533__auto__.push((arguments[i__31527__auto___42318]));

var G__42319 = (i__31527__auto___42318 + (1));
i__31527__auto___42318 = G__42319;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.destroy",args__42141__auto__);
});

antizer.reagent.notification_destroy.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_destroy.cljs$lang$applyTo = (function (seq42268){
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42268));
});


antizer.reagent.notification_error = (function antizer$reagent$notification_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42320 = arguments.length;
var i__31527__auto___42321 = (0);
while(true){
if((i__31527__auto___42321 < len__31526__auto___42320)){
args__31533__auto__.push((arguments[i__31527__auto___42321]));

var G__42322 = (i__31527__auto___42321 + (1));
i__31527__auto___42321 = G__42322;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.error",args__42141__auto__);
});

antizer.reagent.notification_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_error.cljs$lang$applyTo = (function (seq42269){
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42269));
});


antizer.reagent.notification_info = (function antizer$reagent$notification_info(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42323 = arguments.length;
var i__31527__auto___42324 = (0);
while(true){
if((i__31527__auto___42324 < len__31526__auto___42323)){
args__31533__auto__.push((arguments[i__31527__auto___42324]));

var G__42325 = (i__31527__auto___42324 + (1));
i__31527__auto___42324 = G__42325;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.info",args__42141__auto__);
});

antizer.reagent.notification_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_info.cljs$lang$applyTo = (function (seq42270){
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42270));
});


antizer.reagent.notification_open = (function antizer$reagent$notification_open(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42326 = arguments.length;
var i__31527__auto___42327 = (0);
while(true){
if((i__31527__auto___42327 < len__31526__auto___42326)){
args__31533__auto__.push((arguments[i__31527__auto___42327]));

var G__42328 = (i__31527__auto___42327 + (1));
i__31527__auto___42327 = G__42328;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.open",args__42141__auto__);
});

antizer.reagent.notification_open.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_open.cljs$lang$applyTo = (function (seq42271){
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42271));
});


antizer.reagent.notification_success = (function antizer$reagent$notification_success(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42329 = arguments.length;
var i__31527__auto___42330 = (0);
while(true){
if((i__31527__auto___42330 < len__31526__auto___42329)){
args__31533__auto__.push((arguments[i__31527__auto___42330]));

var G__42331 = (i__31527__auto___42330 + (1));
i__31527__auto___42330 = G__42331;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.success",args__42141__auto__);
});

antizer.reagent.notification_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_success.cljs$lang$applyTo = (function (seq42272){
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42272));
});


antizer.reagent.notification_warn = (function antizer$reagent$notification_warn(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42332 = arguments.length;
var i__31527__auto___42333 = (0);
while(true){
if((i__31527__auto___42333 < len__31526__auto___42332)){
args__31533__auto__.push((arguments[i__31527__auto___42333]));

var G__42334 = (i__31527__auto___42333 + (1));
i__31527__auto___42333 = G__42334;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warn",args__42141__auto__);
});

antizer.reagent.notification_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warn.cljs$lang$applyTo = (function (seq42273){
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42273));
});


antizer.reagent.notification_warning = (function antizer$reagent$notification_warning(var_args){
var args__31533__auto__ = [];
var len__31526__auto___42335 = arguments.length;
var i__31527__auto___42336 = (0);
while(true){
if((i__31527__auto___42336 < len__31526__auto___42335)){
args__31533__auto__.push((arguments[i__31527__auto___42336]));

var G__42337 = (i__31527__auto___42336 + (1));
i__31527__auto___42336 = G__42337;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__42141__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warning",args__42141__auto__);
});

antizer.reagent.notification_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warning.cljs$lang$applyTo = (function (seq42274){
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42274));
});

antizer.reagent.locales = (function antizer$reagent$locales(prop__42143__auto__){
return antizer.core.get_prop.call(null,"locales",prop__42143__auto__);
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

//# sourceMappingURL=reagent.js.map?rel=1507056176484
