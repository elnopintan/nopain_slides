goog.provide('fetch.util');
goog.require('cljs.core');
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
fetch.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.string_QMARK_(x))
{return x;
} else
{if(cljs.core.keyword_QMARK_(x))
{return cljs.core.name(x);
} else
{if(cljs.core.map_QMARK_(x))
{return cljs.core.reduce.cljs$lang$arity$3((function (m,p__34543){
var vec__34544__34545 = p__34543;
var k__34546 = cljs.core.nth.cljs$lang$arity$3(vec__34544__34545,0,null);
var v__34547 = cljs.core.nth.cljs$lang$arity$3(vec__34544__34545,1,null);
return cljs.core.assoc.cljs$lang$arity$3(m,clj__GT_js(k__34546),clj__GT_js(v__34547));
}),cljs.core.ObjMap.EMPTY,x).strobj;
} else
{if(cljs.core.coll_QMARK_(x))
{return cljs.core.apply.cljs$lang$arity$2(cljs.core.array,cljs.core.map.cljs$lang$arity$2(clj__GT_js,x));
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
