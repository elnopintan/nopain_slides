goog.provide('nopain.main');
goog.require('cljs.core');
nopain.main.map__GT_js = (function map__GT_js(m){
var out__76885 = {};
var G__76886__76887 = cljs.core.seq.call(null,m);
if(G__76886__76887)
{var G__76889__76891 = cljs.core.first.call(null,G__76886__76887);
var vec__76890__76892 = G__76889__76891;
var k__76893 = cljs.core.nth.call(null,vec__76890__76892,0,null);
var v__76894 = cljs.core.nth.call(null,vec__76890__76892,1,null);
var G__76886__76895 = G__76886__76887;
var G__76889__76896 = G__76889__76891;
var G__76886__76897 = G__76886__76895;
while(true){
var vec__76898__76899 = G__76889__76896;
var k__76900 = cljs.core.nth.call(null,vec__76898__76899,0,null);
var v__76901 = cljs.core.nth.call(null,vec__76898__76899,1,null);
var G__76886__76902 = G__76886__76897;
(out__76885[cljs.core.name.call(null,k__76900)] = v__76901);
var temp__4088__auto____76903 = cljs.core.next.call(null,G__76886__76902);
if(temp__4088__auto____76903)
{var G__76886__76904 = temp__4088__auto____76903;
{
var G__76905 = cljs.core.first.call(null,G__76886__76904);
var G__76906 = G__76886__76904;
G__76889__76896 = G__76905;
G__76886__76897 = G__76906;
continue;
}
} else
{}
break;
}
} else
{}
return out__76885;
});
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
nopain.main.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce.call(null,(function (m,p__76912){
var vec__76913__76914 = p__76912;
var k__76915 = cljs.core.nth.call(null,vec__76913__76914,0,null);
var v__76916 = cljs.core.nth.call(null,vec__76913__76914,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__76915),clj__GT_js.call(null,v__76916));
}),cljs.core.ObjMap.EMPTY,x).strobj;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
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
nopain.main.slide = cljs.core.atom.call(null,0);
nopain.main.p = require("webpage").create();
nopain.main.snapshot = (function snapshot(){
nopain.main.p.render([cljs.core.str("slide"),cljs.core.str(cljs.core.deref.call(null,nopain.main.slide)),cljs.core.str(".png")].join(''));
return cljs.core.swap_BANG_.call(null,nopain.main.slide,cljs.core.inc);
});
nopain.main.p.onCallback = (function (){
return window.setTimeout(nopain.main.snapshot,200);
});
console.log([cljs.core.str("Iniciando..."),cljs.core.str(nopain.main.p)].join(''));
nopain.main.p.viewportSize = nopain.main.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["width","height"],{"width":1280,"height":768}));
console.log(nopain.main.p.viewportSize.width);
nopain.main.p.open("http://localhost:3000",(function (p1__76917_SHARP_){
if(cljs.core.not_EQ_.call(null,p1__76917_SHARP_,"success"))
{return console.log("fallo");
} else
{return console.log("exito");
}
}));
