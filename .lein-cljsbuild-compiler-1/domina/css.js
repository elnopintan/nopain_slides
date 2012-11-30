goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[0]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){
return sel.cljs$lang$arity$2(domina.css.root_element(),expr);
});
var sel__2 = (function (base,expr){
if((void 0 === domina.css.t34019))
{
/**
* @constructor
*/
domina.css.t34019 = (function (expr,base,sel,meta34020){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta34020 = meta34020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t34019.cljs$lang$type = true;
domina.css.t34019.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("domina.css/t34019");
});
domina.css.t34019.prototype.domina$DomContent$ = true;
domina.css.t34019.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__34022 = this;
return cljs.core.mapcat.cljs$lang$arity$2((function (p1__34010_SHARP_){
return domina.normalize_seq(goog.dom.query(this__34022.expr,p1__34010_SHARP_));
}),domina.nodes(this__34022.base));
});
domina.css.t34019.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__34023 = this;
return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapcat.cljs$lang$arity$2((function (p1__34011_SHARP_){
return domina.normalize_seq(goog.dom.query(this__34023.expr,p1__34011_SHARP_));
}),domina.nodes(this__34023.base))));
});
domina.css.t34019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34021){
var this__34024 = this;
return this__34024.meta34020;
});
domina.css.t34019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34021,meta34020){
var this__34025 = this;
return (new domina.css.t34019(this__34025.expr,this__34025.base,this__34025.sel,meta34020));
});
domina.css.t34019;
} else
{}
return (new domina.css.t34019(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case 1:
return sel__1.call(this,base);
case 2:
return sel__2.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
sel.cljs$lang$arity$1 = sel__1;
sel.cljs$lang$arity$2 = sel__2;
return sel;
})()
;
