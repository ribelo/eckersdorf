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

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30939__auto__,k42228,else__30940__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
var G__42232 = k42228;
var G__42232__$1 = (((G__42232 instanceof cljs.core.Keyword))?G__42232.fqn:null);
switch (G__42232__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k42228,else__30940__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__42233,opts){
var self__ = this;
var map__42234 = p__42233;
var map__42234__$1 = ((((!((map__42234 == null)))?((((map__42234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42234):map__42234);
var request__$1 = cljs.core.get.call(null,map__42234__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__42236 = this;
var map__42236__$1 = ((((!((map__42236 == null)))?((((map__42236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42236):map__42236);
var request__$2 = cljs.core.get.call(null,map__42236__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__42238,xhrio){
var self__ = this;
var map__42239 = p__42238;
var map__42239__$1 = ((((!((map__42239 == null)))?((((map__42239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42239):map__42239);
var response__$1 = cljs.core.get.call(null,map__42239__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__42241 = this;
var map__42241__$1 = ((((!((map__42241 == null)))?((((map__42241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42241):map__42241);
var response__$2 = cljs.core.get.call(null,map__42241__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
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

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42227){
var self__ = this;
var G__42227__$1 = this;
return (new cljs.core.RecordIter((0),G__42227__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42229,other42230){
var self__ = this;
var this42229__$1 = this;
return (!((other42230 == null))) && ((this42229__$1.constructor === other42230.constructor)) && (cljs.core._EQ_.call(null,this42229__$1.name,other42230.name)) && (cljs.core._EQ_.call(null,this42229__$1.request,other42230.request)) && (cljs.core._EQ_.call(null,this42229__$1.response,other42230.response)) && (cljs.core._EQ_.call(null,this42229__$1.__extmap,other42230.__extmap));
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

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30944__auto__,k__30945__auto__,G__42227){
var self__ = this;
var this__30944__auto____$1 = this;
var pred__42243 = cljs.core.keyword_identical_QMARK_;
var expr__42244 = k__30945__auto__;
if(cljs.core.truth_(pred__42243.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__42244))){
return (new ajax.interceptors.StandardInterceptor(G__42227,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42243.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__42244))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__42227,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42243.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__42244))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__42227,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30945__auto__,G__42227),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30949__auto__){
var self__ = this;
var this__30949__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30936__auto__,G__42227){
var self__ = this;
var this__30936__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__42227,self__.__extmap,self__.__hash));
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

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__42231){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__42231),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__42231),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__42231),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42231,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
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
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__42247,xhrio){
var map__42248 = p__42247;
var map__42248__$1 = ((((!((map__42248 == null)))?((((map__42248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42248):map__42248);
var description = cljs.core.get.call(null,map__42248__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
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
var len__31526__auto___42254 = arguments.length;
var i__31527__auto___42255 = (0);
while(true){
if((i__31527__auto___42255 < len__31526__auto___42254)){
args__31533__auto__.push((arguments[i__31527__auto___42255]));

var G__42256 = (i__31527__auto___42255 + (1));
i__31527__auto___42255 = G__42256;
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

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq42250){
var G__42251 = cljs.core.first.call(null,seq42250);
var seq42250__$1 = cljs.core.next.call(null,seq42250);
var G__42252 = cljs.core.first.call(null,seq42250__$1);
var seq42250__$2 = cljs.core.next.call(null,seq42250__$1);
var G__42253 = cljs.core.first.call(null,seq42250__$2);
var seq42250__$3 = cljs.core.next.call(null,seq42250__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__42251,G__42252,G__42253,seq42250__$3);
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

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30939__auto__,k42259,else__30940__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
var G__42263 = k42259;
var G__42263__$1 = (((G__42263 instanceof cljs.core.Keyword))?G__42263.fqn:null);
switch (G__42263__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k42259,else__30940__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__42264,request){
var self__ = this;
var map__42265 = p__42264;
var map__42265__$1 = ((((!((map__42265 == null)))?((((map__42265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42265):map__42265);
var content_type__$1 = cljs.core.get.call(null,map__42265__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__42267 = this;
var map__42267__$1 = ((((!((map__42267 == null)))?((((map__42267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42267):map__42267);
var content_type__$2 = cljs.core.get.call(null,map__42267__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__42267,map__42267__$1,content_type__$2,map__42265,map__42265__$1,content_type__$1){
return (function (p1__42257_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__30249__auto__ = p1__42257_SHARP_;
if(cljs.core.truth_(or__30249__auto__)){
return or__30249__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__42267,map__42267__$1,content_type__$2,map__42265,map__42265__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__42269,xhrio){
var self__ = this;
var map__42270 = p__42269;
var map__42270__$1 = ((((!((map__42270 == null)))?((((map__42270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42270):map__42270);
var format = map__42270__$1;
var read__$1 = cljs.core.get.call(null,map__42270__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__42272 = this;
var map__42272__$1 = ((((!((map__42272 == null)))?((((map__42272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42272):map__42272);
var format__$1 = map__42272__$1;
var read__$2 = cljs.core.get.call(null,map__42272__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__42275 = status;
switch (G__42275) {
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
}catch (e42276){if((e42276 instanceof Object)){
var e = e42276;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e42276;

}
}
}
}catch (e42274){if((e42274 instanceof Object)){
var e = e42274;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e42274;

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

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42258){
var self__ = this;
var G__42258__$1 = this;
return (new cljs.core.RecordIter((0),G__42258__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42260,other42261){
var self__ = this;
var this42260__$1 = this;
return (!((other42261 == null))) && ((this42260__$1.constructor === other42261.constructor)) && (cljs.core._EQ_.call(null,this42260__$1.read,other42261.read)) && (cljs.core._EQ_.call(null,this42260__$1.description,other42261.description)) && (cljs.core._EQ_.call(null,this42260__$1.content_type,other42261.content_type)) && (cljs.core._EQ_.call(null,this42260__$1.__extmap,other42261.__extmap));
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

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30944__auto__,k__30945__auto__,G__42258){
var self__ = this;
var this__30944__auto____$1 = this;
var pred__42277 = cljs.core.keyword_identical_QMARK_;
var expr__42278 = k__30945__auto__;
if(cljs.core.truth_(pred__42277.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__42278))){
return (new ajax.interceptors.ResponseFormat(G__42258,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42277.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__42278))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__42258,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42277.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__42278))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__42258,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30945__auto__,G__42258),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30949__auto__){
var self__ = this;
var this__30949__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30936__auto__,G__42258){
var self__ = this;
var this__30936__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__42258,self__.__extmap,self__.__hash));
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

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__42262){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__42262),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__42262),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__42262),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42262,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
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

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30939__auto__,k42283,else__30940__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
var G__42287 = k42283;
switch (G__42287) {
default:
return cljs.core.get.call(null,self__.__extmap,k42283,else__30940__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__42288){
var self__ = this;
var map__42289 = p__42288;
var map__42289__$1 = ((((!((map__42289 == null)))?((((map__42289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42289):map__42289);
var request = map__42289__$1;
var uri = cljs.core.get.call(null,map__42289__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__42289__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__42289__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__42289__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__42289__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__42291 = ajax.interceptors.get_request_format.call(null,format);
var map__42291__$1 = ((((!((map__42291 == null)))?((((map__42291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42291):map__42291);
var write = cljs.core.get.call(null,map__42291__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__42291__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
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

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42282){
var self__ = this;
var G__42282__$1 = this;
return (new cljs.core.RecordIter((0),G__42282__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42284,other42285){
var self__ = this;
var this42284__$1 = this;
return (!((other42285 == null))) && ((this42284__$1.constructor === other42285.constructor)) && (cljs.core._EQ_.call(null,this42284__$1.__extmap,other42285.__extmap));
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

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30944__auto__,k__30945__auto__,G__42282){
var self__ = this;
var this__30944__auto____$1 = this;
var pred__42293 = cljs.core.keyword_identical_QMARK_;
var expr__42294 = k__30945__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30945__auto__,G__42282),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30949__auto__){
var self__ = this;
var this__30949__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30936__auto__,G__42282){
var self__ = this;
var this__30936__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__42282,self__.__extmap,self__.__hash));
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

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__42286){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42286)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__42298 = arguments.length;
switch (G__42298) {
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

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__42299,uri){
var map__42300 = p__42299;
var map__42300__$1 = ((((!((map__42300 == null)))?((((map__42300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42300):map__42300);
var vec_strategy = cljs.core.get.call(null,map__42300__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__42300__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__42302){
var map__42303 = p__42302;
var map__42303__$1 = ((((!((map__42303 == null)))?((((map__42303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42303):map__42303);
var vec_strategy = cljs.core.get.call(null,map__42303__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__42303__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__42303,map__42303__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__42303,map__42303__$1,vec_strategy,params))
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

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30939__auto__,k42307,else__30940__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
var G__42311 = k42307;
switch (G__42311) {
default:
return cljs.core.get.call(null,self__.__extmap,k42307,else__30940__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__42312){
var self__ = this;
var map__42313 = p__42312;
var map__42313__$1 = ((((!((map__42313 == null)))?((((map__42313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42313):map__42313);
var request = map__42313__$1;
var method = cljs.core.get.call(null,map__42313__$1,new cljs.core.Keyword(null,"method","method",55703592));
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

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42306){
var self__ = this;
var G__42306__$1 = this;
return (new cljs.core.RecordIter((0),G__42306__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42308,other42309){
var self__ = this;
var this42308__$1 = this;
return (!((other42309 == null))) && ((this42308__$1.constructor === other42309.constructor)) && (cljs.core._EQ_.call(null,this42308__$1.__extmap,other42309.__extmap));
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

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30944__auto__,k__30945__auto__,G__42306){
var self__ = this;
var this__30944__auto____$1 = this;
var pred__42315 = cljs.core.keyword_identical_QMARK_;
var expr__42316 = k__30945__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30945__auto__,G__42306),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30949__auto__){
var self__ = this;
var this__30949__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30936__auto__,G__42306){
var self__ = this;
var this__30936__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__42306,self__.__extmap,self__.__hash));
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

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__42310){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42310)),null));
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

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30939__auto__,k42320,else__30940__auto__){
var self__ = this;
var this__30939__auto____$1 = this;
var G__42324 = k42320;
switch (G__42324) {
default:
return cljs.core.get.call(null,self__.__extmap,k42320,else__30940__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__42325){
var self__ = this;
var map__42326 = p__42325;
var map__42326__$1 = ((((!((map__42326 == null)))?((((map__42326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42326):map__42326);
var request = map__42326__$1;
var body = cljs.core.get.call(null,map__42326__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42319){
var self__ = this;
var G__42319__$1 = this;
return (new cljs.core.RecordIter((0),G__42319__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42321,other42322){
var self__ = this;
var this42321__$1 = this;
return (!((other42322 == null))) && ((this42321__$1.constructor === other42322.constructor)) && (cljs.core._EQ_.call(null,this42321__$1.__extmap,other42322.__extmap));
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

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30944__auto__,k__30945__auto__,G__42319){
var self__ = this;
var this__30944__auto____$1 = this;
var pred__42328 = cljs.core.keyword_identical_QMARK_;
var expr__42329 = k__30945__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30945__auto__,G__42319),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30949__auto__){
var self__ = this;
var this__30949__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30936__auto__,G__42319){
var self__ = this;
var this__30936__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__42319,self__.__extmap,self__.__hash));
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

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__42323){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42323)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__42332){
var map__42333 = p__42332;
var map__42333__$1 = ((((!((map__42333 == null)))?((((map__42333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42333):map__42333);
var opts = map__42333__$1;
var response_format = cljs.core.get.call(null,map__42333__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
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

//# sourceMappingURL=interceptors.js.map?rel=1509397945945
