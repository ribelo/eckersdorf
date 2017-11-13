// Compiled by ClojureScript 1.9.946 {}
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
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31210__auto__,k__31211__auto__){
var self__ = this;
var this__31210__auto____$1 = this;
return this__31210__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31211__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31212__auto__,k42716,else__31213__auto__){
var self__ = this;
var this__31212__auto____$1 = this;
var G__42720 = k42716;
var G__42720__$1 = (((G__42720 instanceof cljs.core.Keyword))?G__42720.fqn:null);
switch (G__42720__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k42716,else__31213__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__42721,opts){
var self__ = this;
var map__42722 = p__42721;
var map__42722__$1 = ((((!((map__42722 == null)))?((((map__42722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42722):map__42722);
var request__$1 = cljs.core.get.call(null,map__42722__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__42724 = this;
var map__42724__$1 = ((((!((map__42724 == null)))?((((map__42724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42724):map__42724);
var request__$2 = cljs.core.get.call(null,map__42724__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__42726,xhrio){
var self__ = this;
var map__42727 = p__42726;
var map__42727__$1 = ((((!((map__42727 == null)))?((((map__42727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42727):map__42727);
var response__$1 = cljs.core.get.call(null,map__42727__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__42729 = this;
var map__42729__$1 = ((((!((map__42729 == null)))?((((map__42729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42729):map__42729);
var response__$2 = cljs.core.get.call(null,map__42729__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31224__auto__,writer__31225__auto__,opts__31226__auto__){
var self__ = this;
var this__31224__auto____$1 = this;
var pr_pair__31227__auto__ = ((function (this__31224__auto____$1){
return (function (keyval__31228__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31225__auto__,cljs.core.pr_writer,""," ","",opts__31226__auto__,keyval__31228__auto__);
});})(this__31224__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31225__auto__,pr_pair__31227__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__31226__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42715){
var self__ = this;
var G__42715__$1 = this;
return (new cljs.core.RecordIter((0),G__42715__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31208__auto__){
var self__ = this;
var this__31208__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31205__auto__){
var self__ = this;
var this__31205__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31214__auto__){
var self__ = this;
var this__31214__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31206__auto__){
var self__ = this;
var this__31206__auto____$1 = this;
var h__30978__auto__ = self__.__hash;
if(!((h__30978__auto__ == null))){
return h__30978__auto__;
} else {
var h__30978__auto____$1 = ((function (h__30978__auto__,this__31206__auto____$1){
return (function (coll__31207__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__31207__auto__));
});})(h__30978__auto__,this__31206__auto____$1))
.call(null,this__31206__auto____$1);
self__.__hash = h__30978__auto____$1;

return h__30978__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42717,other42718){
var self__ = this;
var this42717__$1 = this;
return (!((other42718 == null))) && ((this42717__$1.constructor === other42718.constructor)) && (cljs.core._EQ_.call(null,this42717__$1.name,other42718.name)) && (cljs.core._EQ_.call(null,this42717__$1.request,other42718.request)) && (cljs.core._EQ_.call(null,this42717__$1.response,other42718.response)) && (cljs.core._EQ_.call(null,this42717__$1.__extmap,other42718.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31219__auto__,k__31220__auto__){
var self__ = this;
var this__31219__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__31220__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31219__auto____$1),self__.__meta),k__31220__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31220__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31217__auto__,k__31218__auto__,G__42715){
var self__ = this;
var this__31217__auto____$1 = this;
var pred__42731 = cljs.core.keyword_identical_QMARK_;
var expr__42732 = k__31218__auto__;
if(cljs.core.truth_(pred__42731.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__42732))){
return (new ajax.interceptors.StandardInterceptor(G__42715,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42731.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__42732))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__42715,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42731.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__42732))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__42715,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31218__auto__,G__42715),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31222__auto__){
var self__ = this;
var this__31222__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31209__auto__,G__42715){
var self__ = this;
var this__31209__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__42715,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31215__auto__,entry__31216__auto__){
var self__ = this;
var this__31215__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31216__auto__)){
return this__31215__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31216__auto__,(0)),cljs.core._nth.call(null,entry__31216__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31215__auto____$1,entry__31216__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__31248__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__31248__auto__,writer__31249__auto__){
return cljs.core._write.call(null,writer__31249__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__42719){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__42719),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__42719),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__42719),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42719,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
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
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__42735,xhrio){
var map__42736 = p__42735;
var map__42736__$1 = ((((!((map__42736 == null)))?((((map__42736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42736):map__42736);
var description = cljs.core.get.call(null,map__42736__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
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
var args__31808__auto__ = [];
var len__31801__auto___42742 = arguments.length;
var i__31802__auto___42743 = (0);
while(true){
if((i__31802__auto___42743 < len__31801__auto___42742)){
args__31808__auto__.push((arguments[i__31802__auto___42743]));

var G__42744 = (i__31802__auto___42743 + (1));
i__31802__auto___42743 = G__42744;
continue;
} else {
}
break;
}

var argseq__31809__auto__ = ((((3) < args__31808__auto__.length))?(new cljs.core.IndexedSeq(args__31808__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31809__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq42738){
var G__42739 = cljs.core.first.call(null,seq42738);
var seq42738__$1 = cljs.core.next.call(null,seq42738);
var G__42740 = cljs.core.first.call(null,seq42738__$1);
var seq42738__$2 = cljs.core.next.call(null,seq42738__$1);
var G__42741 = cljs.core.first.call(null,seq42738__$2);
var seq42738__$3 = cljs.core.next.call(null,seq42738__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__42739,G__42740,G__42741,seq42738__$3);
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
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31210__auto__,k__31211__auto__){
var self__ = this;
var this__31210__auto____$1 = this;
return this__31210__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31211__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31212__auto__,k42747,else__31213__auto__){
var self__ = this;
var this__31212__auto____$1 = this;
var G__42751 = k42747;
var G__42751__$1 = (((G__42751 instanceof cljs.core.Keyword))?G__42751.fqn:null);
switch (G__42751__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k42747,else__31213__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__42752,request){
var self__ = this;
var map__42753 = p__42752;
var map__42753__$1 = ((((!((map__42753 == null)))?((((map__42753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42753):map__42753);
var content_type__$1 = cljs.core.get.call(null,map__42753__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__42755 = this;
var map__42755__$1 = ((((!((map__42755 == null)))?((((map__42755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42755):map__42755);
var content_type__$2 = cljs.core.get.call(null,map__42755__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__42755,map__42755__$1,content_type__$2,map__42753,map__42753__$1,content_type__$1){
return (function (p1__42745_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__30522__auto__ = p1__42745_SHARP_;
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__42755,map__42755__$1,content_type__$2,map__42753,map__42753__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__42757,xhrio){
var self__ = this;
var map__42758 = p__42757;
var map__42758__$1 = ((((!((map__42758 == null)))?((((map__42758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42758):map__42758);
var format = map__42758__$1;
var read__$1 = cljs.core.get.call(null,map__42758__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__42760 = this;
var map__42760__$1 = ((((!((map__42760 == null)))?((((map__42760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42760):map__42760);
var format__$1 = map__42760__$1;
var read__$2 = cljs.core.get.call(null,map__42760__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__42763 = status;
switch (G__42763) {
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
}catch (e42764){if((e42764 instanceof Object)){
var e = e42764;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e42764;

}
}
}
}catch (e42762){if((e42762 instanceof Object)){
var e = e42762;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e42762;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31224__auto__,writer__31225__auto__,opts__31226__auto__){
var self__ = this;
var this__31224__auto____$1 = this;
var pr_pair__31227__auto__ = ((function (this__31224__auto____$1){
return (function (keyval__31228__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31225__auto__,cljs.core.pr_writer,""," ","",opts__31226__auto__,keyval__31228__auto__);
});})(this__31224__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31225__auto__,pr_pair__31227__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__31226__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42746){
var self__ = this;
var G__42746__$1 = this;
return (new cljs.core.RecordIter((0),G__42746__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31208__auto__){
var self__ = this;
var this__31208__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31205__auto__){
var self__ = this;
var this__31205__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31214__auto__){
var self__ = this;
var this__31214__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31206__auto__){
var self__ = this;
var this__31206__auto____$1 = this;
var h__30978__auto__ = self__.__hash;
if(!((h__30978__auto__ == null))){
return h__30978__auto__;
} else {
var h__30978__auto____$1 = ((function (h__30978__auto__,this__31206__auto____$1){
return (function (coll__31207__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__31207__auto__));
});})(h__30978__auto__,this__31206__auto____$1))
.call(null,this__31206__auto____$1);
self__.__hash = h__30978__auto____$1;

return h__30978__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42748,other42749){
var self__ = this;
var this42748__$1 = this;
return (!((other42749 == null))) && ((this42748__$1.constructor === other42749.constructor)) && (cljs.core._EQ_.call(null,this42748__$1.read,other42749.read)) && (cljs.core._EQ_.call(null,this42748__$1.description,other42749.description)) && (cljs.core._EQ_.call(null,this42748__$1.content_type,other42749.content_type)) && (cljs.core._EQ_.call(null,this42748__$1.__extmap,other42749.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31219__auto__,k__31220__auto__){
var self__ = this;
var this__31219__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__31220__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31219__auto____$1),self__.__meta),k__31220__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31220__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31217__auto__,k__31218__auto__,G__42746){
var self__ = this;
var this__31217__auto____$1 = this;
var pred__42765 = cljs.core.keyword_identical_QMARK_;
var expr__42766 = k__31218__auto__;
if(cljs.core.truth_(pred__42765.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__42766))){
return (new ajax.interceptors.ResponseFormat(G__42746,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42765.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__42766))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__42746,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42765.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__42766))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__42746,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31218__auto__,G__42746),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31222__auto__){
var self__ = this;
var this__31222__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31209__auto__,G__42746){
var self__ = this;
var this__31209__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__42746,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31215__auto__,entry__31216__auto__){
var self__ = this;
var this__31215__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31216__auto__)){
return this__31215__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31216__auto__,(0)),cljs.core._nth.call(null,entry__31216__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31215__auto____$1,entry__31216__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__31248__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__31248__auto__,writer__31249__auto__){
return cljs.core._write.call(null,writer__31249__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__42750){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__42750),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__42750),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__42750),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42750,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
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
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31210__auto__,k__31211__auto__){
var self__ = this;
var this__31210__auto____$1 = this;
return this__31210__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31211__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31212__auto__,k42771,else__31213__auto__){
var self__ = this;
var this__31212__auto____$1 = this;
var G__42775 = k42771;
switch (G__42775) {
default:
return cljs.core.get.call(null,self__.__extmap,k42771,else__31213__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__42776){
var self__ = this;
var map__42777 = p__42776;
var map__42777__$1 = ((((!((map__42777 == null)))?((((map__42777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42777):map__42777);
var request = map__42777__$1;
var uri = cljs.core.get.call(null,map__42777__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__42777__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__42777__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__42777__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__42777__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__42779 = ajax.interceptors.get_request_format.call(null,format);
var map__42779__$1 = ((((!((map__42779 == null)))?((((map__42779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42779):map__42779);
var write = cljs.core.get.call(null,map__42779__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__42779__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__30522__auto__ = headers;
if(cljs.core.truth_(or__30522__auto__)){
return or__30522__auto__;
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

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31224__auto__,writer__31225__auto__,opts__31226__auto__){
var self__ = this;
var this__31224__auto____$1 = this;
var pr_pair__31227__auto__ = ((function (this__31224__auto____$1){
return (function (keyval__31228__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31225__auto__,cljs.core.pr_writer,""," ","",opts__31226__auto__,keyval__31228__auto__);
});})(this__31224__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31225__auto__,pr_pair__31227__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__31226__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42770){
var self__ = this;
var G__42770__$1 = this;
return (new cljs.core.RecordIter((0),G__42770__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31208__auto__){
var self__ = this;
var this__31208__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31205__auto__){
var self__ = this;
var this__31205__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31214__auto__){
var self__ = this;
var this__31214__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31206__auto__){
var self__ = this;
var this__31206__auto____$1 = this;
var h__30978__auto__ = self__.__hash;
if(!((h__30978__auto__ == null))){
return h__30978__auto__;
} else {
var h__30978__auto____$1 = ((function (h__30978__auto__,this__31206__auto____$1){
return (function (coll__31207__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__31207__auto__));
});})(h__30978__auto__,this__31206__auto____$1))
.call(null,this__31206__auto____$1);
self__.__hash = h__30978__auto____$1;

return h__30978__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42772,other42773){
var self__ = this;
var this42772__$1 = this;
return (!((other42773 == null))) && ((this42772__$1.constructor === other42773.constructor)) && (cljs.core._EQ_.call(null,this42772__$1.__extmap,other42773.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31219__auto__,k__31220__auto__){
var self__ = this;
var this__31219__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__31220__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31219__auto____$1),self__.__meta),k__31220__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31220__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31217__auto__,k__31218__auto__,G__42770){
var self__ = this;
var this__31217__auto____$1 = this;
var pred__42781 = cljs.core.keyword_identical_QMARK_;
var expr__42782 = k__31218__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31218__auto__,G__42770),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31222__auto__){
var self__ = this;
var this__31222__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31209__auto__,G__42770){
var self__ = this;
var this__31209__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__42770,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31215__auto__,entry__31216__auto__){
var self__ = this;
var this__31215__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31216__auto__)){
return this__31215__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31216__auto__,(0)),cljs.core._nth.call(null,entry__31216__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31215__auto____$1,entry__31216__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__31248__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__31248__auto__,writer__31249__auto__){
return cljs.core._write.call(null,writer__31249__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__42774){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42774)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__42786 = arguments.length;
switch (G__42786) {
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

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__42787,uri){
var map__42788 = p__42787;
var map__42788__$1 = ((((!((map__42788 == null)))?((((map__42788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42788):map__42788);
var vec_strategy = cljs.core.get.call(null,map__42788__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__42788__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__42790){
var map__42791 = p__42790;
var map__42791__$1 = ((((!((map__42791 == null)))?((((map__42791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42791):map__42791);
var vec_strategy = cljs.core.get.call(null,map__42791__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__42791__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__42791,map__42791__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__42791,map__42791__$1,vec_strategy,params))
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
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31210__auto__,k__31211__auto__){
var self__ = this;
var this__31210__auto____$1 = this;
return this__31210__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31211__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31212__auto__,k42795,else__31213__auto__){
var self__ = this;
var this__31212__auto____$1 = this;
var G__42799 = k42795;
switch (G__42799) {
default:
return cljs.core.get.call(null,self__.__extmap,k42795,else__31213__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__42800){
var self__ = this;
var map__42801 = p__42800;
var map__42801__$1 = ((((!((map__42801 == null)))?((((map__42801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42801):map__42801);
var request = map__42801__$1;
var method = cljs.core.get.call(null,map__42801__$1,new cljs.core.Keyword(null,"method","method",55703592));
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

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31224__auto__,writer__31225__auto__,opts__31226__auto__){
var self__ = this;
var this__31224__auto____$1 = this;
var pr_pair__31227__auto__ = ((function (this__31224__auto____$1){
return (function (keyval__31228__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31225__auto__,cljs.core.pr_writer,""," ","",opts__31226__auto__,keyval__31228__auto__);
});})(this__31224__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31225__auto__,pr_pair__31227__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__31226__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42794){
var self__ = this;
var G__42794__$1 = this;
return (new cljs.core.RecordIter((0),G__42794__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31208__auto__){
var self__ = this;
var this__31208__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31205__auto__){
var self__ = this;
var this__31205__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31214__auto__){
var self__ = this;
var this__31214__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31206__auto__){
var self__ = this;
var this__31206__auto____$1 = this;
var h__30978__auto__ = self__.__hash;
if(!((h__30978__auto__ == null))){
return h__30978__auto__;
} else {
var h__30978__auto____$1 = ((function (h__30978__auto__,this__31206__auto____$1){
return (function (coll__31207__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__31207__auto__));
});})(h__30978__auto__,this__31206__auto____$1))
.call(null,this__31206__auto____$1);
self__.__hash = h__30978__auto____$1;

return h__30978__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42796,other42797){
var self__ = this;
var this42796__$1 = this;
return (!((other42797 == null))) && ((this42796__$1.constructor === other42797.constructor)) && (cljs.core._EQ_.call(null,this42796__$1.__extmap,other42797.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31219__auto__,k__31220__auto__){
var self__ = this;
var this__31219__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__31220__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31219__auto____$1),self__.__meta),k__31220__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31220__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31217__auto__,k__31218__auto__,G__42794){
var self__ = this;
var this__31217__auto____$1 = this;
var pred__42803 = cljs.core.keyword_identical_QMARK_;
var expr__42804 = k__31218__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31218__auto__,G__42794),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31222__auto__){
var self__ = this;
var this__31222__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31209__auto__,G__42794){
var self__ = this;
var this__31209__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__42794,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31215__auto__,entry__31216__auto__){
var self__ = this;
var this__31215__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31216__auto__)){
return this__31215__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31216__auto__,(0)),cljs.core._nth.call(null,entry__31216__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31215__auto____$1,entry__31216__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__31248__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__31248__auto__,writer__31249__auto__){
return cljs.core._write.call(null,writer__31249__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__42798){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42798)),null));
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
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31210__auto__,k__31211__auto__){
var self__ = this;
var this__31210__auto____$1 = this;
return this__31210__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31211__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31212__auto__,k42808,else__31213__auto__){
var self__ = this;
var this__31212__auto____$1 = this;
var G__42812 = k42808;
switch (G__42812) {
default:
return cljs.core.get.call(null,self__.__extmap,k42808,else__31213__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__42813){
var self__ = this;
var map__42814 = p__42813;
var map__42814__$1 = ((((!((map__42814 == null)))?((((map__42814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42814):map__42814);
var request = map__42814__$1;
var body = cljs.core.get.call(null,map__42814__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31224__auto__,writer__31225__auto__,opts__31226__auto__){
var self__ = this;
var this__31224__auto____$1 = this;
var pr_pair__31227__auto__ = ((function (this__31224__auto____$1){
return (function (keyval__31228__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31225__auto__,cljs.core.pr_writer,""," ","",opts__31226__auto__,keyval__31228__auto__);
});})(this__31224__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31225__auto__,pr_pair__31227__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__31226__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42807){
var self__ = this;
var G__42807__$1 = this;
return (new cljs.core.RecordIter((0),G__42807__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31208__auto__){
var self__ = this;
var this__31208__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31205__auto__){
var self__ = this;
var this__31205__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31214__auto__){
var self__ = this;
var this__31214__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31206__auto__){
var self__ = this;
var this__31206__auto____$1 = this;
var h__30978__auto__ = self__.__hash;
if(!((h__30978__auto__ == null))){
return h__30978__auto__;
} else {
var h__30978__auto____$1 = ((function (h__30978__auto__,this__31206__auto____$1){
return (function (coll__31207__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__31207__auto__));
});})(h__30978__auto__,this__31206__auto____$1))
.call(null,this__31206__auto____$1);
self__.__hash = h__30978__auto____$1;

return h__30978__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42809,other42810){
var self__ = this;
var this42809__$1 = this;
return (!((other42810 == null))) && ((this42809__$1.constructor === other42810.constructor)) && (cljs.core._EQ_.call(null,this42809__$1.__extmap,other42810.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31219__auto__,k__31220__auto__){
var self__ = this;
var this__31219__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__31220__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31219__auto____$1),self__.__meta),k__31220__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31220__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31217__auto__,k__31218__auto__,G__42807){
var self__ = this;
var this__31217__auto____$1 = this;
var pred__42816 = cljs.core.keyword_identical_QMARK_;
var expr__42817 = k__31218__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31218__auto__,G__42807),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31222__auto__){
var self__ = this;
var this__31222__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31209__auto__,G__42807){
var self__ = this;
var this__31209__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__42807,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31215__auto__,entry__31216__auto__){
var self__ = this;
var this__31215__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31216__auto__)){
return this__31215__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31216__auto__,(0)),cljs.core._nth.call(null,entry__31216__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31215__auto____$1,entry__31216__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__31248__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__31248__auto__,writer__31249__auto__){
return cljs.core._write.call(null,writer__31249__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__42811){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42811)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__42820){
var map__42821 = p__42820;
var map__42821__$1 = ((((!((map__42821 == null)))?((((map__42821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42821):map__42821);
var opts = map__42821__$1;
var response_format = cljs.core.get.call(null,map__42821__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
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

//# sourceMappingURL=interceptors.js.map?rel=1510602149468
