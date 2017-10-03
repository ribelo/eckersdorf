// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30937__auto__,k__30938__auto__){
var self__ = this;
var this__30937__auto____$1 = this;
return this__30937__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30938__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30939__auto__,k41515,else__30940__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
var G__41519 = k41515;
var G__41519__$1 = (((G__41519 instanceof cljs.core.Keyword))?G__41519.fqn:null);
switch (G__41519__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41515,else__30940__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__41520,opts){
var self__ = this;
var map__41521 = p__41520;
var map__41521__$1 = ((((!((map__41521 == null)))?((((map__41521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41521):map__41521);
var request__$1 = cljs.core.get.call(null,map__41521__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__41523 = this;
var map__41523__$1 = ((((!((map__41523 == null)))?((((map__41523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41523):map__41523);
var request__$2 = cljs.core.get.call(null,map__41523__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__41525,xhrio){
var self__ = this;
var map__41526 = p__41525;
var map__41526__$1 = ((((!((map__41526 == null)))?((((map__41526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41526):map__41526);
var response__$1 = cljs.core.get.call(null,map__41526__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__41528 = this;
var map__41528__$1 = ((((!((map__41528 == null)))?((((map__41528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41528):map__41528);
var response__$2 = cljs.core.get.call(null,map__41528__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30951__auto__,writer__30952__auto__,opts__30953__auto__){
var self__ = this;
var this__30951__auto____$1 = this;
var pr_pair__30954__auto__ = ((function (this__30951__auto____$1){
return (function (keyval__30955__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30952__auto__,cljs.core.pr_writer,""," ","",opts__30953__auto__,keyval__30955__auto__);
});})(this__30951__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30952__auto__,pr_pair__30954__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__30953__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41514){
var self__ = this;
var G__41514__$1 = this;
return (new cljs.core.RecordIter((0),G__41514__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30935__auto__){
var self__ = this;
var this__30935__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30932__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30941__auto__){
var self__ = this;
var this__30941__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30933__auto__){
var self__ = this;
var this__30933__auto____$1 = this;
var h__30705__auto__ = self__.__hash;
if(!((h__30705__auto__ == null))){
return h__30705__auto__;
} else {
var h__30705__auto____$1 = ((function (h__30705__auto__,this__30933__auto____$1){
return (function (coll__30934__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__30934__auto__));
});})(h__30705__auto__,this__30933__auto____$1))
.call(null,this__30933__auto____$1);
self__.__hash = h__30705__auto____$1;

return h__30705__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41516,other41517){
var self__ = this;
var this41516__$1 = this;
return (!((other41517 == null))) && ((this41516__$1.constructor === other41517.constructor)) && (cljs.core._EQ_.call(null,this41516__$1.name,other41517.name)) && (cljs.core._EQ_.call(null,this41516__$1.request,other41517.request)) && (cljs.core._EQ_.call(null,this41516__$1.response,other41517.response)) && (cljs.core._EQ_.call(null,this41516__$1.__extmap,other41517.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30946__auto__,k__30947__auto__){
var self__ = this;
var this__30946__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__30947__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30946__auto____$1),self__.__meta),k__30947__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30947__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30944__auto__,k__30945__auto__,G__41514){
var self__ = this;
var this__30944__auto____$1 = this;
var pred__41530 = cljs.core.keyword_identical_QMARK_;
var expr__41531 = k__30945__auto__;
if(cljs.core.truth_(pred__41530.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__41531))){
return (new ajax.interceptors.StandardInterceptor(G__41514,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41530.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__41531))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__41514,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41530.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__41531))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__41514,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30945__auto__,G__41514),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30949__auto__){
var self__ = this;
var this__30949__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30936__auto__,G__41514){
var self__ = this;
var this__30936__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__41514,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30942__auto__,entry__30943__auto__){
var self__ = this;
var this__30942__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30943__auto__)){
return this__30942__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30943__auto__,(0)),cljs.core._nth.call(null,entry__30943__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30942__auto____$1,entry__30943__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__30975__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__30975__auto__,writer__30976__auto__){
return cljs.core._write.call(null,writer__30976__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__41518){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__41518),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__41518),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__41518),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__41518,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__41534,xhrio){
var map__41535 = p__41534;
var map__41535__$1 = ((((!((map__41535 == null)))?((((map__41535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41535):map__41535);
var description = cljs.core.get.call(null,map__41535__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__31533__auto__ = [];
var len__31526__auto___41541 = arguments.length;
var i__31527__auto___41542 = (0);
while(true){
if((i__31527__auto___41542 < len__31526__auto___41541)){
args__31533__auto__.push((arguments[i__31527__auto___41542]));

var G__41543 = (i__31527__auto___41542 + (1));
i__31527__auto___41542 = G__41543;
continue;
} else {
}
break;
}

var argseq__31534__auto__ = ((((3) < args__31533__auto__.length))?(new cljs.core.IndexedSeq(args__31533__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31534__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq41537){
var G__41538 = cljs.core.first.call(null,seq41537);
var seq41537__$1 = cljs.core.next.call(null,seq41537);
var G__41539 = cljs.core.first.call(null,seq41537__$1);
var seq41537__$2 = cljs.core.next.call(null,seq41537__$1);
var G__41540 = cljs.core.first.call(null,seq41537__$2);
var seq41537__$3 = cljs.core.next.call(null,seq41537__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__41538,G__41539,G__41540,seq41537__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30937__auto__,k__30938__auto__){
var self__ = this;
var this__30937__auto____$1 = this;
return this__30937__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30938__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30939__auto__,k41546,else__30940__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
var G__41550 = k41546;
var G__41550__$1 = (((G__41550 instanceof cljs.core.Keyword))?G__41550.fqn:null);
switch (G__41550__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41546,else__30940__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__41551,request){
var self__ = this;
var map__41552 = p__41551;
var map__41552__$1 = ((((!((map__41552 == null)))?((((map__41552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41552):map__41552);
var content_type__$1 = cljs.core.get.call(null,map__41552__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__41554 = this;
var map__41554__$1 = ((((!((map__41554 == null)))?((((map__41554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41554):map__41554);
var content_type__$2 = cljs.core.get.call(null,map__41554__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__41554,map__41554__$1,content_type__$2,map__41552,map__41552__$1,content_type__$1){
return (function (p1__41544_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__30249__auto__ = p1__41544_SHARP_;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__41554,map__41554__$1,content_type__$2,map__41552,map__41552__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__41556,xhrio){
var self__ = this;
var map__41557 = p__41556;
var map__41557__$1 = ((((!((map__41557 == null)))?((((map__41557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41557):map__41557);
var format = map__41557__$1;
var read__$1 = cljs.core.get.call(null,map__41557__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__41559 = this;
var map__41559__$1 = ((((!((map__41559 == null)))?((((map__41559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41559):map__41559);
var format__$1 = map__41559__$1;
var read__$2 = cljs.core.get.call(null,map__41559__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__41562 = status;
switch (G__41562) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e41563){if((e41563 instanceof Object)){
var e = e41563;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e41563;

}
}
}
}catch (e41561){if((e41561 instanceof Object)){
var e = e41561;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e41561;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30951__auto__,writer__30952__auto__,opts__30953__auto__){
var self__ = this;
var this__30951__auto____$1 = this;
var pr_pair__30954__auto__ = ((function (this__30951__auto____$1){
return (function (keyval__30955__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30952__auto__,cljs.core.pr_writer,""," ","",opts__30953__auto__,keyval__30955__auto__);
});})(this__30951__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30952__auto__,pr_pair__30954__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__30953__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41545){
var self__ = this;
var G__41545__$1 = this;
return (new cljs.core.RecordIter((0),G__41545__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30935__auto__){
var self__ = this;
var this__30935__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30932__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30941__auto__){
var self__ = this;
var this__30941__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30933__auto__){
var self__ = this;
var this__30933__auto____$1 = this;
var h__30705__auto__ = self__.__hash;
if(!((h__30705__auto__ == null))){
return h__30705__auto__;
} else {
var h__30705__auto____$1 = ((function (h__30705__auto__,this__30933__auto____$1){
return (function (coll__30934__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__30934__auto__));
});})(h__30705__auto__,this__30933__auto____$1))
.call(null,this__30933__auto____$1);
self__.__hash = h__30705__auto____$1;

return h__30705__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41547,other41548){
var self__ = this;
var this41547__$1 = this;
return (!((other41548 == null))) && ((this41547__$1.constructor === other41548.constructor)) && (cljs.core._EQ_.call(null,this41547__$1.read,other41548.read)) && (cljs.core._EQ_.call(null,this41547__$1.description,other41548.description)) && (cljs.core._EQ_.call(null,this41547__$1.content_type,other41548.content_type)) && (cljs.core._EQ_.call(null,this41547__$1.__extmap,other41548.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30946__auto__,k__30947__auto__){
var self__ = this;
var this__30946__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__30947__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30946__auto____$1),self__.__meta),k__30947__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30947__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30944__auto__,k__30945__auto__,G__41545){
var self__ = this;
var this__30944__auto____$1 = this;
var pred__41564 = cljs.core.keyword_identical_QMARK_;
var expr__41565 = k__30945__auto__;
if(cljs.core.truth_(pred__41564.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__41565))){
return (new ajax.interceptors.ResponseFormat(G__41545,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41564.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__41565))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__41545,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41564.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__41565))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__41545,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30945__auto__,G__41545),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30949__auto__){
var self__ = this;
var this__30949__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30936__auto__,G__41545){
var self__ = this;
var this__30936__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__41545,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30942__auto__,entry__30943__auto__){
var self__ = this;
var this__30942__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30943__auto__)){
return this__30942__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30943__auto__,(0)),cljs.core._nth.call(null,entry__30943__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30942__auto____$1,entry__30943__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__30975__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__30975__auto__,writer__30976__auto__){
return cljs.core._write.call(null,writer__30976__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__41549){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__41549),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__41549),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__41549),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__41549,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30937__auto__,k__30938__auto__){
var self__ = this;
var this__30937__auto____$1 = this;
return this__30937__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30938__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30939__auto__,k41570,else__30940__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
var G__41574 = k41570;
switch (G__41574) {
default:
return cljs.core.get.call(null,self__.__extmap,k41570,else__30940__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__41575){
var self__ = this;
var map__41576 = p__41575;
var map__41576__$1 = ((((!((map__41576 == null)))?((((map__41576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41576):map__41576);
var request = map__41576__$1;
var uri = cljs.core.get.call(null,map__41576__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__41576__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__41576__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__41576__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__41576__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__41578 = ajax.interceptors.get_request_format.call(null,format);
var map__41578__$1 = ((((!((map__41578 == null)))?((((map__41578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41578):map__41578);
var write = cljs.core.get.call(null,map__41578__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__41578__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__30249__auto__ = headers;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30951__auto__,writer__30952__auto__,opts__30953__auto__){
var self__ = this;
var this__30951__auto____$1 = this;
var pr_pair__30954__auto__ = ((function (this__30951__auto____$1){
return (function (keyval__30955__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30952__auto__,cljs.core.pr_writer,""," ","",opts__30953__auto__,keyval__30955__auto__);
});})(this__30951__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30952__auto__,pr_pair__30954__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__30953__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41569){
var self__ = this;
var G__41569__$1 = this;
return (new cljs.core.RecordIter((0),G__41569__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30935__auto__){
var self__ = this;
var this__30935__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30932__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30941__auto__){
var self__ = this;
var this__30941__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30933__auto__){
var self__ = this;
var this__30933__auto____$1 = this;
var h__30705__auto__ = self__.__hash;
if(!((h__30705__auto__ == null))){
return h__30705__auto__;
} else {
var h__30705__auto____$1 = ((function (h__30705__auto__,this__30933__auto____$1){
return (function (coll__30934__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__30934__auto__));
});})(h__30705__auto__,this__30933__auto____$1))
.call(null,this__30933__auto____$1);
self__.__hash = h__30705__auto____$1;

return h__30705__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41571,other41572){
var self__ = this;
var this41571__$1 = this;
return (!((other41572 == null))) && ((this41571__$1.constructor === other41572.constructor)) && (cljs.core._EQ_.call(null,this41571__$1.__extmap,other41572.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30946__auto__,k__30947__auto__){
var self__ = this;
var this__30946__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30947__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30946__auto____$1),self__.__meta),k__30947__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30947__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30944__auto__,k__30945__auto__,G__41569){
var self__ = this;
var this__30944__auto____$1 = this;
var pred__41580 = cljs.core.keyword_identical_QMARK_;
var expr__41581 = k__30945__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30945__auto__,G__41569),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30949__auto__){
var self__ = this;
var this__30949__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30936__auto__,G__41569){
var self__ = this;
var this__30936__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__41569,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30942__auto__,entry__30943__auto__){
var self__ = this;
var this__30942__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30943__auto__)){
return this__30942__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30943__auto__,(0)),cljs.core._nth.call(null,entry__30943__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30942__auto____$1,entry__30943__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__30975__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__30975__auto__,writer__30976__auto__){
return cljs.core._write.call(null,writer__30976__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__41573){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__41573)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__41585 = arguments.length;
switch (G__41585) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__41586,uri){
var map__41587 = p__41586;
var map__41587__$1 = ((((!((map__41587 == null)))?((((map__41587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41587):map__41587);
var vec_strategy = cljs.core.get.call(null,map__41587__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__41587__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__41589){
var map__41590 = p__41589;
var map__41590__$1 = ((((!((map__41590 == null)))?((((map__41590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41590):map__41590);
var vec_strategy = cljs.core.get.call(null,map__41590__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__41590__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__41590,map__41590__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__41590,map__41590__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30937__auto__,k__30938__auto__){
var self__ = this;
var this__30937__auto____$1 = this;
return this__30937__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30938__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30939__auto__,k41594,else__30940__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
var G__41598 = k41594;
switch (G__41598) {
default:
return cljs.core.get.call(null,self__.__extmap,k41594,else__30940__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__41599){
var self__ = this;
var map__41600 = p__41599;
var map__41600__$1 = ((((!((map__41600 == null)))?((((map__41600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41600):map__41600);
var request = map__41600__$1;
var method = cljs.core.get.call(null,map__41600__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30951__auto__,writer__30952__auto__,opts__30953__auto__){
var self__ = this;
var this__30951__auto____$1 = this;
var pr_pair__30954__auto__ = ((function (this__30951__auto____$1){
return (function (keyval__30955__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30952__auto__,cljs.core.pr_writer,""," ","",opts__30953__auto__,keyval__30955__auto__);
});})(this__30951__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30952__auto__,pr_pair__30954__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__30953__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41593){
var self__ = this;
var G__41593__$1 = this;
return (new cljs.core.RecordIter((0),G__41593__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30935__auto__){
var self__ = this;
var this__30935__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30932__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30941__auto__){
var self__ = this;
var this__30941__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30933__auto__){
var self__ = this;
var this__30933__auto____$1 = this;
var h__30705__auto__ = self__.__hash;
if(!((h__30705__auto__ == null))){
return h__30705__auto__;
} else {
var h__30705__auto____$1 = ((function (h__30705__auto__,this__30933__auto____$1){
return (function (coll__30934__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__30934__auto__));
});})(h__30705__auto__,this__30933__auto____$1))
.call(null,this__30933__auto____$1);
self__.__hash = h__30705__auto____$1;

return h__30705__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41595,other41596){
var self__ = this;
var this41595__$1 = this;
return (!((other41596 == null))) && ((this41595__$1.constructor === other41596.constructor)) && (cljs.core._EQ_.call(null,this41595__$1.__extmap,other41596.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30946__auto__,k__30947__auto__){
var self__ = this;
var this__30946__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30947__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30946__auto____$1),self__.__meta),k__30947__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30947__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30944__auto__,k__30945__auto__,G__41593){
var self__ = this;
var this__30944__auto____$1 = this;
var pred__41602 = cljs.core.keyword_identical_QMARK_;
var expr__41603 = k__30945__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30945__auto__,G__41593),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30949__auto__){
var self__ = this;
var this__30949__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30936__auto__,G__41593){
var self__ = this;
var this__30936__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__41593,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30942__auto__,entry__30943__auto__){
var self__ = this;
var this__30942__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30943__auto__)){
return this__30942__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30943__auto__,(0)),cljs.core._nth.call(null,entry__30943__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30942__auto____$1,entry__30943__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__30975__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__30975__auto__,writer__30976__auto__){
return cljs.core._write.call(null,writer__30976__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__41597){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__41597)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30937__auto__,k__30938__auto__){
var self__ = this;
var this__30937__auto____$1 = this;
return this__30937__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30938__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30939__auto__,k41607,else__30940__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
var G__41611 = k41607;
switch (G__41611) {
default:
return cljs.core.get.call(null,self__.__extmap,k41607,else__30940__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__41612){
var self__ = this;
var map__41613 = p__41612;
var map__41613__$1 = ((((!((map__41613 == null)))?((((map__41613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41613):map__41613);
var request = map__41613__$1;
var body = cljs.core.get.call(null,map__41613__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30951__auto__,writer__30952__auto__,opts__30953__auto__){
var self__ = this;
var this__30951__auto____$1 = this;
var pr_pair__30954__auto__ = ((function (this__30951__auto____$1){
return (function (keyval__30955__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30952__auto__,cljs.core.pr_writer,""," ","",opts__30953__auto__,keyval__30955__auto__);
});})(this__30951__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30952__auto__,pr_pair__30954__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__30953__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41606){
var self__ = this;
var G__41606__$1 = this;
return (new cljs.core.RecordIter((0),G__41606__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30935__auto__){
var self__ = this;
var this__30935__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30932__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30941__auto__){
var self__ = this;
var this__30941__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30933__auto__){
var self__ = this;
var this__30933__auto____$1 = this;
var h__30705__auto__ = self__.__hash;
if(!((h__30705__auto__ == null))){
return h__30705__auto__;
} else {
var h__30705__auto____$1 = ((function (h__30705__auto__,this__30933__auto____$1){
return (function (coll__30934__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__30934__auto__));
});})(h__30705__auto__,this__30933__auto____$1))
.call(null,this__30933__auto____$1);
self__.__hash = h__30705__auto____$1;

return h__30705__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41608,other41609){
var self__ = this;
var this41608__$1 = this;
return (!((other41609 == null))) && ((this41608__$1.constructor === other41609.constructor)) && (cljs.core._EQ_.call(null,this41608__$1.__extmap,other41609.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30946__auto__,k__30947__auto__){
var self__ = this;
var this__30946__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30947__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30946__auto____$1),self__.__meta),k__30947__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30947__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30944__auto__,k__30945__auto__,G__41606){
var self__ = this;
var this__30944__auto____$1 = this;
var pred__41615 = cljs.core.keyword_identical_QMARK_;
var expr__41616 = k__30945__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30945__auto__,G__41606),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30949__auto__){
var self__ = this;
var this__30949__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30936__auto__,G__41606){
var self__ = this;
var this__30936__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__41606,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30942__auto__,entry__30943__auto__){
var self__ = this;
var this__30942__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30943__auto__)){
return this__30942__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30943__auto__,(0)),cljs.core._nth.call(null,entry__30943__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30942__auto____$1,entry__30943__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__30975__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__30975__auto__,writer__30976__auto__){
return cljs.core._write.call(null,writer__30976__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__41610){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__41610)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__41619){
var map__41620 = p__41619;
var map__41620__$1 = ((((!((map__41620 == null)))?((((map__41620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41620):map__41620);
var opts = map__41620__$1;
var response_format = cljs.core.get.call(null,map__41620__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map?rel=1507056175663
