goog.provide('fetch.remotes');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('fetch.core');
fetch.remotes.remote_uri = "/_fetch";
fetch.remotes.remote_callback = (function remote_callback(remote,params,callback){
return fetch.core.xhr(cljs.core.PersistentVector.fromArray(["\uFDD0'post",fetch.remotes.remote_uri], true),cljs.core.ObjMap.fromObject(["\uFDD0'remote","\uFDD0'params"],{"\uFDD0'remote":remote,"\uFDD0'params":cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([params], 0))}),(cljs.core.truth_(callback)?(function (data){
var data__34501 = ((cljs.core._EQ_.cljs$lang$arity$2(data,""))?"nil":data);
return (callback.cljs$lang$arity$1 ? callback.cljs$lang$arity$1(cljs.reader.read_string(data__34501)) : callback.call(null,cljs.reader.read_string(data__34501)));
}):null));
});
