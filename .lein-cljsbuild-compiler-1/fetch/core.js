goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.structs');
goog.require('goog.Uri.QueryData');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('fetch.util');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case(cljs.core.name(m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.string_QMARK_(route))
{return cljs.core.PersistentVector.fromArray(["GET",route], true);
} else
{if(cljs.core.vector_QMARK_(route))
{var vec__34506__34507 = route;
var m__34508 = cljs.core.nth.cljs$lang$arity$3(vec__34506__34507,0,null);
var u__34509 = cljs.core.nth.cljs$lang$arity$3(vec__34506__34507,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method(m__34508),u__34509], true);
} else
{if("\uFDD0'else")
{return cljs.core.PersistentVector.fromArray(["GET",route], true);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__34512 = fetch.util.clj__GT_js(d);
var query__34513 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__34512)));
return [cljs.core.str(query__34513)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__34515 = req.getResponseText();
return (callback.cljs$lang$arity$1 ? callback.cljs$lang$arity$1(data__34515) : callback.call(null,data__34515));
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__34516){
var vec__34527__34528 = p__34516;
var opts__34529 = cljs.core.nth.cljs$lang$arity$3(vec__34527__34528,0,null);
var req__34531 = (new goog.net.XhrIo());
var vec__34530__34532 = fetch.core.parse_route(route);
var method__34533 = cljs.core.nth.cljs$lang$arity$3(vec__34530__34532,0,null);
var uri__34534 = cljs.core.nth.cljs$lang$arity$3(vec__34530__34532,1,null);
var data__34535 = fetch.core.__GT_data(content);
var callback__34536 = fetch.core.__GT_callback(callback);
if(cljs.core.truth_(callback__34536))
{goog.events.listen(req__34531,goog.net.EventType.COMPLETE,(function (){
return (callback__34536.cljs$lang$arity$1 ? callback__34536.cljs$lang$arity$1(req__34531) : callback__34536.call(null,req__34531));
}));
} else
{}
return req__34531.send(uri__34534,method__34533,data__34535,(cljs.core.truth_(opts__34529)?fetch.util.clj__GT_js(opts__34529):null));
};
var xhr = function (route,content,callback,var_args){
var p__34516 = null;
if (goog.isDef(var_args)) {
  p__34516 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__34516);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__34537){
var route = cljs.core.first(arglist__34537);
var content = cljs.core.first(cljs.core.next(arglist__34537));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34537)));
var p__34516 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__34537)));
return xhr__delegate(route, content, callback, p__34516);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
