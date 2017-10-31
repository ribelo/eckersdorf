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
var len__31526__auto___41150 = arguments.length;
var i__31527__auto___41151 = (0);
while(true){
if((i__31527__auto___41151 < len__31526__auto___41150)){
args__31533__auto__.push((arguments[i__31527__auto___41151]));

var G__41152 = (i__31527__auto___41151 + (1));
i__31527__auto___41151 = G__41152;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__41147){
var map__41148 = p__41147;
var map__41148__$1 = ((((!((map__41148 == null)))?((((map__41148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41148):map__41148);
var options = cljs.core.get.call(null,map__41148__$1,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_element.call(null,goog.object.getValueByKeys(antd,"Form","create").call(null,cljs.core.clj__GT_js.call(null,antizer.core.map_keys__GT_camel_case.call(null,options))).call(null,reagent.core.reactify_component.call(null,form)));
});

antizer.reagent.create_form.cljs$lang$maxFixedArity = (1);

antizer.reagent.create_form.cljs$lang$applyTo = (function (seq41145){
var G__41146 = cljs.core.first.call(null,seq41145);
var seq41145__$1 = cljs.core.next.call(null,seq41145);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic(G__41146,seq41145__$1);
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
var G__41154 = arguments.length;
switch (G__41154) {
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
var len__31526__auto___41182 = arguments.length;
var i__31527__auto___41183 = (0);
while(true){
if((i__31527__auto___41183 < len__31526__auto___41182)){
args__31533__auto__.push((arguments[i__31527__auto___41183]));

var G__41184 = (i__31527__auto___41183 + (1));
i__31527__auto___41183 = G__41184;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic = (function (form__41112__auto__,args__41113__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldDecorator").call(null,form__41112__auto__),args__41113__auto__);
});

antizer.reagent.get_field_decorator.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_decorator.cljs$lang$applyTo = (function (seq41156){
var G__41157 = cljs.core.first.call(null,seq41156);
var seq41156__$1 = cljs.core.next.call(null,seq41156);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic(G__41157,seq41156__$1);
});


antizer.reagent.get_field_error = (function antizer$reagent$get_field_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41185 = arguments.length;
var i__31527__auto___41186 = (0);
while(true){
if((i__31527__auto___41186 < len__31526__auto___41185)){
args__31533__auto__.push((arguments[i__31527__auto___41186]));

var G__41187 = (i__31527__auto___41186 + (1));
i__31527__auto___41186 = G__41187;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__41112__auto__,args__41113__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldError").call(null,form__41112__auto__),args__41113__auto__);
});

antizer.reagent.get_field_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_error.cljs$lang$applyTo = (function (seq41158){
var G__41159 = cljs.core.first.call(null,seq41158);
var seq41158__$1 = cljs.core.next.call(null,seq41158);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic(G__41159,seq41158__$1);
});


antizer.reagent.get_fields_error = (function antizer$reagent$get_fields_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41188 = arguments.length;
var i__31527__auto___41189 = (0);
while(true){
if((i__31527__auto___41189 < len__31526__auto___41188)){
args__31533__auto__.push((arguments[i__31527__auto___41189]));

var G__41190 = (i__31527__auto___41189 + (1));
i__31527__auto___41189 = G__41190;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__41112__auto__,args__41113__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsError").call(null,form__41112__auto__),args__41113__auto__);
});

antizer.reagent.get_fields_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_error.cljs$lang$applyTo = (function (seq41160){
var G__41161 = cljs.core.first.call(null,seq41160);
var seq41160__$1 = cljs.core.next.call(null,seq41160);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic(G__41161,seq41160__$1);
});


antizer.reagent.get_field_value = (function antizer$reagent$get_field_value(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41191 = arguments.length;
var i__31527__auto___41192 = (0);
while(true){
if((i__31527__auto___41192 < len__31526__auto___41191)){
args__31533__auto__.push((arguments[i__31527__auto___41192]));

var G__41193 = (i__31527__auto___41192 + (1));
i__31527__auto___41192 = G__41193;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__41112__auto__,args__41113__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldValue").call(null,form__41112__auto__),args__41113__auto__);
});

antizer.reagent.get_field_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_value.cljs$lang$applyTo = (function (seq41162){
var G__41163 = cljs.core.first.call(null,seq41162);
var seq41162__$1 = cljs.core.next.call(null,seq41162);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic(G__41163,seq41162__$1);
});


antizer.reagent.get_fields_value = (function antizer$reagent$get_fields_value(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41194 = arguments.length;
var i__31527__auto___41195 = (0);
while(true){
if((i__31527__auto___41195 < len__31526__auto___41194)){
args__31533__auto__.push((arguments[i__31527__auto___41195]));

var G__41196 = (i__31527__auto___41195 + (1));
i__31527__auto___41195 = G__41196;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__41112__auto__,args__41113__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsValue").call(null,form__41112__auto__),args__41113__auto__);
});

antizer.reagent.get_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_value.cljs$lang$applyTo = (function (seq41164){
var G__41165 = cljs.core.first.call(null,seq41164);
var seq41164__$1 = cljs.core.next.call(null,seq41164);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__41165,seq41164__$1);
});


antizer.reagent.is_field_touched = (function antizer$reagent$is_field_touched(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41197 = arguments.length;
var i__31527__auto___41198 = (0);
while(true){
if((i__31527__auto___41198 < len__31526__auto___41197)){
args__31533__auto__.push((arguments[i__31527__auto___41198]));

var G__41199 = (i__31527__auto___41198 + (1));
i__31527__auto___41198 = G__41199;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__41112__auto__,args__41113__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldTouched").call(null,form__41112__auto__),args__41113__auto__);
});

antizer.reagent.is_field_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_touched.cljs$lang$applyTo = (function (seq41166){
var G__41167 = cljs.core.first.call(null,seq41166);
var seq41166__$1 = cljs.core.next.call(null,seq41166);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic(G__41167,seq41166__$1);
});


antizer.reagent.is_fields_touched = (function antizer$reagent$is_fields_touched(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41200 = arguments.length;
var i__31527__auto___41201 = (0);
while(true){
if((i__31527__auto___41201 < len__31526__auto___41200)){
args__31533__auto__.push((arguments[i__31527__auto___41201]));

var G__41202 = (i__31527__auto___41201 + (1));
i__31527__auto___41201 = G__41202;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__41112__auto__,args__41113__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldsTouched").call(null,form__41112__auto__),args__41113__auto__);
});

antizer.reagent.is_fields_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_fields_touched.cljs$lang$applyTo = (function (seq41168){
var G__41169 = cljs.core.first.call(null,seq41168);
var seq41168__$1 = cljs.core.next.call(null,seq41168);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic(G__41169,seq41168__$1);
});


antizer.reagent.is_field_validating = (function antizer$reagent$is_field_validating(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41203 = arguments.length;
var i__31527__auto___41204 = (0);
while(true){
if((i__31527__auto___41204 < len__31526__auto___41203)){
args__31533__auto__.push((arguments[i__31527__auto___41204]));

var G__41205 = (i__31527__auto___41204 + (1));
i__31527__auto___41204 = G__41205;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic = (function (form__41112__auto__,args__41113__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldValidating").call(null,form__41112__auto__),args__41113__auto__);
});

antizer.reagent.is_field_validating.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_validating.cljs$lang$applyTo = (function (seq41170){
var G__41171 = cljs.core.first.call(null,seq41170);
var seq41170__$1 = cljs.core.next.call(null,seq41170);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic(G__41171,seq41170__$1);
});


antizer.reagent.reset_fields = (function antizer$reagent$reset_fields(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41206 = arguments.length;
var i__31527__auto___41207 = (0);
while(true){
if((i__31527__auto___41207 < len__31526__auto___41206)){
args__31533__auto__.push((arguments[i__31527__auto___41207]));

var G__41208 = (i__31527__auto___41207 + (1));
i__31527__auto___41207 = G__41208;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__41112__auto__,args__41113__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"resetFields").call(null,form__41112__auto__),args__41113__auto__);
});

antizer.reagent.reset_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.reset_fields.cljs$lang$applyTo = (function (seq41172){
var G__41173 = cljs.core.first.call(null,seq41172);
var seq41172__$1 = cljs.core.next.call(null,seq41172);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic(G__41173,seq41172__$1);
});


antizer.reagent.set_fields = (function antizer$reagent$set_fields(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41209 = arguments.length;
var i__31527__auto___41210 = (0);
while(true){
if((i__31527__auto___41210 < len__31526__auto___41209)){
args__31533__auto__.push((arguments[i__31527__auto___41210]));

var G__41211 = (i__31527__auto___41210 + (1));
i__31527__auto___41210 = G__41211;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__41112__auto__,args__41113__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFields").call(null,form__41112__auto__),args__41113__auto__);
});

antizer.reagent.set_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields.cljs$lang$applyTo = (function (seq41174){
var G__41175 = cljs.core.first.call(null,seq41174);
var seq41174__$1 = cljs.core.next.call(null,seq41174);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic(G__41175,seq41174__$1);
});


antizer.reagent.set_fields_value = (function antizer$reagent$set_fields_value(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41212 = arguments.length;
var i__31527__auto___41213 = (0);
while(true){
if((i__31527__auto___41213 < len__31526__auto___41212)){
args__31533__auto__.push((arguments[i__31527__auto___41213]));

var G__41214 = (i__31527__auto___41213 + (1));
i__31527__auto___41213 = G__41214;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__41112__auto__,args__41113__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFieldsValue").call(null,form__41112__auto__),args__41113__auto__);
});

antizer.reagent.set_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields_value.cljs$lang$applyTo = (function (seq41176){
var G__41177 = cljs.core.first.call(null,seq41176);
var seq41176__$1 = cljs.core.next.call(null,seq41176);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__41177,seq41176__$1);
});


antizer.reagent.validate_fields = (function antizer$reagent$validate_fields(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41215 = arguments.length;
var i__31527__auto___41216 = (0);
while(true){
if((i__31527__auto___41216 < len__31526__auto___41215)){
args__31533__auto__.push((arguments[i__31527__auto___41216]));

var G__41217 = (i__31527__auto___41216 + (1));
i__31527__auto___41216 = G__41217;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__41112__auto__,args__41113__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFields").call(null,form__41112__auto__),args__41113__auto__);
});

antizer.reagent.validate_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields.cljs$lang$applyTo = (function (seq41178){
var G__41179 = cljs.core.first.call(null,seq41178);
var seq41178__$1 = cljs.core.next.call(null,seq41178);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic(G__41179,seq41178__$1);
});


antizer.reagent.validate_fields_and_scroll = (function antizer$reagent$validate_fields_and_scroll(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41218 = arguments.length;
var i__31527__auto___41219 = (0);
while(true){
if((i__31527__auto___41219 < len__31526__auto___41218)){
args__31533__auto__.push((arguments[i__31527__auto___41219]));

var G__41220 = (i__31527__auto___41219 + (1));
i__31527__auto___41219 = G__41220;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((1) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31534__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic = (function (form__41112__auto__,args__41113__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFieldsAndScroll").call(null,form__41112__auto__),args__41113__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields_and_scroll.cljs$lang$applyTo = (function (seq41180){
var G__41181 = cljs.core.first.call(null,seq41180);
var seq41180__$1 = cljs.core.next.call(null,seq41180);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic(G__41181,seq41180__$1);
});

antizer.reagent.message_config = (function antizer$reagent$message_config(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41242 = arguments.length;
var i__31527__auto___41243 = (0);
while(true){
if((i__31527__auto___41243 < len__31526__auto___41242)){
args__31533__auto__.push((arguments[i__31527__auto___41243]));

var G__41244 = (i__31527__auto___41243 + (1));
i__31527__auto___41243 = G__41244;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.config",args__41108__auto__);
});

antizer.reagent.message_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_config.cljs$lang$applyTo = (function (seq41221){
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41221));
});


antizer.reagent.message_error = (function antizer$reagent$message_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41245 = arguments.length;
var i__31527__auto___41246 = (0);
while(true){
if((i__31527__auto___41246 < len__31526__auto___41245)){
args__31533__auto__.push((arguments[i__31527__auto___41246]));

var G__41247 = (i__31527__auto___41246 + (1));
i__31527__auto___41246 = G__41247;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.error",args__41108__auto__);
});

antizer.reagent.message_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_error.cljs$lang$applyTo = (function (seq41222){
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41222));
});


antizer.reagent.message_info = (function antizer$reagent$message_info(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41248 = arguments.length;
var i__31527__auto___41249 = (0);
while(true){
if((i__31527__auto___41249 < len__31526__auto___41248)){
args__31533__auto__.push((arguments[i__31527__auto___41249]));

var G__41250 = (i__31527__auto___41249 + (1));
i__31527__auto___41249 = G__41250;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.info",args__41108__auto__);
});

antizer.reagent.message_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_info.cljs$lang$applyTo = (function (seq41223){
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41223));
});


antizer.reagent.message_loading = (function antizer$reagent$message_loading(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41251 = arguments.length;
var i__31527__auto___41252 = (0);
while(true){
if((i__31527__auto___41252 < len__31526__auto___41251)){
args__31533__auto__.push((arguments[i__31527__auto___41252]));

var G__41253 = (i__31527__auto___41252 + (1));
i__31527__auto___41252 = G__41253;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.loading",args__41108__auto__);
});

antizer.reagent.message_loading.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_loading.cljs$lang$applyTo = (function (seq41224){
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41224));
});


antizer.reagent.message_success = (function antizer$reagent$message_success(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41254 = arguments.length;
var i__31527__auto___41255 = (0);
while(true){
if((i__31527__auto___41255 < len__31526__auto___41254)){
args__31533__auto__.push((arguments[i__31527__auto___41255]));

var G__41256 = (i__31527__auto___41255 + (1));
i__31527__auto___41255 = G__41256;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.success",args__41108__auto__);
});

antizer.reagent.message_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_success.cljs$lang$applyTo = (function (seq41225){
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41225));
});


antizer.reagent.message_warn = (function antizer$reagent$message_warn(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41257 = arguments.length;
var i__31527__auto___41258 = (0);
while(true){
if((i__31527__auto___41258 < len__31526__auto___41257)){
args__31533__auto__.push((arguments[i__31527__auto___41258]));

var G__41259 = (i__31527__auto___41258 + (1));
i__31527__auto___41258 = G__41259;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warn",args__41108__auto__);
});

antizer.reagent.message_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warn.cljs$lang$applyTo = (function (seq41226){
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41226));
});


antizer.reagent.message_warning = (function antizer$reagent$message_warning(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41260 = arguments.length;
var i__31527__auto___41261 = (0);
while(true){
if((i__31527__auto___41261 < len__31526__auto___41260)){
args__31533__auto__.push((arguments[i__31527__auto___41261]));

var G__41262 = (i__31527__auto___41261 + (1));
i__31527__auto___41261 = G__41262;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warning",args__41108__auto__);
});

antizer.reagent.message_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warning.cljs$lang$applyTo = (function (seq41227){
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41227));
});


antizer.reagent.modal_confirm = (function antizer$reagent$modal_confirm(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41263 = arguments.length;
var i__31527__auto___41264 = (0);
while(true){
if((i__31527__auto___41264 < len__31526__auto___41263)){
args__31533__auto__.push((arguments[i__31527__auto___41264]));

var G__41265 = (i__31527__auto___41264 + (1));
i__31527__auto___41264 = G__41265;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.confirm",args__41108__auto__);
});

antizer.reagent.modal_confirm.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_confirm.cljs$lang$applyTo = (function (seq41228){
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41228));
});


antizer.reagent.modal_error = (function antizer$reagent$modal_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41266 = arguments.length;
var i__31527__auto___41267 = (0);
while(true){
if((i__31527__auto___41267 < len__31526__auto___41266)){
args__31533__auto__.push((arguments[i__31527__auto___41267]));

var G__41268 = (i__31527__auto___41267 + (1));
i__31527__auto___41267 = G__41268;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.error",args__41108__auto__);
});

antizer.reagent.modal_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_error.cljs$lang$applyTo = (function (seq41229){
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41229));
});


antizer.reagent.modal_info = (function antizer$reagent$modal_info(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41269 = arguments.length;
var i__31527__auto___41270 = (0);
while(true){
if((i__31527__auto___41270 < len__31526__auto___41269)){
args__31533__auto__.push((arguments[i__31527__auto___41270]));

var G__41271 = (i__31527__auto___41270 + (1));
i__31527__auto___41270 = G__41271;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.info",args__41108__auto__);
});

antizer.reagent.modal_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_info.cljs$lang$applyTo = (function (seq41230){
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41230));
});


antizer.reagent.modal_success = (function antizer$reagent$modal_success(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41272 = arguments.length;
var i__31527__auto___41273 = (0);
while(true){
if((i__31527__auto___41273 < len__31526__auto___41272)){
args__31533__auto__.push((arguments[i__31527__auto___41273]));

var G__41274 = (i__31527__auto___41273 + (1));
i__31527__auto___41273 = G__41274;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.success",args__41108__auto__);
});

antizer.reagent.modal_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_success.cljs$lang$applyTo = (function (seq41231){
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41231));
});


antizer.reagent.modal_warning = (function antizer$reagent$modal_warning(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41275 = arguments.length;
var i__31527__auto___41276 = (0);
while(true){
if((i__31527__auto___41276 < len__31526__auto___41275)){
args__31533__auto__.push((arguments[i__31527__auto___41276]));

var G__41277 = (i__31527__auto___41276 + (1));
i__31527__auto___41276 = G__41277;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.warning",args__41108__auto__);
});

antizer.reagent.modal_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_warning.cljs$lang$applyTo = (function (seq41232){
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41232));
});


antizer.reagent.notification_close = (function antizer$reagent$notification_close(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41278 = arguments.length;
var i__31527__auto___41279 = (0);
while(true){
if((i__31527__auto___41279 < len__31526__auto___41278)){
args__31533__auto__.push((arguments[i__31527__auto___41279]));

var G__41280 = (i__31527__auto___41279 + (1));
i__31527__auto___41279 = G__41280;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.close",args__41108__auto__);
});

antizer.reagent.notification_close.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_close.cljs$lang$applyTo = (function (seq41233){
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41233));
});


antizer.reagent.notification_config = (function antizer$reagent$notification_config(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41281 = arguments.length;
var i__31527__auto___41282 = (0);
while(true){
if((i__31527__auto___41282 < len__31526__auto___41281)){
args__31533__auto__.push((arguments[i__31527__auto___41282]));

var G__41283 = (i__31527__auto___41282 + (1));
i__31527__auto___41282 = G__41283;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.config",args__41108__auto__);
});

antizer.reagent.notification_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_config.cljs$lang$applyTo = (function (seq41234){
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41234));
});


antizer.reagent.notification_destroy = (function antizer$reagent$notification_destroy(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41284 = arguments.length;
var i__31527__auto___41285 = (0);
while(true){
if((i__31527__auto___41285 < len__31526__auto___41284)){
args__31533__auto__.push((arguments[i__31527__auto___41285]));

var G__41286 = (i__31527__auto___41285 + (1));
i__31527__auto___41285 = G__41286;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.destroy",args__41108__auto__);
});

antizer.reagent.notification_destroy.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_destroy.cljs$lang$applyTo = (function (seq41235){
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41235));
});


antizer.reagent.notification_error = (function antizer$reagent$notification_error(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41287 = arguments.length;
var i__31527__auto___41288 = (0);
while(true){
if((i__31527__auto___41288 < len__31526__auto___41287)){
args__31533__auto__.push((arguments[i__31527__auto___41288]));

var G__41289 = (i__31527__auto___41288 + (1));
i__31527__auto___41288 = G__41289;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.error",args__41108__auto__);
});

antizer.reagent.notification_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_error.cljs$lang$applyTo = (function (seq41236){
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41236));
});


antizer.reagent.notification_info = (function antizer$reagent$notification_info(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41290 = arguments.length;
var i__31527__auto___41291 = (0);
while(true){
if((i__31527__auto___41291 < len__31526__auto___41290)){
args__31533__auto__.push((arguments[i__31527__auto___41291]));

var G__41292 = (i__31527__auto___41291 + (1));
i__31527__auto___41291 = G__41292;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.info",args__41108__auto__);
});

antizer.reagent.notification_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_info.cljs$lang$applyTo = (function (seq41237){
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41237));
});


antizer.reagent.notification_open = (function antizer$reagent$notification_open(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41293 = arguments.length;
var i__31527__auto___41294 = (0);
while(true){
if((i__31527__auto___41294 < len__31526__auto___41293)){
args__31533__auto__.push((arguments[i__31527__auto___41294]));

var G__41295 = (i__31527__auto___41294 + (1));
i__31527__auto___41294 = G__41295;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.open",args__41108__auto__);
});

antizer.reagent.notification_open.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_open.cljs$lang$applyTo = (function (seq41238){
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41238));
});


antizer.reagent.notification_success = (function antizer$reagent$notification_success(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41296 = arguments.length;
var i__31527__auto___41297 = (0);
while(true){
if((i__31527__auto___41297 < len__31526__auto___41296)){
args__31533__auto__.push((arguments[i__31527__auto___41297]));

var G__41298 = (i__31527__auto___41297 + (1));
i__31527__auto___41297 = G__41298;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.success",args__41108__auto__);
});

antizer.reagent.notification_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_success.cljs$lang$applyTo = (function (seq41239){
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41239));
});


antizer.reagent.notification_warn = (function antizer$reagent$notification_warn(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41299 = arguments.length;
var i__31527__auto___41300 = (0);
while(true){
if((i__31527__auto___41300 < len__31526__auto___41299)){
args__31533__auto__.push((arguments[i__31527__auto___41300]));

var G__41301 = (i__31527__auto___41300 + (1));
i__31527__auto___41300 = G__41301;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warn",args__41108__auto__);
});

antizer.reagent.notification_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warn.cljs$lang$applyTo = (function (seq41240){
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41240));
});


antizer.reagent.notification_warning = (function antizer$reagent$notification_warning(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41302 = arguments.length;
var i__31527__auto___41303 = (0);
while(true){
if((i__31527__auto___41303 < len__31526__auto___41302)){
args__31533__auto__.push((arguments[i__31527__auto___41303]));

var G__41304 = (i__31527__auto___41303 + (1));
i__31527__auto___41303 = G__41304;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((0) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__31534__auto__);
});

antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__41108__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warning",args__41108__auto__);
});

antizer.reagent.notification_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warning.cljs$lang$applyTo = (function (seq41241){
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41241));
});

antizer.reagent.locales = (function antizer$reagent$locales(prop__41110__auto__){
return antizer.core.get_prop.call(null,"locales",prop__41110__auto__);
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

//# sourceMappingURL=reagent.js.map?rel=1509397944728
