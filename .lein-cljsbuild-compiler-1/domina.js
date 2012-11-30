goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__34026 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__34027 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__34028 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__34027,"caption":table_section_wrapper__34027,"optgroup":opt_wrapper__34026,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__34028,"thead":table_section_wrapper__34027,"th":cell_wrapper__34028,"option":opt_wrapper__34026,"tbody":table_section_wrapper__34027,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__34027});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___34041 = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));
var tbody__34045 = (((function (){var and__3937__auto____34042 = cljs.core._EQ_.cljs$lang$arity$2(domina.tag_name,"table");
if(and__3937__auto____34042)
{return no_tbody_QMARK___34041;
} else
{return and__3937__auto____34042;
}
})())?(function (){var and__3937__auto____34043 = div.firstChild;
if(cljs.core.truth_(and__3937__auto____34043))
{return div.firstChild.childNodes;
} else
{return and__3937__auto____34043;
}
})():(((function (){var and__3937__auto____34044 = cljs.core._EQ_.cljs$lang$arity$2(domina.start_wrap,"<table>");
if(and__3937__auto____34044)
{return no_tbody_QMARK___34041;
} else
{return and__3937__auto____34044;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__34046__34047 = cljs.core.seq(tbody__34045);
if(G__34046__34047)
{var child__34048 = cljs.core.first(G__34046__34047);
var G__34046__34049 = G__34046__34047;
while(true){
if((function (){var and__3937__auto____34050 = cljs.core._EQ_.cljs$lang$arity$2(child__34048.nodeName,"tbody");
if(and__3937__auto____34050)
{return cljs.core._EQ_.cljs$lang$arity$2(child__34048.childNodes.length,0);
} else
{return and__3937__auto____34050;
}
})())
{child__34048.parentNode.removeChild(child__34048);
} else
{}
var temp__4088__auto____34051 = cljs.core.next(G__34046__34049);
if(temp__4088__auto____34051)
{var G__34046__34052 = temp__4088__auto____34051;
{
var G__34053 = cljs.core.first(G__34046__34052);
var G__34054 = G__34046__34052;
child__34048 = G__34053;
G__34046__34049 = G__34054;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
domina.html_to_dom = (function html_to_dom(html){
var html__34068 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__34069 = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__34068)))].join('').toLowerCase();
var vec__34067__34070 = cljs.core._lookup.cljs$lang$arity$3(domina.wrap_map,tag_name__34069,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__34071 = cljs.core.nth.cljs$lang$arity$3(vec__34067__34070,0,null);
var start_wrap__34072 = cljs.core.nth.cljs$lang$arity$3(vec__34067__34070,1,null);
var end_wrap__34073 = cljs.core.nth.cljs$lang$arity$3(vec__34067__34070,2,null);
var div__34077 = (function (){var wrapper__34075 = (function (){var div__34074 = document.createElement("div");
div__34074.innerHTML = [cljs.core.str(start_wrap__34072),cljs.core.str(html__34068),cljs.core.str(end_wrap__34073)].join('');
return div__34074;
})();
var level__34076 = depth__34071;
while(true){
if((level__34076 > 0))
{{
var G__34079 = wrapper__34075.lastChild;
var G__34080 = (level__34076 - 1);
wrapper__34075 = G__34079;
level__34076 = G__34080;
continue;
}
} else
{return wrapper__34075;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div__34077,html__34068);
} else
{}
if(cljs.core.truth_((function (){var and__3937__auto____34078 = cljs.core.not(domina.support.leading_whitespace_QMARK_);
if(and__3937__auto____34078)
{return cljs.core.re_find(domina.re_leading_whitespace,html__34068);
} else
{return and__3937__auto____34078;
}
})()))
{domina.restore_leading_whitespace_BANG_(div__34077,html__34068);
} else
{}
return div__34077.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3937__auto____34085 = content;
if(and__3937__auto____34085)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3937__auto____34085;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2396__auto____34086 = (((content == null))?null:content);
return (function (){var or__3939__auto____34087 = (domina.nodes[goog.typeOf(x__2396__auto____34086)]);
if(or__3939__auto____34087)
{return or__3939__auto____34087;
} else
{var or__3939__auto____34088 = (domina.nodes["_"]);
if(or__3939__auto____34088)
{return or__3939__auto____34088;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3937__auto____34093 = nodeseq;
if(and__3937__auto____34093)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3937__auto____34093;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2396__auto____34094 = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3939__auto____34095 = (domina.single_node[goog.typeOf(x__2396__auto____34094)]);
if(or__3939__auto____34095)
{return or__3939__auto____34095;
} else
{var or__3939__auto____34096 = (domina.single_node["_"]);
if(or__3939__auto____34096)
{return or__3939__auto____34096;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3937__auto____34098 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3937__auto____34098))
{return !(cljs.core._EQ_.cljs$lang$arity$2(window.console,undefined));
} else
{return and__3937__auto____34098;
}
})()))
{return console.log(cljs.core.apply.cljs$lang$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__34099){
var mesg = cljs.core.seq(arglist__34099);;
return log_debug__delegate(mesg);
});
log_debug.cljs$lang$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.cljs$lang$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__34100){
var mesg = cljs.core.seq(arglist__34100);;
return log__delegate(mesg);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t34108))
{
/**
* @constructor
*/
domina.t34108 = (function (class_name,by_class,meta34109){
this.class_name = class_name;
this.by_class = by_class;
this.meta34109 = meta34109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t34108.cljs$lang$type = true;
domina.t34108.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("domina/t34108");
});
domina.t34108.prototype.domina$DomContent$ = true;
domina.t34108.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__34111 = this;
return domina.normalize_seq(goog.dom.getElementsByClass(cljs.core.name(this__34111.class_name)));
});
domina.t34108.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__34112 = this;
return domina.normalize_seq(goog.dom.getElementByClass(cljs.core.name(this__34112.class_name)));
});
domina.t34108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34110){
var this__34113 = this;
return this__34113.meta34109;
});
domina.t34108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34110,meta34109){
var this__34114 = this;
return (new domina.t34108(this__34114.class_name,this__34114.by_class,meta34109));
});
domina.t34108;
} else
{}
return (new domina.t34108(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.cljs$lang$arity$1(cljs.core.mapcat.cljs$lang$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.cljs$lang$arity$2((function (p1__34115_SHARP_){
return p1__34115_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning(goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning((function (p1__34116_SHARP_,p2__34117_SHARP_){
return goog.dom.insertChildAt(p1__34116_SHARP_,p2__34117_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning((function (p1__34119_SHARP_,p2__34118_SHARP_){
return goog.dom.insertSiblingBefore(p2__34118_SHARP_,p1__34119_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning((function (p1__34121_SHARP_,p2__34120_SHARP_){
return goog.dom.insertSiblingAfter(p2__34120_SHARP_,p1__34121_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning((function (p1__34123_SHARP_,p2__34122_SHARP_){
return goog.dom.replaceNode(p2__34122_SHARP_,p1__34123_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__34125 = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));
if(cljs.core.truth_(clojure.string.blank_QMARK_(s__34125)))
{return null;
} else
{return s__34125;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__34132__34133 = cljs.core.seq(domina.nodes(content));
if(G__34132__34133)
{var n__34134 = cljs.core.first(G__34132__34133);
var G__34132__34135 = G__34132__34133;
while(true){
goog.style.setStyle(n__34134,cljs.core.name(name),cljs.core.apply.cljs$lang$arity$2(cljs.core.str,value));
var temp__4088__auto____34136 = cljs.core.next(G__34132__34135);
if(temp__4088__auto____34136)
{var G__34132__34137 = temp__4088__auto____34136;
{
var G__34138 = cljs.core.first(G__34132__34137);
var G__34139 = G__34132__34137;
n__34134 = G__34138;
G__34132__34135 = G__34139;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__34140){
var content = cljs.core.first(arglist__34140);
var name = cljs.core.first(cljs.core.next(arglist__34140));
var value = cljs.core.rest(cljs.core.next(arglist__34140));
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$lang$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var G__34147__34148 = cljs.core.seq(domina.nodes(content));
if(G__34147__34148)
{var n__34149 = cljs.core.first(G__34147__34148);
var G__34147__34150 = G__34147__34148;
while(true){
n__34149.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$lang$arity$2(cljs.core.str,value));
var temp__4088__auto____34151 = cljs.core.next(G__34147__34150);
if(temp__4088__auto____34151)
{var G__34147__34152 = temp__4088__auto____34151;
{
var G__34153 = cljs.core.first(G__34147__34152);
var G__34154 = G__34147__34152;
n__34149 = G__34153;
G__34147__34150 = G__34154;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__34155){
var content = cljs.core.first(arglist__34155);
var name = cljs.core.first(cljs.core.next(arglist__34155));
var value = cljs.core.rest(cljs.core.next(arglist__34155));
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$lang$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var G__34162__34163 = cljs.core.seq(domina.nodes(content));
if(G__34162__34163)
{var n__34164 = cljs.core.first(G__34162__34163);
var G__34162__34165 = G__34162__34163;
while(true){
n__34164.removeAttribute(cljs.core.name(name));
var temp__4088__auto____34166 = cljs.core.next(G__34162__34165);
if(temp__4088__auto____34166)
{var G__34162__34167 = temp__4088__auto____34166;
{
var G__34168 = cljs.core.first(G__34162__34167);
var G__34169 = G__34162__34167;
n__34164 = G__34168;
G__34162__34165 = G__34169;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.cljs$lang$arity$3((function (acc,pair){
var vec__34175__34176 = pair.split(/\s*:\s*/);
var k__34177 = cljs.core.nth.cljs$lang$arity$3(vec__34175__34176,0,null);
var v__34178 = cljs.core.nth.cljs$lang$arity$3(vec__34175__34176,1,null);
if(cljs.core.truth_((function (){var and__3937__auto____34179 = k__34177;
if(cljs.core.truth_(and__3937__auto____34179))
{return v__34178;
} else
{return and__3937__auto____34179;
}
})()))
{return cljs.core.assoc.cljs$lang$arity$3(acc,cljs.core.keyword.cljs$lang$arity$1(k__34177.toLowerCase()),v__34178);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__34182 = domina.attr(content,"style");
if(cljs.core.string_QMARK_(style__34182))
{return domina.parse_style_attributes(style__34182);
} else
{if(cljs.core.truth_(style__34182.cssText))
{return domina.parse_style_attributes(style__34182.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__34188 = domina.single_node(content);
var attrs__34189 = node__34188.attributes;
return cljs.core.reduce.cljs$lang$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$lang$arity$2((function (p1__34180_SHARP_){
var attr__34190 = attrs__34189.item(p1__34180_SHARP_);
var value__34191 = attr__34190.nodeValue;
if((function (){var and__3937__auto____34192 = cljs.core.not_EQ_.cljs$lang$arity$2(null,value__34191);
if(and__3937__auto____34192)
{return cljs.core.not_EQ_.cljs$lang$arity$2("",value__34191);
} else
{return and__3937__auto____34192;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.cljs$lang$arity$1(attr__34190.nodeName.toLowerCase())],[attr__34190.nodeValue]);
} else
{return null;
}
}),cljs.core.range.cljs$lang$arity$1(attrs__34189.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__34212__34213 = cljs.core.seq(styles);
if(G__34212__34213)
{var G__34215__34217 = cljs.core.first(G__34212__34213);
var vec__34216__34218 = G__34215__34217;
var name__34219 = cljs.core.nth.cljs$lang$arity$3(vec__34216__34218,0,null);
var value__34220 = cljs.core.nth.cljs$lang$arity$3(vec__34216__34218,1,null);
var G__34212__34221 = G__34212__34213;
var G__34215__34222 = G__34215__34217;
var G__34212__34223 = G__34212__34221;
while(true){
var vec__34224__34225 = G__34215__34222;
var name__34226 = cljs.core.nth.cljs$lang$arity$3(vec__34224__34225,0,null);
var value__34227 = cljs.core.nth.cljs$lang$arity$3(vec__34224__34225,1,null);
var G__34212__34228 = G__34212__34223;
domina.set_style_BANG_.cljs$lang$arity$variadic(content,name__34226,cljs.core.array_seq([value__34227], 0));
var temp__4088__auto____34229 = cljs.core.next(G__34212__34228);
if(temp__4088__auto____34229)
{var G__34212__34230 = temp__4088__auto____34229;
{
var G__34231 = cljs.core.first(G__34212__34230);
var G__34232 = G__34212__34230;
G__34215__34222 = G__34231;
G__34212__34223 = G__34232;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__34252__34253 = cljs.core.seq(attrs);
if(G__34252__34253)
{var G__34255__34257 = cljs.core.first(G__34252__34253);
var vec__34256__34258 = G__34255__34257;
var name__34259 = cljs.core.nth.cljs$lang$arity$3(vec__34256__34258,0,null);
var value__34260 = cljs.core.nth.cljs$lang$arity$3(vec__34256__34258,1,null);
var G__34252__34261 = G__34252__34253;
var G__34255__34262 = G__34255__34257;
var G__34252__34263 = G__34252__34261;
while(true){
var vec__34264__34265 = G__34255__34262;
var name__34266 = cljs.core.nth.cljs$lang$arity$3(vec__34264__34265,0,null);
var value__34267 = cljs.core.nth.cljs$lang$arity$3(vec__34264__34265,1,null);
var G__34252__34268 = G__34252__34263;
domina.set_attr_BANG_.cljs$lang$arity$variadic(content,name__34266,cljs.core.array_seq([value__34267], 0));
var temp__4088__auto____34269 = cljs.core.next(G__34252__34268);
if(temp__4088__auto____34269)
{var G__34252__34270 = temp__4088__auto____34269;
{
var G__34271 = cljs.core.first(G__34252__34270);
var G__34272 = G__34252__34270;
G__34255__34262 = G__34271;
G__34252__34263 = G__34272;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__34279__34280 = cljs.core.seq(domina.nodes(content));
if(G__34279__34280)
{var node__34281 = cljs.core.first(G__34279__34280);
var G__34279__34282 = G__34279__34280;
while(true){
goog.dom.classes.add(node__34281,class$);
var temp__4088__auto____34283 = cljs.core.next(G__34279__34282);
if(temp__4088__auto____34283)
{var G__34279__34284 = temp__4088__auto____34283;
{
var G__34285 = cljs.core.first(G__34279__34284);
var G__34286 = G__34279__34284;
node__34281 = G__34285;
G__34279__34282 = G__34286;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__34293__34294 = cljs.core.seq(domina.nodes(content));
if(G__34293__34294)
{var node__34295 = cljs.core.first(G__34293__34294);
var G__34293__34296 = G__34293__34294;
while(true){
goog.dom.classes.remove(node__34295,class$);
var temp__4088__auto____34297 = cljs.core.next(G__34293__34296);
if(temp__4088__auto____34297)
{var G__34293__34298 = temp__4088__auto____34297;
{
var G__34299 = cljs.core.first(G__34293__34298);
var G__34300 = G__34293__34298;
node__34295 = G__34299;
G__34293__34296 = G__34300;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes__34308 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$lang$arity$2(" ",classes):classes);
var G__34309__34310 = cljs.core.seq(domina.nodes(content));
if(G__34309__34310)
{var node__34311 = cljs.core.first(G__34309__34310);
var G__34309__34312 = G__34309__34310;
while(true){
goog.dom.classes.set(node__34311,classes__34308);
var temp__4088__auto____34313 = cljs.core.next(G__34309__34312);
if(temp__4088__auto____34313)
{var G__34309__34314 = temp__4088__auto____34313;
{
var G__34315 = cljs.core.first(G__34309__34314);
var G__34316 = G__34309__34314;
node__34311 = G__34315;
G__34309__34312 = G__34316;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__34323__34324 = cljs.core.seq(domina.nodes(content));
if(G__34323__34324)
{var node__34325 = cljs.core.first(G__34323__34324);
var G__34323__34326 = G__34323__34324;
while(true){
goog.dom.setTextContent(node__34325,value);
var temp__4088__auto____34327 = cljs.core.next(G__34323__34326);
if(temp__4088__auto____34327)
{var G__34323__34328 = temp__4088__auto____34327;
{
var G__34329 = cljs.core.first(G__34323__34328);
var G__34330 = G__34323__34328;
node__34325 = G__34329;
G__34323__34326 = G__34330;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__34337__34338 = cljs.core.seq(domina.nodes(content));
if(G__34337__34338)
{var node__34339 = cljs.core.first(G__34337__34338);
var G__34337__34340 = G__34337__34338;
while(true){
goog.dom.forms.setValue(node__34339,value);
var temp__4088__auto____34341 = cljs.core.next(G__34337__34340);
if(temp__4088__auto____34341)
{var G__34337__34342 = temp__4088__auto____34341;
{
var G__34343 = cljs.core.first(G__34337__34342);
var G__34344 = G__34337__34342;
node__34339 = G__34343;
G__34337__34340 = G__34344;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK___34361 = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___34362 = cljs.core.re_find(domina.re_leading_whitespace,html_string);
var tag_name__34363 = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___34364 = cljs.core.contains_QMARK_(domina.wrap_map,tag_name__34363);
if(cljs.core.truth_((function (){var and__3937__auto____34365 = allows_inner_html_QMARK___34361;
if(and__3937__auto____34365)
{var and__3937__auto____34367 = (function (){var or__3939__auto____34366 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3939__auto____34366))
{return or__3939__auto____34366;
} else
{return cljs.core.not(leading_whitespace_QMARK___34362);
}
})();
if(cljs.core.truth_(and__3937__auto____34367))
{return !(special_tag_QMARK___34364);
} else
{return and__3937__auto____34367;
}
} else
{return and__3937__auto____34365;
}
})()))
{var value__34368 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__34371__34372 = cljs.core.seq(domina.nodes(content));
if(G__34371__34372)
{var node__34373 = cljs.core.first(G__34371__34372);
var G__34371__34374 = G__34371__34372;
while(true){
goog.events.removeAll(node__34373);
node__34373.innerHTML = value__34368;
var temp__4088__auto____34375 = cljs.core.next(G__34371__34374);
if(temp__4088__auto____34375)
{var G__34371__34376 = temp__4088__auto____34375;
{
var G__34377 = cljs.core.first(G__34371__34376);
var G__34378 = G__34371__34376;
node__34373 = G__34377;
G__34371__34374 = G__34378;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e34369){if(cljs.core.instance_QMARK_(domina.Exception,e34369))
{var e__34370 = e34369;
domina.replace_children_BANG_(content,value__34368);
} else
{if("\uFDD0'else")
{throw e34369;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_(inner_content))
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.cljs$lang$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m__34384 = domina.single_node(node).__domina_data;
var value__34385 = (cljs.core.truth_(m__34384)?cljs.core._lookup.cljs$lang$arity$3(m__34384,key,null):null);
if(cljs.core.truth_((function (){var and__3937__auto____34386 = bubble;
if(cljs.core.truth_(and__3937__auto____34386))
{return (value__34385 == null);
} else
{return and__3937__auto____34386;
}
})()))
{var temp__4088__auto____34387 = domina.single_node(node).parentNode;
if(cljs.core.truth_(temp__4088__auto____34387))
{var parent__34388 = temp__4088__auto____34387;
return get_data.cljs$lang$arity$3(parent__34388,key,true);
} else
{return null;
}
} else
{return value__34385;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw('Invalid arity: ' + arguments.length);
};
get_data.cljs$lang$arity$2 = get_data__2;
get_data.cljs$lang$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m__34394 = (function (){var or__3939__auto____34393 = domina.single_node(node).__domina_data;
if(cljs.core.truth_(or__3939__auto____34393))
{return or__3939__auto____34393;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$lang$arity$3(m__34394,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__34406 = domina.nodes(parent_content);
var children__34407 = domina.nodes(child_content);
var first_child__34415 = (function (){var frag__34408 = document.createDocumentFragment();
var G__34409__34410 = cljs.core.seq(children__34407);
if(G__34409__34410)
{var child__34411 = cljs.core.first(G__34409__34410);
var G__34409__34412 = G__34409__34410;
while(true){
frag__34408.appendChild(child__34411);
var temp__4088__auto____34413 = cljs.core.next(G__34409__34412);
if(temp__4088__auto____34413)
{var G__34409__34414 = temp__4088__auto____34413;
{
var G__34417 = cljs.core.first(G__34409__34414);
var G__34418 = G__34409__34414;
child__34411 = G__34417;
G__34409__34412 = G__34418;
continue;
}
} else
{}
break;
}
} else
{}
return frag__34408;
})();
var other_children__34416 = cljs.core.doall.cljs$lang$arity$1(cljs.core.repeatedly.cljs$lang$arity$2((cljs.core.count(parents__34406) - 1),(function (){
return first_child__34415.cloneNode(true);
})));
if(cljs.core.seq(parents__34406))
{(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core.first(parents__34406),first_child__34415) : f.call(null,cljs.core.first(parents__34406),first_child__34415));
return cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$3((function (p1__34389_SHARP_,p2__34390_SHARP_){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(p1__34389_SHARP_,p2__34390_SHARP_) : f.call(null,p1__34389_SHARP_,p2__34390_SHARP_));
}),cljs.core.rest(parents__34406),other_children__34416));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.cljs$lang$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$lang$arity$2(nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_item.cljs$lang$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$lang$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.cljs$lang$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$lang$arity$2(nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_array_ref.cljs$lang$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$lang$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.cljs$lang$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$lang$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3937__auto____34420 = obj;
if(cljs.core.truth_(and__3937__auto____34420))
{return obj.length;
} else
{return and__3937__auto____34420;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__34424__34425 = list_thing;
if(G__34424__34425)
{if((function (){var or__3939__auto____34426 = (G__34424__34425.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3939__auto____34426)
{return or__3939__auto____34426;
} else
{return G__34424__34425.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__34424__34425.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__34424__34425);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__34424__34425);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if("\uFDD0'default")
{return cljs.core.seq(cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__34427__34428 = content;
if(G__34427__34428)
{if((function (){var or__3939__auto____34429 = (G__34427__34428.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3939__auto____34429)
{return or__3939__auto____34429;
} else
{return G__34427__34428.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__34427__34428.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__34427__34428);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__34427__34428);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if("\uFDD0'default")
{return cljs.core.seq(cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__34430__34431 = content;
if(G__34430__34431)
{if((function (){var or__3939__auto____34432 = (G__34430__34431.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3939__auto____34432)
{return or__3939__auto____34432;
} else
{return G__34430__34431.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__34430__34431.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__34430__34431);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__34430__34431);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if("\uFDD0'default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.cljs$lang$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist(nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$lang$arity$2(nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist(nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$lang$arity$2(nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist(coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$lang$arity$2(coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}
