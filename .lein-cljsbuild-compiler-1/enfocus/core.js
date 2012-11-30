goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.classes');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('goog.Timer');
goog.require('goog.style');
goog.require('domina');
goog.require('goog.net.XhrIo');
goog.require('domina.css');
goog.require('goog.fx');
enfocus.core.debug = false;
enfocus.core.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3937__auto____33420 = enfocus.core.debug;
if(cljs.core.truth_(and__3937__auto____33420))
{return !(cljs.core._EQ_.cljs$lang$arity$2(window.console,undefined));
} else
{return and__3937__auto____33420;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){
return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){
return cljs.core.instance_QMARK_(NodeList,tst);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){
if(cljs.core._EQ_.cljs$lang$arity$2(nl,window))
{return cljs.core.PersistentVector.fromArray([nl], true);
} else
{return domina.nodes(nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.cljs$lang$arity$2((function (p1__33421_SHARP_){
if(cljs.core.string_QMARK_(p1__33421_SHARP_))
{return cljs.core.PersistentVector.fromArray([goog.dom.createTextNode(p1__33421_SHARP_)], true);
} else
{if("\uFDD0'else")
{return enfocus.core.nodes__GT_coll(p1__33421_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var G__33441__33442 = cljs.core.seq(cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,values));
if(G__33441__33442)
{var G__33444__33446 = cljs.core.first(G__33441__33442);
var vec__33445__33447 = G__33444__33446;
var attr__33448 = cljs.core.nth.cljs$lang$arity$3(vec__33445__33447,0,null);
var value__33449 = cljs.core.nth.cljs$lang$arity$3(vec__33445__33447,1,null);
var G__33441__33450 = G__33441__33442;
var G__33444__33451 = G__33444__33446;
var G__33441__33452 = G__33441__33450;
while(true){
var vec__33453__33454 = G__33444__33451;
var attr__33455 = cljs.core.nth.cljs$lang$arity$3(vec__33453__33454,0,null);
var value__33456 = cljs.core.nth.cljs$lang$arity$3(vec__33453__33454,1,null);
var G__33441__33457 = G__33441__33452;
goog.style.setStyle(obj,cljs.core.name(attr__33455),value__33456);
var temp__4088__auto____33458 = cljs.core.next(G__33441__33457);
if(temp__4088__auto____33458)
{var G__33441__33459 = temp__4088__auto____33458;
{
var G__33460 = cljs.core.first(G__33441__33459);
var G__33461 = G__33441__33459;
G__33444__33451 = G__33460;
G__33441__33452 = G__33461;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){
var G__33468__33469 = cljs.core.seq(values);
if(G__33468__33469)
{var attr__33470 = cljs.core.first(G__33468__33469);
var G__33468__33471 = G__33468__33469;
while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name(attr__33470),"");
} else
{obj.style.removeProperty(cljs.core.name(attr__33470));
}
var temp__4088__auto____33472 = cljs.core.next(G__33468__33471);
if(temp__4088__auto____33472)
{var G__33468__33473 = temp__4088__auto____33472;
{
var G__33474 = cljs.core.first(G__33468__33473);
var G__33475 = G__33468__33473;
attr__33470 = G__33474;
G__33468__33471 = G__33475;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){
return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function get_mills(){
return (new Date()).getMilliseconds();
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.core.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.not(child))
{return false;
} else
{if((parent === child))
{return false;
} else
{if((child.parentNode === parent))
{return true;
} else
{if("\uFDD0'else")
{{
var G__33476 = parent;
var G__33477 = child.parentNode;
parent = G__33476;
child = G__33477;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
enfocus.core.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re__33481 = e.relatedTarget;
var this__33482 = e.currentTarget;
if((function (){var and__3937__auto____33483 = !((re__33481 === this__33482));
if(and__3937__auto____33483)
{return cljs.core.not(enfocus.core.child_of_QMARK_(this__33482,re__33481));
} else
{return and__3937__auto____33483;
}
})())
{return (func.cljs$lang$arity$1 ? func.cljs$lang$arity$1(e) : func.call(null,e));
} else
{return null;
}
});
});
enfocus.core.pix_round = (function pix_round(step){
if((step < 0))
{return (Math.floor.cljs$lang$arity$1 ? Math.floor.cljs$lang$arity$1(step) : Math.floor.call(null,step));
} else
{return (Math.ceil.cljs$lang$arity$1 ? Math.ceil.cljs$lang$arity$1(step) : Math.ceil.call(null,step));
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.map_QMARK_(ats))
{var G__33503__33504 = cljs.core.seq(ats);
if(G__33503__33504)
{var G__33506__33508 = cljs.core.first(G__33503__33504);
var vec__33507__33509 = G__33506__33508;
var k__33510 = cljs.core.nth.cljs$lang$arity$3(vec__33507__33509,0,null);
var v__33511 = cljs.core.nth.cljs$lang$arity$3(vec__33507__33509,1,null);
var G__33503__33512 = G__33503__33504;
var G__33506__33513 = G__33506__33508;
var G__33503__33514 = G__33503__33512;
while(true){
var vec__33515__33516 = G__33506__33513;
var k__33517 = cljs.core.nth.cljs$lang$arity$3(vec__33515__33516,0,null);
var v__33518 = cljs.core.nth.cljs$lang$arity$3(vec__33515__33516,1,null);
var G__33503__33519 = G__33503__33514;
add_map_attrs.cljs$lang$arity$3(elem,k__33517,v__33518);
var temp__4088__auto____33520 = cljs.core.next(G__33503__33519);
if(temp__4088__auto____33520)
{var G__33503__33521 = temp__4088__auto____33520;
{
var G__33522 = cljs.core.first(G__33503__33521);
var G__33523 = G__33503__33521;
G__33506__33513 = G__33522;
G__33503__33514 = G__33523;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__3 = (function (elem,k,v){
elem.setAttribute(cljs.core.name(k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case 2:
return add_map_attrs__2.call(this,elem,k);
case 3:
return add_map_attrs__3.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
add_map_attrs.cljs$lang$arity$2 = add_map_attrs__2;
add_map_attrs.cljs$lang$arity$3 = add_map_attrs__3;
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.cljs$lang$arity$1(0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.EMPTY);
enfocus.core.hide_style = cljs.core.ObjMap.fromObject(["style"],{"style":"display: none; width: 0px; height: 0px"}).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__33531 = goog.dom.createDom("div",enfocus.core.hide_style);
if(cljs.core.instance_QMARK_(DocumentFragment,child))
{goog.dom.appendChild(div__33531,child);
} else
{enfocus.core.log_debug(cljs.core.count(domina.nodes(child)));
var G__33532__33533 = cljs.core.seq(domina.nodes(child));
if(G__33532__33533)
{var node__33534 = cljs.core.first(G__33532__33533);
var G__33532__33535 = G__33532__33533;
while(true){
goog.dom.appendChild(div__33531,node__33534);
var temp__4088__auto____33536 = cljs.core.next(G__33532__33535);
if(temp__4088__auto____33536)
{var G__33532__33537 = temp__4088__auto____33536;
{
var G__33538 = cljs.core.first(G__33532__33537);
var G__33539 = G__33532__33537;
node__33534 = G__33538;
G__33532__33535 = G__33539;
continue;
}
} else
{}
break;
}
} else
{}
}
goog.dom.appendChild(goog.dom.getDocument().body,div__33531);
return div__33531;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__33542 = div.childNodes;
var frag__33543 = document.createDocumentFragment();
goog.dom.append(frag__33543,child__33542);
goog.dom.removeNode(div);
return frag__33543;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__33547 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__33548 = [cljs.core.str(cljs.core.name(cljs.core.gensym.cljs$lang$arity$1("id"))),cljs.core.str("_")].join('');
return cljs.core.PersistentVector.fromArray([[cljs.core.str(sym__33548)].join(''),text.replace(re__33547,(function (a,b,c,d){
return [cljs.core.str(b),cljs.core.str(sym__33548),cljs.core.str(c),cljs.core.str(d)].join('');
}))], true);
});
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__33553 = enfocus.core.css_select.cljs$lang$arity$2(nod,"*[id]");
var nod_col__33554 = enfocus.core.nodes__GT_coll(id_nodes__33553);
return cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2((function (p1__33544_SHARP_){
var id__33555 = p1__33544_SHARP_.getAttribute("id");
var rid__33556 = id__33555.replace(sym,"");
return p1__33544_SHARP_.setAttribute("id",rid__33556);
}),nod_col__33554));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key){
if((cljs.core.deref(enfocus.core.tpl_cache).call(null,uri) == null))
{cljs.core.swap_BANG_.cljs$lang$arity$2(enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__33564 = (new goog.net.XhrIo());
var callback__33570 = (function (req){
var text__33566 = req.getResponseText();
var vec__33565__33567 = enfocus.core.replace_ids(text__33566);
var sym__33568 = cljs.core.nth.cljs$lang$arity$3(vec__33565__33567,0,null);
var txt__33569 = cljs.core.nth.cljs$lang$arity$3(vec__33565__33567,1,null);
return cljs.core.swap_BANG_.cljs$lang$arity$4(enfocus.core.tpl_cache,cljs.core.assoc,dom_key,cljs.core.PersistentVector.fromArray([sym__33568,txt__33569], true));
});
goog.events.listen(req__33564,goog.net.EventType.COMPLETE,(function (){
(callback__33570.cljs$lang$arity$1 ? callback__33570.cljs$lang$arity$1(req__33564) : callback__33570.call(null,req__33564));
return cljs.core.swap_BANG_.cljs$lang$arity$2(enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__33564.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){
var dfa__33579 = enfocus.core.nodes__GT_coll(domina.html_to_dom(html));
var frag__33580 = document.createDocumentFragment();
enfocus.core.log_debug(cljs.core.count(dfa__33579));
var G__33581__33582 = cljs.core.seq(dfa__33579);
if(G__33581__33582)
{var df__33583 = cljs.core.first(G__33581__33582);
var G__33581__33584 = G__33581__33582;
while(true){
goog.dom.append(frag__33580,df__33583);
var temp__4088__auto____33585 = cljs.core.next(G__33581__33584);
if(temp__4088__auto____33585)
{var G__33581__33586 = temp__4088__auto____33585;
{
var G__33587 = cljs.core.first(G__33581__33586);
var G__33588 = G__33581__33586;
df__33583 = G__33587;
G__33581__33584 = G__33588;
continue;
}
} else
{}
break;
}
} else
{}
return frag__33580;
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__33590 = cljs.core.deref(enfocus.core.tpl_cache).call(null,uri);
if(cljs.core.truth_(nod__33590))
{return cljs.core.PersistentVector.fromArray([cljs.core.first(nod__33590),enfocus.core.html_to_dom(cljs.core.second(nod__33590))], true);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__33600 = enfocus.core.create_sel_str.cljs$lang$arity$1(sel);
var cache__33601 = cljs.core.deref(enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str__33600)].join(''));
if(cljs.core.truth_(cache__33601))
{return cljs.core.PersistentVector.fromArray([cljs.core.first(cache__33601),enfocus.core.html_to_dom(cljs.core.second(cache__33601))], true);
} else
{var vec__33602__33603 = enfocus.core.get_cached_dom(uri);
var sym__33604 = cljs.core.nth.cljs$lang$arity$3(vec__33602__33603,0,null);
var tdom__33605 = cljs.core.nth.cljs$lang$arity$3(vec__33602__33603,1,null);
var dom__33606 = enfocus.core.create_hidden_dom(tdom__33605);
var tsnip__33607 = domina.nodes(enfocus.core.css_select.cljs$lang$arity$3(sym__33604,dom__33606,sel));
var snip__33608 = cljs.core.first(tsnip__33607);
enfocus.core.remove_node_return_child(dom__33606);
cljs.core.swap_BANG_.cljs$lang$arity$4(enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str__33600)].join(''),cljs.core.PersistentVector.fromArray([sym__33604,snip__33608.outerHTML], true));
return cljs.core.PersistentVector.fromArray([sym__33604,snip__33608], true);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){
return (function trans(pnodes){
var pnod_col__33615 = enfocus.core.nodes__GT_coll(pnodes);
var result__33616 = cljs.core.map.cljs$lang$arity$2(func,pnod_col__33615);
if((cljs.core.count(result__33616) <= 1))
{return cljs.core.first(result__33616);
} else
{return result__33616;
}
});
});
/**
* wrapper function for transforms, maps the transform to all nodes returned
* by the selector and provides the ability to chain transforms with the chain command.
*/
enfocus.core.chainable_standard = (function chainable_standard(func){
return (function() {
var trans = null;
var trans__1 = (function (pnodes){
return trans.cljs$lang$arity$2(pnodes,null);
});
var trans__2 = (function (pnodes,chain){
var pnod_col__33620 = enfocus.core.nodes__GT_coll(pnodes);
cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(func,pnod_col__33620));
if(!((chain == null)))
{return (chain.cljs$lang$arity$1 ? chain.cljs$lang$arity$1(pnodes) : chain.call(null,pnodes));
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case 1:
return trans__1.call(this,pnodes);
case 2:
return trans__2.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
trans.cljs$lang$arity$1 = trans__1;
trans.cljs$lang$arity$2 = trans__2;
return trans;
})()
});
/**
* wrapper function for effects, maps the effect to all nodes returned by the
* selector and provides chaining and callback functionality
*/
enfocus.core.chainable_effect = (function chainable_effect(func,callback){
return (function() {
var trans = null;
var trans__1 = (function (pnodes){
return trans.cljs$lang$arity$2(pnodes,null);
});
var trans__2 = (function (pnodes,chain){
var pnod_col__33649 = enfocus.core.nodes__GT_coll(pnodes);
var cnt__33650 = cljs.core.atom.cljs$lang$arity$1(cljs.core.count(pnod_col__33649));
var partial_cback__33651 = (function (){
cljs.core.swap_BANG_.cljs$lang$arity$2(cnt__33650,cljs.core.dec);
if(cljs.core._EQ_.cljs$lang$arity$2(0,cljs.core.deref(cnt__33650)))
{if(!((callback == null)))
{(callback.cljs$lang$arity$1 ? callback.cljs$lang$arity$1(pnodes) : callback.call(null,pnodes));
} else
{}
if(!((chain == null)))
{return (chain.cljs$lang$arity$1 ? chain.cljs$lang$arity$1(pnodes) : chain.call(null,pnodes));
} else
{return null;
}
} else
{return null;
}
});
var G__33652__33653 = cljs.core.seq(pnod_col__33649);
if(G__33652__33653)
{var pnod__33654 = cljs.core.first(G__33652__33653);
var G__33652__33655 = G__33652__33653;
while(true){
(func.cljs$lang$arity$2 ? func.cljs$lang$arity$2(pnod__33654,partial_cback__33651) : func.call(null,pnod__33654,partial_cback__33651));
var temp__4088__auto____33656 = cljs.core.next(G__33652__33655);
if(temp__4088__auto____33656)
{var G__33652__33657 = temp__4088__auto____33656;
{
var G__33658 = cljs.core.first(G__33652__33657);
var G__33659 = G__33652__33657;
pnod__33654 = G__33658;
G__33652__33655 = G__33659;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case 1:
return trans__1.call(this,pnodes);
case 2:
return trans__2.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
trans.cljs$lang$arity$1 = trans__1;
trans.cljs$lang$arity$2 = trans__2;
return trans;
})()
});
/**
* Allows standard domina functions to be chainable
*/
enfocus.core.domina_chain = (function() {
var domina_chain = null;
var domina_chain__1 = (function (func){
return (function() {
var trans = null;
var trans__1 = (function (nodes){
return trans.cljs$lang$arity$2(nodes,null);
});
var trans__2 = (function (nodes,chain){
(func.cljs$lang$arity$1 ? func.cljs$lang$arity$1(nodes) : func.call(null,nodes));
if(!((chain == null)))
{return (chain.cljs$lang$arity$1 ? chain.cljs$lang$arity$1(nodes) : chain.call(null,nodes));
} else
{return null;
}
});
trans = function(nodes,chain){
switch(arguments.length){
case 1:
return trans__1.call(this,nodes);
case 2:
return trans__2.call(this,nodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
trans.cljs$lang$arity$1 = trans__1;
trans.cljs$lang$arity$2 = trans__2;
return trans;
})()
});
var domina_chain__2 = (function (values,func){
return (function() {
var trans = null;
var trans__1 = (function (nodes){
return trans.cljs$lang$arity$2(nodes,null);
});
var trans__2 = (function (nodes,chain){
var vnodes__33665 = cljs.core.mapcat.cljs$lang$arity$2((function (p1__33621_SHARP_){
return domina.nodes(p1__33621_SHARP_);
}),values);
(func.cljs$lang$arity$2 ? func.cljs$lang$arity$2(nodes,vnodes__33665) : func.call(null,nodes,vnodes__33665));
if(!((chain == null)))
{return (chain.cljs$lang$arity$1 ? chain.cljs$lang$arity$1(nodes) : chain.call(null,nodes));
} else
{return null;
}
});
trans = function(nodes,chain){
switch(arguments.length){
case 1:
return trans__1.call(this,nodes);
case 2:
return trans__2.call(this,nodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
trans.cljs$lang$arity$1 = trans__1;
trans.cljs$lang$arity$2 = trans__2;
return trans;
})()
});
domina_chain = function(values,func){
switch(arguments.length){
case 1:
return domina_chain__1.call(this,values);
case 2:
return domina_chain__2.call(this,values,func);
}
throw('Invalid arity: ' + arguments.length);
};
domina_chain.cljs$lang$arity$1 = domina_chain__1;
domina_chain.cljs$lang$arity$2 = domina_chain__2;
return domina_chain;
})()
;
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_content = (function() { 
var en_content__delegate = function (values){
return enfocus.core.domina_chain.cljs$lang$arity$2(values,(function (p1__33660_SHARP_,p2__33661_SHARP_){
domina.destroy_children_BANG_(p1__33660_SHARP_);
return domina.append_BANG_(p1__33660_SHARP_,p2__33661_SHARP_);
}));
};
var en_content = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_content__delegate.call(this, values);
};
en_content.cljs$lang$maxFixedArity = 0;
en_content.cljs$lang$applyTo = (function (arglist__33667){
var values = cljs.core.seq(arglist__33667);;
return en_content__delegate(values);
});
en_content.cljs$lang$arity$variadic = en_content__delegate;
return en_content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.en_html_content = (function en_html_content(txt){
return enfocus.core.domina_chain.cljs$lang$arity$1((function (p1__33666_SHARP_){
return domina.set_html_BANG_(p1__33666_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var pairs__33690 = cljs.core.partition.cljs$lang$arity$2(2,values);
return enfocus.core.domina_chain.cljs$lang$arity$1((function (p1__33668_SHARP_){
var G__33691__33692 = cljs.core.seq(pairs__33690);
if(G__33691__33692)
{var G__33694__33696 = cljs.core.first(G__33691__33692);
var vec__33695__33697 = G__33694__33696;
var name__33698 = cljs.core.nth.cljs$lang$arity$3(vec__33695__33697,0,null);
var value__33699 = cljs.core.nth.cljs$lang$arity$3(vec__33695__33697,1,null);
var G__33691__33700 = G__33691__33692;
var G__33694__33701 = G__33694__33696;
var G__33691__33702 = G__33691__33700;
while(true){
var vec__33703__33704 = G__33694__33701;
var name__33705 = cljs.core.nth.cljs$lang$arity$3(vec__33703__33704,0,null);
var value__33706 = cljs.core.nth.cljs$lang$arity$3(vec__33703__33704,1,null);
var G__33691__33707 = G__33691__33702;
domina.set_attr_BANG_.cljs$lang$arity$variadic(p1__33668_SHARP_,name__33705,cljs.core.array_seq([value__33706], 0));
var temp__4088__auto____33708 = cljs.core.next(G__33691__33707);
if(temp__4088__auto____33708)
{var G__33691__33709 = temp__4088__auto____33708;
{
var G__33710 = cljs.core.first(G__33691__33709);
var G__33711 = G__33691__33709;
G__33694__33701 = G__33710;
G__33691__33702 = G__33711;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}));
};
var en_set_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_attr__delegate.call(this, values);
};
en_set_attr.cljs$lang$maxFixedArity = 0;
en_set_attr.cljs$lang$applyTo = (function (arglist__33712){
var values = cljs.core.seq(arglist__33712);;
return en_set_attr__delegate(values);
});
en_set_attr.cljs$lang$arity$variadic = en_set_attr__delegate;
return en_set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_attr = (function() { 
var en_remove_attr__delegate = function (values){
return enfocus.core.domina_chain.cljs$lang$arity$1((function (p1__33669_SHARP_){
var G__33719__33720 = cljs.core.seq(values);
if(G__33719__33720)
{var name__33721 = cljs.core.first(G__33719__33720);
var G__33719__33722 = G__33719__33720;
while(true){
domina.remove_attr_BANG_(p1__33669_SHARP_,name__33721);
var temp__4088__auto____33723 = cljs.core.next(G__33719__33722);
if(temp__4088__auto____33723)
{var G__33719__33724 = temp__4088__auto____33723;
{
var G__33725 = cljs.core.first(G__33719__33724);
var G__33726 = G__33719__33724;
name__33721 = G__33725;
G__33719__33722 = G__33726;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}));
};
var en_remove_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_attr__delegate.call(this, values);
};
en_remove_attr.cljs$lang$maxFixedArity = 0;
en_remove_attr.cljs$lang$applyTo = (function (arglist__33727){
var values = cljs.core.seq(arglist__33727);;
return en_remove_attr__delegate(values);
});
en_remove_attr.cljs$lang$arity$variadic = en_remove_attr__delegate;
return en_remove_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.en_set_prop = (function() { 
var en_set_prop__delegate = function (forms){
return enfocus.core.chainable_standard((function (node){
var h__33739 = cljs.core.mapcat.cljs$lang$arity$2((function (p__33734){
var vec__33735__33736 = p__33734;
var n__33737 = cljs.core.nth.cljs$lang$arity$3(vec__33735__33736,0,null);
var v__33738 = cljs.core.nth.cljs$lang$arity$3(vec__33735__33736,1,null);
return cljs.core.list.cljs$lang$arity$2(cljs.core.name(n__33737),v__33738);
}),cljs.core.partition.cljs$lang$arity$2(2,forms));
return goog.dom.setProperties(node,cljs.core.apply.cljs$lang$arity$2(cljs.core.js_obj,h__33739));
}));
};
var en_set_prop = function (var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_prop__delegate.call(this, forms);
};
en_set_prop.cljs$lang$maxFixedArity = 0;
en_set_prop.cljs$lang$applyTo = (function (arglist__33740){
var forms = cljs.core.seq(arglist__33740);;
return en_set_prop__delegate(forms);
});
en_set_prop.cljs$lang$arity$variadic = en_set_prop__delegate;
return en_set_prop;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
return goog.dom.classes.hasClass(el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.en_add_class = (function() { 
var en_add_class__delegate = function (values){
return enfocus.core.domina_chain.cljs$lang$arity$1((function (p1__33741_SHARP_){
var G__33749__33750 = cljs.core.seq(values);
if(G__33749__33750)
{var val__33751 = cljs.core.first(G__33749__33750);
var G__33749__33752 = G__33749__33750;
while(true){
domina.add_class_BANG_(p1__33741_SHARP_,val__33751);
var temp__4088__auto____33753 = cljs.core.next(G__33749__33752);
if(temp__4088__auto____33753)
{var G__33749__33754 = temp__4088__auto____33753;
{
var G__33755 = cljs.core.first(G__33749__33754);
var G__33756 = G__33749__33754;
val__33751 = G__33755;
G__33749__33752 = G__33756;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}));
};
var en_add_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_add_class__delegate.call(this, values);
};
en_add_class.cljs$lang$maxFixedArity = 0;
en_add_class.cljs$lang$applyTo = (function (arglist__33757){
var values = cljs.core.seq(arglist__33757);;
return en_add_class__delegate(values);
});
en_add_class.cljs$lang$arity$variadic = en_add_class__delegate;
return en_add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_class = (function() { 
var en_remove_class__delegate = function (values){
return enfocus.core.domina_chain.cljs$lang$arity$1((function (p1__33742_SHARP_){
var G__33765__33766 = cljs.core.seq(values);
if(G__33765__33766)
{var val__33767 = cljs.core.first(G__33765__33766);
var G__33765__33768 = G__33765__33766;
while(true){
domina.remove_class_BANG_(p1__33742_SHARP_,val__33767);
var temp__4088__auto____33769 = cljs.core.next(G__33765__33768);
if(temp__4088__auto____33769)
{var G__33765__33770 = temp__4088__auto____33769;
{
var G__33771 = cljs.core.first(G__33765__33770);
var G__33772 = G__33765__33770;
val__33767 = G__33771;
G__33765__33768 = G__33772;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}));
};
var en_remove_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_class__delegate.call(this, values);
};
en_remove_class.cljs$lang$maxFixedArity = 0;
en_remove_class.cljs$lang$applyTo = (function (arglist__33773){
var values = cljs.core.seq(arglist__33773);;
return en_remove_class__delegate(values);
});
en_remove_class.cljs$lang$arity$variadic = en_remove_class__delegate;
return en_remove_class;
})()
;
/**
* Sets the specified classes on the selected element
* @param {...*} var_args
*/
enfocus.core.en_set_class = (function() { 
var en_set_class__delegate = function (values){
return enfocus.core.domina_chain.cljs$lang$arity$1((function (p1__33758_SHARP_){
return domina.set_classes_BANG_(p1__33758_SHARP_,values);
}));
};
var en_set_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_class__delegate.call(this, values);
};
en_set_class.cljs$lang$maxFixedArity = 0;
en_set_class.cljs$lang$applyTo = (function (arglist__33774){
var values = cljs.core.seq(arglist__33774);;
return en_set_class__delegate(values);
});
en_set_class.cljs$lang$arity$variadic = en_set_class__delegate;
return en_set_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.en_do__GT_ = (function() { 
var en_do__GT___delegate = function (forms){
return enfocus.core.chainable_standard((function (pnod){
var G__33783__33784 = cljs.core.seq(forms);
if(G__33783__33784)
{var fun__33785 = cljs.core.first(G__33783__33784);
var G__33783__33786 = G__33783__33784;
while(true){
(fun__33785.cljs$lang$arity$1 ? fun__33785.cljs$lang$arity$1(pnod) : fun__33785.call(null,pnod));
var temp__4088__auto____33787 = cljs.core.next(G__33783__33786);
if(temp__4088__auto____33787)
{var G__33783__33788 = temp__4088__auto____33787;
{
var G__33789 = cljs.core.first(G__33783__33788);
var G__33790 = G__33783__33788;
fun__33785 = G__33789;
G__33783__33786 = G__33790;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}));
};
var en_do__GT_ = function (var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_do__GT___delegate.call(this, forms);
};
en_do__GT_.cljs$lang$maxFixedArity = 0;
en_do__GT_.cljs$lang$applyTo = (function (arglist__33791){
var forms = cljs.core.seq(arglist__33791);;
return en_do__GT___delegate(forms);
});
en_do__GT_.cljs$lang$arity$variadic = en_do__GT___delegate;
return en_do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_append = (function() { 
var en_append__delegate = function (values){
return enfocus.core.domina_chain.cljs$lang$arity$2(values,(function (p1__33775_SHARP_,p2__33776_SHARP_){
return domina.append_BANG_(p1__33775_SHARP_,p2__33776_SHARP_);
}));
};
var en_append = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_append__delegate.call(this, values);
};
en_append.cljs$lang$maxFixedArity = 0;
en_append.cljs$lang$applyTo = (function (arglist__33794){
var values = cljs.core.seq(arglist__33794);;
return en_append__delegate(values);
});
en_append.cljs$lang$arity$variadic = en_append__delegate;
return en_append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_prepend = (function() { 
var en_prepend__delegate = function (values){
return enfocus.core.domina_chain.cljs$lang$arity$2(values,(function (p1__33792_SHARP_,p2__33793_SHARP_){
return domina.prepend_BANG_(p1__33792_SHARP_,p2__33793_SHARP_);
}));
};
var en_prepend = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_prepend__delegate.call(this, values);
};
en_prepend.cljs$lang$maxFixedArity = 0;
en_prepend.cljs$lang$applyTo = (function (arglist__33797){
var values = cljs.core.seq(arglist__33797);;
return en_prepend__delegate(values);
});
en_prepend.cljs$lang$arity$variadic = en_prepend__delegate;
return en_prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_before = (function() { 
var en_before__delegate = function (values){
return enfocus.core.domina_chain.cljs$lang$arity$2(values,(function (p1__33795_SHARP_,p2__33796_SHARP_){
return domina.insert_before_BANG_(p1__33795_SHARP_,p2__33796_SHARP_);
}));
};
var en_before = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_before__delegate.call(this, values);
};
en_before.cljs$lang$maxFixedArity = 0;
en_before.cljs$lang$applyTo = (function (arglist__33800){
var values = cljs.core.seq(arglist__33800);;
return en_before__delegate(values);
});
en_before.cljs$lang$arity$variadic = en_before__delegate;
return en_before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_after = (function() { 
var en_after__delegate = function (values){
return enfocus.core.domina_chain.cljs$lang$arity$2(values,(function (p1__33798_SHARP_,p2__33799_SHARP_){
return domina.insert_after_BANG_(p1__33798_SHARP_,p2__33799_SHARP_);
}));
};
var en_after = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_after__delegate.call(this, values);
};
en_after.cljs$lang$maxFixedArity = 0;
en_after.cljs$lang$applyTo = (function (arglist__33803){
var values = cljs.core.seq(arglist__33803);;
return en_after__delegate(values);
});
en_after.cljs$lang$arity$variadic = en_after__delegate;
return en_after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_substitute = (function() { 
var en_substitute__delegate = function (values){
return enfocus.core.domina_chain.cljs$lang$arity$2(values,(function (p1__33801_SHARP_,p2__33802_SHARP_){
return domina.swap_content_BANG_(p1__33801_SHARP_,p2__33802_SHARP_);
}));
};
var en_substitute = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_substitute__delegate.call(this, values);
};
en_substitute.cljs$lang$maxFixedArity = 0;
en_substitute.cljs$lang$applyTo = (function (arglist__33805){
var values = cljs.core.seq(arglist__33805);;
return en_substitute__delegate(values);
});
en_substitute.cljs$lang$arity$variadic = en_substitute__delegate;
return en_substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.en_remove_node = (function en_remove_node(){
return enfocus.core.domina_chain.cljs$lang$arity$1((function (p1__33804_SHARP_){
return domina.detach_BANG_(p1__33804_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.en_wrap = (function en_wrap(elm,mattr){
return enfocus.core.chainable_standard((function (pnod){
var elem__33807 = goog.dom.createElement(cljs.core.name(elm));
enfocus.core.add_map_attrs.cljs$lang$arity$2(elem__33807,mattr);
enfocus.core.at.cljs$lang$arity$variadic(elem__33807,cljs.core.array_seq([enfocus.core.en_content.cljs$lang$arity$variadic(cljs.core.array_seq([pnod.cloneNode(true)], 0))], 0));
return enfocus.core.at.cljs$lang$arity$variadic(pnod,cljs.core.array_seq([enfocus.core.en_do__GT_.cljs$lang$arity$variadic(cljs.core.array_seq([enfocus.core.en_after.cljs$lang$arity$variadic(cljs.core.array_seq([elem__33807], 0)),enfocus.core.en_remove_node()], 0))], 0));
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard((function (pnod){
var frag__33810 = document.createDocumentFragment();
goog.dom.append(frag__33810,pnod.childNodes);
return goog.dom.replaceNode(frag__33810,pnod);
}));
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_set_style = (function() { 
var en_set_style__delegate = function (values){
var pairs__33831 = cljs.core.partition.cljs$lang$arity$2(2,values);
return enfocus.core.domina_chain.cljs$lang$arity$1((function (p1__33808_SHARP_){
var G__33832__33833 = cljs.core.seq(pairs__33831);
if(G__33832__33833)
{var G__33835__33837 = cljs.core.first(G__33832__33833);
var vec__33836__33838 = G__33835__33837;
var name__33839 = cljs.core.nth.cljs$lang$arity$3(vec__33836__33838,0,null);
var value__33840 = cljs.core.nth.cljs$lang$arity$3(vec__33836__33838,1,null);
var G__33832__33841 = G__33832__33833;
var G__33835__33842 = G__33835__33837;
var G__33832__33843 = G__33832__33841;
while(true){
var vec__33844__33845 = G__33835__33842;
var name__33846 = cljs.core.nth.cljs$lang$arity$3(vec__33844__33845,0,null);
var value__33847 = cljs.core.nth.cljs$lang$arity$3(vec__33844__33845,1,null);
var G__33832__33848 = G__33832__33843;
domina.set_style_BANG_.cljs$lang$arity$variadic(p1__33808_SHARP_,name__33846,cljs.core.array_seq([value__33847], 0));
var temp__4088__auto____33849 = cljs.core.next(G__33832__33848);
if(temp__4088__auto____33849)
{var G__33832__33850 = temp__4088__auto____33849;
{
var G__33851 = cljs.core.first(G__33832__33850);
var G__33852 = G__33832__33850;
G__33835__33842 = G__33851;
G__33832__33843 = G__33852;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}));
};
var en_set_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_style__delegate.call(this, values);
};
en_set_style.cljs$lang$maxFixedArity = 0;
en_set_style.cljs$lang$applyTo = (function (arglist__33853){
var values = cljs.core.seq(arglist__33853);;
return en_set_style__delegate(values);
});
en_set_style.cljs$lang$arity$variadic = en_set_style__delegate;
return en_set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.en_remove_style = (function() { 
var en_remove_style__delegate = function (values){
return enfocus.core.chainable_standard((function (pnod){
return enfocus.core.style_remove(pnod,values);
}));
};
var en_remove_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_style__delegate.call(this, values);
};
en_remove_style.cljs$lang$maxFixedArity = 0;
en_remove_style.cljs$lang$applyTo = (function (arglist__33854){
var values = cljs.core.seq(arglist__33854);;
return en_remove_style__delegate(values);
});
en_remove_style.cljs$lang$arity$variadic = en_remove_style__delegate;
return en_remove_style;
})()
;
/**
* calls the focus function on the selected node
*/
enfocus.core.en_focus = (function en_focus(){
return enfocus.core.chainable_standard((function (node){
return node.focus();
}));
});
/**
* calls the blur function on the selected node
*/
enfocus.core.en_blur = (function en_blur(){
return enfocus.core.chainable_standard((function (node){
return node.blur();
}));
});
/**
* addes key value pair of data to the selected nodes. Only use clojure data structures when setting
*/
enfocus.core.en_set_data = (function en_set_data(ky,val){
return enfocus.core.domina_chain.cljs$lang$arity$1((function (p1__33855_SHARP_){
return domina.set_data_BANG_(p1__33855_SHARP_,ky,val);
}));
});
enfocus.core.view_port_monitor = cljs.core.atom.cljs$lang$arity$1(null);
/**
* needed to support window :resize
*/
enfocus.core.get_vp_monitor = (function get_vp_monitor(){
if(cljs.core.truth_(cljs.core.deref(enfocus.core.view_port_monitor)))
{return cljs.core.deref(enfocus.core.view_port_monitor);
} else
{cljs.core.swap_BANG_.cljs$lang$arity$2(enfocus.core.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));
return cljs.core.deref(enfocus.core.view_port_monitor);
}
});
enfocus.core.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){
var obj__33869 = (new Object());
obj__33869.listen = (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback__33870 = enfocus.core.mouse_enter_leave(func);
callback__33870.listen = func;
callback__33870.scope = opt_scope;
if(cljs.core.truth_(opt_handler))
{return opt_handler.listen(elm,cljs.core.name(event),callback__33870);
} else
{return goog.events.listen(elm,cljs.core.name(event),callback__33870);
}
});
obj__33869.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners__33871 = goog.events.getListeners(elm,cljs.core.name(event),false);
var G__33872__33873 = cljs.core.seq(listeners__33871);
if(G__33872__33873)
{var obj__33874 = cljs.core.first(G__33872__33873);
var G__33872__33875 = G__33872__33873;
while(true){
var listener__33876 = obj__33874.listener;
if(cljs.core.truth_((function (){var and__3937__auto____33878 = (function (){var or__3939__auto____33877 = cljs.core.not(func);
if(or__3939__auto____33877)
{return or__3939__auto____33877;
} else
{return cljs.core._EQ_.cljs$lang$arity$2(listener__33876.listen,func);
}
})();
if(cljs.core.truth_(and__3937__auto____33878))
{var or__3939__auto____33879 = cljs.core.not(opt_scope);
if(or__3939__auto____33879)
{return or__3939__auto____33879;
} else
{return cljs.core._EQ_.cljs$lang$arity$2(listener__33876.scope,opt_scope);
}
} else
{return and__3937__auto____33878;
}
})()))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name(event),listener__33876);
} else
{goog.events.unlisten(elm,cljs.core.name(event),listener__33876);
}
} else
{}
var temp__4088__auto____33880 = cljs.core.next(G__33872__33875);
if(temp__4088__auto____33880)
{var G__33872__33881 = temp__4088__auto____33880;
{
var G__33882 = cljs.core.first(G__33872__33881);
var G__33883 = G__33872__33881;
obj__33874 = G__33882;
G__33872__33875 = G__33883;
continue;
}
} else
{}
break;
}
} else
{}
return listeners__33871;
});
return obj__33869;
});
enfocus.core.wrapper_register = cljs.core.ObjMap.fromObject(["\uFDD0'mouseenter","\uFDD0'mouseleave"],{"\uFDD0'mouseenter":enfocus.core.gen_enter_leave_wrapper("\uFDD0'mouseover"),"\uFDD0'mouseleave":enfocus.core.gen_enter_leave_wrapper("\uFDD0'mouseout")});
/**
* adding an event to the selected nodes
*/
enfocus.core.en_listen = (function en_listen(event,func){
var wrapper__33887 = (enfocus.core.wrapper_register.cljs$lang$arity$1 ? enfocus.core.wrapper_register.cljs$lang$arity$1(event) : enfocus.core.wrapper_register.call(null,event));
return enfocus.core.chainable_standard((function (pnod){
if((function (){var and__3937__auto____33888 = cljs.core._EQ_.cljs$lang$arity$2("\uFDD0'resize",event);
if(and__3937__auto____33888)
{return (window === pnod);
} else
{return and__3937__auto____33888;
}
})())
{return goog.events.listen(enfocus.core.get_vp_monitor(),"resize",func);
} else
{if((wrapper__33887 == null))
{return goog.events.listen(pnod,cljs.core.name(event),func);
} else
{return goog.events.listenWithWrapper(pnod,wrapper__33887,func);
}
}
}));
});
/**
* removing all listeners of a given event type from the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_remove_listeners = (function() { 
var en_remove_listeners__delegate = function (event_list){
var get_name__33896 = (function (p1__33884_SHARP_){
return cljs.core.name(((cljs.core._EQ_.cljs$lang$arity$2(p1__33884_SHARP_,"\uFDD0'mouseenter"))?"\uFDD0'mouseover":((cljs.core._EQ_.cljs$lang$arity$2(p1__33884_SHARP_,"\uFDD0'mouseleave"))?"\uFDD0'mouseout":(("\uFDD0'else")?p1__33884_SHARP_:null))));
});
return enfocus.core.chainable_standard((function (pnod){
var G__33897__33898 = cljs.core.seq(event_list);
if(G__33897__33898)
{var ev__33899 = cljs.core.first(G__33897__33898);
var G__33897__33900 = G__33897__33898;
while(true){
goog.events.removeAll(pnod,(get_name__33896.cljs$lang$arity$1 ? get_name__33896.cljs$lang$arity$1(ev__33899) : get_name__33896.call(null,ev__33899)));
var temp__4088__auto____33901 = cljs.core.next(G__33897__33900);
if(temp__4088__auto____33901)
{var G__33897__33902 = temp__4088__auto____33901;
{
var G__33903 = cljs.core.first(G__33897__33902);
var G__33904 = G__33897__33902;
ev__33899 = G__33903;
G__33897__33900 = G__33904;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}));
};
var en_remove_listeners = function (var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_listeners__delegate.call(this, event_list);
};
en_remove_listeners.cljs$lang$maxFixedArity = 0;
en_remove_listeners.cljs$lang$applyTo = (function (arglist__33905){
var event_list = cljs.core.seq(arglist__33905);;
return en_remove_listeners__delegate(event_list);
});
en_remove_listeners.cljs$lang$arity$variadic = en_remove_listeners__delegate;
return en_remove_listeners;
})()
;
/**
* removing a specific event from the selected nodes
*/
enfocus.core.en_unlisten = (function() {
var en_unlisten = null;
var en_unlisten__1 = (function (event){
return enfocus.core.en_remove_listeners.cljs$lang$arity$variadic(cljs.core.array_seq([event], 0));
});
var en_unlisten__2 = (function (event,func){
var wrapper__33907 = (enfocus.core.wrapper_register.cljs$lang$arity$1 ? enfocus.core.wrapper_register.cljs$lang$arity$1(event) : enfocus.core.wrapper_register.call(null,event));
return enfocus.core.chainable_standard((function (pnod){
if((wrapper__33907 == null))
{return goog.events.unlisten(pnod,cljs.core.name(event),func);
} else
{return goog.events.unlistenWithWrapper(pnod,wrapper__33907,func);
}
}));
});
en_unlisten = function(event,func){
switch(arguments.length){
case 1:
return en_unlisten__1.call(this,event);
case 2:
return en_unlisten__2.call(this,event,func);
}
throw('Invalid arity: ' + arguments.length);
};
en_unlisten.cljs$lang$arity$1 = en_unlisten__1;
en_unlisten.cljs$lang$arity$2 = en_unlisten__2;
return en_unlisten;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_out = (function en_fade_out(ttime,callback,accel){
return enfocus.core.chainable_effect((function (pnod,pcallback){
var anim__33909 = (new goog.fx.dom.FadeOut(pnod,ttime,accel));
if(cljs.core.truth_(pcallback))
{goog.events.listen(anim__33909,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__33909.play();
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,callback,accel){
return enfocus.core.chainable_effect((function (pnod,pcallback){
var anim__33911 = (new goog.fx.dom.FadeIn(pnod,ttime,accel));
if(cljs.core.truth_(pcallback))
{goog.events.listen(anim__33911,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__33911.play();
}),callback);
});
/**
* resizes the selected elements to a width and height in px optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,callback,accel){
return enfocus.core.chainable_effect((function (pnod,pcallback){
var csize__33918 = goog.style.getContentBoxSize(pnod);
var start__33919 = [csize__33918.width,csize__33918.height];
var wth__33920 = ((cljs.core._EQ_.cljs$lang$arity$2("\uFDD0'curwidth",wth))?csize__33918.width:wth);
var hgt__33921 = ((cljs.core._EQ_.cljs$lang$arity$2("\uFDD0'curheight",hgt))?csize__33918.height:hgt);
var end__33922 = [wth__33920,hgt__33921];
var anim__33923 = (new goog.fx.dom.Resize(pnod,start__33919,end__33922,ttime,accel));
if(cljs.core.truth_(pcallback))
{goog.events.listen(anim__33923,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__33923.play();
}),callback);
});
/**
* moves the selected elements to a x and y in px optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,callback,accel){
return enfocus.core.chainable_effect((function (pnod,pcallback){
var cpos__33930 = goog.style.getPosition(pnod);
var start__33931 = [cpos__33930.x,cpos__33930.y];
var xpos__33932 = ((cljs.core._EQ_.cljs$lang$arity$2("\uFDD0'curx",xpos))?cpos__33930.x:xpos);
var ypos__33933 = ((cljs.core._EQ_.cljs$lang$arity$2("\uFDD0'cury",ypos))?cpos__33930.y:ypos);
var end__33934 = [xpos__33932,ypos__33933];
var anim__33935 = (new goog.fx.dom.Slide(pnod,start__33931,end__33934,ttime,accel));
if(cljs.core.truth_(pcallback))
{goog.events.listen(anim__33935,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__33935.play();
}),callback);
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_attr = (function en_get_attr(attr){
return enfocus.core.extr_multi_node((function (pnod){
return pnod.getAttribute(cljs.core.name(attr));
}));
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_text = (function en_get_text(){
return enfocus.core.extr_multi_node((function (pnod){
return goog.dom.getTextContent(pnod);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.en_get_data = (function() {
var en_get_data = null;
var en_get_data__1 = (function (ky){
return en_get_data.cljs$lang$arity$2(ky,false);
});
var en_get_data__2 = (function (ky,bubble){
return enfocus.core.extr_multi_node((function (node){
return domina.get_data.cljs$lang$arity$2(ky,bubble);
}));
});
en_get_data = function(ky,bubble){
switch(arguments.length){
case 1:
return en_get_data__1.call(this,ky);
case 2:
return en_get_data__2.call(this,ky,bubble);
}
throw('Invalid arity: ' + arguments.length);
};
en_get_data.cljs$lang$arity$1 = en_get_data__1;
en_get_data.cljs$lang$arity$2 = en_get_data__2;
return en_get_data;
})()
;
enfocus.core.reg_filt = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.EMPTY);
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.en_filter = (function en_filter(tst,trans){
return (function() {
var filt = null;
var filt__1 = (function (pnodes){
return filt.cljs$lang$arity$2(pnodes,null);
});
var filt__2 = (function (pnodes,chain){
var pnod_col__33945 = enfocus.core.nodes__GT_coll(pnodes);
var ttest__33946 = ((cljs.core.keyword_QMARK_(tst))?cljs.core.deref(enfocus.core.reg_filt).call(null,tst):tst);
var res__33947 = cljs.core.filter(ttest__33946,pnod_col__33945);
if((chain == null))
{return (trans.cljs$lang$arity$1 ? trans.cljs$lang$arity$1(res__33947) : trans.call(null,res__33947));
} else
{return (trans.cljs$lang$arity$2 ? trans.cljs$lang$arity$2(res__33947,chain) : trans.call(null,res__33947,chain));
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return filt__1.call(this,pnodes);
case 2:
return filt__2.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
filt.cljs$lang$arity$1 = filt__1;
filt.cljs$lang$arity$2 = filt__2;
return filt;
})()
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){
return cljs.core.swap_BANG_.cljs$lang$arity$4(enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){
return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter("\uFDD0'selected",enfocus.core.selected_options);
enfocus.core.register_filter("\uFDD0'checked",enfocus.core.checked_radio_checkbox);
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__1 = (function (css_sel){
return create_sel_str.cljs$lang$arity$2("",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){
return cljs.core.apply.cljs$lang$arity$2(cljs.core.str,cljs.core.map.cljs$lang$arity$2((function (p1__33948_SHARP_){
if(cljs.core.symbol_QMARK_(p1__33948_SHARP_))
{return (enfocus.core.css_syms.cljs$lang$arity$1 ? enfocus.core.css_syms.cljs$lang$arity$1(p1__33948_SHARP_) : enfocus.core.css_syms.call(null,p1__33948_SHARP_));
} else
{if(cljs.core.keyword_QMARK_(p1__33948_SHARP_))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name(p1__33948_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_(p1__33948_SHARP_))
{return create_sel_str.cljs$lang$arity$1(p1__33948_SHARP_);
} else
{if(cljs.core.string_QMARK_(p1__33948_SHARP_))
{return p1__33948_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case 1:
return create_sel_str__1.call(this,id_mask_sym);
case 2:
return create_sel_str__2.call(this,id_mask_sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
create_sel_str.cljs$lang$arity$1 = create_sel_str__1;
create_sel_str.cljs$lang$arity$2 = create_sel_str__2;
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__1 = (function (css_sel){
return css_select.cljs$lang$arity$3("",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){
return css_select.cljs$lang$arity$3("",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){
enfocus.core.log_debug(dom_node);
enfocus.core.log_debug(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([css_sel], 0)));
var sel__33951 = clojure.string.trim(enfocus.enlive.syntax.convert(enfocus.core.create_sel_str.cljs$lang$arity$2(id_mask_sym,css_sel)));
var ret__33952 = domina.css.sel.cljs$lang$arity$2(dom_node,sel__33951);
return ret__33952;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case 1:
return css_select__1.call(this,id_mask_sym);
case 2:
return css_select__2.call(this,id_mask_sym,dom_node);
case 3:
return css_select__3.call(this,id_mask_sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
css_select.cljs$lang$arity$1 = css_select__1;
css_select.cljs$lang$arity$2 = css_select__2;
css_select.cljs$lang$arity$3 = css_select__3;
return css_select;
})()
;
enfocus.core.nil_t = (function nil_t(func){
var or__3939__auto____33954 = func;
if(cljs.core.truth_(or__3939__auto____33954))
{return or__3939__auto____33954;
} else
{return enfocus.core.en_remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){
if(cljs.core._EQ_.cljs$lang$arity$2(1,cljs.core.count(trans)))
{return cljs.core.first(trans).call(null,node);
} else
{var G__33974__33975 = cljs.core.seq(cljs.core.partition.cljs$lang$arity$2(2,trans));
if(G__33974__33975)
{var G__33977__33979 = cljs.core.first(G__33974__33975);
var vec__33978__33980 = G__33977__33979;
var sel__33981 = cljs.core.nth.cljs$lang$arity$3(vec__33978__33980,0,null);
var t__33982 = cljs.core.nth.cljs$lang$arity$3(vec__33978__33980,1,null);
var G__33974__33983 = G__33974__33975;
var G__33977__33984 = G__33977__33979;
var G__33974__33985 = G__33974__33983;
while(true){
var vec__33986__33987 = G__33977__33984;
var sel__33988 = cljs.core.nth.cljs$lang$arity$3(vec__33986__33987,0,null);
var t__33989 = cljs.core.nth.cljs$lang$arity$3(vec__33986__33987,1,null);
var G__33974__33990 = G__33974__33985;
enfocus.core.nil_t(t__33989).call(null,enfocus.core.css_select.cljs$lang$arity$3(id_mask,node,sel__33988));
var temp__4088__auto____33991 = cljs.core.next(G__33974__33990);
if(temp__4088__auto____33991)
{var G__33974__33992 = temp__4088__auto____33991;
{
var G__33993 = cljs.core.first(G__33974__33992);
var G__33994 = G__33974__33992;
G__33977__33984 = G__33993;
G__33974__33985 = G__33994;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}
};
var i_at = function (id_mask,node,var_args){
var trans = null;
if (goog.isDef(var_args)) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return i_at__delegate.call(this, id_mask, node, trans);
};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__33995){
var id_mask = cljs.core.first(arglist__33995);
var node = cljs.core.first(cljs.core.next(arglist__33995));
var trans = cljs.core.rest(cljs.core.next(arglist__33995));
return i_at__delegate(id_mask, node, trans);
});
i_at.cljs$lang$arity$variadic = i_at__delegate;
return i_at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.at = (function() { 
var at__delegate = function (node,trans){
return cljs.core.apply.cljs$lang$arity$4(enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;
if (goog.isDef(var_args)) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return at__delegate.call(this, node, trans);
};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__33996){
var node = cljs.core.first(arglist__33996);
var trans = cljs.core.rest(arglist__33996);
return at__delegate(node, trans);
});
at.cljs$lang$arity$variadic = at__delegate;
return at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.from = (function() { 
var from__delegate = function (node,trans){
if(cljs.core._EQ_.cljs$lang$arity$2(1,cljs.core.count(trans)))
{return cljs.core.first(trans).call(null,node);
} else
{return cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$lang$arity$2((function (p__34003){
var vec__34004__34005 = p__34003;
var ky__34006 = cljs.core.nth.cljs$lang$arity$3(vec__34004__34005,0,null);
var sel__34007 = cljs.core.nth.cljs$lang$arity$3(vec__34004__34005,1,null);
var ext__34008 = cljs.core.nth.cljs$lang$arity$3(vec__34004__34005,2,null);
return cljs.core.PersistentVector.fromArray([ky__34006,(ext__34008.cljs$lang$arity$1 ? ext__34008.cljs$lang$arity$1(enfocus.core.css_select.cljs$lang$arity$3("",node,sel__34007)) : ext__34008.call(null,enfocus.core.css_select.cljs$lang$arity$3("",node,sel__34007)))], true);
}),cljs.core.partition.cljs$lang$arity$2(3,trans)));
}
};
var from = function (node,var_args){
var trans = null;
if (goog.isDef(var_args)) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return from__delegate.call(this, node, trans);
};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__34009){
var node = cljs.core.first(arglist__34009);
var trans = cljs.core.rest(arglist__34009);
return from__delegate(node, trans);
});
from.cljs$lang$arity$variadic = from__delegate;
return from;
})()
;
Text.prototype.domina$DomContent$ = true;
Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){
return cljs.core.PersistentVector.fromArray([content], true);
});
Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){
return content;
});
