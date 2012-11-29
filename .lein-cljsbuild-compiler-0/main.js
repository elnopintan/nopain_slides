goog.provide('nopain.main');
goog.require('cljs.core');
nopain.main.map__GT_js = (function map__GT_js(m){
var out__6170 = {};
var G__6171__6172 = cljs.core.seq.call(null,m);
if(G__6171__6172)
{var G__6174__6176 = cljs.core.first.call(null,G__6171__6172);
var vec__6175__6177 = G__6174__6176;
var k__6178 = cljs.core.nth.call(null,vec__6175__6177,0,null);
var v__6179 = cljs.core.nth.call(null,vec__6175__6177,1,null);
var G__6171__6180 = G__6171__6172;
var G__6174__6181 = G__6174__6176;
var G__6171__6182 = G__6171__6180;
while(true){
var vec__6183__6184 = G__6174__6181;
var k__6185 = cljs.core.nth.call(null,vec__6183__6184,0,null);
var v__6186 = cljs.core.nth.call(null,vec__6183__6184,1,null);
var G__6171__6187 = G__6171__6182;
(out__6170[cljs.core.name.call(null,k__6185)] = v__6186);
var temp__4088__auto____6188 = cljs.core.next.call(null,G__6171__6187);
if(temp__4088__auto____6188)
{var G__6171__6189 = temp__4088__auto____6188;
{
var G__6190 = cljs.core.first.call(null,G__6171__6189);
var G__6191 = G__6171__6189;
G__6174__6181 = G__6190;
G__6171__6182 = G__6191;
continue;
}
} else
{}
break;
}
} else
{}
return out__6170;
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
{return cljs.core.reduce.call(null,(function (m,p__6197){
var vec__6198__6199 = p__6197;
var k__6200 = cljs.core.nth.call(null,vec__6198__6199,0,null);
var v__6201 = cljs.core.nth.call(null,vec__6198__6199,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__6200),clj__GT_js.call(null,v__6201));
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
nopain.main.p = require("webpage").create();
console.log([cljs.core.str("Iniciando..."),cljs.core.str(nopain.main.p)].join(''));
nopain.main.p.viewportSize = nopain.main.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["width","height"],{"width":800,"height":2000}));
console.log(nopain.main.p.viewportSize.width);
nopain.main.p.open("http://localhost:3000",(function (p1__6202_SHARP_){
if(cljs.core.not_EQ_.call(null,p1__6202_SHARP_,"success"))
{return console.log("fallo");
} else
{console.log("exito");
return window.setTimeout((function (){
nopain.main.p.render("prueba.pdf");
return nopain.main.p.render("prueba.jpg");
}),20000);
}
}));
